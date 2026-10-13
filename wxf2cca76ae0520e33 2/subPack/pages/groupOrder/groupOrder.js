require("../../../@babel/runtime/helpers/Arrayincludes"), require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPack/pages/groupOrder/groupOrder"], {
    "10f6": function(e, t, i) {
      (function(e, t) {
        var n = i("47a9");
        i("5366"), n(i("3240"));
        var o = n(i("43392"));
        e.__webpack_require_UNI_MP_PLUGIN__ = i, t(o.default)
      }).call(this, i("3223").default, i("df3c").createPage)
    },
    1714: function(e, t, i) {
      (function(e) {
        var n = i("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var o = n(i("7eb4")),
          s = n(i("ee10")),
          r = n(i("7ca3")),
          u = n(i("adb2")),
          a = {
            components: {
              orderNav: function() {
                i.e("subPack/components/orderNav").then(function() {
                  return resolve(i("c26a8"))
                }.bind(null, i)).catch(i.oe)
              },
              uniDataSelect: function() {
                Promise.all([i.e("subPack/common/vendor"), i.e("subPack/components/uni-data-select")]).then(function() {
                  return resolve(i("c2eb"))
                }.bind(null, i)).catch(i.oe)
              },
              ocrIndex: function() {
                i.e("components/ocr/ocrIndex").then(function() {
                  return resolve(i("7882"))
                }.bind(null, i)).catch(i.oe)
              },
              cardType: function() {
                i.e("subPack/components/card-pop/candType").then(function() {
                  return resolve(i("7158"))
                }.bind(null, i)).catch(i.oe)
              }
            },
            data: function() {
              var e;
              return e = {
                safeAreaBottom: 0,
                showDetail: !1,
                allAmount: 200,
                value: "",
                commonUsedTouristList: [],
                selectedDate: "2023-09-22",
                surplusStock: 5,
                soldCount: 0,
                showService: !1,
                priceInfo: [{
                  peopleType: 1,
                  price: null,
                  num: 0,
                  amount: 0,
                  userList: [],
                  idList: []
                }, {
                  peopleType: 3,
                  price: null,
                  num: 0,
                  amount: 0,
                  userList: [],
                  idList: []
                }, {
                  peopleType: 2,
                  price: null,
                  num: 0,
                  amount: 0,
                  userList: [],
                  idList: []
                }],
                itemUseDesc: {
                  minBookNum: 0,
                  maxBookNum: 4
                },
                allTicNum: 0
              }, (0, r.default)(e, "allAmount", 0), (0, r.default)(e, "typeNum", 0), (0, r.default)(e, "actIndex", 0), (0, r.default)(e, "modelType", 0), (0, r.default)(e, "showPassenger", !1), (0, r.default)(e, "actUserInfo", ""), (0, r.default)(e, "changeIndex", 0), (0, r.default)(e, "passenger", {
                name: "",
                idCarNo: "",
                phone: "",
                id: "",
                cardType: 0
              }), (0, r.default)(e, "submitState", !1), (0, r.default)(e, "safeAreaBottom", 0), (0, r.default)(e, "contactPerson", ""), (0, r.default)(e, "contactTel", ""), (0, r.default)(e, "lineProductId", ""), (0, r.default)(e, "lineProductName", ""), (0, r.default)(e, "disabledSubmitBtn", !1), (0, r.default)(e, "lineing", !1), (0, r.default)(e, "hasTimeOut", !1), (0, r.default)(e, "repeatCreateOrder", null), (0, r.default)(e, "repeatCreateOrder2", null), (0, r.default)(e, "groupErrList", []), (0, r.default)(e, "showGroupErr", !1), (0, r.default)(e, "lineProductInfo", {}), (0, r.default)(e, "orderId", ""), (0, r.default)(e, "refundDetail", {}), (0, r.default)(e, "showCoupon", !1), (0, r.default)(e, "showBar", !0), (0, r.default)(e, "couponId", ""), (0, r.default)(e, "couponList", []), (0, r.default)(e, "couponPeople", []), (0, r.default)(e, "userCouponId", ""), (0, r.default)(e, "discountAmount", 0), (0, r.default)(e, "deductionInfo", {}), (0, r.default)(e, "noCouponFlag", null), (0, r.default)(e, "totalNum", 0), (0, r.default)(e, "treeData", []), (0, r.default)(e, "defaultValue", [0, 0, 0]), (0, r.default)(e, "otherInfoList", []), (0, r.default)(e, "isShowSelect", !1), (0, r.default)(e, "otherIndex", -1), (0, r.default)(e, "selectData", ""), (0, r.default)(e, "parseStyle", {
                p: "word-break: break-all;line-height:48rpx;"
              }), (0, r.default)(e, "showCardPop", !1), (0, r.default)(e, "realCardTypeCodes", []), e
            },
            filters: {
              peopleTypeFilter: function(e) {
                return {
                  1: "成人",
                  2: "儿童",
                  3: "老人"
                } [e]
              },
              timeFormat: function(e) {
                return e.split(" ")[0]
              }
            },
            computed: {
              userInfo: function() {
                return this.$store.getters.userInfor
              }
            },
            onLoad: function(t) {
              null != t.noCouponFlag && (this.noCouponFlag = t.noCouponFlag), this.safeAreaBottom = e.getStorageSync("safeAreaBottom") ? e.getStorageSync("safeAreaBottom") : 0, this.lineProductInfo = e.getStorageSync("lineProduct"), this.realCardTypeCodes = this.lineProductInfo.lineProductUseDescVO.realCardTypeCodes.split(","), this.priceInit()
            },
            onShow: function() {
              this.getCommonUsedTouristList(), this.refundInfo(), this.getOtherInfo()
            },
            watch: {
              showCoupon: {
                handler: function(e, t) {
                  this.showBar = !e
                }
              }
            },
            methods: {
              setDataInfos: function(e) {
                var t = this;
                console.log(e, "参数--------"), e ? (this.passenger.name = e.name, this.passenger.idCarNo = e.idCarNo) : setTimeout((function() {
                  t.$util.showToast("识别失败，请重新识别或手动填写")
                }), 500)
              },
              trip: function() {
                var e = "",
                  t = "",
                  i = "",
                  n = 0;
                if (this.lineProductInfo.fromCityList && this.lineProductInfo.fromCityList.length > 0 && (this.lineProductInfo.fromCityList.forEach((function(e, i) {
                    t += e + "/"
                  })), t && (t = t.slice(0, -1) + "出发,")), this.lineProductInfo.journeyDay > this.lineProductInfo.journeyNight && (n = this.lineProductInfo.journeyDay), this.lineProductInfo.journeyDay < this.lineProductInfo.journeyNight && (n = this.lineProductInfo.journeyNight), this.lineProductInfo.journeyDay == this.lineProductInfo.journeyNight && (n = this.lineProductInfo.journeyNight + 1), this.lineProductInfo.selectTicket && this.lineProductInfo.selectTicket.date) {
                  var o = new Date(Date.parse(this.lineProductInfo.selectTicket.date) + 864e5 * n);
                  return i = o.getFullYear() + "-" + (o.getMonth() + 1) + "-" + o.getDate(), i = this.lineProductInfo.journeyNight ? i : this.lineProductInfo.selectTicket.date, e = t + this.lineProductInfo.selectTicket.date + "出发" + i + "返程", this.lineProductInfo.selectTicket.date == i && (e = t + this.lineProductInfo.selectTicket.date + "当天往返"), e
                }
              },
              priceInfoPopup: function() {
                this.showService = !1, this.showDetail = !0
              },
              buyTip: function() {
                this.showService = !0
              },
              deleteUser: function(e) {
                this.priceInfo[this.actIndex].userList.splice(e, 1), this.priceInfo[this.actIndex].idList.splice(e, 1)
              },
              chooseCoupon: function() {
                this.couponList.length > 0 && (this.showCoupon = !0)
              },
              getOptimalCoupon: function(e) {
                var t = this;
                return (0, s.default)(o.default.mark((function i() {
                  var n, s;
                  return o.default.wrap((function(i) {
                    for (;;) switch (i.prev = i.next) {
                      case 0:
                        return i.prev = 0, n = {
                          useDateStr: t.lineProductInfo.selectTicket.date,
                          lineProductId: t.lineProductInfo.productId,
                          orderPeopleList: t.couponPeople
                        }, i.next = 4, t.$uniApi.dataRequestNoLoading("POST", "product/app/v1/coupon/getBestLineCoupon", n);
                      case 4:
                        1 == (s = i.sent).code && (t.couponList = s.data, t.userCouponId = s.data[0].userCouponId, 3 == s.data[0].type ? (t.discountAmount = s.data[0].realQuota, t.deductionInfo = s.data[0].deductionInfo, t.allAmount = t.subtract(e, s.data[0].realQuota)) : (t.discountAmount = s.data[0].quota, t.allAmount = t.subtract(e, s.data[0].quota))), i.next = 11;
                        break;
                      case 8:
                        i.prev = 8, i.t0 = i.catch(0), t.resettingMoney();
                      case 11:
                      case "end":
                        return i.stop()
                    }
                  }), i, null, [
                    [0, 8]
                  ])
                })))()
              },
              cancelCoupon: function() {
                var e = this;
                this.userCouponId = -1, this.discountAmount = 0, this.showCoupon = !1, this.deductionInfo = {};
                var t = 0;
                this.couponPeople = [], this.priceInfo.forEach((function(i, n) {
                  i.num && (e.actIndex = n, i.amount = e.multiply(i.price, i.num), t = e.add(t, i.amount))
                })), this.allAmount = t
              },
              limitAge: function(e, t, i, n, o) {
                var s = "";
                return 1 == o || 3 == o ? (s = e + "周岁", s += n ? "(不含)" : "(含)", s += i ? "-" + t + "周岁(含)" : "以上") : (s = e + "周岁", s += n ? "(不含)" : "(含)", s += "-" + t + "周岁", s += i ? "(不含)" : "(含)"), s
              },
              residueNum: function() {
                var e = 0;
                return this.priceInfo.forEach((function(t) {
                  e += t.userList.length
                })), this.allTicNum - e == 0 ? "已选满" : this.allTicNum - e + "位"
              },
              priceInit: function() {
                this.priceInfo[0].limitAge = this.lineProductInfo.adultLimitAge, this.priceInfo[0].regularAge = this.lineProductInfo.adultRegularAge, this.priceInfo[0].ageType = this.lineProductInfo.adultAgeType, this.priceInfo[0].ageRange = this.lineProductInfo.adultAgeRange, this.priceInfo[1].limitAge = this.lineProductInfo.oldLimitAge, this.priceInfo[1].regularAge = this.lineProductInfo.oldRegularAge, this.priceInfo[1].ageRange = this.lineProductInfo.oldAgeRange, this.priceInfo[1].ageType = this.lineProductInfo.oldAgeType, this.priceInfo[2].limitAge = this.lineProductInfo.childrenLimitAge, this.priceInfo[2].regularAge = this.lineProductInfo.childrenRegularAge, this.priceInfo[2].ageRange = this.lineProductInfo.childrenAgeRange, this.priceInfo[2].ageType = this.lineProductInfo.childrenAgeType, this.priceInfo[0].price = this.lineProductInfo.selectTicket.adultSellPrice, this.priceInfo[1].price = this.lineProductInfo.selectTicket.oldSellPrice, this.priceInfo[2].price = this.lineProductInfo.selectTicket.childrenSellPrice, this.itemUseDesc.maxBookNum = this.lineProductInfo.lineProductUseDescVO.maxBookNum, this.surplusStock = this.lineProductInfo.selectTicket.surplusStock, this.soldCount = this.lineProductInfo.selectTicket.soldCount ? this.lineProductInfo.selectTicket.soldCount : 0, this.setUserData()
              },
              setUserData: function() {
                var e = this.priceInfo.filter((function(e, t) {
                  return null !== e.price && e.price >= 0
                }));
                if (e && 1 === e.length) {
                  var t = -1,
                    i = e[0].peopleType;
                  1 == i ? t = 0 : 3 == i ? t = 1 : 2 == i && (t = 2), this.addNum(t, e[0])
                }
              },
              getServiceDesc: function(e) {
                return ["", "自动确认/二次确认", "无购物", "无自费", "退订无忧", "上门接"][e]
              },
              refundInfo: function() {
                var e = this;
                this.loading = !0, this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/line/product/getRefundDesc?productId=" + this.lineProductInfo.productId + "&date=" + this.lineProductInfo.selectTicket.date).then((function(t) {
                  1 === t.code && (e.refundDetail = t.data)
                }))
              },
              getCommonUsedTouristList: function(e) {
                var t = this;
                this.$uniApi.dataRequestNoLoading("GET", "manager/app/v1/commonUsedTourist/queryCommonUsedTouristList").then((function(e) {
                  1 === e.code && (t.commonUsedTouristList = e.data[0] ? e.data : [], t.actUserInfo && t.actUserInfo.userList[0] && (t.actUserInfo.userList = [], t.commonUsedTouristList.forEach((function(e) {
                    t.actUserInfo.idList.includes(e.id) && t.actUserInfo.userList.push(e)
                  }))))
                }))
              },
              checkOne: function(e, t) {
                var i = this.priceInfo[this.actIndex].limitAge,
                  n = this.priceInfo[this.actIndex].regularAge,
                  o = this.priceInfo[this.actIndex].ageRange,
                  s = this.priceInfo[this.actIndex].ageType,
                  r = this.priceInfo[this.actIndex].peopleType,
                  u = this.calculateAge(e);
                if (i >= u && s) return !1;
                if (i > u && !s) return !1;
                if (2 == r) {
                  if (n <= u && o) return !1;
                  if (n < u && !o) return !1
                } else if (n < u && o) return !1;
                return !0
              },
              calculateAge: function(e) {
                var t = e.substr(6, 4),
                  i = new Date,
                  n = i.getFullYear() - t;
                return e.substr(10, 4) > 100 * (i.getMonth() + 1) + i.getDate() && (n -= 1), n
              },
              changeTourist: function(e, t) {
                if (this.realCardTypeCodes.includes(e.cardType)) {
                  var i = this.priceInfo[this.actIndex].idList;
                  if (0 != e.cardType || this.checkOne(e.idCarNo, e.name)) {
                    if (i.includes(e.id)) this.priceInfo[this.actIndex].userList = this.priceInfo[this.actIndex].userList.filter((function(t) {
                      return t.id != e.id
                    })), this.priceInfo[this.actIndex].idList = i.filter((function(t) {
                      return t != e.id
                    }));
                    else if (1 == this.allTicNum)(i = []).push(e.id), this.priceInfo[this.actIndex].userList = [], this.priceInfo[this.actIndex].userList.push(e), this.priceInfo[this.actIndex].idList = i;
                    else {
                      if (!(this.allTicNum > this.priceInfo[this.actIndex].userList.length)) return void this.$util.showToast("只能选择".concat(this.allTicNum, "位游客"));
                      this.priceInfo[this.actIndex].userList.push(e), this.priceInfo[this.actIndex].idList.push(e.id)
                    }
                    this.$forceUpdate()
                  } else this.$util.showToast("游客".concat(e.name, "不属于该年龄范围"))
                } else this.$util.showToast("游客证件类型暂不支持")
              },
              computTotalNum: function() {
                var e = this;
                this.userCouponId = "", this.discountAmount = 0, this.showCoupon = !1, this.deductionInfo = {}, this.couponList = [];
                var t = 0;
                this.couponPeople = [], this.priceInfo.forEach((function(i, n) {
                  i.num && (e.actIndex = n, i.amount = e.multiply(i.price, i.num), t = e.add(t, i.amount))
                })), this.totalNum = t
              },
              resettingMoney: function() {
                var e = this;
                this.userCouponId = "", this.discountAmount = 0, this.showCoupon = !1, this.deductionInfo = {}, this.couponList = [];
                var t = 0;
                this.couponPeople = [], this.priceInfo.forEach((function(i, n) {
                  i.num && (e.actIndex = n, i.amount = e.multiply(i.price, i.num), t = e.add(t, i.amount))
                })), this.allAmount = t
              },
              reduceNum: function(e, t) {
                t.num < 1 || (this.allTicNum <= this.itemUseDesc.minBookNum ? this.$util.showToast("最少需选择".concat(this.itemUseDesc.minBookNum, "张")) : (t.num == t.userList.length && (t.userList.pop(), t.idList.pop()), t.num = t.num - 1, this.allTicNum = this.allTicNum - 1, 0 == this.allTicNum ? (this.totalNum = 0, this.resettingMoney()) : (this.computTotalNum(), this.calcPriceAmount())))
              },
              addNum: function(e, t) {
                var i = 0 == this.itemUseDesc.maxBookNum ? 99999 : this.itemUseDesc.maxBookNum; - 1 != this.surplusStock && (i = Math.min(i, this.surplusStock)), this.allTicNum >= i && -1 != this.surplusStock ? this.$util.showToast("最多可选择".concat(i, "人")) : (t.num = t.num + 1, this.allTicNum = this.allTicNum + 1, this.computTotalNum(), this.calcPriceAmount())
              },
              add: function(e, t) {
                return e = (0, u.default)(e), t = (0, u.default)(t), e.plus(t).toNumber()
              },
              subtract: function(e, t) {
                return e = (0, u.default)(e), t = (0, u.default)(t), e.minus(t).toNumber()
              },
              multiply: function(e, t) {
                return e = (0, u.default)(e), t = (0, u.default)(t), e.times(t).toNumber()
              },
              toFixedNum: function(e) {
                if (!e) return 0;
                var t = e.toString().split(".");
                return t[1] && t[1].length > 2 ? e.toFixed(2) : e
              },
              calcPriceAmount: function() {
                var e = this,
                  t = 0,
                  i = 0;
                this.couponPeople = [];
                var n = 0,
                  o = 0,
                  s = 0,
                  r = 0,
                  u = 0,
                  a = 0;
                if (this.priceInfo.forEach((function(c, l) {
                    c.num && (1 == c.peopleType ? (n = 1 * c.num, r = c.price) : 3 == c.peopleType ? (o = 1 * c.num, u = c.price) : (s = 1 * c.num, a = c.price), e.actIndex = l, t += 1, c.amount = e.multiply(c.price, c.num), i = e.add(i, c.amount))
                  })), this.typeNum = t, 0 == this.noCouponFlag) {
                  if (n > 0)
                    for (var c = 0; c < n; c++) this.couponPeople.push({
                      peopleType: 1,
                      price: r
                    });
                  if (o > 0)
                    for (var l = 0; l < o; l++) this.couponPeople.push({
                      peopleType: 3,
                      price: u
                    });
                  if (s > 0)
                    for (var d = 0; d < s; d++) this.couponPeople.push({
                      peopleType: 2,
                      price: a
                    });
                  this.getOptimalCoupon(i)
                } else this.allAmount = i
              },
              checkCoupon: function(e) {
                var t = this;
                this.discountAmount = e.quota, this.userCouponId = e.userCouponId;
                var i = 0;
                this.priceInfo.forEach((function(e, n) {
                  e.num && (e.amount = t.multiply(e.price, e.num), i = t.add(i, e.amount))
                })), this.allAmount = this.subtract(i, e.quota), 3 == e.type ? this.deductionInfo = e.deductionInfo : this.deductionInfo = {}, this.showCoupon = !1
              },
              delUser: function(e, t, i) {
                this.priceInfo[e].userList.splice(t, 1), this.priceInfo[e].idList.splice(t, 1)
              },
              chooseUser: function(e, t, i) {
                this.modelType = 0, this.actIndex = e, this.showPassenger = !0, this.actUserInfo = this.$util.deepCopy(i)
              },
              changeUser: function(e, t) {
                if (this.realCardTypeCodes.includes(e.cardType)) {
                  if (this.actUserInfo.idList.includes(e.id)) {
                    var i = this.actUserInfo.idList.indexOf(e.id);
                    this.actUserInfo.userList.splice(i, 1), this.actUserInfo.idList.splice(i, 1)
                  } else this.actUserInfo.userList.length < this.actUserInfo.num ? (this.actUserInfo.userList.push(e), this.actUserInfo.idList.push(e.id)) : 1 == this.actUserInfo.num && 1 == this.actUserInfo.userList.length && (this.actUserInfo.userList = [], this.actUserInfo.idList = [], this.actUserInfo.userList.push(e), this.actUserInfo.idList.push(e.id));
                  this.$forceUpdate()
                } else this.$util.showToast("游客证件类型暂不支持")
              },
              closePassenger: function() {
                this.modelType ? this.modelType = 0 : this.showPassenger = !1
              },
              touristNumText: function(e, t) {
                return 0 == t ? "选择".concat(e, "位游客") : t < e ? "再选".concat(e - t, "位") : t == e ? "已选满" : void 0
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
              addPassenger: function() {
                this.passenger = {
                  name: "",
                  idCarNo: "",
                  phone: "",
                  id: "",
                  cardType: this.realCardTypeCodes[0] || 0
                }, this.modelType = 1
              },
              editPassenger: function(e) {
                this.modelType = 2, this.showPassenger = !0, this.passenger = {
                  name: e.name,
                  idCarNo: e.idCarNo,
                  phone: e.phone,
                  id: e.id,
                  cardType: e.cardType
                }
              },
              verify: function() {
                return this.$util.checkName(this.passenger.name).code ? this.$util.checkPhone(this.passenger.phone).code ? !!this.$util.checkId(this.passenger.idCarNo, this.passenger.cardType).code || (this.$util.showToast(this.$util.checkId(this.passenger.idCarNo, this.passenger.cardType).msg), !1) : (this.$util.showToast(this.$util.checkPhone(this.passenger.phone).msg), !1) : (this.$util.showToast(this.$util.checkName(this.passenger.name).msg), !1)
              },
              save: function() {
                var t = this;
                if (this.modelType) {
                  if (this.submitState) return;
                  if (!this.verify()) return;
                  if (this.submitState = !0, 1 == this.modelType) this.$uniApi.dataRequestNoLoading("get", "manager/app/v1/commonUsedTourist/queryTouristByIdCardNo?idCarNo=" + this.passenger.idCarNo).then((function(i) {
                    if (1 === i.code)
                      if (console.log(i.data), i.data && i.data[0]) {
                        var n = {
                          id: i.data[0].id,
                          name: t.passenger.name,
                          phone: t.passenger.phone,
                          idCarNo: t.passenger.idCarNo,
                          cardType: t.passenger.cardType
                        };
                        e.showModal({
                          cancelText: "取消",
                          confirmText: "确认",
                          content: "该证件号信息已存在，请确认是否更新?",
                          success: function(e) {
                            e.confirm ? t.$uniApi.dataRequestNoLoading("POST", "manager/app/v1/commonUsedTourist/updateCommonUsedTourist", n).then((function(e) {
                              1 === e.code ? t.closeAdd() : (t.$util.showToast(e.msg), t.submitState = !1)
                            })) : e.cancel && (t.submitState = !1)
                          }
                        })
                      } else {
                        var o = [];
                        o.push({
                          name: t.passenger.name,
                          phone: t.passenger.phone,
                          idCarNo: t.passenger.idCarNo,
                          cardType: t.passenger.cardType
                        }), t.$uniApi.dataRequestYesLoading("POST", "manager/app/v1/commonUsedTourist/saveCommonUsedTourist?operationType=1", o, "保存中").then((function(e) {
                          1 === e.code ? t.closeAdd() : (t.$util.showToast(e.msg), t.submitState = !1)
                        }))
                      }
                    else t.$util.showToast(i.msg), t.submitState = !1
                  }));
                  else {
                    var i = {
                      id: this.passenger.id,
                      name: this.passenger.name,
                      phone: this.passenger.phone,
                      idCarNo: this.passenger.idCarNo,
                      cardType: this.passenger.cardType
                    };
                    this.$uniApi.dataRequestYesLoading("POST", "manager/app/v1/commonUsedTourist/updateCommonUsedTourist", i, "保存中").then((function(e) {
                      1 === e.code ? t.closeAdd() : (t.$util.showToast(e.msg), t.submitState = !1)
                    }))
                  }
                } else {
                  if (this.check()) return void this.$util.showToast(this.check());
                  this.actUserInfo.userList = [], this.commonUsedTouristList.forEach((function(e) {
                    t.actUserInfo.idList.includes(e.id) && t.actUserInfo.userList.push(e)
                  })), this.priceInfo[this.actIndex].userList = this.actUserInfo.userList, this.priceInfo[this.actIndex].idList = this.actUserInfo.idList, console.log(this.priceInfo);
                  var n = [];
                  this.priceInfo.forEach((function(e) {
                    n = n.concat(e.idList)
                  })), this.showPassenger = !1
                }
              },
              check: function() {
                var e = this,
                  t = "",
                  i = this.actUserInfo.limitAge,
                  n = this.actUserInfo.regularAge,
                  o = this.actUserInfo.ageRange,
                  s = this.actUserInfo.ageType,
                  r = this.actUserInfo.peopleType;
                return this.actUserInfo.userList.forEach((function(u) {
                  if (null != u.idCarNo) {
                    if (0 == u.cardType) {
                      var a = e.calculateAge(u.idCarNo),
                        c = !0;
                      if (i >= a && s && (c = !1), i > a && !s && (c = !1), 2 == r ? (n <= a && o && (c = !1), n < a && !o && (c = !1)) : n < a && o && (c = !1), !c) return void(t = "游客".concat(u.name, "不属于该年龄范围"))
                    }
                  } else t = "请补充证件信息"
                })), t
              },
              closeAdd: function() {
                this.passenger = {
                  name: "",
                  idCarNo: "",
                  phone: "",
                  id: "",
                  cardType: 0
                }, this.modelType = 0, this.submitState = !1, this.getCommonUsedTouristList()
              },
              submit: function() {
                if (this.contactPerson) {
                  var e = this.residueNum();
                  if ("已选满" == e) {
                    if (!this.$util.checkPhone(this.contactTel).code) return this.$util.showToast(this.$util.checkPhone(this.contactTel).msg), !1;
                    if (1 == this.typeNum && this.priceInfo[2].userList.length > 0 && !this.lineProductInfo.childrenEscort) return this.$util.showToast("儿童必须家长陪同"), !1;
                    var t = [];
                    if (this.otherInfoList.length > 0)
                      for (var i in this.otherInfoList) {
                        var n = this.otherInfoList[i];
                        if (!n.val) {
                          var o = 1 == n.type || 2 == n.type ? "请填写" : "请选择";
                          return this.$util.showToast("".concat(o).concat(n.title)), !1
                        }
                        t.push({
                          title: n.title,
                          content: n.val
                        })
                      }
                    var s = {
                        lineProductId: this.lineProductInfo.productId,
                        lineProductName: this.lineProductInfo.productName,
                        orderAmount: this.allAmount,
                        quantity: this.allTicNum,
                        contactPerson: this.contactPerson,
                        contactTel: this.contactTel,
                        ticketUseDate: this.lineProductInfo.selectTicket.date,
                        userCouponId: -1 == this.userCouponId ? "" : this.userCouponId,
                        deductionInfo: this.deductionInfo ? this.deductionInfo : {},
                        createChannel: 1,
                        orderPeopleList: [],
                        lineOrderOtherInfoDTOList: t
                      },
                      r = [];
                    this.priceInfo.forEach((function(e) {
                      e.userList.forEach((function(t) {
                        r.push({
                          idCard: t.idCarNo,
                          name: t.name,
                          cardType: t.cardType,
                          telephone: t.phone,
                          peopleId: t.memberId || "",
                          peopleType: e.peopleType,
                          price: e.price
                        })
                      }))
                    })), s.orderPeopleList = r, this.createOrder(s)
                  } else this.$util.showToast("还需选择" + e)
                } else this.$util.showToast("请填写联系人")
              },
              closeLineing: function(e) {
                this.lineing = !1, this.hasTimeOut = !1, this.repeatCreateOrder && (clearInterval(this.repeatCreateOrder), clearInterval(this.repeatCreateOrder2)), this.repeatCreateOrder = null, this.repeatCreateOrder2 = null, e || this.getInfo(!0)
              },
              timeOutInit: function() {
                var e = this;
                this.hasTimeOut || (this.hasTimeOut = !0, e.repeatCreateOrder2 = setTimeout((function() {
                  e.hasTimeOut && (e.closeLineing(), e.$util.showToast("很抱歉，您被挤出了队伍，请重新提交"))
                }), 4e4))
              },
              createOrder: function(t) {
                var i = this;
                if (!this.disabledSubmitBtn || this.lineing) {
                  var n = this;
                  !n.hasTimeOut && n.timeOutInit(), this.disabledSubmitBtn = !0, !this.lineing && e.showLoading({
                    title: "预订中...",
                    mask: !0
                  }), this.$uniApi.dataRequestNoLoading("POST", "order/app/v1/lineOrder/addLineOrder", t, !1).then((function(o) {
                    if (o.msg.includes("火爆") || o.msg.includes("频繁")) return n.lineing = !0, void(n.repeatCreateOrder = setTimeout((function() {
                      n.createOrder(t)
                    }), 2e3));
                    if (1 != o.code) return i.closeLineing(!0), void setTimeout((function() {
                      n.$util.showToast(o.msg)
                    }), 300);
                    if (i.orderId = o.data, i.closeLineing(!0), 0 != i.allAmount) i.goPay();
                    else {
                      i.$util.showToast("支付成功");
                      var s = i;
                      e.requestSubscribeMessage({
                        tmplIds: ["vaaW2n2qCr5GeEy29ndpGgf02U0Ahbd012RdA45Z90A"],
                        success: function(e) {
                          s.sendWxMessage()
                        },
                        fail: function(t) {
                          setTimeout((function() {
                            e.redirectTo({
                              url: "/subPack/pages/lineOrderDetail/lineOrderDetail?orderId=".concat(s.orderId)
                            })
                          }), 1e3)
                        }
                      })
                    }
                  })).catch((function(e) {})).finally((function() {
                    setTimeout((function() {
                      i.disabledSubmitBtn = !1, e.hideLoading()
                    }), 1200)
                  }))
                }
              },
              sendWxMessage: function() {
                var t = this,
                  i = {
                    orderId: this.orderId
                  };
                this.$uniApi.dataRequestYesLoading("GET", "order/app/v1/lineOrder/sendWxMessage", i, "加载中..").then((function(i) {
                  e.redirectTo({
                    url: "/subPack/pages/lineOrderDetail/lineOrderDetail?orderId=".concat(t.orderId)
                  })
                }))
              },
              goPay: function() {
                var t = this;
                e.showLoading({
                  title: "发起支付..."
                }), this.$uniApi.dataRequestYesLoading("POST", "order/app/v1/order/waitPayToPay", {
                  payChannel: "",
                  orderSource: 5,
                  orderId: this.orderId,
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
                    orderInfo: i.data.tradeNo,
                    success: function(i) {
                      i.resultCode, t.$util.showToast("支付成功");
                      var n = t;
                      e.requestSubscribeMessage({
                        tmplIds: ["vaaW2n2qCr5GeEy29ndpGgf02U0Ahbd012RdA45Z90A"],
                        success: function(e) {
                          n.sendWxMessage()
                        },
                        fail: function(t) {
                          e.redirectTo({
                            url: "/subPack/pages/lineOrderDetail/lineOrderDetail?orderId=".concat(n.orderId)
                          })
                        }
                      }), t.submiting = !1
                    },
                    fail: function(i) {
                      t.submiting = !1, e.redirectTo({
                        url: "/subPack/pages/lineOrderDetail/lineOrderDetail?orderId=".concat(t.orderId)
                      })
                    }
                  })
                }))
              },
              confirm: function(e, t, i) {
                t.defaultValue = e[0].IndexArr || [0, 0, 0];
                var n = e.map((function(e) {
                  return e.value
                }));
                t.val = n.join("，"), this.otherInfoList[i] = t, this.$forceUpdate()
              },
              getOtherInfo: function() {
                var e = this;
                this.$uniApi.dataRequestNoLoading("POST", "product/app/v1/line/product/otherInfo/appList", {
                  productId: this.lineProductInfo.productId
                }).then((function(t) {
                  if (1 === t.code) {
                    var i = t.data || [];
                    i.forEach((function(e) {
                      e.val = "", e.range = [], 3 === e.type && (e.showSelect = !1, e.defaultValue = [0, 0, 0]), 0 === e.type && e.lineProductOtherContentVOList.forEach((function(t) {
                        e.range.push({
                          value: t.key,
                          text: t.key
                        })
                      }))
                    })), e.otherInfoList = i
                  }
                }))
              },
              showSelect: function(e, t) {
                this.selectData = e, this.defaultValue = e.defaultValue, this.otherIndex = t, this.isShowSelect = !0
              },
              handlerChange: function(e, t, i) {
                this.otherInfoList[i].val = e.detail.value.trim(), this.$forceUpdate()
              },
              confirmOrder: function() {
                this.showGroupErr = !1
              },
              chooseCardType: function(e) {
                e != this.passenger.cardType && (this.passenger.idCarNo = ""), this.passenger.cardType = e, this.showCardPop = !1
              }
            }
          };
        t.default = a
      }).call(this, i("df3c").default)
    },
    43392: function(e, t, i) {
      i.r(t);
      var n = i("fe26"),
        o = i("9d25");
      for (var s in o)["default"].indexOf(s) < 0 && function(e) {
        i.d(t, e, (function() {
          return o[e]
        }))
      }(s);
      i("abdc");
      var r = i("828b"),
        u = Object(r.a)(o.default, n.b, n.c, !1, null, "e8182906", null, !1, n.a, void 0);
      t.default = u.exports
    },
    "9d25": function(e, t, i) {
      i.r(t);
      var n = i("1714"),
        o = i.n(n);
      for (var s in n)["default"].indexOf(s) < 0 && function(e) {
        i.d(t, e, (function() {
          return n[e]
        }))
      }(s);
      t.default = o.a
    },
    abdc: function(e, t, i) {
      var n = i("dc75");
      i.n(n).a
    },
    dc75: function(e, t, i) {},
    fe26: function(e, t, i) {
      i.d(t, "b", (function() {
        return o
      })), i.d(t, "c", (function() {
        return s
      })), i.d(t, "a", (function() {
        return n
      }));
      var n = {
          uniIcons: function() {
            return Promise.all([i.e("common/vendor"), i.e("components/uni-icons/uni-icons")]).then(i.bind(null, "365b"))
          },
          uIcon: function() {
            return i.e("uview-ui/components/u-icon/u-icon").then(i.bind(null, "61be"))
          },
          uPopup: function() {
            return i.e("uview-ui/components/u-popup/u-popup").then(i.bind(null, "39fb"))
          },
          uInput: function() {
            return Promise.all([i.e("common/vendor"), i.e("uview-ui/components/u-input/u-input")]).then(i.bind(null, "5cbc"))
          },
          uParse: function() {
            return Promise.all([i.e("common/vendor"), i.e("uview-ui/components/u-parse/u-parse")]).then(i.bind(null, "7217"))
          },
          uSelect: function() {
            return i.e("uview-ui/components/u-select/u-select").then(i.bind(null, "8be8"))
          }
        },
        o = function() {
          var e = this,
            t = (e.$createElement, e._self._c, e.trip()),
            i = e.__map(e.priceInfo, (function(t, i) {
              return {
                $orig: e.__get_orig(t),
                f0: null != t.price ? e._f("peopleTypeFilter")(t.peopleType) : null,
                m1: null != t.price ? e.limitAge(t.limitAge, t.regularAge, t.ageRange, t.ageType, t.peopleType) : null
              }
            })),
            n = e.allTicNum > 0 ? e.residueNum() : null,
            o = e.allTicNum > 0 ? e.residueNum() : null,
            s = e.allTicNum > 0 && 1 == e.typeNum ? e.__map(e.commonUsedTouristList, (function(t, i) {
              return {
                $orig: e.__get_orig(t),
                g0: t.idCarNo ? e.priceInfo[e.actIndex].idList.includes(t.id) : null,
                g1: t.idCarNo ? e.realCardTypeCodes.includes(t.cardType) : null
              }
            })) : null,
            r = e.allTicNum > 0 && e.typeNum > 1 ? e.__map(e.priceInfo, (function(t, i) {
              var n = e.__get_orig(t),
                o = t.num > 0 ? e._f("peopleTypeFilter")(t.peopleType) : null,
                s = t.num > 0 ? t.userList.length : null;
              return {
                $orig: n,
                f1: o,
                g2: s,
                g3: t.num > 0 && t.num > s ? t.userList.length : null
              }
            })) : null,
            u = e.otherInfoList.length,
            a = e.couponList.length,
            c = 0 == a || e.discountAmount > 0 || 0 != e.discountAmount ? null : e.couponList.length,
            l = e.__map(e.couponList, (function(t, i) {
              return {
                $orig: e.__get_orig(t),
                f2: 0 == t.useTimeSlot ? e._f("timeFormat")(t.validityStartTime) : null,
                f3: 0 == t.useTimeSlot ? e._f("timeFormat")(t.validityEndTime) : null,
                f4: 2 == t.useTimeSlot ? e._f("timeFormat")(t.validityStartTime) : null,
                f5: 2 == t.useTimeSlot ? e._f("timeFormat")(t.validityEndTime) : null,
                f6: 2 == t.useTimeSlot ? e._f("timeFormat")(t.useTimeStart) : null,
                f7: 2 == t.useTimeSlot ? e._f("timeFormat")(t.useTimeEnd) : null
              }
            })),
            d = !e.modelType && e.actUserInfo ? e.touristNumText(e.actUserInfo.num, e.actUserInfo.userList.length) : null,
            h = e.modelType ? null : e.__map(e.commonUsedTouristList, (function(t, i) {
              return {
                $orig: e.__get_orig(t),
                g7: e.actUserInfo && e.actUserInfo.idList[0] && e.actUserInfo.idList.includes(t.id),
                g8: e.realCardTypeCodes.includes(t.cardType),
                m5: t.phone ? e.phoneFilter(t.phone) : null,
                f8: t.idCarNo ? e._f("cardNameFilter")(t.cardType) : null,
                m6: t.idCarNo ? e.idCarNoFilter(t.idCarNo) : null
              }
            })),
            f = e.modelType ? e._f("cardNameFilter")(e.passenger.cardType) : null,
            p = e.__map(e.priceInfo, (function(t, i) {
              return {
                $orig: e.__get_orig(t),
                f10: null != t.price ? e._f("peopleTypeFilter")(t.peopleType) : null
              }
            })),
            m = e.lineProductInfo.lineProductUseDescVO && e.lineProductInfo.lineProductUseDescVO.lineProductFeeInclusiveDTOS.length > 0,
            g = e.lineProductInfo.lineProductUseDescVO && e.lineProductInfo.lineProductUseDescVO.lineProductFeeInclusiveDTOS.length > 0,
            I = e.lineProductInfo.lineProductUseDescVO && e.lineProductInfo.lineProductUseDescVO.lineProductFeeExclusiveDTOS.length > 0;
          e._isMounted || (e.e0 = function(t) {
            e.showDetail = !e.showDetail
          }, e.e1 = function(t) {
            e.showDetail = !e.showDetail
          }, e.e2 = function(t) {
            e.showCardPop = !0
          }, e.e3 = function(t) {
            return e.confirm(t, e.selectData, e.otherIndex)
          }, e.e4 = function(t) {
            e.showCardPop = !1
          }), e.$mp.data = Object.assign({}, {
            $root: {
              m0: t,
              l0: i,
              m2: n,
              m3: o,
              l1: s,
              l2: r,
              g4: u,
              g5: a,
              g6: c,
              l3: l,
              m4: d,
              l4: h,
              f9: f,
              l5: p,
              g9: m,
              g10: g,
              g11: I
            }
          })
        },
        s = []
    }
  },
  [
    ["10f6", "common/runtime", "common/vendor", "subPack/common/vendor"]
  ]
]);
