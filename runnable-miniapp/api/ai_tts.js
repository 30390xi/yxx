var e = require("common.js"),
  t = {};
t.innerTextToSpeechManager = {
  data: {
    source: "miniapp_plugin",
    media_host: "https://ae.weixin.qq.com/cgi-bin/mmasrai-bin/getmedia",
    tts_host: "https://ae.weixin.qq.com/cgi-bin/mmasrai-bin/getttsvoice",
    language: {
      zh_CN: "zh_CN",
      en_US: "en_US",
      zh_TW: "zh_TW",
      zh_HK: "zh_HK"
    },
    err_msg: {
      LANGUAGE_OPTION_ERROR: {
        retcode: -20001,
        msg: "please check out language option."
      },
      CONTENT_OPTION_ERROR: {
        retcode: -20002,
        msg: "please input right content."
      },
      TTS_SERVER_ERROR: {
        retcode: -20003,
        msg: "text to speech inner server failed."
      },
      NETWORK_ERROR: {
        retcode: -20005,
        msg: "network error."
      },
      FREQ_LIMIT_ERROR: {
        retcode: -40001,
        msg: "frequency limited"
      }
    },
    TTS_FREQ_LIMIT_RET: -99,
    TTS_LANGUAGE_SERVER_RET: -22
  },
  _isLanguageOptionsError: function(e) {
    return (!e.hasOwnProperty("lang") || !this.data.language.hasOwnProperty(e.lang)) && "LANGUAGE_OPTION_ERROR"
  },
  _isContentError: function(e) {
    return !(e.hasOwnProperty("content") && "string" == typeof e.content && e.content.length > 0) && "CONTENT_OPTION_ERROR"
  },
  succResponseData: function(e) {
    return {
      retcode: 0,
      origin: e.text,
      filename: e.voice_file,
      expired_time: Math.floor(Date.now() / 1e3) + e.expired_time
    }
  },
  responseResult: function(e, t) {
    e.hasOwnProperty("success") && "function" == typeof e.success && e.success(t), e.hasOwnProperty("complete") && "function" == typeof e.complete && e.complete()
  },
  responseError: function(e, t) {
    e.hasOwnProperty("fail") && "function" == typeof e.success && e.fail(t), e.hasOwnProperty("complete") && "function" == typeof e.complete && e.complete()
  },
  tts: function(t) {
    var r = this._isLanguageOptionsError(t);
    if (r) this.responseError(t, this.data.err_msg[r]);
    else if (r = this._isContentError(t)) this.responseError(t, this.data.err_msg[r]);
    else {
      t.hasOwnProperty("log") && "showmedetail" === t.log && e.setLogFlag(!0);
      var o = {
        text: t.content,
        lang: t.lang,
        source: this.data.source
      };
      e.logInfo("tts_data", o);
      var s = this;
      wx.request({
        url: s.data.tts_host,
        method: "POST",
        data: o,
        success: function(r) {
          if (e.logLog("res", r), r.data.hasOwnProperty("retcode") && 0 === r.data.retcode) {
            var o = s.succResponseData(r.data);
            s.responseResult(t, o)
          } else {
            if (r.data.hasOwnProperty("retcode")) {
              if (r.data.retcode === s.data.TTS_FREQ_LIMIT_RET) return e.logErr("tts freq limit", r), void s.responseError(t, s.data.err_msg.FREQ_LIMIT_ERROR);
              if (r.data.retcode === s.data.TTS_LANGUAGE_SERVER_RET) return e.logErr("tts language option error", r), void s.responseError(t, s.data.err_msg.LANGUAGE_OPTION_ERROR)
            }
            e.logErr("tts response error", r), s.responseError(t, s.data.err_msg.TTS_SERVER_ERROR)
          }
        },
        fail: function(r) {
          e.logErr("tts request fail callback called", r), s.responseError(t, s.data.err_msg.NETWORK_ERROR)
        }
      })
    }
  }
}, module.exports = {
  textToSpeech: function(e) {
    t.innerTextToSpeechManager.tts(e)
  }
};
