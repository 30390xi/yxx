(global.webpackJsonp = global.webpackJsonp || []).push([
  ["components/ocr/ocrIndex"], {
    1213: function(n, t, e) {
      e.d(t, "b", (function() {
        return o
      })), e.d(t, "c", (function() {
        return c
      })), e.d(t, "a", (function() {}));
      var o = function() {
          this.$createElement;
          this._self._c
        },
        c = []
    },
    7882: function(n, t, e) {
      e.r(t);
      var o = e("1213"),
        c = e("7b62");
      for (var i in c)["default"].indexOf(i) < 0 && function(n) {
        e.d(t, n, (function() {
          return c[n]
        }))
      }(i);
      e("d485");
      var a = e("828b"),
        r = Object(a.a)(c.default, o.b, o.c, !1, null, "ec960686", null, !1, o.a, void 0);
      t.default = r.exports
    },
    "7b62": function(n, t, e) {
      e.r(t);
      var o = e("b344"),
        c = e.n(o);
      for (var i in o)["default"].indexOf(i) < 0 && function(n) {
        e.d(t, n, (function() {
          return o[n]
        }))
      }(i);
      t.default = c.a
    },
    b344: function(n, t, e) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var o = {
        data: function() {
          return {
            showOcr: !1
          }
        },
        props: {
          subscript: {
            type: [String, Number],
            default: function() {
              return ""
            }
          },
          itemIndex: {
            type: [String, Number],
            default: function() {
              return ""
            }
          },
          csflag: {
            type: Boolean,
            default: function() {
              return !1
            }
          }
        },
        created: function() {
          this.csflag || this.getOcrFlag()
        },
        methods: {
          getOcrFlag: function() {
            var n = this;
            this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/sysParam/getInfo", {
              paramKey: "OCR_FLAG"
            }).then((function(t) {
              1 === t.code && t.data[0] && (n.showOcr = 1 == t.data[0].paramValue)
            }))
          },
          ocrFun: function() {
            var n = "/union/pages/cor/indexImage";
            (this.subscript || 0 === this.subscript || "0" === this.subscript) && (n = "/union/pages/cor/indexImage?i=" + this.subscript), (this.itemIndex || 0 === this.itemIndex || "0" === this.itemIndex) && (n = "/union/pages/cor/indexImage?i=" + this.subscript + "&ind=" + this.itemIndex), this.$navigateTo({
              url: n
            })
          }
        }
      };
      t.default = o
    },
    bef2: function(n, t, e) {},
    d485: function(n, t, e) {
      var o = e("bef2");
      e.n(o).a
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["components/ocr/ocrIndex-create-component", {
    "components/ocr/ocrIndex-create-component": function(n, t, e) {
      e("df3c").createComponent(e("7882"))
    }
  },
  [
    ["components/ocr/ocrIndex-create-component"]
  ]
]);
