// Extracted from union/pages/aiTravel/cardPage.js; webpack module "6eea".
// Compiled code for analysis; not an original source file.
module.exports = {
    "6eea": function(n, e, a) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var o = {
        name: "cardPage",
        components: {
          lineCard: function() {
            Promise.all([a.e("common/vendor"), a.e("union/pages/aiTravel/components/lineCard")]).then(function() {
              return resolve(a("8a1e"))
            }.bind(null, a)).catch(a.oe)
          }
        },
        data: function() {
          return {
            showImage: !0,
            sessionId: ""
          }
        },
        filters: {},
        watch: {},
        computed: {},
        onPageScroll: function(n) {},
        onLoad: function(n) {
          console.log("onLoad"), this.sessionId = n.sessionId
        },
        onShow: function() {},
        onHide: function() {},
        onUnload: function() {},
        onShareAppMessage: function() {
          return {
            title: "".concat(this.$refs.lineCard.todayDate.aiPlanCardLink.city).concat(this.$refs.lineCard.todayDate.days, "日游"),
            imageUrl: "https://eshopfile.zhiyousx.com/175214881804186478.png",
            path: "/union/pages/aiTravel/historyList?sessionId=".concat(this.sessionId)
          }
        },
        methods: {}
      };
      e.default = o
    },
};
