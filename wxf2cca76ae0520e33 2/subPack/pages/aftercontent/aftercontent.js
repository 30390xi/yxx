require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPack/pages/aftercontent/aftercontent"], {
    "1e54": function(e, t, n) {
      n.r(t);
      var o = n("587e"),
        a = n.n(o);
      for (var r in o)["default"].indexOf(r) < 0 && function(e) {
        n.d(t, e, (function() {
          return o[e]
        }))
      }(r);
      t.default = a.a
    },
    "587e": function(e, t, n) {
      (function(e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var n = {
          data: function() {
            return {
              orderId: "",
              aftersaleType: "",
              type: "",
              loadingStatus: !1,
              aftersaleReason: "",
              num: 0,
              action: getApp().globalData.requestUrl + "base/common/file/qiniu/upload",
              uploadArr: []
            }
          },
          onLoad: function(e) {
            e.orderId && (this.orderId = e.orderId, this.aftersaleType = e.aftersaleType), e.type ? this.type = e.type : this.type = ""
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          methods: {
            onSubmit: function() {
              var t = this;
              if (!this.aftersaleReason) return this.$refs.uToast.show({
                title: "请输入原因",
                type: "error"
              });
              var n = {
                orderId: this.orderId,
                aftersaleReason: this.aftersaleReason,
                aftersaleType: this.aftersaleType,
                memberId: this.userInfo.memberId,
                memberName: this.userInfo.nickName ? this.userInfo.nickName : "",
                memberPhone: this.userInfo.mobilePhone
              };
              this.uploadArr.length > 0 && (n.aftersalePic = this.uploadArr.join(",")), this.loadingStatus = !0, this.$uniApi.dataRequestNoLoading("POST", "order/app/v1/aftersaleNew", n).then((function(n) {
                if (t.loadingStatus = !1, 1 == n.code)
                  if (t.$refs.uToast.show({
                      title: "已提交申请",
                      type: "success",
                      position: "bottom"
                    }), t.type) t.$util.prevPage();
                  else {
                    var o = getCurrentPages(),
                      a = o[o.length - 3];
                    e.navigateBack({
                      delta: 2,
                      success: function() {
                        a.$vm.page = 1, a.$vm.pageLoad()
                      }
                    })
                  }
              })).catch((function(e) {
                t.loadingStatus = !1, t.$u.toast(e.msg)
              }))
            },
            changefun: function() {
              this.num = this.aftersaleReason.length
            },
            onUploaded: function(e) {
              this.uploadArr = e.map((function(e) {
                return e.response.data[0].maxImageUrl
              }))
            },
            onRemove: function(e, t) {
              this.uploadArr.splice(e, 1)
            }
          }
        };
        t.default = n
      }).call(this, n("df3c").default)
    },
    "8ddc": function(e, t, n) {
      var o = n("f8b7");
      n.n(o).a
    },
    cd9d: function(e, t, n) {
      n.r(t);
      var o = n("f711"),
        a = n("1e54");
      for (var r in a)["default"].indexOf(r) < 0 && function(e) {
        n.d(t, e, (function() {
          return a[e]
        }))
      }(r);
      n("8ddc");
      var u = n("828b"),
        i = Object(u.a)(a.default, o.b, o.c, !1, null, "2036dd08", null, !1, o.a, void 0);
      t.default = i.exports
    },
    da80: function(e, t, n) {
      (function(e, t) {
        var o = n("47a9");
        n("5366"), o(n("3240"));
        var a = o(n("cd9d"));
        e.__webpack_require_UNI_MP_PLUGIN__ = n, t(a.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    f711: function(e, t, n) {
      n.d(t, "b", (function() {
        return a
      })), n.d(t, "c", (function() {
        return r
      })), n.d(t, "a", (function() {
        return o
      }));
      var o = {
          uUpload: function() {
            return Promise.all([n.e("common/vendor"), n.e("uview-ui/components/u-upload/u-upload")]).then(n.bind(null, "3938"))
          },
          uniIcons: function() {
            return Promise.all([n.e("common/vendor"), n.e("components/uni-icons/uni-icons")]).then(n.bind(null, "365b"))
          },
          uToast: function() {
            return n.e("uview-ui/components/u-toast/u-toast").then(n.bind(null, "05ad"))
          }
        },
        a = function() {
          this.$createElement;
          this._self._c
        },
        r = []
    },
    f8b7: function(e, t, n) {}
  },
  [
    ["da80", "common/runtime", "common/vendor"]
  ]
]);
