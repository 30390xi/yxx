require("../../../@babel/runtime/helpers/Arrayincludes"), require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["union/pages/aiBy/collectionList"], {
    "0f30": function(t, n, e) {
      (function(t, n) {
        var o = e("47a9");
        e("5366"), o(e("3240"));
        var i = o(e("5c6c"));
        t.__webpack_require_UNI_MP_PLUGIN__ = e, n(i.default)
      }).call(this, e("3223").default, e("df3c").createPage)
    },
    "27ed": function(t, n, e) {
      (function(t) {
        var o = e("47a9");
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var i = {
          mixins: [o(e("30eb")).default],
          components: {
            chatItem: function() {
              e.e("union/components1/chat-item/chat-item-by").then(function() {
                return resolve(e("8633"))
              }.bind(null, e)).catch(e.oe)
            }
          },
          onLoad: function(n) {
            this.language = t.getStorageSync("language") || "zh", t.setNavigationBarTitle({
              title: this.$t("collectionList.navbar.title")
            }), this.getCollectionList()
          },
          onShow: function() {},
          onReachBottom: function() {
            "loadmore" === this.loadMore && this.getCollectionList()
          },
          data: function() {
            return {
              collectionList: [],
              page: 1,
              loadMore: "loading",
              language: "zh"
            }
          },
          watch: {},
          computed: {},
          methods: {
            badCommentFun: function() {
              this.collectionList = [], this.page = 1, this.loadMore = "loading", this.getCollectionList()
            },
            getCollectionList: function() {
              var t = this,
                n = {
                  pageNum: this.page,
                  pageSize: 30,
                  language: this.language
                };
              this.loadMore = "loading", this.$uniApi.dataRequestNoLoading("GET", "ai/app/qa/collect/list", n).then((function(n) {
                if (1 === n.code) {
                  var e = n.data.records;
                  e = e.map((function(t) {
                    return {
                      time: t.questionTime,
                      list: [{
                        content: t.question,
                        type: 1,
                        state: 1,
                        end: !0,
                        name: "ai",
                        list: [],
                        id: t.id,
                        dialogueId: t.dialogueId,
                        roundId: t.roundId
                      }, {
                        content: t.answer,
                        content1: t.answer,
                        type: 0,
                        state: 0,
                        end: !0,
                        name: "ai",
                        isMe: !1,
                        list: [],
                        id: t.id,
                        dialogueId: t.dialogueId,
                        roundId: t.roundId,
                        isTerminate: !0
                      }]
                    }
                  })), n.data.total > 0 ? (1 === n.data.current ? t.collectionList = e : t.collectionList = t.collectionList.concat(e), n.data.current < n.data.pages ? (t.page = t.page + 1, t.loadMore = "loadmore") : t.loadMore = "nomore") : (t.loadMore = "nomore", t.collectionList = [])
                }
                console.log(t.collectionList, "this.collectionList"), t.submiting = !1
              })).catch((function(t) {}))
            }
          }
        };
        n.default = i
      }).call(this, e("df3c").default)
    },
    "2d31": function(t, n, e) {},
    "354d": function(t, n, e) {
      var o = e("2d31");
      e.n(o).a
    },
    "55e0": function(t, n, e) {
      e.r(n);
      var o = e("27ed"),
        i = e.n(o);
      for (var a in o)["default"].indexOf(a) < 0 && function(t) {
        e.d(n, t, (function() {
          return o[t]
        }))
      }(a);
      n.default = i.a
    },
    "5c6c": function(t, n, e) {
      e.r(n);
      var o = e("92f9"),
        i = e("55e0");
      for (var a in i)["default"].indexOf(a) < 0 && function(t) {
        e.d(n, t, (function() {
          return i[t]
        }))
      }(a);
      e("354d");
      var l = e("828b"),
        c = Object(l.a)(i.default, o.b, o.c, !1, null, "7f309d23", null, !1, o.a, void 0);
      n.default = c.exports
    },
    "92f9": function(t, n, e) {
      e.d(n, "b", (function() {
        return i
      })), e.d(n, "c", (function() {
        return a
      })), e.d(n, "a", (function() {
        return o
      }));
      var o = {
          uniNavbar: function() {
            return e.e("components/uni-navbar/uni-navbar").then(e.bind(null, "101a"))
          },
          uLoadmore: function() {
            return e.e("uview-ui/components/u-loadmore/u-loadmore").then(e.bind(null, "2db1"))
          }
        },
        i = function() {
          this.$createElement;
          var t = (this._self._c, this.$t("collectionList.navbar.title")),
            n = ["loading", "nomore"].includes(this.loadMore) && this.collectionList.length > 0 || "loading" == this.loadMore && 0 == this.collectionList.length;
          this.$mp.data = Object.assign({}, {
            $root: {
              m0: t,
              g0: n
            }
          })
        },
        a = []
    }
  },
  [
    ["0f30", "common/runtime", "common/vendor", "union/common/vendor"]
  ]
]);
