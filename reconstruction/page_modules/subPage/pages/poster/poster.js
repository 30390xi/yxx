// Extracted from subPage/pages/poster/poster.js; webpack module 8052.
// Compiled code for analysis; not an original source file.
module.exports = {
    8052: function(t, i, e) {
      (function(t, e) {
        Object.defineProperty(i, "__esModule", {
          value: !0
        }), i.default = void 0;
        var n = {
          data: function() {
            return {
              imgurl: "",
              postUrl: "",
              templates: [{
                turl: "https://eshopfile.zhiyousx.com/2022032914485761116.png",
                t_w: 244,
                t_h: 132,
                t_t: 31,
                t_l: 19,
                furl: "https://eshopfile.zhiyousx.com/2022032914492488402.png",
                f_w: 162,
                f_h: 95,
                f_b: 19,
                f_r: 15
              }, {
                turl: "https://eshopfile.zhiyousx.com/2022032914500320590.png",
                t_w: 243,
                t_h: 212,
                t_t: 19,
                t_l: 19,
                furl: "https://eshopfile.zhiyousx.com/2022032914501563224.png",
                f_w: 102,
                f_h: 162,
                f_b: 2,
                f_r: 18
              }, {
                turl: "https://eshopfile.zhiyousx.com/2022032914503192191.png",
                t_w: 266,
                t_h: 128,
                t_t: 19,
                t_l: 269,
                furl: "https://eshopfile.zhiyousx.com/2022032914504243591.png",
                f_w: 122,
                f_h: 166,
                f_b: 11,
                f_r: 409
              }, {
                turl: "https://eshopfile.zhiyousx.com/2022032914505798627.png",
                t_w: 193,
                t_h: 142,
                t_t: 19,
                t_l: 342,
                furl: "https://eshopfile.zhiyousx.com/2022032914510933554.png",
                f_w: 85,
                f_h: 180,
                f_b: 1,
                f_r: 446
              }],
              actTemp: {},
              printObj: {},
              tempUlr: "",
              originId: "",
              type: "",
              originUrl: ""
            }
          },
          onLoad: function(t) {
            var i = this,
              e = this;
            this.imgurl = t.url || "https://eshopfile.zhiyousx.com/2022032910191481754.png", t.origin && this.upLoadFile(t.origin).then((function(t) {
              t && (i.originUrl = t, e.submitOriginal(t, "1"))
            }))
          },
          onShow: function() {
            this.originUrl && (this.type = "", this.submitOriginal(this.originUrl, "1"))
          },
          created: function() {},
          watch: {
            postUrl: function(t) {
              var i = this;
              if ("save" == this.type && this.getwritePhotosAlbum(t), "complete" == this.type) var e = setInterval((function() {
                i.originUrl && !i.originId ? i.submitOriginal(i.originUrl, "1") : i.originId && (clearInterval(e), i.upLoadFile(t).then((function(t) {
                  t && i.submitOprate(t)
                })))
              }), 500)
            }
          },
          methods: {
            complate: function() {
              t.showLoading(), this.type = "complete";
              var i = {};
              i.imgurl = this.imgurl, i = Object.assign(i, this.actTemp), this.printObj = i
            },
            submitOriginal: function(i, e) {
              var n = this,
                o = {
                  originalPicUrl: i,
                  scenicId: e
                };
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/scenicSpotPicActiveRel/saveOriginalPic", o).then((function(t) {
                1 == t.code && (n.originId = t.data)
              })).catch((function(i) {
                t.hideLoading(), n.$util.showToast("上传失败，请重新尝试")
              }))
            },
            submitOprate: function(i) {
              var e = this,
                n = {
                  splitPicUrl: i,
                  id: this.originId
                };
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1//scenicSpotPicActiveRel/saveSplitPicUrl", n).then((function(i) {
                t.hideLoading(), 1 == i.code ? (e.$util.showToast("保存成功"), t.redirectTo({
                  url: "/subPage/pages/pictureWall/pictureWall?userpic=" + e.postUrl
                })) : e.$util.showToast(i.msg)
              })).catch((function(i) {
                t.hideLoading()
              }))
            },
            noUseTemp: function() {
              this.type = "", this.postUrl = "", this.actTemp = {}
            },
            chooseTemp: function(t) {
              this.type = "", this.postUrl = "", this.actTemp = t
            },
            upLoadFile: function(i) {
              var n = e.getFileSystemManager();
              return new Promise((function(e) {
                n.readFile({
                  filePath: i,
                  position: 0,
                  success: function(n) {
                    console.log(n), t.uploadFile({
                      url: getApp().globalData.requestUrl + "base/common/file/noLimitUpload",
                      filePath: i,
                      name: "file",
                      formData: {
                        file: n.data
                      },
                      success: function(t) {
                        var i = JSON.parse(t.data);
                        1 == i.code && i.data && i.data.fileUrl ? e(i.data.fileUrl) : e(!1)
                      }
                    })
                  },
                  fail: function(t) {
                    e(!1)
                  }
                })
              }))
            },
            saveImg: function() {
              if (t.showLoading(), "save" == this.type && this.postUrl) this.getwritePhotosAlbum(this.postUrl);
              else {
                this.type = "save";
                var i = {};
                i.imgurl = this.imgurl, i = Object.assign(i, this.actTemp), this.printObj = i
              }
            },
            getwritePhotosAlbum: function(i) {
              var n = this;
              t.getSetting({
                success: function(o) {
                  o.authSetting["scope.writePhotosAlbum"] ? (t.hideLoading(), n.saveimgtoAlbum(i)) : t.authorize({
                    scope: "scope.writePhotosAlbum",
                    success: function() {
                      n.saveimgtoAlbum(i)
                    },
                    fail: function() {
                      n.type = "", n.printObj = {}, t.hideLoading(), e.showModal({
                        title: "提示",
                        content: "您未授权相册，功能将无法使用",
                        showCancel: !0,
                        confirmText: "授权",
                        confirmColor: "#52a2d8",
                        success: function(i) {
                          i.confirm && t.openSetting({
                            success: function(i) {
                              i.authSetting["scope.writePhotosAlbum"] ? t.showToast({
                                title: "您已授权成功，请重新保存",
                                icon: "success",
                                duration: 2e3
                              }) : t.showToast({
                                title: "尚未授权，无法保存",
                                icon: "none",
                                duration: 2e3
                              })
                            }
                          })
                        },
                        fail: function() {
                          t.hideLoading(), n.type = "", n.printObj = {}
                        }
                      })
                    }
                  })
                },
                fail: function(i) {
                  n.type = "", n.printObj = {}, t.hideLoading()
                }
              })
            },
            saveimgtoAlbum: function(i) {
              var e = this;
              t.saveImageToPhotosAlbum({
                filePath: i,
                success: function(i) {
                  t.hideLoading(), e.type = "", e.printObj = {}, t.showToast({
                    title: "保存成功",
                    icon: "success",
                    duration: 2e3
                  })
                },
                complete: function(i) {
                  t.hideLoading(), e.type = "", e.printObj = {}, console.log(i)
                }
              })
            }
          }
        };
        i.default = n
      }).call(this, e("df3c").default, e("3223").default)
    },
};
