(global.webpackJsonp = global.webpackJsonp || []).push([
  ["components/tuitui-painter/painter"], {
    "3a7d": function(t, n, e) {
      e.r(n);
      var r = e("6a470"),
        i = e("a174");
      for (var a in i)["default"].indexOf(a) < 0 && function(t) {
        e.d(n, t, (function() {
          return i[t]
        }))
      }(a);
      var o = e("828b"),
        c = Object(o.a)(i.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
      n.default = c.exports
    },
    "54a2": function(t, n, e) {
      (function(t) {
        var r = e("47a9");
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var i = r(e("9e773")),
          a = r(e("091b"));

        function o(t, n) {
          var e = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
          if (!e) {
            if (Array.isArray(t) || (e = function(t, n) {
                if (t) {
                  if ("string" == typeof t) return c(t, n);
                  var e = Object.prototype.toString.call(t).slice(8, -1);
                  return "Object" === e && t.constructor && (e = t.constructor.name), "Map" === e || "Set" === e ? Array.from(t) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? c(t, n) : void 0
                }
              }(t)) || n && t && "number" == typeof t.length) {
              e && (t = e);
              var r = 0,
                i = function() {};
              return {
                s: i,
                n: function() {
                  return r >= t.length ? {
                    done: !0
                  } : {
                    done: !1,
                    value: t[r++]
                  }
                },
                e: function(t) {
                  throw t
                },
                f: i
              }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }
          var a, o = !0,
            s = !1;
          return {
            s: function() {
              e = e.call(t)
            },
            n: function() {
              var t = e.next();
              return o = t.done, t
            },
            e: function(t) {
              s = !0, a = t
            },
            f: function() {
              try {
                o || null == e.return || e.return()
              } finally {
                if (s) throw a
              }
            }
          }
        }

        function c(t, n) {
          (null == n || n > t.length) && (n = t.length);
          for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];
          return r
        }
        var s = e("6a3f"),
          u = new a.default,
          f = {
            props: {
              customStyle: {
                type: String
              },
              palette: {
                type: Object,
                observer: function(t, n) {
                  this.isNeedRefresh(t, n) && (this.paintCount = 0, this.startPaint())
                }
              },
              dirty: {
                type: Boolean,
                value: !1
              }
            },
            data: function() {
              return {
                picURL: "",
                showCanvas: !0,
                painterStyle: "",
                canvasWidthInPx: 0,
                canvasHeightInPx: 0,
                paintCount: 0
              }
            },
            methods: {
              isEmpty: function(t) {
                for (var n in t) return !1;
                return !0
              },
              isNeedRefresh: function(t, n) {
                return !(!t || this.isEmpty(t) || this.data.dirty && s.equal(t, n))
              },
              startPaint: function() {
                var n = this;
                if (!this.isEmpty(this.palette)) {
                  if (!getApp().systemInfo || !getApp().systemInfo.screenWidth) try {
                    getApp().systemInfo = t.getSystemInfoSync()
                  } catch (t) {
                    var e = "Painter get system info failed, ".concat(JSON.stringify(t));
                    return this.$emit("imgErr", {
                      error: e
                    }), void console.error(e)
                  }
                  l = getApp().systemInfo.screenWidth / 750, this.downloadImages().then((function(e) {
                    var r = e.width,
                      a = e.height;
                    if (n.canvasWidthInPx = r.toPx(), n.canvasHeightInPx = a.toPx(), r && a) {
                      n.painterStyle = "width:".concat(r, ";height:").concat(a, ";");
                      var o = t.createCanvasContext("k-canvas", n);
                      new i.default(o, e).paint((function() {
                        n.saveImgToLocal(o)
                      }))
                    } else console.error("You should set width and height correctly for painter, width: ".concat(r, ", height: ").concat(a))
                  }))
                }
              },
              downloadImages: function() {
                var n = this;
                return new Promise((function(e, r) {
                  var i = 0,
                    a = 0,
                    c = JSON.parse(JSON.stringify(n.palette));
                  if (c.background && (i++, u.download(c.background).then((function(t) {
                      c.background = t, a++, i === a && e(c)
                    }), (function() {
                      a++, i === a && e(c)
                    }))), c.views) {
                    var s, f = o(c.views);
                    try {
                      var l = function() {
                        var n = s.value;
                        n && "image" === n.type && n.url && (i++, u.download(n.url).then((function(r) {
                          n.url = r, t.getImageInfo({
                            src: n.url,
                            success: function(t) {
                              n.sWidth = t.width, n.sHeight = t.height
                            },
                            fail: function(t) {
                              n.url = "", console.error("getImageInfo ".concat(n.url, " failed, ").concat(JSON.stringify(t)))
                            },
                            complete: function() {
                              a++, i === a && e(c)
                            }
                          })
                        }), (function() {
                          a++, i === a && e(c)
                        })))
                      };
                      for (f.s(); !(s = f.n()).done;) l()
                    } catch (t) {
                      f.e(t)
                    } finally {
                      f.f()
                    }
                  }
                  0 === i && e(c)
                }))
              },
              saveImgToLocal: function(n) {
                var e = this,
                  r = this;
                setTimeout((function() {
                  t.canvasToTempFilePath({
                    canvasId: "k-canvas",
                    success: function(t) {
                      r.getImageInfo(t.tempFilePath)
                    },
                    fail: function(t) {
                      console.error("canvasToTempFilePath failed, ".concat(JSON.stringify(t))), r.$emit("imgErr", {
                        error: t
                      })
                    }
                  }, e)
                }), 100)
              },
              getImageInfo: function(n) {
                var e = this;
                t.getImageInfo({
                  src: n,
                  success: function(t) {
                    if (e.paintCount > 5) {
                      var r = "The result is always fault, even we tried ".concat(5, " times");
                      return console.error(r), void e.$emit("imgErr", {
                        error: r
                      })
                    }
                    Math.abs((t.width * e.canvasHeightInPx - e.canvasWidthInPx * t.height) / (t.height * e.canvasHeightInPx)) < .01 ? e.$emit("imgOK", {
                      path: n
                    }) : e.startPaint(), e.paintCount++
                  },
                  fail: function(t) {
                    console.error("getImageInfo failed, ".concat(JSON.stringify(t))), e.$emit("imgErr", {
                      error: t
                    })
                  }
                })
              }
            },
            created: function() {
              String.prototype.toPx = function(t) {
                var n = (t ? /^-?[0-9]+([.]{1}[0-9]+){0,1}(rpx|px)$/g : /^[0-9]+([.]{1}[0-9]+){0,1}(rpx|px)$/g).exec(this);
                if (!this || !n) return console.error("The size: ".concat(this, " is illegal")), 0;
                var e = n[2],
                  r = parseFloat(this),
                  i = 0;
                return "rpx" === e ? i = Math.round(r * l) : "px" === e && (i = r), i
              }, setTimeout(function() {
                this.paintCount = 0, this.startPaint()
              }.bind(this), 200)
            }
          };
        n.default = f;
        var l = .5
      }).call(this, e("3223").default)
    },
    "6a470": function(t, n, e) {
      e.d(n, "b", (function() {
        return r
      })), e.d(n, "c", (function() {
        return i
      })), e.d(n, "a", (function() {}));
      var r = function() {
          this.$createElement;
          this._self._c
        },
        i = []
    },
    a174: function(t, n, e) {
      e.r(n);
      var r = e("54a2"),
        i = e.n(r);
      for (var a in r)["default"].indexOf(a) < 0 && function(t) {
        e.d(n, t, (function() {
          return r[t]
        }))
      }(a);
      n.default = i.a
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["components/tuitui-painter/painter-create-component", {
    "components/tuitui-painter/painter-create-component": function(t, n, e) {
      e("df3c").createComponent(e("3a7d"))
    }
  },
  [
    ["components/tuitui-painter/painter-create-component"]
  ]
]);
