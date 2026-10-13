require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["union/components1/chat-item/chat-item-service"], {
    "27c1": function(t, n, e) {
      e.r(n);
      var o = e("5b32"),
        i = e.n(o);
      for (var a in o)["default"].indexOf(a) < 0 && function(t) {
        e.d(n, t, (function() {
          return o[t]
        }))
      }(a);
      n.default = i.a
    },
    "5b32": function(t, n, e) {
      (function(t) {
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var o = {
          name: "chat-item",
          components: {
            zeroMarkdownView: function() {
              e.e("union/components1/components/zero-markdown-view/zero-markdown-view").then(function() {
                return resolve(e("dd9a"))
              }.bind(null, e)).catch(e.oe)
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
            previewImageClick: function(n) {
              var e = this.item.imageCard.map((function(t) {
                return t.url
              }));
              t.previewImage({
                urls: e,
                count: n
              })
            },
            goSpot: function(t) {
              this.$navigateTo({
                url: "/pages/spotDetail/spotDetail?spotId=" + t
              })
            },
            jumpSpotContentList: function(n) {
              n.contentList.forEach((function(t) {
                t.title = t.contentModuleName, t.id = t.contentId
              })), t.setStorageSync("spotContentList", {
                name: n.contentModuleName,
                contentList: n.contentList
              }), this.$navigateTo({
                url: "/pages/spotContentList/spotContentList?scenicName=".concat(n.contentModuleName)
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
            showPic: function(n) {
              var e = [n.data.url];
              t.previewImage({
                urls: e
              })
            },
            downloadFile: function(t) {}
          }
        };
        n.default = o
      }).call(this, e("df3c").default)
    },
    7953: function(t, n, e) {
      e.r(n);
      var o = e("b8bb"),
        i = e("27c1");
      for (var a in i)["default"].indexOf(a) < 0 && function(t) {
        e.d(n, t, (function() {
          return i[t]
        }))
      }(a);
      e("add6");
      var c = e("828b"),
        u = Object(c.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
      n.default = u.exports
    },
    a70c: function(t, n, e) {},
    add6: function(t, n, e) {
      var o = e("a70c");
      e.n(o).a
    },
    b8bb: function(t, n, e) {
      e.d(n, "b", (function() {
        return o
      })), e.d(n, "c", (function() {
        return i
      })), e.d(n, "a", (function() {}));
      var o = function() {
          var t = this,
            n = (t.$createElement, t._self._c, t.item.list && t.item.list.length && 0 == t.item.type),
            e = n ? t.__map(t.item.list, (function(n, e) {
              return {
                $orig: t.__get_orig(n),
                l0: t.__map(n.contentList, (function(n, e) {
                  var o = t.__get_orig(n),
                    i = n.contentList.length,
                    a = n.contentList.length;
                  return {
                    $orig: o,
                    g1: i,
                    g2: a,
                    m0: a > 6 ? t.spotRelationNum(n.contentList) : null
                  }
                }))
              }
            })) : null,
            o = t.item.imageCard && t.item.imageCard.length && 0 == t.item.type;
          t.$mp.data = Object.assign({}, {
            $root: {
              g0: n,
              l1: e,
              g3: o
            }
          })
        },
        i = []
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["union/components1/chat-item/chat-item-service-create-component", {
    "union/components1/chat-item/chat-item-service-create-component": function(t, n, e) {
      e("df3c").createComponent(e("7953"))
    }
  },
  [
    ["union/components1/chat-item/chat-item-service-create-component"]
  ]
]);
