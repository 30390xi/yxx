// Extracted from pages/richtext/richtext.js; webpack module ea27.
// Compiled code for analysis; not an original source file.
module.exports = {
    ea27: function(t, e, a) {
      (function(t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var a = {
          data: function() {
            return {
              advertId: "",
              linkUrl: "",
              parseStyle: {
                p: "word-break: break-all;"
              }
            }
          },
          onLoad: function(e) {
            var a = this;
            if (e.id && e.mapId) return this.id = e.id, this.mapId = e.mapId, void this.$uniApi.dataRequestNoLoading("get", "base/app/v1/travelMap/getPointsClassify", {
              mapId: this.mapId
            }).then((function(e) {
              if (1 == e.code) {
                a.recommends = e.data.recommend || [];
                var n = a.recommends.find((function(t) {
                  return t.id == a.id
                }));
                if (n) {
                  t.setNavigationBarTitle({
                    title: n.name
                  });
                  var i = JSON.parse(n.jumpParams);
                  a.linkUrl = i.linkUrl
                }
              } else a.$util.showToast(e.msg)
            }));
            e.advertId && (this.advertId = e.advertId), e.title ? t.setNavigationBarTitle({
              title: e.title
            }) : (e.type = "none") ? t.setNavigationBarTitle({
              title: ""
            }) : t.setNavigationBarTitle({
              title: "内容"
            }), this.pageLoad()
          },
          methods: {
            pageLoad: function() {
              var e = this;
              this.advertId ? this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/advert/" + this.advertId).then((function(t) {
                1 === t.code && (e.linkUrl = t.data.linkUrl)
              })) : this.linkUrl = t.getStorageSync("richtext")
            }
          }
        };
        e.default = a
      }).call(this, a("df3c").default)
    }
};
