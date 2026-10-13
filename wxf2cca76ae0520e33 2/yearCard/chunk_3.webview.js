$gwx0_XC_16 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx0_XC_16 || [];

    function gz$gwx0_XC_16_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx0_XC_16_1) return __WXML_GLOBAL__.ops_cached.$gwx0_XC_16_1
      __WXML_GLOBAL__.ops_cached.$gwx0_XC_16_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([
          [7],
          [3, 'showPopup']
        ])
        Z([3, 'custom-popup data-v-b037c622'])
        Z([3, 'loading data-v-b037c622'])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [
              [2, '+'],
              [1, 'width:'],
              [
                [2, '?:'],
                [
                  [2, '!'],
                  [
                    [7],
                    [3, 'loadingErrText']
                  ]
                ],
                [1, '280rpx'],
                [1, '450rpx']
              ]
            ],
            [1, ';']
          ],
          [
            [2, '+'],
            [
              [2, '+'],
              [1, 'height:'],
              [
                [2, '?:'],
                [
                  [2, '!'],
                  [
                    [7],
                    [3, 'loadingErrText']
                  ]
                ],
                [1, '280rpx'],
                [1, '400rpx']
              ]
            ],
            [1, ';']
          ]
        ])
        Z([
          [2, '!'],
          [
            [7],
            [3, 'loadingErrText']
          ]
        ])
        Z([3, 'loading-round data-v-b037c622'])
        Z([3, 'round-animation data-v-b037c622'])
        Z([3, 'loading-suc-image data-v-b037c622'])
        Z([3, 'https://eshopfile.zhiyousx.com/2023121819231125834.png'])
        Z([3, 'loading-err-image data-v-b037c622'])
        Z([3, 'https://eshopfile.zhiyousx.com/2023121215140424055.png'])
        Z([
          [2, '!'],
          [
            [2, '!'],
            [
              [7],
              [3, 'loadingErrText']
            ]
          ]
        ])
        Z([3, 'text data-v-b037c622'])
        Z([a, [
          [7],
          [3, 'loadingErrText']
        ]])
        Z([3, 'text m-r-10 data-v-b037c622'])
        Z([3, '制卡中'])
        Z([3, 'dotting data-v-b037c622'])
      })(__WXML_GLOBAL__.ops_cached.$gwx0_XC_16_1);
      return __WXML_GLOBAL__.ops_cached.$gwx0_XC_16_1
    }
    __WXML_GLOBAL__.ops_set.$gwx0_XC_16 = z;
    __WXML_GLOBAL__.ops_init.$gwx0_XC_16 = true;
    var x = ['./yearCard/components/loading.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx0_XC_16_1()
      var lUZ = _v()
      _(r, lUZ)
      if (_oz(z, 0, e, s, gg)) {
        lUZ.wxVkey = 1
        var aVZ = _n('view')
        _rz(z, aVZ, 'class', 1, e, s, gg)
        var tWZ = _mz(z, 'view', ['class', 2, 'style', 1], [], e, s, gg)
        var eXZ = _v()
        _(tWZ, eXZ)
        if (_oz(z, 4, e, s, gg)) {
          eXZ.wxVkey = 1
          var oZZ = _n('view')
          _rz(z, oZZ, 'class', 5, e, s, gg)
          var x1Z = _n('view')
          _rz(z, x1Z, 'class', 6, e, s, gg)
          var o2Z = _mz(z, 'image', ['class', 7, 'src', 1], [], e, s, gg)
          _(x1Z, o2Z)
          _(oZZ, x1Z)
          _(eXZ, oZZ)
        } else {
          eXZ.wxVkey = 2
          var f3Z = _mz(z, 'image', ['class', 9, 'src', 1], [], e, s, gg)
          _(eXZ, f3Z)
        }
        var bYZ = _v()
        _(tWZ, bYZ)
        if (_oz(z, 11, e, s, gg)) {
          bYZ.wxVkey = 1
          var c4Z = _n('view')
          _rz(z, c4Z, 'class', 12, e, s, gg)
          var h5Z = _oz(z, 13, e, s, gg)
          _(c4Z, h5Z)
          _(bYZ, c4Z)
        } else {
          bYZ.wxVkey = 2
          var o6Z = _n('view')
          _rz(z, o6Z, 'class', 14, e, s, gg)
          var c7Z = _oz(z, 15, e, s, gg)
          _(o6Z, c7Z)
          var o8Z = _n('text')
          _rz(z, o8Z, 'class', 16, e, s, gg)
          _(o6Z, o8Z)
          _(bYZ, o6Z)
        }
        eXZ.wxXCkey = 1
        bYZ.wxXCkey = 1
        _(aVZ, tWZ)
        _(lUZ, aVZ)
      }
      lUZ.wxXCkey = 1
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
        g = "$gwx0_XC_16";
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
if (__vd_version_info__.delayedGwx || false) $gwx0_XC_16();
if (__vd_version_info__.delayedGwx) __wxAppCode__['yearCard/components/loading.wxml'] = [$gwx0_XC_16, './yearCard/components/loading.wxml'];
else __wxAppCode__['yearCard/components/loading.wxml'] = $gwx0_XC_16('./yearCard/components/loading.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__['yearCard/components/loading.wxss'] = setCssToHead([".", [1], "custom-popup.", [1], "data-v-b037c622{background:rgba(0,0,0,.5);bottom:0;left:0;position:fixed;right:0;top:0;z-index:1000}\n.", [1], "m-r-10.", [1], "data-v-b037c622{margin-top:", [0, 10], "!important}\n.", [1], "loading.", [1], "data-v-b037c622{-webkit-align-items:center;align-items:center;background:rgba(0,0,0,.7);border-radius:", [0, 20], ";bottom:0;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:center;justify-content:center;left:0;margin:auto;padding:20px;position:absolute;right:0;top:0}\n.", [1], "loading .", [1], "loading-suc-image.", [1], "data-v-b037c622{height:100%;width:100%}\n.", [1], "loading .", [1], "loading-round.", [1], "data-v-b037c622{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;height:", [0, 100], ";-webkit-justify-content:center;justify-content:center;width:", [0, 100], "}\n.", [1], "loading .", [1], "loading-round .", [1], "round-animation.", [1], "data-v-b037c622{-webkit-animation:action-data-v-b037c622 1.5s linear infinite;animation:action-data-v-b037c622 1.5s linear infinite;height:", [0, 90], ";width:", [0, 90], "}\n@-webkit-keyframes action-data-v-b037c622{from{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-transform:perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn);transform:perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn)}\n40%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-transform:perspective(400px) scaleX(1) translateZ(", [0, 95], ") rotateY(-190deg);transform:perspective(400px) scaleX(1) translateZ(", [0, 95], ") rotateY(-190deg)}\n50%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:perspective(400px) scaleX(1) translateZ(", [0, 95], ") rotateY(-170deg);transform:perspective(400px) scaleX(1) translateZ(", [0, 95], ") rotateY(-170deg)}\n80%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:perspective(400px) scale3d(.95,.95,.95) translateZ(0) rotateY(0deg);transform:perspective(400px) scale3d(.95,.95,.95) translateZ(0) rotateY(0deg)}\nto{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:perspective(400px) scaleX(1) translateZ(0) rotateY(0deg);transform:perspective(400px) scaleX(1) translateZ(0) rotateY(0deg)}\n}@keyframes action-data-v-b037c622{from{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-transform:perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn);transform:perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn)}\n40%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-transform:perspective(400px) scaleX(1) translateZ(", [0, 95], ") rotateY(-190deg);transform:perspective(400px) scaleX(1) translateZ(", [0, 95], ") rotateY(-190deg)}\n50%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:perspective(400px) scaleX(1) translateZ(", [0, 95], ") rotateY(-170deg);transform:perspective(400px) scaleX(1) translateZ(", [0, 95], ") rotateY(-170deg)}\n80%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:perspective(400px) scale3d(.95,.95,.95) translateZ(0) rotateY(0deg);transform:perspective(400px) scale3d(.95,.95,.95) translateZ(0) rotateY(0deg)}\nto{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:perspective(400px) scaleX(1) translateZ(0) rotateY(0deg);transform:perspective(400px) scaleX(1) translateZ(0) rotateY(0deg)}\n}.", [1], "loading .", [1], "dotting.", [1], "data-v-b037c622{-webkit-animation:dot-data-v-b037c622 1.5s step-start infinite both;animation:dot-data-v-b037c622 1.5s step-start infinite both;background-clip:content-box;background-color:currentColor;border-left:2px solid;border-right:2px solid;box-sizing:border-box;color:#fff;display:inline-block;min-height:2px;padding-right:2px;width:10px}\n.", [1], "loading .", [1], "dotting.", [1], "data-v-b037c622:before{color:#fff;content:\x22...\x22}\n.", [1], "loading .", [1], "dotting.", [1], "data-v-b037c622::before{color:#fff;content:\x22\x22}\n.", [1], "loading  .", [1], "dotting.", [1], "data-v-b037c622{margin-left:2px;padding-left:2px}\n@-webkit-keyframes dot-data-v-b037c622{25%{background-color:initial;border-color:transparent}\n50%{background-color:initial;border-right-color:transparent}\n75%{border-right-color:transparent}\n}@keyframes dot-data-v-b037c622{25%{background-color:initial;border-color:transparent}\n50%{background-color:initial;border-right-color:transparent}\n75%{border-right-color:transparent}\n}.", [1], "loading .", [1], "opacity.", [1], "data-v-b037c622{opacity:1!important}\n.", [1], "loading .", [1], "loading-err-image.", [1], "data-v-b037c622{height:", [0, 150], ";width:", [0, 150], "}\n.", [1], "loading .", [1], "text.", [1], "data-v-b037c622{color:#fff;font-size:", [0, 30], ";font-weight:400;margin-top:", [0, 40], "}\n", ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./yearCard/components/loading.wxss:1:3878)", {
    path: "./yearCard/components/loading.wxss"
  });
}
