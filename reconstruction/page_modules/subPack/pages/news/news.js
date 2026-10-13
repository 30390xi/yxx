// Extracted from subPack/pages/news/news.js; webpack module "1a59".
// Compiled code for analysis; not an original source file.
module.exports = {
    "1a59": function(e, t, n) {
      (function(e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var n = {
          data: function() {
            return {
              newsCount: "",
              num: 0,
              msgList: "",
              operateList: "",
              performanceList: ""
            }
          },
          onShow: function() {
            this.getCornermarker(), this.pageLoad()
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          methods: {
            pageLoad: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/msgManager/getMsgList", {
                current: 1
              }).then((function(n) {
                e.stopPullDownRefresh(), 1 === n.code && n.data.records.length > 0 && (t.msgList = n.data.records[0])
              })), this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/messageRecord", {
                current: 1,
                type: 1
              }).then((function(n) {
                e.stopPullDownRefresh(), 1 === n.code && n.data.records.length > 0 && (t.operateList = n.data.records[0])
              })), this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/messageRecord", {
                current: 1,
                type: 2
              }).then((function(n) {
                e.stopPullDownRefresh(), 1 === n.code && n.data.records.length > 0 && (t.performanceList = n.data.records[0])
              }))
            },
            tosystemnotice: function(e) {
              var t = this;
              0 === e ? this.$uniApi.getRequestNoLoading("PUT", "base/app/v1/msgManager/updateMsgBatch").then((function(n) {
                1 == n.code && t.$navigateTo({
                  url: "/pages/systemnotice/systemnotice?id=" + e
                })
              })) : this.$uniApi.dataRequestNoLoading("PUT", "base/app/v1/messageRecord/updateBatch", {
                type: e
              }).then((function(n) {
                1 == n.code && t.$navigateTo({
                  url: "/pages/systemnotice/systemnotice?id=" + e
                })
              }))
            },
            getCornermarker: function() {
              var t = this,
                n = {
                  memberId: this.userInfo.memberId
                };
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/messageRecord/getCount", n).then((function(n) {
                if (1 == n.code) {
                  t.newsCount = n.data;
                  var a = n.data.msgCount + n.data.operateCount + n.data.performanceCount;
                  e.setNavigationBarTitle({
                    title: "消息".concat(a > 0 ? "（" + a + "）" : "")
                  })
                }
              }))
            }
          }
        };
        t.default = n
      }).call(this, n("df3c").default)
    },
};
