require("../@babel/runtime/helpers/Arrayincludes");
module.exports = {
  ids: [12],
  modules: {
    32: function(t, e, s) {
      var i = s(8);
      ! function(t, e) {
        for (var s in e) t[s] = e[s]
      }(e, function(t) {
        var e = {};

        function s(i) {
          if (e[i]) return e[i].exports;
          var a = e[i] = {
            i: i,
            l: !1,
            exports: {}
          };
          return t[i].call(a.exports, a, a.exports, s), a.l = !0, a.exports
        }
        return s.m = t, s.c = e, s.d = function(t, e, i) {
          s.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
          })
        }, s.r = function(t) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(t, "__esModule", {
            value: !0
          })
        }, s.t = function(t, e) {
          if (1 & e && (t = s(t)), 8 & e) return t;
          if (4 & e && "object" == i(t) && t && t.__esModule) return t;
          var a = Object.create(null);
          if (s.r(a), Object.defineProperty(a, "default", {
              enumerable: !0,
              value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) s.d(a, r, function(e) {
              return t[e]
            }.bind(null, r));
          return a
        }, s.n = function(t) {
          var e = t && t.__esModule ? function() {
            return t.default
          } : function() {
            return t
          };
          return s.d(e, "a", e), e
        }, s.o = function(t, e) {
          return Object.prototype.hasOwnProperty.call(t, e)
        }, s.p = "", s(s.s = 3)
      }([function(t, e, s) {
        function i(t, e, s) {
          return e in t ? Object.defineProperty(t, e, {
            value: s,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : t[e] = s, t
        }
        var a = new WeakMap,
          r = new WeakMap,
          n = new WeakMap,
          o = new WeakMap,
          h = new WeakMap;

        function l(t) {
          if ("function" == typeof this["on".concat(t)]) {
            for (var e = arguments.length, s = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) s[i - 1] = arguments[i];
            this["on".concat(t)].apply(this, s)
          }
        }

        function p(t) {
          this.readyState = t, l.call(this, "readystatechange")
        }
        var f = function() {
          function t() {
            ! function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), i(this, "onabort", null), i(this, "onerror", null), i(this, "onload", null), i(this, "onloadstart", null), i(this, "onprogress", null), i(this, "ontimeout", null), i(this, "onloadend", null), i(this, "onreadystatechange", null), i(this, "readyState", 0), i(this, "response", null), i(this, "responseText", null), i(this, "responseType", ""), i(this, "responseXML", null), i(this, "status", 0), i(this, "statusText", ""), i(this, "upload", {}), i(this, "withCredentials", !1), n.set(this, {
              "content-type": "application/x-www-form-urlencoded"
            }), o.set(this, {})
          }
          var e;
          return (e = [{
            key: "abort",
            value: function() {
              var t = h.get(this);
              t && t.abort()
            }
          }, {
            key: "getAllResponseHeaders",
            value: function() {
              var t = o.get(this);
              return Object.keys(t).map((function(e) {
                return "".concat(e, ": ").concat(t[e])
              })).join("\n")
            }
          }, {
            key: "getResponseHeader",
            value: function(t) {
              return o.get(this)[t]
            }
          }, {
            key: "open",
            value: function(e, s) {
              r.set(this, e), a.set(this, s), p.call(this, t.OPENED)
            }
          }, {
            key: "overrideMimeType",
            value: function() {}
          }, {
            key: "send",
            value: function() {
              var e = this,
                s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
              if (this.readyState !== t.OPENED) throw new Error("Failed to execute 'send' on 'XMLHttpRequest': The object's state must be OPENED.");
              wx.request({
                data: s,
                url: a.get(this),
                method: r.get(this),
                header: n.get(this),
                success: function(s) {
                  var i = s.data,
                    a = s.statusCode,
                    r = s.header;
                  if ("string" != typeof i && !(i instanceof ArrayBuffer)) try {
                    i = JSON.stringify(i)
                  } catch (t) {}
                  if (e.status = a, o.set(e, r), l.call(e, "loadstart"), p.call(e, t.HEADERS_RECEIVED), p.call(e, t.LOADING), e.response = i, i instanceof ArrayBuffer) {
                    e.responseText = "";
                    for (var n = new Uint8Array(i), h = n.byteLength, f = 0; f < h; f++) e.responseText += String.fromCharCode(n[f])
                  } else e.responseText = i;
                  p.call(e, t.DONE), l.call(e, "load"), l.call(e, "loadend")
                },
                fail: function(t) {
                  var s = t.errMsg; - 1 !== s.indexOf("abort") ? l.call(e, "abort") : l.call(e, "error", s), l.call(e, "loadend")
                }
              })
            }
          }, {
            key: "setRequestHeader",
            value: function(t, e) {
              var s = n.get(this);
              s[t] = e, n.set(this, s)
            }
          }]) && function(t, e) {
            for (var s = 0; s < e.length; s++) {
              var i = e[s];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
          }(t.prototype, e), t
        }();

        function c() {}

        function m(t) {
          return "canvas" === t ? {
            getContext: function() {
              return {
                fillRect: c
              }
            }
          } : "img" === t ? function(t) {
            if (void 0 === t.createImage) return {};
            var e = t.createImage();
            return e.addEventListener = e.addEventListener || function(t, s) {
              "load" === t ? e.onload = function() {
                setTimeout(s, 0)
              } : "error" === t && (e.onerror = s)
            }, e
          }(this) : void 0
        }

        function d(t, e) {
          return function(s) {
            return e.call(t, Array.from(s))
          }
        }

        function u(t, e) {
          return function() {
            return e.call(t)
          }
        }

        function g(t, e, s) {
          var i = t[e];
          t[e] = s(t, i)
        }
        i(f, "UNSEND", 0), i(f, "OPENED", 1), i(f, "HEADERS_RECEIVED", 2), i(f, "LOADING", 3), i(f, "DONE", 4), s.d(e, "b", (function() {
          return _
        })), s.d(e, "a", (function() {
          return y
        }));
        var v = wx.getSystemInfoSync(),
          y = {};
        y.window = {
          devicePixelRatio: v.pixelRatio
        }, y.document = y.window.document = {
          body: {},
          createElement: m
        }, y.navigator = y.window.navigator = {
          userAgent: ""
        }, XMLHttpRequest = f;
        var _ = function(t) {
          var e = y.window,
            s = y.document;
          e.requestAnimationFrame = t.requestAnimationFrame.bind(t), e.cancelAnimationFrame = t.cancelAnimationFrame.bind(t), s.createElement = m.bind(t);
          var i = t.getContext("2d");
          i.canvas || (i.canvas = t), g(i, "setLineDash", d), g(i, "fill", u)
        }
      }, function(t, e) {
        t.exports = {
          reportPerformance: function(t, e) {
            var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
            wx.reportPerformance && "function" == typeof wx.reportPerformance && wx.reportPerformance(t, e, s)
          }
        }
      }, function(t, e) {
        function s(t) {
          return (s = "function" == typeof Symbol && "symbol" == i(Symbol.iterator) ? function(t) {
            return i(t)
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : i(t)
          })(t)
        }
        var a, r = wx.getLogManager ? wx.getLogManager() : null,
          n = function(t) {
            try {
              r && r.info.apply(null, t)
            } catch (t) {
              console.log("old log error", t)
            }
          },
          o = {
            DEBUG: 1,
            INFO: 2,
            WARN: 4,
            ERROR: 8
          },
          h = "",
          l = (a = wx.operateWXData, function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return new Promise((function(e) {
              var s = t.complete;
              return t.complete = function(t) {
                s && s(t), e(t)
              }, a.call(wx, t)
            }))
          }),
          p = function(t, e) {
            if ("string" != typeof t) return 0;
            var s, i, a, r = 0;
            if ("utf-16" === (e = e ? e.toLowerCase() : "utf8") || "utf16" === e)
              for (i = 0, a = t.length; i < a; i++) r += (s = t.charCodeAt(i)) <= 65535 ? 2 : 4;
            else
              for (i = 0, a = t.length; i < a; i++) r += (s = t.charCodeAt(i)) <= 127 ? 1 : s <= 2047 ? 2 : s <= 65535 ? 3 : 4;
            return r
          },
          f = null,
          c = !1,
          m = function() {
            function t() {
              var e = this,
                s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
              }(this, t), this.systemInfo = wx.getSystemInfoSync(), this.opt = {}, this.opt.level = o.INFO, h = s.appid, this._hasNoPermission = void 0 === s.hasPermission || !s.hasPermission, this.isRotate = void 0 === s.isRotate || !!s.isRotate, this.msgList = {}, this.filterList = {}, this.sizeList = {}, this.levelList = {}, this._uploadList = [], this._logInfo = {}, this._logInfo.level = 0, this._logInfo.version = 2, this._logInfo.source = 1, this._logInfo.platform = "ios" === this.systemInfo.platform ? 2 : 1, this._logInfo.libraryVersion = this.systemInfo.SDKVersion, this._logInfo.clientVersion = this.systemInfo.version, this.exceedSizeList = {}, this.analyzeList = {}, this.MaxSize = 10240, this.MaxLogCount = 200, this._logCacheBeforeLogConfig = [], setTimeout((function() {
                e._getLogConfig()
              }), 300)
            }
            var e;
            return (e = [{
              key: "_getLogConfig",
              value: function(t, e) {
                var s = this;
                return l({
                  apiName: "GetUploadSetting",
                  reqData: {}
                }).then((function(i) {
                  if (i.rawData) try {
                    var a = JSON.parse(i.rawData);
                    s.MaxSize = 1024 * a.MaxLogSize, a.MaxLogCount && (s.MaxLogCount = a.MaxLogCount), s._logInfo.id = a.UserUin, a.OpenId && (s.traceid = "".concat(a.OpenId, "_").concat(parseInt(Date.now() / 1e3, 10))), a.Debug && a.Debug.MaxSize && a.Debug.ExpireTime > Date.now() / 1e3 && (s.isDebugMode = !0, s.MaxSize = 1024 * a.Debug.MaxSize, s.opt.level = o.DEBUG, a.Debug.MaxLogCount && (s.MaxLogCount = a.Debug.MaxLogCount));
                    var r = s._logCacheBeforeLogConfig || [];
                    s._logCacheBeforeLogConfig = [], r.forEach((function(t) {
                      s._baseLog.apply(s, [t.key, t.path].concat(function(t) {
                        return function(t) {
                          if (Array.isArray(t)) {
                            for (var e = 0, s = new Array(t.length); e < t.length; e++) s[e] = t[e];
                            return s
                          }
                        }(t) || function(t) {
                          if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
                        }(t) || function() {
                          throw new TypeError("Invalid attempt to spread non-iterable instance")
                        }()
                      }(t.args)))
                    })), t && s.upload(e)
                  } catch (t) {
                    s._hasNoPermission = !0, s._logCacheBeforeLogConfig = []
                  } else s._hasNoPermission = !0, s._logCacheBeforeLogConfig = [];
                  n(["GetUploadSetting success log", i])
                })).catch((function(t) {
                  t.errMsg && t.errMsg.indexOf("fail invalid scope") >= 0 && (s._hasNoPermission = !0, s._logCacheBeforeLogConfig = []), console.error("getwxalogsetting err", t), s._getConfigFail = !0, n(["GetUploadSetting error", t.errMsg])
                }))
              }
            }, {
              key: "_checkSize",
              value: function(t, e) {
                var s = 0;
                if (!e || !e.length) return !0;
                if (!t) return !0;
                e.forEach((function(t) {
                  s += p(t)
                })), this.sizeList[t] = this.sizeList[t] || 0;
                var i = this.sizeList[t];
                return i + s > this.MaxSize ? s : (this.sizeList[t] = i + s, !0)
              }
            }, {
              key: "_baseLog",
              value: function(t, e) {
                try {
                  for (var i = arguments.length, a = new Array(i > 2 ? i - 2 : 0), r = 2; r < i; r++) a[r - 2] = arguments[r];
                  if (!a.length) return;
                  if (this._hasNoPermission) return;
                  if (!this._logInfo.id) return void this._logCacheBeforeLogConfig.push({
                    key: t,
                    path: e,
                    args: a
                  });
                  var h = t,
                    l = o[h.toUpperCase()] || 0;
                  if (l < this.opt.level) return;
                  var f = a.map((function(t) {
                      var e, i = s(t),
                        a = "";
                      if ("function" === i && (e = "function(){}"), "undefined" === i) e = "<Undefined>";
                      else if ("object" === i) {
                        a = (a = Object.prototype.toString.call(t)).replace(/^\[object |\]$/g, "");
                        try {
                          e = "Error" === a ? t.stack : JSON.stringify(t)
                        } catch (t) {
                          a = "Error", e = t.message
                        }
                      } else t += "";
                      return e || t
                    })),
                    c = this._checkSize(e, f);
                  p(f.join("")) >= 5120 && console.warn("UserLog:fail single log exceed size", 5120);
                  var m = this.msgList[e] || [],
                    d = m.length >= this.MaxLogCount;
                  d || !0 !== c ? this.isRotate ? (this.upload(e), this._addLogMsg(f, e, l)) : d ? console.warn("UserLog:fail log count exceed max count ".concat(this.MaxLogCount)) : (console.warn("UserLog:fail log size exceed maxsize ".concat(this.MaxSize, " will be discard at page ").concat(e, ".")), this.exceedSizeList[e] = this.exceedSizeList[e] || 0, this.exceedSizeList[e] || this._addLogMsg(["UserLog:fail Log Size ".concat(c, " Exceed.")], e, o.WARN), this.exceedSizeList[e] += c) : this._addLogMsg(f, e, l), n(f)
                } catch (t) {
                  console.log("log error", t)
                }
              }
            }, {
              key: "_addLogMsg",
              value: function(t, e, s) {
                if (!c && s) {
                  var i = e;
                  if (i) {
                    this.msgList[i] = this.msgList[i] || [];
                    var a = this.msgList[i][0],
                      r = new Date,
                      n = Math.ceil(+r / 1e3),
                      o = [a ? n - (a.t || a[0]) : n, t, s, r.getMilliseconds()];
                    if (!this.msgList[i].length) {
                      var h = (new Date).getTimezoneOffset();
                      o.push(h)
                    }
                    this.msgList[i].push(o), this.levelList[i] = this.levelList[i] || 0, this.levelList[i] = this.levelList[i] | s
                  }
                }
              }
            }, {
              key: "OperateWxUploadLog",
              value: function(t, e) {
                if (!c) return l({
                  apiName: "UploadByApi",
                  reqData: {
                    interface: "weapplog",
                    data: JSON.stringify(t)
                  }
                }).then((function() {
                  e && e(!0)
                })).catch((function(t) {
                  console.error("webapi_uploadwxalog err", t), t && 1e4 == +t.err_code && (c = !0), e && e(!1)
                }));
                console.log("Upload fail, Exceed today upload log max count.")
              }
            }, {
              key: "stat",
              value: function(t) {
                return t && this.sizeList[t] || 0
              }
            }, {
              key: "_hasUploadInterval",
              value: function() {
                return !(this._isUploading || Date.now() - this._lastUploadTime < 1e3)
              }
            }, {
              key: "upload",
              value: function(t) {
                if (t) {
                  var e = this.msgList[t] || [];
                  if (e && e.length) {
                    this.msgList[t] = [];
                    var s = this.levelList[t] || o.DEBUG;
                    this.levelList[t] = 0, this.sizeList[t] = 0;
                    var i = this._logInfo;
                    i.level = s, this.exceedSizeList[t] = 0, this._logInfo.timestamp = Math.ceil(Date.now() / 1e3), this._logInfo = Object.assign({}, this._logInfo), i.msg = JSON.stringify(e), i.analyze = JSON.stringify(this.analyzeList[t] || {}), this.analyzeList[t] = {}, i.appid = h, i.url = t, this.traceid && (i.traceid = this.traceid), i.device = this.systemInfo.model + " " + this.systemInfo.system, i.filter1 = this.filterList[t] || "", this.filterList[t] = "", this._hasUploadInterval() ? (this._isUploading = !0, this.uploadAllMsg(i)) : this._uploadList.push(i)
                  }
                }
              }
            }, {
              key: "uploadAllMsg",
              value: function(t) {
                var e = this;
                this.OperateWxUploadLog(t, (function(t) {
                  e._isUploading = !1, e._lastUploadTime = Date.now(), t && e._uploadList.length && (f && clearTimeout(f), f = setTimeout((function() {
                    f = null, e.uploadAllMsg(e._uploadList.shift())
                  }), 1e3))
                }))
              }
            }, {
              key: "setFilterMsg",
              value: function(t, e) {
                return "string" != typeof e && (e = JSON.stringify(e)), p(e) > 2048 ? (console.log("UserLog set fileter msg fail, exceed max size", 2048), !1) : (this.filterList[t] = e, !0)
              }
            }, {
              key: "setAnalyze",
              value: function(t, e) {
                this.analyzeList[t] = e
              }
            }, {
              key: "addFilterMsg",
              value: function(t, e) {
                "string" != typeof e && (e = JSON.stringify(e));
                var s = this.filterList[t] || "";
                this.setFilterMsg(t, s + (s ? " " : "") + e)
              }
            }, {
              key: "getTraceId",
              value: function() {
                return this.traceid || ""
              }
            }]) && function(t, e) {
              for (var s = 0; s < e.length; s++) {
                var i = e[s];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
              }
            }(t.prototype, e), t
          }(),
          d = null;
        t.exports = function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = t.page,
            s = {
              debug: function() {
                var t;
                if (d) {
                  for (var s = arguments.length, i = new Array(s), a = 0; a < s; a++) i[a] = arguments[a];
                  return (t = d)._baseLog.apply(t, ["debug", e].concat(i))
                }
              },
              info: function() {
                for (var t, s, i = arguments.length, a = new Array(i), r = 0; r < i; r++) a[r] = arguments[r];
                if ((t = console).log.apply(t, a), d) return (s = d)._baseLog.apply(s, ["info", e].concat(a))
              },
              warn: function() {
                var t;
                if (d) {
                  for (var s = arguments.length, i = new Array(s), a = 0; a < s; a++) i[a] = arguments[a];
                  return (t = d)._baseLog.apply(t, ["warn", e].concat(i))
                }
              },
              error: function() {
                var t;
                if (d) {
                  for (var s = arguments.length, i = new Array(s), a = 0; a < s; a++) i[a] = arguments[a];
                  return (t = d)._baseLog.apply(t, ["error", e].concat(i))
                }
              },
              stat: function() {
                if (d) return d.stat(e)
              },
              setFilterMsg: function(t) {
                if (d) return d.setFilterMsg(e, t)
              },
              addFilterMsg: function(t) {
                if (d) return d.addFilterMsg(e, t)
              },
              in: function(t) {
                t && t.route && (e = t.route)
              },
              upload: function() {
                d && d.upload(e)
              },
              setAnalyze: function(t) {
                d && d.setAnalyze(e, t)
              }
            };
          return d || (d = new m({
            appid: t.appid,
            hasPermission: t.hasPermission
          })), s
        }
      }, function(t, e, s) {
        s.r(e),
          function(t) {
            var a = s(1),
              r = s.n(a),
              n = s(2),
              o = s.n(n),
              h = s(0);

            function l(t) {
              return (l = "function" == typeof Symbol && "symbol" == i(Symbol.iterator) ? function(t) {
                return i(t)
              } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : i(t)
              })(t)
            }

            function p(t, e, s) {
              return e in t ? Object.defineProperty(t, e, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : t[e] = s, t
            }
            var f = o()({
                appid: "wx2b03c6e691cd7370",
                page: "/pages/like-animation-api",
                hasPermission: !0
              }),
              c = h.a.window,
              m = h.a.document,
              d = h.a.navigator,
              u = new WeakMap,
              g = new WeakMap,
              v = new WeakMap,
              y = new WeakMap,
              _ = new WeakMap;

            function b(t) {
              if ("function" == typeof this["on".concat(t)]) {
                for (var e = arguments.length, s = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) s[i - 1] = arguments[i];
                this["on".concat(t)].apply(this, s)
              }
            }

            function x(t) {
              this.readyState = t, b.call(this, "readystatechange")
            }
            var k = function() {
              function t() {
                ! function(t, e) {
                  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), p(this, "onabort", null), p(this, "onerror", null), p(this, "onload", null), p(this, "onloadstart", null), p(this, "onprogress", null), p(this, "ontimeout", null), p(this, "onloadend", null), p(this, "onreadystatechange", null), p(this, "readyState", 0), p(this, "response", null), p(this, "responseText", null), p(this, "responseType", ""), p(this, "responseXML", null), p(this, "status", 0), p(this, "statusText", ""), p(this, "upload", {}), p(this, "withCredentials", !1), v.set(this, {
                  "content-type": "application/x-www-form-urlencoded"
                }), y.set(this, {})
              }
              var e;
              return (e = [{
                key: "abort",
                value: function() {
                  var t = _.get(this);
                  t && t.abort()
                }
              }, {
                key: "getAllResponseHeaders",
                value: function() {
                  var t = y.get(this);
                  return Object.keys(t).map((function(e) {
                    return "".concat(e, ": ").concat(t[e])
                  })).join("\n")
                }
              }, {
                key: "getResponseHeader",
                value: function(t) {
                  return y.get(this)[t]
                }
              }, {
                key: "open",
                value: function(e, s) {
                  g.set(this, e), u.set(this, s), x.call(this, t.OPENED)
                }
              }, {
                key: "overrideMimeType",
                value: function() {}
              }, {
                key: "send",
                value: function() {
                  var e = this,
                    s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                  if (this.readyState !== t.OPENED) throw new Error("Failed to execute 'send' on 'XMLHttpRequest': The object's state must be OPENED.");
                  wx.request({
                    data: s,
                    url: u.get(this),
                    method: g.get(this),
                    header: v.get(this),
                    success: function(s) {
                      var i = s.data,
                        a = s.statusCode,
                        n = s.header;
                      if (f.info && f.info("wx.request succ", u.get(e)), r.a.reportPerformance(101056, 1), "string" != typeof i && !(i instanceof ArrayBuffer)) try {
                        i = JSON.stringify(i)
                      } catch (t) {}
                      if (e.status = a, y.set(e, n), b.call(e, "loadstart"), x.call(e, t.HEADERS_RECEIVED), x.call(e, t.LOADING), e.response = i, i instanceof ArrayBuffer) {
                        e.responseText = "";
                        for (var o = new Uint8Array(i), h = o.byteLength, l = 0; l < h; l++) e.responseText += String.fromCharCode(o[l])
                      } else e.responseText = i;
                      x.call(e, t.DONE), b.call(e, "load"), b.call(e, "loadend")
                    },
                    fail: function(t) {
                      var s = t.errMsg;
                      f.error && f.error("wx.request fail", u.get(e), s), r.a.reportPerformance(101057, 1), -1 !== s.indexOf("abort") ? b.call(e, "abort") : b.call(e, "error", s), b.call(e, "loadend")
                    }
                  })
                }
              }, {
                key: "setRequestHeader",
                value: function(t, e) {
                  var s = v.get(this);
                  s[t] = e, v.set(this, s)
                }
              }]) && function(t, e) {
                for (var s = 0; s < e.length; s++) {
                  var i = e[s];
                  i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
              }(t.prototype, e), t
            }();
            p(k, "UNSEND", 0), p(k, "OPENED", 1), p(k, "HEADERS_RECEIVED", 2), p(k, "LOADING", 3), p(k, "DONE", 4), void 0 !== d && function(e, s) {
              "object" === l(t) && t.exports ? t.exports = function() {
                return s(e)
              } : (e.lottie = function() {
                return s(e)
              }, e.bodymovin = e.lottie)
            }(c || {}, (function(t) {
              var e = "",
                s = -999999,
                i = !0,
                a = [],
                r = (/^((?!chrome|android).)*safari/i.test(d.userAgent), Math.round, Math.pow),
                n = Math.sqrt,
                o = (Math.abs, Math.floor),
                p = (Math.max, Math.min),
                f = {};
              ! function() {
                var t, e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
                  s = e.length;
                for (t = 0; t < s; t += 1) f[e[t]] = Math[e[t]]
              }(), f.random = Math.random, f.abs = function(t) {
                if ("object" === l(t) && t.length) {
                  var e, s = E(t.length),
                    i = t.length;
                  for (e = 0; e < i; e += 1) s[e] = Math.abs(t[e]);
                  return s
                }
                return Math.abs(t)
              };
              var c = 150,
                u = Math.PI / 180;

              function g(t) {
                t && Math.round
              }

              function v(t, e, s, i) {
                this.type = t, this.currentTime = e, this.totalTime = s, this.direction = i < 0 ? -1 : 1
              }

              function y(t, e, s) {
                this.type = t, this.direction = e < 0 ? -1 : 1, this.fps = s || 0
              }

              function _(t, e, s, i, a) {
                this.type = t, this.currentLoop = s, this.totalLoops = e, this.direction = i < 0 ? -1 : 1, this.fps = a || 0
              }

              function b(t, e, s) {
                this.type = t, this.firstFrame = e, this.totalFrames = s
              }

              function x(t, e) {
                this.type = t, this.target = e
              }

              function P(t, e) {
                this.type = "renderFrameError", this.nativeError = t, this.currentTime = e
              }

              function D(t) {
                this.type = "configError", this.nativeError = t
              }
              g(!1);
              var C, S = (C = 0, function() {
                return "__lottie_element_" + ++C
              });

              function w(t, e, s) {
                var i, a, r, n, o, h, l, p;
                switch (h = s * (1 - e), l = s * (1 - (o = 6 * t - (n = Math.floor(6 * t))) * e), p = s * (1 - (1 - o) * e), n % 6) {
                  case 0:
                    i = s, a = p, r = h;
                    break;
                  case 1:
                    i = l, a = s, r = h;
                    break;
                  case 2:
                    i = h, a = s, r = p;
                    break;
                  case 3:
                    i = h, a = l, r = s;
                    break;
                  case 4:
                    i = p, a = h, r = s;
                    break;
                  case 5:
                    i = s, a = h, r = l
                }
                return [i, a, r]
              }

              function T(t, e, s) {
                var i, a = Math.max(t, e, s),
                  r = Math.min(t, e, s),
                  n = a - r,
                  o = 0 === a ? 0 : n / a,
                  h = a / 255;
                switch (a) {
                  case r:
                    i = 0;
                    break;
                  case t:
                    i = e - s + n * (e < s ? 6 : 0), i /= 6 * n;
                    break;
                  case e:
                    i = s - t + 2 * n, i /= 6 * n;
                    break;
                  case s:
                    i = t - e + 4 * n, i /= 6 * n
                }
                return [i, o, h]
              }

              function M(t, e) {
                var s = T(255 * t[0], 255 * t[1], 255 * t[2]);
                return s[1] += e, s[1] > 1 ? s[1] = 1 : s[1] <= 0 && (s[1] = 0), w(s[0], s[1], s[2])
              }

              function A(t, e) {
                var s = T(255 * t[0], 255 * t[1], 255 * t[2]);
                return s[2] += e, s[2] > 1 ? s[2] = 1 : s[2] < 0 && (s[2] = 0), w(s[0], s[1], s[2])
              }

              function F(t, e) {
                var s = T(255 * t[0], 255 * t[1], 255 * t[2]);
                return s[0] += e / 360, s[0] > 1 ? s[0] -= 1 : s[0] < 0 && (s[0] += 1), w(s[0], s[1], s[2])
              }

              function L() {}! function() {
                var t, e, s = [];
                for (t = 0; t < 256; t += 1) e = t.toString(16), s[t] = 1 == e.length ? "0" + e : e
              }(), L.prototype = {
                triggerEvent: function(t, e) {
                  if (this._cbs[t])
                    for (var s = this._cbs[t].length, i = 0; i < s; i++) this._cbs[t][i](e)
                },
                addEventListener: function(t, e) {
                  return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e),
                    function() {
                      this.removeEventListener(t, e)
                    }.bind(this)
                },
                removeEventListener: function(t, e) {
                  if (e) {
                    if (this._cbs[t]) {
                      for (var s = 0, i = this._cbs[t].length; s < i;) this._cbs[t][s] === e && (this._cbs[t].splice(s, 1), s -= 1, i -= 1), s += 1;
                      this._cbs[t].length || (this._cbs[t] = null)
                    }
                  } else this._cbs[t] = null
                }
              };
              var I = "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(t, e) {
                return "float32" === t ? new Float32Array(e) : "int16" === t ? new Int16Array(e) : "uint8c" === t ? new Uint8ClampedArray(e) : void 0
              } : function(t, e) {
                var s, i = 0,
                  a = [];
                switch (t) {
                  case "int16":
                  case "uint8c":
                    s = 1;
                    break;
                  default:
                    s = 1.1
                }
                for (i = 0; i < e; i += 1) a.push(s);
                return a
              };

              function E(t) {
                return Array.apply(null, {
                  length: t
                })
              }

              function O(t) {
                return m.createElement(t)
              }

              function N() {}
              N.prototype = {
                addDynamicProperty: function(t) {
                  -1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0)
                },
                iterateDynamicProperties: function() {
                  this._mdf = !1;
                  var t, e = this.dynamicProperties.length;
                  for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0)
                },
                initDynamicPropertyContainer: function(t) {
                  this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
                }
              };
              var R, z = (R = {
                  0: "source-over",
                  1: "multiply",
                  2: "screen",
                  3: "overlay",
                  4: "darken",
                  5: "lighten",
                  6: "color-dodge",
                  7: "color-burn",
                  8: "hard-light",
                  9: "soft-light",
                  10: "difference",
                  11: "exclusion",
                  12: "hue",
                  13: "saturation",
                  14: "color",
                  15: "luminosity"
                }, function(t) {
                  return R[t] || ""
                }),
                V = function() {
                  var t = Math.cos,
                    e = Math.sin,
                    s = Math.tan,
                    i = Math.round;

                  function a() {
                    return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
                  }

                  function r(s) {
                    if (0 === s) return this;
                    var i = t(s),
                      a = e(s);
                    return this._t(i, -a, 0, 0, a, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                  }

                  function n(s) {
                    if (0 === s) return this;
                    var i = t(s),
                      a = e(s);
                    return this._t(1, 0, 0, 0, 0, i, -a, 0, 0, a, i, 0, 0, 0, 0, 1)
                  }

                  function o(s) {
                    if (0 === s) return this;
                    var i = t(s),
                      a = e(s);
                    return this._t(i, 0, a, 0, 0, 1, 0, 0, -a, 0, i, 0, 0, 0, 0, 1)
                  }

                  function h(s) {
                    if (0 === s) return this;
                    var i = t(s),
                      a = e(s);
                    return this._t(i, -a, 0, 0, a, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                  }

                  function l(t, e) {
                    return this._t(1, e, t, 1, 0, 0)
                  }

                  function p(t, e) {
                    return this.shear(s(t), s(e))
                  }

                  function f(i, a) {
                    var r = t(a),
                      n = e(a);
                    return this._t(r, n, 0, 0, -n, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, s(i), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(r, -n, 0, 0, n, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                  }

                  function c(t, e, s) {
                    return s || 0 === s || (s = 1), 1 === t && 1 === e && 1 === s ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, s, 0, 0, 0, 0, 1)
                  }

                  function m(t, e, s, i, a, r, n, o, h, l, p, f, c, m, d, u) {
                    return this.props[0] = t, this.props[1] = e, this.props[2] = s, this.props[3] = i, this.props[4] = a, this.props[5] = r, this.props[6] = n, this.props[7] = o, this.props[8] = h, this.props[9] = l, this.props[10] = p, this.props[11] = f, this.props[12] = c, this.props[13] = m, this.props[14] = d, this.props[15] = u, this
                  }

                  function d(t, e, s) {
                    return s = s || 0, 0 !== t || 0 !== e || 0 !== s ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, s, 1) : this
                  }

                  function u(t, e, s, i, a, r, n, o, h, l, p, f, c, m, d, u) {
                    var g = this.props;
                    if (1 === t && 0 === e && 0 === s && 0 === i && 0 === a && 1 === r && 0 === n && 0 === o && 0 === h && 0 === l && 1 === p && 0 === f) return g[12] = g[12] * t + g[15] * c, g[13] = g[13] * r + g[15] * m, g[14] = g[14] * p + g[15] * d, g[15] = g[15] * u, this._identityCalculated = !1, this;
                    var v = g[0],
                      y = g[1],
                      _ = g[2],
                      b = g[3],
                      x = g[4],
                      k = g[5],
                      P = g[6],
                      D = g[7],
                      C = g[8],
                      S = g[9],
                      w = g[10],
                      T = g[11],
                      M = g[12],
                      A = g[13],
                      F = g[14],
                      L = g[15];
                    return g[0] = v * t + y * a + _ * h + b * c, g[1] = v * e + y * r + _ * l + b * m, g[2] = v * s + y * n + _ * p + b * d, g[3] = v * i + y * o + _ * f + b * u, g[4] = x * t + k * a + P * h + D * c, g[5] = x * e + k * r + P * l + D * m, g[6] = x * s + k * n + P * p + D * d, g[7] = x * i + k * o + P * f + D * u, g[8] = C * t + S * a + w * h + T * c, g[9] = C * e + S * r + w * l + T * m, g[10] = C * s + S * n + w * p + T * d, g[11] = C * i + S * o + w * f + T * u, g[12] = M * t + A * a + F * h + L * c, g[13] = M * e + A * r + F * l + L * m, g[14] = M * s + A * n + F * p + L * d, g[15] = M * i + A * o + F * f + L * u, this._identityCalculated = !1, this
                  }

                  function g() {
                    return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity
                  }

                  function v(t) {
                    for (var e = 0; e < 16;) {
                      if (t.props[e] !== this.props[e]) return !1;
                      e += 1
                    }
                    return !0
                  }

                  function y(t) {
                    var e;
                    for (e = 0; e < 16; e += 1) t.props[e] = this.props[e]
                  }

                  function _(t) {
                    var e;
                    for (e = 0; e < 16; e += 1) this.props[e] = t[e]
                  }

                  function b(t, e, s) {
                    return {
                      x: t * this.props[0] + e * this.props[4] + s * this.props[8] + this.props[12],
                      y: t * this.props[1] + e * this.props[5] + s * this.props[9] + this.props[13],
                      z: t * this.props[2] + e * this.props[6] + s * this.props[10] + this.props[14]
                    }
                  }

                  function x(t, e, s) {
                    return t * this.props[0] + e * this.props[4] + s * this.props[8] + this.props[12]
                  }

                  function k(t, e, s) {
                    return t * this.props[1] + e * this.props[5] + s * this.props[9] + this.props[13]
                  }

                  function P(t, e, s) {
                    return t * this.props[2] + e * this.props[6] + s * this.props[10] + this.props[14]
                  }

                  function D(t) {
                    var e = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                      s = this.props[5] / e,
                      i = -this.props[1] / e,
                      a = -this.props[4] / e,
                      r = this.props[0] / e,
                      n = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / e,
                      o = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / e;
                    return [t[0] * s + t[1] * a + n, t[0] * i + t[1] * r + o, 0]
                  }

                  function C(t) {
                    var e, s = t.length,
                      i = [];
                    for (e = 0; e < s; e += 1) i[e] = D(t[e]);
                    return i
                  }

                  function S(t, e, s) {
                    var i = I("float32", 6);
                    if (this.isIdentity()) i[0] = t[0], i[1] = t[1], i[2] = e[0], i[3] = e[1], i[4] = s[0], i[5] = s[1];
                    else {
                      var a = this.props[0],
                        r = this.props[1],
                        n = this.props[4],
                        o = this.props[5],
                        h = this.props[12],
                        l = this.props[13];
                      i[0] = t[0] * a + t[1] * n + h, i[1] = t[0] * r + t[1] * o + l, i[2] = e[0] * a + e[1] * n + h, i[3] = e[0] * r + e[1] * o + l, i[4] = s[0] * a + s[1] * n + h, i[5] = s[0] * r + s[1] * o + l
                    }
                    return i
                  }

                  function w(t, e, s) {
                    return this.isIdentity() ? [t, e, s] : [t * this.props[0] + e * this.props[4] + s * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + s * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + s * this.props[10] + this.props[14]]
                  }

                  function T(t, e) {
                    if (this.isIdentity()) return t + "," + e;
                    var s = this.props;
                    return Math.round(100 * (t * s[0] + e * s[4] + s[12])) / 100 + "," + Math.round(100 * (t * s[1] + e * s[5] + s[13])) / 100
                  }

                  function M() {
                    for (var t = 0, e = this.props, s = "matrix3d("; t < 16;) s += i(1e4 * e[t]) / 1e4, s += 15 === t ? ")" : ",", t += 1;
                    return s
                  }

                  function A(t) {
                    return t < 1e-6 && t > 0 || t > -1e-6 && t < 0 ? i(1e4 * t) / 1e4 : t
                  }

                  function F() {
                    var t = this.props;
                    return "matrix(" + A(t[0]) + "," + A(t[1]) + "," + A(t[4]) + "," + A(t[5]) + "," + A(t[12]) + "," + A(t[13]) + ")"
                  }
                  return function() {
                    this.reset = a, this.rotate = r, this.rotateX = n, this.rotateY = o, this.rotateZ = h, this.skew = p, this.skewFromAxis = f, this.shear = l, this.scale = c, this.setTransform = m, this.translate = d, this.transform = u, this.applyToPoint = b, this.applyToX = x, this.applyToY = k, this.applyToZ = P, this.applyToPointArray = w, this.applyToTriplePoints = S, this.applyToPointStringified = T, this.toCSS = M, this.to2dCSS = F, this.clone = y, this.cloneFromProps = _, this.equals = v, this.inversePoints = C, this.inversePoint = D, this._t = this.transform, this.isIdentity = g, this._identity = !0, this._identityCalculated = !1, this.props = I("float32", 16), this.reset()
                  }
                }();
              ! function(t, e) {
                var s = this,
                  i = 256,
                  a = e.pow(i, 6),
                  r = e.pow(2, 52),
                  n = 2 * r,
                  o = 255;

                function h(t) {
                  var e, s = t.length,
                    a = this,
                    r = 0,
                    n = a.i = a.j = 0,
                    h = a.S = [];
                  for (s || (t = [s++]); r < i;) h[r] = r++;
                  for (r = 0; r < i; r++) h[r] = h[n = o & n + t[r % s] + (e = h[r])], h[n] = e;
                  a.g = function(t) {
                    for (var e, s = 0, r = a.i, n = a.j, h = a.S; t--;) e = h[r = o & r + 1], s = s * i + h[o & (h[r] = h[n = o & n + e]) + (h[n] = e)];
                    return a.i = r, a.j = n, s
                  }
                }

                function p(t, e) {
                  return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e
                }

                function f(t, e) {
                  for (var s, i = t + "", a = 0; a < i.length;) e[o & a] = o & (s ^= 19 * e[o & a]) + i.charCodeAt(a++);
                  return c(e)
                }

                function c(t) {
                  return String.fromCharCode.apply(0, t)
                }
                e.seedrandom = function(o, m, d) {
                  var u = [],
                    g = f(function t(e, s) {
                      var i, a = [],
                        r = l(e);
                      if (s && "object" == r)
                        for (i in e) try {
                          a.push(t(e[i], s - 1))
                        } catch (t) {}
                      return a.length ? a : "string" == r ? e : e + "\0"
                    }((m = !0 === m ? {
                      entropy: !0
                    } : m || {}).entropy ? [o, c(t)] : null === o ? function() {
                      try {
                        var e = new Uint8Array(i);
                        return (s.crypto || s.msCrypto).getRandomValues(e), c(e)
                      } catch (e) {
                        var a = s.navigator,
                          r = a && a.plugins;
                        return [+new Date, s, r, s.screen, c(t)]
                      }
                    }() : o, 3), u),
                    v = new h(u),
                    y = function() {
                      for (var t = v.g(6), e = a, s = 0; t < r;) t = (t + s) * i, e *= i, s = v.g(1);
                      for (; t >= n;) t /= 2, e /= 2, s >>>= 1;
                      return (t + s) / e
                    };
                  return y.int32 = function() {
                    return 0 | v.g(4)
                  }, y.quick = function() {
                    return v.g(4) / 4294967296
                  }, y.double = y, f(c(v.S), t), (m.pass || d || function(t, s, i, a) {
                    return a && (a.S && p(a, v), t.state = function() {
                      return p(v, {})
                    }), i ? (e.random = t, s) : t
                  })(y, g, "global" in m ? m.global : this == e, m.state)
                }, f(e.random(), t)
              }([], f);
              var q = function() {
                var t = {
                    getBezierEasing: function(t, s, i, a, r) {
                      var n = r || ("bez_" + t + "_" + s + "_" + i + "_" + a).replace(/\./g, "p");
                      if (e[n]) return e[n];
                      var o = new l([t, s, i, a]);
                      return e[n] = o, o
                    }
                  },
                  e = {},
                  s = .1,
                  i = "function" == typeof Float32Array;

                function a(t, e) {
                  return 1 - 3 * e + 3 * t
                }

                function r(t, e) {
                  return 3 * e - 6 * t
                }

                function n(t) {
                  return 3 * t
                }

                function o(t, e, s) {
                  return ((a(e, s) * t + r(e, s)) * t + n(e)) * t
                }

                function h(t, e, s) {
                  return 3 * a(e, s) * t * t + 2 * r(e, s) * t + n(e)
                }

                function l(t) {
                  this._p = t, this._mSampleValues = i ? new Float32Array(11) : new Array(11), this._precomputed = !1, this.get = this.get.bind(this)
                }
                return l.prototype = {
                  get: function(t) {
                    var e = this._p[0],
                      s = this._p[1],
                      i = this._p[2],
                      a = this._p[3];
                    return this._precomputed || this._precompute(), e === s && i === a ? t : 0 === t ? 0 : 1 === t ? 1 : o(this._getTForX(t), s, a)
                  },
                  _precompute: function() {
                    var t = this._p[0],
                      e = this._p[1],
                      s = this._p[2],
                      i = this._p[3];
                    this._precomputed = !0, t === e && s === i || this._calcSampleValues()
                  },
                  _calcSampleValues: function() {
                    for (var t = this._p[0], e = this._p[2], i = 0; i < 11; ++i) this._mSampleValues[i] = o(i * s, t, e)
                  },
                  _getTForX: function(t) {
                    for (var e = this._p[0], i = this._p[2], a = this._mSampleValues, r = 0, n = 1; 10 !== n && a[n] <= t; ++n) r += s;
                    var l = r + (t - a[--n]) / (a[n + 1] - a[n]) * s,
                      p = h(l, e, i);
                    return p >= .001 ? function(t, e, s, i) {
                      for (var a = 0; a < 4; ++a) {
                        var r = h(e, s, i);
                        if (0 === r) return e;
                        e -= (o(e, s, i) - t) / r
                      }
                      return e
                    }(t, l, e, i) : 0 === p ? l : function(t, e, s, i, a) {
                      var r, n, h = 0;
                      do {
                        (r = o(n = e + (s - e) / 2, i, a) - t) > 0 ? s = n : e = n
                      } while (Math.abs(r) > 1e-7 && ++h < 10);
                      return n
                    }(t, r, r + s, e, i)
                  }
                }, t
              }();

              function j(t, e) {
                var s, i, a = t.length;
                for (s = 0; s < a; s += 1)
                  for (var r in i = t[s].prototype) i.hasOwnProperty(r) && (e.prototype[r] = i[r])
              }! function() {
                for (var e = 0, s = ["ms", "moz", "webkit", "o"], i = 0; i < s.length && !t.requestAnimationFrame; ++i) t.requestAnimationFrame = t[s[i] + "RequestAnimationFrame"], t.cancelAnimationFrame = t[s[i] + "CancelAnimationFrame"] || t[s[i] + "CancelRequestAnimationFrame"];
                t.requestAnimationFrame || (t.requestAnimationFrame = function(t, s) {
                  var i = (new Date).getTime(),
                    a = Math.max(0, 16 - (i - e)),
                    r = setTimeout((function() {
                      t(i + a)
                    }), a);
                  return e = i + a, r
                }), t.cancelAnimationFrame || (t.cancelAnimationFrame = function(t) {
                  clearTimeout(t)
                })
              }();
              var W = function() {
                  function t(t, e, s, i, a, r) {
                    var n = t * i + e * a + s * r - a * i - r * t - s * e;
                    return n > -.001 && n < .001
                  }
                  Math;
                  var e = function(t, e, s, i) {
                    var a, o, h, l, p, f, m = c,
                      d = 0,
                      u = [],
                      g = [],
                      v = bt.newElement();
                    for (h = s.length, a = 0; a < m; a += 1) {
                      for (p = a / (m - 1), f = 0, o = 0; o < h; o += 1) l = r(1 - p, 3) * t[o] + 3 * r(1 - p, 2) * p * s[o] + 3 * (1 - p) * r(p, 2) * i[o] + r(p, 3) * e[o], u[o] = l, null !== g[o] && (f += r(u[o] - g[o], 2)), g[o] = u[o];
                      f && (d += f = n(f)), v.percents[a] = p, v.lengths[a] = d
                    }
                    return v.addedLength = d, v
                  };

                  function s(t) {
                    this.segmentLength = 0, this.points = new Array(t)
                  }

                  function i(t, e) {
                    this.partialLength = t, this.point = e
                  }
                  var a, h = (a = {}, function(e, o, h, l) {
                    var p = (e[0] + "_" + e[1] + "_" + o[0] + "_" + o[1] + "_" + h[0] + "_" + h[1] + "_" + l[0] + "_" + l[1]).replace(/\./g, "p");
                    if (!a[p]) {
                      var f, m, d, u, g, v, y, _ = c,
                        b = 0,
                        x = null;
                      2 === e.length && (e[0] != o[0] || e[1] != o[1]) && t(e[0], e[1], o[0], o[1], e[0] + h[0], e[1] + h[1]) && t(e[0], e[1], o[0], o[1], o[0] + l[0], o[1] + l[1]) && (_ = 2);
                      var k = new s(_);
                      for (d = h.length, f = 0; f < _; f += 1) {
                        for (y = E(d), g = f / (_ - 1), v = 0, m = 0; m < d; m += 1) u = r(1 - g, 3) * e[m] + 3 * r(1 - g, 2) * g * (e[m] + h[m]) + 3 * (1 - g) * r(g, 2) * (o[m] + l[m]) + r(g, 3) * o[m], y[m] = u, null !== x && (v += r(y[m] - x[m], 2));
                        b += v = n(v), k.points[f] = new i(v, y), x = y
                      }
                      k.segmentLength = b, a[p] = k
                    }
                    return a[p]
                  });

                  function l(t, e) {
                    var s = e.percents,
                      i = e.lengths,
                      a = s.length,
                      r = o((a - 1) * t),
                      n = t * e.addedLength,
                      h = 0;
                    if (r === a - 1 || 0 === r || n === i[r]) return s[r];
                    for (var l = i[r] > n ? -1 : 1, p = !0; p;)
                      if (i[r] <= n && i[r + 1] > n ? (h = (n - i[r]) / (i[r + 1] - i[r]), p = !1) : r += l, r < 0 || r >= a - 1) {
                        if (r === a - 1) return s[r];
                        p = !1
                      } return s[r] + (s[r + 1] - s[r]) * h
                  }
                  var p = I("float32", 8);
                  return {
                    getSegmentsLength: function(t) {
                      var s, i = _t.newElement(),
                        a = t.c,
                        r = t.v,
                        n = t.o,
                        o = t.i,
                        h = t._length,
                        l = i.lengths,
                        p = 0;
                      for (s = 0; s < h - 1; s += 1) l[s] = e(r[s], r[s + 1], n[s], o[s + 1]), p += l[s].addedLength;
                      return a && h && (l[s] = e(r[s], r[0], n[s], o[0]), p += l[s].addedLength), i.totalLength = p, i
                    },
                    getNewSegment: function(t, e, s, i, a, r, n) {
                      var o, h = l(a = a < 0 ? 0 : a > 1 ? 1 : a, n),
                        f = l(r = r > 1 ? 1 : r, n),
                        c = t.length,
                        m = 1 - h,
                        d = 1 - f,
                        u = m * m * m,
                        g = h * m * m * 3,
                        v = h * h * m * 3,
                        y = h * h * h,
                        _ = m * m * d,
                        b = h * m * d + m * h * d + m * m * f,
                        x = h * h * d + m * h * f + h * m * f,
                        k = h * h * f,
                        P = m * d * d,
                        D = h * d * d + m * f * d + m * d * f,
                        C = h * f * d + m * f * f + h * d * f,
                        S = h * f * f,
                        w = d * d * d,
                        T = f * d * d + d * f * d + d * d * f,
                        M = f * f * d + d * f * f + f * d * f,
                        A = f * f * f;
                      for (o = 0; o < c; o += 1) p[4 * o] = Math.round(1e3 * (u * t[o] + g * s[o] + v * i[o] + y * e[o])) / 1e3, p[4 * o + 1] = Math.round(1e3 * (_ * t[o] + b * s[o] + x * i[o] + k * e[o])) / 1e3, p[4 * o + 2] = Math.round(1e3 * (P * t[o] + D * s[o] + C * i[o] + S * e[o])) / 1e3, p[4 * o + 3] = Math.round(1e3 * (w * t[o] + T * s[o] + M * i[o] + A * e[o])) / 1e3;
                      return p
                    },
                    getPointInSegment: function(t, e, s, i, a, r) {
                      var n = l(a, r),
                        o = 1 - n;
                      return [Math.round(1e3 * (o * o * o * t[0] + (n * o * o + o * n * o + o * o * n) * s[0] + (n * n * o + o * n * n + n * o * n) * i[0] + n * n * n * e[0])) / 1e3, Math.round(1e3 * (o * o * o * t[1] + (n * o * o + o * n * o + o * o * n) * s[1] + (n * n * o + o * n * n + n * o * n) * i[1] + n * n * n * e[1])) / 1e3]
                    },
                    buildBezierData: h,
                    pointOnLine2D: t,
                    pointOnLine3D: function(e, s, i, a, r, n, o, h, l) {
                      if (0 === i && 0 === n && 0 === l) return t(e, s, a, r, o, h);
                      var p, f = Math.sqrt(Math.pow(a - e, 2) + Math.pow(r - s, 2) + Math.pow(n - i, 2)),
                        c = Math.sqrt(Math.pow(o - e, 2) + Math.pow(h - s, 2) + Math.pow(l - i, 2)),
                        m = Math.sqrt(Math.pow(o - a, 2) + Math.pow(h - r, 2) + Math.pow(l - n, 2));
                      return (p = f > c ? f > m ? f - c - m : m - c - f : m > c ? m - c - f : c - f - m) > -1e-4 && p < 1e-4
                    }
                  }
                }(),
                B = function() {
                  function t(t, e) {
                    for (var s = 0, i = e.length; s < i;) {
                      if (e[s].id === t) return e[s].layers.__used ? JSON.parse(JSON.stringify(e[s].layers)) : (e[s].layers.__used = !0, e[s].layers);
                      s += 1
                    }
                  }

                  function e(t) {
                    var i, a, r;
                    for (i = t.length - 1; i >= 0; i -= 1)
                      if ("sh" == t[i].ty)
                        if (t[i].ks.k.i) s(t[i].ks.k);
                        else
                          for (r = t[i].ks.k.length, a = 0; a < r; a += 1) t[i].ks.k[a].s && s(t[i].ks.k[a].s[0]), t[i].ks.k[a].e && s(t[i].ks.k[a].e[0]);
                    else "gr" == t[i].ty && e(t[i].it)
                  }

                  function s(t) {
                    var e, s = t.i.length;
                    for (e = 0; e < s; e += 1) t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1]
                  }

                  function i(t, e) {
                    var s = e ? e.split(".") : [100, 100, 100];
                    return t[0] > s[0] || !(s[0] > t[0]) && (t[1] > s[1] || !(s[1] > t[1]) && (t[2] > s[2] || !(s[2] > t[2]) && void 0))
                  }
                  var a, r = function() {
                      var t = [4, 4, 14];

                      function e(t) {
                        var e, s, i, a = t.length;
                        for (e = 0; e < a; e += 1) 5 === t[e].ty && (i = (s = t[e]).t.d, s.t.d = {
                          k: [{
                            s: i,
                            t: 0
                          }]
                        })
                      }
                      return function(s) {
                        if (i(t, s.v) && (e(s.layers), s.assets)) {
                          var a, r = s.assets.length;
                          for (a = 0; a < r; a += 1) s.assets[a].layers && e(s.assets[a].layers)
                        }
                      }
                    }(),
                    n = (a = [4, 7, 99], function(t) {
                      if (t.chars && !i(a, t.v)) {
                        var e, r, n, o, h, l = t.chars.length;
                        for (e = 0; e < l; e += 1)
                          if (t.chars[e].data && t.chars[e].data.shapes)
                            for (n = (h = t.chars[e].data.shapes[0].it).length, r = 0; r < n; r += 1)(o = h[r].ks.k).__converted || (s(h[r].ks.k), o.__converted = !0)
                      }
                    }),
                    o = function() {
                      var t = [4, 1, 9];

                      function e(t) {
                        var s, i, a, r = t.length;
                        for (s = 0; s < r; s += 1)
                          if ("gr" === t[s].ty) e(t[s].it);
                          else if ("fl" === t[s].ty || "st" === t[s].ty)
                          if (t[s].c.k && t[s].c.k[0].i)
                            for (a = t[s].c.k.length, i = 0; i < a; i += 1) t[s].c.k[i].s && (t[s].c.k[i].s[0] /= 255, t[s].c.k[i].s[1] /= 255, t[s].c.k[i].s[2] /= 255, t[s].c.k[i].s[3] /= 255), t[s].c.k[i].e && (t[s].c.k[i].e[0] /= 255, t[s].c.k[i].e[1] /= 255, t[s].c.k[i].e[2] /= 255, t[s].c.k[i].e[3] /= 255);
                          else t[s].c.k[0] /= 255, t[s].c.k[1] /= 255, t[s].c.k[2] /= 255, t[s].c.k[3] /= 255
                      }

                      function s(t) {
                        var s, i = t.length;
                        for (s = 0; s < i; s += 1) 4 === t[s].ty && e(t[s].shapes)
                      }
                      return function(e) {
                        if (i(t, e.v) && (s(e.layers), e.assets)) {
                          var a, r = e.assets.length;
                          for (a = 0; a < r; a += 1) e.assets[a].layers && s(e.assets[a].layers)
                        }
                      }
                    }(),
                    h = function() {
                      var t = [4, 4, 18];

                      function e(t) {
                        var s, i, a;
                        for (s = t.length - 1; s >= 0; s -= 1)
                          if ("sh" == t[s].ty)
                            if (t[s].ks.k.i) t[s].ks.k.c = t[s].closed;
                            else
                              for (a = t[s].ks.k.length, i = 0; i < a; i += 1) t[s].ks.k[i].s && (t[s].ks.k[i].s[0].c = t[s].closed), t[s].ks.k[i].e && (t[s].ks.k[i].e[0].c = t[s].closed);
                        else "gr" == t[s].ty && e(t[s].it)
                      }

                      function s(t) {
                        var s, i, a, r, n, o, h = t.length;
                        for (i = 0; i < h; i += 1) {
                          if ((s = t[i]).hasMask) {
                            var l = s.masksProperties;
                            for (r = l.length, a = 0; a < r; a += 1)
                              if (l[a].pt.k.i) l[a].pt.k.c = l[a].cl;
                              else
                                for (o = l[a].pt.k.length, n = 0; n < o; n += 1) l[a].pt.k[n].s && (l[a].pt.k[n].s[0].c = l[a].cl), l[a].pt.k[n].e && (l[a].pt.k[n].e[0].c = l[a].cl)
                          }
                          4 === s.ty && e(s.shapes)
                        }
                      }
                      return function(e) {
                        if (i(t, e.v) && (s(e.layers), e.assets)) {
                          var a, r = e.assets.length;
                          for (a = 0; a < r; a += 1) e.assets[a].layers && s(e.assets[a].layers)
                        }
                      }
                    }();

                  function l(t, e) {
                    0 !== t.t.a.length || "m" in t.t.p || (t.singleShape = !0)
                  }
                  return {
                    completeData: function(i, a) {
                      i.__complete || (o(i), r(i), n(i), h(i), function i(a, r, n) {
                        var o, h, p, f, c, m, d = a.length;
                        for (h = 0; h < d; h += 1)
                          if ("ks" in (o = a[h]) && !o.completed) {
                            if (o.completed = !0, o.tt && (a[h - 1].td = o.tt), o.hasMask) {
                              var u = o.masksProperties;
                              for (f = u.length, p = 0; p < f; p += 1)
                                if (u[p].pt.k.i) s(u[p].pt.k);
                                else
                                  for (m = u[p].pt.k.length, c = 0; c < m; c += 1) u[p].pt.k[c].s && s(u[p].pt.k[c].s[0]), u[p].pt.k[c].e && s(u[p].pt.k[c].e[0])
                            }
                            0 === o.ty ? (o.layers = t(o.refId, r), i(o.layers, r, n)) : 4 === o.ty ? e(o.shapes) : 5 == o.ty && l(o)
                          }
                      }(i.layers, i.assets, a), i.__complete = !0)
                    }
                  }
                }(),
                H = function() {
                  var t = {
                      w: 0,
                      size: 0,
                      shapes: []
                    },
                    e = [];

                  function s(t, e) {
                    var s = O("span");
                    s.style.fontFamily = e;
                    var i = O("span");
                    i.innerHTML = "giItT1WQy@!-/#", s.style.position = "absolute", s.style.left = "-10000px", s.style.top = "-10000px", s.style.fontSize = "300px", s.style.fontVariant = "normal", s.style.fontStyle = "normal", s.style.fontWeight = "normal", s.style.letterSpacing = "0", s.appendChild(i), m.body.appendChild(s);
                    var a = i.offsetWidth;
                    return i.style.fontFamily = t + ", " + e, {
                      node: i,
                      w: a,
                      parent: s
                    }
                  }

                  function i(t, e) {
                    var s = createNS("text");
                    return s.style.fontSize = "100px", s.setAttribute("font-family", e.fFamily), s.setAttribute("font-style", e.fStyle), s.setAttribute("font-weight", e.fWeight), s.textContent = "1", e.fClass ? (s.style.fontFamily = "inherit", s.setAttribute("class", e.fClass)) : s.style.fontFamily = e.fFamily, t.appendChild(s), O("canvas").getContext("2d").font = e.fWeight + " " + e.fStyle + " 100px " + e.fFamily, s
                  }
                  e = e.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
                  var a = function() {
                    this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this.initTime = Date.now()
                  };
                  return a.getCombinedCharacterCodes = function() {
                    return e
                  }, a.prototype.addChars = function(t) {
                    if (t) {
                      this.chars || (this.chars = []);
                      var e, s, i, a = t.length,
                        r = this.chars.length;
                      for (e = 0; e < a; e += 1) {
                        for (s = 0, i = !1; s < r;) this.chars[s].style === t[e].style && this.chars[s].fFamily === t[e].fFamily && this.chars[s].ch === t[e].ch && (i = !0), s += 1;
                        i || (this.chars.push(t[e]), r += 1)
                      }
                    }
                  }, a.prototype.addFonts = function(t, e) {
                    if (t) {
                      if (this.chars) return this.isLoaded = !0, void(this.fonts = t.list);
                      var a, r = t.list,
                        n = r.length,
                        o = n;
                      for (a = 0; a < n; a += 1) {
                        var h, l, p = !0;
                        if (r[a].loaded = !1, r[a].monoCase = s(r[a].fFamily, "monospace"), r[a].sansCase = s(r[a].fFamily, "sans-serif"), r[a].fPath) {
                          if ("p" === r[a].fOrigin || 3 === r[a].origin) {
                            if ((h = m.querySelectorAll('style[f-forigin="p"][f-family="' + r[a].fFamily + '"], style[f-origin="3"][f-family="' + r[a].fFamily + '"]')).length > 0 && (p = !1), p) {
                              var f = O("style");
                              f.setAttribute("f-forigin", r[a].fOrigin), f.setAttribute("f-origin", r[a].origin), f.setAttribute("f-family", r[a].fFamily), f.type = "text/css", f.innerHTML = "@font-face {font-family: " + r[a].fFamily + "; font-style: normal; src: url('" + r[a].fPath + "');}", e.appendChild(f)
                            }
                          } else if ("g" === r[a].fOrigin || 1 === r[a].origin) {
                            for (h = m.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), l = 0; l < h.length; l++) - 1 !== h[l].href.indexOf(r[a].fPath) && (p = !1);
                            if (p) {
                              var c = O("link");
                              c.setAttribute("f-forigin", r[a].fOrigin), c.setAttribute("f-origin", r[a].origin), c.type = "text/css", c.rel = "stylesheet", c.href = r[a].fPath, m.body.appendChild(c)
                            }
                          } else if ("t" === r[a].fOrigin || 2 === r[a].origin) {
                            for (h = m.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), l = 0; l < h.length; l++) r[a].fPath === h[l].src && (p = !1);
                            if (p) {
                              var d = O("link");
                              d.setAttribute("f-forigin", r[a].fOrigin), d.setAttribute("f-origin", r[a].origin), d.setAttribute("rel", "stylesheet"), d.setAttribute("href", r[a].fPath), e.appendChild(d)
                            }
                          }
                        } else r[a].loaded = !0, o -= 1;
                        r[a].helper = i(e, r[a]), r[a].cache = {}, this.fonts.push(r[a])
                      }
                      0 === o ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
                    } else this.isLoaded = !0
                  }, a.prototype.getCharData = function(e, s, i) {
                    for (var a = 0, r = this.chars.length; a < r;) {
                      if (this.chars[a].ch === e && this.chars[a].style === s && this.chars[a].fFamily === i) return this.chars[a];
                      a += 1
                    }
                    return ("string" == typeof e && 13 !== e.charCodeAt(0) || !e) && console && console.warn && console.warn("Missing character from exported characters list: ", e, s, i), t
                  }, a.prototype.getFontByName = function(t) {
                    for (var e = 0, s = this.fonts.length; e < s;) {
                      if (this.fonts[e].fName === t) return this.fonts[e];
                      e += 1
                    }
                    return this.fonts[0]
                  }, a.prototype.measureText = function(t, e, s) {
                    var i = this.getFontByName(e),
                      a = t.charCodeAt(0);
                    return i.cache[a + 1] * s
                  }, a.prototype.checkLoadedFonts = function() {
                    var t, e, s, i = this.fonts.length,
                      a = i;
                    for (t = 0; t < i; t += 1) this.fonts[t].loaded ? a -= 1 : "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin ? this.fonts[t].loaded = !0 : (e = this.fonts[t].monoCase.node, s = this.fonts[t].monoCase.w, e.offsetWidth !== s ? (a -= 1, this.fonts[t].loaded = !0) : (e = this.fonts[t].sansCase.node, s = this.fonts[t].sansCase.w, e.offsetWidth !== s && (a -= 1, this.fonts[t].loaded = !0)), this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
                    0 !== a && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFonts.bind(this), 20) : setTimeout(function() {
                      this.isLoaded = !0
                    }.bind(this), 0)
                  }, a.prototype.loaded = function() {
                    return this.isLoaded
                  }, a
                }(),
                X = function() {
                  var t = s,
                    e = Math.abs;

                  function i(t, e) {
                    var s, i = this.offsetTime;
                    "multidimensional" === this.propType && (s = I("float32", this.pv.length));
                    for (var r, n, o, h, l, p, f, c, m = e.lastIndex, d = m, g = this.keyframes.length - 1, v = !0; v;) {
                      if (r = this.keyframes[d], n = this.keyframes[d + 1], d === g - 1 && t >= n.t - i) {
                        r.h && (r = n), m = 0;
                        break
                      }
                      if (n.t - i > t) {
                        m = d;
                        break
                      }
                      d < g - 1 ? d += 1 : (m = 0, v = !1)
                    }
                    var y, _ = n.t - i,
                      b = r.t - i;
                    if (r.to) {
                      r.bezierData || (r.bezierData = W.buildBezierData(r.s, n.s || r.e, r.to, r.ti));
                      var x = r.bezierData;
                      if (t >= _ || t < b) {
                        var k = t >= _ ? x.points.length - 1 : 0;
                        for (h = x.points[k].point.length, o = 0; o < h; o += 1) s[o] = x.points[k].point[o]
                      } else {
                        r.__fnct ? c = r.__fnct : (c = q.getBezierEasing(r.o.x, r.o.y, r.i.x, r.i.y, r.n).get, r.__fnct = c), l = c((t - b) / (_ - b));
                        var P, D = x.segmentLength * l,
                          C = e.lastFrame < t && e._lastKeyframeIndex === d ? e._lastAddedLength : 0;
                        for (f = e.lastFrame < t && e._lastKeyframeIndex === d ? e._lastPoint : 0, v = !0, p = x.points.length; v;) {
                          if (C += x.points[f].partialLength, 0 === D || 0 === l || f === x.points.length - 1) {
                            for (h = x.points[f].point.length, o = 0; o < h; o += 1) s[o] = x.points[f].point[o];
                            break
                          }
                          if (D >= C && D < C + x.points[f + 1].partialLength) {
                            for (P = (D - C) / x.points[f + 1].partialLength, h = x.points[f].point.length, o = 0; o < h; o += 1) s[o] = x.points[f].point[o] + (x.points[f + 1].point[o] - x.points[f].point[o]) * P;
                            break
                          }
                          f < p - 1 ? f += 1 : v = !1
                        }
                        e._lastPoint = f, e._lastAddedLength = C - x.points[f].partialLength, e._lastKeyframeIndex = d
                      }
                    } else {
                      var S, w, T, M, A;
                      if (g = r.s.length, y = n.s || r.e, this.sh && 1 !== r.h) t >= _ ? (s[0] = y[0], s[1] = y[1], s[2] = y[2]) : t <= b ? (s[0] = r.s[0], s[1] = r.s[1], s[2] = r.s[2]) : function(t, e) {
                        var s = e[0],
                          i = e[1],
                          a = e[2],
                          r = e[3],
                          n = Math.atan2(2 * i * r - 2 * s * a, 1 - 2 * i * i - 2 * a * a),
                          o = Math.asin(2 * s * i + 2 * a * r),
                          h = Math.atan2(2 * s * r - 2 * i * a, 1 - 2 * s * s - 2 * a * a);
                        t[0] = n / u, t[1] = o / u, t[2] = h / u
                      }(s, function(t, e, s) {
                        var i, a, r, n, o, h = [],
                          l = t[0],
                          p = t[1],
                          f = t[2],
                          c = t[3],
                          m = e[0],
                          d = e[1],
                          u = e[2],
                          g = e[3];
                        return (a = l * m + p * d + f * u + c * g) < 0 && (a = -a, m = -m, d = -d, u = -u, g = -g), 1 - a > 1e-6 ? (i = Math.acos(a), r = Math.sin(i), n = Math.sin((1 - s) * i) / r, o = Math.sin(s * i) / r) : (n = 1 - s, o = s), h[0] = n * l + o * m, h[1] = n * p + o * d, h[2] = n * f + o * u, h[3] = n * c + o * g, h
                      }(a(r.s), a(y), (t - b) / (_ - b)));
                      else
                        for (d = 0; d < g; d += 1) 1 !== r.h && (t >= _ ? l = 1 : t < b ? l = 0 : (r.o.x.constructor === Array ? (r.__fnct || (r.__fnct = []), r.__fnct[d] ? c = r.__fnct[d] : (S = void 0 === r.o.x[d] ? r.o.x[0] : r.o.x[d], w = void 0 === r.o.y[d] ? r.o.y[0] : r.o.y[d], T = void 0 === r.i.x[d] ? r.i.x[0] : r.i.x[d], M = void 0 === r.i.y[d] ? r.i.y[0] : r.i.y[d], c = q.getBezierEasing(S, w, T, M).get, r.__fnct[d] = c)) : r.__fnct ? c = r.__fnct : (S = r.o.x, w = r.o.y, T = r.i.x, M = r.i.y, c = q.getBezierEasing(S, w, T, M).get, r.__fnct = c), l = c((t - b) / (_ - b)))), y = n.s || r.e, A = 1 === r.h ? r.s[d] : r.s[d] + (y[d] - r.s[d]) * l, "multidimensional" === this.propType ? s[d] = A : s = A
                    }
                    return e.lastIndex = m, s
                  }

                  function a(t) {
                    var e = t[0] * u,
                      s = t[1] * u,
                      i = t[2] * u,
                      a = Math.cos(e / 2),
                      r = Math.cos(s / 2),
                      n = Math.cos(i / 2),
                      o = Math.sin(e / 2),
                      h = Math.sin(s / 2),
                      l = Math.sin(i / 2);
                    return [o * h * n + a * r * l, o * r * n + a * h * l, a * h * n - o * r * l, a * r * n - o * h * l]
                  }

                  function r() {
                    var e = this.comp.renderedFrame - this.offsetTime,
                      s = this.keyframes[0].t - this.offsetTime,
                      i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                    if (!(e === this._caching.lastFrame || this._caching.lastFrame !== t && (this._caching.lastFrame >= i && e >= i || this._caching.lastFrame < s && e < s))) {
                      this._caching.lastFrame >= e && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                      var a = this.interpolateValue(e, this._caching);
                      this.pv = a
                    }
                    return this._caching.lastFrame = e, this.pv
                  }

                  function n(t) {
                    var s;
                    if ("unidimensional" === this.propType) s = t * this.mult, e(this.v - s) > 1e-5 && (this.v = s, this._mdf = !0);
                    else
                      for (var i = 0, a = this.v.length; i < a;) s = t[i] * this.mult, e(this.v[i] - s) > 1e-5 && (this.v[i] = s, this._mdf = !0), i += 1
                  }

                  function o() {
                    if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
                      if (this.lock) this.setVValue(this.pv);
                      else {
                        this.lock = !0, this._mdf = this._isFirstFrame;
                        var t, e = this.effectsSequence.length,
                          s = this.kf ? this.pv : this.data.k;
                        for (t = 0; t < e; t += 1) s = this.effectsSequence[t](s);
                        this.setVValue(s), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
                      }
                  }

                  function h(t) {
                    this.effectsSequence.push(t), this.container.addDynamicProperty(this)
                  }

                  function l(t, e, s, i) {
                    this.propType = "unidimensional", this.mult = s || 1, this.data = e, this.v = s ? e.k * s : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = o, this.setVValue = n, this.addEffect = h
                  }

                  function p(t, e, s, i) {
                    this.propType = "multidimensional", this.mult = s || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
                    var a, r = e.k.length;
                    for (this.v = I("float32", r), this.pv = I("float32", r), I("float32", r), this.vel = I("float32", r), a = 0; a < r; a += 1) this.v[a] = e.k[a] * this.mult, this.pv[a] = e.k[a];
                    this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = o, this.setVValue = n, this.addEffect = h
                  }

                  function f(e, s, a, l) {
                    this.propType = "unidimensional", this.keyframes = s.k, this.offsetTime = e.data.st, this.frameId = -1, this._caching = {
                      lastFrame: t,
                      lastIndex: 0,
                      value: 0,
                      _lastKeyframeIndex: -1
                    }, this.k = !0, this.kf = !0, this.data = s, this.mult = a || 1, this.elem = e, this.container = l, this.comp = e.comp, this.v = t, this.pv = t, this._isFirstFrame = !0, this.getValue = o, this.setVValue = n, this.interpolateValue = i, this.effectsSequence = [r.bind(this)], this.addEffect = h
                  }

                  function c(e, s, a, l) {
                    this.propType = "multidimensional";
                    var p, f, c, m, d, u = s.k.length;
                    for (p = 0; p < u - 1; p += 1) s.k[p].to && s.k[p].s && s.k[p].e && (f = s.k[p].s, c = s.k[p].e, m = s.k[p].to, d = s.k[p].ti, (2 === f.length && (f[0] !== c[0] || f[1] !== c[1]) && W.pointOnLine2D(f[0], f[1], c[0], c[1], f[0] + m[0], f[1] + m[1]) && W.pointOnLine2D(f[0], f[1], c[0], c[1], c[0] + d[0], c[1] + d[1]) || 3 === f.length && (f[0] !== c[0] || f[1] !== c[1] || f[2] !== c[2]) && W.pointOnLine3D(f[0], f[1], f[2], c[0], c[1], c[2], f[0] + m[0], f[1] + m[1], f[2] + m[2]) && W.pointOnLine3D(f[0], f[1], f[2], c[0], c[1], c[2], c[0] + d[0], c[1] + d[1], c[2] + d[2])) && (s.k[p].to = null, s.k[p].ti = null), f[0] === c[0] && f[1] === c[1] && 0 === m[0] && 0 === m[1] && 0 === d[0] && 0 === d[1] && (2 === f.length || f[2] === c[2] && 0 === m[2] && 0 === d[2]) && (s.k[p].to = null, s.k[p].ti = null));
                    this.effectsSequence = [r.bind(this)], this.keyframes = s.k, this.offsetTime = e.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = a || 1, this.elem = e, this.container = l, this.comp = e.comp, this.getValue = o, this.setVValue = n, this.interpolateValue = i, this.frameId = -1;
                    var g = s.k[0].s.length;
                    for (this.v = I("float32", g), this.pv = I("float32", g), p = 0; p < g; p += 1) this.v[p] = t, this.pv[p] = t;
                    this._caching = {
                      lastFrame: t,
                      lastIndex: 0,
                      value: I("float32", g)
                    }, this.addEffect = h
                  }
                  return {
                    getProp: function(t, e, s, i, a) {
                      var r;
                      if (e.k.length)
                        if ("number" == typeof e.k[0]) r = new p(t, e, i, a);
                        else switch (s) {
                          case 0:
                            r = new f(t, e, i, a);
                            break;
                          case 1:
                            r = new c(t, e, i, a)
                        } else r = new l(t, e, i, a);
                      return r.effectsSequence.length && a.addDynamicProperty(r), r
                    }
                  }
                }(),
                Y = function() {
                  function t(t, e, s) {
                    if (this.elem = t, this.frameId = -1, this.propType = "transform", this.data = e, this.v = new V, this.pre = new V, this.appliedTransformations = 0, this.initDynamicPropertyContainer(s || t), e.p && e.p.s ? (this.px = X.getProp(t, e.p.x, 0, 0, this), this.py = X.getProp(t, e.p.y, 0, 0, this), e.p.z && (this.pz = X.getProp(t, e.p.z, 0, 0, this))) : this.p = X.getProp(t, e.p || {
                        k: [0, 0, 0]
                      }, 1, 0, this), e.rx) {
                      if (this.rx = X.getProp(t, e.rx, 0, u, this), this.ry = X.getProp(t, e.ry, 0, u, this), this.rz = X.getProp(t, e.rz, 0, u, this), e.or.k[0].ti) {
                        var i, a = e.or.k.length;
                        for (i = 0; i < a; i += 1) e.or.k[i].to = e.or.k[i].ti = null
                      }
                      this.or = X.getProp(t, e.or, 1, u, this), this.or.sh = !0
                    } else this.r = X.getProp(t, e.r || {
                      k: 0
                    }, 0, u, this);
                    e.sk && (this.sk = X.getProp(t, e.sk, 0, u, this), this.sa = X.getProp(t, e.sa, 0, u, this)), this.a = X.getProp(t, e.a || {
                      k: [0, 0, 0]
                    }, 1, 0, this), this.s = X.getProp(t, e.s || {
                      k: [100, 100, 100]
                    }, 1, .01, this), e.o ? this.o = X.getProp(t, e.o, 0, .01, t) : this.o = {
                      _mdf: !1,
                      v: 1
                    }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
                  }
                  return t.prototype = {
                    applyToMatrix: function(t) {
                      var e = this._mdf;
                      this.iterateDynamicProperties(), this._mdf = this._mdf || e, this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                    },
                    getValue: function(t) {
                      if (this.elem.globalData.frameId !== this.frameId) {
                        if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || t) {
                          if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                            var e, s, i = this.elem.globalData.frameRate;
                            if (this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (e = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / i, 0), s = this.p.getValueAtTime(this.p.keyframes[0].t / i, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (e = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / i, 0), s = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / i, 0)) : (e = this.p.pv, s = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / i, this.p.offsetTime));
                            else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                              e = [], s = [];
                              var a = this.px,
                                r = this.py;
                              a._caching.lastFrame + a.offsetTime <= a.keyframes[0].t ? (e[0] = a.getValueAtTime((a.keyframes[0].t + .01) / i, 0), e[1] = r.getValueAtTime((r.keyframes[0].t + .01) / i, 0), s[0] = a.getValueAtTime(a.keyframes[0].t / i, 0), s[1] = r.getValueAtTime(r.keyframes[0].t / i, 0)) : a._caching.lastFrame + a.offsetTime >= a.keyframes[a.keyframes.length - 1].t ? (e[0] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / i, 0), e[1] = r.getValueAtTime(r.keyframes[r.keyframes.length - 1].t / i, 0), s[0] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - .01) / i, 0), s[1] = r.getValueAtTime((r.keyframes[r.keyframes.length - 1].t - .01) / i, 0)) : (e = [a.pv, r.pv], s[0] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - .01) / i, a.offsetTime), s[1] = r.getValueAtTime((r._caching.lastFrame + r.offsetTime - .01) / i, r.offsetTime))
                            }
                            this.v.rotate(-Math.atan2(e[1] - s[1], e[0] - s[0]))
                          }
                          this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                        }
                        this.frameId = this.elem.globalData.frameId
                      }
                    },
                    precalculateMatrix: function() {
                      if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
                        if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                          if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                          this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
                        }
                        if (this.r) {
                          if (this.r.effectsSequence.length) return;
                          this.pre.rotate(-this.r.v), this.appliedTransformations = 4
                        } else this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
                      }
                    },
                    autoOrient: function() {}
                  }, j([N], t), t.prototype.addDynamicProperty = function(t) {
                    this._addDynamicProperty(t), this.elem.addDynamicProperty(t), this._isDirty = !0
                  }, t.prototype._addDynamicProperty = N.prototype.addDynamicProperty, {
                    getTransformProperty: function(e, s, i) {
                      return new t(e, s, i)
                    }
                  }
                }();

              function G() {
                this.c = !1, this._length = 0, this._maxLength = 8, this.v = E(this._maxLength), this.o = E(this._maxLength), this.i = E(this._maxLength)
              }
              G.prototype.setPathData = function(t, e) {
                this.c = t, this.setLength(e);
                for (var s = 0; s < e;) this.v[s] = gt.newElement(), this.o[s] = gt.newElement(), this.i[s] = gt.newElement(), s += 1
              }, G.prototype.setLength = function(t) {
                for (; this._maxLength < t;) this.doubleArrayLength();
                this._length = t
              }, G.prototype.doubleArrayLength = function() {
                this.v = this.v.concat(E(this._maxLength)), this.i = this.i.concat(E(this._maxLength)), this.o = this.o.concat(E(this._maxLength)), this._maxLength *= 2
              }, G.prototype.setXYAt = function(t, e, s, i, a) {
                var r;
                switch (this._length = Math.max(this._length, i + 1), this._length >= this._maxLength && this.doubleArrayLength(), s) {
                  case "v":
                    r = this.v;
                    break;
                  case "i":
                    r = this.i;
                    break;
                  case "o":
                    r = this.o
                }(!r[i] || r[i] && !a) && (r[i] = gt.newElement()), r[i][0] = t, r[i][1] = e
              }, G.prototype.setTripleAt = function(t, e, s, i, a, r, n, o) {
                this.setXYAt(t, e, "v", n, o), this.setXYAt(s, i, "o", n, o), this.setXYAt(a, r, "i", n, o)
              }, G.prototype.reverse = function() {
                var t = new G;
                t.setPathData(this.c, this._length);
                var e = this.v,
                  s = this.o,
                  i = this.i,
                  a = 0;
                this.c && (t.setTripleAt(e[0][0], e[0][1], i[0][0], i[0][1], s[0][0], s[0][1], 0, !1), a = 1);
                var r, n = this._length - 1,
                  o = this._length;
                for (r = a; r < o; r += 1) t.setTripleAt(e[n][0], e[n][1], i[n][0], i[n][1], s[n][0], s[n][1], r, !1), n -= 1;
                return t
              };
              var U, J, K = function() {
                  var t = -999999;

                  function e(t, e, s) {
                    var i, a, r, n, o, h, l, p, f, c = s.lastIndex,
                      m = this.keyframes;
                    if (t < m[0].t - this.offsetTime) i = m[0].s[0], r = !0, c = 0;
                    else if (t >= m[m.length - 1].t - this.offsetTime) i = m[m.length - 1].s ? m[m.length - 1].s[0] : m[m.length - 2].e[0], r = !0;
                    else {
                      for (var d, u, g = c, v = m.length - 1, y = !0; y && (d = m[g], !((u = m[g + 1]).t - this.offsetTime > t));) g < v - 1 ? g += 1 : y = !1;
                      if (c = g, !(r = 1 === d.h)) {
                        if (t >= u.t - this.offsetTime) p = 1;
                        else if (t < d.t - this.offsetTime) p = 0;
                        else {
                          var _;
                          d.__fnct ? _ = d.__fnct : (_ = q.getBezierEasing(d.o.x, d.o.y, d.i.x, d.i.y).get, d.__fnct = _), p = _((t - (d.t - this.offsetTime)) / (u.t - this.offsetTime - (d.t - this.offsetTime)))
                        }
                        a = u.s ? u.s[0] : d.e[0]
                      }
                      i = d.s[0]
                    }
                    for (h = e._length, l = i.i[0].length, s.lastIndex = c, n = 0; n < h; n += 1)
                      for (o = 0; o < l; o += 1) f = r ? i.i[n][o] : i.i[n][o] + (a.i[n][o] - i.i[n][o]) * p, e.i[n][o] = f, f = r ? i.o[n][o] : i.o[n][o] + (a.o[n][o] - i.o[n][o]) * p, e.o[n][o] = f, f = r ? i.v[n][o] : i.v[n][o] + (a.v[n][o] - i.v[n][o]) * p, e.v[n][o] = f
                  }

                  function s() {
                    var e = this.comp.renderedFrame - this.offsetTime,
                      s = this.keyframes[0].t - this.offsetTime,
                      i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                      a = this._caching.lastFrame;
                    return a !== t && (a < s && e < s || a > i && e > i) || (this._caching.lastIndex = a < e ? this._caching.lastIndex : 0, this.interpolateShape(e, this.pv, this._caching)), this._caching.lastFrame = e, this.pv
                  }

                  function i() {
                    this.paths = this.localShapeCollection
                  }

                  function a(t) {
                    (function(t, e) {
                      if (t._length !== e._length || t.c !== e.c) return !1;
                      var s, i = t._length;
                      for (s = 0; s < i; s += 1)
                        if (t.v[s][0] !== e.v[s][0] || t.v[s][1] !== e.v[s][1] || t.o[s][0] !== e.o[s][0] || t.o[s][1] !== e.o[s][1] || t.i[s][0] !== e.i[s][0] || t.i[s][1] !== e.i[s][1]) return !1;
                      return !0
                    })(this.v, t) || (this.v = vt.clone(t), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
                  }

                  function r() {
                    if (this.elem.globalData.frameId !== this.frameId)
                      if (this.effectsSequence.length)
                        if (this.lock) this.setVValue(this.pv);
                        else {
                          this.lock = !0, this._mdf = !1;
                          var t, e = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k,
                            s = this.effectsSequence.length;
                          for (t = 0; t < s; t += 1) e = this.effectsSequence[t](e);
                          this.setVValue(e), this.lock = !1, this.frameId = this.elem.globalData.frameId
                        }
                    else this._mdf = !1
                  }

                  function n(t, e, s) {
                    this.propType = "shape", this.comp = t.comp, this.container = t, this.elem = t, this.data = e, this.k = !1, this.kf = !1, this._mdf = !1;
                    var a = 3 === s ? e.pt.k : e.ks.k;
                    this.v = vt.clone(a), this.pv = vt.clone(this.v), this.localShapeCollection = yt.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = i, this.effectsSequence = []
                  }

                  function o(t) {
                    this.effectsSequence.push(t), this.container.addDynamicProperty(this)
                  }

                  function h(e, a, r) {
                    this.propType = "shape", this.comp = e.comp, this.elem = e, this.container = e, this.offsetTime = e.data.st, this.keyframes = 3 === r ? a.pt.k : a.ks.k, this.k = !0, this.kf = !0;
                    var n = this.keyframes[0].s[0].i.length;
                    this.keyframes[0].s[0].i[0].length, this.v = vt.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, n), this.pv = vt.clone(this.v), this.localShapeCollection = yt.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = i, this._caching = {
                      lastFrame: t,
                      lastIndex: 0
                    }, this.effectsSequence = [s.bind(this)]
                  }
                  n.prototype.interpolateShape = e, n.prototype.getValue = r, n.prototype.setVValue = a, n.prototype.addEffect = o, h.prototype.getValue = r, h.prototype.interpolateShape = e, h.prototype.setVValue = a, h.prototype.addEffect = o;
                  var l = function() {
                      function t(t, e) {
                        this.v = vt.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = yt.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e.d, this.elem = t, this.comp = t.comp, this.frameId = -1, this.initDynamicPropertyContainer(t), this.p = X.getProp(t, e.p, 1, 0, this), this.s = X.getProp(t, e.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
                      }
                      return t.prototype = {
                        reset: i,
                        getValue: function() {
                          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                        },
                        convertEllToPath: function() {
                          var t = this.p.v[0],
                            e = this.p.v[1],
                            s = this.s.v[0] / 2,
                            i = this.s.v[1] / 2,
                            a = 3 !== this.d,
                            r = this.v;
                          r.v[0][0] = t, r.v[0][1] = e - i, r.v[1][0] = a ? t + s : t - s, r.v[1][1] = e, r.v[2][0] = t, r.v[2][1] = e + i, r.v[3][0] = a ? t - s : t + s, r.v[3][1] = e, r.i[0][0] = a ? t - .5519 * s : t + .5519 * s, r.i[0][1] = e - i, r.i[1][0] = a ? t + s : t - s, r.i[1][1] = e - .5519 * i, r.i[2][0] = a ? t + .5519 * s : t - .5519 * s, r.i[2][1] = e + i, r.i[3][0] = a ? t - s : t + s, r.i[3][1] = e + .5519 * i, r.o[0][0] = a ? t + .5519 * s : t - .5519 * s, r.o[0][1] = e - i, r.o[1][0] = a ? t + s : t - s, r.o[1][1] = e + .5519 * i, r.o[2][0] = a ? t - .5519 * s : t + .5519 * s, r.o[2][1] = e + i, r.o[3][0] = a ? t - s : t + s, r.o[3][1] = e - .5519 * i
                        }
                      }, j([N], t), t
                    }(),
                    f = function() {
                      function t(t, e) {
                        this.v = vt.newElement(), this.v.setPathData(!0, 0), this.elem = t, this.comp = t.comp, this.data = e, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), 1 === e.sy ? (this.ir = X.getProp(t, e.ir, 0, 0, this), this.is = X.getProp(t, e.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = X.getProp(t, e.pt, 0, 0, this), this.p = X.getProp(t, e.p, 1, 0, this), this.r = X.getProp(t, e.r, 0, u, this), this.or = X.getProp(t, e.or, 0, 0, this), this.os = X.getProp(t, e.os, 0, .01, this), this.localShapeCollection = yt.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
                      }
                      return t.prototype = {
                        reset: i,
                        getValue: function() {
                          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                        },
                        convertStarToPath: function() {
                          var t, e, s, i, a = 2 * Math.floor(this.pt.v),
                            r = 2 * Math.PI / a,
                            n = !0,
                            o = this.or.v,
                            h = this.ir.v,
                            l = this.os.v,
                            p = this.is.v,
                            f = 2 * Math.PI * o / (2 * a),
                            c = 2 * Math.PI * h / (2 * a),
                            m = -Math.PI / 2;
                          m += this.r.v;
                          var d = 3 === this.data.d ? -1 : 1;
                          for (this.v._length = 0, t = 0; t < a; t += 1) {
                            s = n ? l : p, i = n ? f : c;
                            var u = (e = n ? o : h) * Math.cos(m),
                              g = e * Math.sin(m),
                              v = 0 === u && 0 === g ? 0 : g / Math.sqrt(u * u + g * g),
                              y = 0 === u && 0 === g ? 0 : -u / Math.sqrt(u * u + g * g);
                            u += +this.p.v[0], g += +this.p.v[1], this.v.setTripleAt(u, g, u - v * i * s * d, g - y * i * s * d, u + v * i * s * d, g + y * i * s * d, t, !0), n = !n, m += r * d
                          }
                        },
                        convertPolygonToPath: function() {
                          var t, e = Math.floor(this.pt.v),
                            s = 2 * Math.PI / e,
                            i = this.or.v,
                            a = this.os.v,
                            r = 2 * Math.PI * i / (4 * e),
                            n = -Math.PI / 2,
                            o = 3 === this.data.d ? -1 : 1;
                          for (n += this.r.v, this.v._length = 0, t = 0; t < e; t += 1) {
                            var h = i * Math.cos(n),
                              l = i * Math.sin(n),
                              p = 0 === h && 0 === l ? 0 : l / Math.sqrt(h * h + l * l),
                              f = 0 === h && 0 === l ? 0 : -h / Math.sqrt(h * h + l * l);
                            h += +this.p.v[0], l += +this.p.v[1], this.v.setTripleAt(h, l, h - p * r * a * o, l - f * r * a * o, h + p * r * a * o, l + f * r * a * o, t, !0), n += s * o
                          }
                          this.paths.length = 0, this.paths[0] = this.v
                        }
                      }, j([N], t), t
                    }(),
                    c = function() {
                      function t(t, e) {
                        this.v = vt.newElement(), this.v.c = !0, this.localShapeCollection = yt.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t, this.comp = t.comp, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), this.p = X.getProp(t, e.p, 1, 0, this), this.s = X.getProp(t, e.s, 1, 0, this), this.r = X.getProp(t, e.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
                      }
                      return t.prototype = {
                        convertRectToPath: function() {
                          var t = this.p.v[0],
                            e = this.p.v[1],
                            s = this.s.v[0] / 2,
                            i = this.s.v[1] / 2,
                            a = p(s, i, this.r.v),
                            r = a * (1 - .5519);
                          this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + s, e - i + a, t + s, e - i + a, t + s, e - i + r, 0, !0), this.v.setTripleAt(t + s, e + i - a, t + s, e + i - r, t + s, e + i - a, 1, !0), 0 !== a ? (this.v.setTripleAt(t + s - a, e + i, t + s - a, e + i, t + s - r, e + i, 2, !0), this.v.setTripleAt(t - s + a, e + i, t - s + r, e + i, t - s + a, e + i, 3, !0), this.v.setTripleAt(t - s, e + i - a, t - s, e + i - a, t - s, e + i - r, 4, !0), this.v.setTripleAt(t - s, e - i + a, t - s, e - i + r, t - s, e - i + a, 5, !0), this.v.setTripleAt(t - s + a, e - i, t - s + a, e - i, t - s + r, e - i, 6, !0), this.v.setTripleAt(t + s - a, e - i, t + s - r, e - i, t + s - a, e - i, 7, !0)) : (this.v.setTripleAt(t - s, e + i, t - s + r, e + i, t - s, e + i, 2), this.v.setTripleAt(t - s, e - i, t - s, e - i + r, t - s, e - i, 3))) : (this.v.setTripleAt(t + s, e - i + a, t + s, e - i + r, t + s, e - i + a, 0, !0), 0 !== a ? (this.v.setTripleAt(t + s - a, e - i, t + s - a, e - i, t + s - r, e - i, 1, !0), this.v.setTripleAt(t - s + a, e - i, t - s + r, e - i, t - s + a, e - i, 2, !0), this.v.setTripleAt(t - s, e - i + a, t - s, e - i + a, t - s, e - i + r, 3, !0), this.v.setTripleAt(t - s, e + i - a, t - s, e + i - r, t - s, e + i - a, 4, !0), this.v.setTripleAt(t - s + a, e + i, t - s + a, e + i, t - s + r, e + i, 5, !0), this.v.setTripleAt(t + s - a, e + i, t + s - r, e + i, t + s - a, e + i, 6, !0), this.v.setTripleAt(t + s, e + i - a, t + s, e + i - a, t + s, e + i - r, 7, !0)) : (this.v.setTripleAt(t - s, e - i, t - s + r, e - i, t - s, e - i, 1, !0), this.v.setTripleAt(t - s, e + i, t - s, e + i - r, t - s, e + i, 2, !0), this.v.setTripleAt(t + s, e + i, t + s - r, e + i, t + s, e + i, 3, !0)))
                        },
                        getValue: function(t) {
                          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                        },
                        reset: i
                      }, j([N], t), t
                    }();
                  return {
                    getShapeProp: function(t, e, s) {
                      var i;
                      return 3 === s || 4 === s ? i = (3 === s ? e.pt : e.ks).k.length ? new h(t, e, s) : new n(t, e, s) : 5 === s ? i = new c(t, e) : 6 === s ? i = new l(t, e) : 7 === s && (i = new f(t, e)), i.k && t.addDynamicProperty(i), i
                    },
                    getConstructorFunction: function() {
                      return n
                    },
                    getKeyframedConstructorFunction: function() {
                      return h
                    }
                  }
                }(),
                Z = (J = {}, (U = {}).registerModifier = function(t, e) {
                  J[t] || (J[t] = e)
                }, U.getModifier = function(t, e, s) {
                  return new J[t](e, s)
                }, U);

              function Q() {}

              function $() {}

              function tt() {}

              function et() {}

              function st() {
                this._length = 0, this._maxLength = 4, this.shapes = E(this._maxLength)
              }

              function it(t, e, s, i) {
                this.elem = t, this.frameId = -1, this.dataProps = E(e.length), this.renderer = s, this.k = !1, this.dashStr = "", this.dashArray = I("float32", e.length ? e.length - 1 : 0), this.dashoffset = I("float32", 1), this.initDynamicPropertyContainer(i);
                var a, r, n = e.length || 0;
                for (a = 0; a < n; a += 1) r = X.getProp(t, e[a].v, 0, 0, this), this.k = r.k || this.k, this.dataProps[a] = {
                  n: e[a].n,
                  p: r
                };
                this.k || this.getValue(!0), this._isAnimated = this.k
              }

              function at(t, e, s) {
                this.data = e, this.c = I("uint8c", 4 * e.p);
                var i = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
                this.o = I("float32", i), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = i, this.initDynamicPropertyContainer(s), this.prop = X.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
              }
              Q.prototype.initModifierProperties = function() {}, Q.prototype.addShapeToModifier = function() {}, Q.prototype.addShape = function(t) {
                if (!this.closed) {
                  t.sh.container.addDynamicProperty(t.sh);
                  var e = {
                    shape: t.sh,
                    data: t,
                    localShapeCollection: yt.newShapeCollection()
                  };
                  this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated()
                }
              }, Q.prototype.init = function(t, e) {
                this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = s, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
              }, Q.prototype.processKeys = function() {
                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
              }, j([N], Q), j([Q], $), $.prototype.initModifierProperties = function(t, e) {
                this.s = X.getProp(t, e.s, 0, .01, this), this.e = X.getProp(t, e.e, 0, .01, this), this.o = X.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
              }, $.prototype.addShapeToModifier = function(t) {
                t.pathsData = []
              }, $.prototype.calculateShapeEdges = function(t, e, s, i, a) {
                var r = [];
                e <= 1 ? r.push({
                  s: t,
                  e: e
                }) : t >= 1 ? r.push({
                  s: t - 1,
                  e: e - 1
                }) : (r.push({
                  s: t,
                  e: 1
                }), r.push({
                  s: 0,
                  e: e - 1
                }));
                var n, o, h = [],
                  l = r.length;
                for (n = 0; n < l; n += 1) {
                  var p, f;
                  (o = r[n]).e * a < i || o.s * a > i + s || (p = o.s * a <= i ? 0 : (o.s * a - i) / s, f = o.e * a >= i + s ? 1 : (o.e * a - i) / s, h.push([p, f]))
                }
                return h.length || h.push([0, 0]), h
              }, $.prototype.releasePathsData = function(t) {
                var e, s = t.length;
                for (e = 0; e < s; e += 1) _t.release(t[e]);
                return t.length = 0, t
              }, $.prototype.processShapes = function(t) {
                var e, s, i;
                if (this._mdf || t) {
                  var a = this.o.v % 360 / 360;
                  if (a < 0 && (a += 1), (e = (this.s.v > 1 ? 1 : this.s.v < 0 ? 0 : this.s.v) + a) > (s = (this.e.v > 1 ? 1 : this.e.v < 0 ? 0 : this.e.v) + a)) {
                    var r = e;
                    e = s, s = r
                  }
                  e = 1e-4 * Math.round(1e4 * e), s = 1e-4 * Math.round(1e4 * s), this.sValue = e, this.eValue = s
                } else e = this.sValue, s = this.eValue;
                var n, o, h, l, p, f, c = this.shapes.length,
                  m = 0;
                if (s === e)
                  for (n = 0; n < c; n += 1) this.shapes[n].localShapeCollection.releaseShapes(), this.shapes[n].shape._mdf = !0, this.shapes[n].shape.paths = this.shapes[n].localShapeCollection;
                else if (1 === s && 0 === e || 0 === s && 1 === e) {
                  if (this._mdf)
                    for (n = 0; n < c; n += 1) this.shapes[n].pathsData.length = 0, this.shapes[n].shape._mdf = !0
                } else {
                  var d, u, g = [];
                  for (n = 0; n < c; n += 1)
                    if ((d = this.shapes[n]).shape._mdf || this._mdf || t || 2 === this.m) {
                      if (h = (i = d.shape.paths)._length, f = 0, !d.shape._mdf && d.pathsData.length) f = d.totalShapeLength;
                      else {
                        for (l = this.releasePathsData(d.pathsData), o = 0; o < h; o += 1) p = W.getSegmentsLength(i.shapes[o]), l.push(p), f += p.totalLength;
                        d.totalShapeLength = f, d.pathsData = l
                      }
                      m += f, d.shape._mdf = !0
                    } else d.shape.paths = d.localShapeCollection;
                  var v, y = e,
                    _ = s,
                    b = 0;
                  for (n = c - 1; n >= 0; n -= 1)
                    if ((d = this.shapes[n]).shape._mdf) {
                      for ((u = d.localShapeCollection).releaseShapes(), 2 === this.m && c > 1 ? (v = this.calculateShapeEdges(e, s, d.totalShapeLength, b, m), b += d.totalShapeLength) : v = [
                          [y, _]
                        ], h = v.length, o = 0; o < h; o += 1) {
                        y = v[o][0], _ = v[o][1], g.length = 0, _ <= 1 ? g.push({
                          s: d.totalShapeLength * y,
                          e: d.totalShapeLength * _
                        }) : y >= 1 ? g.push({
                          s: d.totalShapeLength * (y - 1),
                          e: d.totalShapeLength * (_ - 1)
                        }) : (g.push({
                          s: d.totalShapeLength * y,
                          e: d.totalShapeLength
                        }), g.push({
                          s: 0,
                          e: d.totalShapeLength * (_ - 1)
                        }));
                        var x = this.addShapes(d, g[0]);
                        if (g[0].s !== g[0].e) {
                          if (g.length > 1)
                            if (d.shape.paths.shapes[d.shape.paths._length - 1].c) {
                              var k = x.pop();
                              this.addPaths(x, u), x = this.addShapes(d, g[1], k)
                            } else this.addPaths(x, u), x = this.addShapes(d, g[1]);
                          this.addPaths(x, u)
                        }
                      }
                      d.shape.paths = u
                    }
                }
              }, $.prototype.addPaths = function(t, e) {
                var s, i = t.length;
                for (s = 0; s < i; s += 1) e.addShape(t[s])
              }, $.prototype.addSegment = function(t, e, s, i, a, r, n) {
                a.setXYAt(e[0], e[1], "o", r), a.setXYAt(s[0], s[1], "i", r + 1), n && a.setXYAt(t[0], t[1], "v", r), a.setXYAt(i[0], i[1], "v", r + 1)
              }, $.prototype.addSegmentFromArray = function(t, e, s, i) {
                e.setXYAt(t[1], t[5], "o", s), e.setXYAt(t[2], t[6], "i", s + 1), i && e.setXYAt(t[0], t[4], "v", s), e.setXYAt(t[3], t[7], "v", s + 1)
              }, $.prototype.addShapes = function(t, e, s) {
                var i, a, r, n, o, h, l, p, f = t.pathsData,
                  c = t.shape.paths.shapes,
                  m = t.shape.paths._length,
                  d = 0,
                  u = [],
                  g = !0;
                for (s ? (o = s._length, p = s._length) : (s = vt.newElement(), o = 0, p = 0), u.push(s), i = 0; i < m; i += 1) {
                  for (h = f[i].lengths, s.c = c[i].c, r = c[i].c ? h.length : h.length + 1, a = 1; a < r; a += 1)
                    if (d + (n = h[a - 1]).addedLength < e.s) d += n.addedLength, s.c = !1;
                    else {
                      if (d > e.e) {
                        s.c = !1;
                        break
                      }
                      e.s <= d && e.e >= d + n.addedLength ? (this.addSegment(c[i].v[a - 1], c[i].o[a - 1], c[i].i[a], c[i].v[a], s, o, g), g = !1) : (l = W.getNewSegment(c[i].v[a - 1], c[i].v[a], c[i].o[a - 1], c[i].i[a], (e.s - d) / n.addedLength, (e.e - d) / n.addedLength, h[a - 1]), this.addSegmentFromArray(l, s, o, g), g = !1, s.c = !1), d += n.addedLength, o += 1
                    } if (c[i].c && h.length) {
                    if (n = h[a - 1], d <= e.e) {
                      var v = h[a - 1].addedLength;
                      e.s <= d && e.e >= d + v ? (this.addSegment(c[i].v[a - 1], c[i].o[a - 1], c[i].i[0], c[i].v[0], s, o, g), g = !1) : (l = W.getNewSegment(c[i].v[a - 1], c[i].v[0], c[i].o[a - 1], c[i].i[0], (e.s - d) / v, (e.e - d) / v, h[a - 1]), this.addSegmentFromArray(l, s, o, g), g = !1, s.c = !1)
                    } else s.c = !1;
                    d += n.addedLength, o += 1
                  }
                  if (s._length && (s.setXYAt(s.v[p][0], s.v[p][1], "i", p), s.setXYAt(s.v[s._length - 1][0], s.v[s._length - 1][1], "o", s._length - 1)), d > e.e) break;
                  i < m - 1 && (s = vt.newElement(), g = !0, u.push(s), o = 0)
                }
                return u
              }, Z.registerModifier("tm", $), j([Q], tt), tt.prototype.initModifierProperties = function(t, e) {
                this.getValue = this.processKeys, this.rd = X.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
              }, tt.prototype.processPath = function(t, e) {
                var s = vt.newElement();
                s.c = t.c;
                var i, a, r, n, o, h, l, p, f, c, m, d, u, g = t._length,
                  v = 0;
                for (i = 0; i < g; i += 1) a = t.v[i], n = t.o[i], r = t.i[i], a[0] === n[0] && a[1] === n[1] && a[0] === r[0] && a[1] === r[1] ? 0 !== i && i !== g - 1 || t.c ? (o = 0 === i ? t.v[g - 1] : t.v[i - 1], l = (h = Math.sqrt(Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p = d = a[0] + (o[0] - a[0]) * l, f = u = a[1] - (a[1] - o[1]) * l, c = p - .5519 * (p - a[0]), m = f - .5519 * (f - a[1]), s.setTripleAt(p, f, c, m, d, u, v), v += 1, o = i === g - 1 ? t.v[0] : t.v[i + 1], l = (h = Math.sqrt(Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p = c = a[0] + (o[0] - a[0]) * l, f = m = a[1] + (o[1] - a[1]) * l, d = p - .5519 * (p - a[0]), u = f - .5519 * (f - a[1]), s.setTripleAt(p, f, c, m, d, u, v), v += 1) : (s.setTripleAt(a[0], a[1], n[0], n[1], r[0], r[1], v), v += 1) : (s.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], v), v += 1);
                return s
              }, tt.prototype.processShapes = function(t) {
                var e, s, i, a, r, n, o = this.shapes.length,
                  h = this.rd.v;
                if (0 !== h)
                  for (s = 0; s < o; s += 1) {
                    if ((r = this.shapes[s]).shape.paths, n = r.localShapeCollection, r.shape._mdf || this._mdf || t)
                      for (n.releaseShapes(), r.shape._mdf = !0, e = r.shape.paths.shapes, a = r.shape.paths._length, i = 0; i < a; i += 1) n.addShape(this.processPath(e[i], h));
                    r.shape.paths = r.localShapeCollection
                  }
                this.dynamicProperties.length || (this._mdf = !1)
              }, Z.registerModifier("rd", tt), j([Q], et), et.prototype.initModifierProperties = function(t, e) {
                this.getValue = this.processKeys, this.c = X.getProp(t, e.c, 0, null, this), this.o = X.getProp(t, e.o, 0, null, this), this.tr = Y.getTransformProperty(t, e.tr, this), this.so = X.getProp(t, e.tr.so, 0, .01, this), this.eo = X.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new V, this.rMatrix = new V, this.sMatrix = new V, this.tMatrix = new V, this.matrix = new V
              }, et.prototype.applyTransforms = function(t, e, s, i, a, r) {
                var n = r ? -1 : 1,
                  o = i.s.v[0] + (1 - i.s.v[0]) * (1 - a),
                  h = i.s.v[1] + (1 - i.s.v[1]) * (1 - a);
                t.translate(i.p.v[0] * n * a, i.p.v[1] * n * a, i.p.v[2]), e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), e.rotate(-i.r.v * n * a), e.translate(i.a.v[0], i.a.v[1], i.a.v[2]), s.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), s.scale(r ? 1 / o : o, r ? 1 / h : h), s.translate(i.a.v[0], i.a.v[1], i.a.v[2])
              }, et.prototype.init = function(t, e, s, i) {
                for (this.elem = t, this.arr = e, this.pos = s, this.elemsData = i, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[s]); s > 0;) s -= 1, this._elements.unshift(e[s]);
                this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
              }, et.prototype.resetElements = function(t) {
                var e, s = t.length;
                for (e = 0; e < s; e += 1) t[e]._processed = !1, "gr" === t[e].ty && this.resetElements(t[e].it)
              }, et.prototype.cloneElements = function(t) {
                t.length;
                var e = JSON.parse(JSON.stringify(t));
                return this.resetElements(e), e
              }, et.prototype.changeGroupRender = function(t, e) {
                var s, i = t.length;
                for (s = 0; s < i; s += 1) t[s]._render = e, "gr" === t[s].ty && this.changeGroupRender(t[s].it, e)
              }, et.prototype.processShapes = function(t) {
                var e, s, i, a, r;
                if (this._mdf || t) {
                  var n, o = Math.ceil(this.c.v);
                  if (this._groups.length < o) {
                    for (; this._groups.length < o;) {
                      var h = {
                        it: this.cloneElements(this._elements),
                        ty: "gr"
                      };
                      h.it.push({
                        a: {
                          a: 0,
                          ix: 1,
                          k: [0, 0]
                        },
                        nm: "Transform",
                        o: {
                          a: 0,
                          ix: 7,
                          k: 100
                        },
                        p: {
                          a: 0,
                          ix: 2,
                          k: [0, 0]
                        },
                        r: {
                          a: 1,
                          ix: 6,
                          k: [{
                            s: 0,
                            e: 0,
                            t: 0
                          }, {
                            s: 0,
                            e: 0,
                            t: 1
                          }]
                        },
                        s: {
                          a: 0,
                          ix: 3,
                          k: [100, 100]
                        },
                        sa: {
                          a: 0,
                          ix: 5,
                          k: 0
                        },
                        sk: {
                          a: 0,
                          ix: 4,
                          k: 0
                        },
                        ty: "tr"
                      }), this.arr.splice(0, 0, h), this._groups.splice(0, 0, h), this._currentCopies += 1
                    }
                    this.elem.reloadShapes()
                  }
                  for (r = 0, i = 0; i <= this._groups.length - 1; i += 1) n = r < o, this._groups[i]._render = n, this.changeGroupRender(this._groups[i].it, n), r += 1;
                  this._currentCopies = o;
                  var l = this.o.v,
                    p = l % 1,
                    f = l > 0 ? Math.floor(l) : Math.ceil(l),
                    c = (this.tr.v.props, this.pMatrix.props),
                    m = this.rMatrix.props,
                    d = this.sMatrix.props;
                  this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                  var u, g, v = 0;
                  if (l > 0) {
                    for (; v < f;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), v += 1;
                    p && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, p, !1), v += p)
                  } else if (l < 0) {
                    for (; v > f;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), v -= 1;
                    p && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -p, !0), v -= p)
                  }
                  for (i = 1 === this.data.m ? 0 : this._currentCopies - 1, a = 1 === this.data.m ? 1 : -1, r = this._currentCopies; r;) {
                    if (g = (s = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1)), 0 !== v) {
                      for ((0 !== i && 1 === a || i !== this._currentCopies - 1 && -1 === a) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), this.matrix.transform(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10], d[11], d[12], d[13], d[14], d[15]), this.matrix.transform(c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7], c[8], c[9], c[10], c[11], c[12], c[13], c[14], c[15]), u = 0; u < g; u += 1) s[u] = this.matrix.props[u];
                      this.matrix.reset()
                    } else
                      for (this.matrix.reset(), u = 0; u < g; u += 1) s[u] = this.matrix.props[u];
                    v += 1, r -= 1, i += a
                  }
                } else
                  for (r = this._currentCopies, i = 0, a = 1; r;) s = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, r -= 1, i += a
              }, et.prototype.addShape = function() {}, Z.registerModifier("rp", et), st.prototype.addShape = function(t) {
                this._length === this._maxLength && (this.shapes = this.shapes.concat(E(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1
              }, st.prototype.releaseShapes = function() {
                var t;
                for (t = 0; t < this._length; t += 1) vt.release(this.shapes[t]);
                this._length = 0
              }, it.prototype.getValue = function(t) {
                if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
                  var e = 0,
                    s = this.dataProps.length;
                  for (e = 0; e < s; e += 1) "o" != this.dataProps[e].n ? this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
                }
              }, j([N], it), at.prototype.comparePoints = function(t, e) {
                for (var s = 0, i = this.o.length / 2; s < i;) {
                  if (Math.abs(t[4 * s] - t[4 * e + 2 * s]) > .01) return !1;
                  s += 1
                }
                return !0
              }, at.prototype.checkCollapsable = function() {
                if (this.o.length / 2 != this.c.length / 4) return !1;
                if (this.data.k.k[0].s)
                  for (var t = 0, e = this.data.k.k.length; t < e;) {
                    if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
                    t += 1
                  } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
                return !0
              }, at.prototype.getValue = function(t) {
                if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
                  var e, s, i, a = 4 * this.data.p;
                  for (e = 0; e < a; e += 1) s = e % 4 == 0 ? 100 : 255, i = Math.round(this.prop.v[e] * s), this.c[e] !== i && (this.c[e] = i, this._cmdf = !t);
                  if (this.o.length)
                    for (a = this.prop.v.length, e = 4 * this.data.p; e < a; e += 1) s = e % 2 == 0 ? 100 : 1, i = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== i && (this.o[e - 4 * this.data.p] = i, this._omdf = !t);
                  this._mdf = !t
                }
              }, j([N], at);
              var rt = function(t, e, s, i) {
                  if (0 === e) return "";
                  var a, r = t.o,
                    n = t.i,
                    o = t.v,
                    h = " M" + i.applyToPointStringified(o[0][0], o[0][1]);
                  for (a = 1; a < e; a += 1) h += " C" + i.applyToPointStringified(r[a - 1][0], r[a - 1][1]) + " " + i.applyToPointStringified(n[a][0], n[a][1]) + " " + i.applyToPointStringified(o[a][0], o[a][1]);
                  return s && e && (h += " C" + i.applyToPointStringified(r[a - 1][0], r[a - 1][1]) + " " + i.applyToPointStringified(n[0][0], n[0][1]) + " " + i.applyToPointStringified(o[0][0], o[0][1]), h += "z"), h
                },
                nt = function() {
                  var t = function() {
                    var t = O("canvas");
                    t.width = 1, t.height = 1;
                    var e = t.getContext("2d");
                    return e.fillStyle = "rgba(0,0,0,0)", e.fillRect(0, 0, 1, 1), t
                  }();

                  function e() {
                    this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                  }

                  function s(e) {
                    var s = function(t, e, s) {
                        var i = "";
                        if (t.e) i = t.p;
                        else if (e) {
                          var a = t.p; - 1 !== a.indexOf("images/") && (a = a.split("/")[1]), i = e + a
                        } else i = t.p.includes("base64") ? "" : s, i += t.u ? t.u : "", i += t.p;
                        return i
                      }(e, this.assetsPath, this.path),
                      i = O("img");
                    i.crossOrigin = "anonymous", i.addEventListener("load", this._imageLoaded.bind(this), !1), i.addEventListener("error", function() {
                      a.img = t, this._imageLoaded()
                    }.bind(this), !1), i.src = s;
                    var a = {
                      img: i,
                      assetData: e
                    };
                    return a
                  }

                  function i(t, e) {
                    this.imagesLoadedCb = e;
                    var s, i = t.length;
                    for (s = 0; s < i; s += 1) t[s].layers || (this.totalImages += 1, this.images.push(this._createImageData(t[s])))
                  }

                  function a(t) {
                    this.path = t || ""
                  }

                  function r(t) {
                    this.assetsPath = t || ""
                  }

                  function n(t) {
                    for (var e = 0, s = this.images.length; e < s;) {
                      if (this.images[e].assetData === t) return this.images[e].img;
                      e += 1
                    }
                  }

                  function o() {
                    this.imagesLoadedCb = null, this.images.length = 0
                  }

                  function h() {
                    return this.totalImages === this.loadedAssets
                  }
                  return function() {
                    this.loadAssets = i, this.setAssetsPath = r, this.setPath = a, this.loaded = h, this.destroy = o, this.getImage = n, this._createImageData = s, this._imageLoaded = e, this.assetsPath = "", this.path = "", this.totalImages = 0, this.loadedAssets = 0, this.imagesLoadedCb = null, this.images = []
                  }
                }(),
                ot = (/MSIE 10/i.test(d.userAgent) || /MSIE 9/i.test(d.userAgent) || /rv:11.0/i.test(d.userAgent) || /Edge\/\d./i.test(d.userAgent), function() {
                  function t(t) {
                    return t.response && "object" === l(t.response) ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : void 0
                  }
                  return {
                    load: function(e, s, i) {
                      for (var a = 0; a < ae.length; a++)
                        if (ae[a].path === e) return void s(ae[a].data);
                      var r, n = new k;
                      n.open("GET", e, !0);
                      try {
                        n.responseType = "json"
                      } catch (t) {}
                      n.send(), n.onreadystatechange = function() {
                        if (4 == n.readyState)
                          if (200 == n.status) r = t(n), ae.push({
                            path: e,
                            data: r
                          }), s(r);
                          else try {
                            r = t(n), ae.push({
                              path: e,
                              data: r
                            }), s(r)
                          } catch (t) {
                            i && i(t)
                          }
                      }
                    }
                  }
                }());

              function ht(t, e, s) {
                this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = s, this._animatorsData = E(this._textData.a.length), this._pathData = {}, this._moreOptions = {
                  alignment: {}
                }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(s)
              }

              function lt(t, e, s) {
                var i = {
                    propType: !1
                  },
                  a = X.getProp,
                  r = e.a;
                this.a = {
                  r: r.r ? a(t, r.r, 0, u, s) : i,
                  rx: r.rx ? a(t, r.rx, 0, u, s) : i,
                  ry: r.ry ? a(t, r.ry, 0, u, s) : i,
                  sk: r.sk ? a(t, r.sk, 0, u, s) : i,
                  sa: r.sa ? a(t, r.sa, 0, u, s) : i,
                  s: r.s ? a(t, r.s, 1, .01, s) : i,
                  a: r.a ? a(t, r.a, 1, 0, s) : i,
                  o: r.o ? a(t, r.o, 0, .01, s) : i,
                  p: r.p ? a(t, r.p, 1, 0, s) : i,
                  sw: r.sw ? a(t, r.sw, 0, 0, s) : i,
                  sc: r.sc ? a(t, r.sc, 1, 0, s) : i,
                  fc: r.fc ? a(t, r.fc, 1, 0, s) : i,
                  fh: r.fh ? a(t, r.fh, 0, 0, s) : i,
                  fs: r.fs ? a(t, r.fs, 0, .01, s) : i,
                  fb: r.fb ? a(t, r.fb, 0, .01, s) : i,
                  t: r.t ? a(t, r.t, 0, 0, s) : i
                }, this.s = mt.getTextSelectorProp(t, e.s, s), this.s.t = e.s.t
              }

              function pt(t, e, s, i, a, r) {
                this.o = t, this.sw = e, this.sc = s, this.fc = i, this.m = a, this.p = r, this._mdf = {
                  o: !0,
                  sw: !!e,
                  sc: !!s,
                  fc: !!i,
                  m: !0,
                  p: !0
                }
              }

              function ft(t, e) {
                this._frameId = s, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
                  ascent: 0,
                  boxWidth: this.defaultBoxWidth,
                  f: "",
                  fStyle: "",
                  fWeight: "",
                  fc: "",
                  j: "",
                  justifyOffset: "",
                  l: [],
                  lh: 0,
                  lineWidths: [],
                  ls: "",
                  of: "",
                  s: "",
                  sc: "",
                  sw: 0,
                  t: 0,
                  tr: 0,
                  sz: 0,
                  ps: null,
                  fillColorAnim: !1,
                  strokeColorAnim: !1,
                  strokeWidthAnim: !1,
                  yOffset: 0,
                  finalSize: 0,
                  finalText: [],
                  finalLineHeight: 0,
                  __complete: !1
                }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
              }
              ht.prototype.searchProperties = function() {
                var t, e, s = this._textData.a.length,
                  i = X.getProp;
                for (t = 0; t < s; t += 1) e = this._textData.a[t], this._animatorsData[t] = new lt(this._elem, e, this);
                this._textData.p && "m" in this._textData.p ? (this._pathData = {
                  f: i(this._elem, this._textData.p.f, 0, 0, this),
                  l: i(this._elem, this._textData.p.l, 0, 0, this),
                  r: this._textData.p.r,
                  m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
                }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = i(this._elem, this._textData.m.a, 1, 0, this)
              }, ht.prototype.getMeasures = function(t, e) {
                if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
                  this._isFirstFrame = !1;
                  var s, i, a, r, n, o, h, l, p, f, c, m, d, u, g, v, y, _, b, x = this._moreOptions.alignment.v,
                    k = this._animatorsData,
                    P = this._textData,
                    D = this.mHelper,
                    C = (this._renderType, this.renderedLetters.length),
                    S = (this.data, t.l);
                  if (this._hasMaskedPath) {
                    if (b = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                      var w, T = b.v;
                      for (this._pathData.r && (T = T.reverse()), n = {
                          tLength: 0,
                          segments: []
                        }, r = T._length - 1, v = 0, a = 0; a < r; a += 1) w = W.buildBezierData(T.v[a], T.v[a + 1], [T.o[a][0] - T.v[a][0], T.o[a][1] - T.v[a][1]], [T.i[a + 1][0] - T.v[a + 1][0], T.i[a + 1][1] - T.v[a + 1][1]]), n.tLength += w.segmentLength, n.segments.push(w), v += w.segmentLength;
                      a = r, b.v.c && (w = W.buildBezierData(T.v[a], T.v[0], [T.o[a][0] - T.v[a][0], T.o[a][1] - T.v[a][1]], [T.i[0][0] - T.v[0][0], T.i[0][1] - T.v[0][1]]), n.tLength += w.segmentLength, n.segments.push(w), v += w.segmentLength), this._pathData.pi = n
                    }
                    if (n = this._pathData.pi, o = this._pathData.f.v, c = 0, f = 1, l = 0, p = !0, u = n.segments, o < 0 && b.v.c)
                      for (n.tLength < Math.abs(o) && (o = -Math.abs(o) % n.tLength), f = (d = u[c = u.length - 1].points).length - 1; o < 0;) o += d[f].partialLength, (f -= 1) < 0 && (f = (d = u[c -= 1].points).length - 1);
                    m = (d = u[c].points)[f - 1], g = (h = d[f]).partialLength
                  }
                  r = S.length, s = 0, i = 0;
                  var L, I, E, O, N = 1.2 * t.finalSize * .714,
                    R = !0;
                  E = k.length;
                  var z, V, q, j, B, H, X, Y, G, U, J, K, Z, Q = -1,
                    $ = o,
                    tt = c,
                    et = f,
                    st = -1,
                    it = "",
                    at = this.defaultPropsArray;
                  if (2 === t.j || 1 === t.j) {
                    var rt = 0,
                      nt = 0,
                      ot = 2 === t.j ? -.5 : -1,
                      ht = 0,
                      lt = !0;
                    for (a = 0; a < r; a += 1)
                      if (S[a].n) {
                        for (rt && (rt += nt); ht < a;) S[ht].animatorJustifyOffset = rt, ht += 1;
                        rt = 0, lt = !0
                      } else {
                        for (I = 0; I < E; I += 1)(L = k[I].a).t.propType && (lt && 2 === t.j && (nt += L.t.v * ot), (z = k[I].s.getMult(S[a].anIndexes[I], P.a[I].s.totalChars)).length ? rt += L.t.v * z[0] * ot : rt += L.t.v * z * ot);
                        lt = !1
                      } for (rt && (rt += nt); ht < a;) S[ht].animatorJustifyOffset = rt, ht += 1
                  }
                  for (a = 0; a < r; a += 1) {
                    if (D.reset(), B = 1, S[a].n) s = 0, i += t.yOffset, i += R ? 1 : 0, o = $, R = !1, this._hasMaskedPath && (f = et, m = (d = u[c = tt].points)[f - 1], g = (h = d[f]).partialLength, l = 0), Z = U = K = it = "", at = this.defaultPropsArray;
                    else {
                      if (this._hasMaskedPath) {
                        if (st !== S[a].line) {
                          switch (t.j) {
                            case 1:
                              o += v - t.lineWidths[S[a].line];
                              break;
                            case 2:
                              o += (v - t.lineWidths[S[a].line]) / 2
                          }
                          st = S[a].line
                        }
                        Q !== S[a].ind && (S[Q] && (o += S[Q].extra), o += S[a].an / 2, Q = S[a].ind), o += x[0] * S[a].an / 200;
                        var ft = 0;
                        for (I = 0; I < E; I += 1)(L = k[I].a).p.propType && ((z = k[I].s.getMult(S[a].anIndexes[I], P.a[I].s.totalChars)).length ? ft += L.p.v[0] * z[0] : ft += L.p.v[0] * z), L.a.propType && ((z = k[I].s.getMult(S[a].anIndexes[I], P.a[I].s.totalChars)).length ? ft += L.a.v[0] * z[0] : ft += L.a.v[0] * z);
                        for (p = !0; p;) l + g >= o + ft || !d ? (y = (o + ft - l) / h.partialLength, q = m.point[0] + (h.point[0] - m.point[0]) * y, j = m.point[1] + (h.point[1] - m.point[1]) * y, D.translate(-x[0] * S[a].an / 200, -x[1] * N / 100), p = !1) : d && (l += h.partialLength, (f += 1) >= d.length && (f = 0, u[c += 1] ? d = u[c].points : b.v.c ? (f = 0, d = u[c = 0].points) : (l -= h.partialLength, d = null)), d && (m = h, g = (h = d[f]).partialLength));
                        V = S[a].an / 2 - S[a].add, D.translate(-V, 0, 0)
                      } else V = S[a].an / 2 - S[a].add, D.translate(-V, 0, 0), D.translate(-x[0] * S[a].an / 200, -x[1] * N / 100, 0);
                      for (S[a].l, I = 0; I < E; I += 1)(L = k[I].a).t.propType && (z = k[I].s.getMult(S[a].anIndexes[I], P.a[I].s.totalChars), 0 === s && 0 === t.j || (this._hasMaskedPath ? z.length ? o += L.t.v * z[0] : o += L.t.v * z : z.length ? s += L.t.v * z[0] : s += L.t.v * z));
                      for (S[a].l, t.strokeWidthAnim && (X = t.sw || 0), t.strokeColorAnim && (H = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (Y = [t.fc[0], t.fc[1], t.fc[2]]), I = 0; I < E; I += 1)(L = k[I].a).a.propType && ((z = k[I].s.getMult(S[a].anIndexes[I], P.a[I].s.totalChars)).length ? D.translate(-L.a.v[0] * z[0], -L.a.v[1] * z[1], L.a.v[2] * z[2]) : D.translate(-L.a.v[0] * z, -L.a.v[1] * z, L.a.v[2] * z));
                      for (I = 0; I < E; I += 1)(L = k[I].a).s.propType && ((z = k[I].s.getMult(S[a].anIndexes[I], P.a[I].s.totalChars)).length ? D.scale(1 + (L.s.v[0] - 1) * z[0], 1 + (L.s.v[1] - 1) * z[1], 1) : D.scale(1 + (L.s.v[0] - 1) * z, 1 + (L.s.v[1] - 1) * z, 1));
                      for (I = 0; I < E; I += 1) {
                        if (L = k[I].a, z = k[I].s.getMult(S[a].anIndexes[I], P.a[I].s.totalChars), L.sk.propType && (z.length ? D.skewFromAxis(-L.sk.v * z[0], L.sa.v * z[1]) : D.skewFromAxis(-L.sk.v * z, L.sa.v * z)), L.r.propType && (z.length ? D.rotateZ(-L.r.v * z[2]) : D.rotateZ(-L.r.v * z)), L.ry.propType && (z.length ? D.rotateY(L.ry.v * z[1]) : D.rotateY(L.ry.v * z)), L.rx.propType && (z.length ? D.rotateX(L.rx.v * z[0]) : D.rotateX(L.rx.v * z)), L.o.propType && (z.length ? B += (L.o.v * z[0] - B) * z[0] : B += (L.o.v * z - B) * z), t.strokeWidthAnim && L.sw.propType && (z.length ? X += L.sw.v * z[0] : X += L.sw.v * z), t.strokeColorAnim && L.sc.propType)
                          for (G = 0; G < 3; G += 1) z.length ? H[G] = H[G] + (L.sc.v[G] - H[G]) * z[0] : H[G] = H[G] + (L.sc.v[G] - H[G]) * z;
                        if (t.fillColorAnim && t.fc) {
                          if (L.fc.propType)
                            for (G = 0; G < 3; G += 1) z.length ? Y[G] = Y[G] + (L.fc.v[G] - Y[G]) * z[0] : Y[G] = Y[G] + (L.fc.v[G] - Y[G]) * z;
                          L.fh.propType && (Y = z.length ? F(Y, L.fh.v * z[0]) : F(Y, L.fh.v * z)), L.fs.propType && (Y = z.length ? M(Y, L.fs.v * z[0]) : M(Y, L.fs.v * z)), L.fb.propType && (Y = z.length ? A(Y, L.fb.v * z[0]) : A(Y, L.fb.v * z))
                        }
                      }
                      for (I = 0; I < E; I += 1)(L = k[I].a).p.propType && (z = k[I].s.getMult(S[a].anIndexes[I], P.a[I].s.totalChars), this._hasMaskedPath ? z.length ? D.translate(0, L.p.v[1] * z[0], -L.p.v[2] * z[1]) : D.translate(0, L.p.v[1] * z, -L.p.v[2] * z) : z.length ? D.translate(L.p.v[0] * z[0], L.p.v[1] * z[1], -L.p.v[2] * z[2]) : D.translate(L.p.v[0] * z, L.p.v[1] * z, -L.p.v[2] * z));
                      if (t.strokeWidthAnim && (U = X < 0 ? 0 : X), t.strokeColorAnim && (J = "rgb(" + Math.round(255 * H[0]) + "," + Math.round(255 * H[1]) + "," + Math.round(255 * H[2]) + ")"), t.fillColorAnim && t.fc && (K = "rgb(" + Math.round(255 * Y[0]) + "," + Math.round(255 * Y[1]) + "," + Math.round(255 * Y[2]) + ")"), this._hasMaskedPath) {
                        if (D.translate(0, -t.ls), D.translate(0, x[1] * N / 100 + i, 0), P.p.p) {
                          _ = (h.point[1] - m.point[1]) / (h.point[0] - m.point[0]);
                          var ct = 180 * Math.atan(_) / Math.PI;
                          h.point[0] < m.point[0] && (ct += 180), D.rotate(-ct * Math.PI / 180)
                        }
                        D.translate(q, j, 0), o -= x[0] * S[a].an / 200, S[a + 1] && Q !== S[a + 1].ind && (o += S[a].an / 2, o += t.tr / 1e3 * t.finalSize)
                      } else {
                        switch (D.translate(s, i, 0), t.ps && D.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                          case 1:
                            D.translate(S[a].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[S[a].line]), 0, 0);
                            break;
                          case 2:
                            D.translate(S[a].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[S[a].line]) / 2, 0, 0)
                        }
                        D.translate(0, -t.ls), D.translate(V, 0, 0), D.translate(x[0] * S[a].an / 200, x[1] * N / 100, 0), s += S[a].l + t.tr / 1e3 * t.finalSize
                      }
                      at = [D.props[0], D.props[1], D.props[2], D.props[3], D.props[4], D.props[5], D.props[6], D.props[7], D.props[8], D.props[9], D.props[10], D.props[11], D.props[12], D.props[13], D.props[14], D.props[15]], Z = B
                    }
                    C <= a ? (O = new pt(Z, U, J, K, it, at), this.renderedLetters.push(O), C += 1, this.lettersChangedFlag = !0) : (O = this.renderedLetters[a], this.lettersChangedFlag = O.update(Z, U, J, K, it, at) || this.lettersChangedFlag)
                  }
                }
              }, ht.prototype.getValue = function() {
                this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
              }, ht.prototype.mHelper = new V, ht.prototype.defaultPropsArray = [], j([N], ht), pt.prototype.update = function(t, e, s, i, a, r) {
                this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
                var n = !1;
                return this.o !== t && (this.o = t, this._mdf.o = !0, n = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, n = !0), this.sc !== s && (this.sc = s, this._mdf.sc = !0, n = !0), this.fc !== i && (this.fc = i, this._mdf.fc = !0, n = !0), this.m !== a && (this.m = a, this._mdf.m = !0, n = !0), !r.length || this.p[0] === r[0] && this.p[1] === r[1] && this.p[4] === r[4] && this.p[5] === r[5] && this.p[12] === r[12] && this.p[13] === r[13] || (this.p = r, this._mdf.p = !0, n = !0), n
              }, ft.prototype.defaultBoxWidth = [0, 0], ft.prototype.copyData = function(t, e) {
                for (var s in e) e.hasOwnProperty(s) && (t[s] = e[s]);
                return t
              }, ft.prototype.setCurrentData = function(t) {
                t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
              }, ft.prototype.searchProperty = function() {
                return this.searchKeyframes()
              }, ft.prototype.searchKeyframes = function() {
                return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
              }, ft.prototype.addEffect = function(t) {
                this.effectsSequence.push(t), this.elem.addDynamicProperty(this)
              }, ft.prototype.getValue = function(t) {
                if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
                  this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                  var e = this.currentData,
                    s = this.keysIndex;
                  if (this.lock) this.setCurrentData(this.currentData);
                  else {
                    this.lock = !0, this._mdf = !1;
                    var i, a = this.effectsSequence.length,
                      r = t || this.data.d.k[this.keysIndex].s;
                    for (i = 0; i < a; i += 1) r = s !== this.keysIndex ? this.effectsSequence[i](r, r.t) : this.effectsSequence[i](this.currentData, r.t);
                    e !== r && this.setCurrentData(r), this.pv = this.v = this.currentData, this.lock = !1, this.frameId = this.elem.globalData.frameId
                  }
                }
              }, ft.prototype.getKeyframeValue = function() {
                for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, s = 0, i = t.length; s <= i - 1 && (t[s].s, !(s === i - 1 || t[s + 1].t > e));) s += 1;
                return this.keysIndex !== s && (this.keysIndex = s), this.data.d.k[this.keysIndex].s
              }, ft.prototype.buildFinalText = function(t) {
                for (var e, s = H.getCombinedCharacterCodes(), i = [], a = 0, r = t.length; a < r;) e = t.charCodeAt(a), -1 !== s.indexOf(e) ? i[i.length - 1] += t.charAt(a) : e >= 55296 && e <= 56319 && (e = t.charCodeAt(a + 1)) >= 56320 && e <= 57343 ? (i.push(t.substr(a, 2)), ++a) : i.push(t.charAt(a)), a += 1;
                return i
              }, ft.prototype.completeTextData = function(t) {
                t.__complete = !0;
                var e, s, i, a, r, n, o, h = this.elem.globalData.fontManager,
                  l = this.data,
                  p = [],
                  f = 0,
                  c = l.m.g,
                  m = 0,
                  d = 0,
                  u = 0,
                  g = [],
                  v = 0,
                  y = 0,
                  _ = h.getFontByName(t.f),
                  b = 0,
                  x = _.fStyle ? _.fStyle.split(" ") : [],
                  k = "normal",
                  P = "normal";
                for (s = x.length, e = 0; e < s; e += 1) switch (x[e].toLowerCase()) {
                  case "italic":
                    P = "italic";
                    break;
                  case "bold":
                    k = "700";
                    break;
                  case "black":
                    k = "900";
                    break;
                  case "medium":
                    k = "500";
                    break;
                  case "regular":
                  case "normal":
                    k = "400";
                    break;
                  case "light":
                  case "thin":
                    k = "200"
                }
                t.fWeight = _.fWeight || k, t.fStyle = P, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), s = t.finalText.length, t.finalLineHeight = t.lh;
                var D, C = t.tr / 1e3 * t.finalSize;
                if (t.sz)
                  for (var S, w, T = !0, M = t.sz[0], A = t.sz[1]; T;) {
                    S = 0, v = 0, s = (w = this.buildFinalText(t.t)).length, C = t.tr / 1e3 * t.finalSize;
                    var F = -1;
                    for (e = 0; e < s; e += 1) D = w[e].charCodeAt(0), i = !1, " " === w[e] ? F = e : 13 !== D && 3 !== D || (v = 0, i = !0, S += t.finalLineHeight || 1.2 * t.finalSize), h.chars ? (o = h.getCharData(w[e], _.fStyle, _.fFamily), b = i ? 0 : o.w * t.finalSize / 100) : b = h.measureText(w[e], t.f, t.finalSize), v + b > M && " " !== w[e] ? (-1 === F ? s += 1 : e = F, S += t.finalLineHeight || 1.2 * t.finalSize, w.splice(e, F === e ? 1 : 0, "\r"), F = -1, v = 0) : (v += b, v += C);
                    S += _.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && A < S ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = w, s = t.finalText.length, T = !1)
                  }
                v = -C, b = 0;
                var L, I = 0;
                for (e = 0; e < s; e += 1)
                  if (i = !1, D = (L = t.finalText[e]).charCodeAt(0), " " === L ? a = " " : 13 === D || 3 === D ? (I = 0, g.push(v), y = v > y ? v : y, v = -2 * C, a = "", i = !0, u += 1) : a = t.finalText[e], h.chars ? (o = h.getCharData(L, _.fStyle, h.getFontByName(t.f).fFamily), b = i ? 0 : o.w * t.finalSize / 100) : b = h.measureText(a, t.f, t.finalSize), " " === L ? I += b + C : (v += b + C + I, I = 0), p.push({
                      l: b,
                      an: b,
                      add: m,
                      n: i,
                      anIndexes: [],
                      val: a,
                      line: u,
                      animatorJustifyOffset: 0
                    }), 2 == c) {
                    if (m += b, "" === a || " " === a || e === s - 1) {
                      for ("" !== a && " " !== a || (m -= b); d <= e;) p[d].an = m, p[d].ind = f, p[d].extra = b, d += 1;
                      f += 1, m = 0
                    }
                  } else if (3 == c) {
                  if (m += b, "" === a || e === s - 1) {
                    for ("" === a && (m -= b); d <= e;) p[d].an = m, p[d].ind = f, p[d].extra = b, d += 1;
                    m = 0, f += 1
                  }
                } else p[f].ind = f, p[f].extra = 0, f += 1;
                if (t.l = p, y = v > y ? v : y, g.push(v), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
                else switch (t.boxWidth = y, t.j) {
                  case 1:
                    t.justifyOffset = -t.boxWidth;
                    break;
                  case 2:
                    t.justifyOffset = -t.boxWidth / 2;
                    break;
                  default:
                    t.justifyOffset = 0
                }
                t.lineWidths = g;
                var E, O, N = l.a;
                n = N.length;
                var R, z, V = [];
                for (r = 0; r < n; r += 1) {
                  for ((E = N[r]).a.sc && (t.strokeColorAnim = !0), E.a.sw && (t.strokeWidthAnim = !0), (E.a.fc || E.a.fh || E.a.fs || E.a.fb) && (t.fillColorAnim = !0), z = 0, R = E.s.b, e = 0; e < s; e += 1)(O = p[e]).anIndexes[r] = z, (1 == R && "" !== O.val || 2 == R && "" !== O.val && " " !== O.val || 3 == R && (O.n || " " == O.val || e == s - 1) || 4 == R && (O.n || e == s - 1)) && (1 === E.s.rn && V.push(z), z += 1);
                  l.a[r].s.totalChars = z;
                  var q, j = -1;
                  if (1 === E.s.rn)
                    for (e = 0; e < s; e += 1) j != (O = p[e]).anIndexes[r] && (j = O.anIndexes[r], q = V.splice(Math.floor(Math.random() * V.length), 1)[0]), O.anIndexes[r] = q
                }
                t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = _.ascent * t.finalSize / 100
              }, ft.prototype.updateDocumentData = function(t, e) {
                e = void 0 === e ? this.keysIndex : e;
                var s = this.copyData({}, this.data.d.k[e].s);
                s = this.copyData(s, t), this.data.d.k[e].s = s, this.recalculate(e), this.elem.addDynamicProperty(this)
              }, ft.prototype.recalculate = function(t) {
                var e = this.data.d.k[t].s;
                e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e)
              }, ft.prototype.canResizeFont = function(t) {
                this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
              }, ft.prototype.setMinimumFontSize = function(t) {
                this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
              };
              var ct, mt = function() {
                  var t = Math.max,
                    e = Math.min,
                    s = Math.floor;

                  function i(t, e) {
                    this._currentTextLength = -1, this.k = !1, this.data = e, this.elem = t, this.comp = t.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t), this.s = X.getProp(t, e.s || {
                      k: 0
                    }, 0, 0, this), this.e = "e" in e ? X.getProp(t, e.e, 0, 0, this) : {
                      v: 100
                    }, this.o = X.getProp(t, e.o || {
                      k: 0
                    }, 0, 0, this), this.xe = X.getProp(t, e.xe || {
                      k: 0
                    }, 0, 0, this), this.ne = X.getProp(t, e.ne || {
                      k: 0
                    }, 0, 0, this), this.a = X.getProp(t, e.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
                  }
                  return i.prototype = {
                    getMult: function(i) {
                      this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                      var a = q.getBezierEasing(this.ne.v / 100, 0, 1 - this.xe.v / 100, 1).get,
                        r = 0,
                        n = this.finalS,
                        o = this.finalE,
                        h = this.data.sh;
                      if (2 == h) r = a(r = o === n ? i >= o ? 1 : 0 : t(0, e(.5 / (o - n) + (i - n) / (o - n), 1)));
                      else if (3 == h) r = a(r = o === n ? i >= o ? 0 : 1 : 1 - t(0, e(.5 / (o - n) + (i - n) / (o - n), 1)));
                      else if (4 == h) o === n ? r = 0 : (r = t(0, e(.5 / (o - n) + (i - n) / (o - n), 1))) < .5 ? r *= 2 : r = 1 - 2 * (r - .5), r = a(r);
                      else if (5 == h) {
                        if (o === n) r = 0;
                        else {
                          var l = o - n,
                            p = -l / 2 + (i = e(t(0, i + .5 - n), o - n)),
                            f = l / 2;
                          r = Math.sqrt(1 - p * p / (f * f))
                        }
                        r = a(r)
                      } else 6 == h ? (o === n ? r = 0 : (i = e(t(0, i + .5 - n), o - n), r = (1 + Math.cos(Math.PI + 2 * Math.PI * i / (o - n))) / 2), r = a(r)) : (i >= s(n) && (r = i - n < 0 ? 1 - (n - i) : t(0, e(o - i, 1))), r = a(r));
                      return r * this.a.v
                    },
                    getValue: function(t) {
                      this.iterateDynamicProperties(), this._mdf = t || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t && 2 === this.data.r && (this.e.v = this._currentTextLength);
                      var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                        s = this.o.v / e,
                        i = this.s.v / e + s,
                        a = this.e.v / e + s;
                      if (i > a) {
                        var r = i;
                        i = a, a = r
                      }
                      this.finalS = i, this.finalE = a
                    }
                  }, j([N], i), {
                    getTextSelectorProp: function(t, e, s) {
                      return new i(t, e, s)
                    }
                  }
                }(),
                dt = function(t, e, s, i) {
                  var a = 0,
                    r = t,
                    n = E(r);
                  return {
                    newElement: function() {
                      return a ? n[a -= 1] : e()
                    },
                    release: function(t) {
                      a === r && (n = ut.double(n), r *= 2), s && s(t), n[a] = t, a += 1
                    }
                  }
                },
                ut = {
                  double: function(t) {
                    return t.concat(E(t.length))
                  }
                },
                gt = dt(8, (function() {
                  return I("float32", 2)
                })),
                vt = ((ct = dt(4, (function() {
                  return new G
                }), (function(t) {
                  var e, s = t._length;
                  for (e = 0; e < s; e += 1) gt.release(t.v[e]), gt.release(t.i[e]), gt.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
                  t._length = 0, t.c = !1
                }))).clone = function(t) {
                  var e, s = ct.newElement(),
                    i = void 0 === t._length ? t.v.length : t._length;
                  for (s.setLength(i), s.c = t.c, e = 0; e < i; e += 1) s.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
                  return s
                }, ct),
                yt = function() {
                  var t = {
                      newShapeCollection: function() {
                        return e ? i[e -= 1] : new st
                      },
                      release: function(t) {
                        var a, r = t._length;
                        for (a = 0; a < r; a += 1) vt.release(t.shapes[a]);
                        t._length = 0, e === s && (i = ut.double(i), s *= 2), i[e] = t, e += 1
                      }
                    },
                    e = 0,
                    s = 4,
                    i = E(s);
                  return t
                }(),
                _t = dt(8, (function() {
                  return {
                    lengths: [],
                    totalLength: 0
                  }
                }), (function(t) {
                  var e, s = t.lengths.length;
                  for (e = 0; e < s; e += 1) bt.release(t.lengths[e]);
                  t.lengths.length = 0
                })),
                bt = dt(8, (function() {
                  return {
                    addedLength: 0,
                    percents: I("float32", c),
                    lengths: I("float32", c)
                  }
                }));

              function xt() {}

              function kt(e, s) {
                this.animationItem = e, this.renderConfig = {
                  clearAnimation: !(!s || void 0 === s.clearAnimation) && s.clearAnimation,
                  setGlobalAlphaError: !(!s || void 0 === s.setGlobalAlphaError) && s.setGlobalAlphaError,
                  setPreLoad: !(!s || void 0 === s.setPreLoad) && s.setPreLoad,
                  transformPerformance: s && void 0 !== s.transformPerformance ? s.transformPerformance : "default",
                  clearCanvas: !s || void 0 === s.clearCanvas || s.clearCanvas,
                  context: s && s.context || null,
                  progressiveLoad: s && s.progressiveLoad || !1,
                  preserveAspectRatio: s && s.preserveAspectRatio || "xMidYMid meet",
                  imagePreserveAspectRatio: s && s.imagePreserveAspectRatio || "xMidYMid slice",
                  className: s && s.className || ""
                }, this.renderConfig.dpr = s && s.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = s && s.dpr || t.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
                  frameNum: -1,
                  _mdf: !1,
                  renderConfig: this.renderConfig,
                  currentGlobalAlpha: -1
                }, this.contextData = new qt, this.elements = [], this.pendingElements = [], this.transformMat = new V, this.completeLayers = !1, this.rendererType = "canvas"
              }

              function Pt(t, s, i) {
                this.data = t, this.element = s, this.globalData = i, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
                var a, r = this.globalData.defs,
                  n = this.masksProperties ? this.masksProperties.length : 0;
                this.viewData = E(n), this.solidPath = "";
                var o, h, l, p, f, c, m, d = this.masksProperties,
                  u = 0,
                  g = [],
                  v = S(),
                  y = "clipPath",
                  _ = "clip-path";
                for (a = 0; a < n; a++)
                  if (("a" !== d[a].mode && "n" !== d[a].mode || d[a].inv || 100 !== d[a].o.k || d[a].o.x) && (y = "mask", _ = "mask"), "s" != d[a].mode && "i" != d[a].mode || 0 !== u ? p = null : ((p = createNS("rect")).setAttribute("fill", "#ffffff"), p.setAttribute("width", this.element.comp.data.w || 0), p.setAttribute("height", this.element.comp.data.h || 0), g.push(p)), o = createNS("path"), "n" != d[a].mode) {
                    var b;
                    if (u += 1, o.setAttribute("fill", "s" === d[a].mode ? "#000000" : "#ffffff"), o.setAttribute("clip-rule", "nonzero"), 0 !== d[a].x.k ? (y = "mask", _ = "mask", m = X.getProp(this.element, d[a].x, 0, null, this.element), b = S(), (f = createNS("filter")).setAttribute("id", b), (c = createNS("feMorphology")).setAttribute("operator", "erode"), c.setAttribute("in", "SourceGraphic"), c.setAttribute("radius", "0"), f.appendChild(c), r.appendChild(f), o.setAttribute("stroke", "s" === d[a].mode ? "#000000" : "#ffffff")) : (c = null, m = null), this.storedData[a] = {
                        elem: o,
                        x: m,
                        expan: c,
                        lastPath: "",
                        lastOperator: "",
                        filterId: b,
                        lastRadius: 0
                      }, "i" == d[a].mode) {
                      l = g.length;
                      var x = createNS("g");
                      for (h = 0; h < l; h += 1) x.appendChild(g[h]);
                      var k = createNS("mask");
                      k.setAttribute("mask-type", "alpha"), k.setAttribute("id", v + "_" + u), k.appendChild(o), r.appendChild(k), x.setAttribute("mask", "url(" + e + "#" + v + "_" + u + ")"), g.length = 0, g.push(x)
                    } else g.push(o);
                    d[a].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[a] = {
                      elem: o,
                      lastPath: "",
                      op: X.getProp(this.element, d[a].o, 0, .01, this.element),
                      prop: K.getShapeProp(this.element, d[a], 3),
                      invRect: p
                    }, this.viewData[a].prop.k || this.drawPath(d[a], this.viewData[a].prop.v, this.viewData[a])
                  } else this.viewData[a] = {
                    op: X.getProp(this.element, d[a].o, 0, .01, this.element),
                    prop: K.getShapeProp(this.element, d[a], 3),
                    elem: o,
                    lastPath: ""
                  }, r.appendChild(o);
                for (this.maskElement = createNS(y), n = g.length, a = 0; a < n; a += 1) this.maskElement.appendChild(g[a]);
                u > 0 && (this.maskElement.setAttribute("id", v), this.element.maskedElement.setAttribute(_, "url(" + e + "#" + v + ")"), r.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
              }

              function Dt() {}

              function Ct() {}

              function St() {}

              function wt() {}

              function Tt() {}

              function Mt(t, e) {
                this.elem = t, this.pos = e
              }

              function At() {
                this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
              }

              function Ft(t, e, s, i) {
                this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
                var a = 4;
                "rc" == e.ty ? a = 5 : "el" == e.ty ? a = 6 : "sr" == e.ty && (a = 7), this.sh = K.getShapeProp(t, e, a, t);
                var r, n, o = s.length;
                for (r = 0; r < o; r += 1) s[r].closed || (n = {
                  transforms: i.addTransformSequence(s[r].transforms),
                  trNodes: []
                }, this.styledShapes.push(n), s[r].elements.push(n))
              }

              function Lt() {}

              function It(t, e, s) {
                this.initFrame(), this.initBaseData(t, e, s), this.initFrame(), this.initTransform(t, e, s), this.initHierarchy()
              }

              function Et() {}

              function Ot() {}

              function Nt() {}

              function Rt(t, e, s) {
                this.assetData = e.getAssetData(t.refId), this.initElement(t, e, s), this.sourceRect = {
                  top: 0,
                  left: 0,
                  width: this.assetData.w,
                  height: this.assetData.h
                }
              }

              function zt(t, e, s) {
                this.initElement(t, e, s)
              }

              function Vt(t, e, s) {
                this.initElement(t, e, s)
              }

              function qt() {
                var t;
                for (this.saved = [], this.cArrPos = 0, this.cTr = new V, this.cO = 1, this.savedOp = I("float32", 15), t = 0; t < 15; t += 1) this.saved[t] = I("float32", 16);
                this._length = 15
              }

              function jt() {}

              function Wt(t, e, s) {
                this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getImage(this.assetData), this.initElement(t, e, s)
              }

              function Bt(t, e, s) {
                this.completeLayers = !1, this.layers = t.layers, this.pendingElements = [], this.elements = E(this.layers.length), this.initElement(t, e, s), this.tm = t.tm ? X.getProp(this, t.tm, 0, e.frameRate, this) : {
                  _placeholder: !0
                }
              }

              function Ht(t, e) {
                this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = E(this.masksProperties.length);
                var s, i = this.masksProperties.length,
                  a = !1;
                for (s = 0; s < i; s++) "n" !== this.masksProperties[s].mode && (a = !0), this.viewData[s] = K.getShapeProp(this.element, this.masksProperties[s], 3);
                this.hasMasks = a, a && this.element.addRenderableComponent(this)
              }

              function Xt(t, e, s) {
                this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new At, this.initElement(t, e, s)
              }

              function Yt(t, e, s) {
                this.initElement(t, e, s)
              }

              function Gt(t, e, s) {
                this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
                  fill: "rgba(0,0,0,0)",
                  stroke: "rgba(0,0,0,0)",
                  sWidth: 0,
                  fValue: ""
                }, this.initElement(t, e, s)
              }

              function Ut() {}
              xt.prototype.checkLayers = function(t) {
                var e, s, i = this.layers.length;
                for (this.completeLayers = !0, e = i - 1; e >= 0; e--) this.elements[e] || (s = this.layers[e]).ip - s.st <= t - this.layers[e].st && s.op - s.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
                this.checkPendingElements()
              }, xt.prototype.createItem = function(t) {
                switch (t.ty) {
                  case 2:
                    return this.createImage(t);
                  case 0:
                    return this.createComp(t);
                  case 1:
                    return this.createSolid(t);
                  case 3:
                    return this.createNull(t);
                  case 4:
                    return this.createShape(t);
                  case 5:
                    return this.createText(t);
                  case 13:
                    return this.createCamera(t)
                }
                return this.createNull(t)
              }, xt.prototype.createCamera = function() {
                throw new Error("You're using a 3d camera. Try the html renderer.")
              }, xt.prototype.buildAllItems = function() {
                var t, e = this.layers.length;
                for (t = 0; t < e; t += 1) this.buildItem(t);
                this.checkPendingElements()
              }, xt.prototype.includeLayers = function(t) {
                this.completeLayers = !1;
                var e, s, i = t.length,
                  a = this.layers.length;
                for (e = 0; e < i; e += 1)
                  for (s = 0; s < a;) {
                    if (this.layers[s].id == t[e].id) {
                      this.layers[s] = t[e];
                      break
                    }
                    s += 1
                  }
              }, xt.prototype.setProjectInterface = function(t) {
                this.globalData.projectInterface = t
              }, xt.prototype.initItems = function() {
                this.globalData.progressiveLoad || this.buildAllItems()
              }, xt.prototype.buildElementParenting = function(t, e, s) {
                for (var i = this.elements, a = this.layers, r = 0, n = a.length; r < n;) a[r].ind == e && (i[r] && !0 !== i[r] ? (s.push(i[r]), i[r].setAsParent(), void 0 !== a[r].parent ? this.buildElementParenting(t, a[r].parent, s) : t.setHierarchy(s)) : (this.buildItem(r), this.addPendingElement(t))), r += 1
              }, xt.prototype.addPendingElement = function(t) {
                this.pendingElements.push(t)
              }, xt.prototype.searchExtraCompositions = function(t) {
                var e, s = t.length;
                for (e = 0; e < s; e += 1)
                  if (t[e].xt) {
                    var i = this.createComp(t[e]);
                    this.globalData.projectInterface.registerComposition(i)
                  }
              }, xt.prototype.setupGlobalData = function(t, e) {
                this.globalData.fontManager = new H, this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
                  w: t.w,
                  h: t.h
                }
              }, j([xt], kt), kt.prototype.createShape = function(t) {
                return new Xt(t, this.globalData, this)
              }, kt.prototype.createText = function(t) {
                return new Gt(t, this.globalData, this)
              }, kt.prototype.createImage = function(t) {
                return new Wt(t, this.globalData, this)
              }, kt.prototype.createComp = function(t) {
                return new Bt(t, this.globalData, this)
              }, kt.prototype.createSolid = function(t) {
                return new Yt(t, this.globalData, this)
              }, kt.prototype.createNull = function(t) {
                return new It(t, this.globalData, this)
              }, kt.prototype.ctxTransform = function(t) {
                if (1 !== t[0] || 0 !== t[1] || 0 !== t[4] || 1 !== t[5] || 0 !== t[12] || 0 !== t[13])
                  if (this.renderConfig.clearCanvas) {
                    this.transformMat.cloneFromProps(t);
                    var e = this.contextData.cTr.props;
                    this.transformMat.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]), this.contextData.cTr.cloneFromProps(this.transformMat.props);
                    var s = this.contextData.cTr.props;
                    "high" === ee ? this.canvasContext.setTransform(parseFloat(s[0].toFixed(2)), Math.round(s[1]), Math.round(s[4]), parseFloat(s[5].toFixed(2)), Math.round(s[12]), Math.round(s[13])) : this.canvasContext.setTransform(s[0], s[1], s[4], s[5], s[12], s[13])
                  } else this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13])
              }, kt.prototype.ctxOpacity = function(t) {
                if (!this.renderConfig.clearCanvas) return this.canvasContext.globalAlpha *= t < 0 ? 0 : t, void(this.globalData.currentGlobalAlpha = this.contextData.cO);
                this.contextData.cO *= t < 0 ? 0 : t, this.globalData.currentGlobalAlpha !== this.contextData.cO && (this.canvasContext.globalAlpha = this.contextData.cO, this.globalData.currentGlobalAlpha = this.contextData.cO)
              }, kt.prototype.reset = function() {
                this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
              }, kt.prototype.save = function(t) {
                if (this.renderConfig.clearCanvas) {
                  t && this.canvasContext.save();
                  var e = this.contextData.cTr.props;
                  this.contextData._length <= this.contextData.cArrPos && this.contextData.duplicate();
                  var s, i = this.contextData.saved[this.contextData.cArrPos];
                  for (s = 0; s < 16; s += 1) i[s] = e[s];
                  this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO, this.contextData.cArrPos += 1
                } else this.canvasContext.save()
              }, kt.prototype.restore = function(t) {
                if (this.renderConfig.clearCanvas) {
                  t && (this.canvasContext.restore(), this.globalData.blendMode = "source-over"), this.contextData.cArrPos -= 1;
                  var e, s = this.contextData.saved[this.contextData.cArrPos],
                    i = this.contextData.cTr.props;
                  for (e = 0; e < 16; e += 1) i[e] = s[e];
                  this.canvasContext.setTransform(s[0], s[1], s[4], s[5], s[12], s[13]), s = this.contextData.savedOp[this.contextData.cArrPos], this.contextData.cO = s, this.globalData.currentGlobalAlpha !== s && (this.canvasContext.globalAlpha = s, this.globalData.currentGlobalAlpha = s)
                } else this.canvasContext.restore()
              }, kt.prototype.configAnimation = function(t) {
                this.animationItem.wrapper ? (this.animationItem.container = O("canvas"), this.animationItem.container.style.width = "100%", this.animationItem.container.style.height = "100%", this.animationItem.container.style.transformOrigin = this.animationItem.container.style.mozTransformOrigin = this.animationItem.container.style.webkitTransformOrigin = this.animationItem.container.style["-webkit-transform"] = "0px 0px 0px", this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className)) : this.canvasContext = this.renderConfig.context, this.data = t, this.layers = t.layers, this.transformCanvas = {
                  w: t.w,
                  h: t.h,
                  sx: 0,
                  sy: 0,
                  tx: 0,
                  ty: 0
                }, this.setupGlobalData(t, m.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = E(t.layers.length), this.updateContainerSize()
              }, kt.prototype.updateContainerSize = function() {
                var t, e, s, i;
                if (this.reset(), this.animationItem.wrapper && this.animationItem.container ? (t = this.animationItem.wrapper.offsetWidth, e = this.animationItem.wrapper.offsetHeight, this.animationItem.container.setAttribute("width", t * this.renderConfig.dpr), this.animationItem.container.setAttribute("height", e * this.renderConfig.dpr)) : (t = this.canvasContext.canvas.width * this.renderConfig.dpr, e = this.canvasContext.canvas.height * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
                  var a = this.renderConfig.preserveAspectRatio.split(" "),
                    r = a[1] || "meet",
                    n = a[0] || "xMidYMid",
                    o = n.substr(0, 4),
                    h = n.substr(4);
                  s = t / e, (i = this.transformCanvas.w / this.transformCanvas.h) > s && "meet" === r || i < s && "slice" === r ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = t / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = e / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === o && (i < s && "meet" === r || i > s && "slice" === r) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === o && (i < s && "meet" === r || i > s && "slice" === r) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === h && (i > s && "meet" === r || i < s && "slice" === r) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === h && (i > s && "meet" === r || i < s && "slice" === r) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) * this.renderConfig.dpr : 0
                } else "none" == this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
                this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
              }, kt.prototype.destroy = function() {
                var t;
                for (this.renderConfig.clearCanvas && (this.animationItem.wrapper.innerHTML = ""), t = (this.layers ? this.layers.length : 0) - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
                this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
              }, kt.prototype.renderFrame = function(t, e) {
                if ((this.renderedFrame !== t || !0 !== this.renderConfig.clearCanvas || e) && !this.destroyed && -1 !== t) {
                  this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t;
                  var s, i = this.layers.length;
                  for (this.completeLayers || this.checkLayers(t), s = 0; s < i; s++)(this.completeLayers || this.elements[s]) && this.elements[s].prepareFrame(t - this.layers[s].st);
                  if (this.globalData._mdf) {
                    for (!0 === this.renderConfig.clearCanvas || this.save(), s = i - 1; s >= 0; s -= 1)(this.completeLayers || this.elements[s]) && this.elements[s].renderFrame();
                    !0 !== this.renderConfig.clearCanvas && this.restore()
                  }
                }
              }, kt.prototype.buildItem = function(t) {
                var e = this.elements;
                if (!e[t] && 99 != this.layers[t].ty) {
                  var s = this.createItem(this.layers[t], this, this.globalData);
                  e[t] = s
                }
              }, kt.prototype.checkPendingElements = function() {
                for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
              }, kt.prototype.hide = function() {
                this.animationItem.container.style.display = "none"
              }, kt.prototype.show = function() {
                this.animationItem.container.style.display = "block"
              }, Pt.prototype.getMaskProperty = function(t) {
                return this.viewData[t].prop
              }, Pt.prototype.renderFrame = function(t) {
                var s, i = this.element.finalTransform.mat,
                  a = this.masksProperties.length;
                for (s = 0; s < a; s++)
                  if ((this.viewData[s].prop._mdf || t) && this.drawPath(this.masksProperties[s], this.viewData[s].prop.v, this.viewData[s]), (this.viewData[s].op._mdf || t) && this.viewData[s].elem.setAttribute("fill-opacity", this.viewData[s].op.v), "n" !== this.masksProperties[s].mode && (this.viewData[s].invRect && (this.element.finalTransform.mProp._mdf || t) && (this.viewData[s].invRect.setAttribute("x", -i.props[12]), this.viewData[s].invRect.setAttribute("y", -i.props[13])), this.storedData[s].x && (this.storedData[s].x._mdf || t))) {
                    var r = this.storedData[s].expan;
                    this.storedData[s].x.v < 0 ? ("erode" !== this.storedData[s].lastOperator && (this.storedData[s].lastOperator = "erode", this.storedData[s].elem.setAttribute("filter", "url(" + e + "#" + this.storedData[s].filterId + ")")), r.setAttribute("radius", -this.storedData[s].x.v)) : ("dilate" !== this.storedData[s].lastOperator && (this.storedData[s].lastOperator = "dilate", this.storedData[s].elem.setAttribute("filter", null)), this.storedData[s].elem.setAttribute("stroke-width", 2 * this.storedData[s].x.v))
                  }
              }, Pt.prototype.getMaskelement = function() {
                return this.maskElement
              }, Pt.prototype.createLayerSolidPath = function() {
                var t = "M0,0 ";
                return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, (t += " h-" + this.globalData.compSize.w) + " v-" + this.globalData.compSize.h + " "
              }, Pt.prototype.drawPath = function(t, e, s) {
                var i, a, r = " M" + e.v[0][0] + "," + e.v[0][1];
                for (a = e._length, i = 1; i < a; i += 1) r += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[i][0] + "," + e.i[i][1] + " " + e.v[i][0] + "," + e.v[i][1];
                if (e.c && a > 1 && (r += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), s.lastPath !== r) {
                  var n = "";
                  s.elem && (e.c && (n = t.inv ? this.solidPath + r : r), s.elem.setAttribute("d", n)), s.lastPath = r
                }
              }, Pt.prototype.destroy = function() {
                this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
              }, Dt.prototype = {
                initHierarchy: function() {
                  this.hierarchy = [], this._isParent = !1, this.checkParenting()
                },
                setHierarchy: function(t) {
                  this.hierarchy = t
                },
                setAsParent: function() {
                  this._isParent = !0
                },
                checkParenting: function() {
                  void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
                }
              }, Ct.prototype = {
                initFrame: function() {
                  this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
                },
                prepareProperties: function(t, e) {
                  var s, i = this.dynamicProperties.length;
                  for (s = 0; s < i; s += 1)(e || this._isParent && "transform" === this.dynamicProperties[s].propType) && (this.dynamicProperties[s].getValue(), this.dynamicProperties[s]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
                },
                addDynamicProperty: function(t) {
                  -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t)
                }
              }, St.prototype = {
                initTransform: function() {
                  this.finalTransform = {
                    mProp: this.data.ks ? Y.getTransformProperty(this, this.data.ks, this) : {
                      o: 0
                    },
                    _matMdf: !1,
                    _opMdf: !1,
                    mat: new V
                  }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
                },
                renderTransform: function() {
                  if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
                    var t, e = this.finalTransform.mat,
                      s = 0,
                      i = this.hierarchy.length;
                    if (!this.finalTransform._matMdf)
                      for (; s < i;) {
                        if (this.hierarchy[s].finalTransform.mProp._mdf) {
                          this.finalTransform._matMdf = !0;
                          break
                        }
                        s += 1
                      }
                    if (this.finalTransform._matMdf)
                      for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), s = 0; s < i; s += 1) t = this.hierarchy[s].finalTransform.mProp.v.props, e.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15])
                  }
                },
                globalToLocal: function(t) {
                  var e = [];
                  e.push(this.finalTransform);
                  for (var s = !0, i = this.comp; s;) i.finalTransform ? (i.data.hasMask && e.splice(0, 0, i.finalTransform), i = i.comp) : s = !1;
                  var a, r, n = e.length;
                  for (a = 0; a < n; a += 1) r = e[a].mat.applyToPointArray(0, 0, 0), t = [t[0] - r[0], t[1] - r[1], 0];
                  return t
                },
                mHelper: new V
              }, wt.prototype = {
                initRenderable: function() {
                  this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
                },
                addRenderableComponent: function(t) {
                  -1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t)
                },
                removeRenderableComponent: function(t) {
                  -1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1)
                },
                prepareRenderableFrame: function(t) {
                  this.checkLayerLimits(t)
                },
                checkTransparency: function() {
                  this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
                },
                checkLayerLimits: function(t) {
                  this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
                },
                renderRenderable: function() {
                  var t, e = this.renderableComponents.length;
                  for (t = 0; t < e; t += 1) this.renderableComponents[t].renderFrame(this._isFirstFrame)
                },
                sourceRectAtTime: function() {
                  return {
                    top: 0,
                    left: 0,
                    width: 100,
                    height: 100
                  }
                },
                getLayerSize: function() {
                  return 5 === this.data.ty ? {
                    w: this.data.textData.width,
                    h: this.data.textData.height
                  } : {
                    w: this.data.width,
                    h: this.data.height
                  }
                }
              }, j([wt, function(t) {
                function e() {}
                return e.prototype = {
                  initElement: function(t, e, s) {
                    this.initFrame(), this.initBaseData(t, e, s), this.initTransform(t, e, s), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
                  },
                  hide: function() {
                    this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
                  },
                  show: function() {
                    this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
                  },
                  renderFrame: function() {
                    this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                  },
                  renderInnerContent: function() {},
                  prepareFrame: function(t) {
                    this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency()
                  },
                  destroy: function() {
                    this.innerElem = null, this.destroyBaseElement()
                  }
                }, e
              }()], Tt), At.prototype = {
                addTransformSequence: function(t) {
                  var e, s = t.length,
                    i = "_";
                  for (e = 0; e < s; e += 1) i += t[e].transform.key + "_";
                  var a = this.sequences[i];
                  return a || (a = {
                    transforms: [].concat(t),
                    finalTransform: new V,
                    _mdf: !1
                  }, this.sequences[i] = a, this.sequenceList.push(a)), a
                },
                processSequence: function(t, e) {
                  for (var s, i = 0, a = t.transforms.length, r = e; i < a && !e;) {
                    if (t.transforms[i].transform.mProps._mdf) {
                      r = !0;
                      break
                    }
                    i += 1
                  }
                  if (r)
                    for (t.finalTransform.reset(), i = a - 1; i >= 0; i -= 1) s = t.transforms[i].transform.mProps.v.props, t.finalTransform.transform(s[0], s[1], s[2], s[3], s[4], s[5], s[6], s[7], s[8], s[9], s[10], s[11], s[12], s[13], s[14], s[15]);
                  t._mdf = r
                },
                processSequences: function(t) {
                  var e, s = this.sequenceList.length;
                  for (e = 0; e < s; e += 1) this.processSequence(this.sequenceList[e], t)
                },
                getNewKey: function() {
                  return "_" + this.transform_key_count++
                }
              }, Ft.prototype.setAsAnimated = function() {
                this._isAnimated = !0
              }, Lt.prototype = {
                checkMasks: function() {
                  if (!this.data.hasMask) return !1;
                  for (var t = 0, e = this.data.masksProperties.length; t < e;) {
                    if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0;
                    t += 1
                  }
                  return !1
                },
                initExpressions: function() {
                  this.layerInterface = LayerExpressionInterface(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                  var t = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
                  this.layerInterface.registerEffectsInterface(t), 0 === this.data.ty || this.data.xt ? this.compInterface = CompExpressionInterface(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = ShapeExpressionInterface(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = TextExpressionInterface(this), this.layerInterface.text = this.layerInterface.textInterface)
                },
                setBlendMode: function() {
                  var t = z(this.data.bm);
                  (this.baseElement || this.layerElement).style["mix-blend-mode"] = t
                },
                initBaseData: function(t, e, s) {
                  this.globalData = e, this.comp = s, this.data = t, this.layerId = S(), this.data.sr || (this.data.sr = 1), this.effectsManager = new le(this.data, this, this.dynamicProperties)
                },
                getType: function() {
                  return this.type
                },
                sourceRectAtTime: function() {}
              }, It.prototype.prepareFrame = function(t) {
                this.prepareProperties(t, !0)
              }, It.prototype.renderFrame = function() {}, It.prototype.getBaseElement = function() {
                return null
              }, It.prototype.destroy = function() {}, It.prototype.sourceRectAtTime = function() {}, It.prototype.hide = function() {}, j([Lt, St, Dt, Ct], It), Et.prototype = {
                addShapeToModifiers: function(t) {
                  var e, s = this.shapeModifiers.length;
                  for (e = 0; e < s; e += 1) this.shapeModifiers[e].addShape(t)
                },
                isShapeInAnimatedModifiers: function(t) {
                  for (var e = this.shapeModifiers.length; 0 < e;)
                    if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
                  return !1
                },
                renderModifiers: function() {
                  if (this.shapeModifiers.length) {
                    var t, e = this.shapes.length;
                    for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
                    for (t = (e = this.shapeModifiers.length) - 1; t >= 0; t -= 1) this.shapeModifiers[t].processShapes(this._isFirstFrame)
                  }
                },
                lcEnum: {
                  1: "butt",
                  2: "round",
                  3: "square"
                },
                ljEnum: {
                  1: "miter",
                  2: "round",
                  3: "bevel"
                },
                searchProcessedElement: function(t) {
                  for (var e = this.processedElements, s = 0, i = e.length; s < i;) {
                    if (e[s].elem === t) return e[s].pos;
                    s += 1
                  }
                  return 0
                },
                addProcessedElement: function(t, e) {
                  for (var s = this.processedElements, i = s.length; i;)
                    if (s[i -= 1].elem === t) return void(s[i].pos = e);
                  s.push(new Mt(t, e))
                },
                prepareFrame: function(t) {
                  this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
                }
              }, Ot.prototype.initElement = function(t, e, s) {
                this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, s), this.textProperty = new ft(this, t.t, this.dynamicProperties), this.textAnimator = new ht(t.t, this.renderType, this), this.initTransform(t, e, s), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
              }, Ot.prototype.prepareFrame = function(t) {
                this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
              }, Ot.prototype.createPathShape = function(t, e) {
                var s, i, a = e.length,
                  r = "";
                for (s = 0; s < a; s += 1) i = e[s].ks.k, r += rt(i, i.i.length, !0, t);
                return r
              }, Ot.prototype.updateDocumentData = function(t, e) {
                this.textProperty.updateDocumentData(t, e)
              }, Ot.prototype.canResizeFont = function(t) {
                this.textProperty.canResizeFont(t)
              }, Ot.prototype.setMinimumFontSize = function(t) {
                this.textProperty.setMinimumFontSize(t)
              }, Ot.prototype.applyTextPropertiesToMatrix = function(t, e, s, i, a) {
                switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
                  case 1:
                    e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[s]), 0, 0);
                    break;
                  case 2:
                    e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[s]) / 2, 0, 0)
                }
                e.translate(i, a, 0)
              }, Ot.prototype.buildColor = function(t) {
                return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")"
              }, Ot.prototype.emptyProp = new pt, Ot.prototype.destroy = function() {}, j([Lt, St, Dt, Ct, Tt], Nt), Nt.prototype.initElement = function(t, e, s) {
                this.initFrame(), this.initBaseData(t, e, s), this.initTransform(t, e, s), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide()
              }, Nt.prototype.prepareFrame = function(t) {
                if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
                  if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
                  else {
                    var e = this.tm.v;
                    e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e
                  }
                  var s, i = this.elements.length;
                  for (this.completeLayers || this.checkLayers(this.renderedFrame), s = i - 1; s >= 0; s -= 1)(this.completeLayers || this.elements[s]) && (this.elements[s].prepareFrame(this.renderedFrame - this.layers[s].st), this.elements[s]._mdf && (this._mdf = !0))
                }
              }, Nt.prototype.renderInnerContent = function() {
                var t, e = this.layers.length;
                for (t = 0; t < e; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
              }, Nt.prototype.setElements = function(t) {
                this.elements = t
              }, Nt.prototype.getElements = function() {
                return this.elements
              }, Nt.prototype.destroyElements = function() {
                var t, e = this.layers.length;
                for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy()
              }, Nt.prototype.destroy = function() {
                this.destroyElements(), this.destroyBaseElement()
              }, j([Lt, St, Dt, Ct, Tt], Rt), Rt.prototype.createContent = function() {
                var t = this.globalData.getAssetsPath(this.assetData);
                this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem)
              }, Rt.prototype.sourceRectAtTime = function() {
                return this.sourceRect
              }, j([Rt], zt), zt.prototype.createContent = function() {
                var t = createNS("rect");
                t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t)
              }, j([Lt, St, Et, Dt, Ct, Tt], Vt), qt.prototype.duplicate = function() {
                var t = 2 * this._length,
                  e = this.savedOp;
                this.savedOp = I("float32", t), this.savedOp.set(e);
                var s = 0;
                for (s = this._length; s < t; s += 1) this.saved[s] = I("float32", 16);
                this._length = t
              }, qt.prototype.reset = function() {
                this.cArrPos = 0, this.cTr.reset(), this.cO = 1
              }, jt.prototype = {
                createElements: function() {},
                initRendererElement: function() {},
                createContainerElements: function() {
                  this.canvasContext = this.globalData.canvasContext, this.renderableEffectsManager = new Ut(this)
                },
                createContent: function() {},
                setBlendMode: function() {
                  var t = this.globalData;
                  if (t.blendMode !== this.data.bm) {
                    t.blendMode = this.data.bm;
                    var e = z(this.data.bm);
                    t.canvasContext.globalCompositeOperation = e
                  }
                },
                createRenderableComponents: function() {
                  this.maskManager = new Ht(this.data, this)
                },
                hideElement: function() {
                  this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
                },
                showElement: function() {
                  this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
                },
                renderFrame: function() {
                  if (!this.hidden && !this.data.hd) {
                    this.renderTransform(), this.renderRenderable(), this.setBlendMode();
                    var t = 0 === this.data.ty;
                    this.globalData.renderer.save(t), this.globalData.renderer.ctxTransform(this.finalTransform.mat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v), this.renderInnerContent(), this.globalData.renderer.restore(t), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)
                  }
                },
                destroy: function() {
                  this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy()
                },
                mHelper: new V
              }, jt.prototype.hide = jt.prototype.hideElement, jt.prototype.show = jt.prototype.showElement, j([Lt, St, jt, Dt, Ct, wt], Wt), Wt.prototype.initElement = Vt.prototype.initElement, Wt.prototype.prepareFrame = Rt.prototype.prepareFrame, Wt.prototype.createContent = function() {}, Wt.prototype.renderInnerContent = function(t) {
                if (this.canvasContext && this.canvasContext.drawImage && this.canvasContext.drawImage(this.img, 0, 0), ne >= 0 && oe >= 0) {
                  var e = this.data.ind,
                    s = this.canvasContext.getImageData(ne, oe, 1, 1).data;
                  s[0] > 0 || s[1] > 0 || s[2] > 0 || s[3] > 0 ? (re = {
                    index: e,
                    name: this.data.nm
                  }, ne = -1, oe = -1) : 1 === e && (re = null, ne = -1, oe = -1)
                }
              }, Wt.prototype.destroy = function() {
                this.img = null
              }, j([kt, Nt, jt], Bt), Bt.prototype.renderInnerContent = function() {
                var t, e = this.canvasContext;
                for (e.beginPath(), e.moveTo(0, 0), e.lineTo(this.data.w, 0), e.lineTo(this.data.w, this.data.h), e.lineTo(0, this.data.h), e.lineTo(0, 0), e.clip(), t = this.layers.length - 1; t >= 0; t -= 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
              }, Bt.prototype.destroy = function() {
                var t;
                for (t = this.layers.length - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
                this.layers = null, this.elements = null
              }, Ht.prototype.renderFrame = function() {
                if (this.hasMasks) {
                  var t, e, s, i, a = this.element.finalTransform.mat,
                    r = this.element.canvasContext,
                    n = this.masksProperties.length;
                  for (r.beginPath(), t = 0; t < n; t++)
                    if ("n" !== this.masksProperties[t].mode) {
                      this.masksProperties[t].inv && (r.moveTo(0, 0), r.lineTo(this.element.globalData.compSize.w, 0), r.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), r.lineTo(0, this.element.globalData.compSize.h), r.lineTo(0, 0)), i = this.viewData[t].v, e = a.applyToPointArray(i.v[0][0], i.v[0][1], 0), r.moveTo(e[0], e[1]);
                      var o, h = i._length;
                      for (o = 1; o < h; o++) s = a.applyToTriplePoints(i.o[o - 1], i.i[o], i.v[o]), r.bezierCurveTo(s[0], s[1], s[2], s[3], s[4], s[5]);
                      s = a.applyToTriplePoints(i.o[o - 1], i.i[0], i.v[0]), r.bezierCurveTo(s[0], s[1], s[2], s[3], s[4], s[5])
                    } this.element.globalData.renderer.save(!0), r.clip()
                }
              }, Ht.prototype.getMaskProperty = Pt.prototype.getMaskProperty, Ht.prototype.destroy = function() {
                this.element = null
              }, j([Lt, St, jt, Et, Dt, Ct, wt], Xt), Xt.prototype.initElement = Tt.prototype.initElement, Xt.prototype.transformHelper = {
                opacity: 1,
                _opMdf: !1
              }, Xt.prototype.dashResetter = [], Xt.prototype.createContent = function() {
                this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
              }, Xt.prototype.createStyleElement = function(t, e) {
                var s = {
                    data: t,
                    type: t.ty,
                    preTransforms: this.transformsManager.addTransformSequence(e),
                    transforms: [],
                    elements: [],
                    closed: !0 === t.hd
                  },
                  i = {};
                if ("fl" == t.ty || "st" == t.ty ? (i.c = X.getProp(this, t.c, 1, 255, this), i.c.k || (s.co = "rgb(" + o(i.c.v[0]) + "," + o(i.c.v[1]) + "," + o(i.c.v[2]) + ")")) : "gf" !== t.ty && "gs" !== t.ty || (i.s = X.getProp(this, t.s, 1, null, this), i.e = X.getProp(this, t.e, 1, null, this), i.h = X.getProp(this, t.h || {
                    k: 0
                  }, 0, .01, this), i.a = X.getProp(this, t.a || {
                    k: 0
                  }, 0, u, this), i.g = new at(this, t.g, this)), i.o = X.getProp(this, t.o, 0, .01, this), "st" == t.ty || "gs" == t.ty) {
                  if (s.lc = this.lcEnum[t.lc] || "round", s.lj = this.ljEnum[t.lj] || "round", 1 == t.lj && (s.ml = t.ml), i.w = X.getProp(this, t.w, 0, null, this), i.w.k || (s.wi = i.w.v), t.d) {
                    var a = new it(this, t.d, "canvas", this);
                    i.d = a, i.d.k || (s.da = i.d.dashArray, s.do = i.d.dashoffset[0])
                  }
                } else s.r = 2 === t.r ? "evenodd" : "nonzero";
                return this.stylesList.push(s), i.style = s, i
              }, Xt.prototype.createGroupElement = function(t) {
                return {
                  it: [],
                  prevViewData: []
                }
              }, Xt.prototype.createTransformElement = function(t) {
                return {
                  transform: {
                    opacity: 1,
                    _opMdf: !1,
                    key: this.transformsManager.getNewKey(),
                    op: X.getProp(this, t.o, 0, .01, this),
                    mProps: Y.getTransformProperty(this, t, this)
                  }
                }
              }, Xt.prototype.createShapeElement = function(t) {
                var e = new Ft(this, t, this.stylesList, this.transformsManager);
                return this.shapes.push(e), this.addShapeToModifiers(e), e
              }, Xt.prototype.reloadShapes = function() {
                this._isFirstFrame = !0;
                var t, e = this.itemsData.length;
                for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
                for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
                this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
              }, Xt.prototype.addTransformToStyleList = function(t) {
                var e, s = this.stylesList.length;
                for (e = 0; e < s; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.push(t)
              }, Xt.prototype.removeTransformFromStyleList = function() {
                var t, e = this.stylesList.length;
                for (t = 0; t < e; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.pop()
              }, Xt.prototype.closeStyles = function(t) {
                var e, s = t.length;
                for (e = 0; e < s; e += 1) t[e].closed = !0
              }, Xt.prototype.searchShapes = function(t, e, s, i, a) {
                var r, n, o, h, l, p, f = t.length - 1,
                  c = [],
                  m = [],
                  d = [].concat(a);
                for (r = f; r >= 0; r -= 1) {
                  if ((h = this.searchProcessedElement(t[r])) ? e[r] = s[h - 1] : t[r]._shouldRender = i, "fl" == t[r].ty || "st" == t[r].ty || "gf" == t[r].ty || "gs" == t[r].ty) h ? e[r].style.closed = !1 : e[r] = this.createStyleElement(t[r], d), c.push(e[r].style);
                  else if ("gr" == t[r].ty) {
                    if (h)
                      for (o = e[r].it.length, n = 0; n < o; n += 1) e[r].prevViewData[n] = e[r].it[n];
                    else e[r] = this.createGroupElement(t[r]);
                    this.searchShapes(t[r].it, e[r].it, e[r].prevViewData, i, d)
                  } else "tr" == t[r].ty ? (h || (p = this.createTransformElement(t[r]), e[r] = p), d.push(e[r]), this.addTransformToStyleList(e[r])) : "sh" == t[r].ty || "rc" == t[r].ty || "el" == t[r].ty || "sr" == t[r].ty ? h || (e[r] = this.createShapeElement(t[r])) : "tm" == t[r].ty || "rd" == t[r].ty ? (h ? (l = e[r]).closed = !1 : ((l = Z.getModifier(t[r].ty)).init(this, t[r]), e[r] = l, this.shapeModifiers.push(l)), m.push(l)) : "rp" == t[r].ty && (h ? (l = e[r]).closed = !0 : (l = Z.getModifier(t[r].ty), e[r] = l, l.init(this, t, r, e), this.shapeModifiers.push(l), i = !1), m.push(l));
                  this.addProcessedElement(t[r], r + 1)
                }
                for (this.removeTransformFromStyleList(), this.closeStyles(c), f = m.length, r = 0; r < f; r += 1) m[r].closed = !0
              }, Xt.prototype.renderInnerContent = function() {
                this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
              }, Xt.prototype.renderShapeTransform = function(t, e) {
                (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0)
              }, Xt.prototype.drawLayer = function() {
                var t, e, s, i, a, r, n, o, h, l = this.stylesList.length,
                  p = this.globalData.renderer,
                  f = this.globalData.canvasContext;
                for (t = 0; t < l; t += 1)
                  if (("st" !== (o = (h = this.stylesList[t]).type) && "gs" !== o || 0 !== h.wi) && h.data._shouldRender && 0 !== h.coOp && 0 !== this.globalData.currentGlobalAlpha) {
                    for (p.save(), r = h.elements, "st" === o || "gs" === o ? (f.strokeStyle = "st" === o ? h.co : h.grd, f.lineWidth = h.wi, f.lineCap = h.lc, f.lineJoin = h.lj, f.miterLimit = h.ml || 0) : f.fillStyle = "fl" === o ? h.co : h.grd, p.ctxOpacity(h.coOp), "st" !== o && "gs" !== o && f.beginPath(), p.ctxTransform(h.preTransforms.finalTransform.props), s = r.length, e = 0; e < s; e += 1) {
                      for ("st" !== o && "gs" !== o || (f.beginPath(), h.da && (f.setLineDash(h.da), f.lineDashOffset = h.do)), a = (n = r[e].trNodes).length, i = 0; i < a; i += 1) "m" == n[i].t ? f.moveTo(n[i].p[0], n[i].p[1]) : "c" == n[i].t ? f.bezierCurveTo(n[i].pts[0], n[i].pts[1], n[i].pts[2], n[i].pts[3], n[i].pts[4], n[i].pts[5]) : f.closePath();
                      "st" !== o && "gs" !== o || (f.stroke(), h.da && f.setLineDash(this.dashResetter))
                    }
                    if ("st" !== o && "gs" !== o && f.fill(h.r), ne >= 0 && oe >= 0) {
                      var c = this.data.ind,
                        m = f.getImageData(ne, oe, 1, 1).data;
                      m[0] > 0 || m[1] > 0 || m[2] > 0 || m[3] > 0 ? (re = {
                        index: c,
                        name: this.data.nm
                      }, ne = -1, oe = -1) : 1 === c && (re = null, ne = -1, oe = -1)
                    }
                    p.restore()
                  }
              }, Xt.prototype.renderShape = function(t, e, s, i) {
                var a, r;
                for (r = t, a = e.length - 1; a >= 0; a -= 1) "tr" == e[a].ty ? (r = s[a].transform, this.renderShapeTransform(t, r)) : "sh" == e[a].ty || "el" == e[a].ty || "rc" == e[a].ty || "sr" == e[a].ty ? this.renderPath(e[a], s[a]) : "fl" == e[a].ty ? this.renderFill(e[a], s[a], r) : "st" == e[a].ty ? this.renderStroke(e[a], s[a], r) : "gf" == e[a].ty || "gs" == e[a].ty ? this.renderGradientFill(e[a], s[a], r) : "gr" == e[a].ty ? this.renderShape(r, e[a].it, s[a].it) : e[a].ty;
                i && this.drawLayer()
              }, Xt.prototype.renderStyledShape = function(t, e) {
                if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
                  var s, i, a, r = t.trNodes,
                    n = e.paths,
                    o = n._length;
                  r.length = 0;
                  var h = t.transforms.finalTransform;
                  for (a = 0; a < o; a += 1) {
                    var l = n.shapes[a];
                    if (l && l.v) {
                      for (i = l._length, s = 1; s < i; s += 1) 1 === s && r.push({
                        t: "m",
                        p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
                      }), r.push({
                        t: "c",
                        pts: h.applyToTriplePoints(l.o[s - 1], l.i[s], l.v[s])
                      });
                      1 === i && r.push({
                        t: "m",
                        p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
                      }), l.c && i && (r.push({
                        t: "c",
                        pts: h.applyToTriplePoints(l.o[s - 1], l.i[0], l.v[0])
                      }), r.push({
                        t: "z"
                      }))
                    }
                  }
                  t.trNodes = r
                }
              }, Xt.prototype.renderPath = function(t, e) {
                if (!0 !== t.hd && t._shouldRender) {
                  var s, i = e.styledShapes.length;
                  for (s = 0; s < i; s += 1) this.renderStyledShape(e.styledShapes[s], e.sh)
                }
              }, Xt.prototype.renderFill = function(t, e, s) {
                var i = e.style;
                (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + o(e.c.v[0]) + "," + o(e.c.v[1]) + "," + o(e.c.v[2]) + ")"), (e.o._mdf || s._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * s.opacity)
              }, Xt.prototype.renderGradientFill = function(t, e, s) {
                var i = e.style;
                if (!i.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) {
                  var a = this.globalData.canvasContext,
                    r = e.s.v,
                    n = e.e.v;
                  if (1 === t.t) c = a.createLinearGradient(r[0], r[1], n[0], n[1]);
                  else var o = Math.sqrt(Math.pow(r[0] - n[0], 2) + Math.pow(r[1] - n[1], 2)),
                    h = Math.atan2(n[1] - r[1], n[0] - r[0]),
                    l = o * (e.h.v >= 1 ? .99 : e.h.v <= -1 ? -.99 : e.h.v),
                    p = Math.cos(h + e.a.v) * l + r[0],
                    f = Math.sin(h + e.a.v) * l + r[1],
                    c = a.createRadialGradient(p, f, 0, r[0], r[1], o);
                  var m, d = t.g.p,
                    u = e.g.c,
                    g = 1;
                  for (m = 0; m < d; m += 1) e.g._hasOpacity && e.g._collapsable && (g = e.g.o[2 * m + 1]), c.addColorStop(u[4 * m] / 100, "rgba(" + u[4 * m + 1] + "," + u[4 * m + 2] + "," + u[4 * m + 3] + "," + g + ")");
                  i.grd = c
                }
                i.coOp = e.o.v * s.opacity
              }, Xt.prototype.renderStroke = function(t, e, s) {
                var i = e.style,
                  a = e.d;
                a && (a._mdf || this._isFirstFrame) && (i.da = a.dashArray, i.do = a.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + o(e.c.v[0]) + "," + o(e.c.v[1]) + "," + o(e.c.v[2]) + ")"), (e.o._mdf || s._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * s.opacity), (e.w._mdf || this._isFirstFrame) && (i.wi = e.w.v)
              }, Xt.prototype.destroy = function() {
                this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
              }, j([Lt, St, jt, Dt, Ct, wt], Yt), Yt.prototype.initElement = Vt.prototype.initElement, Yt.prototype.prepareFrame = Rt.prototype.prepareFrame, Yt.prototype.renderInnerContent = function() {
                var t = this.canvasContext;
                t.fillStyle = this.data.sc, t.fillRect(0, 0, this.data.sw, this.data.sh)
              }, j([Lt, St, jt, Dt, Ct, wt, Ot], Gt), Gt.prototype.tHelper = O("canvas").getContext("2d"), Gt.prototype.buildNewText = function() {
                var t = this.textProperty.currentData;
                this.renderedLetters = E(t.l ? t.l.length : 0);
                var e = !1;
                t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
                var s = !1;
                t.sc && (s = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
                var i, a, r = this.globalData.fontManager.getFontByName(t.f),
                  n = t.l,
                  o = this.mHelper;
                this.stroke = s, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, a = t.finalText.length;
                var h, l, p, f, c, m, d, u, g, v, y = this.data.singleShape,
                  _ = t.tr / 1e3 * t.finalSize,
                  b = 0,
                  x = 0,
                  k = !0,
                  P = 0;
                for (i = 0; i < a; i += 1) {
                  for (l = (h = this.globalData.fontManager.getCharData(t.finalText[i], r.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && h.data || {}, o.reset(), y && n[i].n && (b = -_, x += t.yOffset, x += k ? 1 : 0, k = !1), d = (c = l.shapes ? l.shapes[0].it : []).length, o.scale(t.finalSize / 100, t.finalSize / 100), y && this.applyTextPropertiesToMatrix(t, o, n[i].line, b, x), g = E(d), m = 0; m < d; m += 1) {
                    for (f = c[m].ks.k.i.length, u = c[m].ks.k, v = [], p = 1; p < f; p += 1) 1 == p && v.push(o.applyToX(u.v[0][0], u.v[0][1], 0), o.applyToY(u.v[0][0], u.v[0][1], 0)), v.push(o.applyToX(u.o[p - 1][0], u.o[p - 1][1], 0), o.applyToY(u.o[p - 1][0], u.o[p - 1][1], 0), o.applyToX(u.i[p][0], u.i[p][1], 0), o.applyToY(u.i[p][0], u.i[p][1], 0), o.applyToX(u.v[p][0], u.v[p][1], 0), o.applyToY(u.v[p][0], u.v[p][1], 0));
                    v.push(o.applyToX(u.o[p - 1][0], u.o[p - 1][1], 0), o.applyToY(u.o[p - 1][0], u.o[p - 1][1], 0), o.applyToX(u.i[0][0], u.i[0][1], 0), o.applyToY(u.i[0][0], u.i[0][1], 0), o.applyToX(u.v[0][0], u.v[0][1], 0), o.applyToY(u.v[0][0], u.v[0][1], 0)), g[m] = v
                  }
                  y && (b += n[i].l, b += _), this.textSpans[P] ? this.textSpans[P].elem = g : this.textSpans[P] = {
                    elem: g
                  }, P += 1
                }
              }, Gt.prototype.renderInnerContent = function() {
                var t, e, s, i, a, r, n = this.canvasContext;
                this.finalTransform.mat.props, n.font = this.values.fValue, n.lineCap = "butt", n.lineJoin = "miter", n.miterLimit = 4, this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
                var o, h = this.textAnimator.renderedLetters,
                  l = this.textProperty.currentData.l;
                e = l.length;
                var p, f, c = null,
                  m = null,
                  d = null;
                for (t = 0; t < e; t += 1)
                  if (!l[t].n) {
                    if ((o = h[t]) && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(o.p), this.globalData.renderer.ctxOpacity(o.o)), this.fill) {
                      for (o && o.fc ? c !== o.fc && (c = o.fc, n.fillStyle = o.fc) : c !== this.values.fill && (c = this.values.fill, n.fillStyle = this.values.fill), i = (p = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), s = 0; s < i; s += 1)
                        for (r = (f = p[s]).length, this.globalData.canvasContext.moveTo(f[0], f[1]), a = 2; a < r; a += 6) this.globalData.canvasContext.bezierCurveTo(f[a], f[a + 1], f[a + 2], f[a + 3], f[a + 4], f[a + 5]);
                      this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill()
                    }
                    if (this.stroke) {
                      for (o && o.sw ? d !== o.sw && (d = o.sw, n.lineWidth = o.sw) : d !== this.values.sWidth && (d = this.values.sWidth, n.lineWidth = this.values.sWidth), o && o.sc ? m !== o.sc && (m = o.sc, n.strokeStyle = o.sc) : m !== this.values.stroke && (m = this.values.stroke, n.strokeStyle = this.values.stroke), i = (p = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), s = 0; s < i; s += 1)
                        for (r = (f = p[s]).length, this.globalData.canvasContext.moveTo(f[0], f[1]), a = 2; a < r; a += 6) this.globalData.canvasContext.bezierCurveTo(f[a], f[a + 1], f[a + 2], f[a + 3], f[a + 4], f[a + 5]);
                      this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke()
                    }
                    o && this.globalData.renderer.restore()
                  }
              }, Ut.prototype.renderFrame = function() {};
              var Jt = function() {
                  var e = {},
                    s = [],
                    i = 0,
                    a = 0,
                    r = 0,
                    n = !0,
                    o = !1;

                  function h(t) {
                    for (var e = 0, i = t.target; e < a;) s[e].animation === i && (s.splice(e, 1), e -= 1, a -= 1, i.isPaused || f()), e += 1
                  }

                  function l(t, e) {
                    if (!t) return null;
                    for (var i = 0; i < a;) {
                      if (s[i].elem == t && null !== s[i].elem) return s[i].animation;
                      i += 1
                    }
                    var r = new he;
                    return c(r, t), r.setData(t, e), r
                  }

                  function p() {
                    r += 1, g()
                  }

                  function f() {
                    r -= 1, te && (Zt[Kt] && Zt.splice(Kt, 1), Qt[Kt] && Qt.splice(Kt, 1), $t[Kt] && $t.splice(Kt, 1), s[Kt] && h({
                      target: s[Kt].animation
                    }))
                  }

                  function c(t, e) {
                    t.addEventListener("destroy", h), t.addEventListener("_active", p), t.addEventListener("_idle", f), s.push({
                      elem: e,
                      animation: t
                    }), a += 1
                  }

                  function d(e) {
                    for (var h = 0; h < Zt.length; h += 1) Zt[h].clearRect(0, 0, Qt[h], $t[h]);
                    var l, p = e - i;
                    for (l = 0; l < a; l += 1) Kt = l, s[l] && s[l].animation && s[l].animation.advanceTime(p);
                    i = e, s && 0 !== s.length && r && !o ? t.requestAnimationFrame(d) : n = !0
                  }

                  function u(e) {
                    i = e, t.requestAnimationFrame(d)
                  }

                  function g() {
                    !o && r && n && (t.requestAnimationFrame(u), n = !1)
                  }
                  return e.registerAnimation = l, e.loadAnimation = function(t) {
                    var e = new he;
                    return c(e, null), e.setParams(t), e
                  }, e.setSpeed = function(t, e) {
                    var i;
                    for (i = 0; i < a; i += 1) s[i].animation.setSpeed(t, e)
                  }, e.setDirection = function(t, e) {
                    var i;
                    for (i = 0; i < a; i += 1) s[i].animation.setDirection(t, e)
                  }, e.play = function(t) {
                    var e;
                    for (e = 0; e < a; e += 1) s[e].animation.play(t)
                  }, e.pause = function(t) {
                    var e;
                    for (e = 0; e < a; e += 1) s[e].animation.pause(t)
                  }, e.stop = function(t) {
                    var e;
                    for (e = 0; e < a; e += 1) s[e].animation.stop(t)
                  }, e.togglePause = function(t) {
                    var e;
                    for (e = 0; e < a; e += 1) s[e].animation.togglePause(t)
                  }, e.searchAnimations = function(t, e) {
                    var s, i = [].concat([].slice.call(m.getElementsByClassName("lottie")), [].slice.call(m.getElementsByClassName("bodymovin"))),
                      a = i.length;
                    for (s = 0; s < a; s += 1) e && i[s].setAttribute("data-bm-type", e), l(i[s], t)
                  }, e.resize = function() {
                    var t;
                    for (t = 0; t < a; t += 1) s[t].animation.resize()
                  }, e.goToAndStop = function(t, e, i) {
                    var r;
                    for (r = 0; r < a; r += 1) s[r].animation.goToAndStop(t, e, i)
                  }, e.destroy = function(t) {
                    var e;
                    for (e = a - 1; e >= 0; e -= 1) s[e].animation.destroy(t)
                  }, e.freeze = function() {
                    o = !0
                  }, e.unfreeze = function() {
                    o = !1, g()
                  }, e.reset = function() {
                    e = {}, s = [], i = 0, a = 0, r = 0, n = !0, o = !1
                  }, e.getRegisteredAnimations = function() {
                    var t, e = s.length,
                      i = [];
                    for (t = 0; t < e; t += 1) i.push(s[t].animation);
                    return i
                  }, e
                }(),
                Kt = 0,
                Zt = [],
                Qt = [],
                $t = [],
                te = !1,
                ee = "default",
                se = !1,
                ie = !1,
                ae = [],
                re = null,
                ne = -1,
                oe = -1,
                he = function() {
                  this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = S(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.subframeEnabled = i, this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = {}, this.imagePreloader = new nt, this.renderAnimationTime = 0, this.renderFrameNum = 0
                };

              function le() {}
              j([L], he), he.prototype.setParams = function(t) {
                te = t.clearAnimation, ee = t.transformPerformance, se = t.setGlobalAlphaError, ie = t.setPreLoad, t.context && (this.context = t.context), (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container), this.renderer = new kt(this, t.rendererSettings), this.renderer.setProjectInterface(this.projectInterface), this.animType = "canvas", "" === t.loop || null === t.loop || (!1 === t.loop ? this.loop = !1 : !0 === t.loop ? this.loop = !0 : this.loop = parseInt(t.loop)), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !t.hasOwnProperty("autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, t.animationData ? this.configAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), ot.load(t.path, this.configAnimation.bind(this), function() {
                  this.trigger("data_failed")
                }.bind(this)))
              }, he.prototype.setData = function(t, e) {
                var s = {
                    wrapper: t,
                    animationData: e ? "object" === l(e) ? e : JSON.parse(e) : null
                  },
                  i = t.attributes;
                s.path = i.getNamedItem("data-animation-path") ? i.getNamedItem("data-animation-path").value : i.getNamedItem("data-bm-path") ? i.getNamedItem("data-bm-path").value : i.getNamedItem("bm-path") ? i.getNamedItem("bm-path").value : "", s.animType = i.getNamedItem("data-anim-type") ? i.getNamedItem("data-anim-type").value : i.getNamedItem("data-bm-type") ? i.getNamedItem("data-bm-type").value : i.getNamedItem("bm-type") ? i.getNamedItem("bm-type").value : i.getNamedItem("data-bm-renderer") ? i.getNamedItem("data-bm-renderer").value : i.getNamedItem("bm-renderer") ? i.getNamedItem("bm-renderer").value : "canvas";
                var a = i.getNamedItem("data-anim-loop") ? i.getNamedItem("data-anim-loop").value : i.getNamedItem("data-bm-loop") ? i.getNamedItem("data-bm-loop").value : i.getNamedItem("bm-loop") ? i.getNamedItem("bm-loop").value : "";
                "" === a || (s.loop = "false" !== a && ("true" === a || parseInt(a)));
                var r = i.getNamedItem("data-anim-autoplay") ? i.getNamedItem("data-anim-autoplay").value : i.getNamedItem("data-bm-autoplay") ? i.getNamedItem("data-bm-autoplay").value : !i.getNamedItem("bm-autoplay") || i.getNamedItem("bm-autoplay").value;
                s.autoplay = "false" !== r, s.name = i.getNamedItem("data-name") ? i.getNamedItem("data-name").value : i.getNamedItem("data-bm-name") ? i.getNamedItem("data-bm-name").value : i.getNamedItem("bm-name") ? i.getNamedItem("bm-name").value : "", "false" === (i.getNamedItem("data-anim-prerender") ? i.getNamedItem("data-anim-prerender").value : i.getNamedItem("data-bm-prerender") ? i.getNamedItem("data-bm-prerender").value : i.getNamedItem("bm-prerender") ? i.getNamedItem("bm-prerender").value : "") && (s.prerender = !1), this.setParams(s)
              }, he.prototype.includeLayers = function(t) {
                t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
                var e, s, i = this.animationData.layers,
                  a = i.length,
                  r = t.layers,
                  n = r.length;
                for (s = 0; s < n; s += 1)
                  for (e = 0; e < a;) {
                    if (i[e].id == r[s].id) {
                      i[e] = r[s];
                      break
                    }
                    e += 1
                  }
                if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
                  for (a = t.assets.length, e = 0; e < a; e += 1) this.animationData.assets.push(t.assets[e]);
                this.animationData.__complete = !1, B.completeData(this.animationData, this.renderer.globalData.fontManager), this.renderer.includeLayers(t.layers), this.loadNextSegment()
              }, he.prototype.loadNextSegment = function() {
                var t = this.animationData.segments;
                if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames);
                var e = t.shift();
                this.timeCompleted = e.time * this.frameRate;
                var s = this.path + this.fileName + "_" + this.segmentPos + ".json";
                this.segmentPos += 1, ot.load(s, this.includeLayers.bind(this), function() {
                  this.trigger("data_failed")
                }.bind(this))
              }, he.prototype.loadSegments = function() {
                this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
              }, he.prototype.imagesLoaded = function() {
                this.trigger("loaded_images"), this.checkLoaded()
              }, he.prototype.preloadImages = function() {
                this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
              }, he.prototype.configAnimation = function(t) {
                if (this.renderer) try {
                  this.animationData = t, this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.firstFrame = Math.round(this.animationData.ip), this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), Zt.push(this.renderer.canvasContext), Qt.push(this.renderer.transformCanvas.w), $t.push(this.renderer.transformCanvas.h)
                } catch (t) {
                  console.error("triggerConfigError", t), this.triggerConfigError(t)
                }
              }, he.prototype.waitForFontsLoaded = function() {
                this.renderer && (this.renderer.globalData.fontManager.loaded() ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
              }, he.prototype.checkLoaded = function() {
                this.isLoaded || !this.renderer.globalData.fontManager.loaded() || !this.imagePreloader.loaded() && "canvas" === this.renderer.rendererType || (this.isLoaded = !0, B.completeData(this.animationData, this.renderer.globalData.fontManager), this.renderer.initItems(), setTimeout(function() {
                  this.trigger("DOMLoaded")
                }.bind(this), 0), ie || this.gotoFrame(), this.autoplay && this.play())
              }, he.prototype.resize = function() {
                this.renderer.updateContainerSize()
              }, he.prototype.setSubframe = function(t) {
                this.subframeEnabled = !!t
              }, he.prototype.gotoFrame = function() {
                this.currentFrame = this.subframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), se ? this.currentFrame < this.timeCompleted - 3 && (this.trigger("enterFrame"), this.renderFrame()) : (this.trigger("enterFrame"), this.renderFrame())
              }, he.prototype.renderFrame = function() {
                if (!1 !== this.isLoaded) try {
                  this.renderer.renderFrame(this.currentFrame + this.firstFrame)
                } catch (t) {
                  this.triggerRenderFrameError(t)
                }
              }, he.prototype.play = function(t) {
                t && this.name != t || !0 === this.isPaused && (this.isPaused = !1, this._idle && (this._idle = !1, this.trigger("_active")))
              }, he.prototype.pause = function(t) {
                t && this.name != t || !1 === this.isPaused && (this.isPaused = !0, this._idle = !0, this.trigger("_idle"))
              }, he.prototype.togglePause = function(t) {
                t && this.name != t || (!0 === this.isPaused ? this.play() : this.pause())
              }, he.prototype.stop = function(t) {
                t && this.name != t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
              }, he.prototype.goToAndStop = function(t, e, s) {
                s && this.name != s || (e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier), this.pause())
              }, he.prototype.goToAndPlay = function(t, e, s) {
                this.goToAndStop(t, e, s), this.play()
              }, he.prototype.advanceTime = function(t) {
                if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                  this.renderAnimationTime += Math.max(t, 16), this.renderFrameNum += 1;
                  var e = this.currentRawFrame + t * this.frameModifier,
                    s = !1;
                  if (e >= this.totalFrames - 1 && this.frameModifier > 0)
                    if (this.loop && this.playCount !== this.loop)
                      if (e >= this.totalFrames) {
                        if (this.playCount += 1, !this.checkSegments(e % this.totalFrames)) {
                          var i = Math.round(this.renderFrameNum / this.renderAnimationTime * 1e3);
                          this.renderAnimationTime = 0, this.renderFrameNum = 0, this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete", i)
                        }
                      } else this.setCurrentRawFrameValue(e);
                  else this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (s = !0, e = this.totalFrames - 1);
                  else e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (s = !0, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e);
                  s && (i = Math.round(this.renderFrameNum / this.renderAnimationTime * 1e3), this.renderAnimationTime = 0, this.renderFrameNum = 0, this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete", i))
                }
              }, he.prototype.adjustSegment = function(t, e) {
                this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.timeCompleted = this.totalFrames = t[0] - t[1], this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.timeCompleted = this.totalFrames = t[1] - t[0], this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart")
              }, he.prototype.setSegment = function(t, e) {
                var s = -1;
                this.isPaused && (this.currentRawFrame + this.firstFrame < t ? s = t : this.currentRawFrame + this.firstFrame > e && (s = e - t)), this.firstFrame = t, this.timeCompleted = this.totalFrames = e - t, -1 !== s && this.goToAndStop(s, !0)
              }, he.prototype.playSegments = function(t, e) {
                if (e && (this.segments.length = 0), "object" === l(t[0])) {
                  var s, i = t.length;
                  for (s = 0; s < i; s += 1)
                    if (t[s][2] && "object" === l(t[s][2])) {
                      var a;
                      a = t[s][2].duration && t[s][2].duration > 0 ? Math.floor(t[s][2].duration * this.frameRate / Math.abs(t[s][1] - t[s][0])) : t[s][2].times && t[s][2].times > 0 ? Math.floor(t[s][2].times) : 1;
                      for (var r = 0; r < a; r++) this.segments.push(t[s])
                    } else this.segments.push(t[s])
                } else this.segments.push(t);
                this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
              }, he.prototype.resetSegments = function(t) {
                this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0)
              }, he.prototype.checkSegments = function(t) {
                return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0)
              }, he.prototype.destroy = function(t) {
                t && this.name != t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = this.onLoopComplete = this.onComplete = this.onSegmentStart = this.onDestroy = null, this.renderer = null)
              }, he.prototype.setCurrentRawFrameValue = function(t) {
                this.currentRawFrame = t, this.gotoFrame()
              }, he.prototype.setSpeed = function(t) {
                this.playSpeed = t, this.updaFrameModifier()
              }, he.prototype.setDirection = function(t) {
                this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier()
              }, he.prototype.updaFrameModifier = function() {
                this.frameModifier = this.frameMult * this.playSpeed * this.playDirection
              }, he.prototype.getPath = function() {
                return this.path
              }, he.prototype.getAssetsPath = function(t) {
                var e = "";
                if (t.e) e = t.p;
                else if (this.assetsPath) {
                  var s = t.p; - 1 !== s.indexOf("images/") && (s = s.split("/")[1]), e = this.assetsPath + s
                } else e = t.p.includes("base64") ? "" : this.path, e += t.u ? t.u : "", e += t.p;
                return e
              }, he.prototype.getAssetData = function(t) {
                for (var e = 0, s = this.assets.length; e < s;) {
                  if (t == this.assets[e].id) return this.assets[e];
                  e += 1
                }
              }, he.prototype.hide = function() {
                this.renderer.hide()
              }, he.prototype.show = function() {
                this.renderer.show()
              }, he.prototype.getDuration = function(t) {
                return t ? this.totalFrames : this.totalFrames / this.frameRate
              }, he.prototype.trigger = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                if (this._cbs && this._cbs[t]) switch (t) {
                  case "enterFrame":
                    this.triggerEvent(t, new v(t, this.currentFrame, this.totalFrames, this.frameModifier));
                    break;
                  case "loopComplete":
                    this.triggerEvent(t, new _(t, this.loop, this.playCount, this.frameMult, e));
                    break;
                  case "complete":
                    this.triggerEvent(t, new y(t, this.frameMult, e));
                    break;
                  case "segmentStart":
                    this.triggerEvent(t, new b(t, this.firstFrame, this.totalFrames));
                    break;
                  case "destroy":
                    this.triggerEvent(t, new x(t, this));
                    break;
                  default:
                    this.triggerEvent(t)
                }
                "DOMLoaded" === t && this.onDOMLoaded && this.onDOMLoaded.call(this, this), "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new v(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new _(t, this.loop, this.playCount, this.frameMult, e)), "complete" === t && this.onComplete && this.onComplete.call(this, new y(t, this.frameMult, e)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new b(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new x(t, this))
              }, he.prototype.triggerRenderFrameError = function(t) {
                var e = new P(t, this.currentFrame);
                this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
              }, he.prototype.triggerConfigError = function(t) {
                var e = new D(t, this.currentFrame);
                this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
              };
              var pe = {};

              function fe() {
                Jt.searchAnimations()
              }
              pe.addTimeline = function(t, e, s) {
                this.animationList = t, this.delay = e
              }, pe.playTimeline = function() {
                for (var t = 1e3 * this.delay, e = this.animationList, s = 0; s < e.length; s++) ! function(s) {
                  setTimeout((function() {
                    e[s].goToAndPlay(0)
                  }), t * s)
                }(s)
              }, pe.play = Jt.play, pe.pause = Jt.pause, pe.setLocationHref = function(t) {
                e = t
              }, pe.togglePause = Jt.togglePause, pe.setSpeed = Jt.setSpeed, pe.setDirection = Jt.setDirection, pe.stop = Jt.stop, pe.searchAnimations = fe, pe.registerAnimation = Jt.registerAnimation, pe.loadAnimation = function(t) {
                if (["wrapper", "container"].forEach((function(e) {
                    if (e in t) throw new Error("Not support '".concat(e, "' parameter in miniprogram version of lottie."))
                  })), "string" == typeof t.path && !/^https?\:\/\//.test(t.path)) throw new Error("The 'path' is only support http protocol.");
                if (!t.rendererSettings || !t.rendererSettings.context) throw new Error("Parameter 'rendererSettings.context' should be a CanvasRenderingContext2D.");
                return t.renderer = "canvas", Jt.loadAnimation(t)
              }, pe.setSubframeRendering = function(t) {
                i = t
              }, pe.resize = Jt.resize, pe.goToAndStop = Jt.goToAndStop, pe.destroy = Jt.destroy, pe.setQuality = function(t) {
                if ("string" == typeof t) switch (t) {
                  case "high":
                    c = 200;
                    break;
                  case "medium":
                    c = 50;
                    break;
                  case "low":
                    c = 10
                } else !isNaN(t) && t > 1 && (c = t);
                g(!(c >= 50))
              }, pe.inBrowser = function() {
                return void 0 !== d
              }, pe.installPlugin = function(t) {
                "events" === t && (a = ["touchstart", "touchmove", "touchend", "touchcancel", "longtap"])
              }, pe.freeze = Jt.freeze, pe.unfreeze = Jt.unfreeze, pe.reset = Jt.reset, pe.setup = h.b, pe.addEventListener = function(t, e, s) {
                if (a && a.includes(t)) {
                  ne = Math.floor(3 * +e.x), oe = Math.floor(3 * +e.y);
                  var i = setInterval((function() {
                    -1 === ne && -1 === oe && (clearInterval(i), s(re))
                  }), 16)
                }
              }, pe.getRegisteredAnimations = Jt.getRegisteredAnimations, pe.__getFactory = function(t) {
                switch (t) {
                  case "propertyFactory":
                    return X;
                  case "shapePropertyFactory":
                    return K;
                  case "matrix":
                    return V
                }
              }, pe.version = "5.5.9";
              var ce = setInterval((function() {
                "complete" === m.readyState && (clearInterval(ce), fe())
              }), 100);
              return pe
            })), e.default = c.lottie
          }.call(this, s(4)(t))
      }, function(t, e) {
        t.exports = function(t) {
          if (!t.webpackPolyfill) {
            var e = Object.create(t);
            e.children || (e.children = []), Object.defineProperty(e, "loaded", {
              enumerable: !0,
              get: function() {
                return e.l
              }
            }), Object.defineProperty(e, "id", {
              enumerable: !0,
              get: function() {
                return e.i
              }
            }), Object.defineProperty(e, "exports", {
              enumerable: !0
            }), e.webpackPolyfill = 1
          }
          return e
        }
      }]))
    }
  }
};
