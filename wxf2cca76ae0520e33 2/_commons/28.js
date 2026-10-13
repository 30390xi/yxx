module.exports = {
  ids: [28],
  modules: {
    34: function(t, e, n) {
      var o = n(3),
        i = n(1);
      e.a = Behavior({
        attached: function() {
          var t = wx.getStorageSync("player_isTipedAttentionGuide");
          void 0 !== t && this.storeSetData({
            isTipedAttentionGuide: !!t
          })
        },
        methods: {
          onAttention: function(t) {
            var e = this,
              n = t.target.dataset.source;
            this._onAttentionLock ? this._onAttentionLockTimer = setTimeout((function() {
              e._onAttentionLock = 0
            }), 2e3) : (this._onAttentionLock = !0, this.storeData.isAttention ? this.delAttentionApp(n) : this.attentionApp(n))
          },
          delAttentionApp: function(t) {
            var e = this,
              n = this,
              a = this.storeData.isAttention;
            o.a.delAttentionApp(this.getReqBase()).then((function(o) {
              e._onAttentionLock = 0, clearTimeout(e._onAttentionLockTimer), n.addReportMMData({
                actionType: 3,
                subActionType: 13,
                reserves: "card" === t ? 1 : 2
              }), n.logInfo("unattention succ", o), n.storeSetData({
                isAttention: !a
              }), i.a.tipsSimple("已取消订阅")
            })).catch((function(t) {
              e._onAttentionLock = 0, clearTimeout(e._onAttentionLockTimer), 1 === (t && (+t.ret || +t.err_code) || t.errMsg && +t.errMsg.split(":")[2]) ? e.storeSetData({
                isAttention: 0
              }) : (e.logError("unattention fail", t), i.a.tipsSimple("取消订阅失败"))
            }))
          },
          attentionApp: function(t) {
            var e = this,
              n = this,
              a = this.storeData.isAttention;
            o.a.attentionApp(this.getReqBase()).then((function(o) {
              e._onAttentionLock = 0, clearTimeout(e._onAttentionLockTimer), n.addReportMMData({
                actionType: 3,
                subActionType: 12,
                reserves: "card" === t ? 1 : 2
              }), e.logInfo("attention succ", o), n.storeSetData({
                isAttention: !a
              }), n.storeData.isTipedAttentionGuide ? i.a.tipsSimple(e.storeData.isRecommendShow ? "订阅成功，开播时会收到提醒，也可在 发现>小程序>购物直播 查看动态。" : "订阅成功，直播开始时将会收到提醒。", 3e3) : (n.storeSetData({
                showAttentionGuide: !0,
                isTipedAttentionGuide: 1,
                showProfileModal: !1
              }), wx.setStorageSync("player_isTipedAttentionGuide", 1))
            })).catch((function(t) {
              e._onAttentionLock = 0, clearTimeout(e._onAttentionLockTimer), 120002 === (t && (+t.ret || +t.err_code) || t.errMsg && +t.errMsg.split(":")[2]) ? e.storeSetData({
                isAttention: 1
              }) : (e.logError("attention fail", t), i.a.tipsSimple("订阅失败"))
            }))
          }
        }
      })
    }
  }
};
