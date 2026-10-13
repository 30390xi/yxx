$gwx1_XC_4 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx1_XC_4 || [];

    function gz$gwx1_XC_4_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx1_XC_4_1) return __WXML_GLOBAL__.ops_cached.$gwx1_XC_4_1
      __WXML_GLOBAL__.ops_cached.$gwx1_XC_4_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, 'page-box data-v-1bd3db7c'])
        Z([3, 'info-box data-v-1bd3db7c'])
        Z([3, 'text data-v-1bd3db7c'])
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
        Z([3, 'icon data-v-1bd3db7c'])
        Z([3, 'https://eshopfile.zhiyousx.com/2023061917344246662.png'])
        Z([
          [2, '=='],
          [
            [7],
            [3, 'channel']
          ],
          [1, 'ixa']
        ])
        Z([3, '__e'])
        Z([3, 'btn data-v-1bd3db7c'])
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
                          [1, 'exitMiniProgram']
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
        Z([3, '返回'])
        Z([3, 'pay_end'])
        Z([3, 'launchAppError'])
        Z(z[8])
        Z(z[10])
        Z([3, 'launchApp'])
        Z([3, '返回游陕西'])
      })(__WXML_GLOBAL__.ops_cached.$gwx1_XC_4_1);
      return __WXML_GLOBAL__.ops_cached.$gwx1_XC_4_1
    }
    __WXML_GLOBAL__.ops_set.$gwx1_XC_4 = z;
    __WXML_GLOBAL__.ops_init.$gwx1_XC_4 = true;
    var x = ['./subPack/pages/appPay/appPay.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx1_XC_4_1()
      var xGD = _n('view')
      _rz(z, xGD, 'class', 0, e, s, gg)
      var fID = _n('view')
      _rz(z, fID, 'class', 1, e, s, gg)
      var cJD = _n('view')
      _rz(z, cJD, 'class', 2, e, s, gg)
      var hKD = _oz(z, 3, e, s, gg)
      _(cJD, hKD)
      _(fID, cJD)
      var oLD = _mz(z, 'image', ['mode', -1, 'class', 4, 'src', 1], [], e, s, gg)
      _(fID, oLD)
      _(xGD, fID)
      var oHD = _v()
      _(xGD, oHD)
      if (_oz(z, 6, e, s, gg)) {
        oHD.wxVkey = 1
        var cMD = _mz(z, 'button', ['bindtap', 7, 'class', 1, 'data-event-opts', 2, 'hidden', 3], [], e, s, gg)
        var oND = _oz(z, 11, e, s, gg)
        _(cMD, oND)
        _(oHD, cMD)
      } else {
        oHD.wxVkey = 2
        var lOD = _mz(z, 'button', ['appParameter', 12, 'binderror', 1, 'class', 2, 'hidden', 3, 'openType', 4], [], e, s, gg)
        var aPD = _oz(z, 17, e, s, gg)
        _(lOD, aPD)
        _(oHD, lOD)
      }
      oHD.wxXCkey = 1
      _(r, xGD)
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
        g = "$gwx1_XC_4";
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
if (__vd_version_info__.delayedGwx || false) $gwx1_XC_4();
if (__vd_version_info__.delayedGwx) __wxAppCode__['subPack/pages/appPay/appPay.wxml'] = [$gwx1_XC_4, './subPack/pages/appPay/appPay.wxml'];
else __wxAppCode__['subPack/pages/appPay/appPay.wxml'] = $gwx1_XC_4('./subPack/pages/appPay/appPay.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__['subPack/pages/appPay/appPay.wxss'] = setCssToHead([".", [1], "page-box.", [1], "data-v-1bd3db7c{background:#fff;min-height:100vh}\n.", [1], "page-box .", [1], "info-box.", [1], "data-v-1bd3db7c,.", [1], "page-box.", [1], "data-v-1bd3db7c{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;width:100%}\n.", [1], "page-box .", [1], "info-box.", [1], "data-v-1bd3db7c{margin-bottom:", [0, 80], ";margin-top:", [0, 80], "}\n.", [1], "page-box .", [1], "info-box .", [1], "text.", [1], "data-v-1bd3db7c{color:#333;font-size:", [0, 30], ";font-weight:700;margin-bottom:", [0, 80], "}\n.", [1], "page-box .", [1], "info-box .", [1], "icon.", [1], "data-v-1bd3db7c{height:", [0, 212], ";width:", [0, 250], "}\n.", [1], "page-box .", [1], "btn.", [1], "data-v-1bd3db7c{-webkit-align-items:center;align-items:center;background:linear-gradient(253deg,#fc4a9b,#ff5413);border-radius:", [0, 35], ";color:#fff;display:-webkit-flex;display:flex;font-size:", [0, 28], ";height:", [0, 70], ";-webkit-justify-content:center;justify-content:center;letter-spacing:4px;width:", [0, 660], "}\n", ], undefined, {
    path: "./subPack/pages/appPay/appPay.wxss"
  });
}
