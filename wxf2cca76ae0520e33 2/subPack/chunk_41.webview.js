$gwx1_XC_36 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx1_XC_36 || [];

    function gz$gwx1_XC_36_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx1_XC_36_1) return __WXML_GLOBAL__.ops_cached.$gwx1_XC_36_1
      __WXML_GLOBAL__.ops_cached.$gwx1_XC_36_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, 'page-box data-v-6e843c86'])
        Z([
          [7],
          [3, 'content']
        ])
        Z([3, '__l'])
        Z([3, 'data-v-6e843c86 vue-ref'])
        Z([3, 'protocol'])
        Z(z[1])
        Z([1, true])
        Z([
          [7],
          [3, 'parseStyle']
        ])
        Z([3, 'e93f8fd4-1'])
      })(__WXML_GLOBAL__.ops_cached.$gwx1_XC_36_1);
      return __WXML_GLOBAL__.ops_cached.$gwx1_XC_36_1
    }
    __WXML_GLOBAL__.ops_set.$gwx1_XC_36 = z;
    __WXML_GLOBAL__.ops_init.$gwx1_XC_36 = true;
    var x = ['./subPack/pages/protocol/protocol.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx1_XC_36_1()
      var hGED = _n('view')
      _rz(z, hGED, 'class', 0, e, s, gg)
      var oHED = _v()
      _(hGED, oHED)
      if (_oz(z, 1, e, s, gg)) {
        oHED.wxVkey = 1
        var cIED = _mz(z, 'u-parse', ['bind:__l', 2, 'class', 1, 'data-ref', 2, 'html', 3, 'lazyLoad', 4, 'tagStyle', 5, 'vueId', 6], [], e, s, gg)
        _(oHED, cIED)
      }
      oHED.wxXCkey = 1
      oHED.wxXCkey = 3
      _(r, hGED)
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
        g = "$gwx1_XC_36";
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
if (__vd_version_info__.delayedGwx || false) $gwx1_XC_36();
if (__vd_version_info__.delayedGwx) __wxAppCode__['subPack/pages/protocol/protocol.wxml'] = [$gwx1_XC_36, './subPack/pages/protocol/protocol.wxml'];
else __wxAppCode__['subPack/pages/protocol/protocol.wxml'] = $gwx1_XC_36('./subPack/pages/protocol/protocol.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__['subPack/pages/protocol/protocol.wxss'] = setCssToHead([".", [1], "page-box.", [1], "data-v-6e843c86{padding:", [0, 20], "}\n", ], undefined, {
    path: "./subPack/pages/protocol/protocol.wxss"
  });
}
