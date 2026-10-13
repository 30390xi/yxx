// Extracted from union/pages/touristMap/map.js; webpack module "0daa".
// Compiled code for analysis; not an original source file.
module.exports = {
    "0daa": function(t, a, n) {
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), a.default = void 0, a.default = {
        data: function() {
          return {
            urlSrc: "",
            webviewStyles: {
              progress: {
                color: "#ff4643"
              }
            },
            shareConfigNot: [],
            mapDetail: {},
            mapId: ""
          }
        },
        onLoad: function(t) {
          if (t.id) {
            this.mapId = t.id, this.getPointsClassify();
            var a = "https://eshop.zhiyousx.com/emap/?id=".concat(t.id, "&formType=").concat(t.formType);
            this.urlSrc = a
          }
        },
        onShareAppMessage: function(t) {
          return {
            title: this.mapDetail.shareText || this.mapDetail.name,
            imageUrl: this.mapDetail.shareImg || "",
            path: this.$util.setShareUrl("/union/pages/touristMap/map?id=".concat(this.mapId))
          }
        },
        methods: {
          getPointsClassify: function() {
            var t = this;
            this.$uniApi.dataRequestNoLoading("get", "base/app/v1/travelMap/getPointsClassify", {
              mapId: this.mapId
            }).then((function(a) {
              1 == a.code && (t.mapDetail = a.data.map)
            }))
          }
        }
      }
    },
};
