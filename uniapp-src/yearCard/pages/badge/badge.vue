<template>
<view class="badge-page">
    <custom-nav :backFun="backFun" class="" muClass="nav-bg" :scrollTop="scrollTop" title="勋章" :titleColor="scrollTop>50?'#000000':'#FFFFFF'" :vueSlots="['content']" @back="e0()">
        <view class="icon" slot="content" v-if="!showDetail&&isShowShare" @click="handleShare($event)">
            <image class="" mode="aspectFit" src="https://eshopfile.zhiyousx.com/2023120414181583702.png" :style="'filter:'+(scrollTop>50?'invert(1)':'none')+';'"></image>
        </view>
    </custom-nav>
    <user-info class="" :otherInfo="otherInfo"></user-info>
    <badge-list :badgeList="badgeList" class=" vue-ref" ref="badgeList" :otherInfo="otherInfo" @clickBadge="clickBadge()"></badge-list>
    <page-container class="" position="center" :show="showDetail" @afterleave="closeModel($event)">
        <badge-detail class="" :detailInfo="detailInfo" :showEnter="showDetail" :title="otherInfo.title"></badge-detail>
    </page-container>
    <canvas class="" id="poster" :style="'position:'+'absolute'+';'+'top:'+'-9999rpx'+';'+'width:'+canvasInfo.width+'px'+';'+'height:'+canvasInfo.height+'px'+';'" type="2d"></canvas>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          components: {
            customNav: function() {
              Promise.all([n.e("yearCard/common/vendor"), n.e("yearCard/components/customNav")]).then(function() {
                return resolve(n("4105"))
              }.bind(null, n)).catch(n.oe)
            },
            UserInfo: function() {
              n.e("yearCard/pages/badge/components/userInfo").then(function() {
                return resolve(n("db8e"))
              }.bind(null, n)).catch(n.oe)
            },
            BadgeList: function() {
              n.e("yearCard/pages/badge/components/badgeList").then(function() {
                return resolve(n("69ec"))
              }.bind(null, n)).catch(n.oe)
            },
            BadgeDetail: function() {
              Promise.all([n.e("common/vendor"), n.e("yearCard/pages/badge/components/badgeDetail")]).then(function() {
                return resolve(n("2cd8f"))
              }.bind(null, n)).catch(n.oe)
            }
          },
          data: function() {
            return {
              scrollTop: 0,
              showDetail: !1,
              badgeList: [],
              detailInfo: {},
              backFun: !1,
              canvasInfo: {},
              otherInfo: {},
              userYearCardId: "",
              isShowShare: !1,
              posterCardList: []
            }
          },
          onPageScroll: function(e) {
            this.scrollTop = e.scrollTop
          },
          onLoad: function(e) {
            this.getMedalInfo(e)
          },
          methods: {
            getMedalInfo: function(t) {
              var n = this;
              return (0, s.default)(o.default.mark((function r() {
                var a, i, s, u, l, b, p, g;
                return o.default.wrap((function(r) {
                  for (;;) switch (r.prev = r.next) {
                    case 0:
                      return n.userYearCardId = t.userYearCardId, r.next = 3, (0, d.getMedalInfoApi)({
                        userYearCardId: t.userYearCardId
                      });
                    case 3:
                      if (1 === (a = r.sent).code) {
                        r.next = 6;
                        break
                      }
                      return r.abrupt("return", uni.showToast({
                        title: a.msg,
                        icon: "none"
                      }));
                    case 6:
                      i = a.data || {}, s = i.allList, u = (0, c.default)(i, f), l = n.$store.getters.userInfor, b = l.picUrl, p = l.nickName, n.badgeList = s, n.otherInfo = h(h({}, u), {}, {
                        avatarUrl: b || "https://eshopfile.zhiyousx.com/2021120914511172601.png",
                        nickName: p || "--",
                        usedTicketNum: t.usedTicketNum || 0,
                        totalMoney: t.totalMoney || 0
                      }), g = [], n.badgeList.length > 0 && (g = JSON.parse(JSON.stringify(n.badgeList)), n.posterCardList = g.filter((function(e) {
                        return 2 == e.status
                      }))), n.otherInfo.activeNum + n.otherInfo.waitActiveNum > 0 ? n.isShowShare = !0 : n.isShowShare = !1;
                    case 13:
                    case "end":
                      return r.stop()
                  }
                }), r)
              })))()
            },
            closeModel: function() {
              this.showDetail = !1, this.backFun = !1
            },
            openModel: function() {
              this.detailInfo.userYearCardId = this.userYearCardId, this.showDetail = !0, this.backFun = !0
            },
            clickBadge: function(e) {
              var t = this;
              this.$nextTick((function() {
                t.detailInfo = {}, t.detailInfo = t.badgeList[e], t.openModel()
              }))
            },
            handleShare: function() {
              var t = this;
              return (0, s.default)(o.default.mark((function n() {
                var a, i, c;
                return o.default.wrap((function(n) {
                  for (;;) switch (n.prev = n.next) {
                    case 0:
                      a = [], a = t.posterCardList.length > 8 ? t.posterCardList.slice(0, 8) : t.posterCardList, i = a.map((function(e) {
                        return e.medalName.length > 10 && (e.medalName = e.medalName.substring(0, 8) + "..."), e.medalSubName.length > 10 && (e.medalSubName = e.medalSubName.substring(0, 8) + "..."), e
                      })), (c = JSON.parse(JSON.stringify(t.otherInfo))).subTitle.length > 10 && (c.subTitle = c.subTitle.substring(0, 12) + "..."), t.canvasInfo = {
                        id: "poster",
                        width: uni.getSystemInfoSync().screenWidth,
                        height: 495 + 200 * Math.ceil(i.length / 2),
                        list: i,
                        otherInfo: c
                      }, t.$nextTick((function() {
                        (0, u.generatePoster)(t.canvasInfo, (function(e) {
                          r.showShareImageMenu({
                            path: e
                          }), console.log("生成海报成功", e)
                        }), t)
                      }));
                    case 7:
                    case "end":
                      return n.stop()
                  }
                }), n)
              })))()
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.badge-page .nav-bg{background-image:url('https://eshopfile.zhiyousx.com/2023120412104053329.png');background-size:100% 100%;height:303rpx;width:100%}.badge-page{background:linear-gradient(137deg,#1f1d26,#424446);height:100%;min-height:100vh;width:100%}.badge-page .icon{height:48rpx;position:absolute;right:214rpx;width:48rpx;z-index:999999}.badge-page .icon image{height:100%;width:100%}
</style>
