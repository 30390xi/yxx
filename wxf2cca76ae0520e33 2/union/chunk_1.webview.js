$gwx4_XC_1 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx4_XC_1 || [];

    function gz$gwx4_XC_1_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx4_XC_1_1) return __WXML_GLOBAL__.ops_cached.$gwx4_XC_1_1
      __WXML_GLOBAL__.ops_cached.$gwx4_XC_1_1 = [];
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
                [1, 'weather-card']
              ],
              [1, 'data-v-552cf4c6']
            ],
            [
              [7],
              [3, 'weatherClass']
            ]
          ]
        ])
        Z([3, 'current-weather data-v-552cf4c6'])
        Z([3, 'city-info data-v-552cf4c6'])
        Z([3, 'city-name data-v-552cf4c6'])
        Z([a, [
          [6],
          [
            [7],
            [3, 'weatherToday']
          ],
          [3, 'cityName']
        ]])
        Z([3, 'weather-main data-v-552cf4c6'])
        Z([3, 'temperature data-v-552cf4c6'])
        Z([a, [
          [6],
          [
            [7],
            [3, 'weatherToday']
          ],
          [3, 'currentTemp']
        ]])
        Z([3, 'weather-text data-v-552cf4c6'])
        Z([a, [
          [6],
          [
            [7],
            [3, 'weatherToday']
          ],
          [3, 'weatherCondition']
        ]])
        Z([
          [6],
          [
            [7],
            [3, '$root']
          ],
          [3, 'm0']
        ])
        Z([3, 'weather-icon-img data-v-552cf4c6'])
        Z([
          [6],
          [
            [7],
            [3, '$root']
          ],
          [3, 'm1']
        ])
        Z([3, 'weather-details data-v-552cf4c6'])
        Z([3, 'detail-text data-v-552cf4c6'])
        Z([a, [
          [2, '+'],
          [1, '体感温度'],
          [
            [6],
            [
              [7],
              [3, 'weatherToday']
            ],
            [3, 'feelsLikeTemp']
          ]
        ]])
        Z([3, 'separator data-v-552cf4c6'])
        Z([3, '|'])
        Z(z[14])
        Z([a, [
          [2, '+'],
          [1, '紫外线指数'],
          [
            [6],
            [
              [7],
              [3, 'weatherToday']
            ],
            [3, 'ultraviolet']
          ]
        ]])
        Z(z[16])
        Z(z[17])
        Z(z[14])
        Z([a, [
          [2, '+'],
          [1, '空气质量'],
          [
            [6],
            [
              [7],
              [3, 'weatherToday']
            ],
            [3, 'airQuality']
          ]
        ]])
        Z([3, 'weather-tips data-v-552cf4c6'])
        Z([3, '__e'])
        Z(z[25])
        Z(z[25])
        Z([3, 'weather-tip left data-v-552cf4c6'])
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
                              [1, 'handleTouchStart']
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
                            [1, 'handleTouchEnd']
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
                  [1, 'touchcancel']
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
                          [1, 'handleTouchEnd']
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
          [3, 'showPopUp']
        ])
        Z([3, 'tipsPop data-v-552cf4c6'])
        Z([a, [
          [2, '+'],
          [
            [2, '+'],
            [1, ''],
            [
              [6],
              [
                [7],
                [3, 'weatherToday']
              ],
              [3, 'dressAdvice']
            ]
          ],
          [1, '']
        ]])
        Z([3, 'title data-v-552cf4c6'])
        Z([3, '穿衣推荐'])
        Z([3, 'data-v-552cf4c6'])
        Z([3, 'https://eshopfile.zhiyousx.com/175497114528267063.png'])
        Z([3, 'detail singleLineText data-v-552cf4c6'])
        Z([a, z[32][1]])
        Z([3, 'tips data-v-552cf4c6'])
        Z([a, [
          [2, '+'],
          [
            [2, '+'],
            [
              [2, '+'],
              [
                [2, '+'],
                [1, ''],
                [
                  [6],
                  [
                    [7],
                    [3, 'weatherToday']
                  ],
                  [3, 'nightTemp']
                ]
              ],
              [1, '~']
            ],
            [
              [6],
              [
                [7],
                [3, 'weatherToday']
              ],
              [3, 'dayTemp']
            ]
          ],
          [1, '']
        ]])
        Z([3, 'weather-tip right data-v-552cf4c6'])
        Z(z[33])
        Z([3, '未来5小时降水'])
        Z(z[35])
        Z([3, 'https://eshopfile.zhiyousx.com/175497126266020025.png'])
        Z(z[37])
        Z([a, [
          [2, '+'],
          [
            [2, '+'],
            [1, ''],
            [
              [2, '?:'],
              [
                [6],
                [
                  [7],
                  [3, 'weatherToday']
                ],
                [3, 'willRain']
              ],
              [1, '有概率会降雨'],
              [1, '无降雨']
            ]
          ],
          [1, '']
        ]])
        Z(z[39])
        Z([a, [
          [2, '?:'],
          [
            [6],
            [
              [7],
              [3, 'weatherToday']
            ],
            [3, 'willRain']
          ],
          [1, '记得带伞哦'],
          [1, '可以正常出行']
        ]])
        Z([3, 'forecast-section data-v-552cf4c6'])
        Z([3, 'forecast-header data-v-552cf4c6'])
        Z([3, '未来七天天气预报'])
        Z([3, 'forecast-list data-v-552cf4c6'])
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
        Z(z[54])
        Z([3, 'forecast-item data-v-552cf4c6'])
        Z([3, 'day-info data-v-552cf4c6'])
        Z([3, 'day-text data-v-552cf4c6'])
        Z([a, [
          [6],
          [
            [7],
            [3, 'item']
          ],
          [3, 'm2']
        ]])
        Z([3, 'date-text data-v-552cf4c6'])
        Z([a, [
          [2, '+'],
          [
            [2, '+'],
            [
              [2, '+'],
              [
                [6],
                [
                  [6],
                  [
                    [7],
                    [3, 'item']
                  ],
                  [3, 'g0']
                ],
                [1, 1]
              ],
              [1, '月']
            ],
            [
              [6],
              [
                [6],
                [
                  [7],
                  [3, 'item']
                ],
                [3, 'g1']
              ],
              [1, 2]
            ]
          ],
          [1, '日']
        ]])
        Z([3, 'weather-icon data-v-552cf4c6'])
        Z([
          [6],
          [
            [7],
            [3, 'item']
          ],
          [3, 'm3']
        ])
        Z(z[11])
        Z([
          [6],
          [
            [7],
            [3, 'item']
          ],
          [3, 'm4']
        ])
        Z([3, 'weather-icon-text data-v-552cf4c6'])
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
          [3, 'weather_day']
        ]])
        Z([3, 'temperature-range data-v-552cf4c6'])
        Z([a, [
          [2, '+'],
          [
            [2, '+'],
            [
              [2, '+'],
              [
                [2, '+'],
                [1, ''],
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
                  [3, 'temp_low']
                ]
              ],
              [1, '°~']
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
              [3, 'temp_high']
            ]
          ],
          [1, '°']
        ]])
      })(__WXML_GLOBAL__.ops_cached.$gwx4_XC_1_1);
      return __WXML_GLOBAL__.ops_cached.$gwx4_XC_1_1
    }

    function gz$gwx4_XC_1_2() {
      if (__WXML_GLOBAL__.ops_cached.$gwx4_XC_1_2) return __WXML_GLOBAL__.ops_cached.$gwx4_XC_1_2
      __WXML_GLOBAL__.ops_cached.$gwx4_XC_1_2 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, 'container data-v-95fcc798'])
        Z([3, 'title data-v-95fcc798'])
        Z([a, [
          [2, '+'],
          [
            [7],
            [3, 'scenicName']
          ],
          [1, '景区测评']
        ]])
        Z([
          [7],
          [3, 'baseInfo']
        ])
        Z([3, '__e'])
        Z([3, 'eva-enter data-v-95fcc798'])
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
                        [1, 'jumpTo']
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ])
        Z([3, 'eva-enter-l data-v-95fcc798'])
        Z([3, 'score-1 data-v-95fcc798'])
        Z([a, [
          [2, '?:'],
          [
            [2, '||'],
            [
              [6],
              [
                [7],
                [3, 'baseInfo']
              ],
              [3, 'score']
            ],
            [
              [2, '==='],
              [
                [6],
                [
                  [7],
                  [3, 'baseInfo']
                ],
                [3, 'score']
              ],
              [1, 0]
            ]
          ],
          [
            [6],
            [
              [7],
              [3, '$root']
            ],
            [3, 'g0']
          ],
          [1, '']
        ]])
        Z([3, 'score-msg data-v-95fcc798'])
        Z([3, '实测评分'])
        Z([3, 'eva-enter-r data-v-95fcc798'])
        Z([3, 'radar data-v-95fcc798'])
        Z([3, 'data data-v-95fcc798'])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [1, 'clip-path:'],
            [
              [2, '+'],
              [
                [2, '+'],
                [
                  [2, '+'],
                  [
                    [2, '+'],
                    [
                      [2, '+'],
                      [
                        [2, '+'],
                        [
                          [2, '+'],
                          [
                            [2, '+'],
                            [
                              [2, '+'],
                              [
                                [2, '+'],
                                [
                                  [2, '+'],
                                  [
                                    [2, '+'],
                                    [1, 'polygon('],
                                    [
                                      [6],
                                      [
                                        [6],
                                        [
                                          [7],
                                          [3, 'xyArr']
                                        ],
                                        [1, 0]
                                      ],
                                      [3, 'x']
                                    ]
                                  ],
                                  [1, ' ']
                                ],
                                [
                                  [6],
                                  [
                                    [6],
                                    [
                                      [7],
                                      [3, 'xyArr']
                                    ],
                                    [1, 0]
                                  ],
                                  [3, 'y']
                                ]
                              ],
                              [1, ', ']
                            ],
                            [
                              [6],
                              [
                                [6],
                                [
                                  [7],
                                  [3, 'xyArr']
                                ],
                                [1, 1]
                              ],
                              [3, 'x']
                            ]
                          ],
                          [1, ' ']
                        ],
                        [
                          [6],
                          [
                            [6],
                            [
                              [7],
                              [3, 'xyArr']
                            ],
                            [1, 1]
                          ],
                          [3, 'y']
                        ]
                      ],
                      [1, ', ']
                    ],
                    [
                      [6],
                      [
                        [6],
                        [
                          [7],
                          [3, 'xyArr']
                        ],
                        [1, 2]
                      ],
                      [3, 'x']
                    ]
                  ],
                  [1, ' ']
                ],
                [
                  [6],
                  [
                    [6],
                    [
                      [7],
                      [3, 'xyArr']
                    ],
                    [1, 2]
                  ],
                  [3, 'y']
                ]
              ],
              [1, ')']
            ]
          ],
          [1, ';']
        ])
        Z([3, 'data-wonders data-desc data-v-95fcc798'])
        Z([3, 'name data-v-95fcc798'])
        Z([3, '奇观度'])
        Z([3, 'score data-v-95fcc798'])
        Z([a, [
          [2, '?:'],
          [
            [2, '||'],
            [
              [6],
              [
                [7],
                [3, 'baseInfo']
              ],
              [3, 'scoreWonder']
            ],
            [
              [2, '==='],
              [
                [6],
                [
                  [7],
                  [3, 'baseInfo']
                ],
                [3, 'scoreWonder']
              ],
              [1, 0]
            ]
          ],
          [
            [6],
            [
              [7],
              [3, '$root']
            ],
            [3, 'g1']
          ],
          [1, '']
        ]])
        Z([3, 'data-setting data-desc data-v-95fcc798'])
        Z(z[17])
        Z([3, '配套设施'])
        Z(z[19])
        Z([a, [
          [2, '?:'],
          [
            [2, '||'],
            [
              [6],
              [
                [7],
                [3, 'baseInfo']
              ],
              [3, 'scoreFacility']
            ],
            [
              [2, '==='],
              [
                [6],
                [
                  [7],
                  [3, 'baseInfo']
                ],
                [3, 'scoreFacility']
              ],
              [1, 0]
            ]
          ],
          [
            [6],
            [
              [7],
              [3, '$root']
            ],
            [3, 'g2']
          ],
          [1, '']
        ]])
        Z([3, 'data-service data-desc data-v-95fcc798'])
        Z(z[17])
        Z([3, '运营服务'])
        Z(z[19])
        Z([a, [
          [2, '?:'],
          [
            [2, '||'],
            [
              [6],
              [
                [7],
                [3, 'baseInfo']
              ],
              [3, 'scoreOperation']
            ],
            [
              [2, '==='],
              [
                [6],
                [
                  [7],
                  [3, 'baseInfo']
                ],
                [3, 'scoreOperation']
              ],
              [1, 0]
            ]
          ],
          [
            [6],
            [
              [7],
              [3, '$root']
            ],
            [3, 'g3']
          ],
          [1, '']
        ]])
        Z([3, 'enterIcon data-v-95fcc798'])
        Z([3, 'aspectFill'])
        Z([3, 'https://eshopfile.zhiyousx.com/175462295999908064.png'])
        Z([
          [6],
          [
            [7],
            [3, '$root']
          ],
          [3, 'g4']
        ])
        Z([3, 'video-list data-v-95fcc798'])
        Z([3, 'ind'])
        Z([3, 'el'])
        Z([
          [7],
          [3, 'videoList']
        ])
        Z(z[36])
        Z([3, 'video-item data-v-95fcc798'])
        Z(z[4])
        Z([3, 'video-item-img data-v-95fcc798'])
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
                            [1, 'gotoVideo']
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
                                          [1, 'videoList']
                                        ],
                                        [1, '']
                                      ],
                                      [
                                        [7],
                                        [3, 'ind']
                                      ]
                                    ],
                                    [1, 'vlogUrl']
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
        Z(z[32])
        Z([
          [6],
          [
            [7],
            [3, 'el']
          ],
          [3, 'coverImage']
        ])
        Z(z[4])
        Z([3, 'video-item-btn data-v-95fcc798'])
        Z(z[43])
        Z(z[32])
        Z([3, 'https://eshopfile.zhiyousx.com/175490833075804316.png'])
      })(__WXML_GLOBAL__.ops_cached.$gwx4_XC_1_2);
      return __WXML_GLOBAL__.ops_cached.$gwx4_XC_1_2
    }
    __WXML_GLOBAL__.ops_set.$gwx4_XC_1 = z;
    __WXML_GLOBAL__.ops_init.$gwx4_XC_1 = true;
    var x = ['./union/components/weatherCard.wxml', './union/components/xjtuTextCard.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx4_XC_1_1()
      var bMJ = _n('view')
      _rz(z, bMJ, 'class', 0, e, s, gg)
      var oNJ = _n('view')
      _rz(z, oNJ, 'class', 1, e, s, gg)
      var xOJ = _n('view')
      _rz(z, xOJ, 'class', 2, e, s, gg)
      var oPJ = _n('text')
      _rz(z, oPJ, 'class', 3, e, s, gg)
      var fQJ = _oz(z, 4, e, s, gg)
      _(oPJ, fQJ)
      _(xOJ, oPJ)
      _(oNJ, xOJ)
      var cRJ = _n('view')
      _rz(z, cRJ, 'class', 5, e, s, gg)
      var oTJ = _n('text')
      _rz(z, oTJ, 'class', 6, e, s, gg)
      var cUJ = _oz(z, 7, e, s, gg)
      _(oTJ, cUJ)
      _(cRJ, oTJ)
      var oVJ = _n('text')
      _rz(z, oVJ, 'class', 8, e, s, gg)
      var lWJ = _oz(z, 9, e, s, gg)
      _(oVJ, lWJ)
      _(cRJ, oVJ)
      var hSJ = _v()
      _(cRJ, hSJ)
      if (_oz(z, 10, e, s, gg)) {
        hSJ.wxVkey = 1
        var aXJ = _mz(z, 'image', ['class', 11, 'src', 1], [], e, s, gg)
        _(hSJ, aXJ)
      }
      hSJ.wxXCkey = 1
      _(oNJ, cRJ)
      var tYJ = _n('view')
      _rz(z, tYJ, 'class', 13, e, s, gg)
      var eZJ = _n('text')
      _rz(z, eZJ, 'class', 14, e, s, gg)
      var b1J = _oz(z, 15, e, s, gg)
      _(eZJ, b1J)
      _(tYJ, eZJ)
      var o2J = _n('text')
      _rz(z, o2J, 'class', 16, e, s, gg)
      var x3J = _oz(z, 17, e, s, gg)
      _(o2J, x3J)
      _(tYJ, o2J)
      var o4J = _n('text')
      _rz(z, o4J, 'class', 18, e, s, gg)
      var f5J = _oz(z, 19, e, s, gg)
      _(o4J, f5J)
      _(tYJ, o4J)
      var c6J = _n('text')
      _rz(z, c6J, 'class', 20, e, s, gg)
      var h7J = _oz(z, 21, e, s, gg)
      _(c6J, h7J)
      _(tYJ, c6J)
      var o8J = _n('text')
      _rz(z, o8J, 'class', 22, e, s, gg)
      var c9J = _oz(z, 23, e, s, gg)
      _(o8J, c9J)
      _(tYJ, o8J)
      _(oNJ, tYJ)
      _(bMJ, oNJ)
      var o0J = _n('view')
      _rz(z, o0J, 'class', 24, e, s, gg)
      var lAK = _mz(z, 'view', ['bindtouchcancel', 25, 'bindtouchend', 1, 'bindtouchstart', 2, 'class', 3, 'data-event-opts', 4], [], e, s, gg)
      var aBK = _v()
      _(lAK, aBK)
      if (_oz(z, 30, e, s, gg)) {
        aBK.wxVkey = 1
        var tCK = _n('view')
        _rz(z, tCK, 'class', 31, e, s, gg)
        var eDK = _oz(z, 32, e, s, gg)
        _(tCK, eDK)
        _(aBK, tCK)
      }
      var bEK = _n('view')
      _rz(z, bEK, 'class', 33, e, s, gg)
      var oFK = _oz(z, 34, e, s, gg)
      _(bEK, oFK)
      var xGK = _mz(z, 'image', ['class', 35, 'src', 1], [], e, s, gg)
      _(bEK, xGK)
      _(lAK, bEK)
      var oHK = _n('view')
      _rz(z, oHK, 'class', 37, e, s, gg)
      var fIK = _oz(z, 38, e, s, gg)
      _(oHK, fIK)
      _(lAK, oHK)
      var cJK = _n('view')
      _rz(z, cJK, 'class', 39, e, s, gg)
      var hKK = _oz(z, 40, e, s, gg)
      _(cJK, hKK)
      _(lAK, cJK)
      aBK.wxXCkey = 1
      _(o0J, lAK)
      var oLK = _n('view')
      _rz(z, oLK, 'class', 41, e, s, gg)
      var cMK = _n('view')
      _rz(z, cMK, 'class', 42, e, s, gg)
      var oNK = _oz(z, 43, e, s, gg)
      _(cMK, oNK)
      var lOK = _mz(z, 'image', ['class', 44, 'src', 1], [], e, s, gg)
      _(cMK, lOK)
      _(oLK, cMK)
      var aPK = _n('view')
      _rz(z, aPK, 'class', 46, e, s, gg)
      var tQK = _oz(z, 47, e, s, gg)
      _(aPK, tQK)
      _(oLK, aPK)
      var eRK = _n('view')
      _rz(z, eRK, 'class', 48, e, s, gg)
      var bSK = _oz(z, 49, e, s, gg)
      _(eRK, bSK)
      _(oLK, eRK)
      _(o0J, oLK)
      _(bMJ, o0J)
      var oTK = _n('view')
      _rz(z, oTK, 'class', 50, e, s, gg)
      var xUK = _n('view')
      _rz(z, xUK, 'class', 51, e, s, gg)
      var oVK = _oz(z, 52, e, s, gg)
      _(xUK, oVK)
      _(oTK, xUK)
      var fWK = _n('view')
      _rz(z, fWK, 'class', 53, e, s, gg)
      var cXK = _v()
      _(fWK, cXK)
      var hYK = function(c1K, oZK, o2K, gg) {
        var a4K = _n('view')
        _rz(z, a4K, 'class', 58, c1K, oZK, gg)
        var t5K = _n('view')
        _rz(z, t5K, 'class', 59, c1K, oZK, gg)
        var e6K = _n('view')
        _rz(z, e6K, 'class', 60, c1K, oZK, gg)
        var b7K = _oz(z, 61, c1K, oZK, gg)
        _(e6K, b7K)
        _(t5K, e6K)
        var o8K = _n('view')
        _rz(z, o8K, 'class', 62, c1K, oZK, gg)
        var x9K = _oz(z, 63, c1K, oZK, gg)
        _(o8K, x9K)
        _(t5K, o8K)
        _(a4K, t5K)
        var o0K = _n('view')
        _rz(z, o0K, 'class', 64, c1K, oZK, gg)
        var fAL = _v()
        _(o0K, fAL)
        if (_oz(z, 65, c1K, oZK, gg)) {
          fAL.wxVkey = 1
          var cBL = _mz(z, 'image', ['class', 66, 'src', 1], [], c1K, oZK, gg)
          _(fAL, cBL)
        }
        var hCL = _n('view')
        _rz(z, hCL, 'class', 68, c1K, oZK, gg)
        var oDL = _oz(z, 69, c1K, oZK, gg)
        _(hCL, oDL)
        _(o0K, hCL)
        fAL.wxXCkey = 1
        _(a4K, o0K)
        var cEL = _n('view')
        _rz(z, cEL, 'class', 70, c1K, oZK, gg)
        var oFL = _oz(z, 71, c1K, oZK, gg)
        _(cEL, oFL)
        _(a4K, cEL)
        _(o2K, a4K)
        return o2K
      }
      cXK.wxXCkey = 2
      _2z(z, 56, hYK, e, s, gg, cXK, 'item', 'index', 'index')
      _(oTK, fWK)
      _(bMJ, oTK)
      _(r, bMJ)
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
      var z = gz$gwx4_XC_1_2()
      var aHL = _n('view')
      _rz(z, aHL, 'class', 0, e, s, gg)
      var bKL = _n('view')
      _rz(z, bKL, 'class', 1, e, s, gg)
      var oLL = _oz(z, 2, e, s, gg)
      _(bKL, oLL)
      _(aHL, bKL)
      var tIL = _v()
      _(aHL, tIL)
      if (_oz(z, 3, e, s, gg)) {
        tIL.wxVkey = 1
        var xML = _mz(z, 'view', ['bindtap', 4, 'class', 1, 'data-event-opts', 2], [], e, s, gg)
        var oNL = _n('view')
        _rz(z, oNL, 'class', 7, e, s, gg)
        var fOL = _n('view')
        _rz(z, fOL, 'class', 8, e, s, gg)
        var cPL = _oz(z, 9, e, s, gg)
        _(fOL, cPL)
        _(oNL, fOL)
        var hQL = _n('view')
        _rz(z, hQL, 'class', 10, e, s, gg)
        var oRL = _oz(z, 11, e, s, gg)
        _(hQL, oRL)
        _(oNL, hQL)
        _(xML, oNL)
        var cSL = _n('view')
        _rz(z, cSL, 'class', 12, e, s, gg)
        var oTL = _n('view')
        _rz(z, oTL, 'class', 13, e, s, gg)
        var lUL = _mz(z, 'view', ['class', 14, 'style', 1], [], e, s, gg)
        _(oTL, lUL)
        var aVL = _n('view')
        _rz(z, aVL, 'class', 16, e, s, gg)
        var tWL = _n('view')
        _rz(z, tWL, 'class', 17, e, s, gg)
        var eXL = _oz(z, 18, e, s, gg)
        _(tWL, eXL)
        _(aVL, tWL)
        var bYL = _n('view')
        _rz(z, bYL, 'class', 19, e, s, gg)
        var oZL = _oz(z, 20, e, s, gg)
        _(bYL, oZL)
        _(aVL, bYL)
        _(oTL, aVL)
        var x1L = _n('view')
        _rz(z, x1L, 'class', 21, e, s, gg)
        var o2L = _n('view')
        _rz(z, o2L, 'class', 22, e, s, gg)
        var f3L = _oz(z, 23, e, s, gg)
        _(o2L, f3L)
        _(x1L, o2L)
        var c4L = _n('view')
        _rz(z, c4L, 'class', 24, e, s, gg)
        var h5L = _oz(z, 25, e, s, gg)
        _(c4L, h5L)
        _(x1L, c4L)
        _(oTL, x1L)
        var o6L = _n('view')
        _rz(z, o6L, 'class', 26, e, s, gg)
        var c7L = _n('view')
        _rz(z, c7L, 'class', 27, e, s, gg)
        var o8L = _oz(z, 28, e, s, gg)
        _(c7L, o8L)
        _(o6L, c7L)
        var l9L = _n('view')
        _rz(z, l9L, 'class', 29, e, s, gg)
        var a0L = _oz(z, 30, e, s, gg)
        _(l9L, a0L)
        _(o6L, l9L)
        _(oTL, o6L)
        _(cSL, oTL)
        _(xML, cSL)
        var tAM = _mz(z, 'image', ['class', 31, 'mode', 1, 'src', 2], [], e, s, gg)
        _(xML, tAM)
        _(tIL, xML)
      }
      var eJL = _v()
      _(aHL, eJL)
      if (_oz(z, 34, e, s, gg)) {
        eJL.wxVkey = 1
        var eBM = _n('view')
        _rz(z, eBM, 'class', 35, e, s, gg)
        var bCM = _v()
        _(eBM, bCM)
        var oDM = function(oFM, xEM, fGM, gg) {
          var hIM = _n('view')
          _rz(z, hIM, 'class', 40, oFM, xEM, gg)
          var oJM = _mz(z, 'image', ['bindtap', 41, 'class', 1, 'data-event-opts', 2, 'mode', 3, 'src', 4], [], oFM, xEM, gg)
          _(hIM, oJM)
          var cKM = _mz(z, 'image', ['bindtap', 46, 'class', 1, 'data-event-opts', 2, 'mode', 3, 'src', 4], [], oFM, xEM, gg)
          _(hIM, cKM)
          _(fGM, hIM)
          return fGM
        }
        bCM.wxXCkey = 2
        _2z(z, 38, oDM, e, s, gg, bCM, 'el', 'ind', 'ind')
        _(eJL, eBM)
      }
      tIL.wxXCkey = 1
      eJL.wxXCkey = 1
      _(r, aHL)
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
        g = "$gwx4_XC_1";
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
if (__vd_version_info__.delayedGwx || false) $gwx4_XC_1();
if (__vd_version_info__.delayedGwx) __wxAppCode__['union/components/weatherCard.wxml'] = [$gwx4_XC_1, './union/components/weatherCard.wxml'];
else __wxAppCode__['union/components/weatherCard.wxml'] = $gwx4_XC_1('./union/components/weatherCard.wxml');
if (__vd_version_info__.delayedGwx) __wxAppCode__['union/components/xjtuTextCard.wxml'] = [$gwx4_XC_1, './union/components/xjtuTextCard.wxml'];
else __wxAppCode__['union/components/xjtuTextCard.wxml'] = $gwx4_XC_1('./union/components/xjtuTextCard.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__['union/components/weatherCard.wxss'] = setCssToHead([".", [1], "weather-card.", [1], "data-v-552cf4c6{border-radius:", [0, 40], " ", [0, 40], " ", [0, 40], " ", [0, 40], ";color:#fff;margin-top:", [0, 16], ";overflow:hidden;padding:", [0, 30], " ", [0, 20], ";position:relative}\n.", [1], "weather-card.", [1], "weather-sunny.", [1], "data-v-552cf4c6{background:url(https://eshopfile.zhiyousx.com/175499050963497939.png) no-repeat;background-size:100% 100%}\n.", [1], "weather-card.", [1], "weather-cloudy.", [1], "data-v-552cf4c6,.", [1], "weather-card.", [1], "weather-nosunny.", [1], "data-v-552cf4c6{background:url(https://eshopfile.zhiyousx.com/175498708527887816.png) no-repeat;background-size:100% 100%}\n.", [1], "weather-card.", [1], "weather-rainy.", [1], "data-v-552cf4c6{background:url(https://eshopfile.zhiyousx.com/175498726237886761.png) no-repeat;background-size:100% 100%}\n.", [1], "weather-card.", [1], "weather-snowy.", [1], "data-v-552cf4c6{background:url(https://eshopfile.zhiyousx.com/175498734462011250.png) no-repeat;background-size:100% 100%}\n.", [1], "weather-card.", [1], "weather-night.", [1], "data-v-552cf4c6{background:url(https://eshopfile.zhiyousx.com/175498740793256806.png) no-repeat;background-size:100% 100%}\n.", [1], "weather-card.", [1], "weather-default.", [1], "data-v-552cf4c6{background:linear-gradient(180deg,#8666fd,#e4aaff)}\n.", [1], "current-weather.", [1], "data-v-552cf4c6{margin-bottom:", [0, 40], "}\n.", [1], "city-info.", [1], "data-v-552cf4c6{margin-bottom:", [0, 20], "}\n.", [1], "city-name.", [1], "data-v-552cf4c6{color:#fff;color:hsla(0,0%,100%,.9);font-size:", [0, 36], ";font-weight:500;line-height:", [0, 36], "}\n.", [1], "weather-main.", [1], "data-v-552cf4c6{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;margin-bottom:", [0, 20], "}\n.", [1], "weather-main .", [1], "weather-icon-img.", [1], "data-v-552cf4c6{height:", [0, 60], ";margin-left:", [0, 12], ";width:", [0, 60], "}\n.", [1], "temperature.", [1], "data-v-552cf4c6{color:#fff;font-size:", [0, 56], ";line-height:", [0, 64], ";margin-right:", [0, 12], "}\n.", [1], "weather-text.", [1], "data-v-552cf4c6{color:#fff;font-size:", [0, 40], ";font-weight:500;line-height:", [0, 48], "}\n.", [1], "weather-details.", [1], "data-v-552cf4c6{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-justify-content:center;justify-content:center;margin-top:", [0, 24], "}\n.", [1], "detail-text.", [1], "data-v-552cf4c6{color:#fff;font-size:", [0, 24], ";line-height:", [0, 32], "}\n.", [1], "separator.", [1], "data-v-552cf4c6{color:hsla(0,0%,100%,.8);font-size:", [0, 24], ";margin:0 ", [0, 20], "}\n.", [1], "weather-tips.", [1], "data-v-552cf4c6{display:-webkit-flex;display:flex;width:100%}\n.", [1], "weather-tip.", [1], "data-v-552cf4c6{background:hsla(0,0%,100%,.85);border-radius:", [0, 40], " ", [0, 40], " ", [0, 40], " ", [0, 40], ";box-sizing:border-box;height:", [0, 148], ";min-width:0;padding:", [0, 12], " ", [0, 16], ";position:relative}\n.", [1], "weather-tip .", [1], "tipsPop.", [1], "data-v-552cf4c6{background:url(https://eshopfile.zhiyousx.com/175506533121156373.png) no-repeat;background-size:100% 100%;bottom:", [0, 100], ";color:rgba(0,0,0,.95);font-size:", [0, 22], ";left:", [0, 194], ";line-height:", [0, 36], ";padding:", [0, 16], " ", [0, 18], " ", [0, 34], " ", [0, 32], ";position:absolute;width:", [0, 304], "}\n.", [1], "weather-tip .", [1], "title.", [1], "data-v-552cf4c6{color:rgba(0,0,0,.65);font-size:", [0, 24], ";line-height:", [0, 36], ";margin-bottom:", [0, 8], "}\n.", [1], "weather-tip .", [1], "title wx-image.", [1], "data-v-552cf4c6{height:", [0, 24], ";margin-left:", [0, 10], ";width:", [0, 24], "}\n.", [1], "weather-tip .", [1], "detail.", [1], "data-v-552cf4c6{color:rgba(0,0,0,.85);font-size:", [0, 24], ";font-weight:700;line-height:", [0, 36], ";margin-bottom:", [0, 8], "}\n.", [1], "weather-tip .", [1], "tips.", [1], "data-v-552cf4c6{color:rgba(0,0,0,.65);font-size:", [0, 24], ";line-height:", [0, 36], "}\n.", [1], "weather-tip.", [1], "left.", [1], "data-v-552cf4c6{margin-right:", [0, 20], ";width:", [0, 380], "}\n.", [1], "weather-tip.", [1], "right.", [1], "data-v-552cf4c6{width:", [0, 240], "}\n.", [1], "forecast-section.", [1], "data-v-552cf4c6{background:hsla(0,0%,100%,.85);border-bottom:", [0, 2], " solid rgba(0,0,0,.04);border-radius:", [0, 40], " ", [0, 40], " ", [0, 40], " ", [0, 40], ";height:", [0, 450], ";margin-top:", [0, 20], ";padding:0 ", [0, 16], ";width:100%}\n.", [1], "forecast-header.", [1], "data-v-552cf4c6{border-bottom:", [0, 2], " solid rgba(0,0,0,.04);color:rgba(0,0,0,.65);font-size:", [0, 28], ";font-weight:700;line-height:", [0, 76], ";margin-bottom:", [0, 24], ";text-align:center}\n.", [1], "forecast-title.", [1], "data-v-552cf4c6{color:hsla(0,0%,100%,.8);font-size:", [0, 26], ";font-weight:500}\n.", [1], "forecast-list.", [1], "data-v-552cf4c6{display:-webkit-flex;display:flex;height:", [0, 318], ";overflow:auto;width:100%}\n.", [1], "forecast-item.", [1], "data-v-552cf4c6{-webkit-align-items:center;align-items:center;border-radius:", [0, 40], " ", [0, 40], " ", [0, 40], " ", [0, 40], ";display:-webkit-flex;display:flex;-webkit-flex:none;flex:none;-webkit-flex-direction:column;flex-direction:column;height:100%;-webkit-justify-content:space-between;justify-content:space-between;margin-right:", [0, 16], ";padding:", [0, 20], " ", [0, 0], ";width:", [0, 130], "}\n.", [1], "day-info.", [1], "data-v-552cf4c6{width:100%}\n.", [1], "day-info .", [1], "day-text.", [1], "data-v-552cf4c6{color:rgba(0,0,0,.65);font-size:", [0, 28], ";line-height:", [0, 36], ";margin-bottom:", [0, 8], ";text-align:center}\n.", [1], "day-info .", [1], "date-text.", [1], "data-v-552cf4c6{color:rgba(0,0,0,.65);font-size:", [0, 26], ";line-height:", [0, 36], ";text-align:center}\n.", [1], "day-text.", [1], "data-v-552cf4c6{color:#fff;font-size:", [0, 24], ";font-weight:500}\n.", [1], "weather-icon.", [1], "data-v-552cf4c6{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:center;justify-content:center;width:", [0, 100], "}\n.", [1], "weather-icon .", [1], "weather-icon-img.", [1], "data-v-552cf4c6{height:", [0, 54], ";margin-bottom:", [0, 8], ";width:", [0, 54], "}\n.", [1], "weather-icon-text.", [1], "data-v-552cf4c6{color:rgba(0,0,0,.65);font-size:", [0, 26], ";font-weight:700;line-height:", [0, 36], "}\n.", [1], "temperature-range.", [1], "data-v-552cf4c6{color:rgba(0,0,0,.85);font-size:", [0, 26], ";font-weight:700;line-height:", [0, 36], "}\n.", [1], "temp-low.", [1], "data-v-552cf4c6{color:#fff;font-size:", [0, 24], ";font-weight:500;min-width:", [0, 50], "}\n.", [1], "temp-bar.", [1], "data-v-552cf4c6{background:hsla(0,0%,100%,.3);border-radius:", [0, 4], ";-webkit-flex:1;flex:1;height:", [0, 8], ";margin:0 ", [0, 15], ";position:relative}\n.", [1], "temp-bar-fill.", [1], "data-v-552cf4c6{background:#ff6b6b;border-radius:", [0, 4], ";height:100%;position:absolute;top:0}\n.", [1], "temp-high.", [1], "data-v-552cf4c6{color:#fff;font-size:", [0, 24], ";font-weight:500;min-width:", [0, 50], ";text-align:right}\n", ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./union/components/weatherCard.wxss:1:2775)", {
    path: "./union/components/weatherCard.wxss"
  });
  __wxAppCode__['union/components/xjtuTextCard.wxss'] = setCssToHead([".", [1], "container.", [1], "data-v-95fcc798{width:", [0, 600], "}\n.", [1], "container .", [1], "title.", [1], "data-v-95fcc798{color:rgba(0,0,0,.85);font-size:", [0, 28], ";font-weight:700;line-height:", [0, 48], ";margin-bottom:", [0, 16], "}\n.", [1], "chart.", [1], "data-v-95fcc798{height:", [0, 90], ";width:", [0, 100], "}\nwx-canvas.", [1], "data-v-95fcc798{height:", [0, 200], "!important;margin-left:", [0, 100], ";width:", [0, 200], "!important}\n.", [1], "eva-enter.", [1], "data-v-95fcc798{background:linear-gradient(180deg,rgba(155,129,255,.2),hsla(0,0%,100%,.3));border-radius:", [0, 8], " ", [0, 40], " ", [0, 40], " ", [0, 40], ";box-shadow:", [0, 0], " ", [0, 8], " ", [0, 16], " ", [0, 0], " rgba(0,0,0,.05);height:", [0, 226], ";-webkit-justify-content:space-between;justify-content:space-between;overflow:hidden;padding:0 ", [0, 30], ";position:relative;width:100%}\n.", [1], "eva-enter .", [1], "eva-enter-l.", [1], "data-v-95fcc798,.", [1], "eva-enter.", [1], "data-v-95fcc798{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex}\n.", [1], "eva-enter .", [1], "eva-enter-l.", [1], "data-v-95fcc798{-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:center;justify-content:center}\n.", [1], "eva-enter .", [1], "eva-enter-l .", [1], "score-1.", [1], "data-v-95fcc798{color:#8666fd;font-size:", [0, 40], ";font-weight:700}\n.", [1], "eva-enter .", [1], "eva-enter-l .", [1], "score-msg.", [1], "data-v-95fcc798{color:rgba(0,0,0,.85);font-size:", [0, 24], ";line-height:", [0, 32], ";margin-top:", [0, 8], "}\n.", [1], "eva-enter .", [1], "eva-enter-r.", [1], "data-v-95fcc798{height:", [0, 200], ";margin-left:", [0, 20], ";position:relative}\n.", [1], "eva-enter .", [1], "eva-enter-r .", [1], "radar.", [1], "data-v-95fcc798{background:url(https://eshopfile.zhiyousx.com/173267923157567073.png) no-repeat;background-size:100% 100%;height:", [0, 135], ";margin-top:", [0, 50], ";width:", [0, 154], "}\n.", [1], "eva-enter .", [1], "eva-enter-r .", [1], "radar .", [1], "data.", [1], "data-v-95fcc798{background:linear-gradient(180deg,#ffe34c,#e666c5);-webkit-clip-path:polygon(50% 15%,100% 100%,0 100%);clip-path:polygon(50% 15%,100% 100%,0 100%);height:100%;width:100%}\n.", [1], "eva-enter .", [1], "eva-enter-r .", [1], "radar .", [1], "data-desc .", [1], "name.", [1], "data-v-95fcc798{color:rgba(0,0,0,.85);font-size:", [0, 20], ";line-height:", [0, 22], ";margin-bottom:", [0, 8], ";opacity:.8;text-align:center}\n.", [1], "eva-enter .", [1], "eva-enter-r .", [1], "radar .", [1], "data-desc .", [1], "score.", [1], "data-v-95fcc798{color:#8666fd;font-size:", [0, 20], ";line-height:", [0, 22], ";text-align:center}\n.", [1], "eva-enter .", [1], "eva-enter-r .", [1], "radar .", [1], "data-wonders.", [1], "data-v-95fcc798{left:", [0, 50], ";position:absolute;top:", [0, 0], "}\n.", [1], "eva-enter .", [1], "eva-enter-r .", [1], "radar .", [1], "data-setting.", [1], "data-v-95fcc798{bottom:", [0, 17], ";left:", [0, -85], ";position:absolute}\n.", [1], "eva-enter .", [1], "eva-enter-r .", [1], "radar .", [1], "data-service.", [1], "data-v-95fcc798{bottom:", [0, 17], ";position:absolute;right:", [0, -85], "}\n.", [1], "eva-enter .", [1], "enterIcon.", [1], "data-v-95fcc798{height:", [0, 30], ";width:", [0, 30], "}\n.", [1], "video-list.", [1], "data-v-95fcc798{margin-top:", [0, 32], ";overflow:auto;width:100%}\n.", [1], "video-list .", [1], "video-item.", [1], "data-v-95fcc798{border-radius:", [0, 16], " ", [0, 16], " ", [0, 16], " ", [0, 16], ";display:inline-block;height:", [0, 124], ";margin-right:", [0, 16], ";position:relative;vertical-align:bottom;width:", [0, 184], "}\n.", [1], "video-list .", [1], "video-item .", [1], "video-item-img.", [1], "data-v-95fcc798{border-radius:", [0, 16], " ", [0, 16], " ", [0, 16], " ", [0, 16], ";height:100%;width:100%}\n.", [1], "video-list .", [1], "video-item .", [1], "video-item-btn.", [1], "data-v-95fcc798{height:", [0, 50], ";left:50%;opacity:.8;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:", [0, 50], "}\n", ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./union/components/xjtuTextCard.wxss:1:216)", {
    path: "./union/components/xjtuTextCard.wxss"
  });
}
