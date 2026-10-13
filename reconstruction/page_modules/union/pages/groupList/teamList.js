// Extracted from union/pages/groupList/teamList.js; webpack module 3458.
// Compiled code for analysis; not an original source file.
module.exports = {
    3458: function(n, t, o) {
      (function(n) {
        var e = o("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var a = {
          mixins: [e(o("30eb")).default],
          data: function() {
            return {
              list: [],
              statusBarHeight: "",
              language: "zh",
              listTeam: [{
                logo: "https://eshopfile.zhiyousx.com/176976131356087252.png",
                name: "组团名称"
              }, {
                logo: "https://eshopfile.zhiyousx.com/176976131356087252.png",
                name: "组团名称"
              }, {
                logo: "https://eshopfile.zhiyousx.com/176976131356087252.png",
                name: "组团名称"
              }, {
                logo: "https://eshopfile.zhiyousx.com/176976131356087252.png",
                name: "组团名称"
              }, {
                logo: "https://eshopfile.zhiyousx.com/176976131356087252.png",
                name: "组团名称"
              }, {
                logo: "https://eshopfile.zhiyousx.com/176976131356087252.png",
                name: "组团名称"
              }, {
                logo: "https://eshopfile.zhiyousx.com/176976131356087252.png",
                name: "组团名称"
              }, {
                logo: "https://eshopfile.zhiyousx.com/176976131356087252.png",
                name: "组团名称"
              }, {
                logo: "https://eshopfile.zhiyousx.com/176976131356087252.png",
                name: "组团名称"
              }, {
                logo: "https://eshopfile.zhiyousx.com/176976131356087252.png",
                name: "组团名称"
              }, {
                logo: "https://eshopfile.zhiyousx.com/176976131356087252.png",
                name: "组团名称"
              }, {
                logo: "https://eshopfile.zhiyousx.com/176976131356087252.png",
                name: "组团名称"
              }]
            }
          },
          onLoad: function() {
            this.language = n.getStorageSync("language") || "zh", this.statusBarHeight = n.getSystemInfoSync().statusBarHeight
          },
          methods: {}
        };
        t.default = a
      }).call(this, o("df3c").default)
    },
};
