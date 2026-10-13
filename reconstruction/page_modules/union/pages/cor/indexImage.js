// Extracted from union/pages/cor/indexImage.js; webpack module a4f8.
// Compiled code for analysis; not an original source file.
module.exports = {
    a4f8: function(e, n, a) {
      (function(e, a) {
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var t = {
          data: function() {
            return {
              cameraContext: null,
              index: "",
              showImage: "",
              indexed: ""
            }
          },
          onShow: function() {},
          onLoad: function(n) {
            this.index = n.i || !1, this.indexed = n.ind || !1, this.cameraContext = e.createCameraContext()
          },
          onUnload: function() {
            this.showImage = ""
          },
          methods: {
            ocrFun: function() {
              this.showHide = !0
            },
            close: function() {
              e.navigateBack({
                delta: 1
              })
            },
            iiiiiii: function() {
              var n = getCurrentPages(),
                a = n[n.length - 2];
              console.log(a, "上一页对象1"), a.$vm.setDataInfos({
                name: 11111111,
                idCarNo: 0x3fdc72ad69268
              }, this.index, this.indexed), e.navigateBack({
                delta: 1
              })
            },
            checkCameraPermissionAndTakePhoto: function() {
              var n = this;
              e.getSetting({
                success: function(a) {
                  a.authSetting["scope.camera"] ? n.takePhoto() : e.authorize({
                    scope: "scope.camera",
                    success: function() {
                      n.takePhoto()
                    },
                    fail: function(n) {
                      "authorize:fail auth deny" === n.errMsg || "authorize:fail:auth deny" === n.errMsg ? e.showModal({
                        title: "授权提示",
                        content: "您拒绝了相机授权，如需使用相机功能，请在设置中开启。",
                        confirmText: "去设置",
                        success: function(n) {
                          n.confirm && (e.navigateBack({
                            delta: 1
                          }), e.openSetting({
                            success: function(e) {},
                            fail: function(e) {
                              console.error("打开设置页面失败:", e)
                            }
                          }))
                        }
                      }) : console.error("请求授权失败:", n)
                    }
                  })
                },
                fail: function(e) {
                  console.error("获取授权状态失败:", e)
                }
              })
            },
            takePhoto: function() {
              var n = this;
              this.cameraContext.takePhoto({
                quality: "normal",
                success: function(t) {
                  e.showLoading({
                    title: "识别中",
                    mask: !0
                  }), console.log(t, "拍照结果"), a.getFileSystemManager().readFile({
                    filePath: t.tempImagePath,
                    encoding: "base64",
                    success: function(e) {
                      console.log(e, "图片 base64 数据"), n.identify(e.data)
                    },
                    fail: function(n) {
                      e.showToast({
                        title: "读取图片失败，请稍后重试",
                        icon: "none",
                        duration: 1200
                      }), console.log("读取图片文件失败", n), e.hideLoading()
                    }
                  })
                },
                fail: function(n) {
                  e.showToast({
                    title: "拍照失败，请检查系统是否授权",
                    icon: "none",
                    duration: 1200
                  }), console.log("图片拍照失败", n)
                }
              })
            },
            chooseImage: function() {
              var n = this,
                a = this;
              e.chooseImage({
                count: 1,
                sizeType: ["compressed"],
                sourceType: ["album"],
                success: function(t) {
                  console.log("相册选取成功", t), n.showImage = t.tempFilePaths[0], e.showLoading({
                    title: "识别中",
                    mask: !0
                  }), n.upLoad(t.tempFilePaths[0]).then((function(e) {
                    console.log(e, "图片上传结果"), a.identify(e, "url")
                  })).catch((function(a) {
                    n.showImage = "", e.showToast({
                      title: "识别失败，请重新识别或手动填写",
                      icon: "none",
                      duration: 1200
                    }), e.hideLoading()
                  }))
                },
                fail: function(n) {
                  e.hideLoading(), console.log("相册选取失败", n)
                }
              })
            },
            upLoad: function(n) {
              return new Promise((function(a, t) {
                e.uploadFile({
                  url: getApp().globalData.requestUrl + "base/common/file/qiniu/upload",
                  filePath: n,
                  name: "images",
                  success: function(e) {
                    console.log(e, "文件上传响应");
                    try {
                      var n = JSON.parse(e.data);
                      1 === n.code && n.data && n.data[0] && a(n.data[0].maxImageUrl)
                    } catch (e) {
                      t(new Error("解析服务器响应数据失败"))
                    }
                  },
                  fail: function(e) {
                    console.error("upload fail:", e), t(e)
                  }
                })
              }))
            },
            identify: function(n, t) {
              var o;
              o = t ? {
                img_url: n,
                data_type: 3,
                ocr_type: 1
              } : {
                img_data: n,
                data_type: 2,
                ocr_type: 1
              };
              var i = this,
                c = getCurrentPages();
              a.serviceMarket.invokeService({
                service: "wx79ac3de8be320b71",
                api: "OcrAllInOne",
                data: o
              }).then((function(n) {
                if (e.hideLoading(), console.log("invokeService success", n), c.length > 1) {
                  var a = c[c.length - 2];
                  console.log(a, "上一页对象1"), n && n.data && n.data.idcard_res && n.data.idcard_res.name && n.data.idcard_res.id && n.data.idcard_res.name.text && n.data.idcard_res.id.text ? a.$vm.setDataInfos({
                    name: n.data.idcard_res.name.text,
                    idCarNo: n.data.idcard_res.id.text
                  }, i.index, i.indexed) : a.$vm.setDataInfos(!1), e.navigateBack({
                    delta: 1
                  })
                }
              })).catch((function(n) {
                if (e.hideLoading(), console.error("invokeService fail------", n), c.length > 1) {
                  var a = c[c.length - 2];
                  console.log(a, "上一页对象"), a.$vm.setDataInfos(!1)
                }
                e.navigateBack({
                  delta: 1
                })
              }))
            }
          }
        };
        n.default = t
      }).call(this, a("df3c").default, a("3223").default)
    },
};
