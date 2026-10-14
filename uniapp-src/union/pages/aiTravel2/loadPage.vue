<template>
<view class="container">
    <uni-navbar class="" title=" " type="transparentFixed"></uni-navbar>
    <z-paging bottomBgColor="#ffffff" class="page-box-image22 vue-ref" ref="paging" :safeAreaInsetBottom="isIos" style="position:fixed;z-index:11;" :toBottomLoadingMoreEnabled="true" :useChatRecordMode="true" :value="dataList" :vueSlots="['default','top']" @input="dataList = $event">
        <view class="loadBox" slot="top">
            <image class="" src="https://eshopfile.zhiyousx.com/175671244741237616.png"></image>
            <view class="loading-text">{{loadingText}}</view>
        </view>
        <view class="chat-box" style="transform:scaleY(-1);">
            <view class="chat-content">
                <view class="" space="nbsp" userSelect="true" v-if="content">
                    <zero-markdown-view class="" :markdown="content"></zero-markdown-view>
                </view>
                <view class="loading-box" v-else>正在思考中<view class="loading">
                        <view class="pot"></view>
                        <view class="pot"></view>
                        <view class="pot"></view>
                    </view>
                </view>
            </view>
        </view>
    </z-paging>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          components: {
            zeroMarkdownView: function() {
              n.e("union/components1/components/zero-markdown-view/zero-markdown-view").then(function() {
                return resolve(n("dd9a"))
              }.bind(null, n)).catch(n.oe)
            },
            zPaging: function() {
              Promise.all([n.e("common/vendor"), n.e("union/common/vendor"), n.e("union/components1/z-paging/z-paging")]).then(function() {
                return resolve(n("a7ee"))
              }.bind(null, n)).catch(n.oe)
            }
          },
          onLoad: function(t) {
            var n = this;
            this.type = t.type, this.mode = +t.mode || 1, console.log("loadPage onLoad - type:", this.type, "mode:", this.mode), uni.getStorageSync("wxopenid") ? this.getSession() : this.getOpenid().then((function(t) {
              uni.setStorageSync("unionid", t.unionid), uni.setStorageSync("wxopenid", t.openid), n.getSession()
            }))
          },
          onShow: function() {
            this.isHide && (this.isHide = !1, uni.navigateBack())
          },
          onHide: function() {
            console.log("页面隐藏，中断流式请求"), this.isHide = !0, this.task && (this.task.abort(), this.task = null), this.clearAllTimers()
          },
          data: function() {
            return {
              content: "",
              form: null,
              flowId: "",
              task: null,
              timeNetwork: null,
              timerList: [],
              newVal: "",
              index: 0,
              loadingText: "您的攻略生成中...",
              dotsCount: 0,
              dotsTimer: null,
              gotoLogin: !1,
              isDestroyed: !1,
              mode: 1,
              isHide: !1
            }
          },
          onUnload: function() {
            this.isDestroyed = !0, this.task && (this.task.abort(), this.task = null), this.clearAllTimers(), this.dotsTimer && (clearInterval(this.dotsTimer), this.dotsTimer = null), this.timeNetwork && (clearTimeout(this.timeNetwork), this.timeNetwork = null), this.timerList.length > 0 && (this.timerList.forEach((function(e) {
              clearTimeout(e)
            })), this.timerList = [])
          },
          methods: {
            getSession: function() {
              "edit" == this.type ? (this.form = uni.getStorageSync("editParam"), this.doSend(2)) : (this.form = uni.getStorageSync("aiTravelFormData"), this.createSession()), this.startDotsAnimation()
            },
            createSession: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("post", "ai/aiEscort/session/create", {
                bussType: 2,
                openId: uni.getStorageSync("wxopenid"),
                title: "AI旅游行程规划"
              }).then((function(e) {
                1 === e.code && (t.flowId = e.data, t.doSend(1))
              }))
            },
            getOpenid: function() {
              return new Promise((function(t, n) {
                e.login({
                  success: function(o) {
                    e.request({
                      url: getApp().globalData.requestUrl + "manager/app/v1/wxPopular/getSessionKeyPro/".concat(o.code),
                      method: "GET",
                      success: function(e) {
                        1 === e.data.code ? t(e.data.data) : n(e)
                      },
                      fail: function(e) {
                        n(e)
                      }
                    })
                  }
                })
              }))
            },
            doSend: function(t) {
              var n = this,
                o = this,
                a = {},
                r = "";
              if (console.log("doSend - type:", t, "mode:", this.mode), 1 == t) {
                r = "".concat(getApp().globalData.requestUrl, "ai/app/travel/plan");
                var c = JSON.parse(JSON.stringify(this.form.wantDO));
                c.push(1 === this.form.origin ? "本地人" : "外地人"), a = {
                  beginTime: this.form.beginTime,
                  endTime: this.form.endTime,
                  question: "",
                  city: this.form.city,
                  price: 1 === this.form.budgetType ? this.form.budget : 0,
                  perBudget: 2 === this.form.budgetType ? this.form.budget : 0,
                  wantDO: c,
                  adult: +this.form.adult,
                  children: +this.form.children,
                  older: +this.form.older,
                  userId: uni.getStorageSync("wxopenid"),
                  sessionId: this.flowId,
                  bussType: 2,
                  travelTitle: this.form.travelTitle
                }
              } else 2 == t && (r = 1 == this.mode ? "".concat(getApp().globalData.requestUrl, "ai/link/generate") : "".concat(getApp().globalData.requestUrl, "ai/app/share/edit"), a = s(s({}, this.form), {}, {
                perBudget: "0",
                openId: uni.getStorageSync("wxopenid"),
                bussType: 2,
                title: "AI旅游行程规划",
                travelTitle: this.form.travelTitle
              }));
              this.task = e.request({
                url: r,
                enableChunked: !0,
                method: "POST",
                timeout: 9e5,
                data: a,
                success: function(e) {
                  console.log(e, "success"), 200 == e.statusCode && n.addNextCharacter(), 400 == e.statusCode && (n.clearStarts(), n.content = "网络走丢了，请稍后重试!", n.task && n.task.abort()), n.clearAllTimers()
                },
                fail: function(e) {
                  "request:fail " == e.errMsg && (n.content = "网络走丢了，请稍后重试!", n.task && n.task.abort()), "request:fail abort" == e.errMsg && n.content && n.content.endsWith('<img style="position: relative;" class="_imgs" src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>') && (n.content = n.content.slice(0, n.content.length - 97))
                }
              }), this.task.onChunkReceived((function(t) {
                if (o.isDestroyed) o.task && (o.task.abort(), o.task = null);
                else {
                  o.clearAllTimers(), o.timeNetwork = setTimeout((function() {
                    o.clearAllTimers(), n.$uni.showToast("网络异常，请重试！"), n.content || (n.content = "网络走丢了，请稍后重试!"), n.task && (n.task.abort(), n.task = null)
                  }), 3e4), o.timerList.push(o.timeNetwork);
                  var a, r = new Uint8Array(t.data);
                  if ("[object Uint8Array]" === Object.prototype.toString.call(r)) a = decodeURIComponent(escape(String.fromCharCode.apply(String, (0, i.default)(r))));
                  else if (r instanceof ArrayBuffer) {
                    var s = new Uint8Array(r);
                    a = decodeURIComponent(escape(String.fromCharCode.apply(String, (0, i.default)(s))))
                  }
                  a.split("^").forEach((function(t) {
                    if (console.log(t, "it"), t) {
                      var i = JSON.parse(t);
                      0 == i.extend.type && "c001" == i.extend.code && (o.newVal += i.data, o.addNextCharacter()), "p001" == i.extend.code && (o.task && (o.task.abort(), o.task = null), o.dotsTimer && (clearInterval(o.dotsTimer), o.dotsTimer = null), "edit" == o.type && uni.removeStorageSync("editParam"), uni.redirectTo({
                        url: "/union/pages/aiTravel2/cardPage?sessionId=".concat(i.data.sessionId)
                      })), "p004" == i.extend.code && (n.$refs.paging.scrollToTop(), n.loadingText = "正在生成卡片..."), "p011" == i.extend.code && (n.loadingText = "生成失败，请重试！", o.task && (o.task.abort(), o.task = null), o.clearAllTimers(), uni.navigateBack())
                    }
                  }))
                }
              }))
            },
            clearAllTimers: function() {
              this.timeNetwork && (clearTimeout(this.timeNetwork), this.timeNetwork = null), this.timerList.forEach((function(e) {
                clearTimeout(e)
              })), this.timerList = []
            },
            addNextCharacter: function() {
              if (this.index < this.newVal.length) {
                var e = "の" == this.newVal[this.index] ? "" : this.newVal[this.index];
                this.content += e, this.index++, this.addNextCharacter()
              }
            },
            startDotsAnimation: function() {
              var e = this;
              this.dotsTimer = setInterval((function() {
                e.dotsCount = (e.dotsCount + 1) % 4;
                var t = ".".repeat(e.dotsCount);
                e.loadingText.includes("正在生成卡片") ? e.loadingText = "正在生成卡片".concat(t) : e.loadingText = "您的攻略生成中".concat(t)
              }), 500)
            },
            navigateToCardPage: function(t) {
              try {
                console.log("navigateToCardPage - sessionId:", t);
                var n = getCurrentPages().length;
                console.log("当前页面栈深度: ".concat(n)), n >= 8 ? (console.log("页面栈过深，使用 reLaunch 重新启动"), uni.reLaunch({
                  url: "/union/pages/aiTravel2/cardPage?sessionId=".concat(t)
                })) : (console.log("页面栈正常，使用 redirectTo 跳转"), uni.redirectTo({
                  url: "/union/pages/aiTravel2/cardPage?sessionId=".concat(t)
                }))
              } catch (n) {
                console.error("页面跳转失败:", n), uni.reLaunch({
                  url: "/union/pages/aiTravel2/cardPage?sessionId=".concat(t)
                })
              }
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.container{background-color:#fff;min-height:100vh;width:100%}.scroll-container{height:calc(100vh - 200rpx)}.loadBox{align-items:center;background-color:#fff;border-radius:20rpx;display:-webkit-flex;display:flex;flex-direction:column;justify-content:center;padding:200rpx 0 30rpx;width:100%}.loadBox image{height:336rpx;width:300rpx}.loadBox .loading-text{color:rgba(0,0,0,.85);font-size:34rpx;line-height:50rpx;margin-top:14rpx}.chat-box{display:-webkit-flex;display:flex;margin-top:28rpx;padding:30rpx;width:100%}.chat-content{background:#f8f6ff;border-radius:40rpx 40rpx 40rpx 40rpx;padding:20rpx}.loading-box{color:#606060;font-size:28rpx;justify-content:center;margin:0 20rpx}.loading-box .loading,.loading-box{align-items:center;display:-webkit-flex;display:flex}.loading-box .loading{justify-content:space-around;margin-left:10rpx;width:80rpx}.loading-box .pot{animation-delay:0s;animation-duration:1.2s;animation-iteration-count:infinite;animation-name:loading-beat-data-v-4eda9f98;border-radius:50%;display:inline-block;height:8rpx;margin-right:5rpx;width:8rpx}.loading-box .pot:nth-child(1){background:#8666fd}.loading-box .pot:nth-child(2){animation-delay:.2s;background:#8666fd}.loading-box .pot:nth-child(3){animation-delay:.4s;background:#8666fd}@-webkit-keyframes loading-beat-data-v-4eda9f98{0%{transform:scale(1)}50%{transform:scale(1.8)}100%{transform:scale(1)}}@keyframes loading-beat-data-v-4eda9f98{0%{transform:scale(1)}50%{transform:scale(1.8)}100%{transform:scale(1)}}
</style>
