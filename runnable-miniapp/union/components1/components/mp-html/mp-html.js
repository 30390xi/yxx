require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["union/components1/components/mp-html/mp-html"], {
    "0e14": function(t, e, n) {
      n.r(e);
      var o = n("aa40"),
        i = n("7267");
      for (var a in i)["default"].indexOf(a) < 0 && function(t) {
        n.d(e, t, (function() {
          return i[t]
        }))
      }(a);
      n("24c2");
      var c = n("828b"),
        r = Object(c.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
      e.default = r.exports
    },
    "14c09": function(t, e, n) {},
    "24c2": function(t, e, n) {
      var o = n("14c09");
      n.n(o).a
    },
    7267: function(t, e, n) {
      n.r(e);
      var o = n("a3f1"),
        i = n.n(o);
      for (var a in o)["default"].indexOf(a) < 0 && function(t) {
        n.d(e, t, (function() {
          return o[t]
        }))
      }(a);
      e.default = i.a
    },
    a3f1: function(t, e, n) {
      (function(t) {
        var o = n("47a9");
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var i = o(n("dc7d")),
          a = o(n("5865")),
          c = o(n("4fa2")),
          r = o(n("04ab")),
          l = [a.default, c.default, r.default],
          s = {
            name: "mp-html",
            data: function() {
              return {
                nodes: []
              }
            },
            props: {
              markdown: Boolean,
              containerStyle: {
                type: String,
                default: ""
              },
              content: {
                type: String,
                default: ""
              },
              copyLink: {
                type: [Boolean, String],
                default: !0
              },
              domain: String,
              errorImg: {
                type: String,
                default: ""
              },
              lazyLoad: {
                type: [Boolean, String],
                default: !1
              },
              loadingImg: {
                type: String,
                default: ""
              },
              pauseVideo: {
                type: [Boolean, String],
                default: !0
              },
              previewImg: {
                type: [Boolean, String],
                default: !0
              },
              scrollTable: [Boolean, String],
              selectable: [Boolean, String],
              setTitle: {
                type: [Boolean, String],
                default: !0
              },
              showImgMenu: {
                type: [Boolean, String],
                default: !0
              },
              tagStyle: Object,
              useAnchor: [Boolean, Number]
            },
            components: {
              node: function() {
                n.e("union/components1/components/mp-html/node/node").then(function() {
                  return resolve(n("55c0e"))
                }.bind(null, n)).catch(n.oe)
              }
            },
            watch: {
              content: function(t) {
                this.setContent(t)
              }
            },
            created: function() {
              this.plugins = [];
              for (var t = l.length; t--;) this.plugins.push(new l[t](this))
            },
            mounted: function() {
              this.content && !this.nodes.length && this.setContent(this.content)
            },
            beforeDestroy: function() {
              this._hook("onDetached")
            },
            methods: {
              in: function(t, e, n) {
                t && e && n && (this._in = {
                  page: t,
                  selector: e,
                  scrollTop: n
                })
              },
              navigateTo: function(e, n) {
                var o = this;
                return e = this._ids[decodeURI(e)] || e, new Promise((function(i, a) {
                  if (o.useAnchor) {
                    n = n || parseInt(o.useAnchor) || 0;
                    var c = t.createSelectorQuery().in(o._in ? o._in.page : o).select((o._in ? o._in.selector : "._root") + (e ? "".concat(">>>", "#").concat(e) : "")).boundingClientRect();
                    o._in ? c.select(o._in.selector).scrollOffset().select(o._in.selector).boundingClientRect() : c.selectViewport().scrollOffset(), c.exec((function(e) {
                      if (e[0]) {
                        var c = e[1].scrollTop + e[0].top - (e[2] ? e[2].top : 0) + n;
                        o._in ? o._in.page[o._in.scrollTop] = c : t.pageScrollTo({
                          scrollTop: c,
                          duration: 300
                        }), i()
                      } else a(Error("Label not found"))
                    }))
                  } else a(Error("Anchor is disabled"))
                }))
              },
              getText: function(t) {
                var e = "";
                return function t(n) {
                  for (var o = 0; o < n.length; o++) {
                    var i = n[o];
                    if ("text" === i.type) e += i.text.replace(/&amp;/g, "&");
                    else if ("br" === i.name) e += "\n";
                    else {
                      var a = "p" === i.name || "div" === i.name || "tr" === i.name || "li" === i.name || "h" === i.name[0] && i.name[1] > "0" && i.name[1] < "7";
                      a && e && "\n" !== e[e.length - 1] && (e += "\n"), i.children && t(i.children), a && "\n" !== e[e.length - 1] ? e += "\n" : "td" !== i.name && "th" !== i.name || (e += "\t")
                    }
                  }
                }(t || this.nodes), e
              },
              getRect: function() {
                var e = this;
                return new Promise((function(n, o) {
                  t.createSelectorQuery().in(e).select("#_root").boundingClientRect().exec((function(t) {
                    return t[0] ? n(t[0]) : o(Error("Root label not found"))
                  }))
                }))
              },
              pauseMedia: function() {
                for (var t = (this._videos || []).length; t--;) this._videos[t].pause()
              },
              setPlaybackRate: function(t) {
                this.playbackRate = t;
                for (var e = (this._videos || []).length; e--;) this._videos[e].playbackRate(t)
              },
              setContent: function(t, e) {
                var n = this;
                e && this.imgList || (this.imgList = []);
                var o = new i.default(this).parse(t);
                if (this.$set(this, "nodes", e ? (this.nodes || []).concat(o) : o), this._videos = [], this.$nextTick((function() {
                    n._hook("onLoad"), n.$emit("load")
                  })), this.lazyLoad || this.imgList._unloadimgs < this.imgList.length / 2) {
                  var a = 0,
                    c = function t(e) {
                      e && e.height || (e = {}), e.height === a ? n.$emit("ready", e) : (a = e.height, setTimeout((function() {
                        n.getRect().then(t).catch(t)
                      }), 350))
                    };
                  this.getRect().then(c).catch(c)
                } else this.imgList._unloadimgs || this.getRect().then((function(t) {
                  n.$emit("ready", t)
                })).catch((function() {
                  n.$emit("ready", {})
                }))
              },
              _hook: function(t) {
                for (var e = l.length; e--;) this.plugins[e][t] && this.plugins[e][t]()
              }
            }
          };
        e.default = s
      }).call(this, n("df3c").default)
    },
    aa40: function(t, e, n) {
      n.d(e, "b", (function() {
        return o
      })), n.d(e, "c", (function() {
        return i
      })), n.d(e, "a", (function() {}));
      var o = function() {
          this.$createElement;
          this._self._c
        },
        i = []
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["union/components1/components/mp-html/mp-html-create-component", {
    "union/components1/components/mp-html/mp-html-create-component": function(t, e, n) {
      n("df3c").createComponent(n("0e14"))
    }
  },
  [
    ["union/components1/components/mp-html/mp-html-create-component"]
  ]
]);
