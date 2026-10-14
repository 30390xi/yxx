import com.sun.net.httpserver.HttpExchange;
import java.io.IOException;
import java.io.OutputStream;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardOpenOption;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;

/** Local implementation of the observed Xiao Qi request and streaming response contract. */
final class AiChatService {
    private final Path root;
    private final Path historyFile;
    private final Path feedbackFile;
    private final List<Message> messages = new ArrayList<>();
    private final Map<String, String> sessions = new HashMap<>();

    AiChatService(Path root) throws Exception {
        this.root = root;
        historyFile = root.resolve("fixtures/ai-history.jsonl");
        feedbackFile = root.resolve("fixtures/ai-feedback.jsonl");
        if (Files.exists(historyFile)) {
            for (String line : Files.readAllLines(historyFile, StandardCharsets.UTF_8)) {
                try {
                    Map<String, Object> data = parse(line);
                    messages.add(new Message(str(data.get("openId")), str(data.get("sessionId")),
                        number(data.get("type"), 0), str(data.get("content")), strings(data.get("suggestions"))));
                } catch (Exception ignored) { /* Ignore an incomplete final line after a shutdown. */ }
            }
        }
    }

    boolean handle(HttpExchange ex) throws Exception {
        String path = ex.getRequestURI().getPath();
        String method = ex.getRequestMethod();
        if (path.equals("/base/app/v1/sysParam/getSysParamForApp") && method.equals("POST")) {
            List<String> keys = strings(parse(read(ex)).get("keyList"));
            if (keys.size() == 1 && keys.contains("XIAOQI_MENU")) {
                send(ex, 200, "{\"code\":1,\"msg\":\"success\",\"data\":{\"XIAOQI_MENU\":{\"paramValue\":\"{}\"}}}");
            } else if (keys.size() == 4 && keys.contains("GRAY_THEME_FLAG") && keys.contains("WX_VERSION")
                && keys.contains("HOME_PANDA_IS_SHOW") && keys.contains("XIAOQI_VERSION")) {
                send(ex, 200, new String(Files.readAllBytes(root.resolve("fixtures/d3f6bd43589d6ca6.json")), StandardCharsets.UTF_8));
            } else {
                send(ex, 400, "{\"code\":400,\"msg\":\"Unknown system parameters\",\"data\":null}");
            }
            return true;
        }
        if (path.equals("/ai/planCard/queryTopRecent") && method.equals("GET")) {
            send(ex, 200, "{\"code\":1,\"msg\":\"success\",\"data\":null}");
            return true;
        }
        if ((path.equals("/ai/app/dialogue/add") || path.equals("/ai/app/dialogue/delete")) && method.equals("POST")) {
            String body = read(ex);
            parse(body);
            synchronized (this) {
                Files.write(feedbackFile, ("{\"action\":" + quote(path.endsWith("/add") ? "add" : "delete")
                    + ",\"request\":" + body + "}\n").getBytes(StandardCharsets.UTF_8),
                    StandardOpenOption.CREATE, StandardOpenOption.APPEND);
            }
            send(ex, 200, "{\"code\":1,\"msg\":\"success\",\"data\":null}");
            return true;
        }
        if (path.equals("/ai/aiEscort/session/create") && method.equals("POST")) {
            Map<String, Object> request = parse(read(ex));
            String id = UUID.randomUUID().toString();
            synchronized (this) { sessions.put(id, str(request.get("openId"))); }
            send(ex, 200, "{\"code\":1,\"msg\":\"success\",\"data\":" + quote(id) + "}");
            return true;
        }
        if (path.equals("/ai/aiEscort/dialogue/record") && method.equals("GET")) {
            Map<String, String> query = query(ex.getRequestURI().getRawQuery());
            String openId = query.getOrDefault("openId", "");
            int page = Math.max(1, Math.min(10000, integer(query.get("pageOn"), 1)));
            int size = Math.max(1, Math.min(100, integer(query.get("pageSize"), 30)));
            List<Message> found = new ArrayList<>();
            synchronized (this) {
                for (Message message : messages) if (message.openId.equals(openId)) found.add(message);
            }
            Collections.reverse(found);
            int total = found.size();
            int from = Math.min(total, (page - 1) * size), to = Math.min(total, from + size);
            StringBuilder result = new StringBuilder("{\"code\":1,\"msg\":\"success\",\"data\":{\"total\":").append(total)
                .append(",\"current\":").append(page).append(",\"pages\":")
                .append((total + size - 1) / size).append(",\"records\":[");
            for (int i = from; i < to; i++) {
                Message message = found.get(i);
                if (i > from) result.append(',');
                result.append("{\"type\":").append(message.type).append(",\"content\":")
                    .append(quote(message.content));
                if (!message.suggestions.isEmpty()) result.append(",\"deriveIssue\":{\"data\":")
                    .append(array(message.suggestions)).append('}');
                result.append('}');
            }
            send(ex, 200, result.append("]}}" ).toString());
            return true;
        }
        if (path.equals("/ai/app/escort/ai/chat") && method.equals("POST")) {
            Map<String, Object> request = parse(read(ex));
            String question = str(request.get("question")).trim();
            String openId = str(request.get("userId"));
            String sessionId = str(request.get("sessionId"));
            if (question.isEmpty() || sessionId.isEmpty()) {
                send(ex, 400, "{\"code\":0,\"msg\":\"question and sessionId are required\"}");
                return true;
            }
            String answer = answer(question);
            List<String> suggestions = followups(question);
            synchronized (this) {
                append(new Message(openId, sessionId, 1, question, Collections.<String>emptyList()));
                append(new Message(openId, sessionId, 0, answer, suggestions));
            }
            ex.getResponseHeaders().set("Content-Type", "application/octet-stream");
            ex.sendResponseHeaders(200, 0);
            try (OutputStream out = ex.getResponseBody()) {
                String frame = "{\"extend\":{\"type\":0,\"code\":\"c001\"},\"data\":" + quote(answer) + "}^";
                out.write(frame.getBytes(StandardCharsets.UTF_8));
                if (!suggestions.isEmpty()) {
                    String next = "{\"extend\":{\"type\":0,\"code\":\"q001\"},\"data\":" + array(suggestions) + "}^";
                    out.write(next.getBytes(StandardCharsets.UTF_8));
                }
                out.flush();
            }
            return true;
        }
        return false;
    }

    private void append(Message message) throws IOException {
        messages.add(message);
        String line = "{\"openId\":" + quote(message.openId) + ",\"sessionId\":" + quote(message.sessionId)
            + ",\"type\":" + message.type + ",\"content\":" + quote(message.content)
            + ",\"suggestions\":" + array(message.suggestions) + "}\n";
        Files.write(historyFile, line.getBytes(StandardCharsets.UTF_8), StandardOpenOption.CREATE, StandardOpenOption.APPEND);
    }

    private static String answer(String question) {
        if (question.contains("天气")) return "请告诉我您要去的城市或景区，以及出行日期。我可以帮您整理行前需要关注的天气因素。";
        if (question.contains("客服电话") || question.contains("联系电话")) return "请告诉我具体景区名称，我再帮您查找对应的咨询电话。";
        if (question.contains("附近景区") || question.contains("附近景点")) return "请提供您所在的城市或附近地标，我可以按位置推荐景区。";
        if (question.contains("景区测评") || question.contains("景区评测")) return "请告诉我想了解的景区名称，我可以先整理景区亮点和游玩注意事项。";
        if (question.contains("卫生间") || question.contains("厕所")) return "请告诉我所在景区或附近地标，我可以帮您缩小公共卫生间的查找范围。";
        if (question.contains("兵马俑")) return "秦始皇帝陵博物院是陕西的代表性景区。您可以在小程序中搜索“兵马俑”查看景区详情、门票和出行信息。您想了解交通、游览路线，还是门票？";
        if (question.contains("城墙")) return "西安城墙适合步行或骑行游览。建议先查看景区详情中的开放信息，再按您所在的位置选择入口。您想了解路线、门票，还是周边景点？";
        if (question.contains("华山")) return "华山游览通常需要根据体力和天气安排路线。可先查看景区详情和门票，再确定登山或索道方案。您计划哪天出行？";
        if (question.contains("美食") || question.contains("吃")) return "陕西旅行可以从当地特色美食和景区周边餐饮开始规划。告诉我目的地或口味偏好，我可以帮您缩小选择范围。";
        if (question.contains("路线") || question.contains("攻略") || question.contains("行程")) return "可以帮您梳理陕西游玩路线。请告诉我出发地、目的地、出行天数和想去的景点，我会按顺序整理建议。";
        if (question.contains("你好") || question.contains("您好")) return "你好，我是小七，您的 AI 旅行助手。可以问我陕西景区、路线、美食和出行安排。";
        return "我可以帮您查询陕西景区、整理游览路线和出行建议。关于“" + question + "”，请补充目的地或出行时间，我会给您更贴近行程的回答。";
    }

    private static List<String> followups(String question) {
        if (question.contains("城墙")) return java.util.Arrays.asList("西安城墙门票", "西安城墙附近还有什么景点");
        if (question.contains("天气")) return java.util.Arrays.asList("西安出行注意什么", "下雨天怎么玩");
        if (question.contains("路线") || question.contains("攻略")) return java.util.Arrays.asList("西安一日游路线", "陕西有哪些热门景区");
        return java.util.Arrays.asList("陕西有哪些热门景区", "西安一日游怎么玩");
    }

    private static List<String> strings(Object value) {
        List<String> out = new ArrayList<>();
        if (value instanceof List) for (Object item : (List<?>) value) out.add(str(item));
        return out;
    }

    private static String array(List<String> values) {
        StringBuilder out = new StringBuilder("[");
        for (String value : values) {
            if (out.length() > 1) out.append(',');
            out.append(quote(value));
        }
        return out.append(']').toString();
    }

    private static Map<String, Object> parse(String json) throws Exception {
        ScriptEngine engine = new ScriptEngineManager().getEngineByName("JavaScript");
        if (engine == null) throw new IllegalStateException("Java 8 JavaScript engine unavailable");
        engine.put("input", json);
        Object value = engine.eval("Java.asJSONCompatible(JSON.parse(input))");
        if (!(value instanceof Map)) throw new IllegalArgumentException("Expected JSON object");
        @SuppressWarnings("unchecked") Map<String, Object> result = (Map<String, Object>) value;
        return result;
    }

    private static String read(HttpExchange ex) throws IOException {
        byte[] buf = new byte[4096];
        java.io.ByteArrayOutputStream out = new java.io.ByteArrayOutputStream();
        int size;
        while ((size = ex.getRequestBody().read(buf)) != -1) {
            if (out.size() + size > 65536) throw new IOException("AI request too large");
            out.write(buf, 0, size);
        }
        return new String(out.toByteArray(), StandardCharsets.UTF_8);
    }

    private static Map<String, String> query(String raw) throws Exception {
        Map<String, String> result = new HashMap<>();
        if (raw != null) for (String part : raw.split("&")) {
            String[] pair = part.split("=", 2);
            result.put(URLDecoder.decode(pair[0], "UTF-8"), URLDecoder.decode(pair.length > 1 ? pair[1] : "", "UTF-8"));
        }
        return result;
    }

    private static int integer(String value, int fallback) {
        try { return Integer.parseInt(value); } catch (Exception ignored) { return fallback; }
    }

    private static int number(Object value, int fallback) {
        return value instanceof Number ? ((Number) value).intValue() : fallback;
    }

    private static String str(Object value) { return value == null ? "" : String.valueOf(value); }

    private static String quote(String value) {
        StringBuilder out = new StringBuilder("\"");
        for (int i = 0; i < value.length(); i++) {
            char c = value.charAt(i);
            if (c == '"' || c == '\\') out.append('\\').append(c);
            else if (c == '\n') out.append("\\n");
            else if (c == '\r') out.append("\\r");
            else if (c == '\t') out.append("\\t");
            else if (c < 32) out.append(String.format("\\u%04x", (int) c));
            else out.append(c);
        }
        return out.append('"').toString();
    }

    private static void send(HttpExchange ex, int status, String body) throws IOException {
        byte[] bytes = body.getBytes(StandardCharsets.UTF_8);
        ex.getResponseHeaders().set("Content-Type", "application/json; charset=utf-8");
        ex.sendResponseHeaders(status, bytes.length);
        try (OutputStream out = ex.getResponseBody()) { out.write(bytes); }
    }

    private static final class Message {
        final String openId, sessionId, content;
        final List<String> suggestions;
        final int type;
        Message(String openId, String sessionId, int type, String content, List<String> suggestions) {
            this.openId = openId; this.sessionId = sessionId; this.type = type; this.content = content;
            this.suggestions = suggestions;
        }
    }
}
