/**
 * 用户中心与登录接口 (User & Auth API)
 */
import request from "@/utils/request.js";
import { encryptJsonHex, CRYPTO_KEYS } from "@/utils/crypto.js";

export default {
  /**
   * 发送短信验证码 (需经 AES-128-ECB 加密手机号和时间戳签名)
   * 对应 pages/login/login.js:206
   */
  sendSmsCode(phone) {
    const timestamp = Date.now();
    const signPayload = {
      phone: phone,
      timestamp: timestamp
    };
    // 使用固定密钥 8nXB5qupfE2mwSeZ 进行 AES 加密
    const signHex = encryptJsonHex(signPayload, CRYPTO_KEYS.SMS_SIGN);

    return request.post("manager/app/v1/sms/sendSms", {
      phone: phone,
      sign: signHex,
      timestamp: timestamp
    }, "正在发送...");
  },

  // 手机号 + 验证码/密码登录
  loginByPhone(params) {
    return request.post("manager/app/v1/user/loginByPhone", params, "正在登录...");
  },

  // 获取用户信息
  getUserInfo() {
    return request.get("manager/app/v1/user/getUserInfo");
  }
};
