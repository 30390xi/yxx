$gwx4_XC_61 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx4_XC_61 || [];

    function gz$gwx4_XC_61_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx4_XC_61_1) return __WXML_GLOBAL__.ops_cached.$gwx4_XC_61_1
      __WXML_GLOBAL__.ops_cached.$gwx4_XC_61_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, 'chat-input-bar-container data-v-02d04554'])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [1, 'padding-bottom:'],
            [
              [2, '?:'],
              [
                [7],
                [3, 'isIos']
              ],
              [1, ''],
              [1, '30rpx']
            ]
          ],
          [1, ';']
        ])
        Z([
          [2, '!'],
          [
            [7],
            [3, 'isHistory']
          ]
        ])
        Z([3, 'chat-input-bar data-v-02d04554'])
        Z([
          [2, '=='],
          [
            [7],
            [3, 'showSpeakBtn']
          ],
          [1, 2]
        ])
        Z([
          [2, '=='],
          [
            [7],
            [3, 'showSpeakBtn']
          ],
          [1, 3]
        ])
        Z([
          [2, '=='],
          [
            [7],
            [3, 'showSpeakBtn']
          ],
          [1, 1]
        ])
        Z([3, 'right-btn data-v-02d04554'])
        Z([
          [2, '&&'],
          [
            [2, '=='],
            [
              [7],
              [3, 'showSpeakBtn']
            ],
            [1, 1]
          ],
          [
            [7],
            [3, 'pushingProgress']
          ]
        ])
        Z([
          [2, '&&'],
          [
            [2, '&&'],
            [
              [2, '&&'],
              [
                [2, '!'],
                [
                  [7],
                  [3, 'showHide']
                ]
              ],
              [
                [2, '||'],
                [
                  [2, '||'],
                  [
                    [2, '=='],
                    [
                      [7],
                      [3, 'showSpeakBtn']
                    ],
                    [1, 1]
                  ],
                  [
                    [2, '=='],
                    [
                      [7],
                      [3, 'showSpeakBtn']
                    ],
                    [1, 2]
                  ]
                ],
                [
                  [2, '=='],
                  [
                    [7],
                    [3, 'showSpeakBtn']
                  ],
                  [1, 3]
                ]
              ]
            ],
            [
              [7],
              [3, 'delayBtn']
            ]
          ],
          [
            [7],
            [3, 'pushingProgress']
          ]
        ])
        Z([
          [7],
          [3, 'longPress']
        ])
        Z([
          [2, '&&'],
          [
            [2, '!'],
            [
              [7],
              [3, 'pushingProgressShow']
            ]
          ],
          [
            [2, '!'],
            [
              [7],
              [3, 'isStrategy']
            ]
          ]
        ])
      })(__WXML_GLOBAL__.ops_cached.$gwx4_XC_61_1);
      return __WXML_GLOBAL__.ops_cached.$gwx4_XC_61_1
    }

    function gz$gwx4_XC_61_2() {
      if (__WXML_GLOBAL__.ops_cached.$gwx4_XC_61_2) return __WXML_GLOBAL__.ops_cached.$gwx4_XC_61_2
      __WXML_GLOBAL__.ops_cached.$gwx4_XC_61_2 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([
          [4],
          [
            [5],
            [
              [2, '?:'],
              [1, true],
              [1, 'chat-text'],
              [1, '']
            ]
          ]
        ])
        Z([
          [2, '&&'],
          [
            [6],
            [
              [7],
              [3, 'item']
            ],
            [3, 'content']
          ],
          [
            [6],
            [
              [7],
              [3, 'item']
            ],
            [3, 'isText']
          ]
        ])
        Z([
          [2, '&&'],
          [
            [6],
            [
              [7],
              [3, 'item']
            ],
            [3, 'content']
          ],
          [
            [2, '!'],
            [
              [6],
              [
                [7],
                [3, 'item']
              ],
              [3, 'isText']
            ]
          ]
        ])
        Z([3, '__l'])
        Z([
          [6],
          [
            [7],
            [3, 'item']
          ],
          [3, 'content']
        ])
        Z([3, '8c1c50c4-1'])
        Z([
          [2, '&&'],
          [
            [2, '&&'],
            [
              [2, '!'],
              [
                [6],
                [
                  [7],
                  [3, 'item']
                ],
                [3, 'content']
              ]
            ],
            [
              [2, '!'],
              [
                [6],
                [
                  [7],
                  [3, 'item']
                ],
                [3, 'strategy']
              ]
            ]
          ],
          [
            [2, '!'],
            [
              [6],
              [
                [7],
                [3, 'item']
              ],
              [3, 'conclusion']
            ]
          ]
        ])
        Z([
          [6],
          [
            [7],
            [3, 'item']
          ],
          [3, 'redirectContent']
        ])
        Z([
          [6],
          [
            [7],
            [3, 'item']
          ],
          [3, 'changeAnswer']
        ])
        Z([
          [6],
          [
            [7],
            [3, 'item']
          ],
          [3, 'strategy']
        ])
        Z([
          [6],
          [
            [7],
            [3, '$root']
          ],
          [3, 'g0']
        ])
        Z([3, 'i'])
        Z([3, 'el'])
        Z([
          [6],
          [
            [7],
            [3, '$root']
          ],
          [3, 'l1']
        ])
        Z([3, 'id'])
        Z([3, '__e'])
        Z([3, 'card-item-box'])
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
                          [
                            [5],
                            [1, 'scenicDetails']
                          ],
                          [
                            [4],
                            [
                              [5],
                              [1, '$0']
                            ]
                          ]
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
                                  [4],
                                  [
                                    [5],
                                    [
                                      [5],
                                      [
                                        [5],
                                        [1, 'item.list']
                                      ],
                                      [1, 'id']
                                    ],
                                    [
                                      [6],
                                      [
                                        [6],
                                        [
                                          [7],
                                          [3, 'el']
                                        ],
                                        [3, '$orig']
                                      ],
                                      [3, 'id']
                                    ]
                                  ]
                                ]
                              ]
                            ]
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
            [1, 'margin-right:'],
            [
              [2, '?:'],
              [
                [2, '<'],
                [
                  [7],
                  [3, 'i']
                ],
                [
                  [2, '-'],
                  [
                    [6],
                    [
                      [7],
                      [3, 'el']
                    ],
                    [3, 'g1']
                  ],
                  [1, 1]
                ]
              ],
              [1, '20rpx'],
              [1, '0']
            ]
          ],
          [1, ';']
        ])
        Z([
          [6],
          [
            [7],
            [3, 'el']
          ],
          [3, 'g2']
        ])
        Z([3, 'index'])
        Z([3, 'ele'])
        Z([
          [6],
          [
            [7],
            [3, 'el']
          ],
          [3, 'l0']
        ])
        Z(z[20])
        Z([
          [2, '<'],
          [
            [7],
            [3, 'index']
          ],
          [1, 3]
        ])
        Z(z[9])
        Z(z[15])
        Z([3, 'strategy-content'])
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
                          [1, 'cardDetails']
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
          [7],
          [3, 'mapLoading']
        ])
        Z([
          [7],
          [3, 'showExpandBtn']
        ])
        Z([
          [6],
          [
            [7],
            [3, 'item']
          ],
          [3, 'cardLoading']
        ])
      })(__WXML_GLOBAL__.ops_cached.$gwx4_XC_61_2);
      return __WXML_GLOBAL__.ops_cached.$gwx4_XC_61_2
    }
    __WXML_GLOBAL__.ops_set.$gwx4_XC_61 = z;
    __WXML_GLOBAL__.ops_init.$gwx4_XC_61 = true;
    var x = ['./union/components1/chat-input-bar/chat-input-bar-travel.wxml', './union/components1/chat-item/chat-item-travel.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx4_XC_61_1()
      var tSHB = _mz(z, 'view', ['class', 0, 'style', 1], [], e, s, gg)
      var eTHB = _v()
      _(tSHB, eTHB)
      if (_oz(z, 2, e, s, gg)) {
        eTHB.wxVkey = 1
      }
      var xWHB = _n('view')
      _rz(z, xWHB, 'class', 3, e, s, gg)
      var oXHB = _v()
      _(xWHB, oXHB)
      if (_oz(z, 4, e, s, gg)) {
        oXHB.wxVkey = 1
      }
      var fYHB = _v()
      _(xWHB, fYHB)
      if (_oz(z, 5, e, s, gg)) {
        fYHB.wxVkey = 1
      }
      var cZHB = _v()
      _(xWHB, cZHB)
      if (_oz(z, 6, e, s, gg)) {
        cZHB.wxVkey = 1
      }
      var h1HB = _n('view')
      _rz(z, h1HB, 'class', 7, e, s, gg)
      var o2HB = _v()
      _(h1HB, o2HB)
      if (_oz(z, 8, e, s, gg)) {
        o2HB.wxVkey = 1
      }
      var c3HB = _v()
      _(h1HB, c3HB)
      if (_oz(z, 9, e, s, gg)) {
        c3HB.wxVkey = 1
      }
      o2HB.wxXCkey = 1
      c3HB.wxXCkey = 1
      _(xWHB, h1HB)
      oXHB.wxXCkey = 1
      fYHB.wxXCkey = 1
      cZHB.wxXCkey = 1
      _(tSHB, xWHB)
      var bUHB = _v()
      _(tSHB, bUHB)
      if (_oz(z, 10, e, s, gg)) {
        bUHB.wxVkey = 1
      }
      var oVHB = _v()
      _(tSHB, oVHB)
      if (_oz(z, 11, e, s, gg)) {
        oVHB.wxVkey = 1
      }
      eTHB.wxXCkey = 1
      bUHB.wxXCkey = 1
      oVHB.wxXCkey = 1
      _(r, tSHB)
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
      var z = gz$gwx4_XC_61_2()
      var l5HB = _n('view')
      _rz(z, l5HB, 'class', 0, e, s, gg)
      var a6HB = _v()
      _(l5HB, a6HB)
      if (_oz(z, 1, e, s, gg)) {
        a6HB.wxVkey = 1
      }
      var t7HB = _v()
      _(l5HB, t7HB)
      if (_oz(z, 2, e, s, gg)) {
        t7HB.wxVkey = 1
        var hEIB = _mz(z, 'zero-markdown-view', ['bind:__l', 3, 'markdown', 1, 'vueId', 2], [], e, s, gg)
        _(t7HB, hEIB)
      }
      var e8HB = _v()
      _(l5HB, e8HB)
      if (_oz(z, 6, e, s, gg)) {
        e8HB.wxVkey = 1
      }
      var b9HB = _v()
      _(l5HB, b9HB)
      if (_oz(z, 7, e, s, gg)) {
        b9HB.wxVkey = 1
      }
      var o0HB = _v()
      _(l5HB, o0HB)
      if (_oz(z, 8, e, s, gg)) {
        o0HB.wxVkey = 1
      }
      var xAIB = _v()
      _(l5HB, xAIB)
      if (_oz(z, 9, e, s, gg)) {
        xAIB.wxVkey = 1
      }
      var oBIB = _v()
      _(l5HB, oBIB)
      if (_oz(z, 10, e, s, gg)) {
        oBIB.wxVkey = 1
        var oFIB = _v()
        _(oBIB, oFIB)
        var cGIB = function(lIIB, oHIB, aJIB, gg) {
          var eLIB = _mz(z, 'view', ['bindtap', 15, 'class', 1, 'data-event-opts', 2, 'style', 3], [], lIIB, oHIB, gg)
          var bMIB = _v()
          _(eLIB, bMIB)
          if (_oz(z, 19, lIIB, oHIB, gg)) {
            bMIB.wxVkey = 1
            var oNIB = _v()
            _(bMIB, oNIB)
            var xOIB = function(fQIB, oPIB, cRIB, gg) {
              var oTIB = _v()
              _(cRIB, oTIB)
              if (_oz(z, 24, fQIB, oPIB, gg)) {
                oTIB.wxVkey = 1
              }
              oTIB.wxXCkey = 1
              return cRIB
            }
            oNIB.wxXCkey = 2
            _2z(z, 22, xOIB, lIIB, oHIB, gg, oNIB, 'ele', 'index', 'index')
          }
          bMIB.wxXCkey = 1
          _(aJIB, eLIB)
          return aJIB
        }
        oFIB.wxXCkey = 2
        _2z(z, 13, cGIB, e, s, gg, oFIB, 'el', 'i', 'id')
      }
      var fCIB = _v()
      _(l5HB, fCIB)
      if (_oz(z, 25, e, s, gg)) {
        fCIB.wxVkey = 1
        var cUIB = _mz(z, 'view', ['bindtap', 26, 'class', 1, 'data-event-opts', 2], [], e, s, gg)
        var oVIB = _v()
        _(cUIB, oVIB)
        if (_oz(z, 29, e, s, gg)) {
          oVIB.wxVkey = 1
        }
        var lWIB = _v()
        _(cUIB, lWIB)
        if (_oz(z, 30, e, s, gg)) {
          lWIB.wxVkey = 1
        }
        oVIB.wxXCkey = 1
        lWIB.wxXCkey = 1
        _(fCIB, cUIB)
      }
      var cDIB = _v()
      _(l5HB, cDIB)
      if (_oz(z, 31, e, s, gg)) {
        cDIB.wxVkey = 1
      }
      a6HB.wxXCkey = 1
      t7HB.wxXCkey = 1
      t7HB.wxXCkey = 3
      e8HB.wxXCkey = 1
      b9HB.wxXCkey = 1
      o0HB.wxXCkey = 1
      xAIB.wxXCkey = 1
      oBIB.wxXCkey = 1
      fCIB.wxXCkey = 1
      cDIB.wxXCkey = 1
      _(r, l5HB)
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
        g = "$gwx4_XC_61";
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
if (__vd_version_info__.delayedGwx || false) $gwx4_XC_61();
if (__vd_version_info__.delayedGwx) __wxAppCode__['union/components1/chat-input-bar/chat-input-bar-travel.wxml'] = [$gwx4_XC_61, './union/components1/chat-input-bar/chat-input-bar-travel.wxml'];
else __wxAppCode__['union/components1/chat-input-bar/chat-input-bar-travel.wxml'] = $gwx4_XC_61('./union/components1/chat-input-bar/chat-input-bar-travel.wxml');
if (__vd_version_info__.delayedGwx) __wxAppCode__['union/components1/chat-item/chat-item-travel.wxml'] = [$gwx4_XC_61, './union/components1/chat-item/chat-item-travel.wxml'];
else __wxAppCode__['union/components1/chat-item/chat-item-travel.wxml'] = $gwx4_XC_61('./union/components1/chat-item/chat-item-travel.wxml');;
__wxRoute = "union/components1/chat-input-bar/chat-input-bar-travel";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "union/components1/chat-input-bar/chat-input-bar-travel.js";
define("union/components1/chat-input-bar/chat-input-bar-travel.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["union/components1/chat-input-bar/chat-input-bar-travel"], {
      "0e34": function(t, e, n) {
        n.r(e);
        var o = n("fb879"),
          i = n("d0cf");
        for (var s in i)["default"].indexOf(s) < 0 && function(t) {
          n.d(e, t, (function() {
            return i[t]
          }))
        }(s);
        n("a8ce");
        var a = n("828b"),
          c = Object(a.a)(i.default, o.b, o.c, !1, null, "02d04554", null, !1, o.a, void 0);
        e.default = c.exports
      },
      a8ce: function(t, e, n) {
        var o = n("d526");
        n.n(o).a
      },
      d0cf: function(t, e, n) {
        n.r(e);
        var o = n("e5a5"),
          i = n.n(o);
        for (var s in o)["default"].indexOf(s) < 0 && function(t) {
          n.d(e, t, (function() {
            return o[t]
          }))
        }(s);
        e.default = i.a
      },
      d526: function(t, e, n) {},
      e5a5: function(t, e, n) {
        (function(t, n) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.default = void 0;
          var o = requirePlugin("WechatSI").getRecordRecognitionManager(),
            i = {
              name: "chat-input-bar",
              props: {
                isTalking: {
                  type: Boolean,
                  default: function() {
                    return !1
                  }
                },
                detail: {
                  type: Object,
                  default: function() {
                    return {
                      defaultProblemList: []
                    }
                  }
                },
                pushingProgress: {
                  type: Boolean,
                  default: function() {
                    return !1
                  }
                },
                showHide: {
                  type: Boolean,
                  default: function() {
                    return !0
                  }
                },
                isIos: {
                  type: Boolean,
                  default: function() {
                    return !1
                  }
                },
                pushingProgressShow: {
                  type: Boolean,
                  default: function() {
                    return !0
                  }
                },
                delayBtn: {
                  type: Boolean,
                  default: function() {
                    return !1
                  }
                },
                isStrategy: {
                  type: Boolean,
                  default: function() {}
                },
                isHistory: {
                  type: Boolean,
                  default: function() {}
                }
              },
              data: function() {
                return {
                  msg: "",
                  focus: !1,
                  emojiType: "",
                  showSpeakBtn: 1,
                  longPress: !1,
                  touched: !1
                }
              },
              mounted: function() {
                this.initVoice()
              },
              methods: {
                resetTravel: function() {
                  this.$emit("resetTravel")
                },
                goHistory: function() {
                  this.$eventAnalyse.analyse({
                    eventTag: "aiTravel_history_click",
                    eventName: "点击进入旅行搭子历史记录页",
                    eventParams: {
                      pagePath: "/union/pages/aiTravel/historyList"
                    }
                  }), this.pushingProgressShow ? (this.$emit("clearDataStop"), t.navigateTo({
                    url: "/union/pages/aiTravel/historyList"
                  })) : this.$util.showToast("正在回答，请稍候")
                },
                stopVoice: function() {
                  this.touched = !1, this.longPress = !1, this.showSpeakBtn = 2, o.stop()
                },
                keystart: function(e) {
                  var n = this;
                  this.longPress ? (this.touched = !1, this.longPress = !1, this.showSpeakBtn = 2, o.stop()) : (this.showSpeakBtn = 3, this.touched = !0, t.vibrateShort(), this.recordShow().then((function(t) {
                    t ? n.touched && (n.longPress = !0, o.start({
                      duration: 6e4
                    })) : n.touched = !1
                  })))
                },
                getSpeak: function() {
                  this.showSpeakBtn = 2
                },
                setcolse: function() {
                  this.showSpeakBtn = 1, this.$emit("setcolse")
                },
                stopSpeak: function() {
                  this.$emit("stopSpeak")
                },
                initVoice: function() {
                  console.log(o);
                  var t = this;
                  o.onStop = function(e) {
                    console.log("record file path", e.tempFilePath), console.log("result", e.result);
                    var n = e.result;
                    t.msg = n, t.showSpeakBtn = 1
                  }, o.onStart = function(t) {
                    console.log("成功开始录音识别", t)
                  }, o.onError = function(t) {
                    console.error("error msg", t.msg)
                  }
                },
                updateKeyboardHeightChange: function(t) {
                  t.height > 0 && (this.emojiType = "emoji")
                },
                hidedKeyboard: function() {
                  "keyboard" === this.emojiType && (this.emojiType = "")
                },
                emojiChange: function() {
                  this.$emit("emojiTypeChange", this.emojiType), "keyboard" === this.emojiType ? this.focus = !0 : (this.focus = !1, t.hideKeyboard()), this.emojiType = this.emojiType && "emoji" !== this.emojiType ? "emoji" : "keyboard"
                },
                emojiClick: function(t) {
                  this.msg += t
                },
                askClick: function(t) {
                  this.sendMsg(t)
                },
                sendClick: function() {
                  this.$eventAnalyse.analyse({
                    eventTag: "ai_sendQuestion_click",
                    eventName: "伴游发送问题",
                    eventParams: {
                      msg: this.msg
                    }
                  }), this.sendMsg(this.msg) && (this.msg = "")
                },
                sendMsg: function(t) {
                  return this.pushingProgress ? t.length ? (this.showHide ? this.$emit("setShowHide", t) : this.$emit("send", t), !0) : (this.$util.showToast("请输入您的问题"), !1) : (this.$util.showToast("请稍候"), !1)
                },
                recordShow: function() {
                  var e = this;
                  return new Promise((function(o, i) {
                    t.getSetting({
                      success: function(i) {
                        i.authSetting["scope.record"] ? i.authSetting["scope.record"] && o(!0) : t.authorize({
                          scope: "scope.record",
                          success: function() {
                            o(!0)
                          },
                          fail: function() {
                            o(!1), n.showModal({
                              title: "提示",
                              content: "您未授权录音，功能将无法使用",
                              showCancel: !0,
                              confirmText: "授权",
                              confirmColor: "#52a2d8",
                              success: function(t) {
                                t.confirm ? n.openSetting({
                                  success: function(t) {
                                    t.authSetting["scope.record"] ? (o(!1), console.log("未设置录音授权1")) : (console.log("未设置录音授权"), n.showModal({
                                      title: "提示",
                                      content: "您未授权录音，功能将无法使用",
                                      showCancel: !1
                                    }), o(!1))
                                  },
                                  fail: function() {
                                    o(!1), console.log("未设置录音授权2")
                                  }
                                }) : i.cancel && (console.log("未设置录音授权3"), o(!1))
                              },
                              fail: function() {
                                e.showSpeakBtn = 2, console.log("未设置录音授权4"), o(!1)
                              },
                              complete: function() {
                                e.showSpeakBtn = 2, console.log("未设置录音授权5")
                              }
                            })
                          }
                        })
                      }
                    })
                  }))
                },
                keyend: function(t) {}
              }
            };
          e.default = i
        }).call(this, n("df3c").default, n("3223").default)
      },
      fb879: function(t, e, n) {
        n.d(e, "b", (function() {
          return o
        })), n.d(e, "c", (function() {
          return i
        })), n.d(e, "a", (function() {}));
        var o = function() {
            var t = this;
            t.$createElement;
            t._self._c, t._isMounted || (t.e0 = function(e) {
              t.showSpeakBtn = 1
            })
          },
          i = []
      }
    }
  ]), (global.webpackJsonp = global.webpackJsonp || []).push(["union/components1/chat-input-bar/chat-input-bar-travel-create-component", {
      "union/components1/chat-input-bar/chat-input-bar-travel-create-component": function(t, e, n) {
        n("df3c").createComponent(n("0e34"))
      }
    },
    [
      ["union/components1/chat-input-bar/chat-input-bar-travel-create-component"]
    ]
  ]);
}, {
  isPage: false,
  isComponent: true,
  currentFile: 'union/components1/chat-input-bar/chat-input-bar-travel.js'
});
require("union/components1/chat-input-bar/chat-input-bar-travel.js");;
__wxRoute = "union/components1/chat-item/chat-item-travel";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "union/components1/chat-item/chat-item-travel.js";
define("union/components1/chat-item/chat-item-travel.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["union/components1/chat-item/chat-item-travel"], {
      "048d": function(t, e, n) {
        n.r(e);
        var i = n("0529"),
          a = n("0c83");
        for (var o in a)["default"].indexOf(o) < 0 && function(t) {
          n.d(e, t, (function() {
            return a[t]
          }))
        }(o);
        n("de17");
        var s = n("828b"),
          l = Object(s.a)(a.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        e.default = l.exports
      },
      "0529": function(t, e, n) {
        n.d(e, "b", (function() {
          return i
        })), n.d(e, "c", (function() {
          return a
        })), n.d(e, "a", (function() {}));
        var i = function() {
            var t = this,
              e = (t.$createElement, t._self._c, t.item.list && t.item.list.length && 0 == t.item.type),
              n = e ? t.__map(t.item.list, (function(e, n) {
                var i = t.__get_orig(e),
                  a = t.item.list.length,
                  o = e.labels && e.labels.length > 0;
                return {
                  $orig: i,
                  g1: a,
                  g2: o,
                  l0: o ? t.getTagData(e.labels) : null
                }
              })) : null,
              i = t.item.strategy ? t.item.strategyContent.data.length : null;
            t.$mp.data = Object.assign({}, {
              $root: {
                g0: e,
                l1: n,
                g3: i
              }
            })
          },
          a = []
      },
      "0c83": function(t, e, n) {
        n.r(e);
        var i = n("814d"),
          a = n.n(i);
        for (var o in i)["default"].indexOf(o) < 0 && function(t) {
          n.d(e, t, (function() {
            return i[t]
          }))
        }(o);
        e.default = a.a
      },
      "5cc0": function(t, e, n) {},
      "814d": function(t, e, n) {
        (function(t) {
          var i = n("47a9");
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.default = void 0;
          var a, o = i(n("7ca3")),
            s = {
              name: "chat-item",
              components: {
                zeroMarkdownView: function() {
                  n.e("union/components1/components/zero-markdown-view/zero-markdown-view-travel").then(function() {
                    return resolve(n("6282f"))
                  }.bind(null, n)).catch(n.oe)
                }
              },
              props: {
                item: {
                  type: Object,
                  default: function() {
                    return {
                      time: "",
                      icon: "",
                      name: "",
                      content: "",
                      isMe: !1
                    }
                  }
                },
                pushingProgress: {
                  type: Boolean,
                  default: function() {
                    return !1
                  }
                },
                newVal: {
                  type: String,
                  default: function() {
                    return ""
                  }
                },
                sessionId: {
                  type: String,
                  default: function() {
                    return ""
                  }
                }
              },
              data: function() {
                return {
                  imgStarted: !1,
                  imgCompleted: !1,
                  imgContent: "",
                  imgArray: [],
                  countInfos: "",
                  index: 0,
                  timer: null,
                  itemContentCopy: "",
                  itemContentIndex: 0,
                  displayText: "",
                  showMore: !1,
                  tabs: ["3天", "6个地点"],
                  tags: ["兵马俑", "兵马俑", "兵马俑", "兵马俑", "兵马俑", "兵马俑"],
                  mapData: null,
                  mapLoading: !1,
                  subkey: "U4JBZ-K7XW4-GH2UA-KVPJK-OLCYV-7WB3D",
                  map: {
                    longitude: "108.939621",
                    latitude: "34.343147",
                    scale: 14
                  },
                  polyline: [{
                    color: "#0000AA",
                    arrowLine: !0,
                    width: 6,
                    points: []
                  }],
                  markers: [],
                  tagsExpanded: !1,
                  showExpandBtn: !1,
                  tagsHeight: 0
                }
              },
              watch: {
                "item.strategy": {
                  handler: function(e) {
                    var n = this;
                    e && this.sessionId && (this.$nextTick((function() {
                      t.createSelectorQuery().in(n).select(".strategy-content-tags").boundingClientRect((function(e) {
                        if (e) {
                          n.tagsHeight = e.height;
                          var i = t.getSystemInfoSync().windowWidth / 750;
                          n.tagsScrollHeightPx = 54 * i, n.tagsHeight > n.tagsScrollHeightPx ? n.showExpandBtn = !0 : n.showExpandBtn = !1
                        }
                      })).exec()
                    })), this.getLineDetail())
                  },
                  immediate: !0
                }
              },
              mounted: function() {
                this.displayText = "", this.index = 0
              },
              methods: (a = {
                itemContent: function() {
                  var t = this;
                  if (!this.item.content) return this.displayText = "", void(this.index = 0);
                  var e = setInterval((function() {
                    t.index < t.item.content.length ? (t.displayText += t.item.content.charAt(t.index), t.index++) : clearInterval(e)
                  }), 50)
                },
                share: function() {
                  var t = {
                    title: "".concat(this.item.strategyContent.city).concat(this.item.strategyContent.day, "日游"),
                    imageUrl: this.item.strategyContent.picture || "https://eshopfile.zhiyousx.com/175006196412292999.png",
                    path: "/union/pages/aiTravel/historyList"
                  };
                  this.$emit("clickShare", t)
                },
                scenicDetails: function(t) {
                  this.$eventAnalyse.analyse({
                    eventTag: "ai_escortScenicSpots_click",
                    eventName: "伴游去景区详情",
                    eventParams: {
                      url: "/pages/spotDetailNew/spotDetailNew?spotId=" + t.id
                    }
                  }), this.$navigateTo({
                    url: "/pages/spotDetailNew/spotDetailNew?spotId=" + t.id
                  })
                },
                getTagData: function(t) {
                  return t ? t.split(",") : []
                },
                cardDetails: function() {
                  this.$eventAnalyse.analyse({
                    eventTag: "aiTravel_card_click",
                    eventName: "旅行搭子点击生成卡片",
                    eventParams: JSON.stringify({
                      sessionId: this.sessionId
                    })
                  }), t.navigateTo({
                    url: "/union/pages/aiTravel/cardPage?sessionId=" + this.sessionId
                  })
                },
                resetTravel: function() {
                  console.log(this.item.redirectContent, "this.item.redirectContent"), this.$eventAnalyse.analyse({
                    eventTag: "aiTravel_guide_click",
                    eventName: "旅行搭子点击重新规划引导按钮",
                    eventParams: {
                      pagePath: "union/pages/aiTravel/index",
                      content: this.item.redirectContent
                    }
                  }), this.$emit("resetTravel", this.item.redirectContent)
                },
                changePlan: function() {
                  this.$eventAnalyse.analyse({
                    eventTag: "aiTravel_changeGuide_click",
                    eventName: "旅行搭子点击重新规划引导按钮",
                    eventParams: {
                      pagePath: "union/pages/aiTravel/index",
                      content: this.item.changeAnswer
                    }
                  }), this.$emit("resetTravel", this.item.changeAnswer)
                },
                routeDetails: function(e) {
                  this.$eventAnalyse.analyse({
                    eventTag: "ai_escortGoLine_click",
                    eventName: "伴游去线路详情",
                    eventParams: {
                      url: "/subPage/pages/lineInfo/lineInfo?lineId=" + e
                    }
                  }), t.navigateTo({
                    url: "/subPage/pages/lineInfo/lineInfo?lineId=" + e
                  })
                },
                goLine: function(e) {
                  this.$eventAnalyse.analyse({
                    eventTag: "ai_exclusiveDetails_click",
                    eventName: "专属详情页",
                    eventParams: {
                      url: "/union/pages/ai/strategyGuide?lineId=" + e
                    }
                  }), t.navigateTo({
                    url: "/union/pages/ai/strategyGuide?lineId=" + e
                  })
                },
                jumpToMap: function() {
                  this.item.longitude && this.item.latitude ? t.openLocation({
                    latitude: Number(this.item.latitude),
                    longitude: Number(this.item.longitude),
                    name: this.item.title,
                    success: function() {}
                  }) : this.$util.showToast("获取地址失败！")
                },
                exclusiveStrategy: function(t) {
                  this.$eventAnalyse.analyse({
                    eventTag: "ai_generateLine_click",
                    eventName: "生成我的专属攻略",
                    eventParams: {
                      msg: "生成我的专属攻略"
                    }
                  }), this.pushingProgress ? this.$emit("exclusive", t) : this.$util.showToast("请稍候")
                },
                expandTags: function() {
                  this.tagsExpanded ? t.navigateTo({
                    url: "/union/pages/aiTravel/cardPage?sessionId=" + this.sessionId
                  }) : this.tagsExpanded = !0
                },
                foldTags: function() {
                  this.tagsExpanded = !this.tagsExpanded
                }
              }, (0, o.default)(a, "getTagData", (function(t) {
                return t ? t.split(",") : []
              })), (0, o.default)(a, "showPic", (function(e) {
                var n = [e.data.url];
                t.previewImage({
                  urls: n
                })
              })), (0, o.default)(a, "downloadFile", (function(t) {})), (0, o.default)(a, "getLineDetail", (function() {
                var e = this;
                this.mapLoading = !0, this.markers = [], this.polyline[0].points = [], this.$uniApi.dataRequestNoLoading("GET", "ai/planCard/queryById?id=" + this.sessionId + "&day=1").then((function(n) {
                  if (1 === n.code) {
                    e.mapData = n.data, e.mapData.aiPlanCards || (e.mapData.aiPlanCards = []);
                    var i = n.data.coordinateVOS,
                      a = [];
                    e.mapData.aiPlanCards.forEach((function(t, n) {
                      t.coordinate && (a.push({
                        longitude: Number(t.coordinate.split(",")[0]),
                        latitude: Number(t.coordinate.split(",")[1])
                      }), e.markers.push({
                        id: +t.id,
                        title: t.name,
                        longitude: Number(t.coordinate.split(",")[0]),
                        latitude: Number(t.coordinate.split(",")[1]),
                        width: 25,
                        height: 25,
                        iconPath: "https://eshopfile.zhiyousx.com/169209589667867086.png",
                        label: {
                          content: String(n + 1),
                          bgColor: "#3478F6",
                          color: "#fff",
                          textAlign: "center",
                          borderRadius: 15,
                          width: 25,
                          height: 25,
                          fontSize: 12,
                          borderWidth: 2,
                          borderColor: "#fff",
                          anchorY: -10
                        },
                        callout: {
                          display: "ALWAYS",
                          anchorY: 10,
                          anchorX: 0,
                          content: t.name,
                          fontSize: 14,
                          color: "#000",
                          fontWeight: "bold",
                          bgColor: "#fff",
                          textAlign: "center",
                          borderRadius: 5,
                          padding: 5
                        }
                      }))
                    })), e.markers.length > 0 && (e.map.longitude = e.markers[0].longitude, e.map.latitude = e.markers[0].latitude), e._mapContext = t.createMapContext("map", e), i.length <= 1 && (i = [e.map, e.map]), setTimeout((function() {
                      e.polyline[0].points = i, e.polyline[0].color = "#7E9AF4", a.length > 0 && e._mapContext.includePoints({
                        padding: [70, 70, 70, 70],
                        points: a
                      }), e.$nextTick((function() {
                        e.mapLoading = !1
                      }))
                    }), 500)
                  } else e.mapLoading = !1
                })).catch((function(t) {
                  e.mapLoading = !1
                }))
              })), a)
            };
          e.default = s
        }).call(this, n("df3c").default)
      },
      de17: function(t, e, n) {
        var i = n("5cc0");
        n.n(i).a
      }
    }
  ]), (global.webpackJsonp = global.webpackJsonp || []).push(["union/components1/chat-item/chat-item-travel-create-component", {
      "union/components1/chat-item/chat-item-travel-create-component": function(t, e, n) {
        n("df3c").createComponent(n("048d"))
      }
    },
    [
      ["union/components1/chat-item/chat-item-travel-create-component"]
    ]
  ]);
}, {
  isPage: false,
  isComponent: true,
  currentFile: 'union/components1/chat-item/chat-item-travel.js'
});
require("union/components1/chat-item/chat-item-travel.js");
