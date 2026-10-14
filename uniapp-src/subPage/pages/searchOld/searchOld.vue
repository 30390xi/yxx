<template>
<view class="">
    <view class="search-box">
        <u-search :actionStyle="{color:'#ff4643'}" actionText="取消" :animation="true" class="" :focus="true" maxlength="15" placeholder="搜索商品" :value="keyword" v-if="focusStatus" @search="doSearch(keyword)" @custom="doCustom()" @input="keyword = $event"></u-search>
    </view>
    <view class="search-keyword">
        <scroll-view class="keyword-box" :scrollY="true">
            <view class="keyword-block" v-if="$root.g0>0">
                <view class="keyword-list-header">
                    <view class="">历史搜索</view>
                    <uni-icons class="" color="#878787" size="20" type="trash" @click="oldDelete()"></uni-icons>
                </view>
                <view class="keyword">
                    <view class="" :key="index" v-for="(keyword, index) in oldKeywordList">{{keyword}}</view>
                </view>
            </view>
        </scroll-view>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          data: function() {
            return {
              sellerId: "",
              keyword: "",
              oldKeywordList: [],
              focusStatus: !0,
              couponId: "",
              quota: "",
              threshold: ""
            }
          },
          onLoad: function(t) {
            t.sellerId && (this.sellerId = t.sellerId), t.couponId && (this.couponId = t.couponId), t.threshold && (this.threshold = t.threshold), t.quota && (this.quota = t.quota), this.init()
          },
          onShow: function() {
            this.focusStatus = !0, this.keyword = ""
          },
          methods: {
            init: function() {
              this.loadOldKeyword()
            },
            loadOldKeyword: function() {
              var e = this;
              t.getStorage({
                key: "OldKeys",
                success: function(t) {
                  var o = JSON.parse(t.data);
                  e.oldKeywordList = o
                }
              })
            },
            oldDelete: function() {
              var e = this;
              uni.showModal({
                content: "确定清除历史搜索记录？",
                success: function(o) {
                  o.confirm ? (e.oldKeywordList = [], t.removeStorage({
                    key: "OldKeys"
                  })) : o.cancel && console.log("用户点击取消")
                }
              })
            },
            doSearch: function(t) {
              this.keyword = t || "", this.keyword && this.saveKeyword(t), this.sellerId ? this.$navigateTo({
                url: "/subPage/pages/storeshop/storeshop?keyword=" + t + "&sellerId=" + this.sellerId
              }) : this.couponId ? this.$navigateTo({
                url: "/subPage/pages/discountsProductList/discountsProductList?couponId=" + this.couponId + "&threshold=" + this.threshold + "&quota=" + this.quota + "&keyword=" + t
              }) : this.$navigateTo({
                url: "/subPage/pages/goodslist/goodslist?keyword=" + t
              }), this.focusStatus = !1
            },
            doCustom: function() {
              this.$util.goBack()
            },
            saveKeyword: function(e) {
              var o = this;
              t.getStorage({
                key: "OldKeys",
                success: function(n) {
                  var s = JSON.parse(n.data),
                    i = s.indexOf(e); - 1 == i || s.splice(i, 1), s.unshift(e), s.length > 10 && s.pop(), t.setStorage({
                    key: "OldKeys",
                    data: JSON.stringify(s)
                  }), o.oldKeywordList = s
                },
                fail: function(n) {
                  var s = [e];
                  t.setStorage({
                    key: "OldKeys",
                    data: JSON.stringify(s)
                  }), o.oldKeywordList = s
                }
              })
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.search-box{padding:0 30rpx}.search-keyword{width:100%}.search-keyword .keyword-box{border-radius:20rpx 20rpx 0 0;height:calc(100vh - 110rpx)}.search-keyword .keyword-box .keyword-block{padding:0 30rpx}.search-keyword .keyword-box .keyword-block .keyword-list-header{color:#333;display:-webkit-flex;display:flex;font-size:27rpx;justify-content:space-between;margin:40rpx 0 20rpx}.search-keyword .keyword-box .keyword-block .keyword-list-header image{height:40rpx;width:40rpx}.search-keyword .keyword-box .keyword-block .keyword{display:-webkit-flex;display:flex;flex-flow:wrap;justify-content:flex-start}.search-keyword .keyword-box .keyword-block .hide-hot-tis,.search-keyword .keyword-box .keyword-block .keyword>view{color:#6b6b6b;display:-webkit-flex;display:flex;font-size:28rpx;justify-content:center}.search-keyword .keyword-box .keyword-block .keyword>view{align-items:center;background-color:#f2f2f2;border-radius:60rpx;height:60rpx;margin:10rpx 20rpx 10rpx 0;padding:0 20rpx}
</style>
