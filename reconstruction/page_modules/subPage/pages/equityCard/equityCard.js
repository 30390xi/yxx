// Extracted from subPage/pages/equityCard/equityCard.js; webpack module e1ec.
// Compiled code for analysis; not an original source file.
module.exports = {
    e1ec: function(t, e, i) {
      (function(t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0, i("3240");
        var n = {
          data: function() {
            return {
              tabList: [],
              currentTab: 0,
              scrollToLeft: 0,
              scrollAreaLeft: 0,
              scrollAreaWidth: 0,
              itemWidth: 0,
              itemLeft: 0,
              savePop: !1,
              equityCardList: [],
              showCardInfo: "",
              days: "0",
              hours: "00",
              mins: "00",
              seconds: "00",
              timer: null,
              curTime: 0,
              duration: "",
              timeOut: !1,
              showTimeCount: !1,
              timer1: null,
              dll: 3,
              amount: 0,
              limtBuy: !1,
              hiddenFlag: 0
            }
          },
          filters: {
            tiameFilter: function(t) {
              if (!t) return "";
              var e = t.split(" ")[0].split("-");
              return e[0] + "年" + e[1] + "月" + e[2] + "日"
            },
            timeformat: function(t) {
              return 1 == t.toString().length ? "0" + t : t
            }
          },
          onShareAppMessage: function() {
            var t = "/subPage/pages/equityCard/equityCard?equityCardId=".concat(this.showCardInfo.equityCardId);
            return {
              title: "".concat(this.showCardInfo.name, "，快来抢购吧"),
              imageUrl: this.showCardInfo.image,
              path: this.$util.setShareUrl(t)
            }
          },
          onShareTimeline: function() {
            var t = "equityCardId=".concat(this.showCardInfo.equityCardId);
            return {
              title: "".concat(this.showCardInfo.name, "，快来抢购吧"),
              imageUrl: this.showCardInfo.image,
              query: this.$util.setShareTimeline(t)
            }
          },
          onLoad: function(e) {
            var i = e.equityCardId || 0;
            this.hiddenFlag = e.hiddenFlag, this.hiddenFlag ? (t.hideShareMenu(), this.getEquityCardDetail(0, "fromIndex", i)) : this.isHideId(i)
          },
          onShow: function() {},
          methods: {
            toExchange: function() {
              var t = "/subPage/pages/exchange/exchange";
              this.$util.isLogin(t) && this.$navigateTo({
                url: t
              })
            },
            toBuy: function(t) {
              var e = this;
              this.timeOut || this.$uniApi.getRequestNoLoading("get", "product/app/equityCard/" + t).then((function(i) {
                if (1 === i.code)
                  if (e.showCardInfo.buyAbleNum = i.data.buyAbleNum, i.data.buyAbleNum > 0) {
                    if (0 != e.showCardInfo.buyLimit && e.showCardInfo.memberBuyNum >= e.showCardInfo.buyLimit) return void e.$util.showToast("最多可购买".concat(e.showCardInfo.memberBuyNum, "张"));
                    var n = "/subPage/pages/buyCard/buyCard?id=" + t;
                    e.$util.isLogin(n) && e.$navigateTo({
                      url: n
                    })
                  } else e.$util.showToast("该权益卡已售空");
                else e.$util.showToast(i.msg)
              }))
            },
            toAgreenment: function(t) {
              this.$navigateTo({
                url: "/subPage/pages/eCAgreement/eCAgreement?id=" + t
              })
            },
            myEquityCard: function() {
              var t = "/subPage/pages/myeqcard/myeqcard";
              this.$util.isLogin(t) && this.$navigateTo({
                url: t
              })
            },
            showPop: function() {
              this.savePop = !0
            },
            isHideId: function(e) {
              var i = this;
              this.$uniApi.getRequestNoLoading("get", "product/app/equityCard/" + e).then((function(n) {
                1 === n.code ? n.data.hiddenFlag ? (t.hideShareMenu(), i.getEquityCardDetail(0, "fromIndex", e)) : i.getEquityCardList(e) : i.$util.showToast(n.msg)
              }))
            },
            getEquityCardList: function(t) {
              var e = this;
              this.$uniApi.dataRequestNoLoading("post", "product/app/equityCard/selectPage", {
                current: 1,
                size: 9999
              }).then((function(i) {
                if (1 === i.code) {
                  e.equityCardList = i.data.records;
                  var n = -1;
                  e.equityCardList.forEach((function(i, a) {
                    t == i.equityCardId && (n = a, e.getEquityCardDetail(n, "fromIndex"))
                  })), n < 0 && e.getEquityCardDetail(0, "fromIndex")
                } else e.$util.showToast(i.msg)
              }))
            },
            getEquityCardDetail: function(t, e, i) {
              var n = this,
                a = i || this.equityCardList[t].equityCardId;
              this.$uniApi.getRequestNoLoading("get", "product/app/equityCard/" + a).then((function(a) {
                if (1 === a.code) {
                  i && (n.equityCardList = [{
                    name: a.data.name
                  }]), n.dll = a.data.detailList.length, n.showCardInfo = a.data, e && (n.timer1 && clearTimeout(n.timer1), n.timer1 = setTimeout((function() {
                    n.tabClick(t, e)
                  }), 100));
                  var o = new Date,
                    r = new Date(n.showCardInfo.sellEndTime.replace(/-/g, "/")).getTime(),
                    u = o.getTime();
                  r - u <= 0 && (n.timeOut = !0), n.showTimeCount = !1, n.duration = "", n.timer && clearTimeout(n.timer), r - u <= 6048e5 && r - u > 0 && (n.duration = Math.round((r - u) / 1e3), n.countDown(), n.showTimeCount = !0)
                } else n.$util.showToast(a.msg)
              }))
            },
            getTotop: function() {
              t.pageScrollTo({
                scrollTop: 0,
                duration: 100
              })
            },
            tabClick: function(e, i) {
              var n = this;
              this.currentTab = e, this.getTotop(), this.savePop = !1;
              var a = t.createSelectorQuery();
              a.select(".scroll-box").fields({
                rect: !0,
                size: !0
              }, (function(t) {
                n.scrollAreaLeft = t.left, n.scrollAreaWidth = t.width
              }));
              var o = "#tab" + e;
              a.select(o).fields({
                rect: !0,
                size: !0
              }, (function(t) {
                n.itemWidth = t.width, n.itemLeft = t.left;
                var a = (n.scrollAreaWidth - n.itemWidth) / 2,
                  o = n.itemLeft - n.scrollAreaLeft - a;
                n.scrollToLeft = o < 0 ? 0 : o, i || n.getEquityCardDetail(e, "")
              })), a.exec()
            },
            closePopup: function() {
              this.show = !1
            },
            toEqdetail: function(e) {
              t.setStorageSync("eqDetail", e), this.$navigateTo({
                url: "/subPage/pages/myeqcard/eqdetail?source=1&cardName=" + this.showCardInfo.name
              })
            },
            getTime: function(t) {
              var e = this;
              if (this.timer && clearTimeout(this.timer), t < 0) return this.timeOut = !0, void(this.showTimeCount = !1);
              var i = this.durationFormatter(t),
                n = i.dd,
                a = i.hh,
                o = i.mm,
                r = i.ss;
              this.days = n || 0, this.hours = a || 0, this.mins = o || 0, this.seconds = r || 0, this.timer = setTimeout((function() {
                var i = Date.now(),
                  n = Math.floor((i - e.curTime) / 1e3),
                  a = n > 1 ? n : 1;
                e.curTime = i, e.getTime(t - a)
              }), 1e3)
            },
            durationFormatter: function(t) {
              if (!t) return {
                ss: 0
              };
              var e = t,
                i = e % 60;
              if ((e = (e - i) / 60) < 1) return {
                ss: i
              };
              var n = e % 60;
              if ((e = (e - n) / 60) < 1) return {
                mm: n,
                ss: i
              };
              var a = e % 24;
              return (e = (e - a) / 24) < 1 ? {
                hh: a,
                mm: n,
                ss: i
              } : {
                dd: e,
                hh: a,
                mm: n,
                ss: i
              }
            },
            countDown: function() {
              this.curTime = Date.now(), this.getTime(this.duration)
            }
          }
        };
        e.default = n
      }).call(this, i("df3c").default)
    }
};
