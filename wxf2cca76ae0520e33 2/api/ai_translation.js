var e = require("common.js"),
  t = {};
t.innerTranslationManager = {
  data: {
    source: "miniapp_plugin",
    media_host: "https://ae.weixin.qq.com/cgi-bin/mmasrai-bin/getmedia",
    translate_host: "https://ae.weixin.qq.com/cgi-bin/mmasrai-bin/translatecontent",
    language: {
      zh_CN: "zh_CN",
      en_US: "en_US",
      zh_TW: "zh_TW",
      zh_HK: "zh_HK",
      yue: "yue"
    },
    err_msg: {
      LANGUAGE_OPTION_ERROR: {
        retcode: -10001,
        msg: "please check out language option."
      },
      CONTENT_OPTION_ERROR: {
        retcode: -10002,
        msg: "please input right content."
      },
      CONTENT_LENGTH_EXCEED: {
        retcode: -10003,
        msg: "content too long."
      },
      TRANSLATE_ERROR: {
        retcode: -10004,
        msg: "translate server failed."
      },
      NETWORK_ERROR: {
        retcode: -10005,
        msg: "network error."
      },
      FREQ_LIMIT_ERROR: {
        retcode: -40001,
        msg: "translate frequency limited."
      },
      TTS_FAILED: {
        retcode: -10006,
        msg: "tts failed."
      },
      TTS_LANGUAGE_ERROR: {
        retcode: -10007,
        msg: "tts language not support."
      },
      TTS_FREQ_LIMIT_ERROR: {
        retcode: -10008,
        msg: "tts frequency limited."
      }
    },
    CONTENT_EXCEED_RET: -10,
    TRANSLATE_FREQ_RET: -99,
    TTS_FAILED_RET: -400,
    TTS_FREQ_LIMIT_RET: -401,
    TTS_LANGUAGE_ERROR_RET: -22
  },
  _isLanguageOptionsError: function(e) {
    return e.hasOwnProperty("lfrom") && e.hasOwnProperty("lto") ? (e.lfrom === e.lto || !this.data.language.hasOwnProperty(e.lfrom) || !this.data.language.hasOwnProperty(e.lto)) && "LANGUAGE_OPTION_ERROR" : "LANGUAGE_OPTION_ERROR"
  },
  _isTranslateContentError: function(e) {
    return e.hasOwnProperty("content") && "string" == typeof e.content ? !(e.content.length > 0) && "CONTENT_OPTION_ERROR" : "CONTENT_OPTION_ERROR"
  },
  _isNeedTTS: function(e) {
    return !(!e.hasOwnProperty("tts") || !0 !== e.tts)
  },
  succResponseData: function(e, t) {
    return 1 == e ? {
      retcode: 0,
      origin: t.from_content,
      result: t.to_content,
      filename: t.voice_file,
      expired_time: Math.floor(Date.now() / 1e3) + t.expired_time
    } : {
      retcode: 0,
      origin: t.from_content,
      result: t.to_content
    }
  },
  succPartResponseData: function(e, t) {
    return {
      retcode: this.data.err_msg[t].retcode,
      origin: e.from_content,
      result: e.to_content,
      filename: "",
      expired_time: 0
    }
  },
  responseResult: function(e, t) {
    e.hasOwnProperty("success") && "function" == typeof e.success && e.success(t), e.hasOwnProperty("complete") && "function" == typeof e.complete && e.complete()
  },
  responseError: function(e, t) {
    e.hasOwnProperty("fail") && "function" == typeof e.success && e.fail(t), e.hasOwnProperty("complete") && "function" == typeof e.complete && e.complete()
  },
  translate: function(t) {
    e.logLog("translate options", t);
    var r = this;
    t.hasOwnProperty("log") && "showmedetail" === t.log && e.setLogFlag(!0);
    var o = r._isLanguageOptionsError(t);
    if (o) return e.logErr("language option check error", t), void r.responseError(t, r.data.err_msg[o]);
    var a = r._isTranslateContentError(t);
    if (a) return e.logErr("content option check error", t), void r.responseError(t, r.data.err_msg[a]);
    var n = 0;
    r._isNeedTTS(t) && (e.logLog("tts open"), n = 1);
    var s = {
      lfrom: t.lfrom,
      lto: t.lto,
      source: r.data.source,
      content: t.content,
      tts: n
    };
    wx.request({
      url: r.data.translate_host,
      method: "POST",
      data: s,
      success: function(o) {
        if (e.logInfo("res", o), !o.data.hasOwnProperty("retcode")) return e.logErr("res.data has no retcode"), void r.responseError(t, r.data.err_msg.TRANSLATE_ERROR);
        if (0 === o.data.retcode) {
          var a = r.succResponseData(n, o.data);
          r.responseResult(t, a), e.logLog("translate completed", a)
        } else {
          if (o.data.retcode === r.data.TRANSLATE_FREQ_RET) return void r.responseError(t, r.data.err_msg.FREQ_LIMIT_ERROR);
          if (o.data.retcode === r.data.CONTENT_EXCEED_RET) return void r.responseError(t, r.data.err_msg.CONTENT_LENGTH_EXCEED);
          if (1 === n) {
            if (o.data.retcode === r.data.TTS_FAILED_RET) {
              e.logErr("tts inner server failed", o.data);
              var s = r.succPartResponseData(o.data, "TTS_FAILED");
              return void r.responseResult(t, s)
            }
            if (o.data.retcode === r.data.TTS_FREQ_LIMIT_RET) {
              e.logErr("tts frequency exceed", o.data);
              var i = r.succPartResponseData(o.data, "TTS_FREQ_LIMIT_ERROR");
              return void r.responseResult(t, i)
            }
            if (o.data.retcode === r.data.TTS_LANGUAGE_ERROR_RET) {
              e.logErr("tts language not support", o.data);
              var c = r.succPartResponseData(o.data, "TTS_LANGUAGE_ERROR");
              return void r.responseResult(t, c)
            }
          }
          r.responseError(t, r.data.err_msg.TRANSLATE_ERROR)
        }
      },
      fail: function(e) {
        r.responseError(t, r.data.err_msg.NETWORK_ERROR)
      }
    })
  }
}, module.exports = {
  translate: function(e) {
    t.innerTranslationManager.translate(e)
  }
};
