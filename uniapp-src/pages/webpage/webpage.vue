<template>
<view>
    <web-view :src="urlSrc" :webviewStyles="webviewStyles" @message="message($event)"></web-view>
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
                insuranceId: ""
              }
            },
            onLoad: function(n) {
              var t = uni.getStorageSync("wxopenid");
              if (this.shareConfigNot = [], n.insuranceId && (this.insuranceId = n.insuranceId), n.urlEncode) this.urlSrc = decodeURIComponent(n.urlEncode);
              else if (n.url) {
                var a = uni.getStorageSync("token"),
                  o = this;
                if (n.url.indexOf("12h-ai.zhiyousx.com") > -1) {
                  var s = n.url.split("^");
                  if (s && s[1]) {
                    var u = s[1].split("~"),
                      l = {};
                    u.forEach((function(e) {
                      var n = e.split("+"),
                        t = (0, i.default)(n, 2),
                        r = t[0],
                        a = t[1];
                      l[r] = a
                    })), console.log(l), l.userSource && uni.setStorageSync("source_header", l.userSource), l.channel && uni.setStorageSync("channel_header", l.channel), n.url = s[0]
                  }
                }
                if (-1 != n.url.indexOf("*") && (n.url = n.url.replace("*", "?"), n.url = n.url.replace("+", "=")), n.url.indexOf("scgact") > -1 && a) {
                  var c = -1 != n.url.indexOf("?") ? "&" : "?";
                  n.url += c + "token=" + encodeURIComponent(a.replace("bearer ", "") || "")
                }
                if (n.url.indexOf("H5/show?") > -1 && a && (n.url += "&token=" + encodeURIComponent(a || "")), n.url.indexOf("h5/wallGuide2026") > -1 ? (n.url += "&openId=".concat(t), n.lineById && (n.url += "&lineById=".concat(n.lineById))) : n.url.indexOf("h5/wallGuide") > -1 && (n.url += "?openId=".concat(t), a && (n.url += "&token=" + encodeURIComponent(a.replace("bearer ", "") || ""))), 0 == n.shareAppMessage && this.shareConfigNot.push("shareAppMessage"), 0 == n.shareTimeline && this.shareConfigNot.push("shareTimeline"), this.shareConfigNot[0] && uni.hideShareMenu({
                    menus: this.shareConfigNot
                  }), n.url.indexOf("qinQ") > -1 && uni.hideShareMenu({
                    menus: ["shareTimeline", "shareAppMessage"]
                  }), n.url.indexOf("12h-ai.zhiyousx.com") > -1) {
                  var d = -1 != n.url.indexOf("?") ? "&" : "?";
                  n.url += d + "token=" + a
                }
                setTimeout((function() {
                  o.urlSrc = n.url, console.log(o.urlSrc)
                }), 200)
              }
            },
            onShow: function() {},
            onShareAppMessage: function(e) {
              if (this._shareObj) return this._shareObj
            },
            methods: {
              message: function(n) {
                var t = this;
                console.log(n);
                var r = n.detail.data;
                this._shareObj = n.detail.data[0], r[1] && r[1].toMiniPro && e.openEmbeddedMiniProgram({
                  appId: r[1].data.appId,
                  path: r[1].data.wechatUrl
                }), r[1] && r[1].cityId && (getApp().globalData.cityId = r[1].cityId), "insuranceConfirm" == this._shareObj.type ? (this.$bus.$emit("agree", !0, this.insuranceId), this.destroyed()) : (this.$bus.$emit("agree", !1, this.insuranceId), this.destroyed()), r.forEach((function(n) {
                  if (n.type && "statistics" == n.type) t.$eventAnalyse.analyse(n.data);
                  else if (n.type && "login" == n.type) {
                    var r = n.token;
                    uni.setStorageSync("token", r), t.$store.dispatch("setUserInfo", r).then((function(e) {
                      1 !== e.code && t.$uni.showToast(e.msg)
                    }))
                  }
                }))
              },
              getRequest: function(e) {
                if (-1 != e.indexOf("?")) return e.substr(1).split("=")[1]
              },
              destroyed: function() {
                this.$bus.$off("agree")
              }
            }
          };
</script>
