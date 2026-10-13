require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPage/components/gift-pack/gift-pack"], {
    2203: function(t, e, i) {
      i.r(e);
      var n = i("2f28"),
        o = i.n(n);
      for (var a in n)["default"].indexOf(a) < 0 && function(t) {
        i.d(e, t, (function() {
          return n[t]
        }))
      }(a);
      e.default = o.a
    },
    "2f28": function(t, e, i) {
      (function(t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var i = {
          props: {
            giftBagData: {
              type: Object,
              default: {}
            },
            gbCl: {
              type: Number,
              default: 0
            }
          },
          data: function() {
            return {
              showPacketBox: !1,
              showGiftBag: !1,
              audio: t.createInnerAudioContext(),
              newOpen: "https://eshopfile.zhiyousx.com/ysx/newOpen.mp3",
              animationType: 0,
              giftMoney: !1,
              noGift: !1,
              form: {
                name: "",
                phone: "",
                address: ""
              },
              giftPhone: !1,
              placehod: ""
            }
          },
          filters: {
            toFixed2: function(t) {
              return t ? Number(t).toFixed(2) : "0.00"
            },
            timeFormat: function(t) {
              return t.split(" ")[0].replace(/-/g, ".")
            }
          },
          onLoad: function() {},
          watch: {
            giftBagData: function(t, e) {
              t && (1 == this.giftBagData.orderActivePrize.prizeType ? this.showGiftBag = !0 : 2 == this.giftBagData.orderActivePrize.prizeType ? this.giftMoney = !0 : 3 == this.giftBagData.orderActivePrize.prizeType ? this.giftPhone = !0 : this.noGift = !0)
            }
          },
          methods: {
            closeBox: function() {
              0 == this.animationType && (this.showPacketBox = !1, this.audio.stop(), this.audio.destroy())
            },
            openRedBox: function() {
              var t = this;
              this.showPacketBox = !0, this.audio.loop = !1, this.animationType = 1, this.audio.src = this.newOpen, this.audio.play(), setTimeout((function() {
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
            goDiscounts: function() {
              this.safeRouter("/subPage/pages/myDiscounts/myDiscounts")
            },
            safeRouter: function(t) {
              this.$util.isLogin(t) && this.$navigateTo({
                url: t
              })
            },
            closeGiftPack: function() {
              this.showGiftBag = !1, this.audio.stop(), this.audio.destroy()
            }
          }
        };
        e.default = i
      }).call(this, i("df3c").default)
    },
    d084: function(t, e, i) {
      var n = i("d092");
      i.n(n).a
    },
    d092: function(t, e, i) {},
    d5af: function(t, e, i) {
      i.r(e);
      var n = i("fcd6"),
        o = i("2203");
      for (var a in o)["default"].indexOf(a) < 0 && function(t) {
        i.d(e, t, (function() {
          return o[t]
        }))
      }(a);
      i("d084");
      var u = i("828b"),
        r = Object(u.a)(o.default, n.b, n.c, !1, null, "71b64d50", null, !1, n.a, void 0);
      e.default = r.exports
    },
    fcd6: function(t, e, i) {
      i.d(e, "b", (function() {
        return o
      })), i.d(e, "c", (function() {
        return a
      })), i.d(e, "a", (function() {
        return n
      }));
      var n = {
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
        o = function() {
          var t = this,
            e = (t.$createElement, t._self._c, t.__map(t.giftBagData.giftBagCouponList, (function(e, i) {
              return {
                $orig: t.__get_orig(e),
                f0: t._f("timeFormat")(e.validityStartTime.split(" ")[0]),
                f1: t._f("timeFormat")(e.validityEndTime.split(" ")[0])
              }
            })));
          t.$mp.data = Object.assign({}, {
            $root: {
              l0: e
            }
          })
        },
        a = []
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["subPage/components/gift-pack/gift-pack-create-component", {
    "subPage/components/gift-pack/gift-pack-create-component": function(t, e, i) {
      i("df3c").createComponent(i("d5af"))
    }
  },
  [
    ["subPage/components/gift-pack/gift-pack-create-component"]
  ]
]);
