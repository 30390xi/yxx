// Extracted from subPage/pages/waterfall/waterfall.js; webpack module "35cf".
// Compiled code for analysis; not an original source file.
module.exports = {
    "35cf": function(t, e, n) {
      (function(t) {
        var i = n("47a9");
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var a = i(n("7ca3"));

        function o(t, e) {
          var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
          if (!n) {
            if (Array.isArray(t) || (n = function(t, e) {
                if (t) {
                  if ("string" == typeof t) return r(t, e);
                  var n = Object.prototype.toString.call(t).slice(8, -1);
                  return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(t, e) : void 0
                }
              }(t)) || e && t && "number" == typeof t.length) {
              n && (t = n);
              var i = 0,
                a = function() {};
              return {
                s: a,
                n: function() {
                  return i >= t.length ? {
                    done: !0
                  } : {
                    done: !1,
                    value: t[i++]
                  }
                },
                e: function(t) {
                  throw t
                },
                f: a
              }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }
          var o, s = !0,
            c = !1;
          return {
            s: function() {
              n = n.call(t)
            },
            n: function() {
              var t = n.next();
              return s = t.done, t
            },
            e: function(t) {
              c = !0, o = t
            },
            f: function() {
              try {
                s || null == n.return || n.return()
              } finally {
                if (c) throw o
              }
            }
          }
        }

        function r(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
          return i
        }

        function s(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter((function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, i)
          }
          return n
        }

        function c(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? s(Object(n), !0).forEach((function(e) {
              (0, a.default)(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
          }
          return t
        }
        var l = {
          computed: {
            cityNamesFn: function() {
              return function(t) {
                if (!t) return "";
                var e = t.replaceAll(",", "、"),
                  n = t.split(",");
                if (1 == n.length) return "· ".concat(e || "", " ·");
                if (2 == n.length && t.length <= 6) return "· 含".concat(e);
                var i = e.slice(0, 5);
                return "· 含".concat(i || "", "...")
              }
            }
          },
          data: function() {
            return {
              showMask: !0,
              menuList: [{
                id: 1,
                name: "主题玩法",
                isMultiple: !0,
                showType: 4
              }, {
                id: 2,
                name: "游玩天数",
                isMultiple: !1,
                showType: 4
              }, {
                id: 3,
                name: "包含城市",
                isMultiple: !1,
                showType: 4
              }, {
                id: 4,
                name: "热门地点",
                isMultiple: !0,
                showType: 4
              }],
              dataObj: {
                itemList1: [{
                  id: 1,
                  name: "热门",
                  childs: [{
                    id: 1,
                    name: "烤肉",
                    chooseState: !0
                  }, {
                    id: 2,
                    name: "西北菜"
                  }, {
                    id: 3,
                    name: "川湘菜"
                  }, {
                    id: 4,
                    name: "川湘菜"
                  }]
                }],
                itemList2: [{
                  id: 1,
                  name: "商圈",
                  childs: [{
                    id: 1,
                    name: "大润发"
                  }, {
                    id: 2,
                    name: "火车站"
                  }, {
                    id: 3,
                    name: "金牛街"
                  }]
                }],
                itemList3: [{
                  id: 1,
                  name: "商圈",
                  childs: [{
                    id: 1,
                    name: "大润发"
                  }, {
                    id: 2,
                    name: "火车站"
                  }, {
                    id: 3,
                    name: "金牛街"
                  }]
                }],
                itemList4: [{
                  id: 1,
                  name: "用餐人数",
                  childs: [{
                    id: 1,
                    name: "单人餐"
                  }, {
                    id: 2,
                    name: "双人餐"
                  }, {
                    id: 3,
                    name: "3～4人餐"
                  }]
                }]
              },
              hotDetailTops: [{
                name: "线路特色"
              }, {
                name: "线路特色"
              }, {
                name: "线路特色"
              }, {
                name: "线路特色"
              }],
              fixednavTop: 0,
              fixNavTop: 90,
              searchHeight: 0,
              scrollTop: 0,
              navtop2: 100,
              fixedstyle: "z-index: 9999 !important;position: absolute;top: 598rpx;left: 0;width: 100%;",
              navFixed: !1,
              spotList: [],
              hotSpotList: []
            }
          },
          onLoad: function(e) {
            var n = this,
              i = t.getMenuButtonBoundingClientRect();
            this.searchHeight = i.top, t.getSystemInfo({
              success: function(t) {
                n.unit = 750 / t.screenWidth, n.fixNavTop = parseInt(i.top + 80 / n.unit)
              }
            }), this.getDomInfo().then((function(e) {
              t.getSystemInfo({
                success: function(t) {
                  n.fixednavTop = e[1].height - parseInt(68 / n.unit), n.navtop2 = e[0].top
                }
              })
            })), this.getMenuThemeList(), this.getLineListPage()
          },
          onPageScroll: function(t) {
            this.scrollTop = t.scrollTop, this.fixedstyle = t.scrollTop + this.fixNavTop > this.navtop2 ? "width:100%;position:fixed;left:0;z-index:9999;top:".concat(this.fixNavTop, "px") : "z-index: 9999 !important;position: absolute;top: 598rpx;left: 0;width: 100%;", this.navFixed = !!this.fixedstyle
          },
          onReachBottom: function() {
            this.current += 1
          },
          onShow: function() {},
          onShareAppMessage: function(t) {
            return {
              title: "游陕西精品路线攻略",
              imageUrl: "https://eshopfile.zhiyousx.com/169284690523561367.png",
              path: this.$util.setShareUrl("/subPage/pages/waterfall/waterfall")
            }
          },
          onShareTimeline: function(t) {
            return {
              title: "游陕西精品路线攻略",
              path: "/subPage/pages/waterfall/waterfall",
              query: this.$util.setShareTimeline("")
            }
          },
          methods: {
            getDomInfo: function() {
              var e = this;
              return new Promise((function(n) {
                setTimeout((function() {
                  e.$nextTick((function() {
                    var e = t.createSelectorQuery();
                    e.select("#nav").boundingClientRect(), e.select("#fixHeader").boundingClientRect(), e.exec((function(t) {
                      n(t)
                    }))
                  }))
                }), 500)
              }))
            },
            selectionTheme: function(t) {
              var e = this;
              this.dataObj.itemList1[0].childs.map((function(n, i) {
                e.$set(e.dataObj.itemList1[0].childs[i], "chooseState", !1), n.themeId == t.themeId && e.$set(e.dataObj.itemList1[0].childs[i], "chooseState", !0)
              })), this.$refs.liuDropdown.selectType(0, this.dataObj.itemList1)
            },
            getLineListPage: function() {
              var t = this,
                e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              e = c(c({}, e), {}, {
                current: 1,
                size: 999
              }), this.$uniApi.dataRequestNoLoading("POST", "product/app/v1/line/selectPage", e).then((function(e) {
                t.spotList = e.data.records.slice(0, 3), t.hotSpotList = e.data.records.slice(3)
              }))
            },
            toSpot: function(t) {
              this.$navigateTo({
                url: "/subPage/pages/lineInfo/lineInfo?lineId=" + t.lineId
              })
            },
            getMenuThemeList: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("get", "product/app/v1/theme/list", {}).then((function(e) {
                var n = JSON.parse(JSON.stringify(e.data));
                n.map((function(t) {
                  t.name = t.themeName, t.id = t.id, t.chooseState = !1
                })), t.hotDetailTops = n.filter((function(t) {
                  return t.themeUrl
                })), t.dataObj.itemList1[0].childs = n
              })), this.$uniApi.dataRequestNoLoading("get", "product/app/v1/hotDestination/list", {}).then((function(e) {
                var n = JSON.parse(JSON.stringify(e.data));
                n.map((function(t) {
                  t.name = t.scenicName, t.id = t.scenicId
                })), t.dataObj.itemList4[0].childs = n
              })), this.$uniApi.dataRequestNoLoading("get", "product/app/v1/line/getAllLineDayList", {}).then((function(e) {
                var n = [];
                e.data.map((function(t) {
                  var e = t + "天";
                  t >= 10 && (e = t + "天及以上");
                  var i = {
                    name: e,
                    id: t
                  };
                  n.push(i)
                })), t.dataObj.itemList2[0].childs = n
              })), this.$uniApi.dataRequestNoLoading("get", "product/app/v1/line/getAllLineCityList", {}).then((function(e) {
                var n = JSON.parse(JSON.stringify(e.data));
                n.map((function(t) {
                  t.name = t.cityName, t.id = t.cityId
                })), t.dataObj.itemList3[0].childs = n
              }))
            },
            change: function(e) {
              var n, i = {
                  themeIds: [],
                  cityIdList: [],
                  dayList: [],
                  destinationIdList: []
                },
                a = o(e.chooseInfo.itemList1);
              try {
                for (a.s(); !(n = a.n()).done;) {
                  var r, s = o(n.value.childs);
                  try {
                    for (s.s(); !(r = s.n()).done;) {
                      var c = r.value;
                      i.themeIds.push(c.themeId)
                    }
                  } catch (t) {
                    s.e(t)
                  } finally {
                    s.f()
                  }
                }
              } catch (t) {
                a.e(t)
              } finally {
                a.f()
              }
              var l, u = o(e.chooseInfo.itemList3);
              try {
                for (u.s(); !(l = u.n()).done;) {
                  var d, f = o(l.value.childs);
                  try {
                    for (f.s(); !(d = f.n()).done;) {
                      var p = d.value;
                      i.cityIdList.push(p.id)
                    }
                  } catch (t) {
                    f.e(t)
                  } finally {
                    f.f()
                  }
                }
              } catch (t) {
                u.e(t)
              } finally {
                u.f()
              }
              var h, m = o(e.chooseInfo.itemList2);
              try {
                for (m.s(); !(h = m.n()).done;) {
                  var v, g = o(h.value.childs);
                  try {
                    for (g.s(); !(v = g.n()).done;) {
                      var y = v.value;
                      i.dayList.push(y.id)
                    }
                  } catch (t) {
                    g.e(t)
                  } finally {
                    g.f()
                  }
                }
              } catch (t) {
                m.e(t)
              } finally {
                m.f()
              }
              var b, L = o(e.chooseInfo.itemList4);
              try {
                for (L.s(); !(b = L.n()).done;) {
                  var O, w = o(b.value.childs);
                  try {
                    for (w.s(); !(O = w.n()).done;) {
                      var S = O.value;
                      i.destinationIdList.push(S.id)
                    }
                  } catch (t) {
                    w.e(t)
                  } finally {
                    w.f()
                  }
                }
              } catch (t) {
                L.e(t)
              } finally {
                L.f()
              }
              this.getLineListPage(i), t.pageScrollTo({
                scrollTop: 0 - this.scrollTop,
                duration: 500
              })
            }
          }
        };
        e.default = l
      }).call(this, n("df3c").default)
    },
};
