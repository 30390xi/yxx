<template>
<canvas :id="canvasId" :style="style" type="2d" v-if="use2dCanvas"></canvas>
<canvas :canvasId="canvasId" :height="boardHeight*dpr" :id="canvasId" :style="style" :width="boardWidth*dpr" v-else></canvas>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
            name: "l-painter",
            props: {
              board: Object,
              fileType: {
                type: String,
                default: "png"
              },
              quality: {
                type: Number,
                default: 1
              },
              width: [Number, String],
              height: [Number, String],
              pixelRatio: Number,
              customStyle: String,
              isRenderImage: Boolean,
              isBase64ToPath: Boolean,
              isH5PathToBase64: Boolean,
              sleep: {
                type: Number,
                default: 1e3 / 30
              },
              type: {
                type: String,
                default: "2d"
              }
            },
            data: function() {
              return {
                canvasId: "l-painter",
                use2dCanvas: !0,
                draw: null,
                ctx: null,
                layout: new c.Layout
              }
            },
            computed: {
              newboard: function() {
                return this.board && JSON.parse(JSON.stringify(this.board))
              },
              style: function() {
                return "width:".concat(this.boardWidth, "px; height: ").concat(this.boardHeight, "px; ").concat(this.customStyle)
              },
              dpr: function() {
                return this.pixelRatio || uni.getSystemInfoSync().pixelRatio
              },
              boardWidth: function() {
                var e = (this.board || {}).width,
                  t = void 0 === e ? 200 : e;
                return (0, s.toPx)(this.width || t)
              },
              boardHeight: function() {
                var e = (this.board || {}).height,
                  t = void 0 === e ? 200 : e;
                return (0, s.toPx)(this.height || t)
              }
            },
            watch: {
              style: function() {
                this.use2dCanvas && (this.inited = !1)
              }
            },
            mounted: function() {
              var e = this,
                t = uni.getSystemInfoSync(),
                n = t.SDKVersion,
                a = t.version,
                u = t.platform;
              this.use2dCanvas = "2d" === this.type && (0, s.compareVersion)(n, "2.9.2") >= 0 && !(/ios/.test(u) && /7.0.20/.test(a)), this.$watch("board", function() {
                var t = (0, o.default)(i.default.mark((function t(n, r) {
                  return i.default.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if ("{}" !== JSON.stringify(n) && n) {
                          t.next = 2;
                          break
                        }
                        return t.abrupt("return");
                      case 2:
                        e.render();
                      case 3:
                      case "end":
                        return t.stop()
                    }
                  }), t)
                })));
                return function(e, n) {
                  return t.apply(this, arguments)
                }
              }(), {
                deep: !0,
                immediate: !0
              })
            },
            methods: {
              render: function() {
                var e = arguments,
                  t = this;
                return (0, o.default)(i.default.mark((function n() {
                  var r, a, c, d, f, l, p, h, v, b, m, x;
                  return i.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        return r = e.length > 0 && void 0 !== e[0] ? e[0] : {}, a = e.length > 1 && void 0 !== e[1] && e[1], c = "{}" != JSON.stringify(r), n.next = 5, t.getContext();
                      case 5:
                        if (d = n.sent, f = t.use2dCanvas, l = t.boardWidth, p = t.boardHeight, h = t.board, v = t.canvas, b = t.isBase64ToPath, m = t.isH5PathToBase64, x = t.sleep, !f || v) {
                          n.next = 9;
                          break
                        }
                        return n.abrupt("return", Promise.reject(new Error("render: fail canvas has not been created")));
                      case 9:
                        if (t.boundary = {
                            top: 0,
                            left: 0,
                            width: l,
                            height: p
                          }, a || d.clearRect(0, 0, l, p), t.draw && !c || (t.draw = new u.Draw(d, v, f, m, x)), t.layout.init(d, t.boundary, t.isH5PathToBase64), !(c || h && "{}" != JSON.stringify(h))) {
                          n.next = 17;
                          break
                        }
                        return n.next = 16, t.layout.calcNode(c ? r : h);
                      case 16:
                        t.node = n.sent;
                      case 17:
                        if (!t.node) {
                          n.next = 20;
                          break
                        }
                        return n.next = 20, t.draw.drawNode(t.node);
                      case 20:
                        return n.next = 22, new Promise((function(e) {
                          return t.$nextTick(e)
                        }));
                      case 22:
                        if (f || a) {
                          n.next = 25;
                          break
                        }
                        return n.next = 25, t.canvasDraw(d);
                      case 25:
                        return t.$emit("done"), t.isRenderImage && !a && uni.canvasToTempFilePath().then(function() {
                          var e = (0, o.default)(i.default.mark((function e(n) {
                            var r;
                            return i.default.wrap((function(e) {
                              for (;;) switch (e.prev = e.next) {
                                case 0:
                                  if (!/^data:image\/(\w+);base64/.test(n.tempFilePath) || !b) {
                                    e.next = 7;
                                    break
                                  }
                                  return e.next = 3, (0, s.base64ToPath)(n.tempFilePath);
                                case 3:
                                  r = e.sent, t.$emit("success", r), e.next = 8;
                                  break;
                                case 7:
                                  t.$emit("success", n.tempFilePath);
                                case 8:
                                case "end":
                                  return e.stop()
                              }
                            }), e)
                          })));
                          return function(t) {
                            return e.apply(this, arguments)
                          }
                        }()).catch((function(e) {
                          t.$emit("fail", e), new Error(JSON.stringify(e)), console.error(JSON.stringify(e))
                        })), n.abrupt("return", Promise.resolve({
                          ctx: d,
                          draw: t.draw
                        }));
                      case 28:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              custom: function(e) {
                var t = this;
                return (0, o.default)(i.default.mark((function n() {
                  var r, a, o;
                  return i.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        return n.next = 2, t.render({}, !0);
                      case 2:
                        return r = n.sent, a = r.ctx, o = r.draw, a.save(), n.next = 8, e(a, o);
                      case 8:
                        return a.restore(), n.abrupt("return", Promise.resolve(!0));
                      case 10:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              single: function() {
                var e = arguments,
                  t = this;
                return (0, o.default)(i.default.mark((function n() {
                  var r;
                  return i.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        return r = e.length > 0 && void 0 !== e[0] ? e[0] : {}, n.next = 3, t.render(r, !0);
                      case 3:
                        return n.abrupt("return", Promise.resolve(!0));
                      case 4:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              canvasDraw: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                  t = this.ctx;
                return new Promise((function(n) {
                  t.draw(e, (function() {
                    n(!0)
                  }))
                }))
              },
              getContext: function() {
                var t = this;
                return (0, o.default)(i.default.mark((function n() {
                  var r, a, o, s, u, c;
                  return i.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        if (!t.ctx || !t.inited) {
                          n.next = 2;
                          break
                        }
                        return n.abrupt("return", Promise.resolve(t.ctx));
                      case 2:
                        return r = t.type, a = t.use2dCanvas, o = t.dpr, s = t.boardWidth, u = t.boardHeight, n.next = 6, new Promise((function(e) {
                          return t.$nextTick(e)
                        }));
                      case 6:
                        if (c = function() {
                            return new Promise((function(n) {
                              uni.createSelectorQuery().in(t).select("#" + t.canvasId).boundingClientRect().exec((function(r) {
                                if (r) {
                                  var a = e.createCanvasContext(t.canvasId, t);
                                  t.inited || (t.inited = !0, t.use2dCanvas = !1, t.canvas = r), t.ctx = (0, d.expand)(a), n(t.ctx)
                                }
                              }))
                            }))
                          }, a) {
                          n.next = 9;
                          break
                        }
                        return n.abrupt("return", c());
                      case 9:
                        return n.abrupt("return", new Promise((function(n) {
                          uni.createSelectorQuery().in(t).select("#l-painter").node().exec((function(e) {
                            var a = e[0].node;
                            if (!a) return t.use2dCanvas = !1, t.getContext();
                            var i = a.getContext(r);
                            t.inited || (t.inited = !0, a.width = s * o, a.height = u * o, t.use2dCanvas = !0, t.canvas = a, i.scale(o, o)), t.ctx = (0, d.adaptor)(i), n(t.ctx)
                          }))
                        })));
                      case 10:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              canvasToTempFilePath: function() {
                var t = this,
                  n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  r = this.use2dCanvas,
                  a = this.canvasId;
                return new Promise((function(i, o) {
                  var s = t.boundary || t,
                    u = s.top,
                    c = void 0 === u ? 0 : u,
                    d = s.left,
                    f = void 0 === d ? 0 : d,
                    l = s.width,
                    p = s.height,
                    h = {
                      x: f,
                      y: c,
                      width: l,
                      height: p,
                      destWidth: l * t.dpr,
                      destHeight: p * t.dpr,
                      canvasId: a,
                      fileType: n.fileType || t.fileType,
                      quality: /\d/.test(n.quality) ? n.quality : t.quality,
                      success: i,
                      fail: o
                    };
                  r && (delete h.canvasId, h.canvas = t.canvas), uni.canvasToTempFilePath(h, t)
                }))
              }
            }
          };
</script>
