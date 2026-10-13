require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPage/pages/twelveWall/twelveWall"], {
    "1db4": function(e, t, i) {
      var n = i("ff7a");
      i.n(n).a
    },
    "2fc2": function(e, t, i) {
      i.d(t, "b", (function() {
        return o
      })), i.d(t, "c", (function() {
        return a
      })), i.d(t, "a", (function() {
        return n
      }));
      var n = {
          uniNavbar: function() {
            return i.e("components/uni-navbar/uni-navbar").then(i.bind(null, "101a"))
          },
          uWaterfall: function() {
            return Promise.all([i.e("common/vendor"), i.e("uview-ui/components/u-waterfall/u-waterfall")]).then(i.bind(null, "335e"))
          },
          uPopup: function() {
            return i.e("uview-ui/components/u-popup/u-popup").then(i.bind(null, "39fb"))
          }
        },
        o = function() {
          this.$createElement;
          this._self._c
        },
        a = []
    },
    3812: function(e, t, i) {
      (function(e, t) {
        var n = i("47a9");
        i("5366"), n(i("3240"));
        var o = n(i("94793"));
        e.__webpack_require_UNI_MP_PLUGIN__ = i, t(o.default)
      }).call(this, i("3223").default, i("df3c").createPage)
    },
    6071: function(e, t, i) {
      (function(e, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var n = {
          data: function() {
            return {
              showNotice: !1,
              imgurl: "",
              flowList: [],
              unit: 0,
              list: [],
              current: 1,
              size: 5,
              scenicId: getApp().globalData.photoWallScenicId,
              loadMore: "loading",
              userImageList: [],
              uploadType: !1
            }
          },
          onLoad: function() {
            this.getPhotoList()
          },
          onReachBottom: function() {
            "loadmore" === this.loadMore ? 0 == this.uploadType && this.getPhotoList() : "nomore" === this.loadMore && e.showToast({
              title: "没有更多咯",
              icon: "none"
            })
          },
          watch: {
            flowList: function(e) {
              (this.uploadType = !0) && (this.userImageList.length + e.length >= this.userImageList.length + this.size && (this.uploadType = !1))
            }
          },
          onShareAppMessage: function() {
            return {
              title: "上传最美打卡照，做长安十二时辰每月之星，赢活动好礼",
              imageUrl: "https://eshopfile.zhiyousx.com/photoWall/twelveWallShare.jpg",
              path: this.$util.setShareUrl("/subPage/pages/twelveWall/twelveWall")
            }
          },
          onShareTimeline: function() {
            return {
              title: "上传最美打卡照，做长安十二时辰每月之星，赢活动好礼",
              imageUrl: "https://eshopfile.zhiyousx.com/twelveWall/shareTimeline.png",
              query: this.$util.setShareTimeline("")
            }
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          filters: {
            nickNameFilter: function(e) {
              if (!e.nickName) {
                var t = e.mobilePhone.toString();
                return t.replace(t.substring(3, 7), "****")
              }
              e.nickName
            }
          },
          methods: {
            getPhotoList: function() {
              var e = this,
                t = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/scenicSpotUserPic/selectIndexScenicSpotUserPic?scenicId=".concat(t.scenicId, "&current=").concat(t.current, "&size=").concat(t.size)).then((function(i) {
                if (1 == i.code) {
                  var n = i.data.records;
                  i.data.total > 0 ? (t.setWatterFall(n), i.data.current < i.data.pages ? (e.current = e.current + 1, e.loadMore = "loadmore") : e.loadMore = "nomore") : (e.loadMore = "nomore", e.imgList = [])
                } else t.$util.showToast(i.msg)
              }))
            },
            setWatterFall: function(e) {
              var t = this;
              e.forEach((function(e) {
                if ((e = JSON.parse(JSON.stringify(e))).showType = e.splitPicHeight / e.splitPicWeight, !e.nickName && e.mobilePhone) {
                  var i = e.mobilePhone.toString();
                  e.nickName = i.replace(i.substring(3, 7), "****")
                } - 1 == e.nickName.indexOf("@") && (e.nickName = "@" + e.nickName), t.flowList.push(e)
              }))
            },
            jumpSelection: function() {
              this.$navigateTo({
                url: "/subPage/pages/monthlySelection/monthlySelection?scenicId=" + this.scenicId
              })
            },
            jumpSpot: function() {
              this.$navigateTo({
                url: "/pages/spotDetailNew/spotDetailNew?spotId=" + this.scenicId
              })
            },
            uploadImg: function() {
              this.$util.isLogin() && (this.agreeMent ? this.chooseImg() : this.$refs.uPopup.open())
            },
            agree: function() {
              this.showNotice = !1, this.agreeMent = !0, this.chooseImg()
            },
            setImg: function(e) {
              var t = this;
              this.$refs.uWaterfall.clear(), this.flowList = [], this.uploadType = !0;
              var n = {};
              i.getImageInfo({
                src: e,
                success: function(i) {
                  if (n.showType = i.height / i.width, n.nickName = t.userInfo.nickName, n.splitPicUrl = e, n.mobilePhone = t.userInfo.mobilePhone, !n.nickName) {
                    var o = n.mobilePhone.toString();
                    n.nickName = o.replace(o.substring(3, 7), "****")
                  } - 1 == n.nickName.indexOf("@") && (n.nickName = "@" + n.nickName), t.userImageList.unshift(n), t.userImageList.forEach((function(e, i) {
                    e = JSON.parse(JSON.stringify(e)), t.flowList.push(e), i == t.userImageList.length - 1 && setTimeout((function() {
                      t.current = 1, t.getPhotoList()
                    }), 10)
                  }))
                }
              })
            },
            setWaterfAllFrist: function(e) {
              var t = {},
                n = this;
              n.current = 1, n.$refs.uWaterfall.clear(), n.flowList = [], i.getImageInfo({
                src: e,
                success: function(i) {
                  if (t.showType = i.height / i.width, t.nickName = n.userInfo.nickName, t.splitPicUrl = e, t.mobilePhone = n.userInfo.mobilePhone, !t.nickName) {
                    var o = t.mobilePhone.toString();
                    t.nickName = o.replace(o.substring(3, 7), "****")
                  }
                  n.flowList.push(t)
                }
              })
            },
            addScenicSpotUserPic: function(e) {
              var t = this,
                i = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/scenicSpotUserPic/addScenicSpotUserPic?scenicId=" + this.scenicId + "&splitPicUrl=" + e).then((function(n) {
                1 == n.code ? (t.$util.showToast("上传成功，待小编审核后就可以看见啦"), i.setImg(e)) : t.$util.showToast(n.msg)
              }))
            },
            chooseImg: function(t) {
              var n = this;
              i.chooseImage({
                count: 1,
                sizeType: ["compressed"],
                sourceType: ["album", "camera"],
                success: function(t) {
                  var o = t.tempFilePaths;
                  i.editImage({
                    src: o[0],
                    success: function(t) {
                      e.showLoading({
                        title: "加载中"
                      }), n.upLoadFile(t.tempFilePath).then((function(t) {
                        t && (e.hideLoading(), n.imgurl = t, n.addScenicSpotUserPic(t))
                      }))
                    }
                  })
                }
              })
            },
            upLoadFile: function(t) {
              var n = i.getFileSystemManager();
              return new Promise((function(i) {
                n.readFile({
                  filePath: t,
                  position: 0,
                  success: function(n) {
                    var o = this;
                    console.log(n), e.uploadFile({
                      url: getApp().globalData.requestUrl + "base/common/file/noLimitUpload",
                      filePath: t,
                      name: "file",
                      formData: {
                        file: n.data
                      },
                      success: function(e) {
                        var t = JSON.parse(e.data);
                        1 == t.code && t.data && t.data.fileUrl ? i(t.data.fileUrl) : (i(!1), o.$util.showToast(t.msg))
                      }
                    })
                  },
                  fail: function(e) {
                    i(!1)
                  }
                })
              }))
            },
            priview: function(e) {
              var t = e.currentTarget.dataset.it.splitPicUrl;
              i.previewImage({
                current: t,
                urls: [t]
              })
            }
          }
        };
        t.default = n
      }).call(this, i("df3c").default, i("3223").default)
    },
    94793: function(e, t, i) {
      i.r(t);
      var n = i("2fc2"),
        o = i("d52c");
      for (var a in o)["default"].indexOf(a) < 0 && function(e) {
        i.d(t, e, (function() {
          return o[e]
        }))
      }(a);
      i("1db4");
      var s = i("828b"),
        c = Object(s.a)(o.default, n.b, n.c, !1, null, "7506f9fa", null, !1, n.a, void 0);
      t.default = c.exports
    },
    d52c: function(e, t, i) {
      i.r(t);
      var n = i("6071"),
        o = i.n(n);
      for (var a in n)["default"].indexOf(a) < 0 && function(e) {
        i.d(t, e, (function() {
          return n[e]
        }))
      }(a);
      t.default = o.a
    },
    ff7a: function(e, t, i) {}
  },
  [
    ["3812", "common/runtime", "common/vendor"]
  ]
]);
