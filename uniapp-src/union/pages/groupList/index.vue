<template>
<view class="feature-introduction">
    <uni-navbar :background="$root.a0" class="" color="#fff" :leftIconStyle="{color:'#fff'}" :title="$root.m0" type="transparentFixed"></uni-navbar>
    <view class="feature-content" :style="'padding-top:'+statusBarHeight+5+'px'+';'">
        <view class="feature-content-box">
            <view class="create-group-section">
                <view class="create-group-icon-wrapper">
                    <image alt class="create-group-icon" src="https://eshopfile.zhiyousx.com/176975521656296497.png"></image>
                    <view class="create-group-icon-bg">{{$root.m1}}</view>
                </view>
                <view class="create-group-text" @click="showCreateGroupPopup($event)">{{$root.m2}}</view>
            </view>
            <view class="divider-line">{{$root.m3}}</view>
            <view class="group-list-title-section">
                <view class="group-list-title">
                    <view class="title-text">{{$root.m4}}</view>
                    <image alt class="group-list-icon" mode="heightFix" src="https://eshopfile.zhiyousx.com/176975522479724647.png"></image>
                </view>
            </view>
            <view class="group-list-container">
                <view class="group-item" :key="index" v-for="(item, index) in list">
                    <view class="group-item-info">
                        <image class="title-icon" mode="aspectFill" :src="item.url"></image>
                        <view class="group-item-details">
                            <view class="group-item-name">{{item.name}}</view>
                            <view class="group-item-member-count">{{item.spot}}</view>
                            <view class="group-item-status">{{item.time}}</view>
                        </view>
                    </view>
                    <view class="group-item-actions">
                        <view class="group-item-primary-actions">
                            <view class="action-btn share-btn" @click="showSharePopup($event)">{{$root.m5}}</view>
                            <view class="action-btn enter-btn">{{$root.m6}}</view>
                        </view>
                        <view class="dissolve-btn">{{$root.m7}}</view>
                    </view>
                </view>
            </view>
        </view>
    </view>
    <uni-popup backgroundColor="transparent" class=" vue-ref" ref="popupShare" :vueSlots="['default']">
        <view class="share-content">
            <image alt class="share-bg" mode="widthFix" src="https://eshopfile.zhiyousx.com/176975738558095082.png"></image>
            <view class="code">
                <view class="share-content-title">
                    <image alt class="share-icon" mode="widthFix" :src="codeUrl"></image>
                </view>
                <view class="share-content-desc">{{$root.m8}}</view>
            </view>
        </view>
    </uni-popup>
    <uni-popup class=" vue-ref" ref="popupRemove" :vueSlots="['default']">
        <view class="popup-content">
            <view class="box">
                <image class="popup-img" mode="aspectFill" src="https://eshopfile.zhiyousx.com/176965670602878950.png"></image>
                <view class="popup-desc">{{$root.m9}}</view>
                <view class="btn-box">
                    <view class="btn1" @click="closePopup($event)">{{$root.m10}}</view>
                    <view class="btn" @click="submitPopup($event)">{{$root.m11}}</view>
                </view>
            </view>
        </view>
    </uni-popup>
    <uni-popup class=" vue-ref" ref="popupCreate" :vueSlots="['default']">
        <view class="create-content">
            <view class="popup-title">{{$root.m12}}</view>
            <image alt class="close-icon" mode="heightFix" src="https://eshopfile.zhiyousx.com/176975963918442547.png" @click="closeCreateGroupPopup($event)"></image>
            <view class="popup-input">
                <input class="uni-input" :placeholder="$root.m13" :placeholderStyle="{color:'rgba(0, 0, 0, 1)'}"></input>
            </view>
            <view class="popup-select" @click="showSelectPopup($event)">{{ codeName }}<image alt class="create-icon" src="https://eshopfile.zhiyousx.com/176975955835549173.png"></image>
            </view>
            <view class="btn-box">
                <view class="btn1" @click="closeCreateGroupPopup($event)">{{$root.m14}}</view>
                <view class="btn" @click="submitCreateGroupPopup($event)">{{$root.m15}}</view>
            </view>
        </view>
    </uni-popup>
    <uni-popup backgroundColor="transparent" class=" vue-ref" ref="popupSelect" type="bottom" :vueSlots="['default']">
        <view class="select-content">
            <view class="popup-title">{{$root.m16}}</view>
            <image alt class="close-icon" mode="heightFix" src="https://eshopfile.zhiyousx.com/176975963918442547.png" @click="closeSelectPopup($event)"></image>
            <view class="select-list">
                <view class="select-item" :key="index" v-for="(item, index) in listTeam">{{ item.name }}</view>
            </view>
        </view>
    </uni-popup>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          data: function() {
            return {
              list: [{
                url: "https://eshopfile.zhiyousx.com/176975695073872708.png",
                name: "组团名称",
                time: "2023-08-01",
                spot: "景点名称"
              }, {
                url: "https://eshopfile.zhiyousx.com/176975695073872708.png",
                name: "组团名称",
                time: "2023-08-01",
                spot: "景点名称"
              }, {
                url: "https://eshopfile.zhiyousx.com/176975695073872708.png",
                name: "组团名称",
                time: "2023-08-01",
                spot: "景点名称"
              }, {
                url: "https://eshopfile.zhiyousx.com/176975695073872708.png",
                name: "组团名称",
                time: "2023-08-01",
                spot: "景点名称"
              }, {
                url: "https://eshopfile.zhiyousx.com/176975695073872708.png",
                name: "组团名称",
                time: "2023-08-01",
                spot: "景点名称"
              }, {
                url: "https://eshopfile.zhiyousx.com/176975695073872708.png",
                name: "组团名称",
                time: "2023-08-01",
                spot: "景点名称"
              }, {
                url: "https://eshopfile.zhiyousx.com/176975695073872708.png",
                name: "组团名称",
                time: "2023-08-01",
                spot: "景点名称"
              }],
              listTeam: [{
                name: "西安市"
              }, {
                name: "西安市"
              }],
              statusBarHeight: "",
              language: "zh",
              codeUrl: "https://eshopfile.zhiyousx.com/176975759628556242.png",
              codeName: "西安市"
            }
          },
          onLoad: function() {
            this.$eventAnalyse.analyse({
              eventTag: "group_list_page_load",
              eventName: "组团列表页面加载",
              eventParams: {
                pagePath: "/union/pages/groupList/index",
                language: this.language
              }
            }), this.language = uni.getStorageSync("language") || "zh", this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight
          },
          methods: {
            showSharePopup: function() {
              this.$eventAnalyse.analyse({
                eventTag: "group_share_popup_click",
                eventName: "分享弹窗按钮点击",
                eventParams: {
                  language: this.language
                }
              }), this.$refs.popupShare.open()
            },
            enterGroup: function(t) {
              this.$eventAnalyse.analyse({
                eventTag: "group_enter_click",
                eventName: "进入组团详情页点击",
                eventParams: {
                  language: this.language
                }
              }), uni.navigateTo({
                url: "/union/pages/groupList/teamInformation?id=" + t.id || !1
              })
            },
            dissolveGroup: function(e) {
              this.$eventAnalyse.analyse({
                eventTag: "group_dissolve_click",
                eventName: "解散组团按钮点击",
                eventParams: {
                  language: this.language
                }
              }), this.$refs.popupRemove.open()
            },
            closePopup: function() {
              this.$eventAnalyse.analyse({
                eventTag: "group_dissolve_cancel_click",
                eventName: "取消解散组团按钮点击",
                eventParams: {
                  language: this.language
                }
              }), this.$refs.popupRemove.close()
            },
            submitPopup: function() {
              this.$eventAnalyse.analyse({
                eventTag: "group_dissolve_confirm_click",
                eventName: "确认解散组团按钮点击",
                eventParams: {
                  language: this.language
                }
              }), this.$refs.popupRemove.close()
            },
            showCreateGroupPopup: function() {
              this.$eventAnalyse.analyse({
                eventTag: "group_create_popup_click",
                eventName: "创建组团弹窗按钮点击",
                eventParams: {
                  language: this.language
                }
              }), this.$refs.popupCreate.open()
            },
            closeCreateGroupPopup: function() {
              this.$eventAnalyse.analyse({
                eventTag: "group_create_cancel_click",
                eventName: "取消创建组团按钮点击",
                eventParams: {
                  language: this.language
                }
              }), this.$refs.popupCreate.close()
            },
            submitCreateGroupPopup: function() {
              this.$eventAnalyse.analyse({
                eventTag: "group_create_confirm_click",
                eventName: "确认创建组团按钮点击",
                eventParams: {
                  language: this.language
                }
              }), this.$refs.popupCreate.close()
            },
            showSelectPopup: function() {
              this.$eventAnalyse.analyse({
                eventTag: "group_select_popup_click",
                eventName: "选择组团弹窗按钮点击",
                eventParams: {
                  language: this.language
                }
              }), this.$refs.popupSelect.open()
            },
            selectGroup: function(e) {
              this.$eventAnalyse.analyse({
                eventTag: "group_select_item_click",
                eventName: "选择组团项目点击",
                eventParams: {
                  language: this.language
                }
              }), this.codeName = e.name, this.$refs.popupSelect.close()
            },
            closeSelectPopup: function() {
              this.$eventAnalyse.analyse({
                eventTag: "group_select_cancel_click",
                eventName: "取消选择组团按钮点击",
                eventParams: {
                  language: this.language
                }
              }), this.$refs.popupSelect.close()
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.feature-introduction{background:linear-gradient(135deg,rgba(128,154,249,.5),rgba(174,227,236,.5));box-sizing:border-box;height:100vh;padding:calc(25px + 44rpx) 40rpx 40rpx;width:100%}.feature-content{height:calc(100vh - 148rpx);width:100%}.feature-content-box{display:-webkit-flex;display:flex;flex-direction:column;height:100%;width:100%}.feature-content-box .create-group-section{background:linear-gradient(273deg,#fff,#e6f2ff);border-image:linear-gradient(46deg,#fff,hsla(0,0%,100%,0))2 2;border-radius:20rpx 20rpx 0rpx 0rpx;justify-content:space-between;margin:0 30rpx;padding:0 40rpx;width:calc(100% - 60rpx)}.feature-content-box .create-group-section .create-group-icon-wrapper,.feature-content-box .create-group-section{align-items:center;display:-webkit-flex;display:flex}.feature-content-box .create-group-section .create-group-icon-wrapper .create-group-icon{height:112rpx;width:100rpx}.feature-content-box .create-group-section .create-group-icon-wrapper .create-group-icon-bg{color:rgba(0,0,0,.8);font-family:Source Han Sans SC;font-size:28rpx;font-weight:400}.feature-content-box .create-group-section .create-group-text{background:rgba(104,166,252,.1);border:2rpx solid #68a6fc;border-radius:40rpx 40rpx 40rpx 40rpx;color:#68a6fc;font-size:26rpx;font-weight:500;padding:12rpx 24rpx}.feature-content-box .divider-line{background:linear-gradient(77deg,#6585fa,#6ad5fe);border-radius:20rpx 20rpx 20rpx 20rpx;box-shadow:0rpx 4rpx 12rpx 0rpx rgba(25,97,156,.2),inset 0rpx 2rpx 2rpx 0rpx hsla(0,0%,100%,.2),0rpx -2rpx 16rpx 0rpx rgba(25,97,156,.2);color:#fff;font-size:26rpx;font-weight:400;line-height:44rpx;padding:22rpx 30rpx}.feature-content-box .group-list-title-section{margin-top:20rpx}.feature-content-box .group-list-title-section .group-list-title{position:relative}.feature-content-box .group-list-title-section .group-list-title .title-text{color:rgba(0,0,0,.8);font-size:32rpx;font-weight:500}.feature-content-box .group-list-title-section .group-list-title .group-list-icon{bottom:-10rpx;height:16rpx;left:0;position:absolute}.feature-content-box .group-list-container{flex:1;overflow:auto}.feature-content-box .group-list-container .group-item{align-items:center;background:hsla(0,0%,100%,.7);border-radius:20rpx 20rpx 20rpx 20rpx;box-shadow:0rpx 8rpx 12rpx 0rpx rgba(0,0,0,.05);box-sizing:border-box;display:-webkit-flex;display:flex;justify-content:space-between;margin-top:20rpx;padding:20rpx}.feature-content-box .group-list-container .group-item .group-item-info{align-items:center;display:-webkit-flex;display:flex;flex:1;gap:20rpx}.feature-content-box .group-list-container .group-item .group-item-info .title-icon{border-radius:50%;height:90rpx;width:90rpx}.feature-content-box .group-list-container .group-item .group-item-info .group-item-details{flex:1}.feature-content-box .group-list-container .group-item .group-item-info .group-item-details .group-item-name{color:#333;font-size:26rpx;font-weight:400;max-width:calc(100% - 30rpx);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.feature-content-box .group-list-container .group-item .group-item-info .group-item-details .group-item-member-count{color:#333;font-size:24rpx;font-weight:400;margin-top:4rpx;max-width:calc(100% - 30rpx);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.feature-content-box .group-list-container .group-item .group-item-info .group-item-details .group-item-status{color:rgba(0,0,0,.5);font-size:24rpx;font-weight:400;margin-top:4rpx}.feature-content-box .group-list-container .group-item .group-item-actions .group-item-primary-actions{align-items:center;display:-webkit-flex;display:flex;gap:20rpx;justify-content:space-between}.feature-content-box .group-list-container .group-item .group-item-actions .group-item-primary-actions .action-btn{background:#68a6fc;border-radius:40rpx 40rpx 40rpx 40rpx;color:#fff;font-size:24rpx;font-weight:400;padding:8rpx 24rpx}.feature-content-box .group-list-container .group-item .group-item-actions .dissolve-btn{border:2rpx solid #68b4fd;border-radius:40rpx 40rpx 40rpx 40rpx;color:#68a6fc;font-size:24rpx;font-weight:400;margin-top:18rpx;padding:8rpx 0;text-align:center;width:100%}.share-content{position:relative;width:80vw}.share-content .share-bg{width:100%}.share-content .code{bottom:40rpx;left:0;padding:72rpx 68rpx;position:absolute;width:100%}.share-content .code .share-content-title{display:-webkit-flex;display:flex;justify-content:center;width:100%}.share-content .code .share-content-title .share-icon{border-radius:20rpx 20rpx 20rpx 20rpx;width:60%}.share-content .code .share-content-desc{color:rgba(0,0,0,.8);font-family:Alibaba PuHuiTi;font-size:28rpx;font-weight:500;margin-top:32rpx}.share-content .code .share-content-desc .share-desc-text{color:#68a6fc}.popup-content{width:80vw}.popup-content .box{background:linear-gradient(180deg,#d0e7ff,#fff);border-radius:40rpx 40rpx 40rpx 40rpx;box-shadow:0rpx 6rpx 12rpx 0rpx rgba(0,0,0,.2);padding:40rpx}.popup-content .box .popup-img{height:116rpx;left:50%;position:absolute;top:0;transform:translate(-50%,-50%);width:116rpx}.popup-content .box .popup-desc{color:rgba(0,0,0,.7);font-family:Alibaba PuHuiTi;font-size:32rpx;font-weight:400;line-height:48rpx;margin-top:50rpx;text-align:center}.btn-box{display:-webkit-flex;display:flex;gap:20rpx;justify-content:center;margin-top:40rpx}.btn1{background:rgba(104,166,252,.1);border:2rpx solid #68a6fc;border-radius:60rpx 60rpx 60rpx 60rpx;box-sizing:border-box;color:#68a6fc}.btn,.btn1{font-size:28rpx;font-weight:400;padding:20rpx 24rpx;text-align:center;width:calc(50% - 10rpx)}.btn{background:linear-gradient(78deg,#6585fa,#6ad5fe);border-radius:60rpx 60rpx 60rpx 60rpx;color:#fff;font-family:Alibaba PuHuiTi}.create-content{background:linear-gradient(180deg,#d0e7ff,#fff);border-radius:40rpx 40rpx 40rpx 40rpx;box-shadow:0rpx 6rpx 12rpx 0rpx rgba(0,0,0,.2);box-sizing:border-box;padding:40rpx;position:relative;width:80vw}.create-content .popup-input{margin-top:32rpx}.create-content .popup-input,.create-content .popup-select{background:hsla(0,0%,100%,.7);border-radius:32rpx 32rpx 32rpx 32rpx;color:#000;padding:16rpx 30rpx}.create-content .popup-select{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;margin-top:20rpx}.create-icon{height:23rpx;width:23rpx}.uni-input::-webkit-input-placeholder{color:#000}.uni-input::placeholder{color:#000}.popup-title{color:rgba(0,0,0,.8);font-size:32rpx;font-weight:500;text-align:center}.close-icon{height:36rpx;position:absolute;right:40rpx;top:40rpx;width:36rpx}.select-content{background:linear-gradient(180deg,#d0e7ff,#fff);border-radius:40rpx 40rpx 0 0;box-shadow:0rpx 6rpx 12rpx 0rpx rgba(0,0,0,.2);box-sizing:border-box;padding:40rpx;position:relative;width:100%}.select-content .select-list .select-item{background-color:hsla(0,0%,100%,.5);border-radius:20rpx;color:#333;margin-top:20rpx;padding:12rpx 0;text-align:center}
</style>
