require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPage/pages/snowGear/snowGear"], {
    "2d8c": function(e, i, t) {
      var s = t("a4c3");
      t.n(s).a
    },
    "59e1": function(e, i, t) {
      (function(e, i) {
        var s = t("47a9");
        t("5366"), s(t("3240"));
        var o = s(t("d76b"));
        e.__webpack_require_UNI_MP_PLUGIN__ = t, i(o.default)
      }).call(this, t("3223").default, t("df3c").createPage)
    },
    "7cc2": function(e, i, t) {
      (function(e) {
        Object.defineProperty(i, "__esModule", {
          value: !0
        }), i.default = void 0;
        var t = {
          data: function() {
            return {
              parseStyle: {
                p: "word-break: break-all;color: #b97d7d"
              },
              indicatorStyle: "height: 54px;",
              showPicker: !1,
              heightdisable: !1,
              thStyle: {
                height: 70
              },
              hours: ["8点", "9点", "10点", "11点", "12点", "13点", "14点", "15点", "16点", "17点", "18点", "19点", "20点"],
              minutes: ["30分"],
              num: 2,
              priceAmount: 0,
              shoesdisable: !1,
              closedisable: !1,
              records: [],
              userChoose: [],
              show: !1,
              shoeSize: [],
              clothesSize: [],
              changeList: [],
              userIndex: null,
              shoe: "",
              height: "",
              clothes: "",
              disabledSubmitBtn: !1,
              pageData: {},
              orderId: 0,
              hd: [0, 0],
              hour: "8点",
              minute: "30分",
              hourData: "",
              minuteData: "",
              dayTime: "",
              subscribeTime: "",
              maskType: 0,
              sid: "",
              bookinfo: {},
              initData: [{}]
            }
          },
          watch: {
            hourData: function(e) {
              this.minutes = "8点" == e ? ["30分"] : ["0分", "30分"]
            }
          },
          computed: {
            listchanged: function() {
              if (this.sid) {
                for (var e = this.userChoose, i = this.initData, t = !1, s = 0; s <= 6; s++)
                  for (var o = "id".concat(s + 1), n = 0; n < e.length; n++) e[n][o] != i[n][o] && (t = !0);
                return t
              }
              return !1
            }
          },
          onLoad: function(i) {
            this.orderId = i.orderId, i.sid && (this.sid = i.sid), e.createSelectorQuery().selectViewport().boundingClientRect().exec((function(e) {
              var i = e[0].width / 750 * 100;
              this.indicatorStyle = "height" + i + "px"
            }))
          },
          onShow: function() {
            this.pageLoad()
          },
          methods: {
            getGearRule: function(e) {
              switch (e) {
                case 1:
                case 2:
                case 3:
                  return "人";
                case 4:
                  return "套";
                case 5:
                  return "副";
                case 6:
                  return "双";
                case 7:
                  return "套";
                case 8:
                  return "个"
              }
            },
            getWeekDay: function(e) {
              return ["周日", "周一", "周二", "周三", "周四", "周五", "周六"][new Date(e).getDay()]
            },
            getBookinfo: function() {
              var e = this;
              this.$uniApi.dataRequestNoLoading("GET", "order/app/v1/orderSubscribe/getSubscribeInfoById?id=" + this.sid).then((function(i) {
                1 === i.code && (e.bookinfo = i.data, e.resetInfo(i.data))
              })).catch((function(e) {}))
            },
            resetInfo: function(e) {
              var i = this,
                t = this.records,
                s = [];
              e.forEach((function(e, o) {
                var n = {};
                n.userid = e.id, n.id1 = e.skiList[1];
                var a = t[0].childList.find((function(e) {
                  return e.id == n.id1
                }));
                0 != a.configType && (n.heightdisable = !0, n.dis1 = !0), n.name1 = a.configName, n.type1 = a.configType, n.value1 = e.skiHeight || "", n.id2 = e.shoesIdList[1];
                var r = t[1].childList.find((function(e) {
                  return e.id == n.id2
                }));
                0 != r.configType && (n.shoesdisable = !0, n.dis2 = !0), i.changeList = r.childList;
                var u = r.childList.find((function(i) {
                  return e.shoesIdList[2] == i.id
                })) || {};
                n.shoeList = u.childList, n.name2 = r.configName, n.type2 = r.configType, n.shoeList && n.shoeList[0] ? n.value2 = n.shoeList.find((function(i) {
                  return i.id == e.shoesIdList[3]
                })) : n.value2 = {}, n.id3 = e.helmetIdList[1];
                var h = t[2].childList.find((function(e) {
                  return e.id == n.id3
                }));
                0 != h.configType && (n.dis3 = !0), n.name3 = h.configName, n.type3 = h.configType, n.id4 = e.clothesIdList[1];
                var c = t[3].childList.find((function(e) {
                  return e.id == n.id4
                }));
                0 != c.configType && (n.closedisable = !0, n.dis4 = !0), n.name4 = c.configName, n.type4 = c.configType, n.clothesList = c.childList || [], n.clothesList && n.clothesList[0] ? n.value4 = n.clothesList.find((function(i) {
                  return i.id == e.clothesIdList[2]
                })) : n.value4 = {}, n.id5 = e.glassesIdList[1];
                var d = t[4].childList.find((function(e) {
                  return e.id == n.id5
                }));
                0 != d.configType && (n.dis5 = !0), n.name5 = d.configName, n.type5 = d.configType, n.id6 = e.gloveIdList[1];
                var l = t[5].childList.find((function(e) {
                  return e.id == n.id6
                }));
                0 != l.configType && (n.dis6 = !0), n.name6 = l.configName, n.type6 = l.configType, n.id7 = e.protectiveClothingIdList[1];
                var f = t[6].childList.find((function(e) {
                  return e.id == n.id7
                }));
                0 != f.configType && (n.dis7 = !0), n.name7 = f.configName, n.type7 = f.configType, i.shoeSize = n.shoeList || [], i.clothesSize = n.clothesList || [], i.height = n.value1 || "", i.shoe = n.value2 || {}, i.clothes = n.value4 || {}, s.push(n)
              })), this.userChoose = s, this.initData = JSON.parse(JSON.stringify(s))
            },
            inputNumber: function(e, i) {
              var t = this;
              i = i.target.value.match(/^\d*(\.?\d{0,2})/g)[0] || "";
              var s = t.userChoose[e];
              this.$nextTick((function() {
                s.value1 = i, t.userChoose.splice(e, 1, s)
              })), this.$forceUpdate()
            },
            pageLoad: function() {
              var e = this,
                i = {
                  orderId: this.orderId
                };
              this.$uniApi.dataRequestNoLoading("GET", "order/app/v1/orderSubscribe/getOrderSubscribeTemplate", i).then((function(i) {
                if (1 === i.code) {
                  var t = i.data;
                  e.priceAmount = t.peopleNum * t.deposit, e.pageData = i.data;
                  var s = e.pageData.ticketUseDate.split("-");
                  e.dayTime = s[1] + "月" + s[2] + "日", t.templateVoList.forEach((function(e) {
                    e.showMore = 0
                  })), e.userChoose = [];
                  for (var o = 0; o < t.peopleNum; o++) e.userChoose.push({});
                  if (e.records = t.templateVoList, e.sid) {
                    var n = t.subscribeTime.split(" ");
                    e.pageData.ticketUseDate = n[0], e.subscribeTime = n[1], e.getBookinfo()
                  }
                }
              })).catch((function(e) {}))
            },
            showMore: function(e) {
              var i = this.records[e];
              i.showMore = 0 == i.showMore ? 1 : 0, this.records.splice(e, 1, i)
            },
            getGearIcon: function(e) {
              return "https://eshopfile.zhiyousx.com/images/snow/snowGear0" + e + ".png"
            },
            submit: function() {
              var e = this.verify();
              e && (this.sid ? this.updatebookorder(e) : this.createOrder(e))
            },
            verify: function() {
              if (this.subscribeTime) {
                for (var e = this.userChoose, i = [], t = 0; t < this.records.length; t++) {
                  var s = this.records[t];
                  if (1 == s.configClass)
                    for (var o = 0; o < this.userChoose.length; o++) {
                      var n = this.userChoose[o];
                      if (!n.id1) return void this.$util.showToast("请选择预约人".concat(o + 1, "的雪板"));
                      if (0 != n.type1 && !n.value1) return void this.$util.showToast("请填写预约人".concat(o + 1, "的身高"));
                      0 == n.type1 && (n.value1 = "")
                    } else if (2 == s.configClass)
                      for (var a = 0; a < this.userChoose.length; a++) {
                        var r = this.userChoose[a];
                        if (!r.id2) return void this.$util.showToast("请选择预约人".concat(a + 1, "的鞋码"));
                        if (!(0 == r.type2 || r.value2 && r.value2.id)) return void this.$util.showToast("请选择预约人".concat(a + 1, "的鞋码"))
                      } else if (3 == s.configClass)
                        for (var u = 0; u < this.userChoose.length; u++) {
                          if (!this.userChoose[u].id3) return void this.$util.showToast("请选择预约人".concat(u + 1, "的头盔型号"))
                        } else if (4 == s.configClass)
                          for (var h = 0; h < this.userChoose.length; h++) {
                            var c = this.userChoose[h];
                            if (!c.id4) return void this.$util.showToast("请选择预约人".concat(h + 1, "的雪服尺码"));
                            if (!(0 == c.type4 || c.value4 && c.value4.id)) return void this.$util.showToast("请选择预约人".concat(h + 1, "的雪服尺码"))
                          } else if (5 == s.configClass)
                            for (var d = 0; d < this.userChoose.length; d++) {
                              if (!this.userChoose[d].id5) return void this.$util.showToast("请选择预约人".concat(d + 1, "的雪镜型号"))
                            } else if (6 == s.configClass)
                              for (var l = 0; l < this.userChoose.length; l++) {
                                if (!this.userChoose[l].id6) return void this.$util.showToast("请选择预约人".concat(l + 1, "的手套型号"))
                              } else if (7 == s.configClass)
                                for (var f = 0; f < this.userChoose.length; f++) {
                                  if (!this.userChoose[f].id7) return void this.$util.showToast("请选择预约人".concat(f + 1, "的护臂型号"))
                                }
                }
                return e.forEach((function(e, t) {
                  i.push({
                    skiId: e.id1 || "",
                    skiHeight: e.value1 || "",
                    shoesId: e.value2.id || e.id2,
                    helmetId: e.id3 || "",
                    clothesId: e.value4.id || e.id4,
                    glassesId: e.id5 || "",
                    gloveId: e.id6 || "",
                    protectiveClothingId: e.id7 || ""
                  })
                })), {
                  depositSum: this.priceAmount,
                  listDto: i,
                  orderId: this.orderId,
                  subscribeNumber: this.pageData.peopleNum,
                  subscribeProject: "雪具预约",
                  subscribeTime: this.pageData.ticketUseDate + " " + this.subscribeTime + ":00"
                }
              }
              this.$util.showToast("请选择预计到达时间")
            },
            createOrder: function(e) {
              var i = this;
              this.disabledSubmitBtn || (this.disabledSubmitBtn = !0, this.$uniApi.dataRequestYesLoading("POST", "order/app/v1/orderSubscribe/addOrderSubscribe", e, "预订中").then((function(e) {
                if (1 != e.code) return i.disabledSubmitBtn = !1, void i.$util.showToast(e.msg);
                i.subscribeId = e.data, i.goPay()
              })))
            },
            goPay: function() {
              var i = this;
              this.$uniApi.dataRequestYesLoading("POST", "order/app/v1/orderSubscribe/subscribeWaitPayToPay", {
                payChannel: "",
                subscribeId: this.subscribeId,
                openId: e.getStorageSync("userInfor").openId
              }, "支付中").then((function(t) {
                1 === t.code ? e.requestPayment({
                  timeStamp: t.data.timeStamp,
                  nonceStr: t.data.nonceStr,
                  package: "prepay_id=".concat(t.data.prepayid),
                  signType: t.data.signType,
                  paySign: t.data.pay_sign,
                  success: function(t) {
                    e.reLaunch({
                      url: "/subPage/pages/snowOrder/snowOrder?subscribeId=" + i.subscribeId
                    })
                  },
                  fail: function(t) {
                    console.log("fail:" + JSON.stringify(t)), e.reLaunch({
                      url: "/subPage/pages/snowOrder/snowOrder?subscribeId=" + i.subscribeId
                    })
                  }
                }) : i.$util.showToast(t.msg)
              }))
            },
            updatebookorder: function(i) {
              var t = this,
                s = i.listDto;
              this.initData.forEach((function(e, i) {
                s[i].id = e.userid
              }));
              var o = {
                listDto: s,
                orderId: this.orderId
              };
              this.$uniApi.dataRequestNoLoading("POST", "order/app/v1/orderSubscribe/editOrderSubscribe", o).then((function(i) {
                1 === i.code && (t.$util.showToast("预约修改已提交"), setTimeout((function() {
                  e.reLaunch({
                    url: "/subPage/pages/snowOrder/snowOrder?subscribeId=" + t.pageData.subscribeId
                  })
                }), 1e3))
              })).catch((function(e) {}))
            },
            choseShoe: function(e) {
              this.shoe = e
            },
            choseClothes: function(e) {
              this.clothes = e
            },
            selectItem: function(e, i, t, s, o) {
              var n = this.userChoose[t];
              if (s) {
                var a = JSON.parse(JSON.stringify(this.initData))[t]["id".concat(o.configClass)];
                if (0 != o.childList.find((function(e) {
                    return e.id == a
                  })).configType) return void this.$util.showToast("只能修改原自带装备")
              }
              if (2 != e || n.id1 && n.name1)
                if (2 != e || 0 == i.configType || 0 != n.type1) {
                  var r = "id" + e,
                    u = "name" + e;
                  n["type" + e] = i.configType, n[r] = i.id, n[u] = i.configName, 2 == e && (n.value2 = {}, this.changeList = i.childList, this.changeList.forEach((function(e) {
                    e.configName == n.name1 && (n.shoeList = e.childList)
                  }))), 1 == e && (n.id2 = "", n.name2 = "", n.type2 = "", n.value2 = {}), 4 == e && (n.value4 = {}, n.clothesList = i.childList), this.userChoose.splice(t, 1, n)
                } else this.$util.showToast("雪板选择自带雪鞋必须自带");
              else this.$util.showToast("请先选择雪板")
            },
            showPopup: function(e, i) {
              this.maskType = e, this.userIndex = i;
              var t = this.userChoose[i];
              this.shoeSize = t.shoeList || [], this.clothesSize = t.clothesList || [], this.height = t.value1 || "", this.shoe = t.value2 || {}, this.clothes = t.value4 || {}, this.show = !0
            },
            closeMask: function() {
              this.shoe = "", this.height = "", this.show = !1
            },
            chooseOver: function() {
              this.userChoose[this.userIndex].value1 = this.height, this.userChoose[this.userIndex].value2 = this.shoe, this.userChoose[this.userIndex].value4 = this.clothes, this.show = !1
            },
            openTime: function() {
              this.sid || (this.showPicker = !0)
            },
            closeTime: function() {
              this.showPicker = !1
            },
            bindTimeChange: function(e) {
              console.log(this.hd);
              var i = e.detail.value;
              this.hourData = this.hours[i[0]], this.minuteData = this.minutes[i[1]]
            },
            chooseTime: function() {
              this.hour = this.hourData || "8点", this.minute = this.minuteData || "30分";
              var e = this.hour.slice(0, this.hour.length - 1),
                i = this.minute.slice(0, this.minute.length - 1);
              Number(e) < 10 && (e = "0" + e), "30" != i && (i = "00"), "08" == e && (i = "30"), this.subscribeTime = e + ":" + i, this.showPicker = !1
            }
          }
        };
        i.default = t
      }).call(this, t("df3c").default)
    },
    "9d75": function(e, i, t) {
      t.r(i);
      var s = t("7cc2"),
        o = t.n(s);
      for (var n in s)["default"].indexOf(n) < 0 && function(e) {
        t.d(i, e, (function() {
          return s[e]
        }))
      }(n);
      i.default = o.a
    },
    a2b2: function(e, i, t) {
      t.d(i, "b", (function() {
        return o
      })), t.d(i, "c", (function() {
        return n
      })), t.d(i, "a", (function() {
        return s
      }));
      var s = {
          uParse: function() {
            return Promise.all([t.e("common/vendor"), t.e("uview-ui/components/u-parse/u-parse")]).then(t.bind(null, "7217"))
          },
          uPopup: function() {
            return t.e("uview-ui/components/u-popup/u-popup").then(t.bind(null, "39fb"))
          }
        },
        o = function() {
          var e = this,
            i = (e.$createElement, e._self._c, e.pageData.peopleNum ? e.__map(e.records, (function(i, t) {
              return {
                $orig: e.__get_orig(i),
                m0: e.getGearIcon(i.configClass),
                m1: i.price ? e.getGearRule(i.configClass) : null
              }
            })) : null),
            t = e.pageData.peopleNum ? e.getWeekDay(e.pageData.ticketUseDate) : null,
            s = e.pageData.peopleNum ? 1 == e.maskType && e.shoeSize && e.shoeSize.length > 0 : null,
            o = e.pageData.peopleNum ? 2 == e.maskType && e.clothesSize && e.clothesSize.length > 0 : null;
          e.$mp.data = Object.assign({}, {
            $root: {
              l0: i,
              m2: t,
              g0: s,
              g1: o
            }
          })
        },
        n = []
    },
    a4c3: function(e, i, t) {},
    d76b: function(e, i, t) {
      t.r(i);
      var s = t("a2b2"),
        o = t("9d75");
      for (var n in o)["default"].indexOf(n) < 0 && function(e) {
        t.d(i, e, (function() {
          return o[e]
        }))
      }(n);
      t("2d8c");
      var a = t("828b"),
        r = Object(a.a)(o.default, s.b, s.c, !1, null, "9aae6e9a", null, !1, s.a, void 0);
      i.default = r.exports
    }
  },
  [
    ["59e1", "common/runtime", "common/vendor"]
  ]
]);
