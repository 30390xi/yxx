require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["union/components1/chat-item/chat-item-greatWall"], {
    "074b": function(t, e, n) {},
    "308b": function(t, e, n) {
      n.r(e);
      var i = n("ca75"),
        o = n.n(i);
      for (var a in i)["default"].indexOf(a) < 0 && function(t) {
        n.d(e, t, (function() {
          return i[t]
        }))
      }(a);
      e.default = o.a
    },
    "65a1": function(t, e, n) {
      var i = n("074b");
      n.n(i).a
    },
    7248: function(t, e, n) {
      n.d(e, "b", (function() {
        return i
      })), n.d(e, "c", (function() {
        return o
      })), n.d(e, "a", (function() {}));
      var i = function() {
          var t = this,
            e = (t.$createElement, t._self._c, t.item.historyLine || t.item.nomoreLine ? null : t.item.list && t.item.list.length && 0 == t.item.type),
            n = t.item.historyLine || t.item.nomoreLine || !e ? null : t.__map(t.item.list, (function(e, n) {
              var i = t.__get_orig(e),
                o = t.item.list.length,
                a = e.labels && e.labels.length > 0;
              return {
                $orig: i,
                g1: o,
                g2: a,
                l0: a ? t.getTagData(e.labels) : null
              }
            })),
            i = t.item.historyLine || t.item.nomoreLine ? null : t.item.spotList && t.item.spotList.length,
            o = t.item.historyLine || t.item.nomoreLine ? null : t.item.scenicList && t.item.scenicList.length && (0 == t.currentTab || -1 == t.currentTab),
            a = t.item.historyLine || t.item.nomoreLine ? null : t.item.foodList && t.item.foodList.length && (-1 == t.currentTab || 1 == t.currentTab),
            s = t.item.historyLine || t.item.nomoreLine ? null : t.item.storeList && t.item.storeList.length && (-1 == t.currentTab || 2 == t.currentTab),
            r = t.item.historyLine || t.item.nomoreLine || !t.item.warningData ? null : t.__map(t.item.warningData.pointDataVOList, (function(e, n) {
              return {
                $orig: t.__get_orig(e),
                m0: t.getStatus(e.status)
              }
            }));
          t.$mp.data = Object.assign({}, {
            $root: {
              g0: e,
              l1: n,
              g3: i,
              g4: o,
              g5: a,
              g6: s,
              l2: r
            }
          })
        },
        o = []
    },
    ca75: function(t, e, n) {
      (function(t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var i = {
          name: "chat-item",
          components: {
            zeroMarkdownView: function() {
              n.e("union/components1/components/zero-markdown-view/zero-markdown-view").then(function() {
                return resolve(n("dd9a"))
              }.bind(null, n)).catch(n.oe)
            },
            xjtuTextCard: function() {
              n.e("union/components/xjtuTextCard").then(function() {
                return resolve(n("afdb"))
              }.bind(null, n)).catch(n.oe)
            },
            weatherCard: function() {
              n.e("union/components/weatherCard").then(function() {
                return resolve(n("c63ea"))
              }.bind(null, n)).catch(n.oe)
            }
          },
          props: {
            item: {
              type: Object,
              default: function() {
                return {
                  time: "",
                  icon: "",
                  name: "",
                  content: "",
                  isMe: !1
                }
              }
            },
            pushingProgress: {
              type: Boolean,
              default: function() {
                return !1
              }
            },
            dataList: {
              type: Array,
              default: function() {
                return []
              }
            },
            newVal: {
              type: String,
              default: function() {
                return ""
              }
            },
            lang: {
              type: String,
              default: function() {
                return "zh"
              }
            }
          },
          data: function() {
            return {
              imgStarted: !1,
              imgCompleted: !1,
              imgContent: "",
              imgArray: [],
              countInfos: "",
              index: 0,
              timer: null,
              itemContentCopy: "",
              itemContentIndex: 0,
              displayText: "",
              showMore: !1,
              isSubmiting: !1,
              tabs: [{
                zh: "景点",
                en: "Scenic Spots"
              }, {
                zh: "美食",
                en: "Delicacies"
              }, {
                zh: "宝藏小店",
                en: "Treasure Shops"
              }],
              currentTab: -1
            }
          },
          computed: {
            haveTabs: function() {
              var t = 0;
              return this.item.scenicList && this.item.scenicList.length > 0 && t++, this.item.foodList && this.item.foodList.length > 0 && t++, this.item.storeList && this.item.storeList.length > 0 && t++, t > 1 && (this.currentTab = 0), t > 1
            }
          },
          mounted: function() {
            this.displayText = "", this.index = 0
          },
          created: function() {},
          methods: {
            scenicDetails: function(t) {
              this.pushingProgress ? (this.$eventAnalyse.analyse({
                eventTag: "ai_escortScenicSpots_click",
                eventName: "伴游去景区详情",
                eventParams: {
                  url: "/pages/spotDetailNew/spotDetailNew?spotId=" + t.id
                }
              }), this.$navigateTo({
                url: "/pages/spotDetailNew/spotDetailNew?spotId=" + t.id
              })) : this.$util.showToast("zh" == this.lang ? "请稍候" : "Please wait")
            },
            gotoMap: function(e) {
              this.pushingProgress ? t.openLocation({
                latitude: +e.latitude,
                longitude: +e.longitude,
                name: "zh" == this.lang ? e.name ? e.name : e.inDoor : e.english && e.english.name ? e.english.name : e.inDoor
              }) : this.$util.showToast("zh" == this.lang ? "请稍候" : "Please wait")
            },
            goPhotoPose: function() {
              t.navigateTo({
                url: "/pages/webpage/webpage?url=https://eshop.zhiyousx.com/dsmall-admin-ui/h5/photoPose.html*lang+".concat(this.lang)
              })
            },
            itemContent: function() {
              var t = this;
              if (!this.item.content) return this.displayText = "", void(this.index = 0);
              var e = setInterval((function() {
                t.index < t.item.content.length ? (t.displayText += t.item.content.charAt(t.index), t.index++) : clearInterval(e)
              }), 50)
            },
            askAgain: function(t) {
              this.pushingProgress ? (this.$eventAnalyse.analyse({
                eventTag: "ai_defaultAnswer_click",
                eventName: "小七点击回答推荐问题",
                eventParams: {
                  msg: t
                }
              }), this.$emit("askAgain", t)) : this.$util.showToast("zh" == this.lang ? "请稍候" : "Please wait")
            },
            showPic: function(e) {
              var n = [e.data.url];
              t.previewImage({
                urls: n
              })
            },
            getStatus: function(t) {
              return "舒适" == t ? "zh" == this.lang ? "客流量较少" : "Low visitor flow" : "拥挤" == t ? "zh" == this.lang ? "客流量较多" : "High visitor flow" : "爆满" == t ? "zh" == this.lang ? "客流量爆满" : "Full visitor flow" : void 0
            },
            downloadFile: function(t) {},
            getTagData: function(t) {
              return t ? t.split(",") : []
            },
            makePhoneCall: function(e) {
              var n = this;
              this.pushingProgress ? t.makePhoneCall({
                phoneNumber: e,
                success: function() {
                  console.log("拨打电话成功")
                },
                fail: function(t) {
                  console.log("拨打电话失败", t), n.$util.showToast("拨打电话失败")
                }
              }) : this.$util.showToast("zh" == this.lang ? "请稍候" : "Please wait")
            },
            previewImage: function(e) {
              this.pushingProgress ? t.previewImage({
                urls: [e],
                current: e
              }) : this.$util.showToast("zh" == this.lang ? "请稍候" : "Please wait")
            },
            changeTab: function(t) {
              this.currentTab = t
            }
          }
        };
        e.default = i
      }).call(this, n("df3c").default)
    },
    e3d2: function(t, e, n) {
      n.r(e);
      var i = n("7248"),
        o = n("308b");
      for (var a in o)["default"].indexOf(a) < 0 && function(t) {
        n.d(e, t, (function() {
          return o[t]
        }))
      }(a);
      n("65a1");
      var s = n("828b"),
        r = Object(s.a)(o.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
      e.default = r.exports
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["union/components1/chat-item/chat-item-greatWall-create-component", {
    "union/components1/chat-item/chat-item-greatWall-create-component": function(t, e, n) {
      n("df3c").createComponent(n("e3d2"))
    }
  },
  [
    ["union/components1/chat-item/chat-item-greatWall-create-component"]
  ]
]);
