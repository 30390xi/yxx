// Extracted from pages/spotMedia/spotMedia.js; webpack module "41e2".
// Compiled code for analysis; not an original source file.
module.exports = {
    "41e2": function(e, t, n) {
      (function(e, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var a = {
          components: {
            EmptyState: function() {
              n.e("components/empty/empty").then(function() {
                return resolve(n("a427"))
              }.bind(null, n)).catch(n.oe)
            }
          },
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
              navbarH: 60,
              imageList: []
            }
          },
          onLoad: function(t) {
            var n = this;
            this.statusBarHeight = e.getSystemInfoSync().statusBarHeight, console.log(t), this.id = t.id, this.type = t.type, this.getPicVideoAbout(), this.$nextTick((function() {
              new Promise((function(t) {
                var n = e.createSelectorQuery();
                n.select("#navbar").boundingClientRect(), n.exec((function(e) {
                  t(e)
                }))
              })).then((function(e) {
                n.navbarH = e[0].height
              }))
            }))
          },
          methods: {
            change: function(e) {
              this.current = e, this.resourcesType = e + 1, this.getPicVideoAbout()
            },
            getPicVideoAbout: function() {
              var e = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/scenicSpot/getPicVideoAbout", {
                type: this.type,
                resourcesType: this.current + 1,
                id: this.id
              }).then((function(t) {
                1 === t.code && (e.dataList = t.data, e.swiperLenght = e.dataList.length, 1 == e.resourcesType && (e.imageList = e.dataList.map((function(e) {
                  return e.resourcesUrl
                }))))
              }))
            },
            swiperChange: function(e) {
              this.swiperCurrent = e.detail.current + 1
            },
            openMedia: function(e) {
              1 == this.resourcesType ? i.previewImage({
                current: this.imageList[e],
                urls: this.imageList
              }) : (this.showScreen = !0, this.swiperCurrent = e + 1, this.currentSwiper = e)
            },
            closeMask: function() {
              this.showScreen = !1
            }
          }
        };
        t.default = a
      }).call(this, n("df3c").default, n("3223").default)
    },
};
