// Extracted from subPack/pages/groupRegistration/groupRegistration.js; webpack module "86d0".
// Compiled code for analysis; not an original source file.
module.exports = {
    "86d0": function(t, e, n) {
      var o = n("47a9");
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var i = o(n("af34")),
        a = {
          components: {
            EmptyState: function() {
              n.e("components/empty/empty").then(function() {
                return resolve(n("a427"))
              }.bind(null, n)).catch(n.oe)
            }
          },
          data: function() {
            return {
              loadMore: "loading",
              lineId: "",
              travelList: [],
              activeTravel: 0,
              typeList: [{
                name: "全部",
                type: 0
              }, {
                name: "跟团游",
                type: 1
              }, {
                name: "一日游",
                type: 2
              }, {
                name: "自由行",
                type: 3
              }, {
                name: "研学游",
                type: 4
              }],
              activeType: 0,
              current: 1,
              goodList: [],
              isRefresh: !1,
              travelMode: 0
            }
          },
          onReady: function() {},
          onLoad: function(t) {
            this.lineId = t.lineId, this.getTravel()
          },
          onUnload: function() {},
          onShow: function() {},
          methods: {
            getDec: function(t) {
              var e, n = "",
                o = "",
                i = "",
                a = "";
              return t.cityList && t.cityList.forEach((function(t, e) {
                o += t + "/"
              })), o && (o = o.slice(0, -1) + " · "), e = ["跟团游", "一日游", "自由行", "研学游"][t.travelMode], t.journeyDay && (i = t.journeyDay + "天"), t.journeyNight && (a = t.journeyNight + "晚"), (i || a) && (n = " · " + i + a), o + e + n
            },
            scrollBottom: function() {
              "loadmore" == this.loadMore && (this.current += 1, this.getGoods(this.travelMode))
            },
            getTravel: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/line/relation/travel/" + this.lineId).then((function(e) {
                1 === e.code && (t.travelList = e.data, t.filterType(0), t.getGoods())
              }))
            },
            getGoods: function(t) {
              var e = this;
              this.loadMore = "loading";
              var n = {
                current: this.current,
                size: 10,
                lineId: this.lineId,
                travelAgencyId: this.travelList[this.activeTravel].travelAgencyId
              };
              t && (n.travelMode = t - 1), this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/line/relation/product/", n).then((function(t) {
                var n;
                1 === t.code && (e.loadMore = t.data.records.length > 9 ? "loadmore" : "nomore", (n = e.goodList).push.apply(n, (0, i.default)(t.data.records)))
              }))
            },
            filterType: function(t) {
              var e = this;
              this.typeList = [{
                name: "跟团游",
                type: 1
              }, {
                name: "一日游",
                type: 2
              }, {
                name: "自由行",
                type: 3
              }, {
                name: "研学游",
                type: 4
              }], this.typeList = this.typeList.filter((function(n) {
                return e.travelList[t].travelModeList.includes(n.type - 1 + "")
              })), this.typeList.unshift({
                name: "全部",
                type: 0
              })
            },
            changeTravel: function(t) {
              this.activeTravel = t, this.current = 1, this.goodList = [], this.filterType(t), this.getGoods(0)
            },
            goTrave: function(t) {
              this.$navigateTo({
                url: "/subPack/pages/travelAgency/travelAgency?travelAgencyId=" + t
              })
            },
            changeType: function(t, e) {
              this.activeType = t, this.current = 1, this.goodList = [], this.travelMode = e, this.getGoods(e)
            },
            cityName: function(t) {
              var e = "";
              return t.forEach((function(t, n) {
                e += t + "/"
              })), e.slice(0, -1)
            },
            goGoodInfo: function(t, e) {
              var n = "/subPack/pages/lineProductDetails/lineProductDetails?productId=" + t;
              this.$navigateTo({
                url: n
              })
            }
          }
        };
      e.default = a
    },
};
