$gwx1_XC_6 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx1_XC_6 || [];

    function gz$gwx1_XC_6_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx1_XC_6_1) return __WXML_GLOBAL__.ops_cached.$gwx1_XC_6_1
      __WXML_GLOBAL__.ops_cached.$gwx1_XC_6_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, 'bg'])
        Z([3, '__l'])
        Z([3, 'transparentFixed'])
        Z([3, 'b9829c30-1'])
        Z([3, 'top'])
        Z([3, 'widthFix'])
        Z([
          [6],
          [
            [7],
            [3, 'articleData']
          ],
          [3, 'coverImage']
        ])
        Z([3, 'bottom'])
        Z([3, 'name'])
        Z([a, [
          [6],
          [
            [7],
            [3, 'articleData']
          ],
          [3, 'title']
        ]])
        Z([
          [6],
          [
            [7],
            [3, 'articleData']
          ],
          [3, 'author']
        ])
        Z([3, 'auth-box'])
        Z([
          [6],
          [
            [7],
            [3, 'articleData']
          ],
          [3, 'headImgUrl']
        ])
        Z([3, 'aspectFill'])
        Z(z[12])
        Z(z[13])
        Z([3, 'https://eshopfile.zhiyousx.com/headerImg.png'])
        Z([a, [
          [6],
          [
            [7],
            [3, 'articleData']
          ],
          [3, 'author']
        ]])
        Z([3, 'main-box'])
        Z(z[1])
        Z([3, 'vue-ref'])
        Z([3, 'article'])
        Z([
          [6],
          [
            [7],
            [3, 'articleData']
          ],
          [3, 'content']
        ])
        Z([1, true])
        Z([3, 'text-align:justify;'])
        Z([
          [7],
          [3, 'parseStyle']
        ])
        Z([3, 'b9829c30-2'])
        Z([
          [4],
          [
            [5],
            [1, 'default']
          ]
        ])
        Z([3, 'display:inline-block;'])
      })(__WXML_GLOBAL__.ops_cached.$gwx1_XC_6_1);
      return __WXML_GLOBAL__.ops_cached.$gwx1_XC_6_1
    }
    __WXML_GLOBAL__.ops_set.$gwx1_XC_6 = z;
    __WXML_GLOBAL__.ops_init.$gwx1_XC_6 = true;
    var x = ['./subPack/pages/article/article.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx1_XC_6_1()
      var oZD = _n('view')
      _rz(z, oZD, 'class', 0, e, s, gg)
      var c1D = _mz(z, 'uni-navbar', ['bind:__l', 1, 'type', 1, 'vueId', 2], [], e, s, gg)
      _(oZD, c1D)
      var o2D = _n('view')
      _rz(z, o2D, 'class', 4, e, s, gg)
      var l3D = _mz(z, 'image', ['mode', 5, 'src', 1], [], e, s, gg)
      _(o2D, l3D)
      _(oZD, o2D)
      var a4D = _n('view')
      _rz(z, a4D, 'class', 7, e, s, gg)
      var e6D = _n('view')
      _rz(z, e6D, 'class', 8, e, s, gg)
      var b7D = _oz(z, 9, e, s, gg)
      _(e6D, b7D)
      _(a4D, e6D)
      var t5D = _v()
      _(a4D, t5D)
      if (_oz(z, 10, e, s, gg)) {
        t5D.wxVkey = 1
        var o8D = _n('view')
        _rz(z, o8D, 'class', 11, e, s, gg)
        var x9D = _v()
        _(o8D, x9D)
        if (_oz(z, 12, e, s, gg)) {
          x9D.wxVkey = 1
          var o0D = _mz(z, 'image', ['mode', 13, 'src', 1], [], e, s, gg)
          _(x9D, o0D)
        } else {
          x9D.wxVkey = 2
          var fAE = _mz(z, 'image', ['mode', 15, 'src', 1], [], e, s, gg)
          _(x9D, fAE)
        }
        var cBE = _n('view')
        var hCE = _oz(z, 17, e, s, gg)
        _(cBE, hCE)
        _(o8D, cBE)
        x9D.wxXCkey = 1
        _(t5D, o8D)
      }
      var oDE = _n('view')
      _rz(z, oDE, 'class', 18, e, s, gg)
      var cEE = _mz(z, 'u-parse', ['bind:__l', 19, 'class', 1, 'data-ref', 2, 'html', 3, 'lazyLoad', 4, 'style', 5, 'tagStyle', 6, 'vueId', 7, 'vueSlots', 8], [], e, s, gg)
      var oFE = _n('text')
      _rz(z, oFE, 'style', 28, e, s, gg)
      _(cEE, oFE)
      _(oDE, cEE)
      _(a4D, oDE)
      t5D.wxXCkey = 1
      _(oZD, a4D)
      _(r, oZD)
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
        g = "$gwx1_XC_6";
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
if (__vd_version_info__.delayedGwx || false) $gwx1_XC_6();
if (__vd_version_info__.delayedGwx) __wxAppCode__['subPack/pages/article/article.wxml'] = [$gwx1_XC_6, './subPack/pages/article/article.wxml'];
else __wxAppCode__['subPack/pages/article/article.wxml'] = $gwx1_XC_6('./subPack/pages/article/article.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__['subPack/pages/article/article.wxss'] = setCssToHead(["body{background-color:#fff}\n.", [1], "bg{line-height:1}\n.", [1], "top{background-color:#aaa;height:auto;position:relative}\n.", [1], "top wx-image{height:100%;width:100%}\n.", [1], "bottom{background:#fff;border-radius:", [0, 20], " ", [0, 20], " 0 0;margin-top:", [0, -20], ";padding:", [0, 57], " ", [0, 40], ";position:relative}\n.", [1], "bottom .", [1], "name{color:#333;font-size:", [0, 44], ";font-weight:700;line-height:", [0, 70], ";margin-bottom:", [0, 30], "}\n.", [1], "bottom .", [1], "auth-box{display:-webkit-flex;display:flex;margin-bottom:", [0, 55], "}\n.", [1], "bottom .", [1], "auth-box wx-image{border-radius:50%;height:", [0, 40], ";margin-right:", [0, 20], ";overflow:hidden;width:", [0, 40], "}\n.", [1], "bottom .", [1], "auth-box wx-view{color:#747373;font-size:", [0, 24], ";line-height:", [0, 40], "}\n.", [1], "bottom .", [1], "main-box{color:#333;font-size:", [0, 28], ";line-height:", [0, 54], "}\n", ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./subPack/pages/article/article.wxss:1:534)", {
    path: "./subPack/pages/article/article.wxss"
  });
}
