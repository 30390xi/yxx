<template>
<view class="bigbox">
    <view class="up">
        <button class="up" openType="chooseAvatar" type="balanced" @chooseavatar="onChooseavatar($event)">
            <view class="imgbox" slot="addBtn">
                <image class="" :src="userInfo.picUrl?userInfo.picUrl:'../../static/images/tt@2x.png'"></image>
            </view>
        </button>
    </view>
    <view class="list listline">
        <view class="contents">
            <view class="t">ID</view>
            <view class="">{{userInfo.memberId}}</view>
        </view>
        <view class="contents">
            <view class="t">昵称</view>
            <view class="name" @click="editName($event)">
                <text class="">{{userInfo.nickName?userInfo.nickName:'请输入昵称'}}</text>
                <uni-icons class="" color="#c8c8c8" type="arrowright"></uni-icons>
            </view>
        </view>
        <view class="contents">
            <view class="t">手机</view>
            <view class="">{{userInfo.mobilePhone}}</view>
        </view>
        <view class="contents">
            <view class="t">性别</view>
            <view class="">
                <radio-group class="Gender" @change="radioChange($event)">
                    <view class="nan">
                        <label class="gender-item">
                            <radio :checked="userInfoFrom.usersex==0" class="" color="#ff4643" value="0"></radio>
                            <view class="">男</view>
                        </label>
                    </view>
                    <view class="nan">
                        <label class="gender-item">
                            <radio :checked="userInfoFrom.usersex==1" class="" color="#ff4643" value="1"></radio>
                            <view class="">女</view>
                        </label>
                    </view>
                </radio-group>
            </view>
        </view>
        <view class="contents">
            <view class="t">出生日期</view>
            <picker class="" :end="endDate" fields="day" mode="date" :start="startDate" :value="userInfo.birthday" @change="bindDateChange($event)">
                <view class="name">
                    <text class="">{{userInfo.birthday?userInfo.birthday:'未设置'}}</text>
                    <uni-icons class="" color="#c8c8c8" type="arrowright"></uni-icons>
                </view>
            </picker>
        </view>
    </view>
    <view class="list">
        <view class="contents" @click="address($event)">
            <view class="t">收货地址管理</view>
            <view class="">
                <uni-icons class="" color="#c8c8c8" type="arrowright"></uni-icons>
            </view>
        </view>
    </view>
    <view class="bottombox" @click="layout($event)">退出当前账户</view>
    <u-popup borderRadius="20" class=" vue-ref" ref="uPopup" :maskCloseAble="false" mode="center" :value="showNameDialog" :vueSlots="['default']" @input="showNameDialog = $event">
        <view class="notice-box">
            <view class="t">提示</view>
            <u-input :border="true" class="" maxlength="12" placeholder="请输入昵称" style="width:60%;margin:20rpx auto;" type="nickname" :value="userInfoFrom.userName" @input="userInfoFrom.userName = $event"></u-input>
            <view class="b-box">
                <view class="bt" @click="e0($event)">取消</view>
                <view class="bt b2" @click="editUserInfo('name')">确认</view>
            </view>
        </view>
    </u-popup>
    <u-toast class=" vue-ref" ref="uToast"></u-toast>
    <avatar class=" vue-ref" ref="avatarInfo" style="position:absolute;bottom:0;" @upload="myUploadInfo()"></avatar>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
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
                uni.chooseImage({
                  count: 1,
                  sizeType: ["compressed"],
                  sourceType: ["album", "camera"],
                  success: function(t) {
                    var i = t.tempFilePaths;
                    e.editImage({
                      src: i[0],
                      success: function(e) {
                        uni.showLoading({
                          title: "加载中"
                        }), n.upLoadFile(e.tempFilePath).then((function(e) {
                          e && (uni.hideLoading(), n.userInfoFrom.uploadUrl = e, n.editUserInfo("headPic"))
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
                  if (!this.userInfoFrom.userName) return void this.$uni.showToast("请输入昵称");
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
                uni.showModal({
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
                uni.showLoading({
                  title: "上传中"
                }), t.upLoadFile(n).then((function(e) {
                  e && (uni.hideLoading(), t.userInfoFrom.uploadUrl = e, t.editUserInfo("headPic"))
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
                      console.log(n), uni.showModal({
                        content: n.data
                      }), uni.uploadFile({
                        url: getApp().globalData.requestUrl + "base/common/file/noLimitUpload",
                        filePath: t,
                        name: "file",
                        formData: {
                          file: n.data
                        },
                        success: function(t) {
                          var n = JSON.parse(t.data);
                          1 == n.code && n.data && n.data.fileUrl ? e(n.data.fileUrl) : (e(!1), i.$uni.showToast(n.msg))
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
</script>

<style scoped>
/* Reconstructed page stylesheet */
.bigbox{min-height:100vh}.bigbox,.up{background-color:#fff;padding:0 30rpx;width:100%}.up{align-items:center;display:-webkit-flex;display:flex;height:180rpx;justify-content:space-between;position:relative}.up .imgbox{border-radius:50%;height:120rpx;left:30rpx;position:absolute;top:30rpx;width:120rpx}.up .imgbox image{border-radius:50%;height:100%;width:100%}.up .text{color:#878787;font-family:PingFang-SC-Medium;font-size:30rpx}.list{background-color:#fff;margin-bottom:20rpx;width:100%}.list.listline{border-bottom:1px solid #e4e4e4;border-top:1px solid #e4e4e4}.list .contents{align-items:center;background-color:#fff;display:-webkit-flex;display:flex;height:120rpx;justify-content:space-between;width:100%}.list .contents .t{color:#333;font-size:30rpx}.list .contents view:nth-child(2){color:#aaa}.list .contents .Gender{align-items:center;display:-webkit-flex;display:flex}.list .contents .Gender .nan{margin-left:40rpx}.list .contents .Gender .nan .gender-item,.list .contents .name{align-items:center;display:-webkit-flex;display:flex}.list .contents .name{height:100%}.list .contents .name text{color:#878787;font-size:30rpx;line-height:88rpx}.list .contents view:nth-child(1){color:#333;font-family:PingFang-SC-Medium;font-size:30rpx}.list .contents view:nth-child(2){color:#878787;font-family:PingFang-SC-Medium;font-size:30rpx}.list .contents view:nth-child(2) .img{height:30rpx;width:30rpx}.list .contents:nth-last-child(1){border:0}.bottombox{align-items:center;background-color:#fff;border:1px solid #ff5414;border-radius:10rpx;bottom:50rpx;color:#ff5414;display:-webkit-flex;display:flex;font-family:PingFang-SC-Medium;font-size:26rpx;height:88rpx;justify-content:center;left:40rpx;position:fixed;width:670rpx}.notice-box{background-color:#fff;height:300rpx;padding:40rpx 40rpx 0;position:relative;width:650rpx}.notice-box .t{color:#303133;font-size:26rpx;font-weight:500;margin-bottom:20rpx;text-align:center;width:100%}.notice-box .b-box{bottom:0;box-shadow:0-1rpx 0 0#e3e3e3;display:-webkit-flex;display:flex;flex-direction:row;height:80rpx;left:0;position:absolute;width:100%}.notice-box .b-box .bt{box-sizing:border-box;color:#606266;cursor:pointer;flex:1;font-size:26rpx;height:80rpx;line-height:80rpx;text-align:center;width:50%}.notice-box .b-box .b2{border-left:1rpx solid #e3e3e3;color:#2979ff}
</style>
