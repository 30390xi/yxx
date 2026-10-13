module.exports = require("../../_commons/0.js")([require("../../_commons/1.js"), require("../../_commons/3.js"), require("../../_commons/6.js"), require("../../_commons/2.js"), require("../../_commons/4.js"), require("../../_commons/5.js"), require("../../_commons/7.js"), require("../../_commons/8.js"), require("../../_commons/11.js"), {
  ids: [89],
  modules: {
    173: function(e, o, t) {
      t.r(o);
      var s = t(1),
        i = t(5),
        r = t(15),
        n = s.a.getSystemInfoSync();
      Component({
        behaviors: [i.a, r.a],
        properties: {
          from: {
            type: String,
            value: "player"
          },
          goodsVideoList: {
            type: Array,
            value: []
          },
          goodsExplainEnd: {
            type: Boolean,
            value: !1
          },
          playGoodsRecordId: {
            type: Number,
            value: 0
          }
        },
        data: {
          currentIndex: 99999,
          leftDistance: 0,
          playGoodsRecordId: 0,
          videoDotList: [{}, {}, {}, {}, {}]
        },
        observers: {
          playGoodsRecordId: function(e) {
            var o = this;
            this.data.goodsVideoList.forEach((function(t, s) {
              t.goods_id == e && o.setData({
                currentIndex: s
              })
            }))
          },
          goodsVideoList: function(e) {
            var o = this;
            e.forEach((function(e, t) {
              e.goods_id === o.data.playGoodsRecordId && o.setData({
                currentIndex: t
              })
            }))
          },
          currentIndex: function(e) {
            var o = n.windowWidth,
              t = 0;
            e > 0 && (t = 12 + 100 * e - (o / 2 - 120)), this.setData({
              leftDistance: t
            })
          }
        },
        methods: {
          selectDot: function(e) {
            var o = e.currentTarget.dataset,
              t = o.index,
              s = o.info;
            t !== this.data.currentIndex && (this.setData({
              currentIndex: t
            }), this.triggerEvent("switchvideo", {
              goods_id: s.goods_id,
              reserves: 1
            }))
          },
          playNext: function() {
            var e = this.data,
              o = e.currentIndex,
              t = e.goodsVideoList;
            this.setData({
              currentIndex: o + 1
            });
            var s = t[o + 1].goods_id;
            this.triggerEvent("switchvideo", {
              reserves: 2,
              goods_id: s,
              goodsExplainEnd: !1
            })
          },
          bindcustomevent: function(e) {
            "delVideoDot" == e.detail.action && this.triggerEvent("customevent", {
              action: "delVideoDot",
              id: e.detail.id
            }, {
              bubbles: !0
            })
          },
          closeVideoDotList: function() {
            this.triggerEvent("customevent", {
              action: "showVideoDotList",
              value: !1
            })
          }
        }
      })
    },
    50: function(e, o, t) {
      e.exports = t(173)
    }
  },
  entries: [
    [50, 0, 1, 3, 6, 2, 4, 5, 7, 8, 11]
  ]
}]);
