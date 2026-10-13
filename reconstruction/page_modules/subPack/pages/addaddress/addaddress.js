// Extracted from subPack/pages/addaddress/addaddress.js; webpack module f0e8.
// Compiled code for analysis; not an original source file.
module.exports = {
    f0e8: function(e, a, t) {
      (function(e) {
        Object.defineProperty(a, "__esModule", {
          value: !0
        }), a.default = void 0;
        var d = t("7dd9"),
          i = {
            data: function() {
              return {
                addrId: "",
                loadingStatus: !1,
                cityStatus: !1,
                defaultRegion: [],
                tabellist: ["家", "公司", "学校"],
                tabelName: "",
                modalTag: !1,
                isEditor: !1,
                dataForm: {
                  contactPerson: "",
                  contactMobile: "",
                  addressLabel: "",
                  addressVal: "",
                  addrStreet: "",
                  addrAlias: "",
                  isDefault: !1
                },
                rules: {
                  contactPerson: [{
                    required: !0,
                    message: "请填写收货人姓名",
                    trigger: ["blur", "change"]
                  }],
                  contactMobile: [{
                    required: !0,
                    message: "请填写收货人手机号",
                    trigger: ["change", "blur"]
                  }, {
                    validator: function(e, a, t) {
                      return (0, d.validatePhone)(a)
                    },
                    message: "手机号码不正确",
                    trigger: ["change", "blur"]
                  }],
                  addressLabel: [{
                    required: !0,
                    message: "请选择省市区",
                    trigger: ["change", "blur"]
                  }],
                  addrStreet: [{
                    required: !0,
                    message: "详细地址不能为空",
                    trigger: ["blur", "change"]
                  }]
                },
                errorType: ["toast"]
              }
            },
            computed: {
              userInfo: function() {
                return this.$store.getters.userInfor
              }
            },
            onLoad: function(e) {
              e.addrId && (this.addrId = e.addrId, this.getAddress())
            },
            onReady: function() {
              this.$refs.uForm.setRules(this.rules)
            },
            methods: {
              getAddress: function() {
                var e = this;
                this.$uniApi.getRequestNoLoading("GET", "manager/app/v1/memberDeliveryAddress/" + this.addrId).then((function(a) {
                  if (1 === a.code) {
                    var t = e.dataForm,
                      d = function(d) {
                        if ("addressLabel" === d) t[d] = a.data.addrRegion1Name + "-" + a.data.addrRegion2Name + "-" + a.data.addrRegion3Name, e.defaultRegion = t[d].split("-");
                        else if ("addressVal" === d) t[d] = a.data.addrRegion1Id + "-" + a.data.addrRegion2Id + "-" + a.data.addrRegion3Id;
                        else if ("isDefault" === d) 1 === a.data[d] ? t[d] = !0 : t[d] = !1;
                        else if ("addrAlias" === d) {
                          t[d] = "", e.tabelName = a.data[d], -1 == e.tabellist.findIndex((function(e) {
                            return e == a.data[d]
                          })) && (e.dataForm.addrAlias = a.data[d], e.addTags(), e.modalTag = !0)
                        } else t[d] = a.data[d]
                      };
                    for (var i in t) d(i);
                    e.dataForm = t
                  }
                })).catch((function(a) {
                  e.$util.showToast(a.msg)
                }))
              },
              submit: function() {
                var e = this;
                this.$refs.uForm.validate((function(a) {
                  if (a) {
                    var t = e.dataForm,
                      d = {
                        memberId: e.userInfo.memberId
                      };
                    for (var i in t)
                      if ("addressLabel" === i) {
                        var n = t[i].split("-"),
                          r = t.addressVal.split("-");
                        d.addrRegion1Name = n[0], d.addrRegion2Name = n[1], d.addrRegion3Name = n[2], d.addrRegion1Id = r[0], d.addrRegion2Id = r[1], d.addrRegion3Id = r[2]
                      } else "addrAlias" === i ? t[i] ? d[i] = t[i] : e.tabelName && (d[i] = e.tabelName) : "isDefault" === i ? t[i] ? d[i] = 1 : d[i] = 0 : d[i] = t[i];
                    e.addrId && (d.addrId = e.addrId, e.loadingStatus = !0), e.$uniApi.dataRequestNoLoading(e.addrId ? "PUT" : "POST", "manager/app/v1/memberDeliveryAddress", d).then((function(a) {
                      e.loadingStatus = !1, 1 === a.code ? (e.$refs.uForm.resetFields(), e.$util.prevPage()) : e.$util.showToast(a.data.msg)
                    })).catch((function(a) {
                      e.loadingStatus = !1, e.$util.showToast(a.data.msg)
                    }))
                  }
                }))
              },
              delAddress: function() {
                var a = this;
                e.showModal({
                  title: "删除",
                  content: "您确定删除吗？",
                  confirmColor: "#ff4643",
                  success: function(e) {
                    e.confirm && a.$uniApi.getRequestNoLoading("DELETE", "manager/app/v1/memberDeliveryAddress?ids=" + a.addrId).then((function(e) {
                      1 === e.code ? a.$util.prevPage() : a.$util.showToast(e.data.msg)
                    })).catch((function(e) {
                      a.$util.showToast(e.data.msg)
                    }))
                  }
                })
              },
              cityPup: function() {
                this.cityStatus = !0, this.addrId && this.$refs.dscity.init()
              },
              cityChange: function(e) {
                this.defaultRegion = [], this.dataForm.addressLabel = e.province.label + "-" + e.city.label + "-" + e.area.label, this.dataForm.addressVal = e.province.value + "-" + e.city.value + "-" + e.area.value
              },
              tabelfun: function(e) {
                this.tabelName = e, this.isEditor = !1, this.modalTag = !1, this.dataForm.addrAlias = ""
              },
              addTags: function() {
                this.dataForm.addrAlias && (this.tabelName = "", this.isEditor ? this.isEditor = !1 : this.isEditor = !0)
              },
              switchChange: function(e) {
                this.dataForm.isDefault = e.detail.value
              }
            }
          };
        a.default = i
      }).call(this, t("df3c").default)
    },
};
