// Extracted from subPage/pages/information/information.js; webpack module 2716.
// Compiled code for analysis; not an original source file.
module.exports = {
    2716: function(e, t, n) {
      (function(e, o) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var i = new Date,
          a = i.getFullYear(),
          u = i.getMonth() + 1,
          s = i.getDate(),
          r = "".concat(a, "-").concat(u, "-").concat(s),
          c = {
            components: {
              avatar: function() {
                n.e("subPage/components/yq-avatar/yq-avatar").then(function() {
                  return resolve(n("91d7"))
                }.bind(null, n)).catch(n.oe)
              }
            },
            data: function() {
              return {
                action: getApp().globalData.requestUrl + "base/common/file/qiniu/upload",
                showNameDialog: !1,
                userInfoFrom: {
                  uploadUrl: "",
                  userName: "",
                  usersex: this.$store.getters.userInfor.gender.toString()
                },
                show: !1,
                useEditImg: !0,
                params: {
                  year: !0,
                  month: !0,
                  day: !1,
                  hour: !1,
                  minute: !1,
                  second: !1,
                  timestamp: !0
                },
                startDate: "1950-01-01",
                endDate: r,
                hideNum: 10,
                birthday: "",
                date: ""
              }
            },
            onLoad: function() {
              this.useEditImg = !!e.editImage || !1
            },
            onShow: function() {},
            computed: {
              userInfo: function() {
                return this.$store.getters.userInfor
              }
            },
            methods: {
              bindDateChange: function(e) {
                this.date = e.detail.value, this.editUserInfo("birthday")
              },
              hideTab: function() {
                var e = this;
                this.hideNum--, this.hideNum > 0 && setTimeout((function() {
                  o.hideTabBar(), e.hideTab()
                }), 10)
              },
              myUploadInfo: function(e) {
                var t = this;
                e.path && this.upLoadFile(e.path).then((function(e) {
                  e && (t.userInfoFrom.uploadUrl = e, t.editUserInfo("headPic"))
                }))
              },
              chooseImg: function(t) {
                var n = this;
                o.chooseImage({
                  count: 1,
                  sizeType: ["compressed"],
                  sourceType: ["album", "camera"],
                  success: function(t) {
                    var i = t.tempFilePaths;
                    e.editImage({
                      src: i[0],
                      success: function(e) {
                        o.showLoading({
                          title: "加载中"
                        }), n.upLoadFile(e.tempFilePath).then((function(e) {
                          e && (o.hideLoading(), n.userInfoFrom.uploadUrl = e, n.editUserInfo("headPic"))
                        }))
                      }
                    })
                  }
                })
              },
              clkInfo: function(e) {
                this.$refs.avatarInfo.fChooseImg(e, {
                  selWidth: "550upx",
                  selHeight: "550upx",
                  expWidth: "550upx",
                  expHeight: "550upx"
                })
              },
              onUploaded: function(e) {
                var t = e.pop();
                this.userInfoFrom.uploadUrl = t.response.data[0].minImageUrl, this.editUserInfo("headPic"), this.$refs.Uupload.clear()
              },
              editUserInfo: function(e) {
                var t = this,
                  n = {};
                if ("headPic" === e) n.picUrl = this.userInfoFrom.uploadUrl;
                else if ("name" === e) {
                  if (!this.userInfoFrom.userName) return void this.$util.showToast("请输入昵称");
                  this.showNameDialog = !1, n.nickName = this.userInfoFrom.userName
                } else "sex" === e ? n.gender = this.userInfoFrom.usersex : "birthday" === e && (n.birthday = this.date);
                this.$uniApi.dataRequestNoLoading("PUT", "manager/app/v1/member", n).then((function(e) {
                  t.$store.dispatch("getUserInfo", t.userInfo)
                }))
              },
              editName: function() {
                this.userInfoFrom.userName = this.userInfo.nickName, this.showNameDialog = !0
              },
              editBrithday: function() {
                this.show = !0
              },
              confirmBirthday: function(e) {
                this.show = !1, this.params = e, this.editUserInfo("birthday")
              },
              radioChange: function(e) {
                this.userInfoFrom.usersex = e.detail.value, this.editUserInfo("sex")
              },
              changeSex: function() {
                this.editUserInfo("sex")
              },
              layout: function() {
                var e = this;
                o.showModal({
                  title: "退出登录",
                  content: "您确定要退出登录吗？",
                  confirmColor: "#ff4643",
                  success: function(t) {
                    t.confirm && e.$store.dispatch("LoginOut").then((function() {
                      setTimeout((function(t) {
                        e.$util.goBack(), e.$refs.uToast.show({
                          title: "已退出登录",
                          type: "success"
                        })
                      }), 200)
                    }))
                  }
                })
              },
              address: function() {
                this.$navigateTo({
                  url: "/subPack/pages/address/address"
                })
              },
              onChooseavatar: function(e) {
                var t = this,
                  n = e.detail.avatarUrl;
                o.showLoading({
                  title: "上传中"
                }), t.upLoadFile(n).then((function(e) {
                  e && (o.hideLoading(), t.userInfoFrom.uploadUrl = e, t.editUserInfo("headPic"))
                }))
              },
              upLoadFile: function(t) {
                var n = e.getFileSystemManager();
                return new Promise((function(e) {
                  n.readFile({
                    filePath: t,
                    position: 0,
                    success: function(n) {
                      var i = this;
                      console.log(n), o.showModal({
                        content: n.data
                      }), o.uploadFile({
                        url: getApp().globalData.requestUrl + "base/common/file/noLimitUpload",
                        filePath: t,
                        name: "file",
                        formData: {
                          file: n.data
                        },
                        success: function(t) {
                          var n = JSON.parse(t.data);
                          1 == n.code && n.data && n.data.fileUrl ? e(n.data.fileUrl) : (e(!1), i.$util.showToast(n.msg))
                        }
                      })
                    },
                    fail: function(t) {
                      e(!1)
                    }
                  })
                }))
              }
            }
          };
        t.default = c
      }).call(this, n("3223").default, n("df3c").default)
    },
};
