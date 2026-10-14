<template>
<view class="aboutBox">
    <rich-text class="vue-ref" ref="article" :nodes="aboutInfo.paramValue"></rich-text>
</view>
</template>

<script>
const t = uni;
export default {
  data: function() {
    return {
      aboutInfo: ""
    };
  },
  onLoad: function() {
    this.pageLoad();
  },
  methods: {
    pageLoad: function() {
      const e = this;
      this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/sysParam/ABOUT_US").then(function(t) {
        e.aboutInfo = t.data;
      });
    }
  }
};
</script>

<style scoped>
.aboutBox {
  padding: 30rpx;
  background-color: #fff;
  min-height: 100vh;
}
</style>
