// Extracted from subPack/pages/collection/collection.js; webpack module "071f".
// Compiled code for analysis; not an original source file.
module.exports = {
    "071f": function(o, e, n) {
      (function(o) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var t = {
          components: {
            EmptyState: function() {
              n.e("components/empty/empty").then(function() {
                return resolve(n("a427"))
              }.bind(null, n)).catch(n.oe)
            }
          },
          data: function() {
            return {
              page: 1,
              loadMore: "loading",
              isEditor: !0,
              selectAll: 0,
              num: 0,
              allCheck: {
                checked: !1
              },
              goodsInfo: []
            }
          },
          onLoad: function() {
            this.pageLoad()
          },
          onPullDownRefresh: function() {
            this.page = 1, this.pageLoad()
          },
          onReachBottom: function() {
            "loadmore" === this.loadMore && this.pageLoad()
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            },
            delNum: function() {
              return this.goodsInfo.filter((function(o) {
                return !0 === o.checked
              })).length
            }
          },
          methods: {
            pageLoad: function() {
              var e = this,
                n = {
                  current: this.page,
                  memberId: this.userInfo.memberId
                };
              this.loadMore = "loading", this.$uniApi.dataRequestNoLoading("GET", "manager/app/v1/memberFavoriteSku", n).then((function(n) {
                if (o.stopPullDownRefresh(), 1 === n.code) {
                  var t = n.data.records;
                  n.data.total > 0 ? (t.forEach((function(o) {
                    o.checked = !1
                  })), 1 === n.data.current ? e.goodsInfo = t : e.goodsInfo = e.goodsInfo.concat(t), n.data.current < n.data.pages ? (e.page = e.page + 1, e.loadMore = "loadmore") : e.loadMore = "nomore") : (e.goodsInfo = [], e.loadMore = "nomore")
                }
              })).catch((function(e) {
                o.stopPullDownRefresh()
              }))
            },
            allChecked: function(o) {
              console.log(o), o.value ? this.goodsInfo.forEach((function(o) {
                o.checked = !0
              })) : this.goodsInfo.forEach((function(o) {
                o.checked = !1
              }))
            },
            del: function() {
              var o = this,
                e = this.goodsInfo.filter((function(o) {
                  return o.checked
                })).map((function(o) {
                  return o.favorId
                })).join(",");
              this.$uniApi.dataRequestNoLoading("DELETE", "manager/app/v1/memberFavoriteSku?ids=" + e).then((function(e) {
                1 == e.code && (o.$util.showToast(e.msg), o.pageLoad(), o.isEditor = !0)
              }))
            },
            goGoodsDetails: function(o, e) {
              if (1 === e) return this.$util.showToast("商品已失效");
              this.$navigateTo({
                url: "/subPage/pages/goods_details/goods_details?itemId=".concat(o)
              })
            },
            onEditor: function() {
              this.isEditor = !this.isEditor
            },
            checkboxChange: function(o) {
              this.goodsInfo[o].checked = !this.goodsInfo[o].checked
            }
          }
        };
        e.default = t
      }).call(this, n("3223").default)
    },
};
