$gwx2_XC_1 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx2_XC_1 || [];

    function gz$gwx2_XC_1_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx2_XC_1_1) return __WXML_GLOBAL__.ops_cached.$gwx2_XC_1_1
      __WXML_GLOBAL__.ops_cached.$gwx2_XC_1_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([
          [7],
          [3, 'SHOW']
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
                      [5],
                      [
                        [5],
                        [1, 'aui-actionmenu']
                      ],
                      [
                        [2, '?:'],
                        [
                          [2, '=='],
                          [
                            [7],
                            [3, 'location']
                          ],
                          [1, 'bottom']
                        ],
                        [1, 'aui-actionmenu-bottom'],
                        [1, '']
                      ]
                    ],
                    [
                      [2, '?:'],
                      [
                        [2, '=='],
                        [
                          [7],
                          [3, 'location']
                        ],
                        [1, 'middle']
                      ],
                      [1, 'aui-actionmenu-middle'],
                      [1, '']
                    ]
                  ],
                  [
                    [2, '?:'],
                    [
                      [2, '=='],
                      [
                        [6],
                        [
                          [7],
                          [3, '$root']
                        ],
                        [3, 'm0']
                      ],
                      [1, 1]
                    ],
                    [1, 'aui-actionmenu-style-1'],
                    [1, '']
                  ]
                ],
                [
                  [2, '?:'],
                  [
                    [2, '=='],
                    [
                      [6],
                      [
                        [7],
                        [3, '$root']
                      ],
                      [3, 'm1']
                    ],
                    [1, 2]
                  ],
                  [1, 'aui-actionmenu-style-2'],
                  [1, '']
                ]
              ],
              [
                [2, '?:'],
                [
                  [2, '=='],
                  [
                    [7],
                    [3, 'FADE']
                  ],
                  [1, 1]
                ],
                [1, 'aui-actionmenu-in'],
                [1, '']
              ]
            ],
            [
              [2, '?:'],
              [
                [2, '=='],
                [
                  [7],
                  [3, 'FADE']
                ],
                [1, 0]
              ],
              [1, 'aui-actionmenu-out'],
              [1, '']
            ]
          ]
        ])
        Z([
          [7],
          [3, 'mask']
        ])
        Z([3, 'aui-actionmenu-main'])
        Z([
          [7],
          [3, 'title']
        ])
        Z([3, 'index'])
        Z([3, 'item'])
        Z([
          [7],
          [3, 'items']
        ])
        Z(z[5])
        Z([3, '__e'])
        Z(z[9])
        Z(z[9])
        Z(z[9])
        Z([
          [4],
          [
            [5],
            [
              [5],
              [1, 'aui-actionmenu-item']
            ],
            [
              [2, '?:'],
              [
                [2, '&&'],
                [
                  [2, '!'],
                  [
                    [6],
                    [
                      [7],
                      [3, 'item']
                    ],
                    [3, 'icon']
                  ]
                ],
                [
                  [2, '!'],
                  [
                    [6],
                    [
                      [7],
                      [3, 'item']
                    ],
                    [3, 'img']
                  ]
                ]
              ],
              [1, 'no-icon'],
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
                                [1, '_btnTab']
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
                              [1, '_btnTouchStart']
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
                            [1, '_btnTouchEnd']
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
                          [1, '_btnTouchEnd']
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
            [7],
            [3, 'index']
          ],
          [1, 1]
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
                  [1, 'color:'],
                  [
                    [2, '?:'],
                    [
                      [2, '=='],
                      [
                        [7],
                        [3, 'touchIndex']
                      ],
                      [
                        [2, '+'],
                        [
                          [7],
                          [3, 'index']
                        ],
                        [1, 1]
                      ]
                    ],
                    [
                      [6],
                      [
                        [7],
                        [3, 'touchStyle']
                      ],
                      [3, 'color']
                    ],
                    [
                      [6],
                      [
                        [7],
                        [3, 'item']
                      ],
                      [3, 'color']
                    ]
                  ]
                ],
                [1, ';']
              ],
              [
                [2, '+'],
                [
                  [2, '+'],
                  [1, 'font-size:'],
                  [
                    [6],
                    [
                      [7],
                      [3, 'item']
                    ],
                    [3, 'fontSize']
                  ]
                ],
                [1, ';']
              ]
            ],
            [
              [2, '+'],
              [
                [2, '+'],
                [1, 'text-align:'],
                [
                  [6],
                  [
                    [7],
                    [3, 'item']
                  ],
                  [3, 'textAlign']
                ]
              ],
              [1, ';']
            ]
          ],
          [
            [2, '+'],
            [
              [2, '+'],
              [1, 'background:'],
              [
                [2, '?:'],
                [
                  [2, '=='],
                  [
                    [7],
                    [3, 'touchIndex']
                  ],
                  [
                    [2, '+'],
                    [
                      [7],
                      [3, 'index']
                    ],
                    [1, 1]
                  ]
                ],
                [
                  [6],
                  [
                    [7],
                    [3, 'touchStyle']
                  ],
                  [3, 'background']
                ],
                [1, '']
              ]
            ],
            [1, ';']
          ]
        ])
        Z([
          [6],
          [
            [7],
            [3, 'item']
          ],
          [3, 'img']
        ])
        Z([
          [6],
          [
            [7],
            [3, 'item']
          ],
          [3, 'icon']
        ])
        Z([
          [2, '==='],
          [
            [6],
            [
              [7],
              [3, 'item']
            ],
            [3, 'name']
          ],
          [1, '微信']
        ])
      })(__WXML_GLOBAL__.ops_cached.$gwx2_XC_1_1);
      return __WXML_GLOBAL__.ops_cached.$gwx2_XC_1_1
    }

    function gz$gwx2_XC_1_2() {
      if (__WXML_GLOBAL__.ops_cached.$gwx2_XC_1_2) return __WXML_GLOBAL__.ops_cached.$gwx2_XC_1_2
      __WXML_GLOBAL__.ops_cached.$gwx2_XC_1_2 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, '__l'])
        Z([3, '__e'])
        Z([3, 'data-v-084ed9e2'])
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
                  [1, '^close']
                ],
                [
                  [4],
                  [
                    [5],
                    [
                      [4],
                      [
                        [5],
                        [1, 'closeSkuBox']
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ])
        Z([
          [7],
          [3, 'show']
        ])
        Z([3, 'e76d1bbc-1'])
        Z([
          [4],
          [
            [5],
            [1, 'default']
          ]
        ])
        Z([
          [6],
          [
            [7],
            [3, 'selectSkuInfo']
          ],
          [
            [7],
            [3, 'cbValue']
          ]
        ])
      })(__WXML_GLOBAL__.ops_cached.$gwx2_XC_1_2);
      return __WXML_GLOBAL__.ops_cached.$gwx2_XC_1_2
    }

    function gz$gwx2_XC_1_3() {
      if (__WXML_GLOBAL__.ops_cached.$gwx2_XC_1_3) return __WXML_GLOBAL__.ops_cached.$gwx2_XC_1_3
      __WXML_GLOBAL__.ops_cached.$gwx2_XC_1_3 = [];
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
          [7],
          [3, 'mask']
        ])
      })(__WXML_GLOBAL__.ops_cached.$gwx2_XC_1_3);
      return __WXML_GLOBAL__.ops_cached.$gwx2_XC_1_3
    }

    function gz$gwx2_XC_1_4() {
      if (__WXML_GLOBAL__.ops_cached.$gwx2_XC_1_4) return __WXML_GLOBAL__.ops_cached.$gwx2_XC_1_4
      __WXML_GLOBAL__.ops_cached.$gwx2_XC_1_4 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([
          [7],
          [3, 'canvasFlag']
        ])
        Z([3, '__e'])
        Z([3, 'canvas_box data-v-7f89ef11'])
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
                          [1, 'clear']
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
        Z([3, '__l'])
        Z([3, 'data-v-7f89ef11'])
        Z([
          [7],
          [3, 'duration']
        ])
        Z([
          [4],
          [
            [5],
            [1, 'fade']
          ]
        ])
        Z([1, true])
        Z([
          [7],
          [3, 'maskClass']
        ])
        Z([3, '091414c2-1'])
      })(__WXML_GLOBAL__.ops_cached.$gwx2_XC_1_4);
      return __WXML_GLOBAL__.ops_cached.$gwx2_XC_1_4
    }

    function gz$gwx2_XC_1_5() {
      if (__WXML_GLOBAL__.ops_cached.$gwx2_XC_1_5) return __WXML_GLOBAL__.ops_cached.$gwx2_XC_1_5
      __WXML_GLOBAL__.ops_cached.$gwx2_XC_1_5 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([
          [7],
          [3, 'isShow']
        ])
        Z([3, '__e'])
        Z([
          [4],
          [
            [5],
            [
              [5],
              [
                [5],
                [1, 'uni-transition']
              ],
              [1, 'vue-ref']
            ],
            [
              [6],
              [
                [7],
                [3, 'ani']
              ],
              [3, 'in']
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
                          [1, 'change']
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
        Z([3, 'ani'])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [
              [2, '+'],
              [1, 'transform:'],
              [
                [7],
                [3, 'transform']
              ]
            ],
            [1, ';']
          ],
          [
            [7],
            [3, 'stylesObject']
          ]
        ])
      })(__WXML_GLOBAL__.ops_cached.$gwx2_XC_1_5);
      return __WXML_GLOBAL__.ops_cached.$gwx2_XC_1_5
    }

    function gz$gwx2_XC_1_6() {
      if (__WXML_GLOBAL__.ops_cached.$gwx2_XC_1_6) return __WXML_GLOBAL__.ops_cached.$gwx2_XC_1_6
      __WXML_GLOBAL__.ops_cached.$gwx2_XC_1_6 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([
          [7],
          [3, 'commodityInfo']
        ])
        Z([3, 'goodsBox u-skeleton data-v-286ae0e6'])
        Z([3, '__l'])
        Z([3, 'data-v-286ae0e6 vue-ref'])
        Z([3, 'navBar'])
        Z([
          [7],
          [3, 'scrollTop']
        ])
        Z([3, 'transparentFixed'])
        Z([3, '5c501ca8-1'])
        Z([
          [4],
          [
            [5],
            [1, 'default']
          ]
        ])
        Z([
          [2, '=='],
          [
            [6],
            [
              [7],
              [3, 'commodityInfo']
            ],
            [3, 'isDeleted']
          ],
          [1, 0]
        ])
        Z([3, 'data-v-286ae0e6'])
        Z(z[2])
        Z([3, '__e'])
        Z([3, '0'])
        Z(z[10])
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
                  [1, '^click']
                ],
                [
                  [4],
                  [
                    [5],
                    [
                      [4],
                      [
                        [5],
                        [1, 'swiperBtn']
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ])
        Z([3, '740'])
        Z([3, '#FF3709'])
        Z([3, 'rgba(0,0,0,0.5)'])
        Z([3, 'bottomRight'])
        Z([3, '5000'])
        Z([
          [6],
          [
            [7],
            [3, 'commodityInfo']
          ],
          [3, 'itemPicUrls']
        ])
        Z([3, '5c501ca8-2'])
        Z([
          [2, '=='],
          [
            [6],
            [
              [7],
              [3, 'ticketDetailObj']
            ],
            [3, 'seckillActivity']
          ],
          [1, 0]
        ])
        Z([
          [6],
          [
            [7],
            [3, 'daoJiShiObj']
          ],
          [3, 'second']
        ])
        Z([3, 'goodsPrice u-skeleton-rect data-v-286ae0e6'])
        Z([
          [2, '==='],
          [
            [6],
            [
              [7],
              [3, 'commodityInfo']
            ],
            [3, 'productType']
          ],
          [1, 0]
        ])
        Z([
          [7],
          [3, 'iconShow']
        ])
        Z([
          [2, '&&'],
          [
            [2, '&&'],
            [
              [7],
              [3, 'userInfo']
            ],
            [
              [6],
              [
                [7],
                [3, 'userInfo']
              ],
              [3, 'isFenxiao']
            ]
          ],
          [
            [2, '>'],
            [
              [6],
              [
                [7],
                [3, 'commodityInfo']
              ],
              [3, 'maxReward']
            ],
            [1, 0]
          ]
        ])
        Z([3, 'goodsInfo data-v-286ae0e6'])
        Z([
          [6],
          [
            [7],
            [3, 'commodityInfo']
          ],
          [3, 'itemSubTitle']
        ])
        Z([
          [2, '&&'],
          [
            [2, '=='],
            [
              [6],
              [
                [7],
                [3, 'ticketDetailObj']
              ],
              [3, 'seckillActivity']
            ],
            [1, 0]
          ],
          [
            [7],
            [3, 'iconShow']
          ]
        ])
        Z([
          [2, '>'],
          [
            [6],
            [
              [7],
              [3, '$root']
            ],
            [3, 'g1']
          ],
          [1, 0]
        ])
        Z(z[12])
        Z([3, 'title-box data-v-286ae0e6'])
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
                          [1, 'showYh']
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
        Z([3, 'margin-bottom:0;'])
        Z([3, 'index'])
        Z([3, 'item'])
        Z([
          [7],
          [3, 'couponArr']
        ])
        Z([
          [2, '<'],
          [
            [7],
            [3, 'index']
          ],
          [1, 3]
        ])
        Z([3, 'delivery data-v-286ae0e6'])
        Z([
          [2, '!='],
          [
            [6],
            [
              [7],
              [3, 'commodityInfo']
            ],
            [3, 'isFictitious']
          ],
          [1, 1]
        ])
        Z(z[12])
        Z([3, 'itemText data-v-286ae0e6'])
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
                          [1, 'openPopup']
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
        Z(z[2])
        Z(z[10])
        Z([3, '#878787'])
        Z([3, '14'])
        Z([3, 'arrowright'])
        Z([3, '5c501ca8-3'])
        Z([
          [2, '&&'],
          [
            [2, '=='],
            [
              [6],
              [
                [7],
                [3, 'commodityInfo']
              ],
              [3, 'productType']
            ],
            [1, 0]
          ],
          [
            [2, '!='],
            [
              [6],
              [
                [7],
                [3, 'commodityInfo']
              ],
              [3, 'freightType']
            ],
            [1, 2]
          ]
        ])
        Z([
          [6],
          [
            [7],
            [3, 'commodityInfo']
          ],
          [3, 'originPlace']
        ])
        Z([
          [2, '>'],
          [
            [6],
            [
              [7],
              [3, '$root']
            ],
            [3, 'g3']
          ],
          [1, 0]
        ])
        Z([
          [2, '>'],
          [
            [6],
            [
              [7],
              [3, '$root']
            ],
            [3, 'g4']
          ],
          [1, 0]
        ])
        Z(z[37])
        Z(z[38])
        Z([
          [6],
          [
            [7],
            [3, '$root']
          ],
          [3, 'l0']
        ])
        Z(z[37])
        Z(z[12])
        Z([3, 'commentItem data-v-286ae0e6'])
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
                          [1, 'goComments']
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
          [2, '>'],
          [
            [6],
            [
              [7],
              [3, 'item']
            ],
            [3, 'g5']
          ],
          [1, 0]
        ])
        Z([3, 'idx'])
        Z([3, 'pic'])
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
          [3, 'picUrl']
        ])
        Z(z[64])
        Z(z[2])
        Z(z[12])
        Z(z[10])
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
                  [1, '^tap']
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
                            [1, 'commentsBtn']
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
                                [3, 'idx']
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
                                        [
                                          [5],
                                          [1, 'commentsList']
                                        ],
                                        [1, '']
                                      ],
                                      [
                                        [7],
                                        [3, 'index']
                                      ]
                                    ],
                                    [1, 'picUrl']
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
        Z([3, '220'])
        Z([
          [7],
          [3, 'pic']
        ])
        Z([3, 'scaleToFill'])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [
              [2, '+'],
              [1, '5c501ca8-4-'],
              [
                [7],
                [3, 'index']
              ]
            ],
            [1, '-']
          ],
          [
            [7],
            [3, 'idx']
          ]
        ])
        Z(z[2])
        Z(z[3])
        Z([3, 'article'])
        Z([
          [6],
          [
            [7],
            [3, 'commodityInfo']
          ],
          [3, 'mdescription']
        ])
        Z([1, true])
        Z([
          [7],
          [3, 'parseStyle']
        ])
        Z([3, '5c501ca8-5'])
        Z([
          [7],
          [3, 'parametersText']
        ])
        Z(z[0])
        Z(z[26])
        Z([3, 'goods-carts u-skeleton-rect data-v-286ae0e6'])
        Z([
          [2, '==='],
          [
            [6],
            [
              [7],
              [3, 'commodityInfo']
            ],
            [3, 'isFictitious']
          ],
          [1, 1]
        ])
        Z(z[2])
        Z(z[12])
        Z(z[12])
        Z([
          [7],
          [3, 'buttonGrouplink']
        ])
        Z(z[10])
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
                    [1, '^click']
                  ],
                  [
                    [4],
                    [
                      [5],
                      [
                        [4],
                        [
                          [5],
                          [1, 'buttonClick']
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
                  [1, '^buttonClick']
                ],
                [
                  [4],
                  [
                    [5],
                    [
                      [4],
                      [
                        [5],
                        [1, 'goLink']
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ])
        Z(z[80])
        Z([
          [7],
          [3, 'optionsNavlink']
        ])
        Z([3, '5c501ca8-6'])
        Z([
          [2, '||'],
          [
            [2, '=='],
            [
              [6],
              [
                [7],
                [3, 'commodityInfo']
              ],
              [3, 'listStatus']
            ],
            [1, 2]
          ],
          [
            [2, '=='],
            [
              [6],
              [
                [7],
                [3, 'commodityInfo']
              ],
              [3, 'listStatus']
            ],
            [1, 0]
          ]
        ])
        Z(z[2])
        Z(z[12])
        Z([
          [7],
          [3, 'buttonGroupXJ']
        ])
        Z(z[10])
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
                  [1, '^click']
                ],
                [
                  [4],
                  [
                    [5],
                    [
                      [4],
                      [
                        [5],
                        [1, 'buttonClick']
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ])
        Z(z[80])
        Z([
          [7],
          [3, 'optionsNav']
        ])
        Z([3, '5c501ca8-7'])
        Z([
          [2, '<'],
          [
            [6],
            [
              [7],
              [3, 'commodityInfo']
            ],
            [3, 'itemStock']
          ],
          [1, 1]
        ])
        Z(z[2])
        Z(z[12])
        Z([
          [7],
          [3, 'buttonGroupNoStock']
        ])
        Z(z[10])
        Z(z[102])
        Z(z[80])
        Z(z[104])
        Z([3, '5c501ca8-8'])
        Z(z[2])
        Z(z[12])
        Z(z[12])
        Z([
          [7],
          [3, 'buttonGroup']
        ])
        Z(z[10])
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
                    [1, '^click']
                  ],
                  [
                    [4],
                    [
                      [5],
                      [
                        [4],
                        [
                          [5],
                          [1, 'buttonClick']
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
                  [1, '^buttonClick']
                ],
                [
                  [4],
                  [
                    [5],
                    [
                      [4],
                      [
                        [5],
                        [1, 'handleConfirm']
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ])
        Z(z[80])
        Z(z[104])
        Z([3, '5c501ca8-9'])
        Z(z[2])
        Z(z[3])
        Z([3, 'popup'])
        Z([3, 'bottom'])
        Z([3, '5c501ca8-10'])
        Z(z[8])
        Z([3, 'popup data-v-286ae0e6'])
        Z(z[2])
        Z(z[12])
        Z(z[10])
        Z([3, '#c1c1c1'])
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
                  [1, '^click']
                ],
                [
                  [4],
                  [
                    [5],
                    [
                      [4],
                      [
                        [5],
                        [1, 'closePopup']
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ])
        Z([3, '20'])
        Z([3, 'clear'])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [1, '5c501ca8-11'],
            [1, ',']
          ],
          [1, '5c501ca8-10']
        ])
        Z([3, 'popMain data-v-286ae0e6'])
        Z(z[80])
        Z([
          [2, '==='],
          [
            [7],
            [3, 'popupType']
          ],
          [1, 0]
        ])
        Z([
          [2, '>'],
          [
            [6],
            [
              [7],
              [3, '$root']
            ],
            [3, 'g6']
          ],
          [1, 0]
        ])
        Z(z[2])
        Z(z[10])
        Z([3, 'address'])
        Z([3, '收货地址为空'])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [1, '5c501ca8-12'],
            [1, ',']
          ],
          [1, '5c501ca8-10']
        ])
        Z(z[12])
        Z([3, 'popupBtn data-v-286ae0e6'])
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
                          [1, 'goAddress']
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
        Z(z[2])
        Z(z[10])
        Z([3, '#ff4643'])
        Z([3, '16'])
        Z([3, 'plusempty'])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [1, '5c501ca8-13'],
            [1, ',']
          ],
          [1, '5c501ca8-10']
        ])
        Z(z[2])
        Z(z[12])
        Z(z[12])
        Z(z[12])
        Z(z[12])
        Z(z[3])
        Z([
          [7],
          [3, 'combinations']
        ])
        Z([
          [7],
          [3, 'combinationsProps']
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
                    [4],
                    [
                      [5],
                      [
                        [5],
                        [1, '^skuidx']
                      ],
                      [
                        [4],
                        [
                          [5],
                          [
                            [4],
                            [
                              [5],
                              [1, 'getSkuIndex']
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
                      [1, '^close']
                    ],
                    [
                      [4],
                      [
                        [5],
                        [
                          [4],
                          [
                            [5],
                            [1, 'handleClose']
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
                    [1, '^skubtn']
                  ],
                  [
                    [4],
                    [
                      [5],
                      [
                        [4],
                        [
                          [5],
                          [1, 'addShop']
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
                  [1, '^confirm']
                ],
                [
                  [4],
                  [
                    [5],
                    [
                      [4],
                      [
                        [5],
                        [1, 'handleConfirm']
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ])
        Z([3, 'echoneSku'])
        Z([
          [6],
          [
            [7],
            [3, 'commodityInfo']
          ],
          [3, 'defaultPicUrl']
        ])
        Z([
          [7],
          [3, 'selectedIndex']
        ])
        Z([
          [7],
          [3, 'skuShow']
        ])
        Z([
          [7],
          [3, 'specifications']
        ])
        Z([
          [7],
          [3, 'specificationsProps']
        ])
        Z(z[153])
        Z([3, '5c501ca8-14'])
        Z(z[2])
        Z(z[12])
        Z(z[3])
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
                  [1, '^callback']
                ],
                [
                  [4],
                  [
                    [5],
                    [
                      [4],
                      [
                        [5],
                        [1, 'actionmenuCallback']
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ])
        Z([3, 'actionmenu'])
        Z([
          [6],
          [
            [7],
            [3, 'auiActionmenu']
          ],
          [3, 'items']
        ])
        Z([
          [6],
          [
            [7],
            [3, 'auiActionmenu']
          ],
          [3, 'theme']
        ])
        Z([3, '5c501ca8-15'])
        Z(z[2])
        Z(z[12])
        Z(z[12])
        Z(z[12])
        Z([
          [7],
          [3, 'canvasFlag']
        ])
        Z(z[3])
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
                          [1, '^updateCanvasFlag']
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
                                    [1, '__set_sync']
                                  ],
                                  [
                                    [4],
                                    [
                                      [5],
                                      [
                                        [5],
                                        [
                                          [5],
                                          [1, '$0']
                                        ],
                                        [1, 'canvasFlag']
                                      ],
                                      [1, '$event']
                                    ]
                                  ]
                                ],
                                [
                                  [4],
                                  [
                                    [5],
                                    [1, '']
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
                        [1, '^updateCanvasFlag']
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
                                  [1, '__set_sync']
                                ],
                                [
                                  [4],
                                  [
                                    [5],
                                    [
                                      [5],
                                      [
                                        [5],
                                        [1, '$0']
                                      ],
                                      [1, 'canvasFlag']
                                    ],
                                    [1, '$event']
                                  ]
                                ]
                              ],
                              [
                                [4],
                                [
                                  [5],
                                  [1, '']
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
                      [1, '^cancel']
                    ],
                    [
                      [4],
                      [
                        [5],
                        [
                          [4],
                          [
                            [5],
                            [1, 'canvasCancel']
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
                    [1, '^updatePosterObj']
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
                              [1, '__set_sync']
                            ],
                            [
                              [4],
                              [
                                [5],
                                [
                                  [5],
                                  [
                                    [5],
                                    [1, '$0']
                                  ],
                                  [1, 'posterData']
                                ],
                                [1, '$event']
                              ]
                            ]
                          ],
                          [
                            [4],
                            [
                              [5],
                              [1, '']
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
                  [1, '^updatePosterObj']
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
                            [1, '__set_sync']
                          ],
                          [
                            [4],
                            [
                              [5],
                              [
                                [5],
                                [
                                  [5],
                                  [1, '$0']
                                ],
                                [1, 'posterData']
                              ],
                              [1, '$event']
                            ]
                          ]
                        ],
                        [
                          [4],
                          [
                            [5],
                            [1, '']
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
        Z([3, 'hchPoster'])
        Z([
          [7],
          [3, 'posterData']
        ])
        Z([3, '5c501ca8-16'])
        Z(z[186])
        Z([
          [7],
          [3, 'showYhMask']
        ])
        Z(z[37])
        Z(z[38])
        Z([
          [6],
          [
            [7],
            [3, '$root']
          ],
          [3, 'l1']
        ])
        Z(z[12])
        Z([3, 'right data-v-286ae0e6'])
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
                            [1, 'receiveCoupon']
                          ],
                          [
                            [4],
                            [
                              [5],
                              [
                                [5],
                                [1, '$0']
                              ],
                              [1, '$1']
                            ]
                          ]
                        ],
                        [
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
                                    [4],
                                    [
                                      [5],
                                      [
                                        [5],
                                        [
                                          [5],
                                          [
                                            [5],
                                            [1, 'couponDetailArr']
                                          ],
                                          [1, '']
                                        ],
                                        [
                                          [7],
                                          [3, 'index']
                                        ]
                                      ],
                                      [1, 'couponId']
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
                                      [5],
                                      [
                                        [5],
                                        [
                                          [5],
                                          [1, 'couponDetailArr']
                                        ],
                                        [1, '']
                                      ],
                                      [
                                        [7],
                                        [3, 'index']
                                      ]
                                    ],
                                    [1, 'couponStates']
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
            [3, 'couponStates']
          ],
          [1, 1]
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
            [3, 'couponStates']
          ],
          [1, 2]
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
            [3, 'couponStates']
          ],
          [1, 3]
        ])
        Z(z[80])
        Z(z[2])
        Z(z[10])
        Z([
          [7],
          [3, 'loadingStatus']
        ])
        Z([3, '5c501ca8-17'])
        Z(z[2])
        Z(z[10])
        Z([3, 'https://eshopfile.zhiyousx.com/noGoods@2x.png'])
        Z([3, '暂无商品信息'])
        Z([3, '5c501ca8-18'])
        Z([
          [7],
          [3, 'showPainter']
        ])
        Z(z[2])
        Z(z[12])
        Z(z[10])
        Z([3, 'width: 452rpx; height:363rpx;position:fixed;bottom:0;left:0;'])
        Z([3, 'position: fixed; left: 200%'])
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
                  [1, '^success']
                ],
                [
                  [4],
                  [
                    [5],
                    [
                      [4],
                      [
                        [5],
                        [1, 'e0']
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ])
        Z(z[80])
        Z([3, '5c501ca8-19'])
        Z(z[8])
        Z(z[2])
        Z(z[10])
        Z([3, 'object-fit: cover; object-position: 50% 50%;width:452rpx;height:362rpx;'])
        Z(z[167])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [1, '5c501ca8-20'],
            [1, ',']
          ],
          [1, '5c501ca8-19']
        ])
        Z(z[2])
        Z(z[10])
        Z([3, 'position:absolute;width:452rpx;height:82rpx;bottom:00rpx;left:0; background:#ffffff;'])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [1, '5c501ca8-21'],
            [1, ',']
          ],
          [1, '5c501ca8-19']
        ])
        Z(z[8])
        Z(z[2])
        Z(z[10])
        Z([3, 'vertical-align: middle;font-size:32rpx;font-weight:600;line-height:82rpx;color:#FF5411;margin-left:20rpx;'])
        Z([
          [2, '?:'],
          [
            [2, '=='],
            [
              [6],
              [
                [7],
                [3, 'commodityInfo']
              ],
              [3, 'seckillActivity']
            ],
            [1, 0]
          ],
          [
            [2, '+'],
            [1, '￥'],
            [
              [6],
              [
                [7],
                [3, 'commodityInfo']
              ],
              [3, 'seckillPrice']
            ]
          ],
          [
            [2, '+'],
            [1, '￥'],
            [
              [6],
              [
                [6],
                [
                  [7],
                  [3, 'combinations']
                ],
                [
                  [7],
                  [3, 'selectedIndex']
                ]
              ],
              [3, 'price']
            ]
          ]
        ])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [1, '5c501ca8-22'],
            [1, ',']
          ],
          [1, '5c501ca8-21']
        ])
        Z(z[2])
        Z(z[10])
        Z([3, 'vertical-align: center; font-size: 20rpx;line-height:82rpx;text-decoration:line-through;margin-left:10rpx;color:#D0D0D0;'])
        Z([
          [2, '+'],
          [1, '￥'],
          [
            [6],
            [
              [7],
              [3, 'commodityInfo']
            ],
            [3, 'marketPrice']
          ]
        ])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [1, '5c501ca8-23'],
            [1, ',']
          ],
          [1, '5c501ca8-21']
        ])
        Z(z[2])
        Z(z[10])
        Z([3, 'height:60rpx;margin-top:11rpx;background:linear-gradient(56deg, #FC4A9E 0%, #FF5411 100%);width:200rpx;position:absolute;text-align:center;font-size:26rpx;color:#ffffff;border-radius:30rpx;right:11rpx;bottom:11rpx;'])
        Z([3, '立即购买'])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [1, '5c501ca8-24'],
            [1, ',']
          ],
          [1, '5c501ca8-21']
        ])
      })(__WXML_GLOBAL__.ops_cached.$gwx2_XC_1_6);
      return __WXML_GLOBAL__.ops_cached.$gwx2_XC_1_6
    }
    __WXML_GLOBAL__.ops_set.$gwx2_XC_1 = z;
    __WXML_GLOBAL__.ops_init.$gwx2_XC_1 = true;
    var x = ['./subPage/components/aui-actionmenu/aui-actionmenu.wxml', './subPage/components/echone-sku/echone-sku.wxml', './subPage/components/echone-sku/popup-bottom.wxml', './subPage/components/hch-poster/hch-poster.wxml', './subPage/components/uni-transition/uni-transition.wxml', './subPage/pages/goods_details/goods_details.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx2_XC_1_1()
      var aRB = _v()
      _(r, aRB)
      if (_oz(z, 0, e, s, gg)) {
        aRB.wxVkey = 1
        var tSB = _n('view')
        _rz(z, tSB, 'class', 1, e, s, gg)
        var eTB = _v()
        _(tSB, eTB)
        if (_oz(z, 2, e, s, gg)) {
          eTB.wxVkey = 1
        }
        var bUB = _n('view')
        _rz(z, bUB, 'class', 3, e, s, gg)
        var oVB = _v()
        _(bUB, oVB)
        if (_oz(z, 4, e, s, gg)) {
          oVB.wxVkey = 1
        }
        var xWB = _v()
        _(bUB, xWB)
        var oXB = function(cZB, fYB, h1B, gg) {
          var c3B = _mz(z, 'view', ['bindtouchend', 9, 'bindtouchmove', 1, 'bindtouchstart', 2, 'catchtap', 3, 'class', 4, 'data-event-opts', 5, 'data-index', 6, 'style', 7], [], cZB, fYB, gg)
          var o4B = _v()
          _(c3B, o4B)
          if (_oz(z, 17, cZB, fYB, gg)) {
            o4B.wxVkey = 1
          }
          var l5B = _v()
          _(c3B, l5B)
          if (_oz(z, 18, cZB, fYB, gg)) {
            l5B.wxVkey = 1
          }
          var a6B = _v()
          _(c3B, a6B)
          if (_oz(z, 19, cZB, fYB, gg)) {
            a6B.wxVkey = 1
          }
          o4B.wxXCkey = 1
          l5B.wxXCkey = 1
          a6B.wxXCkey = 1
          _(h1B, c3B)
          return h1B
        }
        xWB.wxXCkey = 2
        _2z(z, 7, oXB, e, s, gg, xWB, 'item', 'index', 'index')
        oVB.wxXCkey = 1
        _(tSB, bUB)
        eTB.wxXCkey = 1
        _(aRB, tSB)
      }
      aRB.wxXCkey = 1
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
      var z = gz$gwx2_XC_1_2()
      var e8B = _mz(z, 'popup-bottom', ['bind:__l', 0, 'bind:close', 1, 'class', 1, 'data-event-opts', 2, 'show', 3, 'vueId', 4, 'vueSlots', 5], [], e, s, gg)
      var b9B = _v()
      _(e8B, b9B)
      if (_oz(z, 7, e, s, gg)) {
        b9B.wxVkey = 1
      }
      b9B.wxXCkey = 1
      _(r, e8B)
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
      var z = gz$gwx2_XC_1_3()
      var xAC = _mz(z, 'view', ['catchtouchmove', 0, 'data-event-opts', 1], [], e, s, gg)
      var fCC = _n('slot')
      _(xAC, fCC)
      var oBC = _v()
      _(xAC, oBC)
      if (_oz(z, 2, e, s, gg)) {
        oBC.wxVkey = 1
      }
      oBC.wxXCkey = 1
      _(r, xAC)
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
      var z = gz$gwx2_XC_1_4()
      var hEC = _v()
      _(r, hEC)
      if (_oz(z, 0, e, s, gg)) {
        hEC.wxVkey = 1
        var oFC = _mz(z, 'view', ['catchtouchmove', 1, 'class', 1, 'data-event-opts', 2], [], e, s, gg)
        var cGC = _mz(z, 'uni-transition', ['bind:__l', 4, 'class', 1, 'duration', 2, 'modeClass', 3, 'show', 4, 'styles', 5, 'vueId', 6], [], e, s, gg)
        _(oFC, cGC)
        _(hEC, oFC)
      }
      hEC.wxXCkey = 1
      hEC.wxXCkey = 3
      return r
    }
    e_[x[3]] = {
      f: m3,
      j: [],
      i: [],
      ti: [],
      ic: []
    }
    d_[x[4]] = {}
    var m4 = function(e, s, r, gg) {
      var z = gz$gwx2_XC_1_5()
      var lIC = _v()
      _(r, lIC)
      if (_oz(z, 0, e, s, gg)) {
        lIC.wxVkey = 1
        var aJC = _mz(z, 'view', ['bindtap', 1, 'class', 1, 'data-event-opts', 2, 'data-ref', 3, 'style', 4], [], e, s, gg)
        var tKC = _n('slot')
        _(aJC, tKC)
        _(lIC, aJC)
      }
      lIC.wxXCkey = 1
      return r
    }
    e_[x[4]] = {
      f: m4,
      j: [],
      i: [],
      ti: [],
      ic: []
    }
    d_[x[5]] = {}
    var m5 = function(e, s, r, gg) {
      var z = gz$gwx2_XC_1_6()
      var bMC = _v()
      _(r, bMC)
      if (_oz(z, 0, e, s, gg)) {
        bMC.wxVkey = 1
        var oNC = _n('view')
        _rz(z, oNC, 'class', 1, e, s, gg)
        var fQC = _mz(z, 'uni-navbar', ['bind:__l', 2, 'class', 1, 'data-ref', 2, 'scrollTop', 3, 'type', 4, 'vueId', 5, 'vueSlots', 6], [], e, s, gg)
        _(oNC, fQC)
        var xOC = _v()
        _(oNC, xOC)
        if (_oz(z, 9, e, s, gg)) {
          xOC.wxVkey = 1
          var cRC = _n('view')
          _rz(z, cRC, 'class', 10, e, s, gg)
          var o2C = _mz(z, 'u-swiper', ['bind:__l', 11, 'bind:click', 1, 'borderRadius', 2, 'class', 3, 'data-event-opts', 4, 'height', 5, 'indicatorActiveColor', 6, 'indicatorColor', 7, 'indicatorPos', 8, 'interval', 9, 'list', 10, 'vueId', 11], [], e, s, gg)
          _(cRC, o2C)
          var hSC = _v()
          _(cRC, hSC)
          if (_oz(z, 23, e, s, gg)) {
            hSC.wxVkey = 1
            var x3C = _v()
            _(hSC, x3C)
            if (_oz(z, 24, e, s, gg)) {
              x3C.wxVkey = 1
            }
            x3C.wxXCkey = 1
          } else {
            hSC.wxVkey = 2
            var o4C = _n('view')
            _rz(z, o4C, 'class', 25, e, s, gg)
            var f5C = _v()
            _(o4C, f5C)
            if (_oz(z, 26, e, s, gg)) {
              f5C.wxVkey = 1
            }
            var c6C = _v()
            _(o4C, c6C)
            if (_oz(z, 27, e, s, gg)) {
              c6C.wxVkey = 1
            }
            f5C.wxXCkey = 1
            c6C.wxXCkey = 1
            _(hSC, o4C)
          }
          var oTC = _v()
          _(cRC, oTC)
          if (_oz(z, 28, e, s, gg)) {
            oTC.wxVkey = 1
          }
          var h7C = _n('view')
          _rz(z, h7C, 'class', 29, e, s, gg)
          var o8C = _v()
          _(h7C, o8C)
          if (_oz(z, 30, e, s, gg)) {
            o8C.wxVkey = 1
          }
          var c9C = _v()
          _(h7C, c9C)
          if (_oz(z, 31, e, s, gg)) {
            c9C.wxVkey = 1
          }
          o8C.wxXCkey = 1
          c9C.wxXCkey = 1
          _(cRC, h7C)
          var cUC = _v()
          _(cRC, cUC)
          if (_oz(z, 32, e, s, gg)) {
            cUC.wxVkey = 1
            var o0C = _mz(z, 'view', ['bindtap', 33, 'class', 1, 'data-event-opts', 2, 'style', 3], [], e, s, gg)
            var lAD = _v()
            _(o0C, lAD)
            var aBD = function(eDD, tCD, bED, gg) {
              var xGD = _v()
              _(bED, xGD)
              if (_oz(z, 40, eDD, tCD, gg)) {
                xGD.wxVkey = 1
              }
              xGD.wxXCkey = 1
              return bED
            }
            lAD.wxXCkey = 2
            _2z(z, 39, aBD, e, s, gg, lAD, 'item', 'index', '')
            _(cUC, o0C)
          }
          var oHD = _n('view')
          _rz(z, oHD, 'class', 41, e, s, gg)
          var fID = _v()
          _(oHD, fID)
          if (_oz(z, 42, e, s, gg)) {
            fID.wxVkey = 1
            var oLD = _mz(z, 'view', ['bindtap', 43, 'class', 1, 'data-event-opts', 2], [], e, s, gg)
            var cMD = _mz(z, 'uni-icons', ['bind:__l', 46, 'class', 1, 'color', 2, 'size', 3, 'type', 4, 'vueId', 5], [], e, s, gg)
            _(oLD, cMD)
            _(fID, oLD)
          }
          var cJD = _v()
          _(oHD, cJD)
          if (_oz(z, 52, e, s, gg)) {
            cJD.wxVkey = 1
          }
          var hKD = _v()
          _(oHD, hKD)
          if (_oz(z, 53, e, s, gg)) {
            hKD.wxVkey = 1
          }
          fID.wxXCkey = 1
          fID.wxXCkey = 3
          cJD.wxXCkey = 1
          hKD.wxXCkey = 1
          _(cRC, oHD)
          var oVC = _v()
          _(cRC, oVC)
          if (_oz(z, 54, e, s, gg)) {
            oVC.wxVkey = 1
          }
          var lWC = _v()
          _(cRC, lWC)
          if (_oz(z, 55, e, s, gg)) {
            lWC.wxVkey = 1
            var oND = _v()
            _(lWC, oND)
            var lOD = function(tQD, aPD, eRD, gg) {
              var oTD = _mz(z, 'view', ['bindtap', 60, 'class', 1, 'data-event-opts', 2], [], tQD, aPD, gg)
              var xUD = _v()
              _(oTD, xUD)
              if (_oz(z, 63, tQD, aPD, gg)) {
                xUD.wxVkey = 1
                var oVD = _v()
                _(xUD, oVD)
                var fWD = function(hYD, cXD, oZD, gg) {
                  var o2D = _mz(z, 'u-lazy-load', ['bind:__l', 68, 'catch:tap', 1, 'class', 2, 'data-event-opts', 3, 'height', 4, 'image', 5, 'imgMode', 6, 'vueId', 7], [], hYD, cXD, gg)
                  _(oZD, o2D)
                  return oZD
                }
                oVD.wxXCkey = 4
                _2z(z, 66, fWD, tQD, aPD, gg, oVD, 'pic', 'idx', 'idx')
              }
              xUD.wxXCkey = 1
              xUD.wxXCkey = 3
              _(eRD, oTD)
              return eRD
            }
            oND.wxXCkey = 4
            _2z(z, 58, lOD, e, s, gg, oND, 'item', 'index', 'index')
          }
          var l3D = _mz(z, 'u-parse', ['bind:__l', 76, 'class', 1, 'data-ref', 2, 'html', 3, 'lazyLoad', 4, 'tagStyle', 5, 'vueId', 6], [], e, s, gg)
          _(cRC, l3D)
          var aXC = _v()
          _(cRC, aXC)
          if (_oz(z, 83, e, s, gg)) {
            aXC.wxVkey = 1
          }
          var tYC = _v()
          _(cRC, tYC)
          if (_oz(z, 84, e, s, gg)) {
            tYC.wxVkey = 1
            var a4D = _v()
            _(tYC, a4D)
            if (_oz(z, 85, e, s, gg)) {
              a4D.wxVkey = 1
              var t5D = _n('view')
              _rz(z, t5D, 'class', 86, e, s, gg)
              var e6D = _v()
              _(t5D, e6D)
              if (_oz(z, 87, e, s, gg)) {
                e6D.wxVkey = 1
                var b7D = _mz(z, 'uni-goods-nav', ['bind:__l', 88, 'bind:buttonClick', 1, 'bind:click', 2, 'buttonGroup', 3, 'class', 4, 'data-event-opts', 5, 'fill', 6, 'options', 7, 'vueId', 8], [], e, s, gg)
                _(e6D, b7D)
              } else {
                e6D.wxVkey = 2
                var o8D = _v()
                _(e6D, o8D)
                if (_oz(z, 97, e, s, gg)) {
                  o8D.wxVkey = 1
                  var x9D = _mz(z, 'uni-goods-nav', ['bind:__l', 98, 'bind:click', 1, 'buttonGroup', 2, 'class', 3, 'data-event-opts', 4, 'fill', 5, 'options', 6, 'vueId', 7], [], e, s, gg)
                  _(o8D, x9D)
                } else {
                  o8D.wxVkey = 2
                  var o0D = _v()
                  _(o8D, o0D)
                  if (_oz(z, 106, e, s, gg)) {
                    o0D.wxVkey = 1
                    var fAE = _mz(z, 'uni-goods-nav', ['bind:__l', 107, 'bind:click', 1, 'buttonGroup', 2, 'class', 3, 'data-event-opts', 4, 'fill', 5, 'options', 6, 'vueId', 7], [], e, s, gg)
                    _(o0D, fAE)
                  } else {
                    o0D.wxVkey = 2
                    var cBE = _mz(z, 'uni-goods-nav', ['bind:__l', 115, 'bind:buttonClick', 1, 'bind:click', 2, 'buttonGroup', 3, 'class', 4, 'data-event-opts', 5, 'fill', 6, 'options', 7, 'vueId', 8], [], e, s, gg)
                    _(o0D, cBE)
                  }
                  o0D.wxXCkey = 1
                  o0D.wxXCkey = 3
                  o0D.wxXCkey = 3
                }
                o8D.wxXCkey = 1
                o8D.wxXCkey = 3
                o8D.wxXCkey = 3
              }
              e6D.wxXCkey = 1
              e6D.wxXCkey = 3
              e6D.wxXCkey = 3
              _(a4D, t5D)
            }
            a4D.wxXCkey = 1
            a4D.wxXCkey = 3
          }
          var hCE = _mz(z, 'uni-popup', ['bind:__l', 124, 'class', 1, 'data-ref', 2, 'type', 3, 'vueId', 4, 'vueSlots', 5], [], e, s, gg)
          var oDE = _n('view')
          _rz(z, oDE, 'class', 130, e, s, gg)
          var cEE = _mz(z, 'uni-icons', ['bind:__l', 131, 'bind:click', 1, 'class', 2, 'color', 3, 'data-event-opts', 4, 'size', 5, 'type', 6, 'vueId', 7], [], e, s, gg)
          _(oDE, cEE)
          var oFE = _mz(z, 'view', ['class', 139, 'scrollY', 1], [], e, s, gg)
          var lGE = _v()
          _(oFE, lGE)
          if (_oz(z, 141, e, s, gg)) {
            lGE.wxVkey = 1
            var aHE = _v()
            _(lGE, aHE)
            if (_oz(z, 142, e, s, gg)) {
              aHE.wxVkey = 1
            } else {
              aHE.wxVkey = 2
              var tIE = _mz(z, 'u-empty', ['bind:__l', 143, 'class', 1, 'mode', 2, 'text', 3, 'vueId', 4], [], e, s, gg)
              _(aHE, tIE)
              var eJE = _mz(z, 'button', ['bindtap', 148, 'class', 1, 'data-event-opts', 2], [], e, s, gg)
              var bKE = _mz(z, 'uni-icons', ['bind:__l', 151, 'class', 1, 'color', 2, 'size', 3, 'type', 4, 'vueId', 5], [], e, s, gg)
              _(eJE, bKE)
              _(aHE, eJE)
            }
            aHE.wxXCkey = 1
            aHE.wxXCkey = 3
          } else {
            lGE.wxVkey = 2
          }
          lGE.wxXCkey = 1
          lGE.wxXCkey = 3
          _(oDE, oFE)
          _(hCE, oDE)
          _(cRC, hCE)
          var oLE = _mz(z, 'echone-sku', ['bind:__l', 157, 'bind:close', 1, 'bind:confirm', 2, 'bind:skubtn', 3, 'bind:skuidx', 4, 'class', 5, 'combinations', 6, 'combinationsProps', 7, 'data-event-opts', 8, 'data-ref', 9, 'defaultPicUrl', 10, 'defaultSelectIndex', 11, 'show', 12, 'specifications', 13, 'specificationsProps', 14, 'themeColor', 15, 'vueId', 16], [], e, s, gg)
          _(cRC, oLE)
          var xME = _mz(z, 'aui-actionmenu', ['bind:__l', 174, 'bind:callback', 1, 'class', 2, 'data-event-opts', 3, 'data-ref', 4, 'items', 5, 'theme', 6, 'vueId', 7], [], e, s, gg)
          _(cRC, xME)
          var oNE = _mz(z, 'hch-poster', ['bind:__l', 182, 'bind:cancel', 1, 'bind:updateCanvasFlag', 2, 'bind:updatePosterObj', 3, 'canvasFlag', 4, 'class', 5, 'data-event-opts', 6, 'data-ref', 7, 'posterObj', 8, 'vueId', 9], [], e, s, gg)
          _(cRC, oNE)
          var eZC = _v()
          _(cRC, eZC)
          if (_oz(z, 192, e, s, gg)) {
            eZC.wxVkey = 1
          }
          var b1C = _v()
          _(cRC, b1C)
          if (_oz(z, 193, e, s, gg)) {
            b1C.wxVkey = 1
            var fOE = _v()
            _(b1C, fOE)
            var cPE = function(oRE, hQE, cSE, gg) {
              var lUE = _mz(z, 'view', ['bindtap', 197, 'class', 1, 'data-event-opts', 2], [], oRE, hQE, gg)
              var aVE = _v()
              _(lUE, aVE)
              if (_oz(z, 200, oRE, hQE, gg)) {
                aVE.wxVkey = 1
              }
              var tWE = _v()
              _(lUE, tWE)
              if (_oz(z, 201, oRE, hQE, gg)) {
                tWE.wxVkey = 1
              }
              var eXE = _v()
              _(lUE, eXE)
              if (_oz(z, 202, oRE, hQE, gg)) {
                eXE.wxVkey = 1
              }
              aVE.wxXCkey = 1
              tWE.wxXCkey = 1
              eXE.wxXCkey = 1
              _(cSE, lUE)
              return cSE
            }
            fOE.wxXCkey = 2
            _2z(z, 196, cPE, e, s, gg, fOE, 'item', 'index', '')
          }
          var bYE = _mz(z, 'u-skeleton', ['animation', 203, 'bind:__l', 1, 'class', 2, 'loading', 3, 'vueId', 4], [], e, s, gg)
          _(cRC, bYE)
          hSC.wxXCkey = 1
          oTC.wxXCkey = 1
          cUC.wxXCkey = 1
          oVC.wxXCkey = 1
          lWC.wxXCkey = 1
          lWC.wxXCkey = 3
          aXC.wxXCkey = 1
          tYC.wxXCkey = 1
          tYC.wxXCkey = 3
          eZC.wxXCkey = 1
          b1C.wxXCkey = 1
          _(xOC, cRC)
        } else {
          xOC.wxVkey = 2
          var oZE = _mz(z, 'empty-state', ['bind:__l', 208, 'class', 1, 'imgUrl', 2, 'text', 3, 'vueId', 4], [], e, s, gg)
          _(xOC, oZE)
        }
        var oPC = _v()
        _(oNC, oPC)
        if (_oz(z, 213, e, s, gg)) {
          oPC.wxVkey = 1
          var x1E = _mz(z, 'l-painter', ['bind:__l', 214, 'bind:success', 1, 'class', 2, 'css', 3, 'customStyle', 4, 'data-event-opts', 5, 'isCanvasToTempFilePath', 6, 'vueId', 7, 'vueSlots', 8], [], e, s, gg)
          var o2E = _mz(z, 'l-painter-image', ['bind:__l', 223, 'class', 1, 'css', 2, 'src', 3, 'vueId', 4], [], e, s, gg)
          _(x1E, o2E)
          var f3E = _mz(z, 'l-painter-view', ['bind:__l', 228, 'class', 1, 'css', 2, 'vueId', 3, 'vueSlots', 4], [], e, s, gg)
          var c4E = _mz(z, 'l-painter-text', ['bind:__l', 233, 'class', 1, 'css', 2, 'text', 3, 'vueId', 4], [], e, s, gg)
          _(f3E, c4E)
          var h5E = _mz(z, 'l-painter-text', ['bind:__l', 238, 'class', 1, 'css', 2, 'text', 3, 'vueId', 4], [], e, s, gg)
          _(f3E, h5E)
          var o6E = _mz(z, 'l-painter-text', ['bind:__l', 243, 'class', 1, 'css', 2, 'text', 3, 'vueId', 4], [], e, s, gg)
          _(f3E, o6E)
          _(x1E, f3E)
          _(oPC, x1E)
        }
        xOC.wxXCkey = 1
        xOC.wxXCkey = 3
        xOC.wxXCkey = 3
        oPC.wxXCkey = 1
        oPC.wxXCkey = 3
        _(bMC, oNC)
      }
      bMC.wxXCkey = 1
      bMC.wxXCkey = 3
      return r
    }
    e_[x[5]] = {
      f: m5,
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
        g = "$gwx2_XC_1";
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
if (__vd_version_info__.delayedGwx || false) $gwx2_XC_1();
if (__vd_version_info__.delayedGwx) __wxAppCode__['subPage/components/aui-actionmenu/aui-actionmenu.wxml'] = [$gwx2_XC_1, './subPage/components/aui-actionmenu/aui-actionmenu.wxml'];
else __wxAppCode__['subPage/components/aui-actionmenu/aui-actionmenu.wxml'] = $gwx2_XC_1('./subPage/components/aui-actionmenu/aui-actionmenu.wxml');
if (__vd_version_info__.delayedGwx) __wxAppCode__['subPage/components/echone-sku/echone-sku.wxml'] = [$gwx2_XC_1, './subPage/components/echone-sku/echone-sku.wxml'];
else __wxAppCode__['subPage/components/echone-sku/echone-sku.wxml'] = $gwx2_XC_1('./subPage/components/echone-sku/echone-sku.wxml');
if (__vd_version_info__.delayedGwx) __wxAppCode__['subPage/components/echone-sku/popup-bottom.wxml'] = [$gwx2_XC_1, './subPage/components/echone-sku/popup-bottom.wxml'];
else __wxAppCode__['subPage/components/echone-sku/popup-bottom.wxml'] = $gwx2_XC_1('./subPage/components/echone-sku/popup-bottom.wxml');
if (__vd_version_info__.delayedGwx) __wxAppCode__['subPage/components/hch-poster/hch-poster.wxml'] = [$gwx2_XC_1, './subPage/components/hch-poster/hch-poster.wxml'];
else __wxAppCode__['subPage/components/hch-poster/hch-poster.wxml'] = $gwx2_XC_1('./subPage/components/hch-poster/hch-poster.wxml');
if (__vd_version_info__.delayedGwx) __wxAppCode__['subPage/components/uni-transition/uni-transition.wxml'] = [$gwx2_XC_1, './subPage/components/uni-transition/uni-transition.wxml'];
else __wxAppCode__['subPage/components/uni-transition/uni-transition.wxml'] = $gwx2_XC_1('./subPage/components/uni-transition/uni-transition.wxml');
if (__vd_version_info__.delayedGwx) __wxAppCode__['subPage/pages/goods_details/goods_details.wxml'] = [$gwx2_XC_1, './subPage/pages/goods_details/goods_details.wxml'];
else __wxAppCode__['subPage/pages/goods_details/goods_details.wxml'] = $gwx2_XC_1('./subPage/pages/goods_details/goods_details.wxml');;
__wxRoute = "subPage/components/aui-actionmenu/aui-actionmenu";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "subPage/components/aui-actionmenu/aui-actionmenu.js";
define("subPage/components/aui-actionmenu/aui-actionmenu.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["subPage/components/aui-actionmenu/aui-actionmenu"], {
      "0781": function(n, e, t) {
        t.r(e);
        var o = t("fc56"),
          a = t.n(o);
        for (var u in o)["default"].indexOf(u) < 0 && function(n) {
          t.d(e, n, (function() {
            return o[n]
          }))
        }(u);
        e.default = a.a
      },
      "3c78": function(n, e, t) {},
      "470b": function(n, e, t) {
        t.r(e);
        var o = t("923f"),
          a = t("0781");
        for (var u in a)["default"].indexOf(u) < 0 && function(n) {
          t.d(e, n, (function() {
            return a[n]
          }))
        }(u);
        t("be5dc");
        var c = t("828b"),
          i = Object(c.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = i.exports
      },
      "923f": function(n, e, t) {
        t.d(e, "b", (function() {
          return o
        })), t.d(e, "c", (function() {
          return a
        })), t.d(e, "a", (function() {}));
        var o = function() {
            var n = this,
              e = (n.$createElement, n._self._c, n.SHOW ? Number(n.theme) : null),
              t = n.SHOW ? Number(n.theme) : null;
            n._isMounted || (n.e0 = function(e) {
              e.stopPropagation(), n.maskTapClose && n.hide()
            }), n.$mp.data = Object.assign({}, {
              $root: {
                m0: e,
                m1: t
              }
            })
          },
          a = []
      },
      be5dc: function(n, e, t) {
        var o = t("3c78");
        t.n(o).a
      },
      fc56: function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var o = {
          name: "aui-actionmenu",
          props: {
            title: {
              type: String,
              default: "分享"
            },
            mask: {
              type: Boolean,
              default: !0
            },
            maskTapClose: {
              type: Boolean,
              default: !0
            },
            items: {
              type: Array,
              default: function() {
                return [{
                  name: "",
                  icon: "",
                  iconColor: "",
                  img: ""
                }]
              }
            },
            cancel: {
              type: String,
              default: ""
            },
            location: {
              type: String,
              default: "bottom"
            },
            theme: {
              type: Number,
              default: 1
            }
          },
          data: function() {
            return {
              SHOW: !1,
              FADE: -1,
              touchIndex: -1,
              touchStyle: {
                color: "",
                background: "#EFEFEF"
              }
            }
          },
          created: function() {},
          onLoad: function() {},
          methods: {
            show: function() {
              var n = this;
              return new Promise((function(e, t) {
                n.SHOW = !0, n.FADE = 1, e()
              }))
            },
            hide: function() {
              var n = this;
              return new Promise((function(e, t) {
                n.FADE = 0;
                var o = setTimeout((function() {
                  n.SHOW = !1, n.FADE = -1, clearTimeout(o)
                }), 100);
                n.$emit("hide"), e()
              }))
            },
            _btnTab: function(n) {
              var e = this,
                t = Number(n.currentTarget.dataset.index);
              e.hide();
              var o = setTimeout((function() {
                var n = {
                  status: 0,
                  msg: 0 != t ? e.items[t - 1].name : e.cancel,
                  index: t
                };
                e.$emit("callback", n), clearTimeout(o)
              }), 100)
            },
            _btnTouchStart: function(n) {
              var e = Number(n.currentTarget.dataset.index);
              this.touchIndex = e
            },
            _btnTouchEnd: function(n) {
              Number(n.currentTarget.dataset.index), this.touchIndex = -1
            }
          }
        };
        e.default = o
      }
    }
  ]), (global.webpackJsonp = global.webpackJsonp || []).push(["subPage/components/aui-actionmenu/aui-actionmenu-create-component", {
      "subPage/components/aui-actionmenu/aui-actionmenu-create-component": function(n, e, t) {
        t("df3c").createComponent(t("470b"))
      }
    },
    [
      ["subPage/components/aui-actionmenu/aui-actionmenu-create-component"]
    ]
  ]);
}, {
  isPage: false,
  isComponent: true,
  currentFile: 'subPage/components/aui-actionmenu/aui-actionmenu.js'
});
require("subPage/components/aui-actionmenu/aui-actionmenu.js");;
__wxRoute = "subPage/components/echone-sku/echone-sku";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "subPage/components/echone-sku/echone-sku.js";
define("subPage/components/echone-sku/echone-sku.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["subPage/components/echone-sku/echone-sku"], {
      "0842": function(t, e, n) {
        var i = n("4d75");
        n.n(i).a
      },
      "10ee": function(t, e, n) {
        n.r(e);
        var i = n("38fe"),
          o = n.n(i);
        for (var s in i)["default"].indexOf(s) < 0 && function(t) {
          n.d(e, t, (function() {
            return i[t]
          }))
        }(s);
        e.default = o.a
      },
      "29c2": function(t, e, n) {
        n.d(e, "b", (function() {
          return i
        })), n.d(e, "c", (function() {
          return o
        })), n.d(e, "a", (function() {}));
        var i = function() {
            this.$createElement;
            this._self._c
          },
          o = []
      },
      "38fe": function(t, e, n) {
        (function(t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.default = void 0;
          var i = {
            components: {
              PopupBottom: function() {
                n.e("subPage/components/echone-sku/popup-bottom").then(function() {
                  return resolve(n("6bb1"))
                }.bind(null, n)).catch(n.oe)
              }
            },
            filters: {
              toFixed2: function(t) {
                return t ? Number(t).toFixed(2) : "0.00"
              }
            },
            props: {
              show: {
                type: Boolean,
                default: !1
              },
              themeColor: {
                type: String,
                default: "#1ac792"
              },
              defaultPicUrl: {
                type: String,
                default: "https://eshopfile.zhiyousx.com/2023102620364973049.png"
              },
              combinations: {
                type: Array,
                default: function() {
                  return []
                }
              },
              specifications: {
                type: Array,
                default: function() {
                  return []
                }
              },
              defaultSelectIndex: {
                type: Number,
                default: 0
              },
              combinationsProps: {
                type: Object,
                default: function() {
                  return {
                    id: "id",
                    value: "value",
                    image: "image",
                    price: "price",
                    stock: "stock"
                  }
                }
              },
              specificationsProps: {
                type: Object,
                default: function() {
                  return {
                    id: "id",
                    list: "list",
                    name: "name"
                  }
                }
              }
            },
            data: function() {
              return {
                buyCount: 1,
                selectedIndex: 0,
                borderWidth: t.upx2px(2),
                mySpecifications: [],
                selectSkuInfo: {}
              }
            },
            computed: {
              speId: function() {
                return this.specificationsProps.id
              },
              speList: function() {
                return this.specificationsProps.list
              },
              speName: function() {
                return this.specificationsProps.name
              },
              cbValue: function() {
                return this.combinationsProps.value
              },
              cbImage: function() {
                return this.combinationsProps.image
              },
              cbPrice: function() {
                return this.combinationsProps.price
              },
              cbStock: function() {
                return this.combinationsProps.stock
              }
            },
            methods: {
              initSkuData: function() {
                var t = this;
                this.selectedIndex = this.defaultSelectIndex, this.selectSkuInfo = this.combinations[this.selectedIndex], this.mySpecifications = JSON.parse(JSON.stringify(this.specifications)), this.mySpecifications.forEach((function(e, n) {
                  var i = t.combinations[t.selectedIndex][t.cbValue].split(","),
                    o = e[t.speList].indexOf(i[n]);
                  t.$set(e, "sidx", o > -1 ? o : 0)
                }))
              },
              selectSku: function(t, e) {
                var n = this;
                this.mySpecifications[t].sidx = e;
                var i = this.mySpecifications.reduce((function(t, e) {
                  return t ? t + "," + e[n.speList][e.sidx] : e[n.speList][e.sidx]
                }), "");
                this.selectedIndex = this.combinations.findIndex((function(t) {
                  return t[n.cbValue] === i
                })), this.selectSkuInfo = this.combinations[this.selectedIndex], this.buyCount = 1, this.$emit("skubtn", {
                  selectedIndex: this.selectedIndex,
                  buyCount: this.buyCount
                })
              },
              handleBuyCount: function(t) {
                if ("minus" === t) {
                  if (this.buyCount <= 1) return;
                  this.buyCount = 1 * this.buyCount - 1
                }
                "add" === t && (this.buyCount = 1 * this.buyCount + 1), this.$emit("skubtn", {
                  selectedIndex: this.selectedIndex,
                  buyCount: this.buyCount
                })
              },
              closeSkuBox: function() {
                this.$emit("close", {
                  selectedIndex: this.selectedIndex,
                  buyCount: this.buyCount
                })
              },
              handleConfirm: function() {
                var t = this.selectSkuInfo;
                t.count = 1 * this.buyCount, t.skuBuy = "skuBuy", this.$emit("confirm", t)
              },
              inputNum: function(t) {
                Number(t.detail.value) <= 0 ? (this.buyCount = 1, this.$util.showToast("最少购买一件哟!")) : Number(t.detail.value) > 200 && (this.buyCount = 200, this.$util.showToast("最多只能购买200件哟!"))
              }
            }
          };
          e.default = i
        }).call(this, n("df3c").default)
      },
      "4d75": function(t, e, n) {},
      a0f4: function(t, e, n) {
        n.r(e);
        var i = n("29c2"),
          o = n("10ee");
        for (var s in o)["default"].indexOf(s) < 0 && function(t) {
          n.d(e, t, (function() {
            return o[t]
          }))
        }(s);
        n("cd6f"), n("0842");
        var u = n("828b"),
          c = Object(u.a)(o.default, i.b, i.c, !1, null, "084ed9e2", null, !1, i.a, void 0);
        e.default = c.exports
      },
      cd6f: function(t, e, n) {
        var i = n("d44f");
        n.n(i).a
      },
      d44f: function(t, e, n) {}
    }
  ]), (global.webpackJsonp = global.webpackJsonp || []).push(["subPage/components/echone-sku/echone-sku-create-component", {
      "subPage/components/echone-sku/echone-sku-create-component": function(t, e, n) {
        n("df3c").createComponent(n("a0f4"))
      }
    },
    [
      ["subPage/components/echone-sku/echone-sku-create-component"]
    ]
  ]);
}, {
  isPage: false,
  isComponent: true,
  currentFile: 'subPage/components/echone-sku/echone-sku.js'
});
require("subPage/components/echone-sku/echone-sku.js");;
__wxRoute = "subPage/components/echone-sku/popup-bottom";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "subPage/components/echone-sku/popup-bottom.js";
define("subPage/components/echone-sku/popup-bottom.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["subPage/components/echone-sku/popup-bottom"], {
      "2ccd": function(o, e, n) {
        var t = n("5e1c");
        n.n(t).a
      },
      "5e1c": function(o, e, n) {},
      "6bb1": function(o, e, n) {
        n.r(e);
        var t = n("a144"),
          c = n("9506");
        for (var u in c)["default"].indexOf(u) < 0 && function(o) {
          n.d(e, o, (function() {
            return c[o]
          }))
        }(u);
        n("2ccd");
        var a = n("828b"),
          p = Object(a.a)(c.default, t.b, t.c, !1, null, null, null, !1, t.a, void 0);
        e.default = p.exports
      },
      9506: function(o, e, n) {
        n.r(e);
        var t = n("bcc0"),
          c = n.n(t);
        for (var u in t)["default"].indexOf(u) < 0 && function(o) {
          n.d(e, o, (function() {
            return t[o]
          }))
        }(u);
        e.default = c.a
      },
      a144: function(o, e, n) {
        n.d(e, "b", (function() {
          return t
        })), n.d(e, "c", (function() {
          return c
        })), n.d(e, "a", (function() {}));
        var t = function() {
            this.$createElement;
            this._self._c
          },
          c = []
      },
      bcc0: function(o, e, n) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var t = {
          name: "PopupBottom",
          props: {
            mask: {
              type: Boolean,
              default: !0
            },
            show: {
              type: Boolean,
              default: !1
            },
            bgcolor: {
              type: String,
              default: "transparent"
            }
          },
          methods: {
            handleClose: function() {
              this.show && this.$emit("close")
            }
          }
        };
        e.default = t
      }
    }
  ]), (global.webpackJsonp = global.webpackJsonp || []).push(["subPage/components/echone-sku/popup-bottom-create-component", {
      "subPage/components/echone-sku/popup-bottom-create-component": function(o, e, n) {
        n("df3c").createComponent(n("6bb1"))
      }
    },
    [
      ["subPage/components/echone-sku/popup-bottom-create-component"]
    ]
  ]);
}, {
  isPage: false,
  isComponent: true,
  currentFile: 'subPage/components/echone-sku/popup-bottom.js'
});
require("subPage/components/echone-sku/popup-bottom.js");;
__wxRoute = "subPage/components/hch-poster/hch-poster";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "subPage/components/hch-poster/hch-poster.js";
define("subPage/components/hch-poster/hch-poster.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["subPage/components/hch-poster/hch-poster"], {
      "1b51": function(e, t, n) {},
      "21c23": function(e, t, n) {
        var o = n("1b51");
        n.n(o).a
      },
      "87bd": function(e, t, n) {
        n.d(t, "b", (function() {
          return i
        })), n.d(t, "c", (function() {
          return a
        })), n.d(t, "a", (function() {
          return o
        }));
        var o = {
            uniTransition: function() {
              return n.e("components/uni-transition/uni-transition").then(n.bind(null, "e151"))
            }
          },
          i = function() {
            this.$createElement;
            this._self._c
          },
          a = []
      },
      "93ce": function(e, t, n) {
        (function(e, o) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.default = void 0;
          var i = {
            components: {
              uniTransition: function() {
                n.e("subPage/components/uni-transition/uni-transition").then(function() {
                  return resolve(n("25da"))
                }.bind(null, n)).catch(n.oe)
              }
            },
            data: function() {
              return {
                duration: 10,
                maskClass: {
                  position: "fixed",
                  bottom: 0,
                  top: 0,
                  left: 0,
                  right: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.4)"
                }
              }
            },
            props: {
              canvasFlag: {
                type: Boolean,
                default: !1
              },
              posterObj: {
                type: Object,
                default: {
                  url: "",
                  icon: "",
                  title: "",
                  discountPrice: "",
                  orignPrice: "",
                  code: ""
                }
              }
            },
            methods: {
              clear: function(e) {
                e.stopPropagation()
              },
              roundRectEvn: function(e, t, n, o, i, a, s, c, r) {
                if (e.beginPath(), e.arc(t + a, n + a, a, Math.PI, 1.5 * Math.PI), e.moveTo(t + a, n), e.lineTo(t + o - a, n), e.arc(t + o - a, n + a, a, 1.5 * Math.PI, 2 * Math.PI), e.lineTo(t + o, n + i - a), e.arc(t + o - a, n + i - a, a, 0, .5 * Math.PI), e.arc(t + a, n + i - a, a, .5 * Math.PI, Math.PI), e.lineTo(t, n + a), "btn" == r) {
                  var l = e.createLinearGradient(0, 0, 200, 0);
                  l.addColorStop(0, s), l.addColorStop(1, c), e.setFillStyle(l), e.fill()
                } else if (s && (e.setFillStyle(s), e.fill()), c && (e.setStrokeStyle(c), e.stroke()), !s && !c) {
                  var h = e.createLinearGradient(t, n, o, i);
                  h.addColorStop(0, "#f54a4e"), h.addColorStop(1, "#ffbf37"), e.setFillStyle(h), e.fill()
                }
                e.closePath(), e.clip()
              },
              multiLineText: function(e, t, n, o) {
                for (var i = t.split(""), a = "", s = [], c = 0; c < i.length; c++) e.measureText(a).width < n ? a += i[c] : (c--, s.push(a), a = "");
                if (s.push(a), s.length > o) {
                  for (var r = s.slice(0, o), l = r[1], h = "", u = [], f = 0; f < l.length && e.measureText(h).width < n; f++) h += l[f];
                  u.push(h);
                  var p = u[0] + "...";
                  r.splice(o - 1, 1, p), s = r
                }
                return s
              },
              createCanvasImage: function() {
                var t = this;
                console.log("海报生成中"), e.showLoading({
                  title: "海报生成中..."
                });
                var n = this,
                  i = e.getSystemInfoSync();
                this.phoneH = i.windowHeight, this.phoneW = i.windowWidth, this.phoneW;
                var a = this.phoneH / 667;
                console.log(this.phoneH, this.phoneW);
                var s = e.createCanvasContext("myCanvas"),
                  c = this.posterObj.url,
                  r = (this.posterObj.icon, this.posterObj.code);
                s.draw(), s.save(), this.roundRectEvn(s, 25, 110, this.phoneW - 50, this.phoneH - 270, 10), s.restore(), s.save(), this.roundRectEvn(s, 55, 280, this.phoneW - 105, this.phoneH - 450, 10, "#fff"), s.restore(), e.getImageInfo({
                  src: c,
                  success: function(e) {
                    s.save(), n.roundRectEvn(s, (n.phoneW - (n.phoneW - 80)) / 2, 120, n.phoneW - 80, 180 * a, 10), s.drawImage(e.path, (n.phoneW - (n.phoneW - 80)) / 2, 110, n.phoneW - 80, 250 * a, 10), s.restore(), s.draw(!0)
                  },
                  fail: function() {
                    n.canvasFlag = !1, o.showToast({
                      title: "海报生成失败",
                      duration: 2e3,
                      icon: "none"
                    })
                  }
                }), setTimeout((function() {
                  s.setGlobalAlpha(1), s.setFillStyle("#1c1c1c"), s.setFontSize(14), s.font = "normal bold 14px 宋体";
                  for (var e = t.posterObj.title, n = t.multiLineText(s, e, t.phoneW - 145, 2), o = 0; o < n.length; o++) s.fillText(n[o], 75, (325 + 18 * o) * a, t.phoneW - 145), s.draw(!0)
                }), 500), s.setFontSize(12), s.setFillStyle("#c00000"), s.font = "normal 12px 宋体", s.fillText("￥", 77, 360 * a, 60), s.setFontSize(16);
                var l = this.posterObj.discountPrice,
                  h = (this.posterObj.orignPrice, s.measureText(l).width);
                s.fillText(l, 90, 360 * a, h), e.getImageInfo({
                  src: r,
                  success: function(e) {
                    s.drawImage(e.path, (n.phoneW - 80) / 2, 380 * a, 80, 80), s.draw(!0)
                  },
                  fail: function() {
                    n.canvasFlag = !1, o.showToast({
                      title: "海报生成失败",
                      duration: 2e3,
                      icon: "none"
                    })
                  }
                }), s.setFontSize(14), s.setFillStyle("#007aff"), s.font = "normal 14px 宋体", s.fillText("长按/扫描识别查看商品", (n.phoneW - 120) / 2, 485 * a, 200), e.hideLoading()
              },
              saveCanvasImage: function() {
                var t = this;
                console.log("点击了保存");
                var n = this;
                o.authorize({
                  scope: "scope.writePhotosAlbum",
                  success: function(i) {
                    e.showLoading({
                      title: "保存中..."
                    }), o.canvasToTempFilePath({
                      x: 0,
                      y: 0,
                      width: t.phoneW,
                      height: t.phoneH,
                      destWidth: 5 * t.phoneW,
                      destHeight: 5 * t.phoneH,
                      canvasId: "myCanvas",
                      success: function(t) {
                        o.saveImageToPhotosAlbum({
                          filePath: t.tempFilePath,
                          success: function(t) {
                            e.hideLoading(), o.showToast({
                              title: "图片保存成功，可以去分享啦~",
                              duration: 2e3
                            }), n.canvasCancelEvn()
                          },
                          fail: function(t) {
                            e.hideLoading()
                          }
                        })
                      },
                      fail: function() {
                        e.hideLoading()
                      }
                    })
                  },
                  fail: function(e) {
                    o.showModal({
                      content: "检测到您没打开保存到相册功能权限，是否去设置打开？",
                      confirmText: "确认",
                      cancelText: "取消",
                      success: function(e) {
                        e.confirm ? o.openSetting({
                          success: function(e) {
                            console.log(e)
                          }
                        }) : console.log("取消")
                      }
                    })
                  }
                })
              },
              canvasCancelEvn: function() {
                this.$emit("cancel", !1)
              }
            }
          };
          t.default = i
        }).call(this, n("3223").default, n("df3c").default)
      },
      "9c7e": function(e, t, n) {
        n.r(t);
        var o = n("87bd"),
          i = n("e368");
        for (var a in i)["default"].indexOf(a) < 0 && function(e) {
          n.d(t, e, (function() {
            return i[e]
          }))
        }(a);
        n("21c23");
        var s = n("828b"),
          c = Object(s.a)(i.default, o.b, o.c, !1, null, "7f89ef11", null, !1, o.a, void 0);
        t.default = c.exports
      },
      e368: function(e, t, n) {
        n.r(t);
        var o = n("93ce"),
          i = n.n(o);
        for (var a in o)["default"].indexOf(a) < 0 && function(e) {
          n.d(t, e, (function() {
            return o[e]
          }))
        }(a);
        t.default = i.a
      }
    }
  ]), (global.webpackJsonp = global.webpackJsonp || []).push(["subPage/components/hch-poster/hch-poster-create-component", {
      "subPage/components/hch-poster/hch-poster-create-component": function(e, t, n) {
        n("df3c").createComponent(n("9c7e"))
      }
    },
    [
      ["subPage/components/hch-poster/hch-poster-create-component"]
    ]
  ]);
}, {
  isPage: false,
  isComponent: true,
  currentFile: 'subPage/components/hch-poster/hch-poster.js'
});
require("subPage/components/hch-poster/hch-poster.js");;
__wxRoute = "subPage/components/uni-transition/uni-transition";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "subPage/components/uni-transition/uni-transition.js";
define("subPage/components/uni-transition/uni-transition.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["subPage/components/uni-transition/uni-transition"], {
      "25da": function(t, n, e) {
        e.r(n);
        var o = e("e85e"),
          r = e("efbc");
        for (var i in r)["default"].indexOf(i) < 0 && function(t) {
          e.d(n, t, (function() {
            return r[t]
          }))
        }(i);
        e("b5b3");
        var a = e("828b"),
          c = Object(a.a)(r.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        n.default = c.exports
      },
      "6c9b": function(t, n, e) {
        var o = e("47a9");
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var r = o(e("7ca3"));

        function i(t, n) {
          var e = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            n && (o = o.filter((function(n) {
              return Object.getOwnPropertyDescriptor(t, n).enumerable
            }))), e.push.apply(e, o)
          }
          return e
        }

        function a(t) {
          for (var n = 1; n < arguments.length; n++) {
            var e = null != arguments[n] ? arguments[n] : {};
            n % 2 ? i(Object(e), !0).forEach((function(n) {
              (0, r.default)(t, n, e[n])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : i(Object(e)).forEach((function(n) {
              Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
            }))
          }
          return t
        }
        var c = {
          name: "uniTransition",
          props: {
            show: {
              type: Boolean,
              default: !1
            },
            modeClass: {
              type: Array,
              default: function() {
                return []
              }
            },
            duration: {
              type: Number,
              default: 300
            },
            styles: {
              type: Object,
              default: function() {
                return {}
              }
            }
          },
          data: function() {
            return {
              isShow: !1,
              transform: "",
              ani: {
                in: "",
                active: ""
              }
            }
          },
          watch: {
            show: {
              handler: function(t) {
                t ? this.open() : this.close()
              },
              immediate: !0
            }
          },
          computed: {
            stylesObject: function() {
              var t = a(a({}, this.styles), {}, {
                  "transition-duration": this.duration / 1e3 + "s"
                }),
                n = "";
              for (var e in t) {
                n += this.toLine(e) + ":" + t[e] + ";"
              }
              return n
            }
          },
          created: function() {},
          methods: {
            change: function() {
              this.$emit("click", {
                detail: this.isShow
              })
            },
            open: function() {
              var t = this;
              for (var n in clearTimeout(this.timer), this.isShow = !0, this.transform = "", this.ani.in = "", this.getTranfrom(!1)) "opacity" === n ? this.ani.in = "fade-in" : this.transform += "".concat(this.getTranfrom(!1)[n], " ");
              this.$nextTick((function() {
                setTimeout((function() {
                  t._animation(!0)
                }), 50)
              }))
            },
            close: function(t) {
              clearTimeout(this.timer), this._animation(!1)
            },
            _animation: function(t) {
              var n = this,
                e = this.getTranfrom(t);
              for (var o in this.transform = "", e) "opacity" === o ? this.ani.in = "fade-".concat(t ? "out" : "in") : this.transform += "".concat(e[o], " ");
              this.timer = setTimeout((function() {
                t || (n.isShow = !1), n.$emit("change", {
                  detail: n.isShow
                })
              }), this.duration)
            },
            getTranfrom: function(t) {
              var n = {
                transform: ""
              };
              return this.modeClass.forEach((function(e) {
                switch (e) {
                  case "fade":
                    n.opacity = t ? 1 : 0;
                    break;
                  case "slide-top":
                    n.transform += "translateY(".concat(t ? "0" : "-100%", ") ");
                    break;
                  case "slide-right":
                    n.transform += "translateX(".concat(t ? "0" : "100%", ") ");
                    break;
                  case "slide-bottom":
                    n.transform += "translateY(".concat(t ? "0" : "100%", ") ");
                    break;
                  case "slide-left":
                    n.transform += "translateX(".concat(t ? "0" : "-100%", ") ");
                    break;
                  case "zoom-in":
                    n.transform += "scale(".concat(t ? 1 : .8, ") ");
                    break;
                  case "zoom-out":
                    n.transform += "scale(".concat(t ? 1 : 1.2, ") ")
                }
              })), n
            },
            _modeClassArr: function(t) {
              var n = this.modeClass;
              if ("string" != typeof n) {
                var e = "";
                return n.forEach((function(n) {
                  e += n + "-" + t + ","
                })), e.substr(0, e.length - 1)
              }
              return n + "-" + t
            },
            toLine: function(t) {
              return t.replace(/([A-Z])/g, "-$1").toLowerCase()
            }
          }
        };
        n.default = c
      },
      b5b3: function(t, n, e) {
        var o = e("dd35");
        e.n(o).a
      },
      dd35: function(t, n, e) {},
      e85e: function(t, n, e) {
        e.d(n, "b", (function() {
          return o
        })), e.d(n, "c", (function() {
          return r
        })), e.d(n, "a", (function() {}));
        var o = function() {
            this.$createElement;
            this._self._c
          },
          r = []
      },
      efbc: function(t, n, e) {
        e.r(n);
        var o = e("6c9b"),
          r = e.n(o);
        for (var i in o)["default"].indexOf(i) < 0 && function(t) {
          e.d(n, t, (function() {
            return o[t]
          }))
        }(i);
        n.default = r.a
      }
    }
  ]), (global.webpackJsonp = global.webpackJsonp || []).push(["subPage/components/uni-transition/uni-transition-create-component", {
      "subPage/components/uni-transition/uni-transition-create-component": function(t, n, e) {
        e("df3c").createComponent(e("25da"))
      }
    },
    [
      ["subPage/components/uni-transition/uni-transition-create-component"]
    ]
  ]);
}, {
  isPage: false,
  isComponent: true,
  currentFile: 'subPage/components/uni-transition/uni-transition.js'
});
require("subPage/components/uni-transition/uni-transition.js");;
__wxRoute = "subPage/pages/goods_details/goods_details";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "subPage/pages/goods_details/goods_details.js";
define("subPage/pages/goods_details/goods_details.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["subPage/pages/goods_details/goods_details"], {
      "0cd6": function(t, e, n) {
        n.d(e, "b", (function() {
          return i
        })), n.d(e, "c", (function() {
          return a
        })), n.d(e, "a", (function() {
          return o
        }));
        var o = {
            uniNavbar: function() {
              return n.e("components/uni-navbar/uni-navbar").then(n.bind(null, "101a"))
            },
            uSwiper: function() {
              return n.e("uview-ui/components/u-swiper/u-swiper").then(n.bind(null, "9840"))
            },
            uniIcons: function() {
              return Promise.all([n.e("common/vendor"), n.e("components/uni-icons/uni-icons")]).then(n.bind(null, "365b"))
            },
            uLazyLoad: function() {
              return n.e("uview-ui/components/u-lazy-load/u-lazy-load").then(n.bind(null, "5d7e"))
            },
            uParse: function() {
              return Promise.all([n.e("common/vendor"), n.e("uview-ui/components/u-parse/u-parse")]).then(n.bind(null, "7217"))
            },
            uniGoodsNav: function() {
              return n.e("components/uni-goods-nav/uni-goods-nav").then(n.bind(null, "ce12"))
            },
            uniPopup: function() {
              return Promise.all([n.e("common/vendor"), n.e("components/uni-popup/uni-popup")]).then(n.bind(null, "db3a"))
            },
            uEmpty: function() {
              return n.e("uview-ui/components/u-empty/u-empty").then(n.bind(null, "243d"))
            },
            uSkeleton: function() {
              return n.e("uview-ui/components/u-skeleton/u-skeleton").then(n.bind(null, "70d2"))
            },
            lPainter: function() {
              return Promise.all([n.e("common/vendor"), n.e("uni_modules/lime-painter/components/l-painter/l-painter")]).then(n.bind(null, "e6a4"))
            },
            lPainterImage: function() {
              return Promise.all([n.e("common/vendor"), n.e("uni_modules/lime-painter/components/l-painter-image/l-painter-image")]).then(n.bind(null, "c812"))
            },
            lPainterView: function() {
              return Promise.all([n.e("common/vendor"), n.e("uni_modules/lime-painter/components/l-painter-view/l-painter-view")]).then(n.bind(null, "cf27"))
            },
            lPainterText: function() {
              return Promise.all([n.e("common/vendor"), n.e("uni_modules/lime-painter/components/l-painter-text/l-painter-text")]).then(n.bind(null, "de46"))
            }
          },
          i = function() {
            var t = this,
              e = (t.$createElement, t._self._c, t.commodityInfo && 0 == t.commodityInfo.isDeleted && 0 != t.ticketDetailObj.seckillActivity && 0 === t.commodityInfo.productType ? t.combinations.length : null),
              n = t.commodityInfo && 0 == t.commodityInfo.isDeleted ? t._f("saleNumFormat")(t.commodityInfo.salesNum) : null,
              o = t.commodityInfo && 0 == t.commodityInfo.isDeleted ? t.couponArr.length : null,
              i = t.commodityInfo && 0 == t.commodityInfo.isDeleted && 1 != t.commodityInfo.isFictitious ? t.addressList.length : null,
              a = t.commodityInfo && 0 == t.commodityInfo.isDeleted ? t.notSalesList.length : null,
              s = t.commodityInfo && 0 == t.commodityInfo.isDeleted ? t.commentsList.length : null,
              r = t.commodityInfo && 0 == t.commodityInfo.isDeleted && s > 0 ? t.__map(t.commentsList, (function(e, n) {
                return {
                  $orig: t.__get_orig(e),
                  g5: e.picUrl.length
                }
              })) : null,
              c = t.commodityInfo && 0 == t.commodityInfo.isDeleted && 0 === t.popupType ? t.addressList.length : null,
              u = t.commodityInfo && 0 == t.commodityInfo.isDeleted && t.showYhMask ? t.__map(t.couponDetailArr, (function(e, n) {
                return {
                  $orig: t.__get_orig(e),
                  f1: e.useTimeSlot > 0 && 3 == e.couponStates ? t._f("timeFormat")(e.validityEndTime) : null,
                  f2: e.useTimeSlot > 0 ? null : t._f("timeFormat")(e.validityStartTime),
                  f3: e.useTimeSlot > 0 ? null : t._f("timeFormat")(e.validityEndTime)
                }
              })) : null;
            t._isMounted || (t.e0 = function(e) {
              t.postUrl = e
            }), t.$mp.data = Object.assign({}, {
              $root: {
                g0: e,
                f0: n,
                g1: o,
                g2: i,
                g3: a,
                g4: s,
                l0: r,
                g6: c,
                l1: u
              }
            })
          },
          a = []
      },
      "1fc1": function(t, e, n) {
        (function(t, o) {
          var i = n("47a9");
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.default = void 0;
          var a = i(n("7eb4")),
            s = i(n("34cf")),
            r = i(n("ee10"));

          function c(t, e) {
            var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
              if (Array.isArray(t) || (n = function(t, e) {
                  if (t) {
                    if ("string" == typeof t) return u(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, e) : void 0
                  }
                }(t)) || e && t && "number" == typeof t.length) {
                n && (t = n);
                var o = 0,
                  i = function() {};
                return {
                  s: i,
                  n: function() {
                    return o >= t.length ? {
                      done: !0
                    } : {
                      done: !1,
                      value: t[o++]
                    }
                  },
                  e: function(t) {
                    throw t
                  },
                  f: i
                }
              }
              throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var a, s = !0,
              r = !1;
            return {
              s: function() {
                n = n.call(t)
              },
              n: function() {
                var t = n.next();
                return s = t.done, t
              },
              e: function(t) {
                r = !0, a = t
              },
              f: function() {
                try {
                  s || null == n.return || n.return()
                } finally {
                  if (r) throw a
                }
              }
            }
          }

          function u(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
            return o
          }
          var d = {
            components: {
              echoneSku: function() {
                n.e("subPage/components/echone-sku/echone-sku").then(function() {
                  return resolve(n("a0f4"))
                }.bind(null, n)).catch(n.oe)
              },
              auiActionmenu: function() {
                n.e("subPage/components/aui-actionmenu/aui-actionmenu").then(function() {
                  return resolve(n("470b"))
                }.bind(null, n)).catch(n.oe)
              },
              hchPoster: function() {
                n.e("subPage/components/hch-poster/hch-poster").then(function() {
                  return resolve(n("9c7e"))
                }.bind(null, n)).catch(n.oe)
              },
              EmptyState: function() {
                n.e("subPage/components/empty/empty").then(function() {
                  return resolve(n("3b7a"))
                }.bind(null, n)).catch(n.oe)
              }
            },
            data: function() {
              return {
                couponArr: [],
                couponDetailArr: [],
                daoJiShiObj: {},
                postUrl: "",
                ticketDetailObj: {},
                iconShow: !1,
                showPainter: !1,
                showYhMask: !1,
                isAndroid: !0,
                tapIndex: null,
                loadingStatus: !0,
                itemId: "",
                referenceId: "",
                encryptionId: "",
                commodityInfo: {
                  isDeleted: 0
                },
                scrollTop: 0,
                navIdx: 0,
                popupType: 0,
                addressList: [],
                addresIdx: 0,
                addrId: "",
                parametersText: "",
                notSalesList: [],
                skuShow: !1,
                openIndex: 1,
                buyCount: 1,
                selectedIndex: 0,
                combinations: [],
                combinationsProps: {
                  id: "skuId",
                  value: "skuName",
                  image: "defaultPicUrl",
                  price: "price",
                  stock: "skuStock"
                },
                unit: 0,
                specifications: [],
                specificationsProps: {
                  id: "propId",
                  name: "propVal",
                  list: "list"
                },
                commentsList: [],
                optionsNav: [{
                  icon: "/static/images/store.png",
                  text: "店铺"
                }, {
                  icon: "https://eshopfile.zhiyousx.com/170065368213433372.png",
                  text: "购物车",
                  infoBackgroundColor: "#ff4643"
                }, {
                  icon: "/static/images/goodsshare.png",
                  text: "分享"
                }],
                buttonGroup: [{
                  text: "加入购物车",
                  backgroundImage: "linear-gradient(52deg, #FFCC31 0%, #FF8830 100%)",
                  color: "#fff"
                }, {
                  text: "立即购买",
                  backgroundImage: "linear-gradient(52deg, #FC4A7C 0%, #FF5411 100%)",
                  color: "#fff"
                }],
                optionsNavlink: [{
                  icon: "/static/images/store.png",
                  text: "店铺"
                }, {
                  icon: "/static/images/goodsshare.png",
                  text: "分享"
                }],
                buttonGrouplink: [{
                  text: "立即前往",
                  backgroundImage: "linear-gradient(52deg, #FC4A7C 0%, #FF5411 100%)",
                  color: "#fff"
                }],
                buttonGroupTicket: [{
                  text: "立即购买",
                  backgroundImage: "linear-gradient(52deg, #FC4A7C 0%, #FF5411 100%)",
                  color: "#fff"
                }],
                buttonGroupXJ: [{
                  text: "已下架",
                  backgroundImage: "linear-gradient(52deg, #FFA3BD 0%, #FFB89C 100%);",
                  color: "#fff"
                }],
                buttonGroupNoStock: [{
                  text: "暂无库存",
                  backgroundImage: "linear-gradient(52deg, #FFA3BD 0%, #FFB89C 100%);",
                  color: "#fff"
                }],
                auiActionmenu: {
                  theme: 1,
                  location: "bottom",
                  items: [{
                    name: "微信",
                    icon: "iconweixin",
                    iconColor: "#1AA034"
                  }, {
                    name: "海报",
                    icon: "iconpengyouquan",
                    iconColor: "#EB3C3B"
                  }]
                },
                canvasFlag: !1,
                posterData: {},
                codeUrl: "",
                parseStyle: {
                  p: "word-break: break-all;",
                  img: "display: block"
                },
                cashBackAmount: ""
              }
            },
            onLoad: function(e) {
              e.scene ? this.getScene(e.scene) : (e.itemId && (this.itemId = e.itemId), this.pageLoad(), t.getSystemInfoSync().system.indexOf("Android") > -1 || (this.isAndroid = !1))
            },
            onUnload: function() {
              this._timer && clearInterval(this._timer)
            },
            onShareAppMessage: function() {
              var t = "/subPage/pages/goods_details/goods_details?itemId=".concat(this.commodityInfo.itemId);
              return {
                title: this.commodityInfo.itemTitle,
                path: this.$util.setShareUrl(t),
                imageUrl: this.postUrl
              }
            },
            onPageScroll: function(t) {
              this.scrollTop = t.scrollTop, t.scrollTop > this.spxqTop ? this.navIdx = 1 : this.navIdx = 0
            },
            filters: {
              toFixed2: function(t) {
                return t ? Number(t).toFixed(2) : "0.00"
              },
              timeFormat: function(t) {
                return t.replace(/-/g, ".")
              }
            },
            computed: {
              popupTitle: function() {
                return 0 === this.popupType ? "配送" : 1 === this.popupType ? "提示" : "服务"
              },
              userInfo: function() {
                return this.$store.getters.userInfor
              },
              showFenxiao: function() {
                var t = this.userInfo;
                return t && t.isFenxiao || this.distributorId
              }
            },
            methods: {
              pageLoad: function() {
                this.getGoodsInfo(), this.getCouponDetail(), this.getCommentsList(), this.parameters(), t.getStorageSync("token") && (this.getAddress(), this.getEncryptParam())
              },
              getGoodsInfo: function() {
                var e = this;
                return (0, r.default)(a.default.mark((function n() {
                  return a.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        return n.next = 2, e.getSkuByProperty();
                      case 2:
                        return e.combinations = n.sent, n.next = 5, e.getNotSellPropList();
                      case 5:
                        return e.notSalesList = n.sent, n.next = 8, e.getSellPropList();
                      case 8:
                        return e.specifications = n.sent, n.next = 11, e.getGoodsDetails();
                      case 11:
                        e.commodityInfo = n.sent, e.cashBackAmount = e.commodityInfo.cashBackAmount || 0, e.showPainter = !0, e.getCode(), e.$nextTick((function() {
                          var e = this;
                          t.createSelectorQuery().select("#spxq").boundingClientRect((function(t) {
                            e.spxqTop = t.top
                          })).exec()
                        })), e.getCoupon();
                      case 17:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              getCoupon: function() {
                var t = this;
                this.$uniApi.getRequestNoLoading("GET", "product/app/v1/itemActive/getItemCoupons/" + this.itemId).then((function(e) {
                  var n = e.data || [],
                    o = 0,
                    i = [];
                  if (n[0]) {
                    for (var a = 0; a < n.length; ++a) {
                      var s = n[a],
                        r = "",
                        c = 0,
                        u = String(s.couponAmount),
                        d = String(s.couponFullAmount);
                      if (s.couponFullAmount > 0 ? (r = "满".concat(d, "减").concat(u, "券"), c = 3) : (r = "".concat(u, "元无门槛券"), c = 5), (o += (r.length - c) / 2 + c) > 20) break;
                      i.push(s)
                    }
                    t.couponArr = i
                  }
                }))
              },
              showCountDown: function(t) {
                var e = this;
                this._timer = setInterval((function() {
                  var n = new Date;
                  if (new Date(t.replace(/-/g, "/")).getTime() - n.getTime() <= 0) return clearInterval(e._timer), e.daoJiShiObj = {
                    hour: 0,
                    minute: 0,
                    second: 0
                  }, void e.getGoodsInfo();
                  e.daoJiShiObj = e.$util.countDown(t)
                }), 1e3)
              },
              getGoodsDetails: function() {
                var t = this;
                return new Promise((function(e, n) {
                  t.$uniApi.getRequestNoLoading("GET", "product/app/v1/item/" + t.itemId).then((function(n) {
                    if (t.loadingStatus = !1, 1 === n.code) {
                      console.log(n.data), t.iconShow = !0;
                      var o = n.data.itemPicUrls.split(",");
                      n.data.itemPicUrls = [];
                      var i, a = c(o);
                      try {
                        for (a.s(); !(i = a.n()).done;) {
                          var s = i.value;
                          n.data.itemPicUrls.push({
                            image: s
                          })
                        }
                      } catch (t) {
                        a.e(t)
                      } finally {
                        a.f()
                      }
                      e(n.data)
                    }
                  }))
                }))
              },
              getScene: function(t) {
                var e = this;
                this.$uniApi.getRequestNoLoading("GET", "manager/app/v1/qrCodeScene/getScene?sceneId=".concat(t)).then((function(t) {
                  1 === t.code && (t.data.itemId ? e.itemId = t.data.itemId : e.itemId = t.data.scene.split("=")[1], e.referenceId = t.data.referenceId, e.$store.commit("SET_DISTRIBUTORID", t.data.referenceId), console.log("商品id", t.data.itemId), console.log("推广人id", t.data.referenceId), e.pageLoad())
                }))
              },
              onImgOK: function(t) {
                this.postUrl = t.path
              },
              getCode: function() {
                var t = this,
                  e = this,
                  n = {
                    scene: "itemId=".concat(this.commodityInfo.itemId, "&referenceId=").concat(this.userInfo.memberId),
                    itemId: this.commodityInfo.itemId,
                    referenceId: this.userInfo.memberId,
                    page: "subPage/pages/goods_details/goods_details"
                  };
                this.$uniApi.dataRequestNoLoading("POST", "manager/app/wx/getminiLongSceneQr", n).then((function(n) {
                  1 === n.code && (t.codeUrl = n.data.baseData, t.base64ToSave(n.data.baseData).then((function(t) {
                    e.codeUrl = t
                  })))
                }))
              },
              base64ToSave: function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "tmp_base64src",
                  i = t.getFileSystemManager();
                return new Promise((function(t, a) {
                  var r = /data:image\/(\w+);base64,(.*)/.exec(e) || [],
                    c = (0, s.default)(r, 3),
                    u = c[1],
                    d = c[2];
                  u || a(new Error("ERROR_BASE64SRC_PARSE"));
                  var l = "".concat(o.env.USER_DATA_PATH, "/").concat(n, ".").concat(u),
                    m = o.base64ToArrayBuffer(d);
                  i.writeFile({
                    filePath: l,
                    data: m,
                    encoding: "binary",
                    success: function() {
                      t(l)
                    },
                    fail: function() {
                      a(new Error("ERROR_BASE64SRC_WRITE"))
                    }
                  })
                }))
              },
              getCommentsList: function() {
                var t = this,
                  e = {
                    current: 1,
                    size: 6,
                    itemId: this.itemId
                  };
                this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/itemComment/getListByItemId", e).then((function(e) {
                  if (1 === e.code) {
                    var n = e.data.page.records;
                    n.length > 0 && (n.forEach((function(t) {
                      t.createTime = t.createTime.slice(0, 9), t.picUrl ? t.picUrl = t.picUrl.split(",") : t.picUrl = []
                    })), t.commentsList = n)
                  }
                }))
              },
              parameters: function() {
                var t = this;
                this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/sysParam/getInfo", {
                  paramKey: "ITEM_SERVICE"
                }).then((function(e) {
                  1 === e.code && (t.parametersText = e.data[0])
                }))
              },
              getSkuByProperty: function() {
                var t = this;
                return new Promise((function(e, n) {
                  t.$uniApi.dataRequestNoLoading("GET", "product/app/v1/sku", {
                    current: 1,
                    size: 5999,
                    itemId: t.itemId
                  }).then((function(t) {
                    1 === t.code && (t.data.records.forEach((function(t) {
                      t.skuStock = t.skuStock ? t.skuStock : 0, t.skuName = t.skuName ? t.skuName.trim().split(" ").join(",") : ""
                    })), e(t.data.records))
                  }))
                }))
              },
              getSellPropList: function() {
                var t = this;
                return new Promise((function(e, n) {
                  t.$uniApi.getRequestNoLoading("GET", "product/app/v1/skuItemPropRel/propList/" + t.itemId).then((function(t) {
                    if (1 === t.code) {
                      if (t.data.length > 0) {
                        var n, o = c(t.data);
                        try {
                          for (o.s(); !(n = o.n()).done;) {
                            var i = n.value;
                            i.list = [];
                            var a, s = c(i.optionVals);
                            try {
                              for (s.s(); !(a = s.n()).done;) {
                                var r = a.value;
                                i.list.push(r.optionVal)
                              }
                            } catch (t) {
                              s.e(t)
                            } finally {
                              s.f()
                            }
                          }
                        } catch (t) {
                          o.e(t)
                        } finally {
                          o.f()
                        }
                      }
                      e(t.data)
                    }
                  }))
                }))
              },
              getNotSellPropList: function() {
                var t = this;
                return new Promise((function(e, n) {
                  t.$uniApi.getRequestNoLoading("GET", "product/app/v1/skuItemPropRel/getNotSellPropList/" + t.itemId).then((function(t) {
                    1 === t.code && e(t.data)
                  }))
                }))
              },
              getAddress: function() {
                var t = this;
                this.$uniApi.dataRequestNoLoading("GET", "manager/app/v1/memberDeliveryAddress", {
                  current: 1,
                  size: 5999,
                  memberId: this.userInfo.memberId
                }).then((function(e) {
                  1 === e.code && (t.addressList = e.data.records, t.addressList.length > 0 && (t.addrId = t.addressList[t.addresIdx].addrId))
                }))
              },
              getEncryptParam: function() {
                var t = this;
                this.$uniApi.getRequestNoLoading("GET", "manager/app/v1/member/getEncryptParam").then((function(e) {
                  1 === e.code && (t.encryptionId = e.data)
                }))
              },
              getShopCartNum: function() {
                var t = this;
                this.$uniApi.getRequestNoLoading("GET", "product/app/v1/cartInfo/getMemberCart").then((function(e) {
                  1 === e.code && t.$store.commit("SET_ORDERENSURE", e.data.cartItemNum)
                }))
              },
              selectOrerAddr: function(t) {
                var e = this;
                this.$uniApi.dataRequestNoLoading("POST", "manager/app/v1/memberDeliveryAddress/updateFlag", {
                  addrId: this.addrId,
                  memberId: this.userInfo.memberId
                }).then((function(n) {
                  1 === n.code && e.$navigateTo({
                    url: "/subPage/pages/affirm_order/affirm_order?type=0&skuId=".concat(t.skuId, "&quantity=").concat(t.count, "&shareMemberId=").concat(e.referenceId)
                  })
                }))
              },
              handleOpen: function(t) {
                this.skuShow = !0, this.$refs.echoneSku.initSkuData(), this.openIndex = t
              },
              handleClose: function(t) {
                this.selectedIndex = t.selectedIndex, this.buyCount = t.buyCount, this.skuShow = !1
              },
              addShop: function(t) {
                this.selectedIndex = t.selectedIndex, this.buyCount = t.buyCount
              },
              handleConfirm: function(t) {
                this.$util.isLogin() && ("skuBuy" === t.skuBuy ? 0 === this.openIndex ? this.addCart() : this.addrId ? this.selectOrerAddr(t) : this.$navigateTo({
                  url: "/subPage/pages/affirm_order/affirm_order?type=0&skuId=".concat(t.skuId, "&quantity=").concat(t.count, "&shareMemberId=").concat(this.referenceId)
                }) : this.handleOpen(t.index))
              },
              buttonClick: function(t) {
                console.log(t), 0 === t.index ? this.$navigateTo({
                  url: "/subPage/pages/storeshop/storeshop?sellerId=".concat(this.commodityInfo.sellerId)
                }) : 1 === t.index ? this.$util.isLogin() && (1 === this.commodityInfo.isFictitious ? this.$refs.actionmenu.show() : this.$navigateTo({
                  url: "/subPage/pages/shopcart/shopcart"
                })) : this.$util.isLogin() && this.$refs.actionmenu.show()
              },
              actionmenuCallback: function(t) {
                var e = this;
                2 === t.index && this.$store.dispatch("PushMessage").then((function(t) {
                  e.createCanvasImageEvn()
                }))
              },
              canvasCancel: function(t) {
                this.canvasFlag = t
              },
              createCanvasImageEvn: function() {
                var t = this,
                  e = this.commodityInfo.videoUrls[0].picUrl ? this.commodityInfo.videoUrls[0].picUrl : this.commodityInfo.defaultPicUrl,
                  n = this.commodityInfo.minPrice;
                Object.assign(this.posterData, {
                  url: e,
                  title: this.commodityInfo.itemTitle,
                  discountPrice: n,
                  code: this.codeUrl
                }), this.$forceUpdate(), setTimeout((function() {
                  t.canvasFlag = !0, t.$refs.hchPoster.createCanvasImage()
                }), 500)
              },
              isAddShop: function() {
                var t = this,
                  e = this.combinations[this.selectedIndex].skuId,
                  n = {
                    skuId: e,
                    quantity: this.buyCount
                  };
                this.$uniApi.getRequestNoLoading("GET", "product/app/v1/cartInfo/getMemberCart").then((function(o) {
                  if (1 === o.code) {
                    var i = [];
                    o.data.cartItemInfo.split("|").forEach((function(t) {
                      i.push(t.split(","))
                    })), i.some((function(t) {
                      return t[0] === e
                    })) ? t.$util.showToast("您已经添加过购物车了") : t.addCart(n)
                  } else t.addCart(n)
                })).catch((function(e) {
                  t.$util.showToast(e.msg)
                }))
              },
              addCart: function() {
                var t = this,
                  e = this.combinations[this.selectedIndex].skuId;
                this.$uniApi.getRequestYesLoading("POST", "product/app/v1/cartInfo/addCart?skuId=".concat(e, "&quantity=").concat(this.buyCount, "&shareMemberId=").concat(this.referenceId), "加入中...").then((function(e) {
                  1 === e.code ? (t.$store.commit("SET_ORDERENSURE", t.cardNum + 1), t.$util.showSuccessToast("已加入购物车"), t.skuShow = !1) : t.$util.showToast(e.msg)
                })).catch((function(e) {
                  t.$util.showToast(e.msg)
                }))
              },
              favBtn: function() {
                var t = this;
                if (this.$util.isLogin()) {
                  var e = {
                    itemId: this.itemId,
                    memberId: this.userInfo.memberId,
                    sellerId: this.commodityInfo.sellerId,
                    skuId: 0 == this.commodityInfo.productType ? this.combinations[this.selectedIndex].skuId : ""
                  };
                  this.$uniApi.dataRequestNoLoading("PUT", "manager/app/v1/memberFavoriteSku", e).then((function(e) {
                    1 === e.code ? 1 === t.commodityInfo.favorite ? (t.commodityInfo.favorite = 0, t.$util.showToast("已取消收藏")) : (t.commodityInfo.favorite = 1, t.$util.showSuccessToast("已收藏")) : t.$util.showToast(e.msg)
                  })).catch((function(e) {
                    t.$util.showToast(e.msg)
                  }))
                }
              },
              nabBtn: function(e) {
                this.navIdx = e, 0 === e ? t.pageScrollTo({
                  scrollTop: 0,
                  duration: 300
                }) : 1 === e && t.pageScrollTo({
                  scrollTop: this.spxqTop,
                  duration: 300
                })
              },
              openPopup: function(t) {
                this.popupType = t, 0 === t ? this.$util.isLogin() && this.$refs.popup.open() : this.$refs.popup.open()
              },
              closePopup: function() {
                this.$refs.popup.close()
              },
              radioChange: function(t) {
                var e = this;
                this.addrId = t.target.value, this.addressList.forEach((function(n, o) {
                  n.addrId === t.target.value && (e.addresIdx = o)
                })), this.$refs.popup.close()
              },
              swiperBtn: function(e) {
                var n = [];
                this.commodityInfo.itemPicUrls.forEach((function(t) {
                  n.push(t.image)
                })), t.previewImage({
                  current: e,
                  urls: n
                })
              },
              commentsBtn: function(e, n) {
                t.previewImage({
                  current: n,
                  urls: e
                })
              },
              makePhoneCall: function() {
                t.makePhoneCall({
                  phoneNumber: this.parametersText.paramValue
                })
              },
              goAddress: function() {
                this.$navigateTo({
                  url: "/subPack/pages/addaddress/addaddress"
                })
              },
              goComments: function() {
                this.$navigateTo({
                  url: "/subPage/pages/commentslist/commentslist?itemId=".concat(this.itemId)
                })
              },
              goLink: function(e) {
                0 === e.index && (0 === this.commodityInfo.fictitiousResource ? this.$navigateTo({
                  url: "/pages/webpage/webpage?url=".concat(this.commodityInfo.fictitiousUrl)
                }) : 1 === this.commodityInfo.fictitiousResource && t.openEmbeddedMiniProgram({
                  appId: this.commodityInfo.miniAppId,
                  path: this.commodityInfo.fictitiousUrl,
                  success: function(t) {
                    console.log("打开小程序成功", t)
                  },
                  fail: function(t) {
                    console.log("打开小程序失败", t)
                  }
                }))
              },
              goFillOrder: function() {
                var t = this.commodityInfo.itemId,
                  e = "/subPage/pages/ticketFillOrder/ticketFillOrder?ticketId=".concat(t);
                this.$util.isLogin(e) && this.$navigateTo({
                  url: e
                })
              },
              showMore: function(t) {
                this.tapIndex != t ? this.tapIndex = t : this.tapIndex = null
              },
              showYh: function() {
                this.showYhMask = !this.showYhMask, this.showYhMask && this.getCouponDetail()
              },
              getCouponDetail: function() {
                var t = this;
                this.$uniApi.dataRequestNoLoading("POST", "product/app/v1/CouponReceive/couponDetail", {
                  itemId: this.itemId
                }).then((function(e) {
                  t.couponDetailArr = e.data
                }))
              },
              receiveCoupon: function(t, e) {
                var n = this;
                this.$util.isLogin() && 1 == e && this.$uniApi.dataRequestNoLoading("POST", "product/app/v1/CouponReceive/receiveCoupon", {
                  couponId: t
                }).then((function(t) {
                  1 == t.code ? n.getCouponDetail() : (n.$util.showToast("已抢光"), n.getCouponDetail(), n.getCoupon())
                }))
              }
            }
          };
          e.default = d
        }).call(this, n("df3c").default, n("3223").default)
      },
      "7aea": function(t, e, n) {
        n.r(e);
        var o = n("0cd6"),
          i = n("d558");
        for (var a in i)["default"].indexOf(a) < 0 && function(t) {
          n.d(e, t, (function() {
            return i[t]
          }))
        }(a);
        n("babb");
        var s = n("828b"),
          r = Object(s.a)(i.default, o.b, o.c, !1, null, "286ae0e6", null, !1, o.a, void 0);
        e.default = r.exports
      },
      b7e2: function(t, e, n) {},
      babb: function(t, e, n) {
        var o = n("b7e2");
        n.n(o).a
      },
      d558: function(t, e, n) {
        n.r(e);
        var o = n("1fc1"),
          i = n.n(o);
        for (var a in o)["default"].indexOf(a) < 0 && function(t) {
          n.d(e, t, (function() {
            return o[t]
          }))
        }(a);
        e.default = i.a
      },
      f12c: function(t, e, n) {
        (function(t, e) {
          var o = n("47a9");
          n("5366"), o(n("3240"));
          var i = o(n("7aea"));
          t.__webpack_require_UNI_MP_PLUGIN__ = n, e(i.default)
        }).call(this, n("3223").default, n("df3c").createPage)
      }
    },
    [
      ["f12c", "common/runtime", "common/vendor"]
    ]
  ]);
}, {
  isPage: true,
  isComponent: true,
  currentFile: 'subPage/pages/goods_details/goods_details.js'
});
require("subPage/pages/goods_details/goods_details.js");
