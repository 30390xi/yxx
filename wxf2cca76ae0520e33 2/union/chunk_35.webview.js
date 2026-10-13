$gwx4_XC_29 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx4_XC_29 || [];

    function gz$gwx4_XC_29_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx4_XC_29_1) return __WXML_GLOBAL__.ops_cached.$gwx4_XC_29_1
      __WXML_GLOBAL__.ops_cached.$gwx4_XC_29_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, 'loading-box _div data-v-1c05b709'])
        Z([3, 'custom-loading _div data-v-1c05b709'])
        Z([3, 'loading-circle _div data-v-1c05b709'])
      })(__WXML_GLOBAL__.ops_cached.$gwx4_XC_29_1);
      return __WXML_GLOBAL__.ops_cached.$gwx4_XC_29_1
    }
    __WXML_GLOBAL__.ops_set.$gwx4_XC_29 = z;
    __WXML_GLOBAL__.ops_init.$gwx4_XC_29 = true;
    var x = ['./union/pages/aiVideo/component/loading.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx4_XC_29_1()
      var e6PC = _n('view')
      _rz(z, e6PC, 'class', 0, e, s, gg)
      var b7PC = _n('view')
      _rz(z, b7PC, 'class', 1, e, s, gg)
      var o8PC = _n('view')
      _rz(z, o8PC, 'class', 2, e, s, gg)
      _(b7PC, o8PC)
      _(e6PC, b7PC)
      _(r, e6PC)
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
        g = "$gwx4_XC_29";
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
if (__vd_version_info__.delayedGwx || false) $gwx4_XC_29();
if (__vd_version_info__.delayedGwx) __wxAppCode__['union/pages/aiVideo/component/loading.wxml'] = [$gwx4_XC_29, './union/pages/aiVideo/component/loading.wxml'];
else __wxAppCode__['union/pages/aiVideo/component/loading.wxml'] = $gwx4_XC_29('./union/pages/aiVideo/component/loading.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__['union/pages/aiVideo/component/loading.wxss'] = setCssToHead([".", [1], "loading-box.", [1], "data-v-1c05b709{border-radius:12px;height:100%;left:0;position:absolute;top:0;width:100%;z-index:11}\n.", [1], "loading-box .", [1], "custom-loading.", [1], "data-v-1c05b709{left:50%;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:11}\n.", [1], "loading-box .", [1], "custom-loading .", [1], "loading-circle.", [1], "data-v-1c05b709{-webkit-animation:spin-data-v-1c05b709 1s linear infinite;animation:spin-data-v-1c05b709 1s linear infinite;border:2px solid #e0e0e0;border-radius:50%;border-top-color:#666;height:24px;width:24px}\n@-webkit-keyframes spin-data-v-1c05b709{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}\n100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}\n}@keyframes spin-data-v-1c05b709{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}\n100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}\n}.", [1], "fl-warp.", [1], "data-v-1c05b709{color:#e6e4e4;font-size:20px;left:50%;position:absolute;text-align:center;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:90%}\n", ], undefined, {
    path: "./union/pages/aiVideo/component/loading.wxss"
  });
}
