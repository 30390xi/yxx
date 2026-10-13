// Extracted from subPack/pages/address/address.js; webpack module e59d.
// Compiled code for analysis; not an original source file.
module.exports = {
    e59d: function(e, t, a) {
      (function(e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var n = {
          components: {
            EmptyState: function() {
              a.e("components/empty/empty").then(function() {
                return resolve(a("a427"))
              }.bind(null, a)).catch(a.oe)
            }
          },
          data: function() {
            return {
              addrId: "",
              page: 1,
              hasMoreData: !0,
              addressList: []
            }
          },
          onLoad: function(e) {
            e.addrId && (this.addrId = e.addrId), this.pageLoad()
          },
          onPullDownRefresh: function() {
            this.page = 1, this.pageLoad()
          },
          onReachBottom: function() {
            this.hasMoreData && this.pageLoad()
          },
          filters: {
            mobileSubstr: function(e) {
              return e ? e.substr(0, 3) + "****" + e.substr(7) : "-"
            }
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          methods: {
            pageLoad: function() {
              var t = this,
                a = {
                  current: this.page,
                  memberId: this.userInfo.memberId
                };
              this.$uniApi.dataRequestNoLoading("GET", "manager/app/v1/memberDeliveryAddress", a).then((function(a) {
                if (e.stopPullDownRefresh(), 1 === a.code) {
                  var n = a.data.records,
                    d = t.addressList;
                  a.data.total > 0 ? (1 === a.data.current ? t.addressList = n : t.addressList = d.concat(n), a.data.current < a.data.pages ? (t.page = t.page + 1, t.hasMoreData = !0) : t.hasMoreData = !1) : (t.addressList = [], t.hasMoreData = !1)
                }
              })).catch((function(t) {
                e.stopPullDownRefresh()
              }))
            },
            goAddress: function(e, t) {
              var a = this;
              "add" === e ? this.$navigateTo({
                url: "/subPack/pages/addaddress/addaddress"
              }) : "edit" === e && (this.addrId ? this.$uniApi.dataRequestNoLoading("POST", "manager/app/v1/memberDeliveryAddress/updateFlag", {
                addrId: t,
                memberId: this.userInfo.memberId
              }).then((function(e) {
                1 === e.code && a.$util.prevPage()
              })) : this.$navigateTo({
                url: "/subPack/pages/addaddress/addaddress?addrId=".concat(t)
              }))
            }
          }
        };
        t.default = n
      }).call(this, a("df3c").default)
    },
};
