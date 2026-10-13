// Extracted from subPage/pages/myDiscounts/myDiscounts.js; webpack module "2a9d".
// Compiled code for analysis; not an original source file.
module.exports = {
    "2a9d": function(t, e, r) {
      (function(t) {
        var n = r("47a9");
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var o = n(r("7eb4")),
          i = n(r("ee10"));

        function a(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
          return n
        }
        var u = {
          components: {
            EmptyState: function() {
              r.e("subPage/components/empty/empty").then(function() {
                return resolve(r("3b7a"))
              }.bind(null, r)).catch(r.oe)
            }
          },
          data: function() {
            return {
              menuId: 1,
              hasMore: !0,
              orderList: [],
              totalPages: 9999,
              orderType: "",
              orderStatus: 1,
              index: 1,
              fromSkiingH5: !1,
              pageSize: 10,
              menuList: [{
                id: 1,
                name: "未使用",
                isShow: 1
              }, {
                id: 2,
                name: "已使用",
                isShow: 1
              }, {
                id: 3,
                name: "已过期/失效",
                isShow: 1
              }],
              showQrWin: !1,
              listNum: "",
              userId: "",
              showNull: !0,
              source: ""
            }
          },
          onShow: function() {
            this.pageLoad()
          },
          onLoad: function(t) {
            this.source = t.source || ""
          },
          filters: {
            timeFormat: function(t) {
              return t.replace(/-/g, ".")
            }
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          methods: {
            showList: function(t) {
              var e, r = 0,
                n = this.orderList,
                o = function(t, e) {
                  var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                  if (!r) {
                    if (Array.isArray(t) || (r = function(t, e) {
                        if (t) {
                          if ("string" == typeof t) return a(t, e);
                          var r = Object.prototype.toString.call(t).slice(8, -1);
                          return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? a(t, e) : void 0
                        }
                      }(t)) || e && t && "number" == typeof t.length) {
                      r && (t = r);
                      var n = 0,
                        o = function() {};
                      return {
                        s: o,
                        n: function() {
                          return n >= t.length ? {
                            done: !0
                          } : {
                            done: !1,
                            value: t[n++]
                          }
                        },
                        e: function(t) {
                          throw t
                        },
                        f: o
                      }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                  }
                  var i, u = !0,
                    s = !1;
                  return {
                    s: function() {
                      r = r.call(t)
                    },
                    n: function() {
                      var t = r.next();
                      return u = t.done, t
                    },
                    e: function(t) {
                      s = !0, i = t
                    },
                    f: function() {
                      try {
                        u || null == r.return || r.return()
                      } finally {
                        if (s) throw i
                      }
                    }
                  }
                }(n);
              try {
                for (o.s(); !(e = o.n()).done;) {
                  e.value.userCouponId == t && ("" == n[r].isShow || null == n[r].isShow ? n[r].isShow = "true" : n[r].isShow = ""), r++
                }
              } catch (t) {
                o.e(t)
              } finally {
                o.f()
              }
              this.orderList = n
            },
            menuTap: function(t, e) {
              e = Number(e + 1), t = t, this.menuId = e, this.orderStatus = t, this.orderList = [], this.index = 1, this.pageLoad()
            },
            pageLoad: function() {
              var e = this,
                r = {
                  couponState: this.orderStatus
                };
              this.$uniApi.dataRequestYesLoading("POST", "product/app/v1/CouponReceive/myCoupon", r).then((function(r) {
                t.stopPullDownRefresh(), 1 === r.code && (e.orderList = r.data, e.orderList.forEach((function(t, r) {
                  e.$set(e.orderList, r, Object.assign({}, t, {
                    isShow: ""
                  }))
                })), e.orderList.length > 0 ? e.showNull = !1 : e.showNull = !0)
              })).catch((function(e) {
                t.stopPullDownRefresh()
              }))
            },
            jumpUse: function(e) {
              var r = this;
              return (0, i.default)(o.default.mark((function n() {
                var i, a, u, s, l, d;
                return o.default.wrap((function(n) {
                  for (;;) switch (n.prev = n.next) {
                    case 0:
                      if (e.jumpConfigFlag) {
                        n.next = 20;
                        break
                      }
                      if (1 != e.itemType) {
                        n.next = 9;
                        break
                      }
                      return i = {
                        couponId: e.userCouponId,
                        current: 1,
                        size: 5,
                        complex: 0,
                        complexType: 0
                      }, n.next = 5, r.$uniApi.dataRequestNoLoading("POST", "product/app/v1/item/couponCanUseItem", i, 3);
                    case 5:
                      1 == (a = n.sent).code && (1 == a.data.records.length ? t.navigateTo({
                        url: "/subPage/pages/ticket_detail/ticket_detail?itemId=".concat(a.data.records[0].itemId)
                      }) : r.$navigateTo({
                        url: "/subPage/pages/discountsProductList/discountsProductList?couponId=" + e.userCouponId + "&threshold=" + e.threshold + "&quota=" + e.quota + "&type=" + e.type
                      })), n.next = 18;
                      break;
                    case 9:
                      if (2 != e.itemType) {
                        n.next = 17;
                        break
                      }
                      return u = {
                        couponId: e.userCouponId,
                        current: 1,
                        size: 5
                      }, n.next = 13, r.$uniApi.dataRequestNoLoading("POST", "product/app/v1/line/product/couponCanUseProduct", u, 3);
                    case 13:
                      1 == (s = n.sent).code && (1 == s.data.records.length ? t.navigateTo({
                        url: "/subPack/pages/lineProductDetails/lineProductDetails?productId=".concat(s.data.records[0].productId)
                      }) : (l = JSON.stringify(e), t.navigateTo({
                        url: "/subPack/pages/groupOrder/availableProducts?coupon=".concat(l)
                      }))), n.next = 18;
                      break;
                    case 17:
                      7 == e.itemType && t.navigateTo({
                        url: "/artShow/pages/wall/wallPay?sourceType=1"
                      });
                    case 18:
                      n.next = 25;
                      break;
                    case 20:
                      if (d = e.jumpDTO) {
                        n.next = 24;
                        break
                      }
                      return r.$util.showToast("未配置优惠券跳转地址！"), n.abrupt("return");
                    case 24:
                      0 === d.linkType && d.linkUrl ? (-1 != d.linkUrl.indexOf("?") && (d.linkUrl = d.linkUrl.replace("?", "*"), d.linkUrl = d.linkUrl.replace("=", "+")), r.$navigateTo({
                        url: "/pages/webpage/webpage?url=".concat(d.linkUrl)
                      })) : 1 === d.linkType && d.linkUrl && (["/pages/index/index", "/pages/spot_list/spot_list", "/pages/rankList/rankList", "/pages/mine/mine"].includes(d.linkUrl) ? t.switchTab({
                        url: d.linkUrl
                      }) : r.$navigateTo({
                        url: d.linkUrl
                      }));
                    case 25:
                    case "end":
                      return n.stop()
                  }
                }), n)
              })))()
            },
            bindCoupon: function() {
              var t = "artShow" === this.source ? "/artShow/pages/addCoupon/addCoupon" : "/subPage/pages/addCoupon/addCoupon";
              this.$navigateTo({
                url: t
              })
            }
          }
        };
        e.default = u
      }).call(this, r("df3c").default)
    },
};
