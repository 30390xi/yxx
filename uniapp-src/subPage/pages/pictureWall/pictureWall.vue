<template>
<view class="pictureWall">
    <uni-navbar bgColor="#339A81" class="" type="fixed"></uni-navbar>
    <view class="container">
        <image class="headimg" src="https://eshopfile.zhiyousx.com/2022032811053297093.png"></image>
        <view class="buy flex" @click="toSpot($event)">了<view class="_br"></view>解<view class="_br"></view>更<view class="_br"></view>多</view>
        <view class="wall">
            <view :class="['uploadBox','flex','',imgurl?'reUpload':'']">
                <view class="flex">
                    <image class="" src="https://eshopfile.zhiyousx.com/2022032910330161250.png"></image>
                    <view class="uptext" v-if="!imgurl" @click="clk(0)">上传<view class="_br"></view>照片</view>
                    <view class="uptext" v-else @click="clk(0)">继续<view class="_br"></view>上传</view>
                </view>
            </view>
            <image class="userupload" :src="imgurl" v-if="imgurl"></image>
            <view class="img1 imgbox" v-if="recommendlist[0]">
                <image class="" mode="aspectFill" :src="recommendlist[0].splitPicUrl"></image>
                <text class="" v-if="recommendlist[0].nickName">{{'@'+recommendlist[0].nickName||''}}</text>
            </view>
            <view class="box1 flex" v-if="recommendlist[0]">
                <view class="box2 flex">
                    <view class="box2-top imgbox">
                        <image class="" mode="aspectFill" :src="recommendlist[1].splitPicUrl"></image>
                        <text class="" v-if="recommendlist[1].nickName">{{'@'+recommendlist[1].nickName||''}}</text>
                    </view>
                    <view class="box3 flex">
                        <view class="imgbox">
                            <image class="" mode="aspectFill" :src="recommendlist[2].splitPicUrl"></image>
                            <text class="" v-if="recommendlist[2].nickName">{{'@'+recommendlist[3].nickName||''}}</text>
                        </view>
                        <view class="imgbox">
                            <image class="" mode="aspectFill" :src="recommendlist[4].splitPicUrl"></image>
                            <text class="" v-if="recommendlist[4].nickName">{{'@'+recommendlist[4].nickName||''}}</text>
                        </view>
                    </view>
                </view>
                <view class="box1-right imgbox">
                    <image class="" mode="aspectFill" :src="recommendlist[3].splitPicUrl"></image>
                    <text class="" v-if="recommendlist[3].nickName">{{'@'+recommendlist[2].nickName}}</text>
                </view>
            </view>
            <view class="totalinfo" v-if="uploadnum&&uploadnum>0&&!imgurl">{{'共有'+uploadnum+'人已上传'}}</view>
        </view>
        <view class="recommend section flex">
            <image class="titleimg" mode="widthFix" src="https://eshopfile.zhiyousx.com/2022032814460018228.png"></image>
            <view class="monthdata">
                <view class="item" v-for="(item, index) in $root.l0">
                    <image class="mImg" :src="item.m0"></image>
                    <view class="infobox flex">
                        <view class="imgBox flex">
                            <image class="" mode="aspectFill" :src="option" v-if="i<4" v-for="(option, i) in item.splitPicUrlList"></image>
                        </view>
                        <text class="">{{item.num+'张'}}</text>
                        <uni-icons class="" color="#555555" size="12" type="arrowright"></uni-icons>
                    </view>
                </view>
            </view>
        </view>
        <view class="rule section flex">
            <image class="titleimg" mode="widthFix" src="https://eshopfile.zhiyousx.com/2022032817330713928.png"></image>
            <view class="content">
                <view class="">1、上传图片照片请包含人像，以更能体现动物园的动物、景色为宜；</view>
                <view class="">2、每月评选3位月度之星，可以获得动物园的精美文创，工作人员将与你联系；</view>
                <view class="">3、所有的月度之星，将有机会获得动物园随后活动的免费体验资格；</view>
                <view class="">4、所有上传的图片，均有机会登上动物园千人合影爱心照片墙，将在园内向游客展示；</view>
                <view class="">5、如不希望照片被选作精选展示或在动物园千人合影爱心照片墙展示，请联系游陕西平台删除；</view>
                <view class="">6、参与活动即视为同意秦岭野生动物园及游陕西使用该照片作为宣传使用，游陕西平台对此次活动拥有最终解释权。</view>
            </view>
        </view>
        <view class="logo flex">
            <image class="" mode="heightFix" src="https://eshopfile.zhiyousx.com/2022040110194010653.png" style="margin-right:20rpx;"></image>
            <image class="" mode="heightFix" src="https://eshopfile.zhiyousx.com/2022033110024287367.png"></image>
        </view>
    </view>
    <u-popup borderRadius="20" class="" mode="center" :value="showNotice" :vueSlots="['default']" @input="showNotice = $event">
        <view class="hasnotice">
            <view class="title">照片使用权协议</view>
            <view class="">1、上传图片照片请包含人像，以更能体现动物园的动物、景色为宜；</view>
            <view class="">2、每月评选3位月度之星，可以获得动物园的精美文创，工作人员将与你联系；</view>
            <view class="">3、所有的月度之星，将有机会获得动物园随后活动的免费体验资格；</view>
            <view class="">4、参与活动即视为同意秦岭野生动物园及游陕西使用该照片作为宣传使用，游陕西平台对此次活动拥有最终解释权。</view>
            <view class="close flex" @click="agree($event)">我已阅读并同意</view>
        </view>
    </u-popup>
    <avatar class=" vue-ref" ref="avatar" :pageType="pageType" style="position:absolute;bottom:0;" @upload="myUpload()"></avatar>
</view>

</template>

<script>
import avatar from "@/subPage/components/yq-avatar/yq-avatar.vue";

// Reconstructed Vue Component
const t = uni;
export default {
  components: {
    avatar
  },
        data: function() {
          return {
            imgurl: "",
            uploadnum: "",
            showNotice: !1,
            url: "",
            urls: [],
            recommendlist: {},
            monthlist: [],
            agreeMent: !1,
            pageType: "pictureWall"
          }
        },
        created: function() {
          this.getRecommend(), this.getMonthRecommend()
        },
        watch: {},
        onLoad: function(t) {
          this.imgurl = t.userpic || ""
        },
        methods: {
          myUpload: function(t) {
            this.$set(this.urls, t.index, t.path)
          },
          clk: function(t) {
            this.$util.isLogin() && (this.agreeMent || this.imgurl ? this.$refs.avatar.fChooseImg(t, {
              selWidth: "550upx",
              selHeight: "640upx",
              expWidth: "550upx",
              expHeight: "640upx"
            }) : this.showNotice = !0)
          },
          agree: function() {
            this.showNotice = !1, this.agreeMent = !0, this.$refs.avatar.fChooseImg(0, {
              selWidth: "550upx",
              selHeight: "640upx",
              expWidth: "550upx",
              expHeight: "640upx"
            })
          },
          getRecommend: function() {
            var t = this;
            this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/scenicSpotPicActiveRel/getMainPushPic", {
              scenicId: "1"
            }).then((function(n) {
              n.data.mainPushPicVoList && n.data.mainPushPicVoList[0] && (t.uploadnum = n.data.sort, t.recommendlist = n.data.mainPushPicVoList)
            }))
          },
          getMonthRecommend: function() {
            var t = this;
            this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/scenicSpotPicActiveRel/getMonthListScenicPic").then((function(n) {
              n.data && n.data[0] && (t.monthlist = n.data)
            }))
          },
          getmonthUrl: function(t) {
            return "https://eshopfile.zhiyousx.com/spotwall/m".concat(new Date(t.upMonth).getMonth() + 1, ".png")
          },
          toSpot: function() {
            this.$navigateTo({
              url: "/pages/spotDetailNew/spotDetailNew?spotId=1320579064720941121"
            })
          },
          viewmore: function(t) {
            this.$navigateTo({
              url: "/subPage/pages/monthposter/monthposter?m=" + t.upMonth + "&source=pictureWall"
            })
          }
        }
      };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.pictureWall .container{background:linear-gradient(180deg,#339a81,#f0fbc4);min-height:100vh;padding-bottom:74rpx;position:relative}.pictureWall .flex{display:-webkit-flex;display:flex}.pictureWall .buy{align-items:center;background:#fd881c;border-radius:30rpx 0 0 30rpx;box-shadow:inset 0 10rpx 20rpx 1px hsla(0,0%,100%,.5),0 2rpx 10rpx 1px rgba(0,21,210,.2),0-2px 10rpx 1rpx hsla(0,0%,100%,.2),inset 0-4rpx 10rpx 1rpx rgba(63,58,186,.5);color:#fff;flex-direction:column;font-size:26rpx;height:160rpx;justify-content:center;position:absolute;right:0;top:20rpx;width:70rpx}.pictureWall .headimg{height:332rpx;margin-left:36rpx;width:714rpx}.pictureWall .hasnotice{overflow:hidden;padding:0 50rpx 48rpx 64rpx;width:640rpx}.pictureWall .hasnotice .title{font-size:36rpx;font-weight:700;margin:66rpx 0 36rpx;text-align:center}.pictureWall .hasnotice .scontent view{color:#4f4f4f;font-size:24rpx;line-height:50rpx;margin-bottom:6rpx}.pictureWall .hasnotice .close{align-items:center;background:#fa8e10;border-radius:70rpx;color:#fff;font-size:28rpx;height:80rpx;justify-content:center;margin:50rpx auto 0;text-align:center;width:360rpx}.pictureWall .wall{background:hsla(0,0%,100%,.1);border-radius:50rpx;box-shadow:0 4rpx 30rpx 1rpx rgba(69,255,166,.2),0rpx 0rpx 4rpx 1rpx #fff,inset 0 0 40rpx 1rpx rgba(0,152,97,.7);height:790rpx;margin:-135rpx 30rpx 0;padding:40rpx 40rpx 24rpx;position:relative;width:690rpx;z-index:2}.pictureWall .wall .userupload{border-radius:20rpx;height:670rpx;left:40rpx;position:absolute;top:40rpx;width:610rpx;z-index:5}.pictureWall .wall .uploadBox{background:hsla(0,0%,100%,.3);border-radius:100%;box-shadow:inset 0 20rpx 30rpx 1rpx hsla(0,0%,100%,.2),0rpx 20rpx 30rpx 1rpx rgba(0,53,15,.2),0rpx -20rpx 30rpx 1rpx hsla(0,0%,100%,.2),inset 0rpx -10rpx 30rpx 1rpx rgba(17,180,102,.5);height:190rpx;left:250rpx;overflow:hidden;position:absolute;top:235rpx;width:190rpx;z-index:6}.pictureWall .wall .uploadBox.reUpload{bottom:-25rpx;top:auto}.pictureWall .wall .uploadBox::before{backdrop-filter:blur(4px);bottom:0;content:"";left:0;margin:-30px;position:absolute;right:0;top:0;z-index:-1}.pictureWall .wall .uploadBox .flex{align-items:center;height:100%;justify-content:center;position:relative;width:100%}.pictureWall .wall .uploadBox .flex .uptext{color:#fff;font-size:28rpx;font-weight:800;position:absolute}.pictureWall .wall .uploadBox .flex image{height:136rpx;width:136rpx}.pictureWall .wall .uploadBox .flex .upimage{height:100%;left:0;position:absolute;top:0;width:100%}.pictureWall .wall .totalinfo{color:#447d5e;font-size:24rpx;margin-top:24rpx;text-align:center}.pictureWall .wall .box1{height:358rpx;justify-content:space-between;margin-top:11rpx}.pictureWall .wall .box1 .box1-right{height:100%;width:274rpx}.pictureWall .wall .box1 .box2{flex-direction:column;height:100%;justify-content:space-between;width:326rpx}.pictureWall .wall .box1 .box2 .box2-top{height:163rpx;width:100%}.pictureWall .wall .box1 .box2 .box3{height:185rpx;justify-content:space-between;margin-top:10rpx;width:100%}.pictureWall .wall .box1 .box2 .box3 view{height:100%;width:158rpx}.pictureWall .wall .imgbox{position:relative}.pictureWall .wall .imgbox text{bottom:6rpx;color:#fff;font-size:22rpx;left:14rpx;position:absolute;text-shadow:0 2px 2px rgba(0,0,0,.7);z-index:3}.pictureWall .wall .imgbox image{border-radius:20rpx;height:100%;width:100%}.pictureWall .wall .img1{height:301rpx;width:610rpx}.pictureWall .section{margin-top:10rpx}.pictureWall .section .titleimg{width:382rpx}.pictureWall .recommend{align-items:center;flex-direction:column}.pictureWall .recommend .monthdata{padding:0 56rpx;width:100%}.pictureWall .recommend .monthdata .item{height:88rpx;margin-bottom:30rpx;padding:18rpx 0 0 14rpx;position:relative;width:100%}.pictureWall .recommend .monthdata .item .mImg{height:60rpx;left:0;position:absolute;top:0;width:230rpx;z-index:2}.pictureWall .recommend .monthdata .item .infobox{align-items:center;background:#fff;border-radius:50rpx;height:70rpx;justify-content:flex-end;padding-right:33rpx;position:relative;width:100%}.pictureWall .recommend .monthdata .item .infobox text{color:#555;font-size:24rpx}.pictureWall .recommend .monthdata .item .infobox .imgBox{bottom:21rpx;height:60rpx;justify-content:space-between;left:227rpx;position:absolute;width:264rpx}.pictureWall .recommend .monthdata .item .infobox .imgBox image{border-radius:10rpx;height:60rpx;width:60rpx}.pictureWall .rule{align-items:center;flex-direction:column;margin:0 30rpx}.pictureWall .rule .content{background:hsla(0,0%,100%,.1);border-radius:50rpx;box-shadow:0 4px 30px 1px rgba(69,255,166,.2),0 0 4px 1px #fff,inset 0 0 40px 1px rgba(0,152,97,.7);padding:36rpx 40rpx 60rpx 50rpx;width:690rpx}.pictureWall .rule .content view{color:#444;font-size:28rpx;line-height:50rpx}.pictureWall .logo{align-items:center;justify-content:center;margin-top:40rpx}.pictureWall .logo image{height:50rpx}
</style>
