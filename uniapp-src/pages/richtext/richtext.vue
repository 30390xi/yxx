<template>
<view class="">
    <view class="richText">
        <u-parse class=" vue-ref" ref="article" :html="linkUrl" :lazyLoad="true" :tagStyle="parseStyle"></u-parse>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          data: function() {
            return {
              advertId: "",
              linkUrl: "",
              parseStyle: {
                p: "word-break: break-all;"
              }
            }
          },
          onLoad: function(e) {
            var a = this;
            if (e.id && e.mapId) return this.id = e.id, this.mapId = e.mapId, void this.$uniApi.dataRequestNoLoading("get", "base/app/v1/travelMap/getPointsClassify", {
              mapId: this.mapId
            }).then((function(e) {
              if (1 == e.code) {
                a.recommends = e.data.recommend || [];
                var n = a.recommends.find((function(t) {
                  return t.id == a.id
                }));
                if (n) {
                  uni.setNavigationBarTitle({
                    title: n.name
                  });
                  var i = JSON.parse(n.jumpParams);
                  a.linkUrl = i.linkUrl
                }
              } else a.$uni.showToast(e.msg)
            }));
            e.advertId && (this.advertId = e.advertId), e.title ? uni.setNavigationBarTitle({
              title: e.title
            }) : (e.type = "none") ? uni.setNavigationBarTitle({
              title: ""
            }) : uni.setNavigationBarTitle({
              title: "内容"
            }), this.pageLoad()
          },
          methods: {
            pageLoad: function() {
              var e = this;
              this.advertId ? this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/advert/" + this.advertId).then((function(t) {
                1 === t.code && (e.linkUrl = t.data.linkUrl)
              })) : this.linkUrl = uni.getStorageSync("richtext")
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.richText{padding:20rpx}
</style>
