// Extracted from subPage/pages/templeWall/templeWall.js; webpack module "6eeb".
// Compiled code for analysis; not an original source file.
module.exports = {
    "6eeb": function(e, t, i) {
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
              scenicId: "1524935934943391746",
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
              title: "风来犹作海潮音",
              imageUrl: "https://eshopfile.zhiyousx.com/2022100815285282248.jpg",
              path: this.$util.setShareUrl("/subPage/pages/templeWall/templeWall")
            }
          },
          onShareTimeline: function() {
            return {
              title: "风来犹作海潮音",
              imageUrl: "https://eshopfile.zhiyousx.com/2022100815285282248.jpg",
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
              i.previewImage({
                current: e,
                urls: [e]
              })
            }
          }
        };
        t.default = n
      }).call(this, i("df3c").default, i("3223").default)
    },
};
