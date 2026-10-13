require("../../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["union/components1/components/mp-html/node/node"], {
    3789: function(t, o, n) {
      n.r(o);
      var e = n("6179"),
        i = n.n(e);
      for (var r in e)["default"].indexOf(r) < 0 && function(t) {
        n.d(o, t, (function() {
          return e[t]
        }))
      }(r);
      o.default = i.a
    },
    "3b42": function(t, o, n) {
      n.d(o, "b", (function() {
        return e
      })), n.d(o, "c", (function() {
        return i
      })), n.d(o, "a", (function() {}));
      var e = function() {
          this.$createElement;
          this._self._c
        },
        i = []
    },
    4408: function(t, o, n) {},
    "55c0e": function(t, o, n) {
      n.r(o);
      var e = n("3b42"),
        i = n("3789");
      for (var r in i)["default"].indexOf(r) < 0 && function(t) {
        n.d(o, t, (function() {
          return i[t]
        }))
      }(r);
      n("f9cc");
      var s = n("828b"),
        a = n("a8ee"),
        c = Object(s.a)(i.default, e.b, e.c, !1, null, null, null, !1, e.a, void 0);
      "function" == typeof a.a && Object(a.a)(c), o.default = c.exports
    },
    6179: function(t, o, n) {
      (function(t) {
        Object.defineProperty(o, "__esModule", {
          value: !0
        }), o.default = void 0;
        var e = {
          name: "node",
          options: {
            virtualHost: !0
          },
          data: function() {
            return {
              ctrl: {},
              isiOS: t.getSystemInfoSync().system.includes("iOS")
            }
          },
          props: {
            name: String,
            attrs: {
              type: Object,
              default: function() {
                return {}
              }
            },
            childs: Array,
            opts: Array
          },
          components: {
            node: function() {
              Promise.resolve().then(function() {
                return resolve(n("55c0e"))
              }.bind(null, n)).catch(n.oe)
            }
          },
          mounted: function() {
            var t = this;
            this.$nextTick((function() {
              for (t.root = t.$parent;
                "mp-html" !== t.root.$options.name; t.root = t.root.$parent);
            }))
          },
          beforeDestroy: function() {},
          methods: {
            codeLongTap: function(o) {
              "hl-pre" == o.attrs.class && t.setClipboardData({
                data: o.attrs["data-content"],
                showToast: !1,
                success: function() {
                  t.showToast({
                    title: "代码复制成功",
                    duration: 1e3
                  })
                },
                fail: function(t) {
                  console.log("err", t)
                }
              })
            },
            toJSON: function() {
              return this
            },
            play: function(o) {
              if (this.root.$emit("play"), this.root.pauseVideo) {
                for (var n = !1, e = o.target.id, i = this.root._videos.length; i--;) this.root._videos[i].id === e ? n = !0 : this.root._videos[i].pause();
                if (!n) {
                  var r = t.createVideoContext(e, this);
                  r.id = e, this.root.playbackRate && r.playbackRate(this.root.playbackRate), this.root._videos.push(r)
                }
              }
            },
            imgTap: function(o) {
              var n = this.childs[o.currentTarget.dataset.i];
              if (n.a) this.linkTap(n.a);
              else if (!n.attrs.ignore && (this.root.$emit("imgtap", n.attrs), this.root.previewImg)) {
                this.root.imgList = this.root.imgList.filter((function(t) {
                  return -1 == t.indexOf(".gif")
                }));
                var e = this.root.imgList.indexOf(n.attrs.src) > -1 ? this.root.imgList.indexOf(n.attrs.src) : 0;
                t.previewImage({
                  showmenu: this.root.showImgMenu,
                  current: e,
                  urls: this.root.imgList
                })
              }
            },
            imgLongTap: function(t) {},
            imgLoad: function(t) {
              var o = t.currentTarget.dataset.i;
              this.childs[o].w ? (this.opts[1] && !this.ctrl[o] || -1 === this.ctrl[o]) && this.$set(this.ctrl, o, 1) : this.$set(this.ctrl, o, t.detail.width), this.checkReady()
            },
            checkReady: function() {
              var t = this;
              this.root && !this.root.lazyLoad && (this.root._unloadimgs -= 1, this.root._unloadimgs || setTimeout((function() {
                t.root.getRect().then((function(o) {
                  t.root.$emit("ready", o)
                })).catch((function() {
                  t.root.$emit("ready", {})
                }))
              }), 350))
            },
            linkTap: function(o) {
              var n = o.currentTarget ? this.childs[o.currentTarget.dataset.i] : {},
                e = n.attrs || o,
                i = e.href;
              this.root.$emit("linktap", Object.assign({
                innerText: this.root.getText(n.children || [])
              }, e)), i && ("#" === i[0] ? this.root.navigateTo(i.substring(1)).catch((function() {})) : i.split("?")[0].includes("://") ? this.root.copyLink && t.setClipboardData({
                data: i,
                success: function() {
                  return t.showToast({
                    title: "链接已复制"
                  })
                }
              }) : t.navigateTo({
                url: i,
                fail: function() {
                  t.switchTab({
                    url: i,
                    fail: function() {}
                  })
                }
              }))
            },
            mediaError: function(t) {
              var o = t.currentTarget.dataset.i,
                n = this.childs[o];
              if ("video" === n.name || "audio" === n.name) {
                var e = (this.ctrl[o] || 0) + 1;
                if (e > n.src.length && (e = 0), e < n.src.length) return void this.$set(this.ctrl, o, e)
              } else "img" === n.name && (this.opts[2] && this.$set(this.ctrl, o, -1), this.checkReady());
              this.root && this.root.$emit("error", {
                source: n.name,
                attrs: n.attrs,
                errMsg: t.detail.errMsg
              })
            }
          }
        };
        o.default = e
      }).call(this, n("df3c").default)
    },
    a8ee: function(t, o, n) {
      o.a = function(t) {
        t.options.wxsCallMethods || (t.options.wxsCallMethods = [])
      }
    },
    f9cc: function(t, o, n) {
      var e = n("4408");
      n.n(e).a
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["union/components1/components/mp-html/node/node-create-component", {
    "union/components1/components/mp-html/node/node-create-component": function(t, o, n) {
      n("df3c").createComponent(n("55c0e"))
    }
  },
  [
    ["union/components1/components/mp-html/node/node-create-component"]
  ]
]);
