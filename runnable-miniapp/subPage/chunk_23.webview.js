$gwx2_XC_16 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx2_XC_16 || [];

    function gz$gwx2_XC_16_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx2_XC_16_1) return __WXML_GLOBAL__.ops_cached.$gwx2_XC_16_1
      __WXML_GLOBAL__.ops_cached.$gwx2_XC_16_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, 'data-v-d5e135d6'])
        Z([3, '#FFFFFF'])
        Z([3, '__l'])
        Z(z[0])
        Z([1, false])
        Z([3, 'fixed'])
        Z([3, '2ccb47f6-1'])
        Z([
          [4],
          [
            [5],
            [1, 'default']
          ]
        ])
        Z([3, '__e'])
        Z([3, 'searchBox data-v-d5e135d6'])
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
                          [1, 'goSearch']
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
        Z(z[0])
        Z([3, '#c5c5c5'])
        Z([3, '16'])
        Z([3, 'search'])
        Z(z[8])
        Z(z[8])
        Z([3, 'searchInput data-v-d5e135d6'])
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
                    [1, 'input']
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
                            [1, '__set_model']
                          ],
                          [
                            [4],
                            [
                              [5],
                              [
                                [5],
                                [
                                  [5],
                                  [
                                    [5],
                                    [1, '']
                                  ],
                                  [1, 'searchText']
                                ],
                                [1, '$event']
                              ],
                              [
                                [4],
                                [
                                  [5],
                                  [1, 'trim']
                                ]
                              ]
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
                  [1, 'blur']
                ],
                [
                  [4],
                  [
                    [5],
                    [
                      [4],
                      [
                        [5],
                        [1, '$forceUpdate']
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ])
        Z([1, true])
        Z([3, '搜索商品'])
        Z([3, 'color:#999999;font-weight:400'])
        Z([3, 'text'])
        Z([
          [7],
          [3, 'searchText']
        ])
        Z([3, 'nav data-v-d5e135d6'])
        Z([3, 'sortNav data-v-d5e135d6'])
        Z([3, 'index'])
        Z([3, 'item'])
        Z([
          [6],
          [
            [7],
            [3, '$root']
          ],
          [3, 'l0']
        ])
        Z(z[26])
        Z(z[8])
        Z([
          [4],
          [
            [5],
            [
              [5],
              [
                [5],
                [1, 'navItem']
              ],
              [1, 'data-v-d5e135d6']
            ],
            [
              [2, '?:'],
              [
                [2, '==='],
                [
                  [7],
                  [3, 'index']
                ],
                [
                  [7],
                  [3, 'sortIdx']
                ]
              ],
              [1, 'navItemActive'],
              [1, '']
            ]
          ]
        ])
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
                          [1, 'sortTab']
                        ],
                        [
                          [4],
                          [
                            [5],
                            [
                              [7],
                              [3, 'index']
                            ]
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
              [6],
              [
                [7],
                [3, 'item']
              ],
              [3, '$orig']
            ]
          ],
          [1, '']
        ]])
        Z([
          [2, '==='],
          [
            [7],
            [3, 'index']
          ],
          [
            [2, '-'],
            [
              [6],
              [
                [7],
                [3, '$root']
              ],
              [3, 'g0']
            ],
            [1, 1]
          ]
        ])
        Z([
          [4],
          [
            [5],
            [
              [5],
              [
                [5],
                [1, 'sanjiaoxing1']
              ],
              [1, 'data-v-d5e135d6']
            ],
            [
              [2, '?:'],
              [
                [6],
                [
                  [7],
                  [3, 'item']
                ],
                [3, 'g1']
              ],
              [1, 'sanjiaoxing1y'],
              [1, '']
            ]
          ]
        ])
        Z([
          [2, '==='],
          [
            [7],
            [3, 'index']
          ],
          [
            [2, '-'],
            [
              [6],
              [
                [7],
                [3, '$root']
              ],
              [3, 'g2']
            ],
            [1, 1]
          ]
        ])
        Z([
          [4],
          [
            [5],
            [
              [5],
              [
                [5],
                [1, 'sanjiaoxing2']
              ],
              [1, 'data-v-d5e135d6']
            ],
            [
              [2, '?:'],
              [
                [6],
                [
                  [7],
                  [3, 'item']
                ],
                [3, 'g3']
              ],
              [1, 'sanjiaoxing2y'],
              [1, '']
            ]
          ]
        ])
        Z([3, 'navIcon data-v-d5e135d6'])
        Z([
          [2, '=='],
          [
            [7],
            [3, 'listTypeIcon']
          ],
          [1, 0]
        ])
        Z(z[8])
        Z(z[0])
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
                          [1, 'listType']
                        ],
                        [
                          [4],
                          [
                            [5],
                            [1, 0]
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
        Z([3, '../../static/images/Switch_i@2x.png'])
        Z(z[8])
        Z(z[0])
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
                          [1, 'listType']
                        ],
                        [
                          [4],
                          [
                            [5],
                            [1, 1]
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
        Z([3, '../../static/images/Switch_i2@2x.png'])
        Z([
          [2, '==='],
          [
            [7],
            [3, 'listTypeIcon']
          ],
          [1, 0]
        ])
        Z([3, 'goodsBox data-v-d5e135d6'])
        Z(z[26])
        Z(z[27])
        Z([
          [6],
          [
            [7],
            [3, '$root']
          ],
          [3, 'l1']
        ])
        Z(z[26])
        Z(z[0])
        Z(z[8])
        Z([3, 'goodsItem data-v-d5e135d6'])
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
                          [
                            [5],
                            [1, 'goGoodsDetails']
                          ],
                          [
                            [4],
                            [
                              [5],
                              [1, '$0']
                            ]
                          ]
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
                                  [4],
                                  [
                                    [5],
                                    [
                                      [5],
                                      [
                                        [5],
                                        [
                                          [5],
                                          [1, 'goodsList']
                                        ],
                                        [1, '']
                                      ],
                                      [
                                        [7],
                                        [3, 'index']
                                      ]
                                    ],
                                    [1, 'itemId']
                                  ]
                                ]
                              ]
                            ]
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
        Z(z[2])
        Z([3, '8'])
        Z(z[0])
        Z([3, '306'])
        Z([
          [6],
          [
            [6],
            [
              [7],
              [3, 'item']
            ],
            [3, '$orig']
          ],
          [3, 'defaultPicUrl']
        ])
        Z([3, 'aspectFill'])
        Z(z[4])
        Z([
          [2, '+'],
          [1, '2ccb47f6-2-'],
          [
            [7],
            [3, 'index']
          ]
        ])
        Z([3, 'goodsInfo data-v-d5e135d6'])
        Z([3, 'itemTitle multilineText2 data-v-d5e135d6'])
        Z([a, [
          [6],
          [
            [6],
            [
              [7],
              [3, 'item']
            ],
            [3, '$orig']
          ],
          [3, 'itemTitle']
        ]])
        Z([
          [6],
          [
            [6],
            [
              [7],
              [3, 'item']
            ],
            [3, '$orig']
          ],
          [3, 'itemSubTitle']
        ])
        Z([3, 'itemSubTitle singleLineText data-v-d5e135d6'])
        Z([a, [
          [6],
          [
            [6],
            [
              [7],
              [3, 'item']
            ],
            [3, '$orig']
          ],
          [3, 'itemSubTitle']
        ]])
        Z([3, 'yh-box data-v-d5e135d6'])
        Z(z[26])
        Z([3, 'huoDongObj'])
        Z([
          [6],
          [
            [6],
            [
              [7],
              [3, 'item']
            ],
            [3, '$orig']
          ],
          [3, 'huoDongArr']
        ])
        Z([
          [2, '<'],
          [
            [7],
            [3, 'index']
          ],
          [1, 2]
        ])
        Z([
          [2, '=='],
          [
            [6],
            [
              [7],
              [3, 'huoDongObj']
            ],
            [3, 'type']
          ],
          [1, '秒杀']
        ])
        Z([3, 'miao-sha data-v-d5e135d6'])
        Z([3, 'https://eshopfile.zhiyousx.com/2021091318044528261.png'])
        Z([
          [2, '=='],
          [
            [6],
            [
              [7],
              [3, 'huoDongObj']
            ],
            [3, 'type']
          ],
          [1, '优惠券']
        ])
        Z([3, 'itemRuter data-v-d5e135d6'])
        Z([
          [2, '=='],
          [
            [6],
            [
              [6],
              [
                [7],
                [3, 'item']
              ],
              [3, '$orig']
            ],
            [3, 'couponFullAmount']
          ],
          [1, 0]
        ])
        Z(z[0])
        Z([a, [
          [2, '+'],
          [1, '领券减'],
          [
            [6],
            [
              [6],
              [
                [7],
                [3, 'item']
              ],
              [3, '$orig']
            ],
            [3, 'couponAmount']
          ]
        ]])
        Z(z[0])
        Z([a, [
          [2, '+'],
          [
            [2, '+'],
            [
              [2, '+'],
              [1, '满'],
              [
                [6],
                [
                  [6],
                  [
                    [7],
                    [3, 'item']
                  ],
                  [3, '$orig']
                ],
                [3, 'couponFullAmount']
              ]
            ],
            [1, '减']
          ],
          [
            [6],
            [
              [6],
              [
                [7],
                [3, 'item']
              ],
              [3, '$orig']
            ],
            [3, 'couponAmount']
          ]
        ]])
        Z([
          [2, '=='],
          [
            [6],
            [
              [7],
              [3, 'huoDongObj']
            ],
            [3, 'type']
          ],
          [1, '返现']
        ])
        Z(z[81])
        Z([a, [
          [2, '+'],
          [1, '返￥'],
          [
            [6],
            [
              [6],
              [
                [7],
                [3, 'item']
              ],
              [3, '$orig']
            ],
            [3, 'cashBackAmount']
          ]
        ]])
        Z([
          [2, '=='],
          [
            [6],
            [
              [7],
              [3, 'huoDongObj']
            ],
            [3, 'type']
          ],
          [1, '分享赚']
        ])
        Z(z[81])
        Z([a, [
          [2, '+'],
          [1, '分享赚￥'],
          [
            [6],
            [
              [6],
              [
                [7],
                [3, 'item']
              ],
              [3, '$orig']
            ],
            [3, 'maxReward']
          ]
        ]])
        Z([3, 'numBox data-v-d5e135d6'])
        Z([
          [2, '==='],
          [
            [6],
            [
              [6],
              [
                [7],
                [3, 'item']
              ],
              [3, '$orig']
            ],
            [3, 'productType']
          ],
          [1, 0]
        ])
        Z([3, 'num-pic data-v-d5e135d6'])
        Z([a, [
          [2, '+'],
          [
            [2, '+'],
            [1, '￥'],
            [
              [6],
              [
                [6],
                [
                  [7],
                  [3, 'item']
                ],
                [3, '$orig']
              ],
              [3, 'minPrice']
            ]
          ],
          [
            [2, '?:'],
            [
              [2, '==='],
              [
                [6],
                [
                  [6],
                  [
                    [7],
                    [3, 'item']
                  ],
                  [3, '$orig']
                ],
                [3, 'priceType']
              ],
              [1, 1]
            ],
            [1, '起'],
            [1, '']
          ]
        ]])
        Z([
          [2, '==='],
          [
            [6],
            [
              [6],
              [
                [7],
                [3, 'item']
              ],
              [3, '$orig']
            ],
            [3, 'productType']
          ],
          [1, 1]
        ])
        Z(z[95])
        Z([a, [
          [2, '+'],
          [
            [2, '+'],
            [1, '￥'],
            [
              [6],
              [
                [6],
                [
                  [7],
                  [3, 'item']
                ],
                [3, '$orig']
              ],
              [3, 'marketPrice']
            ]
          ],
          [1, '起']
        ]])
        Z(z[93])
        Z([3, 'num-ys data-v-d5e135d6'])
        Z([a, [
          [2, '+'],
          [
            [6],
            [
              [7],
              [3, 'item']
            ],
            [3, 'f0']
          ],
          [1, '人付款']
        ]])
        Z([3, 'goodsBoxs data-v-d5e135d6'])
        Z(z[26])
        Z(z[27])
        Z([
          [6],
          [
            [7],
            [3, '$root']
          ],
          [3, 'l2']
        ])
        Z(z[26])
        Z(z[0])
        Z(z[8])
        Z(z[56])
        Z(z[57])
        Z([3, 'itemImg data-v-d5e135d6'])
        Z(z[2])
        Z(z[59])
        Z(z[0])
        Z([3, '192'])
        Z(z[62])
        Z([3, 'scaleToFill'])
        Z(z[4])
        Z([
          [2, '+'],
          [1, '2ccb47f6-3-'],
          [
            [7],
            [3, 'index']
          ]
        ])
        Z([3, 'itemLeft data-v-d5e135d6'])
        Z(z[67])
        Z([a, z[68][1]])
        Z(z[69])
        Z(z[70])
        Z([a, z[71][1]])
        Z(z[72])
        Z(z[26])
        Z(z[74])
        Z(z[75])
        Z(z[76])
        Z(z[77])
        Z(z[78])
        Z(z[79])
        Z(z[80])
        Z(z[81])
        Z(z[82])
        Z(z[0])
        Z([a, z[84][1]])
        Z(z[0])
        Z([a, z[86][1]])
        Z(z[87])
        Z(z[81])
        Z([a, z[89][1]])
        Z(z[90])
        Z(z[81])
        Z([a, z[92][1]])
        Z(z[93])
        Z([3, 'numBox-l data-v-d5e135d6'])
        Z(z[94])
        Z(z[95])
        Z([a, z[96][1]])
        Z(z[97])
        Z(z[95])
        Z([a, z[99][1]])
        Z(z[101])
        Z([a, [
          [2, '+'],
          [
            [6],
            [
              [7],
              [3, 'item']
            ],
            [3, 'f1']
          ],
          [1, '人付款']
        ]])
        Z([
          [6],
          [
            [7],
            [3, '$root']
          ],
          [3, 'g4']
        ])
        Z([3, 'empty data-v-d5e135d6'])
        Z(z[2])
        Z(z[0])
        Z([3, 'https://eshopfile.zhiyousx.com/noGoods@2x.png'])
        Z([3, '暂无数据'])
        Z([3, '2ccb47f6-4'])
        Z([3, 'loadMore data-v-d5e135d6'])
        Z([3, '#f7f7f7'])
        Z(z[2])
        Z(z[0])
        Z([3, '#ccc'])
        Z([
          [2, '!'],
          [
            [6],
            [
              [7],
              [3, '$root']
            ],
            [3, 'g5']
          ]
        ])
        Z(z[169])
        Z([
          [6],
          [
            [7],
            [3, '$root']
          ],
          [3, 'a0']
        ])
        Z([
          [7],
          [3, 'loadMore']
        ])
        Z([3, '2ccb47f6-5'])
      })(__WXML_GLOBAL__.ops_cached.$gwx2_XC_16_1);
      return __WXML_GLOBAL__.ops_cached.$gwx2_XC_16_1
    }
    __WXML_GLOBAL__.ops_set.$gwx2_XC_16 = z;
    __WXML_GLOBAL__.ops_init.$gwx2_XC_16 = true;
    var x = ['./subPage/pages/goodslist/goodslist.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx2_XC_16_1()
      var eTAB = _n('view')
      _rz(z, eTAB, 'class', 0, e, s, gg)
      var xWAB = _mz(z, 'uni-navbar', ['bgColor', 1, 'bind:__l', 1, 'class', 2, 'shadow', 3, 'type', 4, 'vueId', 5, 'vueSlots', 6], [], e, s, gg)
      var oXAB = _mz(z, 'view', ['bindtap', 8, 'class', 1, 'data-event-opts', 2], [], e, s, gg)
      var fYAB = _mz(z, 'icon', ['class', 11, 'color', 1, 'size', 2, 'type', 3], [], e, s, gg)
      _(oXAB, fYAB)
      var cZAB = _mz(z, 'input', ['bindblur', 15, 'bindinput', 1, 'class', 2, 'data-event-opts', 3, 'disabled', 4, 'placeholder', 5, 'placeholderStyle', 6, 'type', 7, 'value', 8], [], e, s, gg)
      _(oXAB, cZAB)
      _(xWAB, oXAB)
      _(eTAB, xWAB)
      var h1AB = _n('view')
      _rz(z, h1AB, 'class', 24, e, s, gg)
      var o2AB = _n('view')
      _rz(z, o2AB, 'class', 25, e, s, gg)
      var c3AB = _v()
      _(o2AB, c3AB)
      var o4AB = function(a6AB, l5AB, t7AB, gg) {
        var b9AB = _mz(z, 'view', ['bindtap', 30, 'class', 1, 'data-event-opts', 2], [], a6AB, l5AB, gg)
        var oBBB = _oz(z, 33, a6AB, l5AB, gg)
        _(b9AB, oBBB)
        var o0AB = _v()
        _(b9AB, o0AB)
        if (_oz(z, 34, a6AB, l5AB, gg)) {
          o0AB.wxVkey = 1
          var fCBB = _n('view')
          _rz(z, fCBB, 'class', 35, a6AB, l5AB, gg)
          _(o0AB, fCBB)
        }
        var xABB = _v()
        _(b9AB, xABB)
        if (_oz(z, 36, a6AB, l5AB, gg)) {
          xABB.wxVkey = 1
          var cDBB = _n('view')
          _rz(z, cDBB, 'class', 37, a6AB, l5AB, gg)
          _(xABB, cDBB)
        }
        o0AB.wxXCkey = 1
        xABB.wxXCkey = 1
        _(t7AB, b9AB)
        return t7AB
      }
      c3AB.wxXCkey = 2
      _2z(z, 28, o4AB, e, s, gg, c3AB, 'item', 'index', 'index')
      _(h1AB, o2AB)
      var hEBB = _n('view')
      _rz(z, hEBB, 'class', 38, e, s, gg)
      var oFBB = _v()
      _(hEBB, oFBB)
      if (_oz(z, 39, e, s, gg)) {
        oFBB.wxVkey = 1
        var cGBB = _mz(z, 'image', ['bindtap', 40, 'class', 1, 'data-event-opts', 2, 'src', 3], [], e, s, gg)
        _(oFBB, cGBB)
      } else {
        oFBB.wxVkey = 2
        var oHBB = _mz(z, 'image', ['bindtap', 44, 'class', 1, 'data-event-opts', 2, 'src', 3], [], e, s, gg)
        _(oFBB, oHBB)
      }
      oFBB.wxXCkey = 1
      _(h1AB, hEBB)
      _(eTAB, h1AB)
      var bUAB = _v()
      _(eTAB, bUAB)
      if (_oz(z, 48, e, s, gg)) {
        bUAB.wxVkey = 1
        var lIBB = _n('view')
        _rz(z, lIBB, 'class', 49, e, s, gg)
        var aJBB = _v()
        _(lIBB, aJBB)
        var tKBB = function(bMBB, eLBB, oNBB, gg) {
          var oPBB = _mz(z, 'view', ['bindtap', 55, 'class', 1, 'data-event-opts', 2], [], bMBB, eLBB, gg)
          var fQBB = _mz(z, 'u-lazy-load', ['bind:__l', 58, 'borderRadius', 1, 'class', 2, 'height', 3, 'image', 4, 'imgMode', 5, 'isEffect', 6, 'vueId', 7], [], bMBB, eLBB, gg)
          _(oPBB, fQBB)
          var cRBB = _n('view')
          _rz(z, cRBB, 'class', 66, bMBB, eLBB, gg)
          var oTBB = _n('view')
          _rz(z, oTBB, 'class', 67, bMBB, eLBB, gg)
          var cUBB = _oz(z, 68, bMBB, eLBB, gg)
          _(oTBB, cUBB)
          _(cRBB, oTBB)
          var hSBB = _v()
          _(cRBB, hSBB)
          if (_oz(z, 69, bMBB, eLBB, gg)) {
            hSBB.wxVkey = 1
            var oVBB = _n('view')
            _rz(z, oVBB, 'class', 70, bMBB, eLBB, gg)
            var lWBB = _oz(z, 71, bMBB, eLBB, gg)
            _(oVBB, lWBB)
            _(hSBB, oVBB)
          }
          var aXBB = _n('view')
          _rz(z, aXBB, 'class', 72, bMBB, eLBB, gg)
          var tYBB = _v()
          _(aXBB, tYBB)
          var eZBB = function(o2BB, b1BB, x3BB, gg) {
            var f5BB = _v()
            _(x3BB, f5BB)
            if (_oz(z, 76, o2BB, b1BB, gg)) {
              f5BB.wxVkey = 1
              var c6BB = _v()
              _(f5BB, c6BB)
              if (_oz(z, 77, o2BB, b1BB, gg)) {
                c6BB.wxVkey = 1
                var o0BB = _mz(z, 'image', ['class', 78, 'src', 1], [], o2BB, b1BB, gg)
                _(c6BB, o0BB)
              }
              var h7BB = _v()
              _(f5BB, h7BB)
              if (_oz(z, 80, o2BB, b1BB, gg)) {
                h7BB.wxVkey = 1
                var lACB = _n('text')
                _rz(z, lACB, 'class', 81, o2BB, b1BB, gg)
                var aBCB = _v()
                _(lACB, aBCB)
                if (_oz(z, 82, o2BB, b1BB, gg)) {
                  aBCB.wxVkey = 1
                  var tCCB = _oz(z, 84, o2BB, b1BB, gg)
                  _(aBCB, tCCB)
                } else {
                  aBCB.wxVkey = 2
                  var eDCB = _oz(z, 86, o2BB, b1BB, gg)
                  _(aBCB, eDCB)
                }
                aBCB.wxXCkey = 1
                _(h7BB, lACB)
              }
              var o8BB = _v()
              _(f5BB, o8BB)
              if (_oz(z, 87, o2BB, b1BB, gg)) {
                o8BB.wxVkey = 1
                var bECB = _n('text')
                _rz(z, bECB, 'class', 88, o2BB, b1BB, gg)
                var oFCB = _oz(z, 89, o2BB, b1BB, gg)
                _(bECB, oFCB)
                _(o8BB, bECB)
              }
              var c9BB = _v()
              _(f5BB, c9BB)
              if (_oz(z, 90, o2BB, b1BB, gg)) {
                c9BB.wxVkey = 1
                var xGCB = _n('text')
                _rz(z, xGCB, 'class', 91, o2BB, b1BB, gg)
                var oHCB = _oz(z, 92, o2BB, b1BB, gg)
                _(xGCB, oHCB)
                _(c9BB, xGCB)
              }
              c6BB.wxXCkey = 1
              h7BB.wxXCkey = 1
              o8BB.wxXCkey = 1
              c9BB.wxXCkey = 1
            }
            f5BB.wxXCkey = 1
            return x3BB
          }
          tYBB.wxXCkey = 2
          _2z(z, 75, eZBB, bMBB, eLBB, gg, tYBB, 'huoDongObj', 'index', '')
          _(cRBB, aXBB)
          var fICB = _n('view')
          _rz(z, fICB, 'class', 93, bMBB, eLBB, gg)
          var cJCB = _v()
          _(fICB, cJCB)
          if (_oz(z, 94, bMBB, eLBB, gg)) {
            cJCB.wxVkey = 1
            var oLCB = _n('text')
            _rz(z, oLCB, 'class', 95, bMBB, eLBB, gg)
            var cMCB = _oz(z, 96, bMBB, eLBB, gg)
            _(oLCB, cMCB)
            _(cJCB, oLCB)
          }
          var hKCB = _v()
          _(fICB, hKCB)
          if (_oz(z, 97, bMBB, eLBB, gg)) {
            hKCB.wxVkey = 1
            var oNCB = _n('text')
            _rz(z, oNCB, 'class', 98, bMBB, eLBB, gg)
            var lOCB = _oz(z, 99, bMBB, eLBB, gg)
            _(oNCB, lOCB)
            _(hKCB, oNCB)
          }
          cJCB.wxXCkey = 1
          hKCB.wxXCkey = 1
          _(cRBB, fICB)
          var aPCB = _n('view')
          _rz(z, aPCB, 'class', 100, bMBB, eLBB, gg)
          var tQCB = _n('text')
          _rz(z, tQCB, 'class', 101, bMBB, eLBB, gg)
          var eRCB = _oz(z, 102, bMBB, eLBB, gg)
          _(tQCB, eRCB)
          _(aPCB, tQCB)
          _(cRBB, aPCB)
          hSBB.wxXCkey = 1
          _(oPBB, cRBB)
          _(oNBB, oPBB)
          return oNBB
        }
        aJBB.wxXCkey = 4
        _2z(z, 52, tKBB, e, s, gg, aJBB, 'item', 'index', 'index')
        _(bUAB, lIBB)
      } else {
        bUAB.wxVkey = 2
        var bSCB = _n('view')
        _rz(z, bSCB, 'class', 103, e, s, gg)
        var oTCB = _v()
        _(bSCB, oTCB)
        var xUCB = function(fWCB, oVCB, cXCB, gg) {
          var oZCB = _mz(z, 'view', ['bindtap', 109, 'class', 1, 'data-event-opts', 2], [], fWCB, oVCB, gg)
          var c1CB = _n('view')
          _rz(z, c1CB, 'class', 112, fWCB, oVCB, gg)
          var o2CB = _mz(z, 'u-lazy-load', ['bind:__l', 113, 'borderRadius', 1, 'class', 2, 'height', 3, 'image', 4, 'imgMode', 5, 'isEffect', 6, 'vueId', 7], [], fWCB, oVCB, gg)
          _(c1CB, o2CB)
          _(oZCB, c1CB)
          var l3CB = _n('view')
          _rz(z, l3CB, 'class', 121, fWCB, oVCB, gg)
          var t5CB = _n('view')
          _rz(z, t5CB, 'class', 122, fWCB, oVCB, gg)
          var e6CB = _oz(z, 123, fWCB, oVCB, gg)
          _(t5CB, e6CB)
          _(l3CB, t5CB)
          var a4CB = _v()
          _(l3CB, a4CB)
          if (_oz(z, 124, fWCB, oVCB, gg)) {
            a4CB.wxVkey = 1
            var b7CB = _n('view')
            _rz(z, b7CB, 'class', 125, fWCB, oVCB, gg)
            var o8CB = _oz(z, 126, fWCB, oVCB, gg)
            _(b7CB, o8CB)
            _(a4CB, b7CB)
          }
          var x9CB = _n('view')
          _rz(z, x9CB, 'class', 127, fWCB, oVCB, gg)
          var o0CB = _v()
          _(x9CB, o0CB)
          var fADB = function(hCDB, cBDB, oDDB, gg) {
            var oFDB = _v()
            _(oDDB, oFDB)
            if (_oz(z, 131, hCDB, cBDB, gg)) {
              oFDB.wxVkey = 1
              var lGDB = _v()
              _(oFDB, lGDB)
              if (_oz(z, 132, hCDB, cBDB, gg)) {
                lGDB.wxVkey = 1
                var bKDB = _mz(z, 'image', ['class', 133, 'src', 1], [], hCDB, cBDB, gg)
                _(lGDB, bKDB)
              }
              var aHDB = _v()
              _(oFDB, aHDB)
              if (_oz(z, 135, hCDB, cBDB, gg)) {
                aHDB.wxVkey = 1
                var oLDB = _n('text')
                _rz(z, oLDB, 'class', 136, hCDB, cBDB, gg)
                var xMDB = _v()
                _(oLDB, xMDB)
                if (_oz(z, 137, hCDB, cBDB, gg)) {
                  xMDB.wxVkey = 1
                  var oNDB = _oz(z, 139, hCDB, cBDB, gg)
                  _(xMDB, oNDB)
                } else {
                  xMDB.wxVkey = 2
                  var fODB = _oz(z, 141, hCDB, cBDB, gg)
                  _(xMDB, fODB)
                }
                xMDB.wxXCkey = 1
                _(aHDB, oLDB)
              }
              var tIDB = _v()
              _(oFDB, tIDB)
              if (_oz(z, 142, hCDB, cBDB, gg)) {
                tIDB.wxVkey = 1
                var cPDB = _n('text')
                _rz(z, cPDB, 'class', 143, hCDB, cBDB, gg)
                var hQDB = _oz(z, 144, hCDB, cBDB, gg)
                _(cPDB, hQDB)
                _(tIDB, cPDB)
              }
              var eJDB = _v()
              _(oFDB, eJDB)
              if (_oz(z, 145, hCDB, cBDB, gg)) {
                eJDB.wxVkey = 1
                var oRDB = _n('text')
                _rz(z, oRDB, 'class', 146, hCDB, cBDB, gg)
                var cSDB = _oz(z, 147, hCDB, cBDB, gg)
                _(oRDB, cSDB)
                _(eJDB, oRDB)
              }
              lGDB.wxXCkey = 1
              aHDB.wxXCkey = 1
              tIDB.wxXCkey = 1
              eJDB.wxXCkey = 1
            }
            oFDB.wxXCkey = 1
            return oDDB
          }
          o0CB.wxXCkey = 2
          _2z(z, 130, fADB, fWCB, oVCB, gg, o0CB, 'huoDongObj', 'index', '')
          _(l3CB, x9CB)
          var oTDB = _n('view')
          _rz(z, oTDB, 'class', 148, fWCB, oVCB, gg)
          var lUDB = _n('view')
          _rz(z, lUDB, 'class', 149, fWCB, oVCB, gg)
          var aVDB = _v()
          _(lUDB, aVDB)
          if (_oz(z, 150, fWCB, oVCB, gg)) {
            aVDB.wxVkey = 1
            var eXDB = _n('text')
            _rz(z, eXDB, 'class', 151, fWCB, oVCB, gg)
            var bYDB = _oz(z, 152, fWCB, oVCB, gg)
            _(eXDB, bYDB)
            _(aVDB, eXDB)
          }
          var tWDB = _v()
          _(lUDB, tWDB)
          if (_oz(z, 153, fWCB, oVCB, gg)) {
            tWDB.wxVkey = 1
            var oZDB = _n('text')
            _rz(z, oZDB, 'class', 154, fWCB, oVCB, gg)
            var x1DB = _oz(z, 155, fWCB, oVCB, gg)
            _(oZDB, x1DB)
            _(tWDB, oZDB)
          }
          aVDB.wxXCkey = 1
          tWDB.wxXCkey = 1
          _(oTDB, lUDB)
          var o2DB = _n('text')
          _rz(z, o2DB, 'class', 156, fWCB, oVCB, gg)
          var f3DB = _oz(z, 157, fWCB, oVCB, gg)
          _(o2DB, f3DB)
          _(oTDB, o2DB)
          _(l3CB, oTDB)
          a4CB.wxXCkey = 1
          _(oZCB, l3CB)
          _(cXCB, oZCB)
          return cXCB
        }
        oTCB.wxXCkey = 4
        _2z(z, 106, xUCB, e, s, gg, oTCB, 'item', 'index', 'index')
        _(bUAB, bSCB)
      }
      var oVAB = _v()
      _(eTAB, oVAB)
      if (_oz(z, 158, e, s, gg)) {
        oVAB.wxVkey = 1
        var c4DB = _n('view')
        _rz(z, c4DB, 'class', 159, e, s, gg)
        var h5DB = _mz(z, 'empty-state', ['bind:__l', 160, 'class', 1, 'imgUrl', 2, 'text', 3, 'vueId', 4], [], e, s, gg)
        _(c4DB, h5DB)
        _(oVAB, c4DB)
      }
      var o6DB = _n('view')
      _rz(z, o6DB, 'class', 165, e, s, gg)
      var c7DB = _mz(z, 'u-loadmore', ['bgColor', 166, 'bind:__l', 1, 'class', 2, 'color', 3, 'data-custom-hidden', 4, 'iconColor', 5, 'loadText', 6, 'status', 7, 'vueId', 8], [], e, s, gg)
      _(o6DB, c7DB)
      _(eTAB, o6DB)
      bUAB.wxXCkey = 1
      bUAB.wxXCkey = 3
      bUAB.wxXCkey = 3
      oVAB.wxXCkey = 1
      oVAB.wxXCkey = 3
      _(r, eTAB)
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
        g = "$gwx2_XC_16";
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
if (__vd_version_info__.delayedGwx || false) $gwx2_XC_16();
if (__vd_version_info__.delayedGwx) __wxAppCode__['subPage/pages/goodslist/goodslist.wxml'] = [$gwx2_XC_16, './subPage/pages/goodslist/goodslist.wxml'];
else __wxAppCode__['subPage/pages/goodslist/goodslist.wxml'] = $gwx2_XC_16('./subPage/pages/goodslist/goodslist.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__['subPage/pages/goodslist/goodslist.wxss'] = setCssToHead([".", [1], "searchBox.", [1], "data-v-d5e135d6{-webkit-align-items:center;align-items:center;background-color:#f3f3f3;border-radius:", [0, 31], ";display:-webkit-flex;display:flex;height:", [0, 62], ";margin-right:", [0, 130], ";padding:0 ", [0, 30], ";width:", [0, 480], "}\n.", [1], "searchBox .", [1], "searchInput.", [1], "data-v-d5e135d6{-webkit-flex:1;flex:1;font-size:", [0, 26], ";margin-left:", [0, 15], "}\n.", [1], "nav.", [1], "data-v-d5e135d6{background-color:#fff}\n.", [1], "nav .", [1], "sortNav.", [1], "data-v-d5e135d6,.", [1], "nav.", [1], "data-v-d5e135d6{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex}\n.", [1], "nav .", [1], "sortNav.", [1], "data-v-d5e135d6{-webkit-flex:9;flex:9;height:", [0, 72], ";-webkit-justify-content:space-around;justify-content:space-around;padding:0 ", [0, 30], "}\n.", [1], "nav .", [1], "sortNav .", [1], "navItem.", [1], "data-v-d5e135d6{position:relative}\n.", [1], "nav .", [1], "sortNav .", [1], "navItem .", [1], "sanjiaoxing1.", [1], "data-v-d5e135d6{border-bottom:", [0, 8], " solid #999;border-left:", [0, 8], " solid transparent;border-right:", [0, 8], " solid transparent;height:0;position:absolute;right:", [0, -20], ";top:", [0, 10], ";width:0}\n.", [1], "nav .", [1], "sortNav .", [1], "navItem .", [1], "sanjiaoxing1y.", [1], "data-v-d5e135d6{border-bottom:", [0, 8], " solid #ff4643}\n.", [1], "nav .", [1], "sortNav .", [1], "navItem .", [1], "sanjiaoxing2.", [1], "data-v-d5e135d6{border-left:", [0, 8], " solid transparent;border-right:", [0, 8], " solid transparent;border-top:", [0, 8], " solid #999;height:0;position:absolute;right:", [0, -20], ";top:", [0, 22], ";width:0}\n.", [1], "nav .", [1], "sortNav .", [1], "navItem .", [1], "sanjiaoxing2y.", [1], "data-v-d5e135d6{border-top:", [0, 8], " solid #ff4643}\n.", [1], "nav .", [1], "sortNav .", [1], "navItemActive.", [1], "data-v-d5e135d6{background:url(https://eshopfile.zhiyousx.com/170065288322605070.png) bottom no-repeat;background-size:", [0, 44], " ", [0, 20], ";border-radius:", [0, 10], ";font-weight:700}\n.", [1], "nav .", [1], "navIcon.", [1], "data-v-d5e135d6{height:", [0, 34], ";margin-right:", [0, 30], ";width:", [0, 34], "}\n.", [1], "nav .", [1], "navIcon wx-image.", [1], "data-v-d5e135d6{height:100%;width:100%}\n.", [1], "goodsBox.", [1], "data-v-d5e135d6{display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:", [0, 40], " ", [0, 30], "}\n.", [1], "goodsBox .", [1], "goodsItem.", [1], "data-v-d5e135d6{background-color:#fff;border-radius:", [0, 8], ";display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;margin-bottom:", [0, 20], ";margin-left:4%;width:48%}\n.", [1], "goodsBox .", [1], "goodsItem .", [1], "goodsInfo.", [1], "data-v-d5e135d6{display:-webkit-flex;display:flex;-webkit-flex:1;flex:1;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:space-between;justify-content:space-between;padding:", [0, 10], " ", [0, 20], "}\n.", [1], "goodsBox .", [1], "goodsItem .", [1], "goodsInfo .", [1], "itemTitle.", [1], "data-v-d5e135d6{color:#1c1c1d;font-size:", [0, 26], "}\n.", [1], "goodsBox .", [1], "goodsItem .", [1], "goodsInfo .", [1], "itemSubTitle.", [1], "data-v-d5e135d6{color:#909399;font-size:", [0, 22], ";padding-top:", [0, 10], "}\n.", [1], "goodsBox .", [1], "goodsItem .", [1], "goodsInfo .", [1], "yh-box.", [1], "data-v-d5e135d6{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;padding:", [0, 15], " 0 ", [0, 24], "}\n.", [1], "goodsBox .", [1], "goodsItem .", [1], "goodsInfo .", [1], "yh-box .", [1], "itemRuter.", [1], "data-v-d5e135d6{background:#ffeeea;border-radius:", [0, 6], ";color:#ff531d;font-size:", [0, 20], ";height:", [0, 30], ";line-height:", [0, 30], ";margin-right:", [0, 10], ";padding:0 ", [0, 8], "}\n.", [1], "goodsBox .", [1], "goodsItem .", [1], "goodsInfo .", [1], "yh-box .", [1], "miao-sha.", [1], "data-v-d5e135d6{height:", [0, 36], ";margin-right:", [0, 10], ";width:", [0, 98], "}\n.", [1], "goodsBox .", [1], "goodsItem .", [1], "goodsInfo .", [1], "numBox.", [1], "data-v-d5e135d6{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:flex-start;justify-content:flex-start}\n.", [1], "goodsBox .", [1], "goodsItem .", [1], "goodsInfo .", [1], "numBox .", [1], "num-pic.", [1], "data-v-d5e135d6{color:#ff4643;font-size:", [0, 30], ";line-height:1;padding-right:", [0, 16], "}\n.", [1], "goodsBox .", [1], "goodsItem .", [1], "goodsInfo .", [1], "numBox .", [1], "num-ys.", [1], "data-v-d5e135d6{color:#878787;font-size:", [0, 22], ";padding-top:", [0, 10], "}\n.", [1], "goodsBox .", [1], "goodsItem.", [1], "data-v-d5e135d6:nth-child(odd){margin-left:0}\n.", [1], "goodsBoxs.", [1], "data-v-d5e135d6{padding:", [0, 20], " ", [0, 30], "}\n.", [1], "goodsBoxs .", [1], "goodsItem.", [1], "data-v-d5e135d6{-webkit-align-items:center;align-items:center;background-color:#fff;border-radius:", [0, 8], ";display:-webkit-flex;display:flex;height:", [0, 250], ";margin-bottom:", [0, 20], ";padding:0 ", [0, 20], ";width:100%}\n.", [1], "goodsBoxs .", [1], "goodsItem .", [1], "itemImg.", [1], "data-v-d5e135d6{width:", [0, 216], "}\n.", [1], "goodsBoxs .", [1], "goodsItem .", [1], "itemLeft.", [1], "data-v-d5e135d6{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;height:100%;-webkit-justify-content:space-between;justify-content:space-between;padding:", [0, 30], " ", [0, 20], ";width:", [0, 434], "}\n.", [1], "goodsBoxs .", [1], "goodsItem .", [1], "itemLeft .", [1], "itemTitle.", [1], "data-v-d5e135d6{color:#1c1c1d;font-size:", [0, 26], "}\n.", [1], "goodsBoxs .", [1], "goodsItem .", [1], "itemLeft .", [1], "itemSubTitle.", [1], "data-v-d5e135d6{color:#909399;font-size:", [0, 22], ";width:100%}\n.", [1], "goodsBoxs .", [1], "goodsItem .", [1], "itemLeft .", [1], "yh-box.", [1], "data-v-d5e135d6{display:-webkit-flex;display:flex;padding:", [0, 15], " 0 ", [0, 24], "}\n.", [1], "goodsBoxs .", [1], "goodsItem .", [1], "itemLeft .", [1], "yh-box .", [1], "itemRuter.", [1], "data-v-d5e135d6{background:#ffeeea;border-radius:", [0, 6], ";color:#ff531d;font-size:", [0, 20], ";height:", [0, 30], ";line-height:", [0, 30], ";margin-right:", [0, 10], ";padding:0 ", [0, 8], "}\n.", [1], "goodsBoxs .", [1], "goodsItem .", [1], "itemLeft .", [1], "numBox.", [1], "data-v-d5e135d6{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:space-between;justify-content:space-between}\n.", [1], "goodsBoxs .", [1], "goodsItem .", [1], "itemLeft .", [1], "numBox .", [1], "numBox-l.", [1], "data-v-d5e135d6{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:flex-start;justify-content:flex-start}\n.", [1], "goodsBoxs .", [1], "goodsItem .", [1], "itemLeft .", [1], "numBox .", [1], "numBox-l .", [1], "num-pic.", [1], "data-v-d5e135d6{color:#ff4643;font-size:", [0, 30], ";padding-right:", [0, 16], "}\n.", [1], "goodsBoxs .", [1], "goodsItem .", [1], "itemLeft .", [1], "numBox .", [1], "numBox-l .", [1], "itemRuter.", [1], "data-v-d5e135d6{background:#ffeeea;border-radius:", [0, 6], ";color:#ff531d;font-size:", [0, 20], ";height:", [0, 30], ";line-height:", [0, 30], ";padding:0 ", [0, 10], "}\n.", [1], "goodsBoxs .", [1], "goodsItem .", [1], "itemLeft .", [1], "numBox .", [1], "num-ys.", [1], "data-v-d5e135d6{color:#878787;font-size:", [0, 22], "}\n", ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./subPage/pages/goodslist/goodslist.wxss:1:1565)", {
    path: "./subPage/pages/goodslist/goodslist.wxss"
  });
}
