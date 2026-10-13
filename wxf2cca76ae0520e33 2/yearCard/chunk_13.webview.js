$gwx0_XC_4 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx0_XC_4 || [];

    function gz$gwx0_XC_4_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx0_XC_4_1) return __WXML_GLOBAL__.ops_cached.$gwx0_XC_4_1
      __WXML_GLOBAL__.ops_cached.$gwx0_XC_4_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, 'page-box data-v-3ba31784'])
        Z([3, '__l'])
        Z([3, 'data-v-3ba31784'])
        Z([1, false])
        Z([3, '#ffffff'])
        Z([3, 'transparentFixed'])
        Z([3, '06cc8f70-1'])
        Z([
          [4],
          [
            [5],
            [1, 'transparentFixedLeft']
          ]
        ])
        Z(z[2])
        Z([3, 'transparentFixedLeft'])
        Z([3, '__e'])
        Z([3, 'home-btn data-v-3ba31784'])
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
                          [1, 'pageBack']
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
        Z([3, 'home-icon data-v-3ba31784'])
        Z([3, 'https://eshopfile.zhiyousx.com/2026012116272257896.png'])
        Z([3, 'actImg data-v-3ba31784'])
        Z([3, 'widthFix'])
        Z([3, 'https://eshopfile.zhiyousx.com/2026011516590113392.jpg'])
      })(__WXML_GLOBAL__.ops_cached.$gwx0_XC_4_1);
      return __WXML_GLOBAL__.ops_cached.$gwx0_XC_4_1
    }
    __WXML_GLOBAL__.ops_set.$gwx0_XC_4 = z;
    __WXML_GLOBAL__.ops_init.$gwx0_XC_4 = true;
    var x = ['./yearCard/pages/nfcVideo/dnfAct.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx0_XC_4_1()
      var x3J = _n('view')
      _rz(z, x3J, 'class', 0, e, s, gg)
      var o4J = _mz(z, 'uni-navbar', ['bind:__l', 1, 'class', 1, 'titleCenter', 2, 'transparentFixedFontColor', 3, 'type', 4, 'vueId', 5, 'vueSlots', 6], [], e, s, gg)
      var f5J = _mz(z, 'view', ['class', 8, 'slot', 1], [], e, s, gg)
      var c6J = _mz(z, 'view', ['bindtap', 10, 'class', 1, 'data-event-opts', 2], [], e, s, gg)
      var h7J = _mz(z, 'image', ['class', 13, 'src', 1], [], e, s, gg)
      _(c6J, h7J)
      _(f5J, c6J)
      _(o4J, f5J)
      _(x3J, o4J)
      var o8J = _mz(z, 'image', ['class', 15, 'mode', 1, 'src', 2], [], e, s, gg)
      _(x3J, o8J)
      _(r, x3J)
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
        g = "$gwx0_XC_4";
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
if (__vd_version_info__.delayedGwx || false) $gwx0_XC_4();
if (__vd_version_info__.delayedGwx) __wxAppCode__['yearCard/pages/nfcVideo/dnfAct.wxml'] = [$gwx0_XC_4, './yearCard/pages/nfcVideo/dnfAct.wxml'];
else __wxAppCode__['yearCard/pages/nfcVideo/dnfAct.wxml'] = $gwx0_XC_4('./yearCard/pages/nfcVideo/dnfAct.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__['yearCard/pages/nfcVideo/dnfAct.wxss'] = setCssToHead([".", [1], "page-box.", [1], "data-v-3ba31784{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;position:relative;width:100%}\n.", [1], "page-box .", [1], "actImg.", [1], "data-v-3ba31784{height:auto;width:", [0, 750], "}\n.", [1], "home-btn.", [1], "data-v-3ba31784{-webkit-align-items:center;align-items:center;background:hsla(0,0%,100%,.7);border-radius:50%;box-shadow:", [0, 0], " ", [0, 4], " ", [0, 12], " ", [0, 0], " rgba(0,0,0,.1);display:-webkit-flex;display:flex;height:", [0, 56], ";-webkit-justify-content:center;justify-content:center;margin-left:", [0, 20], ";width:", [0, 56], "}\n.", [1], "home-icon.", [1], "data-v-3ba31784{height:", [0, 40], ";width:", [0, 40], "}\n", ], undefined, {
    path: "./yearCard/pages/nfcVideo/dnfAct.wxss"
  });
}
