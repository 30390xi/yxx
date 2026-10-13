// Extracted from subPage/pages/pictureWall/pictureWall.js; webpack module a38d.
// Compiled code for analysis; not an original source file.
module.exports = {
    a38d: function(t, n, e) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var i = {
        components: {
          avatar: function() {
            e.e("subPage/components/yq-avatar/yq-avatar").then(function() {
              return resolve(e("91d7"))
            }.bind(null, e)).catch(e.oe)
          }
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
      n.default = i
    },
};
