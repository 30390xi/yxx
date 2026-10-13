require("../../../@babel/runtime/helpers/Arrayincludes"), require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPage/components/Parser/jyf-parser"], {
    "09f4": function(e, t, n) {
      n.d(t, "b", (function() {
        return i
      })), n.d(t, "c", (function() {
        return o
      })), n.d(t, "a", (function() {}));
      var i = function() {
          this.$createElement;
          var e = (this._self._c, this.nodes.length);
          this.$mp.data = Object.assign({}, {
            $root: {
              g0: e
            }
          })
        },
        o = []
    },
    4592: function(e, t, n) {
      var i = n("f111");
      n.n(i).a
    },
    5798: function(e, t, n) {
      n.r(t);
      var i = n("09f4"),
        o = n("e0bb");
      for (var r in o)["default"].indexOf(r) < 0 && function(e) {
        n.d(t, e, (function() {
          return o[e]
        }))
      }(r);
      n("4592");
      var a = n("828b"),
        s = Object(a.a)(o.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
      t.default = s.exports
    },
    9639: function(e, t, n) {
      (function(e, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var o = {},
          r = e.getFileSystemManager ? e.getFileSystemManager() : null,
          a = n("c6ca"),
          s = {
            name: "parser",
            data: function() {
              return {
                showAm: "",
                nodes: []
              }
            },
            components: {
              trees: function() {
                n.e("subPage/components/Parser/libs/trees").then(function() {
                  return resolve(n("1044"))
                }.bind(null, n)).catch(n.oe)
              }
            },
            props: {
              html: String,
              autopause: {
                type: Boolean,
                default: !0
              },
              autoscroll: Boolean,
              autosetTitle: {
                type: Boolean,
                default: !0
              },
              compress: Number,
              loadingImg: String,
              useCache: Boolean,
              domain: String,
              lazyLoad: Boolean,
              selectable: Boolean,
              tagStyle: Object,
              showWithAnimation: Boolean,
              useAnchor: Boolean
            },
            watch: {
              html: function(e) {
                this.setContent(e)
              }
            },
            created: function() {
              this.imgList = [], this.imgList.each = function(e) {
                for (var t = 0, n = this.length; t < n; t++) this.setItem(t, e(this[t], t, this))
              }, this.imgList.setItem = function(e, t) {
                var n = this;
                if (null != e && t) {
                  if (0 == t.indexOf("http") && this.includes(t)) {
                    for (var o, a = t.split("://")[0], s = a.length;
                      (o = t[s]) && ("/" != o || "/" == t[s - 1] || "/" == t[s + 1]); s++) a += Math.random() > .5 ? o.toUpperCase() : o;
                    return a += t.substr(s), this[e] = a
                  }
                  if (this[e] = t, t.includes("data:image")) {
                    var c, l = t.match(/data:image\/(\S+?);(\S+?),(.+)/);
                    if (!l) return;
                    c = "".concat(i.env.USER_DATA_PATH, "/").concat(Date.now(), ".").concat(l[1]), r && r.writeFile({
                      filePath: c,
                      data: l[3],
                      encoding: l[2],
                      success: function() {
                        return n[e] = c
                      }
                    })
                  }
                }
              }
            },
            mounted: function() {
              this.html && this.setContent(this.html)
            },
            beforeDestroy: function() {
              this.imgList.each((function(t) {
                t && t.includes(e.env.USER_DATA_PATH) && r && r.unlink({
                  filePath: t
                })
              })), clearInterval(this._timer)
            },
            methods: {
              setContent: function(t, n) {
                var i, r = this;
                if (!t) return this.nodes = [];
                var s, c = new a(t, this);
                if (this.useCache) {
                  var l = function(e) {
                    for (var t = e.length, n = 5381; t--;) n += (n << 5) + e.charCodeAt(t);
                    return n
                  }(t);
                  o[l] ? i = o[l] : (i = c.parse(), o[l] = i)
                } else i = c.parse();
                this.$emit("parse", i), this.nodes = n ? this.nodes.concat(i) : i, i.length && i.title && this.autosetTitle && e.setNavigationBarTitle({
                  title: i.title
                }), this.imgList && (this.imgList.length = 0), this.videoContexts = [], this.$nextTick((function() {
                  (function e(t) {
                    for (var n = t.length; n--;) t[n].top && (t[n].controls = [], t[n].init(), e(t[n].$children))
                  })(r.$children), r.$emit("load")
                })), clearInterval(this._timer), this._timer = setInterval((function() {
                  e.createSelectorQuery().in(r).select("#_top").boundingClientRect().exec((function(e) {
                    e && (r.rect = e[0], r.rect.height == s && (r.$emit("ready", r.rect), clearInterval(r._timer)), s = r.rect.height)
                  }))
                }), 350), this.showWithAnimation && !n && (this.showAm = "animation:_show .5s")
              },
              getText: function() {
                for (var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.nodes, n = "", i = 0; e = t[i++];)
                  if ("text" == e.type) n += e.text.replace(/&nbsp;/g, " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
                  else if ("br" == e.type) n += "\n";
                else {
                  var o = "p" == e.name || "div" == e.name || "tr" == e.name || "li" == e.name || "h" == e.name[0] && e.name[1] > "0" && e.name[1] < "7";
                  o && n && "\n" != n[n.length - 1] && (n += "\n"), e.children && (n += this.getText(e.children)), o && "\n" != n[n.length - 1] ? n += "\n" : "td" != e.name && "th" != e.name || (n += "\t")
                }
                return n
              },
              navigateTo: function(t) {
                if (!this.useAnchor) return t.fail && t.fail({
                  errMsg: "Anchor is disabled"
                });
                e.createSelectorQuery().in(this).select("#_top" + (t.id ? ">>>#" + t.id + ",#_top>>>." + t.id : "")).boundingClientRect().selectViewport().scrollOffset().exec((function(n) {
                  if (!n || !n[0]) return t.fail && t.fail({
                    errMsg: "Label not found"
                  });
                  t.scrollTop = n[1].scrollTop + n[0].top + (t.offset || 0), e.pageScrollTo(t)
                }))
              },
              getVideoContext: function(e) {
                if (!e) return this.videoContexts;
                for (var t = this.videoContexts.length; t--;)
                  if (this.videoContexts[t].id == e) return this.videoContexts[t]
              }
            }
          };
        t.default = s
      }).call(this, n("df3c").default, n("3223").default)
    },
    e0bb: function(e, t, n) {
      n.r(t);
      var i = n("9639"),
        o = n.n(i);
      for (var r in i)["default"].indexOf(r) < 0 && function(e) {
        n.d(t, e, (function() {
          return i[e]
        }))
      }(r);
      t.default = o.a
    },
    f111: function(e, t, n) {}
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["subPage/components/Parser/jyf-parser-create-component", {
    "subPage/components/Parser/jyf-parser-create-component": function(e, t, n) {
      n("df3c").createComponent(n("5798"))
    }
  },
  [
    ["subPage/components/Parser/jyf-parser-create-component"]
  ]
]);
