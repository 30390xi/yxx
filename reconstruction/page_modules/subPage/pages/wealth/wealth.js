// Extracted from subPage/pages/wealth/wealth.js; webpack module e9ed.
// Compiled code for analysis; not an original source file.
module.exports = {
    e9ed: function(e, t, n) {
      (function(e, a) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var i = {
          components: {
            EmptyState: function() {
              n.e("subPage/components/empty/empty").then(function() {
                return resolve(n("3b7a"))
              }.bind(null, n)).catch(n.oe)
            }
          },
          data: function() {
            return {
              wealthNum: "",
              tabShow: !1,
              tabText: "全部",
              page: 1,
              minNum: 0,
              listTab: [{
                name: "提现记录"
              }],
              activeStyle: {
                "font-weight": "bold",
                "z-index": "1"
              },
              barStyle: {
                background: "#FE5244",
                "border-radius": "0px",
                position: "absolute",
                bottom: "18rpx"
              },
              currentIndex: 0,
              detailList: [],
              detailType: -1,
              loadMore: "loading",
              scrollH: 500,
              scrollTop: "0",
              withDrawList: [],
              incomeList: [],
              isSubscribeFlag: !0,
              officialOpenId: ""
            }
          },
          onLoad: function(e) {
            this.currentIndex = e.tab || 0, e.officialOpenId && (this.officialOpenId = e.officialOpenId)
          },
          onShow: function() {
            var t = this;
            e.getSystemInfo({
              success: function(e) {
                var n = parseInt(432 / (750 / e.screenWidth));
                t.scrollH = e.windowHeight - n
              }
            }), this.isSubscribe(), this.pageLoad(), this.getMinNum(), this.getWithDrawRecord(), this.getIncomeDetailedList()
          },
          filters: {
            toFixed2: function(e) {
              return e ? Number(e).toFixed(2) : "0.00"
            }
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          methods: {
            pageLoad: function() {
              var e = this,
                t = this.userInfo.isFenxiao ? "manager/app/v1/expert/getExpertAccount" : "manager/app/v1/memberAccount";
              this.$uniApi.dataRequestNoLoading("GET", t, {
                memberId: this.userInfo.memberId
              }).then((function(t) {
                1 === t.code && (e.wealthNum = t.data)
              }))
            },
            getMinNum: function() {
              var e = this;
              this.$uniApi.getRequestNoLoading("GET", "manager/app/v1/sysLookupType/customWord?paramKey=WITHDRAW_RULE").then((function(t) {
                1 === t.code && t.data.forEach((function(t) {
                  0 === t.lookupType && (e.minNum = t.lookupValue)
                }))
              }))
            },
            getWithDrawRecord: function() {
              var e = this;
              this.$uniApi.dataRequestNoLoading("get", "manager/app/v1/withdrawRecord/getAllWithdrawRecord").then((function(t) {
                1 == t.code && (e.withDrawList = t.data || [])
              }))
            },
            getIncomeDetailedList: function() {
              var e = this;
              this.$uniApi.dataRequestNoLoading("get", "manager/app/v1/memberBrokerage/getIncomeDetailedList").then((function(t) {
                1 == t.code && (e.incomeList = t.data || [])
              }))
            },
            changecurr: function(e) {
              this.currentIndex = e, this.scrollTop = "1", this.scrollTop = "0", this.page = 1, this.orderList = []
            },
            goDetailed: function() {
              this.$navigateTo({
                url: "/pages/detailed/detailed"
              })
            },
            withdrawal: function() {
              this.wealthNum.accountBalance < this.minNum || this.$navigateTo({
                url: "/subPage/pages/withdrawal/withdrawal?num=".concat(this.wealthNum.accountBalance)
              })
            },
            showTab: function() {
              var e = this.tabShow;
              this.tabShow = !e
            },
            getWithDradStatus: function(e) {
              return ["提现中", "提现完成", "提现失败"][Number(e)]
            },
            getIncomeStatus: function(e, t) {
              var n = Number(t);
              if (1 == e) switch (n) {
                case 2:
                  return "待出票";
                case 3:
                  return "已出票";
                case 8:
                  return "退票中";
                case 13:
                  return "已过期";
                case 5:
                  return "已完成";
                case 7:
                  return "待出票";
                case 9:
                  return "门票部分退款";
                case 10:
                  return "门票已退款";
                case 11:
                  return "出票失败"
              }
              if (0 == e) switch (n) {
                case 2:
                  return "待发货";
                case 3:
                  return "待收货";
                case 4:
                  return "已收货";
                case 6:
                  return "售后中";
                case 8:
                  return "退款中";
                case 5:
                  return "已完成";
                case 7:
                  return "售后已完成";
                case 9:
                  return "部分退款"
              }
            },
            isSubscribe: function() {
              var e = this;
              this.$uniApi.dataRequestNoLoading("GET", "manager/app/wx/officialAccount/isSubscribe", {
                openId: this.officialOpenId
              }).then((function(t) {
                1 === t.code && (e.isSubscribeFlag = t.data)
              }))
            },
            jmpOfficial: function() {
              a.navigateTo({
                url: "/pages/webpage/webpage?urlEncode=" + encodeURIComponent("https://mp.weixin.qq.com/s/-ntMBDqv-EBvuCcJZrq9mQ")
              })
            }
          }
        };
        t.default = i
      }).call(this, n("df3c").default, n("3223").default)
    }
};
