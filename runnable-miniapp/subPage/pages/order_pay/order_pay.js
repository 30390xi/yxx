require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPage/pages/order_pay/order_pay"], {
    "7fc8": function(t, e, i) {
      i.r(e);
      var o = i("b315"),
        n = i("a3f0");
      for (var r in n)["default"].indexOf(r) < 0 && function(t) {
        i.d(e, t, (function() {
          return n[t]
        }))
      }(r);
      i("b5ae");
      var a = i("828b"),
        u = Object(a.a)(n.default, o.b, o.c, !1, null, "3a55a765", null, !1, o.a, void 0);
      e.default = u.exports
    },
    "89bf": function(t, e, i) {
      (function(t, e) {
        var o = i("47a9");
        i("5366"), o(i("3240"));
        var n = o(i("7fc8"));
        t.__webpack_require_UNI_MP_PLUGIN__ = i, e(n.default)
      }).call(this, i("3223").default, i("df3c").createPage)
    },
    a3f0: function(t, e, i) {
      i.r(e);
      var o = i("d070"),
        n = i.n(o);
      for (var r in o)["default"].indexOf(r) < 0 && function(t) {
        i.d(e, t, (function() {
          return o[t]
        }))
      }(r);
      e.default = n.a
    },
    a96f: function(t, e, i) {},
    b315: function(t, e, i) {
      i.d(e, "b", (function() {
        return n
      })), i.d(e, "c", (function() {
        return r
      })), i.d(e, "a", (function() {
        return o
      }));
      var o = {
          uniNavbar: function() {
            return i.e("components/uni-navbar/uni-navbar").then(i.bind(null, "101a"))
          },
          uPopup: function() {
            return i.e("uview-ui/components/u-popup/u-popup").then(i.bind(null, "39fb"))
          },
          uForm: function() {
            return i.e("uview-ui/components/u-form/u-form").then(i.bind(null, "3a6f"))
          },
          uFormItem: function() {
            return Promise.all([i.e("common/vendor"), i.e("uview-ui/components/u-form-item/u-form-item")]).then(i.bind(null, "09a7"))
          },
          uInput: function() {
            return Promise.all([i.e("common/vendor"), i.e("uview-ui/components/u-input/u-input")]).then(i.bind(null, "5cbc"))
          }
        },
        n = function() {
          var t = this,
            e = (t.$createElement, t._self._c, t._f("toFixed2")(t.count)),
            i = t.giftBagData.orderActivePrize && t.giftBagData.orderActivePrize.giftBag ? t.__map(t.giftBagData.orderActivePrize.giftBag.giftBagCouponList, (function(e, i) {
              return {
                $orig: t.__get_orig(e),
                f1: t._f("timeFormat")(e.validityStartTime.split(" ")[0]),
                f2: t._f("timeFormat")(e.validityEndTime.split(" ")[0])
              }
            })) : null;
          t.$mp.data = Object.assign({}, {
            $root: {
              f0: e,
              l0: i
            }
          })
        },
        r = []
    },
    b5ae: function(t, e, i) {
      var o = i("a96f");
      i.n(o).a
    },
    d070: function(t, e, i) {
      (function(t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var i = {
          data: function() {
            return {
              count: 0,
              guideCopywriting: "",
              subscribeType: null,
              isSpecial: 0,
              showGiftBag: !1,
              giftBagData: {},
              gbCl: 0,
              animationType: 0,
              audio: t.createInnerAudioContext(),
              openAudio: " https://eshopfile.zhiyousx.com/ysx/openBox.m4a",
              beforeAudio: "https://eshopfile.zhiyousx.com/ysx/wobGold.mp3",
              newOpen: "https://eshopfile.zhiyousx.com/ysx/newOpen.mp3",
              showPacketBox: !1,
              form: {
                name: "",
                phone: "",
                address: ""
              },
              giftPhone: !1,
              placehod: "",
              orderActiveRecordId: "",
              noGift: !1,
              giftMoney: !1,
              orderType: "",
              activeRule: ""
            }
          },
          onLoad: function(t) {
            this.guideCopywriting = t.guideCopywriting, this.isSpecial = t.isSpecial, this.subscribeType = t.subscribeType, t.count ? this.count = t.count : this.count = 0, this._from = t.type, this._orderId = t.orderId, this._itemId = t.itemId, this.orderType = t.orderType, this.getGiftBagForOrder(), this.audio.loop = !0, this.audio.src = this.beforeAudio
          },
          onUnload: function() {
            this.audio.stop(), this.audio.destroy()
          },
          filters: {
            toFixed2: function(t) {
              return t ? Number(t).toFixed(2) : "0.00"
            },
            timeFormat: function(t) {
              return t.split(" ")[0].replace(/-/g, ".")
            }
          },
          methods: {
            openRedBox: function() {
              var t = this;
              this.audio.stop(), this.audio.loop = !1, this.animationType = 1, this.audio.src = this.newOpen, this.audio.play(), setTimeout((function() {
                t.animationType = 2
              }), 1e3), setTimeout((function() {
                t.animationType = 3
              }), 2e3), setTimeout((function() {
                1 == t.giftBagData.orderActivePrize.prizeType ? t.showGiftBag = !0 : 2 == t.giftBagData.orderActivePrize.prizeType ? t.giftMoney = !0 : 3 == t.giftBagData.orderActivePrize.prizeType ? t.giftPhone = !0 : t.noGift = !0
              }), 3200), setTimeout((function() {
                t.animationType = 4
              }), 3500), setTimeout((function() {
                t.showPacketBox = !1
              }), 4500)
            },
            goActive: function() {
              if (this.activeRule) {
                var e = this.activeRule; - 1 != e.indexOf("?") && (e = (e = e.replace("?", "*")).replace("=", "+")), t.navigateTo({
                  url: "/pages/webpage/webpage?url=".concat(e)
                })
              }
            },
            sure: function() {
              var t = this;
              if (!this.form.name) return this.$util.showToast("请填写姓名");
              if (!this.form.phone) return this.$util.showToast("请填写手机号");
              if (!/^1[23456789]\d{9}$/.test(this.form.phone)) return this.$util.showToast("请填写正确手机号");
              if (!this.form.address) return this.$util.showToast("请填写地址");
              var e = this.form,
                i = {
                  contactName: e.name,
                  contactMobile: e.phone,
                  address: e.address,
                  orderActiveRecordId: this.orderActiveRecordId
                };
              this.$uniApi.dataRequestNoLoading("POST", "order/app/v1/orderActive/updateContactInfo", i).then((function(e) {
                1 == e.code && t.$util.showToast("提交成功，奖品将于订单使用后尽快安排发出")
              })).catch((function(t) {})).finally((function() {
                t.giftPhone = !1
              }))
            },
            closeGiftPack: function() {
              1 == this.giftBagData.orderActivePrize.prizeType ? this.showGiftBag = !1 : 2 == this.giftBagData.orderActivePrize.prizeType ? this.giftMoney = !1 : this.noGift = !1, this.audio.stop(), this.audio.destroy()
            },
            goOrder: function() {
              "ticket" == this._from ? this.$navigateTo({
                url: "/subPage/pages/orderDetailtick/orderDetailtick?orderId=" + this._orderId
              }) : this.$navigateTo({
                url: "/pages/myorder/myorder?type=0"
              })
            },
            jumpToGear: function() {
              this.$navigateTo({
                url: "/subPage/pages/snowGear/snowGear?orderId=" + this._orderId
              })
            },
            onBackHome: function() {
              t.switchTab({
                url: "/pages/index/index"
              })
            },
            jumpType: function(t) {
              "index" == t ? this.onBackHome() : "order" == t && this.goOrder()
            },
            ticketNotice: function(t) {
              this.jumpType(t)
            },
            getGiftBagForOrder: function() {
              var t = this;
              if (this._orderId) {
                var e = {
                  orderType: this.orderType
                };
                1 == this.orderType ? e.orderId = this._orderId : e.groupOrderId = this._orderId, this.$uniApi.dataRequestNoLoading("POST", "order/app/v1/orderActive/lottery", e).then((function(e) {
                  e.data && e.data.orderActivePrize && (t.giftBagData = e.data, t.activeRule = e.data.activeRule, 1 == e.data.orderActivePrize.prizeType ? t.gbCl = e.data.orderActivePrize.giftBag.giftBagCouponList.length : t.gbCl = 0, 3 == e.data.orderActivePrize.prizeType && (t.orderActiveRecordId = e.data.orderActiveRecordId), t.showPacketBox = !0, t.openRedBox())
                }))
              }
            },
            receiveGiftBag: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/giftBag/receive/" + this.giftBagData.giftBagId + "?orderId=" + this._orderId).then((function(e) {
                1 === e.code || t.$util.showToast(e.msg)
              }))
            },
            closeBox: function() {
              0 == this.animationType && (this.showPacketBox = !1, this.audio.stop(), this.audio.destroy())
            },
            goDiscounts: function() {
              this.safeRouter("/subPage/pages/myDiscounts/myDiscounts")
            },
            safeRouter: function(t) {
              this.$util.isLogin(t) && this.$navigateTo({
                url: t
              })
            }
          }
        };
        e.default = i
      }).call(this, i("df3c").default)
    }
  },
  [
    ["89bf", "common/runtime", "common/vendor"]
  ]
]);
