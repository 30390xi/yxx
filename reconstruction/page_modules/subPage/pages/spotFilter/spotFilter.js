// Extracted from subPage/pages/spotFilter/spotFilter.js; webpack module "40fc".
// Compiled code for analysis; not an original source file.
module.exports = {
    "40fc": function(e, t, a) {
      (function(e) {
        var n = a("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var i = n(a("7eb4")),
          o = n(a("7ca3")),
          c = n(a("34cf")),
          s = n(a("ee10"));

        function r(e, t) {
          var a = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), a.push.apply(a, n)
          }
          return a
        }

        function l(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = null != arguments[t] ? arguments[t] : {};
            t % 2 ? r(Object(a), !0).forEach((function(t) {
              (0, o.default)(e, t, a[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : r(Object(a)).forEach((function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
            }))
          }
          return e
        }
        var d = {
          props: [],
          onLoad: function(t) {
            var a = this;
            this.getConfig(), e.getSystemInfo({
              success: function(e) {
                a.statusBarHeight = e.windowTop
              }
            }), this.getRecommendData(), this.latitude = e.getStorageSync("location").latitude, this.longitude = e.getStorageSync("location").longitude, this.type = t.type ? t.type : 1, this.getAllTag(t)
          },
          data: function() {
            return {
              labelData: [{
                name: "城市",
                key: "cityId",
                children: [{
                  name: "全部",
                  id: ""
                }]
              }, {
                name: "等级",
                key: "level",
                children: [{
                  name: "全部",
                  id: ""
                }, {
                  name: "5A",
                  id: 5
                }, {
                  name: "4A",
                  id: 4
                }, {
                  name: "3A",
                  id: 3
                }, {
                  name: "2A",
                  id: 2
                }, {
                  name: "1A",
                  id: 1
                }, {
                  name: "未评级",
                  id: -1
                }]
              }, {
                name: "分类",
                key: "typeSysTagId",
                children: [{
                  name: "全部",
                  id: ""
                }]
              }, {
                name: "菜系",
                key: "businessType",
                children: [{
                  name: "全部",
                  id: ""
                }]
              }, {
                name: "类型",
                key: "businessType",
                children: [{
                  name: "全部",
                  id: ""
                }]
              }, {
                name: "特色",
                key: "hotelSpecialTagName",
                children: [{
                  name: "全部",
                  id: ""
                }]
              }, {
                name: "兴趣",
                key: "interestTagName",
                children: [{
                  name: "全部",
                  id: ""
                }]
              }, {
                name: "人群",
                key: "peopleSysTagId",
                children: [{
                  name: "全部",
                  id: ""
                }]
              }, {
                name: "门票",
                key: "isFree",
                children: [{
                  name: "全部",
                  id: ""
                }, {
                  name: "付费",
                  id: 2
                }, {
                  name: "免费",
                  id: 1
                }]
              }, {
                name: "排序",
                key: "sortType",
                children: [{
                  name: "综合",
                  id: ""
                }, {
                  name: "距离",
                  id: 1
                }]
              }],
              labels: [],
              leftOffset: [],
              conditions: [{
                name: "全部",
                id: ""
              }, {
                name: "全部",
                id: ""
              }, {
                name: "全部",
                id: ""
              }, {
                name: "全部",
                id: ""
              }, {
                name: "全部",
                id: ""
              }, {
                name: "综合",
                id: ""
              }],
              statusBarHeight: 44,
              spotList: [],
              isFixed: !1,
              spotListTop: 0,
              currentTag: "",
              scrollTop: 0,
              showLabel: !1,
              labelContainerH: 0,
              latitude: "",
              longitude: "",
              current: 1,
              conditionObj: {},
              type: 1,
              serchHeightList: [635, 500, 500, 500],
              spotNameList: ["景区", "美食", "住宿", "玩乐"],
              configTypeShow: 0,
              searchKeyList: [],
              placeholder: "输入您想搜索的内容"
            }
          },
          onPageScroll: function(e) {
            this.showLabel = !1, this.scrollTop = e.scrollTop
          },
          onShow: function() {
            this.longitude || 1 != this.conditions[5].id || this.getLocation()
          },
          onReachBottom: function() {
            this.current += 1, this.getSpotList(this.conditionObj)
          },
          methods: {
            getAllTag: function(e) {
              var t = this,
                a = this;
              this.$uniApi.dataRequestNoLoading("get", "base/app/v1/sysTag/appGetScenicSportTagNew?type=".concat(a.type)).then((function(n) {
                n.data.allCityList.forEach((function(e) {
                  e.name = e.cityName
                }));
                var i = [{
                  name: "全部",
                  id: ""
                }];
                a.labelData[0].children = i.concat(n.data.allCityList), a.labelData[2].children = i.concat(n.data.typeTagList), a.labelData[3].children = i.concat(n.data.typeTagList), a.labelData[4].children = i.concat(n.data.typeTagList), a.labelData[5].children = i.concat(n.data.hotelSpecialServicesTagList), a.labelData[6].children = i.concat(n.data.interestTagListList), a.labelData[7].children = i.concat(n.data.peopleTagList), t.labels = [], 1 == t.type ? (t.labels.push(a.labelData[0], a.labelData[1], a.labelData[2], a.labelData[7], a.labelData[8], a.labelData[9]), t.conditions = [{
                  name: "全部",
                  id: ""
                }, {
                  name: "全部",
                  id: ""
                }, {
                  name: "全部",
                  id: ""
                }, {
                  name: "全部",
                  id: ""
                }, {
                  name: "全部",
                  id: ""
                }, {
                  name: "综合",
                  id: ""
                }]) : 2 == t.type ? (t.labels.push(a.labelData[0], a.labelData[3], a.labelData[7], a.labelData[9]), t.conditions = [{
                  name: "全部",
                  id: ""
                }, {
                  name: "全部",
                  id: ""
                }, {
                  name: "全部",
                  id: ""
                }, {
                  name: "综合",
                  id: ""
                }]) : 3 == t.type ? (t.labels.push(a.labelData[0], a.labelData[4], a.labelData[5], a.labelData[9]), t.conditions = [{
                  name: "全部",
                  id: ""
                }, {
                  name: "全部",
                  id: ""
                }, {
                  name: "全部",
                  id: ""
                }, {
                  name: "综合",
                  id: ""
                }]) : (t.labels.push(a.labelData[0], a.labelData[4], a.labelData[6], a.labelData[9]), t.conditions = [{
                  name: "全部",
                  id: ""
                }, {
                  name: "全部",
                  id: ""
                }, {
                  name: "全部",
                  id: ""
                }, {
                  name: "综合",
                  id: ""
                }]);
                var o = [];
                a.leftOffset = [], t.labels.forEach((function(e) {
                  o.push(0)
                })), setTimeout((function() {
                  a.leftOffset = o
                }), 500), t.$forceUpdate(), e && (e.id ? (a.setlabel(e.index, e.name), a.chooseLabel(e.index, {
                  name: e.name,
                  id: e.id
                })) : 1 == e ? t.getSpotList(t.conditionObj) : t.chooseLabel())
              })).catch((function(e) {}))
            },
            setlabel: function(e, t) {
              var a = this.labels[e].children;
              a.forEach((function(e, n) {
                if (e.name == t) {
                  var i = a.splice(n, 1);
                  a.splice(1, 0, i[0])
                }
              })), this.labels[e].children = a
            },
            getLocation: function() {
              var t = this;
              e.getLocation({
                type: "gcj02",
                success: function(e) {
                  t.latitude = e.latitude, t.longitude = e.longitude, t.getSpotList(t.conditionObj)
                }
              })
            },
            reAuth: function(t) {
              var a = this;
              return (0, s.default)(i.default.mark((function t() {
                var n, o, s, r;
                return i.default.wrap((function(t) {
                  for (;;) switch (t.prev = t.next) {
                    case 0:
                      return t.next = 2, e.showModal({
                        content: "检测到您没打开地址权限，是否去设置打开？",
                        confirmText: "确认",
                        cancelText: "取消"
                      });
                    case 2:
                      if (n = t.sent, o = (0, c.default)(n, 2), s = o[0], r = o[1], !s) {
                        t.next = 8;
                        break
                      }
                      return t.abrupt("return");
                    case 8:
                      if (!r.confirm) {
                        t.next = 10;
                        break
                      }
                      return t.abrupt("return", e.openSetting({
                        success: function(e) {}
                      }));
                    case 10:
                      r.confirm || (a.conditionObj.sortType = "", a.conditions[5] = {
                        name: "综合",
                        id: ""
                      }, a.getSpotList(a.conditionObj));
                    case 11:
                    case "end":
                      return t.stop()
                  }
                }), t)
              })))()
            },
            changeSpot: function(e) {
              this.type = e + 1, this.spotList = [], this.current = 1, this.conditionObj = {}, this.conditionObj.type = this.type, this.currentTag = this.spotNameList[this.type - 1], this.getAllTag(1)
            },
            getConfig: function() {
              var t = this,
                a = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/sysParam/getSysConfigure", {
                paramKey: "SCENIC_TAG_CONTROL"
              }).then((function(n) {
                1 === n.code && (t.configTypeShow = JSON.parse(n.data.paramValue), 1 == t.configTypeShow ? t.serchHeightList = [635, 500, 500, 500] : (t.serchHeightList = [512, 362, 362, 362], t.currentTag = "", console.log(t.serchHeightList)), t.$nextTick((function() {
                  new Promise((function(t) {
                    var a = e.createSelectorQuery();
                    a.select("#spotList").boundingClientRect(), a.exec((function(e) {
                      t(e)
                    }))
                  })).then((function(t) {
                    a.spotListTop = t[0].top - e.upx2px(90), console.log(a.spotListTop)
                  }))
                })))
              }))
            },
            chooseLabel: function() {
              var t = this,
                a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                  name: "全部",
                  id: ""
                },
                i = this;
              this.$nextTick((function() {
                var o = [].concat(i.conditions);
                o[a] = n, i.conditions = o;
                var c = [],
                  s = {};
                t.conditions.forEach((function(e, a) {
                  "businessType" == t.labels[a].key && e.id ? s[t.labels[a].key] = e.name : s[t.labels[a].key] = e.id, ["全部", "综合"].includes(e.name) || c.push(e.name)
                })), t.configTypeShow ? t.currentTag = c.join(" · ") ? t.spotNameList[t.type - 1] + " · " + c.join(" · ") : t.spotNameList[t.type - 1] : t.currentTag = c.join(" · "), t.conditionObj = s, t.conditionObj.type = i.type, t.current = 1, t.spotList = [], 5 != a || t.longitude || 1 != n.id ? (e.pageScrollTo({
                  duration: 0,
                  scrollTop: 0
                }), i.getSpotList(s)) : e.authorize({
                  scope: "scope.userLocation",
                  success: function() {
                    i.getLocation()
                  },
                  fail: function() {
                    i.reAuth()
                  }
                })
              }))
            },
            onShareAppMessage: function(e) {
              var t = "/subPage/pages/spotFilter/spotFilter?type=" + this.type;
              return {
                title: "筛选",
                path: this.$util.setShareUrl(t)
              }
            },
            getSpotList: function(t) {
              var a = this;
              e.showLoading(), this.$uniApi.dataRequestNoLoading("post", "base/app/v1/scenicSpot/getScenicSpotListBySysTag", l(l({}, t), {}, {
                latitude: this.latitude,
                longitude: this.longitude,
                size: 10,
                current: this.current
              })).then((function(t) {
                t.data.records[0] && (a.spotList = a.spotList.concat(t.data.records)), e.hideLoading(), !t.data.records[0] && a.current > 1 && e.showToast({
                  title: "没有更多咯~",
                  icon: "none"
                })
              })).catch((function(t) {
                e.hideLoading()
              }))
            },
            toSpot: function(e) {
              this.$navigateTo({
                url: "/pages/spotDetail/spotDetail?spotId=" + e.scenicId
              })
            },
            getRecommendData: function() {
              var e = this;
              this.$uniApi.getRequestNoLoading("GET", "product/app/v1/searchKey/searchKeyAndDefaultKey").then((function(t) {
                t.data && t.data.defaultSearchKeyList && t.data.defaultSearchKeyList[0] ? t.data.defaultSearchKeyList.forEach((function(t) {
                  e.searchKeyList.push(t.searchKey)
                })) : e.searchKeyList.push(e.placeholder)
              }))
            },
            goSearch: function(e) {
              var t = e == this.placeholder ? "" : e;
              this.$navigateTo({
                url: "/subPage/pages/searchpage/searchpage?default=" + t
              })
            },
            goSearch1: function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
              this.$navigateTo({
                url: "/subPage/pages/searchpage/searchpage?default=" + this.searchKeyList[e] || !1
              })
            }
          }
        };
        t.default = d
      }).call(this, a("df3c").default)
    },
};
