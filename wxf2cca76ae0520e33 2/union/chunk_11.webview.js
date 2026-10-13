$gwx4_XC_3 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx4_XC_3 || [];

    function gz$gwx4_XC_3_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx4_XC_3_1) return __WXML_GLOBAL__.ops_cached.$gwx4_XC_3_1
      __WXML_GLOBAL__.ops_cached.$gwx4_XC_3_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, 'chat-item'])
        Z([
          [4],
          [
            [5],
            [
              [5],
              [
                [2, '?:'],
                [1, true],
                [1, 'chat-container'],
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
                    [3, 'item']
                  ],
                  [3, 'type']
                ],
                [1, 1]
              ],
              [1, 'chat-location-me'],
              [1, '']
            ]
          ]
        ])
        Z([3, 'chat-content-container'])
        Z([3, 'chat-text-container-super'])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [1, 'justify-content:'],
            [
              [2, '?:'],
              [
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
              ],
              [1, 'flex-end'],
              [1, 'flex-start']
            ]
          ],
          [1, ';']
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
                  [2, '?:'],
                  [1, true],
                  [1, 'chat-text-container'],
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
                      [3, 'item']
                    ],
                    [3, 'type']
                  ],
                  [1, 1]
                ],
                [1, 'chat-text-container-me'],
                [1, '']
              ]
            ],
            [
              [2, '?:'],
              [
                [2, '!='],
                [
                  [6],
                  [
                    [7],
                    [3, 'item']
                  ],
                  [3, 'type']
                ],
                [1, 1]
              ],
              [1, 'chat-text-container-no'],
              [1, '']
            ]
          ]
        ])
        Z([3, 'bubble'])
        Z([
          [4],
          [
            [5],
            [
              [2, '?:'],
              [1, true],
              [1, 'chat-text'],
              [1, '']
            ]
          ]
        ])
        Z([
          [6],
          [
            [7],
            [3, 'item']
          ],
          [3, 'content']
        ])
        Z([3, 'content'])
        Z([a, [
          [6],
          [
            [7],
            [3, 'item']
          ],
          [3, 'content']
        ]])
        Z([3, '__e'])
        Z([3, 'strategy-content'])
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
                          [1, 'cardDetails']
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
          [4],
          [
            [5],
            [
              [5],
              [1, 'message']
            ],
            [
              [2, '?:'],
              [
                [7],
                [3, 'isHistory']
              ],
              [1, 'reverse'],
              [1, '']
            ]
          ]
        ])
        Z([
          [7],
          [3, 'isHistory']
        ])
        Z(z[11])
        Z([3, 'delete'])
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
                          [1, 'delCard']
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
        Z([3, 'https://eshopfile.zhiyousx.com/175195946636604672.png'])
        Z([
          [6],
          [
            [7],
            [3, 'item']
          ],
          [3, 'message']
        ])
        Z([a, [
          [6],
          [
            [7],
            [3, 'item']
          ],
          [3, 'message']
        ]])
        Z([3, 'remind'])
        Z([3, '您的专属行程已经生成，点击下方卡片查看吧'])
        Z([3, 'card'])
        Z(z[11])
        Z([3, 'shareBtn'])
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
                        [1, 'share']
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ])
        Z([3, 'none'])
        Z([3, '0'])
        Z([3, 'share'])
        Z([3, 'time'])
        Z([a, [
          [2, '+'],
          [
            [2, '+'],
            [
              [6],
              [
                [7],
                [3, 'item']
              ],
              [3, 'beginTime']
            ],
            [1, ' 至 ']
          ],
          [
            [6],
            [
              [7],
              [3, 'item']
            ],
            [3, 'endTime']
          ]
        ]])
        Z([3, 'title'])
        Z([a, [
          [2, '+'],
          [
            [2, '+'],
            [
              [6],
              [
                [7],
                [3, 'item']
              ],
              [3, 'city']
            ],
            [
              [6],
              [
                [7],
                [3, 'item']
              ],
              [3, 'day']
            ]
          ],
          [1, '日游']
        ]])
        Z([3, 'tags'])
        Z([3, 'index'])
        Z([3, 'it'])
        Z([
          [6],
          [
            [7],
            [3, 'item']
          ],
          [3, 'scenicList']
        ])
        Z(z[36])
        Z([3, 'item'])
        Z([a, [
          [7],
          [3, 'it']
        ]])
        Z([3, 'welcome'])
        Z([a, [
          [2, '+'],
          [
            [2, '+'],
            [1, '欢迎您来到'],
            [
              [6],
              [
                [7],
                [3, 'item']
              ],
              [3, 'city']
            ]
          ],
          [1, '！']
        ]])
        Z([3, 'tips'])
        Z([3, '由AI生成'])
      })(__WXML_GLOBAL__.ops_cached.$gwx4_XC_3_1);
      return __WXML_GLOBAL__.ops_cached.$gwx4_XC_3_1
    }

    function gz$gwx4_XC_3_2() {
      if (__WXML_GLOBAL__.ops_cached.$gwx4_XC_3_2) return __WXML_GLOBAL__.ops_cached.$gwx4_XC_3_2
      __WXML_GLOBAL__.ops_cached.$gwx4_XC_3_2 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, 'page-box page-box-image2 data-v-10bfc8f3'])
        Z([
          [2, '||'],
          [
            [7],
            [3, 'loading']
          ],
          [
            [2, '!'],
            [
              [7],
              [3, 'flowId']
            ]
          ]
        ])
        Z([3, 'loading-mask data-v-10bfc8f3'])
        Z([3, 'loading-spinner data-v-10bfc8f3'])
        Z([3, 'loading-text data-v-10bfc8f3'])
        Z([3, '加载中...'])
        Z([3, '__l'])
        Z([3, 'data-v-10bfc8f3'])
        Z([3, 'transparentFixed'])
        Z([3, '52b92e68-1'])
        Z([
          [7],
          [3, 'showImage']
        ])
        Z([3, 'video_box1 data-v-10bfc8f3'])
        Z([3, 'https://eshopfile.zhiyousx.com/175021251389353595.jpg'])
        Z([3, 'video_box video_box4 data-v-10bfc8f3'])
        Z([1, false])
        Z([3, 'myVideo3'])
        Z([1, true])
        Z(z[16])
        Z([3, 'https://eshopfile.zhiyousx.com/2024121814473092347.mp4'])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [
              [2, '+'],
              [1, 'opacity:'],
              [
                [7],
                [3, 'opacity']
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
                [2, '?:'],
                [
                  [2, '=='],
                  [
                    [7],
                    [3, 'typeVideo']
                  ],
                  [1, 3]
                ],
                [1, '10'],
                [1, '1']
              ]
            ],
            [1, ';']
          ]
        ])
        Z(z[16])
        Z([3, '__e'])
        Z([3, 'video_box video_box5 data-v-10bfc8f3'])
        Z(z[14])
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
                  [1, 'loadedmetadata']
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
                          [1, 'loadedmetadata']
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
        Z([3, 'myVideo4'])
        Z(z[16])
        Z(z[16])
        Z([3, 'https://eshopfile.zhiyousx.com/2024122710555208245.mp4'])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [
              [2, '+'],
              [1, 'opacity:'],
              [
                [7],
                [3, 'opacity']
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
                [2, '?:'],
                [
                  [2, '=='],
                  [
                    [7],
                    [3, 'typeVideo']
                  ],
                  [1, 4]
                ],
                [1, '10'],
                [1, '1']
              ]
            ],
            [1, ';']
          ]
        ])
        Z(z[6])
        Z(z[21])
        Z([3, '#ffffff'])
        Z([3, 'page-box-image22 data-v-10bfc8f3 vue-ref'])
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
                                [1, 'dataList']
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
        Z([3, 'paging'])
        Z([
          [7],
          [3, 'isIos']
        ])
        Z([3, 'position:fixed;z-index:11;'])
        Z(z[16])
        Z(z[16])
        Z([
          [7],
          [3, 'dataList']
        ])
        Z([3, '52b92e68-2'])
        Z([
          [4],
          [
            [5],
            [
              [5],
              [
                [5],
                [1, 'default']
              ],
              [1, 'top']
            ],
            [1, 'bottom']
          ]
        ])
        Z(z[7])
        Z([3, 'top'])
        Z([3, 'height:300rpx;width:100%;'])
        Z([
          [2, '!'],
          [
            [7],
            [3, 'isHistory']
          ]
        ])
        Z(z[16])
        Z(z[6])
        Z(z[21])
        Z(z[21])
        Z(z[21])
        Z(z[21])
        Z(z[21])
        Z(z[21])
        Z(z[21])
        Z([3, 'data-v-10bfc8f3 vue-ref'])
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
                        [
                          [4],
                          [
                            [5],
                            [
                              [5],
                              [1, '^stopSpeak']
                            ],
                            [
                              [4],
                              [
                                [5],
                                [
                                  [4],
                                  [
                                    [5],
                                    [1, 'stopSpeak']
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
                            [1, '^resetTravel']
                          ],
                          [
                            [4],
                            [
                              [5],
                              [
                                [4],
                                [
                                  [5],
                                  [1, 'resetTravel']
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
                          [1, '^setShowHide']
                        ],
                        [
                          [4],
                          [
                            [5],
                            [
                              [4],
                              [
                                [5],
                                [1, 'setShowHide']
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
                        [1, '^clearData']
                      ],
                      [
                        [4],
                        [
                          [5],
                          [
                            [4],
                            [
                              [5],
                              [1, 'clearData']
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
                      [1, '^clearDataStop']
                    ],
                    [
                      [4],
                      [
                        [5],
                        [
                          [4],
                          [
                            [5],
                            [1, 'clearDataStop']
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
                    [1, '^setcolse']
                  ],
                  [
                    [4],
                    [
                      [5],
                      [
                        [4],
                        [
                          [5],
                          [1, 'setcolse']
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
                  [1, '^send']
                ],
                [
                  [4],
                  [
                    [5],
                    [
                      [4],
                      [
                        [5],
                        [1, 'doSend']
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ])
        Z([3, 'inputBar'])
        Z([
          [7],
          [3, 'delayBtn']
        ])
        Z([
          [7],
          [3, 'spotDetail']
        ])
        Z([
          [7],
          [3, 'isHistory']
        ])
        Z(z[36])
        Z([
          [7],
          [3, 'isStrategy']
        ])
        Z([
          [7],
          [3, 'pushingProgress']
        ])
        Z([
          [7],
          [3, 'pushingProgressShow']
        ])
        Z([
          [7],
          [3, 'showHide']
        ])
        Z([3, 'bottom'])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [1, '52b92e68-3'],
            [1, ',']
          ],
          [1, '52b92e68-2']
        ])
        Z(z[7])
        Z([3, 'width:100%;height:60rpx;'])
        Z([3, 'index'])
        Z([3, 'item'])
        Z(z[40])
        Z(z[71])
        Z(z[7])
        Z([3, 'position:relative;'])
        Z(z[7])
        Z([3, 'transform:scaleY(-1);'])
        Z(z[6])
        Z(z[21])
        Z(z[21])
        Z(z[21])
        Z(z[21])
        Z(z[7])
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
                        [1, '^resetTravel']
                      ],
                      [
                        [4],
                        [
                          [5],
                          [
                            [4],
                            [
                              [5],
                              [1, 'resetTravel']
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
                      [1, '^exclusive']
                    ],
                    [
                      [4],
                      [
                        [5],
                        [
                          [4],
                          [
                            [5],
                            [1, 'exclusive']
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
                    [1, '^stopSpeak']
                  ],
                  [
                    [4],
                    [
                      [5],
                      [
                        [4],
                        [
                          [5],
                          [1, 'stopSpeak']
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
                  [1, '^clickShare']
                ],
                [
                  [4],
                  [
                    [5],
                    [
                      [4],
                      [
                        [5],
                        [1, 'clickShare']
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ])
        Z(z[40])
        Z([
          [7],
          [3, 'item']
        ])
        Z([
          [7],
          [3, 'newVal']
        ])
        Z(z[64])
        Z([
          [7],
          [3, 'flowId']
        ])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [
              [2, '+'],
              [1, '52b92e68-4-'],
              [
                [7],
                [3, 'index']
              ]
            ],
            [1, ',']
          ],
          [1, '52b92e68-2']
        ])
        Z(z[71])
        Z(z[72])
        Z([
          [7],
          [3, 'historyList']
        ])
        Z(z[71])
        Z(z[7])
        Z(z[76])
        Z(z[7])
        Z(z[78])
        Z(z[6])
        Z(z[21])
        Z(z[21])
        Z(z[21])
        Z(z[21])
        Z(z[7])
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
                        [1, '^exclusive']
                      ],
                      [
                        [4],
                        [
                          [5],
                          [
                            [4],
                            [
                              [5],
                              [1, 'exclusive']
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
                      [1, '^deleteCard']
                    ],
                    [
                      [4],
                      [
                        [5],
                        [
                          [4],
                          [
                            [5],
                            [1, 'deleteCard']
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
                    [1, '^stopSpeak']
                  ],
                  [
                    [4],
                    [
                      [5],
                      [
                        [4],
                        [
                          [5],
                          [1, 'stopSpeak']
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
                  [1, '^clickShare']
                ],
                [
                  [4],
                  [
                    [5],
                    [
                      [4],
                      [
                        [5],
                        [1, 'clickShare']
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ])
        Z(z[61])
        Z(z[87])
        Z(z[88])
        Z(z[64])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [
              [2, '+'],
              [1, '52b92e68-5-'],
              [
                [7],
                [3, 'index']
              ]
            ],
            [1, ',']
          ],
          [1, '52b92e68-2']
        ])
      })(__WXML_GLOBAL__.ops_cached.$gwx4_XC_3_2);
      return __WXML_GLOBAL__.ops_cached.$gwx4_XC_3_2
    }
    __WXML_GLOBAL__.ops_set.$gwx4_XC_3 = z;
    __WXML_GLOBAL__.ops_init.$gwx4_XC_3 = true;
    var x = ['./union/components1/chat-item/chat-item-card.wxml', './union/pages/aiTravel/historyList.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx4_XC_3_1()
      var bSR = _n('view')
      _rz(z, bSR, 'class', 0, e, s, gg)
      var oTR = _n('view')
      _rz(z, oTR, 'class', 1, e, s, gg)
      var xUR = _n('view')
      _rz(z, xUR, 'class', 2, e, s, gg)
      var oVR = _mz(z, 'view', ['class', 3, 'style', 1], [], e, s, gg)
      var fWR = _n('view')
      _rz(z, fWR, 'class', 5, e, s, gg)
      var cXR = _n('view')
      _rz(z, cXR, 'class', 6, e, s, gg)
      var hYR = _n('view')
      _rz(z, hYR, 'class', 7, e, s, gg)
      var oZR = _v()
      _(hYR, oZR)
      if (_oz(z, 8, e, s, gg)) {
        oZR.wxVkey = 1
        var c1R = _n('view')
        _rz(z, c1R, 'class', 9, e, s, gg)
        var o2R = _oz(z, 10, e, s, gg)
        _(c1R, o2R)
        _(oZR, c1R)
      } else {
        oZR.wxVkey = 2
        var l3R = _mz(z, 'view', ['bindtap', 11, 'class', 1, 'data-event-opts', 2], [], e, s, gg)
        var a4R = _n('view')
        _rz(z, a4R, 'class', 14, e, s, gg)
        var t5R = _v()
        _(a4R, t5R)
        if (_oz(z, 15, e, s, gg)) {
          t5R.wxVkey = 1
          var b7R = _mz(z, 'image', ['catchtap', 16, 'class', 1, 'data-event-opts', 2, 'src', 3], [], e, s, gg)
          _(t5R, b7R)
        }
        var e6R = _v()
        _(a4R, e6R)
        if (_oz(z, 20, e, s, gg)) {
          e6R.wxVkey = 1
          var o8R = _n('text')
          var x9R = _oz(z, 21, e, s, gg)
          _(o8R, x9R)
          _(e6R, o8R)
        }
        t5R.wxXCkey = 1
        e6R.wxXCkey = 1
        _(l3R, a4R)
        var o0R = _n('view')
        _rz(z, o0R, 'class', 22, e, s, gg)
        var fAS = _oz(z, 23, e, s, gg)
        _(o0R, fAS)
        _(l3R, o0R)
        var cBS = _n('view')
        _rz(z, cBS, 'class', 24, e, s, gg)
        var hCS = _mz(z, 'button', ['catchtap', 25, 'class', 1, 'data-event-opts', 2, 'hoverClass', 3, 'hoverStayTime', 4, 'openType', 5], [], e, s, gg)
        _(cBS, hCS)
        var oDS = _n('view')
        _rz(z, oDS, 'class', 31, e, s, gg)
        var cES = _oz(z, 32, e, s, gg)
        _(oDS, cES)
        _(cBS, oDS)
        var oFS = _n('view')
        _rz(z, oFS, 'class', 33, e, s, gg)
        var lGS = _oz(z, 34, e, s, gg)
        _(oFS, lGS)
        _(cBS, oFS)
        var aHS = _n('view')
        _rz(z, aHS, 'class', 35, e, s, gg)
        var tIS = _v()
        _(aHS, tIS)
        var eJS = function(oLS, bKS, xMS, gg) {
          var fOS = _n('view')
          _rz(z, fOS, 'class', 40, oLS, bKS, gg)
          var cPS = _oz(z, 41, oLS, bKS, gg)
          _(fOS, cPS)
          _(xMS, fOS)
          return xMS
        }
        tIS.wxXCkey = 2
        _2z(z, 38, eJS, e, s, gg, tIS, 'it', 'index', 'index')
        _(cBS, aHS)
        var hQS = _n('view')
        _rz(z, hQS, 'class', 42, e, s, gg)
        var oRS = _oz(z, 43, e, s, gg)
        _(hQS, oRS)
        _(cBS, hQS)
        _(l3R, cBS)
        var cSS = _n('view')
        _rz(z, cSS, 'class', 44, e, s, gg)
        var oTS = _oz(z, 45, e, s, gg)
        _(cSS, oTS)
        _(l3R, cSS)
        _(oZR, l3R)
      }
      oZR.wxXCkey = 1
      _(cXR, hYR)
      _(fWR, cXR)
      _(oVR, fWR)
      _(xUR, oVR)
      _(oTR, xUR)
      _(bSR, oTR)
      _(r, bSR)
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
      var z = gz$gwx4_XC_3_2()
      var aVS = _n('view')
      _rz(z, aVS, 'class', 0, e, s, gg)
      var tWS = _v()
      _(aVS, tWS)
      if (_oz(z, 1, e, s, gg)) {
        tWS.wxVkey = 1
        var bYS = _n('view')
        _rz(z, bYS, 'class', 2, e, s, gg)
        var oZS = _n('view')
        _rz(z, oZS, 'class', 3, e, s, gg)
        _(bYS, oZS)
        var x1S = _n('view')
        _rz(z, x1S, 'class', 4, e, s, gg)
        var o2S = _oz(z, 5, e, s, gg)
        _(x1S, o2S)
        _(bYS, x1S)
        _(tWS, bYS)
      }
      var f3S = _mz(z, 'uni-navbar', ['bind:__l', 6, 'class', 1, 'type', 2, 'vueId', 3], [], e, s, gg)
      _(aVS, f3S)
      var eXS = _v()
      _(aVS, eXS)
      if (_oz(z, 10, e, s, gg)) {
        eXS.wxVkey = 1
        var c4S = _mz(z, 'image', ['mode', -1, 'class', 11, 'src', 1], [], e, s, gg)
        _(eXS, c4S)
      }
      var h5S = _mz(z, 'video', ['class', 13, 'controls', 1, 'id', 2, 'loop', 3, 'muted', 4, 'src', 5, 'style', 6], [], e, s, gg)
      _(aVS, h5S)
      var o6S = _mz(z, 'video', ['autoplay', 20, 'bindloadedmetadata', 1, 'class', 2, 'controls', 3, 'data-event-opts', 4, 'id', 5, 'loop', 6, 'muted', 7, 'src', 8, 'style', 9], [], e, s, gg)
      _(aVS, o6S)
      var c7S = _mz(z, 'z-paging', ['bind:__l', 30, 'bind:input', 1, 'bottomBgColor', 2, 'class', 3, 'data-event-opts', 4, 'data-ref', 5, 'safeAreaInsetBottom', 6, 'style', 7, 'toBottomLoadingMoreEnabled', 8, 'useChatRecordMode', 9, 'value', 10, 'vueId', 11, 'vueSlots', 12], [], e, s, gg)
      var l9S = _mz(z, 'view', ['class', 43, 'slot', 1, 'style', 2], [], e, s, gg)
      _(c7S, l9S)
      var o8S = _v()
      _(c7S, o8S)
      if (_oz(z, 46, e, s, gg)) {
        o8S.wxVkey = 1
        var a0S = _mz(z, 'chat-input-bar', ['bg', 47, 'bind:__l', 1, 'bind:clearData', 2, 'bind:clearDataStop', 3, 'bind:resetTravel', 4, 'bind:send', 5, 'bind:setShowHide', 6, 'bind:setcolse', 7, 'bind:stopSpeak', 8, 'class', 9, 'data-event-opts', 10, 'data-ref', 11, 'delayBtn', 12, 'detail', 13, 'isHistory', 14, 'isIos', 15, 'isStrategy', 16, 'pushingProgress', 17, 'pushingProgressShow', 18, 'showHide', 19, 'slot', 20, 'vueId', 21], [], e, s, gg)
        _(o8S, a0S)
      }
      var tAT = _mz(z, 'view', ['class', 69, 'style', 1], [], e, s, gg)
      _(c7S, tAT)
      var eBT = _v()
      _(c7S, eBT)
      var bCT = function(xET, oDT, oFT, gg) {
        var cHT = _mz(z, 'view', ['class', 75, 'style', 1], [], xET, oDT, gg)
        var hIT = _mz(z, 'view', ['class', 77, 'style', 1], [], xET, oDT, gg)
        var oJT = _mz(z, 'chat-item', ['bind:__l', 79, 'bind:clickShare', 1, 'bind:exclusive', 2, 'bind:resetTravel', 3, 'bind:stopSpeak', 4, 'class', 5, 'data-event-opts', 6, 'dataList', 7, 'item', 8, 'newVal', 9, 'pushingProgress', 10, 'sessionId', 11, 'vueId', 12], [], xET, oDT, gg)
        _(hIT, oJT)
        _(cHT, hIT)
        _(oFT, cHT)
        return oFT
      }
      eBT.wxXCkey = 4
      _2z(z, 73, bCT, e, s, gg, eBT, 'item', 'index', 'index')
      var cKT = _v()
      _(c7S, cKT)
      var oLT = function(aNT, lMT, tOT, gg) {
        var bQT = _mz(z, 'view', ['class', 96, 'style', 1], [], aNT, lMT, gg)
        var oRT = _mz(z, 'view', ['class', 98, 'style', 1], [], aNT, lMT, gg)
        var xST = _mz(z, 'chat-item-card', ['bind:__l', 100, 'bind:clickShare', 1, 'bind:deleteCard', 2, 'bind:exclusive', 3, 'bind:stopSpeak', 4, 'class', 5, 'data-event-opts', 6, 'isHistory', 7, 'item', 8, 'newVal', 9, 'pushingProgress', 10, 'vueId', 11], [], aNT, lMT, gg)
        _(oRT, xST)
        _(bQT, oRT)
        _(tOT, bQT)
        return tOT
      }
      cKT.wxXCkey = 4
      _2z(z, 94, oLT, e, s, gg, cKT, 'item', 'index', 'index')
      o8S.wxXCkey = 1
      o8S.wxXCkey = 3
      _(aVS, c7S)
      tWS.wxXCkey = 1
      eXS.wxXCkey = 1
      _(r, aVS)
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
        g = "$gwx4_XC_3";
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
if (__vd_version_info__.delayedGwx || false) $gwx4_XC_3();
if (__vd_version_info__.delayedGwx) __wxAppCode__['union/components1/chat-item/chat-item-card.wxml'] = [$gwx4_XC_3, './union/components1/chat-item/chat-item-card.wxml'];
else __wxAppCode__['union/components1/chat-item/chat-item-card.wxml'] = $gwx4_XC_3('./union/components1/chat-item/chat-item-card.wxml');
if (__vd_version_info__.delayedGwx) __wxAppCode__['union/pages/aiTravel/historyList.wxml'] = [$gwx4_XC_3, './union/pages/aiTravel/historyList.wxml'];
else __wxAppCode__['union/pages/aiTravel/historyList.wxml'] = $gwx4_XC_3('./union/pages/aiTravel/historyList.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__['union/components1/chat-item/chat-item-card.wxss'] = setCssToHead([".", [1], "chat-item{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;padding:", [0, 20], "}\n.", [1], "chat-time{color:#aaa;font-size:", [0, 22], ";padding:", [0, 4], " ", [0, 0], ";text-align:center}\n.", [1], "chat-container{display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row}\n.", [1], "chat-location-me{-webkit-flex-direction:row-reverse;flex-direction:row-reverse;text-align:right}\n.", [1], "chat-icon-container{margin-top:", [0, 12], "}\n.", [1], "chat-icon{background-color:#eee;border-radius:50%;height:", [0, 58], ";width:", [0, 58], "}\n.", [1], "chat-content-container{margin:", [0, 0], " ", [0, 10], ";width:100%}\n.", [1], "chat-user-name{color:#888;font-size:", [0, 26], "}\n.", [1], "chat-text-container{background-color:#fff;border-radius:", [0, 16], ";margin-top:", [0, 10], ";padding:", [0, 16], " ", [0, 30], ";text-align:left}\n.", [1], "chat-text-container-me{background:linear-gradient(81deg,#faf3d7,#b9dbb0);border:", [0, 2], " solid #fff;border-radius:", [0, 60], " ", [0, 10], " ", [0, 60], " ", [0, 60], "}\n.", [1], "chat-text-container-me,.", [1], "chat-text-container-no{box-shadow:", [0, 0], " ", [0, 8], " ", [0, 20], " ", [0, 0], " rgba(224,61,31,.1);padding:", [0, 30], "}\n.", [1], "chat-text-container-no{background:linear-gradient(137deg,#dcb099,#ebcfbc 20%,#fff2ed);border:", [0, 2], " solid #fff;border-radius:", [0, 10], " ", [0, 60], " ", [0, 60], " ", [0, 60], "}\n.", [1], "chat-text-container-super{display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;width:auto}\n.", [1], "chat-text{font-size:", [0, 28], ";word-break:break-all}\n.", [1], "chat-text-me{color:#fff}\n.", [1], "img{max-width:", [0, 500], "}\n.", [1], "bubble{width:100%}\n.", [1], "bubble .", [1], "iconfont{font-size:", [0, 42], ";margin-right:", [0, 8], "}\n.", [1], "chat-text-container .", [1], "bubble,.", [1], "chat-text-container .", [1], "bubble .", [1], "iconfont{color:#333}\n.", [1], "chat-text-container-me .", [1], "bubble,.", [1], "chat-text-container-me .", [1], "bubble .", [1], "iconfont{color:#fff}\n.", [1], "cursor{-webkit-animation:blink .7s step-end infinite;animation:blink .7s step-end infinite;display:inline-block;font-size:16px;margin-right:5px}\n@-webkit-keyframes blink{from,to{opacity:0}\n50%{opacity:1}\n}@keyframes blink{from,to{opacity:0}\n50%{opacity:1}\n}.", [1], "card-item{background-color:#fff;border-radius:", [0, 40], " ", [0, 40], " ", [0, 40], " ", [0, 40], ";box-sizing:border-box;height:", [0, 490], ";overflow:hidden;padding:", [0, 28], ";white-space:nowrap;width:100%}\n.", [1], "card-item .", [1], "card-item-box{display:inline-block;margin-right:", [0, 20], ";width:", [0, 372], "}\n.", [1], "card-item .", [1], "card-type{background:#6bd13b;border-radius:", [0, 20], " ", [0, 20], " ", [0, 40], " ", [0, 20], ";box-shadow:", [0, 0], " ", [0, 4], " ", [0, 4], " ", [0, 0], " rgba(0,0,0,.1);color:#fff;padding:", [0, 8], " ", [0, 20], ";position:absolute}\n.", [1], "card-item .", [1], "card-image{border-radius:", [0, 20], " ", [0, 20], " ", [0, 20], " ", [0, 20], ";height:", [0, 282], ";margin-bottom:", [0, 30], ";width:", [0, 372], "}\n.", [1], "card-item .", [1], "card-name{color:#606060;font-size:", [0, 28], ";font-weight:400;line-height:", [0, 33], ";margin-bottom:", [0, 20], "}\n.", [1], "card-item .", [1], "card-name,.", [1], "card-item .", [1], "card-price{font-family:Source Han Sans SC;font-style:normal;text-align:left;text-transform:none}\n.", [1], "card-item .", [1], "card-price{color:#fd6403;font-size:", [0, 32], ";font-weight:700;line-height:", [0, 38], ";margin-top:", [0, 14], "}\n.", [1], "card-item .", [1], "tag-item-box{margin-bottom:", [0, 20], "}\n.", [1], "card-item .", [1], "tag-item{border:", [0, 1], " solid #8d7c51;border-radius:", [0, 20], " ", [0, 20], " ", [0, 20], " ", [0, 20], ";color:#8d7c51;display:inline-block;font-family:Source Han Sans SC;font-size:", [0, 22], ";font-style:normal;font-weight:400;height:", [0, 34], ";line-height:", [0, 34], ";margin-right:", [0, 10], ";overflow:hidden;padding:0 ", [0, 8], ";text-align:left;text-align:center;text-overflow:ellipsis;text-transform:none;white-space:nowrap;width:30%}\n.", [1], "card-item .", [1], "card-item-count{border-radius:", [0, 40], " ", [0, 40], " ", [0, 40], " ", [0, 40], ";display:-webkit-inline-flex;display:inline-flex}\n.", [1], "official-box{margin-top:", [0, 30], "}\n.", [1], "official-box .", [1], "official-item{background-color:#fff;border-radius:", [0, 20], " ", [0, 20], " ", [0, 20], " ", [0, 20], ";display:-webkit-flex;display:flex;height:", [0, 230], ";margin-top:", [0, 46], ";position:relative}\n.", [1], "official-box .", [1], "official-item .", [1], "official-img{border-radius:", [0, 10], " ", [0, 30], " ", [0, 20], " ", [0, 20], ";box-shadow:", [0, 6], " ", [0, 0], " ", [0, 0], " ", [0, 0], " rgba(0,0,0,.15),", [0, 12], " ", [0, 0], " ", [0, 0], " ", [0, 0], " rgba(0,0,0,.05);height:", [0, 250], ";position:relative;top:", [0, -20], ";width:", [0, 200], "}\n.", [1], "official-box .", [1], "official-item .", [1], "official-r{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:space-between;justify-content:space-between;padding:", [0, 30], " ", [0, 20], ";width:calc(100% - ", [0, 200], ")}\n.", [1], "official-box .", [1], "official-item .", [1], "official-r .", [1], "official-title{-webkit-box-orient:vertical;-webkit-line-clamp:2;color:rgba(0,0,0,.8);display:-webkit-box;font-family:Source Han Sans SC;font-size:", [0, 28], ";font-style:normal;font-weight:400;height:", [0, 85], ";line-height:", [0, 35], ";margin-bottom:", [0, 12], ";overflow:hidden;text-align:left;text-overflow:ellipsis;text-transform:none;width:100%}\n.", [1], "official-box .", [1], "official-item .", [1], "official-r .", [1], "official-tag{margin-bottom:", [0, 14], ";white-space:nowrap}\n.", [1], "official-box .", [1], "official-item .", [1], "official-r .", [1], "official-tag .", [1], "official-tag-item{border:", [0, 1], " solid #8d7c51;border-radius:", [0, 20], " ", [0, 20], " ", [0, 20], " ", [0, 20], ";color:#8d7c51;display:inline-block;font-family:Source Han Sans SC;font-size:", [0, 22], ";font-style:normal;font-weight:400;height:", [0, 34], ";line-height:", [0, 34], ";margin-right:", [0, 10], ";overflow:hidden;padding:0 ", [0, 8], ";text-align:left;text-align:center;text-overflow:ellipsis;text-transform:none;white-space:nowrap;width:30%}\n.", [1], "official-box .", [1], "official-item .", [1], "official-r .", [1], "official-desc{color:rgba(0,0,0,.5);font-family:Source Han Sans SC;font-size:", [0, 24], ";font-style:normal;font-weight:400;line-height:", [0, 28], ";margin-top:", [0, 14], ";text-align:left;text-transform:none}\n.", [1], "chat-text-expand{margin-top:", [0, 40], "}\n.", [1], "chat-text-expand .", [1], "guide{display:-webkit-flex;display:flex;-webkit-justify-content:space-between;justify-content:space-between}\n.", [1], "chat-text-expand .", [1], "guide .", [1], "left{-webkit-align-items:center;align-items:center;color:#1c1c1c;display:-webkit-flex;display:flex;font-size:", [0, 28], "}\n.", [1], "chat-text-expand .", [1], "guide .", [1], "left .", [1], "headImg{height:", [0, 60], ";margin-right:", [0, 20], ";width:", [0, 60], "}\n.", [1], "chat-text-expand .", [1], "guide .", [1], "left .", [1], "finger{height:", [0, 48], ";width:", [0, 48], "}\n.", [1], "chat-text-expand .", [1], "guide .", [1], "right{-webkit-align-items:center;align-items:center;color:#606060;display:-webkit-flex;display:flex;font-size:", [0, 26], ";line-height:", [0, 30], "}\n.", [1], "chat-text-expand .", [1], "questionBox{background:linear-gradient(180deg,rgba(255,200,152,.5) 22%,rgba(255,200,152,.15));border-radius:", [0, 40], " ", [0, 40], " ", [0, 40], " ", [0, 40], ";margin-top:", [0, 20], ";padding:", [0, 28], " ", [0, 40], "}\n.", [1], "chat-text-expand .", [1], "questionBox .", [1], "item{-webkit-align-items:center;align-items:center;background:hsla(0,0%,100%,.7);border-radius:", [0, 60], " ", [0, 60], " ", [0, 60], " ", [0, 60], ";color:#1c1c1c;display:-webkit-flex;display:flex;font-size:", [0, 26], ";-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:", [0, 20], ";padding:", [0, 24], " ", [0, 20], ";width:100%}\n.", [1], "chat-text-expand .", [1], "questionBox .", [1], "item wx-image{height:", [0, 28], ";width:", [0, 28], "}\n.", [1], "btns{margin-top:", [0, 20], "}\n.", [1], "btns,.", [1], "btns .", [1], "speakBtn{display:-webkit-flex;display:flex}\n.", [1], "btns .", [1], "speakBtn{-webkit-align-items:center;align-items:center;background:linear-gradient(97deg,#956a38,#171512);border:", [0, 2], " solid #fff0e9;border-radius:", [0, 60], " ", [0, 60], " ", [0, 60], " ", [0, 60], ";color:#fff;font-size:", [0, 26], ";height:", [0, 72], ";-webkit-justify-content:center;justify-content:center;margin-right:", [0, 20], ";padding:0 ", [0, 40], "}\n.", [1], "btns .", [1], "speakBtn .", [1], "icon{height:", [0, 30], ";margin-right:", [0, 4], ";width:", [0, 28], "}\n.", [1], "btns .", [1], "guideBtn{-webkit-align-items:center;align-items:center;background:rgba(177,99,10,.3);border:", [0, 2], " solid #fff;border-radius:", [0, 40], " ", [0, 40], " ", [0, 40], " ", [0, 40], ";color:#555;display:-webkit-flex;display:flex;font-size:", [0, 26], ";height:", [0, 72], ";-webkit-justify-content:center;justify-content:center;padding:0 ", [0, 40], "}\n.", [1], "btns .", [1], "guideBtn .", [1], "icon{height:", [0, 30], ";margin-right:", [0, 4], ";width:", [0, 30], "}\n.", [1], "text-desc{color:#333;font-family:Source Han Sans SC;font-size:", [0, 26], ";font-style:normal;font-weight:400;line-height:", [0, 30], ";text-align:left;text-transform:none}\n.", [1], "lined-link{color:#6a82ff;margin-top:", [0, 30], ";padding:0 ", [0, 30], ";text-decoration:underline}\n.", [1], "loading-box{color:#606060;font-size:", [0, 28], ";-webkit-justify-content:center;justify-content:center;margin:0 ", [0, 20], "}\n.", [1], "loading-box,.", [1], "loading-box .", [1], "loading{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex}\n.", [1], "loading-box .", [1], "loading{-webkit-justify-content:space-around;justify-content:space-around;margin-left:", [0, 10], ";width:", [0, 80], "}\n.", [1], "loading-box .", [1], "pot{-webkit-animation-delay:0s;animation-delay:0s;-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:loading-beat;animation-name:loading-beat;border-radius:50%;display:inline-block;height:", [0, 8], ";margin-right:", [0, 5], ";width:", [0, 8], "}\n.", [1], "loading-box .", [1], "pot:nth-child(1){background:#e6aa82}\n.", [1], "loading-box .", [1], "pot:nth-child(2){-webkit-animation-delay:.2s;animation-delay:.2s;background:#e6aa82}\n.", [1], "loading-box .", [1], "pot:nth-child(3){-webkit-animation-delay:.4s;animation-delay:.4s;background:#e6aa82}\n@-webkit-keyframes loading-beat{0%{-webkit-transform:scale(1);transform:scale(1)}\n50%{-webkit-transform:scale(1.8);transform:scale(1.8)}\n100%{-webkit-transform:scale(1);transform:scale(1)}\n}@keyframes loading-beat{0%{-webkit-transform:scale(1);transform:scale(1)}\n50%{-webkit-transform:scale(1.8);transform:scale(1.8)}\n100%{-webkit-transform:scale(1);transform:scale(1)}\n}.", [1], "travelBtn{background-color:rgba(177,99,10,.6);border-radius:", [0, 30], ";color:#fff;height:", [0, 60], ";line-height:", [0, 60], ";margin-top:", [0, 10], ";text-align:center;width:", [0, 200], "}\n.", [1], "strategy-title{color:#383b46;display:-webkit-flex;display:flex;font-size:", [0, 36], ";font-weight:700;-webkit-justify-content:center;justify-content:center;line-height:", [0, 58], ";margin:", [0, 20], " 0}\n.", [1], "strategy-title wx-image{height:", [0, 48], ";margin-left:", [0, 20], ";width:", [0, 48], "}\n.", [1], "strategy-content .", [1], "message{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:", [0, 20], "}\n.", [1], "strategy-content .", [1], "message wx-text{color:#383b46;font-size:", [0, 36], ";font-weight:700;line-height:", [0, 58], "}\n.", [1], "strategy-content .", [1], "message wx-image{height:", [0, 50], ";width:", [0, 50], "}\n.", [1], "strategy-content .", [1], "reverse{-webkit-flex-direction:row-reverse;flex-direction:row-reverse}\n.", [1], "strategy-content .", [1], "remind{color:rgba(0,0,0,.5);font-size:", [0, 26], ";line-height:", [0, 40], ";margin-bottom:", [0, 20], "}\n.", [1], "strategy-content .", [1], "card{background:url(https://eshopfile.zhiyousx.com/175153364009285511.png) no-repeat;background-size:100% 100%;border-radius:", [0, 40], " ", [0, 40], " ", [0, 40], " ", [0, 40], ";padding:", [0, 28], " ", [0, 40], ";position:relative;width:", [0, 610], "}\n.", [1], "strategy-content .", [1], "card .", [1], "shareBtn{background:url(https://eshopfile.zhiyousx.com/175090706174811878.png) no-repeat;background-size:100% 100%;border:none;box-sizing:border-box;height:", [0, 32], ";margin:0;padding:0;position:absolute;right:", [0, 40], ";top:", [0, 28], ";width:", [0, 32], "}\n.", [1], "strategy-content .", [1], "card .", [1], "time{color:#333;font-size:", [0, 28], ";line-height:", [0, 36], ";margin-bottom:", [0, 10], "}\n.", [1], "strategy-content .", [1], "card .", [1], "title{color:#333;font-size:", [0, 36], ";font-weight:700;line-height:", [0, 52], "}\n.", [1], "strategy-content .", [1], "card .", [1], "tags{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;margin-top:", [0, 20], "}\n.", [1], "strategy-content .", [1], "card .", [1], "tags .", [1], "item{border:", [0, 1], " solid #8d7c51;border-radius:", [0, 20], ";color:#8d7c51;font-size:", [0, 22], ";height:", [0, 34], ";line-height:", [0, 34], ";margin-bottom:", [0, 10], ";margin-right:", [0, 10], ";padding:0 ", [0, 14], "}\n.", [1], "strategy-content .", [1], "card .", [1], "welcome{color:#666;font-size:", [0, 28], ";line-height:", [0, 42], ";margin-top:", [0, 38], "}\n.", [1], "strategy-content .", [1], "tips{color:#999;font-size:", [0, 24], ";font-weight:500;line-height:", [0, 36], ";margin-top:", [0, 22], "}\n.", [1], "text-warp{color:#4e514f;font-family:Source Han Sans SC;font-size:", [0, 28], ";font-style:normal;font-weight:400;line-height:", [0, 40], ";text-align:left;text-transform:none;white-space:pre-wrap}\n.", [1], "more-box{color:#f6b27c;margin-top:", [0, 24], ";text-align:right}\n.", [1], "start-flage{color:#a0a0a0;font-size:", [0, 24], ";margin-left:", [0, 8], "}\n", ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./union/components1/chat-item/chat-item-card.wxss:1:9286)", {
    path: "./union/components1/chat-item/chat-item-card.wxss"
  });
  __wxAppCode__['union/pages/aiTravel/historyList.wxss'] = setCssToHead([".", [1], "video_box.", [1], "data-v-10bfc8f3{height:", [0, 1712], ";left:0;position:fixed;top:0;width:100%;z-index:9}\n.", [1], "video_box1.", [1], "data-v-10bfc8f3{height:", [0, 1712], ";left:0;position:fixed;top:0;width:100%;z-index:10}\n.", [1], "active.", [1], "data-v-10bfc8f3{opacity:1}\n.", [1], "page-box-image1.", [1], "data-v-10bfc8f3 .", [1], "zp-scroll-view-container{opacity:0;top:100%;transition:opacity 1s}\n.", [1], "page-box-image1.", [1], "data-v-10bfc8f3 .", [1], "zp-page-bottom-container{position:relative;z-index:10}\n.", [1], "h100.", [1], "data-v-10bfc8f3{height:100%}\n.", [1], "page-box-image2.", [1], "data-v-10bfc8f3 .", [1], "zp-scroll-view-container{background:linear-gradient(180deg,hsla(0,0%,100%,.5),#fff 50%);border:", [0, 2], " solid #fff;border-radius:", [0, 50], " ", [0, 50], " ", [0, 0], " ", [0, 0], ";box-shadow:", [0, 0], " ", [0, -20], " ", [0, 20], " ", [0, 0], " rgba(154,34,6,.2);margin-top:", [0, 36], ";top:0}\n.", [1], "page-box-image2.", [1], "data-v-10bfc8f3 .", [1], "zp-scroll-view-absolute{padding-bottom:", [0, 20], "}\n.", [1], "page-box-image22 .", [1], "plan-content.", [1], "data-v-10bfc8f3{margin-left:", [0, 60], ";padding-top:", [0, 20], ";width:", [0, 630], "}\n.", [1], "page-box-image22 .", [1], "plan-content .", [1], "welcom-l1.", [1], "data-v-10bfc8f3{color:#383b46;font-size:", [0, 36], ";font-weight:700;line-height:", [0, 58], "}\n.", [1], "page-box-image22 .", [1], "plan-content .", [1], "welcom-l2.", [1], "data-v-10bfc8f3{color:#4e514f;font-size:", [0, 28], ";line-height:", [0, 42], ";margin-top:", [0, 20], ";text-indent:2em}\n.", [1], "page-box-image22 .", [1], "plan-content .", [1], "plan-card.", [1], "data-v-10bfc8f3{background:linear-gradient(180deg,rgba(255,200,152,.5) 22%,rgba(255,200,152,.15));border-radius:", [0, 40], ";margin-top:", [0, 20], ";padding:", [0, 28], " ", [0, 40], ";position:relative;width:", [0, 630], "}\n.", [1], "page-box-image22 .", [1], "plan-content .", [1], "plan-card.", [1], "data-v-10bfc8f3::before{background:linear-gradient(180deg,#fff,hsla(0,0%,100%,.2)) border-box;border:", [0, 2], " solid transparent;border-radius:", [0, 40], ";bottom:0;content:\x22\x22;left:0;-webkit-mask:linear-gradient(#fff 0 0) padding-box,linear-gradient(#fff 0 0);-webkit-mask-composite:destination-out;mask-composite:exclude;pointer-events:none;position:absolute;right:0;top:0}\n.", [1], "page-box-image22 .", [1], "plan-content .", [1], "plan-card .", [1], "form-title.", [1], "data-v-10bfc8f3{color:#1c1c1c;font-size:", [0, 26], ";font-weight:700;line-height:", [0, 40], ";margin-bottom:", [0, 12], "}\n.", [1], "page-box-image22 .", [1], "plan-content .", [1], "plan-card .", [1], "form-item.", [1], "data-v-10bfc8f3{margin-bottom:", [0, 20], "}\n.", [1], "page-box-image22 .", [1], "plan-content .", [1], "plan-card .", [1], "form-item .", [1], "price-unit.", [1], "data-v-10bfc8f3{color:#000;font-size:", [0, 28], ";margin-right:", [0, 10], "}\n.", [1], "page-box-image22 .", [1], "plan-content .", [1], "plan-card .", [1], "form-select.", [1], "data-v-10bfc8f3{-webkit-align-items:center;align-items:center;background:hsla(0,0%,100%,.7);border-radius:", [0, 60], ";display:-webkit-flex;display:flex;-webkit-justify-content:space-between;justify-content:space-between;min-height:", [0, 72], ";padding:0 ", [0, 20], "}\n.", [1], "page-box-image22 .", [1], "plan-content .", [1], "plan-card .", [1], "form-select .", [1], "select-text.", [1], "data-v-10bfc8f3{color:#1c1c1c;font-size:", [0, 28], "}\n.", [1], "page-box-image22 .", [1], "plan-content .", [1], "plan-card .", [1], "form-select .", [1], "select-icon.", [1], "data-v-10bfc8f3{height:", [0, 32], ";width:", [0, 32], "}\n.", [1], "page-box-image22 .", [1], "plan-content .", [1], "plan-card .", [1], "form-select2.", [1], "data-v-10bfc8f3{background:hsla(0,0%,100%,.7);border-radius:", [0, 60], ";-webkit-flex-wrap:wrap;flex-wrap:wrap;min-height:", [0, 72], ";padding:", [0, 10], " ", [0, 20], " 0;position:relative}\n.", [1], "page-box-image22 .", [1], "plan-content .", [1], "plan-card .", [1], "form-select2 .", [1], "select-item.", [1], "data-v-10bfc8f3{background:#f5dccb;border-radius:", [0, 40], ";color:#1c1c1c;display:inline-block;font-size:", [0, 24], ";height:", [0, 50], ";line-height:", [0, 50], ";margin:0 ", [0, 10], " ", [0, 10], " 0;padding:0 ", [0, 12], "}\n.", [1], "page-box-image22 .", [1], "plan-content .", [1], "plan-card .", [1], "form-select2 .", [1], "select-text.", [1], "data-v-10bfc8f3{color:#1c1c1c;font-size:", [0, 28], ";line-height:", [0, 72], "}\n.", [1], "page-box-image22 .", [1], "plan-content .", [1], "plan-card .", [1], "form-select2 .", [1], "select-icon.", [1], "data-v-10bfc8f3{height:", [0, 32], ";position:absolute;right:", [0, 20], ";top:calc(50% - ", [0, 16], ");width:", [0, 32], "}\n.", [1], "page-box-image22 .", [1], "plan-content .", [1], "plan-card .", [1], "form-select-data.", [1], "data-v-10bfc8f3{height:", [0, 96], ";-webkit-justify-content:flex-start;justify-content:flex-start;position:relative}\n.", [1], "page-box-image22 .", [1], "plan-content .", [1], "plan-card .", [1], "form-select-data .", [1], "select-icon.", [1], "data-v-10bfc8f3{height:", [0, 36], ";position:absolute;right:", [0, 20], ";top:calc(50% - ", [0, 18], ");width:", [0, 36], "}\n.", [1], "page-box-image22 .", [1], "plan-content .", [1], "confirmBtn.", [1], "data-v-10bfc8f3{background:rgba(177,99,10,.6);border-radius:", [0, 60], " ", [0, 60], " ", [0, 60], " ", [0, 60], ";color:#fff;font-size:", [0, 32], ";height:", [0, 72], ";line-height:", [0, 72], ";margin-top:", [0, 50], ";text-align:center;width:", [0, 630], "}\n.", [1], "page-box.", [1], "data-v-10bfc8f3{height:100vh;width:100%}\n.", [1], "page-box .", [1], "content-box .", [1], "greet-box.", [1], "data-v-10bfc8f3{left:calc(100% - ", [0, 455], ");position:absolute;top:", [0, 244], ";width:", [0, 435], "}\n.", [1], "page-box .", [1], "content-box .", [1], "greet-box .", [1], "greet-box-t.", [1], "data-v-10bfc8f3{color:#1e1b19;font-family:Alibaba PuHuiTi;font-size:", [0, 60], ";font-style:normal;font-weight:700;line-height:", [0, 96], ";margin-bottom:", [0, 20], ";text-align:left;text-transform:none}\n.", [1], "page-box .", [1], "content-box .", [1], "greet-box .", [1], "greet-box-b .", [1], "greet-box-l.", [1], "data-v-10bfc8f3{color:#1e1b19;font-family:Alibaba PuHuiTi;font-size:", [0, 36], ";font-style:normal;font-weight:400;line-height:", [0, 44], ";text-align:left;text-transform:none}\n.", [1], "page-box .", [1], "default-box.", [1], "data-v-10bfc8f3{box-sizing:border-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-between;justify-content:space-between;padding:", [0, 40], ";position:absolute;top:", [0, 473], ";width:100%;z-index:1}\n.", [1], "page-box .", [1], "default-box .", [1], "default-box-copy.", [1], "data-v-10bfc8f3{height:100%;position:absolute;width:100%;z-index:100}\n.", [1], "page-box .", [1], "default-box .", [1], "default-t.", [1], "data-v-10bfc8f3{margin-bottom:", [0, 20], "}\n.", [1], "page-box .", [1], "default-box .", [1], "default-b.", [1], "data-v-10bfc8f3,.", [1], "page-box .", [1], "default-box .", [1], "default-l.", [1], "data-v-10bfc8f3,.", [1], "page-box .", [1], "default-box .", [1], "default-t.", [1], "data-v-10bfc8f3{background:linear-gradient(180deg,hsla(0,0%,100%,.5) 22%,#fff);border:", [0, 2], " solid #fff;border-radius:", [0, 40], " ", [0, 40], " ", [0, 40], " ", [0, 40], ";box-sizing:border-box;padding:", [0, 28], " ", [0, 20], "}\n.", [1], "page-box .", [1], "default-box .", [1], "default-l.", [1], "data-v-10bfc8f3,.", [1], "page-box .", [1], "default-box .", [1], "default-r.", [1], "data-v-10bfc8f3{width:calc(50% - ", [0, 10], ")}\n.", [1], "page-box .", [1], "default-box .", [1], "default-l .", [1], "default-h.", [1], "data-v-10bfc8f3,.", [1], "page-box .", [1], "default-box .", [1], "default-r .", [1], "default-h.", [1], "data-v-10bfc8f3{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex}\n.", [1], "page-box .", [1], "default-box .", [1], "default-l .", [1], "default-h .", [1], "default-image.", [1], "data-v-10bfc8f3,.", [1], "page-box .", [1], "default-box .", [1], "default-r .", [1], "default-h .", [1], "default-image.", [1], "data-v-10bfc8f3{height:", [0, 44], ";margin-left:", [0, 10], ";width:", [0, 44], "}\n.", [1], "page-box .", [1], "default-box .", [1], "default-l .", [1], "default-h .", [1], "default-text.", [1], "data-v-10bfc8f3,.", [1], "page-box .", [1], "default-box .", [1], "default-r .", [1], "default-h .", [1], "default-text.", [1], "data-v-10bfc8f3{color:#c160b0;font-family:Alibaba PuHuiTi;font-size:", [0, 32], ";font-style:normal;font-weight:700;line-height:", [0, 38], ";margin-left:", [0, 10], ";text-align:left;text-transform:none}\n.", [1], "page-box .", [1], "default-box .", [1], "default-l .", [1], "default-item.", [1], "data-v-10bfc8f3,.", [1], "page-box .", [1], "default-box .", [1], "default-r .", [1], "default-item.", [1], "data-v-10bfc8f3{background:rgba(195,237,194,.5);border-radius:", [0, 60], " ", [0, 60], " ", [0, 60], " ", [0, 60], ";color:#1c1c1c;font-family:Source Han Sans SC;font-size:", [0, 24], ";font-style:normal;font-weight:400;line-height:", [0, 28], ";margin-top:", [0, 20], ";padding:", [0, 16], " ", [0, 20], ";text-align:left;text-transform:none}\n.", [1], "page-box .", [1], "count-desc-box.", [1], "data-v-10bfc8f3{background:linear-gradient(180deg,hsla(0,0%,100%,.5),#fff 50%);border:", [0, 2], " solid #fff;border-radius:", [0, 50], " ", [0, 50], " ", [0, 0], " ", [0, 0], ";box-shadow:", [0, 0], " ", [0, -20], " ", [0, 20], " ", [0, 0], " rgba(154,34,6,.2);height:64vh;overflow:hidden;position:absolute;top:0;-webkit-transform:scaleY(-1);transform:scaleY(-1);width:100%}\n.", [1], "page-box .", [1], "count-desc-box .", [1], "count-desc.", [1], "data-v-10bfc8f3{height:100%;max-height:100%;-webkit-transform:scaleY(-1);transform:scaleY(-1)}\n.", [1], "wantdo-popup.", [1], "data-v-10bfc8f3{background:#fff;border-radius:", [0, 24], " ", [0, 24], " 0 0;padding:", [0, 30], "}\n.", [1], "wantdo-popup .", [1], "popup-header.", [1], "data-v-10bfc8f3{-webkit-align-items:center;align-items:center;border-bottom:", [0, 1], " solid #eee;display:-webkit-flex;display:flex;-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:", [0, 30], ";padding-bottom:", [0, 20], "}\n.", [1], "wantdo-popup .", [1], "popup-header .", [1], "popup-title.", [1], "data-v-10bfc8f3{color:#1c1c1c;font-size:", [0, 32], ";font-weight:700}\n.", [1], "wantdo-popup .", [1], "popup-header .", [1], "popup-confirm.", [1], "data-v-10bfc8f3{color:#ff6b00;font-size:", [0, 28], "}\n.", [1], "wantdo-popup .", [1], "popup-content.", [1], "data-v-10bfc8f3{height:", [0, 600], "}\n.", [1], "wantdo-popup .", [1], "popup-content .", [1], "tag-container.", [1], "data-v-10bfc8f3{display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;gap:", [0, 20], ";padding:", [0, 20], " 0}\n.", [1], "wantdo-popup .", [1], "popup-content .", [1], "wantdo-tag.", [1], "data-v-10bfc8f3{background:#f5f5f5;border-radius:", [0, 40], ";color:#1c1c1c;font-size:", [0, 28], ";padding:", [0, 16], " ", [0, 30], "}\n.", [1], "wantdo-popup .", [1], "popup-content .", [1], "wantdo-tag-active.", [1], "data-v-10bfc8f3{background:#ffe4d0;color:#ff6b00}\n.", [1], "calendar-popup.", [1], "data-v-10bfc8f3{background:#fff;border-radius:", [0, 24], " ", [0, 24], " 0 0;height:", [0, 700], ";min-height:", [0, 700], ";padding:", [0, 30], "}\n.", [1], "calendar-popup .", [1], "calendar-actions.", [1], "data-v-10bfc8f3{-webkit-align-items:center;align-items:center;border-top:", [0, 1], " solid #eee;display:-webkit-flex;display:flex;-webkit-justify-content:space-between;justify-content:space-between;margin-top:", [0, 20], ";padding-top:", [0, 20], "}\n.", [1], "calendar-popup .", [1], "calendar-actions .", [1], "action-item.", [1], "data-v-10bfc8f3{-webkit-align-items:flex-start;align-items:flex-start;color:#1c1c1c;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;font-size:", [0, 28], ";width:calc(50% - ", [0, 10], ")}\n.", [1], "calendar-popup .", [1], "calendar-actions .", [1], "action-item .", [1], "period-select.", [1], "data-v-10bfc8f3{-webkit-align-items:center;align-items:center;background:#f5f5f5;border-radius:", [0, 40], ";display:-webkit-flex;display:flex;-webkit-justify-content:space-between;justify-content:space-between;margin-top:", [0, 10], ";padding:", [0, 10], " ", [0, 20], "}\n.", [1], "calendar-popup .", [1], "calendar-actions .", [1], "action-item .", [1], "period-select .", [1], "select-icon.", [1], "data-v-10bfc8f3{height:", [0, 24], ";margin-left:", [0, 10], ";width:", [0, 24], "}\n.", [1], "calendar-popup .", [1], "calendar-actions .", [1], "confirm-btn.", [1], "data-v-10bfc8f3{background:#ff6b00;border-radius:", [0, 40], ";color:#fff;font-size:", [0, 32], ";padding:", [0, 20], " ", [0, 40], "}\n.", [1], "loading-mask.", [1], "data-v-10bfc8f3{-webkit-align-items:center;align-items:center;background:hsla(0,0%,100%,.85);display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;height:100vh;-webkit-justify-content:center;justify-content:center;left:0;position:fixed;top:0;width:100vw;z-index:9999}\n.", [1], "loading-spinner.", [1], "data-v-10bfc8f3{-webkit-animation:spin-data-v-10bfc8f3 1s linear infinite;animation:spin-data-v-10bfc8f3 1s linear infinite;border:", [0, 6], " solid #f3f3f3;border-radius:50%;border-top-color:#f90;height:", [0, 60], ";margin-bottom:", [0, 20], ";width:", [0, 60], "}\n@-webkit-keyframes spin-data-v-10bfc8f3{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}\n100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}\n}@keyframes spin-data-v-10bfc8f3{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}\n100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}\n}.", [1], "loading-text.", [1], "data-v-10bfc8f3{color:#f90;font-size:", [0, 30], "}\n", ], undefined, {
    path: "./union/pages/aiTravel/historyList.wxss"
  });
}
