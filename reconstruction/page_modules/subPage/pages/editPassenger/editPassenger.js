// Extracted from subPage/pages/editPassenger/editPassenger.js; webpack module 1451.
// Compiled code for analysis; not an original source file.
module.exports = {
    1451: function(e, t, n) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var i = {
        components: {
          ocrIndex: function() {
            n.e("components/ocr/ocrIndex").then(function() {
              return resolve(n("7882"))
            }.bind(null, n)).catch(n.oe)
          },
          cardType: function() {
            n.e("subPage/components/card-pop/candType").then(function() {
              return resolve(n("b0c5"))
            }.bind(null, n)).catch(n.oe)
          }
        },
        data: function() {
          return {
            name: "",
            phone: "",
            idCarNo: "",
            id: "",
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
          this.id = e.touristId, this.getCommonUsedTouristList(), e.codes && (this.realCardTypeCodes = e.codes.split(",")), console.log(this.realCardTypeCodes)
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
          getCommonUsedTouristList: function() {
            var e = this,
              t = this;
            this.$uniApi.dataRequestNoLoading("GET", "manager/app/v1/commonUsedTourist/queryCommonUsedTouristList").then((function(n) {
              1 === n.code ? n.data.forEach((function(e) {
                t.id == e.id && (t.name = e.name, t.phone = e.phone || "", t.idCarNo = e.idCarNo || "", t.realCardType = e.cardType || "")
              })) : e.$util.showToast(n.msg)
            }))
          },
          verify: function() {
            return this.$util.checkName(this.name).code && this.$util.checkPhone(this.phone).code && this.$util.checkId(this.idCarNo, this.realCardType).code
          },
          editPassenger: function() {
            var e = this;
            if (this.checked) {
              if (!this.submitState)
                if (this.verify()) {
                  var t = {
                    id: this.id,
                    name: this.name,
                    phone: this.phone,
                    idCarNo: this.idCarNo,
                    cardType: this.realCardType
                  };
                  this.submitState = !0, this.$uniApi.dataRequestYesLoading("POST", "manager/app/v1/commonUsedTourist/updateCommonUsedTourist", t, "保存中").then((function(t) {
                    1 === t.code ? e.$util.prevPage() : (e.$util.showToast(t.msg), e.submitState = !1)
                  }))
                } else this.$util.showToast(this.$util.checkName(this.name).msg || this.$util.checkPhone(this.phone).msg || this.$util.checkId(this.idCarNo, this.realCardType).msg)
            } else this.$util.showToast("请先阅读并同意授权")
          },
          chooseCardType: function(e) {
            e != this.realCardType && (this.idCarNo = ""), this.realCardType = e, this.showCardPop = !1
          }
        }
      };
      t.default = i
    },
};
