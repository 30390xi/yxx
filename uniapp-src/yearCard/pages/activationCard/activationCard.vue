<template>
<view class="activation-card">
    <uni-navbar title="激活使用" :titleCenter="false" type="transparentFixed"></uni-navbar>
    <view class="unreal-header" :style="'opacity:'+opacity+';'+'padding:'+statusBarHeight+'px 96rpx 24rpx 24rpx'+';'">
        <view class="unreal-header-content"></view>
    </view>
    <view class="header-bg">
        <view class="card">
            <view class="card-title">
                <view>{{'您有'+$root.g0+'张待激活的年卡'}}</view>
                <view class="card-right-title" @click="e0($event)">
                    <text>实体卡激活</text>
                    <u-icon color="#9D8C85" name="question-circle" size="20"></u-icon>
                </view>
            </view>
            <view class="tip-popup-container" :hidden="!tipPopupShow">
                <view class="body">*实体卡和其它网络渠道购买用户请先在兑换通道兑换后再来激活，线上购买时未完成激活，可以直接在此激活</view>
            </view>
            <view class="card-body">
                <custom-swiper :swiperList="swiperList" @change="swiperChange()"></custom-swiper>
            </view>
        </view>
    </view>
    <view class="activation-card-container">
        <view class="box">
            <upload-user class="vue-ref" ref="uploadUser" :infosUser="infosUser"></upload-user>
        </view>
        <view class="box desc-explain">
            <view class="desc-explain-title">激活说明</view>
            <view class="desc-explain-content">1、为确保旅游年卡正常使用，请认真填写并核实持卡人真实身份信息和头像，以保障持卡人权益；</view>
            <view class="desc-explain-content">2、一张卡只能绑定一个身份信息，每张卡的限购数量各不相同，如需购买多年卡，请参照每张卡片的购买须知。</view>
        </view>
    </view>
    <view class="activation-card-footer">
        <view class="radio-text">
            <image class="circle-image" src="https://eshopfile.zhiyousx.com/2023110915401580825.png" v-if="checked" @click="e1($event)"></image>
            <view class="circle" v-else @click="e2($event)"></view>我已阅读并同意<text @click="openPopup($event)">《游陕西旅游年卡人像采集服务协议》</text>
        </view>
        <view :class="['red-btn',!checked&&'disabled']" @click="submit($event)">确认</view>
    </view>
    <review-popup :html="html" :show="reviewPopupShow" @updateShow="reviewPopupShow = $event" @confirm="handlePurchase()"></review-popup>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          components: {
            customSwiper: function() {
              s.e("yearCard/pages/activationCard/components/blackmonth-swiper/index").then(function() {
                return resolve(s("b46c"))
              }.bind(null, s)).catch(s.oe)
            },
            uploadUser: function() {
              s.e("yearCard/pages/activationCard/components/uploadUser/index").then(function() {
                return resolve(s("d369"))
              }.bind(null, s)).catch(s.oe)
            },
            reviewPopup: function() {
              s.e("yearCard/pages/activationCard/components/reviewPopup").then(function() {
                return resolve(s("90821"))
              }.bind(null, s)).catch(s.oe)
            }
          },
          data: function() {
            return {
              html: '\n<section class="_135editor" data-role="paragraph">\n\t<p style="text-indent:28px">\n\t\t<span style=";font-size:14px;font-family:宋体;"><span style="font-family:宋体;">感谢您选择我们提供的人脸采集认证服务。本采集认证服务协议（以下简称</span><span style="font-family:宋体;">“本协议”）由</span></span><span style=";font-size:14px;font-family:宋体;"><span style="font-family:宋体;">陕西云创网络科技股份有限公司</span></span><span style=";font-size:14px;font-family:宋体;"><span style="font-family:宋体;">（以下简称</span><span style="font-family:宋体;">“</span></span><span style=";font-size:14px;font-family:宋体;"><span style="font-family:宋体;">云创科技</span></span><span style=";font-size:14px;font-family:宋体;"><span style="font-family:宋体;">”或“我们”）与用户（以下简称“用户”或“您”）签订。您通过打钩确认即表示您已同意本协议。在确认本协议之前，请您仔细阅读本协议的全部内容。如果您不同意本协议的任何内容，或者对本协议内容或页面提示信息有疑问，请不要进行后续操作。</span></span>\n\t</p>\n\t<p style="text-indent:28px">\n\t\t<br/>\n\t</p>\n\t<p>\n\t\t<span style="font-size:14px;font-family:宋体;"><strong>一、</strong></span><strong><span style=";font-size:14px;font-family:宋体;"><span style="font-family:宋体;"><strong>定义</strong></span></span></strong>\n\t</p>\n\t<p>\n\t\t<span style=";font-size:14px;font-family:宋体;">　　</span><span style=";font-size:14px;font-family:宋体;"><span style="font-family:Calibri;">1.1</span><span style="font-family:宋体;">“人脸采集认证服务”指由</span></span><span style=";font-size:14px;font-family:宋体;"><span style="font-family:宋体;">云创科技</span></span><span style=";font-size:14px;font-family:宋体;"><span style="font-family:宋体;">提供的，通过手机对您的人脸照片信息进行采集，并通过人脸信息比对等方式来核验您的身份，并将认证结果及认证相关信息反馈给向您提供产品或服务的乙方（</span></span><span style=";font-size:14px;font-family:宋体;"><span style="font-family:宋体;">如景区</span></span><span style=";font-size:14px;font-family:宋体;"><span style="font-family:宋体;">等，以下统称</span><span style="font-family:宋体;">“商家”）的服务。</span></span>\n\t</p>\n\t<p>\n\t\t<br/>\n\t</p>\n\t<p style="margin-left:0;text-indent:0">\n\t\t<span style="font-size:14px;font-family:宋体;"><strong>二、</strong></span><strong><span style=";font-size:14px;font-family:宋体;"><span style="font-family:宋体;"><strong>权利与义务</strong></span></span></strong>\n\t</p>\n\t<p style="text-indent:28px">\n\t\t<span style=";font-size:14px;font-family:宋体;"><span style="font-family:Calibri;">2.1</span><span style="font-family:宋体;">为了识别您的身份，您同意</span></span><span style=";font-size:14px;font-family:宋体;"><span style="font-family:宋体;">云创科技</span></span><span style=";font-size:14px;font-family:宋体;"><span style="font-family:宋体;">可以获得从您在申请人脸采集认证服务过程中所填写或留存的身份信息（例如</span></span><span style=";font-size:14px;font-family:宋体;"><span style="font-family:宋体;">：</span></span><span style=";font-size:14px;font-family:宋体;"><span style="font-family:宋体;">姓名、照片、身份证号、</span></span><span style=";font-size:14px;font-family:宋体;"><span style="font-family:宋体;">手机</span></span><span style=";font-size:14px;font-family:宋体;"><span style="font-family:宋体;">号等信息）。您承诺提供的身份信息合法、有效、真实、准确并且完整。</span></span>\n\t</p>\n\t<p style="text-indent:28px">\n\t\t<br/>\n\t</p>\n\t<p style="text-indent:28px">\n\t\t<span style=";font-size:14px;font-family:宋体;"><span style="font-family:Calibri;">2.2</span><span style="font-family:宋体;">为了提高验证的准确性，您同意</span></span><span style=";font-size:14px;font-family:宋体;"><span style="font-family:宋体;">云创科技</span></span><span style=";font-size:14px;font-family:宋体;"><span style="font-family:宋体;">可以在必要时将您向</span></span><span style=";font-size:14px;font-family:宋体;"><span style="font-family:宋体;">云创科技</span></span><span style=";font-size:14px;font-family:宋体;"><span style="font-family:宋体;">提供的身份信息和人脸信息与法律法规允许或政府机关授权的机构所保存的信息进行比对核验。</span></span>\n\t</p>\n\t<p style="text-indent:28px">\n\t\t<br/>\n\t</p>\n\t<p style="text-indent:28px">\n\t\t<span style=";font-size:14px;font-family:宋体;"><span style="font-family:Calibri;">2.3</span><span style="font-family:宋体;">为了方便您在不同</span></span><span style=";font-size:14px;font-family:宋体;"><span style="font-family:宋体;">景区入园时</span></span><span style=";font-size:14px;font-family:宋体;"><span style="font-family:宋体;">更快捷地使用人脸认证服务，同时为了提升认证服务的准确性和安全性，您同意</span></span><span style=";font-size:14px;font-family:宋体;"><span style="font-family:宋体;">云创科技</span></span><span style=";font-size:14px;font-family:宋体;"><span style="font-family:宋体;">对您的身份信息和人脸信息做必要的处理。</span></span>\n\t</p>\n\t<p style="text-indent:28px">\n\t\t<br/>\n\t</p>\n\t<p style="text-indent:28px">\n\t\t<span style=";font-size:14px;font-family:宋体;"><span style="font-family:Calibri;">2.4</span><span style="font-family:宋体;">为了保护您或他人的合法权益，</span></span><span style=";font-size:14px;font-family:宋体;"><span style="font-family:宋体;">云创科技</span></span><span style=";font-size:14px;font-family:宋体;"><span style="font-family:宋体;">会在可能存在风险时暂停向您提供人脸采集认证服务。</span></span>\n\t</p>\n\t<p style="text-indent:28px">\n\t\t<br/>\n\t</p>\n\t<p style="text-indent:28px">\n\t\t<span style=";font-size:14px;font-family:宋体;"><span style="font-family:Calibri;">2.5</span><span style="font-family:宋体;">您同意不采取违法、不正当或欺骗手段使用人脸采集认证服务，否则我们有权停止为您提供服务，同时您将会承担相应的法律责任。</span></span>\n\t</p>\n\t<p style="text-indent:28px">\n\t\t<br/>\n\t</p>\n\t<p style="margin-left:0;text-indent:0">\n\t\t<span style="font-size:14px;font-family:宋体;"><strong>三、</strong></span><strong><span style=";font-size:14px;font-family:宋体;"><span style="font-family:宋体;"><strong>信息保护</strong></span></span></strong>\n\t</p>\n\t<p style="text-indent:28px">\n\t\t<span style=";font-size:14px;font-family:宋体;"><span style="font-family:Calibri;">3.1</span><span style="font-family:宋体;">我们重视对您个人信息的保护。我们将按照法律法规的规定，严格保护您的信息。</span></span>\n\t</p>\n\t<p style="text-indent:28px">\n\t\t<br/>\n\t</p>\n\t<p style="margin-left:0;text-indent:0">\n\t\t<span style="font-size:14px;font-family:宋体;"><strong>四、</strong></span><strong><span style=";font-size:14px;font-family:宋体;"><span style="font-family:宋体;"><strong>特别约定</strong></span></span></strong>\n\t</p>\n\t<p style="text-indent:28px">\n\t\t<span style=";font-size:14px;font-family:宋体;"><span style="font-family:Calibri;">4.1</span><span style="font-family:宋体;">我们努力在现有技术能力基础之上保障人脸采集认证服务有效、正常运行，并将尽力来提升人脸识别结果的准确性。但是，由于采集人脸信息容易受到表情、妆容、环境光等多种不特定因素影响，而且我们能收集到的信息范围相对有限，技术水平和认证手段也在不断升级改进之中，我们暂时无法保证每次人脸采集认证都能成功。</span></span>\n\t</p>\n\t<p style="text-indent:28px">\n\t\t<br/>\n\t</p>\n\t<p style="text-indent:28px">\n\t\t<span style=";font-size:14px;font-family:宋体;"><span style="font-family:Calibri;">4.2</span><span style="font-family:宋体;" >我们将努力保障您的合法权益。请您理解，在法律允许的范围内，我们对以下情形导致的服务中断或受阻，以及因此给您带来的风险及损失将不承担责任（</span><span style="font-family:Calibri;">1</span><span style="font-family:宋体;">）系统停机维护或升级；（</span><span style="font-family:Calibri;">2</span><span style="font-family:宋体;">）因台风、地震、洪水、雷电或恐怖袭击等不可抗力原因；（</span><span style="font-family:Calibri;">3</span><span style="font-family:宋体;">）您的电脑软硬件和通信线路、供电线路出现故障；（</span><span style="font-family:Calibri;">4</span><span style="font-family:宋体;">）因您操作不当或通过未经我们授权或认可的方式使用我们服务的；（</span><span style="font-family:Calibri;">5</span><span style="font-family:宋体;">）因病毒、木马、恶意程序攻击、网络拥堵、系统不稳定、系统或设备故障、通讯故障、电力故障、商家原因、第三方服务瑕疵或政府行为等原因。尽管有前述约定，我们将采取合理行动积极促使服务恢复正常。</span></span>\n\t</p>\n\t<p style="text-indent:28px">\n\t\t<br/>\n\t</p>\n\t<p style="margin-left:0;text-indent:0">\n\t\t<span style="font-size:14px;font-family:宋体;"><strong>五、</strong></span><strong><span style=";font-size:14px;font-family:宋体;"><span style="font-family:宋体;"><strong>争议解决</strong></span></span></strong>\n\t</p>\n\t<p>\n\t\t<span style=";font-size:14px;font-family:宋体;">　　</span><span style=";font-size:14px;font-family:宋体;"><span style="font-family:Calibri;">5.1</span><span style="font-family:宋体;">本协议的成立、生效、履行和解释，均适用中华人民共和国法律。如因</span></span><span style=";font-size:14px;font-family:宋体;"><span style="font-family:宋体;">云创科技</span></span><span style=";font-size:14px;font-family:宋体;"><span style="font-family:宋体;">与您就本合同的签订、履行或解释发生争议，双方应努力友好协商解决。如协商不成的，任一方均可向被告住所地人民法院提起诉讼。</span></span>\n\t</p>\n\t<p>\n\t\t<br/>\n\t</p>\n</section>',
              swiperList: [],
              swiperCheckedIndex: 0,
              opacity: 0,
              statusBarHeight: uni.getSystemInfoSync().statusBarHeight,
              tipPopupShow: !1,
              checked: !1,
              reviewPopupShow: !1,
              query: {},
              loading: !1,
              infosUser: {}
            }
          },
          onPageScroll: function(n) {
            this.scrollTop = n.scrollTop, this.scrollTop > 40 ? this.opacity = 1 : this.opacity = 0
          },
          onLoad: function(n) {
            this.query = n, this.getList(2, this.query.cardCode || this.query.orderId), this.$refs.uploadUser && this.$refs.uploadUser.setParams(this.query)
          },
          onShow: function() {},
          methods: {
            setDataInfos: function(n) {
              var t = this;
              console.log(n, "参数--------"), n ? this.infosUser = n : setTimeout((function() {
                t.$uni.showToast("识别失败，请重新识别或手动填写")
              }), 500)
            },
            openPopup: function() {
              this.reviewPopupShow = !0
            },
            swiperChange: function(n) {
              this.swiperCheckedIndex = n, this.setUserInfo(n)
            },
            setUserInfo: function(n) {
              var t = this.swiperList[n];
              2 === t.buyType ? this.$refs.uploadUser && this.$refs.uploadUser.setParams(t) : this.$refs.uploadUser && this.$refs.uploadUser.initParams()
            },
            getList: function() {
              var t = arguments,
                s = this;
              return (0, f.default)(a.default.mark((function e() {
                var i, f, l, y, c, u;
                return a.default.wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return i = t.length > 0 && void 0 !== t[0] ? t[0] : 2, f = t.length > 1 ? t[1] : void 0, e.next = 4, (0, o.getCardListApi)({
                        status: i,
                        activeFlag: !0
                      });
                    case 4:
                      if (1 === (l = e.sent).code) {
                        e.next = 7;
                        break
                      }
                      return e.abrupt("return", uni.showToast({
                        title: l.msg,
                        icon: "none"
                      }));
                    case 7:
                      y = l.data.map((function(n) {
                        return r(r({}, n), {}, {
                          effectiveStartDate: n.effectiveStartDate ? n.effectiveStartDate.replace(/-/g, "/") : "",
                          effectiveEndDate: n.effectiveEndDate ? n.effectiveEndDate.replace(/-/g, "/") : ""
                        })
                      })), f && (c = y.findIndex((function(n) {
                        return n.cardCode === f || n.orderId === f
                      })), u = y.splice(c, 1), y.splice.apply(y, [0, 0].concat((0, p.default)(u)))), s.swiperList = y, s.setUserInfo(0);
                    case 11:
                    case "end":
                      return e.stop()
                  }
                }), e)
              })))()
            },
            submit: (0, s("fa61").throttle)((0, f.default)(a.default.mark((function t() {
              var s, e, p;
              return a.default.wrap((function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (this.checked && !this.loading) {
                      t.next = 2;
                      break
                    }
                    return t.abrupt("return");
                  case 2:
                    return t.prev = 2, this.loading = !0, t.next = 6, this.$refs.uploadUser.collectInfo();
                  case 6:
                    return s = t.sent, e = this.swiperList[this.swiperCheckedIndex].userYearCardId, t.next = 10, (0, o.activeCardApi)(r(r({}, s), {}, {
                      userYearCardId: e
                    }));
                  case 10:
                    if (p = t.sent, this.loading = !1, uni.showToast({
                        title: 1 !== p.code ? p.msg : "激活成功",
                        icon: "none"
                      }), 1 === p.code) {
                      t.next = 15;
                      break
                    }
                    return t.abrupt("return");
                  case 15:
                    uni.redirectTo({
                      url: "/yearCard/pages/entryGarden/entryGarden?userYearCardId=".concat(e)
                    }), t.next = 21;
                    break;
                  case 18:
                    t.prev = 18, t.t0 = t.catch(2), this.loading = !1;
                  case 21:
                  case "end":
                    return t.stop()
                }
              }), t, this, [
                [2, 18]
              ])
            }))))
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.tab{align-items:center;color:#222;display:-webkit-flex;display:flex;font-size:28rpx;font-weight:400;height:100rpx;justify-content:space-around;line-height:33rpx;padding:0 40rpx}.tab .checked{color:#222;font-size:34rpx;font-weight:700;line-height:40rpx;position:relative;text-shadow:0 2px 1px rgba(0,0,0,.08)}.tab .checked::after{background-image:linear-gradient(253deg,rgba(255,84,17,0),#ff5411);border-radius:50rpx 50rpx 50rpx 50rpx;bottom:-5px;content:"";height:16rpx;position:absolute;right:0;width:100%}.divider{border-bottom:1rpx solid rgba(0,0,0,.05);display:inline-block;margin:30rpx 0;width:100%}.divider[type="dashed"]{border-bottom:1rpx dashed rgba(0,0,0,.05)}.unreal-header{background:#fff;box-shadow:0 0 10px 3px rgba(0,0,0,.05);display:-webkit-flex;display:flex;left:0;opacity:0;overflow:hidden;position:fixed;top:0;transition:all .3s linear;width:100%;z-index:30}.unreal-header .unreal-header-content{height:80rpx}.desc-explain-title{color:rgba(0,0,0,.8);font-size:32rpx;font-weight:400;line-height:38rpx;margin-bottom:20rpx}.desc-explain-content{color:rgba(0,0,0,.7);font-size:26rpx;font-weight:400;line-height:40rpx}.red-btn{align-items:center;background:linear-gradient(253deg,#ff5413,#fc4a9b);border-radius:40rpx 40rpx 40rpx 40rpx;color:#fff;display:-webkit-flex;display:flex;font-size:30rpx;font-weight:600;height:80rpx;justify-content:center;width:100%}.upload-user .upload-user-item .u-form-item{line-height:0!important}.upload-user .upload-image .u-border-bottom:after{border-bottom-width:0!important}.font-24{color:rgba(0,0,0,.5);font-size:24rpx;font-weight:400}.font-26{color:rgba(0,0,0,.8);font-size:26rpx;font-weight:400}.font-32{color:#333;font-size:32rpx;font-weight:400}.font-30{color:rgba(0,0,0,.8);font-size:30rpx;font-weight:400}.activation-card{padding-bottom:220rpx}.activation-card .disabled{opacity:.4}.activation-card .header-bg{background:linear-gradient(180deg,#ffbba0,hsla(0,0%,100%,0));border-radius:0rpx 0rpx 0rpx 0rpx;height:570rpx;position:relative}.activation-card .header-bg .card{bottom:-45rpx;height:425rpx;left:0;margin:auto;padding:0 30rpx;position:absolute;right:0;width:100%}.activation-card .header-bg .card-title{align-items:center;color:rgba(0,0,0,.8);display:-webkit-flex;display:flex;font-size:32rpx;font-weight:400;height:45rpx;justify-content:space-between;margin-bottom:40rpx}.activation-card .header-bg .card-title:last-child{color:rgba(0,0,0,.5);font-size:26rpx;font-weight:400}.activation-card .header-bg .card-title .card-right-title{align-items:center;display:-webkit-flex;display:flex}.activation-card .header-bg .card-title .card-right-title text{color:rgba(0,0,0,.5);font-size:26rpx;font-weight:400;line-height:30rpx;margin-right:8rpx}.activation-card .header-bg .card-body{height:100%}.activation-card .tip-popup-container{left:0;padding:0 30rpx;position:absolute;top:50rpx;width:100%;z-index:22}.activation-card .tip-popup-container .body{background:hsla(0,0%,100%,.7);border:1rpx solid;border-image:linear-gradient(337deg,#fff,hsla(0,0%,100%,0))1 1;border-radius:10rpx 10rpx 10rpx 10rpx;box-shadow:0rpx 10rpx 20rpx 0rpx rgba(0,0,0,.1);color:#333;font-size:24rpx;font-weight:400;height:100%;line-height:40rpx;padding:20rpx;position:relative;width:100%}.activation-card .tip-popup-container .body::after{background-image:url('https://eshopfile.zhiyousx.com/2023103020331946511.png');background-size:100% 100%;content:"";height:10rpx;position:absolute;right:30rpx;top:-10rpx;width:20rpx}.activation-card-container{margin-top:85rpx;padding:0 30rpx}.activation-card-container .box{background:#fff;border-radius:20rpx 20rpx 20rpx 20rpx;min-height:200rpx;padding:15rpx 30rpx}.activation-card-container .box:last-child{margin-top:10rpx}.activation-card-container .desc-explain{padding:30rpx 20rpx}.activation-card-footer{background:#fff;bottom:0;box-shadow:0rpx -4rpx 10rpx 0rpx rgba(0,0,0,.1);min-height:210rpx;padding:20rpx 30rpx 40rpx;position:fixed;width:100%;z-index:12}.activation-card-footer .radio-text{align-items:center;color:rgba(0,0,0,.5);display:-webkit-flex;display:flex;font-size:24rpx;font-weight:400;justify-content:center;margin-bottom:20rpx}.activation-card-footer .radio-text .circle-image{height:40rpx;margin-right:10rpx;width:40rpx}.activation-card-footer .radio-text .circle{border:1px solid #828282;border-radius:50%;height:40rpx;margin-right:10rpx;width:40rpx}.activation-card-footer .radio-text text{color:rgba(0,0,0,.8);font-size:24rpx;font-weight:400}
</style>
