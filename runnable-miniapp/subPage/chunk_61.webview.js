$gwx2_XC_58 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx2_XC_58 || [];

    function gz$gwx2_XC_58_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx2_XC_58_1) return __WXML_GLOBAL__.ops_cached.$gwx2_XC_58_1
      __WXML_GLOBAL__.ops_cached.$gwx2_XC_58_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, 'data-v-d8c789ae'])
        Z([3, 'top-box data-v-d8c789ae'])
        Z([3, 'body data-v-d8c789ae'])
        Z([3, 'box1 data-v-d8c789ae'])
        Z([3, 'box1-1 data-v-d8c789ae'])
        Z([3, 'box1-1-1 data-v-d8c789ae'])
        Z([3, '余额'])
        Z([3, 'box1-1-2 data-v-d8c789ae'])
        Z([3, '(元)'])
        Z([3, 'box1-2 data-v-d8c789ae'])
        Z([a, [
          [2, '||'],
          [
            [6],
            [
              [7],
              [3, 'wealthNum']
            ],
            [3, 'accountBalance']
          ],
          [1, 0]
        ]])
        Z([3, 'box1-3 data-v-d8c789ae'])
        Z([3, '累计收入'])
        Z([3, 'box1-4 data-v-d8c789ae'])
        Z([a, [
          [2, '||'],
          [
            [6],
            [
              [7],
              [3, 'wealthNum']
            ],
            [3, 'accountIncome']
          ],
          [1, 0]
        ]])
        Z([3, 'box2 data-v-d8c789ae'])
        Z([3, 'option data-v-d8c789ae'])
        Z([3, '结算中'])
        Z([3, 'value data-v-d8c789ae'])
        Z([a, [
          [2, '||'],
          [
            [6],
            [
              [7],
              [3, 'wealthNum']
            ],
            [3, 'brokerageIncome']
          ],
          [1, 0]
        ]])
        Z([3, 'box3 data-v-d8c789ae'])
        Z([3, '__e'])
        Z([
          [4],
          [
            [5],
            [
              [5],
              [
                [5],
                [1, 'box3-1']
              ],
              [1, 'data-v-d8c789ae']
            ],
            [
              [2, '?:'],
              [
                [2, '<'],
                [
                  [6],
                  [
                    [7],
                    [3, 'wealthNum']
                  ],
                  [3, 'accountBalance']
                ],
                [
                  [7],
                  [3, 'minNum']
                ]
              ],
              [1, 'dis'],
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
                          [1, 'withdrawal']
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
                [2, '<'],
                [
                  [6],
                  [
                    [7],
                    [3, 'wealthNum']
                  ],
                  [3, 'accountBalance']
                ],
                [
                  [7],
                  [3, 'minNum']
                ]
              ],
              [
                [2, '+'],
                [
                  [2, '+'],
                  [1, '满'],
                  [
                    [7],
                    [3, 'minNum']
                  ]
                ],
                [1, '提现']
              ],
              [1, '提现']
            ]
          ],
          [1, '']
        ]])
        Z([3, 'box3-2 data-v-d8c789ae'])
        Z([3, 'box3-2-1 data-v-d8c789ae'])
        Z([3, 'bt1 data-v-d8c789ae'])
        Z([3, '已提现'])
        Z([3, 'bt2 data-v-d8c789ae'])
        Z([a, [
          [2, '||'],
          [
            [6],
            [
              [7],
              [3, 'wealthNum']
            ],
            [3, 'accountWithdraw']
          ],
          [1, 0]
        ]])
        Z([
          [2, '!'],
          [
            [7],
            [3, 'isSubscribeFlag']
          ]
        ])
        Z(z[21])
        Z([3, 'jmpFooter data-v-d8c789ae'])
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
                          [1, 'jmpOfficial']
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
        Z([3, '关注「游陕西」公众号，实时接收业绩通知 \x3e\x3e'])
        Z([3, 'tab data-v-d8c789ae'])
        Z([3, '#3C3C3C'])
        Z([
          [7],
          [3, 'activeStyle']
        ])
        Z([3, '8'])
        Z([
          [7],
          [3, 'barStyle']
        ])
        Z([3, '120'])
        Z([3, 'rgba(0,0,0,0)'])
        Z([3, '__l'])
        Z(z[21])
        Z([1, true])
        Z(z[0])
        Z([
          [7],
          [3, 'currentIndex']
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
                  [1, '^change']
                ],
                [
                  [4],
                  [
                    [5],
                    [
                      [4],
                      [
                        [5],
                        [1, 'changecurr']
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ])
        Z([3, '#6B6B6B'])
        Z([1, false])
        Z([
          [7],
          [3, 'listTab']
        ])
        Z([3, 'a2133080-1'])
        Z([
          [2, '=='],
          [
            [7],
            [3, 'currentIndex']
          ],
          [1, 0]
        ])
        Z([3, 'list-box data-v-d8c789ae'])
        Z(z[45])
        Z(z[45])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [1, 'height:'],
            [
              [2, '+'],
              [
                [7],
                [3, 'scrollH']
              ],
              [1, 'px']
            ]
          ],
          [1, ';']
        ])
        Z([
          [2, '&&'],
          [
            [7],
            [3, 'withDrawList']
          ],
          [
            [6],
            [
              [7],
              [3, 'withDrawList']
            ],
            [1, 0]
          ]
        ])
        Z([3, 'cashRecord data-v-d8c789ae'])
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
        Z(z[60])
        Z([3, 'item data-v-d8c789ae'])
        Z([3, 'num data-v-d8c789ae'])
        Z([a, [
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
            [3, 'sum']
          ]
        ]])
        Z([3, 'time data-v-d8c789ae'])
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
          [3, 'createTime']
        ]])
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
                  [1, 'state']
                ],
                [1, 'data-v-d8c789ae']
              ],
              [
                [2, '?:'],
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
                    [3, 'status']
                  ],
                  [1, 0]
                ],
                [1, 'red'],
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
                    [6],
                    [
                      [7],
                      [3, 'item']
                    ],
                    [3, '$orig']
                  ],
                  [3, 'status']
                ],
                [1, 2]
              ],
              [1, 'fail'],
              [1, '']
            ]
          ]
        ])
        Z([a, [
          [6],
          [
            [7],
            [3, 'item']
          ],
          [3, 'm0']
        ]])
        Z(z[43])
        Z([3, 'true'])
        Z(z[0])
        Z([3, 'https://eshopfile.zhiyousx.com/nodetailed.png'])
        Z([3, '暂无提现记录'])
        Z([3, 'a2133080-2'])
        Z([
          [2, '=='],
          [
            [7],
            [3, 'currentIndex']
          ],
          [1, 1]
        ])
        Z(z[54])
        Z(z[45])
        Z(z[45])
        Z(z[57])
        Z([
          [2, '&&'],
          [
            [7],
            [3, 'incomeList']
          ],
          [
            [6],
            [
              [7],
              [3, 'incomeList']
            ],
            [1, 0]
          ]
        ])
        Z([3, 'detail data-v-d8c789ae'])
        Z(z[60])
        Z(z[61])
        Z([
          [7],
          [3, 'incomeList']
        ])
        Z(z[60])
        Z(z[64])
        Z([3, 'name data-v-d8c789ae'])
        Z([a, [
          [2, '?:'],
          [
            [2, '=='],
            [
              [6],
              [
                [7],
                [3, 'item']
              ],
              [3, 'brokerageType']
            ],
            [1, 2]
          ],
          [
            [6],
            [
              [7],
              [3, 'item']
            ],
            [3, 'activeName']
          ],
          [
            [6],
            [
              [7],
              [3, 'item']
            ],
            [3, 'itemTitle']
          ]
        ]])
        Z([
          [2, '=='],
          [
            [6],
            [
              [7],
              [3, 'item']
            ],
            [3, 'brokerageType']
          ],
          [1, 0]
        ])
        Z([3, 'n data-v-d8c789ae'])
        Z([3, '推广奖励：'])
        Z([3, 'cash data-v-d8c789ae'])
        Z([a, [
          [2, '+'],
          [1, '￥'],
          [
            [6],
            [
              [7],
              [3, 'item']
            ],
            [3, 'income']
          ]
        ]])
        Z([
          [2, '=='],
          [
            [6],
            [
              [7],
              [3, 'item']
            ],
            [3, 'brokerageType']
          ],
          [1, 2]
        ])
        Z(z[92])
        Z([3, '中奖金额：'])
        Z(z[94])
        Z([a, z[95][1]])
        Z([
          [2, '=='],
          [
            [6],
            [
              [7],
              [3, 'item']
            ],
            [3, 'brokerageType']
          ],
          [1, 1]
        ])
        Z(z[92])
        Z([3, '返现奖励：'])
        Z(z[94])
        Z([a, z[95][1]])
        Z(z[92])
        Z([a, [
          [2, '+'],
          [1, '奖励状态： '],
          [
            [6],
            [
              [4],
              [
                [5],
                [
                  [5],
                  [
                    [5],
                    [1, '进行中']
                  ],
                  [1, '已入账']
                ],
                [1, '已失败']
              ]
            ],
            [
              [6],
              [
                [7],
                [3, 'item']
              ],
              [3, 'status']
            ]
          ]
        ]])
        Z([
          [2, '!='],
          [
            [6],
            [
              [7],
              [3, 'item']
            ],
            [3, 'brokerageType']
          ],
          [1, 2]
        ])
        Z([3, 'n ordernum data-v-d8c789ae'])
        Z([a, [
          [2, '+'],
          [1, '订单金额：￥'],
          [
            [6],
            [
              [7],
              [3, 'item']
            ],
            [3, 'orderAmount']
          ]
        ]])
        Z([3, 'orderinfo data-v-d8c789ae'])
        Z(z[0])
        Z([3, '订单编号：'])
        Z(z[0])
        Z([a, [
          [6],
          [
            [7],
            [3, 'item']
          ],
          [3, 'orderId']
        ]])
        Z(z[111])
        Z(z[0])
        Z([3, '下单时间：'])
        Z(z[0])
        Z([a, [
          [6],
          [
            [7],
            [3, 'item']
          ],
          [3, 'createTime']
        ]])
        Z([3, 'state data-v-d8c789ae'])
        Z([a, [
          [6],
          [
            [7],
            [3, 'item']
          ],
          [3, 'orderStatusStr']
        ]])
        Z(z[43])
        Z(z[72])
        Z(z[0])
        Z(z[74])
        Z([3, '暂无收入明细'])
        Z([3, 'a2133080-3'])
      })(__WXML_GLOBAL__.ops_cached.$gwx2_XC_58_1);
      return __WXML_GLOBAL__.ops_cached.$gwx2_XC_58_1
    }
    __WXML_GLOBAL__.ops_set.$gwx2_XC_58 = z;
    __WXML_GLOBAL__.ops_init.$gwx2_XC_58 = true;
    var x = ['./subPage/pages/wealth/wealth.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx2_XC_58_1()
      var fSPG = _n('view')
      _rz(z, fSPG, 'class', 0, e, s, gg)
      var oVPG = _n('view')
      _rz(z, oVPG, 'class', 1, e, s, gg)
      var oXPG = _n('view')
      _rz(z, oXPG, 'class', 2, e, s, gg)
      var lYPG = _n('view')
      _rz(z, lYPG, 'class', 3, e, s, gg)
      var aZPG = _n('view')
      _rz(z, aZPG, 'class', 4, e, s, gg)
      var t1PG = _n('view')
      _rz(z, t1PG, 'class', 5, e, s, gg)
      var e2PG = _oz(z, 6, e, s, gg)
      _(t1PG, e2PG)
      _(aZPG, t1PG)
      var b3PG = _n('view')
      _rz(z, b3PG, 'class', 7, e, s, gg)
      var o4PG = _oz(z, 8, e, s, gg)
      _(b3PG, o4PG)
      _(aZPG, b3PG)
      _(lYPG, aZPG)
      var x5PG = _n('view')
      _rz(z, x5PG, 'class', 9, e, s, gg)
      var o6PG = _oz(z, 10, e, s, gg)
      _(x5PG, o6PG)
      _(lYPG, x5PG)
      var f7PG = _n('view')
      _rz(z, f7PG, 'class', 11, e, s, gg)
      var c8PG = _oz(z, 12, e, s, gg)
      _(f7PG, c8PG)
      _(lYPG, f7PG)
      var h9PG = _n('view')
      _rz(z, h9PG, 'class', 13, e, s, gg)
      var o0PG = _oz(z, 14, e, s, gg)
      _(h9PG, o0PG)
      _(lYPG, h9PG)
      _(oXPG, lYPG)
      var cAQG = _n('view')
      _rz(z, cAQG, 'class', 15, e, s, gg)
      var oBQG = _n('text')
      _rz(z, oBQG, 'class', 16, e, s, gg)
      var lCQG = _oz(z, 17, e, s, gg)
      _(oBQG, lCQG)
      _(cAQG, oBQG)
      var aDQG = _n('text')
      _rz(z, aDQG, 'class', 18, e, s, gg)
      var tEQG = _oz(z, 19, e, s, gg)
      _(aDQG, tEQG)
      _(cAQG, aDQG)
      _(oXPG, cAQG)
      var eFQG = _n('view')
      _rz(z, eFQG, 'class', 20, e, s, gg)
      var bGQG = _mz(z, 'view', ['bindtap', 21, 'class', 1, 'data-event-opts', 2], [], e, s, gg)
      var oHQG = _oz(z, 24, e, s, gg)
      _(bGQG, oHQG)
      _(eFQG, bGQG)
      var xIQG = _n('view')
      _rz(z, xIQG, 'class', 25, e, s, gg)
      var oJQG = _n('view')
      _rz(z, oJQG, 'class', 26, e, s, gg)
      var fKQG = _n('view')
      _rz(z, fKQG, 'class', 27, e, s, gg)
      var cLQG = _oz(z, 28, e, s, gg)
      _(fKQG, cLQG)
      _(oJQG, fKQG)
      var hMQG = _n('view')
      _rz(z, hMQG, 'class', 29, e, s, gg)
      var oNQG = _oz(z, 30, e, s, gg)
      _(hMQG, oNQG)
      _(oJQG, hMQG)
      _(xIQG, oJQG)
      _(eFQG, xIQG)
      _(oXPG, eFQG)
      _(oVPG, oXPG)
      var cWPG = _v()
      _(oVPG, cWPG)
      if (_oz(z, 31, e, s, gg)) {
        cWPG.wxVkey = 1
        var cOQG = _mz(z, 'view', ['bindtap', 32, 'class', 1, 'data-event-opts', 2], [], e, s, gg)
        var oPQG = _oz(z, 35, e, s, gg)
        _(cOQG, oPQG)
        _(cWPG, cOQG)
      }
      cWPG.wxXCkey = 1
      _(fSPG, oVPG)
      var lQQG = _n('view')
      _rz(z, lQQG, 'class', 36, e, s, gg)
      var aRQG = _mz(z, 'u-tabs', ['activeColor', 37, 'activeItemStyle', 1, 'barHeight', 2, 'barStyle', 3, 'barWidth', 4, 'bgColor', 5, 'bind:__l', 6, 'bind:change', 7, 'bold', 8, 'class', 9, 'current', 10, 'data-event-opts', 11, 'inactiveColor', 12, 'isScroll', 13, 'list', 14, 'vueId', 15], [], e, s, gg)
      _(lQQG, aRQG)
      _(fSPG, lQQG)
      var cTPG = _v()
      _(fSPG, cTPG)
      if (_oz(z, 53, e, s, gg)) {
        cTPG.wxVkey = 1
        var tSQG = _mz(z, 'scroll-view', ['class', 54, 'scrollWithAnimation', 1, 'scrollY', 2, 'style', 3], [], e, s, gg)
        var eTQG = _v()
        _(tSQG, eTQG)
        if (_oz(z, 58, e, s, gg)) {
          eTQG.wxVkey = 1
          var bUQG = _n('view')
          _rz(z, bUQG, 'class', 59, e, s, gg)
          var oVQG = _v()
          _(bUQG, oVQG)
          var xWQG = function(fYQG, oXQG, cZQG, gg) {
            var o2QG = _n('view')
            _rz(z, o2QG, 'class', 64, fYQG, oXQG, gg)
            var c3QG = _n('text')
            _rz(z, c3QG, 'class', 65, fYQG, oXQG, gg)
            var o4QG = _oz(z, 66, fYQG, oXQG, gg)
            _(c3QG, o4QG)
            _(o2QG, c3QG)
            var l5QG = _n('text')
            _rz(z, l5QG, 'class', 67, fYQG, oXQG, gg)
            var a6QG = _oz(z, 68, fYQG, oXQG, gg)
            _(l5QG, a6QG)
            _(o2QG, l5QG)
            var t7QG = _n('text')
            _rz(z, t7QG, 'class', 69, fYQG, oXQG, gg)
            var e8QG = _oz(z, 70, fYQG, oXQG, gg)
            _(t7QG, e8QG)
            _(o2QG, t7QG)
            _(cZQG, o2QG)
            return cZQG
          }
          oVQG.wxXCkey = 2
          _2z(z, 62, xWQG, e, s, gg, oVQG, 'item', 'index', 'index')
          _(eTQG, bUQG)
        } else {
          eTQG.wxVkey = 2
          var b9QG = _mz(z, 'empty-state', ['bind:__l', 71, 'catchtouchmove', 1, 'class', 2, 'imgUrl', 3, 'text', 4, 'vueId', 5], [], e, s, gg)
          _(eTQG, b9QG)
        }
        eTQG.wxXCkey = 1
        eTQG.wxXCkey = 3
        _(cTPG, tSQG)
      }
      var hUPG = _v()
      _(fSPG, hUPG)
      if (_oz(z, 77, e, s, gg)) {
        hUPG.wxVkey = 1
        var o0QG = _mz(z, 'scroll-view', ['class', 78, 'scrollWithAnimation', 1, 'scrollY', 2, 'style', 3], [], e, s, gg)
        var xARG = _v()
        _(o0QG, xARG)
        if (_oz(z, 82, e, s, gg)) {
          xARG.wxVkey = 1
          var oBRG = _n('view')
          _rz(z, oBRG, 'class', 83, e, s, gg)
          var fCRG = _v()
          _(oBRG, fCRG)
          var cDRG = function(oFRG, hERG, cGRG, gg) {
            var lIRG = _n('view')
            _rz(z, lIRG, 'class', 88, oFRG, hERG, gg)
            var oNRG = _n('view')
            _rz(z, oNRG, 'class', 89, oFRG, hERG, gg)
            var xORG = _oz(z, 90, oFRG, hERG, gg)
            _(oNRG, xORG)
            _(lIRG, oNRG)
            var aJRG = _v()
            _(lIRG, aJRG)
            if (_oz(z, 91, oFRG, hERG, gg)) {
              aJRG.wxVkey = 1
              var oPRG = _n('view')
              _rz(z, oPRG, 'class', 92, oFRG, hERG, gg)
              var fQRG = _oz(z, 93, oFRG, hERG, gg)
              _(oPRG, fQRG)
              var cRRG = _n('text')
              _rz(z, cRRG, 'class', 94, oFRG, hERG, gg)
              var hSRG = _oz(z, 95, oFRG, hERG, gg)
              _(cRRG, hSRG)
              _(oPRG, cRRG)
              _(aJRG, oPRG)
            }
            var tKRG = _v()
            _(lIRG, tKRG)
            if (_oz(z, 96, oFRG, hERG, gg)) {
              tKRG.wxVkey = 1
              var oTRG = _n('view')
              _rz(z, oTRG, 'class', 97, oFRG, hERG, gg)
              var cURG = _oz(z, 98, oFRG, hERG, gg)
              _(oTRG, cURG)
              var oVRG = _n('text')
              _rz(z, oVRG, 'class', 99, oFRG, hERG, gg)
              var lWRG = _oz(z, 100, oFRG, hERG, gg)
              _(oVRG, lWRG)
              _(oTRG, oVRG)
              _(tKRG, oTRG)
            }
            var eLRG = _v()
            _(lIRG, eLRG)
            if (_oz(z, 101, oFRG, hERG, gg)) {
              eLRG.wxVkey = 1
              var aXRG = _n('view')
              _rz(z, aXRG, 'class', 102, oFRG, hERG, gg)
              var tYRG = _oz(z, 103, oFRG, hERG, gg)
              _(aXRG, tYRG)
              var eZRG = _n('text')
              _rz(z, eZRG, 'class', 104, oFRG, hERG, gg)
              var b1RG = _oz(z, 105, oFRG, hERG, gg)
              _(eZRG, b1RG)
              _(aXRG, eZRG)
              _(eLRG, aXRG)
            }
            var o2RG = _n('view')
            _rz(z, o2RG, 'class', 106, oFRG, hERG, gg)
            var x3RG = _oz(z, 107, oFRG, hERG, gg)
            _(o2RG, x3RG)
            _(lIRG, o2RG)
            var bMRG = _v()
            _(lIRG, bMRG)
            if (_oz(z, 108, oFRG, hERG, gg)) {
              bMRG.wxVkey = 1
              var o4RG = _n('view')
              _rz(z, o4RG, 'class', 109, oFRG, hERG, gg)
              var f5RG = _oz(z, 110, oFRG, hERG, gg)
              _(o4RG, f5RG)
              _(bMRG, o4RG)
            }
            var c6RG = _n('view')
            _rz(z, c6RG, 'class', 111, oFRG, hERG, gg)
            var h7RG = _n('text')
            _rz(z, h7RG, 'class', 112, oFRG, hERG, gg)
            var o8RG = _oz(z, 113, oFRG, hERG, gg)
            _(h7RG, o8RG)
            _(c6RG, h7RG)
            var c9RG = _n('text')
            _rz(z, c9RG, 'class', 114, oFRG, hERG, gg)
            var o0RG = _oz(z, 115, oFRG, hERG, gg)
            _(c9RG, o0RG)
            _(c6RG, c9RG)
            _(lIRG, c6RG)
            var lASG = _n('view')
            _rz(z, lASG, 'class', 116, oFRG, hERG, gg)
            var aBSG = _n('text')
            _rz(z, aBSG, 'class', 117, oFRG, hERG, gg)
            var tCSG = _oz(z, 118, oFRG, hERG, gg)
            _(aBSG, tCSG)
            _(lASG, aBSG)
            var eDSG = _n('text')
            _rz(z, eDSG, 'class', 119, oFRG, hERG, gg)
            var bESG = _oz(z, 120, oFRG, hERG, gg)
            _(eDSG, bESG)
            _(lASG, eDSG)
            _(lIRG, lASG)
            var oFSG = _n('view')
            _rz(z, oFSG, 'class', 121, oFRG, hERG, gg)
            var xGSG = _oz(z, 122, oFRG, hERG, gg)
            _(oFSG, xGSG)
            _(lIRG, oFSG)
            aJRG.wxXCkey = 1
            tKRG.wxXCkey = 1
            eLRG.wxXCkey = 1
            bMRG.wxXCkey = 1
            _(cGRG, lIRG)
            return cGRG
          }
          fCRG.wxXCkey = 2
          _2z(z, 86, cDRG, e, s, gg, fCRG, 'item', 'index', 'index')
          _(xARG, oBRG)
        } else {
          xARG.wxVkey = 2
          var oHSG = _mz(z, 'empty-state', ['bind:__l', 123, 'catchtouchmove', 1, 'class', 2, 'imgUrl', 3, 'text', 4, 'vueId', 5], [], e, s, gg)
          _(xARG, oHSG)
        }
        xARG.wxXCkey = 1
        xARG.wxXCkey = 3
        _(hUPG, o0QG)
      }
      cTPG.wxXCkey = 1
      cTPG.wxXCkey = 3
      hUPG.wxXCkey = 1
      hUPG.wxXCkey = 3
      _(r, fSPG)
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
        g = "$gwx2_XC_58";
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
if (__vd_version_info__.delayedGwx || false) $gwx2_XC_58();
if (__vd_version_info__.delayedGwx) __wxAppCode__['subPage/pages/wealth/wealth.wxml'] = [$gwx2_XC_58, './subPage/pages/wealth/wealth.wxml'];
else __wxAppCode__['subPage/pages/wealth/wealth.wxml'] = $gwx2_XC_58('./subPage/pages/wealth/wealth.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__['subPage/pages/wealth/wealth.wxss'] = setCssToHead(["body{background:#fafafa}\n.", [1], "u-tabs.", [1], "data-v-d8c789ae{background:none}\n.", [1], "tab.", [1], "data-v-d8c789ae{width:25%}\n.", [1], "top-box.", [1], "data-v-d8c789ae{background:#fff1ed;border-radius:20px;font-family:Source Han Sans CN;line-height:1;margin:", [0, 20], ";width:", [0, 710], "}\n.", [1], "top-box .", [1], "body.", [1], "data-v-d8c789ae{display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;height:", [0, 312], "}\n.", [1], "top-box .", [1], "body .", [1], "box1.", [1], "data-v-d8c789ae{padding:", [0, 53], " ", [0, 50], " ", [0, 40], ";width:", [0, 240], "}\n.", [1], "top-box .", [1], "body .", [1], "box1 .", [1], "box1-1.", [1], "data-v-d8c789ae{color:#262933;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;font-weight:400}\n.", [1], "top-box .", [1], "body .", [1], "box1 .", [1], "box1-1 .", [1], "box1-1-1.", [1], "data-v-d8c789ae{font-size:", [0, 32], "}\n.", [1], "top-box .", [1], "body .", [1], "box1 .", [1], "box1-1 .", [1], "box1-1-2.", [1], "data-v-d8c789ae{font-size:", [0, 28], ";margin-top:", [0, 4], "}\n.", [1], "top-box .", [1], "body .", [1], "box1 .", [1], "box1-2.", [1], "data-v-d8c789ae{color:#f15252;font-size:", [0, 60], ";font-weight:700;margin-top:", [0, 17], "}\n.", [1], "top-box .", [1], "body .", [1], "box1 .", [1], "box1-3.", [1], "data-v-d8c789ae{color:#818181;font-family:Microsoft YaHei;font-size:", [0, 24], ";font-weight:400;margin-top:", [0, 40], ";text-align:center}\n.", [1], "top-box .", [1], "body .", [1], "box1 .", [1], "box1-4.", [1], "data-v-d8c789ae{color:#44495b;font-family:Microsoft YaHei;font-size:", [0, 26], ";font-weight:400;margin-top:", [0, 23], ";text-align:center}\n.", [1], "top-box .", [1], "body .", [1], "box2.", [1], "data-v-d8c789ae{-webkit-align-items:center;align-items:center;border:", [0, 1], " solid #ebcbc2;border-width:0 1px;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;height:", [0, 92], ";margin-top:", [0, 190], ";width:", [0, 229], "}\n.", [1], "top-box .", [1], "body .", [1], "box2 .", [1], "option.", [1], "data-v-d8c789ae{color:#f15252;font-size:", [0, 24], ";margin-top:", [0, 16], "}\n.", [1], "top-box .", [1], "body .", [1], "box2 .", [1], "value.", [1], "data-v-d8c789ae{color:#44495b;font-size:", [0, 26], ";margin-top:", [0, 23], "}\n.", [1], "top-box .", [1], "body .", [1], "box3.", [1], "data-v-d8c789ae{width:", [0, 239], "}\n.", [1], "top-box .", [1], "body .", [1], "box3 .", [1], "box3-1.", [1], "data-v-d8c789ae{background:linear-gradient(52deg,#fc4a7c,#ff5411);border-radius:", [0, 30], ";color:#fff;font-size:", [0, 26], ";font-weight:400;height:", [0, 60], ";line-height:", [0, 60], ";margin:", [0, 78], " auto 0;text-align:center;width:", [0, 160], "}\n.", [1], "top-box .", [1], "body .", [1], "box3 .", [1], "box3-1.", [1], "dis.", [1], "data-v-d8c789ae{background:linear-gradient(52deg,#ffc07c,#ff9888);box-shadow:0 ", [0, 5], " ", [0, 2], " ", [0, 0], " rgba(255,192,155,.5)}\n.", [1], "top-box .", [1], "body .", [1], "box3 .", [1], "box3-2.", [1], "data-v-d8c789ae{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;-webkit-justify-content:space-between;justify-content:space-between;margin-top:", [0, 62], "}\n.", [1], "top-box .", [1], "body .", [1], "box3 .", [1], "box3-2 .", [1], "box3-2-1.", [1], "data-v-d8c789ae{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:center;justify-content:center;width:100%}\n.", [1], "top-box .", [1], "body .", [1], "box3 .", [1], "box3-2 .", [1], "box3-2-1 .", [1], "bt1.", [1], "data-v-d8c789ae{color:#818181;font-family:Microsoft YaHei;font-size:", [0, 24], ";font-weight:400}\n.", [1], "top-box .", [1], "body .", [1], "box3 .", [1], "box3-2 .", [1], "box3-2-1 .", [1], "bt2.", [1], "data-v-d8c789ae{color:#44495b;font-family:Microsoft YaHei;font-size:", [0, 26], ";font-weight:400;margin-top:", [0, 22], "}\n.", [1], "top-box .", [1], "body .", [1], "box3 .", [1], "box3-2 .", [1], "box3-2-2.", [1], "data-v-d8c789ae{height:", [0, 9.4], ";margin-right:", [0, 50], ";-webkit-transform:rotate(-90deg);transform:rotate(-90deg);width:", [0, 18.4], "}\n.", [1], "top-box .", [1], "jmpFooter.", [1], "data-v-d8c789ae{border-top:", [0, 2], " solid #ededed;color:rgba(30,27,25,.6);font-size:", [0, 26], ";margin:0 ", [0, 50], ";padding:", [0, 18], " 0}\n.", [1], "tab-box.", [1], "data-v-d8c789ae{display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;-webkit-justify-content:space-between;justify-content:space-between;line-height:1;margin:", [0, 47], " ", [0, 26], " ", [0, 16], " ", [0, 29], "}\n.", [1], "tab-box .", [1], "left.", [1], "data-v-d8c789ae{color:#909090;font-family:Microsoft YaHei;font-size:", [0, 28], ";font-weight:400}\n.", [1], "tab-box .", [1], "right.", [1], "data-v-d8c789ae{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row}\n.", [1], "tab-box .", [1], "right .", [1], "right-1.", [1], "data-v-d8c789ae{color:#6b6b6b;font-family:Microsoft YaHei;font-size:", [0, 26], ";font-weight:400}\n.", [1], "tab-box .", [1], "right .", [1], "right-2.", [1], "data-v-d8c789ae{height:", [0, 13], ";margin-left:", [0, 7], ";width:", [0, 23], "}\n.", [1], "modal.", [1], "data-v-d8c789ae{height:100%;position:fixed;top:0;width:100%;z-index:10}\n.", [1], "tabModal.", [1], "data-v-d8c789ae{background:#fff;border-radius:", [0, 20], ";box-shadow:", [0, 0], " ", [0, 0], " ", [0, 20], " ", [0, 0], " rgba(0,0,0,.05);font-family:Microsoft YaHei;font-size:", [0, 26], ";font-weight:400;height:", [0, 300], ";position:fixed;right:", [0, 20], ";text-align:center;width:", [0, 160], ";z-index:20}\n.", [1], "tabModal .", [1], "tabModal-1.", [1], "data-v-d8c789ae,.", [1], "tabModal .", [1], "tabModal-2.", [1], "data-v-d8c789ae,.", [1], "tabModal .", [1], "tabModal-3.", [1], "data-v-d8c789ae{color:#6b6b6b;line-height:", [0, 100], ";width:100%}\n.", [1], "list-box.", [1], "data-v-d8c789ae{box-sizing:border-box;margin-bottom:", [0, 10], ";padding:0 ", [0, 20], ";width:", [0, 750], "}\n.", [1], "list-box .", [1], "cashRecord.", [1], "data-v-d8c789ae{width:", [0, 710], "}\n.", [1], "list-box .", [1], "cashRecord .", [1], "item.", [1], "data-v-d8c789ae{-webkit-align-items:center;align-items:center;background:#fff;border-radius:", [0, 20], ";display:-webkit-flex;display:flex;height:", [0, 120], ";margin-bottom:", [0, 10], ";padding:0 ", [0, 34], " 0 ", [0, 48], "}\n.", [1], "list-box .", [1], "cashRecord .", [1], "item.", [1], "data-v-d8c789ae:first-child{margin-top:", [0, 10], "}\n.", [1], "list-box .", [1], "cashRecord .", [1], "item .", [1], "num.", [1], "data-v-d8c789ae{color:#e94403;font-size:", [0, 36], ";width:", [0, 155], "}\n.", [1], "list-box .", [1], "cashRecord .", [1], "item .", [1], "time.", [1], "data-v-d8c789ae{color:#acacac;font-size:", [0, 24], ";padding-top:", [0, 4], ";width:", [0, 330], "}\n.", [1], "list-box .", [1], "cashRecord .", [1], "item .", [1], "state.", [1], "data-v-d8c789ae{color:#3c3c3c;font-size:", [0, 28], ";text-align:right;width:", [0, 225], "}\n.", [1], "list-box .", [1], "cashRecord .", [1], "item .", [1], "state.", [1], "red.", [1], "data-v-d8c789ae{color:#fe5342}\n.", [1], "list-box .", [1], "cashRecord .", [1], "item .", [1], "state.", [1], "fail.", [1], "data-v-d8c789ae{color:#9d9d9d}\n.", [1], "list-box .", [1], "detail.", [1], "data-v-d8c789ae{width:", [0, 710], "}\n.", [1], "list-box .", [1], "detail .", [1], "item.", [1], "data-v-d8c789ae{background:#fff;border-radius:", [0, 20], ";margin-bottom:", [0, 10], ";padding:", [0, 34], " ", [0, 30], " ", [0, 43], ";position:relative}\n.", [1], "list-box .", [1], "detail .", [1], "item .", [1], "state.", [1], "data-v-d8c789ae{background:#fe5244;border-radius:", [0, 10], ";color:#fff;font-size:", [0, 26], ";height:", [0, 40], ";line-height:", [0, 40], ";padding:0 ", [0, 22], ";position:absolute;right:", [0, 30], ";top:", [0, 34], "}\n.", [1], "list-box .", [1], "detail .", [1], "item .", [1], "name.", [1], "data-v-d8c789ae{color:#4a4a4a;font-size:", [0, 30], ";line-height:", [0, 40], ";margin-bottom:", [0, 15], ";width:", [0, 478], "}\n.", [1], "list-box .", [1], "detail .", [1], "item .", [1], "orderinfo wx-text.", [1], "data-v-d8c789ae{color:#878787;font-size:", [0, 24], "}\n.", [1], "list-box .", [1], "detail .", [1], "item .", [1], "orderinfo wx-text.", [1], "data-v-d8c789ae:first-child{margin-right:", [0, 20], "}\n.", [1], "list-box .", [1], "detail .", [1], "item .", [1], "n.", [1], "data-v-d8c789ae{color:#333;font-size:", [0, 26], ";margin-bottom:", [0, 10], "}\n.", [1], "list-box .", [1], "detail .", [1], "item .", [1], "n .", [1], "cash.", [1], "data-v-d8c789ae{color:#e94403}\n.", [1], "list-box .", [1], "detail .", [1], "item .", [1], "n.", [1], "ordernum.", [1], "data-v-d8c789ae{margin-bottom:", [0, 25], "}\n", ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./subPage/pages/wealth/wealth.wxss:1:5823)", {
    path: "./subPage/pages/wealth/wealth.wxss"
  });
}
