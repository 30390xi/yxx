// Extracted from union/pages/touristMap/list.js; webpack module "6a18".
// Compiled code for analysis; not an original source file.
module.exports = {
    "6a18": function(t, n, a) {
      (function(t) {
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0, a("a04a"), a("a2cf");
        var e = {
          data: function() {
            return {
              showMapPop: !1,
              CustomBar: getApp().globalData.CustomBar + 2,
              mapList: []
            }
          },
          filters: {},
          watch: {},
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          onShareAppMessage: function() {
            return {
              title: "游陕西旅游地图",
              path: this.$util.setShareUrl("union/pages/touristMap/list")
            }
          },
          onHide: function() {},
          onLoad: function(t) {
            this.getMapList()
          },
          onShow: function() {},
          onPageScroll: function(t) {},
          onReachBottom: function() {},
          methods: {
            getMapList: function() {
              var t = this;
              this.$uniApi.getRequestNoLoading("get", "base/app/v1/travelMap/getList").then((function(n) {
                1 == n.code ? t.mapList = n.data : t.$util.showToast(n.msg)
              }))
            },
            jumpToMap: function(n) {
              0 == n.type || 1 == n.type ? this.$navigateTo({
                url: "/union/pages/touristMap/map?id=".concat(n.id, "&formType=1")
              }) : 2 == n.type ? this.$navigateTo({
                url: n.jumpDTO.linkUrl
              }) : 3 == n.type && t.openEmbeddedMiniProgram({
                appId: n.jumpDTO.appId,
                path: n.jumpDTO.linkUrl
              })
            }
          }
        };
        n.default = e
      }).call(this, a("df3c").default)
    },
};
