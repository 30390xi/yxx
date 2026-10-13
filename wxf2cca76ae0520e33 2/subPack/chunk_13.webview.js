$gwx1_XC_5 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx1_XC_5 || [];

    function gz$gwx1_XC_5_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx1_XC_5_1) return __WXML_GLOBAL__.ops_cached.$gwx1_XC_5_1
      __WXML_GLOBAL__.ops_cached.$gwx1_XC_5_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, 'page-box data-v-b6dde270'])
        Z([3, 'info-box data-v-b6dde270'])
        Z([3, 'text data-v-b6dde270'])
        Z([a, [
          [2, '+'],
          [
            [2, '+'],
            [1, ''],
            [
              [7],
              [3, 'payMsg']
            ]
          ],
          [1, '']
        ]])
        Z([3, 'icon data-v-b6dde270'])
        Z([3, 'https://eshopfile.zhiyousx.com/2023061917344246662.png'])
        Z([3, '__e'])
        Z([3, 'btn data-v-b6dde270'])
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
                          [1, 'closePay']
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
            [2, '!='],
            [
              [7],
              [3, 'payMsg']
            ],
            [1, '支付中...']
          ]
        ])
        Z([3, '退出'])
      })(__WXML_GLOBAL__.ops_cached.$gwx1_XC_5_1);
      return __WXML_GLOBAL__.ops_cached.$gwx1_XC_5_1
    }
    __WXML_GLOBAL__.ops_set.$gwx1_XC_5 = z;
    __WXML_GLOBAL__.ops_init.$gwx1_XC_5 = true;
    var x = ['./subPack/pages/appPay/appPayQr.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx1_XC_5_1()
      var eRD = _n('view')
      _rz(z, eRD, 'class', 0, e, s, gg)
      var bSD = _n('view')
      _rz(z, bSD, 'class', 1, e, s, gg)
      var oTD = _n('view')
      _rz(z, oTD, 'class', 2, e, s, gg)
      var xUD = _oz(z, 3, e, s, gg)
      _(oTD, xUD)
      _(bSD, oTD)
      var oVD = _mz(z, 'image', ['mode', -1, 'class', 4, 'src', 1], [], e, s, gg)
      _(bSD, oVD)
      _(eRD, bSD)
      var fWD = _mz(z, 'view', ['bindtap', 6, 'class', 1, 'data-event-opts', 2, 'hidden', 3], [], e, s, gg)
      var cXD = _oz(z, 10, e, s, gg)
      _(fWD, cXD)
      _(eRD, fWD)
      _(r, eRD)
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
        g = "$gwx1_XC_5";
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
if (__vd_version_info__.delayedGwx || false) $gwx1_XC_5();
if (__vd_version_info__.delayedGwx) __wxAppCode__['subPack/pages/appPay/appPayQr.wxml'] = [$gwx1_XC_5, './subPack/pages/appPay/appPayQr.wxml'];
else __wxAppCode__['subPack/pages/appPay/appPayQr.wxml'] = $gwx1_XC_5('./subPack/pages/appPay/appPayQr.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__['subPack/pages/appPay/appPayQr.wxss'] = setCssToHead([".", [1], "page-box.", [1], "data-v-b6dde270{background:#fff;min-height:100vh}\n.", [1], "page-box .", [1], "info-box.", [1], "data-v-b6dde270,.", [1], "page-box.", [1], "data-v-b6dde270{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;width:100%}\n.", [1], "page-box .", [1], "info-box.", [1], "data-v-b6dde270{margin-bottom:", [0, 80], ";margin-top:", [0, 80], "}\n.", [1], "page-box .", [1], "info-box .", [1], "text.", [1], "data-v-b6dde270{color:#333;font-size:", [0, 30], ";font-weight:700;margin-bottom:", [0, 80], "}\n.", [1], "page-box .", [1], "info-box .", [1], "icon.", [1], "data-v-b6dde270{height:", [0, 212], ";width:", [0, 250], "}\n.", [1], "page-box .", [1], "btn.", [1], "data-v-b6dde270{-webkit-align-items:center;align-items:center;background:linear-gradient(253deg,#fc4a9b,#ff5413);border-radius:", [0, 35], ";color:#fff;display:-webkit-flex;display:flex;font-size:", [0, 28], ";height:", [0, 70], ";-webkit-justify-content:center;justify-content:center;letter-spacing:4px;width:", [0, 660], "}\n", ], undefined, {
    path: "./subPack/pages/appPay/appPayQr.wxss"
  });
}
