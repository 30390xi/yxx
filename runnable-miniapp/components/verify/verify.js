module.exports = require("../../_commons/0.js")([require("../../_commons/1.js"), {
  ids: [5],
  modules: {
    20: function(e, t, a) {
      e.exports = a(68)
    },
    38: function(e, t) {
      Object.entries || (Object.entries = function(e) {
        for (var t = Object.keys(e), a = t.length, i = new Array(a); a--;) i[a] = [t[a], e[t[a]]];
        return i
      }), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
        value: function(e, t) {
          if (null == this) throw new TypeError('"this" is null or not defined');
          var a = Object(this),
            i = a.length >>> 0;
          if (0 === i) return !1;
          for (var r, n, o = 0 | t, s = Math.max(o >= 0 ? o : i - Math.abs(o), 0); s < i;) {
            if ((r = a[s]) === (n = e) || "number" == typeof r && "number" == typeof n && isNaN(r) && isNaN(n)) return !0;
            s++
          }
          return !1
        }
      }), String.prototype.includes || Object.defineProperty(String.prototype, "includes", {
        value: function(e, t) {
          return "number" != typeof t && (t = 0), !(t + e.length > this.length) && -1 !== this.indexOf(e, t)
        }
      }), Number.isInteger = Number.isInteger || function(e) {
        return "number" == typeof e && isFinite(e) && Math.floor(e) === e
      }
    },
    68: function(e, t, a) {
      "use strict";
      a.r(t);
      var i = a(3),
        r = a.n(i),
        n = (a(38), a(7)),
        o = a(4),
        s = a(1),
        c = a(2),
        u = !1,
        d = a(8),
        l = a.n(d),
        h = a(11),
        p = a(9),
        g = a(6),
        m = a(5),
        f = (a(13), a(14), a(10)),
        y = a(0),
        b = a(16),
        D = a.n(b),
        v = a(15),
        O = a.n(v);

      function T(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t && (i = i.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), a.push.apply(a, i)
        }
        return a
      }

      function S(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2 ? T(Object(a), !0).forEach((function(t) {
            r()(e, t, a[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : T(Object(a)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
          }))
        }
        return e
      }
      var w = function(e) {
        var t = e.reqData;
        t || (t = e.data || {}), !t.header && e.header && (t.header = e.header);
        var a = e.apiName;
        a || (a = e.url.replace(/^\?.*$/g, ""));
        var i = e.url ? e.url.replace(/^[^\?]+\??/g, "") : "";
        i && (t = S(S({}, Object(m.i)(i)), t));
        var r = null;
        return console.debug("wx.operateWXData ".concat(a, " reqData"), t), wx.operateWXData({
          reqData: t,
          apiName: a,
          success: function(t) {
            console.debug("wx.operateWXData ".concat(a, " success"), t), r = function(e) {
              try {
                var t;
                return {
                  data: S(S({}, JSON.parse(e.rawData)), {}, {
                    base_resp: {
                      ret: +e.err_code || +(null === (t = e.respData) || void 0 === t ? void 0 : t.err_no) || 0,
                      err_msg: e.errMsg
                    }
                  }),
                  statusCode: 200
                }
              } catch (t) {
                return console.error("[wx.operateWXData] handleResp err", t), e
              }
            }(t), e.success && e.success(r)
          },
          fail: function(t) {
            console.debug("wx.operateWXData ".concat(a, " fail"), t), r = function(e) {
              return {
                baseResp: {
                  ret: e.err_code,
                  errMsg: e.errMsg
                }
              }
            }(t), e.fail && e.fail(r)
          },
          complete: function(t) {
            console.debug("wx.operateWXData ".concat(a, " complete"), r || t), e.complete && e.complete(r || t)
          }
        }), {
          abort: function() {
            console.log("operateWXData abort")
          }
        }
      };

      function j(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t && (i = i.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), a.push.apply(a, i)
        }
        return a
      }

      function I(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2 ? j(Object(a), !0).forEach((function(t) {
            r()(e, t, a[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : j(Object(a)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
          }))
        }
        return e
      }
      var k = ["asyncget", "reportpage", "reportclick", "reportmultimon"],
        C = new(function() {
          function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            D()(this, e), this.cache = {}, this.cacheKeyMap = new Map, this.defaultCacheTime = t.defaultCacheTime || 36e5, this.cacheEnable = !1
          }
          return O()(e, [{
            key: "init",
            value: function() {
              this.cacheEnable = !0, this.getCacheKeyMapFromLocalStorage(), this.clearExpireValueTimeout()
            }
          }, {
            key: "getCacheKeyMapFromLocalStorage",
            value: function() {
              var e = this;
              try {
                JSON.parse(g.a.getSync("cache_key_map")).forEach((function(t) {
                  e.cacheKeyMap.set(t.key, t.value)
                }))
              } catch (e) {}
            }
          }, {
            key: "setCacheKeyMapToLocalStorage",
            value: function() {
              try {
                var e = [];
                this.cacheKeyMap.forEach((function(t, a) {
                  e.push({
                    key: a,
                    value: t
                  })
                })), g.a.setSync("cache_key_map", JSON.stringify(e))
              } catch (e) {}
            }
          }, {
            key: "getParsedKey",
            value: function(e, t) {
              var a = this.generateKey();
              return this.findKey(a) ? this.getParsedKey(e, t) : (this.cacheKeyMap.set(a, {
                originKey: e,
                expireTime: Date.now() + t
              }), this.setCacheKeyMapToLocalStorage(), a)
            }
          }, {
            key: "generateKey",
            value: function() {
              for (var e = "", t = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], a = 0; a < 6; a++) e += t[Math.round(Math.random() * (t.length - 1))];
              return e
            }
          }, {
            key: "findKey",
            value: function(e) {
              return this.cacheKeyMap.get(e)
            }
          }, {
            key: "findKeyByOption",
            value: function(e) {
              var t = "";
              return this.cacheKeyMap.forEach((function(a, i) {
                if (a.originKey === e) return t = i, i
              })), t
            }
          }, {
            key: "getKeyByCacheItem",
            value: function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.options,
                a = e.url,
                i = e.data,
                r = void 0 === i ? "{}" : i;
              if (t && a) return e.cacheKeyRule ? e.cacheKeyRule({
                options: t,
                path: a.replace(/\?.*$/, ""),
                query: Object(m.i)(a),
                data: JSON.parse(r || "{}")
              }) : "".concat(a, "_").concat(r)
            }
          }, {
            key: "get",
            value: function(e) {
              try {
                if (!this.cacheEnable) return null;
                var t = this.getKeyByCacheItem(e);
                if (!t) return null;
                var a, i = this.findKeyByOption(t);
                if ("memory" === e.type) {
                  if (!(a = this.cache[i])) return null;
                  if (Date.now() - a.expireTime > 0) return this.cache[i] = null, null;
                  console.debug("DataCacheCenter get key", i, "matchItem", a || "undefined", "originalKey", t);
                  try {
                    return JSON.parse(a.value)
                  } catch (e) {
                    return null
                  }
                } else try {
                  var r = g.a.getSync(i);
                  if (console.debug("DataCacheCenter get key", i, "matchItem", r || "undefined", "originalKey", t), !r) return null;
                  var n = JSON.parse(r);
                  return Date.now() - n.expireTime > 0 ? (wx.removeStorageSync(i), null) : n.value
                } catch (e) {
                  return console.error("DataCacheCenter get key err", e), null
                }
              } catch (e) {
                return console.error("DataCacheCenter get key err 111", e), null
              }
            }
          }, {
            key: "set",
            value: function(e) {
              var t = this.getKeyByCacheItem(e);
              try {
                if (!this.cacheEnable) return;
                if (!t) return;
                e.key = t;
                var a = e.expireTime || this.defaultCacheTime,
                  i = this.findKeyByOption(t);
                e.key = i || this.getParsedKey(t, a), console.debug("DataCacheCenter set key", e.key, "matchItem", e.value, "originalKey", t), "memory" === e.type ? this.cache[e.key] = {
                  type: "memory",
                  value: JSON.stringify(e.value),
                  expireTime: Date.now() + a
                } : (g.a.setSync(e.key, JSON.stringify({
                  expireTime: Date.now() + a,
                  value: e.value
                })), this.cacheKeyMap.set(e.key, {
                  originKey: t,
                  expireTime: Date.now() + a
                }), this.setCacheKeyMapToLocalStorage())
              } catch (t) {
                console.error("DataCacheCenter set data err", t, "cacheItem", e, "key", e.key, "originalKey")
              }
            }
          }, {
            key: "clear",
            value: function() {
              for (key in this.cache) "localStorage" === this.cache[key].type && wx.removeStorageSync(key);
              this.cache = {}, this.cacheKeyMap.clear()
            }
          }, {
            key: "clearExpireValueTimeout",
            value: function() {
              var e = this;
              this.clearTimerId || (this.clearTimerId = setTimeout((function() {
                e.clearTimerId = null, e.clearExpireValue()
              }), 3e3))
            }
          }, {
            key: "clearExpireValue",
            value: function() {
              var e = this,
                t = [];
              this.cacheKeyMap.forEach((function(e, a) {
                e.expireTime < Date.now() && t.push(a)
              })), console.debug("DataCacheCenter clearExpireValue", t), t.forEach((function(t, a) {
                a < 5 && (wx.removeStorageSync(t), console.debug("DataCacheCenter removeStorageSync", t), e.cacheKeyMap.delete(t))
              })), t.length && this.setCacheKeyMapToLocalStorage(), t.length > 5 && this.clearExpireValueTimeout()
            }
          }, {
            key: "setCacheEnable",
            value: function(e) {
              this.cacheEnable = e
            }
          }]), e
        }());
      C.init();
      var x = function(e, t, a, i) {
          if (i && !e.isUseOperateWxData) {
            e.url = Object(m.a)(e.url || "");
            var r = e.header || {},
              s = r[y.b] || r[y.b.toLowerCase()] || "";
            "POST" === t && s.toLowerCase() === y.c.JSON ? a && a.pass_ticket ? e.url = Object(m.k)(e.url, Object(m.h)(a)) : e.url = Object(m.k)(e.url, a ? "codetype=".concat(n.a.codeType, "&code=").concat(a) : "wxa_session=".concat(o.b.wxaSession)) : a && a.pass_ticket ? e.needPasskey ? e.data = I(I({}, e.data), a) : e.data = I(I({}, e.data), {}, {
              pass_ticket: a.pass_ticket
            }) : e.data = I(I({}, e.data), {}, a ? {
              codetype: n.a.codeType,
              code: a
            } : {
              wxa_session: o.b.wxaSession
            }), a && Object(f.c)(), e.header = I({}, e.header);
            var u = c.a.weappVersion || n.a.weappVersion;
            u && (e.header[y.g] = u), o.b.uin && (e.header[y.h] = o.b.uin)
          }
        },
        _ = function(e) {
          var t = e.reject,
            a = e.isInternalApi,
            i = e.cgiUrl,
            r = e.method,
            n = e.requestData,
            o = e.startTime,
            c = e.reportData,
            u = e.needMonitorReport,
            d = e.options,
            h = void 0 === d ? "" : d,
            p = e.originData,
            g = void 0 === p ? "" : p,
            m = e.err;
          console.error("request ".concat(i, " fail:"), m);
          var f = c.retCode,
            b = Date.now() - o,
            D = f === y.e.REQUEST_TIMEOUT ? s.b.cgiTimeout(i) : s.b.cgiFail(i);
          return a && u && Object(s.f)(D, {
            ret: f,
            costTime: b,
            msg: m,
            options: h,
            reqData: g
          }), Object(s.i)({
            action: D,
            costTime: b,
            errCode: f,
            extParam: I(I({
              cgiUrl: i,
              method: r
            }, c), {}, {
              request: n,
              response: m,
              options: h
            })
          }), m && "object" === l()(m) ? m.baseResp || (m.baseResp = {
            ret: f
          }) : m = {
            baseResp: {
              ret: f,
              errMsg: String(m)
            }
          }, t(m)
        },
        P = function(e, t) {
          return e || 1e3 * (t ? 10 : 15)
        },
        R = function(e) {
          var t = !0;
          return k.map((function(a) {
            e.indexOf(a) > 0 && (t = !1)
          })), t
        },
        E = function() {
          try {
            wx.hideLoading()
          } catch (e) {}
        },
        A = function e() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            a = arguments.length > 1 ? arguments[1] : void 0,
            i = JSON.stringify(t.data || {}),
            r = Date.now(),
            n = Number(t.showLoadingTimeOut) || z.showLoadingTimeOut,
            c = !0,
            u = null,
            d = t.useCache ? Object.assign({}, z.useCache, t.useCache) : t.useCache;

          function l() {
            t.showLoading && (c = !1, Date.now() - r < n && (clearTimeout(u), u = null), E())
          }
          return d && d.expire && (d.expire = 1e3 * d.expire), t.showLoading && (clearTimeout(u), u = null, u = setTimeout((function() {
            z.logDebug && console.debug("--cgi show loading--", t), c && wx.showLoading({
              mask: t.loadingMask || !0,
              title: t.loadingTitle || "加载中"
            })
          }), n)), new Promise((function(r, n) {
            var c = !1,
              u = t.url;
            t.__originalUrl = u;
            var p = !!t.isUseOperateWxData || Object(m.g)(u),
              g = (t.method || "GET").toUpperCase();
            "POST" === g && (t.header = I({
              [y.b]: "json" === t.contentType ? y.c.JSON : y.c.FORM
            }, t.header)), x(t, g, a, p), t.needMonitorReport = void 0 === t.needMonitorReport || t.needMonitorReport, t.data = t.noHumps ? t.data : Object(h.decamelizeKeys)(t.data);
            var f, b = t.isUseOperateWxData ? t.url : Object(m.d)(u, t.data),
              D = !1;
            d && (z.logDebug && console.debug("DataCacheCenter get options", {
              url: u,
              data: i,
              useCache: d,
              options: t
            }), (f = C.get({
              url: u,
              data: i,
              useCache: d,
              options: t
            })) && (l(), d.handleCache && d.handleCache(f), d.resolveRequestData || r(f), D = !0)), t.header || (t.header = {});
            var v = [];
            for (var O in K) v.push("".concat(O, "=").concat(K[O] || ""));
            t.header.Cookie = t.header.Cookie ? "".concat(t.header.Cookie, ";").concat(v.join(";")) : v.join(";"), z.logDebug && console.debug("request ".concat(b, " params:"), t.data, "cookie:", t.header.cookie);
            var T = null,
              S = null;

            function j() {
              var e = [];
              return d && e.push("useCache=1"), D && e.push("isCached=1"), e.join("&")
            }
            var k = function(e, a) {
              _({
                options: j(),
                reject: n,
                cgiUrl: b,
                isInternalApi: p,
                method: g,
                requestData: t.data,
                startTime: T,
                err: e,
                reportData: a,
                needMonitorReport: t.needMonitorReport,
                originData: i
              })
            };
            t.success = function(e) {
              if (l(), !c) {
                z.logDebug && console.debug("request ".concat(b, " success:"), e);
                var a = e.statusCode,
                  n = e.profile,
                  v = e.header,
                  O = t.noHumps ? e.data || {} : Object(h.camelizeKeys)(e.data || {});
                t.noHumps && O.base_resp && (O.baseResp = Object(h.camelizeKeys)(O.base_resp));
                var w = O.baseResp,
                  I = void 0 === w ? {} : w;
                if (S = Object(m.e)(O), a >= 200 && a < 300 || 304 === a)
                  if (D && !d.resolveRequestData) 0 === S && C.set({
                    options: t,
                    url: u,
                    data: i,
                    value: O,
                    expireTime: d.expire,
                    type: d.cacheType
                  });
                  else if (p || /^(https|http):\/\/mp.weixin.qq.com.*/.test(u))
                  if (0 === S) {
                    Object(o.e)(I), r(O), I.timestamp && Object(m.j)(I.timestamp), 1 === I.dyeFlag && (z.logDebug && console.debug("当前是染色用户"), Object(s.d)({
                      sample: 1
                    }));
                    var x = Date.now() - T;
                    if (t.needMonitorReport) {
                      var _ = {
                        cgiUrl: b,
                        method: g
                      };
                      t.needProfileReport && (_.profile = n, _.header = v), _.options = j(), t.needResponseDataReport && (_.data = O, f && (_.cacheRes = f)), Object(s.g)(s.b.cgiSuccess(b), {
                        costTime: x,
                        errCode: S,
                        extParam: _
                      }, {
                        reqData: i,
                        respData: JSON.stringify(_),
                        options: j()
                      })
                    }
                    d && C.set({
                      options: t,
                      url: u,
                      data: i,
                      value: O,
                      expireTime: d.expire,
                      type: t.cacheType
                    })
                  } else k(O, {
                    retCode: S || -1,
                    statusCode: a,
                    profile: n,
                    header: v
                  });
                else r(O), d && C.set({
                  options: t,
                  url: u,
                  data: i,
                  value: O,
                  expireTime: t.cacheTime,
                  type: d.cacheType
                });
                else k(O, {
                  retCode: S || y.e.REQUEST_NETWORK_FAIL,
                  statusCode: a,
                  profile: n,
                  header: v
                })
              }
            }, t.fail = function(i) {
              if (l(), z.logDebug && console.debug("request ".concat(b, " fail:"), i), !c) {
                if (!t.reTry && (t.reTry = 2), !t.currenTime && (t.currenTime = 1), t.currenTime < t.reTry && R(t.url)) return t.currenTime = t.currenTime + 1, t.url = t.__originalUrl, e(I({}, t), a).then((function(e) {
                  r(e)
                })).catch((function(e) {
                  n(e)
                }));
                S = y.e.API_REQUEST_FAIL, k(i, {
                  retCode: S,
                  statusCode: S
                })
              }
            }, t.complete = function() {
              if (l(), z.logDebug && console.debug("request ".concat(b, " complete")), !c) {
                var e = Date.now() - T;
                z.logDebug && console.debug("request ".concat(b, " cost:"), e), M && clearTimeout(M), t.speed && t.speed.pid && t.speed.sid && Object(s.h)({
                  pid: t.speed.pid,
                  speeds: {
                    sid: t.speed.sid,
                    time: e
                  }
                })
              }
            }, T = Date.now();
            var E = {};
            t.needResponseDataReport && t.data && (E.reqData = JSON.stringify(t.data)), p && t.needMonitorReport && Object(s.f)(s.b.cgiTime(b), E);
            var A = t.isUseOperateWxData ? w(t) : wx.request(t),
              M = setTimeout((function() {
                if (l(), z.logDebug && console.debug("request ".concat(b, " timeout")), S = y.e.REQUEST_TIMEOUT, c = !0, A.abort(), !t.reTry && (t.reTry = 2), !t.currenTime && (t.currenTime = 1), t.currenTime < t.reTry && R(t.url)) return t.currenTime = t.currenTime + 1, t.url = t.__originalUrl, e(t, a).then((function(e) {
                  r(e)
                })).catch((function(e) {
                  n(e)
                }));
                k("custom timeout", {
                  retCode: S,
                  statusCode: S
                })
              }), P(t.timeout, p))
          }))
        },
        M = function(e) {
          return e.isUseOperateWxData ? A(e, res) : c.a.plugin ? Object(f.e)().then((function(t) {
            return A(e, t)
          })) : Object(f.d)().then((function(t) {
            return A(e, t)
          }))
        },
        N = function(e, t) {
          return A(e, t).catch((function(t) {
            return a = Object(m.e)(t), [y.e.CGI_AUTH_FAILED, y.e.CGI_AUTH_FAILED_23, y.e.SESSION_EXPIRE, y.e.PASS_TICKET_AUTH_FAILED, y.e.CGI_AUTH_FAILED_1201, y.e.CGI_AUTH_FAILED_1202].includes(a) ? (Object(s.f)("auth failed"), Object(f.b)(), Object(o.a)(), e.url = e.__originalUrl, "object" === l()(e.data) && e.data && (delete e.data.wxa_session, delete e.data.code, delete e.data.pass_ticket), M(e)) : Promise.reject(t);
            var a
          }))
        },
        K = {},
        U = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return c.a.plugin ? !Object(m.g)(e.url) || Object(o.d)() ? N(e, Object(o.c)()) : M(e) : !Object(m.g)(e.url) || Object(o.d)() ? N(e) : f.a ? p.a.checkSession().then((function() {
            return N(e, f.a)
          }), (function() {
            return M(e)
          })) : M(e)
        },
        z = {
          showLoadingTimeOut: 0,
          useCache: {
            resolveRequestData: !0
          },
          logDebug: !0
        };

      function B(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t && (i = i.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), a.push.apply(a, i)
        }
        return a
      }

      function q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2 ? B(Object(a), !0).forEach((function(t) {
            r()(e, t, a[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : B(Object(a)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
          }))
        }
        return e
      }
      var L = wx.getAccountInfoSync ? wx.getAccountInfoSync() : {},
        F = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return e.data || (e.data = {}), e.data.f = "json", e.data.is_new_ticket = 1, e.data.appid = L.miniProgram ? L.miniProgram.appId : "", e.data.pluginVersion = L.plugin ? L.plugin.version : "0.1.5", e.data.weappEnvVersion = L.miniProgram ? L.miniProgram.envVersion : "", U(q({}, e))
        },
        J = {
          NOT_EXIST: 1,
          AUDITING: 2,
          BIND: 3,
          FAIL: 4,
          UNBIND: 5
        },
        Q = [{
          ret: 18e3,
          title: "操作失败",
          desc: "该用户人脸身份信息不通过"
        }, {
          ret: 18001,
          title: "验证不通过",
          desc: "该用户正在审核中",
          primary: "重新验证",
          secondary: "取消验证"
        }, {
          ret: 18002,
          title: "验证不通过",
          desc: "该学生身份已绑定其他微信号，学生身份一年仅可修改一次，如需修改请解除绑定。",
          primary: "重新验证",
          secondary: "取消验证"
        }, {
          ret: 18003,
          title: "验证不通过",
          desc: "每个学生身份同时段内仅可绑定一个微信号，一年只能修改一次。",
          primary: "重新验证",
          secondary: "取消验证"
        }, {
          ret: 18010,
          title: "验证不通过",
          desc: "在线验证码无效",
          primary: "重新验证",
          secondary: "取消验证"
        }, {
          ret: 18011,
          title: "验证不通过",
          desc: "已过学生毕业时间",
          primary: "重新验证",
          secondary: "取消验证"
        }, {
          ret: 180110,
          title: "验证不通过",
          desc: "已过学生毕业时间",
          primary: "重新绑定",
          secondary: "取消验证"
        }, {
          ret: 18012,
          title: "验证不通过",
          desc: "学生信息和操作人信息不匹配",
          primary: "重新验证",
          secondary: "取消验证"
        }, {
          ret: 18013,
          title: "验证不通过",
          desc: "在线验证码已过期，请登录学信网续期或重新生成",
          primary: "重新验证",
          secondary: "取消验证"
        }, {
          ret: 18014,
          title: "验证不通过",
          desc: "申请绑定的学生类型不符合要求",
          primary: "重新验证",
          secondary: "取消验证"
        }, {
          ret: 18019,
          title: "验证不通过",
          desc: "未知错误",
          primary: "重新验证",
          secondary: "取消验证"
        }, {
          ret: 18020,
          title: "你暂时不能解除绑定",
          desc: "每个学生身份同时段内仅可绑定一个微信号，一年只能修改一次，近一年内首次绑定时间为 {lastUnbindTime}。"
        }, {
          ret: 18021,
          title: "解绑失败",
          desc: "学生姓名与身份证信息不符"
        }, {
          ret: 18090,
          title: "验证不通过",
          desc: "未知错误",
          primary: "重新验证",
          secondary: "取消验证"
        }];

      function W(e) {
        if (!e) return "";
        var t = new Date(1e3 * e);
        return "".concat(t.getFullYear(), "年").concat(t.getMonth() + 1, "月").concat(t.getDate(), "日")
      }

      function X(e) {
        var t = e.ret,
          a = e.errMsg,
          i = e.tipContent,
          r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (0 === t) return {
          ret: 0
        };
        var n = Q.find((function(e) {
          return e.ret === t
        }));
        return n ? (n.desc = i || n.desc.replace("{lastUnbindTime}", W(r.lastUnbindTime)), n) : {
          isSysErr: !0,
          ret: t,
          title: a || "验证不通过",
          desc: "".concat(a || "系统失败，请稍后再试", "[").concat(t, "]"),
          primary: "重新验证",
          secondary: "取消验证"
        }
      }
      var H = "index-authorize-data",
        V = "https://wximg.qq.com/cityservices/res/icon/studentCheck/user_photos_nor.svg",
        G = [],
        Y = null;

      function $() {
        if (G.length) {
          clearTimeout(Y), Y = null;
          var e = G;
          return G = [], F({
            url: "/intp/mmdata?action=reportstudentidentity",
            needMonitorReport: !1,
            header: {
              "CONTENT-TYPE": "application/json"
            },
            method: "POST",
            data: e
          })
        }
      }
      var Z = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        try {
          if (e.appid = c.a.miniProgram && c.a.miniProgram.appId || "", console.debug(">>>>>bizReport send request", e), G = G.concat(e), t) return $(isPost);
          if (G.length > 5) return $();
          Y || setTimeout((function() {
            $()
          }), 2e3)
        } catch (e) {
          return Promise.reject(e)
        }
      };

      function ee(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t && (i = i.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), a.push.apply(a, i)
        }
        return a
      }

      function te(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ee(Object(a), !0).forEach((function(t) {
            r()(e, t, a[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : ee(Object(a)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
          }))
        }
        return e
      }! function() {
        if (!u) {
          var e = "";
          if (wx.getAccountInfoSync) {
            var t = wx.getAccountInfoSync();
            e = t.plugin && t.plugin.version, t.miniProgram && t.miniProgram.appId
          }
          Object(n.b)({
            codeType: "studentcheck-plugin",
            weappVersion: "0.1.5",
            report: {
              uin: o.b.uin || o.b.openId || "",
              reportDelay: 3e3,
              monitorId: 8376,
              streamInterface: "weapp-student-check",
              serviceType: 0,
              monitor: {
                plugin_version: e
              }
            }
          }), console.log("init plugin version", e), u = !0
        }
      }();
      var ae = {
        loading: !1,
        platform: c.a.platform,
        showDialog: !1,
        showAuth: !0,
        startAnimate: !1,
        checked: !0,
        showAgreementDialog: !1,
        _needRefresh: !1,
        _submitting: !1,
        height: "auto"
      };
      Component({
        properties: {
          show: {
            type: Boolean,
            value: !1
          },
          isQuick: {
            type: Boolean,
            value: !1
          }
        },
        options: {
          styleIsolation: "isolated"
        },
        data: te(te({}, ae), {}, {
          BIND_STATUS: J,
          complementMiniProgram: {
            appId: "wxa16657d57059e0f0",
            path: "/pages/bind/bind?from=plugin_bind&"
          },
          auditMiniProgram: {
            appId: "wxa16657d57059e0f0",
            path: "/pages/detail/detail?from=plugin_detail&"
          },
          failMiniProgram: {
            appId: "wxa16657d57059e0f0",
            path: "/pages/bind/bind?from=plugin_fail&"
          },
          failGraduateMiniProgram: {
            appId: "wxa16657d57059e0f0",
            path: "/pages/index/index?from=plugin_fail_graduate&"
          },
          customData: {
            enterTime: 0,
            lastBindStatus: J.NOT_EXIST
          },
          headimgurl: V
        }),
        pageLifetimes: {
          show: function() {
            console.log("onShow", this.data._needRefresh), Object(s.f)("component verify page onShow", {
              msg: JSON.stringify({
                needRefresh: this.data._needRefresh
              })
            }), this.data._needRefresh && this.refreshData()
          }
        },
        lifetimes: {
          attached: function() {
            this.addIsUseModel2Path(), Object(s.f)("component verify attached", {
              msg: JSON.stringify({
                isQuick: this.data.isQuick
              })
            })
          }
        },
        methods: {
          refreshData: function() {
            var e = this;
            this.initData(!1).then((function(t) {
              var a = e.data,
                i = a.customData,
                r = i.lastBindStatus,
                n = i.enterTime;
              r !== a.bindStatus && (e.data.customData.lastBindStatus = e.data.bindStatus, r === J.FAIL ? e.bizReport(113, {
                stayTime: Date.now() - n
              }) : r === J.AUDITING ? e.bizReport(114, {
                stayTime: Date.now() - n
              }) : r !== J.NOT_EXIST && r !== J.UNBIND || e.bizReport(115, {
                stayTime: Date.now() - n
              }))
            }))
          },
          getAgreementInfo: function(e) {
            var t = te(te({}, e.authorizeInfo || {}), {}, {
              agreementTitle: this.data.isQuick ? e.authorizeInfo.quickAgreementTitle : e.authorizeInfo.agreementTitle,
              agreement: this.data.isQuick ? e.authorizeInfo.quickAgreement : e.authorizeInfo.agreement
            });
            return delete t.quickAgreement, delete t.quickAgreementTitle, t
          },
          initData: function() {
            var e = this;
            return console.log("attached"), F({
              url: "/intp/studentidentity?action=getuserauthorizeinfo",
              data: {
                isQuick: this.data.isQuick ? 1 : 0
              }
            }).then((function(t) {
              return console.log("initData res", t), /^http/.test(t.headimgurl) || (console.log("headimgurl not http", t.headimgurl), t.headimgurl = V), e.setData(te(te(te({}, t), {}, {
                loading: !1
              }, e.mergeStatus(t)), {}, {
                authorizeInfo: e.getAgreementInfo(t)
              })), Object(s.f)("plugin getStudentInfo succ", {
                msg: JSON.stringify(te(te({}, e.data), {}, {
                  authorizeInfo: null
                }))
              }), t
            })).catch((function(t) {
              console.error("studentidentity get err", t);
              var a = t.baseResp,
                i = void 0 === a ? {} : a,
                r = t.tipContent;
              console.error("studentidentity get failWording", X(te(te({}, i), {}, {
                tipContent: r
              }))), /^http/.test(t.headimgurl) || (console.log("headimgurl not http", t.headimgurl), t.headimgurl = V);
              var n = J.FAIL;
              return 18011 === i.ret ? (n = J.FAIL, i.ret = 180110) : t.bindStatus && (n = t.bindStatus), e.setData(te(te(te({
                isStudent: !1,
                loading: !1
              }, t), {}, {
                bindStatus: n,
                cgiWording: X(te(te({}, i), {}, {
                  tipContent: r
                }))
              }, e.mergeStatus(t)), {}, {
                authorizeInfo: e.getAgreementInfo(t)
              })), Object(s.f)("plugin getStudentInfo err", {
                msg: JSON.stringify(te(te({}, e.data), {}, {
                  authorizeInfo: null
                }))
              }), t
            }))
          },
          addIsUseModel2Path: function() {
            var e = this,
              t = {};
            ["failGraduateMiniProgram", "failMiniProgram", "auditMiniProgram", "complementMiniProgram"].forEach((function(a) {
              t["".concat(a, ".path")] = e.data[a].path.replace(/isUseModel=\d/, "") + "isUseModel=".concat(e.data.isQuick ? 1 : 0)
            })), this.setData(te({}, t))
          },
          mergeStatus: function(e) {
            return e.bindStatus || (e.bindStatus = J.NOT_EXIST), e.modelBindStatus || (e.modelBindStatus = J.NOT_EXIST), this.data.isQuick && e.bindStatus !== J.BIND && e.bindStatus !== J.FAIL ? e.bindStatus === J.AUDITING && e.modelBindStatus !== J.BIND ? {
              bindStatus: e.bindStatus,
              xuexinBindStatus: e.bindStatus,
              modelBindStatus: e.modelBindStatus
            } : {
              bindStatus: e.modelBindStatus,
              xuexinBindStatus: e.bindStatus,
              modelBindStatus: e.modelBindStatus
            } : {
              bindStatus: e.bindStatus,
              xuexinBindStatus: e.bindStatus,
              modelBindStatus: e.modelBindStatus
            }
          },
          onCheckChange: function() {
            this.setData({
              checked: !this.data.checked
            })
          },
          onShowAgreement: function() {
            this.setData({
              showAgreementDialog: !0
            })
          },
          onReject: function() {
            this.triggerEvent("reject"), this.hideDialog(), this.bizReport(102, {
              stayTime: Date.now() - this.data.customData.enterTime
            })
          },
          onAuth: function() {
            var e = this;
            if (!this.data._submitting) {
              this.data._submitting = !0;
              var t = this.data,
                a = t.isStudent,
                i = t.bindStatus;
              a && i === J.BIND ? (this.hideDialog(!1), this.bizReport(109, {
                stayTime: Date.now() - this.data.customData.enterTime
              })) : this.setData({
                showAuth: !1,
                startAnimate: !0
              }, (function() {
                e.showAnimate()
              })), F({
                method: "POST",
                url: "/intp/studentidentity?action=submitauthorize",
                data: {
                  isAuthorize: 1,
                  isQuick: this.data.isQuick ? 1 : 0
                }
              }).then((function(t) {
                e.data._submitting = !1, Object(s.f)("plugin submitauthorize", {
                  msg: JSON.stringify(t)
                }), e.bizReport(101, {
                  stayTime: Date.now() - e.data.customData.enterTime
                });
                var i = e.data.bindStatus;
                i === J.FAIL ? (e.bizReport(110), e.data.customData.enterTime = Date.now()) : i === J.AUDITING ? (e.bizReport(106), e.data.customData.enterTime = Date.now()) : (e.bizReport(103), e.data.customData.enterTime = Date.now()), e.triggerEvent("auth", {
                  wx_studentcheck_code: t.wxStudentcheckCode
                }), a && i === J.BIND && e.triggerEvent("close")
              })).catch((function(t) {
                console.error("submitauthorize fail", t), Object(s.f)("plugin submitauthorize err", {
                  msg: JSON.stringify(t)
                }), e.data._submitting = !1
              }))
            }
          },
          showAnimate: function() {
            var e = this;
            this.animate("#verify-dialog-desc", [{
              opacity: 0,
              height: this.data.height
            }, {
              opacity: 1,
              height: "376px"
            }], 150, (function() {
              console.log("complete"), e.clearAnimation("#verify-dialog-desc"), e.setData({
                startAnimate: !1
              })
            }))
          },
          onHideDialog: function() {
            this.hideDialog(), this.bizReport(116, {
              stayTime: Date.now() - this.data.customData.enterTime
            })
          },
          hideDialog: function() {
            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            this.setData(te({
              show: !1,
              showDialog: !1
            }, ae)), console.log("hideDialog", this.data), e && this.triggerEvent("close")
          },
          bizReport: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            Z(te(te({
              entrance: e,
              bindStatus: this.data.bindStatus
            }, t), {}, {
              ext1: this.data.isQuick ? 1 : 0,
              modelBindStatus: this.data.modelBindStatus,
              xuexinBindStatus: this.data.xuexinBindStatus
            })), t.stayTime && (this.data.customData.stayTime = Date.now())
          },
          onTapFailPrimary: function() {
            console.log("onTapFailPrimary"), this.data._needRefresh = !0, this.bizReport(112, {
              stayTime: Date.now() - this.data.customData.enterTime
            })
          },
          onTapFailSecondary: function() {
            this.hideDialog(), this.bizReport(111, {
              stayTime: Date.now() - this.data.customData.enterTime
            })
          },
          onTapAuditPrimary: function() {
            this.hideDialog(), this.bizReport(107, {
              stayTime: Date.now() - this.data.customData.enterTime
            })
          },
          onTapAuditBottomLink: function() {
            console.log("onTapAuditBottomLink"), this.data._needRefresh = !0, this.bizReport(108, {
              stayTime: Date.now() - this.data.customData.enterTime
            })
          },
          onTapComplementSecondary: function() {
            this.hideDialog(), this.bizReport(104, {
              stayTime: Date.now() - this.data.customData.enterTime
            })
          },
          onTapComplementPrimary: function() {
            console.log("onTapComplementPrimary"), this.data._needRefresh = !0, this.bizReport(105, {
              stayTime: Date.now() - this.data.customData.enterTime
            })
          },
          onTapSuccessPrimary: function() {
            this.hideDialog(), this.bizReport(117, {
              stayTime: Date.now() - this.data.customData.enterTime
            })
          },
          onAgreementClose: function() {
            this.setData({
              showAgreementDialog: !1,
              showDialog: !1,
              show: !1
            }), this.triggerEvent("close")
          },
          onAgreementIconClose: function() {
            this.setData({
              showAgreementDialog: !1,
              showDialog: !0,
              show: !0
            })
          },
          calcHeight: function() {
            var e = this;
            this.createSelectorQuery().select("#verify-dialog-desc").boundingClientRect().exec((function(t) {
              t[0] && e.setData({
                height: t[0].height + "px"
              })
            }))
          }
        },
        observers: {
          show: function(e) {
            var t = this;
            if (this.setData({
                showDialog: e
              }), e) {
              var a = g.a.getSync(H);
              a ? this.setData(te(te({}, a), {}, {
                loading: !1
              })) : this.setData({
                loading: !0
              }), this.initData().then((function(e) {
                g.a.setSync(H, e), t.calcHeight(), t.data.customData.lastBindStatus = t.data.bindStatus, t.bizReport(100)
              })).catch((function() {
                t.calcHeight()
              })), this.data.customData.enterTime = Date.now()
            }
          },
          isQuick: function() {
            this.addIsUseModel2Path()
          }
        }
      })
    }
  },
  entries: [
    [20, 0, 1]
  ]
}]);
