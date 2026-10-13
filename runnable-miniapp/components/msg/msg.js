module.exports = require("../../_commons/0.js")([require("../../_commons/1.js"), {
  ids: [4],
  modules: {
    22: function(t, e, r) {
      t.exports = r(58)
    },
    58: function(t, e, r) {
      "use strict";
      r.r(e);
      var o = r(2);
      Component({
        options: {
          styleIsolation: "isolated"
        },
        properties: {
          type: {
            type: String,
            value: "error"
          },
          title: {
            type: String,
            value: ""
          },
          desc: {
            type: String,
            value: ""
          },
          primary: {
            type: String,
            value: ""
          },
          secondary: {
            type: String,
            value: ""
          },
          miniProgram: {
            type: Object,
            value: {}
          },
          bottomLink: {
            type: String,
            value: ""
          },
          bottomMiniProgram: {
            type: Object,
            value: {}
          }
        },
        data: {
          wrapperShow: !1,
          innerShow: !1,
          platform: "",
          version: "release"
        },
        lifetimes: {
          attached: function() {
            this.setData({
              platform: o.a.platform,
              version: this.getEnvVersion()
            })
          }
        },
        methods: {
          onTapPrimary: function() {
            this.triggerEvent("tapPrimary")
          },
          onTapSecondary: function() {
            this.triggerEvent("tapSecondary")
          },
          onTapBottomLink: function() {
            this.triggerEvent("tapBottom")
          },
          getEnvVersion: function() {
            return "release"
          }
        }
      })
    }
  },
  entries: [
    [22, 0, 1]
  ]
}]);
