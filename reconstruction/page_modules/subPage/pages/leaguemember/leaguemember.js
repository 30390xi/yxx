// Extracted from subPage/pages/leaguemember/leaguemember.js; webpack module "5d06".
// Compiled code for analysis; not an original source file.
module.exports = {
    "5d06": function(e, t, o) {
      (function(e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var r = {
          components: {
            EmptyState: function() {
              o.e("components/empty/empty").then(function() {
                return resolve(o("a427"))
              }.bind(null, o)).catch(o.oe)
            }
          },
          data: function() {
            return {
              page: 1,
              loadMore: "loading",
              listTab: [{
                name: "我的团员"
              }, {
                name: "我的顾客"
              }],
              current: 0,
              list: [],
              activeStyle: {
                "font-weight": "bold",
                "z-index": "1"
              },
              barStyle: {
                width: "120rpx",
                height: "20rpx",
                background: "linear-gradient(52deg, #FC4A9E 0%, #FF5411 100%)",
                "border-radius": "10px",
                position: "absolute",
                "margin-left": "-27rpx"
              },
              orderByTypeList: [{
                name: "按贡献",
                orderByType: 1
              }, {
                name: "按成为下级时间",
                orderByType: 2
              }],
              orderByType: 1,
              timeTitle: "成为下级时间",
              isHide: !1
            }
          },
          onLoad: function() {},
          onPullDownRefresh: function() {
            this.page = 1, 0 === this.current ? this.getMemberList() : 1 === this.current && this.getCustomerList()
          },
          onReachBottom: function() {
            "loadmore" == this.loadMore && (0 === this.current ? this.getMemberList() : 1 === this.current && this.getCustomerList())
          },
          onHide: function() {
            this.isHide = !0
          },
          onShow: function() {
            this.isHide || this.getMemberList()
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          methods: {
            getMemberList: function() {
              var t = this,
                o = {
                  current: this.page,
                  orderByType: this.orderByType,
                  size: 10
                };
              this.loadMore = "loading", this.$uniApi.dataRequestNoLoading("post", "manager/app/v1/expert/getExpertSubordinate", o).then((function(o) {
                e.stopPullDownRefresh(), 1 === o.code && (t.timeTitle = "成为下级时间", t.orderByTypeList = [{
                  name: "按贡献",
                  orderByType: 1
                }, {
                  name: "按成为下级时间",
                  orderByType: 2
                }], o.data.total > 0 ? (1 === o.data.current ? t.list = o.data.records : t.list = t.list.concat(o.data.records), o.data.current < o.data.pages ? (t.page++, t.loadMore = "loadmore", console.log(t.loadMore)) : t.loadMore = "nomore") : (t.LoadMore = "nomore", t.list = []))
              })).catch((function(t) {
                e.stopPullDownRefresh(), console.log(t)
              }))
            },
            getCustomerList: function() {
              var t = this,
                o = {
                  current: this.page,
                  orderByType: this.orderByType,
                  size: 10
                };
              this.loadMore = "loading", this.$uniApi.dataRequestNoLoading("post", "manager/app/v1/expert/getExpertCustomer", o).then((function(o) {
                e.stopPullDownRefresh(), 1 === o.code && (t.timeTitle = "成为临时下级时间", t.orderByTypeList = [{
                  name: "按贡献",
                  orderByType: 1
                }, {
                  name: "按成为临时下级时间",
                  orderByType: 2
                }], o.data.total > 0 ? (1 === o.data.current ? t.list = o.data.records : t.list = t.list.concat(o.data.records), o.data.current < o.data.pages ? (t.page++, t.loadMore = "loadmore") : t.loadMore = "nomore") : (t.list = [], t.loadMore = "nomore"))
              })).catch((function(t) {
                e.stopPullDownRefresh(), console.log(t)
              }))
            },
            changecurr: function(e) {
              this.current = e, this.page = 1, this.orderByType = 1, 0 === e ? this.getMemberList() : 1 === e && this.getCustomerList()
            },
            seachFun: function(e) {
              this.orderByType = this.orderByTypeList[e].orderByType, this.page = 1, 0 === this.current ? this.getMemberList() : 1 === this.current && this.getCustomerList()
            },
            toDetail: function(e) {
              0 === this.current && this.$navigateTo({
                url: "/subPage/pages/memberDetail/memberDetail?id=" + e
              })
            }
          }
        };
        t.default = r
      }).call(this, o("df3c").default)
    },
};
