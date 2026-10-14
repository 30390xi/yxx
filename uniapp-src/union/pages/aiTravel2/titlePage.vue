<template>
<view class="container">
    <uni-navbar class="" title="AI旅行搭子" type="transparentFixed"></uni-navbar>
    <view class="form-card">
        <view class="form-card-title">
            <view class="form-card-title-text">{{ title }}</view>
            <view class="form-card-title-icon" @click="openEditTitle($event)">
                <image mode class="" src="https://eshopfile.zhiyousx.com/175670894463810613.png"></image>
            </view>
        </view>
        <view class="form-card-content">{{ travelContent }}</view>
    </view>
    <view class="form-btn" @click="goLoadPage()">开启生成攻略</view>
    <uni-popup class=" vue-ref" ref="editTitlePopup" type="center" :vueSlots="['default']">
        <view class="edit-title-popup">
            <view class="popup-title">标题编辑<image class="" src="https://eshopfile.zhiyousx.com/175706012529278173.png" @click="closeEditTitle($event)"></image>
            </view>
            <input class="popup-input" :maxlength="15" placeholder="请输入标题" :value="tempTitle" @input="tempTitle = $event; onTitleInput($event)" @blur="onTitleBlur($event)"></input>
            <view class="char-count">{{$root.g0+'/15'}}</view>
            <view class="popup-actions">
                <view class="popup-btn confirm" @click="confirmEditTitle($event)">确定</view>
            </view>
        </view>
    </uni-popup>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          name: "titlePage",
          data: function() {
            return {
              formData: null,
              title: "",
              tempTitle: ""
            }
          },
          computed: {
            travelContent: function() {
              return this.formData ? "".concat(this.formData.city).concat(this.formData.days, "天").concat(this.formData.days - 1, "晚，").concat(this.formData.adult > 0 ? "".concat(this.formData.adult, "成人") : "").concat(this.formData.children > 0 ? "".concat(this.formData.children, "儿童") : "").concat(this.formData.older > 0 ? "".concat(this.formData.older, "老人") : "", "，").concat(2 === this.formData.origin ? "外来游" : "本地游", "，").concat(1 === this.formData.budgetType ? "总预算" : "人均预算", "为").concat(this.formData.budget, "元").concat(this.formData.wantDO && this.formData.wantDO.length > 0 ? "，想体验" : "").concat((this.formData.wantDO || []).join("、"), "。") : ""
            }
          },
          onLoad: function() {
            if (this.formData = uni.getStorageSync("aiTravelFormData"), this.formData && this.formData.beginTime && this.formData.endTime) {
              var u = new Date(this.formData.beginTime),
                D = new Date(this.formData.endTime).getTime() - u.getTime();
              this.formData.days = Math.floor(D / 864e5) + 1
            }
            this.formData && (this.title = this.formData.city + this.formData.days + "日旅行计划", this.tempTitle = this.title)
          },
          methods: {
            hasEmoji: function(t) {
              return /(?:\uD83D[\uDE00-\uDE4F])|(?:\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])|(?:\uD83D[\uDE80-\uDEFF])|(?:\uD83C[\uDDE0-\uDDFF])|[\u2600-\u26FF]|[\u2700-\u27BF]|(?:\uD83E[\uDD00-\uDDFF])|(?:\uD83C[\uDC18-\uDCF5])|(?:\uD83C[\uDE00-\uDEFF])|(?:\uD83E[\uDE70-\uDEFF])|(?:\uD83C[\uDC04-\uDCCE])|(?:\uD83C[\uDCCF-\uDE51])|(?:\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])|(?:\uD83D[\uDE80-\uDEFF])|(?:\uD83D[\uDF00-\uDF7F])|(?:\uD83D[\uDF80-\uDFFF])|(?:\uD83E[\uDC00-\uDCFF])|(?:\uD83E[\uDD00-\uDDFF])|(?:\uD83E[\uDE00-\uDE6F])|(?:\uD83E[\uDE70-\uDEFF])|(?:\uD83E[\uDF00-\uDFFF])|(?:\uD83F[\uDC00-\uDCFF])|(?:\uD83F[\uDD00-\uDDFF])|(?:\uD83F[\uDE00-\uDEFF])|(?:\uD83F[\uDF00-\uDFFF])/g.test(t)
            },
            filterEmoji: function(t) {
              return t.replace(/(?:\uD83D[\uDE00-\uDE4F])|(?:\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])|(?:\uD83D[\uDE80-\uDEFF])|(?:\uD83C[\uDDE0-\uDDFF])|[\u2600-\u26FF]|[\u2700-\u27BF]|(?:\uD83E[\uDD00-\uDDFF])|(?:\uD83C[\uDC18-\uDCF5])|(?:\uD83C[\uDE00-\uDEFF])|(?:\uD83E[\uDE70-\uDEFF])|(?:\uD83C[\uDC04-\uDCCE])|(?:\uD83C[\uDCCF-\uDE51])|(?:\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])|(?:\uD83D[\uDE80-\uDEFF])|(?:\uD83D[\uDF00-\uDF7F])|(?:\uD83D[\uDF80-\uDFFF])|(?:\uD83E[\uDC00-\uDCFF])|(?:\uD83E[\uDD00-\uDDFF])|(?:\uD83E[\uDE00-\uDE6F])|(?:\uD83E[\uDE70-\uDEFF])|(?:\uD83E[\uDF00-\uDFFF])|(?:\uD83F[\uDC00-\uDCFF])|(?:\uD83F[\uDD00-\uDDFF])|(?:\uD83F[\uDE00-\uDEFF])|(?:\uD83F[\uDF00-\uDFFF])/g, "")
            },
            onTitleInput: function(t) {
              var u = t.detail.value,
                D = this.filterEmoji(u);
              this.tempTitle = D !== u ? D : u
            },
            onTitleBlur: function() {
              this.tempTitle = this.filterEmoji(this.tempTitle)
            },
            openEditTitle: function() {
              this.tempTitle = this.title, this.$refs.editTitlePopup.open()
            },
            closeEditTitle: function() {
              this.$refs.editTitlePopup.close()
            },
            confirmEditTitle: function() {
              var u = (this.tempTitle || "").trim();
              u ? u.length > 15 ? uni.showToast({
                title: "标题最多15个字",
                icon: "none"
              }) : this.hasEmoji(u) ? uni.showToast({
                title: "标题不支持表情符号",
                icon: "none"
              }) : (this.title = u, this.$refs.editTitlePopup.close()) : uni.showToast({
                title: "标题不能为空",
                icon: "none"
              })
            },
            goLoadPage: function() {
              var u = uni.getStorageSync("aiTravelFormData");
              u.travelTitle = this.title, uni.setStorageSync("aiTravelFormData", u), this.$eventAnalyse.analyse({
                eventTag: "aiTravel_form_submit",
                eventName: "旅行搭子表单提交",
                eventParams: JSON.stringify({
                  adult: u.adult,
                  children: u.children,
                  older: u.older,
                  budget: u.budget,
                  budgetType: u.budgetType,
                  origin: u.origin,
                  travelTitle: this.title
                })
              }), uni.navigateTo({
                url: "/union/pages/aiTravel2/loadPage"
              })
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.container{background-color:#fff;min-height:100vh;padding:200rpx 30rpx;width:100%}.form-btn{background:linear-gradient(90deg,#ad97ff,#d988ff);border-radius:64rpx;box-shadow:0rpx 8rpx 20rpx 0rpx rgba(128,86,255,.25);color:#fff;font-size:28rpx;height:80rpx;line-height:80rpx;margin-top:40rpx;text-align:center;width:100%}.form-card{background:#f8f6ff;border-radius:20rpx 20rpx 20rpx 20rpx;padding:20rpx;width:100%}.form-card .form-card-title{align-items:center;border-bottom:3rpx dashed silver;display:-webkit-flex;display:flex;height:100rpx;justify-content:space-between;padding-bottom:20rpx;width:100%}.form-card .form-card-title .form-card-title-text{color:rgba(0,0,0,.85);font-size:36rpx;font-weight:700}.form-card .form-card-title .form-card-title-icon{flex:none;height:60rpx;width:60rpx}.form-card .form-card-title .form-card-title-icon image{height:100%;width:100%}.form-card .form-card-content{color:rgba(0,0,0,.7);font-size:36rpx;line-height:50rpx;padding:20rpx 0;width:100%}.edit-title-popup{background:#fff;border-radius:16rpx;padding:30rpx;width:690rpx}.edit-title-popup .popup-title{border-bottom:2rpx solid #e5e6eb;color:#1c1c1c;font-size:32rpx;font-weight:700;height:80rpx;margin-bottom:40rpx;position:relative;text-align:center;width:100%}.edit-title-popup .popup-title image{height:32rpx;position:absolute;right:0;top:0;width:32rpx}.edit-title-popup .popup-input{background:rgba(0,0,0,.04);border-radius:64rpx 64rpx 64rpx 64rpx;color:#1c1c1c;font-size:28rpx;height:80rpx;padding:0 32rpx}.edit-title-popup .char-count{color:#999;font-size:24rpx;margin-top:10rpx;text-align:right}.edit-title-popup .popup-actions{display:-webkit-flex;display:flex;justify-content:flex-end;margin-top:40rpx}.edit-title-popup .popup-actions .popup-btn{background:linear-gradient(90deg,#ad97ff,#d988ff);border-radius:64rpx;box-shadow:0rpx 8rpx 20rpx 0rpx rgba(128,86,255,.25);font-size:28rpx;height:80rpx;line-height:80rpx;padding:0 24rpx;text-align:center;width:630rpx}.edit-title-popup .popup-actions .popup-btn.confirm{background:linear-gradient(90deg,#ad97ff,#d988ff);color:#fff}
</style>
