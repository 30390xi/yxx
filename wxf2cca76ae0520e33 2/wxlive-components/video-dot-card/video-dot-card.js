module.exports = require("../../_commons/0.js")([require("../../_commons/8.js"), require("../../_commons/9.js"), {
  ids: [88],
  modules: {
    181: function(e, t, o) {
      o.r(t), Component({
        properties: {
          from: {
            type: String,
            value: "player"
          },
          status: {
            type: String,
            value: "normal"
          },
          goodsInfo: {
            type: Object,
            value: {}
          },
          goodsIndex: {
            type: Number,
            value: 0
          }
        },
        data: {},
        lifetimes: {},
        methods: {
          clickDeleteVideoDot: function(e) {
            var t = e.currentTarget.dataset.id;
            this.triggerEvent("customevent", {
              action: "delVideoDot",
              id: t
            }, {
              bubbles: !0
            })
          }
        }
      })
    },
    51: function(e, t, o) {
      e.exports = o(181)
    }
  },
  entries: [
    [51, 0, 8, 9]
  ]
}]);
