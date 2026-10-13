module.exports = require("../../_commons/0.js")([require("../../_commons/1.js"), require("../../_commons/20.js"), require("../../_commons/19.js"), require("../../_commons/26.js"), {
  ids: [37],
  modules: {
    268: function(e, t, o) {
      o.r(t);
      var i = o(7),
        n = o.n(i),
        r = o(18);

      function s(e, t) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t && (i = i.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), o.push.apply(o, i)
        }
        return o
      }

      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {};
          t % 2 ? s(Object(o), !0).forEach((function(t) {
            n()(e, t, o[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : s(Object(o)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
          }))
        }
        return e
      }
      var l = [],
        c = {},
        u = o.n(r).a.EmojiPanelData,
        h = wx.getSystemInfoSync();
      Component({
        options: {
          styleIsolation: "apply-shared",
          addGlobalClass: !0,
          pureDataPattern: /^_/
        },
        properties: {
          padding: {
            type: Number,
            value: 15
          },
          backgroundColor: {
            type: String,
            value: "#EDEDED"
          },
          showSend: {
            type: Boolean,
            value: !0
          },
          showDel: {
            type: Boolean,
            value: !0
          },
          showHistory: {
            type: Boolean,
            value: !0
          },
          height: {
            type: Number,
            value: 300
          },
          source: {
            type: String,
            value: ""
          },
          isSendDisabled: {
            type: Boolean,
            value: !0
          },
          isShow: {
            type: Boolean,
            value: !0
          }
        },
        data: {
          history: wx.getStorageSync("wxlive_player_emoji_history") || [],
          tmplHistory: [],
          emotions: u,
          extraPadding: 0,
          perLine: 0,
          scrollTop: 0,
          disperseSpace: 0
        },
        observers: {
          isShow: function(e) {
            var t = this,
              o = "mac" === h.platform || "windows" === h.platform,
              i = wx.getStorageSync("wxlive_player_emoji_history") || [];
            o && this.scrollTop && this.setData({
              scrollTop: this.scrollTop++
            }), this.setData({
              history: i
            }), e && (this.operationNodeInfo || (this.createSelectorQuery().select("#weui-emoji__operation").boundingClientRect((function(e) {
              t.operationNodeInfo = e, t.createSelectorQuery().select("#weui-emotion_item_1").boundingClientRect((function(i) {
                c = i, t.lineCount = Math.floor((h.windowWidth - 20) / i.width), t.scrollDistance = Math.abs(e.top - i.top), o && (t.setData({
                  scrollTop: 1
                }), setTimeout((function() {
                  t.createSelectorQuery().select("#weui-emoji__operation").boundingClientRect((function(e) {
                    console.log("rect: ", e), t.operationNodeInfo = e, t.createSelectorQuery().select("#weui-emotion_item_1").boundingClientRect((function(i) {
                      console.log("emotionRect: ", i), c = i, t.lineCount = Math.floor(h.windowWidth / i.width), t.scrollDistance = Math.abs(e.top - i.top), o && t.setData({
                        scrollTop: 2
                      })
                    })).exec()
                  })).exec()
                }), 300))
              })).exec()
            })).exec(), this.createSelectorQuery().select("#weui-emotion_item_1").boundingClientRect((function(e) {
              t.smileyHeight = e.height
            })).exec()))
          }
        },
        lifetimes: {
          attached: function() {
            var e = this.data.padding,
              t = h.windowWidth,
              o = Math.floor((t - 2 * e) / 49),
              i = Math.floor((t - 2 * e - 40 * o) / (o - 1)),
              n = (t - 40 * o) / 2,
              r = Math.ceil((120 - n) / 40),
              s = o - this.data.emotions.length % o;
            this.feedLastLine(s), this.setData({
              perLine: o,
              extraPadding: i,
              hasSafeBottom: this.hasSafeBar(),
              disperseSpace: n,
              operationOccupyEmotionNum: r
            }), this.feedHistory(), this.uiPlatform()
          }
        },
        methods: {
          uiPlatform: function() {
            var e = wx.getSystemInfoSync().platform;
            this.setData({
              uiPlatform: e
            })
          },
          hasSafeBar: function() {
            var e = wx.getSystemInfoSync().model;
            return /iphone\sx/i.test(e) || /iphone/i.test(e) && /unknown/.test(e) || /iphone\s11/i.test(e)
          },
          feedHistory: function() {
            for (var e = this.data.history.length, t = this.data.perLine - e + 1, o = [], i = 0; i < t; i++) o.push({
              id: -999
            });
            this.setData({
              tmplHistory: o
            })
          },
          scrollComment: function(e, t) {
            null != t && null != t || (t = 300);
            var o = null;
            return function() {
              var i = +new Date;
              (i - o > t || !o) && (e.apply(this, arguments), o = i)
            }
          }((function(e) {
            var t = this,
              o = e.detail,
              i = o.scrollTop;
            if (o.scrollHeight, !(i < 0)) {
              this.scrollTop = i;
              var n = i + this.scrollDistance,
                r = Math.floor(n / c.height),
                s = n % c.height / (c.height - this.smileyHeight / 2);
              s > 1 && r++;
              var l = this.data.emotions.map((function(e, o) {
                var i = !0,
                  n = 1,
                  l = Math.floor(o / t.lineCount) + 1,
                  c = o % t.lineCount;
                return c + t.data.operationOccupyEmotionNum >= t.data.perLine && l > r && (i = !1, n = 0), c + t.data.operationOccupyEmotionNum >= t.data.perLine && l === r + 1 && (n = s > 1 ? s - 1 : s), a(a({}, e), {}, {
                  isShow: i,
                  emojiOpacity: n
                })
              }));
              this.setData({
                emotions: l
              })
            }
          }), 0),
          feedLastLine: function(e) {
            for (var t = this.data.emotions, o = 0; o < e; o++) t.push({
              id: -999
            });
            this.setData({
              emotions: t
            })
          },
          getEmojiNames: function() {
            return l
          },
          insertEmoji: function(e) {
            var t = this.data,
              o = e.currentTarget.dataset.idx,
              i = t.emotions[o].cn,
              n = wx.getStorageSync("wxlive_player_emoji_history") || [];
            n = this.LRUCache(n, t.perLine, o), this.feedHistory(), this.triggerEvent("insertemoji", {
              emotionName: i
            })
          },
          deleteEmoji: function() {
            this.triggerEvent("delemoji")
          },
          send: function() {
            this.data.isSendDisabled || this.triggerEvent("send")
          },
          LRUCache: function(e, t, o) {
            var i = e.indexOf(o);
            return i >= 0 ? (e.splice(i, 1), e.unshift(o)) : e.length < t ? e.unshift(o) : e.length >= t && (e.unshift(o), e = e.slice(0, t)), wx.setStorageSync("wxlive_player_emoji_history", e), e
          }
        }
      })
    },
    62: function(e, t, o) {
      e.exports = o(268)
    }
  },
  entries: [
    [62, 0, 1, 20, 19, 26]
  ]
}]);
