require("../../../@babel/runtime/helpers/Arrayincludes"), require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPack/pages/photoWall/photoWall"], {
    "20c9": function(e, t, i) {
      (function(e, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var n = {
          data: function() {
            return {
              showLottery: !1,
              showNotice: !1,
              imgurl: "",
              flowList: [],
              unit: 0,
              list: [],
              current: 1,
              size: 5,
              scenicId: "",
              photoWallId: "",
              loadMore: "loading",
              userImageList: [],
              uploadType: !1,
              configData: "",
              agreementUrlHeight: "750rpx",
              infoHeight: "436rpx"
            }
          },
          onLoad: function(t) {
            e.showLoading({
              title: "加载中",
              mask: !0
            }), t.photoWallId && (this.photoWallId = t.photoWallId), this.getPhotoWallSetting()
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
            var e = "/subPack/pages/photoWall/photoWall?photoWallId=".concat(this.photoWallId);
            return {
              title: this.configData.shareRemark || "",
              imageUrl: this.configData.shareUrl || "",
              path: this.$util.setShareUrl(e)
            }
          },
          onShareTimeline: function() {
            var e = "photoWallId=".concat(this.photoWallId);
            return {
              title: this.configData.shareRemark || "",
              imageUrl: this.configData.shareFriendsUrl || "",
              query: this.$util.setShareTimeline(e),
              path: "subPack"
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
            toLottery: function() {
              this.$navigateTo({
                url: "/pages/webpage/webpage?url=".concat("https://eshop.zhiyousx.com/scgact/nationalDay*type+1")
              })
            },
            getPhotoWallSetting: function() {
              var e = this,
                t = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/photoWallSetting/detail/".concat(t.photoWallId)).then((function(i) {
                1 == i.code ? (e.scenicId = i.data.scenicId, e.configData = i.data, e.getPhotoList(), e.getNoticeImageInfo(), e.getNoticeImageInfo1()) : t.$util.showToast(i.msg)
              }))
            },
            getPhotoList: function() {
              var t = this,
                i = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/scenicSpotUserPic/selectIndexScenicSpotUserPic?scenicId=".concat(i.scenicId, "&current=").concat(i.current, "&size=").concat(i.size)).then((function(n) {
                if (e.hideLoading(), 1 == n.code) {
                  var o = n.data.records;
                  n.data.total > 0 ? (i.setWatterFall(o), n.data.current < n.data.pages ? (t.current = t.current + 1, t.loadMore = "loadmore") : t.loadMore = "nomore") : (t.loadMore = "nomore", t.imgList = [])
                } else i.$util.showToast(n.msg)
              }))
            },
            setWatterFall: function(e) {
              var t = this,
                i = this;
              e.forEach((function(e) {
                if ((e = JSON.parse(JSON.stringify(e))).showType = e.splitPicHeight / e.splitPicWeight, !e.nickName && e.mobilePhone) {
                  var n = e.mobilePhone.toString();
                  e.nickName = n.replace(n.substring(3, 7), "****")
                } - 1 == e.nickName.indexOf("@") && (e.nickName = "@" + e.nickName), e.style = "linear-gradient(139deg, ".concat(t.configData.frameTopColor, " 0%, ").concat(t.configData.frameLeftColor, " 40%, ").concat(t.configData.frameBottomColor, " 60%, ").concat(t.configData.frameRightColor, " 100%);"), i.flowList.push(e)
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
                  } - 1 == n.nickName.indexOf("@") && (n.nickName = "@" + n.nickName), n.style = "linear-gradient(139deg, ".concat(t.configData.frameTopColor, " 0%, ").concat(t.configData.frameLeftColor, " 40%, ").concat(t.configData.frameBottomColor, " 60%, ").concat(t.configData.frameRightColor, " 100%);"), t.userImageList.unshift(n), t.userImageList.forEach((function(e, i) {
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
            getNoticeImageInfo: function() {
              var e = this;
              i.getImageInfo({
                src: e.configData.agreementUrl,
                success: function(t) {
                  e.agreementUrlHeight = t.height / t.width * 660 + "rpx"
                }
              })
            },
            getNoticeImageInfo1: function() {
              var e = this;
              i.getImageInfo({
                src: e.configData.agreementButtonUrl,
                success: function(t) {
                  e.infoHeight = 750 - t.height / t.width * 400 - 200 + "rpx"
                }
              })
            },
            addScenicSpotUserPic: function(e) {
              var t = this,
                i = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/scenicSpotUserPic/addScenicSpotUserPic?scenicId=" + this.scenicId + "&splitPicUrl=" + e).then((function(n) {
                1 == n.code ? (1 == n.data ? t.showLottery = !0 : t.$util.showToast("上传成功，待小编审核后就可以看见啦"), setTimeout((function() {
                  i.setImg(e)
                }), 2e3)) : t.$util.showToast(n.msg)
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
            },
            bannerClick: function(t) {
              5 != t.linkType && (this.showNotice = !1), 0 === t.linkType && t.linkUrl ? (-1 != t.linkUrl.indexOf("?") && (t.linkUrl = t.linkUrl.replace("?", "*"), t.linkUrl = t.linkUrl.replace("=", "+")), this.$navigateTo({
                url: "/pages/webpage/webpage?url=".concat(t.linkUrl)
              })) : 1 === t.linkType ? 1 === t.objType ? this.$navigateTo({
                url: "/subPage/pages/goods_details/goods_details?itemId=".concat(t.linkUrl)
              }) : 4 === t.objType || 7 === t.objType || 8 === t.objType || 9 === t.objType ? this.$navigateTo({
                url: "../spotDetail/spotDetail?spotId=".concat(t.linkUrl)
              }) : 3 === t.objType ? this.$navigateTo({
                url: "/subPack/pages/city/city?cityId=" + t.linkUrl
              }) : 2 === t.objType ? this.$util.cityJump(t.contentType, t.linkUrl) : 5 === t.objType && (["/pages/index/index", "/pages/spot_list/spot_list", "/pages/rankList/rankList", "/pages/mine/mine"].includes(t.linkUrlExtend) ? e.switchTab({
                url: t.linkUrlExtend
              }) : this.$navigateTo({
                url: t.linkUrlExtend
              })) : 2 === t.linkType ? "wxf2cca76ae0520e33" == t.advertNo ? this.$navigateTo({
                url: t.linkUrl
              }) : e.openEmbeddedMiniProgram({
                appId: t.advertNo,
                path: t.linkUrl
              }) : 3 === t.linkType ? (e.setStorageSync("richtext", t.linkUrl), this.$navigateTo({
                url: "/pages/richtext/richtext"
              })) : 8 == t.linkType && e.navigateTo({
                url: "plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=3&room_appid=wxf2cca76ae0520e33&amp;type=1&amp;share_openid=ojWxP5dKQbj5En3Vh8MDC23Y_J5k&amp;custom_params=&amp;close_picture_in_picture_mode=0&amp;open_share_ticket=0&amp;lottery_id=0"
              })
            }
          }
        };
        t.default = n
      }).call(this, i("df3c").default, i("3223").default)
    },
    "2f97": function(e, t, i) {
      var n = i("91e8");
      i.n(n).a
    },
    "7e59": function(e, t, i) {
      i.r(t);
      var n = i("c959"),
        o = i("c678");
      for (var a in o)["default"].indexOf(a) < 0 && function(e) {
        i.d(t, e, (function() {
          return o[e]
        }))
      }(a);
      i("2f97");
      var s = i("828b"),
        r = Object(s.a)(o.default, n.b, n.c, !1, null, "60739fa2", null, !1, n.a, void 0);
      t.default = r.exports
    },
    "91e8": function(e, t, i) {},
    ab01: function(e, t, i) {
      (function(e, t) {
        var n = i("47a9");
        i("5366"), n(i("3240"));
        var o = n(i("7e59"));
        e.__webpack_require_UNI_MP_PLUGIN__ = i, t(o.default)
      }).call(this, i("3223").default, i("df3c").createPage)
    },
    c678: function(e, t, i) {
      i.r(t);
      var n = i("20c9"),
        o = i.n(n);
      for (var a in n)["default"].indexOf(a) < 0 && function(e) {
        i.d(t, e, (function() {
          return n[e]
        }))
      }(a);
      t.default = o.a
    },
    c959: function(e, t, i) {
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
          var e = this,
            t = (e.$createElement, e._self._c, e.configData.useAgreement && e.configData.useAgreement[0] ? e.configData.useAgreement.split("<br/>") : null);
          e._isMounted || (e.e0 = function(t) {
            e.showLottery = !1
          }), e.$mp.data = Object.assign({}, {
            $root: {
              l0: t
            }
          })
        },
        a = []
    }
  },
  [
    ["ab01", "common/runtime", "common/vendor"]
  ]
]);
