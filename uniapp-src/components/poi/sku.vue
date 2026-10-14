<template>
<view class="">
    <u-popup borderRadius="20" class="" :closeable="true" :height="skuPopH" mode="bottom" :value="showTicketSku" :vueSlots="['default']" @input="showTicketSku = $event">
        <view class="skuBox">
            <scroll-view class="scroll-sku" :scrollY="true" :style="'height:'+skuHeight+'rpx'+';'">
                <view class="name">{{skuData.aggregationItemName}}</view>
                <view class="skuTips" v-if="tipsInfo">
                    <view class="info multilineText2">{{tipsInfo}}</view>
                </view>
                <view class="attr-box" v-if="skuData&&skuData.dateType==1">
                    <view class="attr-name singleLineText">{{ (skuData.dateTitle||'使用日期') }}</view>
                    <view class="calendar-box">
                        <scroll-view class="left" :scrollIntoView="scrollToDate" :scrollX="true">
                            <view :class="['item','',selectDate==item.date?'act':'',!item.show?'none':'',item.dis?'dis':'']" :id="'date-'+item.date" v-for="(item, index) in timeData">
                                <view class="week">{{ item.week }}</view>
                                <view class="day">{{ item.dateShort }}</view>
                                <view class="price">{{ item.diys }}<text class="" style="color:#777777;font-size:20rpx;" v-if="item.qi">起</text>
                                </view>
                            </view>
                        </scroll-view>
                        <view class="right" v-if="$root.g0" @click="e0($event)">
                            <view class="text">更多 日期</view>
                            <view class="arrow"></view>
                        </view>
                    </view>
                </view>
                <view class="attr-box" v-if="attrs[0]" :key="index" v-for="(attr, index) in $root.l1">
                    <view class="attr-head">
                        <view class="attr-name singleLineText">{{ attr.attributeKey }}<text class="attr-name-desc" v-if="attr.attributeDesc">{{ attr.attributeDesc }}</text>
                        </view>
                        <image class="" src="https://eshopfile.zhiyousx.com/172480687839557894.png" v-if="attr.attributeDescContent&&attr.attributeDesc"></image>
                    </view>
                    <view class="attr-scoll">
                        <view :class="['attr-it','',opt.m0?'active':'',!opt.m1?'disabled':'',!opt.m2?'none':'']" :key="i" v-for="(opt, i) in attr.l0">{{''+opt.name}}<text class="" style="color:#FF5411;margin-left:10rpx;font-size:26rpx;">{{opt.stockStr}}</text>
                        </view>
                    </view>
                </view>
                <view class="attr-box" v-if="skuData.descTitle&&skuData.descContent">
                    <view class="attr-name singleLineText">{{ skuData.descTitle }}</view>
                    <image class="descImg" mode="widthFix" :src="skuData.descContent" @click="previewImage(skuData.descContent)"></image>
                </view>
                <view class="bottom-sku"></view>
            </scroll-view>
            <view class="sku-info-box" v-if="skuTicData&&skuTicData.itemId" @click.stop="showBookTip(skuTicData)">
                <view class="sku-info singleLineText" :style="'color:'+(skuTicData.scenicType!=1?'#FF7D2A':'#a17111')+';'">{{ (skuTicData.bookingInfoTag.bookingTag||'--') }}<block v-if="skuTicData.bookingInfoTag.reserveTimeTag">{{'｜'+(skuTicData.bookingInfoTag.reserveTimeTag||'--')}}</block>{{'｜'+(skuTicData.bookingInfoTag.refundTag||'--')+''}}<block v-if="skuTicData.scenicType!=1">{{'｜'+(skuTicData.bookingInfoTag.changeTag||'--')}}</block>
                </view>
                <view class="sku-tip">
                    <view class="l">{{'预'+(skuTicData.skuItemType==1?'约':'订')+'须知'}}</view>
                    <uni-icons class="" color="#555555" size="14" type="arrowright"></uni-icons>
                </view>
            </view>
            <view class="bot-box">
                <view class="price">
                    <block v-if="skuTicData&&skuTicData.itemId">{{'￥'+skuTicData.marketPrice+''}}<text class="" style="color:#777777;font-size:24rpx;" v-if="skuTicData.startPriceFlag==1">起</text>
                    </block>
                    <block v-else>￥--</block>
                </view>
                <view :class="['btn','',skuTicData&&skuTicData.itemId?'act':'']" @click="buyFn(skuTicData)">下一步</view>
            </view>
        </view>
    </u-popup>
    <u-popup borderRadius="20" class="" mode="center" :value="showAllTime" :vueSlots="['default']" @input="showAllTime = $event">
        <view class="calendar-box" v-if="$root.g1>0">
            <yu-calendar class="" :defaultDate="selectDate" :isCs="detailObj.scenicType" :notbookinfo="skuNotBookableInfo" :priceList="timeData" :showTime="showAllTime" @getDataInDay="itemClickFn()"></yu-calendar>
        </view>
    </u-popup>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
            props: {
              detailObj: {
                type: Object,
                default: function() {
                  return {}
                }
              }
            },
            data: function() {
              return {
                showTicketSku: !1,
                attrs: [],
                selectedSku: {},
                skuList: [],
                skuData: "",
                timeData: [],
                selectDate: "",
                bookinfoTag: {},
                filterSku: [],
                filterTime: "",
                filterTimeAll: "",
                itemIdListAll: [],
                skuSelectTicId: "",
                skuTicData: "",
                scrollToDate: "",
                skuHeight: 750,
                skuPopH: "70%",
                skuH1: 750,
                skuH2: 750,
                showAllTime: !1,
                skuInStockInfo: "",
                skuNotBookableInfo: "",
                skuSellOutInfo: "",
                valList: [""],
                tipsInfo: ""
              }
            },
            watch: {},
            mounted: function() {
              var t = getApp().globalData.Custom,
                e = this.$util.pxToRpx(this.systemInfo.windowHeight),
                s = this.$util.pxToRpx(t.bottom);
              this.skuH1 = .7 * e, this.skuH2 = e - s - 40, this.skuHeight = this.skuH1 - 140
            },
            computed: {
              systemInfo: function() {
                return this.$store.getters.systemInfo
              }
            },
            methods: {
              showBookTip: function(t) {
                this.$emit("showBookTip", t)
              },
              buyFn: function(t) {
                this.$emit("buyFn", t)
              },
              setTicketType: function(t) {
                this.attrs = [], this.selectedSku = {}, this.skuList = [], this.skuData = "", this.timeData = [], this.selectDate = "", this.filterSku = [], this.filterTime = "", this.scrollToDate = "", this.skuSelectTicId = "", this.skuTicData = "", this.getSkuDetail(t)
              },
              getSkuDetail: function(e) {
                var s = this;
                uni.showLoading({
                  title: "加载中",
                  mask: !0
                }), this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/aggregationItem/appDetail/" + e).then((function(e) {
                  if (1 === e.code) {
                    uni.hideLoading();
                    var i = e.data;
                    s.skuData = i, s.skuData.descTitle && s.skuData.descContent ? (s.skuHeight = s.skuH2 - 140, s.skuPopH = s.skuH2 + "rpx") : (s.skuHeight = s.skuH1 - 140, s.skuPopH = s.skuH1 + "rpx"), s.selectedSku = {}, i.attributeList.forEach((function(t) {
                      t.attrValList = [], s.selectedSku[t.attributeKey] = "", t.showAttributeOptionList.forEach((function(e) {
                        t.attrValList.push({
                          name: e,
                          stockStr: ""
                        })
                      }))
                    })), s.attrs = i.attributeList, s.oldKey = i.attributeList[i.attributeList.length - 1].attributeKey;
                    var o = i.relationList,
                      u = [],
                      n = new Map;
                    o.forEach((function(t) {
                      var e = JSON.parse(t.relation);
                      u.push({
                        itemId: t.itemId,
                        skuInfo: e,
                        itemTicketStockVOS: t.itemTicketStockVOS,
                        stockLessFlag: t.stockLessFlag,
                        stockLessNum: t.stockLessNum,
                        stockLessShowDesc: t.stockLessShowDesc,
                        stockLessShowType: t.stockLessShowType,
                        sell: t.stockStatus && !t.sellOut,
                        skuNotBookableInfo: t.skuNotBookableInfo,
                        skuInStockInfo: t.skuInStockInfo,
                        skuSellOutInfo: t.skuSellOutInfo
                      }), t.itemTicketStockVOS.forEach((function(t) {
                        n.set("".concat(t.itemId, "-").concat(t.date), t.sellPrice)
                      }))
                    })), s.allStockMap = n, s.setSkuTips(), s.skuList = u, s.filterSku = u, 1 == i.dateType && s.timeDataFormat(), s.$forceUpdate(), s.showTicketSku = !0, s.$emit("showSku")
                  } else s.$uni.showToast(e.msg)
                }))
              },
              mergeArrayElements: function(t, e) {
                return t.reduce((function(t, s) {
                  return t.concat(s[e])
                }), [])
              },
              isObjectEmpty: function(t) {
                return Object.values(t).every((function(t) {
                  return null == t || "" === t
                }))
              },
              setTimeData: function(t) {
                var e = this,
                  s = this.isObjectEmpty(this.selectedSku),
                  i = [];
                s && (this.filterTime = this.filterTimeAll, t = this.itemIdListAll);
                var o = [],
                  u = this.mergeArrayElements(this.attrs, "attrValList");
                this.skuNotBookableInfo = "", this.skuInStockInfo = "", this.skuSellOutInfo = "", this.skuList.forEach((function(e) {
                  t.forEach((function(t) {
                    e.itemId == t && o.push(e)
                  }))
                })), u.some((function(t) {
                  return t.stockStr
                })), o.length > 0 && this.arePropsEqual(o, "skuNotBookableInfo") && (this.skuNotBookableInfo = o[0].skuNotBookableInfo), o.length > 0 && this.arePropsEqual(o, "skuInStockInfo") && (this.skuInStockInfo = o[0].skuInStockInfo), o.length > 0 && this.arePropsEqual(o, "skuSellOutInfo") && (this.skuSellOutInfo = o[0].skuSellOutInfo), this.timeData.forEach((function(s) {
                  if (s.show = !0, e.filterTime.includes(s.date)) {
                    s.dis = !1;
                    var u = [];
                    t.forEach((function(t) {
                      e.allStockMap.has("".concat(t, "-").concat(s.date)) && u.push(e.allStockMap.get("".concat(t, "-").concat(s.date)))
                    }));
                    var n = Math.min.apply(Math, u),
                      a = Array.from(new Set(u)),
                      c = n && n > 0 ? "¥" + n : "免费";
                    if (e.skuInStockInfo) return s.diys = e.skuInStockInfo, s.diy = e.skuInStockInfo, void(s.qi = !1);
                    s.diy = c, s.diys = c, s.qi = 1 != a.length || "免费" == c, i.push(s.date)
                  } else {
                    var r = [];
                    o.forEach((function(t) {
                      t.itemTicketStockVOS.forEach((function(e) {
                        e.date == s.date && r.push({
                          surplusStock: e.surplusStock,
                          skuSellOutInfo: t.skuSellOutInfo
                        })
                      }))
                    })), r.length > 0 ? (e.arePropsEqual(r, "skuSellOutInfo") && (e.skuSellOutInfo = r[0].skuSellOutInfo), e.arePropsEqual(r, "surplusStock") && 0 == r[0].surplusStock && (s.diys = e.skuSellOutInfo || "已满", s.diy = s.diys, s.qi = !1)) : (s.show = !0, s.diys = e.skuNotBookableInfo || "不可订", s.diy = s.diys, s.qi = !1), s.dis = !0
                  }
                })), !this.selectDate && i.length > 0 && (this.scrollToDate = "date-" + i[0]), this.$forceUpdate()
              },
              timeDataFormat: function() {
                var t = this;
                this.timeData = [];
                var e = [],
                  s = [];
                this.skuData.mainPriceList.forEach((function(i) {
                  var o = i.itemId.split(","),
                    u = [];
                  o.forEach((function(e) {
                    t.allStockMap.has("".concat(e, "-").concat(i.date)) && u.push(t.allStockMap.get("".concat(e, "-").concat(i.date)))
                  }));
                  var n = Math.min.apply(Math, u),
                    a = Array.from(new Set(u)),
                    c = n && n > 0 ? "¥" + n : "免费";
                  i.dateShort = i.date.slice(5), i.week = t.getWeekOfDate(i.date), i.diy = c, i.diys = c, i.dis = 0 === i.surplusStock, i.sellout = 0 === i.surplusStock, i.qi = 1 != a.length || "免费" == c, i.show = !0, t.timeData.push(i), i.sellout || e.push(i.date), i.dis || s.push(i.date)
                })), s.length > 0 && (this.scrollToDate = "date-" + s[0]), this.filterTime = e.join(","), this.filterTimeAll = e.join(","), this.setTime("onStart"), this.$forceUpdate()
              },
              arePropsEqual: function(t, e) {
                if (0 === t.length) return !0;
                var s = t[0][e];
                return t.every((function(t) {
                  return t[e] === s
                }))
              },
              getWeekOfDate: function(t) {
                t = t.replace(/-/g, "/");
                var e = c.format(new Date, "yyyy/MM/dd"),
                  s = c.format(c.addDay(new Date, 1), "yyyy/MM/dd");
                return t == e ? "今天" : t == s ? "明天" : "周" + "日一二三四五六".charAt(new Date(t).getDay())
              },
              clearAttrs: function() {
                this.attrs.forEach((function(t) {
                  t.attrValList.forEach((function(t) {
                    t.stockStr = ""
                  }))
                }))
              },
              chooseTime: function(t) {
                if (this.filterTime.includes(t.date) && !t.dis) {
                  if (this.lastOpt = {
                      type: 1,
                      key: "",
                      val: ""
                    }, this.selectDate == t.date) return this.selectDate = "", this.clearAttrs(), this.setSkuTips(), this.filterSku = this.$util.deepCopy(this.skuList), void this.setSkuStock();
                  this.skuSelectTicId ? this.setSkuStockTime(t) : (this.selectDate && this.clearAttrs(), this.selectDate = t.date, this.filterSku = this.skuList.filter((function(e) {
                    return t.itemId.includes(e.itemId)
                  })), this.setSkuOrderPrice(), this.setSkuTips(), this.setSkuStock(), this.$forceUpdate())
                }
              },
              setSkuStockTime: function(t) {
                var e = this;
                this.selectDate = t.date, this.filterSku = this.skuList.filter((function(e) {
                  return t.itemId.includes(e.itemId)
                })), this.setSkuOrderPrice(), this.setSkuTips();
                var s = JSON.parse(JSON.stringify(this.selectedSku)),
                  i = [],
                  o = this.selectDate,
                  u = this.oldKey,
                  n = "",
                  a = 0;
                s[this.oldKey] = "", i = this.filterlist(s), this.attrs.forEach((function(t, e) {
                  t.attributeKey == u && (n = t, a = e)
                })), n && (n.attrValList.forEach((function(t) {
                  t.stockStr = "", i.forEach((function(s) {
                    1 == s.stockLessFlag && s.skuInfo[u] == t.name && s.itemTicketStockVOS.forEach((function(i) {
                      i.date == o && -1 != i.surplusStock && i.surplusStock < s.stockLessNum && (e.oldKey = u, 1 == s.stockLessShowType ? t.stockStr = "余".concat(i.surplusStock) : 2 == s.stockLessShowType && (t.stockStr = s.stockLessShowDesc))
                    }))
                  }))
                })), this.attrs.splice(a, 1, n), this.setTimeData([this.skuSelectTicId]), this.$forceUpdate())
              },
              setTime: function(t) {
                var e = [],
                  s = [];
                this.filterlist(this.selectedSku, "sku").forEach((function(t) {
                  s.push(t.itemId), t.itemTicketStockVOS.forEach((function(t) {
                    (t.surplusStock > 0 || -1 == t.surplusStock) && e.push(t.date)
                  }))
                })), "onStart" == t && (this.itemIdListAll = s);
                var i = Array.from(new Set(e));
                this.filterTime = i.join(","), this.setTimeData(s)
              },
              skuAct: function(t, e) {
                return this.selectedSku[t] === e
              },
              isSkuValid: function(t, e, s) {
                return this.getSkuValid(t, e, s).length > 0
              },
              getSkuValid: function(t, e, s) {
                var i = a(a({}, this.selectedSku), {}, (0, u.default)({}, t, e));
                return this.filterlist(i, s)
              },
              filterlist: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                  s = this,
                  i = this.filterSku,
                  o = Object.keys(t).filter((function(e) {
                    return "" !== t[e]
                  }));
                0 == o.length && "" == this.selectDate && (this.filterSku = this.$util.deepCopy(this.skuList), i = this.$util.deepCopy(this.skuList)), "sku" == e && (i = this.$util.deepCopy(this.skuList));
                var u = i.filter((function(s) {
                    return o.every((function(i) {
                      if (t[i] === s.skuInfo[i]) {
                        if ("none" == e) return !0;
                        if (s.sell) return !0
                      }
                    }))
                  })),
                  n = u;
                return s.selectDate && "none" != e && "sku" != e && (n = u.filter((function(t) {
                  var e = 0;
                  return t.itemTicketStockVOS.forEach((function(t) {
                    t.date == s.selectDate && (e = t.surplusStock)
                  })), 0 != e
                }))), n
              },
              isObjectEqual: function(t, e) {
                var s = Object.keys(t),
                  i = Object.keys(e);
                if (s.length !== i.length) return !1;
                for (var o = 0, u = s; o < u.length; o++) {
                  var n = u[o];
                  if (t[n] !== e[n]) return !1
                }
                return !0
              },
              handleClick: function(t, e) {
                console.log(123);
                var s = [],
                  i = [],
                  o = [];
                if (!(this.getSkuValid(t, e, "dis") <= 0)) {
                  this.selectedSku[t] = this.selectedSku[t] === e ? "" : e, this.lastOpt = {
                    type: 2,
                    key: t,
                    val: this.selectedSku[t]
                  }, this.setSkuTips(), s = this.filterlist(this.selectedSku, "sku"), this.setSkuStock(), s.forEach((function(t) {
                    o.push(t.itemId), t.itemTicketStockVOS.forEach((function(t) {
                      (t.surplusStock > 0 || -1 == t.surplusStock) && i.push(t.date)
                    }))
                  }));
                  var u = Array.from(new Set(i));
                  this.filterTime = u.join(","), 1 == s.length && this.isObjectEqual(s[0].skuInfo, this.selectedSku) ? (this.skuSelectTicId = s[0].itemId, this.getTicDetail(this.skuSelectTicId, "jh")) : (this.skuSelectTicId = "", this.skuTicData = ""), this.setSkuStock(), this.setSkuOrderPrice(), this.$forceUpdate()
                }
              },
              setSkuStock: function() {
                var t = this,
                  e = 0,
                  s = "",
                  i = "",
                  o = this.selectDate,
                  u = Object.keys(this.selectedSku),
                  n = [];
                if (u.forEach((function(e) {
                    t.selectedSku[e] || n.push(e)
                  })), this.valList = n, n.length > 0 && this.attrs.forEach((function(t) {
                    t.attrValList.forEach((function(t) {
                      t.stockStr = ""
                    }))
                  })), 1 == n.length) {
                  var a = this.filterlist(this.selectedSku);
                  i = n[0], this.attrs.forEach((function(t, o) {
                    t.attributeKey == i && (s = t, e = o)
                  })), s.attrValList.forEach((function(e) {
                    e.stockStr = "", a.forEach((function(s) {
                      1 == s.stockLessFlag && s.skuInfo[i] == e.name && s.itemTicketStockVOS.forEach((function(u) {
                        u.date == o && -1 != u.surplusStock && u.surplusStock < s.stockLessNum && (t.oldKey = i, 1 == s.stockLessShowType ? e.stockStr = "余".concat(u.surplusStock) : 2 == s.stockLessShowType && (e.stockStr = s.stockLessShowDesc))
                      }))
                    }))
                  })), this.attrs.splice(e, 1, s)
                } else if (0 == n.length && 2 == this.lastOpt.type && this.lastOpt.val && this.oldKey) {
                  var c = JSON.parse(JSON.stringify(this.selectedSku));
                  c[this.oldKey] = "";
                  var r = this.filterlist(c);
                  i = this.oldKey, this.attrs.forEach((function(t, o) {
                    t.attributeKey == i && (s = t, e = o)
                  })), s.attrValList.forEach((function(e) {
                    e.stockStr = "", r.forEach((function(s) {
                      1 == s.stockLessFlag && s.skuInfo[i] == e.name && s.itemTicketStockVOS.forEach((function(u) {
                        u.date == o && -1 != u.surplusStock && u.surplusStock < s.stockLessNum && (t.oldKey = i, 1 == s.stockLessShowType ? e.stockStr = "余".concat(u.surplusStock) : 2 == s.stockLessShowType && (e.stockStr = s.stockLessShowDesc))
                      }))
                    }))
                  })), this.attrs.splice(e, 1, s)
                }
                this.setTime("stcok"), this.$forceUpdate()
              },
              setSkuOrderPrice: function() {
                var t = this;
                this.selectDate && this.skuTicData && this.skuTicData.itemId ? this.skuTicData.ticketPrices.forEach((function(e) {
                  t.selectDate == e.date && (t.selectedHour = e)
                })) : this.selectedHour = ""
              },
              setSkuTips: function() {
                var t = this;
                if (this.skuData) {
                  var e = "",
                    s = [];
                  if (1 == this.skuData.dateType && "" == this.selectDate && (e = this.skuData.dateTitle || "使用日期"), e && s.push(e), this.skuData.attributeList.forEach((function(e) {
                      t.selectedSku[e.attributeKey] || s.push(e.attributeKey)
                    })), 1 == s.length) e = s[0];
                  else if (2 == s.length) e = s.join("和");
                  else if (s.length >= 3) {
                    var i = s.pop();
                    e = s.join("、") + "和" + i
                  }
                  e = e ? "请选择" + e : "", this.tipsInfo = e
                }
              },
              getTicDetail: function(e, s) {
                var i = this;
                this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/item/getTicketDetailForOrder", {
                  itemId: e
                }).then((function(e) {
                  if (uni.hideLoading(), 1 === e.code) return "jh" == s ? (i.skuTicData = e.data, void i.setSkuOrderPrice()) : void 0;
                  i.$uni.showToast(e.msg)
                }))
              },
              itemClickFn: function(t) {
                this.chooseTime(t, "show"), this.showAllTime = !1, this.scrollToDate = "date-" + t.date
              },
              getSkuDesc: function(e) {
                e && (this.refreshData = !1, uni.previewImage({
                  current: 1,
                  urls: [e]
                }))
              },
              previewImage: function(t) {
                uni.previewImage({
                  urls: [t]
                })
              }
            }
          };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.skuBox{height:100%;padding:40rpx 40rpx 0;position:relative}.skuBox .name{color:#333;font-size:36rpx;line-height:54rpx}.skuBox .skuTips{background:#f5f5f5;border-radius:10rpx;margin-top:10rpx;padding:10rpx 20rpx;width:670rpx}.skuBox .skuTips .info{color:#777;font-size:24rpx;line-height:36rpx;width:100%}.skuBox .attr-box{margin-top:50rpx}.skuBox .attr-box .attr-head{align-items:center;display:-webkit-flex;display:flex;padding-right:20rpx;position:relative}.skuBox .attr-box .attr-name{color:#333;font-size:28rpx;line-height:34rpx;max-width:670rpx}.skuBox .attr-box .attr-name .attr-name-desc{color:#ff5411;font-size:26rpx;margin-left:20rpx;padding-right:8rpx}.skuBox .attr-box image{flex:none;height:18rpx;width:11rpx}.skuBox .attr-box .descImg{margin-top:20rpx;width:100%}.skuBox .attr-box .calendar-box{align-items:center;display:-webkit-flex;display:flex;height:166rpx;justify-content:space-between;margin-top:20rpx;width:100%}.skuBox .attr-box .calendar-box .left{white-space:nowrap;width:532rpx}.skuBox .attr-box .calendar-box .left .item{border:1px solid #ccc;border-radius:20rpx;display:inline-block;height:166rpx;line-height:36rpx;margin-right:20rpx;text-align:center;width:118rpx}.skuBox .attr-box .calendar-box .left .item .week{color:#333;font-size:24rpx;margin-top:20rpx}.skuBox .attr-box .calendar-box .left .item .day{color:#333;font-size:30rpx;font-weight:700;line-height:42rpx;margin:6rpx 0}.skuBox .attr-box .calendar-box .left .item .price{color:#ff5411;font-size:24rpx}.skuBox .attr-box .calendar-box .left .item:last-child{margin-right:0}.skuBox .attr-box .calendar-box .left .act{background:#fff1ed;border:1px solid #ff5411}.skuBox .attr-box .calendar-box .left .dis{background:rgba(0,0,0,.05);border:none;opacity:.5}.skuBox .attr-box .calendar-box .left .none{display:none}.skuBox .attr-box .calendar-box .right{align-items:center;border:1px solid #ccc;border-radius:20rpx;display:-webkit-flex;display:flex;height:166rpx;justify-content:center;width:118rpx}.skuBox .attr-box .calendar-box .right .text{color:#333;font-size:24rpx;line-height:48rpx;margin-right:6rpx;width:48rpx;word-break:break-all}.skuBox .attr-box .calendar-box .right .arrow{border-right:1rpx solid #555;border-top:1rpx solid #555;height:20rpx;transform:rotate(45deg);width:20rpx}.skuBox .attr-box .attr-scoll .attr-it{border:1px solid #ccc;border-radius:20rpx;color:#555;display:inline-block;font-size:26rpx;line-height:40rpx;margin:20rpx 20rpx 0 0;padding:14rpx 30rpx}.skuBox .attr-box .attr-scoll .active{background:#fff1ed;border:1px solid #ff5411}.skuBox .attr-box .attr-scoll .disabled{background:rgba(0,0,0,.05);border:1px solid rgba(0,0,0,.05)}.skuBox .attr-box .attr-scoll .none{display:none}.skuBox .bottom-sku{height:56rpx}.skuBox .sku-info-box{align-items:center;background:#fff1ed;bottom:100rpx;display:-webkit-flex;display:flex;height:56rpx;justify-content:space-between;left:0;padding:0 40rpx;position:absolute;width:750rpx}.skuBox .sku-info-box .sku-info{font-size:24rpx;width:500rpx}.skuBox .sku-info-box .sku-tip{align-items:center;display:-webkit-flex;display:flex}.skuBox .sku-info-box .sku-tip .l{color:#555;font-size:24rpx;margin-right:10rpx}.skuBox .bot-box{align-items:center;background:#fff;bottom:0;box-shadow:0-1rpx 0 0#e3e3e3;display:-webkit-flex;display:flex;height:100rpx;justify-content:space-between;left:0;padding:0 50rpx;position:absolute;width:750rpx}.skuBox .bot-box .price{color:#e54848;font-size:34rpx;font-weight:700;line-height:40rpx}.skuBox .bot-box .btn{background:linear-gradient(253deg,#fc4a9b,#ff5413);border-radius:40rpx;color:#fff;font-size:30rpx;font-weight:700;height:80rpx;line-height:80rpx;opacity:.5;text-align:center;width:190rpx}.skuBox .bot-box .act{opacity:1}.calendar-box{background:#fff}
</style>
