require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPage/components/Parser/libs/trees"], {
    1044: function(t, e, r) {
      r.r(e);
      var n = r("1ba3"),
        s = r("9597");
      for (var i in s)["default"].indexOf(i) < 0 && function(t) {
        r.d(e, t, (function() {
          return s[t]
        }))
      }(i);
      r("d8e9");
      var o = r("828b"),
        a = r("38fc"),
        c = Object(o.a)(s.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
      "function" == typeof a.a && Object(a.a)(c), e.default = c.exports
    },
    "1ba3": function(t, e, r) {
      r.d(e, "b", (function() {
        return n
      })), r.d(e, "c", (function() {
        return s
      })), r.d(e, "a", (function() {}));
      var n = function() {
          this.$createElement;
          this._self._c
        },
        s = []
    },
    "38fc": function(t, e, r) {
      e.a = function(t) {
        t.options.wxsCallMethods || (t.options.wxsCallMethods = [])
      }
    },
    4728: function(t, e, r) {},
    9597: function(t, e, r) {
      r.r(e);
      var n = r("d2b7"),
        s = r.n(n);
      for (var i in n)["default"].indexOf(i) < 0 && function(t) {
        r.d(e, t, (function() {
          return n[t]
        }))
      }(i);
      e.default = s.a
    },
    d2b7: function(t, e, r) {
      (function(t, n) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0, t.Parser = {};
        var s = r("e861").errorImg,
          i = {
            components: {
              trees: function() {
                Promise.resolve().then(function() {
                  return resolve(r("1044"))
                }.bind(null, r)).catch(r.oe)
              }
            },
            name: "trees",
            data: function() {
              return {
                controls: [],
                placeholder: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="225"/>',
                errorImg: s,
                loadVideo: !0
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
                  var r;
                  "video" == t.name ? r = n.createVideoContext(t.attrs.id, this) : this.$refs[t.attrs.id] && (r = this.$refs[t.attrs.id][0]), r && (r.id = t.attrs.id, this.top.videoContexts.push(r))
                }
              },
              play: function(t) {
                var e = this.top.videoContexts;
                if (e.length > 1 && this.top.autopause)
                  for (var r = e.length; r--;) e[r].id != t.currentTarget.dataset.id && e[r].pause()
              },
              imgtap: function(e) {
                var r = e.currentTarget.dataset.attrs;
                if (!r.ignore) {
                  var s = !0,
                    i = {
                      id: e.target.id,
                      src: r.src,
                      ignore: function() {
                        return s = !1
                      }
                    };
                  if (t.Parser.onImgtap && t.Parser.onImgtap(i), this.top.$emit("imgtap", i), s) {
                    var o = this.top.imgList,
                      a = o[r.i] ? parseInt(r.i) : (o = [r.src], 0);
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
                var r = !0,
                  s = e.currentTarget.dataset.attrs;
                if (s.ignore = function() {
                    return r = !1
                  }, t.Parser.onLinkpress && t.Parser.onLinkpress(s), this.top.$emit("linkpress", s), r) {
                  if (s["app-id"]) return n.openEmbeddedMiniProgram({
                    appId: s["app-id"],
                    path: s.path
                  });
                  s.href && ("#" == s.href[0] ? this.top.useAnchor && this.top.navigateTo({
                    id: s.href.substring(1)
                  }) : 0 == s.href.indexOf("http") || 0 == s.href.indexOf("//") ? n.setClipboardData({
                    data: s.href,
                    success: function() {
                      return n.showToast({
                        title: "链接已复制"
                      })
                    }
                  }) : n.navigateTo({
                    url: s.href,
                    fail: function() {
                      n.switchTab({
                        url: s.href
                      })
                    }
                  }))
                }
              },
              error: function(t) {
                var e = t.currentTarget,
                  r = e.dataset.source,
                  n = e.dataset.i;
                if ("video" == r || "audio" == r) {
                  var i = this.controls[n] ? this.controls[n].i + 1 : 1;
                  i < this.nodes[n].attrs.source.length && this.$set(this.controls, n, i), t.detail.__args__ && (t.detail = t.detail.__args__[0])
                } else s && "img" == r && (this.top.imgList.setItem(e.dataset.index, s), this.$set(this.controls, n, 3));
                this.top && this.top.$emit("error", {
                  source: r,
                  target: e,
                  errMsg: t.detail.errMsg
                })
              },
              _loadVideo: function(t) {
                this.$set(this.controls, t.target.dataset.i, 0)
              }
            }
          };
        e.default = i
      }).call(this, r("0ee4"), r("df3c").default)
    },
    d8e9: function(t, e, r) {
      var n = r("4728");
      r.n(n).a
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["subPage/components/Parser/libs/trees-create-component", {
    "subPage/components/Parser/libs/trees-create-component": function(t, e, r) {
      r("df3c").createComponent(r("1044"))
    }
  },
  [
    ["subPage/components/Parser/libs/trees-create-component"]
  ]
]);
