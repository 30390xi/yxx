(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/webpage/webpage"], {
    "0e61": function(e, n, t) {
      (function(e, r) {
        var a = t("47a9");
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var i = a(t("34cf")),
          o = {
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
              var t = e.getStorageSync("wxopenid");
              if (this.shareConfigNot = [], n.insuranceId && (this.insuranceId = n.insuranceId), n.urlEncode) this.urlSrc = decodeURIComponent(n.urlEncode);
              else if (n.url) {
                var a = e.getStorageSync("token"),
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
                    })), console.log(l), l.userSource && e.setStorageSync("source_header", l.userSource), l.channel && e.setStorageSync("channel_header", l.channel), n.url = s[0]
                  }
                }
                if (-1 != n.url.indexOf("*") && (n.url = n.url.replace("*", "?"), n.url = n.url.replace("+", "=")), n.url.indexOf("scgact") > -1 && a) {
                  var c = -1 != n.url.indexOf("?") ? "&" : "?";
                  n.url += c + "token=" + encodeURIComponent(a.replace("bearer ", "") || "")
                }
                if (n.url.indexOf("H5/show?") > -1 && a && (n.url += "&token=" + encodeURIComponent(a || "")), n.url.indexOf("h5/wallGuide2026") > -1 ? (n.url += "&openId=".concat(t), n.lineById && (n.url += "&lineById=".concat(n.lineById))) : n.url.indexOf("h5/wallGuide") > -1 && (n.url += "?openId=".concat(t), a && (n.url += "&token=" + encodeURIComponent(a.replace("bearer ", "") || ""))), 0 == n.shareAppMessage && this.shareConfigNot.push("shareAppMessage"), 0 == n.shareTimeline && this.shareConfigNot.push("shareTimeline"), this.shareConfigNot[0] && r.hideShareMenu({
                    menus: this.shareConfigNot
                  }), n.url.indexOf("qinQ") > -1 && r.hideShareMenu({
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
                    e.setStorageSync("token", r), t.$store.dispatch("setUserInfo", r).then((function(e) {
                      1 !== e.code && t.$util.showToast(e.msg)
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
        n.default = o
      }).call(this, t("df3c").default, t("3223").default)
    },
    "112b": function(e, n, t) {
      t.r(n);
      var r = t("febb"),
        a = t("a701");
      for (var i in a)["default"].indexOf(i) < 0 && function(e) {
        t.d(n, e, (function() {
          return a[e]
        }))
      }(i);
      var o = t("828b"),
        s = Object(o.a)(a.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
      n.default = s.exports
    },
    a701: function(e, n, t) {
      t.r(n);
      var r = t("0e61"),
        a = t.n(r);
      for (var i in r)["default"].indexOf(i) < 0 && function(e) {
        t.d(n, e, (function() {
          return r[e]
        }))
      }(i);
      n.default = a.a
    },
    a7ba: function(e, n, t) {
      (function(e, n) {
        var r = t("47a9");
        t("5366"), r(t("3240"));
        var a = r(t("112b"));
        e.__webpack_require_UNI_MP_PLUGIN__ = t, n(a.default)
      }).call(this, t("3223").default, t("df3c").createPage)
    },
    febb: function(e, n, t) {
      t.d(n, "b", (function() {
        return r
      })), t.d(n, "c", (function() {
        return a
      })), t.d(n, "a", (function() {}));
      var r = function() {
          this.$createElement;
          this._self._c
        },
        a = []
    }
  },
  [
    ["a7ba", "common/runtime", "common/vendor"]
  ]
]);
