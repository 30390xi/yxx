require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["union/components1/chat-item/chat-item-temple"], {
    1103: function(t, e, n) {},
    "163c": function(t, e, n) {
      n.r(e);
      var o = n("fe55"),
        i = n("6bc7");
      for (var a in i)["default"].indexOf(a) < 0 && function(t) {
        n.d(e, t, (function() {
          return i[t]
        }))
      }(a);
      n("8c6e");
      var c = n("828b"),
        u = Object(c.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
      e.default = u.exports
    },
    4628: function(t, e, n) {
      (function(t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var o = {
          name: "chat-item",
          components: {
            zeroMarkdownView: function() {
              n.e("union/components1/components/zero-markdown-view/zero-markdown-view").then(function() {
                return resolve(n("dd9a"))
              }.bind(null, n)).catch(n.oe)
            }
          },
          props: {
            item: {
              type: Object,
              default: function() {
                return {
                  time: "",
                  icon: "",
                  name: "",
                  content: "",
                  isMe: !1
                }
              }
            },
            pushingProgress: {
              type: Boolean,
              default: function() {
                return !1
              }
            }
          },
          data: function() {
            return {
              imgStarted: !1,
              imgCompleted: !1,
              imgContent: "",
              imgArray: [],
              countInfos: "",
              index: 0,
              timer: null,
              itemContentCopy: "",
              itemContentIndex: 0,
              displayText: "",
              showMore: !1,
              list: []
            }
          },
          mounted: function() {
            this.displayText = "", this.index = 0
          },
          methods: {
            previewImageClick: function(e) {
              var n = this.item.imageCard.map((function(t) {
                return t.url
              }));
              t.previewImage({
                urls: n,
                count: e
              })
            },
            goSpot: function(t) {
              this.$navigateTo({
                url: "/pages/spotDetail/spotDetail?spotId=" + t
              })
            },
            jumpSpotContentList: function(e) {
              e.contentList.forEach((function(t) {
                t.title = t.contentModuleName, t.id = t.contentId
              })), t.setStorageSync("spotContentList", {
                name: e.contentModuleName,
                contentList: e.contentList
              }), this.$navigateTo({
                url: "/pages/spotContentList/spotContentList?scenicName=".concat(e.contentModuleName)
              })
            },
            gotoPage: function(t) {
              console.log(t, "url"), this.$eventAnalyse.analyse({
                eventTag: "aiTemple_service_click",
                eventName: "禅寺点击跳转按钮",
                eventParams: {
                  pagePath: t
                }
              }), this.$navigateTo({
                url: t
              })
            },
            spotRelationNum: function(t) {
              return t.length - 5 + "+"
            },
            scenicDetails: function(t) {
              this.$navigateTo({
                url: "/pages/spotDetailNew/spotDetailNew?spotId=" + t.id
              })
            },
            askAgain: function(t) {
              this.pushingProgress ? this.$emit("askAgain", t) : this.$util.showToast("请稍候")
            },
            goLineView: function() {
              t.navigateTo({
                url: "/union/pages/ai/strategyGuide?lineId=1734121312503611394"
              })
            },
            getTagData: function(t) {
              return t ? t.split(",") : []
            },
            showPic: function(e) {
              var n = [e.data.url];
              t.previewImage({
                urls: n
              })
            },
            downloadFile: function(t) {}
          }
        };
        e.default = o
      }).call(this, n("df3c").default)
    },
    "6bc7": function(t, e, n) {
      n.r(e);
      var o = n("4628"),
        i = n.n(o);
      for (var a in o)["default"].indexOf(a) < 0 && function(t) {
        n.d(e, t, (function() {
          return o[t]
        }))
      }(a);
      e.default = i.a
    },
    "8c6e": function(t, e, n) {
      var o = n("1103");
      n.n(o).a
    },
    fe55: function(t, e, n) {
      n.d(e, "b", (function() {
        return o
      })), n.d(e, "c", (function() {
        return i
      })), n.d(e, "a", (function() {}));
      var o = function() {
          var t = this,
            e = (t.$createElement, t._self._c, t.item.list && t.item.list.length && 0 == t.item.type),
            n = e ? t.__map(t.item.list, (function(e, n) {
              return {
                $orig: t.__get_orig(e),
                l0: t.__map(e.contentList, (function(e, n) {
                  var o = t.__get_orig(e),
                    i = e.contentList.length,
                    a = e.contentList.length;
                  return {
                    $orig: o,
                    g1: i,
                    g2: a,
                    m0: a > 6 ? t.spotRelationNum(e.contentList) : null
                  }
                }))
              }
            })) : null,
            o = t.item.imageCard && t.item.imageCard.length && 0 == t.item.type;
          t.$mp.data = Object.assign({}, {
            $root: {
              g0: e,
              l1: n,
              g3: o
            }
          })
        },
        i = []
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["union/components1/chat-item/chat-item-temple-create-component", {
    "union/components1/chat-item/chat-item-temple-create-component": function(t, e, n) {
      n("df3c").createComponent(n("163c"))
    }
  },
  [
    ["union/components1/chat-item/chat-item-temple-create-component"]
  ]
]);
