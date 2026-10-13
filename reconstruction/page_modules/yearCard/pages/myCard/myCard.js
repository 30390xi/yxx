// Extracted from yearCard/pages/myCard/myCard.js; webpack module a99a.
// Compiled code for analysis; not an original source file.
module.exports = {
    a99a: function(e, t, n) {
      (function(e) {
        var r = n("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var a = r(n("7eb4")),
          i = r(n("7ca3")),
          c = r(n("ee10")),
          o = n("767f");

        function f(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
          }
          return n
        }

        function u(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? f(Object(n), !0).forEach((function(t) {
              (0, i.default)(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
          }
          return e
        }
        var d = [{
            id: null,
            name: "全部卡包"
          }, {
            id: 1,
            name: "待付款"
          }, {
            id: 2,
            name: "待激活"
          }, {
            id: 3,
            name: "已激活"
          }],
          s = {
            components: {
              Card: function() {
                Promise.all([n.e("yearCard/common/vendor"), n.e("yearCard/pages/myCard/components/card")]).then(function() {
                  return resolve(n("de69"))
                }.bind(null, n)).catch(n.oe)
              },
              noPage: function() {
                n.e("yearCard/pages/myCard/components/noPage").then(function() {
                  return resolve(n("c0ad"))
                }.bind(null, n)).catch(n.oe)
              }
            },
            data: function() {
              return {
                tabList: d,
                checkedTabId: d[0].id,
                bgStyle: "linear-gradient(180deg,#ff5411 0%,rgba(255, 255, 255, 0) 100%)",
                list: [],
                timer: null
              }
            },
            onLoad: function(e) {
              e.tag && (this.checkedTabId = Number(e.tag)), e.timedRefresh && "1" === e.timedRefresh && this.timedRefresh()
            },
            onPageScroll: function(e) {
              this.scrollTop = e.scrollTop, this.scrollTop > 40 ? this.bgStyle = "#ffffff" : this.bgStyle = "linear-gradient(180deg,#ff5411 0%,rgba(255, 255, 255, 0) 100%)"
            },
            onShow: function() {
              this.getList(this.checkedTabId)
            },
            methods: {
              timedRefresh: function() {
                var e = this;
                this.timer && clearTimeout(this.timer), this.timer = setTimeout((function() {
                  e.getList(e.checkedTabId)
                }), 1e4)
              },
              changeTab: function(e) {
                this.checkedTabId = e, this.getList(e)
              },
              getList: function(t) {
                var n = this;
                return (0, c.default)(a.default.mark((function r() {
                  var i, c;
                  return a.default.wrap((function(r) {
                    for (;;) switch (r.prev = r.next) {
                      case 0:
                        return i = {
                          status: t
                        }, r.next = 3, (0, o.getCardListApi)(i);
                      case 3:
                        if (1 === (c = r.sent).code) {
                          r.next = 6;
                          break
                        }
                        return r.abrupt("return", e.showToast({
                          title: c.msg,
                          icon: "none"
                        }));
                      case 6:
                        n.list = c.data.map((function(e) {
                          return u(u({}, e), {}, {
                            effectiveStartDate: e.effectiveStartDate ? e.effectiveStartDate.replace(/-/g, "/") : "",
                            effectiveEndDate: e.effectiveEndDate ? e.effectiveEndDate.replace(/-/g, "/") : "",
                            createTime: e.createTime ? e.createTime.replace(/-/g, "/") : ""
                          })
                        }));
                      case 7:
                      case "end":
                        return r.stop()
                    }
                  }), r)
                })))()
              },
              handleJump: function() {
                e.navigateTo({
                  url: "/yearCard/pages/index/index"
                })
              }
            }
          };
        t.default = s
      }).call(this, n("df3c").default)
    },
};
