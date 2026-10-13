require("../@babel/runtime/helpers/Arrayincludes");
module.exports = {
  ids: [23],
  modules: {
    26: function(e, t, a) {
      var n = a(7),
        r = a.n(n),
        i = a(3),
        s = a(0),
        o = a(2),
        l = a(1);

      function c(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), a.push.apply(a, n)
        }
        return a
      }

      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2 ? c(Object(a), !0).forEach((function(t) {
            r()(e, t, a[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : c(Object(a)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
          }))
        }
        return e
      }
      t.a = Behavior({
        methods: {
          handleHelpRank: function(e) {
            var t = this,
              a = this.storeData,
              n = a.from,
              r = a.roomAppid,
              i = a.roomId,
              l = a.userInfo,
              c = a.curOpenid,
              d = a.curLiveStatusCode,
              h = a.showRecord,
              u = a.isEnterLotteryTeamFromShare,
              f = a.showLotteryOper,
              R = a.helpRankList,
              k = a.myRankInfo,
              g = e.rank_list,
              S = e.stat,
              m = S.invite_uv,
              _ = S.invited_uv,
              v = S.inviterank_uv,
              w = g.rank_info,
              A = g.user_list,
              E = g.rank_score,
              I = w.end_time,
              D = w.gift_list,
              T = w.is_allow_staff,
              y = w.is_delete,
              O = w.last_time,
              L = w.rank_id,
              P = w.redeem,
              b = w.status,
              F = D.length > 0 ? D : this.storeData.helpRankGiftList,
              H = F.length,
              x = [],
              M = I || this.storeData.helpRankEndTime,
              N = E,
              U = this.liveManager.getServerTime();
            A = A.map((function(e, a) {
              var r = e.useruin_info && JSON.parse(e.useruin_info) || {};
              if ("player" === n && r.openid !== c && (r.nickname = o.a.encryptNickname(r.nickname)), r.headimg = o.a.avatarToSmall(r.headimg, 132) || "", r.avatar = r.headimg, r.openid === c && (e.curUser = !0, k = p(p({
                  isExist: !0,
                  rank: a + 1
                }, e), r), N = e.score), (1 === b && M - U <= 0 || 2 === b || d === s.a.LIVE_STATUS.END || d === s.a.LIVE_STATUS.FORBID) && a < H) {
                if (r.openid === c && (k.myAwardInfo = F[a], e.extra_info)) {
                  var i = JSON.parse(e.extra_info).get_gift_info,
                    l = JSON.parse(i.address) || {};
                  t.storeSetData({
                    helpRankAddress: l,
                    isFillHelpRankAddress: !!l.address,
                    isFillHelpRankPhone: !!l.phone
                  })
                }
                x.push(p({
                  useruinInfo: r,
                  awardInfo: p({}, F[a])
                }, e))
              }
              return p({
                useruinInfo: r
              }, e)
            })), x = x.length > 0 ? x : this.storeData.helpRankAwardList, (1 === b && M - U <= 0 || 2 === b || d === s.a.LIVE_STATUS.END || d === s.a.LIVE_STATUS.FORBID) && (H = H > x.length ? x.length : H, h || d === s.a.LIVE_STATUS.REPLAY || !(l && l.openid || "pusher" === n) || wx.getStorageSync("showHelpRankPanelWithEnd-".concat(r, "-").concat(i)) || (k = p(p({}, k), l), this.storeSetData({
              helpRankPanelShow: !0
            }), wx.setStorageSync("showHelpRankPanelWithEnd-".concat(r, "-").concat(i), !0))), this.storeSetData({
              helpRankEndTime: M,
              helpRankGiftList: F,
              helpRankIsAllowStaff: T,
              helpRankIsDelete: y,
              helpRankLastTime: O,
              helpRankLastFillAddressTime: o.a.lastFillAddressTime(Math.min(M, U)),
              helpRankRankId: L,
              helpRankRedeem: P,
              helpRankStatus: b,
              helpRankList: A.length > 0 ? A : R,
              helpRankInviteUV: m,
              helpRankInviterankUV: v,
              helpRankInvitedUV: _,
              helpRankGiftCount: H,
              helpRankAwardList: x,
              myRankScore: N,
              myRankInfo: k
            }, (function() {
              "player" === n && t.data._firstEnter && 1 === b && (t.data._firstEnter = !1, u && f || (t.storeSetData({
                firstReportHelpRank: !1
              }), t.reportHelpRank()))
            }))
          },
          onClickHelpRankAddress: function() {
            var e = this.data,
              t = e.isFillHelpRankAddress,
              a = e.helpRankAddress,
              n = e.helpRankEndTime,
              r = e.helpRankRankId;
            !t && Date.now() / 1e3 - n > s.a.MAX_FILL_LOTTERY_ADDRESS_TIME ? wx.showToast({
              title: "开奖已超过 24 小时，未填写寄奖地址，已视为放弃",
              icon: "none"
            }) : (this.storeSetData({
              pictureInPictureMode: "",
              isForbidReportEnter: !0
            }), t ? this.viewHelpRankAddress(r, a, Date.now() / 1e3 - n < s.a.MAX_FILL_LOTTERY_ADDRESS_TIME, "在" + o.a.lastFillAddressTime(n) + "之前可以修改奖品寄送地址") : this.chooseHelpRankAddress(r))
          },
          fillHelpRankAddress: function(e, t) {
            var a = this;
            if (e && e.address) {
              var n = this.storeData.myRankInfo;
              this.storeSetData({
                showLowVersionFillPhone: !1
              }), i.a.fillHelpRankAddress(p(p({}, this.getReqBase()), {}, {
                content: {
                  rank_id: t,
                  rank: n.rank,
                  gift_name: n.myAwardInfo.gift_name,
                  gift_url: n.myAwardInfo.gift_url,
                  code: n.myAwardInfo.code,
                  phone: e.phone,
                  address: JSON.stringify(e)
                }
              })).then((function(t) {
                a.logInfo("填写寄件地址 succ: ", t), a.storeSetData({
                  isFillHelpRankAddress: !0,
                  helpRankAddress: e
                })
              })).catch((function(e) {
                a.logError("填写寄件地址 fail: ", e), l.a.tipsSimple("填写寄件地址失败，请重试")
              }))
            }
          },
          onClickHelpRankPhone: function() {
            !this.data.isFillHelpRankPhone && Date.now() / 1e3 - this.data.helpRankEndTime > s.a.MAX_FILL_LOTTERY_ADDRESS_TIME ? wx.showToast({
              title: "开奖已超过 24 小时，未填写手机号，已视为放弃",
              icon: "none"
            }) : ("horizontal" === this.data.screenType && this.liveManager.setPageOrientation("portrait"), this.storeSetData({
              isFillHelpRankPhone: !0,
              showLowVersionFillPhone: !0
            }))
          },
          chooseHelpRankAddress: function(e) {
            var t = this;
            this.storeSetData({
              pictureInPictureMode: "",
              isForbidReportEnter: !0
            });
            var a = this.liveManager.data.isWxaMode ? "chooseAddress" : "chooseAddressForPlugin";
            l.a[a]().then((function(n) {
              t.logInfo("[抽奖面板] wxapi.".concat(a, " succ"), n), t.fillHelpRankAddress(n, e)
            })).catch((function(e) {
              "string" == typeof e && (e.includes("cancel") || e.includes("not support")) ? t.logInfo("[抽奖面板] wxapi.".concat(a, " 用户取消"), e) : t.logError("[抽奖面板] wxapi.".concat(a, " err"), e)
            }))
          },
          viewHelpRankAddress: function(e, t) {
            var a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
            this.storeSetData({
              pictureInPictureMode: "",
              isForbidReportEnter: !0,
              showLowVersionFillPhone: !1
            });
            var r = {
                weapp_name: this.liveManager.data.weappName,
                address: t.address || "",
                district: t.district || "",
                phone: t.phone || "",
                postcode: t.postcode || "",
                receive_name: t.receive_name || "",
                isWxaMode: this.liveManager.data.isWxaMode,
                canModify: a,
                tips: n
              },
              i = this,
              s = (this.storeData.urlPathPrefix || "/") + "wxlive-components/ext-player/address-preview/address-preview";
            wx.navigateTo({
              url: "".concat(s, "?livePlayerOptions=").concat(encodeURIComponent(JSON.stringify(r))),
              events: {
                acceptDataFromAddressPreviewPage: function(t) {
                  i.fillHelpRankAddress(t, e)
                }
              }
            })
          },
          reportHelpRank: function() {
            var e = this,
              t = this.liveManager.getServerTime(),
              a = this.storeData,
              n = a.curLiveStatusCode,
              r = a.rankOpenid,
              o = a.rankNickname,
              c = a.rankAvatar,
              d = a.helpRankStatus,
              h = a.helpRankIsAllowStaff,
              u = a.helpRankEndTime;
            if (r && 1 === d && n !== s.a.LIVE_STATUS.END && n !== s.a.LIVE_STATUS.FORBID) {
              if ((wx.getEnterOptionsSync && wx.getEnterOptionsSync().scene || -1) === s.a.SHARE_FRIENDS_SCENE) return void(u - t >= 5 && l.a.tipsSimple("前往小程序进行助力"));
              u - t >= 5 ? h ? i.a.helpRank(p(p({}, this.getReqBase()), {}, {
                user_openid: r,
                user_nickname: o,
                user_headimg: c
              })).then((function(t) {
                e.logInfo("为用户助力成功", t), e.storeSetData({
                  helpRankSuccee: !0
                })
              })).catch((function(t) {
                e.logError("为用户助力失败", t);
                var a = t.ret;
                1001 == a ? l.a.tipsSimple("自己无法给自己助力") : 1002 == a && l.a.tipsSimple("已助力过，无法重复助力")
              })) : i.a.getUserRole(p({}, this.getReqBase())).then((function(t) {
                e.logInfo("获取用户角色 succ", t), t && t.role_list && 0 === t.role_list.length ? (e.storeSetData({
                  isAudienceRole: !0
                }), i.a.helpRank(p(p({}, e.getReqBase()), {}, {
                  user_openid: r,
                  user_nickname: o,
                  user_headimg: c
                })).then((function(t) {
                  e.logInfo("为用户助力成功", t), e.storeSetData({
                    helpRankSuccee: !0
                  })
                })).catch((function(t) {
                  e.logError("为用户助力失败", t);
                  var a = t.ret;
                  1001 == a ? l.a.tipsSimple("自己无法给自己助力") : 1002 == a && l.a.tipsSimple("已助力过，无法重复助力")
                }))) : (e.storeSetData({
                  isAudienceRole: !1
                }), l.a.tipsSimple("工作人员分享行为不计入助力榜，且无法为他人助力"))
              })).catch((function(t) {
                e.logError("获取用户角色 fail", t)
              })) : l.a.tipsSimple("助力活动已结束")
            }
          },
          onCopy: function(e) {
            var t = this,
              a = e.currentTarget.dataset.code;
            l.a.setClipboardData(a).then().catch((function(e) {
              t.logError("wx.setClipboardData error", e, a)
            }))
          },
          toChinesNum: function(e) {
            if (!/^\d*(\.\d*)?$/.test(e)) return alert("Number is wrong!"), "Number is wrong!";
            for (var t = new Array("零", "一", "二", "三", "四", "五", "六", "七", "八", "九"), a = new Array("", "十", "百", "千", "万", "亿", "点", ""), n = ("" + e).replace(/(^0*)/g, "").split("."), r = 0, i = "", s = n[0].length - 1; s >= 0; s--) {
              switch (r) {
                case 0:
                  i = a[7] + i;
                  break;
                case 4:
                  new RegExp("0{4}\\d{" + (n[0].length - s - 1) + "}$").test(n[0]) || (i = a[4] + i);
                  break;
                case 8:
                  i = a[5] + i, a[7] = a[5], r = 0
              }
              r % 4 == 2 && 0 != n[0].charAt(s + 2) && 0 == n[0].charAt(s + 1) && (i = t[0] + i), 0 != n[0].charAt(s) && (i = t[n[0].charAt(s)] + a[r % 4] + i), r++
            }
            if (n.length > 1) {
              i += a[6];
              for (var o = 0; o < n[1].length; o++) i += t[n[1].charAt(o)]
            }
            return e >= 10 && e <= 19 && (i = i.substr(1)), i
          }
        }
      })
    }
  }
};
