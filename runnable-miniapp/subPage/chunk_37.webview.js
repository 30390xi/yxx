$gwx2_XC_31 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx2_XC_31 || [];

    function gz$gwx2_XC_31_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx2_XC_31_1) return __WXML_GLOBAL__.ops_cached.$gwx2_XC_31_1
      __WXML_GLOBAL__.ops_cached.$gwx2_XC_31_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, 'records data-v-875c916e'])
        Z([3, 'head allcenter data-v-875c916e'])
        Z([3, 'item allcenter data-v-875c916e'])
        Z([3, 't data-v-875c916e'])
        Z([3, '已领权益'])
        Z([3, 'num data-v-875c916e'])
        Z([a, [
          [2, '+'],
          [
            [2, '||'],
            [
              [6],
              [
                [7],
                [3, 'recordData']
              ],
              [3, 'receivedEquityNum']
            ],
            [1, 0]
          ],
          [1, '']
        ]])
        Z([3, 'unit data-v-875c916e'])
        Z([3, '个'])
        Z([3, 'desc data-v-875c916e'])
        Z([a, [
          [2, '+'],
          [
            [2, '+'],
            [1, '（'],
            [
              [2, '||'],
              [
                [6],
                [
                  [7],
                  [3, 'recordData']
                ],
                [3, 'cardNum']
              ],
              [1, 0]
            ]
          ],
          [1, '张卡）']
        ]])
        Z(z[2])
        Z(z[3])
        Z(z[4])
        Z(z[5])
        Z(z[7])
        Z([3, 'margin-right:6rpx;'])
        Z([3, '¥'])
        Z([a, [
          [2, '||'],
          [
            [6],
            [
              [7],
              [3, 'recordData']
            ],
            [3, 'equityAmount']
          ],
          [1, 0]
        ]])
        Z(z[9])
        Z([3, 'mycard data-v-875c916e'])
        Z([3, '__i0__'])
        Z([3, 'item'])
        Z([
          [6],
          [
            [7],
            [3, '$root']
          ],
          [3, 'l0']
        ])
        Z([3, 'card data-v-875c916e'])
        Z([3, 'title allcenter data-v-875c916e'])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [1, 'background:'],
            [
              [2, '+'],
              [
                [2, '+'],
                [
                  [2, '+'],
                  [
                    [2, '+'],
                    [1, 'linear-gradient(135deg, '],
                    [
                      [2, '||'],
                      [
                        [6],
                        [
                          [6],
                          [
                            [7],
                            [3, 'item']
                          ],
                          [3, '$orig']
                        ],
                        [3, 'backgroundColor1']
                      ],
                      [1, '#e7d6b4']
                    ]
                  ],
                  [1, ' 0%, ']
                ],
                [
                  [6],
                  [
                    [7],
                    [3, 'item']
                  ],
                  [3, 'm0']
                ]
              ],
              [1, ' 100%);']
            ]
          ],
          [1, ';']
        ])
        Z([a, [
          [6],
          [
            [6],
            [
              [7],
              [3, 'item']
            ],
            [3, '$orig']
          ],
          [3, 'name']
        ]])
        Z([3, 'list data-v-875c916e'])
        Z([3, '__i1__'])
        Z([3, 'items'])
        Z([
          [6],
          [
            [6],
            [
              [7],
              [3, 'item']
            ],
            [3, '$orig']
          ],
          [3, 'detailVOList']
        ])
        Z([3, '__e'])
        Z([3, 'item flex data-v-875c916e'])
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
                            [1, 'toEqDetail']
                          ],
                          [
                            [4],
                            [
                              [5],
                              [
                                [5],
                                [1, '$0']
                              ],
                              [1, '$1']
                            ]
                          ]
                        ],
                        [
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
                                    [
                                      [4],
                                      [
                                        [5],
                                        [
                                          [5],
                                          [
                                            [5],
                                            [1, 'recordData.detail']
                                          ],
                                          [1, '']
                                        ],
                                        [
                                          [7],
                                          [3, '__i0__']
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
                                        [
                                          [5],
                                          [
                                            [5],
                                            [1, 'detailVOList']
                                          ],
                                          [1, '']
                                        ],
                                        [
                                          [7],
                                          [3, '__i1__']
                                        ]
                                      ],
                                      [1, 'userEquityCardDetailId']
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
                                  [4],
                                  [
                                    [5],
                                    [
                                      [5],
                                      [
                                        [5],
                                        [
                                          [5],
                                          [1, 'recordData.detail']
                                        ],
                                        [1, '']
                                      ],
                                      [
                                        [7],
                                        [3, '__i0__']
                                      ]
                                    ],
                                    [1, 'equityCardName']
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
        Z([3, 'info flex data-v-875c916e'])
        Z([3, 'data-v-875c916e'])
        Z([
          [6],
          [
            [7],
            [3, 'items']
          ],
          [3, 'equityImage']
        ])
        Z([3, 'text data-v-875c916e'])
        Z([3, 'name multilineText2 data-v-875c916e'])
        Z([a, [
          [6],
          [
            [7],
            [3, 'items']
          ],
          [3, 'equityName']
        ]])
        Z([3, 'time data-v-875c916e'])
        Z([a, [
          [2, '+'],
          [
            [2, '+'],
            [
              [6],
              [
                [7],
                [3, 'items']
              ],
              [3, 'validityStartTime']
            ],
            [1, '至']
          ],
          [
            [6],
            [
              [7],
              [3, 'items']
            ],
            [3, 'validityEndTime']
          ]
        ]])
        Z([3, 'nums data-v-875c916e'])
        Z([
          [2, '>'],
          [
            [6],
            [
              [7],
              [3, 'items']
            ],
            [3, 'deductionAmount']
          ],
          [1, 0]
        ])
        Z([3, 'name data-v-875c916e'])
        Z([3, '已省'])
        Z([3, 'count data-v-875c916e'])
        Z([a, [
          [2, '+'],
          [1, '¥'],
          [
            [2, '||'],
            [
              [6],
              [
                [7],
                [3, 'items']
              ],
              [3, 'deductionAmount']
            ],
            [1, 0]
          ]
        ]])
        Z([3, 'eqinfo data-v-875c916e'])
        Z([3, '查看权益'])
        Z([
          [2, '=='],
          [
            [6],
            [
              [7],
              [3, 'items']
            ],
            [3, 'useState']
          ],
          [1, 1]
        ])
        Z(z[36])
        Z([3, 'https://eshopfile.zhiyousx.com/2023011114064095097.png'])
        Z([
          [2, '=='],
          [
            [6],
            [
              [7],
              [3, 'items']
            ],
            [3, 'useState']
          ],
          [1, 2]
        ])
        Z(z[36])
        Z([3, 'https://eshopfile.zhiyousx.com/2023010910000900378.png'])
        Z([
          [2, '=='],
          [
            [6],
            [
              [7],
              [3, 'items']
            ],
            [3, 'useState']
          ],
          [1, 3]
        ])
        Z(z[36])
        Z([3, 'https://eshopfile.zhiyousx.com/2023010910005976066.png'])
        Z([
          [2, '=='],
          [
            [6],
            [
              [7],
              [3, 'items']
            ],
            [3, 'useState']
          ],
          [1, 4]
        ])
        Z(z[36])
        Z([3, 'https://eshopfile.zhiyousx.com/2023010910013637801.png'])
        Z([
          [2, '=='],
          [
            [6],
            [
              [7],
              [3, 'items']
            ],
            [3, 'useState']
          ],
          [1, 5]
        ])
        Z(z[36])
        Z([3, 'https://eshopfile.zhiyousx.com/2023011114083993049.png'])
        Z([
          [2, '=='],
          [
            [6],
            [
              [7],
              [3, 'items']
            ],
            [3, 'useState']
          ],
          [1, 6]
        ])
        Z(z[36])
        Z([3, 'https://eshopfile.zhiyousx.com/2023010910015464618.png'])
      })(__WXML_GLOBAL__.ops_cached.$gwx2_XC_31_1);
      return __WXML_GLOBAL__.ops_cached.$gwx2_XC_31_1
    }
    __WXML_GLOBAL__.ops_set.$gwx2_XC_31 = z;
    __WXML_GLOBAL__.ops_init.$gwx2_XC_31 = true;
    var x = ['./subPage/pages/myeqcard/records.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx2_XC_31_1()
      var xC2B = _n('view')
      _rz(z, xC2B, 'class', 0, e, s, gg)
      var oD2B = _n('view')
      _rz(z, oD2B, 'class', 1, e, s, gg)
      var fE2B = _n('view')
      _rz(z, fE2B, 'class', 2, e, s, gg)
      var cF2B = _n('view')
      _rz(z, cF2B, 'class', 3, e, s, gg)
      var hG2B = _oz(z, 4, e, s, gg)
      _(cF2B, hG2B)
      _(fE2B, cF2B)
      var oH2B = _n('view')
      _rz(z, oH2B, 'class', 5, e, s, gg)
      var cI2B = _oz(z, 6, e, s, gg)
      _(oH2B, cI2B)
      var oJ2B = _n('text')
      _rz(z, oJ2B, 'class', 7, e, s, gg)
      var lK2B = _oz(z, 8, e, s, gg)
      _(oJ2B, lK2B)
      _(oH2B, oJ2B)
      _(fE2B, oH2B)
      var aL2B = _n('view')
      _rz(z, aL2B, 'class', 9, e, s, gg)
      var tM2B = _oz(z, 10, e, s, gg)
      _(aL2B, tM2B)
      _(fE2B, aL2B)
      _(oD2B, fE2B)
      var eN2B = _n('view')
      _rz(z, eN2B, 'class', 11, e, s, gg)
      var bO2B = _n('view')
      _rz(z, bO2B, 'class', 12, e, s, gg)
      var oP2B = _oz(z, 13, e, s, gg)
      _(bO2B, oP2B)
      _(eN2B, bO2B)
      var xQ2B = _n('view')
      _rz(z, xQ2B, 'class', 14, e, s, gg)
      var oR2B = _mz(z, 'text', ['class', 15, 'style', 1], [], e, s, gg)
      var fS2B = _oz(z, 17, e, s, gg)
      _(oR2B, fS2B)
      _(xQ2B, oR2B)
      var cT2B = _oz(z, 18, e, s, gg)
      _(xQ2B, cT2B)
      _(eN2B, xQ2B)
      var hU2B = _n('view')
      _rz(z, hU2B, 'class', 19, e, s, gg)
      _(eN2B, hU2B)
      _(oD2B, eN2B)
      _(xC2B, oD2B)
      var oV2B = _n('view')
      _rz(z, oV2B, 'class', 20, e, s, gg)
      var cW2B = _v()
      _(oV2B, cW2B)
      var oX2B = function(aZ2B, lY2B, t12B, gg) {
        var b32B = _n('view')
        _rz(z, b32B, 'class', 24, aZ2B, lY2B, gg)
        var o42B = _mz(z, 'view', ['class', 25, 'style', 1], [], aZ2B, lY2B, gg)
        var x52B = _oz(z, 27, aZ2B, lY2B, gg)
        _(o42B, x52B)
        _(b32B, o42B)
        var o62B = _n('view')
        _rz(z, o62B, 'class', 28, aZ2B, lY2B, gg)
        var f72B = _v()
        _(o62B, f72B)
        var c82B = function(o02B, h92B, cA3B, gg) {
          var lC3B = _mz(z, 'view', ['bindtap', 32, 'class', 1, 'data-event-opts', 2], [], o02B, h92B, gg)
          var aD3B = _n('view')
          _rz(z, aD3B, 'class', 35, o02B, h92B, gg)
          var tE3B = _mz(z, 'image', ['class', 36, 'src', 1], [], o02B, h92B, gg)
          _(aD3B, tE3B)
          var eF3B = _n('view')
          _rz(z, eF3B, 'class', 38, o02B, h92B, gg)
          var bG3B = _n('view')
          _rz(z, bG3B, 'class', 39, o02B, h92B, gg)
          var oH3B = _oz(z, 40, o02B, h92B, gg)
          _(bG3B, oH3B)
          _(eF3B, bG3B)
          var xI3B = _n('view')
          _rz(z, xI3B, 'class', 41, o02B, h92B, gg)
          var oJ3B = _oz(z, 42, o02B, h92B, gg)
          _(xI3B, oJ3B)
          _(eF3B, xI3B)
          _(aD3B, eF3B)
          _(lC3B, aD3B)
          var fK3B = _n('view')
          _rz(z, fK3B, 'class', 43, o02B, h92B, gg)
          var cL3B = _v()
          _(fK3B, cL3B)
          if (_oz(z, 44, o02B, h92B, gg)) {
            cL3B.wxVkey = 1
            var tS3B = _n('view')
            _rz(z, tS3B, 'class', 45, o02B, h92B, gg)
            var eT3B = _oz(z, 46, o02B, h92B, gg)
            _(tS3B, eT3B)
            _(cL3B, tS3B)
            var bU3B = _n('view')
            _rz(z, bU3B, 'class', 47, o02B, h92B, gg)
            var oV3B = _oz(z, 48, o02B, h92B, gg)
            _(bU3B, oV3B)
            _(cL3B, bU3B)
          } else {
            cL3B.wxVkey = 2
            var xW3B = _n('view')
            _rz(z, xW3B, 'class', 49, o02B, h92B, gg)
            var oX3B = _oz(z, 50, o02B, h92B, gg)
            _(xW3B, oX3B)
            _(cL3B, xW3B)
          }
          var hM3B = _v()
          _(fK3B, hM3B)
          if (_oz(z, 51, o02B, h92B, gg)) {
            hM3B.wxVkey = 1
            var fY3B = _mz(z, 'image', ['class', 52, 'src', 1], [], o02B, h92B, gg)
            _(hM3B, fY3B)
          }
          var oN3B = _v()
          _(fK3B, oN3B)
          if (_oz(z, 54, o02B, h92B, gg)) {
            oN3B.wxVkey = 1
            var cZ3B = _mz(z, 'image', ['class', 55, 'src', 1], [], o02B, h92B, gg)
            _(oN3B, cZ3B)
          }
          var cO3B = _v()
          _(fK3B, cO3B)
          if (_oz(z, 57, o02B, h92B, gg)) {
            cO3B.wxVkey = 1
            var h13B = _mz(z, 'image', ['class', 58, 'src', 1], [], o02B, h92B, gg)
            _(cO3B, h13B)
          }
          var oP3B = _v()
          _(fK3B, oP3B)
          if (_oz(z, 60, o02B, h92B, gg)) {
            oP3B.wxVkey = 1
            var o23B = _mz(z, 'image', ['class', 61, 'src', 1], [], o02B, h92B, gg)
            _(oP3B, o23B)
          }
          var lQ3B = _v()
          _(fK3B, lQ3B)
          if (_oz(z, 63, o02B, h92B, gg)) {
            lQ3B.wxVkey = 1
            var c33B = _mz(z, 'image', ['class', 64, 'src', 1], [], o02B, h92B, gg)
            _(lQ3B, c33B)
          }
          var aR3B = _v()
          _(fK3B, aR3B)
          if (_oz(z, 66, o02B, h92B, gg)) {
            aR3B.wxVkey = 1
            var o43B = _mz(z, 'image', ['class', 67, 'src', 1], [], o02B, h92B, gg)
            _(aR3B, o43B)
          }
          cL3B.wxXCkey = 1
          hM3B.wxXCkey = 1
          oN3B.wxXCkey = 1
          cO3B.wxXCkey = 1
          oP3B.wxXCkey = 1
          lQ3B.wxXCkey = 1
          aR3B.wxXCkey = 1
          _(lC3B, fK3B)
          _(cA3B, lC3B)
          return cA3B
        }
        f72B.wxXCkey = 2
        _2z(z, 31, c82B, aZ2B, lY2B, gg, f72B, 'items', '__i1__', '')
        _(b32B, o62B)
        _(t12B, b32B)
        return t12B
      }
      cW2B.wxXCkey = 2
      _2z(z, 23, oX2B, e, s, gg, cW2B, 'item', '__i0__', '')
      _(xC2B, oV2B)
      _(r, xC2B)
      return r
    }
    e_[x[0]] = {
      f: m0,
      j: [],
      i: [],
      ti: [],
      ic: []
    }
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02
      return function(env, dd, global) {
        $gwxc = 0;
        var root = {
          "tag": "wx-page"
        };
        root.children = [];
        g = "$gwx2_XC_31";
        var main = e_[path].f
        if (typeof global === "undefined") global = {};
        global.f = $gdc(f_[path], "", 1);
        if (typeof(outerGlobal.__webview_engine_version__) != 'undefined' && outerGlobal.__webview_engine_version__ + 1e-6 >= 0.02 + 1e-6 && outerGlobal.__mergeData__) {
          env = outerGlobal.__mergeData__(env, dd);
        }
        try {
          main(env, {}, root, global);
          _tsd(root)
          if (typeof(outerGlobal.__webview_engine_version__) == 'undefined' || outerGlobal.__webview_engine_version__ + 1e-6 < 0.01 + 1e-6) {
            return _ev(root);
          }
        } catch (err) {
          console.log(err)
        };
        g = "";
        return root;
      }
    }
  }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx2_XC_31();
if (__vd_version_info__.delayedGwx) __wxAppCode__['subPage/pages/myeqcard/records.wxml'] = [$gwx2_XC_31, './subPage/pages/myeqcard/records.wxml'];
else __wxAppCode__['subPage/pages/myeqcard/records.wxml'] = $gwx2_XC_31('./subPage/pages/myeqcard/records.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__['subPage/pages/myeqcard/records.wxss'] = setCssToHead(["body{background:#fafafa}\n.", [1], "records.", [1], "data-v-875c916e{padding:", [0, 20], " ", [0, 40], "}\n.", [1], "records .", [1], "head.", [1], "data-v-875c916e{-webkit-align-items:center;align-items:center;background:#fff2db;border-radius:", [0, 20], ";height:", [0, 200], ";-webkit-justify-content:center;justify-content:center}\n.", [1], "records .", [1], "head .", [1], "item.", [1], "data-v-875c916e{-webkit-flex-direction:column;flex-direction:column;height:", [0, 140], ";-webkit-justify-content:flex-start;justify-content:flex-start;width:", [0, 305], "}\n.", [1], "records .", [1], "head .", [1], "item .", [1], "t.", [1], "data-v-875c916e{color:#555;font-size:", [0, 26], "}\n.", [1], "records .", [1], "head .", [1], "item .", [1], "num.", [1], "data-v-875c916e{color:#333;font-size:", [0, 32], ";margin:", [0, 22], " 0 ", [0, 16], "}\n.", [1], "records .", [1], "head .", [1], "item .", [1], "num .", [1], "unit.", [1], "data-v-875c916e{color:#333;font-size:", [0, 26], "}\n.", [1], "records .", [1], "head .", [1], "item .", [1], "desc.", [1], "data-v-875c916e{color:#999;font-size:", [0, 24], "}\n.", [1], "records .", [1], "mycard.", [1], "data-v-875c916e{margin-top:", [0, 40], ";padding:0 ", [0, 10], "}\n.", [1], "records .", [1], "mycard .", [1], "card.", [1], "data-v-875c916e{margin-bottom:", [0, 70], "}\n.", [1], "records .", [1], "mycard .", [1], "card .", [1], "title.", [1], "data-v-875c916e{border-radius:", [0, 20], " ", [0, 20], " 0 0;color:#444;font-size:", [0, 28], ";height:", [0, 60], ";margin:0 auto;width:", [0, 620], "}\n.", [1], "records .", [1], "mycard .", [1], "card .", [1], "list .", [1], "item.", [1], "data-v-875c916e{height:", [0, 180], ";-webkit-justify-content:space-between;justify-content:space-between;margin:", [0, 10], " 0}\n.", [1], "records .", [1], "mycard .", [1], "card .", [1], "list .", [1], "item .", [1], "info.", [1], "data-v-875c916e{background:#fffbf4;border-radius:", [0, 20], ";-webkit-justify-content:space-between;justify-content:space-between;padding:", [0, 20], ";width:", [0, 476], "}\n.", [1], "records .", [1], "mycard .", [1], "card .", [1], "list .", [1], "item .", [1], "info wx-image.", [1], "data-v-875c916e{border-radius:", [0, 20], ";height:", [0, 140], ";width:", [0, 150], "}\n.", [1], "records .", [1], "mycard .", [1], "card .", [1], "list .", [1], "item .", [1], "info .", [1], "text.", [1], "data-v-875c916e{width:", [0, 274], "}\n.", [1], "records .", [1], "mycard .", [1], "card .", [1], "list .", [1], "item .", [1], "info .", [1], "text .", [1], "name.", [1], "data-v-875c916e{color:#333;font-size:", [0, 26], ";line-height:", [0, 36], "}\n.", [1], "records .", [1], "mycard .", [1], "card .", [1], "list .", [1], "item .", [1], "info .", [1], "text .", [1], "time.", [1], "data-v-875c916e{color:#999;font-size:", [0, 24], ";margin-top:", [0, 14], "}\n.", [1], "records .", [1], "mycard .", [1], "card .", [1], "list .", [1], "item .", [1], "nums.", [1], "data-v-875c916e{background:#fff2db;border-radius:", [0, 20], ";height:", [0, 180], ";overflow:hidden;padding-top:", [0, 15], ";position:relative;width:", [0, 174], "}\n.", [1], "records .", [1], "mycard .", [1], "card .", [1], "list .", [1], "item .", [1], "nums wx-view.", [1], "data-v-875c916e{text-align:center}\n.", [1], "records .", [1], "mycard .", [1], "card .", [1], "list .", [1], "item .", [1], "nums .", [1], "name.", [1], "data-v-875c916e{color:#555;font-size:", [0, 24], "}\n.", [1], "records .", [1], "mycard .", [1], "card .", [1], "list .", [1], "item .", [1], "nums .", [1], "count.", [1], "data-v-875c916e{color:#333;font-size:", [0, 28], ";margin-top:", [0, 10], "}\n.", [1], "records .", [1], "mycard .", [1], "card .", [1], "list .", [1], "item .", [1], "nums .", [1], "eqinfo.", [1], "data-v-875c916e{color:#333;font-size:", [0, 28], ";margin-top:", [0, 20], "}\n.", [1], "records .", [1], "mycard .", [1], "card .", [1], "list .", [1], "item .", [1], "nums wx-image.", [1], "data-v-875c916e{bottom:", [0, -19], ";height:", [0, 100], ";left:", [0, 37], ";position:absolute;width:", [0, 100], "}\n", ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./subPage/pages/myeqcard/records.wxss:1:2357)", {
    path: "./subPage/pages/myeqcard/records.wxss"
  });
}
