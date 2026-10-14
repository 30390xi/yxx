<template>
<view>
    <uni-navbar type="transparentFixed"></uni-navbar>
    <web-view :src="urlSrc" :webviewStyles="webviewStyles"></web-view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
        data: function() {
          return {
            urlSrc: "",
            webviewStyles: {
              progress: {
                color: "#ff4643"
              }
            },
            shareConfigNot: [],
            mapDetail: {},
            mapId: ""
          }
        },
        onLoad: function(t) {
          if (t.id) {
            this.mapId = t.id, this.getPointsClassify();
            var a = "https://eshop.zhiyousx.com/emap/?id=".concat(t.id, "&formType=").concat(t.formType);
            this.urlSrc = a
          }
        },
        onShareAppMessage: function(t) {
          return {
            title: this.mapDetail.shareText || this.mapDetail.name,
            imageUrl: this.mapDetail.shareImg || "",
            path: this.$util.setShareUrl("/union/pages/touristMap/map?id=".concat(this.mapId))
          }
        },
        methods: {
          getPointsClassify: function() {
            var t = this;
            this.$uniApi.dataRequestNoLoading("get", "base/app/v1/travelMap/getPointsClassify", {
              mapId: this.mapId
            }).then((function(a) {
              1 == a.code && (t.mapDetail = a.data.map)
            }))
          }
        }
      };
</script>
