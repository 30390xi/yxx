// Extracted from subPage/pages/ticketFillOrder/ticketFillOrder.js; webpack module fe15.
// Compiled code for analysis; not an original source file.
module.exports = {
    fe15: function(e, t, i) {
      (function(e, o) {
        var n = i("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var s = n(i("7ca3")),
          r = n(i("dd71"));

        function u(e, t) {
          var i = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter((function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), i.push.apply(i, o)
          }
          return i
        }

        function a(e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {};
            t % 2 ? u(Object(i), !0).forEach((function(t) {
              (0, s.default)(e, t, i[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : u(Object(i)).forEach((function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
            }))
          }
          return e
        }
        var c = i("e846"),
          d = i("b598"),
          h = {
            components: {
              giftPack: function() {
                i.e("subPage/components/gift-pack/gift-pack").then(function() {
                  return resolve(i("d5af"))
                }.bind(null, i)).catch(i.oe)
              },
              ocrIndex: function() {
                i.e("components/ocr/ocrIndex").then(function() {
                  return resolve(i("7882"))
                }.bind(null, i)).catch(i.oe)
              }
            },
            data: function() {
              return this.openId = e.getStorageSync("userInfor").openId, {
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
                supCouponArr: [],
                singleCouponArr: [],
                hourArr: [],
                scrollToDate: "",
                selectedHour: "",
                ticketPrice: 0,
                ticketNum: 1,
                priceAmount: 0,
                selectedDate: "",
                departTimeSlot: "",
                inputGroup: [],
                haveToId: !1,
                discountAmount: 0,
                userCouponId: [],
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
                coupondk: [],
                errIdCard: [],
                showTimeTag: !1,
                parseStyle: {
                  p: "word-break: break-all;"
                },
                parseStyle1: {
                  p: "word-break: break-all;line-height:48rpx;"
                },
                realCardTypeList: [],
                showCertificate: !1,
                realCardType: 0,
                userIndex: 0,
                cacheInputGroup: [],
                selectedDateSpot: "",
                isCs: null,
                initOptions: "",
                insureList: [],
                insurePeopleList: [],
                modelType: 0,
                showInsure: !1,
                passenger: {
                  name: "",
                  idCarNo: "",
                  phone: "",
                  id: ""
                },
                insureIndex: 0,
                insureNum: 0,
                aggree: null,
                insNum: 0,
                notQueryCouponFlag: null,
                aggregationItemId: "",
                canCouponStack: !1,
                allDeductionNum: 0,
                infosUse: !1,
                showStudentVerifyDialog: !1,
                isStudent: -1,
                studentCheckCode: "",
                showStudentPop: !1
              }
            },
            onLoad: function(t) {
              this.loadPage(t), this.studentCheckCode = e.getStorageSync("CODE_STORAGE_KEY")
            },
            onShow: function() {
              var t = this;
              this.$bus.$on("agree", (function(e, i) {
                if (e) {
                  var o = JSON.parse(JSON.stringify(t.aggree));
                  t.insureList.forEach((function(e) {
                    t.aggree != i && (i == e.insuranceId ? (o = i, e.isInsurance = !0) : (e.isInsurance = !1, e.insuranceForm = [], t.insurePeopleList = []))
                  })), t.aggree = o
                } else i == t.aggree && t.cancelInsure(i)
              })), this.disabledSubmitBtn = !1, 1 == this.requestNum ? this.requestNum = 2 : this.getCommonUsedTouristList("onShow");
              var i = e.getStorageSync("templeOpenId");
              i && this.setChanSiOpenId(i);
              var o = e.getStorageSync("selectedHour");
              if (o && e.getStorageSync("isFromCalendarPage")) {
                if (this.selectedHour = o, this.selectedDate = o.date, this.showTimeTag = "今天" == this.getWeekOfDate(this.selectedDate), this.scrollToDate = "date-" + o.date, this.departTimeSlot = o.time, this.ticketPrice = o.sellPrice || 0, this.calcPriceAmount(), this.departTimeSlot) {
                  var n = this.timeData.find((function(e) {
                    return e.date === t.selectedDate
                  }));
                  this.getHourData(n.itemTicketStocks)
                }
                1 == this.infoObj.isSpecial && this.getItemHotelStateByTicketDate()
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
              inputGroup: {
                deep: !0,
                immediate: !0,
                handler: function(e, t) {
                  this.cacheInputGroup = this.$util.deepCopy(this.inputGroup)
                }
              },
              insurePeopleList: {
                deep: !0,
                immediate: !0,
                handler: function(e, t) {
                  var i = this.insurePeopleList.filter((function(e) {
                    return e.check
                  }));
                  this.insNum = i.length
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
              setDataInfos: function(e, t) {
                var i = this;
                if (!e) return this.infosUse = !1, void setTimeout((function() {
                  i.$util.showToast("识别失败，请重新识别或手动填写")
                }), 500);
                this.infosUse = !0, this.usedTouristIdsPopData = this.usedTouristIdsPopData.filter((function(e) {
                  return e.id != i.inputGroup[t].id
                })), this.inputGroup.forEach((function(i, o) {
                  o == t && (i.name = e.name, i.idCard = e.idCarNo, i.telephone = "", i.cardType = 0, i.id = "")
                })), this.$forceUpdate()
              },
              loadPage: function(t) {
                this.initOptions = t, this.requestNum = 1;
                var i = this;
                e.getSystemInfo({
                  success: function(e) {
                    i.windowHeight = e.windowHeight, i.winWidth = e.windowWidth, i.unit = e.windowWidth / 750
                  }
                }), this._ticketId = t.ticketId, this.shareMemberId = t.shareMemberId || "", this.aggregationItemId = t.aggregationItemId || "", t.templeOpenId && this.setChanSiOpenId(t.templeOpenId), t.selectedDate && (this.selectedDateSpot = t.selectedDate), this.getInfo(), this.telephoneVoList = e.getStorageSync("telephoneVoList"), e.removeStorageSync("telephoneVoList"), this.requestNum = 1
              },
              getRefundTag: function(e) {
                if ("条件退" !== e || 2 == this.infoObj.itemUseDesc.dateType && !this.selectedDate) return e;
                if (2 == this.infoObj.itemUseDesc.dateType) {
                  if (this.showHourBox && !this.selectedHour) return e;
                  var t = this.infoObj.refundFeeList,
                    i = "";
                  if (null === t[0].feeType) {
                    if (2 === this.infoObj.itemUseDesc.refundRuleType) {
                      var o = this.infoObj.itemUseDesc.refundLimitHour,
                        n = this.infoObj.itemUseDesc.refundLimitDay,
                        s = this.infoObj.itemUseDesc.refundLimitMinute,
                        r = this.addDate(this.selectedDate, -n);
                      return r = r + " " + (o < 10 ? "0" + o : o) + ":" + (s < 10 ? "0" + s : s) + ":00", this.compareBigDate(r) ? r.slice(0, r.length - 3).replace(" ", "的") + "前免费退" : "当前下单时间不可退"
                    }
                    return 3 === this.infoObj.itemUseDesc.refundRuleType ? this.selectedDate + "的23:59" + "前免费退" : e
                  }
                  if (0 === t[0].timeLimit) i = this.getTag(t[0]);
                  else if (1 === t[0].timeLimit || 2 === t[0].timeLimit || 4 === t[0].timeLimit)
                    for (var u = 1, a = "", c = 0; c < t.length; c++) {
                      var h = t[c],
                        f = this.addDate(this.selectedDate, 1 === h.timeLimit ? -h.day : h.day);
                      if (f = c === t.length - 1 ? a : f + " " + (h.hour < 10 ? "0" + h.hour : h.hour) + ":" + (h.minute < 10 ? "0" + h.minute : h.minute) + ":00", this.compareBigDate(f) || c === t.length - 1) {
                        if (0 !== h.fee && 0 != h.feeType) {
                          i = 3 == u ? a.slice(0, a.length - 3).replace(" ", "的") + "前免费退" : this.getTag(h);
                          break
                        }
                        u = 3, a = f, c === t.length - 1 && (i = "随时退")
                      } else a = f
                    }
                  return i
                }
                if (3 === this.infoObj.itemUseDesc.refundRuleType && null === this.infoObj.refundFeeList[0].feeType) {
                  var l = this.infoObj.itemUseDesc.datePeriodEnd + "23:59";
                  return this.compareBigDate(l) ? l + "前免费退" : "当前下单时间不可退"
                }
                if (2 === this.infoObj.itemUseDesc.refundRuleType && null === this.infoObj.refundFeeList[0].feeType) {
                  var p = this.infoObj.itemUseDesc.refundLimitHour,
                    m = this.infoObj.itemUseDesc.refundLimitDay,
                    g = this.infoObj.itemUseDesc.refundLimitMinute,
                    T = this.addDate(this.infoObj.itemUseDesc.datePeriodEnd, -m);
                  return T = T + " " + (p < 10 ? "0" + p : p) + ":" + (g < 10 ? "0" + g : g) + ":00", this.compareBigDate(T) ? T.slice(0, T.length - 3).replace(" ", "的") + "前免费退" : "当前下单时间不可退"
                }
                var b = this.infoObj.refundFeeList,
                  D = "";
                if (0 === b[0].timeLimit) D = this.getTag(b[0]);
                else if (1 === b[0].timeLimit || 2 === b[0].timeLimit || 4 === b[0].timeLimit)
                  for (var y = 1, k = "", C = 0; C < b.length; C++) {
                    var I = b[C],
                      O = "";
                    if (4 === I.timeLimit ? O = d().format("YYYY-MM-DD") : (O = this.infoObj.itemUseDesc.datePeriodEnd, I.timeLimit, I.day), O = this.addDate(O, 1 === I.timeLimit ? -I.day : I.day), O = C === b.length - 1 ? k : O + " " + (I.hour < 10 ? "0" + I.hour : I.hour) + ":" + (I.minute < 10 ? "0" + I.minute : I.minute) + ":00", this.compareBigDate(O) || C === b.length - 1) {
                      if (0 !== I.fee && 0 != I.feeType) {
                        D = 3 == y ? k.replace(" ", "的") + "前免费退" : this.getTag(I);
                        break
                      }
                      y = 3, k = O, C === b.length - 1 && (D = "随时退")
                    } else k = O
                  }
                return D
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
                      n = this.infoObj.itemUseDesc.refundLimitMinute;
                    return this.addDate(this.infoObj.itemUseDesc.datePeriodEnd, -o) + " " + (i < 10 ? "0" + i : i) + ":" + (n < 10 ? "0" + n : n) + "之" + (0 === t ? "前（含）" : "后") + "申请退款"
                  }
                  if (0 == e.timeLimit) return "购买后申请退款";
                  if (1 == e.timeLimit) {
                    var s = this.addDate(this.infoObj.itemUseDesc.datePeriodEnd, -e.day);
                    return "".concat(s, " ").concat(e.hour < 10 ? "0" + e.hour : e.hour, ":").concat(e.minute < 10 ? "0" + e.minute : e.minute, "之前（含）申请退款")
                  }
                  if (2 == e.timeLimit) {
                    var r = this.addDate(this.infoObj.itemUseDesc.datePeriodEnd, e.day);
                    return "".concat(r, " ").concat(e.hour < 10 ? "0" + e.hour : e.hour, ":").concat(e.minute < 10 ? "0" + e.minute : e.minute, "之前（含）申请退款")
                  }
                  if (4 == e.timeLimit) {
                    var u = d().format("YYYY-MM-DD"),
                      a = this.addDate(u, e.day);
                    return "".concat(a, " ").concat(e.hour < 10 ? "0" + e.hour : e.hour, ":").concat(e.minute < 10 ? "0" + e.minute : e.minute, "之前（含）申请退款")
                  }
                  if (null == e.timeLimit) {
                    var c = "";
                    if (1 == (e = this.ydxz.refundFeeList[t - 1]).timeLimit) c = this.addDate(this.infoObj.itemUseDesc.datePeriodEnd, -e.day);
                    else if (2 == e.timeLimit) c = this.addDate(this.infoObj.itemUseDesc.datePeriodEnd, e.day);
                    else if (4 == e.timeLimit) {
                      var h = d().format("YYYY-MM-DD"),
                        f = this.addDate(h, e.day);
                      return "".concat(f, " ").concat(e.hour < 10 ? "0" + e.hour : e.hour, ":").concat(e.minute < 10 ? "0" + e.minute : e.minute, "之后申请退款")
                    }
                    return "".concat(c, " ").concat(e.hour < 10 ? "0" + e.hour : e.hour, ":").concat(e.minute < 10 ? "0" + e.minute : e.minute, "之后申请退款")
                  }
                  return e.timeDesc || ""
                }
                if (!this.selectedDate) return e.timeDesc || "";
                if (3 === this.infoObj.itemUseDesc.refundRuleType && null == e.feeType) return this.selectedDate + " 23:59之" + (0 === t ? "前（含）" : "后") + "申请退款";
                if (2 === this.infoObj.itemUseDesc.refundRuleType && null == e.feeType) {
                  var l = this.infoObj.itemUseDesc.refundLimitHour,
                    p = this.infoObj.itemUseDesc.refundLimitDay,
                    m = this.infoObj.itemUseDesc.refundLimitMinute;
                  return this.addDate(this.selectedDate, -p) + " " + (l < 10 ? "0" + l : l) + ":" + (m < 10 ? "0" + m : m) + "之" + (0 === t ? "前（含）" : "后") + "申请退款"
                }
                if (0 == e.timeLimit) return "购买后申请退款";
                if (1 == e.timeLimit) {
                  var g = this.addDate(this.selectedDate, -e.day);
                  return "".concat(g, " ").concat(e.hour < 10 ? "0" + e.hour : e.hour, ":").concat(e.minute < 10 ? "0" + e.minute : e.minute, "之前（含）申请退款")
                }
                if (2 == e.timeLimit || 4 == e.timeLimit) {
                  var T = this.addDate(this.selectedDate, e.day);
                  return "".concat(T, " ").concat(e.hour < 10 ? "0" + e.hour : e.hour, ":").concat(e.minute < 10 ? "0" + e.minute : e.minute, "之前（含）申请退款")
                }
                if (null == e.timeLimit) {
                  var b = "";
                  return 1 == (e = this.ydxz.refundFeeList[t - 1]).timeLimit ? b = this.addDate(this.selectedDate, -e.day) : 2 != e.timeLimit && 4 != e.timeLimit || (b = this.addDate(this.selectedDate, e.day)), "".concat(b, " ").concat(e.hour < 10 ? "0" + e.hour : e.hour, ":").concat(e.minute < 10 ? "0" + e.minute : e.minute, "之后申请退款")
                }
              },
              compareBigDate: function(e) {
                return new Date(e) > new Date
              },
              addDate: function(e, t) {
                var i = new Date(e);
                i.setDate(i.getDate() + t);
                var o = i.getMonth() + 1,
                  n = i.getDate();
                return o < 10 && (o = "0" + o), n < 10 && (n = "0" + n), i.getFullYear() + "-" + o + "-" + n
              },
              closePassenger: function() {
                this.modelType ? this.modelType = 0 : this.showInsure = !1
              },
              addInsurePeople: function() {
                this.$navigateTo({
                  url: "/subPage/pages/addPassenger/addPassenger?type=ins&codes=0"
                })
              },
              computedInsureNum: function() {
                return this.insurePeopleList.filter((function(e) {
                  return e.check
                }))
              },
              computedInsureMoney: function() {
                var e = this,
                  t = 0;
                return this.insureList && this.insureList.length > 0 && this.insureList.map((function(i) {
                  i.isInsurance && (t = e.$util.multiply(1 * e.ticketNum, 1 * i.premium))
                })), t
              },
              changeUser: function(e, t) {
                var i = this;
                if (0 == e.cardType) {
                  var o = this.insNum;
                  this.insurePeopleList.forEach((function(e, n) {
                    1 == i.ticketNum ? e.check = n == t && !e.check : n == t && (o < i.ticketNum || e.check) && (e.check = !e.check)
                  })), this.saveData()
                } else this.$util.showToast("投保证件类型仅支持身份证")
              },
              goDetail: function(t, i, o) {
                var n = "/pages/webpage/webpage?urlEncode=" + encodeURIComponent(i.insuranceProductDescUrl) + "&insuranceId=".concat(i.insuranceId);
                if (this.insureIndex = t, !0 === i.isInsurance) return "check" == o && this.cancelInsure(i.insuranceId), void("detail" == o && e.navigateTo({
                  url: n
                }));
                e.navigateTo({
                  url: n
                })
              },
              editInsure: function(e) {
                this.$navigateTo({
                  url: "/subPage/pages/editPassenger/editPassenger?touristId=".concat(e.id, "&&codes=0")
                })
              },
              delUser: function(e, t, i) {
                var o = this;
                i.check = !1, this.insureList[e].insuranceForm.forEach((function(i, n) {
                  t == n && o.insureList[e].insuranceForm.splice(n, 1)
                }))
              },
              handlerChange: function(e, t, i, o) {
                if (JSON.parse(JSON.stringify(i)), 0 == t) {
                  var n = e.detail.value;
                  this.$util.checkId(n, t).code && this.getIdList()
                }
              },
              getIdList: function() {
                if (0 != this.infoObj.itemUseDesc.touristInfoType) {
                  var e = [];
                  for (var t in this.inputGroup) {
                    var i = this.inputGroup[t];
                    if (this.haveToId) this.$util.checkId(i.idCard, i.cardType).code && e.push(i.idCard)
                  }
                  var o = Array.from(new Set(e));
                  2 == this.infoObj.itemUseDesc.touristInfoType && this.haveToId && o.length < e.length ? this.$util.showToast("证件号不能重复") : 0 == this.infoObj.notQueryCouponFlag ? this.getBestCoupon(o) : this.cancelCoupon()
                } else 0 == this.infoObj.notQueryCouponFlag ? this.getBestCoupon([]) : this.cancelCoupon()
              },
              openRedBox: function() {
                var e = this;
                this.audio.stop(), this.audio.loop = !1, this.animationType = 1, this.audio.src = this.newOpen, this.audio.play(), this.receiveGiftBag(), setTimeout((function() {
                  e.animationType = 2
                }), 1e3), setTimeout((function() {
                  e.animationType = 3
                }), 2e3), setTimeout((function() {
                  e.showGiftBag = !0
                }), 3200), setTimeout((function() {
                  e.animationType = 4
                }), 3500), setTimeout((function() {
                  e.showPacketBox = !1
                }), 4500)
              },
              closeBox: function() {
                0 == this.animationType && (this.showPacketBox = !1, this.audio.stop(), this.audio.destroy())
              },
              showBookTip: function() {
                var t = this;
                this.isShowBookTip = !0, this.$nextTick((function() {
                  setTimeout((function() {
                    var i = e.createSelectorQuery();
                    i.select("#ytxz-box-title").boundingClientRect(), i.exec((function(e) {
                      t.bookTipHeight = t.windowHeight / t.winWidth * 750 * .7 - 230 - e[0].height / t.unit
                    }))
                  }), 100)
                }))
              },
              goBack: function(t) {
                var i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                  o = getCurrentPages(),
                  n = o[o.length - 1].route;
                i || -1 == n.indexOf("ticketFillOrder") || e.showModal({
                  title: "提示",
                  content: 1 == this.infoObj.scenicType ? "当前人数过多，请返回重试" : t,
                  showCancel: !1,
                  confirmText: "确定",
                  confirmColor: "#333",
                  success: function(t) {
                    e.navigateBack({
                      delta: 1
                    })
                  }
                })
              },
              toFixedNumAmount: function() {
                var e = new r.default(this.priceAmount).minus(this.giftCardAmount).toNumber(),
                  t = this.computedInsureMoney();
                return t > 0 && (e = this.$util.add(e, t)), this.toFixedNum(e)
              },
              toFixedNum: function(e) {
                if (!e) return 0;
                var t = e.toString().split(".");
                return t[1] && t[1].length > 2 ? e.toFixed(2) : e
              },
              getInfo: function() {
                var t = this,
                  i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                  n = this;
                i || e.showLoading({
                  title: "加载中"
                }), this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/item/getTicketDetailForOrder", {
                  itemId: this._ticketId
                }).then((function(s) {
                  if (t.notQueryCouponFlag = s.data.notQueryCouponFlag, i || e.hideLoading(), 1 === s.code) {
                    var r = s.data;
                    if (t.realCardTypeList = [], t.infoObj = r, 1 == t.infoObj.studentValidateFlag && (t.studentCheckCode ? t.checkStudentIdentity(1) : t.onShowStudentVerifyDialog()), 0 == t.infoObj.notQueryCouponFlag && 1 != t.infoObj.scenicType && t.getGiftCard(), 0 == r.itemUseDesc.touristInfoType) t.realCardTypeList = [0, 1, 2, 3, 4, 5, 6, 7, 8];
                    else r.itemUseDesc.realCardTypeCodes.split(",").forEach((function(e) {
                      t.realCardTypeList.push(Number(e))
                    })), t.realCardTypeList = t.realCardTypeList.length > 0 ? t.realCardTypeList : [0];
                    if (0 !== t.infoObj.ticketPrices.length) {
                      if (t.disabledSubmitBtn = !1, t.ydxz = r, i || (t.ticketNum = r.itemUseDesc.minBookNum, t.initInputGroup(), r.useNotes && (t.showNotice = !0), r.itemInsuranceList && r.itemInsuranceList.length > 0 && (t.insureList = r.itemInsuranceList, t.insureList.forEach((function(e) {
                          t.$set(e, "isInsurance", !1), t.$set(e, "insuranceForm", [])
                        })))), 2 == t.infoObj.itemUseDesc.dateType) {
                        t.showHourBox = 2 == t.infoObj.itemUseDesc.stockLimit, n.timeData = n.timeDataFormat();
                        var u = [],
                          a = 0,
                          c = "";
                        n.timeData.forEach((function(e, i) {
                          e.disabled && 2 == t.infoObj.itemUseDesc.dateType || (t.selectedDateSpot == e.date && (c = e), u.push(e), a = i)
                        })), u && 1 == u.length ? (n.selectBookDateInPage(n.timeData[a]), n.scrollToDate = "date-" + n.timeData[a].date) : u.length > 1 && c && (n.selectBookDateInPage(c), n.scrollToDate = "date-" + c.date), setTimeout((function() {
                          i && n.refreshNum(t.timeData)
                        }), 100)
                      }
                      1 == t.infoObj.itemUseDesc.dateType && (t.showTimeTag = !0, t.infoObj.itemUseDesc.datePeriodBegin = t.infoObj.itemUseDesc.datePeriodBegin.slice(0, 10), t.infoObj.itemUseDesc.datePeriodEnd = t.infoObj.itemUseDesc.datePeriodEnd.slice(0, 10), t.infoObj.itemUseDesc.dateCanUse = t.getWeekNotUse(t.infoObj.itemUseDesc.dateCanUse), t.ticketPrice = t.infoObj.ticketPrices[0].sellPrice, t.calcPriceAmount()), i && o.stopPullDownRefresh()
                    } else t.$util.showToast("暂无可".concat(0 == n.infoObj.skuItemType ? "订" : "约", "日期"))
                  } else t.goBack(s.msg, i)
                })).catch((function(o) {
                  e.hideLoading(), t.goBack("网络繁忙，请返回重试", i), t.disabledSubmitBtn = !1, e.stopPullDownRefresh()
                }))
              },
              refreshNum: function(e) {
                var t = this,
                  i = e.find((function(e) {
                    return e.date == t.selectedDate
                  }));
                i && this.selectBookDateInPage(i)
              },
              timeDataFormat: function() {
                var e = this,
                  t = this.infoObj,
                  i = (this.showHourBox, this.infoObj.skuSellOutInfo ? this.infoObj.skuSellOutInfo : 0 == this.infoObj.skuItemType ? "已满" : "约满");
                return this.infoObj.ticketPrices.map((function(o) {
                  var n = "";
                  e.selectedDate == o.date && e.getHourData(o.itemTicketStocks);
                  var s = o.sellPrice && o.sellPrice > 0 ? "¥" + o.sellPrice : "免费";
                  if (n = t.skuInStockInfo ? t.skuInStockInfo : o.surplusStock > 50 ? s : "余" + o.surplusStock, 0 === o.surplusStock) n = i, o.disabled = !0;
                  else if (-1 === o.surplusStock) n = t.skuInStockInfo || s;
                  else if (o.surplusStock > 0)
                    if (e.showHourBox) {
                      e.clearDiscount(o) > 0 ? n = t.skuInStockInfo || s : (o.disabled = !0, n = i)
                    } else if (t.itemUseDesc.stockLessFlag) {
                    var r = "1" == t.itemUseDesc.stockLessShowType ? "余" + o.surplusStock : t.itemUseDesc.stockLessShowDesc;
                    n = t.skuInStockInfo || (o.surplusStock >= t.itemUseDesc.stockLessNum ? s : r)
                  } else n = t.skuInStockInfo || (o.surplusStock > 50 ? s : "余" + o.surplusStock);
                  return o.dateShort = o.date.slice(5), o.week = e.getWeekOfDate(o.date), o.diy = n, o
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
                var t = c.format(new Date, "yyyy/MM/dd"),
                  i = c.format(c.addDay(new Date, 1), "yyyy/MM/dd");
                return e == t ? "今天" : e == i ? "明天" : "周" + "日一二三四五六".charAt(new Date(e).getDay())
              },
              brText: function(e) {
                if (e) {
                  var t = e.split("#**#");
                  return t.pop().split("</p>").forEach((function(e, i) {
                    if (e) {
                      var o = (e = e.split("<p>").join("")).match(/\<.*?\>/g),
                        n = e.match(/[\r\n]/g),
                        s = o || n;
                      s && s[0] && s.forEach((function(t) {
                        e = e.replaceAll(t, "")
                      })), t.push(e)
                    }
                  })), t
                }
              },
              selectBookDateInPage: function(t) {
                t.disabled && 2 == this.infoObj.itemUseDesc.dateType || (this.selectedDate = t.date, this.showTimeTag = "今天" == this.getWeekOfDate(this.selectedDate), this.showHourBox ? (this.getHourData(t.itemTicketStocks), e.setStorageSync("selectedHour", t), this.selectedHour = "", this.departTimeSlot = "", this.ticketPrice = 0, this.calcPriceAmount()) : (e.setStorageSync("selectedHour", t), this.ticketPrice = t.sellPrice, this.calcPriceAmount()), 1 == this.infoObj.isSpecial && (this.startHotelDate = "", this.getItemHotelStateByTicketDate()))
              },
              addInsure: function() {
                this.showInsure = !0
              },
              idCarNoFilter: function(e) {
                if (e) {
                  var t = e.toString();
                  return t.substring(0, 1) + "****************" + t.substring(t.length - 1, t.length)
                }
              },
              phoneFilter: function(e) {
                if (e) {
                  var t = e.toString();
                  return t.replace(t.substring(3, 7), "****")
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
                      e.date = e.date, e.dateEnd = c.format(c.addDayStr(e.date, 1), "yyyy-MM-dd")
                    })), e.hotelDate = i) : e.$util.showToast("暂无可".concat(0 == that.infoObj.skuItemType ? "订" : "约", "日期"))
                  } else e.$util.showToast(t.msg)
                }))
              },
              chooseHotel: function(e) {
                1 == e.state && (this.startHotelDate = e.date, this.endHotelDate = e.dateEnd)
              },
              getHourData: function(e) {
                var t = (new Date).getTime(),
                  i = this.infoObj;
                this.hourArr = [], e.forEach((function(e) {
                  new Date((e.date + " " + e.endTime + ":00").replace(/-/g, "/")).getTime() < t && (e.timePassed = !0, e.disabled = !0);
                  var o = "";
                  0 === e.surplusStock ? (e.disabled = !0, o = "已满") : o = i.itemUseDesc.stockLessFlag ? e.surplusStock >= i.itemUseDesc.stockLessNum || -1 == e.surplusStock ? "有票" : "1" == i.itemUseDesc.stockLessShowType ? "余" + e.surplusStock : i.itemUseDesc.stockLessShowDesc.substring(0, 6) : e.surplusStock > 200 || -1 == e.surplusStock ? "有票" : "余" + e.surplusStock, e.surplusStockStr = o
                })), this.hourArr = e
              },
              getGiftCard: function() {
                var e = this;
                this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/giftCard/getCreateOrderCanUseGiftCard", {
                  type: 1
                }).then((function(t) {
                  1 === t.code ? e.giftCardArr = t.data || [] : e.$util.showToast(data.msg)
                }))
              },
              selectHourFn: function(t) {
                0 !== t.surplusStock && !0 !== t.disabled && (t.time = this.departTimeSlot = t.startTime + "-" + t.endTime, this.selectedHour = t, e.setStorageSync("selectedHour", this.selectedHour), this.ticketPrice = this.selectedHour.sellPrice || 0, this.calcPriceAmount())
              },
              jumpCalendarPage: function() {
                this.$navigateTo({
                  url: "/pages/calendarPage/calendarPage?ticketId=" + this._ticketId + "&scenicType=" + this.infoObj.scenicType
                })
              },
              calcPriceAmount: function() {
                "1518513098992918529" != this._ticketId && this.getIdList()
              },
              getBestCoupon: function(e, t) {
                var i = this;
                if (1 != this.infoObj.scenicType) {
                  var o = new r.default(this.ticketPrice).times(this.ticketNum).toNumber(),
                    n = {
                      itemId: this._ticketId,
                      price: o,
                      touristInfoType: this.infoObj.itemUseDesc.touristInfoType,
                      useDateStr: this.selectedDate || "",
                      orderNum: this.ticketNum,
                      idCardList: e
                    };
                  0 == n.touristInfoType && (n.idCardList = []), this.discountAmount = "", this.userCouponId = [], this.couponArr = [], 0 == this.notQueryCouponFlag ? this.$uniApi.dataRequestNoLoading("POST", "product/app/v1/coupon/getBestCoupon", n).then((function(e) {
                    if (1 === e.code) {
                      var n = e.data,
                        s = o;
                      if ("research" == t && (i.userCouponId = []), n && n[0]) {
                        if (i.couponArr = n, i.supCouponArr = [], i.priceAmount = o, n.forEach((function(e) {
                            if (2 === e.superpositionType || 3 === e.superpositionType) {
                              var t = a(a({}, e), {}, {
                                isSelected: !1,
                                useDeductionNum: 0
                              });
                              i.supCouponArr.push(t)
                            }
                          })), i.singleCouponArr = n.filter((function(e) {
                            return 1 === e.superpositionType
                          })), 1 === n[0].superpositionType) {
                          i.coupondk = [n[0]], i.userCouponId = [n[0].userCouponId];
                          var u = new r.default(s);
                          new r.default(i.ticketPrice), 3 == n[0].type ? (i.discountAmount = n[0].realQuota, i.priceAmount = u.minus(i.discountAmount).toNumber().toFixed(2)) : (i.discountAmount = n[0].quota, i.priceAmount = u.minus(n[0].quota).toNumber().toFixed(2))
                        } else {
                          i.discountAmount = 0, i.coupondk = [];
                          var c = 0;
                          do {
                            c = i.stackMoreCoupons(c)
                          } while (-1 !== c)
                        }
                        i.setGiftCardPrice()
                      } else i.discountAmount = 0, i.priceAmount = o, i.setGiftCardPrice()
                    } else i.$util.showToast(e.msg)
                  })) : (this.discountAmount = 0, this.priceAmount = o, this.setGiftCardPrice())
                }
              },
              stackMoreCoupons: function(e) {
                this.coupondk.push(this.supCouponArr[e]), this.userCouponId.push(this.supCouponArr[e].userCouponId), this.supCouponArr[e].isSelected = !0, this.allDeductionNum = this.supCouponArr.reduce((function(e, t) {
                  return t.isSelected ? e + t.deductionNum : e
                }), 0);
                var t = new r.default(this.ticketPrice),
                  i = new r.default(t.times(this.ticketNum).toNumber());
                return this.allDeductionNum < this.ticketNum ? (this.supCouponArr[e].useDeductionNum = this.supCouponArr[e].deductionNum, this.discountAmount += +t.times(this.supCouponArr[e].useDeductionNum).toNumber().toFixed(2), this.priceAmount = +i.minus(this.discountAmount).toNumber().toFixed(2), this.supCouponArr.length - 1 > e ? e + 1 : -1) : (this.supCouponArr[e].useDeductionNum = this.ticketNum - this.allDeductionNum + this.supCouponArr[e].deductionNum, this.discountAmount += +t.times(this.supCouponArr[e].useDeductionNum).toNumber().toFixed(2), this.priceAmount = +i.minus(this.discountAmount).toNumber().toFixed(2), -1)
              },
              checkCoupon: function(e) {
                var t = this,
                  i = new r.default(this.ticketPrice),
                  o = (new r.default(this.priceAmount), new r.default(this.discountAmount)),
                  n = i.times(this.ticketNum);
                if (-1 === this.userCouponId[0] && (this.coupondk = [], this.userCouponId = []), this.userCouponId.includes(e.userCouponId)) 1 === this.userCouponId.length ? (1 !== this.coupondk[0].superpositionType && this.resetSupCouponArr(), this.coupondk = [], this.userCouponId = [], this.discountAmount = 0, this.priceAmount = this.toFixedNum(n)) : (this.coupondk = this.coupondk.filter((function(t) {
                  return t.userCouponId !== e.userCouponId
                })), this.userCouponId = this.userCouponId.filter((function(t) {
                  return t !== e.userCouponId
                })), this.supCouponArr.forEach((function(s) {
                  if (s.userCouponId === e.userCouponId) {
                    var r = i.times(s.useDeductionNum).toNumber();
                    t.discountAmount = +o.minus(r).toNumber().toFixed(2), t.priceAmount = +n.minus(t.discountAmount).toNumber().toFixed(2), t.allDeductionNum -= s.deductionNum, s.isSelected = 0, s.useDeductionNum = 0
                  }
                })), this.resetUseDeductionNum());
                else if (0 === this.userCouponId.length)
                  if (this.coupondk = [e], this.userCouponId = [e.userCouponId], 1 === e.superpositionType)
                    if (3 == e.type) {
                      this.discountAmount = e.realQuota;
                      var s = n.minus(e.realQuota).toNumber();
                      this.priceAmount = this.toFixedNum(s)
                    } else {
                      this.discountAmount = e.quota;
                      var u = n.minus(e.quota).toNumber();
                      this.priceAmount = this.toFixedNum(u)
                    }
                else {
                  var a = this.supCouponArr.findIndex((function(t) {
                    return t.userCouponId === e.userCouponId
                  }));
                  this.stackMoreCoupons(a)
                } else if (1 === e.superpositionType)
                  if (1 !== this.coupondk[0].superpositionType && this.resetSupCouponArr(), this.coupondk = [e], this.userCouponId = [e.userCouponId], 3 == e.type) {
                    this.discountAmount = e.realQuota;
                    var c = n.minus(e.realQuota).toNumber();
                    this.priceAmount = this.toFixedNum(c)
                  } else {
                    this.discountAmount = e.quota;
                    var d = n.minus(e.quota).toNumber();
                    this.priceAmount = this.toFixedNum(d)
                  }
                else if (2 === e.superpositionType || 3 === e.superpositionType) {
                  (1 === this.coupondk[0].superpositionType || 1 !== this.coupondk[0].superpositionType && this.allDeductionNum >= this.ticketNum) && (this.coupondk = [], this.userCouponId = [], this.discountAmount = 0, this.priceAmount = this.toFixedNum(n), this.resetSupCouponArr());
                  var h = this.supCouponArr.findIndex((function(t) {
                    return t.userCouponId === e.userCouponId
                  }));
                  this.stackMoreCoupons(h)
                }
                this.setGiftCardPrice()
              },
              resetUseDeductionNum: function() {
                var e = this;
                this.allDeductionNum = 0;
                var t = 0;
                this.supCouponArr.forEach((function(i) {
                  if (i.useDeductionNum = 0, i.isSelected && e.allDeductionNum < e.ticketNum) {
                    var o = e.ticketNum - e.allDeductionNum;
                    i.useDeductionNum = o <= i.deductionNum ? o : i.deductionNum, t += i.useDeductionNum, e.allDeductionNum += i.deductionNum
                  }
                }));
                var i = new r.default(this.ticketPrice),
                  o = new r.default(i.times(this.ticketNum).toNumber());
                this.discountAmount = +i.times(t).toNumber().toFixed(2), this.priceAmount = +o.minus(this.discountAmount).toNumber().toFixed(2)
              },
              resetSupCouponArr: function() {
                this.supCouponArr.forEach((function(e) {
                  e.isSelected = 0, e.useDeductionNum = 0
                })), this.allDeductionNum = 0
              },
              cancelCoupon: function() {
                this.discountAmount = 0;
                var e = new r.default(this.ticketPrice).times(this.ticketNum).toNumber();
                this.priceAmount = this.toFixedNum(e), this.setGiftCardPrice(), this.userCouponId = [-1], this.coupondk = [], this.resetSupCouponArr(), this.showCoupon = !1
              },
              addNum: function() {
                var t;
                if (t = 0 == this.infoObj.itemUseDesc.maxBookNum ? 99999 : this.infoObj.itemUseDesc.maxBookNum, 1 == this.infoObj.itemUseDesc.dateType && 1 == this.infoObj.itemUseDesc.stockLimitType && (t = Math.min(t, this.infoObj.ticketPrices[0].surplusStock)), 2 == this.infoObj.itemUseDesc.dateType) {
                  if (!e.getStorageSync("selectedHour")) return void(this.showHourBox ? this.$util.showToast("请先选择时段") : this.$util.showToast("请先选择日期"));
                  e.getStorageSync("selectedHour") && -1 != e.getStorageSync("selectedHour").surplusStock && (t = Math.min(t, e.getStorageSync("selectedHour").surplusStock))
                }
                this.ticketNum >= t ? this.$util.showToast("最多可选择".concat(t, "张")) : (this.ticketNum = this.ticketNum + 1, this.computedInsureMoney(), this.addAndReduceInputGroup("add"))
              },
              reduceNum: function() {
                var t = this;
                e.getStorageSync("selectedHour") || 2 != this.infoObj.itemUseDesc.dateType ? this.ticketNum <= this.infoObj.itemUseDesc.minBookNum ? this.$util.showToast("最少需选择".concat(this.infoObj.itemUseDesc.minBookNum, "张")) : (this.ticketNum = this.ticketNum - 1, this.insureList.forEach((function(e) {
                  if (e.isInsurance && e.insuranceForm.length > t.ticketNum) {
                    e.insuranceForm[e.insuranceForm.length - 1].check = !1;
                    var i = e.insuranceForm.pop(),
                      o = -1;
                    t.insurePeopleList.forEach((function(e, t) {
                      i.id == e.id && (o = t)
                    })), o > 0 && (t.insurePeopleList[o].check = !1)
                  }
                })), this.computedInsureMoney(), this.addAndReduceInputGroup("reduce")) : this.showHourBox ? this.$util.showToast("请先选择时段") : this.$util.showToast("请先选择日期")
              },
              initInputGroup: function() {
                if (0 == this.infoObj.itemUseDesc.touristInfoType) this.inputGroup = [{
                  name: "",
                  telephone: ""
                }], this.haveToId = !1;
                else if (this.haveToId = !0, this.infoObj.itemUseDesc.minBookNum > 1) {
                  for (var e = [], t = 0; t < this.infoObj.itemUseDesc.minBookNum; t++) e.push({
                    name: "",
                    telephone: "",
                    idCard: "",
                    cardType: this.realCardTypeList[0]
                  });
                  this.inputGroup = e
                } else this.inputGroup = [{
                  name: "",
                  telephone: "",
                  idCard: "",
                  cardType: this.realCardTypeList[0]
                }];
                this.getCommonUsedTouristList("onLoad")
              },
              addAndReduceInputGroup: function(e) {
                if (2 == this.infoObj.itemUseDesc.touristInfoType) {
                  if ("add" == e && this.inputGroup.push({
                      name: "",
                      telephone: "",
                      idCard: "",
                      cardType: this.realCardTypeList[0]
                    }), "reduce" == e) {
                    var t = this.inputGroup.pop();
                    t.id && (this.usedTouristIdsPopData = this.usedTouristIdsPopData.filter((function(e) {
                      return e.id != t.id
                    })))
                  }
                  this.calcPriceAmount()
                } else this.calcPriceAmount()
              },
              getWeekNotUse: function(e) {
                var t = [],
                  i = e.split(","),
                  o = [1, 2, 3, 4, 5, 6, 7];
                for (var n in o) {
                  var s = !0;
                  for (var r in i)
                    if (o[n] == i[r]) {
                      s = !1;
                      break
                    } s && t.push("周" + "一一二三四五六日".charAt(o[n]))
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
                if (1 == this.infoObj.studentValidateFlag) {
                  if (-1 == this.isStudent) return void this.onShowStudentVerifyDialog();
                  if (0 == this.isStudent) return void(this.showStudentPop = !0)
                }
                var e = this.verify();
                e && this.createOrder(e)
              },
              verify: function() {
                if (this.inputGroup && this.inputGroup[0]) {
                  var t = {
                    itemId: this._ticketId,
                    itemName: this.infoObj.itemTitle,
                    price: this.ticketPrice,
                    quantity: this.ticketNum
                  };
                  if (this.aggregationItemId && (t.aggregationItemId = this.aggregationItemId), (this.shareMemberId || e.getStorageSync("peopleShareId")) && (t.shareMemberId = this.shareMemberId || e.getStorageSync("peopleShareId")), 1 == this.infoObj.seckillActivity && (t.seckillItemId = this.infoObj.seckillItemId), t.orderAmount = this.priceAmount, this.discountAmount > 0)
                    if (1 === this.coupondk[0].superpositionType) {
                      var i = {
                        userCouponId: this.userCouponId[0]
                      };
                      this.coupondk[0] && 3 == this.coupondk[0].type && (i.couponDeductionNum = this.coupondk[0].deductionNum), t.orderCouponList = [i]
                    } else {
                      var o = [];
                      this.supCouponArr.forEach((function(e) {
                        e.isSelected && o.push({
                          couponDeductionNum: e.useDeductionNum,
                          userCouponId: e.userCouponId
                        })
                      })), t.orderCouponList = o
                    } if (this.giftCardAmount > 0 && this.activeGiftCard[0]) {
                    t.giftCardIdList = this.activeGiftCard, t.giftCardAmount = this.giftCardAmount;
                    var n = new r.default(this.priceAmount);
                    t.orderAmount = n.minus(this.giftCardAmount).toNumber()
                  }
                  if (t.ticketUseDate = this.selectedDate, 2 != this.infoObj.itemUseDesc.dateType || 2 != this.infoObj.itemUseDesc.stockLimit || t.ticketUseDate && this.departTimeSlot)
                    if (this.departTimeSlot && (t.ticketUseStartTime = this.departTimeSlot.split("-")[0], t.ticketUseEndTime = this.departTimeSlot.split("-")[1]), 2 != this.infoObj.itemUseDesc.dateType || 2 === this.infoObj.itemUseDesc.stockLimit || t.ticketUseDate) {
                      if (1 != this.infoObj.isSpecial || this.endHotelDate && this.startHotelDate) {
                        if (1 == this.infoObj.isSpecial && (t.startHotelDate = this.startHotelDate, t.endHotelDate = this.endHotelDate), 2 == this.infoObj.isSpecial) {
                          var s = !1;
                          if (this.infoObj.projectInfoDtoList.forEach((function(e) {
                              e.projectText || (s = !0)
                            })), s) return void this.$util.showToast("请完善详细信息");
                          t.projectInfoDtoList = this.infoObj.projectInfoDtoList
                        }
                        if (0 == this.infoObj.itemUseDesc.touristInfoType) {
                          var u = this.$util.checkName(this.inputGroup[0].name);
                          if (!u.code) return void this.$util.showToast(u.msg);
                          if (!(u = this.$util.checkPhone(this.inputGroup[0].telephone)).code) return void this.$util.showToast(u.msg)
                        } else {
                          var a = [],
                            c = [];
                          for (var d in this.inputGroup) {
                            var h = this.inputGroup[d],
                              f = this.$util.checkName(h.name);
                            if (!f.code) return void this.$util.showToast(f.msg);
                            if (0 == d && !(f = this.$util.checkPhone(h.telephone)).code) return void this.$util.showToast(f.msg);
                            this.haveToId && (a.push(h.idCard), (f = this.$util.checkId(h.idCard, h.cardType)).code || c.push(h.idCard))
                          }
                          var l = Array.from(new Set(c));
                          if (this.haveToId && l.length > 0) return this.errIdCard = l, void this.$util.showToast("证件号格式错误");
                          var p = Array.from(new Set(a));
                          if (this.haveToId && p.length < a.length) return void this.$util.showToast("证件号不能重复")
                        }
                        return console.log(this.studentCheckCode), t.orderPeopleList = this.inputGroup, t.studentCheckCode = this.studentCheckCode, t.openId = this.openId, t
                      }
                      this.$util.showToast("请选择酒店住离日期")
                    } else this.$util.showToast("请选择使用日期");
                  else this.$util.showToast("请选择使用日期和时段")
                } else this.$util.showToast("请输入姓名")
              },
              closeLineing: function(e) {
                this.lineing = !1, this.hasTimeOut = !1, this.repeatCreateOrder && (clearInterval(this.repeatCreateOrder), clearInterval(this.repeatCreateOrder2)), this.repeatCreateOrder = null, this.repeatCreateOrder2 = null, this.disabledSubmitBtn = !1, e || this.getInfo(!0)
              },
              createOrder: function(t) {
                var i = this;
                if (!this.disabledSubmitBtn || this.lineing) {
                  var o = this,
                    n = {
                      insuranceId: "",
                      personList: []
                    };
                  if (o.insureList && o.insureList.length > 0) {
                    var s = o.insureList.filter((function(e) {
                      return e.isInsurance
                    }));
                    if (s.length > 0 && s[0].insuranceForm.length < this.ticketNum) return o.$util.showToast("请填写投保人信息");
                    s.length > 0 && (n.insuranceId = s[0].insuranceId, s[0].insuranceForm.forEach((function(e) {
                      e.check && n.personList.push({
                        insurancePersonCardNo: e.idCarNo,
                        insurancePersonMobile: e.phone,
                        insurancePersonName: e.name
                      })
                    })), t.orderAmount = this.$util.add(1 * t.orderAmount, 1 * this.computedInsureMoney()), t.orderInsuranceCreateDTO = n)
                  }!o.hasTimeOut && o.timeOutInit(), this.disabledSubmitBtn = !0, !this.lineing && e.showLoading({
                    title: "预".concat(0 == o.infoObj.skuItemType ? "订" : "约", "中...")
                  });
                  var u = 3 == this.infoObj.isSpecial ? "order/app/v1/order/addTicketOrder" : "order/app/v1/order/simpleTicketCreateOrder";
                  1 == this.infoObj.scenicType && (u = "order/app/v1/order/templeTicketCreateOrder"), this.$uniApi.dataRequestNoLoading("POST", u, t, !1).then((function(n) {
                    if (e.hideLoading(), 18031 == n.code) return i.closeLineing(!0), i.disabledSubmitBtn = !1, o.errIdCard = n.data, void setTimeout((function() {
                      o.$util.showToast(n.msg)
                    }), 300);
                    if (18018 == n.code || 18019 == n.code || 18020 == n.code) {
                      i.disabledSubmitBtn = !1;
                      var s = new r.default(i.ticketPrice).times(i.ticketNum).toNumber();
                      return i.priceAmount = s, i.discountAmount = 0, void i.openPopup()
                    }
                    if (n.msg.includes("火爆") || n.msg.includes("频繁")) return o.lineing = !0, void(o.repeatCreateOrder = setTimeout((function() {
                      o.createOrder(t)
                    }), 2e3));
                    if (18022 == n.code || n.msg.includes("库存不足") || 18026 == n.code) return o.closeLineing(), i.selectedHour = "", e.setStorageSync("selectedHour", ""), i.departTimeSlot = "", i.ticketPrice = 0, i.priceAmount = 0, i.disabledSubmitBtn = !1, void(i.showNoStock = !0);
                    if (1 == n.code) {
                      if (i._orderId = n.data, i.closeLineing(!0), i.isFree, 0 == t.orderAmount) return 2 == i.infoObj.itemUseDesc.dateType ? i.bookInfoObj.time = "".concat(i.selectedDate, " ").concat(i.departTimeSlot || "") : i.infoObj.itemUseDesc.datePeriodBegin == i.infoObj.itemUseDesc.datePeriodEnd ? i.bookInfoObj.time = "".concat(i.infoObj.itemUseDesc.datePeriodBegin, "有效") : i.bookInfoObj.time = "".concat(i.infoObj.itemUseDesc.datePeriodBegin, "至").concat(i.infoObj.itemUseDesc.datePeriodEnd, "有效"), i.bookInfoObj.orderSn = i._orderId, i.isHideSuccessMask = !0, void i.$store.dispatch("wxInForm", ["gDlb_Lmm5UjBhe5jnstiOCTi4XfN2KOq9056Be9lDSE"]).then((function(e) {}));
                      e.redirectTo({
                        url: "/subPack/pages/ticketPay/ticketPay?orderId=" + i._orderId
                      })
                    } else {
                      i.closeLineing(!0), i.disabledSubmitBtn = !1;
                      var u = n.msg.length;
                      setTimeout((function() {
                        u < 20 ? o.$util.showToast(n.msg) : e.showModal({
                          title: "提示",
                          content: n.msg,
                          showCancel: !1
                        })
                      }), 300)
                    }
                  })).catch((function(t) {
                    i.closeLineing(), e.hideLoading(), i.disabledSubmitBtn = !1
                  }))
                }
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
                  url: "/subPage/pages/orderDetailtick/orderDetailtick?orderId=" + this._orderId
                })
              },
              confirm: function() {
                this.verify() && this.$refs.popup.close()
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
                this.priceAmount, this.getIdList(), this.$refs.popup.close()
              },
              changeGiftCard: function(e, t) {
                var i = this;
                if (this.giftCardPopData.includes(e.id)) this.giftCardPopData = this.giftCardPopData.filter((function(t) {
                  return t != e.id
                }));
                else {
                  if (this.activeGiftamount > this.priceAmount) return this.$util.showToast("目前".concat(0 == this.infoObj.skuItemType ? "订" : "预约", "单已经没有可用于抵扣的金额")), !1;
                  this.giftCardPopData.push(e.id)
                }
                var o = new r.default(0);
                this.giftCardArr.forEach((function(e) {
                  i.giftCardPopData.forEach((function(t) {
                    t == e.id && (o = o.plus(e.balance))
                  }))
                })), this.activeGiftamount = o.toNumber()
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
              choosePassenger: function() {
                this.showPassenger = !0, this.setPassengerTitle()
              },
              setPassengerTitle: function() {
                var e = this.inputGroup.length;
                this.inputGroup.forEach((function(t) {
                  (t.id || t.name || t.telephone || t.idCard) && (e -= 1)
                })), e < 1 ? this.passengerTitle = "已选满" : e != this.inputGroup.length ? this.passengerTitle = "再选".concat(e, "位") : this.passengerTitle = "选择".concat(e, "位")
              },
              addPassenger: function() {
                this.$navigateTo({
                  url: "/subPage/pages/addPassenger/addPassenger?codes=".concat(this.realCardTypeList.join(","))
                })
              },
              getCommonUsedTouristList: function(e) {
                var t = this;
                this.$uniApi.getRequestNoLoading("GET", "manager/app/v1/commonUsedTourist/queryCommonUsedTouristList", this.infoObj.scenicType).then((function(i) {
                  if (1 === i.code && i.data[0]) {
                    if (t.commonUsedTouristList = i.data, i.data.forEach((function(e) {
                        t.$set(e, "check", !1)
                      })), 0 == t.insurePeopleList.length || i.data.forEach((function(e) {
                        t.insurePeopleList.forEach((function(t) {
                          e.id == t.id && (e.check = t.check)
                        }))
                      })), t.insurePeopleList = t.$util.deepCopy(i.data), "onLoad" == e && i.data[0]) {
                      var o = i.data.find((function(e) {
                        return t.realCardTypeList.includes(Number(e.cardType))
                      }));
                      t.usedTouristIdsPopData.push(o)
                    }
                    if (t.usedTouristIdsPopData[0]) {
                      var n = [];
                      t.usedTouristIdsPopData.forEach((function(e, i) {
                        t.commonUsedTouristList.forEach((function(t) {
                          e.id == t.id && n.push(t)
                        }))
                      })), t.usedTouristIdsPopData = n, t.infosUse || t.setinputGroup(1)
                    }
                  }
                }))
              },
              changeTourist: function(e, t, i, o) {
                if (this.realCardTypeList.includes(Number(e.cardType)))
                  if (this.usedTouristIdsPopData.includes(e)) this.usedTouristIdsPopData = this.usedTouristIdsPopData.filter((function(t) {
                    return t != e
                  })), this.delTourist(e);
                  else {
                    if (1 == this.inputGroup.length) this.usedTouristIdsPopData = [], this.usedTouristIdsPopData.push(e);
                    else {
                      var n = 0;
                      if (this.inputGroup.forEach((function(e) {
                          (e.name || e.idCard) && n++
                        })), !(n < this.inputGroup.length)) return void this.$util.showToast("只能选择".concat(this.ticketNum, "位游客"));
                      this.usedTouristIdsPopData.push(e)
                    }
                    this.setinputGroup(0)
                  }
                else this.$util.showToast("游客证件类型暂不支持")
              },
              delTourist: function(e, t, i) {
                var o = this.$util.deepCopy(this.inputGroup);
                o = o.filter((function(t) {
                  return t.id != e.id
                }));
                var n = this.realCardTypeList[0];
                for (var s in this.inputGroup) {
                  var r = {
                    name: "",
                    telephone: "",
                    idCard: "",
                    cardType: n
                  };
                  o[s] && (r = o[s]), this.inputGroup.splice(s, 1, r), this.setPassengerTitle()
                }
                this.getIdList(), this.$forceUpdate()
              },
              setinputGroup: function(e) {
                var t = this,
                  i = this.$util.deepCopy(this.usedTouristIdsPopData),
                  o = this.realCardTypeList[0],
                  n = function(n) {
                    if ((t.inputGroup[n].name || t.inputGroup[n].telephone || t.inputGroup[n].idCard) && t.inputGroup.length > 1 && !t.inputGroup[n].id) return "continue";
                    var s = i.shift(),
                      r = {
                        name: "",
                        telephone: "",
                        idCard: "",
                        cardType: o
                      };
                    s && (t.cacheInputGroup[n] && t.cacheInputGroup[n].cardType, t.cacheInputGroup.forEach((function(e) {
                      e.id == s.id && e.cardType
                    })), r = {
                      name: s.name,
                      telephone: s.phone,
                      idCard: s.idCarNo,
                      id: s.id,
                      cardType: s.cardType
                    }, s.id == t.inputGroup[n].id && 0 == e && (r = {
                      name: t.inputGroup[n].name,
                      telephone: t.inputGroup[n].telephone,
                      idCard: t.inputGroup[n].idCard,
                      id: t.inputGroup[n].id,
                      cardType: t.inputGroup[n].cardType
                    })), t.inputGroup.splice(n, 1, r), t.setPassengerTitle()
                  };
                for (var s in this.inputGroup) n(s);
                this.getIdList(), this.$forceUpdate()
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
              editPassenger: function(e) {
                this.$navigateTo({
                  url: "/subPage/pages/editPassenger/editPassenger?touristId=".concat(e, "&codes=").concat(this.realCardTypeList.join(","))
                })
              },
              getGiftBagForOrder: function() {
                var e = this;
                this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/giftBag/getGiftBagForOrder", {
                  itemId: this._ticketId,
                  orderId: this._orderId
                }).then((function(t) {
                  1 === t.code ? t.data && t.data.giftBagCouponList[0] && (e.giftBagData = t.data, e.gbCl = e.giftBagData.giftBagCouponList.length, e.receiveGiftBag(), setTimeout((function() {
                    e.showGiftBag = !0
                  }), 200)) : e.$util.showToast(t.msg)
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
                    var n = e.getStorageSync("userInfor");
                    n.chansiOpenId = t, e.setStorageSync("userInfor", n)
                  } else i.$util.showToast(data.msg)
                }))
              },
              goDiscounts: function() {
                this.safeRouter("/subPage/pages/myDiscounts/myDiscounts")
              },
              saveData: function() {
                var e = this;
                this.insureList[this.insureIndex].insuranceForm = [], this.insurePeopleList.forEach((function(t) {
                  t.check && e.insureList[e.insureIndex].insuranceForm.push(t)
                }))
              },
              safeRouter: function(e) {
                this.$util.isLogin(e) && this.$navigateTo({
                  url: e
                })
              },
              getUserPhone: function() {
                var t = e.getStorageSync("userInfor").mobilePhone;
                this.inputGroup[0].telephone = t, this.$forceUpdate()
              },
              setColor: function(e) {
                var t = "#777777";
                return e && ["条件退", "不可退", "换票入园"].includes(e) && (t = "#FF5411"), t
              },
              showCertificatePoP: function(e, t) {
                this.userIndex = t, this.realCardType = e.cardType, this.showCertificate = !0
              },
              chooseCardType: function(e) {
                this.inputGroup[this.userIndex].cardType = e, this.inputGroup[this.userIndex].idCard = "", this.showCertificate = !1, this.$forceUpdate()
              },
              cancelInsure: function(e) {
                var t = this;
                this.aggree = null, this.insureList.forEach((function(i) {
                  e == i.insuranceId && (i.isInsurance = !1, i.insuranceForm = [], t.insurePeopleList = [])
                }))
              },
              onStudentVerifyAuth: function(t) {
                var i = t.detail.wx_studentcheck_code;
                i && (this.studentCheckCode = i, e.setStorageSync("CODE_STORAGE_KEY", i), this.checkStudentIdentity())
              },
              onShowStudentVerifyDialog: function() {
                this.showStudentVerifyDialog = !0
              },
              onStudentVerifyClose: function() {
                0 == this.isStudent && (this.showStudentPop = !0), this.showStudentVerifyDialog = !1, this.studentCheckCode && this.checkStudentIdentity()
              },
              checkStudentIdentity: function() {
                var t = this,
                  i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                this.studentCheckCode && this.$uniApi.dataRequestNoLoading("get", "manager/app/wx/checkStudent", {
                  code: this.studentCheckCode
                }).then((function(o) {
                  0 === o.data.errCode ? 3 === o.data.bindStatus ? o.data.isStudent ? (t.isStudent = 1, t.showStudentPop = !1) : (t.isStudent = 0, t.showStudentPop = !0) : 1 == i && t.onShowStudentVerifyDialog() : -1 !== o.data.errCode ? (t.studentCheckCode = "", e.setStorageSync("CODE_STORAGE_KEY", ""), 1 == i && t.onShowStudentVerifyDialog()) : 1 == i && t.onShowStudentVerifyDialog()
                }))
              },
              closeStudentPop: function() {
                getCurrentPages().length < 2 ? e.switchTab({
                  url: "/pages/index/index"
                }) : this.$util.prevPage()
              }
            }
          };
        t.default = h
      }).call(this, i("df3c").default, i("3223").default)
    }
};
