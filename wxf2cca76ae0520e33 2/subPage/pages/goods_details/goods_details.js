require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPage/pages/goods_details/goods_details"], {
    "0cd6": function(t, e, n) {
      n.d(e, "b", (function() {
        return i
      })), n.d(e, "c", (function() {
        return a
      })), n.d(e, "a", (function() {
        return o
      }));
      var o = {
          uniNavbar: function() {
            return n.e("components/uni-navbar/uni-navbar").then(n.bind(null, "101a"))
          },
          uSwiper: function() {
            return n.e("uview-ui/components/u-swiper/u-swiper").then(n.bind(null, "9840"))
          },
          uniIcons: function() {
            return Promise.all([n.e("common/vendor"), n.e("components/uni-icons/uni-icons")]).then(n.bind(null, "365b"))
          },
          uLazyLoad: function() {
            return n.e("uview-ui/components/u-lazy-load/u-lazy-load").then(n.bind(null, "5d7e"))
          },
          uParse: function() {
            return Promise.all([n.e("common/vendor"), n.e("uview-ui/components/u-parse/u-parse")]).then(n.bind(null, "7217"))
          },
          uniGoodsNav: function() {
            return n.e("components/uni-goods-nav/uni-goods-nav").then(n.bind(null, "ce12"))
          },
          uniPopup: function() {
            return Promise.all([n.e("common/vendor"), n.e("components/uni-popup/uni-popup")]).then(n.bind(null, "db3a"))
          },
          uEmpty: function() {
            return n.e("uview-ui/components/u-empty/u-empty").then(n.bind(null, "243d"))
          },
          uSkeleton: function() {
            return n.e("uview-ui/components/u-skeleton/u-skeleton").then(n.bind(null, "70d2"))
          },
          lPainter: function() {
            return Promise.all([n.e("common/vendor"), n.e("uni_modules/lime-painter/components/l-painter/l-painter")]).then(n.bind(null, "e6a4"))
          },
          lPainterImage: function() {
            return Promise.all([n.e("common/vendor"), n.e("uni_modules/lime-painter/components/l-painter-image/l-painter-image")]).then(n.bind(null, "c812"))
          },
          lPainterView: function() {
            return Promise.all([n.e("common/vendor"), n.e("uni_modules/lime-painter/components/l-painter-view/l-painter-view")]).then(n.bind(null, "cf27"))
          },
          lPainterText: function() {
            return Promise.all([n.e("common/vendor"), n.e("uni_modules/lime-painter/components/l-painter-text/l-painter-text")]).then(n.bind(null, "de46"))
          }
        },
        i = function() {
          var t = this,
            e = (t.$createElement, t._self._c, t.commodityInfo && 0 == t.commodityInfo.isDeleted && 0 != t.ticketDetailObj.seckillActivity && 0 === t.commodityInfo.productType ? t.combinations.length : null),
            n = t.commodityInfo && 0 == t.commodityInfo.isDeleted ? t._f("saleNumFormat")(t.commodityInfo.salesNum) : null,
            o = t.commodityInfo && 0 == t.commodityInfo.isDeleted ? t.couponArr.length : null,
            i = t.commodityInfo && 0 == t.commodityInfo.isDeleted && 1 != t.commodityInfo.isFictitious ? t.addressList.length : null,
            a = t.commodityInfo && 0 == t.commodityInfo.isDeleted ? t.notSalesList.length : null,
            s = t.commodityInfo && 0 == t.commodityInfo.isDeleted ? t.commentsList.length : null,
            r = t.commodityInfo && 0 == t.commodityInfo.isDeleted && s > 0 ? t.__map(t.commentsList, (function(e, n) {
              return {
                $orig: t.__get_orig(e),
                g5: e.picUrl.length
              }
            })) : null,
            c = t.commodityInfo && 0 == t.commodityInfo.isDeleted && 0 === t.popupType ? t.addressList.length : null,
            u = t.commodityInfo && 0 == t.commodityInfo.isDeleted && t.showYhMask ? t.__map(t.couponDetailArr, (function(e, n) {
              return {
                $orig: t.__get_orig(e),
                f1: e.useTimeSlot > 0 && 3 == e.couponStates ? t._f("timeFormat")(e.validityEndTime) : null,
                f2: e.useTimeSlot > 0 ? null : t._f("timeFormat")(e.validityStartTime),
                f3: e.useTimeSlot > 0 ? null : t._f("timeFormat")(e.validityEndTime)
              }
            })) : null;
          t._isMounted || (t.e0 = function(e) {
            t.postUrl = e
          }), t.$mp.data = Object.assign({}, {
            $root: {
              g0: e,
              f0: n,
              g1: o,
              g2: i,
              g3: a,
              g4: s,
              l0: r,
              g6: c,
              l1: u
            }
          })
        },
        a = []
    },
    "1fc1": function(t, e, n) {
      (function(t, o) {
        var i = n("47a9");
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var a = i(n("7eb4")),
          s = i(n("34cf")),
          r = i(n("ee10"));

        function c(t, e) {
          var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
          if (!n) {
            if (Array.isArray(t) || (n = function(t, e) {
                if (t) {
                  if ("string" == typeof t) return u(t, e);
                  var n = Object.prototype.toString.call(t).slice(8, -1);
                  return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, e) : void 0
                }
              }(t)) || e && t && "number" == typeof t.length) {
              n && (t = n);
              var o = 0,
                i = function() {};
              return {
                s: i,
                n: function() {
                  return o >= t.length ? {
                    done: !0
                  } : {
                    done: !1,
                    value: t[o++]
                  }
                },
                e: function(t) {
                  throw t
                },
                f: i
              }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }
          var a, s = !0,
            r = !1;
          return {
            s: function() {
              n = n.call(t)
            },
            n: function() {
              var t = n.next();
              return s = t.done, t
            },
            e: function(t) {
              r = !0, a = t
            },
            f: function() {
              try {
                s || null == n.return || n.return()
              } finally {
                if (r) throw a
              }
            }
          }
        }

        function u(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
          return o
        }
        var d = {
          components: {
            echoneSku: function() {
              n.e("subPage/components/echone-sku/echone-sku").then(function() {
                return resolve(n("a0f4"))
              }.bind(null, n)).catch(n.oe)
            },
            auiActionmenu: function() {
              n.e("subPage/components/aui-actionmenu/aui-actionmenu").then(function() {
                return resolve(n("470b"))
              }.bind(null, n)).catch(n.oe)
            },
            hchPoster: function() {
              n.e("subPage/components/hch-poster/hch-poster").then(function() {
                return resolve(n("9c7e"))
              }.bind(null, n)).catch(n.oe)
            },
            EmptyState: function() {
              n.e("subPage/components/empty/empty").then(function() {
                return resolve(n("3b7a"))
              }.bind(null, n)).catch(n.oe)
            }
          },
          data: function() {
            return {
              couponArr: [],
              couponDetailArr: [],
              daoJiShiObj: {},
              postUrl: "",
              ticketDetailObj: {},
              iconShow: !1,
              showPainter: !1,
              showYhMask: !1,
              isAndroid: !0,
              tapIndex: null,
              loadingStatus: !0,
              itemId: "",
              referenceId: "",
              encryptionId: "",
              commodityInfo: {
                isDeleted: 0
              },
              scrollTop: 0,
              navIdx: 0,
              popupType: 0,
              addressList: [],
              addresIdx: 0,
              addrId: "",
              parametersText: "",
              notSalesList: [],
              skuShow: !1,
              openIndex: 1,
              buyCount: 1,
              selectedIndex: 0,
              combinations: [],
              combinationsProps: {
                id: "skuId",
                value: "skuName",
                image: "defaultPicUrl",
                price: "price",
                stock: "skuStock"
              },
              unit: 0,
              specifications: [],
              specificationsProps: {
                id: "propId",
                name: "propVal",
                list: "list"
              },
              commentsList: [],
              optionsNav: [{
                icon: "/static/images/store.png",
                text: "店铺"
              }, {
                icon: "https://eshopfile.zhiyousx.com/170065368213433372.png",
                text: "购物车",
                infoBackgroundColor: "#ff4643"
              }, {
                icon: "/static/images/goodsshare.png",
                text: "分享"
              }],
              buttonGroup: [{
                text: "加入购物车",
                backgroundImage: "linear-gradient(52deg, #FFCC31 0%, #FF8830 100%)",
                color: "#fff"
              }, {
                text: "立即购买",
                backgroundImage: "linear-gradient(52deg, #FC4A7C 0%, #FF5411 100%)",
                color: "#fff"
              }],
              optionsNavlink: [{
                icon: "/static/images/store.png",
                text: "店铺"
              }, {
                icon: "/static/images/goodsshare.png",
                text: "分享"
              }],
              buttonGrouplink: [{
                text: "立即前往",
                backgroundImage: "linear-gradient(52deg, #FC4A7C 0%, #FF5411 100%)",
                color: "#fff"
              }],
              buttonGroupTicket: [{
                text: "立即购买",
                backgroundImage: "linear-gradient(52deg, #FC4A7C 0%, #FF5411 100%)",
                color: "#fff"
              }],
              buttonGroupXJ: [{
                text: "已下架",
                backgroundImage: "linear-gradient(52deg, #FFA3BD 0%, #FFB89C 100%);",
                color: "#fff"
              }],
              buttonGroupNoStock: [{
                text: "暂无库存",
                backgroundImage: "linear-gradient(52deg, #FFA3BD 0%, #FFB89C 100%);",
                color: "#fff"
              }],
              auiActionmenu: {
                theme: 1,
                location: "bottom",
                items: [{
                  name: "微信",
                  icon: "iconweixin",
                  iconColor: "#1AA034"
                }, {
                  name: "海报",
                  icon: "iconpengyouquan",
                  iconColor: "#EB3C3B"
                }]
              },
              canvasFlag: !1,
              posterData: {},
              codeUrl: "",
              parseStyle: {
                p: "word-break: break-all;",
                img: "display: block"
              },
              cashBackAmount: ""
            }
          },
          onLoad: function(e) {
            e.scene ? this.getScene(e.scene) : (e.itemId && (this.itemId = e.itemId), this.pageLoad(), t.getSystemInfoSync().system.indexOf("Android") > -1 || (this.isAndroid = !1))
          },
          onUnload: function() {
            this._timer && clearInterval(this._timer)
          },
          onShareAppMessage: function() {
            var t = "/subPage/pages/goods_details/goods_details?itemId=".concat(this.commodityInfo.itemId);
            return {
              title: this.commodityInfo.itemTitle,
              path: this.$util.setShareUrl(t),
              imageUrl: this.postUrl
            }
          },
          onPageScroll: function(t) {
            this.scrollTop = t.scrollTop, t.scrollTop > this.spxqTop ? this.navIdx = 1 : this.navIdx = 0
          },
          filters: {
            toFixed2: function(t) {
              return t ? Number(t).toFixed(2) : "0.00"
            },
            timeFormat: function(t) {
              return t.replace(/-/g, ".")
            }
          },
          computed: {
            popupTitle: function() {
              return 0 === this.popupType ? "配送" : 1 === this.popupType ? "提示" : "服务"
            },
            userInfo: function() {
              return this.$store.getters.userInfor
            },
            showFenxiao: function() {
              var t = this.userInfo;
              return t && t.isFenxiao || this.distributorId
            }
          },
          methods: {
            pageLoad: function() {
              this.getGoodsInfo(), this.getCouponDetail(), this.getCommentsList(), this.parameters(), t.getStorageSync("token") && (this.getAddress(), this.getEncryptParam())
            },
            getGoodsInfo: function() {
              var e = this;
              return (0, r.default)(a.default.mark((function n() {
                return a.default.wrap((function(n) {
                  for (;;) switch (n.prev = n.next) {
                    case 0:
                      return n.next = 2, e.getSkuByProperty();
                    case 2:
                      return e.combinations = n.sent, n.next = 5, e.getNotSellPropList();
                    case 5:
                      return e.notSalesList = n.sent, n.next = 8, e.getSellPropList();
                    case 8:
                      return e.specifications = n.sent, n.next = 11, e.getGoodsDetails();
                    case 11:
                      e.commodityInfo = n.sent, e.cashBackAmount = e.commodityInfo.cashBackAmount || 0, e.showPainter = !0, e.getCode(), e.$nextTick((function() {
                        var e = this;
                        t.createSelectorQuery().select("#spxq").boundingClientRect((function(t) {
                          e.spxqTop = t.top
                        })).exec()
                      })), e.getCoupon();
                    case 17:
                    case "end":
                      return n.stop()
                  }
                }), n)
              })))()
            },
            getCoupon: function() {
              var t = this;
              this.$uniApi.getRequestNoLoading("GET", "product/app/v1/itemActive/getItemCoupons/" + this.itemId).then((function(e) {
                var n = e.data || [],
                  o = 0,
                  i = [];
                if (n[0]) {
                  for (var a = 0; a < n.length; ++a) {
                    var s = n[a],
                      r = "",
                      c = 0,
                      u = String(s.couponAmount),
                      d = String(s.couponFullAmount);
                    if (s.couponFullAmount > 0 ? (r = "满".concat(d, "减").concat(u, "券"), c = 3) : (r = "".concat(u, "元无门槛券"), c = 5), (o += (r.length - c) / 2 + c) > 20) break;
                    i.push(s)
                  }
                  t.couponArr = i
                }
              }))
            },
            showCountDown: function(t) {
              var e = this;
              this._timer = setInterval((function() {
                var n = new Date;
                if (new Date(t.replace(/-/g, "/")).getTime() - n.getTime() <= 0) return clearInterval(e._timer), e.daoJiShiObj = {
                  hour: 0,
                  minute: 0,
                  second: 0
                }, void e.getGoodsInfo();
                e.daoJiShiObj = e.$util.countDown(t)
              }), 1e3)
            },
            getGoodsDetails: function() {
              var t = this;
              return new Promise((function(e, n) {
                t.$uniApi.getRequestNoLoading("GET", "product/app/v1/item/" + t.itemId).then((function(n) {
                  if (t.loadingStatus = !1, 1 === n.code) {
                    console.log(n.data), t.iconShow = !0;
                    var o = n.data.itemPicUrls.split(",");
                    n.data.itemPicUrls = [];
                    var i, a = c(o);
                    try {
                      for (a.s(); !(i = a.n()).done;) {
                        var s = i.value;
                        n.data.itemPicUrls.push({
                          image: s
                        })
                      }
                    } catch (t) {
                      a.e(t)
                    } finally {
                      a.f()
                    }
                    e(n.data)
                  }
                }))
              }))
            },
            getScene: function(t) {
              var e = this;
              this.$uniApi.getRequestNoLoading("GET", "manager/app/v1/qrCodeScene/getScene?sceneId=".concat(t)).then((function(t) {
                1 === t.code && (t.data.itemId ? e.itemId = t.data.itemId : e.itemId = t.data.scene.split("=")[1], e.referenceId = t.data.referenceId, e.$store.commit("SET_DISTRIBUTORID", t.data.referenceId), console.log("商品id", t.data.itemId), console.log("推广人id", t.data.referenceId), e.pageLoad())
              }))
            },
            onImgOK: function(t) {
              this.postUrl = t.path
            },
            getCode: function() {
              var t = this,
                e = this,
                n = {
                  scene: "itemId=".concat(this.commodityInfo.itemId, "&referenceId=").concat(this.userInfo.memberId),
                  itemId: this.commodityInfo.itemId,
                  referenceId: this.userInfo.memberId,
                  page: "subPage/pages/goods_details/goods_details"
                };
              this.$uniApi.dataRequestNoLoading("POST", "manager/app/wx/getminiLongSceneQr", n).then((function(n) {
                1 === n.code && (t.codeUrl = n.data.baseData, t.base64ToSave(n.data.baseData).then((function(t) {
                  e.codeUrl = t
                })))
              }))
            },
            base64ToSave: function(e) {
              var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "tmp_base64src",
                i = t.getFileSystemManager();
              return new Promise((function(t, a) {
                var r = /data:image\/(\w+);base64,(.*)/.exec(e) || [],
                  c = (0, s.default)(r, 3),
                  u = c[1],
                  d = c[2];
                u || a(new Error("ERROR_BASE64SRC_PARSE"));
                var l = "".concat(o.env.USER_DATA_PATH, "/").concat(n, ".").concat(u),
                  m = o.base64ToArrayBuffer(d);
                i.writeFile({
                  filePath: l,
                  data: m,
                  encoding: "binary",
                  success: function() {
                    t(l)
                  },
                  fail: function() {
                    a(new Error("ERROR_BASE64SRC_WRITE"))
                  }
                })
              }))
            },
            getCommentsList: function() {
              var t = this,
                e = {
                  current: 1,
                  size: 6,
                  itemId: this.itemId
                };
              this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/itemComment/getListByItemId", e).then((function(e) {
                if (1 === e.code) {
                  var n = e.data.page.records;
                  n.length > 0 && (n.forEach((function(t) {
                    t.createTime = t.createTime.slice(0, 9), t.picUrl ? t.picUrl = t.picUrl.split(",") : t.picUrl = []
                  })), t.commentsList = n)
                }
              }))
            },
            parameters: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/sysParam/getInfo", {
                paramKey: "ITEM_SERVICE"
              }).then((function(e) {
                1 === e.code && (t.parametersText = e.data[0])
              }))
            },
            getSkuByProperty: function() {
              var t = this;
              return new Promise((function(e, n) {
                t.$uniApi.dataRequestNoLoading("GET", "product/app/v1/sku", {
                  current: 1,
                  size: 5999,
                  itemId: t.itemId
                }).then((function(t) {
                  1 === t.code && (t.data.records.forEach((function(t) {
                    t.skuStock = t.skuStock ? t.skuStock : 0, t.skuName = t.skuName ? t.skuName.trim().split(" ").join(",") : ""
                  })), e(t.data.records))
                }))
              }))
            },
            getSellPropList: function() {
              var t = this;
              return new Promise((function(e, n) {
                t.$uniApi.getRequestNoLoading("GET", "product/app/v1/skuItemPropRel/propList/" + t.itemId).then((function(t) {
                  if (1 === t.code) {
                    if (t.data.length > 0) {
                      var n, o = c(t.data);
                      try {
                        for (o.s(); !(n = o.n()).done;) {
                          var i = n.value;
                          i.list = [];
                          var a, s = c(i.optionVals);
                          try {
                            for (s.s(); !(a = s.n()).done;) {
                              var r = a.value;
                              i.list.push(r.optionVal)
                            }
                          } catch (t) {
                            s.e(t)
                          } finally {
                            s.f()
                          }
                        }
                      } catch (t) {
                        o.e(t)
                      } finally {
                        o.f()
                      }
                    }
                    e(t.data)
                  }
                }))
              }))
            },
            getNotSellPropList: function() {
              var t = this;
              return new Promise((function(e, n) {
                t.$uniApi.getRequestNoLoading("GET", "product/app/v1/skuItemPropRel/getNotSellPropList/" + t.itemId).then((function(t) {
                  1 === t.code && e(t.data)
                }))
              }))
            },
            getAddress: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "manager/app/v1/memberDeliveryAddress", {
                current: 1,
                size: 5999,
                memberId: this.userInfo.memberId
              }).then((function(e) {
                1 === e.code && (t.addressList = e.data.records, t.addressList.length > 0 && (t.addrId = t.addressList[t.addresIdx].addrId))
              }))
            },
            getEncryptParam: function() {
              var t = this;
              this.$uniApi.getRequestNoLoading("GET", "manager/app/v1/member/getEncryptParam").then((function(e) {
                1 === e.code && (t.encryptionId = e.data)
              }))
            },
            getShopCartNum: function() {
              var t = this;
              this.$uniApi.getRequestNoLoading("GET", "product/app/v1/cartInfo/getMemberCart").then((function(e) {
                1 === e.code && t.$store.commit("SET_ORDERENSURE", e.data.cartItemNum)
              }))
            },
            selectOrerAddr: function(t) {
              var e = this;
              this.$uniApi.dataRequestNoLoading("POST", "manager/app/v1/memberDeliveryAddress/updateFlag", {
                addrId: this.addrId,
                memberId: this.userInfo.memberId
              }).then((function(n) {
                1 === n.code && e.$navigateTo({
                  url: "/subPage/pages/affirm_order/affirm_order?type=0&skuId=".concat(t.skuId, "&quantity=").concat(t.count, "&shareMemberId=").concat(e.referenceId)
                })
              }))
            },
            handleOpen: function(t) {
              this.skuShow = !0, this.$refs.echoneSku.initSkuData(), this.openIndex = t
            },
            handleClose: function(t) {
              this.selectedIndex = t.selectedIndex, this.buyCount = t.buyCount, this.skuShow = !1
            },
            addShop: function(t) {
              this.selectedIndex = t.selectedIndex, this.buyCount = t.buyCount
            },
            handleConfirm: function(t) {
              this.$util.isLogin() && ("skuBuy" === t.skuBuy ? 0 === this.openIndex ? this.addCart() : this.addrId ? this.selectOrerAddr(t) : this.$navigateTo({
                url: "/subPage/pages/affirm_order/affirm_order?type=0&skuId=".concat(t.skuId, "&quantity=").concat(t.count, "&shareMemberId=").concat(this.referenceId)
              }) : this.handleOpen(t.index))
            },
            buttonClick: function(t) {
              console.log(t), 0 === t.index ? this.$navigateTo({
                url: "/subPage/pages/storeshop/storeshop?sellerId=".concat(this.commodityInfo.sellerId)
              }) : 1 === t.index ? this.$util.isLogin() && (1 === this.commodityInfo.isFictitious ? this.$refs.actionmenu.show() : this.$navigateTo({
                url: "/subPage/pages/shopcart/shopcart"
              })) : this.$util.isLogin() && this.$refs.actionmenu.show()
            },
            actionmenuCallback: function(t) {
              var e = this;
              2 === t.index && this.$store.dispatch("PushMessage").then((function(t) {
                e.createCanvasImageEvn()
              }))
            },
            canvasCancel: function(t) {
              this.canvasFlag = t
            },
            createCanvasImageEvn: function() {
              var t = this,
                e = this.commodityInfo.videoUrls[0].picUrl ? this.commodityInfo.videoUrls[0].picUrl : this.commodityInfo.defaultPicUrl,
                n = this.commodityInfo.minPrice;
              Object.assign(this.posterData, {
                url: e,
                title: this.commodityInfo.itemTitle,
                discountPrice: n,
                code: this.codeUrl
              }), this.$forceUpdate(), setTimeout((function() {
                t.canvasFlag = !0, t.$refs.hchPoster.createCanvasImage()
              }), 500)
            },
            isAddShop: function() {
              var t = this,
                e = this.combinations[this.selectedIndex].skuId,
                n = {
                  skuId: e,
                  quantity: this.buyCount
                };
              this.$uniApi.getRequestNoLoading("GET", "product/app/v1/cartInfo/getMemberCart").then((function(o) {
                if (1 === o.code) {
                  var i = [];
                  o.data.cartItemInfo.split("|").forEach((function(t) {
                    i.push(t.split(","))
                  })), i.some((function(t) {
                    return t[0] === e
                  })) ? t.$util.showToast("您已经添加过购物车了") : t.addCart(n)
                } else t.addCart(n)
              })).catch((function(e) {
                t.$util.showToast(e.msg)
              }))
            },
            addCart: function() {
              var t = this,
                e = this.combinations[this.selectedIndex].skuId;
              this.$uniApi.getRequestYesLoading("POST", "product/app/v1/cartInfo/addCart?skuId=".concat(e, "&quantity=").concat(this.buyCount, "&shareMemberId=").concat(this.referenceId), "加入中...").then((function(e) {
                1 === e.code ? (t.$store.commit("SET_ORDERENSURE", t.cardNum + 1), t.$util.showSuccessToast("已加入购物车"), t.skuShow = !1) : t.$util.showToast(e.msg)
              })).catch((function(e) {
                t.$util.showToast(e.msg)
              }))
            },
            favBtn: function() {
              var t = this;
              if (this.$util.isLogin()) {
                var e = {
                  itemId: this.itemId,
                  memberId: this.userInfo.memberId,
                  sellerId: this.commodityInfo.sellerId,
                  skuId: 0 == this.commodityInfo.productType ? this.combinations[this.selectedIndex].skuId : ""
                };
                this.$uniApi.dataRequestNoLoading("PUT", "manager/app/v1/memberFavoriteSku", e).then((function(e) {
                  1 === e.code ? 1 === t.commodityInfo.favorite ? (t.commodityInfo.favorite = 0, t.$util.showToast("已取消收藏")) : (t.commodityInfo.favorite = 1, t.$util.showSuccessToast("已收藏")) : t.$util.showToast(e.msg)
                })).catch((function(e) {
                  t.$util.showToast(e.msg)
                }))
              }
            },
            nabBtn: function(e) {
              this.navIdx = e, 0 === e ? t.pageScrollTo({
                scrollTop: 0,
                duration: 300
              }) : 1 === e && t.pageScrollTo({
                scrollTop: this.spxqTop,
                duration: 300
              })
            },
            openPopup: function(t) {
              this.popupType = t, 0 === t ? this.$util.isLogin() && this.$refs.popup.open() : this.$refs.popup.open()
            },
            closePopup: function() {
              this.$refs.popup.close()
            },
            radioChange: function(t) {
              var e = this;
              this.addrId = t.target.value, this.addressList.forEach((function(n, o) {
                n.addrId === t.target.value && (e.addresIdx = o)
              })), this.$refs.popup.close()
            },
            swiperBtn: function(e) {
              var n = [];
              this.commodityInfo.itemPicUrls.forEach((function(t) {
                n.push(t.image)
              })), t.previewImage({
                current: e,
                urls: n
              })
            },
            commentsBtn: function(e, n) {
              t.previewImage({
                current: n,
                urls: e
              })
            },
            makePhoneCall: function() {
              t.makePhoneCall({
                phoneNumber: this.parametersText.paramValue
              })
            },
            goAddress: function() {
              this.$navigateTo({
                url: "/subPack/pages/addaddress/addaddress"
              })
            },
            goComments: function() {
              this.$navigateTo({
                url: "/subPage/pages/commentslist/commentslist?itemId=".concat(this.itemId)
              })
            },
            goLink: function(e) {
              0 === e.index && (0 === this.commodityInfo.fictitiousResource ? this.$navigateTo({
                url: "/pages/webpage/webpage?url=".concat(this.commodityInfo.fictitiousUrl)
              }) : 1 === this.commodityInfo.fictitiousResource && t.openEmbeddedMiniProgram({
                appId: this.commodityInfo.miniAppId,
                path: this.commodityInfo.fictitiousUrl,
                success: function(t) {
                  console.log("打开小程序成功", t)
                },
                fail: function(t) {
                  console.log("打开小程序失败", t)
                }
              }))
            },
            goFillOrder: function() {
              var t = this.commodityInfo.itemId,
                e = "/subPage/pages/ticketFillOrder/ticketFillOrder?ticketId=".concat(t);
              this.$util.isLogin(e) && this.$navigateTo({
                url: e
              })
            },
            showMore: function(t) {
              this.tapIndex != t ? this.tapIndex = t : this.tapIndex = null
            },
            showYh: function() {
              this.showYhMask = !this.showYhMask, this.showYhMask && this.getCouponDetail()
            },
            getCouponDetail: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("POST", "product/app/v1/CouponReceive/couponDetail", {
                itemId: this.itemId
              }).then((function(e) {
                t.couponDetailArr = e.data
              }))
            },
            receiveCoupon: function(t, e) {
              var n = this;
              this.$util.isLogin() && 1 == e && this.$uniApi.dataRequestNoLoading("POST", "product/app/v1/CouponReceive/receiveCoupon", {
                couponId: t
              }).then((function(t) {
                1 == t.code ? n.getCouponDetail() : (n.$util.showToast("已抢光"), n.getCouponDetail(), n.getCoupon())
              }))
            }
          }
        };
        e.default = d
      }).call(this, n("df3c").default, n("3223").default)
    },
    "7aea": function(t, e, n) {
      n.r(e);
      var o = n("0cd6"),
        i = n("d558");
      for (var a in i)["default"].indexOf(a) < 0 && function(t) {
        n.d(e, t, (function() {
          return i[t]
        }))
      }(a);
      n("babb");
      var s = n("828b"),
        r = Object(s.a)(i.default, o.b, o.c, !1, null, "286ae0e6", null, !1, o.a, void 0);
      e.default = r.exports
    },
    b7e2: function(t, e, n) {},
    babb: function(t, e, n) {
      var o = n("b7e2");
      n.n(o).a
    },
    d558: function(t, e, n) {
      n.r(e);
      var o = n("1fc1"),
        i = n.n(o);
      for (var a in o)["default"].indexOf(a) < 0 && function(t) {
        n.d(e, t, (function() {
          return o[t]
        }))
      }(a);
      e.default = i.a
    },
    f12c: function(t, e, n) {
      (function(t, e) {
        var o = n("47a9");
        n("5366"), o(n("3240"));
        var i = o(n("7aea"));
        t.__webpack_require_UNI_MP_PLUGIN__ = n, e(i.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    }
  },
  [
    ["f12c", "common/runtime", "common/vendor"]
  ]
]);
