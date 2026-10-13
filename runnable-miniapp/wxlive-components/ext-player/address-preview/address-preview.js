module.exports = require("../../../_commons/0.js")([require("../../../_commons/1.js"), require("../../../_commons/3.js"), require("../../../_commons/2.js"), require("../../../_commons/8.js"), {
  ids: [55],
  modules: {
    531: function(e, o, s) {
      s.r(o);
      var i = s(1);
      Component({
        options: {
          styleIsolation: "page-apply-shared"
        },
        properties: {
          livePlayerOptions: String
        },
        data: {
          address: "",
          district: "",
          phone: "",
          postcode: "",
          receive_name: "",
          showAddressPreview: !0,
          isWxaMode: !1
        },
        methods: {
          onLoad: function() {
            var e = JSON.parse(decodeURIComponent(this.data.livePlayerOptions));
            this.setData({
              weapp_name: e.weapp_name,
              address: e.address,
              district: e.district,
              phone: e.phone,
              postcode: e.postcode,
              receive_name: e.receive_name,
              isWxaMode: e.isWxaMode,
              canModify: e.canModify,
              tips: e.tips
            })
          },
          onModify: function() {
            if (this.data.canModify) {
              var e = this,
                o = this.data.isWxaMode ? "chooseAddress" : "chooseAddressForPlugin";
              i.a[o]().then((function(o) {
                e.setData(o), e.getOpenerEventChannel().emit("acceptDataFromAddressPreviewPage", o)
              })).catch((function(e) {
                console.error("选择收货地址 fail", e)
              }))
            }
          }
        }
      })
    },
    95: function(e, o, s) {
      e.exports = s(531)
    }
  },
  entries: [
    [95, 0, 1, 3, 2, 8]
  ]
}]);
