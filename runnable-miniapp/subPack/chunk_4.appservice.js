$gwx1_XC_34 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx1_XC_34 || [];

    function gz$gwx1_XC_34_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx1_XC_34_1) return __WXML_GLOBAL__.ops_cached.$gwx1_XC_34_1
      __WXML_GLOBAL__.ops_cached.$gwx1_XC_34_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, 'uni-stat__select'])
        Z([
          [7],
          [3, 'label']
        ])
        Z([
          [4],
          [
            [5],
            [
              [5],
              [1, 'uni-select']
            ],
            [
              [2, '?:'],
              [
                [7],
                [3, 'disabled']
              ],
              [1, 'uni-select--disabled'],
              [1, '']
            ]
          ]
        ])
        Z([3, '__e'])
        Z([3, 'uni-select__input-box'])
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
                          [1, 'toggleSelector']
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
          [2, '&&'],
          [
            [2, '&&'],
            [
              [7],
              [3, 'current']
            ],
            [
              [7],
              [3, 'clear']
            ]
          ],
          [
            [2, '!'],
            [
              [7],
              [3, 'disabled']
            ]
          ]
        ])
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
                          [1, 'clearVal']
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
        Z([3, '#c0c4cc'])
        Z([3, '24'])
        Z([3, 'clear'])
        Z([3, '0ee96ace-1'])
        Z(z[9])
        Z([3, '#999'])
        Z([3, '14'])
        Z([
          [2, '?:'],
          [
            [7],
            [3, 'showSelector']
          ],
          [1, 'arrowup'],
          [1, 'arrowdown']
        ])
        Z([3, '0ee96ace-2'])
        Z([
          [7],
          [3, 'showSelector']
        ])
        Z(z[19])
      })(__WXML_GLOBAL__.ops_cached.$gwx1_XC_34_1);
      return __WXML_GLOBAL__.ops_cached.$gwx1_XC_34_1
    }

    function gz$gwx1_XC_34_2() {
      if (__WXML_GLOBAL__.ops_cached.$gwx1_XC_34_2) return __WXML_GLOBAL__.ops_cached.$gwx1_XC_34_2
      __WXML_GLOBAL__.ops_cached.$gwx1_XC_34_2 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, 'page-box data-v-e8182906'])
        Z([1, 2])
        Z([3, '__l'])
        Z([3, 'data-v-e8182906'])
        Z([3, '98ebca94-1'])
        Z([3, 'pb data-v-e8182906'])
        Z([
          [6],
          [
            [7],
            [3, 'lineProductInfo']
          ],
          [3, 'relationProductName']
        ])
        Z([3, 'num-box data-v-e8182906'])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [1, 'padding-bottom:'],
            [
              [2, '?:'],
              [
                [2, '&&'],
                [
                  [2, '>'],
                  [
                    [7],
                    [3, 'surplusStock']
                  ],
                  [1, 0]
                ],
                [
                  [2, '<='],
                  [
                    [7],
                    [3, 'surplusStock']
                  ],
                  [1, 20]
                ]
              ],
              [1, '0'],
              [1, '40rpx']
            ]
          ],
          [1, ';']
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
        Z(z[9])
        Z([
          [2, '!='],
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
            [3, 'price']
          ],
          [1, null]
        ])
        Z([
          [2, '&&'],
          [
            [2, '>='],
            [
              [7],
              [3, 'surplusStock']
            ],
            [1, 0]
          ],
          [
            [2, '<='],
            [
              [7],
              [3, 'surplusStock']
            ],
            [1, 20]
          ]
        ])
        Z([
          [2, '>'],
          [
            [7],
            [3, 'allTicNum']
          ],
          [1, 0]
        ])
        Z([3, 'tourists-box data-v-e8182906'])
        Z([
          [2, '!=='],
          [
            [6],
            [
              [7],
              [3, '$root']
            ],
            [3, 'm2']
          ],
          [1, '已选满']
        ])
        Z([
          [2, '=='],
          [
            [7],
            [3, 'typeNum']
          ],
          [1, 1]
        ])
        Z(z[9])
        Z(z[10])
        Z([
          [6],
          [
            [7],
            [3, '$root']
          ],
          [3, 'l1']
        ])
        Z(z[9])
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
          [3, 'idCarNo']
        ])
        Z([
          [2, '>'],
          [
            [7],
            [3, 'typeNum']
          ],
          [1, 1]
        ])
        Z(z[9])
        Z(z[10])
        Z([
          [6],
          [
            [7],
            [3, '$root']
          ],
          [3, 'l2']
        ])
        Z(z[9])
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
            [3, 'num']
          ],
          [1, 0]
        ])
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
            [3, 'num']
          ],
          [
            [6],
            [
              [7],
              [3, 'item']
            ],
            [3, 'g2']
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
            [3, 'g4']
          ],
          [1, 0]
        ])
        Z(z[9])
        Z(z[10])
        Z([
          [7],
          [3, 'otherInfoList']
        ])
        Z([3, 'row-it data-v-e8182906'])
        Z([3, 'row-it-box data-v-e8182906'])
        Z([
          [2, '=='],
          [
            [6],
            [
              [7],
              [3, 'item']
            ],
            [3, 'type']
          ],
          [1, 1]
        ])
        Z([
          [2, '=='],
          [
            [6],
            [
              [7],
              [3, 'item']
            ],
            [3, 'type']
          ],
          [1, 2]
        ])
        Z([
          [2, '=='],
          [
            [6],
            [
              [7],
              [3, 'item']
            ],
            [3, 'type']
          ],
          [1, 3]
        ])
        Z([3, '__e'])
        Z([3, 'val val-box data-v-e8182906'])
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
                            [1, 'showSelect']
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
                                        [1, 'otherInfoList']
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
        Z(z[2])
        Z(z[3])
        Z([3, '#BDBDBD'])
        Z([3, '19'])
        Z([3, 'margin-left:4rpx;'])
        Z([3, 'arrowright'])
        Z([
          [2, '+'],
          [1, '98ebca94-2-'],
          [
            [7],
            [3, 'index']
          ]
        ])
        Z([
          [2, '=='],
          [
            [6],
            [
              [7],
              [3, 'item']
            ],
            [3, 'type']
          ],
          [1, 0]
        ])
        Z(z[2])
        Z(z[40])
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
                                    [1, '$0']
                                  ],
                                  [1, 'val']
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
                                        [1, 'otherInfoList']
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
        Z([
          [6],
          [
            [7],
            [3, 'item']
          ],
          [3, 'range']
        ])
        Z([3, '请选择'])
        Z([
          [6],
          [
            [7],
            [3, 'item']
          ],
          [3, 'val']
        ])
        Z([
          [2, '+'],
          [1, '98ebca94-3-'],
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
          [3, 'description']
        ])
        Z([3, 'couponBox data-v-e8182906'])
        Z([
          [2, '>'],
          [
            [7],
            [3, 'discountAmount']
          ],
          [1, 0]
        ])
        Z(z[40])
        Z([3, 'cb2 data-v-e8182906'])
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
                          [1, 'chooseCoupon']
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
          [2, '=='],
          [
            [6],
            [
              [7],
              [3, '$root']
            ],
            [3, 'g5']
          ],
          [1, 0]
        ])
        Z(z[61])
        Z([
          [2, '=='],
          [
            [7],
            [3, 'discountAmount']
          ],
          [1, 0]
        ])
        Z(z[2])
        Z(z[3])
        Z(z[45])
        Z(z[46])
        Z(z[48])
        Z([3, '98ebca94-4'])
        Z([
          [7],
          [3, 'showBar']
        ])
        Z([3, 'amount-info data-v-e8182906'])
        Z([
          [2, '!'],
          [
            [7],
            [3, 'showDetail']
          ]
        ])
        Z(z[2])
        Z(z[40])
        Z(z[3])
        Z([3, '#FF5411'])
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
                        [1, 'e0']
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ])
        Z([3, 'arrow-up'])
        Z([3, '22'])
        Z([3, 'margin-top:-4rpx;'])
        Z([3, '98ebca94-5'])
        Z(z[2])
        Z(z[40])
        Z(z[3])
        Z(z[80])
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
                        [1, 'e1']
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ])
        Z([3, 'arrow-down'])
        Z(z[83])
        Z(z[84])
        Z([3, '98ebca94-6'])
        Z(z[2])
        Z(z[40])
        Z([3, '20'])
        Z(z[3])
        Z([1, true])
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
                                [1, 'showCoupon']
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
        Z([3, 'bottom'])
        Z([
          [7],
          [3, 'showCoupon']
        ])
        Z([3, '98ebca94-7'])
        Z([
          [4],
          [
            [5],
            [1, 'default']
          ]
        ])
        Z(z[9])
        Z(z[10])
        Z([
          [6],
          [
            [7],
            [3, '$root']
          ],
          [3, 'l3']
        ])
        Z(z[9])
        Z(z[40])
        Z([3, 'box data-v-e8182906'])
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
                            [1, 'checkCoupon']
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
                                        [1, 'couponList']
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
        Z([3, 'left data-v-e8182906'])
        Z([
          [2, '&&'],
          [
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
              [3, 'type']
            ],
            [1, 1]
          ],
          [
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
                [6],
                [
                  [7],
                  [3, 'item']
                ],
                [3, '$orig']
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
                [6],
                [
                  [7],
                  [3, 'item']
                ],
                [3, '$orig']
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
              [6],
              [
                [7],
                [3, 'item']
              ],
              [3, '$orig']
            ],
            [3, 'type']
          ],
          [1, 3]
        ])
        Z([3, 'it1 data-v-e8182906'])
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
            [3, 'useTimeSlot']
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
            [3, 'useTimeSlot']
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
            [3, 'useTimeSlot']
          ],
          [1, 2]
        ])
        Z(z[2])
        Z(z[40])
        Z(z[97])
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
                                [1, 'showPassenger']
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
        Z(z[101])
        Z([
          [7],
          [3, 'showPassenger']
        ])
        Z([3, '98ebca94-8'])
        Z(z[104])
        Z([3, 'model-box data-v-e8182906'])
        Z([3, 'model-title data-v-e8182906'])
        Z([
          [2, '&&'],
          [
            [2, '!'],
            [
              [7],
              [3, 'modelType']
            ]
          ],
          [
            [7],
            [3, 'actUserInfo']
          ]
        ])
        Z([
          [2, '=='],
          [
            [7],
            [3, 'modelType']
          ],
          [1, 1]
        ])
        Z([
          [2, '=='],
          [
            [7],
            [3, 'modelType']
          ],
          [1, 2]
        ])
        Z([
          [2, '!'],
          [
            [7],
            [3, 'modelType']
          ]
        ])
        Z(z[134])
        Z(z[9])
        Z(z[10])
        Z([
          [6],
          [
            [7],
            [3, '$root']
          ],
          [3, 'l4']
        ])
        Z(z[9])
        Z(z[40])
        Z([3, 'info-box data-v-e8182906'])
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
                            [1, 'changeUser']
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
                                        [1, 'commonUsedTouristList']
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
        Z([
          [4],
          [
            [5],
            [
              [5],
              [
                [5],
                [1, 'user-info']
              ],
              [1, 'data-v-e8182906']
            ],
            [
              [2, '?:'],
              [
                [2, '!'],
                [
                  [6],
                  [
                    [7],
                    [3, 'item']
                  ],
                  [3, 'g8']
                ]
              ],
              [1, 'dis'],
              [1, '']
            ]
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
          [3, 'phone']
        ])
        Z(z[23])
        Z(z[23])
        Z([
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
            [3, 'idCarNo']
          ]
        ])
        Z([3, 'content data-v-e8182906'])
        Z(z[40])
        Z([3, 'row-box bet data-v-e8182906'])
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
                          [1, 'e2']
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
        Z(z[3])
        Z([3, '#333333'])
        Z([3, 'arrow-right'])
        Z(z[97])
        Z([3, 'margin-left:10rpx;'])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [1, '98ebca94-9'],
            [1, ',']
          ],
          [1, '98ebca94-8']
        ])
        Z([
          [2, '=='],
          [
            [6],
            [
              [7],
              [3, 'passenger']
            ],
            [3, 'cardType']
          ],
          [1, 0]
        ])
        Z(z[2])
        Z(z[3])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [1, '98ebca94-10'],
            [1, ',']
          ],
          [1, '98ebca94-8']
        ])
        Z([
          [4],
          [
            [5],
            [1, 'content']
          ]
        ])
        Z([3, 'row-box data-v-e8182906'])
        Z([3, 'content'])
        Z(z[2])
        Z(z[40])
        Z([
          [7],
          [3, 'border']
        ])
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
                                    [1, '$0']
                                  ],
                                  [1, 'name']
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
                        ],
                        [
                          [4],
                          [
                            [5],
                            [1, 'passenger']
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
        Z([3, '请填写'])
        Z([3, 'text'])
        Z([
          [6],
          [
            [7],
            [3, 'passenger']
          ],
          [3, 'name']
        ])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [1, '98ebca94-11'],
            [1, ',']
          ],
          [1, '98ebca94-10']
        ])
        Z(z[2])
        Z(z[40])
        Z(z[168])
        Z(z[3])
        Z(z[170])
        Z([
          [2, '?:'],
          [
            [2, '=='],
            [
              [6],
              [
                [7],
                [3, 'passenger']
              ],
              [3, 'cardType']
            ],
            [1, 1]
          ],
          [1, '请按Surname/Given name格式填写'],
          [1, '请填写']
        ])
        Z(z[172])
        Z(z[173])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [1, '98ebca94-12'],
            [1, ',']
          ],
          [1, '98ebca94-8']
        ])
        Z(z[2])
        Z(z[40])
        Z(z[168])
        Z(z[3])
        Z([
          [8], 'width', [1, '80%']
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
                                    [1, '$0']
                                  ],
                                  [1, 'idCarNo']
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
                        ],
                        [
                          [4],
                          [
                            [5],
                            [1, 'passenger']
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
        Z(z[171])
        Z(z[172])
        Z([
          [6],
          [
            [7],
            [3, 'passenger']
          ],
          [3, 'idCarNo']
        ])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [1, '98ebca94-13'],
            [1, ',']
          ],
          [1, '98ebca94-8']
        ])
        Z(z[2])
        Z(z[40])
        Z(z[168])
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
                                    [1, '$0']
                                  ],
                                  [1, 'phone']
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
                        ],
                        [
                          [4],
                          [
                            [5],
                            [1, 'passenger']
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
        Z(z[171])
        Z([3, 'number'])
        Z([
          [6],
          [
            [7],
            [3, 'passenger']
          ],
          [3, 'phone']
        ])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [1, '98ebca94-14'],
            [1, ',']
          ],
          [1, '98ebca94-8']
        ])
        Z(z[2])
        Z(z[40])
        Z(z[97])
        Z(z[3])
        Z(z[99])
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
                                [1, 'showDetail']
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
        Z(z[101])
        Z([
          [7],
          [3, 'showDetail']
        ])
        Z([3, '98ebca94-15'])
        Z(z[104])
        Z([3, 'detailBox data-v-e8182906'])
        Z([3, 'i'])
        Z([3, 'it'])
        Z([
          [6],
          [
            [7],
            [3, '$root']
          ],
          [3, 'l5']
        ])
        Z([
          [2, '!='],
          [
            [6],
            [
              [6],
              [
                [7],
                [3, 'it']
              ],
              [3, '$orig']
            ],
            [3, 'price']
          ],
          [1, null]
        ])
        Z([
          [2, '=='],
          [
            [7],
            [3, 'noCouponFlag']
          ],
          [1, 0]
        ])
        Z(z[2])
        Z(z[40])
        Z(z[97])
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
                                [1, 'showGroupErr']
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
        Z([3, 'center'])
        Z([
          [7],
          [3, 'showGroupErr']
        ])
        Z([3, '98ebca94-16'])
        Z(z[104])
        Z(z[2])
        Z(z[40])
        Z(z[97])
        Z(z[3])
        Z(z[99])
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
                                [1, 'showService']
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
        Z(z[101])
        Z([
          [7],
          [3, 'showService']
        ])
        Z([3, '98ebca94-17'])
        Z(z[104])
        Z([3, 'content-service data-v-e8182906'])
        Z(z[99])
        Z(z[2])
        Z(z[3])
        Z([
          [6],
          [
            [6],
            [
              [7],
              [3, 'lineProductInfo']
            ],
            [3, 'lineProductUseDescVO']
          ],
          [3, 'refundRuleDesc']
        ])
        Z(z[99])
        Z([
          [7],
          [3, 'parseStyle']
        ])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [1, '98ebca94-18'],
            [1, ',']
          ],
          [1, '98ebca94-17']
        ])
        Z([3, 'illustrate data-v-e8182906'])
        Z([
          [6],
          [
            [7],
            [3, '$root']
          ],
          [3, 'g9']
        ])
        Z([
          [6],
          [
            [7],
            [3, '$root']
          ],
          [3, 'g10']
        ])
        Z([
          [6],
          [
            [7],
            [3, '$root']
          ],
          [3, 'g11']
        ])
        Z(z[2])
        Z(z[40])
        Z(z[40])
        Z([3, 'value'])
        Z(z[3])
        Z(z[80])
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
                          [1, 'e3']
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
                                [1, 'isShowSelect']
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
        Z([
          [7],
          [3, 'defaultValue']
        ])
        Z([3, 'key'])
        Z([
          [6],
          [
            [7],
            [3, 'selectData']
          ],
          [3, 'lineProductOtherContentVOList']
        ])
        Z([3, 'mutil-column-auto'])
        Z([3, 'z-index:13000;position:fixed;'])
        Z([
          [6],
          [
            [7],
            [3, 'selectData']
          ],
          [3, 'title']
        ])
        Z([
          [7],
          [3, 'isShowSelect']
        ])
        Z(z[258])
        Z([3, '98ebca94-19'])
        Z(z[2])
        Z(z[40])
        Z(z[40])
        Z(z[3])
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
                    [1, '^chooseCardType']
                  ],
                  [
                    [4],
                    [
                      [5],
                      [
                        [4],
                        [
                          [5],
                          [1, 'chooseCardType']
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
                  [1, '^closePop']
                ],
                [
                  [4],
                  [
                    [5],
                    [
                      [4],
                      [
                        [5],
                        [1, 'e4']
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
            [3, 'passenger']
          ],
          [3, 'cardType']
        ])
        Z([
          [7],
          [3, 'realCardTypeCodes']
        ])
        Z([
          [7],
          [3, 'showCardPop']
        ])
        Z([3, '98ebca94-20'])
      })(__WXML_GLOBAL__.ops_cached.$gwx1_XC_34_2);
      return __WXML_GLOBAL__.ops_cached.$gwx1_XC_34_2
    }
    __WXML_GLOBAL__.ops_set.$gwx1_XC_34 = z;
    __WXML_GLOBAL__.ops_init.$gwx1_XC_34 = true;
    var x = ['./subPack/components/uni-data-select.wxml', './subPack/pages/groupOrder/groupOrder.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx1_XC_34_1()
      var bSY = _n('view')
      _rz(z, bSY, 'class', 0, e, s, gg)
      var oTY = _v()
      _(bSY, oTY)
      if (_oz(z, 1, e, s, gg)) {
        oTY.wxVkey = 1
      }
      var xUY = _n('view')
      _rz(z, xUY, 'class', 2, e, s, gg)
      var cXY = _mz(z, 'view', ['bindtap', 3, 'class', 1, 'data-event-opts', 2], [], e, s, gg)
      var hYY = _v()
      _(cXY, hYY)
      if (_oz(z, 6, e, s, gg)) {
        hYY.wxVkey = 1
        var oZY = _mz(z, 'view', ['catchtap', 7, 'data-event-opts', 1], [], e, s, gg)
        var c1Y = _mz(z, 'uni-icons', ['bind:__l', 9, 'color', 1, 'size', 2, 'type', 3, 'vueId', 4], [], e, s, gg)
        _(oZY, c1Y)
        _(hYY, oZY)
      } else {
        hYY.wxVkey = 2
        var o2Y = _mz(z, 'uni-icons', ['bind:__l', 14, 'color', 1, 'size', 2, 'type', 3, 'vueId', 4], [], e, s, gg)
        _(hYY, o2Y)
      }
      hYY.wxXCkey = 1
      hYY.wxXCkey = 3
      hYY.wxXCkey = 3
      _(xUY, cXY)
      var oVY = _v()
      _(xUY, oVY)
      if (_oz(z, 19, e, s, gg)) {
        oVY.wxVkey = 1
      }
      var fWY = _v()
      _(xUY, fWY)
      if (_oz(z, 20, e, s, gg)) {
        fWY.wxVkey = 1
      }
      oVY.wxXCkey = 1
      fWY.wxXCkey = 1
      _(bSY, xUY)
      oTY.wxXCkey = 1
      _(r, bSY)
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
      var z = gz$gwx1_XC_34_2()
      var a4Y = _n('view')
      _rz(z, a4Y, 'class', 0, e, s, gg)
      var t5Y = _mz(z, 'order-nav', ['active', 1, 'bind:__l', 1, 'class', 2, 'vueId', 3], [], e, s, gg)
      _(a4Y, t5Y)
      var e6Y = _n('view')
      _rz(z, e6Y, 'class', 5, e, s, gg)
      var b7Y = _v()
      _(e6Y, b7Y)
      if (_oz(z, 6, e, s, gg)) {
        b7Y.wxVkey = 1
      }
      var fAZ = _mz(z, 'view', ['class', 7, 'style', 1], [], e, s, gg)
      var hCZ = _v()
      _(fAZ, hCZ)
      var oDZ = function(oFZ, cEZ, lGZ, gg) {
        var tIZ = _v()
        _(lGZ, tIZ)
        if (_oz(z, 13, oFZ, cEZ, gg)) {
          tIZ.wxVkey = 1
        }
        tIZ.wxXCkey = 1
        return lGZ
      }
      hCZ.wxXCkey = 2
      _2z(z, 11, oDZ, e, s, gg, hCZ, 'item', 'index', 'index')
      var cBZ = _v()
      _(fAZ, cBZ)
      if (_oz(z, 14, e, s, gg)) {
        cBZ.wxVkey = 1
      }
      cBZ.wxXCkey = 1
      _(e6Y, fAZ)
      var o8Y = _v()
      _(e6Y, o8Y)
      if (_oz(z, 15, e, s, gg)) {
        o8Y.wxVkey = 1
        var eJZ = _n('view')
        _rz(z, eJZ, 'class', 16, e, s, gg)
        var bKZ = _v()
        _(eJZ, bKZ)
        if (_oz(z, 17, e, s, gg)) {
          bKZ.wxVkey = 1
        }
        var oLZ = _v()
        _(eJZ, oLZ)
        if (_oz(z, 18, e, s, gg)) {
          oLZ.wxVkey = 1
          var oNZ = _v()
          _(oLZ, oNZ)
          var fOZ = function(hQZ, cPZ, oRZ, gg) {
            var oTZ = _v()
            _(oRZ, oTZ)
            if (_oz(z, 23, hQZ, cPZ, gg)) {
              oTZ.wxVkey = 1
            }
            oTZ.wxXCkey = 1
            return oRZ
          }
          oNZ.wxXCkey = 2
          _2z(z, 21, fOZ, e, s, gg, oNZ, 'item', 'index', 'index')
        }
        var xMZ = _v()
        _(eJZ, xMZ)
        if (_oz(z, 24, e, s, gg)) {
          xMZ.wxVkey = 1
          var lUZ = _v()
          _(xMZ, lUZ)
          var aVZ = function(eXZ, tWZ, bYZ, gg) {
            var x1Z = _v()
            _(bYZ, x1Z)
            if (_oz(z, 29, eXZ, tWZ, gg)) {
              x1Z.wxVkey = 1
              var o2Z = _v()
              _(x1Z, o2Z)
              if (_oz(z, 30, eXZ, tWZ, gg)) {
                o2Z.wxVkey = 1
              }
              o2Z.wxXCkey = 1
            }
            x1Z.wxXCkey = 1
            return bYZ
          }
          lUZ.wxXCkey = 2
          _2z(z, 27, aVZ, e, s, gg, lUZ, 'item', 'index', 'index')
        }
        bKZ.wxXCkey = 1
        oLZ.wxXCkey = 1
        xMZ.wxXCkey = 1
        _(o8Y, eJZ)
      }
      var x9Y = _v()
      _(e6Y, x9Y)
      if (_oz(z, 31, e, s, gg)) {
        x9Y.wxVkey = 1
        var f3Z = _v()
        _(x9Y, f3Z)
        var c4Z = function(o6Z, h5Z, c7Z, gg) {
          var l9Z = _n('view')
          _rz(z, l9Z, 'class', 35, o6Z, h5Z, gg)
          var tA1 = _n('view')
          _rz(z, tA1, 'class', 36, o6Z, h5Z, gg)
          var eB1 = _v()
          _(tA1, eB1)
          if (_oz(z, 37, o6Z, h5Z, gg)) {
            eB1.wxVkey = 1
          } else {
            eB1.wxVkey = 2
            var bC1 = _v()
            _(eB1, bC1)
            if (_oz(z, 38, o6Z, h5Z, gg)) {
              bC1.wxVkey = 1
            } else {
              bC1.wxVkey = 2
              var oD1 = _v()
              _(bC1, oD1)
              if (_oz(z, 39, o6Z, h5Z, gg)) {
                oD1.wxVkey = 1
                var xE1 = _mz(z, 'view', ['bindtap', 40, 'class', 1, 'data-event-opts', 2], [], o6Z, h5Z, gg)
                var oF1 = _mz(z, 'uni-icons', ['bind:__l', 43, 'class', 1, 'color', 2, 'size', 3, 'style', 4, 'type', 5, 'vueId', 6], [], o6Z, h5Z, gg)
                _(xE1, oF1)
                _(oD1, xE1)
              } else {
                oD1.wxVkey = 2
                var fG1 = _v()
                _(oD1, fG1)
                if (_oz(z, 50, o6Z, h5Z, gg)) {
                  fG1.wxVkey = 1
                  var cH1 = _mz(z, 'uni-data-select', ['bind:__l', 51, 'bind:input', 1, 'class', 2, 'data-event-opts', 3, 'localdata', 4, 'placeholder', 5, 'value', 6, 'vueId', 7], [], o6Z, h5Z, gg)
                  _(fG1, cH1)
                }
                fG1.wxXCkey = 1
                fG1.wxXCkey = 3
              }
              oD1.wxXCkey = 1
              oD1.wxXCkey = 3
              oD1.wxXCkey = 3
            }
            bC1.wxXCkey = 1
            bC1.wxXCkey = 3
          }
          eB1.wxXCkey = 1
          eB1.wxXCkey = 3
          _(l9Z, tA1)
          var a0Z = _v()
          _(l9Z, a0Z)
          if (_oz(z, 59, o6Z, h5Z, gg)) {
            a0Z.wxVkey = 1
          }
          a0Z.wxXCkey = 1
          _(c7Z, l9Z)
          return c7Z
        }
        f3Z.wxXCkey = 4
        _2z(z, 34, c4Z, e, s, gg, f3Z, 'item', 'index', '')
      }
      var hI1 = _n('view')
      _rz(z, hI1, 'class', 60, e, s, gg)
      var oJ1 = _v()
      _(hI1, oJ1)
      if (_oz(z, 61, e, s, gg)) {
        oJ1.wxVkey = 1
      }
      var cK1 = _mz(z, 'view', ['bindtap', 62, 'class', 1, 'data-event-opts', 2], [], e, s, gg)
      var oL1 = _v()
      _(cK1, oL1)
      if (_oz(z, 65, e, s, gg)) {
        oL1.wxVkey = 1
      } else {
        oL1.wxVkey = 2
        var lM1 = _v()
        _(oL1, lM1)
        if (_oz(z, 66, e, s, gg)) {
          lM1.wxVkey = 1
        } else {
          lM1.wxVkey = 2
          var aN1 = _v()
          _(lM1, aN1)
          if (_oz(z, 67, e, s, gg)) {
            aN1.wxVkey = 1
          }
          aN1.wxXCkey = 1
        }
        lM1.wxXCkey = 1
      }
      var tO1 = _mz(z, 'uni-icons', ['bind:__l', 68, 'class', 1, 'color', 2, 'size', 3, 'type', 4, 'vueId', 5], [], e, s, gg)
      _(cK1, tO1)
      oL1.wxXCkey = 1
      _(hI1, cK1)
      oJ1.wxXCkey = 1
      _(e6Y, hI1)
      var o0Y = _v()
      _(e6Y, o0Y)
      if (_oz(z, 74, e, s, gg)) {
        o0Y.wxVkey = 1
        var eP1 = _n('view')
        _rz(z, eP1, 'class', 75, e, s, gg)
        var bQ1 = _v()
        _(eP1, bQ1)
        if (_oz(z, 76, e, s, gg)) {
          bQ1.wxVkey = 1
          var oR1 = _mz(z, 'u-icon', ['bind:__l', 77, 'bind:click', 1, 'class', 2, 'color', 3, 'data-event-opts', 4, 'name', 5, 'size', 6, 'style', 7, 'vueId', 8], [], e, s, gg)
          _(bQ1, oR1)
        } else {
          bQ1.wxVkey = 2
          var xS1 = _mz(z, 'u-icon', ['bind:__l', 86, 'bind:click', 1, 'class', 2, 'color', 3, 'data-event-opts', 4, 'name', 5, 'size', 6, 'style', 7, 'vueId', 8], [], e, s, gg)
          _(bQ1, xS1)
        }
        bQ1.wxXCkey = 1
        bQ1.wxXCkey = 3
        bQ1.wxXCkey = 3
        _(o0Y, eP1)
      }
      b7Y.wxXCkey = 1
      o8Y.wxXCkey = 1
      x9Y.wxXCkey = 1
      x9Y.wxXCkey = 3
      o0Y.wxXCkey = 1
      o0Y.wxXCkey = 3
      _(a4Y, e6Y)
      var oT1 = _mz(z, 'u-popup', ['bind:__l', 95, 'bind:input', 1, 'borderRadius', 2, 'class', 3, 'closeable', 4, 'data-event-opts', 5, 'mode', 6, 'value', 7, 'vueId', 8, 'vueSlots', 9], [], e, s, gg)
      var fU1 = _v()
      _(oT1, fU1)
      var cV1 = function(oX1, hW1, cY1, gg) {
        var l11 = _mz(z, 'view', ['bindtap', 109, 'class', 1, 'data-event-opts', 2], [], oX1, hW1, gg)
        var a21 = _n('view')
        _rz(z, a21, 'class', 112, oX1, hW1, gg)
        var t31 = _v()
        _(a21, t31)
        if (_oz(z, 113, oX1, hW1, gg)) {
          t31.wxVkey = 1
        }
        var e41 = _v()
        _(a21, e41)
        if (_oz(z, 114, oX1, hW1, gg)) {
          e41.wxVkey = 1
        }
        var b51 = _v()
        _(a21, b51)
        if (_oz(z, 115, oX1, hW1, gg)) {
          b51.wxVkey = 1
        }
        t31.wxXCkey = 1
        e41.wxXCkey = 1
        b51.wxXCkey = 1
        _(l11, a21)
        var o61 = _n('view')
        _rz(z, o61, 'class', 116, oX1, hW1, gg)
        var x71 = _v()
        _(o61, x71)
        if (_oz(z, 117, oX1, hW1, gg)) {
          x71.wxVkey = 1
        }
        var o81 = _v()
        _(o61, o81)
        if (_oz(z, 118, oX1, hW1, gg)) {
          o81.wxVkey = 1
        }
        var f91 = _v()
        _(o61, f91)
        if (_oz(z, 119, oX1, hW1, gg)) {
          f91.wxVkey = 1
        }
        x71.wxXCkey = 1
        o81.wxXCkey = 1
        f91.wxXCkey = 1
        _(l11, o61)
        _(cY1, l11)
        return cY1
      }
      fU1.wxXCkey = 2
      _2z(z, 107, cV1, e, s, gg, fU1, 'item', 'index', 'index')
      _(a4Y, oT1)
      var c01 = _mz(z, 'u-popup', ['bind:__l', 120, 'bind:input', 1, 'borderRadius', 2, 'class', 3, 'data-event-opts', 4, 'mode', 5, 'value', 6, 'vueId', 7, 'vueSlots', 8], [], e, s, gg)
      var hA2 = _n('view')
      _rz(z, hA2, 'class', 129, e, s, gg)
      var oD2 = _n('view')
      _rz(z, oD2, 'class', 130, e, s, gg)
      var lE2 = _v()
      _(oD2, lE2)
      if (_oz(z, 131, e, s, gg)) {
        lE2.wxVkey = 1
      }
      var aF2 = _v()
      _(oD2, aF2)
      if (_oz(z, 132, e, s, gg)) {
        aF2.wxVkey = 1
      }
      var tG2 = _v()
      _(oD2, tG2)
      if (_oz(z, 133, e, s, gg)) {
        tG2.wxVkey = 1
      }
      lE2.wxXCkey = 1
      aF2.wxXCkey = 1
      tG2.wxXCkey = 1
      _(hA2, oD2)
      var oB2 = _v()
      _(hA2, oB2)
      if (_oz(z, 134, e, s, gg)) {
        oB2.wxVkey = 1
      }
      var cC2 = _v()
      _(hA2, cC2)
      if (_oz(z, 135, e, s, gg)) {
        cC2.wxVkey = 1
        var eH2 = _v()
        _(cC2, eH2)
        var bI2 = function(xK2, oJ2, oL2, gg) {
          var cN2 = _mz(z, 'view', ['bindtap', 140, 'class', 1, 'data-event-opts', 2], [], xK2, oJ2, gg)
          var hO2 = _n('view')
          _rz(z, hO2, 'class', 143, xK2, oJ2, gg)
          var oP2 = _v()
          _(hO2, oP2)
          if (_oz(z, 144, xK2, oJ2, gg)) {
            oP2.wxVkey = 1
          }
          var cQ2 = _v()
          _(hO2, cQ2)
          if (_oz(z, 145, xK2, oJ2, gg)) {
            cQ2.wxVkey = 1
          }
          var oR2 = _v()
          _(hO2, oR2)
          if (_oz(z, 146, xK2, oJ2, gg)) {
            oR2.wxVkey = 1
          }
          var lS2 = _v()
          _(hO2, lS2)
          if (_oz(z, 147, xK2, oJ2, gg)) {
            lS2.wxVkey = 1
          }
          oP2.wxXCkey = 1
          cQ2.wxXCkey = 1
          oR2.wxXCkey = 1
          lS2.wxXCkey = 1
          _(cN2, hO2)
          _(oL2, cN2)
          return oL2
        }
        eH2.wxXCkey = 2
        _2z(z, 138, bI2, e, s, gg, eH2, 'item', 'index', 'index')
      } else {
        cC2.wxVkey = 2
        var aT2 = _n('view')
        _rz(z, aT2, 'class', 148, e, s, gg)
        var eV2 = _mz(z, 'view', ['bindtap', 149, 'class', 1, 'data-event-opts', 2], [], e, s, gg)
        var bW2 = _mz(z, 'u-icon', ['bind:__l', 152, 'class', 1, 'color', 2, 'name', 3, 'size', 4, 'style', 5, 'vueId', 6], [], e, s, gg)
        _(eV2, bW2)
        _(aT2, eV2)
        var tU2 = _v()
        _(aT2, tU2)
        if (_oz(z, 159, e, s, gg)) {
          tU2.wxVkey = 1
          var oX2 = _mz(z, 'ocr-index', ['bind:__l', 160, 'class', 1, 'vueId', 2, 'vueSlots', 3], [], e, s, gg)
          var xY2 = _mz(z, 'view', ['class', 164, 'slot', 1], [], e, s, gg)
          var oZ2 = _mz(z, 'u-input', ['bind:__l', 166, 'bind:input', 1, 'border', 2, 'class', 3, 'data-event-opts', 4, 'placeholder', 5, 'type', 6, 'value', 7, 'vueId', 8], [], e, s, gg)
          _(xY2, oZ2)
          _(oX2, xY2)
          _(tU2, oX2)
        } else {
          tU2.wxVkey = 2
          var f12 = _mz(z, 'u-input', ['bind:__l', 175, 'bind:input', 1, 'border', 2, 'class', 3, 'data-event-opts', 4, 'placeholder', 5, 'type', 6, 'value', 7, 'vueId', 8], [], e, s, gg)
          _(tU2, f12)
        }
        var c22 = _mz(z, 'u-input', ['bind:__l', 184, 'bind:input', 1, 'border', 2, 'class', 3, 'customStyle', 4, 'data-event-opts', 5, 'placeholder', 6, 'type', 7, 'value', 8, 'vueId', 9], [], e, s, gg)
        _(aT2, c22)
        var h32 = _mz(z, 'u-input', ['bind:__l', 194, 'bind:input', 1, 'border', 2, 'class', 3, 'data-event-opts', 4, 'placeholder', 5, 'type', 6, 'value', 7, 'vueId', 8], [], e, s, gg)
        _(aT2, h32)
        tU2.wxXCkey = 1
        tU2.wxXCkey = 3
        tU2.wxXCkey = 3
        _(cC2, aT2)
      }
      oB2.wxXCkey = 1
      cC2.wxXCkey = 1
      cC2.wxXCkey = 3
      _(c01, hA2)
      _(a4Y, c01)
      var o42 = _mz(z, 'u-popup', ['bind:__l', 203, 'bind:input', 1, 'borderRadius', 2, 'class', 3, 'closeable', 4, 'data-event-opts', 5, 'mode', 6, 'value', 7, 'vueId', 8, 'vueSlots', 9], [], e, s, gg)
      var c52 = _n('view')
      _rz(z, c52, 'class', 213, e, s, gg)
      var l72 = _v()
      _(c52, l72)
      var a82 = function(e02, t92, bA3, gg) {
        var xC3 = _v()
        _(bA3, xC3)
        if (_oz(z, 217, e02, t92, gg)) {
          xC3.wxVkey = 1
        }
        xC3.wxXCkey = 1
        return bA3
      }
      l72.wxXCkey = 2
      _2z(z, 216, a82, e, s, gg, l72, 'it', 'i', '')
      var o62 = _v()
      _(c52, o62)
      if (_oz(z, 218, e, s, gg)) {
        o62.wxVkey = 1
      }
      o62.wxXCkey = 1
      _(o42, c52)
      _(a4Y, o42)
      var oD3 = _mz(z, 'u-popup', ['bind:__l', 219, 'bind:input', 1, 'borderRadius', 2, 'class', 3, 'data-event-opts', 4, 'mode', 5, 'value', 6, 'vueId', 7, 'vueSlots', 8], [], e, s, gg)
      _(a4Y, oD3)
      var fE3 = _mz(z, 'u-popup', ['bind:__l', 228, 'bind:input', 1, 'borderRadius', 2, 'class', 3, 'closeable', 4, 'data-event-opts', 5, 'mode', 6, 'value', 7, 'vueId', 8, 'vueSlots', 9], [], e, s, gg)
      var cF3 = _mz(z, 'scroll-view', ['class', 238, 'scrollY', 1], [], e, s, gg)
      var hG3 = _mz(z, 'u-parse', ['bind:__l', 240, 'class', 1, 'html', 2, 'lazyLoad', 3, 'tagStyle', 4, 'vueId', 5], [], e, s, gg)
      _(cF3, hG3)
      var oH3 = _n('view')
      _rz(z, oH3, 'class', 246, e, s, gg)
      var cI3 = _v()
      _(oH3, cI3)
      if (_oz(z, 247, e, s, gg)) {
        cI3.wxVkey = 1
      }
      var oJ3 = _v()
      _(oH3, oJ3)
      if (_oz(z, 248, e, s, gg)) {
        oJ3.wxVkey = 1
      }
      var lK3 = _v()
      _(oH3, lK3)
      if (_oz(z, 249, e, s, gg)) {
        lK3.wxVkey = 1
      }
      cI3.wxXCkey = 1
      oJ3.wxXCkey = 1
      lK3.wxXCkey = 1
      _(cF3, oH3)
      _(fE3, cF3)
      _(a4Y, fE3)
      var aL3 = _mz(z, 'u-select', ['bind:__l', 250, 'bind:confirm', 1, 'bind:input', 2, 'childName', 3, 'class', 4, 'confirmColor', 5, 'data-event-opts', 6, 'defaultValue', 7, 'labelName', 8, 'list', 9, 'mode', 10, 'style', 11, 'title', 12, 'value', 13, 'valueName', 14, 'vueId', 15], [], e, s, gg)
      _(a4Y, aL3)
      var tM3 = _mz(z, 'card-type', ['bind:__l', 266, 'bind:chooseCardType', 1, 'bind:closePop', 2, 'class', 3, 'data-event-opts', 4, 'realCardType', 5, 'realCardTypeCodes', 6, 'showCardPop', 7, 'vueId', 8], [], e, s, gg)
      _(a4Y, tM3)
      _(r, a4Y)
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
      return function(env, dd, global) {
        $gwxc = 0;
        var root = {
          "tag": "wx-page"
        };
        root.children = [];
        g = "$gwx1_XC_34";
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
if (__vd_version_info__.delayedGwx || false) $gwx1_XC_34();
if (__vd_version_info__.delayedGwx) __wxAppCode__['subPack/components/uni-data-select.wxml'] = [$gwx1_XC_34, './subPack/components/uni-data-select.wxml'];
else __wxAppCode__['subPack/components/uni-data-select.wxml'] = $gwx1_XC_34('./subPack/components/uni-data-select.wxml');
if (__vd_version_info__.delayedGwx) __wxAppCode__['subPack/pages/groupOrder/groupOrder.wxml'] = [$gwx1_XC_34, './subPack/pages/groupOrder/groupOrder.wxml'];
else __wxAppCode__['subPack/pages/groupOrder/groupOrder.wxml'] = $gwx1_XC_34('./subPack/pages/groupOrder/groupOrder.wxml');;
__wxRoute = "subPack/components/uni-data-select";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "subPack/components/uni-data-select.js";
define("subPack/components/uni-data-select.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["subPack/components/uni-data-select"], {
      "1c5c1": function(t, e, n) {},
      "816a": function(t, e, n) {
        n.d(e, "b", (function() {
          return i
        })), n.d(e, "c", (function() {
          return c
        })), n.d(e, "a", (function() {
          return a
        }));
        var a = {
            uniIcons: function() {
              return Promise.all([n.e("common/vendor"), n.e("components/uni-icons/uni-icons")]).then(n.bind(null, "365b"))
            }
          },
          i = function() {
            var t = this,
              e = (t.$createElement, t._self._c, t.showSelector ? t.mixinDatacomResData.length : null),
              n = t.showSelector && 0 !== e ? t.__map(t.mixinDatacomResData, (function(e, n) {
                return {
                  $orig: t.__get_orig(e),
                  m0: t.formatItemName(e)
                }
              })) : null;
            t.$mp.data = Object.assign({}, {
              $root: {
                g0: e,
                l0: n
              }
            })
          },
          c = []
      },
      c2eb: function(t, e, n) {
        n.r(e);
        var a = n("816a"),
          i = n("fa30");
        for (var c in i)["default"].indexOf(c) < 0 && function(t) {
          n.d(e, t, (function() {
            return i[t]
          }))
        }(c);
        n("e822");
        var o = n("828b"),
          r = Object(o.a)(i.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = r.exports
      },
      e822: function(t, e, n) {
        var a = n("1c5c1");
        n.n(a).a
      },
      f3a5: function(t, e, n) {
        (function(t, n) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.default = void 0;
          var a = {
            name: "uni-data-select",
            mixins: [t.mixinDatacom || {}],
            props: {
              localdata: {
                type: Array,
                default: function() {
                  return []
                }
              },
              value: {
                type: [String, Number],
                default: ""
              },
              modelValue: {
                type: [String, Number],
                default: ""
              },
              label: {
                type: String,
                default: ""
              },
              placeholder: {
                type: String,
                default: "请选择"
              },
              emptyTips: {
                type: String,
                default: "无选项"
              },
              clear: {
                type: Boolean,
                default: !0
              },
              defItem: {
                type: Number,
                default: 0
              },
              disabled: {
                type: Boolean,
                default: !1
              },
              format: {
                type: String,
                default: ""
              },
              placement: {
                type: String,
                default: "bottom"
              }
            },
            data: function() {
              return {
                showSelector: !1,
                current: "",
                mixinDatacomResData: [],
                apps: [],
                channels: [],
                cacheKey: "uni-data-select-lastSelectedValue"
              }
            },
            created: function() {
              var t = this;
              this.debounceGet = this.debounce((function() {
                t.query()
              }), 300), this.collection && !this.localdata.length && this.debounceGet()
            },
            computed: {
              typePlaceholder: function() {
                var t = this.placeholder,
                  e = {
                    "opendb-stat-app-versions": "版本",
                    "opendb-app-channels": "渠道",
                    "opendb-app-list": "应用"
                  } [this.collection];
                return e ? t + e : t
              },
              valueCom: function() {
                return this.value
              },
              textShow: function() {
                var t = this.current;
                return t.length > 10 ? t.slice(0, 25) + "..." : t
              },
              getOffsetByPlacement: function() {
                switch (this.placement) {
                  case "top":
                    return "bottom:calc(100% + 12px);";
                  case "bottom":
                    return "top:calc(100% + 12px);"
                }
              }
            },
            watch: {
              localdata: {
                immediate: !0,
                handler: function(t, e) {
                  Array.isArray(t) && e !== t && (this.mixinDatacomResData = t)
                }
              },
              valueCom: function(t, e) {
                this.initDefVal()
              },
              mixinDatacomResData: {
                immediate: !0,
                handler: function(t) {
                  t.length && this.initDefVal()
                }
              }
            },
            methods: {
              debounce: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
                  n = null;
                return function() {
                  for (var a = this, i = arguments.length, c = new Array(i), o = 0; o < i; o++) c[o] = arguments[o];
                  n && clearTimeout(n), n = setTimeout((function() {
                    t.apply(a, c)
                  }), e)
                }
              },
              query: function() {
                this.mixinDatacomEasyGet()
              },
              onMixinDatacomPropsChange: function() {
                this.collection && this.debounceGet()
              },
              initDefVal: function() {
                var t = "";
                if (!this.valueCom && 0 !== this.valueCom || this.isDisabled(this.valueCom)) {
                  var e;
                  if (this.collection && (e = this.getCache()), e || 0 === e) t = e;
                  else {
                    var n = "";
                    this.defItem > 0 && this.defItem <= this.mixinDatacomResData.length && (n = this.mixinDatacomResData[this.defItem - 1].value), t = n
                  }(t || 0 === t) && this.emit(t)
                } else t = this.valueCom;
                var a = this.mixinDatacomResData.find((function(e) {
                  return e.value === t
                }));
                this.current = a ? this.formatItemName(a) : ""
              },
              isDisabled: function(t) {
                var e = !1;
                return this.mixinDatacomResData.forEach((function(n) {
                  n.value === t && (e = n.disable)
                })), e
              },
              clearVal: function() {
                this.emit(""), this.collection && this.removeCache()
              },
              change: function(t) {
                t.disable || (this.showSelector = !1, this.current = this.formatItemName(t), this.emit(t.value))
              },
              emit: function(t) {
                this.$emit("input", t), this.$emit("update:modelValue", t), this.$emit("change", t), this.collection && this.setCache(t)
              },
              toggleSelector: function() {
                this.disabled || (this.showSelector = !this.showSelector)
              },
              formatItemName: function(t) {
                var e = t.text,
                  n = t.value,
                  a = t.channel_code;
                if (a = a ? "(".concat(a, ")") : "", this.format) {
                  var i = "";
                  for (var c in i = this.format, t) i = i.replace(new RegExp("{".concat(c, "}"), "g"), t[c]);
                  return i
                }
                return this.collection.indexOf("app-list") > 0 ? "".concat(e, "(").concat(n, ")") : e || "未命名".concat(a)
              },
              getLoadData: function() {
                return this.mixinDatacomResData
              },
              getCurrentCacheKey: function() {
                return this.collection
              },
              getCache: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.getCurrentCacheKey(),
                  e = n.getStorageSync(this.cacheKey) || {};
                return e[t]
              },
              setCache: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getCurrentCacheKey(),
                  a = n.getStorageSync(this.cacheKey) || {};
                a[e] = t, n.setStorageSync(this.cacheKey, a)
              },
              removeCache: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.getCurrentCacheKey(),
                  e = n.getStorageSync(this.cacheKey) || {};
                delete e[t], n.setStorageSync(this.cacheKey, e)
              }
            }
          };
          e.default = a
        }).call(this, n("861b").uniCloud, n("df3c").default)
      },
      fa30: function(t, e, n) {
        n.r(e);
        var a = n("f3a5"),
          i = n.n(a);
        for (var c in a)["default"].indexOf(c) < 0 && function(t) {
          n.d(e, t, (function() {
            return a[t]
          }))
        }(c);
        e.default = i.a
      }
    }
  ]), (global.webpackJsonp = global.webpackJsonp || []).push(["subPack/components/uni-data-select-create-component", {
      "subPack/components/uni-data-select-create-component": function(t, e, n) {
        n("df3c").createComponent(n("c2eb"))
      }
    },
    [
      ["subPack/components/uni-data-select-create-component"]
    ]
  ]);
}, {
  isPage: false,
  isComponent: true,
  currentFile: 'subPack/components/uni-data-select.js'
});
require("subPack/components/uni-data-select.js");;
__wxRoute = "subPack/pages/groupOrder/groupOrder";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "subPack/pages/groupOrder/groupOrder.js";
define("subPack/pages/groupOrder/groupOrder.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../../@babel/runtime/helpers/Arrayincludes"), require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["subPack/pages/groupOrder/groupOrder"], {
      "10f6": function(e, t, i) {
        (function(e, t) {
          var n = i("47a9");
          i("5366"), n(i("3240"));
          var o = n(i("43392"));
          e.__webpack_require_UNI_MP_PLUGIN__ = i, t(o.default)
        }).call(this, i("3223").default, i("df3c").createPage)
      },
      1714: function(e, t, i) {
        (function(e) {
          var n = i("47a9");
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.default = void 0;
          var o = n(i("7eb4")),
            s = n(i("ee10")),
            r = n(i("7ca3")),
            u = n(i("adb2")),
            a = {
              components: {
                orderNav: function() {
                  i.e("subPack/components/orderNav").then(function() {
                    return resolve(i("c26a8"))
                  }.bind(null, i)).catch(i.oe)
                },
                uniDataSelect: function() {
                  Promise.all([i.e("subPack/common/vendor"), i.e("subPack/components/uni-data-select")]).then(function() {
                    return resolve(i("c2eb"))
                  }.bind(null, i)).catch(i.oe)
                },
                ocrIndex: function() {
                  i.e("components/ocr/ocrIndex").then(function() {
                    return resolve(i("7882"))
                  }.bind(null, i)).catch(i.oe)
                },
                cardType: function() {
                  i.e("subPack/components/card-pop/candType").then(function() {
                    return resolve(i("7158"))
                  }.bind(null, i)).catch(i.oe)
                }
              },
              data: function() {
                var e;
                return e = {
                  safeAreaBottom: 0,
                  showDetail: !1,
                  allAmount: 200,
                  value: "",
                  commonUsedTouristList: [],
                  selectedDate: "2023-09-22",
                  surplusStock: 5,
                  soldCount: 0,
                  showService: !1,
                  priceInfo: [{
                    peopleType: 1,
                    price: null,
                    num: 0,
                    amount: 0,
                    userList: [],
                    idList: []
                  }, {
                    peopleType: 3,
                    price: null,
                    num: 0,
                    amount: 0,
                    userList: [],
                    idList: []
                  }, {
                    peopleType: 2,
                    price: null,
                    num: 0,
                    amount: 0,
                    userList: [],
                    idList: []
                  }],
                  itemUseDesc: {
                    minBookNum: 0,
                    maxBookNum: 4
                  },
                  allTicNum: 0
                }, (0, r.default)(e, "allAmount", 0), (0, r.default)(e, "typeNum", 0), (0, r.default)(e, "actIndex", 0), (0, r.default)(e, "modelType", 0), (0, r.default)(e, "showPassenger", !1), (0, r.default)(e, "actUserInfo", ""), (0, r.default)(e, "changeIndex", 0), (0, r.default)(e, "passenger", {
                  name: "",
                  idCarNo: "",
                  phone: "",
                  id: "",
                  cardType: 0
                }), (0, r.default)(e, "submitState", !1), (0, r.default)(e, "safeAreaBottom", 0), (0, r.default)(e, "contactPerson", ""), (0, r.default)(e, "contactTel", ""), (0, r.default)(e, "lineProductId", ""), (0, r.default)(e, "lineProductName", ""), (0, r.default)(e, "disabledSubmitBtn", !1), (0, r.default)(e, "lineing", !1), (0, r.default)(e, "hasTimeOut", !1), (0, r.default)(e, "repeatCreateOrder", null), (0, r.default)(e, "repeatCreateOrder2", null), (0, r.default)(e, "groupErrList", []), (0, r.default)(e, "showGroupErr", !1), (0, r.default)(e, "lineProductInfo", {}), (0, r.default)(e, "orderId", ""), (0, r.default)(e, "refundDetail", {}), (0, r.default)(e, "showCoupon", !1), (0, r.default)(e, "showBar", !0), (0, r.default)(e, "couponId", ""), (0, r.default)(e, "couponList", []), (0, r.default)(e, "couponPeople", []), (0, r.default)(e, "userCouponId", ""), (0, r.default)(e, "discountAmount", 0), (0, r.default)(e, "deductionInfo", {}), (0, r.default)(e, "noCouponFlag", null), (0, r.default)(e, "totalNum", 0), (0, r.default)(e, "treeData", []), (0, r.default)(e, "defaultValue", [0, 0, 0]), (0, r.default)(e, "otherInfoList", []), (0, r.default)(e, "isShowSelect", !1), (0, r.default)(e, "otherIndex", -1), (0, r.default)(e, "selectData", ""), (0, r.default)(e, "parseStyle", {
                  p: "word-break: break-all;line-height:48rpx;"
                }), (0, r.default)(e, "showCardPop", !1), (0, r.default)(e, "realCardTypeCodes", []), e
              },
              filters: {
                peopleTypeFilter: function(e) {
                  return {
                    1: "成人",
                    2: "儿童",
                    3: "老人"
                  } [e]
                },
                timeFormat: function(e) {
                  return e.split(" ")[0]
                }
              },
              computed: {
                userInfo: function() {
                  return this.$store.getters.userInfor
                }
              },
              onLoad: function(t) {
                null != t.noCouponFlag && (this.noCouponFlag = t.noCouponFlag), this.safeAreaBottom = e.getStorageSync("safeAreaBottom") ? e.getStorageSync("safeAreaBottom") : 0, this.lineProductInfo = e.getStorageSync("lineProduct"), this.realCardTypeCodes = this.lineProductInfo.lineProductUseDescVO.realCardTypeCodes.split(","), this.priceInit()
              },
              onShow: function() {
                this.getCommonUsedTouristList(), this.refundInfo(), this.getOtherInfo()
              },
              watch: {
                showCoupon: {
                  handler: function(e, t) {
                    this.showBar = !e
                  }
                }
              },
              methods: {
                setDataInfos: function(e) {
                  var t = this;
                  console.log(e, "参数--------"), e ? (this.passenger.name = e.name, this.passenger.idCarNo = e.idCarNo) : setTimeout((function() {
                    t.$util.showToast("识别失败，请重新识别或手动填写")
                  }), 500)
                },
                trip: function() {
                  var e = "",
                    t = "",
                    i = "",
                    n = 0;
                  if (this.lineProductInfo.fromCityList && this.lineProductInfo.fromCityList.length > 0 && (this.lineProductInfo.fromCityList.forEach((function(e, i) {
                      t += e + "/"
                    })), t && (t = t.slice(0, -1) + "出发,")), this.lineProductInfo.journeyDay > this.lineProductInfo.journeyNight && (n = this.lineProductInfo.journeyDay), this.lineProductInfo.journeyDay < this.lineProductInfo.journeyNight && (n = this.lineProductInfo.journeyNight), this.lineProductInfo.journeyDay == this.lineProductInfo.journeyNight && (n = this.lineProductInfo.journeyNight + 1), this.lineProductInfo.selectTicket && this.lineProductInfo.selectTicket.date) {
                    var o = new Date(Date.parse(this.lineProductInfo.selectTicket.date) + 864e5 * n);
                    return i = o.getFullYear() + "-" + (o.getMonth() + 1) + "-" + o.getDate(), i = this.lineProductInfo.journeyNight ? i : this.lineProductInfo.selectTicket.date, e = t + this.lineProductInfo.selectTicket.date + "出发" + i + "返程", this.lineProductInfo.selectTicket.date == i && (e = t + this.lineProductInfo.selectTicket.date + "当天往返"), e
                  }
                },
                priceInfoPopup: function() {
                  this.showService = !1, this.showDetail = !0
                },
                buyTip: function() {
                  this.showService = !0
                },
                deleteUser: function(e) {
                  this.priceInfo[this.actIndex].userList.splice(e, 1), this.priceInfo[this.actIndex].idList.splice(e, 1)
                },
                chooseCoupon: function() {
                  this.couponList.length > 0 && (this.showCoupon = !0)
                },
                getOptimalCoupon: function(e) {
                  var t = this;
                  return (0, s.default)(o.default.mark((function i() {
                    var n, s;
                    return o.default.wrap((function(i) {
                      for (;;) switch (i.prev = i.next) {
                        case 0:
                          return i.prev = 0, n = {
                            useDateStr: t.lineProductInfo.selectTicket.date,
                            lineProductId: t.lineProductInfo.productId,
                            orderPeopleList: t.couponPeople
                          }, i.next = 4, t.$uniApi.dataRequestNoLoading("POST", "product/app/v1/coupon/getBestLineCoupon", n);
                        case 4:
                          1 == (s = i.sent).code && (t.couponList = s.data, t.userCouponId = s.data[0].userCouponId, 3 == s.data[0].type ? (t.discountAmount = s.data[0].realQuota, t.deductionInfo = s.data[0].deductionInfo, t.allAmount = t.subtract(e, s.data[0].realQuota)) : (t.discountAmount = s.data[0].quota, t.allAmount = t.subtract(e, s.data[0].quota))), i.next = 11;
                          break;
                        case 8:
                          i.prev = 8, i.t0 = i.catch(0), t.resettingMoney();
                        case 11:
                        case "end":
                          return i.stop()
                      }
                    }), i, null, [
                      [0, 8]
                    ])
                  })))()
                },
                cancelCoupon: function() {
                  var e = this;
                  this.userCouponId = -1, this.discountAmount = 0, this.showCoupon = !1, this.deductionInfo = {};
                  var t = 0;
                  this.couponPeople = [], this.priceInfo.forEach((function(i, n) {
                    i.num && (e.actIndex = n, i.amount = e.multiply(i.price, i.num), t = e.add(t, i.amount))
                  })), this.allAmount = t
                },
                limitAge: function(e, t, i, n, o) {
                  var s = "";
                  return 1 == o || 3 == o ? (s = e + "周岁", s += n ? "(不含)" : "(含)", s += i ? "-" + t + "周岁(含)" : "以上") : (s = e + "周岁", s += n ? "(不含)" : "(含)", s += "-" + t + "周岁", s += i ? "(不含)" : "(含)"), s
                },
                residueNum: function() {
                  var e = 0;
                  return this.priceInfo.forEach((function(t) {
                    e += t.userList.length
                  })), this.allTicNum - e == 0 ? "已选满" : this.allTicNum - e + "位"
                },
                priceInit: function() {
                  this.priceInfo[0].limitAge = this.lineProductInfo.adultLimitAge, this.priceInfo[0].regularAge = this.lineProductInfo.adultRegularAge, this.priceInfo[0].ageType = this.lineProductInfo.adultAgeType, this.priceInfo[0].ageRange = this.lineProductInfo.adultAgeRange, this.priceInfo[1].limitAge = this.lineProductInfo.oldLimitAge, this.priceInfo[1].regularAge = this.lineProductInfo.oldRegularAge, this.priceInfo[1].ageRange = this.lineProductInfo.oldAgeRange, this.priceInfo[1].ageType = this.lineProductInfo.oldAgeType, this.priceInfo[2].limitAge = this.lineProductInfo.childrenLimitAge, this.priceInfo[2].regularAge = this.lineProductInfo.childrenRegularAge, this.priceInfo[2].ageRange = this.lineProductInfo.childrenAgeRange, this.priceInfo[2].ageType = this.lineProductInfo.childrenAgeType, this.priceInfo[0].price = this.lineProductInfo.selectTicket.adultSellPrice, this.priceInfo[1].price = this.lineProductInfo.selectTicket.oldSellPrice, this.priceInfo[2].price = this.lineProductInfo.selectTicket.childrenSellPrice, this.itemUseDesc.maxBookNum = this.lineProductInfo.lineProductUseDescVO.maxBookNum, this.surplusStock = this.lineProductInfo.selectTicket.surplusStock, this.soldCount = this.lineProductInfo.selectTicket.soldCount ? this.lineProductInfo.selectTicket.soldCount : 0, this.setUserData()
                },
                setUserData: function() {
                  var e = this.priceInfo.filter((function(e, t) {
                    return null !== e.price && e.price >= 0
                  }));
                  if (e && 1 === e.length) {
                    var t = -1,
                      i = e[0].peopleType;
                    1 == i ? t = 0 : 3 == i ? t = 1 : 2 == i && (t = 2), this.addNum(t, e[0])
                  }
                },
                getServiceDesc: function(e) {
                  return ["", "自动确认/二次确认", "无购物", "无自费", "退订无忧", "上门接"][e]
                },
                refundInfo: function() {
                  var e = this;
                  this.loading = !0, this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/line/product/getRefundDesc?productId=" + this.lineProductInfo.productId + "&date=" + this.lineProductInfo.selectTicket.date).then((function(t) {
                    1 === t.code && (e.refundDetail = t.data)
                  }))
                },
                getCommonUsedTouristList: function(e) {
                  var t = this;
                  this.$uniApi.dataRequestNoLoading("GET", "manager/app/v1/commonUsedTourist/queryCommonUsedTouristList").then((function(e) {
                    1 === e.code && (t.commonUsedTouristList = e.data[0] ? e.data : [], t.actUserInfo && t.actUserInfo.userList[0] && (t.actUserInfo.userList = [], t.commonUsedTouristList.forEach((function(e) {
                      t.actUserInfo.idList.includes(e.id) && t.actUserInfo.userList.push(e)
                    }))))
                  }))
                },
                checkOne: function(e, t) {
                  var i = this.priceInfo[this.actIndex].limitAge,
                    n = this.priceInfo[this.actIndex].regularAge,
                    o = this.priceInfo[this.actIndex].ageRange,
                    s = this.priceInfo[this.actIndex].ageType,
                    r = this.priceInfo[this.actIndex].peopleType,
                    u = this.calculateAge(e);
                  if (i >= u && s) return !1;
                  if (i > u && !s) return !1;
                  if (2 == r) {
                    if (n <= u && o) return !1;
                    if (n < u && !o) return !1
                  } else if (n < u && o) return !1;
                  return !0
                },
                calculateAge: function(e) {
                  var t = e.substr(6, 4),
                    i = new Date,
                    n = i.getFullYear() - t;
                  return e.substr(10, 4) > 100 * (i.getMonth() + 1) + i.getDate() && (n -= 1), n
                },
                changeTourist: function(e, t) {
                  if (this.realCardTypeCodes.includes(e.cardType)) {
                    var i = this.priceInfo[this.actIndex].idList;
                    if (0 != e.cardType || this.checkOne(e.idCarNo, e.name)) {
                      if (i.includes(e.id)) this.priceInfo[this.actIndex].userList = this.priceInfo[this.actIndex].userList.filter((function(t) {
                        return t.id != e.id
                      })), this.priceInfo[this.actIndex].idList = i.filter((function(t) {
                        return t != e.id
                      }));
                      else if (1 == this.allTicNum)(i = []).push(e.id), this.priceInfo[this.actIndex].userList = [], this.priceInfo[this.actIndex].userList.push(e), this.priceInfo[this.actIndex].idList = i;
                      else {
                        if (!(this.allTicNum > this.priceInfo[this.actIndex].userList.length)) return void this.$util.showToast("只能选择".concat(this.allTicNum, "位游客"));
                        this.priceInfo[this.actIndex].userList.push(e), this.priceInfo[this.actIndex].idList.push(e.id)
                      }
                      this.$forceUpdate()
                    } else this.$util.showToast("游客".concat(e.name, "不属于该年龄范围"))
                  } else this.$util.showToast("游客证件类型暂不支持")
                },
                computTotalNum: function() {
                  var e = this;
                  this.userCouponId = "", this.discountAmount = 0, this.showCoupon = !1, this.deductionInfo = {}, this.couponList = [];
                  var t = 0;
                  this.couponPeople = [], this.priceInfo.forEach((function(i, n) {
                    i.num && (e.actIndex = n, i.amount = e.multiply(i.price, i.num), t = e.add(t, i.amount))
                  })), this.totalNum = t
                },
                resettingMoney: function() {
                  var e = this;
                  this.userCouponId = "", this.discountAmount = 0, this.showCoupon = !1, this.deductionInfo = {}, this.couponList = [];
                  var t = 0;
                  this.couponPeople = [], this.priceInfo.forEach((function(i, n) {
                    i.num && (e.actIndex = n, i.amount = e.multiply(i.price, i.num), t = e.add(t, i.amount))
                  })), this.allAmount = t
                },
                reduceNum: function(e, t) {
                  t.num < 1 || (this.allTicNum <= this.itemUseDesc.minBookNum ? this.$util.showToast("最少需选择".concat(this.itemUseDesc.minBookNum, "张")) : (t.num == t.userList.length && (t.userList.pop(), t.idList.pop()), t.num = t.num - 1, this.allTicNum = this.allTicNum - 1, 0 == this.allTicNum ? (this.totalNum = 0, this.resettingMoney()) : (this.computTotalNum(), this.calcPriceAmount())))
                },
                addNum: function(e, t) {
                  var i = 0 == this.itemUseDesc.maxBookNum ? 99999 : this.itemUseDesc.maxBookNum; - 1 != this.surplusStock && (i = Math.min(i, this.surplusStock)), this.allTicNum >= i && -1 != this.surplusStock ? this.$util.showToast("最多可选择".concat(i, "人")) : (t.num = t.num + 1, this.allTicNum = this.allTicNum + 1, this.computTotalNum(), this.calcPriceAmount())
                },
                add: function(e, t) {
                  return e = (0, u.default)(e), t = (0, u.default)(t), e.plus(t).toNumber()
                },
                subtract: function(e, t) {
                  return e = (0, u.default)(e), t = (0, u.default)(t), e.minus(t).toNumber()
                },
                multiply: function(e, t) {
                  return e = (0, u.default)(e), t = (0, u.default)(t), e.times(t).toNumber()
                },
                toFixedNum: function(e) {
                  if (!e) return 0;
                  var t = e.toString().split(".");
                  return t[1] && t[1].length > 2 ? e.toFixed(2) : e
                },
                calcPriceAmount: function() {
                  var e = this,
                    t = 0,
                    i = 0;
                  this.couponPeople = [];
                  var n = 0,
                    o = 0,
                    s = 0,
                    r = 0,
                    u = 0,
                    a = 0;
                  if (this.priceInfo.forEach((function(c, l) {
                      c.num && (1 == c.peopleType ? (n = 1 * c.num, r = c.price) : 3 == c.peopleType ? (o = 1 * c.num, u = c.price) : (s = 1 * c.num, a = c.price), e.actIndex = l, t += 1, c.amount = e.multiply(c.price, c.num), i = e.add(i, c.amount))
                    })), this.typeNum = t, 0 == this.noCouponFlag) {
                    if (n > 0)
                      for (var c = 0; c < n; c++) this.couponPeople.push({
                        peopleType: 1,
                        price: r
                      });
                    if (o > 0)
                      for (var l = 0; l < o; l++) this.couponPeople.push({
                        peopleType: 3,
                        price: u
                      });
                    if (s > 0)
                      for (var d = 0; d < s; d++) this.couponPeople.push({
                        peopleType: 2,
                        price: a
                      });
                    this.getOptimalCoupon(i)
                  } else this.allAmount = i
                },
                checkCoupon: function(e) {
                  var t = this;
                  this.discountAmount = e.quota, this.userCouponId = e.userCouponId;
                  var i = 0;
                  this.priceInfo.forEach((function(e, n) {
                    e.num && (e.amount = t.multiply(e.price, e.num), i = t.add(i, e.amount))
                  })), this.allAmount = this.subtract(i, e.quota), 3 == e.type ? this.deductionInfo = e.deductionInfo : this.deductionInfo = {}, this.showCoupon = !1
                },
                delUser: function(e, t, i) {
                  this.priceInfo[e].userList.splice(t, 1), this.priceInfo[e].idList.splice(t, 1)
                },
                chooseUser: function(e, t, i) {
                  this.modelType = 0, this.actIndex = e, this.showPassenger = !0, this.actUserInfo = this.$util.deepCopy(i)
                },
                changeUser: function(e, t) {
                  if (this.realCardTypeCodes.includes(e.cardType)) {
                    if (this.actUserInfo.idList.includes(e.id)) {
                      var i = this.actUserInfo.idList.indexOf(e.id);
                      this.actUserInfo.userList.splice(i, 1), this.actUserInfo.idList.splice(i, 1)
                    } else this.actUserInfo.userList.length < this.actUserInfo.num ? (this.actUserInfo.userList.push(e), this.actUserInfo.idList.push(e.id)) : 1 == this.actUserInfo.num && 1 == this.actUserInfo.userList.length && (this.actUserInfo.userList = [], this.actUserInfo.idList = [], this.actUserInfo.userList.push(e), this.actUserInfo.idList.push(e.id));
                    this.$forceUpdate()
                  } else this.$util.showToast("游客证件类型暂不支持")
                },
                closePassenger: function() {
                  this.modelType ? this.modelType = 0 : this.showPassenger = !1
                },
                touristNumText: function(e, t) {
                  return 0 == t ? "选择".concat(e, "位游客") : t < e ? "再选".concat(e - t, "位") : t == e ? "已选满" : void 0
                },
                phoneFilter: function(e) {
                  if (e) {
                    var t = e.toString();
                    return t.replace(t.substring(3, 7), "****")
                  }
                },
                idCarNoFilter: function(e) {
                  if (e) {
                    var t = e.toString();
                    return t.substring(0, 1) + "****************" + t.substring(t.length - 1, t.length)
                  }
                },
                addPassenger: function() {
                  this.passenger = {
                    name: "",
                    idCarNo: "",
                    phone: "",
                    id: "",
                    cardType: this.realCardTypeCodes[0] || 0
                  }, this.modelType = 1
                },
                editPassenger: function(e) {
                  this.modelType = 2, this.showPassenger = !0, this.passenger = {
                    name: e.name,
                    idCarNo: e.idCarNo,
                    phone: e.phone,
                    id: e.id,
                    cardType: e.cardType
                  }
                },
                verify: function() {
                  return this.$util.checkName(this.passenger.name).code ? this.$util.checkPhone(this.passenger.phone).code ? !!this.$util.checkId(this.passenger.idCarNo, this.passenger.cardType).code || (this.$util.showToast(this.$util.checkId(this.passenger.idCarNo, this.passenger.cardType).msg), !1) : (this.$util.showToast(this.$util.checkPhone(this.passenger.phone).msg), !1) : (this.$util.showToast(this.$util.checkName(this.passenger.name).msg), !1)
                },
                save: function() {
                  var t = this;
                  if (this.modelType) {
                    if (this.submitState) return;
                    if (!this.verify()) return;
                    if (this.submitState = !0, 1 == this.modelType) this.$uniApi.dataRequestNoLoading("get", "manager/app/v1/commonUsedTourist/queryTouristByIdCardNo?idCarNo=" + this.passenger.idCarNo).then((function(i) {
                      if (1 === i.code)
                        if (console.log(i.data), i.data && i.data[0]) {
                          var n = {
                            id: i.data[0].id,
                            name: t.passenger.name,
                            phone: t.passenger.phone,
                            idCarNo: t.passenger.idCarNo,
                            cardType: t.passenger.cardType
                          };
                          e.showModal({
                            cancelText: "取消",
                            confirmText: "确认",
                            content: "该证件号信息已存在，请确认是否更新?",
                            success: function(e) {
                              e.confirm ? t.$uniApi.dataRequestNoLoading("POST", "manager/app/v1/commonUsedTourist/updateCommonUsedTourist", n).then((function(e) {
                                1 === e.code ? t.closeAdd() : (t.$util.showToast(e.msg), t.submitState = !1)
                              })) : e.cancel && (t.submitState = !1)
                            }
                          })
                        } else {
                          var o = [];
                          o.push({
                            name: t.passenger.name,
                            phone: t.passenger.phone,
                            idCarNo: t.passenger.idCarNo,
                            cardType: t.passenger.cardType
                          }), t.$uniApi.dataRequestYesLoading("POST", "manager/app/v1/commonUsedTourist/saveCommonUsedTourist?operationType=1", o, "保存中").then((function(e) {
                            1 === e.code ? t.closeAdd() : (t.$util.showToast(e.msg), t.submitState = !1)
                          }))
                        }
                      else t.$util.showToast(i.msg), t.submitState = !1
                    }));
                    else {
                      var i = {
                        id: this.passenger.id,
                        name: this.passenger.name,
                        phone: this.passenger.phone,
                        idCarNo: this.passenger.idCarNo,
                        cardType: this.passenger.cardType
                      };
                      this.$uniApi.dataRequestYesLoading("POST", "manager/app/v1/commonUsedTourist/updateCommonUsedTourist", i, "保存中").then((function(e) {
                        1 === e.code ? t.closeAdd() : (t.$util.showToast(e.msg), t.submitState = !1)
                      }))
                    }
                  } else {
                    if (this.check()) return void this.$util.showToast(this.check());
                    this.actUserInfo.userList = [], this.commonUsedTouristList.forEach((function(e) {
                      t.actUserInfo.idList.includes(e.id) && t.actUserInfo.userList.push(e)
                    })), this.priceInfo[this.actIndex].userList = this.actUserInfo.userList, this.priceInfo[this.actIndex].idList = this.actUserInfo.idList, console.log(this.priceInfo);
                    var n = [];
                    this.priceInfo.forEach((function(e) {
                      n = n.concat(e.idList)
                    })), this.showPassenger = !1
                  }
                },
                check: function() {
                  var e = this,
                    t = "",
                    i = this.actUserInfo.limitAge,
                    n = this.actUserInfo.regularAge,
                    o = this.actUserInfo.ageRange,
                    s = this.actUserInfo.ageType,
                    r = this.actUserInfo.peopleType;
                  return this.actUserInfo.userList.forEach((function(u) {
                    if (null != u.idCarNo) {
                      if (0 == u.cardType) {
                        var a = e.calculateAge(u.idCarNo),
                          c = !0;
                        if (i >= a && s && (c = !1), i > a && !s && (c = !1), 2 == r ? (n <= a && o && (c = !1), n < a && !o && (c = !1)) : n < a && o && (c = !1), !c) return void(t = "游客".concat(u.name, "不属于该年龄范围"))
                      }
                    } else t = "请补充证件信息"
                  })), t
                },
                closeAdd: function() {
                  this.passenger = {
                    name: "",
                    idCarNo: "",
                    phone: "",
                    id: "",
                    cardType: 0
                  }, this.modelType = 0, this.submitState = !1, this.getCommonUsedTouristList()
                },
                submit: function() {
                  if (this.contactPerson) {
                    var e = this.residueNum();
                    if ("已选满" == e) {
                      if (!this.$util.checkPhone(this.contactTel).code) return this.$util.showToast(this.$util.checkPhone(this.contactTel).msg), !1;
                      if (1 == this.typeNum && this.priceInfo[2].userList.length > 0 && !this.lineProductInfo.childrenEscort) return this.$util.showToast("儿童必须家长陪同"), !1;
                      var t = [];
                      if (this.otherInfoList.length > 0)
                        for (var i in this.otherInfoList) {
                          var n = this.otherInfoList[i];
                          if (!n.val) {
                            var o = 1 == n.type || 2 == n.type ? "请填写" : "请选择";
                            return this.$util.showToast("".concat(o).concat(n.title)), !1
                          }
                          t.push({
                            title: n.title,
                            content: n.val
                          })
                        }
                      var s = {
                          lineProductId: this.lineProductInfo.productId,
                          lineProductName: this.lineProductInfo.productName,
                          orderAmount: this.allAmount,
                          quantity: this.allTicNum,
                          contactPerson: this.contactPerson,
                          contactTel: this.contactTel,
                          ticketUseDate: this.lineProductInfo.selectTicket.date,
                          userCouponId: -1 == this.userCouponId ? "" : this.userCouponId,
                          deductionInfo: this.deductionInfo ? this.deductionInfo : {},
                          createChannel: 1,
                          orderPeopleList: [],
                          lineOrderOtherInfoDTOList: t
                        },
                        r = [];
                      this.priceInfo.forEach((function(e) {
                        e.userList.forEach((function(t) {
                          r.push({
                            idCard: t.idCarNo,
                            name: t.name,
                            cardType: t.cardType,
                            telephone: t.phone,
                            peopleId: t.memberId || "",
                            peopleType: e.peopleType,
                            price: e.price
                          })
                        }))
                      })), s.orderPeopleList = r, this.createOrder(s)
                    } else this.$util.showToast("还需选择" + e)
                  } else this.$util.showToast("请填写联系人")
                },
                closeLineing: function(e) {
                  this.lineing = !1, this.hasTimeOut = !1, this.repeatCreateOrder && (clearInterval(this.repeatCreateOrder), clearInterval(this.repeatCreateOrder2)), this.repeatCreateOrder = null, this.repeatCreateOrder2 = null, e || this.getInfo(!0)
                },
                timeOutInit: function() {
                  var e = this;
                  this.hasTimeOut || (this.hasTimeOut = !0, e.repeatCreateOrder2 = setTimeout((function() {
                    e.hasTimeOut && (e.closeLineing(), e.$util.showToast("很抱歉，您被挤出了队伍，请重新提交"))
                  }), 4e4))
                },
                createOrder: function(t) {
                  var i = this;
                  if (!this.disabledSubmitBtn || this.lineing) {
                    var n = this;
                    !n.hasTimeOut && n.timeOutInit(), this.disabledSubmitBtn = !0, !this.lineing && e.showLoading({
                      title: "预订中...",
                      mask: !0
                    }), this.$uniApi.dataRequestNoLoading("POST", "order/app/v1/lineOrder/addLineOrder", t, !1).then((function(o) {
                      if (o.msg.includes("火爆") || o.msg.includes("频繁")) return n.lineing = !0, void(n.repeatCreateOrder = setTimeout((function() {
                        n.createOrder(t)
                      }), 2e3));
                      if (1 != o.code) return i.closeLineing(!0), void setTimeout((function() {
                        n.$util.showToast(o.msg)
                      }), 300);
                      if (i.orderId = o.data, i.closeLineing(!0), 0 != i.allAmount) i.goPay();
                      else {
                        i.$util.showToast("支付成功");
                        var s = i;
                        e.requestSubscribeMessage({
                          tmplIds: ["vaaW2n2qCr5GeEy29ndpGgf02U0Ahbd012RdA45Z90A"],
                          success: function(e) {
                            s.sendWxMessage()
                          },
                          fail: function(t) {
                            setTimeout((function() {
                              e.redirectTo({
                                url: "/subPack/pages/lineOrderDetail/lineOrderDetail?orderId=".concat(s.orderId)
                              })
                            }), 1e3)
                          }
                        })
                      }
                    })).catch((function(e) {})).finally((function() {
                      setTimeout((function() {
                        i.disabledSubmitBtn = !1, e.hideLoading()
                      }), 1200)
                    }))
                  }
                },
                sendWxMessage: function() {
                  var t = this,
                    i = {
                      orderId: this.orderId
                    };
                  this.$uniApi.dataRequestYesLoading("GET", "order/app/v1/lineOrder/sendWxMessage", i, "加载中..").then((function(i) {
                    e.redirectTo({
                      url: "/subPack/pages/lineOrderDetail/lineOrderDetail?orderId=".concat(t.orderId)
                    })
                  }))
                },
                goPay: function() {
                  var t = this;
                  e.showLoading({
                    title: "发起支付..."
                  }), this.$uniApi.dataRequestYesLoading("POST", "order/app/v1/order/waitPayToPay", {
                    payChannel: "",
                    orderSource: 5,
                    orderId: this.orderId,
                    buyerMemo: "",
                    seriesNumber: e.getStorageSync("userInfor").openId || e.getStorageSync("wxopenid")
                  }, "支付中").then((function(i) {
                    if (1 !== i.code) return e.hideLoading(), t.submiting = !1, void t.$util.showToast(i.msg);
                    e.requestPayment({
                      timeStamp: i.data.timeStamp,
                      nonceStr: i.data.nonceStr,
                      package: "prepay_id=".concat(i.data.prepayid),
                      signType: i.data.signType,
                      paySign: i.data.pay_sign,
                      orderInfo: i.data.tradeNo,
                      success: function(i) {
                        i.resultCode, t.$util.showToast("支付成功");
                        var n = t;
                        e.requestSubscribeMessage({
                          tmplIds: ["vaaW2n2qCr5GeEy29ndpGgf02U0Ahbd012RdA45Z90A"],
                          success: function(e) {
                            n.sendWxMessage()
                          },
                          fail: function(t) {
                            e.redirectTo({
                              url: "/subPack/pages/lineOrderDetail/lineOrderDetail?orderId=".concat(n.orderId)
                            })
                          }
                        }), t.submiting = !1
                      },
                      fail: function(i) {
                        t.submiting = !1, e.redirectTo({
                          url: "/subPack/pages/lineOrderDetail/lineOrderDetail?orderId=".concat(t.orderId)
                        })
                      }
                    })
                  }))
                },
                confirm: function(e, t, i) {
                  t.defaultValue = e[0].IndexArr || [0, 0, 0];
                  var n = e.map((function(e) {
                    return e.value
                  }));
                  t.val = n.join("，"), this.otherInfoList[i] = t, this.$forceUpdate()
                },
                getOtherInfo: function() {
                  var e = this;
                  this.$uniApi.dataRequestNoLoading("POST", "product/app/v1/line/product/otherInfo/appList", {
                    productId: this.lineProductInfo.productId
                  }).then((function(t) {
                    if (1 === t.code) {
                      var i = t.data || [];
                      i.forEach((function(e) {
                        e.val = "", e.range = [], 3 === e.type && (e.showSelect = !1, e.defaultValue = [0, 0, 0]), 0 === e.type && e.lineProductOtherContentVOList.forEach((function(t) {
                          e.range.push({
                            value: t.key,
                            text: t.key
                          })
                        }))
                      })), e.otherInfoList = i
                    }
                  }))
                },
                showSelect: function(e, t) {
                  this.selectData = e, this.defaultValue = e.defaultValue, this.otherIndex = t, this.isShowSelect = !0
                },
                handlerChange: function(e, t, i) {
                  this.otherInfoList[i].val = e.detail.value.trim(), this.$forceUpdate()
                },
                confirmOrder: function() {
                  this.showGroupErr = !1
                },
                chooseCardType: function(e) {
                  e != this.passenger.cardType && (this.passenger.idCarNo = ""), this.passenger.cardType = e, this.showCardPop = !1
                }
              }
            };
          t.default = a
        }).call(this, i("df3c").default)
      },
      43392: function(e, t, i) {
        i.r(t);
        var n = i("fe26"),
          o = i("9d25");
        for (var s in o)["default"].indexOf(s) < 0 && function(e) {
          i.d(t, e, (function() {
            return o[e]
          }))
        }(s);
        i("abdc");
        var r = i("828b"),
          u = Object(r.a)(o.default, n.b, n.c, !1, null, "e8182906", null, !1, n.a, void 0);
        t.default = u.exports
      },
      "9d25": function(e, t, i) {
        i.r(t);
        var n = i("1714"),
          o = i.n(n);
        for (var s in n)["default"].indexOf(s) < 0 && function(e) {
          i.d(t, e, (function() {
            return n[e]
          }))
        }(s);
        t.default = o.a
      },
      abdc: function(e, t, i) {
        var n = i("dc75");
        i.n(n).a
      },
      dc75: function(e, t, i) {},
      fe26: function(e, t, i) {
        i.d(t, "b", (function() {
          return o
        })), i.d(t, "c", (function() {
          return s
        })), i.d(t, "a", (function() {
          return n
        }));
        var n = {
            uniIcons: function() {
              return Promise.all([i.e("common/vendor"), i.e("components/uni-icons/uni-icons")]).then(i.bind(null, "365b"))
            },
            uIcon: function() {
              return i.e("uview-ui/components/u-icon/u-icon").then(i.bind(null, "61be"))
            },
            uPopup: function() {
              return i.e("uview-ui/components/u-popup/u-popup").then(i.bind(null, "39fb"))
            },
            uInput: function() {
              return Promise.all([i.e("common/vendor"), i.e("uview-ui/components/u-input/u-input")]).then(i.bind(null, "5cbc"))
            },
            uParse: function() {
              return Promise.all([i.e("common/vendor"), i.e("uview-ui/components/u-parse/u-parse")]).then(i.bind(null, "7217"))
            },
            uSelect: function() {
              return i.e("uview-ui/components/u-select/u-select").then(i.bind(null, "8be8"))
            }
          },
          o = function() {
            var e = this,
              t = (e.$createElement, e._self._c, e.trip()),
              i = e.__map(e.priceInfo, (function(t, i) {
                return {
                  $orig: e.__get_orig(t),
                  f0: null != t.price ? e._f("peopleTypeFilter")(t.peopleType) : null,
                  m1: null != t.price ? e.limitAge(t.limitAge, t.regularAge, t.ageRange, t.ageType, t.peopleType) : null
                }
              })),
              n = e.allTicNum > 0 ? e.residueNum() : null,
              o = e.allTicNum > 0 ? e.residueNum() : null,
              s = e.allTicNum > 0 && 1 == e.typeNum ? e.__map(e.commonUsedTouristList, (function(t, i) {
                return {
                  $orig: e.__get_orig(t),
                  g0: t.idCarNo ? e.priceInfo[e.actIndex].idList.includes(t.id) : null,
                  g1: t.idCarNo ? e.realCardTypeCodes.includes(t.cardType) : null
                }
              })) : null,
              r = e.allTicNum > 0 && e.typeNum > 1 ? e.__map(e.priceInfo, (function(t, i) {
                var n = e.__get_orig(t),
                  o = t.num > 0 ? e._f("peopleTypeFilter")(t.peopleType) : null,
                  s = t.num > 0 ? t.userList.length : null;
                return {
                  $orig: n,
                  f1: o,
                  g2: s,
                  g3: t.num > 0 && t.num > s ? t.userList.length : null
                }
              })) : null,
              u = e.otherInfoList.length,
              a = e.couponList.length,
              c = 0 == a || e.discountAmount > 0 || 0 != e.discountAmount ? null : e.couponList.length,
              l = e.__map(e.couponList, (function(t, i) {
                return {
                  $orig: e.__get_orig(t),
                  f2: 0 == t.useTimeSlot ? e._f("timeFormat")(t.validityStartTime) : null,
                  f3: 0 == t.useTimeSlot ? e._f("timeFormat")(t.validityEndTime) : null,
                  f4: 2 == t.useTimeSlot ? e._f("timeFormat")(t.validityStartTime) : null,
                  f5: 2 == t.useTimeSlot ? e._f("timeFormat")(t.validityEndTime) : null,
                  f6: 2 == t.useTimeSlot ? e._f("timeFormat")(t.useTimeStart) : null,
                  f7: 2 == t.useTimeSlot ? e._f("timeFormat")(t.useTimeEnd) : null
                }
              })),
              d = !e.modelType && e.actUserInfo ? e.touristNumText(e.actUserInfo.num, e.actUserInfo.userList.length) : null,
              h = e.modelType ? null : e.__map(e.commonUsedTouristList, (function(t, i) {
                return {
                  $orig: e.__get_orig(t),
                  g7: e.actUserInfo && e.actUserInfo.idList[0] && e.actUserInfo.idList.includes(t.id),
                  g8: e.realCardTypeCodes.includes(t.cardType),
                  m5: t.phone ? e.phoneFilter(t.phone) : null,
                  f8: t.idCarNo ? e._f("cardNameFilter")(t.cardType) : null,
                  m6: t.idCarNo ? e.idCarNoFilter(t.idCarNo) : null
                }
              })),
              f = e.modelType ? e._f("cardNameFilter")(e.passenger.cardType) : null,
              p = e.__map(e.priceInfo, (function(t, i) {
                return {
                  $orig: e.__get_orig(t),
                  f10: null != t.price ? e._f("peopleTypeFilter")(t.peopleType) : null
                }
              })),
              m = e.lineProductInfo.lineProductUseDescVO && e.lineProductInfo.lineProductUseDescVO.lineProductFeeInclusiveDTOS.length > 0,
              g = e.lineProductInfo.lineProductUseDescVO && e.lineProductInfo.lineProductUseDescVO.lineProductFeeInclusiveDTOS.length > 0,
              I = e.lineProductInfo.lineProductUseDescVO && e.lineProductInfo.lineProductUseDescVO.lineProductFeeExclusiveDTOS.length > 0;
            e._isMounted || (e.e0 = function(t) {
              e.showDetail = !e.showDetail
            }, e.e1 = function(t) {
              e.showDetail = !e.showDetail
            }, e.e2 = function(t) {
              e.showCardPop = !0
            }, e.e3 = function(t) {
              return e.confirm(t, e.selectData, e.otherIndex)
            }, e.e4 = function(t) {
              e.showCardPop = !1
            }), e.$mp.data = Object.assign({}, {
              $root: {
                m0: t,
                l0: i,
                m2: n,
                m3: o,
                l1: s,
                l2: r,
                g4: u,
                g5: a,
                g6: c,
                l3: l,
                m4: d,
                l4: h,
                f9: f,
                l5: p,
                g9: m,
                g10: g,
                g11: I
              }
            })
          },
          s = []
      }
    },
    [
      ["10f6", "common/runtime", "common/vendor", "subPack/common/vendor"]
    ]
  ]);
}, {
  isPage: true,
  isComponent: true,
  currentFile: 'subPack/pages/groupOrder/groupOrder.js'
});
require("subPack/pages/groupOrder/groupOrder.js");
