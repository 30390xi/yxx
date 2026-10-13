module.exports = require("../../_commons/0.js")([require("../../_commons/1.js"), require("../../_commons/3.js"), require("../../_commons/6.js"), require("../../_commons/2.js"), require("../../_commons/4.js"), require("../../_commons/5.js"), require("../../_commons/7.js"), require("../../_commons/11.js"), require("../../_commons/22.js"), {
  ids: [59],
  modules: {
    245: function(e, t, o) {
      o.r(t);
      var s = o(7),
        r = o.n(s),
        i = o(0),
        n = o(5),
        a = o(15),
        u = o(25);

      function c(e, t) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          t && (s = s.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), o.push.apply(o, s)
        }
        return o
      }

      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {};
          t % 2 ? c(Object(o), !0).forEach((function(t) {
            r()(e, t, o[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : c(Object(o)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
          }))
        }
        return e
      }
      var h = function() {
        for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) t[o] = arguments[o]
      };
      Component({
        behaviors: [n.a, a.a, u.a],
        data: {
          componentName: "goodsPush",
          from: "",
          screenType: "",
          goodsPush: null,
          showRecord: !1,
          uiArrowLeftVeritical: 0,
          uiArrowLeftHorizontal: 0,
          showCommentIcon: !1
        },
        lifetimes: {
          ready: function() {
            this.uiGetStorePosition(this.data.screenType)
          },
          attached: function() {},
          detached: function() {
            this.goodsPushTimer && clearTimeout(this.goodsPushTimer)
          }
        },
        methods: {
          goodsPushObserver: function(e) {
            this.uiCountArrow()
          },
          screenTypeObserver: function() {
            var e = this;
            setTimeout((function() {
              e.uiCountArrow("screenType")
            }), 300)
          },
          uiCountArrow: function(e) {
            var t = wx.getStorageSync("uiPersonOperationStoreBtnHorizontalLeft"),
              o = wx.getStorageSync("uiPersonOperationStoreBtnVerticalLeft");
            "horizontal" === this.data.screenType && this.data.uiArrowLeftHorizontal !== t ? ("screenType" !== e || "screenType" === e && !this.data.uiArrowLeftHorizontal) && this.setData({
              uiArrowLeftHorizontal: t
            }) : "horizontal" !== this.data.screenType && this.data.uiArrowLeftVeritical !== o && ("screenType" !== e || "screenType" === e && !this.data.uiArrowLeftVeritical) && this.setData({
              uiArrowLeftVeritical: o
            })
          },
          onBeforeDataReady: function() {
            var e = this,
              t = this.storeData.goodsPush;
            if (t) {
              var o = t.pushInterval - (this.liveManager.getServerTime() - t.timestamp);
              t.leftTime = o, isNaN(o) && o <= 0 ? (console.log("[飘出商品] [onBeforeDataReady] 推送过期", t), this.storeSetData({
                goodsPush: null,
                isRenderStorePackup: !0
              })) : (this.goodsPushTimer && clearTimeout(this.goodsPushTimer), this.goodsPushTimer = setTimeout((function() {
                e.storeSetData({
                  goodsPush: null,
                  isRenderStorePackup: !0
                }, !0)
              }), 1e3 * o))
            }
          },
          onStoreDataReady: function() {},
          roomDynamicInfoObserver: function(e) {
            if (h("roomDynamicInfoObserver", e, this.storeData.showStoreIcon), this.storeData.showStoreIcon) try {
              this.handleGoodsList(e), h("goodsList", this.storeData.goodsList), this.getGoodsPush(e)
            } catch (e) {
              this.logError("[飘出商品] logic err", e), console.error("[飘出商品] logic err", e), this.reportPerformance("LOGIC_ERROR", 1, "pluginVersion")
            }
          },
          getGoodsPush: function(e) {
            var t = this,
              o = this._getGoodsPushSimple(e);
            if (o) {
              h("[roomDynamicInfoObserver] push_msg", {
                push_msg: o
              }), this.storeSetDataNoSync({
                goodsPushVersion: o.version
              });
              var s = this._getGoodsPush(o, e);
              s && (h("[roomDynamicInfoObserver] 计算出的 goodsPush", s), this.storeSetData({
                goodsPush: s
              }), this.goodsPushTimer && clearTimeout(this.goodsPushTimer), this.goodsPushTimer = setTimeout((function() {
                t.storeSetData({
                  goodsPush: null,
                  isRenderStorePackup: !0
                }, !0)
              }), 1e3 * s.leftTime), this.addReportMMData({
                actionType: 4,
                subActionType: 15,
                reserves: 1,
                goodsId: s.goods_id
              }))
            }
          },
          _getGoodsPushSimple: function(e) {
            var t = e.push_msg && e.push_msg.list || [],
              o = {};
            if (t.length > 0 && t[0].msg_content) {
              var s = JSON.parse(t[0].msg_content);
              o = {
                id: String(s.goods_id_str || s.goods_id),
                goods_id: String(s.goods_id_str || s.goods_id),
                goods_id_str: s.goods_id_str,
                third_party_tag: s.goods_source || s.third_party_tag || 0,
                timestamp: t[0].timestamp,
                version: t[0].msg_id
              }
            }
            return o.id && o.timestamp && o.version ? o : null
          },
          _getGoodsPush: function(e, t) {
            var o = String(e.goods_id_str || e.id),
              s = e.timestamp,
              r = t.settings && t.settings.push_interval || 60,
              n = r - (this.liveManager.getServerTime() - s);
            if (n <= 0) return h("[_getGoodsPush] 推送过期", {
              pushInterval: r,
              leftTime: n,
              curPushId: o,
              serverTime: this.liveManager.getServerTime()
            }), null;
            var a = null;
            return (this.storeData.goodsList || []).forEach((function(t) {
              String(t.goods_id_str || t.goods_id) === o && t.flag === i.a.GOODS_FLAG.GOODS_FLAG_NORMAL && (a = d(d({}, t), {}, {
                timestamp: s,
                leftTime: n,
                pushInterval: r
              }), h("[_getGoodsPush] 推送中 ", {
                pushInfo: e,
                curGoodsPushInfo: a
              }))
            })), a || null
          },
          onClickViewGoods: function() {
            if ("player" === this.storeData.from) {
              h("[onClickViewGoods] 推送", {
                info: this.storeData.goodsPush,
                from: this.storeData.from
              });
              var e = d({}, this.storeData.goodsPush);
              this.handleViewGoods(e, "push")
            }
          },
          testGoodsPush: function() {
            return {
              goods_id: 1323,
              cover_img_url: "http://mmbiz.qpic.cn/mmbiz_jpg/FVribAGdErI3aGQmJeGlMELIq6JibgKqolFyicjzwFtG3UoXdOW58ciaB8Ezs6QAKziaNtrlrKEnyBgnuloko9F7Rmw/0",
              name: "撒打发斯蒂芬",
              price: 2,
              url: "/pages/index/index?query_id=test_value&room_id=4796&openid=o7esq5HWrGU7VYYjLhXkifbCINCA&custom_params=&type=&wxlive_type=",
              flag: 1,
              price_type: 1,
              price2: 0,
              audit_status: 2,
              audit_message: {
                audit_id: 434966063,
                msg: ""
              },
              create_time: 1594135907,
              update_time: 1594633902,
              ext_message: {
                urlcode: "http://mmbiz.qpic.cn/mmbiz_jpg/FVribAGdErI3aGQmJeGlMELIq6JibgKqolXFibsU0kzBWIsgHzVM6wMER7C1suskF47TbCbKHjWLcnORpl4BLftMg/0"
              },
              third_party_tag: 0,
              on_shelves: 1,
              timestamp: 1595317538,
              leftTime: 23,
              pushInterval: 60
            }
          }
        }
      })
    },
    59: function(e, t, o) {
      e.exports = o(245)
    }
  },
  entries: [
    [59, 0, 1, 3, 6, 2, 4, 5, 7, 11, 22]
  ]
}]);
