$gwx1_XC_10 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx1_XC_10 || [];

    function gz$gwx1_XC_10_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx1_XC_10_1) return __WXML_GLOBAL__.ops_cached.$gwx1_XC_10_1
      __WXML_GLOBAL__.ops_cached.$gwx1_XC_10_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, 'big data-v-518d015c'])
        Z([3, 'new data-v-518d015c'])
        Z([3, 'yuan data-v-518d015c'])
        Z([3, 'current data-v-518d015c'])
        Z([3, '当前版本：V9.04'])
        Z([3, 'news data-v-518d015c'])
        Z([3, '已是最新版本'])
        Z([3, 'bottombox data-v-518d015c'])
        Z([3, '冠字号'])
      })(__WXML_GLOBAL__.ops_cached.$gwx1_XC_10_1);
      return __WXML_GLOBAL__.ops_cached.$gwx1_XC_10_1
    }
    __WXML_GLOBAL__.ops_set.$gwx1_XC_10 = z;
    __WXML_GLOBAL__.ops_init.$gwx1_XC_10 = true;
    var x = ['./subPack/pages/edition/edition.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx1_XC_10_1()
      var tWL = _n('view')
      _rz(z, tWL, 'class', 0, e, s, gg)
      var eXL = _n('view')
      _rz(z, eXL, 'class', 1, e, s, gg)
      var bYL = _n('view')
      _rz(z, bYL, 'class', 2, e, s, gg)
      _(eXL, bYL)
      var oZL = _n('view')
      _rz(z, oZL, 'class', 3, e, s, gg)
      var x1L = _oz(z, 4, e, s, gg)
      _(oZL, x1L)
      _(eXL, oZL)
      var o2L = _n('view')
      _rz(z, o2L, 'class', 5, e, s, gg)
      var f3L = _oz(z, 6, e, s, gg)
      _(o2L, f3L)
      _(eXL, o2L)
      _(tWL, eXL)
      var c4L = _n('view')
      _rz(z, c4L, 'class', 7, e, s, gg)
      var h5L = _oz(z, 8, e, s, gg)
      _(c4L, h5L)
      _(tWL, c4L)
      _(r, tWL)
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
        g = "$gwx1_XC_10";
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
if (__vd_version_info__.delayedGwx || false) $gwx1_XC_10();
if (__vd_version_info__.delayedGwx) __wxAppCode__['subPack/pages/edition/edition.wxml'] = [$gwx1_XC_10, './subPack/pages/edition/edition.wxml'];
else __wxAppCode__['subPack/pages/edition/edition.wxml'] = $gwx1_XC_10('./subPack/pages/edition/edition.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__['subPack/pages/edition/edition.wxss'] = setCssToHead([".", [1], "big.", [1], "data-v-518d015c{background-color:#fff;height:100vh;width:100%}\n.", [1], "bottombox.", [1], "data-v-518d015c{bottom:0;color:#adadad;font-family:PingFang-SC-Medium;font-size:", [0, 28], ";margin:", [0, 30], " 0;position:fixed;text-align:center;width:100%}\n.", [1], "new.", [1], "data-v-518d015c{left:0;margin:", [0, 190], " auto auto;position:fixed;right:0;text-align:center;width:", [0, 500], "}\n.", [1], "new .", [1], "yuan.", [1], "data-v-518d015c{background-color:#f3f3f3;border-radius:50%;height:", [0, 140], ";margin:0 auto ", [0, 22], ";width:", [0, 140], "}\n.", [1], "new .", [1], "current.", [1], "data-v-518d015c{color:#adadad;font-family:PingFang-SC-Medium;font-size:", [0, 26], ";line-height:", [0, 26], ";margin:", [0, 10], " 0}\n.", [1], "new .", [1], "news.", [1], "data-v-518d015c{color:#333;font-family:PingFang-SC-Medium;font-size:", [0, 24], ";line-height:", [0, 24], ";margin:", [0, 10], " 0}\n", ], undefined, {
    path: "./subPack/pages/edition/edition.wxss"
  });
}
