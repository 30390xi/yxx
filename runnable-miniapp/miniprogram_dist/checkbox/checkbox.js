module.exports = require("../../_commons/0.js")([{
  ids: [36],
  modules: {
    100: function(t, e, a) {
      t.exports = a(569)
    },
    569: function(t, e) {
      Component({
        options: {
          addGlobalClass: !0,
          multipleSlots: !0
        },
        properties: {
          multi: {
            type: Boolean,
            value: !0
          },
          checked: {
            type: Boolean,
            value: !1
          },
          value: {
            type: String,
            value: ""
          },
          label: {
            type: String,
            value: "label"
          },
          extClass: {
            type: String,
            value: ""
          }
        },
        data: {},
        relations: {
          "../checkbox-group/checkbox-group": {
            type: "ancestor",
            linked: function(t) {
              this.data.group = t
            },
            unlinked: function() {
              this.data.group = null
            }
          }
        },
        methods: {
          setMulti: function(t) {
            this.setData({
              multi: t
            })
          },
          setOuterClass: function(t) {
            this.setData({
              outerClass: t
            })
          },
          checkedChange: function(t) {
            if (this.data.multi) {
              var e = !this.data.checked;
              this.setData({
                checked: e
              }), this.data.group && this.data.group.checkedChange(e, this)
            } else {
              var a = this.data.checked;
              if (a) return;
              this.setData({
                checked: !0
              }), this.data.group && this.data.group.checkedChange(a, this)
            }
            this.triggerEvent("change", {
              value: this.data.value,
              checked: this.data.checked
            })
          }
        }
      })
    }
  },
  entries: [
    [100, 0]
  ]
}]);
