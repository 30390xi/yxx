require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["union/pages/aiReplacement/index"], {
    "00a3": function(e, t, n) {
      n.r(t);
      var o = n("8f0d"),
        i = n.n(o);
      for (var a in o)["default"].indexOf(a) < 0 && function(e) {
        n.d(t, e, (function() {
          return o[e]
        }))
      }(a);
      t.default = i.a
    },
    "137b": function(e, t, n) {
      var o = n("dc83");
      n.n(o).a
    },
    "8af7": function(e, t, n) {
      (function(e, t) {
        var o = n("47a9");
        n("5366"), o(n("3240"));
        var i = o(n("9082"));
        e.__webpack_require_UNI_MP_PLUGIN__ = n, t(i.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    "8f0d": function(e, t, n) {
      (function(e, o) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var i = {
          components: {
            componentSwiper: function() {
              n.e("union/pages/aiReplacement/components/componentSwiper").then(function() {
                return resolve(n("7c52"))
              }.bind(null, n)).catch(n.oe)
            }
          },
          data: function() {
            return {
              btnText: ["下一步", "下一步", "上传人像照片"],
              typeIndex: 0,
              leftBtn: ["", "上一步", "上一步"],
              smallScreen: !1,
              humanImg: "",
              bgImg: "",
              clothImg: "",
              key: "",
              showLoading: !1,
              bgData: [],
              showHide: !1
            }
          },
          onLoad: function() {
            var t = this,
              n = e.getSystemInfoSync().screenHeight;
            console.log(n, "屏幕高度小于750"), n < 750 ? (console.log("屏幕高度小于750"), this.smallScreen = !0) : (console.log("屏幕高度大于等于750"), this.smallScreen = !1), this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/sysParam/getSysConfigure", {
              paramKey: "VIDU_SCENIC_BG_IMAGE"
            }).then((function(e) {
              1 === e.code && (console.log(e), t.bgData = JSON.parse(e.data.paramValue) || {}, t.bgImg = t.bgData.bgList[0].noBorderUrl, t.clothImg = t.bgData.clothImgList[0].nofaceUrl, t.key = t.bgData.clothImgList[0].key, t.$util.isLogin())
            }))
          },
          onShow: function() {
            var t = this;
            e.getStorageSync("token") ? this.showHide && (this.bgImg = this.bgData.bgList[0].noBorderUrl, this.clothImg = this.bgData.clothImgList[0].nofaceUrl, this.humanImg = "", this.key = this.bgData.clothImgList[0].key, this.$refs.swiper0.scrollToCurrent(0), this.$refs.swiper1.scrollToCurrent(0)) : this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/sysParam/getSysConfigure", {
              paramKey: "VIDU_SCENIC_BG_IMAGE"
            }).then((function(e) {
              1 === e.code && (console.log(e), t.bgData = JSON.parse(e.data.paramValue) || {}, t.bgImg = t.bgData.bgList[0].noBorderUrl, t.clothImg = t.bgData.clothImgList[0].nofaceUrl, t.key = t.bgData.clothImgList[0].key, t.$util.isLogin())
            }))
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          onHide: function() {
            var e = this;
            this.showHide && setTimeout((function() {
              e.typeIndex = 0, e.$refs.swiper0.scrollToCurrent(0), e.$refs.swiper1.scrollToCurrent(0)
            }), 1e3)
          },
          methods: {
            scrollImg: function(e) {
              this.bgImg = e
            },
            scrollImg1: function(e, t) {
              this.clothImg = e, this.key = t
            },
            submit: function() {
              var t = this;
              2 != this.typeIndex ? 0 != this.typeIndex && 1 != this.typeIndex || (this.typeIndex += 1) : this.humanImg ? (this.showHide = !0, e.showLoading({
                title: "视频生成中...",
                mask: !0
              }), this.$uniApi.dataRequestNoLoading("post", "ai/vidu/ai/createScenesTask", {
                bgImg: this.bgImg,
                clothImg: this.clothImg,
                humanImg: this.humanImg,
                memberId: this.userInfo.memberId,
                key: this.key,
                type: 0
              }).then((function(n) {
                1 === n.code ? setTimeout((function() {
                  e.hideLoading(), t.$navigateTo({
                    url: "/union/pages/aiReplacement/list"
                  })
                }), 1e3) : (e.hideLoading(), t.$util.showToast(n.msg))
              })).catch((function(n) {
                e.hideLoading(), t.$util.showToast("请重试")
              }))) : this.chooseImage()
            },
            goList: function() {
              this.showHide = !0, this.$navigateTo({
                url: "/union/pages/aiReplacement/list"
              })
            },
            previousStep: function() {
              this.leftBtn[this.typeIndex] && (1 == this.typeIndex && this.clothImg && this.$refs.swiper1.scrollToCurrent(this.clothIdx), this.typeIndex -= 1)
            },
            nextStep: function() {
              this.chooseImage()
            },
            chooseImage: function() {
              var t = this;
              this.showHide = !1, e.chooseImage({
                count: 1,
                sizeType: ["original", "compressed"],
                sourceType: ["album", "camera"],
                success: function(n) {
                  if (n.tempFiles[0].size / 1024 / 1024 <= 10) {
                    var i = n.tempFilePaths;
                    o.cropImage({
                      src: i[0],
                      cropScale: "1:1",
                      success: function(n) {
                        console.log(n.tempFilePath, "KKKKKKK"), e.showLoading({
                          title: "照片上传中...",
                          mask: !0
                        }), e.uploadFile({
                          url: getApp().globalData.requestUrl + "base/common/file/qiniu/upload",
                          filePath: n.tempFilePath,
                          name: "images",
                          success: function(n) {
                            console.log(n, "uploadFileRes");
                            var o = JSON.parse(n.data);
                            1 == o.code && o.data && o.data[0] && (t.humanImg = o.data[0].maxImageUrl), setTimeout((function() {
                              t.showHide = !0, e.hideLoading()
                            }), 1e3)
                          },
                          fail: function(t) {
                            console.error("upload fail:", t), e.hideLoading().showHide = !0
                          }
                        }).onProgressUpdate((function(e) {
                          console.log("上传进度" + e.progress + "%")
                        }))
                      },
                      fail: function(e) {
                        console.error("upload fail:", e)
                      }
                    })
                  } else t.$util.showToast("上传图片不可超过10M")
                }
              })
            }
          }
        };
        t.default = i
      }).call(this, n("df3c").default, n("3223").default)
    },
    9082: function(e, t, n) {
      n.r(t);
      var o = n("d81c"),
        i = n("00a3");
      for (var a in i)["default"].indexOf(a) < 0 && function(e) {
        n.d(t, e, (function() {
          return i[e]
        }))
      }(a);
      n("137b");
      var s = n("828b"),
        c = Object(s.a)(i.default, o.b, o.c, !1, null, "2f6e3365", null, !1, o.a, void 0);
      t.default = c.exports
    },
    d81c: function(e, t, n) {
      n.d(t, "b", (function() {
        return i
      })), n.d(t, "c", (function() {
        return a
      })), n.d(t, "a", (function() {
        return o
      }));
      var o = {
          uniNavbar: function() {
            return n.e("components/uni-navbar/uni-navbar").then(n.bind(null, "101a"))
          }
        },
        i = function() {
          this.$createElement;
          this._self._c
        },
        a = []
    },
    dc83: function(e, t, n) {}
  },
  [
    ["8af7", "common/runtime", "common/vendor"]
  ]
]);
