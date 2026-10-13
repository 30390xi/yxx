module.exports = require("../../_commons/0.js")([require("../../_commons/9.js"), require("../../_commons/24.js"), {
  ids: [65],
  modules: {
    324: function(e, t) {
      Component({
        properties: {
          screenType: {
            type: String,
            value: ""
          },
          curLotteryLuckMen: {
            type: Array,
            value: []
          },
          lotteryPush: {
            type: Object,
            value: {}
          }
        },
        data: {
          rewardList: []
        },
        observers: {
          curLotteryLuckMen: function(e) {
            var t = e;
            if (t && t.length)
              if (2 == +this.data.lotteryPush.participate_type) {
                for (var r = [], s = 0; s < t.length;) t[s + 2] && t[s].team_id === t[s + 2].team_id ? (r.push([t[s], t[s + 1], t[s + 2]]), s += 3) : t[s + 1] && t[s].team_id === t[s + 1].team_id ? (r.push([t[s], t[s + 1]]), s += 2) : (r.push([t[s]]), s += 1);
                this.setData({
                  rewardList: r
                })
              } else this.setData({
                rewardList: t
              })
          }
        }
      })
    },
    69: function(e, t, r) {
      e.exports = r(324)
    }
  },
  entries: [
    [69, 0, 9, 24]
  ]
}]);
