$gwx4_XC_7 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx4_XC_7 || [];

    function gz$gwx4_XC_7_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx4_XC_7_1) return __WXML_GLOBAL__.ops_cached.$gwx4_XC_7_1
      __WXML_GLOBAL__.ops_cached.$gwx4_XC_7_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, '__e'])
        Z([
          [4],
          [
            [5],
            [
              [5],
              [
                [5],
                [1, 'data-v-21d7c678']
              ],
              [
                [2, '?:'],
                [1, true],
                [1, 'zp-container'],
                [1, '']
              ]
            ],
            [
              [2, '?:'],
              [
                [7],
                [3, 'emptyViewFixed']
              ],
              [1, 'zp-container-fixed'],
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
                          [1, 'emptyViewClick']
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
          [6],
          [
            [7],
            [3, '$root']
          ],
          [3, 's0']
        ])
        Z([
          [7],
          [3, 'showEmptyViewReload']
        ])
      })(__WXML_GLOBAL__.ops_cached.$gwx4_XC_7_1);
      return __WXML_GLOBAL__.ops_cached.$gwx4_XC_7_1
    }

    function gz$gwx4_XC_7_2() {
      if (__WXML_GLOBAL__.ops_cached.$gwx4_XC_7_2) return __WXML_GLOBAL__.ops_cached.$gwx4_XC_7_2
      __WXML_GLOBAL__.ops_cached.$gwx4_XC_7_2 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, '__e'])
        Z([
          [4],
          [
            [5],
            [
              [5],
              [
                [5],
                [
                  [5],
                  [1, 'zp-l-container']
                ],
                [1, 'data-v-2c9186f8']
              ],
              [
                [2, '?:'],
                [
                  [2, '==='],
                  [
                    [6],
                    [
                      [7],
                      [3, 'c']
                    ],
                    [3, 'unit']
                  ],
                  [1, 'rpx']
                ],
                [1, 'zp-l-container-rpx'],
                [1, '']
              ]
            ],
            [
              [2, '?:'],
              [
                [2, '==='],
                [
                  [6],
                  [
                    [7],
                    [3, 'c']
                  ],
                  [3, 'unit']
                ],
                [1, 'px']
              ],
              [1, 'zp-l-container-px'],
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
                          [1, 'doClick']
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
          [6],
          [
            [7],
            [3, '$root']
          ],
          [3, 's0']
        ])
        Z([
          [2, '!'],
          [
            [6],
            [
              [7],
              [3, 'c']
            ],
            [3, 'hideContent']
          ]
        ])
        Z([
          [2, '&&'],
          [
            [6],
            [
              [7],
              [3, 'c']
            ],
            [3, 'showNoMoreLine']
          ],
          [
            [2, '==='],
            [
              [7],
              [3, 'finalStatus']
            ],
            [
              [6],
              [
                [7],
                [3, 'M']
              ],
              [3, 'NoMore']
            ]
          ]
        ])
        Z([
          [2, '&&'],
          [
            [2, '==='],
            [
              [7],
              [3, 'finalStatus']
            ],
            [
              [6],
              [
                [7],
                [3, 'M']
              ],
              [3, 'Loading']
            ]
          ],
          [
            [2, '!'],
            [
              [2, '!'],
              [
                [6],
                [
                  [7],
                  [3, 'c']
                ],
                [3, 'loadingIconCustomImage']
              ]
            ]
          ]
        ])
        Z([
          [6],
          [
            [7],
            [3, '$root']
          ],
          [3, 'g0']
        ])
        Z([
          [6],
          [
            [7],
            [3, '$root']
          ],
          [3, 'g1']
        ])
        Z([
          [2, '||'],
          [
            [2, '||'],
            [
              [2, '!'],
              [
                [6],
                [
                  [7],
                  [3, 'c']
                ],
                [3, 'isChat']
              ]
            ],
            [
              [2, '&&'],
              [
                [2, '!'],
                [
                  [6],
                  [
                    [7],
                    [3, 'c']
                  ],
                  [3, 'chatDefaultAsLoading']
                ]
              ],
              [
                [2, '==='],
                [
                  [7],
                  [3, 'finalStatus']
                ],
                [
                  [6],
                  [
                    [7],
                    [3, 'M']
                  ],
                  [3, 'Default']
                ]
              ]
            ]
          ],
          [
            [2, '==='],
            [
              [7],
              [3, 'finalStatus']
            ],
            [
              [6],
              [
                [7],
                [3, 'M']
              ],
              [3, 'Fail']
            ]
          ]
        ])
        Z(z[5])
      })(__WXML_GLOBAL__.ops_cached.$gwx4_XC_7_2);
      return __WXML_GLOBAL__.ops_cached.$gwx4_XC_7_2
    }

    function gz$gwx4_XC_7_3() {
      if (__WXML_GLOBAL__.ops_cached.$gwx4_XC_7_3) return __WXML_GLOBAL__.ops_cached.$gwx4_XC_7_3
      __WXML_GLOBAL__.ops_cached.$gwx4_XC_7_3 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([
          [6],
          [
            [7],
            [3, '$root']
          ],
          [3, 'g0']
        ])
      })(__WXML_GLOBAL__.ops_cached.$gwx4_XC_7_3);
      return __WXML_GLOBAL__.ops_cached.$gwx4_XC_7_3
    }

    function gz$gwx4_XC_7_4() {
      if (__WXML_GLOBAL__.ops_cached.$gwx4_XC_7_4) return __WXML_GLOBAL__.ops_cached.$gwx4_XC_7_4
      __WXML_GLOBAL__.ops_cached.$gwx4_XC_7_4 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([
          [4],
          [
            [5],
            [
              [5],
              [
                [5],
                [
                  [5],
                  [
                    [5],
                    [
                      [5],
                      [
                        [5],
                        [1, 'data-v-262182c8']
                      ],
                      [
                        [2, '?:'],
                        [1, true],
                        [1, 'z-paging-content'],
                        [1, '']
                      ]
                    ],
                    [
                      [2, '?:'],
                      [
                        [2, '!'],
                        [
                          [7],
                          [3, 'usePageScroll']
                        ]
                      ],
                      [1, 'z-paging-content-full'],
                      [1, '']
                    ]
                  ],
                  [
                    [2, '?:'],
                    [
                      [2, '&&'],
                      [
                        [2, '!'],
                        [
                          [7],
                          [3, 'usePageScroll']
                        ]
                      ],
                      [
                        [7],
                        [3, 'fixed']
                      ]
                    ],
                    [1, 'z-paging-content-fixed'],
                    [1, '']
                  ]
                ],
                [
                  [2, '?:'],
                  [
                    [7],
                    [3, 'usePageScroll']
                  ],
                  [1, 'z-paging-content-page'],
                  [1, '']
                ]
              ],
              [
                [2, '?:'],
                [
                  [2, '<'],
                  [
                    [7],
                    [3, 'renderPropScrollTop']
                  ],
                  [1, 1]
                ],
                [1, 'z-paging-reached-top'],
                [1, '']
              ]
            ],
            [
              [2, '?:'],
              [
                [7],
                [3, 'useChatRecordMode']
              ],
              [1, 'z-paging-use-chat-record-mode'],
              [1, '']
            ]
          ]
        ])
        Z([
          [6],
          [
            [7],
            [3, '$root']
          ],
          [3, 's0']
        ])
        Z([
          [2, '==='],
          [
            [7],
            [3, 'cssSafeAreaInsetBottom']
          ],
          [
            [2, '-'],
            [1, 1]
          ]
        ])
        Z([
          [2, '&&'],
          [
            [7],
            [3, 'showF2']
          ],
          [
            [7],
            [3, 'showRefresherF2']
          ]
        ])
        Z([3, '__e'])
        Z([3, 'zp-f2-content data-v-262182c8'])
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
                  [1, 'touchmove']
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
                          [1, '']
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
                [
                  [2, '+'],
                  [1, 'transform:'],
                  [
                    [7],
                    [3, 'f2Transform']
                  ]
                ],
                [1, ';']
              ],
              [
                [2, '+'],
                [
                  [2, '+'],
                  [1, 'transition:'],
                  [1, 'transform .2s linear']
                ],
                [1, ';']
              ]
            ],
            [
              [2, '+'],
              [
                [2, '+'],
                [1, 'height:'],
                [
                  [2, '+'],
                  [
                    [7],
                    [3, 'superContentHeight']
                  ],
                  [1, 'px']
                ]
              ],
              [1, ';']
            ]
          ],
          [
            [2, '+'],
            [
              [2, '+'],
              [1, 'z-index:'],
              [
                [7],
                [3, 'f2ZIndex']
              ]
            ],
            [1, ';']
          ]
        ])
        Z([3, 'f2'])
        Z([
          [2, '&&'],
          [
            [2, '!'],
            [
              [7],
              [3, 'usePageScroll']
            ]
          ],
          [
            [6],
            [
              [7],
              [3, 'zSlots']
            ],
            [3, 'top']
          ]
        ])
        Z([3, 'top'])
        Z([
          [2, '&&'],
          [
            [7],
            [3, 'usePageScroll']
          ],
          [
            [6],
            [
              [7],
              [3, 'zSlots']
            ],
            [3, 'top']
          ]
        ])
        Z(z[4])
        Z([3, 'zp-page-top data-v-262182c8'])
        Z(z[6])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [
              [2, '+'],
              [1, 'top:'],
              [
                [2, '+'],
                [
                  [7],
                  [3, 'windowTop']
                ],
                [1, 'px']
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
                [7],
                [3, 'topZIndex']
              ]
            ],
            [1, ';']
          ]
        ])
        Z(z[10])
        Z([
          [4],
          [
            [5],
            [
              [5],
              [
                [5],
                [1, 'data-v-262182c8']
              ],
              [
                [2, '?:'],
                [1, true],
                [1, 'zp-view-super'],
                [1, '']
              ]
            ],
            [
              [2, '?:'],
              [
                [2, '!'],
                [
                  [7],
                  [3, 'usePageScroll']
                ]
              ],
              [1, 'zp-scroll-view-super'],
              [1, '']
            ]
          ]
        ])
        Z([
          [6],
          [
            [7],
            [3, '$root']
          ],
          [3, 's1']
        ])
        Z([
          [6],
          [
            [7],
            [3, 'zSlots']
          ],
          [3, 'left']
        ])
        Z([3, 'left'])
        Z(z[4])
        Z(z[4])
        Z(z[4])
        Z(z[4])
        Z(z[4])
        Z([
          [4],
          [
            [5],
            [
              [5],
              [
                [5],
                [
                  [5],
                  [
                    [5],
                    [1, 'data-v-262182c8']
                  ],
                  [1, 'vue-ref']
                ],
                [
                  [2, '?:'],
                  [1, true],
                  [1, 'zp-scroll-view'],
                  [1, '']
                ]
              ],
              [
                [2, '?:'],
                [
                  [2, '!'],
                  [
                    [7],
                    [3, 'usePageScroll']
                  ]
                ],
                [1, 'zp-scroll-view-absolute'],
                [1, '']
              ]
            ],
            [
              [2, '?:'],
              [
                [2, '!'],
                [
                  [7],
                  [3, 'showScrollbar']
                ]
              ],
              [1, 'zp-scroll-view-hide-scrollbar'],
              [1, '']
            ]
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
                          [1, 'scroll']
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
                                  [1, '_scroll']
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
                        [1, 'scrolltolower']
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
                                [1, '_onScrollToLower']
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
                      [1, 'scrolltoupper']
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
                              [1, '_onScrollToUpper']
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
                    [1, 'refresherrestore']
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
                            [1, '_onRestore']
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
                  [1, 'refresherrefresh']
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
                          [1, '_onRefresh']
                        ],
                        [
                          [4],
                          [
                            [5],
                            [1, true]
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
        Z([3, 'zp-scroll-view'])
        Z([
          [7],
          [3, 'finalEnableBackToTop']
        ])
        Z([
          [7],
          [3, 'finalLowerThreshold']
        ])
        Z([
          [7],
          [3, 'refresherBackground']
        ])
        Z([
          [7],
          [3, 'finalRefresherDefaultStyle']
        ])
        Z([
          [2, '&&'],
          [
            [7],
            [3, 'finalRefresherEnabled']
          ],
          [
            [2, '!'],
            [
              [7],
              [3, 'useCustomRefresher']
            ]
          ]
        ])
        Z([
          [7],
          [3, 'finalRefresherThreshold']
        ])
        Z([
          [7],
          [3, 'finalRefresherTriggered']
        ])
        Z([
          [7],
          [3, 'scrollIntoView']
        ])
        Z([
          [7],
          [3, 'scrollTop']
        ])
        Z([
          [7],
          [3, 'finalScrollWithAnimation']
        ])
        Z([
          [7],
          [3, 'scrollX']
        ])
        Z([
          [7],
          [3, 'finalScrollable']
        ])
        Z([
          [7],
          [3, 'showScrollbar']
        ])
        Z([
          [6],
          [
            [7],
            [3, '$root']
          ],
          [3, 's3']
        ])
        Z([1, 5])
        Z([
          [6],
          [
            [7],
            [3, 'pagingWxs']
          ],
          [3, 'mousedown']
        ])
        Z([
          [6],
          [
            [7],
            [3, 'pagingWxs']
          ],
          [3, 'mouseleave']
        ])
        Z([
          [6],
          [
            [7],
            [3, 'pagingWxs']
          ],
          [3, 'mousemove']
        ])
        Z([
          [6],
          [
            [7],
            [3, 'pagingWxs']
          ],
          [3, 'mouseup']
        ])
        Z([
          [6],
          [
            [7],
            [3, 'pagingWxs']
          ],
          [3, 'touchend']
        ])
        Z(z[48])
        Z([
          [6],
          [
            [7],
            [3, 'pagingWxs']
          ],
          [3, 'touchmove']
        ])
        Z([
          [6],
          [
            [7],
            [3, 'pagingWxs']
          ],
          [3, 'touchstart']
        ])
        Z([3, 'zp-paging-touch-view data-v-262182c8'])
        Z([
          [2, '>'],
          [
            [7],
            [3, 'finalRefresherFixedBacHeight']
          ],
          [1, 0]
        ])
        Z([
          [6],
          [
            [7],
            [3, 'pagingWxs']
          ],
          [3, 'propObserver']
        ])
        Z([3, 'zp-paging-main data-v-262182c8'])
        Z([
          [7],
          [3, 'hasTouchmove']
        ])
        Z([
          [7],
          [3, 'isIos']
        ])
        Z([
          [2, '||'],
          [
            [7],
            [3, 'loading']
          ],
          [
            [7],
            [3, 'isRefresherInComplete']
          ]
        ])
        Z([
          [7],
          [3, 'isTouchmoving']
        ])
        Z([
          [7],
          [3, 'wxsPageScrollTop']
        ])
        Z([
          [7],
          [3, 'refresherAngleEnableChangeContinued']
        ])
        Z([
          [7],
          [3, 'refresherEnabled']
        ])
        Z([
          [7],
          [3, 'refresherF2Enabled']
        ])
        Z([
          [7],
          [3, 'finalRefresherF2Threshold']
        ])
        Z([
          [7],
          [3, 'refresherMaxAngle']
        ])
        Z([
          [7],
          [3, 'refresherNoTransform']
        ])
        Z([
          [7],
          [3, 'finalRefresherOutRate']
        ])
        Z([
          [7],
          [3, 'finalRefresherPullRate']
        ])
        Z(z[34])
        Z([
          [7],
          [3, 'wxsScrollTop']
        ])
        Z([
          [7],
          [3, 'useChatRecordMode']
        ])
        Z([
          [7],
          [3, 'useCustomRefresher']
        ])
        Z([
          [7],
          [3, 'usePageScroll']
        ])
        Z([
          [7],
          [3, 'watchTouchDirectionChange']
        ])
        Z([
          [7],
          [3, 'wxsPropType']
        ])
        Z([
          [6],
          [
            [7],
            [3, '$root']
          ],
          [3, 's4']
        ])
        Z([
          [7],
          [3, 'showRefresher']
        ])
        Z([3, 'zp-custom-refresher-container data-v-262182c8'])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [
              [2, '+'],
              [1, 'height:'],
              [
                [2, '+'],
                [
                  [7],
                  [3, 'finalRefresherThreshold']
                ],
                [1, 'px']
              ]
            ],
            [1, ';']
          ],
          [
            [2, '+'],
            [
              [2, '+'],
              [1, 'background:'],
              [
                [7],
                [3, 'refresherBackground']
              ]
            ],
            [1, ';']
          ]
        ])
        Z([
          [7],
          [3, 'useRefresherStatusBarPlaceholder']
        ])
        Z([
          [2, '&&'],
          [
            [2, '!'],
            [
              [2, '&&'],
              [
                [6],
                [
                  [7],
                  [3, 'zSlots']
                ],
                [3, 'refresherComplete']
              ],
              [
                [2, '==='],
                [
                  [7],
                  [3, 'refresherStatus']
                ],
                [
                  [6],
                  [
                    [7],
                    [3, 'R']
                  ],
                  [3, 'Complete']
                ]
              ]
            ]
          ],
          [
            [2, '!'],
            [
              [2, '&&'],
              [
                [6],
                [
                  [7],
                  [3, 'zSlots']
                ],
                [3, 'refresherF2']
              ],
              [
                [2, '==='],
                [
                  [7],
                  [3, 'refresherStatus']
                ],
                [
                  [6],
                  [
                    [7],
                    [3, 'R']
                  ],
                  [3, 'GoF2']
                ]
              ]
            ]
          ]
        ])
        Z([3, 'refresher'])
        Z([3, '__l'])
        Z([3, 'scoped-ref'])
        Z([
          [7],
          [3, 'refresherStatus']
        ])
        Z([
          [2, '&&'],
          [
            [6],
            [
              [7],
              [3, 'zSlots']
            ],
            [3, 'refresherComplete']
          ],
          [
            [2, '==='],
            [
              [7],
              [3, 'refresherStatus']
            ],
            [
              [6],
              [
                [7],
                [3, 'R']
              ],
              [3, 'Complete']
            ]
          ]
        ])
        Z([3, 'refresherComplete'])
        Z([
          [2, '&&'],
          [
            [6],
            [
              [7],
              [3, 'zSlots']
            ],
            [3, 'refresherF2']
          ],
          [
            [2, '==='],
            [
              [7],
              [3, 'refresherStatus']
            ],
            [
              [6],
              [
                [7],
                [3, 'R']
              ],
              [3, 'GoF2']
            ]
          ]
        ])
        Z([3, 'refresherF2'])
        Z([
          [2, '!'],
          [
            [7],
            [3, 'showCustomRefresher']
          ]
        ])
        Z(z[83])
        Z([3, 'zp-custom-refresher-refresh data-v-262182c8 vue-ref'])
        Z([
          [7],
          [3, 'refresherCompleteImg']
        ])
        Z([
          [7],
          [3, 'finalRefresherCompleteText']
        ])
        Z([3, 'refresh'])
        Z([
          [7],
          [3, 'refresherDefaultImg']
        ])
        Z([
          [7],
          [3, 'finalRefresherDefaultText']
        ])
        Z([
          [7],
          [3, 'finalRefresherThemeStyle']
        ])
        Z([
          [7],
          [3, 'finalRefresherGoF2Text']
        ])
        Z([
          [7],
          [3, 'refresherImgStyle']
        ])
        Z([
          [7],
          [3, 'refresherPullingImg']
        ])
        Z([
          [7],
          [3, 'finalRefresherPullingText']
        ])
        Z([
          [7],
          [3, 'refresherRefreshingAnimated']
        ])
        Z([
          [7],
          [3, 'refresherRefreshingImg']
        ])
        Z([
          [7],
          [3, 'finalRefresherRefreshingText']
        ])
        Z([
          [7],
          [3, 'showRefresherUpdateTime']
        ])
        Z(z[85])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [1, 'height:'],
            [
              [2, '+'],
              [
                [2, '-'],
                [
                  [7],
                  [3, 'finalRefresherThreshold']
                ],
                [
                  [7],
                  [3, 'finalRefresherThresholdPlaceholder']
                ]
              ],
              [1, 'px']
            ]
          ],
          [1, ';']
        ])
        Z([
          [7],
          [3, 'refresherTitleStyle']
        ])
        Z([
          [7],
          [3, 'unit']
        ])
        Z([
          [7],
          [3, 'refresherUpdateTimeKey']
        ])
        Z([
          [7],
          [3, 'refresherUpdateTimeStyle']
        ])
        Z([
          [7],
          [3, 'finalRefresherUpdateTimeTextMap']
        ])
        Z([3, '085f6eae-1'])
        Z([3, 'zp-paging-container data-v-262182c8'])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [1, 'justify-content:'],
            [
              [2, '?:'],
              [
                [7],
                [3, 'useChatRecordMode']
              ],
              [1, 'flex-end'],
              [1, 'flex-start']
            ]
          ],
          [1, ';']
        ])
        Z([
          [2, '&&'],
          [
            [2, '&&'],
            [
              [7],
              [3, 'showLoading']
            ],
            [
              [6],
              [
                [7],
                [3, 'zSlots']
              ],
              [3, 'loading']
            ]
          ],
          [
            [2, '!'],
            [
              [7],
              [3, 'loadingFullFixed']
            ]
          ]
        ])
        Z([3, 'loading'])
        Z([3, 'zp-paging-container-content data-v-262182c8'])
        Z([
          [6],
          [
            [7],
            [3, '$root']
          ],
          [3, 's5']
        ])
        Z([
          [7],
          [3, 'useVirtualList']
        ])
        Z([
          [7],
          [3, 'finalUseInnerList']
        ])
        Z([3, 'header'])
        Z([3, 'zp-list-container data-v-262182c8'])
        Z([
          [6],
          [
            [7],
            [3, '$root']
          ],
          [3, 's6']
        ])
        Z([
          [7],
          [3, 'finalUseVirtualList']
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
        Z([3, 'zp_unique_index'])
        Z(z[4])
        Z([3, 'zp-list-cell data-v-262182c8'])
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
                            [1, '_innerCellClick']
                          ],
                          [
                            [4],
                            [
                              [5],
                              [
                                [5],
                                [1, '$0']
                              ],
                              [
                                [2, '+'],
                                [
                                  [7],
                                  [3, 'virtualTopRangeIndex']
                                ],
                                [
                                  [7],
                                  [3, 'index']
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
                                        [1, 'virtualList']
                                      ],
                                      [1, 'zp_unique_index']
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
                                      [1, 'zp_unique_index']
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
        Z([
          [2, '+'],
          [1, 'zp-id-'],
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
            [
              [7],
              [3, 'virtualCellIndexKey']
            ]
          ]
        ])
        Z([
          [6],
          [
            [7],
            [3, 'item']
          ],
          [3, 's7']
        ])
        Z([
          [7],
          [3, 'useCompatibilityMode']
        ])
        Z([3, 'cell'])
        Z(z[83])
        Z(z[84])
        Z([
          [2, '+'],
          [
            [7],
            [3, 'virtualTopRangeIndex']
          ],
          [
            [7],
            [3, 'index']
          ]
        ])
        Z([
          [6],
          [
            [7],
            [3, 'item']
          ],
          [3, '$orig']
        ])
        Z(z[127])
        Z(z[128])
        Z([
          [6],
          [
            [7],
            [3, '$root']
          ],
          [3, 'l1']
        ])
        Z(z[127])
        Z(z[4])
        Z(z[132])
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
                            [1, '_innerCellClick']
                          ],
                          [
                            [4],
                            [
                              [5],
                              [
                                [5],
                                [1, '$0']
                              ],
                              [
                                [7],
                                [3, 'index']
                              ]
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
                                        [1, 'realTotalData']
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
        Z(z[137])
        Z(z[83])
        Z(z[84])
        Z([
          [7],
          [3, 'index']
        ])
        Z(z[141])
        Z([3, 'footer'])
        Z([
          [6],
          [
            [7],
            [3, '$root']
          ],
          [3, 'g0']
        ])
        Z([3, 'data-v-262182c8'])
        Z([
          [6],
          [
            [7],
            [3, '$root']
          ],
          [3, 's8']
        ])
        Z([
          [2, '&&'],
          [
            [2, '==='],
            [
              [7],
              [3, 'loadingStatus']
            ],
            [
              [6],
              [
                [7],
                [3, 'M']
              ],
              [3, 'NoMore']
            ]
          ],
          [
            [6],
            [
              [7],
              [3, 'zSlots']
            ],
            [3, 'chatNoMore']
          ]
        ])
        Z([3, 'chatNoMore'])
        Z([
          [6],
          [
            [7],
            [3, 'zSlots']
          ],
          [3, 'chatLoading']
        ])
        Z([3, 'chatLoading'])
        Z(z[83])
        Z(z[84])
        Z([
          [7],
          [3, 'loadingStatus']
        ])
        Z(z[83])
        Z(z[4])
        Z(z[156])
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
                  [1, '^doClick']
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
                          [1, '_onLoadingMore']
                        ],
                        [
                          [4],
                          [
                            [5],
                            [1, 'click']
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
        Z([3, '085f6eae-2'])
        Z([
          [7],
          [3, 'zLoadMoreConfig']
        ])
        Z(z[121])
        Z([
          [7],
          [3, 'showLoadingMoreDefault']
        ])
        Z([3, 'loadingMoreDefault'])
        Z([
          [7],
          [3, 'showLoadingMoreLoading']
        ])
        Z([3, 'loadingMoreLoading'])
        Z([
          [7],
          [3, 'showLoadingMoreNoMore']
        ])
        Z([3, 'loadingMoreNoMore'])
        Z([
          [7],
          [3, 'showLoadingMoreFail']
        ])
        Z([3, 'loadingMoreFail'])
        Z([
          [7],
          [3, 'showLoadingMoreCustom']
        ])
        Z(z[83])
        Z(z[4])
        Z(z[156])
        Z(z[168])
        Z([3, '085f6eae-3'])
        Z(z[170])
        Z([
          [2, '&&'],
          [
            [2, '&&'],
            [
              [7],
              [3, 'safeAreaInsetBottom']
            ],
            [
              [7],
              [3, 'useSafeAreaPlaceholder']
            ]
          ],
          [
            [2, '!'],
            [
              [7],
              [3, 'useChatRecordMode']
            ]
          ]
        ])
        Z([
          [6],
          [
            [7],
            [3, 'zSlots']
          ],
          [3, 'right']
        ])
        Z([3, 'right'])
        Z([3, 'zp-page-bottom-container data-v-262182c8'])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [1, 'background:'],
            [
              [7],
              [3, 'bottomBgColor']
            ]
          ],
          [1, ';']
        ])
        Z([
          [2, '&&'],
          [
            [2, '!'],
            [
              [7],
              [3, 'usePageScroll']
            ]
          ],
          [
            [6],
            [
              [7],
              [3, 'zSlots']
            ],
            [3, 'bottom']
          ]
        ])
        Z([3, 'bottom'])
        Z([
          [2, '&&'],
          [
            [7],
            [3, 'usePageScroll']
          ],
          [
            [6],
            [
              [7],
              [3, 'zSlots']
            ],
            [3, 'bottom']
          ]
        ])
        Z(z[4])
        Z([3, 'zp-page-bottom data-v-262182c8'])
        Z(z[6])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [1, 'bottom:'],
            [
              [2, '+'],
              [
                [7],
                [3, 'windowBottom']
              ],
              [1, 'px']
            ]
          ],
          [1, ';']
        ])
        Z(z[193])
        Z([
          [2, '&&'],
          [
            [7],
            [3, 'useChatRecordMode']
          ],
          [
            [7],
            [3, 'autoAdjustPositionWhenChat']
          ]
        ])
        Z([
          [7],
          [3, 'showBackToTopClass']
        ])
        Z(z[4])
        Z([
          [4],
          [
            [5],
            [
              [5],
              [1, 'data-v-262182c8']
            ],
            [
              [7],
              [3, 'finalBackToTopClass']
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
                          [1, '_backToTopClick']
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
          [6],
          [
            [7],
            [3, '$root']
          ],
          [3, 's9']
        ])
        Z([
          [6],
          [
            [7],
            [3, 'zSlots']
          ],
          [3, 'backToTop']
        ])
        Z([3, 'backToTop'])
        Z([
          [2, '&&'],
          [
            [2, '&&'],
            [
              [7],
              [3, 'showLoading']
            ],
            [
              [6],
              [
                [7],
                [3, 'zSlots']
              ],
              [3, 'loading']
            ]
          ],
          [
            [7],
            [3, 'loadingFullFixed']
          ]
        ])
        Z(z[118])
      })(__WXML_GLOBAL__.ops_cached.$gwx4_XC_7_4);
      return __WXML_GLOBAL__.ops_cached.$gwx4_XC_7_4
    }
    __WXML_GLOBAL__.ops_set.$gwx4_XC_7 = z;
    __WXML_GLOBAL__.ops_init.$gwx4_XC_7 = true;
    var x = ['./union/components1/z-paging-empty-view/z-paging-empty-view.wxml', './union/components1/z-paging/components/z-paging-load-more.wxml', './union/components1/z-paging/components/z-paging-refresh.wxml', './union/components1/z-paging/z-paging.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx4_XC_7_1()
      var cAI = _mz(z, 'view', ['bindtap', 0, 'class', 1, 'data-event-opts', 1, 'style', 2], [], e, s, gg)
      var oBI = _v()
      _(cAI, oBI)
      if (_oz(z, 4, e, s, gg)) {
        oBI.wxVkey = 1
      }
      oBI.wxXCkey = 1
      _(r, cAI)
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
      var z = gz$gwx4_XC_7_2()
      var aDI = _mz(z, 'view', ['bindtap', 0, 'class', 1, 'data-event-opts', 1, 'style', 2], [], e, s, gg)
      var tEI = _v()
      _(aDI, tEI)
      if (_oz(z, 4, e, s, gg)) {
        tEI.wxVkey = 1
        var eFI = _v()
        _(tEI, eFI)
        if (_oz(z, 5, e, s, gg)) {
          eFI.wxVkey = 1
        }
        var bGI = _v()
        _(tEI, bGI)
        if (_oz(z, 6, e, s, gg)) {
          bGI.wxVkey = 1
        }
        var oHI = _v()
        _(tEI, oHI)
        if (_oz(z, 7, e, s, gg)) {
          oHI.wxVkey = 1
        }
        var xII = _v()
        _(tEI, xII)
        if (_oz(z, 8, e, s, gg)) {
          xII.wxVkey = 1
        }
        var oJI = _v()
        _(tEI, oJI)
        if (_oz(z, 9, e, s, gg)) {
          oJI.wxVkey = 1
        }
        var fKI = _v()
        _(tEI, fKI)
        if (_oz(z, 10, e, s, gg)) {
          fKI.wxVkey = 1
        }
        eFI.wxXCkey = 1
        bGI.wxXCkey = 1
        oHI.wxXCkey = 1
        xII.wxXCkey = 1
        oJI.wxXCkey = 1
        fKI.wxXCkey = 1
      }
      tEI.wxXCkey = 1
      _(r, aDI)
      return r
    }
    e_[x[1]] = {
      f: m1,
      j: [],
      i: [],
      ti: [],
      ic: []
    }
    d_[x[2]] = {}
    var m2 = function(e, s, r, gg) {
      var z = gz$gwx4_XC_7_3()
      var hMI = _v()
      _(r, hMI)
      if (_oz(z, 0, e, s, gg)) {
        hMI.wxVkey = 1
      }
      hMI.wxXCkey = 1
      return r
    }
    e_[x[2]] = {
      f: m2,
      j: [],
      i: [],
      ti: [],
      ic: []
    }
    d_[x[3]] = {}
    var m3 = function(e, s, r, gg) {
      var z = gz$gwx4_XC_7_4()
      var cOI = _mz(z, 'view', ['class', 0, 'style', 1], [], e, s, gg)
      var oPI = _v()
      _(cOI, oPI)
      if (_oz(z, 2, e, s, gg)) {
        oPI.wxVkey = 1
      }
      var lQI = _v()
      _(cOI, lQI)
      if (_oz(z, 3, e, s, gg)) {
        lQI.wxVkey = 1
        var bUI = _mz(z, 'view', ['catchtouchmove', 4, 'class', 1, 'data-event-opts', 2, 'style', 3], [], e, s, gg)
        var oVI = _n('slot')
        _rz(z, oVI, 'name', 8, e, s, gg)
        _(bUI, oVI)
        _(lQI, bUI)
      }
      var aRI = _v()
      _(cOI, aRI)
      if (_oz(z, 9, e, s, gg)) {
        aRI.wxVkey = 1
        var xWI = _n('slot')
        _rz(z, xWI, 'name', 10, e, s, gg)
        _(aRI, xWI)
      } else {
        aRI.wxVkey = 2
        var oXI = _v()
        _(aRI, oXI)
        if (_oz(z, 11, e, s, gg)) {
          oXI.wxVkey = 1
          var fYI = _mz(z, 'view', ['catchtouchmove', 12, 'class', 1, 'data-event-opts', 2, 'style', 3], [], e, s, gg)
          var cZI = _n('slot')
          _rz(z, cZI, 'name', 16, e, s, gg)
          _(fYI, cZI)
          _(oXI, fYI)
        }
        oXI.wxXCkey = 1
      }
      var h1I = _mz(z, 'view', ['class', 17, 'style', 1], [], e, s, gg)
      var o2I = _v()
      _(h1I, o2I)
      if (_oz(z, 19, e, s, gg)) {
        o2I.wxVkey = 1
        var o4I = _n('slot')
        _rz(z, o4I, 'name', 20, e, s, gg)
        _(o2I, o4I)
      }
      var l5I = _mz(z, 'scroll-view', ['bindrefresherrefresh', 21, 'bindrefresherrestore', 1, 'bindscroll', 2, 'bindscrolltolower', 3, 'bindscrolltoupper', 4, 'class', 5, 'data-event-opts', 6, 'data-ref', 7, 'enableBackToTop', 8, 'lowerThreshold', 9, 'refresherBackground', 10, 'refresherDefaultStyle', 11, 'refresherEnabled', 12, 'refresherThreshold', 13, 'refresherTriggered', 14, 'scrollIntoView', 15, 'scrollTop', 16, 'scrollWithAnimation', 17, 'scrollX', 18, 'scrollY', 19, 'showScrollbar', 20, 'style', 21, 'upperThreshold', 22], [], e, s, gg)
      var a6I = _mz(z, 'view', ['bindmousedown', 44, 'bindmouseleave', 1, 'bindmousemove', 2, 'bindmouseup', 3, 'bindtouchcancel', 4, 'bindtouchend', 5, 'bindtouchmove', 6, 'bindtouchstart', 7, 'class', 8], [], e, s, gg)
      var t7I = _v()
      _(a6I, t7I)
      if (_oz(z, 53, e, s, gg)) {
        t7I.wxVkey = 1
      }
      var e8I = _mz(z, 'view', ['change:prop', 54, 'class', 1, 'data-hasTouchmove', 2, 'data-isIos', 3, 'data-loading', 4, 'data-oldIsTouchmoving', 5, 'data-pageScrollTop', 6, 'data-refresherAecc', 7, 'data-refresherEnabled', 8, 'data-refresherF2Enabled', 9, 'data-refresherF2Threshold', 10, 'data-refresherMaxAngle', 11, 'data-refresherNoTransform', 12, 'data-refresherOutRate', 13, 'data-refresherPullRate', 14, 'data-refresherThreshold', 15, 'data-scrollTop', 16, 'data-useChatRecordMode', 17, 'data-useCustomRefresher', 18, 'data-usePageScroll', 19, 'data-watchTouchDirectionChange', 20, 'prop', 21, 'style', 22], [], e, s, gg)
      var b9I = _v()
      _(e8I, b9I)
      if (_oz(z, 77, e, s, gg)) {
        b9I.wxVkey = 1
        var o0I = _mz(z, 'view', ['class', 78, 'style', 1], [], e, s, gg)
        var xAJ = _v()
        _(o0I, xAJ)
        if (_oz(z, 80, e, s, gg)) {
          xAJ.wxVkey = 1
        }
        var oBJ = _v()
        _(o0I, oBJ)
        if (_oz(z, 81, e, s, gg)) {
          oBJ.wxVkey = 1
          var cDJ = _n('slot')
          _rz(z, cDJ, 'name', 82, e, s, gg)
          _(oBJ, cDJ)
          var hEJ = _mz(z, 'scoped-slots-refresher', ['bind:__l', 83, 'class', 1, 'refresherStatus', 2], [], e, s, gg)
          _(oBJ, hEJ)
        }
        var fCJ = _v()
        _(o0I, fCJ)
        if (_oz(z, 86, e, s, gg)) {
          fCJ.wxVkey = 1
          var oFJ = _n('slot')
          _rz(z, oFJ, 'name', 87, e, s, gg)
          _(fCJ, oFJ)
        } else {
          fCJ.wxVkey = 2
          var cGJ = _v()
          _(fCJ, cGJ)
          if (_oz(z, 88, e, s, gg)) {
            cGJ.wxVkey = 1
            var oHJ = _n('slot')
            _rz(z, oHJ, 'name', 89, e, s, gg)
            _(cGJ, oHJ)
          } else {
            cGJ.wxVkey = 2
            var lIJ = _v()
            _(cGJ, lIJ)
            if (_oz(z, 90, e, s, gg)) {
              lIJ.wxVkey = 1
              var aJJ = _mz(z, 'z-paging-refresh', ['bind:__l', 91, 'class', 1, 'completeImg', 2, 'completeText', 3, 'data-ref', 4, 'defaultImg', 5, 'defaultText', 6, 'defaultThemeStyle', 7, 'goF2Text', 8, 'imgStyle', 9, 'pullingImg', 10, 'pullingText', 11, 'refreshingAnimated', 12, 'refreshingImg', 13, 'refreshingText', 14, 'showUpdateTime', 15, 'status', 16, 'style', 17, 'titleStyle', 18, 'unit', 19, 'updateTimeKey', 20, 'updateTimeStyle', 21, 'updateTimeTextMap', 22, 'vueId', 23], [], e, s, gg)
              _(lIJ, aJJ)
            }
            lIJ.wxXCkey = 1
            lIJ.wxXCkey = 3
          }
          cGJ.wxXCkey = 1
          cGJ.wxXCkey = 3
        }
        xAJ.wxXCkey = 1
        oBJ.wxXCkey = 1
        oBJ.wxXCkey = 3
        fCJ.wxXCkey = 1
        fCJ.wxXCkey = 3
        _(b9I, o0I)
      }
      var tKJ = _mz(z, 'view', ['class', 115, 'style', 1], [], e, s, gg)
      var eLJ = _v()
      _(tKJ, eLJ)
      if (_oz(z, 117, e, s, gg)) {
        eLJ.wxVkey = 1
        var bMJ = _n('slot')
        _rz(z, bMJ, 'name', 118, e, s, gg)
        _(eLJ, bMJ)
      }
      var oNJ = _mz(z, 'view', ['class', 119, 'style', 1], [], e, s, gg)
      var xOJ = _v()
      _(oNJ, xOJ)
      if (_oz(z, 121, e, s, gg)) {
        xOJ.wxVkey = 1
      }
      var cUJ = _n('slot')
      _(oNJ, cUJ)
      var oPJ = _v()
      _(oNJ, oPJ)
      if (_oz(z, 122, e, s, gg)) {
        oPJ.wxVkey = 1
        var oVJ = _n('slot')
        _rz(z, oVJ, 'name', 123, e, s, gg)
        _(oPJ, oVJ)
        var lWJ = _mz(z, 'view', ['class', 124, 'style', 1], [], e, s, gg)
        var aXJ = _v()
        _(lWJ, aXJ)
        if (_oz(z, 126, e, s, gg)) {
          aXJ.wxVkey = 1
          var tYJ = _v()
          _(aXJ, tYJ)
          var eZJ = function(o2J, b1J, x3J, gg) {
            var f5J = _mz(z, 'view', ['bindtap', 131, 'class', 1, 'data-event-opts', 2, 'id', 3, 'style', 4], [], o2J, b1J, gg)
            var c6J = _v()
            _(f5J, c6J)
            if (_oz(z, 136, o2J, b1J, gg)) {
              c6J.wxVkey = 1
            } else {
              c6J.wxVkey = 2
              var h7J = _n('slot')
              _rz(z, h7J, 'name', 137, o2J, b1J, gg)
              _(c6J, h7J)
              var o8J = _mz(z, 'scoped-slots-cell', ['bind:__l', 138, 'class', 1, 'index', 2, 'item', 3], [], o2J, b1J, gg)
              _(c6J, o8J)
            }
            c6J.wxXCkey = 1
            c6J.wxXCkey = 3
            _(x3J, f5J)
            return x3J
          }
          tYJ.wxXCkey = 4
          _2z(z, 129, eZJ, e, s, gg, tYJ, 'item', 'index', 'zp_unique_index')
        } else {
          aXJ.wxVkey = 2
          var c9J = _v()
          _(aXJ, c9J)
          var o0J = function(aBK, lAK, tCK, gg) {
            var bEK = _mz(z, 'view', ['bindtap', 146, 'class', 1, 'data-event-opts', 2], [], aBK, lAK, gg)
            var oFK = _n('slot')
            _rz(z, oFK, 'name', 149, aBK, lAK, gg)
            _(bEK, oFK)
            var xGK = _mz(z, 'scoped-slots-cell', ['bind:__l', 150, 'class', 1, 'index', 2, 'item', 3], [], aBK, lAK, gg)
            _(bEK, xGK)
            _(tCK, bEK)
            return tCK
          }
          c9J.wxXCkey = 4
          _2z(z, 144, o0J, e, s, gg, c9J, 'item', 'index', 'index')
        }
        aXJ.wxXCkey = 1
        aXJ.wxXCkey = 3
        aXJ.wxXCkey = 3
        _(oPJ, lWJ)
        var oHK = _n('slot')
        _rz(z, oHK, 'name', 154, e, s, gg)
        _(oPJ, oHK)
      }
      var fQJ = _v()
      _(oNJ, fQJ)
      if (_oz(z, 155, e, s, gg)) {
        fQJ.wxVkey = 1
        var fIK = _mz(z, 'view', ['class', 156, 'style', 1], [], e, s, gg)
        var cJK = _v()
        _(fIK, cJK)
        if (_oz(z, 158, e, s, gg)) {
          cJK.wxVkey = 1
          var hKK = _n('slot')
          _rz(z, hKK, 'name', 159, e, s, gg)
          _(cJK, hKK)
        } else {
          cJK.wxVkey = 2
          var oLK = _v()
          _(cJK, oLK)
          if (_oz(z, 160, e, s, gg)) {
            oLK.wxVkey = 1
            var cMK = _n('slot')
            _rz(z, cMK, 'name', 161, e, s, gg)
            _(oLK, cMK)
            var oNK = _mz(z, 'scoped-slots-chatLoading', ['bind:__l', 162, 'class', 1, 'loadingMoreStatus', 2], [], e, s, gg)
            _(oLK, oNK)
          } else {
            oLK.wxVkey = 2
            var lOK = _mz(z, 'z-paging-load-more', ['bind:__l', 165, 'bind:doClick', 1, 'class', 2, 'data-event-opts', 3, 'vueId', 4, 'zConfig', 5], [], e, s, gg)
            _(oLK, lOK)
          }
          oLK.wxXCkey = 1
          oLK.wxXCkey = 3
          oLK.wxXCkey = 3
        }
        cJK.wxXCkey = 1
        cJK.wxXCkey = 3
        _(fQJ, fIK)
      }
      var cRJ = _v()
      _(oNJ, cRJ)
      if (_oz(z, 171, e, s, gg)) {
        cRJ.wxVkey = 1
      }
      var hSJ = _v()
      _(oNJ, hSJ)
      if (_oz(z, 172, e, s, gg)) {
        hSJ.wxVkey = 1
        var aPK = _n('slot')
        _rz(z, aPK, 'name', 173, e, s, gg)
        _(hSJ, aPK)
      } else {
        hSJ.wxVkey = 2
        var tQK = _v()
        _(hSJ, tQK)
        if (_oz(z, 174, e, s, gg)) {
          tQK.wxVkey = 1
          var eRK = _n('slot')
          _rz(z, eRK, 'name', 175, e, s, gg)
          _(tQK, eRK)
        } else {
          tQK.wxVkey = 2
          var bSK = _v()
          _(tQK, bSK)
          if (_oz(z, 176, e, s, gg)) {
            bSK.wxVkey = 1
            var oTK = _n('slot')
            _rz(z, oTK, 'name', 177, e, s, gg)
            _(bSK, oTK)
          } else {
            bSK.wxVkey = 2
            var xUK = _v()
            _(bSK, xUK)
            if (_oz(z, 178, e, s, gg)) {
              xUK.wxVkey = 1
              var oVK = _n('slot')
              _rz(z, oVK, 'name', 179, e, s, gg)
              _(xUK, oVK)
            } else {
              xUK.wxVkey = 2
              var fWK = _v()
              _(xUK, fWK)
              if (_oz(z, 180, e, s, gg)) {
                fWK.wxVkey = 1
                var cXK = _mz(z, 'z-paging-load-more', ['bind:__l', 181, 'bind:doClick', 1, 'class', 2, 'data-event-opts', 3, 'vueId', 4, 'zConfig', 5], [], e, s, gg)
                _(fWK, cXK)
              }
              fWK.wxXCkey = 1
              fWK.wxXCkey = 3
            }
            xUK.wxXCkey = 1
            xUK.wxXCkey = 3
          }
          bSK.wxXCkey = 1
          bSK.wxXCkey = 3
        }
        tQK.wxXCkey = 1
        tQK.wxXCkey = 3
      }
      var oTJ = _v()
      _(oNJ, oTJ)
      if (_oz(z, 187, e, s, gg)) {
        oTJ.wxVkey = 1
      }
      xOJ.wxXCkey = 1
      oPJ.wxXCkey = 1
      oPJ.wxXCkey = 3
      fQJ.wxXCkey = 1
      fQJ.wxXCkey = 3
      cRJ.wxXCkey = 1
      hSJ.wxXCkey = 1
      hSJ.wxXCkey = 3
      oTJ.wxXCkey = 1
      _(tKJ, oNJ)
      eLJ.wxXCkey = 1
      _(e8I, tKJ)
      b9I.wxXCkey = 1
      b9I.wxXCkey = 3
      _(a6I, e8I)
      t7I.wxXCkey = 1
      _(l5I, a6I)
      _(h1I, l5I)
      var c3I = _v()
      _(h1I, c3I)
      if (_oz(z, 188, e, s, gg)) {
        c3I.wxVkey = 1
        var hYK = _n('slot')
        _rz(z, hYK, 'name', 189, e, s, gg)
        _(c3I, hYK)
      }
      o2I.wxXCkey = 1
      c3I.wxXCkey = 1
      _(cOI, h1I)
      var oZK = _mz(z, 'view', ['class', 190, 'style', 1], [], e, s, gg)
      var c1K = _v()
      _(oZK, c1K)
      if (_oz(z, 192, e, s, gg)) {
        c1K.wxVkey = 1
        var l3K = _n('slot')
        _rz(z, l3K, 'name', 193, e, s, gg)
        _(c1K, l3K)
      } else {
        c1K.wxVkey = 2
        var a4K = _v()
        _(c1K, a4K)
        if (_oz(z, 194, e, s, gg)) {
          a4K.wxVkey = 1
          var t5K = _mz(z, 'view', ['catchtouchmove', 195, 'class', 1, 'data-event-opts', 2, 'style', 3], [], e, s, gg)
          var e6K = _n('slot')
          _rz(z, e6K, 'name', 199, e, s, gg)
          _(t5K, e6K)
          _(a4K, t5K)
        }
        a4K.wxXCkey = 1
      }
      var o2K = _v()
      _(oZK, o2K)
      if (_oz(z, 200, e, s, gg)) {
        o2K.wxVkey = 1
      }
      c1K.wxXCkey = 1
      o2K.wxXCkey = 1
      _(cOI, oZK)
      var tSI = _v()
      _(cOI, tSI)
      if (_oz(z, 201, e, s, gg)) {
        tSI.wxVkey = 1
        var b7K = _mz(z, 'view', ['catchtap', 202, 'class', 1, 'data-event-opts', 2, 'style', 3], [], e, s, gg)
        var o8K = _v()
        _(b7K, o8K)
        if (_oz(z, 206, e, s, gg)) {
          o8K.wxVkey = 1
          var x9K = _n('slot')
          _rz(z, x9K, 'name', 207, e, s, gg)
          _(o8K, x9K)
        } else {
          o8K.wxVkey = 2
        }
        o8K.wxXCkey = 1
        _(tSI, b7K)
      }
      var eTI = _v()
      _(cOI, eTI)
      if (_oz(z, 208, e, s, gg)) {
        eTI.wxVkey = 1
        var o0K = _n('slot')
        _rz(z, o0K, 'name', 209, e, s, gg)
        _(eTI, o0K)
      }
      oPI.wxXCkey = 1
      lQI.wxXCkey = 1
      aRI.wxXCkey = 1
      tSI.wxXCkey = 1
      eTI.wxXCkey = 1
      _(r, cOI)
      return r
    }
    e_[x[3]] = {
      f: m3,
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
        g = "$gwx4_XC_7";
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
if (__vd_version_info__.delayedGwx || false) $gwx4_XC_7();
if (__vd_version_info__.delayedGwx) __wxAppCode__['union/components1/z-paging-empty-view/z-paging-empty-view.wxml'] = [$gwx4_XC_7, './union/components1/z-paging-empty-view/z-paging-empty-view.wxml'];
else __wxAppCode__['union/components1/z-paging-empty-view/z-paging-empty-view.wxml'] = $gwx4_XC_7('./union/components1/z-paging-empty-view/z-paging-empty-view.wxml');
if (__vd_version_info__.delayedGwx) __wxAppCode__['union/components1/z-paging/components/z-paging-load-more.wxml'] = [$gwx4_XC_7, './union/components1/z-paging/components/z-paging-load-more.wxml'];
else __wxAppCode__['union/components1/z-paging/components/z-paging-load-more.wxml'] = $gwx4_XC_7('./union/components1/z-paging/components/z-paging-load-more.wxml');
if (__vd_version_info__.delayedGwx) __wxAppCode__['union/components1/z-paging/components/z-paging-refresh.wxml'] = [$gwx4_XC_7, './union/components1/z-paging/components/z-paging-refresh.wxml'];
else __wxAppCode__['union/components1/z-paging/components/z-paging-refresh.wxml'] = $gwx4_XC_7('./union/components1/z-paging/components/z-paging-refresh.wxml');
if (__vd_version_info__.delayedGwx) __wxAppCode__['union/components1/z-paging/z-paging.wxml'] = [$gwx4_XC_7, './union/components1/z-paging/z-paging.wxml'];
else __wxAppCode__['union/components1/z-paging/z-paging.wxml'] = $gwx4_XC_7('./union/components1/z-paging/z-paging.wxml');;
__wxRoute = "union/components1/z-paging-empty-view/z-paging-empty-view";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "union/components1/z-paging-empty-view/z-paging-empty-view.js";
define("union/components1/z-paging-empty-view/z-paging-empty-view.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["union/components1/z-paging-empty-view/z-paging-empty-view"], {
      "1fb7": function(e, t, n) {},
      "29b3c": function(e, t, n) {
        var i = n("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var a = i(n("96f1")),
          o = {
            name: "z-paging-empty-view",
            data: function() {
              return {}
            },
            props: {
              emptyViewText: {
                type: String,
                default: "没有数据哦~"
              },
              emptyViewImg: {
                type: String,
                default: ""
              },
              showEmptyViewReload: {
                type: Boolean,
                default: !1
              },
              emptyViewReloadText: {
                type: String,
                default: "重新加载"
              },
              isLoadFailed: {
                type: Boolean,
                default: !1
              },
              emptyViewStyle: {
                type: Object,
                default: function() {
                  return {}
                }
              },
              emptyViewImgStyle: {
                type: Object,
                default: function() {
                  return {}
                }
              },
              emptyViewTitleStyle: {
                type: Object,
                default: function() {
                  return {}
                }
              },
              emptyViewReloadStyle: {
                type: Object,
                default: function() {
                  return {}
                }
              },
              emptyViewZIndex: {
                type: Number,
                default: 9
              },
              emptyViewFixed: {
                type: Boolean,
                default: !0
              },
              unit: {
                type: String,
                default: "rpx"
              }
            },
            computed: {
              emptyImg: function() {
                return this.isLoadFailed ? a.default.base64Error : a.default.base64Empty
              },
              finalEmptyViewStyle: function() {
                return this.emptyViewStyle["z-index"] = this.emptyViewZIndex, this.emptyViewStyle
              }
            },
            methods: {
              reloadClick: function() {
                this.$emit("reload")
              },
              emptyViewClick: function() {
                this.$emit("viewClick")
              }
            }
          };
        t.default = o
      },
      "5d586": function(e, t, n) {
        var i = n("1fb7");
        n.n(i).a
      },
      d75c: function(e, t, n) {
        n.d(t, "b", (function() {
          return i
        })), n.d(t, "c", (function() {
          return a
        })), n.d(t, "a", (function() {}));
        var i = function() {
            var e = this,
              t = (e.$createElement, e._self._c, e.__get_style([e.finalEmptyViewStyle])),
              n = e.emptyViewImg.length,
              i = n ? null : e.__get_style([e.emptyViewImgStyle]),
              a = n ? e.__get_style([e.emptyViewImgStyle]) : null,
              o = e.__get_style([e.emptyViewTitleStyle]),
              l = e.showEmptyViewReload ? e.__get_style([e.emptyViewReloadStyle]) : null;
            e.$mp.data = Object.assign({}, {
              $root: {
                s0: t,
                g0: n,
                s1: i,
                s2: a,
                s3: o,
                s4: l
              }
            })
          },
          a = []
      },
      dfa5: function(e, t, n) {
        n.r(t);
        var i = n("d75c"),
          a = n("fccc");
        for (var o in a)["default"].indexOf(o) < 0 && function(e) {
          n.d(t, e, (function() {
            return a[e]
          }))
        }(o);
        n("5d586");
        var l = n("828b"),
          p = Object(l.a)(a.default, i.b, i.c, !1, null, "21d7c678", null, !1, i.a, void 0);
        t.default = p.exports
      },
      fccc: function(e, t, n) {
        n.r(t);
        var i = n("29b3c"),
          a = n.n(i);
        for (var o in i)["default"].indexOf(o) < 0 && function(e) {
          n.d(t, e, (function() {
            return i[e]
          }))
        }(o);
        t.default = a.a
      }
    }
  ]), (global.webpackJsonp = global.webpackJsonp || []).push(["union/components1/z-paging-empty-view/z-paging-empty-view-create-component", {
      "union/components1/z-paging-empty-view/z-paging-empty-view-create-component": function(e, t, n) {
        n("df3c").createComponent(n("dfa5"))
      }
    },
    [
      ["union/components1/z-paging-empty-view/z-paging-empty-view-create-component"]
    ]
  ]);
}, {
  isPage: false,
  isComponent: true,
  currentFile: 'union/components1/z-paging-empty-view/z-paging-empty-view.js'
});
require("union/components1/z-paging-empty-view/z-paging-empty-view.js");;
__wxRoute = "union/components1/z-paging/components/z-paging-load-more";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "union/components1/z-paging/components/z-paging-load-more.js";
define("union/components1/z-paging/components/z-paging-load-more.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["union/components1/z-paging/components/z-paging-load-more"], {
      "014b": function(e, t, n) {
        var o = n("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var a = o(n("96f1")),
          i = o(n("230e")),
          c = {
            name: "z-paging-load-more",
            data: function() {
              return {
                M: i.default.More,
                zTheme: {
                  title: {
                    white: "#efefef",
                    black: "#a4a4a4"
                  },
                  line: {
                    white: "#efefef",
                    black: "#eeeeee"
                  },
                  circleBorder: {
                    white: "#aaaaaa",
                    black: "#c8c8c8"
                  },
                  circleBorderTop: {
                    white: "#ffffff",
                    black: "#444444"
                  },
                  flower: {
                    white: a.default.base64FlowerWhite,
                    black: a.default.base64Flower
                  },
                  indicator: {
                    white: "#eeeeee",
                    black: "#777777"
                  }
                }
              }
            },
            props: ["zConfig"],
            computed: {
              ts: function() {
                return this.c.defaultThemeStyle
              },
              c: function() {
                return this.zConfig || {}
              },
              ownLoadingMoreText: function() {
                return [this.c.defaultText, this.c.loadingText, this.c.noMoreText, this.c.failText][this.finalStatus]
              },
              finalStatus: function() {
                return this.c.defaultAsLoading && this.c.status === this.M.Default ? this.M.Loading : this.c.status
              },
              finalLoadingIconType: function() {
                return this.c.loadingIconType
              }
            },
            methods: {
              doClick: function() {
                this.$emit("doClick")
              }
            }
          };
        t.default = c
      },
      "1e57": function(e, t, n) {
        var o = n("7b87");
        n.n(o).a
      },
      "40a9": function(e, t, n) {
        n.r(t);
        var o = n("5fb4"),
          a = n("6a4a");
        for (var i in a)["default"].indexOf(i) < 0 && function(e) {
          n.d(t, e, (function() {
            return a[e]
          }))
        }(i);
        n("1e57");
        var c = n("828b"),
          l = Object(c.a)(a.default, o.b, o.c, !1, null, "2c9186f8", null, !1, o.a, void 0);
        t.default = l.exports
      },
      "5fb4": function(e, t, n) {
        n.d(t, "b", (function() {
          return o
        })), n.d(t, "c", (function() {
          return a
        })), n.d(t, "a", (function() {}));
        var o = function() {
            var e = this,
              t = (e.$createElement, e._self._c, e.__get_style([e.c.customStyle])),
              n = !e.c.hideContent && e.c.showNoMoreLine && e.finalStatus === e.M.NoMore ? e.__get_style([{
                backgroundColor: e.zTheme.line[e.ts]
              }, e.c.noMoreLineCustomStyle]) : null,
              o = !e.c.hideContent && e.finalStatus === e.M.Loading && e.c.loadingIconCustomImage ? e.__get_style([e.c.iconCustomStyle]) : null,
              a = e.c.hideContent ? null : e.finalStatus === e.M.Loading && "flower" === e.finalLoadingIconType && !e.c.loadingIconCustomImage.length,
              i = !e.c.hideContent && a ? e.__get_style([e.c.iconCustomStyle]) : null,
              c = e.c.hideContent ? null : e.finalStatus === e.M.Loading && "circle" === e.finalLoadingIconType && !e.c.loadingIconCustomImage.length,
              l = !e.c.hideContent && c ? e.__get_style([{
                borderColor: e.zTheme.circleBorder[e.ts],
                borderTopColor: e.zTheme.circleBorderTop[e.ts]
              }, e.c.iconCustomStyle]) : null,
              u = e.c.hideContent || e.c.isChat && (e.c.chatDefaultAsLoading || e.finalStatus !== e.M.Default) && e.finalStatus !== e.M.Fail ? null : e.__get_style([{
                color: e.zTheme.title[e.ts]
              }, e.c.titleCustomStyle]),
              r = !e.c.hideContent && e.c.showNoMoreLine && e.finalStatus === e.M.NoMore ? e.__get_style([{
                backgroundColor: e.zTheme.line[e.ts]
              }, e.c.noMoreLineCustomStyle]) : null;
            e.$mp.data = Object.assign({}, {
              $root: {
                s0: t,
                s1: n,
                s2: o,
                g0: a,
                s3: i,
                g1: c,
                s4: l,
                s5: u,
                s6: r
              }
            })
          },
          a = []
      },
      "6a4a": function(e, t, n) {
        n.r(t);
        var o = n("014b"),
          a = n.n(o);
        for (var i in o)["default"].indexOf(i) < 0 && function(e) {
          n.d(t, e, (function() {
            return o[e]
          }))
        }(i);
        t.default = a.a
      },
      "7b87": function(e, t, n) {}
    }
  ]), (global.webpackJsonp = global.webpackJsonp || []).push(["union/components1/z-paging/components/z-paging-load-more-create-component", {
      "union/components1/z-paging/components/z-paging-load-more-create-component": function(e, t, n) {
        n("df3c").createComponent(n("40a9"))
      }
    },
    [
      ["union/components1/z-paging/components/z-paging-load-more-create-component"]
    ]
  ]);
}, {
  isPage: false,
  isComponent: true,
  currentFile: 'union/components1/z-paging/components/z-paging-load-more.js'
});
require("union/components1/z-paging/components/z-paging-load-more.js");;
__wxRoute = "union/components1/z-paging/components/z-paging-refresh";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "union/components1/z-paging/components/z-paging-refresh.js";
define("union/components1/z-paging/components/z-paging-refresh.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["union/components1/z-paging/components/z-paging-refresh"], {
      "2b62": function(e, t, i) {},
      3472: function(e, t, i) {
        var n = i("2b62");
        i.n(n).a
      },
      "6f8a": function(e, t, i) {
        (function(e) {
          var n = i("47a9");
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.default = void 0;
          var s = n(i("96f1")),
            a = n(i("6040")),
            r = n(i("230e")),
            o = {
              name: "z-paging-refresh",
              data: function() {
                return {
                  R: r.default.Refresher,
                  isIos: "ios" === e.getSystemInfoSync().platform,
                  refresherTimeText: "",
                  zTheme: {
                    title: {
                      white: "#efefef",
                      black: "#555555"
                    },
                    arrow: {
                      white: s.default.base64ArrowWhite,
                      black: s.default.base64Arrow
                    },
                    flower: {
                      white: s.default.base64FlowerWhite,
                      black: s.default.base64Flower
                    },
                    success: {
                      white: s.default.base64SuccessWhite,
                      black: s.default.base64Success
                    },
                    indicator: {
                      white: "#eeeeee",
                      black: "#777777"
                    }
                  }
                }
              },
              props: ["status", "defaultThemeStyle", "defaultText", "pullingText", "refreshingText", "completeText", "goF2Text", "defaultImg", "pullingImg", "refreshingImg", "completeImg", "refreshingAnimated", "showUpdateTime", "updateTimeKey", "imgStyle", "titleStyle", "updateTimeStyle", "updateTimeTextMap", "unit"],
              computed: {
                ts: function() {
                  return this.defaultThemeStyle
                },
                statusTextArr: function() {
                  return this.updateTime(), [this.defaultText, this.pullingText, this.refreshingText, this.completeText, this.goF2Text]
                },
                currentTitle: function() {
                  return this.statusTextArr[this.status] || this.defaultText
                },
                leftImageClass: function() {
                  var e = "zp-r-left-image-pre-size-".concat(this.unit);
                  return this.status === this.R.Complete ? e : "zp-r-left-image ".concat(e, " ").concat(this.status === this.R.Default ? "zp-r-arrow-down" : "zp-r-arrow-top")
                },
                leftImageStyle: function() {
                  var e = this.showUpdateTime,
                    t = e ? a.default.addUnit(36, this.unit) : a.default.addUnit(34, this.unit);
                  return {
                    width: t,
                    height: t,
                    "margin-right": e ? a.default.addUnit(20, this.unit) : a.default.addUnit(9, this.unit)
                  }
                },
                leftImageSrc: function() {
                  var e = this.R,
                    t = this.status;
                  return t === e.Default ? this.defaultImg ? this.defaultImg : this.zTheme.arrow[this.ts] : t === e.ReleaseToRefresh ? this.pullingImg ? this.pullingImg : this.defaultImg ? this.defaultImg : this.zTheme.arrow[this.ts] : t === e.Loading ? this.refreshingImg ? this.refreshingImg : this.zTheme.flower[this.ts] : t === e.Complete ? this.completeImg ? this.completeImg : this.zTheme.success[this.ts] : t === e.GoF2 ? this.zTheme.arrow[this.ts] : ""
                },
                rightTextStyle: function() {
                  var e = {};
                  return e.color = this.zTheme.title[this.ts], e["font-size"] = a.default.addUnit(30, this.unit), e
                }
              },
              methods: {
                addUnit: function(e, t) {
                  return a.default.addUnit(e, t)
                },
                updateTime: function() {
                  this.showUpdateTime && (this.refresherTimeText = a.default.getRefesrherFormatTimeByKey(this.updateTimeKey, this.updateTimeTextMap))
                }
              }
            };
          t.default = o
        }).call(this, i("df3c").default)
      },
      "74e6": function(e, t, i) {
        i.r(t);
        var n = i("6f8a"),
          s = i.n(n);
        for (var a in n)["default"].indexOf(a) < 0 && function(e) {
          i.d(t, e, (function() {
            return n[e]
          }))
        }(a);
        t.default = s.a
      },
      8427: function(e, t, i) {
        i.r(t);
        var n = i("8c84"),
          s = i("74e6");
        for (var a in s)["default"].indexOf(a) < 0 && function(e) {
          i.d(t, e, (function() {
            return s[e]
          }))
        }(a);
        i("3472");
        var r = i("828b"),
          o = Object(r.a)(s.default, n.b, n.c, !1, null, "5bd476fd", null, !1, n.a, void 0);
        t.default = o.exports
      },
      "8c84": function(e, t, i) {
        i.d(t, "b", (function() {
          return n
        })), i.d(t, "c", (function() {
          return s
        })), i.d(t, "a", (function() {}));
        var n = function() {
            var e = this,
              t = (e.$createElement, e._self._c, e.status !== e.R.Loading ? e.__get_style([e.leftImageStyle, e.imgStyle]) : null),
              i = e.status === e.R.Loading ? e.__get_style([e.leftImageStyle, e.imgStyle]) : null,
              n = e.__get_style([e.rightTextStyle, e.titleStyle]),
              s = e.showUpdateTime && e.refresherTimeText.length,
              a = s ? e.__get_style([{
                color: e.zTheme.title[e.ts]
              }, e.updateTimeStyle]) : null;
            e.$mp.data = Object.assign({}, {
              $root: {
                s0: t,
                s1: i,
                s2: n,
                g0: s,
                s3: a
              }
            })
          },
          s = []
      }
    }
  ]), (global.webpackJsonp = global.webpackJsonp || []).push(["union/components1/z-paging/components/z-paging-refresh-create-component", {
      "union/components1/z-paging/components/z-paging-refresh-create-component": function(e, t, i) {
        i("df3c").createComponent(i("8427"))
      }
    },
    [
      ["union/components1/z-paging/components/z-paging-refresh-create-component"]
    ]
  ]);
}, {
  isPage: false,
  isComponent: true,
  currentFile: 'union/components1/z-paging/components/z-paging-refresh.js'
});
require("union/components1/z-paging/components/z-paging-refresh.js");;
__wxRoute = "union/components1/z-paging/z-paging";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "union/components1/z-paging/z-paging.js";
define("union/components1/z-paging/z-paging.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["union/components1/z-paging/z-paging"], {
      "04dc": function(e, t, n) {
        t.a = function(e) {
          e.options.wxsCallMethods || (e.options.wxsCallMethods = []), e.options.wxsCallMethods.push("_handleListTouchstart"), e.options.wxsCallMethods.push("_handleRefresherTouchstart"), e.options.wxsCallMethods.push("_handleTouchDirectionChange"), e.options.wxsCallMethods.push("_handleScrollViewBounce"), e.options.wxsCallMethods.push("_handleWxsPullingDown"), e.options.wxsCallMethods.push("_handleRefresherTouchmove"), e.options.wxsCallMethods.push("_handleRefresherTouchend"), e.options.wxsCallMethods.push("_handlePropUpdate"), e.options.wxsCallMethods.push("_handleWxsPullingDownStatusChange")
        }
      },
      "9b1d": function(e, t, n) {
        n.d(t, "b", (function() {
          return o
        })), n.d(t, "c", (function() {
          return a
        })), n.d(t, "a", (function() {}));
        var o = function() {
            var e = this,
              t = (e.$createElement, e._self._c, e.__get_style([e.finalPagingStyle])),
              n = e.__get_style([e.finalScrollViewStyle]),
              o = e.__get_style([e.scrollViewContainerStyle]),
              a = e.__get_style([e.chatRecordRotateStyle]),
              s = e.__get_style([e.scrollViewInStyle, {
                transform: e.finalRefresherTransform,
                transition: e.refresherTransition
              }]);
            e.$initSSP();
            var l = e.__get_style([e.finalPagingContentStyle]),
              i = e.finalUseInnerList ? e.__get_style([e.innerListStyle]) : null;
            e.$initSSP();
            var r = e.finalUseInnerList && e.finalUseVirtualList ? e.__map(e.virtualList, (function(t, n) {
              var o = e.__get_orig(t),
                a = e.__get_style([e.innerCellStyle]);
              return "augmented" === e.$scope.data.scopedSlotsCompiler && e.$setSSP("cell", {
                item: o,
                index: e.virtualTopRangeIndex + n
              }), {
                $orig: o,
                s7: a
              }
            })) : null;
            e.$initSSP();
            var c = e.finalUseInnerList && !e.finalUseVirtualList ? e.__map(e.realTotalData, (function(t, n) {
                var o = e.__get_orig(t);
                return "augmented" === e.$scope.data.scopedSlotsCompiler && e.$setSSP("cell", {
                  item: o,
                  index: n
                }), {
                  $orig: o
                }
              })) : null,
              u = e.useChatRecordMode && e.realTotalData.length >= e.defaultPageSize && (e.loadingStatus !== e.M.NoMore || e.zSlots.chatNoMore) && (e.realTotalData.length || e.showChatLoadingWhenReload && e.showLoading) && !e.isFirstPageAndNoMore,
              p = u ? e.__get_style([e.chatRecordRotateStyle]) : null,
              d = e.showBackToTopClass ? e.__get_style([e.finalBackToTopStyle]) : null,
              g = e.showBackToTopClass && !e.zSlots.backToTop ? e.useChatRecordMode && !e.backToTopImg.length : null,
              h = e.showBackToTopClass && !e.zSlots.backToTop ? e.backToTopImg.length : null;
            e.$mp.data = Object.assign({}, {
              $root: {
                s0: t,
                s1: n,
                s2: o,
                s3: a,
                s4: s,
                s5: l,
                s6: i,
                l0: r,
                l1: c,
                g0: u,
                s8: p,
                s9: d,
                g1: g,
                g2: h
              }
            }), "augmented" === e.$scope.data.scopedSlotsCompiler && (e.$setSSP("refresher", {
              refresherStatus: e.refresherStatus
            }), e.$setSSP("chatLoading", {
              loadingMoreStatus: e.loadingStatus
            })), e.$callSSP()
          },
          a = []
      },
      a7ee: function(e, t, n) {
        n.r(t);
        var o = n("9b1d"),
          a = n("952ad");
        for (var s in a)["default"].indexOf(s) < 0 && function(e) {
          n.d(t, e, (function() {
            return a[e]
          }))
        }(s);
        n("f82a");
        var l = n("828b"),
          i = n("04dc"),
          r = Object(l.a)(a.default, o.b, o.c, !1, null, "262182c8", null, !1, o.a, void 0);
        "function" == typeof i.a && Object(i.a)(r), t.default = r.exports
      },
      f48f: function(e, t, n) {},
      f82a: function(e, t, n) {
        var o = n("f48f");
        n.n(o).a
      }
    }
  ]), (global.webpackJsonp = global.webpackJsonp || []).push(["union/components1/z-paging/z-paging-create-component", {
      "union/components1/z-paging/z-paging-create-component": function(e, t, n) {
        n("df3c").createComponent(n("a7ee"))
      }
    },
    [
      ["union/components1/z-paging/z-paging-create-component"]
    ]
  ]);
}, {
  isPage: false,
  isComponent: true,
  currentFile: 'union/components1/z-paging/z-paging.js'
});
require("union/components1/z-paging/z-paging.js");
