<template>
<view class="goodsBox u-skeleton" v-if="commodityInfo">
    <uni-navbar class=" vue-ref" ref="navBar" :scrollTop="scrollTop" type="transparentFixed" :vueSlots="['default']">
        <view class="navBar">
            <text :class="['',navIdx===0?'activeNav':'']" @click="nabBtn(0)">商品</text>
            <text :class="['',navIdx===1?'activeNav':'']" @click="nabBtn(1)">详情</text>
        </view>
    </uni-navbar>
    <view class="" v-if="commodityInfo.isDeleted==0">
        <view class="u-skeleton-rect">
            <u-swiper borderRadius="0" class="" height="740" indicatorActiveColor="#FF3709" indicatorColor="rgba(0,0,0,0.5)" indicatorPos="bottomRight" interval="5000" :list="commodityInfo.itemPicUrls" @click="swiperBtn()"></u-swiper>
        </view>
        <view class="ms-box" v-if="ticketDetailObj.seckillActivity==0">
            <image class="ms-img" src="https://eshopfile.zhiyousx.com/2021080909304743729.png"></image>
            <view class="left">
                <view class="">{{'￥'+ticketDetailObj.seckillPrice}}</view>
                <view class="">{{'￥'+ticketDetailObj.retailPrice}}</view>
            </view>
            <view class="right" v-if="daoJiShiObj.second">
                <view class="t">距离结束仅剩</view>
                <view class="b">{{daoJiShiObj.hour+' : '+daoJiShiObj.minute+' : '+daoJiShiObj.second}}</view>
            </view>
        </view>
        <view class="goodsPrice u-skeleton-rect" v-else>
            <view class="priceNum u-skeleton-rect" v-if="commodityInfo.productType===0">
                <text class="">{{'￥'+($root.g0>0?combinations[selectedIndex].price:'')+(commodityInfo.priceType===1?'起':'')}}</text>
                <text class="">{{'￥'+commodityInfo.marketPrice}}</text>
            </view>
            <image class="" :src="commodityInfo.favorite===1?'https://eshopfile.zhiyousx.com/170065302018477577.png':'/static/images/collectno.png'" style="width:41rpx;height:39rpx;" v-if="iconShow" @click="favBtn($event)"></image>
        </view>
        <view class="fxBtn">
            <view class="commission u-skeleton-rect" v-if="userInfo&&userInfo.isFenxiao&&commodityInfo.maxReward>0">
                <text class="fxText">分享赚</text>
                <text class="fxPic">{{'￥'+commodityInfo.maxReward}}</text>
            </view>
        </view>
        <view class="goodsInfo">
            <view class="goodsName u-skeleton-rect">{{commodityInfo.itemTitle}}</view>
            <view class="numBox u-skeleton-rect">
                <text class="subTit" v-if="commodityInfo.itemSubTitle">{{commodityInfo.itemSubTitle}}</text>
                <text class="ys">{{'已售：'+$root.f0}}</text>
            </view>
            <image class="fav-img" :src="commodityInfo.favorite===1?'https://eshopfile.zhiyousx.com/170065302018477577.png':'/static/images/collectno.png'" style="width:41rpx;height:39rpx;" v-if="ticketDetailObj.seckillActivity==0&&iconShow" @click="favBtn($event)"></image>
        </view>
        <view class="intro-box" v-if="$root.g1>0">
            <view class="title-box" style="margin-bottom:0;" @click="showYh($event)">
                <view class="left">
                    <view class="name">优惠</view>
                </view>
                <view class="middle">
                    <view class="item" v-if="index<3" v-for="(item, index) in couponArr">
                        <block v-if="item.couponFullAmount==0">{{item.couponAmount+'元无门槛券'}}</block>
                        <block v-else>{{'满'+item.couponFullAmount+'减'+item.couponAmount+'券'}}</block>
                    </view>
                </view>
                <image class="right" src="../../static/images/jt.png"></image>
            </view>
        </view>
        <view class="delivery">
            <view class="selectItem u-skeleton-rect" v-if="commodityInfo.isFictitious!=1">
                <text class="">送至</text>
                <view class="itemText" @click="openPopup(0)">
                    <view class="itemAddres singleLineText">{{ ($root.g2>0?addressList[addresIdx].addrRegion1Name+addressList[addresIdx].addrRegion2Name+addressList[addresIdx].addrRegion3Name+addressList[addresIdx].addrStreet:'请选择') }}</view>
                    <uni-icons class="" color="#878787" size="14" type="arrowright"></uni-icons>
                </view>
            </view>
            <view class="selectItem u-skeleton-rect" v-if="commodityInfo.productType==0&&commodityInfo.freightType!=2">
                <text class="">运费</text>
                <view class="itemText">
                    <view class="itemAddres singleLineText">{{commodityInfo.freight>0?commodityInfo.freight:'免运费'}}</view>
                </view>
            </view>
            <view class="selectItem u-skeleton-rect" v-if="commodityInfo.originPlace">
                <text class="" style="font-size:26rpx;">提示</text>
                <view class="itemText" @click="openPopup(1)">
                    <view class="itemAddres singleLineText" style="color:#9D9D9D;">{{commodityInfo.originPlace}}</view>
                </view>
            </view>
        </view>
        <block v-if="$root.g3>0">
            <view class="titleName" id="cpcs">产品参数</view>
            <view class="parameter u-skeleton-rect">
                <view class="parameItem" :key="index" v-for="(item, index) in notSalesList">
                    <text class="">{{item.propVal}}</text>
                    <text class="">{{item.optionText}}</text>
                </view>
            </view>
        </block>
        <block v-if="$root.g4>0">
            <view class="titleName" id="sppl">商品评论</view>
            <view class="comments u-skeleton-rect">
                <view class="commentItem" :key="index" @click="goComments($event)" v-for="(item, index) in $root.l0">
                    <view class="itemTop">
                        <view class="topLeft">
                            <image class="" :src="item.memberImage?item.memberImage:'/static/images/tt@2x.png'"></image>
                            <text class="">{{item.commentPoints?item.commentPoints:'*匿名'}}</text>
                        </view>
                    </view>
                    <text class="">{{item.createTime}}</text>
                    <view class="itemText multilineText2">{{item.commentContent}}</view>
                    <view class="itemImg" v-if="item.g5>0">
                        <view class="imgItem" :key="idx" v-for="(pic, idx) in item.picUrl">
                            <u-lazy-load class="" height="220" :image="pic" imgMode="scaleToFill"></u-lazy-load>
                        </view>
                    </view>
                </view>
                <view class="commentsMore" @click="goComments($event)">更多评论></view>
            </view>
        </block>
        <view class="titleName" id="spxq">产品详情</view>
        <view class="richText">
            <u-parse class=" vue-ref" ref="article" :html="commodityInfo.mdescription" :lazyLoad="true" :tagStyle="parseStyle"></u-parse>
        </view>
        <view class="kefuData u-skeleton-rect" v-if="parametersText">
            <view class="itemText" @click="openPopup(2)">
                <view class="itemAddres">{{ (parametersText.paramValue?'客服电话：':'') }}<text class="">{{parametersText.paramValue?parametersText.paramValue:' '}}</text>
                </view>
                <view class="itemAddres">{{ (parametersText.memo?'客服邮箱：':'') }}<text class="">{{parametersText.memo?parametersText.memo:''}}</text>
                </view>
            </view>
        </view>
        <block v-if="commodityInfo">
            <view class="goods-carts u-skeleton-rect" v-if="commodityInfo.productType===0">
                <uni-goods-nav :buttonGroup="buttonGrouplink" class="" :fill="true" :options="optionsNavlink" v-if="commodityInfo.isFictitious===1" @click="buttonClick()" @buttonClick="goLink()"></uni-goods-nav>
                <block v-else>
                    <uni-goods-nav :buttonGroup="buttonGroupXJ" class="" :fill="true" :options="optionsNav" v-if="commodityInfo.listStatus==2||commodityInfo.listStatus==0" @click="buttonClick()"></uni-goods-nav>
                    <block v-else>
                        <uni-goods-nav :buttonGroup="buttonGroupNoStock" class="" :fill="true" :options="optionsNav" v-if="commodityInfo.itemStock<1" @click="buttonClick()"></uni-goods-nav>
                        <uni-goods-nav :buttonGroup="buttonGroup" class="" :fill="true" :options="optionsNav" v-else @click="buttonClick()" @buttonClick="handleConfirm()"></uni-goods-nav>
                    </block>
                </block>
            </view>
        </block>
        <uni-popup class=" vue-ref" ref="popup" type="bottom" :vueSlots="['default']">
            <view class="popup">
                <view class="popTitle">
                    <text class="titleText">{{popupTitle}}</text>
                    <uni-icons class="" color="#c1c1c1" size="20" type="clear" @click="closePopup()"></uni-icons>
                </view>
                <view class="popMain" :scrollY="true">
                    <block v-if="popupType===0">
                        <block v-if="$root.g6>0">
                            <scroll-view class="" :scrollY="true" style="max-height:800rpx;">
                                <radio-group class="" @change="radioChange($event)">
                                    <view class="" :key="addrId" v-for="(item, index) in addressList">
                                        <label class="radioItem">
                                            <radio :checked="index===addresIdx" class="radioIcon" color="#ff4643" :value="item.addrId"></radio>
                                            <text class="">{{item.addrRegion1Name+item.addrRegion2Name+item.addrRegion3Name+item.addrStreet}}</text>
                                        </label>
                                    </view>
                                </radio-group>
                            </scroll-view>
                            <button class="popupBtn" @click="goAddress($event)">选择其它收货地址</button>
                        </block>
                        <block v-else>
                            <u-empty class="" mode="address" text="收货地址为空"></u-empty>
                            <button class="popupBtn" @click="goAddress($event)">
                                <uni-icons class="" color="#ff4643" size="16" type="plusempty"></uni-icons>添加收货地址</button>
                        </block>
                    </block>
                    <block v-else>
                        <block v-if="popupType===1">
                            <text class="" style="color:#858585;">{{commodityInfo.originPlace?commodityInfo.originPlace:'无'}}</text>
                            <button class="popupBtn" @click="closePopup($event)">确定</button>
                        </block>
                        <block v-else>
                            <view class="" style="color:#858585;" @click="makePhoneCall($event)">{{ (parametersText.paramValue?'客服电话 '+parametersText.paramValue:' ') }}</view>
                            <view class="" style="color:#858585;">{{ (parametersText.memo?parametersText.memo:'') }}</view>
                            <button class="popupBtn" @click="closePopup($event)">确定</button>
                        </block>
                    </block>
                </view>
            </view>
        </uni-popup>
        <echone-sku class=" vue-ref" :combinations="combinations" :combinationsProps="combinationsProps" ref="echoneSku" :defaultPicUrl="commodityInfo.defaultPicUrl" :defaultSelectIndex="selectedIndex" :show="skuShow" :specifications="specifications" :specificationsProps="specificationsProps" themeColor="#ff4643" @skuidx="getSkuIndex()" @close="handleClose()" @skubtn="addShop()" @confirm="handleConfirm()"></echone-sku>
        <aui-actionmenu class=" vue-ref" ref="actionmenu" :items="auiActionmenu.items" :theme="auiActionmenu.theme" @callback="actionmenuCallback()"></aui-actionmenu>
        <hch-poster :canvasFlag="canvasFlag" class=" vue-ref" ref="hchPoster" :posterObj="posterData" @updateCanvasFlag="canvasFlag = $event" @cancel="canvasCancel()" @updatePosterObj="posterData = $event"></hch-poster>
        <view class="" v-if="canvasFlag">
            <canvas canvasId="myCanvas" class="canvas"></canvas>
        </view>
        <view class="yh-mask" v-if="showYhMask">
            <view class="bg" @click="showYh($event)"></view>
            <view class="content">
                <view class="close" @click="showYh($event)">X</view>
                <view class="item-list">
                    <view :class="['item','',item.couponStates==2?'yqg':'',item.couponStates==3?'ylq':'']" v-for="(item, index) in $root.l1">
                        <view class="top">
                            <view class="left">
                                <view class="p1">
                                    <text class="">￥</text>
                                    <text class="">{{item.quota}}</text>
                                </view>
                                <view class="p2">
                                    <block v-if="item.threshold>0">{{'满'+item.threshold+'可用'}}</block>
                                    <block v-else>无门槛</block>
                                </view>
                            </view>
                            <view class="middle">
                                <view class="p1">{{item.name}}</view>
                                <view class="p2">
                                    <block v-if="item.useTimeSlot>0">
                                        <block v-if="item.couponStates==3">{{item.f1+'前有效'}}</block>
                                        <block v-else>{{'领券后'+item.useTimeSlot+'小时内有效'}}</block>
                                    </block>
                                    <block v-else>{{item.f2+'-'+item.f3}}</block>
                                </view>
                            </view>
                            <view class="right">
                                <block v-if="item.couponStates==1">领取</block>
                                <block v-if="item.couponStates==2">已抢光</block>
                                <block v-if="item.couponStates==3">已领取</block>
                            </view>
                            <image mode :class="['jt','',index==tapIndex?'extend':'']" :src="'../../static/images/'+(item.couponStates==1?'xiala.png':'xiala2.png')"></image>
                        </view>
                        <view :class="['bottom','',index==tapIndex?'extend':'']">{{ item.useExplain }}</view>
                    </view>
                </view>
            </view>
        </view>
        <u-skeleton :animation="true" class="" :loading="loadingStatus"></u-skeleton>
    </view>
    <empty-state class="" imgUrl="/static/captured/51d17a011d27445c.png" text="暂无商品信息" v-else></empty-state>
    <l-painter class="" css="width: 452rpx; height:363rpx;position:fixed;bottom:0;left:0;" customStyle="position: fixed; left: 200%" :isCanvasToTempFilePath="true" :vueSlots="['default']" v-if="showPainter" @success="e0()">
        <l-painter-image class="" css="object-fit: cover; object-position: 50% 50%;width:452rpx;height:362rpx;" :src="commodityInfo.defaultPicUrl"></l-painter-image>
        <l-painter-view class="" css="position:absolute;width:452rpx;height:82rpx;bottom:00rpx;left:0; background:#ffffff;" :vueSlots="['default']">
            <l-painter-text class="" css="vertical-align: middle;font-size:32rpx;font-weight:600;line-height:82rpx;color:#FF5411;margin-left:20rpx;" :text="commodityInfo.seckillActivity==0?'￥'+commodityInfo.seckillPrice:'￥'+combinations[selectedIndex].price"></l-painter-text>
            <l-painter-text class="" css="vertical-align: center; font-size: 20rpx;line-height:82rpx;text-decoration:line-through;margin-left:10rpx;color:#D0D0D0;" :text="'￥'+commodityInfo.marketPrice"></l-painter-text>
            <l-painter-text class="" css="height:60rpx;margin-top:11rpx;background:linear-gradient(56deg, #FC4A9E 0%, #FF5411 100%);width:200rpx;position:absolute;text-align:center;font-size:26rpx;color:#ffffff;border-radius:30rpx;right:11rpx;bottom:11rpx;" text="立即购买"></l-painter-text>
        </l-painter-view>
    </l-painter>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          components: {
            echoneSku: function() {
              n.e("subPage/components/echone-sku/echone-sku").then(function() {
                return resolve(n("a0f4"))
              }.bind(null, n)).catch(n.oe)
            },
            auiActionmenu: function() {
              n.e("subPage/components/aui-actionmenu/aui-actionmenu").then(function() {
                return resolve(n("470b"))
              }.bind(null, n)).catch(n.oe)
            },
            hchPoster: function() {
              n.e("subPage/components/hch-poster/hch-poster").then(function() {
                return resolve(n("9c7e"))
              }.bind(null, n)).catch(n.oe)
            },
            EmptyState: function() {
              n.e("subPage/components/empty/empty").then(function() {
                return resolve(n("3b7a"))
              }.bind(null, n)).catch(n.oe)
            }
          },
          data: function() {
            return {
              couponArr: [],
              couponDetailArr: [],
              daoJiShiObj: {},
              postUrl: "",
              ticketDetailObj: {},
              iconShow: !1,
              showPainter: !1,
              showYhMask: !1,
              isAndroid: !0,
              tapIndex: null,
              loadingStatus: !0,
              itemId: "",
              referenceId: "",
              encryptionId: "",
              commodityInfo: {
                isDeleted: 0
              },
              scrollTop: 0,
              navIdx: 0,
              popupType: 0,
              addressList: [],
              addresIdx: 0,
              addrId: "",
              parametersText: "",
              notSalesList: [],
              skuShow: !1,
              openIndex: 1,
              buyCount: 1,
              selectedIndex: 0,
              combinations: [],
              combinationsProps: {
                id: "skuId",
                value: "skuName",
                image: "defaultPicUrl",
                price: "price",
                stock: "skuStock"
              },
              unit: 0,
              specifications: [],
              specificationsProps: {
                id: "propId",
                name: "propVal",
                list: "list"
              },
              commentsList: [],
              optionsNav: [{
                icon: "/static/images/store.png",
                text: "店铺"
              }, {
                icon: "https://eshopfile.zhiyousx.com/170065368213433372.png",
                text: "购物车",
                infoBackgroundColor: "#ff4643"
              }, {
                icon: "/static/images/goodsshare.png",
                text: "分享"
              }],
              buttonGroup: [{
                text: "加入购物车",
                backgroundImage: "linear-gradient(52deg, #FFCC31 0%, #FF8830 100%)",
                color: "#fff"
              }, {
                text: "立即购买",
                backgroundImage: "linear-gradient(52deg, #FC4A7C 0%, #FF5411 100%)",
                color: "#fff"
              }],
              optionsNavlink: [{
                icon: "/static/images/store.png",
                text: "店铺"
              }, {
                icon: "/static/images/goodsshare.png",
                text: "分享"
              }],
              buttonGrouplink: [{
                text: "立即前往",
                backgroundImage: "linear-gradient(52deg, #FC4A7C 0%, #FF5411 100%)",
                color: "#fff"
              }],
              buttonGroupTicket: [{
                text: "立即购买",
                backgroundImage: "linear-gradient(52deg, #FC4A7C 0%, #FF5411 100%)",
                color: "#fff"
              }],
              buttonGroupXJ: [{
                text: "已下架",
                backgroundImage: "linear-gradient(52deg, #FFA3BD 0%, #FFB89C 100%);",
                color: "#fff"
              }],
              buttonGroupNoStock: [{
                text: "暂无库存",
                backgroundImage: "linear-gradient(52deg, #FFA3BD 0%, #FFB89C 100%);",
                color: "#fff"
              }],
              auiActionmenu: {
                theme: 1,
                location: "bottom",
                items: [{
                  name: "微信",
                  icon: "iconweixin",
                  iconColor: "#1AA034"
                }, {
                  name: "海报",
                  icon: "iconpengyouquan",
                  iconColor: "#EB3C3B"
                }]
              },
              canvasFlag: !1,
              posterData: {},
              codeUrl: "",
              parseStyle: {
                p: "word-break: break-all;",
                img: "display: block"
              },
              cashBackAmount: ""
            }
          },
          onLoad: function(e) {
            e.scene ? this.getScene(e.scene) : (e.itemId && (this.itemId = e.itemId), this.pageLoad(), uni.getSystemInfoSync().system.indexOf("Android") > -1 || (this.isAndroid = !1))
          },
          onUnload: function() {
            this._timer && clearInterval(this._timer)
          },
          onShareAppMessage: function() {
            var t = "/subPage/pages/goods_details/goods_details?itemId=".concat(this.commodityInfo.itemId);
            return {
              title: this.commodityInfo.itemTitle,
              path: this.$util.setShareUrl(t),
              imageUrl: this.postUrl
            }
          },
          onPageScroll: function(t) {
            this.scrollTop = t.scrollTop, t.scrollTop > this.spxqTop ? this.navIdx = 1 : this.navIdx = 0
          },
          filters: {
            toFixed2: function(t) {
              return t ? Number(t).toFixed(2) : "0.00"
            },
            timeFormat: function(t) {
              return t.replace(/-/g, ".")
            }
          },
          computed: {
            popupTitle: function() {
              return 0 === this.popupType ? "配送" : 1 === this.popupType ? "提示" : "服务"
            },
            userInfo: function() {
              return this.$store.getters.userInfor
            },
            showFenxiao: function() {
              var t = this.userInfo;
              return t && t.isFenxiao || this.distributorId
            }
          },
          methods: {
            pageLoad: function() {
              this.getGoodsInfo(), this.getCouponDetail(), this.getCommentsList(), this.parameters(), uni.getStorageSync("token") && (this.getAddress(), this.getEncryptParam())
            },
            getGoodsInfo: function() {
              var e = this;
              return (0, r.default)(a.default.mark((function n() {
                return a.default.wrap((function(n) {
                  for (;;) switch (n.prev = n.next) {
                    case 0:
                      return n.next = 2, e.getSkuByProperty();
                    case 2:
                      return e.combinations = n.sent, n.next = 5, e.getNotSellPropList();
                    case 5:
                      return e.notSalesList = n.sent, n.next = 8, e.getSellPropList();
                    case 8:
                      return e.specifications = n.sent, n.next = 11, e.getGoodsDetails();
                    case 11:
                      e.commodityInfo = n.sent, e.cashBackAmount = e.commodityInfo.cashBackAmount || 0, e.showPainter = !0, e.getCode(), e.$nextTick((function() {
                        var e = this;
                        uni.createSelectorQuery().select("#spxq").boundingClientRect((function(t) {
                          e.spxqTop = t.top
                        })).exec()
                      })), e.getCoupon();
                    case 17:
                    case "end":
                      return n.stop()
                  }
                }), n)
              })))()
            },
            getCoupon: function() {
              var t = this;
              this.$uniApi.getRequestNoLoading("GET", "product/app/v1/itemActive/getItemCoupons/" + this.itemId).then((function(e) {
                var n = e.data || [],
                  o = 0,
                  i = [];
                if (n[0]) {
                  for (var a = 0; a < n.length; ++a) {
                    var s = n[a],
                      r = "",
                      c = 0,
                      u = String(s.couponAmount),
                      d = String(s.couponFullAmount);
                    if (s.couponFullAmount > 0 ? (r = "满".concat(d, "减").concat(u, "券"), c = 3) : (r = "".concat(u, "元无门槛券"), c = 5), (o += (r.length - c) / 2 + c) > 20) break;
                    i.push(s)
                  }
                  t.couponArr = i
                }
              }))
            },
            showCountDown: function(t) {
              var e = this;
              this._timer = setInterval((function() {
                var n = new Date;
                if (new Date(t.replace(/-/g, "/")).getTime() - n.getTime() <= 0) return clearInterval(e._timer), e.daoJiShiObj = {
                  hour: 0,
                  minute: 0,
                  second: 0
                }, void e.getGoodsInfo();
                e.daoJiShiObj = e.$util.countDown(t)
              }), 1e3)
            },
            getGoodsDetails: function() {
              var t = this;
              return new Promise((function(e, n) {
                t.$uniApi.getRequestNoLoading("GET", "product/app/v1/item/" + t.itemId).then((function(n) {
                  if (t.loadingStatus = !1, 1 === n.code) {
                    console.log(n.data), t.iconShow = !0;
                    var o = n.data.itemPicUrls.split(",");
                    n.data.itemPicUrls = [];
                    var i, a = c(o);
                    try {
                      for (a.s(); !(i = a.n()).done;) {
                        var s = i.value;
                        n.data.itemPicUrls.push({
                          image: s
                        })
                      }
                    } catch (t) {
                      a.e(t)
                    } finally {
                      a.f()
                    }
                    e(n.data)
                  }
                }))
              }))
            },
            getScene: function(t) {
              var e = this;
              this.$uniApi.getRequestNoLoading("GET", "manager/app/v1/qrCodeScene/getScene?sceneId=".concat(t)).then((function(t) {
                1 === t.code && (t.data.itemId ? e.itemId = t.data.itemId : e.itemId = t.data.scene.split("=")[1], e.referenceId = t.data.referenceId, e.$store.commit("SET_DISTRIBUTORID", t.data.referenceId), console.log("商品id", t.data.itemId), console.log("推广人id", t.data.referenceId), e.pageLoad())
              }))
            },
            onImgOK: function(t) {
              this.postUrl = t.path
            },
            getCode: function() {
              var t = this,
                e = this,
                n = {
                  scene: "itemId=".concat(this.commodityInfo.itemId, "&referenceId=").concat(this.userInfo.memberId),
                  itemId: this.commodityInfo.itemId,
                  referenceId: this.userInfo.memberId,
                  page: "subPage/pages/goods_details/goods_details"
                };
              this.$uniApi.dataRequestNoLoading("POST", "manager/app/wx/getminiLongSceneQr", n).then((function(n) {
                1 === n.code && (t.codeUrl = n.data.baseData, t.base64ToSave(n.data.baseData).then((function(t) {
                  e.codeUrl = t
                })))
              }))
            },
            base64ToSave: function(e) {
              var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "tmp_base64src",
                i = t.getFileSystemManager();
              return new Promise((function(t, a) {
                var r = /data:image\/(\w+);base64,(.*)/.exec(e) || [],
                  c = (0, s.default)(r, 3),
                  u = c[1],
                  d = c[2];
                u || a(new Error("ERROR_BASE64SRC_PARSE"));
                var l = "".concat(o.env.USER_DATA_PATH, "/").concat(n, ".").concat(u),
                  m = o.base64ToArrayBuffer(d);
                i.writeFile({
                  filePath: l,
                  data: m,
                  encoding: "binary",
                  success: function() {
                    t(l)
                  },
                  fail: function() {
                    a(new Error("ERROR_BASE64SRC_WRITE"))
                  }
                })
              }))
            },
            getCommentsList: function() {
              var t = this,
                e = {
                  current: 1,
                  size: 6,
                  itemId: this.itemId
                };
              this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/itemComment/getListByItemId", e).then((function(e) {
                if (1 === e.code) {
                  var n = e.data.page.records;
                  n.length > 0 && (n.forEach((function(t) {
                    t.createTime = t.createTime.slice(0, 9), t.picUrl ? t.picUrl = t.picUrl.split(",") : t.picUrl = []
                  })), t.commentsList = n)
                }
              }))
            },
            parameters: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/sysParam/getInfo", {
                paramKey: "ITEM_SERVICE"
              }).then((function(e) {
                1 === e.code && (t.parametersText = e.data[0])
              }))
            },
            getSkuByProperty: function() {
              var t = this;
              return new Promise((function(e, n) {
                t.$uniApi.dataRequestNoLoading("GET", "product/app/v1/sku", {
                  current: 1,
                  size: 5999,
                  itemId: t.itemId
                }).then((function(t) {
                  1 === t.code && (t.data.records.forEach((function(t) {
                    t.skuStock = t.skuStock ? t.skuStock : 0, t.skuName = t.skuName ? t.skuName.trim().split(" ").join(",") : ""
                  })), e(t.data.records))
                }))
              }))
            },
            getSellPropList: function() {
              var t = this;
              return new Promise((function(e, n) {
                t.$uniApi.getRequestNoLoading("GET", "product/app/v1/skuItemPropRel/propList/" + t.itemId).then((function(t) {
                  if (1 === t.code) {
                    if (t.data.length > 0) {
                      var n, o = c(t.data);
                      try {
                        for (o.s(); !(n = o.n()).done;) {
                          var i = n.value;
                          i.list = [];
                          var a, s = c(i.optionVals);
                          try {
                            for (s.s(); !(a = s.n()).done;) {
                              var r = a.value;
                              i.list.push(r.optionVal)
                            }
                          } catch (t) {
                            s.e(t)
                          } finally {
                            s.f()
                          }
                        }
                      } catch (t) {
                        o.e(t)
                      } finally {
                        o.f()
                      }
                    }
                    e(t.data)
                  }
                }))
              }))
            },
            getNotSellPropList: function() {
              var t = this;
              return new Promise((function(e, n) {
                t.$uniApi.getRequestNoLoading("GET", "product/app/v1/skuItemPropRel/getNotSellPropList/" + t.itemId).then((function(t) {
                  1 === t.code && e(t.data)
                }))
              }))
            },
            getAddress: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "manager/app/v1/memberDeliveryAddress", {
                current: 1,
                size: 5999,
                memberId: this.userInfo.memberId
              }).then((function(e) {
                1 === e.code && (t.addressList = e.data.records, t.addressList.length > 0 && (t.addrId = t.addressList[t.addresIdx].addrId))
              }))
            },
            getEncryptParam: function() {
              var t = this;
              this.$uniApi.getRequestNoLoading("GET", "manager/app/v1/member/getEncryptParam").then((function(e) {
                1 === e.code && (t.encryptionId = e.data)
              }))
            },
            getShopCartNum: function() {
              var t = this;
              this.$uniApi.getRequestNoLoading("GET", "product/app/v1/cartInfo/getMemberCart").then((function(e) {
                1 === e.code && t.$store.commit("SET_ORDERENSURE", e.data.cartItemNum)
              }))
            },
            selectOrerAddr: function(t) {
              var e = this;
              this.$uniApi.dataRequestNoLoading("POST", "manager/app/v1/memberDeliveryAddress/updateFlag", {
                addrId: this.addrId,
                memberId: this.userInfo.memberId
              }).then((function(n) {
                1 === n.code && e.$navigateTo({
                  url: "/subPage/pages/affirm_order/affirm_order?type=0&skuId=".concat(t.skuId, "&quantity=").concat(t.count, "&shareMemberId=").concat(e.referenceId)
                })
              }))
            },
            handleOpen: function(t) {
              this.skuShow = !0, this.$refs.echoneSku.initSkuData(), this.openIndex = t
            },
            handleClose: function(t) {
              this.selectedIndex = t.selectedIndex, this.buyCount = t.buyCount, this.skuShow = !1
            },
            addShop: function(t) {
              this.selectedIndex = t.selectedIndex, this.buyCount = t.buyCount
            },
            handleConfirm: function(t) {
              this.$util.isLogin() && ("skuBuy" === t.skuBuy ? 0 === this.openIndex ? this.addCart() : this.addrId ? this.selectOrerAddr(t) : this.$navigateTo({
                url: "/subPage/pages/affirm_order/affirm_order?type=0&skuId=".concat(t.skuId, "&quantity=").concat(t.count, "&shareMemberId=").concat(this.referenceId)
              }) : this.handleOpen(t.index))
            },
            buttonClick: function(t) {
              console.log(t), 0 === t.index ? this.$navigateTo({
                url: "/subPage/pages/storeshop/storeshop?sellerId=".concat(this.commodityInfo.sellerId)
              }) : 1 === t.index ? this.$util.isLogin() && (1 === this.commodityInfo.isFictitious ? this.$refs.actionmenu.show() : this.$navigateTo({
                url: "/subPage/pages/shopcart/shopcart"
              })) : this.$util.isLogin() && this.$refs.actionmenu.show()
            },
            actionmenuCallback: function(t) {
              var e = this;
              2 === t.index && this.$store.dispatch("PushMessage").then((function(t) {
                e.createCanvasImageEvn()
              }))
            },
            canvasCancel: function(t) {
              this.canvasFlag = t
            },
            createCanvasImageEvn: function() {
              var t = this,
                e = this.commodityInfo.videoUrls[0].picUrl ? this.commodityInfo.videoUrls[0].picUrl : this.commodityInfo.defaultPicUrl,
                n = this.commodityInfo.minPrice;
              Object.assign(this.posterData, {
                url: e,
                title: this.commodityInfo.itemTitle,
                discountPrice: n,
                code: this.codeUrl
              }), this.$forceUpdate(), setTimeout((function() {
                t.canvasFlag = !0, t.$refs.hchPoster.createCanvasImage()
              }), 500)
            },
            isAddShop: function() {
              var t = this,
                e = this.combinations[this.selectedIndex].skuId,
                n = {
                  skuId: e,
                  quantity: this.buyCount
                };
              this.$uniApi.getRequestNoLoading("GET", "product/app/v1/cartInfo/getMemberCart").then((function(o) {
                if (1 === o.code) {
                  var i = [];
                  o.data.cartItemInfo.split("|").forEach((function(t) {
                    i.push(t.split(","))
                  })), i.some((function(t) {
                    return t[0] === e
                  })) ? t.$uni.showToast("您已经添加过购物车了") : t.addCart(n)
                } else t.addCart(n)
              })).catch((function(e) {
                t.$uni.showToast(e.msg)
              }))
            },
            addCart: function() {
              var t = this,
                e = this.combinations[this.selectedIndex].skuId;
              this.$uniApi.getRequestYesLoading("POST", "product/app/v1/cartInfo/addCart?skuId=".concat(e, "&quantity=").concat(this.buyCount, "&shareMemberId=").concat(this.referenceId), "加入中...").then((function(e) {
                1 === e.code ? (t.$store.commit("SET_ORDERENSURE", t.cardNum + 1), t.$util.showSuccessToast("已加入购物车"), t.skuShow = !1) : t.$uni.showToast(e.msg)
              })).catch((function(e) {
                t.$uni.showToast(e.msg)
              }))
            },
            favBtn: function() {
              var t = this;
              if (this.$util.isLogin()) {
                var e = {
                  itemId: this.itemId,
                  memberId: this.userInfo.memberId,
                  sellerId: this.commodityInfo.sellerId,
                  skuId: 0 == this.commodityInfo.productType ? this.combinations[this.selectedIndex].skuId : ""
                };
                this.$uniApi.dataRequestNoLoading("PUT", "manager/app/v1/memberFavoriteSku", e).then((function(e) {
                  1 === e.code ? 1 === t.commodityInfo.favorite ? (t.commodityInfo.favorite = 0, t.$uni.showToast("已取消收藏")) : (t.commodityInfo.favorite = 1, t.$util.showSuccessToast("已收藏")) : t.$uni.showToast(e.msg)
                })).catch((function(e) {
                  t.$uni.showToast(e.msg)
                }))
              }
            },
            nabBtn: function(e) {
              this.navIdx = e, 0 === e ? uni.pageScrollTo({
                scrollTop: 0,
                duration: 300
              }) : 1 === e && uni.pageScrollTo({
                scrollTop: this.spxqTop,
                duration: 300
              })
            },
            openPopup: function(t) {
              this.popupType = t, 0 === t ? this.$util.isLogin() && this.$refs.popup.open() : this.$refs.popup.open()
            },
            closePopup: function() {
              this.$refs.popup.close()
            },
            radioChange: function(t) {
              var e = this;
              this.addrId = t.target.value, this.addressList.forEach((function(n, o) {
                n.addrId === t.target.value && (e.addresIdx = o)
              })), this.$refs.popup.close()
            },
            swiperBtn: function(e) {
              var n = [];
              this.commodityInfo.itemPicUrls.forEach((function(t) {
                n.push(t.image)
              })), uni.previewImage({
                current: e,
                urls: n
              })
            },
            commentsBtn: function(e, n) {
              uni.previewImage({
                current: n,
                urls: e
              })
            },
            makePhoneCall: function() {
              uni.makePhoneCall({
                phoneNumber: this.parametersText.paramValue
              })
            },
            goAddress: function() {
              this.$navigateTo({
                url: "/subPack/pages/addaddress/addaddress"
              })
            },
            goComments: function() {
              this.$navigateTo({
                url: "/subPage/pages/commentslist/commentslist?itemId=".concat(this.itemId)
              })
            },
            goLink: function(e) {
              0 === e.index && (0 === this.commodityInfo.fictitiousResource ? this.$navigateTo({
                url: "/pages/webpage/webpage?url=".concat(this.commodityInfo.fictitiousUrl)
              }) : 1 === this.commodityInfo.fictitiousResource && t.openEmbeddedMiniProgram({
                appId: this.commodityInfo.miniAppId,
                path: this.commodityInfo.fictitiousUrl,
                success: function(t) {
                  console.log("打开小程序成功", t)
                },
                fail: function(t) {
                  console.log("打开小程序失败", t)
                }
              }))
            },
            goFillOrder: function() {
              var t = this.commodityInfo.itemId,
                e = "/subPage/pages/ticketFillOrder/ticketFillOrder?ticketId=".concat(t);
              this.$util.isLogin(e) && this.$navigateTo({
                url: e
              })
            },
            showMore: function(t) {
              this.tapIndex != t ? this.tapIndex = t : this.tapIndex = null
            },
            showYh: function() {
              this.showYhMask = !this.showYhMask, this.showYhMask && this.getCouponDetail()
            },
            getCouponDetail: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("POST", "product/app/v1/CouponReceive/couponDetail", {
                itemId: this.itemId
              }).then((function(e) {
                t.couponDetailArr = e.data
              }))
            },
            receiveCoupon: function(t, e) {
              var n = this;
              this.$util.isLogin() && 1 == e && this.$uniApi.dataRequestNoLoading("POST", "product/app/v1/CouponReceive/receiveCoupon", {
                couponId: t
              }).then((function(t) {
                1 == t.code ? n.getCouponDetail() : (n.$uni.showToast("已抢光"), n.getCouponDetail(), n.getCoupon())
              }))
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.aui-content{background:#efefef;box-sizing:border-box;height:100vh;overflow-y:scroll;padding:0;position:relative;width:100%}.row-before{position:relative}.row-before:before{background:hsla(0,0%,39%,.3);content:"";height:1px!important;left:auto;position:absolute;right:0;top:0;transform:scaleY(.3);width:100%;z-index:1}.row-after{position:relative}.row-after:after{background:hsla(0,0%,39%,.3);bottom:0;content:"";height:1px!important;left:auto;position:absolute;right:0;transform:scaleY(.3);width:100%;z-index:1}.col-before{position:relative}.col-before:before{background:hsla(0,0%,39%,.3);content:"";height:100%;left:0;position:absolute;top:0;transform:scaleX(.3);width:1px!important;z-index:1}.col-after{position:relative}.col-after:after{background:hsla(0,0%,39%,.3);content:"";height:100%;position:absolute;right:0;top:0;transform:scaleX(.3);width:1px!important;z-index:1}.border{position:relative}.border:after{border:1px solid hsla(0,0%,39%,.3);border-radius:3px;content:"";height:calc(200% - 2px);left:-50%;position:absolute;top:-50%;transform:scale(.5);width:calc(200% - 2px);z-index:1}.aui-lists{width:100%}.aui-list{background:#fff;box-sizing:border-box;font-size:0;height:55px;padding:0 15px;position:relative;width:100%;z-index:1}.aui-list:after{background:hsla(0,0%,39%,.3);bottom:0;content:"";height:1px;left:0;position:absolute;transform:scaleY(.3);width:100%}.aui-list:last-child:after{display:none}.aui-list-title{box-sizing:border-box;color:#999;display:inline-block;font-size:14px;height:44px;line-height:44px;padding:0 15px;width:100%}.aui-list-left{color:#333;display:inline-block;font-size:15px;height:100%;line-height:55px;vertical-align:top}.aui-list-right{display:inline-block;float:right;height:100%;vertical-align:top}.aui-list-right .aui-btn-right{color:#aaa;display:inline-block;font-size:14px;height:55px;line-height:55px;text-align:center;vertical-align:top}.aui-btn{border:none;border-radius:5px;box-sizing:border-box;color:#333;font-size:15px;height:50px;line-height:50px;margin:0 15px 15px;overflow:hidden;padding:0 10px;position:relative;text-align:center;text-overflow:ellipsis;transition:background-color .2s;white-space:nowrap;width:calc(100% - 30px)}.aui-btn-blue{background:#197de0;color:#fff}.aui-mask{animation:aui-fade-in-data-v-286ae0e6 .2s ease-out forwards;background:rgba(0,0,0,.6);height:100%;left:0;position:fixed;top:0;width:100%;z-index:998}@-webkit-keyframes aui-fade-in-data-v-286ae0e6{0%{opacity:0}100%{opacity:1}}@keyframes aui-fade-in-data-v-286ae0e6{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes aui-fade-out-data-v-286ae0e6{0%{opacity:1}100%{opacity:0}}@keyframes aui-fade-out-data-v-286ae0e6{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes aui-scale-in-data-v-286ae0e6{0%{transform:scale(.8)}100%{transform:scale(1)}}@keyframes aui-scale-in-data-v-286ae0e6{0%{transform:scale(.8)}100%{transform:scale(1)}}@-webkit-keyframes aui-scale-out-data-v-286ae0e6{0%{transform:scale(1)}100%{transform:scale(.8)}}@keyframes aui-scale-out-data-v-286ae0e6{0%{transform:scale(1)}100%{transform:scale(.8)}}@-webkit-keyframes aui-scale-in-tosmall-data-v-286ae0e6{0%{transform:scale(1.2)}100%{transform:scale(1)}}@keyframes aui-scale-in-tosmall-data-v-286ae0e6{0%{transform:scale(1.2)}100%{transform:scale(1)}}@-webkit-keyframes aui-scale-in-tosmall-dialog-data-v-286ae0e6{0%{opacity:0;transform:translate3d(-50%,-50%,0) scale(1.16)}100%{opacity:1;transform:translate3(-50%,-50%,0) scale(1)}}@keyframes aui-scale-in-tosmall-dialog-data-v-286ae0e6{0%{opacity:0;transform:translate3d(-50%,-50%,0) scale(1.16)}100%{opacity:1;transform:translate3(-50%,-50%,0) scale(1)}}@-webkit-keyframes aui-scale-out-tosmall-dialog-data-v-286ae0e6{0%{opacity:1;transform:translate3d(-50%,-50%,0) scale(1)}100%{opacity:0;transform:translate3(-50%,-50%,0) scale(.8)}}@keyframes aui-scale-out-tosmall-dialog-data-v-286ae0e6{0%{opacity:1;transform:translate3d(-50%,-50%,0) scale(1)}100%{opacity:0;transform:translate3(-50%,-50%,0) scale(.8)}}@-webkit-keyframes aui-slide-up-data-v-286ae0e6{0%{bottom:-40vh}100%{bottom:10px}}@keyframes aui-slide-up-data-v-286ae0e6{0%{bottom:-40vh}100%{bottom:10px}}@-webkit-keyframes aui-slide-down-data-v-286ae0e6{0%{bottom:10px}100%{bottom:-40vh}}@keyframes aui-slide-down-data-v-286ae0e6{0%{bottom:10px}100%{bottom:-40vh}}@-webkit-keyframes aui-slide-up-screen-data-v-286ae0e6{0%{bottom:-60vh}100%{bottom:0}}@keyframes aui-slide-up-screen-data-v-286ae0e6{0%{bottom:-60vh}100%{bottom:0}}@-webkit-keyframes aui-slide-down-screen-data-v-286ae0e6{0%{bottom:0}100%{bottom:-60vh}}@keyframes aui-slide-down-screen-data-v-286ae0e6{0%{bottom:0}100%{bottom:-60vh}}@-webkit-keyframes aui-slide-up_to_middle-data-v-286ae0e6{0%{opacity:0;top:-50vh;transform:translate(0)}100%{opacity:1;top:45%;transform:translateY(-50%)}}@keyframes aui-slide-up_to_middle-data-v-286ae0e6{0%{opacity:0;top:-50vh;transform:translate(0)}100%{opacity:1;top:45%;transform:translateY(-50%)}}@-webkit-keyframes aui-slide-middle_to_up-data-v-286ae0e6{0%{opacity:1;top:45%;transform:translateY(-50%)}100%{opacity:0;top:-50vh;transform:translate(0)}}@keyframes aui-slide-middle_to_up-data-v-286ae0e6{0%{opacity:1;top:45%;transform:translateY(-50%)}100%{opacity:0;top:-50vh;transform:translate(0)}}@font-face{font-family:iconfont;src:url('https://at.alicdn.com/t/font_1135293_z1315ov8k2t.woff2?t=1589338239928')format('woff2'),url('https://at.alicdn.com/t/font_1135293_z1315ov8k2t.woff?t=1589338239928')format('woff'),url('https://at.alicdn.com/t/font_1135293_z1315ov8k2t.ttf?t=1589338239928')format('truetype')}.iconfont{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:iconfont!important;font-size:16px;font-style:normal}.icondaojishi:before{content:""}.iconCSS:before{content:""}.iconqiu:before{content:""}.iconradio:before{content:""}.iconradio1:before{content:""}.iconzhutise:before{content:""}.icondatepicker1:before{content:""}.icondatepicker:before{content:""}.iconloading5:before{content:""}.iconloading7:before{content:""}.iconloading_r:before{content:""}.iconrenlianshibie:before{content:""}.iconweibiaoti-zhuanhuan-:before{content:""}.iconxingzhuang:before{content:""}.iconhuatong:before{content:""}.iconbiaoqing1:before{content:""}.iconicon-:before{content:""}.iconjianpan:before{content:""}.iconyuyin:before{content:""}.iconluyin:before{content:""}.iconjianpanshanchu:before{content:""}.iconxuanxiangqia1:before{content:""}.iconxuanxiangqialiebiao:before{content:""}.iconxialaliebiao:before{content:""}.iconcopy:before{content:""}.iconjiantieban:before{content:""}.iconjurassic_paste:before{content:""}.iconerweima:before{content:""}.icontupiancaijian:before{content:""}.icontupianshangchuan:before{content:""}.iconzujian-xialaxuankuang:before{content:""}.iconxuanxiangqia:before{content:""}.iconxing:before{content:""}.iconAPP:before{content:""}.iconjs:before{content:""}.iconshilidaima:before{content:""}.iconshouye1:before{content:""}.icontime1:before{content:""}.iconyanjing:before{content:""}.iconkaiyanjing:before{content:""}.iconsearch:before{content:""}.iconhtbarrowright02:before{content:""}.iconclose1:before{content:""}.icondizhi:before{content:""}.iconqianniudaidise:before{content:""}.iconquestions:before{content:""}.iconsupply:before{content:""}.icontools:before{content:""}.iconint:before{content:""}.iconcommodity:before{content:""}.iconzhtn:before{content:""}.iconTop:before{content:""}.iconleft2:before{content:""}.iconleft3:before{content:""}.iconright3:before{content:""}.iconshut_down:before{content:""}.iconwithdraw:before{content:""}.iconeye_protection:before{content:""}.iconnickname:before{content:""}.iconproblem:before{content:""}.icondown:before{content:""}.icontop:before{content:""}.iconbianji:before{content:""}.iconweibo:before{content:""}.iconyidiandiantubiao03:before{content:""}.iconqq:before{content:""}.iconweixin:before{content:""}.iconright:before{content:""}.iconpengyouquan:before{content:""}.icontop1:before{content:""}.iconloading:before{content:""}.iconLC_icon_down_line_circle:before{content:""}.iconadd:before{content:""}.iconup_s8:before{content:""}.iconmore:before{content:""}.iconloading2:before{content:""}.iconright1:before{content:""}.iconjian:before{content:""}.iconqq-copy:before{content:""}.icontupian:before{content:""}.iconleft:before{content:""}.iconadd1:before{content:""}.iconset:before{content:""}.iconaddress:before{content:""}.icondown1:before{content:""}.iconjian1:before{content:""}.iconguolv:before{content:""}.icondelete:before{content:""}.iconaddress1:before{content:""}.iconmore1:before{content:""}.icondown2:before{content:""}.iconimage:before{content:""}.iconimage1:before{content:""}.iconleft1:before{content:""}.icontop2:before{content:""}.iconshangchuan:before{content:""}.iconadd2:before{content:""}.iconLoading1:before{content:""}.iconjian2:before{content:""}.iconaddress2:before{content:""}.iconshouye:before{content:""}.iconaccessory:before{content:""}.iconactivity:before{content:""}.iconactivity_fill:before{content:""}.iconadd3:before{content:""}.iconaddition_fill:before{content:""}.iconaddition:before{content:""}.iconaddpeople_fill:before{content:""}.iconaddpeople:before{content:""}.iconaddressbook_fill:before{content:""}.iconaddressbook:before{content:""}.iconbarrage_fill:before{content:""}.iconbarrage:before{content:""}.iconbrowse_fill:before{content:""}.iconbrowse:before{content:""}.iconbrush:before{content:""}.iconbrush_fill:before{content:""}.iconbusinesscard_fill:before{content:""}.iconbusinesscard:before{content:""}.iconcamera_fill:before{content:""}.iconcamera:before{content:""}.iconclock_fill:before{content:""}.iconclock:before{content:""}.iconclose:before{content:""}.iconcollection_fill:before{content:""}.iconcollection:before{content:""}.iconcomputer_fill:before{content:""}.iconcomputer:before{content:""}.iconcoordinates_fill:before{content:""}.iconcoordinates:before{content:""}.iconcoupons_fill:before{content:""}.iconcoupons:before{content:""}.iconcreatetask_fill:before{content:""}.iconcreatetask:before{content:""}.iconcustomerservice_fill:before{content:""}.iconcustomerservice:before{content:""}.icondelete_fill:before{content:""}.icondelete1:before{content:""}.icondocument:before{content:""}.icondocument_fill:before{content:""}.icondynamic_fill:before{content:""}.icondynamic:before{content:""}.iconeditor:before{content:""}.iconeit:before{content:""}.iconemoji_fill:before{content:""}.iconemoji:before{content:""}.iconempty:before{content:""}.iconempty_fill:before{content:""}.iconenter:before{content:""}.iconenterinto:before{content:""}.iconenterinto_fill:before{content:""}.iconfeedback_fill:before{content:""}.iconfeedback:before{content:""}.iconflag_fill:before{content:""}.iconflag:before{content:""}.iconflashlight:before{content:""}.iconflashlight_fill:before{content:""}.iconflip:before{content:""}.iconflip_fill:before{content:""}.iconfullscreen:before{content:""}.icongroup:before{content:""}.icongroup_fill:before{content:""}.iconheadlines_fill:before{content:""}.iconheadlines:before{content:""}.iconhomepage_fill:before{content:""}.iconhomepage:before{content:""}.iconintegral_fill:before{content:""}.iconintegral:before{content:""}.iconinteractive_fill:before{content:""}.iconinteractive:before{content:""}.iconkeyboard:before{content:""}.iconlabel:before{content:""}.iconlabel_fill:before{content:""}.iconlike_fill:before{content:""}.iconlike:before{content:""}.iconlive_fill:before{content:""}.iconlive:before{content:""}.iconlock_fill:before{content:""}.iconlock:before{content:""}.iconmail:before{content:""}.iconmail_fill:before{content:""}.iconmanage_fill:before{content:""}.iconmanage:before{content:""}.iconmessage:before{content:""}.iconmessage_fill:before{content:""}.iconmine:before{content:""}.iconmine_fill:before{content:""}.iconmobilephone_fill:before{content:""}.iconmobilephone:before{content:""}.iconmore2:before{content:""}.iconnarrow:before{content:""}.iconoffline_fill:before{content:""}.iconoffline:before{content:""}.iconorder_fill:before{content:""}.iconorder:before{content:""}.iconother:before{content:""}.iconpeople_fill:before{content:""}.iconpeople:before{content:""}.iconpicture_fill:before{content:""}.iconpicture:before{content:""}.iconplay:before{content:""}.iconplay_fill:before{content:""}.iconplayon_fill:before{content:""}.iconplayon:before{content:""}.iconpraise_fill:before{content:""}.iconpraise:before{content:""}.iconprompt_fill:before{content:""}.iconprompt:before{content:""}.iconqrcode_fill:before{content:""}.iconqrcode:before{content:""}.iconredpacket_fill:before{content:""}.iconredpacket:before{content:""}.iconrefresh:before{content:""}.iconremind_fill:before{content:""}.iconremind:before{content:""}.iconreturn:before{content:""}.iconright2:before{content:""}.iconscan:before{content:""}.iconselect_fill:before{content:""}.iconselect:before{content:""}.iconsend:before{content:""}.iconservice_fill:before{content:""}.iconservice:before{content:""}.iconsetup_fill:before{content:""}.iconsetup:before{content:""}.iconshare_fill:before{content:""}.iconshare:before{content:""}.iconshielding_fill:before{content:""}.iconshielding:before{content:""}.iconsmallscreen_fill:before{content:""}.iconsmallscreen:before{content:""}.iconstealth_fill:before{content:""}.iconstealth:before{content:""}.iconsuccess_fill:before{content:""}.iconsuccess:before{content:""}.iconsuspend:before{content:""}.iconswitch:before{content:""}.iconsystemprompt_fill:before{content:""}.iconsystemprompt:before{content:""}.icontailor:before{content:""}.icontask:before{content:""}.icontask_fill:before{content:""}.icontasklist_fill:before{content:""}.icontasklist:before{content:""}.icontext:before{content:""}.icontime_fill:before{content:""}.icontime:before{content:""}.icontranslation_fill:before{content:""}.icontranslation:before{content:""}.icontrash:before{content:""}.icontrash_fill:before{content:""}.iconundo:before{content:""}.iconunlock_fill:before{content:""}.iconunlock:before{content:""}.iconvideo:before{content:""}.iconvideo_fill:before{content:""}.iconwarning_fill:before{content:""}.iconwarning:before{content:""}.iconworkbench_fill:before{content:""}.iconworkbench:before{content:""}.iconsearch1:before{content:""}.iconsearchfill:before{content:""}.iconqianniu:before{content:""}.iconpublishgoods_fill:before{content:""}.iconshop_fill:before{content:""}.icontransaction_fill:before{content:""}.iconpackup:before{content:""}.iconunfold:before{content:""}.iconwangwang:before{content:""}.iconfinancial_fill:before{content:""}.iconmarketing_fill:before{content:""}.iconshake:before{content:""}.icondecoration_fill:before{content:""}.iconbudaidise:before{content:""}.goodsBox{padding-bottom:120rpx}.painter{height:960rpx;left:-5000rpx;position:absolute;top:0;width:543rpx;z-index:100}.navBar{display:-webkit-flex;display:flex}.navBar text{border-bottom:4rpx solid #fff;line-height:78rpx;margin:0 30rpx}.navBar .activeNav{border-bottom:4rpx solid #ff4643;color:#ff4643}.swiper{height:750rpx;width:100%}.swiper .swiper_item{background-color:#e5e5e5;height:100%;width:100%}.ms-box{align-items:center;background:linear-gradient(52deg,#fc4a9e,#ff5411);border-bottom:20rpx solid #fff;box-sizing:initial;display:-webkit-flex;display:flex;height:90rpx;line-height:1;padding:0 35rpx}.ms-box .ms-img{height:92rpx;margin-right:20rpx;position:relative;top:-25rpx;width:73rpx}.ms-box .left{align-items:baseline;display:-webkit-flex;display:flex;width:420rpx}.ms-box .left view:nth-child(1){color:#fff;font-size:50rpx;font-weight:700;margin-right:10rpx}.ms-box .left view:nth-child(2){color:#fff;font-size:26rpx;text-decoration:line-through}.ms-box .right .t{color:#fff;font-size:24rpx;margin-bottom:10rpx}.ms-box .right .b{color:#fff;font-size:28rpx;font-weight:700}.goodsPrice{align-items:center;background:#fff;display:-webkit-flex;display:flex;height:100rpx;justify-content:space-between;padding:0 30rpx;width:100%}.goodsPrice .priceNum{align-items:flex-end;display:-webkit-flex;display:flex}.goodsPrice .priceNum>text{color:#ff3709;font-size:40rpx;font-weight:700;margin-right:20rpx}.goodsPrice .priceNum>text:last-child{color:#b5b5b5;font-size:22rpx;font-weight:400;margin-bottom:6rpx;text-decoration:line-through}.fxBtn{align-items:center;background:#fff;display:-webkit-flex;display:flex;justify-content:flex-start;padding:0rpx 30rpx 10rpx}.fxBtn .commissionfx{align-items:flex-end;display:-webkit-flex;display:flex;margin-right:16rpx}.fxBtn .commissionfx .fxText{background:linear-gradient(52deg,#fc4a9e,#ff5411);border-radius:10rpx 10rpx 0rpx 10rpx;color:#fff;display:inline-block;font-size:26rpx;font-weight:700;height:40rpx;line-height:40rpx;text-align:center;width:40rpx;z-index:2}.fxBtn .commissionfx .fxPic{background:#ffe9e4;border-radius:0rpx 6rpx 6rpx 0rpx;color:#563e26;display:inline-block;font-size:22rpx;font-weight:400;height:34rpx;line-height:34rpx;margin-left:-5rpx;padding:0 10rpx 0rpx 15rpx;text-align:center}.fxBtn .commission{align-items:flex-end;display:-webkit-flex;display:flex}.fxBtn .commission .fxText{background:linear-gradient(52deg,#ffc40f,#ff6a30);border-radius:10rpx 10rpx 0rpx 10rpx;color:#fff;display:inline-block;font-size:22rpx;font-weight:400;height:40rpx;line-height:40rpx;text-align:center;width:80rpx;z-index:2}.fxBtn .commission .fxPic{background:#ffe7bd;border-radius:6rpx;color:#563e26;display:inline-block;font-size:22rpx;font-weight:400;height:34rpx;line-height:34rpx;margin-left:-5rpx;padding:0 10rpx 0rpx 15rpx;text-align:center}.goodsInfo{background-color:#fff;padding:20rpx 30rpx;position:relative}.goodsInfo .fav-img{height:39rpx;position:absolute;right:30rpx;top:20rpx;width:41rpx}.goodsInfo .goodsName{color:#333;font-size:36rpx;font-weight:700;width:630rpx}.goodsInfo .numBox{display:-webkit-flex;display:flex;justify-content:space-between}.goodsInfo .numBox .subTit{color:#4e4e4e;display:inline-block;font-size:26rpx;line-height:32rpx;margin:10rpx 0;width:530rpx}.goodsInfo .numBox .ys{color:#989892;font-size:24rpx;line-height:32rpx;margin:10rpx 0}.delivery{background-color:#fff;margin:10rpx 0;padding:0 30rpx}.delivery .selectItem{align-items:center;border-bottom:1rpx solid #fafafa;display:-webkit-flex;display:flex;height:92rpx;width:100%}.delivery .selectItem>text{color:#333;font-size:30rpx;font-weight:700;white-space:nowrap}.delivery .selectItem .dian{background-color:#ff4643;border-radius:50%;height:8rpx;margin-right:15rpx;width:8rpx}.delivery .selectItem .itemText{align-items:center;color:#333;display:-webkit-flex;display:flex;font-size:26rpx;justify-content:space-between;margin-left:30rpx;width:87%}.delivery .selectItem .itemText .itemAddres{font-size:26rpx}.delivery .selectItem:last-child{border:0}.titleName{background:#fff;color:#333;font-size:32rpx;font-weight:700;line-height:100rpx;padding:0 30rpx}.parameter{background-color:#fff;margin:20rpx 0;padding:30rpx}.parameter .parameItem{align-items:center;display:-webkit-flex;display:flex;height:60rpx}.parameter .parameItem>text:first-child{color:#878787;flex:2;font-size:26rpx}.parameter .parameItem>text:last-child{flex:8;font-size:26rpx}.richText{background-color:#fff;padding-left:30rpx;padding-right:30rpx}.kefuData{background:#fff;padding:30rpx}.kefuData .itemAddres{color:#616161;font-size:24rpx;font-weight:700;line-height:50rpx}.kefuData .itemAddres text{color:#979797;font-weight:400}.comments{background-color:#fff;margin:30rpx 0}.comments .commentItem{border-bottom:1rpx solid #f9f9f9;padding:20rpx 30rpx}.comments .commentItem .itemTop{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;margin-bottom:15rpx}.comments .commentItem .itemTop .topLeft{align-items:center;border-radius:50%;display:-webkit-flex;display:flex}.comments .commentItem .itemTop .topLeft>image{border-radius:50%;height:64rpx;width:64rpx}.comments .commentItem .itemTop .topLeft>text{color:#1c1c1d;font-size:28rpx;margin-left:15rpx}.comments>text{color:#878787;font-size:24rpx}.comments .itemText{color:#1c1c1d;font-size:28rpx;line-height:44rpx;margin:15rpx 0}.comments .itemImg{display:-webkit-flex;display:flex;flex-wrap:wrap}.comments .itemImg .imgItem{background-color:#f9f9f9;height:220rpx;margin-left:15rpx;margin-top:15rpx;width:220rpx}.comments .itemImg .imgItem:nth-child(3n-2){margin-left:0}.comments .commentsMore{color:#858585;font-size:26rpx;padding:20rpx 30rpx;text-align:right}.goods-carts,.subBtn{bottom:0;left:0;position:fixed;right:0}.subBtn{background-image:linear-gradient(90deg,#ff4643,#e61714);color:#fff;font-size:28rpx;height:80rpx;line-height:80rpx;padding:0 50rpx}.popup{background-color:#fff;border-radius:40rpx 40rpx 0 0;min-height:500rpx;padding:0 30rpx;width:100%}.popup .popTitle{align-items:center;display:-webkit-flex;display:flex;height:90rpx;justify-content:space-between}.popup .popTitle .titleText{flex:1;margin-left:20px;text-align:center}.popup .popupBtn{background-color:#fff;border:1rpx solid #ff4643;border-radius:92rpx;bottom:30rpx;color:#ff4643;font-size:32rpx;height:92rpx;left:20rpx;line-height:92rpx;position:absolute;right:20rpx;text-align:center}.popup .popupBtn:after{border:0}.popup .popMain{padding-bottom:140rpx}.popup .popMain .radioItem{align-items:center;border-bottom:1rpx solid #f7f7f7;display:-webkit-flex;display:flex}.popup .popMain .radioItem .radioIcon{transform:scale(.7)}.canvas{display:block!important;height:100%!important;left:0!important;position:fixed!important;top:0!important;width:100%!important;z-index:10}.intro-box{background-color:#fff;margin-top:10rpx;padding:42rpx 30rpx}.intro-box .title-box{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;margin-bottom:40rpx}.intro-box .title-box .left .name{color:#333;font-size:32rpx;font-weight:700}.intro-box .title-box .middle{box-sizing:border-box;display:-webkit-flex;display:flex;padding-left:30rpx;width:580rpx}.intro-box .title-box .middle .item{border:1rpx solid #ff5411;border-radius:18rpx;color:#f96365;font-size:22rpx;line-height:1;margin-right:10rpx;padding:7rpx 10rpx}.intro-box .title-box .right{height:21rpx;width:12rpx}.intro-box .content{-webkit-line-clamp:5;-webkit-box-orient:vertical;word-wrap:break-word;color:#707070;display:-webkit-box;font-size:24rpx;line-height:42rpx;overflow:hidden;white-space:normal!important}.intro-box .nav-button{display:-webkit-flex;display:flex;justify-content:flex-end;padding-top:30rpx}.intro-box .nav-button view{border:2rpx solid;border-image-source:linear-gradient(52deg,#fc4a9e,#ff5411)10 10;border-radius:25rpx;color:#f96365;font-size:22rpx;height:50rpx;line-height:50rpx;text-align:center;width:140rpx}.yh-mask{height:100%;position:fixed;top:0;width:100%;z-index:100}.yh-mask .bg{background-color:rgba(0,0,0,.5);height:100%;width:100%}.yh-mask .content{background:#fafafa;border-radius:20rpx 20rpx 0 0;bottom:0;box-sizing:border-box;height:70%;overflow-y:auto;padding:70rpx 20rpx;position:absolute;width:100%}.yh-mask .content .close{color:#444242;font-size:20rpx;position:absolute;right:20rpx;top:25rpx}.yh-mask .content .item-list{line-height:1}.yh-mask .content .item-list .item{margin-bottom:20rpx}.yh-mask .content .item-list .item.ylq .top{background:#fff}.yh-mask .content .item-list .item.ylq .top .left .p1 text{color:#adadad!important}.yh-mask .content .item-list .item.ylq .top .left .p2{color:#484848}.yh-mask .content .item-list .item.ylq .top .right{background:#fff1ed;color:#f15252}.yh-mask .content .item-list .item.yqg .top{background:#fff}.yh-mask .content .item-list .item.yqg .top .left .p1 text{color:#adadad!important}.yh-mask .content .item-list .item.yqg .top .left .p2{color:#adadad}.yh-mask .content .item-list .item.yqg .top .right{background:#f2f2f2;color:#7b7b7b}.yh-mask .content .item-list .item.yqg .top .middle{color:#adadad}.yh-mask .content .item-list .item .top{align-items:center;background:#fff1ed;border-radius:20rpx;display:-webkit-flex;display:flex;justify-content:space-between;min-height:167rpx;padding:36rpx 30rpx;position:relative}.yh-mask .content .item-list .item .top .left{text-align:center;width:190rpx}.yh-mask .content .item-list .item .top .left .p1{margin-bottom:17rpx}.yh-mask .content .item-list .item .top .left .p1 text:first-child{color:#f15252;font-size:26rpx}.yh-mask .content .item-list .item .top .left .p1 text:last-child{color:#f15252;font-size:40rpx;font-weight:700}.yh-mask .content .item-list .item .top .left .p2{color:#f15252;font-size:26rpx}.yh-mask .content .item-list .item .top .middle{width:260rpx}.yh-mask .content .item-list .item .top .middle .p1{color:#3a3a3a;font-size:26rpx;font-weight:700;line-height:32rpx;margin-bottom:9rpx}.yh-mask .content .item-list .item .top .middle .p2{color:#8f8f8f;font-size:24rpx;line-height:32rpx}.yh-mask .content .item-list .item .top .right{background:linear-gradient(52deg,#fc4a7c,#ff5411);border-radius:20rpx;color:#fefffe;font-size:24rpx;height:50rpx;line-height:50rpx;text-align:center;width:120rpx}.yh-mask .content .item-list .item .top .jt{bottom:10rpx;height:40rpx;position:absolute;right:30rpx;transform:rotate(180deg);transition:.3s;width:40rpx}.yh-mask .content .item-list .item .top .jt.extend{transform:rotate(0)}.yh-mask .content .item-list .item .bottom{color:#868686;font-size:22rpx;height:0;line-height:34rpx;overflow:hidden;padding:0rpx 24rpx;transition:.3s}.yh-mask .content .item-list .item .bottom.extend{height:auto;padding:24rpx}
</style>
