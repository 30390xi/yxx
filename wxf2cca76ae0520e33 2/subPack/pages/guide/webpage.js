require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPack/pages/guide/webpage"], {
    "0f7b": function(e, t, n) {
      (function(e, t) {
        var r = n("47a9");
        n("5366"), r(n("3240"));
        var a = r(n("d666"));
        e.__webpack_require_UNI_MP_PLUGIN__ = n, t(a.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    2054: function(e, t, n) {
      n.r(t);
      var r = n("f921"),
        a = n.n(r);
      for (var o in r)["default"].indexOf(o) < 0 && function(e) {
        n.d(t, e, (function() {
          return r[e]
        }))
      }(o);
      t.default = a.a
    },
    b7a4: function(e, t, n) {
      n.d(t, "b", (function() {
        return r
      })), n.d(t, "c", (function() {
        return a
      })), n.d(t, "a", (function() {}));
      var r = function() {
          this.$createElement;
          this._self._c
        },
        a = []
    },
    d666: function(e, t, n) {
      n.r(t);
      var r = n("b7a4"),
        a = n("2054");
      for (var o in a)["default"].indexOf(o) < 0 && function(e) {
        n.d(t, e, (function() {
          return a[e]
        }))
      }(o);
      var i = n("828b"),
        s = Object(i.a)(a.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
      t.default = s.exports
    },
    f921: function(e, t, n) {
      (function(e, n) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var r = {
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
          onLoad: function(t) {
            var r = e.getStorageSync("wxopenid");
            if (this.shareConfigNot = [], t.urlEncode) this.urlSrc = decodeURIComponent(t.urlEncode);
            else if (t.url) {
              var a = e.getStorageSync("token"),
                o = this;
              if (-1 != t.url.indexOf("*") && (t.url = t.url.replace("*", "?"), t.url = t.url.replace("+", "=")), t.url.indexOf("scgact") > -1 && a) {
                var i = -1 != t.url.indexOf("?") ? "&" : "?";
                t.url += i + "token=" + encodeURIComponent(a.replace("bearer ", "") || "")
              }
              t.url.indexOf("H5/show?") > -1 && a && (t.url += "&token=" + encodeURIComponent(a || "")), t.url.indexOf("h5/wallGuide") > -1 && (t.url += "?openId=".concat(r), a && (t.url += "&token=" + encodeURIComponent(a.replace("bearer ", "") || ""))), 0 == t.shareAppMessage && this.shareConfigNot.push("shareAppMessage"), 0 == t.shareTimeline && this.shareConfigNot.push("shareTimeline"), this.shareConfigNot[0] && n.hideShareMenu({
                menus: this.shareConfigNot
              }), setTimeout((function() {
                o.urlSrc = t.url, console.log(o.urlSrc)
              }), 200)
            }
          },
          onShow: function() {},
          onShareAppMessage: function(e) {
            if (this._shareObj) return -1 != this._shareObj.path.indexOf("scgact") && this._shareObj.isLogin && this.$uniApi.dataRequestNoLoading("GET", "manager/app/v1/arborDayLottery/updateMemberLotteryNum", {
              lotteryType: 2
            }).then((function(e) {
              console.log("分享成功")
            })), this._shareObj
          },
          methods: {
            message: function(t) {
              var n = this,
                r = t.detail.data;
              this._shareObj = t.detail.data[0], r[1] && r[1].toMiniPro && e.openEmbeddedMiniProgram({
                appId: r[1].data.appId,
                path: r[1].data.wechatUrl
              }), r[1] && r[1].cityId && (getApp().globalData.cityId = r[1].cityId), this._shareObj.confirm, this.$bus.$emit("agree", this._shareObj.confirm, this.getRequest(this.urlSrc)), this.destroyed(), r.forEach((function(t) {
                if (t.type && "statistics" == t.type) n.$eventAnalyse.analyse(t.data);
                else if (t.type && "login" == t.type) {
                  var a = r[1].token;
                  e.setStorageSync("token", a), n.$store.dispatch("setUserInfo", a).then((function(e) {
                    1 !== e.code && n.$util.showToast(e.msg)
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
        t.default = r
      }).call(this, n("df3c").default, n("3223").default)
    }
  },
  [
    ["0f7b", "common/runtime", "common/vendor"]
  ]
]);
