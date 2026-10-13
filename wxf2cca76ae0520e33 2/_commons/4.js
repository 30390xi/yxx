module.exports = {
  ids: [4],
  modules: {
    4: function(e, t, n) {
      var o = n(0),
        i = n(2),
        a = n(1),
        r = n(9),
        c = n(14),
        s = Object(c.a)({
          appid: "wx2b03c6e691cd7370",
          page: "sdk/api"
        });

      function m(e, t) {
        return isNaN(e) || isNaN(t) ? 0 : Math.min(Math.max(0, t - e), 1e4)
      }
      var u = a.a.getSystemInfoSync() || {},
        _ = u.model && u.model.trim();

      function l(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return Promise.race([f(e, t), p(e.timeout)])
      }

      function f(e, t) {
        return new Promise((function(n, i) {
          ! function e(t, n, i, a) {
            var c = Date.now();
            wx.operateWXData({
              apiName: "LiveRoute",
              reqData: i,
              requestInQueue: !1,
              success: function(e) {
                var a = Date.now();
                s.infoNoConsole("[".concat(i.action, "] succ, costTime=").concat(a - c));
                var u = e && e.respData && e.respData.data || null;
                if (u) {
                  if ("ok" !== u) try {
                    u = JSON.parse(u)
                  } catch (e) {
                    console.warn("api 无法解析resp")
                  }
                  t(u)
                } else n({
                  inner_ret: o.a.OPERATEWXDATA_CODE.NO_CONTENT,
                  errmsg: "no res.respData.data",
                  response: e
                });
                r.a.addActionReportItem({
                  action: i && i.action || "no_action",
                  bizuin: i && i.room_appid || "",
                  time: parseInt(c / 1e3),
                  cost_time: m(c, a),
                  ext_msg: "succ"
                })
              },
              fail: function(u) {
                var _ = Date.now();
                if (s.errorNoConsole("[".concat(i.action, "] fail, costTime=").concat(_ - c)), r.a.addActionReportItem({
                    action: i && i.action || "no_action",
                    bizuin: i && i.room_appid || "",
                    time: parseInt(c / 1e3),
                    cost_time: m(c, _),
                    ext_msg: "fail"
                  }), (a -= 1) >= 0) setTimeout((function() {
                  e(t, n, i, a)
                }), 1e3);
                else {
                  if (u) {
                    if (u.errMsg && !u.err_code) {
                      var l = u.errMsg,
                        f = o.a.ROOM_ERROR_CODE;
                      Object.keys(f).forEach((function(e) {
                        var t = f[e];
                        l.indexOf(t) > 0 && (u.err_code = t)
                      }))
                    }
                  } else u = {
                    errMsg: "response is null",
                    err_code: -8888888,
                    inner_ret: -8888888
                  };
                  n(u)
                }
              }
            })
          }(n, i, e, t)
        }))
      }

      function p(e) {
        return new Promise((function(t, n) {
          setTimeout((function() {
            return n({
              inner_ret: o.a.OPERATEWXDATA_CODE.TIMEOUT,
              errmsg: "wx.operateWXData timeout"
            })
          }), e || o.a.REQUEST_DEFAULT_TIMEOUT)
        }))
      }

      function d(e, t, n) {
        try {
          var o = t.action || "no_action",
            a = "succ" === e ? s.infoNoConsole : s.errorNoConsole;
          i.a.isOpenLocalReqLog && "fail" === e && console.error("[".concat(t.action, "]"), "type=fail", "req=", t, " resp=", n);
          var r = {};
          Object.keys(t).forEach((function(e) {
            "report_list" === e || "report_data" === e ? r.report_list = "***" : "report_data" === t.action && "content" === e ? r.content = "***" : r[e] = t[e]
          }));
          var c = JSON.stringify(n);
          if (c.length < 400) return void a("[".concat(o, "] type=").concat(e, " req="), r, "resp=", c);
          var m = {};
          Object.keys(n).forEach((function(e) {
            ("comments" === e || "barrages" === e || "goods" === e || "live_info" === e || "play_url_key_list" == e) && JSON.stringify(n[e]).length > 100 ? a("[".concat(o, "] resp[").concat(e, "]="), n[e]) : m[e] = n[e]
          })), a("[".concat(o, "] type=").concat(e, " req="), r, "resp[...]=", m)
        } catch (e) {
          console.log("[上报日志失败]", e)
        }
      }
      t.a = {
        liveRoutePromise: function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
          return e.plugin_version = i.a.pluginVersion || "", e.phone_model = _, new Promise((function(n, i) {
            l(e, t).then((function(t) {
              d("succ", e, t), n(t)
            })).catch((function(t) {
              if (d("fail", e, t), i(t), t.inner_ret === o.a.OPERATEWXDATA_CODE.TIMEOUT) {
                var n = e.timeout || o.a.REQUEST_DEFAULT_TIMEOUT;
                r.a.addActionReportItem({
                  action: e && e.action || "no_action",
                  bizuin: e && e.room_appid || "",
                  time: parseInt(Date.now() - n / 1e3),
                  cost_time: n,
                  ext_msg: "fail"
                })
              }
            }))
          }))
        }
      }
    },
    9: function(e, t, n) {
      var o = n(2),
        i = n(1),
        a = 0,
        r = [],
        c = null,
        s = function() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
        };

      function m(e) {
        if (e.time = e.time || parseInt(Date.now() / 1e3), r.push(e), e.cost_time && s("addReportItem", e.action, e.cost_time), r.length > 10) {
          var t = JSON.stringify(r);
          s("到条数", t.length), clearTimeout(c), _()
        } else c || (c = setTimeout((function() {
          _()
        }), 3e5))
      }
      var u = {};

      function _() {
        if (r && 0 !== r.length) {
          var e = r;
          r = [], s("上报", e.length, e), wx.request({
            url: "https://cube.weixinbridge.com/cube/report/reportbizdata",
            data: {
              f: "json",
              report_items: e
            },
            success: function(t) {
              t && t.data && 0 === t.data.code ? s("上报-成功", e.list, e) : l(t, e)
            },
            fail: function(t) {
              l(t, e)
            }
          })
        }
      }

      function l(e, t) {
        s("上报-失败", e, t), a > 3 || r.length < 20 ? a = 0 : (a++, r.concat(t))
      }
      t.a = {
        WEBSOCKET_BIZ_ID: 1614,
        LINK_MIC_BIZ_ID: 1813,
        LIVE_PUSHER_ERROR_TYPE: 1,
        ACTION_BIZ_ID: 2191,
        addReportItem: m,
        addActionReportItem: function(e) {
          var t;
          if (e && e.cost_time && e.action) try {
            var n = i.a.getSystemInfoSync(!0),
              a = i.a.getLaunchOptionsSync(!0),
              r = i.a.getNetworkType(e.time),
              c = {
                biz_id: 2191,
                wechat_version: n.version || "",
                lib_version: n.SDKVersion || "",
                system: n.platform || "",
                system_version: (n.system || "").replace(/\w+ /, ""),
                brand: n.brand || "",
                model: n.model || "",
                network: r || "",
                scene: a && a.scene || 0,
                weapp_version: "",
                plugin_version: o.a.pluginVersion || "",
                action: e.action || "",
                bizuin: e.bizuin || "",
                time: e.time || 0,
                cost_time: e.cost_time || 0,
                ext_msg: e.ext_msg || "",
                merge_count: 1
              };
            if (s("观察", c.action, c.ext_msg), "succ" !== c.ext_msg) m(c);
            else {
              var _ = e.action;
              if (u[_]) {
                var l = u[_];
                s("观察", c.action, {
                  newTime: c.time,
                  oldTime: l.time
                }), c.time > 60 + l.time ? (m(l), s("观察", c.action, "已超过一分钟", l), u[_] = c, t = c.time, Object.keys(u).forEach((function(e) {
                  if (u[e] && t > 60 + u[e].time) {
                    var n = u[e];
                    u[e] = null, m(n), s("观察", n.action, "已超过一分钟", n)
                  }
                }))) : (l.merge_count += 1, l.cost_time = Math.ceil((l.cost_time + c.cost_time) / 2), s("观察", c.action, "合并计算", l.merge_count, l.cost_time))
              } else u[_] = c, s("观察", c.action, "存起来")
            }
          } catch (e) {
            s("logic error", e)
          }
        },
        uploadAll: function() {
          clearTimeout(r), _()
        }
      }
    }
  }
};
