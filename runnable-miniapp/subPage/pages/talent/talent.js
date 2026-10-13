require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPage/pages/talent/talent"], {
    "08c6": function(e, n, t) {
      (function(e) {
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var t = {
          data: function() {
            return {
              shareId: "",
              shareinfo: {},
              configrights: []
            }
          },
          onLoad: function(e) {
            e.scene && (this.shareId = e.scene, this.getMemberinfo()), this.getConfig()
          },
          onShow: function() {
            var n = e.getStorageSync("shareId");
            n && !this.shareId && (this.shareId = n), e.removeStorage({
              key: "shareId"
            })
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          methods: {
            getMemberinfo: function() {
              var e = this;
              this.$uniApi.dataRequestNoLoading("get", "manager/app/v1/member/" + this.shareId).then((function(n) {
                e.shareinfo = n.data
              }))
            },
            applyTalent: function() {
              var n = this;
              this.$uniApi.dataRequestNoLoading("get", "manager/app/v1/member/applyFenXiao").then((function(t) {
                1 == t.code ? n.changeuserinfo(1) : ("您已经是旅行达人，请勿重复申请" == t.msg && n.changeuserinfo(), e.showToast({
                  title: t.msg,
                  icon: "none"
                }))
              }))
            },
            getConfig: function() {
              var e = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/sysParam/getSysConfigure", {
                paramKey: "FENXIAO_VIP_POWER"
              }).then((function(n) {
                1 === n.code && (e.configrights = JSON.parse(n.data.paramValue))
              }))
            },
            inviteTalent: function() {
              var n = this;
              this.$uniApi.dataRequestNoLoading("get", "manager/app/v1/member/agreeFenXiao", {
                referenceId: this.shareId
              }).then((function(t) {
                1 == t.code ? n.changeuserinfo(1) : ("您已经是旅行达人，请勿重复申请" == t.msg && n.changeuserinfo(), e.showToast({
                  title: t.msg,
                  icon: "none"
                }))
              }))
            },
            changeuserinfo: function(n) {
              n && e.showToast({
                title: "恭喜成为旅行达人",
                icon: "success"
              });
              var t = this.userInfo;
              t.isFenxiao = 1, this.$store.commit("SET_USERINFOR", t), e.setStorageSync("userInfor", t)
            },
            toBeTalent: function(n) {
              var t = this,
                a = this;
              1 == n && (e.setStorageSync("shareId", this.shareId), this.$util.isLogin()), 2 == n && this.$store.dispatch("PushMessage").then((function(e) {
                a.applyTalent()
              })), 3 == n && this.$store.dispatch("PushMessage").then((function(e) {
                a.inviteTalent()
              })), 4 == n && this.$uniApi.dataRequestNoLoading("GET", "manager/app/v1/member/existOfficalOpenid", {
                openId: e.getStorageSync("userInfor").openId
              }).then((function(n) {
                if (1 === n.code)
                  if (n.data) {
                    var a = n.data;
                    t.$navigateTo({
                      url: "/distribution/pages/index/index?officialOpenId=" + a
                    })
                  } else {
                    var i = "https://eshop.zhiyousx.com/dsmall-admin-ui/h5/driverSms.html?miniOpenid=" + e.getStorageSync("userInfor").openId + "&unionid=" + e.getStorageSync("unionid") + "&isFenxiao=1",
                      o = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx4e897687efe1ef2e&redirect_uri=" + encodeURIComponent(i) + "&response_type=code&scope=snsapi_base&forcePopup=true&state=1&connect_redirect=1#wechat_redirect";
                    e.navigateTo({
                      url: "/pages/webpage/webpage?urlEncode=" + encodeURIComponent(o)
                    })
                  }
              }))
            }
          }
        };
        n.default = t
      }).call(this, t("df3c").default)
    },
    "0b42": function(e, n, t) {
      var a = t("8123");
      t.n(a).a
    },
    "3bea": function(e, n, t) {
      t.r(n);
      var a = t("08c6"),
        i = t.n(a);
      for (var o in a)["default"].indexOf(o) < 0 && function(e) {
        t.d(n, e, (function() {
          return a[e]
        }))
      }(o);
      n.default = i.a
    },
    8123: function(e, n, t) {},
    8634: function(e, n, t) {
      t.r(n);
      var a = t("91ab"),
        i = t("3bea");
      for (var o in i)["default"].indexOf(o) < 0 && function(e) {
        t.d(n, e, (function() {
          return i[e]
        }))
      }(o);
      t("0b42");
      var s = t("828b"),
        r = Object(s.a)(i.default, a.b, a.c, !1, null, "32f77074", null, !1, a.a, void 0);
      n.default = r.exports
    },
    "91ab": function(e, n, t) {
      t.d(n, "b", (function() {
        return a
      })), t.d(n, "c", (function() {
        return i
      })), t.d(n, "a", (function() {}));
      var a = function() {
          this.$createElement;
          this._self._c
        },
        i = []
    },
    abeb: function(e, n, t) {
      (function(e, n) {
        var a = t("47a9");
        t("5366"), a(t("3240"));
        var i = a(t("8634"));
        e.__webpack_require_UNI_MP_PLUGIN__ = t, n(i.default)
      }).call(this, t("3223").default, t("df3c").createPage)
    }
  },
  [
    ["abeb", "common/runtime", "common/vendor"]
  ]
]);
