(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/spotThirdDetail/spotThirdDetail"], {
    "0813": function(t, e, i) {
      i.r(e);
      var n = i("ffc9"),
        o = i("e4b9");
      for (var r in o)["default"].indexOf(r) < 0 && function(t) {
        i.d(e, t, (function() {
          return o[t]
        }))
      }(r);
      i("32eb");
      var a = i("828b"),
        s = Object(a.a)(o.default, n.b, n.c, !1, null, "5b932149", null, !1, n.a, void 0);
      e.default = s.exports
    },
    "32eb": function(t, e, i) {
      var n = i("7107");
      i.n(n).a
    },
    "63e1": function(t, e, i) {
      (function(t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var n = {
          components: {
            painter: function() {
              Promise.all([i.e("common/vendor"), i.e("components/tuitui-painter/painter")]).then(function() {
                return resolve(i("3a7d"))
              }.bind(null, i)).catch(i.oe)
            },
            LPainter: function() {
              Promise.all([i.e("common/vendor"), i.e("components/lime-painter/index")]).then(function() {
                return resolve(i("0778"))
              }.bind(null, i)).catch(i.oe)
            }
          },
          data: function() {
            return {
              detailObj: "",
              statusBarHeight: "",
              painterData: "",
              postUrl: "",
              isAndroid: !0,
              transformNum: 1,
              like: null,
              hate: null,
              showVideo: getApp().globalData.showvideo,
              centObj: {},
              posterData: {},
              scenicName: "",
              inTop: !0,
              swiperCurrent: 1,
              swiperLenght: 0,
              scrollTop: 0,
              currentSwiper: 0,
              showPicture: !1,
              isShowTicket: !1,
              swiperList: [],
              pageBg: {},
              videoUrl: "",
              headerH: 0,
              row2height: 0,
              midinfoTop: 400,
              lovePercent: {},
              lines: 1,
              isHide: !1,
              unit: 0,
              parseStyle: {
                p: "word-break: break-all;"
              }
            }
          },
          filters: {
            timeFormat: function(t) {
              return t.replace(/-/g, ".")
            }
          },
          computed: {
            showRanking: function() {
              return this.detailObj.originSortInRankingVO && this.detailObj.originSortInRankingVO.contentId
            }
          },
          onLoad: function(e) {
            var i = this;
            t.getSystemInfoSync().system.indexOf("Android") > -1 || (this.isAndroid = !1), this._spotId = e.spotId, this.scenicName = e.scenicName, this._urlToShare = "/pages/spotThirdDetail/spotThirdDetail?spotId=" + this._spotId, this.spotDetail(), t.getSystemInfo({
              success: function(e) {
                i.statusBarHeight = t.getSystemInfoSync().statusBarHeight, i._transformNumTemp = 1, i.unit = 750 / e.windowWidth, i.headerH = i.statusBarHeight + 5 + Math.ceil(e.windowWidth / 750 * 104)
              }
            })
          },
          onPageScroll: function(t) {
            this.scrollTop = t.scrollTop, this.row2height < t.scrollTop ? this.inTop = !1 : this.inTop = !0;
            var e = t.scrollTop / 40;
            e >= 0 && e <= 1 && (this.transformNum = Number((1 - e).toFixed(2))), e > 1 && (this.transformNum = 0), this._transformNumTemp = this.transformNum
          },
          onShareAppMessage: function(t) {
            return {
              title: this.scenicName ? "我在".concat(this.scenicName, "找到了").concat(this.detailObj.title, "，特分享给你~") : "我找到了".concat(this.detailObj.title),
              imageUrl: this.postUrl,
              path: this.$util.setShareUrl(this._urlToShare)
            }
          },
          methods: {
            getLines: function(t) {
              this.lines = t, t > 0 && (this.isHide = !0)
            },
            changHide: function() {
              this.isHide = !this.isHide
            },
            spotDetail: function() {
              var e = this,
                i = this;
              t.showNavigationBarLoading(), this.$uniApi.getRequestNoLoading("GET", "base/app/v1/contentApp/getContentScenicChildPage?contentId=" + this._spotId).then((function(n) {
                t.hideNavigationBarLoading(), e.detailObj = n.data, e.getFocusStatus(), e.$nextTick((function() {
                  new Promise((function(e) {
                    var i = t.createSelectorQuery();
                    i.select("#spotinfo").boundingClientRect(), i.select("#top-fixed-box").boundingClientRect(), i.exec((function(t) {
                      e(t)
                    }))
                  })).then((function(t) {
                    i.row2height = t[0].top;
                    var e = parseInt(516 / i.unit);
                    i.midinfoTop = t[1].height + e
                  }))
                }))
              }))
            },
            swiperChange: function(t) {
              this.swiperCurrent = t.detail.current + 1
            },
            closeMask: function() {
              this.showPicture = !1
            },
            toRanking: function(t) {
              1 != this.detailObj.closeJumpFlag && this.$navigateTo({
                url: "../ranking/ranking?id=" + t
              })
            },
            toSpot: function(t) {
              this.$navigateTo({
                url: "../spotDetail/spotDetail?spotId=" + t
              })
            },
            openMedia: function(t) {
              this.showPicture = !0, this.swiperCurrent = t + 1, this.currentSwiper = t
            },
            getFocusStatus: function() {
              var e = this;
              t.showNavigationBarLoading(), this.$uniApi.getRequestNoLoading("GET", "base/app/v1/contentApp/getIsLikeContent?originId=" + this._spotId).then((function(i) {
                t.hideNavigationBarLoading(), e.centObj = i.data, e.startDraw()
              }))
            },
            startDraw: function() {
              var t = this.detailObj.topColour,
                e = this.detailObj.title,
                i = this.detailObj.introductionText,
                n = this.centObj.likeRatio || 0,
                o = parseFloat((100 * n).toFixed(2)).toString(),
                r = {
                  width: "750rpx",
                  height: "600rpx",
                  borderRadius: "0rpx",
                  background: t,
                  views: [{
                    type: "text",
                    text: e,
                    css: {
                      width: "700rpx",
                      maxLines: 1,
                      left: "30rpx",
                      top: "50rpx",
                      fontSize: "46rpx",
                      color: "#fff"
                    }
                  }, {
                    type: "rect",
                    css: {
                      position: "absolute",
                      width: "110rpx",
                      height: "40rpx",
                      left: "160rpx",
                      top: "126rpx",
                      background: "#FFF",
                      borderRadius: "20rpx"
                    }
                  }, {
                    type: "rect",
                    css: {
                      position: "absolute",
                      width: "150rpx",
                      height: "40rpx",
                      left: "30rpx",
                      top: "126rpx",
                      background: "#F4A524",
                      borderRadius: "20rpx"
                    }
                  }, {
                    type: "rect",
                    css: {
                      position: "absolute",
                      width: "20rpx",
                      height: "40rpx",
                      left: "160rpx",
                      top: "126rpx",
                      background: "#F4A524"
                    }
                  }, {
                    type: "text",
                    text: "喜爱值",
                    css: {
                      width: "150rpx",
                      height: "40rpx",
                      left: "30rpx",
                      top: "126rpx",
                      background: "#F4A524",
                      color: "#fff",
                      fontSize: "30rpx",
                      lineHeight: "40rpx",
                      textAlign: "center",
                      borderRadius: "20rpx 0 0 20rpx"
                    }
                  }, {
                    type: "text",
                    text: o,
                    css: {
                      position: "absolute",
                      width: "90rpx",
                      height: "40rpx",
                      left: "180rpx",
                      top: "126rpx",
                      color: "#F4A524",
                      background: "#fff",
                      fontSize: "30rpx",
                      lineHeight: "40rpx",
                      textAlign: "center",
                      visibility: "hidden",
                      borderRadius: "0 20rpx 20rpx 0"
                    }
                  }, {
                    type: "rect",
                    css: {
                      position: "absolute",
                      width: "360rpx",
                      height: "360rpx",
                      left: "30rpx",
                      top: "220rpx",
                      color: "rgba(0,0,0,0)"
                    }
                  }, {
                    type: "image",
                    url: this.detailObj.coverImage,
                    css: {
                      position: "absolute",
                      width: "360rpx",
                      height: "360rpx",
                      left: "30rpx",
                      top: "220rpx",
                      background: "rgba(0,0,0,0)",
                      borderRadius: "15rpx"
                    }
                  }, {
                    type: "text",
                    text: i,
                    css: {
                      left: "420rpx",
                      top: "220rpx",
                      fontSize: "36rpx",
                      lineHeight: "54rpx",
                      color: "rgba(255,255,255,0.9)",
                      fontWeight: 600,
                      maxLines: 7,
                      textIndent: 0,
                      width: "300rpx"
                    }
                  }]
                };
              this.isAndroid ? (this.centObj.num < 10 && r.views.splice(1, 5), this.posterData = r) : (r.views = [{
                type: "text",
                text: e,
                css: {
                  width: "700rpx",
                  maxLines: 1,
                  left: "30rpx",
                  top: "50rpx",
                  fontSize: "46rpx",
                  color: "#fff"
                }
              }, {
                type: "rect",
                css: {
                  position: "absolute",
                  width: "110rpx",
                  height: "40rpx",
                  left: "160rpx",
                  top: "126rpx",
                  color: "#FFF",
                  borderRadius: "20rpx",
                  textAlign: "center"
                }
              }, {
                type: "rect",
                css: {
                  position: "absolute",
                  width: "150rpx",
                  height: "40rpx",
                  left: "30rpx",
                  top: "126rpx",
                  color: "#F4A524",
                  borderRadius: "20rpx",
                  textAlign: "center"
                }
              }, {
                type: "rect",
                css: {
                  position: "absolute",
                  width: "20rpx",
                  height: "40rpx",
                  left: "160rpx",
                  top: "126rpx",
                  color: "#F4A524"
                }
              }, {
                type: "text",
                text: "喜爱值",
                css: {
                  width: "150rpx",
                  height: "40rpx",
                  left: "60rpx",
                  top: "126rpx",
                  color: "#fff",
                  fontSize: "30rpx",
                  lineHeight: "40rpx"
                }
              }, {
                type: "text",
                text: o,
                css: {
                  position: "absolute",
                  width: "90rpx",
                  height: "40rpx",
                  left: "200rpx",
                  top: "126rpx",
                  color: "#F4A524",
                  fontSize: "30rpx",
                  lineHeight: "40rpx"
                }
              }, {
                type: "rect",
                css: {
                  position: "absolute",
                  width: "360rpx",
                  height: "360rpx",
                  left: "30rpx",
                  top: "220rpx",
                  color: "rgba(0,0,0,0)"
                }
              }, {
                type: "image",
                url: this.detailObj.coverImage,
                css: {
                  position: "absolute",
                  width: "360rpx",
                  height: "360rpx",
                  left: "30rpx",
                  top: "220rpx",
                  color: "#ff0000",
                  background: "#ff0000",
                  borderRadius: "15rpx"
                }
              }, {
                type: "text",
                text: i,
                css: {
                  left: "420rpx",
                  top: "220rpx",
                  fontSize: "36rpx",
                  lineHeight: "54rpx",
                  color: "rgba(255,255,255,0.9)",
                  fontWeight: 600,
                  maxLines: 7,
                  textIndent: 0,
                  width: "300rpx"
                }
              }], this.centObj.num < 10 && r.views.splice(1, 5), this.painterData = r)
            },
            onImgOK: function(t) {
              this.postUrl = t.path
            },
            onImgErr: function(t) {
              this.startDraw()
            },
            getNetworkImage: function(e) {
              return new Promise((function(i, n) {
                t.downloadFile({
                  url: e,
                  success: function(t) {
                    var e = t.tempFilePath;
                    if (e.indexOf("json") > -1) return n(e), !1;
                    i(e)
                  },
                  fail: function(t) {
                    n(t)
                  }
                })
              }))
            },
            canvasImg: function(e, i, n, o) {
              var r = this,
                a = this.unit,
                s = this;
              this.getNetworkImage(e).then((function(e) {
                var p = t.createCanvasContext("firstCanvas", r);
                p.drawImage(e, 0, 0, parseInt(454 * a), parseInt(362 * a)), p.fillStyle = "#fff", p.fillRect(0, parseInt(282 * a), parseInt(454 * a), parseInt(82 * a)), p.fillStyle = "#FF5411", p.font = "20px bold", p.fillText(i, parseInt(22 * a), parseInt(330 * a)), p.fillStyle = "#D0D0D0", p.font = "12px bold", p.fillText(n, parseInt(150 * a), parseInt(330 * a)), p.beginPath();
                var l = p.measureText(n).width;
                p.rect(parseInt(150 * a), parseInt(320 * a), l, 1), p.fillStyle = "#D0D0D0", p.fill();
                var c = p.createLinearGradient(parseInt(283 * a), parseInt(290 * a), parseInt(443 * a), parseInt(350 * a));
                c.addColorStop(0, "#FC4A9E"), c.addColorStop(1, "#FF5411"), r.canvasbtn(p, c, parseInt(263 * a), parseInt(290 * a), parseInt(180 * a), parseInt(60 * a), parseInt(30 * a), o), p.draw(!1, (function() {
                  t.canvasToTempFilePath({
                    fileType: "jpg",
                    x: 0,
                    y: 0,
                    width: 454,
                    height: 308,
                    destWidth: 454,
                    destHeight: 308,
                    canvasId: "firstCanvas",
                    success: function(t) {
                      s.postUrl = t.tempFilePath
                    },
                    fail: function(t) {}
                  })
                }))
              }))
            },
            canvasbtn: function(t, e, i, n, o, r, a, s) {
              t.beginPath(), t.fillStyle = e, t.moveTo(i + a, n), t.lineTo(i + o - a, n), t.arc(i + o - a, n + a, a, 3 * Math.PI / 2, 2 * Math.PI), t.lineTo(i + o, n + r - a), t.arc(i + o - a, n + r - a, a, Math.PI, Math.PI / 2), t.lineTo(i + a, n + r), t.arc(i + a, n + r - a, a, Math.PI / 2, Math.PI), t.lineTo(i, n + a), t.arc(i + a, n + a, a, Math.PI, 3 * Math.PI / 2), t.fill(), t.closePath(), t.beginPath(), t.fillStyle = "#fff", t.font = "13px bold 黑体", t.textAlign = "center", t.textBaseline = "middle", t.fillText(s, i + o / 2, n + 2 + r / 2)
            },
            getShowState: function(t) {
              return !(2 == t.resourcesType && !this.showVideo)
            },
            swiperTopClick: function(e) {
              var i = this.detailObj.bannerList[e];
              1 === i.jumpType && i.jumpUrl ? this.$navigateTo({
                url: "../webpage/webpage?url=".concat(i.jumpUrl)
              }) : 2 === i.jumpType && i.interalLinkId ? 1 === i.interalLinkType ? this.$navigateTo({
                url: "/subPage/pages/goods_details/goods_details?itemId=".concat(i.interalLinkId)
              }) : 2 === i.interalLinkType ? this.$util.cityJump(i.interalLinkContentType, i.interalLinkId) : 3 === i.interalLinkType ? this.$navigateTo({
                url: "/subPack/pages/city/city?cityId=".concat(i.interalLinkId)
              }) : 4 !== i.interalLinkType && 7 !== i.interalLinkType && 8 !== i.interalLinkType && 9 !== i.interalLinkType || this.$navigateTo({
                url: "../spotDetail/spotDetail?spotId=".concat(i.interalLinkId)
              }) : 3 === i.jumpType ? t.openEmbeddedMiniProgram({
                appId: i.newAppId,
                path: i.appUrl
              }) : 4 === i.jumpType && (t.setStorageSync("richtext", i.richText), this.$navigateTo({
                url: "../richtext/richtext?title=".concat(i.advertName)
              }))
            },
            jumpSpotMedia: function() {
              this.$navigateTo({
                url: "../spotMedia/spotMedia?id=" + this._spotId + "&type=1"
              })
            },
            likeClick: function(e) {
              var i = this;
              t.showNavigationBarLoading(), this.$uniApi.dataRequestNoLoading("POST", "base/app/v1/contentApp/likeContent", {
                id: this.centObj.id,
                isLike: e,
                originId: this._spotId,
                originType: 1
              }).then((function(e) {
                t.hideNavigationBarLoading(), i.like = !0, i.hate = !1, i.getFocusStatus(), t.showToast({
                  title: "已喜爱",
                  icon: "none"
                })
              }))
            },
            hateClick: function(e) {
              var i = this;
              t.showNavigationBarLoading(), this.$uniApi.dataRequestNoLoading("POST", "base/app/v1/contentApp/likeContent", {
                id: this.centObj.id,
                isLike: e,
                originId: this._spotId,
                originType: 1
              }).then((function(e) {
                t.hideNavigationBarLoading(), i.like = !1, i.hate = !0, i.getFocusStatus(), t.showToast({
                  title: "已无感",
                  icon: "none"
                })
              }))
            },
            openMap: function() {
              console.log(this.detailObj), t.openLocation({
                latitude: Number(this.detailObj.latitude),
                longitude: Number(this.detailObj.longitude),
                name: this.detailObj.title,
                success: function(t) {
                  console.log(t)
                },
                fail: function(t) {
                  console.log(t)
                }
              })
            }
          }
        };
        e.default = n
      }).call(this, i("df3c").default)
    },
    7107: function(t, e, i) {},
    ab1c: function(t, e, i) {
      (function(t, e) {
        var n = i("47a9");
        i("5366"), n(i("3240"));
        var o = n(i("0813"));
        t.__webpack_require_UNI_MP_PLUGIN__ = i, e(o.default)
      }).call(this, i("3223").default, i("df3c").createPage)
    },
    e4b9: function(t, e, i) {
      i.r(e);
      var n = i("63e1"),
        o = i.n(n);
      for (var r in n)["default"].indexOf(r) < 0 && function(t) {
        i.d(e, t, (function() {
          return n[t]
        }))
      }(r);
      e.default = o.a
    },
    ffc9: function(t, e, i) {
      i.d(e, "b", (function() {
        return o
      })), i.d(e, "c", (function() {
        return r
      })), i.d(e, "a", (function() {
        return n
      }));
      var n = {
          uniNavbar: function() {
            return i.e("components/uni-navbar/uni-navbar").then(i.bind(null, "101a"))
          },
          uIcon: function() {
            return i.e("uview-ui/components/u-icon/u-icon").then(i.bind(null, "61be"))
          },
          uniIcons: function() {
            return Promise.all([i.e("common/vendor"), i.e("components/uni-icons/uni-icons")]).then(i.bind(null, "365b"))
          },
          moteLinesDivide: function() {
            return i.e("components/mote-lines-divide/mote-lines-divide").then(i.bind(null, "b080"))
          },
          uSwiper: function() {
            return i.e("uview-ui/components/u-swiper/u-swiper").then(i.bind(null, "9840"))
          }
        },
        o = function() {
          var t = this,
            e = (t.$createElement, t._self._c, 1 != t.detailObj.hiddenLoveFlag && t.centObj.num && Number(t.centObj.num) >= 10 || t.detailObj.address && t.detailObj.latitude && t.detailObj.longitude),
            i = e ? 1 != t.detailObj.hiddenLoveFlag && t.centObj.num && Number(t.centObj.num) >= 10 : null,
            n = e && i ? parseFloat((100 * t.centObj.likeRatio).toFixed(2)) : null,
            o = e && i ? parseFloat((100 * t.centObj.likeRatio).toFixed(2)) : null,
            r = e && i ? parseFloat((100 * t.centObj.notLikeRatio).toFixed(2)) : null,
            a = t.detailObj.picVideoResources && t.detailObj.picVideoResources[0] ? t.detailObj.picVideoResources.length : null,
            s = t.detailObj.picVideoResources && t.detailObj.picVideoResources[0] ? t.__map(t.detailObj.picVideoResources, (function(e, i) {
              return {
                $orig: t.__get_orig(e),
                m5: i < 5 && t.getShowState(e)
              }
            })) : null,
            p = t.showPicture ? t.detailObj.picVideoResources.length : null;
          t._isMounted || (t.e0 = function(e) {
            t.postUrl = e
          }), t.$mp.data = Object.assign({}, {
            $root: {
              m0: e,
              m1: i,
              m2: n,
              m3: o,
              m4: r,
              g0: a,
              l0: s,
              g1: p
            }
          })
        },
        r = []
    }
  },
  [
    ["ab1c", "common/runtime", "common/vendor"]
  ]
]);
