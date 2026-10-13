// Extracted from subPage/pages/preview/preview.js; webpack module "0922".
// Compiled code for analysis; not an original source file.
module.exports = {
    "0922": function(e, t, n) {
      (function(e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var n = {
          data: function() {
            return {
              page: 1,
              loadMore: "loading",
              list: [{
                name: "图片"
              }, {
                name: "视频"
              }, {
                name: "相关"
              }],
              list2: [{
                name: "图片"
              }, {
                name: "相关"
              }],
              current: 0,
              dataList: [],
              activeStyle: {
                "font-weight": "bold",
                "font-size": "32rpx"
              },
              barStyle: {
                background: "linear-gradient(56deg, #FC4A9E 0%, #FF5411 100%)",
                "border-radius": "8px",
                position: "absolute",
                bottom: "18rpx"
              },
              resourcesType: 1,
              showScreen: !1,
              background: ["color1", "color2", "color3"],
              indicatorDots: !0,
              autoplay: !0,
              showVideo: getApp().globalData.showvideo,
              interval: 2e3,
              duration: 500,
              swiperCurrent: 1,
              swiperLenght: 0,
              currentSwiper: 0,
              statusBarHeight: 0,
              navbarH: 60
            }
          },
          onLoad: function(t) {
            this.statusBarHeight = e.getSystemInfoSync().statusBarHeight, this.dataList = e.getStorageSync("mediaList"), this.swiperLenght = this.dataList.length, this.index = Number(t.index), this.swiperCurrent = this.index + 1, this.currentSwiper = this.index
          },
          methods: {
            swiperChange: function(e) {
              this.swiperCurrent = e.detail.current + 1
            },
            openMedia: function(e) {
              this.showScreen = !0
            },
            closeMask: function() {
              this.showScreen = !1
            }
          }
        };
        t.default = n
      }).call(this, n("df3c").default)
    },
};
