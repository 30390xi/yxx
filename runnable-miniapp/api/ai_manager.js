var e = require("common.js"),
  t = {};
t.recordRecoManager = {
  onStop: function(e) {},
  onError: function(e) {},
  onStart: function(e) {},
  onRecognize: function(e) {},
  start: function(s) {
    e.logInfo("start options", s), e.logInfo("wx_ai start time", Date.now() / 1e3), t.innerStreamRecoManager.setCallback("onStop", this.onStop), t.innerStreamRecoManager.setCallback("onError", this.onError), t.innerStreamRecoManager.setCallback("onRecognize", this.onRecognize), t.innerStreamRecoManager.setCallback("onStart", this.onStart), t.innerStreamRecoManager.start(s)
  },
  stop: function() {
    t.innerStreamRecoManager.stop()
  }
}, t.getSocketManager = function() {}, t.innerStreamRecoManager = {
  data: {
    log: !1,
    options: {
      duration: 6e4,
      sampleRate: 16e3,
      numberOfChannels: 1,
      encodeBitRate: 48e3,
      format: "mp3",
      frameSize: 6
    },
    access_lang: {
      zh_CN: "zh_CN",
      en_US: "en_US",
      zh_HK: "zh_HK",
      sichuanhua: "sichuanhua",
      yue: "yue"
    },
    access_gender: {
      female: 1,
      male: 2,
      unknow: 3
    },
    call_back: {
      onStop: function(t) {
        e.logLog("onStop", t)
      },
      onError: function(t) {
        e.logLog("onError", t)
      },
      onStart: function(t) {
        e.logLog("onStart", t)
      },
      onRecognize: function(t) {
        e.logLog("onRecognize", t)
      }
    },
    err_msg: {
      RECORD_ERROR_FAIL: {
        retcode: -30001,
        msg: "record manager record failed"
      },
      RECORD_PAUSED_FAIL: {
        retcode: -30002,
        msg: "record manager has paused record"
      },
      INTERNAL_VOICE_FAIL: {
        retcode: -30003,
        msg: "internal voice data failed"
      },
      QUERY_RESPONSE_EMPTY: {
        retcode: -30004,
        msg: "query response empty result"
      },
      QUERY_SERVER_ERROR: {
        retcode: -30005,
        msg: "query response sever error"
      },
      QUERY_NOT_END: {
        retcode: -30006,
        msg: "query is not end until timeout"
      },
      OPTIONS_FAIL: {
        retcode: -30007,
        msg: "please check options"
      },
      WEBSOCKET_SEND_FAIL: {
        retcode: -30008,
        msg: "websocket send failed"
      },
      CREATE_SESSION_KEY_SERVER_FAILED: {
        retcode: -30009,
        msg: "server failed when create session message"
      },
      CREATE_SESSION_KEY_NETWORK_FAILED: {
        retcode: -30010,
        msg: "network failed when create session message"
      },
      MUTILPLE_START_FAILED: {
        retcode: -30011,
        msg: "please wait recognition finished"
      },
      STOP_WHEN_NOT_WORKING: {
        retcode: -30012,
        msg: "please stop after start"
      },
      UNKNOW_ERROR: {
        retcode: -30013,
        msg: "unknow error"
      },
      FREQ_LIMIT_ERROR: {
        retcode: -40001,
        msg: "frequency limited"
      }
    },
    special_code: {
      freq_limit: -99
    },
    default_duration: 6e4,
    default_lang: "zh_CN",
    default_gender: "male",
    wss_manager: null,
    voice_id: 0,
    session_key: "",
    app_key: "",
    uid: "",
    session_key_pre: "",
    app_key_pre: "",
    exceed_time: 0,
    exceed_duration: 220,
    _record_start: !1,
    _is_last_frame: !1,
    _interrupt_flag: !1,
    _sequence_id: 1,
    _product_queue: [],
    _consume_switch: !0,
    backup_pack: null,
    _previous_sent: !0,
    record_stopped: !0,
    record_paused: !1,
    record_path: "",
    record_duration: 0,
    first_frame_called: !1,
    record_file_size: 0,
    start_query: !1,
    source: "miniapp_plugin",
    working: !1,
    internal_resend: 0,
    internal_resend_max: 1,
    query_info: {
      is_end: 0,
      last_result: "",
      err_msg: ""
    },
    query_options: {
      query_start: null,
      query_sleep_ms: 100,
      query_times: 100
    }
  },
  _setRecordPause: function(e) {
    this.data.record_paused = e
  },
  _isRecordPause: function() {
    return this.data.record_paused
  },
  _isInternalCanResend: function() {
    return e.logLog("已发次数", this.data.internal_resend), e.logLog("最大发送次数", this.data.internal_resend_max), this.data.internal_resend < this.data.internal_resend_max
  },
  _increaseInternalResend: function() {
    this.data.internal_resend++
  },
  _resetInternalResend: function() {
    this.data.internal_resend = 0
  },
  _setWorking: function(e) {
    this.data.working = e
  },
  _isWorking: function() {
    return this.data.working
  },
  _setRecordStopped: function(e) {
    this.data.record_stopped = e
  },
  _isRecordStopped: function() {
    return this.data.record_stopped
  },
  _setFirstFrameCalled: function(e) {
    this.data.first_frame_called = e
  },
  _isFirstFrameCalled: function() {
    return this.data.first_frame_called
  },
  _markRecordStart: function(e) {
    this.data._record_start = e
  },
  _isRecordStart: function() {
    return this.data._record_start
  },
  _setInterrupt: function(e) {
    this.data._interrupt_flag = e
  },
  _isInterrupt: function() {
    return this.data._interrupt_flag
  },
  _buildSuccResponse: function() {
    return {
      tempFilePath: this.data.record_path,
      result: this.data.query_info.last_result,
      duration: this.data.record_duration,
      fileSize: this.data.record_file_size
    }
  },
  _getFailMsg: function(e) {
    return this.data.err_msg.hasOwnProperty(e) ? this.data.err_msg[e] : this.data.err_msg.UNKNOW_ERROR
  },
  _setQueryBegin: function(e) {
    this.data.query_options.query_start = e
  },
  _hasStartedQuery: function() {
    return this.data.start_query
  },
  _setStartedQuery: function(e) {
    this.data.start_query = e
  },
  _clearOnStopResult: function() {
    this.data.record_path = "", this.data.record_duration = 0, this.data.record_file_size = 0
  },
  _saveOnStopResult: function(e) {
    this.data.record_path = e.tempFilePath, this.data.record_duration = e.duration, this.data.record_file_size = e.fileSize
  },
  _resetInternalStatus: function() {
    this.data._record_start = !1, this.data._is_last_frame = !1, this.data._sequence_id = 1, this.data.voice_id = 0, this.data._product_queue = [], this._setAccessToConsumeSwitch(!0), this.data.backup_pack = null, this._clearOnStopResult(), this._setStartedQuery(!1), this.data.query_info = {
      is_end: 0,
      last_result: "",
      err_msg: ""
    }, this._setInterrupt(!1), this._markRecordStart(!1), this._setWorking(!1), this._setPreviousSent(!0), this._resetInternalResend(), this._setRecordPause(!1), this._setFirstFrameCalled(!1)
  },
  _resetInternalStatusPart: function() {
    if (this._isRecordPause()) {
      var e = this._isRecordPause();
      this._resetInternalStatus(), this._setRecordPause(e)
    } else this._resetInternalStatus()
  },
  _setLastResult: function(e) {
    this.data.query_info.last_result = e
  },
  _setLastErrMsg: function(e) {
    this.data.query_info.err_msg = e
  },
  _getLastErrMsg: function() {
    return this.data.query_info.err_msg
  },
  _getLastResult: function() {
    return this.data.query_info.last_result
  },
  _setIsEnd: function(e) {
    this.data.query_info.is_end = e
  },
  _getIsEnd: function() {
    return this.data.query_info.is_end
  },
  _responseRecognize: function(t) {
    var s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = {
        result: t,
        end: s
      };
    if (s) this._setLastResult(t), this.data.call_back.onRecognize(n), this.data.call_back.onStop(t);
    else if (t != this._getIsEnd()) return this._setLastResult(t), e.logInfo("wx_ai recognize response time", Date.now() / 1e3), void this.data.call_back.onRecognize(n);
    s ? (this._setLastResult(t), this.data.call_back.onStop(t)) : t != this._getIsEnd() && (this._setLastResult(t), this.data.call_back.onRecognize(t))
  },
  _requestSessionKeyPrevious: function() {
    var t = this;
    e.logInfo("request Session key previous"), this.data.exceed_time > Math.floor(Date.now() / 1e3) || this._applySessionKey().then((function(s) {
      e.logInfo("request session key previous success", s.session_key, s.app_key), t.data.session_key_pre = s.session_key, t.data.app_key_pre = s.app_key, t.data.uid = s.uid, t.data.exceed_time = Math.floor(Date.now() / 1e3 + t.data.exceed_duration)
    })).catch((function(s) {
      e.logInfo("request Previous session key failed", s), t.data.exceed_time = 0
    }))
  },
  _submitMutilpleTimesFail: function() {
    var e = this._getFailMsg("MUTILPLE_START_FAILED");
    this.data.call_back.onError(e)
  },
  _before: function() {},
  _after: function() {
    this._requestSessionKeyPrevious()
  },
  _fail: function(e) {
    this._before(), this._resetInternalStatusPart();
    var t = this._getFailMsg(e);
    this.data.call_back.onError(t), this._after()
  },
  _succ: function() {
    this._before();
    var e = this._buildSuccResponse();
    this._resetInternalStatus(), this.data.call_back.onStop(e), this._after()
  },
  setCallback: function(e, t) {
    this.data.call_back[e] = t
  },
  _checkOptions: function(t) {
    if (!t) return this.data.options.duration = this.data.default_duration, this.data.options.lang = this.data.default_lang, !0;
    if (t.hasOwnProperty("log") && "showmedetail" === t.log && e.setLogFlag(!0), t.hasOwnProperty("duration")) {
      if (!(t.duration > 0 && t.duration <= 6e4)) return e.logInfo("检查启动duration"), !1;
      this.data.options.duration = t.duration
    } else this.data.options.duration = this.data.default_duration;
    if (t.hasOwnProperty("lang")) {
      if (!this.data.access_lang.hasOwnProperty(t.lang)) return !1;
      this.data.options.lang = t.lang
    } else this.data.options.lang = this.data.default_lang;
    return t.hasOwnProperty("gender") && this.data.access_gender.hasOwnProperty(t.gender) ? this.data.options.gender = t.gender : this.data.options.gender = this.data.default_gender, t.hasOwnProperty("frameSize") && (this.data.options.frameSize = t.frameSize), !0
  },
  _getStreamRecordOptions: function() {
    return this.data.options
  },
  _checkStatus: function() {
    return !1 === this._isWorking()
  },
  start: function(t) {
    (e.logInfo("wx_ai inner manager start time", Date.now() / 1e3), this._checkStatus()) ? this._checkOptions(t) ? (this._resetInternalStatusPart(), this._setWorking(!0), this._checkWebsocketManager(), e.logLog("record pause", this._isRecordPause()), this._isRecordPause() ? (e.logLog("recordPause"), wx.getRecorderManager().stop()) : this.beginStreamRecord()) : this._fail("OPTIONS_FAIL"): this._submitMutilpleTimesFail()
  },
  _checkWebsocketManager: function() {
    this.data.wss_manager || (this.data.wss_manager = t.getWebsocketManager(this))
  },
  initNetwork: function() {
    e.logLog("initNetWork"), this.data.wss_manager = t.getWebsocketManager(this), this.data.wss_manager.connectWebsocket()
  },
  beginStreamRecord: function() {
    var t = this;
    if (e.logLog("session_key app_key exceed_time", this.data.session_key, this.data.app_key, this.data.exceed_time, Date.now() / 1e3), t.data.exceed_time > Math.floor(Date.now() / 1e3) && "" != t.data.session_key_pre) {
      e.logLog("使用预获取的sessionkey以及appkey"), t.data.exceed_time = 0, t.data.session_key = t.data.session_key_pre, t.data.app_key = t.data.app_key_pre;
      var s = t._getStreamRecordOptions();
      t.initStreamRecord(s)
    } else e.logLog("重新获取sessionkey以及appkey"), t._applySessionKey().then((function(e) {
      t.data.session_key = e.session_key, t.data.app_key = e.app_key, t.data.uid = e.uid;
      var s = t._getStreamRecordOptions();
      t.initStreamRecord(s)
    })).catch((function(e) {
      t._fail(e)
    }))
  },
  _buildSessionKeyData: function() {
    return {
      source: this.data.source
    }
  },
  _applySessionKey: function() {
    e.logInfo("wx_ai start apply session key", Date.now() / 1e3);
    var t = this._buildSessionKeyData(),
      s = this;
    return new Promise((function(n, o) {
      wx.request({
        url: "https://ae.weixin.qq.com/cgi-bin/mmasrai-bin/voicerecologin",
        method: "POST",
        data: t,
        success: function(t) {
          e.logLog("success", t), t.data.hasOwnProperty("retcode") && 0 === t.data.retcode ? (e.logInfo("wx_ai apply session key back", Date.now() / 1e3), e.logLog("retcode 0"), n({
            session_key: t.data.session_key,
            app_key: t.data.app_key,
            uid: t.data.uid
          })) : t.data.hasOwnProperty("retcode") && t.data.retcode === s.data.special_code.freq_limit ? (e.logLog("retcode not 0", t), o("FREQ_LIMIT_ERROR")) : (e.logLog("retcode not 0", t), o("CREATE_SESSION_KEY_SERVER_FAILED"))
        },
        fail: function(t) {
          e.logLog("error", t), o("CREATE_SESSION_KEY_NETWORK_FAILED")
        }
      })
    }))
  },
  stopWhenRecordingEvent: function() {
    wx.getRecorderManager().stop()
  },
  stopWhenRecordStoppedEvent: function() {},
  stopWhenRecordNotStartEvent: function() {
    this._setInterrupt(!0)
  },
  stopBeforeStartEvent: function() {
    this._fail("STOP_WHEN_NOT_WORKING")
  },
  stopAfterStartEvent: function() {
    var t = !this._isRecordStopped();
    if (t) this.stopWhenRecordingEvent();
    else {
      if (!(t = this._isRecordStopped() && this._isRecordStart())) return (t = this._isRecordStopped() && !this._isRecordStart()) && this.stopWhenRecordNotStartEvent(), (t = this._isRecordStart() && !this._isFirstFrameCalled()) ? (e.logInfo("试图在onFrameRecord调用前stop"), void this.stopWhenRecordingEvent()) : void 0;
      this.stopWhenRecordStoppedEvent()
    }
  },
  stop: function() {
    e.logLog("inner manager stop"), this._isWorking() ? (e.logErr("stopAfterStartEvent"), this.stopAfterStartEvent()) : (e.logErr("stopBeforeStartEvent"), this.stopBeforeStartEvent())
  },
  dispatchEvent: function(e) {
    switch (e.type) {
      case 10:
        this.watchOpenEvent(e);
        break;
      case 11:
        this.watchCloseEvent(e);
        break;
      case 12:
        this.watchErrorEvent(e);
        break;
      case 13:
        this.watchReceiveEvent(e);
        break;
      case 14:
        this.watchConnectFailEvent(e)
    }
  },
  watchOpenEvent: function(e) {},
  watchCloseEvent: function(e) {},
  watchErrorEvent: function(e) {},
  watchReceiveEvent: function(e) {},
  watchConnectFailEvent: function(e) {},
  _setLastFrame: function(e) {
    this.data._is_last_frame = e
  },
  _isLastFrame: function() {
    return this.data._is_last_frame
  },
  _buildFrameObject: function(e, t) {
    var s = this.data.session_key,
      n = this.data.app_key,
      o = this.data.uid,
      a = this.data._sequence_id++,
      i = {
        sampleRate: this.data.options.sampleRate,
        format: this.data.options.format
      };
    return {
      session_key: s,
      voice_seq: a,
      voice_data: wx.arrayBufferToBase64(e),
      is_end: t,
      source: this.data.source,
      format: i,
      lang: this.data.options.lang,
      app_key: n,
      gender: this.data.access_gender[this.data.options.gender],
      uid: o
    }
  },
  _pushQueue: function(e) {
    this.data._product_queue.unshift(e)
  },
  _popQueue: function() {
    return this.data._product_queue.pop()
  },
  _setPreviousSent: function(e) {
    this.data._previous_sent = e
  },
  _isPreviousSent: function() {
    return this.data._previous_sent
  },
  _setAccessToConsumeSwitch: function(e) {
    this.data._consume_switch = e
  },
  _accessToConsumeSwitch: function() {
    return this.data._consume_switch
  },
  _accessToConsume: function() {
    return e.logLog("accessToConsume consumeSwitch", this._accessToConsumeSwitch()), e.logLog("accessToConsume isPreviousSent", this._isPreviousSent()), this._accessToConsumeSwitch() && this._isPreviousSent()
  },
  _consumeQueue: function() {
    if (e.logLog("当前帧队列", this.data._product_queue), e.logLog("access", this._accessToConsume()), this._accessToConsume())
      if (0 === this.data._product_queue.length) e.logLog("当前队列长度为0，不进行消费");
      else {
        this._setPreviousSent(!1);
        var t = this._popQueue();
        e.logLog("fectch from queue", t), this._resetInternalResend(), this._requestVoiceTask(t)
      }
  },
  _query: function() {
    this._setStartedQuery(!0), this._setQueryBegin(Date.now()), this._once_query()
  },
  _once_query: function() {
    var e = this,
      t = e._buildQueryFrameTask();
    t.success = function(t) {
      e._checkQuerySuccess(t)
    }, t.fail = function(t) {
      e._checkQueryFail(t)
    }, e.data.wss_manager.sendMessage(t)
  },
  _queryLoop: function() {
    var t = this.data.query_options.query_start + this.data.query_options.query_sleep_ms * this.data.query_options.query_times;
    Date.now() > t ? (e.logLog("check query now time", Date.now()), e.logLog("check query exceed_times", t), e.logInfo("超出查询时间"), this._fail(this._getLastErrMsg())) : (e.logLog("check query now time", Date.now()), e.logLog("check query exceed_times", t), e.logInfo("继续查询"), this._once_query())
  },
  _judgeQueryStatus: function(e) {
    return !("" === e || !e.hasOwnProperty("retcode")) && 0 === e.retcode
  },
  _updateLastResult: function(e) {
    "" != (e = JSON.parse(e)) && e.hasOwnProperty("result") && this._setLastResult(e.result)
  },
  _judgeQueryIsEnd: function(e) {
    var t = !1;
    return (e = JSON.parse(e)).hasOwnProperty("retcode") && 0 === e.retcode && e.hasOwnProperty("is_end") && 1 === e.is_end && (t = !0), t
  },
  _keepQueryResult: function(t) {
    var s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (s) return e.logErr("keepQueryResult websocket send failed"), void this._setLastErrMsg("WEBSOCKET_SEND_FAIL");
    "" !== t && t.hasOwnProperty("retcode") && t.hasOwnProperty("is_end") ? 0 != t.retcode ? this._setLastErrMsg("QUERY_SERVER_ERROR") : 0 === t.is_end && this._setLastErrMsg("QUERY_NOT_END") : (e.logErr("keepQueryResult response empty"), this._setLastErrMsg("QUERY_RESPONSE_EMPTY"))
  },
  _checkQuerySuccess: function(e) {
    var t = this._judgeQueryIsEnd(e);
    this._setIsEnd(t), this._keepQueryResult(e), t ? (this._updateLastResult(e), this._succ()) : this._queryLoop()
  },
  _checkQueryFail: function(e) {
    this._keepQueryResult(e, !0), this._queryLoop()
  },
  _stopRecord: function() {
    this._isRecordStopped() ? this._fail("INTERNAL_VOICE_FAIL") : wx.getRecorderManager().stop()
  },
  _retCodeCanBeRetry: function(e) {
    return 0 != e && -2 != e && -99 != e && -11 != e && -10 != e
  },
  _resendInternal: function() {
    this._increaseInternalResend();
    var e = this._getBackupPack();
    this._requestVoiceTask(e)
  },
  _checkResendInternal: function() {
    e.logLog("检查是否需要重发"), this._isInternalCanResend() ? (e.logLog("需要重发"), this._resendInternal()) : (this._setInterrupt(!0), this._stopRecord())
  },
  _internalFrameSuccessProcess: function(e) {
    if (this._isWorking() && !this._isRecordPause()) {
      if (e && "" != e) {
        var t = JSON.parse(e);
        if (this._retCodeCanBeRetry(t.retcode)) this._checkResendInternal();
        else 0 === t.retcode ? (this._setPreviousSent(!0), 0 === this.data.voice_id && (this.data.voice_id = t.voice_id), this._responseRecognize(t.result), this.data.backup_pack && this.data.backup_pack.is_end ? this._query() : this._consumeQueue()) : (this._setInterrupt(!0), wx.getRecorderManager().stop())
      } else this._checkResendInternal()
    }
  },
  _internalFrameFailProcess: function(t) {
    this._isWorking() && (e.logErr("websocket 中间帧发送失败"), this._fail("WEBSOCKET_SEND_FAIL"))
  },
  _buildInternalFrameTask: function(t) {
    return e.logLog("pack", t), {
      path: "/cgi-bin/mmasrai-bin/addvoicetoreco",
      method: "POST",
      resend: !0,
      data: t
    }
  },
  _buildQueryFrameTask: function() {
    return {
      path: "/cgi-bin/mmasrai-bin/queryrecoresult",
      method: "POST",
      resend: !1,
      data: {
        voice_id: this.data.voice_id,
        lang: "zh_cn",
        source: this.data.source,
        session_key: this.data.session_key,
        app_key: this.data.app_key,
        uid: this.data.uid
      }
    }
  },
  _saveBackupPack: function(e) {
    this.data.backup_pack = e
  },
  _getBackupPack: function() {
    return this.data.backup_pack
  },
  _addVoiceId: function(e) {
    return e.voice_id = this.data.voice_id, e
  },
  _requestVoiceTask: function(t) {
    var s = this;
    t = s._addVoiceId(t), s._saveBackupPack(t);
    var n = s._buildInternalFrameTask(t);
    e.logLog("requestVoiceTask", n), n.success = function(t) {
      e.logLog("上游取得的返回", t), s._internalFrameSuccessProcess(t)
    }, n.fail = function(t) {
      e.logLog("发送失败", t), s._internalFrameFailProcess(t)
    }, s.data.wss_manager.sendMessage(n)
  },
  initStreamRecord: function(t) {
    e.logLog("initStreamRecord start");
    var s = this,
      n = wx.getRecorderManager();
    n.onStart((function() {
      e.logLog("开始录音 onStart"), s.onRecordStartListener()
    })), n.onStop((function(t) {
      e.logLog("结束录音 onStop"), s.onRecordStopListener(t)
    })), n.onPause((function(t) {
      e.logLog("暂停录音 onPause"), s.onRecordPauseListener(t)
    })), n.onError((function(t) {
      e.logLog("录音出错 onError", t), s.onRecordErrorListener(t)
    })), n.onFrameRecorded((function(t) {
      e.logLog("录音帧返回 onFrameRecorded"), s.onRecordFrameListener(t)
    })), e.logLog("initStreamRecord start 1"), e.logInfo("wx_ai start record time", Date.now() / 1e3), n.start(t), e.logLog("initStreamRecord start 2 options", t)
  },
  onRecordStartListener: function() {
    if (e.logInfo("wx_ai onStart time", Date.now() / 1e3), this._isInterrupt()) return e.logErr("用户企图在未开始录音前stop"), void wx.getRecorderManager().stop();
    this._markRecordStart(!0), this._setRecordStopped(!1), this.data.call_back.onStart({
      msg: "Ok"
    })
  },
  onRecordStopListener: function(e) {
    if (this._isRecordPause()) return this._setRecordPause(!1), void this.beginStreamRecord();
    if (this._setRecordStopped(!0), this._isInterrupt()) this._fail("INTERNAL_VOICE_FAIL");
    else if (this._saveOnStopResult(e), this.data.record_path = e.tempFilePath, !this._isLastFrame()) {
      this._setLastFrame(!0);
      var t = new ArrayBuffer,
        s = this._buildFrameObject(t, !0);
      this._pushQueue(s), this._consumeQueue()
    }
  },
  onRecordPauseListener: function(e) {
    this._setRecordPause(!0), this._fail("RECORD_PAUSED_FAIL")
  },
  onRecordErrorListener: function(t) {
    if (e.logLog("error", t), e.logLog("record_pause", this.data.record_paused), this._isRecordPause()) return this._setRecordPause(!1), void this.beginStreamRecord();
    this._setInterrupt(!0), this._fail("RECORD_ERROR_FAIL")
  },
  onRecordFrameListener: function(t) {
    var s = t.frameBuffer,
      n = t.isLastFrame;
    e.logErr("是否是最后一帧", n);
    if (!this._isRecordPause() && !this._isInterrupt()) {
      this._setFirstFrameCalled(!0), s || (e.logErr("onRecordFrameListener onRecordFrameListener no frameBuffer", t), s = new ArrayBuffer), this._setLastFrame(n);
      var o = this._buildFrameObject(s, n);
      this._pushQueue(o), this._consumeQueue()
    }
  }
}, t.exception_manager = {
  OptionExcetion: function() {
    return {
      code: -1,
      message: "options error"
    }
  }
}, t.websocketManager = {
  up_manager: null,
  is_socket_open: !1,
  ws_seq: 0,
  socket_task: null,
  retry_connect_times: 0,
  retry_connect_max: 1,
  resend_flag: !1,
  resend_times: 0,
  resend_max: 0,
  backup_task: null,
  send_trigger: {},
  wait_response_seq_list: [],
  success_call: null,
  fail_call: null,
  _resetRetryStatus: function() {
    this.retry_connect_times = 0, this.resend_times = 0, this.backup_task = null, this.success_call = null, this.fail_call = null
  },
  _resendAvaliable: function() {
    return !!this.resend_flag && this.resend_times < this.resend_max
  },
  _hasBackupTask: function() {
    return !!this.backup_task
  },
  _increResendTimes: function() {
    this.resend_flag && this.resend_times++
  },
  _hasReconnected: function() {
    return this.retry_connect_times >= this.retry_connect_max
  },
  getSendSocketTimeout: function() {
    return 2e3
  },
  _setHasReconnected: function() {
    this.retry_connect_times = this.retry_connect_max
  },
  _clearWaitResponseSeqList: function() {
    e.logLog("哇 清理了一次waitResponseSeqList啊"), this.wait_response_seq_list = []
  },
  _addSeqToWaitList: function(t) {
    e.logLog("插入等待回包队列", t), this.wait_response_seq_list.push(t), e.logLog("插入后等待回包队列为", this.wait_response_seq_list)
  },
  _isInWaitResponseSeqList: function(t) {
    return e.logLog("当前等待返回的帧序列", this.wait_response_seq_list), this.wait_response_seq_list.indexOf(t) > -1
  },
  _isResponseFiltered: function(t) {
    return e.logLog("判断是否被过滤", t), t.hasOwnProperty("seq") ? !this._isInWaitResponseSeqList(t.seq) : (e.logErr("当前返回帧不包含seq，直接过滤"), !0)
  },
  _reconnectWebosocket: function() {
    e.logInfo("_reconnectWebosocket 清理"), this._clearWaitResponseSeqList(), this.closeWebsocket(), this.connectWebsocket()
  },
  init: function(e) {
    this.up_manager = e
  },
  notifyManager: function(t) {
    this.up_manager ? (e.logLog("notifyManager notify manager event", t), this.up_manager.dispatchEvent(t)) : e.logErr("notifyManager up_manager is null", this.up_manager)
  },
  _increaseWsSeq: function() {
    return ++this.ws_seq
  },
  _buildWebsocketFrame: function(t) {
    e.logLog("websocketframe", t);
    var s = {};
    return s.seq = this._increaseWsSeq(), s.http = {
      method: t.method,
      path: t.path,
      header: {
        HOST: "ae.weixin.qq.com"
      }
    }, s.product = 0, s.content = JSON.stringify(t.data), e.logLog("request obj ws object", s), s
  },
  _saveInfo: function(e) {
    this.backup_task = e, this.resend_flag = e.resend, this.success_call = e.success, this.fail_call = e.fail
  },
  _setSendTimeoutTrigger: function() {
    var e = this;
    clearTimeout(e.send_trigger);
    var t = e.getSendSocketTimeout();
    e.send_trigger = setTimeout(function() {
      e.onSendWaitBackTimeout()
    }.bind(e), t)
  },
  _checkReconnectOrNotify: function(e) {
    this._hasReconnected() ? this.onErrorListener(e) : (this._setHasReconnected(), this._reconnectWebosocket())
  },
  internalSend: function(t) {
    var s = this;
    e.logLog("task", t);
    var n = s._buildWebsocketFrame(t);
    s._addSeqToWaitList(n.seq), e.logLog("request_frame", n), s.socket_task.send({
      data: JSON.stringify(n),
      success: function(t) {
        var n = new Date;
        e.logInfo("sendSocket 发送时间", n.toLocaleTimeString() + " " + n.getMilliseconds()), s._setSendTimeoutTrigger()
      },
      fail: function(e) {
        s._checkReconnectOrNotify(e)
      }
    })
  },
  sendMessage: function(t) {
    e.logInfo("sendMessage", t), this._saveInfo(t), this.internalSend(t)
  },
  _validResponseProcess: function(e) {
    this.onReceiveListener(e.content)
  },
  _clearSendSpace: function() {
    e.logInfo("clearSendSpace 清理"), this._clearWaitResponseSeqList(), this._resetRetryStatus()
  },
  _initWebsocket: function() {
    var t = this;
    e.logLog("_initWebsocket"), t.socket_task.onOpen((function(s) {
      t._setWebsocketOpen(!0), t._hasReconnected() && (e.logInfo("_initWebsocket 清理"), t._clearWaitResponseSeqList(), t._hasBackupTask() && t.internalSend(t.backup_task))
    })), t.socket_task.onError((function(s) {
      t._setWebsocketOpen(!1), t._hasReconnected() ? (e.logErr("socket_task断开恢复连接出错", t.socket_task), e.logErr("出错res", s), t.onErrorListener(s)) : (e.logErr("socket_task连接出错", t.socket_task), e.logErr("出错res", s), t._checkReconnectOrNotify(s))
    })), t.socket_task.onClose((function(s) {
      t._setWebsocketOpen(!1), t._isWebsocketOpen() ? e.logLog("收尾操作已在closeWebsocket中完成") : e.logInfo("socket onClose")
    })), t.socket_task.onMessage((function(s) {
      e.logLog("收到回包", s);
      var n = new Date;
      e.logInfo("收到回包时间", n.toLocaleTimeString() + " " + n.getMilliseconds()), e.logLog("当前等待队列", t.wait_response_seq_list);
      var o = JSON.parse(s.data);
      t._isResponseFiltered(o) ? e.logLog("回包被过滤", s) : (clearTimeout(t.send_trigger), e.logInfo("onMessage 清理"), t._clearWaitResponseSeqList(), t._validResponseProcess(o))
    }))
  },
  onSendWaitBackTimeout: function() {
    e.logLog("当前重试包", this.backup_task), this._resendAvaliable() ? (this._increResendTimes(), this.internalSend(this.backup_task)) : this._hasReconnected() ? (e.logErr("已经断开重连过，此次不进行断开重连"), this.onErrorListener({
      errMsg: "发送失败"
    })) : (this._setHasReconnected(), e.logInfo("帧超时未返回，重新连接"), this._reconnectWebosocket())
  },
  onErrorListener: function(t) {
    var s = this.fail_call;
    e.logErr("onError clearSendSpace", t), this._clearSendSpace(), "function" == typeof s && s(t)
  },
  onCloseListener: function(e) {},
  onReceiveListener: function(t) {
    e.logLog("通知识别管理器告知收到信息", t);
    var s = this.success_call;
    this._clearSendSpace(), "function" == typeof s && (e.logLog("调用success回调"), s(t))
  },
  onConnectSocketFailListener: function(t) {
    e.logErr("onConnectSocketFailListener clear"), this._clearSendSpace()
  },
  closeWebsocket: function() {
    null != this.socket_task && this.socket_task.close(), this._setWebsocketOpen(!1)
  },
  _initWebsocketSeq: function() {
    this.ws_seq = Math.ceil(2e5 * Math.random())
  },
  connectWebsocket: function() {
    var s = this;
    s._initWebsocketSeq(), s.socket_task = null, s.socket_task = wx.connectSocket({
      url: t.getWssAddress(),
      method: "POST",
      success: function(e) {},
      fail: function(t) {
        e.logLog("connect fail", t), e.logErr("websocket open failed", t), s._hasReconnected() ? s.onConnectSocketFailListener(t) : (s._setHasReconnected(), s._reconnectWebosocket())
      }
    }), s.socket_task && (e.logLog("设置监听函数", s.socket_task), s._initWebsocket())
  },
  _isWebsocketOpen: function() {
    return this.is_socket_open
  },
  _setWebsocketOpen: function(e) {
    this.is_socket_open = e
  }
}, t.getWebsocketManager = function(e) {
  return t.websocketManager.init(e), t.websocketManager
}, t.getWssAddress = function() {
  return "wss://ae.weixin.qq.com"
}, t.innerStreamRecoManager.initNetwork(), module.exports = {
  getRecordRecognitionManager: function() {
    return t.recordRecoManager
  }
};
