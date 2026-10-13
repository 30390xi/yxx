require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["union/components/xjtuTextCard"], {
    5100: function(e, n, t) {},
    "6d24": function(e, n, t) {
      t.r(n);
      var o = t("ed42"),
        i = t.n(o);
      for (var a in o)["default"].indexOf(a) < 0 && function(e) {
        t.d(n, e, (function() {
          return o[e]
        }))
      }(a);
      n.default = i.a
    },
    "7b1f": function(e, n, t) {
      t.d(n, "b", (function() {
        return o
      })), t.d(n, "c", (function() {
        return i
      })), t.d(n, "a", (function() {}));
      var o = function() {
          var e = this,
            n = (e.$createElement, e._self._c, e.baseInfo && (e.baseInfo.score || 0 === e.baseInfo.score) ? e.baseInfo.score.toFixed(1) : null),
            t = e.baseInfo && (e.baseInfo.scoreWonder || 0 === e.baseInfo.scoreWonder) ? e.baseInfo.scoreWonder.toFixed(1) : null,
            o = e.baseInfo && (e.baseInfo.scoreFacility || 0 === e.baseInfo.scoreFacility) ? e.baseInfo.scoreFacility.toFixed(1) : null,
            i = e.baseInfo && (e.baseInfo.scoreOperation || 0 === e.baseInfo.scoreOperation) ? e.baseInfo.scoreOperation.toFixed(1) : null,
            a = e.videoList && e.videoList.length > 0;
          e.$mp.data = Object.assign({}, {
            $root: {
              g0: n,
              g1: t,
              g2: o,
              g3: i,
              g4: a
            }
          })
        },
        i = []
    },
    afdb: function(e, n, t) {
      t.r(n);
      var o = t("7b1f"),
        i = t("6d24");
      for (var a in i)["default"].indexOf(a) < 0 && function(e) {
        t.d(n, e, (function() {
          return i[e]
        }))
      }(a);
      t("deac");
      var s = t("828b"),
        c = Object(s.a)(i.default, o.b, o.c, !1, null, "95fcc798", null, !1, o.a, void 0);
      n.default = c.exports
    },
    deac: function(e, n, t) {
      var o = t("5100");
      t.n(o).a
    },
    ed42: function(e, n, t) {
      (function(e) {
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var t = {
          props: {
            baseInfo: {
              type: Object,
              default: function() {
                return {
                  scoreWonder: 0,
                  scoreFacility: 0,
                  scoreOperation: 0,
                  score: "",
                  evaluationId: "1858398427923091457"
                }
              }
            },
            videoList: {
              type: Array,
              default: function() {
                return []
              }
            },
            scenicName: {
              type: String,
              default: ""
            },
            showHide: {
              type: Boolean,
              default: !1
            }
          },
          data: function() {
            return {
              cWidth: 200,
              cHeight: 200,
              url: "",
              xyArr: [{
                x: 0,
                y: 0
              }, {
                x: 0,
                y: 0
              }, {
                x: 0,
                y: 0
              }],
              isClicking: !1
            }
          },
          watch: {
            baseInfo: {
              handler: function(e) {
                e && this.getDataXY()
              },
              deep: !0
            }
          },
          mounted: function() {
            this.cWidth = e.upx2px(200), this.cHeight = e.upx2px(200), this.baseInfo && this.getDataXY()
          },
          methods: {
            getDataXY: function() {
              var e = this.baseInfo.scoreWonder || 0,
                n = this.baseInfo.scoreFacility || 0,
                t = this.baseInfo.scoreOperation || 0;
              this.xyArr[0].x = "50%", this.xyArr[0].y = 2 * (100 - e) / 3 + "%", this.xyArr[1].x = (100 - n) / 2 + "%", this.xyArr[1].y = 1 * n / 3 + 200 / 3 + "%", this.xyArr[2].x = (t + 100) / 2 + "%", this.xyArr[2].y = 1 * t / 3 + 200 / 3 + "%"
            },
            gotoVideo: function(e) {
              var n = this;
              this.isClicking || (this.isClicking = !0, this.$emit("gotoVideo", e), setTimeout((function() {
                n.isClicking = !1
              }), 200), this.$eventAnalyse.analyse({
                eventTag: "ai_xjtuVideo_click",
                eventName: "小七点击测评卡片视频",
                eventParams: {
                  videoUrl: e
                }
              }))
            },
            jumpTo: function() {
              var n = this;
              this.isClicking || (this.isClicking = !0, this.$eventAnalyse.analyse({
                eventTag: "ai_xjtuCard_click",
                eventName: "小七点击测评卡片跳转测评详情",
                eventParams: {
                  url: "/artShow/pages/xjtu/index?id=".concat(this.baseInfo.evaluationId)
                }
              }), e.navigateTo({
                url: "/artShow/pages/xjtu/index?id=".concat(this.baseInfo.evaluationId)
              }), setTimeout((function() {
                n.isClicking = !1
              }), 500))
            }
          }
        };
        n.default = t
      }).call(this, t("df3c").default)
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["union/components/xjtuTextCard-create-component", {
    "union/components/xjtuTextCard-create-component": function(e, n, t) {
      t("df3c").createComponent(t("afdb"))
    }
  },
  [
    ["union/components/xjtuTextCard-create-component"]
  ]
]);
