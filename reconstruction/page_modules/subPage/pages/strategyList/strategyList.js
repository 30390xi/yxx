// Extracted from subPage/pages/strategyList/strategyList.js; webpack module "2f2c".
// Compiled code for analysis; not an original source file.
module.exports = {
    "2f2c": function(t, n, e) {
      (function(t) {
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var e = {
          props: [],
          onLoad: function(t) {
            this.cityId = t.id, this.getList()
          },
          data: function() {
            return {
              list: [],
              cityId: "",
              size: 10,
              current: 1
            }
          },
          onShow: function() {},
          onReachBottom: function() {
            this.current += 1, this.getList()
          },
          methods: {
            setSrc: function(t) {
              if (t.coverPictureUrl) return t.coverPictureUrl;
              var n = t.lineCoverPic ? JSON.parse(t.lineCoverPic) : [];
              return n.length > 0 ? n[0].url : ""
            },
            todetail: function(t) {
              this.$util.cityJump(t.contentType, t.originId, t)
            },
            getList: function() {
              var n = this,
                e = {
                  current: this.current,
                  size: this.size,
                  cityId: this.cityId
                };
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/city/queryCityStrategyList", e).then((function(e) {
                n.list = n.list.concat(e.data.records), 1 == n.current || e.data.records[0] || t.showToast({
                  title: "没有更多咯",
                  icon: "none"
                })
              }))
            }
          }
        };
        n.default = e
      }).call(this, e("df3c").default)
    },
};
