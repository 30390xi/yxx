var tabs = [
  { pagePath: "/pages/index/index", text: "首页", icon: "/static/images/home.png", selectedIcon: "/static/captured/5d2b6a5ac672f593.png" },
  { pagePath: "/pages/spot_list/spot_list", text: "目的地", icon: "/static/captured/1a4c71b2a9eab855.png", selectedIcon: "/static/captured/a14eb4f567aec626.png" },
  { pagePath: "/pages/rankList/rankList", text: "游榜单", icon: "/static/captured/acce6b2556c25622.png", selectedIcon: "/static/captured/f05c717ab7231b62.png" },
  { pagePath: "/pages/mine/mine", text: "我的", icon: "/static/captured/572e8eb2a01d2e77.png", selectedIcon: "/static/captured/b9f7258c018e8f5a.png" }
];

Component({
  data: { tabs: tabs, selected: 0 },
  lifetimes: {
    attached: function() { this.scheduleSync(); },
    ready: function() { this.scheduleSync(); }
  },
  pageLifetimes: {
    show: function() { this.scheduleSync(); }
  },
  methods: {
    scheduleSync: function() {
      var self = this;
      self.syncSelected();
      setTimeout(function() { self.syncSelected(); }, 100);
    },
    syncSelected: function() {
      var pages = getCurrentPages();
      var route = pages.length ? "/" + pages[pages.length - 1].route : tabs[0].pagePath;
      var selected = tabs.findIndex(function(item) { return item.pagePath === route; });
      if (selected >= 0 && selected !== this.data.selected) this.setData({ selected: selected });
    }
  }
});
