$gwx2_XC_44 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx2_XC_44 || [];

    function gz$gwx2_XC_44_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx2_XC_44_1) return __WXML_GLOBAL__.ops_cached.$gwx2_XC_44_1
      __WXML_GLOBAL__.ops_cached.$gwx2_XC_44_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([
          [6],
          [
            [7],
            [3, 'detailInfo']
          ],
          [3, 'orderId']
        ])
        Z([3, 'box data-v-28eb88bb'])
        Z([3, 'page-box data-v-28eb88bb'])
        Z([3, 'bg-box data-v-28eb88bb'])
        Z([3, 'bgText data-v-28eb88bb'])
        Z([
          [2, '!='],
          [
            [6],
            [
              [7],
              [3, 'detailInfo']
            ],
            [3, 'subscribeEditStatus']
          ],
          [1, 1]
        ])
        Z([3, 'state data-v-28eb88bb'])
        Z([a, [
          [6],
          [
            [7],
            [3, '$root']
          ],
          [3, 'm0']
        ]])
        Z(z[6])
        Z([3, '待处理'])
        Z([
          [2, '=='],
          [
            [6],
            [
              [7],
              [3, 'detailInfo']
            ],
            [3, 'subscribeEditStatus']
          ],
          [1, 1]
        ])
        Z([3, 'tips data-v-28eb88bb'])
        Z([3, '雪场预计15分钟内确认，请耐心等待'])
        Z([
          [2, '=='],
          [
            [6],
            [
              [7],
              [3, 'detailInfo']
            ],
            [3, 'status']
          ],
          [1, 0]
        ])
        Z(z[11])
        Z([3, '雪场预计提前1天放置雪具入柜，请耐心等待'])
        Z([
          [2, '=='],
          [
            [6],
            [
              [7],
              [3, 'detailInfo']
            ],
            [3, 'status']
          ],
          [1, 1]
        ])
        Z(z[11])
        Z([3, '到达雪场后扫柜身二维码，输入激活码激活柜子'])
        Z([
          [2, '=='],
          [
            [6],
            [
              [7],
              [3, 'detailInfo']
            ],
            [3, 'status']
          ],
          [1, 3]
        ])
        Z(z[11])
        Z([3, '押金扣除消费后退回原支付账号'])
        Z([3, 'info m-top data-v-28eb88bb'])
        Z([3, 'itemBox data-v-28eb88bb'])
        Z([3, 'title data-v-28eb88bb'])
        Z([a, [
          [6],
          [
            [7],
            [3, 'detailInfo']
          ],
          [3, 'subscribeProject']
        ]])
        Z([3, 'price data-v-28eb88bb'])
        Z([a, [
          [2, '+'],
          [1, '￥'],
          [
            [6],
            [
              [7],
              [3, 'detailInfo']
            ],
            [3, 'deposit']
          ]
        ]])
        Z([3, 'topTitle data-v-28eb88bb'])
        Z([a, [
          [2, '+'],
          [1, '门票订单-'],
          [
            [6],
            [
              [7],
              [3, 'detailInfo']
            ],
            [3, 'orderId']
          ]
        ]])
        Z([3, 'num data-v-28eb88bb'])
        Z([a, [
          [2, '+'],
          [1, 'x '],
          [
            [6],
            [
              [7],
              [3, 'detailInfo']
            ],
            [3, 'subscribeNumber']
          ]
        ]])
        Z(z[23])
        Z([3, 'name data-v-28eb88bb'])
        Z([3, '实付押金'])
        Z([3, 'value data-v-28eb88bb'])
        Z([a, [
          [2, '+'],
          [1, '￥'],
          [
            [6],
            [
              [7],
              [3, 'detailInfo']
            ],
            [3, 'depositSum']
          ]
        ]])
        Z([
          [6],
          [
            [7],
            [3, 'detailInfo']
          ],
          [3, 'refundAmount']
        ])
        Z(z[23])
        Z(z[33])
        Z([3, 'data-v-28eb88bb'])
        Z([3, '实退押金'])
        Z([
          [6],
          [
            [7],
            [3, 'detailInfo']
          ],
          [3, 'depositRemarks']
        ])
        Z([3, '__e'])
        Z([3, 'show data-v-28eb88bb'])
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
                          [1, 'showMask']
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
        Z([3, '查看\x3e'])
        Z(z[35])
        Z([a, [
          [2, '+'],
          [1, '￥'],
          [
            [6],
            [
              [7],
              [3, 'detailInfo']
            ],
            [3, 'refundAmount']
          ]
        ]])
        Z([3, 'hotel-box data-v-28eb88bb'])
        Z([3, 'hotel-title m40 data-v-28eb88bb'])
        Z(z[40])
        Z([3, '预约明细'])
        Z([3, 'index'])
        Z([3, 'item'])
        Z([
          [6],
          [
            [7],
            [3, '$root']
          ],
          [3, 'l1']
        ])
        Z(z[53])
        Z([3, 'user data-v-28eb88bb'])
        Z([3, 'user-top data-v-28eb88bb'])
        Z(z[33])
        Z([a, [
          [6],
          [
            [7],
            [3, 'item']
          ],
          [3, 'm1']
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
          [3, 'price']
        ])
        Z(z[35])
        Z([a, [
          [2, '+'],
          [1, '¥'],
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
          ]
        ]])
        Z([3, 'user-it data-v-28eb88bb'])
        Z([3, 'i'])
        Z([3, 'it'])
        Z([
          [6],
          [
            [7],
            [3, 'item']
          ],
          [3, 'l0']
        ])
        Z(z[65])
        Z([3, 'it data-v-28eb88bb'])
        Z([3, 'it-name data-v-28eb88bb'])
        Z([a, [
          [2, '+'],
          [
            [2, '+'],
            [1, '预约人'],
            [
              [2, '+'],
              [
                [7],
                [3, 'i']
              ],
              [1, 1]
            ]
          ],
          [1, ':']
        ]])
        Z([3, 'it-info data-v-28eb88bb'])
        Z([a, [
          [6],
          [
            [7],
            [3, 'it']
          ],
          [3, 'm2']
        ]])
        Z(z[50])
        Z(z[40])
        Z([
          [2, '&&'],
          [
            [2, '!='],
            [
              [6],
              [
                [7],
                [3, 'detailInfo']
              ],
              [3, 'subscribeEditStatus']
            ],
            [1, 1]
          ],
          [
            [2, '||'],
            [
              [2, '=='],
              [
                [6],
                [
                  [7],
                  [3, 'detailInfo']
                ],
                [3, 'status']
              ],
              [1, 1]
            ],
            [
              [2, '=='],
              [
                [6],
                [
                  [7],
                  [3, 'detailInfo']
                ],
                [3, 'status']
              ],
              [1, 0]
            ]
          ]
        ])
        Z(z[43])
        Z([3, 'addbook data-v-28eb88bb'])
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
                            [1, 'jumpToGear']
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
                              [1, 'detailInfo.orderId']
                            ],
                            [1, 'subscribeId']
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
        Z([3, '增加预约'])
        Z(z[11])
        Z([3, '*明细仅作为预约登记记录，实际消费以景区为准'])
        Z(z[49])
        Z([3, 'hotel-title m30 data-v-28eb88bb'])
        Z([3, '雪柜信息'])
        Z([3, 'hotel-table data-v-28eb88bb'])
        Z([3, 'hotel-th th data-v-28eb88bb'])
        Z([3, 't data-v-28eb88bb'])
        Z([3, '游客信息'])
        Z(z[88])
        Z([3, '柜号'])
        Z(z[88])
        Z([3, '激活码'])
        Z([3, 'd-table data-v-28eb88bb'])
        Z(z[53])
        Z(z[54])
        Z([
          [6],
          [
            [7],
            [3, 'detailInfo']
          ],
          [3, 'peopleLockersVoList']
        ])
        Z([3, '*this'])
        Z([3, 'd-tr data-v-28eb88bb'])
        Z([
          [2, '||'],
          [
            [2, '=='],
            [
              [6],
              [
                [7],
                [3, 'detailInfo']
              ],
              [3, 'status']
            ],
            [1, 2]
          ],
          [
            [2, '=='],
            [
              [6],
              [
                [7],
                [3, 'detailInfo']
              ],
              [3, 'status']
            ],
            [1, 4]
          ]
        ])
        Z([3, 'd-td data-v-28eb88bb'])
        Z([3, 'd-table tableType data-v-28eb88bb'])
        Z(z[99])
        Z([3, 'd-td tableType data-v-28eb88bb'])
        Z([3, 'width:33.3%;'])
        Z([a, [
          [2, '+'],
          [
            [2, '+'],
            [1, '预约人'],
            [
              [2, '+'],
              [
                [7],
                [3, 'index']
              ],
              [1, 1]
            ]
          ],
          [1, '']
        ]])
        Z([3, 'd-td tableType border-left color data-v-28eb88bb'])
        Z([3, '已取消'])
        Z(z[19])
        Z(z[101])
        Z(z[102])
        Z(z[99])
        Z(z[104])
        Z(z[105])
        Z([a, z[106][1]])
        Z(z[107])
        Z([3, '已完成'])
        Z(z[101])
        Z([
          [2, '&&'],
          [
            [6],
            [
              [7],
              [3, 'item']
            ],
            [3, 'lockersNo']
          ],
          [
            [6],
            [
              [7],
              [3, 'item']
            ],
            [3, 'lockersPassword']
          ]
        ])
        Z(z[94])
        Z(z[99])
        Z(z[104])
        Z(z[105])
        Z([a, [
          [2, '+'],
          [1, '预约人'],
          [
            [2, '+'],
            [
              [7],
              [3, 'index']
            ],
            [1, 1]
          ]
        ]])
        Z([3, 'd-td tableType border-left data-v-28eb88bb'])
        Z([a, [
          [6],
          [
            [7],
            [3, 'item']
          ],
          [3, 'lockersNo']
        ]])
        Z(z[125])
        Z([a, [
          [6],
          [
            [7],
            [3, 'item']
          ],
          [3, 'lockersPassword']
        ]])
        Z(z[102])
        Z(z[99])
        Z(z[104])
        Z(z[105])
        Z([a, z[106][1]])
        Z(z[13])
        Z(z[107])
        Z([3, '待入柜'])
        Z(z[107])
        Z([3, '请联系服务台获取'])
        Z([3, 'hotel-list-box data-v-28eb88bb'])
        Z([3, 'item data-v-28eb88bb'])
        Z(z[24])
        Z([3, '产品信息：'])
        Z(z[35])
        Z([a, [
          [6],
          [
            [7],
            [3, 'detailInfo']
          ],
          [3, 'itemTitle']
        ]])
        Z(z[140])
        Z(z[24])
        Z([3, '使用时间：'])
        Z(z[35])
        Z([a, [
          [7],
          [3, 'day']
        ]])
        Z(z[140])
        Z(z[24])
        Z([3, '预计到达：'])
        Z(z[35])
        Z([a, [
          [7],
          [3, 'time']
        ]])
        Z(z[49])
        Z([3, 'hotel-title m20 data-v-28eb88bb'])
        Z([3, '订单信息'])
        Z(z[139])
        Z(z[140])
        Z(z[24])
        Z([3, '订单编号：'])
        Z(z[35])
        Z([a, [
          [6],
          [
            [7],
            [3, 'detailInfo']
          ],
          [3, 'id']
        ]])
        Z(z[140])
        Z(z[24])
        Z([3, '下单时间：'])
        Z(z[35])
        Z([a, [
          [6],
          [
            [7],
            [3, 'detailInfo']
          ],
          [3, 'createTime']
        ]])
        Z(z[140])
        Z(z[24])
        Z([3, '支付方式：'])
        Z(z[35])
        Z([a, [
          [6],
          [
            [7],
            [3, '$root']
          ],
          [3, 'm3']
        ]])
        Z(z[140])
        Z(z[24])
        Z([3, '支付时间：'])
        Z(z[35])
        Z([a, [
          [6],
          [
            [7],
            [3, 'detailInfo']
          ],
          [3, 'payTime']
        ]])
        Z([
          [2, '&&'],
          [
            [2, '&&'],
            [
              [2, '&&'],
              [
                [2, '||'],
                [
                  [2, '=='],
                  [
                    [6],
                    [
                      [7],
                      [3, 'detailInfo']
                    ],
                    [3, 'status']
                  ],
                  [1, 0]
                ],
                [
                  [2, '=='],
                  [
                    [6],
                    [
                      [7],
                      [3, 'detailInfo']
                    ],
                    [3, 'payStatus']
                  ],
                  [1, 0]
                ]
              ],
              [
                [2, '!='],
                [
                  [6],
                  [
                    [7],
                    [3, 'detailInfo']
                  ],
                  [3, 'status']
                ],
                [1, 4]
              ]
            ],
            [
              [2, '!='],
              [
                [6],
                [
                  [7],
                  [3, 'detailInfo']
                ],
                [3, 'status']
              ],
              [1, 3]
            ]
          ],
          [
            [2, '!='],
            [
              [6],
              [
                [7],
                [3, 'detailInfo']
              ],
              [3, 'status']
            ],
            [1, 2]
          ]
        ])
        Z([3, 'item-footer data-v-28eb88bb'])
        Z([
          [2, '||'],
          [
            [2, '=='],
            [
              [6],
              [
                [7],
                [3, 'detailInfo']
              ],
              [3, 'status']
            ],
            [1, 0]
          ],
          [
            [2, '=='],
            [
              [6],
              [
                [7],
                [3, 'detailInfo']
              ],
              [3, 'payStatus']
            ],
            [1, 0]
          ]
        ])
        Z(z[43])
        Z([3, 'repeat-buy-btn data-v-28eb88bb'])
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
                        [1, 'cancelOrder']
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ])
        Z([3, '取消订单'])
        Z([
          [2, '==='],
          [
            [6],
            [
              [7],
              [3, 'detailInfo']
            ],
            [3, 'payStatus']
          ],
          [1, 0]
        ])
        Z(z[43])
        Z([3, 'pay-btn data-v-28eb88bb'])
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
                        [1, 'goPay']
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ])
        Z([3, '付款'])
        Z([
          [7],
          [3, 'show']
        ])
        Z(z[43])
        Z([3, 'mask-box data-v-28eb88bb'])
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
                          [1, 'closeMask']
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
        Z(z[43])
        Z([3, 'main data-v-28eb88bb'])
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
        Z(z[24])
        Z([3, '押金备注'])
        Z([3, 'info data-v-28eb88bb'])
        Z(z[40])
        Z([a, [
          [6],
          [
            [7],
            [3, 'detailInfo']
          ],
          [3, 'depositRemarks']
        ]])
      })(__WXML_GLOBAL__.ops_cached.$gwx2_XC_44_1);
      return __WXML_GLOBAL__.ops_cached.$gwx2_XC_44_1
    }
    __WXML_GLOBAL__.ops_set.$gwx2_XC_44 = z;
    __WXML_GLOBAL__.ops_init.$gwx2_XC_44 = true;
    var x = ['./subPage/pages/snowOrder/snowOrder.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx2_XC_44_1()
      var l75E = _v()
      _(r, l75E)
      if (_oz(z, 0, e, s, gg)) {
        l75E.wxVkey = 1
        var a85E = _n('view')
        _rz(z, a85E, 'class', 1, e, s, gg)
        var bA6E = _n('view')
        _rz(z, bA6E, 'class', 2, e, s, gg)
        var oB6E = _n('view')
        _rz(z, oB6E, 'class', 3, e, s, gg)
        var xC6E = _n('view')
        _rz(z, xC6E, 'class', 4, e, s, gg)
        var oD6E = _v()
        _(xC6E, oD6E)
        if (_oz(z, 5, e, s, gg)) {
          oD6E.wxVkey = 1
          var cF6E = _n('view')
          _rz(z, cF6E, 'class', 6, e, s, gg)
          var hG6E = _oz(z, 7, e, s, gg)
          _(cF6E, hG6E)
          _(oD6E, cF6E)
        } else {
          oD6E.wxVkey = 2
          var oH6E = _n('view')
          _rz(z, oH6E, 'class', 8, e, s, gg)
          var cI6E = _oz(z, 9, e, s, gg)
          _(oH6E, cI6E)
          _(oD6E, oH6E)
        }
        var fE6E = _v()
        _(xC6E, fE6E)
        if (_oz(z, 10, e, s, gg)) {
          fE6E.wxVkey = 1
          var oJ6E = _n('view')
          _rz(z, oJ6E, 'class', 11, e, s, gg)
          var lK6E = _oz(z, 12, e, s, gg)
          _(oJ6E, lK6E)
          _(fE6E, oJ6E)
        } else {
          fE6E.wxVkey = 2
          var aL6E = _v()
          _(fE6E, aL6E)
          if (_oz(z, 13, e, s, gg)) {
            aL6E.wxVkey = 1
            var tM6E = _n('view')
            _rz(z, tM6E, 'class', 14, e, s, gg)
            var eN6E = _oz(z, 15, e, s, gg)
            _(tM6E, eN6E)
            _(aL6E, tM6E)
          } else {
            aL6E.wxVkey = 2
            var bO6E = _v()
            _(aL6E, bO6E)
            if (_oz(z, 16, e, s, gg)) {
              bO6E.wxVkey = 1
              var oP6E = _n('view')
              _rz(z, oP6E, 'class', 17, e, s, gg)
              var xQ6E = _oz(z, 18, e, s, gg)
              _(oP6E, xQ6E)
              _(bO6E, oP6E)
            } else {
              bO6E.wxVkey = 2
              var oR6E = _v()
              _(bO6E, oR6E)
              if (_oz(z, 19, e, s, gg)) {
                oR6E.wxVkey = 1
                var fS6E = _n('view')
                _rz(z, fS6E, 'class', 20, e, s, gg)
                var cT6E = _oz(z, 21, e, s, gg)
                _(fS6E, cT6E)
                _(oR6E, fS6E)
              }
              oR6E.wxXCkey = 1
            }
            bO6E.wxXCkey = 1
          }
          aL6E.wxXCkey = 1
        }
        oD6E.wxXCkey = 1
        fE6E.wxXCkey = 1
        _(oB6E, xC6E)
        _(bA6E, oB6E)
        var hU6E = _n('view')
        _rz(z, hU6E, 'class', 22, e, s, gg)
        var cW6E = _n('view')
        _rz(z, cW6E, 'class', 23, e, s, gg)
        var oX6E = _n('view')
        _rz(z, oX6E, 'class', 24, e, s, gg)
        var lY6E = _oz(z, 25, e, s, gg)
        _(oX6E, lY6E)
        _(cW6E, oX6E)
        var aZ6E = _n('view')
        _rz(z, aZ6E, 'class', 26, e, s, gg)
        var t16E = _oz(z, 27, e, s, gg)
        _(aZ6E, t16E)
        _(cW6E, aZ6E)
        _(hU6E, cW6E)
        var e26E = _n('view')
        _rz(z, e26E, 'class', 28, e, s, gg)
        var b36E = _oz(z, 29, e, s, gg)
        _(e26E, b36E)
        _(hU6E, e26E)
        var o46E = _n('view')
        _rz(z, o46E, 'class', 30, e, s, gg)
        var x56E = _oz(z, 31, e, s, gg)
        _(o46E, x56E)
        _(hU6E, o46E)
        var o66E = _n('view')
        _rz(z, o66E, 'class', 32, e, s, gg)
        var f76E = _n('view')
        _rz(z, f76E, 'class', 33, e, s, gg)
        var c86E = _oz(z, 34, e, s, gg)
        _(f76E, c86E)
        _(o66E, f76E)
        var h96E = _n('view')
        _rz(z, h96E, 'class', 35, e, s, gg)
        var o06E = _oz(z, 36, e, s, gg)
        _(h96E, o06E)
        _(o66E, h96E)
        _(hU6E, o66E)
        var oV6E = _v()
        _(hU6E, oV6E)
        if (_oz(z, 37, e, s, gg)) {
          oV6E.wxVkey = 1
          var cA7E = _n('view')
          _rz(z, cA7E, 'class', 38, e, s, gg)
          var oB7E = _n('view')
          _rz(z, oB7E, 'class', 39, e, s, gg)
          var aD7E = _n('text')
          _rz(z, aD7E, 'class', 40, e, s, gg)
          var tE7E = _oz(z, 41, e, s, gg)
          _(aD7E, tE7E)
          _(oB7E, aD7E)
          var lC7E = _v()
          _(oB7E, lC7E)
          if (_oz(z, 42, e, s, gg)) {
            lC7E.wxVkey = 1
            var eF7E = _mz(z, 'text', ['bindtap', 43, 'class', 1, 'data-event-opts', 2], [], e, s, gg)
            var bG7E = _oz(z, 46, e, s, gg)
            _(eF7E, bG7E)
            _(lC7E, eF7E)
          }
          lC7E.wxXCkey = 1
          _(cA7E, oB7E)
          var oH7E = _n('view')
          _rz(z, oH7E, 'class', 47, e, s, gg)
          var xI7E = _oz(z, 48, e, s, gg)
          _(oH7E, xI7E)
          _(cA7E, oH7E)
          _(oV6E, cA7E)
        }
        oV6E.wxXCkey = 1
        _(bA6E, hU6E)
        var oJ7E = _n('view')
        _rz(z, oJ7E, 'class', 49, e, s, gg)
        var fK7E = _n('view')
        _rz(z, fK7E, 'class', 50, e, s, gg)
        var cL7E = _n('text')
        _rz(z, cL7E, 'class', 51, e, s, gg)
        var hM7E = _oz(z, 52, e, s, gg)
        _(cL7E, hM7E)
        _(fK7E, cL7E)
        _(oJ7E, fK7E)
        var oN7E = _v()
        _(oJ7E, oN7E)
        var cO7E = function(lQ7E, oP7E, aR7E, gg) {
          var eT7E = _n('view')
          _rz(z, eT7E, 'class', 57, lQ7E, oP7E, gg)
          var bU7E = _n('view')
          _rz(z, bU7E, 'class', 58, lQ7E, oP7E, gg)
          var xW7E = _n('view')
          _rz(z, xW7E, 'class', 59, lQ7E, oP7E, gg)
          var oX7E = _oz(z, 60, lQ7E, oP7E, gg)
          _(xW7E, oX7E)
          _(bU7E, xW7E)
          var oV7E = _v()
          _(bU7E, oV7E)
          if (_oz(z, 61, lQ7E, oP7E, gg)) {
            oV7E.wxVkey = 1
            var fY7E = _n('view')
            _rz(z, fY7E, 'class', 62, lQ7E, oP7E, gg)
            var cZ7E = _oz(z, 63, lQ7E, oP7E, gg)
            _(fY7E, cZ7E)
            _(oV7E, fY7E)
          }
          oV7E.wxXCkey = 1
          _(eT7E, bU7E)
          var h17E = _n('view')
          _rz(z, h17E, 'class', 64, lQ7E, oP7E, gg)
          var o27E = _v()
          _(h17E, o27E)
          var c37E = function(l57E, o47E, a67E, gg) {
            var e87E = _n('view')
            _rz(z, e87E, 'class', 69, l57E, o47E, gg)
            var b97E = _n('view')
            _rz(z, b97E, 'class', 70, l57E, o47E, gg)
            var o07E = _oz(z, 71, l57E, o47E, gg)
            _(b97E, o07E)
            _(e87E, b97E)
            var xA8E = _n('view')
            _rz(z, xA8E, 'class', 72, l57E, o47E, gg)
            var oB8E = _oz(z, 73, l57E, o47E, gg)
            _(xA8E, oB8E)
            _(e87E, xA8E)
            _(a67E, e87E)
            return a67E
          }
          o27E.wxXCkey = 2
          _2z(z, 67, c37E, lQ7E, oP7E, gg, o27E, 'it', 'i', 'i')
          _(eT7E, h17E)
          _(aR7E, eT7E)
          return aR7E
        }
        oN7E.wxXCkey = 2
        _2z(z, 55, cO7E, e, s, gg, oN7E, 'item', 'index', 'index')
        var fC8E = _n('view')
        _rz(z, fC8E, 'class', 74, e, s, gg)
        var hE8E = _n('text')
        _rz(z, hE8E, 'class', 75, e, s, gg)
        _(fC8E, hE8E)
        var cD8E = _v()
        _(fC8E, cD8E)
        if (_oz(z, 76, e, s, gg)) {
          cD8E.wxVkey = 1
          var oF8E = _mz(z, 'view', ['bindtap', 77, 'class', 1, 'data-event-opts', 2], [], e, s, gg)
          var cG8E = _oz(z, 80, e, s, gg)
          _(oF8E, cG8E)
          _(cD8E, oF8E)
        }
        cD8E.wxXCkey = 1
        _(oJ7E, fC8E)
        var oH8E = _n('view')
        _rz(z, oH8E, 'class', 81, e, s, gg)
        var lI8E = _oz(z, 82, e, s, gg)
        _(oH8E, lI8E)
        _(oJ7E, oH8E)
        _(bA6E, oJ7E)
        var aJ8E = _n('view')
        _rz(z, aJ8E, 'class', 83, e, s, gg)
        var tK8E = _n('view')
        _rz(z, tK8E, 'class', 84, e, s, gg)
        var eL8E = _oz(z, 85, e, s, gg)
        _(tK8E, eL8E)
        _(aJ8E, tK8E)
        var bM8E = _n('view')
        _rz(z, bM8E, 'class', 86, e, s, gg)
        var oN8E = _n('view')
        _rz(z, oN8E, 'class', 87, e, s, gg)
        var xO8E = _n('view')
        _rz(z, xO8E, 'class', 88, e, s, gg)
        var oP8E = _oz(z, 89, e, s, gg)
        _(xO8E, oP8E)
        _(oN8E, xO8E)
        var fQ8E = _n('view')
        _rz(z, fQ8E, 'class', 90, e, s, gg)
        var cR8E = _oz(z, 91, e, s, gg)
        _(fQ8E, cR8E)
        _(oN8E, fQ8E)
        var hS8E = _n('view')
        _rz(z, hS8E, 'class', 92, e, s, gg)
        var oT8E = _oz(z, 93, e, s, gg)
        _(hS8E, oT8E)
        _(oN8E, hS8E)
        _(bM8E, oN8E)
        var cU8E = _n('view')
        _rz(z, cU8E, 'class', 94, e, s, gg)
        var oV8E = _v()
        _(cU8E, oV8E)
        var lW8E = function(tY8E, aX8E, eZ8E, gg) {
          var o28E = _n('view')
          _rz(z, o28E, 'class', 99, tY8E, aX8E, gg)
          var x38E = _v()
          _(o28E, x38E)
          if (_oz(z, 100, tY8E, aX8E, gg)) {
            x38E.wxVkey = 1
            var o48E = _n('view')
            _rz(z, o48E, 'class', 101, tY8E, aX8E, gg)
            var f58E = _n('view')
            _rz(z, f58E, 'class', 102, tY8E, aX8E, gg)
            var c68E = _n('view')
            _rz(z, c68E, 'class', 103, tY8E, aX8E, gg)
            var h78E = _mz(z, 'view', ['class', 104, 'style', 1], [], tY8E, aX8E, gg)
            var o88E = _oz(z, 106, tY8E, aX8E, gg)
            _(h78E, o88E)
            _(c68E, h78E)
            var c98E = _n('view')
            _rz(z, c98E, 'class', 107, tY8E, aX8E, gg)
            var o08E = _oz(z, 108, tY8E, aX8E, gg)
            _(c98E, o08E)
            _(c68E, c98E)
            _(f58E, c68E)
            _(o48E, f58E)
            _(x38E, o48E)
          } else {
            x38E.wxVkey = 2
            var lA9E = _v()
            _(x38E, lA9E)
            if (_oz(z, 109, tY8E, aX8E, gg)) {
              lA9E.wxVkey = 1
              var aB9E = _n('view')
              _rz(z, aB9E, 'class', 110, tY8E, aX8E, gg)
              var tC9E = _n('view')
              _rz(z, tC9E, 'class', 111, tY8E, aX8E, gg)
              var eD9E = _n('view')
              _rz(z, eD9E, 'class', 112, tY8E, aX8E, gg)
              var bE9E = _mz(z, 'view', ['class', 113, 'style', 1], [], tY8E, aX8E, gg)
              var oF9E = _oz(z, 115, tY8E, aX8E, gg)
              _(bE9E, oF9E)
              _(eD9E, bE9E)
              var xG9E = _n('view')
              _rz(z, xG9E, 'class', 116, tY8E, aX8E, gg)
              var oH9E = _oz(z, 117, tY8E, aX8E, gg)
              _(xG9E, oH9E)
              _(eD9E, xG9E)
              _(tC9E, eD9E)
              _(aB9E, tC9E)
              _(lA9E, aB9E)
            } else {
              lA9E.wxVkey = 2
              var fI9E = _n('view')
              _rz(z, fI9E, 'class', 118, tY8E, aX8E, gg)
              var cJ9E = _v()
              _(fI9E, cJ9E)
              if (_oz(z, 119, tY8E, aX8E, gg)) {
                cJ9E.wxVkey = 1
                var hK9E = _n('view')
                _rz(z, hK9E, 'class', 120, tY8E, aX8E, gg)
                var oL9E = _n('view')
                _rz(z, oL9E, 'class', 121, tY8E, aX8E, gg)
                var cM9E = _mz(z, 'view', ['class', 122, 'style', 1], [], tY8E, aX8E, gg)
                var oN9E = _oz(z, 124, tY8E, aX8E, gg)
                _(cM9E, oN9E)
                _(oL9E, cM9E)
                var lO9E = _n('view')
                _rz(z, lO9E, 'class', 125, tY8E, aX8E, gg)
                var aP9E = _oz(z, 126, tY8E, aX8E, gg)
                _(lO9E, aP9E)
                _(oL9E, lO9E)
                var tQ9E = _n('view')
                _rz(z, tQ9E, 'class', 127, tY8E, aX8E, gg)
                var eR9E = _oz(z, 128, tY8E, aX8E, gg)
                _(tQ9E, eR9E)
                _(oL9E, tQ9E)
                _(hK9E, oL9E)
                _(cJ9E, hK9E)
              } else {
                cJ9E.wxVkey = 2
                var bS9E = _n('view')
                _rz(z, bS9E, 'class', 129, tY8E, aX8E, gg)
                var oT9E = _n('view')
                _rz(z, oT9E, 'class', 130, tY8E, aX8E, gg)
                var oV9E = _mz(z, 'view', ['class', 131, 'style', 1], [], tY8E, aX8E, gg)
                var fW9E = _oz(z, 133, tY8E, aX8E, gg)
                _(oV9E, fW9E)
                _(oT9E, oV9E)
                var xU9E = _v()
                _(oT9E, xU9E)
                if (_oz(z, 134, tY8E, aX8E, gg)) {
                  xU9E.wxVkey = 1
                  var cX9E = _n('view')
                  _rz(z, cX9E, 'class', 135, tY8E, aX8E, gg)
                  var hY9E = _oz(z, 136, tY8E, aX8E, gg)
                  _(cX9E, hY9E)
                  _(xU9E, cX9E)
                } else {
                  xU9E.wxVkey = 2
                  var oZ9E = _n('view')
                  _rz(z, oZ9E, 'class', 137, tY8E, aX8E, gg)
                  var c19E = _oz(z, 138, tY8E, aX8E, gg)
                  _(oZ9E, c19E)
                  _(xU9E, oZ9E)
                }
                xU9E.wxXCkey = 1
                _(bS9E, oT9E)
                _(cJ9E, bS9E)
              }
              cJ9E.wxXCkey = 1
              _(lA9E, fI9E)
            }
            lA9E.wxXCkey = 1
          }
          x38E.wxXCkey = 1
          _(eZ8E, o28E)
          return eZ8E
        }
        oV8E.wxXCkey = 2
        _2z(z, 97, lW8E, e, s, gg, oV8E, 'item', 'index', '*this')
        _(bM8E, cU8E)
        _(aJ8E, bM8E)
        var o29E = _n('view')
        _rz(z, o29E, 'class', 139, e, s, gg)
        var l39E = _n('view')
        _rz(z, l39E, 'class', 140, e, s, gg)
        var a49E = _n('text')
        _rz(z, a49E, 'class', 141, e, s, gg)
        var t59E = _oz(z, 142, e, s, gg)
        _(a49E, t59E)
        _(l39E, a49E)
        var e69E = _n('text')
        _rz(z, e69E, 'class', 143, e, s, gg)
        var b79E = _oz(z, 144, e, s, gg)
        _(e69E, b79E)
        _(l39E, e69E)
        _(o29E, l39E)
        var o89E = _n('view')
        _rz(z, o89E, 'class', 145, e, s, gg)
        var x99E = _n('text')
        _rz(z, x99E, 'class', 146, e, s, gg)
        var o09E = _oz(z, 147, e, s, gg)
        _(x99E, o09E)
        _(o89E, x99E)
        var fA0E = _n('text')
        _rz(z, fA0E, 'class', 148, e, s, gg)
        var cB0E = _oz(z, 149, e, s, gg)
        _(fA0E, cB0E)
        _(o89E, fA0E)
        _(o29E, o89E)
        var hC0E = _n('view')
        _rz(z, hC0E, 'class', 150, e, s, gg)
        var oD0E = _n('view')
        _rz(z, oD0E, 'class', 151, e, s, gg)
        var cE0E = _oz(z, 152, e, s, gg)
        _(oD0E, cE0E)
        _(hC0E, oD0E)
        var oF0E = _n('text')
        _rz(z, oF0E, 'class', 153, e, s, gg)
        var lG0E = _oz(z, 154, e, s, gg)
        _(oF0E, lG0E)
        _(hC0E, oF0E)
        _(o29E, hC0E)
        _(aJ8E, o29E)
        _(bA6E, aJ8E)
        var aH0E = _n('view')
        _rz(z, aH0E, 'class', 155, e, s, gg)
        var tI0E = _n('view')
        _rz(z, tI0E, 'class', 156, e, s, gg)
        var eJ0E = _oz(z, 157, e, s, gg)
        _(tI0E, eJ0E)
        _(aH0E, tI0E)
        var bK0E = _n('view')
        _rz(z, bK0E, 'class', 158, e, s, gg)
        var oL0E = _n('view')
        _rz(z, oL0E, 'class', 159, e, s, gg)
        var xM0E = _n('text')
        _rz(z, xM0E, 'class', 160, e, s, gg)
        var oN0E = _oz(z, 161, e, s, gg)
        _(xM0E, oN0E)
        _(oL0E, xM0E)
        var fO0E = _n('text')
        _rz(z, fO0E, 'class', 162, e, s, gg)
        var cP0E = _oz(z, 163, e, s, gg)
        _(fO0E, cP0E)
        _(oL0E, fO0E)
        _(bK0E, oL0E)
        var hQ0E = _n('view')
        _rz(z, hQ0E, 'class', 164, e, s, gg)
        var oR0E = _n('text')
        _rz(z, oR0E, 'class', 165, e, s, gg)
        var cS0E = _oz(z, 166, e, s, gg)
        _(oR0E, cS0E)
        _(hQ0E, oR0E)
        var oT0E = _n('text')
        _rz(z, oT0E, 'class', 167, e, s, gg)
        var lU0E = _oz(z, 168, e, s, gg)
        _(oT0E, lU0E)
        _(hQ0E, oT0E)
        _(bK0E, hQ0E)
        var aV0E = _n('view')
        _rz(z, aV0E, 'class', 169, e, s, gg)
        var tW0E = _n('view')
        _rz(z, tW0E, 'class', 170, e, s, gg)
        var eX0E = _oz(z, 171, e, s, gg)
        _(tW0E, eX0E)
        _(aV0E, tW0E)
        var bY0E = _n('text')
        _rz(z, bY0E, 'class', 172, e, s, gg)
        var oZ0E = _oz(z, 173, e, s, gg)
        _(bY0E, oZ0E)
        _(aV0E, bY0E)
        _(bK0E, aV0E)
        var x10E = _n('view')
        _rz(z, x10E, 'class', 174, e, s, gg)
        var o20E = _n('view')
        _rz(z, o20E, 'class', 175, e, s, gg)
        var f30E = _oz(z, 176, e, s, gg)
        _(o20E, f30E)
        _(x10E, o20E)
        var c40E = _n('text')
        _rz(z, c40E, 'class', 177, e, s, gg)
        var h50E = _oz(z, 178, e, s, gg)
        _(c40E, h50E)
        _(x10E, c40E)
        _(bK0E, x10E)
        _(aH0E, bK0E)
        _(bA6E, aH0E)
        _(a85E, bA6E)
        var t95E = _v()
        _(a85E, t95E)
        if (_oz(z, 179, e, s, gg)) {
          t95E.wxVkey = 1
          var o60E = _n('view')
          _rz(z, o60E, 'class', 180, e, s, gg)
          var c70E = _v()
          _(o60E, c70E)
          if (_oz(z, 181, e, s, gg)) {
            c70E.wxVkey = 1
            var l90E = _mz(z, 'view', ['bindtap', 182, 'class', 1, 'data-event-opts', 2], [], e, s, gg)
            var a00E = _oz(z, 185, e, s, gg)
            _(l90E, a00E)
            _(c70E, l90E)
          }
          var o80E = _v()
          _(o60E, o80E)
          if (_oz(z, 186, e, s, gg)) {
            o80E.wxVkey = 1
            var tAAF = _mz(z, 'view', ['bindtap', 187, 'class', 1, 'data-event-opts', 2], [], e, s, gg)
            var eBAF = _oz(z, 190, e, s, gg)
            _(tAAF, eBAF)
            _(o80E, tAAF)
          }
          c70E.wxXCkey = 1
          o80E.wxXCkey = 1
          _(t95E, o60E)
        }
        var e05E = _v()
        _(a85E, e05E)
        if (_oz(z, 191, e, s, gg)) {
          e05E.wxVkey = 1
          var bCAF = _mz(z, 'view', ['bindtap', 192, 'class', 1, 'data-event-opts', 2], [], e, s, gg)
          var oDAF = _mz(z, 'view', ['catchtap', 195, 'class', 1, 'data-event-opts', 2], [], e, s, gg)
          var xEAF = _n('view')
          _rz(z, xEAF, 'class', 198, e, s, gg)
          var oFAF = _oz(z, 199, e, s, gg)
          _(xEAF, oFAF)
          _(oDAF, xEAF)
          var fGAF = _n('view')
          _rz(z, fGAF, 'class', 200, e, s, gg)
          var cHAF = _n('text')
          _rz(z, cHAF, 'class', 201, e, s, gg)
          var hIAF = _oz(z, 202, e, s, gg)
          _(cHAF, hIAF)
          _(fGAF, cHAF)
          _(oDAF, fGAF)
          _(bCAF, oDAF)
          _(e05E, bCAF)
        }
        t95E.wxXCkey = 1
        e05E.wxXCkey = 1
        _(l75E, a85E)
      }
      l75E.wxXCkey = 1
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
        g = "$gwx2_XC_44";
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
if (__vd_version_info__.delayedGwx || false) $gwx2_XC_44();
if (__vd_version_info__.delayedGwx) __wxAppCode__['subPage/pages/snowOrder/snowOrder.wxml'] = [$gwx2_XC_44, './subPage/pages/snowOrder/snowOrder.wxml'];
else __wxAppCode__['subPage/pages/snowOrder/snowOrder.wxml'] = $gwx2_XC_44('./subPage/pages/snowOrder/snowOrder.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__['subPage/pages/snowOrder/snowOrder.wxss'] = setCssToHead([".", [1], "page-box.", [1], "data-v-28eb88bb{background:#fafafa;font-family:Source Han Sans CN-Normal,Source Han Sans CN;font-weight:400;line-height:1;min-height:100vh;padding-bottom:", [0, 100], ";width:100%}\n.", [1], "page-box .", [1], "bg-box.", [1], "data-v-28eb88bb{background:linear-gradient(93deg,#fc4c66,#fe5130);box-sizing:border-box;height:", [0, 210], ";padding:", [0, 54], " 0 0 ", [0, 40], ";width:", [0, 750], "}\n.", [1], "page-box .", [1], "bg-box .", [1], "bgText.", [1], "data-v-28eb88bb{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex}\n.", [1], "page-box .", [1], "bg-box .", [1], "bgText .", [1], "state.", [1], "data-v-28eb88bb{color:#fff;font-size:", [0, 36], ";margin-right:", [0, 35], "}\n.", [1], "page-box .", [1], "bg-box .", [1], "bgText .", [1], "tips.", [1], "data-v-28eb88bb{color:hsla(0,0%,100%,.8);font-family:Source Han Sans CN-Normal,Source Han Sans CN;font-size:", [0, 24], "}\n.", [1], "page-box .", [1], "m-top.", [1], "data-v-28eb88bb{margin-top:", [0, -60], "}\n.", [1], "page-box .", [1], "info.", [1], "data-v-28eb88bb{background:#fff;border-radius:", [0, 20], ";box-sizing:border-box;margin-left:", [0, 20], ";padding:", [0, 40], " ", [0, 20], ";width:", [0, 710], "}\n.", [1], "page-box .", [1], "info .", [1], "topTitle.", [1], "data-v-28eb88bb{color:#222;font-size:", [0, 28], ";margin-bottom:", [0, 20], "}\n.", [1], "page-box .", [1], "info .", [1], "itemBox.", [1], "data-v-28eb88bb{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:", [0, 20], "}\n.", [1], "page-box .", [1], "info .", [1], "itemBox .", [1], "title.", [1], "data-v-28eb88bb{color:#222;font-size:", [0, 30], ";font-weight:500}\n.", [1], "page-box .", [1], "info .", [1], "itemBox .", [1], "price.", [1], "data-v-28eb88bb{color:#333;font-size:", [0, 30], "}\n.", [1], "page-box .", [1], "info .", [1], "itemBox .", [1], "name.", [1], "data-v-28eb88bb{color:#333;display:-webkit-flex;display:flex;font-size:", [0, 28], "}\n.", [1], "page-box .", [1], "info .", [1], "itemBox .", [1], "name .", [1], "show.", [1], "data-v-28eb88bb{color:#666;font-size:", [0, 24], ";font-weight:400;line-height:", [0, 28], ";margin-left:", [0, 17], "}\n.", [1], "page-box .", [1], "info .", [1], "itemBox .", [1], "value.", [1], "data-v-28eb88bb{color:#ff5411;font-size:", [0, 28], ";margin-right:", [0, 7], "}\n.", [1], "page-box .", [1], "info .", [1], "itemBox.", [1], "data-v-28eb88bb:first-child{margin-bottom:", [0, 21], "}\n.", [1], "page-box .", [1], "info .", [1], "itemBox.", [1], "data-v-28eb88bb:last-child{margin-bottom:", [0, 4], "}\n.", [1], "page-box .", [1], "info .", [1], "num.", [1], "data-v-28eb88bb{color:#828282;display:-webkit-flex;display:flex;-webkit-flex-direction:row-reverse;flex-direction:row-reverse;font-size:", [0, 26], ";margin-bottom:", [0, 31], ";margin-right:", [0, 8], ";width:100%}\n.", [1], "page-box .", [1], "orderInfo.", [1], "data-v-28eb88bb{margin-bottom:", [0, 100], "}\n.", [1], "page-box .", [1], "hotel-box.", [1], "data-v-28eb88bb{background:#fff;border-radius:", [0, 20], ";box-sizing:border-box;margin:", [0, 10], " ", [0, 20], ";padding:", [0, 40], " ", [0, 20], "}\n.", [1], "page-box .", [1], "hotel-box .", [1], "hotel-title.", [1], "data-v-28eb88bb{color:#222;font-size:", [0, 30], ";font-weight:700;line-height:", [0, 45], "}\n.", [1], "page-box .", [1], "hotel-box .", [1], "m40.", [1], "data-v-28eb88bb{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:", [0, 40], "}\n.", [1], "page-box .", [1], "hotel-box .", [1], "m40 wx-text.", [1], "data-v-28eb88bb{color:#222;font-size:", [0, 30], ";font-weight:700;line-height:", [0, 45], "}\n.", [1], "page-box .", [1], "hotel-box .", [1], "m40 .", [1], "addbook.", [1], "data-v-28eb88bb{background-color:#fff;border:", [0, 1], " solid #cfcfcf;border-radius:", [0, 54], ";color:#222;font-size:", [0, 24], ";height:", [0, 66], ";line-height:", [0, 62], ";margin-left:", [0, 20], ";text-align:center;width:", [0, 200], "}\n.", [1], "page-box .", [1], "hotel-box .", [1], "m30.", [1], "data-v-28eb88bb{margin-bottom:", [0, 30], "}\n.", [1], "page-box .", [1], "hotel-box .", [1], "m20.", [1], "data-v-28eb88bb{margin-bottom:", [0, 20], "}\n.", [1], "page-box .", [1], "hotel-box .", [1], "hotel-table.", [1], "data-v-28eb88bb{margin-bottom:", [0, 40], ";text-align:center;width:", [0, 670], "}\n.", [1], "page-box .", [1], "hotel-box .", [1], "hotel-table .", [1], "hotel-th.", [1], "data-v-28eb88bb{display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;height:", [0, 70], "}\n.", [1], "page-box .", [1], "hotel-box .", [1], "hotel-table .", [1], "hotel-th .", [1], "t.", [1], "data-v-28eb88bb{width:33.33%}\n.", [1], "page-box .", [1], "hotel-box .", [1], "hotel-table .", [1], "th.", [1], "data-v-28eb88bb{background:#fffaf8;color:#333;font-size:", [0, 26], ";line-height:", [0, 70], "}\n.", [1], "page-box .", [1], "hotel-box .", [1], "hotel-table .", [1], "td.", [1], "data-v-28eb88bb{border:1px solid #e0e0e0}\n.", [1], "page-box .", [1], "hotel-box .", [1], "hotel-table .", [1], "tableType.", [1], "data-v-28eb88bb{color:#585858;font-family:Source Han Sans CN-Normal,Source Han Sans CN;font-size:", [0, 26], ";font-weight:400}\n.", [1], "page-box .", [1], "hotel-box .", [1], "hotel-table .", [1], "color.", [1], "data-v-28eb88bb{color:#969696}\n.", [1], "page-box .", [1], "hotel-box .", [1], "user.", [1], "data-v-28eb88bb{width:", [0, 668], "}\n.", [1], "page-box .", [1], "hotel-box .", [1], "user .", [1], "user-top.", [1], "data-v-28eb88bb{-webkit-align-items:center;align-items:center;color:#222;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;font-size:", [0, 28], ";-webkit-justify-content:space-between;justify-content:space-between;line-height:", [0, 33], ";margin-bottom:", [0, 20], "}\n.", [1], "page-box .", [1], "hotel-box .", [1], "user .", [1], "user-top .", [1], "name.", [1], "data-v-28eb88bb{font-weight:500}\n.", [1], "page-box .", [1], "hotel-box .", [1], "user .", [1], "user-top .", [1], "value.", [1], "data-v-28eb88bb{font-weight:400}\n.", [1], "page-box .", [1], "hotel-box .", [1], "user .", [1], "user-it.", [1], "data-v-28eb88bb{color:#969696;font-size:", [0, 26], ";font-weight:400;line-height:30px;margin-bottom:", [0, 40], "}\n.", [1], "page-box .", [1], "hotel-box .", [1], "user .", [1], "user-it .", [1], "it.", [1], "data-v-28eb88bb{display:-webkit-flex;display:flex}\n.", [1], "page-box .", [1], "hotel-box .", [1], "user .", [1], "user-it .", [1], "it .", [1], "it-name.", [1], "data-v-28eb88bb{color:#969696;margin-right:", [0, 15], ";width:", [0, 125], "}\n.", [1], "page-box .", [1], "hotel-box .", [1], "user .", [1], "user-it .", [1], "it .", [1], "it-info.", [1], "data-v-28eb88bb{color:#585858}\n.", [1], "page-box .", [1], "hotel-box .", [1], "user .", [1], "user-it.", [1], "data-v-28eb88bb:last-child{margin-bottom:", [0, 30], "}\n.", [1], "page-box .", [1], "hotel-box .", [1], "hotel-list-box.", [1], "data-v-28eb88bb{color:#909090;font-size:", [0, 26], ";line-height:", [0, 32], ";padding-top:", [0, 2], "}\n.", [1], "page-box .", [1], "hotel-box .", [1], "hotel-list-box .", [1], "item.", [1], "data-v-28eb88bb{color:#909090;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;margin-bottom:", [0, 20], ";padding-top:", [0, 2], "}\n.", [1], "page-box .", [1], "hotel-box .", [1], "hotel-list-box .", [1], "item .", [1], "title.", [1], "data-v-28eb88bb{color:#969696;display:inline-block;font-weight:400;padding-right:", [0, 10], ";text-align:left;width:", [0, 150], "}\n.", [1], "page-box .", [1], "hotel-box .", [1], "hotel-list-box .", [1], "item .", [1], "value.", [1], "data-v-28eb88bb{color:#585858;font-weight:400;width:", [0, 499], "}\n.", [1], "page-box .", [1], "hotel-box .", [1], "hotel-list-box .", [1], "item .", [1], "valueP.", [1], "data-v-28eb88bb{color:#585858;font-size:", [0, 26], ";font-weight:400;line-height:", [0, 35], ";width:", [0, 499], ";word-break:break-all}\n.", [1], "page-box .", [1], "hotel-box .", [1], "tips.", [1], "data-v-28eb88bb{color:#ff5411;font-size:", [0, 24], "}\n.", [1], "item-footer.", [1], "data-v-28eb88bb{-webkit-align-items:center;align-items:center;background:#fff;border-top:1px solid #d9d9d7;bottom:0;display:flex;display:-webkit-flex;height:", [0, 100], ";-webkit-justify-content:flex-end;justify-content:flex-end;left:0;padding:0 ", [0, 30], ";position:fixed;width:100%}\n.", [1], "item-footer .", [1], "repeat-buy-btn.", [1], "data-v-28eb88bb{border:", [0, 1], " solid #d1d1d1;border-radius:", [0, 20], ";color:#2a2a2a}\n.", [1], "item-footer .", [1], "pay-btn.", [1], "data-v-28eb88bb,.", [1], "item-footer .", [1], "repeat-buy-btn.", [1], "data-v-28eb88bb{font-size:", [0, 24], ";height:", [0, 60], ";line-height:", [0, 60], ";margin-left:", [0, 10], ";text-align:center;width:", [0, 160], "}\n.", [1], "item-footer .", [1], "pay-btn.", [1], "data-v-28eb88bb{border:", [0, 1], " solid #f15252;border-radius:", [0, 20], ";color:#f15252}\n.", [1], "mask-box.", [1], "data-v-28eb88bb{background:rgba(0,0,0,.5);height:100%;left:0;position:fixed;top:0;width:100%;z-index:1000}\n.", [1], "mask-box .", [1], "main.", [1], "data-v-28eb88bb{background:#fff;border-radius:", [0, 20], ";box-sizing:border-box;left:", [0, 55], ";padding:", [0, 66], " ", [0, 60], " ", [0, 90], ";position:absolute;top:", [0, 257], ";width:", [0, 640], "}\n.", [1], "mask-box .", [1], "main .", [1], "title.", [1], "data-v-28eb88bb{color:#333;font-size:", [0, 36], ";font-weight:700;line-height:", [0, 42], ";margin-bottom:", [0, 36], ";text-align:center}\n.", [1], "mask-box .", [1], "info.", [1], "data-v-28eb88bb{color:#4f4f4f;font-size:", [0, 26], ";font-weight:400;line-height:", [0, 48], ";line-height:", [0, 30], ";max-height:", [0, 700], ";overflow-y:auto}\n", ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./subPage/pages/snowOrder/snowOrder.wxss:1:2590)", {
    path: "./subPage/pages/snowOrder/snowOrder.wxss"
  });
}
