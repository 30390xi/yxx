// Extracted from subPage/pages/searchpage/searchpage.js; webpack module 9296.
// Compiled code for analysis; not an original source file.
module.exports = {
    9296: function(t, e, a) {
      (function(t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var a = {
          data: function() {
            return {
              keyword: "",
              searchKeyDefault: {},
              oldKeywordList: [],
              searchKeyList: [],
              pageHotSpotArr: [],
              restaurantHotSpot: [],
              hotelHotSpot: [],
              entertainmentHotSpot: [],
              goIndex: "",
              pageItemArr: [],
              travelAgencyArr: [],
              lineProductList: [],
              hotSpotResultArr: [],
              goodsResultArr: [],
              travelAgencyResultArr: [],
              lineProductResultArr: [],
              cityObj: {},
              resultTab: "",
              searchResultType: "",
              showPage1: !0,
              showPage2: !1,
              showPage3: !1,
              sellerId: "",
              couponId: "",
              quota: "",
              threshold: "",
              isMyStore: ""
            }
          },
          onLoad: function(t) {
            t.sellerId && (this.sellerId = t.sellerId), t.couponId && (this.couponId = t.couponId), t.default && (this.searchKeyDefault.searchKey = t.default), t.threshold && (this.threshold = t.threshold), t.quota && (this.quota = t.quota), t.isMyStore && (this.isMyStore = t.isMyStore), this.init()
          },
          onShow: function() {},
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          methods: {
            tofind: function() {
              this.$navigateTo({
                url: "/pages/spotDetailNew/spotDetailNew?type=find"
              })
            },
            init: function() {
              this._currentPage = 1, this._totalPage = 0, this.loadOldKeyword(), this.getRecommendData()
            },
            loadOldKeyword: function() {
              var e = this;
              t.getStorage({
                key: "searchHistory",
                success: function(t) {
                  var a = JSON.parse(t.data);
                  e.oldKeywordList = a
                }
              })
            },
            oldDelete: function() {
              var e = this;
              t.showModal({
                content: "确定清除历史搜索记录？",
                success: function(a) {
                  a.confirm && (e.oldKeywordList = [], t.removeStorage({
                    key: "searchHistory"
                  }))
                }
              })
            },
            changeFn: function() {
              var t = this;
              if (!this._isSearchAction) {
                if (!this.keyword) return this.showPage1 = !0, this.showPage2 = !1, this.showPage3 = !1, this.pageHotSpotArr = [], this.restaurantHotSpot = [], this.hotelHotSpo = [], this.entertainmentHotSpot = [], this.pageItemArr = [], this.travelAgencyArr = [], this.lineProductList = [], this.cityObj = {}, void clearTimeout(this._timer);
                this._timer && clearTimeout(this._timer), this._timer = setTimeout((function() {
                  t.getAssociate("联想")
                }), 500)
              }
            },
            doSearch: function() {
              if (this.keyword || this.searchKeyDefault.searchKey) return !this.keyword && this.searchKeyDefault.searchKey ? (this.searchKeyDefault.isDefaultSearchKey = !0, this.saveKeyword(this.searchKeyDefault), this.keyword = this.searchKeyDefault.searchKey, void this.getAssociate("搜索")) : void this.getAssociate("搜索");
              this.$util.showToast("搜索内容不能为空")
            },
            getAssociate: function(e) {
              var a = this,
                i = t.getStorageSync("location") || {};
              this.$uniApi.dataRequestNoLoading("get", "product/app/v1/item/getAssociationBySearchKey", {
                latitude: i.latitude || "",
                longitude: i.longitude || "",
                searchKey: this.keyword,
                isMyStore: this.isMyStore
              }).then((function(t) {
                if (a._isSearchAction = !1, !(t.data.pageHotSpotVO || t.data.lineProductList || t.data.pageItemSpecialtyVO || t.data.entertainmentHotSpot || t.data.hotelHotSpot || t.data.restaurantHotSpot || t.data.pageTravelAgencyVO)) return "搜索" == e && a.$util.showToast("暂无搜索结果"), a.showPage1 = !0, a.showPage2 = !1, void(a.showPage3 = !1);
                if (a.showPage1 = !1, a.showPage2 = "联想" == e, a.showPage3 = "搜索" == e, a.searchResultType = t.data.jumpType, "搜索" == e && (a.resultTab = "全部", a.saveKeyword(t.data, e)), t.data.pageHotSpotVO ? a.pageHotSpotArr = t.data.pageHotSpotVO.hotSpotVOList : a.pageHotSpotArr = [], t.data.entertainmentHotSpot ? a.entertainmentHotSpot = t.data.entertainmentHotSpot.hotSpotVOList : a.entertainmentHotSpot = [], t.data.restaurantHotSpot ? a.restaurantHotSpot = t.data.restaurantHotSpot.hotSpotVOList : a.restaurantHotSpot = [], t.data.hotelHotSpot ? a.hotelHotSpot = t.data.hotelHotSpot.hotSpotVOList : a.hotelHotSpot = [], t.data.pageItemSpecialtyVO) {
                  var i = a.getHuoDongFlag(t.data.pageItemSpecialtyVO.itemSpecialtyVOList);
                  a.pageItemArr = i
                } else a.pageItemArr = [];
                t.data.pageTravelAgencyVO ? a.travelAgencyArr = t.data.pageTravelAgencyVO.data : a.travelAgencyArr = [], t.data.lineProductList ? a.lineProductList = t.data.lineProductList.productLineVOList : a.lineProductList = [], a.cityObj = t.data.destinationCityVo || {}
              }))
            },
            recommendJump: function(t) {
              t.isDefaultSearchKey = !0, this.saveKeyword(t), this.jumpAll(t)
            },
            jumpAll: function(e) {
              0 === e.jumpType && e.externalLinkUrl ? (-1 != e.externalLinkUrl.indexOf("?") && (e.externalLinkUrl = e.externalLinkUrl.replace("?", "*"), e.externalLinkUrl = e.externalLinkUrl.replace("=", "+")), this.$navigateTo({
                url: "../webpage/webpage?url=".concat(e.externalLinkUrl)
              })) : 1 === e.jumpType ? 1 === e.interalLinkType ? this.$navigateTo({
                url: "/subPage/pages/goods_details/goods_details?itemId=".concat(e.interalLinkId)
              }) : 2 === e.interalLinkType ? this.$util.cityJump(e.contentType, e.interalLinkId) : 3 === e.interalLinkType ? this.$navigateTo({
                url: "/subPack/pages/city/city?cityId=".concat(e.interalLinkId)
              }) : 4 === e.interalLinkType || 7 === e.interalLinkType || 8 === e.interalLinkType || 9 === e.interalLinkType ? this.$navigateTo({
                url: "../spotDetail/spotDetail?spotId=".concat(e.interalLinkId)
              }) : 5 === e.interalLinkType && (this.keyword = e.interalLinkId, this._isSearchAction = !0, this.getAssociate("搜索")) : 2 === e.jumpType ? t.openEmbeddedMiniProgram({
                appId: e.appId,
                path: e.wechatUrl
              }) : 3 === e.jumpType && (t.setStorageSync("richtext", e.richText), this.$navigateTo({
                url: "../richtext/richtext"
              }))
            },
            saveKeyword: function(e, a) {
              var i = this,
                o = {};
              e.isDefaultSearchKey && (o = {
                type: "默认词",
                name: e.searchKey,
                data: e
              }), "联想" === a && (1 == e.type ? o = {
                type: "景区",
                name: e.name,
                itemId: e.id
              } : 2 == e.type ? o = {
                type: "美食",
                name: e.name,
                itemId: e.id
              } : 3 == e.type ? o = {
                type: "酒店",
                name: e.name,
                itemId: e.id
              } : 4 == e.type && (o = {
                type: "玩乐",
                name: e.name,
                itemId: e.id
              }), e.hasOwnProperty("itemTitle") && (o = {
                type: "商品",
                name: e.itemTitle,
                itemId: e.itemId
              }), o.operationType = "联想"), "搜索" === a && (o.name = this.keyword, o.operationType = "搜索"), t.getStorage({
                key: "searchHistory",
                success: function(e) {
                  var a = JSON.parse(e.data),
                    s = a.findIndex((function(t) {
                      return t.name === o.name
                    })); - 1 == s || a.splice(s, 1), a.unshift(o), a.length > 10 && a.pop(), t.setStorage({
                    key: "searchHistory",
                    data: JSON.stringify(a)
                  }), i.oldKeywordList = a
                },
                fail: function(e) {
                  var a = [o];
                  t.setStorage({
                    key: "searchHistory",
                    data: JSON.stringify(a)
                  }), i.oldKeywordList = a
                }
              })
            },
            historySearch: function(t) {
              if ("默认词" != t.type) return "搜索" === t.operationType ? (this._isSearchAction = !0, this.keyword = t.name, this.showPage1 = !1, this.showPage2 = !1, this.showPage3 = !0, void this.getAssociate("搜索")) : void("联想" === t.operationType && ("商品" == t.type ? this.$navigateTo({
                url: "/subPage/pages/goods_details/goods_details?itemId=" + t.itemId
              }) : this.$navigateTo({
                url: "../spotDetail/spotDetail?spotId=" + t.itemId
              })));
              this.jumpAll(t.data)
            },
            getRecommendData: function() {
              var t = this;
              this.$uniApi.getRequestNoLoading("GET", "product/app/v1/searchKey/searchKeyAndDefaultKey").then((function(e) {
                t.searchKeyList = e.data.searchKeyList
              }))
            },
            jumpDetailPage: function(t, e, a) {
              "联想" === a && this.saveKeyword(e, "联想"), "商品" == t ? this.$navigateTo({
                url: "/subPage/pages/goods_details/goods_details?itemId=" + e.itemId
              }) : "店铺" == t ? this.$navigateTo({
                url: "/subPack/pages/travelAgency/travelAgency?travelAgencyId=" + e.travelAgencyId
              }) : "线路" == t ? this.$navigateTo({
                url: "/subPack/pages/lineProductDetails/lineProductDetails?productId=" + e.productId
              }) : this.$navigateTo({
                url: "../spotDetail/spotDetail?spotId=" + e.id + "&type=" + e.type
              })
            },
            jumpcity: function(t) {
              this.$navigateTo({
                url: "/subPack/pages/city/city?cityId=".concat(t)
              })
            },
            viewMore: function(t) {
              this.showPage1 = !1, this.showPage2 = !1, this.showPage3 = !0, this._currentPage = 1, this._totalPage = 0, this.resultTab = t, "景区" == t ? (this.hotSpotResultArr = [], this.getAssociationHotSpot(1)) : "线路" == t ? (this.lineProductResultArr = [], this.getLineProduct()) : "美食" == t ? (this.goIndex = "food", this.hotSpotResultArr = [], this.getAssociationHotSpot(2)) : "酒店" == t ? (this.hotSpotResultArr = [], this.getAssociationHotSpot(3)) : "玩乐" == t ? (this.goIndex = "relax", this.hotSpotResultArr = [], this.getAssociationHotSpot(4)) : "商品" == t ? (this.goIndex = "commdity", this.goodsResultArr = [], this.getItemSpecialty()) : "店铺" == t && (this.goIndex = "travelAgency", this.travelAgencyResultArr = [], this.getTravelAgency())
            },
            getItemSpecialty: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("get", "product/app/v1/item/getItemSpecialty", {
                searchKey: this.keyword,
                current: this._currentPage
              }).then((function(e) {
                if (t._totalPage = Math.ceil(e.data.total / e.data.size), 0 != t._totalPage) {
                  var a = t.getHuoDongFlag(e.data.itemSpecialtyVOList);
                  t.goodsResultArr = t.goodsResultArr.concat(a), t._currentPage++
                } else t.$util.showToast("暂无商品")
              }))
            },
            getLineProduct: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("get", "product/app/v1/item/searchLineProduct", {
                searchKey: this.keyword,
                current: this._currentPage
              }).then((function(e) {
                t._totalPage = Math.ceil(e.data.total / e.data.size), 0 != t._totalPage ? (console.log(e.data.data), t.lineProductResultArr = t.lineProductResultArr.concat(e.data.productLineVOList), t._currentPage++) : t.$util.showToast("暂无线路产品")
              }))
            },
            getTravelAgency: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("get", "product/app/v1/item/getTravelAgency", {
                searchKey: this.keyword,
                current: this._currentPage
              }).then((function(e) {
                t._totalPage = Math.ceil(e.data.total / e.data.size), 0 != t._totalPage ? (console.log(e.data.data), t.travelAgencyResultArr = t.travelAgencyResultArr.concat(e.data.data), t._currentPage++) : t.$util.showToast("暂无商品")
              }))
            },
            getHuoDongFlag: function(t) {
              return t.forEach((function(t) {
                var e = [];
                0 == t.seckillActivity && e.push({
                  type: "秒杀"
                }), 1 == t.couponFlag && e.push({
                  type: "优惠券"
                }), t.maxReward && 0 != t.maxReward && e.push({
                  type: "分享赚"
                }), t.huoDongArr = e
              })), t
            },
            getAssociationHotSpot: function(e) {
              var a = this,
                i = t.getStorageSync("location") || {};
              this.$uniApi.dataRequestNoLoading("get", "base/app/v1/scenicSpot/getAssociationHotSpot", {
                latitude: i.latitude || "",
                longitude: i.longitude || "",
                searchKey: this.keyword,
                current: this._currentPage,
                type: e
              }).then((function(t) {
                a._totalPage = Math.ceil(t.data.total / t.data.size), 0 != a._totalPage ? (a.hotSpotResultArr = a.hotSpotResultArr.concat(t.data.hotSpotVOList), a._currentPage++) : a.$util.showToast("暂无景区")
              }))
            },
            scrollToBottomFn: function() {
              this._currentPage <= this._totalPage && ("景区" == this.resultTab ? this.getAssociationHotSpot(1) : "美食" == this.resultTab ? this.getAssociationHotSpot(2) : "酒店" == this.resultTab ? this.getAssociationHotSpot(3) : "玩乐" == this.resultTab ? this.getAssociationHotSpot(4) : "商品" == this.resultTab ? this.getItemSpecialty() : "店铺" == this.resultTab ? this.getTravelAgency() : "线路" == this.resultTab && this.getLineProduct())
            }
          }
        };
        e.default = a
      }).call(this, a("df3c").default)
    },
};
