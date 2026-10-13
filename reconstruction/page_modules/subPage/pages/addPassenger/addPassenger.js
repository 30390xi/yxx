// Extracted from subPage/pages/addPassenger/addPassenger.js; webpack module c0df.
// Compiled code for analysis; not an original source file.
module.exports = {
    c0df: function(e, t, i) {
      (function(e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var n = {
          components: {
            ocrIndex: function() {
              i.e("components/ocr/ocrIndex").then(function() {
                return resolve(i("7882"))
              }.bind(null, i)).catch(i.oe)
            },
            cardType: function() {
              i.e("subPage/components/card-pop/candType").then(function() {
                return resolve(i("b0c5"))
              }.bind(null, i)).catch(i.oe)
            }
          },
          data: function() {
            return {
              name: "",
              phone: "",
              idCarNo: "",
              submitState: !1,
              showCertificate: !1,
              realCardType: 0,
              realCardTypeList: [0, 1, 2, 3, 4, 5, 6, 7, 8],
              realCardTypeCodes: [0, 1, 2, 3, 4, 5, 6, 7, 8],
              showCardPop: !1,
              checked: !1
            }
          },
          filters: {
            validityTimeFilter: function(e) {
              if (e) return e.slice(0, 10) + "到期"
            }
          },
          onLoad: function(e) {
            e.type ? this.setNavigationBarTitle("新增保险人") : this.setNavigationBarTitle("新增游客"), e.codes && (this.realCardTypeCodes = e.codes.split(","), this.realCardType = this.realCardTypeCodes[0])
          },
          onShow: function() {},
          methods: {
            setCheck: function() {
              this.checked = !this.checked
            },
            setDataInfos: function(e) {
              var t = this;
              console.log(e, "参数--------"), e ? (this.name = e.name, this.idCarNo = e.idCarNo) : setTimeout((function() {
                t.$util.showToast("识别失败，请重新识别或手动填写")
              }), 500)
            },
            setNavigationBarTitle: function(t) {
              this.title = t, e.setNavigationBarTitle({
                title: t
              })
            },
            verify: function() {
              return this.$util.checkName(this.name).code && this.$util.checkPhone(this.phone).code && this.$util.checkId(this.idCarNo, this.realCardType).code
            },
            queryTouristByIdCardNo: function() {
              var t = this;
              this.checked ? this.submitState || (this.verify() ? (this.submitState = !0, this.$uniApi.dataRequestNoLoading("get", "manager/app/v1/commonUsedTourist/queryTouristByIdCardNo?idCarNo=" + this.idCarNo + "&cardType=" + this.realCardType).then((function(i) {
                if (1 === i.code)
                  if (console.log(i.data), i.data && i.data[0]) {
                    var n = {
                      id: i.data[0].id,
                      name: t.name,
                      phone: t.phone,
                      idCarNo: t.idCarNo,
                      cardType: t.realCardType
                    };
                    e.showModal({
                      cancelText: "取消",
                      confirmText: "确认",
                      content: "该身份证号信息已存在，请确认是否更新?",
                      success: function(e) {
                        e.confirm ? t.$uniApi.dataRequestNoLoading("POST", "manager/app/v1/commonUsedTourist/updateCommonUsedTourist", n).then((function(e) {
                          1 === e.code ? t.$util.prevPage() : (t.$util.showToast(e.msg), t.submitState = !1)
                        })) : e.cancel && (t.submitState = !1)
                      }
                    })
                  } else t.addPassenger();
                else t.$util.showToast(i.msg), t.submitState = !1
              }))) : this.$util.showToast(this.$util.checkName(this.name).msg || this.$util.checkPhone(this.phone).msg || this.$util.checkId(this.idCarNo, this.realCardType).msg)) : this.$util.showToast("请先阅读并同意授权")
            },
            addPassenger: function() {
              var e = this;
              if (this.verify()) {
                var t = [];
                t.push({
                  name: this.name,
                  phone: this.phone,
                  idCarNo: this.idCarNo,
                  cardType: this.realCardType
                }), this.$uniApi.dataRequestYesLoading("POST", "manager/app/v1/commonUsedTourist/saveCommonUsedTourist?operationType=1", t, "保存中").then((function(t) {
                  1 === t.code ? e.$util.prevPage() : (e.$util.showToast(t.msg), e.submitState = !1)
                }))
              } else this.$util.showToast(this.$util.checkName(this.name).msg || this.$util.checkPhone(this.phone).msg || this.$util.checkId(this.idCarNo).msg)
            },
            chooseCardType: function(e) {
              e != this.realCardType && (this.idCarNo = ""), this.realCardType = e, this.showCardPop = !1
            }
          }
        };
        t.default = n
      }).call(this, i("df3c").default)
    },
};
