require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["union/pages/aiReplacement/list"], {
    "15fa": function(t, e, n) {
      (function(t) {
        var a = n("47a9");
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var i = a(n("7eb4")),
          o = a(n("ee10")),
          s = {
            data: function() {
              return {
                smallScreen: !1,
                showLoading: !1,
                showPlay: !1,
                dataList: [],
                option: {
                  videoUrl: "",
                  imageUrl: ""
                },
                time: null
              }
            },
            onLoad: function() {
              var e = t.getSystemInfoSync().screenHeight;
              console.log(e, "屏幕高度小于750"), e < 750 ? (console.log("屏幕高度小于750"), this.smallScreen = !0) : (console.log("屏幕高度大于等于750"), this.smallScreen = !1)
            },
            onShow: function() {
              this.$util.isLogin("/union/pages/aiReplacement/list") && this.getDataList()
            },
            onUnload: function() {
              this.time && (clearTimeout(this.time), this.time = null)
            },
            methods: {
              download: function() {
                var e = this;
                return (0, o.default)(i.default.mark((function n() {
                  var a, o;
                  return i.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        return n.next = 2, t.showLoading({
                          title: "下载中"
                        });
                      case 2:
                        return n.next = 4, t.downloadFile({
                          url: e.option.videoUrl
                        });
                      case 4:
                        return a = n.sent, o = a[1].tempFilePath, n.next = 8, t.saveVideoToPhotosAlbum({
                          filePath: o
                        });
                      case 8:
                        return n.sent, t.hideLoading(), n.next = 12, t.showToast({
                          title: "下载成功"
                        });
                      case 12:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              playVideo: function(t, e) {
                this.showPlay = !0, this.option = {
                  videoUrl: t,
                  imageUrl: e
                }
              },
              parentMethod: function(t) {
                console.log(t), "videoDome" != t.target.id && "close" != t.target.id && (this.showPlay = !1), console.log("父标签的方法被调用")
              },
              stopPropagation: function(t) {
                t.stopPropagation(), console.log("子标签的方法被调用")
              },
              getDataList: function() {
                var e = this;
                t.showLoading({
                  title: "加载中",
                  mask: !0
                }), this.$uniApi.dataRequestNoLoading("post", "ai/vidu/ai/selectPage", {
                  current: 1,
                  size: 9999
                }).then((function(n) {
                  1 === n.code && (console.log(n.data.records, "res.data.records"), e.dataList = n.data.records || [], setTimeout((function() {
                    t.hideLoading()
                  }), 1e3), e.dataList.filter((function(t) {
                    return !t.status
                  })).length > 0 && (e.time && (clearTimeout(e.time), e.time = null), e.time = setTimeout((function() {
                    e.getDataListCopy()
                  }), 1e4)))
                }))
              },
              getDataListCopy: function() {
                var t = this;
                this.$uniApi.dataRequestNoLoading("post", "ai/vidu/ai/selectPage", {
                  current: 1,
                  size: 9999
                }).then((function(e) {
                  1 === e.code && (console.log(e.data.records, "res.data.records"), t.dataList = e.data.records || [], t.dataList.filter((function(t) {
                    return !t.status
                  })).length > 0 && (t.time = setTimeout((function() {
                    t.getDataListCopy()
                  }), 1e4)))
                }))
              },
              submit: function() {
                t.navigateBack({
                  delta: 1
                })
              }
            }
          };
        e.default = s
      }).call(this, n("df3c").default)
    },
    "2a0b": function(t, e, n) {
      var a = n("f16c");
      n.n(a).a
    },
    "6c64": function(t, e, n) {
      (function(t, e) {
        var a = n("47a9");
        n("5366"), a(n("3240"));
        var i = a(n("83ba"));
        t.__webpack_require_UNI_MP_PLUGIN__ = n, e(i.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    "83ba": function(t, e, n) {
      n.r(e);
      var a = n("e489"),
        i = n("b63f");
      for (var o in i)["default"].indexOf(o) < 0 && function(t) {
        n.d(e, t, (function() {
          return i[t]
        }))
      }(o);
      n("2a0b");
      var s = n("828b"),
        r = Object(s.a)(i.default, a.b, a.c, !1, null, "0f1a54f8", null, !1, a.a, void 0);
      e.default = r.exports
    },
    b63f: function(t, e, n) {
      n.r(e);
      var a = n("15fa"),
        i = n.n(a);
      for (var o in a)["default"].indexOf(o) < 0 && function(t) {
        n.d(e, t, (function() {
          return a[t]
        }))
      }(o);
      e.default = i.a
    },
    e489: function(t, e, n) {
      n.d(e, "b", (function() {
        return i
      })), n.d(e, "c", (function() {
        return o
      })), n.d(e, "a", (function() {
        return a
      }));
      var a = {
          uniNavbar: function() {
            return n.e("components/uni-navbar/uni-navbar").then(n.bind(null, "101a"))
          }
        },
        i = function() {
          this.$createElement;
          var t = (this._self._c, this.dataList && this.dataList.length),
            e = this.dataList && this.dataList.length;
          this.$mp.data = Object.assign({}, {
            $root: {
              g0: t,
              g1: e
            }
          })
        },
        o = []
    },
    f16c: function(t, e, n) {}
  },
  [
    ["6c64", "common/runtime", "common/vendor"]
  ]
]);
