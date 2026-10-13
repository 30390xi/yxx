// Extracted from yearCard/pages/nfcVideo/dnfAct.js; webpack module a089.
// Compiled code for analysis; not an original source file.
module.exports = {
    a089: function(n, e, t) {
      (function(n) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var t = {
          data: function() {
            return {
              routes: []
            }
          },
          onLoad: function(n) {
            this.routes = getCurrentPages()
          },
          methods: {
            pageBack: function() {
              1 == this.routes.length ? n.redirectTo({
                url: "/yearCard/pages/nfcVideo/jz"
              }) : n.navigateBack()
            }
          }
        };
        e.default = t
      }).call(this, t("df3c").default)
    },
};
