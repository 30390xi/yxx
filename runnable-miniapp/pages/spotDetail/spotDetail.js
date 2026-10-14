// Compatibility entry for older links retained in the original compiled bundle.
Page({
  onLoad: function(options) {
    var query = Object.keys(options || {}).map(function(key) {
      return encodeURIComponent(key) + "=" + encodeURIComponent(options[key]);
    }).join("&");
    wx.redirectTo({
      url: "/pages/spotDetailNew/spotDetailNew" + (query ? "?" + query : ""),
      fail: function() {
        wx.showToast({ title: "景区详情暂时无法打开", icon: "none" });
        wx.navigateBack({ delta: 1 });
      }
    });
  }
});
