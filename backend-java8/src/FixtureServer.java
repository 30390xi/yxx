import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpServer;
import java.io.IOException;
import java.net.InetSocketAddress;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;

public class FixtureServer {
    private final Path root;
    private final Map<String, Path> routes = new HashMap<>();
    private final Map<String, Path> ids = new HashMap<>();

    private FixtureServer(Path root) throws IOException {
        this.root = root;
        for (String line : Files.readAllLines(root.resolve("fixtures/index.tsv"), StandardCharsets.UTF_8)) {
            String[] columns = line.split("\\t", -1);
            if (columns.length != 5) throw new IOException("Invalid fixture index");
            Path fixture = root.resolve("fixtures").resolve(columns[4]).normalize();
            if (!fixture.startsWith(root.resolve("fixtures"))) throw new IOException("Invalid fixture path");
            ids.put(columns[0], fixture);
            routes.put(columns[1] + "|" + columns[2] + "|" + columns[3], fixture);
        }
    }

    private static String canonicalQuery(String raw) throws IOException {
        if (raw == null || raw.isEmpty()) return "";
        List<String> pairs = new ArrayList<>();
        for (String part : raw.split("&", -1)) {
            if (part.isEmpty()) continue;
            String[] kv = part.split("=", 2);
            String key = URLDecoder.decode(kv[0], "UTF-8");
            String value = URLDecoder.decode(kv.length == 2 ? kv[1] : "", "UTF-8");
            pairs.add(java.net.URLEncoder.encode(key, "UTF-8") + "=" + java.net.URLEncoder.encode(value, "UTF-8"));
        }
        Collections.sort(pairs);
        return String.join("&", pairs);
    }

    private static void send(HttpExchange ex, int status, String type, byte[] body) throws IOException {
        ex.getResponseHeaders().set("Content-Type", type + "; charset=utf-8");
        ex.sendResponseHeaders(status, body.length);
        try (java.io.OutputStream out = ex.getResponseBody()) { out.write(body); }
    }

    private static void json(HttpExchange ex, int status, String body) throws IOException {
        send(ex, status, "application/json", body.getBytes(StandardCharsets.UTF_8));
    }

    private static byte[] readLimited(HttpExchange ex, int max) throws IOException {
        java.io.ByteArrayOutputStream out = new java.io.ByteArrayOutputStream();
        byte[] buf = new byte[4096];
        int n;
        while ((n = ex.getRequestBody().read(buf)) != -1) {
            if (out.size() + n > max) throw new IOException("Body too large");
            out.write(buf, 0, n);
        }
        return out.toByteArray();
    }

    private void handle(HttpExchange ex) throws IOException {
        String path = ex.getRequestURI().getPath();
        String method = ex.getRequestMethod();
        try {
            if (method.equals("OPTIONS")) { send(ex, 204, "text/plain", new byte[0]); return; }
            if (path.equals("/admin") || path.equals("/admin/")) {
                send(ex, 200, "text/html", Files.readAllBytes(root.resolve("admin.html")));
                return;
            }
            if (path.equals("/admin/api/fixtures") && method.equals("GET")) {
                send(ex, 200, "application/json", Files.readAllBytes(root.resolve("fixtures/index.json")));
                return;
            }
            if (path.startsWith("/admin/api/fixture/")) {
                String id = path.substring("/admin/api/fixture/".length());
                Path fixture = ids.get(id);
                if (fixture == null) { json(ex, 404, "{\"error\":\"Unknown fixture\"}"); return; }
                if (method.equals("GET")) {
                    send(ex, 200, "application/json", Files.readAllBytes(fixture));
                    return;
                }
                if (method.equals("PUT")) {
                    byte[] data = readLimited(ex, 2 * 1024 * 1024);
                    String input = new String(data, StandardCharsets.UTF_8);
                    ScriptEngine parser = new ScriptEngineManager().getEngineByName("JavaScript");
                    if (parser == null) throw new IllegalStateException("Java 8 JavaScript parser unavailable");
                    parser.put("input", input);
                    parser.eval("JSON.parse(input)");
                    Files.write(fixture, data);
                    json(ex, 200, "{\"saved\":true}");
                    return;
                }
                json(ex, 405, "{\"error\":\"Method not allowed\"}");
                return;
            }
            Path fixture = routes.get(method + "|" + path + "|" + canonicalQuery(ex.getRequestURI().getRawQuery()));
            if (fixture != null) {
                send(ex, 200, "application/json", Files.readAllBytes(fixture));
                return;
            }
            json(ex, 404, "{\"code\":404,\"data\":null,\"msg\":\"No recorded fixture\",\"success\":false}");
        } catch (javax.script.ScriptException e) {
            json(ex, 400, "{\"error\":\"Invalid JSON\"}");
        } catch (Exception e) {
            System.err.println(e.getClass().getSimpleName() + ": " + e.getMessage());
            json(ex, 500, "{\"error\":\"Server error\"}");
        }
    }

    public static void main(String[] args) throws Exception {
        int port = args.length > 0 ? Integer.parseInt(args[0]) : 8787;
        Path root = Paths.get(".").toAbsolutePath().normalize();
        FixtureServer app = new FixtureServer(root);
        HttpServer server = HttpServer.create(new InetSocketAddress("127.0.0.1", port), 0);
        server.createContext("/", app::handle);
        server.start();
        System.out.println("Fixture API: http://127.0.0.1:" + port + "/admin");
        System.out.println("Loaded " + app.routes.size() + " recorded public responses");
    }
}
