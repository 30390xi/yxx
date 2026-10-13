require("../@babel/runtime/helpers/Arrayincludes");
module.exports = {
  ids: [11],
  modules: {
    15: function(o, t, i) {
      var e = i(7),
        s = i.n(e),
        n = i(0),
        r = i(3),
        a = i(1),
        c = i(2);

      function d(o, t) {
        var i = Object.keys(o);
        if (Object.getOwnPropertySymbols) {
          var e = Object.getOwnPropertySymbols(o);
          t && (e = e.filter((function(t) {
            return Object.getOwnPropertyDescriptor(o, t).enumerable
          }))), i.push.apply(i, e)
        }
        return i
      }

      function u(o) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2 ? d(Object(i), !0).forEach((function(t) {
            s()(o, t, i[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i)) : d(Object(i)).forEach((function(t) {
            Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(i, t))
          }))
        }
        return o
      }
      t.a = Behavior({
        methods: {
          formatGoodInfo: function(o) {
            var t = this.storeData,
              i = t.roomId,
              e = t.curOpenid,
              s = t.shareOpenid,
              n = t.customParams,
              r = t.type,
              a = __wxConfig && __wxConfig.tabBar && __wxConfig.tabBar.list || [],
              c = u({}, o);
            return c.url && (a.forEach((function(o) {
              var t = o.pagePath.replace(/(.html|.htm)/i, "");
              (c.url.includes("?") ? c.url.substr(0, c.url.indexOf("?")).replace(/(.html|.htm)/i, "") : c.url.replace(/(.html|.htm)/i, "")) === t && (c.isTabbar = !0)
            })), c.url = c.url.includes("plugin:") || c.url.includes("plugin-private:") ? c.url : "/".concat(c.url), c.url = c.url.includes("?") ? "".concat(c.url.substr(0, c.url.indexOf("?")).replace(/(.html|.htm)/i, "")).concat(c.url.substr(c.url.indexOf("?"))) : "".concat(c.url.replace(/(.html|.htm)/i, "")), c.url = c.url + (c.url.includes("?") ? "&" : "?") + "room_id=".concat(i, "&openid=").concat(e, "&custom_params=").concat(n) + (s ? "&share_openid=".concat(s) : "") + (c.url.includes("wxlive_type=") ? "" : "&wxlive_type=".concat(r))), c.price = c.price % 100 == 0 ? c.price / 100 : (c.price / 100).toFixed(2), c.price2 = c.price2 % 100 == 0 ? c.price2 / 100 : (c.price2 / 100).toFixed(2), c.goods_id = String(c.goods_id_str || c.goods_id), c
          },
          handleViewGoods: function(o, t) {
            var i = "push" === t ? 3 : 1;
            this.storeData.curLiveStatusCode === n.a.LIVE_STATUS.END && (i = 2);
            var e = {
              actionType: 4,
              subActionType: 16,
              reserves: i,
              goodsId: o.goods_id,
              goodsName: o.name
            };
            this.addReportMMData(e), this.addReportMMData({
              actionType: 6,
              subActionType: 1,
              reserves: 1,
              goodsId: o.goods_id,
              goodsName: o.name
            }), this.setCookies(o), this.addSystemTriggerBarrage(o, e)
          },
          setCookies: function(o) {
            var t = this,
              i = this.liveManager.data,
              e = i.roomAppid,
              s = i.roomId,
              n = i.curLiveStatusCode,
              r = i.curOpenid,
              c = i.pluginAppid,
              d = o.goods_id,
              u = "".concat(e, "_").concat(c, "_").concat(s, "_").concat(n, "_").concat(r, "_").concat(d),
              l = "".concat(e, "#").concat(c, "#").concat(s, "#").concat(n, "#").concat(r, "#").concat(d);
            a.a.setCookies({
              key: u,
              value: l
            }).then((function() {
              t.addReportMMData({
                actionType: 4,
                subActionType: 39,
                reserves: 1,
                cookies: l
              })
            })).catch((function() {
              t.addReportMMData({
                actionType: 4,
                subActionType: 39,
                reserves: 2,
                cookies: l
              })
            }))
          },
          addSystemTriggerBarrage: function(o, t) {
            var i = this,
              e = o.goods_id,
              s = this.liveManager.getCurrentUserInfo();
            if (s || (s = {
                openid: this.storeData.curOpenid
              }), s.avatar && s.nickname) {
              var n = {
                avatar: s.avatar,
                nickname: s.nickname,
                openid: s.openid,
                content: " 前往了商品页",
                type: "store"
              };
              r.a.setSystemTriggerBarrage(u(u({}, this.getReqBase()), {}, {
                action: "view_good",
                content: {
                  good_id: e,
                  msg: JSON.stringify(n)
                },
                report_data: this.getReportData(t)
              })).then((function(o) {
                n && o.msg_id && i.storeSetData({
                  addSystemTriggerBarrage: u(u({}, n), {}, {
                    msg_id: o.msg_id
                  })
                })
              })).catch((function(o) {}))
            } else r.a.setSystemTriggerBarrage(u(u({}, this.getReqBase()), {}, {
              action: "view_good",
              content: {
                good_id: e,
                msg: ""
              },
              report_data: this.getReportData(t)
            })).then().catch((function(o) {}))
          },
          handleClickCoupon: function(o, t) {
            o.coupon_type === n.a.COUPON_TYPE.COUPON_LOCATION ? this._tipsCouponHasLocation(o, t) : this._realGetCoupon({
              coupon_id: o.coupon_id
            }, t)
          },
          _realGetCoupon: function(o, t) {
            var i = this,
              e = o.coupon_id;
            if (!this.g_triggerGetCoupon) {
              this.g_triggerGetCoupon = !0;
              var s = this.storeData,
                c = s.couponList,
                d = s.couponPush,
                l = this.getCouponTimeList || [];
              if (l.push(Date.now()), this.g_getCouponError && l.length === n.a.COUPON_OBTAIN_ERROR_HIT_FREQ_LIMIT) {
                if (l[l.length - 1] - l[0] < 6e4) return this.g_triggerGetCoupon = !1, a.a.tipsSimple("操作过于频繁，请稍候再试"), void l.shift();
                l.shift()
              }
              this.getCouponTimeList = l;
              var g = {
                actionType: 4,
                subActionType: 32,
                reserves: "push" === t ? 1 : 2,
                couponId: e
              };
              this.addReportMMData(g), r.a.getCoupon(u(u({}, this.getReqBase()), {}, {
                content: o,
                report_data: this.getReportData(g)
              })).then((function(o) {
                try {
                  i.addReportMMData({
                    actionType: 3,
                    subActionType: 11,
                    reserves: "push" === t ? 1 : 2,
                    couponId: e
                  }), i.g_triggerGetCoupon = !1, i.g_getCouponError = !1, i.getCouponTimeList = [];
                  var s = !1,
                    n = c.map((function(o) {
                      return e === o.coupon_id ? (s = !0, u(u({}, o), {}, {
                        isGetCouponSucc: !0
                      })) : o
                    }));
                  s && i.storeSetData({
                    couponList: n
                  }), d && d.coupon_id === e && i.storeSetData({
                    couponPush: u(u({}, d), {}, {
                      isGetCouponSucc: !0
                    })
                  }), a.a.tipsSimple("领取成功")
                } catch (o) {
                  i.logError("[_realGetCoupon] logic error", o), i.reportPerformance("LOGIC_ERROR", 1, "pluginVersion")
                }
              })).catch((function(o) {
                i.g_triggerGetCoupon = !1, i.g_getCouponError = !0;
                var t = o.errMsg || "",
                  s = o && (+o.ret || +o.err_code) || t && +t.split(":")[2].split(" ")[0];
                if (s === n.a.COUPON_OBTAIN_ERROR.COUPON_NOT_OBTAIN) {
                  var r = !1,
                    l = c.map((function(o) {
                      return e === o.coupon_id ? (r = !0, u(u({}, o), {}, {
                        isGetCouponSucc: !1
                      })) : o
                    }));
                  r && i.storeSetData({
                    couponList: l
                  }), d.coupon_id === e && i.storeSetData({
                    couponPush: u(u({}, d), {}, {
                      isGetCouponSucc: !1
                    })
                  })
                }
                if (s === n.a.COUPON_OBTAIN_ERROR.COUPON_NOT_OBTAIN || s === n.a.COUPON_OBTAIN_ERROR.COUPON_RETRY_OBTAIN) a.a.tipsSimple(t.substr(t.indexOf("".concat(s)) + "".concat(s).length + 1, t.length - 1));
                else if (s === n.a.COUPON_OBTAIN_ERROR.COUPON_NOT_LOCATION) {
                  var g = c.find((function(o) {
                    return o.coupon_id === e
                  })) || {};
                  a.a.tipsSimple("抱歉，该券只允许".concat((g.coupon_region || []).toString(), "的用户领取"))
                } else a.a.tipsSimple("领取失败，请检查你的网络情况")
              }))
            }
          },
          _tipsCouponHasLocation: function(o, t) {
            var i = this;
            this.storeData.isTipsCouopnRegion ? (this.logInfo("[_tipsCouponHasLocation] 之前已提示过"), this._getUserLoaction(o, t)) : (a.a.tipsConfirm({
              title: "该券只允许".concat((o.coupon_region || []).toString(), "的用户领取"),
              confirmText: "继续",
              onConfirm: function() {
                i.logInfo("[_tipsCouponHasLocation] 点击同意获取，同意获取地理位置"), i._getUserLoaction(o, t)
              }
            }), this.storeData.isTipsCouopnRegion = !0)
          },
          _getUserLoaction: function(o, t) {
            var i = this,
              e = this.storeData.weappName;
            a.a.getLocation().then((function(e) {
              i.logInfo("[_getUserLoaction] 获取地理位置 succ", e);
              var s = e && e.latitude || "",
                n = e && e.longitude || "",
                r = {
                  coupon_id: o.coupon_id,
                  pay_coupon_id: o.pay_coupon_id,
                  latitude: s,
                  longitude: n
                };
              i._realGetCoupon(r, t)
            })).catch((function(o) {
              i.logError("[_getUserLoaction] 获取地理位置 fail", o);
              var t = o && o.errMsg || "";
              t.includes("cancel") || t.includes("not support") || wx.showModal({
                content: "需要允许".concat(e, "小程序获取你的地理位置"),
                confirmText: "前往设置",
                success: function(o) {
                  o.confirm && a.a.openSettingForPlugin()
                }
              })
            }))
          },
          seckillCountdownTime: function(o) {
            var t = this,
              i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            clearInterval(this.seckillCountdownTimer), this.seckillCountdownTimer = setInterval((function() {
              t._seckillCountdownTime(o, i)
            }), 1e3)
          },
          _seckillCountdownTime: function(o) {
            var t = this,
              i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              e = this.liveManager.getServerTime(),
              s = [],
              n = !0;
            if (o.forEach((function(o) {
                o.isSeckilling = !1, (o.seckill_activity_info || []).forEach((function(i, r) {
                  e < i.end_time && (n = !1), e >= i.begin_time && e < i.end_time && (o.isSeckilling = !0, o.seckillCountdownTime = c.a.formatSeckillCountTime(i.end_time - e), o.seckillPrice = i.seckill_price % 100 == 0 ? i.seckill_price / 100 : (i.seckill_price / 100).toFixed(2), o.stock = t.storeData.goodsList[r].stock || i.stock, s.push(i.activity_id))
                }))
              })), n) {
              var r = this.storeData.goodsPush;
              o.forEach((function(o) {
                r && String(r.goods_id_str || r.goods_id) === String(o.goods_id_str || o.goods_id) && t.storeSetData({
                  goodsPush: o
                })
              })), i ? this.storeSetData({
                goodsList: o
              }) : this.storeSetData({
                goodsHotList: o
              }), clearInterval(this.seckillCountdownTimer)
            } else this.getSeckillLastStock(s, o, i)
          },
          getSeckillLastStock: function(o, t) {
            var i = this,
              e = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            requireMiniProgram && requireMiniProgram().getLastStock && requireMiniProgram().getLastStock({
              activity_id_list: o
            }).then((function(o) {
              i.logInfo("获取秒杀剩余库存 succ", o), (o && o.activity_info || []).forEach((function(o) {
                t.forEach((function(t) {
                  (t.seckill_activity_info || []).forEach((function(i) {
                    i.activity_id == o.activity_id && (t.stock = o.stock || i.stock)
                  }))
                }))
              }));
              var s = i.storeData.goodsPush;
              t.forEach((function(o) {
                s && String(s.goods_id_str || s.goods_id) === String(o.goods_id_str || o.goods_id) && i.storeSetData({
                  goodsPush: o
                })
              })), e ? i.storeSetData({
                goodsList: t
              }) : i.storeSetData({
                goodsHotList: t
              })
            })).catch((function(o) {
              i.logError("获取秒杀剩余库存 fail", o)
            }))
          },
          handleGoodsList: function(o) {
            var t = this.handleCurGoodsList(o),
              i = this.handleGoodsVideoList(o, t),
              e = this.storeData.curLiveStatusCode;
            if (e === n.a.LIVE_STATUS.END || e === n.a.LIVE_STATUS.REPLAY) {
              var s = t || this.storeData.goodsList,
                r = this.handleRankGoodsList(o, s);
              r && (this.logInfo("[handleGoodsList] 热门商品 change", r), this.storeSetData({
                goodsHotList: r
              }), r.find((function(o) {
                return o.seckill_activity_info && o.seckill_activity_info.length > 0
              })) && (this.logInfo("[handleGoodsList] 热门秒杀商品 change", r), this.seckillCountdownTime(r, !1)))
            }
            if (t && (t = this.handleGoodsStatList(o, t), c.a.diffList(this.storeData.goodsList, t))) {
              var a = t.map((function(o) {
                return o.goods_id
              }));
              this.logInfo("[handleGoodsList] 普通商品 change", t, a), this.storeSetData({
                goodsList: t
              }), t.find((function(o) {
                return o.seckill_activity_info && o.seckill_activity_info.length > 0
              })) && (this.logInfo("[handleGoodsList] 普通秒杀商品 change", t), this.seckillCountdownTime(t, !0))
            }
            if (i)
              if (c.a.diffList(this.storeData.goodsVideoList, i)) {
                var d = i.map((function(o) {
                  return o.goods_id
                }));
                this.logInfo("[handleGoodsList] goodsVideoList change", d.length, d), this.storeSetData({
                  goodsVideoList: i
                }, !0)
              } else this.logInfo("[handleGoodsList] 打点讲解商品列表 没有变动")
          },
          handleCurGoodsList: function(o) {
            var t = this;
            if (!o.goods) return null;
            var i = this.storeData.goodsVersion,
              e = +(o.goods && o.goods.good_version || 0);
            if (i === e && 0 !== i) return null;
            e !== i && this.logInfo("[handleCurGoodsList] goods_version", {
              oldVersion: i,
              newVersion: e
            }), this.storeSetDataNoSync({
              goodsVersion: e
            });
            var s = o.goods && o.goods.goods || [],
              r = [];
            return s.forEach((function(o, i) {
              o.seckill_activity_info = o.seckill_activity_info || [], o.goods_describe_video_info && 2 === o.goods_describe_video_info.status ? r.unshift(t.formatGoodInfo(u(u({}, o), {}, {
                goods_serial: i + 1
              }))) : r.push(t.formatGoodInfo(u(u({}, o), {}, {
                goods_serial: i + 1
              })))
            })), r.filter((function(o) {
              return !o.flag || o.flag === n.a.GOODS_FLAG.GOODS_FLAG_NORMAL
            }))
          },
          handleRankGoodsList: function(o, t) {
            var i = o.stat && o.stat.goods_stat_list || [];
            if (0 === i.length || 0 === t.length) return null;
            i.forEach((function(o) {
              return o.click_pv = o.click_pv || 0
            })), i.sort((function(o, t) {
              return t.click_pv - o.click_pv
            }));
            var e = {};
            t.forEach((function(o) {
              e[String(o.goods_id_str || o.goods_id)] = o
            }));
            var s = [];
            return i.forEach((function(o) {
              if (!(s.length >= 3)) {
                var t = e[String(o.goods_id_str || o.goods_id)];
                t && s.push(t)
              }
            })), c.a.diffList(this.storeData.goodsHotList, s) ? s : null
          },
          handleGoodsVideoList: function(o, t) {
            if (!o.goods || !t) return null;
            var i = [];
            return t.forEach((function(o, t) {
              o.goods_describe_video_info && 0 === o.goods_describe_video_info.status && i.push(u(u({}, o), {}, {
                goods_describe_video_info: u(u({}, o.goods_describe_video_info), {}, {
                  goods_id: String(o.goods_id_str || o.goods_id)
                }),
                goods_id: String(o.goods_id_str || o.goods_id)
              }))
            })), i
          },
          handleGoodsStatList: function(o, t) {
            var i = this.storeData.goodsList,
              e = this.storeData.goodsLikeList,
              s = o.stat && o.stat.goods_stat_list || [],
              n = {};
            return s && s.forEach((function(o) {
              var t = String(o.goods_id_str || o.goods_id);
              n[t] = {
                clickPv: isNaN(o.click_pv) ? 0 : o.click_pv,
                clickUv: isNaN(o.click_uv) ? 0 : o.click_uv,
                like: isNaN(o.like_cnt) ? 0 : o.like_cnt
              }
            })), (t || i).map((function(o) {
              var t = String(o.goods_id_str || o.goods_id),
                i = n[t] && n[t].like || 0;
              return u(u({}, o), {}, {
                localLike: Math.max(o.localLike || 0, i),
                clickPv: c.a.likeFormatNumber(n[t] && n[t].clickPv || 0),
                isClickLike: o.isClickLike ? o.isClickLike : e[t],
                like: c.a.likeFormatNumber(Math.max(o.localLike || 0, i, e[t] || 0))
              })
            }))
          }
        }
      })
    }
  }
};
