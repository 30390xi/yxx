require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPack/pages/activity/act0320"], {
    "0c25": function(t, o, e) {
      (function(t, o) {
        var i = e("47a9");
        e("5366"), i(e("3240"));
        var n = i(e("b588"));
        t.__webpack_require_UNI_MP_PLUGIN__ = e, o(n.default)
      }).call(this, e("3223").default, e("df3c").createPage)
    },
    "247a": function(t, o, e) {
      e.d(o, "b", (function() {
        return n
      })), e.d(o, "c", (function() {
        return s
      })), e.d(o, "a", (function() {
        return i
      }));
      var i = {
          uniNavbar: function() {
            return e.e("components/uni-navbar/uni-navbar").then(e.bind(null, "101a"))
          },
          uSwiper: function() {
            return e.e("uview-ui/components/u-swiper/u-swiper").then(e.bind(null, "9840"))
          },
          uKeyboard: function() {
            return e.e("uview-ui/components/u-keyboard/u-keyboard").then(e.bind(null, "3c4c"))
          }
        },
        n = function() {
          this.$createElement;
          this._self._c
        },
        s = []
    },
    "2bcc": function(t, o, e) {
      var i = e("46c8");
      e.n(i).a
    },
    "46c8": function(t, o, e) {},
    "6db7": function(t, o, e) {
      (function(t) {
        Object.defineProperty(o, "__esModule", {
          value: !0
        }), o.default = void 0;
        var e = {
          data: function() {
            return {
              carId: "",
              showCarBoard: !1,
              noCarcode: !0,
              pictures: [{
                border: "https://eshopfile.zhiyousx.com/2023032218420370542.png",
                list: [{
                  url: "https://eshopfile.zhiyousx.com/2023032117475719046.jpg"
                }, {
                  url: "https://eshopfile.zhiyousx.com/2023032117481703269.jpg"
                }],
                target: "1516616676576112642"
              }, {
                border: "https://eshopfile.zhiyousx.com/2023032218423342141.png",
                list: [{
                  url: "https://eshopfile.zhiyousx.com/2023032117484683627.jpg"
                }, {
                  url: "https://eshopfile.zhiyousx.com/2023032117490436364.jpg"
                }],
                target: "1320579064720941167"
              }, {
                border: "https://eshopfile.zhiyousx.com/2023032218424890598.png",
                list: [{
                  url: "https://eshopfile.zhiyousx.com/2023032117521624493.jpg"
                }, {
                  url: "https://eshopfile.zhiyousx.com/2023032117523292166.jpg"
                }],
                target: "1320579064188264533"
              }, {
                border: "https://eshopfile.zhiyousx.com/2023032218430932745.png",
                list: [{
                  url: "https://eshopfile.zhiyousx.com/2023032118071768442.jpg"
                }, {
                  url: "https://eshopfile.zhiyousx.com/2023032118075345647.jpg"
                }],
                target: "1320579064188264532"
              }, {
                border: "https://eshopfile.zhiyousx.com/2023032218434225545.png",
                list: [{
                  url: "https://eshopfile.zhiyousx.com/2023032118100087419.jpg"
                }, {
                  url: "https://eshopfile.zhiyousx.com/2023032118101125047.jpg"
                }],
                target: "1320579064188264534"
              }, {
                border: "https://eshopfile.zhiyousx.com/2023032218442051357.png",
                list: [{
                  url: "https://eshopfile.zhiyousx.com/2023032118123485361.jpg"
                }, {
                  url: "https://eshopfile.zhiyousx.com/2023032118124996994.jpg"
                }],
                target: "1320579064188264473"
              }, {
                border: "https://eshopfile.zhiyousx.com/2023032218443547780.png",
                list: [{
                  url: "https://eshopfile.zhiyousx.com/2023032118130301316.jpg"
                }, {
                  url: "https://eshopfile.zhiyousx.com/2023032118131962014.jpg"
                }],
                target: "1386632358110769153"
              }],
              discount: [{
                discountImg: "https://eshopfile.zhiyousx.com/2023032111362962757.png",
                receiveState: 0,
                couponId: "1638001233153957889",
                quta: "10",
                cond: "100"
              }, {
                discountImg: "https://eshopfile.zhiyousx.com/2023032111365114426.png",
                receiveState: 0,
                couponId: "1638006030059782146",
                quta: "20",
                cond: "200"
              }, {
                discountImg: "https://eshopfile.zhiyousx.com/2023032111370779994.png",
                receiveState: 0,
                couponId: "1638006973172228097",
                quta: "40",
                cond: "500"
              }, {
                discountImg: "https://eshopfile.zhiyousx.com/2023032111375960921.png",
                receiveState: 0,
                couponId: "1638007690679230466",
                quta: "30",
                cond: "0"
              }, {
                discountImg: "https://eshopfile.zhiyousx.com/2023032111381741649.png",
                receiveState: 0,
                couponId: "1638009615142645762",
                quta: "150",
                cond: "0"
              }, {
                discountImg: "https://eshopfile.zhiyousx.com/2023032111382958938.png",
                id: 0,
                receiveState: 0,
                couponId: "1638008277998530562",
                quta: "20",
                cond: "0"
              }]
            }
          },
          onLoad: function() {},
          onShow: function() {
            this.getCarNumber(), this.userInfo && this.getCoupoonStatus(this.discount)
          },
          onShareAppMessage: function() {
            return {
              title: "@新能源车主，快来领取你的专属春游福利",
              imageUrl: "https://eshopfile.zhiyousx.com/2023032118473921133.jpg"
            }
          },
          onShareTimeline: function() {
            return {
              title: "@新能源车主，快来领取你的专属春游福利",
              imageUrl: "https://eshopfile.zhiyousx.com/2023032118473921133.jpg",
              query: ""
            }
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          methods: {
            valChange: function(t) {
              if (0 == this.carId.length && !new RegExp("^([一-龥])$").test(t)) return void this.$util.showToast("第1位需填入区域名称");
              if ((1 == this.carId.length || 2 == this.carId.length) && !new RegExp("^([a-zA-Z])$").test(t)) return void this.$util.showToast("第2、3位需填入字母");
              if (this.carId.length > 3 && new RegExp("^([一-龥])$").test(t)) return void this.$util.showToast("此处不可填入汉字");
              8 != this.carId.length && (this.carId += t)
            },
            usecoupon: function(t) {
              this.$navigateTo({
                url: "/subPage/pages/discountsProductList/discountsProductList?couponId=".concat(t.couponId, "&threshold=").concat(t.cond, "&quota=").concat(t.quta, "&type=2")
              })
            },
            toRule: function() {
              this.$navigateTo({
                url: "/pages/webpage/webpage?urlEncode=" + encodeURIComponent("https://yxh5.zhiyousx.com/yxH5/show?id=169")
              })
            },
            routerTo: function(t) {
              this.$navigateTo({
                url: "/pages/spotDetailNew/spotDetailNew?spotId=" + t
              })
            },
            backspace: function() {
              this.carId && (this.carId = this.carId.substr(0, this.carId.length - 1))
            },
            testCode: function() {
              if (this.$util.isLogin())
                if (this.noCarcode) {
                  if (!new RegExp("^([一-龥][a-zA-Z](([ADF](?![IO])[A-Z0-9][0-9]{4})|([0-9]{5}[DF])))$").test(this.carId)) return this.$util.showToast("车牌格式有误，请重新输入"), !1;
                  this.setCarNumber()
                } else this.$util.showToast("您已提交过车牌号码")
            },
            openBoard: function() {
              if (this.$util.isLogin()) {
                if (!this.noCarcode) return void this.$util.showToast("您已经提交过车牌咯~");
                this.showCarBoard = !0
              }
            },
            getCarNumber: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("get", "manager/app/v1/memberCar/selectMemberCar").then((function(o) {
                1 === o.code && o.data && (t.carId = o.data.carNumber || "", t.noCarcode = !o.data.carNumber)
              }))
            },
            setCarNumber: function() {
              var t = this;
              this.noCarcode ? this.$uniApi.dataRequestNoLoading("post", "manager/app/v1/memberCar/saveMemberCar", {
                carNumber: this.carId
              }).then((function(o) {
                1 === o.code && (t.noCarcode = !1, t.$util.showToast("提交成功~ 快去领取优惠券吧"))
              })) : this.$util.showToast("您已经提交过车牌咯~")
            },
            getCouponRequest: function(o) {
              var e = this;
              t.showLoading({
                title: "领取中",
                mask: !0
              }), this.$uniApi.dataRequestNoLoading("post", "product/app/v1/CouponReceive/receiveCoupon", {
                couponId: o
              }).then((function(i) {
                t.hideLoading(), 0 == i.code && e.$util.showToast("已领取" == i.msg ? "已领取" : "已抢光"), 1 === i.code && (e.discount.forEach((function(t) {
                  t.couponId == o && (t.receiveState = 1)
                })), e.$util.showToast("领取成功"))
              }))
            },
            getCoupoonStatus: function(t) {
              var o = this;
              t.forEach((function(t) {
                o.$uniApi.dataRequestNoLoading("get", "product/app/v1/coupon/getCouponState?couponId=" + t.couponId).then((function(o) {
                  1 === o.code && 1 == o.data.receiveState && 1 == o.data.couponState && (t.receiveState = 1)
                }))
              }))
            }
          }
        };
        o.default = e
      }).call(this, e("df3c").default)
    },
    a692: function(t, o, e) {
      e.r(o);
      var i = e("6db7"),
        n = e.n(i);
      for (var s in i)["default"].indexOf(s) < 0 && function(t) {
        e.d(o, t, (function() {
          return i[t]
        }))
      }(s);
      o.default = n.a
    },
    b588: function(t, o, e) {
      e.r(o);
      var i = e("247a"),
        n = e("a692");
      for (var s in n)["default"].indexOf(s) < 0 && function(t) {
        e.d(o, t, (function() {
          return n[t]
        }))
      }(s);
      e("2bcc");
      var u = e("828b"),
        a = Object(u.a)(n.default, i.b, i.c, !1, null, "74c2bbed", null, !1, i.a, void 0);
      o.default = a.exports
    }
  },
  [
    ["0c25", "common/runtime", "common/vendor"]
  ]
]);
