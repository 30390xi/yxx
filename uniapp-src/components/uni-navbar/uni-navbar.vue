<template>
  <view class="uni-navbar-wrap" v-if="showNav">
    <view
      :class="['header_content', navFixed ? 'header_fixed' : '', navShadow ? 'header_shadow' : '']"
      :style="headerContentStyle"
    >
      <view class="header_left_box">
        <view
          :class="['header_left_info', isTwoBtn ? 'header_btnMongol' : '']"
          v-if="back || isTwoBtn"
        >
          <view class="header_left_back" @tap="onBackPage" v-if="back">
            <uni-icons :color="navFontColor" size="20" type="arrowleft"></uni-icons>
          </view>
          <view class="header_left_line" v-if="isTwoBtn"></view>
          <view class="header_left_home" @tap="onBackHome" v-if="isTwoBtn">
            <uni-icons :color="navFontColor" size="20" type="home"></uni-icons>
          </view>
        </view>
        <slot name="transparentFixedLeft"></slot>
      </view>

      <view
        :class="['header_title', titleCenter ? 'header_title_center' : '']"
        :style="{ color: navFontColor }"
      >
        <text>{{ navTitle }}</text>
      </view>

      <view class="header_right_info">
        <slot name="right"></slot>
        <view class="allMap" @tap="showAllMap" v-if="mapFormType === 2">
          <text class="mapTitle">全域地图</text>
        </view>
      </view>
    </view>
    <!-- 占位高度 -->
    <view
      class="header_station"
      :style="{ height: statusBarHeight + 44 + 'px' }"
      v-if="navFixed && type !== 'transparentFixed' && type !== 'transparent'"
    ></view>
  </view>
</template>

<script>
const t = uni;
const i = ["pages/index/index", "pages/index/index"];
const a = ["#FFF", "#FFFFFF", "white", "rgb(255,255,255)", "rgba(255,255,255,1)"];

export default {
  name: "uniNavbar",
  props: {
    backState: {
      default: function() {
        return 1e3;
      }
    },
    home: {
      type: Boolean,
      default: function() {
        return false;
      }
    },
    bgColor: {
      type: [String, Array],
      default: function() {
        return "#FFFFFF";
      }
    },
    bgColorAngle: {
      type: [String, Number],
      default: function() {
        return 90;
      }
    },
    isFinding: {
      type: Boolean,
      default: function() {
        return false;
      }
    },
    fontColor: {
      type: String,
      default: function() {
        return "#000000";
      }
    },
    titleCenter: {
      type: Boolean,
      default: function() {
        return true;
      }
    },
    showNav: {
      type: Boolean,
      default: function() {
        return true;
      }
    },
    title: {
      type: String,
      default: function() {
        return "";
      }
    },
    type: {
      type: String,
      default: function() {
        return "fixed";
      }
    },
    transparentFixedFontColor: {
      type: String,
      default: function() {
        return "#000000";
      }
    },
    scrollTop: {
      type: Number,
      default: function() {
        return 0;
      }
    },
    shadow: {
      type: Boolean,
      default: function() {
        return true;
      }
    },
    homePath: {
      type: String,
      default: function() {
        return "/pages/index/index";
      }
    },
    mapFormType: {
      type: Number,
      default: function() {
        return 1;
      }
    }
  },
  data: function() {
    return {
      firstPage: false,
      transparentValue: 1,
      navTitle: "",
      navFontColor: "#000000",
      navBgColor: "none",
      navTransparentFixedFontColor: "#000000",
      themeBgColor: false,
      statusBarHeight: 0,
      lastFrontColor: ""
    };
  },
  computed: {
    headerContentStyle: function() {
      const style = {
        paddingTop: this.statusBarHeight + "px",
        background: this.navBgColor
      };
      if (this.type === "transparentFixed") {
        style.opacity = this.transparentValue;
      }
      return style;
    },
    back: function() {
      return 1e3 == this.backState || 3e3 == this.backState;
    },
    navFixed: function() {
      return "transparentFixed" == this.type || "fixed" == this.type || "MapFixed" == this.type;
    },
    navShadow: function() {
      return !(!this.bgColor || "string" != typeof this.bgColor) && this.shadow && "transparent" !== this.type && a.includes(this.bgColor);
    },
    isWhite: function() {
      return a.includes(this.navFontColor);
    },
    isTwoBtn: function() {
      return (1e3 == this.backState || 3e3 == this.backState) && this.home && !this.firstPage;
    }
  },
  watch: {
    title: function(val) {
      this.navTitle = val;
    },
    fontColor: function(val) {
      this.navFontColor = val;
      this.settingColor();
    },
    bgColor: function(val) {
      this.getNavBgColor(val);
    },
    transparentFixedFontColor: function(val) {
      this.navTransparentFixedFontColor = val;
    },
    scrollTop: function(val) {
      this.pageScroll({
        scrollTop: val
      });
    }
  },
  created: function() {
    this.navTitle = this.title;
    this.navFontColor = this.fontColor;
    this.getNavBgColor(this.bgColor);
    this.navTransparentFixedFontColor = this.transparentFixedFontColor;
    this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight || 20;
    this.pageScroll({
      scrollTop: this.scrollTop
    });
    const n = getCurrentPages();
    if (1 != n.length || i.includes(n[0].route)) {
      this.firstPage = true;
    }
  },
  methods: {
    onBackPage: function() {
      if (3e3 == this.backState) {
        this.$emit("backClick");
      } else {
        uni.navigateBack();
      }
    },
    onBackFinder: function() {
      this.$bus.$emit("openFinder");
    },
    onBackHome: function() {
      if ("/pages/index/index" === this.homePath) {
        uni.switchTab({
          url: this.homePath
        });
      } else {
        uni.redirectTo({
          url: this.homePath
        });
      }
    },
    pageScroll: function(t) {
      if ("transparentFixed" == this.type || "MapFixed" == this.type) {
        if (t && t.scrollTop && t.scrollTop > 0) {
          if (t.scrollTop > 180) {
            this.transparentValue = 1;
          } else {
            this.transparentValue = t.scrollTop / 180;
          }
        } else {
          this.transparentValue = 0;
        }
        this.settingColor();
      }
    },
    getNavBgColor: function(t) {
      if ("themeBgColor" == t) {
        this.themeBgColor = true;
        this.navBgColor = "none";
      } else if ("transparent" == this.type) {
        this.themeBgColor = false;
        this.navBgColor = "none";
      } else if ("string" == typeof t) {
        this.navBgColor = "linear-gradient(90deg," + t + "," + t + ")";
      } else if (Array.isArray(t) && t.length >= 2) {
        let n = "linear-gradient(" + this.bgColorAngle + "deg";
        t.forEach(function(item) {
          if ("string" == typeof item) {
            n += "," + item;
          } else if ("object" == typeof item) {
            n += "," + item.color + " " + item.scale;
          }
        });
        n += ")";
        this.navBgColor = n;
      }
    },
    settingColor: function() {
      const n = this;
      let e = this.navFontColor;
      if ("transparentFixed" == this.type && this.transparentValue <= 0.5) {
        e = this.navTransparentFixedFontColor;
      }
      let o = "#000000";
      if (a.includes(e)) {
        o = "#ffffff";
      }
      if (this.lastFrontColor != o) {
        setTimeout(function() {
          n.lastFrontColor = o;
          uni.setNavigationBarColor({
            frontColor: o,
            backgroundColor: "#FFFFFF"
          });
        }, 150);
      }
    },
    showAllMap: function() {
      this.$emit("showAllMap");
    }
  }
};
</script>

<style scoped>
.header_content {
  align-items: flex-end;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: 88rpx;
  justify-content: space-between;
  padding-right: 190rpx;
  position: relative;
  width: 750rpx;
}
.header_station {
  height: 88rpx;
}
.header_shadow {
  box-shadow: 0 0 6rpx 0 #ddd;
}
.header_fixed {
  position: fixed;
  left: 0;
  top: 0;
  width: 750rpx;
  z-index: 99;
}
.header_absolute {
  background-color: initial !important;
  position: absolute;
  left: 0;
  top: 0;
  width: 750rpx;
  z-index: 99;
}
.header_left_box {
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: row;
  height: 88rpx;
}
.header_left_line {
  background-color: hsla(0, 0%, 100%, 0.4);
  height: 30rpx;
  width: 2rpx;
}
.header_left_back {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 56rpx;
}
.header_icon {
  height: 40rpx;
  width: 40rpx;
}
.header_left_home {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 56rpx;
}
.header_left_info {
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 56rpx;
  margin-left: 16rpx;
}
.header_title {
  align-items: center;
  display: flex;
  flex-direction: row;
  font-size: 32rpx;
  font-weight: 700;
  height: 88rpx;
  justify-content: center;
  max-width: calc(100vw - 160rpx);
  overflow: hidden;
  padding-left: 30rpx;
  padding-right: 30rpx;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.header_title_center {
  bottom: 0rpx;
  left: 375rpx;
  position: absolute;
  transform: translateX(-50%);
}
.titleSize {
  font-size: 16px;
}
.header_right_info {
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  height: 88rpx;
}
.header_btnMongol {
  background-color: hsla(0, 0%, 100%, 0.7);
  border: 2rpx solid rgba(0, 0, 0, 0.1);
  border-radius: 33rpx;
  box-sizing: border-box;
}
.header_btnMongol_left_back,
.header_btnMongol_left_home {
  width: 70rpx;
}
.header_transparentFixed {
  background-color: initial;
  background-image: transparent;
  border-bottom-width: 0;
}
.header_transparentFixed_left_info {
  background-color: hsla(0, 0%, 100%, 0.7);
  border: 2rpx solid rgba(0, 0, 0, 0.1);
  border-radius: 33rpx;
  box-sizing: border-box;
}
.header_colorWhite_btnMongol,
.header_transparentFixed_colorWhite_left_info {
  background-color: rgba(0, 0, 0, 0.2);
  border: 2rpx solid hsla(0, 0%, 100%, 0.3);
}
.header_colorWhite_left_line {
  background-color: hsla(0, 0%, 100%, 0.3);
}
.allMap {
  align-items: center;
  background: #fff;
  border-radius: 40rpx;
  box-shadow: -2rpx 8rpx 8rpx 0rpx rgba(0, 0, 0, 0.08);
  color: rgba(0, 0, 0, 0.8);
  display: flex;
  font-size: 24rpx;
  height: 60rpx;
  justify-content: space-between;
  margin-left: 10rpx;
  padding: 0 20rpx;
  width: 208rpx;
}
.allMap .icon {
  height: 40rpx;
  width: 40rpx;
}
.header_map {
  background: linear-gradient(180deg, #ffb25b, rgba(255, 178, 91, 0));
  border-bottom-width: 0;
}
.mapTitle {
  color: rgba(0, 0, 0, 0.8);
  font-size: 34rpx;
  font-weight: 700;
  margin-left: 10rpx;
}
</style>
