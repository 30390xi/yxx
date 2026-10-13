$gwx1_XC_16 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx1_XC_16 || [];

    function gz$gwx1_XC_16_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx1_XC_16_1) return __WXML_GLOBAL__.ops_cached.$gwx1_XC_16_1
      __WXML_GLOBAL__.ops_cached.$gwx1_XC_16_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, 'coupon-list data-v-72ec494b'])
        Z([1, true])
        Z([3, 'box data-v-72ec494b'])
        Z([3, 'box1 data-v-72ec494b'])
        Z([3, 'left data-v-72ec494b'])
        Z([
          [2, '=='],
          [
            [6],
            [
              [7],
              [3, 'couponDetail']
            ],
            [3, 'useTimeSlot']
          ],
          [1, 0]
        ])
        Z([
          [2, '=='],
          [
            [6],
            [
              [7],
              [3, 'couponDetail']
            ],
            [3, 'useTimeSlot']
          ],
          [1, 1]
        ])
        Z([
          [2, '=='],
          [
            [6],
            [
              [7],
              [3, 'couponDetail']
            ],
            [3, 'useTimeSlot']
          ],
          [1, 2]
        ])
        Z([3, 'right data-v-72ec494b'])
        Z([
          [2, '&&'],
          [
            [2, '=='],
            [
              [6],
              [
                [7],
                [3, 'couponDetail']
              ],
              [3, 'type']
            ],
            [1, 1]
          ],
          [
            [2, '>'],
            [
              [6],
              [
                [7],
                [3, 'couponDetail']
              ],
              [3, 'threshold']
            ],
            [1, 0]
          ]
        ])
        Z([
          [2, '&&'],
          [
            [2, '=='],
            [
              [6],
              [
                [7],
                [3, 'couponDetail']
              ],
              [3, 'type']
            ],
            [1, 2]
          ],
          [
            [2, '=='],
            [
              [6],
              [
                [7],
                [3, 'couponDetail']
              ],
              [3, 'threshold']
            ],
            [1, 0]
          ]
        ])
        Z([
          [2, '=='],
          [
            [6],
            [
              [7],
              [3, 'couponDetail']
            ],
            [3, 'type']
          ],
          [1, 3]
        ])
        Z([
          [2, '=='],
          [
            [6],
            [
              [7],
              [3, 'couponDetail']
            ],
            [3, 'couponStates']
          ],
          [1, 1]
        ])
        Z([
          [2, '=='],
          [
            [6],
            [
              [7],
              [3, 'couponDetail']
            ],
            [3, 'couponStates']
          ],
          [1, 2]
        ])
        Z([
          [2, '=='],
          [
            [6],
            [
              [7],
              [3, 'couponDetail']
            ],
            [3, 'couponStates']
          ],
          [1, 3]
        ])
        Z(z[14])
        Z(z[7])
        Z([3, '#F5F5F5'])
        Z([3, '__l'])
        Z([3, '#6d6d6d'])
        Z([3, 'data-v-72ec494b'])
        Z([3, '#000000'])
        Z([3, '100'])
        Z([3, '38eda742-2'])
        Z([
          [4],
          [
            [5],
            [1, 'default']
          ]
        ])
        Z([
          [8], 'color', [1, '#333333']
        ])
        Z([3, '搜索'])
        Z(z[1])
        Z([3, '#FFFFFF'])
        Z(z[18])
        Z([3, '__e'])
        Z(z[30])
        Z(z[30])
        Z(z[20])
        Z([
          [4],
          [
            [5],
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
                      [1, '^search']
                    ],
                    [
                      [4],
                      [
                        [5],
                        [
                          [4],
                          [
                            [5],
                            [1, 'doSearch']
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
                    [1, '^custom']
                  ],
                  [
                    [4],
                    [
                      [5],
                      [
                        [4],
                        [
                          [5],
                          [1, 'doSearch']
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
                  [1, '^input']
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
                                [1, 'keyWord']
                              ],
                              [1, '$event']
                            ],
                            [
                              [4],
                              [
                                [5]
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
        Z(z[1])
        Z([3, '30'])
        Z([
          [2, '||'],
          [
            [7],
            [3, 'searchKey']
          ],
          [1, '输入您想搜索的内容']
        ])
        Z([
          [7],
          [3, 'keyWord']
        ])
        Z([3, '38eda742-3'])
        Z([
          [2, '||'],
          [
            [6],
            [
              [7],
              [3, 'recommendList']
            ],
            [1, 0]
          ],
          [
            [6],
            [
              [7],
              [3, 'goodsList']
            ],
            [1, 0]
          ]
        ])
        Z([3, 'shop-list data-v-72ec494b'])
        Z([
          [2, '=='],
          [
            [7],
            [3, 'type']
          ],
          [1, 2]
        ])
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
        Z(z[43])
        Z(z[30])
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
                            [1, 'goProduct']
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
                                        [1, 'recommendList']
                                      ],
                                      [1, '']
                                    ],
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
                ]
              ]
            ]
          ]
        ])
        Z([3, 'display:flex;'])
        Z([3, 'shop-right data-v-72ec494b'])
        Z([
          [6],
          [
            [7],
            [3, 'item']
          ],
          [3, 'g0']
        ])
        Z([3, 'footer data-v-72ec494b'])
        Z([
          [2, '||'],
          [
            [2, '!'],
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
              [3, 'stockStatus']
            ]
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
            [3, 'sellOut']
          ]
        ])
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
          [3, 'startPriceFlag']
        ])
        Z(z[43])
        Z(z[44])
        Z([
          [6],
          [
            [7],
            [3, '$root']
          ],
          [3, 'l1']
        ])
        Z(z[43])
        Z(z[30])
        Z([3, 'goodsItem data-v-72ec494b'])
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
        Z(z[18])
        Z([3, '8'])
        Z(z[20])
        Z([3, '192'])
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
        Z([1, false])
        Z([3, 'width:200rpx;'])
        Z([
          [2, '+'],
          [1, '38eda742-4-'],
          [
            [7],
            [3, 'index']
          ]
        ])
        Z([3, 'itemLeft data-v-72ec494b'])
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
        Z([3, 'yh-box data-v-72ec494b'])
        Z([
          [2, '>'],
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
        Z([
          [2, '&&'],
          [
            [2, '&&'],
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
            ],
            [
              [7],
              [3, 'userInfo']
            ]
          ],
          [
            [6],
            [
              [7],
              [3, 'userInfo']
            ],
            [3, 'isFenxiao']
          ]
        ])
        Z([3, 'numBox-l data-v-72ec494b'])
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
            [3, 'startPriceFlag']
          ],
          [1, 0]
        ])
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
            [3, 'startPriceFlag']
          ],
          [1, 1]
        ])
        Z([
          [2, '&&'],
          [
            [2, '=='],
            [
              [7],
              [3, 'loadMore']
            ],
            [1, 'nomore']
          ],
          [
            [2, '=='],
            [
              [7],
              [3, 'num']
            ],
            [1, 0]
          ]
        ])
        Z(z[18])
        Z(z[20])
        Z([3, 'https://eshopfile.zhiyousx.com/noOrder@2x.png'])
        Z([3, '暂无产品'])
        Z([3, '38eda742-5'])
        Z([3, '#f7f7f7'])
        Z(z[18])
        Z(z[20])
        Z([3, '#ccc'])
        Z(z[90])
        Z([
          [7],
          [3, 'loadMore']
        ])
        Z([3, '38eda742-6'])
      })(__WXML_GLOBAL__.ops_cached.$gwx1_XC_16_1);
      return __WXML_GLOBAL__.ops_cached.$gwx1_XC_16_1
    }
    __WXML_GLOBAL__.ops_set.$gwx1_XC_16 = z;
    __WXML_GLOBAL__.ops_init.$gwx1_XC_16 = true;
    var x = ['./subPack/pages/groupOrder/collectCoupons.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx1_XC_16_1()
      var c3I = _mz(z, 'scroll-view', ['class', 0, 'scrollY', 1], [], e, s, gg)
      var l5I = _n('view')
      _rz(z, l5I, 'class', 2, e, s, gg)
      var t7I = _n('view')
      _rz(z, t7I, 'class', 3, e, s, gg)
      var b9I = _n('view')
      _rz(z, b9I, 'class', 4, e, s, gg)
      var o0I = _v()
      _(b9I, o0I)
      if (_oz(z, 5, e, s, gg)) {
        o0I.wxVkey = 1
      }
      var xAJ = _v()
      _(b9I, xAJ)
      if (_oz(z, 6, e, s, gg)) {
        xAJ.wxVkey = 1
      }
      var oBJ = _v()
      _(b9I, oBJ)
      if (_oz(z, 7, e, s, gg)) {
        oBJ.wxVkey = 1
      }
      o0I.wxXCkey = 1
      xAJ.wxXCkey = 1
      oBJ.wxXCkey = 1
      _(t7I, b9I)
      var fCJ = _n('view')
      _rz(z, fCJ, 'class', 8, e, s, gg)
      var cDJ = _v()
      _(fCJ, cDJ)
      if (_oz(z, 9, e, s, gg)) {
        cDJ.wxVkey = 1
      }
      var hEJ = _v()
      _(fCJ, hEJ)
      if (_oz(z, 10, e, s, gg)) {
        hEJ.wxVkey = 1
      }
      var oFJ = _v()
      _(fCJ, oFJ)
      if (_oz(z, 11, e, s, gg)) {
        oFJ.wxVkey = 1
      }
      var cGJ = _v()
      _(fCJ, cGJ)
      if (_oz(z, 12, e, s, gg)) {
        cGJ.wxVkey = 1
      }
      var oHJ = _v()
      _(fCJ, oHJ)
      if (_oz(z, 13, e, s, gg)) {
        oHJ.wxVkey = 1
      }
      var lIJ = _v()
      _(fCJ, lIJ)
      if (_oz(z, 14, e, s, gg)) {
        lIJ.wxVkey = 1
      }
      cDJ.wxXCkey = 1
      hEJ.wxXCkey = 1
      oFJ.wxXCkey = 1
      cGJ.wxXCkey = 1
      oHJ.wxXCkey = 1
      lIJ.wxXCkey = 1
      _(t7I, fCJ)
      var e8I = _v()
      _(t7I, e8I)
      if (_oz(z, 15, e, s, gg)) {
        e8I.wxVkey = 1
      }
      e8I.wxXCkey = 1
      _(l5I, t7I)
      var a6I = _v()
      _(l5I, a6I)
      if (_oz(z, 16, e, s, gg)) {
        a6I.wxVkey = 1
      }
      a6I.wxXCkey = 1
      _(c3I, l5I)
      var aJJ = _mz(z, 'u-divider', ['bgColor', 17, 'bind:__l', 1, 'borderColor', 2, 'class', 3, 'color', 4, 'halfWidth', 5, 'vueId', 6, 'vueSlots', 7], [], e, s, gg)
      _(c3I, aJJ)
      var tKJ = _mz(z, 'u-search', ['actionStyle', 25, 'actionText', 1, 'animation', 2, 'bgColor', 3, 'bind:__l', 4, 'bind:custom', 5, 'bind:input', 6, 'bind:search', 7, 'class', 8, 'data-event-opts', 9, 'focus', 10, 'maxlength', 11, 'placeholder', 12, 'value', 13, 'vueId', 14], [], e, s, gg)
      _(c3I, tKJ)
      var o4I = _v()
      _(c3I, o4I)
      if (_oz(z, 40, e, s, gg)) {
        o4I.wxVkey = 1
        var eLJ = _n('view')
        _rz(z, eLJ, 'class', 41, e, s, gg)
        var bMJ = _v()
        _(eLJ, bMJ)
        if (_oz(z, 42, e, s, gg)) {
          bMJ.wxVkey = 1
          var xOJ = _v()
          _(bMJ, xOJ)
          var oPJ = function(cRJ, fQJ, hSJ, gg) {
            var cUJ = _mz(z, 'view', ['bindtap', 47, 'class', 1, 'data-event-opts', 2, 'style', 3], [], cRJ, fQJ, gg)
            var oVJ = _n('view')
            _rz(z, oVJ, 'class', 51, cRJ, fQJ, gg)
            var lWJ = _v()
            _(oVJ, lWJ)
            if (_oz(z, 52, cRJ, fQJ, gg)) {
              lWJ.wxVkey = 1
            }
            var aXJ = _n('view')
            _rz(z, aXJ, 'class', 53, cRJ, fQJ, gg)
            var tYJ = _v()
            _(aXJ, tYJ)
            if (_oz(z, 54, cRJ, fQJ, gg)) {
              tYJ.wxVkey = 1
            } else {
              tYJ.wxVkey = 2
              var eZJ = _v()
              _(tYJ, eZJ)
              if (_oz(z, 55, cRJ, fQJ, gg)) {
                eZJ.wxVkey = 1
              }
              eZJ.wxXCkey = 1
            }
            tYJ.wxXCkey = 1
            _(oVJ, aXJ)
            lWJ.wxXCkey = 1
            _(cUJ, oVJ)
            _(hSJ, cUJ)
            return hSJ
          }
          xOJ.wxXCkey = 2
          _2z(z, 45, oPJ, e, s, gg, xOJ, 'item', 'index', 'index')
        } else {
          bMJ.wxVkey = 2
          var b1J = _v()
          _(bMJ, b1J)
          var o2J = function(o4J, x3J, f5J, gg) {
            var h7J = _mz(z, 'view', ['bindtap', 60, 'class', 1, 'data-event-opts', 2], [], o4J, x3J, gg)
            var o8J = _mz(z, 'u-lazy-load', ['bind:__l', 63, 'borderRadius', 1, 'class', 2, 'height', 3, 'image', 4, 'imgMode', 5, 'isEffect', 6, 'style', 7, 'vueId', 8], [], o4J, x3J, gg)
            _(h7J, o8J)
            var c9J = _n('view')
            _rz(z, c9J, 'class', 72, o4J, x3J, gg)
            var o0J = _v()
            _(c9J, o0J)
            if (_oz(z, 73, o4J, x3J, gg)) {
              o0J.wxVkey = 1
            }
            var lAK = _n('view')
            _rz(z, lAK, 'class', 74, o4J, x3J, gg)
            var aBK = _v()
            _(lAK, aBK)
            if (_oz(z, 75, o4J, x3J, gg)) {
              aBK.wxVkey = 1
            }
            var tCK = _v()
            _(lAK, tCK)
            if (_oz(z, 76, o4J, x3J, gg)) {
              tCK.wxVkey = 1
            }
            var eDK = _v()
            _(lAK, eDK)
            if (_oz(z, 77, o4J, x3J, gg)) {
              eDK.wxVkey = 1
            }
            aBK.wxXCkey = 1
            tCK.wxXCkey = 1
            eDK.wxXCkey = 1
            _(c9J, lAK)
            var bEK = _n('view')
            _rz(z, bEK, 'class', 78, o4J, x3J, gg)
            var oFK = _v()
            _(bEK, oFK)
            if (_oz(z, 79, o4J, x3J, gg)) {
              oFK.wxVkey = 1
            }
            var xGK = _v()
            _(bEK, xGK)
            if (_oz(z, 80, o4J, x3J, gg)) {
              xGK.wxVkey = 1
            }
            oFK.wxXCkey = 1
            xGK.wxXCkey = 1
            _(c9J, bEK)
            o0J.wxXCkey = 1
            _(h7J, c9J)
            _(f5J, h7J)
            return f5J
          }
          b1J.wxXCkey = 4
          _2z(z, 58, o2J, e, s, gg, b1J, 'item', 'index', 'index')
        }
        var oNJ = _v()
        _(eLJ, oNJ)
        if (_oz(z, 81, e, s, gg)) {
          oNJ.wxVkey = 1
          var oHK = _mz(z, 'empty-state', ['bind:__l', 82, 'class', 1, 'imgUrl', 2, 'text', 3, 'vueId', 4], [], e, s, gg)
          _(oNJ, oHK)
        } else {
          oNJ.wxVkey = 2
          var fIK = _mz(z, 'u-loadmore', ['bgColor', 87, 'bind:__l', 1, 'class', 2, 'color', 3, 'iconColor', 4, 'status', 5, 'vueId', 6], [], e, s, gg)
          _(oNJ, fIK)
        }
        bMJ.wxXCkey = 1
        bMJ.wxXCkey = 3
        oNJ.wxXCkey = 1
        oNJ.wxXCkey = 3
        oNJ.wxXCkey = 3
        _(o4I, eLJ)
      }
      o4I.wxXCkey = 1
      o4I.wxXCkey = 3
      _(r, c3I)
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
      return function(env, dd, global) {
        $gwxc = 0;
        var root = {
          "tag": "wx-page"
        };
        root.children = [];
        g = "$gwx1_XC_16";
        var main = e_[path].f
        if (typeof global === "undefined") global = {};
        global.f = $gdc(f_[path], "", 1);
        try {
          main(env, {}, root, global);
          _tsd(root)
        } catch (err) {
          console.log(err)
        };
        g = "";
        return root;
      }
    }
  }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx1_XC_16();
if (__vd_version_info__.delayedGwx) __wxAppCode__['subPack/pages/groupOrder/collectCoupons.wxml'] = [$gwx1_XC_16, './subPack/pages/groupOrder/collectCoupons.wxml'];
else __wxAppCode__['subPack/pages/groupOrder/collectCoupons.wxml'] = $gwx1_XC_16('./subPack/pages/groupOrder/collectCoupons.wxml');;
__wxRoute = "subPack/pages/groupOrder/collectCoupons";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "subPack/pages/groupOrder/collectCoupons.js";
define("subPack/pages/groupOrder/collectCoupons.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["subPack/pages/groupOrder/collectCoupons"], {
      "0d5c": function(e, t, o) {},
      "6e7c": function(e, t, o) {
        (function(e, t) {
          var n = o("47a9");
          o("5366"), n(o("3240"));
          var i = n(o("99b0"));
          e.__webpack_require_UNI_MP_PLUGIN__ = o, t(i.default)
        }).call(this, o("3223").default, o("df3c").createPage)
      },
      9103: function(e, t, o) {
        o.r(t);
        var n = o("e90a"),
          i = o.n(n);
        for (var a in n)["default"].indexOf(a) < 0 && function(e) {
          o.d(t, e, (function() {
            return n[e]
          }))
        }(a);
        t.default = i.a
      },
      9121: function(e, t, o) {
        var n = o("0d5c");
        o.n(n).a
      },
      "99b0": function(e, t, o) {
        o.r(t);
        var n = o("f1dd"),
          i = o("9103");
        for (var a in i)["default"].indexOf(a) < 0 && function(e) {
          o.d(t, e, (function() {
            return i[e]
          }))
        }(a);
        o("9121");
        var u = o("828b"),
          r = Object(u.a)(i.default, n.b, n.c, !1, null, "72ec494b", null, !1, n.a, void 0);
        t.default = r.exports
      },
      e90a: function(e, t, o) {
        (function(e, n) {
          var i = o("47a9");
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.default = void 0;
          var a = i(o("7eb4")),
            u = i(o("af34")),
            r = i(o("ee10")),
            c = {
              components: {
                EmptyState: function() {
                  o.e("components/empty/empty").then(function() {
                    return resolve(o("a427"))
                  }.bind(null, o)).catch(o.oe)
                }
              },
              data: function() {
                return {
                  couponDetail: {},
                  showDetail: !1,
                  current: 1,
                  size: 5,
                  recommendList: [],
                  loadMore: "loading",
                  id: "",
                  type: 0,
                  goodsList: [],
                  title: "",
                  imageUrl: "",
                  num: 0,
                  keyWord: ""
                }
              },
              onLoad: function(e) {
                if (e.scene) {
                  var t;
                  t = -1 != e.scene.indexOf("%2F") ? e.scene.split("%2F") : e.scene.split("/"), this.type = t[0], this.id = t[1], 2 == this.type ? this.getRecommend() : this.getShopList()
                }
              },
              filters: {
                timeFormat: function(e) {
                  return e.split(" ")[0]
                },
                moneyFilter: function(e) {
                  return e && (e + "").indexOf(".00") > -1 ? e.split(".")[0] : e
                }
              },
              onShow: function() {
                this.getProduct(), e.updateShareMenu({
                  isPrivateMessage: !0
                })
              },
              onShareAppMessage: function() {
                var e = "/subPack/pages/groupOrder/collectCoupons?scene=".concat(this.type, "/").concat(this.id);
                return {
                  title: this.couponDetail.shareDesc ? this.couponDetail.shareDesc : this.title,
                  path: this.$util.setShareUrl(e),
                  imageUrl: this.couponDetail.shareImage
                }
              },
              onReachBottom: function() {
                "loadmore" == this.loadMore && (this.current += 1, 2 == this.type ? this.getRecommend() : this.getShopList())
              },
              methods: {
                getDec: function(e) {
                  var t, o = "",
                    n = "",
                    i = "",
                    a = "";
                  return e.cityList && e.cityList.forEach((function(e, t) {
                    n += e + "/"
                  })), n && (n = n.slice(0, -1) + " · "), t = ["跟团游", "一日游", "自由行", "研学游"][e.travelMode], e.journeyDay && (i = e.journeyDay + "天"), e.journeyNight && (a = e.journeyNight + "晚"), (i || a) && (o = " · " + i + a), n + t + o
                },
                goShop: function() {
                  n.navigateTo({
                    url: "/subPack/pages/groupOrder/availableProducts"
                  })
                },
                goGoodsDetails: function(e) {
                  n.navigateTo({
                    url: "/subPage/pages/ticket_detail/ticket_detail?itemId=".concat(e)
                  })
                },
                scrollBottom: function() {
                  "loadmore" == this.loadMore && (this.current += 1, 2 == this.type ? this.getRecommend() : this.getShopList())
                },
                showMore: function() {
                  this.showDetail = !this.showDetail
                },
                receive: function(e) {
                  var t = this;
                  return (0, r.default)(a.default.mark((function o() {
                    return a.default.wrap((function(o) {
                      for (;;) switch (o.prev = o.next) {
                        case 0:
                          return o.prev = 0, n.showLoading(), o.next = 4, t.$uniApi.dataRequestNoLoading("POST", "product/app/v1/CouponReceive/receiveCoupon", {
                            couponId: e
                          });
                        case 4:
                          1 == o.sent.code ? (t.getProduct(), t.$util.showToast("已领取")) : t.$util.showToast("已抢光"), o.next = 10;
                          break;
                        case 8:
                          o.prev = 8, o.t0 = o.catch(0);
                        case 10:
                          return o.prev = 10, setTimeout((function() {
                            n.hideLoading()
                          }), 300), o.finish(10);
                        case 13:
                        case "end":
                          return o.stop()
                      }
                    }), o, null, [
                      [0, 8, 10, 13]
                    ])
                  })))()
                },
                getShopList: function() {
                  var e = this;
                  return (0, r.default)(a.default.mark((function t() {
                    var o, n, i;
                    return a.default.wrap((function(t) {
                      for (;;) switch (t.prev = t.next) {
                        case 0:
                          return t.prev = 0, e.loadMore = "loading", o = {
                            couponId: e.id,
                            current: e.current,
                            size: e.size,
                            complex: 0,
                            keyWord: e.keyWord
                          }, t.next = 5, e.$uniApi.dataRequestNoLoading("POST", "product/app/v1/item/couponCanUseItem", o);
                        case 5:
                          1 == (n = t.sent).code && (e.loadMore = n.data.records.length > 4 ? "loadmore" : "nomore", (i = e.goodsList).push.apply(i, (0, u.default)(n.data.records)), e.num = e.goodsList.length), t.next = 11;
                          break;
                        case 9:
                          t.prev = 9, t.t0 = t.catch(0);
                        case 11:
                        case "end":
                          return t.stop()
                      }
                    }), t, null, [
                      [0, 9]
                    ])
                  })))()
                },
                getRecommend: function() {
                  var e = this;
                  return (0, r.default)(a.default.mark((function t() {
                    var o, n, i;
                    return a.default.wrap((function(t) {
                      for (;;) switch (t.prev = t.next) {
                        case 0:
                          return t.prev = 0, e.loadMore = "loading", o = {
                            couponId: e.id,
                            current: e.current,
                            size: e.size,
                            productName: e.keyWord
                          }, t.next = 5, e.$uniApi.dataRequestNoLoading("POST", "product/app/v1/line/product/couponCanUseProduct", o);
                        case 5:
                          1 == (n = t.sent).code && (e.loadMore = n.data.records.length > 4 ? "loadmore" : "nomore", (i = e.recommendList).push.apply(i, (0, u.default)(n.data.records)), e.num = e.recommendList.length), t.next = 11;
                          break;
                        case 9:
                          t.prev = 9, t.t0 = t.catch(0);
                        case 11:
                          return t.prev = 11, t.finish(11);
                        case 13:
                        case "end":
                          return t.stop()
                      }
                    }), t, null, [
                      [0, 9, 11, 13]
                    ])
                  })))()
                },
                available: function(e) {
                  if (2 == this.type) {
                    var t = JSON.stringify(e);
                    n.navigateTo({
                      url: "/subPack/pages/groupOrder/availableProducts?coupon=".concat(t)
                    })
                  } else n.navigateTo({
                    url: "/subPage/pages/discountsProductList/discountsProductList?couponId=".concat(e.couponId, "&threshold=").concat(e.threshold, "&quota=").concat(e.quota, "&type=", 0)
                  })
                },
                goProduct: function(e) {
                  n.navigateTo({
                    url: "/subPack/pages/lineProductDetails/lineProductDetails?productId=".concat(e.productId)
                  })
                },
                getProduct: function() {
                  var t = this;
                  return (0, r.default)(a.default.mark((function o() {
                    var n;
                    return a.default.wrap((function(o) {
                      for (;;) switch (o.prev = o.next) {
                        case 0:
                          return o.next = 2, t.$uniApi.getRequestNoLoading("GET", "product/app/v1/coupon/detailForReceive/".concat(t.id));
                        case 2:
                          1 == (n = o.sent).code && (t.couponDetail = n.data, 3 == t.couponDetail.type ? t.title = "您有一张抵扣券待领取" : 2 == t.couponDetail.type ? t.title = "您有".concat(t.couponDetail.quota, "元无门槛优惠券待领取") : t.title = "您有满".concat(t.couponDetail.threshold, "减").concat(t.couponDetail.quota, "优惠券待领取"), 0 == t.couponDetail.shareFlag ? e.hideShareMenu({
                            menus: ["shareAppMessage", "shareTimeline"]
                          }) : e.showShareMenu({
                            withShareTicket: !0,
                            menus: ["shareAppMessage", "shareTimeline"]
                          }));
                        case 4:
                        case "end":
                          return o.stop()
                      }
                    }), o)
                  })))()
                },
                doSearch: function() {
                  this.current = 1, this.goodsList = [], this.recommendList = [], 2 == this.type ? this.getRecommend() : this.getShopList()
                }
              }
            };
          t.default = c
        }).call(this, o("3223").default, o("df3c").default)
      },
      f1dd: function(e, t, o) {
        o.d(t, "b", (function() {
          return i
        })), o.d(t, "c", (function() {
          return a
        })), o.d(t, "a", (function() {
          return n
        }));
        var n = {
            uDivider: function() {
              return o.e("uview-ui/components/u-divider/u-divider").then(o.bind(null, "40b9"))
            },
            uSearch: function() {
              return o.e("uview-ui/components/u-search/u-search").then(o.bind(null, "90a6"))
            },
            uLazyLoad: function() {
              return o.e("uview-ui/components/u-lazy-load/u-lazy-load").then(o.bind(null, "5d7e"))
            },
            uLoadmore: function() {
              return o.e("uview-ui/components/u-loadmore/u-loadmore").then(o.bind(null, "2db1"))
            }
          },
          i = function() {
            var e = this,
              t = (e.$createElement, e._self._c, 0 == e.couponDetail.useTimeSlot ? e._f("timeFormat")(e.couponDetail.validityStartTime) : null),
              o = 0 == e.couponDetail.useTimeSlot ? e._f("timeFormat")(e.couponDetail.validityEndTime) : null,
              n = 1 == e.couponDetail.useTimeSlot && 0 == e.couponDetail.memberReceivedNum ? e._f("timeFormat")(e.couponDetail.validityStartTime) : null,
              i = 1 == e.couponDetail.useTimeSlot && 0 == e.couponDetail.memberReceivedNum ? e._f("timeFormat")(e.couponDetail.validityEndTime) : null,
              a = 2 == e.couponDetail.useTimeSlot && 0 == e.couponDetail.memberReceivedNum ? e._f("timeFormat")(e.couponDetail.validityStartTime) : null,
              u = 2 == e.couponDetail.useTimeSlot && 0 == e.couponDetail.memberReceivedNum ? e._f("timeFormat")(e.couponDetail.validityEndTime) : null,
              r = (e.recommendList[0] || e.goodsList[0]) && 2 == e.type ? e.__map(e.recommendList, (function(t, o) {
                return {
                  $orig: e.__get_orig(t),
                  g0: t.lineHighlightLabelList && t.lineHighlightLabelList.length > 0,
                  m0: e.getDec(t)
                }
              })) : null,
              c = (e.recommendList[0] || e.goodsList[0]) && 2 != e.type ? e.__map(e.goodsList, (function(t, o) {
                return {
                  $orig: e.__get_orig(t),
                  f6: t.couponFullAmount > 0 ? e._f("moneyFilter")(t.couponFullAmount) : null,
                  f7: t.couponFullAmount > 0 ? e._f("moneyFilter")(t.couponAmount) : null,
                  f8: 0 == t.couponFullAmount ? e._f("moneyFilter")(t.couponAmount) : null,
                  f9: e._f("saleNumFormat")(t.salesNum)
                }
              })) : null;
            e.$mp.data = Object.assign({}, {
              $root: {
                f0: t,
                f1: o,
                f2: n,
                f3: i,
                f4: a,
                f5: u,
                l0: r,
                l1: c
              }
            })
          },
          a = []
      }
    },
    [
      ["6e7c", "common/runtime", "common/vendor"]
    ]
  ]);
}, {
  isPage: true,
  isComponent: true,
  currentFile: 'subPack/pages/groupOrder/collectCoupons.js'
});
require("subPack/pages/groupOrder/collectCoupons.js");
