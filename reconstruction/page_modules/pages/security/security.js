// Extracted from pages/security/security.js; webpack module "0898".
// Compiled code for analysis; not an original source file.
module.exports = {
    "0898": function(n, e, t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0, e.default = {
        data: function() {
          return {}
        },
        methods: {
          changepassword: function() {
            this.$navigateTo({
              url: "/subPage/pages/changepassword/changepassword"
            })
          },
          setpassword: function() {
            this.$navigateTo({
              url: "/pages/setpassword/setpassword"
            })
          }
        }
      }
    },
};
