// Extracted from yearCard/pages/exchangeCard/exchangeCard.js; webpack module cecf.
// Compiled code for analysis; not an original source file.
module.exports = {
    cecf: function(e, t, n) {
      var r = n("47a9");
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var a = r(n("7eb4")),
        c = r(n("7ca3")),
        o = r(n("ee10")),
        u = n("767f");

      function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? i(Object(n), !0).forEach((function(t) {
            (0, c.default)(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }
      var l = {
        components: {
          customNav: function() {
            Promise.all([n.e("yearCard/common/vendor"), n.e("yearCard/components/customNav")]).then(function() {
              return resolve(n("4105"))
            }.bind(null, n)).catch(n.oe)
          },
          exchangeModule: function() {
            n.e("yearCard/pages/exchangeCard/components/exchangeModule").then(function() {
              return resolve(n("38b5"))
            }.bind(null, n)).catch(n.oe)
          },
          exchangeResultModule: function() {
            n.e("yearCard/pages/exchangeCard/components/exchangeResultModule").then(function() {
              return resolve(n("bb4c"))
            }.bind(null, n)).catch(n.oe)
          }
        },
        data: function() {
          return {
            flowPath: ["1、打开微信，关注“游陕西”微信公众号，点击菜单“个人中心”—“旅游年卡”，点击“兑换绑定”；", "2、实体卡用户请刮开背面的兑换码涂层，输入兑换码兑换；网络渠道用户输入确认短信中兑换码兑换；", "3、点击“立即兑换”完成年卡兑换。"],
            review: ["1、用户通过“游陕西”小程序购买的年卡无需兑换；第三方渠道购买的年卡根据购买渠道的规则兑换；", "2、第三方渠道购买年卡生成的兑换码可复制后转发给他人使用；", "3、兑换年卡成功后，不可转发他人或用于再次兑换；", "4、如有任何问题，请致电4000292296。"],
            scrollTop: 0,
            exchangeModuleInfo: {},
            exchangeModuleShow: !1,
            exchangeResultModuleShow: !1,
            code: "",
            tips: "该兑换码已被使用/已过期",
            loading: !1
          }
        },
        onPageScroll: function(e) {
          this.scrollTop = e.scrollTop
        },
        methods: {
          handleExchange: (0, n("fa61").throttle)((0, o.default)(a.default.mark((function e() {
            var t;
            return a.default.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  if (this.code) {
                    e.next = 4;
                    break
                  }
                  return this.tips = "请输入兑换码", this.exchangeResultModuleShow = !0, e.abrupt("return");
                case 4:
                  if (!this.loading) {
                    e.next = 6;
                    break
                  }
                  return e.abrupt("return");
                case 6:
                  return e.prev = 6, this.loading = !0, e.next = 10, (0, u.getCardDetailApi)(this.code);
                case 10:
                  if (t = e.sent, this.loading = !1, 1 === t.code) {
                    e.next = 17;
                    break
                  }
                  return this.tips = t.msg, this.exchangeResultModuleShow = !0, this.code = "", e.abrupt("return");
                case 17:
                  this.exchangeModuleInfo = f(f({}, t.data), {}, {
                    effectiveStartDate: t.data.effectiveStartDate ? t.data.effectiveStartDate.replace(/-/g, "/") : "",
                    effectiveEndDate: t.data.effectiveEndDate ? t.data.effectiveEndDate.replace(/-/g, "/") : ""
                  }), this.exchangeModuleShow = !0, e.next = 24;
                  break;
                case 21:
                  e.prev = 21, e.t0 = e.catch(6), this.loading = !1;
                case 24:
                case "end":
                  return e.stop()
              }
            }), e, this, [
              [6, 21]
            ])
          }))))
        }
      };
      t.default = l
    },
};
