var t = require("../@babel/runtime/helpers/defineProperty");
module.exports = {
  ids: [22],
  modules: {
    25: function(e, o, r) {
      o.a = Behavior({
        behaviors: [],
        properties: {},
        data: {
          storeUiStoreBtnVerticalLeft: 0,
          storeUiStoreBtnHorizontalLeft: 0,
          uiPersonOperationStoreBtnVerticalLeft: 0,
          uiPersonOperationStoreBtnHorizontalLeft: 0,
          uiIsCouponArrowRight: !1
        },
        attached: function() {},
        methods: {
          setUiData: function(e, o) {
            this.setData(t({}, e, o))
          },
          uiGetStorePosition: function(t) {
            var e = this;
            this.createSelectorQuery().select("#storeBtn").boundingClientRect((function(o) {
              if (o) {
                var r = o.left + o.width / 2;
                t && "vertical" !== t || e.data.uiPersonOperationStoreBtnVerticalLeft === r ? r !== e.data.uiPersonOperationStoreBtnHorizontalLeft && (wx.setStorageSync("uiPersonOperationStoreBtnHorizontalLeft", r + 30), e.setData({
                  uiPersonOperationStoreBtnHorizontalLeft: r + 30
                })) : (wx.setStorageSync("uiPersonOperationStoreBtnVerticalLeft", r - 17), wx.getSystemInfoSync().windowWidth - r < 100 && e.setData({
                  uiIsCouponArrowRight: !0
                }), e.setData({
                  uiPersonOperationStoreBtnVerticalLeft: r - 17
                }))
              }
            })).exec()
          }
        }
      })
    }
  }
};
