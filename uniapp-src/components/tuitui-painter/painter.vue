<template>
<view>
    <canvas canvasId="k-canvas" id="k-canvas" :style="painterStyle"></canvas>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
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
                    getApp().systemInfo = uni.getSystemInfoSync()
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
                  uni.canvasToTempFilePath({
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
</script>
