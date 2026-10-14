/**
 * 游陕西小程序 - 客户端加密与埋点签名模块 (Crypto & Event Analysis)
 * 逆向还原自: common/vendor.js ($eventAnalyse.encrypt)
 * 算法标准: AES-128-ECB, PKCS7Padding, 输出 16 进制小写字符串
 */

// 常用业务固定密钥
export const CRYPTO_KEYS = {
  // 验证码/登录/找回密码签名密钥 (pages/login/login.js, pages/register/register.js 等)
  SMS_SIGN: "8nXB5qupfE2mwSeZ",
  // 埋点数据上报加密密钥 (data/app/v1/buriedPoint)
  BURIED_POINT: "xsYc029dbPhO6sI9"
};

// S-Box and Rcon for AES
const SBOX = new Uint8Array([
  0x63, 0x7c, 0x77, 0x7b, 0xf2, 0x6b, 0x6f, 0xc5, 0x30, 0x01, 0x67, 0x2b, 0xfe, 0xd7, 0xab, 0x76,
  0xca, 0x82, 0xc9, 0x7d, 0xfa, 0x59, 0x47, 0xf0, 0xad, 0xd4, 0xa2, 0xaf, 0x9c, 0xa4, 0x72, 0xc0,
  0xb7, 0xfd, 0x93, 0x26, 0x36, 0x3f, 0xf7, 0xcc, 0x34, 0xa5, 0xe5, 0xf1, 0x71, 0xd8, 0x31, 0x15,
  0x04, 0xc7, 0x23, 0xc3, 0x18, 0x96, 0x05, 0x9a, 0x07, 0x12, 0x80, 0xe2, 0xeb, 0x27, 0xb2, 0x75,
  0x09, 0x83, 0x2c, 0x1a, 0x1b, 0x6e, 0x5a, 0xa0, 0x52, 0x3b, 0xd6, 0xb3, 0x29, 0xe3, 0x2f, 0x84,
  0x53, 0xd1, 0x00, 0xed, 0x20, 0xfc, 0xb1, 0x5b, 0x6a, 0xcb, 0xbe, 0x39, 0x4a, 0x4c, 0x58, 0xcf,
  0xd0, 0xef, 0xaa, 0xfb, 0x43, 0x4d, 0x33, 0x85, 0x45, 0xf9, 0x02, 0x7f, 0x50, 0x3c, 0x9f, 0xa8,
  0x51, 0xa3, 0x40, 0x8f, 0x92, 0x9d, 0x38, 0xf5, 0xbc, 0xb6, 0xda, 0x21, 0x10, 0xff, 0xf3, 0xd2,
  0xcd, 0x0c, 0x13, 0xec, 0x5f, 0x97, 0x44, 0x17, 0xc4, 0xa7, 0x7e, 0x3d, 0x64, 0x5d, 0x19, 0x73,
  0x60, 0x81, 0x4f, 0xdc, 0x22, 0x2a, 0x90, 0x88, 0x46, 0xee, 0xb8, 0x14, 0xde, 0x5e, 0x0b, 0xdb,
  0xe0, 0x32, 0x3a, 0x0a, 0x49, 0x06, 0x24, 0x5e, 0xc2, 0xd3, 0xac, 0x62, 0x91, 0x95, 0xe4, 0x79,
  0xe7, 0xc8, 0x37, 0x6d, 0x8d, 0xd5, 0x4e, 0xa9, 0x6c, 0x56, 0xf4, 0xea, 0x65, 0x7a, 0xae, 0x08,
  0xba, 0x78, 0x25, 0x2e, 0x1c, 0xa6, 0xb4, 0xc6, 0xe8, 0xdd, 0x74, 0x1f, 0x4b, 0xbd, 0x8b, 0x8a,
  0x70, 0x3e, 0xb5, 0x66, 0x48, 0x03, 0xf6, 0x0e, 0x61, 0x35, 0x57, 0xb9, 0x86, 0xc1, 0x1d, 0x9e,
  0xe1, 0xf8, 0x98, 0x11, 0x69, 0xd9, 0x8e, 0x94, 0x9b, 0x1e, 0x87, 0xe9, 0xce, 0x55, 0x28, 0xdf,
  0x8c, 0xa1, 0x89, 0x0d, 0xbf, 0xe6, 0x42, 0x68, 0x41, 0x99, 0x2d, 0x0f, 0xb0, 0x54, 0xbb, 0x16
]);

const RCON = [0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];

function expandKey(keyBytes) {
  const w = new Uint32Array(44);
  for (let i = 0; i < 4; i++) {
    w[i] = (keyBytes[4 * i] << 24) | (keyBytes[4 * i + 1] << 16) | (keyBytes[4 * i + 2] << 8) | keyBytes[4 * i + 3];
  }
  for (let i = 4; i < 44; i++) {
    let temp = w[i - 1];
    if (i % 4 === 0) {
      temp = ((temp << 8) | (temp >>> 24)) >>> 0;
      temp = (SBOX[(temp >>> 24) & 0xff] << 24) |
             (SBOX[(temp >>> 16) & 0xff] << 16) |
             (SBOX[(temp >>> 8) & 0xff] << 8) |
             SBOX[temp & 0xff];
      temp ^= (RCON[(i / 4) - 1] << 24);
    }
    w[i] = (w[i - 4] ^ temp) >>> 0;
  }
  return w;
}

function subBytes(state) {
  for (let i = 0; i < 16; i++) state[i] = SBOX[state[i]];
}

function shiftRows(state) {
  let t = state[1]; state[1] = state[5]; state[5] = state[9]; state[9] = state[13]; state[13] = t;
  t = state[2]; state[2] = state[10]; state[10] = t;
  t = state[6]; state[6] = state[14]; state[14] = t;
  t = state[15]; state[15] = state[11]; state[11] = state[7]; state[7] = state[3]; state[3] = t;
}

function gmul(a, b) {
  let p = 0;
  for (let counter = 0; counter < 8; counter++) {
    if ((b & 1) !== 0) p ^= a;
    const hi = a & 0x80;
    a = (a << 1) & 0xff;
    if (hi !== 0) a ^= 0x1b;
    b >>= 1;
  }
  return p;
}

function mixColumns(state) {
  for (let i = 0; i < 4; i++) {
    const col = [state[i * 4], state[i * 4 + 1], state[i * 4 + 2], state[i * 4 + 3]];
    state[i * 4] = gmul(col[0], 2) ^ gmul(col[1], 3) ^ col[2] ^ col[3];
    state[i * 4 + 1] = col[0] ^ gmul(col[1], 2) ^ gmul(col[2], 3) ^ col[3];
    state[i * 4 + 2] = col[0] ^ col[1] ^ gmul(col[2], 2) ^ gmul(col[3], 3);
    state[i * 4 + 3] = gmul(col[0], 3) ^ col[1] ^ col[2] ^ gmul(col[3], 2);
  }
}

function addRoundKey(state, w, round) {
  for (let c = 0; c < 4; c++) {
    const word = w[round * 4 + c];
    state[c * 4] ^= (word >>> 24) & 0xff;
    state[c * 4 + 1] ^= (word >>> 16) & 0xff;
    state[c * 4 + 2] ^= (word >>> 8) & 0xff;
    state[c * 4 + 3] ^= word & 0xff;
  }
}

function encryptBlock(block, w) {
  const state = new Uint8Array(block);
  addRoundKey(state, w, 0);
  for (let r = 1; r < 10; r++) {
    subBytes(state);
    shiftRows(state);
    mixColumns(state);
    addRoundKey(state, w, r);
  }
  subBytes(state);
  shiftRows(state);
  addRoundKey(state, w, 10);
  return state;
}

/**
 * 字符串转 UTF-8 Uint8Array
 */
function utf8Encode(str) {
  if (typeof TextEncoder !== "undefined") {
    return new TextEncoder().encode(str);
  }
  const utf8 = [];
  for (let i = 0; i < str.length; i++) {
    let charcode = str.charCodeAt(i);
    if (charcode < 0x80) utf8.push(charcode);
    else if (charcode < 0x800) {
      utf8.push(0xc0 | (charcode >> 6), 0x80 | (charcode & 0x3f));
    } else if (charcode < 0xd800 || charcode >= 0xe000) {
      utf8.push(0xe0 | (charcode >> 12), 0x80 | ((charcode >> 6) & 0x3f), 0x80 | (charcode & 0x3f));
    } else {
      i++;
      charcode = 0x10000 + (((charcode & 0x3ff) << 10) | (str.charCodeAt(i) & 0x3ff));
      utf8.push(0xf0 | (charcode >> 18), 0x80 | ((charcode >> 12) & 0x3f), 0x80 | ((charcode >> 6) & 0x3f), 0x80 | (charcode & 0x3f));
    }
  }
  return new Uint8Array(utf8);
}

/**
 * AES-128-ECB 加密，返回 16 进制小写字符串
 * @param {string|object} value 要加密的字符串或对象 (若为对象将自动 JSON.stringify)
 * @param {string} key 16 字节密钥
 * @returns {string} 16 进制密文字符串
 */
export function encryptJsonHex(value, key = CRYPTO_KEYS.SMS_SIGN) {
  const plainText = typeof value === "object" ? JSON.stringify(value) : String(value);
  const plainBytes = utf8Encode(plainText);
  const keyBytes = utf8Encode(key);

  if (keyBytes.length !== 16) {
    throw new Error("AES-128 key must be exactly 16 UTF-8 bytes");
  }

  // PKCS7 填充
  const padLen = 16 - (plainBytes.length % 16);
  const padded = new Uint8Array(plainBytes.length + padLen);
  padded.set(plainBytes);
  for (let i = plainBytes.length; i < padded.length; i++) {
    padded[i] = padLen;
  }

  const w = expandKey(keyBytes);
  let hexResult = "";
  for (let i = 0; i < padded.length; i += 16) {
    const block = padded.subarray(i, i + 16);
    const encBlock = encryptBlock(block, w);
    for (let j = 0; j < 16; j++) {
      const b = encBlock[j];
      hexResult += (b < 16 ? "0" : "") + b.toString(16);
    }
  }
  return hexResult;
}

/**
 * 客户端埋点与分析对象 ($eventAnalyse)
 */
export const eventAnalyse = {
  queue: [],

  encrypt(value, key = CRYPTO_KEYS.BURIED_POINT) {
    return encryptJsonHex(value, key);
  },

  analyse({ eventTag = "", eventName = "", eventParams = {} }) {
    const item = {
      eventTag,
      eventName,
      eventParams: typeof eventParams === "object" ? JSON.stringify(eventParams) : eventParams,
      timestamp: Date.now()
    };
    this.queue.push(item);
    if (this.queue.length >= 10) {
      this.subData();
    }
  },

  subData() {
    if (this.queue.length === 0) return;
    const dataToSend = [...this.queue];
    this.queue = [];
    const encryptedHex = this.encrypt(dataToSend, CRYPTO_KEYS.BURIED_POINT);
    
    // 上报到埋点接口
    if (typeof uni !== "undefined" && uni.request) {
      uni.request({
        url: (getApp().globalData?.requestUrl || "https://eshopapi.zhiyousx.com/") + "data/app/v1/buriedPoint",
        method: "POST",
        data: {
          data: encryptedHex,
          mode: 1
        },
        header: {
          Authorization: uni.getStorageSync("token") ? "bearer " + uni.getStorageSync("token") : "",
          version: "1.0.5",
          product: "Wxmp"
        },
        fail(err) {
          console.warn("BuriedPoint report failed:", err);
        }
      });
    }
  }
};

export default {
  CRYPTO_KEYS,
  encryptJsonHex,
  eventAnalyse
};
