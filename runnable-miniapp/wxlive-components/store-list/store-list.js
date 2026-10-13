module.exports = require("../../_commons/0.js")([require("../../_commons/1.js"), require("../../_commons/3.js"), require("../../_commons/6.js"), require("../../_commons/2.js"), require("../../_commons/4.js"), require("../../_commons/5.js"), require("../../_commons/7.js"), require("../../_commons/8.js"), require("../../_commons/9.js"), require("../../_commons/10.js"), require("../../_commons/11.js"), {
  ids: [84],
  modules: {
    221: function(o, t, e) {
      e.r(t);
      var i = e(7),
        s = e.n(i),
        n = e(0),
        r = e(3),
        a = e(2),
        c = e(1),
        u = e(5),
        d = e(15);

      function l(o, t) {
        var e = Object.keys(o);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(o);
          t && (i = i.filter((function(t) {
            return Object.getOwnPropertyDescriptor(o, t).enumerable
          }))), e.push.apply(e, i)
        }
        return e
      }

      function h(o) {
        for (var t = 1; t < arguments.length; t++) {
          var e = null != arguments[t] ? arguments[t] : {};
          t % 2 ? l(Object(e), !0).forEach((function(t) {
            s()(o, t, e[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e)) : l(Object(e)).forEach((function(t) {
            Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(e, t))
          }))
        }
        return o
      }
      Component({
        behaviors: [u.a, d.a],
        data: {
          isShow: !1,
          componentName: "storePanel",
          waterMarkBottom: "",
          curLiveStatusCode: "",
          allLiveStatusCode: [],
          showStorePanel: !1,
          storePanelStatus: n.a.STORE_LIST_STATUS.LOADING,
          uiStoreListHeight: 0,
          goodsList: [],
          goodsHotList: [],
          goodsVideoList: [],
          couponList: [],
          showRecord: !1,
          showMoreCouponBtn: !1,
          openMoreCouponBtn: !1,
          showGetCouponTips: !1,
          isHideStorePanelInEnd: !0,
          screenHeight: 0,
          newHeight: 0,
          screenType: "",
          emptyListHeight: "",
          uiHalfScreenHeight: 0,
          goodsLikeList: {},
          goodsRecordFrom: 0,
          micPanelMode: n.a.MIC_PLAYER_MODE.CHOOSE_LINK_MIC_TYPE,
          uiPlatform: ""
        },
        liveStore: {
          observers: {
            roomDynamicInfo: function(o) {
              try {
                this.handleGoodsList(o), this.handleCouponList(o), this.storeSetData({
                  storePanelStatus: n.a.STORE_LIST_STATUS.NORMAL
                })
              } catch (o) {
                this.logError("[货架] roomDynamicInfoObserver logic error", o), this.reportPerformance("LOGIC_ERROR", 1, "pluginVersion")
              }
            },
            screenType: function() {
              try {
                var o = this.liveManager.data.waterMarkBottom,
                  t = o ? o - 25 - 14 : 0;
                this.storeSetData({
                  emptyListHeight: a.a.getScreenHeight() - t - 39 - 30
                })
              } catch (o) {
                this.logError("[货架] screenType logic error", o)
              }
            },
            showStorePanel: function(o) {
              o && (this._reportExposureCoupon(), this._reportExposureGoods())
            }
          }
        },
        lifetimes: {
          attached: function() {
            this.uiPlatform()
          },
          detached: function() {
            clearInterval(this.seckillCountdownTimer)
          }
        },
        methods: {
          uiPlatform: function() {
            var o = wx.getSystemInfoSync().platform;
            this.setData({
              uiPlatform: o
            })
          },
          onStoreDataReady: function() {
            this.storeSetData({
              screenHeight: a.a.getScreenHeight(),
              uiHalfScreenHeight: 3 * this.storeData.windowHeight / 5
            }), this.setData({
              newHeight: .5073 * a.a.getScreenHeight()
            });
            var o = this.getReqBase(),
              t = this;
            wx.getStorage({
              key: "likeListCache-".concat(o.roomAppid, "-").concat(o.roomId),
              success: function(o) {
                t.storeSetData({
                  goodsLikeList: o.data
                })
              }
            })
          },
          clickLike: a.a.throttle((function(o) {
            var t = this;
            if ((wx.getEnterOptionsSync && wx.getEnterOptionsSync().scene || -1) !== n.a.SHARE_FRIENDS_SCENE) {
              var e = o.currentTarget.dataset,
                i = e.id,
                s = e.like;
              this.logInfo("[clickLike]", s, i);
              var u = this.data,
                d = u.goodsLikeList,
                l = u.goodsList;
              if (!d[i]) {
                var p = this.getReqBase(),
                  g = h({}, p);
                "number" == typeof i ? g.goods_id = i : g.goods_id_str = i, wx.vibrateShort({
                  type: "heavy"
                }), r.a.goodsLike(g).then((function() {})).catch((function(o) {
                  t.logInfo("[clickLike] err", o), c.a.tipsSimple("点赞失败")
                })), l = l.map((function(o) {
                  var t = o.goods_id === i ? (o.localLike || 0) + 1 : o.localLike;
                  return o.goods_id === i && (d[i] = t), h(h({}, o), {}, {
                    localLike: t,
                    like: o.goods_id === i ? a.a.likeFormatNumber((o.localLike || 0) + 1) : o.like,
                    isClickLike: o.isClickLike ? o.isClickLike : o.goods_id === i
                  })
                })), this.storeSetData({
                  goodsList: l,
                  goodsLikeList: d
                }), wx.setStorageSync("likeListCache-".concat(p.roomAppid, "-").concat(p.roomId), d)
              }
            } else c.a.tipsSimple("请前往小程序使用完整服务")
          }), 500),
          hotClickLike: a.a.throttle((function(o) {
            var t = this;
            if ((wx.getEnterOptionsSync && wx.getEnterOptionsSync().scene || -1) !== n.a.SHARE_FRIENDS_SCENE) {
              var e = o.currentTarget.dataset,
                i = e.id,
                s = e.like;
              this.logInfo("[hotClickLike]", s, i);
              var u = this.data,
                d = u.goodsLikeList,
                l = u.goodsList,
                p = u.goodsHotList;
              if (!d[i]) {
                var g = this.getReqBase(),
                  S = h({}, g);
                "number" == typeof i ? S.goods_id = i : S.goods_id_str = i, wx.vibrateShort({
                  type: "heavy"
                }), r.a.goodsLike(S).then((function() {})).catch((function(o) {
                  t.logInfo("[hotClickLike] err", o)
                })), l = l.map((function(o) {
                  var t = o.goods_id === i ? (o.localLike || 0) + 1 : o.localLike;
                  return o.goods_id === i && (d[i] = t), h(h({}, o), {}, {
                    localLike: t,
                    like: o.goods_id === i ? a.a.likeFormatNumber((o.localLike || 0) + 1) : o.like,
                    isClickLike: o.isClickLike ? o.isClickLike : o.goods_id === i
                  })
                })), p = p.map((function(o) {
                  var t = o.goods_id === i ? (o.localLike || 0) + 1 : o.localLike;
                  return o.goods_id === i && (d[i] = t), h(h({}, o), {}, {
                    localLike: t,
                    like: o.goods_id === i ? a.a.likeFormatNumber((o.localLike || 0) + 1) : o.like,
                    isClickLike: o.isClickLike ? o.isClickLike : o.goods_id === i
                  })
                })), this.storeSetData({
                  goodsList: l,
                  goodsHotList: p,
                  goodsLikeList: d
                }), wx.setStorageSync("likeListCache-".concat(g.roomAppid, "-").concat(g.roomId), d)
              }
            } else c.a.tipsSimple("请前往小程序使用完整服务")
          }), 500),
          goodsRecord: function(o) {
            if ((wx.getEnterOptionsSync && wx.getEnterOptionsSync().scene || -1) !== n.a.SHARE_FRIENDS_SCENE)
              if (this.data.micPanelMode !== n.a.MIC_PLAYER_MODE.CONNECTING) {
                var t = o.currentTarget.dataset.id;
                this.storeSetData({
                  showRecord: !0,
                  showReplay: !1,
                  curCommentList: [],
                  playGoodsRecordId: t,
                  showStorePanel: !1,
                  goodsRecordFrom: this.data.curLiveStatusCode
                }), this.addReportMMData({
                  actionType: 4,
                  subActionType: 41,
                  goodsId: t
                }), this.logInfo("[goodsRecord]", t)
              } else c.a.tipsSimple("与主播连麦中，暂不支持观看商品讲解");
            else c.a.tipsSimple("请前往小程序使用完整服务")
          },
          handleCouponList: function(o) {
            var t = o.coupons && o.coupons.coupons || [],
              e = this.storeData.couponList,
              i = {};
            e.forEach((function(o) {
              void 0 !== o.isGetCouponSucc && (i[o.coupon_id] = o)
            })), t.forEach((function(o) {
              var t = i[o.coupon_id];
              t && (o.isGetCouponSucc = t.isGetCouponSucc)
            })), t = t.filter((function(o) {
              return o.is_given || void 0 !== o.isGetCouponSucc || o.status === n.a.COUPON_STATUS.STATUS_ON_SALE
            })), (t = this._sortCoupon(t)).length && this.logInfo("[优惠券] 展示", t), this.storeSetData({
              couponList: t,
              showMoreCouponBtn: t.length > 1,
              showGetCouponTips: t.filter((function(o) {
                return o.is_given || o.isGetCouponSucc
              })).length > 0
            })
          },
          _sortCoupon: function(o) {
            var t = [];
            return o.forEach((function(o) {
              0 === o.is_given && t.push(o)
            })), o.forEach((function(o) {
              1 === o.is_given && t.push(o)
            })), t
          },
          onClickMoreCoupon: function() {
            this.addReportMMData({
              actionType: 4,
              subActionType: this.data.openMoreCouponBtn ? 34 : 33
            }), this.storeSetData({
              openMoreCouponBtn: !this.data.openMoreCouponBtn
            }, !0)
          },
          onGetCoupon: function(o) {
            if ((wx.getEnterOptionsSync && wx.getEnterOptionsSync().scene || -1) !== n.a.SHARE_FRIENDS_SCENE) {
              var t = o.currentTarget.dataset.index,
                e = this.data.couponList[t] || null;
              e && e.coupon_id && (this.logInfo("[领取优惠券][store-list]", {
                index: t,
                coupon: e
              }), this.handleClickCoupon(e, "list"))
            } else c.a.tipsSimple("请前往小程序使用完整服务")
          },
          onClickViewGoods: function(o) {
            var t = o.currentTarget.dataset.index,
              e = this.data.goodsList[t];
            e && (this.logInfo("onClickViewGoods", {
              index: t,
              goods: e
            }), this.handleViewGoods(e, "list"))
          },
          onCloseStore: function() {
            var o = this;
            this.setData({
              isShow: !1
            }), "horizontal" === this.data.screenType ? setTimeout((function() {
              o.storeSetData({
                showStorePanel: !1
              })
            }), 400) : setTimeout((function() {
              o.storeSetData({
                showStorePanel: !1
              })
            }), 200)
          },
          showStorePanelObserver: function(o) {
            this.setData({
              isShow: this.storeData.showStorePanel
            }), o && (this._reportExposureCoupon(), this._reportExposureGoods())
          },
          _reportExposureCoupon: function() {
            var o = this.storeData.curLiveStatusCode,
              t = o === n.a.LIVE_STATUS.END || o === n.a.LIVE_STATUS.REPLAY ? 2 : 3,
              e = [];
            this.storeData.couponList.forEach((function(o) {
              e.push(o.coupon_id)
            }));
            var i = e.join(":#:");
            this.addReportMMData({
              actionType: 4,
              subActionType: 31,
              reserves: t,
              couponId: i
            })
          },
          _reportExposureGoods: function() {
            var o = this.storeData,
              t = o.curLiveStatusCode,
              e = o.goodsList,
              i = t === n.a.LIVE_STATUS.END || t === n.a.LIVE_STATUS.REPLAY ? 2 : 3,
              s = [],
              r = [];
            e.forEach((function(o) {
              s.push(String(o.goods_id_str || o.goods_id)), r.push(o.name)
            }));
            for (var a = 0, c = e.length; a < c; a += 100) {
              var u = s.slice(a, a + 100).join(":#:"),
                d = s.slice(a, a + 100).join(":#:");
              this.addReportMMData({
                actionType: 4,
                subActionType: 15,
                reserves: i,
                goodsId: u,
                goodsName: d
              })
            }
          }
        }
      })
    },
    56: function(o, t, e) {
      o.exports = e(221)
    }
  },
  entries: [
    [56, 0, 1, 3, 6, 2, 4, 5, 7, 8, 9, 10, 11]
  ]
}]);
