require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPage/components/yq-avatar/yq-avatar"], {
    "0618": function(t, i, s) {
      var e = s("fcfb");
      s.n(e).a
    },
    "0f36": function(t, i, s) {
      s.d(i, "b", (function() {
        return e
      })), s.d(i, "c", (function() {
        return h
      })), s.d(i, "a", (function() {}));
      var e = function() {
          this.$createElement;
          var t = (this._self._c, this.__get_style([this.iS]));
          this.$mp.data = Object.assign({}, {
            $root: {
              s0: t
            }
          })
        },
        h = []
    },
    "1fda": function(t, i, s) {
      (function(t, s) {
        function e(t, i) {
          var s = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
          if (!s) {
            if (Array.isArray(t) || (s = function(t, i) {
                if (t) {
                  if ("string" == typeof t) return h(t, i);
                  var s = Object.prototype.toString.call(t).slice(8, -1);
                  return "Object" === s && t.constructor && (s = t.constructor.name), "Map" === s || "Set" === s ? Array.from(t) : "Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? h(t, i) : void 0
                }
              }(t)) || i && t && "number" == typeof t.length) {
              s && (t = s);
              var e = 0,
                a = function() {};
              return {
                s: a,
                n: function() {
                  return e >= t.length ? {
                    done: !0
                  } : {
                    done: !1,
                    value: t[e++]
                  }
                },
                e: function(t) {
                  throw t
                },
                f: a
              }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }
          var n, o = !0,
            r = !1;
          return {
            s: function() {
              s = s.call(t)
            },
            n: function() {
              var t = s.next();
              return o = t.done, t
            },
            e: function(t) {
              r = !0, n = t
            },
            f: function() {
              try {
                o || null == s.return || s.return()
              } finally {
                if (r) throw n
              }
            }
          }
        }

        function h(t, i) {
          (null == i || i > t.length) && (i = t.length);
          for (var s = 0, e = new Array(i); s < i; s++) e[s] = t[s];
          return e
        }
        Object.defineProperty(i, "__esModule", {
          value: !0
        }), i.default = void 0;
        var a = {
          name: "yq-avatar",
          data: function() {
            return {
              csH: "0px",
              sD: "none",
              sT: "-10000px",
              pT: "-10000px",
              iS: {},
              sS: {},
              sO: !0,
              bW: "19%",
              bD: "flex",
              tp: 0,
              imgSrc: {
                imgSrc: ""
              }
            }
          },
          watch: {
            avatarSrc: function() {
              this.imgSrc.imgSrc = this.avatarSrc
            }
          },
          props: {
            avatarSrc: "",
            avatarStyle: "",
            selWidth: "",
            selHeight: "",
            expWidth: "",
            expHeight: "",
            minScale: "",
            maxScale: "",
            canScale: "",
            canRotate: "",
            lockWidth: "",
            lockHeight: "",
            stretch: "",
            lock: "",
            fileType: "",
            noTab: "",
            inner: "",
            quality: "",
            index: "",
            bgImage: "",
            pageType: ""
          },
          created: function() {
            var i = this;
            this.cc = t.createCanvasContext("avatar-canvas", this), this.cco = t.createCanvasContext("oper-canvas", this), this.ccp = t.createCanvasContext("prv-canvas", this), this.qlty = parseFloat(this.quality) || 1, this.imgSrc.imgSrc = this.avatarSrc, this.letRotate = !1 === this.canRotate || !0 === this.inner || "true" === this.inner || "false" === this.canRotate ? 0 : 1, this.letScale = !1 === this.canScale || "false" === this.canScale ? 0 : 1, this.isin = !0 === this.inner || "true" === this.inner ? 1 : 0, this.indx = this.index || void 0, this.mnScale = parseFloat(this.minScale) || .3, this.mxScale = parseFloat(this.maxScale) || 4, this.noBar = !0 === this.noTab || "true" === this.noTab ? 1 : 0, this.stc = this.stretch, this.lck = this.lock, this.fType = "jpg" === this.fileType ? "jpg" : "png", this.isin || !this.letRotate ? (this.bW = "24%", this.bD = "none") : (this.bW = "19%", this.bD = "flex"), this.noBar ? this.fWindowResize() : t.showTabBar({
              fail: function() {
                i.noBar = 1
              },
              success: function() {
                i.noBar = 0
              },
              complete: function(t) {
                i.fWindowResize()
              }
            })
          },
          methods: {
            fWindowResize: function() {
              var i = t.getSystemInfoSync();
              this.platform = i.platform, this.wW = i.windowWidth, this.drawTop = 0, this.wH = i.windowHeight, this.noBar || (this.wH += 50), this.csH = this.wH - 50 + "px", this.tp = this.csH, this.pxRatio = this.wW / 750;
              var s = this.avatarStyle;
              if (s && !0 !== s && (s = s.trim())) {
                var h, a = {},
                  n = e(s = s.split(";"));
                try {
                  for (n.s(); !(h = n.n()).done;) {
                    var o = h.value;
                    if (o) {
                      if ((o = o.trim().split(":"))[1].toString().indexOf("upx") >= 0) {
                        var r = o[1].trim().split(" ");
                        for (var c in r) r[c] && r[c].toString().indexOf("upx") >= 0 && (r[c] = parseFloat(r[c]) * this.pxRatio + "px");
                        o[1] = r.join(" ")
                      }
                      a[o[0].trim()] = o[1].trim()
                    }
                  }
                } catch (t) {
                  n.e(t)
                } finally {
                  n.f()
                }
                this.iS = a
              }
              this.expWidth && (this.eW = this.expWidth.toString().indexOf("upx") >= 0 ? parseInt(this.expWidth) * this.pxRatio : parseInt(this.expWidth)), this.expHeight && (this.eH = this.expHeight.toString().indexOf("upx") >= 0 ? parseInt(this.expHeight) * this.pxRatio : parseInt(this.expHeight)), "flex" === this.sD && this.fDrawInit(!0), this.fHideImg()
            },
            fSelect: function() {
              var i = this;
              this.fSelecting || (this.fSelecting = !0, setTimeout((function() {
                i.fSelecting = !1
              }), 500), t.chooseImage({
                count: 1,
                sizeType: ["compressed"],
                sourceType: ["album", "camera"],
                success: function(e) {
                  var h = i.imgPath = e.tempFilePaths[0];
                  t.getImageInfo({
                    src: h,
                    success: function(e) {
                      if (i.imgWidth = e.width, i.imgHeight = e.height, i.path = h, !i.hasSel) {
                        var a = i.sS || {};
                        if (!i.selWidth || !i.selHeight) return void s.showModal({
                          title: "裁剪框的宽或高没有设置",
                          showCancel: !1
                        });
                        var n = i.selWidth.toString().indexOf("upx") >= 0 ? parseInt(i.selWidth) * i.pxRatio : parseInt(i.selWidth),
                          o = i.selHeight.toString().indexOf("upx") >= 0 ? parseInt(i.selHeight) * i.pxRatio : parseInt(i.selHeight);
                        a.width = n + "px", a.height = o + "px", a.top = (i.wH - o - 50 | 0) / 2 + "px", a.left = (i.wW - n | 0) / 2 + "px", i.sS = a
                      }
                      i.$forceUpdate(), i.noBar ? i.fDrawInit(!0) : t.hideTabBar({
                        complete: function() {
                          i.fDrawInit(!0)
                        }
                      })
                    },
                    fail: function() {
                      s.showToast({
                        title: "请选择正确图片",
                        duration: 2e3
                      })
                    },
                    complete: function() {
                      s.hideLoading()
                    }
                  })
                }
              }))
            },
            fUpload: function() {
              var i = this;
              if (!this.fUploading) {
                this.fUploading = !0, setTimeout((function() {
                  i.fUploading = !1
                }), 1e3);
                var e = this.sS,
                  h = parseInt(e.left),
                  a = parseInt(e.top),
                  n = parseInt(e.width),
                  o = parseInt(e.height),
                  r = this.eW || n * this.pixelRatio,
                  c = this.eH || o * this.pixelRatio;
                this.sD = "none", this.sT = "-10000px", this.hasSel = !1, this.fHideImg(), t.canvasToTempFilePath({
                  x: h,
                  y: a,
                  width: n,
                  height: o,
                  destWidth: r,
                  destHeight: c,
                  canvasId: "avatar-canvas",
                  fileType: this.fType,
                  quality: this.qlty,
                  success: function(t) {
                    t = t.tempFilePath, i.$emit("upload", {
                      avatar: i.imgSrc,
                      path: t,
                      original: i.imgPath,
                      index: i.indx,
                      data: i.rtn,
                      base64: i.base64 || null
                    }), "pictureWall" == i.pageType && i.$navigateTo({
                      url: "/subPage/pages/poster/poster?url=".concat(t, "&origin=").concat(i.imgPath)
                    })
                  },
                  fail: function(t) {
                    s.showToast({
                      title: "error1",
                      duration: 2e3
                    })
                  },
                  complete: function() {
                    s.hideLoading(), i.noBar || t.showTabBar(), i.$emit("end")
                  }
                }, this)
              }
            },
            fDrawInit: function() {
              var t = this,
                i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                s = this.wW,
                e = this.wH,
                h = this.imgWidth,
                a = this.imgHeight,
                n = h / a,
                o = s - 40,
                r = e - 50 - 80,
                c = o / r,
                l = parseInt(this.sS.width),
                f = parseInt(this.sS.height);
              switch (this.fixWidth = 0, this.fixHeight = 0, this.lckWidth = 0, this.lckHeight = 0, this.stc) {
                case "x":
                  this.fixWidth = 1;
                  break;
                case "y":
                  this.fixHeight = 1;
                  break;
                case "long":
                  n > 1 ? this.fixWidth = 1 : this.fixHeight = 1;
                  break;
                case "short":
                  n > 1 ? this.fixHeight = 1 : this.fixWidth = 1;
                  break;
                case "longSel":
                  l > f ? this.fixWidth = 1 : this.fixHeight = 1;
                  break;
                case "shortSel":
                  l > f ? this.fixHeight = 1 : this.fixWidth = 1
              }
              switch (this.lck) {
                case "x":
                  this.lckWidth = 1;
                  break;
                case "y":
                  this.lckHeight = 1;
                  break;
                case "long":
                  n > 1 ? this.lckWidth = 1 : this.lckHeight = 1;
                  break;
                case "short":
                  n > 1 ? this.lckHeight = 1 : this.lckWidth = 1;
                  break;
                case "longSel":
                  l > f ? this.lckWidth = 1 : this.lckHeight = 1;
                  break;
                case "shortSel":
                  l > f ? this.lckHeight = 1 : this.lckWidth = 1
              }
              this.fixWidth ? r = (o = l) / n : this.fixHeight ? o = (r = f) * n : n < c ? a < r ? (o = h, r = a) : o = r * n : h < o ? (o = h, r = a) : r = o / n, this.isin && (o < l && (r = (o = l) / n, this.lckHeight = 0), r < f && (o = (r = f) * n, this.lckWidth = 0)), this.scaleSize = 1, this.rotateDeg = 0, this.posWidth = (s - o) / 2 | 0, this.posHeight = (e - r - 50) / 2 | 0, this.useWidth = 0 | o, this.useHeight = 0 | r, this.centerX = this.posWidth + o / 2, this.centerY = this.posHeight + r / 2, this.focusX = 0, this.focusY = 0;
              var p = this.sS,
                u = parseInt(p.left),
                d = parseInt(p.top),
                g = parseInt(p.width),
                x = parseInt(p.height),
                v = (this.canvas, this.canvasOper, this.cc, this.cco);
              v.beginPath(), v.setLineWidth(3), v.setGlobalAlpha(1), v.setStrokeStyle("white"), v.strokeRect(u, d, g, x), v.setFillStyle("black"), v.setGlobalAlpha(.5), v.fillRect(0, 0, this.wW, d), v.fillRect(0, d, u, x), v.fillRect(0, d + x, this.wW, this.wH - x - d - 50), v.fillRect(u + g, d, this.wW - g - u, x), v.setGlobalAlpha(1), v.setStrokeStyle("red"), v.moveTo(u + 15, d), v.lineTo(u, d), v.lineTo(u, d + 15), v.moveTo(u + g - 15, d), v.lineTo(u + g, d), v.lineTo(u + g, d + 15), v.moveTo(u + 15, d + x), v.lineTo(u, d + x), v.lineTo(u, d + x - 15), v.moveTo(u + g - 15, d + x), v.lineTo(u + g, d + x), v.lineTo(u + g, d + x - 15), v.stroke(), this.$forceUpdate(), v.draw(!1, (function() {
                i && (t.sD = "flex", t.sT = t.drawTop + "px", t.fDrawImage(!0))
              })), this.$emit("init")
            },
            fDrawImage: function() {
              var t = Date.now();
              if (!(t - this.drawTm < 20)) {
                this.drawTm = t;
                var i = this.cc,
                  s = this.useWidth * this.scaleSize,
                  e = this.useHeight * this.scaleSize;
                if (this.bgImage ? i.drawImage(this.bgImage, 0, 0, this.wW, this.wH - 50) : i.fillRect(0, 0, this.wW, this.wH - 50), this.isin) {
                  var h = this.focusX * (this.scaleSize - 1),
                    a = this.focusY * (this.scaleSize - 1);
                  i.translate(this.centerX, this.centerY), i.rotate(this.rotateDeg * Math.PI / 180), i.drawImage(this.imgPath, this.posWidth - this.centerX - h, this.posHeight - this.centerY - a, s, e)
                } else i.translate(this.posWidth + s / 2, this.posHeight + e / 2), i.rotate(this.rotateDeg * Math.PI / 180), i.drawImage(this.imgPath, -s / 2, -e / 2, s, e);
                this.$forceUpdate(), i.draw(!1)
              }
            },
            fChooseImg: function() {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
              if (i) {
                var e = i.selWidth,
                  h = i.selHeight,
                  a = i.expWidth,
                  n = i.expHeight,
                  o = i.quality,
                  r = i.canRotate,
                  c = i.canScale,
                  l = i.minScale,
                  f = i.maxScale,
                  p = i.stretch,
                  u = i.fileType,
                  d = i.inner,
                  g = i.lock;
                a && (this.eW = a.toString().indexOf("upx") >= 0 ? parseInt(a) * this.pxRatio : parseInt(a)), n && (this.eH = n.toString().indexOf("upx") >= 0 ? parseInt(n) * this.pxRatio : parseInt(n)), this.letRotate = !1 === r || !0 === d || "true" === d || "false" === r ? 0 : 1, this.letScale = !1 === c || "false" === c ? 0 : 1, this.qlty = parseFloat(o) || 1, this.mnScale = parseFloat(l) || .3, this.mxScale = parseFloat(f) || 4, this.stc = p, this.isin = !0 === d || "true" === d ? 1 : 0, this.fType = "jpg" === u ? "jpg" : "png", this.lck = g, this.isin || !this.letRotate ? (this.bW = "24%", this.bD = "none") : (this.bW = "19%", this.bD = "flex"), e && h && (e = e.toString().indexOf("upx") >= 0 ? parseInt(e) * this.pxRatio : parseInt(e), h = h.toString().indexOf("upx") >= 0 ? parseInt(h) * this.pxRatio : parseInt(h), this.sS.width = e + "px", this.sS.height = h + "px", this.sS.top = (this.wH - h - 50 | 0) / 2 + "px", this.sS.left = (this.wW - e | 0) / 2 + "px", this.hasSel = !0)
              }
              this.rtn = s, this.indx = t, this.fSelect()
            },
            fRotate: function() {
              this.rotateDeg += 90 - this.rotateDeg % 90, this.fDrawImage()
            },
            fStart: function(t) {
              var i = t.touches,
                s = i[0],
                e = i[1];
              if (this.touch0 = s, this.touch1 = e, e) {
                var h = e.x - s.x,
                  a = e.y - s.y;
                this.fgDistance = Math.sqrt(h * h + a * a)
              }
            },
            fMove: function(t) {
              var i = t.touches,
                s = i[0],
                e = i[1];
              if (e) {
                var h = e.x - s.x,
                  a = e.y - s.y,
                  n = Math.sqrt(h * h + a * a),
                  o = .005 * (n - this.fgDistance),
                  r = this.scaleSize + o;
                do {
                  if (!this.letScale) break;
                  if (r < this.mnScale) break;
                  if (r > this.mxScale) break;
                  var c = this.useWidth * o / 2,
                    l = this.useHeight * o / 2;
                  if (this.isin) {
                    var f, p, u = this.useWidth * r,
                      d = this.useHeight * r,
                      g = (this.posWidth, this.posHeight, parseInt(this.sS.left)),
                      x = parseInt(this.sS.top),
                      v = parseInt(this.sS.width),
                      m = parseInt(this.sS.height),
                      S = g + v,
                      b = x + m;
                    if (u <= v || d <= m) break;
                    this.cx = f = this.focusX * r - this.focusX, this.cy = p = this.focusY * r - this.focusY, this.posWidth -= c, this.posHeight -= l, this.posWidth - f > g && (this.posWidth = g + f), this.posWidth + u - f < S && (this.posWidth = S - u + f), this.posHeight - p > x && (this.posHeight = x + p), this.posHeight + d - p < b && (this.posHeight = b - d + p)
                  } else this.posWidth -= c, this.posHeight -= l;
                  this.scaleSize = r
                } while (0);
                this.fgDistance = n, e.x !== s.x && this.letRotate && (h = (this.touch1.y - this.touch0.y) / (this.touch1.x - this.touch0.x), a = (e.y - s.y) / (e.x - s.x), this.rotateDeg += 180 * Math.atan((a - h) / (1 + h * a)) / Math.PI, this.touch0 = s, this.touch1 = e), this.fDrawImage()
              } else if (this.touch0) {
                var w = s.x - this.touch0.x,
                  W = s.y - this.touch0.y,
                  H = this.posWidth + w,
                  y = this.posHeight + W;
                if (this.isin) {
                  var I, k, T = this.useWidth * this.scaleSize,
                    R = this.useHeight * this.scaleSize,
                    D = H,
                    O = y,
                    P = D + T,
                    q = O + R,
                    z = parseInt(this.sS.left),
                    M = parseInt(this.sS.top),
                    Y = z + parseInt(this.sS.width),
                    j = M + parseInt(this.sS.height);
                  this.cx = I = this.focusX * this.scaleSize - this.focusX, this.cy = k = this.focusY * this.scaleSize - this.focusY, !this.lckWidth && Math.abs(w) < 100 && (z < D - I ? this.posWidth = z + I : Y > P - I ? this.posWidth = Y - T + I : (this.posWidth = H, this.focusX -= w)), !this.lckHeight && Math.abs(W) < 100 && (M < O - k ? (this.focusY -= M + k - this.posHeight, this.posHeight = M + k) : j > q - k ? (this.focusY -= j + k - (this.posHeight + R), this.posHeight = j - R + k) : (this.posHeight = y, this.focusY -= W))
                } else Math.abs(w) < 100 && !this.lckWidth && (this.posWidth = H), Math.abs(W) < 100 && !this.lckHeight && (this.posHeight = y), this.focusX -= w, this.focusY -= W;
                this.touch0 = s, this.fDrawImage()
              }
            },
            fEnd: function(t) {
              var i = t.touches,
                s = i && i[0];
              i && i[1], s ? this.touch0 = s : (this.touch0 = null, this.touch1 = null)
            },
            fHideImg: function() {
              this.prvImg = "", this.pT = "-10000px", this.sO = !0, this.prvImgData = null, this.target = null
            },
            fClose: function() {
              this.sD = "none", this.sT = "-10000px", this.hasSel = !1, this.fHideImg(), this.noBar, this.$emit("end")
            },
            fGetImgData: function() {
              var i = this;
              return new Promise((function(s, e) {
                var h = i.prvX,
                  a = i.prvY,
                  n = i.prvWidth,
                  o = i.prvHeight;
                t.canvasGetImageData({
                  canvasId: "prv-canvas",
                  x: h,
                  y: a,
                  width: n,
                  height: o,
                  success: function(t) {
                    s(t.data)
                  },
                  fail: function(t) {
                    e(t)
                  }
                }, i)
              }))
            },
            btop: function(t) {
              return this.base64 = t, new Promise((function(i, s) {
                for (var e = t.split(","), h = e[0].match(/:(.*?);/)[1], a = atob(e[1]), n = a.length, o = new Uint8Array(n); n--;) o[n] = a.charCodeAt(n);
                return i((window.URL || window.webkitURL).createObjectURL(new Blob([o], {
                  type: h
                })))
              }))
            }
          }
        };
        i.default = a
      }).call(this, s("3223").default, s("df3c").default)
    },
    "91d7": function(t, i, s) {
      s.r(i);
      var e = s("0f36"),
        h = s("b7bf");
      for (var a in h)["default"].indexOf(a) < 0 && function(t) {
        s.d(i, t, (function() {
          return h[t]
        }))
      }(a);
      s("0618");
      var n = s("828b"),
        o = Object(n.a)(h.default, e.b, e.c, !1, null, null, null, !1, e.a, void 0);
      i.default = o.exports
    },
    b7bf: function(t, i, s) {
      s.r(i);
      var e = s("1fda"),
        h = s.n(e);
      for (var a in e)["default"].indexOf(a) < 0 && function(t) {
        s.d(i, t, (function() {
          return e[t]
        }))
      }(a);
      i.default = h.a
    },
    fcfb: function(t, i, s) {}
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["subPage/components/yq-avatar/yq-avatar-create-component", {
    "subPage/components/yq-avatar/yq-avatar-create-component": function(t, i, s) {
      s("df3c").createComponent(s("91d7"))
    }
  },
  [
    ["subPage/components/yq-avatar/yq-avatar-create-component"]
  ]
]);
