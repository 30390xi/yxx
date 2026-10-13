(global.webpackJsonp = global.webpackJsonp || []).push([
  ["uview-ui/components/u-waterfall/u-waterfall"], {
    "27eb": function(t, e, i) {},
    "2eca": function(t, e, i) {
      i.r(e);
      var n = i("ae51"),
        a = i.n(n);
      for (var r in n)["default"].indexOf(r) < 0 && function(t) {
        i.d(e, t, (function() {
          return n[t]
        }))
      }(r);
      e.default = a.a
    },
    "335e": function(t, e, i) {
      i.r(e);
      var n = i("95fe"),
        a = i("2eca");
      for (var r in a)["default"].indexOf(r) < 0 && function(t) {
        i.d(e, t, (function() {
          return a[t]
        }))
      }(r);
      i("6405");
      var s = i("828b"),
        u = Object(s.a)(a.default, n.b, n.c, !1, null, "e243c014", null, !1, n.a, void 0);
      e.default = u.exports
    },
    6405: function(t, e, i) {
      var n = i("27eb");
      i.n(n).a
    },
    "95fe": function(t, e, i) {
      i.d(e, "b", (function() {
        return a
      })), i.d(e, "c", (function() {
        return r
      })), i.d(e, "a", (function() {
        return n
      }));
      var n = {
          uniIcons: function() {
            return Promise.all([i.e("common/vendor"), i.e("components/uni-icons/uni-icons")]).then(i.bind(null, "365b"))
          }
        },
        a = function() {
          this.$createElement;
          this._self._c, this.$initSSP(), "augmented" === this.$scope.data.scopedSlotsCompiler && (this.$setSSP("left", {
            leftList: this.leftList
          }), this.$setSSP("right", {
            rightList: this.rightList
          })), this.$callSSP()
        },
        r = []
    },
    ae51: function(t, e, i) {
      (function(t) {
        var n = i("47a9");
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var a = n(i("7eb4")),
          r = n(i("ee10")),
          s = {
            name: "u-waterfall",
            props: {
              value: {
                type: Array,
                required: !0,
                default: function() {
                  return []
                }
              },
              bannerList: {
                type: Array,
                default: function() {
                  return []
                }
              },
              recommendList: {
                type: Array,
                default: function() {
                  return []
                }
              },
              addTime: {
                type: [Number, String],
                default: 200
              },
              idKey: {
                type: String,
                default: "id"
              },
              waterType: {
                type: Number,
                default: 100
              },
              bg: {
                type: String,
                default: ""
              }
            },
            provide: function() {
              return {
                uWaterfall: this
              }
            },
            data: function() {
              return {
                leftList: [],
                rightList: [],
                tempList: [],
                children: [],
                watertypeChange: !1
              }
            },
            watch: {
              copyFlowList: function(t, e) {
                var i = Array.isArray(e) && e.length > 0 ? e.length : 0;
                this.tempList = this.tempList.concat(this.cloneData(t.slice(i))), this.splitData()
              },
              waterType: function(t) {
                this.watertypeChange = !0, this.tempList = []
              }
            },
            mounted: function() {
              this.tempList = this.cloneData(this.copyFlowList), this.splitData()
            },
            computed: {
              copyFlowList: function() {
                return this.cloneData(this.value)
              }
            },
            methods: {
              toSpot: function(t) {
                this.$eventAnalyse.analyse({
                  eventTag: "index_sbqwIt_click",
                  eventName: "首页身边趣玩it",
                  eventParams: JSON.stringify({
                    spotId: t
                  })
                }), this.$navigateTo({
                  url: "../spotDetail/spotDetail?spotId=" + t
                })
              },
              routerTo: function(e, i) {
                this.$eventAnalyse.analyse({
                  eventTag: "index_sbqw_click",
                  eventName: "首页身边趣玩",
                  eventParams: JSON.stringify({
                    jumpUrl: e
                  })
                }), t[i]({
                  url: e
                })
              },
              wclick: function(t) {
                this.$emit("wclick", t)
              },
              splitData: function() {
                var t = this;
                return (0, r.default)(a.default.mark((function e() {
                  var i, n, r, s;
                  return a.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (t.tempList.length) {
                          e.next = 2;
                          break
                        }
                        return e.abrupt("return");
                      case 2:
                        return i = t, e.next = 5, t.$uGetRect("#u-left-column");
                      case 5:
                        return n = e.sent, e.next = 8, t.$uGetRect("#u-right-column");
                      case 8:
                        if (r = e.sent, s = t.tempList[0]) {
                          e.next = 12;
                          break
                        }
                        return e.abrupt("return");
                      case 12:
                        n.height < r.height ? t.leftList.push(s) : n.height > r.height ? t.rightList.push(s) : t.leftList.length <= t.rightList.length ? t.leftList.push(s) : t.rightList.push(s), t.tempList.splice(0, 1), t.tempList.length && setTimeout((function() {
                          i.splitData()
                        }), t.addTime);
                      case 15:
                      case "end":
                        return e.stop()
                    }
                  }), e)
                })))()
              },
              cloneData: function(t) {
                return JSON.parse(JSON.stringify(t))
              },
              clear: function() {
                this.leftList = [], this.rightList = [], this.$emit("input", [])
              },
              remove: function(t) {
                var e = this,
                  i = -1; - 1 != (i = this.leftList.findIndex((function(i) {
                  return i[e.idKey] == t
                }))) ? this.leftList.splice(i, 1) : -1 != (i = this.rightList.findIndex((function(i) {
                  return i[e.idKey] == t
                }))) && this.rightList.splice(i, 1), -1 != (i = this.value.findIndex((function(i) {
                  return i[e.idKey] == t
                }))) && this.$emit("input", this.value.splice(i, 1))
              },
              modify: function(t, e, i) {
                var n = this,
                  a = -1;
                if (-1 != (a = this.leftList.findIndex((function(e) {
                    return e[n.idKey] == t
                  }))) ? this.leftList[e] = i : -1 != (a = this.rightList.findIndex((function(e) {
                    return e[n.idKey] == t
                  }))) && (this.leftList[e] = i), -1 != (a = this.value.findIndex((function(e) {
                    return e[n.idKey] == t
                  })))) {
                  var r = this.cloneData(this.value);
                  r[a][e] = i, this.$emit("input", r)
                }
              }
            }
          };
        e.default = s
      }).call(this, i("df3c").default)
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["uview-ui/components/u-waterfall/u-waterfall-create-component", {
    "uview-ui/components/u-waterfall/u-waterfall-create-component": function(t, e, i) {
      i("df3c").createComponent(i("335e"))
    }
  },
  [
    ["uview-ui/components/u-waterfall/u-waterfall-create-component"]
  ]
]);
