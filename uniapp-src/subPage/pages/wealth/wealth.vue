<template>
<view class="">
    <view class="top-box">
        <view class="body">
            <view class="box1">
                <view class="box1-1">
                    <view class="box1-1-1">余额</view>
                    <view class="box1-1-2">(元)</view>
                </view>
                <view class="box1-2">{{wealthNum.accountBalance||0}}</view>
                <view class="box1-3">累计收入</view>
                <view class="box1-4">{{wealthNum.accountIncome||0}}</view>
            </view>
            <view class="box2">
                <text class="option">结算中</text>
                <text class="value">{{wealthNum.brokerageIncome||0}}</text>
            </view>
            <view class="box3">
                <view :class="['box3-1','',wealthNum.accountBalance<minNum?'dis':'']" @click="withdrawal($event)">{{ (wealthNum.accountBalance<minNum?'满'+minNum+'提现':'提现') }}</view>
                <view class="box3-2">
                    <view class="box3-2-1">
                        <view class="bt1">已提现</view>
                        <view class="bt2">{{wealthNum.accountWithdraw||0}}</view>
                    </view>
                </view>
            </view>
        </view>
        <view class="jmpFooter" v-if="!isSubscribeFlag" @click="jmpOfficial($event)">关注「游陕西」公众号，实时接收业绩通知 >></view>
    </view>
    <view class="tab">
        <u-tabs activeColor="#3C3C3C" barHeight="8" :barStyle="barStyle" barWidth="120" bgColor="rgba(0,0,0,0)" :bold="true" class="" :current="currentIndex" inactiveColor="#6B6B6B" :isScroll="false" :list="listTab" @change="changecurr()"></u-tabs>
    </view>
    <scroll-view class="list-box" :scrollWithAnimation="true" :scrollY="true" :style="'height:'+scrollH+'px'+';'" v-if="currentIndex==0">
        <view class="cashRecord" v-if="withDrawList&&withDrawList[0]">
            <view class="item" :key="index" v-for="(item, index) in $root.l0">
                <text class="num">{{'￥'+item.sum}}</text>
                <text class="time">{{item.createTime}}</text>
                <text :class="['state','',item.status==0?'red':'',item.status==2?'fail':'']">{{item.m0}}</text>
            </view>
        </view>
        <empty-state @touchmove.stop.prevent="" class="" imgUrl="https://eshopfile.zhiyousx.com/nodetailed.png" text="暂无提现记录" v-else></empty-state>
    </scroll-view>
    <scroll-view class="list-box" :scrollWithAnimation="true" :scrollY="true" :style="'height:'+scrollH+'px'+';'" v-if="currentIndex==1">
        <view class="detail" v-if="incomeList&&incomeList[0]">
            <view class="item" :key="index" v-for="(item, index) in incomeList">
                <view class="name">{{item.brokerageType==2?item.activeName:item.itemTitle}}</view>
                <view class="n" v-if="item.brokerageType==0">推广奖励：<text class="cash">{{'￥'+item.income}}</text>
                </view>
                <view class="n" v-if="item.brokerageType==2">中奖金额：<text class="cash">{{'￥'+item.income}}</text>
                </view>
                <view class="n" v-if="item.brokerageType==1">返现奖励：<text class="cash">{{'￥'+item.income}}</text>
                </view>
                <view class="n">{{'奖励状态： '+['进行中','已入账','已失败'][item.status]}}</view>
                <view class="n ordernum" v-if="item.brokerageType!=2">{{'订单金额：￥'+item.orderAmount}}</view>
                <view class="orderinfo">
                    <text class="">订单编号：</text>
                    <text class="">{{item.orderId}}</text>
                </view>
                <view class="orderinfo">
                    <text class="">下单时间：</text>
                    <text class="">{{item.createTime}}</text>
                </view>
                <view class="state">{{item.orderStatusStr}}</view>
            </view>
        </view>
        <empty-state @touchmove.stop.prevent="" class="" imgUrl="https://eshopfile.zhiyousx.com/nodetailed.png" text="暂无收入明细" v-else></empty-state>
    </scroll-view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          components: {
            EmptyState: function() {
              n.e("subPage/components/empty/empty").then(function() {
                return resolve(n("3b7a"))
              }.bind(null, n)).catch(n.oe)
            }
          },
          data: function() {
            return {
              wealthNum: "",
              tabShow: !1,
              tabText: "全部",
              page: 1,
              minNum: 0,
              listTab: [{
                name: "提现记录"
              }],
              activeStyle: {
                "font-weight": "bold",
                "z-index": "1"
              },
              barStyle: {
                background: "#FE5244",
                "border-radius": "0px",
                position: "absolute",
                bottom: "18rpx"
              },
              currentIndex: 0,
              detailList: [],
              detailType: -1,
              loadMore: "loading",
              scrollH: 500,
              scrollTop: "0",
              withDrawList: [],
              incomeList: [],
              isSubscribeFlag: !0,
              officialOpenId: ""
            }
          },
          onLoad: function(e) {
            this.currentIndex = e.tab || 0, e.officialOpenId && (this.officialOpenId = e.officialOpenId)
          },
          onShow: function() {
            var t = this;
            uni.getSystemInfo({
              success: function(e) {
                var n = parseInt(432 / (750 / e.screenWidth));
                t.scrollH = e.windowHeight - n
              }
            }), this.isSubscribe(), this.pageLoad(), this.getMinNum(), this.getWithDrawRecord(), this.getIncomeDetailedList()
          },
          filters: {
            toFixed2: function(e) {
              return e ? Number(e).toFixed(2) : "0.00"
            }
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          methods: {
            pageLoad: function() {
              var e = this,
                t = this.userInfo.isFenxiao ? "manager/app/v1/expert/getExpertAccount" : "manager/app/v1/memberAccount";
              this.$uniApi.dataRequestNoLoading("GET", t, {
                memberId: this.userInfo.memberId
              }).then((function(t) {
                1 === t.code && (e.wealthNum = t.data)
              }))
            },
            getMinNum: function() {
              var e = this;
              this.$uniApi.getRequestNoLoading("GET", "manager/app/v1/sysLookupType/customWord?paramKey=WITHDRAW_RULE").then((function(t) {
                1 === t.code && t.data.forEach((function(t) {
                  0 === t.lookupType && (e.minNum = t.lookupValue)
                }))
              }))
            },
            getWithDrawRecord: function() {
              var e = this;
              this.$uniApi.dataRequestNoLoading("get", "manager/app/v1/withdrawRecord/getAllWithdrawRecord").then((function(t) {
                1 == t.code && (e.withDrawList = t.data || [])
              }))
            },
            getIncomeDetailedList: function() {
              var e = this;
              this.$uniApi.dataRequestNoLoading("get", "manager/app/v1/memberBrokerage/getIncomeDetailedList").then((function(t) {
                1 == t.code && (e.incomeList = t.data || [])
              }))
            },
            changecurr: function(e) {
              this.currentIndex = e, this.scrollTop = "1", this.scrollTop = "0", this.page = 1, this.orderList = []
            },
            goDetailed: function() {
              this.$navigateTo({
                url: "/pages/detailed/detailed"
              })
            },
            withdrawal: function() {
              this.wealthNum.accountBalance < this.minNum || this.$navigateTo({
                url: "/subPage/pages/withdrawal/withdrawal?num=".concat(this.wealthNum.accountBalance)
              })
            },
            showTab: function() {
              var e = this.tabShow;
              this.tabShow = !e
            },
            getWithDradStatus: function(e) {
              return ["提现中", "提现完成", "提现失败"][Number(e)]
            },
            getIncomeStatus: function(e, t) {
              var n = Number(t);
              if (1 == e) switch (n) {
                case 2:
                  return "待出票";
                case 3:
                  return "已出票";
                case 8:
                  return "退票中";
                case 13:
                  return "已过期";
                case 5:
                  return "已完成";
                case 7:
                  return "待出票";
                case 9:
                  return "门票部分退款";
                case 10:
                  return "门票已退款";
                case 11:
                  return "出票失败"
              }
              if (0 == e) switch (n) {
                case 2:
                  return "待发货";
                case 3:
                  return "待收货";
                case 4:
                  return "已收货";
                case 6:
                  return "售后中";
                case 8:
                  return "退款中";
                case 5:
                  return "已完成";
                case 7:
                  return "售后已完成";
                case 9:
                  return "部分退款"
              }
            },
            isSubscribe: function() {
              var e = this;
              this.$uniApi.dataRequestNoLoading("GET", "manager/app/wx/officialAccount/isSubscribe", {
                openId: this.officialOpenId
              }).then((function(t) {
                1 === t.code && (e.isSubscribeFlag = t.data)
              }))
            },
            jmpOfficial: function() {
              uni.navigateTo({
                url: "/pages/webpage/webpage?urlEncode=" + encodeURIComponent("https://mp.weixin.qq.com/s/-ntMBDqv-EBvuCcJZrq9mQ")
              })
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
page{background:#fafafa}.u-tabs{background:none}.tab{width:25%}.top-box{background:#fff1ed;border-radius:20px;font-family:Source Han Sans CN;line-height:1;margin:20rpx;width:710rpx}.top-box .body{display:-webkit-flex;display:flex;flex-direction:row;height:312rpx}.top-box .body .box1{padding:53rpx 50rpx 40rpx;width:240rpx}.top-box .body .box1 .box1-1{color:#262933;display:-webkit-flex;display:flex;flex-direction:row;font-weight:400}.top-box .body .box1 .box1-1 .box1-1-1{font-size:32rpx}.top-box .body .box1 .box1-1 .box1-1-2{font-size:28rpx;margin-top:4rpx}.top-box .body .box1 .box1-2{color:#f15252;font-size:60rpx;font-weight:700;margin-top:17rpx}.top-box .body .box1 .box1-3{color:#818181;font-family:Microsoft YaHei;font-size:24rpx;font-weight:400;margin-top:40rpx;text-align:center}.top-box .body .box1 .box1-4{color:#44495b;font-family:Microsoft YaHei;font-size:26rpx;font-weight:400;margin-top:23rpx;text-align:center}.top-box .body .box2{align-items:center;border:1rpx solid #ebcbc2;border-width:0 1px;display:-webkit-flex;display:flex;flex-direction:column;height:92rpx;margin-top:190rpx;width:229rpx}.top-box .body .box2 .option{color:#f15252;font-size:24rpx;margin-top:16rpx}.top-box .body .box2 .value{color:#44495b;font-size:26rpx;margin-top:23rpx}.top-box .body .box3{width:239rpx}.top-box .body .box3 .box3-1{background:linear-gradient(52deg,#fc4a7c,#ff5411);border-radius:30rpx;color:#fff;font-size:26rpx;font-weight:400;height:60rpx;line-height:60rpx;margin:78rpx auto 0;text-align:center;width:160rpx}.top-box .body .box3 .box3-1.dis{background:linear-gradient(52deg,#ffc07c,#ff9888);box-shadow:0 5rpx 2rpx 0rpx rgba(255,192,155,.5)}.top-box .body .box3 .box3-2{align-items:center;display:-webkit-flex;display:flex;flex-direction:row;justify-content:space-between;margin-top:62rpx}.top-box .body .box3 .box3-2 .box3-2-1{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;justify-content:center;width:100%}.top-box .body .box3 .box3-2 .box3-2-1 .bt1{color:#818181;font-family:Microsoft YaHei;font-size:24rpx;font-weight:400}.top-box .body .box3 .box3-2 .box3-2-1 .bt2{color:#44495b;font-family:Microsoft YaHei;font-size:26rpx;font-weight:400;margin-top:22rpx}.top-box .body .box3 .box3-2 .box3-2-2{height:9.4rpx;margin-right:50rpx;transform:rotate(-90deg);width:18.4rpx}.top-box .jmpFooter{border-top:2rpx solid #ededed;color:rgba(30,27,25,.6);font-size:26rpx;margin:0 50rpx;padding:18rpx 0}.tab-box{display:-webkit-flex;display:flex;flex-direction:row;justify-content:space-between;line-height:1;margin:47rpx 26rpx 16rpx 29rpx}.tab-box .left{color:#909090;font-family:Microsoft YaHei;font-size:28rpx;font-weight:400}.tab-box .right{align-items:center;display:-webkit-flex;display:flex;flex-direction:row}.tab-box .right .right-1{color:#6b6b6b;font-family:Microsoft YaHei;font-size:26rpx;font-weight:400}.tab-box .right .right-2{height:13rpx;margin-left:7rpx;width:23rpx}.modal{height:100%;position:fixed;top:0;width:100%;z-index:10}.tabModal{background:#fff;border-radius:20rpx;box-shadow:0rpx 0rpx 20rpx 0rpx rgba(0,0,0,.05);font-family:Microsoft YaHei;font-size:26rpx;font-weight:400;height:300rpx;position:fixed;right:20rpx;text-align:center;width:160rpx;z-index:20}.tabModal .tabModal-1,.tabModal .tabModal-2,.tabModal .tabModal-3{color:#6b6b6b;line-height:100rpx;width:100%}.list-box{box-sizing:border-box;margin-bottom:10rpx;padding:0 20rpx;width:750rpx}.list-box .cashRecord{width:710rpx}.list-box .cashRecord .item{align-items:center;background:#fff;border-radius:20rpx;display:-webkit-flex;display:flex;height:120rpx;margin-bottom:10rpx;padding:0 34rpx 0 48rpx}.list-box .cashRecord .item:first-child{margin-top:10rpx}.list-box .cashRecord .item .num{color:#e94403;font-size:36rpx;width:155rpx}.list-box .cashRecord .item .time{color:#acacac;font-size:24rpx;padding-top:4rpx;width:330rpx}.list-box .cashRecord .item .state{color:#3c3c3c;font-size:28rpx;text-align:right;width:225rpx}.list-box .cashRecord .item .state.red{color:#fe5342}.list-box .cashRecord .item .state.fail{color:#9d9d9d}.list-box .detail{width:710rpx}.list-box .detail .item{background:#fff;border-radius:20rpx;margin-bottom:10rpx;padding:34rpx 30rpx 43rpx;position:relative}.list-box .detail .item .state{background:#fe5244;border-radius:10rpx;color:#fff;font-size:26rpx;height:40rpx;line-height:40rpx;padding:0 22rpx;position:absolute;right:30rpx;top:34rpx}.list-box .detail .item .name{color:#4a4a4a;font-size:30rpx;line-height:40rpx;margin-bottom:15rpx;width:478rpx}.list-box .detail .item .orderinfo text{color:#878787;font-size:24rpx}.list-box .detail .item .orderinfo text:first-child{margin-right:20rpx}.list-box .detail .item .n{color:#333;font-size:26rpx;margin-bottom:10rpx}.list-box .detail .item .n .cash{color:#e94403}.list-box .detail .item .n.ordernum{margin-bottom:25rpx}
</style>
