<template>
<view class="uni-goods-nav">
    <view class="uni-tab__seat"></view>
    <view class="uni-tab__cart-box flex">
        <view class="flex uni-tab__cart-sub-left">
            <view class="flex uni-tab__cart-button-left uni-tab__shop-cart" :key="index" v-for="(item, index) in options">
                <view class="uni-tab__icon">
                    <image class="image" mode="widthFix" :src="item.icon"></image>
                </view>
                <text class="uni-tab__text" style="font-size:20rpx;">{{item.text}}</text>
                <view class="flex uni-tab__dot-box">
                    <text :class="['uni-tab__dot','','',item.info>9?'uni-tab__dots':'']" :style="'background-color:'+(item.infoBackgroundColor?item.infoBackgroundColor:'#ff0000')+';'+'color:'+(item.infoColor?item.infoColor:'#fff')+';'" v-if="item.info">{{item.info}}</text>
                </view>
            </view>
        </view>
        <view :class="['flex','uni-tab__cart-sub-right','','',fill?'uni-tab__right':'']">
            <view class="flex uni-tab__cart-button-right" :style="'background-color:'+item.backgroundColor+';'+'color:'+item.color+';'+'background-image:'+item.backgroundImage+';'" :key="index" v-for="(item, index) in buttonGroup">
                <text class="uni-tab__cart-button-right-text" :style="'font-size:26rpx;'+'color:'+item.color+';'">{{item.text}}</text>
            </view>
        </view>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          name: "UniGoodsNav",
          components: {
            uniIcons: function() {
              Promise.all([t.e("common/vendor"), t.e("components/uni-icons/uni-icons")]).then(function() {
                return resolve(t("365b"))
              }.bind(null, t)).catch(t.oe)
            }
          },
          props: {
            options: {
              type: Array,
              default: function() {
                return [{
                  icon: "shop",
                  text: "店铺"
                }, {
                  icon: "cart",
                  text: "购物车"
                }]
              }
            },
            buttonGroup: {
              type: Array,
              default: function() {
                return [{
                  text: "加入购物车",
                  backgroundColor: "#ffa200",
                  backgroundImage: "",
                  color: "#fff"
                }, {
                  text: "立即购买",
                  backgroundColor: "#ff0000",
                  backgroundImage: "",
                  color: "#fff"
                }]
              }
            },
            fill: {
              type: Boolean,
              default: !1
            }
          },
          methods: {
            onClick: function(n, o) {
              this.$emit("click", {
                index: n,
                content: o
              })
            },
            buttonClick: function(o, t) {
              n.report && n.report(t.text, t.text), this.$emit("buttonClick", {
                index: o,
                content: t
              })
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.flex{display:-webkit-flex;display:flex;flex-direction:row}.uni-goods-nav{display:-webkit-flex;display:flex;flex:1;flex-direction:row}.uni-tab__cart-box{background-color:#fff;flex:1;height:50px;z-index:900}.uni-tab__cart-sub-left{padding:0 5px;position:relative}.uni-tab__cart-sub-right{flex:1}.left_share{bottom:0;left:0;opacity:0;position:absolute;right:0;top:0}.uni-tab__right{border-radius:100px;margin:5px 10px 5px 0;overflow:hidden}.uni-tab__cart-button-left{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;justify-content:center;margin:0 10px;position:relative}.image,.uni-tab__icon{height:18px;width:18px}.uni-tab__text{color:#646566;font-size:24rpx;margin-top:3px}.uni-tab__cart-button-right{align-items:center;display:-webkit-flex;display:flex;flex:1;flex-direction:column;justify-content:center}.uni-tab__cart-button-right-text{color:#fff;font-size:28rpx}.uni-tab__cart-button-right:active{opacity:.7}.uni-tab__dot-box{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;justify-content:center;position:absolute;right:-2px;top:2px}.uni-tab__dot{background-color:red;color:#fff;font-size:12px;line-height:15px;text-align:center}.uni-tab__dot,.uni-tab__dots{border-radius:15px;padding:0 4px}.uni-tab__color-y{background-color:#ffa200}.uni-tab__color-r{background-color:red}
</style>
