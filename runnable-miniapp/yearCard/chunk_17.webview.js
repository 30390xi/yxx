$gwx0_XC_8 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx0_XC_8 || [];

    function gz$gwx0_XC_8_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx0_XC_8_1) return __WXML_GLOBAL__.ops_cached.$gwx0_XC_8_1
      __WXML_GLOBAL__.ops_cached.$gwx0_XC_8_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, 'data-v-14e7353e'])
        Z([3, '__l'])
        Z(z[0])
        Z([3, 'transparentFixed'])
        Z([3, '2c1975f6-1'])
        Z([3, 'page-box data-v-14e7353e'])
        Z([
          [7],
          [3, 'vlogUrl']
        ])
        Z([1, true])
        Z([3, '__e'])
        Z(z[8])
        Z([3, 'video data-v-14e7353e'])
        Z([1, false])
        Z([
          [4],
          [
            [5],
            [
              [5],
              [
                [4],
                [
                  [5],
                  [
                    [5],
                    [1, 'play']
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
                            [1, 'videoPlay']
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
            ],
            [
              [4],
              [
                [5],
                [
                  [5],
                  [1, 'pause']
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
                          [1, 'videopause']
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
        Z(z[7])
        Z([3, 'videoPlayer'])
        Z([3, 'true'])
        Z(z[6])
        Z([
          [2, '!'],
          [
            [7],
            [3, 'isPlay']
          ]
        ])
        Z(z[8])
        Z([3, 'btn play data-v-14e7353e'])
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
                          [1, 'playPause']
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
        Z([3, 'https://eshopfile.zhiyousx.com/2021083111362225433.png'])
      })(__WXML_GLOBAL__.ops_cached.$gwx0_XC_8_1);
      return __WXML_GLOBAL__.ops_cached.$gwx0_XC_8_1
    }
    __WXML_GLOBAL__.ops_set.$gwx0_XC_8 = z;
    __WXML_GLOBAL__.ops_init.$gwx0_XC_8 = true;
    var x = ['./yearCard/pages/nfcVideo/nfcVideo.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx0_XC_8_1()
      var oTK = _n('view')
      _rz(z, oTK, 'class', 0, e, s, gg)
      var xUK = _mz(z, 'uni-navbar', ['bind:__l', 1, 'class', 1, 'type', 2, 'vueId', 3], [], e, s, gg)
      _(oTK, xUK)
      var oVK = _n('view')
      _rz(z, oVK, 'class', 5, e, s, gg)
      var fWK = _v()
      _(oVK, fWK)
      if (_oz(z, 6, e, s, gg)) {
        fWK.wxVkey = 1
        var hYK = _mz(z, 'video', ['autoplay', 7, 'bindpause', 1, 'bindplay', 2, 'class', 3, 'customCache', 4, 'data-event-opts', 5, 'enablePlayGesture', 6, 'id', 7, 'loop', 8, 'src', 9], [], e, s, gg)
        _(fWK, hYK)
      }
      var cXK = _v()
      _(oVK, cXK)
      if (_oz(z, 17, e, s, gg)) {
        cXK.wxVkey = 1
        var oZK = _mz(z, 'image', ['bindtap', 18, 'class', 1, 'data-event-opts', 2, 'src', 3], [], e, s, gg)
        _(cXK, oZK)
      }
      fWK.wxXCkey = 1
      cXK.wxXCkey = 1
      _(oTK, oVK)
      _(r, oTK)
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
        g = "$gwx0_XC_8";
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
if (__vd_version_info__.delayedGwx || false) $gwx0_XC_8();
if (__vd_version_info__.delayedGwx) __wxAppCode__['yearCard/pages/nfcVideo/nfcVideo.wxml'] = [$gwx0_XC_8, './yearCard/pages/nfcVideo/nfcVideo.wxml'];
else __wxAppCode__['yearCard/pages/nfcVideo/nfcVideo.wxml'] = $gwx0_XC_8('./yearCard/pages/nfcVideo/nfcVideo.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__['yearCard/pages/nfcVideo/nfcVideo.wxss'] = setCssToHead(["body{background:#000}\n.", [1], "page-box .", [1], "video.", [1], "data-v-14e7353e,.", [1], "page-box.", [1], "data-v-14e7353e{height:100vh;position:relative;width:100%}\n.", [1], "page-box .", [1], "btn.", [1], "data-v-14e7353e{background:none;height:", [0, 120], ";left:50%;margin-left:", [0, -60], ";margin-top:", [0, -60], ";position:absolute;top:50%;width:", [0, 120], ";z-index:2}\n.", [1], "page-box .", [1], "btn.", [1], "pause.", [1], "data-v-14e7353e{-webkit-animation:benone .2s linear 2s forwards;animation:benone .2s linear 2s forwards}\n", ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./yearCard/pages/nfcVideo/nfcVideo.wxss:1:1)", {
    path: "./yearCard/pages/nfcVideo/nfcVideo.wxss"
  });
}
