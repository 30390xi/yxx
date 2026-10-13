(global.webpackJsonp = global.webpackJsonp || []).push([
  ["uview-ui/components/u-parse/libs/trees"], {
    "1c8c": function(t, e, i) {},
    9554: function(t, e, i) {
      (function(t, n) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0, t.Parser = {};
        var r = i("066c").errorImg,
          s = {
            components: {
              trees: function() {
                Promise.resolve().then(function() {
                  return resolve(i("a093"))
                }.bind(null, i)).catch(i.oe)
              }
            },
            name: "trees",
            data: function() {
              return {
                controls: [],
                placeholder: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="225"/>',
                errorImg: r,
                loadVideo: "undefined" == typeof plus,
                c: "",
                s: ""
              }
            },
            props: {
              nodes: Array,
              lazyLoad: Boolean,
              loading: String
            },
            mounted: function() {
              for (this.top = this.$parent;
                "parser" != this.top.$options.name; this.top = this.top.$parent);
              this.init()
            },
            methods: {
              init: function() {
                for (var t, e = this.nodes.length; t = this.nodes[--e];)
                  if ("img" == t.name) this.top.imgList.setItem(t.attrs.i, t.attrs.src);
                  else if ("video" == t.name || "audio" == t.name) {
                  var i;
                  "video" == t.name ? i = n.createVideoContext(t.attrs.id, this) : this.$refs[t.attrs.id] && (i = this.$refs[t.attrs.id][0]), i && (i.id = t.attrs.id, this.top.videoContexts.push(i))
                }
              },
              play: function(t) {
                var e = this.top.videoContexts;
                if (e.length > 1 && this.top.autopause)
                  for (var i = e.length; i--;) e[i].id != t.currentTarget.dataset.id && e[i].pause()
              },
              imgtap: function(e) {
                var i = e.currentTarget.dataset.attrs;
                if (!i.ignore) {
                  var r = !0,
                    s = {
                      id: e.target.id,
                      src: i.src,
                      ignore: function() {
                        return r = !1
                      }
                    };
                  if (t.Parser.onImgtap && t.Parser.onImgtap(s), this.top.$emit("imgtap", s), r) {
                    var o = this.top.imgList,
                      a = o[i.i] ? parseInt(i.i) : (o = [i.src], 0);
                    n.previewImage({
                      current: a,
                      urls: o
                    })
                  }
                }
              },
              loadImg: function(t) {
                var e = t.currentTarget.dataset.i;
                this.lazyLoad && !this.controls[e] ? this.$set(this.controls, e, 1) : this.loading && 2 != this.controls[e] && this.$set(this.controls, e, 2)
              },
              linkpress: function(e) {
                var i = !0,
                  r = e.currentTarget.dataset.attrs;
                if (r.ignore = function() {
                    return i = !1
                  }, t.Parser.onLinkpress && t.Parser.onLinkpress(r), this.top.$emit("linkpress", r), i) {
                  if (r["app-id"]) return n.openEmbeddedMiniProgram({
                    appId: r["app-id"],
                    path: r.path
                  });
                  r.href && ("#" == r.href[0] ? this.top.useAnchor && this.top.navigateTo({
                    id: r.href.substring(1)
                  }) : 0 == r.href.indexOf("http") || 0 == r.href.indexOf("//") ? n.setClipboardData({
                    data: r.href,
                    success: function() {
                      return n.showToast({
                        title: "链接已复制"
                      })
                    }
                  }) : n.navigateTo({
                    url: r.href,
                    fail: function() {
                      n.switchTab({
                        url: r.href
                      })
                    }
                  }))
                }
              },
              error: function(t) {
                var e = t.currentTarget,
                  i = e.dataset.source,
                  n = e.dataset.i;
                if ("video" == i || "audio" == i) {
                  var s = this.controls[n] ? this.controls[n].i + 1 : 1;
                  s < this.nodes[n].attrs.source.length && this.$set(this.controls, n, s), t.detail.__args__ && (t.detail = t.detail.__args__[0])
                } else r && "img" == i && (this.top.imgList.setItem(e.dataset.index, r), this.$set(this.controls, n, 3));
                this.top && this.top.$emit("error", {
                  source: i,
                  target: e,
                  errMsg: t.detail.errMsg
                })
              },
              _loadVideo: function(t) {
                this.$set(this.controls, t.target.dataset.i, 0)
              }
            }
          };
        e.default = s
      }).call(this, i("0ee4"), i("df3c").default)
    },
    a093: function(t, e, i) {
      i.r(e);
      var n = i("d23a"),
        r = i("bf92");
      for (var s in r)["default"].indexOf(s) < 0 && function(t) {
        i.d(e, t, (function() {
          return r[t]
        }))
      }(s);
      i("d8e5");
      var o = i("828b"),
        a = i("af30"),
        c = Object(o.a)(r.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
      "function" == typeof a.a && Object(a.a)(c), e.default = c.exports
    },
    af30: function(t, e, i) {
      e.a = function(t) {
        t.options.wxsCallMethods || (t.options.wxsCallMethods = [])
      }
    },
    bf92: function(t, e, i) {
      i.r(e);
      var n = i("9554"),
        r = i.n(n);
      for (var s in n)["default"].indexOf(s) < 0 && function(t) {
        i.d(e, t, (function() {
          return n[t]
        }))
      }(s);
      e.default = r.a
    },
    d23a: function(t, e, i) {
      i.d(e, "b", (function() {
        return n
      })), i.d(e, "c", (function() {
        return r
      })), i.d(e, "a", (function() {}));
      var n = function() {
          this.$createElement;
          this._self._c
        },
        r = []
    },
    d8e5: function(t, e, i) {
      var n = i("1c8c");
      i.n(n).a
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["uview-ui/components/u-parse/libs/trees-create-component", {
    "uview-ui/components/u-parse/libs/trees-create-component": function(t, e, i) {
      i("df3c").createComponent(i("a093"))
    }
  },
  [
    ["uview-ui/components/u-parse/libs/trees-create-component"]
  ]
]);
