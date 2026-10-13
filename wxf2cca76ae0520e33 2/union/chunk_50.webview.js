$gwx4_XC_46 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx4_XC_46 || [];

    function gz$gwx4_XC_46_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx4_XC_46_1) return __WXML_GLOBAL__.ops_cached.$gwx4_XC_46_1
      __WXML_GLOBAL__.ops_cached.$gwx4_XC_46_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, 'menu-box data-v-27bb0ddc'])
        Z([3, '__l'])
        Z([3, 'data-v-27bb0ddc'])
        Z([3, 'transparentFixed'])
        Z([3, '3bedf94b-1'])
        Z([3, '__e'])
        Z([3, 'greatWall-btn data-v-27bb0ddc'])
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
                          [1, 'toGreatWall']
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
        Z(z[5])
        Z([3, 'fuRong-btn data-v-27bb0ddc'])
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
                          [1, 'toFuRong']
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
      })(__WXML_GLOBAL__.ops_cached.$gwx4_XC_46_1);
      return __WXML_GLOBAL__.ops_cached.$gwx4_XC_46_1
    }
    __WXML_GLOBAL__.ops_set.$gwx4_XC_46 = z;
    __WXML_GLOBAL__.ops_init.$gwx4_XC_46 = true;
    var x = ['./union/pages/menu/index.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx4_XC_46_1()
      var cFLD = _n('view')
      _rz(z, cFLD, 'class', 0, e, s, gg)
      var hGLD = _mz(z, 'uni-navbar', ['bind:__l', 1, 'class', 1, 'type', 2, 'vueId', 3], [], e, s, gg)
      _(cFLD, hGLD)
      var oHLD = _mz(z, 'view', ['bindtap', 5, 'class', 1, 'data-event-opts', 2], [], e, s, gg)
      _(cFLD, oHLD)
      var cILD = _mz(z, 'view', ['bindtap', 8, 'class', 1, 'data-event-opts', 2], [], e, s, gg)
      _(cFLD, cILD)
      _(r, cFLD)
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
        g = "$gwx4_XC_46";
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
if (__vd_version_info__.delayedGwx || false) $gwx4_XC_46();
if (__vd_version_info__.delayedGwx) __wxAppCode__['union/pages/menu/index.wxml'] = [$gwx4_XC_46, './union/pages/menu/index.wxml'];
else __wxAppCode__['union/pages/menu/index.wxml'] = $gwx4_XC_46('./union/pages/menu/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__['union/pages/menu/index.wxss'] = setCssToHead([".", [1], "menu-box.", [1], "data-v-27bb0ddc{-webkit-align-items:center;align-items:center;background:url(https://eshopfile.zhiyousx.com/176965651410142714.png) no-repeat 50%;background-size:100% 100%;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;height:100vh;-webkit-justify-content:center;justify-content:center;width:100vw}\n.", [1], "menu-box .", [1], "greatWall-btn.", [1], "data-v-27bb0ddc{background:url(https://eshopfile.zhiyousx.com/176966926777040235.png) no-repeat 50%;background-size:100% 100%;height:", [0, 240], ";margin-bottom:", [0, 140], ";width:", [0, 690], "}\n.", [1], "menu-box .", [1], "fuRong-btn.", [1], "data-v-27bb0ddc{background:url(https://eshopfile.zhiyousx.com/176966935590157080.png) no-repeat 50%;background-size:100% 100%;height:", [0, 240], ";width:", [0, 690], "}\n", ], undefined, {
    path: "./union/pages/menu/index.wxss"
  });
}
