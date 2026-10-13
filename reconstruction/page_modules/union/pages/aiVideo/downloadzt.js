// Extracted from union/pages/aiVideo/downloadzt.js; webpack module a3e3.
// Compiled code for analysis; not an original source file.
module.exports = {
    a3e3: function(t, e, i) {
      (function(t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var n = i("0e74"),
          o = {
            data: function() {
              return {
                payShow: !0,
                videoUrl: "",
                imageUrl: "",
                videoId: "",
                disabledSubmitBtn: !1,
                infosObj: {
                  itemName: "长安十二时辰AI视频",
                  itemPrice: 9.9
                },
                payStatue: 0,
                posterUrl: "",
                moldId: "",
                deviceId: "",
                imageName: "",
                sex: "",
                posterUrlStatus: !0
              }
            },
            onLoad: function(e) {
              this.videoId = e.id ? e.id : "", this.moldId = e.moldId ? e.moldId : "", this.imageName = e.imageName ? e.imageName : "", this.deviceId = e.deviceId ? e.deviceId : "", this.getdelite(), t.showLoading({
                title: "加载中"
              })
            },
            methods: {
              loadedmetadata: function() {
                this.posterUrlStatus = !1, t.hideLoading()
              },
              getdelite: function() {
                var e = this;
                this.$uniApi.dataRequestNoLoading("GET", "volce/find", {
                  id: this.videoId,
                  imageName: this.imageName,
                  deviceId: this.deviceId,
                  moldId: this.moldId
                }, 0, n.AIVIDEO_API_BASE_URL).then((function(i) {
                  1 === i.code ? (t.hideLoading(), e.videoUrl = i.data.video, e.posterUrl = i.data.imageUrl) : t.hideLoading()
                })).catch((function() {
                  t.hideLoading()
                }))
              },
              backPage: function() {
                t.navigateBack()
              },
              downloadVideo: function() {
                var e = this;
                t.getSetting({
                  success: function(i) {
                    i.authSetting["scope.writePhotosAlbum"] ? e.startDownload() : t.authorize({
                      scope: "scope.writePhotosAlbum",
                      success: function() {
                        e.startDownload()
                      },
                      fail: function() {
                        t.showModal({
                          title: "提示",
                          content: "需要您授权保存到相册",
                          success: function(e) {
                            e.confirm && t.openSetting()
                          }
                        })
                      }
                    })
                  },
                  fail: function() {
                    t.showToast({
                      title: "获取权限失败",
                      icon: "none"
                    })
                  }
                })
              },
              startDownload: function() {
                t.showLoading({
                  title: "视频下载中..."
                }), t.downloadFile({
                  url: this.videoUrl,
                  success: function(e) {
                    console.log(e, "res"), 200 === e.statusCode ? t.saveVideoToPhotosAlbum({
                      filePath: e.tempFilePath,
                      success: function() {
                        t.hideLoading(), t.showToast({
                          title: "视频保存成功",
                          icon: "success"
                        })
                      },
                      fail: function(e) {
                        t.hideLoading(), t.showToast({
                          title: "视频保存失败",
                          icon: "none"
                        }), console.log("保存失败:", e)
                      }
                    }) : (t.hideLoading(), t.showToast({
                      title: "视频下载失败",
                      icon: "none"
                    }), console.log("下载失败，状态码:", e.statusCode))
                  },
                  fail: function(e) {
                    t.hideLoading(), t.showToast({
                      title: "视频下载失败",
                      icon: "none"
                    }), console.log("下载失败:", e)
                  }
                })
              },
              goPay: function() {
                if (!this.disabledSubmitBtn) {
                  var e = {
                    itemAmount: this.infosObj.itemPrice,
                    itemNum: 1,
                    orderAmount: this.infosObj.itemPrice,
                    payChannel: "",
                    itemId: this.videoId,
                    itemName: this.infosObj.itemName,
                    seriesNumber: t.getStorageSync("userInfor").openId || t.getStorageSync("wxopenid")
                  };
                  this.$eventAnalyse.analyse({
                    eventTag: "aiVideo_pay_click",
                    eventName: "去支付",
                    eventParams: e
                  }), this.createOrder(e)
                }
              },
              createOrder: function(e) {
                var i = this;
                this.disabledSubmitBtn || (this.disabledSubmitBtn = !0, this.$uniApi.dataRequestYesLoading("POST", "order/app/v1/vudio/order/createOrder", e, "预订中...").then((function(e) {
                  1 == e.code ? i.$uniApi.dataRequestYesLoading("GET", "order/app/v1/vudio/order/topay", {
                    orderId: e.data
                  }, "支付中").then((function(e) {
                    1 == e.code ? t.requestPayment({
                      timeStamp: e.data.timeStamp,
                      nonceStr: e.data.nonceStr,
                      package: "prepay_id=".concat(e.data.prepayid),
                      signType: e.data.signType,
                      paySign: e.data.pay_sign,
                      orderInfo: e.data.tradeNo,
                      success: function(t) {
                        i.$util.showToast("支付成功"), i.getdelite()
                      },
                      fail: function(t) {
                        i.$util.showToast("支付已取消"), i.disabledSubmitBtn = !1
                      }
                    }) : (i.$util.showToast(e.msg), i.disabledSubmitBtn = !1)
                  })).catch((function(t) {
                    i.$util.showToast(t.msg)
                  })) : (i.disabledSubmitBtn = !1, i.$util.showToast(e.msg))
                })).catch((function(t) {
                  i.disabledSubmitBtn = !1, i.$util.showToast(t.msg)
                })))
              }
            }
          };
        e.default = o
      }).call(this, i("df3c").default)
    },
};
