$gwx4_XC_17 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
  return function(path, global) {
    if (typeof global === 'undefined') {
      if (typeof __GWX_GLOBAL__ === 'undefined') global = {};
      else global = __GWX_GLOBAL__;
    }
    if (typeof __WXML_GLOBAL__ === 'undefined') {
      __WXML_GLOBAL__ = {};
    }
    __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
    var e_ = {}
    if (typeof(global.entrys) === 'undefined') global.entrys = {};
    e_ = global.entrys;
    var d_ = {}
    if (typeof(global.defines) === 'undefined') global.defines = {};
    d_ = global.defines;
    var f_ = {}
    if (typeof(global.modules) === 'undefined') global.modules = {};
    f_ = global.modules || {};
    var p_ = {}
    __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
    __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
    __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
    var z = __WXML_GLOBAL__.ops_set.$gwx4_XC_17 || [];

    function gz$gwx4_XC_17_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx4_XC_17_1) return __WXML_GLOBAL__.ops_cached.$gwx4_XC_17_1
      __WXML_GLOBAL__.ops_cached.$gwx4_XC_17_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, '__e'])
        Z(z[0])
        Z([3, 'swiperPanel'])
        Z([
          [4],
          [
            [5],
            [
              [5],
              [
                [4],
                [
                  [5],
                  [
                    [5],
                    [1, 'touchstart']
                  ],
                  [
                    [4],
                    [
                      [5],
                      [
                        [4],
                        [
                          [5],
                          [
                            [5],
                            [1, 'startMove']
                          ],
                          [
                            [4],
                            [
                              [5],
                              [1, '$event']
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ],
            [
              [4],
              [
                [5],
                [
                  [5],
                  [1, 'touchend']
                ],
                [
                  [4],
                  [
                    [5],
                    [
                      [4],
                      [
                        [5],
                        [
                          [5],
                          [1, 'endMove']
                        ],
                        [
                          [4],
                          [
                            [5],
                            [1, '$event']
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [1, 'height:'],
            [
              [7],
              [3, 'panelHeight']
            ]
          ],
          [1, ';']
        ])
        Z([3, 'index'])
        Z([3, 'item'])
        Z([
          [7],
          [3, 'swiperList']
        ])
        Z(z[5])
        Z(z[0])
        Z([3, 'swiperItem'])
        Z([
          [4],
          [
            [5],
            [
              [4],
              [
                [5],
                [
                  [5],
                  [1, 'tap']
                ],
                [
                  [4],
                  [
                    [5],
                    [
                      [4],
                      [
                        [5],
                        [
                          [5],
                          [1, 'routerTo']
                        ],
                        [
                          [4],
                          [
                            [5],
                            [1, '$event']
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [
              [2, '+'],
              [
                [2, '+'],
                [1, 'transform:'],
                [
                  [6],
                  [
                    [6],
                    [
                      [7],
                      [3, 'itemStyle']
                    ],
                    [
                      [7],
                      [3, 'index']
                    ]
                  ],
                  [3, 'transform']
                ]
              ],
              [1, ';']
            ],
            [
              [2, '+'],
              [
                [2, '+'],
                [1, 'z-index:'],
                [
                  [6],
                  [
                    [6],
                    [
                      [7],
                      [3, 'itemStyle']
                    ],
                    [
                      [7],
                      [3, 'index']
                    ]
                  ],
                  [3, 'zIndex']
                ]
              ],
              [1, ';']
            ]
          ],
          [
            [2, '+'],
            [
              [2, '+'],
              [1, 'opacity:'],
              [
                [6],
                [
                  [6],
                  [
                    [7],
                    [3, 'itemStyle']
                  ],
                  [
                    [7],
                    [3, 'index']
                  ]
                ],
                [3, 'opacity']
              ]
            ],
            [1, ';']
          ]
        ])
        Z(z[0])
        Z([3, 'children'])
        Z([
          [4],
          [
            [5],
            [
              [4],
              [
                [5],
                [
                  [5],
                  [1, 'tap']
                ],
                [
                  [4],
                  [
                    [5],
                    [
                      [4],
                      [
                        [5],
                        [1, 'clickPrevent']
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [1, 'width:'],
            [
              [7],
              [3, 'childrenWidth']
            ]
          ],
          [1, ';']
        ])
        Z([
          [2, '==='],
          [
            [7],
            [3, 'index']
          ],
          [
            [7],
            [3, 'currentIndex']
          ]
        ])
      })(__WXML_GLOBAL__.ops_cached.$gwx4_XC_17_1);
      return __WXML_GLOBAL__.ops_cached.$gwx4_XC_17_1
    }

    function gz$gwx4_XC_17_2() {
      if (__WXML_GLOBAL__.ops_cached.$gwx4_XC_17_2) return __WXML_GLOBAL__.ops_cached.$gwx4_XC_17_2
      __WXML_GLOBAL__.ops_cached.$gwx4_XC_17_2 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, 'replacement_box data-v-2f6e3365'])
        Z([3, '__l'])
        Z([3, 'data-v-2f6e3365'])
        Z([3, 'transparentFixed'])
        Z([3, '4dd3e33c-1'])
        Z([3, 'replacement_count data-v-2f6e3365'])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [1, 'top:'],
            [
              [2, '?:'],
              [
                [7],
                [3, 'smallScreen']
              ],
              [1, '500rpx'],
              [1, '560rpx']
            ]
          ],
          [1, ';']
        ])
        Z([1, false])
        Z(z[1])
        Z([3, '__e'])
        Z([3, 'data-v-2f6e3365 vue-ref'])
        Z([
          [4],
          [
            [5],
            [
              [4],
              [
                [5],
                [
                  [5],
                  [1, '^scrollImg']
                ],
                [
                  [4],
                  [
                    [5],
                    [
                      [4],
                      [
                        [5],
                        [1, 'scrollImg']
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ])
        Z([3, 'swiper0'])
        Z([
          [7],
          [3, 'smallScreen']
        ])
        Z([
          [6],
          [
            [7],
            [3, 'bgData']
          ],
          [3, 'bgList']
        ])
        Z([1, 1])
        Z([3, '4dd3e33c-2'])
        Z(z[7])
        Z(z[1])
        Z(z[9])
        Z(z[10])
        Z([
          [4],
          [
            [5],
            [
              [4],
              [
                [5],
                [
                  [5],
                  [1, '^scrollImg']
                ],
                [
                  [4],
                  [
                    [5],
                    [
                      [4],
                      [
                        [5],
                        [1, 'scrollImg1']
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ])
        Z([3, 'swiper1'])
        Z(z[13])
        Z([
          [6],
          [
            [7],
            [3, 'bgData']
          ],
          [3, 'clothImgList']
        ])
        Z([1, 2])
        Z([3, '4dd3e33c-3'])
        Z([
          [4],
          [
            [5],
            [
              [5],
              [
                [5],
                [1, 'up-photo']
              ],
              [1, 'data-v-2f6e3365']
            ],
            [
              [2, '?:'],
              [
                [7],
                [3, 'smallScreen']
              ],
              [1, 'up-photo-act'],
              [1, 'up-photo-acted']
            ]
          ]
        ])
        Z([
          [2, '!'],
          [
            [2, '||'],
            [
              [2, '=='],
              [
                [7],
                [3, 'typeIndex']
              ],
              [1, 2]
            ],
            [
              [2, '=='],
              [
                [7],
                [3, 'typeIndex']
              ],
              [1, 3]
            ]
          ]
        ])
        Z([
          [2, '!'],
          [
            [7],
            [3, 'humanImg']
          ]
        ])
        Z([
          [7],
          [3, 'humanImg']
        ])
        Z([
          [2, '&&'],
          [
            [2, '=='],
            [
              [7],
              [3, 'typeIndex']
            ],
            [1, 2]
          ],
          [
            [7],
            [3, 'humanImg']
          ]
        ])
        Z([
          [7],
          [3, 'showLoading']
        ])
      })(__WXML_GLOBAL__.ops_cached.$gwx4_XC_17_2);
      return __WXML_GLOBAL__.ops_cached.$gwx4_XC_17_2
    }
    __WXML_GLOBAL__.ops_set.$gwx4_XC_17 = z;
    __WXML_GLOBAL__.ops_init.$gwx4_XC_17 = true;
    var x = ['./union/pages/aiReplacement/components/componentSwiper.wxml', './union/pages/aiReplacement/index.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx4_XC_17_1()
      var c0T = _mz(z, 'view', ['bindtouchend', 0, 'bindtouchstart', 1, 'class', 1, 'data-event-opts', 2, 'style', 3], [], e, s, gg)
      var hAU = _v()
      _(c0T, hAU)
      var oBU = function(oDU, cCU, lEU, gg) {
        var tGU = _mz(z, 'view', ['bindtap', 9, 'class', 1, 'data-event-opts', 2, 'style', 3], [], oDU, cCU, gg)
        var eHU = _mz(z, 'view', ['catchtap', 13, 'class', 1, 'data-event-opts', 2, 'style', 3], [], oDU, cCU, gg)
        var bIU = _v()
        _(eHU, bIU)
        if (_oz(z, 17, oDU, cCU, gg)) {
          bIU.wxVkey = 1
        }
        bIU.wxXCkey = 1
        _(tGU, eHU)
        _(lEU, tGU)
        return lEU
      }
      hAU.wxXCkey = 2
      _2z(z, 7, oBU, e, s, gg, hAU, 'item', 'index', 'index')
      _(r, c0T)
      return r
    }
    e_[x[0]] = {
      f: m0,
      j: [],
      i: [],
      ti: [],
      ic: []
    }
    d_[x[1]] = {}
    var m1 = function(e, s, r, gg) {
      var z = gz$gwx4_XC_17_2()
      var xKU = _n('view')
      _rz(z, xKU, 'class', 0, e, s, gg)
      var cNU = _mz(z, 'uni-navbar', ['bind:__l', 1, 'class', 1, 'type', 2, 'vueId', 3], [], e, s, gg)
      _(xKU, cNU)
      var hOU = _mz(z, 'view', ['class', 5, 'style', 1], [], e, s, gg)
      var oPU = _mz(z, 'component-swiper', ['autoplay', 7, 'bind:__l', 1, 'bind:scrollImg', 2, 'class', 3, 'data-event-opts', 4, 'data-ref', 5, 'smallScreen', 6, 'swiperList', 7, 'type', 8, 'vueId', 9], [], e, s, gg)
      _(hOU, oPU)
      var cQU = _mz(z, 'component-swiper', ['autoplay', 17, 'bind:__l', 1, 'bind:scrollImg', 2, 'class', 3, 'data-event-opts', 4, 'data-ref', 5, 'smallScreen', 6, 'swiperList', 7, 'type', 8, 'vueId', 9], [], e, s, gg)
      _(hOU, cQU)
      var oRU = _mz(z, 'view', ['class', 27, 'hidden', 1], [], e, s, gg)
      var lSU = _v()
      _(oRU, lSU)
      if (_oz(z, 29, e, s, gg)) {
        lSU.wxVkey = 1
      }
      var aTU = _v()
      _(oRU, aTU)
      if (_oz(z, 30, e, s, gg)) {
        aTU.wxVkey = 1
      }
      lSU.wxXCkey = 1
      aTU.wxXCkey = 1
      _(hOU, oRU)
      _(xKU, hOU)
      var oLU = _v()
      _(xKU, oLU)
      if (_oz(z, 31, e, s, gg)) {
        oLU.wxVkey = 1
      }
      var fMU = _v()
      _(xKU, fMU)
      if (_oz(z, 32, e, s, gg)) {
        fMU.wxVkey = 1
      }
      oLU.wxXCkey = 1
      fMU.wxXCkey = 1
      _(r, xKU)
      return r
    }
    e_[x[1]] = {
      f: m1,
      j: [],
      i: [],
      ti: [],
      ic: []
    }
    if (path && e_[path]) {
      return function(env, dd, global) {
        $gwxc = 0;
        var root = {
          "tag": "wx-page"
        };
        root.children = [];
        g = "$gwx4_XC_17";
        var main = e_[path].f
        if (typeof global === "undefined") global = {};
        global.f = $gdc(f_[path], "", 1);
        try {
          main(env, {}, root, global);
          _tsd(root)
        } catch (err) {
          console.log(err)
        };
        g = "";
        return root;
      }
    }
  }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx4_XC_17();
if (__vd_version_info__.delayedGwx) __wxAppCode__['union/pages/aiReplacement/components/componentSwiper.wxml'] = [$gwx4_XC_17, './union/pages/aiReplacement/components/componentSwiper.wxml'];
else __wxAppCode__['union/pages/aiReplacement/components/componentSwiper.wxml'] = $gwx4_XC_17('./union/pages/aiReplacement/components/componentSwiper.wxml');
if (__vd_version_info__.delayedGwx) __wxAppCode__['union/pages/aiReplacement/index.wxml'] = [$gwx4_XC_17, './union/pages/aiReplacement/index.wxml'];
else __wxAppCode__['union/pages/aiReplacement/index.wxml'] = $gwx4_XC_17('./union/pages/aiReplacement/index.wxml');;
__wxRoute = "union/pages/aiReplacement/components/componentSwiper";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "union/pages/aiReplacement/components/componentSwiper.js";
define("union/pages/aiReplacement/components/componentSwiper.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["union/pages/aiReplacement/components/componentSwiper"], {
      "2c2f": function(t, e, i) {},
      7243: function(t, e, i) {
        i.r(e);
        var n = i("ed98"),
          s = i.n(n);
        for (var r in n)["default"].indexOf(r) < 0 && function(t) {
          i.d(e, t, (function() {
            return n[t]
          }))
        }(r);
        e.default = s.a
      },
      "7a5f": function(t, e, i) {
        i.d(e, "b", (function() {
          return n
        })), i.d(e, "c", (function() {
          return s
        })), i.d(e, "a", (function() {}));
        var n = function() {
            this.$createElement;
            this._self._c
          },
          s = []
      },
      "7c52": function(t, e, i) {
        i.r(e);
        var n = i("7a5f"),
          s = i("7243");
        for (var r in s)["default"].indexOf(r) < 0 && function(t) {
          i.d(e, t, (function() {
            return s[t]
          }))
        }(r);
        i("8dff");
        var o = i("828b"),
          c = Object(o.a)(s.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        e.default = c.exports
      },
      "8dff": function(t, e, i) {
        var n = i("2c2f");
        i.n(n).a
      },
      ed98: function(t, e, i) {
        (function(t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.default = void 0;
          var i = {
            props: {
              swiperList: {
                type: Array,
                default: []
              },
              timeNum: {
                type: Number,
                default: 2e3
              },
              interval: {
                type: Number,
                default: 5e3
              },
              autoplay: {
                type: Boolean,
                default: !1
              },
              smallScreen: {
                type: Boolean,
                default: !1
              },
              type: {
                type: Number,
                default: 1
              },
              current: {
                type: Number,
                default: 0
              }
            },
            data: function() {
              return {
                slideNote: {
                  x: 0,
                  y: 0
                },
                screenWidth: 0,
                itemStyle: [],
                timer: null,
                timer1: null,
                currentIndex: 0,
                winWidth: 0
              }
            },
            computed: {
              panelHeight: function() {
                return this.smallScreen ? 1 === this.type ? "610rpx" : "629rpx" : 1 === this.type ? "807rpx" : "832rpx"
              },
              childrenWidth: function() {
                return this.smallScreen ? 1 === this.type ? "383rpx" : "375rpx" : 1 === this.type ? "507rpx" : "496rpx"
              }
            },
            watch: {
              swiperList: {
                handler: function(e) {
                  var i = this;
                  if (e.length) {
                    var n = t.getSystemInfoSync();
                    this.screenWidth = n.screenWidth, this.swiperList.forEach((function(t, e) {
                      i.itemStyle.push(i.getStyle(e))
                    }))
                  }
                },
                deep: !0,
                immediate: !0
              }
            },
            mounted: function() {
              var e = this;
              t.getSystemInfo({
                success: function(t) {
                  e.winWidth = t.windowWidth
                }
              }), this.autoplay && this.doSomething()
            },
            onUnload: function() {
              this.timer = null, this.timer1 = null
            },
            beforeDestroy: function() {
              this.timer = null, this.timer1 = null
            },
            methods: {
              doSomething: function() {
                var t = this;
                this.$nextTick((function() {
                  t.timer = setInterval((function() {
                    t.slideRight()
                  }), t.timeNum)
                }))
              },
              restartTimer: function() {
                clearInterval(this.timer), this.timer = null
              },
              scrollToCurrent: function(t) {
                if (-1 !== t) {
                  this.restartTimer();
                  var e = t - this.currentIndex;
                  e < 0 && (e = this.swiperList.length + e);
                  for (var i = 0; i < e; i++) this.slideRight();
                  this.scrollImg()
                }
              },
              slideRight: function() {
                var t = JSON.parse(JSON.stringify(this.itemStyle)),
                  e = [t.pop()];
                t = e.concat(t), this.itemStyle = t, this.currentIndex = (this.currentIndex + 1) % this.swiperList.length
              },
              routerTo: function(t) {
                var e = t.detail.x,
                  i = JSON.parse(JSON.stringify(this.itemStyle));
                if (e > this.winWidth / 2) {
                  var n = [i.pop()];
                  i = n.concat(i), this.currentIndex = (this.currentIndex + 1) % this.swiperList.length, this.scrollImg()
                } else i.push(i[0]), i.splice(0, 1), this.currentIndex = (this.currentIndex - 1 + this.swiperList.length) % this.swiperList.length, this.scrollImg();
                this.itemStyle = i, this.autoplay && (clearInterval(this.timer), this.timer = null, clearTimeout(this.timer1), this.timer1 = setTimeout(this.doSomething, this.interval))
              },
              clickPrevent: function() {},
              scrollImg: function() {
                var t = 1 === this.type ? this.swiperList[this.currentIndex].noBorderUrl : this.swiperList[this.currentIndex].nofaceUrl;
                1 === this.type ? this.$emit("scrollImg", t) : 2 === this.type && this.$emit("scrollImg", t, this.swiperList[this.currentIndex].key)
              },
              getStyle: function(t) {
                if (t > this.swiperList.length / 2) {
                  var e = this.swiperList.length - t;
                  return {
                    transform: "scale(" + (1 - e / 3.6) + ") translate(-" + 35 * e + "%,0px)",
                    zIndex: 100 - e,
                    opacity: 1
                  }
                }
                return {
                  transform: "scale(" + (1 - t / 3.6) + ") translate(" + 35 * t + "%,0px)",
                  zIndex: 100 - t,
                  opacity: 1
                }
              },
              startMove: function(t) {
                clearInterval(this.timer), this.timer = null, this.slideNote.x = t.changedTouches[0] ? t.changedTouches[0].pageX : 0, this.slideNote.y = t.changedTouches[0] ? t.changedTouches[0].pageY : 0
              },
              endMove: function(t) {
                var e = JSON.parse(JSON.stringify(this.itemStyle));
                if (t.changedTouches[0].pageX - this.slideNote.x < -10) {
                  var i = [e.pop()];
                  e = i.concat(e), this.currentIndex = (this.currentIndex + 1) % this.swiperList.length, this.scrollImg()
                } else t.changedTouches[0].pageX - this.slideNote.x >= 10 && (e.push(e[0]), e.splice(0, 1), this.currentIndex = (this.currentIndex - 1 + this.swiperList.length) % this.swiperList.length, this.scrollImg());
                this.itemStyle = e, this.autoplay && (clearTimeout(this.timer1), this.timer1 = setTimeout(this.doSomething, this.interval))
              }
            }
          };
          e.default = i
        }).call(this, i("df3c").default)
      }
    }
  ]), (global.webpackJsonp = global.webpackJsonp || []).push(["union/pages/aiReplacement/components/componentSwiper-create-component", {
      "union/pages/aiReplacement/components/componentSwiper-create-component": function(t, e, i) {
        i("df3c").createComponent(i("7c52"))
      }
    },
    [
      ["union/pages/aiReplacement/components/componentSwiper-create-component"]
    ]
  ]);
}, {
  isPage: false,
  isComponent: true,
  currentFile: 'union/pages/aiReplacement/components/componentSwiper.js'
});
require("union/pages/aiReplacement/components/componentSwiper.js");;
__wxRoute = "union/pages/aiReplacement/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "union/pages/aiReplacement/index.js";
define("union/pages/aiReplacement/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["union/pages/aiReplacement/index"], {
      "00a3": function(e, t, n) {
        n.r(t);
        var o = n("8f0d"),
          i = n.n(o);
        for (var a in o)["default"].indexOf(a) < 0 && function(e) {
          n.d(t, e, (function() {
            return o[e]
          }))
        }(a);
        t.default = i.a
      },
      "137b": function(e, t, n) {
        var o = n("dc83");
        n.n(o).a
      },
      "8af7": function(e, t, n) {
        (function(e, t) {
          var o = n("47a9");
          n("5366"), o(n("3240"));
          var i = o(n("9082"));
          e.__webpack_require_UNI_MP_PLUGIN__ = n, t(i.default)
        }).call(this, n("3223").default, n("df3c").createPage)
      },
      "8f0d": function(e, t, n) {
        (function(e, o) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.default = void 0;
          var i = {
            components: {
              componentSwiper: function() {
                n.e("union/pages/aiReplacement/components/componentSwiper").then(function() {
                  return resolve(n("7c52"))
                }.bind(null, n)).catch(n.oe)
              }
            },
            data: function() {
              return {
                btnText: ["下一步", "下一步", "上传人像照片"],
                typeIndex: 0,
                leftBtn: ["", "上一步", "上一步"],
                smallScreen: !1,
                humanImg: "",
                bgImg: "",
                clothImg: "",
                key: "",
                showLoading: !1,
                bgData: [],
                showHide: !1
              }
            },
            onLoad: function() {
              var t = this,
                n = e.getSystemInfoSync().screenHeight;
              console.log(n, "屏幕高度小于750"), n < 750 ? (console.log("屏幕高度小于750"), this.smallScreen = !0) : (console.log("屏幕高度大于等于750"), this.smallScreen = !1), this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/sysParam/getSysConfigure", {
                paramKey: "VIDU_SCENIC_BG_IMAGE"
              }).then((function(e) {
                1 === e.code && (console.log(e), t.bgData = JSON.parse(e.data.paramValue) || {}, t.bgImg = t.bgData.bgList[0].noBorderUrl, t.clothImg = t.bgData.clothImgList[0].nofaceUrl, t.key = t.bgData.clothImgList[0].key, t.$util.isLogin())
              }))
            },
            onShow: function() {
              var t = this;
              e.getStorageSync("token") ? this.showHide && (this.bgImg = this.bgData.bgList[0].noBorderUrl, this.clothImg = this.bgData.clothImgList[0].nofaceUrl, this.humanImg = "", this.key = this.bgData.clothImgList[0].key, this.$refs.swiper0.scrollToCurrent(0), this.$refs.swiper1.scrollToCurrent(0)) : this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/sysParam/getSysConfigure", {
                paramKey: "VIDU_SCENIC_BG_IMAGE"
              }).then((function(e) {
                1 === e.code && (console.log(e), t.bgData = JSON.parse(e.data.paramValue) || {}, t.bgImg = t.bgData.bgList[0].noBorderUrl, t.clothImg = t.bgData.clothImgList[0].nofaceUrl, t.key = t.bgData.clothImgList[0].key, t.$util.isLogin())
              }))
            },
            computed: {
              userInfo: function() {
                return this.$store.getters.userInfor
              }
            },
            onHide: function() {
              var e = this;
              this.showHide && setTimeout((function() {
                e.typeIndex = 0, e.$refs.swiper0.scrollToCurrent(0), e.$refs.swiper1.scrollToCurrent(0)
              }), 1e3)
            },
            methods: {
              scrollImg: function(e) {
                this.bgImg = e
              },
              scrollImg1: function(e, t) {
                this.clothImg = e, this.key = t
              },
              submit: function() {
                var t = this;
                2 != this.typeIndex ? 0 != this.typeIndex && 1 != this.typeIndex || (this.typeIndex += 1) : this.humanImg ? (this.showHide = !0, e.showLoading({
                  title: "视频生成中...",
                  mask: !0
                }), this.$uniApi.dataRequestNoLoading("post", "ai/vidu/ai/createScenesTask", {
                  bgImg: this.bgImg,
                  clothImg: this.clothImg,
                  humanImg: this.humanImg,
                  memberId: this.userInfo.memberId,
                  key: this.key,
                  type: 0
                }).then((function(n) {
                  1 === n.code ? setTimeout((function() {
                    e.hideLoading(), t.$navigateTo({
                      url: "/union/pages/aiReplacement/list"
                    })
                  }), 1e3) : (e.hideLoading(), t.$util.showToast(n.msg))
                })).catch((function(n) {
                  e.hideLoading(), t.$util.showToast("请重试")
                }))) : this.chooseImage()
              },
              goList: function() {
                this.showHide = !0, this.$navigateTo({
                  url: "/union/pages/aiReplacement/list"
                })
              },
              previousStep: function() {
                this.leftBtn[this.typeIndex] && (1 == this.typeIndex && this.clothImg && this.$refs.swiper1.scrollToCurrent(this.clothIdx), this.typeIndex -= 1)
              },
              nextStep: function() {
                this.chooseImage()
              },
              chooseImage: function() {
                var t = this;
                this.showHide = !1, e.chooseImage({
                  count: 1,
                  sizeType: ["original", "compressed"],
                  sourceType: ["album", "camera"],
                  success: function(n) {
                    if (n.tempFiles[0].size / 1024 / 1024 <= 10) {
                      var i = n.tempFilePaths;
                      o.cropImage({
                        src: i[0],
                        cropScale: "1:1",
                        success: function(n) {
                          console.log(n.tempFilePath, "KKKKKKK"), e.showLoading({
                            title: "照片上传中...",
                            mask: !0
                          }), e.uploadFile({
                            url: getApp().globalData.requestUrl + "base/common/file/qiniu/upload",
                            filePath: n.tempFilePath,
                            name: "images",
                            success: function(n) {
                              console.log(n, "uploadFileRes");
                              var o = JSON.parse(n.data);
                              1 == o.code && o.data && o.data[0] && (t.humanImg = o.data[0].maxImageUrl), setTimeout((function() {
                                t.showHide = !0, e.hideLoading()
                              }), 1e3)
                            },
                            fail: function(t) {
                              console.error("upload fail:", t), e.hideLoading().showHide = !0
                            }
                          }).onProgressUpdate((function(e) {
                            console.log("上传进度" + e.progress + "%")
                          }))
                        },
                        fail: function(e) {
                          console.error("upload fail:", e)
                        }
                      })
                    } else t.$util.showToast("上传图片不可超过10M")
                  }
                })
              }
            }
          };
          t.default = i
        }).call(this, n("df3c").default, n("3223").default)
      },
      9082: function(e, t, n) {
        n.r(t);
        var o = n("d81c"),
          i = n("00a3");
        for (var a in i)["default"].indexOf(a) < 0 && function(e) {
          n.d(t, e, (function() {
            return i[e]
          }))
        }(a);
        n("137b");
        var s = n("828b"),
          c = Object(s.a)(i.default, o.b, o.c, !1, null, "2f6e3365", null, !1, o.a, void 0);
        t.default = c.exports
      },
      d81c: function(e, t, n) {
        n.d(t, "b", (function() {
          return i
        })), n.d(t, "c", (function() {
          return a
        })), n.d(t, "a", (function() {
          return o
        }));
        var o = {
            uniNavbar: function() {
              return n.e("components/uni-navbar/uni-navbar").then(n.bind(null, "101a"))
            }
          },
          i = function() {
            this.$createElement;
            this._self._c
          },
          a = []
      },
      dc83: function(e, t, n) {}
    },
    [
      ["8af7", "common/runtime", "common/vendor"]
    ]
  ]);
}, {
  isPage: true,
  isComponent: true,
  currentFile: 'union/pages/aiReplacement/index.js'
});
require("union/pages/aiReplacement/index.js");
