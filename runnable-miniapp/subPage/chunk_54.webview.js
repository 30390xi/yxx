$gwx2_XC_50 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx2_XC_50 || [];

    function gz$gwx2_XC_50_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx2_XC_50_1) return __WXML_GLOBAL__.ops_cached.$gwx2_XC_50_1
      __WXML_GLOBAL__.ops_cached.$gwx2_XC_50_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, 'container'])
        Z([3, 'title'])
        Z([3, '西安'])
        Z([3, '攻略'])
        Z([
          [2, '&&'],
          [
            [7],
            [3, 'list']
          ],
          [
            [6],
            [
              [7],
              [3, 'list']
            ],
            [1, 0]
          ]
        ])
        Z([3, 'spotList'])
        Z(z[5])
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
        Z([3, '__e'])
        Z(z[8])
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
                            [1, 'todetail']
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
                                        [1, 'list']
                                      ],
                                      [1, '']
                                    ],
                                    [
                                      [7],
                                      [3, '__i0__']
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
          [2, '=='],
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
            [3, 'isRecommend']
          ],
          [1, 1]
        ])
        Z([3, 'recommond'])
        Z([3, 'https://eshopfile.zhiyousx.com/2021091011022464343.png'])
        Z([3, 'img'])
        Z([3, 'aspectFill'])
        Z([
          [6],
          [
            [7],
            [3, 'item']
          ],
          [3, 'm0']
        ])
        Z([3, 'info'])
        Z([3, 'name singleLineText'])
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
          [3, 'title']
        ]])
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
          [3, 'subtitle']
        ])
        Z([3, 'desc singleLineText'])
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
          [3, 'subtitle']
        ]])
        Z([3, 'noinfo'])
        Z([3, 'noGoods'])
        Z([3, 'widthFix'])
        Z([3, 'https://eshopfile.zhiyousx.com/noGoods@2x.png'])
        Z([3, '没有相关内容'])
      })(__WXML_GLOBAL__.ops_cached.$gwx2_XC_50_1);
      return __WXML_GLOBAL__.ops_cached.$gwx2_XC_50_1
    }
    __WXML_GLOBAL__.ops_set.$gwx2_XC_50 = z;
    __WXML_GLOBAL__.ops_init.$gwx2_XC_50 = true;
    var x = ['./subPage/pages/strategyList/strategyList.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx2_XC_50_1()
      var lY5F = _n('view')
      _rz(z, lY5F, 'class', 0, e, s, gg)
      var t15F = _n('view')
      _rz(z, t15F, 'class', 1, e, s, gg)
      var e25F = _n('text')
      var b35F = _oz(z, 2, e, s, gg)
      _(e25F, b35F)
      _(t15F, e25F)
      var o45F = _n('text')
      var x55F = _oz(z, 3, e, s, gg)
      _(o45F, x55F)
      _(t15F, o45F)
      _(lY5F, t15F)
      var aZ5F = _v()
      _(lY5F, aZ5F)
      if (_oz(z, 4, e, s, gg)) {
        aZ5F.wxVkey = 1
        var o65F = _mz(z, 'view', ['class', 5, 'id', 1], [], e, s, gg)
        var f75F = _v()
        _(o65F, f75F)
        var c85F = function(o05F, h95F, cA6F, gg) {
          var lC6F = _mz(z, 'view', ['bindtap', 10, 'class', 1, 'data-event-opts', 2], [], o05F, h95F, gg)
          var aD6F = _v()
          _(lC6F, aD6F)
          if (_oz(z, 13, o05F, h95F, gg)) {
            aD6F.wxVkey = 1
            var tE6F = _mz(z, 'image', ['class', 14, 'src', 1], [], o05F, h95F, gg)
            _(aD6F, tE6F)
          }
          var eF6F = _mz(z, 'image', ['class', 16, 'mode', 1, 'src', 2], [], o05F, h95F, gg)
          _(lC6F, eF6F)
          var bG6F = _n('view')
          _rz(z, bG6F, 'class', 19, o05F, h95F, gg)
          var xI6F = _n('view')
          _rz(z, xI6F, 'class', 20, o05F, h95F, gg)
          var oJ6F = _oz(z, 21, o05F, h95F, gg)
          _(xI6F, oJ6F)
          _(bG6F, xI6F)
          var oH6F = _v()
          _(bG6F, oH6F)
          if (_oz(z, 22, o05F, h95F, gg)) {
            oH6F.wxVkey = 1
            var fK6F = _n('view')
            _rz(z, fK6F, 'class', 23, o05F, h95F, gg)
            var cL6F = _oz(z, 24, o05F, h95F, gg)
            _(fK6F, cL6F)
            _(oH6F, fK6F)
          }
          oH6F.wxXCkey = 1
          _(lC6F, bG6F)
          aD6F.wxXCkey = 1
          _(cA6F, lC6F)
          return cA6F
        }
        f75F.wxXCkey = 2
        _2z(z, 9, c85F, e, s, gg, f75F, 'item', '__i0__', '')
        _(aZ5F, o65F)
      } else {
        aZ5F.wxVkey = 2
        var hM6F = _n('view')
        _rz(z, hM6F, 'class', 25, e, s, gg)
        var oN6F = _mz(z, 'image', ['class', 26, 'mode', 1, 'src', 2], [], e, s, gg)
        _(hM6F, oN6F)
        var cO6F = _n('view')
        var oP6F = _oz(z, 29, e, s, gg)
        _(cO6F, oP6F)
        _(hM6F, cO6F)
        _(aZ5F, hM6F)
      }
      aZ5F.wxXCkey = 1
      _(r, lY5F)
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
        g = "$gwx2_XC_50";
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
if (__vd_version_info__.delayedGwx || false) $gwx2_XC_50();
if (__vd_version_info__.delayedGwx) __wxAppCode__['subPage/pages/strategyList/strategyList.wxml'] = [$gwx2_XC_50, './subPage/pages/strategyList/strategyList.wxml'];
else __wxAppCode__['subPage/pages/strategyList/strategyList.wxml'] = $gwx2_XC_50('./subPage/pages/strategyList/strategyList.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__['subPage/pages/strategyList/strategyList.wxss'] = setCssToHead(["body{background:#fff;box-sizing:border-box;padding:", [0, 36], " ", [0, 40], "}\n.", [1], "container{background:#fff;min-height:100vh;width:", [0, 670], "}\n.", [1], "container .", [1], "title{margin-bottom:", [0, 40], "}\n.", [1], "container .", [1], "title wx-text{color:#222;font-size:", [0, 36], ";font-weight:700}\n.", [1], "container .", [1], "title wx-text:last-child{color:#ff5411}\n.", [1], "container .", [1], "noinfo .", [1], "noGoods{display:block;margin:", [0, 50], " auto;width:", [0, 300], "}\n.", [1], "container .", [1], "noinfo wx-view{color:#777;text-align:center}\n.", [1], "container .", [1], "spotList{padding:", [0, 0], " ", [0, 0], " ", [0, 30], ";position:relative}\n.", [1], "container .", [1], "spotList .", [1], "item{display:-webkit-flex;display:flex;height:", [0, 180], ";margin-bottom:", [0, 50], ";position:relative}\n.", [1], "container .", [1], "spotList .", [1], "item:last-child{margin-bottom:0}\n.", [1], "container .", [1], "spotList .", [1], "item .", [1], "img{background:#e0e0e0;border-radius:", [0, 20], ";height:", [0, 180], ";width:", [0, 260], "}\n.", [1], "container .", [1], "spotList .", [1], "item .", [1], "recommond{height:", [0, 64], ";left:", [0, 194], ";position:absolute;top:", [0, -20], ";width:", [0, 56], "}\n.", [1], "container .", [1], "spotList .", [1], "item .", [1], "info{padding-left:", [0, 30], ";width:", [0, 410], "}\n.", [1], "container .", [1], "spotList .", [1], "item .", [1], "info .", [1], "name{color:#282828;font-size:", [0, 32], ";line-height:", [0, 46], "}\n.", [1], "container .", [1], "spotList .", [1], "item .", [1], "info .", [1], "rank{background:#ffefd5;border-radius:4px 18px 18px 18px;color:#945430;display:inline-block;font-size:", [0, 22], ";height:", [0, 36], ";line-height:", [0, 36], ";margin-top:", [0, 24], ";max-width:", [0, 410], ";padding:0 ", [0, 16], "}\n.", [1], "container .", [1], "spotList .", [1], "item .", [1], "info .", [1], "desc{color:#959494;font-size:", [0, 24], ";margin-top:", [0, 30], "}\n.", [1], "container .", [1], "spotList .", [1], "item .", [1], "info .", [1], "distance{-webkit-align-items:center;align-items:center;color:#959494;display:-webkit-flex;display:flex;font-size:", [0, 24], ";margin-top:", [0, 26], "}\n.", [1], "container .", [1], "spotList .", [1], "item .", [1], "info .", [1], "distance wx-image{height:", [0, 21], ";margin-right:", [0, 8], ";width:", [0, 18], "}\n", ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./subPage/pages/strategyList/strategyList.wxss:1:1505)", {
    path: "./subPage/pages/strategyList/strategyList.wxss"
  });
}
