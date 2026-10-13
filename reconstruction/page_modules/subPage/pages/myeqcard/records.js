// Extracted from subPage/pages/myeqcard/records.js; webpack module "659a".
// Compiled code for analysis; not an original source file.
module.exports = {
    "659a": function(e, a, n) {
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), a.default = void 0;
      var t = {
        name: "records",
        data: function() {
          return {
            name: "",
            recordData: ""
          }
        },
        onLoad: function(e) {
          this.getAllReceiveRecord()
        },
        methods: {
          getAllReceiveRecord: function() {
            var e = this;
            this.$uniApi.getRequestNoLoading("get", "product/app/userEquityCard/allReceiveRecord").then((function(a) {
              1 === a.code ? e.recordData = a.data : e.$util.showToast(a.msg)
            }))
          },
          hexToRGBA: function(e, a) {
            var n = e.toLowerCase();
            if (n && /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(n)) {
              if (4 === n.length) {
                for (var t = "#", r = 1; r < 4; r += 1) t += n.slice(r, r + 1).concat(n.slice(r, r + 1));
                n = t
              }
              for (var o = [], c = 1; c < 7; c += 2) o.push(parseInt("0x" + n.slice(c, c + 2)));
              return "rgba(" + o.join(",") + "," + a + ")"
            }
            return n
          },
          toEqDetail: function(e, a) {
            var n = "/subPage/pages/myeqcard/eqdetail?source=2&id=" + e + "&cardName=" + a;
            this.$util.isLogin(n) && this.$navigateTo({
              url: n
            })
          }
        }
      };
      a.default = t
    },
};
