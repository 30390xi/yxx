// Extracted from subPage/pages/about/about.js; webpack module a8a2.
// Compiled code for analysis; not an original source file.
module.exports = {
    a8a2: function(n, a, e) {
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), a.default = void 0;
      var t = {
        components: {
          Parser: function() {
            Promise.all([e.e("subPage/common/vendor"), e.e("subPage/components/Parser/jyf-parser")]).then(function() {
              return resolve(e("5798"))
            }.bind(null, e)).catch(e.oe)
          }
        },
        data: function() {
          return {
            aboutInfo: ""
          }
        },
        onLoad: function() {
          this.pageLoad()
        },
        methods: {
          pageLoad: function() {
            var n = this;
            this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/sysParam/getInfo", {
              paramKey: "ABOUT_THE_MALL"
            }).then((function(a) {
              1 === a.code && (n.aboutInfo = a.data[0])
            }))
          }
        }
      };
      a.default = t
    },
};
