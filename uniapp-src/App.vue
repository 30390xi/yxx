<script>
export default {
  globalData: {
    requestUrl: "https://eshopapi.zhiyousx.com/",
    jumpPage: "",
    templePage: "",
    pathType: 0,
    cityId: "",
    version: "v2.6.2",
    showvideo: true,
    photoWallScenicId: "1516616676576112642",
    shareimg: "https://eshopfile.zhiyousx.com/2021092616084546112.jpg",
    httpList: {},
    StatusBar: 0,
    CustomBar: 0,
    Custom: null,
    appVersion: "1.8.1",
    isConnected: true
  },
  onLaunch: function(options) {
    console.log("App Launch");
    const sys = uni.getSystemInfoSync();
    this.globalData.StatusBar = sys.statusBarHeight;
    // 获取微信胶囊按钮位置
    // #ifdef MP-WEIXIN
    const menuButton = uni.getMenuButtonBoundingClientRect();
    this.globalData.Custom = menuButton;
    this.globalData.CustomBar = menuButton.bottom + menuButton.top - sys.statusBarHeight;
    // #endif

    // 监听网络状态
    uni.onNetworkStatusChange((res) => {
      this.globalData.isConnected = res.isConnected;
      if (!res.isConnected) {
        uni.showToast({
          title: "当前网络不可用",
          icon: "none"
        });
      }
    });
  },
  onShow: function(options) {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
    if (this.$eventAnalyse && this.$eventAnalyse.subData) {
      this.$eventAnalyse.subData();
    }
  }
};
</script>

<style>
/* 全局基础样式 */
page {
  background-color: #f7f8fa;
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Segoe UI, Arial, Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei", sans-serif;
  color: #333333;
}

view, text, image, scroll-view {
  box-sizing: border-box;
}

.singleLineText {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.multilineText2 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.grayFilter {
  filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
}
</style>
