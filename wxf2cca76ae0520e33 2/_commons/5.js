module.exports = {
  ids: [5],
  modules: {
    3: function(t, o, e) {
      var i = e(8),
        n = e.n(i),
        r = e(4),
        a = e(6);
      console.warn("[网络设置]", "默认环境");
      var p = !1;
      o.a = {
        setIsGrayHttpsOpen: function(t) {
          p = t
        },
        getRoomStaticInfo: function(t) {
          var o = {
            action: "get_static_info",
            content: "",
            room_id: t.roomId,
            room_appid: t.roomAppid,
            plugin_appid: t.pluginAppid,
            os_version: t.osVersion || "",
            client_version: t.clientVersion || "",
            timestamp: Date.now(),
            gray_type: t.gray_type
          };
          return r.a.liveRoutePromise(o)
        },
        getRoomSimpleStaticInfo: function(t) {
          var o = {
            action: "get_simple_static_info",
            content: "",
            room_id: t.roomId,
            room_appid: t.roomAppid,
            plugin_appid: t.pluginAppid,
            timestamp: Date.now()
          };
          return r.a.liveRoutePromise(o)
        },
        getRoomDynamicInfo: function(t) {
          var o = {
            action: "get_message",
            content: "object" === n()(t.content) ? JSON.stringify(t.content) : t.content || "",
            room_id: t.roomId,
            room_appid: t.roomAppid,
            plugin_appid: t.pluginAppid,
            gray_type: t.gray_type,
            report_data: JSON.stringify(t.report_data),
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        getRoomEndInfo: function(t) {
          var o = {
            action: "get_end_info",
            content: "",
            room_id: t.roomId,
            room_appid: t.roomAppid,
            plugin_appid: t.pluginAppid,
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        getLiveStatus: function(t) {
          var o = {
            action: "get_live_info",
            room_id: t.roomId,
            room_appid: t.roomAppid,
            content: "",
            plugin_appid: t.pluginAppid,
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        unsubscribeRoom: function(t) {
          var o = {
            action: "unsubscribe",
            room_id: t.roomId,
            content: "",
            room_appid: t.roomAppid,
            plugin_appid: t.pluginAppid,
            report_data: JSON.stringify(t.report_data),
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        setSystemTriggerBarrage: function(t) {
          var o = t.content;
          "subscribe" === t.action && t.custom_params && ((o = o || {}).custom_params = t.custom_params);
          var e = {
            action: t.action,
            room_id: t.roomId,
            content: o ? JSON.stringify(o) : "",
            room_appid: t.roomAppid,
            plugin_appid: t.pluginAppid,
            report_data: JSON.stringify(t.report_data),
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(e)
        },
        reportRoom: function(t) {
          var o = {
            action: "report_room",
            room_id: t.roomId,
            content: "object" === n()(t.content) ? JSON.stringify(t.content) : t.content || "",
            room_appid: t.roomAppid,
            plugin_appid: t.pluginAppid,
            report_data: JSON.stringify(t.report_data),
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        reportComment: function(t) {
          var o = {
            action: "report_comment",
            room_id: t.roomId,
            content: "object" === n()(t.content) ? JSON.stringify(t.content) : t.content || "",
            room_appid: t.roomAppid,
            plugin_appid: t.pluginAppid,
            report_data: JSON.stringify(t.report_data),
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        setLike: function(t) {
          var o = {
            action: "like",
            room_id: t.roomId,
            content: "object" === n()(t.content) ? JSON.stringify(t.content) : t.content || "",
            room_appid: t.roomAppid,
            plugin_appid: t.pluginAppid,
            report_data: JSON.stringify(t.report_data),
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        pushComment: function(t) {
          var o = {
            action: "comment",
            room_id: t.roomId,
            content: "object" === n()(t.content) ? JSON.stringify(t.content) : t.content || "",
            room_appid: t.roomAppid,
            plugin_appid: t.pluginAppid,
            report_data: JSON.stringify(t.report_data),
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        nudgeCommentReport: function(t) {
          var o = {
            action: "nudge",
            room_id: t.roomId,
            room_appid: t.roomAppid,
            content: "object" === n()(t.content) ? JSON.stringify(t.content) : t.content || "",
            plugin_appid: t.pluginAppid,
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        startLottery: function(t) {
          return new Promise((function(o, e) {
            a.a.liveRouteRequest({
              action: "push_msg",
              content: JSON.stringify({
                id: parseInt(t.content),
                type: 19
              }),
              room_id: t.roomId,
              room_appid: t.roomAppid
            }).then((function() {
              a.a.liveRouteRequest({
                action: "start_lottery",
                room_id: t.roomId,
                room_appid: t.roomAppid,
                content: t.content,
                plugin_appid: t.pluginAppid,
                timestamp: Date.now()
              }).then((function(t) {
                o(t)
              })).catch((function(t) {
                e(t)
              }))
            })).catch((function(t) {
              e(t)
            }))
          }))
        },
        endLottery: function(t) {
          var o = {
            action: "end_lottery",
            room_id: t.roomId,
            content: t.content,
            plugin_appid: t.roomAppid,
            room_appid: t.roomAppid,
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        cancelLottery: function(t) {
          var o = {
            action: "cancel_lottery",
            content: t.content,
            room_id: t.roomId,
            plugin_appid: t.roomAppid,
            room_appid: t.roomAppid,
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        getLotteryById: function(t) {
          var o = {
            action: "get_lottery_by_id",
            content: t.content,
            room_id: t.roomId,
            plugin_appid: t.pluginAppid,
            room_appid: t.roomAppid,
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        getLotteryResult: function(t) {
          var o = {
            action: "get_lottery_result",
            content: t.content,
            room_id: t.roomId,
            plugin_appid: t.pluginAppid,
            room_appid: t.roomAppid,
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        getLotteryResultHistory: function(t) {
          var o = {
            action: "get_lottery_result_history",
            content: t.content,
            room_id: t.roomId,
            plugin_appid: t.pluginAppid,
            room_appid: t.roomAppid,
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        getParticipated: function(t) {
          var o = {
            action: "ask_participated",
            content: JSON.stringify(t.content),
            room_id: t.roomId,
            room_appid: t.roomAppid,
            plugin_appid: t.pluginAppid,
            timestamp: Date.now()
          };
          return r.a.liveRoutePromise(o)
        },
        fillLotteryAddress: function(t) {
          var o = {
            action: "fill_lottery_address",
            room_id: t.roomId,
            room_appid: t.roomAppid,
            content: "object" === n()(t.content) ? JSON.stringify(t.content) : t.content || "",
            plugin_appid: t.pluginAppid,
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        joinLotteryTeam: function(t) {
          var o = {
            action: "join_group",
            room_id: t.roomId,
            room_appid: t.roomAppid,
            content: t.content ? JSON.stringify(t.content) : "",
            plugin_appid: t.pluginAppid,
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        getLotteryTeam: function(t) {
          var o = {
            action: "get_group",
            room_id: t.roomId,
            room_appid: t.roomAppid,
            content: t.content ? JSON.stringify(t.content) : "",
            plugin_appid: t.pluginAppid,
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        getReplayUrl: function(t) {
          var o = {
            action: "get_replay_url",
            content: "object" === n()(t.content) ? JSON.stringify(t.content) : t.content || "",
            room_id: t.roomId,
            room_appid: t.roomAppid,
            plugin_appid: t.pluginAppid,
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        getLiveInfo: function(t) {
          var o = {
            action: "get_live_info",
            content: "",
            room_id: t.roomId,
            room_appid: t.roomAppid,
            plugin_appid: t.pluginAppid,
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        getHistoryMsg: function(t) {
          var o = {
            action: "get_history_msg",
            content: "object" === n()(t.content) ? JSON.stringify(t.content) : t.content || "",
            room_id: t.roomId,
            room_appid: t.roomAppid,
            plugin_appid: t.pluginAppid,
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        pushMsg: function(t) {
          var o = {
            action: "push_msg",
            room_id: t.roomId,
            content: "object" === n()(t.content) ? JSON.stringify(t.content) : t.content || "",
            room_appid: t.roomAppid,
            plugin_appid: t.pluginAppid,
            report_data: JSON.stringify(t.report_data),
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        attentionApp: function(t) {
          var o = {
            action: "add_follow",
            room_id: t.roomId,
            plugin_appid: t.pluginAppid,
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        delAttentionApp: function(t) {
          var o = {
            action: "del_follow",
            room_id: t.roomId,
            plugin_appid: t.pluginAppid,
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        getCoupon: function(t) {
          var o = {
            action: "obtain_coupon_by_objreq",
            room_id: t.roomId,
            room_appid: t.roomAppid,
            plugin_appid: t.pluginAppid,
            content: "object" === n()(t.content) ? JSON.stringify(t.content) : t.content || "",
            report_data: JSON.stringify(t.report_data),
            timestamp: Date.now()
          };
          return r.a.liveRoutePromise(o)
        },
        addLiveTip: function(t) {
          var o = {
            action: "add_livetip",
            room_id: t.roomId,
            room_appid: t.roomAppid,
            plugin_appid: t.pluginAppid,
            content: "object" === n()(t.content) ? JSON.stringify(t.content) : t.content || "",
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        getBanUserList: function(t) {
          var o = {
            action: "get_ban_user_list",
            room_id: t.roomId,
            room_appid: t.roomAppid,
            plugin_appid: t.pluginAppid,
            content: "",
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        addBanUser: function(t) {
          var o = {
            action: "add_ban_user",
            room_id: t.roomId,
            room_appid: t.roomAppid,
            plugin_appid: t.pluginAppid,
            content: "object" === n()(t.content) ? JSON.stringify(t.content) : t.content || "",
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        removeBanUser: function(t) {
          var o = {
            action: "remove_ban_user",
            room_id: t.roomId,
            room_appid: t.roomAppid,
            plugin_appid: t.pluginAppid,
            content: "object" === n()(t.content) ? JSON.stringify(t.content) : t.content || "",
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        removeComment: function(t) {
          var o = {
            action: "remove_comment",
            room_id: t.roomId,
            room_appid: t.roomAppid,
            plugin_appid: t.pluginAppid,
            content: "object" === n()(t.content) ? JSON.stringify(t.content) : t.content || "",
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        goodsLike: function(t) {
          var o = {
            action: "goods_like",
            room_id: t.roomId,
            content: JSON.stringify({
              goods_id: t.goods_id,
              goods_id_str: t.goods_id_str,
              like_cnt: 1
            }),
            plugin_appid: t.pluginAppid,
            report_data: JSON.stringify(t.report_data),
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        getWebSocketToken: function(t) {
          var o = {
            action: "get_websocket_token",
            room_id: t.roomId,
            room_appid: t.roomAppid,
            plugin_appid: t.pluginAppid,
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        requestLinkMic: function(t) {
          var o = {
            action: "apply_linkmic",
            content: JSON.stringify({
              room_id: t.roomId,
              type: t.linkMicType,
              score: t.score,
              extra: t.extra
            }),
            room_id: t.roomId,
            room_appid: t.roomAppid,
            plugin_appid: t.pluginAppid,
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        sendWebSocketMsg: function(t) {
          var o = {
            action: "c2c_send_msg",
            content: JSON.stringify({
              msg_type: t.msgType,
              msg_sub_type: t.msgSubType,
              seq: 1,
              ack: 1,
              recv_person: t.recvPerson,
              send_person: t.sendPerson,
              body: t.body,
              time_stamp: parseInt(Date.now() / 1e3)
            }),
            room_id: t.roomId,
            room_appid: t.roomAppid,
            plugin_appid: t.pluginAppid,
            timestamp: Date.now()
          };
          return p ? a.a.liveRouteRequest(o) : r.a.liveRoutePromise(o)
        },
        reportLinkMicScore: function(t) {
          var o = {
            action: "report_linkmic_score",
            content: JSON.stringify({
              score: t.score
            }),
            room_id: t.roomId,
            room_appid: t.roomAppid,
            plugin_appid: t.pluginAppid,
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        updateMsg: function(t) {
          var o = {
            action: "update_msg",
            content: "object" === n()(t.content) ? JSON.stringify(t.content) : t.content || "",
            room_id: t.roomId,
            room_appid: t.roomAppid,
            plugin_appid: t.pluginAppid,
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        cancelLinkMicRequest: function(t) {
          var o = {
            action: "withdraw_linkmic",
            content: "",
            room_id: t.roomId,
            room_appid: t.roomAppid,
            plugin_appid: t.pluginAppid,
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        changeLinkMicType: function(t) {
          var o = {
            action: "change_linkmic",
            content: JSON.stringify({
              type: t.linkMicType
            }),
            room_id: t.roomId,
            room_appid: t.roomAppid,
            plugin_appid: t.pluginAppid,
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        getAudiencePushUrl: function(t) {
          var o = {
            action: "get_user_url",
            content: "",
            room_id: t.roomId,
            room_appid: t.roomAppid,
            plugin_appid: t.pluginAppid,
            timestamp: Date.now()
          };
          return p ? a.a.liveRouteRequest(o) : r.a.liveRoutePromise(o)
        },
        getPosterUrl: function(t) {
          var o = {
            action: "get_poster_img",
            content: "object" === n()(t.content) ? JSON.stringify(t.content) : t.content || "",
            room_id: t.roomId,
            room_appid: t.roomAppid,
            plugin_appid: t.pluginAppid,
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        getShareImgUrl: function(t) {
          var o = {
            timeout: 2500,
            action: "get_share_img_url",
            content: t.content ? JSON.stringify(t.content) : "",
            room_id: t.roomId,
            room_appid: t.roomAppid,
            plugin_appid: t.pluginAppid,
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        getLinkMicApplyBarrages: function(t) {
          var o = {
            action: "get_linkmic_apply_barrages",
            content: JSON.stringify({
              room_id: t.roomId
            }),
            room_id: t.roomId,
            room_appid: t.roomAppid,
            plugin_appid: t.pluginAppid,
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        getLiveCardDetail: function(t) {
          var o = {
            action: "get_live_card_info",
            content: "",
            room_id: t.roomId,
            room_appid: t.roomAppid,
            plugin_appid: t.pluginAppid,
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        setWxaliveStorage: function(t) {
          var o = {
            action: "set_wxalive_storage",
            content: JSON.stringify({
              key_prefix: "wifi_tip",
              key_include_useruin: !0,
              key_include_bizuin: !1,
              key_include_roomid: !1,
              expire_time: 86400,
              value: "0"
            }),
            room_id: t.roomId,
            room_appid: t.roomAppid,
            plugin_appid: t.pluginAppid,
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        checkCurrentUserCanUseRoom: function(t) {
          var o = {
            action: "check_current_user",
            room_id: t.roomId,
            room_appid: t.roomAppid,
            plugin_appid: t.pluginAppid,
            content: JSON.stringify({
              room_id: t.roomId
            }),
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        getPluginVersion: function(t) {
          var o = {
            action: "get_biz_plugin_version",
            room_id: t.roomId,
            room_appid: t.roomAppid,
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        getLinkmicEventList: function(t) {
          var o = {
            action: t.actionType ? "get_linkmic_score_list" : "get_linkmic_event_list",
            room_id: t.roomId,
            room_appid: t.roomAppid,
            needMonitor: 1,
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        inviteLinkmic: function(t) {
          var o = {
            action: "invite_linkmic",
            content: JSON.stringify({
              openid: t.openid,
              bizuin: t.bizuin,
              room_id: t.roomId
            }),
            room_id: t.roomId,
            room_appid: t.roomAppid,
            needMonitor: 1,
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        createCommonMixStream: function(t) {
          var o = {
            action: "create_common_mix_stream",
            content: JSON.stringify(t.content),
            room_appid: t.roomAppid,
            room_id: t.roomId,
            needMonitor: 1,
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        cancelCommonMixStream: function(t) {
          var o = {
            action: "cancel_common_mix_stream",
            room_appid: t.roomAppid,
            room_id: t.roomId,
            needMonitor: 1,
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        linkmicSwitch: function(t) {
          var o = {
            action: "linkmic_switch",
            content: JSON.stringify({
              func_switch: t.funcSwitch
            }),
            room_id: t.roomId,
            room_appid: t.roomAppid,
            needMonitor: 1,
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        getLinMicEventByUin: function(t) {
          var o = {
            action: "get_linkmic_event_byUin",
            content: JSON.stringify({
              openid: t.openid
            }),
            room_id: t.roomId,
            room_appid: t.roomAppid,
            needMonitor: 1,
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        getNicknameHeadimg: function(t) {
          var o = {
            action: "get_nickname_headimg",
            content: JSON.stringify({
              openid: t.openid
            }),
            room_id: t.roomId,
            room_appid: t.roomAppid,
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        sendFollowMessage: function(t) {
          var o = {
            action: "send_follow_message",
            room_id: t.roomId,
            room_appid: t.roomAppid
          };
          return a.a.liveRouteRequest(o)
        },
        genGoodsDescribeVideo: function(t) {
          var o = {
            action: "gen_goods_describe_video",
            room_id: t.roomId,
            room_appid: t.roomAppid,
            plugin_appid: t.pluginAppid,
            content: JSON.stringify(t.content),
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        deleteGoodsDescribeVideo: function(t) {
          var o = {
            action: "del_goods_describe_video",
            room_id: t.roomId,
            room_appid: t.roomAppid,
            plugin_appid: t.pluginAppid,
            content: String(t.goodId),
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        startGoodsDescribeVideo: function(t) {
          var o = {
            action: "start_goods_describe_video",
            room_id: t.roomId,
            room_appid: t.roomAppid,
            plugin_appid: t.pluginAppid,
            content: {
              goods_id: t.goodsId,
              str_goods_id: String(t.goodsId),
              start_time: t.startTime
            },
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        changeSubAnchorWechat: function(t) {
          var o = t.action,
            e = t.roomId,
            i = t.roomAppid,
            n = t.sub_anchor_wechat,
            r = t.old_sub_anchor_wechat,
            p = t.new_sub_anchor_wechat,
            u = t.openid,
            c = t.version,
            m = {
              action: o,
              room_id: e,
              room_appid: i,
              plugin_appid: i,
              content: JSON.stringify({
                sub_anchor_wechat: n,
                old_sub_anchor_wechat: r,
                new_sub_anchor_wechat: p,
                openid: u,
                room_id: e,
                version: c
              }),
              timestamp: Date.now()
            };
          return a.a.liveRouteRequest(m)
        },
        getAnchorRoomList: function() {
          var t = {
            action: "get_anchor_room_list",
            room_id: room_id,
            content: {
              start: 0,
              limit: 50,
              status: 0,
              type: 0
            },
            plugin_appid: room_appid,
            room_appid: room_appid,
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(t)
        },
        getNoticeStatus: function(t) {
          var o = {
            action: "get_notice_status",
            room_id: t.roomId,
            room_appid: t.roomAppid,
            plugin_appid: t.roomAppid,
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        pushNotice: function(t) {
          var o = {
            action: "push_msg",
            room_id: t.roomId,
            room_appid: t.roomAppid,
            plugin_appid: t.roomAppid,
            content: JSON.stringify({
              extend: JSON.stringify({
                content: t.msgcontent
              }),
              type: 35
            }),
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        decryptLotteryPhoneNum: function(t) {
          var o = {
            action: "decrypt_lottery_phone_num",
            content: "object" === n()(t.content) ? JSON.stringify(t.content) : t.content || "",
            room_id: t.roomId,
            room_appid: t.roomAppid,
            plugin_appid: t.pluginAppid,
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        mmdataReport: function(t) {
          var o = {
            action: "report_data",
            content: "object" === n()(t.content) ? JSON.stringify(t.content) : t.content || "",
            room_id: t.roomId,
            room_appid: t.roomAppid,
            plugin_appid: t.pluginAppid,
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        helpRank: function(t) {
          var o = {
            action: "help_rank",
            room_id: t.roomId,
            room_appid: t.roomAppid,
            plugin_appid: t.pluginAppid,
            content: JSON.stringify({
              rank_id: t.roomId,
              user_openid: t.user_openid,
              user_nickname: t.user_nickname,
              user_headimg: t.user_headimg
            }),
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        getUserRole: function(t) {
          var o = {
            action: "user_role",
            room_id: t.roomId,
            room_appid: t.roomAppid,
            plugin_appid: t.pluginAppid,
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        fillHelpRankAddress: function(t) {
          var o = {
            action: "fill_rank_gift_info",
            room_id: t.roomId,
            room_appid: t.roomAppid,
            content: "object" === n()(t.content) ? JSON.stringify(t.content) : t.content || "",
            plugin_appid: t.pluginAppid,
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        },
        reportRank: function(t) {
          var o = {
            action: "start_rank",
            room_id: t.roomId,
            room_appid: t.roomAppid,
            plugin_appid: t.pluginAppid,
            timestamp: Date.now()
          };
          return a.a.liveRouteRequest(o)
        }
      }
    },
    6: function(t, o, e) {
      e(103);
      var i = e(8),
        n = e.n(i),
        r = e(7),
        a = e.n(r),
        p = e(2),
        u = e(9),
        c = e(14),
        m = e(0),
        d = e(1);

      function s(t, o) {
        var e = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          o && (i = i.filter((function(o) {
            return Object.getOwnPropertyDescriptor(t, o).enumerable
          }))), e.push.apply(e, i)
        }
        return e
      }

      function _(t) {
        for (var o = 1; o < arguments.length; o++) {
          var e = null != arguments[o] ? arguments[o] : {};
          o % 2 ? s(Object(e), !0).forEach((function(o) {
            a()(t, o, e[o])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : s(Object(e)).forEach((function(o) {
            Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(e, o))
          }))
        }
        return t
      }
      var l = Object(c.a)({
          appid: m.a.PLUGIN_APPID,
          page: "sdk/https"
        }),
        g = d.a.getCurAppid() || "wx40f8626ddf43d362",
        f = function() {
          for (var t = arguments.length, o = new Array(t), e = 0; e < t; e++) o[e] = arguments[e]
        };
      f("ENV_MODE", "appid_plugin");
      var v = function(t, o) {
        var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 6048e5;
        wx.setStorageSync && wx.setStorageSync(t, {
          expire: e ? e + Date.now() : 0,
          value: o
        })
      };

      function R(t, o) {
        return isNaN(t) || isNaN(o) ? 0 : Math.min(Math.max(0, o - t), 1e4)
      }
      var y = function(t) {
          v("g_request_ticket", t, 648e4)
        },
        A = function() {
          v("g_request_ticket", null)
        },
        w = function() {
          return new Promise((function(t, o) {
            var e, i = ("g_request_ticket", (e = wx.getStorageSync && wx.getStorageSync("g_request_ticket") || null) && e.expire && e.expire >= Date.now() ? (f("没有过期", e.expire, Date.now(), e.value), e.value || null) : null);
            if (i && i.sessionid) return f("缓存的参数 cacheTicket", i), void t(i);
            (function() {
              var t = Date.now(),
                o = !0;
              return Promise.race([new Promise((function(e, i) {
                wx.operateWXData({
                  apiName: "getGetPasskey",
                  reqData: {},
                  success: function(n) {
                    o = !1;
                    var r = Date.now(),
                      a = n && n.rawData || null,
                      p = JSON.parse(a);
                    p && p.pass_ticket && p.passkey && p.uin ? (e({
                      _pass_ticket: encodeURIComponent(p.pass_ticket),
                      _passkey: p.passkey,
                      _uin: p.uin,
                      appid: g
                    }), u.a.addActionReportItem({
                      action: "getGetPasskey",
                      time: parseInt(t / 1e3),
                      cost_time: R(t, r),
                      ext_msg: "succ"
                    })) : (i({
                      ret: n.ret || -1,
                      err_msg: "api=getGetPasskey no ticket",
                      res: n
                    }), u.a.addActionReportItem({
                      action: "getGetPasskey",
                      time: parseInt(t / 1e3),
                      cost_time: R(t, r),
                      ext_msg: "no ticket"
                    }))
                  },
                  fail: function(e) {
                    o = !1;
                    var n = Date.now();
                    i({
                      ret: e.ret || -1,
                      err_msg: "api=getGetPasskey wx.operateWXData fail",
                      res: e
                    }), u.a.addActionReportItem({
                      action: "getGetPasskey",
                      time: parseInt(t / 1e3),
                      cost_time: R(t, n),
                      ext_msg: "getGetPasskey fail"
                    })
                  }
                })
              })), new Promise((function(e, i) {
                setTimeout((function() {
                  i({
                    ret: 500,
                    err_msg: "api=getGetPasskey timeout"
                  }), o && u.a.addActionReportItem({
                    action: "getGetPasskey",
                    time: parseInt(t / 1e3),
                    cost_time: "5000",
                    ext_msg: "timeout"
                  })
                }), "5000")
              }))])
            })().then((function(o) {
              return t(o)
            })).catch((function(t) {
              return o(t)
            }))
          }))
        },
        D = function(t) {
          return t._isTimeout = !0, Promise.race([q(t), new Promise((function(o, e) {
            var i = Date.now(),
              n = t._reqData && t._reqData.timeout || "5000";
            setTimeout((function() {
              e({
                ret: 500,
                err_msg: "request timeout, " + n
              }), t._isTimeout && u.a.addActionReportItem({
                action: t && t._reqData && t._reqData.action || "no_action",
                bizuin: t && t._reqData && t._reqData.room_appid || "",
                time: parseInt(i / 1e3),
                cost_time: n,
                ext_msg: "timeout"
              })
            }), n)
          }))])
        },
        q = function(t) {
          return new Promise((function(o, e) {
            if (!t.url) return t._isTimeout = !1, void e({
              ret: -2,
              errmsg: "no url"
            });
            var i = Date.now();
            wx.request({
              url: t.url,
              data: t.data,
              method: t.method,
              header: t.header,
              success: function(n) {
                t._isTimeout = !1;
                var r = Date.now();
                n.statusCode >= 400 ? e(_(_({}, n), {}, {
                  ret: n.statusCode,
                  err_msg: "wx.request statusCode error"
                })) : o(n), u.a.addActionReportItem({
                  action: t && t._reqData && t._reqData.action || "no_action",
                  bizuin: t && t._reqData && t._reqData.room_appid || "",
                  time: parseInt(i / 1e3),
                  cost_time: R(i, r),
                  ext_msg: n.statusCode >= 400 ? "statusCode error" : "succ"
                })
              },
              fail: function(o) {
                t._isTimeout = !1;
                var n = Date.now();
                console.error("wx.request fail", o), e({
                  ret: o && o.statusCode || -600,
                  err_msg: "wx.request fail" + JSON.stringify(o)
                }), u.a.addActionReportItem({
                  action: t && t._reqData && t._reqData.action || "no_action",
                  bizuin: t && t._reqData && t._reqData.room_appid || "",
                  time: parseInt(i / 1e3),
                  cost_time: R(i, n),
                  ext_msg: "fail"
                })
              }
            })
          }))
        },
        I = function(t, o) {
          var e = [];
          0 !== t.indexOf("https://") && e.push("https://servicewechat.com"), e.push(t);
          var i = !1;
          return "?" !== t[t.length - 1] && (t.indexOf("?") <= 0 ? e.push("?") : i = !0), o.pluginVersion = p.a.pluginVersion, Object.keys(o).forEach((function(t, n) {
            o[t] && ((0 === n && i || n) && e.push("&"), e.push(t + "=" + o[t]))
          })), e.join("")
        },
        h = function t(o) {
          var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (o.url) return new Promise((function(i, n) {
            w().then((function(r) {
              var a = I(o.url, r);
              a ? (f("url", a), D(_(_({}, o), {}, {
                url: a
              })).then((function(r) {
                var a = r && r.data && r.data.base && r.data.base.ret;
                null == a && (a = -1);
                var p = r && r.data && r.data.base && r.data.base.err_msg || "",
                  u = r && r.data && r.data.base && r.data.base.sessionid || "";
                if (200003 === a) return f("ret = 200003"), A(), e ? void n({
                  ret: a,
                  err_msg: "request fail by ticket expire"
                }) : t(o, !0).then((function(t) {
                  return i(t)
                })).catch((function(t) {
                  return n(t)
                }));
                if (y({
                    sessionid: u
                  }), 0 === a) {
                  var c = JSON.parse(r && r.data && r.data.data || null) || {};
                  i(_(_({}, c), {}, {
                    ret: c.errcode || 0,
                    err_msg: ""
                  }))
                } else n(_(_({}, r), {}, {
                  ret: a,
                  err_msg: p
                }))
              })).catch((function(r) {
                return e ? void n(_(_({}, r), {}, {
                  ret: r.ret || -600,
                  err_msg: r.err_msg || "request fail"
                })) : void t(o, !0).then((function(t) {
                  return i(t)
                })).catch((function(t) {
                  return n(t)
                }))
              }))) : n({
                ret: -2,
                err_msg: "no url"
              })
            })).catch((function(r) {
              if (!e) return A(), void t(o, !0).then((function(t) {
                return i(t)
              })).catch((function(t) {
                return n(t)
              }));
              n(_(_({}, r), {}, {
                ret: r.ret || -700,
                err_msg: r.err_msg || "request fail by no ticket"
              }))
            }))
          }));
          reject({
            ret: -2,
            err_msg: "no url"
          })
        },
        S = d.a.getSystemInfoSync() || {},
        b = S.model && S.model.trim();

      function O(t, o, e) {
        try {
          var i = o.action || "no_action",
            n = "succ" === t ? l.infoNoConsole : l.errorNoConsole;
          p.a.isOpenLocalReqLog && "fail" === t && console.error("[".concat(o.action, "]"), "type=fail", "req=", o, " resp=", e);
          var r = {};
          Object.keys(o).forEach((function(t) {
            "report_list" === t || "report_data" === t ? r.report_list = "***" : "report_data" === i && "content" === t ? r.content = "***" : r[t] = o[t]
          }));
          var a = JSON.stringify(e);
          if (a.length < 400) return void n("[".concat(i, "] type=").concat(t, " req="), r, "resp=", a);
          var u = {};
          Object.keys(e).forEach((function(t) {
            ("comments" === t || "barrages" === t || "goods" === t || "live_info" === t || "play_url_key_list" == t || "play_url_list" === t) && JSON.stringify(e[t]).length > 100 ? n("[".concat(i, "] resp[").concat(t, "]="), e[t]) : u[t] = e[t]
          })), n("[".concat(i, "] type=").concat(t, " req="), r, "resp[...]=", u)
        } catch (t) {
          console.log("[上报日志失败] err", t)
        }
      }
      o.a = {
        request: h,
        liveRouteRequest: function(t) {
          return t.plugin_version = p.a.pluginVersion || "", t.phone_model = b, t.client_version = t.client_version || S.version, new Promise((function(o, e) {
            (function(t) {
              return t.content && "object" === n()(t.content) && (t.content = t.content ? JSON.stringify(t.content) : ""), new Promise((function(o, e) {
                h({
                  url: "/wxaliveapp/live_route?",
                  data: {
                    req: {
                      api_name: "LiveRoute",
                      req_data: JSON.stringify(t)
                    }
                  },
                  _reqData: t,
                  action: t.action,
                  method: "POST"
                }).then((function(t) {
                  if (0 !== t.ret) e(t);
                  else try {
                    var i = t.resp && t.resp.raw_data || null;
                    "ok" === i || null === i ? o({
                      ret: 0,
                      err_msg: "ok"
                    }) : (i = JSON.parse(i), o(_(_({}, i), {}, {
                      ret: 0
                    })))
                  } catch (o) {
                    l.error("[https] livebackend parse error", {
                      ret: t.ret,
                      err: o
                    }), e(_(_({}, t), {}, {
                      ret: t.ret,
                      err_msg: "livebackend parse error,",
                      err: o
                    }))
                  }
                })).catch((function(t) {
                  e(t)
                }))
              }))
            })(t).then((function(e) {
              o(e), O("succ", t, e)
            })).catch((function(o) {
              e(o), O("fail", t, o)
            }))
          }))
        }
      }
    }
  }
};
