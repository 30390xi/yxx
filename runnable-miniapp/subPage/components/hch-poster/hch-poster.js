require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPage/components/hch-poster/hch-poster"], {
    "1b51": function(e, t, n) {},
    "21c23": function(e, t, n) {
      var o = n("1b51");
      n.n(o).a
    },
    "87bd": function(e, t, n) {
      n.d(t, "b", (function() {
        return i
      })), n.d(t, "c", (function() {
        return a
      })), n.d(t, "a", (function() {
        return o
      }));
      var o = {
          uniTransition: function() {
            return n.e("components/uni-transition/uni-transition").then(n.bind(null, "e151"))
          }
        },
        i = function() {
          this.$createElement;
          this._self._c
        },
        a = []
    },
    "93ce": function(e, t, n) {
      (function(e, o) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var i = {
          components: {
            uniTransition: function() {
              n.e("subPage/components/uni-transition/uni-transition").then(function() {
                return resolve(n("25da"))
              }.bind(null, n)).catch(n.oe)
            }
          },
          data: function() {
            return {
              duration: 10,
              maskClass: {
                position: "fixed",
                bottom: 0,
                top: 0,
                left: 0,
                right: 0,
                backgroundColor: "rgba(0, 0, 0, 0.4)"
              }
            }
          },
          props: {
            canvasFlag: {
              type: Boolean,
              default: !1
            },
            posterObj: {
              type: Object,
              default: {
                url: "",
                icon: "",
                title: "",
                discountPrice: "",
                orignPrice: "",
                code: ""
              }
            }
          },
          methods: {
            clear: function(e) {
              e.stopPropagation()
            },
            roundRectEvn: function(e, t, n, o, i, a, s, c, r) {
              if (e.beginPath(), e.arc(t + a, n + a, a, Math.PI, 1.5 * Math.PI), e.moveTo(t + a, n), e.lineTo(t + o - a, n), e.arc(t + o - a, n + a, a, 1.5 * Math.PI, 2 * Math.PI), e.lineTo(t + o, n + i - a), e.arc(t + o - a, n + i - a, a, 0, .5 * Math.PI), e.arc(t + a, n + i - a, a, .5 * Math.PI, Math.PI), e.lineTo(t, n + a), "btn" == r) {
                var l = e.createLinearGradient(0, 0, 200, 0);
                l.addColorStop(0, s), l.addColorStop(1, c), e.setFillStyle(l), e.fill()
              } else if (s && (e.setFillStyle(s), e.fill()), c && (e.setStrokeStyle(c), e.stroke()), !s && !c) {
                var h = e.createLinearGradient(t, n, o, i);
                h.addColorStop(0, "#f54a4e"), h.addColorStop(1, "#ffbf37"), e.setFillStyle(h), e.fill()
              }
              e.closePath(), e.clip()
            },
            multiLineText: function(e, t, n, o) {
              for (var i = t.split(""), a = "", s = [], c = 0; c < i.length; c++) e.measureText(a).width < n ? a += i[c] : (c--, s.push(a), a = "");
              if (s.push(a), s.length > o) {
                for (var r = s.slice(0, o), l = r[1], h = "", u = [], f = 0; f < l.length && e.measureText(h).width < n; f++) h += l[f];
                u.push(h);
                var p = u[0] + "...";
                r.splice(o - 1, 1, p), s = r
              }
              return s
            },
            createCanvasImage: function() {
              var t = this;
              console.log("海报生成中"), e.showLoading({
                title: "海报生成中..."
              });
              var n = this,
                i = e.getSystemInfoSync();
              this.phoneH = i.windowHeight, this.phoneW = i.windowWidth, this.phoneW;
              var a = this.phoneH / 667;
              console.log(this.phoneH, this.phoneW);
              var s = e.createCanvasContext("myCanvas"),
                c = this.posterObj.url,
                r = (this.posterObj.icon, this.posterObj.code);
              s.draw(), s.save(), this.roundRectEvn(s, 25, 110, this.phoneW - 50, this.phoneH - 270, 10), s.restore(), s.save(), this.roundRectEvn(s, 55, 280, this.phoneW - 105, this.phoneH - 450, 10, "#fff"), s.restore(), e.getImageInfo({
                src: c,
                success: function(e) {
                  s.save(), n.roundRectEvn(s, (n.phoneW - (n.phoneW - 80)) / 2, 120, n.phoneW - 80, 180 * a, 10), s.drawImage(e.path, (n.phoneW - (n.phoneW - 80)) / 2, 110, n.phoneW - 80, 250 * a, 10), s.restore(), s.draw(!0)
                },
                fail: function() {
                  n.canvasFlag = !1, o.showToast({
                    title: "海报生成失败",
                    duration: 2e3,
                    icon: "none"
                  })
                }
              }), setTimeout((function() {
                s.setGlobalAlpha(1), s.setFillStyle("#1c1c1c"), s.setFontSize(14), s.font = "normal bold 14px 宋体";
                for (var e = t.posterObj.title, n = t.multiLineText(s, e, t.phoneW - 145, 2), o = 0; o < n.length; o++) s.fillText(n[o], 75, (325 + 18 * o) * a, t.phoneW - 145), s.draw(!0)
              }), 500), s.setFontSize(12), s.setFillStyle("#c00000"), s.font = "normal 12px 宋体", s.fillText("￥", 77, 360 * a, 60), s.setFontSize(16);
              var l = this.posterObj.discountPrice,
                h = (this.posterObj.orignPrice, s.measureText(l).width);
              s.fillText(l, 90, 360 * a, h), e.getImageInfo({
                src: r,
                success: function(e) {
                  s.drawImage(e.path, (n.phoneW - 80) / 2, 380 * a, 80, 80), s.draw(!0)
                },
                fail: function() {
                  n.canvasFlag = !1, o.showToast({
                    title: "海报生成失败",
                    duration: 2e3,
                    icon: "none"
                  })
                }
              }), s.setFontSize(14), s.setFillStyle("#007aff"), s.font = "normal 14px 宋体", s.fillText("长按/扫描识别查看商品", (n.phoneW - 120) / 2, 485 * a, 200), e.hideLoading()
            },
            saveCanvasImage: function() {
              var t = this;
              console.log("点击了保存");
              var n = this;
              o.authorize({
                scope: "scope.writePhotosAlbum",
                success: function(i) {
                  e.showLoading({
                    title: "保存中..."
                  }), o.canvasToTempFilePath({
                    x: 0,
                    y: 0,
                    width: t.phoneW,
                    height: t.phoneH,
                    destWidth: 5 * t.phoneW,
                    destHeight: 5 * t.phoneH,
                    canvasId: "myCanvas",
                    success: function(t) {
                      o.saveImageToPhotosAlbum({
                        filePath: t.tempFilePath,
                        success: function(t) {
                          e.hideLoading(), o.showToast({
                            title: "图片保存成功，可以去分享啦~",
                            duration: 2e3
                          }), n.canvasCancelEvn()
                        },
                        fail: function(t) {
                          e.hideLoading()
                        }
                      })
                    },
                    fail: function() {
                      e.hideLoading()
                    }
                  })
                },
                fail: function(e) {
                  o.showModal({
                    content: "检测到您没打开保存到相册功能权限，是否去设置打开？",
                    confirmText: "确认",
                    cancelText: "取消",
                    success: function(e) {
                      e.confirm ? o.openSetting({
                        success: function(e) {
                          console.log(e)
                        }
                      }) : console.log("取消")
                    }
                  })
                }
              })
            },
            canvasCancelEvn: function() {
              this.$emit("cancel", !1)
            }
          }
        };
        t.default = i
      }).call(this, n("3223").default, n("df3c").default)
    },
    "9c7e": function(e, t, n) {
      n.r(t);
      var o = n("87bd"),
        i = n("e368");
      for (var a in i)["default"].indexOf(a) < 0 && function(e) {
        n.d(t, e, (function() {
          return i[e]
        }))
      }(a);
      n("21c23");
      var s = n("828b"),
        c = Object(s.a)(i.default, o.b, o.c, !1, null, "7f89ef11", null, !1, o.a, void 0);
      t.default = c.exports
    },
    e368: function(e, t, n) {
      n.r(t);
      var o = n("93ce"),
        i = n.n(o);
      for (var a in o)["default"].indexOf(a) < 0 && function(e) {
        n.d(t, e, (function() {
          return o[e]
        }))
      }(a);
      t.default = i.a
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["subPage/components/hch-poster/hch-poster-create-component", {
    "subPage/components/hch-poster/hch-poster-create-component": function(e, t, n) {
      n("df3c").createComponent(n("9c7e"))
    }
  },
  [
    ["subPage/components/hch-poster/hch-poster-create-component"]
  ]
]);
