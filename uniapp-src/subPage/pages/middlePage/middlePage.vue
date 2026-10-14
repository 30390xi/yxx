<template>
<view class="container"></view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          onLoad: function(e) {
            "miniProgram" === e.type ? n.navigateToMiniProgram({
              appId: e.appId ? e.appId : "wxf2cca76ae0520e33",
              path: e.path ? e.path : "",
              success: function(e) {
                n.setStorage({
                  key: "otherMiniprogramIsBack",
                  data: {
                    isBack: !0
                  },
                  success: function() {}
                })
              },
              fail: function(e) {
                uni.navigateBack()
              }
            }) : uni.navigateBack()
          },
          onShow: function() {
            uni.getStorageSync("otherMiniprogramIsBack") && (uni.removeStorageSync("otherMiniprogramIsBack"), uni.navigateBack())
          },
          onReady: function() {},
          onPageScroll: function(n) {},
          data: function() {
            return {}
          },
          methods: {}
        };
</script>
