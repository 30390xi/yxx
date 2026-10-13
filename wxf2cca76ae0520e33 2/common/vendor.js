require("../@babel/runtime/helpers/Arrayincludes"), require("../@babel/runtime/helpers/Objectvalues");
var e = require("../@babel/runtime/helpers/typeof");
(global.webpackJsonp = global.webpackJsonp || []).push([
  ["common/vendor"], {
    "011a": function(e, t) {
      function a() {
        try {
          var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
        } catch (t) {}
        return (e.exports = a = function() {
          return !!t
        }, e.exports.__esModule = !0, e.exports.default = e.exports)()
      }
      e.exports = a, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    "0295": function(e, t, a) {
      function l(e, t, a) {
        this.$children.map((function(n) {
          e === n.$options.name ? n.$emit.apply(n, [t].concat(a)) : l.apply(n, [e, t].concat(a))
        }))
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = {
        methods: {
          dispatch: function(e, t, a) {
            for (var l = this.$parent || this.$root, n = l.$options.name; l && (!n || n !== e);)(l = l.$parent) && (n = l.$options.name);
            l && l.$emit.apply(l, [t].concat(a))
          },
          broadcast: function(e, t, a) {
            l.call(this, e, t, a)
          }
        }
      };
      t.default = n
    },
    "02e3": function(e, t, a) {
      (function(t) {
        var l = a("47a9")(a("d724")),
          n = ["order/app/v1/order/addTicketOrder"],
          r = {};
        e.exports = {
          getRequest: function(e, a, i, o, u, s) {
            var c = s || getApp().globalData.requestUrl;
            return new Promise((function(s, f) {
              ! function e(a, i, o, u, s, c, f, v) {
                var h = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0;
                u && t.showLoading({
                  title: u || "",
                  mask: !0
                }), getApp().globalData.httpList = r, r[i] = t.request({
                  url: s + i,
                  header: {
                    Authorization: t.getStorageSync("token") ? "bearer " + t.getStorageSync("token") : "",
                    version: "1.0.5",
                    product: "Wxmp",
                    "source-code": t.getStorageSync("source_header") || "",
                    "source-channel-code": t.getStorageSync("channel_header") || "",
                    "share-member-id": t.getStorageSync("shareMemberId_header") || ""
                  },
                  method: a,
                  data: o,
                  success: function(r) {
                    u && t.hideLoading(), 200 == r.statusCode || 429 == r.statusCode ? 101 === r.data.code || 10006 === r.data.code ? (getApp().watchRouter(), l.default.dispatch("LoginOut").then((function() {
                      setTimeout((function(e) {
                        getApp().globalData.pathType = h, t.navigateTo({
                          url: "/pages/wxLogin/wxLogin"
                        })
                      }), 200)
                    }))) : !n.includes(i) && (r.data.msg.includes("火爆") || r.data.msg.includes("频繁")) && v < 12 ? (v++, setTimeout((function() {
                      e(a, i, o, u, s, c, f, v)
                    }), 5e3)) : c(r.data) : 401 == r.statusCode ? 99998 === r.data.code ? c(r.data) : l.default.dispatch("LoginOut").then((function() {
                      setTimeout((function(e) {
                        getApp().globalData.pathType = h, t.navigateTo({
                          url: "/pages/wxLogin/wxLogin"
                        })
                      }), 200)
                    })) : ++v < 12 ? setTimeout((function() {
                      e(a, i, o, u, s, c, f, v)
                    }), 5e3) : f(r)
                  },
                  fail: function(e) {
                    -1 == e.errMsg.indexOf("abort") && t.showToast({
                      title: "网络走丢了，请刷新重试",
                      icon: "none"
                    }), f(e), t.hideLoading()
                  }
                })
              }(e, a, i, o, c, s, f, 0, u)
            }))
          },
          dataRequestYesLoading: function(e, t, a, l, n, r) {
            return this.getRequest(e, t, a, l, n, r)
          },
          dataRequestNoLoading: function(e, t, a, l, n) {
            return this.getRequest(e, t, a, "", l, n)
          },
          getRequestYesLoading: function(e, t, a, l, n) {
            return this.getRequest(e, t, "", a, l, n)
          },
          getRequestNoLoading: function(e, t, a, l) {
            return this.getRequest(e, t, "", "", a, l)
          }
        }
      }).call(this, a("df3c").default)
    },
    "0408": function(e, t) {
      var a = {
          ZH: {
            dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            shortDayNames: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
            monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            shortMonthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
          },
          US: {
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            shortDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            shortMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
          }
        },
        l = {
          format: function(e, t) {
            var a = {
              "M+": e.getMonth() + 1,
              "d+": e.getDate(),
              "h+": e.getHours(),
              "m+": e.getMinutes(),
              "s+": e.getSeconds(),
              "q+": Math.floor((e.getMonth() + 3) / 3),
              S: e.getMilliseconds()
            };
            for (var l in this.isNotEmpty(t) || (t = "yyyy-MM-dd hh:mm:ss"), /(y+)/.test(t) && (t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length))), a) new RegExp("(" + l + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? a[l] : ("00" + a[l]).substr(("" + a[l]).length)));
            return t
          },
          formatToDate: function(e) {
            return this.isNotEmpty(e) ? new Date(Date.parse(e.replace(/-/g, "/"))) : ""
          },
          getDateStart: function(e) {
            var t = this.getDateStartStr(e, "yyyy-MM-dd");
            return new Date(Date.parse(t))
          },
          getDateStartStr: function(e, t) {
            void 0 === t && (t = "yyyy-MM-dd");
            var a = this.format(e, t);
            return a += " 00:00:00"
          },
          getDateEnd: function(e) {
            var t = this.getDateEndStr(e, "yyyy-MM-dd");
            return new Date(Date.parse(t))
          },
          getDateEndStr: function(e, t) {
            void 0 === t && (t = "yyyy-MM-dd");
            var a = this.format(e, t);
            return a += " 23:59:59"
          },
          compareDate: function(e, t) {
            if (e && t) {
              if (e.getTime() > t.getTime()) return 1;
              if (e.getTime() == t.getTime()) return 0;
              if (e.getTime() < t.getTime()) return -1
            }
          },
          getWeek: function(e, t) {
            if (e) {
              this.isNotEmpty(t) || (t = 0);
              var l = e.getDay(),
                n = "";
              switch (t) {
                case this.WEEKTYPE.ZH_DAYNAME:
                  n = a.ZH.dayNames[l];
                  break;
                case this.WEEKTYPE.ZH_SDAYNAME:
                  n = a.ZH.shortDayNames[l];
                  break;
                case this.WEEKTYPE.US_DAYNAME:
                  n = a.US.dayNames[l];
                  break;
                case this.WEEKTYPE.US_SDAYNAME:
                  n = a.US.shortDayNames[l]
              }
              return n
            }
          },
          isLeapYear: function(e) {
            return e instanceof Date ? 0 == e.getYear() % 4 && (e.getYear() % 100 != 0 || e.getYear() % 400 == 0) : (console.warn("argument format is wrong"), !1)
          },
          isValidDate: function(e) {
            if (this.isNotEmpty(e)) {
              var t = e.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
              if (null == t) return !1;
              var a = new Date(t[1], t[3] - 1, t[4]);
              return 0 != (a.getFullYear() == t[1] && a.getMonth() + 1 == t[3] && a.getDate() == t[4])
            }
          },
          addDay: function(e, t) {
            return this.isNotEmpty(e) && this.isNotEmpty(t) && e instanceof Date && "number" == typeof t ? e.setDate(e.getDate() + t) : console.warn("date or dayNum format wrong"), e
          },
          addDayStr: function(e, t) {
            var a = "";
            return this.isNotEmpty(e) && this.isNotEmpty(t) && "number" == typeof t ? (a = this.formatToDate(e)).setDate(a.getDate() + t) : console.warn("dateStr or dayNum format wrong"), a
          },
          addMonth: function(e, t) {
            return this.isNotEmpty(e) && this.isNotEmpty(t) && e instanceof Date && "number" == typeof t ? e.setMonth(e.getMonth() + t) : console.warn("date or monthNum format wrong"), e
          },
          addMonthStr: function(e, t) {
            var a = "";
            return this.isNotEmpty(e) && this.isNotEmpty(t) && "number" == typeof t ? (a = this.formatToDate(e)).setMonth(a.getMonth() + t) : console.warn("date or monthNum format wrong"), a
          },
          addYear: function(e, t) {
            return this.isNotEmpty(e) && this.isNotEmpty(t) && e instanceof Date && "number" == typeof t ? e.setYear(e.getFullYear() + t) : console.warn("date or yearNum format wrong"), e
          },
          addYearStr: function(e, t) {
            var a = "";
            return this.isNotEmpty(e) && this.isNotEmpty(t) && "number" == typeof t ? (a = this.formatToDate(e)).setYear(a.getFullYear() + t) : console.warn("date or yearNum format wrong"), a
          },
          isNotEmpty: function(e) {
            return "" != e && null != e && void 0 !== e || (console.warn("argument format is wrong"), !1)
          },
          WEEKTYPE: {
            ZH_DAYNAME: 0,
            ZH_SDAYNAME: 1,
            US_DAYNAME: 2,
            US_SDAYNAME: 3
          }
        };
      e.exports = l
    },
    "066c": function(e, t, a) {
      (function(t) {
        var a = t.canIUse("editor");

        function l(e) {
          for (var t = Object.create(null), a = e.split(","), l = a.length; l--;) t[a[l]] = !0;
          return t
        }
        e.exports = {
          errorImg: null,
          filter: null,
          highlight: null,
          onText: null,
          entities: {
            quot: '"',
            apos: "'",
            semi: ";",
            nbsp: " ",
            ensp: " ",
            emsp: " ",
            ndash: "–",
            mdash: "—",
            middot: "·",
            lsquo: "‘",
            rsquo: "’",
            ldquo: "“",
            rdquo: "”",
            bull: "•",
            hellip: "…"
          },
          blankChar: l(" , ,\t,\r,\n,\f"),
          boolAttrs: l("allowfullscreen,autoplay,autostart,controls,ignore,loop,muted"),
          blockTags: l("address,article,aside,body,caption,center,cite,footer,header,html,nav,section" + (a ? "" : ",pre")),
          ignoreTags: l("area,base,canvas,frame,input,link,map,meta,param,script,source,style,svg,textarea,title,track,wbr" + (a ? ",rp" : "") + ",iframe"),
          richOnlyTags: l("a,colgroup,fieldset,legend,table" + (a ? ",bdi,bdo,caption,rt,ruby" : "")),
          selfClosingTags: l("area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),
          trustTags: l("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video" + (a ? ",bdi,bdo,caption,pre,rt,ruby" : "")),
          userAgentStyles: {
            address: "font-style:italic",
            big: "display:inline;font-size:1.2em",
            blockquote: "background-color:#f6f6f6;border-left:3px solid #dbdbdb;color:#6c6c6c;padding:5px 0 5px 10px",
            caption: "display:table-caption;text-align:center",
            center: "text-align:center",
            cite: "font-style:italic",
            dd: "margin-left:40px",
            mark: "background-color:yellow",
            pre: "font-family:monospace;white-space:pre;overflow:scroll",
            s: "text-decoration:line-through",
            small: "display:inline;font-size:0.8em",
            u: "text-decoration:underline"
          }
        }
      }).call(this, a("3223").default)
    },
    "091b": function(e, t, a) {
      (function(e) {
        var l = a("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var n = l(a("3b2d")),
          r = l(a("67ad")),
          i = l(a("0bdb"));

        function o(e, t) {
          var a = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
          if (!a) {
            if (Array.isArray(e) || (a = function(e, t) {
                if (e) {
                  if ("string" == typeof e) return u(e, t);
                  var a = Object.prototype.toString.call(e).slice(8, -1);
                  return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? u(e, t) : void 0
                }
              }(e)) || t && e && "number" == typeof e.length) {
              a && (e = a);
              var l = 0,
                n = function() {};
              return {
                s: n,
                n: function() {
                  return l >= e.length ? {
                    done: !0
                  } : {
                    done: !1,
                    value: e[l++]
                  }
                },
                e: function(e) {
                  throw e
                },
                f: n
              }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }
          var r, i = !0,
            o = !1;
          return {
            s: function() {
              a = a.call(e)
            },
            n: function() {
              var e = a.next();
              return i = e.done, e
            },
            e: function(e) {
              o = !0, r = e
            },
            f: function() {
              try {
                i || null == a.return || a.return()
              } finally {
                if (o) throw r
              }
            }
          }
        }

        function u(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var a = 0, l = new Array(t); a < t; a++) l[a] = e[a];
          return l
        }
        var s = a("6a3f"),
          c = 6291456,
          f = {},
          v = function() {
            function t() {
              (0, r.default)(this, t), getApp().PAINTER_MAX_LRU_SPACE && (c = getApp().PAINTER_MAX_LRU_SPACE), e.getStorage({
                key: "savedFiles",
                success: function(e) {
                  e.data && (f = e.data)
                }
              })
            }
            return (0, i.default)(t, [{
              key: "download",
              value: function(t) {
                return new Promise((function(a, l) {
                  if (t && s.isValidUrl(t)) {
                    var n = function(t) {
                      if (f[t]) return f[t].time = (new Date).getTime(), e.setStorage({
                        key: "savedFiles",
                        data: f
                      }), f[t]
                    }(t);
                    n ? e.getSavedFileInfo({
                      filePath: n.path,
                      success: function(e) {
                        a(n.path)
                      },
                      fail: function(e) {
                        console.error("the file is broken, redownload it, ".concat(JSON.stringify(e))), h(t).then((function(e) {
                          a(e)
                        }), (function() {
                          l()
                        }))
                      }
                    }) : h(t).then((function(e) {
                      a(e)
                    }), (function() {
                      l()
                    }))
                  } else a(t)
                }))
              }
            }]), t
          }();

        function h(t) {
          return new Promise((function(a, l) {
            e.downloadFile({
              url: t,
              success: function(n) {
                if (!n.tempFilePath) return console.error("downloadFile ".concat(t, " failed res.statusCode is not 200")), void l();
                var r = n.tempFilePath;
                e.getFileInfo({
                  filePath: r,
                  success: function(l) {
                    var n = l.size;
                    (function(t) {
                      return new Promise((function(a, l) {
                        var n = f.totalSize ? f.totalSize : 0;
                        if (t + n <= c) a();
                        else {
                          var r = [],
                            i = JSON.parse(JSON.stringify(f));
                          delete i.totalSize;
                          var u, s = o(Object.keys(i).sort((function(e, t) {
                            return i[e].time - i[t].time
                          })));
                          try {
                            for (s.s(); !(u = s.n()).done;) {
                              var v = u.value;
                              if (n -= f[v].size, r.push(f[v].path), delete f[v], n + t < c) break
                            }
                          } catch (e) {
                            s.e(e)
                          } finally {
                            s.f()
                          }
                          f.totalSize = n, e.setStorage({
                            key: "savedFiles",
                            data: f,
                            success: function() {
                              r.length > 0 && d(r), a()
                            },
                            fail: function(e) {
                              console.error("doLru setStorage failed, ".concat(JSON.stringify(e))), l()
                            }
                          })
                        }
                      }))
                    })(n).then((function() {
                      (function(t, a, l) {
                        return new Promise((function(n, r) {
                          e.saveFile({
                            tempFilePath: l,
                            success: function(l) {
                              var r = f.totalSize ? f.totalSize : 0;
                              f[t] = {}, f[t].path = l.savedFilePath, f[t].time = (new Date).getTime(), f[t].size = a, f.totalSize = a + r, e.setStorage({
                                key: "savedFiles",
                                data: f
                              }), n(l.savedFilePath)
                            },
                            fail: function(a) {
                              console.error("saveFile ".concat(t, " failed, then we delete all files, ").concat(JSON.stringify(a))), n(l), e.removeStorage({
                                key: "savedFiles",
                                success: function() {
                                  e.getSavedFileList({
                                    success: function(e) {
                                      d(e.fileList)
                                    },
                                    fail: function(e) {
                                      console.error("getSavedFileList failed, ".concat(JSON.stringify(e)))
                                    }
                                  })
                                }
                              })
                            }
                          })
                        }))
                      })(t, n, r).then((function(e) {
                        a(e)
                      }))
                    }), (function() {
                      a(r)
                    }))
                  },
                  fail: function(e) {
                    console.error("getFileInfo ".concat(n.tempFilePath, " failed, ").concat(JSON.stringify(e))), a(n.tempFilePath)
                  }
                })
              },
              fail: function(e) {
                console.error("downloadFile failed, ".concat(JSON.stringify(e), " ")), l()
              }
            })
          }))
        }

        function d(t) {
          var a, l = o(t);
          try {
            var r = function() {
              var t = a.value,
                l = t;
              "object" === (0, n.default)(t) && (l = t.filePath), e.removeSavedFile({
                filePath: l,
                fail: function(e) {
                  console.error("removeSavedFile ".concat(t, " failed, ").concat(JSON.stringify(e)))
                }
              })
            };
            for (l.s(); !(a = l.n()).done;) r()
          } catch (e) {
            l.e(e)
          } finally {
            l.f()
          }
        }
        t.default = v
      }).call(this, a("3223").default)
    },
    "0af7": function(e, t, a) {
      var l = a("47a9");
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = l(a("4309")),
        r = l(a("e4d6")),
        i = l(a("7126")),
        o = l(a("0be5")),
        u = l(a("3b2af")),
        s = l(a("4404")),
        c = l(a("0e4e")),
        f = l(a("22c2")),
        v = l(a("cfd6")),
        h = l(a("b4d9")),
        d = l(a("ee0e")),
        b = l(a("7c97")),
        p = l(a("0dc1")),
        g = l(a("4aff")),
        y = l(a("a667")),
        S = l(a("a9c6")),
        m = l(a("19a2")),
        Y = l(a("f599")),
        Z = l(a("4bf7")),
        L = l(a("40ab")),
        C = l(a("8886")),
        T = {
          queryParams: i.default,
          route: o.default,
          timeFormat: u.default,
          date: u.default,
          timeFrom: s.default,
          colorGradient: c.default.colorGradient,
          guid: f.default,
          color: v.default,
          type2icon: h.default,
          randomArray: d.default,
          wranning: function(e) {},
          get: r.default.get,
          post: r.default.post,
          put: r.default.put,
          delete: r.default.delete,
          hexToRgb: c.default.hexToRgb,
          rgbToHex: c.default.rgbToHex,
          test: y.default,
          random: S.default,
          deepClone: b.default,
          deepMerge: p.default,
          getParent: Z.default,
          addUnit: g.default,
          trim: m.default,
          type: ["primary", "success", "error", "warning", "info"],
          http: r.default,
          toast: Y.default,
          config: L.default,
          zIndex: C.default
        },
        w = {
          install: function(e) {
            e.mixin(n.default), e.prototype.openShare && e.mixin(mpShare), e.filter("timeFormat", (function(e, t) {
              return (0, u.default)(e, t)
            })), e.filter("date", (function(e, t) {
              return (0, u.default)(e, t)
            })), e.filter("timeFrom", (function(e, t) {
              return (0, s.default)(e, t)
            })), e.prototype.$u = T
          }
        };
      t.default = w
    },
    "0bdb": function(e, t, a) {
      var l = a("d551");

      function n(e, t) {
        for (var a = 0; a < t.length; a++) {
          var n = t[a];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, l(n.key), n)
        }
      }
      e.exports = function(e, t, a) {
        return t && n(e.prototype, t), a && n(e, a), Object.defineProperty(e, "prototype", {
          writable: !1
        }), e
      }, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    "0be5": function(e, t, a) {
      (function(e) {
        var l = a("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var n = l(a("3b2d")),
          r = l(a("7126"));
        t.default = function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            l = {
              type: "navigateTo",
              url: "",
              delta: 1,
              params: {},
              animationType: "pop-in",
              animationDuration: 300
            };
          if ("/" != (l = Object.assign(l, t)).url[0] && (l.url = "/" + l.url), Object.keys(l.params).length && "switchTab" != l.type) {
            var i = "";
            /.*\/.*\?.*=.*/.test(l.url) ? (i = (0, r.default)(l.params, !1), l.url += "&" + i) : (i = (0, r.default)(l.params), l.url += i)
          }
          if ("string" == typeof t && "object" == (0, n.default)(a)) {
            /.*\/.*\?.*=.*/.test(t) ? t += "&" + (0, r.default)(a, !1) : t += (0, r.default)(a)
          }
          return "string" == typeof t ? ("/" != t[0] && (t = "/" + t), e.navigateTo({
            url: t
          })) : "navigateTo" == l.type || "to" == l.type ? e.navigateTo({
            url: l.url,
            animationType: l.animationType,
            animationDuration: l.animationDuration
          }) : "redirectTo" == l.type || "redirect" == l.type ? e.redirectTo({
            url: l.url
          }) : "switchTab" == l.type || "tab" == l.type ? e.switchTab({
            url: l.url
          }) : "reLaunch" == l.type ? e.reLaunch({
            url: l.url
          }) : "navigateBack" == l.type || "back" == l.type ? e.navigateBack({
            delta: parseInt(l.delta ? l.delta : this.delta)
          }) : void 0
        }
      }).call(this, a("df3c").default)
    },
    "0dc1": function(e, t, a) {
      var l = a("47a9");
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = l(a("3b2d")),
        r = l(a("7c97"));
      t.default = function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (t = (0, r.default)(t), "object" !== (0, n.default)(t) || "object" !== (0, n.default)(a)) return !1;
        for (var l in a) a.hasOwnProperty(l) && (l in t ? "object" !== (0, n.default)(t[l]) || "object" !== (0, n.default)(a[l]) ? t[l] = a[l] : t[l].concat && a[l].concat ? t[l] = t[l].concat(a[l]) : t[l] = e(t[l], a[l]) : t[l] = a[l]);
        return t
      }
    },
    "0e4e": function(e, t, a) {
      function l(e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          a = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
        if ((e = e.toLowerCase()) && a.test(e)) {
          if (4 === e.length) {
            for (var l = "#", n = 1; n < 4; n += 1) l += e.slice(n, n + 1).concat(e.slice(n, n + 1));
            e = l
          }
          for (var r = [], i = 1; i < 7; i += 2) r.push(parseInt("0x" + e.slice(i, i + 2)));
          return t ? "rgb(".concat(r[0], ",").concat(r[1], ",").concat(r[2], ")") : r
        }
        if (/^(rgb|RGB)/.test(e)) {
          var o = e.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
          return o.map((function(e) {
            return Number(e)
          }))
        }
        return e
      }

      function n(e) {
        var t = e;
        if (/^(rgb|RGB)/.test(t)) {
          for (var a = t.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(","), l = "#", n = 0; n < a.length; n++) {
            var r = Number(a[n]).toString(16);
            "0" === (r = 1 == String(r).length ? "0" + r : r) && (r += r), l += r
          }
          return 7 !== l.length && (l = t), l
        }
        if (!/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(t)) return t;
        var i = t.replace(/#/, "").split("");
        if (6 === i.length) return t;
        if (3 === i.length) {
          for (var o = "#", u = 0; u < i.length; u += 1) o += i[u] + i[u];
          return o
        }
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var r = {
        colorGradient: function() {
          for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "rgb(0, 0, 0)", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "rgb(255, 255, 255)", a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10, r = l(e, !1), i = r[0], o = r[1], u = r[2], s = l(t, !1), c = s[0], f = s[1], v = s[2], h = (c - i) / a, d = (f - o) / a, b = (v - u) / a, p = [], g = 0; g < a; g++) {
            var y = n("rgb(" + Math.round(h * g + i) + "," + Math.round(d * g + o) + "," + Math.round(b * g + u) + ")");
            p.push(y)
          }
          return p
        },
        hexToRgb: l,
        rgbToHex: n
      };
      t.default = r
    },
    "0ee4": function(t, a) {
      var l;
      l = function() {
        return this
      }();
      try {
        l = l || new Function("return this")()
      } catch (t) {
        "object" === ("undefined" == typeof window ? "undefined" : e(window)) && (l = window)
      }
      t.exports = l
    },
    "10ab": function(e, t, a) {
      t.byteLength = function(e) {
        var t = s(e),
          a = t[0],
          l = t[1];
        return 3 * (a + l) / 4 - l
      }, t.toByteArray = function(e) {
        var t, a, l = s(e),
          i = l[0],
          o = l[1],
          u = new r(function(e, t, a) {
            return 3 * (t + a) / 4 - a
          }(0, i, o)),
          c = 0,
          f = o > 0 ? i - 4 : i;
        for (a = 0; a < f; a += 4) t = n[e.charCodeAt(a)] << 18 | n[e.charCodeAt(a + 1)] << 12 | n[e.charCodeAt(a + 2)] << 6 | n[e.charCodeAt(a + 3)], u[c++] = t >> 16 & 255, u[c++] = t >> 8 & 255, u[c++] = 255 & t;
        return 2 === o && (t = n[e.charCodeAt(a)] << 2 | n[e.charCodeAt(a + 1)] >> 4, u[c++] = 255 & t), 1 === o && (t = n[e.charCodeAt(a)] << 10 | n[e.charCodeAt(a + 1)] << 4 | n[e.charCodeAt(a + 2)] >> 2, u[c++] = t >> 8 & 255, u[c++] = 255 & t), u
      }, t.fromByteArray = function(e) {
        for (var t, a = e.length, n = a % 3, r = [], i = 0, o = a - n; i < o; i += 16383) r.push(f(e, i, i + 16383 > o ? o : i + 16383));
        return 1 === n ? (t = e[a - 1], r.push(l[t >> 2] + l[t << 4 & 63] + "==")) : 2 === n && (t = (e[a - 2] << 8) + e[a - 1], r.push(l[t >> 10] + l[t >> 4 & 63] + l[t << 2 & 63] + "=")), r.join("")
      };
      for (var l = [], n = [], r = "undefined" != typeof Uint8Array ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = 0, u = i.length; o < u; ++o) l[o] = i[o], n[i.charCodeAt(o)] = o;

      function s(e) {
        var t = e.length;
        if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        var a = e.indexOf("=");
        return -1 === a && (a = t), [a, a === t ? 0 : 4 - a % 4]
      }

      function c(e) {
        return l[e >> 18 & 63] + l[e >> 12 & 63] + l[e >> 6 & 63] + l[63 & e]
      }

      function f(e, t, a) {
        for (var l, n = [], r = t; r < a; r += 3) l = (e[r] << 16 & 16711680) + (e[r + 1] << 8 & 65280) + (255 & e[r + 2]), n.push(c(l));
        return n.join("")
      }
      n["-".charCodeAt(0)] = 62, n["_".charCodeAt(0)] = 63
    },
    "12e3": function(e, t, a) {
      (function(e) {
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <http://feross.org>
         * @license  MIT
         */
        var l = a("10ab"),
          n = a("ba37"),
          r = a("b0e4");

        function i() {
          return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
        }

        function o(e, t) {
          if (i() < t) throw new RangeError("Invalid typed array length");
          return u.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = u.prototype : (null === e && (e = new u(t)), e.length = t), e
        }

        function u(e, t, a) {
          if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u)) return new u(e, t, a);
          if ("number" == typeof e) {
            if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
            return f(this, e)
          }
          return s(this, e, t, a)
        }

        function s(e, t, a, l) {
          if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
          return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function(e, t, a, l) {
            if (t.byteLength, a < 0 || t.byteLength < a) throw new RangeError("'offset' is out of bounds");
            if (t.byteLength < a + (l || 0)) throw new RangeError("'length' is out of bounds");
            return t = void 0 === a && void 0 === l ? new Uint8Array(t) : void 0 === l ? new Uint8Array(t, a) : new Uint8Array(t, a, l), u.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = u.prototype : e = v(e, t), e
          }(e, t, a, l) : "string" == typeof t ? function(e, t, a) {
            if ("string" == typeof a && "" !== a || (a = "utf8"), !u.isEncoding(a)) throw new TypeError('"encoding" must be a valid string encoding');
            var l = 0 | d(t, a),
              n = (e = o(e, l)).write(t, a);
            return n !== l && (e = e.slice(0, n)), e
          }(e, t, a) : function(e, t) {
            if (u.isBuffer(t)) {
              var a = 0 | h(t.length);
              return 0 === (e = o(e, a)).length || t.copy(e, 0, 0, a), e
            }
            if (t) {
              if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || function(e) {
                return e != e
              }(t.length) ? o(e, 0) : v(e, t);
              if ("Buffer" === t.type && r(t.data)) return v(e, t.data)
            }
            throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
          }(e, t)
        }

        function c(e) {
          if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
          if (e < 0) throw new RangeError('"size" argument must not be negative')
        }

        function f(e, t) {
          if (c(t), e = o(e, t < 0 ? 0 : 0 | h(t)), !u.TYPED_ARRAY_SUPPORT)
            for (var a = 0; a < t; ++a) e[a] = 0;
          return e
        }

        function v(e, t) {
          var a = t.length < 0 ? 0 : 0 | h(t.length);
          e = o(e, a);
          for (var l = 0; l < a; l += 1) e[l] = 255 & t[l];
          return e
        }

        function h(e) {
          if (e >= i()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i().toString(16) + " bytes");
          return 0 | e
        }

        function d(e, t) {
          if (u.isBuffer(e)) return e.length;
          if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
          "string" != typeof e && (e = "" + e);
          var a = e.length;
          if (0 === a) return 0;
          for (var l = !1;;) switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
              return a;
            case "utf8":
            case "utf-8":
            case void 0:
              return E(e).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * a;
            case "hex":
              return a >>> 1;
            case "base64":
              return O(e).length;
            default:
              if (l) return E(e).length;
              t = ("" + t).toLowerCase(), l = !0
          }
        }

        function b(e, t, a) {
          var l = !1;
          if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
          if ((void 0 === a || a > this.length) && (a = this.length), a <= 0) return "";
          if ((a >>>= 0) <= (t >>>= 0)) return "";
          for (e || (e = "utf8");;) switch (e) {
            case "hex":
              return J(this, t, a);
            case "utf8":
            case "utf-8":
              return w(this, t, a);
            case "ascii":
              return _(this, t, a);
            case "latin1":
            case "binary":
              return X(this, t, a);
            case "base64":
              return T(this, t, a);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return P(this, t, a);
            default:
              if (l) throw new TypeError("Unknown encoding: " + e);
              e = (e + "").toLowerCase(), l = !0
          }
        }

        function p(e, t, a) {
          var l = e[t];
          e[t] = e[a], e[a] = l
        }

        function g(e, t, a, l, n) {
          if (0 === e.length) return -1;
          if ("string" == typeof a ? (l = a, a = 0) : a > 2147483647 ? a = 2147483647 : a < -2147483648 && (a = -2147483648), a = +a, isNaN(a) && (a = n ? 0 : e.length - 1), a < 0 && (a = e.length + a), a >= e.length) {
            if (n) return -1;
            a = e.length - 1
          } else if (a < 0) {
            if (!n) return -1;
            a = 0
          }
          if ("string" == typeof t && (t = u.from(t, l)), u.isBuffer(t)) return 0 === t.length ? -1 : y(e, t, a, l, n);
          if ("number" == typeof t) return t &= 255, u.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? n ? Uint8Array.prototype.indexOf.call(e, t, a) : Uint8Array.prototype.lastIndexOf.call(e, t, a) : y(e, [t], a, l, n);
          throw new TypeError("val must be string, number or Buffer")
        }

        function y(e, t, a, l, n) {
          var r, i = 1,
            o = e.length,
            u = t.length;
          if (void 0 !== l && ("ucs2" === (l = String(l).toLowerCase()) || "ucs-2" === l || "utf16le" === l || "utf-16le" === l)) {
            if (e.length < 2 || t.length < 2) return -1;
            i = 2, o /= 2, u /= 2, a /= 2
          }

          function s(e, t) {
            return 1 === i ? e[t] : e.readUInt16BE(t * i)
          }
          if (n) {
            var c = -1;
            for (r = a; r < o; r++)
              if (s(e, r) === s(t, -1 === c ? 0 : r - c)) {
                if (-1 === c && (c = r), r - c + 1 === u) return c * i
              } else - 1 !== c && (r -= r - c), c = -1
          } else
            for (a + u > o && (a = o - u), r = a; r >= 0; r--) {
              for (var f = !0, v = 0; v < u; v++)
                if (s(e, r + v) !== s(t, v)) {
                  f = !1;
                  break
                } if (f) return r
            }
          return -1
        }

        function S(e, t, a, l) {
          a = Number(a) || 0;
          var n = e.length - a;
          l ? (l = Number(l)) > n && (l = n) : l = n;
          var r = t.length;
          if (r % 2 != 0) throw new TypeError("Invalid hex string");
          l > r / 2 && (l = r / 2);
          for (var i = 0; i < l; ++i) {
            var o = parseInt(t.substr(2 * i, 2), 16);
            if (isNaN(o)) return i;
            e[a + i] = o
          }
          return i
        }

        function m(e, t, a, l) {
          return W(E(t, e.length - a), e, a, l)
        }

        function Y(e, t, a, l) {
          return W(function(e) {
            for (var t = [], a = 0; a < e.length; ++a) t.push(255 & e.charCodeAt(a));
            return t
          }(t), e, a, l)
        }

        function Z(e, t, a, l) {
          return Y(e, t, a, l)
        }

        function L(e, t, a, l) {
          return W(O(t), e, a, l)
        }

        function C(e, t, a, l) {
          return W(function(e, t) {
            for (var a, l, n, r = [], i = 0; i < e.length && !((t -= 2) < 0); ++i) l = (a = e.charCodeAt(i)) >> 8, n = a % 256, r.push(n), r.push(l);
            return r
          }(t, e.length - a), e, a, l)
        }

        function T(e, t, a) {
          return 0 === t && a === e.length ? l.fromByteArray(e) : l.fromByteArray(e.slice(t, a))
        }

        function w(e, t, a) {
          a = Math.min(e.length, a);
          for (var l = [], n = t; n < a;) {
            var r, i, o, u, s = e[n],
              c = null,
              f = s > 239 ? 4 : s > 223 ? 3 : s > 191 ? 2 : 1;
            if (n + f <= a) switch (f) {
              case 1:
                s < 128 && (c = s);
                break;
              case 2:
                128 == (192 & (r = e[n + 1])) && ((u = (31 & s) << 6 | 63 & r) > 127 && (c = u));
                break;
              case 3:
                r = e[n + 1], i = e[n + 2], 128 == (192 & r) && 128 == (192 & i) && ((u = (15 & s) << 12 | (63 & r) << 6 | 63 & i) > 2047 && (u < 55296 || u > 57343) && (c = u));
                break;
              case 4:
                r = e[n + 1], i = e[n + 2], o = e[n + 3], 128 == (192 & r) && 128 == (192 & i) && 128 == (192 & o) && ((u = (15 & s) << 18 | (63 & r) << 12 | (63 & i) << 6 | 63 & o) > 65535 && u < 1114112 && (c = u))
            }
            null === c ? (c = 65533, f = 1) : c > 65535 && (c -= 65536, l.push(c >>> 10 & 1023 | 55296), c = 56320 | 1023 & c), l.push(c), n += f
          }
          return function(e) {
            var t = e.length;
            if (t <= 4096) return String.fromCharCode.apply(String, e);
            for (var a = "", l = 0; l < t;) a += String.fromCharCode.apply(String, e.slice(l, l += 4096));
            return a
          }(l)
        }

        function _(e, t, a) {
          var l = "";
          a = Math.min(e.length, a);
          for (var n = t; n < a; ++n) l += String.fromCharCode(127 & e[n]);
          return l
        }

        function X(e, t, a) {
          var l = "";
          a = Math.min(e.length, a);
          for (var n = t; n < a; ++n) l += String.fromCharCode(e[n]);
          return l
        }

        function J(e, t, a) {
          var l = e.length;
          (!t || t < 0) && (t = 0), (!a || a < 0 || a > l) && (a = l);
          for (var n = "", r = t; r < a; ++r) n += N(e[r]);
          return n
        }

        function P(e, t, a) {
          for (var l = e.slice(t, a), n = "", r = 0; r < l.length; r += 2) n += String.fromCharCode(l[r] + 256 * l[r + 1]);
          return n
        }

        function M(e, t, a) {
          if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
          if (e + t > a) throw new RangeError("Trying to access beyond buffer length")
        }

        function D(e, t, a, l, n, r) {
          if (!u.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
          if (t > n || t < r) throw new RangeError('"value" argument is out of bounds');
          if (a + l > e.length) throw new RangeError("Index out of range")
        }

        function x(e, t, a, l) {
          t < 0 && (t = 65535 + t + 1);
          for (var n = 0, r = Math.min(e.length - a, 2); n < r; ++n) e[a + n] = (t & 255 << 8 * (l ? n : 1 - n)) >>> 8 * (l ? n : 1 - n)
        }

        function B(e, t, a, l) {
          t < 0 && (t = 4294967295 + t + 1);
          for (var n = 0, r = Math.min(e.length - a, 4); n < r; ++n) e[a + n] = t >>> 8 * (l ? n : 3 - n) & 255
        }

        function H(e, t, a, l, n, r) {
          if (a + l > e.length) throw new RangeError("Index out of range");
          if (a < 0) throw new RangeError("Index out of range")
        }

        function Q(e, t, a, l, r) {
          return r || H(e, 0, a, 4), n.write(e, t, a, l, 23, 4), a + 4
        }

        function A(e, t, a, l, r) {
          return r || H(e, 0, a, 8), n.write(e, t, a, l, 52, 8), a + 8
        }
        t.Buffer = u, t.SlowBuffer = function(e) {
          return +e != e && (e = 0), u.alloc(+e)
        }, t.INSPECT_MAX_BYTES = 50, u.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function() {
          try {
            var e = new Uint8Array(1);
            return e.__proto__ = {
              __proto__: Uint8Array.prototype,
              foo: function() {
                return 42
              }
            }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
          } catch (e) {
            return !1
          }
        }(), t.kMaxLength = i(), u.poolSize = 8192, u._augment = function(e) {
          return e.__proto__ = u.prototype, e
        }, u.from = function(e, t, a) {
          return s(null, e, t, a)
        }, u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype, u.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, {
          value: null,
          configurable: !0
        })), u.alloc = function(e, t, a) {
          return function(e, t, a, l) {
            return c(t), t <= 0 ? o(e, t) : void 0 !== a ? "string" == typeof l ? o(e, t).fill(a, l) : o(e, t).fill(a) : o(e, t)
          }(null, e, t, a)
        }, u.allocUnsafe = function(e) {
          return f(null, e)
        }, u.allocUnsafeSlow = function(e) {
          return f(null, e)
        }, u.isBuffer = function(e) {
          return !(null == e || !e._isBuffer)
        }, u.compare = function(e, t) {
          if (!u.isBuffer(e) || !u.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
          if (e === t) return 0;
          for (var a = e.length, l = t.length, n = 0, r = Math.min(a, l); n < r; ++n)
            if (e[n] !== t[n]) {
              a = e[n], l = t[n];
              break
            } return a < l ? -1 : l < a ? 1 : 0
        }, u.isEncoding = function(e) {
          switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1
          }
        }, u.concat = function(e, t) {
          if (!r(e)) throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === e.length) return u.alloc(0);
          var a;
          if (void 0 === t)
            for (t = 0, a = 0; a < e.length; ++a) t += e[a].length;
          var l = u.allocUnsafe(t),
            n = 0;
          for (a = 0; a < e.length; ++a) {
            var i = e[a];
            if (!u.isBuffer(i)) throw new TypeError('"list" argument must be an Array of Buffers');
            i.copy(l, n), n += i.length
          }
          return l
        }, u.byteLength = d, u.prototype._isBuffer = !0, u.prototype.swap16 = function() {
          var e = this.length;
          if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (var t = 0; t < e; t += 2) p(this, t, t + 1);
          return this
        }, u.prototype.swap32 = function() {
          var e = this.length;
          if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (var t = 0; t < e; t += 4) p(this, t, t + 3), p(this, t + 1, t + 2);
          return this
        }, u.prototype.swap64 = function() {
          var e = this.length;
          if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (var t = 0; t < e; t += 8) p(this, t, t + 7), p(this, t + 1, t + 6), p(this, t + 2, t + 5), p(this, t + 3, t + 4);
          return this
        }, u.prototype.toString = function() {
          var e = 0 | this.length;
          return 0 === e ? "" : 0 === arguments.length ? w(this, 0, e) : b.apply(this, arguments)
        }, u.prototype.equals = function(e) {
          if (!u.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
          return this === e || 0 === u.compare(this, e)
        }, u.prototype.inspect = function() {
          var e = "",
            a = t.INSPECT_MAX_BYTES;
          return this.length > 0 && (e = this.toString("hex", 0, a).match(/.{2}/g).join(" "), this.length > a && (e += " ... ")), "<Buffer " + e + ">"
        }, u.prototype.compare = function(e, t, a, l, n) {
          if (!u.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
          if (void 0 === t && (t = 0), void 0 === a && (a = e ? e.length : 0), void 0 === l && (l = 0), void 0 === n && (n = this.length), t < 0 || a > e.length || l < 0 || n > this.length) throw new RangeError("out of range index");
          if (l >= n && t >= a) return 0;
          if (l >= n) return -1;
          if (t >= a) return 1;
          if (this === e) return 0;
          for (var r = (n >>>= 0) - (l >>>= 0), i = (a >>>= 0) - (t >>>= 0), o = Math.min(r, i), s = this.slice(l, n), c = e.slice(t, a), f = 0; f < o; ++f)
            if (s[f] !== c[f]) {
              r = s[f], i = c[f];
              break
            } return r < i ? -1 : i < r ? 1 : 0
        }, u.prototype.includes = function(e, t, a) {
          return -1 !== this.indexOf(e, t, a)
        }, u.prototype.indexOf = function(e, t, a) {
          return g(this, e, t, a, !0)
        }, u.prototype.lastIndexOf = function(e, t, a) {
          return g(this, e, t, a, !1)
        }, u.prototype.write = function(e, t, a, l) {
          if (void 0 === t) l = "utf8", a = this.length, t = 0;
          else if (void 0 === a && "string" == typeof t) l = t, a = this.length, t = 0;
          else {
            if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
            t |= 0, isFinite(a) ? (a |= 0, void 0 === l && (l = "utf8")) : (l = a, a = void 0)
          }
          var n = this.length - t;
          if ((void 0 === a || a > n) && (a = n), e.length > 0 && (a < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
          l || (l = "utf8");
          for (var r = !1;;) switch (l) {
            case "hex":
              return S(this, e, t, a);
            case "utf8":
            case "utf-8":
              return m(this, e, t, a);
            case "ascii":
              return Y(this, e, t, a);
            case "latin1":
            case "binary":
              return Z(this, e, t, a);
            case "base64":
              return L(this, e, t, a);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return C(this, e, t, a);
            default:
              if (r) throw new TypeError("Unknown encoding: " + l);
              l = ("" + l).toLowerCase(), r = !0
          }
        }, u.prototype.toJSON = function() {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
          }
        }, u.prototype.slice = function(e, t) {
          var a, l = this.length;
          if ((e = ~~e) < 0 ? (e += l) < 0 && (e = 0) : e > l && (e = l), (t = void 0 === t ? l : ~~t) < 0 ? (t += l) < 0 && (t = 0) : t > l && (t = l), t < e && (t = e), u.TYPED_ARRAY_SUPPORT)(a = this.subarray(e, t)).__proto__ = u.prototype;
          else {
            var n = t - e;
            a = new u(n, void 0);
            for (var r = 0; r < n; ++r) a[r] = this[r + e]
          }
          return a
        }, u.prototype.readUIntLE = function(e, t, a) {
          e |= 0, t |= 0, a || M(e, t, this.length);
          for (var l = this[e], n = 1, r = 0; ++r < t && (n *= 256);) l += this[e + r] * n;
          return l
        }, u.prototype.readUIntBE = function(e, t, a) {
          e |= 0, t |= 0, a || M(e, t, this.length);
          for (var l = this[e + --t], n = 1; t > 0 && (n *= 256);) l += this[e + --t] * n;
          return l
        }, u.prototype.readUInt8 = function(e, t) {
          return t || M(e, 1, this.length), this[e]
        }, u.prototype.readUInt16LE = function(e, t) {
          return t || M(e, 2, this.length), this[e] | this[e + 1] << 8
        }, u.prototype.readUInt16BE = function(e, t) {
          return t || M(e, 2, this.length), this[e] << 8 | this[e + 1]
        }, u.prototype.readUInt32LE = function(e, t) {
          return t || M(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
        }, u.prototype.readUInt32BE = function(e, t) {
          return t || M(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
        }, u.prototype.readIntLE = function(e, t, a) {
          e |= 0, t |= 0, a || M(e, t, this.length);
          for (var l = this[e], n = 1, r = 0; ++r < t && (n *= 256);) l += this[e + r] * n;
          return l >= (n *= 128) && (l -= Math.pow(2, 8 * t)), l
        }, u.prototype.readIntBE = function(e, t, a) {
          e |= 0, t |= 0, a || M(e, t, this.length);
          for (var l = t, n = 1, r = this[e + --l]; l > 0 && (n *= 256);) r += this[e + --l] * n;
          return r >= (n *= 128) && (r -= Math.pow(2, 8 * t)), r
        }, u.prototype.readInt8 = function(e, t) {
          return t || M(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
        }, u.prototype.readInt16LE = function(e, t) {
          t || M(e, 2, this.length);
          var a = this[e] | this[e + 1] << 8;
          return 32768 & a ? 4294901760 | a : a
        }, u.prototype.readInt16BE = function(e, t) {
          t || M(e, 2, this.length);
          var a = this[e + 1] | this[e] << 8;
          return 32768 & a ? 4294901760 | a : a
        }, u.prototype.readInt32LE = function(e, t) {
          return t || M(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
        }, u.prototype.readInt32BE = function(e, t) {
          return t || M(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
        }, u.prototype.readFloatLE = function(e, t) {
          return t || M(e, 4, this.length), n.read(this, e, !0, 23, 4)
        }, u.prototype.readFloatBE = function(e, t) {
          return t || M(e, 4, this.length), n.read(this, e, !1, 23, 4)
        }, u.prototype.readDoubleLE = function(e, t) {
          return t || M(e, 8, this.length), n.read(this, e, !0, 52, 8)
        }, u.prototype.readDoubleBE = function(e, t) {
          return t || M(e, 8, this.length), n.read(this, e, !1, 52, 8)
        }, u.prototype.writeUIntLE = function(e, t, a, l) {
          (e = +e, t |= 0, a |= 0, l) || D(this, e, t, a, Math.pow(2, 8 * a) - 1, 0);
          var n = 1,
            r = 0;
          for (this[t] = 255 & e; ++r < a && (n *= 256);) this[t + r] = e / n & 255;
          return t + a
        }, u.prototype.writeUIntBE = function(e, t, a, l) {
          (e = +e, t |= 0, a |= 0, l) || D(this, e, t, a, Math.pow(2, 8 * a) - 1, 0);
          var n = a - 1,
            r = 1;
          for (this[t + n] = 255 & e; --n >= 0 && (r *= 256);) this[t + n] = e / r & 255;
          return t + a
        }, u.prototype.writeUInt8 = function(e, t, a) {
          return e = +e, t |= 0, a || D(this, e, t, 1, 255, 0), u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
        }, u.prototype.writeUInt16LE = function(e, t, a) {
          return e = +e, t |= 0, a || D(this, e, t, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : x(this, e, t, !0), t + 2
        }, u.prototype.writeUInt16BE = function(e, t, a) {
          return e = +e, t |= 0, a || D(this, e, t, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : x(this, e, t, !1), t + 2
        }, u.prototype.writeUInt32LE = function(e, t, a) {
          return e = +e, t |= 0, a || D(this, e, t, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : B(this, e, t, !0), t + 4
        }, u.prototype.writeUInt32BE = function(e, t, a) {
          return e = +e, t |= 0, a || D(this, e, t, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : B(this, e, t, !1), t + 4
        }, u.prototype.writeIntLE = function(e, t, a, l) {
          if (e = +e, t |= 0, !l) {
            var n = Math.pow(2, 8 * a - 1);
            D(this, e, t, a, n - 1, -n)
          }
          var r = 0,
            i = 1,
            o = 0;
          for (this[t] = 255 & e; ++r < a && (i *= 256);) e < 0 && 0 === o && 0 !== this[t + r - 1] && (o = 1), this[t + r] = (e / i >> 0) - o & 255;
          return t + a
        }, u.prototype.writeIntBE = function(e, t, a, l) {
          if (e = +e, t |= 0, !l) {
            var n = Math.pow(2, 8 * a - 1);
            D(this, e, t, a, n - 1, -n)
          }
          var r = a - 1,
            i = 1,
            o = 0;
          for (this[t + r] = 255 & e; --r >= 0 && (i *= 256);) e < 0 && 0 === o && 0 !== this[t + r + 1] && (o = 1), this[t + r] = (e / i >> 0) - o & 255;
          return t + a
        }, u.prototype.writeInt8 = function(e, t, a) {
          return e = +e, t |= 0, a || D(this, e, t, 1, 127, -128), u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
        }, u.prototype.writeInt16LE = function(e, t, a) {
          return e = +e, t |= 0, a || D(this, e, t, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : x(this, e, t, !0), t + 2
        }, u.prototype.writeInt16BE = function(e, t, a) {
          return e = +e, t |= 0, a || D(this, e, t, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : x(this, e, t, !1), t + 2
        }, u.prototype.writeInt32LE = function(e, t, a) {
          return e = +e, t |= 0, a || D(this, e, t, 4, 2147483647, -2147483648), u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : B(this, e, t, !0), t + 4
        }, u.prototype.writeInt32BE = function(e, t, a) {
          return e = +e, t |= 0, a || D(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : B(this, e, t, !1), t + 4
        }, u.prototype.writeFloatLE = function(e, t, a) {
          return Q(this, e, t, !0, a)
        }, u.prototype.writeFloatBE = function(e, t, a) {
          return Q(this, e, t, !1, a)
        }, u.prototype.writeDoubleLE = function(e, t, a) {
          return A(this, e, t, !0, a)
        }, u.prototype.writeDoubleBE = function(e, t, a) {
          return A(this, e, t, !1, a)
        }, u.prototype.copy = function(e, t, a, l) {
          if (a || (a = 0), l || 0 === l || (l = this.length), t >= e.length && (t = e.length), t || (t = 0), l > 0 && l < a && (l = a), l === a) return 0;
          if (0 === e.length || 0 === this.length) return 0;
          if (t < 0) throw new RangeError("targetStart out of bounds");
          if (a < 0 || a >= this.length) throw new RangeError("sourceStart out of bounds");
          if (l < 0) throw new RangeError("sourceEnd out of bounds");
          l > this.length && (l = this.length), e.length - t < l - a && (l = e.length - t + a);
          var n, r = l - a;
          if (this === e && a < t && t < l)
            for (n = r - 1; n >= 0; --n) e[n + t] = this[n + a];
          else if (r < 1e3 || !u.TYPED_ARRAY_SUPPORT)
            for (n = 0; n < r; ++n) e[n + t] = this[n + a];
          else Uint8Array.prototype.set.call(e, this.subarray(a, a + r), t);
          return r
        }, u.prototype.fill = function(e, t, a, l) {
          if ("string" == typeof e) {
            if ("string" == typeof t ? (l = t, t = 0, a = this.length) : "string" == typeof a && (l = a, a = this.length), 1 === e.length) {
              var n = e.charCodeAt(0);
              n < 256 && (e = n)
            }
            if (void 0 !== l && "string" != typeof l) throw new TypeError("encoding must be a string");
            if ("string" == typeof l && !u.isEncoding(l)) throw new TypeError("Unknown encoding: " + l)
          } else "number" == typeof e && (e &= 255);
          if (t < 0 || this.length < t || this.length < a) throw new RangeError("Out of range index");
          if (a <= t) return this;
          var r;
          if (t >>>= 0, a = void 0 === a ? this.length : a >>> 0, e || (e = 0), "number" == typeof e)
            for (r = t; r < a; ++r) this[r] = e;
          else {
            var i = u.isBuffer(e) ? e : E(new u(e, l).toString()),
              o = i.length;
            for (r = 0; r < a - t; ++r) this[r + t] = i[r % o]
          }
          return this
        };
        var F = /[^+\/0-9A-Za-z-_]/g;

        function N(e) {
          return e < 16 ? "0" + e.toString(16) : e.toString(16)
        }

        function E(e, t) {
          var a;
          t = t || 1 / 0;
          for (var l = e.length, n = null, r = [], i = 0; i < l; ++i) {
            if ((a = e.charCodeAt(i)) > 55295 && a < 57344) {
              if (!n) {
                if (a > 56319) {
                  (t -= 3) > -1 && r.push(239, 191, 189);
                  continue
                }
                if (i + 1 === l) {
                  (t -= 3) > -1 && r.push(239, 191, 189);
                  continue
                }
                n = a;
                continue
              }
              if (a < 56320) {
                (t -= 3) > -1 && r.push(239, 191, 189), n = a;
                continue
              }
              a = 65536 + (n - 55296 << 10 | a - 56320)
            } else n && (t -= 3) > -1 && r.push(239, 191, 189);
            if (n = null, a < 128) {
              if ((t -= 1) < 0) break;
              r.push(a)
            } else if (a < 2048) {
              if ((t -= 2) < 0) break;
              r.push(a >> 6 | 192, 63 & a | 128)
            } else if (a < 65536) {
              if ((t -= 3) < 0) break;
              r.push(a >> 12 | 224, a >> 6 & 63 | 128, 63 & a | 128)
            } else {
              if (!(a < 1114112)) throw new Error("Invalid code point");
              if ((t -= 4) < 0) break;
              r.push(a >> 18 | 240, a >> 12 & 63 | 128, a >> 6 & 63 | 128, 63 & a | 128)
            }
          }
          return r
        }

        function O(e) {
          return l.toByteArray(function(e) {
            if ((e = function(e) {
                return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
              }(e).replace(F, "")).length < 2) return "";
            for (; e.length % 4 != 0;) e += "=";
            return e
          }(e))
        }

        function W(e, t, a, l) {
          for (var n = 0; n < l && !(n + a >= t.length || n >= e.length); ++n) t[n + a] = e[n];
          return n
        }
      }).call(this, a("0ee4"))
    },
    "19a2": function(e, t, a) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "both";
        return "both" == t ? e.replace(/^\s+|\s+$/g, "") : "left" == t ? e.replace(/^\s*/, "") : "right" == t ? e.replace(/(\s*$)/g, "") : "all" == t ? e.replace(/\s+/g, "") : e
      }
    },
    2194: function(e, t, a) {
      var l, n, r, i = a("3b2d");
      ! function(a, o) {
        "object" == i(t) ? e.exports = t = o() : (n = [], void 0 === (r = "function" == typeof(l = o) ? l.apply(t, n) : l) || (e.exports = r))
      }(0, (function() {
        var e, t, a, l, n, r, i, o, u, s, c, f, v, h, d, b, p, g, y, S, m, Y, Z, L, C, T, w, _, X, J, P, M, D, x, B, H, Q, A, F, N, E, O, W, k, G, R, K, I, $, j, z, U, q, V, ee, te, ae, le, ne, re, ie, oe, ue, se, ce, fe, ve, he, de, be, pe, ge, ye, Se, me, Ye, Ze, Le, Ce, Te, we, _e, Xe, Je, Pe, Me, De, xe, Be, He = He || (e = Math, t = Object.create || function(e) {
          var t;
          return Qe.prototype = e, t = new Qe, Qe.prototype = null, t
        }, l = (a = {}).lib = {}, n = l.Base = {
          extend: function(e) {
            var a = t(this);
            return e && a.mixIn(e), a.hasOwnProperty("init") && this.init !== a.init || (a.init = function() {
              a.$super.init.apply(this, arguments)
            }), (a.init.prototype = a).$super = this, a
          },
          create: function() {
            var e = this.extend();
            return e.init.apply(e, arguments), e
          },
          init: function() {},
          mixIn: function(e) {
            for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
            e.hasOwnProperty("toString") && (this.toString = e.toString)
          },
          clone: function() {
            return this.init.prototype.extend(this)
          }
        }, r = l.WordArray = n.extend({
          init: function(e, t) {
            e = this.words = e || [], this.sigBytes = null != t ? t : 4 * e.length
          },
          toString: function(e) {
            return (e || o).stringify(this)
          },
          concat: function(e) {
            var t = this.words,
              a = e.words,
              l = this.sigBytes,
              n = e.sigBytes;
            if (this.clamp(), l % 4)
              for (var r = 0; r < n; r++) {
                var i = a[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                t[l + r >>> 2] |= i << 24 - (l + r) % 4 * 8
              } else
                for (r = 0; r < n; r += 4) t[l + r >>> 2] = a[r >>> 2];
            return this.sigBytes += n, this
          },
          clamp: function() {
            var t = this.words,
              a = this.sigBytes;
            t[a >>> 2] &= 4294967295 << 32 - a % 4 * 8, t.length = e.ceil(a / 4)
          },
          clone: function() {
            var e = n.clone.call(this);
            return e.words = this.words.slice(0), e
          },
          random: function(t) {
            function a(t) {
              t = t;
              var a = 987654321,
                l = 4294967295;
              return function() {
                var n = ((a = 36969 * (65535 & a) + (a >> 16) & l) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & l) & l;
                return n /= 4294967296, (n += .5) * (.5 < e.random() ? 1 : -1)
              }
            }
            for (var l, n = [], i = 0; i < t; i += 4) {
              var o = a(4294967296 * (l || e.random()));
              l = 987654071 * o(), n.push(4294967296 * o() | 0)
            }
            return new r.init(n, t)
          }
        }), i = a.enc = {}, o = i.Hex = {
          stringify: function(e) {
            for (var t = e.words, a = e.sigBytes, l = [], n = 0; n < a; n++) {
              var r = t[n >>> 2] >>> 24 - n % 4 * 8 & 255;
              l.push((r >>> 4).toString(16)), l.push((15 & r).toString(16))
            }
            return l.join("")
          },
          parse: function(e) {
            for (var t = e.length, a = [], l = 0; l < t; l += 2) a[l >>> 3] |= parseInt(e.substr(l, 2), 16) << 24 - l % 8 * 4;
            return new r.init(a, t / 2)
          }
        }, u = i.Latin1 = {
          stringify: function(e) {
            for (var t = e.words, a = e.sigBytes, l = [], n = 0; n < a; n++) {
              var r = t[n >>> 2] >>> 24 - n % 4 * 8 & 255;
              l.push(String.fromCharCode(r))
            }
            return l.join("")
          },
          parse: function(e) {
            for (var t = e.length, a = [], l = 0; l < t; l++) a[l >>> 2] |= (255 & e.charCodeAt(l)) << 24 - l % 4 * 8;
            return new r.init(a, t)
          }
        }, s = i.Utf8 = {
          stringify: function(e) {
            try {
              return decodeURIComponent(escape(u.stringify(e)))
            } catch (e) {
              throw new Error("Malformed UTF-8 data")
            }
          },
          parse: function(e) {
            return u.parse(unescape(encodeURIComponent(e)))
          }
        }, c = l.BufferedBlockAlgorithm = n.extend({
          reset: function() {
            this._data = new r.init, this._nDataBytes = 0
          },
          _append: function(e) {
            "string" == typeof e && (e = s.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes
          },
          _process: function(t) {
            var a = this._data,
              l = a.words,
              n = a.sigBytes,
              i = this.blockSize,
              o = n / (4 * i),
              u = (o = t ? e.ceil(o) : e.max((0 | o) - this._minBufferSize, 0)) * i,
              s = e.min(4 * u, n);
            if (u) {
              for (var c = 0; c < u; c += i) this._doProcessBlock(l, c);
              var f = l.splice(0, u);
              a.sigBytes -= s
            }
            return new r.init(f, s)
          },
          clone: function() {
            var e = n.clone.call(this);
            return e._data = this._data.clone(), e
          },
          _minBufferSize: 0
        }), l.Hasher = c.extend({
          cfg: n.extend(),
          init: function(e) {
            this.cfg = this.cfg.extend(e), this.reset()
          },
          reset: function() {
            c.reset.call(this), this._doReset()
          },
          update: function(e) {
            return this._append(e), this._process(), this
          },
          finalize: function(e) {
            return e && this._append(e), this._doFinalize()
          },
          blockSize: 16,
          _createHelper: function(e) {
            return function(t, a) {
              return new e.init(a).finalize(t)
            }
          },
          _createHmacHelper: function(e) {
            return function(t, a) {
              return new f.HMAC.init(e, a).finalize(t)
            }
          }
        }), f = a.algo = {}, a);

        function Qe() {}

        function Ae(e, t, a) {
          return e ^ t ^ a
        }

        function Fe(e, t, a) {
          return e & t | ~e & a
        }

        function Ne(e, t, a) {
          return (e | ~t) ^ a
        }

        function Ee(e, t, a) {
          return e & a | t & ~a
        }

        function Oe(e, t, a) {
          return e ^ (t | ~a)
        }

        function We(e, t) {
          return e << t | e >>> 32 - t
        }

        function ke(e, t, a, l) {
          var n = this._iv;
          if (n) {
            var r = n.slice(0);
            this._iv = void 0
          } else r = this._prevBlock;
          l.encryptBlock(r, 0);
          for (var i = 0; i < a; i++) e[t + i] ^= r[i]
        }

        function Ge(e) {
          if (255 == (e >> 24 & 255)) {
            var t = e >> 16 & 255,
              a = e >> 8 & 255,
              l = 255 & e;
            255 === t ? (t = 0, 255 === a ? (a = 0, 255 === l ? l = 0 : ++l) : ++a) : ++t, e = 0, e += t << 16, e += a << 8, e += l
          } else e += 1 << 24;
          return e
        }

        function Re() {
          for (var e = this._X, t = this._C, a = 0; a < 8; a++) Le[a] = t[a];
          for (t[0] = t[0] + 1295307597 + this._b | 0, t[1] = t[1] + 3545052371 + (t[0] >>> 0 < Le[0] >>> 0 ? 1 : 0) | 0, t[2] = t[2] + 886263092 + (t[1] >>> 0 < Le[1] >>> 0 ? 1 : 0) | 0, t[3] = t[3] + 1295307597 + (t[2] >>> 0 < Le[2] >>> 0 ? 1 : 0) | 0, t[4] = t[4] + 3545052371 + (t[3] >>> 0 < Le[3] >>> 0 ? 1 : 0) | 0, t[5] = t[5] + 886263092 + (t[4] >>> 0 < Le[4] >>> 0 ? 1 : 0) | 0, t[6] = t[6] + 1295307597 + (t[5] >>> 0 < Le[5] >>> 0 ? 1 : 0) | 0, t[7] = t[7] + 3545052371 + (t[6] >>> 0 < Le[6] >>> 0 ? 1 : 0) | 0, this._b = t[7] >>> 0 < Le[7] >>> 0 ? 1 : 0, a = 0; a < 8; a++) {
            var l = e[a] + t[a],
              n = 65535 & l,
              r = l >>> 16,
              i = ((n * n >>> 17) + n * r >>> 15) + r * r,
              o = ((4294901760 & l) * l | 0) + ((65535 & l) * l | 0);
            Ce[a] = i ^ o
          }
          e[0] = Ce[0] + (Ce[7] << 16 | Ce[7] >>> 16) + (Ce[6] << 16 | Ce[6] >>> 16) | 0, e[1] = Ce[1] + (Ce[0] << 8 | Ce[0] >>> 24) + Ce[7] | 0, e[2] = Ce[2] + (Ce[1] << 16 | Ce[1] >>> 16) + (Ce[0] << 16 | Ce[0] >>> 16) | 0, e[3] = Ce[3] + (Ce[2] << 8 | Ce[2] >>> 24) + Ce[1] | 0, e[4] = Ce[4] + (Ce[3] << 16 | Ce[3] >>> 16) + (Ce[2] << 16 | Ce[2] >>> 16) | 0, e[5] = Ce[5] + (Ce[4] << 8 | Ce[4] >>> 24) + Ce[3] | 0, e[6] = Ce[6] + (Ce[5] << 16 | Ce[5] >>> 16) + (Ce[4] << 16 | Ce[4] >>> 16) | 0, e[7] = Ce[7] + (Ce[6] << 8 | Ce[6] >>> 24) + Ce[5] | 0
        }

        function Ke() {
          for (var e = this._X, t = this._C, a = 0; a < 8; a++) De[a] = t[a];
          for (t[0] = t[0] + 1295307597 + this._b | 0, t[1] = t[1] + 3545052371 + (t[0] >>> 0 < De[0] >>> 0 ? 1 : 0) | 0, t[2] = t[2] + 886263092 + (t[1] >>> 0 < De[1] >>> 0 ? 1 : 0) | 0, t[3] = t[3] + 1295307597 + (t[2] >>> 0 < De[2] >>> 0 ? 1 : 0) | 0, t[4] = t[4] + 3545052371 + (t[3] >>> 0 < De[3] >>> 0 ? 1 : 0) | 0, t[5] = t[5] + 886263092 + (t[4] >>> 0 < De[4] >>> 0 ? 1 : 0) | 0, t[6] = t[6] + 1295307597 + (t[5] >>> 0 < De[5] >>> 0 ? 1 : 0) | 0, t[7] = t[7] + 3545052371 + (t[6] >>> 0 < De[6] >>> 0 ? 1 : 0) | 0, this._b = t[7] >>> 0 < De[7] >>> 0 ? 1 : 0, a = 0; a < 8; a++) {
            var l = e[a] + t[a],
              n = 65535 & l,
              r = l >>> 16,
              i = ((n * n >>> 17) + n * r >>> 15) + r * r,
              o = ((4294901760 & l) * l | 0) + ((65535 & l) * l | 0);
            xe[a] = i ^ o
          }
          e[0] = xe[0] + (xe[7] << 16 | xe[7] >>> 16) + (xe[6] << 16 | xe[6] >>> 16) | 0, e[1] = xe[1] + (xe[0] << 8 | xe[0] >>> 24) + xe[7] | 0, e[2] = xe[2] + (xe[1] << 16 | xe[1] >>> 16) + (xe[0] << 16 | xe[0] >>> 16) | 0, e[3] = xe[3] + (xe[2] << 8 | xe[2] >>> 24) + xe[1] | 0, e[4] = xe[4] + (xe[3] << 16 | xe[3] >>> 16) + (xe[2] << 16 | xe[2] >>> 16) | 0, e[5] = xe[5] + (xe[4] << 8 | xe[4] >>> 24) + xe[3] | 0, e[6] = xe[6] + (xe[5] << 16 | xe[5] >>> 16) + (xe[4] << 16 | xe[4] >>> 16) | 0, e[7] = xe[7] + (xe[6] << 8 | xe[6] >>> 24) + xe[5] | 0
        }
        return v = He.lib.WordArray, He.enc.Base64 = {
            stringify: function(e) {
              var t = e.words,
                a = e.sigBytes,
                l = this._map;
              e.clamp();
              for (var n = [], r = 0; r < a; r += 3)
                for (var i = (t[r >>> 2] >>> 24 - r % 4 * 8 & 255) << 16 | (t[r + 1 >>> 2] >>> 24 - (r + 1) % 4 * 8 & 255) << 8 | t[r + 2 >>> 2] >>> 24 - (r + 2) % 4 * 8 & 255, o = 0; o < 4 && r + .75 * o < a; o++) n.push(l.charAt(i >>> 6 * (3 - o) & 63));
              var u = l.charAt(64);
              if (u)
                for (; n.length % 4;) n.push(u);
              return n.join("")
            },
            parse: function(e) {
              var t = e.length,
                a = this._map,
                l = this._reverseMap;
              if (!l) {
                l = this._reverseMap = [];
                for (var n = 0; n < a.length; n++) l[a.charCodeAt(n)] = n
              }
              var r = a.charAt(64);
              if (r) {
                var i = e.indexOf(r); - 1 !== i && (t = i)
              }
              return function(e, t, a) {
                for (var l = [], n = 0, r = 0; r < t; r++)
                  if (r % 4) {
                    var i = a[e.charCodeAt(r - 1)] << r % 4 * 2,
                      o = a[e.charCodeAt(r)] >>> 6 - r % 4 * 2;
                    l[n >>> 2] |= (i | o) << 24 - n % 4 * 8, n++
                  } return v.create(l, n)
              }(e, t, l)
            },
            _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
          },
          function(e) {
            var t = He,
              a = t.lib,
              l = a.WordArray,
              n = a.Hasher,
              r = t.algo,
              i = [];
            ! function() {
              for (var t = 0; t < 64; t++) i[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0
            }();
            var o = r.MD5 = n.extend({
              _doReset: function() {
                this._hash = new l.init([1732584193, 4023233417, 2562383102, 271733878])
              },
              _doProcessBlock: function(e, t) {
                for (var a = 0; a < 16; a++) {
                  var l = t + a,
                    n = e[l];
                  e[l] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8)
                }
                var r = this._hash.words,
                  o = e[t + 0],
                  v = e[t + 1],
                  h = e[t + 2],
                  d = e[t + 3],
                  b = e[t + 4],
                  p = e[t + 5],
                  g = e[t + 6],
                  y = e[t + 7],
                  S = e[t + 8],
                  m = e[t + 9],
                  Y = e[t + 10],
                  Z = e[t + 11],
                  L = e[t + 12],
                  C = e[t + 13],
                  T = e[t + 14],
                  w = e[t + 15],
                  _ = r[0],
                  X = r[1],
                  J = r[2],
                  P = r[3];
                _ = u(_, X, J, P, o, 7, i[0]), P = u(P, _, X, J, v, 12, i[1]), J = u(J, P, _, X, h, 17, i[2]), X = u(X, J, P, _, d, 22, i[3]), _ = u(_, X, J, P, b, 7, i[4]), P = u(P, _, X, J, p, 12, i[5]), J = u(J, P, _, X, g, 17, i[6]), X = u(X, J, P, _, y, 22, i[7]), _ = u(_, X, J, P, S, 7, i[8]), P = u(P, _, X, J, m, 12, i[9]), J = u(J, P, _, X, Y, 17, i[10]), X = u(X, J, P, _, Z, 22, i[11]), _ = u(_, X, J, P, L, 7, i[12]), P = u(P, _, X, J, C, 12, i[13]), J = u(J, P, _, X, T, 17, i[14]), _ = s(_, X = u(X, J, P, _, w, 22, i[15]), J, P, v, 5, i[16]), P = s(P, _, X, J, g, 9, i[17]), J = s(J, P, _, X, Z, 14, i[18]), X = s(X, J, P, _, o, 20, i[19]), _ = s(_, X, J, P, p, 5, i[20]), P = s(P, _, X, J, Y, 9, i[21]), J = s(J, P, _, X, w, 14, i[22]), X = s(X, J, P, _, b, 20, i[23]), _ = s(_, X, J, P, m, 5, i[24]), P = s(P, _, X, J, T, 9, i[25]), J = s(J, P, _, X, d, 14, i[26]), X = s(X, J, P, _, S, 20, i[27]), _ = s(_, X, J, P, C, 5, i[28]), P = s(P, _, X, J, h, 9, i[29]), J = s(J, P, _, X, y, 14, i[30]), _ = c(_, X = s(X, J, P, _, L, 20, i[31]), J, P, p, 4, i[32]), P = c(P, _, X, J, S, 11, i[33]), J = c(J, P, _, X, Z, 16, i[34]), X = c(X, J, P, _, T, 23, i[35]), _ = c(_, X, J, P, v, 4, i[36]), P = c(P, _, X, J, b, 11, i[37]), J = c(J, P, _, X, y, 16, i[38]), X = c(X, J, P, _, Y, 23, i[39]), _ = c(_, X, J, P, C, 4, i[40]), P = c(P, _, X, J, o, 11, i[41]), J = c(J, P, _, X, d, 16, i[42]), X = c(X, J, P, _, g, 23, i[43]), _ = c(_, X, J, P, m, 4, i[44]), P = c(P, _, X, J, L, 11, i[45]), J = c(J, P, _, X, w, 16, i[46]), _ = f(_, X = c(X, J, P, _, h, 23, i[47]), J, P, o, 6, i[48]), P = f(P, _, X, J, y, 10, i[49]), J = f(J, P, _, X, T, 15, i[50]), X = f(X, J, P, _, p, 21, i[51]), _ = f(_, X, J, P, L, 6, i[52]), P = f(P, _, X, J, d, 10, i[53]), J = f(J, P, _, X, Y, 15, i[54]), X = f(X, J, P, _, v, 21, i[55]), _ = f(_, X, J, P, S, 6, i[56]), P = f(P, _, X, J, w, 10, i[57]), J = f(J, P, _, X, g, 15, i[58]), X = f(X, J, P, _, C, 21, i[59]), _ = f(_, X, J, P, b, 6, i[60]), P = f(P, _, X, J, Z, 10, i[61]), J = f(J, P, _, X, h, 15, i[62]), X = f(X, J, P, _, m, 21, i[63]), r[0] = r[0] + _ | 0, r[1] = r[1] + X | 0, r[2] = r[2] + J | 0, r[3] = r[3] + P | 0
              },
              _doFinalize: function() {
                var t = this._data,
                  a = t.words,
                  l = 8 * this._nDataBytes,
                  n = 8 * t.sigBytes;
                a[n >>> 5] |= 128 << 24 - n % 32;
                var r = e.floor(l / 4294967296),
                  i = l;
                a[15 + (64 + n >>> 9 << 4)] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8), a[14 + (64 + n >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), t.sigBytes = 4 * (a.length + 1), this._process();
                for (var o = this._hash, u = o.words, s = 0; s < 4; s++) {
                  var c = u[s];
                  u[s] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8)
                }
                return o
              },
              clone: function() {
                var e = n.clone.call(this);
                return e._hash = this._hash.clone(), e
              }
            });

            function u(e, t, a, l, n, r, i) {
              var o = e + (t & a | ~t & l) + n + i;
              return (o << r | o >>> 32 - r) + t
            }

            function s(e, t, a, l, n, r, i) {
              var o = e + (t & l | a & ~l) + n + i;
              return (o << r | o >>> 32 - r) + t
            }

            function c(e, t, a, l, n, r, i) {
              var o = e + (t ^ a ^ l) + n + i;
              return (o << r | o >>> 32 - r) + t
            }

            function f(e, t, a, l, n, r, i) {
              var o = e + (a ^ (t | ~l)) + n + i;
              return (o << r | o >>> 32 - r) + t
            }
            t.MD5 = n._createHelper(o), t.HmacMD5 = n._createHmacHelper(o)
          }(Math), d = (h = He).lib, b = d.WordArray, p = d.Hasher, g = h.algo, y = [], S = g.SHA1 = p.extend({
            _doReset: function() {
              this._hash = new b.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
            },
            _doProcessBlock: function(e, t) {
              for (var a = this._hash.words, l = a[0], n = a[1], r = a[2], i = a[3], o = a[4], u = 0; u < 80; u++) {
                if (u < 16) y[u] = 0 | e[t + u];
                else {
                  var s = y[u - 3] ^ y[u - 8] ^ y[u - 14] ^ y[u - 16];
                  y[u] = s << 1 | s >>> 31
                }
                var c = (l << 5 | l >>> 27) + o + y[u];
                c += u < 20 ? 1518500249 + (n & r | ~n & i) : u < 40 ? 1859775393 + (n ^ r ^ i) : u < 60 ? (n & r | n & i | r & i) - 1894007588 : (n ^ r ^ i) - 899497514, o = i, i = r, r = n << 30 | n >>> 2, n = l, l = c
              }
              a[0] = a[0] + l | 0, a[1] = a[1] + n | 0, a[2] = a[2] + r | 0, a[3] = a[3] + i | 0, a[4] = a[4] + o | 0
            },
            _doFinalize: function() {
              var e = this._data,
                t = e.words,
                a = 8 * this._nDataBytes,
                l = 8 * e.sigBytes;
              return t[l >>> 5] |= 128 << 24 - l % 32, t[14 + (64 + l >>> 9 << 4)] = Math.floor(a / 4294967296), t[15 + (64 + l >>> 9 << 4)] = a, e.sigBytes = 4 * t.length, this._process(), this._hash
            },
            clone: function() {
              var e = p.clone.call(this);
              return e._hash = this._hash.clone(), e
            }
          }), h.SHA1 = p._createHelper(S), h.HmacSHA1 = p._createHmacHelper(S),
          function(e) {
            var t = He,
              a = t.lib,
              l = a.WordArray,
              n = a.Hasher,
              r = t.algo,
              i = [],
              o = [];
            ! function() {
              function t(t) {
                for (var a = e.sqrt(t), l = 2; l <= a; l++)
                  if (!(t % l)) return;
                return 1
              }

              function a(e) {
                return 4294967296 * (e - (0 | e)) | 0
              }
              for (var l = 2, n = 0; n < 64;) t(l) && (n < 8 && (i[n] = a(e.pow(l, .5))), o[n] = a(e.pow(l, 1 / 3)), n++), l++
            }();
            var u = [],
              s = r.SHA256 = n.extend({
                _doReset: function() {
                  this._hash = new l.init(i.slice(0))
                },
                _doProcessBlock: function(e, t) {
                  for (var a = this._hash.words, l = a[0], n = a[1], r = a[2], i = a[3], s = a[4], c = a[5], f = a[6], v = a[7], h = 0; h < 64; h++) {
                    if (h < 16) u[h] = 0 | e[t + h];
                    else {
                      var d = u[h - 15],
                        b = (d << 25 | d >>> 7) ^ (d << 14 | d >>> 18) ^ d >>> 3,
                        p = u[h - 2],
                        g = (p << 15 | p >>> 17) ^ (p << 13 | p >>> 19) ^ p >>> 10;
                      u[h] = b + u[h - 7] + g + u[h - 16]
                    }
                    var y = l & n ^ l & r ^ n & r,
                      S = (l << 30 | l >>> 2) ^ (l << 19 | l >>> 13) ^ (l << 10 | l >>> 22),
                      m = v + ((s << 26 | s >>> 6) ^ (s << 21 | s >>> 11) ^ (s << 7 | s >>> 25)) + (s & c ^ ~s & f) + o[h] + u[h];
                    v = f, f = c, c = s, s = i + m | 0, i = r, r = n, n = l, l = m + (S + y) | 0
                  }
                  a[0] = a[0] + l | 0, a[1] = a[1] + n | 0, a[2] = a[2] + r | 0, a[3] = a[3] + i | 0, a[4] = a[4] + s | 0, a[5] = a[5] + c | 0, a[6] = a[6] + f | 0, a[7] = a[7] + v | 0
                },
                _doFinalize: function() {
                  var t = this._data,
                    a = t.words,
                    l = 8 * this._nDataBytes,
                    n = 8 * t.sigBytes;
                  return a[n >>> 5] |= 128 << 24 - n % 32, a[14 + (64 + n >>> 9 << 4)] = e.floor(l / 4294967296), a[15 + (64 + n >>> 9 << 4)] = l, t.sigBytes = 4 * a.length, this._process(), this._hash
                },
                clone: function() {
                  var e = n.clone.call(this);
                  return e._hash = this._hash.clone(), e
                }
              });
            t.SHA256 = n._createHelper(s), t.HmacSHA256 = n._createHmacHelper(s)
          }(Math),
          function() {
            var e = He.lib.WordArray,
              t = He.enc;

            function a(e) {
              return e << 8 & 4278255360 | e >>> 8 & 16711935
            }
            t.Utf16 = t.Utf16BE = {
              stringify: function(e) {
                for (var t = e.words, a = e.sigBytes, l = [], n = 0; n < a; n += 2) {
                  var r = t[n >>> 2] >>> 16 - n % 4 * 8 & 65535;
                  l.push(String.fromCharCode(r))
                }
                return l.join("")
              },
              parse: function(t) {
                for (var a = t.length, l = [], n = 0; n < a; n++) l[n >>> 1] |= t.charCodeAt(n) << 16 - n % 2 * 16;
                return e.create(l, 2 * a)
              }
            }, t.Utf16LE = {
              stringify: function(e) {
                for (var t = e.words, l = e.sigBytes, n = [], r = 0; r < l; r += 2) {
                  var i = a(t[r >>> 2] >>> 16 - r % 4 * 8 & 65535);
                  n.push(String.fromCharCode(i))
                }
                return n.join("")
              },
              parse: function(t) {
                for (var l = t.length, n = [], r = 0; r < l; r++) n[r >>> 1] |= a(t.charCodeAt(r) << 16 - r % 2 * 16);
                return e.create(n, 2 * l)
              }
            }
          }(),
          function() {
            if ("function" == typeof ArrayBuffer) {
              var e = He.lib.WordArray,
                t = e.init;
              (e.init = function(e) {
                if (e instanceof ArrayBuffer && (e = new Uint8Array(e)), (e instanceof Int8Array || "undefined" != typeof Uint8ClampedArray && e instanceof Uint8ClampedArray || e instanceof Int16Array || e instanceof Uint16Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Float32Array || e instanceof Float64Array) && (e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength)), e instanceof Uint8Array) {
                  for (var a = e.byteLength, l = [], n = 0; n < a; n++) l[n >>> 2] |= e[n] << 24 - n % 4 * 8;
                  t.call(this, l, a)
                } else t.apply(this, arguments)
              }).prototype = e
            }
          }(), Math, Y = (m = He).lib, Z = Y.WordArray, L = Y.Hasher, C = m.algo, T = Z.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]), w = Z.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]), _ = Z.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]), X = Z.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]), J = Z.create([0, 1518500249, 1859775393, 2400959708, 2840853838]), P = Z.create([1352829926, 1548603684, 1836072691, 2053994217, 0]), M = C.RIPEMD160 = L.extend({
            _doReset: function() {
              this._hash = Z.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
            },
            _doProcessBlock: function(e, t) {
              for (var a = 0; a < 16; a++) {
                var l = t + a,
                  n = e[l];
                e[l] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8)
              }
              var r, i, o, u, s, c, f, v, h, d, b, p = this._hash.words,
                g = J.words,
                y = P.words,
                S = T.words,
                m = w.words,
                Y = _.words,
                Z = X.words;
              for (c = r = p[0], f = i = p[1], v = o = p[2], h = u = p[3], d = s = p[4], a = 0; a < 80; a += 1) b = r + e[t + S[a]] | 0, b += a < 16 ? Ae(i, o, u) + g[0] : a < 32 ? Fe(i, o, u) + g[1] : a < 48 ? Ne(i, o, u) + g[2] : a < 64 ? Ee(i, o, u) + g[3] : Oe(i, o, u) + g[4], b = (b = We(b |= 0, Y[a])) + s | 0, r = s, s = u, u = We(o, 10), o = i, i = b, b = c + e[t + m[a]] | 0, b += a < 16 ? Oe(f, v, h) + y[0] : a < 32 ? Ee(f, v, h) + y[1] : a < 48 ? Ne(f, v, h) + y[2] : a < 64 ? Fe(f, v, h) + y[3] : Ae(f, v, h) + y[4], b = (b = We(b |= 0, Z[a])) + d | 0, c = d, d = h, h = We(v, 10), v = f, f = b;
              b = p[1] + o + h | 0, p[1] = p[2] + u + d | 0, p[2] = p[3] + s + c | 0, p[3] = p[4] + r + f | 0, p[4] = p[0] + i + v | 0, p[0] = b
            },
            _doFinalize: function() {
              var e = this._data,
                t = e.words,
                a = 8 * this._nDataBytes,
                l = 8 * e.sigBytes;
              t[l >>> 5] |= 128 << 24 - l % 32, t[14 + (64 + l >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), e.sigBytes = 4 * (t.length + 1), this._process();
              for (var n = this._hash, r = n.words, i = 0; i < 5; i++) {
                var o = r[i];
                r[i] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8)
              }
              return n
            },
            clone: function() {
              var e = L.clone.call(this);
              return e._hash = this._hash.clone(), e
            }
          }), m.RIPEMD160 = L._createHelper(M), m.HmacRIPEMD160 = L._createHmacHelper(M), D = He.lib.Base, x = He.enc.Utf8, He.algo.HMAC = D.extend({
            init: function(e, t) {
              e = this._hasher = new e.init, "string" == typeof t && (t = x.parse(t));
              var a = e.blockSize,
                l = 4 * a;
              t.sigBytes > l && (t = e.finalize(t)), t.clamp();
              for (var n = this._oKey = t.clone(), r = this._iKey = t.clone(), i = n.words, o = r.words, u = 0; u < a; u++) i[u] ^= 1549556828, o[u] ^= 909522486;
              n.sigBytes = r.sigBytes = l, this.reset()
            },
            reset: function() {
              var e = this._hasher;
              e.reset(), e.update(this._iKey)
            },
            update: function(e) {
              return this._hasher.update(e), this
            },
            finalize: function(e) {
              var t = this._hasher,
                a = t.finalize(e);
              return t.reset(), t.finalize(this._oKey.clone().concat(a))
            }
          }), Q = (H = (B = He).lib).Base, A = H.WordArray, N = (F = B.algo).SHA1, E = F.HMAC, O = F.PBKDF2 = Q.extend({
            cfg: Q.extend({
              keySize: 4,
              hasher: N,
              iterations: 1
            }),
            init: function(e) {
              this.cfg = this.cfg.extend(e)
            },
            compute: function(e, t) {
              for (var a = this.cfg, l = E.create(a.hasher, e), n = A.create(), r = A.create([1]), i = n.words, o = r.words, u = a.keySize, s = a.iterations; i.length < u;) {
                var c = l.update(t).finalize(r);
                l.reset();
                for (var f = c.words, v = f.length, h = c, d = 1; d < s; d++) {
                  h = l.finalize(h), l.reset();
                  for (var b = h.words, p = 0; p < v; p++) f[p] ^= b[p]
                }
                n.concat(c), o[0]++
              }
              return n.sigBytes = 4 * u, n
            }
          }), B.PBKDF2 = function(e, t, a) {
            return O.create(a).compute(e, t)
          }, G = (k = (W = He).lib).Base, R = k.WordArray, I = (K = W.algo).MD5, $ = K.EvpKDF = G.extend({
            cfg: G.extend({
              keySize: 4,
              hasher: I,
              iterations: 1
            }),
            init: function(e) {
              this.cfg = this.cfg.extend(e)
            },
            compute: function(e, t) {
              for (var a = this.cfg, l = a.hasher.create(), n = R.create(), r = n.words, i = a.keySize, o = a.iterations; r.length < i;) {
                u && l.update(u);
                var u = l.update(e).finalize(t);
                l.reset();
                for (var s = 1; s < o; s++) u = l.finalize(u), l.reset();
                n.concat(u)
              }
              return n.sigBytes = 4 * i, n
            }
          }), W.EvpKDF = function(e, t, a) {
            return $.create(a).compute(e, t)
          }, z = (j = He).lib.WordArray, U = j.algo, q = U.SHA256, V = U.SHA224 = q.extend({
            _doReset: function() {
              this._hash = new z.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428])
            },
            _doFinalize: function() {
              var e = q._doFinalize.call(this);
              return e.sigBytes -= 4, e
            }
          }), j.SHA224 = q._createHelper(V), j.HmacSHA224 = q._createHmacHelper(V), ee = He.lib, te = ee.Base, ae = ee.WordArray, (le = He.x64 = {}).Word = te.extend({
            init: function(e, t) {
              this.high = e, this.low = t
            }
          }), le.WordArray = te.extend({
            init: function(e, t) {
              e = this.words = e || [], this.sigBytes = null != t ? t : 8 * e.length
            },
            toX32: function() {
              for (var e = this.words, t = e.length, a = [], l = 0; l < t; l++) {
                var n = e[l];
                a.push(n.high), a.push(n.low)
              }
              return ae.create(a, this.sigBytes)
            },
            clone: function() {
              for (var e = te.clone.call(this), t = e.words = this.words.slice(0), a = t.length, l = 0; l < a; l++) t[l] = t[l].clone();
              return e
            }
          }),
          function(e) {
            var t = He,
              a = t.lib,
              l = a.WordArray,
              n = a.Hasher,
              r = t.x64.Word,
              i = t.algo,
              o = [],
              u = [],
              s = [];
            ! function() {
              for (var e = 1, t = 0, a = 0; a < 24; a++) {
                o[e + 5 * t] = (a + 1) * (a + 2) / 2 % 64;
                var l = (2 * e + 3 * t) % 5;
                e = t % 5, t = l
              }
              for (e = 0; e < 5; e++)
                for (t = 0; t < 5; t++) u[e + 5 * t] = t + (2 * e + 3 * t) % 5 * 5;
              for (var n = 1, i = 0; i < 24; i++) {
                for (var c = 0, f = 0, v = 0; v < 7; v++) {
                  if (1 & n) {
                    var h = (1 << v) - 1;
                    h < 32 ? f ^= 1 << h : c ^= 1 << h - 32
                  }
                  128 & n ? n = n << 1 ^ 113 : n <<= 1
                }
                s[i] = r.create(c, f)
              }
            }();
            var c = [];
            ! function() {
              for (var e = 0; e < 25; e++) c[e] = r.create()
            }();
            var f = i.SHA3 = n.extend({
              cfg: n.cfg.extend({
                outputLength: 512
              }),
              _doReset: function() {
                for (var e = this._state = [], t = 0; t < 25; t++) e[t] = new r.init;
                this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32
              },
              _doProcessBlock: function(e, t) {
                for (var a = this._state, l = this.blockSize / 2, n = 0; n < l; n++) {
                  var r = e[t + 2 * n],
                    i = e[t + 2 * n + 1];
                  r = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8), i = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), (X = a[n]).high ^= i, X.low ^= r
                }
                for (var f = 0; f < 24; f++) {
                  for (var v = 0; v < 5; v++) {
                    for (var h = 0, d = 0, b = 0; b < 5; b++) h ^= (X = a[v + 5 * b]).high, d ^= X.low;
                    var p = c[v];
                    p.high = h, p.low = d
                  }
                  for (v = 0; v < 5; v++) {
                    var g = c[(v + 4) % 5],
                      y = c[(v + 1) % 5],
                      S = y.high,
                      m = y.low;
                    for (h = g.high ^ (S << 1 | m >>> 31), d = g.low ^ (m << 1 | S >>> 31), b = 0; b < 5; b++)(X = a[v + 5 * b]).high ^= h, X.low ^= d
                  }
                  for (var Y = 1; Y < 25; Y++) {
                    var Z = (X = a[Y]).high,
                      L = X.low,
                      C = o[Y];
                    C < 32 ? (h = Z << C | L >>> 32 - C, d = L << C | Z >>> 32 - C) : (h = L << C - 32 | Z >>> 64 - C, d = Z << C - 32 | L >>> 64 - C);
                    var T = c[u[Y]];
                    T.high = h, T.low = d
                  }
                  var w = c[0],
                    _ = a[0];
                  for (w.high = _.high, w.low = _.low, v = 0; v < 5; v++)
                    for (b = 0; b < 5; b++) {
                      var X = a[Y = v + 5 * b],
                        J = c[Y],
                        P = c[(v + 1) % 5 + 5 * b],
                        M = c[(v + 2) % 5 + 5 * b];
                      X.high = J.high ^ ~P.high & M.high, X.low = J.low ^ ~P.low & M.low
                    }
                  X = a[0];
                  var D = s[f];
                  X.high ^= D.high, X.low ^= D.low
                }
              },
              _doFinalize: function() {
                var t = this._data,
                  a = t.words,
                  n = (this._nDataBytes, 8 * t.sigBytes),
                  r = 32 * this.blockSize;
                a[n >>> 5] |= 1 << 24 - n % 32, a[(e.ceil((1 + n) / r) * r >>> 5) - 1] |= 128, t.sigBytes = 4 * a.length, this._process();
                for (var i = this._state, o = this.cfg.outputLength / 8, u = o / 8, s = [], c = 0; c < u; c++) {
                  var f = i[c],
                    v = f.high,
                    h = f.low;
                  v = 16711935 & (v << 8 | v >>> 24) | 4278255360 & (v << 24 | v >>> 8), h = 16711935 & (h << 8 | h >>> 24) | 4278255360 & (h << 24 | h >>> 8), s.push(h), s.push(v)
                }
                return new l.init(s, o)
              },
              clone: function() {
                for (var e = n.clone.call(this), t = e._state = this._state.slice(0), a = 0; a < 25; a++) t[a] = t[a].clone();
                return e
              }
            });
            t.SHA3 = n._createHelper(f), t.HmacSHA3 = n._createHmacHelper(f)
          }(Math),
          function() {
            var e = He,
              t = e.lib.Hasher,
              a = e.x64,
              l = a.Word,
              n = a.WordArray,
              r = e.algo;

            function i() {
              return l.create.apply(l, arguments)
            }
            var o = [i(1116352408, 3609767458), i(1899447441, 602891725), i(3049323471, 3964484399), i(3921009573, 2173295548), i(961987163, 4081628472), i(1508970993, 3053834265), i(2453635748, 2937671579), i(2870763221, 3664609560), i(3624381080, 2734883394), i(310598401, 1164996542), i(607225278, 1323610764), i(1426881987, 3590304994), i(1925078388, 4068182383), i(2162078206, 991336113), i(2614888103, 633803317), i(3248222580, 3479774868), i(3835390401, 2666613458), i(4022224774, 944711139), i(264347078, 2341262773), i(604807628, 2007800933), i(770255983, 1495990901), i(1249150122, 1856431235), i(1555081692, 3175218132), i(1996064986, 2198950837), i(2554220882, 3999719339), i(2821834349, 766784016), i(2952996808, 2566594879), i(3210313671, 3203337956), i(3336571891, 1034457026), i(3584528711, 2466948901), i(113926993, 3758326383), i(338241895, 168717936), i(666307205, 1188179964), i(773529912, 1546045734), i(1294757372, 1522805485), i(1396182291, 2643833823), i(1695183700, 2343527390), i(1986661051, 1014477480), i(2177026350, 1206759142), i(2456956037, 344077627), i(2730485921, 1290863460), i(2820302411, 3158454273), i(3259730800, 3505952657), i(3345764771, 106217008), i(3516065817, 3606008344), i(3600352804, 1432725776), i(4094571909, 1467031594), i(275423344, 851169720), i(430227734, 3100823752), i(506948616, 1363258195), i(659060556, 3750685593), i(883997877, 3785050280), i(958139571, 3318307427), i(1322822218, 3812723403), i(1537002063, 2003034995), i(1747873779, 3602036899), i(1955562222, 1575990012), i(2024104815, 1125592928), i(2227730452, 2716904306), i(2361852424, 442776044), i(2428436474, 593698344), i(2756734187, 3733110249), i(3204031479, 2999351573), i(3329325298, 3815920427), i(3391569614, 3928383900), i(3515267271, 566280711), i(3940187606, 3454069534), i(4118630271, 4000239992), i(116418474, 1914138554), i(174292421, 2731055270), i(289380356, 3203993006), i(460393269, 320620315), i(685471733, 587496836), i(852142971, 1086792851), i(1017036298, 365543100), i(1126000580, 2618297676), i(1288033470, 3409855158), i(1501505948, 4234509866), i(1607167915, 987167468), i(1816402316, 1246189591)],
              u = [];
            ! function() {
              for (var e = 0; e < 80; e++) u[e] = i()
            }();
            var s = r.SHA512 = t.extend({
              _doReset: function() {
                this._hash = new n.init([new l.init(1779033703, 4089235720), new l.init(3144134277, 2227873595), new l.init(1013904242, 4271175723), new l.init(2773480762, 1595750129), new l.init(1359893119, 2917565137), new l.init(2600822924, 725511199), new l.init(528734635, 4215389547), new l.init(1541459225, 327033209)])
              },
              _doProcessBlock: function(e, t) {
                for (var a = this._hash.words, l = a[0], n = a[1], r = a[2], i = a[3], s = a[4], c = a[5], f = a[6], v = a[7], h = l.high, d = l.low, b = n.high, p = n.low, g = r.high, y = r.low, S = i.high, m = i.low, Y = s.high, Z = s.low, L = c.high, C = c.low, T = f.high, w = f.low, _ = v.high, X = v.low, J = h, P = d, M = b, D = p, x = g, B = y, H = S, Q = m, A = Y, F = Z, N = L, E = C, O = T, W = w, k = _, G = X, R = 0; R < 80; R++) {
                  var K = u[R];
                  if (R < 16) var I = K.high = 0 | e[t + 2 * R],
                    $ = K.low = 0 | e[t + 2 * R + 1];
                  else {
                    var j = u[R - 15],
                      z = j.high,
                      U = j.low,
                      q = (z >>> 1 | U << 31) ^ (z >>> 8 | U << 24) ^ z >>> 7,
                      V = (U >>> 1 | z << 31) ^ (U >>> 8 | z << 24) ^ (U >>> 7 | z << 25),
                      ee = u[R - 2],
                      te = ee.high,
                      ae = ee.low,
                      le = (te >>> 19 | ae << 13) ^ (te << 3 | ae >>> 29) ^ te >>> 6,
                      ne = (ae >>> 19 | te << 13) ^ (ae << 3 | te >>> 29) ^ (ae >>> 6 | te << 26),
                      re = u[R - 7],
                      ie = re.high,
                      oe = re.low,
                      ue = u[R - 16],
                      se = ue.high,
                      ce = ue.low;
                    I = (I = (I = q + ie + (($ = V + oe) >>> 0 < V >>> 0 ? 1 : 0)) + le + (($ += ne) >>> 0 < ne >>> 0 ? 1 : 0)) + se + (($ += ce) >>> 0 < ce >>> 0 ? 1 : 0), K.high = I, K.low = $
                  }
                  var fe, ve = A & N ^ ~A & O,
                    he = F & E ^ ~F & W,
                    de = J & M ^ J & x ^ M & x,
                    be = P & D ^ P & B ^ D & B,
                    pe = (J >>> 28 | P << 4) ^ (J << 30 | P >>> 2) ^ (J << 25 | P >>> 7),
                    ge = (P >>> 28 | J << 4) ^ (P << 30 | J >>> 2) ^ (P << 25 | J >>> 7),
                    ye = (A >>> 14 | F << 18) ^ (A >>> 18 | F << 14) ^ (A << 23 | F >>> 9),
                    Se = (F >>> 14 | A << 18) ^ (F >>> 18 | A << 14) ^ (F << 23 | A >>> 9),
                    me = o[R],
                    Ye = me.high,
                    Ze = me.low,
                    Le = k + ye + ((fe = G + Se) >>> 0 < G >>> 0 ? 1 : 0),
                    Ce = ge + be;
                  k = O, G = W, O = N, W = E, N = A, E = F, A = H + (Le = (Le = (Le = Le + ve + ((fe += he) >>> 0 < he >>> 0 ? 1 : 0)) + Ye + ((fe += Ze) >>> 0 < Ze >>> 0 ? 1 : 0)) + I + ((fe += $) >>> 0 < $ >>> 0 ? 1 : 0)) + ((F = Q + fe | 0) >>> 0 < Q >>> 0 ? 1 : 0) | 0, H = x, Q = B, x = M, B = D, M = J, D = P, J = Le + (pe + de + (Ce >>> 0 < ge >>> 0 ? 1 : 0)) + ((P = fe + Ce | 0) >>> 0 < fe >>> 0 ? 1 : 0) | 0
                }
                d = l.low = d + P, l.high = h + J + (d >>> 0 < P >>> 0 ? 1 : 0), p = n.low = p + D, n.high = b + M + (p >>> 0 < D >>> 0 ? 1 : 0), y = r.low = y + B, r.high = g + x + (y >>> 0 < B >>> 0 ? 1 : 0), m = i.low = m + Q, i.high = S + H + (m >>> 0 < Q >>> 0 ? 1 : 0), Z = s.low = Z + F, s.high = Y + A + (Z >>> 0 < F >>> 0 ? 1 : 0), C = c.low = C + E, c.high = L + N + (C >>> 0 < E >>> 0 ? 1 : 0), w = f.low = w + W, f.high = T + O + (w >>> 0 < W >>> 0 ? 1 : 0), X = v.low = X + G, v.high = _ + k + (X >>> 0 < G >>> 0 ? 1 : 0)
              },
              _doFinalize: function() {
                var e = this._data,
                  t = e.words,
                  a = 8 * this._nDataBytes,
                  l = 8 * e.sigBytes;
                return t[l >>> 5] |= 128 << 24 - l % 32, t[30 + (128 + l >>> 10 << 5)] = Math.floor(a / 4294967296), t[31 + (128 + l >>> 10 << 5)] = a, e.sigBytes = 4 * t.length, this._process(), this._hash.toX32()
              },
              clone: function() {
                var e = t.clone.call(this);
                return e._hash = this._hash.clone(), e
              },
              blockSize: 32
            });
            e.SHA512 = t._createHelper(s), e.HmacSHA512 = t._createHmacHelper(s)
          }(), re = (ne = He).x64, ie = re.Word, oe = re.WordArray, ue = ne.algo, se = ue.SHA512, ce = ue.SHA384 = se.extend({
            _doReset: function() {
              this._hash = new oe.init([new ie.init(3418070365, 3238371032), new ie.init(1654270250, 914150663), new ie.init(2438529370, 812702999), new ie.init(355462360, 4144912697), new ie.init(1731405415, 4290775857), new ie.init(2394180231, 1750603025), new ie.init(3675008525, 1694076839), new ie.init(1203062813, 3204075428)])
            },
            _doFinalize: function() {
              var e = se._doFinalize.call(this);
              return e.sigBytes -= 16, e
            }
          }), ne.SHA384 = se._createHelper(ce), ne.HmacSHA384 = se._createHmacHelper(ce), He.lib.Cipher || function() {
            var e = He,
              t = e.lib,
              a = t.Base,
              l = t.WordArray,
              n = t.BufferedBlockAlgorithm,
              r = e.enc,
              i = (r.Utf8, r.Base64),
              o = e.algo.EvpKDF,
              u = t.Cipher = n.extend({
                cfg: a.extend(),
                createEncryptor: function(e, t) {
                  return this.create(this._ENC_XFORM_MODE, e, t)
                },
                createDecryptor: function(e, t) {
                  return this.create(this._DEC_XFORM_MODE, e, t)
                },
                init: function(e, t, a) {
                  this.cfg = this.cfg.extend(a), this._xformMode = e, this._key = t, this.reset()
                },
                reset: function() {
                  n.reset.call(this), this._doReset()
                },
                process: function(e) {
                  return this._append(e), this._process()
                },
                finalize: function(e) {
                  return e && this._append(e), this._doFinalize()
                },
                keySize: 4,
                ivSize: 4,
                _ENC_XFORM_MODE: 1,
                _DEC_XFORM_MODE: 2,
                _createHelper: function(e) {
                  return {
                    encrypt: function(t, a, l) {
                      return s(a).encrypt(e, t, a, l)
                    },
                    decrypt: function(t, a, l) {
                      return s(a).decrypt(e, t, a, l)
                    }
                  }
                }
              });

            function s(e) {
              return "string" == typeof e ? m : y
            }
            t.StreamCipher = u.extend({
              _doFinalize: function() {
                return this._process(!0)
              },
              blockSize: 1
            });
            var c, f = e.mode = {},
              v = t.BlockCipherMode = a.extend({
                createEncryptor: function(e, t) {
                  return this.Encryptor.create(e, t)
                },
                createDecryptor: function(e, t) {
                  return this.Decryptor.create(e, t)
                },
                init: function(e, t) {
                  this._cipher = e, this._iv = t
                }
              }),
              h = f.CBC = ((c = v.extend()).Encryptor = c.extend({
                processBlock: function(e, t) {
                  var a = this._cipher,
                    l = a.blockSize;
                  d.call(this, e, t, l), a.encryptBlock(e, t), this._prevBlock = e.slice(t, t + l)
                }
              }), c.Decryptor = c.extend({
                processBlock: function(e, t) {
                  var a = this._cipher,
                    l = a.blockSize,
                    n = e.slice(t, t + l);
                  a.decryptBlock(e, t), d.call(this, e, t, l), this._prevBlock = n
                }
              }), c);

            function d(e, t, a) {
              var l = this._iv;
              if (l) {
                var n = l;
                this._iv = void 0
              } else n = this._prevBlock;
              for (var r = 0; r < a; r++) e[t + r] ^= n[r]
            }
            var b = (e.pad = {}).Pkcs7 = {
                pad: function(e, t) {
                  for (var a = 4 * t, n = a - e.sigBytes % a, r = n << 24 | n << 16 | n << 8 | n, i = [], o = 0; o < n; o += 4) i.push(r);
                  var u = l.create(i, n);
                  e.concat(u)
                },
                unpad: function(e) {
                  var t = 255 & e.words[e.sigBytes - 1 >>> 2];
                  e.sigBytes -= t
                }
              },
              p = (t.BlockCipher = u.extend({
                cfg: u.cfg.extend({
                  mode: h,
                  padding: b
                }),
                reset: function() {
                  u.reset.call(this);
                  var e = this.cfg,
                    t = e.iv,
                    a = e.mode;
                  if (this._xformMode == this._ENC_XFORM_MODE) var l = a.createEncryptor;
                  else l = a.createDecryptor, this._minBufferSize = 1;
                  this._mode && this._mode.__creator == l ? this._mode.init(this, t && t.words) : (this._mode = l.call(a, this, t && t.words), this._mode.__creator = l)
                },
                _doProcessBlock: function(e, t) {
                  this._mode.processBlock(e, t)
                },
                _doFinalize: function() {
                  var e = this.cfg.padding;
                  if (this._xformMode == this._ENC_XFORM_MODE) {
                    e.pad(this._data, this.blockSize);
                    var t = this._process(!0)
                  } else t = this._process(!0), e.unpad(t);
                  return t
                },
                blockSize: 4
              }), t.CipherParams = a.extend({
                init: function(e) {
                  this.mixIn(e)
                },
                toString: function(e) {
                  return (e || this.formatter).stringify(this)
                }
              })),
              g = (e.format = {}).OpenSSL = {
                stringify: function(e) {
                  var t = e.ciphertext,
                    a = e.salt;
                  if (a) var n = l.create([1398893684, 1701076831]).concat(a).concat(t);
                  else n = t;
                  return n.toString(i)
                },
                parse: function(e) {
                  var t = i.parse(e),
                    a = t.words;
                  if (1398893684 == a[0] && 1701076831 == a[1]) {
                    var n = l.create(a.slice(2, 4));
                    a.splice(0, 4), t.sigBytes -= 16
                  }
                  return p.create({
                    ciphertext: t,
                    salt: n
                  })
                }
              },
              y = t.SerializableCipher = a.extend({
                cfg: a.extend({
                  format: g
                }),
                encrypt: function(e, t, a, l) {
                  l = this.cfg.extend(l);
                  var n = e.createEncryptor(a, l),
                    r = n.finalize(t),
                    i = n.cfg;
                  return p.create({
                    ciphertext: r,
                    key: a,
                    iv: i.iv,
                    algorithm: e,
                    mode: i.mode,
                    padding: i.padding,
                    blockSize: e.blockSize,
                    formatter: l.format
                  })
                },
                decrypt: function(e, t, a, l) {
                  return l = this.cfg.extend(l), t = this._parse(t, l.format), e.createDecryptor(a, l).finalize(t.ciphertext)
                },
                _parse: function(e, t) {
                  return "string" == typeof e ? t.parse(e, this) : e
                }
              }),
              S = (e.kdf = {}).OpenSSL = {
                execute: function(e, t, a, n) {
                  n = n || l.random(8);
                  var r = o.create({
                      keySize: t + a
                    }).compute(e, n),
                    i = l.create(r.words.slice(t), 4 * a);
                  return r.sigBytes = 4 * t, p.create({
                    key: r,
                    iv: i,
                    salt: n
                  })
                }
              },
              m = t.PasswordBasedCipher = y.extend({
                cfg: y.cfg.extend({
                  kdf: S
                }),
                encrypt: function(e, t, a, l) {
                  var n = (l = this.cfg.extend(l)).kdf.execute(a, e.keySize, e.ivSize);
                  l.iv = n.iv;
                  var r = y.encrypt.call(this, e, t, n.key, l);
                  return r.mixIn(n), r
                },
                decrypt: function(e, t, a, l) {
                  l = this.cfg.extend(l), t = this._parse(t, l.format);
                  var n = l.kdf.execute(a, e.keySize, e.ivSize, t.salt);
                  return l.iv = n.iv, y.decrypt.call(this, e, t, n.key, l)
                }
              })
          }(), He.mode.CFB = ((fe = He.lib.BlockCipherMode.extend()).Encryptor = fe.extend({
            processBlock: function(e, t) {
              var a = this._cipher,
                l = a.blockSize;
              ke.call(this, e, t, l, a), this._prevBlock = e.slice(t, t + l)
            }
          }), fe.Decryptor = fe.extend({
            processBlock: function(e, t) {
              var a = this._cipher,
                l = a.blockSize,
                n = e.slice(t, t + l);
              ke.call(this, e, t, l, a), this._prevBlock = n
            }
          }), fe), He.mode.ECB = ((ve = He.lib.BlockCipherMode.extend()).Encryptor = ve.extend({
            processBlock: function(e, t) {
              this._cipher.encryptBlock(e, t)
            }
          }), ve.Decryptor = ve.extend({
            processBlock: function(e, t) {
              this._cipher.decryptBlock(e, t)
            }
          }), ve), He.pad.AnsiX923 = {
            pad: function(e, t) {
              var a = e.sigBytes,
                l = 4 * t,
                n = l - a % l,
                r = a + n - 1;
              e.clamp(), e.words[r >>> 2] |= n << 24 - r % 4 * 8, e.sigBytes += n
            },
            unpad: function(e) {
              var t = 255 & e.words[e.sigBytes - 1 >>> 2];
              e.sigBytes -= t
            }
          }, He.pad.Iso10126 = {
            pad: function(e, t) {
              var a = 4 * t,
                l = a - e.sigBytes % a;
              e.concat(He.lib.WordArray.random(l - 1)).concat(He.lib.WordArray.create([l << 24], 1))
            },
            unpad: function(e) {
              var t = 255 & e.words[e.sigBytes - 1 >>> 2];
              e.sigBytes -= t
            }
          }, He.pad.Iso97971 = {
            pad: function(e, t) {
              e.concat(He.lib.WordArray.create([2147483648], 1)), He.pad.ZeroPadding.pad(e, t)
            },
            unpad: function(e) {
              He.pad.ZeroPadding.unpad(e), e.sigBytes--
            }
          }, He.mode.OFB = (de = (he = He.lib.BlockCipherMode.extend()).Encryptor = he.extend({
            processBlock: function(e, t) {
              var a = this._cipher,
                l = a.blockSize,
                n = this._iv,
                r = this._keystream;
              n && (r = this._keystream = n.slice(0), this._iv = void 0), a.encryptBlock(r, 0);
              for (var i = 0; i < l; i++) e[t + i] ^= r[i]
            }
          }), he.Decryptor = de, he), He.pad.NoPadding = {
            pad: function() {},
            unpad: function() {}
          }, be = He.lib.CipherParams, pe = He.enc.Hex, He.format.Hex = {
            stringify: function(e) {
              return e.ciphertext.toString(pe)
            },
            parse: function(e) {
              var t = pe.parse(e);
              return be.create({
                ciphertext: t
              })
            }
          },
          function() {
            var e = He,
              t = e.lib.BlockCipher,
              a = e.algo,
              l = [],
              n = [],
              r = [],
              i = [],
              o = [],
              u = [],
              s = [],
              c = [],
              f = [],
              v = [];
            ! function() {
              for (var e = [], t = 0; t < 256; t++) e[t] = t < 128 ? t << 1 : t << 1 ^ 283;
              var a = 0,
                h = 0;
              for (t = 0; t < 256; t++) {
                var d = h ^ h << 1 ^ h << 2 ^ h << 3 ^ h << 4;
                d = d >>> 8 ^ 255 & d ^ 99, l[a] = d;
                var b = e[n[d] = a],
                  p = e[b],
                  g = e[p],
                  y = 257 * e[d] ^ 16843008 * d;
                r[a] = y << 24 | y >>> 8, i[a] = y << 16 | y >>> 16, o[a] = y << 8 | y >>> 24, u[a] = y, y = 16843009 * g ^ 65537 * p ^ 257 * b ^ 16843008 * a, s[d] = y << 24 | y >>> 8, c[d] = y << 16 | y >>> 16, f[d] = y << 8 | y >>> 24, v[d] = y, a ? (a = b ^ e[e[e[g ^ b]]], h ^= e[e[h]]) : a = h = 1
              }
            }();
            var h = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
              d = a.AES = t.extend({
                _doReset: function() {
                  if (!this._nRounds || this._keyPriorReset !== this._key) {
                    for (var e = this._keyPriorReset = this._key, t = e.words, a = e.sigBytes / 4, n = 4 * (1 + (this._nRounds = 6 + a)), r = this._keySchedule = [], i = 0; i < n; i++)
                      if (i < a) r[i] = t[i];
                      else {
                        var o = r[i - 1];
                        i % a ? 6 < a && i % a == 4 && (o = l[o >>> 24] << 24 | l[o >>> 16 & 255] << 16 | l[o >>> 8 & 255] << 8 | l[255 & o]) : (o = l[(o = o << 8 | o >>> 24) >>> 24] << 24 | l[o >>> 16 & 255] << 16 | l[o >>> 8 & 255] << 8 | l[255 & o], o ^= h[i / a | 0] << 24), r[i] = r[i - a] ^ o
                      } for (var u = this._invKeySchedule = [], d = 0; d < n; d++) i = n - d, o = d % 4 ? r[i] : r[i - 4], u[d] = d < 4 || i <= 4 ? o : s[l[o >>> 24]] ^ c[l[o >>> 16 & 255]] ^ f[l[o >>> 8 & 255]] ^ v[l[255 & o]]
                  }
                },
                encryptBlock: function(e, t) {
                  this._doCryptBlock(e, t, this._keySchedule, r, i, o, u, l)
                },
                decryptBlock: function(e, t) {
                  var a = e[t + 1];
                  e[t + 1] = e[t + 3], e[t + 3] = a, this._doCryptBlock(e, t, this._invKeySchedule, s, c, f, v, n), a = e[t + 1], e[t + 1] = e[t + 3], e[t + 3] = a
                },
                _doCryptBlock: function(e, t, a, l, n, r, i, o) {
                  for (var u = this._nRounds, s = e[t] ^ a[0], c = e[t + 1] ^ a[1], f = e[t + 2] ^ a[2], v = e[t + 3] ^ a[3], h = 4, d = 1; d < u; d++) {
                    var b = l[s >>> 24] ^ n[c >>> 16 & 255] ^ r[f >>> 8 & 255] ^ i[255 & v] ^ a[h++],
                      p = l[c >>> 24] ^ n[f >>> 16 & 255] ^ r[v >>> 8 & 255] ^ i[255 & s] ^ a[h++],
                      g = l[f >>> 24] ^ n[v >>> 16 & 255] ^ r[s >>> 8 & 255] ^ i[255 & c] ^ a[h++],
                      y = l[v >>> 24] ^ n[s >>> 16 & 255] ^ r[c >>> 8 & 255] ^ i[255 & f] ^ a[h++];
                    s = b, c = p, f = g, v = y
                  }
                  b = (o[s >>> 24] << 24 | o[c >>> 16 & 255] << 16 | o[f >>> 8 & 255] << 8 | o[255 & v]) ^ a[h++], p = (o[c >>> 24] << 24 | o[f >>> 16 & 255] << 16 | o[v >>> 8 & 255] << 8 | o[255 & s]) ^ a[h++], g = (o[f >>> 24] << 24 | o[v >>> 16 & 255] << 16 | o[s >>> 8 & 255] << 8 | o[255 & c]) ^ a[h++], y = (o[v >>> 24] << 24 | o[s >>> 16 & 255] << 16 | o[c >>> 8 & 255] << 8 | o[255 & f]) ^ a[h++], e[t] = b, e[t + 1] = p, e[t + 2] = g, e[t + 3] = y
                },
                keySize: 8
              });
            e.AES = t._createHelper(d)
          }(),
          function() {
            var e = He,
              t = e.lib,
              a = t.WordArray,
              l = t.BlockCipher,
              n = e.algo,
              r = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4],
              i = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32],
              o = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28],
              u = [{
                0: 8421888,
                268435456: 32768,
                536870912: 8421378,
                805306368: 2,
                1073741824: 512,
                1342177280: 8421890,
                1610612736: 8389122,
                1879048192: 8388608,
                2147483648: 514,
                2415919104: 8389120,
                2684354560: 33280,
                2952790016: 8421376,
                3221225472: 32770,
                3489660928: 8388610,
                3758096384: 0,
                4026531840: 33282,
                134217728: 0,
                402653184: 8421890,
                671088640: 33282,
                939524096: 32768,
                1207959552: 8421888,
                1476395008: 512,
                1744830464: 8421378,
                2013265920: 2,
                2281701376: 8389120,
                2550136832: 33280,
                2818572288: 8421376,
                3087007744: 8389122,
                3355443200: 8388610,
                3623878656: 32770,
                3892314112: 514,
                4160749568: 8388608,
                1: 32768,
                268435457: 2,
                536870913: 8421888,
                805306369: 8388608,
                1073741825: 8421378,
                1342177281: 33280,
                1610612737: 512,
                1879048193: 8389122,
                2147483649: 8421890,
                2415919105: 8421376,
                2684354561: 8388610,
                2952790017: 33282,
                3221225473: 514,
                3489660929: 8389120,
                3758096385: 32770,
                4026531841: 0,
                134217729: 8421890,
                402653185: 8421376,
                671088641: 8388608,
                939524097: 512,
                1207959553: 32768,
                1476395009: 8388610,
                1744830465: 2,
                2013265921: 33282,
                2281701377: 32770,
                2550136833: 8389122,
                2818572289: 514,
                3087007745: 8421888,
                3355443201: 8389120,
                3623878657: 0,
                3892314113: 33280,
                4160749569: 8421378
              }, {
                0: 1074282512,
                16777216: 16384,
                33554432: 524288,
                50331648: 1074266128,
                67108864: 1073741840,
                83886080: 1074282496,
                100663296: 1073758208,
                117440512: 16,
                134217728: 540672,
                150994944: 1073758224,
                167772160: 1073741824,
                184549376: 540688,
                201326592: 524304,
                218103808: 0,
                234881024: 16400,
                251658240: 1074266112,
                8388608: 1073758208,
                25165824: 540688,
                41943040: 16,
                58720256: 1073758224,
                75497472: 1074282512,
                92274688: 1073741824,
                109051904: 524288,
                125829120: 1074266128,
                142606336: 524304,
                159383552: 0,
                176160768: 16384,
                192937984: 1074266112,
                209715200: 1073741840,
                226492416: 540672,
                243269632: 1074282496,
                260046848: 16400,
                268435456: 0,
                285212672: 1074266128,
                301989888: 1073758224,
                318767104: 1074282496,
                335544320: 1074266112,
                352321536: 16,
                369098752: 540688,
                385875968: 16384,
                402653184: 16400,
                419430400: 524288,
                436207616: 524304,
                452984832: 1073741840,
                469762048: 540672,
                486539264: 1073758208,
                503316480: 1073741824,
                520093696: 1074282512,
                276824064: 540688,
                293601280: 524288,
                310378496: 1074266112,
                327155712: 16384,
                343932928: 1073758208,
                360710144: 1074282512,
                377487360: 16,
                394264576: 1073741824,
                411041792: 1074282496,
                427819008: 1073741840,
                444596224: 1073758224,
                461373440: 524304,
                478150656: 0,
                494927872: 16400,
                511705088: 1074266128,
                528482304: 540672
              }, {
                0: 260,
                1048576: 0,
                2097152: 67109120,
                3145728: 65796,
                4194304: 65540,
                5242880: 67108868,
                6291456: 67174660,
                7340032: 67174400,
                8388608: 67108864,
                9437184: 67174656,
                10485760: 65792,
                11534336: 67174404,
                12582912: 67109124,
                13631488: 65536,
                14680064: 4,
                15728640: 256,
                524288: 67174656,
                1572864: 67174404,
                2621440: 0,
                3670016: 67109120,
                4718592: 67108868,
                5767168: 65536,
                6815744: 65540,
                7864320: 260,
                8912896: 4,
                9961472: 256,
                11010048: 67174400,
                12058624: 65796,
                13107200: 65792,
                14155776: 67109124,
                15204352: 67174660,
                16252928: 67108864,
                16777216: 67174656,
                17825792: 65540,
                18874368: 65536,
                19922944: 67109120,
                20971520: 256,
                22020096: 67174660,
                23068672: 67108868,
                24117248: 0,
                25165824: 67109124,
                26214400: 67108864,
                27262976: 4,
                28311552: 65792,
                29360128: 67174400,
                30408704: 260,
                31457280: 65796,
                32505856: 67174404,
                17301504: 67108864,
                18350080: 260,
                19398656: 67174656,
                20447232: 0,
                21495808: 65540,
                22544384: 67109120,
                23592960: 256,
                24641536: 67174404,
                25690112: 65536,
                26738688: 67174660,
                27787264: 65796,
                28835840: 67108868,
                29884416: 67109124,
                30932992: 67174400,
                31981568: 4,
                33030144: 65792
              }, {
                0: 2151682048,
                65536: 2147487808,
                131072: 4198464,
                196608: 2151677952,
                262144: 0,
                327680: 4198400,
                393216: 2147483712,
                458752: 4194368,
                524288: 2147483648,
                589824: 4194304,
                655360: 64,
                720896: 2147487744,
                786432: 2151678016,
                851968: 4160,
                917504: 4096,
                983040: 2151682112,
                32768: 2147487808,
                98304: 64,
                163840: 2151678016,
                229376: 2147487744,
                294912: 4198400,
                360448: 2151682112,
                425984: 0,
                491520: 2151677952,
                557056: 4096,
                622592: 2151682048,
                688128: 4194304,
                753664: 4160,
                819200: 2147483648,
                884736: 4194368,
                950272: 4198464,
                1015808: 2147483712,
                1048576: 4194368,
                1114112: 4198400,
                1179648: 2147483712,
                1245184: 0,
                1310720: 4160,
                1376256: 2151678016,
                1441792: 2151682048,
                1507328: 2147487808,
                1572864: 2151682112,
                1638400: 2147483648,
                1703936: 2151677952,
                1769472: 4198464,
                1835008: 2147487744,
                1900544: 4194304,
                1966080: 64,
                2031616: 4096,
                1081344: 2151677952,
                1146880: 2151682112,
                1212416: 0,
                1277952: 4198400,
                1343488: 4194368,
                1409024: 2147483648,
                1474560: 2147487808,
                1540096: 64,
                1605632: 2147483712,
                1671168: 4096,
                1736704: 2147487744,
                1802240: 2151678016,
                1867776: 4160,
                1933312: 2151682048,
                1998848: 4194304,
                2064384: 4198464
              }, {
                0: 128,
                4096: 17039360,
                8192: 262144,
                12288: 536870912,
                16384: 537133184,
                20480: 16777344,
                24576: 553648256,
                28672: 262272,
                32768: 16777216,
                36864: 537133056,
                40960: 536871040,
                45056: 553910400,
                49152: 553910272,
                53248: 0,
                57344: 17039488,
                61440: 553648128,
                2048: 17039488,
                6144: 553648256,
                10240: 128,
                14336: 17039360,
                18432: 262144,
                22528: 537133184,
                26624: 553910272,
                30720: 536870912,
                34816: 537133056,
                38912: 0,
                43008: 553910400,
                47104: 16777344,
                51200: 536871040,
                55296: 553648128,
                59392: 16777216,
                63488: 262272,
                65536: 262144,
                69632: 128,
                73728: 536870912,
                77824: 553648256,
                81920: 16777344,
                86016: 553910272,
                90112: 537133184,
                94208: 16777216,
                98304: 553910400,
                102400: 553648128,
                106496: 17039360,
                110592: 537133056,
                114688: 262272,
                118784: 536871040,
                122880: 0,
                126976: 17039488,
                67584: 553648256,
                71680: 16777216,
                75776: 17039360,
                79872: 537133184,
                83968: 536870912,
                88064: 17039488,
                92160: 128,
                96256: 553910272,
                100352: 262272,
                104448: 553910400,
                108544: 0,
                112640: 553648128,
                116736: 16777344,
                120832: 262144,
                124928: 537133056,
                129024: 536871040
              }, {
                0: 268435464,
                256: 8192,
                512: 270532608,
                768: 270540808,
                1024: 268443648,
                1280: 2097152,
                1536: 2097160,
                1792: 268435456,
                2048: 0,
                2304: 268443656,
                2560: 2105344,
                2816: 8,
                3072: 270532616,
                3328: 2105352,
                3584: 8200,
                3840: 270540800,
                128: 270532608,
                384: 270540808,
                640: 8,
                896: 2097152,
                1152: 2105352,
                1408: 268435464,
                1664: 268443648,
                1920: 8200,
                2176: 2097160,
                2432: 8192,
                2688: 268443656,
                2944: 270532616,
                3200: 0,
                3456: 270540800,
                3712: 2105344,
                3968: 268435456,
                4096: 268443648,
                4352: 270532616,
                4608: 270540808,
                4864: 8200,
                5120: 2097152,
                5376: 268435456,
                5632: 268435464,
                5888: 2105344,
                6144: 2105352,
                6400: 0,
                6656: 8,
                6912: 270532608,
                7168: 8192,
                7424: 268443656,
                7680: 270540800,
                7936: 2097160,
                4224: 8,
                4480: 2105344,
                4736: 2097152,
                4992: 268435464,
                5248: 268443648,
                5504: 8200,
                5760: 270540808,
                6016: 270532608,
                6272: 270540800,
                6528: 270532616,
                6784: 8192,
                7040: 2105352,
                7296: 2097160,
                7552: 0,
                7808: 268435456,
                8064: 268443656
              }, {
                0: 1048576,
                16: 33555457,
                32: 1024,
                48: 1049601,
                64: 34604033,
                80: 0,
                96: 1,
                112: 34603009,
                128: 33555456,
                144: 1048577,
                160: 33554433,
                176: 34604032,
                192: 34603008,
                208: 1025,
                224: 1049600,
                240: 33554432,
                8: 34603009,
                24: 0,
                40: 33555457,
                56: 34604032,
                72: 1048576,
                88: 33554433,
                104: 33554432,
                120: 1025,
                136: 1049601,
                152: 33555456,
                168: 34603008,
                184: 1048577,
                200: 1024,
                216: 34604033,
                232: 1,
                248: 1049600,
                256: 33554432,
                272: 1048576,
                288: 33555457,
                304: 34603009,
                320: 1048577,
                336: 33555456,
                352: 34604032,
                368: 1049601,
                384: 1025,
                400: 34604033,
                416: 1049600,
                432: 1,
                448: 0,
                464: 34603008,
                480: 33554433,
                496: 1024,
                264: 1049600,
                280: 33555457,
                296: 34603009,
                312: 1,
                328: 33554432,
                344: 1048576,
                360: 1025,
                376: 34604032,
                392: 33554433,
                408: 34603008,
                424: 0,
                440: 34604033,
                456: 1049601,
                472: 1024,
                488: 33555456,
                504: 1048577
              }, {
                0: 134219808,
                1: 131072,
                2: 134217728,
                3: 32,
                4: 131104,
                5: 134350880,
                6: 134350848,
                7: 2048,
                8: 134348800,
                9: 134219776,
                10: 133120,
                11: 134348832,
                12: 2080,
                13: 0,
                14: 134217760,
                15: 133152,
                2147483648: 2048,
                2147483649: 134350880,
                2147483650: 134219808,
                2147483651: 134217728,
                2147483652: 134348800,
                2147483653: 133120,
                2147483654: 133152,
                2147483655: 32,
                2147483656: 134217760,
                2147483657: 2080,
                2147483658: 131104,
                2147483659: 134350848,
                2147483660: 0,
                2147483661: 134348832,
                2147483662: 134219776,
                2147483663: 131072,
                16: 133152,
                17: 134350848,
                18: 32,
                19: 2048,
                20: 134219776,
                21: 134217760,
                22: 134348832,
                23: 131072,
                24: 0,
                25: 131104,
                26: 134348800,
                27: 134219808,
                28: 134350880,
                29: 133120,
                30: 2080,
                31: 134217728,
                2147483664: 131072,
                2147483665: 2048,
                2147483666: 134348832,
                2147483667: 133152,
                2147483668: 32,
                2147483669: 134348800,
                2147483670: 134217728,
                2147483671: 134219808,
                2147483672: 134350880,
                2147483673: 134217760,
                2147483674: 134219776,
                2147483675: 0,
                2147483676: 133120,
                2147483677: 2080,
                2147483678: 131104,
                2147483679: 134350848
              }],
              s = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679],
              c = n.DES = l.extend({
                _doReset: function() {
                  for (var e = this._key.words, t = [], a = 0; a < 56; a++) {
                    var l = r[a] - 1;
                    t[a] = e[l >>> 5] >>> 31 - l % 32 & 1
                  }
                  for (var n = this._subKeys = [], u = 0; u < 16; u++) {
                    var s = n[u] = [],
                      c = o[u];
                    for (a = 0; a < 24; a++) s[a / 6 | 0] |= t[(i[a] - 1 + c) % 28] << 31 - a % 6, s[4 + (a / 6 | 0)] |= t[28 + (i[a + 24] - 1 + c) % 28] << 31 - a % 6;
                    for (s[0] = s[0] << 1 | s[0] >>> 31, a = 1; a < 7; a++) s[a] = s[a] >>> 4 * (a - 1) + 3;
                    s[7] = s[7] << 5 | s[7] >>> 27
                  }
                  var f = this._invSubKeys = [];
                  for (a = 0; a < 16; a++) f[a] = n[15 - a]
                },
                encryptBlock: function(e, t) {
                  this._doCryptBlock(e, t, this._subKeys)
                },
                decryptBlock: function(e, t) {
                  this._doCryptBlock(e, t, this._invSubKeys)
                },
                _doCryptBlock: function(e, t, a) {
                  this._lBlock = e[t], this._rBlock = e[t + 1], f.call(this, 4, 252645135), f.call(this, 16, 65535), v.call(this, 2, 858993459), v.call(this, 8, 16711935), f.call(this, 1, 1431655765);
                  for (var l = 0; l < 16; l++) {
                    for (var n = a[l], r = this._lBlock, i = this._rBlock, o = 0, c = 0; c < 8; c++) o |= u[c][((i ^ n[c]) & s[c]) >>> 0];
                    this._lBlock = i, this._rBlock = r ^ o
                  }
                  var h = this._lBlock;
                  this._lBlock = this._rBlock, this._rBlock = h, f.call(this, 1, 1431655765), v.call(this, 8, 16711935), v.call(this, 2, 858993459), f.call(this, 16, 65535), f.call(this, 4, 252645135), e[t] = this._lBlock, e[t + 1] = this._rBlock
                },
                keySize: 2,
                ivSize: 2,
                blockSize: 2
              });

            function f(e, t) {
              var a = (this._lBlock >>> e ^ this._rBlock) & t;
              this._rBlock ^= a, this._lBlock ^= a << e
            }

            function v(e, t) {
              var a = (this._rBlock >>> e ^ this._lBlock) & t;
              this._lBlock ^= a, this._rBlock ^= a << e
            }
            e.DES = l._createHelper(c);
            var h = n.TripleDES = l.extend({
              _doReset: function() {
                var e = this._key.words;
                this._des1 = c.createEncryptor(a.create(e.slice(0, 2))), this._des2 = c.createEncryptor(a.create(e.slice(2, 4))), this._des3 = c.createEncryptor(a.create(e.slice(4, 6)))
              },
              encryptBlock: function(e, t) {
                this._des1.encryptBlock(e, t), this._des2.decryptBlock(e, t), this._des3.encryptBlock(e, t)
              },
              decryptBlock: function(e, t) {
                this._des3.decryptBlock(e, t), this._des2.encryptBlock(e, t), this._des1.decryptBlock(e, t)
              },
              keySize: 6,
              ivSize: 2,
              blockSize: 2
            });
            e.TripleDES = l._createHelper(h)
          }(),
          function() {
            var e = He,
              t = e.lib.StreamCipher,
              a = e.algo,
              l = a.RC4 = t.extend({
                _doReset: function() {
                  for (var e = this._key, t = e.words, a = e.sigBytes, l = this._S = [], n = 0; n < 256; n++) l[n] = n;
                  n = 0;
                  for (var r = 0; n < 256; n++) {
                    var i = n % a,
                      o = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                    r = (r + l[n] + o) % 256;
                    var u = l[n];
                    l[n] = l[r], l[r] = u
                  }
                  this._i = this._j = 0
                },
                _doProcessBlock: function(e, t) {
                  e[t] ^= n.call(this)
                },
                keySize: 8,
                ivSize: 0
              });

            function n() {
              for (var e = this._S, t = this._i, a = this._j, l = 0, n = 0; n < 4; n++) {
                a = (a + e[t = (t + 1) % 256]) % 256;
                var r = e[t];
                e[t] = e[a], e[a] = r, l |= e[(e[t] + e[a]) % 256] << 24 - 8 * n
              }
              return this._i = t, this._j = a, l
            }
            e.RC4 = t._createHelper(l);
            var r = a.RC4Drop = l.extend({
              cfg: l.cfg.extend({
                drop: 192
              }),
              _doReset: function() {
                l._doReset.call(this);
                for (var e = this.cfg.drop; 0 < e; e--) n.call(this)
              }
            });
            e.RC4Drop = t._createHelper(r)
          }(), He.mode.CTRGladman = (ye = (ge = He.lib.BlockCipherMode.extend()).Encryptor = ge.extend({
            processBlock: function(e, t) {
              var a, l = this._cipher,
                n = l.blockSize,
                r = this._iv,
                i = this._counter;
              r && (i = this._counter = r.slice(0), this._iv = void 0), 0 === ((a = i)[0] = Ge(a[0])) && (a[1] = Ge(a[1]));
              var o = i.slice(0);
              l.encryptBlock(o, 0);
              for (var u = 0; u < n; u++) e[t + u] ^= o[u]
            }
          }), ge.Decryptor = ye, ge), me = (Se = He).lib.StreamCipher, Ye = Se.algo, Ze = [], Le = [], Ce = [], Te = Ye.Rabbit = me.extend({
            _doReset: function() {
              for (var e = this._key.words, t = this.cfg.iv, a = 0; a < 4; a++) e[a] = 16711935 & (e[a] << 8 | e[a] >>> 24) | 4278255360 & (e[a] << 24 | e[a] >>> 8);
              var l = this._X = [e[0], e[3] << 16 | e[2] >>> 16, e[1], e[0] << 16 | e[3] >>> 16, e[2], e[1] << 16 | e[0] >>> 16, e[3], e[2] << 16 | e[1] >>> 16],
                n = this._C = [e[2] << 16 | e[2] >>> 16, 4294901760 & e[0] | 65535 & e[1], e[3] << 16 | e[3] >>> 16, 4294901760 & e[1] | 65535 & e[2], e[0] << 16 | e[0] >>> 16, 4294901760 & e[2] | 65535 & e[3], e[1] << 16 | e[1] >>> 16, 4294901760 & e[3] | 65535 & e[0]];
              for (a = this._b = 0; a < 4; a++) Re.call(this);
              for (a = 0; a < 8; a++) n[a] ^= l[a + 4 & 7];
              if (t) {
                var r = t.words,
                  i = r[0],
                  o = r[1],
                  u = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8),
                  s = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8),
                  c = u >>> 16 | 4294901760 & s,
                  f = s << 16 | 65535 & u;
                for (n[0] ^= u, n[1] ^= c, n[2] ^= s, n[3] ^= f, n[4] ^= u, n[5] ^= c, n[6] ^= s, n[7] ^= f, a = 0; a < 4; a++) Re.call(this)
              }
            },
            _doProcessBlock: function(e, t) {
              var a = this._X;
              Re.call(this), Ze[0] = a[0] ^ a[5] >>> 16 ^ a[3] << 16, Ze[1] = a[2] ^ a[7] >>> 16 ^ a[5] << 16, Ze[2] = a[4] ^ a[1] >>> 16 ^ a[7] << 16, Ze[3] = a[6] ^ a[3] >>> 16 ^ a[1] << 16;
              for (var l = 0; l < 4; l++) Ze[l] = 16711935 & (Ze[l] << 8 | Ze[l] >>> 24) | 4278255360 & (Ze[l] << 24 | Ze[l] >>> 8), e[t + l] ^= Ze[l]
            },
            blockSize: 4,
            ivSize: 2
          }), Se.Rabbit = me._createHelper(Te), He.mode.CTR = (_e = (we = He.lib.BlockCipherMode.extend()).Encryptor = we.extend({
            processBlock: function(e, t) {
              var a = this._cipher,
                l = a.blockSize,
                n = this._iv,
                r = this._counter;
              n && (r = this._counter = n.slice(0), this._iv = void 0);
              var i = r.slice(0);
              a.encryptBlock(i, 0), r[l - 1] = r[l - 1] + 1 | 0;
              for (var o = 0; o < l; o++) e[t + o] ^= i[o]
            }
          }), we.Decryptor = _e, we), Je = (Xe = He).lib.StreamCipher, Pe = Xe.algo, Me = [], De = [], xe = [], Be = Pe.RabbitLegacy = Je.extend({
            _doReset: function() {
              for (var e = this._key.words, t = this.cfg.iv, a = this._X = [e[0], e[3] << 16 | e[2] >>> 16, e[1], e[0] << 16 | e[3] >>> 16, e[2], e[1] << 16 | e[0] >>> 16, e[3], e[2] << 16 | e[1] >>> 16], l = this._C = [e[2] << 16 | e[2] >>> 16, 4294901760 & e[0] | 65535 & e[1], e[3] << 16 | e[3] >>> 16, 4294901760 & e[1] | 65535 & e[2], e[0] << 16 | e[0] >>> 16, 4294901760 & e[2] | 65535 & e[3], e[1] << 16 | e[1] >>> 16, 4294901760 & e[3] | 65535 & e[0]], n = this._b = 0; n < 4; n++) Ke.call(this);
              for (n = 0; n < 8; n++) l[n] ^= a[n + 4 & 7];
              if (t) {
                var r = t.words,
                  i = r[0],
                  o = r[1],
                  u = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8),
                  s = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8),
                  c = u >>> 16 | 4294901760 & s,
                  f = s << 16 | 65535 & u;
                for (l[0] ^= u, l[1] ^= c, l[2] ^= s, l[3] ^= f, l[4] ^= u, l[5] ^= c, l[6] ^= s, l[7] ^= f, n = 0; n < 4; n++) Ke.call(this)
              }
            },
            _doProcessBlock: function(e, t) {
              var a = this._X;
              Ke.call(this), Me[0] = a[0] ^ a[5] >>> 16 ^ a[3] << 16, Me[1] = a[2] ^ a[7] >>> 16 ^ a[5] << 16, Me[2] = a[4] ^ a[1] >>> 16 ^ a[7] << 16, Me[3] = a[6] ^ a[3] >>> 16 ^ a[1] << 16;
              for (var l = 0; l < 4; l++) Me[l] = 16711935 & (Me[l] << 8 | Me[l] >>> 24) | 4278255360 & (Me[l] << 24 | Me[l] >>> 8), e[t + l] ^= Me[l]
            },
            blockSize: 4,
            ivSize: 2
          }), Xe.RabbitLegacy = Je._createHelper(Be), He.pad.ZeroPadding = {
            pad: function(e, t) {
              var a = 4 * t;
              e.clamp(), e.sigBytes += a - (e.sigBytes % a || a)
            },
            unpad: function(e) {
              for (var t = e.words, a = e.sigBytes - 1; !(t[a >>> 2] >>> 24 - a % 4 * 8 & 255);) a--;
              e.sigBytes = a + 1
            }
          }, He
      }))
    },
    "22c2": function(e, t, a) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 32,
          t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          l = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
          n = [];
        if (a = a || l.length, e)
          for (var r = 0; r < e; r++) n[r] = l[0 | Math.random() * a];
        else {
          var i;
          n[8] = n[13] = n[18] = n[23] = "-", n[14] = "4";
          for (var o = 0; o < 36; o++) n[o] || (i = 0 | 16 * Math.random(), n[o] = l[19 == o ? 3 & i | 8 : i])
        }
        return t ? (n.shift(), "u" + n.join("")) : n.join("")
      }
    },
    "28d0": function(e, t, a) {
      t.nextTick = function(e) {
          var t = Array.prototype.slice.call(arguments);
          t.shift(), setTimeout((function() {
            e.apply(null, t)
          }), 0)
        }, t.platform = t.arch = t.execPath = t.title = "browser", t.pid = 1, t.browser = !0, t.env = {}, t.argv = [], t.binding = function(e) {
          throw new Error("No such module. (Possibly not yet loaded)")
        },
        function() {
          var e, l = "/";
          t.cwd = function() {
            return l
          }, t.chdir = function(t) {
            e || (e = a("a3fc")), l = e.resolve(t, l)
          }
        }(), t.exit = t.kill = t.umask = t.dlopen = t.uptime = t.memoryUsage = t.uvCounters = function() {}, t.features = {}
    },
    3187: function(e, t, a) {
      (function(e) {
        var l = a("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var n = l(a("3b2d"));

        function r() {
          return (r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var l in a) Object.prototype.hasOwnProperty.call(a, l) && (e[l] = a[l])
            }
            return e
          }).apply(this, arguments)
        }
        var i = /%[sdj%]/g;

        function o(e) {
          if (!e || !e.length) return null;
          var t = {};
          return e.forEach((function(e) {
            var a = e.field;
            t[a] = t[a] || [], t[a].push(e)
          })), t
        }

        function u() {
          for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
          var l = 1,
            n = t[0],
            r = t.length;
          if ("function" == typeof n) return n.apply(null, t.slice(1));
          if ("string" == typeof n) {
            for (var o = String(n).replace(i, (function(e) {
                if ("%%" === e) return "%";
                if (l >= r) return e;
                switch (e) {
                  case "%s":
                    return String(t[l++]);
                  case "%d":
                    return Number(t[l++]);
                  case "%j":
                    try {
                      return JSON.stringify(t[l++])
                    } catch (e) {
                      return "[Circular]"
                    }
                    break;
                  default:
                    return e
                }
              })), u = t[l]; l < r; u = t[++l]) o += " " + u;
            return o
          }
          return n
        }

        function s(e, t) {
          return null == e || !("array" !== t || !Array.isArray(e) || e.length) || !(! function(e) {
            return "string" === e || "url" === e || "hex" === e || "email" === e || "pattern" === e
          }(t) || "string" != typeof e || e)
        }

        function c(e, t, a) {
          var l = 0,
            n = e.length;
          ! function r(i) {
            if (i && i.length) a(i);
            else {
              var o = l;
              l += 1, o < n ? t(e[o], r) : a([])
            }
          }([])
        }

        function f(e, t, a, l) {
          if (t.first) {
            var n = new Promise((function(t, n) {
              c(function(e) {
                var t = [];
                return Object.keys(e).forEach((function(a) {
                  t.push.apply(t, e[a])
                })), t
              }(e), a, (function(e) {
                return l(e), e.length ? n({
                  errors: e,
                  fields: o(e)
                }) : t()
              }))
            }));
            return n.catch((function(e) {
              return e
            })), n
          }
          var r = t.firstFields || [];
          !0 === r && (r = Object.keys(e));
          var i = Object.keys(e),
            u = i.length,
            s = 0,
            f = [],
            v = new Promise((function(t, n) {
              var v = function(e) {
                if (f.push.apply(f, e), ++s === u) return l(f), f.length ? n({
                  errors: f,
                  fields: o(f)
                }) : t()
              };
              i.length || (l(f), t()), i.forEach((function(t) {
                var l = e[t]; - 1 !== r.indexOf(t) ? c(l, a, v) : function(e, t, a) {
                  var l = [],
                    n = 0,
                    r = e.length;

                  function i(e) {
                    l.push.apply(l, e), ++n === r && a(l)
                  }
                  e.forEach((function(e) {
                    t(e, i)
                  }))
                }(l, a, v)
              }))
            }));
          return v.catch((function(e) {
            return e
          })), v
        }

        function v(e) {
          return function(t) {
            return t && t.message ? (t.field = t.field || e.fullField, t) : {
              message: "function" == typeof t ? t() : t,
              field: t.field || e.fullField
            }
          }
        }

        function h(e, t) {
          if (t)
            for (var a in t)
              if (t.hasOwnProperty(a)) {
                var l = t[a];
                "object" === (0, n.default)(l) && "object" === (0, n.default)(e[a]) ? e[a] = r({}, e[a], {}, l): e[a] = l
              } return e
        }

        function d(e, t, a, l, n, r) {
          !e.required || a.hasOwnProperty(e.field) && !s(t, r || e.type) || l.push(u(n.messages.required, e.fullField))
        }
        void 0 !== e && Object({
          NODE_ENV: "production",
          VUE_APP_DARK_MODE: "false",
          VUE_APP_NAME: "dsmall",
          VUE_APP_PLATFORM: "mp-weixin",
          BASE_URL: "/"
        });
        var b = {
            email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            url: new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", "i"),
            hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
          },
          p = {
            integer: function(e) {
              return p.number(e) && parseInt(e, 10) === e
            },
            float: function(e) {
              return p.number(e) && !p.integer(e)
            },
            array: function(e) {
              return Array.isArray(e)
            },
            regexp: function(e) {
              if (e instanceof RegExp) return !0;
              try {
                return !!new RegExp(e)
              } catch (e) {
                return !1
              }
            },
            date: function(e) {
              return "function" == typeof e.getTime && "function" == typeof e.getMonth && "function" == typeof e.getYear
            },
            number: function(e) {
              return !isNaN(e) && "number" == typeof + e
            },
            object: function(e) {
              return "object" === (0, n.default)(e) && !p.array(e)
            },
            method: function(e) {
              return "function" == typeof e
            },
            email: function(e) {
              return "string" == typeof e && !!e.match(b.email) && e.length < 255
            },
            url: function(e) {
              return "string" == typeof e && !!e.match(b.url)
            },
            hex: function(e) {
              return "string" == typeof e && !!e.match(b.hex)
            }
          },
          g = {
            required: d,
            whitespace: function(e, t, a, l, n) {
              (/^\s+$/.test(t) || "" === t) && l.push(u(n.messages.whitespace, e.fullField))
            },
            type: function(e, t, a, l, r) {
              if (e.required && void 0 === t) d(e, t, a, l, r);
              else {
                var i = e.type;
                ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"].indexOf(i) > -1 ? p[i](t) || l.push(u(r.messages.types[i], e.fullField, e.type)) : i && (0, n.default)(t) !== e.type && l.push(u(r.messages.types[i], e.fullField, e.type))
              }
            },
            range: function(e, t, a, l, n) {
              var r = "number" == typeof e.len,
                i = "number" == typeof e.min,
                o = "number" == typeof e.max,
                s = t,
                c = null,
                f = "number" == typeof t,
                v = "string" == typeof t,
                h = Array.isArray(t);
              if (f ? c = "number" : v ? c = "string" : h && (c = "array"), !c) return !1;
              h && (s = t.length), v && (s = t.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "_").length), r ? s !== e.len && l.push(u(n.messages[c].len, e.fullField, e.len)) : i && !o && s < e.min ? l.push(u(n.messages[c].min, e.fullField, e.min)) : o && !i && s > e.max ? l.push(u(n.messages[c].max, e.fullField, e.max)) : i && o && (s < e.min || s > e.max) && l.push(u(n.messages[c].range, e.fullField, e.min, e.max))
            },
            enum: function(e, t, a, l, n) {
              e.enum = Array.isArray(e.enum) ? e.enum : [], -1 === e.enum.indexOf(t) && l.push(u(n.messages.enum, e.fullField, e.enum.join(", ")))
            },
            pattern: function(e, t, a, l, n) {
              if (e.pattern)
                if (e.pattern instanceof RegExp) e.pattern.lastIndex = 0, e.pattern.test(t) || l.push(u(n.messages.pattern.mismatch, e.fullField, t, e.pattern));
                else if ("string" == typeof e.pattern) {
                new RegExp(e.pattern).test(t) || l.push(u(n.messages.pattern.mismatch, e.fullField, t, e.pattern))
              }
            }
          };

        function y(e, t, a, l, n) {
          var r = e.type,
            i = [];
          if (e.required || !e.required && l.hasOwnProperty(e.field)) {
            if (s(t, r) && !e.required) return a();
            g.required(e, t, l, i, n, r), s(t, r) || g.type(e, t, l, i, n)
          }
          a(i)
        }
        var S = {
          string: function(e, t, a, l, n) {
            var r = [];
            if (e.required || !e.required && l.hasOwnProperty(e.field)) {
              if (s(t, "string") && !e.required) return a();
              g.required(e, t, l, r, n, "string"), s(t, "string") || (g.type(e, t, l, r, n), g.range(e, t, l, r, n), g.pattern(e, t, l, r, n), !0 === e.whitespace && g.whitespace(e, t, l, r, n))
            }
            a(r)
          },
          method: function(e, t, a, l, n) {
            var r = [];
            if (e.required || !e.required && l.hasOwnProperty(e.field)) {
              if (s(t) && !e.required) return a();
              g.required(e, t, l, r, n), void 0 !== t && g.type(e, t, l, r, n)
            }
            a(r)
          },
          number: function(e, t, a, l, n) {
            var r = [];
            if (e.required || !e.required && l.hasOwnProperty(e.field)) {
              if ("" === t && (t = void 0), s(t) && !e.required) return a();
              g.required(e, t, l, r, n), void 0 !== t && (g.type(e, t, l, r, n), g.range(e, t, l, r, n))
            }
            a(r)
          },
          boolean: function(e, t, a, l, n) {
            var r = [];
            if (e.required || !e.required && l.hasOwnProperty(e.field)) {
              if (s(t) && !e.required) return a();
              g.required(e, t, l, r, n), void 0 !== t && g.type(e, t, l, r, n)
            }
            a(r)
          },
          regexp: function(e, t, a, l, n) {
            var r = [];
            if (e.required || !e.required && l.hasOwnProperty(e.field)) {
              if (s(t) && !e.required) return a();
              g.required(e, t, l, r, n), s(t) || g.type(e, t, l, r, n)
            }
            a(r)
          },
          integer: function(e, t, a, l, n) {
            var r = [];
            if (e.required || !e.required && l.hasOwnProperty(e.field)) {
              if (s(t) && !e.required) return a();
              g.required(e, t, l, r, n), void 0 !== t && (g.type(e, t, l, r, n), g.range(e, t, l, r, n))
            }
            a(r)
          },
          float: function(e, t, a, l, n) {
            var r = [];
            if (e.required || !e.required && l.hasOwnProperty(e.field)) {
              if (s(t) && !e.required) return a();
              g.required(e, t, l, r, n), void 0 !== t && (g.type(e, t, l, r, n), g.range(e, t, l, r, n))
            }
            a(r)
          },
          array: function(e, t, a, l, n) {
            var r = [];
            if (e.required || !e.required && l.hasOwnProperty(e.field)) {
              if (s(t, "array") && !e.required) return a();
              g.required(e, t, l, r, n, "array"), s(t, "array") || (g.type(e, t, l, r, n), g.range(e, t, l, r, n))
            }
            a(r)
          },
          object: function(e, t, a, l, n) {
            var r = [];
            if (e.required || !e.required && l.hasOwnProperty(e.field)) {
              if (s(t) && !e.required) return a();
              g.required(e, t, l, r, n), void 0 !== t && g.type(e, t, l, r, n)
            }
            a(r)
          },
          enum: function(e, t, a, l, n) {
            var r = [];
            if (e.required || !e.required && l.hasOwnProperty(e.field)) {
              if (s(t) && !e.required) return a();
              g.required(e, t, l, r, n), void 0 !== t && g.enum(e, t, l, r, n)
            }
            a(r)
          },
          pattern: function(e, t, a, l, n) {
            var r = [];
            if (e.required || !e.required && l.hasOwnProperty(e.field)) {
              if (s(t, "string") && !e.required) return a();
              g.required(e, t, l, r, n), s(t, "string") || g.pattern(e, t, l, r, n)
            }
            a(r)
          },
          date: function(e, t, a, l, n) {
            var r = [];
            if (e.required || !e.required && l.hasOwnProperty(e.field)) {
              if (s(t) && !e.required) return a();
              var i;
              g.required(e, t, l, r, n), s(t) || (i = "number" == typeof t ? new Date(t) : t, g.type(e, i, l, r, n), i && g.range(e, i.getTime(), l, r, n))
            }
            a(r)
          },
          url: y,
          hex: y,
          email: y,
          required: function(e, t, a, l, r) {
            var i = [],
              o = Array.isArray(t) ? "array" : (0, n.default)(t);
            g.required(e, t, l, i, r, o), a(i)
          },
          any: function(e, t, a, l, n) {
            var r = [];
            if (e.required || !e.required && l.hasOwnProperty(e.field)) {
              if (s(t) && !e.required) return a();
              g.required(e, t, l, r, n)
            }
            a(r)
          }
        };

        function m() {
          return {
            default: "Validation error on field %s",
            required: "%s is required",
            enum: "%s must be one of %s",
            whitespace: "%s cannot be empty",
            date: {
              format: "%s date %s is invalid for format %s",
              parse: "%s date could not be parsed, %s is invalid ",
              invalid: "%s date %s is invalid"
            },
            types: {
              string: "%s is not a %s",
              method: "%s is not a %s (function)",
              array: "%s is not an %s",
              object: "%s is not an %s",
              number: "%s is not a %s",
              date: "%s is not a %s",
              boolean: "%s is not a %s",
              integer: "%s is not an %s",
              float: "%s is not a %s",
              regexp: "%s is not a valid %s",
              email: "%s is not a valid %s",
              url: "%s is not a valid %s",
              hex: "%s is not a valid %s"
            },
            string: {
              len: "%s must be exactly %s characters",
              min: "%s must be at least %s characters",
              max: "%s cannot be longer than %s characters",
              range: "%s must be between %s and %s characters"
            },
            number: {
              len: "%s must equal %s",
              min: "%s cannot be less than %s",
              max: "%s cannot be greater than %s",
              range: "%s must be between %s and %s"
            },
            array: {
              len: "%s must be exactly %s in length",
              min: "%s cannot be less than %s in length",
              max: "%s cannot be greater than %s in length",
              range: "%s must be between %s and %s in length"
            },
            pattern: {
              mismatch: "%s value %s does not match pattern %s"
            },
            clone: function() {
              var e = JSON.parse(JSON.stringify(this));
              return e.clone = this.clone, e
            }
          }
        }
        var Y = m();

        function Z(e) {
          this.rules = null, this._messages = Y, this.define(e)
        }
        Z.prototype = {
          messages: function(e) {
            return e && (this._messages = h(m(), e)), this._messages
          },
          define: function(e) {
            if (!e) throw new Error("Cannot configure a schema with no rules");
            if ("object" !== (0, n.default)(e) || Array.isArray(e)) throw new Error("Rules must be an object");
            var t, a;
            for (t in this.rules = {}, e) e.hasOwnProperty(t) && (a = e[t], this.rules[t] = Array.isArray(a) ? a : [a])
          },
          validate: function(e, t, a) {
            var l = this;
            void 0 === t && (t = {}), void 0 === a && (a = function() {});
            var i, s, c = e,
              d = t,
              b = a;
            if ("function" == typeof d && (b = d, d = {}), !this.rules || 0 === Object.keys(this.rules).length) return b && b(), Promise.resolve();
            if (d.messages) {
              var p = this.messages();
              p === Y && (p = m()), h(p, d.messages), d.messages = p
            } else d.messages = this.messages();
            var g = {};
            (d.keys || Object.keys(this.rules)).forEach((function(t) {
              i = l.rules[t], s = c[t], i.forEach((function(a) {
                var n = a;
                "function" == typeof n.transform && (c === e && (c = r({}, c)), s = c[t] = n.transform(s)), (n = "function" == typeof n ? {
                  validator: n
                } : r({}, n)).validator = l.getValidationMethod(n), n.field = t, n.fullField = n.fullField || t, n.type = l.getType(n), n.validator && (g[t] = g[t] || [], g[t].push({
                  rule: n,
                  value: s,
                  source: c,
                  field: t
                }))
              }))
            }));
            var y = {};
            return f(g, d, (function(e, t) {
              var a, l = e.rule,
                i = !("object" !== l.type && "array" !== l.type || "object" !== (0, n.default)(l.fields) && "object" !== (0, n.default)(l.defaultField));

              function o(e, t) {
                return r({}, t, {
                  fullField: l.fullField + "." + e
                })
              }

              function s(a) {
                void 0 === a && (a = []);
                var n = a;
                if (Array.isArray(n) || (n = [n]), !d.suppressWarning && n.length && Z.warning("async-validator:", n), n.length && l.message && (n = [].concat(l.message)), n = n.map(v(l)), d.first && n.length) return y[l.field] = 1, t(n);
                if (i) {
                  if (l.required && !e.value) return n = l.message ? [].concat(l.message).map(v(l)) : d.error ? [d.error(l, u(d.messages.required, l.field))] : [], t(n);
                  var s = {};
                  if (l.defaultField)
                    for (var c in e.value) e.value.hasOwnProperty(c) && (s[c] = l.defaultField);
                  for (var f in s = r({}, s, {}, e.rule.fields))
                    if (s.hasOwnProperty(f)) {
                      var h = Array.isArray(s[f]) ? s[f] : [s[f]];
                      s[f] = h.map(o.bind(null, f))
                    } var b = new Z(s);
                  b.messages(d.messages), e.rule.options && (e.rule.options.messages = d.messages, e.rule.options.error = d.error), b.validate(e.value, e.rule.options || d, (function(e) {
                    var a = [];
                    n && n.length && a.push.apply(a, n), e && e.length && a.push.apply(a, e), t(a.length ? a : null)
                  }))
                } else t(n)
              }
              i = i && (l.required || !l.required && e.value), l.field = e.field, l.asyncValidator ? a = l.asyncValidator(l, e.value, s, e.source, d) : l.validator && (!0 === (a = l.validator(l, e.value, s, e.source, d)) ? s() : !1 === a ? s(l.message || l.field + " fails") : a instanceof Array ? s(a) : a instanceof Error && s(a.message)), a && a.then && a.then((function() {
                return s()
              }), (function(e) {
                return s(e)
              }))
            }), (function(e) {
              ! function(e) {
                var t, a = [],
                  l = {};

                function n(e) {
                  var t;
                  Array.isArray(e) ? a = (t = a).concat.apply(t, e) : a.push(e)
                }
                for (t = 0; t < e.length; t++) n(e[t]);
                a.length ? l = o(a) : (a = null, l = null), b(a, l)
              }(e)
            }))
          },
          getType: function(e) {
            if (void 0 === e.type && e.pattern instanceof RegExp && (e.type = "pattern"), "function" != typeof e.validator && e.type && !S.hasOwnProperty(e.type)) throw new Error(u("Unknown rule type %s", e.type));
            return e.type || "string"
          },
          getValidationMethod: function(e) {
            if ("function" == typeof e.validator) return e.validator;
            var t = Object.keys(e),
              a = t.indexOf("message");
            return -1 !== a && t.splice(a, 1), 1 === t.length && "required" === t[0] ? S.required : S[this.getType(e)] || !1
          }
        }, Z.register = function(e, t) {
          if ("function" != typeof t) throw new Error("Cannot register a validator by type, validator is not a function");
          S[e] = t
        }, Z.warning = function() {}, Z.messages = Y;
        var L = Z;
        t.default = L
      }).call(this, a("28d0"))
    },
    3223: function(e, t, a) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var l = ["qy", "env", "error", "version", "lanDebug", "cloud", "serviceMarket", "router", "worklet", "__webpack_require_UNI_MP_PLUGIN__"],
        n = ["lanDebug", "router", "worklet"],
        r = "undefined" != typeof globalThis ? globalThis : function() {
          return this
        }(),
        i = ["w", "x"].join(""),
        o = r[i],
        u = o.getLaunchOptionsSync ? o.getLaunchOptionsSync() : null;

      function s(e) {
        return (!u || 1154 !== u.scene || !n.includes(e)) && (l.indexOf(e) > -1 || "function" == typeof o[e])
      }
      r[i] = function() {
        var e = {};
        for (var t in o) s(t) && (e[t] = o[t]);
        return e
      }(), r[i].canIUse("getAppBaseInfo") || (r[i].getAppBaseInfo = r[i].getSystemInfoSync), r[i].canIUse("getWindowInfo") || (r[i].getWindowInfo = r[i].getSystemInfoSync), r[i].canIUse("getDeviceInfo") || (r[i].getDeviceInfo = r[i].getSystemInfoSync);
      var c = r[i];
      t.default = c
    },
    3240: function(t, a, l) {
      l.r(a),
        function(t) {
          /*!
           * Vue.js v2.6.11
           * (c) 2014-2024 Evan You
           * Released under the MIT License.
           */
          var l = Object.freeze({});

          function n(e) {
            return null == e
          }

          function r(e) {
            return null != e
          }

          function i(e) {
            return !0 === e
          }

          function o(t) {
            return "string" == typeof t || "number" == typeof t || "symbol" === e(t) || "boolean" == typeof t
          }

          function u(t) {
            return null !== t && "object" === e(t)
          }
          var s = Object.prototype.toString;

          function c(e) {
            return "[object Object]" === s.call(e)
          }

          function f(e) {
            var t = parseFloat(String(e));
            return t >= 0 && Math.floor(t) === t && isFinite(e)
          }

          function v(e) {
            return r(e) && "function" == typeof e.then && "function" == typeof e.catch
          }

          function h(e) {
            return null == e ? "" : Array.isArray(e) || c(e) && e.toString === s ? JSON.stringify(e, null, 2) : String(e)
          }

          function d(e) {
            var t = parseFloat(e);
            return isNaN(t) ? e : t
          }

          function b(e, t) {
            for (var a = Object.create(null), l = e.split(","), n = 0; n < l.length; n++) a[l[n]] = !0;
            return t ? function(e) {
              return a[e.toLowerCase()]
            } : function(e) {
              return a[e]
            }
          }
          b("slot,component", !0);
          var p = b("key,ref,slot,slot-scope,is");

          function g(e, t) {
            if (e.length) {
              var a = e.indexOf(t);
              if (a > -1) return e.splice(a, 1)
            }
          }
          var y = Object.prototype.hasOwnProperty;

          function S(e, t) {
            return y.call(e, t)
          }

          function m(e) {
            var t = Object.create(null);
            return function(a) {
              return t[a] || (t[a] = e(a))
            }
          }
          var Y = /-(\w)/g,
            Z = m((function(e) {
              return e.replace(Y, (function(e, t) {
                return t ? t.toUpperCase() : ""
              }))
            })),
            L = m((function(e) {
              return e.charAt(0).toUpperCase() + e.slice(1)
            })),
            C = /\B([A-Z])/g,
            T = m((function(e) {
              return e.replace(C, "-$1").toLowerCase()
            })),
            w = Function.prototype.bind ? function(e, t) {
              return e.bind(t)
            } : function(e, t) {
              function a(a) {
                var l = arguments.length;
                return l ? l > 1 ? e.apply(t, arguments) : e.call(t, a) : e.call(t)
              }
              return a._length = e.length, a
            };

          function _(e, t) {
            t = t || 0;
            for (var a = e.length - t, l = new Array(a); a--;) l[a] = e[a + t];
            return l
          }

          function X(e, t) {
            for (var a in t) e[a] = t[a];
            return e
          }

          function J(e) {
            for (var t = {}, a = 0; a < e.length; a++) e[a] && X(t, e[a]);
            return t
          }

          function P(e, t, a) {}
          var M = function(e, t, a) {
              return !1
            },
            D = function(e) {
              return e
            };

          function x(e, t) {
            if (e === t) return !0;
            var a = u(e),
              l = u(t);
            if (!a || !l) return !a && !l && String(e) === String(t);
            try {
              var n = Array.isArray(e),
                r = Array.isArray(t);
              if (n && r) return e.length === t.length && e.every((function(e, a) {
                return x(e, t[a])
              }));
              if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
              if (n || r) return !1;
              var i = Object.keys(e),
                o = Object.keys(t);
              return i.length === o.length && i.every((function(a) {
                return x(e[a], t[a])
              }))
            } catch (e) {
              return !1
            }
          }

          function B(e, t) {
            for (var a = 0; a < e.length; a++)
              if (x(e[a], t)) return a;
            return -1
          }

          function H(e) {
            var t = !1;
            return function() {
              t || (t = !0, e.apply(this, arguments))
            }
          }
          var Q = ["component", "directive", "filter"],
            A = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch"],
            F = {
              optionMergeStrategies: Object.create(null),
              silent: !1,
              productionTip: !1,
              devtools: !1,
              performance: !1,
              errorHandler: null,
              warnHandler: null,
              ignoredElements: [],
              keyCodes: Object.create(null),
              isReservedTag: M,
              isReservedAttr: M,
              isUnknownElement: M,
              getTagNamespace: P,
              parsePlatformTagName: D,
              mustUseProp: M,
              async: !0,
              _lifecycleHooks: A
            };

          function N(e) {
            var t = (e + "").charCodeAt(0);
            return 36 === t || 95 === t
          }

          function E(e, t, a, l) {
            Object.defineProperty(e, t, {
              value: a,
              enumerable: !!l,
              writable: !0,
              configurable: !0
            })
          }
          var O, W = new RegExp("[^" + /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/.source + ".$_\\d]"),
            k = "__proto__" in {},
            G = "undefined" != typeof window,
            R = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform,
            K = R && WXEnvironment.platform.toLowerCase(),
            I = G && window.navigator && window.navigator.userAgent.toLowerCase(),
            $ = I && /msie|trident/.test(I),
            j = (I && I.indexOf("msie 9.0"), I && I.indexOf("edge/"), I && I.indexOf("android"), I && /iphone|ipad|ipod|ios/.test(I) || "ios" === K),
            z = (I && /chrome\/\d+/.test(I), I && /phantomjs/.test(I), I && I.match(/firefox\/(\d+)/), {}.watch);
          if (G) try {
            var U = {};
            Object.defineProperty(U, "passive", {
              get: function() {}
            }), window.addEventListener("test-passive", null, U)
          } catch (e) {}
          var q = function() {
              return void 0 === O && (O = !G && !R && void 0 !== t && t.process && "server" === t.process.env.VUE_ENV), O
            },
            V = G && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

          function ee(e) {
            return "function" == typeof e && /native code/.test(e.toString())
          }
          var te, ae = "undefined" != typeof Symbol && ee(Symbol) && "undefined" != typeof Reflect && ee(Reflect.ownKeys);
          te = "undefined" != typeof Set && ee(Set) ? Set : function() {
            function e() {
              this.set = Object.create(null)
            }
            return e.prototype.has = function(e) {
              return !0 === this.set[e]
            }, e.prototype.add = function(e) {
              this.set[e] = !0
            }, e.prototype.clear = function() {
              this.set = Object.create(null)
            }, e
          }();
          var le = P,
            ne = 0,
            re = function() {
              this.id = ne++, this.subs = []
            };

          function ie(e) {
            re.SharedObject.targetStack.push(e), re.SharedObject.target = e, re.target = e
          }

          function oe() {
            re.SharedObject.targetStack.pop(), re.SharedObject.target = re.SharedObject.targetStack[re.SharedObject.targetStack.length - 1], re.target = re.SharedObject.target
          }
          re.prototype.addSub = function(e) {
            this.subs.push(e)
          }, re.prototype.removeSub = function(e) {
            g(this.subs, e)
          }, re.prototype.depend = function() {
            re.SharedObject.target && re.SharedObject.target.addDep(this)
          }, re.prototype.notify = function() {
            for (var e = this.subs.slice(), t = 0, a = e.length; t < a; t++) e[t].update()
          }, (re.SharedObject = {}).target = null, re.SharedObject.targetStack = [];
          var ue = function(e, t, a, l, n, r, i, o) {
              this.tag = e, this.data = t, this.children = a, this.text = l, this.elm = n, this.ns = void 0, this.context = r, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = t && t.key, this.componentOptions = i, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = o, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1
            },
            se = {
              child: {
                configurable: !0
              }
            };
          se.child.get = function() {
            return this.componentInstance
          }, Object.defineProperties(ue.prototype, se);
          var ce = function(e) {
            void 0 === e && (e = "");
            var t = new ue;
            return t.text = e, t.isComment = !0, t
          };

          function fe(e) {
            return new ue(void 0, void 0, void 0, String(e))
          }
          var ve = Array.prototype,
            he = Object.create(ve);
          ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach((function(e) {
            var t = ve[e];
            E(he, e, (function() {
              for (var a = [], l = arguments.length; l--;) a[l] = arguments[l];
              var n, r = t.apply(this, a),
                i = this.__ob__;
              switch (e) {
                case "push":
                case "unshift":
                  n = a;
                  break;
                case "splice":
                  n = a.slice(2)
              }
              return n && i.observeArray(n), i.dep.notify(), r
            }))
          }));
          var de = Object.getOwnPropertyNames(he),
            be = !0;

          function pe(e) {
            be = e
          }
          var ge = function(e) {
            this.value = e, this.dep = new re, this.vmCount = 0, E(e, "__ob__", this), Array.isArray(e) ? (k ? e.push !== e.__proto__.push ? ye(e, he, de) : function(e, t) {
              e.__proto__ = t
            }(e, he) : ye(e, he, de), this.observeArray(e)) : this.walk(e)
          };

          function ye(e, t, a) {
            for (var l = 0, n = a.length; l < n; l++) {
              var r = a[l];
              E(e, r, t[r])
            }
          }

          function Se(e, t) {
            var a;
            if (u(e) && !(e instanceof ue)) return S(e, "__ob__") && e.__ob__ instanceof ge ? a = e.__ob__ : !be || q() || !Array.isArray(e) && !c(e) || !Object.isExtensible(e) || e._isVue || e.__v_isMPComponent || (a = new ge(e)), t && a && a.vmCount++, a
          }

          function me(e, t, a, l, n) {
            var r = new re,
              i = Object.getOwnPropertyDescriptor(e, t);
            if (!i || !1 !== i.configurable) {
              var o = i && i.get,
                u = i && i.set;
              o && !u || 2 !== arguments.length || (a = e[t]);
              var s = !n && Se(a);
              Object.defineProperty(e, t, {
                enumerable: !0,
                configurable: !0,
                get: function() {
                  var t = o ? o.call(e) : a;
                  return re.SharedObject.target && (r.depend(), s && (s.dep.depend(), Array.isArray(t) && Le(t))), t
                },
                set: function(t) {
                  var l = o ? o.call(e) : a;
                  t === l || t != t && l != l || o && !u || (u ? u.call(e, t) : a = t, s = !n && Se(t), r.notify())
                }
              })
            }
          }

          function Ye(e, t, a) {
            if (Array.isArray(e) && f(t)) return e.length = Math.max(e.length, t), e.splice(t, 1, a), a;
            if (t in e && !(t in Object.prototype)) return e[t] = a, a;
            var l = e.__ob__;
            return e._isVue || l && l.vmCount ? a : l ? (me(l.value, t, a), l.dep.notify(), a) : (e[t] = a, a)
          }

          function Ze(e, t) {
            if (Array.isArray(e) && f(t)) e.splice(t, 1);
            else {
              var a = e.__ob__;
              e._isVue || a && a.vmCount || S(e, t) && (delete e[t], a && a.dep.notify())
            }
          }

          function Le(e) {
            for (var t = void 0, a = 0, l = e.length; a < l; a++)(t = e[a]) && t.__ob__ && t.__ob__.dep.depend(), Array.isArray(t) && Le(t)
          }
          ge.prototype.walk = function(e) {
            for (var t = Object.keys(e), a = 0; a < t.length; a++) me(e, t[a])
          }, ge.prototype.observeArray = function(e) {
            for (var t = 0, a = e.length; t < a; t++) Se(e[t])
          };
          var Ce = F.optionMergeStrategies;

          function Te(e, t) {
            if (!t) return e;
            for (var a, l, n, r = ae ? Reflect.ownKeys(t) : Object.keys(t), i = 0; i < r.length; i++) "__ob__" !== (a = r[i]) && (l = e[a], n = t[a], S(e, a) ? l !== n && c(l) && c(n) && Te(l, n) : Ye(e, a, n));
            return e
          }

          function we(e, t, a) {
            return a ? function() {
              var l = "function" == typeof t ? t.call(a, a) : t,
                n = "function" == typeof e ? e.call(a, a) : e;
              return l ? Te(l, n) : n
            } : t ? e ? function() {
              return Te("function" == typeof t ? t.call(this, this) : t, "function" == typeof e ? e.call(this, this) : e)
            } : t : e
          }

          function _e(e, t) {
            var a = t ? e ? e.concat(t) : Array.isArray(t) ? t : [t] : e;
            return a ? function(e) {
              for (var t = [], a = 0; a < e.length; a++) - 1 === t.indexOf(e[a]) && t.push(e[a]);
              return t
            }(a) : a
          }

          function Xe(e, t, a, l) {
            var n = Object.create(e || null);
            return t ? X(n, t) : n
          }
          Ce.data = function(e, t, a) {
            return a ? we(e, t, a) : t && "function" != typeof t ? e : we(e, t)
          }, A.forEach((function(e) {
            Ce[e] = _e
          })), Q.forEach((function(e) {
            Ce[e + "s"] = Xe
          })), Ce.watch = function(e, t, a, l) {
            if (e === z && (e = void 0), t === z && (t = void 0), !t) return Object.create(e || null);
            if (!e) return t;
            var n = {};
            for (var r in X(n, e), t) {
              var i = n[r],
                o = t[r];
              i && !Array.isArray(i) && (i = [i]), n[r] = i ? i.concat(o) : Array.isArray(o) ? o : [o]
            }
            return n
          }, Ce.props = Ce.methods = Ce.inject = Ce.computed = function(e, t, a, l) {
            if (!e) return t;
            var n = Object.create(null);
            return X(n, e), t && X(n, t), n
          }, Ce.provide = we;
          var Je = function(e, t) {
            return void 0 === t ? e : t
          };

          function Pe(e, t, a) {
            if ("function" == typeof t && (t = t.options), function(e, t) {
                var a = e.props;
                if (a) {
                  var l, n, r = {};
                  if (Array.isArray(a))
                    for (l = a.length; l--;) "string" == typeof(n = a[l]) && (r[Z(n)] = {
                      type: null
                    });
                  else if (c(a))
                    for (var i in a) n = a[i], r[Z(i)] = c(n) ? n : {
                      type: n
                    };
                  e.props = r
                }
              }(t), function(e, t) {
                var a = e.inject;
                if (a) {
                  var l = e.inject = {};
                  if (Array.isArray(a))
                    for (var n = 0; n < a.length; n++) l[a[n]] = {
                      from: a[n]
                    };
                  else if (c(a))
                    for (var r in a) {
                      var i = a[r];
                      l[r] = c(i) ? X({
                        from: r
                      }, i) : {
                        from: i
                      }
                    }
                }
              }(t), function(e) {
                var t = e.directives;
                if (t)
                  for (var a in t) {
                    var l = t[a];
                    "function" == typeof l && (t[a] = {
                      bind: l,
                      update: l
                    })
                  }
              }(t), !t._base && (t.extends && (e = Pe(e, t.extends, a)), t.mixins))
              for (var l = 0, n = t.mixins.length; l < n; l++) e = Pe(e, t.mixins[l], a);
            var r, i = {};
            for (r in e) o(r);
            for (r in t) S(e, r) || o(r);

            function o(l) {
              var n = Ce[l] || Je;
              i[l] = n(e[l], t[l], a, l)
            }
            return i
          }

          function Me(e, t, a, l) {
            if ("string" == typeof a) {
              var n = e[t];
              if (S(n, a)) return n[a];
              var r = Z(a);
              if (S(n, r)) return n[r];
              var i = L(r);
              return S(n, i) ? n[i] : n[a] || n[r] || n[i]
            }
          }

          function De(e, t, a, l) {
            var n = t[e],
              r = !S(a, e),
              i = a[e],
              o = He(Boolean, n.type);
            if (o > -1)
              if (r && !S(n, "default")) i = !1;
              else if ("" === i || i === T(e)) {
              var u = He(String, n.type);
              (u < 0 || o < u) && (i = !0)
            }
            if (void 0 === i) {
              i = function(e, t, a) {
                if (S(t, "default")) {
                  var l = t.default;
                  return e && e.$options.propsData && void 0 === e.$options.propsData[a] && void 0 !== e._props[a] ? e._props[a] : "function" == typeof l && "Function" !== xe(t.type) ? l.call(e) : l
                }
              }(l, n, e);
              var s = be;
              pe(!0), Se(i), pe(s)
            }
            return i
          }

          function xe(e) {
            var t = e && e.toString().match(/^\s*function (\w+)/);
            return t ? t[1] : ""
          }

          function Be(e, t) {
            return xe(e) === xe(t)
          }

          function He(e, t) {
            if (!Array.isArray(t)) return Be(t, e) ? 0 : -1;
            for (var a = 0, l = t.length; a < l; a++)
              if (Be(t[a], e)) return a;
            return -1
          }

          function Qe(e, t, a) {
            ie();
            try {
              if (t)
                for (var l = t; l = l.$parent;) {
                  var n = l.$options.errorCaptured;
                  if (n)
                    for (var r = 0; r < n.length; r++) try {
                      if (!1 === n[r].call(l, e, t, a)) return
                    } catch (e) {
                      Fe(e, l, "errorCaptured hook")
                    }
                }
              Fe(e, t, a)
            } finally {
              oe()
            }
          }

          function Ae(e, t, a, l, n) {
            var r;
            try {
              (r = a ? e.apply(t, a) : e.call(t)) && !r._isVue && v(r) && !r._handled && (r.catch((function(e) {
                return Qe(e, l, n + " (Promise/async)")
              })), r._handled = !0)
            } catch (e) {
              Qe(e, l, n)
            }
            return r
          }

          function Fe(e, t, a) {
            if (F.errorHandler) try {
              return F.errorHandler.call(null, e, t, a)
            } catch (t) {
              t !== e && Ne(t, null, "config.errorHandler")
            }
            Ne(e, t, a)
          }

          function Ne(e, t, a) {
            if (!G && !R || "undefined" == typeof console) throw e;
            console.error(e)
          }
          var Ee, Oe = [],
            We = !1;

          function ke() {
            We = !1;
            var e = Oe.slice(0);
            Oe.length = 0;
            for (var t = 0; t < e.length; t++) e[t]()
          }
          if ("undefined" != typeof Promise && ee(Promise)) {
            var Ge = Promise.resolve();
            Ee = function() {
              Ge.then(ke), j && setTimeout(P)
            }
          } else if ($ || "undefined" == typeof MutationObserver || !ee(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) Ee = "undefined" != typeof setImmediate && ee(setImmediate) ? function() {
            setImmediate(ke)
          } : function() {
            setTimeout(ke, 0)
          };
          else {
            var Re = 1,
              Ke = new MutationObserver(ke),
              Ie = document.createTextNode(String(Re));
            Ke.observe(Ie, {
              characterData: !0
            }), Ee = function() {
              Re = (Re + 1) % 2, Ie.data = String(Re)
            }
          }

          function $e(e, t) {
            var a;
            if (Oe.push((function() {
                if (e) try {
                  e.call(t)
                } catch (e) {
                  Qe(e, t, "nextTick")
                } else a && a(t)
              })), We || (We = !0, Ee()), !e && "undefined" != typeof Promise) return new Promise((function(e) {
              a = e
            }))
          }
          var je = new te;

          function ze(e) {
            (function e(t, a) {
              var l, n, r = Array.isArray(t);
              if (!(!r && !u(t) || Object.isFrozen(t) || t instanceof ue)) {
                if (t.__ob__) {
                  var i = t.__ob__.dep.id;
                  if (a.has(i)) return;
                  a.add(i)
                }
                if (r)
                  for (l = t.length; l--;) e(t[l], a);
                else
                  for (l = (n = Object.keys(t)).length; l--;) e(t[n[l]], a)
              }
            })(e, je), je.clear()
          }
          var Ue = m((function(e) {
            var t = "&" === e.charAt(0),
              a = "~" === (e = t ? e.slice(1) : e).charAt(0),
              l = "!" === (e = a ? e.slice(1) : e).charAt(0);
            return {
              name: e = l ? e.slice(1) : e,
              once: a,
              capture: l,
              passive: t
            }
          }));

          function qe(e, t) {
            function a() {
              var e = arguments,
                l = a.fns;
              if (!Array.isArray(l)) return Ae(l, null, arguments, t, "v-on handler");
              for (var n = l.slice(), r = 0; r < n.length; r++) Ae(n[r], null, e, t, "v-on handler")
            }
            return a.fns = e, a
          }

          function Ve(e, t, a, l) {
            var i = t.options.mpOptions && t.options.mpOptions.properties;
            if (n(i)) return a;
            var o = t.options.mpOptions.externalClasses || [],
              u = e.attrs,
              s = e.props;
            if (r(u) || r(s))
              for (var c in i) {
                var f = T(c);
                (et(a, s, c, f, !0) || et(a, u, c, f, !1)) && a[c] && -1 !== o.indexOf(f) && l[Z(a[c])] && (a[c] = l[Z(a[c])])
              }
            return a
          }

          function et(e, t, a, l, n) {
            if (r(t)) {
              if (S(t, a)) return e[a] = t[a], n || delete t[a], !0;
              if (S(t, l)) return e[a] = t[l], n || delete t[l], !0
            }
            return !1
          }

          function tt(e) {
            return o(e) ? [fe(e)] : Array.isArray(e) ? function e(t, a) {
              var l, u, s, c, f = [];
              for (l = 0; l < t.length; l++) n(u = t[l]) || "boolean" == typeof u || (c = f[s = f.length - 1], Array.isArray(u) ? u.length > 0 && (at((u = e(u, (a || "") + "_" + l))[0]) && at(c) && (f[s] = fe(c.text + u[0].text), u.shift()), f.push.apply(f, u)) : o(u) ? at(c) ? f[s] = fe(c.text + u) : "" !== u && f.push(fe(u)) : at(u) && at(c) ? f[s] = fe(c.text + u.text) : (i(t._isVList) && r(u.tag) && n(u.key) && r(a) && (u.key = "__vlist" + a + "_" + l + "__"), f.push(u)));
              return f
            }(e) : void 0
          }

          function at(e) {
            return r(e) && r(e.text) && function(e) {
              return !1 === e
            }(e.isComment)
          }

          function lt(e) {
            var t = e.$options.provide;
            t && (e._provided = "function" == typeof t ? t.call(e) : t)
          }

          function nt(e) {
            var t = rt(e.$options.inject, e);
            t && (pe(!1), Object.keys(t).forEach((function(a) {
              me(e, a, t[a])
            })), pe(!0))
          }

          function rt(e, t) {
            if (e) {
              for (var a = Object.create(null), l = ae ? Reflect.ownKeys(e) : Object.keys(e), n = 0; n < l.length; n++) {
                var r = l[n];
                if ("__ob__" !== r) {
                  for (var i = e[r].from, o = t; o;) {
                    if (o._provided && S(o._provided, i)) {
                      a[r] = o._provided[i];
                      break
                    }
                    o = o.$parent
                  }
                  if (!o && "default" in e[r]) {
                    var u = e[r].default;
                    a[r] = "function" == typeof u ? u.call(t) : u
                  }
                }
              }
              return a
            }
          }

          function it(e, t) {
            if (!e || !e.length) return {};
            for (var a = {}, l = 0, n = e.length; l < n; l++) {
              var r = e[l],
                i = r.data;
              if (i && i.attrs && i.attrs.slot && delete i.attrs.slot, r.context !== t && r.fnContext !== t || !i || null == i.slot) r.asyncMeta && r.asyncMeta.data && "page" === r.asyncMeta.data.slot ? (a.page || (a.page = [])).push(r) : (a.default || (a.default = [])).push(r);
              else {
                var o = i.slot,
                  u = a[o] || (a[o] = []);
                "template" === r.tag ? u.push.apply(u, r.children || []) : u.push(r)
              }
            }
            for (var s in a) a[s].every(ot) && delete a[s];
            return a
          }

          function ot(e) {
            return e.isComment && !e.asyncFactory || " " === e.text
          }

          function ut(e, t, a) {
            var n, r = Object.keys(t).length > 0,
              i = e ? !!e.$stable : !r,
              o = e && e.$key;
            if (e) {
              if (e._normalized) return e._normalized;
              if (i && a && a !== l && o === a.$key && !r && !a.$hasNormal) return a;
              for (var u in n = {}, e) e[u] && "$" !== u[0] && (n[u] = st(t, u, e[u]))
            } else n = {};
            for (var s in t) s in n || (n[s] = ct(t, s));
            return e && Object.isExtensible(e) && (e._normalized = n), E(n, "$stable", i), E(n, "$key", o), E(n, "$hasNormal", r), n
          }

          function st(t, a, l) {
            var n = function() {
              var t = arguments.length ? l.apply(null, arguments) : l({});
              return (t = t && "object" === e(t) && !Array.isArray(t) ? [t] : tt(t)) && (0 === t.length || 1 === t.length && t[0].isComment) ? void 0 : t
            };
            return l.proxy && Object.defineProperty(t, a, {
              get: n,
              enumerable: !0,
              configurable: !0
            }), n
          }

          function ct(e, t) {
            return function() {
              return e[t]
            }
          }

          function ft(e, t) {
            var a, l, n, i, o;
            if (Array.isArray(e) || "string" == typeof e)
              for (a = new Array(e.length), l = 0, n = e.length; l < n; l++) a[l] = t(e[l], l, l, l);
            else if ("number" == typeof e)
              for (a = new Array(e), l = 0; l < e; l++) a[l] = t(l + 1, l, l, l);
            else if (u(e))
              if (ae && e[Symbol.iterator]) {
                a = [];
                for (var s = e[Symbol.iterator](), c = s.next(); !c.done;) a.push(t(c.value, a.length, l, l++)), c = s.next()
              } else
                for (i = Object.keys(e), a = new Array(i.length), l = 0, n = i.length; l < n; l++) o = i[l], a[l] = t(e[o], o, l, l);
            return r(a) || (a = []), a._isVList = !0, a
          }

          function vt(e, t, a, l) {
            var n, r = this.$scopedSlots[e];
            r ? (a = a || {}, l && (a = X(X({}, l), a)), n = r(a, this, a._i) || t) : n = this.$slots[e] || t;
            var i = a && a.slot;
            return i ? this.$createElement("template", {
              slot: i
            }, n) : n
          }

          function ht(e) {
            return Me(this.$options, "filters", e) || D
          }

          function dt(e, t) {
            return Array.isArray(e) ? -1 === e.indexOf(t) : e !== t
          }

          function bt(e, t, a, l, n) {
            var r = F.keyCodes[t] || a;
            return n && l && !F.keyCodes[t] ? dt(n, l) : r ? dt(r, e) : l ? T(l) !== t : void 0
          }

          function pt(e, t, a, l, n) {
            if (a && u(a)) {
              var r;
              Array.isArray(a) && (a = J(a));
              var i = function(i) {
                if ("class" === i || "style" === i || p(i)) r = e;
                else {
                  var o = e.attrs && e.attrs.type;
                  r = l || F.mustUseProp(t, o, i) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {})
                }
                var u = Z(i),
                  s = T(i);
                u in r || s in r || (r[i] = a[i], !n) || ((e.on || (e.on = {}))["update:" + i] = function(e) {
                  a[i] = e
                })
              };
              for (var o in a) i(o)
            }
            return e
          }

          function gt(e, t) {
            var a = this._staticTrees || (this._staticTrees = []),
              l = a[e];
            return l && !t || St(l = a[e] = this.$options.staticRenderFns[e].call(this._renderProxy, null, this), "__static__" + e, !1), l
          }

          function yt(e, t, a) {
            return St(e, "__once__" + t + (a ? "_" + a : ""), !0), e
          }

          function St(e, t, a) {
            if (Array.isArray(e))
              for (var l = 0; l < e.length; l++) e[l] && "string" != typeof e[l] && mt(e[l], t + "_" + l, a);
            else mt(e, t, a)
          }

          function mt(e, t, a) {
            e.isStatic = !0, e.key = t, e.isOnce = a
          }

          function Yt(e, t) {
            if (t && c(t)) {
              var a = e.on = e.on ? X({}, e.on) : {};
              for (var l in t) {
                var n = a[l],
                  r = t[l];
                a[l] = n ? [].concat(n, r) : r
              }
            }
            return e
          }

          function Zt(e, t, a, l) {
            t = t || {
              $stable: !a
            };
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              Array.isArray(r) ? Zt(r, t, a) : r && (r.proxy && (r.fn.proxy = !0), t[r.key] = r.fn)
            }
            return l && (t.$key = l), t
          }

          function Lt(e, t) {
            for (var a = 0; a < t.length; a += 2) {
              var l = t[a];
              "string" == typeof l && l && (e[t[a]] = t[a + 1])
            }
            return e
          }

          function Ct(e, t) {
            return "string" == typeof e ? t + e : e
          }

          function Tt(e) {
            e._o = yt, e._n = d, e._s = h, e._l = ft, e._t = vt, e._q = x, e._i = B, e._m = gt, e._f = ht, e._k = bt, e._b = pt, e._v = fe, e._e = ce, e._u = Zt, e._g = Yt, e._d = Lt, e._p = Ct
          }

          function wt(e, t, a, n, r) {
            var o, u = this,
              s = r.options;
            S(n, "_uid") ? (o = Object.create(n))._original = n : (o = n, n = n._original);
            var c = i(s._compiled),
              f = !c;
            this.data = e, this.props = t, this.children = a, this.parent = n, this.listeners = e.on || l, this.injections = rt(s.inject, n), this.slots = function() {
              return u.$slots || ut(e.scopedSlots, u.$slots = it(a, n)), u.$slots
            }, Object.defineProperty(this, "scopedSlots", {
              enumerable: !0,
              get: function() {
                return ut(e.scopedSlots, this.slots())
              }
            }), c && (this.$options = s, this.$slots = this.slots(), this.$scopedSlots = ut(e.scopedSlots, this.$slots)), s._scopeId ? this._c = function(e, t, a, l) {
              var r = xt(o, e, t, a, l, f);
              return r && !Array.isArray(r) && (r.fnScopeId = s._scopeId, r.fnContext = n), r
            } : this._c = function(e, t, a, l) {
              return xt(o, e, t, a, l, f)
            }
          }

          function _t(e, t, a, l, n) {
            var r = function(e) {
              var t = new ue(e.tag, e.data, e.children && e.children.slice(), e.text, e.elm, e.context, e.componentOptions, e.asyncFactory);
              return t.ns = e.ns, t.isStatic = e.isStatic, t.key = e.key, t.isComment = e.isComment, t.fnContext = e.fnContext, t.fnOptions = e.fnOptions, t.fnScopeId = e.fnScopeId, t.asyncMeta = e.asyncMeta, t.isCloned = !0, t
            }(e);
            return r.fnContext = a, r.fnOptions = l, t.slot && ((r.data || (r.data = {})).slot = t.slot), r
          }

          function Xt(e, t) {
            for (var a in t) e[Z(a)] = t[a]
          }
          Tt(wt.prototype);
          var Jt = {
              init: function(e, t) {
                if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) {
                  var a = e;
                  Jt.prepatch(a, a)
                } else {
                  (e.componentInstance = function(e, t) {
                    var a = {
                        _isComponent: !0,
                        _parentVnode: e,
                        parent: t
                      },
                      l = e.data.inlineTemplate;
                    return r(l) && (a.render = l.render, a.staticRenderFns = l.staticRenderFns), new e.componentOptions.Ctor(a)
                  }(e, Wt)).$mount(t ? e.elm : void 0, t)
                }
              },
              prepatch: function(e, t) {
                var a = t.componentOptions;
                ! function(e, t, a, n, r) {
                  var i = n.data.scopedSlots,
                    o = e.$scopedSlots,
                    u = !!(i && !i.$stable || o !== l && !o.$stable || i && e.$scopedSlots.$key !== i.$key),
                    s = !!(r || e.$options._renderChildren || u);
                  if (e.$options._parentVnode = n, e.$vnode = n, e._vnode && (e._vnode.parent = n), e.$options._renderChildren = r, e.$attrs = n.data.attrs || l, e.$listeners = a || l, t && e.$options.props) {
                    pe(!1);
                    for (var c = e._props, f = e.$options._propKeys || [], v = 0; v < f.length; v++) {
                      var h = f[v],
                        d = e.$options.props;
                      c[h] = De(h, d, t, e)
                    }
                    pe(!0), e.$options.propsData = t
                  }
                  e._$updateProperties && e._$updateProperties(e), a = a || l;
                  var b = e.$options._parentListeners;
                  e.$options._parentListeners = a, Ot(e, a, b), s && (e.$slots = it(r, n.context), e.$forceUpdate())
                }(t.componentInstance = e.componentInstance, a.propsData, a.listeners, t, a.children)
              },
              insert: function(e) {
                var t = e.context,
                  a = e.componentInstance;
                a._isMounted || (Rt(a, "onServiceCreated"), Rt(a, "onServiceAttached"), a._isMounted = !0, Rt(a, "mounted")), e.data.keepAlive && (t._isMounted ? function(e) {
                  e._inactive = !1, It.push(e)
                }(a) : Gt(a, !0))
              },
              destroy: function(e) {
                var t = e.componentInstance;
                t._isDestroyed || (e.data.keepAlive ? function e(t, a) {
                  if (!(a && (t._directInactive = !0, kt(t)) || t._inactive)) {
                    t._inactive = !0;
                    for (var l = 0; l < t.$children.length; l++) e(t.$children[l]);
                    Rt(t, "deactivated")
                  }
                }(t, !0) : t.$destroy())
              }
            },
            Pt = Object.keys(Jt);

          function Mt(e, t, a, o, s) {
            if (!n(e)) {
              var c = a.$options._base;
              if (u(e) && (e = c.extend(e)), "function" == typeof e) {
                var f;
                if (n(e.cid) && void 0 === (e = function(e, t) {
                    if (i(e.error) && r(e.errorComp)) return e.errorComp;
                    if (r(e.resolved)) return e.resolved;
                    var a = Ht;
                    if (a && r(e.owners) && -1 === e.owners.indexOf(a) && e.owners.push(a), i(e.loading) && r(e.loadingComp)) return e.loadingComp;
                    if (a && !r(e.owners)) {
                      var l = e.owners = [a],
                        o = !0,
                        s = null,
                        c = null;
                      a.$on("hook:destroyed", (function() {
                        return g(l, a)
                      }));
                      var f = function(e) {
                          for (var t = 0, a = l.length; t < a; t++) l[t].$forceUpdate();
                          e && (l.length = 0, null !== s && (clearTimeout(s), s = null), null !== c && (clearTimeout(c), c = null))
                        },
                        h = H((function(a) {
                          e.resolved = Qt(a, t), o ? l.length = 0 : f(!0)
                        })),
                        d = H((function(t) {
                          r(e.errorComp) && (e.error = !0, f(!0))
                        })),
                        b = e(h, d);
                      return u(b) && (v(b) ? n(e.resolved) && b.then(h, d) : v(b.component) && (b.component.then(h, d), r(b.error) && (e.errorComp = Qt(b.error, t)), r(b.loading) && (e.loadingComp = Qt(b.loading, t), 0 === b.delay ? e.loading = !0 : s = setTimeout((function() {
                        s = null, n(e.resolved) && n(e.error) && (e.loading = !0, f(!1))
                      }), b.delay || 200)), r(b.timeout) && (c = setTimeout((function() {
                        c = null, n(e.resolved) && d(null)
                      }), b.timeout)))), o = !1, e.loading ? e.loadingComp : e.resolved
                    }
                  }(f = e, c))) return function(e, t, a, l, n) {
                  var r = ce();
                  return r.asyncFactory = e, r.asyncMeta = {
                    data: t,
                    context: a,
                    children: l,
                    tag: n
                  }, r
                }(f, t, a, o, s);
                t = t || {}, fa(e), r(t.model) && function(e, t) {
                  var a = e.model && e.model.prop || "value",
                    l = e.model && e.model.event || "input";
                  (t.attrs || (t.attrs = {}))[a] = t.model.value;
                  var n = t.on || (t.on = {}),
                    i = n[l],
                    o = t.model.callback;
                  r(i) ? (Array.isArray(i) ? -1 === i.indexOf(o) : i !== o) && (n[l] = [o].concat(i)) : n[l] = o
                }(e.options, t);
                var h = function(e, t, a, l) {
                  var i = t.options.props;
                  if (n(i)) return Ve(e, t, {}, l);
                  var o = {},
                    u = e.attrs,
                    s = e.props;
                  if (r(u) || r(s))
                    for (var c in i) {
                      var f = T(c);
                      et(o, s, c, f, !0) || et(o, u, c, f, !1)
                    }
                  return Ve(e, t, o, l)
                }(t, e, 0, a);
                if (i(e.options.functional)) return function(e, t, a, n, i) {
                  var o = e.options,
                    u = {},
                    s = o.props;
                  if (r(s))
                    for (var c in s) u[c] = De(c, s, t || l);
                  else r(a.attrs) && Xt(u, a.attrs), r(a.props) && Xt(u, a.props);
                  var f = new wt(a, u, i, n, e),
                    v = o.render.call(null, f._c, f);
                  if (v instanceof ue) return _t(v, a, f.parent, o);
                  if (Array.isArray(v)) {
                    for (var h = tt(v) || [], d = new Array(h.length), b = 0; b < h.length; b++) d[b] = _t(h[b], a, f.parent, o);
                    return d
                  }
                }(e, h, t, a, o);
                var d = t.on;
                if (t.on = t.nativeOn, i(e.options.abstract)) {
                  var b = t.slot;
                  t = {}, b && (t.slot = b)
                }! function(e) {
                  for (var t = e.hook || (e.hook = {}), a = 0; a < Pt.length; a++) {
                    var l = Pt[a],
                      n = t[l],
                      r = Jt[l];
                    n === r || n && n._merged || (t[l] = n ? Dt(r, n) : r)
                  }
                }(t);
                var p = e.options.name || s;
                return new ue("vue-component-" + e.cid + (p ? "-" + p : ""), t, void 0, void 0, void 0, a, {
                  Ctor: e,
                  propsData: h,
                  listeners: d,
                  tag: s,
                  children: o
                }, f)
              }
            }
          }

          function Dt(e, t) {
            var a = function(a, l) {
              e(a, l), t(a, l)
            };
            return a._merged = !0, a
          }

          function xt(e, t, a, l, s, c) {
            return (Array.isArray(a) || o(a)) && (s = l, l = a, a = void 0), i(c) && (s = 2),
              function(e, t, a, l, o) {
                if (r(a) && r(a.__ob__)) return ce();
                if (r(a) && r(a.is) && (t = a.is), !t) return ce();
                var s, c, f;
                (Array.isArray(l) && "function" == typeof l[0] && ((a = a || {}).scopedSlots = {
                  default: l[0]
                }, l.length = 0), 2 === o ? l = tt(l) : 1 === o && (l = function(e) {
                  for (var t = 0; t < e.length; t++)
                    if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e);
                  return e
                }(l)), "string" == typeof t) ? (c = e.$vnode && e.$vnode.ns || F.getTagNamespace(t), s = F.isReservedTag(t) ? new ue(F.parsePlatformTagName(t), a, l, void 0, void 0, e) : a && a.pre || !r(f = Me(e.$options, "components", t)) ? new ue(t, a, l, void 0, void 0, e) : Mt(f, a, e, l, t)) : s = Mt(t, a, e, l);
                return Array.isArray(s) ? s : r(s) ? (r(c) && function e(t, a, l) {
                  if (t.ns = a, "foreignObject" === t.tag && (a = void 0, l = !0), r(t.children))
                    for (var o = 0, u = t.children.length; o < u; o++) {
                      var s = t.children[o];
                      r(s.tag) && (n(s.ns) || i(l) && "svg" !== s.tag) && e(s, a, l)
                    }
                }(s, c), r(a) && function(e) {
                  u(e.style) && ze(e.style), u(e.class) && ze(e.class)
                }(a), s) : ce()
              }(e, t, a, l, s)
          }
          var Bt, Ht = null;

          function Qt(e, t) {
            return (e.__esModule || ae && "Module" === e[Symbol.toStringTag]) && (e = e.default), u(e) ? t.extend(e) : e
          }

          function At(e) {
            return e.isComment && e.asyncFactory
          }

          function Ft(e, t) {
            Bt.$on(e, t)
          }

          function Nt(e, t) {
            Bt.$off(e, t)
          }

          function Et(e, t) {
            var a = Bt;
            return function l() {
              var n = t.apply(null, arguments);
              null !== n && a.$off(e, l)
            }
          }

          function Ot(e, t, a) {
            Bt = e,
              function(e, t, a, l, r, o) {
                var u, s, c, f;
                for (u in e) s = e[u], c = t[u], f = Ue(u), n(s) || (n(c) ? (n(s.fns) && (s = e[u] = qe(s, o)), i(f.once) && (s = e[u] = r(f.name, s, f.capture)), a(f.name, s, f.capture, f.passive, f.params)) : s !== c && (c.fns = s, e[u] = c));
                for (u in t) n(e[u]) && l((f = Ue(u)).name, t[u], f.capture)
              }(t, a || {}, Ft, Nt, Et, e), Bt = void 0
          }
          var Wt = null;

          function kt(e) {
            for (; e && (e = e.$parent);)
              if (e._inactive) return !0;
            return !1
          }

          function Gt(e, t) {
            if (t) {
              if (e._directInactive = !1, kt(e)) return
            } else if (e._directInactive) return;
            if (e._inactive || null === e._inactive) {
              e._inactive = !1;
              for (var a = 0; a < e.$children.length; a++) Gt(e.$children[a]);
              Rt(e, "activated")
            }
          }

          function Rt(e, t) {
            ie();
            var a = e.$options[t],
              l = t + " hook";
            if (a)
              for (var n = 0, r = a.length; n < r; n++) Ae(a[n], e, null, e, l);
            e._hasHookEvent && e.$emit("hook:" + t), oe()
          }
          var Kt = [],
            It = [],
            $t = {},
            jt = !1,
            zt = !1,
            Ut = 0,
            qt = Date.now;
          if (G && !$) {
            var Vt = window.performance;
            Vt && "function" == typeof Vt.now && qt() > document.createEvent("Event").timeStamp && (qt = function() {
              return Vt.now()
            })
          }

          function ea() {
            var e, t;
            for (qt(), zt = !0, Kt.sort((function(e, t) {
                return e.id - t.id
              })), Ut = 0; Ut < Kt.length; Ut++)(e = Kt[Ut]).before && e.before(), t = e.id, $t[t] = null, e.run();
            var a = It.slice(),
              l = Kt.slice();
            Ut = Kt.length = It.length = 0, $t = {}, jt = zt = !1,
              function(e) {
                for (var t = 0; t < e.length; t++) e[t]._inactive = !0, Gt(e[t], !0)
              }(a),
              function(e) {
                for (var t = e.length; t--;) {
                  var a = e[t],
                    l = a.vm;
                  l._watcher === a && l._isMounted && !l._isDestroyed && Rt(l, "updated")
                }
              }(l), V && F.devtools && V.emit("flush")
          }
          var ta = 0,
            aa = function(e, t, a, l, n) {
              this.vm = e, n && (e._watcher = this), e._watchers.push(this), l ? (this.deep = !!l.deep, this.user = !!l.user, this.lazy = !!l.lazy, this.sync = !!l.sync, this.before = l.before) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = a, this.id = ++ta, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new te, this.newDepIds = new te, this.expression = "", "function" == typeof t ? this.getter = t : (this.getter = function(e) {
                if (!W.test(e)) {
                  var t = e.split(".");
                  return function(e) {
                    for (var a = 0; a < t.length; a++) {
                      if (!e) return;
                      e = e[t[a]]
                    }
                    return e
                  }
                }
              }(t), this.getter || (this.getter = P)), this.value = this.lazy ? void 0 : this.get()
            };
          aa.prototype.get = function() {
            var e;
            ie(this);
            var t = this.vm;
            try {
              e = this.getter.call(t, t)
            } catch (e) {
              if (!this.user) throw e;
              Qe(e, t, 'getter for watcher "' + this.expression + '"')
            } finally {
              this.deep && ze(e), oe(), this.cleanupDeps()
            }
            return e
          }, aa.prototype.addDep = function(e) {
            var t = e.id;
            this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this))
          }, aa.prototype.cleanupDeps = function() {
            for (var e = this.deps.length; e--;) {
              var t = this.deps[e];
              this.newDepIds.has(t.id) || t.removeSub(this)
            }
            var a = this.depIds;
            this.depIds = this.newDepIds, this.newDepIds = a, this.newDepIds.clear(), a = this.deps, this.deps = this.newDeps, this.newDeps = a, this.newDeps.length = 0
          }, aa.prototype.update = function() {
            this.lazy ? this.dirty = !0 : this.sync ? this.run() : function(e) {
              var t = e.id;
              if (null == $t[t]) {
                if ($t[t] = !0, zt) {
                  for (var a = Kt.length - 1; a > Ut && Kt[a].id > e.id;) a--;
                  Kt.splice(a + 1, 0, e)
                } else Kt.push(e);
                jt || (jt = !0, $e(ea))
              }
            }(this)
          }, aa.prototype.run = function() {
            if (this.active) {
              var e = this.get();
              if (e !== this.value || u(e) || this.deep) {
                var t = this.value;
                if (this.value = e, this.user) try {
                  this.cb.call(this.vm, e, t)
                } catch (e) {
                  Qe(e, this.vm, 'callback for watcher "' + this.expression + '"')
                } else this.cb.call(this.vm, e, t)
              }
            }
          }, aa.prototype.evaluate = function() {
            this.value = this.get(), this.dirty = !1
          }, aa.prototype.depend = function() {
            for (var e = this.deps.length; e--;) this.deps[e].depend()
          }, aa.prototype.teardown = function() {
            if (this.active) {
              this.vm._isBeingDestroyed || g(this.vm._watchers, this);
              for (var e = this.deps.length; e--;) this.deps[e].removeSub(this);
              this.active = !1
            }
          };
          var la = {
            enumerable: !0,
            configurable: !0,
            get: P,
            set: P
          };

          function na(e, t, a) {
            la.get = function() {
              return this[t][a]
            }, la.set = function(e) {
              this[t][a] = e
            }, Object.defineProperty(e, a, la)
          }
          var ra = {
            lazy: !0
          };

          function ia(e, t, a) {
            var l = !q();
            "function" == typeof a ? (la.get = l ? oa(t) : ua(a), la.set = P) : (la.get = a.get ? l && !1 !== a.cache ? oa(t) : ua(a.get) : P, la.set = a.set || P), Object.defineProperty(e, t, la)
          }

          function oa(e) {
            return function() {
              var t = this._computedWatchers && this._computedWatchers[e];
              if (t) return t.dirty && t.evaluate(), re.SharedObject.target && t.depend(), t.value
            }
          }

          function ua(e) {
            return function() {
              return e.call(this, this)
            }
          }

          function sa(e, t, a, l) {
            return c(a) && (l = a, a = a.handler), "string" == typeof a && (a = e[a]), e.$watch(t, a, l)
          }
          var ca = 0;

          function fa(e) {
            var t = e.options;
            if (e.super) {
              var a = fa(e.super);
              if (a !== e.superOptions) {
                e.superOptions = a;
                var l = function(e) {
                  var t, a = e.options,
                    l = e.sealedOptions;
                  for (var n in a) a[n] !== l[n] && (t || (t = {}), t[n] = a[n]);
                  return t
                }(e);
                l && X(e.extendOptions, l), (t = e.options = Pe(a, e.extendOptions)).name && (t.components[t.name] = e)
              }
            }
            return t
          }

          function va(e) {
            this._init(e)
          }

          function ha(e) {
            return e && (e.Ctor.options.name || e.tag)
          }

          function da(e, t) {
            return Array.isArray(e) ? e.indexOf(t) > -1 : "string" == typeof e ? e.split(",").indexOf(t) > -1 : !! function(e) {
              return "[object RegExp]" === s.call(e)
            }(e) && e.test(t)
          }

          function ba(e, t) {
            var a = e.cache,
              l = e.keys,
              n = e._vnode;
            for (var r in a) {
              var i = a[r];
              if (i) {
                var o = ha(i.componentOptions);
                o && !t(o) && pa(a, r, l, n)
              }
            }
          }

          function pa(e, t, a, l) {
            var n = e[t];
            !n || l && n.tag === l.tag || n.componentInstance.$destroy(), e[t] = null, g(a, t)
          }(function(e) {
            e.prototype._init = function(e) {
              var t = this;
              t._uid = ca++, t._isVue = !0, e && e._isComponent ? function(e, t) {
                  var a = e.$options = Object.create(e.constructor.options),
                    l = t._parentVnode;
                  a.parent = t.parent, a._parentVnode = l;
                  var n = l.componentOptions;
                  a.propsData = n.propsData, a._parentListeners = n.listeners, a._renderChildren = n.children, a._componentTag = n.tag, t.render && (a.render = t.render, a.staticRenderFns = t.staticRenderFns)
                }(t, e) : t.$options = Pe(fa(t.constructor), e || {}, t), t._renderProxy = t, t._self = t,
                function(e) {
                  var t = e.$options,
                    a = t.parent;
                  if (a && !t.abstract) {
                    for (; a.$options.abstract && a.$parent;) a = a.$parent;
                    a.$children.push(e)
                  }
                  e.$parent = a, e.$root = a ? a.$root : e, e.$children = [], e.$refs = {}, e._watcher = null, e._inactive = null, e._directInactive = !1, e._isMounted = !1, e._isDestroyed = !1, e._isBeingDestroyed = !1
                }(t),
                function(e) {
                  e._events = Object.create(null), e._hasHookEvent = !1;
                  var t = e.$options._parentListeners;
                  t && Ot(e, t)
                }(t),
                function(e) {
                  e._vnode = null, e._staticTrees = null;
                  var t = e.$options,
                    a = e.$vnode = t._parentVnode,
                    n = a && a.context;
                  e.$slots = it(t._renderChildren, n), e.$scopedSlots = l, e._c = function(t, a, l, n) {
                    return xt(e, t, a, l, n, !1)
                  }, e.$createElement = function(t, a, l, n) {
                    return xt(e, t, a, l, n, !0)
                  };
                  var r = a && a.data;
                  me(e, "$attrs", r && r.attrs || l, null, !0), me(e, "$listeners", t._parentListeners || l, null, !0)
                }(t), Rt(t, "beforeCreate"), !t._$fallback && nt(t),
                function(e) {
                  e._watchers = [];
                  var t = e.$options;
                  t.props && function(e, t) {
                    var a = e.$options.propsData || {},
                      l = e._props = {},
                      n = e.$options._propKeys = [];
                    !e.$parent || pe(!1);
                    var r = function(r) {
                      n.push(r);
                      var i = De(r, t, a, e);
                      me(l, r, i), r in e || na(e, "_props", r)
                    };
                    for (var i in t) r(i);
                    pe(!0)
                  }(e, t.props), t.methods && function(e, t) {
                    for (var a in e.$options.props, t) e[a] = "function" != typeof t[a] ? P : w(t[a], e)
                  }(e, t.methods), t.data ? function(e) {
                    var t = e.$options.data;
                    c(t = e._data = "function" == typeof t ? function(e, t) {
                      ie();
                      try {
                        return e.call(t, t)
                      } catch (e) {
                        return Qe(e, t, "data()"), {}
                      } finally {
                        oe()
                      }
                    }(t, e) : t || {}) || (t = {});
                    for (var a = Object.keys(t), l = e.$options.props, n = (e.$options.methods, a.length); n--;) {
                      var r = a[n];
                      l && S(l, r) || N(r) || na(e, "_data", r)
                    }
                    Se(t, !0)
                  }(e) : Se(e._data = {}, !0), t.computed && function(e, t) {
                    var a = e._computedWatchers = Object.create(null),
                      l = q();
                    for (var n in t) {
                      var r = t[n],
                        i = "function" == typeof r ? r : r.get;
                      l || (a[n] = new aa(e, i || P, P, ra)), n in e || ia(e, n, r)
                    }
                  }(e, t.computed), t.watch && t.watch !== z && function(e, t) {
                    for (var a in t) {
                      var l = t[a];
                      if (Array.isArray(l))
                        for (var n = 0; n < l.length; n++) sa(e, a, l[n]);
                      else sa(e, a, l)
                    }
                  }(e, t.watch)
                }(t), !t._$fallback && lt(t), !t._$fallback && Rt(t, "created"), t.$options.el && t.$mount(t.$options.el)
            }
          })(va),
          function(e) {
            Object.defineProperty(e.prototype, "$data", {
              get: function() {
                return this._data
              }
            }), Object.defineProperty(e.prototype, "$props", {
              get: function() {
                return this._props
              }
            }), e.prototype.$set = Ye, e.prototype.$delete = Ze, e.prototype.$watch = function(e, t, a) {
              if (c(t)) return sa(this, e, t, a);
              (a = a || {}).user = !0;
              var l = new aa(this, e, t, a);
              if (a.immediate) try {
                t.call(this, l.value)
              } catch (e) {
                Qe(e, this, 'callback for immediate watcher "' + l.expression + '"')
              }
              return function() {
                l.teardown()
              }
            }
          }(va),
          function(e) {
            var t = /^hook:/;
            e.prototype.$on = function(e, a) {
              var l = this;
              if (Array.isArray(e))
                for (var n = 0, r = e.length; n < r; n++) l.$on(e[n], a);
              else(l._events[e] || (l._events[e] = [])).push(a), t.test(e) && (l._hasHookEvent = !0);
              return l
            }, e.prototype.$once = function(e, t) {
              var a = this;

              function l() {
                a.$off(e, l), t.apply(a, arguments)
              }
              return l.fn = t, a.$on(e, l), a
            }, e.prototype.$off = function(e, t) {
              var a = this;
              if (!arguments.length) return a._events = Object.create(null), a;
              if (Array.isArray(e)) {
                for (var l = 0, n = e.length; l < n; l++) a.$off(e[l], t);
                return a
              }
              var r, i = a._events[e];
              if (!i) return a;
              if (!t) return a._events[e] = null, a;
              for (var o = i.length; o--;)
                if ((r = i[o]) === t || r.fn === t) {
                  i.splice(o, 1);
                  break
                } return a
            }, e.prototype.$emit = function(e) {
              var t = this,
                a = t._events[e];
              if (a) {
                a = a.length > 1 ? _(a) : a;
                for (var l = _(arguments, 1), n = 'event handler for "' + e + '"', r = 0, i = a.length; r < i; r++) Ae(a[r], t, l, t, n)
              }
              return t
            }
          }(va),
          function(e) {
            e.prototype._update = function(e, t) {
              var a = this,
                l = a.$el,
                n = a._vnode,
                r = function(e) {
                  var t = Wt;
                  return Wt = e,
                    function() {
                      Wt = t
                    }
                }(a);
              a._vnode = e, a.$el = n ? a.__patch__(n, e) : a.__patch__(a.$el, e, t, !1), r(), l && (l.__vue__ = null), a.$el && (a.$el.__vue__ = a), a.$vnode && a.$parent && a.$vnode === a.$parent._vnode && (a.$parent.$el = a.$el)
            }, e.prototype.$forceUpdate = function() {
              this._watcher && this._watcher.update()
            }, e.prototype.$destroy = function() {
              var e = this;
              if (!e._isBeingDestroyed) {
                Rt(e, "beforeDestroy"), e._isBeingDestroyed = !0;
                var t = e.$parent;
                !t || t._isBeingDestroyed || e.$options.abstract || g(t.$children, e), e._watcher && e._watcher.teardown();
                for (var a = e._watchers.length; a--;) e._watchers[a].teardown();
                e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, e.__patch__(e._vnode, null), Rt(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.$vnode && (e.$vnode.parent = null)
              }
            }
          }(va),
          function(e) {
            Tt(e.prototype), e.prototype.$nextTick = function(e) {
              return $e(e, this)
            }, e.prototype._render = function() {
              var e, t = this,
                a = t.$options,
                l = a.render,
                n = a._parentVnode;
              n && (t.$scopedSlots = ut(n.data.scopedSlots, t.$slots, t.$scopedSlots)), t.$vnode = n;
              try {
                Ht = t, e = l.call(t._renderProxy, t.$createElement)
              } catch (a) {
                Qe(a, t, "render"), e = t._vnode
              } finally {
                Ht = null
              }
              return Array.isArray(e) && 1 === e.length && (e = e[0]), e instanceof ue || (e = ce()), e.parent = n, e
            }
          }(va);
          var ga = [String, RegExp, Array],
            ya = {
              KeepAlive: {
                name: "keep-alive",
                abstract: !0,
                props: {
                  include: ga,
                  exclude: ga,
                  max: [String, Number]
                },
                created: function() {
                  this.cache = Object.create(null), this.keys = []
                },
                destroyed: function() {
                  for (var e in this.cache) pa(this.cache, e, this.keys)
                },
                mounted: function() {
                  var e = this;
                  this.$watch("include", (function(t) {
                    ba(e, (function(e) {
                      return da(t, e)
                    }))
                  })), this.$watch("exclude", (function(t) {
                    ba(e, (function(e) {
                      return !da(t, e)
                    }))
                  }))
                },
                render: function() {
                  var e = this.$slots.default,
                    t = function(e) {
                      if (Array.isArray(e))
                        for (var t = 0; t < e.length; t++) {
                          var a = e[t];
                          if (r(a) && (r(a.componentOptions) || At(a))) return a
                        }
                    }(e),
                    a = t && t.componentOptions;
                  if (a) {
                    var l = ha(a),
                      n = this.include,
                      i = this.exclude;
                    if (n && (!l || !da(n, l)) || i && l && da(i, l)) return t;
                    var o = this.cache,
                      u = this.keys,
                      s = null == t.key ? a.Ctor.cid + (a.tag ? "::" + a.tag : "") : t.key;
                    o[s] ? (t.componentInstance = o[s].componentInstance, g(u, s), u.push(s)) : (o[s] = t, u.push(s), this.max && u.length > parseInt(this.max) && pa(o, u[0], u, this._vnode)), t.data.keepAlive = !0
                  }
                  return t || e && e[0]
                }
              }
            };
          (function(e) {
            var t = {
              get: function() {
                return F
              }
            };
            Object.defineProperty(e, "config", t), e.util = {
                warn: le,
                extend: X,
                mergeOptions: Pe,
                defineReactive: me
              }, e.set = Ye, e.delete = Ze, e.nextTick = $e, e.observable = function(e) {
                return Se(e), e
              }, e.options = Object.create(null), Q.forEach((function(t) {
                e.options[t + "s"] = Object.create(null)
              })), e.options._base = e, X(e.options.components, ya),
              function(e) {
                e.use = function(e) {
                  var t = this._installedPlugins || (this._installedPlugins = []);
                  if (t.indexOf(e) > -1) return this;
                  var a = _(arguments, 1);
                  return a.unshift(this), "function" == typeof e.install ? e.install.apply(e, a) : "function" == typeof e && e.apply(null, a), t.push(e), this
                }
              }(e),
              function(e) {
                e.mixin = function(e) {
                  return this.options = Pe(this.options, e), this
                }
              }(e),
              function(e) {
                e.cid = 0;
                var t = 1;
                e.extend = function(e) {
                  e = e || {};
                  var a = this,
                    l = a.cid,
                    n = e._Ctor || (e._Ctor = {});
                  if (n[l]) return n[l];
                  var r = e.name || a.options.name,
                    i = function(e) {
                      this._init(e)
                    };
                  return (i.prototype = Object.create(a.prototype)).constructor = i, i.cid = t++, i.options = Pe(a.options, e), i.super = a, i.options.props && function(e) {
                    var t = e.options.props;
                    for (var a in t) na(e.prototype, "_props", a)
                  }(i), i.options.computed && function(e) {
                    var t = e.options.computed;
                    for (var a in t) ia(e.prototype, a, t[a])
                  }(i), i.extend = a.extend, i.mixin = a.mixin, i.use = a.use, Q.forEach((function(e) {
                    i[e] = a[e]
                  })), r && (i.options.components[r] = i), i.superOptions = a.options, i.extendOptions = e, i.sealedOptions = X({}, i.options), n[l] = i, i
                }
              }(e),
              function(e) {
                Q.forEach((function(t) {
                  e[t] = function(e, a) {
                    return a ? ("component" === t && c(a) && (a.name = a.name || e, a = this.options._base.extend(a)), "directive" === t && "function" == typeof a && (a = {
                      bind: a,
                      update: a
                    }), this.options[t + "s"][e] = a, a) : this.options[t + "s"][e]
                  }
                }))
              }(e)
          })(va), Object.defineProperty(va.prototype, "$isServer", {
            get: q
          }), Object.defineProperty(va.prototype, "$ssrContext", {
            get: function() {
              return this.$vnode && this.$vnode.ssrContext
            }
          }), Object.defineProperty(va, "FunctionalRenderContext", {
            value: wt
          }), va.version = "2.6.11";
          var Sa = "[object Array]",
            ma = "[object Object]";

          function Ya(e, t, a) {
            e[t] = a
          }

          function Za(e) {
            return Object.prototype.toString.call(e)
          }

          function La(e) {
            if (e.__next_tick_callbacks && e.__next_tick_callbacks.length) {
              if (Object({
                  NODE_ENV: "production",
                  VUE_APP_DARK_MODE: "false",
                  VUE_APP_NAME: "dsmall",
                  VUE_APP_PLATFORM: "mp-weixin",
                  BASE_URL: "/"
                }).VUE_APP_DEBUG) {
                var t = e.$scope;
                console.log("[" + +new Date + "][" + (t.is || t.route) + "][" + e._uid + "]:flushCallbacks[" + e.__next_tick_callbacks.length + "]")
              }
              var a = e.__next_tick_callbacks.slice(0);
              e.__next_tick_callbacks.length = 0;
              for (var l = 0; l < a.length; l++) a[l]()
            }
          }

          function Ca(e, t) {
            return t && (t._isVue || t.__v_isMPComponent) ? {} : t
          }

          function Ta() {}
          var wa = m((function(e) {
              var t = {},
                a = /:(.+)/;
              return e.split(/;(?![^(]*\))/g).forEach((function(e) {
                if (e) {
                  var l = e.split(a);
                  l.length > 1 && (t[l[0].trim()] = l[1].trim())
                }
              })), t
            })),
            _a = ["createSelectorQuery", "createIntersectionObserver", "selectAllComponents", "selectComponent"],
            Xa = ["onLaunch", "onShow", "onHide", "onUniNViewMessage", "onPageNotFound", "onThemeChange", "onError", "onUnhandledRejection", "onInit", "onLoad", "onReady", "onUnload", "onPullDownRefresh", "onReachBottom", "onTabItemTap", "onAddToFavorites", "onShareTimeline", "onShareAppMessage", "onResize", "onPageScroll", "onNavigationBarButtonTap", "onBackPress", "onNavigationBarSearchInputChanged", "onNavigationBarSearchInputConfirmed", "onNavigationBarSearchInputClicked", "onUploadDouyinVideo", "onNFCReadMessage", "onPageShow", "onPageHide", "onPageResize"];
          va.prototype.__patch__ = function(e, t) {
              var a = this;
              if (null !== t && ("page" === this.mpType || "component" === this.mpType)) {
                var l = this.$scope,
                  n = Object.create(null);
                try {
                  n = function(e) {
                    var t = Object.create(null);
                    [].concat(Object.keys(e._data || {}), Object.keys(e._computedWatchers || {})).reduce((function(t, a) {
                      return t[a] = e[a], t
                    }), t);
                    var a = e.__composition_api_state__ || e.__secret_vfa_state__,
                      l = a && a.rawBindings;
                    return l && Object.keys(l).forEach((function(a) {
                      t[a] = e[a]
                    })), Object.assign(t, e.$mp.data || {}), Array.isArray(e.$options.behaviors) && -1 !== e.$options.behaviors.indexOf("uni://form-field") && (t.name = e.name, t.value = e.value), JSON.parse(JSON.stringify(t, Ca))
                  }(this)
                } catch (e) {
                  console.error(e)
                }
                n.__webviewId__ = l.data.__webviewId__;
                var r = Object.create(null);
                Object.keys(n).forEach((function(e) {
                  r[e] = l.data[e]
                }));
                var i = !1 === this.$shouldDiffData ? n : function(e, t) {
                  var a = {};
                  return function e(t, a) {
                      if (t !== a) {
                        var l = Za(t),
                          n = Za(a);
                        if (l == ma && n == ma) {
                          if (Object.keys(t).length >= Object.keys(a).length)
                            for (var r in a) {
                              var i = t[r];
                              void 0 === i ? t[r] = null : e(i, a[r])
                            }
                        } else l == Sa && n == Sa && t.length >= a.length && a.forEach((function(a, l) {
                          e(t[l], a)
                        }))
                      }
                    }(e, t),
                    function e(t, a, l, n) {
                      if (t !== a) {
                        var r = Za(t),
                          i = Za(a);
                        if (r == ma)
                          if (i != ma || Object.keys(t).length < Object.keys(a).length) Ya(n, l, t);
                          else {
                            var o = function(r) {
                              var i = t[r],
                                o = a[r],
                                u = Za(i),
                                s = Za(o);
                              if (u != Sa && u != ma) i !== a[r] && function(e, t) {
                                return "[object Null]" !== e && "[object Undefined]" !== e || "[object Null]" !== t && "[object Undefined]" !== t
                              }(u, s) && Ya(n, ("" == l ? "" : l + ".") + r, i);
                              else if (u == Sa) s != Sa || i.length < o.length ? Ya(n, ("" == l ? "" : l + ".") + r, i) : i.forEach((function(t, a) {
                                e(t, o[a], ("" == l ? "" : l + ".") + r + "[" + a + "]", n)
                              }));
                              else if (u == ma)
                                if (s != ma || Object.keys(i).length < Object.keys(o).length) Ya(n, ("" == l ? "" : l + ".") + r, i);
                                else
                                  for (var c in i) e(i[c], o[c], ("" == l ? "" : l + ".") + r + "." + c, n)
                            };
                            for (var u in t) o(u)
                          }
                        else r == Sa ? i != Sa || t.length < a.length ? Ya(n, l, t) : t.forEach((function(t, r) {
                          e(t, a[r], l + "[" + r + "]", n)
                        })) : Ya(n, l, t)
                      }
                    }(e, t, "", a), a
                }(n, r);
                Object.keys(i).length ? (Object({
                  NODE_ENV: "production",
                  VUE_APP_DARK_MODE: "false",
                  VUE_APP_NAME: "dsmall",
                  VUE_APP_PLATFORM: "mp-weixin",
                  BASE_URL: "/"
                }).VUE_APP_DEBUG && console.log("[" + +new Date + "][" + (l.is || l.route) + "][" + this._uid + "]差量更新", JSON.stringify(i)), this.__next_tick_pending = !0, l.setData(i, (function() {
                  a.__next_tick_pending = !1, La(a)
                }))) : La(this)
              }
            }, va.prototype.$mount = function(e, t) {
              return function(e, t, a) {
                return e.mpType ? ("app" === e.mpType && (e.$options.render = Ta), e.$options.render || (e.$options.render = Ta), !e._$fallback && Rt(e, "beforeMount"), new aa(e, (function() {
                  e._update(e._render(), a)
                }), P, {
                  before: function() {
                    e._isMounted && !e._isDestroyed && Rt(e, "beforeUpdate")
                  }
                }, !0), a = !1, e) : e
              }(this, 0, t)
            },
            function(e) {
              var t = e.extend;
              e.extend = function(e) {
                var a = (e = e || {}).methods;
                return a && Object.keys(a).forEach((function(t) {
                  -1 !== Xa.indexOf(t) && (e[t] = a[t], delete a[t])
                })), t.call(this, e)
              };
              var a = e.config.optionMergeStrategies,
                l = a.created;
              Xa.forEach((function(e) {
                a[e] = l
              })), e.prototype.__lifecycle_hooks__ = Xa
            }(va),
            function(e) {
              e.config.errorHandler = function(t, a, l) {
                e.util.warn("Error in " + l + ': "' + t.toString() + '"', a), console.error(t);
                var n = "function" == typeof getApp && getApp();
                n && n.onError && n.onError(t)
              };
              var t = e.prototype.$emit;
              e.prototype.$emit = function(e) {
                if (this.$scope && e) {
                  var a = this.$scope._triggerEvent || this.$scope.triggerEvent;
                  if (a) try {
                    a.call(this.$scope, e, {
                      __args__: _(arguments, 1)
                    })
                  } catch (e) {}
                }
                return t.apply(this, arguments)
              }, e.prototype.$nextTick = function(e) {
                return function(e, t) {
                  if (!e.__next_tick_pending && ! function(e) {
                      return Kt.find((function(t) {
                        return e._watcher === t
                      }))
                    }(e)) {
                    if (Object({
                        NODE_ENV: "production",
                        VUE_APP_DARK_MODE: "false",
                        VUE_APP_NAME: "dsmall",
                        VUE_APP_PLATFORM: "mp-weixin",
                        BASE_URL: "/"
                      }).VUE_APP_DEBUG) {
                      var a = e.$scope;
                      console.log("[" + +new Date + "][" + (a.is || a.route) + "][" + e._uid + "]:nextVueTick")
                    }
                    return $e(t, e)
                  }
                  if (Object({
                      NODE_ENV: "production",
                      VUE_APP_DARK_MODE: "false",
                      VUE_APP_NAME: "dsmall",
                      VUE_APP_PLATFORM: "mp-weixin",
                      BASE_URL: "/"
                    }).VUE_APP_DEBUG) {
                    var l = e.$scope;
                    console.log("[" + +new Date + "][" + (l.is || l.route) + "][" + e._uid + "]:nextMPTick")
                  }
                  var n;
                  if (e.__next_tick_callbacks || (e.__next_tick_callbacks = []), e.__next_tick_callbacks.push((function() {
                      if (t) try {
                        t.call(e)
                      } catch (t) {
                        Qe(t, e, "nextTick")
                      } else n && n(e)
                    })), !t && "undefined" != typeof Promise) return new Promise((function(e) {
                    n = e
                  }))
                }(this, e)
              }, _a.forEach((function(t) {
                e.prototype[t] = function(e) {
                  return this.$scope && this.$scope[t] ? this.$scope[t](e) : "undefined" != typeof my ? "createSelectorQuery" === t ? my.createSelectorQuery(e) : "createIntersectionObserver" === t ? my.createIntersectionObserver(e) : void 0 : void 0
                }
              })), e.prototype.__init_provide = lt, e.prototype.__init_injections = nt, e.prototype.__call_hook = function(e, t) {
                var a = this;
                ie();
                var l, n = a.$options[e],
                  r = e + " hook";
                if (n)
                  for (var i = 0, o = n.length; i < o; i++) l = Ae(n[i], a, t ? [t] : null, a, r);
                return a._hasHookEvent && a.$emit("hook:" + e, t), oe(), l
              }, e.prototype.__set_model = function(t, a, l, n) {
                Array.isArray(n) && (-1 !== n.indexOf("trim") && (l = l.trim()), -1 !== n.indexOf("number") && (l = this._n(l))), t || (t = this), e.set(t, a, l)
              }, e.prototype.__set_sync = function(t, a, l) {
                t || (t = this), e.set(t, a, l)
              }, e.prototype.__get_orig = function(e) {
                return c(e) && e.$orig || e
              }, e.prototype.__get_value = function(e, t) {
                return function e(t, a) {
                  var l = a.split("."),
                    n = l[0];
                  return 0 === n.indexOf("__$n") && (n = parseInt(n.replace("__$n", ""))), 1 === l.length ? t[n] : e(t[n], l.slice(1).join("."))
                }(t || this, e)
              }, e.prototype.__get_class = function(e, t) {
                return function(e, t) {
                  return r(e) || r(t) ? function(e, t) {
                    return e ? t ? e + " " + t : e : t || ""
                  }(e, function e(t) {
                    return Array.isArray(t) ? function(t) {
                      for (var a, l = "", n = 0, i = t.length; n < i; n++) r(a = e(t[n])) && "" !== a && (l && (l += " "), l += a);
                      return l
                    }(t) : u(t) ? function(e) {
                      var t = "";
                      for (var a in e) e[a] && (t && (t += " "), t += a);
                      return t
                    }(t) : "string" == typeof t ? t : ""
                  }(t)) : ""
                }(t, e)
              }, e.prototype.__get_style = function(e, t) {
                if (!e && !t) return "";
                var a = function(e) {
                    return Array.isArray(e) ? J(e) : "string" == typeof e ? wa(e) : e
                  }(e),
                  l = t ? X(t, a) : a;
                return Object.keys(l).map((function(e) {
                  return T(e) + ":" + l[e]
                })).join(";")
              }, e.prototype.__map = function(e, t) {
                var a, l, n, r, i;
                if (Array.isArray(e)) {
                  for (a = new Array(e.length), l = 0, n = e.length; l < n; l++) a[l] = t(e[l], l);
                  return a
                }
                if (u(e)) {
                  for (r = Object.keys(e), a = Object.create(null), l = 0, n = r.length; l < n; l++) a[i = r[l]] = t(e[i], i, l);
                  return a
                }
                if ("number" == typeof e) {
                  for (a = new Array(e), l = 0, n = e; l < n; l++) a[l] = t(l, l);
                  return a
                }
                return []
              }
            }(va), a.default = va
        }.call(this, l("0ee4"))
    },
    "34cf": function(e, t, a) {
      var l = a("ed45"),
        n = a("7172"),
        r = a("6382"),
        i = a("dd3e");
      e.exports = function(e, t) {
        return l(e) || n(e, t) || r(e, t) || i()
      }, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    3705: function(e, t, a) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = [
        [{
          label: "市辖区",
          value: "110100"
        }],
        [{
          label: "市辖区",
          value: "120100"
        }],
        [{
          label: "石家庄市",
          value: "130100"
        }, {
          label: "唐山市",
          value: "130200"
        }, {
          label: "秦皇岛市",
          value: "130300"
        }, {
          label: "邯郸市",
          value: "130400"
        }, {
          label: "邢台市",
          value: "130500"
        }, {
          label: "保定市",
          value: "130600"
        }, {
          label: "张家口市",
          value: "130700"
        }, {
          label: "承德市",
          value: "130800"
        }, {
          label: "沧州市",
          value: "130900"
        }, {
          label: "廊坊市",
          value: "131000"
        }, {
          label: "衡水市",
          value: "131100"
        }],
        [{
          label: "太原市",
          value: "140100"
        }, {
          label: "大同市",
          value: "140200"
        }, {
          label: "阳泉市",
          value: "140300"
        }, {
          label: "长治市",
          value: "140400"
        }, {
          label: "晋城市",
          value: "140500"
        }, {
          label: "朔州市",
          value: "140600"
        }, {
          label: "晋中市",
          value: "140700"
        }, {
          label: "运城市",
          value: "140800"
        }, {
          label: "忻州市",
          value: "140900"
        }, {
          label: "临汾市",
          value: "141000"
        }, {
          label: "吕梁市",
          value: "141100"
        }],
        [{
          label: "呼和浩特市",
          value: "150100"
        }, {
          label: "包头市",
          value: "150200"
        }, {
          label: "乌海市",
          value: "150300"
        }, {
          label: "赤峰市",
          value: "150400"
        }, {
          label: "通辽市",
          value: "150500"
        }, {
          label: "鄂尔多斯市",
          value: "150600"
        }, {
          label: "呼伦贝尔市",
          value: "150700"
        }, {
          label: "巴彦淖尔市",
          value: "150800"
        }, {
          label: "乌兰察布市",
          value: "150900"
        }, {
          label: "兴安盟",
          value: "152200"
        }, {
          label: "锡林郭勒盟",
          value: "152500"
        }, {
          label: "阿拉善盟",
          value: "152900"
        }],
        [{
          label: "沈阳市",
          value: "210100"
        }, {
          label: "大连市",
          value: "210200"
        }, {
          label: "鞍山市",
          value: "210300"
        }, {
          label: "抚顺市",
          value: "210400"
        }, {
          label: "本溪市",
          value: "210500"
        }, {
          label: "丹东市",
          value: "210600"
        }, {
          label: "锦州市",
          value: "210700"
        }, {
          label: "营口市",
          value: "210800"
        }, {
          label: "阜新市",
          value: "210900"
        }, {
          label: "辽阳市",
          value: "211000"
        }, {
          label: "盘锦市",
          value: "211100"
        }, {
          label: "铁岭市",
          value: "211200"
        }, {
          label: "朝阳市",
          value: "211300"
        }, {
          label: "葫芦岛市",
          value: "211400"
        }],
        [{
          label: "长春市",
          value: "220100"
        }, {
          label: "吉林市",
          value: "220200"
        }, {
          label: "四平市",
          value: "220300"
        }, {
          label: "辽源市",
          value: "220400"
        }, {
          label: "通化市",
          value: "220500"
        }, {
          label: "白山市",
          value: "220600"
        }, {
          label: "松原市",
          value: "220700"
        }, {
          label: "白城市",
          value: "220800"
        }, {
          label: "延边朝鲜族自治州",
          value: "222400"
        }],
        [{
          label: "哈尔滨市",
          value: "230100"
        }, {
          label: "齐齐哈尔市",
          value: "230200"
        }, {
          label: "鸡西市",
          value: "230300"
        }, {
          label: "鹤岗市",
          value: "230400"
        }, {
          label: "双鸭山市",
          value: "230500"
        }, {
          label: "大庆市",
          value: "230600"
        }, {
          label: "伊春市",
          value: "230700"
        }, {
          label: "佳木斯市",
          value: "230800"
        }, {
          label: "七台河市",
          value: "230900"
        }, {
          label: "牡丹江市",
          value: "231000"
        }, {
          label: "黑河市",
          value: "231100"
        }, {
          label: "绥化市",
          value: "231200"
        }, {
          label: "大兴安岭地区",
          value: "232700"
        }],
        [{
          label: "市辖区",
          value: "310100"
        }],
        [{
          label: "南京市",
          value: "320100"
        }, {
          label: "无锡市",
          value: "320200"
        }, {
          label: "徐州市",
          value: "320300"
        }, {
          label: "常州市",
          value: "320400"
        }, {
          label: "苏州市",
          value: "320500"
        }, {
          label: "南通市",
          value: "320600"
        }, {
          label: "连云港市",
          value: "320700"
        }, {
          label: "淮安市",
          value: "320800"
        }, {
          label: "盐城市",
          value: "320900"
        }, {
          label: "扬州市",
          value: "321000"
        }, {
          label: "镇江市",
          value: "321100"
        }, {
          label: "泰州市",
          value: "321200"
        }, {
          label: "宿迁市",
          value: "321300"
        }],
        [{
          label: "杭州市",
          value: "330100"
        }, {
          label: "宁波市",
          value: "330200"
        }, {
          label: "温州市",
          value: "330300"
        }, {
          label: "嘉兴市",
          value: "330400"
        }, {
          label: "湖州市",
          value: "330500"
        }, {
          label: "绍兴市",
          value: "330600"
        }, {
          label: "金华市",
          value: "330700"
        }, {
          label: "衢州市",
          value: "330800"
        }, {
          label: "舟山市",
          value: "330900"
        }, {
          label: "台州市",
          value: "331000"
        }, {
          label: "丽水市",
          value: "331100"
        }],
        [{
          label: "合肥市",
          value: "340100"
        }, {
          label: "芜湖市",
          value: "340200"
        }, {
          label: "蚌埠市",
          value: "340300"
        }, {
          label: "淮南市",
          value: "340400"
        }, {
          label: "马鞍山市",
          value: "340500"
        }, {
          label: "淮北市",
          value: "340600"
        }, {
          label: "铜陵市",
          value: "340700"
        }, {
          label: "安庆市",
          value: "340800"
        }, {
          label: "黄山市",
          value: "341000"
        }, {
          label: "滁州市",
          value: "341100"
        }, {
          label: "阜阳市",
          value: "341200"
        }, {
          label: "宿州市",
          value: "341300"
        }, {
          label: "六安市",
          value: "341500"
        }, {
          label: "亳州市",
          value: "341600"
        }, {
          label: "池州市",
          value: "341700"
        }, {
          label: "宣城市",
          value: "341800"
        }],
        [{
          label: "福州市",
          value: "350100"
        }, {
          label: "厦门市",
          value: "350200"
        }, {
          label: "莆田市",
          value: "350300"
        }, {
          label: "三明市",
          value: "350400"
        }, {
          label: "泉州市",
          value: "350500"
        }, {
          label: "漳州市",
          value: "350600"
        }, {
          label: "南平市",
          value: "350700"
        }, {
          label: "龙岩市",
          value: "350800"
        }, {
          label: "宁德市",
          value: "350900"
        }],
        [{
          label: "南昌市",
          value: "360100"
        }, {
          label: "景德镇市",
          value: "360200"
        }, {
          label: "萍乡市",
          value: "360300"
        }, {
          label: "九江市",
          value: "360400"
        }, {
          label: "新余市",
          value: "360500"
        }, {
          label: "鹰潭市",
          value: "360600"
        }, {
          label: "赣州市",
          value: "360700"
        }, {
          label: "吉安市",
          value: "360800"
        }, {
          label: "宜春市",
          value: "360900"
        }, {
          label: "抚州市",
          value: "361000"
        }, {
          label: "上饶市",
          value: "361100"
        }],
        [{
          label: "济南市",
          value: "370100"
        }, {
          label: "青岛市",
          value: "370200"
        }, {
          label: "淄博市",
          value: "370300"
        }, {
          label: "枣庄市",
          value: "370400"
        }, {
          label: "东营市",
          value: "370500"
        }, {
          label: "烟台市",
          value: "370600"
        }, {
          label: "潍坊市",
          value: "370700"
        }, {
          label: "济宁市",
          value: "370800"
        }, {
          label: "泰安市",
          value: "370900"
        }, {
          label: "威海市",
          value: "371000"
        }, {
          label: "日照市",
          value: "371100"
        }, {
          label: "莱芜市",
          value: "371200"
        }, {
          label: "临沂市",
          value: "371300"
        }, {
          label: "德州市",
          value: "371400"
        }, {
          label: "聊城市",
          value: "371500"
        }, {
          label: "滨州市",
          value: "371600"
        }, {
          label: "菏泽市",
          value: "371700"
        }],
        [{
          label: "郑州市",
          value: "410100"
        }, {
          label: "开封市",
          value: "410200"
        }, {
          label: "洛阳市",
          value: "410300"
        }, {
          label: "平顶山市",
          value: "410400"
        }, {
          label: "安阳市",
          value: "410500"
        }, {
          label: "鹤壁市",
          value: "410600"
        }, {
          label: "新乡市",
          value: "410700"
        }, {
          label: "焦作市",
          value: "410800"
        }, {
          label: "濮阳市",
          value: "410900"
        }, {
          label: "许昌市",
          value: "411000"
        }, {
          label: "漯河市",
          value: "411100"
        }, {
          label: "三门峡市",
          value: "411200"
        }, {
          label: "南阳市",
          value: "411300"
        }, {
          label: "商丘市",
          value: "411400"
        }, {
          label: "信阳市",
          value: "411500"
        }, {
          label: "周口市",
          value: "411600"
        }, {
          label: "驻马店市",
          value: "411700"
        }, {
          label: "省直辖县级行政区划",
          value: "419000"
        }],
        [{
          label: "武汉市",
          value: "420100"
        }, {
          label: "黄石市",
          value: "420200"
        }, {
          label: "十堰市",
          value: "420300"
        }, {
          label: "宜昌市",
          value: "420500"
        }, {
          label: "襄阳市",
          value: "420600"
        }, {
          label: "鄂州市",
          value: "420700"
        }, {
          label: "荆门市",
          value: "420800"
        }, {
          label: "孝感市",
          value: "420900"
        }, {
          label: "荆州市",
          value: "421000"
        }, {
          label: "黄冈市",
          value: "421100"
        }, {
          label: "咸宁市",
          value: "421200"
        }, {
          label: "随州市",
          value: "421300"
        }, {
          label: "恩施土家族苗族自治州",
          value: "422800"
        }, {
          label: "省直辖县级行政区划",
          value: "429000"
        }],
        [{
          label: "长沙市",
          value: "430100"
        }, {
          label: "株洲市",
          value: "430200"
        }, {
          label: "湘潭市",
          value: "430300"
        }, {
          label: "衡阳市",
          value: "430400"
        }, {
          label: "邵阳市",
          value: "430500"
        }, {
          label: "岳阳市",
          value: "430600"
        }, {
          label: "常德市",
          value: "430700"
        }, {
          label: "张家界市",
          value: "430800"
        }, {
          label: "益阳市",
          value: "430900"
        }, {
          label: "郴州市",
          value: "431000"
        }, {
          label: "永州市",
          value: "431100"
        }, {
          label: "怀化市",
          value: "431200"
        }, {
          label: "娄底市",
          value: "431300"
        }, {
          label: "湘西土家族苗族自治州",
          value: "433100"
        }],
        [{
          label: "广州市",
          value: "440100"
        }, {
          label: "韶关市",
          value: "440200"
        }, {
          label: "深圳市",
          value: "440300"
        }, {
          label: "珠海市",
          value: "440400"
        }, {
          label: "汕头市",
          value: "440500"
        }, {
          label: "佛山市",
          value: "440600"
        }, {
          label: "江门市",
          value: "440700"
        }, {
          label: "湛江市",
          value: "440800"
        }, {
          label: "茂名市",
          value: "440900"
        }, {
          label: "肇庆市",
          value: "441200"
        }, {
          label: "惠州市",
          value: "441300"
        }, {
          label: "梅州市",
          value: "441400"
        }, {
          label: "汕尾市",
          value: "441500"
        }, {
          label: "河源市",
          value: "441600"
        }, {
          label: "阳江市",
          value: "441700"
        }, {
          label: "清远市",
          value: "441800"
        }, {
          label: "东莞市",
          value: "441900"
        }, {
          label: "中山市",
          value: "442000"
        }, {
          label: "潮州市",
          value: "445100"
        }, {
          label: "揭阳市",
          value: "445200"
        }, {
          label: "云浮市",
          value: "445300"
        }],
        [{
          label: "南宁市",
          value: "450100"
        }, {
          label: "柳州市",
          value: "450200"
        }, {
          label: "桂林市",
          value: "450300"
        }, {
          label: "梧州市",
          value: "450400"
        }, {
          label: "北海市",
          value: "450500"
        }, {
          label: "防城港市",
          value: "450600"
        }, {
          label: "钦州市",
          value: "450700"
        }, {
          label: "贵港市",
          value: "450800"
        }, {
          label: "玉林市",
          value: "450900"
        }, {
          label: "百色市",
          value: "451000"
        }, {
          label: "贺州市",
          value: "451100"
        }, {
          label: "河池市",
          value: "451200"
        }, {
          label: "来宾市",
          value: "451300"
        }, {
          label: "崇左市",
          value: "451400"
        }],
        [{
          label: "海口市",
          value: "460100"
        }, {
          label: "三亚市",
          value: "460200"
        }, {
          label: "三沙市",
          value: "460300"
        }, {
          label: "儋州市",
          value: "460400"
        }, {
          label: "省直辖县级行政区划",
          value: "469000"
        }],
        [{
          label: "市辖区",
          value: "500100"
        }, {
          label: "县",
          value: "500200"
        }],
        [{
          label: "成都市",
          value: "510100"
        }, {
          label: "自贡市",
          value: "510300"
        }, {
          label: "攀枝花市",
          value: "510400"
        }, {
          label: "泸州市",
          value: "510500"
        }, {
          label: "德阳市",
          value: "510600"
        }, {
          label: "绵阳市",
          value: "510700"
        }, {
          label: "广元市",
          value: "510800"
        }, {
          label: "遂宁市",
          value: "510900"
        }, {
          label: "内江市",
          value: "511000"
        }, {
          label: "乐山市",
          value: "511100"
        }, {
          label: "南充市",
          value: "511300"
        }, {
          label: "眉山市",
          value: "511400"
        }, {
          label: "宜宾市",
          value: "511500"
        }, {
          label: "广安市",
          value: "511600"
        }, {
          label: "达州市",
          value: "511700"
        }, {
          label: "雅安市",
          value: "511800"
        }, {
          label: "巴中市",
          value: "511900"
        }, {
          label: "资阳市",
          value: "512000"
        }, {
          label: "阿坝藏族羌族自治州",
          value: "513200"
        }, {
          label: "甘孜藏族自治州",
          value: "513300"
        }, {
          label: "凉山彝族自治州",
          value: "513400"
        }],
        [{
          label: "贵阳市",
          value: "520100"
        }, {
          label: "六盘水市",
          value: "520200"
        }, {
          label: "遵义市",
          value: "520300"
        }, {
          label: "安顺市",
          value: "520400"
        }, {
          label: "毕节市",
          value: "520500"
        }, {
          label: "铜仁市",
          value: "520600"
        }, {
          label: "黔西南布依族苗族自治州",
          value: "522300"
        }, {
          label: "黔东南苗族侗族自治州",
          value: "522600"
        }, {
          label: "黔南布依族苗族自治州",
          value: "522700"
        }],
        [{
          label: "昆明市",
          value: "530100"
        }, {
          label: "曲靖市",
          value: "530300"
        }, {
          label: "玉溪市",
          value: "530400"
        }, {
          label: "保山市",
          value: "530500"
        }, {
          label: "昭通市",
          value: "530600"
        }, {
          label: "丽江市",
          value: "530700"
        }, {
          label: "普洱市",
          value: "530800"
        }, {
          label: "临沧市",
          value: "530900"
        }, {
          label: "楚雄彝族自治州",
          value: "532300"
        }, {
          label: "红河哈尼族彝族自治州",
          value: "532500"
        }, {
          label: "文山壮族苗族自治州",
          value: "532600"
        }, {
          label: "西双版纳傣族自治州",
          value: "532800"
        }, {
          label: "大理白族自治州",
          value: "532900"
        }, {
          label: "德宏傣族景颇族自治州",
          value: "533100"
        }, {
          label: "怒江傈僳族自治州",
          value: "533300"
        }, {
          label: "迪庆藏族自治州",
          value: "533400"
        }],
        [{
          label: "拉萨市",
          value: "540100"
        }, {
          label: "日喀则市",
          value: "540200"
        }, {
          label: "昌都市",
          value: "540300"
        }, {
          label: "林芝市",
          value: "540400"
        }, {
          label: "山南市",
          value: "540500"
        }, {
          label: "那曲地区",
          value: "542400"
        }, {
          label: "阿里地区",
          value: "542500"
        }],
        [{
          label: "西安市",
          value: "610100"
        }, {
          label: "铜川市",
          value: "610200"
        }, {
          label: "宝鸡市",
          value: "610300"
        }, {
          label: "咸阳市",
          value: "610400"
        }, {
          label: "渭南市",
          value: "610500"
        }, {
          label: "延安市",
          value: "610600"
        }, {
          label: "汉中市",
          value: "610700"
        }, {
          label: "榆林市",
          value: "610800"
        }, {
          label: "安康市",
          value: "610900"
        }, {
          label: "商洛市",
          value: "611000"
        }],
        [{
          label: "兰州市",
          value: "620100"
        }, {
          label: "嘉峪关市",
          value: "620200"
        }, {
          label: "金昌市",
          value: "620300"
        }, {
          label: "白银市",
          value: "620400"
        }, {
          label: "天水市",
          value: "620500"
        }, {
          label: "武威市",
          value: "620600"
        }, {
          label: "张掖市",
          value: "620700"
        }, {
          label: "平凉市",
          value: "620800"
        }, {
          label: "酒泉市",
          value: "620900"
        }, {
          label: "庆阳市",
          value: "621000"
        }, {
          label: "定西市",
          value: "621100"
        }, {
          label: "陇南市",
          value: "621200"
        }, {
          label: "临夏回族自治州",
          value: "622900"
        }, {
          label: "甘南藏族自治州",
          value: "623000"
        }],
        [{
          label: "西宁市",
          value: "630100"
        }, {
          label: "海东市",
          value: "630200"
        }, {
          label: "海北藏族自治州",
          value: "632200"
        }, {
          label: "黄南藏族自治州",
          value: "632300"
        }, {
          label: "海南藏族自治州",
          value: "632500"
        }, {
          label: "果洛藏族自治州",
          value: "632600"
        }, {
          label: "玉树藏族自治州",
          value: "632700"
        }, {
          label: "海西蒙古族藏族自治州",
          value: "632800"
        }],
        [{
          label: "银川市",
          value: "640100"
        }, {
          label: "石嘴山市",
          value: "640200"
        }, {
          label: "吴忠市",
          value: "640300"
        }, {
          label: "固原市",
          value: "640400"
        }, {
          label: "中卫市",
          value: "640500"
        }],
        [{
          label: "乌鲁木齐市",
          value: "650100"
        }, {
          label: "克拉玛依市",
          value: "650200"
        }, {
          label: "吐鲁番市",
          value: "650400"
        }, {
          label: "哈密市",
          value: "650500"
        }, {
          label: "昌吉回族自治州",
          value: "652300"
        }, {
          label: "博尔塔拉蒙古自治州",
          value: "652700"
        }, {
          label: "巴音郭楞蒙古自治州",
          value: "652800"
        }, {
          label: "阿克苏地区",
          value: "652900"
        }, {
          label: "克孜勒苏柯尔克孜自治州",
          value: "653000"
        }, {
          label: "喀什地区",
          value: "653100"
        }, {
          label: "和田地区",
          value: "653200"
        }, {
          label: "伊犁哈萨克自治州",
          value: "654000"
        }, {
          label: "塔城地区",
          value: "654200"
        }, {
          label: "阿勒泰地区",
          value: "654300"
        }, {
          label: "自治区直辖县级行政区划",
          value: "659000"
        }],
        [{
          label: "台北",
          value: "660100"
        }, {
          label: "高雄",
          value: "660200"
        }, {
          label: "基隆",
          value: "660300"
        }, {
          label: "台中",
          value: "660400"
        }, {
          label: "台南",
          value: "660500"
        }, {
          label: "新竹",
          value: "660600"
        }, {
          label: "嘉义",
          value: "660700"
        }, {
          label: "宜兰",
          value: "660800"
        }, {
          label: "桃园",
          value: "660900"
        }, {
          label: "苗栗",
          value: "661000"
        }, {
          label: "彰化",
          value: "661100"
        }, {
          label: "南投",
          value: "661200"
        }, {
          label: "云林",
          value: "661300"
        }, {
          label: "屏东",
          value: "661400"
        }, {
          label: "台东",
          value: "661500"
        }, {
          label: "花莲",
          value: "661600"
        }, {
          label: "澎湖",
          value: "661700"
        }],
        [{
          label: "香港岛",
          value: "670100"
        }, {
          label: "九龙",
          value: "670200"
        }, {
          label: "新界",
          value: "670300"
        }],
        [{
          label: "澳门半岛",
          value: "680100"
        }, {
          label: "氹仔岛",
          value: "680200"
        }, {
          label: "路环岛",
          value: "680300"
        }, {
          label: "路氹城",
          value: "680400"
        }]
      ]
    },
    "3a9f": function(e, t, a) {
      (function(e, l) {
        var n = a("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.DataUtil = t.CHAR_WIDTH_SCALE_MAP = void 0, t.base64ToPath = h, t.compareVersion = function(e, t) {
          e = e.split("."), t = t.split(".");
          for (var a = Math.max(e.length, t.length); e.length < a;) e.push("0");
          for (; t.length < a;) t.push("0");
          for (var l = 0; l < a; l++) {
            var n = parseInt(e[l], 10),
              r = parseInt(t[l], 10);
            if (n > r) return 1;
            if (n < r) return -1
          }
          return 0
        }, t.getImageInfo = function(t, a) {
          return new Promise(function() {
            var a = (0, u.default)(r.default.mark((function a(l, n) {
              var i, o;
              return r.default.wrap((function(a) {
                for (;;) switch (a.prev = a.next) {
                  case 0:
                    if (i = /^\.|^\/(?=[^\/])/, !/^data:image\/(\w+);base64/.test(t)) {
                      a.next = 13;
                      break
                    }
                    if (f[t]) {
                      a.next = 12;
                      break
                    }
                    return o = t, a.next = 8, h(t);
                  case 8:
                    t = a.sent, f[o] = t, a.next = 13;
                    break;
                  case 12:
                    t = f[t];
                  case 13:
                    f[t] && f[t].errMsg ? l(f[t]) : e.getImageInfo({
                      src: t,
                      success: function(e) {
                        e.path = i.test(t) ? "/".concat(e.path) : e.path, e.url = t, f[t] = e, l(f[t])
                      },
                      fail: function(e) {
                        l({
                          path: t
                        }), console.error("getImageInfo:fail ".concat(t, " failed ").concat(JSON.stringify(e)))
                      }
                    });
                  case 14:
                  case "end":
                    return a.stop()
                }
              }), a)
            })));
            return function(e, t) {
              return a.apply(this, arguments)
            }
          }())
        }, t.isNumber = v, t.pathToBase64 = function(t) {
          return new Promise((function(a, l) {
            e.canIUse("getFileSystemManager") && e.getFileSystemManager().readFile({
              filePath: t,
              encoding: "base64",
              success: function(e) {
                a("data:image/png;base64," + e.data)
              },
              fail: function(e) {
                console.error("urlToBase64 error:", JSON.stringify(e)), l(e)
              }
            })
          }))
        }, t.toPx = function e(t, a) {
          if ("number" == typeof t) return t;
          if (v(t)) return 1 * t;
          if ("string" == typeof t) {
            var l = /^-?([0-9]+)?([.]{1}[0-9]+){0,1}(em|rpx|px|%)$/g.exec(t);
            if (!t || !l) return 0;
            var n = l[3];
            t = parseFloat(t);
            var r = 0;
            return "rpx" === n ? r = Math.floor(t * (c || .5) * 1) : "px" === n ? r = Math.floor(1 * t) : "%" === n ? r = Math.floor(t * e(a) / 100) : "em" === n && (r = Math.ceil(t * e(a || 14))), r
          }
        };
        var r = n(a("7eb4")),
          i = n(a("67ad")),
          o = n(a("0bdb")),
          u = n(a("ee10")),
          s = n(a("34cf")),
          c = e.getSystemInfoSync().windowWidth / 750,
          f = {};

        function v(e) {
          return /^-?\d+(\.\d+)?$/.test(e)
        }

        function h(t) {
          var a = /data:image\/(\w+);base64,(.*)/.exec(t) || [],
            n = (0, s.default)(a, 3),
            r = n[1],
            i = n[2];
          return new Promise((function(t, a) {
            var n = e.getFileSystemManager();
            r || (console.error("ERROR_BASE64SRC_PARSE"), a(new Error("ERROR_BASE64SRC_PARSE")));
            var o = (new Date).getTime(),
              u = "".concat(l.env.USER_DATA_PATH, "/").concat(o, ".").concat(r),
              s = function(t) {
                var a = {
                  _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                  decodeArrayBuffer: function(e) {
                    var t = e.length / 4 * 3,
                      a = new ArrayBuffer(t);
                    return this.decode(e, a), a
                  },
                  removePaddingChars: function(e) {
                    return 64 == this._keyStr.indexOf(e.charAt(e.length - 1)) ? e.substring(0, e.length - 1) : e
                  },
                  decode: function(e, t) {
                    e = this.removePaddingChars(e), e = this.removePaddingChars(e);
                    var a, l, n, r, i, o, u, s = parseInt(e.length / 4 * 3, 10),
                      c = 0,
                      f = 0;
                    for (a = t ? new Uint8Array(t) : new Uint8Array(s), e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""), c = 0; c < s; c += 3) l = this._keyStr.indexOf(e.charAt(f++)) << 2 | (i = this._keyStr.indexOf(e.charAt(f++))) >> 4, n = (15 & i) << 4 | (o = this._keyStr.indexOf(e.charAt(f++))) >> 2, r = (3 & o) << 6 | (u = this._keyStr.indexOf(e.charAt(f++))), a[c] = l, 64 != o && (a[c + 1] = n), 64 != u && (a[c + 2] = r);
                    return a
                  }
                };
                return e.base64ToArrayBuffer && e.base64ToArrayBuffer(t) || a.decodeArrayBuffer(t)
              }(i);
            n.writeFile({
              filePath: u,
              data: s,
              encoding: "binary",
              success: function() {
                t(u)
              },
              fail: function(e) {
                console.error("获取base64图片失败", JSON.stringify(e)), a(e)
              }
            })
          }))
        }
        t.CHAR_WIDTH_SCALE_MAP = [.296, .313, .436, .638, .586, .89, .87, .256, .334, .334, .455, .742, .241, .433, .241, .427, .586, .586, .586, .586, .586, .586, .586, .586, .586, .586, .241, .241, .742, .742, .742, .483, 1.031, .704, .627, .669, .762, .55, .531, .744, .773, .294, .396, .635, .513, .977, .813, .815, .612, .815, .653, .577, .573, .747, .676, 1.018, .645, .604, .62, .334, .416, .334, .742, .448, .295, .553, .639, .501, .64, .567, .347, .64, .616, .266, .267, .544, .266, .937, .616, .636, .639, .64, .382, .463, .373, .616, .525, .79, .507, .529, .492, .334, .269, .334, .742, .296];
        var d = function() {
          function e() {
            (0, i.default)(this, e)
          }
          return (0, o.default)(e, [{
            key: "setDiffData",
            value: function(e, t) {
              var a = {};
              Object.keys(t).forEach((function(l) {
                e[l] !== t[l] && (a[l] = t[l])
              })), Object.keys(a).length
            }
          }]), e
        }();
        t.DataUtil = d
      }).call(this, a("df3c").default, a("3223").default)
    },
    "3b2af": function(e, t, a) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "yyyy-mm-dd";
        (e = parseInt(e)) || (e = Number(new Date)), 10 == e.toString().length && (e *= 1e3);
        var a, l = new Date(e),
          n = {
            "y+": l.getFullYear().toString(),
            "m+": (l.getMonth() + 1).toString(),
            "d+": l.getDate().toString(),
            "h+": l.getHours().toString(),
            "M+": l.getMinutes().toString(),
            "s+": l.getSeconds().toString()
          };
        for (var r in n)(a = new RegExp("(" + r + ")").exec(t)) && (t = t.replace(a[1], 1 == a[1].length ? n[r] : n[r].padStart(a[1].length, "0")));
        return t
      }
    },
    "3b2d": function(t, a) {
      function l(a) {
        return t.exports = l = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
          return e(t)
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t)
        }, t.exports.__esModule = !0, t.exports.default = t.exports, l(a)
      }
      t.exports = l, t.exports.__esModule = !0, t.exports.default = t.exports
    },
    "3ecc": function(e, t, a) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0, t.default = {
        created: function() {
          "message" === this.type && (this.maskShow = !1, this.childrenMsg = null)
        },
        methods: {
          customOpen: function() {
            this.childrenMsg && this.childrenMsg.open()
          },
          customClose: function() {
            this.childrenMsg && this.childrenMsg.close()
          }
        }
      }
    },
    "40ab": function(e, t, a) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        v: "1.4.3",
        version: "1.4.3",
        type: ["primary", "success", "info", "error", "warning"]
      }
    },
    4309: function(e, t, a) {
      (function(t) {
        e.exports = {
          data: function() {
            return {}
          },
          onLoad: function() {
            this.$u.getRect = this.$uGetRect
          },
          methods: {
            $uGetRect: function(e, a) {
              var l = this;
              return new Promise((function(n) {
                t.createSelectorQuery().in(l)[a ? "selectAll" : "select"](e).boundingClientRect((function(e) {
                  a && Array.isArray(e) && e.length && n(e), !a && e && n(e)
                })).exec()
              }))
            }
          },
          onReachBottom: function() {
            t.$emit("uOnReachBottom")
          }
        }
      }).call(this, a("df3c").default)
    },
    4373: function(e, t, a) {
      var l = a("47a9");
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.Layout = void 0;
      var n = l(a("7eb4")),
        r = l(a("3b2d")),
        i = l(a("34cf")),
        o = l(a("7ca3")),
        u = l(a("ee10")),
        s = l(a("67ad")),
        c = l(a("0bdb")),
        f = a("3a9f"),
        v = 0,
        h = function() {
          function e(t, a, l) {
            (0, s.default)(this, e), this.ctx = t, this.root = a, this.isH5PathToBase64 = l
          }
          return (0, c.default)(e, [{
            key: "init",
            value: function(e, t, a) {
              this.ctx = e, this.root = t, this.isH5PathToBase64 = a
            }
          }, {
            key: "getNodeTree",
            value: function() {
              var e = (0, u.default)(n.default.mark((function e(t) {
                var a, l, r, i, o, u, s, c, f, h, d, b, p, g, y, S, m, Y, Z = arguments;
                return n.default.wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return a = Z.length > 1 && void 0 !== Z[1] ? Z[1] : {}, l = Z.length > 2 && void 0 !== Z[2] ? Z[2] : 0, r = Z.length > 3 && void 0 !== Z[3] ? Z[3] : [], i = Z.length > 4 ? Z[4] : void 0, o = Object.assign({}, this.getComputedStyle(t, a, l)), e.next = 7, this.getAttributes(t);
                    case 7:
                      if (u = e.sent, s = {
                          id: v++,
                          parent: a,
                          computedStyle: o,
                          rules: t.rules,
                          attributes: Object.assign({}, u),
                          name: (null == t ? void 0 : t.type) || "view"
                        }, "{}" !== JSON.stringify(a) || t.type ? s.layoutBox = Object.assign({
                          left: 0,
                          top: 0
                        }, this.getLayoutBox(s, a, l, r, i)) : (c = o.left, f = void 0 === c ? 0 : c, h = o.top, d = void 0 === h ? 0 : h, b = o.width, p = void 0 === b ? 0 : b, g = o.height, y = void 0 === g ? 0 : g, s.layoutBox = {
                          left: f,
                          top: d,
                          width: p,
                          height: y
                        }), null == t || !t.views) {
                        e.next = 25;
                        break
                      }
                      S = [], s.children = [], m = 0;
                    case 14:
                      if (!(m < t.views.length)) {
                        e.next = 24;
                        break
                      }
                      return Y = t.views[m], e.t0 = S, e.next = 19, this.getNodeTree(Y, s, m, S, t);
                    case 19:
                      e.t1 = e.sent, e.t0.push.call(e.t0, e.t1);
                    case 21:
                      m++, e.next = 14;
                      break;
                    case 24:
                      s.children = S;
                    case 25:
                      return e.abrupt("return", s);
                    case 26:
                    case "end":
                      return e.stop()
                  }
                }), e, this)
              })));
              return function(t) {
                return e.apply(this, arguments)
              }
            }()
          }, {
            key: "getComputedStyle",
            value: function(e) {
              var t = this,
                a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                l = {},
                n = e.name || e.type,
                u = "{}" != JSON.stringify(a) || n ? e.css : e;
              if (!u) return l;
              var s = ["color", "fontSize", "lineHeight", "verticalAlign", "fontWeight", "textAlign"];
              a.computedStyle && s.forEach((function(e) {
                (u[e] || a.computedStyle[e]) && (u[e] = u[e] || a.computedStyle[e])
              }));
              for (var c = function() {
                  var e = h[v],
                    s = u[e];
                  if ("views" == e) return "continue";
                  if (/^(box)?shadow$/i.test(e)) {
                    var c = s.split(" ").map((function(e) {
                      return /^\d/.test(e) ? (0, f.toPx)(e) : e
                    }));
                    return l.boxShadow = c, "continue"
                  }
                  if (/^border(?!radius)/i.test(e)) {
                    var d, b, p = e.match(/^border([BTRLa-z]+)?/)[0],
                      g = e.match(/[W|S|C][a-z]+/),
                      y = s.split(" ").map((function(e) {
                        return /^\d/.test(e) ? (0, f.toPx)(e) : e
                      }));
                    return y.length > 1 ? l[p] = (d = {}, (0, o.default)(d, p + "Width", y[0] || 1), (0, o.default)(d, p + "Style", y[1] || "solid"), (0, o.default)(d, p + "Color", y[2] || "black"), d) : (l[p] = (b = {}, (0, o.default)(b, p + "Width", 1), (0, o.default)(b, p + "Style", "solid"), (0, o.default)(b, p + "Color", "black"), b), l[p][p + g[0]] = y[0]), "continue"
                  }
                  if (/^background(Color)?$/i.test(e)) return l.backgroundColor = s, "continue";
                  if (/padding|margin|radius/i.test(e)) {
                    var S = e.includes("adius"),
                      m = S ? "borderRadius" : e.match(/[a-z]+/)[0],
                      Y = [0, 0, 0, 0].map((function(e, t) {
                        return S ? ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"][t] : [m + "Top", m + "Right", m + "Bottom", m + "Left"][t]
                      }));
                    if ("padding" === e || "margin" === e || "radius" === e || "borderRadius" === e) {
                      var Z = (null == s ? void 0 : s.split(" ").map((function(e) {
                          return /^\d/.test(e) && (0, f.toPx)(e, u.width)
                        }), [])) || [0],
                        L = S ? "borderRadius" : e;
                      if (1 == Z.length) l[L] = Z[0];
                      else {
                        var C, T = (0, i.default)(Z, 4),
                          w = T[0],
                          _ = T[1],
                          X = T[2],
                          J = T[3];
                        l[L] = (C = {}, (0, o.default)(C, Y[0], w), (0, o.default)(C, Y[1], (0, f.isNumber)(_) ? _ : w), (0, o.default)(C, Y[2], (0, f.isNumber)(X) ? X : w), (0, o.default)(C, Y[3], (0, f.isNumber)(J) ? J : _), C)
                      }
                    } else {
                      var P;
                      "object" === (0, r.default)(l[m]) || (l[m] = (P = {}, (0, o.default)(P, Y[0], l[m] || 0), (0, o.default)(P, Y[1], l[m] || 0), (0, o.default)(P, Y[2], l[m] || 0), (0, o.default)(P, Y[3], l[m] || 0), P)), l[m][e] = (0, f.toPx)(s, u.width)
                    }
                    return "continue"
                  }
                  if (/^(width|height)$/i.test(e)) return /%$/.test(s) ? l[e] = (0, f.toPx)(s, a.layoutBox[e]) : l[e] = /px|rpx$/.test(s) ? (0, f.toPx)(s) : s, "continue";
                  if (/^transform$/i.test(e)) return l[e] = {}, s.replace(/([a-zA-Z]+)\(([0-9,-\.%rpxdeg\s]+)\)/g, (function(t, a, n) {
                    var r = n.split(",").map((function(e) {
                        return e.replace(/(^\s*)|(\s*$)/g, "")
                      })),
                      i = function(e, t) {
                        return e.includes("deg") ? 1 * e : t && !/%$/.test(t) ? (0, f.toPx)(e, t) : e
                      };
                    a.includes("matrix") ? l[e][a] = r.map((function(e) {
                      return 1 * e
                    })) : a.includes("rotate") ? l[e][a] = 1 * n.match(/\d+/)[0] : /[X, Y]/.test(a) ? l[e][a] = /[X]/.test(a) ? i(r[0], u.width) : i(r[0], u.height) : (l[e][a + "X"] = i(r[0], u.width), l[e][a + "Y"] = i(r[1] || r[0], u.height))
                  })), "continue";
                  if (/%/.test(s)) {
                    var M = a.layoutBox,
                      D = M.width,
                      x = M.height,
                      B = (M.left, M.top, t.root),
                      H = B.width,
                      Q = B.height;
                    l.position, l[e] = "width" == e ? (0, f.toPx)(s, D || H) : "height" == e ? (0, f.toPx)(s, x || Q) : "left" == e || "top" == e ? s : (0, f.toPx)(s, u.width)
                  } else l[e] = /px|rpx$/.test(s) ? (0, f.toPx)(s) : /em$/.test(s) && "text" == n ? (0, f.toPx)(s, u.fontSize) : s
                }, v = 0, h = Object.keys(u); v < h.length; v++) c();
              return /image/.test(e.name || e.type) && !l.mode && (l.mode = e.mode || "scaleToFill", u.width && "auto" != u.width || u.height && "auto" != u.width || (l.mode = "")), l
            }
          }, {
            key: "getLayoutBox",
            value: function(e) {
              var t, a, l, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
                s = {},
                c = e || {},
                v = c.name,
                h = c.computedStyle,
                d = (c.layoutBox, c.attributes);
              if (!v) return s;
              var b = this.ctx,
                p = r.layoutBox || this.root,
                g = r.computedStyle,
                y = h.verticalAlign,
                S = h.left,
                m = h.top,
                Y = h.width,
                Z = h.height,
                L = h.fontSize,
                C = void 0 === L ? 14 : L,
                T = h.lineHeight,
                w = void 0 === T ? "1.4em" : T,
                _ = h.maxLines,
                X = h.fontWeight,
                J = h.fontFamily,
                P = h.textStyle,
                M = h.position,
                D = h.display,
                x = h.padding,
                B = h.margin,
                H = h.padding || (t = {
                  p: x
                }, (0, o.default)(t, "p", x), (0, o.default)(t, "p", x), (0, o.default)(t, "p", x), t),
                Q = H.paddingTop,
                A = void 0 === Q ? 0 : Q,
                F = H.paddingRight,
                N = void 0 === F ? 0 : F,
                E = H.paddingBottom,
                O = void 0 === E ? 0 : E,
                W = H.paddingLeft,
                k = void 0 === W ? 0 : W,
                G = h.margin || (a = {
                  m: B
                }, (0, o.default)(a, "m", B), (0, o.default)(a, "m", B), (0, o.default)(a, "m", B), a),
                R = G.marginTop,
                K = void 0 === R ? 0 : R,
                I = G.marginRight,
                $ = void 0 === I ? 0 : I,
                j = (G.marginBottom, G.marginLeft),
                z = void 0 === j ? 0 : j,
                U = u[i - 1] || {},
                q = U.layoutBox,
                V = U.computedStyle,
                ee = U.name,
                te = u[i + 1] || {},
                ae = te.layoutBox,
                le = (te.computedStyle, te.name, (null == V || null === (l = V.margin) || void 0 === l ? void 0 : l.marginBottom) || 0),
                ne = (null == V || null === (n = V.margin) || void 0 === n ? void 0 : n.marginRight) || 0;
              if (/%$/.test(S) && (S = (0, f.toPx)(S, p.width)), /%$/.test(m) && (m = (0, f.toPx)(m, p.height)), "relative" == M && (S += p.left, m += p.top), "text" === v) {
                var re = d.text || "";
                w = (0, f.toPx)(w, C), b.save(), b.setFonts({
                  fontFamily: J,
                  fontSize: C,
                  fontWeight: X,
                  textStyle: P
                });
                var ie = 0 == i,
                  oe = "inlineBlock" === D,
                  ue = "block" === D || "block" === (null == V ? void 0 : V.display),
                  se = ie && !ae || !(null != r && r.id),
                  ce = ie || ue ? 0 : q.offsetRight || 0,
                  fe = re.split("\n"),
                  ve = 1,
                  he = "",
                  de = h.textIndent || 0;
                se || oe ? (he = re, ve = Math.max(fe.length, Math.ceil(b.measureText(re, C).width / ((Y || p.width) - b.measureText("!", C).width / 2)))) : fe.map((function(e, t) {
                  ve += t;
                  for (var a = e.split(""), l = 0; l < a.length; l++) {
                    var n = a[l],
                      r = he + n,
                      i = b.measureText(r, C).width;
                    1 == ve && (i = i + (ue ? 0 : ce) + de), i > p.width ? (ve++, he = n) : he = r
                  }
                })), oe || (s.offsetLeft = ((0, f.isNumber)(S) || ue || se ? de : ce) + k + z);
                var be = b.measureText(he, C).width,
                  pe = ve > 1 ? p.width : be + ((null == s ? void 0 : s.offsetLeft) || 0);
                oe || (s.offsetRight = (S || 0) + s.offsetLeft + (Y || (ue ? p.width : be)) + N + $);
                var ge = q ? q.left + q.width : 0,
                  ye = function() {
                    return oe ? (ge + pe > p.width || ie ? p.left : ge + ne) + z : S || p.left
                  },
                  Se = function() {
                    return oe ? pe + k + N : Y || (!se || ue ? p.width : pe > p.width - s.left || ve > 1 ? p.width - s.left : pe)
                  },
                  me = function() {
                    return Z || (ve > 1 ? (_ || ve) * w + A + O : w + A + O)
                  },
                  Ye = function() {
                    var e = m;
                    return e || (e = ie ? p.top : 1 == ve && pe < p.width && "text" === ee && !ue && !oe || q.width < p.width && !(oe && ge + pe > p.width) ? q.top : q.top + q.height - ((null == V ? void 0 : V.lineHeight) || 0)), "bottom" === y && (e = p.top + (p.height - s.height || 0)), "middle" === y && (e = p.top + (p.height ? (p.height - s.height || 0) / 2 : 0)), e + K + (ue && (null == V ? void 0 : V.lineHeight) || 0) + (ge + pe > p.width ? le : 0)
                  };
                s.left = ye(), s.width = Se(), s.height = me(), s.top = Ye(), g && !g.height && (p.height = s.top - p.top + s.height), b.restore()
              } else if (["view", "qrcode"].includes(v)) s.left = (S || p.left) + z - $, s.width = (Y || (null == p ? void 0 : p.width)) - k - N, s.height = Z || 0, (0, f.isNumber)(m) ? s.top = m + K : s.top = (q && q.top + q.height || p.top) + K + le;
              else if ("image" === v) {
                var Ze = d.width,
                  Le = d.height,
                  Ce = q && q.left + q.width;
                if ((0, f.isNumber)(S) ? s.left = S + z - $ : s.left = (q && (Ce < p.width ? Ce : p.left) || p.left) + z - $, (0, f.isNumber)(Y) ? s.width = Y : s.width = Math.round((0, f.isNumber)(Z) ? Ze * Z / Le : null == p ? void 0 : p.width), (0, f.isNumber)(Z)) s.height = Z;
                else {
                  var Te = Math.round(s.width * Le / Ze);
                  s.height = Math.min(Te, null == p ? void 0 : p.height)
                }(0, f.isNumber)(m) ? s.top = m + K: s.top = (q && (Ce < p.width ? Ce : q.top + q.height) || p.top) + K + le
              }
              return s
            }
          }, {
            key: "getAttributes",
            value: function() {
              var e = (0, u.default)(n.default.mark((function e(t) {
                var a, l, r, i, o, u, s, c;
                return n.default.wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      if (a = {}, !(null != t && t.url || null != t && t.src)) {
                        e.next = 16;
                        break
                      }
                      return a.src = t.url || (null == t ? void 0 : t.src), e.next = 5, (0, f.getImageInfo)(a.src, this.isH5PathToBase64);
                    case 5:
                      if (e.t0 = e.sent, e.t0) {
                        e.next = 8;
                        break
                      }
                      e.t0 = {};
                    case 8:
                      l = e.t0, r = l.width, i = void 0 === r ? 0 : r, o = l.height, u = void 0 === o ? 0 : o, s = l.path, c = l.url, a = Object.assign({}, a, {
                        width: i,
                        height: u,
                        src: s,
                        url: c
                      });
                    case 16:
                      return null != t && t.text && (a.text = t.text), e.abrupt("return", a);
                    case 18:
                    case "end":
                      return e.stop()
                  }
                }), e, this)
              })));
              return function(t) {
                return e.apply(this, arguments)
              }
            }()
          }, {
            key: "calcNode",
            value: function() {
              var e = (0, u.default)(n.default.mark((function e(t) {
                var a;
                return n.default.wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return a = t || this.element, e.next = 3, this.getNodeTree(a);
                    case 3:
                      return e.abrupt("return", e.sent);
                    case 4:
                    case "end":
                      return e.stop()
                  }
                }), e, this)
              })));
              return function(t) {
                return e.apply(this, arguments)
              }
            }()
          }]), e
        }();
      t.Layout = h
    },
    4404: function(e, t, a) {
      var l = a("47a9");
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = l(a("3b2af"));
      t.default = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "yyyy-mm-dd";
        null == e && (e = Number(new Date)), 10 == (e = parseInt(e)).toString().length && (e *= 1e3);
        var a = (new Date).getTime() - e,
          l = "";
        switch (!0) {
          case (a = parseInt(a / 1e3)) < 300:
            l = "刚刚";
            break;
          case a >= 300 && a < 3600:
            l = parseInt(a / 60) + "分钟前";
            break;
          case a >= 3600 && a < 86400:
            l = parseInt(a / 3600) + "小时前";
            break;
          case a >= 86400 && a < 2592e3:
            l = parseInt(a / 86400) + "天前";
            break;
          default:
            l = !1 === t ? a >= 2592e3 && a < 31536e3 ? parseInt(a / 2592e3) + "个月前" : parseInt(a / 31536e3) + "年前" : (0, n.default)(e, t)
        }
        return l
      }
    },
    "47a9": function(e, t) {
      e.exports = function(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    "4aff": function(e, t, a) {
      var l = a("47a9");
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "auto",
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "rpx";
        return e = String(e), n.default.number(e) ? "".concat(e).concat(t) : e
      };
      var n = l(a("a667"))
    },
    "4bf7": function(e, t, a) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        for (var a = this.$parent; a;) {
          if (a.$options.name === e) {
            var l = {};
            for (var n in t) l[n] = a[n] ? a[n] : t[n];
            return l
          }
          a = a.$parent
        }
        return {}
      }
    },
    5366: function(e, t) {},
    5483: function(e, t, a) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.adaptor = function(e) {
        return Object.assign(e, n(e), {
          setStrokeStyle: function(t) {
            e.strokeStyle = t
          },
          setLineWidth: function(t) {
            e.lineWidth = t
          },
          setLineCap: function(t) {
            e.lineCap = t
          },
          setFillStyle: function(t) {
            e.fillStyle = t
          },
          setFontSize: function(t) {
            e.font = String(t)
          },
          setGlobalAlpha: function(t) {
            e.globalAlpha = t
          },
          setLineJoin: function(t) {
            e.lineJoin = t
          },
          setTextAlign: function(t) {
            e.textAlign = t
          },
          setMiterLimit: function(t) {
            e.miterLimit = t
          },
          setShadow: function(t, a, l, n) {
            e.shadowOffsetX = t, e.shadowOffsetY = a, e.shadowBlur = l, e.shadowColor = n
          },
          setTextBaseline: function(t) {
            e.textBaseline = t
          },
          createCircularGradient: function() {},
          draw: function() {}
        })
      }, t.expand = function(e) {
        return Object.assign(e, n(e))
      };
      var l = a("3a9f"),
        n = function(e) {
          return e._measureText = e.measureText, {
            setFonts: function(t) {
              var a = t.fontFamily,
                l = void 0 === a ? "sans-serif" : a,
                n = t.fontSize,
                r = void 0 === n ? 14 : n,
                i = t.fontWeight,
                o = void 0 === i ? "normal" : i,
                u = t.textStyle,
                s = void 0 === u ? "normal" : u;
              e.font = "".concat(s, " ").concat(o, " ").concat(r, "px ").concat(l)
            },
            measureText: function(e, t) {
              return {
                width: e.split("").reduce((function(e, t) {
                  var a = t.charCodeAt(0);
                  return e + (l.CHAR_WIDTH_SCALE_MAP[a - 32] || 1)
                }), 0) * t
              }
            }
          }
        }
    },
    6382: function(e, t, a) {
      var l = a("6454");
      e.exports = function(e, t) {
        if (e) {
          if ("string" == typeof e) return l(e, t);
          var a = Object.prototype.toString.call(e).slice(8, -1);
          return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? l(e, t) : void 0
        }
      }, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    6454: function(e, t) {
      e.exports = function(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, l = new Array(t); a < t; a++) l[a] = e[a];
        return l
      }, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    "67ad": function(e, t) {
      e.exports = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    6917: function(e, t, a) {
      var l = a("47a9");
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = l(a("f4b4")),
        r = (a("e846"), {
          data: function() {
            return {
              url: "",
              triggerType: "",
              params: "",
              pageId: "",
              appFlag: !1
            }
          },
          onShow: function(e) {
            e && e.scene && (this.appFlag = !0), this.entryTrack()
          },
          onHide: function() {
            this.leaveTrack()
          },
          onUnload: function() {
            this.leaveTrack()
          },
          methods: {
            entryTrack: function() {
              "show" !== this.triggerType && (this.triggerType = "show", this.pageId = (new Date).getTime(), this.appFlag ? n.default.analyse({
                pageId: this.pageId
              }, "appShow") : n.default.analyse({
                pageId: this.pageId
              }, "show"))
            },
            leaveTrack: function() {
              "hide" !== this.triggerType && (this.triggerType = "hide", this.appFlag ? n.default.analyse({
                pageId: this.pageId
              }, "appHide") : n.default.analyse({
                pageId: this.pageId
              }, "hide"))
            }
          }
        });
      t.default = r
    },
    "6a3f": function(e, t, a) {
      var l = a("3b2d");
      e.exports = {
        isValidUrl: function(e) {
          return /(ht|f)tp(s?):\/\/([^ \\/]*\.)+[^ \\/]*(:[0-9]+)?\/?/.test(e)
        },
        equal: function e(t, a) {
          if (t === a) return !0;
          if (t && a && "object" == l(t) && "object" == l(a)) {
            var n, r, i, o = Array.isArray(t),
              u = Array.isArray(a);
            if (o && u) {
              if ((r = t.length) != a.length) return !1;
              for (n = r; 0 != n--;)
                if (!e(t[n], a[n])) return !1;
              return !0
            }
            if (o != u) return !1;
            var s = t instanceof Date,
              c = a instanceof Date;
            if (s != c) return !1;
            if (s && c) return t.getTime() == a.getTime();
            var f = t instanceof RegExp,
              v = a instanceof RegExp;
            if (f != v) return !1;
            if (f && v) return t.toString() == a.toString();
            var h = Object.keys(t);
            if ((r = h.length) !== Object.keys(a).length) return !1;
            for (n = r; 0 != n--;)
              if (!Object.prototype.hasOwnProperty.call(a, h[n])) return !1;
            for (n = r; 0 != n--;)
              if (!e(t[i = h[n]], a[i])) return !1;
            return !0
          }
          return t != t && a != a
        }
      }
    },
    "6a48": function(e, t, a) {
      var l = a("47a9");
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.children = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return t.indexKey, {
          inject: (0, i.default)({}, e, {
            default: null
          }),
          watch: {
            el: {
              handler: function(e, t) {
                JSON.stringify(e) != JSON.stringify(t) && this.bindRelation()
              },
              deep: !0,
              immediate: !0
            },
            src: {
              handler: function(e, t) {
                e != t && this.bindRelation()
              },
              immediate: !0
            },
            text: {
              handler: function(e, t) {
                e != t && this.bindRelation()
              },
              immediate: !0
            },
            css: {
              handler: function(e, t) {
                e != t && (this.el.css = ("object" == (0, r.default)(e) ? e : e && Object.assign.apply(Object, (0, n.default)(o(e)))) || {})
              },
              immediate: !0
            },
            replace: {
              handler: function(e, t) {
                JSON.stringify(e) != JSON.stringify(t) && this.bindRelation()
              },
              deep: !0,
              immediate: !0
            }
          },
          created: function() {
            var t = this;
            this._uid || (this._uid = this._.uid), Object.defineProperty(this, "parent", {
              get: function() {
                return t[e] || []
              }
            }), Object.defineProperty(this, "index", {
              get: function() {
                t.bindRelation();
                var e = t.parent,
                  a = (e = void 0 === e ? {} : e).el,
                  l = (a = void 0 === a ? {} : a).views;
                return (void 0 === l ? [] : l).indexOf(t.el)
              }
            }), this.el.type = this.type
          },
          beforeDestroy: function() {
            var e = this;
            this.parent && (this.parent.el.views = this.parent.el.views.filter((function(t) {
              return t._uid !== e._uid
            })))
          },
          methods: {
            bindRelation: function() {
              var e = this;
              if (this.el._uid || (this.el._uid = this._uid), ["text", "qrcode"].includes(this.type) && (this.el.text = this.$slots.default && this.$slots.default[0].text || "".concat(this.text || "").replace(/\\n/g, "\n")), "image" == this.type && (this.el.src = this.src), this.parent) {
                var t = this.parent.el.views || []; - 1 !== t.indexOf(this.el) ? this.parent.el.views = t.map((function(t) {
                  return t._uid == e._uid ? e.el : t
                })) : this.parent.el.views = [].concat((0, n.default)(t), [this.el])
              }
            }
          },
          mounted: function() {
            this.bindRelation()
          }
        }
      }, t.parent = function(e) {
        return {
          provide: function() {
            return (0, i.default)({}, e, this)
          },
          data: function() {
            return {
              el: {
                css: {},
                views: []
              }
            }
          },
          watch: {
            css: {
              handler: function(e) {
                this.canvasId && (this.el.css = ("object" == (0, r.default)(e) ? e : e && Object.assign.apply(Object, (0, n.default)(o(e)))) || {}, this.canvasWidth = this.el.css && this.el.css.width || this.canvasWidth, this.canvasHeight = this.el.css && this.el.css.height || this.canvasHeight)
              },
              immediate: !0
            }
          }
        }
      };
      var n = l(a("af34")),
        r = l(a("3b2d")),
        i = l(a("7ca3")),
        o = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return e.split(";").filter((function(e) {
            return e && !/^[\n\s]+$/.test(e)
          })).map((function(e) {
            var t = e.slice(0, e.indexOf(":")),
              a = e.slice(e.indexOf(":") + 1);
            return (0, i.default)({}, t.replace(/-([a-z])/g, (function() {
              return arguments[1].toUpperCase()
            })).replace(/\s+/g, ""), a.replace(/^\s+/, "").replace(/\s+$/, "") || "")
          }))
        }
    },
    "6c87": function(e, t, a) {
      (function(e) {
        var l = a("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.Draw = void 0;
        var n = l(a("7eb4")),
          r = l(a("ee10")),
          i = l(a("34cf")),
          o = l(a("7ca3")),
          u = l(a("67ad")),
          s = l(a("0bdb")),
          c = a("3a9f"),
          f = a("cf69"),
          v = l(a("f40e"));

        function h(e, t) {
          var a = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
          if (!a) {
            if (Array.isArray(e) || (a = function(e, t) {
                if (e) {
                  if ("string" == typeof e) return d(e, t);
                  var a = Object.prototype.toString.call(e).slice(8, -1);
                  return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? d(e, t) : void 0
                }
              }(e)) || t && e && "number" == typeof e.length) {
              a && (e = a);
              var l = 0,
                n = function() {};
              return {
                s: n,
                n: function() {
                  return l >= e.length ? {
                    done: !0
                  } : {
                    done: !1,
                    value: e[l++]
                  }
                },
                e: function(e) {
                  throw e
                },
                f: n
              }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }
          var r, i = !0,
            o = !1;
          return {
            s: function() {
              a = a.call(e)
            },
            n: function() {
              var e = a.next();
              return i = e.done, e
            },
            e: function(e) {
              o = !0, r = e
            },
            f: function() {
              try {
                i || null == a.return || a.return()
              } finally {
                if (o) throw r
              }
            }
          }
        }

        function d(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var a = 0, l = new Array(t); a < t; a++) l[a] = e[a];
          return l
        }
        var b = function() {
          function t(e, a) {
            var l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              r = arguments.length > 4 ? arguments[4] : void 0;
            (0, u.default)(this, t), this.ctx = e, this.canvas = a || null, this.use2dCanvas = l, this.isH5PathToBase64 = n, this.sleep = r
          }
          return (0, s.default)(t, [{
            key: "roundRect",
            value: function(e, t, a, l, n) {
              var r = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                i = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
              if (!(n < 0)) {
                var u = this.ctx;
                if (u.beginPath(), n)
                  if ("number" == typeof n && [0, 1, -1].includes(a - 2 * n) && [0, 1, -1].includes(l - 2 * n)) u.arc(e + a - n, t + l - n, n, 0, 2 * Math.PI);
                  else {
                    var s, c = n || (s = {
                        r: n
                      }, (0, o.default)(s, "r", n), (0, o.default)(s, "r", n), (0, o.default)(s, "r", n), s),
                      f = c.borderTopLeftRadius,
                      v = void 0 === f ? n || 0 : f,
                      h = c.borderTopRightRadius,
                      d = void 0 === h ? n || 0 : h,
                      b = c.borderBottomRightRadius,
                      p = void 0 === b ? n || 0 : b,
                      g = c.borderBottomLeftRadius,
                      y = void 0 === g ? n || 0 : g;
                    u.arc(e + a - p, t + l - p, p, 0, .5 * Math.PI), u.lineTo(e + y, t + l), u.arc(e + y, t + l - y, y, .5 * Math.PI, Math.PI), u.lineTo(e, t + v), u.arc(e + v, t + v, v, Math.PI, 1.5 * Math.PI), u.lineTo(e + a - d, t), u.arc(e + a - d, t + d, d, 1.5 * Math.PI, 2 * Math.PI), u.lineTo(e + a, t + l - p)
                  }
                else u.rect(e, t, a, l);
                u.closePath(), i && u.stroke(), r && u.fill()
              }
            }
          }, {
            key: "setTransform",
            value: function(e, t) {
              var a = t.transform,
                l = this.ctx,
                n = a || {},
                r = n.scaleX,
                i = void 0 === r ? 1 : r,
                o = n.scaleY,
                u = void 0 === o ? 1 : o,
                s = n.translateX,
                f = void 0 === s ? 0 : s,
                v = n.translateY,
                h = void 0 === v ? 0 : v,
                d = n.rotate,
                b = void 0 === d ? 0 : d,
                p = n.skewX,
                g = void 0 === p ? 0 : p,
                y = n.skewY,
                S = void 0 === y ? 0 : y,
                m = e.left,
                Y = e.top,
                Z = e.width,
                L = e.height;
              f = (0, c.toPx)(f, Z) || 0, h = (0, c.toPx)(h, L) || 0, l.scale(i, u), l.translate(Z * (i > 0 ? 1 : -1) / 2 + (m + f) / i, L * (u > 0 ? 1 : -1) / 2 + (Y + h) / u), b && l.rotate(b * Math.PI / 180), (g || S) && l.transform(1, Math.tan(S * Math.PI / 180), Math.tan(g * Math.PI / 180), 1, 0, 0)
            }
          }, {
            key: "setBackground",
            value: function(e, t, a) {
              var l = this.ctx;
              e ? f.GD.isGradient(e) ? f.GD.doGradient(e, t, a, l) : l.setFillStyle(e) : l.setFillStyle("transparent")
            }
          }, {
            key: "setShadow",
            value: function(e) {
              var t = e.boxShadow,
                a = void 0 === t ? [] : t,
                l = this.ctx;
              if (a.length) {
                var n = (0, i.default)(a, 4),
                  r = n[0],
                  o = n[1],
                  u = n[2],
                  s = n[3];
                l.setShadow(r, o, u, s)
              }
            }
          }, {
            key: "setBorder",
            value: function(e, t) {
              var a, l = this,
                n = this.ctx,
                r = e.left,
                i = e.top,
                u = e.width,
                s = e.height,
                c = t.border,
                f = t.borderBottom,
                v = t.borderTop,
                h = t.borderRight,
                d = t.borderLeft,
                b = t.borderRadius,
                p = (t.opacity, c || {}),
                g = p.borderWidth,
                y = void 0 === g ? 0 : g,
                S = p.borderStyle,
                m = p.borderColor,
                Y = f || {},
                Z = Y.borderBottomWidth,
                L = void 0 === Z ? y : Z,
                C = Y.borderBottomStyle,
                T = void 0 === C ? S : C,
                w = Y.borderBottomColor,
                _ = void 0 === w ? m : w,
                X = v || {},
                J = X.borderTopWidth,
                P = void 0 === J ? y : J,
                M = X.borderTopStyle,
                D = void 0 === M ? S : M,
                x = X.borderTopColor,
                B = void 0 === x ? m : x,
                H = h || {},
                Q = (H.borderRightWidth, H.borderRightStyle, H.borderRightColor, d || {}),
                A = Q.borderLeftWidth,
                F = void 0 === A ? y : A,
                N = Q.borderLeftStyle,
                E = void 0 === N ? S : N,
                O = Q.borderLeftColor,
                W = void 0 === O ? m : O,
                k = b || (a = {
                  r: b
                }, (0, o.default)(a, "r", b), (0, o.default)(a, "r", b), (0, o.default)(a, "r", b), a),
                G = k.borderTopLeftRadius,
                R = void 0 === G ? b || 0 : G,
                K = k.borderTopRightRadius,
                I = void 0 === K ? b || 0 : K,
                $ = k.borderBottomRightRadius,
                j = void 0 === $ ? b || 0 : $,
                z = k.borderBottomLeftRadius,
                U = void 0 === z ? b || 0 : z;
              if (f || d || v || h || c) {
                var q = function(e, t, a) {
                    "dashed" == t ? n.setLineDash([Math.ceil(4 * e / 3), Math.ceil(4 * e / 3)]) : "dotted" == t && n.setLineDash([e, e]), n.setStrokeStyle(a)
                  },
                  V = function(a, r, i, o, u, s, c, f, v, h, d, b, p, g) {
                    n.save(), l.setOpacity(t), l.setTransform(e, t), n.setLineWidth(b), q(b, p, g), n.beginPath(), n.arc(a, r, c, Math.PI * v, Math.PI * h), n.lineTo(i, o), n.arc(u, s, f, Math.PI * h, Math.PI * d), n.stroke(), n.restore()
                  };
                c && (n.save(), this.setOpacity(t), this.setTransform(e, t), n.setLineWidth(y), q(y, S, m), this.roundRect(-u / 2, -s / 2, u, s, b, !1, !!m), n.restore()), r = -u / 2, i = -s / 2, f && V(r + u - j, i + s - j, r + U, i + s, r + U, i + s - U, j, U, .25, .5, .75, L, T, _), d && V(r + U, i + s - U, r, i + R, r + R, i + R, U, R, .75, 1, 1.25, F, E, W), v && V(r + R, i + R, r + u - I, i, r + u - I, i + I, R, I, 1.25, 1.5, 1.75, P, D, B), h && V(r + u - I, i + I, r + u, i + s - j, r + u - j, i + s - j, I, j, 1.75, 2, .25, P, D, B)
              }
            }
          }, {
            key: "setOpacity",
            value: function(e) {
              var t = e.opacity,
                a = void 0 === t ? 1 : t;
              this.ctx.setGlobalAlpha(a)
            }
          }, {
            key: "drawView",
            value: function(e, t) {
              var a = this.ctx,
                l = (e.left, e.top, e.width),
                n = e.height,
                r = t || {},
                i = r.borderRadius,
                o = void 0 === i ? 0 : i,
                u = (r.border, r.borderTop, r.borderBottom, r.borderLeft, r.borderRight, r.color, r.backgroundColor);
              r.rotate, r.shadow, a.save(), this.setOpacity(t), this.setTransform(e, t), this.setShadow(t), this.setBackground(u, l, n), this.roundRect(-l / 2, -n / 2, l, n, o, !0, !1), a.restore(), this.setBorder(e, t)
            }
          }, {
            key: "drawImage",
            value: function() {
              var e = (0, r.default)(n.default.mark((function e(t) {
                var a, l, i, o = this,
                  u = arguments;
                return n.default.wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return a = u.length > 1 && void 0 !== u[1] ? u[1] : {}, l = u.length > 2 && void 0 !== u[2] ? u[2] : {}, i = !(u.length > 3 && void 0 !== u[3]) || u[3], e.next = 5, new Promise(function() {
                        var e = (0, r.default)(n.default.mark((function e(r, u) {
                          var s, f, v, h, d, b, p, g, y, S, m, Y, Z, L, C, T, w, _, X, J, P, M, D, x, B, H, Q;
                          return n.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (s = o.ctx, f = o.canvas, v = l.borderRadius, h = void 0 === v ? 0 : v, d = l.mode, b = l.padding, p = void 0 === b ? {} : b, g = l.backgroundColor, y = p.paddingTop, S = void 0 === y ? 0 : y, m = p.paddingLeft, Y = void 0 === m ? 0 : m, Z = p.paddingRight, L = void 0 === Z ? 0 : Z, C = p.paddingBottom, T = void 0 === C ? 0 : C, w = a.left, _ = a.top, X = a.width, J = a.height, s.save(), i || (o.setOpacity(l), o.setTransform(a, l), g && o.setBackground(g, X, J), o.setShadow(l), w = -X / 2, _ = -J / 2, o.roundRect(w, _, X, J, h, !!h, !1)), s.clip(), P = function(e) {
                                    w += Y, _ += S, X = X - Y - L, J = J - S - T;
                                    var t = e.width,
                                      a = e.height,
                                      l = 0,
                                      n = 0,
                                      r = X / J,
                                      i = t / a;
                                    switch (e.width || (d = "scaleToFill"), d) {
                                      case "scaleToFill":
                                        s.drawImage(e.src, w, _, X, J);
                                        break;
                                      case "aspectFit":
                                        r >= i ? (t = J * i, a = J, l = w + Math.round(X - t) / 2, n = _) : (t = X, a = X / i, l = w, n = _ + Math.round(J - a) / 2), s.drawImage(e.src, l, n, t, a);
                                        break;
                                      case "aspectFill":
                                        r >= i ? a = t / r : (t = a * r, l = Math.round(((e.width || X) - t) / 2)), s.drawImage(e.src, l, n, t, a, w, _, X, J);
                                        break;
                                      default:
                                        s.drawImage(e.src, w, _, X, J)
                                    }
                                  }, M = function() {
                                    s.restore(), o.setBorder(a, l), setTimeout((function() {
                                      r(!0)
                                    }), o.sleep)
                                  }, D = function(e) {
                                    if (o.use2dCanvas) {
                                      var t = f.createImage();
                                      t.onload = function() {
                                        e.src = t, P(e), M()
                                      }, t.onerror = function() {
                                        console.error("createImage fail: ".concat(JSON.stringify(e))), u(new Error("createImage fail: ".concat(JSON.stringify(e))))
                                      }, t.src = e.src
                                    } else P(e), M()
                                  }, "string" != typeof t) {
                                  e.next = 21;
                                  break
                                }
                                return e.next = 14, (0, c.getImageInfo)(t, o.isH5PathToBase64);
                              case 14:
                                x = e.sent, B = x.path, H = x.width, Q = x.height, D({
                                  src: B,
                                  width: H,
                                  height: Q
                                }), e.next = 22;
                                break;
                              case 21:
                                D(t);
                              case 22:
                              case "end":
                                return e.stop()
                            }
                          }), e)
                        })));
                        return function(t, a) {
                          return e.apply(this, arguments)
                        }
                      }());
                    case 5:
                    case "end":
                      return e.stop()
                  }
                }), e)
              })));
              return function(t) {
                return e.apply(this, arguments)
              }
            }()
          }, {
            key: "drawText",
            value: function(t, a, l, n) {
              var r = this.ctx,
                i = a.left,
                o = a.top,
                u = a.width,
                s = a.height,
                f = a.offsetLeft,
                v = void 0 === f ? 0 : f,
                h = l.color,
                d = void 0 === h ? "#000000" : h,
                b = l.lineHeight,
                p = void 0 === b ? "1.4em" : b,
                g = l.fontSize,
                y = void 0 === g ? 14 : g,
                S = l.fontWeight,
                m = l.fontFamily,
                Y = l.textStyle,
                Z = l.textAlign,
                L = void 0 === Z ? "left" : Z,
                C = l.verticalAlign,
                T = void 0 === C ? "top" : C,
                w = l.backgroundColor,
                _ = l.maxLines,
                X = l.display,
                J = l.padding,
                P = void 0 === J ? {} : J,
                M = l.borderRadius,
                D = void 0 === M ? 0 : M,
                x = l.textDecoration,
                B = P.paddingTop,
                H = void 0 === B ? 0 : B,
                Q = P.paddingLeft,
                A = void 0 === Q ? 0 : Q;
              if (p = (0, c.toPx)(p, y), t) {
                r.save(), this.setOpacity(l), this.setTransform(a, l), i = -u / 2, o = -s / 2, r.setTextBaseline(T), r.setFonts({
                  fontFamily: m,
                  fontSize: y,
                  fontWeight: S,
                  textStyle: Y
                }), r.setTextAlign(L), w && (this.setBackground(w, u, s), this.roundRect(i, o, u, s, D, 1, 0)), X && X.includes("lock") && (i += A, o += H), this.setShadow(l), r.setFillStyle(d);
                var F = {};
                if (n && n.word.length > 0)
                  for (var N = 0; N < n.word.length; N++)
                    for (var E = 0, O = void 0;
                      (O = t.indexOf(n.word[N], E)) > -1;) {
                      F[O] = {
                        reset: !0
                      };
                      for (var W = 0; W < n.word[N].length; W++) F[O + W] = {
                        reset: !0
                      };
                      E = O + 1
                    }
                switch (L) {
                  case "left":
                    break;
                  case "center":
                    i += .5 * u;
                    break;
                  case "right":
                    i += u
                }
                var k = r.measureText(t, y).width,
                  G = Math.ceil(k / u) * p,
                  R = Math.ceil((s - G) / 2);
                switch (R < 0 && (R = 0), T) {
                  case "top":
                    break;
                  case "middle":
                    o += y / 2;
                    break;
                  case "bottom":
                    o += y
                }
                var K = function(t, a, l) {
                    var n = e.getSystemInfoSync().system;
                    switch (/win|mac/.test(n) && (a += y / 3), T) {
                      case "top":
                        break;
                      case "middle":
                        a -= y / 2;
                        break;
                      case "bottom":
                        a -= y
                    }
                    var i = t;
                    switch (L) {
                      case "left":
                        t = t, i += l;
                        break;
                      case "center":
                        i = (t -= l / 2) + l;
                        break;
                      case "right":
                        i = t, t -= l
                    }
                    x && (r.setLineWidth(y / 13), r.beginPath(), /\bunderline\b/.test(x) && (a -= .8 * U, r.moveTo(t, a), r.lineTo(i, a)), /\boverline\b/.test(x) && (a += U, r.moveTo(t, a - p), r.lineTo(i, a - p)), /\bline-through\b/.test(x) && (r.moveTo(t, a - p / 2), r.lineTo(i, a - p / 2)), r.closePath(), r.setStrokeStyle(d), r.stroke())
                  },
                  I = function(e, t, a) {
                    for (var l = Object.keys(F), i = 0; i < l.length; i++) {
                      var o = F[l[i]];
                      r.save(), r.setFillStyle(n.color), o.char && r.fillText(o.char, o.x, o.y), r.restore()
                    }
                  },
                  $ = function(e, t) {
                    if (e) {
                      var a = Math.round(r.measureText(" ", y).width),
                        l = Math.round(r.measureText("　", y).width),
                        n = Math.round(r.measureText(t, y).width),
                        i = "",
                        o = 1;
                      return n == l ? (i = "　", o = 1) : (i = " ", o = Math.ceil(n / a)), {
                        char: new Array(o).fill(i).join(""),
                        width: n
                      }
                    }
                    return {
                      char: t
                    }
                  },
                  j = function(e, t, a, l) {
                    F[t].x = a, F[t].y = l, F[t].char = e
                  },
                  z = function(e, t, a, l, n) {
                    var i = n.startIndex,
                      u = void 0 === i ? 0 : i,
                      s = (n.endIndex, a);
                    /·/.test(a) && (s = s.replace(/·/g, "."), l = r.measureText(s, y).width);
                    for (var c = a.split(""), f = e, v = !0, h = 0; h < t.length; h++) {
                      var d = t[h],
                        b = d - u,
                        p = c[b];
                      if (p) {
                        var g = $(F[d], p),
                          S = g.char,
                          m = g.width;
                        c[b] = S, v && (v = !1, "center" == L && (f = e - .5 * (l - m - 0)), "right" == L && (f = e - l + m + 0)), j(p, d, f + r.measureText(s.substring(0, b), y).width, o + U)
                      }
                    }
                    return c
                  },
                  U = Math.ceil((p - y) / 2);
                if (k + v <= u && !t.includes("\n")) {
                  i += v;
                  var q = Object.keys(F),
                    V = "";
                  return q && (V = z(i, q, t, k, {}), I()), r.fillText(V.join(""), i, o + U), K(i, o += p, k), r.restore(), void this.setBorder(a, l)
                }
                for (var ee = t.split(""), te = o, ae = i, le = "", ne = 0, re = 0, ie = 0; ie <= ee.length; ie++) {
                  var oe = ee[ie] || "",
                    ue = "\n" === oe,
                    se = "" == oe,
                    ce = le + (oe = ue ? "" : oe),
                    fe = r.measureText(ce, y).width;
                  if (ne >= _) break;
                  if (0 == ne ? (fe += v, ae = i + v) : (fe = fe, ae = i), fe > u || ue || se) {
                    var ve = ie;
                    if (le = se && fe <= u ? ce : le, ++ne === _ && fe > u) {
                      for (; r.measureText("".concat(le, "..."), y).width > u && !(le.length <= 1);) le = le.substring(0, le.length - 1);
                      le += "..."
                    }
                    var he = Object.keys(F),
                      de = "";
                    if (he && (de = z(i, he, le, fe, {
                        startIndex: re,
                        endIndex: ve
                      }), I()), r.fillText(de.join(""), ae, o + U), K(ae, o += p, fe), le = oe, re = ve + (ue ? 1 : 0), o + p > te + s) break
                  } else le = ce
                }
                r.restore(), this.setBorder(a, l)
              }
            }
          }, {
            key: "drawNode",
            value: function() {
              var e = (0, r.default)(n.default.mark((function e(t) {
                var a, l, r, i, o, u, s, c, f, d, b;
                return n.default.wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      if (a = t.layoutBox, l = t.computedStyle, r = t.name, i = t.rules, o = t.attributes, u = o.src, s = o.text, "view" !== r) {
                        e.next = 6;
                        break
                      }
                      this.drawView(a, l), e.next = 12;
                      break;
                    case 6:
                      if ("image" !== r || !u) {
                        e.next = 11;
                        break
                      }
                      return e.next = 9, this.drawImage(t.attributes, a, l, !1);
                    case 9:
                      e.next = 12;
                      break;
                    case 11:
                      "text" === r ? this.drawText(s, a, l, i) : "qrcode" === r && v.default.api.draw(s, this, a, l);
                    case 12:
                      if (t.children) {
                        e.next = 14;
                        break
                      }
                      return e.abrupt("return");
                    case 14:
                      c = Object.values ? Object.values(t.children) : Object.keys(t.children).map((function(e) {
                        return t.children[e]
                      })), f = h(c), e.prev = 16, f.s();
                    case 18:
                      if ((d = f.n()).done) {
                        e.next = 24;
                        break
                      }
                      return b = d.value, e.next = 22, this.drawNode(b);
                    case 22:
                      e.next = 18;
                      break;
                    case 24:
                      e.next = 29;
                      break;
                    case 26:
                      e.prev = 26, e.t0 = e.catch(16), f.e(e.t0);
                    case 29:
                      return e.prev = 29, f.f(), e.finish(29);
                    case 32:
                    case "end":
                      return e.stop()
                  }
                }), e, this, [
                  [16, 26, 29, 32]
                ])
              })));
              return function(t) {
                return e.apply(this, arguments)
              }
            }()
          }]), t
        }();
        t.Draw = b
      }).call(this, a("df3c").default)
    },
    7126: function(e, t, a) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "brackets",
          l = t ? "?" : "",
          n = []; - 1 == ["indices", "brackets", "repeat", "comma"].indexOf(a) && (a = "brackets");
        var r = function(t) {
          var l = e[t];
          if (["", void 0, null].indexOf(l) >= 0) return "continue";
          if (l.constructor === Array) switch (a) {
            case "indices":
              for (var r = 0; r < l.length; r++) n.push(t + "[" + r + "]=" + l[r]);
              break;
            case "brackets":
              l.forEach((function(e) {
                n.push(t + "[]=" + e)
              }));
              break;
            case "repeat":
              l.forEach((function(e) {
                n.push(t + "=" + e)
              }));
              break;
            case "comma":
              var i = "";
              l.forEach((function(e) {
                i += (i ? "," : "") + e
              })), n.push(t + "=" + i);
              break;
            default:
              l.forEach((function(e) {
                n.push(t + "[]=" + e)
              }))
          } else n.push(t + "=" + l)
        };
        for (var i in e) r(i);
        return n.length ? l + n.join("&") : ""
      }
    },
    7172: function(e, t) {
      e.exports = function(e, t) {
        var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null != a) {
          var l, n, r, i, o = [],
            u = !0,
            s = !1;
          try {
            if (r = (a = a.call(e)).next, 0 === t) {
              if (Object(a) !== a) return;
              u = !1
            } else
              for (; !(u = (l = r.call(a)).done) && (o.push(l.value), o.length !== t); u = !0);
          } catch (e) {
            s = !0, n = e
          } finally {
            try {
              if (!u && null != a.return && (i = a.return(), Object(i) !== i)) return
            } finally {
              if (s) throw n
            }
          }
          return o
        }
      }, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    7647: function(e, t) {
      function a(t, l) {
        return e.exports = a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, e.exports.__esModule = !0, e.exports.default = e.exports, a(t, l)
      }
      e.exports = a, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    7671: function(e, t, a) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        state: {
          sourcePage: "",
          lastType: "",
          userLog: [],
          systemInfo: {}
        },
        getters: {
          sourcePage: function(e) {
            return e.sourcePage
          },
          userLog: function(e) {
            return e.userLog
          },
          systemInfo: function(e) {
            return e.systemInfo
          },
          lastType: function(e) {
            return e.lastType
          }
        },
        mutations: {
          SET_SOURCE_PAGE: function(e, t) {
            e.sourcePage = t
          },
          SET_USERLOG: function(e, t) {
            e.userLog = t
          },
          SET_SYSTEM: function(e, t) {
            e.systemInfo = t
          },
          SET_LASTTYPE: function(e, t) {
            e.lastType = t
          }
        },
        actions: {}
      }
    },
    "786e": function(e, t, a) {
      (function(e, l) {
        var n = a("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = t.Painter = void 0;
        var r = n(a("3b2d")),
          i = function() {
            return (i = Object.assign || function(e) {
              for (var t, a = 1, l = arguments.length; a < l; a++)
                for (var n in t = arguments[a]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return e
            }).apply(this, arguments)
          };

        function o(e, t, a, l) {
          return new(a || (a = Promise))((function(n, r) {
            function i(e) {
              try {
                u(l.next(e))
              } catch (e) {
                r(e)
              }
            }

            function o(e) {
              try {
                u(l.throw(e))
              } catch (e) {
                r(e)
              }
            }

            function u(e) {
              var t;
              e.done ? n(e.value) : (t = e.value, t instanceof a ? t : new a((function(e) {
                e(t)
              }))).then(i, o)
            }
            u((l = l.apply(e, t || [])).next())
          }))
        }

        function u(e, t) {
          var a, l, n, r, i = {
            label: 0,
            sent: function() {
              if (1 & n[0]) throw n[1];
              return n[1]
            },
            trys: [],
            ops: []
          };
          return r = {
            next: o(0),
            throw: o(1),
            return: o(2)
          }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
            return this
          }), r;

          function o(r) {
            return function(o) {
              return function(r) {
                if (a) throw new TypeError("Generator is already executing.");
                for (; i;) try {
                  if (a = 1, l && (n = 2 & r[0] ? l.return : r[0] ? l.throw || ((n = l.return) && n.call(l), 0) : l.next) && !(n = n.call(l, r[1])).done) return n;
                  switch (l = 0, n && (r = [2 & r[0], n.value]), r[0]) {
                    case 0:
                    case 1:
                      n = r;
                      break;
                    case 4:
                      return i.label++, {
                        value: r[1],
                        done: !1
                      };
                    case 5:
                      i.label++, l = r[1], r = [0];
                      continue;
                    case 7:
                      r = i.ops.pop(), i.trys.pop();
                      continue;
                    default:
                      if (!((n = (n = i.trys).length > 0 && n[n.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                        i = 0;
                        continue
                      }
                      if (3 === r[0] && (!n || r[1] > n[0] && r[1] < n[3])) {
                        i.label = r[1];
                        break
                      }
                      if (6 === r[0] && i.label < n[1]) {
                        i.label = n[1], n = r;
                        break
                      }
                      if (n && i.label < n[2]) {
                        i.label = n[2], i.ops.push(r);
                        break
                      }
                      n[2] && i.ops.pop(), i.trys.pop();
                      continue
                  }
                  r = t.call(e, i)
                } catch (e) {
                  r = [6, e], l = 0
                } finally {
                  a = n = 0
                }
                if (5 & r[0]) throw r[1];
                return {
                  value: r[0] ? r[1] : void 0,
                  done: !0
                }
              }([r, o])
            }
          }
        }
        var s, c, f = {
            MP_WEIXIN: "mp-weixin",
            MP_QQ: "mp-qq",
            MP_ALIPAY: "mp-alipay",
            MP_BAIDU: "mp-baidu",
            MP_TOUTIAO: "mp-toutiao",
            H5: "h5",
            WEB: "web",
            PLUS: "plus"
          },
          v = "view",
          h = "text",
          d = "image",
          b = "qrcode",
          p = "block",
          g = {
            ABSOLUTE: "absolute",
            FIXED: "fixed",
            RELATIVE: "relative"
          },
          y = {
            display: p,
            color: "#000000",
            lineHeight: "1.4em",
            fontSize: 14,
            fontWeight: 400,
            fontFamily: "sans-serif",
            lineCap: "butt",
            textAlign: "left",
            position: "static",
            transformOrigin: "center center"
          },
          S = {
            upx2px: function(e) {
              return window.innerWidth / 750 * e
            },
            getSystemInfoSync: function() {
              return {
                screenWidth: window.innerWidth
              }
            },
            getImageInfo: function(e) {
              var t = e.src,
                a = e.success,
                l = e.fail,
                n = new Image;
              n.onload = function() {
                a({
                  width: this.naturalWidth,
                  height: this.naturalHeight,
                  path: this.src,
                  src: t
                })
              }, n.onerror = l, n.src = t
            }
          },
          m = "object" == ("undefined" == typeof swan ? "undefined" : (0, r.default)(swan)) ? f.MP_ALIPAY : "object" == ("undefined" == typeof tt ? "undefined" : (0, r.default)(tt)) ? f.MP_TOUTIAO : "object" == ("undefined" == typeof plus ? "undefined" : (0, r.default)(plus)) ? f.PLUS : "object" == ("undefined" == typeof window ? "undefined" : (0, r.default)(window)) ? void 0 === e || void 0 !== e && !e.addInterceptor ? f.WEB : f.H5 : f.MP_WEIXIN,
          Y = m == f.MP_WEIXIN ? l : m == f.MP_TOUTIAO ? tt : void 0 !== e ? e.getImageInfo ? {
            upx2px: function(t) {
              return e.upx2px(t)
            },
            getSystemInfoSync: function() {
              return e.getSystemInfoSync()
            },
            getImageInfo: function(t) {
              return e.getImageInfo(t)
            },
            downloadFile: function(t) {
              return e.downloadFile(t)
            }
          } : Object.assign(e, S) : "undefined" != typeof window ? S : e;
        if (!Y.upx2px) {
          var Z = (null !== (c = Y.getSystemInfoSync && (null === (s = e.getSystemInfoSync()) || void 0 === s ? void 0 : s.screenWidth)) && void 0 !== c ? c : 375) / 750;
          Y.upx2px = function(e) {
            return Z * e
          }
        }

        function L(e) {
          return /^-?\d+(\.\d+)?$/.test(e)
        }

        function C(e, t, a) {
          if ("number" == typeof e) return e;
          if (L(e)) return 1 * e;
          if ("string" == typeof e) {
            var l = /^-?([0-9]+)?([.]{1}[0-9]+){0,1}(em|rpx|px|%)$/g.exec(e);
            if (!e || !l) return 0;
            var n = l[3];
            e = parseFloat(e);
            var r = 0;
            return "rpx" === n ? r = Y.upx2px(e) : "px" === n ? r = 1 * e : "%" === n && t ? r = e * C(t) / 100 : "em" === n && t && (r = e * C(t || 14)), 1 * r.toFixed(2)
          }
          return 0
        }

        function T(e) {
          return new Promise((function(t, a) {
            Y.downloadFile({
              url: e,
              success: function(e) {
                t(e.tempFilePath)
              },
              fail: a
            })
          }))
        }

        function w(e) {
          for (var t = [], a = [], l = 0, n = e.substring(0, e.length - 1).split("%,"); l < n.length; l++) {
            var r = n[l];
            t.push(r.substring(0, r.lastIndexOf(" ")).trim()), a.push(r.substring(r.lastIndexOf(" "), r.length) / 100)
          }
          return {
            colors: t,
            percents: a
          }
        }

        function _(e, t, a) {
          return t in e ? Object.defineProperty(e, t, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = a, e
        }

        function X() {
          return (X = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var l in a) Object.prototype.hasOwnProperty.call(a, l) && (e[l] = a[l])
            }
            return e
          }).apply(this, arguments)
        }
        var J = 0,
          P = {
            left: null,
            top: null,
            width: null,
            height: null
          },
          M = function() {
            function e(e, t, a, l) {
              var n = this;
              _(this, "id", J++), _(this, "style", {
                left: null,
                top: null,
                width: null,
                height: null
              }), _(this, "computedStyle", {}), _(this, "originStyle", {}), _(this, "children", {}), _(this, "layoutBox", X({}, P)), _(this, "contentSize", X({}, P, {
                maxLineHeight: 0
              })), _(this, "clientSize", X({}, P)), _(this, "borderSize", X({}, P)), _(this, "offsetSize", X({}, P)), this.ctx = l, this.root = a, t && (this.parent = t), this.name = e.name || e.type, this.attributes = this.getAttributes(e);
              var r = this.getComputedStyle(e, null == t ? void 0 : t.computedStyle);
              this.isAbsolute = r.position == g.ABSOLUTE, this.isFixed = r.position == g.FIXED, this.originStyle = r, Object.keys(r).forEach((function(e) {
                Object.defineProperty(n.style, e, {
                  configurable: !0,
                  enumerable: !0,
                  get: function() {
                    return r[e]
                  },
                  set: function(t) {
                    r[e] = t
                  }
                })
              }));
              var i = {
                contentSize: X({}, this.contentSize),
                clientSize: X({}, this.clientSize),
                borderSize: X({}, this.borderSize),
                offsetSize: X({}, this.offsetSize)
              };
              Object.keys(i).forEach((function(e) {
                Object.keys(n[e]).forEach((function(t) {
                  Object.defineProperty(n[e], t, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                      return i[e][t]
                    },
                    set: function(a) {
                      i[e][t] = a
                    }
                  })
                }))
              })), this.computedStyle = this.style
            }
            var t = e.prototype;
            return t.add = function(e) {
              e.parent = this, this.children[e.id] = e
            }, t.getChildren = function() {
              var e = this;
              return Object.keys(this.children).map((function(t) {
                return e.children[t]
              }))
            }, t.getComputedStyle = function(e, t) {
              var a = ["color", "fontSize", "lineHeight", "verticalAlign", "fontWeight", "textAlign"],
                l = e.css,
                n = void 0 === l ? {} : l,
                i = e.type,
                o = void 0 === i ? v : i,
                u = X({}, y);
              if (["text", "image"].includes(o) && !n.display && (u.display = "inline-block"), t)
                for (var s = 0; s < a.length; s++) {
                  var c = a[s];
                  (n[c] || t[c]) && (n[c] = n[c] || t[c])
                }
              for (var f = function() {
                  var e = d[h],
                    t = n[e];
                  if (/^(box)?shadow$/i.test(e)) {
                    var a = [];
                    return t.replace(/((\d+(rpx|px)?\s+?){3})(.+)/, (function() {
                      for (var e = arguments.length, t = new Array(e), l = 0; l < e; l++) t[l] = arguments[l];
                      a = t[1].match(/\d+(rpx|px)?/g).map((function(e) {
                        return C(e)
                      })).concat(t[4])
                    })), u.boxShadow = a, "continue"
                  }
                  if (/^border/i.test(e) && !/radius$/i.test(e)) {
                    var l, i = e.match(/^border([BTRLa-z]+)?/)[0],
                      s = e.match(/[W|S|C][a-z]+/),
                      c = t.replace(/([\(,])\s+|\s+([\),])/g, "$1$2").split(" ").map((function(e) {
                        return /^\d/.test(e) ? C(e, "") : e
                      }));
                    return u[i] = ((l = {})[i + "Width"] = L(c[0]) ? c[0] : 0, l[i + "Style"] = c[1] || "solid", l[i + "Color"] = c[2] || "black", l), 1 == c.length && s && (u[i][i + s[0]] = c[0]), "continue"
                  }
                  if (/^background(color)?$/i.test(e)) return u.backgroundColor = t, "continue";
                  if (/^objectPosition$/i.test(e)) return u[e] = t.split(" "), "continue";
                  if (/padding|margin|radius/i.test(e)) {
                    var f = /radius$/i.test(e),
                      v = f ? "borderRadius" : e.match(/[a-z]+/)[0],
                      b = [0, 0, 0, 0].map((function(e, t) {
                        return f ? ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"][t] : [v + "Top", v + "Right", v + "Bottom", v + "Left"][t]
                      })),
                      p = "margin",
                      y = "auto";
                    if ("padding" === e || e === p || /^(border)?radius$/i.test(e)) {
                      var S, m = (null == t ? void 0 : t.split(" ").map((function(t) {
                          return /^\d+(rpx|px)?$/.test(t) ? C(t) : e != p && /auto/.test(t) ? 0 : t
                        }), [])) || [0],
                        Y = f ? "borderRadius" : e,
                        Z = m[0],
                        T = m[1],
                        w = m[2],
                        _ = m[3];
                      u[Y] = ((S = {})[b[0]] = Z == y ? 0 : Z, S[b[1]] = L(T) ? T : Z, S[b[2]] = (L(w) ? w : Z) == y ? 0 : L(w) ? w : Z, S[b[3]] = L(_) ? _ : T || Z, S)
                    } else {
                      var X;
                      "object" == (0, r.default)(u[v]) || (u[v] = ((X = {})[b[0]] = u[v] || 0, X[b[1]] = u[v] || 0, X[b[2]] = u[v] || 0, X[b[3]] = u[v] || 0, X)), u[v][e] = v == p && t == y || /%$/.test(t) ? t : C(t)
                    }
                    return "continue"
                  }
                  if (/^transform$/i.test(e)) return u[e] = {}, t.replace(/([a-zA-Z]+)\(([0-9,-\.%rpxdeg\s]+)\)/g, (function(t, a, l) {
                    var r = l.split(",").map((function(e) {
                        return e.replace(/(^\s*)|(\s*$)/g, "")
                      })),
                      i = function(e, t) {
                        return e.includes("deg") ? 1 * e : t && !/%$/.test(t) ? C(e, t) : e
                      };
                    a.includes("matrix") ? u[e][a] = r.map((function(e) {
                      return 1 * e
                    })) : a.includes("rotate") ? u[e][a] = 1 * l.match(/^-?\d+(\.\d+)?/)[0] : /[X, Y]/.test(a) ? u[e][a] = /[X]/.test(a) ? i(r[0], n.width) : i(r[0], n.height) : (u[e][a + "X"] = i(r[0], n.width), u[e][a + "Y"] = i(r[1] || r[0], n.height))
                  })), "continue";
                  /^font$/i.test(e) && console.error("font 不支持简写"), /^left|top$/i.test(e) && ![g.ABSOLUTE, g.FIXED].includes(n.position) ? u[e] = 0 : u[e] = /^[\d\.]+(px|rpx)?$/.test(t) ? C(t) : /em$/.test(t) && "text" == o ? C(t, n.fontSize) : t
                }, h = 0, d = Object.keys(n); h < d.length; h++) f();
              return u
            }, t.setPosition = function(e, t) {
              var a = {
                left: "width",
                top: "height",
                right: "width",
                bottom: "height"
              };
              Object.keys(a).forEach((function(l) {
                var n = "right" == l ? "left" : "top";
                ["right", "bottom"].includes(l) && void 0 !== e.style[l] && "number" != typeof e.originStyle[n] ? e.style[n] = t[a[l]] - e.offsetSize[a[l]] - C(e.style[l], t[a[l]]) : e.style[l] = C(e.style[l], t[a[l]])
              }))
            }, t.getAttributes = function(e) {
              var t = e.attributes || {};
              return (e.url || e.src) && (t.src = t.src || e.url || e.src), e.replace && (t.replace = e.replace), e.text && (t.text = e.text), t
            }, t.getOffsetSize = function(e, t, a) {
              void 0 === a && (a = "offsetSize");
              var l = t || {},
                n = l.margin,
                r = (n = void 0 === n ? {} : n).marginLeft,
                i = void 0 === r ? 0 : r,
                o = n.marginTop,
                u = void 0 === o ? 0 : o,
                s = n.marginRight,
                c = void 0 === s ? 0 : s,
                f = n.marginBottom,
                v = void 0 === f ? 0 : f,
                h = l.padding,
                d = (h = void 0 === h ? {} : h).paddingLeft,
                b = void 0 === d ? 0 : d,
                p = h.paddingTop,
                g = void 0 === p ? 0 : p,
                y = h.paddingRight,
                S = void 0 === y ? 0 : y,
                m = h.paddingBottom,
                Y = void 0 === m ? 0 : m,
                Z = l.border,
                L = (Z = void 0 === Z ? {} : Z).borderWidth,
                C = void 0 === L ? 0 : L,
                T = l.borderTop,
                w = (T = void 0 === T ? {} : T).borderTopWidth,
                _ = void 0 === w ? C : w,
                X = l.borderBottom,
                J = (X = void 0 === X ? {} : X).borderBottomWidth,
                P = void 0 === J ? C : J,
                M = l.borderRight,
                D = (M = void 0 === M ? {} : M).borderRightWidth,
                x = void 0 === D ? C : D,
                B = l.borderLeft,
                H = (B = void 0 === B ? {} : B).borderLeftWidth,
                Q = void 0 === H ? C : H,
                A = i < 0 && c < 0 ? Math.abs(i + c) : 0,
                F = u < 0 && v < 0 ? Math.abs(u + v) : 0,
                N = i >= 0 && c < 0,
                E = u >= 0 && v < 0;
              return "contentSize" == a && (this[a].left = e.left + i + b + Q + (N ? 2 * -c : 0), this[a].top = e.top + u + g + _ + (E ? 2 * -v : 0), this[a].width = e.width + (this[a].widthAdd ? 0 : A), this[a].height = e.height + (this[a].heightAdd ? 0 : F), this[a].widthAdd = A, this[a].heightAdd = F), "clientSize" == a && (this[a].left = e.left + i + Q + (N < 0 ? -c : 0), this[a].top = e.top + u + _ + (E ? -v : 0), this[a].width = e.width + b + S, this[a].height = e.height + g + Y), "borderSize" == a && (this[a].left = e.left + i + Q / 2 + (N < 0 ? -c : 0), this[a].top = e.top + u + _ / 2 + (E ? -v : 0), this[a].width = e.width + b + S + Q / 2 + x / 2, this[a].height = e.height + g + Y + P / 2 + _ / 2), "offsetSize" == a && (this[a].left = e.left + (N < 0 ? -c : 0), this[a].top = e.top + (E ? -v : 0), this[a].width = e.width + b + S + Q + x + i + c, this[a].height = e.height + g + Y + P + _ + v + u), this[a]
            }, t.layoutBoxUpdate = function(e, t, a, l) {
              if (void 0 === a && (a = -1), "border-box" == t.boxSizing) {
                var n = t || {},
                  r = n.border,
                  i = (r = void 0 === r ? {} : r).borderWidth,
                  o = void 0 === i ? 0 : i,
                  u = n.borderTop,
                  s = (u = void 0 === u ? {} : u).borderTopWidth,
                  c = void 0 === s ? o : s,
                  f = n.borderBottom,
                  v = (f = void 0 === f ? {} : f).borderBottomWidth,
                  h = void 0 === v ? o : v,
                  d = n.borderRight,
                  b = (d = void 0 === d ? {} : d).borderRightWidth,
                  p = void 0 === b ? o : b,
                  g = n.borderLeft,
                  y = (g = void 0 === g ? {} : g).borderLeftWidth,
                  S = void 0 === y ? o : y,
                  m = n.padding,
                  Y = (m = void 0 === m ? {} : m).paddingTop,
                  Z = void 0 === Y ? 0 : Y,
                  L = m.paddingRight,
                  C = void 0 === L ? 0 : L,
                  T = m.paddingBottom,
                  w = void 0 === T ? 0 : T,
                  _ = m.paddingLeft,
                  X = void 0 === _ ? 0 : _;
                a || (e.width -= X + C + p + S), 1 !== a || l || (e.height -= Z + w + c + h)
              }
              this.layoutBox && (this.layoutBox.contentSize = this.getOffsetSize(e, t, "contentSize"), this.layoutBox.clientSize = this.getOffsetSize(e, t, "clientSize"), this.layoutBox.borderSize = this.getOffsetSize(e, t, "borderSize"), this.layoutBox.offsetSize = this.getOffsetSize(e, t, "offsetSize"), this.layoutBox = Object.assign({}, this.layoutBox, this.layoutBox.borderSize))
            }, t.getBoxPosition = function(e) {
              var t = this.computedStyle,
                a = this.getChildren(),
                l = t.verticalAlign,
                n = t.left,
                r = void 0 === n ? 0 : n,
                i = t.top,
                o = void 0 === i ? 0 : i,
                u = t.textAlign,
                s = X({}, this.contentSize, {
                  left: r,
                  top: o
                }),
                c = this.contentSize.top - this.offsetSize.top,
                f = this.contentSize.left - this.offsetSize.left,
                v = 0;
              if ("bottom" == l && this.contentSize.maxLineHeight ? v = this.contentSize.maxLineHeight - this.contentSize.height : "middle" == l && this.contentSize.maxLineHeight && (v = (this.contentSize.maxLineHeight - this.contentSize.height) / 2), s.top += v, a.length) {
                r += f, o += c;
                for (var h = null, d = null, b = !1, p = 0, g = 0; g < a.length; g++) {
                  var y = a[g];
                  if (y.isAbsolute || y.isFixed) p++, y.isAbsolute ? (y.setPosition(y, s), y.style.left += r, y.style.top += o, y.getBoxPosition()) : (y.setPosition(y, this.root), y.getBoxPosition());
                  else {
                    var S = g - p,
                      m = 0;
                    if (u && this.isInline(y)) {
                      var Y = this.contentSize.width - y.contentSize.maxLineWidth || 0;
                      "center" == u && Y > 1 && (m = Y / 2), "right" == u && Y > 1 && (m = Y)
                    }
                    if (0 == S) y.style.left += r + m, y.style.top += o, y.getBoxPosition(), h = y, d = y;
                    else {
                      var Z, L, C, T;
                      (null == (Z = d) ? void 0 : Z.offsetSize.height) < (null == (L = h) ? void 0 : L.offsetSize.height) && (d = h);
                      var w, _, J, P, M, D, x, B, H, Q = (null == (C = h) ? void 0 : C.offsetSize.left) + (null == (T = h) ? void 0 : T.offsetSize.width) + y.offsetSize.width > s.left + s.width + f;
                      this.getBoxState(h, y) || Q ? (y.style.left += r + m, (null == (w = h) ? void 0 : w.offsetSize.height) >= (null == (_ = d) ? void 0 : _.offsetSize.height) ? y.style.top += (null == (J = h) ? void 0 : J.offsetSize.top) + (null == (P = h) ? void 0 : P.offsetSize.height) || 0 : y.style.top += (null == (M = d) ? void 0 : M.offsetSize.top) + (null == (D = d) ? void 0 : D.offsetSize.height) || 0, y.getBoxPosition(), h = y, d = y, b = !0) : (y.style.left += (null == (x = h) ? void 0 : x.offsetSize.left) + (null == (B = h) ? void 0 : B.offsetSize.width) || 0, y.style.top += b ? null == (H = h) ? void 0 : H.offsetSize.top : o, y.getBoxPosition(), h = y)
                    }
                  }
                }
                this.layoutBoxUpdate(s, t)
              } else this.layoutBoxUpdate(s, t);
              return this.layoutBox
            }, t.setMaxLineHeight = function(e, t, a) {
              for (var l = e; l >= 0 && !t[l].contentSize.maxLineHeight;) t[l].contentSize.maxLineHeight = a, l--
            }, t.setMaxLineWidth = function(e, t, a) {
              for (var l = e; l >= 0 && (null == (n = t[l]) || null == (r = n.contentSize) || !r.maxLineWidth);) {
                var n, r;
                t[l].contentSize.maxLineWidth = a, l--
              }
            }, t.getBoxState = function(e, t) {
              return this.isBlock(e) || this.isBlock(t)
            }, t.isBlock = function(e) {
              return e && e.style.display == p
            }, t.isInline = function(e) {
              return !this.isBlock(e)
            }, t.getBoxHieght = function() {
              var e, t = this,
                a = this.name,
                l = this.computedStyle,
                n = this.attributes,
                r = this.parent,
                i = this.getChildren(),
                o = l.top,
                u = l.bottom,
                s = l.height,
                c = void 0 === s ? 0 : s,
                f = l.fontSize,
                v = l.position,
                b = l.lineHeight,
                p = l.minHeight,
                g = l.maxHeight,
                y = X({}, this.contentSize);
              if (/%$/.test(p) && r.contentSize.height && (p = C(p, r.contentSize.height)), /%$/.test(g) && r.contentSize.height && (g = C(g, r.contentSize.height)), a == d && null == c) {
                var S = n.width,
                  m = n.height;
                n.mode, y.height = this.contrastSize(Math.round(y.width * m / S) || 0, p, g), this.layoutBoxUpdate(y, l, 1)
              } else if (c)
                if (i.length) {
                  y.height = this.contrastSize(y.height, p, g), this.layoutBoxUpdate(y, l);
                  var Y = null,
                    Z = 0,
                    L = 0;
                  i.forEach((function(e, a) {
                    var l = a == i.length - 1;
                    if (e.getBoxHieght(), e.isAbsolute || e.isFixed);
                    else {
                      var n = Z + e.offsetSize.width > y.left + y.width,
                        r = t.getBoxState(Y, e);
                      if (n || r) {
                        if (n) {
                          for (var o = a - 1; o >= 0 && !i[o].contentSize.maxLineHeight;) L < i[o].contentSize.height && (L = i[o].contentSize.height), o--;
                          t.setMaxLineHeight(a - 1, i, L), t.setMaxLineWidth(a - 1, i, Z), L = 0, Z = e.offsetSize.width
                        }
                        l && t.setMaxLineWidth(a, i, e.offsetSize.width)
                      } else {
                        if (Z += e.offsetSize.width, l) {
                          for (var u = a; u >= 0 && !i[u].contentSize.maxLineHeight;) L < i[u].contentSize.height && (L = i[u].contentSize.height), u--;
                          t.setMaxLineHeight(a, i, L), t.setMaxLineWidth(a, i, Z), L = 0, Z = e.offsetSize.width
                        }
                        Y = e
                      }
                    }
                  }))
                } else y.height = this.contrastSize(y.height, p, g), this.layoutBoxUpdate(y, l, 1);
              else {
                var T = 0;
                if (null != o ? o : this.isAbsolute || this.isFixed && r.contentSize.height) {
                  var w = "absolute" == v ? r.contentSize.height : this.root.height;
                  T = w - (/%$/.test(o) ? C(o, w) : o) - (/%$/.test(u) ? C(u, w) : u)
                }
                if (a == h) b = C(b, f), y.height = T || this.contrastSize(this.attributes.lines * b, p, g), this.layoutBoxUpdate(y, l, 1, !0);
                else if (i.length) {
                  var _ = 0,
                    J = null,
                    P = 0;
                  y.height = i.reduce((function(e, a, l) {
                    var n = l == i.length - 1;
                    if (a.isAbsolute || a.isFixed) return a.getBoxHieght(), n ? e + _ : e;
                    a.getBoxHieght();
                    var r = t.getBoxState(J, a),
                      o = P + a.offsetSize.width > y.width;
                    if (o || r) {
                      var u = 0;
                      return o || J && t.isInline(J) ? (t.setMaxLineHeight(l - 1, i, _), t.setMaxLineWidth(l - 1, i, P), n && (t.setMaxLineHeight(l, i, _), t.setMaxLineWidth(l, i, a.offsetSize.width), _ += a.offsetSize.height), u = e + _, _ = a.offsetSize.height, P = a.offsetSize.width, J = a, u) : (P = 0, _ = 0, e + a.offsetSize.height)
                    }
                    return P += a.offsetSize.width, _ = Math.max(_, a.offsetSize.height) || 0, n ? (t.setMaxLineHeight(l, i, _), t.setMaxLineWidth(l, i, P), e + _) : (J = a, e)
                  }), 0), T && (y.height = T), this.layoutBoxUpdate(y, l)
                } else T && (y.height = T), this.layoutBoxUpdate(y, l, 1)
              }
              if (l.borderRadius && null != (e = this.borderSize) && e.width)
                for (var M in l.borderRadius) Object.hasOwnProperty.call(l.borderRadius, M) && (l.borderRadius[M] = C(l.borderRadius[M], this.borderSize.width));
              return this.layoutBox
            }, t.contrastSize = function(e, t, a) {
              var l = e;
              return a && (l = Math.min(l, a)), t && (l = Math.max(l, t)), l
            }, t.measureText = function(e, t) {
              var a = this.ctx.measureText(e);
              return {
                width: a.width,
                fontHeight: (a.actualBoundingBoxAscent || .7 * t) + 1
              }
            }, t.getBoxWidth = function() {
              var e, t = this,
                a = this.name,
                l = this.computedStyle,
                n = this.attributes,
                r = this.parent,
                i = void 0 === r ? {} : r,
                o = this.ctx,
                u = this.getChildren(),
                s = l.left,
                c = void 0 === s ? 0 : s,
                f = l.top,
                b = void 0 === f ? 0 : f,
                g = l.right,
                y = l.width,
                S = void 0 === y ? 0 : y,
                m = l.minWidth,
                Y = l.maxWidth,
                Z = l.height,
                L = void 0 === Z ? 0 : Z,
                T = l.fontSize,
                w = void 0 === T ? 14 : T,
                _ = l.fontWeight,
                X = l.fontFamily,
                J = l.fontStyle,
                P = l.position,
                M = l.display,
                D = l.lineClamp,
                x = l.padding,
                B = void 0 === x ? {} : x,
                H = l.margin,
                Q = void 0 === H ? {} : H,
                A = l.border,
                F = (A = void 0 === A ? {} : A).borderWidth,
                N = void 0 === F ? 0 : F,
                E = l.borderRight,
                O = (E = void 0 === E ? {} : E).borderRightWidth,
                W = void 0 === O ? N : O,
                k = l.borderLeft,
                G = (k = void 0 === k ? {} : k).borderLeftWidth,
                R = void 0 === G ? N : G;
              if (/%$/.test(S) && i.contentSize.width && (S = C(S, i.contentSize.width)), /%$/.test(L) && i.contentSize.height && (L = C(L, i.contentSize.height)), /%$/.test(m) && i.contentSize.width && (m = C(m, i.contentSize.width)), /%$/.test(Y) && i.contentSize.width && (Y = C(Y, i.contentSize.width)), l.padding && null != (e = i.contentSize) && e.width)
                for (var K in l.padding) Object.hasOwnProperty.call(l.padding, K) && (l.padding[K] = C(l.padding[K], i.contentSize.width));
              var I = B.paddingRight,
                $ = void 0 === I ? 0 : I,
                j = B.paddingLeft,
                z = void 0 === j ? 0 : j;
              if (l.margin && [l.margin.marginLeft, l.margin.marginRight].includes("auto"))
                if (S) {
                  var U = i.contentSize.width - S - $ - z - R - W || 0;
                  l.margin.marginLeft == l.margin.marginRight ? l.margin.marginLeft = l.margin.marginRight = U / 2 : "auto" == l.margin.marginLeft ? l.margin.marginLeft = U : l.margin.marginRight = U
                } else l.margin.marginLeft = l.margin.marginRight = 0;
              var q = Q.marginRight,
                V = void 0 === q ? 0 : q,
                ee = Q.marginLeft,
                te = {
                  width: S,
                  height: L,
                  left: 0,
                  top: 0
                },
                ae = z + $ + R + W + (void 0 === ee ? 0 : ee) + V;
              if (a == h && !this.attributes.widths) {
                var le = n.text || "";
                o.save(), o.setFonts({
                  fontFamily: X,
                  fontSize: w,
                  fontWeight: _,
                  fontStyle: J
                });
                var ne = new Map;
                le.split("\n").map((function(e) {
                  var a = e.split("").map((function(e) {
                    var a = ne.get(e);
                    if (a) return a;
                    var l = t.measureText(e, w).width;
                    return ne.set(e, l), l
                  }));
                  t.attributes.fontHeight = t.measureText(e, w).fontHeight, t.attributes.widths || (t.attributes.widths = []), t.attributes.widths.push({
                    widths: a,
                    total: a.reduce((function(e, t) {
                      return e + t
                    }), 0)
                  })
                })), o.restore()
              }
              if (a == d && null == S) {
                var re = n.width,
                  ie = n.height;
                te.width = this.contrastSize(Math.round(re * L / ie) || 0, m, Y), this.layoutBoxUpdate(te, l, 0)
              } else if (S) u.length ? (te.width = this.contrastSize(te.width, m, Y), this.layoutBoxUpdate(te, l, 0), u.forEach((function(e) {
                e.getBoxWidth()
              }))) : (te.width = this.contrastSize(te.width, m, Y), this.layoutBoxUpdate(te, l, 0));
              else {
                var oe = 0;
                if ((this.isAbsolute || this.isFixed) && i.contentSize.width && a != h) {
                  var ue = "absolute" == P ? i.contentSize.width : this.root.width;
                  oe = ue - (/%$/.test(c) ? C(c, ue) : c) - (/%$/.test(g) ? C(g, ue) : g)
                }
                if (a == h) {
                  var se = this.attributes.widths,
                    ce = Math.max.apply(Math, se.map((function(e) {
                      return e.total
                    })));
                  i && i.contentSize.width > 0 && (ce > i.contentSize.width || M == p) && !this.isAbsolute && !this.isFixed && (ce = i.contentSize.width - ae), te.width = oe || this.contrastSize(ce, m, Y), this.layoutBoxUpdate(te, l, 0)
                } else if (a != v || !i || "inline-block" === M || this.isAbsolute || this.isFixed)
                  if (u.length) {
                    for (var fe = 0, ve = null, he = 0; u.length > he;) {
                      var de = u[he],
                        be = he == u.length - 1,
                        pe = this.getBoxState(ve, de);
                      if (de.isFixed || de.isAbsolute) de.getBoxWidth();
                      else if (!ve || pe) {
                        var ge = de.getBoxWidth();
                        fe = Math.max(fe, ge.width) || 0, ve = de
                      } else if (ve.offsetSize.left + ve.offsetSize.width + de.offsetSize.width < i.contentSize.width && he !== u.length - 1) fe += de.getBoxWidth().width, ve = de;
                      else {
                        var ye = de.getBoxWidth();
                        be ? fe += ye.width : fe = i.contentSize.width, ve = null
                      }
                      he++
                    }
                    te.width = oe && b ? oe : this.contrastSize(Math.ceil(fe), m, Y), u.forEach((function(e) {
                      e.style.display != p || e.name != h || e.isFixed || e.isAbsolute || e.style.width || (e.style.width = te.width, e.getBoxWidth())
                    })), this.layoutBoxUpdate(te, l, 0)
                  } else te.width = oe, this.layoutBoxUpdate(te, l, 0);
                else te.width = this.contrastSize(i.contentSize.width - ae, m, Y), this.layoutBoxUpdate(te, l), u.length && u.forEach((function(e) {
                  e.getBoxWidth()
                }))
              }
              if (a == h && !this.attributes.lines) {
                var Se = this.attributes.widths.length;
                this.attributes.widths.forEach((function(e) {
                  return e.widths.reduce((function(e, t, a) {
                    return e + t > te.width ? (Se++, t) : e + t
                  }), 0)
                })), Se = D && Se > D ? D : Se, this.attributes.lines = Se
              }
              return this.layoutBox
            }, t.layout = function() {
              return this.getBoxWidth(), this.getBoxHieght(), this.getBoxPosition(), this.offsetSize
            }, e
          }(),
          D = function() {
            var e, t, a, l, n, r, i = [0, 11, 15, 19, 23, 27, 31, 16, 18, 20, 22, 24, 26, 28, 20, 22, 24, 24, 26, 28, 28, 22, 24, 24, 26, 26, 28, 28, 24, 24, 26, 26, 26, 28, 28, 24, 26, 26, 26, 28, 28],
              o = [3220, 1468, 2713, 1235, 3062, 1890, 2119, 1549, 2344, 2936, 1117, 2583, 1330, 2470, 1667, 2249, 2028, 3780, 481, 4011, 142, 3098, 831, 3445, 592, 2517, 1776, 2234, 1951, 2827, 1070, 2660, 1345, 3177],
              u = [30660, 29427, 32170, 30877, 26159, 25368, 27713, 26998, 21522, 20773, 24188, 23371, 17913, 16590, 20375, 19104, 13663, 12392, 16177, 14854, 9396, 8579, 11994, 11245, 5769, 5054, 7399, 6608, 1890, 597, 3340, 2107],
              s = [1, 0, 19, 7, 1, 0, 16, 10, 1, 0, 13, 13, 1, 0, 9, 17, 1, 0, 34, 10, 1, 0, 28, 16, 1, 0, 22, 22, 1, 0, 16, 28, 1, 0, 55, 15, 1, 0, 44, 26, 2, 0, 17, 18, 2, 0, 13, 22, 1, 0, 80, 20, 2, 0, 32, 18, 2, 0, 24, 26, 4, 0, 9, 16, 1, 0, 108, 26, 2, 0, 43, 24, 2, 2, 15, 18, 2, 2, 11, 22, 2, 0, 68, 18, 4, 0, 27, 16, 4, 0, 19, 24, 4, 0, 15, 28, 2, 0, 78, 20, 4, 0, 31, 18, 2, 4, 14, 18, 4, 1, 13, 26, 2, 0, 97, 24, 2, 2, 38, 22, 4, 2, 18, 22, 4, 2, 14, 26, 2, 0, 116, 30, 3, 2, 36, 22, 4, 4, 16, 20, 4, 4, 12, 24, 2, 2, 68, 18, 4, 1, 43, 26, 6, 2, 19, 24, 6, 2, 15, 28, 4, 0, 81, 20, 1, 4, 50, 30, 4, 4, 22, 28, 3, 8, 12, 24, 2, 2, 92, 24, 6, 2, 36, 22, 4, 6, 20, 26, 7, 4, 14, 28, 4, 0, 107, 26, 8, 1, 37, 22, 8, 4, 20, 24, 12, 4, 11, 22, 3, 1, 115, 30, 4, 5, 40, 24, 11, 5, 16, 20, 11, 5, 12, 24, 5, 1, 87, 22, 5, 5, 41, 24, 5, 7, 24, 30, 11, 7, 12, 24, 5, 1, 98, 24, 7, 3, 45, 28, 15, 2, 19, 24, 3, 13, 15, 30, 1, 5, 107, 28, 10, 1, 46, 28, 1, 15, 22, 28, 2, 17, 14, 28, 5, 1, 120, 30, 9, 4, 43, 26, 17, 1, 22, 28, 2, 19, 14, 28, 3, 4, 113, 28, 3, 11, 44, 26, 17, 4, 21, 26, 9, 16, 13, 26, 3, 5, 107, 28, 3, 13, 41, 26, 15, 5, 24, 30, 15, 10, 15, 28, 4, 4, 116, 28, 17, 0, 42, 26, 17, 6, 22, 28, 19, 6, 16, 30, 2, 7, 111, 28, 17, 0, 46, 28, 7, 16, 24, 30, 34, 0, 13, 24, 4, 5, 121, 30, 4, 14, 47, 28, 11, 14, 24, 30, 16, 14, 15, 30, 6, 4, 117, 30, 6, 14, 45, 28, 11, 16, 24, 30, 30, 2, 16, 30, 8, 4, 106, 26, 8, 13, 47, 28, 7, 22, 24, 30, 22, 13, 15, 30, 10, 2, 114, 28, 19, 4, 46, 28, 28, 6, 22, 28, 33, 4, 16, 30, 8, 4, 122, 30, 22, 3, 45, 28, 8, 26, 23, 30, 12, 28, 15, 30, 3, 10, 117, 30, 3, 23, 45, 28, 4, 31, 24, 30, 11, 31, 15, 30, 7, 7, 116, 30, 21, 7, 45, 28, 1, 37, 23, 30, 19, 26, 15, 30, 5, 10, 115, 30, 19, 10, 47, 28, 15, 25, 24, 30, 23, 25, 15, 30, 13, 3, 115, 30, 2, 29, 46, 28, 42, 1, 24, 30, 23, 28, 15, 30, 17, 0, 115, 30, 10, 23, 46, 28, 10, 35, 24, 30, 19, 35, 15, 30, 17, 1, 115, 30, 14, 21, 46, 28, 29, 19, 24, 30, 11, 46, 15, 30, 13, 6, 115, 30, 14, 23, 46, 28, 44, 7, 24, 30, 59, 1, 16, 30, 12, 7, 121, 30, 12, 26, 47, 28, 39, 14, 24, 30, 22, 41, 15, 30, 6, 14, 121, 30, 6, 34, 47, 28, 46, 10, 24, 30, 2, 64, 15, 30, 17, 4, 122, 30, 29, 14, 46, 28, 49, 10, 24, 30, 24, 46, 15, 30, 4, 18, 122, 30, 13, 32, 46, 28, 48, 14, 24, 30, 42, 32, 15, 30, 20, 4, 117, 30, 40, 7, 47, 28, 43, 22, 24, 30, 10, 67, 15, 30, 19, 6, 118, 30, 18, 31, 47, 28, 34, 34, 24, 30, 20, 61, 15, 30],
              c = [255, 0, 1, 25, 2, 50, 26, 198, 3, 223, 51, 238, 27, 104, 199, 75, 4, 100, 224, 14, 52, 141, 239, 129, 28, 193, 105, 248, 200, 8, 76, 113, 5, 138, 101, 47, 225, 36, 15, 33, 53, 147, 142, 218, 240, 18, 130, 69, 29, 181, 194, 125, 106, 39, 249, 185, 201, 154, 9, 120, 77, 228, 114, 166, 6, 191, 139, 98, 102, 221, 48, 253, 226, 152, 37, 179, 16, 145, 34, 136, 54, 208, 148, 206, 143, 150, 219, 189, 241, 210, 19, 92, 131, 56, 70, 64, 30, 66, 182, 163, 195, 72, 126, 110, 107, 58, 40, 84, 250, 133, 186, 61, 202, 94, 155, 159, 10, 21, 121, 43, 78, 212, 229, 172, 115, 243, 167, 87, 7, 112, 192, 247, 140, 128, 99, 13, 103, 74, 222, 237, 49, 197, 254, 24, 227, 165, 153, 119, 38, 184, 180, 124, 17, 68, 146, 217, 35, 32, 137, 46, 55, 63, 209, 91, 149, 188, 207, 205, 144, 135, 151, 178, 220, 252, 190, 97, 242, 86, 211, 171, 20, 42, 93, 158, 132, 60, 57, 83, 71, 109, 65, 162, 31, 45, 67, 216, 183, 123, 164, 118, 196, 23, 73, 236, 127, 12, 111, 246, 108, 161, 59, 82, 41, 157, 85, 170, 251, 96, 134, 177, 187, 204, 62, 90, 203, 89, 95, 176, 156, 169, 160, 81, 11, 245, 22, 235, 122, 117, 44, 215, 79, 174, 213, 233, 230, 231, 173, 232, 116, 214, 244, 234, 168, 80, 88, 175],
              f = [1, 2, 4, 8, 16, 32, 64, 128, 29, 58, 116, 232, 205, 135, 19, 38, 76, 152, 45, 90, 180, 117, 234, 201, 143, 3, 6, 12, 24, 48, 96, 192, 157, 39, 78, 156, 37, 74, 148, 53, 106, 212, 181, 119, 238, 193, 159, 35, 70, 140, 5, 10, 20, 40, 80, 160, 93, 186, 105, 210, 185, 111, 222, 161, 95, 190, 97, 194, 153, 47, 94, 188, 101, 202, 137, 15, 30, 60, 120, 240, 253, 231, 211, 187, 107, 214, 177, 127, 254, 225, 223, 163, 91, 182, 113, 226, 217, 175, 67, 134, 17, 34, 68, 136, 13, 26, 52, 104, 208, 189, 103, 206, 129, 31, 62, 124, 248, 237, 199, 147, 59, 118, 236, 197, 151, 51, 102, 204, 133, 23, 46, 92, 184, 109, 218, 169, 79, 158, 33, 66, 132, 21, 42, 84, 168, 77, 154, 41, 82, 164, 85, 170, 73, 146, 57, 114, 228, 213, 183, 115, 230, 209, 191, 99, 198, 145, 63, 126, 252, 229, 215, 179, 123, 246, 241, 255, 227, 219, 171, 75, 150, 49, 98, 196, 149, 55, 110, 220, 165, 87, 174, 65, 130, 25, 50, 100, 200, 141, 7, 14, 28, 56, 112, 224, 221, 167, 83, 166, 81, 162, 89, 178, 121, 242, 249, 239, 195, 155, 43, 86, 172, 69, 138, 9, 18, 36, 72, 144, 61, 122, 244, 245, 247, 243, 251, 235, 203, 139, 11, 22, 44, 88, 176, 125, 250, 233, 207, 131, 27, 54, 108, 216, 173, 71, 142, 0],
              v = [],
              h = [],
              d = [],
              b = [],
              p = [],
              g = 2;

            function y(e, t) {
              var a;
              e > t && (a = e, e = t, t = a), a = t, a *= t, a += t, a >>= 1, b[a += e] = 1
            }

            function S(e, a) {
              var l;
              for (d[e + t * a] = 1, l = -2; l < 2; l++) d[e + l + t * (a - 2)] = 1, d[e - 2 + t * (a + l + 1)] = 1, d[e + 2 + t * (a + l)] = 1, d[e + l + 1 + t * (a + 2)] = 1;
              for (l = 0; l < 2; l++) y(e - 1, a + l), y(e + 1, a - l), y(e - l, a - 1), y(e + l, a + 1)
            }

            function m(e) {
              for (; e >= 255;) e = ((e -= 255) >> 8) + (255 & e);
              return e
            }
            var Y = [];

            function Z(e, t, a, l) {
              var n, r, i;
              for (n = 0; n < l; n++) v[a + n] = 0;
              for (n = 0; n < t; n++) {
                if (255 != (i = c[v[e + n] ^ v[a]]))
                  for (r = 1; r < l; r++) v[a + r - 1] = v[a + r] ^ f[m(i + Y[l - r])];
                else
                  for (r = a; r < a + l; r++) v[r] = v[r + 1];
                v[a + l - 1] = 255 == i ? 0 : f[m(i + Y[0])]
              }
            }

            function L(e, t) {
              var a;
              return e > t && (a = e, e = t, t = a), a = t, a += t * t, a >>= 1, b[a += e]
            }

            function C(e) {
              var a, l, n, r;
              switch (e) {
                case 0:
                  for (l = 0; l < t; l++)
                    for (a = 0; a < t; a++) a + l & 1 || L(a, l) || (d[a + l * t] ^= 1);
                  break;
                case 1:
                  for (l = 0; l < t; l++)
                    for (a = 0; a < t; a++) 1 & l || L(a, l) || (d[a + l * t] ^= 1);
                  break;
                case 2:
                  for (l = 0; l < t; l++)
                    for (n = 0, a = 0; a < t; a++, n++) 3 == n && (n = 0), n || L(a, l) || (d[a + l * t] ^= 1);
                  break;
                case 3:
                  for (r = 0, l = 0; l < t; l++, r++)
                    for (3 == r && (r = 0), n = r, a = 0; a < t; a++, n++) 3 == n && (n = 0), n || L(a, l) || (d[a + l * t] ^= 1);
                  break;
                case 4:
                  for (l = 0; l < t; l++)
                    for (n = 0, r = l >> 1 & 1, a = 0; a < t; a++, n++) 3 == n && (n = 0, r = !r), r || L(a, l) || (d[a + l * t] ^= 1);
                  break;
                case 5:
                  for (r = 0, l = 0; l < t; l++, r++)
                    for (3 == r && (r = 0), n = 0, a = 0; a < t; a++, n++) 3 == n && (n = 0), (a & l & 1) + !(!n | !r) || L(a, l) || (d[a + l * t] ^= 1);
                  break;
                case 6:
                  for (r = 0, l = 0; l < t; l++, r++)
                    for (3 == r && (r = 0), n = 0, a = 0; a < t; a++, n++) 3 == n && (n = 0), (a & l & 1) + (n && n == r) & 1 || L(a, l) || (d[a + l * t] ^= 1);
                  break;
                case 7:
                  for (r = 0, l = 0; l < t; l++, r++)
                    for (3 == r && (r = 0), n = 0, a = 0; a < t; a++, n++) 3 == n && (n = 0), (n && n == r) + (a + l & 1) & 1 || L(a, l) || (d[a + l * t] ^= 1)
              }
            }

            function T(e) {
              var t, a = 0;
              for (t = 0; t <= e; t++) p[t] >= 5 && (a += 3 + p[t] - 5);
              for (t = 3; t < e - 1; t += 2) p[t - 2] == p[t + 2] && p[t + 2] == p[t - 1] && p[t - 1] == p[t + 1] && 3 * p[t - 1] == p[t] && (0 == p[t - 3] || t + 3 > e || 3 * p[t - 3] >= 4 * p[t] || 3 * p[t + 3] >= 4 * p[t]) && (a += 40);
              return a
            }

            function w() {
              var e, a, l, n, r, i = 0,
                o = 0;
              for (a = 0; a < t - 1; a++)
                for (e = 0; e < t - 1; e++)(d[e + t * a] && d[e + 1 + t * a] && d[e + t * (a + 1)] && d[e + 1 + t * (a + 1)] || !(d[e + t * a] || d[e + 1 + t * a] || d[e + t * (a + 1)] || d[e + 1 + t * (a + 1)])) && (i += 3);
              for (a = 0; a < t; a++) {
                for (p[0] = 0, l = n = e = 0; e < t; e++)(r = d[e + t * a]) == n ? p[l]++ : p[++l] = 1, o += (n = r) ? 1 : -1;
                i += T(l)
              }
              o < 0 && (o = -o);
              var u = o,
                s = 0;
              for (u += u << 2, u <<= 1; u > t * t;) u -= t * t, s++;
              for (i += 10 * s, e = 0; e < t; e++) {
                for (p[0] = 0, l = n = a = 0; a < t; a++)(r = d[e + t * a]) == n ? p[l]++ : p[++l] = 1, n = r;
                i += T(l)
              }
              return i
            }
            var _ = null;
            return {
              api: {
                get ecclevel() {
                  return g
                },
                set ecclevel(e) {
                  g = e
                },
                get size() {
                  return _size
                },
                set size(e) {
                  _size = e
                },
                get canvas() {
                  return _
                },
                set canvas(e) {
                  _ = e
                },
                getFrame: function(p) {
                  return function(p) {
                    var T, _, X, J, P, M, D, x;
                    J = p.length, e = 0;
                    do {
                      if (e++, X = 4 * (g - 1) + 16 * (e - 1), a = s[X++], l = s[X++], n = s[X++], r = s[X], J <= (X = n * (a + l) + l - 3 + (e <= 9))) break
                    } while (e < 40);
                    for (t = 17 + 4 * e, P = n + (n + r) * (a + l) + l, J = 0; J < P; J++) h[J] = 0;
                    for (v = p.slice(0), J = 0; J < t * t; J++) d[J] = 0;
                    for (J = 0; J < (t * (t + 1) + 1) / 2; J++) b[J] = 0;
                    for (J = 0; J < 3; J++) {
                      for (X = 0, _ = 0, 1 == J && (X = t - 7), 2 == J && (_ = t - 7), d[_ + 3 + t * (X + 3)] = 1, T = 0; T < 6; T++) d[_ + T + t * X] = 1, d[_ + t * (X + T + 1)] = 1, d[_ + 6 + t * (X + T)] = 1, d[_ + T + 1 + t * (X + 6)] = 1;
                      for (T = 1; T < 5; T++) y(_ + T, X + 1), y(_ + 1, X + T + 1), y(_ + 5, X + T), y(_ + T + 1, X + 5);
                      for (T = 2; T < 4; T++) d[_ + T + t * (X + 2)] = 1, d[_ + 2 + t * (X + T + 1)] = 1, d[_ + 4 + t * (X + T)] = 1, d[_ + T + 1 + t * (X + 4)] = 1
                    }
                    if (e > 1)
                      for (J = i[e], _ = t - 7;;) {
                        for (T = t - 7; T > J - 3 && (S(T, _), !(T < J));) T -= J;
                        if (_ <= J + 9) break;
                        S(6, _ -= J), S(_, 6)
                      }
                    for (d[8 + t * (t - 8)] = 1, _ = 0; _ < 7; _++) y(7, _), y(t - 8, _), y(7, _ + t - 7);
                    for (T = 0; T < 8; T++) y(T, 7), y(T + t - 8, 7), y(T, t - 8);
                    for (T = 0; T < 9; T++) y(T, 8);
                    for (T = 0; T < 8; T++) y(T + t - 8, 8), y(8, T);
                    for (_ = 0; _ < 7; _++) y(8, _ + t - 7);
                    for (T = 0; T < t - 14; T++) 1 & T ? (y(8 + T, 6), y(6, 8 + T)) : (d[8 + T + 6 * t] = 1, d[6 + t * (8 + T)] = 1);
                    if (e > 6)
                      for (J = o[e - 7], X = 17, T = 0; T < 6; T++)
                        for (_ = 0; _ < 3; _++, X--) 1 & (X > 11 ? e >> X - 12 : J >> X) ? (d[5 - T + t * (2 - _ + t - 11)] = 1, d[2 - _ + t - 11 + t * (5 - T)] = 1) : (y(5 - T, 2 - _ + t - 11), y(2 - _ + t - 11, 5 - T));
                    for (_ = 0; _ < t; _++)
                      for (T = 0; T <= _; T++) d[T + t * _] && y(T, _);
                    for (P = v.length, M = 0; M < P; M++) h[M] = v.charCodeAt(M);
                    if (v = h.slice(0), P >= (T = n * (a + l) + l) - 2 && (P = T - 2, e > 9 && P--), M = P, e > 9) {
                      for (v[M + 2] = 0, v[M + 3] = 0; M--;) J = v[M], v[M + 3] |= 255 & J << 4, v[M + 2] = J >> 4;
                      v[2] |= 255 & P << 4, v[1] = P >> 4, v[0] = 64 | P >> 12
                    } else {
                      for (v[M + 1] = 0, v[M + 2] = 0; M--;) J = v[M], v[M + 2] |= 255 & J << 4, v[M + 1] = J >> 4;
                      v[1] |= 255 & P << 4, v[0] = 64 | P >> 4
                    }
                    for (M = P + 3 - (e < 10); M < T;) v[M++] = 236, v[M++] = 17;
                    for (Y[0] = 1, M = 0; M < r; M++) {
                      for (Y[M + 1] = 1, D = M; D > 0; D--) Y[D] = Y[D] ? Y[D - 1] ^ f[m(c[Y[D]] + M)] : Y[D - 1];
                      Y[0] = f[m(c[Y[0]] + M)]
                    }
                    for (M = 0; M <= r; M++) Y[M] = c[Y[M]];
                    for (X = T, _ = 0, M = 0; M < a; M++) Z(_, n, X, r), _ += n, X += r;
                    for (M = 0; M < l; M++) Z(_, n + 1, X, r), _ += n + 1, X += r;
                    for (_ = 0, M = 0; M < n; M++) {
                      for (D = 0; D < a; D++) h[_++] = v[M + D * n];
                      for (D = 0; D < l; D++) h[_++] = v[a * n + M + D * (n + 1)]
                    }
                    for (D = 0; D < l; D++) h[_++] = v[a * n + M + D * (n + 1)];
                    for (M = 0; M < r; M++)
                      for (D = 0; D < a + l; D++) h[_++] = v[T + M + D * r];
                    for (v = h, T = _ = t - 1, X = P = 1, x = (n + r) * (a + l) + l, M = 0; M < x; M++)
                      for (J = v[M], D = 0; D < 8; D++, J <<= 1) {
                        128 & J && (d[T + t * _] = 1);
                        do {
                          P ? T-- : (T++, X ? 0 != _ ? _-- : (X = !X, 6 == (T -= 2) && (T--, _ = 9)) : _ != t - 1 ? _++ : (X = !X, 6 == (T -= 2) && (T--, _ -= 8))), P = !P
                        } while (L(T, _))
                      }
                    for (v = d.slice(0), J = 0, _ = 3e4, X = 0; X < 8 && (C(X), (T = w()) < _ && (_ = T, J = X), 7 != J); X++) d = v.slice(0);
                    for (J != X && C(J), _ = u[J + (g - 1 << 3)], X = 0; X < 8; X++, _ >>= 1) 1 & _ && (d[t - 1 - X + 8 * t] = 1, X < 6 ? d[8 + t * X] = 1 : d[8 + t * (X + 1)] = 1);
                    for (X = 0; X < 7; X++, _ >>= 1) 1 & _ && (d[8 + t * (t - 7 + X)] = 1, X ? d[6 - X + 8 * t] = 1 : d[7 + 8 * t] = 1);
                    return d
                  }(p)
                },
                utf16to8: function(e) {
                  var t, a, l, n;
                  for (t = "", l = e.length, a = 0; a < l; a++)(n = e.charCodeAt(a)) >= 1 && n <= 127 ? t += e.charAt(a) : n > 2047 ? (t += String.fromCharCode(224 | n >> 12 & 15), t += String.fromCharCode(128 | n >> 6 & 63), t += String.fromCharCode(128 | n >> 0 & 63)) : (t += String.fromCharCode(192 | n >> 6 & 31), t += String.fromCharCode(128 | n >> 0 & 63));
                  return t
                },
                draw: function(e, a, l, n, r) {
                  a.drawView(l, n);
                  var i = a.ctx,
                    o = l.contentSize,
                    u = o.width,
                    s = o.height,
                    c = o.left,
                    f = o.top;
                  n.borderRadius, n.backgroundColor;
                  var v = n.color,
                    h = void 0 === v ? "#000000" : v;
                  n.border;
                  var d = l.contentSize.left - l.borderSize.left,
                    b = l.contentSize.top - l.borderSize.top;
                  if (g = r || g, i) {
                    i.save(), a.setOpacity(n), a.setTransform(l, n), c += d, f += b;
                    var p = Math.min(u, s);
                    e = this.utf16to8(e);
                    var y = this.getFrame(e),
                      S = p / t;
                    i.setFillStyle(h);
                    for (var m = 0; m < t; m++)
                      for (var Y = 0; Y < t; Y++) y[Y * t + m] && i.fillRect(c + S * m, f + S * Y, S, S);
                    i.restore(), a.setBorder(l, n)
                  } else console.warn("No canvas provided to draw QR code in!")
                }
              }
            }
          }(),
          x = function() {
            function e(e, t) {
              var a, l = this;
              this.id = null, this.pixelRatio = 1, this.width = 0, this.height = 0, this.sleep = 1e3 / 30, this.count = 0, this.isRate = !1, this.isDraw = !0, this.isCache = !0, this.fixed = "", this.imageBus = [], this.options = e, Object.assign(this, e), this.component = t, this.ctx = ((a = e.context).setFonts = function(e) {
                var t = e.fontFamily,
                  l = void 0 === t ? "sans-serif" : t,
                  n = e.fontSize,
                  r = void 0 === n ? 14 : n,
                  i = e.fontWeight,
                  o = void 0 === i ? "normal" : i,
                  u = e.fontStyle,
                  s = void 0 === u ? "normal" : u;
                m == f.MP_TOUTIAO && (o = "bold" == o ? "bold" : "", s = "italic" == s ? "italic" : ""), a.font = s + " " + o + " " + r + "px " + l
              }, a.draw ? a : Object.assign(a, {
                setStrokeStyle: function(e) {
                  a.strokeStyle = e
                },
                setLineWidth: function(e) {
                  a.lineWidth = e
                },
                setLineCap: function(e) {
                  a.lineCap = e
                },
                setFillStyle: function(e) {
                  a.fillStyle = e
                },
                setFontSize: function(e) {
                  a.font = String(e) + "px sans-serif"
                },
                setGlobalAlpha: function(e) {
                  a.globalAlpha = e
                },
                setLineJoin: function(e) {
                  a.lineJoin = e
                },
                setTextAlign: function(e) {
                  a.textAlign = e
                },
                setMiterLimit: function(e) {
                  a.miterLimit = e
                },
                setShadow: function(e, t, l, n) {
                  a.shadowOffsetX = e, a.shadowOffsetY = t, a.shadowBlur = l, a.shadowColor = n
                },
                setTextBaseline: function(e) {
                  a.textBaseline = e
                },
                createCircularGradient: function() {},
                draw: function() {}
              })), this.progress = 0, this.root = {
                width: e.width,
                height: e.height,
                fontSizeRate: 1
              }, this.init();
              var n = i({}, this.size);
              Object.defineProperty(this, "size", {
                configurable: !0,
                set: function(e) {
                  Object.keys(e).forEach((function(t) {
                    n[t] = e[t], l.fixed.includes(t) || (l.root[t] = e[t])
                  }))
                },
                get: function() {
                  return n
                }
              });
              var r = 0;
              Object.defineProperty(this, "progress", {
                configurable: !0,
                set: function(e) {
                  r = e, l.lifecycle("onProgress", e / l.count)
                },
                get: function() {
                  return r || 0
                }
              })
            }
            return e.prototype.lifecycle = function(e, t) {
              this.options.listen && this.options.listen[e] && this.options.listen[e](t)
            }, e.prototype.init = function() {
              (this.canvas.height || f.WEB == m) && (this.canvas.height = this.root.height * this.pixelRatio, this.canvas.width = this.root.width * this.pixelRatio, this.ctx.scale(this.pixelRatio, this.pixelRatio))
            }, e.prototype.clear = function() {
              this.ctx.clearRect(0, 0, this.root.width, this.root.height)
            }, e.prototype.clipPath = function(e, t, a, l, n, r, i) {
              void 0 === r && (r = !1), void 0 === i && (i = !1);
              var o = this.ctx;
              if (/polygon/.test(n)) {
                var u = n.match(/-?\d+(rpx|px|%)?\s+-?\d+(rpx|px|%)?/g) || [];
                o.beginPath(), u.map((function(n) {
                  var r = n.split(" "),
                    i = r[0],
                    o = r[1];
                  return [C(i, a) + e, C(o, l) + t]
                })).forEach((function(e, t) {
                  0 == t ? o.moveTo(e[0], e[1]) : o.lineTo(e[0], e[1])
                })), o.closePath(), i && o.stroke(), r && o.fill()
              }
            }, e.prototype.roundRect = function(e, t, a, l, n, r, i) {
              if (void 0 === r && (r = !1), void 0 === i && (i = !1), !(n < 0)) {
                var o = this.ctx;
                if (o.beginPath(), n) {
                  var u = n || {},
                    s = u.borderTopLeftRadius,
                    c = void 0 === s ? n || 0 : s,
                    f = u.borderTopRightRadius,
                    v = void 0 === f ? n || 0 : f,
                    h = u.borderBottomRightRadius,
                    d = void 0 === h ? n || 0 : h,
                    b = u.borderBottomLeftRadius,
                    p = void 0 === b ? n || 0 : b;
                  o.arc(e + a - d, t + l - d, d, 0, .5 * Math.PI), o.lineTo(e + p, t + l), o.arc(e + p, t + l - p, p, .5 * Math.PI, Math.PI), o.lineTo(e, t + c), o.arc(e + c, t + c, c, Math.PI, 1.5 * Math.PI), o.lineTo(e + a - v, t), o.arc(e + a - v, t + v, v, 1.5 * Math.PI, 2 * Math.PI), o.lineTo(e + a, t + l - d)
                } else o.rect(e, t, a, l);
                o.closePath(), i && o.stroke(), r && o.fill()
              }
            }, e.prototype.setTransform = function(e, t) {
              var a = t.transform,
                l = t.transformOrigin,
                n = this.ctx,
                r = a || {},
                i = r.scaleX,
                o = void 0 === i ? 1 : i,
                u = r.scaleY,
                s = void 0 === u ? 1 : u,
                c = r.translateX,
                f = void 0 === c ? 0 : c,
                v = r.translateY,
                h = void 0 === v ? 0 : v,
                d = r.rotate,
                b = void 0 === d ? 0 : d,
                p = r.skewX,
                g = void 0 === p ? 0 : p,
                y = r.skewY,
                S = void 0 === y ? 0 : y,
                m = e.left,
                Y = e.top,
                Z = e.width,
                T = e.height;
              f = C(f, Z) || 0, h = C(h, T) || 0;
              var w = {
                  top: C("0%", 1),
                  center: C("50%", 1),
                  bottom: C("100%", 1)
                },
                _ = {
                  left: C("0%", 1),
                  center: C("50%", 1),
                  right: C("100%", 1)
                };
              if (l = l.split(" ").filter((function(e, t) {
                  return t < 2
                })).reduce((function(e, t) {
                  if (/\d+/.test(t)) {
                    var a = C(t, 1) / (/px|rpx$/.test(t) ? L(e.x) ? T : Z : 1);
                    return L(e.x) ? Object.assign(e, {
                      y: a
                    }) : Object.assign(e, {
                      x: a
                    })
                  }
                  return L(_[t]) && !L(e.x) ? Object.assign(e, {
                    x: _[t]
                  }) : Object.assign(e, {
                    y: w[t] || .5
                  })
                }), {}), (f || h) && n.translate(f, h), (o || s) && n.scale(o, s), b) {
                var X = m + Z * l.x,
                  J = Y + T * l.y;
                n.translate(X, J), n.rotate(b * Math.PI / 180), n.translate(-X, -J)
              }(g || S) && n.transform(1, Math.tan(S * Math.PI / 180), Math.tan(g * Math.PI / 180), 1, 0, 0)
            }, e.prototype.setBackground = function(e, t, a, l, n) {
              var r = this.ctx;
              e && "transparent" != e ? function(e) {
                return !(!e || !e.startsWith("linear") && !e.startsWith("radial"))
              }(e) ? function(e, t, a, l, n, r) {
                e.startsWith("linear") ? function(e, t, a, l, n, r) {
                  for (var i = function(e, t, a, l, n) {
                      void 0 === l && (l = 0), void 0 === n && (n = 0);
                      var r = e.match(/([-]?\d{1,3})deg/),
                        i = r && r[1] ? parseFloat(r[1]) : 0;
                      if (i >= 360 && (i -= 360), i < 0 && (i += 360), 0 === (i = Math.round(i))) return {
                        x0: Math.round(t / 2) + l,
                        y0: a + n,
                        x1: Math.round(t / 2) + l,
                        y1: n
                      };
                      if (180 === i) return {
                        x0: Math.round(t / 2) + l,
                        y0: n,
                        x1: Math.round(t / 2) + l,
                        y1: a + n
                      };
                      if (90 === i) return {
                        x0: l,
                        y0: Math.round(a / 2) + n,
                        x1: t + l,
                        y1: Math.round(a / 2) + n
                      };
                      if (270 === i) return {
                        x0: t + l,
                        y0: Math.round(a / 2) + n,
                        x1: l,
                        y1: Math.round(a / 2) + n
                      };
                      var o = Math.round(180 * Math.asin(t / Math.sqrt(Math.pow(t, 2) + Math.pow(a, 2))) / Math.PI);
                      if (i === o) return {
                        x0: l,
                        y0: a + n,
                        x1: t + l,
                        y1: n
                      };
                      if (i === 180 - o) return {
                        x0: l,
                        y0: n,
                        x1: t + l,
                        y1: a + n
                      };
                      if (i === 180 + o) return {
                        x0: t + l,
                        y0: n,
                        x1: l,
                        y1: a + n
                      };
                      if (i === 360 - o) return {
                        x0: t + l,
                        y0: a + n,
                        x1: l,
                        y1: n
                      };
                      var u, s = 0,
                        c = 0,
                        f = 0,
                        v = 0;
                      if (i < o || i > 180 - o && i < 180 || i > 180 && i < 180 + o || i > 360 - o) {
                        var h = i * Math.PI / 180,
                          d = i < o || i > 360 - o ? a / 2 : -a / 2,
                          b = Math.tan(h) * d,
                          p = i < o || i > 180 - o && i < 180 ? t / 2 - b : -t / 2 - b;
                        s = -(f = b + (u = Math.pow(Math.sin(h), 2) * p)), c = -(v = d + u / Math.tan(h))
                      }
                      return (i > o && i < 90 || i > 90 && i < 90 + o || i > 180 + o && i < 270 || i > 270 && i < 360 - o) && (h = (90 - i) * Math.PI / 180, b = i > o && i < 90 || i > 90 && i < 90 + o ? t / 2 : -t / 2, d = Math.tan(h) * b, p = i > o && i < 90 || i > 270 && i < 360 - o ? a / 2 - d : -a / 2 - d, s = -(f = b + (u = Math.pow(Math.sin(h), 2) * p) / Math.tan(h)), c = -(v = d + u)), {
                        x0: s = Math.round(s + t / 2) + l,
                        y0: c = Math.round(a / 2 - c) + n,
                        x1: f = Math.round(f + t / 2) + l,
                        y1: v = Math.round(a / 2 - v) + n
                      }
                    }(n, e, t, a, l), o = i.x0, u = i.y0, s = i.x1, c = i.y1, f = r.createLinearGradient(o, u, s, c), v = n.match(/linear-gradient\((.+)\)/)[1], h = w(v.substring(v.indexOf(",") + 1)), d = 0; d < h.colors.length; d++) f.addColorStop(h.percents[d], h.colors[d]);
                  r.setFillStyle(f)
                }(t, a, l, n, e, r) : e.startsWith("radial") && function(e, t, a, l, n, r) {
                  for (var i = w(n.match(/radial-gradient\((.+)\)/)[1]), o = Math.round(e / 2) + a, u = Math.round(t / 2) + l, s = r.createRadialGradient(o, u, 0, o, u, Math.max(e, t) / 2), c = 0; c < i.colors.length; c++) s.addColorStop(i.percents[c], i.colors[c]);
                  r.setFillStyle(s)
                }(t, a, l, n, e, r)
              }(e, t, a, l, n, r) : r.setFillStyle(e) : [f.MP_TOUTIAO, f.MP_BAIDU].includes(m) ? r.setFillStyle("rgba(0,0,0,0)") : r.setFillStyle("transparent")
            }, e.prototype.setShadow = function(e) {
              var t = e.boxShadow,
                a = void 0 === t ? [] : t,
                l = this.ctx;
              if (a.length) {
                var n = a[0],
                  r = a[1],
                  i = a[2],
                  o = a[3];
                l.setShadow(n, r, i, o)
              }
            }, e.prototype.setBorder = function(e, t) {
              var a = this.ctx,
                l = e.width,
                n = e.height,
                r = e.left,
                i = e.top,
                o = t.border,
                u = t.borderBottom,
                s = t.borderTop,
                c = t.borderRight,
                f = t.borderLeft,
                v = t.borderRadius,
                h = t.lineCap,
                d = o || {},
                b = d.borderWidth,
                p = void 0 === b ? 0 : b,
                g = d.borderStyle,
                y = d.borderColor,
                S = u || {},
                Y = S.borderBottomWidth,
                Z = void 0 === Y ? p : Y,
                L = S.borderBottomStyle,
                C = void 0 === L ? g : L,
                T = S.borderBottomColor,
                w = void 0 === T ? y : T,
                _ = s || {},
                X = _.borderTopWidth,
                J = void 0 === X ? p : X,
                P = _.borderTopStyle,
                M = void 0 === P ? g : P,
                D = _.borderTopColor,
                x = void 0 === D ? y : D,
                B = c || {},
                H = B.borderRightWidth,
                Q = void 0 === H ? p : H,
                A = B.borderRightStyle,
                F = void 0 === A ? g : A,
                N = B.borderRightColor,
                E = void 0 === N ? y : N,
                O = f || {},
                W = O.borderLeftWidth,
                k = void 0 === W ? p : W,
                G = O.borderLeftStyle,
                R = void 0 === G ? g : G,
                K = O.borderLeftColor,
                I = void 0 === K ? y : K,
                $ = v || {},
                j = $.borderTopLeftRadius,
                z = void 0 === j ? v || 0 : j,
                U = $.borderTopRightRadius,
                q = void 0 === U ? v || 0 : U,
                V = $.borderBottomRightRadius,
                ee = void 0 === V ? v || 0 : V,
                te = $.borderBottomLeftRadius,
                ae = void 0 === te ? v || 0 : te;
              if (u || f || s || c || o) {
                var le = function(e, t, l) {
                    "dashed" == t ? /mp/.test(m) ? a.setLineDash([Math.ceil(4 * e / 3), Math.ceil(4 * e / 3)]) : a.setLineDash([Math.ceil(6 * e), Math.ceil(6 * e)]) : "dotted" == t && a.setLineDash([e, e]), a.setStrokeStyle(l)
                  },
                  ne = function(e, t, l, n, r, i, o, u, s, c, f, v, d, b, p) {
                    a.save(), a.setLineCap(p ? "square" : h), a.setLineWidth(v), le(v, d, b), a.beginPath(), a.arc(e, t, o, Math.PI * s, Math.PI * c), a.lineTo(l, n), a.arc(r, i, u, Math.PI * c, Math.PI * f), a.stroke(), a.restore()
                  };
                if (a.save(), o && !u && !f && !s && !c) return a.setLineWidth(p), le(p, g, y), this.roundRect(r, i, l, n, v, !1, !!y), void a.restore();
                Z && ne(r + l - ee, i + n - ee, r + ae, i + n, r + ae, i + n - ae, ee, ae, .25, .5, .75, Z, C, w, k && Q), k && ne(r + ae, i + n - ae, r, i + z, r + z, i + z, ae, z, .75, 1, 1.25, k, R, I, J && Z), J && ne(r + z, i + z, r + l - q, i, r + l - q, i + q, z, q, 1.25, 1.5, 1.75, J, M, x, k && Q), Q && ne(r + l - q, i + q, r + l, i + n - ee, r + l - ee, i + n - ee, q, ee, 1.75, 2, .25, Q, F, E, J && Z)
              }
            }, e.prototype.setOpacity = function(e) {
              var t = e.opacity,
                a = void 0 === t ? 1 : t;
              this.ctx.setGlobalAlpha(a)
            }, e.prototype.drawPattern = function(e, t, a) {
              return o(this, void 0, void 0, (function() {
                var l = this;
                return u(this, (function(n) {
                  return [2, new Promise((function(n, r) {
                    l.drawView(t, a, !0, !1, !0);
                    var i = l,
                      o = i.ctx;
                    i.canvas;
                    var u = t.width,
                      s = t.height,
                      c = t.left,
                      f = t.top,
                      v = a || {},
                      h = v.borderRadius,
                      d = void 0 === h ? 0 : h,
                      b = v.backgroundImage,
                      p = v.backgroundRepeat,
                      g = void 0 === p ? "repeat" : p;
                    b && function(e) {
                      var r = o.createPattern(e.src, g);
                      o.setFillStyle(r), l.roundRect(c, f, u, s, d, !0, !1), l.setBorder(t, a), n()
                    }(e)
                  }))]
                }))
              }))
            }, e.prototype.drawView = function(e, t, a, l, n) {
              void 0 === a && (a = !0), void 0 === l && (l = !0), void 0 === n && (n = !0);
              var r = this.ctx,
                i = e.width,
                o = e.height,
                u = e.left,
                s = e.top,
                c = t || {},
                f = c.borderRadius,
                v = void 0 === f ? 0 : f,
                h = c.backgroundColor,
                d = void 0 === h ? "transparent" : h,
                b = c.overflow;
              t.opacity && this.setOpacity(t), this.setTransform(e, t), n && (r.save(), this.setShadow(t)), a && this.setBackground(d, i, o, u, s), t.clipPath ? this.clipPath(u, s, i, o, t.clipPath, a, !1) : this.roundRect(u, s, i, o, v, a, !1), n && r.restore(), l && this.setBorder(e, t), "hidden" == b && r.clip()
            }, e.prototype.drawImage = function(e, t, a, l) {
              return void 0 === t && (t = {}), void 0 === a && (a = {}), void 0 === l && (l = !0), o(this, void 0, void 0, (function() {
                var n = this;
                return u(this, (function(r) {
                  switch (r.label) {
                    case 0:
                      return [4, new Promise((function(r, i) {
                        return o(n, void 0, void 0, (function() {
                          var n, i, o, s, c, v, h, d, b, p, g, y, S, Y, Z, L, T, w, _, X = this;
                          return u(this, (function(u) {
                            return a.boxShadow && this.drawView(t, Object.assign(a, {
                                backgroundColor: a.backgroundColor || a.boxShadow && (a.backgroundColor || "#ffffff")
                              }), !0, !1, !0), n = this.ctx, i = a.borderRadius, o = void 0 === i ? 0 : i, s = a.backgroundColor, c = void 0 === s ? "transparent" : s, v = a.objectFit, h = void 0 === v ? "fill" : v, d = a.backgroundSize, b = void 0 === d ? "fill" : d, p = a.objectPosition, g = a.backgroundPosition, a.backgroundImage && (h = b, p = g), y = t.width, S = t.height, Y = t.left, Z = t.top, n.save(), L = t.contentSize.left - t.borderSize.left, T = t.contentSize.top - t.borderSize.top, l || (this.setOpacity(a), this.setTransform(t, a), this.setBackground(c, y, S, Y, Z), this.roundRect(Y, Z, y, S, o, !!o, !1)), Y += L, Z += T, n.clip(), w = function(e) {
                                if ("fill" !== h) {
                                  var a = function(e, t, a) {
                                      var l = e.objectFit,
                                        n = e.objectPosition,
                                        r = t.width / t.height,
                                        i = a.width / a.height,
                                        o = 1;
                                      "contain" == l && r >= i || "cover" == l && r < i ? o = t.height / a.height : ("contain" == l && r < i || "cover" == l && r >= i) && (o = t.width / a.width);
                                      var u = a.width * o,
                                        s = a.height * o,
                                        c = /^\d+px|rpx$/.test(null == n ? void 0 : n[0]) ? C(null == n ? void 0 : n[0], t.width) : (t.width - u) * (/%$/.test(null == n ? void 0 : n[0]) ? C(null == n ? void 0 : n[0], 1) : {
                                          left: 0,
                                          center: .5,
                                          right: 1
                                        } [(null == n ? void 0 : n[0]) || "center"]),
                                        f = /^\d+px|rpx$/.test(null == n ? void 0 : n[1]) ? C(null == n ? void 0 : n[1], t.height) : (t.height - s) * (/%$/.test(null == n ? void 0 : n[1]) ? C(null == n ? void 0 : n[1], 1) : {
                                          top: 0,
                                          center: .5,
                                          bottom: 1
                                        } [(null == n ? void 0 : n[1]) || "center"]),
                                        v = function(e, t) {
                                          return [(e - c) / o, (t - f) / o]
                                        },
                                        h = v(0, 0),
                                        d = h[0],
                                        b = h[1],
                                        p = v(t.width, t.height),
                                        g = p[0],
                                        y = p[1];
                                      return {
                                        sx: Math.max(d, 0),
                                        sy: Math.max(b, 0),
                                        sw: Math.min(g - d, a.width),
                                        sh: Math.min(y - b, a.height),
                                        dx: Math.max(c, 0),
                                        dy: Math.max(f, 0),
                                        dw: Math.min(u, t.width),
                                        dh: Math.min(s, t.height)
                                      }
                                    }({
                                      objectFit: h,
                                      objectPosition: p
                                    }, t.contentSize, e),
                                    l = a.sx,
                                    r = a.sy,
                                    i = a.sh,
                                    o = a.sw,
                                    u = a.dx,
                                    s = a.dy,
                                    c = a.dh,
                                    v = a.dw;
                                  m == f.MP_BAIDU ? n.drawImage(e.src, u + Y, s + Z, v, c, l, r, o, i) : n.drawImage(e.src, l, r, o, i, u + Y, s + Z, v, c)
                                } else n.drawImage(e.src, Y, Z, y, S)
                              }, _ = function() {
                                n.restore(), X.drawView(t, a, !1, !0, !1), r(1)
                              },
                              function(e) {
                                w(e), _()
                              }(e), [2]
                          }))
                        }))
                      }))];
                    case 1:
                      return r.sent(), [2]
                  }
                }))
              }))
            }, e.prototype.drawText = function(e, t, a, l) {
              var n, r;
              this.drawView(t, a);
              var i = this.ctx,
                o = t.borderSize,
                u = t.contentSize,
                s = t.left,
                c = t.top,
                f = u.width,
                v = u.height,
                h = u.left - o.left,
                d = u.top - o.top,
                b = a.color,
                p = void 0 === b ? "#000000" : b,
                g = a.lineHeight,
                y = void 0 === g ? "1.4em" : g,
                S = a.fontSize,
                m = void 0 === S ? 14 : S,
                Y = a.fontWeight,
                Z = a.fontFamily,
                L = a.fontStyle,
                T = a.textAlign,
                w = void 0 === T ? "left" : T,
                _ = a.verticalAlign,
                X = void 0 === _ ? "middle" : _;
              a.backgroundColor;
              var J = a.lineClamp,
                P = a.textDecoration;
              if (y = C(y, m), e) {
                switch (i.save(), s += h, c += d, i.setFonts({
                    fontFamily: Z,
                    fontSize: m,
                    fontWeight: Y,
                    fontStyle: L
                  }), i.setTextBaseline("middle"), i.setTextAlign(w), i.setFillStyle(p), c += m / 2, w) {
                  case "left":
                    break;
                  case "center":
                    s += .5 * f;
                    break;
                  case "right":
                    s += f
                }
                var M = l.lines * y,
                  D = Math.ceil((v - M) / 2);
                switch (D < 0 && (D = 0), X) {
                  case "top":
                    break;
                  case "middle":
                    c += D;
                    break;
                  case "bottom":
                    c += 2 * D
                }
                var x = (y - l.fontHeight) / 2,
                  B = function(e, t, a) {
                    var n = e;
                    switch (w) {
                      case "left":
                        e = e, n += a;
                        break;
                      case "center":
                        n = (e -= a / 2) + a;
                        break;
                      case "right":
                        n = e, e -= a
                    }
                    P && (i.setLineWidth(m / 13), i.beginPath(), t -= x, /\bunderline\b/.test(P) && (i.moveTo(e, t - .5 * l.fontHeight), i.lineTo(n, t - .5 * l.fontHeight)), /\boverline\b/.test(P) && (i.moveTo(e, t - 1.5 * l.fontHeight), i.lineTo(n, t - 1.5 * l.fontHeight)), /\bline-through\b/.test(P) && (i.moveTo(e, t - l.fontHeight), i.lineTo(n, t - l.fontHeight)), i.closePath(), i.setStrokeStyle(p), i.stroke())
                  };
                if (!l.widths || 1 == l.widths.lenght && l.widths[0].total <= u.width) return i.fillText(e, s, c + x), B(s, c += y, (null === (r = null === (n = null == l ? void 0 : l.widths) || void 0 === n ? void 0 : n[0]) || void 0 === r ? void 0 : r.total) || l.text), i.restore(), void this.setBorder(t, a);
                for (var H = e.split(""), Q = c, A = s, F = "", N = 0, E = 0; E <= H.length; E++) {
                  var O = H[E] || "",
                    W = "\n" === O,
                    k = "" == O,
                    G = F + (O = W ? "" : O),
                    R = i.measureText(G).width;
                  if (N >= J) break;
                  if (A = s, (R = R) > u.width || W || k) {
                    if (N++, F = k && R <= u.width ? G : F, N === J && R > f) {
                      for (; i.measureText(F + "...").width > u.width && !(F.length <= 1);) F = F.substring(0, F.length - 1);
                      F += "..."
                    }
                    if (i.fillText(F, A, c + x), B(A, c += y, R), F = O, c + y > Q + v) break
                  } else F = G
                }
                i.restore()
              }
            }, e.prototype.source = function(e) {
              var t;
              return o(this, void 0, void 0, (function() {
                var a, l, n, r = this;
                return u(this, (function(i) {
                  switch (i.label) {
                    case 0:
                      if (a = +new Date, "{}" == JSON.stringify(e)) return [2];
                      if (!e.type)
                        for (l in e.type = v, e.css = e.css || {}, e)["views", "children", "type", "css"].includes(l) || (e.css[l] = e[l], delete e[l]);
                      return (null === (t = e.css) || void 0 === t ? void 0 : t.width) || (e.css ? e.css.width = this.root.width : e.css = {
                        width: this.root.width
                      }), [4, this.create(e)];
                    case 1:
                      return n = i.sent(), this.size = (null == n ? void 0 : n.layout()) || {}, this.node = n, this.onEffectFinished().then((function(e) {
                        return r.lifecycle("onEffectSuccess", e)
                      })).catch((function(e) {
                        return r.lifecycle("onEffectFail", e)
                      })), console.log("布局用时：" + (+new Date - a) + "ms"), [2, this.root]
                  }
                }))
              }))
            }, e.prototype.getImageInfo = function(e) {
              return this.imageBus[e] || (this.imageBus[e] = function(e, t) {
                var a = this;
                return new Promise((function(l, n) {
                  return o(a, void 0, void 0, (function() {
                    var a, r, o;
                    return u(this, (function(u) {
                      switch (u.label) {
                        case 0:
                          a = e, r = /data:image\/(\w+);base64,(.*)/.test(e), u.label = 1;
                        case 1:
                          return u.trys.push([1, 6, , 7]), r || m != f.PLUS || /^\/?(static|_doc)\//.test(a) ? [3, 3] : [4, T(e)];
                        case 2:
                          return a = u.sent(), [3, 5];
                        case 3:
                          return m != f.PLUS && !/^mp/.test(m) || !r ? [3, 5] : [4, (s = e, new Promise((function(e, t) {
                            var a = /data:image\/(\w+);base64,(.*)/.exec(s) || [],
                              l = a[1];
                            if (a[2], /^mp/.test(m)) {
                              var n = Y.getFileSystemManager();
                              l || t(new Error("ERROR_BASE64SRC_PARSE"));
                              var r = (new Date).getTime(),
                                i = Y.env.USER_DATA_PATH + "/" + r + "." + l;
                              n.writeFile({
                                filePath: i,
                                data: s.replace(/^data:\S+\/\S+;base64,/, ""),
                                encoding: "base64",
                                success: function() {
                                  e(i)
                                },
                                fail: function(e) {
                                  t(e)
                                }
                              })
                            } else if (m != f.PLUS) t(new Error("not support"));
                            else {
                              var o = s.split(",")[0].match(/data\:\S+\/(\S+);/);
                              o ? o = o[1] : t(new Error("base64 error"));
                              var u = Date.now() + "." + o,
                                c = "_doc/uniapp_temp/" + u;
                              if (! function(e, t) {
                                  for (var a = e.split("."), l = t.split("."), n = !1, r = 0; r < l.length; r++) {
                                    var i = a[r] - l[r];
                                    if (0 !== i) {
                                      n = i > 0;
                                      break
                                    }
                                  }
                                  return n
                                }("Android" === plus.os.name ? "1.9.9.80627" : "1.9.9.80472", plus.runtime.innerVersion)) return void plus.io.resolveLocalFileSystemURL("_doc", (function(a) {
                                a.getDirectory("uniapp_temp", {
                                  create: !0,
                                  exclusive: !1
                                }, (function(a) {
                                  a.getFile(u, {
                                    create: !0,
                                    exclusive: !1
                                  }, (function(a) {
                                    a.createWriter((function(a) {
                                      var l;
                                      a.onwrite = function() {
                                        e(c)
                                      }, a.onerror = t, a.seek(0), a.writeAsBinary((l = s.split(","))[l.length - 1])
                                    }), t)
                                  }), t)
                                }), t)
                              }), t);
                              var v = new plus.nativeObj.Bitmap(u);
                              v.loadBase64Data(s, (function() {
                                v.save(c, {}, (function() {
                                  v.clear(), e(c)
                                }), (function(e) {
                                  v.clear(), t(e)
                                }))
                              }), (function(e) {
                                v.clear(), t(e)
                              }))
                            }
                          })))];
                        case 4:
                          a = u.sent(), u.label = 5;
                        case 5:
                          return [3, 7];
                        case 6:
                          return o = u.sent(), n(i(i({}, o), {
                            src: a
                          })), [3, 7];
                        case 7:
                          return Y.getImageInfo({
                            src: a,
                            success: function(e) {
                              if (["right", "left"].includes(e.orientation)) {
                                var r = e.width,
                                  i = e.height;
                                e.width = i, e.height = r
                              }
                              if ([f.MP_WEIXIN, f.MP_BAIDU, f.MP_QQ, f.MP_TOUTIAO].includes(m) && (e.path = /^\.|^\/(?=[^\/])/.test(a) ? "/" + e.path : e.path), t) {
                                var o = t.createImage ? t.createImage() : t;
                                o.onload = function() {
                                  e.path = o, l(e)
                                }, o.onerror = n, o.src = e.path
                              } else l(e)
                            },
                            fail: function(e) {
                              n(i(i({}, e), {
                                src: a
                              }))
                            }
                          }), [2]
                      }
                      var s
                    }))
                  }))
                }))
              }(e, this.canvas.createImage && this.canvas || m == f.WEB && new Image)), this.imageBus[e]
            }, e.prototype.create = function(e, t) {
              var a, l, n, r;
              return o(this, void 0, void 0, (function() {
                var i, o, s, c, f, p, g, y, S, m, Y;
                return u(this, (function(u) {
                  switch (u.label) {
                    case 0:
                      if (e.type == h && (e.text = String(e.text)), e.type == d && !e.src && !e.url || (e.type == b || e.type == h) && !e.text) return [2];
                      if ("none" == (null === (a = e.css) || void 0 === a ? void 0 : a.display)) return [2];
                      if (!(e.type == d || e.type == v && (null === (l = e.css) || void 0 === l ? void 0 : l.backgroundImage))) return [3, 4];
                      i = e.src, o = /url\((.+)\)/, e.css.backgroundImage && (null === (n = o.exec(e.css.backgroundImage)) || void 0 === n ? void 0 : n[1]) && (i = null === (r = o.exec(e.css.backgroundImage)) || void 0 === r ? void 0 : r[1]), u.label = 1;
                    case 1:
                      return u.trys.push([1, 3, , 4]), [4, this.getImageInfo(i)];
                    case 2:
                      return s = u.sent(), c = s.width, f = s.height, (p = s.path) || e.type != d ? (p && (e.attributes = Object.assign(e.attributes || {}, {
                        width: c,
                        height: f,
                        path: p,
                        src: p,
                        naturalSrc: i
                      })), [3, 4]) : [2];
                    case 3:
                      return u.sent(), [2];
                    case 4:
                      if (this.count += 1, g = new M(e, t, this.root, this.ctx), !(y = e.views || e.children)) return [3, 8];
                      S = 0, u.label = 5;
                    case 5:
                      return S < y.length ? (m = y[S], [4, this.create(m, g)]) : [3, 8];
                    case 6:
                      (Y = u.sent()) && g.add(Y), u.label = 7;
                    case 7:
                      return S++, [3, 5];
                    case 8:
                      return [2, g]
                  }
                }))
              }))
            }, e.prototype.drawNode = function(e) {
              return o(this, void 0, void 0, (function() {
                var t, a, l, n, r, i, o, s, c, f, p, g;
                return u(this, (function(u) {
                  switch (u.label) {
                    case 0:
                      return t = e.layoutBox, a = e.computedStyle, l = e.attributes, n = e.name, r = e.children, i = e.attributes, o = i.src, s = i.text, this.ctx.save(), n !== v ? [3, 7] : o ? a.backgroundRepeat ? [4, this.drawPattern(l, t, a)] : [3, 2] : [3, 5];
                    case 1:
                      return u.sent(), [3, 4];
                    case 2:
                      return [4, this.drawImage(l, t, a, !1)];
                    case 3:
                      u.sent(), u.label = 4;
                    case 4:
                      return [3, 6];
                    case 5:
                      this.drawView(t, a), u.label = 6;
                    case 6:
                      return [3, 10];
                    case 7:
                      return n === d && o ? [4, this.drawImage(l, t, a, !1)] : [3, 9];
                    case 8:
                      return u.sent(), [3, 10];
                    case 9:
                      n === h ? this.drawText(s, t, a, l) : n === b && D.api && D.api.draw(s, this, t, a), u.label = 10;
                    case 10:
                      if (this.progress += 1, !r) return [3, 14];
                      c = Object.values ? Object.values(r) : Object.keys(r).map((function(e) {
                        return r[e]
                      })), f = 0, p = c, u.label = 11;
                    case 11:
                      return f < p.length ? (g = p[f], [4, this.drawNode(g)]) : [3, 14];
                    case 12:
                      u.sent(), u.label = 13;
                    case 13:
                      return f++, [3, 11];
                    case 14:
                      return this.ctx.restore(), [2]
                  }
                }))
              }))
            }, e.prototype.render = function() {
              var e = this;
              return new Promise((function(t, a) {
                return o(e, void 0, void 0, (function() {
                  var e, l;
                  return u(this, (function(n) {
                    switch (n.label) {
                      case 0:
                        return e = +new Date, this.init(), [4, (r = 30, void 0 === r && (r = 0), new Promise((function(e) {
                          return setTimeout(e, r)
                        })))];
                      case 1:
                        n.sent(), n.label = 2;
                      case 2:
                        return n.trys.push([2, 6, , 7]), this.node ? [4, this.drawNode(this.node)] : [3, 4];
                      case 3:
                        return n.sent(), t(this.node), [3, 5];
                      case 4:
                        this.lifecycle("onEffectFail", "node is empty"), n.label = 5;
                      case 5:
                        return [3, 7];
                      case 6:
                        return l = n.sent(), this.lifecycle("onEffectFail", l), a(l), [3, 7];
                      case 7:
                        return console.log("渲染用时：" + (+new Date - e - 30) + "ms"), [2]
                    }
                    var r
                  }))
                }))
              }))
            }, e.prototype.onEffectFinished = function() {
              var e = this,
                t = Object.keys(this.imageBus).map((function(t) {
                  return e.imageBus[t]
                }));
              return Promise.all(t)
            }, e.prototype.destroy = function() {
              this.node = []
            }, e.prototype.save = function(e) {
              try {
                var t = e || {},
                  a = t.fileType,
                  l = void 0 === a ? "png" : a,
                  n = t.quality,
                  r = void 0 === n ? 1 : n;
                return this.canvas.toDataURL("image/" + l, r)
              } catch (e) {
                return this.lifecycle("onEffectFail", "image cross domain"), e
              }
            }, e
          }();
        t.Painter = x, f.WEB == m && (window.Painter = x);
        var B = x;
        t.default = B
      }).call(this, a("df3c").default, a("3223").default)
    },
    "7c97": function(e, t, a) {
      var l = a("47a9");
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = l(a("3b2d"));
      t.default = function e(t) {
        if ([null, void 0, NaN, !1].includes(t)) return t;
        if ("object" !== (0, n.default)(t) && "function" != typeof t) return t;
        var a = function(e) {
          return "[object Array]" === Object.prototype.toString.call(e)
        }(t) ? [] : {};
        for (var l in t) t.hasOwnProperty(l) && (a[l] = "object" === (0, n.default)(t[l]) ? e(t[l]) : t[l]);
        return a
      }
    },
    "7ca3": function(e, t, a) {
      var l = a("d551");
      e.exports = function(e, t, a) {
        return (t = l(t)) in e ? Object.defineProperty(e, t, {
          value: a,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = a, e
      }, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    "7dd9": function(e, t, a) {
      var l = a("47a9");
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.isExternal = function(e) {
        return /^(https?:|mailto:|tel:)/.test(e)
      }, t.isNull = function(e) {
        return "" !== e
      }, t.isvalidNull = function(e) {
        return "" == e || new RegExp("^[ ]+$").test(e)
      }, t.validateAlphabets = function(e) {
        return /^[A-Za-z]+$/.test(e)
      }, t.validateEmail = function(e) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)
      }, t.validateLength = function(e) {
        return /^[a-zA-Z\d\_\u2E80-\u9FFF]{1,10}$/.test(e)
      }, t.validateLowerCase = function(e) {
        return /^[a-z]+$/.test(e)
      }, t.validateMoney = function(e) {
        return /^\d+(\.\d+)?$/.test(e)
      }, t.validateNumber = function(e) {
        return /^[0-9]*$/.test(e)
      }, t.validateNumberIs0 = function(e) {
        return /^\+?[1-9]\d*$/.test(e)
      }, t.validatePassWord = function(e) {
        return /^[0-9a-zA-Z]*$/g.test(e)
      }, t.validatePhone = function(e) {
        return /^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(e.toString())
      }, t.validateURL = function(e) {
        return /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/.test(e)
      }, t.validateUpperCase = function(e) {
        return /^[A-Z]+$/.test(e)
      }, l(a("02e3"))
    },
    "7e10": function(e, t, a) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0, t.default = {
        pulldown: "",
        refreshempty: "",
        back: "",
        forward: "",
        more: "",
        "more-filled": "",
        scan: "",
        qq: "",
        weibo: "",
        weixin: "",
        pengyouquan: "",
        loop: "",
        refresh: "",
        "refresh-filled": "",
        arrowthindown: "",
        arrowthinleft: "",
        arrowthinright: "",
        arrowthinup: "",
        "undo-filled": "",
        undo: "",
        redo: "",
        "redo-filled": "",
        bars: "",
        chatboxes: "",
        camera: "",
        "chatboxes-filled": "",
        "camera-filled": "",
        "cart-filled": "",
        cart: "",
        "checkbox-filled": "",
        checkbox: "",
        arrowleft: "",
        arrowdown: "",
        arrowright: "",
        "smallcircle-filled": "",
        arrowup: "",
        circle: "",
        "eye-filled": "",
        "eye-slash-filled": "",
        "eye-slash": "",
        eye: "",
        "flag-filled": "",
        flag: "",
        "gear-filled": "",
        reload: "",
        gear: "",
        "hand-thumbsdown-filled": "",
        "hand-thumbsdown": "",
        "hand-thumbsup-filled": "",
        "heart-filled": "",
        "hand-thumbsup": "",
        heart: "",
        home: "",
        info: "",
        "home-filled": "",
        "info-filled": "",
        "circle-filled": "",
        "chat-filled": "",
        chat: "",
        "mail-open-filled": "",
        "email-filled": "",
        "mail-open": "",
        email: "",
        checkmarkempty: "",
        list: "",
        "locked-filled": "",
        locked: "",
        "map-filled": "",
        "map-pin": "",
        "map-pin-ellipse": "",
        map: "",
        "minus-filled": "",
        "mic-filled": "",
        minus: "",
        micoff: "",
        mic: "",
        clear: "",
        smallcircle: "",
        close: "",
        closeempty: "",
        paperclip: "",
        paperplane: "",
        "paperplane-filled": "",
        "person-filled": "",
        "contact-filled": "",
        person: "",
        contact: "",
        "images-filled": "",
        phone: "",
        images: "",
        image: "",
        "image-filled": "",
        "location-filled": "",
        location: "",
        "plus-filled": "",
        plus: "",
        plusempty: "",
        "help-filled": "",
        help: "",
        "navigate-filled": "",
        navigate: "",
        "mic-slash-filled": "",
        search: "",
        settings: "",
        sound: "",
        "sound-filled": "",
        "spinner-cycle": "",
        "download-filled": "",
        "personadd-filled": "",
        "videocam-filled": "",
        personadd: "",
        upload: "",
        "upload-filled": "",
        starhalf: "",
        "star-filled": "",
        star: "",
        trash: "",
        "phone-filled": "",
        compose: "",
        videocam: "",
        "trash-filled": "",
        download: "",
        "chatbubble-filled": "",
        chatbubble: "",
        "cloud-download": "",
        "cloud-upload-filled": "",
        "cloud-upload": "",
        "cloud-download-filled": "",
        headphones: "",
        shop: ""
      }
    },
    "7eb4": function(e, t, a) {
      var l = a("9fc1")();
      e.exports = l
    },
    "800b": function(e, t) {
      t.endianness = function() {
        return "LE"
      }, t.hostname = function() {
        return "undefined" != typeof location ? location.hostname : ""
      }, t.loadavg = function() {
        return []
      }, t.uptime = function() {
        return 0
      }, t.freemem = function() {
        return Number.MAX_VALUE
      }, t.totalmem = function() {
        return Number.MAX_VALUE
      }, t.cpus = function() {
        return []
      }, t.type = function() {
        return "Browser"
      }, t.release = function() {
        return "undefined" != typeof navigator ? navigator.appVersion : ""
      }, t.networkInterfaces = t.getNetworkInterfaces = function() {
        return {}
      }, t.arch = function() {
        return "javascript"
      }, t.platform = function() {
        return "browser"
      }, t.tmpdir = t.tmpDir = function() {
        return "/tmp"
      }, t.EOL = "\n", t.homedir = function() {
        return "/"
      }
    },
    "828b": function(e, t, a) {
      function l(e, t, a, l, n, r, i, o, u, s) {
        var c, f = "function" == typeof e ? e.options : e;
        if (u) {
          f.components || (f.components = {});
          var v = Object.prototype.hasOwnProperty;
          for (var h in u) v.call(u, h) && !v.call(f.components, h) && (f.components[h] = u[h])
        }
        if (s && ("function" == typeof s.beforeCreate && (s.beforeCreate = [s.beforeCreate]), (s.beforeCreate || (s.beforeCreate = [])).unshift((function() {
            this[s.__module] = this
          })), (f.mixins || (f.mixins = [])).push(s)), t && (f.render = t, f.staticRenderFns = a, f._compiled = !0), l && (f.functional = !0), r && (f._scopeId = "data-v-" + r), i ? (c = function(e) {
            (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), n && n.call(this, e), e && e._registeredComponents && e._registeredComponents.add(i)
          }, f._ssrRegister = c) : n && (c = o ? function() {
            n.call(this, this.$root.$options.shadowRoot)
          } : n), c)
          if (f.functional) {
            f._injectStyles = c;
            var d = f.render;
            f.render = function(e, t) {
              return c.call(t), d(e, t)
            }
          } else {
            var b = f.beforeCreate;
            f.beforeCreate = b ? [].concat(b, c) : [c]
          } return {
          exports: e,
          options: f
        }
      }
      a.d(t, "a", (function() {
        return l
      }))
    },
    8886: function(e, t, a) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0, t.default = {
        toast: 10090,
        noNetwork: 10080,
        popup: 10075,
        mask: 10070,
        navbar: 980,
        topTips: 975,
        sticky: 970,
        indexListSticky: 965
      }
    },
    "8ead": function(e, t, a) {
      (function(e, l) {
        var n = a("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var r = n(a("02e3")),
          i = {
            state: {
              token: e.getStorageSync("token"),
              refresh: e.getStorageSync("refresh"),
              userInfor: e.getStorageSync("userInfor"),
              distributorId: "",
              islogin: !1
            },
            getters: {
              token: function(e) {
                return e.token
              },
              refresh: function(e) {
                return e.refresh
              },
              userInfor: function(e) {
                return e.userInfor
              },
              distributorId: function(e) {
                return e.distributorId
              }
            },
            mutations: {
              SET_TOKEN: function(e, t) {
                e.token = t
              },
              SET_REFRESH: function(e, t) {
                e.refresh = t
              },
              SET_USERINFOR: function(e, t) {
                e.userInfor = t
              },
              SET_DISTRIBUTORID: function(e, t) {
                e.distributorId = t
              },
              SET_OPENID: function(e, t) {
                r.default.getRequestNoLoading("GET", "manager/app/v1/member/updateOpenId?openId=" + t).then((function(e) {
                  1 === e.code && console.log("oid saveSuccess!")
                }))
              }
            },
            actions: {
              LoginByUsername: function(t, a) {
                var n = t.commit,
                  i = e.getStorageSync("wxopenid");
                return new Promise((function(t, o) {
                  var u = {
                    userName: new l(a.username).toString("base64"),
                    password: new l(a.password).toString("base64"),
                    openId: i
                  };
                  r.default.dataRequestNoLoading("post", "manager/app/ignoreAuth/passwordLogin", u).then((function(a) {
                    if (1 === a.code) {
                      var l = "bearer " + a.data.token;
                      n("SET_TOKEN", l), e.setStorageSync("token", l), n("SET_REFRESH", a.data.refresh), e.setStorageSync("refresh", a.data.refresh), n("SET_OPENID", e.getStorageSync("wxopenid")), r.default.getRequestNoLoading("GET", "manager/app/v1/member/getUserDetail").then((function(a) {
                        1 === a.code && (a.data.openId || (a.data.openId = e.getStorageSync("wxopenid")), n("SET_USERINFOR", a.data), e.setStorageSync("userInfor", a.data), t(a))
                      }))
                    } else t(a)
                  })).catch((function(e) {
                    o(e)
                  }))
                }))
              },
              getUserInfo: function(t, a) {
                var l = t.commit;
                r.default.getRequestNoLoading("GET", "manager/app/v1/member/getUserDetail").then((function(t) {
                  1 === t.code && (l("SET_USERINFOR", t.data), e.setStorageSync("userInfor", t.data))
                }))
              },
              PushMessage: function() {
                return new Promise((function(t) {
                  e.requestSubscribeMessage({
                    tmplIds: ["q0cCIuuC-AmmOhlyKdelp9E7Yh8JANfEX9prtGyvKRw", "OYNPPv7dSQv7Lr_H7yXqKc_SSkDXCY1N3H4QoNPW3gs", "eSor2SXC5AaniK_FUY5Uq1CS1DdwtIRmC76x4K4klrM"],
                    success: function(e) {
                      t()
                    },
                    fail: function(e) {
                      t()
                    }
                  })
                }))
              },
              wxInForm: function(t, a) {
                return t.commit, new Promise((function(t) {
                  e.requestSubscribeMessage({
                    tmplIds: a,
                    success: function(e) {
                      t()
                    },
                    fail: function(e) {
                      t()
                    }
                  })
                }))
              },
              LoginByCode: function(t, a) {
                var l = t.commit,
                  n = e.getStorageSync("wxopenid");
                return new Promise((function(t, i) {
                  r.default.getRequestNoLoading("POST", "manager/app/ignoreAuth/login/".concat(a.username, "/").concat(a.code, "?openId=").concat(n)).then((function(a) {
                    if (1 === a.code) {
                      var n = "bearer " + a.data.token;
                      l("SET_TOKEN", n), e.setStorageSync("token", n), l("SET_OPENID", e.getStorageSync("wxopenid")), r.default.getRequestNoLoading("GET", "manager/app/v1/member/getUserDetail").then((function(a) {
                        1 === a.code ? (a.data.openId || (a.data.openId = e.getStorageSync("wxopenid")), l("SET_USERINFOR", a.data), e.setStorageSync("userInfor", a.data), t(a)) : t(a)
                      }))
                    } else t(a)
                  })).catch((function(e) {
                    i(e)
                  }))
                }))
              },
              WechatLoginByCode: function(t, a) {
                var l = t.commit;
                return t.getters, new Promise((function(t, n) {
                  r.default.dataRequestNoLoading("POST", "manager/app/ignoreAuth/wechatLoginByCode", {
                    code: a.code
                  }).then((function(a) {
                    if (1 === a.code) {
                      var n = "bearer " + a.data.token;
                      l("SET_TOKEN", n), e.setStorageSync("token", n), r.default.getRequestNoLoading("GET", "manager/app/v1/member/getUserDetail").then((function(a) {
                        1 === a.code ? (l("SET_USERINFOR", a.data), e.setStorageSync("userInfor", a.data), t(a)) : t(a)
                      }))
                    } else t(a)
                  }))
                }))
              },
              LoginByPhone: function(t, a) {
                var l = t.commit,
                  n = t.getters;
                return new Promise((function(t, i) {
                  r.default.dataRequestNoLoading("POST", "manager/app/ignoreAuth/wechatLoginPro", {
                    code: a.code,
                    iv: a.iv,
                    encryptedData: a.encryptedData,
                    referenceId: n.distributorId || ""
                  }).then((function(a) {
                    if (1 === a.code) {
                      var n = "bearer " + a.data.token;
                      l("SET_TOKEN", n), e.setStorageSync("token", n), r.default.getRequestNoLoading("GET", "manager/app/v1/member/getUserDetail").then((function(a) {
                        1 === a.code ? (l("SET_USERINFOR", a.data), e.setStorageSync("userInfor", a.data), t(a)) : t(a)
                      }))
                    } else t(a)
                  }))
                }))
              },
              LOSE_TOKEN: function(t, a) {
                var l = t.commit;
                t.getters, l("SET_TOKEN", ""), e.removeStorageSync("token"), l("SET_USERINFOR", ""), e.removeStorageSync("userInfor"), e.removeStorageSync("isShowTips"), resolve("success")
              },
              setUserInfo: function(t, a) {
                var l = t.commit;
                return a && (l("SET_TOKEN", a), e.setStorageSync("token", a)), new Promise((function(t, a) {
                  r.default.getRequestNoLoading("GET", "manager/app/v1/member/getUserDetail").then((function(a) {
                    console.log(a), 1 === a.code ? (l("SET_USERINFOR", a.data), e.setStorageSync("userInfor", a.data), t(a)) : t(a)
                  }))
                }))
              }
            }
          };
        t.default = i
      }).call(this, a("df3c").default, a("12e3").Buffer)
    },
    "8f59": function(t, a, l) {
      (function(a) {
        var l = ("undefined" != typeof window ? window : void 0 !== a ? a : {}).__VUE_DEVTOOLS_GLOBAL_HOOK__;

        function n(t, a) {
          if (void 0 === a && (a = []), null === t || "object" !== e(t)) return t;
          var l = function(e, t) {
            return e.filter(t)[0]
          }(a, (function(e) {
            return e.original === t
          }));
          if (l) return l.copy;
          var r = Array.isArray(t) ? [] : {};
          return a.push({
            original: t,
            copy: r
          }), Object.keys(t).forEach((function(e) {
            r[e] = n(t[e], a)
          })), r
        }

        function r(e, t) {
          Object.keys(e).forEach((function(a) {
            return t(e[a], a)
          }))
        }

        function i(t) {
          return null !== t && "object" === e(t)
        }
        var o = function(e, t) {
            this.runtime = t, this._children = Object.create(null), this._rawModule = e;
            var a = e.state;
            this.state = ("function" == typeof a ? a() : a) || {}
          },
          u = {
            namespaced: {
              configurable: !0
            }
          };
        u.namespaced.get = function() {
          return !!this._rawModule.namespaced
        }, o.prototype.addChild = function(e, t) {
          this._children[e] = t
        }, o.prototype.removeChild = function(e) {
          delete this._children[e]
        }, o.prototype.getChild = function(e) {
          return this._children[e]
        }, o.prototype.hasChild = function(e) {
          return e in this._children
        }, o.prototype.update = function(e) {
          this._rawModule.namespaced = e.namespaced, e.actions && (this._rawModule.actions = e.actions), e.mutations && (this._rawModule.mutations = e.mutations), e.getters && (this._rawModule.getters = e.getters)
        }, o.prototype.forEachChild = function(e) {
          r(this._children, e)
        }, o.prototype.forEachGetter = function(e) {
          this._rawModule.getters && r(this._rawModule.getters, e)
        }, o.prototype.forEachAction = function(e) {
          this._rawModule.actions && r(this._rawModule.actions, e)
        }, o.prototype.forEachMutation = function(e) {
          this._rawModule.mutations && r(this._rawModule.mutations, e)
        }, Object.defineProperties(o.prototype, u);
        var s, c = function(e) {
          this.register([], e, !1)
        };
        c.prototype.get = function(e) {
          return e.reduce((function(e, t) {
            return e.getChild(t)
          }), this.root)
        }, c.prototype.getNamespace = function(e) {
          var t = this.root;
          return e.reduce((function(e, a) {
            return e + ((t = t.getChild(a)).namespaced ? a + "/" : "")
          }), "")
        }, c.prototype.update = function(e) {
          ! function e(t, a, l) {
            if (a.update(l), l.modules)
              for (var n in l.modules) {
                if (!a.getChild(n)) return;
                e(t.concat(n), a.getChild(n), l.modules[n])
              }
          }([], this.root, e)
        }, c.prototype.register = function(e, t, a) {
          var l = this;
          void 0 === a && (a = !0);
          var n = new o(t, a);
          0 === e.length ? this.root = n : this.get(e.slice(0, -1)).addChild(e[e.length - 1], n);
          t.modules && r(t.modules, (function(t, n) {
            l.register(e.concat(n), t, a)
          }))
        }, c.prototype.unregister = function(e) {
          var t = this.get(e.slice(0, -1)),
            a = e[e.length - 1],
            l = t.getChild(a);
          l && l.runtime && t.removeChild(a)
        }, c.prototype.isRegistered = function(e) {
          var t = this.get(e.slice(0, -1)),
            a = e[e.length - 1];
          return !!t && t.hasChild(a)
        };
        var f = function(e) {
            var t = this;
            void 0 === e && (e = {}), !s && "undefined" != typeof window && window.Vue && S(window.Vue);
            var a = e.plugins;
            void 0 === a && (a = []);
            var n = e.strict;
            void 0 === n && (n = !1), this._committing = !1, this._actions = Object.create(null), this._actionSubscribers = [], this._mutations = Object.create(null), this._wrappedGetters = Object.create(null), this._modules = new c(e), this._modulesNamespaceMap = Object.create(null), this._subscribers = [], this._watcherVM = new s, this._makeLocalGettersCache = Object.create(null);
            var r = this,
              i = this.dispatch,
              o = this.commit;
            this.dispatch = function(e, t) {
              return i.call(r, e, t)
            }, this.commit = function(e, t, a) {
              return o.call(r, e, t, a)
            }, this.strict = n;
            var u = this._modules.root.state;
            p(this, u, [], this._modules.root), b(this, u), a.forEach((function(e) {
              return e(t)
            }));
            var f = void 0 !== e.devtools ? e.devtools : s.config.devtools;
            f && function(e) {
              l && (e._devtoolHook = l, l.emit("vuex:init", e), l.on("vuex:travel-to-state", (function(t) {
                e.replaceState(t)
              })), e.subscribe((function(e, t) {
                l.emit("vuex:mutation", e, t)
              }), {
                prepend: !0
              }), e.subscribeAction((function(e, t) {
                l.emit("vuex:action", e, t)
              }), {
                prepend: !0
              }))
            }(this)
          },
          v = {
            state: {
              configurable: !0
            }
          };

        function h(e, t, a) {
          return t.indexOf(e) < 0 && (a && a.prepend ? t.unshift(e) : t.push(e)),
            function() {
              var a = t.indexOf(e);
              a > -1 && t.splice(a, 1)
            }
        }

        function d(e, t) {
          e._actions = Object.create(null), e._mutations = Object.create(null), e._wrappedGetters = Object.create(null), e._modulesNamespaceMap = Object.create(null);
          var a = e.state;
          p(e, a, [], e._modules.root, !0), b(e, a, t)
        }

        function b(e, t, a) {
          var l = e._vm;
          e.getters = {}, e._makeLocalGettersCache = Object.create(null);
          var n = e._wrappedGetters,
            i = {};
          r(n, (function(t, a) {
            i[a] = function(e, t) {
              return function() {
                return e(t)
              }
            }(t, e), Object.defineProperty(e.getters, a, {
              get: function() {
                return e._vm[a]
              },
              enumerable: !0
            })
          }));
          var o = s.config.silent;
          s.config.silent = !0, e._vm = new s({
            data: {
              $$state: t
            },
            computed: i
          }), s.config.silent = o, e.strict && function(e) {
            e._vm.$watch((function() {
              return this._data.$$state
            }), (function() {}), {
              deep: !0,
              sync: !0
            })
          }(e), l && (a && e._withCommit((function() {
            l._data.$$state = null
          })), s.nextTick((function() {
            return l.$destroy()
          })))
        }

        function p(e, t, a, l, n) {
          var r = !a.length,
            i = e._modules.getNamespace(a);
          if (l.namespaced && (e._modulesNamespaceMap[i], e._modulesNamespaceMap[i] = l), !r && !n) {
            var o = g(t, a.slice(0, -1)),
              u = a[a.length - 1];
            e._withCommit((function() {
              s.set(o, u, l.state)
            }))
          }
          var c = l.context = function(e, t, a) {
            var l = "" === t,
              n = {
                dispatch: l ? e.dispatch : function(a, l, n) {
                  var r = y(a, l, n),
                    i = r.payload,
                    o = r.options,
                    u = r.type;
                  return o && o.root || (u = t + u), e.dispatch(u, i)
                },
                commit: l ? e.commit : function(a, l, n) {
                  var r = y(a, l, n),
                    i = r.payload,
                    o = r.options,
                    u = r.type;
                  o && o.root || (u = t + u), e.commit(u, i, o)
                }
              };
            return Object.defineProperties(n, {
              getters: {
                get: l ? function() {
                  return e.getters
                } : function() {
                  return function(e, t) {
                    if (!e._makeLocalGettersCache[t]) {
                      var a = {},
                        l = t.length;
                      Object.keys(e.getters).forEach((function(n) {
                        if (n.slice(0, l) === t) {
                          var r = n.slice(l);
                          Object.defineProperty(a, r, {
                            get: function() {
                              return e.getters[n]
                            },
                            enumerable: !0
                          })
                        }
                      })), e._makeLocalGettersCache[t] = a
                    }
                    return e._makeLocalGettersCache[t]
                  }(e, t)
                }
              },
              state: {
                get: function() {
                  return g(e.state, a)
                }
              }
            }), n
          }(e, i, a);
          l.forEachMutation((function(t, a) {
            ! function(e, t, a, l) {
              (e._mutations[t] || (e._mutations[t] = [])).push((function(t) {
                a.call(e, l.state, t)
              }))
            }(e, i + a, t, c)
          })), l.forEachAction((function(t, a) {
            var l = t.root ? a : i + a,
              n = t.handler || t;
            ! function(e, t, a, l) {
              (e._actions[t] || (e._actions[t] = [])).push((function(t) {
                var n = a.call(e, {
                  dispatch: l.dispatch,
                  commit: l.commit,
                  getters: l.getters,
                  state: l.state,
                  rootGetters: e.getters,
                  rootState: e.state
                }, t);
                return function(e) {
                  return e && "function" == typeof e.then
                }(n) || (n = Promise.resolve(n)), e._devtoolHook ? n.catch((function(t) {
                  throw e._devtoolHook.emit("vuex:error", t), t
                })) : n
              }))
            }(e, l, n, c)
          })), l.forEachGetter((function(t, a) {
            ! function(e, t, a, l) {
              e._wrappedGetters[t] || (e._wrappedGetters[t] = function(e) {
                return a(l.state, l.getters, e.state, e.getters)
              })
            }(e, i + a, t, c)
          })), l.forEachChild((function(l, r) {
            p(e, t, a.concat(r), l, n)
          }))
        }

        function g(e, t) {
          return t.reduce((function(e, t) {
            return e[t]
          }), e)
        }

        function y(e, t, a) {
          return i(e) && e.type && (a = t, t = e, e = e.type), {
            type: e,
            payload: t,
            options: a
          }
        }

        function S(e) {
          s && e === s ||
            /*!
             * vuex v3.6.2
             * (c) 2021 Evan You
             * @license MIT
             */
            function(e) {
              if (Number(e.version.split(".")[0]) >= 2) e.mixin({
                beforeCreate: a
              });
              else {
                var t = e.prototype._init;
                e.prototype._init = function(e) {
                  void 0 === e && (e = {}), e.init = e.init ? [a].concat(e.init) : a, t.call(this, e)
                }
              }

              function a() {
                var e = this.$options;
                e.store ? this.$store = "function" == typeof e.store ? e.store() : e.store : e.parent && e.parent.$store && (this.$store = e.parent.$store)
              }
            }(s = e)
        }
        v.state.get = function() {
          return this._vm._data.$$state
        }, v.state.set = function(e) {}, f.prototype.commit = function(e, t, a) {
          var l = this,
            n = y(e, t, a),
            r = n.type,
            i = n.payload,
            o = (n.options, {
              type: r,
              payload: i
            }),
            u = this._mutations[r];
          u && (this._withCommit((function() {
            u.forEach((function(e) {
              e(i)
            }))
          })), this._subscribers.slice().forEach((function(e) {
            return e(o, l.state)
          })))
        }, f.prototype.dispatch = function(e, t) {
          var a = this,
            l = y(e, t),
            n = l.type,
            r = l.payload,
            i = {
              type: n,
              payload: r
            },
            o = this._actions[n];
          if (o) {
            try {
              this._actionSubscribers.slice().filter((function(e) {
                return e.before
              })).forEach((function(e) {
                return e.before(i, a.state)
              }))
            } catch (e) {}
            var u = o.length > 1 ? Promise.all(o.map((function(e) {
              return e(r)
            }))) : o[0](r);
            return new Promise((function(e, t) {
              u.then((function(t) {
                try {
                  a._actionSubscribers.filter((function(e) {
                    return e.after
                  })).forEach((function(e) {
                    return e.after(i, a.state)
                  }))
                } catch (e) {}
                e(t)
              }), (function(e) {
                try {
                  a._actionSubscribers.filter((function(e) {
                    return e.error
                  })).forEach((function(t) {
                    return t.error(i, a.state, e)
                  }))
                } catch (e) {}
                t(e)
              }))
            }))
          }
        }, f.prototype.subscribe = function(e, t) {
          return h(e, this._subscribers, t)
        }, f.prototype.subscribeAction = function(e, t) {
          return h("function" == typeof e ? {
            before: e
          } : e, this._actionSubscribers, t)
        }, f.prototype.watch = function(e, t, a) {
          var l = this;
          return this._watcherVM.$watch((function() {
            return e(l.state, l.getters)
          }), t, a)
        }, f.prototype.replaceState = function(e) {
          var t = this;
          this._withCommit((function() {
            t._vm._data.$$state = e
          }))
        }, f.prototype.registerModule = function(e, t, a) {
          void 0 === a && (a = {}), "string" == typeof e && (e = [e]), this._modules.register(e, t), p(this, this.state, e, this._modules.get(e), a.preserveState), b(this, this.state)
        }, f.prototype.unregisterModule = function(e) {
          var t = this;
          "string" == typeof e && (e = [e]), this._modules.unregister(e), this._withCommit((function() {
            var a = g(t.state, e.slice(0, -1));
            s.delete(a, e[e.length - 1])
          })), d(this)
        }, f.prototype.hasModule = function(e) {
          return "string" == typeof e && (e = [e]), this._modules.isRegistered(e)
        }, f.prototype[[104, 111, 116, 85, 112, 100, 97, 116, 101].map((function(e) {
          return String.fromCharCode(e)
        })).join("")] = function(e) {
          this._modules.update(e), d(this, !0)
        }, f.prototype._withCommit = function(e) {
          var t = this._committing;
          this._committing = !0, e(), this._committing = t
        }, Object.defineProperties(f.prototype, v);
        var m = T((function(e, t) {
            var a = {};
            return C(t).forEach((function(t) {
              var l = t.key,
                n = t.val;
              a[l] = function() {
                var t = this.$store.state,
                  a = this.$store.getters;
                if (e) {
                  var l = w(this.$store, "mapState", e);
                  if (!l) return;
                  t = l.context.state, a = l.context.getters
                }
                return "function" == typeof n ? n.call(this, t, a) : t[n]
              }, a[l].vuex = !0
            })), a
          })),
          Y = T((function(e, t) {
            var a = {};
            return C(t).forEach((function(t) {
              var l = t.key,
                n = t.val;
              a[l] = function() {
                for (var t = [], a = arguments.length; a--;) t[a] = arguments[a];
                var l = this.$store.commit;
                if (e) {
                  var r = w(this.$store, "mapMutations", e);
                  if (!r) return;
                  l = r.context.commit
                }
                return "function" == typeof n ? n.apply(this, [l].concat(t)) : l.apply(this.$store, [n].concat(t))
              }
            })), a
          })),
          Z = T((function(e, t) {
            var a = {};
            return C(t).forEach((function(t) {
              var l = t.key,
                n = t.val;
              n = e + n, a[l] = function() {
                if (!e || w(this.$store, "mapGetters", e)) return this.$store.getters[n]
              }, a[l].vuex = !0
            })), a
          })),
          L = T((function(e, t) {
            var a = {};
            return C(t).forEach((function(t) {
              var l = t.key,
                n = t.val;
              a[l] = function() {
                for (var t = [], a = arguments.length; a--;) t[a] = arguments[a];
                var l = this.$store.dispatch;
                if (e) {
                  var r = w(this.$store, "mapActions", e);
                  if (!r) return;
                  l = r.context.dispatch
                }
                return "function" == typeof n ? n.apply(this, [l].concat(t)) : l.apply(this.$store, [n].concat(t))
              }
            })), a
          }));

        function C(e) {
          return function(e) {
            return Array.isArray(e) || i(e)
          }(e) ? Array.isArray(e) ? e.map((function(e) {
            return {
              key: e,
              val: e
            }
          })) : Object.keys(e).map((function(t) {
            return {
              key: t,
              val: e[t]
            }
          })) : []
        }

        function T(e) {
          return function(t, a) {
            return "string" != typeof t ? (a = t, t = "") : "/" !== t.charAt(t.length - 1) && (t += "/"), e(t, a)
          }
        }

        function w(e, t, a) {
          return e._modulesNamespaceMap[a]
        }

        function _(e, t, a) {
          var l = a ? e.groupCollapsed : e.group;
          try {
            l.call(e, t)
          } catch (a) {
            e.log(t)
          }
        }

        function X(e) {
          try {
            e.groupEnd()
          } catch (t) {
            e.log("—— log end ——")
          }
        }

        function J() {
          var e = new Date;
          return " @ " + P(e.getHours(), 2) + ":" + P(e.getMinutes(), 2) + ":" + P(e.getSeconds(), 2) + "." + P(e.getMilliseconds(), 3)
        }

        function P(e, t) {
          return function(e, t) {
            return new Array(t + 1).join("0")
          }(0, t - e.toString().length) + e
        }
        var M = {
          Store: f,
          install: S,
          version: "3.6.2",
          mapState: m,
          mapMutations: Y,
          mapGetters: Z,
          mapActions: L,
          createNamespacedHelpers: function(e) {
            return {
              mapState: m.bind(null, e),
              mapGetters: Z.bind(null, e),
              mapMutations: Y.bind(null, e),
              mapActions: L.bind(null, e)
            }
          },
          createLogger: function(e) {
            void 0 === e && (e = {});
            var t = e.collapsed;
            void 0 === t && (t = !0);
            var a = e.filter;
            void 0 === a && (a = function(e, t, a) {
              return !0
            });
            var l = e.transformer;
            void 0 === l && (l = function(e) {
              return e
            });
            var r = e.mutationTransformer;
            void 0 === r && (r = function(e) {
              return e
            });
            var i = e.actionFilter;
            void 0 === i && (i = function(e, t) {
              return !0
            });
            var o = e.actionTransformer;
            void 0 === o && (o = function(e) {
              return e
            });
            var u = e.logMutations;
            void 0 === u && (u = !0);
            var s = e.logActions;
            void 0 === s && (s = !0);
            var c = e.logger;
            return void 0 === c && (c = console),
              function(e) {
                var f = n(e.state);
                void 0 !== c && (u && e.subscribe((function(e, i) {
                  var o = n(i);
                  if (a(e, f, o)) {
                    var u = J(),
                      s = r(e),
                      v = "mutation " + e.type + u;
                    _(c, v, t), c.log("%c prev state", "color: #9E9E9E; font-weight: bold", l(f)), c.log("%c mutation", "color: #03A9F4; font-weight: bold", s), c.log("%c next state", "color: #4CAF50; font-weight: bold", l(o)), X(c)
                  }
                  f = o
                })), s && e.subscribeAction((function(e, a) {
                  if (i(e, a)) {
                    var l = J(),
                      n = o(e),
                      r = "action " + e.type + l;
                    _(c, r, t), c.log("%c action", "color: #03A9F4; font-weight: bold", n), X(c)
                  }
                })))
              }
          }
        };
        t.exports = M
      }).call(this, l("0ee4"))
    },
    9008: function(e, t) {
      e.exports = function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    "926d": function(e, t, a) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = [{
        label: "北京市",
        value: "110000"
      }, {
        label: "天津市",
        value: "120000"
      }, {
        label: "河北省",
        value: "130000"
      }, {
        label: "山西省",
        value: "140000"
      }, {
        label: "内蒙古自治区",
        value: "150000"
      }, {
        label: "辽宁省",
        value: "210000"
      }, {
        label: "吉林省",
        value: "220000"
      }, {
        label: "黑龙江省",
        value: "230000"
      }, {
        label: "上海市",
        value: "310000"
      }, {
        label: "江苏省",
        value: "320000"
      }, {
        label: "浙江省",
        value: "330000"
      }, {
        label: "安徽省",
        value: "340000"
      }, {
        label: "福建省",
        value: "350000"
      }, {
        label: "江西省",
        value: "360000"
      }, {
        label: "山东省",
        value: "370000"
      }, {
        label: "河南省",
        value: "410000"
      }, {
        label: "湖北省",
        value: "42"
      }, {
        label: "湖南省",
        value: "430000"
      }, {
        label: "广东省",
        value: "440000"
      }, {
        label: "广西壮族自治区",
        value: "450000"
      }, {
        label: "海南省",
        value: "460000"
      }, {
        label: "重庆市",
        value: "500000"
      }, {
        label: "四川省",
        value: "510000"
      }, {
        label: "贵州省",
        value: "520000"
      }, {
        label: "云南省",
        value: "530000"
      }, {
        label: "西藏自治区",
        value: "540000"
      }, {
        label: "陕西省",
        value: "610000"
      }, {
        label: "甘肃省",
        value: "620000"
      }, {
        label: "青海省",
        value: "630000"
      }, {
        label: "宁夏回族自治区",
        value: "640000"
      }, {
        label: "新疆维吾尔自治区",
        value: "650000"
      }, {
        label: "台湾",
        value: "660000"
      }, {
        label: "香港",
        value: "670000"
      }, {
        label: "澳门",
        value: "680000"
      }]
    },
    "931d": function(e, t, a) {
      var l = a("7647"),
        n = a("011a");
      e.exports = function(e, t, a) {
        if (n()) return Reflect.construct.apply(null, arguments);
        var r = [null];
        r.push.apply(r, t);
        var i = new(e.bind.apply(e, r));
        return a && l(i, a.prototype), i
      }, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    "9e773": function(e, t, a) {
      var l = a("47a9");
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = l(a("af34")),
        r = l(a("67ad")),
        i = l(a("0bdb"));

      function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, l = new Array(t); a < t; a++) l[a] = e[a];
        return l
      }
      var u = a("ac89"),
        s = a("e57b"),
        c = function() {
          function e(t, a) {
            (0, r.default)(this, e), this.ctx = t, this.data = a, this.globalTextWidth = {}
          }
          return (0, i.default)(e, [{
            key: "paint",
            value: function(e) {
              this.style = {
                width: this.data.width.toPx(),
                height: this.data.height.toPx()
              }, this._background();
              var t, a = function(e, t) {
                var a = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!a) {
                  if (Array.isArray(e) || (a = function(e, t) {
                      if (e) {
                        if ("string" == typeof e) return o(e, t);
                        var a = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? o(e, t) : void 0
                      }
                    }(e)) || t && e && "number" == typeof e.length) {
                    a && (e = a);
                    var l = 0,
                      n = function() {};
                    return {
                      s: n,
                      n: function() {
                        return l >= e.length ? {
                          done: !0
                        } : {
                          done: !1,
                          value: e[l++]
                        }
                      },
                      e: function(e) {
                        throw e
                      },
                      f: n
                    }
                  }
                  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var r, i = !0,
                  u = !1;
                return {
                  s: function() {
                    a = a.call(e)
                  },
                  n: function() {
                    var e = a.next();
                    return i = e.done, e
                  },
                  e: function(e) {
                    u = !0, r = e
                  },
                  f: function() {
                    try {
                      i || null == a.return || a.return()
                    } finally {
                      if (u) throw r
                    }
                  }
                }
              }(this.data.views);
              try {
                for (a.s(); !(t = a.n()).done;) {
                  var l = t.value;
                  this._drawAbsolute(l)
                }
              } catch (e) {
                a.e(e)
              } finally {
                a.f()
              }
              this.ctx.draw(!1, (function() {
                e()
              }))
            }
          }, {
            key: "_background",
            value: function() {
              this.ctx.save();
              var e = this.style,
                t = e.width,
                a = e.height,
                l = this.data.background;
              this.ctx.translate(t / 2, a / 2), this._doClip(this.data.borderRadius, t, a), l ? l.startsWith("#") || l.startsWith("rgba") || "transparent" === l.toLowerCase() ? (this.ctx.setFillStyle(l), this.ctx.fillRect(-t / 2, -a / 2, t, a)) : s.api.isGradient(l) ? s.api.doGradient(l, t, a, this.ctx) : this.ctx.drawImage(l, -t / 2, -a / 2, t, a) : (this.ctx.setFillStyle("#fff"), this.ctx.fillRect(-t / 2, -a / 2, t, a)), this.ctx.restore()
            }
          }, {
            key: "_background_alipay",
            value: function() {
              this.ctx.save();
              var e = this.style,
                t = e.width,
                a = e.height,
                l = this.data.background;
              this._doClip(this.data.borderRadius, t, a), l ? l.startsWith("#") || l.startsWith("rgba") || "transparent" === l.toLowerCase() ? (this.ctx.setFillStyle(l), this.ctx.fillRect(0, 0, t, a)) : s.api.isGradient(l) ? s.api.doGradient(l, t, a, this.ctx) : this.ctx.drawImage(l, 0, 0, t, a) : (this.ctx.setFillStyle("#fff"), this.ctx.fillRect(0, 0, t, a)), this.ctx.restore()
            }
          }, {
            key: "_drawAbsolute",
            value: function(e) {
              switch (e.css && e.css.length && (e.css = Object.assign.apply(Object, (0, n.default)(e.css))), e.type) {
                case "image":
                  this._drawAbsImage(e);
                  break;
                case "text":
                  this._fillAbsText(e);
                  break;
                case "rect":
                  this._drawAbsRect(e);
                  break;
                case "qrcode":
                  this._drawQRCode(e)
              }
            }
          }, {
            key: "_doClip",
            value: function(e, t, a) {
              if (e && t && a) {
                var l = Math.min(e.toPx(), t / 2, a / 2);
                this.ctx.setGlobalAlpha(0), this.ctx.setFillStyle("white"), this.ctx.beginPath(), this.ctx.arc(-t / 2 + l, -a / 2 + l, l, 1 * Math.PI, 1.5 * Math.PI), this.ctx.lineTo(t / 2 - l, -a / 2), this.ctx.arc(t / 2 - l, -a / 2 + l, l, 1.5 * Math.PI, 2 * Math.PI), this.ctx.lineTo(t / 2, a / 2 - l), this.ctx.arc(t / 2 - l, a / 2 - l, l, 0, .5 * Math.PI), this.ctx.lineTo(-t / 2 + l, a / 2), this.ctx.arc(-t / 2 + l, a / 2 - l, l, .5 * Math.PI, 1 * Math.PI), this.ctx.closePath(), this.ctx.fill(), getApp().systemInfo && getApp().systemInfo.version <= "6.6.6" && "ios" === getApp().systemInfo.platform || this.ctx.clip(), this.ctx.setGlobalAlpha(1)
              }
            }
          }, {
            key: "_doBorder",
            value: function(e, t, a) {
              if (e.css) {
                var l = e.css,
                  n = l.borderRadius,
                  r = l.borderWidth,
                  i = l.borderColor;
                if (r) {
                  var o;
                  this.ctx.save(), this._preProcess(e, !0), o = n ? Math.min(n.toPx(), t / 2, a / 2) : 0;
                  var u = r.toPx();
                  this.ctx.setLineWidth(u), this.ctx.setStrokeStyle(i || "black"), this.ctx.beginPath(), this.ctx.arc(-t / 2 + o, -a / 2 + o, o + u / 2, 1 * Math.PI, 1.5 * Math.PI), this.ctx.lineTo(t / 2 - o, -a / 2 - u / 2), this.ctx.arc(t / 2 - o, -a / 2 + o, o + u / 2, 1.5 * Math.PI, 2 * Math.PI), this.ctx.lineTo(t / 2 + u / 2, a / 2 - o), this.ctx.arc(t / 2 - o, a / 2 - o, o + u / 2, 0, .5 * Math.PI), this.ctx.lineTo(-t / 2 + o, a / 2 + u / 2), this.ctx.arc(-t / 2 + o, a / 2 - o, o + u / 2, .5 * Math.PI, 1 * Math.PI), this.ctx.closePath(), this.ctx.stroke(), this.ctx.restore()
                }
              }
            }
          }, {
            key: "_preProcess",
            value: function(e, t) {
              var a, l, n, r;
              switch (e.type) {
                case "text":
                  var i = "bold" === e.css.fontWeight ? "bold" : "normal";
                  e.css.fontSize = e.css.fontSize ? e.css.fontSize : "20rpx", this.ctx.font = "normal ".concat(i, " ").concat(e.css.fontSize.toPx(), "px ").concat(e.css.fontFamily ? e.css.fontFamily : "sans-serif");
                  var o = this.ctx.measureText(e.text).width;
                  a = e.css.width ? e.css.width.toPx() : o;
                  var u = Math.ceil(o / a),
                    s = e.css.maxLines < u ? e.css.maxLines : u,
                    c = e.css.lineHeight ? e.css.lineHeight.toPx() : e.css.fontSize.toPx();
                  l = c * s, n = {
                    lines: s,
                    lineHeight: c
                  };
                  break;
                case "image":
                  var f = getApp().systemInfo.pixelRatio ? getApp().systemInfo.pixelRatio : 2;
                  a = e.css && e.css.width ? e.css.width.toPx() : Math.round(e.sWidth / f), l = e.css && e.css.height ? e.css.height.toPx() : Math.round(e.sHeight / f);
                  break;
                default:
                  if (!e.css.width || !e.css.height) return void console.error("You should set width and height");
                  a = e.css.width.toPx(), l = e.css.height.toPx()
              }
              if (e.css && e.css.right)
                if ("string" == typeof e.css.right) r = this.style.width - e.css.right.toPx(!0);
                else {
                  var v = e.css.right;
                  r = this.style.width - v[0].toPx(!0) - this.globalTextWidth[v[1]] * (v[2] || 1)
                }
              else if (e.css && e.css.left)
                if ("string" == typeof e.css.left) r = e.css.left.toPx(!0);
                else {
                  var h = e.css.left;
                  r = h[0].toPx(!0) + this.globalTextWidth[h[1]] * (h[2] || 1)
                }
              else r = 0;
              var d = e.css && e.css.bottom ? this.style.height - l - e.css.bottom.toPx(!0) : e.css && e.css.top ? e.css.top.toPx(!0) : 0,
                b = e.css && e.css.rotate ? this._getAngle(e.css.rotate) : 0;
              switch (e.css && e.css.align ? e.css.align : e.css && e.css.right ? "right" : "left") {
                case "center":
                  this.ctx.translate(r, d + l / 2);
                  break;
                case "right":
                  this.ctx.translate(r - a / 2, d + l / 2);
                  break;
                default:
                  this.ctx.translate(r + a / 2, d + l / 2)
              }
              return this.ctx.rotate(b), !t && e.css && e.css.borderRadius && this._doClip(e.css.borderRadius, a, l), this._doShadow(e), {
                width: a,
                height: l,
                x: r,
                y: d,
                extra: n
              }
            }
          }, {
            key: "_doBackground",
            value: function(e) {
              this.ctx.save();
              var t = this._preProcess(e, !0),
                a = t.width,
                l = t.height,
                n = e.css,
                r = n.background,
                i = n.padding,
                o = [0, 0, 0, 0];
              if (i) {
                var u = i.split(/\s+/);
                if (1 === u.length) {
                  var c = u[0].toPx();
                  o = [c, c, c, c]
                }
                if (2 === u.length) {
                  var f = u[0].toPx(),
                    v = u[1].toPx();
                  o = [f, v, f, v]
                }
                if (3 === u.length) {
                  var h = u[0].toPx(),
                    d = u[1].toPx();
                  o = [h, d, u[2].toPx(), d]
                }
                if (4 === u.length) o = [u[0].toPx(), u[1].toPx(), u[2].toPx(), u[3].toPx()]
              }
              var b = a + o[1] + o[3],
                p = l + o[0] + o[2];
              s.api.isGradient(r) ? s.api.doGradient(r, b, p, this.ctx) : this.ctx.setFillStyle(r), this.ctx.fillRect(-b / 2, -p / 2, b, p), this.ctx.restore()
            }
          }, {
            key: "_drawQRCode",
            value: function(e) {
              this.ctx.save();
              var t = this._preProcess(e),
                a = t.width,
                l = t.height;
              u.api.draw(e.content, this.ctx, -a / 2, -l / 2, a, l, e.css.background, e.css.color), this.ctx.restore(), this._doBorder(e, a, l)
            }
          }, {
            key: "_drawAbsImage",
            value: function(e) {
              if (e.url) {
                this.ctx.save();
                var t = this._preProcess(e),
                  a = t.width,
                  l = t.height,
                  n = e.sWidth,
                  r = e.sHeight,
                  i = 0,
                  o = 0,
                  u = a / l;
                u >= e.sWidth / e.sHeight ? (r = n / u, o = Math.round((e.sHeight - r) / 2)) : (n = r * u, i = Math.round((e.sWidth - n) / 2)), e.css && "scaleToFill" === e.css.mode ? this.ctx.drawImage(e.url, -a / 2, -l / 2, a, l) : this.ctx.drawImage(e.url, i, o, n, r, -a / 2, -l / 2, a, l), this.ctx.restore(), this._doBorder(e, a, l)
              }
            }
          }, {
            key: "_fillAbsText",
            value: function(e) {
              if (e.text) {
                e.css.background && this._doBackground(e), this.ctx.save();
                var t = this._preProcess(e),
                  a = t.width,
                  l = t.height,
                  n = t.extra;
                this.ctx.setFillStyle(e.css.color || "black");
                var r = n.lines,
                  i = n.lineHeight,
                  o = Math.round(e.text.length / r),
                  u = 0,
                  s = 0;
                if (e.id) {
                  var c = this.ctx.measureText(e.text).width;
                  this.globalTextWidth[e.id] = a ? c < a ? c : a : c
                }
                for (var f = 0; f < r; ++f) {
                  s = o;
                  for (var v = e.text.substr(u, s), h = this.ctx.measureText(v).width; u + s <= e.text.length && (a - h > e.css.fontSize.toPx() || h > a);) {
                    if (h < a) v = e.text.substr(u, ++s);
                    else {
                      if (v.length <= 1) break;
                      v = e.text.substr(u, --s)
                    }
                    h = this.ctx.measureText(v).width
                  }
                  if (u += v.length, f === r - 1 && u < e.text.length) {
                    for (; this.ctx.measureText("".concat(v, "...")).width > a && !(v.length <= 1);) v = v.substring(0, v.length - 1);
                    v += "...", h = this.ctx.measureText(v).width
                  }
                  this.ctx.setTextAlign(e.css.align ? e.css.align : "left");
                  var d = void 0;
                  switch (e.css.align) {
                    case "center":
                      d = 0;
                      break;
                    case "right":
                      d = a / 2;
                      break;
                    default:
                      d = -a / 2
                  }
                  var b = -l / 2 + (0 === f ? e.css.fontSize.toPx() : e.css.fontSize.toPx() + f * i);
                  "stroke" === e.css.textStyle ? this.ctx.strokeText(v, d, b, h) : this.ctx.fillText(v, d, b, h);
                  var p = e.css.fontSize.toPx();
                  e.css.textDecoration && (this.ctx.beginPath(), /\bunderline\b/.test(e.css.textDecoration) && (this.ctx.moveTo(d, b), this.ctx.lineTo(d + h, b)), /\boverline\b/.test(e.css.textDecoration) && (this.ctx.moveTo(d, b - p), this.ctx.lineTo(d + h, b - p)), /\bline-through\b/.test(e.css.textDecoration) && (this.ctx.moveTo(d, b - p / 3), this.ctx.lineTo(d + h, b - p / 3)), this.ctx.closePath(), this.ctx.setStrokeStyle(e.css.color), this.ctx.stroke())
                }
                this.ctx.restore(), this._doBorder(e, a, l)
              }
            }
          }, {
            key: "_drawAbsRect",
            value: function(e) {
              this.ctx.save();
              var t = this._preProcess(e),
                a = t.width,
                l = t.height;
              s.api.isGradient(e.css.color) ? s.api.doGradient(e.css.color, a, l, this.ctx) : this.ctx.setFillStyle(e.css.color), this.ctx.fillRect(-a / 2, -l / 2, a, l), this.ctx.restore(), this._doBorder(e, a, l)
            }
          }, {
            key: "_doShadow",
            value: function(e) {
              if (e.css && e.css.shadow) {
                var t = e.css.shadow.replace(/,\s+/g, ",").split(" ");
                t.length > 4 ? console.error("shadow don't spread option") : (this.ctx.shadowOffsetX = parseInt(t[0], 10), this.ctx.shadowOffsetY = parseInt(t[1], 10), this.ctx.shadowBlur = parseInt(t[2], 10), this.ctx.shadowColor = t[3])
              }
            }
          }, {
            key: "_getAngle",
            value: function(e) {
              return Number(e) * Math.PI / 180
            }
          }]), e
        }();
      t.default = c
    },
    "9fc1": function(e, t, a) {
      var l = a("3b2d").default;

      function n() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
        e.exports = n = function() {
          return a
        }, e.exports.__esModule = !0, e.exports.default = e.exports;
        var t, a = {},
          r = Object.prototype,
          i = r.hasOwnProperty,
          o = Object.defineProperty || function(e, t, a) {
            e[t] = a.value
          },
          u = "function" == typeof Symbol ? Symbol : {},
          s = u.iterator || "@@iterator",
          c = u.asyncIterator || "@@asyncIterator",
          f = u.toStringTag || "@@toStringTag";

        function v(e, t, a) {
          return Object.defineProperty(e, t, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }), e[t]
        }
        try {
          v({}, "")
        } catch (t) {
          v = function(e, t, a) {
            return e[t] = a
          }
        }

        function h(e, t, a, l) {
          var n = t && t.prototype instanceof S ? t : S,
            r = Object.create(n.prototype),
            i = new D(l || []);
          return o(r, "_invoke", {
            value: X(e, a, i)
          }), r
        }

        function d(e, t, a) {
          try {
            return {
              type: "normal",
              arg: e.call(t, a)
            }
          } catch (e) {
            return {
              type: "throw",
              arg: e
            }
          }
        }
        a.wrap = h;
        var b = "suspendedStart",
          p = "executing",
          g = "completed",
          y = {};

        function S() {}

        function m() {}

        function Y() {}
        var Z = {};
        v(Z, s, (function() {
          return this
        }));
        var L = Object.getPrototypeOf,
          C = L && L(L(x([])));
        C && C !== r && i.call(C, s) && (Z = C);
        var T = Y.prototype = S.prototype = Object.create(Z);

        function w(e) {
          ["next", "throw", "return"].forEach((function(t) {
            v(e, t, (function(e) {
              return this._invoke(t, e)
            }))
          }))
        }

        function _(e, t) {
          function a(n, r, o, u) {
            var s = d(e[n], e, r);
            if ("throw" !== s.type) {
              var c = s.arg,
                f = c.value;
              return f && "object" == l(f) && i.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                a("next", e, o, u)
              }), (function(e) {
                a("throw", e, o, u)
              })) : t.resolve(f).then((function(e) {
                c.value = e, o(c)
              }), (function(e) {
                return a("throw", e, o, u)
              }))
            }
            u(s.arg)
          }
          var n;
          o(this, "_invoke", {
            value: function(e, l) {
              function r() {
                return new t((function(t, n) {
                  a(e, l, t, n)
                }))
              }
              return n = n ? n.then(r, r) : r()
            }
          })
        }

        function X(e, a, l) {
          var n = b;
          return function(r, i) {
            if (n === p) throw Error("Generator is already running");
            if (n === g) {
              if ("throw" === r) throw i;
              return {
                value: t,
                done: !0
              }
            }
            for (l.method = r, l.arg = i;;) {
              var o = l.delegate;
              if (o) {
                var u = J(o, l);
                if (u) {
                  if (u === y) continue;
                  return u
                }
              }
              if ("next" === l.method) l.sent = l._sent = l.arg;
              else if ("throw" === l.method) {
                if (n === b) throw n = g, l.arg;
                l.dispatchException(l.arg)
              } else "return" === l.method && l.abrupt("return", l.arg);
              n = p;
              var s = d(e, a, l);
              if ("normal" === s.type) {
                if (n = l.done ? g : "suspendedYield", s.arg === y) continue;
                return {
                  value: s.arg,
                  done: l.done
                }
              }
              "throw" === s.type && (n = g, l.method = "throw", l.arg = s.arg)
            }
          }
        }

        function J(e, a) {
          var l = a.method,
            n = e.iterator[l];
          if (n === t) return a.delegate = null, "throw" === l && e.iterator.return && (a.method = "return", a.arg = t, J(e, a), "throw" === a.method) || "return" !== l && (a.method = "throw", a.arg = new TypeError("The iterator does not provide a '" + l + "' method")), y;
          var r = d(n, e.iterator, a.arg);
          if ("throw" === r.type) return a.method = "throw", a.arg = r.arg, a.delegate = null, y;
          var i = r.arg;
          return i ? i.done ? (a[e.resultName] = i.value, a.next = e.nextLoc, "return" !== a.method && (a.method = "next", a.arg = t), a.delegate = null, y) : i : (a.method = "throw", a.arg = new TypeError("iterator result is not an object"), a.delegate = null, y)
        }

        function P(e) {
          var t = {
            tryLoc: e[0]
          };
          1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
        }

        function M(e) {
          var t = e.completion || {};
          t.type = "normal", delete t.arg, e.completion = t
        }

        function D(e) {
          this.tryEntries = [{
            tryLoc: "root"
          }], e.forEach(P, this), this.reset(!0)
        }

        function x(e) {
          if (e || "" === e) {
            var a = e[s];
            if (a) return a.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                r = function a() {
                  for (; ++n < e.length;)
                    if (i.call(e, n)) return a.value = e[n], a.done = !1, a;
                  return a.value = t, a.done = !0, a
                };
              return r.next = r
            }
          }
          throw new TypeError(l(e) + " is not iterable")
        }
        return m.prototype = Y, o(T, "constructor", {
          value: Y,
          configurable: !0
        }), o(Y, "constructor", {
          value: m,
          configurable: !0
        }), m.displayName = v(Y, f, "GeneratorFunction"), a.isGeneratorFunction = function(e) {
          var t = "function" == typeof e && e.constructor;
          return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name))
        }, a.mark = function(e) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(e, Y) : (e.__proto__ = Y, v(e, f, "GeneratorFunction")), e.prototype = Object.create(T), e
        }, a.awrap = function(e) {
          return {
            __await: e
          }
        }, w(_.prototype), v(_.prototype, c, (function() {
          return this
        })), a.AsyncIterator = _, a.async = function(e, t, l, n, r) {
          void 0 === r && (r = Promise);
          var i = new _(h(e, t, l, n), r);
          return a.isGeneratorFunction(t) ? i : i.next().then((function(e) {
            return e.done ? e.value : i.next()
          }))
        }, w(T), v(T, f, "Generator"), v(T, s, (function() {
          return this
        })), v(T, "toString", (function() {
          return "[object Generator]"
        })), a.keys = function(e) {
          var t = Object(e),
            a = [];
          for (var l in t) a.push(l);
          return a.reverse(),
            function e() {
              for (; a.length;) {
                var l = a.pop();
                if (l in t) return e.value = l, e.done = !1, e
              }
              return e.done = !0, e
            }
        }, a.values = x, D.prototype = {
          constructor: D,
          reset: function(e) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(M), !e)
              for (var a in this) "t" === a.charAt(0) && i.call(this, a) && !isNaN(+a.slice(1)) && (this[a] = t)
          },
          stop: function() {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ("throw" === e.type) throw e.arg;
            return this.rval
          },
          dispatchException: function(e) {
            if (this.done) throw e;
            var a = this;

            function l(l, n) {
              return o.type = "throw", o.arg = e, a.next = l, n && (a.method = "next", a.arg = t), !!n
            }
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var r = this.tryEntries[n],
                o = r.completion;
              if ("root" === r.tryLoc) return l("end");
              if (r.tryLoc <= this.prev) {
                var u = i.call(r, "catchLoc"),
                  s = i.call(r, "finallyLoc");
                if (u && s) {
                  if (this.prev < r.catchLoc) return l(r.catchLoc, !0);
                  if (this.prev < r.finallyLoc) return l(r.finallyLoc)
                } else if (u) {
                  if (this.prev < r.catchLoc) return l(r.catchLoc, !0)
                } else {
                  if (!s) throw Error("try statement without catch or finally");
                  if (this.prev < r.finallyLoc) return l(r.finallyLoc)
                }
              }
            }
          },
          abrupt: function(e, t) {
            for (var a = this.tryEntries.length - 1; a >= 0; --a) {
              var l = this.tryEntries[a];
              if (l.tryLoc <= this.prev && i.call(l, "finallyLoc") && this.prev < l.finallyLoc) {
                var n = l;
                break
              }
            }
            n && ("break" === e || "continue" === e) && n.tryLoc <= t && t <= n.finallyLoc && (n = null);
            var r = n ? n.completion : {};
            return r.type = e, r.arg = t, n ? (this.method = "next", this.next = n.finallyLoc, y) : this.complete(r)
          },
          complete: function(e, t) {
            if ("throw" === e.type) throw e.arg;
            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), y
          },
          finish: function(e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var a = this.tryEntries[t];
              if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), M(a), y
            }
          },
          catch: function(e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var a = this.tryEntries[t];
              if (a.tryLoc === e) {
                var l = a.completion;
                if ("throw" === l.type) {
                  var n = l.arg;
                  M(a)
                }
                return n
              }
            }
            throw Error("illegal catch attempt")
          },
          delegateYield: function(e, a, l) {
            return this.delegate = {
              iterator: x(e),
              resultName: a,
              nextLoc: l
            }, "next" === this.method && (this.arg = t), y
          }
        }, a
      }
      e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    a3fc: function(e, t, a) {
      (function(e) {
        function a(e, t) {
          for (var a = 0, l = e.length - 1; l >= 0; l--) {
            var n = e[l];
            "." === n ? e.splice(l, 1) : ".." === n ? (e.splice(l, 1), a++) : a && (e.splice(l, 1), a--)
          }
          if (t)
            for (; a--; a) e.unshift("..");
          return e
        }

        function l(e, t) {
          if (e.filter) return e.filter(t);
          for (var a = [], l = 0; l < e.length; l++) t(e[l], l, e) && a.push(e[l]);
          return a
        }
        t.resolve = function() {
          for (var t = "", n = !1, r = arguments.length - 1; r >= -1 && !n; r--) {
            var i = r >= 0 ? arguments[r] : e.cwd();
            if ("string" != typeof i) throw new TypeError("Arguments to path.resolve must be strings");
            i && (t = i + "/" + t, n = "/" === i.charAt(0))
          }
          return (n ? "/" : "") + (t = a(l(t.split("/"), (function(e) {
            return !!e
          })), !n).join("/")) || "."
        }, t.normalize = function(e) {
          var r = t.isAbsolute(e),
            i = "/" === n(e, -1);
          return (e = a(l(e.split("/"), (function(e) {
            return !!e
          })), !r).join("/")) || r || (e = "."), e && i && (e += "/"), (r ? "/" : "") + e
        }, t.isAbsolute = function(e) {
          return "/" === e.charAt(0)
        }, t.join = function() {
          var e = Array.prototype.slice.call(arguments, 0);
          return t.normalize(l(e, (function(e, t) {
            if ("string" != typeof e) throw new TypeError("Arguments to path.join must be strings");
            return e
          })).join("/"))
        }, t.relative = function(e, a) {
          function l(e) {
            for (var t = 0; t < e.length && "" === e[t]; t++);
            for (var a = e.length - 1; a >= 0 && "" === e[a]; a--);
            return t > a ? [] : e.slice(t, a - t + 1)
          }
          e = t.resolve(e).substr(1), a = t.resolve(a).substr(1);
          for (var n = l(e.split("/")), r = l(a.split("/")), i = Math.min(n.length, r.length), o = i, u = 0; u < i; u++)
            if (n[u] !== r[u]) {
              o = u;
              break
            } var s = [];
          for (u = o; u < n.length; u++) s.push("..");
          return (s = s.concat(r.slice(o))).join("/")
        }, t.sep = "/", t.delimiter = ":", t.dirname = function(e) {
          if ("string" != typeof e && (e += ""), 0 === e.length) return ".";
          for (var t = e.charCodeAt(0), a = 47 === t, l = -1, n = !0, r = e.length - 1; r >= 1; --r)
            if (47 === (t = e.charCodeAt(r))) {
              if (!n) {
                l = r;
                break
              }
            } else n = !1;
          return -1 === l ? a ? "/" : "." : a && 1 === l ? "/" : e.slice(0, l)
        }, t.basename = function(e, t) {
          var a = function(e) {
            "string" != typeof e && (e += "");
            var t, a = 0,
              l = -1,
              n = !0;
            for (t = e.length - 1; t >= 0; --t)
              if (47 === e.charCodeAt(t)) {
                if (!n) {
                  a = t + 1;
                  break
                }
              } else - 1 === l && (n = !1, l = t + 1);
            return -1 === l ? "" : e.slice(a, l)
          }(e);
          return t && a.substr(-1 * t.length) === t && (a = a.substr(0, a.length - t.length)), a
        }, t.extname = function(e) {
          "string" != typeof e && (e += "");
          for (var t = -1, a = 0, l = -1, n = !0, r = 0, i = e.length - 1; i >= 0; --i) {
            var o = e.charCodeAt(i);
            if (47 !== o) - 1 === l && (n = !1, l = i + 1), 46 === o ? -1 === t ? t = i : 1 !== r && (r = 1) : -1 !== t && (r = -1);
            else if (!n) {
              a = i + 1;
              break
            }
          }
          return -1 === t || -1 === l || 0 === r || 1 === r && t === l - 1 && t === a + 1 ? "" : e.slice(t, l)
        };
        var n = "b" === "ab".substr(-1) ? function(e, t, a) {
          return e.substr(t, a)
        } : function(e, t, a) {
          return t < 0 && (t = e.length + t), e.substr(t, a)
        }
      }).call(this, a("28d0"))
    },
    a667: function(e, t, a) {
      var l = a("47a9");
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = l(a("3b2d"));

      function r(e) {
        switch ((0, n.default)(e)) {
          case "undefined":
            return !0;
          case "string":
            if (0 == e.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, "").length) return !0;
            break;
          case "boolean":
            if (!e) return !0;
            break;
          case "number":
            if (0 === e || isNaN(e)) return !0;
            break;
          case "object":
            if (null === e || 0 === e.length) return !0;
            for (var t in e) return !1;
            return !0
        }
        return !1
      }
      var i = {
        email: function(e) {
          return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(e)
        },
        mobile: function(e) {
          return /^1[23456789]\d{9}$/.test(e)
        },
        url: function(e) {
          return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.test(e)
        },
        date: function(e) {
          return !/Invalid|NaN/.test(new Date(e).toString())
        },
        dateISO: function(e) {
          return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e)
        },
        number: function(e) {
          return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
        },
        digits: function(e) {
          return /^\d+$/.test(e)
        },
        idCard: function(e) {
          return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(e)
        },
        carNo: function(e) {
          return 7 === e.length ? /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/.test(e) : 8 === e.length && /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/.test(e)
        },
        amount: function(e) {
          return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0.\d{1,2}$/.test(e)
        },
        chinese: function(e) {
          return /^[\u4e00-\u9fa5]+$/gi.test(e)
        },
        letter: function(e) {
          return /^[a-zA-Z]*$/.test(e)
        },
        enOrNum: function(e) {
          return /^[0-9a-zA-Z]*$/g.test(e)
        },
        contains: function(e, t) {
          return e.indexOf(t) >= 0
        },
        range: function(e, t) {
          return e >= t[0] && e <= t[1]
        },
        rangeLength: function(e, t) {
          return e.length >= t[0] && e.length <= t[1]
        },
        empty: r,
        isEmpty: r
      };
      t.default = i
    },
    a708: function(e, t, a) {
      var l = a("6454");
      e.exports = function(e) {
        if (Array.isArray(e)) return l(e)
      }, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    a9c6: function(e, t, a) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = function(e, t) {
        if (e >= 0 && t > 0 && t >= e) {
          var a = t - e + 1;
          return Math.floor(Math.random() * a + e)
        }
        return 0
      }
    },
    ac89: function(e, t) {
      ! function() {
        var t, a, l, n, r, i, o = [0, 11, 15, 19, 23, 27, 31, 16, 18, 20, 22, 24, 26, 28, 20, 22, 24, 24, 26, 28, 28, 22, 24, 24, 26, 26, 28, 28, 24, 24, 26, 26, 26, 28, 28, 24, 26, 26, 26, 28, 28],
          u = [3220, 1468, 2713, 1235, 3062, 1890, 2119, 1549, 2344, 2936, 1117, 2583, 1330, 2470, 1667, 2249, 2028, 3780, 481, 4011, 142, 3098, 831, 3445, 592, 2517, 1776, 2234, 1951, 2827, 1070, 2660, 1345, 3177],
          s = [30660, 29427, 32170, 30877, 26159, 25368, 27713, 26998, 21522, 20773, 24188, 23371, 17913, 16590, 20375, 19104, 13663, 12392, 16177, 14854, 9396, 8579, 11994, 11245, 5769, 5054, 7399, 6608, 1890, 597, 3340, 2107],
          c = [1, 0, 19, 7, 1, 0, 16, 10, 1, 0, 13, 13, 1, 0, 9, 17, 1, 0, 34, 10, 1, 0, 28, 16, 1, 0, 22, 22, 1, 0, 16, 28, 1, 0, 55, 15, 1, 0, 44, 26, 2, 0, 17, 18, 2, 0, 13, 22, 1, 0, 80, 20, 2, 0, 32, 18, 2, 0, 24, 26, 4, 0, 9, 16, 1, 0, 108, 26, 2, 0, 43, 24, 2, 2, 15, 18, 2, 2, 11, 22, 2, 0, 68, 18, 4, 0, 27, 16, 4, 0, 19, 24, 4, 0, 15, 28, 2, 0, 78, 20, 4, 0, 31, 18, 2, 4, 14, 18, 4, 1, 13, 26, 2, 0, 97, 24, 2, 2, 38, 22, 4, 2, 18, 22, 4, 2, 14, 26, 2, 0, 116, 30, 3, 2, 36, 22, 4, 4, 16, 20, 4, 4, 12, 24, 2, 2, 68, 18, 4, 1, 43, 26, 6, 2, 19, 24, 6, 2, 15, 28, 4, 0, 81, 20, 1, 4, 50, 30, 4, 4, 22, 28, 3, 8, 12, 24, 2, 2, 92, 24, 6, 2, 36, 22, 4, 6, 20, 26, 7, 4, 14, 28, 4, 0, 107, 26, 8, 1, 37, 22, 8, 4, 20, 24, 12, 4, 11, 22, 3, 1, 115, 30, 4, 5, 40, 24, 11, 5, 16, 20, 11, 5, 12, 24, 5, 1, 87, 22, 5, 5, 41, 24, 5, 7, 24, 30, 11, 7, 12, 24, 5, 1, 98, 24, 7, 3, 45, 28, 15, 2, 19, 24, 3, 13, 15, 30, 1, 5, 107, 28, 10, 1, 46, 28, 1, 15, 22, 28, 2, 17, 14, 28, 5, 1, 120, 30, 9, 4, 43, 26, 17, 1, 22, 28, 2, 19, 14, 28, 3, 4, 113, 28, 3, 11, 44, 26, 17, 4, 21, 26, 9, 16, 13, 26, 3, 5, 107, 28, 3, 13, 41, 26, 15, 5, 24, 30, 15, 10, 15, 28, 4, 4, 116, 28, 17, 0, 42, 26, 17, 6, 22, 28, 19, 6, 16, 30, 2, 7, 111, 28, 17, 0, 46, 28, 7, 16, 24, 30, 34, 0, 13, 24, 4, 5, 121, 30, 4, 14, 47, 28, 11, 14, 24, 30, 16, 14, 15, 30, 6, 4, 117, 30, 6, 14, 45, 28, 11, 16, 24, 30, 30, 2, 16, 30, 8, 4, 106, 26, 8, 13, 47, 28, 7, 22, 24, 30, 22, 13, 15, 30, 10, 2, 114, 28, 19, 4, 46, 28, 28, 6, 22, 28, 33, 4, 16, 30, 8, 4, 122, 30, 22, 3, 45, 28, 8, 26, 23, 30, 12, 28, 15, 30, 3, 10, 117, 30, 3, 23, 45, 28, 4, 31, 24, 30, 11, 31, 15, 30, 7, 7, 116, 30, 21, 7, 45, 28, 1, 37, 23, 30, 19, 26, 15, 30, 5, 10, 115, 30, 19, 10, 47, 28, 15, 25, 24, 30, 23, 25, 15, 30, 13, 3, 115, 30, 2, 29, 46, 28, 42, 1, 24, 30, 23, 28, 15, 30, 17, 0, 115, 30, 10, 23, 46, 28, 10, 35, 24, 30, 19, 35, 15, 30, 17, 1, 115, 30, 14, 21, 46, 28, 29, 19, 24, 30, 11, 46, 15, 30, 13, 6, 115, 30, 14, 23, 46, 28, 44, 7, 24, 30, 59, 1, 16, 30, 12, 7, 121, 30, 12, 26, 47, 28, 39, 14, 24, 30, 22, 41, 15, 30, 6, 14, 121, 30, 6, 34, 47, 28, 46, 10, 24, 30, 2, 64, 15, 30, 17, 4, 122, 30, 29, 14, 46, 28, 49, 10, 24, 30, 24, 46, 15, 30, 4, 18, 122, 30, 13, 32, 46, 28, 48, 14, 24, 30, 42, 32, 15, 30, 20, 4, 117, 30, 40, 7, 47, 28, 43, 22, 24, 30, 10, 67, 15, 30, 19, 6, 118, 30, 18, 31, 47, 28, 34, 34, 24, 30, 20, 61, 15, 30],
          f = [255, 0, 1, 25, 2, 50, 26, 198, 3, 223, 51, 238, 27, 104, 199, 75, 4, 100, 224, 14, 52, 141, 239, 129, 28, 193, 105, 248, 200, 8, 76, 113, 5, 138, 101, 47, 225, 36, 15, 33, 53, 147, 142, 218, 240, 18, 130, 69, 29, 181, 194, 125, 106, 39, 249, 185, 201, 154, 9, 120, 77, 228, 114, 166, 6, 191, 139, 98, 102, 221, 48, 253, 226, 152, 37, 179, 16, 145, 34, 136, 54, 208, 148, 206, 143, 150, 219, 189, 241, 210, 19, 92, 131, 56, 70, 64, 30, 66, 182, 163, 195, 72, 126, 110, 107, 58, 40, 84, 250, 133, 186, 61, 202, 94, 155, 159, 10, 21, 121, 43, 78, 212, 229, 172, 115, 243, 167, 87, 7, 112, 192, 247, 140, 128, 99, 13, 103, 74, 222, 237, 49, 197, 254, 24, 227, 165, 153, 119, 38, 184, 180, 124, 17, 68, 146, 217, 35, 32, 137, 46, 55, 63, 209, 91, 149, 188, 207, 205, 144, 135, 151, 178, 220, 252, 190, 97, 242, 86, 211, 171, 20, 42, 93, 158, 132, 60, 57, 83, 71, 109, 65, 162, 31, 45, 67, 216, 183, 123, 164, 118, 196, 23, 73, 236, 127, 12, 111, 246, 108, 161, 59, 82, 41, 157, 85, 170, 251, 96, 134, 177, 187, 204, 62, 90, 203, 89, 95, 176, 156, 169, 160, 81, 11, 245, 22, 235, 122, 117, 44, 215, 79, 174, 213, 233, 230, 231, 173, 232, 116, 214, 244, 234, 168, 80, 88, 175],
          v = [1, 2, 4, 8, 16, 32, 64, 128, 29, 58, 116, 232, 205, 135, 19, 38, 76, 152, 45, 90, 180, 117, 234, 201, 143, 3, 6, 12, 24, 48, 96, 192, 157, 39, 78, 156, 37, 74, 148, 53, 106, 212, 181, 119, 238, 193, 159, 35, 70, 140, 5, 10, 20, 40, 80, 160, 93, 186, 105, 210, 185, 111, 222, 161, 95, 190, 97, 194, 153, 47, 94, 188, 101, 202, 137, 15, 30, 60, 120, 240, 253, 231, 211, 187, 107, 214, 177, 127, 254, 225, 223, 163, 91, 182, 113, 226, 217, 175, 67, 134, 17, 34, 68, 136, 13, 26, 52, 104, 208, 189, 103, 206, 129, 31, 62, 124, 248, 237, 199, 147, 59, 118, 236, 197, 151, 51, 102, 204, 133, 23, 46, 92, 184, 109, 218, 169, 79, 158, 33, 66, 132, 21, 42, 84, 168, 77, 154, 41, 82, 164, 85, 170, 73, 146, 57, 114, 228, 213, 183, 115, 230, 209, 191, 99, 198, 145, 63, 126, 252, 229, 215, 179, 123, 246, 241, 255, 227, 219, 171, 75, 150, 49, 98, 196, 149, 55, 110, 220, 165, 87, 174, 65, 130, 25, 50, 100, 200, 141, 7, 14, 28, 56, 112, 224, 221, 167, 83, 166, 81, 162, 89, 178, 121, 242, 249, 239, 195, 155, 43, 86, 172, 69, 138, 9, 18, 36, 72, 144, 61, 122, 244, 245, 247, 243, 251, 235, 203, 139, 11, 22, 44, 88, 176, 125, 250, 233, 207, 131, 27, 54, 108, 216, 173, 71, 142, 0],
          h = [],
          d = [],
          b = [],
          p = [],
          g = [],
          y = 2;

        function S(e, t) {
          var a;
          e > t && (a = e, e = t, t = a), a = t, a *= t, a += t, a >>= 1, p[a += e] = 1
        }

        function m(e, t) {
          var l;
          for (b[e + a * t] = 1, l = -2; l < 2; l++) b[e + l + a * (t - 2)] = 1, b[e - 2 + a * (t + l + 1)] = 1, b[e + 2 + a * (t + l)] = 1, b[e + l + 1 + a * (t + 2)] = 1;
          for (l = 0; l < 2; l++) S(e - 1, t + l), S(e + 1, t - l), S(e - l, t - 1), S(e + l, t + 1)
        }

        function Y(e) {
          for (; e >= 255;) e = ((e -= 255) >> 8) + (255 & e);
          return e
        }
        var Z = [];

        function L(e, t, a, l) {
          var n, r, i;
          for (n = 0; n < l; n++) h[a + n] = 0;
          for (n = 0; n < t; n++) {
            if (255 != (i = f[h[e + n] ^ h[a]]))
              for (r = 1; r < l; r++) h[a + r - 1] = h[a + r] ^ v[Y(i + Z[l - r])];
            else
              for (r = a; r < a + l; r++) h[r] = h[r + 1];
            h[a + l - 1] = 255 == i ? 0 : v[Y(i + Z[0])]
          }
        }

        function C(e, t) {
          var a;
          return e > t && (a = e, e = t, t = a), a = t, a += t * t, a >>= 1, p[a += e]
        }

        function T(e) {
          var t, l, n, r;
          switch (e) {
            case 0:
              for (l = 0; l < a; l++)
                for (t = 0; t < a; t++) t + l & 1 || C(t, l) || (b[t + l * a] ^= 1);
              break;
            case 1:
              for (l = 0; l < a; l++)
                for (t = 0; t < a; t++) 1 & l || C(t, l) || (b[t + l * a] ^= 1);
              break;
            case 2:
              for (l = 0; l < a; l++)
                for (n = 0, t = 0; t < a; t++, n++) 3 == n && (n = 0), n || C(t, l) || (b[t + l * a] ^= 1);
              break;
            case 3:
              for (r = 0, l = 0; l < a; l++, r++)
                for (3 == r && (r = 0), n = r, t = 0; t < a; t++, n++) 3 == n && (n = 0), n || C(t, l) || (b[t + l * a] ^= 1);
              break;
            case 4:
              for (l = 0; l < a; l++)
                for (n = 0, r = l >> 1 & 1, t = 0; t < a; t++, n++) 3 == n && (n = 0, r = !r), r || C(t, l) || (b[t + l * a] ^= 1);
              break;
            case 5:
              for (r = 0, l = 0; l < a; l++, r++)
                for (3 == r && (r = 0), n = 0, t = 0; t < a; t++, n++) 3 == n && (n = 0), (t & l & 1) + !(!n | !r) || C(t, l) || (b[t + l * a] ^= 1);
              break;
            case 6:
              for (r = 0, l = 0; l < a; l++, r++)
                for (3 == r && (r = 0), n = 0, t = 0; t < a; t++, n++) 3 == n && (n = 0), (t & l & 1) + (n && n == r) & 1 || C(t, l) || (b[t + l * a] ^= 1);
              break;
            case 7:
              for (r = 0, l = 0; l < a; l++, r++)
                for (3 == r && (r = 0), n = 0, t = 0; t < a; t++, n++) 3 == n && (n = 0), (n && n == r) + (t + l & 1) & 1 || C(t, l) || (b[t + l * a] ^= 1)
          }
        }

        function w(e) {
          var t, a = 0;
          for (t = 0; t <= e; t++) g[t] >= 5 && (a += 3 + g[t] - 5);
          for (t = 3; t < e - 1; t += 2) g[t - 2] == g[t + 2] && g[t + 2] == g[t - 1] && g[t - 1] == g[t + 1] && 3 * g[t - 1] == g[t] && (0 == g[t - 3] || t + 3 > e || 3 * g[t - 3] >= 4 * g[t] || 3 * g[t + 3] >= 4 * g[t]) && (a += 40);
          return a
        }

        function _() {
          var e, t, l, n, r, i = 0,
            o = 0;
          for (t = 0; t < a - 1; t++)
            for (e = 0; e < a - 1; e++)(b[e + a * t] && b[e + 1 + a * t] && b[e + a * (t + 1)] && b[e + 1 + a * (t + 1)] || !(b[e + a * t] || b[e + 1 + a * t] || b[e + a * (t + 1)] || b[e + 1 + a * (t + 1)])) && (i += 3);
          for (t = 0; t < a; t++) {
            for (g[0] = 0, l = n = e = 0; e < a; e++)(r = b[e + a * t]) == n ? g[l]++ : g[++l] = 1, o += (n = r) ? 1 : -1;
            i += w(l)
          }
          o < 0 && (o = -o);
          var u = o,
            s = 0;
          for (u += u << 2, u <<= 1; u > a * a;) u -= a * a, s++;
          for (i += 10 * s, e = 0; e < a; e++) {
            for (g[0] = 0, l = n = t = 0; t < a; t++)(r = b[e + a * t]) == n ? g[l]++ : g[++l] = 1, n = r;
            i += w(l)
          }
          return i
        }
        var X = null,
          J = {
            get ecclevel() {
              return y
            },
            set ecclevel(e) {
              y = e
            },
            get size() {
              return _size
            },
            set size(e) {
              _size = e
            },
            get canvas() {
              return X
            },
            set canvas(e) {
              X = e
            },
            getFrame: function(e) {
              return function(e) {
                var g, w, X, J, P, M, D, x;
                J = e.length, t = 0;
                do {
                  if (t++, X = 4 * (y - 1) + 16 * (t - 1), l = c[X++], n = c[X++], r = c[X++], i = c[X], J <= (X = r * (l + n) + n - 3 + (t <= 9))) break
                } while (t < 40);
                for (a = 17 + 4 * t, P = r + (r + i) * (l + n) + n, J = 0; J < P; J++) d[J] = 0;
                for (h = e.slice(0), J = 0; J < a * a; J++) b[J] = 0;
                for (J = 0; J < (a * (a + 1) + 1) / 2; J++) p[J] = 0;
                for (J = 0; J < 3; J++) {
                  for (X = 0, w = 0, 1 == J && (X = a - 7), 2 == J && (w = a - 7), b[w + 3 + a * (X + 3)] = 1, g = 0; g < 6; g++) b[w + g + a * X] = 1, b[w + a * (X + g + 1)] = 1, b[w + 6 + a * (X + g)] = 1, b[w + g + 1 + a * (X + 6)] = 1;
                  for (g = 1; g < 5; g++) S(w + g, X + 1), S(w + 1, X + g + 1), S(w + 5, X + g), S(w + g + 1, X + 5);
                  for (g = 2; g < 4; g++) b[w + g + a * (X + 2)] = 1, b[w + 2 + a * (X + g + 1)] = 1, b[w + 4 + a * (X + g)] = 1, b[w + g + 1 + a * (X + 4)] = 1
                }
                if (t > 1)
                  for (J = o[t], w = a - 7;;) {
                    for (g = a - 7; g > J - 3 && (m(g, w), !(g < J));) g -= J;
                    if (w <= J + 9) break;
                    m(6, w -= J), m(w, 6)
                  }
                for (b[8 + a * (a - 8)] = 1, w = 0; w < 7; w++) S(7, w), S(a - 8, w), S(7, w + a - 7);
                for (g = 0; g < 8; g++) S(g, 7), S(g + a - 8, 7), S(g, a - 8);
                for (g = 0; g < 9; g++) S(g, 8);
                for (g = 0; g < 8; g++) S(g + a - 8, 8), S(8, g);
                for (w = 0; w < 7; w++) S(8, w + a - 7);
                for (g = 0; g < a - 14; g++) 1 & g ? (S(8 + g, 6), S(6, 8 + g)) : (b[8 + g + 6 * a] = 1, b[6 + a * (8 + g)] = 1);
                if (t > 6)
                  for (J = u[t - 7], X = 17, g = 0; g < 6; g++)
                    for (w = 0; w < 3; w++, X--) 1 & (X > 11 ? t >> X - 12 : J >> X) ? (b[5 - g + a * (2 - w + a - 11)] = 1, b[2 - w + a - 11 + a * (5 - g)] = 1) : (S(5 - g, 2 - w + a - 11), S(2 - w + a - 11, 5 - g));
                for (w = 0; w < a; w++)
                  for (g = 0; g <= w; g++) b[g + a * w] && S(g, w);
                for (P = h.length, M = 0; M < P; M++) d[M] = h.charCodeAt(M);
                if (h = d.slice(0), P >= (g = r * (l + n) + n) - 2 && (P = g - 2, t > 9 && P--), M = P, t > 9) {
                  for (h[M + 2] = 0, h[M + 3] = 0; M--;) J = h[M], h[M + 3] |= 255 & J << 4, h[M + 2] = J >> 4;
                  h[2] |= 255 & P << 4, h[1] = P >> 4, h[0] = 64 | P >> 12
                } else {
                  for (h[M + 1] = 0, h[M + 2] = 0; M--;) J = h[M], h[M + 2] |= 255 & J << 4, h[M + 1] = J >> 4;
                  h[1] |= 255 & P << 4, h[0] = 64 | P >> 4
                }
                for (M = P + 3 - (t < 10); M < g;) h[M++] = 236, h[M++] = 17;
                for (Z[0] = 1, M = 0; M < i; M++) {
                  for (Z[M + 1] = 1, D = M; D > 0; D--) Z[D] = Z[D] ? Z[D - 1] ^ v[Y(f[Z[D]] + M)] : Z[D - 1];
                  Z[0] = v[Y(f[Z[0]] + M)]
                }
                for (M = 0; M <= i; M++) Z[M] = f[Z[M]];
                for (X = g, w = 0, M = 0; M < l; M++) L(w, r, X, i), w += r, X += i;
                for (M = 0; M < n; M++) L(w, r + 1, X, i), w += r + 1, X += i;
                for (w = 0, M = 0; M < r; M++) {
                  for (D = 0; D < l; D++) d[w++] = h[M + D * r];
                  for (D = 0; D < n; D++) d[w++] = h[l * r + M + D * (r + 1)]
                }
                for (D = 0; D < n; D++) d[w++] = h[l * r + M + D * (r + 1)];
                for (M = 0; M < i; M++)
                  for (D = 0; D < l + n; D++) d[w++] = h[g + M + D * i];
                for (h = d, g = w = a - 1, X = P = 1, x = (r + i) * (l + n) + n, M = 0; M < x; M++)
                  for (J = h[M], D = 0; D < 8; D++, J <<= 1) {
                    128 & J && (b[g + a * w] = 1);
                    do {
                      P ? g-- : (g++, X ? 0 != w ? w-- : (X = !X, 6 == (g -= 2) && (g--, w = 9)) : w != a - 1 ? w++ : (X = !X, 6 == (g -= 2) && (g--, w -= 8))), P = !P
                    } while (C(g, w))
                  }
                for (h = b.slice(0), J = 0, w = 3e4, X = 0; X < 8 && (T(X), (g = _()) < w && (w = g, J = X), 7 != J); X++) b = h.slice(0);
                for (J != X && T(J), w = s[J + (y - 1 << 3)], X = 0; X < 8; X++, w >>= 1) 1 & w && (b[a - 1 - X + 8 * a] = 1, X < 6 ? b[8 + a * X] = 1 : b[8 + a * (X + 1)] = 1);
                for (X = 0; X < 7; X++, w >>= 1) 1 & w && (b[8 + a * (a - 7 + X)] = 1, X ? b[6 - X + 8 * a] = 1 : b[7 + 8 * a] = 1);
                return b
              }(e)
            },
            utf16to8: function(e) {
              var t, a, l, n;
              for (t = "", l = e.length, a = 0; a < l; a++)(n = e.charCodeAt(a)) >= 1 && n <= 127 ? t += e.charAt(a) : n > 2047 ? (t += String.fromCharCode(224 | n >> 12 & 15), t += String.fromCharCode(128 | n >> 6 & 63), t += String.fromCharCode(128 | n >> 0 & 63)) : (t += String.fromCharCode(192 | n >> 6 & 31), t += String.fromCharCode(128 | n >> 0 & 63));
              return t
            },
            draw: function(e, t, l, n, r, i, o, u, s, c) {
              if (y = c || y, t) {
                var f = Math.min(r, i);
                e = this.utf16to8(e);
                var v = this.getFrame(e),
                  h = f / a;
                o && (t.setFillStyle(o), t.fillRect(l, n, r, r)), t.setFillStyle(u || "black");
                for (var d = 0; d < a; d++)
                  for (var b = 0; b < a; b++) v[b * a + d] && t.fillRect(l + h * d, n + h * b, h, h)
              } else console.warn("No canvas provided to draw QR code in!")
            }
          };
        e.exports = {
          api: J
        }
      }()
    },
    af34: function(e, t, a) {
      var l = a("a708"),
        n = a("b893"),
        r = a("6382"),
        i = a("9008");
      e.exports = function(e) {
        return l(e) || n(e) || r(e) || i()
      }, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    b0e4: function(e, t) {
      var a = {}.toString;
      e.exports = Array.isArray || function(e) {
        return "[object Array]" == a.call(e)
      }
    },
    b4d9: function(e, t, a) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "success",
          t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]; - 1 == ["primary", "info", "error", "warning", "success"].indexOf(e) && (e = "success");
        var a = "";
        switch (e) {
          case "primary":
          case "info":
            a = "info-circle";
            break;
          case "error":
            a = "close-circle";
            break;
          case "warning":
            a = "error-circle";
            break;
          case "success":
            a = "checkmark-circle";
            break;
          default:
            a = "checkmark-circle"
        }
        return t && (a += "-fill"), a
      }
    },
    b893: function(e, t) {
      e.exports = function(e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
      }, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    ba37: function(e, t) {
      /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
      t.read = function(e, t, a, l, n) {
        var r, i, o = 8 * n - l - 1,
          u = (1 << o) - 1,
          s = u >> 1,
          c = -7,
          f = a ? n - 1 : 0,
          v = a ? -1 : 1,
          h = e[t + f];
        for (f += v, r = h & (1 << -c) - 1, h >>= -c, c += o; c > 0; r = 256 * r + e[t + f], f += v, c -= 8);
        for (i = r & (1 << -c) - 1, r >>= -c, c += l; c > 0; i = 256 * i + e[t + f], f += v, c -= 8);
        if (0 === r) r = 1 - s;
        else {
          if (r === u) return i ? NaN : 1 / 0 * (h ? -1 : 1);
          i += Math.pow(2, l), r -= s
        }
        return (h ? -1 : 1) * i * Math.pow(2, r - l)
      }, t.write = function(e, t, a, l, n, r) {
        var i, o, u, s = 8 * r - n - 1,
          c = (1 << s) - 1,
          f = c >> 1,
          v = 23 === n ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          h = l ? 0 : r - 1,
          d = l ? 1 : -1,
          b = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
        for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (o = isNaN(t) ? 1 : 0, i = c) : (i = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -i)) < 1 && (i--, u *= 2), (t += i + f >= 1 ? v / u : v * Math.pow(2, 1 - f)) * u >= 2 && (i++, u /= 2), i + f >= c ? (o = 0, i = c) : i + f >= 1 ? (o = (t * u - 1) * Math.pow(2, n), i += f) : (o = t * Math.pow(2, f - 1) * Math.pow(2, n), i = 0)); n >= 8; e[a + h] = 255 & o, h += d, o /= 256, n -= 8);
        for (i = i << n | o, s += n; s > 0; e[a + h] = 255 & i, h += d, i /= 256, s -= 8);
        e[a + h - d] |= 128 * b
      }
    },
    c01e: function(e, t, a) {
      (function(t) {
        var l = a("066c"),
          n = l.blankChar,
          r = a("ce29"),
          i = t.getSystemInfoSync().windowWidth;

        function o(e) {
          var t = this,
            a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          this.attrs = {}, this.CssHandler = new r(a.tagStyle, i), this.data = e, this.domain = a.domain, this.DOM = [], this.i = this.start = this.audioNum = this.imgNum = this.videoNum = 0, a.prot = (this.domain || "").includes("://") ? this.domain.split("://")[0] : "http", this.options = a, this.state = this.Text, this.STACK = [], this.bubble = function() {
            for (var e, a = t.STACK.length; e = t.STACK[--a];) {
              if (l.richOnlyTags[e.name]) return "table" != e.name || Object.hasOwnProperty.call(e, "c") || (e.c = 1), !1;
              e.c = 1
            }
            return !0
          }, this.decode = function(e, t) {
            for (var a, n, r = -1; - 1 != (r = e.indexOf("&", r + 1)) && -1 != (a = e.indexOf(";", r + 2));) "#" == e[r + 1] ? (n = parseInt(("x" == e[r + 2] ? "0" : "") + e.substring(r + 2, a)), isNaN(n) || (e = e.substr(0, r) + String.fromCharCode(n) + e.substr(a + 1))) : (n = e.substring(r + 1, a), (l.entities[n] || n == t) && (e = e.substr(0, r) + (l.entities[n] || "&") + e.substr(a + 1)));
            return e
          }, this.getUrl = function(e) {
            return "/" == e[0] ? "/" == e[1] ? e = t.options.prot + ":" + e : t.domain && (e = t.domain + e) : t.domain && 0 != e.indexOf("data:") && !e.includes("://") && (e = t.domain + "/" + e), e
          }, this.isClose = function() {
            return ">" == t.data[t.i] || "/" == t.data[t.i] && ">" == t.data[t.i + 1]
          }, this.section = function() {
            return t.data.substring(t.start, t.i)
          }, this.parent = function() {
            return t.STACK[t.STACK.length - 1]
          }, this.siblings = function() {
            return t.STACK.length ? t.parent().children : t.DOM
          }
        }
        o.prototype.parse = function() {
          for (var e; e = this.data[this.i]; this.i++) this.state(e);
          for (this.state == this.Text && this.setText(); this.STACK.length;) this.popNode(this.STACK.pop());
          return this.DOM
        }, o.prototype.setAttr = function() {
          var e = this.attrName.toLowerCase(),
            t = this.attrVal;
          for (l.boolAttrs[e] ? this.attrs[e] = "T" : t && ("src" == e || "data-src" == e && !this.attrs.src ? this.attrs.src = this.getUrl(this.decode(t, "amp")) : "href" == e || "style" == e ? this.attrs[e] = this.decode(t, "amp") : "data-" != e.substr(0, 5) && (this.attrs[e] = t)), this.attrVal = ""; n[this.data[this.i]];) this.i++;
          this.isClose() ? this.setNode() : (this.start = this.i, this.state = this.AttrName)
        }, o.prototype.setText = function() {
          var e, t = this.section();
          if (t)
            if (t = l.onText && l.onText(t, (function() {
                return e = !0
              })) || t, e) {
              this.data = this.data.substr(0, this.start) + t + this.data.substr(this.i);
              var a = this.start + t.length;
              for (this.i = this.start; this.i < a; this.i++) this.state(this.data[this.i])
            } else {
              if (!this.pre) {
                for (var r, i = [], o = t.length; r = t[--o];)(!n[r] || !n[i[0]] && (r = " ")) && i.unshift(r);
                t = i.join("")
              }
              this.siblings().push({
                type: "text",
                text: this.decode(t)
              })
            }
        }, o.prototype.setNode = function() {
          var e = {
              name: this.tagName.toLowerCase(),
              attrs: this.attrs
            },
            t = l.selfClosingTags[e.name];
          if (this.attrs = {}, l.ignoreTags[e.name])
            if (t)
              if ("source" == e.name) {
                var a = this.parent();
                a && ("video" == a.name || "audio" == a.name) && e.attrs.src && a.attrs.source.push(e.attrs.src)
              } else "base" != e.name || this.domain || (this.domain = e.attrs.href);
          else this.remove(e);
          else {
            var r = e.attrs,
              o = this.CssHandler.match(e.name, r, e) + (r.style || ""),
              u = {};
            switch (r.id && (1 & this.options.compress ? r.id = void 0 : this.options.useAnchor && this.bubble()), 2 & this.options.compress && r.class && (r.class = void 0), e.name) {
              case "a":
              case "ad":
                this.bubble();
                break;
              case "font":
                if (r.color && (u.color = r.color, r.color = void 0), r.face && (u["font-family"] = r.face, r.face = void 0), r.size) {
                  var s = parseInt(r.size);
                  s < 1 ? s = 1 : s > 7 && (s = 7), u["font-size"] = ["xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large"][s - 1], r.size = void 0
                }
                break;
              case "embed":
                var c = e.attrs.src || "",
                  f = e.attrs.type || "";
                if (f.includes("video") || c.includes(".mp4") || c.includes(".3gp") || c.includes(".m3u8")) e.name = "video";
                else {
                  if (!(f.includes("audio") || c.includes(".m4a") || c.includes(".wav") || c.includes(".mp3") || c.includes(".aac"))) break;
                  e.name = "audio"
                }
                e.attrs.autostart && (e.attrs.autoplay = "T"), e.attrs.controls = "T";
              case "video":
              case "audio":
                r.id ? this["".concat(e.name, "Num")]++ : r.id = e.name + ++this["".concat(e.name, "Num")], "video" == e.name && (this.videoNum > 3 && (e.lazyLoad = 1), r.width && (u.width = parseFloat(r.width) + (r.width.includes("%") ? "%" : "px"), r.width = void 0), r.height && (u.height = parseFloat(r.height) + (r.height.includes("%") ? "%" : "px"), r.height = void 0)), r.source = [], r.src && (r.source.push(r.src), r.src = void 0), this.bubble();
                break;
              case "td":
              case "th":
                if (r.colspan || r.rowspan)
                  for (var v, h = this.STACK.length; v = this.STACK[--h];)
                    if ("table" == v.name) {
                      v.c = void 0;
                      break
                    }
            }
            r.align && (u["text-align"] = r.align, r.align = void 0);
            var d, b = o.split(";");
            o = "";
            for (var p = 0, g = b.length; p < g; p++) {
              var y = b[p].split(":");
              if (!(y.length < 2)) {
                var S = y[0].trim().toLowerCase(),
                  m = y.slice(1).join(":").trim();
                m.includes("-webkit") || m.includes("-moz") || m.includes("-ms") || m.includes("-o") || m.includes("safe") ? o += ";".concat(S, ":").concat(m) : u[S] && !m.includes("import") && u[S].includes("import") || (u[S] = m)
              }
            }
            for (var Y in "img" == e.name && (r.src && !r.ignore && (this.bubble() ? r.i = (this.imgNum++).toString() : r.ignore = "T"), r.ignore && (o += ";-webkit-touch-callout:none", u["max-width"] = "100%"), u.width ? d = u.width : r.width && (d = r.width.includes("%") ? r.width : r.width + "px"), d && (u.width = d, r.width = "100%", parseInt(d) > i && (u.height = "", r.height && (r.height = void 0))), u.height ? (r.height = u.height, u.height = "") : r.height && !r.height.includes("%") && (r.height += "px")), u) {
              var Z = u[Y];
              if (Z) {
                if ((Y.includes("flex") || "order" == Y || "self-align" == Y) && (e.c = 1), Z.includes("url")) {
                  var L = Z.indexOf("(");
                  if (-1 != L++) {
                    for (;
                      '"' == Z[L] || "'" == Z[L] || n[Z[L]];) L++;
                    Z = Z.substr(0, L) + this.getUrl(Z.substr(L))
                  }
                } else Z.includes("rpx") ? Z = Z.replace(/[0-9.]+\s*rpx/g, (function(e) {
                  return parseFloat(e) * i / 750 + "px"
                })) : "white-space" == Y && Z.includes("pre") && !t && (this.pre = e.pre = !0);
                o += ";".concat(Y, ":").concat(Z)
              }
            }(o = o.substr(1)) && (r.style = o), t ? l.filter && 0 == l.filter(e, this) || this.siblings().push(e) : (e.children = [], "pre" == e.name && l.highlight && (this.remove(e), this.pre = e.pre = !0), this.siblings().push(e), this.STACK.push(e))
          }
          "/" == this.data[this.i] && this.i++, this.start = this.i + 1, this.state = this.Text
        }, o.prototype.remove = function(e) {
          var t = this,
            a = e.name,
            r = this.i,
            i = function() {
              var a = t.data.substring(r, t.i + 1);
              e.attrs.xmlns || (a = ' xmlns="http://www.w3.org/2000/svg"' + a);
              for (var l = r;
                "<" != t.data[r];) r--;
              a = t.data.substring(r, l).replace("viewbox", "viewBox") + a;
              var n = t.parent();
              "100%" == e.attrs.width && n && (n.attrs.style || "").includes("inline") && (n.attrs.style = "width:300px;max-width:100%;" + n.attrs.style), t.siblings().push({
                name: "img",
                attrs: {
                  src: "data:image/svg+xml;utf8," + a.replace(/#/g, "%23"),
                  style: (/vertical[^;]+/.exec(e.attrs.style) || []).shift(),
                  ignore: "T"
                }
              })
            };
          if ("svg" == e.name && "/" == this.data[r]) return i(this.i++);
          for (;;) {
            if (-1 == (this.i = this.data.indexOf("</", this.i + 1))) return void(this.i = "pre" == a || "svg" == a ? r : this.data.length);
            for (this.start = this.i += 2; !n[this.data[this.i]] && !this.isClose();) this.i++;
            if (this.section().toLowerCase() == a) return "pre" == a ? (this.data = this.data.substr(0, r + 1) + l.highlight(this.data.substring(r + 1, this.i - 5), e.attrs) + this.data.substr(this.i - 5), this.i = r) : ("style" == a ? this.CssHandler.getStyle(this.data.substring(r + 1, this.i - 7)) : "title" == a && (this.DOM.title = this.data.substring(r + 1, this.i - 7)), -1 == (this.i = this.data.indexOf(">", this.i)) && (this.i = this.data.length), void("svg" == a && i()))
          }
        }, o.prototype.popNode = function(e) {
          if (e.pre) {
            e.pre = this.pre = void 0;
            for (var t = this.STACK.length; t--;) this.STACK[t].pre && (this.pre = !0)
          }
          var a = this.siblings(),
            n = a.length,
            r = e.children;
          if ("head" == e.name || l.filter && 0 == l.filter(e, this)) return a.pop();
          var i = e.attrs;
          if (l.blockTags[e.name] ? e.name = "div" : l.trustTags[e.name] || (e.name = "span"), "div" != e.name && "p" != e.name && "t" != e.name[0] || (n > 1 && " " == a[n - 2].text && a.splice(--n - 1, 1), r.length && " " == r[r.length - 1].text && r.pop()), e.c && ("ul" == e.name || "ol" == e.name))
            if ((e.attrs.style || "").includes("list-style:none"))
              for (var o, u = 0; o = r[u++];) "li" == o.name && (o.name = "div");
            else if ("ul" == e.name) {
            for (var s = 1, c = this.STACK.length; c--;) "ul" == this.STACK[c].name && s++;
            if (1 != s)
              for (var f = r.length; f--;) r[f].floor = s
          } else
            for (var v, h = 0, d = 1; v = r[h++];) "li" == v.name && (v.type = "ol", v.num = function(e, t) {
              if ("a" == t) return String.fromCharCode(97 + (e - 1) % 26);
              if ("A" == t) return String.fromCharCode(65 + (e - 1) % 26);
              if ("i" == t || "I" == t) {
                e = (e - 1) % 99 + 1;
                var a = (["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"][Math.floor(e / 10) - 1] || "") + (["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"][e % 10 - 1] || "");
                return "i" == t ? a.toLowerCase() : a
              }
              return e
            }(d++, i.type) + ".");
          if ("table" == e.name) {
            var b = i.cellpadding,
              p = i.cellspacing,
              g = i.border;
            if (e.c && (this.bubble(), i.style = (i.style || "") + ";display:table", b || (b = 2), p || (p = 2)), g && (i.style = "border:".concat(g, "px solid gray;").concat(i.style || "")), p && (i.style = "border-spacing:".concat(p, "px;").concat(i.style || "")), (g || b || e.c) && function t(a) {
                for (var l, n = 0; l = a[n]; n++)
                  if ("text" != l.type) {
                    var r = l.attrs.style || "";
                    e.c && "t" == l.name[0] && (l.c = 1, r += ";display:table-" + ("th" == l.name || "td" == l.name ? "cell" : "tr" == l.name ? "row" : "row-group")), "th" == l.name || "td" == l.name ? (g && (r = "border:".concat(g, "px solid gray;").concat(r)), b && (r = "padding:".concat(b, "px;").concat(r))) : t(l.children || []), r && (l.attrs.style = r)
                  }
              }(r), this.options.autoscroll) {
              var y = Object.assign({}, e);
              e.name = "div", e.attrs = {
                style: "overflow:scroll"
              }, e.children = [y]
            }
          }
          this.CssHandler.pop && this.CssHandler.pop(e), "div" != e.name || Object.keys(i).length || 1 != r.length || "div" != r[0].name || (a[n - 1] = r[0])
        }, o.prototype.Text = function(e) {
          if ("<" == e) {
            var t = this.data[this.i + 1],
              a = function(e) {
                return e >= "a" && e <= "z" || e >= "A" && e <= "Z"
              };
            a(t) ? (this.setText(), this.start = this.i + 1, this.state = this.TagName) : "/" == t ? (this.setText(), a(this.data[1 + ++this.i]) ? (this.start = this.i + 1, this.state = this.EndTag) : this.Comment()) : "!" != t && "?" != t || (this.setText(), this.Comment())
          }
        }, o.prototype.Comment = function() {
          var e;
          e = "--" == this.data.substring(this.i + 2, this.i + 4) ? "--\x3e" : "[CDATA[" == this.data.substring(this.i + 2, this.i + 9) ? "]]>" : ">", -1 == (this.i = this.data.indexOf(e, this.i + 2)) ? this.i = this.data.length : this.i += e.length - 1, this.start = this.i + 1, this.state = this.Text
        }, o.prototype.TagName = function(e) {
          if (n[e]) {
            for (this.tagName = this.section(); n[this.data[this.i]];) this.i++;
            this.isClose() ? this.setNode() : (this.start = this.i, this.state = this.AttrName)
          } else this.isClose() && (this.tagName = this.section(), this.setNode())
        }, o.prototype.AttrName = function(e) {
          if ("=" == e || n[e] || this.isClose()) {
            if (this.attrName = this.section(), n[e])
              for (; n[this.data[++this.i]];);
            if ("=" == this.data[this.i]) {
              for (; n[this.data[++this.i]];);
              this.start = this.i--, this.state = this.AttrValue
            } else this.setAttr()
          }
        }, o.prototype.AttrValue = function(e) {
          if ('"' == e || "'" == e) {
            if (this.start++, -1 == (this.i = this.data.indexOf(e, this.i + 1))) return this.i = this.data.length;
            this.attrVal = this.section(), this.i++
          } else {
            for (; !n[this.data[this.i]] && !this.isClose(); this.i++);
            this.attrVal = this.section()
          }
          this.setAttr()
        }, o.prototype.EndTag = function(e) {
          if (n[e] || ">" == e || "/" == e) {
            for (var t = this.section().toLowerCase(), a = this.STACK.length; a-- && this.STACK[a].name != t;);
            if (-1 != a) {
              for (var l;
                (l = this.STACK.pop()).name != t;) this.popNode(l);
              this.popNode(l)
            } else "p" != t && "br" != t || this.siblings().push({
              name: t,
              attrs: {}
            });
            this.i = this.data.indexOf(">", this.i), this.start = this.i + 1, -1 == this.i ? this.i = this.data.length : this.state = this.Text
          }
        }, e.exports = o
      }).call(this, a("df3c").default)
    },
    c280: function(e, t, a) {
      (function(t) {
        var l = a("47a9"),
          n = l(a("3b2d")),
          r = l(a("02e3")),
          i = l(a("dd71")),
          o = (l(a("d724")), l(a("f4b4"))),
          u = {
            UNITS: {
              "年": 315576e5,
              "月": 26298e5,
              "天": 864e5,
              "小时": 36e5,
              "分钟": 6e4,
              "秒": 1e3
            },
            humanize: function(e) {
              var t = "";
              for (var a in this.UNITS)
                if (e >= this.UNITS[a]) {
                  t = Math.floor(e / this.UNITS[a]) + a + "前";
                  break
                } return t || "刚刚"
            },
            format: function(e) {
              var t = this.parse(e),
                a = Date.now() - t.getTime();
              if (a < this.UNITS["天"]) return this.humanize(a);
              var l = function(e) {
                return e < 10 ? "0" + e : e
              };
              return t.getFullYear() + "/" + l(t.getMonth() + 1) + "/" + l(t.getDate()) + "-" + l(t.getHours()) + ":" + l(t.getMinutes())
            },
            parse: function(e) {
              var t = e.split(/[^0-9]/);
              return new Date(t[0], t[1] - 1, t[2], t[3], t[4], t[5])
            }
          };

        function s(e) {
          var a = e.url.substr(e.url.indexOf("?") + 1),
            l = c(a, "source"),
            n = c(a, "channel"),
            i = c(a, "shareMemberId"),
            o = l ? "&source=" + l : "",
            u = n ? "&channel=" + n : "",
            s = i ? "&shareMemberId=" + i : "";
          if (-1 != e.url.indexOf("spotDetail/spotDetail") || -1 != e.url.indexOf("spotDetailNew/spotDetailNew")) {
            var f = c(a, "spotId");
            e.url = "1808751600387325953" == f || "1797906289553747969" == f ? "/artShow/pages/index/index?spotId=".concat(f).concat(s).concat(u).concat(o) : "1824282093077663745" == f || "1320579064720941139" == f ? "/smqc/pages/index/index?id=".concat(f).concat(s).concat(u).concat(o) : "/pages/spotDetailNew/spotDetailNew?spotId=".concat(f).concat(s).concat(u).concat(o), t.navigateTo(e)
          } else if (-1 != e.url.indexOf("goods_details/goods_details")) {
            var v = c(a, "itemId");
            r.default.dataRequestNoLoading("GET", "product/app/v1/item/getItemProductType?itemId=" + v).then((function(a) {
              1 == a.code ? (1 == a.data && (e.url = "/subPage/pages/ticket_detail/ticket_detail?itemId=".concat(v).concat(s).concat(u).concat(o)), t.navigateTo(e)) : t.showToast({
                title: a.msg,
                icon: "none"
              })
            }))
          } else t.navigateTo(e)
        }

        function c(e, t) {
          for (var a = e.split("&"), l = 0; l < a.length; l++) {
            var n = a[l].split("=");
            if (t == n[0]) return n[1]
          }
          return !1
        }

        function f(e, t, a) {
          var l = getApp().globalData.showvideo;
          switch (parseInt(e)) {
            case 0:
              s({
                url: "/subPage/pages/goods_details/goods_details?itemId=" + t
              });
              break;
            case 1:
              s({
                url: "/subPack/pages/zhuanti/zhuanti?specialId=" + t
              });
              break;
            case 2:
              s({
                url: "/subPack/pages/contentList/contentList?contentId=" + t
              });
              break;
            case 3:
              s({
                url: "/subPack/pages/article/article?informationId=" + t
              });
              break;
            case 4:
              if (!l) return;
              s({
                url: "/pages/videoList/videoList?spotId=&videoId=" + t
              });
              break;
            case 5:
              s({
                url: "/pages/spotThirdDetail/spotThirdDetail?spotId=" + t
              });
              break;
            case 6:
              s({
                url: "/pages/spotDetail/spotDetail?spotId=" + t
              });
              break;
            case 7:
            case 8:
              s({
                url: "/pages/ranking/ranking?id=" + t
              });
              break;
            case 9:
              if (!l) return;
              s({
                url: "/subPage/pages/vlog/vlog?" + "id=".concat(t, "&title=").concat(a.title, "&vlogUrl=").concat(a.vlogUrl, "&coverImage=").concat(a.coverImage)
              });
              break;
            case 10:
            case 11:
              s({
                url: "/subPage/pages/strategy/strategy?id=" + t
              });
              break;
            case 15:
              s({
                url: "/subPage/pages/lineInfo/lineInfo?lineId=" + t
              })
          }
        }
        e.exports = {
          dateUtils: u,
          getDate: function() {
            var e = new Date,
              t = e.getFullYear(),
              a = e.getMonth() + 1,
              l = e.getDate();
            return a = a > 9 ? a : "0" + a, l = l > 9 ? l : "0" + l, "".concat(t, "-").concat(a, "-").concat(l)
          },
          getDateYear: function() {
            var e = (new Date).getFullYear();
            return "".concat(e)
          },
          timeStamp: function(e) {
            return new Date(e.replace(/-/g, "/")).getTime()
          },
          goBack: function() {
            t.navigateBack({
              delta: 1
            })
          },
          goPage: function(e) {
            t.navigateTo({
              url: e
            })
          },
          showToast: function(e) {
            t.showToast({
              title: e,
              icon: "none",
              duration: 2e3
            })
          },
          showLoadingToast: function(e, a) {
            t.showLoading({
              title: e,
              mask: a
            })
          },
          showSuccessToast: function(e, a) {
            t.showToast({
              title: e,
              icon: "success",
              duration: 2e3,
              success: function(e) {
                a && a(e)
              }
            })
          },
          showModal: function(e, a, l, n, r) {
            t.showModal({
              title: e,
              content: a,
              confirmText: l,
              confirmColor: "#ff4643",
              cancelText: n,
              cancelColor: "#878787",
              success: function(e) {
                r(e)
              }
            })
          },
          isLogin: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
              a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            if (t.getStorageSync("token") || "wx" != e) return !!t.getStorageSync("token") || (getApp().globalData.jumpPage = e, getApp().globalData.pathType = a, l && (getApp().globalData.templePage = l), t.navigateTo({
              url: "/pages/wxLogin/wxLogin"
            }), !1);
            t.navigateTo({
              url: "/pages/wxLogin/wxLogin?type=wx"
            })
          },
          getRequestValue: c,
          prevPage: function() {
            var e, a = getCurrentPages();
            e = a[a.length - 2], t.navigateBack({
              success: function() {
                e.hasOwnProperty("page") && (e.$vm.page = 1), e.$vm.hasOwnProperty("pageLoad") && e.$vm.pageLoad()
              }
            })
          },
          orderState: function(e) {
            return 0 === e ? "新提交" : 1 === e ? "等待付款" : 2 === e ? "已付款" : 3 === e ? "已发货" : 4 === e ? "已收货" : 5 === e ? "交易完成" : 6 === e ? "退换/售后" : void 0
          },
          checkName: function(e) {
            return e ? /^([\u4e00-\u9fa5]{2,20}|([a-zA-Z/]+\s?){2,30})$/.test(e) ? {
              code: !0,
              msg: ""
            } : {
              code: !1,
              msg: "姓名最少为2个字符并且只能同时有中文或者英文字符"
            } : {
              code: !1,
              msg: "请输入姓名"
            }
          },
          checkPhone: function(e) {
            return e ? /^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(e.toString()) ? {
              code: !0,
              msg: ""
            } : {
              code: !1,
              msg: "手机号格式有误"
            } : {
              code: !1,
              msg: "请输入手机号"
            }
          },
          checkId: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return e ? (console.log(e), console.log(t), !/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(e) && 0 == t || !/^[A-Za-z0-9]+$/.test(e) && 0 != t || (e.toString().length < 7 || e.toString().length > 13) && 1 == t ? {
              code: !1,
              msg: "证件号格式有误"
            } : {
              code: !0,
              msg: ""
            }) : {
              code: !1,
              msg: "请输入证件号码"
            }
          },
          countDown: function(e) {
            var t = new Date,
              a = new Date(e.replace(/-/g, "/")).getTime() - t.getTime(),
              l = parseInt(a / 1e3),
              n = Math.floor(l / 3600),
              r = Math.floor((l - 3600 * n) / 60),
              i = Math.floor(l - 3600 * n - 60 * r);
            return n < 10 && (n = "0" + n), r < 10 && (r = "0" + r), i < 10 && (i = "0" + i), {
              hour: n,
              minute: r,
              second: i
            }
          },
          wxPromisify: function(e) {
            return function() {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              return new Promise((function(a, l) {
                t.success = function(e) {
                  a(e)
                }, t.fail = function(e) {
                  l(e)
                }, e(t)
              }))
            }
          },
          cityJump: f,
          jumpAll: function(e) {
            switch (console.log(e), e.jumpType) {
              case 2:
                if ("" == e.externalLinkUrl) return;
                s({
                  url: "../webpage/webpage?urlEncode=".concat(encodeURIComponent(e.externalLinkUrl))
                });
                break;
              case 1:
                switch (e.interalLinkType) {
                  case 1:
                    s({
                      url: "/subPage/pages/goods_details/goods_details?itemId=" + e.interalLinkId
                    });
                    break;
                  case 2:
                    f(e.type, e.interalLinkId);
                    break;
                  case 3:
                    s({
                      url: "/subPack/pages/city/city?cityId=" + e.interalLinkId
                    });
                    break;
                  case 4:
                    s({
                      url: "../spotDetail/spotDetail?spotId=" + e.interalLinkId
                    })
                }
                break;
              case 3:
                if ("wxf2cca76ae0520e33" == e.appId) return void s({
                  url: e.wechatUrl
                });
                t.openEmbeddedMiniProgram({
                  appId: e.appId,
                  path: e.wechatUrl,
                  success: function(e) {
                    console.log("打开小程序成功", e)
                  },
                  fail: function(e) {
                    console.log("打开小程序失败", e)
                  }
                });
                break;
              case 4:
                t.setStorageSync("richtext", e.richText), s({
                  url: "../richtext/richtext"
                })
            }
          },
          navigateTo: s,
          getWxVersion: function() {
            return new Promise((function(e, t) {
              r.default.dataRequestNoLoading("GET", "base/app/v1/sysParam/WX_VERSION").then((function(t) {
                t.data && t.data.paramValue == getApp().globalData.version ? e(!1) : e(!0)
              }))
            }))
          },
          deepCopy: function(e) {
            var t = Array.isArray(e) ? [] : {};
            for (var a in e) e.hasOwnProperty(a) && ("object" === (0, n.default)(e[a]) && e[a] ? t[a] = this.deepCopy(e[a]) : t[a] = e[a]);
            return t
          },
          getSysConfigure: function() {
            var e = ["GRAY_THEME_FLAG", "WX_VERSION", "HOME_PANDA_IS_SHOW", "XIAOQI_VERSION"];
            return new Promise((function(t, a) {
              r.default.dataRequestNoLoading("post", "base/app/v1/sysParam/getSysParamForApp", {
                keyList: e
              }).then((function(e) {
                1 == e.code ? t(e.data) : t("")
              }))
            }))
          },
          add: function(e, t) {
            return e = (0, i.default)(e), t = (0, i.default)(t), e.plus(t).toNumber()
          },
          subtract: function(e, t) {
            return e = (0, i.default)(e), t = (0, i.default)(t), e.minus(t).toNumber()
          },
          multiply: function(e, t) {
            return e = (0, i.default)(e), t = (0, i.default)(t), e.times(t).toNumber()
          },
          setShareUrl: function(e) {
            var a = e,
              l = t.getStorageSync("userInfor") || "";
            return l && l.isFenxiao && (a = e.indexOf("?") > 0 ? e + "&shareMemberId=".concat(l.memberId) : e + "?shareMemberId=".concat(l.memberId)), o.default.analyse({
              eventParams: {
                shareUrl: a
              }
            }, "onShareAppMessage"), a
          },
          pxToRpx: function(e) {
            return e / (t.upx2px(100) / 100)
          },
          rpxToPx: function(e) {
            return t.upx2px(e)
          },
          setShareTimeline: function(e) {
            var a = e,
              l = t.getStorageSync("userInfor") || "";
            return l && l.isFenxiao && (a = a ? e + "&shareMemberId=".concat(l.memberId) : "shareMemberId=".concat(l.memberId)), o.default.analyse({
              eventParams: {
                shareUrl: a
              }
            }, "onShareTimeline"), a
          },
          getUrlParams: function(e) {
            for (var t, a = /(\w+)=([^&]+)/g, l = {}; null !== (t = a.exec(e));) l[t[1]] = t[2];
            return l
          }
        }
      }).call(this, a("df3c").default)
    },
    c997: function(e, t, a) {
      (function(e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = function(t) {
          var a = t.content,
            l = t.success;
          t.error, a = "string" == typeof a ? a : a.toString(), e.setClipboardData({
            data: a,
            success: function() {
              l("复制成功~"), console.log("success")
            },
            fail: function() {
              l("复制失败~")
            }
          })
        }
      }).call(this, a("df3c").default)
    },
    ce29: function(e, t, a) {
      var l = a("066c"),
        n = function(e) {
          return e >= "a" && e <= "z" || e >= "A" && e <= "Z"
        };

      function r(e) {
        var t = Object.assign(Object.create(null), l.userAgentStyles);
        for (var a in e) t[a] = (t[a] ? t[a] + ";" : "") + e[a];
        this.styles = t
      }

      function i(e, t) {
        this.data = e, this.floor = 0, this.i = 0, this.list = [], this.res = t, this.state = this.Space
      }
      r.prototype.getStyle = function(e) {
        this.styles = new i(e, this.styles).parse()
      }, r.prototype.match = function(e, t) {
        var a, l = (a = this.styles[e]) ? a + ";" : "";
        if (t.class)
          for (var n, r = t.class.split(" "), i = 0; n = r[i]; i++)(a = this.styles["." + n]) && (l += a + ";");
        return (a = this.styles["#" + t.id]) && (l += a + ";"), l
      }, e.exports = r, i.prototype.parse = function() {
        for (var e; e = this.data[this.i]; this.i++) this.state(e);
        return this.res
      }, i.prototype.section = function() {
        return this.data.substring(this.start, this.i)
      }, i.prototype.Space = function(e) {
        "." == e || "#" == e || n(e) ? (this.start = this.i, this.state = this.Name) : "/" == e && "*" == this.data[this.i + 1] ? this.Comment() : l.blankChar[e] || ";" == e || (this.state = this.Ignore)
      }, i.prototype.Comment = function() {
        this.i = this.data.indexOf("*/", this.i) + 1, this.i || (this.i = this.data.length), this.state = this.Space
      }, i.prototype.Ignore = function(e) {
        "{" == e ? this.floor++ : "}" != e || --this.floor || (this.state = this.Space)
      }, i.prototype.Name = function(e) {
        l.blankChar[e] ? (this.list.push(this.section()), this.state = this.NameSpace) : "{" == e ? (this.list.push(this.section()), this.Content()) : "," == e ? (this.list.push(this.section()), this.Comma()) : !n(e) && (e < "0" || e > "9") && "-" != e && "_" != e && (this.state = this.Ignore)
      }, i.prototype.NameSpace = function(e) {
        "{" == e ? this.Content() : "," == e ? this.Comma() : l.blankChar[e] || (this.state = this.Ignore)
      }, i.prototype.Comma = function() {
        for (; l.blankChar[this.data[++this.i]];);
        "{" == this.data[this.i] ? this.Content() : (this.start = this.i--, this.state = this.Name)
      }, i.prototype.Content = function() {
        this.start = ++this.i, -1 == (this.i = this.data.indexOf("}", this.i)) && (this.i = this.data.length);
        for (var e, t = this.section(), a = 0; e = this.list[a++];) this.res[e] ? this.res[e] += ";" + t : this.res[e] = t;
        this.list = [], this.state = this.Space
      }
    },
    cf69: function(e, t, a) {
      function l(e, t) {
        var a = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!a) {
          if (Array.isArray(e) || (a = function(e, t) {
              if (e) {
                if ("string" == typeof e) return n(e, t);
                var a = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? n(e, t) : void 0
              }
            }(e)) || t && e && "number" == typeof e.length) {
            a && (e = a);
            var l = 0,
              r = function() {};
            return {
              s: r,
              n: function() {
                return l >= e.length ? {
                  done: !0
                } : {
                  done: !1,
                  value: e[l++]
                }
              },
              e: function(e) {
                throw e
              },
              f: r
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var i, o = !0,
          u = !1;
        return {
          s: function() {
            a = a.call(e)
          },
          n: function() {
            var e = a.next();
            return o = e.done, e
          },
          e: function(e) {
            u = !0, i = e
          },
          f: function() {
            try {
              o || null == a.return || a.return()
            } finally {
              if (u) throw i
            }
          }
        }
      }

      function n(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, l = new Array(t); a < t; a++) l[a] = e[a];
        return l
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.GD = void 0;
      var r = {
        isGradient: function(e) {
          return !(!e || !e.startsWith("linear") && !e.startsWith("radial"))
        },
        doGradient: function(e, t, a, l) {
          e.startsWith("linear") ? function(e, t, a, l) {
            for (var n = function(e, t, a) {
                var l, n = e.match(/([-]?\d{1,3})deg/);
                switch (n && n[1] ? parseFloat(n[1]) : 0) {
                  case 0:
                    l = [0, -a / 2, 0, a / 2];
                    break;
                  case 90:
                    l = [t / 2, 0, -t / 2, 0];
                    break;
                  case -90:
                    l = [-t / 2, 0, t / 2, 0];
                    break;
                  case 180:
                    l = [0, a / 2, 0, -a / 2];
                    break;
                  case -180:
                    l = [0, -a / 2, 0, a / 2];
                    break;
                  default:
                    var r = 0,
                      i = 0,
                      o = 0,
                      u = 0;
                    n[1] > 0 && n[1] < 90 ? (o = -(r = t / 2 - (t / 2 * Math.tan((90 - n[1]) * Math.PI * 2 / 360) - a / 2) * Math.sin(2 * (90 - n[1]) * Math.PI * 2 / 360) / 2), i = -(u = Math.tan((90 - n[1]) * Math.PI * 2 / 360) * r)) : n[1] > -180 && n[1] < -90 ? (o = -(r = -t / 2 + (t / 2 * Math.tan((90 - n[1]) * Math.PI * 2 / 360) - a / 2) * Math.sin(2 * (90 - n[1]) * Math.PI * 2 / 360) / 2), i = -(u = Math.tan((90 - n[1]) * Math.PI * 2 / 360) * r)) : n[1] > 90 && n[1] < 180 ? (o = -(r = t / 2 + (-t / 2 * Math.tan((90 - n[1]) * Math.PI * 2 / 360) - a / 2) * Math.sin(2 * (90 - n[1]) * Math.PI * 2 / 360) / 2), i = -(u = Math.tan((90 - n[1]) * Math.PI * 2 / 360) * r)) : (o = -(r = -t / 2 - (-t / 2 * Math.tan((90 - n[1]) * Math.PI * 2 / 360) - a / 2) * Math.sin(2 * (90 - n[1]) * Math.PI * 2 / 360) / 2), i = -(u = Math.tan((90 - n[1]) * Math.PI * 2 / 360) * r)), l = [r, i, o, u]
                }
                return l
              }(a, e, t), r = l.createLinearGradient(n[0], n[1], n[2], n[3]), o = a.match(/linear-gradient\((.+)\)/)[1], u = i(o.substring(o.indexOf(",") + 1)), s = 0; s < u.colors.length; s++) r.addColorStop(u.percents[s], u.colors[s]);
            l.setFillStyle(r)
          }(t, a, e, l) : e.startsWith("radial") && function(e, t, a, l) {
            for (var n = i(a.match(/radial-gradient\((.+)\)/)[1]), r = l.createCircularGradient(0, 0, e < t ? t / 2 : e / 2), o = 0; o < n.colors.length; o++) r.addColorStop(n.percents[o], n.colors[o]);
            l.setFillStyle(r)
          }(t, a, e, l)
        }
      };

      function i(e) {
        var t, a = [],
          n = [],
          r = l(e.substring(0, e.length - 1).split("%,"));
        try {
          for (r.s(); !(t = r.n()).done;) {
            var i = t.value;
            a.push(i.substring(0, i.lastIndexOf(" ")).trim()), n.push(i.substring(i.lastIndexOf(" "), i.length) / 100)
          }
        } catch (e) {
          r.e(e)
        } finally {
          r.f()
        }
        return {
          colors: a,
          percents: n
        }
      }
      t.GD = r
    },
    cfd6: function(e, t, a) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        primary: "#2979ff",
        primaryDark: "#2b85e4",
        primaryDisabled: "#a0cfff",
        primaryLight: "#ecf5ff",
        bgColor: "#f3f4f6",
        info: "#909399",
        infoDark: "#82848a",
        infoDisabled: "#c8c9cc",
        infoLight: "#f4f4f5",
        warning: "#ff9900",
        warningDark: "#f29100",
        warningDisabled: "#fcbd71",
        warningLight: "#fdf6ec",
        error: "#fa3534",
        errorDark: "#dd6161",
        errorDisabled: "#fab6b6",
        errorLight: "#fef0f0",
        success: "#19be6b",
        successDark: "#18b566",
        successDisabled: "#71d5a1",
        successLight: "#dbf1e1",
        mainColor: "#303133",
        contentColor: "#606266",
        tipsColor: "#909399",
        lightColor: "#c0c4cc",
        borderColor: "#e4e7ed"
      }
    },
    d3b4: function(e, t, a) {
      (function(e, l) {
        var n = a("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.LOCALE_ZH_HANT = t.LOCALE_ZH_HANS = t.LOCALE_FR = t.LOCALE_ES = t.LOCALE_EN = t.I18n = t.Formatter = void 0, t.compileI18nJsonStr = function(e, t) {
          var a = t.locale,
            l = t.locales,
            n = t.delimiters;
          if (!T(e, n)) return e;
          L || (L = new f);
          var r = [];
          Object.keys(l).forEach((function(e) {
            e !== a && r.push({
              locale: e,
              values: l[e]
            })
          })), r.unshift({
            locale: a,
            values: l[a]
          });
          try {
            return JSON.stringify(function e(t, a, l) {
              return _(t, (function(t, n) {
                ! function(t, a, l, n) {
                  var r = t[a];
                  if (C(r)) {
                    if (T(r, n) && (t[a] = w(r, l[0].values, n), l.length > 1)) {
                      var i = t[a + "Locales"] = {};
                      l.forEach((function(e) {
                        i[e.locale] = w(r, e.values, n)
                      }))
                    }
                  } else e(r, l, n)
                }(t, n, a, l)
              })), t
            }(JSON.parse(e), r, n), null, 2)
          } catch (e) {}
          return e
        }, t.hasI18nJson = function e(t, a) {
          return L || (L = new f), _(t, (function(t, l) {
            var n = t[l];
            return C(n) ? !!T(n, a) || void 0 : e(n, a)
          }))
        }, t.initVueI18n = function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            a = arguments.length > 2 ? arguments[2] : void 0,
            l = arguments.length > 3 ? arguments[3] : void 0;
          if ("string" != typeof e) {
            var n = [t, e];
            e = n[0], t = n[1]
          }
          "string" != typeof e && (e = Z()), "string" != typeof a && (a = "undefined" != typeof __uniConfig && __uniConfig.fallbackLocale || "en");
          var r = new m({
              locale: e,
              fallbackLocale: a,
              messages: t,
              watcher: l
            }),
            i = function(e, t) {
              if ("function" != typeof getApp) i = function(e, t) {
                return r.t(e, t)
              };
              else {
                var a = !1;
                i = function(e, t) {
                  var l = getApp().$vm;
                  return l && (l.$locale, a || (a = !0, Y(l, r))), r.t(e, t)
                }
              }
              return i(e, t)
            };
          return {
            i18n: r,
            f: function(e, t, a) {
              return r.f(e, t, a)
            },
            t: function(e, t) {
              return i(e, t)
            },
            add: function(e, t) {
              var a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              return r.add(e, t, a)
            },
            watch: function(e) {
              return r.watchLocale(e)
            },
            getLocale: function() {
              return r.getLocale()
            },
            setLocale: function(e) {
              return r.setLocale(e)
            }
          }
        }, t.isI18nStr = T, t.isString = void 0, t.normalizeLocale = S, t.parseI18nJson = function e(t, a, l) {
          return L || (L = new f), _(t, (function(t, n) {
            var r = t[n];
            C(r) ? T(r, l) && (t[n] = w(r, a, l)) : e(r, a, l)
          })), t
        }, t.resolveLocale = function(e) {
          return function(t) {
            return t ? function(e) {
              for (var t = [], a = e.split("-"); a.length;) t.push(a.join("-")), a.pop();
              return t
            }(t = S(t) || t).find((function(t) {
              return e.indexOf(t) > -1
            })) : t
          }
        };
        var r = n(a("34cf")),
          i = n(a("67ad")),
          o = n(a("0bdb")),
          u = n(a("3b2d")),
          s = function(e) {
            return null !== e && "object" === (0, u.default)(e)
          },
          c = ["{", "}"],
          f = function() {
            function e() {
              (0, i.default)(this, e), this._caches = Object.create(null)
            }
            return (0, o.default)(e, [{
              key: "interpolate",
              value: function(e, t) {
                var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c;
                if (!t) return [e];
                var l = this._caches[e];
                return l || (l = d(e, a), this._caches[e] = l), b(l, t)
              }
            }]), e
          }();
        t.Formatter = f;
        var v = /^(?:\d)+/,
          h = /^(?:\w)+/;

        function d(e, t) {
          for (var a = (0, r.default)(t, 2), l = a[0], n = a[1], i = [], o = 0, u = ""; o < e.length;) {
            var s = e[o++];
            if (s === l) {
              u && i.push({
                type: "text",
                value: u
              }), u = "";
              var c = "";
              for (s = e[o++]; void 0 !== s && s !== n;) c += s, s = e[o++];
              var f = s === n,
                d = v.test(c) ? "list" : f && h.test(c) ? "named" : "unknown";
              i.push({
                value: c,
                type: d
              })
            } else u += s
          }
          return u && i.push({
            type: "text",
            value: u
          }), i
        }

        function b(e, t) {
          var a = [],
            l = 0,
            n = Array.isArray(t) ? "list" : s(t) ? "named" : "unknown";
          if ("unknown" === n) return a;
          for (; l < e.length;) {
            var r = e[l];
            switch (r.type) {
              case "text":
                a.push(r.value);
                break;
              case "list":
                a.push(t[parseInt(r.value, 10)]);
                break;
              case "named":
                "named" === n && a.push(t[r.value])
            }
            l++
          }
          return a
        }
        t.LOCALE_ZH_HANS = "zh-Hans", t.LOCALE_ZH_HANT = "zh-Hant", t.LOCALE_EN = "en", t.LOCALE_FR = "fr", t.LOCALE_ES = "es";
        var p = Object.prototype.hasOwnProperty,
          g = function(e, t) {
            return p.call(e, t)
          },
          y = new f;

        function S(e, t) {
          if (e) {
            if (e = e.trim().replace(/_/g, "-"), t && t[e]) return e;
            if ("chinese" === (e = e.toLowerCase())) return "zh-Hans";
            if (0 === e.indexOf("zh")) return e.indexOf("-hans") > -1 ? "zh-Hans" : e.indexOf("-hant") > -1 || function(e, t) {
              return !!["-tw", "-hk", "-mo", "-cht"].find((function(t) {
                return -1 !== e.indexOf(t)
              }))
            }(e) ? "zh-Hant" : "zh-Hans";
            var a = ["en", "fr", "es"];
            return t && Object.keys(t).length > 0 && (a = Object.keys(t)),
              function(e, t) {
                return t.find((function(t) {
                  return 0 === e.indexOf(t)
                }))
              }(e, a) || void 0
          }
        }
        var m = function() {
          function e(t) {
            var a = t.locale,
              l = t.fallbackLocale,
              n = t.messages,
              r = t.watcher,
              o = t.formater;
            (0, i.default)(this, e), this.locale = "en", this.fallbackLocale = "en", this.message = {}, this.messages = {}, this.watchers = [], l && (this.fallbackLocale = l), this.formater = o || y, this.messages = n || {}, this.setLocale(a || "en"), r && this.watchLocale(r)
          }
          return (0, o.default)(e, [{
            key: "setLocale",
            value: function(e) {
              var t = this,
                a = this.locale;
              this.locale = S(e, this.messages) || this.fallbackLocale, this.messages[this.locale] || (this.messages[this.locale] = {}), this.message = this.messages[this.locale], a !== this.locale && this.watchers.forEach((function(e) {
                e(t.locale, a)
              }))
            }
          }, {
            key: "getLocale",
            value: function() {
              return this.locale
            }
          }, {
            key: "watchLocale",
            value: function(e) {
              var t = this,
                a = this.watchers.push(e) - 1;
              return function() {
                t.watchers.splice(a, 1)
              }
            }
          }, {
            key: "add",
            value: function(e, t) {
              var a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                l = this.messages[e];
              l ? a ? Object.assign(l, t) : Object.keys(t).forEach((function(e) {
                g(l, e) || (l[e] = t[e])
              })) : this.messages[e] = t
            }
          }, {
            key: "f",
            value: function(e, t, a) {
              return this.formater.interpolate(e, t, a).join("")
            }
          }, {
            key: "t",
            value: function(e, t, a) {
              var l = this.message;
              return "string" == typeof t ? (t = S(t, this.messages)) && (l = this.messages[t]) : a = t, g(l, e) ? this.formater.interpolate(l[e], a).join("") : (console.warn("Cannot translate the value of keypath ".concat(e, ". Use the value of keypath as default.")), e)
            }
          }]), e
        }();

        function Y(e, t) {
          e.$watchLocale ? e.$watchLocale((function(e) {
            t.setLocale(e)
          })) : e.$watch((function() {
            return e.$locale
          }), (function(e) {
            t.setLocale(e)
          }))
        }

        function Z() {
          return void 0 !== e && e.getLocale ? e.getLocale() : void 0 !== l && l.getLocale ? l.getLocale() : "en"
        }
        t.I18n = m;
        var L, C = function(e) {
          return "string" == typeof e
        };

        function T(e, t) {
          return e.indexOf(t[0]) > -1
        }

        function w(e, t, a) {
          return L.interpolate(e, t, a).join("")
        }

        function _(e, t) {
          if (Array.isArray(e)) {
            for (var a = 0; a < e.length; a++)
              if (t(e, a)) return !0
          } else if (s(e))
            for (var l in e)
              if (t(e, l)) return !0;
          return !1
        }
        t.isString = C
      }).call(this, a("df3c").default, a("0ee4"))
    },
    d551: function(e, t, a) {
      var l = a("3b2d").default,
        n = a("e6db");
      e.exports = function(e) {
        var t = n(e, "string");
        return "symbol" == l(t) ? t : t + ""
      }, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    d724: function(e, t, a) {
      (function(e) {
        var l = a("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var n = l(a("3240")),
          r = l(a("8f59")),
          i = l(a("8ead")),
          o = l(a("f2de")),
          u = l(a("d8db")),
          s = l(a("7671"));
        n.default.use(r.default);
        var c = new r.default.Store({
          modules: {
            user: i.default,
            shopcart: o.default,
            xjtu: u.default,
            log: s.default
          },
          actions: {
            LoginOut: function(t) {
              var a = t.commit;
              return new Promise((function(t, l) {
                a("SET_ORDERENSURE", 0), a("SET_TOKEN", null), a("SET_USERINFOR", null), e.removeStorageSync("token"), e.removeStorageSync("userInfor"), e.removeStorageSync("isShowTips"), t()
              }))
            }
          }
        });
        t.default = c
      }).call(this, a("df3c").default)
    },
    d8db: function(e, t, a) {
      var l = a("47a9");
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0, l(a("02e3"));
      t.default = {
        state: {
          selectData: {}
        },
        mutations: {
          SET_SELECTDATA: function(e, t) {
            e.selectData = t
          }
        },
        actions: {}
      }
    },
    dc84: function(e, t) {
      e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
          enumerable: !0,
          get: function() {
            return e.l
          }
        }), Object.defineProperty(e, "id", {
          enumerable: !0,
          get: function() {
            return e.i
          }
        }), e.webpackPolyfill = 1), e
      }
    },
    dc99: function(e, t, a) {
      var l = a("47a9");
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = l(a("3ecc")),
        r = {
          top: "top",
          bottom: "bottom",
          center: "center",
          message: "top",
          dialog: "center",
          share: "bottom"
        },
        i = {
          data: function() {
            return {
              config: r
            }
          },
          mixins: [n.default]
        };
      t.default = i
    },
    dd3e: function(e, t) {
      e.exports = function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    dd71: function(e, t, a) {
      var l, n = a("3b2d");
      ! function(r) {
        var i, o = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
          u = Math.ceil,
          s = Math.floor,
          c = "[BigNumber Error] ",
          f = c + "Number primitive has more than 15 significant digits: ",
          v = 1e14,
          h = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
          d = 1e9;

        function b(e) {
          var t = 0 | e;
          return e > 0 || e === t ? t : t - 1
        }

        function p(e) {
          for (var t, a, l = 1, n = e.length, r = e[0] + ""; l < n;) {
            for (a = 14 - (t = e[l++] + "").length; a--; t = "0" + t);
            r += t
          }
          for (n = r.length; 48 === r.charCodeAt(--n););
          return r.slice(0, n + 1 || 1)
        }

        function g(e, t) {
          var a, l, n = e.c,
            r = t.c,
            i = e.s,
            o = t.s,
            u = e.e,
            s = t.e;
          if (!i || !o) return null;
          if (a = n && !n[0], l = r && !r[0], a || l) return a ? l ? 0 : -o : i;
          if (i != o) return i;
          if (a = i < 0, l = u == s, !n || !r) return l ? 0 : !n ^ a ? 1 : -1;
          if (!l) return u > s ^ a ? 1 : -1;
          for (o = (u = n.length) < (s = r.length) ? u : s, i = 0; i < o; i++)
            if (n[i] != r[i]) return n[i] > r[i] ^ a ? 1 : -1;
          return u == s ? 0 : u > s ^ a ? 1 : -1
        }

        function y(e, t, a, l) {
          if (e < t || e > a || e !== s(e)) throw Error(c + (l || "Argument") + ("number" == typeof e ? e < t || e > a ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(e))
        }

        function S(e) {
          var t = e.c.length - 1;
          return b(e.e / 14) == t && e.c[t] % 2 != 0
        }

        function m(e, t) {
          return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (t < 0 ? "e" : "e+") + t
        }

        function Y(e, t, a) {
          var l, n;
          if (t < 0) {
            for (n = a + "."; ++t; n += a);
            e = n + e
          } else if (++t > (l = e.length)) {
            for (n = a, t -= l; --t; n += a);
            e += n
          } else t < l && (e = e.slice(0, t) + "." + e.slice(t));
          return e
        }(i = function e(t) {
          var a, l, r, i = H.prototype = {
              constructor: H,
              toString: null,
              valueOf: null
            },
            Z = new H(1),
            L = 20,
            C = 4,
            T = -7,
            w = 21,
            _ = -1e7,
            X = 1e7,
            J = !1,
            P = 1,
            M = 0,
            D = {
              prefix: "",
              groupSize: 3,
              secondaryGroupSize: 0,
              groupSeparator: ",",
              decimalSeparator: ".",
              fractionGroupSize: 0,
              fractionGroupSeparator: " ",
              suffix: ""
            },
            x = "0123456789abcdefghijklmnopqrstuvwxyz",
            B = !0;

          function H(e, t) {
            var a, n, i, u, c, v, h, d, b = this;
            if (!(b instanceof H)) return new H(e, t);
            if (null == t) {
              if (e && !0 === e._isBigNumber) return b.s = e.s, void(!e.c || e.e > X ? b.c = b.e = null : e.e < _ ? b.c = [b.e = 0] : (b.e = e.e, b.c = e.c.slice()));
              if ((v = "number" == typeof e) && 0 * e == 0) {
                if (b.s = 1 / e < 0 ? (e = -e, -1) : 1, e === ~~e) {
                  for (u = 0, c = e; c >= 10; c /= 10, u++);
                  return void(u > X ? b.c = b.e = null : (b.e = u, b.c = [e]))
                }
                d = String(e)
              } else {
                if (!o.test(d = String(e))) return r(b, d, v);
                b.s = 45 == d.charCodeAt(0) ? (d = d.slice(1), -1) : 1
              }(u = d.indexOf(".")) > -1 && (d = d.replace(".", "")), (c = d.search(/e/i)) > 0 ? (u < 0 && (u = c), u += +d.slice(c + 1), d = d.substring(0, c)) : u < 0 && (u = d.length)
            } else {
              if (y(t, 2, x.length, "Base"), 10 == t && B) return N(b = new H(e), L + b.e + 1, C);
              if (d = String(e), v = "number" == typeof e) {
                if (0 * e != 0) return r(b, d, v, t);
                if (b.s = 1 / e < 0 ? (d = d.slice(1), -1) : 1, H.DEBUG && d.replace(/^0\.0*|\./, "").length > 15) throw Error(f + e)
              } else b.s = 45 === d.charCodeAt(0) ? (d = d.slice(1), -1) : 1;
              for (a = x.slice(0, t), u = c = 0, h = d.length; c < h; c++)
                if (a.indexOf(n = d.charAt(c)) < 0) {
                  if ("." == n) {
                    if (c > u) {
                      u = h;
                      continue
                    }
                  } else if (!i && (d == d.toUpperCase() && (d = d.toLowerCase()) || d == d.toLowerCase() && (d = d.toUpperCase()))) {
                    i = !0, c = -1, u = 0;
                    continue
                  }
                  return r(b, String(e), v, t)
                } v = !1, (u = (d = l(d, t, 10, b.s)).indexOf(".")) > -1 ? d = d.replace(".", "") : u = d.length
            }
            for (c = 0; 48 === d.charCodeAt(c); c++);
            for (h = d.length; 48 === d.charCodeAt(--h););
            if (d = d.slice(c, ++h)) {
              if (h -= c, v && H.DEBUG && h > 15 && (e > 9007199254740991 || e !== s(e))) throw Error(f + b.s * e);
              if ((u = u - c - 1) > X) b.c = b.e = null;
              else if (u < _) b.c = [b.e = 0];
              else {
                if (b.e = u, b.c = [], c = (u + 1) % 14, u < 0 && (c += 14), c < h) {
                  for (c && b.c.push(+d.slice(0, c)), h -= 14; c < h;) b.c.push(+d.slice(c, c += 14));
                  c = 14 - (d = d.slice(c)).length
                } else c -= h;
                for (; c--; d += "0");
                b.c.push(+d)
              }
            } else b.c = [b.e = 0]
          }

          function Q(e, t, a, l) {
            var n, r, i, o, u;
            if (null == a ? a = C : y(a, 0, 8), !e.c) return e.toString();
            if (n = e.c[0], i = e.e, null == t) u = p(e.c), u = 1 == l || 2 == l && (i <= T || i >= w) ? m(u, i) : Y(u, i, "0");
            else if (r = (e = N(new H(e), t, a)).e, o = (u = p(e.c)).length, 1 == l || 2 == l && (t <= r || r <= T)) {
              for (; o < t; u += "0", o++);
              u = m(u, r)
            } else if (t -= i, u = Y(u, r, "0"), r + 1 > o) {
              if (--t > 0)
                for (u += "."; t--; u += "0");
            } else if ((t += r - o) > 0)
              for (r + 1 == o && (u += "."); t--; u += "0");
            return e.s < 0 && n ? "-" + u : u
          }

          function A(e, t) {
            for (var a, l = 1, n = new H(e[0]); l < e.length; l++) {
              if (!(a = new H(e[l])).s) {
                n = a;
                break
              }
              t.call(n, a) && (n = a)
            }
            return n
          }

          function F(e, t, a) {
            for (var l = 1, n = t.length; !t[--n]; t.pop());
            for (n = t[0]; n >= 10; n /= 10, l++);
            return (a = l + 14 * a - 1) > X ? e.c = e.e = null : a < _ ? e.c = [e.e = 0] : (e.e = a, e.c = t), e
          }

          function N(e, t, a, l) {
            var n, r, i, o, c, f, d, b = e.c,
              p = h;
            if (b) {
              e: {
                for (n = 1, o = b[0]; o >= 10; o /= 10, n++);
                if ((r = t - n) < 0) r += 14,
                i = t,
                d = (c = b[f = 0]) / p[n - i - 1] % 10 | 0;
                else if ((f = u((r + 1) / 14)) >= b.length) {
                  if (!l) break e;
                  for (; b.length <= f; b.push(0));
                  c = d = 0, n = 1, i = (r %= 14) - 14 + 1
                } else {
                  for (c = o = b[f], n = 1; o >= 10; o /= 10, n++);
                  d = (i = (r %= 14) - 14 + n) < 0 ? 0 : c / p[n - i - 1] % 10 | 0
                }
                if (l = l || t < 0 || null != b[f + 1] || (i < 0 ? c : c % p[n - i - 1]), l = a < 4 ? (d || l) && (0 == a || a == (e.s < 0 ? 3 : 2)) : d > 5 || 5 == d && (4 == a || l || 6 == a && (r > 0 ? i > 0 ? c / p[n - i] : 0 : b[f - 1]) % 10 & 1 || a == (e.s < 0 ? 8 : 7)), t < 1 || !b[0]) return b.length = 0,
                l ? (t -= e.e + 1, b[0] = p[(14 - t % 14) % 14], e.e = -t || 0) : b[0] = e.e = 0,
                e;
                if (0 == r ? (b.length = f, o = 1, f--) : (b.length = f + 1, o = p[14 - r], b[f] = i > 0 ? s(c / p[n - i] % p[i]) * o : 0), l)
                  for (;;) {
                    if (0 == f) {
                      for (r = 1, i = b[0]; i >= 10; i /= 10, r++);
                      for (i = b[0] += o, o = 1; i >= 10; i /= 10, o++);
                      r != o && (e.e++, b[0] == v && (b[0] = 1));
                      break
                    }
                    if (b[f] += o, b[f] != v) break;
                    b[f--] = 0, o = 1
                  }
                for (r = b.length; 0 === b[--r]; b.pop());
              }
              e.e > X ? e.c = e.e = null : e.e < _ && (e.c = [e.e = 0])
            }
            return e
          }

          function E(e) {
            var t, a = e.e;
            return null === a ? e.toString() : (t = p(e.c), t = a <= T || a >= w ? m(t, a) : Y(t, a, "0"), e.s < 0 ? "-" + t : t)
          }
          return H.clone = e, H.ROUND_UP = 0, H.ROUND_DOWN = 1, H.ROUND_CEIL = 2, H.ROUND_FLOOR = 3, H.ROUND_HALF_UP = 4, H.ROUND_HALF_DOWN = 5, H.ROUND_HALF_EVEN = 6, H.ROUND_HALF_CEIL = 7, H.ROUND_HALF_FLOOR = 8, H.EUCLID = 9, H.config = H.set = function(e) {
            var t, a;
            if (null != e) {
              if ("object" != n(e)) throw Error(c + "Object expected: " + e);
              if (e.hasOwnProperty(t = "DECIMAL_PLACES") && (y(a = e[t], 0, d, t), L = a), e.hasOwnProperty(t = "ROUNDING_MODE") && (y(a = e[t], 0, 8, t), C = a), e.hasOwnProperty(t = "EXPONENTIAL_AT") && ((a = e[t]) && a.pop ? (y(a[0], -d, 0, t), y(a[1], 0, d, t), T = a[0], w = a[1]) : (y(a, -d, d, t), T = -(w = a < 0 ? -a : a))), e.hasOwnProperty(t = "RANGE"))
                if ((a = e[t]) && a.pop) y(a[0], -d, -1, t), y(a[1], 1, d, t), _ = a[0], X = a[1];
                else {
                  if (y(a, -d, d, t), !a) throw Error(c + t + " cannot be zero: " + a);
                  _ = -(X = a < 0 ? -a : a)
                } if (e.hasOwnProperty(t = "CRYPTO")) {
                if ((a = e[t]) !== !!a) throw Error(c + t + " not true or false: " + a);
                if (a) {
                  if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw J = !a, Error(c + "crypto unavailable");
                  J = a
                } else J = a
              }
              if (e.hasOwnProperty(t = "MODULO_MODE") && (y(a = e[t], 0, 9, t), P = a), e.hasOwnProperty(t = "POW_PRECISION") && (y(a = e[t], 0, d, t), M = a), e.hasOwnProperty(t = "FORMAT")) {
                if (a = e[t], "object" != n(a)) throw Error(c + t + " not an object: " + a);
                D = a
              }
              if (e.hasOwnProperty(t = "ALPHABET")) {
                if ("string" != typeof(a = e[t]) || /^.?$|[+\-.\s]|(.).*\1/.test(a)) throw Error(c + t + " invalid: " + a);
                B = "0123456789" == a.slice(0, 10), x = a
              }
            }
            return {
              DECIMAL_PLACES: L,
              ROUNDING_MODE: C,
              EXPONENTIAL_AT: [T, w],
              RANGE: [_, X],
              CRYPTO: J,
              MODULO_MODE: P,
              POW_PRECISION: M,
              FORMAT: D,
              ALPHABET: x
            }
          }, H.isBigNumber = function(e) {
            if (!e || !0 !== e._isBigNumber) return !1;
            if (!H.DEBUG) return !0;
            var t, a, l = e.c,
              n = e.e,
              r = e.s;
            e: if ("[object Array]" == {}.toString.call(l)) {
              if ((1 === r || -1 === r) && n >= -d && n <= d && n === s(n)) {
                if (0 === l[0]) {
                  if (0 === n && 1 === l.length) return !0;
                  break e
                }
                if ((t = (n + 1) % 14) < 1 && (t += 14), String(l[0]).length == t) {
                  for (t = 0; t < l.length; t++)
                    if ((a = l[t]) < 0 || a >= v || a !== s(a)) break e;
                  if (0 !== a) return !0
                }
              }
            } else if (null === l && null === n && (null === r || 1 === r || -1 === r)) return !0;
            throw Error(c + "Invalid BigNumber: " + e)
          }, H.maximum = H.max = function() {
            return A(arguments, i.lt)
          }, H.minimum = H.min = function() {
            return A(arguments, i.gt)
          }, H.random = function() {
            var e = 9007199254740992 * Math.random() & 2097151 ? function() {
              return s(9007199254740992 * Math.random())
            } : function() {
              return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0)
            };
            return function(t) {
              var a, l, n, r, i, o = 0,
                f = [],
                v = new H(Z);
              if (null == t ? t = L : y(t, 0, d), r = u(t / 14), J)
                if (crypto.getRandomValues) {
                  for (a = crypto.getRandomValues(new Uint32Array(r *= 2)); o < r;)(i = 131072 * a[o] + (a[o + 1] >>> 11)) >= 9e15 ? (l = crypto.getRandomValues(new Uint32Array(2)), a[o] = l[0], a[o + 1] = l[1]) : (f.push(i % 1e14), o += 2);
                  o = r / 2
                } else {
                  if (!crypto.randomBytes) throw J = !1, Error(c + "crypto unavailable");
                  for (a = crypto.randomBytes(r *= 7); o < r;)(i = 281474976710656 * (31 & a[o]) + 1099511627776 * a[o + 1] + 4294967296 * a[o + 2] + 16777216 * a[o + 3] + (a[o + 4] << 16) + (a[o + 5] << 8) + a[o + 6]) >= 9e15 ? crypto.randomBytes(7).copy(a, o) : (f.push(i % 1e14), o += 7);
                  o = r / 7
                } if (!J)
                for (; o < r;)(i = e()) < 9e15 && (f[o++] = i % 1e14);
              for (t %= 14, (r = f[--o]) && t && (i = h[14 - t], f[o] = s(r / i) * i); 0 === f[o]; f.pop(), o--);
              if (o < 0) f = [n = 0];
              else {
                for (n = -1; 0 === f[0]; f.splice(0, 1), n -= 14);
                for (o = 1, i = f[0]; i >= 10; i /= 10, o++);
                o < 14 && (n -= 14 - o)
              }
              return v.e = n, v.c = f, v
            }
          }(), H.sum = function() {
            for (var e = 1, t = arguments, a = new H(t[0]); e < t.length;) a = a.plus(t[e++]);
            return a
          }, l = function() {
            function e(e, t, a, l) {
              for (var n, r, i = [0], o = 0, u = e.length; o < u;) {
                for (r = i.length; r--; i[r] *= t);
                for (i[0] += l.indexOf(e.charAt(o++)), n = 0; n < i.length; n++) i[n] > a - 1 && (null == i[n + 1] && (i[n + 1] = 0), i[n + 1] += i[n] / a | 0, i[n] %= a)
              }
              return i.reverse()
            }
            return function(t, l, n, r, i) {
              var o, u, s, c, f, v, h, d, b = t.indexOf("."),
                g = L,
                y = C;
              for (b >= 0 && (c = M, M = 0, t = t.replace(".", ""), v = (d = new H(l)).pow(t.length - b), M = c, d.c = e(Y(p(v.c), v.e, "0"), 10, n, "0123456789"), d.e = d.c.length), s = c = (h = e(t, l, n, i ? (o = x, "0123456789") : (o = "0123456789", x))).length; 0 == h[--c]; h.pop());
              if (!h[0]) return o.charAt(0);
              if (b < 0 ? --s : (v.c = h, v.e = s, v.s = r, h = (v = a(v, d, g, y, n)).c, f = v.r, s = v.e), b = h[u = s + g + 1], c = n / 2, f = f || u < 0 || null != h[u + 1], f = y < 4 ? (null != b || f) && (0 == y || y == (v.s < 0 ? 3 : 2)) : b > c || b == c && (4 == y || f || 6 == y && 1 & h[u - 1] || y == (v.s < 0 ? 8 : 7)), u < 1 || !h[0]) t = f ? Y(o.charAt(1), -g, o.charAt(0)) : o.charAt(0);
              else {
                if (h.length = u, f)
                  for (--n; ++h[--u] > n;) h[u] = 0, u || (++s, h = [1].concat(h));
                for (c = h.length; !h[--c];);
                for (b = 0, t = ""; b <= c; t += o.charAt(h[b++]));
                t = Y(t, s, o.charAt(0))
              }
              return t
            }
          }(), a = function() {
            function e(e, t, a) {
              var l, n, r, i, o = 0,
                u = e.length,
                s = t % 1e7,
                c = t / 1e7 | 0;
              for (e = e.slice(); u--;) o = ((n = s * (r = e[u] % 1e7) + (l = c * r + (i = e[u] / 1e7 | 0) * s) % 1e7 * 1e7 + o) / a | 0) + (l / 1e7 | 0) + c * i, e[u] = n % a;
              return o && (e = [o].concat(e)), e
            }

            function t(e, t, a, l) {
              var n, r;
              if (a != l) r = a > l ? 1 : -1;
              else
                for (n = r = 0; n < a; n++)
                  if (e[n] != t[n]) {
                    r = e[n] > t[n] ? 1 : -1;
                    break
                  } return r
            }

            function a(e, t, a, l) {
              for (var n = 0; a--;) e[a] -= n, n = e[a] < t[a] ? 1 : 0, e[a] = n * l + e[a] - t[a];
              for (; !e[0] && e.length > 1; e.splice(0, 1));
            }
            return function(l, n, r, i, o) {
              var u, c, f, h, d, p, g, y, S, m, Y, Z, L, C, T, w, _, X = l.s == n.s ? 1 : -1,
                J = l.c,
                P = n.c;
              if (!(J && J[0] && P && P[0])) return new H(l.s && n.s && (J ? !P || J[0] != P[0] : P) ? J && 0 == J[0] || !P ? 0 * X : X / 0 : NaN);
              for (S = (y = new H(X)).c = [], X = r + (c = l.e - n.e) + 1, o || (o = v, c = b(l.e / 14) - b(n.e / 14), X = X / 14 | 0), f = 0; P[f] == (J[f] || 0); f++);
              if (P[f] > (J[f] || 0) && c--, X < 0) S.push(1), h = !0;
              else {
                for (C = J.length, w = P.length, f = 0, X += 2, (d = s(o / (P[0] + 1))) > 1 && (P = e(P, d, o), J = e(J, d, o), w = P.length, C = J.length), L = w, Y = (m = J.slice(0, w)).length; Y < w; m[Y++] = 0);
                _ = P.slice(), _ = [0].concat(_), T = P[0], P[1] >= o / 2 && T++;
                do {
                  if (d = 0, (u = t(P, m, w, Y)) < 0) {
                    if (Z = m[0], w != Y && (Z = Z * o + (m[1] || 0)), (d = s(Z / T)) > 1)
                      for (d >= o && (d = o - 1), g = (p = e(P, d, o)).length, Y = m.length; 1 == t(p, m, g, Y);) d--, a(p, w < g ? _ : P, g, o), g = p.length, u = 1;
                    else 0 == d && (u = d = 1), g = (p = P.slice()).length;
                    if (g < Y && (p = [0].concat(p)), a(m, p, Y, o), Y = m.length, -1 == u)
                      for (; t(P, m, w, Y) < 1;) d++, a(m, w < Y ? _ : P, Y, o), Y = m.length
                  } else 0 === u && (d++, m = [0]);
                  S[f++] = d, m[0] ? m[Y++] = J[L] || 0 : (m = [J[L]], Y = 1)
                } while ((L++ < C || null != m[0]) && X--);
                h = null != m[0], S[0] || S.splice(0, 1)
              }
              if (o == v) {
                for (f = 1, X = S[0]; X >= 10; X /= 10, f++);
                N(y, r + (y.e = f + 14 * c - 1) + 1, i, h)
              } else y.e = c, y.r = +h;
              return y
            }
          }(), r = function() {
            var e = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
              t = /^([^.]+)\.$/,
              a = /^\.([^.]+)$/,
              l = /^-?(Infinity|NaN)$/,
              n = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
            return function(r, i, o, u) {
              var s, f = o ? i : i.replace(n, "");
              if (l.test(f)) r.s = isNaN(f) ? null : f < 0 ? -1 : 1;
              else {
                if (!o && (f = f.replace(e, (function(e, t, a) {
                    return s = "x" == (a = a.toLowerCase()) ? 16 : "b" == a ? 2 : 8, u && u != s ? e : t
                  })), u && (s = u, f = f.replace(t, "$1").replace(a, "0.$1")), i != f)) return new H(f, s);
                if (H.DEBUG) throw Error(c + "Not a" + (u ? " base " + u : "") + " number: " + i);
                r.s = null
              }
              r.c = r.e = null
            }
          }(), i.absoluteValue = i.abs = function() {
            var e = new H(this);
            return e.s < 0 && (e.s = 1), e
          }, i.comparedTo = function(e, t) {
            return g(this, new H(e, t))
          }, i.decimalPlaces = i.dp = function(e, t) {
            var a, l, n, r = this;
            if (null != e) return y(e, 0, d), null == t ? t = C : y(t, 0, 8), N(new H(r), e + r.e + 1, t);
            if (!(a = r.c)) return null;
            if (l = 14 * ((n = a.length - 1) - b(this.e / 14)), n = a[n])
              for (; n % 10 == 0; n /= 10, l--);
            return l < 0 && (l = 0), l
          }, i.dividedBy = i.div = function(e, t) {
            return a(this, new H(e, t), L, C)
          }, i.dividedToIntegerBy = i.idiv = function(e, t) {
            return a(this, new H(e, t), 0, 1)
          }, i.exponentiatedBy = i.pow = function(e, t) {
            var a, l, n, r, i, o, f, v, h = this;
            if ((e = new H(e)).c && !e.isInteger()) throw Error(c + "Exponent not an integer: " + E(e));
            if (null != t && (t = new H(t)), i = e.e > 14, !h.c || !h.c[0] || 1 == h.c[0] && !h.e && 1 == h.c.length || !e.c || !e.c[0]) return v = new H(Math.pow(+E(h), i ? 2 - S(e) : +E(e))), t ? v.mod(t) : v;
            if (o = e.s < 0, t) {
              if (t.c ? !t.c[0] : !t.s) return new H(NaN);
              (l = !o && h.isInteger() && t.isInteger()) && (h = h.mod(t))
            } else {
              if (e.e > 9 && (h.e > 0 || h.e < -1 || (0 == h.e ? h.c[0] > 1 || i && h.c[1] >= 24e7 : h.c[0] < 8e13 || i && h.c[0] <= 9999975e7))) return r = h.s < 0 && S(e) ? -0 : 0, h.e > -1 && (r = 1 / r), new H(o ? 1 / r : r);
              M && (r = u(M / 14 + 2))
            }
            for (i ? (a = new H(.5), o && (e.s = 1), f = S(e)) : f = (n = Math.abs(+E(e))) % 2, v = new H(Z);;) {
              if (f) {
                if (!(v = v.times(h)).c) break;
                r ? v.c.length > r && (v.c.length = r) : l && (v = v.mod(t))
              }
              if (n) {
                if (0 === (n = s(n / 2))) break;
                f = n % 2
              } else if (N(e = e.times(a), e.e + 1, 1), e.e > 14) f = S(e);
              else {
                if (0 === (n = +E(e))) break;
                f = n % 2
              }
              h = h.times(h), r ? h.c && h.c.length > r && (h.c.length = r) : l && (h = h.mod(t))
            }
            return l ? v : (o && (v = Z.div(v)), t ? v.mod(t) : r ? N(v, M, C, void 0) : v)
          }, i.integerValue = function(e) {
            var t = new H(this);
            return null == e ? e = C : y(e, 0, 8), N(t, t.e + 1, e)
          }, i.isEqualTo = i.eq = function(e, t) {
            return 0 === g(this, new H(e, t))
          }, i.isFinite = function() {
            return !!this.c
          }, i.isGreaterThan = i.gt = function(e, t) {
            return g(this, new H(e, t)) > 0
          }, i.isGreaterThanOrEqualTo = i.gte = function(e, t) {
            return 1 === (t = g(this, new H(e, t))) || 0 === t
          }, i.isInteger = function() {
            return !!this.c && b(this.e / 14) > this.c.length - 2
          }, i.isLessThan = i.lt = function(e, t) {
            return g(this, new H(e, t)) < 0
          }, i.isLessThanOrEqualTo = i.lte = function(e, t) {
            return -1 === (t = g(this, new H(e, t))) || 0 === t
          }, i.isNaN = function() {
            return !this.s
          }, i.isNegative = function() {
            return this.s < 0
          }, i.isPositive = function() {
            return this.s > 0
          }, i.isZero = function() {
            return !!this.c && 0 == this.c[0]
          }, i.minus = function(e, t) {
            var a, l, n, r, i = this,
              o = i.s;
            if (t = (e = new H(e, t)).s, !o || !t) return new H(NaN);
            if (o != t) return e.s = -t, i.plus(e);
            var u = i.e / 14,
              s = e.e / 14,
              c = i.c,
              f = e.c;
            if (!u || !s) {
              if (!c || !f) return c ? (e.s = -t, e) : new H(f ? i : NaN);
              if (!c[0] || !f[0]) return f[0] ? (e.s = -t, e) : new H(c[0] ? i : 3 == C ? -0 : 0)
            }
            if (u = b(u), s = b(s), c = c.slice(), o = u - s) {
              for ((r = o < 0) ? (o = -o, n = c) : (s = u, n = f), n.reverse(), t = o; t--; n.push(0));
              n.reverse()
            } else
              for (l = (r = (o = c.length) < (t = f.length)) ? o : t, o = t = 0; t < l; t++)
                if (c[t] != f[t]) {
                  r = c[t] < f[t];
                  break
                } if (r && (n = c, c = f, f = n, e.s = -e.s), (t = (l = f.length) - (a = c.length)) > 0)
              for (; t--; c[a++] = 0);
            for (t = v - 1; l > o;) {
              if (c[--l] < f[l]) {
                for (a = l; a && !c[--a]; c[a] = t);
                --c[a], c[l] += v
              }
              c[l] -= f[l]
            }
            for (; 0 == c[0]; c.splice(0, 1), --s);
            return c[0] ? F(e, c, s) : (e.s = 3 == C ? -1 : 1, e.c = [e.e = 0], e)
          }, i.modulo = i.mod = function(e, t) {
            var l, n, r = this;
            return e = new H(e, t), !r.c || !e.s || e.c && !e.c[0] ? new H(NaN) : !e.c || r.c && !r.c[0] ? new H(r) : (9 == P ? (n = e.s, e.s = 1, l = a(r, e, 0, 3), e.s = n, l.s *= n) : l = a(r, e, 0, P), (e = r.minus(l.times(e))).c[0] || 1 != P || (e.s = r.s), e)
          }, i.multipliedBy = i.times = function(e, t) {
            var a, l, n, r, i, o, u, s, c, f, h, d, p, g, y = this,
              S = y.c,
              m = (e = new H(e, t)).c;
            if (!(S && m && S[0] && m[0])) return !y.s || !e.s || S && !S[0] && !m || m && !m[0] && !S ? e.c = e.e = e.s = null : (e.s *= y.s, S && m ? (e.c = [0], e.e = 0) : e.c = e.e = null), e;
            for (l = b(y.e / 14) + b(e.e / 14), e.s *= y.s, (u = S.length) < (f = m.length) && (p = S, S = m, m = p, n = u, u = f, f = n), n = u + f, p = []; n--; p.push(0));
            for (g = v, n = f; --n >= 0;) {
              for (a = 0, h = m[n] % 1e7, d = m[n] / 1e7 | 0, r = n + (i = u); r > n;) a = ((s = h * (s = S[--i] % 1e7) + (o = d * s + (c = S[i] / 1e7 | 0) * h) % 1e7 * 1e7 + p[r] + a) / g | 0) + (o / 1e7 | 0) + d * c, p[r--] = s % g;
              p[r] = a
            }
            return a ? ++l : p.splice(0, 1), F(e, p, l)
          }, i.negated = function() {
            var e = new H(this);
            return e.s = -e.s || null, e
          }, i.plus = function(e, t) {
            var a, l = this,
              n = l.s;
            if (t = (e = new H(e, t)).s, !n || !t) return new H(NaN);
            if (n != t) return e.s = -t, l.minus(e);
            var r = l.e / 14,
              i = e.e / 14,
              o = l.c,
              u = e.c;
            if (!r || !i) {
              if (!o || !u) return new H(n / 0);
              if (!o[0] || !u[0]) return u[0] ? e : new H(o[0] ? l : 0 * n)
            }
            if (r = b(r), i = b(i), o = o.slice(), n = r - i) {
              for (n > 0 ? (i = r, a = u) : (n = -n, a = o), a.reverse(); n--; a.push(0));
              a.reverse()
            }
            for ((n = o.length) - (t = u.length) < 0 && (a = u, u = o, o = a, t = n), n = 0; t;) n = (o[--t] = o[t] + u[t] + n) / v | 0, o[t] = v === o[t] ? 0 : o[t] % v;
            return n && (o = [n].concat(o), ++i), F(e, o, i)
          }, i.precision = i.sd = function(e, t) {
            var a, l, n, r = this;
            if (null != e && e !== !!e) return y(e, 1, d), null == t ? t = C : y(t, 0, 8), N(new H(r), e, t);
            if (!(a = r.c)) return null;
            if (l = 14 * (n = a.length - 1) + 1, n = a[n]) {
              for (; n % 10 == 0; n /= 10, l--);
              for (n = a[0]; n >= 10; n /= 10, l++);
            }
            return e && r.e + 1 > l && (l = r.e + 1), l
          }, i.shiftedBy = function(e) {
            return y(e, -9007199254740991, 9007199254740991), this.times("1e" + e)
          }, i.squareRoot = i.sqrt = function() {
            var e, t, l, n, r, i = this,
              o = i.c,
              u = i.s,
              s = i.e,
              c = L + 4,
              f = new H("0.5");
            if (1 !== u || !o || !o[0]) return new H(!u || u < 0 && (!o || o[0]) ? NaN : o ? i : 1 / 0);
            if (0 == (u = Math.sqrt(+E(i))) || u == 1 / 0 ? (((t = p(o)).length + s) % 2 == 0 && (t += "0"), u = Math.sqrt(+t), s = b((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? t = "5e" + s : t = (t = u.toExponential()).slice(0, t.indexOf("e") + 1) + s, l = new H(t)) : l = new H(u + ""), l.c[0])
              for ((u = (s = l.e) + c) < 3 && (u = 0);;)
                if (r = l, l = f.times(r.plus(a(i, r, c, 1))), p(r.c).slice(0, u) === (t = p(l.c)).slice(0, u)) {
                  if (l.e < s && --u, "9999" != (t = t.slice(u - 3, u + 1)) && (n || "4999" != t)) {
                    +t && (+t.slice(1) || "5" != t.charAt(0)) || (N(l, l.e + L + 2, 1), e = !l.times(l).eq(i));
                    break
                  }
                  if (!n && (N(r, r.e + L + 2, 0), r.times(r).eq(i))) {
                    l = r;
                    break
                  }
                  c += 4, u += 4, n = 1
                } return N(l, l.e + L + 1, C, e)
          }, i.toExponential = function(e, t) {
            return null != e && (y(e, 0, d), e++), Q(this, e, t, 1)
          }, i.toFixed = function(e, t) {
            return null != e && (y(e, 0, d), e = e + this.e + 1), Q(this, e, t)
          }, i.toFormat = function(e, t, a) {
            var l, r = this;
            if (null == a) null != e && t && "object" == n(t) ? (a = t, t = null) : e && "object" == n(e) ? (a = e, e = t = null) : a = D;
            else if ("object" != n(a)) throw Error(c + "Argument not an object: " + a);
            if (l = r.toFixed(e, t), r.c) {
              var i, o = l.split("."),
                u = +a.groupSize,
                s = +a.secondaryGroupSize,
                f = a.groupSeparator || "",
                v = o[0],
                h = o[1],
                d = r.s < 0,
                b = d ? v.slice(1) : v,
                p = b.length;
              if (s && (i = u, u = s, s = i, p -= i), u > 0 && p > 0) {
                for (i = p % u || u, v = b.substr(0, i); i < p; i += u) v += f + b.substr(i, u);
                s > 0 && (v += f + b.slice(i)), d && (v = "-" + v)
              }
              l = h ? v + (a.decimalSeparator || "") + ((s = +a.fractionGroupSize) ? h.replace(new RegExp("\\d{" + s + "}\\B", "g"), "$&" + (a.fractionGroupSeparator || "")) : h) : v
            }
            return (a.prefix || "") + l + (a.suffix || "")
          }, i.toFraction = function(e) {
            var t, l, n, r, i, o, u, s, f, v, d, b, g = this,
              y = g.c;
            if (null != e && (!(u = new H(e)).isInteger() && (u.c || 1 !== u.s) || u.lt(Z))) throw Error(c + "Argument " + (u.isInteger() ? "out of range: " : "not an integer: ") + E(u));
            if (!y) return new H(g);
            for (t = new H(Z), f = l = new H(Z), n = s = new H(Z), b = p(y), i = t.e = b.length - g.e - 1, t.c[0] = h[(o = i % 14) < 0 ? 14 + o : o], e = !e || u.comparedTo(t) > 0 ? i > 0 ? t : f : u, o = X, X = 1 / 0, u = new H(b), s.c[0] = 0; v = a(u, t, 0, 1), 1 != (r = l.plus(v.times(n))).comparedTo(e);) l = n, n = r, f = s.plus(v.times(r = f)), s = r, t = u.minus(v.times(r = t)), u = r;
            return r = a(e.minus(l), n, 0, 1), s = s.plus(r.times(f)), l = l.plus(r.times(n)), s.s = f.s = g.s, d = a(f, n, i *= 2, C).minus(g).abs().comparedTo(a(s, l, i, C).minus(g).abs()) < 1 ? [f, n] : [s, l], X = o, d
          }, i.toNumber = function() {
            return +E(this)
          }, i.toPrecision = function(e, t) {
            return null != e && y(e, 1, d), Q(this, e, t, 2)
          }, i.toString = function(e) {
            var t, a = this,
              n = a.s,
              r = a.e;
            return null === r ? n ? (t = "Infinity", n < 0 && (t = "-" + t)) : t = "NaN" : (null == e ? t = r <= T || r >= w ? m(p(a.c), r) : Y(p(a.c), r, "0") : 10 === e && B ? t = Y(p((a = N(new H(a), L + r + 1, C)).c), a.e, "0") : (y(e, 2, x.length, "Base"), t = l(Y(p(a.c), r, "0"), 10, e, n, !0)), n < 0 && a.c[0] && (t = "-" + t)), t
          }, i.valueOf = i.toJSON = function() {
            return E(this)
          }, i._isBigNumber = !0, null != t && H.set(t), H
        }()).default = i.BigNumber = i, void 0 === (l = function() {
          return i
        }.call(t, a, t, e)) || (e.exports = l)
      }()
    },
    df3c: function(e, t, a) {
      (function(e, l) {
        var n = a("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.createApp = wt, t.createComponent = Ht, t.createPage = Bt, t.createPlugin = At, t.createSubpackageApp = Qt, t.default = void 0;
        var r, i = n(a("34cf")),
          o = n(a("7ca3")),
          u = n(a("931d")),
          s = n(a("af34")),
          c = n(a("3b2d")),
          f = a("d3b4"),
          v = n(a("3240"));

        function h(e, t) {
          var a = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            t && (l = l.filter((function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), a.push.apply(a, l)
          }
          return a
        }

        function d(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = null != arguments[t] ? arguments[t] : {};
            t % 2 ? h(Object(a), !0).forEach((function(t) {
              (0, o.default)(e, t, a[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : h(Object(a)).forEach((function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
            }))
          }
          return e
        }
        var b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          p = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;

        function g() {
          var t, a = e.getStorageSync("uni_id_token") || "",
            l = a.split(".");
          if (!a || 3 !== l.length) return {
            uid: null,
            role: [],
            permission: [],
            tokenExpired: 0
          };
          try {
            t = JSON.parse(function(e) {
              return decodeURIComponent(r(e).split("").map((function(e) {
                return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
              })).join(""))
            }(l[1]))
          } catch (e) {
            throw new Error("获取当前用户信息出错，详细错误信息为：" + e.message)
          }
          return t.tokenExpired = 1e3 * t.exp, delete t.exp, delete t.iat, t
        }
        r = "function" != typeof atob ? function(e) {
          if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !p.test(e)) throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
          var t;
          e += "==".slice(2 - (3 & e.length));
          for (var a, l, n = "", r = 0; r < e.length;) t = b.indexOf(e.charAt(r++)) << 18 | b.indexOf(e.charAt(r++)) << 12 | (a = b.indexOf(e.charAt(r++))) << 6 | (l = b.indexOf(e.charAt(r++))), n += 64 === a ? String.fromCharCode(t >> 16 & 255) : 64 === l ? String.fromCharCode(t >> 16 & 255, t >> 8 & 255) : String.fromCharCode(t >> 16 & 255, t >> 8 & 255, 255 & t);
          return n
        } : atob;
        var y = Object.prototype.toString,
          S = Object.prototype.hasOwnProperty;

        function m(e) {
          return "function" == typeof e
        }

        function Y(e) {
          return "string" == typeof e
        }

        function Z(e) {
          return "[object Object]" === y.call(e)
        }

        function L(e, t) {
          return S.call(e, t)
        }

        function C() {}

        function T(e) {
          var t = Object.create(null);
          return function(a) {
            return t[a] || (t[a] = e(a))
          }
        }
        var w = /-(\w)/g,
          _ = T((function(e) {
            return e.replace(w, (function(e, t) {
              return t ? t.toUpperCase() : ""
            }))
          }));

        function X(e) {
          var t = {};
          return Z(e) && Object.keys(e).sort().forEach((function(a) {
            t[a] = e[a]
          })), Object.keys(t) ? t : e
        }
        var J = ["invoke", "success", "fail", "complete", "returnValue"],
          P = {},
          M = {};

        function D(e, t) {
          Object.keys(t).forEach((function(a) {
            -1 !== J.indexOf(a) && m(t[a]) && (e[a] = function(e, t) {
              var a = t ? e ? e.concat(t) : Array.isArray(t) ? t : [t] : e;
              return a ? function(e) {
                for (var t = [], a = 0; a < e.length; a++) - 1 === t.indexOf(e[a]) && t.push(e[a]);
                return t
              }(a) : a
            }(e[a], t[a]))
          }))
        }

        function x(e, t) {
          e && t && Object.keys(t).forEach((function(a) {
            -1 !== J.indexOf(a) && m(t[a]) && function(e, t) {
              var a = e.indexOf(t); - 1 !== a && e.splice(a, 1)
            }(e[a], t[a])
          }))
        }

        function B(e, t) {
          return function(a) {
            return e(a, t) || a
          }
        }

        function H(e) {
          return !!e && ("object" === (0, c.default)(e) || "function" == typeof e) && "function" == typeof e.then
        }

        function Q(e, t, a) {
          for (var l = !1, n = 0; n < e.length; n++) {
            var r = e[n];
            if (l) l = Promise.resolve(B(r, a));
            else {
              var i = r(t, a);
              if (H(i) && (l = Promise.resolve(i)), !1 === i) return {
                then: function() {}
              }
            }
          }
          return l || {
            then: function(e) {
              return e(t)
            }
          }
        }

        function A(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return ["success", "fail", "complete"].forEach((function(a) {
            if (Array.isArray(e[a])) {
              var l = t[a];
              t[a] = function(n) {
                Q(e[a], n, t).then((function(e) {
                  return m(l) && l(e) || e
                }))
              }
            }
          })), t
        }

        function F(e, t) {
          var a = [];
          Array.isArray(P.returnValue) && a.push.apply(a, (0, s.default)(P.returnValue));
          var l = M[e];
          return l && Array.isArray(l.returnValue) && a.push.apply(a, (0, s.default)(l.returnValue)), a.forEach((function(e) {
            t = e(t) || t
          })), t
        }

        function N(e) {
          var t = Object.create(null);
          Object.keys(P).forEach((function(e) {
            "returnValue" !== e && (t[e] = P[e].slice())
          }));
          var a = M[e];
          return a && Object.keys(a).forEach((function(e) {
            "returnValue" !== e && (t[e] = (t[e] || []).concat(a[e]))
          })), t
        }

        function E(e, t, a) {
          for (var l = arguments.length, n = new Array(l > 3 ? l - 3 : 0), r = 3; r < l; r++) n[r - 3] = arguments[r];
          var i = N(e);
          if (i && Object.keys(i).length) {
            if (Array.isArray(i.invoke)) {
              var o = Q(i.invoke, a);
              return o.then((function(a) {
                return t.apply(void 0, [A(N(e), a)].concat(n))
              }))
            }
            return t.apply(void 0, [A(i, a)].concat(n))
          }
          return t.apply(void 0, [a].concat(n))
        }
        var O = {
            returnValue: function(e) {
              return H(e) ? new Promise((function(t, a) {
                e.then((function(e) {
                  e ? e[0] ? a(e[0]) : t(e[1]) : t(e)
                }))
              })) : e
            }
          },
          W = /^\$|__f__|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|rpx2px|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale|invokePushCallback|getWindowInfo|getDeviceInfo|getAppBaseInfo|getSystemSetting|getAppAuthorizeSetting|initUTS|requireUTS|registerUTS/,
          k = /^create|Manager$/,
          G = ["createBLEConnection"],
          R = ["createBLEConnection", "createPushMessage"],
          K = /^on|^off/;

        function I(e) {
          return k.test(e) && -1 === G.indexOf(e)
        }

        function $(e) {
          return W.test(e) && -1 === R.indexOf(e)
        }

        function j(e) {
          return e.then((function(e) {
            return [null, e]
          })).catch((function(e) {
            return [e]
          }))
        }

        function z(e, t) {
          return function(e) {
            return !(I(e) || $(e) || function(e) {
              return K.test(e) && "onPush" !== e
            }(e))
          }(e) && m(t) ? function() {
            for (var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, l = arguments.length, n = new Array(l > 1 ? l - 1 : 0), r = 1; r < l; r++) n[r - 1] = arguments[r];
            return m(a.success) || m(a.fail) || m(a.complete) ? F(e, E.apply(void 0, [e, t, a].concat(n))) : F(e, j(new Promise((function(l, r) {
              E.apply(void 0, [e, t, Object.assign({}, a, {
                success: l,
                fail: r
              })].concat(n))
            }))))
          } : t
        }
        Promise.prototype.finally || (Promise.prototype.finally = function(e) {
          var t = this.constructor;
          return this.then((function(a) {
            return t.resolve(e()).then((function() {
              return a
            }))
          }), (function(a) {
            return t.resolve(e()).then((function() {
              throw a
            }))
          }))
        });
        var U = !1,
          q = 0,
          V = 0;

        function ee(t, a) {
          if (0 === q && function() {
              var t, a, l, n = "function" == typeof e.getWindowInfo && e.getWindowInfo() ? e.getWindowInfo() : e.getSystemInfoSync(),
                r = "function" == typeof e.getDeviceInfo && e.getDeviceInfo() ? e.getDeviceInfo() : e.getSystemInfoSync();
              t = n.windowWidth, a = n.pixelRatio, l = r.platform, q = t, V = a, U = "ios" === l
            }(), 0 === (t = Number(t))) return 0;
          var l = t / 750 * (a || q);
          return l < 0 && (l = -l), 0 === (l = Math.floor(l + 1e-4)) && (l = 1 !== V && U ? .5 : 1), t < 0 ? -l : l
        }
        var te, ae = {};

        function le() {
          var t = "function" == typeof e.getAppBaseInfo && e.getAppBaseInfo() ? e.getAppBaseInfo() : e.getSystemInfoSync();
          return ie(t && t.language ? t.language : "en") || "en"
        }
        te = le(),
          function() {
            if ("undefined" != typeof __uniConfig && __uniConfig.locales && Object.keys(__uniConfig.locales).length) {
              var e = Object.keys(__uniConfig.locales);
              e.length && e.forEach((function(e) {
                var t = ae[e],
                  a = __uniConfig.locales[e];
                t ? Object.assign(t, a) : ae[e] = a
              }))
            }
          }();
        var ne = (0, f.initVueI18n)(te, {}),
          re = ne.t;

        function ie(e, t) {
          if (e) return e = e.trim().replace(/_/g, "-"), t && t[e] ? e : "chinese" === (e = e.toLowerCase()) ? "zh-Hans" : 0 === e.indexOf("zh") ? e.indexOf("-hans") > -1 ? "zh-Hans" : e.indexOf("-hant") > -1 || function(e, t) {
            return !!["-tw", "-hk", "-mo", "-cht"].find((function(t) {
              return -1 !== e.indexOf(t)
            }))
          }(e) ? "zh-Hant" : "zh-Hans" : function(e, t) {
            return ["en", "fr", "es"].find((function(t) {
              return 0 === e.indexOf(t)
            }))
          }(e) || void 0
        }

        function oe() {
          if (m(getApp)) {
            var e = getApp({
              allowDefault: !0
            });
            if (e && e.$vm) return e.$vm.$locale
          }
          return le()
        }
        ne.mixin = {
          beforeCreate: function() {
            var e = this,
              t = ne.i18n.watchLocale((function() {
                e.$forceUpdate()
              }));
            this.$once("hook:beforeDestroy", (function() {
              t()
            }))
          },
          methods: {
            $$t: function(e, t) {
              return re(e, t)
            }
          }
        }, ne.setLocale, ne.getLocale;
        var ue = [];
        void 0 !== l && (l.getLocale = oe);
        var se, ce = {
            promiseInterceptor: O
          },
          fe = Object.freeze({
            __proto__: null,
            upx2px: ee,
            rpx2px: ee,
            getLocale: oe,
            setLocale: function(e) {
              var t = !!m(getApp) && getApp();
              return !!t && (t.$vm.$locale !== e && (t.$vm.$locale = e, ue.forEach((function(t) {
                return t({
                  locale: e
                })
              })), !0))
            },
            onLocaleChange: function(e) {
              -1 === ue.indexOf(e) && ue.push(e)
            },
            addInterceptor: function(e, t) {
              "string" == typeof e && Z(t) ? D(M[e] || (M[e] = {}), t) : Z(e) && D(P, e)
            },
            removeInterceptor: function(e, t) {
              "string" == typeof e ? Z(t) ? x(M[e], t) : delete M[e] : Z(e) && x(P, e)
            },
            interceptors: ce
          });

        function ve(t) {
          (se = se || e.getStorageSync("__DC_STAT_UUID")) || (se = Date.now() + "" + Math.floor(1e7 * Math.random()), e.setStorage({
            key: "__DC_STAT_UUID",
            data: se
          })), t.deviceId = se
        }

        function he(e) {
          if (e.safeArea) {
            var t = e.safeArea;
            e.safeAreaInsets = {
              top: t.top,
              left: t.left,
              right: e.windowWidth - t.right,
              bottom: e.screenHeight - t.bottom
            }
          }
        }

        function de(e, t) {
          var a, l = "";
          switch (l = e.split(" ")[0] || t, a = e.split(" ")[1] || "", l = l.toLocaleLowerCase()) {
            case "harmony":
            case "ohos":
            case "openharmony":
              l = "harmonyos";
              break;
            case "iphone os":
              l = "ios";
              break;
            case "mac":
            case "darwin":
              l = "macos";
              break;
            case "windows_nt":
              l = "windows"
          }
          return {
            osName: l,
            osVersion: a
          }
        }

        function be(e, t) {
          for (var a = e.deviceType || "phone", l = {
              ipad: "pad",
              windows: "pc",
              mac: "pc"
            }, n = Object.keys(l), r = t.toLocaleLowerCase(), i = 0; i < n.length; i++) {
            var o = n[i];
            if (-1 !== r.indexOf(o)) {
              a = l[o];
              break
            }
          }
          return a
        }

        function pe(e) {
          var t = e;
          return t && (t = e.toLocaleLowerCase()), t
        }

        function ge(e) {
          return oe ? oe() : e
        }

        function ye(e) {
          var t = e.hostName || "WeChat";
          return e.environment ? t = e.environment : e.host && e.host.env && (t = e.host.env), t
        }
        var Se = {
            returnValue: function(e) {
              ve(e), he(e),
                function(e) {
                  var t = e.brand,
                    a = void 0 === t ? "" : t,
                    l = e.model,
                    n = void 0 === l ? "" : l,
                    r = e.system,
                    i = void 0 === r ? "" : r,
                    o = e.language,
                    u = void 0 === o ? "" : o,
                    s = e.theme,
                    c = e.version,
                    f = e.platform,
                    v = e.fontSizeSetting,
                    h = e.SDKVersion,
                    d = e.pixelRatio,
                    b = e.deviceOrientation,
                    p = de(i, f),
                    g = p.osName,
                    y = p.osVersion,
                    S = c,
                    m = be(e, n),
                    Y = pe(a),
                    Z = ye(e),
                    L = b,
                    C = d,
                    T = h,
                    w = (u || "").replace(/_/g, "-"),
                    _ = {
                      appId: "__UNI__1C04DEB",
                      appName: "dsmall",
                      appVersion: "1.0.0",
                      appVersionCode: "100",
                      appLanguage: ge(w),
                      uniCompileVersion: "4.66",
                      uniCompilerVersion: "4.66",
                      uniRuntimeVersion: "4.66",
                      uniPlatform: "mp-weixin",
                      deviceBrand: Y,
                      deviceModel: n,
                      deviceType: m,
                      devicePixelRatio: C,
                      deviceOrientation: L,
                      osName: g.toLocaleLowerCase(),
                      osVersion: y,
                      hostTheme: s,
                      hostVersion: S,
                      hostLanguage: w,
                      hostName: Z,
                      hostSDKVersion: T,
                      hostFontSizeSetting: v,
                      windowTop: 0,
                      windowBottom: 0,
                      osLanguage: void 0,
                      osTheme: void 0,
                      ua: void 0,
                      hostPackageName: void 0,
                      browserName: void 0,
                      browserVersion: void 0,
                      isUniAppX: !1
                    };
                  Object.assign(e, _, {})
                }(e)
            }
          },
          me = {
            redirectTo: {
              name: function(e) {
                return "back" === e.exists && e.delta ? "navigateBack" : "redirectTo"
              },
              args: function(e) {
                if ("back" === e.exists && e.url) {
                  var t = function(e) {
                    for (var t = getCurrentPages(), a = t.length; a--;) {
                      var l = t[a];
                      if (l.$page && l.$page.fullPath === e) return a
                    }
                    return -1
                  }(e.url);
                  if (-1 !== t) {
                    var a = getCurrentPages().length - 1 - t;
                    a > 0 && (e.delta = a)
                  }
                }
              }
            },
            previewImage: {
              args: function(e) {
                var t = parseInt(e.current);
                if (!isNaN(t)) {
                  var a = e.urls;
                  if (Array.isArray(a)) {
                    var l = a.length;
                    if (l) return t < 0 ? t = 0 : t >= l && (t = l - 1), t > 0 ? (e.current = a[t], e.urls = a.filter((function(e, l) {
                      return !(l < t) || e !== a[t]
                    }))) : e.current = a[0], {
                      indicator: !1,
                      loop: !1
                    }
                  }
                }
              }
            },
            getSystemInfo: Se,
            getSystemInfoSync: Se,
            showActionSheet: {
              args: function(e) {
                "object" === (0, c.default)(e) && (e.alertText = e.title)
              }
            },
            getAppBaseInfo: {
              returnValue: function(e) {
                var t = e,
                  a = t.version,
                  l = t.language,
                  n = t.SDKVersion,
                  r = t.theme,
                  i = ye(e),
                  o = (l || "").replace("_", "-");
                e = X(Object.assign(e, {
                  appId: "__UNI__1C04DEB",
                  appName: "dsmall",
                  appVersion: "1.0.0",
                  appVersionCode: "100",
                  appLanguage: ge(o),
                  hostVersion: a,
                  hostLanguage: o,
                  hostName: i,
                  hostSDKVersion: n,
                  hostTheme: r,
                  isUniAppX: !1,
                  uniPlatform: "mp-weixin",
                  uniCompileVersion: "4.66",
                  uniCompilerVersion: "4.66",
                  uniRuntimeVersion: "4.66"
                }))
              }
            },
            getDeviceInfo: {
              returnValue: function(e) {
                var t = e,
                  a = t.brand,
                  l = t.model,
                  n = t.system,
                  r = void 0 === n ? "" : n,
                  i = t.platform,
                  o = void 0 === i ? "" : i,
                  u = be(e, l),
                  s = pe(a);
                ve(e);
                var c = de(r, o),
                  f = c.osName,
                  v = c.osVersion;
                e = X(Object.assign(e, {
                  deviceType: u,
                  deviceBrand: s,
                  deviceModel: l,
                  osName: f,
                  osVersion: v
                }))
              }
            },
            getWindowInfo: {
              returnValue: function(e) {
                he(e), e = X(Object.assign(e, {
                  windowTop: 0,
                  windowBottom: 0
                }))
              }
            },
            getAppAuthorizeSetting: {
              returnValue: function(e) {
                var t = e.locationReducedAccuracy;
                e.locationAccuracy = "unsupported", !0 === t ? e.locationAccuracy = "reduced" : !1 === t && (e.locationAccuracy = "full")
              }
            },
            compressImage: {
              args: function(e) {
                e.compressedHeight && !e.compressHeight && (e.compressHeight = e.compressedHeight), e.compressedWidth && !e.compressWidth && (e.compressWidth = e.compressedWidth)
              }
            }
          },
          Ye = ["success", "fail", "cancel", "complete"];

        function Ze(e, t, a) {
          return function(l) {
            return t(Ce(e, l, a))
          }
        }

        function Le(e, t) {
          var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            n = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (Z(t)) {
            var r = !0 === n ? t : {};
            for (var i in m(a) && (a = a(t, r) || {}), t)
              if (L(a, i)) {
                var o = a[i];
                m(o) && (o = o(t[i], t, r)), o ? Y(o) ? r[o] = t[i] : Z(o) && (r[o.name ? o.name : i] = o.value) : console.warn("The '".concat(e, "' method of platform '微信小程序' does not support option '").concat(i, "'"))
              } else - 1 !== Ye.indexOf(i) ? m(t[i]) && (r[i] = Ze(e, t[i], l)) : n || (r[i] = t[i]);
            return r
          }
          return m(t) && (t = Ze(e, t, l)), t
        }

        function Ce(e, t, a) {
          var l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          return m(me.returnValue) && (t = me.returnValue(e, t)), Le(e, t, a, {}, l)
        }

        function Te(t, a) {
          if (L(me, t)) {
            var l = me[t];
            return l ? function(a, n) {
              var r = l;
              m(l) && (r = l(a));
              var i = [a = Le(t, a, r.args, r.returnValue)];
              void 0 !== n && i.push(n), m(r.name) ? t = r.name(a) : Y(r.name) && (t = r.name);
              var o = e[t].apply(e, i);
              return $(t) ? Ce(t, o, r.returnValue, I(t)) : o
            } : function() {
              console.error("Platform '微信小程序' does not support '".concat(t, "'."))
            }
          }
          return a
        }
        var we = Object.create(null);
        ["onTabBarMidButtonTap", "subscribePush", "unsubscribePush", "onPush", "offPush", "share"].forEach((function(e) {
          we[e] = function(e) {
            return function(t) {
              var a = t.fail,
                l = t.complete,
                n = {
                  errMsg: "".concat(e, ":fail method '").concat(e, "' not supported")
                };
              m(a) && a(n), m(l) && l(n)
            }
          }(e)
        }));
        var _e = {
            oauth: ["weixin"],
            share: ["weixin"],
            payment: ["wxpay"],
            push: ["weixin"]
          },
          Xe = Object.freeze({
            __proto__: null,
            getProvider: function(e) {
              var t = e.service,
                a = e.success,
                l = e.fail,
                n = e.complete,
                r = !1;
              _e[t] ? (r = {
                errMsg: "getProvider:ok",
                service: t,
                provider: _e[t]
              }, m(a) && a(r)) : (r = {
                errMsg: "getProvider:fail service not found"
              }, m(l) && l(r)), m(n) && n(r)
            }
          }),
          Je = function() {
            var e;
            return function() {
              return e || (e = new v.default), e
            }
          }();

        function Pe(e, t, a) {
          return e[t].apply(e, a)
        }
        var Me, De, xe, Be = Object.freeze({
          __proto__: null,
          $on: function() {
            return Pe(Je(), "$on", Array.prototype.slice.call(arguments))
          },
          $off: function() {
            return Pe(Je(), "$off", Array.prototype.slice.call(arguments))
          },
          $once: function() {
            return Pe(Je(), "$once", Array.prototype.slice.call(arguments))
          },
          $emit: function() {
            return Pe(Je(), "$emit", Array.prototype.slice.call(arguments))
          }
        });

        function He(e) {
          return function() {
            try {
              return e.apply(e, arguments)
            } catch (e) {
              console.error(e)
            }
          }
        }

        function Qe(e) {
          try {
            return JSON.parse(e)
          } catch (e) {}
          return e
        }
        var Ae = [];

        function Fe(e, t) {
          Ae.forEach((function(a) {
            a(e, t)
          })), Ae.length = 0
        }
        var Ne = [],
          Ee = e.getAppBaseInfo && e.getAppBaseInfo();
        Ee || (Ee = e.getSystemInfoSync());
        var Oe = Ee ? Ee.host : null,
          We = Oe && "SAAASDK" === Oe.env ? e.miniapp.shareVideoMessage : e.shareVideoMessage,
          ke = Object.freeze({
            __proto__: null,
            shareVideoMessage: We,
            getPushClientId: function(e) {
              Z(e) || (e = {});
              var t = function(e) {
                  var t = {};
                  for (var a in e) {
                    var l = e[a];
                    m(l) && (t[a] = He(l), delete e[a])
                  }
                  return t
                }(e),
                a = t.success,
                l = t.fail,
                n = t.complete,
                r = m(a),
                i = m(l),
                o = m(n);
              Promise.resolve().then((function() {
                void 0 === xe && (xe = !1, Me = "", De = "uniPush is not enabled"), Ae.push((function(e, t) {
                  var u;
                  e ? (u = {
                    errMsg: "getPushClientId:ok",
                    cid: e
                  }, r && a(u)) : (u = {
                    errMsg: "getPushClientId:fail" + (t ? " " + t : "")
                  }, i && l(u)), o && n(u)
                })), void 0 !== Me && Fe(Me, De)
              }))
            },
            onPushMessage: function(e) {
              -1 === Ne.indexOf(e) && Ne.push(e)
            },
            offPushMessage: function(e) {
              if (e) {
                var t = Ne.indexOf(e);
                t > -1 && Ne.splice(t, 1)
              } else Ne.length = 0
            },
            invokePushCallback: function(e) {
              if ("enabled" === e.type) xe = !0;
              else if ("clientId" === e.type) Me = e.cid, De = e.errMsg, Fe(Me, e.errMsg);
              else if ("pushMsg" === e.type)
                for (var t = {
                    type: "receive",
                    data: Qe(e.message)
                  }, a = 0; a < Ne.length; a++) {
                  if ((0, Ne[a])(t), t.stopped) break
                } else "click" === e.type && Ne.forEach((function(t) {
                  t({
                    type: "click",
                    data: Qe(e.message)
                  })
                }))
            },
            __f__: function(e) {
              for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++) a[l - 1] = arguments[l];
              console[e].apply(console, a)
            }
          }),
          Ge = ["__route__", "__wxExparserNodeId__", "__wxWebviewId__"];

        function Re(e) {
          return Behavior(e)
        }

        function Ke() {
          return !!this.route
        }

        function Ie(e) {
          this.triggerEvent("__l", e)
        }

        function $e(e) {
          var t = e.$scope,
            a = {};
          Object.defineProperty(e, "$refs", {
            get: function() {
              var e = {};
              return function e(t, a, l) {
                  (t.selectAllComponents(a) || []).forEach((function(t) {
                    var n = t.dataset.ref;
                    l[n] = t.$vm || Ue(t), "scoped" === t.dataset.vueGeneric && t.selectAllComponents(".scoped-ref").forEach((function(t) {
                      e(t, a, l)
                    }))
                  }))
                }(t, ".vue-ref", e), (t.selectAllComponents(".vue-ref-in-for") || []).forEach((function(t) {
                  var a = t.dataset.ref;
                  e[a] || (e[a] = []), e[a].push(t.$vm || Ue(t))
                })),
                function(e, t) {
                  var a = (0, u.default)(Set, (0, s.default)(Object.keys(e)));
                  return Object.keys(t).forEach((function(l) {
                    var n = e[l],
                      r = t[l];
                    Array.isArray(n) && Array.isArray(r) && n.length === r.length && r.every((function(e) {
                      return n.includes(e)
                    })) || (e[l] = r, a.delete(l))
                  })), a.forEach((function(t) {
                    delete e[t]
                  })), e
                }(a, e)
            }
          })
        }

        function je(e) {
          var t, a = e.detail || e.value,
            l = a.vuePid,
            n = a.vueOptions;
          l && (t = function e(t, a) {
            for (var l, n = t.$children, r = n.length - 1; r >= 0; r--) {
              var i = n[r];
              if (i.$scope._$vueId === a) return i
            }
            for (var o = n.length - 1; o >= 0; o--)
              if (l = e(n[o], a)) return l
          }(this.$vm, l)), t || (t = this.$vm), n.parent = t
        }

        function ze(e) {
          return Object.defineProperty(e, "__v_isMPComponent", {
            configurable: !0,
            enumerable: !1,
            value: !0
          }), e
        }

        function Ue(e) {
          return function(e) {
            return null !== e && "object" === (0, c.default)(e)
          }(e) && Object.isExtensible(e) && Object.defineProperty(e, "__ob__", {
            configurable: !0,
            enumerable: !1,
            value: (0, o.default)({}, "__v_skip", !0)
          }), e
        }
        var qe = /_(.*)_worklet_factory_/,
          Ve = Page,
          et = Component,
          tt = /:/g,
          at = T((function(e) {
            return _(e.replace(tt, "-"))
          }));

        function lt(e) {
          var t = e.triggerEvent,
            a = function(e) {
              for (var a = arguments.length, l = new Array(a > 1 ? a - 1 : 0), n = 1; n < a; n++) l[n - 1] = arguments[n];
              if (this.$vm || this.dataset && this.dataset.comType) e = at(e);
              else {
                var r = at(e);
                r !== e && t.apply(this, [r].concat(l))
              }
              return t.apply(this, [e].concat(l))
            };
          try {
            e.triggerEvent = a
          } catch (t) {
            e._triggerEvent = a
          }
        }

        function nt(e, t, a) {
          var l = t[e];
          t[e] = function() {
            if (ze(this), lt(this), l) {
              for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
              return l.apply(this, t)
            }
          }
        }

        function rt(e, t, a) {
          t.forEach((function(t) {
            (function e(t, a) {
              if (!a) return !0;
              if (v.default.options && Array.isArray(v.default.options[t])) return !0;
              if (m(a = a.default || a)) return !!m(a.extendOptions[t]) || !!(a.super && a.super.options && Array.isArray(a.super.options[t]));
              if (m(a[t]) || Array.isArray(a[t])) return !0;
              var l = a.mixins;
              return Array.isArray(l) ? !!l.find((function(a) {
                return e(t, a)
              })) : void 0
            })(t, a) && (e[t] = function(e) {
              return this.$vm && this.$vm.__call_hook(t, e)
            })
          }))
        }

        function it(e, t) {
          var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          ot(t).forEach((function(t) {
            return ut(e, t, a)
          }))
        }

        function ot(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          return e && Object.keys(e).forEach((function(a) {
            0 === a.indexOf("on") && m(e[a]) && t.push(a)
          })), t
        }

        function ut(e, t, a) {
          -1 !== a.indexOf(t) || L(e, t) || (e[t] = function(e) {
            return this.$vm && this.$vm.__call_hook(t, e)
          })
        }

        function st(e, t) {
          var a;
          return [a = m(t = t.default || t) ? t : e.extend(t), t = a.options]
        }

        function ct(e, t) {
          if (Array.isArray(t) && t.length) {
            var a = Object.create(null);
            t.forEach((function(e) {
              a[e] = !0
            })), e.$scopedSlots = e.$slots = a
          }
        }

        function ft(e, t) {
          var a = (e = (e || "").split(",")).length;
          1 === a ? t._$vueId = e[0] : 2 === a && (t._$vueId = e[0], t._$vuePid = e[1])
        }

        function vt(e, t) {
          var a = e.data || {},
            l = e.methods || {};
          if ("function" == typeof a) try {
            a = a.call(t)
          } catch (e) {
            Object({
              NODE_ENV: "production",
              VUE_APP_DARK_MODE: "false",
              VUE_APP_NAME: "dsmall",
              VUE_APP_PLATFORM: "mp-weixin",
              BASE_URL: "/"
            }).VUE_APP_DEBUG && console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。", a)
          } else try {
            a = JSON.parse(JSON.stringify(a))
          } catch (e) {}
          return Z(a) || (a = {}), Object.keys(l).forEach((function(e) {
            -1 !== t.__lifecycle_hooks__.indexOf(e) || L(a, e) || (a[e] = l[e])
          })), a
        }
        Ve.__$wrappered || (Ve.__$wrappered = !0, Page = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return nt("onLoad", e), Ve(e)
        }, Page.after = Ve.after, Component = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return nt("created", e), et(e)
        });
        var ht = [String, Number, Boolean, Object, Array, null];

        function dt(e) {
          return function(t, a) {
            this.$vm && (this.$vm[e] = t)
          }
        }

        function bt(e, t) {
          var a = e.behaviors,
            l = e.extends,
            n = e.mixins,
            r = e.props;
          r || (e.props = r = []);
          var i = [];
          return Array.isArray(a) && a.forEach((function(e) {
            i.push(e.replace("uni://", "wx".concat("://"))), "uni://form-field" === e && (Array.isArray(r) ? (r.push("name"), r.push("value")) : (r.name = {
              type: String,
              default: ""
            }, r.value = {
              type: [String, Number, Boolean, Array, Object, Date],
              default: ""
            }))
          })), Z(l) && l.props && i.push(t({
            properties: gt(l.props, !0)
          })), Array.isArray(n) && n.forEach((function(e) {
            Z(e) && e.props && i.push(t({
              properties: gt(e.props, !0)
            }))
          })), i
        }

        function pt(e, t, a, l) {
          return Array.isArray(t) && 1 === t.length ? t[0] : t
        }

        function gt(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            a = arguments.length > 3 ? arguments[3] : void 0,
            l = {};
          return t || (l.vueId = {
            type: String,
            value: ""
          }, a.virtualHost && (l.virtualHostStyle = {
            type: null,
            value: ""
          }, l.virtualHostClass = {
            type: null,
            value: ""
          }), l.scopedSlotsCompiler = {
            type: String,
            value: ""
          }, l.vueSlots = {
            type: null,
            value: [],
            observer: function(e, t) {
              var a = Object.create(null);
              e.forEach((function(e) {
                a[e] = !0
              })), this.setData({
                $slots: a
              })
            }
          }), Array.isArray(e) ? e.forEach((function(e) {
            l[e] = {
              type: null,
              observer: dt(e)
            }
          })) : Z(e) && Object.keys(e).forEach((function(t) {
            var a = e[t];
            if (Z(a)) {
              var n = a.default;
              m(n) && (n = n()), a.type = pt(0, a.type), l[t] = {
                type: -1 !== ht.indexOf(a.type) ? a.type : null,
                value: n,
                observer: dt(t)
              }
            } else {
              var r = pt(0, a);
              l[t] = {
                type: -1 !== ht.indexOf(r) ? r : null,
                observer: dt(t)
              }
            }
          })), l
        }

        function yt(e, t, a, l) {
          var n = {};
          return Array.isArray(t) && t.length && t.forEach((function(t, r) {
            "string" == typeof t ? t ? "$event" === t ? n["$" + r] = a : "arguments" === t ? n["$" + r] = a.detail && a.detail.__args__ || l : 0 === t.indexOf("$event.") ? n["$" + r] = e.__get_value(t.replace("$event.", ""), a) : n["$" + r] = e.__get_value(t) : n["$" + r] = e : n["$" + r] = function(e, t) {
              var a = e;
              return t.forEach((function(t) {
                var l = t[0],
                  n = t[2];
                if (l || void 0 !== n) {
                  var r, i = t[1],
                    o = t[3];
                  Number.isInteger(l) ? r = l : l ? "string" == typeof l && l && (r = 0 === l.indexOf("#s#") ? l.substr(3) : e.__get_value(l, a)) : r = a, Number.isInteger(r) ? a = n : i ? Array.isArray(r) ? a = r.find((function(t) {
                    return e.__get_value(i, t) === n
                  })) : Z(r) ? a = Object.keys(r).find((function(t) {
                    return e.__get_value(i, r[t]) === n
                  })) : console.error("v-for 暂不支持循环数据：", r) : a = r[n], o && (a = e.__get_value(o, a))
                }
              })), a
            }(e, t)
          })), n
        }

        function St(e) {
          for (var t = {}, a = 1; a < e.length; a++) {
            var l = e[a];
            t[l[0]] = l[1]
          }
          return t
        }

        function mt(e, t) {
          var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
            n = arguments.length > 4 ? arguments[4] : void 0,
            r = arguments.length > 5 ? arguments[5] : void 0,
            i = !1,
            o = Z(t.detail) && t.detail.__args__ || [t.detail];
          if (n && (i = t.currentTarget && t.currentTarget.dataset && "wx" === t.currentTarget.dataset.comType, !a.length)) return i ? [t] : o;
          var u = yt(e, l, t, o),
            s = [];
          return a.forEach((function(e) {
            "$event" === e ? "__set_model" !== r || n ? n && !i ? s.push(o[0]) : s.push(t) : s.push(t.target.value) : Array.isArray(e) && "o" === e[0] ? s.push(St(e)) : "string" == typeof e && L(u, e) ? s.push(u[e]) : s.push(e)
          })), s
        }

        function Yt(e) {
          var t = this,
            a = ((e = function(e) {
              try {
                e.mp = JSON.parse(JSON.stringify(e))
              } catch (e) {}
              return e.stopPropagation = C, e.preventDefault = C, e.target = e.target || {}, L(e, "detail") || (e.detail = {}), L(e, "markerId") && (e.detail = "object" === (0, c.default)(e.detail) ? e.detail : {}, e.detail.markerId = e.markerId), Z(e.detail) && (e.target = Object.assign({}, e.target, e.detail)), e
            }(e)).currentTarget || e.target).dataset;
          if (!a) return console.warn("事件信息不存在");
          var l = a.eventOpts || a["event-opts"];
          if (!l) return console.warn("事件信息不存在");
          var n = e.type,
            r = [];
          return l.forEach((function(a) {
            var l = a[0],
              i = a[1],
              o = "^" === l.charAt(0),
              u = "~" === (l = o ? l.slice(1) : l).charAt(0);
            l = u ? l.slice(1) : l, i && function(e, t) {
              return e === t || "regionchange" === t && ("begin" === e || "end" === e)
            }(n, l) && i.forEach((function(a) {
              var l = a[0];
              if (l) {
                var n = t.$vm;
                if (n.$options.generic && (n = function(e) {
                    for (var t = e.$parent; t && t.$parent && (t.$options.generic || t.$parent.$options.generic || t.$scope._$vuePid);) t = t.$parent;
                    return t && t.$parent
                  }(n) || n), "$emit" === l) return void n.$emit.apply(n, mt(t.$vm, e, a[1], a[2], o, l));
                var i = n[l];
                if (!m(i)) {
                  var s = "page" === t.$vm.mpType ? "Page" : "Component",
                    c = t.route || t.is;
                  throw new Error("".concat(s, ' "').concat(c, '" does not have a method "').concat(l, '"'))
                }
                if (u) {
                  if (i.once) return;
                  i.once = !0
                }
                var f = mt(t.$vm, e, a[1], a[2], o, l);
                f = Array.isArray(f) ? f : [], /=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(i.toString()) && (f = f.concat([, , , , , , , , , , e])), r.push(i.apply(n, f))
              }
            }))
          })), "input" === n && 1 === r.length && void 0 !== r[0] ? r[0] : void 0
        }
        var Zt = {},
          Lt = ["onShow", "onHide", "onError", "onPageNotFound", "onThemeChange", "onUnhandledRejection"];

        function Ct(t, a) {
          var l = a.mocks,
            n = a.initRefs;
          (function() {
            v.default.prototype.getOpenerEventChannel = function() {
              return this.$scope.getOpenerEventChannel()
            };
            var e = v.default.prototype.__call_hook;
            v.default.prototype.__call_hook = function(t, a) {
              return "onLoad" === t && a && a.__id__ && (this.__eventChannel__ = function(e) {
                var t = Zt[e];
                return delete Zt[e], t
              }(a.__id__), delete a.__id__), e.call(this, t, a)
            }
          })(),
          function() {
            var e = {},
              t = {};

            function a(e) {
              var t = this.$options.propsData.vueId;
              t && e(t.split(",")[0])
            }
            v.default.prototype.$hasSSP = function(a) {
              var l = e[a];
              return l || (t[a] = this, this.$on("hook:destroyed", (function() {
                delete t[a]
              }))), l
            }, v.default.prototype.$getSSP = function(t, a, l) {
              var n = e[t];
              if (n) {
                var r = n[a] || [];
                return l ? r : r[0]
              }
            }, v.default.prototype.$setSSP = function(t, l) {
              var n = 0;
              return a.call(this, (function(a) {
                var r = e[a],
                  i = r[t] = r[t] || [];
                i.push(l), n = i.length - 1
              })), n
            }, v.default.prototype.$initSSP = function() {
              a.call(this, (function(t) {
                e[t] = {}
              }))
            }, v.default.prototype.$callSSP = function() {
              a.call(this, (function(e) {
                t[e] && t[e].$forceUpdate()
              }))
            }, v.default.mixin({
              destroyed: function() {
                var a = this.$options.propsData,
                  l = a && a.vueId;
                l && (delete e[l], delete t[l])
              }
            })
          }(), t.$options.store && (v.default.prototype.$store = t.$options.store),
            function(e) {
              e.prototype.uniIDHasRole = function(e) {
                return g().role.indexOf(e) > -1
              }, e.prototype.uniIDHasPermission = function(e) {
                var t = g().permission;
                return this.uniIDHasRole("admin") || t.indexOf(e) > -1
              }, e.prototype.uniIDTokenValid = function() {
                return g().tokenExpired > Date.now()
              }
            }(v.default), v.default.prototype.mpHost = "mp-weixin", v.default.mixin({
              beforeCreate: function() {
                if (this.$options.mpType) {
                  if (this.mpType = this.$options.mpType, this.$mp = (0, o.default)({
                      data: {}
                    }, this.mpType, this.$options.mpInstance), this.$scope = this.$options.mpInstance, delete this.$options.mpType, delete this.$options.mpInstance, "page" === this.mpType && "function" == typeof getApp) {
                    var e = getApp();
                    e.$vm && e.$vm.$i18n && (this._i18n = e.$vm.$i18n)
                  }
                  "app" !== this.mpType && (n(this), function(e, t) {
                    var a = e.$mp[e.mpType];
                    t.forEach((function(t) {
                      L(a, t) && (e[t] = a[t])
                    }))
                  }(this, l))
                }
              }
            });
          var r = {
            onLaunch: function(a) {
              this.$vm || (e.canIUse && !e.canIUse("nextTick") && console.error("当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上"), this.$vm = t, this.$vm.$mp = {
                app: this
              }, this.$vm.$scope = this, this.$vm.globalData = this.globalData, this.$vm._isMounted = !0, this.$vm.__call_hook("mounted", a), this.$vm.__call_hook("onLaunch", a))
            }
          };
          r.globalData = t.$options.globalData || {};
          var i = t.$options.methods;
          return i && Object.keys(i).forEach((function(e) {
              r[e] = i[e]
            })),
            function(e, t, a) {
              var l = e.observable({
                  locale: a || ne.getLocale()
                }),
                n = [];
              t.$watchLocale = function(e) {
                n.push(e)
              }, Object.defineProperty(t, "$locale", {
                get: function() {
                  return l.locale
                },
                set: function(e) {
                  l.locale = e, n.forEach((function(t) {
                    return t(e)
                  }))
                }
              })
            }(v.default, t, function() {
              var t = e.getAppBaseInfo();
              return ie(t && t.language ? t.language : "en") || "en"
            }()), rt(r, Lt), it(r, t.$options), r
        }

        function Tt(e) {
          return Ct(e, {
            mocks: Ge,
            initRefs: $e
          })
        }

        function wt(e) {
          return App(Tt(e)), e
        }
        var _t = /[!'()*]/g,
          Xt = function(e) {
            return "%" + e.charCodeAt(0).toString(16)
          },
          Jt = /%2C/g,
          Pt = function(e) {
            return encodeURIComponent(e).replace(_t, Xt).replace(Jt, ",")
          };

        function Mt(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Pt,
            a = e ? Object.keys(e).map((function(a) {
              var l = e[a];
              if (void 0 === l) return "";
              if (null === l) return t(a);
              if (Array.isArray(l)) {
                var n = [];
                return l.forEach((function(e) {
                  void 0 !== e && (null === e ? n.push(t(a)) : n.push(t(a) + "=" + t(e)))
                })), n.join("&")
              }
              return t(a) + "=" + t(l)
            })).filter((function(e) {
              return e.length > 0
            })).join("&") : null;
          return a ? "?".concat(a) : ""
        }

        function Dt(e, t) {
          return function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              a = t.isPage,
              l = t.initRelation,
              n = arguments.length > 2 ? arguments[2] : void 0,
              r = st(v.default, e),
              o = (0, i.default)(r, 2),
              u = o[0],
              s = o[1],
              c = d({
                multipleSlots: !0,
                addGlobalClass: !0
              }, s.options || {});
            s["mp-weixin"] && s["mp-weixin"].options && Object.assign(c, s["mp-weixin"].options);
            var f = {
              options: c,
              data: vt(s, v.default.prototype),
              behaviors: bt(s, Re),
              properties: gt(s.props, !1, s.__file, c),
              lifetimes: {
                attached: function() {
                  var e = this.properties,
                    t = {
                      mpType: a.call(this) ? "page" : "component",
                      mpInstance: this,
                      propsData: e
                    };
                  ft(e.vueId, this), l.call(this, {
                    vuePid: this._$vuePid,
                    vueOptions: t
                  }), this.$vm = new u(t), ct(this.$vm, e.vueSlots), this.$vm.$mount()
                },
                ready: function() {
                  this.$vm && (this.$vm._isMounted = !0, this.$vm.__call_hook("mounted"), this.$vm.__call_hook("onReady"))
                },
                detached: function() {
                  this.$vm && this.$vm.$destroy()
                }
              },
              pageLifetimes: {
                show: function(e) {
                  this.$vm && this.$vm.__call_hook("onPageShow", e)
                },
                hide: function() {
                  this.$vm && this.$vm.__call_hook("onPageHide")
                },
                resize: function(e) {
                  this.$vm && this.$vm.__call_hook("onPageResize", e)
                }
              },
              methods: {
                __l: je,
                __e: Yt
              }
            };
            return s.externalClasses && (f.externalClasses = s.externalClasses), Array.isArray(s.wxsCallMethods) && s.wxsCallMethods.forEach((function(e) {
              f.methods[e] = function(t) {
                return this.$vm[e](t)
              }
            })), n ? [f, s, u] : a ? f : [f, u]
          }(e, {
            isPage: Ke,
            initRelation: Ie
          }, t)
        }
        var xt = ["onShow", "onHide", "onUnload"];

        function Bt(e) {
          return Component(function(e) {
            return function(e) {
              var t = Dt(e, !0),
                a = (0, i.default)(t, 2),
                l = a[0],
                n = a[1];
              return rt(l.methods, xt, n), l.methods.onLoad = function(e) {
                  this.options = e;
                  var t = Object.assign({}, e);
                  delete t.__id__, this.$page = {
                    fullPath: "/" + (this.route || this.is) + Mt(t)
                  }, this.$vm.$mp.query = e, this.$vm.__call_hook("onLoad", e)
                }, it(l.methods, e, ["onReady"]),
                function(e, t) {
                  t && Object.keys(t).forEach((function(a) {
                    var l = a.match(qe);
                    if (l) {
                      var n = l[1];
                      e[a] = t[a], e[n] = t[n]
                    }
                  }))
                }(l.methods, n.methods), l
            }(e)
          }(e))
        }

        function Ht(e) {
          return Component(Dt(e))
        }

        function Qt(t) {
          var a = Tt(t),
            l = getApp({
              allowDefault: !0
            });
          t.$scope = l;
          var n = l.globalData;
          if (n && Object.keys(a.globalData).forEach((function(e) {
              L(n, e) || (n[e] = a.globalData[e])
            })), Object.keys(a).forEach((function(e) {
              L(l, e) || (l[e] = a[e])
            })), m(a.onShow) && e.onAppShow && e.onAppShow((function() {
              for (var e = arguments.length, a = new Array(e), l = 0; l < e; l++) a[l] = arguments[l];
              t.__call_hook("onShow", a)
            })), m(a.onHide) && e.onAppHide && e.onAppHide((function() {
              for (var e = arguments.length, a = new Array(e), l = 0; l < e; l++) a[l] = arguments[l];
              t.__call_hook("onHide", a)
            })), m(a.onLaunch)) {
            var r = e.getLaunchOptionsSync && e.getLaunchOptionsSync();
            t.__call_hook("onLaunch", r)
          }
          return t
        }

        function At(t) {
          var a = Tt(t);
          if (m(a.onShow) && e.onAppShow && e.onAppShow((function() {
              for (var e = arguments.length, a = new Array(e), l = 0; l < e; l++) a[l] = arguments[l];
              t.__call_hook("onShow", a)
            })), m(a.onHide) && e.onAppHide && e.onAppHide((function() {
              for (var e = arguments.length, a = new Array(e), l = 0; l < e; l++) a[l] = arguments[l];
              t.__call_hook("onHide", a)
            })), m(a.onLaunch)) {
            var l = e.getLaunchOptionsSync && e.getLaunchOptionsSync();
            t.__call_hook("onLaunch", l)
          }
          return t
        }
        xt.push.apply(xt, ["onPullDownRefresh", "onReachBottom", "onAddToFavorites", "onShareTimeline", "onShareAppMessage", "onPageScroll", "onResize", "onTabItemTap"]), ["vibrate", "preloadPage", "unPreloadPage", "loadSubPackage"].forEach((function(e) {
          me[e] = !1
        })), [].forEach((function(t) {
          var a = me[t] && me[t].name ? me[t].name : t;
          e.canIUse(a) || (me[t] = !1)
        }));
        var Ft = {};
        "undefined" != typeof Proxy ? Ft = new Proxy({}, {
          get: function(t, a) {
            return L(t, a) ? t[a] : fe[a] ? fe[a] : ke[a] ? z(a, ke[a]) : Xe[a] ? z(a, Xe[a]) : we[a] ? z(a, we[a]) : Be[a] ? Be[a] : z(a, Te(a, e[a]))
          },
          set: function(e, t, a) {
            return e[t] = a, !0
          }
        }) : (Object.keys(fe).forEach((function(e) {
          Ft[e] = fe[e]
        })), Object.keys(we).forEach((function(e) {
          Ft[e] = z(e, we[e])
        })), Object.keys(Xe).forEach((function(e) {
          Ft[e] = z(e, Xe[e])
        })), Object.keys(Be).forEach((function(e) {
          Ft[e] = Be[e]
        })), Object.keys(ke).forEach((function(e) {
          Ft[e] = z(e, ke[e])
        })), Object.keys(e).forEach((function(t) {
          (L(e, t) || L(me, t)) && (Ft[t] = z(t, Te(t, e[t])))
        }))), e.createApp = wt, e.createPage = Bt, e.createComponent = Ht, e.createSubpackageApp = Qt, e.createPlugin = At;
        var Nt = Ft;
        t.default = Nt
      }).call(this, a("3223").default, a("0ee4"))
    },
    df75: function(e, t, a) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = [
        [
          [{
            label: "东城区",
            value: "110101"
          }, {
            label: "西城区",
            value: "110102"
          }, {
            label: "朝阳区",
            value: "110105"
          }, {
            label: "丰台区",
            value: "110106"
          }, {
            label: "石景山区",
            value: "110107"
          }, {
            label: "海淀区",
            value: "110108"
          }, {
            label: "门头沟区",
            value: "110109"
          }, {
            label: "房山区",
            value: "110111"
          }, {
            label: "通州区",
            value: "110112"
          }, {
            label: "顺义区",
            value: "110113"
          }, {
            label: "昌平区",
            value: "110114"
          }, {
            label: "大兴区",
            value: "110115"
          }, {
            label: "怀柔区",
            value: "110116"
          }, {
            label: "平谷区",
            value: "110117"
          }, {
            label: "密云区",
            value: "110118"
          }, {
            label: "延庆区",
            value: "110119"
          }]
        ],
        [
          [{
            label: "和平区",
            value: "120101"
          }, {
            label: "河东区",
            value: "120102"
          }, {
            label: "河西区",
            value: "120103"
          }, {
            label: "南开区",
            value: "120104"
          }, {
            label: "河北区",
            value: "120105"
          }, {
            label: "红桥区",
            value: "120106"
          }, {
            label: "东丽区",
            value: "120110"
          }, {
            label: "西青区",
            value: "120111"
          }, {
            label: "津南区",
            value: "120112"
          }, {
            label: "北辰区",
            value: "120113"
          }, {
            label: "武清区",
            value: "120114"
          }, {
            label: "宝坻区",
            value: "120115"
          }, {
            label: "滨海新区",
            value: "120116"
          }, {
            label: "宁河区",
            value: "120117"
          }, {
            label: "静海区",
            value: "120118"
          }, {
            label: "蓟州区",
            value: "120119"
          }]
        ],
        [
          [{
            label: "长安区",
            value: "130102"
          }, {
            label: "桥西区",
            value: "130104"
          }, {
            label: "新华区",
            value: "130105"
          }, {
            label: "井陉矿区",
            value: "130107"
          }, {
            label: "裕华区",
            value: "130108"
          }, {
            label: "藁城区",
            value: "130109"
          }, {
            label: "鹿泉区",
            value: "130110"
          }, {
            label: "栾城区",
            value: "130111"
          }, {
            label: "井陉县",
            value: "130121"
          }, {
            label: "正定县",
            value: "130123"
          }, {
            label: "行唐县",
            value: "130125"
          }, {
            label: "灵寿县",
            value: "130126"
          }, {
            label: "高邑县",
            value: "130127"
          }, {
            label: "深泽县",
            value: "130128"
          }, {
            label: "赞皇县",
            value: "130129"
          }, {
            label: "无极县",
            value: "130130"
          }, {
            label: "平山县",
            value: "130131"
          }, {
            label: "元氏县",
            value: "130132"
          }, {
            label: "赵县",
            value: "130133"
          }, {
            label: "石家庄高新技术产业开发区",
            value: "130171"
          }, {
            label: "石家庄循环化工园区",
            value: "130172"
          }, {
            label: "辛集市",
            value: "130181"
          }, {
            label: "晋州市",
            value: "130183"
          }, {
            label: "新乐市",
            value: "130184"
          }],
          [{
            label: "路南区",
            value: "130202"
          }, {
            label: "路北区",
            value: "130203"
          }, {
            label: "古冶区",
            value: "130204"
          }, {
            label: "开平区",
            value: "130205"
          }, {
            label: "丰南区",
            value: "130207"
          }, {
            label: "丰润区",
            value: "130208"
          }, {
            label: "曹妃甸区",
            value: "130209"
          }, {
            label: "滦县",
            value: "130223"
          }, {
            label: "滦南县",
            value: "130224"
          }, {
            label: "乐亭县",
            value: "130225"
          }, {
            label: "迁西县",
            value: "130227"
          }, {
            label: "玉田县",
            value: "130229"
          }, {
            label: "唐山市芦台经济技术开发区",
            value: "130271"
          }, {
            label: "唐山市汉沽管理区",
            value: "130272"
          }, {
            label: "唐山高新技术产业开发区",
            value: "130273"
          }, {
            label: "河北唐山海港经济开发区",
            value: "130274"
          }, {
            label: "遵化市",
            value: "130281"
          }, {
            label: "迁安市",
            value: "130283"
          }],
          [{
            label: "海港区",
            value: "130302"
          }, {
            label: "山海关区",
            value: "130303"
          }, {
            label: "北戴河区",
            value: "130304"
          }, {
            label: "抚宁区",
            value: "130306"
          }, {
            label: "青龙满族自治县",
            value: "130321"
          }, {
            label: "昌黎县",
            value: "130322"
          }, {
            label: "卢龙县",
            value: "130324"
          }, {
            label: "秦皇岛市经济技术开发区",
            value: "130371"
          }, {
            label: "北戴河新区",
            value: "130372"
          }],
          [{
            label: "邯山区",
            value: "130402"
          }, {
            label: "丛台区",
            value: "130403"
          }, {
            label: "复兴区",
            value: "130404"
          }, {
            label: "峰峰矿区",
            value: "130406"
          }, {
            label: "肥乡区",
            value: "130407"
          }, {
            label: "永年区",
            value: "130408"
          }, {
            label: "临漳县",
            value: "130423"
          }, {
            label: "成安县",
            value: "130424"
          }, {
            label: "大名县",
            value: "130425"
          }, {
            label: "涉县",
            value: "130426"
          }, {
            label: "磁县",
            value: "130427"
          }, {
            label: "邱县",
            value: "130430"
          }, {
            label: "鸡泽县",
            value: "130431"
          }, {
            label: "广平县",
            value: "130432"
          }, {
            label: "馆陶县",
            value: "130433"
          }, {
            label: "魏县",
            value: "130434"
          }, {
            label: "曲周县",
            value: "130435"
          }, {
            label: "邯郸经济技术开发区",
            value: "130471"
          }, {
            label: "邯郸冀南新区",
            value: "130473"
          }, {
            label: "武安市",
            value: "130481"
          }],
          [{
            label: "桥东区",
            value: "130502"
          }, {
            label: "桥西区",
            value: "130503"
          }, {
            label: "邢台县",
            value: "130521"
          }, {
            label: "临城县",
            value: "130522"
          }, {
            label: "内丘县",
            value: "130523"
          }, {
            label: "柏乡县",
            value: "130524"
          }, {
            label: "隆尧县",
            value: "130525"
          }, {
            label: "任县",
            value: "130526"
          }, {
            label: "南和县",
            value: "130527"
          }, {
            label: "宁晋县",
            value: "130528"
          }, {
            label: "巨鹿县",
            value: "130529"
          }, {
            label: "新河县",
            value: "130530"
          }, {
            label: "广宗县",
            value: "130531"
          }, {
            label: "平乡县",
            value: "130532"
          }, {
            label: "威县",
            value: "130533"
          }, {
            label: "清河县",
            value: "130534"
          }, {
            label: "临西县",
            value: "130535"
          }, {
            label: "河北邢台经济开发区",
            value: "130571"
          }, {
            label: "南宫市",
            value: "130581"
          }, {
            label: "沙河市",
            value: "130582"
          }],
          [{
            label: "竞秀区",
            value: "130602"
          }, {
            label: "莲池区",
            value: "130606"
          }, {
            label: "满城区",
            value: "130607"
          }, {
            label: "清苑区",
            value: "130608"
          }, {
            label: "徐水区",
            value: "130609"
          }, {
            label: "涞水县",
            value: "130623"
          }, {
            label: "阜平县",
            value: "130624"
          }, {
            label: "定兴县",
            value: "130626"
          }, {
            label: "唐县",
            value: "130627"
          }, {
            label: "高阳县",
            value: "130628"
          }, {
            label: "容城县",
            value: "130629"
          }, {
            label: "涞源县",
            value: "130630"
          }, {
            label: "望都县",
            value: "130631"
          }, {
            label: "安新县",
            value: "130632"
          }, {
            label: "易县",
            value: "130633"
          }, {
            label: "曲阳县",
            value: "130634"
          }, {
            label: "蠡县",
            value: "130635"
          }, {
            label: "顺平县",
            value: "130636"
          }, {
            label: "博野县",
            value: "130637"
          }, {
            label: "雄县",
            value: "130638"
          }, {
            label: "保定高新技术产业开发区",
            value: "130671"
          }, {
            label: "保定白沟新城",
            value: "130672"
          }, {
            label: "涿州市",
            value: "130681"
          }, {
            label: "定州市",
            value: "130682"
          }, {
            label: "安国市",
            value: "130683"
          }, {
            label: "高碑店市",
            value: "130684"
          }],
          [{
            label: "桥东区",
            value: "130702"
          }, {
            label: "桥西区",
            value: "130703"
          }, {
            label: "宣化区",
            value: "130705"
          }, {
            label: "下花园区",
            value: "130706"
          }, {
            label: "万全区",
            value: "130708"
          }, {
            label: "崇礼区",
            value: "130709"
          }, {
            label: "张北县",
            value: "130722"
          }, {
            label: "康保县",
            value: "130723"
          }, {
            label: "沽源县",
            value: "130724"
          }, {
            label: "尚义县",
            value: "130725"
          }, {
            label: "蔚县",
            value: "130726"
          }, {
            label: "阳原县",
            value: "130727"
          }, {
            label: "怀安县",
            value: "130728"
          }, {
            label: "怀来县",
            value: "130730"
          }, {
            label: "涿鹿县",
            value: "130731"
          }, {
            label: "赤城县",
            value: "130732"
          }, {
            label: "张家口市高新技术产业开发区",
            value: "130771"
          }, {
            label: "张家口市察北管理区",
            value: "130772"
          }, {
            label: "张家口市塞北管理区",
            value: "130773"
          }],
          [{
            label: "双桥区",
            value: "130802"
          }, {
            label: "双滦区",
            value: "130803"
          }, {
            label: "鹰手营子矿区",
            value: "130804"
          }, {
            label: "承德县",
            value: "130821"
          }, {
            label: "兴隆县",
            value: "130822"
          }, {
            label: "滦平县",
            value: "130824"
          }, {
            label: "隆化县",
            value: "130825"
          }, {
            label: "丰宁满族自治县",
            value: "130826"
          }, {
            label: "宽城满族自治县",
            value: "130827"
          }, {
            label: "围场满族蒙古族自治县",
            value: "130828"
          }, {
            label: "承德高新技术产业开发区",
            value: "130871"
          }, {
            label: "平泉市",
            value: "130881"
          }],
          [{
            label: "新华区",
            value: "130902"
          }, {
            label: "运河区",
            value: "130903"
          }, {
            label: "沧县",
            value: "130921"
          }, {
            label: "青县",
            value: "130922"
          }, {
            label: "东光县",
            value: "130923"
          }, {
            label: "海兴县",
            value: "130924"
          }, {
            label: "盐山县",
            value: "130925"
          }, {
            label: "肃宁县",
            value: "130926"
          }, {
            label: "南皮县",
            value: "130927"
          }, {
            label: "吴桥县",
            value: "130928"
          }, {
            label: "献县",
            value: "130929"
          }, {
            label: "孟村回族自治县",
            value: "130930"
          }, {
            label: "河北沧州经济开发区",
            value: "130971"
          }, {
            label: "沧州高新技术产业开发区",
            value: "130972"
          }, {
            label: "沧州渤海新区",
            value: "130973"
          }, {
            label: "泊头市",
            value: "130981"
          }, {
            label: "任丘市",
            value: "130982"
          }, {
            label: "黄骅市",
            value: "130983"
          }, {
            label: "河间市",
            value: "130984"
          }],
          [{
            label: "安次区",
            value: "131002"
          }, {
            label: "广阳区",
            value: "131003"
          }, {
            label: "固安县",
            value: "131022"
          }, {
            label: "永清县",
            value: "131023"
          }, {
            label: "香河县",
            value: "131024"
          }, {
            label: "大城县",
            value: "131025"
          }, {
            label: "文安县",
            value: "131026"
          }, {
            label: "大厂回族自治县",
            value: "131028"
          }, {
            label: "廊坊经济技术开发区",
            value: "131071"
          }, {
            label: "霸州市",
            value: "131081"
          }, {
            label: "三河市",
            value: "131082"
          }],
          [{
            label: "桃城区",
            value: "131102"
          }, {
            label: "冀州区",
            value: "131103"
          }, {
            label: "枣强县",
            value: "131121"
          }, {
            label: "武邑县",
            value: "131122"
          }, {
            label: "武强县",
            value: "131123"
          }, {
            label: "饶阳县",
            value: "131124"
          }, {
            label: "安平县",
            value: "131125"
          }, {
            label: "故城县",
            value: "131126"
          }, {
            label: "景县",
            value: "131127"
          }, {
            label: "阜城县",
            value: "131128"
          }, {
            label: "河北衡水经济开发区",
            value: "131171"
          }, {
            label: "衡水滨湖新区",
            value: "131172"
          }, {
            label: "深州市",
            value: "131182"
          }]
        ],
        [
          [{
            label: "小店区",
            value: "140105"
          }, {
            label: "迎泽区",
            value: "140106"
          }, {
            label: "杏花岭区",
            value: "140107"
          }, {
            label: "尖草坪区",
            value: "140108"
          }, {
            label: "万柏林区",
            value: "140109"
          }, {
            label: "晋源区",
            value: "140110"
          }, {
            label: "清徐县",
            value: "140121"
          }, {
            label: "阳曲县",
            value: "140122"
          }, {
            label: "娄烦县",
            value: "140123"
          }, {
            label: "山西转型综合改革示范区",
            value: "140171"
          }, {
            label: "古交市",
            value: "140181"
          }],
          [{
            label: "城区",
            value: "140202"
          }, {
            label: "矿区",
            value: "140203"
          }, {
            label: "南郊区",
            value: "140211"
          }, {
            label: "新荣区",
            value: "140212"
          }, {
            label: "阳高县",
            value: "140221"
          }, {
            label: "天镇县",
            value: "140222"
          }, {
            label: "广灵县",
            value: "140223"
          }, {
            label: "灵丘县",
            value: "140224"
          }, {
            label: "浑源县",
            value: "140225"
          }, {
            label: "左云县",
            value: "140226"
          }, {
            label: "大同县",
            value: "140227"
          }, {
            label: "山西大同经济开发区",
            value: "140271"
          }],
          [{
            label: "城区",
            value: "140302"
          }, {
            label: "矿区",
            value: "140303"
          }, {
            label: "郊区",
            value: "140311"
          }, {
            label: "平定县",
            value: "140321"
          }, {
            label: "盂县",
            value: "140322"
          }, {
            label: "山西阳泉经济开发区",
            value: "140371"
          }],
          [{
            label: "城区",
            value: "140402"
          }, {
            label: "郊区",
            value: "140411"
          }, {
            label: "长治县",
            value: "140421"
          }, {
            label: "襄垣县",
            value: "140423"
          }, {
            label: "屯留县",
            value: "140424"
          }, {
            label: "平顺县",
            value: "140425"
          }, {
            label: "黎城县",
            value: "140426"
          }, {
            label: "壶关县",
            value: "140427"
          }, {
            label: "长子县",
            value: "140428"
          }, {
            label: "武乡县",
            value: "140429"
          }, {
            label: "沁县",
            value: "140430"
          }, {
            label: "沁源县",
            value: "140431"
          }, {
            label: "山西长治高新技术产业园区",
            value: "140471"
          }, {
            label: "潞城市",
            value: "140481"
          }],
          [{
            label: "城区",
            value: "140502"
          }, {
            label: "沁水县",
            value: "140521"
          }, {
            label: "阳城县",
            value: "140522"
          }, {
            label: "陵川县",
            value: "140524"
          }, {
            label: "泽州县",
            value: "140525"
          }, {
            label: "高平市",
            value: "140581"
          }],
          [{
            label: "朔城区",
            value: "140602"
          }, {
            label: "平鲁区",
            value: "140603"
          }, {
            label: "山阴县",
            value: "140621"
          }, {
            label: "应县",
            value: "140622"
          }, {
            label: "右玉县",
            value: "140623"
          }, {
            label: "怀仁县",
            value: "140624"
          }, {
            label: "山西朔州经济开发区",
            value: "140671"
          }],
          [{
            label: "榆次区",
            value: "140702"
          }, {
            label: "榆社县",
            value: "140721"
          }, {
            label: "左权县",
            value: "140722"
          }, {
            label: "和顺县",
            value: "140723"
          }, {
            label: "昔阳县",
            value: "140724"
          }, {
            label: "寿阳县",
            value: "140725"
          }, {
            label: "太谷县",
            value: "140726"
          }, {
            label: "祁县",
            value: "140727"
          }, {
            label: "平遥县",
            value: "140728"
          }, {
            label: "灵石县",
            value: "140729"
          }, {
            label: "介休市",
            value: "140781"
          }],
          [{
            label: "盐湖区",
            value: "140802"
          }, {
            label: "临猗县",
            value: "140821"
          }, {
            label: "万荣县",
            value: "140822"
          }, {
            label: "闻喜县",
            value: "140823"
          }, {
            label: "稷山县",
            value: "140824"
          }, {
            label: "新绛县",
            value: "140825"
          }, {
            label: "绛县",
            value: "140826"
          }, {
            label: "垣曲县",
            value: "140827"
          }, {
            label: "夏县",
            value: "140828"
          }, {
            label: "平陆县",
            value: "140829"
          }, {
            label: "芮城县",
            value: "140830"
          }, {
            label: "永济市",
            value: "140881"
          }, {
            label: "河津市",
            value: "140882"
          }],
          [{
            label: "忻府区",
            value: "140902"
          }, {
            label: "定襄县",
            value: "140921"
          }, {
            label: "五台县",
            value: "140922"
          }, {
            label: "代县",
            value: "140923"
          }, {
            label: "繁峙县",
            value: "140924"
          }, {
            label: "宁武县",
            value: "140925"
          }, {
            label: "静乐县",
            value: "140926"
          }, {
            label: "神池县",
            value: "140927"
          }, {
            label: "五寨县",
            value: "140928"
          }, {
            label: "岢岚县",
            value: "140929"
          }, {
            label: "河曲县",
            value: "140930"
          }, {
            label: "保德县",
            value: "140931"
          }, {
            label: "偏关县",
            value: "140932"
          }, {
            label: "五台山风景名胜区",
            value: "140971"
          }, {
            label: "原平市",
            value: "140981"
          }],
          [{
            label: "尧都区",
            value: "141002"
          }, {
            label: "曲沃县",
            value: "141021"
          }, {
            label: "翼城县",
            value: "141022"
          }, {
            label: "襄汾县",
            value: "141023"
          }, {
            label: "洪洞县",
            value: "141024"
          }, {
            label: "古县",
            value: "141025"
          }, {
            label: "安泽县",
            value: "141026"
          }, {
            label: "浮山县",
            value: "141027"
          }, {
            label: "吉县",
            value: "141028"
          }, {
            label: "乡宁县",
            value: "141029"
          }, {
            label: "大宁县",
            value: "141030"
          }, {
            label: "隰县",
            value: "141031"
          }, {
            label: "永和县",
            value: "141032"
          }, {
            label: "蒲县",
            value: "141033"
          }, {
            label: "汾西县",
            value: "141034"
          }, {
            label: "侯马市",
            value: "141081"
          }, {
            label: "霍州市",
            value: "141082"
          }],
          [{
            label: "离石区",
            value: "141102"
          }, {
            label: "文水县",
            value: "141121"
          }, {
            label: "交城县",
            value: "141122"
          }, {
            label: "兴县",
            value: "141123"
          }, {
            label: "临县",
            value: "141124"
          }, {
            label: "柳林县",
            value: "141125"
          }, {
            label: "石楼县",
            value: "141126"
          }, {
            label: "岚县",
            value: "141127"
          }, {
            label: "方山县",
            value: "141128"
          }, {
            label: "中阳县",
            value: "141129"
          }, {
            label: "交口县",
            value: "141130"
          }, {
            label: "孝义市",
            value: "141181"
          }, {
            label: "汾阳市",
            value: "141182"
          }]
        ],
        [
          [{
            label: "新城区",
            value: "150102"
          }, {
            label: "回民区",
            value: "150103"
          }, {
            label: "玉泉区",
            value: "150104"
          }, {
            label: "赛罕区",
            value: "150105"
          }, {
            label: "土默特左旗",
            value: "150121"
          }, {
            label: "托克托县",
            value: "150122"
          }, {
            label: "和林格尔县",
            value: "150123"
          }, {
            label: "清水河县",
            value: "150124"
          }, {
            label: "武川县",
            value: "150125"
          }, {
            label: "呼和浩特金海工业园区",
            value: "150171"
          }, {
            label: "呼和浩特经济技术开发区",
            value: "150172"
          }],
          [{
            label: "东河区",
            value: "150202"
          }, {
            label: "昆都仑区",
            value: "150203"
          }, {
            label: "青山区",
            value: "150204"
          }, {
            label: "石拐区",
            value: "150205"
          }, {
            label: "白云鄂博矿区",
            value: "150206"
          }, {
            label: "九原区",
            value: "150207"
          }, {
            label: "土默特右旗",
            value: "150221"
          }, {
            label: "固阳县",
            value: "150222"
          }, {
            label: "达尔罕茂明安联合旗",
            value: "150223"
          }, {
            label: "包头稀土高新技术产业开发区",
            value: "150271"
          }],
          [{
            label: "海勃湾区",
            value: "150302"
          }, {
            label: "海南区",
            value: "150303"
          }, {
            label: "乌达区",
            value: "150304"
          }],
          [{
            label: "红山区",
            value: "150402"
          }, {
            label: "元宝山区",
            value: "150403"
          }, {
            label: "松山区",
            value: "150404"
          }, {
            label: "阿鲁科尔沁旗",
            value: "150421"
          }, {
            label: "巴林左旗",
            value: "150422"
          }, {
            label: "巴林右旗",
            value: "150423"
          }, {
            label: "林西县",
            value: "150424"
          }, {
            label: "克什克腾旗",
            value: "150425"
          }, {
            label: "翁牛特旗",
            value: "150426"
          }, {
            label: "喀喇沁旗",
            value: "150428"
          }, {
            label: "宁城县",
            value: "150429"
          }, {
            label: "敖汉旗",
            value: "150430"
          }],
          [{
            label: "科尔沁区",
            value: "150502"
          }, {
            label: "科尔沁左翼中旗",
            value: "150521"
          }, {
            label: "科尔沁左翼后旗",
            value: "150522"
          }, {
            label: "开鲁县",
            value: "150523"
          }, {
            label: "库伦旗",
            value: "150524"
          }, {
            label: "奈曼旗",
            value: "150525"
          }, {
            label: "扎鲁特旗",
            value: "150526"
          }, {
            label: "通辽经济技术开发区",
            value: "150571"
          }, {
            label: "霍林郭勒市",
            value: "150581"
          }],
          [{
            label: "东胜区",
            value: "150602"
          }, {
            label: "康巴什区",
            value: "150603"
          }, {
            label: "达拉特旗",
            value: "150621"
          }, {
            label: "准格尔旗",
            value: "150622"
          }, {
            label: "鄂托克前旗",
            value: "150623"
          }, {
            label: "鄂托克旗",
            value: "150624"
          }, {
            label: "杭锦旗",
            value: "150625"
          }, {
            label: "乌审旗",
            value: "150626"
          }, {
            label: "伊金霍洛旗",
            value: "150627"
          }],
          [{
            label: "海拉尔区",
            value: "150702"
          }, {
            label: "扎赉诺尔区",
            value: "150703"
          }, {
            label: "阿荣旗",
            value: "150721"
          }, {
            label: "莫力达瓦达斡尔族自治旗",
            value: "150722"
          }, {
            label: "鄂伦春自治旗",
            value: "150723"
          }, {
            label: "鄂温克族自治旗",
            value: "150724"
          }, {
            label: "陈巴尔虎旗",
            value: "150725"
          }, {
            label: "新巴尔虎左旗",
            value: "150726"
          }, {
            label: "新巴尔虎右旗",
            value: "150727"
          }, {
            label: "满洲里市",
            value: "150781"
          }, {
            label: "牙克石市",
            value: "150782"
          }, {
            label: "扎兰屯市",
            value: "150783"
          }, {
            label: "额尔古纳市",
            value: "150784"
          }, {
            label: "根河市",
            value: "150785"
          }],
          [{
            label: "临河区",
            value: "150802"
          }, {
            label: "五原县",
            value: "150821"
          }, {
            label: "磴口县",
            value: "150822"
          }, {
            label: "乌拉特前旗",
            value: "150823"
          }, {
            label: "乌拉特中旗",
            value: "150824"
          }, {
            label: "乌拉特后旗",
            value: "150825"
          }, {
            label: "杭锦后旗",
            value: "150826"
          }],
          [{
            label: "集宁区",
            value: "150902"
          }, {
            label: "卓资县",
            value: "150921"
          }, {
            label: "化德县",
            value: "150922"
          }, {
            label: "商都县",
            value: "150923"
          }, {
            label: "兴和县",
            value: "150924"
          }, {
            label: "凉城县",
            value: "150925"
          }, {
            label: "察哈尔右翼前旗",
            value: "150926"
          }, {
            label: "察哈尔右翼中旗",
            value: "150927"
          }, {
            label: "察哈尔右翼后旗",
            value: "150928"
          }, {
            label: "四子王旗",
            value: "150929"
          }, {
            label: "丰镇市",
            value: "150981"
          }],
          [{
            label: "乌兰浩特市",
            value: "152201"
          }, {
            label: "阿尔山市",
            value: "152202"
          }, {
            label: "科尔沁右翼前旗",
            value: "152221"
          }, {
            label: "科尔沁右翼中旗",
            value: "152222"
          }, {
            label: "扎赉特旗",
            value: "152223"
          }, {
            label: "突泉县",
            value: "152224"
          }],
          [{
            label: "二连浩特市",
            value: "152501"
          }, {
            label: "锡林浩特市",
            value: "152502"
          }, {
            label: "阿巴嘎旗",
            value: "152522"
          }, {
            label: "苏尼特左旗",
            value: "152523"
          }, {
            label: "苏尼特右旗",
            value: "152524"
          }, {
            label: "东乌珠穆沁旗",
            value: "152525"
          }, {
            label: "西乌珠穆沁旗",
            value: "152526"
          }, {
            label: "太仆寺旗",
            value: "152527"
          }, {
            label: "镶黄旗",
            value: "152528"
          }, {
            label: "正镶白旗",
            value: "152529"
          }, {
            label: "正蓝旗",
            value: "152530"
          }, {
            label: "多伦县",
            value: "152531"
          }, {
            label: "乌拉盖管委会",
            value: "152571"
          }],
          [{
            label: "阿拉善左旗",
            value: "152921"
          }, {
            label: "阿拉善右旗",
            value: "152922"
          }, {
            label: "额济纳旗",
            value: "152923"
          }, {
            label: "内蒙古阿拉善经济开发区",
            value: "152971"
          }]
        ],
        [
          [{
            label: "和平区",
            value: "210102"
          }, {
            label: "沈河区",
            value: "210103"
          }, {
            label: "大东区",
            value: "210104"
          }, {
            label: "皇姑区",
            value: "210105"
          }, {
            label: "铁西区",
            value: "210106"
          }, {
            label: "苏家屯区",
            value: "210111"
          }, {
            label: "浑南区",
            value: "210112"
          }, {
            label: "沈北新区",
            value: "210113"
          }, {
            label: "于洪区",
            value: "210114"
          }, {
            label: "辽中区",
            value: "210115"
          }, {
            label: "康平县",
            value: "210123"
          }, {
            label: "法库县",
            value: "210124"
          }, {
            label: "新民市",
            value: "210181"
          }],
          [{
            label: "中山区",
            value: "210202"
          }, {
            label: "西岗区",
            value: "210203"
          }, {
            label: "沙河口区",
            value: "210204"
          }, {
            label: "甘井子区",
            value: "210211"
          }, {
            label: "旅顺口区",
            value: "210212"
          }, {
            label: "金州区",
            value: "210213"
          }, {
            label: "普兰店区",
            value: "210214"
          }, {
            label: "长海县",
            value: "210224"
          }, {
            label: "瓦房店市",
            value: "210281"
          }, {
            label: "庄河市",
            value: "210283"
          }],
          [{
            label: "铁东区",
            value: "210302"
          }, {
            label: "铁西区",
            value: "210303"
          }, {
            label: "立山区",
            value: "210304"
          }, {
            label: "千山区",
            value: "210311"
          }, {
            label: "台安县",
            value: "210321"
          }, {
            label: "岫岩满族自治县",
            value: "210323"
          }, {
            label: "海城市",
            value: "210381"
          }],
          [{
            label: "新抚区",
            value: "210402"
          }, {
            label: "东洲区",
            value: "210403"
          }, {
            label: "望花区",
            value: "210404"
          }, {
            label: "顺城区",
            value: "210411"
          }, {
            label: "抚顺县",
            value: "210421"
          }, {
            label: "新宾满族自治县",
            value: "210422"
          }, {
            label: "清原满族自治县",
            value: "210423"
          }],
          [{
            label: "平山区",
            value: "210502"
          }, {
            label: "溪湖区",
            value: "210503"
          }, {
            label: "明山区",
            value: "210504"
          }, {
            label: "南芬区",
            value: "210505"
          }, {
            label: "本溪满族自治县",
            value: "210521"
          }, {
            label: "桓仁满族自治县",
            value: "210522"
          }],
          [{
            label: "元宝区",
            value: "210602"
          }, {
            label: "振兴区",
            value: "210603"
          }, {
            label: "振安区",
            value: "210604"
          }, {
            label: "宽甸满族自治县",
            value: "210624"
          }, {
            label: "东港市",
            value: "210681"
          }, {
            label: "凤城市",
            value: "210682"
          }],
          [{
            label: "古塔区",
            value: "210702"
          }, {
            label: "凌河区",
            value: "210703"
          }, {
            label: "太和区",
            value: "210711"
          }, {
            label: "黑山县",
            value: "210726"
          }, {
            label: "义县",
            value: "210727"
          }, {
            label: "凌海市",
            value: "210781"
          }, {
            label: "北镇市",
            value: "210782"
          }],
          [{
            label: "站前区",
            value: "210802"
          }, {
            label: "西市区",
            value: "210803"
          }, {
            label: "鲅鱼圈区",
            value: "210804"
          }, {
            label: "老边区",
            value: "210811"
          }, {
            label: "盖州市",
            value: "210881"
          }, {
            label: "大石桥市",
            value: "210882"
          }],
          [{
            label: "海州区",
            value: "210902"
          }, {
            label: "新邱区",
            value: "210903"
          }, {
            label: "太平区",
            value: "210904"
          }, {
            label: "清河门区",
            value: "210905"
          }, {
            label: "细河区",
            value: "210911"
          }, {
            label: "阜新蒙古族自治县",
            value: "210921"
          }, {
            label: "彰武县",
            value: "210922"
          }],
          [{
            label: "白塔区",
            value: "211002"
          }, {
            label: "文圣区",
            value: "211003"
          }, {
            label: "宏伟区",
            value: "211004"
          }, {
            label: "弓长岭区",
            value: "211005"
          }, {
            label: "太子河区",
            value: "211011"
          }, {
            label: "辽阳县",
            value: "211021"
          }, {
            label: "灯塔市",
            value: "211081"
          }],
          [{
            label: "双台子区",
            value: "211102"
          }, {
            label: "兴隆台区",
            value: "211103"
          }, {
            label: "大洼区",
            value: "211104"
          }, {
            label: "盘山县",
            value: "211122"
          }],
          [{
            label: "银州区",
            value: "211202"
          }, {
            label: "清河区",
            value: "211204"
          }, {
            label: "铁岭县",
            value: "211221"
          }, {
            label: "西丰县",
            value: "211223"
          }, {
            label: "昌图县",
            value: "211224"
          }, {
            label: "调兵山市",
            value: "211281"
          }, {
            label: "开原市",
            value: "211282"
          }],
          [{
            label: "双塔区",
            value: "211302"
          }, {
            label: "龙城区",
            value: "211303"
          }, {
            label: "朝阳县",
            value: "211321"
          }, {
            label: "建平县",
            value: "211322"
          }, {
            label: "喀喇沁左翼蒙古族自治县",
            value: "211324"
          }, {
            label: "北票市",
            value: "211381"
          }, {
            label: "凌源市",
            value: "211382"
          }],
          [{
            label: "连山区",
            value: "211402"
          }, {
            label: "龙港区",
            value: "211403"
          }, {
            label: "南票区",
            value: "211404"
          }, {
            label: "绥中县",
            value: "211421"
          }, {
            label: "建昌县",
            value: "211422"
          }, {
            label: "兴城市",
            value: "211481"
          }]
        ],
        [
          [{
            label: "南关区",
            value: "220102"
          }, {
            label: "宽城区",
            value: "220103"
          }, {
            label: "朝阳区",
            value: "220104"
          }, {
            label: "二道区",
            value: "220105"
          }, {
            label: "绿园区",
            value: "220106"
          }, {
            label: "双阳区",
            value: "220112"
          }, {
            label: "九台区",
            value: "220113"
          }, {
            label: "农安县",
            value: "220122"
          }, {
            label: "长春经济技术开发区",
            value: "220171"
          }, {
            label: "长春净月高新技术产业开发区",
            value: "220172"
          }, {
            label: "长春高新技术产业开发区",
            value: "220173"
          }, {
            label: "长春汽车经济技术开发区",
            value: "220174"
          }, {
            label: "榆树市",
            value: "220182"
          }, {
            label: "德惠市",
            value: "220183"
          }],
          [{
            label: "昌邑区",
            value: "220202"
          }, {
            label: "龙潭区",
            value: "220203"
          }, {
            label: "船营区",
            value: "220204"
          }, {
            label: "丰满区",
            value: "220211"
          }, {
            label: "永吉县",
            value: "220221"
          }, {
            label: "吉林经济开发区",
            value: "220271"
          }, {
            label: "吉林高新技术产业开发区",
            value: "220272"
          }, {
            label: "吉林中国新加坡食品区",
            value: "220273"
          }, {
            label: "蛟河市",
            value: "220281"
          }, {
            label: "桦甸市",
            value: "220282"
          }, {
            label: "舒兰市",
            value: "220283"
          }, {
            label: "磐石市",
            value: "220284"
          }],
          [{
            label: "铁西区",
            value: "220302"
          }, {
            label: "铁东区",
            value: "220303"
          }, {
            label: "梨树县",
            value: "220322"
          }, {
            label: "伊通满族自治县",
            value: "220323"
          }, {
            label: "公主岭市",
            value: "220381"
          }, {
            label: "双辽市",
            value: "220382"
          }],
          [{
            label: "龙山区",
            value: "220402"
          }, {
            label: "西安区",
            value: "220403"
          }, {
            label: "东丰县",
            value: "220421"
          }, {
            label: "东辽县",
            value: "220422"
          }],
          [{
            label: "东昌区",
            value: "220502"
          }, {
            label: "二道江区",
            value: "220503"
          }, {
            label: "通化县",
            value: "220521"
          }, {
            label: "辉南县",
            value: "220523"
          }, {
            label: "柳河县",
            value: "220524"
          }, {
            label: "梅河口市",
            value: "220581"
          }, {
            label: "集安市",
            value: "220582"
          }],
          [{
            label: "浑江区",
            value: "220602"
          }, {
            label: "江源区",
            value: "220605"
          }, {
            label: "抚松县",
            value: "220621"
          }, {
            label: "靖宇县",
            value: "220622"
          }, {
            label: "长白朝鲜族自治县",
            value: "220623"
          }, {
            label: "临江市",
            value: "220681"
          }],
          [{
            label: "宁江区",
            value: "220702"
          }, {
            label: "前郭尔罗斯蒙古族自治县",
            value: "220721"
          }, {
            label: "长岭县",
            value: "220722"
          }, {
            label: "乾安县",
            value: "220723"
          }, {
            label: "吉林松原经济开发区",
            value: "220771"
          }, {
            label: "扶余市",
            value: "220781"
          }],
          [{
            label: "洮北区",
            value: "220802"
          }, {
            label: "镇赉县",
            value: "220821"
          }, {
            label: "通榆县",
            value: "220822"
          }, {
            label: "吉林白城经济开发区",
            value: "220871"
          }, {
            label: "洮南市",
            value: "220881"
          }, {
            label: "大安市",
            value: "220882"
          }],
          [{
            label: "延吉市",
            value: "222401"
          }, {
            label: "图们市",
            value: "222402"
          }, {
            label: "敦化市",
            value: "222403"
          }, {
            label: "珲春市",
            value: "222404"
          }, {
            label: "龙井市",
            value: "222405"
          }, {
            label: "和龙市",
            value: "222406"
          }, {
            label: "汪清县",
            value: "222424"
          }, {
            label: "安图县",
            value: "222426"
          }]
        ],
        [
          [{
            label: "道里区",
            value: "230102"
          }, {
            label: "南岗区",
            value: "230103"
          }, {
            label: "道外区",
            value: "230104"
          }, {
            label: "平房区",
            value: "230108"
          }, {
            label: "松北区",
            value: "230109"
          }, {
            label: "香坊区",
            value: "230110"
          }, {
            label: "呼兰区",
            value: "230111"
          }, {
            label: "阿城区",
            value: "230112"
          }, {
            label: "双城区",
            value: "230113"
          }, {
            label: "依兰县",
            value: "230123"
          }, {
            label: "方正县",
            value: "230124"
          }, {
            label: "宾县",
            value: "230125"
          }, {
            label: "巴彦县",
            value: "230126"
          }, {
            label: "木兰县",
            value: "230127"
          }, {
            label: "通河县",
            value: "230128"
          }, {
            label: "延寿县",
            value: "230129"
          }, {
            label: "尚志市",
            value: "230183"
          }, {
            label: "五常市",
            value: "230184"
          }],
          [{
            label: "龙沙区",
            value: "230202"
          }, {
            label: "建华区",
            value: "230203"
          }, {
            label: "铁锋区",
            value: "230204"
          }, {
            label: "昂昂溪区",
            value: "230205"
          }, {
            label: "富拉尔基区",
            value: "230206"
          }, {
            label: "碾子山区",
            value: "230207"
          }, {
            label: "梅里斯达斡尔族区",
            value: "230208"
          }, {
            label: "龙江县",
            value: "230221"
          }, {
            label: "依安县",
            value: "230223"
          }, {
            label: "泰来县",
            value: "230224"
          }, {
            label: "甘南县",
            value: "230225"
          }, {
            label: "富裕县",
            value: "230227"
          }, {
            label: "克山县",
            value: "230229"
          }, {
            label: "克东县",
            value: "230230"
          }, {
            label: "拜泉县",
            value: "230231"
          }, {
            label: "讷河市",
            value: "230281"
          }],
          [{
            label: "鸡冠区",
            value: "230302"
          }, {
            label: "恒山区",
            value: "230303"
          }, {
            label: "滴道区",
            value: "230304"
          }, {
            label: "梨树区",
            value: "230305"
          }, {
            label: "城子河区",
            value: "230306"
          }, {
            label: "麻山区",
            value: "230307"
          }, {
            label: "鸡东县",
            value: "230321"
          }, {
            label: "虎林市",
            value: "230381"
          }, {
            label: "密山市",
            value: "230382"
          }],
          [{
            label: "向阳区",
            value: "230402"
          }, {
            label: "工农区",
            value: "230403"
          }, {
            label: "南山区",
            value: "230404"
          }, {
            label: "兴安区",
            value: "230405"
          }, {
            label: "东山区",
            value: "230406"
          }, {
            label: "兴山区",
            value: "230407"
          }, {
            label: "萝北县",
            value: "230421"
          }, {
            label: "绥滨县",
            value: "230422"
          }],
          [{
            label: "尖山区",
            value: "230502"
          }, {
            label: "岭东区",
            value: "230503"
          }, {
            label: "四方台区",
            value: "230505"
          }, {
            label: "宝山区",
            value: "230506"
          }, {
            label: "集贤县",
            value: "230521"
          }, {
            label: "友谊县",
            value: "230522"
          }, {
            label: "宝清县",
            value: "230523"
          }, {
            label: "饶河县",
            value: "230524"
          }],
          [{
            label: "萨尔图区",
            value: "230602"
          }, {
            label: "龙凤区",
            value: "230603"
          }, {
            label: "让胡路区",
            value: "230604"
          }, {
            label: "红岗区",
            value: "230605"
          }, {
            label: "大同区",
            value: "230606"
          }, {
            label: "肇州县",
            value: "230621"
          }, {
            label: "肇源县",
            value: "230622"
          }, {
            label: "林甸县",
            value: "230623"
          }, {
            label: "杜尔伯特蒙古族自治县",
            value: "230624"
          }, {
            label: "大庆高新技术产业开发区",
            value: "230671"
          }],
          [{
            label: "伊春区",
            value: "230702"
          }, {
            label: "南岔区",
            value: "230703"
          }, {
            label: "友好区",
            value: "230704"
          }, {
            label: "西林区",
            value: "230705"
          }, {
            label: "翠峦区",
            value: "230706"
          }, {
            label: "新青区",
            value: "230707"
          }, {
            label: "美溪区",
            value: "230708"
          }, {
            label: "金山屯区",
            value: "230709"
          }, {
            label: "五营区",
            value: "230710"
          }, {
            label: "乌马河区",
            value: "230711"
          }, {
            label: "汤旺河区",
            value: "230712"
          }, {
            label: "带岭区",
            value: "230713"
          }, {
            label: "乌伊岭区",
            value: "230714"
          }, {
            label: "红星区",
            value: "230715"
          }, {
            label: "上甘岭区",
            value: "230716"
          }, {
            label: "嘉荫县",
            value: "230722"
          }, {
            label: "铁力市",
            value: "230781"
          }],
          [{
            label: "向阳区",
            value: "230803"
          }, {
            label: "前进区",
            value: "230804"
          }, {
            label: "东风区",
            value: "230805"
          }, {
            label: "郊区",
            value: "230811"
          }, {
            label: "桦南县",
            value: "230822"
          }, {
            label: "桦川县",
            value: "230826"
          }, {
            label: "汤原县",
            value: "230828"
          }, {
            label: "同江市",
            value: "230881"
          }, {
            label: "富锦市",
            value: "230882"
          }, {
            label: "抚远市",
            value: "230883"
          }],
          [{
            label: "新兴区",
            value: "230902"
          }, {
            label: "桃山区",
            value: "230903"
          }, {
            label: "茄子河区",
            value: "230904"
          }, {
            label: "勃利县",
            value: "230921"
          }],
          [{
            label: "东安区",
            value: "231002"
          }, {
            label: "阳明区",
            value: "231003"
          }, {
            label: "爱民区",
            value: "231004"
          }, {
            label: "西安区",
            value: "231005"
          }, {
            label: "林口县",
            value: "231025"
          }, {
            label: "牡丹江经济技术开发区",
            value: "231071"
          }, {
            label: "绥芬河市",
            value: "231081"
          }, {
            label: "海林市",
            value: "231083"
          }, {
            label: "宁安市",
            value: "231084"
          }, {
            label: "穆棱市",
            value: "231085"
          }, {
            label: "东宁市",
            value: "231086"
          }],
          [{
            label: "爱辉区",
            value: "231102"
          }, {
            label: "嫩江县",
            value: "231121"
          }, {
            label: "逊克县",
            value: "231123"
          }, {
            label: "孙吴县",
            value: "231124"
          }, {
            label: "北安市",
            value: "231181"
          }, {
            label: "五大连池市",
            value: "231182"
          }],
          [{
            label: "北林区",
            value: "231202"
          }, {
            label: "望奎县",
            value: "231221"
          }, {
            label: "兰西县",
            value: "231222"
          }, {
            label: "青冈县",
            value: "231223"
          }, {
            label: "庆安县",
            value: "231224"
          }, {
            label: "明水县",
            value: "231225"
          }, {
            label: "绥棱县",
            value: "231226"
          }, {
            label: "安达市",
            value: "231281"
          }, {
            label: "肇东市",
            value: "231282"
          }, {
            label: "海伦市",
            value: "231283"
          }],
          [{
            label: "加格达奇区",
            value: "232701"
          }, {
            label: "松岭区",
            value: "232702"
          }, {
            label: "新林区",
            value: "232703"
          }, {
            label: "呼中区",
            value: "232704"
          }, {
            label: "呼玛县",
            value: "232721"
          }, {
            label: "塔河县",
            value: "232722"
          }, {
            label: "漠河县",
            value: "232723"
          }]
        ],
        [
          [{
            label: "黄浦区",
            value: "310101"
          }, {
            label: "徐汇区",
            value: "310104"
          }, {
            label: "长宁区",
            value: "310105"
          }, {
            label: "静安区",
            value: "310106"
          }, {
            label: "普陀区",
            value: "310107"
          }, {
            label: "虹口区",
            value: "310109"
          }, {
            label: "杨浦区",
            value: "310110"
          }, {
            label: "闵行区",
            value: "310112"
          }, {
            label: "宝山区",
            value: "310113"
          }, {
            label: "嘉定区",
            value: "310114"
          }, {
            label: "浦东新区",
            value: "310115"
          }, {
            label: "金山区",
            value: "310116"
          }, {
            label: "松江区",
            value: "310117"
          }, {
            label: "青浦区",
            value: "310118"
          }, {
            label: "奉贤区",
            value: "310120"
          }, {
            label: "崇明区",
            value: "310151"
          }]
        ],
        [
          [{
            label: "玄武区",
            value: "320102"
          }, {
            label: "秦淮区",
            value: "320104"
          }, {
            label: "建邺区",
            value: "320105"
          }, {
            label: "鼓楼区",
            value: "320106"
          }, {
            label: "浦口区",
            value: "320111"
          }, {
            label: "栖霞区",
            value: "320113"
          }, {
            label: "雨花台区",
            value: "320114"
          }, {
            label: "江宁区",
            value: "320115"
          }, {
            label: "六合区",
            value: "320116"
          }, {
            label: "溧水区",
            value: "320117"
          }, {
            label: "高淳区",
            value: "320118"
          }],
          [{
            label: "锡山区",
            value: "320205"
          }, {
            label: "惠山区",
            value: "320206"
          }, {
            label: "滨湖区",
            value: "320211"
          }, {
            label: "梁溪区",
            value: "320213"
          }, {
            label: "新吴区",
            value: "320214"
          }, {
            label: "江阴市",
            value: "320281"
          }, {
            label: "宜兴市",
            value: "320282"
          }],
          [{
            label: "鼓楼区",
            value: "320302"
          }, {
            label: "云龙区",
            value: "320303"
          }, {
            label: "贾汪区",
            value: "320305"
          }, {
            label: "泉山区",
            value: "320311"
          }, {
            label: "铜山区",
            value: "320312"
          }, {
            label: "丰县",
            value: "320321"
          }, {
            label: "沛县",
            value: "320322"
          }, {
            label: "睢宁县",
            value: "320324"
          }, {
            label: "徐州经济技术开发区",
            value: "320371"
          }, {
            label: "新沂市",
            value: "320381"
          }, {
            label: "邳州市",
            value: "320382"
          }],
          [{
            label: "天宁区",
            value: "320402"
          }, {
            label: "钟楼区",
            value: "320404"
          }, {
            label: "新北区",
            value: "320411"
          }, {
            label: "武进区",
            value: "320412"
          }, {
            label: "金坛区",
            value: "320413"
          }, {
            label: "溧阳市",
            value: "320481"
          }],
          [{
            label: "虎丘区",
            value: "320505"
          }, {
            label: "吴中区",
            value: "320506"
          }, {
            label: "相城区",
            value: "320507"
          }, {
            label: "姑苏区",
            value: "320508"
          }, {
            label: "吴江区",
            value: "320509"
          }, {
            label: "苏州工业园区",
            value: "320571"
          }, {
            label: "常熟市",
            value: "320581"
          }, {
            label: "张家港市",
            value: "320582"
          }, {
            label: "昆山市",
            value: "320583"
          }, {
            label: "太仓市",
            value: "320585"
          }],
          [{
            label: "崇川区",
            value: "320602"
          }, {
            label: "港闸区",
            value: "320611"
          }, {
            label: "通州区",
            value: "320612"
          }, {
            label: "海安县",
            value: "320621"
          }, {
            label: "如东县",
            value: "320623"
          }, {
            label: "南通经济技术开发区",
            value: "320671"
          }, {
            label: "启东市",
            value: "320681"
          }, {
            label: "如皋市",
            value: "320682"
          }, {
            label: "海门市",
            value: "320684"
          }],
          [{
            label: "连云区",
            value: "320703"
          }, {
            label: "海州区",
            value: "320706"
          }, {
            label: "赣榆区",
            value: "320707"
          }, {
            label: "东海县",
            value: "320722"
          }, {
            label: "灌云县",
            value: "320723"
          }, {
            label: "灌南县",
            value: "320724"
          }, {
            label: "连云港经济技术开发区",
            value: "320771"
          }, {
            label: "连云港高新技术产业开发区",
            value: "320772"
          }],
          [{
            label: "淮安区",
            value: "320803"
          }, {
            label: "淮阴区",
            value: "320804"
          }, {
            label: "清江浦区",
            value: "320812"
          }, {
            label: "洪泽区",
            value: "320813"
          }, {
            label: "涟水县",
            value: "320826"
          }, {
            label: "盱眙县",
            value: "320830"
          }, {
            label: "金湖县",
            value: "320831"
          }, {
            label: "淮安经济技术开发区",
            value: "320871"
          }],
          [{
            label: "亭湖区",
            value: "320902"
          }, {
            label: "盐都区",
            value: "320903"
          }, {
            label: "大丰区",
            value: "320904"
          }, {
            label: "响水县",
            value: "320921"
          }, {
            label: "滨海县",
            value: "320922"
          }, {
            label: "阜宁县",
            value: "320923"
          }, {
            label: "射阳县",
            value: "320924"
          }, {
            label: "建湖县",
            value: "320925"
          }, {
            label: "盐城经济技术开发区",
            value: "320971"
          }, {
            label: "东台市",
            value: "320981"
          }],
          [{
            label: "广陵区",
            value: "321002"
          }, {
            label: "邗江区",
            value: "321003"
          }, {
            label: "江都区",
            value: "321012"
          }, {
            label: "宝应县",
            value: "321023"
          }, {
            label: "扬州经济技术开发区",
            value: "321071"
          }, {
            label: "仪征市",
            value: "321081"
          }, {
            label: "高邮市",
            value: "321084"
          }],
          [{
            label: "京口区",
            value: "321102"
          }, {
            label: "润州区",
            value: "321111"
          }, {
            label: "丹徒区",
            value: "321112"
          }, {
            label: "镇江新区",
            value: "321171"
          }, {
            label: "丹阳市",
            value: "321181"
          }, {
            label: "扬中市",
            value: "321182"
          }, {
            label: "句容市",
            value: "321183"
          }],
          [{
            label: "海陵区",
            value: "321202"
          }, {
            label: "高港区",
            value: "321203"
          }, {
            label: "姜堰区",
            value: "321204"
          }, {
            label: "泰州医药高新技术产业开发区",
            value: "321271"
          }, {
            label: "兴化市",
            value: "321281"
          }, {
            label: "靖江市",
            value: "321282"
          }, {
            label: "泰兴市",
            value: "321283"
          }],
          [{
            label: "宿城区",
            value: "321302"
          }, {
            label: "宿豫区",
            value: "321311"
          }, {
            label: "沭阳县",
            value: "321322"
          }, {
            label: "泗阳县",
            value: "321323"
          }, {
            label: "泗洪县",
            value: "321324"
          }, {
            label: "宿迁经济技术开发区",
            value: "321371"
          }]
        ],
        [
          [{
            label: "上城区",
            value: "330102"
          }, {
            label: "下城区",
            value: "330103"
          }, {
            label: "江干区",
            value: "330104"
          }, {
            label: "拱墅区",
            value: "330105"
          }, {
            label: "西湖区",
            value: "330106"
          }, {
            label: "滨江区",
            value: "330108"
          }, {
            label: "萧山区",
            value: "330109"
          }, {
            label: "余杭区",
            value: "330110"
          }, {
            label: "富阳区",
            value: "330111"
          }, {
            label: "临安区",
            value: "330112"
          }, {
            label: "桐庐县",
            value: "330122"
          }, {
            label: "淳安县",
            value: "330127"
          }, {
            label: "建德市",
            value: "330182"
          }],
          [{
            label: "海曙区",
            value: "330203"
          }, {
            label: "江北区",
            value: "330205"
          }, {
            label: "北仑区",
            value: "330206"
          }, {
            label: "镇海区",
            value: "330211"
          }, {
            label: "鄞州区",
            value: "330212"
          }, {
            label: "奉化区",
            value: "330213"
          }, {
            label: "象山县",
            value: "330225"
          }, {
            label: "宁海县",
            value: "330226"
          }, {
            label: "余姚市",
            value: "330281"
          }, {
            label: "慈溪市",
            value: "330282"
          }],
          [{
            label: "鹿城区",
            value: "330302"
          }, {
            label: "龙湾区",
            value: "330303"
          }, {
            label: "瓯海区",
            value: "330304"
          }, {
            label: "洞头区",
            value: "330305"
          }, {
            label: "永嘉县",
            value: "330324"
          }, {
            label: "平阳县",
            value: "330326"
          }, {
            label: "苍南县",
            value: "330327"
          }, {
            label: "文成县",
            value: "330328"
          }, {
            label: "泰顺县",
            value: "330329"
          }, {
            label: "温州经济技术开发区",
            value: "330371"
          }, {
            label: "瑞安市",
            value: "330381"
          }, {
            label: "乐清市",
            value: "330382"
          }],
          [{
            label: "南湖区",
            value: "330402"
          }, {
            label: "秀洲区",
            value: "330411"
          }, {
            label: "嘉善县",
            value: "330421"
          }, {
            label: "海盐县",
            value: "330424"
          }, {
            label: "海宁市",
            value: "330481"
          }, {
            label: "平湖市",
            value: "330482"
          }, {
            label: "桐乡市",
            value: "330483"
          }],
          [{
            label: "吴兴区",
            value: "330502"
          }, {
            label: "南浔区",
            value: "330503"
          }, {
            label: "德清县",
            value: "330521"
          }, {
            label: "长兴县",
            value: "330522"
          }, {
            label: "安吉县",
            value: "330523"
          }],
          [{
            label: "越城区",
            value: "330602"
          }, {
            label: "柯桥区",
            value: "330603"
          }, {
            label: "上虞区",
            value: "330604"
          }, {
            label: "新昌县",
            value: "330624"
          }, {
            label: "诸暨市",
            value: "330681"
          }, {
            label: "嵊州市",
            value: "330683"
          }],
          [{
            label: "婺城区",
            value: "330702"
          }, {
            label: "金东区",
            value: "330703"
          }, {
            label: "武义县",
            value: "330723"
          }, {
            label: "浦江县",
            value: "330726"
          }, {
            label: "磐安县",
            value: "330727"
          }, {
            label: "兰溪市",
            value: "330781"
          }, {
            label: "义乌市",
            value: "330782"
          }, {
            label: "东阳市",
            value: "330783"
          }, {
            label: "永康市",
            value: "330784"
          }],
          [{
            label: "柯城区",
            value: "330802"
          }, {
            label: "衢江区",
            value: "330803"
          }, {
            label: "常山县",
            value: "330822"
          }, {
            label: "开化县",
            value: "330824"
          }, {
            label: "龙游县",
            value: "330825"
          }, {
            label: "江山市",
            value: "330881"
          }],
          [{
            label: "定海区",
            value: "330902"
          }, {
            label: "普陀区",
            value: "330903"
          }, {
            label: "岱山县",
            value: "330921"
          }, {
            label: "嵊泗县",
            value: "330922"
          }],
          [{
            label: "椒江区",
            value: "331002"
          }, {
            label: "黄岩区",
            value: "331003"
          }, {
            label: "路桥区",
            value: "331004"
          }, {
            label: "三门县",
            value: "331022"
          }, {
            label: "天台县",
            value: "331023"
          }, {
            label: "仙居县",
            value: "331024"
          }, {
            label: "温岭市",
            value: "331081"
          }, {
            label: "临海市",
            value: "331082"
          }, {
            label: "玉环市",
            value: "331083"
          }],
          [{
            label: "莲都区",
            value: "331102"
          }, {
            label: "青田县",
            value: "331121"
          }, {
            label: "缙云县",
            value: "331122"
          }, {
            label: "遂昌县",
            value: "331123"
          }, {
            label: "松阳县",
            value: "331124"
          }, {
            label: "云和县",
            value: "331125"
          }, {
            label: "庆元县",
            value: "331126"
          }, {
            label: "景宁畲族自治县",
            value: "331127"
          }, {
            label: "龙泉市",
            value: "331181"
          }]
        ],
        [
          [{
            label: "瑶海区",
            value: "340102"
          }, {
            label: "庐阳区",
            value: "340103"
          }, {
            label: "蜀山区",
            value: "340104"
          }, {
            label: "包河区",
            value: "340111"
          }, {
            label: "长丰县",
            value: "340121"
          }, {
            label: "肥东县",
            value: "340122"
          }, {
            label: "肥西县",
            value: "340123"
          }, {
            label: "庐江县",
            value: "340124"
          }, {
            label: "合肥高新技术产业开发区",
            value: "340171"
          }, {
            label: "合肥经济技术开发区",
            value: "340172"
          }, {
            label: "合肥新站高新技术产业开发区",
            value: "340173"
          }, {
            label: "巢湖市",
            value: "340181"
          }],
          [{
            label: "镜湖区",
            value: "340202"
          }, {
            label: "弋江区",
            value: "340203"
          }, {
            label: "鸠江区",
            value: "340207"
          }, {
            label: "三山区",
            value: "340208"
          }, {
            label: "芜湖县",
            value: "340221"
          }, {
            label: "繁昌县",
            value: "340222"
          }, {
            label: "南陵县",
            value: "340223"
          }, {
            label: "无为县",
            value: "340225"
          }, {
            label: "芜湖经济技术开发区",
            value: "340271"
          }, {
            label: "安徽芜湖长江大桥经济开发区",
            value: "340272"
          }],
          [{
            label: "龙子湖区",
            value: "340302"
          }, {
            label: "蚌山区",
            value: "340303"
          }, {
            label: "禹会区",
            value: "340304"
          }, {
            label: "淮上区",
            value: "340311"
          }, {
            label: "怀远县",
            value: "340321"
          }, {
            label: "五河县",
            value: "340322"
          }, {
            label: "固镇县",
            value: "340323"
          }, {
            label: "蚌埠市高新技术开发区",
            value: "340371"
          }, {
            label: "蚌埠市经济开发区",
            value: "340372"
          }],
          [{
            label: "大通区",
            value: "340402"
          }, {
            label: "田家庵区",
            value: "340403"
          }, {
            label: "谢家集区",
            value: "340404"
          }, {
            label: "八公山区",
            value: "340405"
          }, {
            label: "潘集区",
            value: "340406"
          }, {
            label: "凤台县",
            value: "340421"
          }, {
            label: "寿县",
            value: "340422"
          }],
          [{
            label: "花山区",
            value: "340503"
          }, {
            label: "雨山区",
            value: "340504"
          }, {
            label: "博望区",
            value: "340506"
          }, {
            label: "当涂县",
            value: "340521"
          }, {
            label: "含山县",
            value: "340522"
          }, {
            label: "和县",
            value: "340523"
          }],
          [{
            label: "杜集区",
            value: "340602"
          }, {
            label: "相山区",
            value: "340603"
          }, {
            label: "烈山区",
            value: "340604"
          }, {
            label: "濉溪县",
            value: "340621"
          }],
          [{
            label: "铜官区",
            value: "340705"
          }, {
            label: "义安区",
            value: "340706"
          }, {
            label: "郊区",
            value: "340711"
          }, {
            label: "枞阳县",
            value: "340722"
          }],
          [{
            label: "迎江区",
            value: "340802"
          }, {
            label: "大观区",
            value: "340803"
          }, {
            label: "宜秀区",
            value: "340811"
          }, {
            label: "怀宁县",
            value: "340822"
          }, {
            label: "潜山县",
            value: "340824"
          }, {
            label: "太湖县",
            value: "340825"
          }, {
            label: "宿松县",
            value: "340826"
          }, {
            label: "望江县",
            value: "340827"
          }, {
            label: "岳西县",
            value: "340828"
          }, {
            label: "安徽安庆经济开发区",
            value: "340871"
          }, {
            label: "桐城市",
            value: "340881"
          }],
          [{
            label: "屯溪区",
            value: "341002"
          }, {
            label: "黄山区",
            value: "341003"
          }, {
            label: "徽州区",
            value: "341004"
          }, {
            label: "歙县",
            value: "341021"
          }, {
            label: "休宁县",
            value: "341022"
          }, {
            label: "黟县",
            value: "341023"
          }, {
            label: "祁门县",
            value: "341024"
          }],
          [{
            label: "琅琊区",
            value: "341102"
          }, {
            label: "南谯区",
            value: "341103"
          }, {
            label: "来安县",
            value: "341122"
          }, {
            label: "全椒县",
            value: "341124"
          }, {
            label: "定远县",
            value: "341125"
          }, {
            label: "凤阳县",
            value: "341126"
          }, {
            label: "苏滁现代产业园",
            value: "341171"
          }, {
            label: "滁州经济技术开发区",
            value: "341172"
          }, {
            label: "天长市",
            value: "341181"
          }, {
            label: "明光市",
            value: "341182"
          }],
          [{
            label: "颍州区",
            value: "341202"
          }, {
            label: "颍东区",
            value: "341203"
          }, {
            label: "颍泉区",
            value: "341204"
          }, {
            label: "临泉县",
            value: "341221"
          }, {
            label: "太和县",
            value: "341222"
          }, {
            label: "阜南县",
            value: "341225"
          }, {
            label: "颍上县",
            value: "341226"
          }, {
            label: "阜阳合肥现代产业园区",
            value: "341271"
          }, {
            label: "阜阳经济技术开发区",
            value: "341272"
          }, {
            label: "界首市",
            value: "341282"
          }],
          [{
            label: "埇桥区",
            value: "341302"
          }, {
            label: "砀山县",
            value: "341321"
          }, {
            label: "萧县",
            value: "341322"
          }, {
            label: "灵璧县",
            value: "341323"
          }, {
            label: "泗县",
            value: "341324"
          }, {
            label: "宿州马鞍山现代产业园区",
            value: "341371"
          }, {
            label: "宿州经济技术开发区",
            value: "341372"
          }],
          [{
            label: "金安区",
            value: "341502"
          }, {
            label: "裕安区",
            value: "341503"
          }, {
            label: "叶集区",
            value: "341504"
          }, {
            label: "霍邱县",
            value: "341522"
          }, {
            label: "舒城县",
            value: "341523"
          }, {
            label: "金寨县",
            value: "341524"
          }, {
            label: "霍山县",
            value: "341525"
          }],
          [{
            label: "谯城区",
            value: "341602"
          }, {
            label: "涡阳县",
            value: "341621"
          }, {
            label: "蒙城县",
            value: "341622"
          }, {
            label: "利辛县",
            value: "341623"
          }],
          [{
            label: "贵池区",
            value: "341702"
          }, {
            label: "东至县",
            value: "341721"
          }, {
            label: "石台县",
            value: "341722"
          }, {
            label: "青阳县",
            value: "341723"
          }],
          [{
            label: "宣州区",
            value: "341802"
          }, {
            label: "郎溪县",
            value: "341821"
          }, {
            label: "广德县",
            value: "341822"
          }, {
            label: "泾县",
            value: "341823"
          }, {
            label: "绩溪县",
            value: "341824"
          }, {
            label: "旌德县",
            value: "341825"
          }, {
            label: "宣城市经济开发区",
            value: "341871"
          }, {
            label: "宁国市",
            value: "341881"
          }]
        ],
        [
          [{
            label: "鼓楼区",
            value: "350102"
          }, {
            label: "台江区",
            value: "350103"
          }, {
            label: "仓山区",
            value: "350104"
          }, {
            label: "马尾区",
            value: "350105"
          }, {
            label: "晋安区",
            value: "350111"
          }, {
            label: "闽侯县",
            value: "350121"
          }, {
            label: "连江县",
            value: "350122"
          }, {
            label: "罗源县",
            value: "350123"
          }, {
            label: "闽清县",
            value: "350124"
          }, {
            label: "永泰县",
            value: "350125"
          }, {
            label: "平潭县",
            value: "350128"
          }, {
            label: "福清市",
            value: "350181"
          }, {
            label: "长乐市",
            value: "350182"
          }],
          [{
            label: "思明区",
            value: "350203"
          }, {
            label: "海沧区",
            value: "350205"
          }, {
            label: "湖里区",
            value: "350206"
          }, {
            label: "集美区",
            value: "350211"
          }, {
            label: "同安区",
            value: "350212"
          }, {
            label: "翔安区",
            value: "350213"
          }],
          [{
            label: "城厢区",
            value: "350302"
          }, {
            label: "涵江区",
            value: "350303"
          }, {
            label: "荔城区",
            value: "350304"
          }, {
            label: "秀屿区",
            value: "350305"
          }, {
            label: "仙游县",
            value: "350322"
          }],
          [{
            label: "梅列区",
            value: "350402"
          }, {
            label: "三元区",
            value: "350403"
          }, {
            label: "明溪县",
            value: "350421"
          }, {
            label: "清流县",
            value: "350423"
          }, {
            label: "宁化县",
            value: "350424"
          }, {
            label: "大田县",
            value: "350425"
          }, {
            label: "尤溪县",
            value: "350426"
          }, {
            label: "沙县",
            value: "350427"
          }, {
            label: "将乐县",
            value: "350428"
          }, {
            label: "泰宁县",
            value: "350429"
          }, {
            label: "建宁县",
            value: "350430"
          }, {
            label: "永安市",
            value: "350481"
          }],
          [{
            label: "鲤城区",
            value: "350502"
          }, {
            label: "丰泽区",
            value: "350503"
          }, {
            label: "洛江区",
            value: "350504"
          }, {
            label: "泉港区",
            value: "350505"
          }, {
            label: "惠安县",
            value: "350521"
          }, {
            label: "安溪县",
            value: "350524"
          }, {
            label: "永春县",
            value: "350525"
          }, {
            label: "德化县",
            value: "350526"
          }, {
            label: "金门县",
            value: "350527"
          }, {
            label: "石狮市",
            value: "350581"
          }, {
            label: "晋江市",
            value: "350582"
          }, {
            label: "南安市",
            value: "350583"
          }],
          [{
            label: "芗城区",
            value: "350602"
          }, {
            label: "龙文区",
            value: "350603"
          }, {
            label: "云霄县",
            value: "350622"
          }, {
            label: "漳浦县",
            value: "350623"
          }, {
            label: "诏安县",
            value: "350624"
          }, {
            label: "长泰县",
            value: "350625"
          }, {
            label: "东山县",
            value: "350626"
          }, {
            label: "南靖县",
            value: "350627"
          }, {
            label: "平和县",
            value: "350628"
          }, {
            label: "华安县",
            value: "350629"
          }, {
            label: "龙海市",
            value: "350681"
          }],
          [{
            label: "延平区",
            value: "350702"
          }, {
            label: "建阳区",
            value: "350703"
          }, {
            label: "顺昌县",
            value: "350721"
          }, {
            label: "浦城县",
            value: "350722"
          }, {
            label: "光泽县",
            value: "350723"
          }, {
            label: "松溪县",
            value: "350724"
          }, {
            label: "政和县",
            value: "350725"
          }, {
            label: "邵武市",
            value: "350781"
          }, {
            label: "武夷山市",
            value: "350782"
          }, {
            label: "建瓯市",
            value: "350783"
          }],
          [{
            label: "新罗区",
            value: "350802"
          }, {
            label: "永定区",
            value: "350803"
          }, {
            label: "长汀县",
            value: "350821"
          }, {
            label: "上杭县",
            value: "350823"
          }, {
            label: "武平县",
            value: "350824"
          }, {
            label: "连城县",
            value: "350825"
          }, {
            label: "漳平市",
            value: "350881"
          }],
          [{
            label: "蕉城区",
            value: "350902"
          }, {
            label: "霞浦县",
            value: "350921"
          }, {
            label: "古田县",
            value: "350922"
          }, {
            label: "屏南县",
            value: "350923"
          }, {
            label: "寿宁县",
            value: "350924"
          }, {
            label: "周宁县",
            value: "350925"
          }, {
            label: "柘荣县",
            value: "350926"
          }, {
            label: "福安市",
            value: "350981"
          }, {
            label: "福鼎市",
            value: "350982"
          }]
        ],
        [
          [{
            label: "东湖区",
            value: "360102"
          }, {
            label: "西湖区",
            value: "360103"
          }, {
            label: "青云谱区",
            value: "360104"
          }, {
            label: "湾里区",
            value: "360105"
          }, {
            label: "青山湖区",
            value: "360111"
          }, {
            label: "新建区",
            value: "360112"
          }, {
            label: "南昌县",
            value: "360121"
          }, {
            label: "安义县",
            value: "360123"
          }, {
            label: "进贤县",
            value: "360124"
          }],
          [{
            label: "昌江区",
            value: "360202"
          }, {
            label: "珠山区",
            value: "360203"
          }, {
            label: "浮梁县",
            value: "360222"
          }, {
            label: "乐平市",
            value: "360281"
          }],
          [{
            label: "安源区",
            value: "360302"
          }, {
            label: "湘东区",
            value: "360313"
          }, {
            label: "莲花县",
            value: "360321"
          }, {
            label: "上栗县",
            value: "360322"
          }, {
            label: "芦溪县",
            value: "360323"
          }],
          [{
            label: "濂溪区",
            value: "360402"
          }, {
            label: "浔阳区",
            value: "360403"
          }, {
            label: "柴桑区",
            value: "360404"
          }, {
            label: "武宁县",
            value: "360423"
          }, {
            label: "修水县",
            value: "360424"
          }, {
            label: "永修县",
            value: "360425"
          }, {
            label: "德安县",
            value: "360426"
          }, {
            label: "都昌县",
            value: "360428"
          }, {
            label: "湖口县",
            value: "360429"
          }, {
            label: "彭泽县",
            value: "360430"
          }, {
            label: "瑞昌市",
            value: "360481"
          }, {
            label: "共青城市",
            value: "360482"
          }, {
            label: "庐山市",
            value: "360483"
          }],
          [{
            label: "渝水区",
            value: "360502"
          }, {
            label: "分宜县",
            value: "360521"
          }],
          [{
            label: "月湖区",
            value: "360602"
          }, {
            label: "余江县",
            value: "360622"
          }, {
            label: "贵溪市",
            value: "360681"
          }],
          [{
            label: "章贡区",
            value: "360702"
          }, {
            label: "南康区",
            value: "360703"
          }, {
            label: "赣县区",
            value: "360704"
          }, {
            label: "信丰县",
            value: "360722"
          }, {
            label: "大余县",
            value: "360723"
          }, {
            label: "上犹县",
            value: "360724"
          }, {
            label: "崇义县",
            value: "360725"
          }, {
            label: "安远县",
            value: "360726"
          }, {
            label: "龙南县",
            value: "360727"
          }, {
            label: "定南县",
            value: "360728"
          }, {
            label: "全南县",
            value: "360729"
          }, {
            label: "宁都县",
            value: "360730"
          }, {
            label: "于都县",
            value: "360731"
          }, {
            label: "兴国县",
            value: "360732"
          }, {
            label: "会昌县",
            value: "360733"
          }, {
            label: "寻乌县",
            value: "360734"
          }, {
            label: "石城县",
            value: "360735"
          }, {
            label: "瑞金市",
            value: "360781"
          }],
          [{
            label: "吉州区",
            value: "360802"
          }, {
            label: "青原区",
            value: "360803"
          }, {
            label: "吉安县",
            value: "360821"
          }, {
            label: "吉水县",
            value: "360822"
          }, {
            label: "峡江县",
            value: "360823"
          }, {
            label: "新干县",
            value: "360824"
          }, {
            label: "永丰县",
            value: "360825"
          }, {
            label: "泰和县",
            value: "360826"
          }, {
            label: "遂川县",
            value: "360827"
          }, {
            label: "万安县",
            value: "360828"
          }, {
            label: "安福县",
            value: "360829"
          }, {
            label: "永新县",
            value: "360830"
          }, {
            label: "井冈山市",
            value: "360881"
          }],
          [{
            label: "袁州区",
            value: "360902"
          }, {
            label: "奉新县",
            value: "360921"
          }, {
            label: "万载县",
            value: "360922"
          }, {
            label: "上高县",
            value: "360923"
          }, {
            label: "宜丰县",
            value: "360924"
          }, {
            label: "靖安县",
            value: "360925"
          }, {
            label: "铜鼓县",
            value: "360926"
          }, {
            label: "丰城市",
            value: "360981"
          }, {
            label: "樟树市",
            value: "360982"
          }, {
            label: "高安市",
            value: "360983"
          }],
          [{
            label: "临川区",
            value: "361002"
          }, {
            label: "东乡区",
            value: "361003"
          }, {
            label: "南城县",
            value: "361021"
          }, {
            label: "黎川县",
            value: "361022"
          }, {
            label: "南丰县",
            value: "361023"
          }, {
            label: "崇仁县",
            value: "361024"
          }, {
            label: "乐安县",
            value: "361025"
          }, {
            label: "宜黄县",
            value: "361026"
          }, {
            label: "金溪县",
            value: "361027"
          }, {
            label: "资溪县",
            value: "361028"
          }, {
            label: "广昌县",
            value: "361030"
          }],
          [{
            label: "信州区",
            value: "361102"
          }, {
            label: "广丰区",
            value: "361103"
          }, {
            label: "上饶县",
            value: "361121"
          }, {
            label: "玉山县",
            value: "361123"
          }, {
            label: "铅山县",
            value: "361124"
          }, {
            label: "横峰县",
            value: "361125"
          }, {
            label: "弋阳县",
            value: "361126"
          }, {
            label: "余干县",
            value: "361127"
          }, {
            label: "鄱阳县",
            value: "361128"
          }, {
            label: "万年县",
            value: "361129"
          }, {
            label: "婺源县",
            value: "361130"
          }, {
            label: "德兴市",
            value: "361181"
          }]
        ],
        [
          [{
            label: "历下区",
            value: "370102"
          }, {
            label: "市中区",
            value: "370103"
          }, {
            label: "槐荫区",
            value: "370104"
          }, {
            label: "天桥区",
            value: "370105"
          }, {
            label: "历城区",
            value: "370112"
          }, {
            label: "长清区",
            value: "370113"
          }, {
            label: "章丘区",
            value: "370114"
          }, {
            label: "平阴县",
            value: "370124"
          }, {
            label: "济阳县",
            value: "370125"
          }, {
            label: "商河县",
            value: "370126"
          }, {
            label: "济南高新技术产业开发区",
            value: "370171"
          }],
          [{
            label: "市南区",
            value: "370202"
          }, {
            label: "市北区",
            value: "370203"
          }, {
            label: "黄岛区",
            value: "370211"
          }, {
            label: "崂山区",
            value: "370212"
          }, {
            label: "李沧区",
            value: "370213"
          }, {
            label: "城阳区",
            value: "370214"
          }, {
            label: "即墨区",
            value: "370215"
          }, {
            label: "青岛高新技术产业开发区",
            value: "370271"
          }, {
            label: "胶州市",
            value: "370281"
          }, {
            label: "平度市",
            value: "370283"
          }, {
            label: "莱西市",
            value: "370285"
          }],
          [{
            label: "淄川区",
            value: "370302"
          }, {
            label: "张店区",
            value: "370303"
          }, {
            label: "博山区",
            value: "370304"
          }, {
            label: "临淄区",
            value: "370305"
          }, {
            label: "周村区",
            value: "370306"
          }, {
            label: "桓台县",
            value: "370321"
          }, {
            label: "高青县",
            value: "370322"
          }, {
            label: "沂源县",
            value: "370323"
          }],
          [{
            label: "市中区",
            value: "370402"
          }, {
            label: "薛城区",
            value: "370403"
          }, {
            label: "峄城区",
            value: "370404"
          }, {
            label: "台儿庄区",
            value: "370405"
          }, {
            label: "山亭区",
            value: "370406"
          }, {
            label: "滕州市",
            value: "370481"
          }],
          [{
            label: "东营区",
            value: "370502"
          }, {
            label: "河口区",
            value: "370503"
          }, {
            label: "垦利区",
            value: "370505"
          }, {
            label: "利津县",
            value: "370522"
          }, {
            label: "广饶县",
            value: "370523"
          }, {
            label: "东营经济技术开发区",
            value: "370571"
          }, {
            label: "东营港经济开发区",
            value: "370572"
          }],
          [{
            label: "芝罘区",
            value: "370602"
          }, {
            label: "福山区",
            value: "370611"
          }, {
            label: "牟平区",
            value: "370612"
          }, {
            label: "莱山区",
            value: "370613"
          }, {
            label: "长岛县",
            value: "370634"
          }, {
            label: "烟台高新技术产业开发区",
            value: "370671"
          }, {
            label: "烟台经济技术开发区",
            value: "370672"
          }, {
            label: "龙口市",
            value: "370681"
          }, {
            label: "莱阳市",
            value: "370682"
          }, {
            label: "莱州市",
            value: "370683"
          }, {
            label: "蓬莱市",
            value: "370684"
          }, {
            label: "招远市",
            value: "370685"
          }, {
            label: "栖霞市",
            value: "370686"
          }, {
            label: "海阳市",
            value: "370687"
          }],
          [{
            label: "潍城区",
            value: "370702"
          }, {
            label: "寒亭区",
            value: "370703"
          }, {
            label: "坊子区",
            value: "370704"
          }, {
            label: "奎文区",
            value: "370705"
          }, {
            label: "临朐县",
            value: "370724"
          }, {
            label: "昌乐县",
            value: "370725"
          }, {
            label: "潍坊滨海经济技术开发区",
            value: "370772"
          }, {
            label: "青州市",
            value: "370781"
          }, {
            label: "诸城市",
            value: "370782"
          }, {
            label: "寿光市",
            value: "370783"
          }, {
            label: "安丘市",
            value: "370784"
          }, {
            label: "高密市",
            value: "370785"
          }, {
            label: "昌邑市",
            value: "370786"
          }],
          [{
            label: "任城区",
            value: "370811"
          }, {
            label: "兖州区",
            value: "370812"
          }, {
            label: "微山县",
            value: "370826"
          }, {
            label: "鱼台县",
            value: "370827"
          }, {
            label: "金乡县",
            value: "370828"
          }, {
            label: "嘉祥县",
            value: "370829"
          }, {
            label: "汶上县",
            value: "370830"
          }, {
            label: "泗水县",
            value: "370831"
          }, {
            label: "梁山县",
            value: "370832"
          }, {
            label: "济宁高新技术产业开发区",
            value: "370871"
          }, {
            label: "曲阜市",
            value: "370881"
          }, {
            label: "邹城市",
            value: "370883"
          }],
          [{
            label: "泰山区",
            value: "370902"
          }, {
            label: "岱岳区",
            value: "370911"
          }, {
            label: "宁阳县",
            value: "370921"
          }, {
            label: "东平县",
            value: "370923"
          }, {
            label: "新泰市",
            value: "370982"
          }, {
            label: "肥城市",
            value: "370983"
          }],
          [{
            label: "环翠区",
            value: "371002"
          }, {
            label: "文登区",
            value: "371003"
          }, {
            label: "威海火炬高技术产业开发区",
            value: "371071"
          }, {
            label: "威海经济技术开发区",
            value: "371072"
          }, {
            label: "威海临港经济技术开发区",
            value: "371073"
          }, {
            label: "荣成市",
            value: "371082"
          }, {
            label: "乳山市",
            value: "371083"
          }],
          [{
            label: "东港区",
            value: "371102"
          }, {
            label: "岚山区",
            value: "371103"
          }, {
            label: "五莲县",
            value: "371121"
          }, {
            label: "莒县",
            value: "371122"
          }, {
            label: "日照经济技术开发区",
            value: "371171"
          }, {
            label: "日照国际海洋城",
            value: "371172"
          }],
          [{
            label: "莱城区",
            value: "371202"
          }, {
            label: "钢城区",
            value: "371203"
          }],
          [{
            label: "兰山区",
            value: "371302"
          }, {
            label: "罗庄区",
            value: "371311"
          }, {
            label: "河东区",
            value: "371312"
          }, {
            label: "沂南县",
            value: "371321"
          }, {
            label: "郯城县",
            value: "371322"
          }, {
            label: "沂水县",
            value: "371323"
          }, {
            label: "兰陵县",
            value: "371324"
          }, {
            label: "费县",
            value: "371325"
          }, {
            label: "平邑县",
            value: "371326"
          }, {
            label: "莒南县",
            value: "371327"
          }, {
            label: "蒙阴县",
            value: "371328"
          }, {
            label: "临沭县",
            value: "371329"
          }, {
            label: "临沂高新技术产业开发区",
            value: "371371"
          }, {
            label: "临沂经济技术开发区",
            value: "371372"
          }, {
            label: "临沂临港经济开发区",
            value: "371373"
          }],
          [{
            label: "德城区",
            value: "371402"
          }, {
            label: "陵城区",
            value: "371403"
          }, {
            label: "宁津县",
            value: "371422"
          }, {
            label: "庆云县",
            value: "371423"
          }, {
            label: "临邑县",
            value: "371424"
          }, {
            label: "齐河县",
            value: "371425"
          }, {
            label: "平原县",
            value: "371426"
          }, {
            label: "夏津县",
            value: "371427"
          }, {
            label: "武城县",
            value: "371428"
          }, {
            label: "德州经济技术开发区",
            value: "371471"
          }, {
            label: "德州运河经济开发区",
            value: "371472"
          }, {
            label: "乐陵市",
            value: "371481"
          }, {
            label: "禹城市",
            value: "371482"
          }],
          [{
            label: "东昌府区",
            value: "371502"
          }, {
            label: "阳谷县",
            value: "371521"
          }, {
            label: "莘县",
            value: "371522"
          }, {
            label: "茌平县",
            value: "371523"
          }, {
            label: "东阿县",
            value: "371524"
          }, {
            label: "冠县",
            value: "371525"
          }, {
            label: "高唐县",
            value: "371526"
          }, {
            label: "临清市",
            value: "371581"
          }],
          [{
            label: "滨城区",
            value: "371602"
          }, {
            label: "沾化区",
            value: "371603"
          }, {
            label: "惠民县",
            value: "371621"
          }, {
            label: "阳信县",
            value: "371622"
          }, {
            label: "无棣县",
            value: "371623"
          }, {
            label: "博兴县",
            value: "371625"
          }, {
            label: "邹平县",
            value: "371626"
          }],
          [{
            label: "牡丹区",
            value: "371702"
          }, {
            label: "定陶区",
            value: "371703"
          }, {
            label: "曹县",
            value: "371721"
          }, {
            label: "单县",
            value: "371722"
          }, {
            label: "成武县",
            value: "371723"
          }, {
            label: "巨野县",
            value: "371724"
          }, {
            label: "郓城县",
            value: "371725"
          }, {
            label: "鄄城县",
            value: "371726"
          }, {
            label: "东明县",
            value: "371728"
          }, {
            label: "菏泽经济技术开发区",
            value: "371771"
          }, {
            label: "菏泽高新技术开发区",
            value: "371772"
          }]
        ],
        [
          [{
            label: "中原区",
            value: "410102"
          }, {
            label: "二七区",
            value: "410103"
          }, {
            label: "管城回族区",
            value: "410104"
          }, {
            label: "金水区",
            value: "410105"
          }, {
            label: "上街区",
            value: "410106"
          }, {
            label: "惠济区",
            value: "410108"
          }, {
            label: "中牟县",
            value: "410122"
          }, {
            label: "郑州经济技术开发区",
            value: "410171"
          }, {
            label: "郑州高新技术产业开发区",
            value: "410172"
          }, {
            label: "郑州航空港经济综合实验区",
            value: "410173"
          }, {
            label: "巩义市",
            value: "410181"
          }, {
            label: "荥阳市",
            value: "410182"
          }, {
            label: "新密市",
            value: "410183"
          }, {
            label: "新郑市",
            value: "410184"
          }, {
            label: "登封市",
            value: "410185"
          }],
          [{
            label: "龙亭区",
            value: "410202"
          }, {
            label: "顺河回族区",
            value: "410203"
          }, {
            label: "鼓楼区",
            value: "410204"
          }, {
            label: "禹王台区",
            value: "410205"
          }, {
            label: "祥符区",
            value: "410212"
          }, {
            label: "杞县",
            value: "410221"
          }, {
            label: "通许县",
            value: "410222"
          }, {
            label: "尉氏县",
            value: "410223"
          }, {
            label: "兰考县",
            value: "410225"
          }],
          [{
            label: "老城区",
            value: "410302"
          }, {
            label: "西工区",
            value: "410303"
          }, {
            label: "瀍河回族区",
            value: "410304"
          }, {
            label: "涧西区",
            value: "410305"
          }, {
            label: "吉利区",
            value: "410306"
          }, {
            label: "洛龙区",
            value: "410311"
          }, {
            label: "孟津县",
            value: "410322"
          }, {
            label: "新安县",
            value: "410323"
          }, {
            label: "栾川县",
            value: "410324"
          }, {
            label: "嵩县",
            value: "410325"
          }, {
            label: "汝阳县",
            value: "410326"
          }, {
            label: "宜阳县",
            value: "410327"
          }, {
            label: "洛宁县",
            value: "410328"
          }, {
            label: "伊川县",
            value: "410329"
          }, {
            label: "洛阳高新技术产业开发区",
            value: "410371"
          }, {
            label: "偃师市",
            value: "410381"
          }],
          [{
            label: "新华区",
            value: "410402"
          }, {
            label: "卫东区",
            value: "410403"
          }, {
            label: "石龙区",
            value: "410404"
          }, {
            label: "湛河区",
            value: "410411"
          }, {
            label: "宝丰县",
            value: "410421"
          }, {
            label: "叶县",
            value: "410422"
          }, {
            label: "鲁山县",
            value: "410423"
          }, {
            label: "郏县",
            value: "410425"
          }, {
            label: "平顶山高新技术产业开发区",
            value: "410471"
          }, {
            label: "平顶山市新城区",
            value: "410472"
          }, {
            label: "舞钢市",
            value: "410481"
          }, {
            label: "汝州市",
            value: "410482"
          }],
          [{
            label: "文峰区",
            value: "410502"
          }, {
            label: "北关区",
            value: "410503"
          }, {
            label: "殷都区",
            value: "410505"
          }, {
            label: "龙安区",
            value: "410506"
          }, {
            label: "安阳县",
            value: "410522"
          }, {
            label: "汤阴县",
            value: "410523"
          }, {
            label: "滑县",
            value: "410526"
          }, {
            label: "内黄县",
            value: "410527"
          }, {
            label: "安阳高新技术产业开发区",
            value: "410571"
          }, {
            label: "林州市",
            value: "410581"
          }],
          [{
            label: "鹤山区",
            value: "410602"
          }, {
            label: "山城区",
            value: "410603"
          }, {
            label: "淇滨区",
            value: "410611"
          }, {
            label: "浚县",
            value: "410621"
          }, {
            label: "淇县",
            value: "410622"
          }, {
            label: "鹤壁经济技术开发区",
            value: "410671"
          }],
          [{
            label: "红旗区",
            value: "410702"
          }, {
            label: "卫滨区",
            value: "410703"
          }, {
            label: "凤泉区",
            value: "410704"
          }, {
            label: "牧野区",
            value: "410711"
          }, {
            label: "新乡县",
            value: "410721"
          }, {
            label: "获嘉县",
            value: "410724"
          }, {
            label: "原阳县",
            value: "410725"
          }, {
            label: "延津县",
            value: "410726"
          }, {
            label: "封丘县",
            value: "410727"
          }, {
            label: "长垣县",
            value: "410728"
          }, {
            label: "新乡高新技术产业开发区",
            value: "410771"
          }, {
            label: "新乡经济技术开发区",
            value: "410772"
          }, {
            label: "新乡市平原城乡一体化示范区",
            value: "410773"
          }, {
            label: "卫辉市",
            value: "410781"
          }, {
            label: "辉县市",
            value: "410782"
          }],
          [{
            label: "解放区",
            value: "410802"
          }, {
            label: "中站区",
            value: "410803"
          }, {
            label: "马村区",
            value: "410804"
          }, {
            label: "山阳区",
            value: "410811"
          }, {
            label: "修武县",
            value: "410821"
          }, {
            label: "博爱县",
            value: "410822"
          }, {
            label: "武陟县",
            value: "410823"
          }, {
            label: "温县",
            value: "410825"
          }, {
            label: "焦作城乡一体化示范区",
            value: "410871"
          }, {
            label: "沁阳市",
            value: "410882"
          }, {
            label: "孟州市",
            value: "410883"
          }],
          [{
            label: "华龙区",
            value: "410902"
          }, {
            label: "清丰县",
            value: "410922"
          }, {
            label: "南乐县",
            value: "410923"
          }, {
            label: "范县",
            value: "410926"
          }, {
            label: "台前县",
            value: "410927"
          }, {
            label: "濮阳县",
            value: "410928"
          }, {
            label: "河南濮阳工业园区",
            value: "410971"
          }, {
            label: "濮阳经济技术开发区",
            value: "410972"
          }],
          [{
            label: "魏都区",
            value: "411002"
          }, {
            label: "建安区",
            value: "411003"
          }, {
            label: "鄢陵县",
            value: "411024"
          }, {
            label: "襄城县",
            value: "411025"
          }, {
            label: "许昌经济技术开发区",
            value: "411071"
          }, {
            label: "禹州市",
            value: "411081"
          }, {
            label: "长葛市",
            value: "411082"
          }],
          [{
            label: "源汇区",
            value: "411102"
          }, {
            label: "郾城区",
            value: "411103"
          }, {
            label: "召陵区",
            value: "411104"
          }, {
            label: "舞阳县",
            value: "411121"
          }, {
            label: "临颍县",
            value: "411122"
          }, {
            label: "漯河经济技术开发区",
            value: "411171"
          }],
          [{
            label: "湖滨区",
            value: "411202"
          }, {
            label: "陕州区",
            value: "411203"
          }, {
            label: "渑池县",
            value: "411221"
          }, {
            label: "卢氏县",
            value: "411224"
          }, {
            label: "河南三门峡经济开发区",
            value: "411271"
          }, {
            label: "义马市",
            value: "411281"
          }, {
            label: "灵宝市",
            value: "411282"
          }],
          [{
            label: "宛城区",
            value: "411302"
          }, {
            label: "卧龙区",
            value: "411303"
          }, {
            label: "南召县",
            value: "411321"
          }, {
            label: "方城县",
            value: "411322"
          }, {
            label: "西峡县",
            value: "411323"
          }, {
            label: "镇平县",
            value: "411324"
          }, {
            label: "内乡县",
            value: "411325"
          }, {
            label: "淅川县",
            value: "411326"
          }, {
            label: "社旗县",
            value: "411327"
          }, {
            label: "唐河县",
            value: "411328"
          }, {
            label: "新野县",
            value: "411329"
          }, {
            label: "桐柏县",
            value: "411330"
          }, {
            label: "南阳高新技术产业开发区",
            value: "411371"
          }, {
            label: "南阳市城乡一体化示范区",
            value: "411372"
          }, {
            label: "邓州市",
            value: "411381"
          }],
          [{
            label: "梁园区",
            value: "411402"
          }, {
            label: "睢阳区",
            value: "411403"
          }, {
            label: "民权县",
            value: "411421"
          }, {
            label: "睢县",
            value: "411422"
          }, {
            label: "宁陵县",
            value: "411423"
          }, {
            label: "柘城县",
            value: "411424"
          }, {
            label: "虞城县",
            value: "411425"
          }, {
            label: "夏邑县",
            value: "411426"
          }, {
            label: "豫东综合物流产业聚集区",
            value: "411471"
          }, {
            label: "河南商丘经济开发区",
            value: "411472"
          }, {
            label: "永城市",
            value: "411481"
          }],
          [{
            label: "浉河区",
            value: "411502"
          }, {
            label: "平桥区",
            value: "411503"
          }, {
            label: "罗山县",
            value: "411521"
          }, {
            label: "光山县",
            value: "411522"
          }, {
            label: "新县",
            value: "411523"
          }, {
            label: "商城县",
            value: "411524"
          }, {
            label: "固始县",
            value: "411525"
          }, {
            label: "潢川县",
            value: "411526"
          }, {
            label: "淮滨县",
            value: "411527"
          }, {
            label: "息县",
            value: "411528"
          }, {
            label: "信阳高新技术产业开发区",
            value: "411571"
          }],
          [{
            label: "川汇区",
            value: "411602"
          }, {
            label: "扶沟县",
            value: "411621"
          }, {
            label: "西华县",
            value: "411622"
          }, {
            label: "商水县",
            value: "411623"
          }, {
            label: "沈丘县",
            value: "411624"
          }, {
            label: "郸城县",
            value: "411625"
          }, {
            label: "淮阳县",
            value: "411626"
          }, {
            label: "太康县",
            value: "411627"
          }, {
            label: "鹿邑县",
            value: "411628"
          }, {
            label: "河南周口经济开发区",
            value: "411671"
          }, {
            label: "项城市",
            value: "411681"
          }],
          [{
            label: "驿城区",
            value: "411702"
          }, {
            label: "西平县",
            value: "411721"
          }, {
            label: "上蔡县",
            value: "411722"
          }, {
            label: "平舆县",
            value: "411723"
          }, {
            label: "正阳县",
            value: "411724"
          }, {
            label: "确山县",
            value: "411725"
          }, {
            label: "泌阳县",
            value: "411726"
          }, {
            label: "汝南县",
            value: "411727"
          }, {
            label: "遂平县",
            value: "411728"
          }, {
            label: "新蔡县",
            value: "411729"
          }, {
            label: "河南驻马店经济开发区",
            value: "411771"
          }],
          [{
            label: "济源市",
            value: "419001"
          }]
        ],
        [
          [{
            label: "江岸区",
            value: "420102"
          }, {
            label: "江汉区",
            value: "420103"
          }, {
            label: "硚口区",
            value: "420104"
          }, {
            label: "汉阳区",
            value: "420105"
          }, {
            label: "武昌区",
            value: "420106"
          }, {
            label: "青山区",
            value: "420107"
          }, {
            label: "洪山区",
            value: "420111"
          }, {
            label: "东西湖区",
            value: "420112"
          }, {
            label: "汉南区",
            value: "420113"
          }, {
            label: "蔡甸区",
            value: "420114"
          }, {
            label: "江夏区",
            value: "420115"
          }, {
            label: "黄陂区",
            value: "420116"
          }, {
            label: "新洲区",
            value: "420117"
          }],
          [{
            label: "黄石港区",
            value: "420202"
          }, {
            label: "西塞山区",
            value: "420203"
          }, {
            label: "下陆区",
            value: "420204"
          }, {
            label: "铁山区",
            value: "420205"
          }, {
            label: "阳新县",
            value: "420222"
          }, {
            label: "大冶市",
            value: "420281"
          }],
          [{
            label: "茅箭区",
            value: "420302"
          }, {
            label: "张湾区",
            value: "420303"
          }, {
            label: "郧阳区",
            value: "420304"
          }, {
            label: "郧西县",
            value: "420322"
          }, {
            label: "竹山县",
            value: "420323"
          }, {
            label: "竹溪县",
            value: "420324"
          }, {
            label: "房县",
            value: "420325"
          }, {
            label: "丹江口市",
            value: "420381"
          }],
          [{
            label: "西陵区",
            value: "420502"
          }, {
            label: "伍家岗区",
            value: "420503"
          }, {
            label: "点军区",
            value: "420504"
          }, {
            label: "猇亭区",
            value: "420505"
          }, {
            label: "夷陵区",
            value: "420506"
          }, {
            label: "远安县",
            value: "420525"
          }, {
            label: "兴山县",
            value: "420526"
          }, {
            label: "秭归县",
            value: "420527"
          }, {
            label: "长阳土家族自治县",
            value: "420528"
          }, {
            label: "五峰土家族自治县",
            value: "420529"
          }, {
            label: "宜都市",
            value: "420581"
          }, {
            label: "当阳市",
            value: "420582"
          }, {
            label: "枝江市",
            value: "420583"
          }],
          [{
            label: "襄城区",
            value: "420602"
          }, {
            label: "樊城区",
            value: "420606"
          }, {
            label: "襄州区",
            value: "420607"
          }, {
            label: "南漳县",
            value: "420624"
          }, {
            label: "谷城县",
            value: "420625"
          }, {
            label: "保康县",
            value: "420626"
          }, {
            label: "老河口市",
            value: "420682"
          }, {
            label: "枣阳市",
            value: "420683"
          }, {
            label: "宜城市",
            value: "420684"
          }],
          [{
            label: "梁子湖区",
            value: "420702"
          }, {
            label: "华容区",
            value: "420703"
          }, {
            label: "鄂城区",
            value: "420704"
          }],
          [{
            label: "东宝区",
            value: "420802"
          }, {
            label: "掇刀区",
            value: "420804"
          }, {
            label: "京山县",
            value: "420821"
          }, {
            label: "沙洋县",
            value: "420822"
          }, {
            label: "钟祥市",
            value: "420881"
          }],
          [{
            label: "孝南区",
            value: "420902"
          }, {
            label: "孝昌县",
            value: "420921"
          }, {
            label: "大悟县",
            value: "420922"
          }, {
            label: "云梦县",
            value: "420923"
          }, {
            label: "应城市",
            value: "420981"
          }, {
            label: "安陆市",
            value: "420982"
          }, {
            label: "汉川市",
            value: "420984"
          }],
          [{
            label: "沙市区",
            value: "421002"
          }, {
            label: "荆州区",
            value: "421003"
          }, {
            label: "公安县",
            value: "421022"
          }, {
            label: "监利县",
            value: "421023"
          }, {
            label: "江陵县",
            value: "421024"
          }, {
            label: "荆州经济技术开发区",
            value: "421071"
          }, {
            label: "石首市",
            value: "421081"
          }, {
            label: "洪湖市",
            value: "421083"
          }, {
            label: "松滋市",
            value: "421087"
          }],
          [{
            label: "黄州区",
            value: "421102"
          }, {
            label: "团风县",
            value: "421121"
          }, {
            label: "红安县",
            value: "421122"
          }, {
            label: "罗田县",
            value: "421123"
          }, {
            label: "英山县",
            value: "421124"
          }, {
            label: "浠水县",
            value: "421125"
          }, {
            label: "蕲春县",
            value: "421126"
          }, {
            label: "黄梅县",
            value: "421127"
          }, {
            label: "龙感湖管理区",
            value: "421171"
          }, {
            label: "麻城市",
            value: "421181"
          }, {
            label: "武穴市",
            value: "421182"
          }],
          [{
            label: "咸安区",
            value: "421202"
          }, {
            label: "嘉鱼县",
            value: "421221"
          }, {
            label: "通城县",
            value: "421222"
          }, {
            label: "崇阳县",
            value: "421223"
          }, {
            label: "通山县",
            value: "421224"
          }, {
            label: "赤壁市",
            value: "421281"
          }],
          [{
            label: "曾都区",
            value: "421303"
          }, {
            label: "随县",
            value: "421321"
          }, {
            label: "广水市",
            value: "421381"
          }],
          [{
            label: "恩施市",
            value: "422801"
          }, {
            label: "利川市",
            value: "422802"
          }, {
            label: "建始县",
            value: "422822"
          }, {
            label: "巴东县",
            value: "422823"
          }, {
            label: "宣恩县",
            value: "422825"
          }, {
            label: "咸丰县",
            value: "422826"
          }, {
            label: "来凤县",
            value: "422827"
          }, {
            label: "鹤峰县",
            value: "422828"
          }],
          [{
            label: "仙桃市",
            value: "429004"
          }, {
            label: "潜江市",
            value: "429005"
          }, {
            label: "天门市",
            value: "429006"
          }, {
            label: "神农架林区",
            value: "429021"
          }]
        ],
        [
          [{
            label: "芙蓉区",
            value: "430102"
          }, {
            label: "天心区",
            value: "430103"
          }, {
            label: "岳麓区",
            value: "430104"
          }, {
            label: "开福区",
            value: "430105"
          }, {
            label: "雨花区",
            value: "430111"
          }, {
            label: "望城区",
            value: "430112"
          }, {
            label: "长沙县",
            value: "430121"
          }, {
            label: "浏阳市",
            value: "430181"
          }, {
            label: "宁乡市",
            value: "430182"
          }],
          [{
            label: "荷塘区",
            value: "430202"
          }, {
            label: "芦淞区",
            value: "430203"
          }, {
            label: "石峰区",
            value: "430204"
          }, {
            label: "天元区",
            value: "430211"
          }, {
            label: "株洲县",
            value: "430221"
          }, {
            label: "攸县",
            value: "430223"
          }, {
            label: "茶陵县",
            value: "430224"
          }, {
            label: "炎陵县",
            value: "430225"
          }, {
            label: "云龙示范区",
            value: "430271"
          }, {
            label: "醴陵市",
            value: "430281"
          }],
          [{
            label: "雨湖区",
            value: "430302"
          }, {
            label: "岳塘区",
            value: "430304"
          }, {
            label: "湘潭县",
            value: "430321"
          }, {
            label: "湖南湘潭高新技术产业园区",
            value: "430371"
          }, {
            label: "湘潭昭山示范区",
            value: "430372"
          }, {
            label: "湘潭九华示范区",
            value: "430373"
          }, {
            label: "湘乡市",
            value: "430381"
          }, {
            label: "韶山市",
            value: "430382"
          }],
          [{
            label: "珠晖区",
            value: "430405"
          }, {
            label: "雁峰区",
            value: "430406"
          }, {
            label: "石鼓区",
            value: "430407"
          }, {
            label: "蒸湘区",
            value: "430408"
          }, {
            label: "南岳区",
            value: "430412"
          }, {
            label: "衡阳县",
            value: "430421"
          }, {
            label: "衡南县",
            value: "430422"
          }, {
            label: "衡山县",
            value: "430423"
          }, {
            label: "衡东县",
            value: "430424"
          }, {
            label: "祁东县",
            value: "430426"
          }, {
            label: "衡阳综合保税区",
            value: "430471"
          }, {
            label: "湖南衡阳高新技术产业园区",
            value: "430472"
          }, {
            label: "湖南衡阳松木经济开发区",
            value: "430473"
          }, {
            label: "耒阳市",
            value: "430481"
          }, {
            label: "常宁市",
            value: "430482"
          }],
          [{
            label: "双清区",
            value: "430502"
          }, {
            label: "大祥区",
            value: "430503"
          }, {
            label: "北塔区",
            value: "430511"
          }, {
            label: "邵东县",
            value: "430521"
          }, {
            label: "新邵县",
            value: "430522"
          }, {
            label: "邵阳县",
            value: "430523"
          }, {
            label: "隆回县",
            value: "430524"
          }, {
            label: "洞口县",
            value: "430525"
          }, {
            label: "绥宁县",
            value: "430527"
          }, {
            label: "新宁县",
            value: "430528"
          }, {
            label: "城步苗族自治县",
            value: "430529"
          }, {
            label: "武冈市",
            value: "430581"
          }],
          [{
            label: "岳阳楼区",
            value: "430602"
          }, {
            label: "云溪区",
            value: "430603"
          }, {
            label: "君山区",
            value: "430611"
          }, {
            label: "岳阳县",
            value: "430621"
          }, {
            label: "华容县",
            value: "430623"
          }, {
            label: "湘阴县",
            value: "430624"
          }, {
            label: "平江县",
            value: "430626"
          }, {
            label: "岳阳市屈原管理区",
            value: "430671"
          }, {
            label: "汨罗市",
            value: "430681"
          }, {
            label: "临湘市",
            value: "430682"
          }],
          [{
            label: "武陵区",
            value: "430702"
          }, {
            label: "鼎城区",
            value: "430703"
          }, {
            label: "安乡县",
            value: "430721"
          }, {
            label: "汉寿县",
            value: "430722"
          }, {
            label: "澧县",
            value: "430723"
          }, {
            label: "临澧县",
            value: "430724"
          }, {
            label: "桃源县",
            value: "430725"
          }, {
            label: "石门县",
            value: "430726"
          }, {
            label: "常德市西洞庭管理区",
            value: "430771"
          }, {
            label: "津市市",
            value: "430781"
          }],
          [{
            label: "永定区",
            value: "430802"
          }, {
            label: "武陵源区",
            value: "430811"
          }, {
            label: "慈利县",
            value: "430821"
          }, {
            label: "桑植县",
            value: "430822"
          }],
          [{
            label: "资阳区",
            value: "430902"
          }, {
            label: "赫山区",
            value: "430903"
          }, {
            label: "南县",
            value: "430921"
          }, {
            label: "桃江县",
            value: "430922"
          }, {
            label: "安化县",
            value: "430923"
          }, {
            label: "益阳市大通湖管理区",
            value: "430971"
          }, {
            label: "湖南益阳高新技术产业园区",
            value: "430972"
          }, {
            label: "沅江市",
            value: "430981"
          }],
          [{
            label: "北湖区",
            value: "431002"
          }, {
            label: "苏仙区",
            value: "431003"
          }, {
            label: "桂阳县",
            value: "431021"
          }, {
            label: "宜章县",
            value: "431022"
          }, {
            label: "永兴县",
            value: "431023"
          }, {
            label: "嘉禾县",
            value: "431024"
          }, {
            label: "临武县",
            value: "431025"
          }, {
            label: "汝城县",
            value: "431026"
          }, {
            label: "桂东县",
            value: "431027"
          }, {
            label: "安仁县",
            value: "431028"
          }, {
            label: "资兴市",
            value: "431081"
          }],
          [{
            label: "零陵区",
            value: "431102"
          }, {
            label: "冷水滩区",
            value: "431103"
          }, {
            label: "祁阳县",
            value: "431121"
          }, {
            label: "东安县",
            value: "431122"
          }, {
            label: "双牌县",
            value: "431123"
          }, {
            label: "道县",
            value: "431124"
          }, {
            label: "江永县",
            value: "431125"
          }, {
            label: "宁远县",
            value: "431126"
          }, {
            label: "蓝山县",
            value: "431127"
          }, {
            label: "新田县",
            value: "431128"
          }, {
            label: "江华瑶族自治县",
            value: "431129"
          }, {
            label: "永州经济技术开发区",
            value: "431171"
          }, {
            label: "永州市金洞管理区",
            value: "431172"
          }, {
            label: "永州市回龙圩管理区",
            value: "431173"
          }],
          [{
            label: "鹤城区",
            value: "431202"
          }, {
            label: "中方县",
            value: "431221"
          }, {
            label: "沅陵县",
            value: "431222"
          }, {
            label: "辰溪县",
            value: "431223"
          }, {
            label: "溆浦县",
            value: "431224"
          }, {
            label: "会同县",
            value: "431225"
          }, {
            label: "麻阳苗族自治县",
            value: "431226"
          }, {
            label: "新晃侗族自治县",
            value: "431227"
          }, {
            label: "芷江侗族自治县",
            value: "431228"
          }, {
            label: "靖州苗族侗族自治县",
            value: "431229"
          }, {
            label: "通道侗族自治县",
            value: "431230"
          }, {
            label: "怀化市洪江管理区",
            value: "431271"
          }, {
            label: "洪江市",
            value: "431281"
          }],
          [{
            label: "娄星区",
            value: "431302"
          }, {
            label: "双峰县",
            value: "431321"
          }, {
            label: "新化县",
            value: "431322"
          }, {
            label: "冷水江市",
            value: "431381"
          }, {
            label: "涟源市",
            value: "431382"
          }],
          [{
            label: "吉首市",
            value: "433101"
          }, {
            label: "泸溪县",
            value: "433122"
          }, {
            label: "凤凰县",
            value: "433123"
          }, {
            label: "花垣县",
            value: "433124"
          }, {
            label: "保靖县",
            value: "433125"
          }, {
            label: "古丈县",
            value: "433126"
          }, {
            label: "永顺县",
            value: "433127"
          }, {
            label: "龙山县",
            value: "433130"
          }, {
            label: "湖南吉首经济开发区",
            value: "433172"
          }, {
            label: "湖南永顺经济开发区",
            value: "433173"
          }]
        ],
        [
          [{
            label: "荔湾区",
            value: "440103"
          }, {
            label: "越秀区",
            value: "440104"
          }, {
            label: "海珠区",
            value: "440105"
          }, {
            label: "天河区",
            value: "440106"
          }, {
            label: "白云区",
            value: "440111"
          }, {
            label: "黄埔区",
            value: "440112"
          }, {
            label: "番禺区",
            value: "440113"
          }, {
            label: "花都区",
            value: "440114"
          }, {
            label: "南沙区",
            value: "440115"
          }, {
            label: "从化区",
            value: "440117"
          }, {
            label: "增城区",
            value: "440118"
          }],
          [{
            label: "武江区",
            value: "440203"
          }, {
            label: "浈江区",
            value: "440204"
          }, {
            label: "曲江区",
            value: "440205"
          }, {
            label: "始兴县",
            value: "440222"
          }, {
            label: "仁化县",
            value: "440224"
          }, {
            label: "翁源县",
            value: "440229"
          }, {
            label: "乳源瑶族自治县",
            value: "440232"
          }, {
            label: "新丰县",
            value: "440233"
          }, {
            label: "乐昌市",
            value: "440281"
          }, {
            label: "南雄市",
            value: "440282"
          }],
          [{
            label: "罗湖区",
            value: "440303"
          }, {
            label: "福田区",
            value: "440304"
          }, {
            label: "南山区",
            value: "440305"
          }, {
            label: "宝安区",
            value: "440306"
          }, {
            label: "龙岗区",
            value: "440307"
          }, {
            label: "盐田区",
            value: "440308"
          }, {
            label: "龙华区",
            value: "440309"
          }, {
            label: "坪山区",
            value: "440310"
          }],
          [{
            label: "香洲区",
            value: "440402"
          }, {
            label: "斗门区",
            value: "440403"
          }, {
            label: "金湾区",
            value: "440404"
          }],
          [{
            label: "龙湖区",
            value: "440507"
          }, {
            label: "金平区",
            value: "440511"
          }, {
            label: "濠江区",
            value: "440512"
          }, {
            label: "潮阳区",
            value: "440513"
          }, {
            label: "潮南区",
            value: "440514"
          }, {
            label: "澄海区",
            value: "440515"
          }, {
            label: "南澳县",
            value: "440523"
          }],
          [{
            label: "禅城区",
            value: "440604"
          }, {
            label: "南海区",
            value: "440605"
          }, {
            label: "顺德区",
            value: "440606"
          }, {
            label: "三水区",
            value: "440607"
          }, {
            label: "高明区",
            value: "440608"
          }],
          [{
            label: "蓬江区",
            value: "440703"
          }, {
            label: "江海区",
            value: "440704"
          }, {
            label: "新会区",
            value: "440705"
          }, {
            label: "台山市",
            value: "440781"
          }, {
            label: "开平市",
            value: "440783"
          }, {
            label: "鹤山市",
            value: "440784"
          }, {
            label: "恩平市",
            value: "440785"
          }],
          [{
            label: "赤坎区",
            value: "440802"
          }, {
            label: "霞山区",
            value: "440803"
          }, {
            label: "坡头区",
            value: "440804"
          }, {
            label: "麻章区",
            value: "440811"
          }, {
            label: "遂溪县",
            value: "440823"
          }, {
            label: "徐闻县",
            value: "440825"
          }, {
            label: "廉江市",
            value: "440881"
          }, {
            label: "雷州市",
            value: "440882"
          }, {
            label: "吴川市",
            value: "440883"
          }],
          [{
            label: "茂南区",
            value: "440902"
          }, {
            label: "电白区",
            value: "440904"
          }, {
            label: "高州市",
            value: "440981"
          }, {
            label: "化州市",
            value: "440982"
          }, {
            label: "信宜市",
            value: "440983"
          }],
          [{
            label: "端州区",
            value: "441202"
          }, {
            label: "鼎湖区",
            value: "441203"
          }, {
            label: "高要区",
            value: "441204"
          }, {
            label: "广宁县",
            value: "441223"
          }, {
            label: "怀集县",
            value: "441224"
          }, {
            label: "封开县",
            value: "441225"
          }, {
            label: "德庆县",
            value: "441226"
          }, {
            label: "四会市",
            value: "441284"
          }],
          [{
            label: "惠城区",
            value: "441302"
          }, {
            label: "惠阳区",
            value: "441303"
          }, {
            label: "博罗县",
            value: "441322"
          }, {
            label: "惠东县",
            value: "441323"
          }, {
            label: "龙门县",
            value: "441324"
          }],
          [{
            label: "梅江区",
            value: "441402"
          }, {
            label: "梅县区",
            value: "441403"
          }, {
            label: "大埔县",
            value: "441422"
          }, {
            label: "丰顺县",
            value: "441423"
          }, {
            label: "五华县",
            value: "441424"
          }, {
            label: "平远县",
            value: "441426"
          }, {
            label: "蕉岭县",
            value: "441427"
          }, {
            label: "兴宁市",
            value: "441481"
          }],
          [{
            label: "城区",
            value: "441502"
          }, {
            label: "海丰县",
            value: "441521"
          }, {
            label: "陆河县",
            value: "441523"
          }, {
            label: "陆丰市",
            value: "441581"
          }],
          [{
            label: "源城区",
            value: "441602"
          }, {
            label: "紫金县",
            value: "441621"
          }, {
            label: "龙川县",
            value: "441622"
          }, {
            label: "连平县",
            value: "441623"
          }, {
            label: "和平县",
            value: "441624"
          }, {
            label: "东源县",
            value: "441625"
          }],
          [{
            label: "江城区",
            value: "441702"
          }, {
            label: "阳东区",
            value: "441704"
          }, {
            label: "阳西县",
            value: "441721"
          }, {
            label: "阳春市",
            value: "441781"
          }],
          [{
            label: "清城区",
            value: "441802"
          }, {
            label: "清新区",
            value: "441803"
          }, {
            label: "佛冈县",
            value: "441821"
          }, {
            label: "阳山县",
            value: "441823"
          }, {
            label: "连山壮族瑶族自治县",
            value: "441825"
          }, {
            label: "连南瑶族自治县",
            value: "441826"
          }, {
            label: "英德市",
            value: "441881"
          }, {
            label: "连州市",
            value: "441882"
          }],
          [{
            label: "东莞市",
            value: "441900"
          }],
          [{
            label: "中山市",
            value: "442000"
          }],
          [{
            label: "湘桥区",
            value: "445102"
          }, {
            label: "潮安区",
            value: "445103"
          }, {
            label: "饶平县",
            value: "445122"
          }],
          [{
            label: "榕城区",
            value: "445202"
          }, {
            label: "揭东区",
            value: "445203"
          }, {
            label: "揭西县",
            value: "445222"
          }, {
            label: "惠来县",
            value: "445224"
          }, {
            label: "普宁市",
            value: "445281"
          }],
          [{
            label: "云城区",
            value: "445302"
          }, {
            label: "云安区",
            value: "445303"
          }, {
            label: "新兴县",
            value: "445321"
          }, {
            label: "郁南县",
            value: "445322"
          }, {
            label: "罗定市",
            value: "445381"
          }]
        ],
        [
          [{
            label: "兴宁区",
            value: "450102"
          }, {
            label: "青秀区",
            value: "450103"
          }, {
            label: "江南区",
            value: "450105"
          }, {
            label: "西乡塘区",
            value: "450107"
          }, {
            label: "良庆区",
            value: "450108"
          }, {
            label: "邕宁区",
            value: "450109"
          }, {
            label: "武鸣区",
            value: "450110"
          }, {
            label: "隆安县",
            value: "450123"
          }, {
            label: "马山县",
            value: "450124"
          }, {
            label: "上林县",
            value: "450125"
          }, {
            label: "宾阳县",
            value: "450126"
          }, {
            label: "横县",
            value: "450127"
          }],
          [{
            label: "城中区",
            value: "450202"
          }, {
            label: "鱼峰区",
            value: "450203"
          }, {
            label: "柳南区",
            value: "450204"
          }, {
            label: "柳北区",
            value: "450205"
          }, {
            label: "柳江区",
            value: "450206"
          }, {
            label: "柳城县",
            value: "450222"
          }, {
            label: "鹿寨县",
            value: "450223"
          }, {
            label: "融安县",
            value: "450224"
          }, {
            label: "融水苗族自治县",
            value: "450225"
          }, {
            label: "三江侗族自治县",
            value: "450226"
          }],
          [{
            label: "秀峰区",
            value: "450302"
          }, {
            label: "叠彩区",
            value: "450303"
          }, {
            label: "象山区",
            value: "450304"
          }, {
            label: "七星区",
            value: "450305"
          }, {
            label: "雁山区",
            value: "450311"
          }, {
            label: "临桂区",
            value: "450312"
          }, {
            label: "阳朔县",
            value: "450321"
          }, {
            label: "灵川县",
            value: "450323"
          }, {
            label: "全州县",
            value: "450324"
          }, {
            label: "兴安县",
            value: "450325"
          }, {
            label: "永福县",
            value: "450326"
          }, {
            label: "灌阳县",
            value: "450327"
          }, {
            label: "龙胜各族自治县",
            value: "450328"
          }, {
            label: "资源县",
            value: "450329"
          }, {
            label: "平乐县",
            value: "450330"
          }, {
            label: "荔浦县",
            value: "450331"
          }, {
            label: "恭城瑶族自治县",
            value: "450332"
          }],
          [{
            label: "万秀区",
            value: "450403"
          }, {
            label: "长洲区",
            value: "450405"
          }, {
            label: "龙圩区",
            value: "450406"
          }, {
            label: "苍梧县",
            value: "450421"
          }, {
            label: "藤县",
            value: "450422"
          }, {
            label: "蒙山县",
            value: "450423"
          }, {
            label: "岑溪市",
            value: "450481"
          }],
          [{
            label: "海城区",
            value: "450502"
          }, {
            label: "银海区",
            value: "450503"
          }, {
            label: "铁山港区",
            value: "450512"
          }, {
            label: "合浦县",
            value: "450521"
          }],
          [{
            label: "港口区",
            value: "450602"
          }, {
            label: "防城区",
            value: "450603"
          }, {
            label: "上思县",
            value: "450621"
          }, {
            label: "东兴市",
            value: "450681"
          }],
          [{
            label: "钦南区",
            value: "450702"
          }, {
            label: "钦北区",
            value: "450703"
          }, {
            label: "灵山县",
            value: "450721"
          }, {
            label: "浦北县",
            value: "450722"
          }],
          [{
            label: "港北区",
            value: "450802"
          }, {
            label: "港南区",
            value: "450803"
          }, {
            label: "覃塘区",
            value: "450804"
          }, {
            label: "平南县",
            value: "450821"
          }, {
            label: "桂平市",
            value: "450881"
          }],
          [{
            label: "玉州区",
            value: "450902"
          }, {
            label: "福绵区",
            value: "450903"
          }, {
            label: "容县",
            value: "450921"
          }, {
            label: "陆川县",
            value: "450922"
          }, {
            label: "博白县",
            value: "450923"
          }, {
            label: "兴业县",
            value: "450924"
          }, {
            label: "北流市",
            value: "450981"
          }],
          [{
            label: "右江区",
            value: "451002"
          }, {
            label: "田阳县",
            value: "451021"
          }, {
            label: "田东县",
            value: "451022"
          }, {
            label: "平果县",
            value: "451023"
          }, {
            label: "德保县",
            value: "451024"
          }, {
            label: "那坡县",
            value: "451026"
          }, {
            label: "凌云县",
            value: "451027"
          }, {
            label: "乐业县",
            value: "451028"
          }, {
            label: "田林县",
            value: "451029"
          }, {
            label: "西林县",
            value: "451030"
          }, {
            label: "隆林各族自治县",
            value: "451031"
          }, {
            label: "靖西市",
            value: "451081"
          }],
          [{
            label: "八步区",
            value: "451102"
          }, {
            label: "平桂区",
            value: "451103"
          }, {
            label: "昭平县",
            value: "451121"
          }, {
            label: "钟山县",
            value: "451122"
          }, {
            label: "富川瑶族自治县",
            value: "451123"
          }],
          [{
            label: "金城江区",
            value: "451202"
          }, {
            label: "宜州区",
            value: "451203"
          }, {
            label: "南丹县",
            value: "451221"
          }, {
            label: "天峨县",
            value: "451222"
          }, {
            label: "凤山县",
            value: "451223"
          }, {
            label: "东兰县",
            value: "451224"
          }, {
            label: "罗城仫佬族自治县",
            value: "451225"
          }, {
            label: "环江毛南族自治县",
            value: "451226"
          }, {
            label: "巴马瑶族自治县",
            value: "451227"
          }, {
            label: "都安瑶族自治县",
            value: "451228"
          }, {
            label: "大化瑶族自治县",
            value: "451229"
          }],
          [{
            label: "兴宾区",
            value: "451302"
          }, {
            label: "忻城县",
            value: "451321"
          }, {
            label: "象州县",
            value: "451322"
          }, {
            label: "武宣县",
            value: "451323"
          }, {
            label: "金秀瑶族自治县",
            value: "451324"
          }, {
            label: "合山市",
            value: "451381"
          }],
          [{
            label: "江州区",
            value: "451402"
          }, {
            label: "扶绥县",
            value: "451421"
          }, {
            label: "宁明县",
            value: "451422"
          }, {
            label: "龙州县",
            value: "451423"
          }, {
            label: "大新县",
            value: "451424"
          }, {
            label: "天等县",
            value: "451425"
          }, {
            label: "凭祥市",
            value: "451481"
          }]
        ],
        [
          [{
            label: "秀英区",
            value: "460105"
          }, {
            label: "龙华区",
            value: "460106"
          }, {
            label: "琼山区",
            value: "460107"
          }, {
            label: "美兰区",
            value: "460108"
          }],
          [{
            label: "海棠区",
            value: "460202"
          }, {
            label: "吉阳区",
            value: "460203"
          }, {
            label: "天涯区",
            value: "460204"
          }, {
            label: "崖州区",
            value: "460205"
          }],
          [{
            label: "西沙群岛",
            value: "460321"
          }, {
            label: "南沙群岛",
            value: "460322"
          }, {
            label: "中沙群岛的岛礁及其海域",
            value: "460323"
          }],
          [{
            label: "儋州市",
            value: "460400"
          }],
          [{
            label: "五指山市",
            value: "469001"
          }, {
            label: "琼海市",
            value: "469002"
          }, {
            label: "文昌市",
            value: "469005"
          }, {
            label: "万宁市",
            value: "469006"
          }, {
            label: "东方市",
            value: "469007"
          }, {
            label: "定安县",
            value: "469021"
          }, {
            label: "屯昌县",
            value: "469022"
          }, {
            label: "澄迈县",
            value: "469023"
          }, {
            label: "临高县",
            value: "469024"
          }, {
            label: "白沙黎族自治县",
            value: "469025"
          }, {
            label: "昌江黎族自治县",
            value: "469026"
          }, {
            label: "乐东黎族自治县",
            value: "469027"
          }, {
            label: "陵水黎族自治县",
            value: "469028"
          }, {
            label: "保亭黎族苗族自治县",
            value: "469029"
          }, {
            label: "琼中黎族苗族自治县",
            value: "469030"
          }]
        ],
        [
          [{
            label: "万州区",
            value: "500101"
          }, {
            label: "涪陵区",
            value: "500102"
          }, {
            label: "渝中区",
            value: "500103"
          }, {
            label: "大渡口区",
            value: "500104"
          }, {
            label: "江北区",
            value: "500105"
          }, {
            label: "沙坪坝区",
            value: "500106"
          }, {
            label: "九龙坡区",
            value: "500107"
          }, {
            label: "南岸区",
            value: "500108"
          }, {
            label: "北碚区",
            value: "500109"
          }, {
            label: "綦江区",
            value: "500110"
          }, {
            label: "大足区",
            value: "500111"
          }, {
            label: "渝北区",
            value: "500112"
          }, {
            label: "巴南区",
            value: "500113"
          }, {
            label: "黔江区",
            value: "500114"
          }, {
            label: "长寿区",
            value: "500115"
          }, {
            label: "江津区",
            value: "500116"
          }, {
            label: "合川区",
            value: "500117"
          }, {
            label: "永川区",
            value: "500118"
          }, {
            label: "南川区",
            value: "500119"
          }, {
            label: "璧山区",
            value: "500120"
          }, {
            label: "铜梁区",
            value: "500151"
          }, {
            label: "潼南区",
            value: "500152"
          }, {
            label: "荣昌区",
            value: "500153"
          }, {
            label: "开州区",
            value: "500154"
          }, {
            label: "梁平区",
            value: "500155"
          }, {
            label: "武隆区",
            value: "500156"
          }],
          [{
            label: "城口县",
            value: "500229"
          }, {
            label: "丰都县",
            value: "500230"
          }, {
            label: "垫江县",
            value: "500231"
          }, {
            label: "忠县",
            value: "500233"
          }, {
            label: "云阳县",
            value: "500235"
          }, {
            label: "奉节县",
            value: "500236"
          }, {
            label: "巫山县",
            value: "500237"
          }, {
            label: "巫溪县",
            value: "500238"
          }, {
            label: "石柱土家族自治县",
            value: "500240"
          }, {
            label: "秀山土家族苗族自治县",
            value: "500241"
          }, {
            label: "酉阳土家族苗族自治县",
            value: "500242"
          }, {
            label: "彭水苗族土家族自治县",
            value: "500243"
          }]
        ],
        [
          [{
            label: "锦江区",
            value: "510104"
          }, {
            label: "青羊区",
            value: "510105"
          }, {
            label: "金牛区",
            value: "510106"
          }, {
            label: "武侯区",
            value: "510107"
          }, {
            label: "成华区",
            value: "510108"
          }, {
            label: "龙泉驿区",
            value: "510112"
          }, {
            label: "青白江区",
            value: "510113"
          }, {
            label: "新都区",
            value: "510114"
          }, {
            label: "温江区",
            value: "510115"
          }, {
            label: "双流区",
            value: "510116"
          }, {
            label: "郫都区",
            value: "510117"
          }, {
            label: "金堂县",
            value: "510121"
          }, {
            label: "大邑县",
            value: "510129"
          }, {
            label: "蒲江县",
            value: "510131"
          }, {
            label: "新津县",
            value: "510132"
          }, {
            label: "都江堰市",
            value: "510181"
          }, {
            label: "彭州市",
            value: "510182"
          }, {
            label: "邛崃市",
            value: "510183"
          }, {
            label: "崇州市",
            value: "510184"
          }, {
            label: "简阳市",
            value: "510185"
          }],
          [{
            label: "自流井区",
            value: "510302"
          }, {
            label: "贡井区",
            value: "510303"
          }, {
            label: "大安区",
            value: "510304"
          }, {
            label: "沿滩区",
            value: "510311"
          }, {
            label: "荣县",
            value: "510321"
          }, {
            label: "富顺县",
            value: "510322"
          }],
          [{
            label: "东区",
            value: "510402"
          }, {
            label: "西区",
            value: "510403"
          }, {
            label: "仁和区",
            value: "510411"
          }, {
            label: "米易县",
            value: "510421"
          }, {
            label: "盐边县",
            value: "510422"
          }],
          [{
            label: "江阳区",
            value: "510502"
          }, {
            label: "纳溪区",
            value: "510503"
          }, {
            label: "龙马潭区",
            value: "510504"
          }, {
            label: "泸县",
            value: "510521"
          }, {
            label: "合江县",
            value: "510522"
          }, {
            label: "叙永县",
            value: "510524"
          }, {
            label: "古蔺县",
            value: "510525"
          }],
          [{
            label: "旌阳区",
            value: "510603"
          }, {
            label: "罗江区",
            value: "510604"
          }, {
            label: "中江县",
            value: "510623"
          }, {
            label: "广汉市",
            value: "510681"
          }, {
            label: "什邡市",
            value: "510682"
          }, {
            label: "绵竹市",
            value: "510683"
          }],
          [{
            label: "涪城区",
            value: "510703"
          }, {
            label: "游仙区",
            value: "510704"
          }, {
            label: "安州区",
            value: "510705"
          }, {
            label: "三台县",
            value: "510722"
          }, {
            label: "盐亭县",
            value: "510723"
          }, {
            label: "梓潼县",
            value: "510725"
          }, {
            label: "北川羌族自治县",
            value: "510726"
          }, {
            label: "平武县",
            value: "510727"
          }, {
            label: "江油市",
            value: "510781"
          }],
          [{
            label: "利州区",
            value: "510802"
          }, {
            label: "昭化区",
            value: "510811"
          }, {
            label: "朝天区",
            value: "510812"
          }, {
            label: "旺苍县",
            value: "510821"
          }, {
            label: "青川县",
            value: "510822"
          }, {
            label: "剑阁县",
            value: "510823"
          }, {
            label: "苍溪县",
            value: "510824"
          }],
          [{
            label: "船山区",
            value: "510903"
          }, {
            label: "安居区",
            value: "510904"
          }, {
            label: "蓬溪县",
            value: "510921"
          }, {
            label: "射洪县",
            value: "510922"
          }, {
            label: "大英县",
            value: "510923"
          }],
          [{
            label: "市中区",
            value: "511002"
          }, {
            label: "东兴区",
            value: "511011"
          }, {
            label: "威远县",
            value: "511024"
          }, {
            label: "资中县",
            value: "511025"
          }, {
            label: "内江经济开发区",
            value: "511071"
          }, {
            label: "隆昌市",
            value: "511083"
          }],
          [{
            label: "市中区",
            value: "511102"
          }, {
            label: "沙湾区",
            value: "511111"
          }, {
            label: "五通桥区",
            value: "511112"
          }, {
            label: "金口河区",
            value: "511113"
          }, {
            label: "犍为县",
            value: "511123"
          }, {
            label: "井研县",
            value: "511124"
          }, {
            label: "夹江县",
            value: "511126"
          }, {
            label: "沐川县",
            value: "511129"
          }, {
            label: "峨边彝族自治县",
            value: "511132"
          }, {
            label: "马边彝族自治县",
            value: "511133"
          }, {
            label: "峨眉山市",
            value: "511181"
          }],
          [{
            label: "顺庆区",
            value: "511302"
          }, {
            label: "高坪区",
            value: "511303"
          }, {
            label: "嘉陵区",
            value: "511304"
          }, {
            label: "南部县",
            value: "511321"
          }, {
            label: "营山县",
            value: "511322"
          }, {
            label: "蓬安县",
            value: "511323"
          }, {
            label: "仪陇县",
            value: "511324"
          }, {
            label: "西充县",
            value: "511325"
          }, {
            label: "阆中市",
            value: "511381"
          }],
          [{
            label: "东坡区",
            value: "511402"
          }, {
            label: "彭山区",
            value: "511403"
          }, {
            label: "仁寿县",
            value: "511421"
          }, {
            label: "洪雅县",
            value: "511423"
          }, {
            label: "丹棱县",
            value: "511424"
          }, {
            label: "青神县",
            value: "511425"
          }],
          [{
            label: "翠屏区",
            value: "511502"
          }, {
            label: "南溪区",
            value: "511503"
          }, {
            label: "宜宾县",
            value: "511521"
          }, {
            label: "江安县",
            value: "511523"
          }, {
            label: "长宁县",
            value: "511524"
          }, {
            label: "高县",
            value: "511525"
          }, {
            label: "珙县",
            value: "511526"
          }, {
            label: "筠连县",
            value: "511527"
          }, {
            label: "兴文县",
            value: "511528"
          }, {
            label: "屏山县",
            value: "511529"
          }],
          [{
            label: "广安区",
            value: "511602"
          }, {
            label: "前锋区",
            value: "511603"
          }, {
            label: "岳池县",
            value: "511621"
          }, {
            label: "武胜县",
            value: "511622"
          }, {
            label: "邻水县",
            value: "511623"
          }, {
            label: "华蓥市",
            value: "511681"
          }],
          [{
            label: "通川区",
            value: "511702"
          }, {
            label: "达川区",
            value: "511703"
          }, {
            label: "宣汉县",
            value: "511722"
          }, {
            label: "开江县",
            value: "511723"
          }, {
            label: "大竹县",
            value: "511724"
          }, {
            label: "渠县",
            value: "511725"
          }, {
            label: "达州经济开发区",
            value: "511771"
          }, {
            label: "万源市",
            value: "511781"
          }],
          [{
            label: "雨城区",
            value: "511802"
          }, {
            label: "名山区",
            value: "511803"
          }, {
            label: "荥经县",
            value: "511822"
          }, {
            label: "汉源县",
            value: "511823"
          }, {
            label: "石棉县",
            value: "511824"
          }, {
            label: "天全县",
            value: "511825"
          }, {
            label: "芦山县",
            value: "511826"
          }, {
            label: "宝兴县",
            value: "511827"
          }],
          [{
            label: "巴州区",
            value: "511902"
          }, {
            label: "恩阳区",
            value: "511903"
          }, {
            label: "通江县",
            value: "511921"
          }, {
            label: "南江县",
            value: "511922"
          }, {
            label: "平昌县",
            value: "511923"
          }, {
            label: "巴中经济开发区",
            value: "511971"
          }],
          [{
            label: "雁江区",
            value: "512002"
          }, {
            label: "安岳县",
            value: "512021"
          }, {
            label: "乐至县",
            value: "512022"
          }],
          [{
            label: "马尔康市",
            value: "513201"
          }, {
            label: "汶川县",
            value: "513221"
          }, {
            label: "理县",
            value: "513222"
          }, {
            label: "茂县",
            value: "513223"
          }, {
            label: "松潘县",
            value: "513224"
          }, {
            label: "九寨沟县",
            value: "513225"
          }, {
            label: "金川县",
            value: "513226"
          }, {
            label: "小金县",
            value: "513227"
          }, {
            label: "黑水县",
            value: "513228"
          }, {
            label: "壤塘县",
            value: "513230"
          }, {
            label: "阿坝县",
            value: "513231"
          }, {
            label: "若尔盖县",
            value: "513232"
          }, {
            label: "红原县",
            value: "513233"
          }],
          [{
            label: "康定市",
            value: "513301"
          }, {
            label: "泸定县",
            value: "513322"
          }, {
            label: "丹巴县",
            value: "513323"
          }, {
            label: "九龙县",
            value: "513324"
          }, {
            label: "雅江县",
            value: "513325"
          }, {
            label: "道孚县",
            value: "513326"
          }, {
            label: "炉霍县",
            value: "513327"
          }, {
            label: "甘孜县",
            value: "513328"
          }, {
            label: "新龙县",
            value: "513329"
          }, {
            label: "德格县",
            value: "513330"
          }, {
            label: "白玉县",
            value: "513331"
          }, {
            label: "石渠县",
            value: "513332"
          }, {
            label: "色达县",
            value: "513333"
          }, {
            label: "理塘县",
            value: "513334"
          }, {
            label: "巴塘县",
            value: "513335"
          }, {
            label: "乡城县",
            value: "513336"
          }, {
            label: "稻城县",
            value: "513337"
          }, {
            label: "得荣县",
            value: "513338"
          }],
          [{
            label: "西昌市",
            value: "513401"
          }, {
            label: "木里藏族自治县",
            value: "513422"
          }, {
            label: "盐源县",
            value: "513423"
          }, {
            label: "德昌县",
            value: "513424"
          }, {
            label: "会理县",
            value: "513425"
          }, {
            label: "会东县",
            value: "513426"
          }, {
            label: "宁南县",
            value: "513427"
          }, {
            label: "普格县",
            value: "513428"
          }, {
            label: "布拖县",
            value: "513429"
          }, {
            label: "金阳县",
            value: "513430"
          }, {
            label: "昭觉县",
            value: "513431"
          }, {
            label: "喜德县",
            value: "513432"
          }, {
            label: "冕宁县",
            value: "513433"
          }, {
            label: "越西县",
            value: "513434"
          }, {
            label: "甘洛县",
            value: "513435"
          }, {
            label: "美姑县",
            value: "513436"
          }, {
            label: "雷波县",
            value: "513437"
          }]
        ],
        [
          [{
            label: "南明区",
            value: "520102"
          }, {
            label: "云岩区",
            value: "520103"
          }, {
            label: "花溪区",
            value: "520111"
          }, {
            label: "乌当区",
            value: "520112"
          }, {
            label: "白云区",
            value: "520113"
          }, {
            label: "观山湖区",
            value: "520115"
          }, {
            label: "开阳县",
            value: "520121"
          }, {
            label: "息烽县",
            value: "520122"
          }, {
            label: "修文县",
            value: "520123"
          }, {
            label: "清镇市",
            value: "520181"
          }],
          [{
            label: "钟山区",
            value: "520201"
          }, {
            label: "六枝特区",
            value: "520203"
          }, {
            label: "水城县",
            value: "520221"
          }, {
            label: "盘州市",
            value: "520281"
          }],
          [{
            label: "红花岗区",
            value: "520302"
          }, {
            label: "汇川区",
            value: "520303"
          }, {
            label: "播州区",
            value: "520304"
          }, {
            label: "桐梓县",
            value: "520322"
          }, {
            label: "绥阳县",
            value: "520323"
          }, {
            label: "正安县",
            value: "520324"
          }, {
            label: "道真仡佬族苗族自治县",
            value: "520325"
          }, {
            label: "务川仡佬族苗族自治县",
            value: "520326"
          }, {
            label: "凤冈县",
            value: "520327"
          }, {
            label: "湄潭县",
            value: "520328"
          }, {
            label: "余庆县",
            value: "520329"
          }, {
            label: "习水县",
            value: "520330"
          }, {
            label: "赤水市",
            value: "520381"
          }, {
            label: "仁怀市",
            value: "520382"
          }],
          [{
            label: "西秀区",
            value: "520402"
          }, {
            label: "平坝区",
            value: "520403"
          }, {
            label: "普定县",
            value: "520422"
          }, {
            label: "镇宁布依族苗族自治县",
            value: "520423"
          }, {
            label: "关岭布依族苗族自治县",
            value: "520424"
          }, {
            label: "紫云苗族布依族自治县",
            value: "520425"
          }],
          [{
            label: "七星关区",
            value: "520502"
          }, {
            label: "大方县",
            value: "520521"
          }, {
            label: "黔西县",
            value: "520522"
          }, {
            label: "金沙县",
            value: "520523"
          }, {
            label: "织金县",
            value: "520524"
          }, {
            label: "纳雍县",
            value: "520525"
          }, {
            label: "威宁彝族回族苗族自治县",
            value: "520526"
          }, {
            label: "赫章县",
            value: "520527"
          }],
          [{
            label: "碧江区",
            value: "520602"
          }, {
            label: "万山区",
            value: "520603"
          }, {
            label: "江口县",
            value: "520621"
          }, {
            label: "玉屏侗族自治县",
            value: "520622"
          }, {
            label: "石阡县",
            value: "520623"
          }, {
            label: "思南县",
            value: "520624"
          }, {
            label: "印江土家族苗族自治县",
            value: "520625"
          }, {
            label: "德江县",
            value: "520626"
          }, {
            label: "沿河土家族自治县",
            value: "520627"
          }, {
            label: "松桃苗族自治县",
            value: "520628"
          }],
          [{
            label: "兴义市",
            value: "522301"
          }, {
            label: "兴仁县",
            value: "522322"
          }, {
            label: "普安县",
            value: "522323"
          }, {
            label: "晴隆县",
            value: "522324"
          }, {
            label: "贞丰县",
            value: "522325"
          }, {
            label: "望谟县",
            value: "522326"
          }, {
            label: "册亨县",
            value: "522327"
          }, {
            label: "安龙县",
            value: "522328"
          }],
          [{
            label: "凯里市",
            value: "522601"
          }, {
            label: "黄平县",
            value: "522622"
          }, {
            label: "施秉县",
            value: "522623"
          }, {
            label: "三穗县",
            value: "522624"
          }, {
            label: "镇远县",
            value: "522625"
          }, {
            label: "岑巩县",
            value: "522626"
          }, {
            label: "天柱县",
            value: "522627"
          }, {
            label: "锦屏县",
            value: "522628"
          }, {
            label: "剑河县",
            value: "522629"
          }, {
            label: "台江县",
            value: "522630"
          }, {
            label: "黎平县",
            value: "522631"
          }, {
            label: "榕江县",
            value: "522632"
          }, {
            label: "从江县",
            value: "522633"
          }, {
            label: "雷山县",
            value: "522634"
          }, {
            label: "麻江县",
            value: "522635"
          }, {
            label: "丹寨县",
            value: "522636"
          }],
          [{
            label: "都匀市",
            value: "522701"
          }, {
            label: "福泉市",
            value: "522702"
          }, {
            label: "荔波县",
            value: "522722"
          }, {
            label: "贵定县",
            value: "522723"
          }, {
            label: "瓮安县",
            value: "522725"
          }, {
            label: "独山县",
            value: "522726"
          }, {
            label: "平塘县",
            value: "522727"
          }, {
            label: "罗甸县",
            value: "522728"
          }, {
            label: "长顺县",
            value: "522729"
          }, {
            label: "龙里县",
            value: "522730"
          }, {
            label: "惠水县",
            value: "522731"
          }, {
            label: "三都水族自治县",
            value: "522732"
          }]
        ],
        [
          [{
            label: "五华区",
            value: "530102"
          }, {
            label: "盘龙区",
            value: "530103"
          }, {
            label: "官渡区",
            value: "530111"
          }, {
            label: "西山区",
            value: "530112"
          }, {
            label: "东川区",
            value: "530113"
          }, {
            label: "呈贡区",
            value: "530114"
          }, {
            label: "晋宁区",
            value: "530115"
          }, {
            label: "富民县",
            value: "530124"
          }, {
            label: "宜良县",
            value: "530125"
          }, {
            label: "石林彝族自治县",
            value: "530126"
          }, {
            label: "嵩明县",
            value: "530127"
          }, {
            label: "禄劝彝族苗族自治县",
            value: "530128"
          }, {
            label: "寻甸回族彝族自治县",
            value: "530129"
          }, {
            label: "安宁市",
            value: "530181"
          }],
          [{
            label: "麒麟区",
            value: "530302"
          }, {
            label: "沾益区",
            value: "530303"
          }, {
            label: "马龙县",
            value: "530321"
          }, {
            label: "陆良县",
            value: "530322"
          }, {
            label: "师宗县",
            value: "530323"
          }, {
            label: "罗平县",
            value: "530324"
          }, {
            label: "富源县",
            value: "530325"
          }, {
            label: "会泽县",
            value: "530326"
          }, {
            label: "宣威市",
            value: "530381"
          }],
          [{
            label: "红塔区",
            value: "530402"
          }, {
            label: "江川区",
            value: "530403"
          }, {
            label: "澄江县",
            value: "530422"
          }, {
            label: "通海县",
            value: "530423"
          }, {
            label: "华宁县",
            value: "530424"
          }, {
            label: "易门县",
            value: "530425"
          }, {
            label: "峨山彝族自治县",
            value: "530426"
          }, {
            label: "新平彝族傣族自治县",
            value: "530427"
          }, {
            label: "元江哈尼族彝族傣族自治县",
            value: "530428"
          }],
          [{
            label: "隆阳区",
            value: "530502"
          }, {
            label: "施甸县",
            value: "530521"
          }, {
            label: "龙陵县",
            value: "530523"
          }, {
            label: "昌宁县",
            value: "530524"
          }, {
            label: "腾冲市",
            value: "530581"
          }],
          [{
            label: "昭阳区",
            value: "530602"
          }, {
            label: "鲁甸县",
            value: "530621"
          }, {
            label: "巧家县",
            value: "530622"
          }, {
            label: "盐津县",
            value: "530623"
          }, {
            label: "大关县",
            value: "530624"
          }, {
            label: "永善县",
            value: "530625"
          }, {
            label: "绥江县",
            value: "530626"
          }, {
            label: "镇雄县",
            value: "530627"
          }, {
            label: "彝良县",
            value: "530628"
          }, {
            label: "威信县",
            value: "530629"
          }, {
            label: "水富县",
            value: "530630"
          }],
          [{
            label: "古城区",
            value: "530702"
          }, {
            label: "玉龙纳西族自治县",
            value: "530721"
          }, {
            label: "永胜县",
            value: "530722"
          }, {
            label: "华坪县",
            value: "530723"
          }, {
            label: "宁蒗彝族自治县",
            value: "530724"
          }],
          [{
            label: "思茅区",
            value: "530802"
          }, {
            label: "宁洱哈尼族彝族自治县",
            value: "530821"
          }, {
            label: "墨江哈尼族自治县",
            value: "530822"
          }, {
            label: "景东彝族自治县",
            value: "530823"
          }, {
            label: "景谷傣族彝族自治县",
            value: "530824"
          }, {
            label: "镇沅彝族哈尼族拉祜族自治县",
            value: "530825"
          }, {
            label: "江城哈尼族彝族自治县",
            value: "530826"
          }, {
            label: "孟连傣族拉祜族佤族自治县",
            value: "530827"
          }, {
            label: "澜沧拉祜族自治县",
            value: "530828"
          }, {
            label: "西盟佤族自治县",
            value: "530829"
          }],
          [{
            label: "临翔区",
            value: "530902"
          }, {
            label: "凤庆县",
            value: "530921"
          }, {
            label: "云县",
            value: "530922"
          }, {
            label: "永德县",
            value: "530923"
          }, {
            label: "镇康县",
            value: "530924"
          }, {
            label: "双江拉祜族佤族布朗族傣族自治县",
            value: "530925"
          }, {
            label: "耿马傣族佤族自治县",
            value: "530926"
          }, {
            label: "沧源佤族自治县",
            value: "530927"
          }],
          [{
            label: "楚雄市",
            value: "532301"
          }, {
            label: "双柏县",
            value: "532322"
          }, {
            label: "牟定县",
            value: "532323"
          }, {
            label: "南华县",
            value: "532324"
          }, {
            label: "姚安县",
            value: "532325"
          }, {
            label: "大姚县",
            value: "532326"
          }, {
            label: "永仁县",
            value: "532327"
          }, {
            label: "元谋县",
            value: "532328"
          }, {
            label: "武定县",
            value: "532329"
          }, {
            label: "禄丰县",
            value: "532331"
          }],
          [{
            label: "个旧市",
            value: "532501"
          }, {
            label: "开远市",
            value: "532502"
          }, {
            label: "蒙自市",
            value: "532503"
          }, {
            label: "弥勒市",
            value: "532504"
          }, {
            label: "屏边苗族自治县",
            value: "532523"
          }, {
            label: "建水县",
            value: "532524"
          }, {
            label: "石屏县",
            value: "532525"
          }, {
            label: "泸西县",
            value: "532527"
          }, {
            label: "元阳县",
            value: "532528"
          }, {
            label: "红河县",
            value: "532529"
          }, {
            label: "金平苗族瑶族傣族自治县",
            value: "532530"
          }, {
            label: "绿春县",
            value: "532531"
          }, {
            label: "河口瑶族自治县",
            value: "532532"
          }],
          [{
            label: "文山市",
            value: "532601"
          }, {
            label: "砚山县",
            value: "532622"
          }, {
            label: "西畴县",
            value: "532623"
          }, {
            label: "麻栗坡县",
            value: "532624"
          }, {
            label: "马关县",
            value: "532625"
          }, {
            label: "丘北县",
            value: "532626"
          }, {
            label: "广南县",
            value: "532627"
          }, {
            label: "富宁县",
            value: "532628"
          }],
          [{
            label: "景洪市",
            value: "532801"
          }, {
            label: "勐海县",
            value: "532822"
          }, {
            label: "勐腊县",
            value: "532823"
          }],
          [{
            label: "大理市",
            value: "532901"
          }, {
            label: "漾濞彝族自治县",
            value: "532922"
          }, {
            label: "祥云县",
            value: "532923"
          }, {
            label: "宾川县",
            value: "532924"
          }, {
            label: "弥渡县",
            value: "532925"
          }, {
            label: "南涧彝族自治县",
            value: "532926"
          }, {
            label: "巍山彝族回族自治县",
            value: "532927"
          }, {
            label: "永平县",
            value: "532928"
          }, {
            label: "云龙县",
            value: "532929"
          }, {
            label: "洱源县",
            value: "532930"
          }, {
            label: "剑川县",
            value: "532931"
          }, {
            label: "鹤庆县",
            value: "532932"
          }],
          [{
            label: "瑞丽市",
            value: "533102"
          }, {
            label: "芒市",
            value: "533103"
          }, {
            label: "梁河县",
            value: "533122"
          }, {
            label: "盈江县",
            value: "533123"
          }, {
            label: "陇川县",
            value: "533124"
          }],
          [{
            label: "泸水市",
            value: "533301"
          }, {
            label: "福贡县",
            value: "533323"
          }, {
            label: "贡山独龙族怒族自治县",
            value: "533324"
          }, {
            label: "兰坪白族普米族自治县",
            value: "533325"
          }],
          [{
            label: "香格里拉市",
            value: "533401"
          }, {
            label: "德钦县",
            value: "533422"
          }, {
            label: "维西傈僳族自治县",
            value: "533423"
          }]
        ],
        [
          [{
            label: "城关区",
            value: "540102"
          }, {
            label: "堆龙德庆区",
            value: "540103"
          }, {
            label: "林周县",
            value: "540121"
          }, {
            label: "当雄县",
            value: "540122"
          }, {
            label: "尼木县",
            value: "540123"
          }, {
            label: "曲水县",
            value: "540124"
          }, {
            label: "达孜县",
            value: "540126"
          }, {
            label: "墨竹工卡县",
            value: "540127"
          }, {
            label: "格尔木藏青工业园区",
            value: "540171"
          }, {
            label: "拉萨经济技术开发区",
            value: "540172"
          }, {
            label: "西藏文化旅游创意园区",
            value: "540173"
          }, {
            label: "达孜工业园区",
            value: "540174"
          }],
          [{
            label: "桑珠孜区",
            value: "540202"
          }, {
            label: "南木林县",
            value: "540221"
          }, {
            label: "江孜县",
            value: "540222"
          }, {
            label: "定日县",
            value: "540223"
          }, {
            label: "萨迦县",
            value: "540224"
          }, {
            label: "拉孜县",
            value: "540225"
          }, {
            label: "昂仁县",
            value: "540226"
          }, {
            label: "谢通门县",
            value: "540227"
          }, {
            label: "白朗县",
            value: "540228"
          }, {
            label: "仁布县",
            value: "540229"
          }, {
            label: "康马县",
            value: "540230"
          }, {
            label: "定结县",
            value: "540231"
          }, {
            label: "仲巴县",
            value: "540232"
          }, {
            label: "亚东县",
            value: "540233"
          }, {
            label: "吉隆县",
            value: "540234"
          }, {
            label: "聂拉木县",
            value: "540235"
          }, {
            label: "萨嘎县",
            value: "540236"
          }, {
            label: "岗巴县",
            value: "540237"
          }],
          [{
            label: "卡若区",
            value: "540302"
          }, {
            label: "江达县",
            value: "540321"
          }, {
            label: "贡觉县",
            value: "540322"
          }, {
            label: "类乌齐县",
            value: "540323"
          }, {
            label: "丁青县",
            value: "540324"
          }, {
            label: "察雅县",
            value: "540325"
          }, {
            label: "八宿县",
            value: "540326"
          }, {
            label: "左贡县",
            value: "540327"
          }, {
            label: "芒康县",
            value: "540328"
          }, {
            label: "洛隆县",
            value: "540329"
          }, {
            label: "边坝县",
            value: "540330"
          }],
          [{
            label: "巴宜区",
            value: "540402"
          }, {
            label: "工布江达县",
            value: "540421"
          }, {
            label: "米林县",
            value: "540422"
          }, {
            label: "墨脱县",
            value: "540423"
          }, {
            label: "波密县",
            value: "540424"
          }, {
            label: "察隅县",
            value: "540425"
          }, {
            label: "朗县",
            value: "540426"
          }],
          [{
            label: "乃东区",
            value: "540502"
          }, {
            label: "扎囊县",
            value: "540521"
          }, {
            label: "贡嘎县",
            value: "540522"
          }, {
            label: "桑日县",
            value: "540523"
          }, {
            label: "琼结县",
            value: "540524"
          }, {
            label: "曲松县",
            value: "540525"
          }, {
            label: "措美县",
            value: "540526"
          }, {
            label: "洛扎县",
            value: "540527"
          }, {
            label: "加查县",
            value: "540528"
          }, {
            label: "隆子县",
            value: "540529"
          }, {
            label: "错那县",
            value: "540530"
          }, {
            label: "浪卡子县",
            value: "540531"
          }],
          [{
            label: "那曲县",
            value: "542421"
          }, {
            label: "嘉黎县",
            value: "542422"
          }, {
            label: "比如县",
            value: "542423"
          }, {
            label: "聂荣县",
            value: "542424"
          }, {
            label: "安多县",
            value: "542425"
          }, {
            label: "申扎县",
            value: "542426"
          }, {
            label: "索县",
            value: "542427"
          }, {
            label: "班戈县",
            value: "542428"
          }, {
            label: "巴青县",
            value: "542429"
          }, {
            label: "尼玛县",
            value: "542430"
          }, {
            label: "双湖县",
            value: "542431"
          }],
          [{
            label: "普兰县",
            value: "542521"
          }, {
            label: "札达县",
            value: "542522"
          }, {
            label: "噶尔县",
            value: "542523"
          }, {
            label: "日土县",
            value: "542524"
          }, {
            label: "革吉县",
            value: "542525"
          }, {
            label: "改则县",
            value: "542526"
          }, {
            label: "措勤县",
            value: "542527"
          }]
        ],
        [
          [{
            label: "新城区",
            value: "610102"
          }, {
            label: "碑林区",
            value: "610103"
          }, {
            label: "莲湖区",
            value: "610104"
          }, {
            label: "灞桥区",
            value: "610111"
          }, {
            label: "未央区",
            value: "610112"
          }, {
            label: "雁塔区",
            value: "610113"
          }, {
            label: "阎良区",
            value: "610114"
          }, {
            label: "临潼区",
            value: "610115"
          }, {
            label: "长安区",
            value: "610116"
          }, {
            label: "高陵区",
            value: "610117"
          }, {
            label: "鄠邑区",
            value: "610118"
          }, {
            label: "蓝田县",
            value: "610122"
          }, {
            label: "周至县",
            value: "610124"
          }],
          [{
            label: "王益区",
            value: "610202"
          }, {
            label: "印台区",
            value: "610203"
          }, {
            label: "耀州区",
            value: "610204"
          }, {
            label: "宜君县",
            value: "610222"
          }],
          [{
            label: "渭滨区",
            value: "610302"
          }, {
            label: "金台区",
            value: "610303"
          }, {
            label: "陈仓区",
            value: "610304"
          }, {
            label: "凤翔县",
            value: "610322"
          }, {
            label: "岐山县",
            value: "610323"
          }, {
            label: "扶风县",
            value: "610324"
          }, {
            label: "眉县",
            value: "610326"
          }, {
            label: "陇县",
            value: "610327"
          }, {
            label: "千阳县",
            value: "610328"
          }, {
            label: "麟游县",
            value: "610329"
          }, {
            label: "凤县",
            value: "610330"
          }, {
            label: "太白县",
            value: "610331"
          }],
          [{
            label: "秦都区",
            value: "610402"
          }, {
            label: "杨陵区",
            value: "610403"
          }, {
            label: "渭城区",
            value: "610404"
          }, {
            label: "三原县",
            value: "610422"
          }, {
            label: "泾阳县",
            value: "610423"
          }, {
            label: "乾县",
            value: "610424"
          }, {
            label: "礼泉县",
            value: "610425"
          }, {
            label: "永寿县",
            value: "610426"
          }, {
            label: "彬县",
            value: "610427"
          }, {
            label: "长武县",
            value: "610428"
          }, {
            label: "旬邑县",
            value: "610429"
          }, {
            label: "淳化县",
            value: "610430"
          }, {
            label: "武功县",
            value: "610431"
          }, {
            label: "兴平市",
            value: "610481"
          }],
          [{
            label: "临渭区",
            value: "610502"
          }, {
            label: "华州区",
            value: "610503"
          }, {
            label: "潼关县",
            value: "610522"
          }, {
            label: "大荔县",
            value: "610523"
          }, {
            label: "合阳县",
            value: "610524"
          }, {
            label: "澄城县",
            value: "610525"
          }, {
            label: "蒲城县",
            value: "610526"
          }, {
            label: "白水县",
            value: "610527"
          }, {
            label: "富平县",
            value: "610528"
          }, {
            label: "韩城市",
            value: "610581"
          }, {
            label: "华阴市",
            value: "610582"
          }],
          [{
            label: "宝塔区",
            value: "610602"
          }, {
            label: "安塞区",
            value: "610603"
          }, {
            label: "延长县",
            value: "610621"
          }, {
            label: "延川县",
            value: "610622"
          }, {
            label: "子长县",
            value: "610623"
          }, {
            label: "志丹县",
            value: "610625"
          }, {
            label: "吴起县",
            value: "610626"
          }, {
            label: "甘泉县",
            value: "610627"
          }, {
            label: "富县",
            value: "610628"
          }, {
            label: "洛川县",
            value: "610629"
          }, {
            label: "宜川县",
            value: "610630"
          }, {
            label: "黄龙县",
            value: "610631"
          }, {
            label: "黄陵县",
            value: "610632"
          }],
          [{
            label: "汉台区",
            value: "610702"
          }, {
            label: "南郑区",
            value: "610703"
          }, {
            label: "城固县",
            value: "610722"
          }, {
            label: "洋县",
            value: "610723"
          }, {
            label: "西乡县",
            value: "610724"
          }, {
            label: "勉县",
            value: "610725"
          }, {
            label: "宁强县",
            value: "610726"
          }, {
            label: "略阳县",
            value: "610727"
          }, {
            label: "镇巴县",
            value: "610728"
          }, {
            label: "留坝县",
            value: "610729"
          }, {
            label: "佛坪县",
            value: "610730"
          }],
          [{
            label: "榆阳区",
            value: "610802"
          }, {
            label: "横山区",
            value: "610803"
          }, {
            label: "府谷县",
            value: "610822"
          }, {
            label: "靖边县",
            value: "610824"
          }, {
            label: "定边县",
            value: "610825"
          }, {
            label: "绥德县",
            value: "610826"
          }, {
            label: "米脂县",
            value: "610827"
          }, {
            label: "佳县",
            value: "610828"
          }, {
            label: "吴堡县",
            value: "610829"
          }, {
            label: "清涧县",
            value: "610830"
          }, {
            label: "子洲县",
            value: "610831"
          }, {
            label: "神木市",
            value: "610881"
          }],
          [{
            label: "汉滨区",
            value: "610902"
          }, {
            label: "汉阴县",
            value: "610921"
          }, {
            label: "石泉县",
            value: "610922"
          }, {
            label: "宁陕县",
            value: "610923"
          }, {
            label: "紫阳县",
            value: "610924"
          }, {
            label: "岚皋县",
            value: "610925"
          }, {
            label: "平利县",
            value: "610926"
          }, {
            label: "镇坪县",
            value: "610927"
          }, {
            label: "旬阳县",
            value: "610928"
          }, {
            label: "白河县",
            value: "610929"
          }],
          [{
            label: "商州区",
            value: "611002"
          }, {
            label: "洛南县",
            value: "611021"
          }, {
            label: "丹凤县",
            value: "611022"
          }, {
            label: "商南县",
            value: "611023"
          }, {
            label: "山阳县",
            value: "611024"
          }, {
            label: "镇安县",
            value: "611025"
          }, {
            label: "柞水县",
            value: "611026"
          }]
        ],
        [
          [{
            label: "城关区",
            value: "620102"
          }, {
            label: "七里河区",
            value: "620103"
          }, {
            label: "西固区",
            value: "620104"
          }, {
            label: "安宁区",
            value: "620105"
          }, {
            label: "红古区",
            value: "620111"
          }, {
            label: "永登县",
            value: "620121"
          }, {
            label: "皋兰县",
            value: "620122"
          }, {
            label: "榆中县",
            value: "620123"
          }, {
            label: "兰州新区",
            value: "620171"
          }],
          [{
            label: "嘉峪关市",
            value: "620201"
          }],
          [{
            label: "金川区",
            value: "620302"
          }, {
            label: "永昌县",
            value: "620321"
          }],
          [{
            label: "白银区",
            value: "620402"
          }, {
            label: "平川区",
            value: "620403"
          }, {
            label: "靖远县",
            value: "620421"
          }, {
            label: "会宁县",
            value: "620422"
          }, {
            label: "景泰县",
            value: "620423"
          }],
          [{
            label: "秦州区",
            value: "620502"
          }, {
            label: "麦积区",
            value: "620503"
          }, {
            label: "清水县",
            value: "620521"
          }, {
            label: "秦安县",
            value: "620522"
          }, {
            label: "甘谷县",
            value: "620523"
          }, {
            label: "武山县",
            value: "620524"
          }, {
            label: "张家川回族自治县",
            value: "620525"
          }],
          [{
            label: "凉州区",
            value: "620602"
          }, {
            label: "民勤县",
            value: "620621"
          }, {
            label: "古浪县",
            value: "620622"
          }, {
            label: "天祝藏族自治县",
            value: "620623"
          }],
          [{
            label: "甘州区",
            value: "620702"
          }, {
            label: "肃南裕固族自治县",
            value: "620721"
          }, {
            label: "民乐县",
            value: "620722"
          }, {
            label: "临泽县",
            value: "620723"
          }, {
            label: "高台县",
            value: "620724"
          }, {
            label: "山丹县",
            value: "620725"
          }],
          [{
            label: "崆峒区",
            value: "620802"
          }, {
            label: "泾川县",
            value: "620821"
          }, {
            label: "灵台县",
            value: "620822"
          }, {
            label: "崇信县",
            value: "620823"
          }, {
            label: "华亭县",
            value: "620824"
          }, {
            label: "庄浪县",
            value: "620825"
          }, {
            label: "静宁县",
            value: "620826"
          }, {
            label: "平凉工业园区",
            value: "620871"
          }],
          [{
            label: "肃州区",
            value: "620902"
          }, {
            label: "金塔县",
            value: "620921"
          }, {
            label: "瓜州县",
            value: "620922"
          }, {
            label: "肃北蒙古族自治县",
            value: "620923"
          }, {
            label: "阿克塞哈萨克族自治县",
            value: "620924"
          }, {
            label: "玉门市",
            value: "620981"
          }, {
            label: "敦煌市",
            value: "620982"
          }],
          [{
            label: "西峰区",
            value: "621002"
          }, {
            label: "庆城县",
            value: "621021"
          }, {
            label: "环县",
            value: "621022"
          }, {
            label: "华池县",
            value: "621023"
          }, {
            label: "合水县",
            value: "621024"
          }, {
            label: "正宁县",
            value: "621025"
          }, {
            label: "宁县",
            value: "621026"
          }, {
            label: "镇原县",
            value: "621027"
          }],
          [{
            label: "安定区",
            value: "621102"
          }, {
            label: "通渭县",
            value: "621121"
          }, {
            label: "陇西县",
            value: "621122"
          }, {
            label: "渭源县",
            value: "621123"
          }, {
            label: "临洮县",
            value: "621124"
          }, {
            label: "漳县",
            value: "621125"
          }, {
            label: "岷县",
            value: "621126"
          }],
          [{
            label: "武都区",
            value: "621202"
          }, {
            label: "成县",
            value: "621221"
          }, {
            label: "文县",
            value: "621222"
          }, {
            label: "宕昌县",
            value: "621223"
          }, {
            label: "康县",
            value: "621224"
          }, {
            label: "西和县",
            value: "621225"
          }, {
            label: "礼县",
            value: "621226"
          }, {
            label: "徽县",
            value: "621227"
          }, {
            label: "两当县",
            value: "621228"
          }],
          [{
            label: "临夏市",
            value: "622901"
          }, {
            label: "临夏县",
            value: "622921"
          }, {
            label: "康乐县",
            value: "622922"
          }, {
            label: "永靖县",
            value: "622923"
          }, {
            label: "广河县",
            value: "622924"
          }, {
            label: "和政县",
            value: "622925"
          }, {
            label: "东乡族自治县",
            value: "622926"
          }, {
            label: "积石山保安族东乡族撒拉族自治县",
            value: "622927"
          }],
          [{
            label: "合作市",
            value: "623001"
          }, {
            label: "临潭县",
            value: "623021"
          }, {
            label: "卓尼县",
            value: "623022"
          }, {
            label: "舟曲县",
            value: "623023"
          }, {
            label: "迭部县",
            value: "623024"
          }, {
            label: "玛曲县",
            value: "623025"
          }, {
            label: "碌曲县",
            value: "623026"
          }, {
            label: "夏河县",
            value: "623027"
          }]
        ],
        [
          [{
            label: "城东区",
            value: "630102"
          }, {
            label: "城中区",
            value: "630103"
          }, {
            label: "城西区",
            value: "630104"
          }, {
            label: "城北区",
            value: "630105"
          }, {
            label: "大通回族土族自治县",
            value: "630121"
          }, {
            label: "湟中县",
            value: "630122"
          }, {
            label: "湟源县",
            value: "630123"
          }],
          [{
            label: "乐都区",
            value: "630202"
          }, {
            label: "平安区",
            value: "630203"
          }, {
            label: "民和回族土族自治县",
            value: "630222"
          }, {
            label: "互助土族自治县",
            value: "630223"
          }, {
            label: "化隆回族自治县",
            value: "630224"
          }, {
            label: "循化撒拉族自治县",
            value: "630225"
          }],
          [{
            label: "门源回族自治县",
            value: "632221"
          }, {
            label: "祁连县",
            value: "632222"
          }, {
            label: "海晏县",
            value: "632223"
          }, {
            label: "刚察县",
            value: "632224"
          }],
          [{
            label: "同仁县",
            value: "632321"
          }, {
            label: "尖扎县",
            value: "632322"
          }, {
            label: "泽库县",
            value: "632323"
          }, {
            label: "河南蒙古族自治县",
            value: "632324"
          }],
          [{
            label: "共和县",
            value: "632521"
          }, {
            label: "同德县",
            value: "632522"
          }, {
            label: "贵德县",
            value: "632523"
          }, {
            label: "兴海县",
            value: "632524"
          }, {
            label: "贵南县",
            value: "632525"
          }],
          [{
            label: "玛沁县",
            value: "632621"
          }, {
            label: "班玛县",
            value: "632622"
          }, {
            label: "甘德县",
            value: "632623"
          }, {
            label: "达日县",
            value: "632624"
          }, {
            label: "久治县",
            value: "632625"
          }, {
            label: "玛多县",
            value: "632626"
          }],
          [{
            label: "玉树市",
            value: "632701"
          }, {
            label: "杂多县",
            value: "632722"
          }, {
            label: "称多县",
            value: "632723"
          }, {
            label: "治多县",
            value: "632724"
          }, {
            label: "囊谦县",
            value: "632725"
          }, {
            label: "曲麻莱县",
            value: "632726"
          }],
          [{
            label: "格尔木市",
            value: "632801"
          }, {
            label: "德令哈市",
            value: "632802"
          }, {
            label: "乌兰县",
            value: "632821"
          }, {
            label: "都兰县",
            value: "632822"
          }, {
            label: "天峻县",
            value: "632823"
          }, {
            label: "大柴旦行政委员会",
            value: "632857"
          }, {
            label: "冷湖行政委员会",
            value: "632858"
          }, {
            label: "茫崖行政委员会",
            value: "632859"
          }]
        ],
        [
          [{
            label: "兴庆区",
            value: "640104"
          }, {
            label: "西夏区",
            value: "640105"
          }, {
            label: "金凤区",
            value: "640106"
          }, {
            label: "永宁县",
            value: "640121"
          }, {
            label: "贺兰县",
            value: "640122"
          }, {
            label: "灵武市",
            value: "640181"
          }],
          [{
            label: "大武口区",
            value: "640202"
          }, {
            label: "惠农区",
            value: "640205"
          }, {
            label: "平罗县",
            value: "640221"
          }],
          [{
            label: "利通区",
            value: "640302"
          }, {
            label: "红寺堡区",
            value: "640303"
          }, {
            label: "盐池县",
            value: "640323"
          }, {
            label: "同心县",
            value: "640324"
          }, {
            label: "青铜峡市",
            value: "640381"
          }],
          [{
            label: "原州区",
            value: "640402"
          }, {
            label: "西吉县",
            value: "640422"
          }, {
            label: "隆德县",
            value: "640423"
          }, {
            label: "泾源县",
            value: "640424"
          }, {
            label: "彭阳县",
            value: "640425"
          }],
          [{
            label: "沙坡头区",
            value: "640502"
          }, {
            label: "中宁县",
            value: "640521"
          }, {
            label: "海原县",
            value: "640522"
          }]
        ],
        [
          [{
            label: "天山区",
            value: "650102"
          }, {
            label: "沙依巴克区",
            value: "650103"
          }, {
            label: "新市区",
            value: "650104"
          }, {
            label: "水磨沟区",
            value: "650105"
          }, {
            label: "头屯河区",
            value: "650106"
          }, {
            label: "达坂城区",
            value: "650107"
          }, {
            label: "米东区",
            value: "650109"
          }, {
            label: "乌鲁木齐县",
            value: "650121"
          }, {
            label: "乌鲁木齐经济技术开发区",
            value: "650171"
          }, {
            label: "乌鲁木齐高新技术产业开发区",
            value: "650172"
          }],
          [{
            label: "独山子区",
            value: "650202"
          }, {
            label: "克拉玛依区",
            value: "650203"
          }, {
            label: "白碱滩区",
            value: "650204"
          }, {
            label: "乌尔禾区",
            value: "650205"
          }],
          [{
            label: "高昌区",
            value: "650402"
          }, {
            label: "鄯善县",
            value: "650421"
          }, {
            label: "托克逊县",
            value: "650422"
          }],
          [{
            label: "伊州区",
            value: "650502"
          }, {
            label: "巴里坤哈萨克自治县",
            value: "650521"
          }, {
            label: "伊吾县",
            value: "650522"
          }],
          [{
            label: "昌吉市",
            value: "652301"
          }, {
            label: "阜康市",
            value: "652302"
          }, {
            label: "呼图壁县",
            value: "652323"
          }, {
            label: "玛纳斯县",
            value: "652324"
          }, {
            label: "奇台县",
            value: "652325"
          }, {
            label: "吉木萨尔县",
            value: "652327"
          }, {
            label: "木垒哈萨克自治县",
            value: "652328"
          }],
          [{
            label: "博乐市",
            value: "652701"
          }, {
            label: "阿拉山口市",
            value: "652702"
          }, {
            label: "精河县",
            value: "652722"
          }, {
            label: "温泉县",
            value: "652723"
          }],
          [{
            label: "库尔勒市",
            value: "652801"
          }, {
            label: "轮台县",
            value: "652822"
          }, {
            label: "尉犁县",
            value: "652823"
          }, {
            label: "若羌县",
            value: "652824"
          }, {
            label: "且末县",
            value: "652825"
          }, {
            label: "焉耆回族自治县",
            value: "652826"
          }, {
            label: "和静县",
            value: "652827"
          }, {
            label: "和硕县",
            value: "652828"
          }, {
            label: "博湖县",
            value: "652829"
          }, {
            label: "库尔勒经济技术开发区",
            value: "652871"
          }],
          [{
            label: "阿克苏市",
            value: "652901"
          }, {
            label: "温宿县",
            value: "652922"
          }, {
            label: "库车县",
            value: "652923"
          }, {
            label: "沙雅县",
            value: "652924"
          }, {
            label: "新和县",
            value: "652925"
          }, {
            label: "拜城县",
            value: "652926"
          }, {
            label: "乌什县",
            value: "652927"
          }, {
            label: "阿瓦提县",
            value: "652928"
          }, {
            label: "柯坪县",
            value: "652929"
          }],
          [{
            label: "阿图什市",
            value: "653001"
          }, {
            label: "阿克陶县",
            value: "653022"
          }, {
            label: "阿合奇县",
            value: "653023"
          }, {
            label: "乌恰县",
            value: "653024"
          }],
          [{
            label: "喀什市",
            value: "653101"
          }, {
            label: "疏附县",
            value: "653121"
          }, {
            label: "疏勒县",
            value: "653122"
          }, {
            label: "英吉沙县",
            value: "653123"
          }, {
            label: "泽普县",
            value: "653124"
          }, {
            label: "莎车县",
            value: "653125"
          }, {
            label: "叶城县",
            value: "653126"
          }, {
            label: "麦盖提县",
            value: "653127"
          }, {
            label: "岳普湖县",
            value: "653128"
          }, {
            label: "伽师县",
            value: "653129"
          }, {
            label: "巴楚县",
            value: "653130"
          }, {
            label: "塔什库尔干塔吉克自治县",
            value: "653131"
          }],
          [{
            label: "和田市",
            value: "653201"
          }, {
            label: "和田县",
            value: "653221"
          }, {
            label: "墨玉县",
            value: "653222"
          }, {
            label: "皮山县",
            value: "653223"
          }, {
            label: "洛浦县",
            value: "653224"
          }, {
            label: "策勒县",
            value: "653225"
          }, {
            label: "于田县",
            value: "653226"
          }, {
            label: "民丰县",
            value: "653227"
          }],
          [{
            label: "伊宁市",
            value: "654002"
          }, {
            label: "奎屯市",
            value: "654003"
          }, {
            label: "霍尔果斯市",
            value: "654004"
          }, {
            label: "伊宁县",
            value: "654021"
          }, {
            label: "察布查尔锡伯自治县",
            value: "654022"
          }, {
            label: "霍城县",
            value: "654023"
          }, {
            label: "巩留县",
            value: "654024"
          }, {
            label: "新源县",
            value: "654025"
          }, {
            label: "昭苏县",
            value: "654026"
          }, {
            label: "特克斯县",
            value: "654027"
          }, {
            label: "尼勒克县",
            value: "654028"
          }],
          [{
            label: "塔城市",
            value: "654201"
          }, {
            label: "乌苏市",
            value: "654202"
          }, {
            label: "额敏县",
            value: "654221"
          }, {
            label: "沙湾县",
            value: "654223"
          }, {
            label: "托里县",
            value: "654224"
          }, {
            label: "裕民县",
            value: "654225"
          }, {
            label: "和布克赛尔蒙古自治县",
            value: "654226"
          }],
          [{
            label: "阿勒泰市",
            value: "654301"
          }, {
            label: "布尔津县",
            value: "654321"
          }, {
            label: "富蕴县",
            value: "654322"
          }, {
            label: "福海县",
            value: "654323"
          }, {
            label: "哈巴河县",
            value: "654324"
          }, {
            label: "青河县",
            value: "654325"
          }, {
            label: "吉木乃县",
            value: "654326"
          }],
          [{
            label: "石河子市",
            value: "659001"
          }, {
            label: "阿拉尔市",
            value: "659002"
          }, {
            label: "图木舒克市",
            value: "659003"
          }, {
            label: "五家渠市",
            value: "659004"
          }, {
            label: "铁门关市",
            value: "659006"
          }]
        ],
        [
          [{
            label: "台北",
            value: "660101"
          }],
          [{
            label: "高雄",
            value: "660201"
          }],
          [{
            label: "基隆",
            value: "660301"
          }],
          [{
            label: "台中",
            value: "660401"
          }],
          [{
            label: "台南",
            value: "660501"
          }],
          [{
            label: "新竹",
            value: "660601"
          }],
          [{
            label: "嘉义",
            value: "660701"
          }],
          [{
            label: "宜兰",
            value: "660801"
          }],
          [{
            label: "桃园",
            value: "660901"
          }],
          [{
            label: "苗栗",
            value: "661001"
          }],
          [{
            label: "彰化",
            value: "661101"
          }],
          [{
            label: "南投",
            value: "661201"
          }],
          [{
            label: "云林",
            value: "661301"
          }],
          [{
            label: "屏东",
            value: "661401"
          }],
          [{
            label: "台东",
            value: "661501"
          }],
          [{
            label: "花莲",
            value: "661601"
          }],
          [{
            label: "澎湖",
            value: "661701"
          }]
        ],
        [
          [{
            label: "香港岛",
            value: "670101"
          }],
          [{
            label: "九龙",
            value: "670201"
          }],
          [{
            label: "新界",
            value: "670301"
          }]
        ],
        [
          [{
            label: "澳门半岛",
            value: "680101"
          }],
          [{
            label: "氹仔岛",
            value: "680201"
          }],
          [{
            label: "路环岛",
            value: "680301"
          }],
          [{
            label: "路氹城",
            value: "680401"
          }]
        ]
      ]
    },
    e069: function(e, t, a) {
      var l = a("47a9");
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.pinyin_dict_notone = t.pinyinUtil = void 0;
      var n, r = l(a("3b2d")),
        i = l(a("7ca3")),
        o = {},
        u = {
          all: "YDYQSXMWZSSXJBYMGCCZQPSSQBYCDSCDQLDYLYBSSJGYZZJJFKCCLZDHWDWZJLJPFYYNWJJTMYHZWZHFLZPPQHGSCYYYNJQYXXGJHHSDSJNKKTMOMLCRXYPSNQSECCQZGGLLYJLMYZZSECYKYYHQWJSSGGYXYZYJWWKDJHYCHMYXJTLXJYQBYXZLDWRDJRWYSRLDZJPCBZJJBRCFTLECZSTZFXXZHTRQHYBDLYCZSSYMMRFMYQZPWWJJYFCRWFDFZQPYDDWYXKYJAWJFFXYPSFTZYHHYZYSWCJYXSCLCXXWZZXNBGNNXBXLZSZSBSGPYSYZDHMDZBQBZCWDZZYYTZHBTSYYBZGNTNXQYWQSKBPHHLXGYBFMJEBJHHGQTJCYSXSTKZHLYCKGLYSMZXYALMELDCCXGZYRJXSDLTYZCQKCNNJWHJTZZCQLJSTSTBNXBTYXCEQXGKWJYFLZQLYHYXSPSFXLMPBYSXXXYDJCZYLLLSJXFHJXPJBTFFYABYXBHZZBJYZLWLCZGGBTSSMDTJZXPTHYQTGLJSCQFZKJZJQNLZWLSLHDZBWJNCJZYZSQQYCQYRZCJJWYBRTWPYFTWEXCSKDZCTBZHYZZYYJXZCFFZZMJYXXSDZZOTTBZLQWFCKSZSXFYRLNYJMBDTHJXSQQCCSBXYYTSYFBXDZTGBCNSLCYZZPSAZYZZSCJCSHZQYDXLBPJLLMQXTYDZXSQJTZPXLCGLQTZWJBHCTSYJSFXYEJJTLBGXSXJMYJQQPFZASYJNTYDJXKJCDJSZCBARTDCLYJQMWNQNCLLLKBYBZZSYHQQLTWLCCXTXLLZNTYLNEWYZYXCZXXGRKRMTCNDNJTSYYSSDQDGHSDBJGHRWRQLYBGLXHLGTGXBQJDZPYJSJYJCTMRNYMGRZJCZGJMZMGXMPRYXKJNYMSGMZJYMKMFXMLDTGFBHCJHKYLPFMDXLQJJSMTQGZSJLQDLDGJYCALCMZCSDJLLNXDJFFFFJCZFMZFFPFKHKGDPSXKTACJDHHZDDCRRCFQYJKQCCWJDXHWJLYLLZGCFCQDSMLZPBJJPLSBCJGGDCKKDEZSQCCKJGCGKDJTJDLZYCXKLQSCGJCLTFPCQCZGWPJDQYZJJBYJHSJDZWGFSJGZKQCCZLLPSPKJGQJHZZLJPLGJGJJTHJJYJZCZMLZLYQBGJWMLJKXZDZNJQSYZMLJLLJKYWXMKJLHSKJGBMCLYYMKXJQLBMLLKMDXXKWYXYSLMLPSJQQJQXYXFJTJDXMXXLLCXQBSYJBGWYMBGGBCYXPJYGPEPFGDJGBHBNSQJYZJKJKHXQFGQZKFHYGKHDKLLSDJQXPQYKYBNQSXQNSZSWHBSXWHXWBZZXDMNSJBSBKBBZKLYLXGWXDRWYQZMYWSJQLCJXXJXKJEQXSCYETLZHLYYYSDZPAQYZCMTLSHTZCFYZYXYLJSDCJQAGYSLCQLYYYSHMRQQKLDXZSCSSSYDYCJYSFSJBFRSSZQSBXXPXJYSDRCKGJLGDKZJZBDKTCSYQPYHSTCLDJDHMXMCGXYZHJDDTMHLTXZXYLYMOHYJCLTYFBQQXPFBDFHHTKSQHZYYWCNXXCRWHOWGYJLEGWDQCWGFJYCSNTMYTOLBYGWQWESJPWNMLRYDZSZTXYQPZGCWXHNGPYXSHMYQJXZTDPPBFYHZHTJYFDZWKGKZBLDNTSXHQEEGZZYLZMMZYJZGXZXKHKSTXNXXWYLYAPSTHXDWHZYMPXAGKYDXBHNHXKDPJNMYHYLPMGOCSLNZHKXXLPZZLBMLSFBHHGYGYYGGBHSCYAQTYWLXTZQCEZYDQDQMMHTKLLSZHLSJZWFYHQSWSCWLQAZYNYTLSXTHAZNKZZSZZLAXXZWWCTGQQTDDYZTCCHYQZFLXPSLZYGPZSZNGLNDQTBDLXGTCTAJDKYWNSYZLJHHZZCWNYYZYWMHYCHHYXHJKZWSXHZYXLYSKQYSPSLYZWMYPPKBYGLKZHTYXAXQSYSHXASMCHKDSCRSWJPWXSGZJLWWSCHSJHSQNHCSEGNDAQTBAALZZMSSTDQJCJKTSCJAXPLGGXHHGXXZCXPDMMHLDGTYBYSJMXHMRCPXXJZCKZXSHMLQXXTTHXWZFKHCCZDYTCJYXQHLXDHYPJQXYLSYYDZOZJNYXQEZYSQYAYXWYPDGXDDXSPPYZNDLTWRHXYDXZZJHTCXMCZLHPYYYYMHZLLHNXMYLLLMDCPPXHMXDKYCYRDLTXJCHHZZXZLCCLYLNZSHZJZZLNNRLWHYQSNJHXYNTTTKYJPYCHHYEGKCTTWLGQRLGGTGTYGYHPYHYLQYQGCWYQKPYYYTTTTLHYHLLTYTTSPLKYZXGZWGPYDSSZZDQXSKCQNMJJZZBXYQMJRTFFBTKHZKBXLJJKDXJTLBWFZPPTKQTZTGPDGNTPJYFALQMKGXBDCLZFHZCLLLLADPMXDJHLCCLGYHDZFGYDDGCYYFGYDXKSSEBDHYKDKDKHNAXXYBPBYYHXZQGAFFQYJXDMLJCSQZLLPCHBSXGJYNDYBYQSPZWJLZKSDDTACTBXZDYZYPJZQSJNKKTKNJDJGYYPGTLFYQKASDNTCYHBLWDZHBBYDWJRYGKZYHEYYFJMSDTYFZJJHGCXPLXHLDWXXJKYTCYKSSSMTWCTTQZLPBSZDZWZXGZAGYKTYWXLHLSPBCLLOQMMZSSLCMBJCSZZKYDCZJGQQDSMCYTZQQLWZQZXSSFPTTFQMDDZDSHDTDWFHTDYZJYQJQKYPBDJYYXTLJHDRQXXXHAYDHRJLKLYTWHLLRLLRCXYLBWSRSZZSYMKZZHHKYHXKSMDSYDYCJPBZBSQLFCXXXNXKXWYWSDZYQOGGQMMYHCDZTTFJYYBGSTTTYBYKJDHKYXBELHTYPJQNFXFDYKZHQKZBYJTZBXHFDXKDASWTAWAJLDYJSFHBLDNNTNQJTJNCHXFJSRFWHZFMDRYJYJWZPDJKZYJYMPCYZNYNXFBYTFYFWYGDBNZZZDNYTXZEMMQBSQEHXFZMBMFLZZSRXYMJGSXWZJSPRYDJSJGXHJJGLJJYNZZJXHGXKYMLPYYYCXYTWQZSWHWLYRJLPXSLSXMFSWWKLCTNXNYNPSJSZHDZEPTXMYYWXYYSYWLXJQZQXZDCLEEELMCPJPCLWBXSQHFWWTFFJTNQJHJQDXHWLBYZNFJLALKYYJLDXHHYCSTYYWNRJYXYWTRMDRQHWQCMFJDYZMHMYYXJWMYZQZXTLMRSPWWCHAQBXYGZYPXYYRRCLMPYMGKSJSZYSRMYJSNXTPLNBAPPYPYLXYYZKYNLDZYJZCZNNLMZHHARQMPGWQTZMXXMLLHGDZXYHXKYXYCJMFFYYHJFSBSSQLXXNDYCANNMTCJCYPRRNYTYQNYYMBMSXNDLYLYSLJRLXYSXQMLLYZLZJJJKYZZCSFBZXXMSTBJGNXYZHLXNMCWSCYZYFZLXBRNNNYLBNRTGZQYSATSWRYHYJZMZDHZGZDWYBSSCSKXSYHYTXXGCQGXZZSHYXJSCRHMKKBXCZJYJYMKQHZJFNBHMQHYSNJNZYBKNQMCLGQHWLZNZSWXKHLJHYYBQLBFCDSXDLDSPFZPSKJYZWZXZDDXJSMMEGJSCSSMGCLXXKYYYLNYPWWWGYDKZJGGGZGGSYCKNJWNJPCXBJJTQTJWDSSPJXZXNZXUMELPXFSXTLLXCLJXJJLJZXCTPSWXLYDHLYQRWHSYCSQYYBYAYWJJJQFWQCQQCJQGXALDBZZYJGKGXPLTZYFXJLTPADKYQHPMATLCPDCKBMTXYBHKLENXDLEEGQDYMSAWHZMLJTWYGXLYQZLJEEYYBQQFFNLYXRDSCTGJGXYYNKLLYQKCCTLHJLQMKKZGCYYGLLLJDZGYDHZWXPYSJBZKDZGYZZHYWYFQYTYZSZYEZZLYMHJJHTSMQWYZLKYYWZCSRKQYTLTDXWCTYJKLWSQZWBDCQYNCJSRSZJLKCDCDTLZZZACQQZZDDXYPLXZBQJYLZLLLQDDZQJYJYJZYXNYYYNYJXKXDAZWYRDLJYYYRJLXLLDYXJCYWYWNQCCLDDNYYYNYCKCZHXXCCLGZQJGKWPPCQQJYSBZZXYJSQPXJPZBSBDSFNSFPZXHDWZTDWPPTFLZZBZDMYYPQJRSDZSQZSQXBDGCPZSWDWCSQZGMDHZXMWWFYBPDGPHTMJTHZSMMBGZMBZJCFZWFZBBZMQCFMBDMCJXLGPNJBBXGYHYYJGPTZGZMQBQTCGYXJXLWZKYDPDYMGCFTPFXYZTZXDZXTGKMTYBBCLBJASKYTSSQYYMSZXFJEWLXLLSZBQJJJAKLYLXLYCCTSXMCWFKKKBSXLLLLJYXTYLTJYYTDPJHNHNNKBYQNFQYYZBYYESSESSGDYHFHWTCJBSDZZTFDMXHCNJZYMQWSRYJDZJQPDQBBSTJGGFBKJBXTGQHNGWJXJGDLLTHZHHYYYYYYSXWTYYYCCBDBPYPZYCCZYJPZYWCBDLFWZCWJDXXHYHLHWZZXJTCZLCDPXUJCZZZLYXJJTXPHFXWPYWXZPTDZZBDZCYHJHMLXBQXSBYLRDTGJRRCTTTHYTCZWMXFYTWWZCWJWXJYWCSKYBZSCCTZQNHXNWXXKHKFHTSWOCCJYBCMPZZYKBNNZPBZHHZDLSYDDYTYFJPXYNGFXBYQXCBHXCPSXTYZDMKYSNXSXLHKMZXLYHDHKWHXXSSKQYHHCJYXGLHZXCSNHEKDTGZXQYPKDHEXTYKCNYMYYYPKQYYYKXZLTHJQTBYQHXBMYHSQCKWWYLLHCYYLNNEQXQWMCFBDCCMLJGGXDQKTLXKGNQCDGZJWYJJLYHHQTTTNWCHMXCXWHWSZJYDJCCDBQCDGDNYXZTHCQRXCBHZTQCBXWGQWYYBXHMBYMYQTYEXMQKYAQYRGYZSLFYKKQHYSSQYSHJGJCNXKZYCXSBXYXHYYLSTYCXQTHYSMGSCPMMGCCCCCMTZTASMGQZJHKLOSQYLSWTMXSYQKDZLJQQYPLSYCZTCQQPBBQJZCLPKHQZYYXXDTDDTSJCXFFLLCHQXMJLWCJCXTSPYCXNDTJSHJWXDQQJSKXYAMYLSJHMLALYKXCYYDMNMDQMXMCZNNCYBZKKYFLMCHCMLHXRCJJHSYLNMTJZGZGYWJXSRXCWJGJQHQZDQJDCJJZKJKGDZQGJJYJYLXZXXCDQHHHEYTMHLFSBDJSYYSHFYSTCZQLPBDRFRZTZYKYWHSZYQKWDQZRKMSYNBCRXQBJYFAZPZZEDZCJYWBCJWHYJBQSZYWRYSZPTDKZPFPBNZTKLQYHBBZPNPPTYZZYBQNYDCPJMMCYCQMCYFZZDCMNLFPBPLNGQJTBTTNJZPZBBZNJKLJQYLNBZQHKSJZNGGQSZZKYXSHPZSNBCGZKDDZQANZHJKDRTLZLSWJLJZLYWTJNDJZJHXYAYNCBGTZCSSQMNJPJYTYSWXZFKWJQTKHTZPLBHSNJZSYZBWZZZZLSYLSBJHDWWQPSLMMFBJDWAQYZTCJTBNNWZXQXCDSLQGDSDPDZHJTQQPSWLYYJZLGYXYZLCTCBJTKTYCZJTQKBSJLGMGZDMCSGPYNJZYQYYKNXRPWSZXMTNCSZZYXYBYHYZAXYWQCJTLLCKJJTJHGDXDXYQYZZBYWDLWQCGLZGJGQRQZCZSSBCRPCSKYDZNXJSQGXSSJMYDNSTZTPBDLTKZWXQWQTZEXNQCZGWEZKSSBYBRTSSSLCCGBPSZQSZLCCGLLLZXHZQTHCZMQGYZQZNMCOCSZJMMZSQPJYGQLJYJPPLDXRGZYXCCSXHSHGTZNLZWZKJCXTCFCJXLBMQBCZZWPQDNHXLJCTHYZLGYLNLSZZPCXDSCQQHJQKSXZPBAJYEMSMJTZDXLCJYRYYNWJBNGZZTMJXLTBSLYRZPYLSSCNXPHLLHYLLQQZQLXYMRSYCXZLMMCZLTZSDWTJJLLNZGGQXPFSKYGYGHBFZPDKMWGHCXMSGDXJMCJZDYCABXJDLNBCDQYGSKYDQTXDJJYXMSZQAZDZFSLQXYJSJZYLBTXXWXQQZBJZUFBBLYLWDSLJHXJYZJWTDJCZFQZQZZDZSXZZQLZCDZFJHYSPYMPQZMLPPLFFXJJNZZYLSJEYQZFPFZKSYWJJJHRDJZZXTXXGLGHYDXCSKYSWMMZCWYBAZBJKSHFHJCXMHFQHYXXYZFTSJYZFXYXPZLCHMZMBXHZZSXYFYMNCWDABAZLXKTCSHHXKXJJZJSTHYGXSXYYHHHJWXKZXSSBZZWHHHCWTZZZPJXSNXQQJGZYZYWLLCWXZFXXYXYHXMKYYSWSQMNLNAYCYSPMJKHWCQHYLAJJMZXHMMCNZHBHXCLXTJPLTXYJHDYYLTTXFSZHYXXSJBJYAYRSMXYPLCKDUYHLXRLNLLSTYZYYQYGYHHSCCSMZCTZQXKYQFPYYRPFFLKQUNTSZLLZMWWTCQQYZWTLLMLMPWMBZSSTZRBPDDTLQJJBXZCSRZQQYGWCSXFWZLXCCRSZDZMCYGGDZQSGTJSWLJMYMMZYHFBJDGYXCCPSHXNZCSBSJYJGJMPPWAFFYFNXHYZXZYLREMZGZCYZSSZDLLJCSQFNXZKPTXZGXJJGFMYYYSNBTYLBNLHPFZDCYFBMGQRRSSSZXYSGTZRNYDZZCDGPJAFJFZKNZBLCZSZPSGCYCJSZLMLRSZBZZLDLSLLYSXSQZQLYXZLSKKBRXBRBZCYCXZZZEEYFGKLZLYYHGZSGZLFJHGTGWKRAAJYZKZQTSSHJJXDCYZUYJLZYRZDQQHGJZXSSZBYKJPBFRTJXLLFQWJHYLQTYMBLPZDXTZYGBDHZZRBGXHWNJTJXLKSCFSMWLSDQYSJTXKZSCFWJLBXFTZLLJZLLQBLSQMQQCGCZFPBPHZCZJLPYYGGDTGWDCFCZQYYYQYSSCLXZSKLZZZGFFCQNWGLHQYZJJCZLQZZYJPJZZBPDCCMHJGXDQDGDLZQMFGPSYTSDYFWWDJZJYSXYYCZCYHZWPBYKXRYLYBHKJKSFXTZJMMCKHLLTNYYMSYXYZPYJQYCSYCWMTJJKQYRHLLQXPSGTLYYCLJSCPXJYZFNMLRGJJTYZBXYZMSJYJHHFZQMSYXRSZCWTLRTQZSSTKXGQKGSPTGCZNJSJCQCXHMXGGZTQYDJKZDLBZSXJLHYQGGGTHQSZPYHJHHGYYGKGGCWJZZYLCZLXQSFTGZSLLLMLJSKCTBLLZZSZMMNYTPZSXQHJCJYQXYZXZQZCPSHKZZYSXCDFGMWQRLLQXRFZTLYSTCTMJCXJJXHJNXTNRZTZFQYHQGLLGCXSZSJDJLJCYDSJTLNYXHSZXCGJZYQPYLFHDJSBPCCZHJJJQZJQDYBSSLLCMYTTMQTBHJQNNYGKYRQYQMZGCJKPDCGMYZHQLLSLLCLMHOLZGDYYFZSLJCQZLYLZQJESHNYLLJXGJXLYSYYYXNBZLJSSZCQQCJYLLZLTJYLLZLLBNYLGQCHXYYXOXCXQKYJXXXYKLXSXXYQXCYKQXQCSGYXXYQXYGYTQOHXHXPYXXXULCYEYCHZZCBWQBBWJQZSCSZSSLZYLKDESJZWMYMCYTSDSXXSCJPQQSQYLYYZYCMDJDZYWCBTJSYDJKCYDDJLBDJJSODZYSYXQQYXDHHGQQYQHDYXWGMMMAJDYBBBPPBCMUUPLJZSMTXERXJMHQNUTPJDCBSSMSSSTKJTSSMMTRCPLZSZMLQDSDMJMQPNQDXCFYNBFSDQXYXHYAYKQYDDLQYYYSSZBYDSLNTFQTZQPZMCHDHCZCWFDXTMYQSPHQYYXSRGJCWTJTZZQMGWJJTJHTQJBBHWZPXXHYQFXXQYWYYHYSCDYDHHQMNMTMWCPBSZPPZZGLMZFOLLCFWHMMSJZTTDHZZYFFYTZZGZYSKYJXQYJZQBHMBZZLYGHGFMSHPZFZSNCLPBQSNJXZSLXXFPMTYJYGBXLLDLXPZJYZJYHHZCYWHJYLSJEXFSZZYWXKZJLUYDTMLYMQJPWXYHXSKTQJEZRPXXZHHMHWQPWQLYJJQJJZSZCPHJLCHHNXJLQWZJHBMZYXBDHHYPZLHLHLGFWLCHYYTLHJXCJMSCPXSTKPNHQXSRTYXXTESYJCTLSSLSTDLLLWWYHDHRJZSFGXTSYCZYNYHTDHWJSLHTZDQDJZXXQHGYLTZPHCSQFCLNJTCLZPFSTPDYNYLGMJLLYCQHYSSHCHYLHQYQTMZYPBYWRFQYKQSYSLZDQJMPXYYSSRHZJNYWTQDFZBWWTWWRXCWHGYHXMKMYYYQMSMZHNGCEPMLQQMTCWCTMMPXJPJJHFXYYZSXZHTYBMSTSYJTTQQQYYLHYNPYQZLCYZHZWSMYLKFJXLWGXYPJYTYSYXYMZCKTTWLKSMZSYLMPWLZWXWQZSSAQSYXYRHSSNTSRAPXCPWCMGDXHXZDZYFJHGZTTSBJHGYZSZYSMYCLLLXBTYXHBBZJKSSDMALXHYCFYGMQYPJYCQXJLLLJGSLZGQLYCJCCZOTYXMTMTTLLWTGPXYMZMKLPSZZZXHKQYSXCTYJZYHXSHYXZKXLZWPSQPYHJWPJPWXQQYLXSDHMRSLZZYZWTTCYXYSZZSHBSCCSTPLWSSCJCHNLCGCHSSPHYLHFHHXJSXYLLNYLSZDHZXYLSXLWZYKCLDYAXZCMDDYSPJTQJZLNWQPSSSWCTSTSZLBLNXSMNYYMJQBQHRZWTYYDCHQLXKPZWBGQYBKFCMZWPZLLYYLSZYDWHXPSBCMLJBSCGBHXLQHYRLJXYSWXWXZSLDFHLSLYNJLZYFLYJYCDRJLFSYZFSLLCQYQFGJYHYXZLYLMSTDJCYHBZLLNWLXXYGYYHSMGDHXXHHLZZJZXCZZZCYQZFNGWPYLCPKPYYPMCLQKDGXZGGWQBDXZZKZFBXXLZXJTPJPTTBYTSZZDWSLCHZHSLTYXHQLHYXXXYYZYSWTXZKHLXZXZPYHGCHKCFSYHUTJRLXFJXPTZTWHPLYXFCRHXSHXKYXXYHZQDXQWULHYHMJTBFLKHTXCWHJFWJCFPQRYQXCYYYQYGRPYWSGSUNGWCHKZDXYFLXXHJJBYZWTSXXNCYJJYMSWZJQRMHXZWFQSYLZJZGBHYNSLBGTTCSYBYXXWXYHXYYXNSQYXMQYWRGYQLXBBZLJSYLPSYTJZYHYZAWLRORJMKSCZJXXXYXCHDYXRYXXJDTSQFXLYLTSFFYXLMTYJMJUYYYXLTZCSXQZQHZXLYYXZHDNBRXXXJCTYHLBRLMBRLLAXKYLLLJLYXXLYCRYLCJTGJCMTLZLLCYZZPZPCYAWHJJFYBDYYZSMPCKZDQYQPBPCJPDCYZMDPBCYYDYCNNPLMTMLRMFMMGWYZBSJGYGSMZQQQZTXMKQWGXLLPJGZBQCDJJJFPKJKCXBLJMSWMDTQJXLDLPPBXCWRCQFBFQJCZAHZGMYKPHYYHZYKNDKZMBPJYXPXYHLFPNYYGXJDBKXNXHJMZJXSTRSTLDXSKZYSYBZXJLXYSLBZYSLHXJPFXPQNBYLLJQKYGZMCYZZYMCCSLCLHZFWFWYXZMWSXTYNXJHPYYMCYSPMHYSMYDYSHQYZCHMJJMZCAAGCFJBBHPLYZYLXXSDJGXDHKXXTXXNBHRMLYJSLTXMRHNLXQJXYZLLYSWQGDLBJHDCGJYQYCMHWFMJYBMBYJYJWYMDPWHXQLDYGPDFXXBCGJSPCKRSSYZJMSLBZZJFLJJJLGXZGYXYXLSZQYXBEXYXHGCXBPLDYHWETTWWCJMBTXCHXYQXLLXFLYXLLJLSSFWDPZSMYJCLMWYTCZPCHQEKCQBWLCQYDPLQPPQZQFJQDJHYMMCXTXDRMJWRHXCJZYLQXDYYNHYYHRSLSRSYWWZJYMTLTLLGTQCJZYABTCKZCJYCCQLJZQXALMZYHYWLWDXZXQDLLQSHGPJFJLJHJABCQZDJGTKHSSTCYJLPSWZLXZXRWGLDLZRLZXTGSLLLLZLYXXWGDZYGBDPHZPBRLWSXQBPFDWOFMWHLYPCBJCCLDMBZPBZZLCYQXLDOMZBLZWPDWYYGDSTTHCSQSCCRSSSYSLFYBFNTYJSZDFNDPDHDZZMBBLSLCMYFFGTJJQWFTMTPJWFNLBZCMMJTGBDZLQLPYFHYYMJYLSDCHDZJWJCCTLJCLDTLJJCPDDSQDSSZYBNDBJLGGJZXSXNLYCYBJXQYCBYLZCFZPPGKCXZDZFZTJJFJSJXZBNZYJQTTYJYHTYCZHYMDJXTTMPXSPLZCDWSLSHXYPZGTFMLCJTYCBPMGDKWYCYZCDSZZYHFLYCTYGWHKJYYLSJCXGYWJCBLLCSNDDBTZBSCLYZCZZSSQDLLMQYYHFSLQLLXFTYHABXGWNYWYYPLLSDLDLLBJCYXJZMLHLJDXYYQYTDLLLBUGBFDFBBQJZZMDPJHGCLGMJJPGAEHHBWCQXAXHHHZCHXYPHJAXHLPHJPGPZJQCQZGJJZZUZDMQYYBZZPHYHYBWHAZYJHYKFGDPFQSDLZMLJXKXGALXZDAGLMDGXMWZQYXXDXXPFDMMSSYMPFMDMMKXKSYZYSHDZKXSYSMMZZZMSYDNZZCZXFPLSTMZDNMXCKJMZTYYMZMZZMSXHHDCZJEMXXKLJSTLWLSQLYJZLLZJSSDPPMHNLZJCZYHMXXHGZCJMDHXTKGRMXFWMCGMWKDTKSXQMMMFZZYDKMSCLCMPCGMHSPXQPZDSSLCXKYXTWLWJYAHZJGZQMCSNXYYMMPMLKJXMHLMLQMXCTKZMJQYSZJSYSZHSYJZJCDAJZYBSDQJZGWZQQXFKDMSDJLFWEHKZQKJPEYPZYSZCDWYJFFMZZYLTTDZZEFMZLBNPPLPLPEPSZALLTYLKCKQZKGENQLWAGYXYDPXLHSXQQWQCQXQCLHYXXMLYCCWLYMQYSKGCHLCJNSZKPYZKCQZQLJPDMDZHLASXLBYDWQLWDNBQCRYDDZTJYBKBWSZDXDTNPJDTCTQDFXQQMGNXECLTTBKPWSLCTYQLPWYZZKLPYGZCQQPLLKCCYLPQMZCZQCLJSLQZDJXLDDHPZQDLJJXZQDXYZQKZLJCYQDYJPPYPQYKJYRMPCBYMCXKLLZLLFQPYLLLMBSGLCYSSLRSYSQTMXYXZQZFDZUYSYZTFFMZZSMZQHZSSCCMLYXWTPZGXZJGZGSJSGKDDHTQGGZLLBJDZLCBCHYXYZHZFYWXYZYMSDBZZYJGTSMTFXQYXQSTDGSLNXDLRYZZLRYYLXQHTXSRTZNGZXBNQQZFMYKMZJBZYMKBPNLYZPBLMCNQYZZZSJZHJCTZKHYZZJRDYZHNPXGLFZTLKGJTCTSSYLLGZRZBBQZZKLPKLCZYSSUYXBJFPNJZZXCDWXZYJXZZDJJKGGRSRJKMSMZJLSJYWQSKYHQJSXPJZZZLSNSHRNYPZTWCHKLPSRZLZXYJQXQKYSJYCZTLQZYBBYBWZPQDWWYZCYTJCJXCKCWDKKZXSGKDZXWWYYJQYYTCYTDLLXWKCZKKLCCLZCQQDZLQLCSFQCHQHSFSMQZZLNBJJZBSJHTSZDYSJQJPDLZCDCWJKJZZLPYCGMZWDJJBSJQZSYZYHHXJPBJYDSSXDZNCGLQMBTSFSBPDZDLZNFGFJGFSMPXJQLMBLGQCYYXBQKDJJQYRFKZTJDHCZKLBSDZCFJTPLLJGXHYXZCSSZZXSTJYGKGCKGYOQXJPLZPBPGTGYJZGHZQZZLBJLSQFZGKQQJZGYCZBZQTLDXRJXBSXXPZXHYZYCLWDXJJHXMFDZPFZHQHQMQGKSLYHTYCGFRZGNQXCLPDLBZCSCZQLLJBLHBZCYPZZPPDYMZZSGYHCKCPZJGSLJLNSCDSLDLXBMSTLDDFJMKDJDHZLZXLSZQPQPGJLLYBDSZGQLBZLSLKYYHZTTNTJYQTZZPSZQZTLLJTYYLLQLLQYZQLBDZLSLYYZYMDFSZSNHLXZNCZQZPBWSKRFBSYZMTHBLGJPMCZZLSTLXSHTCSYZLZBLFEQHLXFLCJLYLJQCBZLZJHHSSTBRMHXZHJZCLXFNBGXGTQJCZTMSFZKJMSSNXLJKBHSJXNTNLZDNTLMSJXGZJYJCZXYJYJWRWWQNZTNFJSZPZSHZJFYRDJSFSZJZBJFZQZZHZLXFYSBZQLZSGYFTZDCSZXZJBQMSZKJRHYJZCKMJKHCHGTXKXQGLXPXFXTRTYLXJXHDTSJXHJZJXZWZLCQSBTXWXGXTXXHXFTSDKFJHZYJFJXRZSDLLLTQSQQZQWZXSYQTWGWBZCGZLLYZBCLMQQTZHZXZXLJFRMYZFLXYSQXXJKXRMQDZDMMYYBSQBHGZMWFWXGMXLZPYYTGZYCCDXYZXYWGSYJYZNBHPZJSQSYXSXRTFYZGRHZTXSZZTHCBFCLSYXZLZQMZLMPLMXZJXSFLBYZMYQHXJSXRXSQZZZSSLYFRCZJRCRXHHZXQYDYHXSJJHZCXZBTYNSYSXJBQLPXZQPYMLXZKYXLXCJLCYSXXZZLXDLLLJJYHZXGYJWKJRWYHCPSGNRZLFZWFZZNSXGXFLZSXZZZBFCSYJDBRJKRDHHGXJLJJTGXJXXSTJTJXLYXQFCSGSWMSBCTLQZZWLZZKXJMLTMJYHSDDBXGZHDLBMYJFRZFSGCLYJBPMLYSMSXLSZJQQHJZFXGFQFQBPXZGYYQXGZTCQWYLTLGWSGWHRLFSFGZJMGMGBGTJFSYZZGZYZAFLSSPMLPFLCWBJZCLJJMZLPJJLYMQDMYYYFBGYGYZMLYZDXQYXRQQQHSYYYQXYLJTYXFSFSLLGNQCYHYCWFHCCCFXPYLYPLLZYXXXXXKQHHXSHJZCFZSCZJXCPZWHHHHHAPYLQALPQAFYHXDYLUKMZQGGGDDESRNNZLTZGCHYPPYSQJJHCLLJTOLNJPZLJLHYMHEYDYDSQYCDDHGZUNDZCLZYZLLZNTNYZGSLHSLPJJBDGWXPCDUTJCKLKCLWKLLCASSTKZZDNQNTTLYYZSSYSSZZRYLJQKCQDHHCRXRZYDGRGCWCGZQFFFPPJFZYNAKRGYWYQPQXXFKJTSZZXSWZDDFBBXTBGTZKZNPZZPZXZPJSZBMQHKCYXYLDKLJNYPKYGHGDZJXXEAHPNZKZTZCMXCXMMJXNKSZQNMNLWBWWXJKYHCPSTMCSQTZJYXTPCTPDTNNPGLLLZSJLSPBLPLQHDTNJNLYYRSZFFJFQWDPHZDWMRZCCLODAXNSSNYZRESTYJWJYJDBCFXNMWTTBYLWSTSZGYBLJPXGLBOCLHPCBJLTMXZLJYLZXCLTPNCLCKXTPZJSWCYXSFYSZDKNTLBYJCYJLLSTGQCBXRYZXBXKLYLHZLQZLNZCXWJZLJZJNCJHXMNZZGJZZXTZJXYCYYCXXJYYXJJXSSSJSTSSTTPPGQTCSXWZDCSYFPTFBFHFBBLZJCLZZDBXGCXLQPXKFZFLSYLTUWBMQJHSZBMDDBCYSCCLDXYCDDQLYJJWMQLLCSGLJJSYFPYYCCYLTJANTJJPWYCMMGQYYSXDXQMZHSZXPFTWWZQSWQRFKJLZJQQYFBRXJHHFWJJZYQAZMYFRHCYYBYQWLPEXCCZSTYRLTTDMQLYKMBBGMYYJPRKZNPBSXYXBHYZDJDNGHPMFSGMWFZMFQMMBCMZZCJJLCNUXYQLMLRYGQZCYXZLWJGCJCGGMCJNFYZZJHYCPRRCMTZQZXHFQGTJXCCJEAQCRJYHPLQLSZDJRBCQHQDYRHYLYXJSYMHZYDWLDFRYHBPYDTSSCNWBXGLPZMLZZTQSSCPJMXXYCSJYTYCGHYCJWYRXXLFEMWJNMKLLSWTXHYYYNCMMCWJDQDJZGLLJWJRKHPZGGFLCCSCZMCBLTBHBQJXQDSPDJZZGKGLFQYWBZYZJLTSTDHQHCTCBCHFLQMPWDSHYYTQWCNZZJTLBYMBPDYYYXSQKXWYYFLXXNCWCXYPMAELYKKJMZZZBRXYYQJFLJPFHHHYTZZXSGQQMHSPGDZQWBWPJHZJDYSCQWZKTXXSQLZYYMYSDZGRXCKKUJLWPYSYSCSYZLRMLQSYLJXBCXTLWDQZPCYCYKPPPNSXFYZJJRCEMHSZMSXLXGLRWGCSTLRSXBZGBZGZTCPLUJLSLYLYMTXMTZPALZXPXJTJWTCYYZLBLXBZLQMYLXPGHDSLSSDMXMBDZZSXWHAMLCZCPJMCNHJYSNSYGCHSKQMZZQDLLKABLWJXSFMOCDXJRRLYQZKJMYBYQLYHETFJZFRFKSRYXFJTWDSXXSYSQJYSLYXWJHSNLXYYXHBHAWHHJZXWMYLJCSSLKYDZTXBZSYFDXGXZJKHSXXYBSSXDPYNZWRPTQZCZENYGCXQFJYKJBZMLJCMQQXUOXSLYXXLYLLJDZBTYMHPFSTTQQWLHOKYBLZZALZXQLHZWRRQHLSTMYPYXJJXMQSJFNBXYXYJXXYQYLTHYLQYFMLKLJTMLLHSZWKZHLJMLHLJKLJSTLQXYLMBHHLNLZXQJHXCFXXLHYHJJGBYZZKBXSCQDJQDSUJZYYHZHHMGSXCSYMXFEBCQWWRBPYYJQTYZCYQYQQZYHMWFFHGZFRJFCDPXNTQYZPDYKHJLFRZXPPXZDBBGZQSTLGDGYLCQMLCHHMFYWLZYXKJLYPQHSYWMQQGQZMLZJNSQXJQSYJYCBEHSXFSZPXZWFLLBCYYJDYTDTHWZSFJMQQYJLMQXXLLDTTKHHYBFPWTYYSQQWNQWLGWDEBZWCMYGCULKJXTMXMYJSXHYBRWFYMWFRXYQMXYSZTZZTFYKMLDHQDXWYYNLCRYJBLPSXCXYWLSPRRJWXHQYPHTYDNXHHMMYWYTZCSQMTSSCCDALWZTCPQPYJLLQZYJSWXMZZMMYLMXCLMXCZMXMZSQTZPPQQBLPGXQZHFLJJHYTJSRXWZXSCCDLXTYJDCQJXSLQYCLZXLZZXMXQRJMHRHZJBHMFLJLMLCLQNLDXZLLLPYPSYJYSXCQQDCMQJZZXHNPNXZMEKMXHYKYQLXSXTXJYYHWDCWDZHQYYBGYBCYSCFGPSJNZDYZZJZXRZRQJJYMCANYRJTLDPPYZBSTJKXXZYPFDWFGZZRPYMTNGXZQBYXNBUFNQKRJQZMJEGRZGYCLKXZDSKKNSXKCLJSPJYYZLQQJYBZSSQLLLKJXTBKTYLCCDDBLSPPFYLGYDTZJYQGGKQTTFZXBDKTYYHYBBFYTYYBCLPDYTGDHRYRNJSPTCSNYJQHKLLLZSLYDXXWBCJQSPXBPJZJCJDZFFXXBRMLAZHCSNDLBJDSZBLPRZTSWSBXBCLLXXLZDJZSJPYLYXXYFTFFFBHJJXGBYXJPMMMPSSJZJMTLYZJXSWXTYLEDQPJMYGQZJGDJLQJWJQLLSJGJGYGMSCLJJXDTYGJQJQJCJZCJGDZZSXQGSJGGCXHQXSNQLZZBXHSGZXCXYLJXYXYYDFQQJHJFXDHCTXJYRXYSQTJXYEFYYSSYYJXNCYZXFXMSYSZXYYSCHSHXZZZGZZZGFJDLTYLNPZGYJYZYYQZPBXQBDZTZCZYXXYHHSQXSHDHGQHJHGYWSZTMZMLHYXGEBTYLZKQWYTJZRCLEKYSTDBCYKQQSAYXCJXWWGSBHJYZYDHCSJKQCXSWXFLTYNYZPZCCZJQTZWJQDZZZQZLJJXLSBHPYXXPSXSHHEZTXFPTLQYZZXHYTXNCFZYYHXGNXMYWXTZSJPTHHGYMXMXQZXTSBCZYJYXXTYYZYPCQLMMSZMJZZLLZXGXZAAJZYXJMZXWDXZSXZDZXLEYJJZQBHZWZZZQTZPSXZTDSXJJJZNYAZPHXYYSRNQDTHZHYYKYJHDZXZLSWCLYBZYECWCYCRYLCXNHZYDZYDYJDFRJJHTRSQTXYXJRJHOJYNXELXSFSFJZGHPZSXZSZDZCQZBYYKLSGSJHCZSHDGQGXYZGXCHXZJWYQWGYHKSSEQZZNDZFKWYSSTCLZSTSYMCDHJXXYWEYXCZAYDMPXMDSXYBSQMJMZJMTZQLPJYQZCGQHXJHHLXXHLHDLDJQCLDWBSXFZZYYSCHTYTYYBHECXHYKGJPXHHYZJFXHWHBDZFYZBCAPNPGNYDMSXHMMMMAMYNBYJTMPXYYMCTHJBZYFCGTYHWPHFTWZZEZSBZEGPFMTSKFTYCMHFLLHGPZJXZJGZJYXZSBBQSCZZLZCCSTPGXMJSFTCCZJZDJXCYBZLFCJSYZFGSZLYBCWZZBYZDZYPSWYJZXZBDSYUXLZZBZFYGCZXBZHZFTPBGZGEJBSTGKDMFHYZZJHZLLZZGJQZLSFDJSSCBZGPDLFZFZSZYZYZSYGCXSNXXCHCZXTZZLJFZGQSQYXZJQDCCZTQCDXZJYQJQCHXZTDLGSCXZSYQJQTZWLQDQZTQCHQQJZYEZZZPBWKDJFCJPZTYPQYQTTYNLMBDKTJZPQZQZZFPZSBNJLGYJDXJDZZKZGQKXDLPZJTCJDQBXDJQJSTCKNXBXZMSLYJCQMTJQWWCJQNJNLLLHJCWQTBZQYDZCZPZZDZYDDCYZZZCCJTTJFZDPRRTZTJDCQTQZDTJNPLZBCLLCTZSXKJZQZPZLBZRBTJDCXFCZDBCCJJLTQQPLDCGZDBBZJCQDCJWYNLLZYZCCDWLLXWZLXRXNTQQCZXKQLSGDFQTDDGLRLAJJTKUYMKQLLTZYTDYYCZGJWYXDXFRSKSTQTENQMRKQZHHQKDLDAZFKYPBGGPZREBZZYKZZSPEGJXGYKQZZZSLYSYYYZWFQZYLZZLZHWCHKYPQGNPGBLPLRRJYXCCSYYHSFZFYBZYYTGZXYLXCZWXXZJZBLFFLGSKHYJZEYJHLPLLLLCZGXDRZELRHGKLZZYHZLYQSZZJZQLJZFLNBHGWLCZCFJYSPYXZLZLXGCCPZBLLCYBBBBUBBCBPCRNNZCZYRBFSRLDCGQYYQXYGMQZWTZYTYJXYFWTEHZZJYWLCCNTZYJJZDEDPZDZTSYQJHDYMBJNYJZLXTSSTPHNDJXXBYXQTZQDDTJTDYYTGWSCSZQFLSHLGLBCZPHDLYZJYCKWTYTYLBNYTSDSYCCTYSZYYEBHEXHQDTWNYGYCLXTSZYSTQMYGZAZCCSZZDSLZCLZRQXYYELJSBYMXSXZTEMBBLLYYLLYTDQYSHYMRQWKFKBFXNXSBYCHXBWJYHTQBPBSBWDZYLKGZSKYHXQZJXHXJXGNLJKZLYYCDXLFYFGHLJGJYBXQLYBXQPQGZTZPLNCYPXDJYQYDYMRBESJYYHKXXSTMXRCZZYWXYQYBMCLLYZHQYZWQXDBXBZWZMSLPDMYSKFMZKLZCYQYCZLQXFZZYDQZPZYGYJYZMZXDZFYFYTTQTZHGSPCZMLCCYTZXJCYTJMKSLPZHYSNZLLYTPZCTZZCKTXDHXXTQCYFKSMQCCYYAZHTJPCYLZLYJBJXTPNYLJYYNRXSYLMMNXJSMYBCSYSYLZYLXJJQYLDZLPQBFZZBLFNDXQKCZFYWHGQMRDSXYCYTXNQQJZYYPFZXDYZFPRXEJDGYQBXRCNFYYQPGHYJDYZXGRHTKYLNWDZNTSMPKLBTHBPYSZBZTJZSZZJTYYXZPHSSZZBZCZPTQFZMYFLYPYBBJQXZMXXDJMTSYSKKBJZXHJCKLPSMKYJZCXTMLJYXRZZQSLXXQPYZXMKYXXXJCLJPRMYYGADYSKQLSNDHYZKQXZYZTCGHZTLMLWZYBWSYCTBHJHJFCWZTXWYTKZLXQSHLYJZJXTMPLPYCGLTBZZTLZJCYJGDTCLKLPLLQPJMZPAPXYZLKKTKDZCZZBNZDYDYQZJYJGMCTXLTGXSZLMLHBGLKFWNWZHDXUHLFMKYSLGXDTWWFRJEJZTZHYDXYKSHWFZCQSHKTMQQHTZHYMJDJSKHXZJZBZZXYMPAGQMSTPXLSKLZYNWRTSQLSZBPSPSGZWYHTLKSSSWHZZLYYTNXJGMJSZSUFWNLSOZTXGXLSAMMLBWLDSZYLAKQCQCTMYCFJBSLXCLZZCLXXKSBZQCLHJPSQPLSXXCKSLNHPSFQQYTXYJZLQLDXZQJZDYYDJNZPTUZDSKJFSLJHYLZSQZLBTXYDGTQFDBYAZXDZHZJNHHQBYKNXJJQCZMLLJZKSPLDYCLBBLXKLELXJLBQYCXJXGCNLCQPLZLZYJTZLJGYZDZPLTQCSXFDMNYCXGBTJDCZNBGBQYQJWGKFHTNPYQZQGBKPBBYZMTJDYTBLSQMPSXTBNPDXKLEMYYCJYNZCTLDYKZZXDDXHQSHDGMZSJYCCTAYRZLPYLTLKXSLZCGGEXCLFXLKJRTLQJAQZNCMBYDKKCXGLCZJZXJHPTDJJMZQYKQSECQZDSHHADMLZFMMZBGNTJNNLGBYJBRBTMLBYJDZXLCJLPLDLPCQDHLXZLYCBLCXZZJADJLNZMMSSSMYBHBSQKBHRSXXJMXSDZNZPXLGBRHWGGFCXGMSKLLTSJYYCQLTSKYWYYHYWXBXQYWPYWYKQLSQPTNTKHQCWDQKTWPXXHCPTHTWUMSSYHBWCRWXHJMKMZNGWTMLKFGHKJYLSYYCXWHYECLQHKQHTTQKHFZLDXQWYZYYDESBPKYRZPJFYYZJCEQDZZDLATZBBFJLLCXDLMJSSXEGYGSJQXCWBXSSZPDYZCXDNYXPPZYDLYJCZPLTXLSXYZYRXCYYYDYLWWNZSAHJSYQYHGYWWAXTJZDAXYSRLTDPSSYYFNEJDXYZHLXLLLZQZSJNYQYQQXYJGHZGZCYJCHZLYCDSHWSHJZYJXCLLNXZJJYYXNFXMWFPYLCYLLABWDDHWDXJMCXZTZPMLQZHSFHZYNZTLLDYWLSLXHYMMYLMBWWKYXYADTXYLLDJPYBPWUXJMWMLLSAFDLLYFLBHHHBQQLTZJCQJLDJTFFKMMMBYTHYGDCQRDDWRQJXNBYSNWZDBYYTBJHPYBYTTJXAAHGQDQTMYSTQXKBTZPKJLZRBEQQSSMJJBDJOTGTBXPGBKTLHQXJJJCTHXQDWJLWRFWQGWSHCKRYSWGFTGYGBXSDWDWRFHWYTJJXXXJYZYSLPYYYPAYXHYDQKXSHXYXGSKQHYWFDDDPPLCJLQQEEWXKSYYKDYPLTJTHKJLTCYYHHJTTPLTZZCDLTHQKZXQYSTEEYWYYZYXXYYSTTJKLLPZMCYHQGXYHSRMBXPLLNQYDQHXSXXWGDQBSHYLLPJJJTHYJKYPPTHYYKTYEZYENMDSHLCRPQFDGFXZPSFTLJXXJBSWYYSKSFLXLPPLBBBLBSFXFYZBSJSSYLPBBFFFFSSCJDSTZSXZRYYSYFFSYZYZBJTBCTSBSDHRTJJBYTCXYJEYLXCBNEBJDSYXYKGSJZBXBYTFZWGENYHHTHZHHXFWGCSTBGXKLSXYWMTMBYXJSTZSCDYQRCYTWXZFHMYMCXLZNSDJTTTXRYCFYJSBSDYERXJLJXBBDEYNJGHXGCKGSCYMBLXJMSZNSKGXFBNBPTHFJAAFXYXFPXMYPQDTZCXZZPXRSYWZDLYBBKTYQPQJPZYPZJZNJPZJLZZFYSBTTSLMPTZRTDXQSJEHBZYLZDHLJSQMLHTXTJECXSLZZSPKTLZKQQYFSYGYWPCPQFHQHYTQXZKRSGTTSQCZLPTXCDYYZXSQZSLXLZMYCPCQBZYXHBSXLZDLTCDXTYLZJYYZPZYZLTXJSJXHLPMYTXCQRBLZSSFJZZTNJYTXMYJHLHPPLCYXQJQQKZZSCPZKSWALQSBLCCZJSXGWWWYGYKTJBBZTDKHXHKGTGPBKQYSLPXPJCKBMLLXDZSTBKLGGQKQLSBKKTFXRMDKBFTPZFRTBBRFERQGXYJPZSSTLBZTPSZQZSJDHLJQLZBPMSMMSXLQQNHKNBLRDDNXXDHDDJCYYGYLXGZLXSYGMQQGKHBPMXYXLYTQWLWGCPBMQXCYZYDRJBHTDJYHQSHTMJSBYPLWHLZFFNYPMHXXHPLTBQPFBJWQDBYGPNZTPFZJGSDDTQSHZEAWZZYLLTYYBWJKXXGHLFKXDJTMSZSQYNZGGSWQSPHTLSSKMCLZXYSZQZXNCJDQGZDLFNYKLJCJLLZLMZZNHYDSSHTHZZLZZBBHQZWWYCRZHLYQQJBEYFXXXWHSRXWQHWPSLMSSKZTTYGYQQWRSLALHMJTQJSMXQBJJZJXZYZKXBYQXBJXSHZTSFJLXMXZXFGHKZSZGGYLCLSARJYHSLLLMZXELGLXYDJYTLFBHBPNLYZFBBHPTGJKWETZHKJJXZXXGLLJLSTGSHJJYQLQZFKCGNNDJSSZFDBCTWWSEQFHQJBSAQTGYPQLBXBMMYWXGSLZHGLZGQYFLZBYFZJFRYSFMBYZHQGFWZSYFYJJPHZBYYZFFWODGRLMFTWLBZGYCQXCDJYGZYYYYTYTYDWEGAZYHXJLZYYHLRMGRXXZCLHNELJJTJTPWJYBJJBXJJTJTEEKHWSLJPLPSFYZPQQBDLQJJTYYQLYZKDKSQJYYQZLDQTGJQYZJSUCMRYQTHTEJMFCTYHYPKMHYZWJDQFHYYXWSHCTXRLJHQXHCCYYYJLTKTTYTMXGTCJTZAYYOCZLYLBSZYWJYTSJYHBYSHFJLYGJXXTMZYYLTXXYPZLXYJZYZYYPNHMYMDYYLBLHLSYYQQLLNJJYMSOYQBZGDLYXYLCQYXTSZEGXHZGLHWBLJHEYXTWQMAKBPQCGYSHHEGQCMWYYWLJYJHYYZLLJJYLHZYHMGSLJLJXCJJYCLYCJPCPZJZJMMYLCQLNQLJQJSXYJMLSZLJQLYCMMHCFMMFPQQMFYLQMCFFQMMMMHMZNFHHJGTTHHKHSLNCHHYQDXTMMQDCYZYXYQMYQYLTDCYYYZAZZCYMZYDLZFFFMMYCQZWZZMABTBYZTDMNZZGGDFTYPCGQYTTSSFFWFDTZQSSYSTWXJHXYTSXXYLBYQHWWKXHZXWZNNZZJZJJQJCCCHYYXBZXZCYZTLLCQXYNJYCYYCYNZZQYYYEWYCZDCJYCCHYJLBTZYYCQWMPWPYMLGKDLDLGKQQBGYCHJXY",
          polyphone: (n = {
            19969: "DZ",
            19975: "WM",
            19988: "QJ",
            20048: "YL",
            20056: "SC",
            20060: "NM",
            20094: "QG",
            20127: "QJ",
            20167: "QC",
            20193: "YG",
            20250: "KH",
            20256: "ZC",
            20282: "SC",
            20285: "QJG",
            20291: "TD",
            20314: "YD",
            20340: "NE",
            20375: "TD",
            20389: "YJ",
            20391: "CZ",
            20415: "PB",
            20446: "YS",
            20447: "SQ",
            20504: "TC",
            20608: "KG",
            20854: "QJ",
            20857: "ZC",
            20911: "PF"
          }, (0, i.default)(n, "20504", "TC"), (0, i.default)(n, "20608", "KG"), (0, i.default)(n, "20854", "QJ"), (0, i.default)(n, "20857", "ZC"), (0, i.default)(n, "20911", "PF"), (0, i.default)(n, "20985", "AW"), (0, i.default)(n, "21032", "PB"), (0, i.default)(n, "21048", "XQ"), (0, i.default)(n, "21049", "SC"), (0, i.default)(n, "21089", "YS"), (0, i.default)(n, "21119", "JC"), (0, i.default)(n, "21242", "SB"), (0, i.default)(n, "21273", "SC"), (0, i.default)(n, "21305", "YP"), (0, i.default)(n, "21306", "QO"), (0, i.default)(n, "21330", "ZC"), (0, i.default)(n, "21333", "SDC"), (0, i.default)(n, "21345", "QK"), (0, i.default)(n, "21378", "CA"), (0, i.default)(n, "21397", "SC"), (0, i.default)(n, "21414", "XS"), (0, i.default)(n, "21442", "SC"), (0, i.default)(n, "21477", "JG"), (0, i.default)(n, "21480", "TD"), (0, i.default)(n, "21484", "ZS"), (0, i.default)(n, "21494", "YX"), (0, i.default)(n, "21505", "YX"), (0, i.default)(n, "21512", "HG"), (0, i.default)(n, "21523", "XH"), (0, i.default)(n, "21537", "PB"), (0, i.default)(n, "21542", "PF"), (0, i.default)(n, "21549", "KH"), (0, i.default)(n, "21571", "E"), (0, i.default)(n, "21574", "DA"), (0, i.default)(n, "21588", "TD"), (0, i.default)(n, "21589", "O"), (0, i.default)(n, "21618", "ZC"), (0, i.default)(n, "21621", "KHA"), (0, i.default)(n, "21632", "ZJ"), (0, i.default)(n, "21654", "KG"), (0, i.default)(n, "21679", "LKG"), (0, i.default)(n, "21683", "KH"), (0, i.default)(n, "21710", "A"), (0, i.default)(n, "21719", "YH"), (0, i.default)(n, "21734", "WOE"), (0, i.default)(n, "21769", "A"), (0, i.default)(n, "21780", "WN"), (0, i.default)(n, "21804", "XH"), (0, i.default)(n, "21834", "A"), (0, i.default)(n, "21899", "ZD"), (0, i.default)(n, "21903", "RN"), (0, i.default)(n, "21908", "WO"), (0, i.default)(n, "21939", "ZC"), (0, i.default)(n, "21956", "SA"), (0, i.default)(n, "21964", "YA"), (0, i.default)(n, "21970", "TD"), (0, i.default)(n, "22003", "A"), (0, i.default)(n, "22031", "JG"), (0, i.default)(n, "22040", "XS"), (0, i.default)(n, "22060", "ZC"), (0, i.default)(n, "22066", "ZC"), (0, i.default)(n, "22079", "MH"), (0, i.default)(n, "22129", "XJ"), (0, i.default)(n, "22179", "XA"), (0, i.default)(n, "22237", "NJ"), (0, i.default)(n, "22244", "TD"), (0, i.default)(n, "22280", "JQ"), (0, i.default)(n, "22300", "YH"), (0, i.default)(n, "22313", "XW"), (0, i.default)(n, "22331", "YQ"), (0, i.default)(n, "22343", "YJ"), (0, i.default)(n, "22351", "PH"), (0, i.default)(n, "22395", "DC"), (0, i.default)(n, "22412", "TD"), (0, i.default)(n, "22484", "PB"), (0, i.default)(n, "22500", "PB"), (0, i.default)(n, "22534", "ZD"), (0, i.default)(n, "22549", "DH"), (0, i.default)(n, "22561", "PB"), (0, i.default)(n, "22612", "TD"), (0, i.default)(n, "22771", "KQ"), (0, i.default)(n, "22831", "HB"), (0, i.default)(n, "22841", "JG"), (0, i.default)(n, "22855", "QJ"), (0, i.default)(n, "22865", "XQ"), (0, i.default)(n, "23013", "ML"), (0, i.default)(n, "23081", "WM"), (0, i.default)(n, "23487", "SX"), (0, i.default)(n, "23558", "QJ"), (0, i.default)(n, "23561", "YW"), (0, i.default)(n, "23586", "YW"), (0, i.default)(n, "23614", "YW"), (0, i.default)(n, "23615", "SN"), (0, i.default)(n, "23631", "PB"), (0, i.default)(n, "23646", "ZS"), (0, i.default)(n, "23663", "ZT"), (0, i.default)(n, "23673", "YG"), (0, i.default)(n, "23762", "TD"), (0, i.default)(n, "23769", "ZS"), (0, i.default)(n, "23780", "QJ"), (0, i.default)(n, "23884", "QK"), (0, i.default)(n, "24055", "XH"), (0, i.default)(n, "24113", "DC"), (0, i.default)(n, "24162", "ZC"), (0, i.default)(n, "24191", "GA"), (0, i.default)(n, "24273", "QJ"), (0, i.default)(n, "24324", "NL"), (0, i.default)(n, "24377", "TD"), (0, i.default)(n, "24378", "QJ"), (0, i.default)(n, "24439", "PF"), (0, i.default)(n, "24554", "ZS"), (0, i.default)(n, "24683", "TD"), (0, i.default)(n, "24694", "WE"), (0, i.default)(n, "24733", "LK"), (0, i.default)(n, "24925", "TN"), (0, i.default)(n, "25094", "ZG"), (0, i.default)(n, "25100", "XQ"), (0, i.default)(n, "25103", "XH"), (0, i.default)(n, "25153", "PB"), (0, i.default)(n, "25170", "PB"), (0, i.default)(n, "25179", "KG"), (0, i.default)(n, "25203", "PB"), (0, i.default)(n, "25240", "ZS"), (0, i.default)(n, "25282", "FB"), (0, i.default)(n, "25303", "NA"), (0, i.default)(n, "25324", "KG"), (0, i.default)(n, "25341", "ZY"), (0, i.default)(n, "25373", "WZ"), (0, i.default)(n, "25375", "XJ"), (0, i.default)(n, "25384", "A"), (0, i.default)(n, "25457", "A"), (0, i.default)(n, "25528", "SD"), (0, i.default)(n, "25530", "SC"), (0, i.default)(n, "25552", "TD"), (0, i.default)(n, "25774", "ZC"), (0, i.default)(n, "25874", "ZC"), (0, i.default)(n, "26044", "YW"), (0, i.default)(n, "26080", "WM"), (0, i.default)(n, "26292", "PB"), (0, i.default)(n, "26333", "PB"), (0, i.default)(n, "26355", "ZY"), (0, i.default)(n, "26366", "CZ"), (0, i.default)(n, "26397", "ZC"), (0, i.default)(n, "26399", "QJ"), (0, i.default)(n, "26415", "ZS"), (0, i.default)(n, "26451", "SB"), (0, i.default)(n, "26526", "ZC"), (0, i.default)(n, "26552", "JG"), (0, i.default)(n, "26561", "TD"), (0, i.default)(n, "26588", "JG"), (0, i.default)(n, "26597", "CZ"), (0, i.default)(n, "26629", "ZS"), (0, i.default)(n, "26638", "YL"), (0, i.default)(n, "26646", "XQ"), (0, i.default)(n, "26653", "KG"), (0, i.default)(n, "26657", "XJ"), (0, i.default)(n, "26727", "HG"), (0, i.default)(n, "26894", "ZC"), (0, i.default)(n, "26937", "ZS"), (0, i.default)(n, "26946", "ZC"), (0, i.default)(n, "26999", "KJ"), (0, i.default)(n, "27099", "KJ"), (0, i.default)(n, "27449", "YQ"), (0, i.default)(n, "27481", "XS"), (0, i.default)(n, "27542", "ZS"), (0, i.default)(n, "27663", "ZS"), (0, i.default)(n, "27748", "TS"), (0, i.default)(n, "27784", "SC"), (0, i.default)(n, "27788", "ZD"), (0, i.default)(n, "27795", "TD"), (0, i.default)(n, "27812", "O"), (0, i.default)(n, "27850", "PB"), (0, i.default)(n, "27852", "MB"), (0, i.default)(n, "27895", "SL"), (0, i.default)(n, "27898", "PL"), (0, i.default)(n, "27973", "QJ"), (0, i.default)(n, "27981", "KH"), (0, i.default)(n, "27986", "HX"), (0, i.default)(n, "27994", "XJ"), (0, i.default)(n, "28044", "YC"), (0, i.default)(n, "28065", "WG"), (0, i.default)(n, "28177", "SM"), (0, i.default)(n, "28267", "QJ"), (0, i.default)(n, "28291", "KH"), (0, i.default)(n, "28337", "ZQ"), (0, i.default)(n, "28463", "TL"), (0, i.default)(n, "28548", "DC"), (0, i.default)(n, "28601", "TD"), (0, i.default)(n, "28689", "PB"), (0, i.default)(n, "28805", "JG"), (0, i.default)(n, "28820", "QG"), (0, i.default)(n, "28846", "PB"), (0, i.default)(n, "28952", "TD"), (0, i.default)(n, "28975", "ZC"), (0, i.default)(n, "29100", "A"), (0, i.default)(n, "29325", "QJ"), (0, i.default)(n, "29575", "SL"), (0, i.default)(n, "29602", "FB"), (0, i.default)(n, "30010", "TD"), (0, i.default)(n, "30044", "CX"), (0, i.default)(n, "30058", "PF"), (0, i.default)(n, "30091", "YSP"), (0, i.default)(n, "30111", "YN"), (0, i.default)(n, "30229", "XJ"), (0, i.default)(n, "30427", "SC"), (0, i.default)(n, "30465", "SX"), (0, i.default)(n, "30631", "YQ"), (0, i.default)(n, "30655", "QJ"), (0, i.default)(n, "30684", "QJG"), (0, i.default)(n, "30707", "SD"), (0, i.default)(n, "30729", "XH"), (0, i.default)(n, "30796", "LG"), (0, i.default)(n, "30917", "PB"), (0, i.default)(n, "31074", "NM"), (0, i.default)(n, "31085", "JZ"), (0, i.default)(n, "31109", "SC"), (0, i.default)(n, "31181", "ZC"), (0, i.default)(n, "31192", "MLB"), (0, i.default)(n, "31293", "JQ"), (0, i.default)(n, "31400", "YX"), (0, i.default)(n, "31584", "YJ"), (0, i.default)(n, "31896", "ZN"), (0, i.default)(n, "31909", "ZY"), (0, i.default)(n, "31995", "XJ"), (0, i.default)(n, "32321", "PF"), (0, i.default)(n, "32327", "ZY"), (0, i.default)(n, "32418", "HG"), (0, i.default)(n, "32420", "XQ"), (0, i.default)(n, "32421", "HG"), (0, i.default)(n, "32438", "LG"), (0, i.default)(n, "32473", "GJ"), (0, i.default)(n, "32488", "TD"), (0, i.default)(n, "32521", "QJ"), (0, i.default)(n, "32527", "PB"), (0, i.default)(n, "32562", "ZSQ"), (0, i.default)(n, "32564", "JZ"), (0, i.default)(n, "32735", "ZD"), (0, i.default)(n, "32793", "PB"), (0, i.default)(n, "33071", "PF"), (0, i.default)(n, "33098", "XL"), (0, i.default)(n, "33100", "YA"), (0, i.default)(n, "33152", "PB"), (0, i.default)(n, "33261", "CX"), (0, i.default)(n, "33324", "BP"), (0, i.default)(n, "33333", "TD"), (0, i.default)(n, "33406", "YA"), (0, i.default)(n, "33426", "WM"), (0, i.default)(n, "33432", "PB"), (0, i.default)(n, "33445", "JG"), (0, i.default)(n, "33486", "ZN"), (0, i.default)(n, "33493", "TS"), (0, i.default)(n, "33507", "QJ"), (0, i.default)(n, "33540", "QJ"), (0, i.default)(n, "33544", "ZC"), (0, i.default)(n, "33564", "XQ"), (0, i.default)(n, "33617", "YT"), (0, i.default)(n, "33632", "QJ"), (0, i.default)(n, "33636", "XH"), (0, i.default)(n, "33637", "YX"), (0, i.default)(n, "33694", "WG"), (0, i.default)(n, "33705", "PF"), (0, i.default)(n, "33728", "YW"), (0, i.default)(n, "33882", "SR"), (0, i.default)(n, "34067", "WM"), (0, i.default)(n, "34074", "YW"), (0, i.default)(n, "34121", "QJ"), (0, i.default)(n, "34255", "ZC"), (0, i.default)(n, "34259", "XL"), (0, i.default)(n, "34425", "JH"), (0, i.default)(n, "34430", "XH"), (0, i.default)(n, "34485", "KH"), (0, i.default)(n, "34503", "YS"), (0, i.default)(n, "34532", "HG"), (0, i.default)(n, "34552", "XS"), (0, i.default)(n, "34558", "YE"), (0, i.default)(n, "34593", "ZL"), (0, i.default)(n, "34660", "YQ"), (0, i.default)(n, "34892", "XH"), (0, i.default)(n, "34928", "SC"), (0, i.default)(n, "34999", "QJ"), (0, i.default)(n, "35048", "PB"), (0, i.default)(n, "35059", "SC"), (0, i.default)(n, "35098", "ZC"), (0, i.default)(n, "35203", "TQ"), (0, i.default)(n, "35265", "JX"), (0, i.default)(n, "35299", "JX"), (0, i.default)(n, "35782", "SZ"), (0, i.default)(n, "35828", "YS"), (0, i.default)(n, "35830", "E"), (0, i.default)(n, "35843", "TD"), (0, i.default)(n, "35895", "YG"), (0, i.default)(n, "35977", "MH"), (0, i.default)(n, "36158", "JG"), (0, i.default)(n, "36228", "QJ"), (0, i.default)(n, "36426", "XQ"), (0, i.default)(n, "36466", "DC"), (0, i.default)(n, "36710", "JC"), (0, i.default)(n, "36711", "ZYG"), (0, i.default)(n, "36767", "PB"), (0, i.default)(n, "36866", "SK"), (0, i.default)(n, "36951", "YW"), (0, i.default)(n, "37034", "YX"), (0, i.default)(n, "37063", "XH"), (0, i.default)(n, "37218", "ZC"), (0, i.default)(n, "37325", "ZC"), (0, i.default)(n, "38063", "PB"), (0, i.default)(n, "38079", "TD"), (0, i.default)(n, "38085", "QY"), (0, i.default)(n, "38107", "DC"), (0, i.default)(n, "38116", "TD"), (0, i.default)(n, "38123", "YD"), (0, i.default)(n, "38224", "HG"), (0, i.default)(n, "38241", "XTC"), (0, i.default)(n, "38271", "ZC"), (0, i.default)(n, "38415", "YE"), (0, i.default)(n, "38426", "KH"), (0, i.default)(n, "38461", "YD"), (0, i.default)(n, "38463", "AE"), (0, i.default)(n, "38466", "PB"), (0, i.default)(n, "38477", "XJ"), (0, i.default)(n, "38518", "YT"), (0, i.default)(n, "38551", "WK"), (0, i.default)(n, "38585", "ZC"), (0, i.default)(n, "38704", "XS"), (0, i.default)(n, "38739", "LJ"), (0, i.default)(n, "38761", "GJ"), (0, i.default)(n, "38808", "SQ"), (0, i.default)(n, "39048", "JG"), (0, i.default)(n, "39049", "XJ"), (0, i.default)(n, "39052", "HG"), (0, i.default)(n, "39076", "CZ"), (0, i.default)(n, "39271", "XT"), (0, i.default)(n, "39534", "TD"), (0, i.default)(n, "39552", "TD"), (0, i.default)(n, "39584", "PB"), (0, i.default)(n, "39647", "SB"), (0, i.default)(n, "39730", "LG"), (0, i.default)(n, "39748", "TPB"), (0, i.default)(n, "40109", "ZQ"), (0, i.default)(n, "40479", "ND"), (0, i.default)(n, "40516", "HG"), (0, i.default)(n, "40536", "HG"), (0, i.default)(n, "40583", "QJ"), (0, i.default)(n, "40765", "YQ"), (0, i.default)(n, "40784", "QJ"), (0, i.default)(n, "40840", "YK"), (0, i.default)(n, "40863", "QJG"), n)
        },
        s = {
          a: "阿啊呵腌嗄吖锕",
          e: "额阿俄恶鹅遏鄂厄饿峨扼娥鳄哦蛾噩愕讹锷垩婀鹗萼谔莪腭锇颚呃阏屙苊轭",
          ai: "爱埃艾碍癌哀挨矮隘蔼唉皑哎霭捱暧嫒嗳瑷嗌锿砹",
          ei: "诶",
          xi: "系西席息希习吸喜细析戏洗悉锡溪惜稀袭夕洒晰昔牺腊烯熙媳栖膝隙犀蹊硒兮熄曦禧嬉玺奚汐徙羲铣淅嘻歙熹矽蟋郗唏皙隰樨浠忾蜥檄郄翕阋鳃舾屣葸螅咭粞觋欷僖醯鼷裼穸饩舄禊诶菥蓰",
          yi: "一以已意议义益亿易医艺食依移衣异伊仪宜射遗疑毅谊亦疫役忆抑尾乙译翼蛇溢椅沂泄逸蚁夷邑怡绎彝裔姨熠贻矣屹颐倚诣胰奕翌疙弈轶蛾驿壹猗臆弋铱旖漪迤佚翊诒怿痍懿饴峄揖眙镒仡黟肄咿翳挹缢呓刈咦嶷羿钇殪荑薏蜴镱噫癔苡悒嗌瘗衤佾埸圯舣酏劓",
          an: "安案按岸暗鞍氨俺胺铵谙庵黯鹌桉埯犴揞厂广",
          han: "厂汉韩含旱寒汗涵函喊憾罕焊翰邯撼瀚憨捍酣悍鼾邗颔蚶晗菡旰顸犴焓撖",
          ang: "昂仰盎肮",
          ao: "奥澳傲熬凹鳌敖遨鏖袄坳翱嗷拗懊岙螯骜獒鏊艹媪廒聱",
          wa: "瓦挖娃洼袜蛙凹哇佤娲呙腽",
          yu: "于与育余预域予遇奥语誉玉鱼雨渔裕愈娱欲吁舆宇羽逾豫郁寓吾狱喻御浴愉禹俞邪榆愚渝尉淤虞屿峪粥驭瑜禺毓钰隅芋熨瘀迂煜昱汩於臾盂聿竽萸妪腴圄谕觎揄龉谀俣馀庾妤瘐鬻欤鹬阈嵛雩鹆圉蜮伛纡窬窳饫蓣狳肀舁蝓燠",
          niu: "牛纽扭钮拗妞忸狃",
          o: "哦噢喔",
          ba: "把八巴拔伯吧坝爸霸罢芭跋扒叭靶疤笆耙鲅粑岜灞钯捌菝魃茇",
          pa: "怕帕爬扒趴琶啪葩耙杷钯筢",
          pi: "被批副否皮坏辟啤匹披疲罢僻毗坯脾譬劈媲屁琵邳裨痞癖陂丕枇噼霹吡纰砒铍淠郫埤濞睥芘蚍圮鼙罴蜱疋貔仳庀擗甓陴",
          bi: "比必币笔毕秘避闭佛辟壁弊彼逼碧鼻臂蔽拂泌璧庇痹毙弼匕鄙陛裨贲敝蓖吡篦纰俾铋毖筚荸薜婢哔跸濞秕荜愎睥妣芘箅髀畀滗狴萆嬖襞舭",
          bai: "百白败摆伯拜柏佰掰呗擘捭稗",
          bo: "波博播勃拨薄佛伯玻搏柏泊舶剥渤卜驳簿脖膊簸菠礴箔铂亳钵帛擘饽跛钹趵檗啵鹁擗踣",
          bei: "北被备倍背杯勃贝辈悲碑臂卑悖惫蓓陂钡狈呗焙碚褙庳鞴孛鹎邶鐾",
          ban: "办版半班般板颁伴搬斑扮拌扳瓣坂阪绊钣瘢舨癍",
          pan: "判盘番潘攀盼拚畔胖叛拌蹒磐爿蟠泮袢襻丬",
          bin: "份宾频滨斌彬濒殡缤鬓槟摈膑玢镔豳髌傧",
          bang: "帮邦彭旁榜棒膀镑绑傍磅蚌谤梆浜蒡",
          pang: "旁庞乓磅螃彷滂逄耪",
          beng: "泵崩蚌蹦迸绷甭嘣甏堋",
          bao: "报保包宝暴胞薄爆炮饱抱堡剥鲍曝葆瀑豹刨褒雹孢苞煲褓趵鸨龅勹",
          bu: "不部步布补捕堡埔卜埠簿哺怖钚卟瓿逋晡醭钸",
          pu: "普暴铺浦朴堡葡谱埔扑仆蒲曝瀑溥莆圃璞濮菩蹼匍噗氆攵镨攴镤",
          mian: "面棉免绵缅勉眠冕娩腼渑湎沔黾宀眄",
          po: "破繁坡迫颇朴泊婆泼魄粕鄱珀陂叵笸泺皤钋钷",
          fan: "反范犯繁饭泛翻凡返番贩烦拚帆樊藩矾梵蕃钒幡畈蘩蹯燔",
          fu: "府服副负富复福夫妇幅付扶父符附腐赴佛浮覆辅傅伏抚赋辐腹弗肤阜袱缚甫氟斧孚敷俯拂俘咐腑孵芙涪釜脯茯馥宓绂讣呋罘麸蝠匐芾蜉跗凫滏蝮驸绋蚨砩桴赙菔呒趺苻拊阝鲋怫稃郛莩幞祓艴黻黼鳆",
          ben: "本体奔苯笨夯贲锛畚坌",
          feng: "风丰封峰奉凤锋冯逢缝蜂枫疯讽烽俸沣酆砜葑唪",
          bian: "变便边编遍辩鞭辨贬匾扁卞汴辫砭苄蝙鳊弁窆笾煸褊碥忭缏",
          pian: "便片篇偏骗翩扁骈胼蹁谝犏缏",
          zhen: "镇真针圳振震珍阵诊填侦臻贞枕桢赈祯帧甄斟缜箴疹砧榛鸩轸稹溱蓁胗椹朕畛浈",
          biao: "表标彪镖裱飚膘飙镳婊骠飑杓髟鳔灬瘭",
          piao: "票朴漂飘嫖瓢剽缥殍瞟骠嘌莩螵",
          huo: "和活或货获火伙惑霍祸豁嚯藿锪蠖钬耠镬夥灬劐攉",
          bie: "别鳖憋瘪蹩",
          min: "民敏闽闵皿泯岷悯珉抿黾缗玟愍苠鳘",
          fen: "分份纷奋粉氛芬愤粪坟汾焚酚吩忿棼玢鼢瀵偾鲼",
          bing: "并病兵冰屏饼炳秉丙摒柄槟禀枋邴冫",
          geng: "更耕颈庚耿梗埂羹哽赓绠鲠",
          fang: "方放房防访纺芳仿坊妨肪邡舫彷枋鲂匚钫",
          xian: "现先县见线限显险献鲜洗宪纤陷闲贤仙衔掀咸嫌掺羡弦腺痫娴舷馅酰铣冼涎暹籼锨苋蚬跹岘藓燹鹇氙莶霰跣猃彡祆筅",
          fou: "不否缶",
          ca: "拆擦嚓礤",
          cha: "查察差茶插叉刹茬楂岔诧碴嚓喳姹杈汊衩搽槎镲苴檫馇锸猹",
          cai: "才采财材菜彩裁蔡猜踩睬",
          can: "参残餐灿惨蚕掺璨惭粲孱骖黪",
          shen: "信深参身神什审申甚沈伸慎渗肾绅莘呻婶娠砷蜃哂椹葚吲糁渖诜谂矧胂",
          cen: "参岑涔",
          san: "三参散伞叁糁馓毵",
          cang: "藏仓苍沧舱臧伧",
          zang: "藏脏葬赃臧奘驵",
          chen: "称陈沈沉晨琛臣尘辰衬趁忱郴宸谌碜嗔抻榇伧谶龀肜",
          cao: "草操曹槽糙嘈漕螬艚屮",
          ce: "策测册侧厕栅恻",
          ze: "责则泽择侧咋啧仄箦赜笮舴昃迮帻",
          zhai: "债择齐宅寨侧摘窄斋祭翟砦瘵哜",
          dao: "到道导岛倒刀盗稻蹈悼捣叨祷焘氘纛刂帱忉",
          ceng: "层曾蹭噌",
          zha: "查扎炸诈闸渣咋乍榨楂札栅眨咤柞喳喋铡蚱吒怍砟揸痄哳齄",
          chai: "差拆柴钗豺侪虿瘥",
          ci: "次此差词辞刺瓷磁兹慈茨赐祠伺雌疵鹚糍呲粢",
          zi: "资自子字齐咨滋仔姿紫兹孜淄籽梓鲻渍姊吱秭恣甾孳訾滓锱辎趑龇赀眦缁呲笫谘嵫髭茈粢觜耔",
          cuo: "措错磋挫搓撮蹉锉厝嵯痤矬瘥脞鹾",
          chan: "产单阐崭缠掺禅颤铲蝉搀潺蟾馋忏婵孱觇廛谄谗澶骣羼躔蒇冁",
          shan: "山单善陕闪衫擅汕扇掺珊禅删膳缮赡鄯栅煽姗跚鳝嬗潸讪舢苫疝掸膻钐剡蟮芟埏彡骟",
          zhan: "展战占站崭粘湛沾瞻颤詹斩盏辗绽毡栈蘸旃谵搌",
          xin: "新心信辛欣薪馨鑫芯锌忻莘昕衅歆囟忄镡",
          lian: "联连练廉炼脸莲恋链帘怜涟敛琏镰濂楝鲢殓潋裢裣臁奁莶蠊蔹",
          chang: "场长厂常偿昌唱畅倡尝肠敞倘猖娼淌裳徜昶怅嫦菖鲳阊伥苌氅惝鬯",
          zhang: "长张章障涨掌帐胀彰丈仗漳樟账杖璋嶂仉瘴蟑獐幛鄣嫜",
          chao: "超朝潮炒钞抄巢吵剿绰嘲晁焯耖怊",
          zhao: "着照招找召朝赵兆昭肇罩钊沼嘲爪诏濯啁棹笊",
          zhou: "调州周洲舟骤轴昼宙粥皱肘咒帚胄绉纣妯啁诌繇碡籀酎荮",
          che: "车彻撤尺扯澈掣坼砗屮",
          ju: "车局据具举且居剧巨聚渠距句拒俱柜菊拘炬桔惧矩鞠驹锯踞咀瞿枸掬沮莒橘飓疽钜趄踽遽琚龃椐苣裾榘狙倨榉苴讵雎锔窭鞫犋屦醵",
          cheng: "成程城承称盛抢乘诚呈净惩撑澄秤橙骋逞瞠丞晟铛埕塍蛏柽铖酲裎枨",
          rong: "容荣融绒溶蓉熔戎榕茸冗嵘肜狨蝾",
          sheng: "生声升胜盛乘圣剩牲甸省绳笙甥嵊晟渑眚",
          deng: "等登邓灯澄凳瞪蹬噔磴嶝镫簦戥",
          zhi: "制之治质职只志至指织支值知识直致执置止植纸拓智殖秩旨址滞氏枝芝脂帜汁肢挚稚酯掷峙炙栉侄芷窒咫吱趾痔蜘郅桎雉祉郦陟痣蛭帙枳踯徵胝栀贽祗豸鸷摭轵卮轾彘觯絷跖埴夂黹忮骘膣踬",
          zheng: "政正证争整征郑丁症挣蒸睁铮筝拯峥怔诤狰徵钲",
          tang: "堂唐糖汤塘躺趟倘棠烫淌膛搪镗傥螳溏帑羰樘醣螗耥铴瑭",
          chi: "持吃池迟赤驰尺斥齿翅匙痴耻炽侈弛叱啻坻眙嗤墀哧茌豉敕笞饬踟蚩柢媸魑篪褫彳鸱螭瘛眵傺",
          shi: "是时实事市十使世施式势视识师史示石食始士失适试什泽室似诗饰殖释驶氏硕逝湿蚀狮誓拾尸匙仕柿矢峙侍噬嗜栅拭嘘屎恃轼虱耆舐莳铈谥炻豕鲥饣螫酾筮埘弑礻蓍鲺贳",
          qi: "企其起期气七器汽奇齐启旗棋妻弃揭枝歧欺骑契迄亟漆戚岂稽岐琦栖缉琪泣乞砌祁崎绮祺祈凄淇杞脐麒圻憩芪伎俟畦耆葺沏萋骐鳍綦讫蕲屺颀亓碛柒啐汔綮萁嘁蛴槭欹芑桤丌蜞",
          chuai: "揣踹啜搋膪",
          tuo: "托脱拓拖妥驼陀沱鸵驮唾椭坨佗砣跎庹柁橐乇铊沲酡鼍箨柝",
          duo: "多度夺朵躲铎隋咄堕舵垛惰哆踱跺掇剁柁缍沲裰哚隳",
          xue: "学血雪削薛穴靴谑噱鳕踅泶彐",
          chong: "重种充冲涌崇虫宠忡憧舂茺铳艟",
          chou: "筹抽绸酬愁丑臭仇畴稠瞅踌惆俦瘳雠帱",
          qiu: "求球秋丘邱仇酋裘龟囚遒鳅虬蚯泅楸湫犰逑巯艽俅蝤赇鼽糗",
          xiu: "修秀休宿袖绣臭朽锈羞嗅岫溴庥馐咻髹鸺貅",
          chu: "出处础初助除储畜触楚厨雏矗橱锄滁躇怵绌搐刍蜍黜杵蹰亍樗憷楮",
          tuan: "团揣湍疃抟彖",
          zhui: "追坠缀揣椎锥赘惴隹骓缒",
          chuan: "传川船穿串喘椽舛钏遄氚巛舡",
          zhuan: "专转传赚砖撰篆馔啭颛",
          yuan: "元员院原源远愿园援圆缘袁怨渊苑宛冤媛猿垣沅塬垸鸳辕鸢瑗圜爰芫鼋橼螈眢箢掾",
          cuan: "窜攒篡蹿撺爨汆镩",
          chuang: "创床窗闯幢疮怆",
          zhuang: "装状庄壮撞妆幢桩奘僮戆",
          chui: "吹垂锤炊椎陲槌捶棰",
          chun: "春纯醇淳唇椿蠢鹑朐莼肫蝽",
          zhun: "准屯淳谆肫窀",
          cu: "促趋趣粗簇醋卒蹴猝蹙蔟殂徂",
          dun: "吨顿盾敦蹲墩囤沌钝炖盹遁趸砘礅",
          qu: "区去取曲趋渠趣驱屈躯衢娶祛瞿岖龋觑朐蛐癯蛆苣阒诎劬蕖蘧氍黢蠼璩麴鸲磲",
          xu: "需许续须序徐休蓄畜虚吁绪叙旭邪恤墟栩絮圩婿戌胥嘘浒煦酗诩朐盱蓿溆洫顼勖糈砉醑",
          chuo: "辍绰戳淖啜龊踔辶",
          zu: "组族足祖租阻卒俎诅镞菹",
          ji: "济机其技基记计系期际及集级几给积极己纪即继击既激绩急奇吉季齐疾迹鸡剂辑籍寄挤圾冀亟寂暨脊跻肌稽忌饥祭缉棘矶汲畸姬藉瘠骥羁妓讥稷蓟悸嫉岌叽伎鲫诘楫荠戟箕霁嵇觊麂畿玑笈犄芨唧屐髻戢佶偈笄跽蒺乩咭赍嵴虮掎齑殛鲚剞洎丌墼蕺彐芰哜",
          cong: "从丛匆聪葱囱琮淙枞骢苁璁",
          zong: "总从综宗纵踪棕粽鬃偬枞腙",
          cou: "凑辏腠楱",
          cui: "衰催崔脆翠萃粹摧璀瘁悴淬啐隹毳榱",
          wei: "为位委未维卫围违威伟危味微唯谓伪慰尾魏韦胃畏帷喂巍萎蔚纬潍尉渭惟薇苇炜圩娓诿玮崴桅偎逶倭猥囗葳隗痿猬涠嵬韪煨艉隹帏闱洧沩隈鲔軎",
          cun: "村存寸忖皴",
          zuo: "作做座左坐昨佐琢撮祚柞唑嘬酢怍笮阼胙",
          zuan: "钻纂攥缵躜",
          da: "大达打答搭沓瘩惮嗒哒耷鞑靼褡笪怛妲",
          dai: "大代带待贷毒戴袋歹呆隶逮岱傣棣怠殆黛甙埭诒绐玳呔迨",
          tai: "大台太态泰抬胎汰钛苔薹肽跆邰鲐酞骀炱",
          ta: "他它她拓塔踏塌榻沓漯獭嗒挞蹋趿遢铊鳎溻闼",
          dan: "但单石担丹胆旦弹蛋淡诞氮郸耽殚惮儋眈疸澹掸膻啖箪聃萏瘅赕",
          lu: "路六陆录绿露鲁卢炉鹿禄赂芦庐碌麓颅泸卤潞鹭辘虏璐漉噜戮鲈掳橹轳逯渌蓼撸鸬栌氇胪镥簏舻辂垆",
          tan: "谈探坦摊弹炭坛滩贪叹谭潭碳毯瘫檀痰袒坍覃忐昙郯澹钽锬",
          ren: "人任认仁忍韧刃纫饪妊荏稔壬仞轫亻衽",
          jie: "家结解价界接节她届介阶街借杰洁截姐揭捷劫戒皆竭桔诫楷秸睫藉拮芥诘碣嗟颉蚧孑婕疖桀讦疥偈羯袷哜喈卩鲒骱",
          yan: "研严验演言眼烟沿延盐炎燕岩宴艳颜殷彦掩淹阎衍铅雁咽厌焰堰砚唁焉晏檐蜒奄俨腌妍谚兖筵焱偃闫嫣鄢湮赝胭琰滟阉魇酽郾恹崦芫剡鼹菸餍埏谳讠厣罨",
          dang: "当党档荡挡宕砀铛裆凼菪谠",
          tao: "套讨跳陶涛逃桃萄淘掏滔韬叨洮啕绦饕鼗",
          tiao: "条调挑跳迢眺苕窕笤佻啁粜髫铫祧龆蜩鲦",
          te: "特忑忒铽慝",
          de: "的地得德底锝",
          dei: "得",
          di: "的地第提低底抵弟迪递帝敌堤蒂缔滴涤翟娣笛棣荻谛狄邸嘀砥坻诋嫡镝碲骶氐柢籴羝睇觌",
          ti: "体提题弟替梯踢惕剔蹄棣啼屉剃涕锑倜悌逖嚏荑醍绨鹈缇裼",
          tui: "推退弟腿褪颓蜕忒煺",
          you: "有由又优游油友右邮尤忧幼犹诱悠幽佑釉柚铀鱿囿酉攸黝莠猷蝣疣呦蚴莸莜铕宥繇卣牖鼬尢蚰侑",
          dian: "电点店典奠甸碘淀殿垫颠滇癫巅惦掂癜玷佃踮靛钿簟坫阽",
          tian: "天田添填甜甸恬腆佃舔钿阗忝殄畋栝掭",
          zhu: "主术住注助属逐宁著筑驻朱珠祝猪诸柱竹铸株瞩嘱贮煮烛苎褚蛛拄铢洙竺蛀渚伫杼侏澍诛茱箸炷躅翥潴邾槠舳橥丶瘃麈疰",
          nian: "年念酿辗碾廿捻撵拈蔫鲶埝鲇辇黏",
          diao: "调掉雕吊钓刁貂凋碉鲷叼铫铞",
          yao: "要么约药邀摇耀腰遥姚窑瑶咬尧钥谣肴夭侥吆疟妖幺杳舀窕窈曜鹞爻繇徭轺铫鳐崾珧",
          die: "跌叠蝶迭碟爹谍牒耋佚喋堞瓞鲽垤揲蹀",
          she: "设社摄涉射折舍蛇拾舌奢慑赦赊佘麝歙畲厍猞揲滠",
          ye: "业也夜叶射野液冶喝页爷耶邪咽椰烨掖拽曳晔谒腋噎揶靥邺铘揲",
          xie: "些解协写血叶谢械鞋胁斜携懈契卸谐泄蟹邪歇泻屑挟燮榭蝎撷偕亵楔颉缬邂鲑瀣勰榍薤绁渫廨獬躞",
          zhe: "这者着著浙折哲蔗遮辙辄柘锗褶蜇蛰鹧谪赭摺乇磔螫",
          ding: "定订顶丁鼎盯钉锭叮仃铤町酊啶碇腚疔玎耵",
          diu: "丢铥",
          ting: "听庭停厅廷挺亭艇婷汀铤烃霆町蜓葶梃莛",
          dong: "动东董冬洞懂冻栋侗咚峒氡恫胴硐垌鸫岽胨",
          tong: "同通统童痛铜桶桐筒彤侗佟潼捅酮砼瞳恸峒仝嗵僮垌茼",
          zhong: "中重种众终钟忠仲衷肿踵冢盅蚣忪锺舯螽夂",
          dou: "都斗读豆抖兜陡逗窦渎蚪痘蔸钭篼",
          du: "度都独督读毒渡杜堵赌睹肚镀渎笃竺嘟犊妒牍蠹椟黩芏髑",
          duan: "断段短端锻缎煅椴簖",
          dui: "对队追敦兑堆碓镦怼憝",
          rui: "瑞兑锐睿芮蕊蕤蚋枘",
          yue: "月说约越乐跃兑阅岳粤悦曰钥栎钺樾瀹龠哕刖",
          tun: "吞屯囤褪豚臀饨暾氽",
          hui: "会回挥汇惠辉恢徽绘毁慧灰贿卉悔秽溃荟晖彗讳诲珲堕诙蕙晦睢麾烩茴喙桧蛔洄浍虺恚蟪咴隳缋哕",
          wu: "务物无五武午吴舞伍污乌误亡恶屋晤悟吾雾芜梧勿巫侮坞毋诬呜钨邬捂鹜兀婺妩於戊鹉浯蜈唔骛仵焐芴鋈庑鼯牾怃圬忤痦迕杌寤阢",
          ya: "亚压雅牙押鸭呀轧涯崖邪芽哑讶鸦娅衙丫蚜碣垭伢氩桠琊揠吖睚痖疋迓岈砑",
          he: "和合河何核盖贺喝赫荷盒鹤吓呵苛禾菏壑褐涸阂阖劾诃颌嗬貉曷翮纥盍",
          wo: "我握窝沃卧挝涡斡渥幄蜗喔倭莴龌肟硪",
          en: "恩摁蒽",
          n: "嗯唔",
          er: "而二尔儿耳迩饵洱贰铒珥佴鸸鲕",
          fa: "发法罚乏伐阀筏砝垡珐",
          quan: "全权券泉圈拳劝犬铨痊诠荃醛蜷颧绻犭筌鬈悛辁畎",
          fei: "费非飞肥废菲肺啡沸匪斐蜚妃诽扉翡霏吠绯腓痱芾淝悱狒榧砩鲱篚镄",
          pei: "配培坏赔佩陪沛裴胚妃霈淠旆帔呸醅辔锫",
          ping: "平评凭瓶冯屏萍苹乒坪枰娉俜鲆",
          fo: "佛",
          hu: "和护许户核湖互乎呼胡戏忽虎沪糊壶葫狐蝴弧瑚浒鹄琥扈唬滹惚祜囫斛笏芴醐猢怙唿戽槲觳煳鹕冱瓠虍岵鹱烀轷",
          ga: "夹咖嘎尬噶旮伽尕钆尜",
          ge: "个合各革格歌哥盖隔割阁戈葛鸽搁胳舸疙铬骼蛤咯圪镉颌仡硌嗝鬲膈纥袼搿塥哿虼",
          ha: "哈蛤铪",
          xia: "下夏峡厦辖霞夹虾狭吓侠暇遐瞎匣瑕唬呷黠硖罅狎瘕柙",
          gai: "改该盖概溉钙丐芥赅垓陔戤",
          hai: "海还害孩亥咳骸骇氦嗨胲醢",
          gan: "干感赶敢甘肝杆赣乾柑尴竿秆橄矸淦苷擀酐绀泔坩旰疳澉",
          gang: "港钢刚岗纲冈杠缸扛肛罡戆筻",
          jiang: "将强江港奖讲降疆蒋姜浆匠酱僵桨绛缰犟豇礓洚茳糨耩",
          hang: "行航杭巷夯吭桁沆绗颃",
          gong: "工公共供功红贡攻宫巩龚恭拱躬弓汞蚣珙觥肱廾",
          hong: "红宏洪轰虹鸿弘哄烘泓訇蕻闳讧荭黉薨",
          guang: "广光逛潢犷胱咣桄",
          qiong: "穷琼穹邛茕筇跫蛩銎",
          gao: "高告搞稿膏糕镐皋羔锆杲郜睾诰藁篙缟槁槔",
          hao: "好号毫豪耗浩郝皓昊皋蒿壕灏嚎濠蚝貉颢嗥薅嚆",
          li: "理力利立里李历例离励礼丽黎璃厉厘粒莉梨隶栗荔沥犁漓哩狸藜罹篱鲤砺吏澧俐骊溧砾莅锂笠蠡蛎痢雳俪傈醴栎郦俚枥喱逦娌鹂戾砬唳坜疠蜊黧猁鬲粝蓠呖跞疬缡鲡鳢嫠詈悝苈篥轹",
          jia: "家加价假佳架甲嘉贾驾嫁夹稼钾挟拮迦伽颊浃枷戛荚痂颉镓笳珈岬胛袈郏葭袷瘕铗跏蛱恝哿",
          luo: "落罗络洛逻螺锣骆萝裸漯烙摞骡咯箩珞捋荦硌雒椤镙跞瘰泺脶猡倮蠃",
          ke: "可科克客刻课颗渴壳柯棵呵坷恪苛咳磕珂稞瞌溘轲窠嗑疴蝌岢铪颏髁蚵缂氪骒钶锞",
          qia: "卡恰洽掐髂袷咭葜",
          gei: "给",
          gen: "根跟亘艮哏茛",
          hen: "很狠恨痕哏",
          gou: "构购够句沟狗钩拘勾苟垢枸篝佝媾诟岣彀缑笱鞲觏遘",
          kou: "口扣寇叩抠佝蔻芤眍筘",
          gu: "股古顾故固鼓骨估谷贾姑孤雇辜菇沽咕呱锢钴箍汩梏痼崮轱鸪牯蛊诂毂鹘菰罟嘏臌觚瞽蛄酤牿鲴",
          pai: "牌排派拍迫徘湃俳哌蒎",
          gua: "括挂瓜刮寡卦呱褂剐胍诖鸹栝呙",
          tou: "投头透偷愉骰亠",
          guai: "怪拐乖",
          kuai: "会快块筷脍蒯侩浍郐蒉狯哙",
          guan: "关管观馆官贯冠惯灌罐莞纶棺斡矜倌鹳鳏盥掼涫",
          wan: "万完晚湾玩碗顽挽弯蔓丸莞皖宛婉腕蜿惋烷琬畹豌剜纨绾脘菀芄箢",
          ne: "呢哪呐讷疒",
          gui: "规贵归轨桂柜圭鬼硅瑰跪龟匮闺诡癸鳜桧皈鲑刽晷傀眭妫炅庋簋刿宄匦",
          jun: "军均俊君峻菌竣钧骏龟浚隽郡筠皲麇捃",
          jiong: "窘炯迥炅冂扃",
          jue: "决绝角觉掘崛诀獗抉爵嚼倔厥蕨攫珏矍蹶谲镢鳜噱桷噘撅橛孓觖劂爝",
          gun: "滚棍辊衮磙鲧绲丨",
          hun: "婚混魂浑昏棍珲荤馄诨溷阍",
          guo: "国过果郭锅裹帼涡椁囗蝈虢聒埚掴猓崞蜾呙馘",
          hei: "黑嘿嗨",
          kan: "看刊勘堪坎砍侃嵌槛瞰阚龛戡凵莰",
          heng: "衡横恒亨哼珩桁蘅",
          mo: "万没么模末冒莫摩墨默磨摸漠脉膜魔沫陌抹寞蘑摹蓦馍茉嘿谟秣蟆貉嫫镆殁耱嬷麽瘼貊貘",
          peng: "鹏朋彭膨蓬碰苹棚捧亨烹篷澎抨硼怦砰嘭蟛堋",
          hou: "后候厚侯猴喉吼逅篌糇骺後鲎瘊堠",
          hua: "化华划话花画滑哗豁骅桦猾铧砉",
          huai: "怀坏淮徊槐踝",
          huan: "还环换欢患缓唤焕幻痪桓寰涣宦垸洹浣豢奂郇圜獾鲩鬟萑逭漶锾缳擐",
          xun: "讯训迅孙寻询循旬巡汛勋逊熏徇浚殉驯鲟薰荀浔洵峋埙巽郇醺恂荨窨蕈曛獯",
          huang: "黄荒煌皇凰慌晃潢谎惶簧璜恍幌湟蝗磺隍徨遑肓篁鳇蟥癀",
          nai: "能乃奶耐奈鼐萘氖柰佴艿",
          luan: "乱卵滦峦鸾栾銮挛孪脔娈",
          qie: "切且契窃茄砌锲怯伽惬妾趄挈郄箧慊",
          jian: "建间件见坚检健监减简艰践兼鉴键渐柬剑尖肩舰荐箭浅剪俭碱茧奸歼拣捡煎贱溅槛涧堑笺谏饯锏缄睑謇蹇腱菅翦戬毽笕犍硷鞯牮枧湔鲣囝裥踺搛缣鹣蒹谫僭戋趼楗",
          nan: "南难男楠喃囡赧腩囝蝻",
          qian: "前千钱签潜迁欠纤牵浅遣谦乾铅歉黔谴嵌倩钳茜虔堑钎骞阡掮钤扦芊犍荨仟芡悭缱佥愆褰凵肷岍搴箝慊椠",
          qiang: "强抢疆墙枪腔锵呛羌蔷襁羟跄樯戕嫱戗炝镪锖蜣",
          xiang: "向项相想乡象响香降像享箱羊祥湘详橡巷翔襄厢镶飨饷缃骧芗庠鲞葙蟓",
          jiao: "教交较校角觉叫脚缴胶轿郊焦骄浇椒礁佼蕉娇矫搅绞酵剿嚼饺窖跤蛟侥狡姣皎茭峤铰醮鲛湫徼鹪僬噍艽挢敫",
          zhuo: "着著缴桌卓捉琢灼浊酌拙茁涿镯淖啄濯焯倬擢斫棹诼浞禚",
          qiao: "桥乔侨巧悄敲俏壳雀瞧翘窍峭锹撬荞跷樵憔鞘橇峤诮谯愀鞒硗劁缲",
          xiao: "小效销消校晓笑肖削孝萧俏潇硝宵啸嚣霄淆哮筱逍姣箫骁枭哓绡蛸崤枵魈",
          si: "司四思斯食私死似丝饲寺肆撕泗伺嗣祀厮驷嘶锶俟巳蛳咝耜笥纟糸鸶缌澌姒汜厶兕",
          kai: "开凯慨岂楷恺揩锴铠忾垲剀锎蒈",
          jin: "进金今近仅紧尽津斤禁锦劲晋谨筋巾浸襟靳瑾烬缙钅矜觐堇馑荩噤廑妗槿赆衿卺",
          qin: "亲勤侵秦钦琴禽芹沁寝擒覃噙矜嗪揿溱芩衾廑锓吣檎螓",
          jing: "经京精境竞景警竟井惊径静劲敬净镜睛晶颈荆兢靖泾憬鲸茎腈菁胫阱旌粳靓痉箐儆迳婧肼刭弪獍",
          ying: "应营影英景迎映硬盈赢颖婴鹰荧莹樱瑛蝇萦莺颍膺缨瀛楹罂荥萤鹦滢蓥郢茔嘤璎嬴瘿媵撄潆",
          jiu: "就究九酒久救旧纠舅灸疚揪咎韭玖臼柩赳鸠鹫厩啾阄桕僦鬏",
          zui: "最罪嘴醉咀蕞觜",
          juan: "卷捐圈眷娟倦绢隽镌涓鹃鄄蠲狷锩桊",
          suan: "算酸蒜狻",
          yun: "员运云允孕蕴韵酝耘晕匀芸陨纭郧筠恽韫郓氲殒愠昀菀狁",
          qun: "群裙逡麇",
          ka: "卡喀咖咔咯佧胩",
          kang: "康抗扛慷炕亢糠伉钪闶",
          keng: "坑铿吭",
          kao: "考靠烤拷铐栲尻犒",
          ken: "肯垦恳啃龈裉",
          yin: "因引银印音饮阴隐姻殷淫尹荫吟瘾寅茵圻垠鄞湮蚓氤胤龈窨喑铟洇狺夤廴吲霪茚堙",
          kong: "空控孔恐倥崆箜",
          ku: "苦库哭酷裤枯窟挎骷堀绔刳喾",
          kua: "跨夸垮挎胯侉",
          kui: "亏奎愧魁馈溃匮葵窥盔逵睽馗聩喟夔篑岿喹揆隗傀暌跬蒉愦悝蝰",
          kuan: "款宽髋",
          kuang: "况矿框狂旷眶匡筐邝圹哐贶夼诳诓纩",
          que: "确却缺雀鹊阙瘸榷炔阕悫",
          kun: "困昆坤捆琨锟鲲醌髡悃阃",
          kuo: "扩括阔廓蛞",
          la: "拉落垃腊啦辣蜡喇剌旯砬邋瘌",
          lai: "来莱赖睐徕籁涞赉濑癞崃疠铼",
          lan: "兰览蓝篮栏岚烂滥缆揽澜拦懒榄斓婪阑褴罱啉谰镧漤",
          lin: "林临邻赁琳磷淋麟霖鳞凛拎遴蔺吝粼嶙躏廪檩啉辚膦瞵懔",
          lang: "浪朗郎廊狼琅榔螂阆锒莨啷蒗稂",
          liang: "量两粮良辆亮梁凉谅粱晾靓踉莨椋魉墚",
          lao: "老劳落络牢捞涝烙姥佬崂唠酪潦痨醪铑铹栳耢",
          mu: "目模木亩幕母牧莫穆姆墓慕牟牡募睦缪沐暮拇姥钼苜仫毪坶",
          le: "了乐勒肋叻鳓嘞仂泐",
          lei: "类累雷勒泪蕾垒磊擂镭肋羸耒儡嫘缧酹嘞诔檑",
          sui: "随岁虽碎尿隧遂髓穗绥隋邃睢祟濉燧谇眭荽",
          lie: "列烈劣裂猎冽咧趔洌鬣埒捩躐",
          leng: "冷愣棱楞塄",
          ling: "领令另零灵龄陵岭凌玲铃菱棱伶羚苓聆翎泠瓴囹绫呤棂蛉酃鲮柃",
          lia: "俩",
          liao: "了料疗辽廖聊寥缪僚燎缭撂撩嘹潦镣寮蓼獠钌尥鹩",
          liu: "流刘六留柳瘤硫溜碌浏榴琉馏遛鎏骝绺镏旒熘鹨锍",
          lun: "论轮伦仑纶沦抡囵",
          lv: "率律旅绿虑履吕铝屡氯缕滤侣驴榈闾偻褛捋膂稆",
          lou: "楼露漏陋娄搂篓喽镂偻瘘髅耧蝼嵝蒌",
          mao: "贸毛矛冒貌茂茅帽猫髦锚懋袤牦卯铆耄峁瑁蟊茆蝥旄泖昴瞀",
          long: "龙隆弄垄笼拢聋陇胧珑窿茏咙砻垅泷栊癃",
          nong: "农浓弄脓侬哝",
          shuang: "双爽霜孀泷",
          shu: "术书数属树输束述署朱熟殊蔬舒疏鼠淑叔暑枢墅俞曙抒竖蜀薯梳戍恕孰沭赎庶漱塾倏澍纾姝菽黍腧秫毹殳疋摅",
          shuai: "率衰帅摔甩蟀",
          lve: "略掠锊",
          ma: "么马吗摩麻码妈玛嘛骂抹蚂唛蟆犸杩",
          me: "么麽",
          mai: "买卖麦迈脉埋霾荬劢",
          man: "满慢曼漫埋蔓瞒蛮鳗馒幔谩螨熳缦镘颟墁鞔",
          mi: "米密秘迷弥蜜谜觅靡泌眯麋猕谧咪糜宓汨醚嘧弭脒冖幂祢縻蘼芈糸敉",
          men: "们门闷瞒汶扪焖懑鞔钔",
          mang: "忙盲茫芒氓莽蟒邙硭漭",
          meng: "蒙盟梦猛孟萌氓朦锰檬勐懵蟒蜢虻黾蠓艨甍艋瞢礞",
          miao: "苗秒妙描庙瞄缪渺淼藐缈邈鹋杪眇喵",
          mou: "某谋牟缪眸哞鍪蛑侔厶",
          miu: "缪谬",
          mei: "美没每煤梅媒枚妹眉魅霉昧媚玫酶镁湄寐莓袂楣糜嵋镅浼猸鹛",
          wen: "文问闻稳温纹吻蚊雯紊瘟汶韫刎璺玟阌",
          mie: "灭蔑篾乜咩蠛",
          ming: "明名命鸣铭冥茗溟酩瞑螟暝",
          na: "内南那纳拿哪娜钠呐捺衲镎肭",
          nei: "内那哪馁",
          nuo: "难诺挪娜糯懦傩喏搦锘",
          ruo: "若弱偌箬",
          nang: "囊馕囔曩攮",
          nao: "脑闹恼挠瑙淖孬垴铙桡呶硇猱蛲",
          ni: "你尼呢泥疑拟逆倪妮腻匿霓溺旎昵坭铌鲵伲怩睨猊",
          nen: "嫩恁",
          neng: "能",
          nin: "您恁",
          niao: "鸟尿溺袅脲茑嬲",
          nie: "摄聂捏涅镍孽捻蘖啮蹑嗫臬镊颞乜陧",
          niang: "娘酿",
          ning: "宁凝拧泞柠咛狞佞聍甯",
          nu: "努怒奴弩驽帑孥胬",
          nv: "女钕衄恧",
          ru: "入如女乳儒辱汝茹褥孺濡蠕嚅缛溽铷洳薷襦颥蓐",
          nuan: "暖",
          nve: "虐疟",
          re: "热若惹喏",
          ou: "区欧偶殴呕禺藕讴鸥瓯沤耦怄",
          pao: "跑炮泡抛刨袍咆疱庖狍匏脬",
          pou: "剖掊裒",
          pen: "喷盆湓",
          pie: "瞥撇苤氕丿",
          pin: "品贫聘频拼拚颦姘嫔榀牝",
          se: "色塞瑟涩啬穑铯槭",
          qing: "情青清请亲轻庆倾顷卿晴氢擎氰罄磬蜻箐鲭綮苘黥圊檠謦",
          zan: "赞暂攒堑昝簪糌瓒錾趱拶",
          shao: "少绍召烧稍邵哨韶捎勺梢鞘芍苕劭艄筲杓潲",
          sao: "扫骚嫂梢缫搔瘙臊埽缲鳋",
          sha: "沙厦杀纱砂啥莎刹杉傻煞鲨霎嗄痧裟挲铩唼歃",
          xuan: "县选宣券旋悬轩喧玄绚渲璇炫萱癣漩眩暄煊铉楦泫谖痃碹揎镟儇",
          ran: "然染燃冉苒髯蚺",
          rang: "让壤攘嚷瓤穰禳",
          rao: "绕扰饶娆桡荛",
          reng: "仍扔",
          ri: "日",
          rou: "肉柔揉糅鞣蹂",
          ruan: "软阮朊",
          run: "润闰",
          sa: "萨洒撒飒卅仨脎",
          suo: "所些索缩锁莎梭琐嗦唆唢娑蓑羧挲桫嗍睃",
          sai: "思赛塞腮噻鳃",
          shui: "说水税谁睡氵",
          sang: "桑丧嗓搡颡磉",
          sen: "森",
          seng: "僧",
          shai: "筛晒",
          shang: "上商尚伤赏汤裳墒晌垧觞殇熵绱",
          xing: "行省星腥猩惺兴刑型形邢饧醒幸杏性姓陉荇荥擤悻硎",
          shou: "收手受首售授守寿瘦兽狩绶艏扌",
          shuo: "说数硕烁朔铄妁槊蒴搠",
          su: "速素苏诉缩塑肃俗宿粟溯酥夙愫簌稣僳谡涑蔌嗉觫",
          shua: "刷耍唰",
          shuan: "栓拴涮闩",
          shun: "顺瞬舜吮",
          song: "送松宋讼颂耸诵嵩淞怂悚崧凇忪竦菘",
          sou: "艘搜擞嗽嗖叟馊薮飕嗾溲锼螋瞍",
          sun: "损孙笋荪榫隼狲飧",
          teng: "腾疼藤滕誊",
          tie: "铁贴帖餮萜",
          tu: "土突图途徒涂吐屠兔秃凸荼钍菟堍酴",
          wai: "外歪崴",
          wang: "王望往网忘亡旺汪枉妄惘罔辋魍",
          weng: "翁嗡瓮蓊蕹",
          zhua: "抓挝爪",
          yang: "样养央阳洋扬杨羊详氧仰秧痒漾疡泱殃恙鸯徉佯怏炀烊鞅蛘",
          xiong: "雄兄熊胸凶匈汹芎",
          yo: "哟唷",
          yong: "用永拥勇涌泳庸俑踊佣咏雍甬镛臃邕蛹恿慵壅痈鳙墉饔喁",
          za: "杂扎咱砸咋匝咂拶",
          zai: "在再灾载栽仔宰哉崽甾",
          zao: "造早遭枣噪灶燥糟凿躁藻皂澡蚤唣",
          zei: "贼",
          zen: "怎谮",
          zeng: "增曾综赠憎锃甑罾缯",
          zhei: "这",
          zou: "走邹奏揍诹驺陬楱鄹鲰",
          zhuai: "转拽",
          zun: "尊遵鳟樽撙",
          dia: "嗲",
          nou: "耨"
        };
      t.pinyin_dict_notone = s;
      var c = {
        parseDict: function() {
          for (var e in o.firstletter = u, o.notone = {}, o.py2hz = s, s)
            for (var t = s[e], a = 0, l = t.length; a < l; a++) o.notone[t[a]] = e
        },
        getPinyin: function(e, t, a, l) {
          if (!e || /^ +$/g.test(e)) return "";
          t = null == t ? "" : t, a = null != a && a, l = null != l && l;
          var n = [];
          if (o.withtone)
            for (var r = 0, i = e.length; r < i; r++) {
              var u = o.withtone[e[r]];
              u && (l || (u = u.replace(/ .*$/g, "")), a || (u = this.removeTone(u))), n.push(u || e[r])
            } else {
              if (!o.notone) throw "抱歉，未找到合适的拼音字典文件！";
              for (a && console.warn("pinyin_dict_notone 字典文件不支持声调！"), l && console.warn("pinyin_dict_notone 字典文件不支持多音字！"), r = 0, i = e.length; r < i; r++) {
                var s = e.charAt(r);
                o.notone[s] && (o.notone[s] = o.notone[s].substring(0, 1).toUpperCase() + o.notone[s].substring(1)), n.push(o.notone[s] || s)
              }
            }
          return l ? window.pinyin_dict_polyphone ? function(e, t, a, l) {
            var n = window.pinyin_dict_polyphone,
              r = n[e];
            if (r) {
              r = r.split(" ");
              for (var i = 0; i < r.length; i++) t[i] = r[i] || t[i], l || (t[i] = c.removeTone(t[i]));
              return t.join(a)
            }
            for (i = 0; i < e.length; i++) {
              r = "";
              for (var o = 0; o < 7 && i + o < e.length && /^[\u2E80-\u9FFF]+$/.test(e[i + o]); o++) {
                var u = n[r += e[i + o]];
                if (u) {
                  u = u.split(" ");
                  for (var s = 0; s <= o; s++) u[s] && (t[i + s] = l ? u[s] : c.removeTone(u[s]));
                  break
                }
              }
            }
            for (i = 0; i < t.length; i++) t[i] = t[i].replace(/ .*$/g, "");
            return t.join(a)
          }(e, n, t, a) : f(n, " ", t) : n.join(t)
        },
        getFirstLetter: function(e, t) {
          if (t = null != t && t, !e || /^ +$/g.test(e)) return "";
          if (o.firstletter) {
            for (var a = [], l = 0; l < e.length; l++) {
              var n = e.charCodeAt(l),
                r = e.charAt(l);
              n >= 19968 && n <= 40869 && (r = o.firstletter.all.charAt(n - 19968), t && (r = o.firstletter.polyphone[n] || r)), a.push(r)
            }
            return t ? f(a, "", "") : a.join("")
          }
          var i = this.getPinyin(e, " ", !1, t);
          for (i = i instanceof Array ? i : [i], a = [], l = 0; l < i.length; l++) a.push(i[l].replace(/(^| )(\w)\w*/g, (function(e, t, a) {
            return a.toUpperCase()
          })));
          return t ? v(a) : a[0]
        },
        getHanzi: function(e) {
          if (!o.py2hz) throw "抱歉，未找到合适的拼音字典文件！";
          return o.py2hz[e] || ""
        },
        removeTone: function(e) {
          var t = {
            "ā": "a1",
            "á": "a2",
            "ǎ": "a3",
            "à": "a4",
            "ō": "o1",
            "ó": "o2",
            "ǒ": "o3",
            "ò": "o4",
            "ē": "e1",
            "é": "e2",
            "ě": "e3",
            "è": "e4",
            "ī": "i1",
            "í": "i2",
            "ǐ": "i3",
            "ì": "i4",
            "ū": "u1",
            "ú": "u2",
            "ǔ": "u3",
            "ù": "u4",
            "ü": "v0",
            "ǖ": "v1",
            "ǘ": "v2",
            "ǚ": "v3",
            "ǜ": "v4",
            "ń": "n2",
            "ň": "n3",
            "": "m2"
          };
          return e.replace(/[āáǎàōóǒòēéěèīíǐìūúǔùüǖǘǚǜńň]/g, (function(e) {
            return t[e][0]
          }))
        }
      };

      function f(e, t, a) {
        t = t || "";
        for (var l = [""], n = [], r = 0; r < e.length; r++) {
          n = [];
          for (var i = e[r].split(t), o = 0; o < i.length; o++)
            for (var u = 0; u < l.length; u++) n.push(l[u] + (l[u] ? a : "") + i[o]);
          l = n
        }
        return v(l)
      }

      function v(e) {
        for (var t = [], a = {}, l = 0; l < e.length; l++) {
          var n = (0, r.default)(e[l]) + e[l];
          a[n] || (t.push(e[l]), a[n] = !0)
        }
        return t
      }
      t.pinyinUtil = c, c.parseDict(), c.dict = o, e.exports = {
        pinyinUtil: c
      }
    },
    e4d6: function(e, t, a) {
      (function(e) {
        var l = a("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var n = l(a("67ad")),
          r = l(a("0bdb")),
          i = l(a("0dc1")),
          o = l(a("a667")),
          u = new(function() {
            function t() {
              var e = this;
              (0, n.default)(this, t), this.config = {
                baseUrl: "",
                header: {},
                method: "POST",
                dataType: "json",
                responseType: "text",
                showLoading: !0,
                loadingText: "请求中...",
                loadingTime: 800,
                timer: null,
                originalData: !1,
                loadingMask: !0
              }, this.interceptor = {
                request: null,
                response: null
              }, this.get = function(t) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return e.request({
                  method: "GET",
                  url: t,
                  header: l,
                  data: a
                })
              }, this.post = function(t) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return e.request({
                  url: t,
                  method: "POST",
                  header: l,
                  data: a
                })
              }, this.put = function(t) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return e.request({
                  url: t,
                  method: "PUT",
                  header: l,
                  data: a
                })
              }, this.delete = function(t) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return e.request({
                  url: t,
                  method: "DELETE",
                  header: l,
                  data: a
                })
              }
            }
            return (0, r.default)(t, [{
              key: "setConfig",
              value: function(e) {
                this.config = (0, i.default)(this.config, e)
              }
            }, {
              key: "request",
              value: function() {
                var t = this,
                  a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (this.interceptor.request && "function" == typeof this.interceptor.request) {
                  var l = this.interceptor.request(a);
                  if (!1 === l) return !1;
                  this.options = l
                }
                return a.dataType = a.dataType || this.config.dataType, a.responseType = a.responseType || this.config.responseType, a.url = a.url || "", a.params = a.params || {}, a.header = Object.assign(this.config.header, a.header), a.method = a.method || this.config.method, new Promise((function(l, n) {
                  a.complete = function(a) {
                    if (e.hideLoading(), clearTimeout(t.config.timer), t.timer = null, t.config.originalData)
                      if (t.interceptor.response && "function" == typeof t.interceptor.response) {
                        var r = t.interceptor.response(a);
                        !1 !== r ? l(r) : n(a)
                      } else l(a);
                    else if (200 == a.statusCode)
                      if (t.interceptor.response && "function" == typeof t.interceptor.response) {
                        var i = t.interceptor.response(a.data);
                        !1 !== i ? l(i) : n(a.data)
                      } else l(a.data);
                    else a.errMsg && e.showModal({
                      title: a.errMsg
                    }), n(a)
                  }, a.url = o.default.url(a.url) ? a.url : t.config.baseUrl + (0 == a.url.indexOf("/") ? a.url : "/" + a.url), t.config.showLoading && !t.config.timer && (t.config.timer = setTimeout((function() {
                    e.showLoading({
                      title: t.config.loadingText,
                      mask: t.config.loadingMask
                    }), t.config.timer = null
                  }), t.config.loadingTime)), e.request(a)
                }))
              }
            }]), t
          }());
        t.default = u
      }).call(this, a("df3c").default)
    },
    e57b: function(e, t) {
      function a(e, t) {
        var a = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!a) {
          if (Array.isArray(e) || (a = function(e, t) {
              if (e) {
                if ("string" == typeof e) return l(e, t);
                var a = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? l(e, t) : void 0
              }
            }(e)) || t && e && "number" == typeof e.length) {
            a && (e = a);
            var n = 0,
              r = function() {};
            return {
              s: r,
              n: function() {
                return n >= e.length ? {
                  done: !0
                } : {
                  done: !1,
                  value: e[n++]
                }
              },
              e: function(e) {
                throw e
              },
              f: r
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var i, o = !0,
          u = !1;
        return {
          s: function() {
            a = a.call(e)
          },
          n: function() {
            var e = a.next();
            return o = e.done, e
          },
          e: function(e) {
            u = !0, i = e
          },
          f: function() {
            try {
              o || null == a.return || a.return()
            } finally {
              if (u) throw i
            }
          }
        }
      }

      function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, l = new Array(t); a < t; a++) l[a] = e[a];
        return l
      }! function() {
        var t = {
          isGradient: function(e) {
            return !(!e || !e.startsWith("linear") && !e.startsWith("radial"))
          },
          doGradient: function(e, t, a, n) {
            e.startsWith("linear") ? function(e, t, a, n) {
              for (var r = function(e, t, a) {
                  var l, n = e.match(/([-]?\d{1,3})deg/);
                  switch (n && n[1] ? parseFloat(n[1]) : 0) {
                    case 0:
                      console.log("case 0:"), l = [0, -a / 2, 0, a / 2];
                      break;
                    case 90:
                      console.log("case 90:"), l = [t / 2, 0, -t / 2, 0];
                      break;
                    case -90:
                      console.log("case -90:"), l = [-t / 2, 0, t / 2, 0];
                      break;
                    case 180:
                      console.log("case 180:"), l = [0, a / 2, 0, -a / 2];
                      break;
                    case -180:
                      console.log("case -180:"), l = [0, -a / 2, 0, a / 2];
                      break;
                    default:
                      var r = 0,
                        i = 0,
                        o = 0,
                        u = 0;
                      n[1] > 0 && n[1] < 90 ? (o = -(r = t / 2 - (t / 2 * Math.tan((90 - n[1]) * Math.PI * 2 / 360) - a / 2) * Math.sin(2 * (90 - n[1]) * Math.PI * 2 / 360) / 2), i = -(u = Math.tan((90 - n[1]) * Math.PI * 2 / 360) * r)) : n[1] > -180 && n[1] < -90 ? (o = -(r = -t / 2 + (t / 2 * Math.tan((90 - n[1]) * Math.PI * 2 / 360) - a / 2) * Math.sin(2 * (90 - n[1]) * Math.PI * 2 / 360) / 2), i = -(u = Math.tan((90 - n[1]) * Math.PI * 2 / 360) * r)) : n[1] > 90 && n[1] < 180 ? (o = -(r = t / 2 + (-t / 2 * Math.tan((90 - n[1]) * Math.PI * 2 / 360) - a / 2) * Math.sin(2 * (90 - n[1]) * Math.PI * 2 / 360) / 2), i = -(u = Math.tan((90 - n[1]) * Math.PI * 2 / 360) * r)) : (o = -(r = -t / 2 - (-t / 2 * Math.tan((90 - n[1]) * Math.PI * 2 / 360) - a / 2) * Math.sin(2 * (90 - n[1]) * Math.PI * 2 / 360) / 2), i = -(u = Math.tan((90 - n[1]) * Math.PI * 2 / 360) * r)), l = [r, i, o, u]
                  }
                  return l
                }(a, e, t), i = n.createLinearGradient(r[0], r[1], r[2], r[3]), o = a.match(/linear-gradient\((.+)\)/)[1], u = l(o.substring(o.indexOf(",") + 1)), s = 0; s < u.colors.length; s++) i.addColorStop(u.percents[s], u.colors[s]);
              n.setFillStyle(i), n.fillRect(-e / 2, -t / 2, e, t)
            }(t, a, e, n) : e.startsWith("radial") && function(e, t, a, n) {
              for (var r = l(a.match(/radial-gradient\((.+)\)/)[1]), i = n.createCircularGradient(0, 0, e < t ? t / 2 : e / 2), o = 0; o < r.colors.length; o++) i.addColorStop(r.percents[o], r.colors[o]);
              n.setFillStyle(i), n.fillRect(-e / 2, -t / 2, e, t)
            }(t, a, e, n)
          }
        };

        function l(e) {
          var t, l = [],
            n = [],
            r = a(e.substring(0, e.length - 1).split("%,"));
          try {
            for (r.s(); !(t = r.n()).done;) {
              var i = t.value;
              l.push(i.substring(0, i.lastIndexOf(" ")).trim()), n.push(i.substring(i.lastIndexOf(" "), i.length) / 100)
            }
          } catch (e) {
            r.e(e)
          } finally {
            r.f()
          }
          return {
            colors: l,
            percents: n
          }
        }
        e.exports = {
          api: t
        }
      }()
    },
    e6db: function(e, t, a) {
      var l = a("3b2d").default;
      e.exports = function(e, t) {
        if ("object" != l(e) || !e) return e;
        var a = e[Symbol.toPrimitive];
        if (void 0 !== a) {
          var n = a.call(e, t || "default");
          if ("object" != l(n)) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === t ? String : Number)(e)
      }, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    e846: function(e, t) {
      var a = {
          ZH: {
            dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            shortDayNames: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
            monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            shortMonthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
          },
          US: {
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            shortDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            shortMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
          }
        },
        l = {
          format: function(e, t) {
            var a = {
              "M+": e.getMonth() + 1,
              "d+": e.getDate(),
              "h+": e.getHours(),
              "m+": e.getMinutes(),
              "s+": e.getSeconds(),
              "q+": Math.floor((e.getMonth() + 3) / 3),
              S: e.getMilliseconds()
            };
            for (var l in this.isNotEmpty(t) || (t = "yyyy-MM-dd hh:mm:ss"), /(y+)/.test(t) && (t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length))), a) new RegExp("(" + l + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? a[l] : ("00" + a[l]).substr(("" + a[l]).length)));
            return t
          },
          formatToDate: function(e) {
            return this.isNotEmpty(e) ? new Date(Date.parse(e.replace(/-/g, "/"))) : ""
          },
          getDateStart: function(e) {
            var t = this.getDateStartStr(e, "yyyy-MM-dd");
            return new Date(Date.parse(t))
          },
          getDateStartStr: function(e, t) {
            void 0 === t && (t = "yyyy-MM-dd");
            var a = this.format(e, t);
            return a += " 00:00:00"
          },
          getDateEnd: function(e) {
            var t = this.getDateEndStr(e, "yyyy-MM-dd");
            return new Date(Date.parse(t))
          },
          getDateEndStr: function(e, t) {
            void 0 === t && (t = "yyyy-MM-dd");
            var a = this.format(e, t);
            return a += " 23:59:59"
          },
          compareDate: function(e, t) {
            if (e && t) {
              if (e.getTime() > t.getTime()) return 1;
              if (e.getTime() == t.getTime()) return 0;
              if (e.getTime() < t.getTime()) return -1
            }
          },
          getWeek: function(e, t) {
            if (e) {
              this.isNotEmpty(t) || (t = 0);
              var l = e.getDay(),
                n = "";
              switch (t) {
                case this.WEEKTYPE.ZH_DAYNAME:
                  n = a.ZH.dayNames[l];
                  break;
                case this.WEEKTYPE.ZH_SDAYNAME:
                  n = a.ZH.shortDayNames[l];
                  break;
                case this.WEEKTYPE.US_DAYNAME:
                  n = a.US.dayNames[l];
                  break;
                case this.WEEKTYPE.US_SDAYNAME:
                  n = a.US.shortDayNames[l]
              }
              return n
            }
          },
          isLeapYear: function(e) {
            return e instanceof Date ? 0 == e.getYear() % 4 && (e.getYear() % 100 != 0 || e.getYear() % 400 == 0) : (console.warn("argument format is wrong"), !1)
          },
          isValidDate: function(e) {
            if (this.isNotEmpty(e)) {
              var t = e.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
              if (null == t) return !1;
              var a = new Date(t[1], t[3] - 1, t[4]);
              return 0 != (a.getFullYear() == t[1] && a.getMonth() + 1 == t[3] && a.getDate() == t[4])
            }
          },
          addDay: function(e, t) {
            return this.isNotEmpty(e) && this.isNotEmpty(t) && e instanceof Date && "number" == typeof t ? e.setDate(e.getDate() + t) : console.warn("date or dayNum format wrong"), e
          },
          addDayStr: function(e, t) {
            var a = "";
            return this.isNotEmpty(e) && this.isNotEmpty(t) && "number" == typeof t ? (a = this.formatToDate(e)).setDate(a.getDate() + t) : console.warn("dateStr or dayNum format wrong"), a
          },
          addMonth: function(e, t) {
            return this.isNotEmpty(e) && this.isNotEmpty(t) && e instanceof Date && "number" == typeof t ? e.setMonth(e.getMonth() + t) : console.warn("date or monthNum format wrong"), e
          },
          addMonthStr: function(e, t) {
            var a = "";
            return this.isNotEmpty(e) && this.isNotEmpty(t) && "number" == typeof t ? (a = this.formatToDate(e)).setMonth(a.getMonth() + t) : console.warn("date or monthNum format wrong"), a
          },
          addYear: function(e, t) {
            return this.isNotEmpty(e) && this.isNotEmpty(t) && e instanceof Date && "number" == typeof t ? e.setYear(e.getFullYear() + t) : console.warn("date or yearNum format wrong"), e
          },
          addYearStr: function(e, t) {
            var a = "";
            return this.isNotEmpty(e) && this.isNotEmpty(t) && "number" == typeof t ? (a = this.formatToDate(e)).setYear(a.getFullYear() + t) : console.warn("date or yearNum format wrong"), a
          },
          isNotEmpty: function(e) {
            return "" != e && null != e && void 0 !== e || (console.warn("argument format is wrong"), !1)
          },
          WEEKTYPE: {
            ZH_DAYNAME: 0,
            ZH_SDAYNAME: 1,
            US_DAYNAME: 2,
            US_SDAYNAME: 3
          }
        };
      e.exports = l
    },
    ec4b: function(e, t, a) {
      (function(e, l) {
        var n = a("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.base64ToPath = function(t) {
          var a = /data:image\/(\w+);base64,(.*)/.exec(t) || [],
            l = (0, o.default)(a, 3),
            n = l[1];
          return l[2], new Promise((function(a, l) {
            var r = e.getFileSystemManager();
            n || l(new Error("ERROR_BASE64SRC_PARSE"));
            var i = (new Date).getTime(),
              o = f(),
              u = "".concat(o.env.USER_DATA_PATH, "/").concat(i, ".").concat(n);
            r.writeFile({
              filePath: u,
              data: t.replace(/^data:\S+\/\S+;base64,/, ""),
              encoding: "base64",
              success: function() {
                a(u)
              },
              fail: function(e) {
                l(e)
              }
            })
          }))
        }, t.compareVersion = function(e, t) {
          e = e.split("."), t = t.split(".");
          for (var a = Math.max(e.length, t.length); e.length < a;) e.push("0");
          for (; t.length < a;) t.push("0");
          for (var l = 0; l < a; l++) {
            var n = parseInt(e[l], 10),
              r = parseInt(t[l], 10);
            if (n > r) return 1;
            if (n < r) return -1
          }
          return 0
        }, t.downloadFile = function(t) {
          return t ? new Promise((function(a, l) {
            if (s[t]) return l();
            s[t] = 1, e.downloadFile({
              url: t,
              success: function(e) {
                a(e)
              },
              fail: function(e) {
                l(e)
              }
            })
          })) : Promise.reject({
            err: "no url"
          })
        }, t.getImageInfo = function(t) {
          return new Promise(function() {
            var a = (0, i.default)(r.default.mark((function a(l, n) {
              return r.default.wrap((function(a) {
                for (;;) switch (a.prev = a.next) {
                  case 0:
                    s[t] && s[t].errMsg ? l(s[t]) : e.getImageInfo({
                      src: t,
                      success: function(e) {
                        u ? l(e) : (s[t] = e, l(s[t]))
                      },
                      fail: function(e) {
                        n({
                          err: e,
                          path: t
                        })
                      }
                    });
                  case 1:
                  case "end":
                    return a.stop()
                }
              }), a)
            })));
            return function(e, t) {
              return a.apply(this, arguments)
            }
          }())
        }, t.isBase64 = void 0, t.isNumber = c, t.pathToBase64 = function(t) {
          return /^data:/.test(t) ? t : new Promise((function(a, l) {
            e.canIUse("getFileSystemManager") && e.getFileSystemManager().readFile({
              filePath: t,
              encoding: "base64",
              success: function(e) {
                a("data:image/png;base64," + e.data)
              },
              fail: function(e) {
                l(e)
              }
            })
          }))
        }, t.prefix = void 0, t.sleep = function(e) {
          return new Promise((function(t) {
            return setTimeout(t, e)
          }))
        }, t.toPx = function t(a, l) {
          var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if ("number" == typeof a) return a;
          if (c(a)) return 1 * a;
          if ("string" == typeof a) {
            var r = /^-?([0-9]+)?([.]{1}[0-9]+){0,1}(em|rpx|px|%)$/g,
              i = r.exec(a);
            if (!a || !i) return 0;
            var o = i[3];
            a = parseFloat(a);
            var u = 0;
            return "rpx" === o ? u = e.upx2px(a) : "px" === o ? u = 1 * a : "%" === o ? u = a * t(l) / 100 : "em" === o && (u = a * t(l || 14)), n ? 1 * u.toFixed(2) : Math.round(u)
          }
          return 0
        };
        var r = n(a("7eb4")),
          i = n(a("ee10")),
          o = n(a("34cf"));
        t.isBase64 = function(e) {
          return /^data:image\/(\w+);base64/.test(e)
        };
        var u = ["devtools"].includes(e.getSystemInfoSync().platform),
          s = {};

        function c(e) {
          return /^-?\d+(\.\d+)?$/.test(e)
        }
        var f = function() {
          return l
        };
        t.prefix = f
      }).call(this, a("df3c").default, a("3223").default)
    },
    ed45: function(e, t) {
      e.exports = function(e) {
        if (Array.isArray(e)) return e
      }, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    ee0e: function(e, t, a) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return e.sort((function() {
          return Math.random() - .5
        }))
      }
    },
    ee10: function(e, t) {
      function a(e, t, a, l, n, r, i) {
        try {
          var o = e[r](i),
            u = o.value
        } catch (e) {
          return void a(e)
        }
        o.done ? t(u) : Promise.resolve(u).then(l, n)
      }
      e.exports = function(e) {
        return function() {
          var t = this,
            l = arguments;
          return new Promise((function(n, r) {
            var i = e.apply(t, l);

            function o(e) {
              a(i, n, r, o, u, "next", e)
            }

            function u(e) {
              a(i, n, r, o, u, "throw", e)
            }
            o(void 0)
          }))
        }
      }, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    f2de: function(e, t, a) {
      var l = a("47a9");
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0, l(a("02e3"));
      t.default = {
        state: {
          shopCartNum: 0
        },
        getters: {
          shopCartNum: function(e) {
            return e.shopCartNum
          }
        },
        mutations: {
          SET_ORDERENSURE: function(e, t) {
            e.shopCartNum = t
          }
        },
        actions: {}
      }
    },
    f40e: function(e, t) {},
    f4b4: function(e, t, a) {
      (function(e) {
        var l = a("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var n = l(a("d724")),
          r = (l(a("02e3")), l(a("2194"))),
          i = a("e846");

        function o() {
          var e = getCurrentPages();
          return e[e.length - 1]
        }

        function u(e, t) {
          var a = r.default.enc.Utf8.parse(t),
            l = r.default.enc.Utf8.parse(JSON.stringify(e));
          return r.default.AES.encrypt(l, a, {
            mode: r.default.mode.ECB,
            padding: r.default.pad.Pkcs7
          }).ciphertext.toString()
        }

        function s() {
          var t = e.getStorageSync("wxopenid"),
            a = JSON.parse(JSON.stringify(n.default.getters.userLog));
          if (n.default.commit("SET_USERLOG", []), a && a.length > 0) {
            if (a.forEach((function(e) {
                e.openId = t
              })), getApp().globalData.requestUrl.indexOf("eshopapi") < 0) return;
            var l = {
              data: u(a, "xsYc029dbPhO6sI9"),
              mode: 1
            };
            e.request({
              url: getApp().globalData.requestUrl + "data/app/v1/buriedPoint",
              method: "POST",
              data: l,
              success: function(e) {}
            })
          }
        }
        var c = {
          analyse: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "click",
              l = e.getStorageSync("wxopenid"),
              r = n.default.getters.userInfor || {
                mobilePhone: ""
              },
              u = "",
              c = "",
              f = "",
              v = "",
              h = "view",
              d = "1.9.6",
              b = n.default.getters.sourcePage,
              p = n.default.getters.systemInfo,
              g = o() || {
                route: "",
                options: ""
              };
            if (a) {
              switch (a) {
                case "appShow":
                  u = "小程序切前台", c = a, h = "app", f = t.pageId || "";
                  break;
                case "appHide":
                  u = "小程序切后台", c = a, h = "app", f = t.pageId || "";
                  break;
                case "show":
                  u = "页面打开", c = a, f = t.pageId || "";
                  break;
                case "hide":
                  u = "页面关闭", c = a, f = t.pageId || "";
                  break;
                case "click":
                  u = t.eventName || "", c = t.eventTag || "", v = t.eventParams || "", h = "click";
                  break;
                case "onShareAppMessage":
                  u = "分享用户", c = a, v = t.eventParams || "";
                  break;
                case "onShareTimeline":
                  u = "分享朋友圈", c = a, v = t.eventParams || ""
              }
              var y = {
                  openId: l,
                  mobile: r.mobilePhone,
                  eventName: u,
                  eventTag: c,
                  eventType: h,
                  eventTime: t.eventTime || i.format(new Date, "yyyy-MM-dd hh:mm:ss:S"),
                  page: g ? g.route : "",
                  path: g ? g.route : "",
                  pageParams: g.options,
                  eventParams: v,
                  sourcePage: b || "",
                  platform: "微信小程序",
                  version: d,
                  device: p.model,
                  channel: e.getStorageSync("channel_header") || "",
                  origin: e.getStorageSync("source_header") || "",
                  scene: e.getStorageSync("scene_mp") || "",
                  pageId: f
                },
                S = n.default.getters.userLog;
              "show" == a && (b = y.path, n.default.commit("SET_SOURCE_PAGE", b)), n.default.commit("SET_LASTTYPE", a), S.push(y), n.default.commit("SET_USERLOG", S), S.length >= 10 && s()
            }
          },
          subData: s,
          encrypt: u
        };
        t.default = c
      }).call(this, a("df3c").default)
    },
    f599: function(e, t, a) {
      (function(e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        t.default = function(t) {
          var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1500;
          e.showToast({
            title: t,
            icon: "none",
            duration: a
          })
        }
      }).call(this, a("df3c").default)
    }
  }
]);
