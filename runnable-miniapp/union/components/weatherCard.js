require("../../@babel/runtime/helpers/Arrayincludes"), require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["union/components/weatherCard"], {
    "0251": function(e, t, n) {
      var a = n("47a9");
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var o, r = a(n("7ca3")),
        i = a(n("af34")),
        u = {
          name: "WeatherCard",
          props: {
            weatherWeek: {
              type: Array,
              default: function() {
                return []
              }
            },
            weatherToday: {
              type: Object,
              default: {}
            },
            historyTime: {
              type: String,
              default: ""
            }
          },
          mounted: function() {
            console.log(this.weatherToday, "weatherToday"), this.weatherClass = this.getWeatherClass()
          },
          data: function() {
            return {
              weatherClass: "",
              showPopUp: !1
            }
          },
          computed: {
            displayweatherWeek: function() {
              return this.weatherWeek.length > 0 ? this.weatherWeek.slice(0, 7) : []
            }
          },
          methods: (o = {
            getWeatherClass: function() {
              var e, t = this.weatherToday.weatherCondition;
              e = this.historyTime ? new Date(this.historyTime) : new Date, console.log(e, "targetTime" + this.historyTime);
              var n = e.getHours();
              return n >= 18 || n < 6 ? "weather-night" : t.includes("晴") ? "weather-sunny" : t.includes("阴") ? "weather-nosunny" : t.includes("雨") ? "weather-rainy" : t.includes("雪") ? "weather-snowy" : t.includes("多云") ? "weather-cloudy" : "weather-default"
            },
            getWeatherIcon: function(e) {
              return e.includes("晴") ? "https://eshopfile.zhiyousx.com/175497189462244742.png" : e.includes("阴") ? "https://eshopfile.zhiyousx.com/175497192025124202.png" : e.includes("雨") ? "https://eshopfile.zhiyousx.com/175497193101319851.png" : e.includes("雪") ? "https://eshopfile.zhiyousx.com/175497194312558628.png" : e.includes("多云") ? "https://eshopfile.zhiyousx.com/175497195713498964.png" : ""
            },
            getDayText: function(e) {
              if (!e.predict_date) return "";
              var t = new Date,
                n = new Date(t);
              n.setDate(n.getDate() + 1);
              var a = new Date(e.predict_date);
              return a.toDateString() === n.toDateString() ? "明天" : ["周日", "周一", "周二", "周三", "周四", "周五", "周六"][a.getDay()]
            },
            handleTouchStart: function() {
              this.showPopUp = !0
            },
            handleTouchEnd: function() {
              this.showPopUp = !1
            }
          }, (0, r.default)(o, "handleTouchEnd", (function() {
            this.showPopUp = !1
          })), (0, r.default)(o, "getTempBarStyle", (function(e) {
            var t = Math.min.apply(Math, (0, i.default)(this.displayweatherWeek.map((function(e) {
                return e.temp_low
              })))),
              n = Math.max.apply(Math, (0, i.default)(this.displayweatherWeek.map((function(e) {
                return e.temp_high
              })))) - t;
            return {
              left: (e.temp_low - t) / n * 100 + "%",
              width: (e.temp_high - e.temp_low) / n * 100 + "%"
            }
          })), o)
        };
      t.default = u
    },
    1549: function(e, t, n) {
      var a = n("7542");
      n.n(a).a
    },
    1740: function(e, t, n) {
      n.r(t);
      var a = n("0251"),
        o = n.n(a);
      for (var r in a)["default"].indexOf(r) < 0 && function(e) {
        n.d(t, e, (function() {
          return a[e]
        }))
      }(r);
      t.default = o.a
    },
    7542: function(e, t, n) {},
    c63ea: function(e, t, n) {
      n.r(t);
      var a = n("fc12"),
        o = n("1740");
      for (var r in o)["default"].indexOf(r) < 0 && function(e) {
        n.d(t, e, (function() {
          return o[e]
        }))
      }(r);
      n("1549");
      var i = n("828b"),
        u = Object(i.a)(o.default, a.b, a.c, !1, null, "552cf4c6", null, !1, a.a, void 0);
      t.default = u.exports
    },
    fc12: function(e, t, n) {
      n.d(t, "b", (function() {
        return a
      })), n.d(t, "c", (function() {
        return o
      })), n.d(t, "a", (function() {}));
      var a = function() {
          var e = this,
            t = (e.$createElement, e._self._c, e.getWeatherIcon(e.weatherToday.weatherCondition)),
            n = t ? e.getWeatherIcon(e.weatherToday.weatherCondition) : null,
            a = e.__map(e.displayweatherWeek, (function(t, n) {
              var a = e.__get_orig(t),
                o = e.getDayText(t),
                r = t.predict_date.split("-"),
                i = t.predict_date.split("-"),
                u = e.getWeatherIcon(t.weather_day);
              return {
                $orig: a,
                m2: o,
                g0: r,
                g1: i,
                m3: u,
                m4: u ? e.getWeatherIcon(t.weather_day) : null
              }
            }));
          e.$mp.data = Object.assign({}, {
            $root: {
              m0: t,
              m1: n,
              l0: a
            }
          })
        },
        o = []
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["union/components/weatherCard-create-component", {
    "union/components/weatherCard-create-component": function(e, t, n) {
      n("df3c").createComponent(n("c63ea"))
    }
  },
  [
    ["union/components/weatherCard-create-component"]
  ]
]);
