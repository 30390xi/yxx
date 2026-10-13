$gwx2_XC_10 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx2_XC_10 || [];

    function gz$gwx2_XC_10_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx2_XC_10_1) return __WXML_GLOBAL__.ops_cached.$gwx2_XC_10_1
      __WXML_GLOBAL__.ops_cached.$gwx2_XC_10_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, 'page-box data-v-38225f58'])
        Z([3, '__e'])
        Z([3, 'row-box bet data-v-38225f58'])
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
                          [1, 'e0']
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
        Z([3, 'label data-v-38225f58'])
        Z([3, '证件类型'])
        Z([3, 'select data-v-38225f58'])
        Z([a, [
          [2, '+'],
          [
            [2, '+'],
            [1, ''],
            [
              [6],
              [
                [7],
                [3, '$root']
              ],
              [3, 'f0']
            ]
          ],
          [1, '']
        ]])
        Z([3, '__l'])
        Z([3, 'data-v-38225f58'])
        Z([3, '#333333'])
        Z([3, 'arrow-right'])
        Z([3, '20'])
        Z([3, 'margin-left:10rpx;'])
        Z([3, '516a0804-1'])
        Z([
          [2, '=='],
          [
            [7],
            [3, 'realCardType']
          ],
          [1, 0]
        ])
        Z(z[8])
        Z(z[9])
        Z([3, '516a0804-2'])
        Z([
          [4],
          [
            [5],
            [1, 'content']
          ]
        ])
        Z([3, 'row-box data-v-38225f58'])
        Z([3, 'content'])
        Z(z[4])
        Z([3, '姓名'])
        Z([3, 'value data-v-38225f58'])
        Z(z[8])
        Z(z[1])
        Z([
          [7],
          [3, 'border']
        ])
        Z(z[9])
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
                  [1, '^input']
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
                          [1, '__set_model']
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
                                  [1, '']
                                ],
                                [1, 'name']
                              ],
                              [1, '$event']
                            ],
                            [
                              [4],
                              [
                                [5]
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
        Z([3, '请填写'])
        Z([3, 'text'])
        Z([
          [7],
          [3, 'name']
        ])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [1, '516a0804-3'],
            [1, ',']
          ],
          [1, '516a0804-2']
        ])
        Z(z[20])
        Z(z[4])
        Z(z[23])
        Z(z[24])
        Z(z[8])
        Z(z[1])
        Z(z[27])
        Z(z[9])
        Z(z[29])
        Z([
          [2, '?:'],
          [
            [2, '=='],
            [
              [7],
              [3, 'realCardType']
            ],
            [1, 1]
          ],
          [1, '请按Surname/Given name格式填写'],
          [1, '请填写']
        ])
        Z(z[31])
        Z(z[32])
        Z([3, '516a0804-4'])
        Z(z[20])
        Z(z[4])
        Z([3, '证件号码'])
        Z([
          [4],
          [
            [5],
            [
              [5],
              [
                [5],
                [1, 'value']
              ],
              [1, 'data-v-38225f58']
            ],
            [
              [2, '?:'],
              [
                [2, '=='],
                [
                  [7],
                  [3, 'realCardType']
                ],
                [1, 0]
              ],
              [1, 'w390'],
              [1, '']
            ]
          ]
        ])
        Z(z[8])
        Z(z[1])
        Z(z[27])
        Z(z[9])
        Z([
          [8], 'width', [1, '80%']
        ])
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
                  [1, '^input']
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
                          [1, '__set_model']
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
                                  [1, '']
                                ],
                                [1, 'idCarNo']
                              ],
                              [1, '$event']
                            ],
                            [
                              [4],
                              [
                                [5]
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
        Z(z[30])
        Z(z[31])
        Z([
          [7],
          [3, 'idCarNo']
        ])
        Z([3, '516a0804-5'])
        Z(z[20])
        Z(z[4])
        Z([3, '手机号'])
        Z(z[24])
        Z(z[8])
        Z(z[1])
        Z(z[27])
        Z(z[9])
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
                  [1, '^input']
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
                          [1, '__set_model']
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
                                  [1, '']
                                ],
                                [1, 'phone']
                              ],
                              [1, '$event']
                            ],
                            [
                              [4],
                              [
                                [5]
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
        Z(z[30])
        Z(z[31])
        Z([
          [7],
          [3, 'phone']
        ])
        Z([3, '516a0804-6'])
        Z(z[1])
        Z([3, 'auth data-v-38225f58'])
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
                          [1, 'setCheck']
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
          [2, '!'],
          [
            [7],
            [3, 'checked']
          ]
        ])
        Z([3, 'checkedNo data-v-38225f58'])
        Z([3, 'widthFix'])
        Z([3, 'https://eshopfile.zhiyousx.com/2026020617533436720.png'])
        Z(z[78])
        Z(z[79])
        Z([3, 'https://eshopfile.zhiyousx.com/2026020617533186277.png'])
        Z([3, 'text data-v-38225f58'])
        Z([3, 'margin-left:5rpx;'])
        Z([3, '我已阅读并同意授权以上信息用于产品预订及相关信息通知'])
        Z(z[1])
        Z([3, 'footer-box data-v-38225f58'])
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
                          [1, 'editPassenger']
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
        Z([3, '确认'])
        Z(z[8])
        Z(z[1])
        Z(z[1])
        Z(z[9])
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
                    [1, '^chooseCardType']
                  ],
                  [
                    [4],
                    [
                      [5],
                      [
                        [4],
                        [
                          [5],
                          [1, 'chooseCardType']
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
                  [1, '^closePop']
                ],
                [
                  [4],
                  [
                    [5],
                    [
                      [4],
                      [
                        [5],
                        [1, 'e1']
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
          [3, 'realCardType']
        ])
        Z([
          [7],
          [3, 'realCardTypeCodes']
        ])
        Z([
          [7],
          [3, 'showCardPop']
        ])
        Z([3, '516a0804-7'])
      })(__WXML_GLOBAL__.ops_cached.$gwx2_XC_10_1);
      return __WXML_GLOBAL__.ops_cached.$gwx2_XC_10_1
    }
    __WXML_GLOBAL__.ops_set.$gwx2_XC_10 = z;
    __WXML_GLOBAL__.ops_init.$gwx2_XC_10 = true;
    var x = ['./subPage/pages/editPassenger/editPassenger.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx2_XC_10_1()
      var aVZ = _n('view')
      _rz(z, aVZ, 'class', 0, e, s, gg)
      var eXZ = _mz(z, 'view', ['bindtap', 1, 'class', 1, 'data-event-opts', 2], [], e, s, gg)
      var bYZ = _n('view')
      _rz(z, bYZ, 'class', 4, e, s, gg)
      var oZZ = _oz(z, 5, e, s, gg)
      _(bYZ, oZZ)
      _(eXZ, bYZ)
      var x1Z = _n('view')
      _rz(z, x1Z, 'class', 6, e, s, gg)
      var o2Z = _oz(z, 7, e, s, gg)
      _(x1Z, o2Z)
      var f3Z = _mz(z, 'u-icon', ['bind:__l', 8, 'class', 1, 'color', 2, 'name', 3, 'size', 4, 'style', 5, 'vueId', 6], [], e, s, gg)
      _(x1Z, f3Z)
      _(eXZ, x1Z)
      _(aVZ, eXZ)
      var tWZ = _v()
      _(aVZ, tWZ)
      if (_oz(z, 15, e, s, gg)) {
        tWZ.wxVkey = 1
        var c4Z = _mz(z, 'ocr-index', ['bind:__l', 16, 'class', 1, 'vueId', 2, 'vueSlots', 3], [], e, s, gg)
        var h5Z = _mz(z, 'view', ['class', 20, 'slot', 1], [], e, s, gg)
        var o6Z = _n('view')
        _rz(z, o6Z, 'class', 22, e, s, gg)
        var c7Z = _oz(z, 23, e, s, gg)
        _(o6Z, c7Z)
        _(h5Z, o6Z)
        var o8Z = _n('view')
        _rz(z, o8Z, 'class', 24, e, s, gg)
        var l9Z = _mz(z, 'u-input', ['bind:__l', 25, 'bind:input', 1, 'border', 2, 'class', 3, 'data-event-opts', 4, 'placeholder', 5, 'type', 6, 'value', 7, 'vueId', 8], [], e, s, gg)
        _(o8Z, l9Z)
        _(h5Z, o8Z)
        _(c4Z, h5Z)
        _(tWZ, c4Z)
      } else {
        tWZ.wxVkey = 2
        var a0Z = _n('view')
        _rz(z, a0Z, 'class', 34, e, s, gg)
        var tA1 = _n('view')
        _rz(z, tA1, 'class', 35, e, s, gg)
        var eB1 = _oz(z, 36, e, s, gg)
        _(tA1, eB1)
        _(a0Z, tA1)
        var bC1 = _n('view')
        _rz(z, bC1, 'class', 37, e, s, gg)
        var oD1 = _mz(z, 'u-input', ['bind:__l', 38, 'bind:input', 1, 'border', 2, 'class', 3, 'data-event-opts', 4, 'placeholder', 5, 'type', 6, 'value', 7, 'vueId', 8], [], e, s, gg)
        _(bC1, oD1)
        _(a0Z, bC1)
        _(tWZ, a0Z)
      }
      var xE1 = _n('view')
      _rz(z, xE1, 'class', 47, e, s, gg)
      var oF1 = _n('view')
      _rz(z, oF1, 'class', 48, e, s, gg)
      var fG1 = _oz(z, 49, e, s, gg)
      _(oF1, fG1)
      _(xE1, oF1)
      var cH1 = _n('view')
      _rz(z, cH1, 'class', 50, e, s, gg)
      var hI1 = _mz(z, 'u-input', ['bind:__l', 51, 'bind:input', 1, 'border', 2, 'class', 3, 'customStyle', 4, 'data-event-opts', 5, 'placeholder', 6, 'type', 7, 'value', 8, 'vueId', 9], [], e, s, gg)
      _(cH1, hI1)
      _(xE1, cH1)
      _(aVZ, xE1)
      var oJ1 = _n('view')
      _rz(z, oJ1, 'class', 61, e, s, gg)
      var cK1 = _n('view')
      _rz(z, cK1, 'class', 62, e, s, gg)
      var oL1 = _oz(z, 63, e, s, gg)
      _(cK1, oL1)
      _(oJ1, cK1)
      var lM1 = _n('view')
      _rz(z, lM1, 'class', 64, e, s, gg)
      var aN1 = _mz(z, 'u-input', ['bind:__l', 65, 'bind:input', 1, 'border', 2, 'class', 3, 'data-event-opts', 4, 'placeholder', 5, 'type', 6, 'value', 7, 'vueId', 8], [], e, s, gg)
      _(lM1, aN1)
      _(oJ1, lM1)
      _(aVZ, oJ1)
      var tO1 = _mz(z, 'view', ['bindtap', 74, 'class', 1, 'data-event-opts', 2], [], e, s, gg)
      var eP1 = _v()
      _(tO1, eP1)
      if (_oz(z, 77, e, s, gg)) {
        eP1.wxVkey = 1
        var bQ1 = _mz(z, 'image', ['class', 78, 'mode', 1, 'src', 2], [], e, s, gg)
        _(eP1, bQ1)
      } else {
        eP1.wxVkey = 2
        var oR1 = _mz(z, 'image', ['class', 81, 'mode', 1, 'src', 2], [], e, s, gg)
        _(eP1, oR1)
      }
      var xS1 = _mz(z, 'view', ['class', 84, 'style', 1], [], e, s, gg)
      var oT1 = _oz(z, 86, e, s, gg)
      _(xS1, oT1)
      _(tO1, xS1)
      eP1.wxXCkey = 1
      _(aVZ, tO1)
      var fU1 = _mz(z, 'view', ['bindtap', 87, 'class', 1, 'data-event-opts', 2], [], e, s, gg)
      var cV1 = _oz(z, 90, e, s, gg)
      _(fU1, cV1)
      _(aVZ, fU1)
      var hW1 = _mz(z, 'card-type', ['bind:__l', 91, 'bind:chooseCardType', 1, 'bind:closePop', 2, 'class', 3, 'data-event-opts', 4, 'realCardType', 5, 'realCardTypeCodes', 6, 'showCardPop', 7, 'vueId', 8], [], e, s, gg)
      _(aVZ, hW1)
      tWZ.wxXCkey = 1
      tWZ.wxXCkey = 3
      tWZ.wxXCkey = 3
      _(r, aVZ)
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
        g = "$gwx2_XC_10";
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
if (__vd_version_info__.delayedGwx || false) $gwx2_XC_10();
if (__vd_version_info__.delayedGwx) __wxAppCode__['subPage/pages/editPassenger/editPassenger.wxml'] = [$gwx2_XC_10, './subPage/pages/editPassenger/editPassenger.wxml'];
else __wxAppCode__['subPage/pages/editPassenger/editPassenger.wxml'] = $gwx2_XC_10('./subPage/pages/editPassenger/editPassenger.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__['subPage/pages/editPassenger/editPassenger.wxss'] = setCssToHead([".", [1], "page-box.", [1], "data-v-38225f58{background:#fff;font-family:Source Han Sans CN-Regular,Source Han Sans CN;font-weight:400;min-height:100vh;padding:0 ", [0, 40], "}\n.", [1], "page-box .", [1], "row-box.", [1], "data-v-38225f58{-webkit-align-items:center;align-items:center;border-bottom:1px solid #eee;display:-webkit-flex;display:flex;font-size:", [0, 30], ";height:", [0, 105], ";line-height:", [0, 45], ";width:100%}\n.", [1], "page-box .", [1], "row-box .", [1], "label.", [1], "data-v-38225f58{color:#333;min-width:", [0, 158], ";width:", [0, 158], "}\n.", [1], "page-box .", [1], "row-box .", [1], "value.", [1], "data-v-38225f58{color:#333;width:", [0, 500], "}\n.", [1], "page-box .", [1], "row-box .", [1], "select.", [1], "data-v-38225f58{-webkit-align-items:center;align-items:center;color:#333;display:-webkit-flex;display:flex}\n.", [1], "page-box .", [1], "bet.", [1], "data-v-38225f58{-webkit-justify-content:space-between;justify-content:space-between}\n.", [1], "page-box .", [1], "auth.", [1], "data-v-38225f58{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;height:", [0, 45], ";margin-left:", [0, -6], ";margin-top:", [0, 40], "}\n.", [1], "page-box .", [1], "auth .", [1], "checkedNo.", [1], "data-v-38225f58{height:", [0, 40], ";width:", [0, 40], "}\n.", [1], "page-box .", [1], "auth .", [1], "text.", [1], "data-v-38225f58{color:#828282;font-size:", [0, 24], "}\n.", [1], "page-box .", [1], "footer-box.", [1], "data-v-38225f58{background:linear-gradient(253deg,#fc4a9b,#ff5413);border-radius:", [0, 50], ";bottom:", [0, 40], ";color:#fff;font-size:", [0, 26], ";height:", [0, 80], ";left:", [0, 40], ";line-height:", [0, 80], ";position:fixed;text-align:center;width:", [0, 670], "}\n.", [1], "certificate.", [1], "data-v-38225f58{background:#fff;min-height:", [0, 200], ";padding:", [0, 40], ";width:", [0, 750], "}\n.", [1], "certificate .", [1], "name.", [1], "data-v-38225f58{color:#333;font-size:", [0, 32], ";line-height:", [0, 48], ";margin-bottom:", [0, 60], "}\n.", [1], "certificate .", [1], "certificate-box .", [1], "certificate-item.", [1], "data-v-38225f58{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;height:", [0, 44], ";-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:", [0, 50], ";width:100%}\n.", [1], "certificate .", [1], "certificate-box .", [1], "certificate-item .", [1], "t.", [1], "data-v-38225f58{color:#333;font-size:", [0, 28], "}\n.", [1], "certificate .", [1], "certificate-box .", [1], "certificate-item .", [1], "icon.", [1], "data-v-38225f58{height:", [0, 44], ";width:", [0, 44], "}\n", ], undefined, {
    path: "./subPage/pages/editPassenger/editPassenger.wxss"
  });
}
