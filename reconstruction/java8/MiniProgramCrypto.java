import java.nio.charset.StandardCharsets;
import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;

/** A Java 8 equivalent of the packaged CryptoJS AES-ECB/PKCS7 helper. */
public final class MiniProgramCrypto {
    private MiniProgramCrypto() {}

    /** Pass the exact JSON.stringify output as json; this method does not serialize objects. */
    public static String encryptJsonHex(String json, String key) throws Exception {
        byte[] keyBytes = key.getBytes(StandardCharsets.UTF_8);
        if (keyBytes.length != 16 && keyBytes.length != 24 && keyBytes.length != 32) {
            throw new IllegalArgumentException("AES key must have 16, 24, or 32 UTF-8 bytes");
        }
        Cipher cipher = Cipher.getInstance("AES/ECB/PKCS5Padding");
        cipher.init(Cipher.ENCRYPT_MODE, new SecretKeySpec(keyBytes, "AES"));
        byte[] bytes = cipher.doFinal(json.getBytes(StandardCharsets.UTF_8));
        StringBuilder hex = new StringBuilder(bytes.length * 2);
        for (byte b : bytes) {
            hex.append(Character.forDigit((b >>> 4) & 15, 16));
            hex.append(Character.forDigit(b & 15, 16));
        }
        return hex.toString();
    }
}
