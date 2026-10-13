// Extracted from yearCard/pages/entryGarden/entryGarden.js; webpack module "6c12".
// Compiled code for analysis; not an original source file.
module.exports = {
    "6c12": function(e, n, t) {
      (function(e) {
        var r = t("47a9");
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var a = r(t("7eb4")),
          o = r(t("ee10")),
          u = t("767f"),
          i = {
            components: {
              verifyCode: function() {
                Promise.all([t.e("yearCard/common/vendor"), t.e("yearCard/pages/entryGarden/components/verifyCode")]).then(function() {
                  return resolve(t("2c7e"))
                }.bind(null, t)).catch(t.oe)
              },
              verifySuccess: function() {
                t.e("yearCard/pages/entryGarden/components/verifySuccess").then(function() {
                  return resolve(t("746d"))
                }.bind(null, t)).catch(t.oe)
              }
            },
            data: function() {
              return {
                swiperList: [],
                currentCardIndex: 0,
                opacity: 0,
                statusBarHeight: e.getSystemInfoSync().statusBarHeight,
                detail: {}
              }
            },
            onLoad: function(e) {
              this.getList(e.userYearCardId)
            },
            onPageScroll: function(e) {
              this.scrollTop = e.scrollTop, this.scrollTop > 40 ? this.opacity = 1 : this.opacity = 0
            },
            methods: {
              getList: function(n) {
                var t = this;
                return (0, o.default)(a.default.mark((function r() {
                  var o;
                  return a.default.wrap((function(r) {
                    for (;;) switch (r.prev = r.next) {
                      case 0:
                        return r.next = 2, (0, u.getCardListApi)({
                          status: 3
                        });
                      case 2:
                        if (1 === (o = r.sent).code) {
                          r.next = 5;
                          break
                        }
                        return r.abrupt("return", e.showToast({
                          title: o.msg,
                          icon: "none"
                        }));
                      case 5:
                        t.swiperList = o.data, n && (t.currentCardIndex = o.data.findIndex((function(e) {
                          return e.userYearCardId === n
                        }))), t.getDetail(o.data[t.currentCardIndex].userYearCardId);
                      case 8:
                      case "end":
                        return r.stop()
                    }
                  }), r)
                })))()
              },
              getDetail: function(n) {
                var t = this;
                return (0, o.default)(a.default.mark((function r() {
                  var o;
                  return a.default.wrap((function(r) {
                    for (;;) switch (r.prev = r.next) {
                      case 0:
                        return r.next = 2, (0, u.getYearCardDetailApi)({
                          userYearCardId: n
                        });
                      case 2:
                        if (1 === (o = r.sent).code) {
                          r.next = 5;
                          break
                        }
                        return r.abrupt("return", e.showToast({
                          title: o.msg,
                          icon: "none"
                        }));
                      case 5:
                        t.detail = o.data;
                      case 6:
                      case "end":
                        return r.stop()
                    }
                  }), r)
                })))()
              },
              handleClickCard: function(e) {
                this.currentCardIndex = e, this.getDetail(this.swiperList[this.currentCardIndex].userYearCardId)
              },
              goHome: function() {
                e.navigateTo({
                  url: "/yearCard/pages/index/index"
                })
              }
            }
          };
        n.default = i
      }).call(this, t("df3c").default)
    },
};
