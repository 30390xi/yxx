require("../../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["yearCard/pages/activationCard/components/uploadUser/index"], {
    "36ed": function(e, r, o) {
      o.d(r, "b", (function() {
        return a
      })), o.d(r, "c", (function() {
        return t
      })), o.d(r, "a", (function() {
        return n
      }));
      var n = {
          uForm: function() {
            return o.e("uview-ui/components/u-form/u-form").then(o.bind(null, "3a6f"))
          },
          uFormItem: function() {
            return Promise.all([o.e("common/vendor"), o.e("uview-ui/components/u-form-item/u-form-item")]).then(o.bind(null, "09a7"))
          },
          uInput: function() {
            return Promise.all([o.e("common/vendor"), o.e("uview-ui/components/u-input/u-input")]).then(o.bind(null, "5cbc"))
          },
          uUpload: function() {
            return Promise.all([o.e("common/vendor"), o.e("uview-ui/components/u-upload/u-upload")]).then(o.bind(null, "3938"))
          },
          uPopup: function() {
            return o.e("uview-ui/components/u-popup/u-popup").then(o.bind(null, "39fb"))
          }
        },
        a = function() {
          var e = this;
          e.$createElement;
          e._self._c, e._isMounted || (e.e0 = function(r) {
            e.showProgress = !0
          })
        },
        t = []
    },
    "6f2c": function(e, r, o) {},
    c6b9: function(e, r, o) {
      (function(e) {
        Object.defineProperty(r, "__esModule", {
          value: !0
        }), r.default = void 0;
        var n = {
          components: {
            ocrIndex: function() {
              o.e("components/ocr/ocrIndex").then(function() {
                return resolve(o("7882"))
              }.bind(null, o)).catch(o.oe)
            }
          },
          data: function() {
            var e = this;
            return {
              iconStyle: {
                width: "40rpx",
                height: "40rpx"
              },
              form: {
                cardholderName: "",
                cardholderIdCard: "",
                cardholderMobile: ""
              },
              rules: {
                cardholderName: [{
                  required: !0,
                  message: "请输入持卡人姓名",
                  trigger: ["blur", "change"]
                }],
                cardholderIdCard: [{
                  required: !0,
                  message: "请输入持卡人身份证号码",
                  trigger: ["blur", "change"]
                }, {
                  validator: function(r, o, n) {
                    return e.$u.test.idCard(o)
                  },
                  message: "身份证号码不正确",
                  trigger: ["change", "blur"]
                }],
                cardholderMobile: [{
                  required: !0,
                  message: "请输入持卡人手机号码",
                  trigger: ["blur", "change"]
                }, {
                  validator: function(r, o, n) {
                    return e.$u.test.mobile(o)
                  },
                  message: "手机号码不正确",
                  trigger: ["change", "blur"]
                }],
                cardholderFaceUrl: [{
                  required: !0,
                  message: "请上传人脸",
                  trigger: ["blur", "change"]
                }]
              },
              action: getApp().globalData.requestUrl + "base/common/file/qiniu/upload",
              fileList: [],
              showProgress: !1,
              infoPop: !1,
              userInfo: {
                cardholderName: "",
                cardholderIdCard: "",
                cardholderMobile: "",
                cardholderFaceUrl: ""
              }
            }
          },
          props: {
            infosUser: {
              type: Object,
              default: function() {
                return {}
              }
            }
          },
          watch: {
            infosUser: {
              handler: function(e) {
                console.log(e, 9999999999999), e && e.name && (this.form.cardholderName = e.name, this.form.cardholderIdCard = e.idCarNo)
              }
            },
            deep: !0
          },
          mounted: function() {
            this.$refs.uForm.setRules(this.rules)
          },
          methods: {
            initParams: function() {
              this.form = {
                cardholderName: "",
                cardholderIdCard: "",
                cardholderMobile: "",
                cardholderFaceUrl: ""
              }, this.fileList = []
            },
            setParams: function(e) {
              this.$refs.uUpload && this.$refs.uUpload.clear();
              var r = e.cardholderIdCard,
                o = void 0 === r ? "" : r,
                n = e.cardholderMobile,
                a = void 0 === n ? "" : n,
                t = e.cardholderName,
                i = void 0 === t ? "" : t,
                d = e.cardholderFaceUrl,
                c = void 0 === d ? "" : d;
              if (!(o && a && i)) return this.initParams();
              this.infoPop = !0, this.userInfo.cardholderName = i, this.userInfo.cardholderIdCard = o, this.userInfo.cardholderMobile = a, this.userInfo.cardholderFaceUrl = c || ""
            },
            onUploaded: function(e) {
              var r = e.map((function(e) {
                return e.response.data[0].maxImageUrl
              }));
              this.form.cardholderFaceUrl = r[0], this.showProgress = !1
            },
            onRemove: function(e, r) {
              this.fileList = [], this.form.cardholderFaceUrl = ""
            },
            onOversize: function() {
              e.showToast({
                title: "上传人像照片需小于10M",
                icon: "none"
              })
            },
            onError: function() {
              e.showToast({
                title: "上传失败，请重新尝试",
                icon: "none"
              }), this.fileList = [], this.form.cardholderFaceUrl = "", this.showProgress = !1
            },
            collectInfo: function() {
              var r = this;
              return new Promise((function(o, n) {
                if (r.showProgress) return e.showToast({
                  title: "正在上传图片，请稍后...",
                  icon: "none"
                }), n("正在上传图片，请稍后...");
                r.$refs.uForm.validate((function(e) {
                  e ? (console.log("验证通过"), o(r.form)) : (console.log("验证失败"), n(r.form))
                }))
              }))
            },
            setInfo: function() {
              var e = this.userInfo,
                r = e.cardholderIdCard,
                o = void 0 === r ? "" : r,
                n = e.cardholderMobile,
                a = void 0 === n ? "" : n,
                t = e.cardholderName,
                i = void 0 === t ? "" : t,
                d = e.cardholderFaceUrl,
                c = void 0 === d ? "" : d;
              this.form.cardholderName = i, this.form.cardholderIdCard = o, this.form.cardholderMobile = a, this.fileList = c ? [{
                url: c
              }] : [], this.form.cardholderFaceUrl = c || "", this.infoPop = !1
            },
            close: function() {
              this.initParams(), this.userInfo = {
                cardholderName: "",
                cardholderIdCard: "",
                cardholderMobile: "",
                cardholderFaceUrl: ""
              }, this.infoPop = !1
            }
          }
        };
        r.default = n
      }).call(this, o("df3c").default)
    },
    d369: function(e, r, o) {
      o.r(r);
      var n = o("36ed"),
        a = o("ec2b");
      for (var t in a)["default"].indexOf(t) < 0 && function(e) {
        o.d(r, e, (function() {
          return a[e]
        }))
      }(t);
      o("db93");
      var i = o("828b"),
        d = Object(i.a)(a.default, n.b, n.c, !1, null, "0b7417a4", null, !1, n.a, void 0);
      r.default = d.exports
    },
    db93: function(e, r, o) {
      var n = o("6f2c");
      o.n(n).a
    },
    ec2b: function(e, r, o) {
      o.r(r);
      var n = o("c6b9"),
        a = o.n(n);
      for (var t in n)["default"].indexOf(t) < 0 && function(e) {
        o.d(r, e, (function() {
          return n[e]
        }))
      }(t);
      r.default = a.a
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["yearCard/pages/activationCard/components/uploadUser/index-create-component", {
    "yearCard/pages/activationCard/components/uploadUser/index-create-component": function(e, r, o) {
      o("df3c").createComponent(o("d369"))
    }
  },
  [
    ["yearCard/pages/activationCard/components/uploadUser/index-create-component"]
  ]
]);
