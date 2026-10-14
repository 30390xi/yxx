<template>
<view class="historyList">
    <view class="photo-count">
        <view class="photo-title">
            <image alt class="" src="https://eshopfile.zhiyousx.com/174530901418030873.png?imageView2/3/w/214/h/85"></image>
        </view>
        <view class="photo-table">
            <scroll-view class="photo-list" lowerThreshold="50" :scrollY="true" @scrolltolower="scrolltolower($event)">
                <view class="photo-list-item" :key="i" v-for="(el, i) in photoList">
                    <view class="photo-time">{{el.createTime}}</view>
                    <view class="" style="position:relative;">
                        <image alt class="photo-time-image" mode="aspectFill" :src="el.imageUrl"></image>
                        <view class="loading-box" :style="'background-color:'+(show?'rgba(0, 0, 0, .4)':'none')+';'" v-if="!el.video">
                            <loading class="" v-if="el.status==3||el.status==1"></loading>
                            <view class="title" v-if="el.status==3||el.status==1">生成中...</view>
                            <view class="title1" v-else>生成失败，请重试</view>
                        </view>
                    </view>
                </view>
                <view class="loadMore">
                    <u-loadmore bgColor="translate" class="" color="#333333" iconColor="#ccc" :status="loadMore"></u-loadmore>
                </view>
            </scroll-view>
        </view>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
            components: {
              loading: function() {
                n.e("union/pages/aiVideo/component/loading").then(function() {
                  return resolve(n("9ae6"))
                }.bind(null, n)).catch(n.oe)
              }
            },
            data: function() {
              return {
                photoList: [],
                finished: !1,
                page: 1,
                loadMore: "loading"
              }
            },
            onShow: function() {
              this.pageLoad()
            },
            methods: {
              goView: function(e) {
                2 != e.status && uni.navigateTo({
                  url: "/union/pages/aiVideo/loadPage?id=" + e.id + "&imageName=" + e.imageName + "&moldId=" + e.moldId + "&source=3"
                })
              },
              scrolltolower: function() {
                "loadmore" === this.loadMore && this.pageLoad()
              },
              pageLoad: function() {
                var e = this;
                this.loadMore = "loading";
                var n = {
                  openId: uni.getStorageSync("wxopenid"),
                  pageOn: this.page,
                  pageSize: 5
                };
                this.$uniApi.dataRequestNoLoading("GET", "program/queryByOpenId", n, 1, t.AIVIDEO_API_BASE_URL).then((function(o) {
                  if (1 === o.code) {
                    var n = o.data.records || [];
                    o.data.total > 0 ? (1 === o.data.current ? e.photoList = n : e.photoList = e.photoList.concat(n), o.data.current < o.data.pages ? (e.page = e.page + 1, e.loadMore = "loadmore") : e.loadMore = "nomore") : (e.loadMore = "nomore", e.photoList = [])
                  } else e.$uni.showToast(o.msg || "加载失败"), e.finished = !0
                })).catch((function(o) {
                  e.$uni.showToast("加载失败")
                })).finally((function() {}))
              }
            }
          };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.historyList{background:url('https://eshopfile.zhiyousx.com/174530874192506196.png')no-repeat 50%;background-size:cover;height:100vh;padding:40rpx 20rpx;width:100vw}.historyList .photo-count{background-image:url('https://eshopfile.zhiyousx.com/174539956029153379.png');background-repeat:no-repeat;background-size:100% 100%;height:100%;width:100%}.historyList .photo-count .photo-title{margin-bottom:10rpx;text-align:center;width:100%}.historyList .photo-count .photo-title image{height:159rpx;margin-left:80rpx;margin-top:25rpx;width:408rpx}.historyList .photo-table{height:calc(100% - 250rpx);overflow:auto}.historyList .photo-list{box-sizing:border-box;height:100%;overflow:hidden;padding:20rpx 46rpx;text-align:left;width:100%}.historyList .photo-list .photo-list-item{font-size:0;margin-bottom:40rpx}.historyList .photo-list .photo-list-item .photo-time{color:#333;font-family:Source Han Sans CN;font-size:28rpx;font-style:normal;font-weight:400;line-height:40rpx;margin-bottom:8rpx;text-align:left;text-transform:none}.historyList .photo-list .photo-list-item image{-webkit-user-drag:none;border-radius:12rpx;height:600rpx;object-fit:cover;pointer-events:none;user-select:none;width:100%}.photo-table{background-color:initial;height:calc(100% - 332rpx);overflow:auto}.photo-table :deep(.van-list),.photo-table :deep(.van-pull-refresh){background-color:initial}:deep(.van-list__finished-text),:deep(.van-loading__text){font-size:24rpx}.loading-box{background-color:rgba(0,0,0,.4);border-radius:12rpx;height:600rpx;left:0;position:absolute;top:0;width:100%;z-index:11}.loading-box .loading,.loading-box .title1{left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);z-index:11}.loading-box .title,.loading-box .title1{color:#fff;font-family:Source Han Sans SC;font-size:24rpx;font-style:normal;font-weight:400;text-align:center;text-transform:none}.loading-box .title{left:50%;position:absolute;top:calc(50% + 60rpx);transform:translate(-50%,-50%);z-index:11}
</style>
