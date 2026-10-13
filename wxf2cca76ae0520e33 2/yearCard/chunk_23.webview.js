__wxCodeSpace__.batchAddCompiledTemplate(function(G, R, D, Q, gdc, X, Y, Z, RG = {}) {
  var P = RG.P || function(a) {
    return typeof a === 'function' ? a : () => {}
  };
  return {
    'yearCard/pages/teamNFC/detail': (() => {
      var H = {};
      var S;
      var I = (P) => {
        if (!S) S = Object.assign({}, H);
        return S[P]
      };
      H[""] = (R, C, D, U) => {
        var L = R.c,
          M = R.m,
          O = R.r,
          A = {},
          K = U === true,
          c = (C) => {},
          e = (C) => {},
          d = (C, T, E) => {
            E("image", {}, (N, C) => {
              if (C) L(N, "data-v-a92d963a");
              if (C) O(N, "src", "https://eshopfile.zhiyousx.com/2025111214434874857.png");
              if (C) O(N, "mode", "widthFix")
            }, e)
          },
          b = (C, T, E) => {
            E("uni-navbar", {}, (N, C) => {
              if (C) L(N, "data-v-a92d963a");
              if (C) O(N, "vue-id", "5b57e245-1");
              if (C) O(N, "type", "transparentFixed");
              if (C) R.v(N, "__l", "__l", !1, !1, !1, !1)
            }, c);
            E("view", {}, (N, C) => {
              if (C) L(N, "page-box data-v-a92d963a")
            }, d)
          },
          a = (C, T, E) => {
            E("view", {}, (N, C) => {
              if (C) L(N, "data-v-a92d963a")
            }, b);
            C = !1;
            U = Object.create(null);
            K = !1
          };;
        return {
          C: a,
          B: A
        }
      };
      return Object.assign(function(R) {
        return H[R]
      }, {
        _: H
      })
    })(),
  }
});
var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__['yearCard/pages/teamNFC/detail.wxss'] = setCssToHead(["body{background:#000}\n.", [1], "page-box.", [1], "data-v-a92d963a{-webkit-align-items:center;align-items:center;background-color:#5bc3dd;display:-webkit-flex;display:flex;height:100vh;-webkit-justify-content:center;justify-content:center;position:relative;width:100%}\n.", [1], "page-box wx-image.", [1], "data-v-a92d963a{height:auto;width:", [0, 750], "}\n", ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./yearCard/pages/teamNFC/detail.wxss:1:259)", {
    path: "./yearCard/pages/teamNFC/detail.wxss"
  });
}
