$gwx2_XC_39 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx2_XC_39 || [];

    function gz$gwx2_XC_39_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx2_XC_39_1) return __WXML_GLOBAL__.ops_cached.$gwx2_XC_39_1
      __WXML_GLOBAL__.ops_cached.$gwx2_XC_39_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, 'u-wrap data-v-027fdb71'])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [1, 'padding-top:'],
            [
              [2, '+'],
              [
                [2, '+'],
                [
                  [7],
                  [3, 'statusBarHeight']
                ],
                [1, 12]
              ],
              [1, 'px']
            ]
          ],
          [1, ';']
        ])
        Z([3, 'maskTop data-v-027fdb71'])
        Z([3, 'num data-v-027fdb71'])
        Z([a, [
          [2, '+'],
          [
            [2, '+'],
            [
              [2, '+'],
              [
                [2, '+'],
                [1, ''],
                [
                  [7],
                  [3, 'swiperCurrent']
                ]
              ],
              [1, ' / ']
            ],
            [
              [7],
              [3, 'swiperLenght']
            ]
          ],
          [1, '']
        ]])
        Z([3, '__e'])
        Z([3, 'swiper data-v-027fdb71'])
        Z([
          [7],
          [3, 'currentSwiper']
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
                  [1, 'change']
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
                          [1, 'swiperChange']
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
          [3, 'duration']
        ])
        Z([3, 'index'])
        Z([3, 'item'])
        Z([
          [7],
          [3, 'dataList']
        ])
        Z(z[10])
        Z([3, 'data-v-027fdb71'])
        Z([
          [2, '=='],
          [
            [6],
            [
              [7],
              [3, 'item']
            ],
            [3, 'resourcesType']
          ],
          [1, 1]
        ])
        Z([3, 'swiper-item data-v-027fdb71'])
        Z(z[14])
        Z([3, 'widthFix'])
        Z([
          [6],
          [
            [7],
            [3, 'item']
          ],
          [3, 'resourcesUrl']
        ])
        Z([
          [2, '=='],
          [
            [7],
            [3, 'swiperCurrent']
          ],
          [
            [2, '+'],
            [
              [7],
              [3, 'index']
            ],
            [1, 1]
          ]
        ])
        Z(z[16])
        Z([1, true])
        Z([3, 'swiper-item data-v-027fdb71 vue-ref-in-for'])
        Z(z[22])
        Z([3, 'video'])
        Z(z[19])
      })(__WXML_GLOBAL__.ops_cached.$gwx2_XC_39_1);
      return __WXML_GLOBAL__.ops_cached.$gwx2_XC_39_1
    }
    __WXML_GLOBAL__.ops_set.$gwx2_XC_39 = z;
    __WXML_GLOBAL__.ops_init.$gwx2_XC_39 = true;
    var x = ['./subPage/pages/preview/preview.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx2_XC_39_1()
      var lM5D = _mz(z, 'view', ['class', 0, 'style', 1], [], e, s, gg)
      var aN5D = _n('view')
      _rz(z, aN5D, 'class', 2, e, s, gg)
      var tO5D = _n('view')
      _rz(z, tO5D, 'class', 3, e, s, gg)
      var eP5D = _oz(z, 4, e, s, gg)
      _(tO5D, eP5D)
      _(aN5D, tO5D)
      _(lM5D, aN5D)
      var bQ5D = _mz(z, 'swiper', ['bindchange', 5, 'class', 1, 'current', 2, 'data-event-opts', 3, 'duration', 4], [], e, s, gg)
      var oR5D = _v()
      _(bQ5D, oR5D)
      var xS5D = function(fU5D, oT5D, cV5D, gg) {
        var oX5D = _n('swiper-item')
        _rz(z, oX5D, 'class', 14, fU5D, oT5D, gg)
        var cY5D = _v()
        _(oX5D, cY5D)
        if (_oz(z, 15, fU5D, oT5D, gg)) {
          cY5D.wxVkey = 1
          var l15D = _n('view')
          _rz(z, l15D, 'class', 16, fU5D, oT5D, gg)
          var a25D = _mz(z, 'image', ['class', 17, 'mode', 1, 'src', 2], [], fU5D, oT5D, gg)
          _(l15D, a25D)
          _(cY5D, l15D)
        }
        var oZ5D = _v()
        _(oX5D, oZ5D)
        if (_oz(z, 20, fU5D, oT5D, gg)) {
          oZ5D.wxVkey = 1
          var t35D = _n('view')
          _rz(z, t35D, 'class', 21, fU5D, oT5D, gg)
          var e45D = _mz(z, 'video', ['autoplay', 22, 'class', 1, 'controls', 2, 'data-ref', 3, 'src', 4], [], fU5D, oT5D, gg)
          _(t35D, e45D)
          _(oZ5D, t35D)
        }
        cY5D.wxXCkey = 1
        oZ5D.wxXCkey = 1
        _(cV5D, oX5D)
        return cV5D
      }
      oR5D.wxXCkey = 2
      _2z(z, 12, xS5D, e, s, gg, oR5D, 'item', 'index', 'index')
      _(lM5D, bQ5D)
      _(r, lM5D)
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
        g = "$gwx2_XC_39";
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
if (__vd_version_info__.delayedGwx || false) $gwx2_XC_39();
if (__vd_version_info__.delayedGwx) __wxAppCode__['subPage/pages/preview/preview.wxml'] = [$gwx2_XC_39, './subPage/pages/preview/preview.wxml'];
else __wxAppCode__['subPage/pages/preview/preview.wxml'] = $gwx2_XC_39('./subPage/pages/preview/preview.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__['subPage/pages/preview/preview.wxss'] = setCssToHead([".", [1], "u-wrap.", [1], "data-v-027fdb71{background:#000;height:100vh}\n.", [1], "maskTop.", [1], "data-v-027fdb71{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;-webkit-justify-content:center;justify-content:center}\n.", [1], "maskTop .", [1], "num.", [1], "data-v-027fdb71{color:#fff;font-family:Source Han Sans SC;font-size:", [0, 32], ";font-weight:400;opacity:.7;position:relative;z-index:50}\n.", [1], "swiper.", [1], "data-v-027fdb71{height:81vh;left:50%;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:100%;z-index:40}\n.", [1], "swiper .", [1], "swiper-item.", [1], "data-v-027fdb71{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;height:100%;-webkit-justify-content:center;justify-content:center;width:100%}\n.", [1], "swiper .", [1], "swiper-item wx-image.", [1], "data-v-027fdb71{width:100%}\n.", [1], "swiper .", [1], "swiper-item wx-video.", [1], "data-v-027fdb71{height:100%;width:100%}\n.", [1], "image-box.", [1], "data-v-027fdb71{display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:", [0, 140], " ", [0, 40], " ", [0, 90], ";z-index:19}\n.", [1], "image-box .", [1], "item-box.", [1], "data-v-027fdb71{border-radius:", [0, 20], ";display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;height:", [0, 326], ";margin-bottom:", [0, 18], ";margin-left:", [0, 18], ";position:relative;width:", [0, 326], "}\n.", [1], "image-box .", [1], "item-box .", [1], "cover.", [1], "data-v-027fdb71{border-radius:", [0, 20], ";-webkit-flex:1;flex:1;height:100%;width:100%}\n.", [1], "image-box .", [1], "item-box .", [1], "mask.", [1], "data-v-027fdb71{background-color:rgba(0,0,0,.3);border-radius:", [0, 20], ";height:100%;position:absolute;top:0;width:100%}\n.", [1], "image-box .", [1], "item-box .", [1], "mask .", [1], "icon.", [1], "data-v-027fdb71{height:", [0, 80], ";left:50%;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:", [0, 80], "}\n.", [1], "image-box .", [1], "item-box.", [1], "data-v-027fdb71:nth-child(odd){margin-left:0}\n", ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./subPage/pages/preview/preview.wxss:1:841)", {
    path: "./subPage/pages/preview/preview.wxss"
  });
}
