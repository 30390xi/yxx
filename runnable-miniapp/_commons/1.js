module.exports = {
  ids: [1],
  modules: [function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
      return r
    })), n.d(t, "d", (function() {
      return o
    })), n.d(t, "e", (function() {
      return c
    })), n.d(t, "f", (function() {
      return i
    })), n.d(t, "g", (function() {
      return a
    })), n.d(t, "h", (function() {
      return u
    })), n.d(t, "b", (function() {
      return s
    })), n.d(t, "c", (function() {
      return f
    }));
    var r = "https://mp.weixin.qq.com",
      o = "https://oa.m.tencent.com",
      c = {
        API_REQUEST_FAIL: -1024,
        REQUEST_TIMEOUT: -1025,
        CGI_DATA_ERROR: -1026,
        REQUEST_NETWORK_FAIL: -1027,
        API_LOGIN_FAIL: -1028,
        CGI_AUTH_FAILED: 3,
        CGI_AUTH_FAILED_23: 23,
        SESSION_EXPIRE: 200003,
        PASS_TICKET_AUTH_FAILED: 1200,
        CGI_AUTH_FAILED_1201: 1201,
        CGI_AUTH_FAILED_1202: 1202
      },
      i = {
        SESSION: "app-session",
        SYSTEM_INFO: "system-info",
        GEO: "geo-location",
        GEO_CITY: "geo-city",
        CGI: "CGI:",
        TIMESTAMP: "timestamp"
      },
      a = "X-WEAPP-BIZ-VERSION",
      u = "X-WECHAT-UIN",
      s = "CONTENT-TYPE",
      f = {
        FORM: "application/x-www-form-urlencoded",
        JSON: "application/json"
      }
  }, function(e, t, n) {
    "use strict";
    n.d(t, "d", (function() {
      return C
    })), n.d(t, "b", (function() {
      return Z
    })), n.d(t, "f", (function() {
      return re
    })), n.d(t, "c", (function() {
      return Y
    })), n.d(t, "h", (function() {
      return de
    })), n.d(t, "i", (function() {
      return le
    })), n.d(t, "a", (function() {
      return ye
    })), n.d(t, "e", (function() {
      return ve
    })), n.d(t, "g", (function() {
      return we
    }));
    var r = n(3),
      o = n.n(r),
      c = n(8),
      i = n.n(c),
      a = n(11),
      u = n(4),
      s = n(7),
      f = n(9),
      l = n(13),
      p = n(12),
      d = n(2),
      g = n(10),
      y = n(14);

    function v(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, r)
      }
      return n
    }

    function O(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? v(Object(n), !0).forEach((function(t) {
          o()(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
      }
      return e
    }
    var b = 3e3,
      m = null,
      w = !1,
      h = [],
      P = "",
      j = null,
      S = null,
      I = {},
      x = null,
      _ = "",
      E = null,
      k = null,
      T = null,
      A = null,
      D = null,
      N = function(e, t) {
        return void 0 === t ? e : t
      },
      C = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        P = N(P, e.uin), b = N(b, e.reportDelay), m = N(m, e.sample), j = N(j, e.tableId), S = N(S, e.monitorId), void 0 !== e.monitor && (I = O(O({}, I), e.monitor)), x = N(x, e.badjsId), _ = N(_, e.streamInterface), T = N(T, e.serviceType), E = N(E, e.retCodeModule), k = N(k, e.retCodeDomain), A = "mmbizintp:".concat(_), void 0 !== e.uin || P || (P = u.b.uin || u.b.openId || ""), "function" == typeof e.monitorFunction && (D = e.monitorFunction)
      },
      R = function(e, t) {
        var n = 0,
          r = h.length;
        if (t = t || 2e3, h[0]) {
          for (var o = 0; o < r; o++) {
            var c = h.shift();
            c && (c.isTicking = !1, c((function() {
              ++n === r && e && !e.isCalled && (e.isCalled = !0, e())
            })))
          }
          e && setTimeout((function() {
            e.isCalled || (e.isCalled = !0, e())
          }), t)
        } else e && e();
        w = !1
      },
      F = function(e) {
        e.isTicking || (e.isTicking = !0, h.push(e)), w || (setTimeout(R, b), w = !0)
      },
      L = function() {
        return d.a.plugin ? Object(g.e)() : s.a.codeType ? f.a.login().then((function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          console.debug("wx.login res:", e);
          var t = e.code;
          return t ? Promise.resolve(t) : Promise.reject(e)
        })) : Promise.reject(new l.a(y.a.NO_CODE_TYPE))
      },
      M = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (e.url) return m > 0 && 1 !== m && -1 === ["idkey", "monitor"].indexOf(e.type) && Math.random() > m ? Promise.resolve() : new Promise((function(t, n) {
          var r = e.method || "GET",
            o = O({}, e.data);

          function c(c) {
            c && c.pass_ticket ? e.url = Object(p.g)(e.url, Object(p.e)(c)) : c ? e.url = Object(p.g)(e.url, "codetype=".concat(s.a.codeType, "&code=").concat(c)) : d.a.plugin ? e.url = Object(p.g)(e.url, "pass_ticket=".concat(u.b.pass_ticket || "")) : e.url = Object(p.g)(e.url, "wxa_session=".concat(u.b.wxaSession || "")), wx.request({
              method: r,
              url: e.url,
              data: o,
              success: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  r = e.data || {},
                  o = r.base_resp,
                  c = void 0 === o ? {} : o,
                  i = c.ret;
                void 0 === i || 0 === i ? (Object(u.e)(Object(a.camelizeKeys)(c)), t(e)) : n(e)
              },
              fail: function(e) {
                n(e)
              }
            })
          }
          "GET" === r && (o._ts = Date.now()), Object(u.d)() ? c() : L().then((function(e) {
            c(e)
          })).catch((function(e) {
            console.error("report send error", e), c()
          }))
        }));
        console.warn("request url can't be empty!")
      },
      G = n(0),
      U = "".concat(G.a, "/intp/ossattr"),
      V = {};

    function J(e) {
      var t = Object.keys(V);
      t && t.length ? t.forEach((function(t) {
        if (V[t] && V[t].length) {
          var n = V[t].join(",");
          V[t] = [], M({
            type: "idkey",
            url: U,
            data: {
              action: "oss",
              f: "json",
              id: t,
              key: n
            }
          }, e)
        }
      })) : e && e()
    }
    var K = function(e, t, n) {
        if (void 0 === t || "boolean" == typeof t) {
          if (!j) return void console.warn("必须初始化ID或者显性传入");
          n = t, t = e, e = j
        }
        if (n) return M({
          type: "idkey",
          url: U,
          data: {
            action: "oss",
            f: "json",
            id: e,
            key: t
          }
        });
        V[e] ? V[e].push(t) : V[e] = [t], F(J)
      },
      z = [],
      Y = function(e, t, n) {
        if (x || n) {
          z.push({
            msg: e,
            level: t || 4
          });
          try {
            ! function(e) {
              if (z.length) {
                var t = {
                  id: e || x,
                  uin: P,
                  from: ""
                };
                for (var n in z)
                  if (z.hasOwnProperty(n)) {
                    var r = z[n];
                    t["msg[" + n + "]"] = r.msg, t["level[" + n + "]"] = r.level || 4
                  } M({
                  type: "badjs",
                  url: "https://badjs.weixinbridge.com/badjs",
                  data: t
                }), z = []
              }
            }(n || x)
          } catch (e) {
            console.error(e)
          }
        } else console.warn("必须初始化ID或者显性传入")
      },
      q = n(5);

    function H(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, r)
      }
      return n
    }

    function W(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? H(Object(n), !0).forEach((function(t) {
          o()(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : H(Object(n)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
      }
      return e
    }
    var B = "".concat(G.a, "/intp/mmdata?action=reportmultimon"),
      Q = null,
      X = [],
      Z = {
        appLaunch: "app launch",
        pageLoad: function(e) {
          return "page ".concat(e, " load")
        },
        pagePV: function(e) {
          return "page ".concat(e, " pv")
        },
        pageRender: function(e) {
          return "page ".concat(e, " render")
        },
        apiTime: function(e) {
          return "api time ".concat(e)
        },
        apiSuccess: function(e) {
          return "api success ".concat(e)
        },
        apiFail: function(e) {
          return "api fail ".concat(e)
        },
        apiCancel: function(e) {
          return "api cancel ".concat(e)
        },
        cgiTime: function(e) {
          return "cgi time ".concat(e)
        },
        cgiSuccess: function(e) {
          return "cgi success ".concat(e)
        },
        cgiFail: function(e) {
          return "cgi fail ".concat(e)
        },
        cgiTimeout: function(e) {
          return "cgi timeout ".concat(e)
        }
      },
      $ = function(e) {
        "unknown" === Q.network && (Q.network = d.a.networkType);
        var t = W(W(W({}, Q), I), e);
        return void 0 !== t.ret && (t.ret = String(t.ret)), t.msg && "object" === i()(t.msg) && (t.msg = JSON.stringify(t.msg)), t
      },
      ee = function(e) {
        var t = {
          id: e.id
        };
        delete e.id, "unknown" === Q.network && (Q.network = d.a.networkType);
        var n = W(W(W({}, Q), I), e);
        return void 0 !== n.ret && (n.ret = String(n.ret)), n.msg && "object" === i()(n.msg) && (n.msg = JSON.stringify(n.msg)), t.item = Object.keys(n).map((function(e) {
          var t = n[e],
            r = {
              key: Object(a.decamelize)(e),
              value: n[e]
            };
          return "string" == typeof t ? r.value = t : "number" == typeof t ? (r.value = t, r.valueType = Number.isInteger(t) ? 1 : 2) : r.value = String(t), r
        })), t
      },
      te = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        if (D) return D(e.map((function(e) {
          return $(e)
        }))), Promise.resolve();
        if (!Object(u.d)()) {
          K(110548, 85);
          var t = "monitor no session";
          console.debug(t), Math.random() < .01 && Y("[".concat(t, "]").concat(JSON.stringify(e.slice(0, 4))))
        }
        return M({
          type: "monitor",
          method: "POST",
          url: B,
          data: {
            multi_mon_list: e.map((function(e) {
              return ee(e)
            }))
          }
        }).catch((function(t) {
          console.error("多维监控上报失败！", t, e)
        })), Promise.resolve()
      },
      ne = function() {
        Object(q.f)(X) || te(X).then((function() {
          X = []
        })).catch((function(e) {
          console.error("monitor reportQueue send fail", e)
        }))
      },
      re = function(e, t, n) {
        e ? (void 0 === t ? t = {} : "boolean" == typeof t && (n = t, t = {}), S || t.id || D ? (!t.id && (t.id = S), t.action = e, Q || (Q = {
          wechatVersion: d.a.version || "",
          libVersion: d.a.SDKVersion || "",
          weappVersion: d.a.weappVersion || s.a.weappVersion || "",
          system: d.a.platform || "unknown",
          systemVersion: (d.a.system || "").replace(/\w+ /, ""),
          brand: d.a.brand || "",
          model: d.a.model || "",
          network: d.a.networkType || "unknown",
          scene: d.a.scene || 0,
          bizuin: d.a.referrerInfo && d.a.referrerInfo.appId || ""
        }), n ? te([t]) : (X.push(t), F(ne))) : console.warn("no monitor id and monitor function!")) : console.warn("no action!")
      };

    function oe(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, r)
      }
      return n
    }

    function ce(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? oe(Object(n), !0).forEach((function(t) {
          o()(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : oe(Object(n)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
      }
      return e
    }
    var ie = [],
      ae = "".concat(G.a, "/intp/mmdata?action=reportclick"),
      ue = function(e) {
        Object(q.f)(ie) || fe(ie).then((function() {
          ie = []
        })).catch((function(e) {
          console.error("stream reportQueue send fail", e)
        }))
      },
      se = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return Object(a.decamelizeKeys)(ce({
          interfaceName: "".concat(_),
          serviceType: T,
          source: 2
        }, e))
      },
      fe = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        if (!T || !_) return console.warn("clickstream send fail, ServiceType and StreamInterface is required"), Promise.resolve();
        if (!Object(u.d)()) {
          K(110548, 86);
          var t = "clickstream no session";
          console.debug(t), Math.random() < .01 && Y("[".concat(t, "]").concat(JSON.stringify(e.slice(0, 4))))
        }
        return M({
          type: "stream",
          url: ae,
          method: "POST",
          data: {
            clickstream_list: e.map((function(e) {
              return se(e)
            }))
          }
        }).catch((function(e) {
          console.error("点击流上报失败！", e)
        })), Promise.resolve()
      },
      le = function(e, t) {
        if (e) {
          "string" == typeof e && (e = {
            action: e
          }), void 0 !== e.errCode && (e.errcode = String(e.errCode));
          try {
            var n = ce({}, function(e) {
              if (!e.extParam) return {};
              var t;
              if ("object" === i()(e.extParam) && "[object Array]" !== Object.prototype.toString.call(e.extParam)) return e.extParam;
              if ("string" == typeof e.extParam) try {
                t = JSON.parse(e.extParam)
              } catch (n) {
                console.warn("parse data.extParam fail", n), t = {
                  content: e.extParam
                }
              } else t = {
                content: e.extParam
              };
              return t
            }(e));
            n.feOccurTime = Date.now(), n.severOccurTime = Object(q.c)(), e.extParam = JSON.stringify(n)
          } catch (e) {
            console.error(e)
          }
          if (t) return fe([e]);
          ie.push(e), F(ue)
        } else console.warn("no data!")
      },
      pe = {},
      de = function(e) {
        e.pid && e.speeds && (!e.speeds.length > 0 && (e.speeds = [e.speeds]), e.speeds.forEach((function(t) {
          return function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = t.sid,
              r = t.time;
            void 0 !== e && void 0 !== n && void 0 !== r && (pe[e] = pe[e] || {}, pe[e][n] = pe[e][n] || [], (r = parseInt(r, 10)) < 0 || n > 20 && pe[e][n].push(r))
          }(e.pid, t)
        })))
      };
    "".concat(G.a, "/wxaintp/report");
    var ge = function() {
        var e = d.a.ios,
          t = d.a.android;
        return e ? 10 : t ? 9 : 0
      },
      ye = {
        ON_ERROR: "on error",
        WEAPP_SDK: "weapp sdk",
        UNHANDLED_REJECTION: "unhandled rejection",
        CODE_ERROR: "code error",
        PAGE_NOT_FOUND: "page not found",
        IMG_FAIL: "img error",
        API_FAIL: "api fail",
        LOGIN_FAIL: "api login fail",
        LOCATION_FAIL: "api location fail",
        GEO_FAIL: "geo fail",
        PAY_FAIL: "api pay fail",
        FACE_FAIL: "api face fail"
      },
      ve = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
          r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        if (A) {
          if (e) try {
            var o = {
              mid: A,
              name: t || ye.CODE_ERROR,
              view: r
            };
            if ("string" == typeof e) o.msg = e, o.key = n;
            else if ("object" === i()(e)) {
              var c = JSON.stringify(e),
                a = e.name,
                u = void 0 === a ? "" : a,
                s = e.message,
                f = void 0 === s ? "" : s;
              o.key = u, o.msg = f, o.stack = c
            }
            Oe(o)
          } catch (e) {
            console.error(e)
          }
        } else console.warn("必须设置mid")
      },
      Oe = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        e.client_version = d.a.version || "", e.device_type = d.a.platform || "", e.browser_id = ge(), e.network_id = d.a.networkType || "", e.uin = P, wx.request({
          method: "POST",
          url: "https://badjs.weixinbridge.com/report",
          data: e,
          header: {
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8"
          },
          success: function() {
            console.log("badjs上报成功")
          },
          fail: function(e) {
            console.log("badjs上报失败")
          }
        })
      };

    function be(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, r)
      }
      return n
    }

    function me(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? be(Object(n), !0).forEach((function(t) {
          o()(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : be(Object(n)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
      }
      return e
    }
    var we = function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 ? arguments[2] : void 0;
      !t.errCode || n && n.ret || ((n = n || {}).ret = t.errCode), !t.costTime || n && n.costTime || ((n = n || {}).costTime = t.costTime), re(e, n), le(me({
        action: e
      }, t))
    }
  }, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
      return c
    })), n.d(t, "b", (function() {
      return i
    })), n(1);
    var r = n(6),
      o = n(0),
      c = {},
      i = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        try {
          var t = Date.now();
          c = wx.getSystemInfoSync();
          var n = Date.now() - t,
            i = wx.getLaunchOptionsSync() || {};
          if (c.scene = i.scene || 0, c.referrerInfo = i.referrerInfo || {}, c.launchOption = i, console.debug("wx.getSystemInfoSync cost:", n, "launchOption", i), "function" == typeof wx.getAccountInfoSync) {
            var u = wx.getAccountInfoSync(),
              s = u || {},
              f = s.miniProgram,
              l = void 0 === f ? {} : f,
              p = s.plugin;
            console.debug(">>>>getAccountInfoSync", u), c.miniProgram = l, p && (c.plugin = p), c.weappVersion = p ? p.version : l.version
          }
          e && (c.weappVersion = e);
          var d = (c.platform || "").toLowerCase();
          c.ios = "ios" === d, c.android = "android" === d, c.model.includes("iPad") && (c.brand = "iPad"), console.debug(">>>>SystemInfo", c), r.a.set(o.f.SYSTEM_INFO, c).catch((function(e) {
            return console.error(e)
          }))
        } catch (e) {
          console.error("wx.getSystemInfoSync:", e)
        }
        return a(), c
      },
      a = function() {
        var e = Date.now();
        wx.getNetworkType({
          success: function(t) {
            var n = Date.now() - e,
              i = t.networkType || "unknown";
            console.log("wx.getNetworkType:", i), console.debug("wx.getNetworkType cost:", n), c.networkType = i, r.a.set(o.f.SYSTEM_INFO, c).catch((function(e) {
              return console.error(e)
            }))
          },
          fail: function(e) {
            console.error("wx.getNetworkType fail:", e)
          }
        })
      }
  }, function(e, t) {
    e.exports = function(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e
    }
  }, function(e, t, n) {
    "use strict";
    n.d(t, "c", (function() {
      return p
    })), n.d(t, "e", (function() {
      return g
    })), n.d(t, "a", (function() {
      return y
    })), n.d(t, "d", (function() {
      return O
    }));
    var r = n(3),
      o = n.n(r),
      c = n(6),
      i = n(0),
      a = n(1),
      u = n(2);

    function s(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, r)
      }
      return n
    }
    var f = {
        wxaSession: "",
        expire: 0,
        openId: "",
        uin: "",
        pass_ticket: "",
        passkey: ""
      },
      l = c.a.getSync(i.f.SESSION) || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? s(Object(n), !0).forEach((function(t) {
            o()(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }({}, f),
      p = function() {
        return {
          pass_ticket: l.pass_ticket,
          passkey: l.passkey
        }
      },
      d = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        l.uin = e.uin || l.uin || "", l.openId = e.openId || l.openId || "", l.pass_ticket = e.pass_ticket || l.pass_ticket || "", l.passkey = e.passkey || l.passkey || "", (e.uin || e.openId) && Object(a.d)({
          uin: e.openId || e.uin
        })
      },
      g = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        u.a.plugin ? d(e) : !e.wxaSession && l.wxaSession || (l.expire = 1e3 * (e.wxaSessionExpire || 0), l.wxaSession = e.wxaSession, l.openId = e.openId || "", l.uin = e.uin || "", (e.uin || e.openId) && Object(a.d)({
          uin: e.openId || e.uin
        }), c.a.setSync(i.f.SESSION, l))
      },
      y = function() {
        u.a.plugin && (l.uin = f.uin, l.openId = f.openId, l.passkey = f.passkey, l.pass_ticket = f.pass_ticket), l.expire = f.expire, l.wxaSession = f.wxaSession, l.openId = f.openId, l.uin = f.uin, console.debug(">>>>clearSession", l), c.a.removeSync(i.f.SESSION)
      },
      v = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return !!(l || e).pass_ticket
      },
      O = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return u.a.plugin ? v(e) : Boolean((l || e).wxaSession && (l || e).expire > Date.now() + 200)
      };
    t.b = l
  }, function(e, t, n) {
    "use strict";
    n.d(t, "i", (function() {
      return i.f
    })), n.d(t, "h", (function() {
      return i.e
    })), n.d(t, "k", (function() {
      return i.g
    })), n.d(t, "g", (function() {
      return i.d
    })), n.d(t, "a", (function() {
      return i.a
    })), n.d(t, "b", (function() {
      return i.b
    })), n.d(t, "d", (function() {
      return i.c
    })), n.d(t, "f", (function() {
      return a
    })), n.d(t, "e", (function() {
      return s
    })), n.d(t, "j", (function() {
      return f
    })), n.d(t, "c", (function() {
      return l
    }));
    var r = n(6),
      o = function() {
        return e = Date.now(), Math.floor(e / 1e3);
        var e
      },
      c = n(0),
      i = n(12),
      a = function(e) {
        return !(e && e.length)
      },
      u = null,
      s = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.baseResp,
          n = void 0 === t ? {} : t,
          r = void 0 === n.ret ? n.retcode : n.ret;
        return void 0 === r && (r = void 0 === e.ret ? e.retcode : e.ret), r
      },
      f = function(e) {
        var t = o();
        r.a.set(c.f.TIMESTAMP, u = {
          server: e,
          client: t
        }).catch((function(e) {
          return console.error(e)
        }))
      },
      l = function() {
        var e = u || r.a.getSync(c.f.TIMESTAMP),
          t = o();
        return e && e.server ? e.server + t - e.client : 0
      }
  }, function(e, t, n) {
    "use strict";
    var r = n(9),
      o = n(1),
      c = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = arguments.length > 2 ? arguments[2] : void 0,
          r = "Storage.".concat(e, " fail"),
          c = "".concat(r, ".").concat(n ? " key=".concat(n) : "", ":");
        console.error(c, t), t.errMsg && t.errMsg.includes("data not found") || (Object(o.f)(r), Object(o.c)("".concat(c, " ").concat(JSON.stringify(t))), Object(o.e)("".concat(c, " ").concat(JSON.stringify(t)), o.a.API_FAIL, r))
      };
    t.a = {
      get: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return r.a.getStorage({
          key: e
        }).then((function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return console.debug("Storage.get key=".concat(e, ":"), t), Promise.resolve(t.data)
        })).catch((function(t) {
          return c("get", t, e), Promise.resolve(null)
        }))
      },
      getSync: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        try {
          return wx.getStorageSync(e)
        } catch (t) {
          return c("getSync", t, e), null
        }
      },
      set: function(e, t) {
        return e && t ? r.a.setStorage({
          key: e,
          data: t
        }).then((function(t) {
          return console.debug("Storage.set key=".concat(e, ":"), t), Promise.resolve(t)
        })).catch((function(t) {
          return c("set", t, e), Promise.resolve(t)
        })) : Promise.resolve()
      },
      setSync: function(e, t) {
        if (e && void 0 !== t) try {
          return wx.setStorageSync(e, t)
        } catch (t) {
          c("setSync", t, e)
        }
      },
      remove: function(e) {
        return e ? r.a.removeStorage({
          key: e
        }).then((function(t) {
          return console.debug("Storage.remove key=".concat(e, ":"), t), Promise.resolve(t)
        }), (function(t) {
          return c("remove", t, e), Promise.resolve(t)
        })) : Promise.resolve()
      },
      removeSync: function(e) {
        if (e) try {
          wx.removeStorageSync(e)
        } catch (t) {
          c("removeSync", t, e)
        }
      },
      getInfo: function() {
        return r.a.getStorageInfo({}).then((function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return console.debug("Storage.getInfo:", e), Promise.resolve(e.data)
        })).catch((function(e) {
          return c("getInfo", e), Promise.reject(e)
        }))
      },
      getInfoSync: function() {
        try {
          return wx.getStorageInfoSync()
        } catch (e) {
          return c("getInfoSync", e), null
        }
      },
      clear: function() {
        return r.a.clearStorage({}).then((function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return console.debug("Storage.clear:", e), Promise.resolve()
        })).catch((function(e) {
          return c("clear", e), Promise.reject(e)
        }))
      },
      clearSync: function() {
        try {
          return wx.clearStorageSync()
        } catch (e) {
          return c("clearSync", e), null
        }
      }
    }
  }, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
      return i
    }));
    var r = n(1),
      o = n(2),
      c = {
        codeType: null,
        weappVersion: null,
        appKey: null
      },
      i = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        Object(o.b)(e.weappVersion), e.codeType || o.a.plugin ? (c.codeType = e.codeType, e.weappVersion && (c.weappVersion = e.weappVersion), e.report && Object(r.d)(e.report), e.appKey && (c.appKey = e.appKey)) : console.warn("必须设置codeType！")
      };
    t.a = c
  }, function(e, t) {
    function n(t) {
      return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? e.exports = n = function(e) {
        return typeof e
      } : e.exports = n = function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, n(t)
    }
    e.exports = n
  }, function(e, t, n) {
    "use strict";
    var r = n(3),
      o = n.n(r),
      c = n(8),
      i = n.n(c),
      a = n(1);

    function u(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, r)
      }
      return n
    }

    function s(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? u(Object(n), !0).forEach((function(t) {
          o()(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
      }
      return e
    }
    var f = {},
      l = ["canIUse", "nextTick", "reportMonitor", "reportAnalytics", "createWorker"],
      p = ["getFileInfo", "setStorage"],
      d = ["getStorage", "getStorageSync"];
    Object.keys(wx).forEach((function(e) {
      l.indexOf(e) > -1 || /^on|off|\w+Sync|create\w+Context|get\w+Manager$/.test(e) ? f[e] = function() {
        try {
          return wx[e].apply(wx, arguments)
        } catch (t) {
          console.error("API ".concat(e, " exception:"), t)
        }
      } : f[e] = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new Promise((function(n, r) {
          var o = null;
          t.success = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; - 1 === p.indexOf(e) && console.debug("API ".concat(e, " success:"), t), ["login"].indexOf(e) > -1 && console.debug("API ".concat(e, " success resolve:"), i()(n), n);
            try {
              n(t)
            } catch (e) {
              throw e
            }
          }, t.fail = function() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; - 1 === e.indexOf("Storage") && console.error("API ".concat(e, " fail:"), n), ["login"].indexOf(e) > -1 && console.debug("API ".concat(e, " fail reject:"), i()(r), r);
            var c = n.errMsg || "";
            if (-1 === d.indexOf(e) && -1 === c.indexOf("cancel")) {
              var u = Date.now() - o,
                f = s({}, t);
              delete f.success, delete f.fail, delete f.complete, Object(a.g)(a.b.apiFail(e), {
                costTime: u,
                errCode: String(n.errCode || -1),
                extParam: JSON.stringify({
                  params: f,
                  res: n
                })
              }, {
                msg: n
              })
            }
            try {
              r(n)
            } catch (t) {
              var l = "[Promise exception]API ".concat(e, " fail reject: ").concat(t);
              throw console.error(l), Object(a.c)(l), Object(a.e)(l, a.a.API_FAIL, e), t
            }
          }, t.complete = function() {
            -1 === p.indexOf(e) && console.debug("API ".concat(e, " cost:"), Date.now() - o)
          }, o = Date.now();
          try {
            wx[e](t)
          } catch (t) {
            console.error("API ".concat(e, " exception:"), t)
          }
        }))
      }
    })), t.a = f
  }, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
      return f
    })), n.d(t, "b", (function() {
      return p
    })), n.d(t, "c", (function() {
      return d
    })), n.d(t, "e", (function() {
      return g
    }));
    var r = n(9),
      o = n(7),
      c = n(0),
      i = n(1),
      a = n(13),
      u = n(14),
      s = n(4),
      f = "",
      l = function(e) {
        var t = c.e.API_LOGIN_FAIL,
          n = e.errMsg || JSON.stringify(e);
        return {
          baseResp: {
            ret: t,
            errMsg: n
          },
          ret: t,
          errMsg: n
        }
      },
      p = function() {
        f = ""
      },
      d = function() {
        f = ""
      };

    function g() {
      return new Promise((function(e, t) {
        wx.operateWXData({
          apiName: "getGetPasskey",
          reqData: {
            action: "webapi_getpasskey",
            content: "{}"
          },
          complete: function(n) {
            console.debug("getGetPasskey resp", n);
            var r = n.err_code,
              o = void 0 === r ? 0 : r,
              c = n.rawData,
              a = 0 === o;
            if (Object(i.g)("getPasskey ".concat(a ? "success" : "fail"), {
                errCode: o,
                extParam: {
                  rawData: c
                }
              }, {
                ret: o,
                msg: c
              }), a) try {
              var u = JSON.parse(c);
              console.debug("getGetPasskey rawData", u), Object(s.e)(u), e(u)
            } catch (e) {
              t({
                ret: -3,
                rawData: c
              })
            } else t({
              ret: o
            })
          }
        })
      }))
    }
    t.d = function() {
      if (!o.a.codeType) return Promise.reject(new a.a(u.a.NO_CODE_TYPE));
      var e = function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          console.error(e, t), Object(i.g)(e, {
            extParam: {
              res: t
            }
          }), Object(i.c)("[".concat(e, "]").concat(JSON.stringify(t))), Object(i.e)(JSON.stringify(t), i.a.LOGIN_FAIL, e, t.errMsg || "")
        },
        t = function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          console.debug("wx.login res:", t);
          var n = t.code;
          return n ? (Object(i.g)(i.b.apiSuccess("login"), {
            extParam: {
              code: n
            }
          }), f = n, Promise.resolve(n)) : (e("wx.login err no code", t), Promise.reject(t))
        };
      return r.a.login().then(t).catch((function() {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return e("wx.login err 1st", n), r.a.login().then(t).catch((function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          throw e("wx.login err 2nd", t), l(t)
        }))
      }))
    }
  }, function(e, t, n) {
    var r, o, c, i, a, u, s, f, l, p, d, g, y, v, O;
    c = function(e, t, n) {
      if (!l(t) || d(t) || g(t) || y(t) || f(t)) return t;
      var r, o = 0,
        i = 0;
      if (p(t))
        for (r = [], i = t.length; o < i; o++) r.push(c(e, t[o], n));
      else
        for (var a in r = {}, t) Object.prototype.hasOwnProperty.call(t, a) && (r[e(a, n)] = c(e, t[a], n));
      return r
    }, i = function(e) {
      return v(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, (function(e, t) {
        return t ? t.toUpperCase() : ""
      }))).substr(0, 1).toLowerCase() + e.substr(1)
    }, a = function(e) {
      var t = i(e);
      return t.substr(0, 1).toUpperCase() + t.substr(1)
    }, u = function(e, t) {
      return function(e, t) {
        var n = (t = t || {}).separator || "_",
          r = t.split || /(?=[A-Z])/;
        return e.split(r).join(n)
      }(e, t).toLowerCase()
    }, s = Object.prototype.toString, f = function(e) {
      return "function" == typeof e
    }, l = function(e) {
      return e === Object(e)
    }, p = function(e) {
      return "[object Array]" == s.call(e)
    }, d = function(e) {
      return "[object Date]" == s.call(e)
    }, g = function(e) {
      return "[object RegExp]" == s.call(e)
    }, y = function(e) {
      return "[object Boolean]" == s.call(e)
    }, v = function(e) {
      return (e -= 0) == e
    }, O = function(e, t) {
      var n = t && "process" in t ? t.process : t;
      return "function" != typeof n ? e : function(t, r) {
        return n(t, e, r)
      }
    }, void 0 === (o = "function" == typeof(r = {
      camelize: i,
      decamelize: u,
      pascalize: a,
      depascalize: u,
      camelizeKeys: function(e, t) {
        return c(O(i, t), e)
      },
      decamelizeKeys: function(e, t) {
        return c(O(u, t), e, t)
      },
      pascalizeKeys: function(e, t) {
        return c(O(a, t), e)
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments)
      }
    }) ? r.call(t, n, t, e) : r) || (e.exports = o)
  }, function(e, t, n) {
    "use strict";
    n.d(t, "f", (function() {
      return u
    })), n.d(t, "e", (function() {
      return s
    })), n.d(t, "g", (function() {
      return f
    })), n.d(t, "d", (function() {
      return p
    })), n.d(t, "a", (function() {
      return d
    })), n.d(t, "b", (function() {
      return g
    })), n.d(t, "c", (function() {
      return y
    }));
    var r = n(3),
      o = n.n(r),
      c = n(0);

    function i(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, r)
      }
      return n
    }

    function a(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? i(Object(n), !0).forEach((function(t) {
          o()(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
      }
      return e
    }
    var u = function(e) {
        return e ? e.split("&").reduce((function(e, t) {
          var n = t.split("=");
          return e[n[0]] = n[1], e
        }), {}) : {}
      },
      s = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return Object.keys(e).reduce((function(t, n) {
          return t + "".concat(t ? "&" : "").concat(n, "=").concat(encodeURIComponent(e[n]))
        }), "")
      },
      f = function(e, t) {
        return "".concat(e).concat(e.includes("?") ? "&" : "?").concat(t)
      },
      l = function(e) {
        return /^\/[^\/].*/.test(e)
      },
      p = function(e) {
        return l || /^https:\/\/mp\.weixin\.qq\.com/.test(e)
      },
      d = function(e) {
        return l(e) ? "".concat(c.a).concat(e) : e
      },
      g = function(e, t) {
        return p(e) ? "".concat(c.d, "/an:").concat(t).concat(e) : e
      },
      y = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        p(e) && (e = e.replace(/\/\w+/, "")), e.includes("?");
        var n = u(e.includes("?") ? e.split("?")[1] : ""),
          r = a(a({}, n), t);
        return "".concat(e.replace(/\?.*/, "")).concat(r.action ? "?action=".concat(r.action) : "")
      }
  }, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
      return g
    }));
    var r = n(15),
      o = n.n(r),
      c = n(16),
      i = n.n(c),
      a = n(24),
      u = n.n(a),
      s = n(25),
      f = n.n(s),
      l = n(17),
      p = n.n(l),
      d = n(26),
      g = function(e) {
        u()(n, e);
        var t = function(e) {
          var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (e) {
              return !1
            }
          }();
          return function() {
            var n, r = p()(e);
            if (t) {
              var o = p()(this).constructor;
              n = Reflect.construct(r, arguments, o)
            } else n = r.apply(this, arguments);
            return f()(this, n)
          }
        }(n);

        function n(e) {
          var r;
          return i()(this, n), (r = t.call(this, e.msg)).name = "FEError", r.message = e.msg || "", r.code = e.code || "", r.constructor = n, r.__proto__ = n.prototype, r
        }
        return o()(n)
      }(n.n(d)()(Error))
  }, function(e, t, n) {
    "use strict";
    t.a = {
      NO_CODE_TYPE: {
        code: "E10000",
        msg: "must init codeType"
      },
      API_LOGIN_ERR: {
        code: "E11000",
        msg: "wx.login err"
      },
      CGI_LOGIN_ERR: {
        code: "E11100",
        msg: "cgi login err"
      },
      API_FACE_NO_SUPPORT: {
        code: "E12000",
        msg: "wx.checkIsSupportFacialRecognition fail"
      },
      API_FACE_CANCEL: {
        code: "E12100",
        msg: "wx.startFacialRecognitionVerify cancel"
      },
      API_PAY_CANCEL: {
        code: "E12100",
        msg: "wx.requestPayment cancel"
      },
      API_VERIFY_PASSWORD_CANCEL: {
        code: "E12200",
        msg: "wx.verifyPaymentPassword cancel"
      },
      API_BIND_PAYMENT_CARD_CANCEL: {
        code: "E12300",
        msg: "wx.bindPaymentCard cancel"
      }
    }
  }, function(e, t) {
    function n(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }
    e.exports = function(e, t, r) {
      return t && n(e.prototype, t), r && n(e, r), e
    }
  }, function(e, t) {
    e.exports = function(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
  }, function(e, t) {
    function n(t) {
      return e.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      }, n(t)
    }
    e.exports = n
  }, function(e, t) {
    function n(t, r) {
      return e.exports = n = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
      }, n(t, r)
    }
    e.exports = n
  }, , , , , , function(e, t, n) {
    var r = n(18);
    e.exports = function(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && r(e, t)
    }
  }, function(e, t, n) {
    var r = n(8),
      o = n(39);
    e.exports = function(e, t) {
      return !t || "object" !== r(t) && "function" != typeof t ? o(e) : t
    }
  }, function(e, t, n) {
    var r = n(17),
      o = n(18),
      c = n(40),
      i = n(41);

    function a(t) {
      var n = "function" == typeof Map ? new Map : void 0;
      return e.exports = a = function(e) {
        if (null === e || !c(e)) return e;
        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
        if (void 0 !== n) {
          if (n.has(e)) return n.get(e);
          n.set(e, t)
        }

        function t() {
          return i(e, arguments, r(this).constructor)
        }
        return t.prototype = Object.create(e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), o(t, e)
      }, a(t)
    }
    e.exports = a
  }, , , , , , , , , , , , , function(e, t) {
    e.exports = function(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }
  }, function(e, t) {
    e.exports = function(e) {
      return -1 !== Function.toString.call(e).indexOf("[native code]")
    }
  }, function(e, t, n) {
    var r = n(18),
      o = n(42);

    function c(t, n, i) {
      return o() ? e.exports = c = Reflect.construct : e.exports = c = function(e, t, n) {
        var o = [null];
        o.push.apply(o, t);
        var c = new(Function.bind.apply(e, o));
        return n && r(c, n.prototype), c
      }, c.apply(null, arguments)
    }
    e.exports = c
  }, function(e, t) {
    e.exports = function() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
      } catch (e) {
        return !1
      }
    }
  }]
};
