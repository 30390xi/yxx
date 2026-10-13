// Extracted from subPage/pages/passenger/passenger.js; webpack module b6e7.
// Compiled code for analysis; not an original source file.
module.exports = {
    b6e7: function(n, e, t) {
      (function(n) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var t = {
          data: function() {
            return {
              commonUsedTouristList: []
            }
          },
          filters: {
            phoneFilter: function(n) {
              if (n) {
                var e = n.toString();
                return e.replace(e.substring(3, 7), "****")
              }
            },
            idCarNoFilter: function(n) {
              if (n) {
                var e = n.toString();
                return e.substring(0, 1) + "****************" + e.substring(e.length - 1, e.length)
              }
            }
          },
          onLoad: function(n) {},
          onShow: function() {
            this.getCommonUsedTouristList()
          },
          methods: {
            getCommonUsedTouristList: function() {
              var n = this;
              this.$uniApi.dataRequestNoLoading("GET", "manager/app/v1/commonUsedTourist/queryCommonUsedTouristList").then((function(e) {
                1 === e.code ? n.commonUsedTouristList = e.data || [] : n.$util.showToast(e.msg)
              }))
            },
            editPassenger: function(n) {
              this.$navigateTo({
                url: "/subPage/pages/editPassenger/editPassenger?touristId=".concat(n)
              })
            },
            delPassenger: function(e) {
              var t = this,
                o = {
                  id: e
                };
              n.showModal({
                cancelText: "取消",
                confirmText: "确认",
                content: "是否删除该旅客?",
                success: function(n) {
                  n.confirm ? t.$uniApi.dataRequestNoLoading("GET", "manager/app/v1/commonUsedTourist/deleteCommonUsedTourist", o).then((function(n) {
                    1 === n.code ? t.getCommonUsedTouristList() : t.$util.showToast(n.msg)
                  })) : n.cancel && console.log("cancel")
                }
              })
            },
            addPassenger: function() {
              this.$navigateTo({
                url: "/subPage/pages/addPassenger/addPassenger"
              })
            }
          }
        };
        e.default = t
      }).call(this, t("df3c").default)
    },
};
