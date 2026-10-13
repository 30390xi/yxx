require("../../@babel/runtime/helpers/Arrayincludes"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPack/common/vendor"], {
    3352: function(e, t) {
      e.exports = function(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
      }, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    4965: function(e, t) {
      e.exports = function(e) {
        try {
          return -1 !== Function.toString.call(e).indexOf("[native code]")
        } catch (t) {
          return "function" == typeof e
        }
      }, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    "4ffb": function(e, t, n) {
      var a = n("3b2d").default,
        r = n("3352");
      e.exports = function(e, t) {
        if (t && ("object" === a(t) || "function" == typeof t)) return t;
        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
        return r(e)
      }, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    "6e5d": function(e, t, n) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0, t.default = {
        appid: "__UNI__1C04DEB"
      }
    },
    "714a": function(e, t, n) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0, t.default = {
        pages: [{
          path: "pages/index/index",
          style: {
            navigationBarTitleText: " ",
            enablePullDownRefresh: !0,
            navigationStyle: "custom",
            "mp-alipay": {
              transparentTitle: "always",
              titlePenetrate: "YES"
            }
          }
        }, {
          path: "pages/ranking/ranking",
          style: {
            navigationStyle: "custom",
            backgroundColor: "#FFFFFF",
            navigationBarBackgroundColor: "#FFFFFF",
            "mp-alipay": {
              transparentTitle: "always",
              titlePenetrate: "YES",
              allowsBounceVertical: "NO"
            }
          }
        }, {
          path: "pages/rankList/rankList",
          style: {
            enablePullDownRefresh: !1,
            navigationStyle: "custom",
            backgroundColor: "#FFFFFF",
            "mp-alipay": {
              transparentTitle: "always",
              titlePenetrate: "YES",
              allowsBounceVertical: "NO"
            }
          }
        }, {
          path: "pages/spotDetailNew/spotDetailNew",
          style: {
            enablePullDownRefresh: !1,
            navigationStyle: "custom",
            backgroundColor: "#FFFFFF",
            "mp-alipay": {
              transparentTitle: "always",
              titlePenetrate: "YES",
              allowsBounceVertical: "NO"
            }
          }
        }, {
          path: "pages/spotMedia/spotMedia",
          style: {
            navigationStyle: "custom",
            backgroundColor: "#FFFFFF",
            navigationBarBackgroundColor: "#FFFFFF"
          }
        }, {
          path: "pages/spotContentList/spotContentList",
          style: {
            navigationStyle: "custom",
            backgroundColor: "#FFFFFF",
            navigationBarBackgroundColor: "#FFFFFF"
          }
        }, {
          path: "pages/spotThirdDetail/spotThirdDetail",
          style: {
            navigationStyle: "custom",
            backgroundColor: "#FFFFFF",
            "mp-alipay": {
              transparentTitle: "always",
              titlePenetrate: "YES",
              allowsBounceVertical: "NO"
            }
          }
        }, {
          path: "pages/calendarPage/calendarPage",
          style: {
            navigationBarTitleText: "选择日期",
            navigationBarBackgroundColor: "#FFFFFF"
          }
        }, {
          path: "pages/wxLogin/wxLogin",
          style: {
            navigationStyle: "custom",
            backgroundColor: "#FFFFFF",
            navigationBarBackgroundColor: "#FFFFFF",
            "mp-alipay": {
              transparentTitle: "always",
              titlePenetrate: "YES",
              allowsBounceVertical: "NO"
            }
          }
        }, {
          path: "pages/spotIntro/spotIntro",
          style: {
            navigationStyle: "custom",
            backgroundColor: "#FFFFFF"
          }
        }, {
          path: "pages/spot_list/spot_list",
          style: {
            navigationStyle: "custom",
            backgroundColor: "#FFFFFF",
            enablePullDownRefresh: !1,
            "mp-alipay": {
              transparentTitle: "always",
              allowsBounceVertical: "NO",
              titlePenetrate: "YES"
            }
          }
        }, {
          path: "pages/mine/mine",
          style: {
            navigationStyle: "custom",
            "mp-alipay": {
              transparentTitle: "always",
              titlePenetrate: "YES",
              allowsBounceVertical: "NO"
            }
          }
        }, {
          path: "pages/myorder/myorder",
          style: {
            navigationBarTitleText: "我的订单",
            navigationBarBackgroundColor: "#FFFFFF",
            enablePullDownRefresh: !0
          }
        }, {
          path: "pages/refundRecord/refundRecord",
          style: {
            navigationBarTitleText: "退款详情",
            navigationBarBackgroundColor: "#FFFFFF"
          }
        }, {
          path: "pages/order_details/order_details",
          style: {
            navigationBarTitleText: "订单详情",
            navigationBarBackgroundColor: "#FFFFFF",
            enablePullDownRefresh: !0
          }
        }, {
          path: "pages/detailed/detailed",
          style: {
            navigationBarTitleText: "明细"
          }
        }, {
          path: "pages/security/security",
          style: {
            navigationBarTitleText: "安全中心",
            navigationBarBackgroundColor: "#FFFFFF"
          }
        }, {
          path: "pages/setpassword/setpassword",
          style: {
            navigationBarTitleText: "设置提现密码",
            navigationBarBackgroundColor: "#FFFFFF"
          }
        }, {
          path: "pages/setpassword1/setpassword1",
          style: {
            navigationBarTitleText: "设置提现密码",
            navigationBarBackgroundColor: "#FFFFFF"
          }
        }, {
          path: "pages/login/login",
          style: {
            navigationStyle: "custom",
            navigationBarBackgroundColor: "#000000",
            backgroundColor: "#FFFFFF",
            "mp-alipay": {
              transparentTitle: "always",
              titlePenetrate: "YES",
              allowsBounceVertical: "NO"
            }
          }
        }, {
          path: "pages/register/register",
          style: {
            navigationStyle: "custom",
            navigationBarTitleText: " ",
            navigationBarBackgroundColor: "#FFFFFF",
            backgroundColor: "#FFFFFF"
          }
        }, {
          path: "pages/settleaccounts/settleaccounts",
          style: {
            navigationBarTitleText: "返利入账详情"
          }
        }, {
          path: "pages/ordertracking/ordertracking",
          style: {
            navigationBarTitleText: "订单跟踪",
            navigationBarBackgroundColor: "#FFFFFF"
          }
        }, {
          path: "pages/systemnotice/systemnotice",
          style: {
            navigationBarTitleText: "系统通知",
            navigationBarBackgroundColor: "#FFFFFF",
            enablePullDownRefresh: !0
          }
        }, {
          path: "pages/webpage/webpage",
          style: {
            navigationBarTitleText: " ",
            navigationBarBackgroundColor: "#FFFFFF"
          }
        }, {
          path: "pages/richtext/richtext",
          style: {
            navigationBarTitleText: "",
            navigationBarBackgroundColor: "#FFFFFF"
          }
        }, {
          path: "pages/termsservice/termsservice",
          style: {
            navigationBarTitleText: "服务条款",
            navigationBarBackgroundColor: "#FFFFFF"
          }
        }, {
          path: "pages/noticedetails/noticedetails",
          style: {
            navigationBarTitleText: "通告详情",
            navigationBarBackgroundColor: "#FFFFFF"
          }
        }, {
          path: "pages/videoList/videoList",
          style: {
            navigationStyle: "custom",
            backgroundColor: "#FFFFFF",
            enablePullDownRefresh: !1,
            "mp-alipay": {
              transparentTitle: "always",
              titlePenetrate: "YES",
              allowsBounceVertical: "NO"
            }
          }
        }],
        subPackages: [{
          root: "yearCard",
          pages: [{
            path: "pages/index/index",
            style: {
              navigationStyle: "custom",
              navigationBarTitleText: "年卡",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/reservation/reservation",
            style: {
              navigationStyle: "custom",
              backgroundColor: "#FFFFFF",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/myCard/myCard",
            style: {
              navigationBarTitleText: "卡包",
              navigationStyle: "custom",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/cardRecord/cardRecord",
            style: {
              navigationBarTitleText: "使用记录",
              navigationStyle: "custom",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/reservationDetail/reservationDetail",
            style: {
              navigationBarTitleText: "预约详情",
              navigationStyle: "custom",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/exchangeCard/exchangeCard",
            style: {
              navigationBarTitleText: "兑换绑定",
              navigationStyle: "custom",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/activationCard/activationCard",
            style: {
              navigationBarTitleText: "激活使用",
              navigationStyle: "custom",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/entryGarden/entryGarden",
            style: {
              navigationBarTitleText: "入园",
              navigationStyle: "custom",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/shopList/shopList",
            style: {
              navigationBarTitleText: "年卡商家列表",
              navigationStyle: "custom",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/cardMap/cardMap",
            style: {
              navigationBarTitleText: "年卡地图",
              navigationStyle: "custom",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/badge/badge",
            style: {
              enablePullDownRefresh: !1,
              navigationStyle: "custom"
            }
          }, {
            path: "pages/nfcVideo/nfcVideo",
            style: {
              navigationStyle: "custom",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/nfcVideo/nfcCase",
            style: {
              navigationStyle: "custom",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/nfcVideo/nfcDetail",
            style: {
              navigationStyle: "custom",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/nfcVideo/jz",
            style: {
              navigationStyle: "custom",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/teamNFC/index",
            style: {
              navigationStyle: "custom",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/teamNFC/album",
            style: {
              navigationStyle: "custom",
              enablePullDownRefresh: !1,
              renderer: "skyline",
              componentFramework: "glass-easel"
            }
          }, {
            path: "pages/teamNFC/line",
            style: {
              navigationStyle: "custom",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/teamNFC/detail",
            style: {
              navigationStyle: "custom",
              enablePullDownRefresh: !1,
              renderer: "skyline",
              componentFramework: "glass-easel"
            }
          }, {
            path: "pages/nfcVideo/dnfAlbum",
            style: {
              navigationStyle: "custom",
              enablePullDownRefresh: !1,
              renderer: "skyline",
              componentFramework: "glass-easel"
            }
          }, {
            path: "pages/nfcVideo/dnfAct",
            style: {
              navigationStyle: "custom",
              enablePullDownRefresh: !1
            }
          }]
        }, {
          root: "subPack",
          pages: [{
            path: "pages/findpassword/findpassword",
            style: {
              navigationBarTitleText: "找回密码",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/evaluate/evaluate",
            style: {
              navigationBarTitleText: "评价"
            }
          }, {
            path: "pages/edition/edition",
            style: {
              navigationBarTitleText: "版本更新"
            }
          }, {
            path: "pages/news/news",
            style: {
              navigationBarTitleText: "消息",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/contentList/contentList",
            style: {
              navigationStyle: "custom",
              backgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/zhuanti/zhuanti",
            style: {
              navigationStyle: "custom",
              backgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/collection/collection",
            style: {
              navigationBarTitleText: "我的收藏",
              navigationBarBackgroundColor: "#FFFFFF",
              enablePullDownRefresh: !0
            }
          }, {
            path: "pages/article/article",
            style: {
              navigationStyle: "custom",
              backgroundColor: "#FFFFFF",
              navigationBarBackgroundColor: "#FFFFFF",
              "mp-alipay": {
                transparentTitle: "always",
                titlePenetrate: "YES",
                allowsBounceVertical: "NO"
              }
            }
          }, {
            path: "pages/aftersales/aftersales",
            style: {
              navigationBarTitleText: "退换/售后",
              enablePullDownRefresh: !0,
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/aftercontent/aftercontent",
            style: {
              navigationBarTitleText: "提交原因",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/address/address",
            style: {
              navigationBarTitleText: "收货地址",
              enablePullDownRefresh: !0,
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/guide/mapSpotDetail",
            style: {
              navigationBarTitleText: "详情",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/ticketPay/ticketPay",
            style: {
              navigationBarTitleText: "确认订单",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/refundApply/refundApply",
            style: {
              navigationBarTitleText: "申请退款",
              navigationBarBackgroundColor: "#FFFFFF",
              enablePullDownRefresh: !0
            }
          }, {
            path: "pages/addaddress/addaddress",
            style: {
              navigationBarTitleText: "收货地址管理",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/guide/mapSpotList",
            style: {
              navigationBarTitleText: "语音讲解",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/guide/webpage",
            style: {
              navigationBarTitleText: " ",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/mapSpotDetail/mapSpotDetail",
            style: {
              navigationBarTitleText: "详情",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/mapSpotList/mapSpotList",
            style: {
              navigationBarTitleText: "景区介绍",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/guide/ecsList",
            style: {
              navigationBarTitleText: "语音讲解",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/guide/ecsDetail",
            style: {
              navigationBarTitleText: "详情",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/protocol/protocol",
            style: {
              navigationBarTitleText: "隐私协议",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/activity/act0320",
            style: {
              navigationStyle: "custom",
              backgroundColor: "#FFFFFF",
              "mp-alipay": {
                transparentTitle: "always",
                titlePenetrate: "YES",
                allowsBounceVertical: "NO"
              }
            }
          }, {
            path: "pages/activity/bingfeng",
            style: {
              navigationBarTitleText: "冰峰×游陕西",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/appPay/appPay",
            style: {
              navigationBarTitleText: "支付",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/appPay/appPayQr",
            style: {
              navigationBarTitleText: "支付",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/hotelIntro/hotelIntro",
            style: {
              enablePullDownRefresh: !1,
              navigationStyle: "custom",
              backgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/tripInfo/tripInfo",
            style: {
              navigationBarTitleText: "行程明细",
              navigationBarBackgroundColor: "#FFFFFF",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/fillInOrder/fillInOrder",
            style: {
              enablePullDownRefresh: !1,
              navigationStyle: "custom",
              backgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/lineResource/lineResource",
            style: {
              navigationStyle: "custom",
              backgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/groupRegistration/groupRegistration",
            style: {
              navigationBarTitleText: "组团报名",
              navigationBarBackgroundColor: "#FFFFFF",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/lineProductDetails/lineProductDetails",
            style: {
              navigationStyle: "custom",
              enablePullDownRefresh: !1,
              "mp-alipay": {
                transparentTitle: "always",
                titlePenetrate: "YES",
                allowsBounceVertical: "NO"
              }
            }
          }, {
            path: "pages/photoWall/photoWall",
            style: {
              navigationStyle: "custom",
              navigationBarBackgroundColor: "#FFFFFF",
              "mp-alipay": {
                transparentTitle: "always",
                titlePenetrate: "YES",
                allowsBounceVertical: "NO"
              }
            }
          }, {
            path: "pages/lineList/lineList",
            style: {
              navigationStyle: "custom",
              backgroundColor: "#F5F5F5",
              navigationBarBackgroundColor: "#FFFFFF",
              "mp-alipay": {
                transparentTitle: "always",
                titlePenetrate: "YES",
                allowsBounceVertical: "NO"
              }
            }
          }, {
            path: "pages/groupOrder/groupOrder",
            style: {
              navigationStyle: "custom",
              backgroundColor: "#F5F5F5",
              "mp-alipay": {
                transparentTitle: "always",
                titlePenetrate: "YES",
                allowsBounceVertical: "NO"
              }
            }
          }, {
            path: "pages/groupOrder/collectCoupons",
            style: {
              navigationBarTitleText: "领券更便宜",
              navigationBarBackgroundColor: "#FFFFFF",
              enablePullDownRefresh: !0
            }
          }, {
            path: "pages/groupOrder/availableProducts",
            style: {
              navigationBarTitleText: "可用产品",
              navigationBarBackgroundColor: "#FFFFFF",
              enablePullDownRefresh: !0
            }
          }, {
            path: "pages/travelAgency/travelAgency",
            style: {
              navigationStyle: "custom",
              backgroundColor: "#FFFFFF",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/tourGuide/tourGuide",
            style: {
              navigationStyle: "custom",
              backgroundColor: "#FFFFFF",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/lineOrderDetail/lineOrderDetail",
            style: {
              navigationBarTitleText: "订单详情",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/lineRefundApply/lineRefundApply",
            style: {
              navigationBarTitleText: "申请退款",
              navigationBarBackgroundColor: "#FFFFFF",
              enablePullDownRefresh: !0
            }
          }, {
            path: "pages/live/liveList",
            style: {
              navigationBarTitleText: "直播",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/live/liveDetail",
            style: {
              navigationBarTitleText: "直播",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/city/city",
            style: {
              enablePullDownRefresh: !0,
              navigationStyle: "custom"
            }
          }]
        }, {
          root: "subPage",
          pages: [{
            path: "pages/searchpage/searchpage",
            style: {
              navigationBarTitleText: "搜索",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/affirm_order/affirm_order",
            style: {
              navigationBarTitleText: "确认订单",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/about/about",
            style: {
              navigationBarTitleText: "关于商城",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/waterfall/waterfall",
            style: {
              navigationStyle: "custom",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/discountsProductList/discountsProductList",
            style: {
              navigationStyle: "custom",
              enablePullDownRefresh: !0,
              navigationBarBackgroundColor: "#000000",
              "mp-alipay": {
                transparentTitle: "always",
                titlePenetrate: "YES",
                allowsBounceVertical: "NO"
              }
            }
          }, {
            path: "pages/searchOld/searchOld",
            style: {
              navigationBarTitleText: "搜索"
            }
          }, {
            path: "pages/goodslist/goodslist",
            style: {
              navigationStyle: "custom",
              "mp-alipay": {
                transparentTitle: "always",
                titlePenetrate: "YES",
                allowsBounceVertical: "NO"
              }
            }
          }, {
            path: "pages/shopcart/shopcart",
            style: {
              navigationStyle: "custom",
              enablePullDownRefresh: !0,
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/ticket_detail/ticket_detail",
            style: {
              navigationStyle: "custom",
              navigationBarBackgroundColor: "#FFFFFF",
              "mp-alipay": {
                transparentTitle: "always",
                titlePenetrate: "YES",
                allowsBounceVertical: "NO"
              }
            }
          }, {
            path: "pages/commentslist/commentslist",
            style: {
              navigationBarTitleText: "评论列表",
              enablePullDownRefresh: !0
            }
          }, {
            path: "pages/orderDetailtick/orderDetailtick",
            style: {
              navigationBarTitleText: "门票订单详情",
              navigationBarBackgroundColor: "#FFFFFF",
              navigationStyle: "custom",
              enablePullDownRefresh: !0
            }
          }, {
            path: "pages/storeshop/storeshop",
            style: {
              navigationStyle: "custom",
              enablePullDownRefresh: !0,
              "mp-alipay": {
                transparentTitle: "always",
                titlePenetrate: "YES",
                allowsBounceVertical: "NO"
              }
            }
          }, {
            path: "pages/myDiscounts/myDiscounts",
            style: {
              navigationBarTitleText: "我的优惠券",
              navigationBarBackgroundColor: "#FFFFFF",
              enablePullDownRefresh: !1,
              backgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/spotIntroNew/spotIntroNew",
            style: {
              navigationStyle: "custom",
              backgroundColor: "#FFFFFF",
              "mp-alipay": {
                transparentTitle: "always",
                titlePenetrate: "YES",
                allowsBounceVertical: "NO"
              }
            }
          }, {
            path: "pages/ticketFillOrder/ticketFillOrder",
            style: {
              navigationBarTitleText: "填写订单",
              navigationBarBackgroundColor: "#FFFFFF",
              enablePullDownRefresh: !0,
              "mp-weixin": {
                usingComponents: {
                  "student-verify": "plugin://studentVerify/verify"
                }
              }
            }
          }, {
            path: "pages/packPlaceOrder/packPlaceOrder",
            style: {
              navigationBarTitleText: "填写订单",
              navigationBarBackgroundColor: "#FFFFFF",
              enablePullDownRefresh: !0
            }
          }, {
            path: "pages/hotArea/hotArea",
            style: {
              navigationStyle: "custom",
              backgroundColor: "#FFFFFF",
              navigationBarBackgroundColor: "#FFFFFF",
              "mp-alipay": {
                transparentTitle: "always",
                titlePenetrate: "YES",
                allowsBounceVertical: "NO"
              }
            }
          }, {
            path: "pages/goods_details/goods_details",
            style: {
              navigationStyle: "custom",
              "mp-alipay": {
                transparentTitle: "always",
                titlePenetrate: "YES",
                allowsBounceVertical: "NO"
              }
            }
          }, {
            path: "pages/strategyList/strategyList",
            style: {
              navigationBarTitleText: " "
            }
          }, {
            path: "pages/changepassword/changepassword",
            style: {
              navigationBarTitleText: "修改登录密码",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/wealth/wealth",
            style: {
              navigationBarTitleText: "我的钱包",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/withdrawal/withdrawal",
            style: {
              navigationBarTitleText: "提现",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/strategy/strategy",
            style: {
              navigationBarTitleText: " ",
              enablePullDownRefresh: !1,
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/pictureWall/pictureWall",
            style: {
              navigationStyle: "custom",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/poster/poster",
            style: {
              navigationBarTitleText: " ",
              navigationBarBackgroundColor: "#339A81"
            }
          }, {
            path: "pages/monthposter/monthposter",
            style: {
              navigationBarTitleText: " ",
              navigationBarBackgroundColor: "#339A81"
            }
          }, {
            path: "pages/spotFilter/spotFilter",
            style: {
              backgroundColor: "#FFFFFF",
              navigationBarTitleText: "筛选",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/leaguemember/leaguemember",
            style: {
              navigationBarTitleText: "合作伙伴",
              navigationBarBackgroundColor: "#FFFFFF",
              enablePullDownRefresh: !0
            }
          }, {
            path: "pages/classify/classify",
            style: {
              navigationBarTitleText: "分类"
            }
          }, {
            path: "pages/feedback/feedback",
            style: {
              navigationBarTitleText: "问题反馈",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/vlog/vlog",
            style: {
              navigationStyle: "custom",
              navigationBarBackgroundColor: "#000000",
              "mp-alipay": {
                transparentTitle: "always",
                titlePenetrate: "YES",
                allowsBounceVertical: "NO"
              }
            }
          }, {
            path: "pages/snowGear/snowGear",
            style: {
              navigationBarTitleText: "雪具预约",
              navigationBarBackgroundColor: "#FFFFFF",
              backgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/snowOrder/snowOrder",
            style: {
              navigationBarTitleText: "订单详情",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/talent/talent",
            style: {
              navigationBarTitleText: "成为旅行达人",
              navigationBarBackgroundColor: "#FFFFFF",
              backgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/memberDetail/memberDetail",
            style: {
              navigationBarTitleText: "团员详情",
              navigationBarBackgroundColor: "#FFFFFF",
              backgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/giftCard/giftCard",
            style: {
              navigationBarTitleText: "礼品卡",
              navigationBarBackgroundColor: "#FFFFFF",
              backgroundColor: "#FFFFFF",
              enablePullDownRefresh: !1,
              "mp-alipay": {
                allowsBounceVertical: "NO"
              }
            }
          }, {
            path: "pages/bindGiftCard/bindGiftCard",
            style: {
              navigationBarTitleText: "绑定礼品卡",
              navigationBarBackgroundColor: "#FFFFFF",
              enablePullDownRefresh: !1,
              "mp-alipay": {
                allowsBounceVertical: "NO"
              }
            }
          }, {
            path: "pages/information/information",
            style: {
              navigationBarTitleText: "我的资料",
              navigationBarBackgroundColor: "#FFFFFF",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/passenger/passenger",
            style: {
              navigationBarTitleText: "常用游客",
              navigationBarBackgroundColor: "#FFFFFF",
              backgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/addPassenger/addPassenger",
            style: {
              navigationBarTitleText: "新增游客",
              navigationBarBackgroundColor: "#FFFFFF",
              backgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/editPassenger/editPassenger",
            style: {
              navigationBarTitleText: "编辑游客",
              navigationBarBackgroundColor: "#FFFFFF",
              backgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/addCoupon/addCoupon",
            style: {
              navigationBarTitleText: "兑换优惠券",
              navigationBarBackgroundColor: "#FFFFFF",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/twelveWall/twelveWall",
            style: {
              navigationStyle: "custom",
              navigationBarBackgroundColor: "#FFFFFF",
              "mp-alipay": {
                transparentTitle: "always",
                titlePenetrate: "YES",
                allowsBounceVertical: "NO"
              }
            }
          }, {
            path: "pages/monthlySelection/monthlySelection",
            style: {
              navigationStyle: "custom",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/middlePage/middlePage",
            style: {
              navigationStyle: "custom",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/mapSpotDetail/mapSpotDetail",
            style: {
              navigationBarTitleText: "景点详情",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/mapSpotList/mapSpotList",
            style: {
              navigationBarTitleText: "景区介绍",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/templeWall/templeWall",
            style: {
              navigationStyle: "custom",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/csOrder/csOrder",
            style: {
              navigationStyle: "custom",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/equityCard/equityCard",
            style: {
              navigationBarTitleText: "权益卡",
              navigationBarBackgroundColor: "#FFFFFF",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/eCAgreement/eCAgreement",
            style: {
              navigationBarTitleText: "权益卡",
              navigationBarBackgroundColor: "#FFFFFF",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/preview/preview",
            style: {
              navigationStyle: "custom",
              "mp-alipay": {
                transparentTitle: "always",
                titlePenetrate: "YES",
                allowsBounceVertical: "NO"
              }
            }
          }, {
            path: "pages/buyCard/buyCard",
            style: {
              navigationBarTitleText: "权益卡",
              navigationBarBackgroundColor: "#FFFFFF",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/exchange/exchange",
            style: {
              navigationBarTitleText: "兑换码",
              navigationBarBackgroundColor: "#FFFFFF",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/myeqcard/myeqcard",
            style: {
              navigationBarTitleText: "权益卡",
              navigationBarBackgroundColor: "#FFFFFF",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/myeqcard/records",
            style: {
              navigationBarTitleText: "领取记录",
              navigationBarBackgroundColor: "#FFFFFF",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/myeqcard/detail",
            style: {
              navigationBarTitleText: "权益卡",
              navigationBarBackgroundColor: "#FFFFFF",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/myeqcard/eqdetail",
            style: {
              navigationBarTitleText: "权益详情",
              navigationBarBackgroundColor: "#FFFFFF",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/lineInfo/lineInfo",
            style: {
              enablePullDownRefresh: !1,
              navigationStyle: "custom",
              backgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/order_pay/order_pay",
            style: {
              navigationStyle: "custom",
              navigationBarBackgroundColor: "#FFFFFF",
              backgroundColor: "#FFFFFF",
              navigationBarTitleText: "订单支付",
              enablePullDownRefresh: !0
            }
          }]
        }, {
          root: "distribution",
          pages: [{
            path: "pages/index/index",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTitleText: "合伙人主页",
              navigationStyle: "custom",
              backgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/taxi/taxi",
            style: {
              navigationStyle: "custom",
              enablePullDownRefresh: !0,
              backgroundColor: "#FFFFFF",
              navigationBarTitleText: "分销司机",
              "mp-alipay": {
                transparentTitle: "always",
                titlePenetrate: "YES"
              }
            }
          }, {
            path: "pages/customizePage/customizePage",
            style: {
              navigationStyle: "custom",
              enablePullDownRefresh: !0,
              backgroundColor: "#FFFFFF",
              "mp-alipay": {
                transparentTitle: "always",
                titlePenetrate: "YES"
              }
            }
          }, {
            path: "pages/details/ticketDetail",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTitleText: "分销详情",
              navigationStyle: "custom",
              backgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/smallShop/index",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTitleText: "小店主页",
              navigationStyle: "custom",
              backgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/order_detail/order_detail",
            style: {
              navigationBarTitleText: "订单详情",
              navigationStyle: "custom",
              enablePullDownRefresh: !0
            }
          }, {
            path: "pages/microStoreC/microStoreC",
            style: {
              navigationStyle: "custom",
              navigationBarTitleText: "分销小店",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/smallShop/edit",
            style: {
              navigationStyle: "custom",
              navigationBarTitleText: "小店编辑",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/smallShop/channelSetting",
            style: {
              navigationStyle: "custom",
              navigationBarTitleText: "渠道编辑",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/smallShop/setting",
            style: {
              navigationStyle: "custom",
              navigationBarTitleText: "小店设置",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/search/search",
            style: {
              navigationBarTitleText: "搜索",
              navigationBarBackgroundColor: "#FFFFFF",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/nfc/cs",
            style: {
              navigationStyle: "custom",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/nfc/shaanxiUnion",
            style: {
              navigationStyle: "custom",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/nfc/shaanxiUnionTeam",
            style: {
              navigationStyle: "custom",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/nfc/shaanxiUnionDetail",
            style: {
              navigationStyle: "custom",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/nfc/ggy",
            style: {
              navigationStyle: "custom",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/nfc/verticalVideo",
            style: {
              navigationStyle: "custom",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/nfc/museum",
            style: {
              navigationStyle: "custom",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/nfc/museumSwiper",
            style: {
              navigationStyle: "custom",
              enablePullDownRefresh: !1,
              renderer: "skyline",
              componentFramework: "glass-easel"
            }
          }, {
            path: "pages/nfc/museumExplain",
            style: {
              navigationStyle: "custom",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/nfc/museumDetail",
            style: {
              navigationStyle: "custom",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/schoolNfc/index",
            style: {
              navigationStyle: "custom",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/schoolNfc/album",
            style: {
              navigationStyle: "custom",
              enablePullDownRefresh: !1,
              renderer: "skyline",
              componentFramework: "glass-easel"
            }
          }, {
            path: "pages/schoolNfc/allAlbum",
            style: {
              navigationStyle: "custom",
              enablePullDownRefresh: !1,
              renderer: "skyline",
              componentFramework: "glass-easel"
            }
          }, {
            path: "pages/schoolNfc/allIndex",
            style: {
              navigationStyle: "custom",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/nfc/bingfeng2026",
            style: {
              navigationBarTitleText: "骏马迎春 冰峰传韵",
              navigationStyle: "custom",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/nfc/bingfengLottery",
            style: {
              navigationBarTitleText: "骏马迎春 冰峰传韵",
              navigationStyle: "custom",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/daQin/index",
            style: {
              navigationStyle: "custom",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/daQin/shareEdIt",
            style: {
              navigationStyle: "custom",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/daQin/detail",
            style: {
              navigationStyle: "custom",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/daQin/nfc",
            style: {
              navigationStyle: "custom",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/scgNfc/index",
            style: {
              navigationBarTitleText: "黄勇同志2025年度工作相册",
              navigationStyle: "custom",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/scgNfc/album",
            style: {
              navigationBarTitleText: "黄勇同志2025年度工作相册",
              navigationStyle: "custom",
              enablePullDownRefresh: !1,
              renderer: "skyline",
              componentFramework: "glass-easel"
            }
          }, {
            path: "pages/nfc/dq",
            style: {
              navigationStyle: "custom",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/nfc/cq",
            style: {
              navigationStyle: "custom",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/nfc/cqTicket",
            style: {
              navigationStyle: "custom",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/nfc/cqSwiper",
            style: {
              navigationBarTitleText: "",
              navigationStyle: "custom",
              enablePullDownRefresh: !1,
              renderer: "skyline",
              componentFramework: "glass-easel"
            }
          }, {
            path: "pages/nfc/cqDetail",
            style: {
              navigationStyle: "custom",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/ych/formPage",
            style: {
              navigationBarTitleText: " ",
              enablePullDownRefresh: !1,
              navigationStyle: "custom"
            }
          }, {
            path: "pages/ych/titlePage",
            style: {
              navigationBarTitleText: " ",
              enablePullDownRefresh: !1,
              navigationStyle: "custom"
            }
          }, {
            path: "pages/ych/loadPage",
            style: {
              navigationBarTitleText: " ",
              enablePullDownRefresh: !1,
              navigationStyle: "custom"
            }
          }, {
            path: "pages/ych/cardPage",
            style: {
              navigationBarTitleText: " ",
              enablePullDownRefresh: !1,
              navigationStyle: "custom"
            }
          }, {
            path: "pages/ych/historyList",
            style: {
              navigationBarTitleText: " ",
              enablePullDownRefresh: !1,
              navigationStyle: "custom"
            }
          }, {
            path: "pages/ych/editPage",
            style: {
              navigationBarTitleText: " ",
              enablePullDownRefresh: !1,
              navigationStyle: "custom",
              disableScroll: !0
            }
          }, {
            path: "pages/ych/chat",
            style: {
              navigationBarTitleText: " ",
              enablePullDownRefresh: !1,
              navigationStyle: "custom"
            }
          }, {
            path: "pages/ych/travelFlow",
            style: {
              navigationBarTitleText: " ",
              enablePullDownRefresh: !1,
              navigationStyle: "custom",
              disableScroll: !0
            }
          }]
        }, {
          root: "union",
          pages: [{
            path: "pages/index/index",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTitleText: "陕西联合会员权益中心",
              navigationStyle: "custom",
              backgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/ai/index",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTitleText: "",
              navigationStyle: "custom",
              navigationBarBackgroundColor: "#FEF3E7",
              disableScroll: !0
            }
          }, {
            path: "pages/ai/historyList",
            style: {
              navigationBarTitleText: "历史记录",
              navigationBarBackgroundColor: "#FFFFFF",
              enablePullDownRefresh: !0
            }
          }, {
            path: "pages/ai/strategyGuide",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTitleText: "",
              navigationStyle: "custom",
              navigationBarBackgroundColor: "#FEF3E7"
            }
          }, {
            path: "pages/ai/tripInfoLine",
            style: {
              navigationBarTitleText: "行程明细",
              navigationBarBackgroundColor: "#FFFFFF",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/list/list",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTitleText: "吃喝玩乐",
              navigationStyle: "custom",
              backgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/coupon/coupon",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTitleText: "旅游出行",
              navigationStyle: "custom",
              backgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/map/map",
            style: {
              navigationBarTitleText: "权益地图",
              navigationStyle: "custom",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/card/cardDetail",
            style: {
              navigationBarTitleText: "权益卡详情",
              navigationStyle: "custom",
              backgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/aiService/index",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTitleText: "",
              navigationStyle: "custom",
              navigationBarBackgroundColor: "#FEF3E7",
              disableScroll: !0
            }
          }, {
            path: "pages/aiTemple/index",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTitleText: "",
              navigationStyle: "custom",
              navigationBarBackgroundColor: "#FEF3E7",
              disableScroll: !0
            }
          }, {
            path: "pages/aiService/couplet",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTitleText: "",
              navigationStyle: "custom",
              navigationBarBackgroundColor: "#FEF3E7",
              disableScroll: !0
            }
          }, {
            path: "pages/aiReplacement/index",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTitleText: "",
              navigationStyle: "custom",
              navigationBarBackgroundColor: "#FEF3E7",
              disableScroll: !0
            }
          }, {
            path: "pages/aiReplacement/list",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTitleText: "",
              navigationStyle: "custom",
              navigationBarBackgroundColor: "#FEF3E7",
              disableScroll: !0
            }
          }, {
            path: "pages/cor/indexImage",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTitleText: "",
              navigationStyle: "custom",
              navigationBarBackgroundColor: "#FEF3E7",
              disableScroll: !0
            }
          }, {
            path: "pages/aiVideo/download",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTitleText: "",
              navigationStyle: "custom",
              navigationBarBackgroundColor: "#FEF3E7",
              disableScroll: !0
            }
          }, {
            path: "pages/scenicSpot/list",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTitleText: "简版景区",
              navigationStyle: "custom",
              backgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/aiVideo/downloadzt",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTitleText: "",
              navigationStyle: "custom",
              navigationBarBackgroundColor: "#FEF3E7",
              disableScroll: !0
            }
          }, {
            path: "pages/aiVideo/loadPage",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTitleText: "",
              navigationBarBackgroundColor: "#FFF",
              disableScroll: !0
            }
          }, {
            path: "pages/aiVideo/historyList",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTitleText: "",
              navigationBarBackgroundColor: "#FFF",
              disableScroll: !0
            }
          }, {
            path: "pages/touristMap/map",
            style: {
              navigationBarTitleText: "旅游地图",
              navigationStyle: "custom",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/touristMap/list",
            style: {
              navigationBarTitleText: "旅游地图",
              navigationStyle: "custom",
              enablePullDownRefresh: !1
            }
          }, {
            path: "pages/aiTravel/index",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTitleText: "",
              navigationStyle: "custom",
              navigationBarBackgroundColor: "#FEF3E7",
              disableScroll: !0,
              softinputMode: "adjustResize"
            }
          }, {
            path: "pages/aiTravel/cardPage",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTitleText: "",
              navigationStyle: "custom",
              navigationBarBackgroundColor: "#FEF3E7",
              disableScroll: !0
            }
          }, {
            path: "pages/aiTravel/historyList",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTitleText: "",
              navigationStyle: "custom",
              navigationBarBackgroundColor: "#FEF3E7",
              disableScroll: !0
            }
          }, {
            path: "pages/aiNew/index",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTitleText: "",
              navigationStyle: "custom",
              navigationBarBackgroundColor: "#FEF3E7",
              disableScroll: !0
            }
          }, {
            path: "pages/aiTravel2/formPage",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTitleText: "",
              navigationStyle: "custom",
              navigationBarBackgroundColor: "#FEF3E7",
              disableScroll: !1
            }
          }, {
            path: "pages/aiTravel2/titlePage",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTitleText: "",
              navigationStyle: "custom",
              navigationBarBackgroundColor: "#FEF3E7",
              disableScroll: !1
            }
          }, {
            path: "pages/aiTravel2/loadPage",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTitleText: "",
              navigationStyle: "custom",
              navigationBarBackgroundColor: "#FFF",
              disableScroll: !0
            }
          }, {
            path: "pages/aiTravel2/historyList",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTitleText: "",
              navigationStyle: "custom",
              navigationBarBackgroundColor: "#FEF3E7",
              disableScroll: !1
            }
          }, {
            path: "pages/aiTravel2/cardPage",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTitleText: "",
              navigationStyle: "custom",
              navigationBarBackgroundColor: "#FEF3E7",
              disableScroll: !0
            }
          }, {
            path: "pages/aiTravel2/editPage",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTitleText: "",
              navigationStyle: "custom",
              navigationBarBackgroundColor: "#FEF3E7",
              disableScroll: !0
            }
          }, {
            path: "pages/aiGreatWall/index",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTitleText: "",
              navigationStyle: "custom",
              navigationBarBackgroundColor: "#FEF3E7",
              disableScroll: !0
            }
          }, {
            path: "pages/tang/index",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTitleText: "",
              navigationStyle: "custom",
              navigationBarBackgroundColor: "#FEF3E7",
              disableScroll: !0
            }
          }, {
            path: "pages/menu/index",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTitleText: "",
              navigationStyle: "custom",
              navigationBarBackgroundColor: "#FEF3E7",
              disableScroll: !0
            }
          }, {
            path: "pages/vlog/index",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTitleText: "vlog",
              navigationStyle: "custom",
              navigationBarBackgroundColor: "#FEF3E7",
              disableScroll: !0
            }
          }, {
            path: "pages/vlog/result",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTitleText: "vlog",
              navigationStyle: "custom",
              navigationBarBackgroundColor: "#FEF3E7",
              disableScroll: !0
            }
          }, {
            path: "pages/vlog/record",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTitleText: "vlog",
              navigationStyle: "custom",
              navigationBarBackgroundColor: "#FEF3E7",
              disableScroll: !0
            }
          }, {
            path: "pages/vlog/notice",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTitleText: "vlog",
              navigationStyle: "custom",
              navigationBarBackgroundColor: "#FEF3E7",
              disableScroll: !0
            }
          }, {
            path: "pages/aiCulturalTourism/index",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTitleText: "",
              navigationStyle: "custom",
              navigationBarBackgroundColor: "#FEF3E7",
              disableScroll: !0
            }
          }, {
            path: "pages/smartEscort/index",
            style: {
              backgroundColor: "#FFFFFF",
              navigationBarTitleText: "",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/featureIntroduction/index",
            style: {
              navigationBarTitleText: " ",
              enablePullDownRefresh: !1,
              navigationStyle: "custom"
            }
          }, {
            path: "pages/aiBy/index",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTitleText: " ",
              navigationStyle: "custom"
            }
          }, {
            path: "pages/groupList/index",
            style: {
              navigationBarTitleText: " ",
              enablePullDownRefresh: !1,
              navigationStyle: "custom"
            }
          }, {
            path: "pages/groupList/teamInformation",
            style: {
              navigationBarTitleText: " ",
              enablePullDownRefresh: !1,
              navigationStyle: "custom"
            }
          }, {
            path: "pages/groupList/teamList",
            style: {
              navigationBarTitleText: " ",
              enablePullDownRefresh: !1,
              navigationStyle: "custom"
            }
          }, {
            path: "pages/aiBy/collectionList",
            style: {
              navigationBarTitleText: " ",
              enablePullDownRefresh: !1,
              navigationStyle: "custom"
            }
          }, {
            path: "pages/mianxian/index",
            style: {
              navigationBarTitleText: " ",
              enablePullDownRefresh: !1,
              navigationStyle: "custom"
            }
          }, {
            path: "pages/mianxian/aiTravel/chat",
            style: {
              navigationBarTitleText: " ",
              enablePullDownRefresh: !1,
              navigationStyle: "custom"
            }
          }]
        }, {
          root: "artShow",
          pages: [{
            path: "pages/index/index",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTitleText: "赳赳大秦",
              navigationStyle: "custom",
              backgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/filter/filter",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTitleText: "购票",
              navigationBarTextStyle: "white",
              backgroundColor: "#2F2D29",
              backgroundColorContent: "#2F2D29",
              navigationBarBackgroundColor: "#2F2D29"
            }
          }, {
            path: "pages/seat/seat1",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTitleText: "选座",
              navigationBarTextStyle: "white",
              backgroundColor: "#2F2D29",
              backgroundColorContent: "#2F2D29",
              navigationBarBackgroundColor: "#2F2D29"
            }
          }, {
            path: "pages/showFillOrder/showFillOrder",
            style: {
              enablePullDownRefresh: !1,
              navigationStyle: "custom",
              backgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/order/showOrder",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTextStyle: "white",
              navigationStyle: "custom"
            }
          }, {
            path: "pages/orderDetail/orderDetail",
            style: {
              enablePullDownRefresh: !0,
              navigationBarTextStyle: "white",
              navigationBarBackgroundColor: "#000000",
              navigationBarTitleText: "订单详情"
            }
          }, {
            path: "pages/order/orderList",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTitleText: "我的观演票",
              navigationBarTextStyle: "white",
              backgroundColor: "#2F2D29",
              backgroundColorContent: "#2F2D29",
              navigationBarBackgroundColor: "#2F2D29"
            }
          }, {
            path: "pages/ticketFillOrder/ticketFillOrder",
            style: {
              navigationBarTitleText: "填写订单",
              navigationBarBackgroundColor: "#FFFFFF",
              enablePullDownRefresh: !0,
              "mp-weixin": {
                usingComponents: {
                  "student-verify": "plugin://studentVerify/verify"
                }
              }
            }
          }, {
            path: "pages/ticketPay/ticketPay",
            style: {
              navigationBarTitleText: "确认订单",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/index/saleSubscribe",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTitleText: "预约",
              navigationStyle: "custom",
              backgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/registrationList/registrationList",
            style: {
              navigationBarTitleText: "报名记录",
              navigationStyle: "custom",
              enablePullDownRefresh: !0
            }
          }, {
            path: "pages/volunteerCheck/volunteerCheck",
            style: {
              navigationBarTitleText: "查看资料",
              navigationStyle: "custom"
            }
          }, {
            path: "pages/volunteerDetail/volunteerDetail",
            style: {
              navigationBarTitleText: "查看资料",
              navigationStyle: "custom"
            }
          }, {
            path: "pages/volunteerInfo/volunteerInfo",
            style: {
              navigationBarTitleText: "个人资料",
              navigationStyle: "custom"
            }
          }, {
            path: "pages/volunteer/list",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTitleText: "义工招募",
              navigationStyle: "custom",
              backgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/volunteer/registration",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTitleText: "提交报名",
              navigationBarBackgroundColor: "#FEF3E7"
            }
          }, {
            path: "pages/volunteer/success",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTitleText: "提交成功",
              navigationStyle: "custom",
              navigationBarBackgroundColor: "#FEF3E7"
            }
          }, {
            path: "pages/volunteer/config",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTitleText: "",
              navigationStyle: "custom",
              navigationBarBackgroundColor: "#FEF3E7"
            }
          }, {
            path: "pages/xjtu/index",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTitleText: "交大排行榜",
              navigationStyle: "custom"
            }
          }, {
            path: "pages/wall/AIChat/index",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTitleText: "",
              navigationStyle: "custom",
              disableScroll: !0
            }
          }, {
            path: "pages/wall/index",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTitleText: "城墙AI",
              navigationStyle: "custom"
            }
          }, {
            path: "pages/wall/wallPay",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTitleText: "城墙支付",
              navigationStyle: "custom"
            }
          }, {
            path: "pages/addCoupon/addCoupon",
            style: {
              enablePullDownRefresh: !1,
              navigationBarBackgroundColor: "#2F2D29",
              navigationBarTitleText: "大秦定制领券页面",
              navigationStyle: "custom"
            }
          }, {
            path: "pages/distribution/distribution",
            style: {
              enablePullDownRefresh: !1,
              navigationBarBackgroundColor: "#2F2D29",
              navigationBarTitleText: "大秦滴滴分销页面",
              navigationStyle: "custom"
            }
          }]
        }, {
          root: "xr",
          pages: [{
            path: "pages/bf/index"
          }]
        }, {
          root: "chat",
          pages: [{
            path: "pages/video/video"
          }, {
            path: "pages/dialog/dialog"
          }, {
            path: "pages/logs/logs"
          }]
        }, {
          root: "escortPage",
          pages: [{
            path: "pages/groupList/teamInformation"
          }]
        }, {
          root: "smqc",
          pages: [{
            path: "pages/index/index",
            style: {
              navigationBarTitleText: " ",
              enablePullDownRefresh: !1,
              allowsBounceVertical: "NO",
              navigationStyle: "custom",
              "mp-alipay": {
                transparentTitle: "always",
                titlePenetrate: "YES"
              }
            }
          }, {
            path: "pages/lease/index",
            style: {
              navigationBarTitleText: " ",
              enablePullDownRefresh: !1,
              allowsBounceVertical: "NO",
              navigationStyle: "custom",
              "mp-alipay": {
                transparentTitle: "always",
                titlePenetrate: "YES"
              }
            }
          }, {
            path: "pages/lease/placeOrder",
            style: {
              navigationBarTitleText: " ",
              enablePullDownRefresh: !1,
              allowsBounceVertical: "NO",
              navigationStyle: "custom",
              "mp-alipay": {
                transparentTitle: "always",
                titlePenetrate: "YES"
              }
            }
          }, {
            path: "pages/lease/orderList",
            style: {
              navigationBarTitleText: " ",
              enablePullDownRefresh: !0,
              allowsBounceVertical: "NO",
              navigationStyle: "custom",
              "mp-alipay": {
                transparentTitle: "always",
                titlePenetrate: "YES"
              }
            }
          }, {
            path: "pages/myorder/myorder",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTextStyle: "white",
              navigationStyle: "custom"
            }
          }, {
            path: "pages/smqcRefundApply/refundApply",
            style: {
              navigationBarTitleText: "申请退款",
              navigationBarBackgroundColor: "#FFFFFF",
              enablePullDownRefresh: !0
            }
          }, {
            path: "pages/smqcAffirm_order/affirm_order",
            style: {
              navigationBarTitleText: "确认订单",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/smqcStoreshop/storeshop",
            style: {
              navigationStyle: "custom",
              enablePullDownRefresh: !0,
              "mp-alipay": {
                transparentTitle: "always",
                titlePenetrate: "YES",
                allowsBounceVertical: "NO"
              }
            }
          }, {
            path: "pages/smqcGoods_details/goods_details",
            style: {
              navigationStyle: "custom",
              "mp-alipay": {
                transparentTitle: "always",
                titlePenetrate: "YES",
                allowsBounceVertical: "NO"
              }
            }
          }, {
            path: "pages/smqcSearchOld/searchOld",
            style: {
              navigationBarTitleText: "搜索"
            }
          }, {
            path: "pages/smqcSpotDetailNew/purchaseTickets",
            style: {
              navigationBarTitleText: "门票预订",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/smqcSpotDetailNew/spotDetailNew",
            style: {
              enablePullDownRefresh: !1,
              navigationBarTextStyle: "white",
              navigationStyle: "custom"
            }
          }, {
            path: "pages/smqcAftercontent/aftercontent",
            style: {
              navigationBarTitleText: "提交原因",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/complaintFeedback/complaintFeedback",
            style: {
              navigationBarTitleText: "投诉反馈",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/smqcfeedback/feedback",
            style: {
              navigationBarTitleText: "问题反馈",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/smqcCollection/collection",
            style: {
              navigationBarTitleText: "我的收藏",
              navigationBarBackgroundColor: "#FFFFFF",
              enablePullDownRefresh: !0
            }
          }, {
            path: "pages/myorder/myorderList",
            style: {
              navigationBarTitleText: "我的订单",
              navigationBarBackgroundColor: "#FFFFFF",
              enablePullDownRefresh: !0
            }
          }, {
            path: "pages/smqcAftersales/aftersales",
            style: {
              navigationBarTitleText: "退换/售后",
              enablePullDownRefresh: !0,
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/smqcMyDiscounts/myDiscounts",
            style: {
              navigationBarTitleText: "我的优惠券",
              navigationBarBackgroundColor: "#FFFFFF",
              enablePullDownRefresh: !1,
              backgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/smqcPassenger/passenger",
            style: {
              navigationBarTitleText: "常用游客",
              navigationBarBackgroundColor: "#FFFFFF",
              backgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/smqcShopcart/shopcart",
            style: {
              navigationStyle: "custom",
              enablePullDownRefresh: !0,
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/smqcTicketFillOrder/ticketFillOrder",
            style: {
              navigationBarTitleText: "填写订单",
              navigationBarBackgroundColor: "#FFFFFF",
              enablePullDownRefresh: !0,
              "mp-weixin": {
                usingComponents: {
                  "student-verify": "plugin://studentVerify/verify"
                }
              }
            }
          }, {
            path: "pages/smqcOrder_pay/order_pay",
            style: {
              navigationStyle: "custom",
              navigationBarBackgroundColor: "#FFFFFF",
              backgroundColor: "#FFFFFF",
              navigationBarTitleText: "订单支付",
              enablePullDownRefresh: !0
            }
          }, {
            path: "pages/smqcPackPlaceOrder/packPlaceOrder",
            style: {
              navigationBarTitleText: "填写订单",
              navigationBarBackgroundColor: "#FFFFFF",
              enablePullDownRefresh: !0
            }
          }, {
            path: "pages/smqcCalendarPage/calendarPage",
            style: {
              navigationBarTitleText: "选择日期",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/smqcOrderDetailtick/orderDetailtick",
            style: {
              navigationBarTitleText: "门票订单详情",
              navigationBarBackgroundColor: "#FFFFFF",
              enablePullDownRefresh: !0
            }
          }, {
            path: "pages/smqcTicketPay/ticketPay",
            style: {
              navigationBarTitleText: "确认订单",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/smqcfeedback/complaintFeedback",
            style: {
              navigationBarTitleText: "投诉反馈",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/smqcfeedback/feedbackView",
            style: {
              navigationBarTitleText: "",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/spot_listY/guide",
            style: {
              navigationStyle: "custom",
              backgroundColor: "#FFFFFF",
              enablePullDownRefresh: !1,
              "mp-alipay": {
                transparentTitle: "always",
                allowsBounceVertical: "NO",
                titlePenetrate: "YES"
              }
            }
          }, {
            path: "pages/smqcAddPassenger/addPassenger",
            style: {
              navigationBarTitleText: "新增游客",
              navigationBarBackgroundColor: "#FFFFFF",
              backgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/smqcEditPassenger/editPassenger",
            style: {
              navigationBarTitleText: "编辑游客",
              navigationBarBackgroundColor: "#FFFFFF",
              backgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/smqcSpotFilter/spotFilter",
            style: {
              backgroundColor: "#FFFFFF",
              navigationBarTitleText: "列表",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/smqcSpotContentList/spotContentList",
            style: {
              navigationStyle: "custom",
              backgroundColor: "#FFFFFF",
              navigationBarBackgroundColor: "#FFFFFF"
            }
          }, {
            path: "pages/smqcSpotThirdDetail/spotThirdDetail",
            style: {
              navigationStyle: "custom",
              backgroundColor: "#FFFFFF",
              "mp-alipay": {
                transparentTitle: "always",
                titlePenetrate: "YES",
                allowsBounceVertical: "NO"
              }
            }
          }, {
            path: "pages/smqcOrder_details/order_details",
            style: {
              navigationBarTitleText: "订单详情",
              navigationBarBackgroundColor: "#FFFFFF",
              enablePullDownRefresh: !0
            }
          }]
        }],
        preloadRule: {
          "pages/index/index": {
            network: "all",
            packages: ["subPage"]
          },
          "pages/spotDetailNew/spotDetailNew": {
            network: "all",
            packages: ["subPage"]
          }
        },
        requiredPrivateInfos: ["getLocation"],
        globalStyle: {
          navigationBarTextStyle: "black",
          navigationBarTitleText: "",
          navigationBarBackgroundColor: "#F8F8F8",
          backgroundColor: "#F7F7F7"
        },
        tabBar: {
          custom: !0,
          color: "#FFFFFF",
          selectedColor: "#FFFFFF",
          borderStyle: "white",
          backgroundColor: "#ffffff",
          list: [{
            pagePath: "pages/index/index",
            text: ""
          }, {
            pagePath: "pages/spot_list/spot_list",
            text: ""
          }, {
            pagePath: "pages/rankList/rankList",
            text: ""
          }, {
            pagePath: "pages/mine/mine",
            text: ""
          }]
        },
        easycom: {
          "^ds-(.*)": "@/components/ds-$1/ds-$1.vue",
          "^u-(.*)": "@/uview-ui/components/u-$1/u-$1.vue"
        },
        embeddedAppIdList: ["wx8f446acf8c4a85f5", "wx5ca45ce74b10ade0", "wx4fa555703dced95c"]
      }
    },
    "7ce1": function(e, t, n) {
      var a = n("b4d2"),
        r = n("7647"),
        o = n("4965"),
        i = n("931d");

      function s(t) {
        var n = "function" == typeof Map ? new Map : void 0;
        return e.exports = s = function(e) {
          if (null === e || !o(e)) return e;
          if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
          if (void 0 !== n) {
            if (n.has(e)) return n.get(e);
            n.set(e, t)
          }

          function t() {
            return i(e, arguments, a(this).constructor)
          }
          return t.prototype = Object.create(e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), r(t, e)
        }, e.exports.__esModule = !0, e.exports.default = e.exports, s(t)
      }
      e.exports = s, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    "861b": function(e, t, n) {
      (function(e, a, r) {
        var o = n("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.uniCloud = t.default = t.UniCloudError = void 0;
        var i = o(n("7eb4")),
          s = o(n("3352")),
          l = o(n("34cf")),
          u = o(n("3b2d")),
          c = o(n("af34")),
          f = o(n("ee10")),
          d = o(n("7ca3")),
          h = o(n("8ffa")),
          p = o(n("4ffb")),
          g = o(n("b4d2")),
          v = o(n("7ce1")),
          y = o(n("67ad")),
          m = o(n("0bdb")),
          F = o(n("714a"));

        function k(e, t) {
          var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
          if (!n) {
            if (Array.isArray(e) || (n = function(e, t) {
                if (e) {
                  if ("string" == typeof e) return w(e, t);
                  var n = Object.prototype.toString.call(e).slice(8, -1);
                  return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? w(e, t) : void 0
                }
              }(e)) || t && e && "number" == typeof e.length) {
              n && (e = n);
              var a = 0,
                r = function() {};
              return {
                s: r,
                n: function() {
                  return a >= e.length ? {
                    done: !0
                  } : {
                    done: !1,
                    value: e[a++]
                  }
                },
                e: function(e) {
                  throw e
                },
                f: r
              }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }
          var o, i = !0,
            s = !1;
          return {
            s: function() {
              n = n.call(e)
            },
            n: function() {
              var e = n.next();
              return i = e.done, e
            },
            e: function(e) {
              s = !0, o = e
            },
            f: function() {
              try {
                i || null == n.return || n.return()
              } finally {
                if (s) throw o
              }
            }
          }
        }

        function w(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
          return a
        }

        function b(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            t && (a = a.filter((function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, a)
          }
          return n
        }

        function T(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? b(Object(n), !0).forEach((function(t) {
              (0, d.default)(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach((function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
          }
          return e
        }

        function x(e) {
          var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (e) {
              return !1
            }
          }();
          return function() {
            var n, a = (0, g.default)(e);
            if (t) {
              var r = (0, g.default)(this).constructor;
              n = Reflect.construct(a, arguments, r)
            } else n = a.apply(this, arguments);
            return (0, p.default)(this, n)
          }
        }

        function B(e, t, n) {
          return e(n = {
            path: t,
            exports: {},
            require: function(e, t) {
              return function() {
                throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
              }(null == t && n.path)
            }
          }, n.exports), n.exports
        }
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== e || "undefined" != typeof self && self;
        var S = B((function(e, t) {
            var n;
            e.exports = n = n || function(e, t) {
              var n = Object.create || function() {
                  function e() {}
                  return function(t) {
                    var n;
                    return e.prototype = t, n = new e, e.prototype = null, n
                  }
                }(),
                a = {},
                r = a.lib = {},
                o = r.Base = {
                  extend: function(e) {
                    var t = n(this);
                    return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function() {
                      t.$super.init.apply(this, arguments)
                    }), t.init.prototype = t, t.$super = this, t
                  },
                  create: function() {
                    var e = this.extend();
                    return e.init.apply(e, arguments), e
                  },
                  init: function() {},
                  mixIn: function(e) {
                    for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                    e.hasOwnProperty("toString") && (this.toString = e.toString)
                  },
                  clone: function() {
                    return this.init.prototype.extend(this)
                  }
                },
                i = r.WordArray = o.extend({
                  init: function(e, t) {
                    e = this.words = e || [], this.sigBytes = null != t ? t : 4 * e.length
                  },
                  toString: function(e) {
                    return (e || l).stringify(this)
                  },
                  concat: function(e) {
                    var t = this.words,
                      n = e.words,
                      a = this.sigBytes,
                      r = e.sigBytes;
                    if (this.clamp(), a % 4)
                      for (var o = 0; o < r; o++) {
                        var i = n[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                        t[a + o >>> 2] |= i << 24 - (a + o) % 4 * 8
                      } else
                        for (o = 0; o < r; o += 4) t[a + o >>> 2] = n[o >>> 2];
                    return this.sigBytes += r, this
                  },
                  clamp: function() {
                    var t = this.words,
                      n = this.sigBytes;
                    t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4)
                  },
                  clone: function() {
                    var e = o.clone.call(this);
                    return e.words = this.words.slice(0), e
                  },
                  random: function(t) {
                    for (var n, a = [], r = function(t) {
                        var n = 987654321,
                          a = 4294967295;
                        return function() {
                          var r = ((n = 36969 * (65535 & n) + (n >> 16) & a) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & a) & a;
                          return r /= 4294967296, (r += .5) * (e.random() > .5 ? 1 : -1)
                        }
                      }, o = 0; o < t; o += 4) {
                      var s = r(4294967296 * (n || e.random()));
                      n = 987654071 * s(), a.push(4294967296 * s() | 0)
                    }
                    return new i.init(a, t)
                  }
                }),
                s = a.enc = {},
                l = s.Hex = {
                  stringify: function(e) {
                    for (var t = e.words, n = e.sigBytes, a = [], r = 0; r < n; r++) {
                      var o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                      a.push((o >>> 4).toString(16)), a.push((15 & o).toString(16))
                    }
                    return a.join("")
                  },
                  parse: function(e) {
                    for (var t = e.length, n = [], a = 0; a < t; a += 2) n[a >>> 3] |= parseInt(e.substr(a, 2), 16) << 24 - a % 8 * 4;
                    return new i.init(n, t / 2)
                  }
                },
                u = s.Latin1 = {
                  stringify: function(e) {
                    for (var t = e.words, n = e.sigBytes, a = [], r = 0; r < n; r++) {
                      var o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                      a.push(String.fromCharCode(o))
                    }
                    return a.join("")
                  },
                  parse: function(e) {
                    for (var t = e.length, n = [], a = 0; a < t; a++) n[a >>> 2] |= (255 & e.charCodeAt(a)) << 24 - a % 4 * 8;
                    return new i.init(n, t)
                  }
                },
                c = s.Utf8 = {
                  stringify: function(e) {
                    try {
                      return decodeURIComponent(escape(u.stringify(e)))
                    } catch (e) {
                      throw new Error("Malformed UTF-8 data")
                    }
                  },
                  parse: function(e) {
                    return u.parse(unescape(encodeURIComponent(e)))
                  }
                },
                f = r.BufferedBlockAlgorithm = o.extend({
                  reset: function() {
                    this._data = new i.init, this._nDataBytes = 0
                  },
                  _append: function(e) {
                    "string" == typeof e && (e = c.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes
                  },
                  _process: function(t) {
                    var n = this._data,
                      a = n.words,
                      r = n.sigBytes,
                      o = this.blockSize,
                      s = r / (4 * o),
                      l = (s = t ? e.ceil(s) : e.max((0 | s) - this._minBufferSize, 0)) * o,
                      u = e.min(4 * l, r);
                    if (l) {
                      for (var c = 0; c < l; c += o) this._doProcessBlock(a, c);
                      var f = a.splice(0, l);
                      n.sigBytes -= u
                    }
                    return new i.init(f, u)
                  },
                  clone: function() {
                    var e = o.clone.call(this);
                    return e._data = this._data.clone(), e
                  },
                  _minBufferSize: 0
                });
              r.Hasher = f.extend({
                cfg: o.extend(),
                init: function(e) {
                  this.cfg = this.cfg.extend(e), this.reset()
                },
                reset: function() {
                  f.reset.call(this), this._doReset()
                },
                update: function(e) {
                  return this._append(e), this._process(), this
                },
                finalize: function(e) {
                  return e && this._append(e), this._doFinalize()
                },
                blockSize: 16,
                _createHelper: function(e) {
                  return function(t, n) {
                    return new e.init(n).finalize(t)
                  }
                },
                _createHmacHelper: function(e) {
                  return function(t, n) {
                    return new d.HMAC.init(e, n).finalize(t)
                  }
                }
              });
              var d = a.algo = {};
              return a
            }(Math)
          })),
          P = (B((function(e, t) {
            var n;
            e.exports = (n = S, function(e) {
              var t = n,
                a = t.lib,
                r = a.WordArray,
                o = a.Hasher,
                i = t.algo,
                s = [];
              ! function() {
                for (var t = 0; t < 64; t++) s[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0
              }();
              var l = i.MD5 = o.extend({
                _doReset: function() {
                  this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878])
                },
                _doProcessBlock: function(e, t) {
                  for (var n = 0; n < 16; n++) {
                    var a = t + n,
                      r = e[a];
                    e[a] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8)
                  }
                  var o = this._hash.words,
                    i = e[t + 0],
                    l = e[t + 1],
                    h = e[t + 2],
                    p = e[t + 3],
                    g = e[t + 4],
                    v = e[t + 5],
                    y = e[t + 6],
                    m = e[t + 7],
                    F = e[t + 8],
                    k = e[t + 9],
                    w = e[t + 10],
                    b = e[t + 11],
                    T = e[t + 12],
                    x = e[t + 13],
                    B = e[t + 14],
                    S = e[t + 15],
                    P = o[0],
                    _ = o[1],
                    C = o[2],
                    D = o[3];
                  P = u(P, _, C, D, i, 7, s[0]), D = u(D, P, _, C, l, 12, s[1]), C = u(C, D, P, _, h, 17, s[2]), _ = u(_, C, D, P, p, 22, s[3]), P = u(P, _, C, D, g, 7, s[4]), D = u(D, P, _, C, v, 12, s[5]), C = u(C, D, P, _, y, 17, s[6]), _ = u(_, C, D, P, m, 22, s[7]), P = u(P, _, C, D, F, 7, s[8]), D = u(D, P, _, C, k, 12, s[9]), C = u(C, D, P, _, w, 17, s[10]), _ = u(_, C, D, P, b, 22, s[11]), P = u(P, _, C, D, T, 7, s[12]), D = u(D, P, _, C, x, 12, s[13]), C = u(C, D, P, _, B, 17, s[14]), P = c(P, _ = u(_, C, D, P, S, 22, s[15]), C, D, l, 5, s[16]), D = c(D, P, _, C, y, 9, s[17]), C = c(C, D, P, _, b, 14, s[18]), _ = c(_, C, D, P, i, 20, s[19]), P = c(P, _, C, D, v, 5, s[20]), D = c(D, P, _, C, w, 9, s[21]), C = c(C, D, P, _, S, 14, s[22]), _ = c(_, C, D, P, g, 20, s[23]), P = c(P, _, C, D, k, 5, s[24]), D = c(D, P, _, C, B, 9, s[25]), C = c(C, D, P, _, p, 14, s[26]), _ = c(_, C, D, P, F, 20, s[27]), P = c(P, _, C, D, x, 5, s[28]), D = c(D, P, _, C, h, 9, s[29]), C = c(C, D, P, _, m, 14, s[30]), P = f(P, _ = c(_, C, D, P, T, 20, s[31]), C, D, v, 4, s[32]), D = f(D, P, _, C, F, 11, s[33]), C = f(C, D, P, _, b, 16, s[34]), _ = f(_, C, D, P, B, 23, s[35]), P = f(P, _, C, D, l, 4, s[36]), D = f(D, P, _, C, g, 11, s[37]), C = f(C, D, P, _, m, 16, s[38]), _ = f(_, C, D, P, w, 23, s[39]), P = f(P, _, C, D, x, 4, s[40]), D = f(D, P, _, C, i, 11, s[41]), C = f(C, D, P, _, p, 16, s[42]), _ = f(_, C, D, P, y, 23, s[43]), P = f(P, _, C, D, k, 4, s[44]), D = f(D, P, _, C, T, 11, s[45]), C = f(C, D, P, _, S, 16, s[46]), P = d(P, _ = f(_, C, D, P, h, 23, s[47]), C, D, i, 6, s[48]), D = d(D, P, _, C, m, 10, s[49]), C = d(C, D, P, _, B, 15, s[50]), _ = d(_, C, D, P, v, 21, s[51]), P = d(P, _, C, D, T, 6, s[52]), D = d(D, P, _, C, p, 10, s[53]), C = d(C, D, P, _, w, 15, s[54]), _ = d(_, C, D, P, l, 21, s[55]), P = d(P, _, C, D, F, 6, s[56]), D = d(D, P, _, C, S, 10, s[57]), C = d(C, D, P, _, y, 15, s[58]), _ = d(_, C, D, P, x, 21, s[59]), P = d(P, _, C, D, g, 6, s[60]), D = d(D, P, _, C, b, 10, s[61]), C = d(C, D, P, _, h, 15, s[62]), _ = d(_, C, D, P, k, 21, s[63]), o[0] = o[0] + P | 0, o[1] = o[1] + _ | 0, o[2] = o[2] + C | 0, o[3] = o[3] + D | 0
                },
                _doFinalize: function() {
                  var t = this._data,
                    n = t.words,
                    a = 8 * this._nDataBytes,
                    r = 8 * t.sigBytes;
                  n[r >>> 5] |= 128 << 24 - r % 32;
                  var o = e.floor(a / 4294967296),
                    i = a;
                  n[15 + (r + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), n[14 + (r + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), t.sigBytes = 4 * (n.length + 1), this._process();
                  for (var s = this._hash, l = s.words, u = 0; u < 4; u++) {
                    var c = l[u];
                    l[u] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8)
                  }
                  return s
                },
                clone: function() {
                  var e = o.clone.call(this);
                  return e._hash = this._hash.clone(), e
                }
              });

              function u(e, t, n, a, r, o, i) {
                var s = e + (t & n | ~t & a) + r + i;
                return (s << o | s >>> 32 - o) + t
              }

              function c(e, t, n, a, r, o, i) {
                var s = e + (t & a | n & ~a) + r + i;
                return (s << o | s >>> 32 - o) + t
              }

              function f(e, t, n, a, r, o, i) {
                var s = e + (t ^ n ^ a) + r + i;
                return (s << o | s >>> 32 - o) + t
              }

              function d(e, t, n, a, r, o, i) {
                var s = e + (n ^ (t | ~a)) + r + i;
                return (s << o | s >>> 32 - o) + t
              }
              t.MD5 = o._createHelper(l), t.HmacMD5 = o._createHmacHelper(l)
            }(Math), n.MD5)
          })), B((function(e, t) {
            var n;
            e.exports = (n = S, void
              function() {
                var e = n,
                  t = e.lib.Base,
                  a = e.enc.Utf8;
                e.algo.HMAC = t.extend({
                  init: function(e, t) {
                    e = this._hasher = new e.init, "string" == typeof t && (t = a.parse(t));
                    var n = e.blockSize,
                      r = 4 * n;
                    t.sigBytes > r && (t = e.finalize(t)), t.clamp();
                    for (var o = this._oKey = t.clone(), i = this._iKey = t.clone(), s = o.words, l = i.words, u = 0; u < n; u++) s[u] ^= 1549556828, l[u] ^= 909522486;
                    o.sigBytes = i.sigBytes = r, this.reset()
                  },
                  reset: function() {
                    var e = this._hasher;
                    e.reset(), e.update(this._iKey)
                  },
                  update: function(e) {
                    return this._hasher.update(e), this
                  },
                  finalize: function(e) {
                    var t = this._hasher,
                      n = t.finalize(e);
                    return t.reset(), t.finalize(this._oKey.clone().concat(n))
                  }
                })
              }())
          })), B((function(e, t) {
            e.exports = S.HmacMD5
          }))),
          _ = B((function(e, t) {
            e.exports = S.enc.Utf8
          })),
          C = B((function(e, t) {
            var n;
            e.exports = (n = S, function() {
              var e = n,
                t = e.lib.WordArray;

              function a(e, n, a) {
                for (var r = [], o = 0, i = 0; i < n; i++)
                  if (i % 4) {
                    var s = a[e.charCodeAt(i - 1)] << i % 4 * 2,
                      l = a[e.charCodeAt(i)] >>> 6 - i % 4 * 2;
                    r[o >>> 2] |= (s | l) << 24 - o % 4 * 8, o++
                  } return t.create(r, o)
              }
              e.enc.Base64 = {
                stringify: function(e) {
                  var t = e.words,
                    n = e.sigBytes,
                    a = this._map;
                  e.clamp();
                  for (var r = [], o = 0; o < n; o += 3)
                    for (var i = (t[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 16 | (t[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255) << 8 | t[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, s = 0; s < 4 && o + .75 * s < n; s++) r.push(a.charAt(i >>> 6 * (3 - s) & 63));
                  var l = a.charAt(64);
                  if (l)
                    for (; r.length % 4;) r.push(l);
                  return r.join("")
                },
                parse: function(e) {
                  var t = e.length,
                    n = this._map,
                    r = this._reverseMap;
                  if (!r) {
                    r = this._reverseMap = [];
                    for (var o = 0; o < n.length; o++) r[n.charCodeAt(o)] = o
                  }
                  var i = n.charAt(64);
                  if (i) {
                    var s = e.indexOf(i); - 1 !== s && (t = s)
                  }
                  return a(e, t, r)
                },
                _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
              }
            }(), n.enc.Base64)
          })),
          D = "uni_id_token",
          R = "uni_id_token_expired",
          I = "FUNCTION",
          O = "OBJECT",
          A = "CLIENT_DB",
          E = "pending",
          L = "rejected";

        function N(e) {
          return Object.prototype.toString.call(e).slice(8, -1).toLowerCase()
        }

        function U(e) {
          return "object" === N(e)
        }

        function q(e) {
          return "function" == typeof e
        }

        function M(e) {
          return function() {
            try {
              return e.apply(e, arguments)
            } catch (e) {
              console.error(e)
            }
          }
        }
        var j = "REJECTED",
          V = "NOT_PENDING",
          K = function() {
            function e() {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = t.createPromise,
                a = t.retryRule,
                r = void 0 === a ? j : a;
              (0, y.default)(this, e), this.createPromise = n, this.status = null, this.promise = null, this.retryRule = r
            }
            return (0, m.default)(e, [{
              key: "needRetry",
              get: function() {
                if (!this.status) return !0;
                switch (this.retryRule) {
                  case j:
                    return this.status === L;
                  case V:
                    return this.status !== E
                }
              }
            }, {
              key: "exec",
              value: function() {
                var e = this;
                return this.needRetry ? (this.status = E, this.promise = this.createPromise().then((function(t) {
                  return e.status = "fulfilled", Promise.resolve(t)
                }), (function(t) {
                  return e.status = L, Promise.reject(t)
                })), this.promise) : this.promise
              }
            }]), e
          }(),
          W = function() {
            function e() {
              (0, y.default)(this, e), this._callback = {}
            }
            return (0, m.default)(e, [{
              key: "addListener",
              value: function(e, t) {
                this._callback[e] || (this._callback[e] = []), this._callback[e].push(t)
              }
            }, {
              key: "on",
              value: function(e, t) {
                return this.addListener(e, t)
              }
            }, {
              key: "removeListener",
              value: function(e, t) {
                if (!t) throw new Error('The "listener" argument must be of type function. Received undefined');
                var n = this._callback[e];
                if (n) {
                  var a = function(e, t) {
                    for (var n = e.length - 1; n >= 0; n--)
                      if (e[n] === t) return n;
                    return -1
                  }(n, t);
                  n.splice(a, 1)
                }
              }
            }, {
              key: "off",
              value: function(e, t) {
                return this.removeListener(e, t)
              }
            }, {
              key: "removeAllListener",
              value: function(e) {
                delete this._callback[e]
              }
            }, {
              key: "emit",
              value: function(e) {
                for (var t = this._callback[e], n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) a[r - 1] = arguments[r];
                if (t)
                  for (var o = 0; o < t.length; o++) t[o].apply(t, a)
              }
            }]), e
          }();

        function H(e) {
          return e && "string" == typeof e ? JSON.parse(e) : e
        }
        var J = H([]),
          $ = "mp-weixin",
          Y = (H(void 0), H([]) || []);
        try {
          (n("6e5d").default || n("6e5d")).appid
        } catch (e) {}
        var z = {};

        function G(e) {
          var t, n, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return t = z, n = e, Object.prototype.hasOwnProperty.call(t, n) || (z[e] = a), z[e]
        }
        var Q = ["invoke", "success", "fail", "complete"],
          X = G("_globalUniCloudInterceptor");

        function Z(e, t) {
          X[e] || (X[e] = {}), U(t) && Object.keys(t).forEach((function(n) {
            Q.indexOf(n) > -1 && function(e, t, n) {
              var a = X[e][t];
              a || (a = X[e][t] = []), -1 === a.indexOf(n) && q(n) && a.push(n)
            }(e, n, t[n])
          }))
        }

        function ee(e, t) {
          X[e] || (X[e] = {}), U(t) ? Object.keys(t).forEach((function(n) {
            Q.indexOf(n) > -1 && function(e, t, n) {
              var a = X[e][t];
              if (a) {
                var r = a.indexOf(n);
                r > -1 && a.splice(r, 1)
              }
            }(e, n, t[n])
          })) : delete X[e]
        }

        function te(e, t) {
          return e && 0 !== e.length ? e.reduce((function(e, n) {
            return e.then((function() {
              return n(t)
            }))
          }), Promise.resolve()) : Promise.resolve()
        }

        function ne(e, t) {
          return X[e] && X[e][t] || []
        }

        function ae(e) {
          Z("callObject", e)
        }
        var re = G("_globalUniCloudListener"),
          oe = "response",
          ie = "needLogin",
          se = "refreshToken",
          le = "clientdb",
          ue = "cloudfunction",
          ce = "cloudobject";

        function fe(e) {
          return re[e] || (re[e] = []), re[e]
        }

        function de(e, t) {
          var n = fe(e);
          n.includes(t) || n.push(t)
        }

        function he(e, t) {
          var n = fe(e),
            a = n.indexOf(t); - 1 !== a && n.splice(a, 1)
        }

        function pe(e, t) {
          for (var n = fe(e), a = 0; a < n.length; a++)(0, n[a])(t)
        }
        var ge, ve = !1;

        function ye() {
          return ge || (ge = new Promise((function(e) {
            ve && e(),
              function t() {
                if ("function" == typeof getCurrentPages) {
                  var n = getCurrentPages();
                  n && n[0] && (ve = !0, e())
                }
                ve || setTimeout((function() {
                  t()
                }), 30)
              }()
          })))
        }

        function me(e) {
          var t = {};
          for (var n in e) {
            var a = e[n];
            q(a) && (t[n] = M(a))
          }
          return t
        }
        var Fe = function(e) {
          (0, h.default)(n, e);
          var t = x(n);

          function n(e) {
            var a;
            return (0, y.default)(this, n), (a = t.call(this, e.message)).errMsg = e.message || e.errMsg || "unknown system error", a.code = a.errCode = e.code || e.errCode || "SYSTEM_ERROR", a.errSubject = a.subject = e.subject || e.errSubject, a.cause = e.cause, a.requestId = e.requestId, a
          }
          return (0, m.default)(n, [{
            key: "toJson",
            value: function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
              if (!(e >= 10)) return e++, {
                errCode: this.errCode,
                errMsg: this.errMsg,
                errSubject: this.errSubject,
                cause: this.cause && this.cause.toJson ? this.cause.toJson(e) : this.cause
              }
            }
          }]), n
        }((0, v.default)(Error));
        t.UniCloudError = Fe;
        var ke, we, be = {
          request: function(e) {
            return a.request(e)
          },
          uploadFile: function(e) {
            return a.uploadFile(e)
          },
          setStorageSync: function(e, t) {
            return a.setStorageSync(e, t)
          },
          getStorageSync: function(e) {
            return a.getStorageSync(e)
          },
          removeStorageSync: function(e) {
            return a.removeStorageSync(e)
          },
          clearStorageSync: function() {
            return a.clearStorageSync()
          },
          connectSocket: function(e) {
            return a.connectSocket(e)
          }
        };

        function Te() {
          return {
            token: be.getStorageSync(D) || be.getStorageSync("uniIdToken"),
            tokenExpired: be.getStorageSync(R)
          }
        }

        function xe() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.token,
            n = e.tokenExpired;
          t && be.setStorageSync(D, t), n && be.setStorageSync(R, n)
        }

        function Be() {
          return ke || (ke = a.getSystemInfoSync()), ke
        }
        var Se = {};

        function Pe() {
          var e = a.getLocale && a.getLocale() || "en";
          if (we) return T(T(T({}, Se), we), {}, {
            locale: e,
            LOCALE: e
          });
          var t = Be(),
            n = t.deviceId,
            r = t.osName,
            o = t.uniPlatform,
            i = t.appId,
            s = ["appId", "appLanguage", "appName", "appVersion", "appVersionCode", "appWgtVersion", "browserName", "browserVersion", "deviceBrand", "deviceId", "deviceModel", "deviceType", "osName", "osVersion", "romName", "romVersion", "ua", "hostName", "hostVersion", "uniPlatform", "uniRuntimeVersion", "uniRuntimeVersionCode", "uniCompilerVersion", "uniCompilerVersionCode"];
          for (var l in t) Object.hasOwnProperty.call(t, l) && -1 === s.indexOf(l) && delete t[l];
          return we = T(T({
            PLATFORM: o,
            OS: r,
            APPID: i,
            DEVICEID: n
          }, function() {
            var e, t;
            try {
              if (a.getLaunchOptionsSync) {
                if (a.getLaunchOptionsSync.toString().indexOf("not yet implemented") > -1) return;
                var n = a.getLaunchOptionsSync(),
                  r = n.scene;
                e = n.channel, t = r
              }
            } catch (e) {}
            return {
              channel: e,
              scene: t
            }
          }()), t), T(T(T({}, Se), we), {}, {
            locale: e,
            LOCALE: e
          })
        }
        var _e, Ce = function(e, t) {
            var n = "";
            return Object.keys(e).sort().forEach((function(t) {
              e[t] && (n = n + "&" + t + "=" + e[t])
            })), n = n.slice(1), P(n, t).toString()
          },
          De = function(e, t) {
            return new Promise((function(n, a) {
              t(Object.assign(e, {
                complete: function(e) {
                  e || (e = {});
                  var t = e.data && e.data.header && e.data.header["x-serverless-request-id"] || e.header && e.header["request-id"];
                  if (!e.statusCode || e.statusCode >= 400) {
                    var r = e.data && e.data.error && e.data.error.code || "SYS_ERR",
                      o = e.data && e.data.error && e.data.error.message || e.errMsg || "request:fail";
                    return a(new Fe({
                      code: r,
                      message: o,
                      requestId: t
                    }))
                  }
                  var i = e.data;
                  if (i.error) return a(new Fe({
                    code: i.error.code,
                    message: i.error.message,
                    requestId: t
                  }));
                  i.result = i.data, i.requestId = t, delete i.data, n(i)
                }
              }))
            }))
          },
          Re = function(e) {
            return C.stringify(_.parse(e))
          },
          Ie = function() {
            function e(t) {
              var n = this;
              (0, y.default)(this, e), ["spaceId", "clientSecret"].forEach((function(e) {
                if (!Object.prototype.hasOwnProperty.call(t, e)) throw new Error("".concat(e, " required"))
              })), this.config = Object.assign({}, {
                endpoint: 0 === t.spaceId.indexOf("mp-") ? "https://api.next.bspapp.com" : "https://api.bspapp.com"
              }, t), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = be, this._getAccessTokenPromiseHub = new K({
                createPromise: function() {
                  return n.requestAuth(n.setupRequest({
                    method: "serverless.auth.user.anonymousAuthorize",
                    params: "{}"
                  }, "auth")).then((function(e) {
                    if (!e.result || !e.result.accessToken) throw new Fe({
                      code: "AUTH_FAILED",
                      message: "获取accessToken失败"
                    });
                    n.setAccessToken(e.result.accessToken)
                  }))
                },
                retryRule: V
              })
            }
            return (0, m.default)(e, [{
              key: "hasAccessToken",
              get: function() {
                return !!this.accessToken
              }
            }, {
              key: "setAccessToken",
              value: function(e) {
                this.accessToken = e
              }
            }, {
              key: "requestWrapped",
              value: function(e) {
                return De(e, this.adapter.request)
              }
            }, {
              key: "requestAuth",
              value: function(e) {
                return this.requestWrapped(e)
              }
            }, {
              key: "request",
              value: function(e, t) {
                var n = this;
                return Promise.resolve().then((function() {
                  return n.hasAccessToken ? t ? n.requestWrapped(e) : n.requestWrapped(e).catch((function(t) {
                    return new Promise((function(e, n) {
                      !t || "GATEWAY_INVALID_TOKEN" !== t.code && "InvalidParameter.InvalidToken" !== t.code ? n(t) : e()
                    })).then((function() {
                      return n.getAccessToken()
                    })).then((function() {
                      var t = n.rebuildRequest(e);
                      return n.request(t, !0)
                    }))
                  })) : n.getAccessToken().then((function() {
                    var t = n.rebuildRequest(e);
                    return n.request(t, !0)
                  }))
                }))
              }
            }, {
              key: "rebuildRequest",
              value: function(e) {
                var t = Object.assign({}, e);
                return t.data.token = this.accessToken, t.header["x-basement-token"] = this.accessToken, t.header["x-serverless-sign"] = Ce(t.data, this.config.clientSecret), t
              }
            }, {
              key: "setupRequest",
              value: function(e, t) {
                var n = Object.assign({}, e, {
                    spaceId: this.config.spaceId,
                    timestamp: Date.now()
                  }),
                  a = {
                    "Content-Type": "application/json"
                  };
                return "auth" !== t && (n.token = this.accessToken, a["x-basement-token"] = this.accessToken), a["x-serverless-sign"] = Ce(n, this.config.clientSecret), {
                  url: this.config.requestUrl,
                  method: "POST",
                  data: n,
                  dataType: "json",
                  header: a
                }
              }
            }, {
              key: "getAccessToken",
              value: function() {
                return this._getAccessTokenPromiseHub.exec()
              }
            }, {
              key: "authorize",
              value: function() {
                var e = (0, f.default)(i.default.mark((function e() {
                  return i.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, this.getAccessToken();
                      case 2:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                })));
                return function() {
                  return e.apply(this, arguments)
                }
              }()
            }, {
              key: "callFunction",
              value: function(e) {
                var t = {
                  method: "serverless.function.runtime.invoke",
                  params: JSON.stringify({
                    functionTarget: e.name,
                    functionArgs: e.data || {}
                  })
                };
                return this.request(T(T({}, this.setupRequest(t)), {}, {
                  timeout: e.timeout
                }))
              }
            }, {
              key: "getOSSUploadOptionsFromPath",
              value: function(e) {
                var t = {
                  method: "serverless.file.resource.generateProximalSign",
                  params: JSON.stringify(e)
                };
                return this.request(this.setupRequest(t))
              }
            }, {
              key: "uploadFileToOSS",
              value: function(e) {
                var t = this,
                  n = e.url,
                  a = e.formData,
                  r = e.name,
                  o = e.filePath,
                  i = e.fileType,
                  s = e.onUploadProgress;
                return new Promise((function(e, l) {
                  var u = t.adapter.uploadFile({
                    url: n,
                    formData: a,
                    name: r,
                    filePath: o,
                    fileType: i,
                    header: {
                      "X-OSS-server-side-encrpytion": "AES256"
                    },
                    success: function(t) {
                      t && t.statusCode < 400 ? e(t) : l(new Fe({
                        code: "UPLOAD_FAILED",
                        message: "文件上传失败"
                      }))
                    },
                    fail: function(e) {
                      l(new Fe({
                        code: e.code || "UPLOAD_FAILED",
                        message: e.message || e.errMsg || "文件上传失败"
                      }))
                    }
                  });
                  "function" == typeof s && u && "function" == typeof u.onProgressUpdate && u.onProgressUpdate((function(e) {
                    s({
                      loaded: e.totalBytesSent,
                      total: e.totalBytesExpectedToSend
                    })
                  }))
                }))
              }
            }, {
              key: "reportOSSUpload",
              value: function(e) {
                var t = {
                  method: "serverless.file.resource.report",
                  params: JSON.stringify(e)
                };
                return this.request(this.setupRequest(t))
              }
            }, {
              key: "uploadFile",
              value: function() {
                var e = (0, f.default)(i.default.mark((function e(t) {
                  var n, a, r, o, s, l, u, c, f, d, h, p, g, v, y, m, F, k, w, b, T, x;
                  return i.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (n = t.filePath, a = t.cloudPath, r = t.fileType, o = void 0 === r ? "image" : r, s = t.cloudPathAsRealPath, l = void 0 !== s && s, u = t.onUploadProgress, c = t.config, "string" === N(a)) {
                          e.next = 3;
                          break
                        }
                        throw new Fe({
                          code: "INVALID_PARAM",
                          message: "cloudPath必须为字符串类型"
                        });
                      case 3:
                        if (a = a.trim()) {
                          e.next = 5;
                          break
                        }
                        throw new Fe({
                          code: "INVALID_PARAM",
                          message: "cloudPath不可为空"
                        });
                      case 5:
                        if (!/:\/\//.test(a)) {
                          e.next = 7;
                          break
                        }
                        throw new Fe({
                          code: "INVALID_PARAM",
                          message: "cloudPath不合法"
                        });
                      case 7:
                        if (f = c && c.envType || this.config.envType, !(l && ("/" !== a[0] && (a = "/" + a), a.indexOf("\\") > -1))) {
                          e.next = 10;
                          break
                        }
                        throw new Fe({
                          code: "INVALID_PARAM",
                          message: "使用cloudPath作为路径时，cloudPath不可包含“\\”"
                        });
                      case 10:
                        return e.next = 12, this.getOSSUploadOptionsFromPath({
                          env: f,
                          filename: l ? a.split("/").pop() : a,
                          fileId: l ? a : void 0
                        });
                      case 12:
                        return d = e.sent.result, h = "https://" + d.cdnDomain + "/" + d.ossPath, p = d.securityToken, g = d.accessKeyId, v = d.signature, y = d.host, m = d.ossPath, F = d.id, k = d.policy, w = d.ossCallbackUrl, b = {
                          "Cache-Control": "max-age=2592000",
                          "Content-Disposition": "attachment",
                          OSSAccessKeyId: g,
                          Signature: v,
                          host: y,
                          id: F,
                          key: m,
                          policy: k,
                          success_action_status: 200
                        }, p && (b["x-oss-security-token"] = p), w && (T = JSON.stringify({
                          callbackUrl: w,
                          callbackBody: JSON.stringify({
                            fileId: F,
                            spaceId: this.config.spaceId
                          }),
                          callbackBodyType: "application/json"
                        }), b.callback = Re(T)), x = {
                          url: "https://" + d.host,
                          formData: b,
                          fileName: "file",
                          name: "file",
                          filePath: n,
                          fileType: o
                        }, e.next = 27, this.uploadFileToOSS(Object.assign({}, x, {
                          onUploadProgress: u
                        }));
                      case 27:
                        if (!w) {
                          e.next = 29;
                          break
                        }
                        return e.abrupt("return", {
                          success: !0,
                          filePath: n,
                          fileID: h
                        });
                      case 29:
                        return e.next = 31, this.reportOSSUpload({
                          id: F
                        });
                      case 31:
                        if (!e.sent.success) {
                          e.next = 33;
                          break
                        }
                        return e.abrupt("return", {
                          success: !0,
                          filePath: n,
                          fileID: h
                        });
                      case 33:
                        throw new Fe({
                          code: "UPLOAD_FAILED",
                          message: "文件上传失败"
                        });
                      case 34:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                })));
                return function(t) {
                  return e.apply(this, arguments)
                }
              }()
            }, {
              key: "getTempFileURL",
              value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  t = e.fileList;
                return new Promise((function(e, n) {
                  Array.isArray(t) && 0 !== t.length || n(new Fe({
                    code: "INVALID_PARAM",
                    message: "fileList的元素必须是非空的字符串"
                  })), e({
                    fileList: t.map((function(e) {
                      return {
                        fileID: e,
                        tempFileURL: e
                      }
                    }))
                  })
                }))
              }
            }, {
              key: "getFileInfo",
              value: function() {
                var e = (0, f.default)(i.default.mark((function e() {
                  var t, n, a, r = arguments;
                  return i.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (t = r.length > 0 && void 0 !== r[0] ? r[0] : {}, n = t.fileList, Array.isArray(n) && 0 !== n.length) {
                          e.next = 3;
                          break
                        }
                        throw new Fe({
                          code: "INVALID_PARAM",
                          message: "fileList的元素必须是非空的字符串"
                        });
                      case 3:
                        return a = {
                          method: "serverless.file.resource.info",
                          params: JSON.stringify({
                            id: n.map((function(e) {
                              return e.split("?")[0]
                            })).join(",")
                          })
                        }, e.next = 6, this.request(this.setupRequest(a));
                      case 6:
                        return e.t0 = e.sent.result, e.abrupt("return", {
                          fileList: e.t0
                        });
                      case 8:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                })));
                return function() {
                  return e.apply(this, arguments)
                }
              }()
            }]), e
          }(),
          Oe = {
            init: function(e) {
              var t = new Ie(e),
                n = {
                  signInAnonymously: function() {
                    return t.authorize()
                  },
                  getLoginState: function() {
                    return Promise.resolve(!1)
                  }
                };
              return t.auth = function() {
                return n
              }, t.customAuth = t.auth, t
            }
          },
          Ae = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";
        ! function(e) {
          e.local = "local", e.none = "none", e.session = "session"
        }(_e || (_e = {}));
        var Ee, Le = B((function(e, t) {
            var n;
            e.exports = (n = S, function(e) {
              var t = n,
                a = t.lib,
                r = a.WordArray,
                o = a.Hasher,
                i = t.algo,
                s = [],
                l = [];
              ! function() {
                function t(t) {
                  for (var n = e.sqrt(t), a = 2; a <= n; a++)
                    if (!(t % a)) return !1;
                  return !0
                }

                function n(e) {
                  return 4294967296 * (e - (0 | e)) | 0
                }
                for (var a = 2, r = 0; r < 64;) t(a) && (r < 8 && (s[r] = n(e.pow(a, .5))), l[r] = n(e.pow(a, 1 / 3)), r++), a++
              }();
              var u = [],
                c = i.SHA256 = o.extend({
                  _doReset: function() {
                    this._hash = new r.init(s.slice(0))
                  },
                  _doProcessBlock: function(e, t) {
                    for (var n = this._hash.words, a = n[0], r = n[1], o = n[2], i = n[3], s = n[4], c = n[5], f = n[6], d = n[7], h = 0; h < 64; h++) {
                      if (h < 16) u[h] = 0 | e[t + h];
                      else {
                        var p = u[h - 15],
                          g = (p << 25 | p >>> 7) ^ (p << 14 | p >>> 18) ^ p >>> 3,
                          v = u[h - 2],
                          y = (v << 15 | v >>> 17) ^ (v << 13 | v >>> 19) ^ v >>> 10;
                        u[h] = g + u[h - 7] + y + u[h - 16]
                      }
                      var m = a & r ^ a & o ^ r & o,
                        F = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22),
                        k = d + ((s << 26 | s >>> 6) ^ (s << 21 | s >>> 11) ^ (s << 7 | s >>> 25)) + (s & c ^ ~s & f) + l[h] + u[h];
                      d = f, f = c, c = s, s = i + k | 0, i = o, o = r, r = a, a = k + (F + m) | 0
                    }
                    n[0] = n[0] + a | 0, n[1] = n[1] + r | 0, n[2] = n[2] + o | 0, n[3] = n[3] + i | 0, n[4] = n[4] + s | 0, n[5] = n[5] + c | 0, n[6] = n[6] + f | 0, n[7] = n[7] + d | 0
                  },
                  _doFinalize: function() {
                    var t = this._data,
                      n = t.words,
                      a = 8 * this._nDataBytes,
                      r = 8 * t.sigBytes;
                    return n[r >>> 5] |= 128 << 24 - r % 32, n[14 + (r + 64 >>> 9 << 4)] = e.floor(a / 4294967296), n[15 + (r + 64 >>> 9 << 4)] = a, t.sigBytes = 4 * n.length, this._process(), this._hash
                  },
                  clone: function() {
                    var e = o.clone.call(this);
                    return e._hash = this._hash.clone(), e
                  }
                });
              t.SHA256 = o._createHelper(c), t.HmacSHA256 = o._createHmacHelper(c)
            }(Math), n.SHA256)
          })),
          Ne = B((function(e, t) {
            e.exports = S.HmacSHA256
          })),
          Ue = function() {
            var e;
            if (!Promise) {
              (e = function() {}).promise = {};
              var t = function() {
                throw new Fe({
                  message: 'Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.'
                })
              };
              return Object.defineProperty(e.promise, "then", {
                get: t
              }), Object.defineProperty(e.promise, "catch", {
                get: t
              }), e
            }
            var n = new Promise((function(t, n) {
              e = function(e, a) {
                return e ? n(e) : t(a)
              }
            }));
            return e.promise = n, e
          };

        function qe(e) {
          return void 0 === e
        }

        function Me(e) {
          return "[object Null]" === Object.prototype.toString.call(e)
        }

        function je() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return e.replace(/([\s\S]+)\s+(请前往云开发AI小助手查看问题：.*)/, "$1")
        }

        function Ve() {
          for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 32, t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = "", a = 0; a < e; a++) n += t.charAt(Math.floor(62 * Math.random()));
          return n
        }! function(e) {
          e.WEB = "web", e.WX_MP = "wx_mp"
        }(Ee || (Ee = {}));
        var Ke = {
            adapter: null,
            runtime: void 0
          },
          We = ["anonymousUuidKey"],
          He = function(e) {
            (0, h.default)(n, e);
            var t = x(n);

            function n() {
              var e;
              return (0, y.default)(this, n), e = t.call(this), Ke.adapter.root.tcbObject || (Ke.adapter.root.tcbObject = {}), e
            }
            return (0, m.default)(n, [{
              key: "setItem",
              value: function(e, t) {
                Ke.adapter.root.tcbObject[e] = t
              }
            }, {
              key: "getItem",
              value: function(e) {
                return Ke.adapter.root.tcbObject[e]
              }
            }, {
              key: "removeItem",
              value: function(e) {
                delete Ke.adapter.root.tcbObject[e]
              }
            }, {
              key: "clear",
              value: function() {
                delete Ke.adapter.root.tcbObject
              }
            }]), n
          }((function() {}));

        function Je(e, t) {
          switch (e) {
            case "local":
              return t.localStorage || new He;
            case "none":
              return new He;
            default:
              return t.sessionStorage || new He
          }
        }
        var $e = function() {
            function e(t) {
              if ((0, y.default)(this, e), !this._storage) {
                this._persistence = Ke.adapter.primaryStorage || t.persistence, this._storage = Je(this._persistence, Ke.adapter);
                var n = "access_token_".concat(t.env),
                  a = "access_token_expire_".concat(t.env),
                  r = "refresh_token_".concat(t.env),
                  o = "anonymous_uuid_".concat(t.env),
                  i = "login_type_".concat(t.env),
                  s = "token_type_".concat(t.env),
                  l = "user_info_".concat(t.env);
                this.keys = {
                  accessTokenKey: n,
                  accessTokenExpireKey: a,
                  refreshTokenKey: r,
                  anonymousUuidKey: o,
                  loginTypeKey: i,
                  userInfoKey: l,
                  deviceIdKey: "device_id",
                  tokenTypeKey: s
                }
              }
            }
            return (0, m.default)(e, [{
              key: "updatePersistence",
              value: function(e) {
                if (e !== this._persistence) {
                  var t = "local" === this._persistence;
                  this._persistence = e;
                  var n = Je(e, Ke.adapter);
                  for (var a in this.keys) {
                    var r = this.keys[a];
                    if (!t || !We.includes(a)) {
                      var o = this._storage.getItem(r);
                      qe(o) || Me(o) || (n.setItem(r, o), this._storage.removeItem(r))
                    }
                  }
                  this._storage = n
                }
              }
            }, {
              key: "setStore",
              value: function(e, t, n) {
                if (this._storage) {
                  var a = {
                      version: n || "localCachev1",
                      content: t
                    },
                    r = JSON.stringify(a);
                  try {
                    this._storage.setItem(e, r)
                  } catch (e) {
                    throw e
                  }
                }
              }
            }, {
              key: "getStore",
              value: function(e, t) {
                try {
                  if (!this._storage) return
                } catch (e) {
                  return ""
                }
                t = t || "localCachev1";
                var n = this._storage.getItem(e);
                return n && n.indexOf(t) >= 0 ? JSON.parse(n).content : ""
              }
            }, {
              key: "removeStore",
              value: function(e) {
                this._storage.removeItem(e)
              }
            }]), e
          }(),
          Ye = {},
          ze = {};

        function Ge(e) {
          return Ye[e]
        }
        var Qe = (0, m.default)((function e(t, n) {
            (0, y.default)(this, e), this.data = n || null, this.name = t
          })),
          Xe = function(e) {
            (0, h.default)(n, e);
            var t = x(n);

            function n(e, a) {
              var r;
              return (0, y.default)(this, n), (r = t.call(this, "error", {
                error: e,
                data: a
              })).error = e, r
            }
            return (0, m.default)(n)
          }(Qe),
          Ze = new(function() {
            function e() {
              (0, y.default)(this, e), this._listeners = {}
            }
            return (0, m.default)(e, [{
              key: "on",
              value: function(e, t) {
                return function(e, t, n) {
                  n[e] = n[e] || [], n[e].push(t)
                }(e, t, this._listeners), this
              }
            }, {
              key: "off",
              value: function(e, t) {
                return function(e, t, n) {
                  if (n && n[e]) {
                    var a = n[e].indexOf(t); - 1 !== a && n[e].splice(a, 1)
                  }
                }(e, t, this._listeners), this
              }
            }, {
              key: "fire",
              value: function(e, t) {
                if (e instanceof Xe) return console.error(e.error), this;
                var n = "string" == typeof e ? new Qe(e, t || {}) : e,
                  a = n.name;
                if (this._listens(a)) {
                  n.target = this;
                  var r, o = k(this._listeners[a] ? (0, c.default)(this._listeners[a]) : []);
                  try {
                    for (o.s(); !(r = o.n()).done;) {
                      r.value.call(this, n)
                    }
                  } catch (e) {
                    o.e(e)
                  } finally {
                    o.f()
                  }
                }
                return this
              }
            }, {
              key: "_listens",
              value: function(e) {
                return this._listeners[e] && this._listeners[e].length > 0
              }
            }]), e
          }());

        function et(e, t) {
          Ze.on(e, t)
        }

        function tt(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          Ze.fire(e, t)
        }

        function nt(e, t) {
          Ze.off(e, t)
        }
        var at, rt = "loginStateChanged",
          ot = "loginStateExpire",
          it = "loginTypeChanged",
          st = "anonymousConverted",
          lt = "refreshAccessToken";
        ! function(e) {
          e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.WECHAT_PUBLIC = "WECHAT-PUBLIC", e.WECHAT_OPEN = "WECHAT-OPEN", e.CUSTOM = "CUSTOM", e.EMAIL = "EMAIL", e.USERNAME = "USERNAME", e.NULL = "NULL"
        }(at || (at = {}));
        var ut = function() {
            function e() {
              (0, y.default)(this, e), this._fnPromiseMap = new Map
            }
            return (0, m.default)(e, [{
              key: "run",
              value: function() {
                var e = (0, f.default)(i.default.mark((function e(t, n) {
                  var a, r = this;
                  return i.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return a = this._fnPromiseMap.get(t), e.abrupt("return", (a || (a = new Promise(function() {
                          var e = (0, f.default)(i.default.mark((function e(a, o) {
                            var s;
                            return i.default.wrap((function(e) {
                              for (;;) switch (e.prev = e.next) {
                                case 0:
                                  return e.prev = 0, e.next = 3, r._runIdlePromise();
                                case 3:
                                  return s = n(), e.t0 = a, e.next = 7, s;
                                case 7:
                                  e.t1 = e.sent, (0, e.t0)(e.t1), e.next = 14;
                                  break;
                                case 11:
                                  e.prev = 11, e.t2 = e.catch(0), o(e.t2);
                                case 14:
                                  return e.prev = 14, r._fnPromiseMap.delete(t), e.finish(14);
                                case 17:
                                case "end":
                                  return e.stop()
                              }
                            }), e, null, [
                              [0, 11, 14, 17]
                            ])
                          })));
                          return function(t, n) {
                            return e.apply(this, arguments)
                          }
                        }()), this._fnPromiseMap.set(t, a)), a));
                      case 2:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                })));
                return function(t, n) {
                  return e.apply(this, arguments)
                }
              }()
            }, {
              key: "_runIdlePromise",
              value: function() {
                return Promise.resolve()
              }
            }]), e
          }(),
          ct = function() {
            function e(t) {
              (0, y.default)(this, e), this._singlePromise = new ut, this._cache = Ge(t.env), this._baseURL = "https://".concat(t.env, ".ap-shanghai.tcb-api.tencentcloudapi.com"), this._reqClass = new Ke.adapter.reqClass({
                timeout: t.timeout,
                timeoutMsg: "请求在".concat(t.timeout / 1e3, "s内未完成，已中断"),
                restrictedMethods: ["post"]
              })
            }
            return (0, m.default)(e, [{
              key: "_getDeviceId",
              value: function() {
                if (this._deviceID) return this._deviceID;
                var e = this._cache.keys.deviceIdKey,
                  t = this._cache.getStore(e);
                return "string" == typeof t && t.length >= 16 && t.length <= 48 || (t = Ve(), this._cache.setStore(e, t)), this._deviceID = t, t
              }
            }, {
              key: "_request",
              value: function() {
                var e = (0, f.default)(i.default.mark((function e(t, n) {
                  var a, r, o, s, l, u = arguments;
                  return i.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (a = u.length > 2 && void 0 !== u[2] ? u[2] : {}, r = {
                            "x-request-id": Ve(),
                            "x-device-id": this._getDeviceId()
                          }, !a.withAccessToken) {
                          e.next = 9;
                          break
                        }
                        return o = this._cache.keys.tokenTypeKey, e.next = 6, this.getAccessToken();
                      case 6:
                        s = e.sent, l = this._cache.getStore(o), r.authorization = "".concat(l, " ").concat(s);
                      case 9:
                        return e.abrupt("return", this._reqClass["get" === a.method ? "get" : "post"]({
                          url: "".concat(this._baseURL).concat(t),
                          data: n,
                          headers: r
                        }));
                      case 10:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                })));
                return function(t, n) {
                  return e.apply(this, arguments)
                }
              }()
            }, {
              key: "_fetchAccessToken",
              value: function() {
                var e = (0, f.default)(i.default.mark((function e() {
                  var t, n, a, r, o, s, l, u, c, d, h = this;
                  return i.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (t = this._cache.keys, n = t.loginTypeKey, a = t.accessTokenKey, r = t.accessTokenExpireKey, o = t.tokenTypeKey, !(s = this._cache.getStore(n)) || s === at.ANONYMOUS) {
                          e.next = 3;
                          break
                        }
                        throw new Fe({
                          code: "INVALID_OPERATION",
                          message: "非匿名登录不支持刷新 access token"
                        });
                      case 3:
                        return e.next = 5, this._singlePromise.run("fetchAccessToken", (0, f.default)(i.default.mark((function e() {
                          return i.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, h._request("/auth/v1/signin/anonymously", {}, {
                                  method: "post"
                                });
                              case 2:
                                return e.abrupt("return", e.sent.data);
                              case 3:
                              case "end":
                                return e.stop()
                            }
                          }), e)
                        }))));
                      case 5:
                        return l = e.sent, u = l.access_token, c = l.expires_in, d = l.token_type, e.abrupt("return", (this._cache.setStore(o, d), this._cache.setStore(a, u), this._cache.setStore(r, Date.now() + 1e3 * c), u));
                      case 10:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                })));
                return function() {
                  return e.apply(this, arguments)
                }
              }()
            }, {
              key: "isAccessTokenExpired",
              value: function(e, t) {
                var n = !0;
                return e && t && (n = t < Date.now()), n
              }
            }, {
              key: "getAccessToken",
              value: function() {
                var e = (0, f.default)(i.default.mark((function e() {
                  var t, n, a, r, o;
                  return i.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = this._cache.keys, n = t.accessTokenKey, a = t.accessTokenExpireKey, r = this._cache.getStore(n), o = this._cache.getStore(a), e.abrupt("return", this.isAccessTokenExpired(r, o) ? this._fetchAccessToken() : r);
                      case 2:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                })));
                return function() {
                  return e.apply(this, arguments)
                }
              }()
            }, {
              key: "refreshAccessToken",
              value: function() {
                var e = (0, f.default)(i.default.mark((function e() {
                  var t, n, a, r;
                  return i.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = this._cache.keys, n = t.accessTokenKey, a = t.accessTokenExpireKey, r = t.loginTypeKey, e.abrupt("return", (this._cache.removeStore(n), this._cache.removeStore(a), this._cache.setStore(r, at.ANONYMOUS), this.getAccessToken()));
                      case 2:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                })));
                return function() {
                  return e.apply(this, arguments)
                }
              }()
            }, {
              key: "getUserInfo",
              value: function() {
                var e = (0, f.default)(i.default.mark((function e() {
                  var t = this;
                  return i.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.abrupt("return", this._singlePromise.run("getUserInfo", (0, f.default)(i.default.mark((function e() {
                          return i.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, t._request("/auth/v1/user/me", {}, {
                                  withAccessToken: !0,
                                  method: "get"
                                });
                              case 2:
                                return e.abrupt("return", e.sent.data);
                              case 3:
                              case "end":
                                return e.stop()
                            }
                          }), e)
                        })))));
                      case 1:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                })));
                return function() {
                  return e.apply(this, arguments)
                }
              }()
            }]), e
          }(),
          ft = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"],
          dt = {
            "X-SDK-Version": "1.3.5"
          };

        function ht(e, t, n) {
          var a = e[t];
          e[t] = function(t) {
            var r = {},
              o = {};
            n.forEach((function(n) {
              var a = n.call(e, t),
                i = a.data,
                s = a.headers;
              Object.assign(r, i), Object.assign(o, s)
            }));
            var i = t.data;
            return i && function() {
              var e;
              if (e = i, "[object FormData]" !== Object.prototype.toString.call(e)) t.data = T(T({}, i), r);
              else
                for (var n in r) i.append(n, r[n])
            }(), t.headers = T(T({}, t.headers || {}), o), a.call(e, t)
          }
        }

        function pt() {
          var e = Math.random().toString(16).slice(2);
          return {
            data: {
              seqId: e
            },
            headers: T(T({}, dt), {}, {
              "x-seqid": e
            })
          }
        }
        var gt = function() {
            function e() {
              var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              (0, y.default)(this, e), this.config = n, this._reqClass = new Ke.adapter.reqClass({
                timeout: this.config.timeout,
                timeoutMsg: "请求在".concat(this.config.timeout / 1e3, "s内未完成，已中断"),
                restrictedMethods: ["post"]
              }), this._cache = Ge(this.config.env), this._localCache = (t = this.config.env, ze[t]), this.oauth = new ct(this.config), ht(this._reqClass, "post", [pt]), ht(this._reqClass, "upload", [pt]), ht(this._reqClass, "download", [pt])
            }
            return (0, m.default)(e, [{
              key: "post",
              value: function() {
                var e = (0, f.default)(i.default.mark((function e(t) {
                  return i.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, this._reqClass.post(t);
                      case 2:
                        return e.abrupt("return", e.sent);
                      case 3:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                })));
                return function(t) {
                  return e.apply(this, arguments)
                }
              }()
            }, {
              key: "upload",
              value: function() {
                var e = (0, f.default)(i.default.mark((function e(t) {
                  return i.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, this._reqClass.upload(t);
                      case 2:
                        return e.abrupt("return", e.sent);
                      case 3:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                })));
                return function(t) {
                  return e.apply(this, arguments)
                }
              }()
            }, {
              key: "download",
              value: function() {
                var e = (0, f.default)(i.default.mark((function e(t) {
                  return i.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, this._reqClass.download(t);
                      case 2:
                        return e.abrupt("return", e.sent);
                      case 3:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                })));
                return function(t) {
                  return e.apply(this, arguments)
                }
              }()
            }, {
              key: "refreshAccessToken",
              value: function() {
                var e = (0, f.default)(i.default.mark((function e() {
                  var t, n;
                  return i.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken()), e.prev = 1, e.next = 4, this._refreshAccessTokenPromise;
                      case 4:
                        t = e.sent, e.next = 10;
                        break;
                      case 7:
                        e.prev = 7, e.t0 = e.catch(1), n = e.t0;
                      case 10:
                        if (this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, !n) {
                          e.next = 12;
                          break
                        }
                        throw n;
                      case 12:
                        return e.abrupt("return", t);
                      case 13:
                      case "end":
                        return e.stop()
                    }
                  }), e, this, [
                    [1, 7]
                  ])
                })));
                return function() {
                  return e.apply(this, arguments)
                }
              }()
            }, {
              key: "_refreshAccessToken",
              value: function() {
                var e = (0, f.default)(i.default.mark((function e() {
                  var t, n, a, r, o, s, l, u, c, f, d, h, p;
                  return i.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (t = this._cache.keys, n = t.accessTokenKey, a = t.accessTokenExpireKey, r = t.refreshTokenKey, o = t.loginTypeKey, s = t.anonymousUuidKey, this._cache.removeStore(n), this._cache.removeStore(a), l = this._cache.getStore(r)) {
                          e.next = 5;
                          break
                        }
                        throw new Fe({
                          message: "未登录CloudBase"
                        });
                      case 5:
                        return u = {
                          refresh_token: l
                        }, e.next = 8, this.request("auth.fetchAccessTokenWithRefreshToken", u);
                      case 8:
                        if (!(c = e.sent).data.code) {
                          e.next = 21;
                          break
                        }
                        if ("SIGN_PARAM_INVALID" !== (f = c.data.code) && "REFRESH_TOKEN_EXPIRED" !== f && "INVALID_REFRESH_TOKEN" !== f) {
                          e.next = 20;
                          break
                        }
                        if (this._cache.getStore(o) !== at.ANONYMOUS || "INVALID_REFRESH_TOKEN" !== f) {
                          e.next = 19;
                          break
                        }
                        return d = this._cache.getStore(s), h = this._cache.getStore(r), e.next = 17, this.send("auth.signInAnonymously", {
                          anonymous_uuid: d,
                          refresh_token: h
                        });
                      case 17:
                        return p = e.sent, e.abrupt("return", (this.setRefreshToken(p.refresh_token), this._refreshAccessToken()));
                      case 19:
                        tt(ot), this._cache.removeStore(r);
                      case 20:
                        throw new Fe({
                          code: c.data.code,
                          message: "刷新access token失败：".concat(c.data.code)
                        });
                      case 21:
                        if (!c.data.access_token) {
                          e.next = 23;
                          break
                        }
                        return e.abrupt("return", (tt(lt), this._cache.setStore(n, c.data.access_token), this._cache.setStore(a, c.data.access_token_expire + Date.now()), {
                          accessToken: c.data.access_token,
                          accessTokenExpire: c.data.access_token_expire
                        }));
                      case 23:
                        c.data.refresh_token && (this._cache.removeStore(r), this._cache.setStore(r, c.data.refresh_token), this._refreshAccessToken());
                      case 24:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                })));
                return function() {
                  return e.apply(this, arguments)
                }
              }()
            }, {
              key: "getAccessToken",
              value: function() {
                var e = (0, f.default)(i.default.mark((function e() {
                  var t, n, a, r, o, s, l;
                  return i.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (t = this._cache.keys, n = t.accessTokenKey, a = t.accessTokenExpireKey, r = t.refreshTokenKey, this._cache.getStore(r)) {
                          e.next = 3;
                          break
                        }
                        throw new Fe({
                          message: "refresh token不存在，登录状态异常"
                        });
                      case 3:
                        if (o = this._cache.getStore(n), s = this._cache.getStore(a), l = !0, e.t0 = this._shouldRefreshAccessTokenHook, !e.t0) {
                          e.next = 9;
                          break
                        }
                        return e.next = 8, this._shouldRefreshAccessTokenHook(o, s);
                      case 8:
                        e.t0 = !e.sent;
                      case 9:
                        if (e.t1 = e.t0, !e.t1) {
                          e.next = 12;
                          break
                        }
                        l = !1;
                      case 12:
                        return e.abrupt("return", (!o || !s || s < Date.now()) && l ? this.refreshAccessToken() : {
                          accessToken: o,
                          accessTokenExpire: s
                        });
                      case 13:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                })));
                return function() {
                  return e.apply(this, arguments)
                }
              }()
            }, {
              key: "request",
              value: function() {
                var e = (0, f.default)(i.default.mark((function e(t, n, a) {
                  var r, o, s, l, u, c, f, d, h, p, g, v, y, m, F;
                  return i.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (r = "x-tcb-trace_".concat(this.config.env), o = "application/x-www-form-urlencoded", s = T({
                            action: t,
                            env: this.config.env,
                            dataVersion: "2019-08-16"
                          }, n), e.t0 = -1 === ft.indexOf(t), !e.t0) {
                          e.next = 9;
                          break
                        }
                        return this._cache.keys, e.next = 8, this.oauth.getAccessToken();
                      case 8:
                        s.access_token = e.sent;
                      case 9:
                        if ("storage.uploadFile" !== t) {
                          e.next = 15;
                          break
                        }
                        for (u in l = new FormData) l.hasOwnProperty(u) && void 0 !== l[u] && l.append(u, s[u]);
                        o = "multipart/form-data", e.next = 17;
                        break;
                      case 15:
                        for (c in o = "application/json", l = {}, s) void 0 !== s[c] && (l[c] = s[c]);
                      case 17:
                        return f = {
                          headers: {
                            "content-type": o
                          }
                        }, a && a.timeout && (f.timeout = a.timeout), a && a.onUploadProgress && (f.onUploadProgress = a.onUploadProgress), (d = this._localCache.getStore(r)) && (f.headers["X-TCB-Trace"] = d), h = n.parse, p = n.inQuery, g = n.search, v = {
                          env: this.config.env
                        }, h && (v.parse = !0), p && (v = T(T({}, p), v)), y = function(e, t) {
                          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            a = /\?/.test(t),
                            r = "";
                          for (var o in n) "" === r ? !a && (t += "?") : r += "&", r += "".concat(o, "=").concat(encodeURIComponent(n[o]));
                          return /^http(s)?\:\/\//.test(t += r) ? t : "".concat(e).concat(t)
                        }(Ae, "//tcb-api.tencentcloudapi.com/web", v), g && (y += g), e.next = 28, this.post(T({
                          url: y,
                          data: l
                        }, f));
                      case 28:
                        if (m = e.sent, (F = m.header && m.header["x-tcb-trace"]) && this._localCache.setStore(r, F), (200 === Number(m.status) || 200 === Number(m.statusCode)) && m.data) {
                          e.next = 32;
                          break
                        }
                        throw new Fe({
                          code: "NETWORK_ERROR",
                          message: "network request error"
                        });
                      case 32:
                        return e.abrupt("return", m);
                      case 33:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                })));
                return function(t, n, a) {
                  return e.apply(this, arguments)
                }
              }()
            }, {
              key: "send",
              value: function() {
                var e = (0, f.default)(i.default.mark((function e(t) {
                  var n, a, r, o, s = arguments;
                  return i.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return n = s.length > 1 && void 0 !== s[1] ? s[1] : {}, a = s.length > 2 && void 0 !== s[2] ? s[2] : {}, e.next = 4, this.request(t, n, T(T({}, a), {}, {
                          onUploadProgress: n.onUploadProgress
                        }));
                      case 4:
                        if ("ACCESS_TOKEN_DISABLED" !== (r = e.sent).data.code && "ACCESS_TOKEN_EXPIRED" !== r.data.code || -1 !== ft.indexOf(t)) {
                          e.next = 14;
                          break
                        }
                        return e.next = 8, this.oauth.refreshAccessToken();
                      case 8:
                        return e.next = 10, this.request(t, n, T(T({}, a), {}, {
                          onUploadProgress: n.onUploadProgress
                        }));
                      case 10:
                        if (!(o = e.sent).data.code) {
                          e.next = 13;
                          break
                        }
                        throw new Fe({
                          code: o.data.code,
                          message: je(o.data.message)
                        });
                      case 13:
                        return e.abrupt("return", o.data);
                      case 14:
                        if (!r.data.code) {
                          e.next = 16;
                          break
                        }
                        throw new Fe({
                          code: r.data.code,
                          message: je(r.data.message)
                        });
                      case 16:
                        return e.abrupt("return", r.data);
                      case 17:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                })));
                return function(t) {
                  return e.apply(this, arguments)
                }
              }()
            }, {
              key: "setRefreshToken",
              value: function(e) {
                var t = this._cache.keys,
                  n = t.accessTokenKey,
                  a = t.accessTokenExpireKey,
                  r = t.refreshTokenKey;
                this._cache.removeStore(n), this._cache.removeStore(a), this._cache.setStore(r, e)
              }
            }]), e
          }(),
          vt = {};

        function yt(e) {
          return vt[e]
        }
        var mt = function() {
            function e(t) {
              (0, y.default)(this, e), this.config = t, this._cache = Ge(t.env), this._request = yt(t.env)
            }
            return (0, m.default)(e, [{
              key: "setRefreshToken",
              value: function(e) {
                var t = this._cache.keys,
                  n = t.accessTokenKey,
                  a = t.accessTokenExpireKey,
                  r = t.refreshTokenKey;
                this._cache.removeStore(n), this._cache.removeStore(a), this._cache.setStore(r, e)
              }
            }, {
              key: "setAccessToken",
              value: function(e, t) {
                var n = this._cache.keys,
                  a = n.accessTokenKey,
                  r = n.accessTokenExpireKey;
                this._cache.setStore(a, e), this._cache.setStore(r, t)
              }
            }, {
              key: "refreshUserInfo",
              value: function() {
                var e = (0, f.default)(i.default.mark((function e() {
                  var t, n;
                  return i.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, this._request.send("auth.getUserInfo", {});
                      case 2:
                        return t = e.sent, n = t.data, e.abrupt("return", (this.setLocalUserInfo(n), n));
                      case 5:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                })));
                return function() {
                  return e.apply(this, arguments)
                }
              }()
            }, {
              key: "setLocalUserInfo",
              value: function(e) {
                var t = this._cache.keys.userInfoKey;
                this._cache.setStore(t, e)
              }
            }]), e
          }(),
          Ft = function() {
            function e(t) {
              if ((0, y.default)(this, e), !t) throw new Fe({
                code: "PARAM_ERROR",
                message: "envId is not defined"
              });
              this._envId = t, this._cache = Ge(this._envId), this._request = yt(this._envId), this.setUserInfo()
            }
            return (0, m.default)(e, [{
              key: "linkWithTicket",
              value: function(e) {
                if ("string" != typeof e) throw new Fe({
                  code: "PARAM_ERROR",
                  message: "ticket must be string"
                });
                return this._request.send("auth.linkWithTicket", {
                  ticket: e
                })
              }
            }, {
              key: "linkWithRedirect",
              value: function(e) {
                e.signInWithRedirect()
              }
            }, {
              key: "updatePassword",
              value: function(e, t) {
                return this._request.send("auth.updatePassword", {
                  oldPassword: t,
                  newPassword: e
                })
              }
            }, {
              key: "updateEmail",
              value: function(e) {
                return this._request.send("auth.updateEmail", {
                  newEmail: e
                })
              }
            }, {
              key: "updateUsername",
              value: function(e) {
                if ("string" != typeof e) throw new Fe({
                  code: "PARAM_ERROR",
                  message: "username must be a string"
                });
                return this._request.send("auth.updateUsername", {
                  username: e
                })
              }
            }, {
              key: "getLinkedUidList",
              value: function() {
                var e = (0, f.default)(i.default.mark((function e() {
                  var t, n, a, r;
                  return i.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, this._request.send("auth.getLinkedUidList", {});
                      case 2:
                        return t = e.sent, n = t.data, a = !1, r = n.users, e.abrupt("return", (r.forEach((function(e) {
                          e.wxOpenId && e.wxPublicId && (a = !0)
                        })), {
                          users: r,
                          hasPrimaryUid: a
                        }));
                      case 7:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                })));
                return function() {
                  return e.apply(this, arguments)
                }
              }()
            }, {
              key: "setPrimaryUid",
              value: function(e) {
                return this._request.send("auth.setPrimaryUid", {
                  uid: e
                })
              }
            }, {
              key: "unlink",
              value: function(e) {
                return this._request.send("auth.unlink", {
                  platform: e
                })
              }
            }, {
              key: "update",
              value: function() {
                var e = (0, f.default)(i.default.mark((function e(t) {
                  var n, a, r, o, s, l, u, c;
                  return i.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return n = t.nickName, a = t.gender, r = t.avatarUrl, o = t.province, s = t.country, l = t.city, e.next = 8, this._request.send("auth.updateUserInfo", {
                          nickName: n,
                          gender: a,
                          avatarUrl: r,
                          province: o,
                          country: s,
                          city: l
                        });
                      case 8:
                        u = e.sent, c = u.data, this.setLocalUserInfo(c);
                      case 11:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                })));
                return function(t) {
                  return e.apply(this, arguments)
                }
              }()
            }, {
              key: "refresh",
              value: function() {
                var e = (0, f.default)(i.default.mark((function e() {
                  var t;
                  return i.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, this._request.oauth.getUserInfo();
                      case 2:
                        return t = e.sent, e.abrupt("return", (this.setLocalUserInfo(t), t));
                      case 4:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                })));
                return function() {
                  return e.apply(this, arguments)
                }
              }()
            }, {
              key: "setUserInfo",
              value: function() {
                var e = this,
                  t = this._cache.keys.userInfoKey,
                  n = this._cache.getStore(t);
                ["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach((function(t) {
                  e[t] = n[t]
                })), this.location = {
                  country: n.country,
                  province: n.province,
                  city: n.city
                }
              }
            }, {
              key: "setLocalUserInfo",
              value: function(e) {
                var t = this._cache.keys.userInfoKey;
                this._cache.setStore(t, e), this.setUserInfo()
              }
            }]), e
          }(),
          kt = function() {
            function e(t) {
              if ((0, y.default)(this, e), !t) throw new Fe({
                code: "PARAM_ERROR",
                message: "envId is not defined"
              });
              this._cache = Ge(t);
              var n = this._cache.keys,
                a = n.refreshTokenKey,
                r = n.accessTokenKey,
                o = n.accessTokenExpireKey,
                i = this._cache.getStore(a),
                s = this._cache.getStore(r),
                l = this._cache.getStore(o);
              this.credential = {
                refreshToken: i,
                accessToken: s,
                accessTokenExpire: l
              }, this.user = new Ft(t)
            }
            return (0, m.default)(e, [{
              key: "isAnonymousAuth",
              get: function() {
                return this.loginType === at.ANONYMOUS
              }
            }, {
              key: "isCustomAuth",
              get: function() {
                return this.loginType === at.CUSTOM
              }
            }, {
              key: "isWeixinAuth",
              get: function() {
                return this.loginType === at.WECHAT || this.loginType === at.WECHAT_OPEN || this.loginType === at.WECHAT_PUBLIC
              }
            }, {
              key: "loginType",
              get: function() {
                return this._cache.getStore(this._cache.keys.loginTypeKey)
              }
            }]), e
          }(),
          wt = function(e) {
            (0, h.default)(n, e);
            var t = x(n);

            function n() {
              return (0, y.default)(this, n), t.apply(this, arguments)
            }
            return (0, m.default)(n, [{
              key: "signIn",
              value: function() {
                var e = (0, f.default)(i.default.mark((function e() {
                  var t;
                  return i.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this._cache.updatePersistence("local"), e.next = 3, this._request.oauth.getAccessToken();
                      case 3:
                        return tt(rt), tt(it, {
                          env: this.config.env,
                          loginType: at.ANONYMOUS,
                          persistence: "local"
                        }), t = new kt(this.config.env), e.next = 8, t.user.refresh();
                      case 8:
                        return e.abrupt("return", t);
                      case 9:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                })));
                return function() {
                  return e.apply(this, arguments)
                }
              }()
            }, {
              key: "linkAndRetrieveDataWithTicket",
              value: function() {
                var e = (0, f.default)(i.default.mark((function e(t) {
                  var n, a, r, o, s, l;
                  return i.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return n = this._cache.keys, a = n.anonymousUuidKey, r = n.refreshTokenKey, o = this._cache.getStore(a), s = this._cache.getStore(r), e.next = 7, this._request.send("auth.linkAndRetrieveDataWithTicket", {
                          anonymous_uuid: o,
                          refresh_token: s,
                          ticket: t
                        });
                      case 7:
                        if (!(l = e.sent).refresh_token) {
                          e.next = 16;
                          break
                        }
                        return this._clearAnonymousUUID(), this.setRefreshToken(l.refresh_token), e.next = 13, this._request.refreshAccessToken();
                      case 13:
                        return tt(st, {
                          env: this.config.env
                        }), tt(it, {
                          loginType: at.CUSTOM,
                          persistence: "local"
                        }), e.abrupt("return", {
                          credential: {
                            refreshToken: l.refresh_token
                          }
                        });
                      case 16:
                        throw new Fe({
                          message: "匿名转化失败"
                        });
                      case 17:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                })));
                return function(t) {
                  return e.apply(this, arguments)
                }
              }()
            }, {
              key: "_setAnonymousUUID",
              value: function(e) {
                var t = this._cache.keys,
                  n = t.anonymousUuidKey,
                  a = t.loginTypeKey;
                this._cache.removeStore(n), this._cache.setStore(n, e), this._cache.setStore(a, at.ANONYMOUS)
              }
            }, {
              key: "_clearAnonymousUUID",
              value: function() {
                this._cache.removeStore(this._cache.keys.anonymousUuidKey)
              }
            }]), n
          }(mt),
          bt = function(e) {
            (0, h.default)(n, e);
            var t = x(n);

            function n() {
              return (0, y.default)(this, n), t.apply(this, arguments)
            }
            return (0, m.default)(n, [{
              key: "signIn",
              value: function() {
                var e = (0, f.default)(i.default.mark((function e(t) {
                  var n, a;
                  return i.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if ("string" == typeof t) {
                          e.next = 2;
                          break
                        }
                        throw new Fe({
                          code: "PARAM_ERROR",
                          message: "ticket must be a string"
                        });
                      case 2:
                        return n = this._cache.keys.refreshTokenKey, e.next = 5, this._request.send("auth.signInWithTicket", {
                          ticket: t,
                          refresh_token: this._cache.getStore(n) || ""
                        });
                      case 5:
                        if (!(a = e.sent).refresh_token) {
                          e.next = 15;
                          break
                        }
                        return this.setRefreshToken(a.refresh_token), e.next = 10, this._request.refreshAccessToken();
                      case 10:
                        return tt(rt), tt(it, {
                          env: this.config.env,
                          loginType: at.CUSTOM,
                          persistence: this.config.persistence
                        }), e.next = 14, this.refreshUserInfo();
                      case 14:
                        return e.abrupt("return", new kt(this.config.env));
                      case 15:
                        throw new Fe({
                          message: "自定义登录失败"
                        });
                      case 16:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                })));
                return function(t) {
                  return e.apply(this, arguments)
                }
              }()
            }]), n
          }(mt),
          Tt = function(e) {
            (0, h.default)(n, e);
            var t = x(n);

            function n() {
              return (0, y.default)(this, n), t.apply(this, arguments)
            }
            return (0, m.default)(n, [{
              key: "signIn",
              value: function() {
                var e = (0, f.default)(i.default.mark((function e(t, n) {
                  var a, r, o, s, l;
                  return i.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if ("string" == typeof t) {
                          e.next = 2;
                          break
                        }
                        throw new Fe({
                          code: "PARAM_ERROR",
                          message: "email must be a string"
                        });
                      case 2:
                        return a = this._cache.keys.refreshTokenKey, e.next = 5, this._request.send("auth.signIn", {
                          loginType: "EMAIL",
                          email: t,
                          password: n,
                          refresh_token: this._cache.getStore(a) || ""
                        });
                      case 5:
                        if (r = e.sent, o = r.refresh_token, s = r.access_token, l = r.access_token_expire, !o) {
                          e.next = 22;
                          break
                        }
                        if (this.setRefreshToken(o), !s || !l) {
                          e.next = 15;
                          break
                        }
                        this.setAccessToken(s, l), e.next = 17;
                        break;
                      case 15:
                        return e.next = 17, this._request.refreshAccessToken();
                      case 17:
                        return e.next = 19, this.refreshUserInfo();
                      case 19:
                        return tt(rt), tt(it, {
                          env: this.config.env,
                          loginType: at.EMAIL,
                          persistence: this.config.persistence
                        }), e.abrupt("return", new kt(this.config.env));
                      case 22:
                        throw r.code ? new Fe({
                          code: r.code,
                          message: "邮箱登录失败: ".concat(r.message)
                        }) : new Fe({
                          message: "邮箱登录失败"
                        });
                      case 23:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                })));
                return function(t, n) {
                  return e.apply(this, arguments)
                }
              }()
            }, {
              key: "activate",
              value: function() {
                var e = (0, f.default)(i.default.mark((function e(t) {
                  return i.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.abrupt("return", this._request.send("auth.activateEndUserMail", {
                          token: t
                        }));
                      case 1:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                })));
                return function(t) {
                  return e.apply(this, arguments)
                }
              }()
            }, {
              key: "resetPasswordWithToken",
              value: function() {
                var e = (0, f.default)(i.default.mark((function e(t, n) {
                  return i.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.abrupt("return", this._request.send("auth.resetPasswordWithToken", {
                          token: t,
                          newPassword: n
                        }));
                      case 1:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                })));
                return function(t, n) {
                  return e.apply(this, arguments)
                }
              }()
            }]), n
          }(mt),
          xt = function(e) {
            (0, h.default)(n, e);
            var t = x(n);

            function n() {
              return (0, y.default)(this, n), t.apply(this, arguments)
            }
            return (0, m.default)(n, [{
              key: "signIn",
              value: function() {
                var e = (0, f.default)(i.default.mark((function e(t, n) {
                  var a, r, o, s, l;
                  return i.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if ("string" == typeof t) {
                          e.next = 2;
                          break
                        }
                        throw new Fe({
                          code: "PARAM_ERROR",
                          message: "username must be a string"
                        });
                      case 2:
                        return "string" != typeof n && (n = "", console.warn("password is empty")), a = this._cache.keys.refreshTokenKey, e.next = 6, this._request.send("auth.signIn", {
                          loginType: at.USERNAME,
                          username: t,
                          password: n,
                          refresh_token: this._cache.getStore(a) || ""
                        });
                      case 6:
                        if (r = e.sent, o = r.refresh_token, s = r.access_token_expire, l = r.access_token, !o) {
                          e.next = 23;
                          break
                        }
                        if (this.setRefreshToken(o), !l || !s) {
                          e.next = 16;
                          break
                        }
                        this.setAccessToken(l, s), e.next = 18;
                        break;
                      case 16:
                        return e.next = 18, this._request.refreshAccessToken();
                      case 18:
                        return e.next = 20, this.refreshUserInfo();
                      case 20:
                        return tt(rt), tt(it, {
                          env: this.config.env,
                          loginType: at.USERNAME,
                          persistence: this.config.persistence
                        }), e.abrupt("return", new kt(this.config.env));
                      case 23:
                        throw r.code ? new Fe({
                          code: r.code,
                          message: "用户名密码登录失败: ".concat(r.message)
                        }) : new Fe({
                          message: "用户名密码登录失败"
                        });
                      case 24:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                })));
                return function(t, n) {
                  return e.apply(this, arguments)
                }
              }()
            }]), n
          }(mt),
          Bt = function() {
            function e(t) {
              (0, y.default)(this, e), this.config = t, this._cache = Ge(t.env), this._request = yt(t.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), et(it, this._onLoginTypeChanged)
            }
            return (0, m.default)(e, [{
              key: "currentUser",
              get: function() {
                var e = this.hasLoginState();
                return e && e.user || null
              }
            }, {
              key: "loginType",
              get: function() {
                return this._cache.getStore(this._cache.keys.loginTypeKey)
              }
            }, {
              key: "anonymousAuthProvider",
              value: function() {
                return new wt(this.config)
              }
            }, {
              key: "customAuthProvider",
              value: function() {
                return new bt(this.config)
              }
            }, {
              key: "emailAuthProvider",
              value: function() {
                return new Tt(this.config)
              }
            }, {
              key: "usernameAuthProvider",
              value: function() {
                return new xt(this.config)
              }
            }, {
              key: "signInAnonymously",
              value: function() {
                var e = (0, f.default)(i.default.mark((function e() {
                  return i.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.abrupt("return", new wt(this.config).signIn());
                      case 1:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                })));
                return function() {
                  return e.apply(this, arguments)
                }
              }()
            }, {
              key: "signInWithEmailAndPassword",
              value: function() {
                var e = (0, f.default)(i.default.mark((function e(t, n) {
                  return i.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.abrupt("return", new Tt(this.config).signIn(t, n));
                      case 1:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                })));
                return function(t, n) {
                  return e.apply(this, arguments)
                }
              }()
            }, {
              key: "signInWithUsernameAndPassword",
              value: function(e, t) {
                return new xt(this.config).signIn(e, t)
              }
            }, {
              key: "linkAndRetrieveDataWithTicket",
              value: function() {
                var e = (0, f.default)(i.default.mark((function e(t) {
                  return i.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this._anonymousAuthProvider || (this._anonymousAuthProvider = new wt(this.config)), et(st, this._onAnonymousConverted), e.next = 3, this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(t);
                      case 3:
                        return e.abrupt("return", e.sent);
                      case 4:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                })));
                return function(t) {
                  return e.apply(this, arguments)
                }
              }()
            }, {
              key: "signOut",
              value: function() {
                var e = (0, f.default)(i.default.mark((function e() {
                  var t, n, a, r, o, s;
                  return i.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (this.loginType !== at.ANONYMOUS) {
                          e.next = 2;
                          break
                        }
                        throw new Fe({
                          message: "匿名用户不支持登出操作"
                        });
                      case 2:
                        if (t = this._cache.keys, n = t.refreshTokenKey, a = t.accessTokenKey, r = t.accessTokenExpireKey, o = this._cache.getStore(n)) {
                          e.next = 5;
                          break
                        }
                        return e.abrupt("return");
                      case 5:
                        return e.next = 7, this._request.send("auth.logout", {
                          refresh_token: o
                        });
                      case 7:
                        return s = e.sent, e.abrupt("return", (this._cache.removeStore(n), this._cache.removeStore(a), this._cache.removeStore(r), tt(rt), tt(it, {
                          env: this.config.env,
                          loginType: at.NULL,
                          persistence: this.config.persistence
                        }), s));
                      case 9:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                })));
                return function() {
                  return e.apply(this, arguments)
                }
              }()
            }, {
              key: "signUpWithEmailAndPassword",
              value: function() {
                var e = (0, f.default)(i.default.mark((function e(t, n) {
                  return i.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.abrupt("return", this._request.send("auth.signUpWithEmailAndPassword", {
                          email: t,
                          password: n
                        }));
                      case 1:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                })));
                return function(t, n) {
                  return e.apply(this, arguments)
                }
              }()
            }, {
              key: "sendPasswordResetEmail",
              value: function() {
                var e = (0, f.default)(i.default.mark((function e(t) {
                  return i.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.abrupt("return", this._request.send("auth.sendPasswordResetEmail", {
                          email: t
                        }));
                      case 1:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                })));
                return function(t) {
                  return e.apply(this, arguments)
                }
              }()
            }, {
              key: "onLoginStateChanged",
              value: function(e) {
                var t = this;
                et(rt, (function() {
                  var n = t.hasLoginState();
                  e.call(t, n)
                }));
                var n = this.hasLoginState();
                e.call(this, n)
              }
            }, {
              key: "onLoginStateExpired",
              value: function(e) {
                et(ot, e.bind(this))
              }
            }, {
              key: "onAccessTokenRefreshed",
              value: function(e) {
                et(lt, e.bind(this))
              }
            }, {
              key: "onAnonymousConverted",
              value: function(e) {
                et(st, e.bind(this))
              }
            }, {
              key: "onLoginTypeChanged",
              value: function(e) {
                var t = this;
                et(it, (function() {
                  var n = t.hasLoginState();
                  e.call(t, n)
                }))
              }
            }, {
              key: "getAccessToken",
              value: function() {
                var e = (0, f.default)(i.default.mark((function e() {
                  return i.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, this._request.getAccessToken();
                      case 2:
                        return e.t0 = e.sent.accessToken, e.t1 = this.config.env, e.abrupt("return", {
                          accessToken: e.t0,
                          env: e.t1
                        });
                      case 5:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                })));
                return function() {
                  return e.apply(this, arguments)
                }
              }()
            }, {
              key: "hasLoginState",
              value: function() {
                var e = this._cache.keys,
                  t = e.accessTokenKey,
                  n = e.accessTokenExpireKey,
                  a = this._cache.getStore(t),
                  r = this._cache.getStore(n);
                return this._request.oauth.isAccessTokenExpired(a, r) ? null : new kt(this.config.env)
              }
            }, {
              key: "isUsernameRegistered",
              value: function() {
                var e = (0, f.default)(i.default.mark((function e(t) {
                  var n, a;
                  return i.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if ("string" == typeof t) {
                          e.next = 2;
                          break
                        }
                        throw new Fe({
                          code: "PARAM_ERROR",
                          message: "username must be a string"
                        });
                      case 2:
                        return e.next = 4, this._request.send("auth.isUsernameRegistered", {
                          username: t
                        });
                      case 4:
                        return n = e.sent, a = n.data, e.abrupt("return", a && a.isRegistered);
                      case 7:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                })));
                return function(t) {
                  return e.apply(this, arguments)
                }
              }()
            }, {
              key: "getLoginState",
              value: function() {
                return Promise.resolve(this.hasLoginState())
              }
            }, {
              key: "signInWithTicket",
              value: function() {
                var e = (0, f.default)(i.default.mark((function e(t) {
                  return i.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.abrupt("return", new bt(this.config).signIn(t));
                      case 1:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                })));
                return function(t) {
                  return e.apply(this, arguments)
                }
              }()
            }, {
              key: "shouldRefreshAccessToken",
              value: function(e) {
                this._request._shouldRefreshAccessTokenHook = e.bind(this)
              }
            }, {
              key: "getUserInfo",
              value: function() {
                return this._request.send("auth.getUserInfo", {}).then((function(e) {
                  return e.code ? e : T(T({}, e.data), {}, {
                    requestId: e.seqId
                  })
                }))
              }
            }, {
              key: "getAuthHeader",
              value: function() {
                var e = this._cache.keys,
                  t = e.refreshTokenKey,
                  n = e.accessTokenKey,
                  a = this._cache.getStore(t);
                return {
                  "x-cloudbase-credentials": this._cache.getStore(n) + "/@@/" + a
                }
              }
            }, {
              key: "_onAnonymousConverted",
              value: function(e) {
                e.data.env === this.config.env && this._cache.updatePersistence(this.config.persistence)
              }
            }, {
              key: "_onLoginTypeChanged",
              value: function(e) {
                var t = e.data,
                  n = t.loginType,
                  a = t.persistence;
                t.env === this.config.env && (this._cache.updatePersistence(a), this._cache.setStore(this._cache.keys.loginTypeKey, n))
              }
            }]), e
          }(),
          St = function(e, t) {
            t = t || Ue();
            var n = yt(this.config.env),
              a = e.cloudPath,
              r = e.filePath,
              o = e.onUploadProgress,
              i = e.fileType,
              s = void 0 === i ? "image" : i;
            return n.send("storage.getUploadMetadata", {
              path: a
            }).then((function(e) {
              var i = e.data,
                l = i.url,
                u = i.authorization,
                c = i.token,
                f = i.fileId,
                d = i.cosFileId,
                h = e.requestId,
                p = {
                  key: a,
                  signature: u,
                  "x-cos-meta-fileid": d,
                  success_action_status: "201",
                  "x-cos-security-token": c
                };
              n.upload({
                url: l,
                data: p,
                file: r,
                name: a,
                fileType: s,
                onUploadProgress: o
              }).then((function(e) {
                201 === e.statusCode ? t(null, {
                  fileID: f,
                  requestId: h
                }) : t(new Fe({
                  code: "STORAGE_REQUEST_FAIL",
                  message: "STORAGE_REQUEST_FAIL: ".concat(e.data)
                }))
              })).catch((function(e) {
                t(e)
              }))
            })).catch((function(e) {
              t(e)
            })), t.promise
          },
          Pt = function(e, t) {
            t = t || Ue();
            var n = yt(this.config.env),
              a = e.cloudPath;
            return n.send("storage.getUploadMetadata", {
              path: a
            }).then((function(e) {
              t(null, e)
            })).catch((function(e) {
              t(e)
            })), t.promise
          },
          _t = function(e, t) {
            var n = e.fileList;
            if (t = t || Ue(), !n || !Array.isArray(n)) return {
              code: "INVALID_PARAM",
              message: "fileList必须是非空的数组"
            };
            var a, r = k(n);
            try {
              for (r.s(); !(a = r.n()).done;) {
                var o = a.value;
                if (!o || "string" != typeof o) return {
                  code: "INVALID_PARAM",
                  message: "fileList的元素必须是非空的字符串"
                }
              }
            } catch (e) {
              r.e(e)
            } finally {
              r.f()
            }
            var i = {
              fileid_list: n
            };
            return yt(this.config.env).send("storage.batchDeleteFile", i).then((function(e) {
              e.code ? t(null, e) : t(null, {
                fileList: e.data.delete_list,
                requestId: e.requestId
              })
            })).catch((function(e) {
              t(e)
            })), t.promise
          },
          Ct = function(e, t) {
            var n = e.fileList;
            t = t || Ue(), n && Array.isArray(n) || t(null, {
              code: "INVALID_PARAM",
              message: "fileList必须是非空的数组"
            });
            var a, r = [],
              o = k(n);
            try {
              for (o.s(); !(a = o.n()).done;) {
                var i = a.value;
                "object" == (0, u.default)(i) ? (i.hasOwnProperty("fileID") && i.hasOwnProperty("maxAge") || t(null, {
                  code: "INVALID_PARAM",
                  message: "fileList的元素必须是包含fileID和maxAge的对象"
                }), r.push({
                  fileid: i.fileID,
                  max_age: i.maxAge
                })) : "string" == typeof i ? r.push({
                  fileid: i
                }) : t(null, {
                  code: "INVALID_PARAM",
                  message: "fileList的元素必须是字符串"
                })
              }
            } catch (e) {
              o.e(e)
            } finally {
              o.f()
            }
            var s = {
              file_list: r
            };
            return yt(this.config.env).send("storage.batchGetDownloadUrl", s).then((function(e) {
              e.code ? t(null, e) : t(null, {
                fileList: e.data.download_list,
                requestId: e.requestId
              })
            })).catch((function(e) {
              t(e)
            })), t.promise
          },
          Dt = function() {
            var e = (0, f.default)(i.default.mark((function e(t, n) {
              var a, r, o, s;
              return i.default.wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return a = t.fileID, e.next = 3, Ct.call(this, {
                      fileList: [{
                        fileID: a,
                        maxAge: 600
                      }]
                    });
                  case 3:
                    if ("SUCCESS" === (r = e.sent.fileList[0]).code) {
                      e.next = 6;
                      break
                    }
                    return e.abrupt("return", n ? n(r) : new Promise((function(e) {
                      e(r)
                    })));
                  case 6:
                    if (o = yt(this.config.env), s = r.download_url, s = encodeURI(s), n) {
                      e.next = 10;
                      break
                    }
                    return e.abrupt("return", o.download({
                      url: s
                    }));
                  case 10:
                    return e.t0 = n, e.next = 13, o.download({
                      url: s
                    });
                  case 13:
                    e.t1 = e.sent, (0, e.t0)(e.t1);
                  case 15:
                  case "end":
                    return e.stop()
                }
              }), e, this)
            })));
            return function(t, n) {
              return e.apply(this, arguments)
            }
          }(),
          Rt = function(e, t) {
            var n, a = e.name,
              r = e.data,
              o = e.query,
              i = e.parse,
              s = e.search,
              l = e.timeout,
              u = t || Ue();
            try {
              n = r ? JSON.stringify(r) : ""
            } catch (a) {
              return Promise.reject(a)
            }
            if (!a) return Promise.reject(new Fe({
              code: "PARAM_ERROR",
              message: "函数名不能为空"
            }));
            var c = {
              inQuery: o,
              parse: i,
              search: s,
              function_name: a,
              request_data: n
            };
            return yt(this.config.env).send("functions.invokeFunction", c, {
              timeout: l
            }).then((function(e) {
              if (e.code) u(null, e);
              else {
                var t = e.data.response_data;
                if (i) u(null, {
                  result: t,
                  requestId: e.requestId
                });
                else try {
                  t = JSON.parse(e.data.response_data), u(null, {
                    result: t,
                    requestId: e.requestId
                  })
                } catch (e) {
                  u(new Fe({
                    message: "response data must be json"
                  }))
                }
              }
              return u.promise
            })).catch((function(e) {
              u(e)
            })), u.promise
          },
          It = {
            timeout: 15e3,
            persistence: "session"
          },
          Ot = {},
          At = new(function() {
            function e(t) {
              (0, y.default)(this, e), this.config = t || this.config, this.authObj = void 0
            }
            return (0, m.default)(e, [{
              key: "init",
              value: function(t) {
                switch (Ke.adapter || (this.requestClient = new Ke.adapter.reqClass({
                    timeout: t.timeout || 5e3,
                    timeoutMsg: "请求在".concat((t.timeout || 5e3) / 1e3, "s内未完成，已中断")
                  })), this.config = T(T({}, It), t), !0) {
                  case this.config.timeout > 6e5:
                    console.warn("timeout大于可配置上限[10分钟]，已重置为上限数值"), this.config.timeout = 6e5;
                    break;
                  case this.config.timeout < 100:
                    console.warn("timeout小于可配置下限[100ms]，已重置为下限数值"), this.config.timeout = 100
                }
                return new e(this.config)
              }
            }, {
              key: "auth",
              value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  t = e.persistence;
                if (this.authObj) return this.authObj;
                var n, a = t || Ke.adapter.primaryStorage || It.persistence;
                return a !== this.config.persistence && (this.config.persistence = a),
                  function(e) {
                    var t = e.env;
                    Ye[t] = new $e(e), ze[t] = new $e(T(T({}, e), {}, {
                      persistence: "local"
                    }))
                  }(this.config), n = this.config, vt[n.env] = new gt(n), this.authObj = new Bt(this.config), this.authObj
              }
            }, {
              key: "on",
              value: function(e, t) {
                return et.apply(this, [e, t])
              }
            }, {
              key: "off",
              value: function(e, t) {
                return nt.apply(this, [e, t])
              }
            }, {
              key: "callFunction",
              value: function(e, t) {
                return Rt.apply(this, [e, t])
              }
            }, {
              key: "deleteFile",
              value: function(e, t) {
                return _t.apply(this, [e, t])
              }
            }, {
              key: "getTempFileURL",
              value: function(e, t) {
                return Ct.apply(this, [e, t])
              }
            }, {
              key: "downloadFile",
              value: function(e, t) {
                return Dt.apply(this, [e, t])
              }
            }, {
              key: "uploadFile",
              value: function(e, t) {
                return St.apply(this, [e, t])
              }
            }, {
              key: "getUploadMetadata",
              value: function(e, t) {
                return Pt.apply(this, [e, t])
              }
            }, {
              key: "registerExtension",
              value: function(e) {
                Ot[e.name] = e
              }
            }, {
              key: "invokeExtension",
              value: function() {
                var e = (0, f.default)(i.default.mark((function e(t, n) {
                  var a;
                  return i.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (a = Ot[t]) {
                          e.next = 3;
                          break
                        }
                        throw new Fe({
                          message: "扩展".concat(t, " 必须先注册")
                        });
                      case 3:
                        return e.next = 5, a.invoke(n, this);
                      case 5:
                        return e.abrupt("return", e.sent);
                      case 6:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                })));
                return function(t, n) {
                  return e.apply(this, arguments)
                }
              }()
            }, {
              key: "useAdapters",
              value: function(e) {
                var t = function(e) {
                    var t, n, a = k((t = e, "[object Array]" === Object.prototype.toString.call(t) ? e : [e]));
                    try {
                      for (a.s(); !(n = a.n()).done;) {
                        var r = n.value,
                          o = r.isMatch,
                          i = r.genAdapter,
                          s = r.runtime;
                        if (o()) return {
                          adapter: i(),
                          runtime: s
                        }
                      }
                    } catch (e) {
                      a.e(e)
                    } finally {
                      a.f()
                    }
                  }(e) || {},
                  n = t.adapter,
                  a = t.runtime;
                n && (Ke.adapter = n), a && (Ke.runtime = a)
              }
            }]), e
          }());

        function Et(e, t, n) {
          void 0 === n && (n = {});
          var a = /\?/.test(t),
            r = "";
          for (var o in n) "" === r ? !a && (t += "?") : r += "&", r += o + "=" + encodeURIComponent(n[o]);
          return /^http(s)?:\/\//.test(t += r) ? t : "" + e + t
        }
        var Lt = function() {
            function e() {
              (0, y.default)(this, e)
            }
            return (0, m.default)(e, [{
              key: "get",
              value: function(e) {
                var t = e.url,
                  n = e.data,
                  a = e.headers,
                  r = e.timeout;
                return new Promise((function(e, o) {
                  be.request({
                    url: Et("https:", t),
                    data: n,
                    method: "GET",
                    header: a,
                    timeout: r,
                    success: function(t) {
                      e(t)
                    },
                    fail: function(e) {
                      o(e)
                    }
                  })
                }))
              }
            }, {
              key: "post",
              value: function(e) {
                var t = e.url,
                  n = e.data,
                  a = e.headers,
                  r = e.timeout;
                return new Promise((function(e, o) {
                  be.request({
                    url: Et("https:", t),
                    data: n,
                    method: "POST",
                    header: a,
                    timeout: r,
                    success: function(t) {
                      e(t)
                    },
                    fail: function(e) {
                      o(e)
                    }
                  })
                }))
              }
            }, {
              key: "upload",
              value: function(e) {
                return new Promise((function(t, n) {
                  var a = e.url,
                    r = e.file,
                    o = e.data,
                    i = e.headers,
                    s = e.fileType,
                    l = be.uploadFile({
                      url: Et("https:", a),
                      name: "file",
                      formData: Object.assign({}, o),
                      filePath: r,
                      fileType: s,
                      header: i,
                      success: function(e) {
                        var n = {
                          statusCode: e.statusCode,
                          data: e.data || {}
                        };
                        200 === e.statusCode && o.success_action_status && (n.statusCode = parseInt(o.success_action_status, 10)), t(n)
                      },
                      fail: function(e) {
                        n(new Error(e.errMsg || "uploadFile:fail"))
                      }
                    });
                  "function" == typeof e.onUploadProgress && l && "function" == typeof l.onProgressUpdate && l.onProgressUpdate((function(t) {
                    e.onUploadProgress({
                      loaded: t.totalBytesSent,
                      total: t.totalBytesExpectedToSend
                    })
                  }))
                }))
              }
            }]), e
          }(),
          Nt = {
            setItem: function(e, t) {
              be.setStorageSync(e, t)
            },
            getItem: function(e) {
              return be.getStorageSync(e)
            },
            removeItem: function(e) {
              be.removeStorageSync(e)
            },
            clear: function() {
              be.clearStorageSync()
            }
          },
          Ut = {
            genAdapter: function() {
              return {
                root: {},
                reqClass: Lt,
                localStorage: Nt,
                primaryStorage: "local"
              }
            },
            isMatch: function() {
              return !0
            },
            runtime: "uni_app"
          };
        At.useAdapters(Ut);
        var qt = At,
          Mt = qt.init;
        qt.init = function(e) {
          e.env = e.spaceId;
          var t = Mt.call(this, e);
          t.config.provider = "tencent", t.config.spaceId = e.spaceId;
          var n = t.auth;
          return t.auth = function(e) {
            var t = n.call(this, e);
            return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach((function(e) {
              var n;
              t[e] = (n = t[e], function(e) {
                var t = me(e = e || {}),
                  a = t.success,
                  r = t.fail,
                  o = t.complete;
                if (!(a || r || o)) return n.call(this, e);
                n.call(this, e).then((function(e) {
                  a && a(e), o && o(e)
                }), (function(e) {
                  r && r(e), o && o(e)
                }))
              }).bind(t)
            })), t
          }, t.customAuth = t.auth, t
        };
        var jt = qt;

        function Vt(e, t) {
          return Kt.apply(this, arguments)
        }

        function Kt() {
          return (Kt = (0, f.default)(i.default.mark((function e(t, n) {
            var a, r, o;
            return i.default.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  return a = "http://".concat(t, ":").concat(n, "/system/ping"), e.prev = 1, e.next = 4, o = {
                    url: a,
                    timeout: 500
                  }, new Promise((function(e, t) {
                    be.request(T(T({}, o), {}, {
                      success: function(t) {
                        e(t)
                      },
                      fail: function(e) {
                        t(e)
                      }
                    }))
                  }));
                case 4:
                  return r = e.sent, e.abrupt("return", !(!r.data || 0 !== r.data.code));
                case 8:
                  return e.prev = 8, e.t0 = e.catch(1), e.abrupt("return", !1);
                case 11:
                case "end":
                  return e.stop()
              }
            }), e, null, [
              [1, 8]
            ])
          })))).apply(this, arguments)
        }

        function Wt(e, t) {
          return Ht.apply(this, arguments)
        }

        function Ht() {
          return (Ht = (0, f.default)(i.default.mark((function e(t, n) {
            var a, r, o;
            return i.default.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  r = 0;
                case 1:
                  if (!(r < t.length)) {
                    e.next = 11;
                    break
                  }
                  return o = t[r], e.next = 5, Vt(o, n);
                case 5:
                  if (!e.sent) {
                    e.next = 8;
                    break
                  }
                  return a = o, e.abrupt("break", 11);
                case 8:
                  r++, e.next = 1;
                  break;
                case 11:
                  return e.abrupt("return", {
                    address: a,
                    port: n
                  });
                case 12:
                case "end":
                  return e.stop()
              }
            }), e)
          })))).apply(this, arguments)
        }
        var Jt = {
            "serverless.file.resource.generateProximalSign": "storage/generate-proximal-sign",
            "serverless.file.resource.report": "storage/report",
            "serverless.file.resource.delete": "storage/delete",
            "serverless.file.resource.getTempFileURL": "storage/get-temp-file-url"
          },
          $t = function() {
            function e(t) {
              if ((0, y.default)(this, e), ["spaceId", "clientSecret"].forEach((function(e) {
                  if (!Object.prototype.hasOwnProperty.call(t, e)) throw new Error("".concat(e, " required"))
                })), !t.endpoint) throw new Error("集群空间未配置ApiEndpoint，配置后需要重新关联服务空间后生效");
              this.config = Object.assign({}, t), this.config.provider = "dcloud", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.adapter = be
            }
            return (0, m.default)(e, [{
              key: "request",
              value: function() {
                var e = (0, f.default)(i.default.mark((function e(t) {
                  var n, a = this,
                    r = arguments;
                  return i.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (!(r.length > 1 && void 0 !== r[1]) || r[1], !(n = !1)) {
                          e.next = 8;
                          break
                        }
                        return e.next = 5, this.setupLocalRequest(t);
                      case 5:
                        e.t0 = e.sent, e.next = 9;
                        break;
                      case 8:
                        e.t0 = this.setupRequest(t);
                      case 9:
                        return t = e.t0, e.abrupt("return", Promise.resolve().then((function() {
                          return n ? a.requestLocal(t) : De(t, a.adapter.request)
                        })));
                      case 11:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                })));
                return function(t) {
                  return e.apply(this, arguments)
                }
              }()
            }, {
              key: "requestLocal",
              value: function(e) {
                var t = this;
                return new Promise((function(n, a) {
                  t.adapter.request(Object.assign(e, {
                    complete: function(e) {
                      if (e || (e = {}), !e.statusCode || e.statusCode >= 400) {
                        var t = e.data && e.data.code || "SYS_ERR",
                          r = e.data && e.data.message || "request:fail";
                        return a(new Fe({
                          code: t,
                          message: r
                        }))
                      }
                      n({
                        success: !0,
                        result: e.data
                      })
                    }
                  }))
                }))
              }
            }, {
              key: "setupRequest",
              value: function(e) {
                var t = Object.assign({}, e, {
                    spaceId: this.config.spaceId,
                    timestamp: Date.now()
                  }),
                  n = {
                    "Content-Type": "application/json"
                  };
                n["x-serverless-sign"] = Ce(t, this.config.clientSecret);
                var a = Pe();
                n["x-client-info"] = encodeURIComponent(JSON.stringify(a));
                var r = Te().token;
                return n["x-client-token"] = r, {
                  url: this.config.requestUrl,
                  method: "POST",
                  data: t,
                  dataType: "json",
                  header: JSON.parse(JSON.stringify(n))
                }
              }
            }, {
              key: "setupLocalRequest",
              value: function() {
                var e = (0, f.default)(i.default.mark((function e(t) {
                  var n, a, r, o, s, l, u, c, f;
                  return i.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return n = Pe(), a = Te(), r = a.token, o = Object.assign({}, t, {
                          spaceId: this.config.spaceId,
                          timestamp: Date.now(),
                          clientInfo: n,
                          token: r
                        }), s = this.__dev__ && this.__dev__.debugInfo || {}, l = s.address, u = s.servePort, e.next = 9, Wt(l, u);
                      case 9:
                        return c = e.sent, f = c.address, e.abrupt("return", {
                          url: "http://".concat(f, ":").concat(u, "/").concat(Jt[t.method]),
                          method: "POST",
                          data: o,
                          dataType: "json",
                          header: JSON.parse(JSON.stringify({
                            "Content-Type": "application/json"
                          }))
                        });
                      case 12:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                })));
                return function(t) {
                  return e.apply(this, arguments)
                }
              }()
            }, {
              key: "callFunction",
              value: function(e) {
                var t = {
                  method: "serverless.function.runtime.invoke",
                  params: JSON.stringify({
                    functionTarget: e.name,
                    functionArgs: e.data || {}
                  })
                };
                return this.request(t, !1)
              }
            }, {
              key: "getUploadFileOptions",
              value: function(e) {
                var t = {
                  method: "serverless.file.resource.generateProximalSign",
                  params: JSON.stringify(e)
                };
                return this.request(t)
              }
            }, {
              key: "reportUploadFile",
              value: function(e) {
                var t = {
                  method: "serverless.file.resource.report",
                  params: JSON.stringify(e)
                };
                return this.request(t)
              }
            }, {
              key: "uploadFile",
              value: function(e) {
                var t, n = this,
                  a = e.filePath,
                  r = e.cloudPath,
                  o = e.fileType,
                  i = void 0 === o ? "image" : o,
                  s = e.onUploadProgress;
                if (!r) throw new Fe({
                  code: "CLOUDPATH_REQUIRED",
                  message: "cloudPath不可为空"
                });
                return this.getUploadFileOptions({
                  cloudPath: r
                }).then((function(e) {
                  var r = e.result,
                    o = r.url,
                    l = r.formData,
                    u = r.name;
                  return t = e.result.fileUrl, new Promise((function(e, t) {
                    var r = n.adapter.uploadFile({
                      url: o,
                      formData: l,
                      name: u,
                      filePath: a,
                      fileType: i,
                      success: function(n) {
                        n && n.statusCode < 400 ? e(n) : t(new Fe({
                          code: "UPLOAD_FAILED",
                          message: "文件上传失败"
                        }))
                      },
                      fail: function(e) {
                        t(new Fe({
                          code: e.code || "UPLOAD_FAILED",
                          message: e.message || e.errMsg || "文件上传失败"
                        }))
                      }
                    });
                    "function" == typeof s && r && "function" == typeof r.onProgressUpdate && r.onProgressUpdate((function(e) {
                      s({
                        loaded: e.totalBytesSent,
                        total: e.totalBytesExpectedToSend
                      })
                    }))
                  }))
                })).then((function() {
                  return n.reportUploadFile({
                    cloudPath: r
                  })
                })).then((function(e) {
                  return new Promise((function(n, r) {
                    e.success ? n({
                      success: !0,
                      filePath: a,
                      fileID: t
                    }) : r(new Fe({
                      code: "UPLOAD_FAILED",
                      message: "文件上传失败"
                    }))
                  }))
                }))
              }
            }, {
              key: "deleteFile",
              value: function(e) {
                var t = e.fileList,
                  n = {
                    method: "serverless.file.resource.delete",
                    params: JSON.stringify({
                      fileList: t
                    })
                  };
                return this.request(n).then((function(e) {
                  if (e.success) return e.result;
                  throw new Fe({
                    code: "DELETE_FILE_FAILED",
                    message: "删除文件失败"
                  })
                }))
              }
            }, {
              key: "getTempFileURL",
              value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  t = e.fileList,
                  n = e.maxAge;
                if (!Array.isArray(t) || 0 === t.length) throw new Fe({
                  code: "INVALID_PARAM",
                  message: "fileList的元素必须是非空的字符串"
                });
                var a = {
                  method: "serverless.file.resource.getTempFileURL",
                  params: JSON.stringify({
                    fileList: t,
                    maxAge: n
                  })
                };
                return this.request(a).then((function(e) {
                  if (e.success) return {
                    fileList: e.result.fileList.map((function(e) {
                      return {
                        fileID: e.fileID,
                        tempFileURL: e.tempFileURL
                      }
                    }))
                  };
                  throw new Fe({
                    code: "GET_TEMP_FILE_URL_FAILED",
                    message: "获取临时文件链接失败"
                  })
                }))
              }
            }]), e
          }(),
          Yt = {
            init: function(e) {
              var t = new $t(e),
                n = {
                  signInAnonymously: function() {
                    return Promise.resolve()
                  },
                  getLoginState: function() {
                    return Promise.resolve(!1)
                  }
                };
              return t.auth = function() {
                return n
              }, t.customAuth = t.auth, t
            }
          },
          zt = B((function(e, t) {
            e.exports = S.enc.Hex
          }));

        function Gt() {
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
            var t = 16 * Math.random() | 0;
            return ("x" === e ? t : 3 & t | 8).toString(16)
          }))
        }

        function Qt() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = t.data,
            a = t.functionName,
            r = t.method,
            o = t.headers,
            i = t.signHeaderKeys,
            s = void 0 === i ? [] : i,
            u = t.config,
            c = String(Date.now()),
            f = Gt(),
            d = Object.assign({}, o, {
              "x-from-app-id": u.spaceAppId,
              "x-from-env-id": u.spaceId,
              "x-to-env-id": u.spaceId,
              "x-from-instance-id": c,
              "x-from-function-name": a,
              "x-client-timestamp": c,
              "x-alipay-source": "client",
              "x-request-id": f,
              "x-alipay-callid": f,
              "x-trace-id": f
            }),
            h = ["x-from-app-id", "x-from-env-id", "x-to-env-id", "x-from-instance-id", "x-from-function-name", "x-client-timestamp"].concat(s),
            p = e.split("?") || [],
            g = (0, l.default)(p, 2),
            v = g[0],
            y = void 0 === v ? "" : v,
            m = g[1],
            F = void 0 === m ? "" : m,
            k = function(e) {
              var t = "HMAC-SHA256",
                n = e.signedHeaders.join(";"),
                a = e.signedHeaders.map((function(t) {
                  return "".concat(t.toLowerCase(), ":").concat(e.headers[t], "\n")
                })).join(""),
                r = Le(e.body).toString(zt),
                o = "".concat(e.method.toUpperCase(), "\n").concat(e.path, "\n").concat(e.query, "\n").concat(a, "\n").concat(n, "\n").concat(r, "\n"),
                i = Le(o).toString(zt),
                s = "".concat(t, "\n").concat(e.timestamp, "\n").concat(i, "\n"),
                l = Ne(s, e.secretKey).toString(zt);
              return "".concat(t, " Credential=").concat(e.secretId, ", SignedHeaders=").concat(n, ", Signature=").concat(l)
            }({
              path: y,
              query: F,
              method: r,
              headers: d,
              timestamp: c,
              body: JSON.stringify(n),
              secretId: u.accessKey,
              secretKey: u.secretKey,
              signedHeaders: h.sort()
            });
          return {
            url: "".concat(u.endpoint).concat(e),
            headers: Object.assign({}, d, {
              Authorization: k
            })
          }
        }

        function Xt(e) {
          var t = e.url,
            n = e.data,
            a = e.method,
            r = void 0 === a ? "POST" : a,
            o = e.headers,
            i = void 0 === o ? {} : o,
            s = e.timeout;
          return new Promise((function(e, a) {
            be.request({
              url: t,
              method: r,
              data: "object" == (0, u.default)(n) ? JSON.stringify(n) : n,
              header: i,
              dataType: "json",
              timeout: s,
              complete: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  n = i["x-trace-id"] || "";
                if (!t.statusCode || t.statusCode >= 400) {
                  var r = t.data || {},
                    o = r.message,
                    s = r.errMsg,
                    l = r.trace_id;
                  return a(new Fe({
                    code: "SYS_ERR",
                    message: o || s || "request:fail",
                    requestId: l || n
                  }))
                }
                e({
                  status: t.statusCode,
                  data: t.data,
                  headers: t.header,
                  requestId: n
                })
              }
            })
          }))
        }

        function Zt(e, t) {
          var n = e.path,
            a = e.data,
            r = e.method,
            o = void 0 === r ? "GET" : r,
            i = Qt(n, {
              functionName: "",
              data: a,
              method: o,
              headers: {
                "x-alipay-cloud-mode": "oss",
                "x-data-api-type": "oss",
                "x-expire-timestamp": Date.now() + 6e4
              },
              signHeaderKeys: ["x-data-api-type", "x-expire-timestamp"],
              config: t
            });
          return Xt({
            url: i.url,
            data: a,
            method: o,
            headers: i.headers
          }).then((function(e) {
            var t = e.data || {};
            if (!t.success) throw new Fe({
              code: e.errCode,
              message: e.errMsg,
              requestId: e.requestId
            });
            return t.data || {}
          })).catch((function(e) {
            throw new Fe({
              code: e.errCode,
              message: e.errMsg,
              requestId: e.requestId
            })
          }))
        }

        function en() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = e.trim().replace(/^cloud:\/\//, ""),
            n = t.indexOf("/");
          if (n <= 0) throw new Fe({
            code: "INVALID_PARAM",
            message: "fileID不合法"
          });
          var a = t.substring(0, n),
            r = t.substring(n + 1);
          return a !== this.config.spaceId && console.warn("file ".concat(e, " does not belong to env ").concat(this.config.spaceId)), r
        }

        function tn() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return "cloud://".concat(this.config.spaceId, "/").concat(e.replace(/^\/+/, ""))
        }
        var nn = function() {
            function e(t) {
              (0, y.default)(this, e), this.config = t
            }
            return (0, m.default)(e, [{
              key: "signedURL",
              value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  n = "/ws/function/".concat(e),
                  a = this.config.wsEndpoint.replace(/^ws(s)?:\/\//, ""),
                  r = Object.assign({}, t, {
                    accessKeyId: this.config.accessKey,
                    signatureNonce: Gt(),
                    timestamp: "" + Date.now()
                  }),
                  o = [n, ["accessKeyId", "authorization", "signatureNonce", "timestamp"].sort().map((function(e) {
                    return r[e] ? "".concat(e, "=").concat(r[e]) : null
                  })).filter(Boolean).join("&"), "host:".concat(a)].join("\n"),
                  i = ["HMAC-SHA256", Le(o).toString(zt)].join("\n"),
                  s = Ne(i, this.config.secretKey).toString(zt),
                  l = Object.keys(r).map((function(e) {
                    return "".concat(e, "=").concat(encodeURIComponent(r[e]))
                  })).join("&");
                return "".concat(this.config.wsEndpoint).concat(n, "?").concat(l, "&signature=").concat(s)
              }
            }]), e
          }(),
          an = function() {
            function e(t) {
              if ((0, y.default)(this, e), ["spaceId", "spaceAppId", "accessKey", "secretKey"].forEach((function(e) {
                  if (!Object.prototype.hasOwnProperty.call(t, e)) throw new Error("".concat(e, " required"))
                })), t.endpoint) {
                if ("string" != typeof t.endpoint) throw new Error("endpoint must be string");
                if (!/^https:\/\//.test(t.endpoint)) throw new Error("endpoint must start with https://");
                t.endpoint = t.endpoint.replace(/\/$/, "")
              }
              this.config = Object.assign({}, t, {
                endpoint: t.endpoint || "https://".concat(t.spaceId, ".api-hz.cloudbasefunction.cn"),
                wsEndpoint: t.wsEndpoint || "wss://".concat(t.spaceId, ".api-hz.cloudbasefunction.cn")
              }), this._websocket = new nn(this.config)
            }
            return (0, m.default)(e, [{
              key: "callFunction",
              value: function(e) {
                return function(e, t) {
                  var n = e.name,
                    a = e.data,
                    r = e.async,
                    o = void 0 !== r && r,
                    i = e.timeout,
                    s = "POST",
                    l = {
                      "x-to-function-name": n
                    };
                  o && (l["x-function-invoke-type"] = "async");
                  var u = Qt("/functions/invokeFunction", {
                    functionName: n,
                    data: a,
                    method: s,
                    headers: l,
                    signHeaderKeys: ["x-to-function-name"],
                    config: t
                  });
                  return Xt({
                    url: u.url,
                    data: a,
                    method: s,
                    headers: u.headers,
                    timeout: i
                  }).then((function(e) {
                    var t = 0;
                    if (o) {
                      var n = e.data || {};
                      t = "200" === n.errCode ? 0 : n.errCode, e.data = n.data || {}, e.errMsg = n.errMsg
                    }
                    if (0 !== t) throw new Fe({
                      code: t,
                      message: e.errMsg,
                      requestId: e.requestId
                    });
                    return {
                      errCode: t,
                      success: 0 === t,
                      requestId: e.requestId,
                      result: e.data
                    }
                  })).catch((function(e) {
                    throw new Fe({
                      code: e.errCode,
                      message: e.errMsg,
                      requestId: e.requestId
                    })
                  }))
                }(e, this.config)
              }
            }, {
              key: "uploadFileToOSS",
              value: function(e) {
                var t = e.url,
                  n = e.filePath,
                  a = e.fileType,
                  r = e.formData,
                  o = e.onUploadProgress;
                return new Promise((function(e, i) {
                  var s = be.uploadFile({
                    url: t,
                    filePath: n,
                    fileType: a,
                    formData: r,
                    name: "file",
                    success: function(t) {
                      t && t.statusCode < 400 ? e(t) : i(new Fe({
                        code: "UPLOAD_FAILED",
                        message: "文件上传失败"
                      }))
                    },
                    fail: function(e) {
                      i(new Fe({
                        code: e.code || "UPLOAD_FAILED",
                        message: e.message || e.errMsg || "文件上传失败"
                      }))
                    }
                  });
                  "function" == typeof o && s && "function" == typeof s.onProgressUpdate && s.onProgressUpdate((function(e) {
                    o({
                      loaded: e.totalBytesSent,
                      total: e.totalBytesExpectedToSend
                    })
                  }))
                }))
              }
            }, {
              key: "uploadFile",
              value: function() {
                var e = (0, f.default)(i.default.mark((function e(t) {
                  var n, a, r, o, s, l, u, c, f, d, h;
                  return i.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (n = t.filePath, a = t.cloudPath, r = void 0 === a ? "" : a, o = t.fileType, s = void 0 === o ? "image" : o, l = t.onUploadProgress, "string" === N(r)) {
                          e.next = 3;
                          break
                        }
                        throw new Fe({
                          code: "INVALID_PARAM",
                          message: "cloudPath必须为字符串类型"
                        });
                      case 3:
                        if (r = r.trim()) {
                          e.next = 5;
                          break
                        }
                        throw new Fe({
                          code: "INVALID_PARAM",
                          message: "cloudPath不可为空"
                        });
                      case 5:
                        if (!/:\/\//.test(r)) {
                          e.next = 7;
                          break
                        }
                        throw new Fe({
                          code: "INVALID_PARAM",
                          message: "cloudPath不合法"
                        });
                      case 7:
                        return e.next = 9, Zt({
                          path: "/".concat(r.replace(/^\//, ""), "?post_url")
                        }, this.config);
                      case 9:
                        return u = e.sent, c = u.file_id, f = u.upload_url, d = u.form_data, h = d && d.reduce((function(e, t) {
                          return e[t.key] = t.value, e
                        }), {}), e.abrupt("return", this.uploadFileToOSS({
                          url: f,
                          filePath: n,
                          fileType: s,
                          formData: h,
                          onUploadProgress: l
                        }).then((function() {
                          return {
                            fileID: c
                          }
                        })));
                      case 15:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                })));
                return function(t) {
                  return e.apply(this, arguments)
                }
              }()
            }, {
              key: "getTempFileURL",
              value: function() {
                var e = (0, f.default)(i.default.mark((function e(t) {
                  var n, a = this;
                  return i.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return n = t.fileList, e.abrupt("return", new Promise((function(e, t) {
                          (!n || n.length < 0) && e({
                            code: "INVALID_PARAM",
                            message: "fileList不能为空数组"
                          }), n.length > 50 && e({
                            code: "INVALID_PARAM",
                            message: "fileList数组长度不能超过50"
                          });
                          var r, o = [],
                            i = k(n);
                          try {
                            for (i.s(); !(r = i.n()).done;) {
                              var s = r.value,
                                l = void 0;
                              "string" !== N(s) && e({
                                code: "INVALID_PARAM",
                                message: "fileList的元素必须是非空的字符串"
                              });
                              try {
                                l = en.call(a, s)
                              } catch (e) {
                                console.warn(e.errCode, e.errMsg), l = s
                              }
                              o.push({
                                file_id: l,
                                expire: 600
                              })
                            }
                          } catch (e) {
                            i.e(e)
                          } finally {
                            i.f()
                          }
                          Zt({
                            path: "/?download_url",
                            data: {
                              file_list: o
                            },
                            method: "POST"
                          }, a.config).then((function(t) {
                            var n = t.file_list;
                            e({
                              fileList: (void 0 === n ? [] : n).map((function(e) {
                                return {
                                  fileID: tn.call(a, e.file_id),
                                  tempFileURL: e.download_url
                                }
                              }))
                            })
                          })).catch((function(e) {
                            return t(e)
                          }))
                        })));
                      case 2:
                      case "end":
                        return e.stop()
                    }
                  }), e)
                })));
                return function(t) {
                  return e.apply(this, arguments)
                }
              }()
            }, {
              key: "connectWebSocket",
              value: function() {
                var e = (0, f.default)(i.default.mark((function e(t) {
                  var n, a;
                  return i.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return n = t.name, a = t.query, e.abrupt("return", be.connectSocket({
                          url: this._websocket.signedURL(n, a),
                          complete: function() {}
                        }));
                      case 2:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                })));
                return function(t) {
                  return e.apply(this, arguments)
                }
              }()
            }]), e
          }(),
          rn = {
            init: function(e) {
              e.provider = "alipay";
              var t = new an(e);
              return t.auth = function() {
                return {
                  signInAnonymously: function() {
                    return Promise.resolve()
                  },
                  getLoginState: function() {
                    return Promise.resolve(!0)
                  }
                }
              }, t
            }
          };

        function on(e) {
          var t, n = e.data;
          t = Pe();
          var a = JSON.parse(JSON.stringify(n || {}));
          if (Object.assign(a, {
              clientInfo: t
            }), !a.uniIdToken) {
            var r = Te().token;
            r && (a.uniIdToken = r)
          }
          return a
        }
        var sn = [{
            rule: /fc_function_not_found|FUNCTION_NOT_FOUND/,
            content: "，云函数[{functionName}]在云端不存在，请检查此云函数名称是否正确以及该云函数是否已上传到服务空间",
            mode: "append"
          }],
          ln = /[\\^$.*+?()[\]{}|]/g,
          un = RegExp(ln.source);

        function cn(e, t, n) {
          return e.replace(new RegExp((a = t) && un.test(a) ? a.replace(ln, "\\$&") : a, "g"), n);
          var a
        }
        var fn = "request",
          dn = "response",
          hn = "both",
          pn = "_globalUniCloudStatus";
        var gn, vn = {
            code: 2e4,
            message: "System error"
          },
          yn = {
            code: 20101,
            message: "Invalid client"
          };

        function mn(e) {
          var t = e || {},
            n = t.errSubject,
            a = t.subject,
            r = t.errCode,
            o = t.errMsg,
            i = t.code,
            s = t.message,
            l = t.cause;
          return new Fe({
            subject: n || a || "uni-secure-network",
            code: r || i || vn.code,
            message: o || s,
            cause: l
          })
        }

        function Fn() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.secretType;
          return t === fn || t === dn || t === hn
        }

        function kn() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          e.name, e.data;
          return !1
        }

        function wn(e) {
          e.functionName, e.result, e.logPvd
        }

        function bn(e) {
          var t = e.callFunction,
            n = function(n) {
              var a = this,
                r = n.name;
              n.data = on.call(e, {
                data: n.data
              });
              var o = {
                  aliyun: "aliyun",
                  tencent: "tcb",
                  tcb: "tcb",
                  alipay: "alipay",
                  dcloud: "dcloud"
                } [this.config.provider],
                i = Fn(n),
                s = kn(n),
                l = i || s;
              return t.call(this, n).then((function(e) {
                return e.errCode = 0, !l && wn.call(a, {
                  functionName: r,
                  result: e,
                  logPvd: o
                }), Promise.resolve(e)
              }), (function(e) {
                return !l && wn.call(a, {
                  functionName: r,
                  result: e,
                  logPvd: o
                }), e && e.message && (e.message = function() {
                  for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.message, n = void 0 === t ? "" : t, a = e.extraInfo, r = void 0 === a ? {} : a, o = e.formatter, i = void 0 === o ? [] : o, s = 0; s < i.length; s++) {
                    var l = i[s],
                      u = l.rule,
                      c = l.content,
                      f = l.mode,
                      d = n.match(u);
                    if (d) {
                      for (var h = c, p = 1; p < d.length; p++) h = cn(h, "{$".concat(p, "}"), d[p]);
                      for (var g in r) h = cn(h, "{".concat(g, "}"), r[g]);
                      return "replace" === f ? h : n + h
                    }
                  }
                  return n
                }({
                  message: "[".concat(n.name, "]: ").concat(e.message),
                  formatter: sn,
                  extraInfo: {
                    functionName: r
                  }
                })), Promise.reject(e)
              }))
            };
          e.callFunction = function(t) {
            var a, r, o = e.config,
              i = o.provider,
              s = o.spaceId,
              l = t.name;
            return t.data = t.data || {}, a = (a = n).bind(e), r = kn(t) ? n.call(e, t) : function(e) {
              var t = e.name,
                n = e.data;
              return "uni-id-co" === t && "secureNetworkHandshakeByWeixin" === (void 0 === n ? {} : n).method
            }(t) ? a.call(e, t) : Fn(t) ? new gn({
              secretType: t.secretType,
              uniCloudIns: e
            }).wrapEncryptDataCallFunction(n.bind(e))(t) : function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.provider,
                n = e.spaceId,
                a = e.functionName,
                r = Be(),
                o = r.appId,
                i = r.uniPlatform,
                s = r.osName,
                l = i;
              "app" === i && (l = s);
              var u = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  t = e.provider,
                  n = e.spaceId,
                  a = J;
                if (!a) return {};
                t = function(e) {
                  return "tencent" === e ? "tcb" : e
                }(t);
                var r = a.find((function(e) {
                  return e.provider === t && e.spaceId === n
                }));
                return r && r.config
              }({
                provider: t,
                spaceId: n
              });
              if (!u || !u.accessControl || !u.accessControl.enable) return !1;
              var c = u.accessControl.function || {},
                f = Object.keys(c);
              if (0 === f.length) return !0;
              var d = function(e, t) {
                for (var n, a, r, o = 0; o < e.length; o++) {
                  var i = e[o];
                  i !== t ? "*" !== i ? i.split(",").map((function(e) {
                    return e.trim()
                  })).indexOf(t) > -1 && (a = i) : r = i : n = i
                }
                return n || a || r
              }(f, a);
              if (!d) return !1;
              if ((c[d] || []).find((function() {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  return e.appId === o && (e.platform || "").toLowerCase() === l.toLowerCase()
                }))) return !0;
              throw console.error("此应用[appId: ".concat(o, ", platform: ").concat(l, "]不在云端配置的允许访问的应用列表内，参考：https://uniapp.dcloud.net.cn/uniCloud/secure-network.html#verify-client")), mn(yn)
            }({
              provider: i,
              spaceId: s,
              functionName: l
            }) ? new gn({
              secretType: t.secretType,
              uniCloudIns: e
            }).wrapVerifyClientCallFunction(n.bind(e))(t) : a(t), Object.defineProperty(r, "result", {
              get: function() {
                return console.warn("当前返回结果为Promise类型，不可直接访问其result属性，详情请参考：https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {}
              }
            }), r.then((function(e) {
              return "undefined" != typeof UTSJSONObject && (e.result = new UTSJSONObject(e.result)), e
            }))
          }
        }
        gn = (0, m.default)((function e() {
          throw (0, y.default)(this, e), mn({
            message: "Platform ".concat($, " is not enabled, please check whether secure network module is enabled in your manifest.json")
          })
        }));
        var Tn = Symbol("CLIENT_DB_INTERNAL");

        function xn(e, t) {
          return e.then = "DoNotReturnProxyWithAFunctionNamedThen", e._internalType = Tn, e.inspect = null, e.__ob__ = void 0, new Proxy(e, {
            get: function(e, n, a) {
              if ("_uniClient" === n) return null;
              if ("symbol" == (0, u.default)(n)) return e[n];
              if (n in e || "string" != typeof n) {
                var r = e[n];
                return "function" == typeof r ? r.bind(e) : r
              }
              return t.get(e, n, a)
            }
          })
        }

        function Bn(e) {
          return {
            on: function(t, n) {
              e[t] = e[t] || [], e[t].indexOf(n) > -1 || e[t].push(n)
            },
            off: function(t, n) {
              e[t] = e[t] || [];
              var a = e[t].indexOf(n); - 1 !== a && e[t].splice(a, 1)
            }
          }
        }
        var Sn = ["db.Geo", "db.command", "command.aggregate"];

        function Pn(e, t) {
          return Sn.indexOf("".concat(e, ".").concat(t)) > -1
        }

        function _n(e) {
          switch (N(e)) {
            case "array":
              return e.map((function(e) {
                return _n(e)
              }));
            case "object":
              return e._internalType === Tn || Object.keys(e).forEach((function(t) {
                e[t] = _n(e[t])
              })), e;
            case "regexp":
              return {
                $regexp: {
                  source: e.source,
                  flags: e.flags
                }
              };
            case "date":
              return {
                $date: e.toISOString()
              };
            default:
              return e
          }
        }

        function Cn(e) {
          return e && e.content && e.content.$method
        }
        var Dn = function() {
          function e(t, n, a) {
            (0, y.default)(this, e), this.content = t, this.prevStage = n || null, this.udb = null, this._database = a
          }
          return (0, m.default)(e, [{
            key: "toJSON",
            value: function() {
              for (var e = this, t = [e.content]; e.prevStage;) e = e.prevStage, t.push(e.content);
              return {
                $db: t.reverse().map((function(e) {
                  return {
                    $method: e.$method,
                    $param: _n(e.$param)
                  }
                }))
              }
            }
          }, {
            key: "toString",
            value: function() {
              return JSON.stringify(this.toJSON())
            }
          }, {
            key: "getAction",
            value: function() {
              var e = this.toJSON().$db.find((function(e) {
                return "action" === e.$method
              }));
              return e && e.$param && e.$param[0]
            }
          }, {
            key: "getCommand",
            value: function() {
              return {
                $db: this.toJSON().$db.filter((function(e) {
                  return "action" !== e.$method
                }))
              }
            }
          }, {
            key: "isAggregate",
            get: function() {
              for (var e = this; e;) {
                var t = Cn(e),
                  n = Cn(e.prevStage);
                if ("aggregate" === t && "collection" === n || "pipeline" === t) return !0;
                e = e.prevStage
              }
              return !1
            }
          }, {
            key: "isCommand",
            get: function() {
              for (var e = this; e;) {
                if ("command" === Cn(e)) return !0;
                e = e.prevStage
              }
              return !1
            }
          }, {
            key: "isAggregateCommand",
            get: function() {
              for (var e = this; e;) {
                var t = Cn(e),
                  n = Cn(e.prevStage);
                if ("aggregate" === t && "command" === n) return !0;
                e = e.prevStage
              }
              return !1
            }
          }, {
            key: "getNextStageFn",
            value: function(e) {
              var t = this;
              return function() {
                return Rn({
                  $method: e,
                  $param: _n(Array.from(arguments))
                }, t, t._database)
              }
            }
          }, {
            key: "count",
            get: function() {
              return this.isAggregate ? this.getNextStageFn("count") : function() {
                return this._send("count", Array.from(arguments))
              }
            }
          }, {
            key: "remove",
            get: function() {
              return this.isCommand ? this.getNextStageFn("remove") : function() {
                return this._send("remove", Array.from(arguments))
              }
            }
          }, {
            key: "get",
            value: function() {
              return this._send("get", Array.from(arguments))
            }
          }, {
            key: "add",
            get: function() {
              return this.isCommand ? this.getNextStageFn("add") : function() {
                return this._send("add", Array.from(arguments))
              }
            }
          }, {
            key: "update",
            value: function() {
              return this._send("update", Array.from(arguments))
            }
          }, {
            key: "end",
            value: function() {
              return this._send("end", Array.from(arguments))
            }
          }, {
            key: "set",
            get: function() {
              return this.isCommand ? this.getNextStageFn("set") : function() {
                throw new Error("JQL禁止使用set方法")
              }
            }
          }, {
            key: "_send",
            value: function(e, t) {
              var n = this.getAction(),
                a = this.getCommand();
              return a.$db.push({
                $method: e,
                $param: _n(t)
              }), this._database._callCloudFunction({
                action: n,
                command: a
              })
            }
          }]), e
        }();

        function Rn(e, t, n) {
          return xn(new Dn(e, t, n), {
            get: function(e, t) {
              var a = "db";
              return e && e.content && (a = e.content.$method), Pn(a, t) ? Rn({
                $method: t
              }, e, n) : function() {
                return Rn({
                  $method: t,
                  $param: _n(Array.from(arguments))
                }, e, n)
              }
            }
          })
        }

        function In(e) {
          var t = e.path,
            n = e.method;
          return function() {
            function e() {
              (0, y.default)(this, e), this.param = Array.from(arguments)
            }
            return (0, m.default)(e, [{
              key: "toJSON",
              value: function() {
                return {
                  $newDb: [].concat((0, c.default)(t.map((function(e) {
                    return {
                      $method: e
                    }
                  }))), [{
                    $method: n,
                    $param: this.param
                  }])
                }
              }
            }, {
              key: "toString",
              value: function() {
                return JSON.stringify(this.toJSON())
              }
            }]), e
          }()
        }

        function On(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return xn(new e(t), {
            get: function(e, t) {
              return Pn("db", t) ? Rn({
                $method: t
              }, null, e) : function() {
                return Rn({
                  $method: t,
                  $param: _n(Array.from(arguments))
                }, null, e)
              }
            }
          })
        }
        var An = function(e) {
            (0, h.default)(n, e);
            var t = x(n);

            function n() {
              return (0, y.default)(this, n), t.apply(this, arguments)
            }
            return (0, m.default)(n, [{
              key: "_parseResult",
              value: function(e) {
                return this._isJQL ? e.result : e
              }
            }, {
              key: "_callCloudFunction",
              value: function(e) {
                var t = this,
                  n = e.action,
                  a = e.command,
                  r = e.multiCommand,
                  o = e.queryList;

                function i(e, t) {
                  if (r && o)
                    for (var n = 0; n < o.length; n++) {
                      var a = o[n];
                      a.udb && "function" == typeof a.udb.setResult && (t ? a.udb.setResult(t) : a.udb.setResult(e.result.dataList[n]))
                    }
                }
                var s = this,
                  l = this._isJQL ? "databaseForJQL" : "database";

                function u(e) {
                  return s._callback("error", [e]), te(ne(l, "fail"), e).then((function() {
                    return te(ne(l, "complete"), e)
                  })).then((function() {
                    return i(null, e), pe(oe, {
                      type: le,
                      content: e
                    }), Promise.reject(e)
                  }))
                }
                var c = te(ne(l, "invoke")),
                  f = this._uniClient;
                return c.then((function() {
                  return f.callFunction({
                    name: "DCloud-clientDB",
                    type: A,
                    data: {
                      action: n,
                      command: a,
                      multiCommand: r
                    }
                  })
                })).then((function(e) {
                  var n = e.result,
                    a = n.code,
                    r = n.message,
                    o = n.token,
                    c = n.tokenExpired,
                    f = n.systemInfo,
                    d = void 0 === f ? [] : f;
                  if (d)
                    for (var h = 0; h < d.length; h++) {
                      var p = d[h],
                        g = p.level,
                        v = p.message,
                        y = p.detail,
                        m = "[System Info]" + v;
                      y && (m = "".concat(m, "\n详细信息：").concat(y)), (console[g] || console.log)(m)
                    }
                  if (a) return u(new Fe({
                    code: a,
                    message: r,
                    requestId: e.requestId
                  }));
                  e.result.errCode = e.result.errCode || e.result.code, e.result.errMsg = e.result.errMsg || e.result.message, o && c && (xe({
                    token: o,
                    tokenExpired: c
                  }), t._callbackAuth("refreshToken", [{
                    token: o,
                    tokenExpired: c
                  }]), t._callback("refreshToken", [{
                    token: o,
                    tokenExpired: c
                  }]), pe(se, {
                    token: o,
                    tokenExpired: c
                  }));
                  for (var F = [{
                      prop: "affectedDocs",
                      tips: "affectedDocs不再推荐使用，请使用inserted/deleted/updated/data.length替代"
                    }, {
                      prop: "code",
                      tips: "code不再推荐使用，请使用errCode替代"
                    }, {
                      prop: "message",
                      tips: "message不再推荐使用，请使用errMsg替代"
                    }], k = function(t) {
                      var n = F[t],
                        a = n.prop,
                        r = n.tips;
                      if (a in e.result) {
                        var o = e.result[a];
                        Object.defineProperty(e.result, a, {
                          get: function() {
                            return console.warn(r), o
                          }
                        })
                      }
                    }, w = 0; w < F.length; w++) k(w);
                  return function(e) {
                    return te(ne(l, "success"), e).then((function() {
                      return te(ne(l, "complete"), e)
                    })).then((function() {
                      i(e, null);
                      var t = s._parseResult(e);
                      return pe(oe, {
                        type: le,
                        content: t
                      }), Promise.resolve(t)
                    }))
                  }(e)
                }), (function(e) {
                  return /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e.message) && console.warn("clientDB未初始化，请在web控制台保存一次schema以开启clientDB"), u(new Fe({
                    code: e.code || "SYSTEM_ERROR",
                    message: e.message,
                    requestId: e.requestId
                  }))
                }))
              }
            }]), n
          }(function() {
            function e() {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = t.uniClient,
                a = void 0 === n ? {} : n,
                r = t.isJQL,
                o = void 0 !== r && r;
              (0, y.default)(this, e), this._uniClient = a, this._authCallBacks = {}, this._dbCallBacks = {}, a._isDefault && (this._dbCallBacks = G("_globalUniCloudDatabaseCallback")), o || (this.auth = Bn(this._authCallBacks)), this._isJQL = o, Object.assign(this, Bn(this._dbCallBacks)), this.env = xn({}, {
                get: function(e, t) {
                  return {
                    $env: t
                  }
                }
              }), this.Geo = xn({}, {
                get: function(e, t) {
                  return In({
                    path: ["Geo"],
                    method: t
                  })
                }
              }), this.serverDate = In({
                path: [],
                method: "serverDate"
              }), this.RegExp = In({
                path: [],
                method: "RegExp"
              })
            }
            return (0, m.default)(e, [{
              key: "getCloudEnv",
              value: function(e) {
                if ("string" != typeof e || !e.trim()) throw new Error("getCloudEnv参数错误");
                return {
                  $env: e.replace("$cloudEnv_", "")
                }
              }
            }, {
              key: "_callback",
              value: function(e, t) {
                var n = this._dbCallBacks;
                n[e] && n[e].forEach((function(e) {
                  e.apply(void 0, (0, c.default)(t))
                }))
              }
            }, {
              key: "_callbackAuth",
              value: function(e, t) {
                var n = this._authCallBacks;
                n[e] && n[e].forEach((function(e) {
                  e.apply(void 0, (0, c.default)(t))
                }))
              }
            }, {
              key: "multiSend",
              value: function() {
                var e = Array.from(arguments),
                  t = e.map((function(e) {
                    var t = e.getAction(),
                      n = e.getCommand();
                    if ("getTemp" !== n.$db[n.$db.length - 1].$method) throw new Error("multiSend只支持子命令内使用getTemp");
                    return {
                      action: t,
                      command: n
                    }
                  }));
                return this._callCloudFunction({
                  multiCommand: t,
                  queryList: e
                })
              }
            }]), e
          }()),
          En = "token无效，跳转登录页面",
          Ln = "token过期，跳转登录页面",
          Nn = {
            TOKEN_INVALID_TOKEN_EXPIRED: Ln,
            TOKEN_INVALID_INVALID_CLIENTID: En,
            TOKEN_INVALID: En,
            TOKEN_INVALID_WRONG_TOKEN: En,
            TOKEN_INVALID_ANONYMOUS_USER: En
          },
          Un = {
            "uni-id-token-expired": Ln,
            "uni-id-check-token-failed": En,
            "uni-id-token-not-exist": En,
            "uni-id-check-device-feature-failed": En
          };

        function qn(e, t) {
          return (e ? "".concat(e, "/").concat(t) : t).replace(/^\//, "")
        }

        function Mn() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = [],
            a = [];
          return e.forEach((function(e) {
            !0 === e.needLogin ? n.push(qn(t, e.path)) : !1 === e.needLogin && a.push(qn(t, e.path))
          })), {
            needLoginPage: n,
            notNeedLoginPage: a
          }
        }

        function jn(e) {
          return e.split("?")[0].replace(/^\//, "")
        }

        function Vn() {
          return function(e) {
            var t = e && e.$page && e.$page.fullPath || "";
            return t ? ("/" !== t.charAt(0) && (t = "/" + t), t) : t
          }(function() {
            var e = getCurrentPages();
            return e[e.length - 1]
          }())
        }

        function Kn() {
          return jn(Vn())
        }

        function Wn() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (!e) return !1;
          if (!(t && t.list && t.list.length)) return !1;
          var n = t.list,
            a = jn(e);
          return n.some((function(e) {
            return e.pagePath === a
          }))
        }
        var Hn, Jn = !!F.default.uniIdRouter,
          $n = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : F.default,
              t = e.pages,
              n = void 0 === t ? [] : t,
              a = e.subPackages,
              r = void 0 === a ? [] : a,
              o = e.uniIdRouter,
              i = void 0 === o ? {} : o,
              s = e.tabBar,
              l = void 0 === s ? {} : s,
              u = i.loginPage,
              f = i.needLogin,
              d = void 0 === f ? [] : f,
              h = i.resToLogin,
              p = void 0 === h || h,
              g = Mn(n),
              v = g.needLoginPage,
              y = g.notNeedLoginPage,
              m = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                  t = [],
                  n = [];
                return e.forEach((function(e) {
                  var a = e.root,
                    r = e.pages,
                    o = Mn(void 0 === r ? [] : r, a),
                    i = o.needLoginPage,
                    s = o.notNeedLoginPage;
                  t.push.apply(t, (0, c.default)(i)), n.push.apply(n, (0, c.default)(s))
                })), {
                  needLoginPage: t,
                  notNeedLoginPage: n
                }
              }(r),
              k = m.needLoginPage,
              w = m.notNeedLoginPage;
            return {
              loginPage: u,
              routerNeedLogin: d,
              resToLogin: p,
              needLoginPage: [].concat((0, c.default)(v), (0, c.default)(k)),
              notNeedLoginPage: [].concat((0, c.default)(y), (0, c.default)(w)),
              loginPageInTabBar: Wn(u, l)
            }
          }(),
          Yn = $n.loginPage,
          zn = $n.routerNeedLogin,
          Gn = $n.resToLogin,
          Qn = $n.needLoginPage,
          Xn = $n.notNeedLoginPage,
          Zn = $n.loginPageInTabBar;
        if (Qn.indexOf(Yn) > -1) throw new Error("Login page [".concat(Yn, '] should not be "needLogin", please check your pages.json'));

        function ea(e) {
          var t = Kn();
          if ("/" === e.charAt(0)) return e;
          var n = e.split("?"),
            a = (0, l.default)(n, 2),
            r = a[0],
            o = a[1],
            i = r.replace(/^\//, "").split("/"),
            s = t.split("/");
          s.pop();
          for (var u = 0; u < i.length; u++) {
            var c = i[u];
            ".." === c ? s.pop() : "." !== c && s.push(c)
          }
          return "" === s[0] && s.shift(), "/" + s.join("/") + (o ? "?" + o : "")
        }

        function ta(e) {
          var t = jn(ea(e));
          return !(Xn.indexOf(t) > -1) && (Qn.indexOf(t) > -1 || zn.some((function(t) {
            return function(e, t) {
              return new RegExp(t).test(e)
            }(e, t)
          })))
        }

        function na(e) {
          var t = jn(e.redirect),
            n = jn(Yn);
          return Kn() !== n && t !== n
        }

        function aa() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.api,
            n = e.redirect;
          if (n && na({
              redirect: n
            })) {
            var r = function(e, t) {
              return "/" !== e.charAt(0) && (e = "/" + e), t ? e.indexOf("?") > -1 ? e + "&uniIdRedirectUrl=".concat(encodeURIComponent(t)) : e + "?uniIdRedirectUrl=".concat(encodeURIComponent(t)) : e
            }(Yn, n);
            Zn ? "navigateTo" !== t && "redirectTo" !== t || (t = "switchTab") : "switchTab" === t && (t = "navigateTo");
            var o = {
              navigateTo: a.navigateTo,
              redirectTo: a.redirectTo,
              switchTab: a.switchTab,
              reLaunch: a.reLaunch
            };
            setTimeout((function() {
              o[t]({
                url: r
              })
            }), 0)
          }
        }

        function ra() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.url,
            n = {
              abortLoginPageJump: !1,
              autoToLoginPage: !1
            },
            a = function() {
              var e, t = Te(),
                n = t.token,
                a = t.tokenExpired;
              if (n) {
                if (a < Date.now()) {
                  var r = "uni-id-token-expired";
                  e = {
                    errCode: r,
                    errMsg: Un[r]
                  }
                }
              } else {
                var o = "uni-id-check-token-failed";
                e = {
                  errCode: o,
                  errMsg: Un[o]
                }
              }
              return e
            }();
          if (ta(t) && a) {
            if (a.uniIdRedirectUrl = t, fe(ie).length > 0) return setTimeout((function() {
              pe(ie, a)
            }), 0), n.abortLoginPageJump = !0, n;
            n.autoToLoginPage = !0
          }
          return n
        }

        function oa() {
          ! function() {
            var e = Vn(),
              t = ra({
                url: e
              }),
              n = t.abortLoginPageJump,
              a = t.autoToLoginPage;
            n || a && aa({
              api: "redirectTo",
              redirect: e
            })
          }();
          for (var e = ["navigateTo", "redirectTo", "reLaunch", "switchTab"], t = function(t) {
              var n = e[t];
              a.addInterceptor(n, {
                invoke: function(e) {
                  var t = ra({
                      url: e.url
                    }),
                    a = t.abortLoginPageJump,
                    r = t.autoToLoginPage;
                  return a ? e : r ? (aa({
                    api: n,
                    redirect: ea(e.url)
                  }), !1) : e
                }
              })
            }, n = 0; n < e.length; n++) t(n)
        }

        function ia() {
          this.onResponse((function(e) {
            var t = e.type,
              n = e.content,
              a = !1;
            switch (t) {
              case "cloudobject":
                a = function(e) {
                  return "object" == (0, u.default)(e) && (e || {}).errCode in Un
                }(n);
                break;
              case "clientdb":
                a = function(e) {
                  return "object" == (0, u.default)(e) && (e || {}).errCode in Nn
                }(n)
            }
            a && function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = fe(ie);
              ye().then((function() {
                var n = Vn();
                if (n && na({
                    redirect: n
                  })) return t.length > 0 ? pe(ie, Object.assign({
                  uniIdRedirectUrl: n
                }, e)) : void(Yn && aa({
                  api: "navigateTo",
                  redirect: n
                }))
              }))
            }(n)
          }))
        }

        function sa(e) {
          ! function(e) {
            e.onResponse = function(e) {
              de(oe, e)
            }, e.offResponse = function(e) {
              he(oe, e)
            }
          }(e),
          function(e) {
            e.onNeedLogin = function(e) {
              de(ie, e)
            }, e.offNeedLogin = function(e) {
              he(ie, e)
            }, Jn && (G(pn).needLoginInit || (G(pn).needLoginInit = !0, ye().then((function() {
              oa.call(e)
            })), Gn && ia.call(e)))
          }(e),
          function(e) {
            e.onRefreshToken = function(e) {
              de(se, e)
            }, e.offRefreshToken = function(e) {
              he(se, e)
            }
          }(e)
        }
        var la = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          ua = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;

        function ca() {
          var e, t, n = Te().token || "",
            a = n.split(".");
          if (!n || 3 !== a.length) return {
            uid: null,
            role: [],
            permission: [],
            tokenExpired: 0
          };
          try {
            e = JSON.parse((t = a[1], decodeURIComponent(Hn(t).split("").map((function(e) {
              return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
            })).join(""))))
          } catch (n) {
            throw new Error("获取当前用户信息出错，详细错误信息为：" + n.message)
          }
          return e.tokenExpired = 1e3 * e.exp, delete e.exp, delete e.iat, e
        }
        Hn = "function" != typeof atob ? function(e) {
          if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !ua.test(e)) throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
          var t;
          e += "==".slice(2 - (3 & e.length));
          for (var n, a, r = "", o = 0; o < e.length;) t = la.indexOf(e.charAt(o++)) << 18 | la.indexOf(e.charAt(o++)) << 12 | (n = la.indexOf(e.charAt(o++))) << 6 | (a = la.indexOf(e.charAt(o++))), r += 64 === n ? String.fromCharCode(t >> 16 & 255) : 64 === a ? String.fromCharCode(t >> 16 & 255, t >> 8 & 255) : String.fromCharCode(t >> 16 & 255, t >> 8 & 255, 255 & t);
          return r
        } : atob;
        var fa = function(e) {
            return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
          }(B((function(e, t) {
            Object.defineProperty(t, "__esModule", {
              value: !0
            });
            var n = "chooseAndUploadFile:ok",
              o = "chooseAndUploadFile:fail";

            function i(e, t) {
              return e.tempFiles.forEach((function(e, n) {
                e.name || (e.name = e.path.substring(e.path.lastIndexOf("/") + 1)), t && (e.fileType = t), e.cloudPath = Date.now() + "_" + n + e.name.substring(e.name.lastIndexOf("."))
              })), e.tempFilePaths || (e.tempFilePaths = e.tempFiles.map((function(e) {
                return e.path
              }))), e
            }

            function s(e, t, a) {
              var r = a.onChooseFile,
                o = a.onUploadProgress;
              return t.then((function(e) {
                if (r) {
                  var t = r(e);
                  if (void 0 !== t) return Promise.resolve(t).then((function(t) {
                    return void 0 === t ? e : t
                  }))
                }
                return e
              })).then((function(t) {
                return !1 === t ? {
                  errMsg: n,
                  tempFilePaths: [],
                  tempFiles: []
                } : function(e, t) {
                  var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5,
                    r = arguments.length > 3 ? arguments[3] : void 0;
                  (t = Object.assign({}, t)).errMsg = n;
                  var o = t.tempFiles,
                    i = o.length,
                    s = 0;
                  return new Promise((function(n) {
                    for (; s < a;) l();

                    function l() {
                      var a = s++;
                      if (a >= i) !o.find((function(e) {
                        return !e.url && !e.errMsg
                      })) && n(t);
                      else {
                        var u = o[a];
                        e.uploadFile({
                          provider: u.provider,
                          filePath: u.path,
                          cloudPath: u.cloudPath,
                          fileType: u.fileType,
                          cloudPathAsRealPath: u.cloudPathAsRealPath,
                          onUploadProgress: function(e) {
                            e.index = a, e.tempFile = u, e.tempFilePath = u.path, r && r(e)
                          }
                        }).then((function(e) {
                          u.url = e.fileID, a < i && l()
                        })).catch((function(e) {
                          u.errMsg = e.errMsg || e.message, a < i && l()
                        }))
                      }
                    }
                  }))
                }(e, t, 5, o)
              }))
            }
            t.initChooseAndUploadFile = function(e) {
              return function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                  type: "all"
                };
                return "image" === t.type ? s(e, function(e) {
                  var t = e.count,
                    n = e.sizeType,
                    r = e.sourceType,
                    s = void 0 === r ? ["album", "camera"] : r,
                    l = e.extension;
                  return new Promise((function(e, r) {
                    a.chooseImage({
                      count: t,
                      sizeType: n,
                      sourceType: s,
                      extension: l,
                      success: function(t) {
                        e(i(t, "image"))
                      },
                      fail: function(e) {
                        r({
                          errMsg: e.errMsg.replace("chooseImage:fail", o)
                        })
                      }
                    })
                  }))
                }(t), t) : "video" === t.type ? s(e, function(e) {
                  var t = e.camera,
                    n = e.compressed,
                    r = e.maxDuration,
                    s = e.sourceType,
                    l = void 0 === s ? ["album", "camera"] : s,
                    u = e.extension;
                  return new Promise((function(e, s) {
                    a.chooseVideo({
                      camera: t,
                      compressed: n,
                      maxDuration: r,
                      sourceType: l,
                      extension: u,
                      success: function(t) {
                        var n = t.tempFilePath,
                          a = t.duration,
                          r = t.size,
                          o = t.height,
                          s = t.width;
                        e(i({
                          errMsg: "chooseVideo:ok",
                          tempFilePaths: [n],
                          tempFiles: [{
                            name: t.tempFile && t.tempFile.name || "",
                            path: n,
                            size: r,
                            type: t.tempFile && t.tempFile.type || "",
                            width: s,
                            height: o,
                            duration: a,
                            fileType: "video",
                            cloudPath: ""
                          }]
                        }, "video"))
                      },
                      fail: function(e) {
                        s({
                          errMsg: e.errMsg.replace("chooseVideo:fail", o)
                        })
                      }
                    })
                  }))
                }(t), t) : s(e, function(e) {
                  var t = e.count,
                    n = e.extension;
                  return new Promise((function(e, s) {
                    var l = a.chooseFile;
                    if (void 0 !== r && "function" == typeof r.chooseMessageFile && (l = r.chooseMessageFile), "function" != typeof l) return s({
                      errMsg: o + " 请指定 type 类型，该平台仅支持选择 image 或 video。"
                    });
                    l({
                      type: "all",
                      count: t,
                      extension: n,
                      success: function(t) {
                        e(i(t))
                      },
                      fail: function(e) {
                        s({
                          errMsg: e.errMsg.replace("chooseFile:fail", o)
                        })
                      }
                    })
                  }))
                }(t), t)
              }
            }
          }))),
          da = "manual";

        function ha(e) {
          return {
            props: {
              localdata: {
                type: Array,
                default: function() {
                  return []
                }
              },
              options: {
                type: [Object, Array],
                default: function() {
                  return {}
                }
              },
              spaceInfo: {
                type: Object,
                default: function() {
                  return {}
                }
              },
              collection: {
                type: [String, Array],
                default: ""
              },
              action: {
                type: String,
                default: ""
              },
              field: {
                type: String,
                default: ""
              },
              orderby: {
                type: String,
                default: ""
              },
              where: {
                type: [String, Object],
                default: ""
              },
              pageData: {
                type: String,
                default: "add"
              },
              pageCurrent: {
                type: Number,
                default: 1
              },
              pageSize: {
                type: Number,
                default: 20
              },
              getcount: {
                type: [Boolean, String],
                default: !1
              },
              gettree: {
                type: [Boolean, String],
                default: !1
              },
              gettreepath: {
                type: [Boolean, String],
                default: !1
              },
              startwith: {
                type: String,
                default: ""
              },
              limitlevel: {
                type: Number,
                default: 10
              },
              groupby: {
                type: String,
                default: ""
              },
              groupField: {
                type: String,
                default: ""
              },
              distinct: {
                type: [Boolean, String],
                default: !1
              },
              foreignKey: {
                type: String,
                default: ""
              },
              loadtime: {
                type: String,
                default: "auto"
              },
              manual: {
                type: Boolean,
                default: !1
              }
            },
            data: function() {
              return {
                mixinDatacomLoading: !1,
                mixinDatacomHasMore: !1,
                mixinDatacomResData: [],
                mixinDatacomErrorMessage: "",
                mixinDatacomPage: {},
                mixinDatacomError: null
              }
            },
            created: function() {
              var e = this;
              this.mixinDatacomPage = {
                current: this.pageCurrent,
                size: this.pageSize,
                count: 0
              }, this.$watch((function() {
                var t = [];
                return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach((function(n) {
                  t.push(e[n])
                })), t
              }), (function(t, n) {
                if (e.loadtime !== da) {
                  for (var a = !1, r = [], o = 2; o < t.length; o++) t[o] !== n[o] && (r.push(t[o]), a = !0);
                  t[0] !== n[0] && (e.mixinDatacomPage.current = e.pageCurrent), e.mixinDatacomPage.size = e.pageSize, e.onMixinDatacomPropsChange(a, r)
                }
              }))
            },
            methods: {
              onMixinDatacomPropsChange: function(e, t) {},
              mixinDatacomEasyGet: function() {
                var e = this,
                  t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  n = t.getone,
                  a = void 0 !== n && n,
                  r = t.success,
                  o = t.fail;
                this.mixinDatacomLoading || (this.mixinDatacomLoading = !0, this.mixinDatacomErrorMessage = "", this.mixinDatacomError = null, this.mixinDatacomGet().then((function(t) {
                  e.mixinDatacomLoading = !1;
                  var n = t.result,
                    o = n.data,
                    i = n.count;
                  e.getcount && (e.mixinDatacomPage.count = i), e.mixinDatacomHasMore = o.length < e.pageSize;
                  var s = a ? o.length ? o[0] : void 0 : o;
                  e.mixinDatacomResData = s, r && r(s)
                })).catch((function(t) {
                  e.mixinDatacomLoading = !1, e.mixinDatacomErrorMessage = t, e.mixinDatacomError = t, o && o(t)
                })))
              },
              mixinDatacomGet: function() {
                var t, n, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                a = a || {}, n = "undefined" != typeof __uniX && __uniX ? e.databaseForJQL(this.spaceInfo) : e.database(this.spaceInfo);
                var r = a.action || this.action;
                r && (n = n.action(r));
                var o = a.collection || this.collection;
                n = Array.isArray(o) ? (t = n).collection.apply(t, (0, c.default)(o)) : n.collection(o);
                var i = a.where || this.where;
                i && Object.keys(i).length && (n = n.where(i));
                var s = a.field || this.field;
                s && (n = n.field(s));
                var l = a.foreignKey || this.foreignKey;
                l && (n = n.foreignKey(l));
                var u = a.groupby || this.groupby;
                u && (n = n.groupBy(u));
                var f = a.groupField || this.groupField;
                f && (n = n.groupField(f)), !0 === (void 0 !== a.distinct ? a.distinct : this.distinct) && (n = n.distinct());
                var d = a.orderby || this.orderby;
                d && (n = n.orderBy(d));
                var h = void 0 !== a.pageCurrent ? a.pageCurrent : this.mixinDatacomPage.current,
                  p = void 0 !== a.pageSize ? a.pageSize : this.mixinDatacomPage.size,
                  g = void 0 !== a.getcount ? a.getcount : this.getcount,
                  v = void 0 !== a.gettree ? a.gettree : this.gettree,
                  y = void 0 !== a.gettreepath ? a.gettreepath : this.gettreepath,
                  m = {
                    getCount: g
                  },
                  F = {
                    limitLevel: void 0 !== a.limitlevel ? a.limitlevel : this.limitlevel,
                    startWith: void 0 !== a.startwith ? a.startwith : this.startwith
                  };
                return v && (m.getTree = F), y && (m.getTreePath = F), n = n.skip(p * (h - 1)).limit(p).get(m)
              }
            }
          }
        }

        function pa(e) {
          return G("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", e.config.spaceId))
        }

        function ga() {
          return va.apply(this, arguments)
        }

        function va() {
          return (va = (0, f.default)(i.default.mark((function e() {
            var t, n, r, o, s, l, u, c = arguments;
            return i.default.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  t = c.length > 0 && void 0 !== c[0] ? c[0] : {}, n = t.openid, r = t.callLoginByWeixin, o = void 0 !== r && r, s = pa(this), e.next = 4;
                  break;
                case 4:
                  if (!n || !o) {
                    e.next = 6;
                    break
                  }
                  throw new Error("[SecureNetwork] openid and callLoginByWeixin cannot be passed at the same time");
                case 6:
                  if (!n) {
                    e.next = 8;
                    break
                  }
                  return e.abrupt("return", (s.mpWeixinOpenid = n, {}));
                case 8:
                  return e.next = 10, new Promise((function(e, t) {
                    a.login({
                      success: function(t) {
                        e(t.code)
                      },
                      fail: function(e) {
                        t(new Error(e.errMsg))
                      }
                    })
                  }));
                case 10:
                  return l = e.sent, u = this.importObject("uni-id-co", {
                    customUI: !0
                  }), e.next = 14, u.secureNetworkHandshakeByWeixin({
                    code: l,
                    callLoginByWeixin: o
                  });
                case 14:
                  return s.mpWeixinCode = l, e.abrupt("return", {
                    code: l
                  });
                case 16:
                case "end":
                  return e.stop()
              }
            }), e, this)
          })))).apply(this, arguments)
        }

        function ya(e) {
          return ma.apply(this, arguments)
        }

        function ma() {
          return (ma = (0, f.default)(i.default.mark((function e(t) {
            var n;
            return i.default.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  return n = pa(this), e.abrupt("return", (n.initPromise || (n.initPromise = ga.call(this, t).then((function(e) {
                    return e
                  })).catch((function(e) {
                    throw delete n.initPromise, e
                  }))), n.initPromise));
                case 2:
                case "end":
                  return e.stop()
              }
            }), e, this)
          })))).apply(this, arguments)
        }

        function Fa(e) {
          ! function(e) {
            Se = e
          }(e)
        }

        function ka(e) {
          var t = {
            getSystemInfo: a.getSystemInfo,
            getPushClientId: a.getPushClientId
          };
          return function(n) {
            return new Promise((function(a, r) {
              t[e](T(T({}, n), {}, {
                success: function(e) {
                  a(e)
                },
                fail: function(e) {
                  r(e)
                }
              }))
            }))
          }
        }
        var wa = function(e) {
            (0, h.default)(n, e);
            var t = x(n);

            function n() {
              var e;
              return (0, y.default)(this, n), (e = t.call(this))._uniPushMessageCallback = e._receivePushMessage.bind((0, s.default)(e)), e._currentMessageId = -1, e._payloadQueue = [], e
            }
            return (0, m.default)(n, [{
              key: "init",
              value: function() {
                var e = this;
                return Promise.all([ka("getSystemInfo")(), ka("getPushClientId")()]).then((function() {
                  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    n = (0, l.default)(t, 2),
                    a = n[0],
                    r = (a = void 0 === a ? {} : a).appId,
                    o = n[1],
                    i = (o = void 0 === o ? {} : o).cid;
                  if (!r) throw new Error("Invalid appId, please check the manifest.json file");
                  if (!i) throw new Error("Invalid push client id");
                  e._appId = r, e._pushClientId = i, e._seqId = Date.now() + "-" + Math.floor(9e5 * Math.random() + 1e5), e.emit("open"), e._initMessageListener()
                }), (function(t) {
                  throw e.emit("error", t), e.close(), t
                }))
              }
            }, {
              key: "open",
              value: function() {
                var e = (0, f.default)(i.default.mark((function e() {
                  return i.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.abrupt("return", this.init());
                      case 1:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                })));
                return function() {
                  return e.apply(this, arguments)
                }
              }()
            }, {
              key: "_isUniCloudSSE",
              value: function(e) {
                if ("receive" !== e.type) return !1;
                var t = e && e.data && e.data.payload;
                return !(!t || "UNI_CLOUD_SSE" !== t.channel || t.seqId !== this._seqId)
              }
            }, {
              key: "_receivePushMessage",
              value: function(e) {
                if (this._isUniCloudSSE(e)) {
                  var t = e && e.data && e.data.payload,
                    n = t.action,
                    a = t.messageId,
                    r = t.message;
                  this._payloadQueue.push({
                    action: n,
                    messageId: a,
                    message: r
                  }), this._consumMessage()
                }
              }
            }, {
              key: "_consumMessage",
              value: function() {
                for (var e = this;;) {
                  var t = this._payloadQueue.find((function(t) {
                    return t.messageId === e._currentMessageId + 1
                  }));
                  if (!t) break;
                  this._currentMessageId++, this._parseMessagePayload(t)
                }
              }
            }, {
              key: "_parseMessagePayload",
              value: function(e) {
                var t = e.action,
                  n = e.messageId,
                  a = e.message;
                "end" === t ? this._end({
                  messageId: n,
                  message: a
                }) : "message" === t && this._appendMessage({
                  messageId: n,
                  message: a
                })
              }
            }, {
              key: "_appendMessage",
              value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  t = (e.messageId, e.message);
                this.emit("message", t)
              }
            }, {
              key: "_end",
              value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  t = (e.messageId, e.message);
                this.emit("end", t), this.close()
              }
            }, {
              key: "_initMessageListener",
              value: function() {
                a.onPushMessage(this._uniPushMessageCallback)
              }
            }, {
              key: "_destroy",
              value: function() {
                a.offPushMessage(this._uniPushMessageCallback)
              }
            }, {
              key: "toJSON",
              value: function() {
                return {
                  appId: this._appId,
                  pushClientId: this._pushClientId,
                  seqId: this._seqId
                }
              }
            }, {
              key: "close",
              value: function() {
                this._destroy(), this.emit("close")
              }
            }]), n
          }(W),
          ba = {
            tcb: jt,
            tencent: jt,
            aliyun: Oe,
            private: Yt,
            dcloud: Yt,
            alipay: rn
          },
          Ta = new(function() {
            function e() {
              (0, y.default)(this, e)
            }
            return (0, m.default)(e, [{
              key: "init",
              value: function(e) {
                var t = {},
                  n = ba[e.provider];
                if (!n) throw new Error("未提供正确的provider参数");
                return function(e) {
                    e._initPromiseHub || (e._initPromiseHub = new K({
                      createPromise: function() {
                        var t = Promise.resolve();
                        t = new Promise((function(e) {
                          setTimeout((function() {
                            e()
                          }), 1)
                        }));
                        var n = e.auth();
                        return t.then((function() {
                          return n.getLoginState()
                        })).then((function(e) {
                          return e ? Promise.resolve() : n.signInAnonymously()
                        }))
                      }
                    }))
                  }(t = n.init(e)), bn(t),
                  function(e) {
                    var t = e.uploadFile;
                    e.uploadFile = function(e) {
                      return t.call(this, e)
                    }
                  }(t),
                  function(e) {
                    e.database = function(t) {
                      if (t && Object.keys(t).length > 0) return e.init(t).database();
                      if (this._database) return this._database;
                      var n = On(An, {
                        uniClient: e
                      });
                      return this._database = n, n
                    }, e.databaseForJQL = function(t) {
                      if (t && Object.keys(t).length > 0) return e.init(t).databaseForJQL();
                      if (this._databaseForJQL) return this._databaseForJQL;
                      var n = On(An, {
                        uniClient: e,
                        isJQL: !0
                      });
                      return this._databaseForJQL = n, n
                    }
                  }(t),
                  function(e) {
                    e.getCurrentUserInfo = ca, e.chooseAndUploadFile = fa.initChooseAndUploadFile(e), Object.assign(e, {
                      get mixinDatacom() {
                        return ha(e)
                      }
                    }), e.SSEChannel = wa, e.initSecureNetworkByWeixin = function(e) {
                      return function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                          n = t.openid,
                          a = t.callLoginByWeixin,
                          r = void 0 !== a && a;
                        return ya.call(e, {
                          openid: n,
                          callLoginByWeixin: r
                        })
                      }
                    }(e), e.setCustomClientInfo = Fa, e.importObject = function(e) {
                      return function(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                          r = n = function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return e.customUI = t.customUI || e.customUI, e.parseSystemError = t.parseSystemError || e.parseSystemError, Object.assign(e.loadingOptions, t.loadingOptions), Object.assign(e.errorOptions, t.errorOptions), "object" == (0, u.default)(t.secretMethods) && (e.secretMethods = t.secretMethods), e
                          }({
                            customUI: !1,
                            loadingOptions: {
                              title: "加载中...",
                              mask: !0
                            },
                            errorOptions: {
                              type: "modal",
                              retry: !1
                            }
                          }, n),
                          o = r.customUI,
                          s = r.loadingOptions,
                          l = r.errorOptions,
                          c = r.parseSystemError,
                          d = !o;
                        return new Proxy({}, {
                          get: function(r, o) {
                            switch (o) {
                              case "toString":
                                return "[object UniCloudObject]";
                              case "toJSON":
                                return {}
                            }
                            return function() {
                              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = e.fn,
                                n = e.interceptorName,
                                a = e.getCallbackArgs;
                              return (0, f.default)(i.default.mark((function e() {
                                var r, o, s, l, u, c, f = arguments;
                                return i.default.wrap((function(e) {
                                  for (;;) switch (e.prev = e.next) {
                                    case 0:
                                      for (r = f.length, o = new Array(r), s = 0; s < r; s++) o[s] = f[s];
                                      return l = a ? a({
                                        params: o
                                      }) : {}, e.prev = 2, e.next = 5, te(ne(n, "invoke"), T({}, l));
                                    case 5:
                                      return e.next = 7, t.apply(void 0, o);
                                    case 7:
                                      return u = e.sent, e.next = 10, te(ne(n, "success"), T(T({}, l), {}, {
                                        result: u
                                      }));
                                    case 10:
                                      return e.abrupt("return", u);
                                    case 13:
                                      return e.prev = 13, e.t0 = e.catch(2), c = e.t0, e.next = 18, te(ne(n, "fail"), T(T({}, l), {}, {
                                        error: c
                                      }));
                                    case 18:
                                      throw c;
                                    case 19:
                                      return e.prev = 19, e.next = 22, te(ne(n, "complete"), T(T({}, l), {}, c ? {
                                        error: c
                                      } : {
                                        result: u
                                      }));
                                    case 22:
                                      return e.finish(19);
                                    case 23:
                                    case "end":
                                      return e.stop()
                                  }
                                }), e, null, [
                                  [2, 13, 19, 23]
                                ])
                              })))
                            }({
                              fn: function() {
                                var r = (0, f.default)(i.default.mark((function r() {
                                  var p, g, v, y, m, F, k, w, b, x, B, S, P, _, C, D = arguments;
                                  return i.default.wrap((function(r) {
                                    for (;;) switch (r.prev = r.next) {
                                      case 0:
                                        for (d && a.showLoading({
                                            title: s.title,
                                            mask: s.mask
                                          }), g = D.length, v = new Array(g), y = 0; y < g; y++) v[y] = D[y];
                                        return m = {
                                          name: t,
                                          type: O,
                                          data: {
                                            method: o,
                                            params: v
                                          }
                                        }, "object" == (0, u.default)(n.secretMethods) && function(e, t) {
                                          var n = t.data.method,
                                            a = e.secretMethods || {},
                                            r = a[n] || a["*"];
                                          r && (t.secretType = r)
                                        }(n, m), F = !1, r.prev = 5, r.next = 8, e.callFunction(m);
                                      case 8:
                                        p = r.sent, r.next = 14;
                                        break;
                                      case 11:
                                        r.prev = 11, r.t0 = r.catch(5), F = !0, p = {
                                          result: new Fe(r.t0)
                                        };
                                      case 14:
                                        if (k = p.result || {}, w = k.errSubject, b = k.errCode, x = k.errMsg, B = k.newToken, d && a.hideLoading(), B && B.token && B.tokenExpired && (xe(B), pe(se, T({}, B))), !b) {
                                          r.next = 39;
                                          break
                                        }
                                        if (S = x, !F || !c) {
                                          r.next = 24;
                                          break
                                        }
                                        return r.next = 20, c({
                                          objectName: t,
                                          methodName: o,
                                          params: v,
                                          errSubject: w,
                                          errCode: b,
                                          errMsg: x
                                        });
                                      case 20:
                                        if (r.t1 = r.sent.errMsg, r.t1) {
                                          r.next = 23;
                                          break
                                        }
                                        r.t1 = x;
                                      case 23:
                                        S = r.t1;
                                      case 24:
                                        if (!d) {
                                          r.next = 37;
                                          break
                                        }
                                        if ("toast" !== l.type) {
                                          r.next = 29;
                                          break
                                        }
                                        a.showToast({
                                          title: S,
                                          icon: "none"
                                        }), r.next = 37;
                                        break;
                                      case 29:
                                        if ("modal" === l.type) {
                                          r.next = 31;
                                          break
                                        }
                                        throw new Error("Invalid errorOptions.type: ".concat(l.type));
                                      case 31:
                                        return r.next = 33, (0, f.default)(i.default.mark((function e() {
                                          var t, n, r, o, s, l, u = arguments;
                                          return i.default.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                              case 0:
                                                return t = u.length > 0 && void 0 !== u[0] ? u[0] : {}, n = t.title, r = t.content, o = t.showCancel, s = t.cancelText, l = t.confirmText, e.abrupt("return", new Promise((function(e, t) {
                                                  a.showModal({
                                                    title: n,
                                                    content: r,
                                                    showCancel: o,
                                                    cancelText: s,
                                                    confirmText: l,
                                                    success: function(t) {
                                                      e(t)
                                                    },
                                                    fail: function() {
                                                      e({
                                                        confirm: !1,
                                                        cancel: !0
                                                      })
                                                    }
                                                  })
                                                })));
                                              case 2:
                                              case "end":
                                                return e.stop()
                                            }
                                          }), e)
                                        })))({
                                          title: "提示",
                                          content: S,
                                          showCancel: l.retry,
                                          cancelText: "取消",
                                          confirmText: l.retry ? "重试" : "确定"
                                        });
                                      case 33:
                                        if (P = r.sent, _ = P.confirm, !l.retry || !_) {
                                          r.next = 37;
                                          break
                                        }
                                        return r.abrupt("return", h.apply(void 0, v));
                                      case 37:
                                        throw (C = new Fe({
                                          subject: w,
                                          code: b,
                                          message: x,
                                          requestId: p.requestId
                                        })).detail = p.result, pe(oe, {
                                          type: ce,
                                          content: C
                                        }), C;
                                      case 39:
                                        return r.abrupt("return", (pe(oe, {
                                          type: ce,
                                          content: p.result
                                        }), p.result));
                                      case 40:
                                      case "end":
                                        return r.stop()
                                    }
                                  }), r, null, [
                                    [5, 11]
                                  ])
                                })));

                                function h() {
                                  return r.apply(this, arguments)
                                }
                                return h
                              }(),
                              interceptorName: "callObject",
                              getCallbackArgs: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                  n = e.params;
                                return {
                                  objectName: t,
                                  methodName: o,
                                  params: n
                                }
                              }
                            })
                          }
                        })
                      }
                    }(e)
                  }(t), ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach((function(e) {
                    if (t[e]) {
                      var n = t[e];
                      t[e] = function() {
                        return n.apply(t, Array.from(arguments))
                      }, t[e] = function(e, t) {
                        return function(n) {
                          var a = this,
                            r = !1;
                          if ("callFunction" === t) {
                            var o = n && n.type || I;
                            r = o !== I
                          }
                          var i = "callFunction" === t && !r,
                            s = this._initPromiseHub.exec(),
                            l = me(n = n || {}),
                            u = l.success,
                            c = l.fail,
                            f = l.complete,
                            d = s.then((function() {
                              return r ? Promise.resolve() : te(ne(t, "invoke"), n)
                            })).then((function() {
                              return e.call(a, n)
                            })).then((function(e) {
                              return r ? Promise.resolve(e) : te(ne(t, "success"), e).then((function() {
                                return te(ne(t, "complete"), e)
                              })).then((function() {
                                return i && pe(oe, {
                                  type: ue,
                                  content: e
                                }), Promise.resolve(e)
                              }))
                            }), (function(e) {
                              return r ? Promise.reject(e) : te(ne(t, "fail"), e).then((function() {
                                return te(ne(t, "complete"), e)
                              })).then((function() {
                                return pe(oe, {
                                  type: ue,
                                  content: e
                                }), Promise.reject(e)
                              }))
                            }));
                          if (!(u || c || f)) return d;
                          d.then((function(e) {
                            u && u(e), f && f(e), i && pe(oe, {
                              type: ue,
                              content: e
                            })
                          }), (function(e) {
                            c && c(e), f && f(e), i && pe(oe, {
                              type: ue,
                              content: e
                            })
                          }))
                        }
                      }(t[e], e).bind(t)
                    }
                  })), t.init = this.init, t
              }
            }]), e
          }());
        t.uniCloud = Ta,
          function() {
            var e, n = Y,
              a = {};
            n && 1 === n.length ? (a = n[0], t.uniCloud = Ta = Ta.init(a), Ta._isDefault = !0) : (e = n && n.length > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : "应用未关联服务空间，请在uniCloud目录右键关联服务空间", ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo", "importObject"].forEach((function(t) {
              Ta[t] = function() {
                return console.error(e), Promise.reject(new Fe({
                  code: "SYS_ERR",
                  message: e
                }))
              }
            })));
            Object.assign(Ta, {
              get mixinDatacom() {
                return ha(Ta)
              }
            }), sa(Ta), Ta.addInterceptor = Z, Ta.removeInterceptor = ee, Ta.interceptObject = ae
          }();
        var xa = Ta;
        t.default = xa
      }).call(this, n("0ee4"), n("df3c").default, n("3223").default)
    },
    "8ffa": function(e, t, n) {
      var a = n("7647");
      e.exports = function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(e, "prototype", {
          writable: !1
        }), t && a(e, t)
      }, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    adb2: function(e, t, n) {
      var a, r = n("3b2d");
      ! function(o) {
        var i, s = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
          l = Math.ceil,
          u = Math.floor,
          c = "[BigNumber Error] ",
          f = c + "Number primitive has more than 15 significant digits: ",
          d = 1e14,
          h = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
          p = 1e9;

        function g(e) {
          var t = 0 | e;
          return e > 0 || e === t ? t : t - 1
        }

        function v(e) {
          for (var t, n, a = 1, r = e.length, o = e[0] + ""; a < r;) {
            for (n = 14 - (t = e[a++] + "").length; n--; t = "0" + t);
            o += t
          }
          for (r = o.length; 48 === o.charCodeAt(--r););
          return o.slice(0, r + 1 || 1)
        }

        function y(e, t) {
          var n, a, r = e.c,
            o = t.c,
            i = e.s,
            s = t.s,
            l = e.e,
            u = t.e;
          if (!i || !s) return null;
          if (n = r && !r[0], a = o && !o[0], n || a) return n ? a ? 0 : -s : i;
          if (i != s) return i;
          if (n = i < 0, a = l == u, !r || !o) return a ? 0 : !r ^ n ? 1 : -1;
          if (!a) return l > u ^ n ? 1 : -1;
          for (s = (l = r.length) < (u = o.length) ? l : u, i = 0; i < s; i++)
            if (r[i] != o[i]) return r[i] > o[i] ^ n ? 1 : -1;
          return l == u ? 0 : l > u ^ n ? 1 : -1
        }

        function m(e, t, n, a) {
          if (e < t || e > n || e !== u(e)) throw Error(c + (a || "Argument") + ("number" == typeof e ? e < t || e > n ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(e))
        }

        function F(e) {
          var t = e.c.length - 1;
          return g(e.e / 14) == t && e.c[t] % 2 != 0
        }

        function k(e, t) {
          return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (t < 0 ? "e" : "e+") + t
        }

        function w(e, t, n) {
          var a, r;
          if (t < 0) {
            for (r = n + "."; ++t; r += n);
            e = r + e
          } else if (++t > (a = e.length)) {
            for (r = n, t -= a; --t; r += n);
            e += r
          } else t < a && (e = e.slice(0, t) + "." + e.slice(t));
          return e
        }(i = function e(t) {
          var n, a, o, i = E.prototype = {
              constructor: E,
              toString: null,
              valueOf: null
            },
            b = new E(1),
            T = 20,
            x = 4,
            B = -7,
            S = 21,
            P = -1e7,
            _ = 1e7,
            C = !1,
            D = 1,
            R = 0,
            I = {
              prefix: "",
              groupSize: 3,
              secondaryGroupSize: 0,
              groupSeparator: ",",
              decimalSeparator: ".",
              fractionGroupSize: 0,
              fractionGroupSeparator: " ",
              suffix: ""
            },
            O = "0123456789abcdefghijklmnopqrstuvwxyz",
            A = !0;

          function E(e, t) {
            var n, r, i, l, c, d, h, p, g = this;
            if (!(g instanceof E)) return new E(e, t);
            if (null == t) {
              if (e && !0 === e._isBigNumber) return g.s = e.s, void(!e.c || e.e > _ ? g.c = g.e = null : e.e < P ? g.c = [g.e = 0] : (g.e = e.e, g.c = e.c.slice()));
              if ((d = "number" == typeof e) && 0 * e == 0) {
                if (g.s = 1 / e < 0 ? (e = -e, -1) : 1, e === ~~e) {
                  for (l = 0, c = e; c >= 10; c /= 10, l++);
                  return void(l > _ ? g.c = g.e = null : (g.e = l, g.c = [e]))
                }
                p = String(e)
              } else {
                if (!s.test(p = String(e))) return o(g, p, d);
                g.s = 45 == p.charCodeAt(0) ? (p = p.slice(1), -1) : 1
              }(l = p.indexOf(".")) > -1 && (p = p.replace(".", "")), (c = p.search(/e/i)) > 0 ? (l < 0 && (l = c), l += +p.slice(c + 1), p = p.substring(0, c)) : l < 0 && (l = p.length)
            } else {
              if (m(t, 2, O.length, "Base"), 10 == t && A) return q(g = new E(e), T + g.e + 1, x);
              if (p = String(e), d = "number" == typeof e) {
                if (0 * e != 0) return o(g, p, d, t);
                if (g.s = 1 / e < 0 ? (p = p.slice(1), -1) : 1, E.DEBUG && p.replace(/^0\.0*|\./, "").length > 15) throw Error(f + e)
              } else g.s = 45 === p.charCodeAt(0) ? (p = p.slice(1), -1) : 1;
              for (n = O.slice(0, t), l = c = 0, h = p.length; c < h; c++)
                if (n.indexOf(r = p.charAt(c)) < 0) {
                  if ("." == r) {
                    if (c > l) {
                      l = h;
                      continue
                    }
                  } else if (!i && (p == p.toUpperCase() && (p = p.toLowerCase()) || p == p.toLowerCase() && (p = p.toUpperCase()))) {
                    i = !0, c = -1, l = 0;
                    continue
                  }
                  return o(g, String(e), d, t)
                } d = !1, (l = (p = a(p, t, 10, g.s)).indexOf(".")) > -1 ? p = p.replace(".", "") : l = p.length
            }
            for (c = 0; 48 === p.charCodeAt(c); c++);
            for (h = p.length; 48 === p.charCodeAt(--h););
            if (p = p.slice(c, ++h)) {
              if (h -= c, d && E.DEBUG && h > 15 && (e > 9007199254740991 || e !== u(e))) throw Error(f + g.s * e);
              if ((l = l - c - 1) > _) g.c = g.e = null;
              else if (l < P) g.c = [g.e = 0];
              else {
                if (g.e = l, g.c = [], c = (l + 1) % 14, l < 0 && (c += 14), c < h) {
                  for (c && g.c.push(+p.slice(0, c)), h -= 14; c < h;) g.c.push(+p.slice(c, c += 14));
                  c = 14 - (p = p.slice(c)).length
                } else c -= h;
                for (; c--; p += "0");
                g.c.push(+p)
              }
            } else g.c = [g.e = 0]
          }

          function L(e, t, n, a) {
            var r, o, i, s, l;
            if (null == n ? n = x : m(n, 0, 8), !e.c) return e.toString();
            if (r = e.c[0], i = e.e, null == t) l = v(e.c), l = 1 == a || 2 == a && (i <= B || i >= S) ? k(l, i) : w(l, i, "0");
            else if (o = (e = q(new E(e), t, n)).e, s = (l = v(e.c)).length, 1 == a || 2 == a && (t <= o || o <= B)) {
              for (; s < t; l += "0", s++);
              l = k(l, o)
            } else if (t -= i, l = w(l, o, "0"), o + 1 > s) {
              if (--t > 0)
                for (l += "."; t--; l += "0");
            } else if ((t += o - s) > 0)
              for (o + 1 == s && (l += "."); t--; l += "0");
            return e.s < 0 && r ? "-" + l : l
          }

          function N(e, t) {
            for (var n, a = 1, r = new E(e[0]); a < e.length; a++) {
              if (!(n = new E(e[a])).s) {
                r = n;
                break
              }
              t.call(r, n) && (r = n)
            }
            return r
          }

          function U(e, t, n) {
            for (var a = 1, r = t.length; !t[--r]; t.pop());
            for (r = t[0]; r >= 10; r /= 10, a++);
            return (n = a + 14 * n - 1) > _ ? e.c = e.e = null : n < P ? e.c = [e.e = 0] : (e.e = n, e.c = t), e
          }

          function q(e, t, n, a) {
            var r, o, i, s, c, f, p, g = e.c,
              v = h;
            if (g) {
              e: {
                for (r = 1, s = g[0]; s >= 10; s /= 10, r++);
                if ((o = t - r) < 0) o += 14,
                i = t,
                p = (c = g[f = 0]) / v[r - i - 1] % 10 | 0;
                else if ((f = l((o + 1) / 14)) >= g.length) {
                  if (!a) break e;
                  for (; g.length <= f; g.push(0));
                  c = p = 0, r = 1, i = (o %= 14) - 14 + 1
                } else {
                  for (c = s = g[f], r = 1; s >= 10; s /= 10, r++);
                  p = (i = (o %= 14) - 14 + r) < 0 ? 0 : c / v[r - i - 1] % 10 | 0
                }
                if (a = a || t < 0 || null != g[f + 1] || (i < 0 ? c : c % v[r - i - 1]), a = n < 4 ? (p || a) && (0 == n || n == (e.s < 0 ? 3 : 2)) : p > 5 || 5 == p && (4 == n || a || 6 == n && (o > 0 ? i > 0 ? c / v[r - i] : 0 : g[f - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), t < 1 || !g[0]) return g.length = 0,
                a ? (t -= e.e + 1, g[0] = v[(14 - t % 14) % 14], e.e = -t || 0) : g[0] = e.e = 0,
                e;
                if (0 == o ? (g.length = f, s = 1, f--) : (g.length = f + 1, s = v[14 - o], g[f] = i > 0 ? u(c / v[r - i] % v[i]) * s : 0), a)
                  for (;;) {
                    if (0 == f) {
                      for (o = 1, i = g[0]; i >= 10; i /= 10, o++);
                      for (i = g[0] += s, s = 1; i >= 10; i /= 10, s++);
                      o != s && (e.e++, g[0] == d && (g[0] = 1));
                      break
                    }
                    if (g[f] += s, g[f] != d) break;
                    g[f--] = 0, s = 1
                  }
                for (o = g.length; 0 === g[--o]; g.pop());
              }
              e.e > _ ? e.c = e.e = null : e.e < P && (e.c = [e.e = 0])
            }
            return e
          }

          function M(e) {
            var t, n = e.e;
            return null === n ? e.toString() : (t = v(e.c), t = n <= B || n >= S ? k(t, n) : w(t, n, "0"), e.s < 0 ? "-" + t : t)
          }
          return E.clone = e, E.ROUND_UP = 0, E.ROUND_DOWN = 1, E.ROUND_CEIL = 2, E.ROUND_FLOOR = 3, E.ROUND_HALF_UP = 4, E.ROUND_HALF_DOWN = 5, E.ROUND_HALF_EVEN = 6, E.ROUND_HALF_CEIL = 7, E.ROUND_HALF_FLOOR = 8, E.EUCLID = 9, E.config = E.set = function(e) {
            var t, n;
            if (null != e) {
              if ("object" != r(e)) throw Error(c + "Object expected: " + e);
              if (e.hasOwnProperty(t = "DECIMAL_PLACES") && (m(n = e[t], 0, p, t), T = n), e.hasOwnProperty(t = "ROUNDING_MODE") && (m(n = e[t], 0, 8, t), x = n), e.hasOwnProperty(t = "EXPONENTIAL_AT") && ((n = e[t]) && n.pop ? (m(n[0], -p, 0, t), m(n[1], 0, p, t), B = n[0], S = n[1]) : (m(n, -p, p, t), B = -(S = n < 0 ? -n : n))), e.hasOwnProperty(t = "RANGE"))
                if ((n = e[t]) && n.pop) m(n[0], -p, -1, t), m(n[1], 1, p, t), P = n[0], _ = n[1];
                else {
                  if (m(n, -p, p, t), !n) throw Error(c + t + " cannot be zero: " + n);
                  P = -(_ = n < 0 ? -n : n)
                } if (e.hasOwnProperty(t = "CRYPTO")) {
                if ((n = e[t]) !== !!n) throw Error(c + t + " not true or false: " + n);
                if (n) {
                  if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw C = !n, Error(c + "crypto unavailable");
                  C = n
                } else C = n
              }
              if (e.hasOwnProperty(t = "MODULO_MODE") && (m(n = e[t], 0, 9, t), D = n), e.hasOwnProperty(t = "POW_PRECISION") && (m(n = e[t], 0, p, t), R = n), e.hasOwnProperty(t = "FORMAT")) {
                if (n = e[t], "object" != r(n)) throw Error(c + t + " not an object: " + n);
                I = n
              }
              if (e.hasOwnProperty(t = "ALPHABET")) {
                if ("string" != typeof(n = e[t]) || /^.?$|[+\-.\s]|(.).*\1/.test(n)) throw Error(c + t + " invalid: " + n);
                A = "0123456789" == n.slice(0, 10), O = n
              }
            }
            return {
              DECIMAL_PLACES: T,
              ROUNDING_MODE: x,
              EXPONENTIAL_AT: [B, S],
              RANGE: [P, _],
              CRYPTO: C,
              MODULO_MODE: D,
              POW_PRECISION: R,
              FORMAT: I,
              ALPHABET: O
            }
          }, E.isBigNumber = function(e) {
            if (!e || !0 !== e._isBigNumber) return !1;
            if (!E.DEBUG) return !0;
            var t, n, a = e.c,
              r = e.e,
              o = e.s;
            e: if ("[object Array]" == {}.toString.call(a)) {
              if ((1 === o || -1 === o) && r >= -p && r <= p && r === u(r)) {
                if (0 === a[0]) {
                  if (0 === r && 1 === a.length) return !0;
                  break e
                }
                if ((t = (r + 1) % 14) < 1 && (t += 14), String(a[0]).length == t) {
                  for (t = 0; t < a.length; t++)
                    if ((n = a[t]) < 0 || n >= d || n !== u(n)) break e;
                  if (0 !== n) return !0
                }
              }
            } else if (null === a && null === r && (null === o || 1 === o || -1 === o)) return !0;
            throw Error(c + "Invalid BigNumber: " + e)
          }, E.maximum = E.max = function() {
            return N(arguments, i.lt)
          }, E.minimum = E.min = function() {
            return N(arguments, i.gt)
          }, E.random = function() {
            var e = 9007199254740992 * Math.random() & 2097151 ? function() {
              return u(9007199254740992 * Math.random())
            } : function() {
              return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0)
            };
            return function(t) {
              var n, a, r, o, i, s = 0,
                f = [],
                d = new E(b);
              if (null == t ? t = T : m(t, 0, p), o = l(t / 14), C)
                if (crypto.getRandomValues) {
                  for (n = crypto.getRandomValues(new Uint32Array(o *= 2)); s < o;)(i = 131072 * n[s] + (n[s + 1] >>> 11)) >= 9e15 ? (a = crypto.getRandomValues(new Uint32Array(2)), n[s] = a[0], n[s + 1] = a[1]) : (f.push(i % 1e14), s += 2);
                  s = o / 2
                } else {
                  if (!crypto.randomBytes) throw C = !1, Error(c + "crypto unavailable");
                  for (n = crypto.randomBytes(o *= 7); s < o;)(i = 281474976710656 * (31 & n[s]) + 1099511627776 * n[s + 1] + 4294967296 * n[s + 2] + 16777216 * n[s + 3] + (n[s + 4] << 16) + (n[s + 5] << 8) + n[s + 6]) >= 9e15 ? crypto.randomBytes(7).copy(n, s) : (f.push(i % 1e14), s += 7);
                  s = o / 7
                } if (!C)
                for (; s < o;)(i = e()) < 9e15 && (f[s++] = i % 1e14);
              for (t %= 14, (o = f[--s]) && t && (i = h[14 - t], f[s] = u(o / i) * i); 0 === f[s]; f.pop(), s--);
              if (s < 0) f = [r = 0];
              else {
                for (r = -1; 0 === f[0]; f.splice(0, 1), r -= 14);
                for (s = 1, i = f[0]; i >= 10; i /= 10, s++);
                s < 14 && (r -= 14 - s)
              }
              return d.e = r, d.c = f, d
            }
          }(), E.sum = function() {
            for (var e = 1, t = arguments, n = new E(t[0]); e < t.length;) n = n.plus(t[e++]);
            return n
          }, a = function() {
            function e(e, t, n, a) {
              for (var r, o, i = [0], s = 0, l = e.length; s < l;) {
                for (o = i.length; o--; i[o] *= t);
                for (i[0] += a.indexOf(e.charAt(s++)), r = 0; r < i.length; r++) i[r] > n - 1 && (null == i[r + 1] && (i[r + 1] = 0), i[r + 1] += i[r] / n | 0, i[r] %= n)
              }
              return i.reverse()
            }
            return function(t, a, r, o, i) {
              var s, l, u, c, f, d, h, p, g = t.indexOf("."),
                y = T,
                m = x;
              for (g >= 0 && (c = R, R = 0, t = t.replace(".", ""), d = (p = new E(a)).pow(t.length - g), R = c, p.c = e(w(v(d.c), d.e, "0"), 10, r, "0123456789"), p.e = p.c.length), u = c = (h = e(t, a, r, i ? (s = O, "0123456789") : (s = "0123456789", O))).length; 0 == h[--c]; h.pop());
              if (!h[0]) return s.charAt(0);
              if (g < 0 ? --u : (d.c = h, d.e = u, d.s = o, h = (d = n(d, p, y, m, r)).c, f = d.r, u = d.e), g = h[l = u + y + 1], c = r / 2, f = f || l < 0 || null != h[l + 1], f = m < 4 ? (null != g || f) && (0 == m || m == (d.s < 0 ? 3 : 2)) : g > c || g == c && (4 == m || f || 6 == m && 1 & h[l - 1] || m == (d.s < 0 ? 8 : 7)), l < 1 || !h[0]) t = f ? w(s.charAt(1), -y, s.charAt(0)) : s.charAt(0);
              else {
                if (h.length = l, f)
                  for (--r; ++h[--l] > r;) h[l] = 0, l || (++u, h = [1].concat(h));
                for (c = h.length; !h[--c];);
                for (g = 0, t = ""; g <= c; t += s.charAt(h[g++]));
                t = w(t, u, s.charAt(0))
              }
              return t
            }
          }(), n = function() {
            function e(e, t, n) {
              var a, r, o, i, s = 0,
                l = e.length,
                u = t % 1e7,
                c = t / 1e7 | 0;
              for (e = e.slice(); l--;) s = ((r = u * (o = e[l] % 1e7) + (a = c * o + (i = e[l] / 1e7 | 0) * u) % 1e7 * 1e7 + s) / n | 0) + (a / 1e7 | 0) + c * i, e[l] = r % n;
              return s && (e = [s].concat(e)), e
            }

            function t(e, t, n, a) {
              var r, o;
              if (n != a) o = n > a ? 1 : -1;
              else
                for (r = o = 0; r < n; r++)
                  if (e[r] != t[r]) {
                    o = e[r] > t[r] ? 1 : -1;
                    break
                  } return o
            }

            function n(e, t, n, a) {
              for (var r = 0; n--;) e[n] -= r, r = e[n] < t[n] ? 1 : 0, e[n] = r * a + e[n] - t[n];
              for (; !e[0] && e.length > 1; e.splice(0, 1));
            }
            return function(a, r, o, i, s) {
              var l, c, f, h, p, v, y, m, F, k, w, b, T, x, B, S, P, _ = a.s == r.s ? 1 : -1,
                C = a.c,
                D = r.c;
              if (!(C && C[0] && D && D[0])) return new E(a.s && r.s && (C ? !D || C[0] != D[0] : D) ? C && 0 == C[0] || !D ? 0 * _ : _ / 0 : NaN);
              for (F = (m = new E(_)).c = [], _ = o + (c = a.e - r.e) + 1, s || (s = d, c = g(a.e / 14) - g(r.e / 14), _ = _ / 14 | 0), f = 0; D[f] == (C[f] || 0); f++);
              if (D[f] > (C[f] || 0) && c--, _ < 0) F.push(1), h = !0;
              else {
                for (x = C.length, S = D.length, f = 0, _ += 2, (p = u(s / (D[0] + 1))) > 1 && (D = e(D, p, s), C = e(C, p, s), S = D.length, x = C.length), T = S, w = (k = C.slice(0, S)).length; w < S; k[w++] = 0);
                P = D.slice(), P = [0].concat(P), B = D[0], D[1] >= s / 2 && B++;
                do {
                  if (p = 0, (l = t(D, k, S, w)) < 0) {
                    if (b = k[0], S != w && (b = b * s + (k[1] || 0)), (p = u(b / B)) > 1)
                      for (p >= s && (p = s - 1), y = (v = e(D, p, s)).length, w = k.length; 1 == t(v, k, y, w);) p--, n(v, S < y ? P : D, y, s), y = v.length, l = 1;
                    else 0 == p && (l = p = 1), y = (v = D.slice()).length;
                    if (y < w && (v = [0].concat(v)), n(k, v, w, s), w = k.length, -1 == l)
                      for (; t(D, k, S, w) < 1;) p++, n(k, S < w ? P : D, w, s), w = k.length
                  } else 0 === l && (p++, k = [0]);
                  F[f++] = p, k[0] ? k[w++] = C[T] || 0 : (k = [C[T]], w = 1)
                } while ((T++ < x || null != k[0]) && _--);
                h = null != k[0], F[0] || F.splice(0, 1)
              }
              if (s == d) {
                for (f = 1, _ = F[0]; _ >= 10; _ /= 10, f++);
                q(m, o + (m.e = f + 14 * c - 1) + 1, i, h)
              } else m.e = c, m.r = +h;
              return m
            }
          }(), o = function() {
            var e = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
              t = /^([^.]+)\.$/,
              n = /^\.([^.]+)$/,
              a = /^-?(Infinity|NaN)$/,
              r = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
            return function(o, i, s, l) {
              var u, f = s ? i : i.replace(r, "");
              if (a.test(f)) o.s = isNaN(f) ? null : f < 0 ? -1 : 1;
              else {
                if (!s && (f = f.replace(e, (function(e, t, n) {
                    return u = "x" == (n = n.toLowerCase()) ? 16 : "b" == n ? 2 : 8, l && l != u ? e : t
                  })), l && (u = l, f = f.replace(t, "$1").replace(n, "0.$1")), i != f)) return new E(f, u);
                if (E.DEBUG) throw Error(c + "Not a" + (l ? " base " + l : "") + " number: " + i);
                o.s = null
              }
              o.c = o.e = null
            }
          }(), i.absoluteValue = i.abs = function() {
            var e = new E(this);
            return e.s < 0 && (e.s = 1), e
          }, i.comparedTo = function(e, t) {
            return y(this, new E(e, t))
          }, i.decimalPlaces = i.dp = function(e, t) {
            var n, a, r, o = this;
            if (null != e) return m(e, 0, p), null == t ? t = x : m(t, 0, 8), q(new E(o), e + o.e + 1, t);
            if (!(n = o.c)) return null;
            if (a = 14 * ((r = n.length - 1) - g(this.e / 14)), r = n[r])
              for (; r % 10 == 0; r /= 10, a--);
            return a < 0 && (a = 0), a
          }, i.dividedBy = i.div = function(e, t) {
            return n(this, new E(e, t), T, x)
          }, i.dividedToIntegerBy = i.idiv = function(e, t) {
            return n(this, new E(e, t), 0, 1)
          }, i.exponentiatedBy = i.pow = function(e, t) {
            var n, a, r, o, i, s, f, d, h = this;
            if ((e = new E(e)).c && !e.isInteger()) throw Error(c + "Exponent not an integer: " + M(e));
            if (null != t && (t = new E(t)), i = e.e > 14, !h.c || !h.c[0] || 1 == h.c[0] && !h.e && 1 == h.c.length || !e.c || !e.c[0]) return d = new E(Math.pow(+M(h), i ? 2 - F(e) : +M(e))), t ? d.mod(t) : d;
            if (s = e.s < 0, t) {
              if (t.c ? !t.c[0] : !t.s) return new E(NaN);
              (a = !s && h.isInteger() && t.isInteger()) && (h = h.mod(t))
            } else {
              if (e.e > 9 && (h.e > 0 || h.e < -1 || (0 == h.e ? h.c[0] > 1 || i && h.c[1] >= 24e7 : h.c[0] < 8e13 || i && h.c[0] <= 9999975e7))) return o = h.s < 0 && F(e) ? -0 : 0, h.e > -1 && (o = 1 / o), new E(s ? 1 / o : o);
              R && (o = l(R / 14 + 2))
            }
            for (i ? (n = new E(.5), s && (e.s = 1), f = F(e)) : f = (r = Math.abs(+M(e))) % 2, d = new E(b);;) {
              if (f) {
                if (!(d = d.times(h)).c) break;
                o ? d.c.length > o && (d.c.length = o) : a && (d = d.mod(t))
              }
              if (r) {
                if (0 === (r = u(r / 2))) break;
                f = r % 2
              } else if (q(e = e.times(n), e.e + 1, 1), e.e > 14) f = F(e);
              else {
                if (0 === (r = +M(e))) break;
                f = r % 2
              }
              h = h.times(h), o ? h.c && h.c.length > o && (h.c.length = o) : a && (h = h.mod(t))
            }
            return a ? d : (s && (d = b.div(d)), t ? d.mod(t) : o ? q(d, R, x, void 0) : d)
          }, i.integerValue = function(e) {
            var t = new E(this);
            return null == e ? e = x : m(e, 0, 8), q(t, t.e + 1, e)
          }, i.isEqualTo = i.eq = function(e, t) {
            return 0 === y(this, new E(e, t))
          }, i.isFinite = function() {
            return !!this.c
          }, i.isGreaterThan = i.gt = function(e, t) {
            return y(this, new E(e, t)) > 0
          }, i.isGreaterThanOrEqualTo = i.gte = function(e, t) {
            return 1 === (t = y(this, new E(e, t))) || 0 === t
          }, i.isInteger = function() {
            return !!this.c && g(this.e / 14) > this.c.length - 2
          }, i.isLessThan = i.lt = function(e, t) {
            return y(this, new E(e, t)) < 0
          }, i.isLessThanOrEqualTo = i.lte = function(e, t) {
            return -1 === (t = y(this, new E(e, t))) || 0 === t
          }, i.isNaN = function() {
            return !this.s
          }, i.isNegative = function() {
            return this.s < 0
          }, i.isPositive = function() {
            return this.s > 0
          }, i.isZero = function() {
            return !!this.c && 0 == this.c[0]
          }, i.minus = function(e, t) {
            var n, a, r, o, i = this,
              s = i.s;
            if (t = (e = new E(e, t)).s, !s || !t) return new E(NaN);
            if (s != t) return e.s = -t, i.plus(e);
            var l = i.e / 14,
              u = e.e / 14,
              c = i.c,
              f = e.c;
            if (!l || !u) {
              if (!c || !f) return c ? (e.s = -t, e) : new E(f ? i : NaN);
              if (!c[0] || !f[0]) return f[0] ? (e.s = -t, e) : new E(c[0] ? i : 3 == x ? -0 : 0)
            }
            if (l = g(l), u = g(u), c = c.slice(), s = l - u) {
              for ((o = s < 0) ? (s = -s, r = c) : (u = l, r = f), r.reverse(), t = s; t--; r.push(0));
              r.reverse()
            } else
              for (a = (o = (s = c.length) < (t = f.length)) ? s : t, s = t = 0; t < a; t++)
                if (c[t] != f[t]) {
                  o = c[t] < f[t];
                  break
                } if (o && (r = c, c = f, f = r, e.s = -e.s), (t = (a = f.length) - (n = c.length)) > 0)
              for (; t--; c[n++] = 0);
            for (t = d - 1; a > s;) {
              if (c[--a] < f[a]) {
                for (n = a; n && !c[--n]; c[n] = t);
                --c[n], c[a] += d
              }
              c[a] -= f[a]
            }
            for (; 0 == c[0]; c.splice(0, 1), --u);
            return c[0] ? U(e, c, u) : (e.s = 3 == x ? -1 : 1, e.c = [e.e = 0], e)
          }, i.modulo = i.mod = function(e, t) {
            var a, r, o = this;
            return e = new E(e, t), !o.c || !e.s || e.c && !e.c[0] ? new E(NaN) : !e.c || o.c && !o.c[0] ? new E(o) : (9 == D ? (r = e.s, e.s = 1, a = n(o, e, 0, 3), e.s = r, a.s *= r) : a = n(o, e, 0, D), (e = o.minus(a.times(e))).c[0] || 1 != D || (e.s = o.s), e)
          }, i.multipliedBy = i.times = function(e, t) {
            var n, a, r, o, i, s, l, u, c, f, h, p, v, y, m = this,
              F = m.c,
              k = (e = new E(e, t)).c;
            if (!(F && k && F[0] && k[0])) return !m.s || !e.s || F && !F[0] && !k || k && !k[0] && !F ? e.c = e.e = e.s = null : (e.s *= m.s, F && k ? (e.c = [0], e.e = 0) : e.c = e.e = null), e;
            for (a = g(m.e / 14) + g(e.e / 14), e.s *= m.s, (l = F.length) < (f = k.length) && (v = F, F = k, k = v, r = l, l = f, f = r), r = l + f, v = []; r--; v.push(0));
            for (y = d, r = f; --r >= 0;) {
              for (n = 0, h = k[r] % 1e7, p = k[r] / 1e7 | 0, o = r + (i = l); o > r;) n = ((u = h * (u = F[--i] % 1e7) + (s = p * u + (c = F[i] / 1e7 | 0) * h) % 1e7 * 1e7 + v[o] + n) / y | 0) + (s / 1e7 | 0) + p * c, v[o--] = u % y;
              v[o] = n
            }
            return n ? ++a : v.splice(0, 1), U(e, v, a)
          }, i.negated = function() {
            var e = new E(this);
            return e.s = -e.s || null, e
          }, i.plus = function(e, t) {
            var n, a = this,
              r = a.s;
            if (t = (e = new E(e, t)).s, !r || !t) return new E(NaN);
            if (r != t) return e.s = -t, a.minus(e);
            var o = a.e / 14,
              i = e.e / 14,
              s = a.c,
              l = e.c;
            if (!o || !i) {
              if (!s || !l) return new E(r / 0);
              if (!s[0] || !l[0]) return l[0] ? e : new E(s[0] ? a : 0 * r)
            }
            if (o = g(o), i = g(i), s = s.slice(), r = o - i) {
              for (r > 0 ? (i = o, n = l) : (r = -r, n = s), n.reverse(); r--; n.push(0));
              n.reverse()
            }
            for ((r = s.length) - (t = l.length) < 0 && (n = l, l = s, s = n, t = r), r = 0; t;) r = (s[--t] = s[t] + l[t] + r) / d | 0, s[t] = d === s[t] ? 0 : s[t] % d;
            return r && (s = [r].concat(s), ++i), U(e, s, i)
          }, i.precision = i.sd = function(e, t) {
            var n, a, r, o = this;
            if (null != e && e !== !!e) return m(e, 1, p), null == t ? t = x : m(t, 0, 8), q(new E(o), e, t);
            if (!(n = o.c)) return null;
            if (a = 14 * (r = n.length - 1) + 1, r = n[r]) {
              for (; r % 10 == 0; r /= 10, a--);
              for (r = n[0]; r >= 10; r /= 10, a++);
            }
            return e && o.e + 1 > a && (a = o.e + 1), a
          }, i.shiftedBy = function(e) {
            return m(e, -9007199254740991, 9007199254740991), this.times("1e" + e)
          }, i.squareRoot = i.sqrt = function() {
            var e, t, a, r, o, i = this,
              s = i.c,
              l = i.s,
              u = i.e,
              c = T + 4,
              f = new E("0.5");
            if (1 !== l || !s || !s[0]) return new E(!l || l < 0 && (!s || s[0]) ? NaN : s ? i : 1 / 0);
            if (0 == (l = Math.sqrt(+M(i))) || l == 1 / 0 ? (((t = v(s)).length + u) % 2 == 0 && (t += "0"), l = Math.sqrt(+t), u = g((u + 1) / 2) - (u < 0 || u % 2), l == 1 / 0 ? t = "5e" + u : t = (t = l.toExponential()).slice(0, t.indexOf("e") + 1) + u, a = new E(t)) : a = new E(l + ""), a.c[0])
              for ((l = (u = a.e) + c) < 3 && (l = 0);;)
                if (o = a, a = f.times(o.plus(n(i, o, c, 1))), v(o.c).slice(0, l) === (t = v(a.c)).slice(0, l)) {
                  if (a.e < u && --l, "9999" != (t = t.slice(l - 3, l + 1)) && (r || "4999" != t)) {
                    +t && (+t.slice(1) || "5" != t.charAt(0)) || (q(a, a.e + T + 2, 1), e = !a.times(a).eq(i));
                    break
                  }
                  if (!r && (q(o, o.e + T + 2, 0), o.times(o).eq(i))) {
                    a = o;
                    break
                  }
                  c += 4, l += 4, r = 1
                } return q(a, a.e + T + 1, x, e)
          }, i.toExponential = function(e, t) {
            return null != e && (m(e, 0, p), e++), L(this, e, t, 1)
          }, i.toFixed = function(e, t) {
            return null != e && (m(e, 0, p), e = e + this.e + 1), L(this, e, t)
          }, i.toFormat = function(e, t, n) {
            var a, o = this;
            if (null == n) null != e && t && "object" == r(t) ? (n = t, t = null) : e && "object" == r(e) ? (n = e, e = t = null) : n = I;
            else if ("object" != r(n)) throw Error(c + "Argument not an object: " + n);
            if (a = o.toFixed(e, t), o.c) {
              var i, s = a.split("."),
                l = +n.groupSize,
                u = +n.secondaryGroupSize,
                f = n.groupSeparator || "",
                d = s[0],
                h = s[1],
                p = o.s < 0,
                g = p ? d.slice(1) : d,
                v = g.length;
              if (u && (i = l, l = u, u = i, v -= i), l > 0 && v > 0) {
                for (i = v % l || l, d = g.substr(0, i); i < v; i += l) d += f + g.substr(i, l);
                u > 0 && (d += f + g.slice(i)), p && (d = "-" + d)
              }
              a = h ? d + (n.decimalSeparator || "") + ((u = +n.fractionGroupSize) ? h.replace(new RegExp("\\d{" + u + "}\\B", "g"), "$&" + (n.fractionGroupSeparator || "")) : h) : d
            }
            return (n.prefix || "") + a + (n.suffix || "")
          }, i.toFraction = function(e) {
            var t, a, r, o, i, s, l, u, f, d, p, g, y = this,
              m = y.c;
            if (null != e && (!(l = new E(e)).isInteger() && (l.c || 1 !== l.s) || l.lt(b))) throw Error(c + "Argument " + (l.isInteger() ? "out of range: " : "not an integer: ") + M(l));
            if (!m) return new E(y);
            for (t = new E(b), f = a = new E(b), r = u = new E(b), g = v(m), i = t.e = g.length - y.e - 1, t.c[0] = h[(s = i % 14) < 0 ? 14 + s : s], e = !e || l.comparedTo(t) > 0 ? i > 0 ? t : f : l, s = _, _ = 1 / 0, l = new E(g), u.c[0] = 0; d = n(l, t, 0, 1), 1 != (o = a.plus(d.times(r))).comparedTo(e);) a = r, r = o, f = u.plus(d.times(o = f)), u = o, t = l.minus(d.times(o = t)), l = o;
            return o = n(e.minus(a), r, 0, 1), u = u.plus(o.times(f)), a = a.plus(o.times(r)), u.s = f.s = y.s, p = n(f, r, i *= 2, x).minus(y).abs().comparedTo(n(u, a, i, x).minus(y).abs()) < 1 ? [f, r] : [u, a], _ = s, p
          }, i.toNumber = function() {
            return +M(this)
          }, i.toPrecision = function(e, t) {
            return null != e && m(e, 1, p), L(this, e, t, 2)
          }, i.toString = function(e) {
            var t, n = this,
              r = n.s,
              o = n.e;
            return null === o ? r ? (t = "Infinity", r < 0 && (t = "-" + t)) : t = "NaN" : (null == e ? t = o <= B || o >= S ? k(v(n.c), o) : w(v(n.c), o, "0") : 10 === e && A ? t = w(v((n = q(new E(n), T + o + 1, x)).c), n.e, "0") : (m(e, 2, O.length, "Base"), t = a(w(v(n.c), o, "0"), 10, e, r, !0)), r < 0 && n.c[0] && (t = "-" + t)), t
          }, i.valueOf = i.toJSON = function() {
            return M(this)
          }, i._isBigNumber = !0, null != t && E.set(t), E
        }()).default = i.BigNumber = i, void 0 === (a = function() {
          return i
        }.call(t, n, t, e)) || (e.exports = a)
      }()
    },
    b4d2: function(e, t) {
      function n(t) {
        return e.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, e.exports.__esModule = !0, e.exports.default = e.exports, n(t)
      }
      e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports
    }
  }
]);
