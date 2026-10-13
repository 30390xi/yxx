// Extracted from subPage/pages/classify/classify.js; webpack module "7b7f".
// Compiled code for analysis; not an original source file.
module.exports = {
    "7b7f": function(t, e, n) {
      (function(t) {
        var a = n("47a9");
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var r = a(n("7eb4")),
          i = a(n("ee10")),
          u = {
            data: function() {
              return {
                tabbar: [],
                scrollTop: 0,
                current: 0,
                menuHeight: 0,
                menuItemHeight: 0
              }
            },
            onLoad: function() {
              this.getClassify()
            },
            methods: {
              getClassify: function() {
                var e = this;
                t.showNavigationBarLoading(), this.$uniApi.getRequestNoLoading("GET", "product/app/v1/itemCat/getItemCatTree").then((function(n) {
                  t.hideNavigationBarLoading(), n.data.forEach((function(t) {
                    1 === t.operatorType && e.tabbar.push(t)
                  }))
                }))
              },
              getImg: function() {
                return Math.floor(35 * Math.random())
              },
              swichMenu: function(t) {
                var e = this;
                return (0, i.default)(r.default.mark((function n() {
                  return r.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        if (t != e.current) {
                          n.next = 2;
                          break
                        }
                        return n.abrupt("return");
                      case 2:
                        if (e.current = t, 0 != e.menuHeight && 0 != e.menuItemHeight) {
                          n.next = 8;
                          break
                        }
                        return n.next = 6, e.getElRect("menu-scroll-view", "menuHeight");
                      case 6:
                        return n.next = 8, e.getElRect("u-tab-item", "menuItemHeight");
                      case 8:
                        e.scrollTop = t * e.menuItemHeight + e.menuItemHeight / 2 - e.menuHeight / 2;
                      case 9:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              getElRect: function(e, n) {
                var a = this;
                new Promise((function(r, i) {
                  t.createSelectorQuery().in(a).select("." + e).fields({
                    size: !0
                  }, (function(t) {
                    t ? a[n] = t.height : setTimeout((function() {
                      a.getElRect(e)
                    }), 10)
                  })).exec()
                }))
              },
              swiperClick: function(e) {
                this.tabbar[this.current].adverts[e].linkUrl && (0 === this.tabbar[this.current].adverts[e].linkType ? this.$navigateTo({
                  url: "../webpage/webpage?url=".concat(this.tabbar[this.current].adverts[e].linkUrl)
                }) : 1 === this.tabbar[this.current].adverts[e].linkType ? this.$navigateTo({
                  url: "/subPage/pages/goods_details/goods_details?itemId=".concat(this.tabbar[this.current].adverts[e].linkUrl)
                }) : 2 === this.tabbar[this.current].adverts[e].linkType ? this.tabbar[this.current].adverts[e].advertNo && t.openEmbeddedMiniProgram({
                  appId: this.tabbar[this.current].adverts[e].advertNo,
                  path: this.tabbar[this.current].adverts[e].linkUrl,
                  success: function(t) {
                    console.log("打开小程序成功", t)
                  },
                  fail: function(t) {
                    console.log("打开小程序失败", t)
                  }
                }) : 3 === this.tabbar[this.current].adverts[e].linkType && this.$navigateTo({
                  url: "../richtext/richtext?advertId=".concat(this.tabbar[this.current].adverts[e].advertId)
                }))
              },
              goGoodsList: function(t) {
                this.$navigateTo({
                  url: "../goodslist/goodslist?catId=".concat(t)
                })
              },
              goSearch: function() {
                this.$navigateTo({
                  url: "/subPage/pages/searchpage/searchpage"
                })
              }
            }
          };
        e.default = u
      }).call(this, n("df3c").default)
    },
};
