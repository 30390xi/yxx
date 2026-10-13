require("../../../@babel/runtime/helpers/Arrayincludes"), require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPage/pages/packPlaceOrder/packPlaceOrder"], {
    "1c6b": function(e, t, i) {
      i.r(t);
      var o = i("7a17"),
        r = i.n(o);
      for (var s in o)["default"].indexOf(s) < 0 && function(e) {
        i.d(t, e, (function() {
          return o[e]
        }))
      }(s);
      t.default = r.a
    },
    3276: function(e, t, i) {},
    "7a17": function(e, t, i) {
      (function(e, o) {
        var r = i("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var s = r(i("af34")),
          n = r(i("dd71")),
          u = i("e846"),
          a = {
            components: {
              ocrIndex: function() {
                i.e("components/ocr/ocrIndex").then(function() {
                  return resolve(i("7882"))
                }.bind(null, i)).catch(i.oe)
              }
            },
            data: function() {
              return {
                hotelDate: [],
                startHotelDate: "",
                infoObj: {},
                bookInfoObj: {},
                ydxz: {},
                showCoupon: !1,
                showNotice: !1,
                isShowBookTip: !1,
                showHourBox: !1,
                disabledSubmitBtn: !1,
                isHideSuccessMask: !1,
                timeData: [],
                couponArr: [],
                hourArr: [],
                scrollToDate: "",
                selectedHour: "",
                ticketPrice: null,
                ticketNum: 1,
                priceAmount: 0,
                selectedDate: "",
                departTimeSlot: "",
                inputGroup: [],
                haveToId: !1,
                discountAmount: 0,
                userCouponId: "",
                telephoneVoList: null,
                repeatCreateOrder: null,
                repeatCreateOrder2: null,
                lineing: !1,
                showNoStock: !1,
                singledateObj: null,
                hasTimeOut: !1,
                activeGiftCard: [],
                activeGiftamount: 0,
                giftCardPopData: [],
                shareMemberId: "",
                giftCardAmount: 0,
                showGiftCard: !1,
                giftCardArr: [],
                showPassenger: !1,
                commonUsedTouristList: [],
                usedTouristIdsPopData: [],
                usedTouristPopData: [],
                bookTipHeight: 750,
                passengerTitle: "",
                requestNum: 0,
                showGiftBag: !1,
                giftBagData: "",
                gbCl: 0,
                animationType: 0,
                audio: e.createInnerAudioContext(),
                openAudio: " https://eshopfile.zhiyousx.com/ysx/openBox.m4a",
                beforeAudio: "https://eshopfile.zhiyousx.com/ysx/wobGold.mp3",
                newOpen: "https://eshopfile.zhiyousx.com/ysx/newOpen.mp3",
                showPacketBox: !1,
                coupondk: "",
                errIdCard: [],
                childTicketList: [],
                selectedObj: "",
                groupTicketArr: [{
                  ticketNum: 1,
                  inputGroup: [],
                  haveToId: !1,
                  usedTouristIdsPopData: [],
                  itemId: ""
                }],
                touristInfoTypeLevel: 0,
                groupTicketIndex: 0,
                touristId: "",
                ptSum: 0,
                groupErrList: [],
                showGroupErr: !1,
                errJump: !1,
                inputSum: 0,
                masterTicketNum: 1,
                masterAmount: 0,
                showTimeTag: !1,
                parseStyle: {
                  p: "word-break: break-all;"
                },
                parseStyle1: {
                  p: "word-break: break-all;line-height:48rpx;"
                },
                showCertificate: !1,
                cardTypeList: [],
                realCardTypeList: [],
                cardParentIndex: 0,
                userIndex: 0,
                realCardType: 0,
                cacheGroupTicketArr: [],
                selectedDateSpot: "",
                form: {
                  name: "",
                  phone: "",
                  address: ""
                },
                giftPhone: !1,
                placehod: "",
                orderActiveRecordId: "",
                noGift: !1,
                giftMoney: !1,
                notQueryCouponFlag: null,
                infosUse: !1
              }
            },
            onLoad: function(t) {
              e.setStorageSync("selectedHour", ""), e.setStorageSync("isFromCalendarPage", ""), this.requestNum = 1;
              var i = this;
              e.getSystemInfo({
                success: function(e) {
                  i.windowHeight = e.windowHeight, i.winWidth = e.windowWidth, i.unit = e.windowWidth / 750
                }
              }), e.showLoading("加载中"), this._ticketId = t.ticketId, this.shareMemberId = t.shareMemberId || "", t.templeOpenId && this.setChanSiOpenId(t.templeOpenId), t.selectedDate && (this.selectedDateSpot = t.selectedDate), this.getInfo(), this.getGiftCard(), this.telephoneVoList = e.getStorageSync("telephoneVoList"), e.removeStorageSync("telephoneVoList"), this.requestNum = 1, this.audio.loop = !0, this.audio.src = this.beforeAudio
            },
            onShow: function() {
              this.disabledSubmitBtn = !1, 1 == this.requestNum ? this.requestNum = 2 : this.getCommonUsedTouristList("onShow");
              var t = e.getStorageSync("templeOpenId");
              t && this.setChanSiOpenId(t);
              var i = e.getStorageSync("selectedHour");
              if (i && e.getStorageSync("isFromCalendarPage") && this.timeData[0]) {
                this.departTimeSlot = i.time;
                var o = this.timeData.find((function(e) {
                  return e.date === i.date
                }));
                this.scrollToDate = "date-" + i.date, this.showTimeTag = "今天" == this.getWeekOfDate(i.date), this.selectBookDateInPage(o, !0), this.$forceUpdate()
              }
            },
            computed: {
              isFree: function() {
                return 1 == this.infoObj.skuItemType && 1 == this.infoObj.isFree
              }
            },
            filters: {
              timeFormat: function(e) {
                return e.replace(/-/g, ".")
              },
              toFixed2: function(e) {
                return e ? Number(e).toFixed(2) : "0.00"
              },
              validityTimeFilter: function(e) {
                return e.slice(0, 10) + "到期"
              },
              unitFilter: function(e) {
                return {
                  0: "单",
                  1: "张"
                } [e]
              },
              phoneFilter: function(e) {
                if (e) {
                  var t = e.toString();
                  return t.replace(t.substring(3, 7), "****")
                }
              },
              idCarNoFilter: function(e) {
                if (e) {
                  var t = e.toString();
                  return t.substring(0, 1) + "****************" + t.substring(t.length - 1, t.length)
                }
              },
              touristNumFilter: function(e) {
                var t = 0;
                return e.forEach((function(e) {
                  t += e.inputGroup.length
                })), t.toFixed(0)
              },
              realCardName: function(e) {
                if (e >= 0) {
                  var t = {
                    0: "身份证",
                    1: "护照",
                    2: "大陆居民往来港澳通行证",
                    3: "大陆居民往来台湾通行证",
                    4: "台胞证",
                    5: "港澳通行证",
                    6: "外国人永久居留证",
                    7: "港澳台居民居住证",
                    8: "军人证"
                  } [e];
                  return t.length > 3 ? t.substring(0, 3) + "..." : t
                }
                return ""
              },
              cardName: function(e) {
                return {
                  0: "身份证",
                  1: "护照",
                  2: "大陆居民往来港澳通行证",
                  3: "大陆居民往来台湾通行证",
                  4: "台胞证",
                  5: "港澳通行证",
                  6: "外国人永久居留证",
                  7: "港澳台居民居住证",
                  8: "军人证"
                } [e]
              }
            },
            watch: {
              groupTicketArr: {
                deep: !0,
                immediate: !0,
                handler: function(e, t) {
                  var i = 0,
                    o = 0;
                  t && (this.groupTicketArr.forEach((function(e) {
                    var t = e.inputGroup.length;
                    o += t, e.inputGroup.forEach((function(e) {
                      (e.id || e.name || e.telephone || e.idCard) && (t -= 1)
                    })), i += t
                  })), this.inputSum = o, this.ptSum = i.toFixed(0), this.cacheGroupTicketArr = this.$util.deepCopy(this.groupTicketArr))
                }
              }
            },
            onUnload: function() {
              try {
                e.setStorageSync("selectedHour", ""), e.setStorageSync("isFromCalendarPage", "")
              } catch (e) {}
              this.audio.destroy(), getApp().watchRouter()
            },
            onPullDownRefresh: function() {
              this.getInfo(!0)
            },
            methods: {
              ocrIndexComShow: function(e, t, i) {
                var o = 0 === e.cardType && !e.idCard,
                  r = 0 === i && (1 === this.infoObj.itemUseDesc.touristInfoType && 0 === t || 2 === this.infoObj.itemUseDesc.touristInfoType),
                  s = 0 !== i && (1 === this.infoObj.itemGroupVOList[i - 1].itemUseDesc.touristInfoType && 0 === t || 2 === this.infoObj.itemGroupVOList[i - 1].itemUseDesc.touristInfoType);
                return o && (r || s)
              },
              ocrIndexShow: function(e, t, i) {
                var o = 0 === e.cardType && !e.idCard,
                  r = 0 === i && (1 === this.infoObj.itemUseDesc.touristInfoType && 0 === t || 2 === this.infoObj.itemUseDesc.touristInfoType),
                  s = 0 !== i && (1 === this.infoObj.itemGroupVOList[i - 1].itemUseDesc.touristInfoType && 0 === t || 2 === this.infoObj.itemGroupVOList[i - 1].itemUseDesc.touristInfoType),
                  n = o && (r || s);
                return 1 !== e.cardType && !n
              },
              setDataInfos: function(e, t, i) {
                var o = this;
                if (console.log(e, "lllllll", t, "ffffffffff", i, ";;;;;;;;;;"), !e) return this.infosUse = !1, void setTimeout((function() {
                  o.$util.showToast("识别失败，请重新识别或手动填写")
                }), 500);
                this.infosUse = !0;
                var r = this.groupTicketArr[i].inputGroup[t].id;
                this.groupTicketArr[i].usedTouristIdsPopData = this.groupTicketArr[i].usedTouristIdsPopData.filter((function(e) {
                  return e.id != r
                })), this.groupTicketArr[i].inputGroup.forEach((function(i, o) {
                  o == t && (i.name = e.name, i.idCard = e.idCarNo, i.cardType = 0, i.telephone = "", i.id = "")
                })), this.$forceUpdate()
              },
              showItemPhone: function(e) {
                var t = 0;
                return this.groupTicketArr.forEach((function(i, o) {
                  o < e && (t += i.inputGroup.length)
                })), !(t > 0)
              },
              handlerChange: function(e, t, i, o) {
                if (0 == t && 0 == i.cardType) {
                  var r = e.detail.value;
                  this.$util.checkId(r, i.cardType).code && (this.getIdList(), this.$forceUpdate())
                }
              },
              getIdList: function() {
                var e = this,
                  t = this.infoObj,
                  i = [],
                  o = 0;
                if (this.groupTicketArr.forEach((function(r) {
                    o += r.ticketNum, r.itemId == t.itemId && (i = r.inputGroup, e.masterTicketNum = r.ticketNum, e.masterAmount = r.priceAmount)
                  })), o > this.masterTicketNum) return this.discountAmount = "", this.userCouponId = "", void(this.couponArr = []);
                if (i[0] && t.itemUseDesc)
                  if (0 != t.itemUseDesc.touristInfoType) {
                    var r = [];
                    for (var s in i) {
                      var n = i[s];
                      if (this.haveToId) this.$util.checkId(n.idCard, n.cardType).code && r.push(n.idCard)
                    }
                    var u = Array.from(new Set(r));
                    2 == t.itemUseDesc.touristInfoType && this.haveToId && u.length < r.length ? this.$util.showToast("证件号不能重复") : this.getBestCoupon(u)
                  } else this.getBestCoupon([])
              },
              openRedBox: function() {
                var e = this;
                this.audio.stop(), this.audio.loop = !1, this.animationType = 1, this.audio.src = this.newOpen, this.audio.play(), setTimeout((function() {
                  e.animationType = 2
                }), 1e3), setTimeout((function() {
                  e.animationType = 3
                }), 2e3), setTimeout((function() {
                  1 == e.giftBagData.orderActivePrize.prizeType ? e.showGiftBag = !0 : 2 == e.giftBagData.orderActivePrize.prizeType ? e.giftMoney = !0 : 3 == e.giftBagData.orderActivePrize.prizeType ? e.giftPhone = !0 : e.noGift = !0
                }), 3200), setTimeout((function() {
                  e.animationType = 4
                }), 3500), setTimeout((function() {
                  e.showPacketBox = !1
                }), 4500)
              },
              closeBox: function() {
                0 == this.animationType && (this.showPacketBox = !1, this.audio.stop(), this.audio.destroy())
              },
              closeGiftPack: function() {
                1 == this.giftBagData.orderActivePrize.prizeType ? this.showGiftBag = !1 : 2 == this.giftBagData.orderActivePrize.prizeType ? this.giftMoney = !1 : this.noGift = !1, this.audio.stop(), this.audio.destroy()
              },
              sure: function() {
                var e = this;
                if (!this.form.name) return this.$util.showToast("请填写姓名");
                if (!this.form.phone) return this.$util.showToast("请填写手机号");
                if (!/^1[23456789]\d{9}$/.test(this.form.phone)) return this.$util.showToast("请填写正确手机号");
                if (!this.form.address) return this.$util.showToast("请填写地址");
                var t = this.form,
                  i = {
                    contactName: t.name,
                    contactMobile: t.phone,
                    address: t.address,
                    orderActiveRecordId: this.orderActiveRecordId
                  };
                this.$uniApi.dataRequestNoLoading("POST", "order/app/v1/orderActive/updateContactInfo", i).then((function(t) {
                  1 == t.code && e.$util.showToast("提交成功，奖品将于订单使用后尽快安排发出")
                })).catch((function(e) {})).finally((function() {
                  e.giftPhone = !1
                }))
              },
              showBookTip: function(t) {
                var i = this,
                  o = this;
                this.isShowBookTip = !0, this.ydxz = t, this.$nextTick((function() {
                  setTimeout((function() {
                    var t = e.createSelectorQuery();
                    t.select("#ytxz-box-title").boundingClientRect(), t.exec((function(e) {
                      o.bookTipHeight = o.windowHeight / o.winWidth * 750 * .7 - 230 - e[0].height / o.unit
                    })), i.$forceUpdate()
                  }), 100)
                }))
              },
              toFixedNumAmount: function() {
                var e = new n.default(this.priceAmount).minus(this.giftCardAmount).toNumber();
                return this.toFixedNum(e)
              },
              toFixedNum: function(e) {
                if (!e) return 0;
                var t = e.toString().split(".");
                return t[1] && t[1].length > 2 ? e.toFixed(2) : e
              },
              getInfo: function(t) {
                var i = this,
                  r = this;
                t || e.showLoading({
                  title: "加载中"
                }), this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/item/getTiketProductDetail", {
                  itemId: this._ticketId
                }).then((function(s) {
                  if (i.notQueryCouponFlag = s.data.notQueryCouponFlag, t || e.hideLoading(), 1 === s.code) {
                    var n = s.data;
                    i.infoObj = n, i.cardTypeList = [];
                    var u = i.$util.deepCopy(i.infoObj.itemGroupVOList);
                    if (u.unshift(i.infoObj), u.forEach((function(e) {
                        var t = [];
                        0 == e.itemUseDesc.touristInfoType ? t = [0, 1, 2, 3, 4, 5, 6, 7, 8] : (e.itemUseDesc.realCardTypeCodes.split(",").forEach((function(e) {
                          t.push(Number(e))
                        })), t.length < 1 && (t = [0])), i.cardTypeList.push(t)
                      })), i.touristInfoTypeLevel = n.itemUseDesc.touristInfoType, n.itemGroupVOList.forEach((function(e) {
                        e.itemUseDesc.touristInfoType > i.touristInfoTypeLevel && (i.touristInfoTypeLevel = e.itemUseDesc.touristInfoType)
                      })), 0 !== i.infoObj.ticketPrices.length) {
                      if (i.disabledSubmitBtn = !1, t || (e.setStorageSync("touristInfoTypeLevel", i.touristInfoTypeLevel), i.ticketNum = n.itemUseDesc.minBookNum, i.groupTicketArr[0].ticketNum = n.itemUseDesc.minBookNum, i.groupTicketArr[0].itemId = n.itemId, i.initInputGroup(), n.useNotes && (i.showNotice = !0)), 2 == i.infoObj.itemUseDesc.dateType && (i.showHourBox = 2 == i.infoObj.itemUseDesc.stockLimit, i.setCalendar(t)), 1 == i.infoObj.itemUseDesc.dateType) {
                        i.selectedObj = {}, i.infoObj.itemUseDesc.datePeriodBegin = i.infoObj.itemUseDesc.datePeriodBegin.slice(0, 10), i.infoObj.itemUseDesc.datePeriodEnd = i.infoObj.itemUseDesc.datePeriodEnd.slice(0, 10), i.infoObj.itemUseDesc.dateCanUse = i.getWeekNotUse(i.infoObj.itemUseDesc.dateCanUse), i.ticketPrice = i.infoObj.ticketPrices[0].sellPrice;
                        var a = i.infoObj.itemGroupVOList;
                        i.showTimeTag = !0, t ? (a.forEach((function(e, t) {
                          i.selectedObj["sellPrice".concat(t)] = e.ticketPrices[0].sellPrice, i.selectedObj["surplusStock".concat(t)] = e.ticketPrices[0].surplusStock
                        })), e.getStorageSync("touristInfoTypeLevel") == i.touristInfoTypeLevel ? i.refreshLevelS() : i.refreshLevelNo()) : a.forEach((function(e, t) {
                          i.groupTicketArr.push({
                            ticketNum: 0,
                            inputGroup: [],
                            haveToId: !1,
                            usedTouristIdsPopData: [],
                            itemId: e.groupItemId
                          }), i.selectedObj["sellPrice".concat(t)] = e.ticketPrices[0].sellPrice, i.selectedObj["surplusStock".concat(t)] = e.ticketPrices[0].surplusStock
                        })), i.$forceUpdate(), i.calcPriceAmount()
                      }
                      t && o.stopPullDownRefresh()
                    } else i.$util.showToast("暂无可".concat(0 == r.infoObj.skuItemType ? "订" : "约", "日期"))
                  } else i.$util.showToast(s.msg)
                })).catch((function(t) {
                  e.hideLoading(), i.disabledSubmitBtn = !1, e.stopPullDownRefresh()
                }))
              },
              refreshLevelS: function() {
                var t = this,
                  i = this.$util.deepCopy(this.infoObj.itemGroupVOList),
                  o = [];
                if (i.unshift(this.infoObj), 0 != this.touristInfoTypeLevel) {
                  i.forEach((function(e, i) {
                    var r = {
                      ticketNum: 0,
                      inputGroup: [],
                      haveToId: !1,
                      usedTouristIdsPopData: [],
                      itemId: e.itemId
                    };
                    i > 0 && (r.itemId = e.groupItemId), t.groupTicketArr.forEach((function(e) {
                      r.itemId == e.itemId && (r = e)
                    })), o.push(r)
                  }));
                  var r = this.cardTypeList[0][0];
                  o.forEach((function(e, t) {
                    var o = [];
                    if (2 == i[t].itemUseDesc.touristInfoType) {
                      if (e.ticketNum > 0) {
                        for (var s = 0; s < e.ticketNum; s++) e.inputGroup[s] ? o.push(e.inputGroup[s]) : o.push({
                          name: "",
                          telephone: "",
                          idCard: "",
                          cardType: r
                        });
                        e.inputGroup = o
                      }
                    } else e.ticketNum > 0 && (e.inputGroup = [e.inputGroup[0]], e.inputGroup[0].id && (e.usedTouristIdsPopData = e.usedTouristIdsPopData.filter((function(t) {
                      return t.id == e.inputGroup[0].id
                    }))))
                  })), this.groupTicketArr = o, this.$forceUpdate()
                }
                e.setStorageSync("touristInfoTypeLevel", this.touristInfoTypeLevel)
              },
              refreshLevelNo: function() {
                var t = this,
                  i = this.$util.deepCopy(this.infoObj.itemGroupVOList),
                  o = this.$util.deepCopy(this.groupTicketArr);
                i.unshift(this.infoObj);
                var r = [],
                  n = [],
                  u = [];
                o.forEach((function(e) {
                  var t;
                  n = (t = n).concat.apply(t, (0, s.default)(e.inputGroup))
                }));
                var a = n[0];
                if (this.commonUsedTouristList.forEach((function(e) {
                    a && a.id == e.id && u.push(e)
                  })), 0 == this.touristInfoTypeLevel) {
                  a || (a = {
                    name: "",
                    telephone: "",
                    idCard: ""
                  });
                  var c = {
                    ticketNum: 1,
                    inputGroup: [a],
                    haveToId: !1,
                    usedTouristIdsPopData: u,
                    itemId: this.infoObj.itemId
                  };
                  i.forEach((function(e, i) {
                    var o = {
                      ticketNum: 0,
                      inputGroup: [],
                      haveToId: !1,
                      usedTouristIdsPopData: [],
                      itemId: e.itemId
                    };
                    i > 0 && (o.itemId = e.groupItemId), t.groupTicketArr.forEach((function(e) {
                      o.itemId == e.itemId && ((o = e).inputGroup = [], o.usedTouristIdsPopData = [])
                    })), r.push(o)
                  })), r.forEach((function(e) {
                    c.itemId == e.itemId && (e.inputGroup = c.inputGroup, e.usedTouristIdsPopData = c.usedTouristIdsPopData)
                  }))
                } else 0 == e.getStorageSync("touristInfoTypeLevel") ? (i.forEach((function(e, i) {
                  var o = {
                    ticketNum: 0,
                    inputGroup: [],
                    haveToId: !1,
                    usedTouristIdsPopData: [],
                    itemId: e.itemId
                  };
                  i > 0 && (o.itemId = e.groupItemId), t.groupTicketArr.forEach((function(e) {
                    o.itemId == e.itemId && (o = e)
                  })), r.push(o)
                })), a || (a = {
                  name: "",
                  telephone: "",
                  idCard: "",
                  cardType: 0
                }), r.forEach((function(e, i) {
                  var o = t.infoObj,
                    r = [];
                  i > 0 && (o = t.infoObj.itemGroupVOList[i - 1]);
                  var s = t.cardTypeList[i][0];
                  if (a.cardType = s, 2 == o.itemUseDesc.touristInfoType) {
                    if (e.ticketNum > 0)
                      for (var n = 0; n < e.ticketNum; n++) 0 == n ? r.push(a) : r.push({
                        name: "",
                        telephone: "",
                        idCard: "",
                        cardType: s
                      })
                  } else e.ticketNum > 0 && r.push(a);
                  e.usedTouristIdsPopData = u, e.inputGroup = r
                }))) : i.forEach((function(e, i) {
                  var o = {
                    ticketNum: 0,
                    inputGroup: [],
                    haveToId: !1,
                    usedTouristIdsPopData: [],
                    itemId: e.itemId
                  };
                  i > 0 && (o.itemId = e.groupItemId), t.groupTicketArr.forEach((function(e) {
                    o.itemId == e.itemId && (o = e)
                  })), r.push(o)
                })), r.forEach((function(e, o) {
                  var r = [];
                  if (2 == i[o].itemUseDesc.touristInfoType) {
                    if (e.ticketNum > 0) {
                      for (var s = 0; s < e.ticketNum; s++) e.inputGroup[s] ? r.push(e.inputGroup[s]) : r.push({
                        name: "",
                        telephone: "",
                        idCard: "",
                        cardType: t.cardTypeList[o][0]
                      });
                      e.inputGroup = r
                    }
                  } else e.ticketNum > 0 && (e.inputGroup = [e.inputGroup[0]], e.inputGroup[0].id && (e.usedTouristIdsPopData = e.usedTouristIdsPopData.filter((function(t) {
                    return t.id == e.inputGroup[0].id
                  }))))
                }));
                this.groupTicketArr = r, this.$forceUpdate(), e.setStorageSync("touristInfoTypeLevel", this.touristInfoTypeLevel)
              },
              getRefundTag: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if ("条件退" !== e || 2 == t.itemUseDesc.dateType && !this.selectedDate) return e;
                if (2 == t.itemUseDesc.dateType) {
                  if (this.showHourBox && !this.selectedHour) return e;
                  var i = t.refundFeeList,
                    o = "";
                  if (null === i[0].feeType) {
                    if (2 === t.itemUseDesc.refundRuleType) {
                      var r = t.itemUseDesc.refundLimitHour,
                        s = t.itemUseDesc.refundLimitDay,
                        n = t.itemUseDesc.refundLimitMinute,
                        u = this.addDate(this.selectedDate, -s);
                      return u = u + " " + (r < 10 ? "0" + r : r) + ":" + (n < 10 ? "0" + n : n) + ":00", this.compareBigDate(u) ? u.slice(0, u.length - 3).replace(" ", "的") + "前免费退" : "当前下单时间不可退"
                    }
                    if (3 === t.itemUseDesc.refundRuleType) {
                      var a = this.selectedDate + "的23:59";
                      return a + "前免费退"
                    }
                    return e
                  }
                  if (0 === i[0].timeLimit) o = this.getTag(i[0]);
                  else if (1 === i[0].timeLimit || 2 === i[0].timeLimit || 4 === i[0].timeLimit)
                    for (var c = 1, d = "", p = 0; p < i.length; p++) {
                      var h = i[p],
                        f = this.addDate(this.selectedDate, 1 === h.timeLimit ? -h.day : h.day);
                      if (f = p === i.length - 1 ? d : f + " " + (h.hour < 10 ? "0" + h.hour : h.hour) + ":" + (h.minute < 10 ? "0" + h.minute : h.minute) + ":00", this.compareBigDate(f) || p === i.length - 1) {
                        if (0 !== h.fee && 0 != h.feeType) {
                          o = 3 == c ? d.slice(0, d.length - 3).replace(" ", "的") + "前免费退" : this.getTag(h);
                          break
                        }
                        c = 3, d = f, p === i.length - 1 && (o = "随时退")
                      } else d = f
                    }
                  return o
                }
                if (3 === t.itemUseDesc.refundRuleType && null === t.refundFeeList[0].feeType) {
                  var m = t.itemUseDesc.datePeriodEnd + "的23:59";
                  return this.compareBigDate(m) ? m + "前免费退" : "当前下单时间不可退"
                }
                if (2 === t.itemUseDesc.refundRuleType && null === t.refundFeeList[0].feeType) {
                  var l = t.itemUseDesc.refundLimitHour,
                    g = t.itemUseDesc.refundLimitDay,
                    T = t.itemUseDesc.refundLimitMinute,
                    y = this.addDate(t.itemUseDesc.datePeriodEnd, -g);
                  return y = y + " " + (l < 10 ? "0" + l : l) + ":" + (T < 10 ? "0" + T : T) + ":00", this.compareBigDate(y) ? y.slice(0, y.length - 3).replace(" ", "的") + "前免费退" : "当前下单时间不可退"
                }
                var I = t.refundFeeList,
                  k = "";
                if (0 === I[0].timeLimit) k = this.getTag(I[0]);
                else if (1 === I[0].timeLimit || 2 === I[0].timeLimit || 4 === I[0].timeLimit)
                  for (var v = 1, b = "", D = 0; D < I.length; D++) {
                    var O = I[D],
                      A = "";
                    if (4 === O.timeLimit ? A = moment().format("YYYY-MM-DD") : (A = t.itemUseDesc.datePeriodEnd, O.timeLimit, O.day), A = this.addDate(A, 1 === O.timeLimit ? -O.day : O.day), console.log(A), A = D === I.length - 1 ? b : A + " " + (O.hour < 10 ? "0" + O.hour : O.hour) + ":" + (O.minute < 10 ? "0" + O.minute : O.minute) + ":00", this.compareBigDate(A) || D === I.length - 1) {
                      if (0 !== O.fee && 0 != O.feeType) {
                        k = 3 == v ? b.replace(" ", "的") + "前免费退" : this.getTag(O);
                        break
                      }
                      v = 3, b = A, D === I.length - 1 && (k = "随时退")
                    } else b = A
                  }
                return k
              },
              getTag: function(e) {
                if (0 === e.fee) return "无手续费";
                if (0 === e.feeType) return "无手续费";
                if (2 === e.feeType) {
                  if (1 == e.feeUnit) return e.fee < 100 ? "当前下单时间退款需手续费" : "当前下单时间不可退";
                  if (2 == e.feeUnit) return "当前下单时间退款需手续费"
                } else {
                  if (1 == e.feeUnit) return e.fee < 100 ? "当前下单时间退款需手续费" : "当前下单时间不可退";
                  if (2 == e.feeUnit) return "当前下单时间退款需手续费"
                }
              },
              getTimeDesc: function(e, t) {
                if (2 !== this.infoObj.itemUseDesc.dateType) {
                  if (3 === this.infoObj.itemUseDesc.refundRuleType && null == e.feeType) {
                    if (this.infoObj.itemUseDesc.datePeriodEnd) return this.infoObj.itemUseDesc.datePeriodEnd + " 23:59之" + (0 === t ? "前（含）" : "后") + "申请退款"
                  } else if (2 === this.infoObj.itemUseDesc.refundRuleType && null == e.feeType) {
                    var i = this.infoObj.itemUseDesc.refundLimitHour,
                      o = this.infoObj.itemUseDesc.refundLimitDay,
                      r = this.infoObj.itemUseDesc.refundLimitMinute;
                    return this.addDate(this.infoObj.itemUseDesc.datePeriodEnd, -o) + " " + (i < 10 ? "0" + i : i) + ":" + (r < 10 ? "0" + r : r) + "之" + (0 === t ? "前（含）" : "后") + "申请退款"
                  }
                  if (0 == e.timeLimit) return "购买后申请退款";
                  if (1 == e.timeLimit) {
                    var s = this.addDate(this.infoObj.itemUseDesc.datePeriodEnd, -e.day);
                    return "".concat(s, " ").concat(e.hour < 10 ? "0" + e.hour : e.hour, ":").concat(e.minute < 10 ? "0" + e.minute : e.minute, "之前（含）申请退款")
                  }
                  if (2 == e.timeLimit) {
                    var n = this.addDate(this.infoObj.itemUseDesc.datePeriodEnd, e.day);
                    return "".concat(n, " ").concat(e.hour < 10 ? "0" + e.hour : e.hour, ":").concat(e.minute < 10 ? "0" + e.minute : e.minute, "之前（含）申请退款")
                  }
                  if (4 == e.timeLimit) {
                    var u = moment().format("YYYY-MM-DD"),
                      a = this.addDate(u, e.day);
                    return "".concat(a, " ").concat(e.hour < 10 ? "0" + e.hour : e.hour, ":").concat(e.minute < 10 ? "0" + e.minute : e.minute, "之前（含）申请退款")
                  }
                  if (null == e.timeLimit) {
                    var c = "";
                    if (1 == (e = this.ydxz.refundFeeList[t - 1]).timeLimit) c = this.addDate(this.infoObj.itemUseDesc.datePeriodEnd, -e.day);
                    else if (2 == e.timeLimit) c = this.addDate(this.infoObj.itemUseDesc.datePeriodEnd, e.day);
                    else if (4 == e.timeLimit) {
                      var d = moment().format("YYYY-MM-DD"),
                        p = this.addDate(d, e.day);
                      return "".concat(p, " ").concat(e.hour < 10 ? "0" + e.hour : e.hour, ":").concat(e.minute < 10 ? "0" + e.minute : e.minute, "之后申请退款")
                    }
                    return "".concat(c, " ").concat(e.hour < 10 ? "0" + e.hour : e.hour, ":").concat(e.minute < 10 ? "0" + e.minute : e.minute, "之后申请退款")
                  }
                  return e.timeDesc || ""
                }
                if (!this.selectedDate) return e.timeDesc || "";
                if (3 === this.ydxz.itemUseDesc.refundRuleType && null == e.feeType) return this.selectedDate + " 23:59之" + (0 === t ? "前（含）" : "后") + "申请退款";
                if (2 === this.ydxz.itemUseDesc.refundRuleType && null == e.feeType) {
                  var h = this.ydxz.itemUseDesc.refundLimitHour,
                    f = this.ydxz.itemUseDesc.refundLimitDay,
                    m = this.ydxz.itemUseDesc.refundLimitMinute;
                  return this.addDate(this.selectedDate, -f) + " " + (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + "之" + (0 === t ? "前（含）" : "后") + "申请退款"
                }
                if (0 == e.timeLimit) return "购买后申请退款";
                if (1 == e.timeLimit) {
                  var l = this.addDate(this.selectedDate, -e.day);
                  return "".concat(l, " ").concat(e.hour < 10 ? "0" + e.hour : e.hour, ":").concat(e.minute < 10 ? "0" + e.minute : e.minute, "之前（含）申请退款")
                }
                if (2 == e.timeLimit || 4 == e.timeLimit) {
                  var g = this.addDate(this.selectedDate, e.day);
                  return "".concat(g, " ").concat(e.hour < 10 ? "0" + e.hour : e.hour, ":").concat(e.minute < 10 ? "0" + e.minute : e.minute, "之前（含）申请退款")
                }
                if (null == e.timeLimit) {
                  var T = "";
                  return 1 == (e = this.ydxz.refundFeeList[t - 1]).timeLimit ? T = this.addDate(this.selectedDate, -e.day) : 2 != e.timeLimit && 4 != e.timeLimit || (T = this.addDate(this.selectedDate, e.day)), "".concat(T, " ").concat(e.hour < 10 ? "0" + e.hour : e.hour, ":").concat(e.minute < 10 ? "0" + e.minute : e.minute, "之后申请退款")
                }
              },
              compareBigDate: function(e) {
                return new Date(e) > new Date
              },
              addDate: function(e, t) {
                var i = new Date(e);
                i.setDate(i.getDate() + t);
                var o = i.getMonth() + 1,
                  r = i.getDate();
                return o < 10 && (o = "0" + o), r < 10 && (r = "0" + r), i.getFullYear() + "-" + o + "-" + r
              },
              refreshNum: function(e) {
                var t = this,
                  i = e.find((function(e) {
                    return e.date == t.selectedDate
                  }));
                i && this.selectBookDateInPage(i, !0)
              },
              timeDataFormat: function() {
                var e = this,
                  t = this.infoObj,
                  i = this.showHourBox,
                  o = this.infoObj.skuSellOutInfo ? this.infoObj.skuSellOutInfo : 0 == this.infoObj.skuItemType ? "已满" : "约满";
                return this.infoObj.ticketPrices.map((function(r) {
                  var s = "";
                  e.selectedDate == r.date && i && e.getHourData(r.itemTicketStocks);
                  var n = r.sellPrice && r.sellPrice > 0 ? "¥" + r.sellPrice : "免费";
                  if (s = t.skuInStockInfo ? t.skuInStockInfo : r.surplusStock > 50 ? n : "余" + r.surplusStock, 0 === r.surplusStock) s = o, r.disabled = !0;
                  else if (-1 === r.surplusStock) s = t.skuInStockInfo || n;
                  else if (r.surplusStock > 0)
                    if (e.showHourBox) {
                      e.clearDiscount(r) > 0 ? s = t.skuInStockInfo || n : (r.disabled = !0, s = o)
                    } else s = t.skuInStockInfo || (r.surplusStock > 50 ? n : "余" + r.surplusStock);
                  return r.dateShort = r.date.slice(5), r.week = e.getWeekOfDate(r.date), r.diy = s, r
                }))
              },
              clearDiscount: function(e) {
                var t = (new Date).getTime();
                return e.surplusStock = 0, e.itemTicketStocks.forEach((function(i) {
                  new Date((i.date + " " + i.endTime + ":00").replace(/-/g, "/")).getTime() > t && (e.surplusStock += i.surplusStock)
                })), e.surplusStock
              },
              getWeekOfDate: function(e) {
                e = e.replace(/-/g, "/");
                var t = u.format(new Date, "yyyy/MM/dd"),
                  i = u.format(u.addDay(new Date, 1), "yyyy/MM/dd");
                return e == t ? "今天" : e == i ? "明天" : "周" + "日一二三四五六".charAt(new Date(e).getDay())
              },
              brText: function(e) {
                if (e) {
                  var t = e.split("#**#");
                  return t.pop().split("</p>").forEach((function(e, i) {
                    if (e) {
                      var o = (e = e.split("<p>").join("")).match(/\<.*?\>/g),
                        r = e.match(/[\r\n]/g),
                        s = o || r;
                      s && s[0] && s.forEach((function(t) {
                        e = e.replaceAll(t, "")
                      })), t.push(e)
                    }
                  })), t
                }
              },
              selectBookDateInPage: function(t, i) {
                var o = this;
                if (t.disabled && 2 == this.infoObj.itemUseDesc.dateType) i && (e.setStorageSync("selectedHour", ""), this.selectedHour = "", this.selectedDate = "", this.departTimeSlot = "");
                else {
                  if (this.showHourBox) {
                    if (this.selectedDate = t.date, this.getHourData(t.itemTicketStocks, i), i) return;
                    e.setStorageSync("selectedHour", t), this.selectedHour = "", this.departTimeSlot = "", this.ticketPrice = null
                  } else {
                    if (!i) {
                      var r = [];
                      if (this.groupTicketArr.forEach((function(e, i) {
                          var s = t.surplusStock,
                            n = o.infoObj.groupItemName;
                          i > 0 && (s = t["surplusStock".concat(i - 1)] || 0, n = o.infoObj.itemGroupVOList[i - 1].groupItemName), e.ticketNum > s && -1 != s && r.push({
                            msg: s > 0 ? "仅剩".concat(s, "张，请修改购买数量") : "库存已经售空，请修改购买数量",
                            groupItemName: n
                          })
                        })), r[0]) return this.groupErrList = r, void(this.showGroupErr = !0)
                    }
                    this.selectedDate = t.date, e.setStorageSync("selectedHour", t), this.ticketPrice = t.sellPrice, this.selectedObj = t, this.calcPriceAmount()
                  }
                  this.showTimeTag = "今天" == this.getWeekOfDate(this.selectedDate)
                }
              },
              getItemHotelStateByTicketDate: function() {
                var e = this;
                this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/item/getItemHotelStateByTicketDate", {
                  itemId: this._ticketId,
                  date: this.selectedDate
                }).then((function(t) {
                  if (1 === t.code) {
                    var i = t.data;
                    0 !== i.length ? (i.forEach((function(e) {
                      e.date = e.date, e.dateEnd = u.format(u.addDayStr(e.date, 1), "yyyy-MM-dd")
                    })), e.hotelDate = i) : e.$util.showToast("暂无可".concat(0 == that.infoObj.skuItemType ? "订" : "约", "日期"))
                  } else e.$util.showToast(t.msg)
                }))
              },
              chooseHotel: function(e) {
                1 == e.state && (this.startHotelDate = e.date, this.endHotelDate = e.dateEnd)
              },
              getHourData: function(e, t) {
                var i = this,
                  o = (new Date).getTime();
                if (this.hourArr = [], e.forEach((function(e) {
                    new Date((e.date + " " + e.endTime + ":00").replace(/-/g, "/")).getTime() < o && (e.timePassed = !0, e.disabled = !0);
                    var t = "";
                    0 === e.surplusStock ? (e.disabled = !0, t = "已满") : t = e.surplusStock > 200 || -1 == e.surplusStock ? "有票" : "余" + e.surplusStock, e.surplusStockStr = t
                  })), this.hourArr = e, t) {
                  var r = this.hourArr.find((function(e) {
                    return e.startTime + "-" + e.endTime === i.departTimeSlot
                  }));
                  this.selectHourFn(r, !0)
                }
              },
              getGiftCard: function() {
                var e = this;
                this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/giftCard/getCreateOrderCanUseGiftCard", {
                  type: 1
                }).then((function(t) {
                  1 === t.code ? e.giftCardArr = t.data || [] : e.$util.showToast(data.msg)
                }))
              },
              selectHourFn: function(t, i) {
                var o = this;
                if (0 !== t.surplusStock && !0 !== t.disabled) {
                  if (!i) {
                    var r = [];
                    if (this.groupTicketArr.forEach((function(e, i) {
                        var s = t.surplusStock,
                          n = o.infoObj.groupItemName;
                        i > 0 && (s = t["surplusStock".concat(i - 1)] || 0, n = o.infoObj.itemGroupVOList[i - 1].groupItemName), e.ticketNum > s && -1 != s && r.push({
                          msg: s > 0 ? "仅剩".concat(s, "张，请修改购买数量") : "库存已经售空，请修改购买数量",
                          groupItemName: n
                        })
                      })), r[0]) return this.groupErrList = r, void(this.showGroupErr = !0)
                  }
                  t.time = this.departTimeSlot = t.startTime + "-" + t.endTime, this.selectedHour = t, this.selectedObj = t, e.setStorageSync("selectedHour", this.selectedHour), this.ticketPrice = this.selectedHour.sellPrice || 0, this.calcPriceAmount()
                } else i && (this.selectedHour.time = "", this.departTimeSlot = "", e.setStorageSync("selectedHour", this.selectedHour))
              },
              jumpCalendarPage: function() {
                this.$navigateTo({
                  url: "/pages/calendarPage/calendarPage?ticketId=" + this._ticketId + "&scenicType=" + this.infoObj.scenicType + "&groupFlag=" + !0
                })
              },
              calcPriceAmount: function() {
                var e = this,
                  t = this.groupTicketArr,
                  i = new n.default(0),
                  o = new n.default(this.ticketPrice);
                t.forEach((function(t, r) {
                  if (0 == r) i = o.times(t.ticketNum), e.groupTicketArr[r].priceAmount = i.toNumber();
                  else {
                    var s = e.selectedObj["sellPrice".concat(r - 1)] || 0;
                    2 == e.infoObj.itemGroupVOList[r - 1].itemUseDesc.stockLimit && (s = e.selectedHour["sellPrice".concat(r - 1)] || 0);
                    var u = new n.default(s).times(t.ticketNum);
                    i = i.plus(u), e.groupTicketArr[r].priceAmount = u.toNumber()
                  }
                })), this.priceAmount = i, this.getIdList()
              },
              getBestCoupon: function(e, t) {
                var i = this,
                  o = {
                    itemId: this._ticketId,
                    price: this.masterAmount,
                    touristInfoType: this.infoObj.itemUseDesc.touristInfoType,
                    useDateStr: this.selectedDate || "",
                    orderNum: this.masterTicketNum,
                    idCardList: e
                  };
                0 == o.touristInfoType && (o.idCardList = []), this.discountAmount = "", this.userCouponId = "", this.couponArr = [], 0 == this.notQueryCouponFlag ? this.$uniApi.dataRequestNoLoading("POST", "product/app/v1/coupon/getBestCoupon", o).then((function(e) {
                  if (1 === e.code) {
                    var o = e.data,
                      r = i.priceAmount;
                    if ("research" == t && (i.userCouponId = ""), o && o[0]) {
                      i.couponArr = o, i.coupondk = o[0], i.userCouponId = o[0].userCouponId;
                      var s = new n.default(r);
                      new n.default(i.ticketPrice), 3 == o[0].type ? (i.discountAmount = o[0].realQuota, i.priceAmount = s.minus(i.discountAmount).toNumber().toFixed(2)) : (i.discountAmount = o[0].quota, i.priceAmount = s.minus(o[0].quota).toNumber().toFixed(2))
                    } else i.discountAmount = 0
                  } else i.$util.showToast(e.msg)
                })) : this.discountAmount = 0
              },
              getCoupon: function(e, t) {
                var i = this,
                  o = {
                    itemId: this._ticketId,
                    price: e,
                    useDateStr: this.selectedDate || ""
                  };
                this.discountAmount = "", this.userCouponId = "", this.couponArr = [], this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/coupon/getBestCouponByNum", o).then((function(o) {
                  if (1 === o.code) {
                    var r = o.data,
                      s = e;
                    if ("research" == t && (i.userCouponId = ""), r && r[0]) {
                      i.couponArr = r, i.userCouponId = r[0].userCouponId;
                      var u = new n.default(s),
                        a = new n.default(i.ticketPrice);
                      3 == r[0].type ? (i.discountAmount = i.ticketPrice, i.priceAmount = u.minus(a).toNumber().toFixed(2)) : (i.discountAmount = r[0].quota, i.priceAmount = u.minus(r[0].quota).toNumber().toFixed(2))
                    } else i.discountAmount = 0, i.priceAmount = e
                  } else i.$util.showToast(o.msg)
                }))
              },
              checkCoupon: function(e) {
                if (this.discountAmount = e.quota, this.userCouponId = e.userCouponId, this.coupondk = e, !(this.groupTicketArr[0].priceAmount <= 0)) {
                  var t = new n.default(this.groupTicketArr[0].priceAmount);
                  if (3 == e.type) {
                    this.discountAmount = e.realQuota;
                    var i = t.minus(e.realQuota).toNumber();
                    this.priceAmount = this.toFixedNum(i)
                  } else {
                    var o = t.minus(e.quota).toNumber();
                    this.priceAmount = this.toFixedNum(o)
                  }
                  this.showCoupon = !1
                }
              },
              cancelCoupon: function() {
                this.discountAmount = 0, this.priceAmount = this.groupTicketArr[0].priceAmount, this.userCouponId = -1, this.coupondk = "", this.showCoupon = !1
              },
              addNum: function(t) {
                if (t > 0)
                  if (this.showHourBox) {
                    if (this.selectedHour && (!this.selectedHour["surplusStock".concat(t - 1)] || this.selectedHour["surplusStock".concat(t - 1)] < 1) && -1 != this.selectedHour["surplusStock".concat(t - 1)]) return
                  } else if (this.selectedObj && (!this.selectedObj["surplusStock".concat(t - 1)] || this.selectedObj["surplusStock".concat(t - 1)] < 1) && -1 != this.selectedObj["surplusStock".concat(t - 1)]) return;
                var i, o = this.infoObj;
                if (t > 0 && (o = o.itemGroupVOList[t - 1]), i = 0 == o.itemUseDesc.maxBookNum ? 99999 : o.itemUseDesc.maxBookNum, 1 == o.itemUseDesc.dateType && 1 == o.itemUseDesc.stockLimitType && (i = Math.min(i, o.ticketPrices[0].surplusStock)), 2 == this.infoObj.itemUseDesc.dateType) {
                  var r = e.getStorageSync("selectedHour");
                  if (!r) return void this.$util.showToast("请先选择日期");
                  if (!r.time && this.showHourBox) return void this.$util.showToast("请先选择时段");
                  var s = r.surplusStock;
                  t > 0 && (s = r["surplusStock".concat(t - 1)]), r && -1 != s && (i = Math.min(i, s))
                }
                this.groupTicketArr[t].ticketNum >= i ? this.$util.showToast("最多可选择".concat(i, "张")) : (this.groupTicketArr[t].ticketNum = this.groupTicketArr[t].ticketNum + 1, this.addAndReduceInputGroup("add", t), this.$forceUpdate())
              },
              reduceNum: function(e) {
                if (!(this.groupTicketArr[e].ticketNum <= 0)) {
                  var t = 0;
                  this.groupTicketArr.forEach((function(e) {
                    t += e.ticketNum
                  })), t <= 1 ? this.$util.showToast("最少需选择1张") : this.groupTicketArr[e].ticketNum <= 0 || (this.groupTicketArr[e].ticketNum = this.groupTicketArr[e].ticketNum - 1, this.addAndReduceInputGroup("reduce", e), this.$forceUpdate())
                }
              },
              initInputGroup: function() {
                if (0 == this.infoObj.itemUseDesc.touristInfoType) this.groupTicketArr[0].inputGroup = [{
                  name: "",
                  telephone: ""
                }], this.haveToId = !1;
                else if (this.haveToId = !0, this.infoObj.itemUseDesc.minBookNum > 1) {
                  for (var e = [], t = 0; t < this.infoObj.itemUseDesc.minBookNum; t++) e.push({
                    name: "",
                    telephone: "",
                    idCard: "",
                    cardType: this.cardTypeList[0][0]
                  });
                  this.groupTicketArr[0].inputGroup = e
                } else this.groupTicketArr[0].inputGroup = [{
                  name: "",
                  telephone: "",
                  idCard: "",
                  cardType: this.cardTypeList[0][0]
                }];
                this.$forceUpdate(), this.getCommonUsedTouristList("onLoad")
              },
              addAndReduceInputGroup: function(e, t) {
                if (0 == this.touristInfoTypeLevel && this.inputSum > 0) this.calcPriceAmount();
                else {
                  var i = this.infoObj;
                  t > 0 && (i = this.infoObj.itemGroupVOList[t - 1]);
                  var o = i.itemUseDesc.touristInfoType;
                  if ("add" == e) {
                    if ((1 == o || 0 == o) && this.groupTicketArr[t].inputGroup[0]) return void this.calcPriceAmount();
                    this.groupTicketArr[t].inputGroup.push({
                      name: "",
                      telephone: "",
                      idCard: "",
                      cardType: this.cardTypeList[t][0]
                    })
                  }
                  if ("reduce" == e) {
                    if ((1 == o || 0 == o) && this.groupTicketArr[t].ticketNum > 0) return void this.calcPriceAmount();
                    var r = this.groupTicketArr[t].inputGroup.pop();
                    r.id && (this.groupTicketArr[t].usedTouristIdsPopData = this.groupTicketArr[t].usedTouristIdsPopData.filter((function(e) {
                      return e.id != r.id
                    })))
                  }
                  this.calcPriceAmount()
                }
              },
              getWeekNotUse: function(e) {
                var t = [],
                  i = e.split(","),
                  o = [1, 2, 3, 4, 5, 6, 7];
                for (var r in o) {
                  var s = !0;
                  for (var n in i)
                    if (o[r] == i[n]) {
                      s = !1;
                      break
                    } s && t.push("周" + "一一二三四五六日".charAt(o[r]))
                }
                return t.join(",")
              },
              chooseCoupon: function() {
                this.couponArr[0] && (this.showCoupon = !0)
              },
              closeNoStock: function() {
                this.showNoStock = !1, this.getInfo(!0)
              },
              submit: function() {
                var e = this.verify();
                e && this.createOrder(e)
              },
              verify: function() {
                if (this.inputSum < 1) this.$util.showToast("最少需选择1张");
                else {
                  var t = [];
                  this.groupTicketArr.forEach((function(e) {
                    var i;
                    t = (i = t).concat.apply(i, (0, s.default)(e.inputGroup))
                  }));
                  var i = this.$util.checkPhone(t[0].telephone);
                  if (i.code) {
                    var o = [],
                      r = this.$util.deepCopy(this.groupTicketArr),
                      n = !1;
                    if (2 != this.infoObj.itemUseDesc.dateType || 2 != this.infoObj.itemUseDesc.stockLimit || this.selectedDate && this.departTimeSlot) {
                      if (2 != this.infoObj.itemUseDesc.dateType || 2 === this.infoObj.itemUseDesc.stockLimit || this.selectedDate) {
                        for (var u = 0; u < r.length; u++) {
                          var a = this.$util.deepCopy(r[u]);
                          if (!(a.ticketNum < 1))
                            if (0 == u) {
                              var c = {
                                itemId: this._ticketId,
                                itemName: this.infoObj.itemTitle,
                                price: this.ticketPrice,
                                orderAmount: a.priceAmount,
                                quantity: a.ticketNum,
                                ticketUseDate: this.selectedDate,
                                groupItemName: this.infoObj.groupItemName
                              };
                              this.departTimeSlot && (c.ticketUseStartTime = this.departTimeSlot.split("-")[0], c.ticketUseEndTime = this.departTimeSlot.split("-")[1]), (this.shareMemberId || e.getStorageSync("peopleShareId")) && (c.shareMemberId = this.shareMemberId || e.getStorageSync("peopleShareId")), 0 == this.infoObj.seckillActivity && (c.seckillItemId = this.infoObj.seckillItemId), this.discountAmount > 0 && (c.userCouponId = this.userCouponId, c.orderAmount = this.priceAmount, this.coupondk && 3 == this.coupondk.type && (c.couponDeductionNum = this.coupondk.deductionNum));
                              var d = [],
                                p = [];
                              for (var h in a.inputGroup) {
                                var f = a.inputGroup[h],
                                  m = this.$util.checkName(f.name);
                                if (!m.code) return void this.$util.showToast(this.infoObj.groupItemName + m.msg);
                                n ? a.inputGroup[h].telephone = "" : n = !0, this.haveToId ? (d.push(f.idCard), (m = this.$util.checkId(f.idCard, f.cardType)).code || p.push(f.idCard)) : a.inputGroup[h].idCard = ""
                              }
                              var l = Array.from(new Set(p));
                              if (this.haveToId && l.length > 0) {
                                var g = l.concat(this.errIdCard);
                                return this.errIdCard = Array.from(new Set(g)), void this.$util.showToast(this.infoObj.groupItemName + "证件号格式错误")
                              }
                              var T = Array.from(new Set(d));
                              if (this.haveToId && T.length < d.length) return void this.$util.showToast(this.infoObj.groupItemName + "证件号不能重复");
                              c.orderPeopleList = a.inputGroup, o.push(c)
                            } else {
                              var y = this.infoObj.itemGroupVOList[u - 1],
                                I = {
                                  itemId: y.groupItemId,
                                  itemName: y.itemTitle,
                                  price: this.selectedObj["sellPrice".concat(u - 1)],
                                  orderAmount: a.priceAmount,
                                  quantity: a.ticketNum,
                                  ticketUseDate: this.selectedDate,
                                  groupItemName: y.groupItemName
                                };
                              this.departTimeSlot && 2 == y.itemUseDesc.dateType && 2 == y.itemUseDesc.stockLimit && (I.ticketUseStartTime = this.departTimeSlot.split("-")[0], I.ticketUseEndTime = this.departTimeSlot.split("-")[1]), (this.shareMemberId || e.getStorageSync("peopleShareId")) && (I.shareMemberId = this.shareMemberId || e.getStorageSync("peopleShareId")), 0 == y.seckillActivity && (I.seckillItemId = y.seckillItemId), 0 == this.touristInfoTypeLevel && (a.inputGroup = r[0].inputGroup);
                              var k = [],
                                v = [],
                                b = 0 != y.itemUseDesc.touristInfoType;
                              for (var D in a.inputGroup) {
                                var O = a.inputGroup[D],
                                  A = this.$util.checkName(O.name);
                                if (!A.code) return void this.$util.showToast(y.groupItemName + A.msg);
                                n ? a.inputGroup[D].telephone = "" : n = !0, b ? (k.push(O.idCard), (A = this.$util.checkId(O.idCard, O.cardType)).code || v.push(O.idCard)) : a.inputGroup[D].idCard = ""
                              }
                              var S = Array.from(new Set(v));
                              if (b && S.length > 0) {
                                var P = S.concat(this.errIdCard);
                                return this.errIdCard = Array.from(new Set(P)), void this.$util.showToast(y.groupItemName + "证件号格式错误")
                              }
                              var L = Array.from(new Set(k));
                              if (0 != y.itemUseDesc.touristInfoType && L.length < k.length) return void this.$util.showToast(y.groupItemName + "证件号不能重复");
                              I.orderPeopleList = a.inputGroup, o.push(I)
                            }
                        }
                        return o
                      }
                      this.$util.showToast("请选择使用日期")
                    } else this.$util.showToast("请选择使用日期和时段")
                  } else this.$util.showToast(i.msg)
                }
              },
              closeLineing: function(e) {
                this.lineing = !1, this.hasTimeOut = !1, this.repeatCreateOrder && (clearInterval(this.repeatCreateOrder), clearInterval(this.repeatCreateOrder2)), this.repeatCreateOrder = null, this.repeatCreateOrder2 = null, this.disabledSubmitBtn = !1, e || this.getInfo(!0)
              },
              createOrder: function(t) {
                var i = this;
                if (!this.disabledSubmitBtn || this.lineing) {
                  var o = this;
                  !o.hasTimeOut && o.timeOutInit(), this.disabledSubmitBtn = !0, !this.lineing && e.showLoading({
                    title: "预".concat(0 == o.infoObj.skuItemType ? "订" : "约", "中...")
                  });
                  var r = {
                    addTicketOrderDTOList: t
                  };
                  this.$uniApi.dataRequestNoLoading("POST", "order/app/v1/order/addTicketOrderGroup", r, !1).then((function(r) {
                    if (e.hideLoading(), r.msg.includes("火爆") || r.msg.includes("频繁")) return o.lineing = !0, void(o.repeatCreateOrder = setTimeout((function() {
                      o.createOrder(t)
                    }), 2e3));
                    if (1 != r.code && !r.data) return i.closeLineing(!0), i.disabledSubmitBtn = !1, void setTimeout((function() {
                      o.$util.showToast(r.msg)
                    }), 300);
                    if (1 != r.code) {
                      i.closeLineing(!0), i.disabledSubmitBtn = !1;
                      var s = r.data.addTicketOrderDTOList,
                        n = [],
                        u = 0;
                      for (var a in s) {
                        var c = s[a];
                        if (18031 == c.result.code) {
                          var d = o.errIdCard || [],
                            p = Array.from(new Set(d.concat(c.result.data)));
                          o.errIdCard = p
                        }
                        if (1 != c.result.code) {
                          var h = {
                            msg: c.result.msg,
                            groupItemName: c.groupItemName + "校验失败:"
                          };
                          if ((18022 == c.result.code || 18026 == c.result.code || c.result.msg.includes("库存不足")) && (u++, h = {
                              msg: c.result.msg,
                              groupItemName: c.groupItemName
                            }, 0 == a && 18026 != c.result.code)) return i.selectedHour = "", e.setStorageSync("selectedHour", ""), i.hourArr = [], i.selectedDate = "", i.ticketPrice = 0, i.priceAmount = 0, i.selectedObj = {}, i.departTimeSlot = "", void(i.showNoStock = !0);
                          n.push(h)
                        }
                      }
                      u > 0 && i.getInfo(!0), i.groupErrList = n, i.showGroupErr = !0
                    } else {
                      i._orderId = r.data.groupOrderId, i.closeLineing(!0);
                      var f = r.data,
                        m = f.addTicketOrderDTOList,
                        l = [],
                        g = [],
                        T = 0;
                      m.forEach((function(e, i) {
                        if (1 != e.result.code) l.push({
                          msg: e.result.msg,
                          groupItemName: e.groupItemName + "下单失败:"
                        }), T++;
                        else {
                          l.push({
                            msg: "",
                            groupItemName: e.groupItemName + "下单成功"
                          });
                          var o = t[i].orderPeopleList;
                          g = g.concat(o)
                        }
                      })), l.push({
                        groupItemName: "",
                        msg: "成功订单可前往订单列表付款"
                      }), T > 0 ? (i.groupErrList = l, i.showGroupErr = !0, f.successOrderNum > 0 && (i.errJump = !0)) : 0 == i.priceAmount ? (2 == i.infoObj.itemUseDesc.dateType ? i.bookInfoObj.time = "".concat(i.selectedDate, " ").concat(i.departTimeSlot || "") : i.bookInfoObj.time = "".concat(i.infoObj.itemUseDesc.datePeriodBegin, "至").concat(i.infoObj.itemUseDesc.datePeriodEnd, "有效"), i.$uniApi.dataRequestNoLoading("GET", "order/app/v1/order/getGroupOrderDetail", {
                        groupOrderId: i._orderId
                      }).then((function(e) {
                        1 === e.code ? (e.data.mainOrder, i.isHideSuccessMask = !0, i.getGiftBagForOrder(i._orderId)) : i.$util.showToast(r.msg)
                      })), i.$store.dispatch("wxInForm", ["gDlb_Lmm5UjBhe5jnstiOCTi4XfN2KOq9056Be9lDSE"]).then((function(e) {}))) : i.goPay()
                    }
                  })).catch((function(t) {
                    i.closeLineing(), e.hideLoading(), i.disabledSubmitBtn = !1
                  }))
                }
              },
              confirmOrder: function() {
                this.showGroupErr = !1, this.errJump && (this.errJump = !1, e.redirectTo({
                  url: "/pages/myorder/myorder?type=0"
                }))
              },
              goPay: function() {
                var t = this;
                e.showLoading({
                  title: "发起支付..."
                }), this.$uniApi.dataRequestYesLoading("POST", "order/app/v1/order/groupTicketWaitPayToPay", {
                  payChannel: "",
                  orderSource: 5,
                  groupOrderId: this._orderId,
                  buyerMemo: "",
                  seriesNumber: e.getStorageSync("userInfor").openId || e.getStorageSync("wxopenid")
                }, "支付中").then((function(i) {
                  if (1 !== i.code) return e.hideLoading(), t.submiting = !1, void t.$util.showToast(i.msg);
                  e.requestPayment({
                    timeStamp: i.data.timeStamp,
                    nonceStr: i.data.nonceStr,
                    package: "prepay_id=".concat(i.data.prepayid),
                    signType: i.data.signType,
                    paySign: i.data.pay_sign,
                    success: function(e) {
                      t.$store.dispatch("wxInForm", ["gDlb_Lmm5UjBhe5jnstiOCTi4XfN2KOq9056Be9lDSE"]).then((function(e) {
                        t.jumpOrderPay()
                      })).catch((function(e) {
                        t.jumpOrderPay()
                      })), t.submiting = !1
                    },
                    fail: function(i) {
                      t.submiting = !1, e.redirectTo({
                        url: "/pages/myorder/myorder?type=0"
                      })
                    }
                  })
                }))
              },
              jumpOrderPay: function() {
                var t = this;
                this.$uniApi.dataRequestNoLoading("GET", "order/app/v1/order/getGroupOrderDetail", {
                  groupOrderId: this._orderId
                }).then((function(i) {
                  if (1 === i.code) {
                    var o = i.data,
                      r = i.data.mainOrder;
                    e.redirectTo({
                      url: "/subPage/pages/order_pay/order_pay?count=".concat(o.realPayableAmount, "&type=groupTicket&orderId=").concat(t._orderId, "&guideCopywriting=\n\t\t\t\t\t&subscribeType=0&isSpecial=").concat(r.isSpecial, "&itemId=").concat(r.itemId, "&orderType=2")
                    })
                  } else t.$util.showToast(data.msg)
                }))
              },
              timeOutInit: function() {
                var e = this;
                this.hasTimeOut || (this.hasTimeOut = !0, e.repeatCreateOrder2 = setTimeout((function() {
                  e.hasTimeOut && (e.closeLineing(), e.$util.showToast("很抱歉，您被挤出了队伍，请重新提交"))
                }), 4e4))
              },
              backPage: function() {
                e.navigateBack()
              },
              jumpToOrder: function() {
                this.isHideSuccessMask = !1, e.redirectTo({
                  url: "/pages/myorder/myorder?type=0"
                })
              },
              confirm: function() {
                var e = this.verify();
                e && (this.createOrder(e), this.$refs.popup.close())
              },
              call: function(t) {
                e.makePhoneCall({
                  phoneNumber: t
                })
              },
              openPopup: function() {
                this.$refs.popup.open()
              },
              closePopup: function() {
                this.priceAmount, this.$refs.popup.close()
              },
              changeGiftCard: function(e, t) {
                var i = this;
                if (this.priceAmount <= 0) this.$util.showToast("目前".concat(0 == this.infoObj.skuItemType ? "订" : "预约", "单已经没有可用于抵扣的金额"));
                else {
                  if (this.giftCardPopData.includes(e.id)) this.giftCardPopData = this.giftCardPopData.filter((function(t) {
                    return t != e.id
                  }));
                  else {
                    if (this.activeGiftamount > this.priceAmount) return this.$util.showToast("目前".concat(0 == this.infoObj.skuItemType ? "订" : "预约", "单已经没有可用于抵扣的金额")), !1;
                    this.giftCardPopData.push(e.id)
                  }
                  var o = new n.default(0);
                  this.giftCardArr.forEach((function(e) {
                    i.giftCardPopData.forEach((function(t) {
                      t == e.id && (o = o.plus(e.balance))
                    }))
                  })), this.activeGiftamount = o.toNumber()
                }
              },
              setGiftCardPrice: function() {
                var e = this.priceAmount;
                this.activeGiftamount >= e ? this.giftCardAmount = this.priceAmount : this.giftCardAmount = this.activeGiftamount, this.activeGiftCard = this.$util.deepCopy(this.giftCardPopData)
              },
              confirmCard: function() {
                this.setGiftCardPrice(), this.showGiftCard = !1
              },
              chooseGiftCard: function() {
                var e = this,
                  t = 0;
                this.giftCardArr[0] && (this.giftCardPopData = this.$util.deepCopy(this.activeGiftCard), this.giftCardArr.forEach((function(i) {
                  e.giftCardPopData.forEach((function(e) {
                    e == i.id && (t += i.balance)
                  }))
                })), this.activeGiftamount = t, this.showGiftCard = !0)
              },
              choosePassenger: function(e) {
                this.groupTicketIndex = e, this.showPassenger = !0, this.setPassengerTitle(e)
              },
              setPassengerTitle: function(e) {
                var t = this.groupTicketArr[e].inputGroup.length;
                this.groupTicketArr[e].inputGroup.forEach((function(e) {
                  (e.id || e.name || e.telephone || e.idCard) && (t -= 1)
                })), t < 1 ? this.passengerTitle = "已选满" : t != this.groupTicketArr[e].inputGroup.length ? this.passengerTitle = "再选".concat(t, "位") : this.passengerTitle = "选择".concat(t, "位")
              },
              addPassenger: function(e) {
                this.$navigateTo({
                  url: "/subPage/pages/addPassenger/addPassenger?codes=".concat(this.cardTypeList[e].join(","))
                })
              },
              getCommonUsedTouristList: function(e) {
                var t = this;
                this.$uniApi.dataRequestNoLoading("GET", "manager/app/v1/commonUsedTourist/queryCommonUsedTouristList").then((function(i) {
                  if (1 === i.code && i.data[0])
                    if (t.commonUsedTouristList = i.data, "onLoad" == e && i.data[0]) {
                      var o = i.data.find((function(e) {
                        return t.cardTypeList[0].includes(Number(e.cardType))
                      }));
                      t.groupTicketArr[0].usedTouristIdsPopData.push(o), t.setinputGroup(0)
                    } else {
                      var r = "",
                        s = -1;
                      t.commonUsedTouristList.forEach((function(e) {
                        t.touristId == e.id && (r = e)
                      })), t.groupTicketArr.forEach((function(e, i) {
                        var o = [];
                        e.usedTouristIdsPopData.forEach((function(e) {
                          t.commonUsedTouristList.forEach((function(t) {
                            e.id == t.id && o.push(t)
                          }))
                        })), t.groupTicketArr[i].usedTouristIdsPopData = o
                      })), t.groupTicketArr[t.groupTicketIndex].inputGroup.forEach((function(e, t) {
                        e.id == r.id && (s = t)
                      }));
                      var n = {
                        name: r.name || "",
                        telephone: r.phone || "",
                        idCard: r.idCarNo || "",
                        id: r.id || "",
                        cardType: r.cardType || 0
                      };
                      s > -1 && (t.groupTicketArr[t.groupTicketIndex].inputGroup[s] = n), t.$forceUpdate()
                    }
                }))
              },
              changeTourist: function(e, t, i, o, r) {
                if (this.cardTypeList[i].includes(Number(e.cardType)))
                  if (this.groupTicketArr[i].usedTouristIdsPopData.includes(e)) this.groupTicketArr[i].usedTouristIdsPopData = this.groupTicketArr[i].usedTouristIdsPopData.filter((function(t) {
                    return t != e
                  })), this.delTourist(i, e, o);
                  else {
                    if (1 == this.groupTicketArr[i].inputGroup.length) this.groupTicketArr[i].usedTouristIdsPopData = [], this.groupTicketArr[i].usedTouristIdsPopData.push(e);
                    else {
                      var s = 0;
                      if (this.groupTicketArr[i].inputGroup.forEach((function(e) {
                          (e.name || e.idCard) && s++
                        })), !(s < this.groupTicketArr[i].inputGroup.length)) return void this.$util.showToast("只能选择".concat(this.groupTicketArr[i].ticketNum, "位游客"));
                      this.groupTicketArr[i].usedTouristIdsPopData.push(e)
                    }
                    this.setinputGroup(i)
                  }
                else this.$util.showToast("游客证件类型暂不支持")
              },
              delTourist: function(e, t, i) {
                var o = this.$util.deepCopy(this.groupTicketArr[e].inputGroup),
                  r = this.groupTicketArr[e].inputGroup;
                o = o.filter((function(e) {
                  return e.id != t.id
                }));
                var s = this.cardTypeList[e][0];
                for (var n in r) {
                  var u = {
                    name: "",
                    telephone: "",
                    idCard: "",
                    cardType: s
                  };
                  o[n] && (u = o[n]), this.groupTicketArr[e].inputGroup.splice(n, 1, u), this.setPassengerTitle(e)
                }
                this.$forceUpdate()
              },
              setinputGroup: function(e) {
                var t = this,
                  i = this.$util.deepCopy(this.groupTicketArr[e].usedTouristIdsPopData),
                  o = this.groupTicketArr[e].inputGroup,
                  r = this.cacheGroupTicketArr[e].inputGroup,
                  s = function(s) {
                    if ((o[s].name || o[s].telephone || o[s].idCard) && o.length > 1 && !o[s].id) return "continue";
                    var n = i.shift(),
                      u = {
                        name: "",
                        telephone: "",
                        idCard: "",
                        cardType: t.cardTypeList[e][0]
                      };
                    n && (r[s].cardType, r.forEach((function(e) {
                      e.id == n.id && e.cardType
                    })), u = {
                      name: n.name,
                      telephone: n.phone,
                      idCard: n.idCarNo,
                      id: n.id,
                      cardType: n.cardType
                    }, n.id == o[s].id && (u = {
                      name: o[s].name,
                      telephone: o[s].telephone,
                      idCard: o[s].idCard,
                      id: o[s].id,
                      cardType: o[s].cardType
                    })), t.groupTicketArr[e].inputGroup.splice(s, 1, u), t.setPassengerTitle(e)
                  };
                for (var n in o) s(n);
                this.$forceUpdate()
              },
              addPassengerList: function(e) {
                if (e[0]) {
                  var t = [];
                  e.forEach((function(e) {
                    t.push({
                      name: e.name,
                      phone: e.telephone,
                      idCarNo: e.idCard
                    })
                  })), this.$uniApi.dataRequestNoLoading("POST", "manager/app/v1/commonUsedTourist/saveCommonUsedTourist?operationType=0", t).then((function(e) {}))
                }
              },
              editPassenger: function(e, t) {
                this.touristId = e, this.$navigateTo({
                  url: "/subPage/pages/editPassenger/editPassenger?touristId=".concat(e, "&codes=").concat(this.cardTypeList[t].join(","))
                })
              },
              getGiftBagForOrder: function(e) {
                var t = this,
                  i = {
                    groupOrderId: e,
                    orderType: 2
                  };
                this.$uniApi.dataRequestNoLoading("POST", "/order/app/v1/orderActive/lottery", i).then((function(e) {
                  e.data && e.data.orderActivePrize && (t.giftBagData = e.data, 1 == e.data.orderActivePrize.prizeType ? t.gbCl = e.data.orderActivePrize.giftBag.giftBagCouponList.length : t.gbCl = 0, 3 == e.data.orderActivePrize.prizeType && (t.orderActiveRecordId = e.data.orderActiveRecordId), t.showPacketBox = !0, t.openRedBox())
                }))
              },
              receiveGiftBag: function() {
                var e = this;
                this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/giftBag/receive/" + this.giftBagData.giftBagId + "?orderId=" + this._orderId).then((function(t) {
                  1 === t.code || e.$util.showToast(t.msg)
                }))
              },
              setChanSiOpenId: function(t) {
                var i = this;
                e.setStorageSync("templeOpenId", t), this.$uniApi.dataRequestNoLoading("GET", "manager/app/v1/member/saveChanSiOpenId", {
                  openId: t
                }).then((function(o) {
                  if (1 === o.code) {
                    e.removeStorageSync("templeOpenId");
                    var r = e.getStorageSync("userInfor");
                    r.chansiOpenId = t, e.setStorageSync("userInfor", r)
                  } else i.$util.showToast(data.msg)
                }))
              },
              goDiscounts: function() {
                this.safeRouter("/subPage/pages/myDiscounts/myDiscounts")
              },
              safeRouter: function(e) {
                this.$util.isLogin(e) && this.$navigateTo({
                  url: e
                })
              },
              getUserPhone: function() {
                var t = e.getStorageSync("userInfor").mobilePhone;
                this.groupTicketArr[0].inputGroup[0].telephone = t, this.$forceUpdate()
              },
              setCalendar: function(t) {
                var i = this,
                  o = this.infoObj.itemGroupVOList,
                  r = this.infoObj.ticketPrices;
                t ? e.getStorageSync("touristInfoTypeLevel") == this.touristInfoTypeLevel ? this.refreshLevelS() : this.refreshLevelNo() : o.forEach((function(e, t) {
                  i.groupTicketArr.push({
                    ticketNum: 0,
                    inputGroup: [],
                    haveToId: !1,
                    usedTouristIdsPopData: [],
                    itemId: e.groupItemId
                  })
                })), o.forEach((function(e, t) {
                  r.forEach((function(o, r) {
                    1 == i.infoObj.itemUseDesc.stockLimit && e.ticketPrices.forEach((function(i, r) {
                      1 == e.itemUseDesc.stockLimit && o.date == i.date && (o["itemId".concat(t)] = i.itemId, o["retailPrice".concat(t)] = i.retailPrice, o["sellPrice".concat(t)] = i.sellPrice, o["settlementPrice".concat(t)] = i.settlementPrice, o["surplusStock".concat(t)] = i.surplusStock)
                    })), 2 == i.infoObj.itemUseDesc.stockLimit && e.ticketPrices.forEach((function(i, r) {
                      o.date == i.date && (1 == e.itemUseDesc.stockLimit && o.itemTicketStocks.forEach((function(e, o) {
                        e["itemId".concat(t)] = i.itemId, e["retailPrice".concat(t)] = i.retailPrice, e["sellPrice".concat(t)] = i.sellPrice, e["settlementPrice".concat(t)] = i.settlementPrice, e["surplusStock".concat(t)] = i.surplusStock
                      })), 2 == e.itemUseDesc.stockLimit && o.itemTicketStocks.forEach((function(e, o) {
                        i.itemTicketStocks.forEach((function(i, o) {
                          e.startTime == i.startTime && e.endTime == i.endTime && (e["itemId".concat(t)] = i.itemId, e["retailPrice".concat(t)] = i.retailPrice, e["sellPrice".concat(t)] = i.sellPrice, e["settlementPrice".concat(t)] = i.settlementPrice, e["surplusStock".concat(t)] = i.surplusStock)
                        }))
                      })))
                    }))
                  }))
                })), this.infoObj.ticketPrices = r, this.timeData = this.timeDataFormat();
                var s = [],
                  n = 0,
                  u = "";
                this.timeData.forEach((function(e, t) {
                  e.disabled && 2 == i.infoObj.itemUseDesc.dateType || (i.selectedDateSpot == e.date && (u = e), s.push(e), n = t)
                })), s && 1 == s.length ? (this.selectBookDateInPage(this.timeData[n]), this.scrollToDate = "date-" + this.timeData[n].date) : s.length > 1 && u && (this.selectBookDateInPage(u), this.scrollToDate = "date-" + u.date), setTimeout((function() {
                  t && i.refreshNum(i.timeData)
                }), 100)
              },
              setColor: function(e) {
                var t = "#777777";
                return e && ["条件退", "不可退", "换票入园"].includes(e) && (t = "#FF5411"), t
              },
              showCertificatePoP: function(e, t, i) {
                var o = this.cardTypeList[t];
                1 == o.length && 0 == o[0] || (this.realCardTypeList = o, this.cardParentIndex = t, this.userIndex = i, this.realCardType = e.cardType, this.showCertificate = !0, this.$forceUpdate())
              },
              chooseCardType: function(e) {
                this.groupTicketArr[this.cardParentIndex].inputGroup[this.userIndex].cardType = e, this.groupTicketArr[this.cardParentIndex].inputGroup[this.userIndex].idCard = "", this.showCertificate = !1, this.$forceUpdate()
              }
            }
          };
        t.default = a
      }).call(this, i("df3c").default, i("3223").default)
    },
    "90d0": function(e, t, i) {
      var o = i("3276");
      i.n(o).a
    },
    "9c1d": function(e, t, i) {
      (function(e, t) {
        var o = i("47a9");
        i("5366"), o(i("3240"));
        var r = o(i("ab70"));
        e.__webpack_require_UNI_MP_PLUGIN__ = i, t(r.default)
      }).call(this, i("3223").default, i("df3c").createPage)
    },
    ab70: function(e, t, i) {
      i.r(t);
      var o = i("f9e5"),
        r = i("1c6b");
      for (var s in r)["default"].indexOf(s) < 0 && function(e) {
        i.d(t, e, (function() {
          return r[e]
        }))
      }(s);
      i("90d0");
      var n = i("828b"),
        u = Object(n.a)(r.default, o.b, o.c, !1, null, "6c16d096", null, !1, o.a, void 0);
      t.default = u.exports
    },
    f9e5: function(e, t, i) {
      i.d(t, "b", (function() {
        return r
      })), i.d(t, "c", (function() {
        return s
      })), i.d(t, "a", (function() {
        return o
      }));
      var o = {
          uIcon: function() {
            return i.e("uview-ui/components/u-icon/u-icon").then(i.bind(null, "61be"))
          },
          uniIcons: function() {
            return Promise.all([i.e("common/vendor"), i.e("components/uni-icons/uni-icons")]).then(i.bind(null, "365b"))
          },
          uniPopup: function() {
            return Promise.all([i.e("common/vendor"), i.e("components/uni-popup/uni-popup")]).then(i.bind(null, "db3a"))
          },
          uPopup: function() {
            return i.e("uview-ui/components/u-popup/u-popup").then(i.bind(null, "39fb"))
          },
          uParse: function() {
            return Promise.all([i.e("common/vendor"), i.e("uview-ui/components/u-parse/u-parse")]).then(i.bind(null, "7217"))
          },
          uForm: function() {
            return i.e("uview-ui/components/u-form/u-form").then(i.bind(null, "3a6f"))
          },
          uFormItem: function() {
            return Promise.all([i.e("common/vendor"), i.e("uview-ui/components/u-form-item/u-form-item")]).then(i.bind(null, "09a7"))
          },
          uInput: function() {
            return Promise.all([i.e("common/vendor"), i.e("uview-ui/components/u-input/u-input")]).then(i.bind(null, "5cbc"))
          }
        },
        r = function() {
          var e = this,
            t = (e.$createElement, e._self._c, e.infoObj.itemTitle && e.infoObj.itemUseDesc.accountAstrictNum > 0 ? e._f("unitFilter")(e.infoObj.itemUseDesc.accountAstrictNumUnit) : null),
            i = e.infoObj.itemTitle && e.infoObj.itemUseDesc.idAstrictNum > 0 ? e._f("unitFilter")(e.infoObj.itemUseDesc.idAstrictNumUnit) : null,
            o = e.infoObj.itemTitle && 1 != e.infoObj.scenicType ? e.setColor(e.infoObj.bookingInfoTag.refundTag) : null,
            r = e.infoObj.itemTitle && 1 != e.infoObj.scenicType ? e.getRefundTag(e.infoObj.bookingInfoTag.refundTag, e.infoObj) : null,
            s = e.infoObj.itemTitle && 1 != e.infoObj.scenicType ? e.setColor(e.infoObj.bookingInfoTag.changeTag) : null,
            n = e.infoObj.itemTitle ? e.__map(e.infoObj.itemGroupVOList, (function(t, i) {
              return {
                $orig: e.__get_orig(t),
                m3: 1 != t.scenicType ? e.setColor(t.bookingInfoTag.refundTag) : null,
                m4: 1 != t.scenicType ? e.getRefundTag(t.bookingInfoTag.refundTag, t) : null,
                m5: 1 != t.scenicType ? e.setColor(t.bookingInfoTag.changeTag) : null
              }
            })) : null,
            u = e.infoObj.itemTitle ? e._f("touristNumFilter")(e.groupTicketArr) : null,
            a = e.infoObj.itemTitle ? e.__map(e.groupTicketArr, (function(t, i) {
              return {
                $orig: e.__get_orig(t),
                l1: t.inputGroup[0] ? e.__map(e.commonUsedTouristList, (function(o, r) {
                  return {
                    $orig: e.__get_orig(o),
                    g0: t.usedTouristIdsPopData.includes(o),
                    g1: e.cardTypeList[i].includes(Number(o.cardType)),
                    g2: 1 == e.infoObj.scenicType && t.usedTouristIdsPopData.includes(o),
                    g3: 1 == e.infoObj.scenicType && t.usedTouristIdsPopData.includes(o)
                  }
                })) : null,
                l2: t.inputGroup[0] ? e.__map(t.inputGroup, (function(t, o) {
                  return {
                    $orig: e.__get_orig(t),
                    m6: 1 != t.cardType ? e.ocrIndexComShow(t, o, i) : null,
                    m7: 1 != t.cardType ? e.ocrIndexShow(t, o, i) : null,
                    f3: 0 == i && (1 == e.infoObj.itemUseDesc.touristInfoType && 0 == o || 2 == e.infoObj.itemUseDesc.touristInfoType) ? e._f("realCardName")(t.cardType) : null,
                    g4: 0 == i && (1 == e.infoObj.itemUseDesc.touristInfoType && 0 == o || 2 == e.infoObj.itemUseDesc.touristInfoType) && 0 == t.cardType ? e.errIdCard.includes(t.idCard) && 0 == t.cardType : null,
                    f4: 0 != i && (1 == e.infoObj.itemGroupVOList[i - 1].itemUseDesc.touristInfoType && 0 == o || 2 == e.infoObj.itemGroupVOList[i - 1].itemUseDesc.touristInfoType) ? e._f("realCardName")(t.cardType) : null,
                    g5: 0 != i && (1 == e.infoObj.itemGroupVOList[i - 1].itemUseDesc.touristInfoType && 0 == o || 2 == e.infoObj.itemGroupVOList[i - 1].itemUseDesc.touristInfoType) && 0 == t.cardType ? e.errIdCard.includes(t.idCard) && 0 == t.cardType : null,
                    m8: 0 == o && e.showItemPhone(i)
                  }
                })) : null
              }
            })) : null,
            c = e.infoObj.itemTitle && !e.isFree && e.couponArr[0] && e.discountAmount > 0 ? e.toFixedNum(e.discountAmount) : null,
            d = !e.infoObj.itemTitle || e.isFree || !e.couponArr[0] || e.discountAmount > 0 || 0 != e.discountAmount ? null : e.couponArr.length,
            p = e.infoObj.itemTitle && e.ydxz && 1 != e.ydxz.scenicType ? e._f("saleNumFormat")(e.ydxz.salesNum) : null,
            h = e.infoObj.itemTitle && e.ydxz ? 1 != e.ydxz.scenicType && 1 == e.ydxz.targetGroupLimitFlag && e.ydxz.targetGroupsRuleDescList.length > 0 : null,
            f = e.infoObj.itemTitle && e.ydxz && e.ydxz.bookingInfoTag && e.ydxz.bookingInfoTag.refundStr && "条件退" != e.ydxz.bookingInfoTag.refundTag ? e.brText(e.ydxz.bookingInfoTag.refundStr) : null,
            m = e.infoObj.itemTitle && e.ydxz && e.ydxz.bookingInfoTag && "条件退" == e.ydxz.bookingInfoTag.refundTag ? e.__map(e.ydxz.refundFeeList, (function(t, i) {
              return {
                $orig: e.__get_orig(t),
                m10: t.timeDesc ? e.getTimeDesc(t, i) : null
              }
            })) : null,
            l = e.infoObj.itemTitle && e.ydxz && e.ydxz.bookingInfoTag && "条件退" == e.ydxz.bookingInfoTag.refundTag && e.ydxz.bookingInfoTag && e.ydxz.bookingInfoTag.refundStr1 ? e.brText(e.ydxz.bookingInfoTag.refundStr1) : null,
            g = e.infoObj.itemTitle && !e.isFree ? e.toFixedNumAmount() : null,
            T = e.infoObj.itemTitle ? e.__map(e.couponArr, (function(t, i) {
              return {
                $orig: e.__get_orig(t),
                f6: 0 == t.useTimeSlot ? e._f("timeFormat")(t.validityStartTime.split(" ")[0]) : null,
                f7: 0 == t.useTimeSlot ? e._f("timeFormat")(t.validityEndTime.split(" ")[0]) : null,
                f8: 2 == t.useTimeSlot ? e._f("timeFormat")(t.useTimeStart) : null,
                f9: 2 == t.useTimeSlot ? e._f("timeFormat")(t.useTimeEnd) : null
              }
            })) : null,
            y = e.infoObj.itemTitle ? e.__map(e.giftCardArr, (function(t, i) {
              return {
                $orig: e.__get_orig(t),
                g8: e.giftCardPopData.includes(t.id)
              }
            })) : null,
            I = e.infoObj.itemTitle ? e.__map(e.commonUsedTouristList, (function(t, i) {
              return {
                $orig: e.__get_orig(t),
                g9: e.groupTicketArr[e.groupTicketIndex].usedTouristIdsPopData.includes(t),
                g10: e.cardTypeList[e.groupTicketIndex].includes(Number(t.cardType)),
                f10: t.phone ? e._f("phoneFilter")(t.phone) : null,
                f11: t.cardType ? e._f("cardNameFilter")(t.cardType) : null,
                f12: t.idCarNo ? e._f("idCarNoFilter")(t.idCarNo) : null
              }
            })) : null,
            k = e.infoObj.itemTitle && e.giftBagData.orderActivePrize && e.giftBagData.orderActivePrize.giftBag ? e.__map(e.giftBagData.orderActivePrize.giftBag.giftBagCouponList, (function(t, i) {
              return {
                $orig: e.__get_orig(t),
                f13: e._f("timeFormat")(t.validityStartTime.split(" ")[0]),
                f14: e._f("timeFormat")(t.validityEndTime.split(" ")[0])
              }
            })) : null,
            v = e.infoObj.itemTitle ? e.__map(e.realCardTypeList, (function(t, i) {
              return {
                $orig: e.__get_orig(t),
                f15: e._f("cardName")(t)
              }
            })) : null;
          e._isMounted || (e.e0 = function(t) {
            e.showNotice = !1
          }, e.e1 = function(t) {
            e.showPassenger = !1
          }), e.$mp.data = Object.assign({}, {
            $root: {
              f0: t,
              f1: i,
              m0: o,
              m1: r,
              m2: s,
              l0: n,
              f2: u,
              l3: a,
              m9: c,
              g6: d,
              f5: p,
              g7: h,
              l4: f,
              l5: m,
              l6: l,
              m11: g,
              l7: T,
              l8: y,
              l9: I,
              l10: k,
              l11: v
            }
          })
        },
        s = []
    }
  },
  [
    ["9c1d", "common/runtime", "common/vendor"]
  ]
]);
