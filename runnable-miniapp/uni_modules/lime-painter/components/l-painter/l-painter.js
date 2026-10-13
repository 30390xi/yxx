(global.webpackJsonp = global.webpackJsonp || []).push([
  ["uni_modules/lime-painter/components/l-painter/l-painter"], {
    "59d8": function(e, t, n) {
      n.r(t);
      var a = n("f2e1"),
        r = n.n(a);
      for (var i in a)["default"].indexOf(i) < 0 && function(e) {
        n.d(t, e, (function() {
          return a[e]
        }))
      }(i);
      t.default = r.a
    },
    "822f": function(e, t, n) {},
    a74c: function(e, t, n) {
      n.d(t, "b", (function() {
        return a
      })), n.d(t, "c", (function() {
        return r
      })), n.d(t, "a", (function() {}));
      var a = function() {
          this.$createElement;
          this._self._c
        },
        r = []
    },
    e6a4: function(e, t, n) {
      n.r(t);
      var a = n("a74c"),
        r = n("59d8");
      for (var i in r)["default"].indexOf(i) < 0 && function(e) {
        n.d(t, e, (function() {
          return r[e]
        }))
      }(i);
      n("eefd");
      var s = n("828b"),
        c = Object(s.a)(r.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
      t.default = c.exports
    },
    eefd: function(e, t, n) {
      var a = n("822f");
      n.n(a).a
    },
    f2e1: function(e, t, n) {
      (function(e) {
        var a = n("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var r = a(n("7eb4")),
          i = a(n("ee10")),
          s = n("6a48"),
          c = n("ec4b"),
          o = a(n("786e")),
          u = {
            name: "lime-painter",
            mixins: [(0, s.parent)("painter")],
            props: {
              board: Object,
              pathType: String,
              fileType: {
                type: String,
                default: "png"
              },
              quality: {
                type: Number,
                default: 1
              },
              css: [String, Object],
              width: [Number, String],
              height: [Number, String],
              pixelRatio: Number,
              customStyle: String,
              isCanvasToTempFilePath: Boolean,
              sleep: {
                type: Number,
                default: 1e3 / 30
              },
              beforeDelay: {
                type: Number,
                default: 100
              },
              afterDelay: {
                type: Number,
                default: 100
              },
              type: {
                type: String,
                default: "2d"
              }
            },
            data: function() {
              return {
                use2dCanvas: !0,
                canvasHeight: 150,
                canvasWidth: null,
                isPC: !1,
                inited: !1,
                progress: 0
              }
            },
            computed: {
              canvasId: function() {
                return "l-painter".concat(this._uid)
              },
              size: function() {
                if (this.boardWidth && this.boardHeight) return console.log(this.boardWidth), "width:".concat(this.boardWidth, "px; height: ").concat(this.boardHeight, "px;")
              },
              dpr: function() {
                return this.pixelRatio || e.getSystemInfoSync().pixelRatio
              },
              boardWidth: function() {
                var e = (this.board && this.board.css || this.board || this).width,
                  t = void 0 === e ? 0 : e;
                return (0, c.toPx)(t) || Math.max((0, c.toPx)(t), (0, c.toPx)(this.canvasWidth))
              },
              boardHeight: function() {
                var e = (this.board && this.board.css || this.board || this).height,
                  t = void 0 === e ? 0 : e;
                return (0, c.toPx)(t) || Math.max((0, c.toPx)(t), (0, c.toPx)(this.canvasHeight))
              },
              elements: function() {
                return JSON.parse(JSON.stringify(this.el))
              }
            },
            watch: {
              canvasWidth: function(e) {
                this.el.css && !this.el.css.width && (this.el.css.width = e)
              },
              size: function(e) {
                this.use2dCanvas && (this.inited = !1)
              }
            },
            created: function() {
              var t = e.getSystemInfoSync(),
                n = t.SDKVersion,
                a = t.version,
                r = t.platform,
                i = t.environment;
              this.isPC = /windows/i.test(r), this.use2dCanvas = "2d" === this.type && (0, c.compareVersion)(n, "2.9.2") >= 0 && !(/ios/i.test(r) && /7.0.20/.test(a) || /wxwork/i.test(i)) && !this.isPC
            },
            mounted: function() {
              var e = this;
              return (0, i.default)(r.default.mark((function t() {
                return r.default.wrap((function(t) {
                  for (;;) switch (t.prev = t.next) {
                    case 0:
                      return t.next = 2, e.getParentWeith();
                    case 2:
                      e.$nextTick((function() {
                        setTimeout((function() {
                          e.board ? e.$watch("board", e.watchRender, {
                            deep: !0,
                            immediate: !0
                          }) : e.$watch("elements", e.watchRender, {
                            deep: !0,
                            immediate: !0
                          })
                        }), 30)
                      }));
                    case 3:
                    case "end":
                      return t.stop()
                  }
                }), t)
              })))()
            },
            methods: {
              watchRender: function(e, t) {
                var n = this;
                return (0, i.default)(r.default.mark((function a() {
                  return r.default.wrap((function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        if (n.progress = 0, e && e.views && e.views.length && "{}" !== JSON.stringify(e) && JSON.stringify(e) != JSON.stringify(t)) {
                          a.next = 3;
                          break
                        }
                        return a.abrupt("return");
                      case 3:
                        clearTimeout(n.rendertimer), n.rendertimer = setTimeout((function() {
                          n.render(e)
                        }), n.beforeDelay);
                      case 5:
                      case "end":
                        return a.stop()
                    }
                  }), a)
                })))()
              },
              setFilePath: function(e, t) {
                var n = this;
                return (0, i.default)(r.default.mark((function a() {
                  var i, s;
                  return r.default.wrap((function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        if (i = e, "base64" != (s = n.pathType) || (0, c.isBase64)(e)) {
                          a.next = 8;
                          break
                        }
                        return a.next = 5, (0, c.pathToBase64)(e);
                      case 5:
                        i = a.sent, a.next = 12;
                        break;
                      case 8:
                        if ("url" != s || !(0, c.isBase64)(e)) {
                          a.next = 12;
                          break
                        }
                        return a.next = 11, (0, c.base64ToPath)(e);
                      case 11:
                        i = a.sent;
                      case 12:
                        return t && n.$emit("success", i), a.abrupt("return", i);
                      case 14:
                      case "end":
                        return a.stop()
                    }
                  }), a)
                })))()
              },
              getSize: function(e) {
                var t = this;
                return (0, i.default)(r.default.mark((function n() {
                  var a, i, s, o;
                  return r.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        if (t.size) {
                          n.next = 12;
                          break
                        }
                        if (a = e.css || e, i = a.width, s = e.css || e, o = s.height, !i && !o) {
                          n.next = 10;
                          break
                        }
                        return t.canvasWidth = i || t.canvasWidth, t.canvasHeight = o || t.canvasHeight, n.next = 8, (0, c.sleep)(30);
                      case 8:
                        n.next = 12;
                        break;
                      case 10:
                        return n.next = 12, t.getParentWeith();
                      case 12:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              canvasToTempFilePathSync: function(e) {
                var t = this;
                this.$watch("progress", (function(n) {
                  1 == n && t.canvasToTempFilePath(e)
                }), {
                  immediate: !0
                })
              },
              getParentWeith: function() {
                var t = this;
                return new Promise((function(n) {
                  e.createSelectorQuery().in(t).select(".lime-painter").boundingClientRect().exec((function(e) {
                    t.canvasWidth = Math.ceil(e[0].width) || (0, c.toPx)("750rpx"), t.canvasHeight = e[0].height || t.canvasHeight || 150, n(e[0])
                  }))
                }))
              },
              render: function() {
                var e = arguments,
                  t = this;
                return (0, i.default)(r.default.mark((function n() {
                  var a, s, u, d, f, h, l, p, v, m;
                  return r.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        return a = e.length > 0 && void 0 !== e[0] ? e[0] : {}, n.next = 3, t.getSize(a);
                      case 3:
                        return n.next = 5, t.getContext();
                      case 5:
                        if (s = n.sent, u = t.use2dCanvas, d = t.boardWidth, f = t.boardHeight, h = t.canvas, l = t.afterDelay, !u || h) {
                          n.next = 9;
                          break
                        }
                        return n.abrupt("return", Promise.reject(new Error("render: fail canvas has not been created")));
                      case 9:
                        return t.boundary = {
                          top: 0,
                          left: 0,
                          width: d,
                          height: f
                        }, t.painter || (t.painter = new o.default({
                          context: s,
                          canvas: h,
                          width: d,
                          height: f,
                          pixelRatio: t.dpr,
                          fixed: "".concat(t.width ? "width" : "").concat(t.height ? "height" : ""),
                          listen: {
                            onProgress: function(e) {
                              t.progress = e, t.$emit("progress", e)
                            },
                            onEffectFail: function(e) {
                              t.$emit("faill", e)
                            }
                          }
                        }, t)), n.next = 13, t.painter.source(a);
                      case 13:
                        return p = n.sent, v = p.width, m = p.height, t.boundary.height = t.canvasHeight = m, t.boundary.width = t.canvasWidth = v, n.next = 20, (0, c.sleep)(t.sleep);
                      case 20:
                        return n.next = 22, t.painter.render();
                      case 22:
                        return n.next = 24, new Promise((function(e) {
                          return t.$nextTick(e)
                        }));
                      case 24:
                        if (u) {
                          n.next = 27;
                          break
                        }
                        return n.next = 27, t.canvasDraw();
                      case 27:
                        if (!l || !u) {
                          n.next = 30;
                          break
                        }
                        return n.next = 30, (0, c.sleep)(l);
                      case 30:
                        return t.$emit("done"), t.isCanvasToTempFilePath && t.canvasToTempFilePath().then(function() {
                          var e = (0, i.default)(r.default.mark((function e(n) {
                            return r.default.wrap((function(e) {
                              for (;;) switch (e.prev = e.next) {
                                case 0:
                                  t.$emit("success", n.tempFilePath);
                                case 1:
                                case "end":
                                  return e.stop()
                              }
                            }), e)
                          })));
                          return function(t) {
                            return e.apply(this, arguments)
                          }
                        }()).catch((function(e) {
                          t.$emit("fail", new Error(JSON.stringify(e)))
                        })), n.abrupt("return", Promise.resolve({
                          ctx: s,
                          draw: t.painter,
                          node: t.node
                        }));
                      case 33:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              canvasDraw: function() {
                var e = this,
                  t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return new Promise((function(n, a) {
                  return e.ctx.draw(t, (function() {
                    return setTimeout((function() {
                      return n()
                    }), e.afterDelay)
                  }))
                }))
              },
              getContext: function() {
                var t = this;
                return (0, i.default)(r.default.mark((function n() {
                  var a, i, s, c;
                  return r.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        if (t.canvasWidth) {
                          n.next = 4;
                          break
                        }
                        return t.$emit("fail", "painter no size"), console.error("painter no size: 请给画板或父级设置尺寸"), n.abrupt("return", Promise.reject());
                      case 4:
                        if (!t.ctx || !t.inited) {
                          n.next = 6;
                          break
                        }
                        return n.abrupt("return", Promise.resolve(t.ctx));
                      case 6:
                        if (a = t.type, i = t.use2dCanvas, s = t.dpr, t.boardWidth, t.boardHeight, c = function() {
                            return new Promise((function(n) {
                              e.createSelectorQuery().in(t).select("#".concat(t.canvasId)).boundingClientRect().exec((function(a) {
                                if (a) {
                                  var r = e.createCanvasContext(t.canvasId, t);
                                  t.inited || (t.inited = !0, t.use2dCanvas = !1, t.canvas = a), t.isPC && r.scale(1 / s, 1 / s), t.ctx = r, n(t.ctx)
                                }
                              }))
                            }))
                          }, i) {
                          n.next = 10;
                          break
                        }
                        return n.abrupt("return", c());
                      case 10:
                        return n.abrupt("return", new Promise((function(n) {
                          e.createSelectorQuery().in(t).select("#".concat(t.canvasId)).node().exec((function(e) {
                            var r = e[0].node;
                            r || (t.use2dCanvas = !1, n(t.getContext()));
                            var i = r.getContext(a);
                            t.inited || (t.inited = !0, t.use2dCanvas = !0, t.canvas = r), t.ctx = i, n(t.ctx)
                          }))
                        })));
                      case 11:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              canvasToTempFilePath: function() {
                var t = this,
                  n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  a = this.use2dCanvas,
                  s = this.canvasId,
                  c = this.dpr,
                  o = this.fileType,
                  u = this.quality;
                return new Promise((function(d, f) {
                  var h = t.boundary || t,
                    l = h.top,
                    p = void 0 === l ? 0 : l,
                    v = h.left,
                    m = void 0 === v ? 0 : v,
                    b = h.width,
                    x = h.height,
                    g = b * c,
                    w = x * c,
                    y = function() {
                      var e = (0, i.default)(r.default.mark((function e(n) {
                        var a;
                        return r.default.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                            case 0:
                              return e.prev = 0, e.next = 3, t.setFilePath(n.tempFilePath);
                            case 3:
                              a = e.sent, d(Object.assign(n, {
                                tempFilePath: a
                              })), e.next = 10;
                              break;
                            case 7:
                              e.prev = 7, e.t0 = e.catch(0), t.$emit("fail", e.t0);
                            case 10:
                            case "end":
                              return e.stop()
                          }
                        }), e, null, [
                          [0, 7]
                        ])
                      })));
                      return function(t) {
                        return e.apply(this, arguments)
                      }
                    }(),
                    P = Object.assign({
                      x: m,
                      y: p,
                      width: b,
                      height: x,
                      destWidth: g,
                      destHeight: w,
                      canvasId: s,
                      fileType: o,
                      quality: u,
                      success: y,
                      fail: f
                    }, n);
                  a && (delete P.canvasId, P.canvas = t.canvas), e.canvasToTempFilePath(P, t)
                }))
              }
            }
          };
        t.default = u
      }).call(this, n("df3c").default)
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["uni_modules/lime-painter/components/l-painter/l-painter-create-component", {
    "uni_modules/lime-painter/components/l-painter/l-painter-create-component": function(e, t, n) {
      n("df3c").createComponent(n("e6a4"))
    }
  },
  [
    ["uni_modules/lime-painter/components/l-painter/l-painter-create-component"]
  ]
]);
