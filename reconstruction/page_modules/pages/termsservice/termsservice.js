// Extracted from pages/termsservice/termsservice.js; webpack module "91fc".
// Compiled code for analysis; not an original source file.
module.exports = {
    "91fc": function(e, n, a) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0, n.default = {
        data: function() {
          return {
            paramValue: "",
            parseStyle: {
              p: "word-break: break-all;"
            }
          }
        },
        onLoad: function() {
          this.pageLoad()
        },
        methods: {
          pageLoad: function() {
            var e = this;
            this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/sysParam/getInfo", {
              paramKey: "WINEBOSS_ITEM"
            }).then((function(n) {
              1 === n.code && (e.paramValue = n.data[0].paramValue)
            }))
          }
        }
      }
    },
};
