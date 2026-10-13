module.exports = require("../../_commons/0.js")([{
  ids: [35],
  modules: {
    555: function(t, e) {
      Component({
        properties: {
          multi: {
            type: Boolean,
            value: !0,
            observer: "_multiChange"
          },
          extClass: {
            type: String,
            value: ""
          },
          prop: {
            type: String,
            value: ""
          }
        },
        data: {
          targetList: [],
          parentCell: null
        },
        relations: {
          "../checkbox/checkbox": {
            type: "descendant",
            linked: function(t) {
              this.data.targetList.push(t), t.setMulti(this.data.multi), this.data.firstItem || (this.data.firstItem = t), t !== this.data.firstItem && t.setOuterClass("weui-cell_wxss")
            },
            unlinked: function(t) {
              var e = -1;
              this.data.targetList.forEach((function(a, i) {
                a === t && (e = i)
              })), this.data.targetList.splice(e, 1), this.data.targetList || (this.data.firstItem = null)
            }
          },
          "../form/form": {
            type: "ancestor"
          },
          "../cells/cells": {
            type: "ancestor",
            linked: function(t) {
              this.data.parentCell || (this.data.parentCell = t)
            },
            unlinked: function(t) {
              this.data.parentCell = null
            }
          }
        },
        methods: {
          checkedChange: function(t, e) {
            if (console.log("checked change", t), this.data.multi) {
              var a = [];
              this.data.targetList.forEach((function(t) {
                t.data.checked && a.push(t.data.value)
              })), this.triggerEvent("change", {
                value: a
              })
            } else {
              var i = "";
              this.data.targetList.forEach((function(t) {
                t === e ? i = t.data.value : t.setData({
                  checked: !1
                })
              })), this.triggerEvent("change", {
                value: i
              }, {})
            }
          },
          _multiChange: function(t) {
            return this.data.targetList.forEach((function(e) {
              e.setMulti(t)
            })), this.data.parentCell && this.data.parentCell.setCellMulti(t), t
          }
        }
      })
    },
    98: function(t, e, a) {
      t.exports = a(555)
    }
  },
  entries: [
    [98, 0]
  ]
}]);
