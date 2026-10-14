<template>
<view class="shop-list">
    <uni-navbar class="" type="transparentFixed" @click="openPopup()"></uni-navbar>
    <view class="unreal-header" :style="'opacity:'+opacity+';'+'padding:'+statusBarHeight+'px 96rpx 24rpx 24rpx'+';'">
        <view class="unreal-header-content nav-card" :style="'color:'+fontColor+';'">{{ title }}<image class="" src="https://eshopfile.zhiyousx.com/2023102716084018229.png"></image>
        </view>
    </view>
    <view class="header-bg" :style="'padding:'+statusBarHeight+'px 30rpx 24rpx 24rpx'+';'">
        <view class="nav-card" :style="'color:'+fontColor+';'">{{ title }}<image class="" src="https://eshopfile.zhiyousx.com/2023102716084018229.png"></image>
        </view>
        <view class="search-box">
            <view class="search">
                <u-icon class="" color="#808080" name="search" size="50"></u-icon>
                <input class="" confirmType="search" placeholder="搜索可用景区/影院/体验项等" :value="searchText" @change="handleChange($event)" @input="searchText = $event"></input>
            </view>
            <view class="map" @click="goMap($event)">
                <u-icon class="" color="#4E5969" name="map-fill" size="30"></u-icon>
                <text class="">地图</text>
            </view>
        </view>
    </view>
    <view class="shop-list-container" style="{top:`calc(${statusBarHeight}px + 120rpx)`};" v-if="$root.g0">
        <scroll-view class="" :scrollX="true">
            <view class="tab">
                <view :class="['',index===checkedTabIndex&&'checked']" :key="index" v-for="(item, index) in tabList">{{''+item.className}}<text class="drop"></text>{{item.detailNum+'家'}}</view>
            </view>
        </scroll-view>
        <view class="status-tab">
            <view :class="['',item.g1]" :key="id" v-for="(item, __i0__) in $root.l0">{{ item.name }}</view>
        </view>
        <block v-if="$root.g2">
            <view class="shop-item-m" :key="index" v-for="(item, index) in filterList">
                <shop-item class="" :info="item" :mapPage="1" :userYearCardId="currentId"></shop-item>
            </view>
        </block>
        <view class="no-page" v-else>
            <image class="" src="https://eshopfile.zhiyousx.com/2023110116325879617.png"></image>
            <view class="">暂无记录</view>
        </view>
    </view>
    <select-card class="" :currentId="currentId" :popupData="popupData" :show="selectCardShow" @updateShow="selectCardShow = $event" @change="changeCard()"></select-card>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
            name: "需预约",
            id: 0,
            filterFn: function(t) {
              return 1 === t.needCreateOrder
            }
          };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.tab{align-items:center;color:#222;display:-webkit-flex;display:flex;font-size:28rpx;font-weight:400;height:100rpx;justify-content:space-around;line-height:33rpx;padding:0 40rpx}.tab .checked{color:#222;font-size:34rpx;font-weight:700;line-height:40rpx;position:relative;text-shadow:0 2px 1px rgba(0,0,0,.08)}.tab .checked::after{background-image:linear-gradient(253deg,rgba(255,84,17,0),#ff5411);border-radius:50rpx 50rpx 50rpx 50rpx;bottom:-5px;content:"";height:16rpx;position:absolute;right:0;width:100%}.divider{border-bottom:1rpx solid rgba(0,0,0,.05);display:inline-block;margin:30rpx 0;width:100%}.divider[type="dashed"]{border-bottom:1rpx dashed rgba(0,0,0,.05)}.unreal-header{background:#fff;box-shadow:0 0 10px 3px rgba(0,0,0,.05);display:-webkit-flex;display:flex;left:0;opacity:0;overflow:hidden;position:fixed;top:0;transition:all .3s linear;width:100%;z-index:30}.unreal-header .unreal-header-content{height:80rpx}.desc-explain-title{color:rgba(0,0,0,.8);font-size:32rpx;font-weight:400;line-height:38rpx;margin-bottom:20rpx}.desc-explain-content{color:rgba(0,0,0,.7);font-size:26rpx;font-weight:400;line-height:40rpx}.red-btn{align-items:center;background:linear-gradient(253deg,#ff5413,#fc4a9b);border-radius:40rpx 40rpx 40rpx 40rpx;color:#fff;display:-webkit-flex;display:flex;font-size:30rpx;font-weight:600;height:80rpx;justify-content:center;width:100%}.upload-user .upload-user-item .u-form-item{line-height:0!important}.upload-user .upload-image .u-border-bottom:after{border-bottom-width:0!important}.font-24{color:rgba(0,0,0,.5);font-size:24rpx;font-weight:400}.font-26{color:rgba(0,0,0,.8);font-size:26rpx;font-weight:400}.font-32{color:#333;font-size:32rpx;font-weight:400}.font-30{color:rgba(0,0,0,.8);font-size:30rpx;font-weight:400}.no-page{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;height:70vh;margin-top:133rpx}.no-page image{height:322rpx;width:374rpx}.no-page view{color:rgba(0,0,0,.5);font-size:26rpx;font-weight:400;line-height:30rpx;margin-top:40rpx}.shop-list .header-bg{background:linear-gradient(180deg,#2b2725,#625d5c);height:380rpx;position:relative;transition:background-color .5s linear;z-index:2;z-index:90}.shop-list .unreal-header{z-index:92}.shop-list .nav-card{align-items:center;display:-webkit-flex;display:flex;font-size:34rpx;font-weight:500;height:85rpx;margin-left:70rpx}.shop-list .nav-card image{height:30rpx;margin-left:10rpx;width:30rpx}.shop-list .search-box{display:-webkit-flex;display:flex;justify-content:space-between;margin-top:32rpx}.shop-list .search-box .search{align-items:center;background:#fff;border-radius:40rpx 40rpx 40rpx 40rpx;display:-webkit-flex;display:flex;flex:1;height:80rpx;margin-left:6rpx;margin-right:10rpx;padding:24rpx}.shop-list .search-box .search input{margin-left:10rpx;width:100%}.shop-list .search-box .search input[type="text"]::-webkit-input-placeholder{color:rgba(0,0,0,.5);font-size:26rpx;font-style:italic;font-weight:400;text-align:center}.shop-list .search-box .search input[type="text"]::placeholder{color:rgba(0,0,0,.5);font-size:26rpx;font-style:italic;font-weight:400;text-align:center}.shop-list .search-box .map{align-items:center;background-image:url('https://eshopfile.zhiyousx.com/2023102810042666284.png');background-size:100% 100%;display:-webkit-flex;display:flex;height:80rpx;justify-content:center;width:180rpx}.shop-list .search-box .map text{color:rgba(0,0,0,.5);font-size:28rpx;font-weight:400;margin-left:10rpx}.shop-list-container{background:#fff;border-radius:20rpx 20rpx 0rpx 0rpx;position:absolute;top:315rpx;width:100%;z-index:91}.shop-list-container .tab{padding:0 0 0 30rpx;position:-webkit-sticky;position:sticky;top:100rpx;width:-webkit-fit-content;width:fit-content}.shop-list-container .tab .checked .drop{background:#000}.shop-list-container .tab .drop{align-content:center;background:#333;border-radius:50%;display:-webkit-flex;display:flex;height:6rpx;justify-content:center;margin:0 4rpx;overflow:hidden;width:6rpx}.shop-list-container .tab view{align-items:center;display:-webkit-flex;display:flex;margin-right:30rpx;white-space:nowrap}.shop-list-container .status-tab{display:-webkit-flex;display:flex;margin:20rpx 30rpx 40rpx}.shop-list-container .status-tab view{align-items:center;background:rgba(0,0,0,.05);border-radius:30rpx;color:#333;display:-webkit-flex;display:flex;font-size:24rpx;font-weight:400;height:56rpx;justify-content:center;margin-right:20rpx;padding:11rpx 20rpx}.shop-list-container .status-tab .checked{background:rgba(255,84,17,.2);color:#ff5411;font-size:26rpx;font-weight:700}.shop-list-container .shop-item-m:first-child{margin-top:40rpx}.shop-list-container .shop-item-m{margin:10rpx 20rpx}
</style>
