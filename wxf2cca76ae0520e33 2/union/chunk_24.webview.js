$gwx4_XC_17 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx4_XC_17 || [];

    function gz$gwx4_XC_17_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx4_XC_17_1) return __WXML_GLOBAL__.ops_cached.$gwx4_XC_17_1
      __WXML_GLOBAL__.ops_cached.$gwx4_XC_17_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, '__e'])
        Z(z[0])
        Z([3, 'swiperPanel'])
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
                    [1, 'touchstart']
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
                            [1, 'startMove']
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
                  [1, 'touchend']
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
                          [1, 'endMove']
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
          [2, '+'],
          [
            [2, '+'],
            [1, 'height:'],
            [
              [7],
              [3, 'panelHeight']
            ]
          ],
          [1, ';']
        ])
        Z([3, 'index'])
        Z([3, 'item'])
        Z([
          [7],
          [3, 'swiperList']
        ])
        Z(z[5])
        Z(z[0])
        Z([3, 'swiperItem'])
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
                          [1, 'routerTo']
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
          [2, '+'],
          [
            [2, '+'],
            [
              [2, '+'],
              [
                [2, '+'],
                [1, 'transform:'],
                [
                  [6],
                  [
                    [6],
                    [
                      [7],
                      [3, 'itemStyle']
                    ],
                    [
                      [7],
                      [3, 'index']
                    ]
                  ],
                  [3, 'transform']
                ]
              ],
              [1, ';']
            ],
            [
              [2, '+'],
              [
                [2, '+'],
                [1, 'z-index:'],
                [
                  [6],
                  [
                    [6],
                    [
                      [7],
                      [3, 'itemStyle']
                    ],
                    [
                      [7],
                      [3, 'index']
                    ]
                  ],
                  [3, 'zIndex']
                ]
              ],
              [1, ';']
            ]
          ],
          [
            [2, '+'],
            [
              [2, '+'],
              [1, 'opacity:'],
              [
                [6],
                [
                  [6],
                  [
                    [7],
                    [3, 'itemStyle']
                  ],
                  [
                    [7],
                    [3, 'index']
                  ]
                ],
                [3, 'opacity']
              ]
            ],
            [1, ';']
          ]
        ])
        Z(z[0])
        Z([3, 'children'])
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
                        [1, 'clickPrevent']
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [1, 'width:'],
            [
              [7],
              [3, 'childrenWidth']
            ]
          ],
          [1, ';']
        ])
        Z([3, 'pic'])
        Z([
          [6],
          [
            [7],
            [3, 'item']
          ],
          [3, 'url']
        ])
        Z([
          [2, '==='],
          [
            [7],
            [3, 'index']
          ],
          [
            [7],
            [3, 'currentIndex']
          ]
        ])
        Z([3, 'selected'])
        Z([3, 'https://eshopfile.zhiyousx.com/173751694232641233.png'])
      })(__WXML_GLOBAL__.ops_cached.$gwx4_XC_17_1);
      return __WXML_GLOBAL__.ops_cached.$gwx4_XC_17_1
    }

    function gz$gwx4_XC_17_2() {
      if (__WXML_GLOBAL__.ops_cached.$gwx4_XC_17_2) return __WXML_GLOBAL__.ops_cached.$gwx4_XC_17_2
      __WXML_GLOBAL__.ops_cached.$gwx4_XC_17_2 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, 'replacement_box data-v-2f6e3365'])
        Z([3, '__l'])
        Z([3, 'data-v-2f6e3365'])
        Z([3, 'transparentFixed'])
        Z([3, '4dd3e33c-1'])
        Z([3, 'replacement_header data-v-2f6e3365'])
        Z([3, '__e'])
        Z([3, 'replacement_header-icon data-v-2f6e3365'])
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
                          [1, 'goList']
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
        Z([3, 'https://eshopfile.zhiyousx.com/173753619182414398.png'])
        Z([3, 'replacement_count-box data-v-2f6e3365'])
        Z([3, 'replacement_count-top data-v-2f6e3365'])
        Z([3, 'replacement_count-bottom data-v-2f6e3365'])
        Z([3, 'replacement_count data-v-2f6e3365'])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [1, 'top:'],
            [
              [2, '?:'],
              [
                [7],
                [3, 'smallScreen']
              ],
              [1, '500rpx'],
              [1, '560rpx']
            ]
          ],
          [1, ';']
        ])
        Z([3, 'up-photo1 data-v-2f6e3365'])
        Z([
          [2, '!'],
          [
            [2, '=='],
            [
              [7],
              [3, 'typeIndex']
            ],
            [1, 0]
          ]
        ])
        Z([1, false])
        Z(z[1])
        Z(z[6])
        Z([3, 'data-v-2f6e3365 vue-ref'])
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
                  [1, '^scrollImg']
                ],
                [
                  [4],
                  [
                    [5],
                    [
                      [4],
                      [
                        [5],
                        [1, 'scrollImg']
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ])
        Z([3, 'swiper0'])
        Z([
          [7],
          [3, 'smallScreen']
        ])
        Z([
          [6],
          [
            [7],
            [3, 'bgData']
          ],
          [3, 'bgList']
        ])
        Z([1, 1])
        Z([3, '4dd3e33c-2'])
        Z([3, 'up-photo2 data-v-2f6e3365'])
        Z([
          [2, '!'],
          [
            [2, '=='],
            [
              [7],
              [3, 'typeIndex']
            ],
            [1, 1]
          ]
        ])
        Z(z[17])
        Z(z[1])
        Z(z[6])
        Z(z[20])
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
                  [1, '^scrollImg']
                ],
                [
                  [4],
                  [
                    [5],
                    [
                      [4],
                      [
                        [5],
                        [1, 'scrollImg1']
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ])
        Z([3, 'swiper1'])
        Z(z[23])
        Z([
          [6],
          [
            [7],
            [3, 'bgData']
          ],
          [3, 'clothImgList']
        ])
        Z([1, 2])
        Z([3, '4dd3e33c-3'])
        Z([
          [4],
          [
            [5],
            [
              [5],
              [
                [5],
                [1, 'up-photo']
              ],
              [1, 'data-v-2f6e3365']
            ],
            [
              [2, '?:'],
              [
                [7],
                [3, 'smallScreen']
              ],
              [1, 'up-photo-act'],
              [1, 'up-photo-acted']
            ]
          ]
        ])
        Z([
          [2, '!'],
          [
            [2, '||'],
            [
              [2, '=='],
              [
                [7],
                [3, 'typeIndex']
              ],
              [1, 2]
            ],
            [
              [2, '=='],
              [
                [7],
                [3, 'typeIndex']
              ],
              [1, 3]
            ]
          ]
        ])
        Z([
          [2, '!'],
          [
            [7],
            [3, 'humanImg']
          ]
        ])
        Z([3, 'up-photo-copy data-v-2f6e3365'])
        Z(z[6])
        Z([3, 'image data-v-2f6e3365'])
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
                          [1, 'chooseImage']
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
        Z([3, 'https://eshopfile.zhiyousx.com/173745921820092720.png'])
        Z([3, 'text data-v-2f6e3365'])
        Z([3, '请选择人物面部清晰的上半身照片，避免生成视频效果不佳'])
        Z([
          [7],
          [3, 'humanImg']
        ])
        Z([
          [4],
          [
            [5],
            [
              [5],
              [1, 'data-v-2f6e3365']
            ],
            [
              [2, '?:'],
              [
                [7],
                [3, 'smallScreen']
              ],
              [1, 'image-logo1'],
              [1, 'image-logo']
            ]
          ]
        ])
        Z([3, 'aspectFill'])
        Z(z[49])
        Z([3, 'replacement_foot data-v-2f6e3365'])
        Z([3, 'btn-all data-v-2f6e3365'])
        Z([3, 'foot-sub data-v-2f6e3365'])
        Z(z[6])
        Z([3, 'foot-btn data-v-2f6e3365'])
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
                          [1, 'submit']
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
        Z([a, [
          [2, '+'],
          [
            [2, '+'],
            [1, ''],
            [
              [2, '?:'],
              [
                [2, '&&'],
                [
                  [2, '=='],
                  [
                    [7],
                    [3, 'typeIndex']
                  ],
                  [1, 2]
                ],
                [
                  [7],
                  [3, 'humanImg']
                ]
              ],
              [1, '合成视频'],
              [
                [6],
                [
                  [7],
                  [3, 'btnText']
                ],
                [
                  [7],
                  [3, 'typeIndex']
                ]
              ]
            ]
          ],
          [1, '']
        ]])
        Z([3, 'more-btn data-v-2f6e3365'])
        Z(z[6])
        Z([3, 'left-btn font data-v-2f6e3365'])
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
                          [1, 'previousStep']
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
          [2, '+'],
          [
            [2, '+'],
            [1, 'opacity:'],
            [
              [2, '?:'],
              [
                [6],
                [
                  [7],
                  [3, 'leftBtn']
                ],
                [
                  [7],
                  [3, 'typeIndex']
                ]
              ],
              [1, 1],
              [1, 0]
            ]
          ],
          [1, ';']
        ])
        Z([a, [
          [2, '+'],
          [
            [2, '+'],
            [1, ''],
            [
              [6],
              [
                [7],
                [3, 'leftBtn']
              ],
              [
                [7],
                [3, 'typeIndex']
              ]
            ]
          ],
          [1, '']
        ]])
        Z([
          [2, '&&'],
          [
            [2, '=='],
            [
              [7],
              [3, 'typeIndex']
            ],
            [1, 2]
          ],
          [
            [7],
            [3, 'humanImg']
          ]
        ])
        Z(z[6])
        Z([3, 'right-btn font data-v-2f6e3365'])
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
                          [1, 'nextStep']
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
        Z([3, '重新上传'])
        Z([
          [7],
          [3, 'showLoading']
        ])
        Z([3, 'loading-box data-v-2f6e3365'])
        Z([3, 'loading-warp data-v-2f6e3365'])
        Z([3, 'loading-top data-v-2f6e3365'])
        Z([3, 'loading-bottom data-v-2f6e3365'])
        Z([3, 'https://eshopfile.zhiyousx.com/173746268882550876.png'])
      })(__WXML_GLOBAL__.ops_cached.$gwx4_XC_17_2);
      return __WXML_GLOBAL__.ops_cached.$gwx4_XC_17_2
    }
    __WXML_GLOBAL__.ops_set.$gwx4_XC_17 = z;
    __WXML_GLOBAL__.ops_init.$gwx4_XC_17 = true;
    var x = ['./union/pages/aiReplacement/components/componentSwiper.wxml', './union/pages/aiReplacement/index.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx4_XC_17_1()
      var c3VB = _n('view')
      var o4VB = _mz(z, 'view', ['bindtouchend', 0, 'bindtouchstart', 1, 'class', 1, 'data-event-opts', 2, 'style', 3], [], e, s, gg)
      var l5VB = _v()
      _(o4VB, l5VB)
      var a6VB = function(e8VB, t7VB, b9VB, gg) {
        var xAWB = _mz(z, 'view', ['bindtap', 9, 'class', 1, 'data-event-opts', 2, 'style', 3], [], e8VB, t7VB, gg)
        var oBWB = _mz(z, 'view', ['catchtap', 13, 'class', 1, 'data-event-opts', 2, 'style', 3], [], e8VB, t7VB, gg)
        var cDWB = _mz(z, 'image', ['class', 17, 'src', 1], [], e8VB, t7VB, gg)
        _(oBWB, cDWB)
        var fCWB = _v()
        _(oBWB, fCWB)
        if (_oz(z, 19, e8VB, t7VB, gg)) {
          fCWB.wxVkey = 1
          var hEWB = _mz(z, 'image', ['class', 20, 'src', 1], [], e8VB, t7VB, gg)
          _(fCWB, hEWB)
        }
        fCWB.wxXCkey = 1
        _(xAWB, oBWB)
        _(b9VB, xAWB)
        return b9VB
      }
      l5VB.wxXCkey = 2
      _2z(z, 7, a6VB, e, s, gg, l5VB, 'item', 'index', 'index')
      _(c3VB, o4VB)
      _(r, c3VB)
      return r
    }
    e_[x[0]] = {
      f: m0,
      j: [],
      i: [],
      ti: [],
      ic: []
    }
    d_[x[1]] = {}
    var m1 = function(e, s, r, gg) {
      var z = gz$gwx4_XC_17_2()
      var cGWB = _n('view')
      _rz(z, cGWB, 'class', 0, e, s, gg)
      var lIWB = _mz(z, 'uni-navbar', ['bind:__l', 1, 'class', 1, 'type', 2, 'vueId', 3], [], e, s, gg)
      _(cGWB, lIWB)
      var aJWB = _n('view')
      _rz(z, aJWB, 'class', 5, e, s, gg)
      var tKWB = _mz(z, 'image', ['mode', -1, 'bindtap', 6, 'class', 1, 'data-event-opts', 2, 'src', 3], [], e, s, gg)
      _(aJWB, tKWB)
      _(cGWB, aJWB)
      var eLWB = _n('view')
      _rz(z, eLWB, 'class', 10, e, s, gg)
      var bMWB = _n('view')
      _rz(z, bMWB, 'class', 11, e, s, gg)
      _(eLWB, bMWB)
      var oNWB = _n('view')
      _rz(z, oNWB, 'class', 12, e, s, gg)
      _(eLWB, oNWB)
      var xOWB = _mz(z, 'view', ['class', 13, 'style', 1], [], e, s, gg)
      var oPWB = _mz(z, 'view', ['class', 15, 'hidden', 1], [], e, s, gg)
      var fQWB = _mz(z, 'component-swiper', ['autoplay', 17, 'bind:__l', 1, 'bind:scrollImg', 2, 'class', 3, 'data-event-opts', 4, 'data-ref', 5, 'smallScreen', 6, 'swiperList', 7, 'type', 8, 'vueId', 9], [], e, s, gg)
      _(oPWB, fQWB)
      _(xOWB, oPWB)
      var cRWB = _mz(z, 'view', ['class', 27, 'hidden', 1], [], e, s, gg)
      var hSWB = _mz(z, 'component-swiper', ['autoplay', 29, 'bind:__l', 1, 'bind:scrollImg', 2, 'class', 3, 'data-event-opts', 4, 'data-ref', 5, 'smallScreen', 6, 'swiperList', 7, 'type', 8, 'vueId', 9], [], e, s, gg)
      _(cRWB, hSWB)
      _(xOWB, cRWB)
      var oTWB = _mz(z, 'view', ['class', 39, 'hidden', 1], [], e, s, gg)
      var cUWB = _v()
      _(oTWB, cUWB)
      if (_oz(z, 41, e, s, gg)) {
        cUWB.wxVkey = 1
        var lWWB = _n('view')
        _rz(z, lWWB, 'class', 42, e, s, gg)
        var aXWB = _mz(z, 'image', ['mode', -1, 'bindtap', 43, 'class', 1, 'data-event-opts', 2, 'src', 3], [], e, s, gg)
        _(lWWB, aXWB)
        var tYWB = _n('view')
        _rz(z, tYWB, 'class', 47, e, s, gg)
        var eZWB = _oz(z, 48, e, s, gg)
        _(tYWB, eZWB)
        _(lWWB, tYWB)
        _(cUWB, lWWB)
      }
      var oVWB = _v()
      _(oTWB, oVWB)
      if (_oz(z, 49, e, s, gg)) {
        oVWB.wxVkey = 1
        var b1WB = _mz(z, 'image', ['class', 50, 'mode', 1, 'src', 2], [], e, s, gg)
        _(oVWB, b1WB)
      }
      cUWB.wxXCkey = 1
      oVWB.wxXCkey = 1
      _(xOWB, oTWB)
      _(eLWB, xOWB)
      _(cGWB, eLWB)
      var o2WB = _n('view')
      _rz(z, o2WB, 'class', 53, e, s, gg)
      var x3WB = _n('view')
      _rz(z, x3WB, 'class', 54, e, s, gg)
      var o4WB = _n('view')
      _rz(z, o4WB, 'class', 55, e, s, gg)
      var f5WB = _mz(z, 'view', ['bindtap', 56, 'class', 1, 'data-event-opts', 2], [], e, s, gg)
      var c6WB = _oz(z, 59, e, s, gg)
      _(f5WB, c6WB)
      _(o4WB, f5WB)
      _(x3WB, o4WB)
      var h7WB = _n('view')
      _rz(z, h7WB, 'class', 60, e, s, gg)
      var c9WB = _mz(z, 'view', ['bindtap', 61, 'class', 1, 'data-event-opts', 2, 'style', 3], [], e, s, gg)
      var o0WB = _oz(z, 65, e, s, gg)
      _(c9WB, o0WB)
      _(h7WB, c9WB)
      var o8WB = _v()
      _(h7WB, o8WB)
      if (_oz(z, 66, e, s, gg)) {
        o8WB.wxVkey = 1
        var lAXB = _mz(z, 'view', ['bindtap', 67, 'class', 1, 'data-event-opts', 2], [], e, s, gg)
        var aBXB = _oz(z, 70, e, s, gg)
        _(lAXB, aBXB)
        _(o8WB, lAXB)
      }
      o8WB.wxXCkey = 1
      _(x3WB, h7WB)
      _(o2WB, x3WB)
      _(cGWB, o2WB)
      var oHWB = _v()
      _(cGWB, oHWB)
      if (_oz(z, 71, e, s, gg)) {
        oHWB.wxVkey = 1
        var tCXB = _n('view')
        _rz(z, tCXB, 'class', 72, e, s, gg)
        var eDXB = _n('view')
        _rz(z, eDXB, 'class', 73, e, s, gg)
        var bEXB = _n('view')
        _rz(z, bEXB, 'class', 74, e, s, gg)
        _(eDXB, bEXB)
        var oFXB = _mz(z, 'image', ['class', 75, 'src', 1], [], e, s, gg)
        _(eDXB, oFXB)
        _(tCXB, eDXB)
        _(oHWB, tCXB)
      }
      oHWB.wxXCkey = 1
      _(r, cGWB)
      return r
    }
    e_[x[1]] = {
      f: m1,
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
        g = "$gwx4_XC_17";
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
if (__vd_version_info__.delayedGwx || false) $gwx4_XC_17();
if (__vd_version_info__.delayedGwx) __wxAppCode__['union/pages/aiReplacement/components/componentSwiper.wxml'] = [$gwx4_XC_17, './union/pages/aiReplacement/components/componentSwiper.wxml'];
else __wxAppCode__['union/pages/aiReplacement/components/componentSwiper.wxml'] = $gwx4_XC_17('./union/pages/aiReplacement/components/componentSwiper.wxml');
if (__vd_version_info__.delayedGwx) __wxAppCode__['union/pages/aiReplacement/index.wxml'] = [$gwx4_XC_17, './union/pages/aiReplacement/index.wxml'];
else __wxAppCode__['union/pages/aiReplacement/index.wxml'] = $gwx4_XC_17('./union/pages/aiReplacement/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__['union/pages/aiReplacement/components/componentSwiper.wxss'] = setCssToHead([".", [1], "swiperPanel{margin:", [0, 0], " auto;overflow:hidden;position:relative;width:", [0, 630], "}\n.", [1], "swiperPanel .", [1], "swiperItem{height:100%;left:0;position:absolute;top:0;transition:all .5s;width:100%}\n.", [1], "swiperPanel .", [1], "swiperItem .", [1], "children{height:100%;margin:", [0, 2], " auto;position:relative}\n.", [1], "swiperPanel .", [1], "swiperItem .", [1], "children .", [1], "pic{border-radius:20px;height:100%;width:100%}\n.", [1], "swiperPanel .", [1], "swiperItem .", [1], "children .", [1], "selected{bottom:10%;height:", [0, 80], ";left:50%;position:absolute;-webkit-transform:translate(-50%);transform:translate(-50%);width:", [0, 80], "}\n.", [1], "swiperPanel .", [1], "swiperItem .", [1], "children .", [1], "name{background:rgba(0,0,0,.5);border-radius:0 0 20px 20px;bottom:0;box-shadow:", [0, 0], " ", [0, 4], " ", [0, 21], " ", [0, 0], " rgba(0,0,0,.07);color:#fff;font-family:Source Han Sans SC;font-size:", [0, 32], ";font-style:normal;font-weight:400;height:", [0, 85], ";left:0;line-height:", [0, 85], ";position:absolute;text-align:center;text-transform:none;width:100%}\n", ], undefined, {
    path: "./union/pages/aiReplacement/components/componentSwiper.wxss"
  });
  __wxAppCode__['union/pages/aiReplacement/index.wxss'] = setCssToHead([".", [1], "replacement_box.", [1], "data-v-2f6e3365{background:linear-gradient(180deg,#ff816c,#ffb2dd);height:100vh;width:100%}\n.", [1], "replacement_box .", [1], "replacement_header.", [1], "data-v-2f6e3365{background-image:url(https://eshopfile.zhiyousx.com/173744609061299511.png);background-repeat:no-repeat;background-size:100% 100%;height:", [0, 560], ";position:absolute;width:100%;z-index:1}\n.", [1], "replacement_box .", [1], "replacement_count-box.", [1], "data-v-2f6e3365{height:100vh;position:relative;width:100%}\n.", [1], "replacement_box .", [1], "replacement_count-top.", [1], "data-v-2f6e3365{background:linear-gradient(180deg,#ffb2dd,#ff816c);height:", [0, 560], ";width:100%}\n.", [1], "replacement_box .", [1], "replacement_count-bottom.", [1], "data-v-2f6e3365{background:linear-gradient(180deg,#ff816c,#ffb2dd);height:calc(100% - ", [0, 560], ");width:100%}\n.", [1], "replacement_box .", [1], "replacement_count.", [1], "data-v-2f6e3365{bottom:", [0, 340], ";height:", [0, 640], ";left:0;position:absolute;right:0;width:100%;z-index:6}\n.", [1], "replacement_box .", [1], "replacement_foot.", [1], "data-v-2f6e3365{background-image:url(https://eshopfile.zhiyousx.com/173744670105753649.png);background-repeat:no-repeat;background-size:100% 100%;bottom:0;height:", [0, 500], ";position:absolute;width:100%}\n.", [1], "replacement_box .", [1], "foot-sub.", [1], "data-v-2f6e3365{height:", [0, 65], ";text-align:center;width:100%}\n.", [1], "replacement_box .", [1], "foot-btn.", [1], "data-v-2f6e3365{background-image:url(https://eshopfile.zhiyousx.com/173742896535667898.png);background-repeat:no-repeat;background-size:100% 100%;color:#ffeaa0;font-family:SerifCN;font-size:", [0, 32], ";font-style:normal;font-weight:700;height:", [0, 65], ";letter-spacing:3px;line-height:", [0, 38], ";line-height:", [0, 56], ";margin:0 auto;text-align:center;text-shadow:0 4px 1px rgba(0,0,0,.1);text-transform:none;width:", [0, 430], "}\n.", [1], "replacement_box .", [1], "left-btn.", [1], "data-v-2f6e3365{background-image:url(https://eshopfile.zhiyousx.com/173744104229870926.png);background-repeat:no-repeat;background-size:100% 100%;height:", [0, 60], ";padding-right:", [0, 10], ";width:", [0, 150], "}\n.", [1], "replacement_box .", [1], "right-btn.", [1], "data-v-2f6e3365{background-image:url(https://eshopfile.zhiyousx.com/173744102823544358.png);background-repeat:no-repeat;background-size:100% 100%;height:", [0, 60], ";padding-left:", [0, 10], ";width:", [0, 150], "}\n.", [1], "replacement_box .", [1], "more-btn.", [1], "data-v-2f6e3365{display:-webkit-flex;display:flex;-webkit-justify-content:space-between;justify-content:space-between;width:100%}\n.", [1], "replacement_box .", [1], "more-btn .", [1], "font.", [1], "data-v-2f6e3365{color:#9b0505;font-family:SerifCN;font-size:", [0, 24], ";font-style:normal;font-weight:700;height:", [0, 52], ";line-height:", [0, 52], ";text-align:center;text-transform:none}\n.", [1], "replacement_box .", [1], "btn-all.", [1], "data-v-2f6e3365{bottom:", [0, 94], ";position:absolute;width:100%}\n.", [1], "replacement_box .", [1], "up-photo-box.", [1], "data-v-2f6e3365{margin-top:", [0, 89], ";width:100%}\n.", [1], "replacement_box .", [1], "up-photo-act.", [1], "data-v-2f6e3365{height:", [0, 560], ";margin-top:", [0, 28], "!important;width:", [0, 454], "}\n.", [1], "replacement_box .", [1], "up-photo-acted.", [1], "data-v-2f6e3365{height:", [0, 640], ";margin-top:", [0, 80], "!important;width:", [0, 500], "}\n.", [1], "replacement_box .", [1], "up-photo-copy.", [1], "data-v-2f6e3365{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-flow:column;flex-flow:column;height:100%;-webkit-justify-content:center;justify-content:center;width:100%}\n.", [1], "replacement_box .", [1], "up-photo.", [1], "data-v-2f6e3365{background-image:url(https://eshopfile.zhiyousx.com/173744312766705168.png);background-repeat:no-repeat;background-size:100% 100%;margin:0 auto;position:relative;text-align:center}\n.", [1], "replacement_box .", [1], "up-photo .", [1], "image.", [1], "data-v-2f6e3365{height:", [0, 380], ";width:", [0, 280], "}\n.", [1], "replacement_box .", [1], "up-photo .", [1], "text.", [1], "data-v-2f6e3365{color:#cf4e4e;font-family:Alibaba PuHuiTi;font-size:", [0, 26], ";font-style:normal;font-weight:400;line-height:", [0, 40], ";margin:", [0, 40], " auto 0;text-align:center;text-transform:none;width:", [0, 340], "}\n.", [1], "replacement_box .", [1], "up-photo .", [1], "image-logo.", [1], "data-v-2f6e3365{border-radius:", [0, 14], ";height:", [0, 590], ";margin:", [0, 25], ";width:", [0, 450], "}\n.", [1], "replacement_box .", [1], "up-photo .", [1], "image-logo1.", [1], "data-v-2f6e3365{border-radius:", [0, 14], ";height:", [0, 510], ";margin:", [0, 25], ";width:", [0, 404], "}\n.", [1], "replacement_box .", [1], "loading-box.", [1], "data-v-2f6e3365{background-color:rgba(0,0,0,.6);height:100%;position:fixed;top:0;width:100%;z-index:10}\n.", [1], "replacement_box .", [1], "loading-box .", [1], "loading-warp.", [1], "data-v-2f6e3365{bottom:0;height:", [0, 500], ";left:0;margin:auto;position:absolute;right:0;text-align:center;top:0;width:", [0, 350], "}\n.", [1], "replacement_box .", [1], "loading-box .", [1], "loading-top.", [1], "data-v-2f6e3365{-webkit-animation:play-sprite-data-v-2f6e3365 2s steps(60) infinite;animation:play-sprite-data-v-2f6e3365 2s steps(60) infinite;background-image:url(https://eshopfile.zhiyousx.com/173746216010747207.png);background-repeat:no-repeat;background-size:10980px 180px;height:180px;width:180px}\n@-webkit-keyframes play-sprite-data-v-2f6e3365{from{background-position-x:0}\nto{background-position-x:-10800px}\n}@keyframes play-sprite-data-v-2f6e3365{from{background-position-x:0}\nto{background-position-x:-10800px}\n}.", [1], "replacement_box .", [1], "loading-bottom.", [1], "data-v-2f6e3365{height:", [0, 96], ";margin-top:", [0, 25], ";width:", [0, 181], "}\n.", [1], "replacement_header-icon.", [1], "data-v-2f6e3365{bottom:18px;height:", [0, 68], ";position:absolute;right:0;width:", [0, 222], "}\n", ], undefined, {
    path: "./union/pages/aiReplacement/index.wxss"
  });
}
