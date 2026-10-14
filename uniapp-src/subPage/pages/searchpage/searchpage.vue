<template>
<view class="bg-box">
    <view class="search-box">
        <u-search :actionStyle="{color:'#333333'}" actionText="搜索" :animation="true" class="" :focus="true" maxlength="30" :placeholder="searchKeyDefault.searchKey||'输入您想搜索的内容'" :value="keyword" @search="doSearch()" @custom="doSearch()" @change="changeFn()" @input="keyword = $event"></u-search>
    </view>
    <view class="page1" v-if="showPage1">
        <view class="keyword-block" v-if="$root.g0>0">
            <view class="keyword-list-header">
                <view class="kt">历史搜索</view>
                <uni-icons class="" color="#878787" size="20" type="trash" @click="oldDelete()"></uni-icons>
            </view>
            <view class="keyword">
                <view class="" :key="index" v-for="(item, index) in oldKeywordList">{{item.name}}</view>
            </view>
        </view>
        <view class="recommend-box" v-if="$root.g1>0">
            <view class="keyword-list-header">
                <view class="kt">热门推荐</view>
            </view>
            <view class="keyword">
                <view class="" :key="index" v-for="(item, index) in searchKeyList">{{item.searchKey}}</view>
            </view>
        </view>
    </view>
    <view class="page2" v-if="showPage2">
        <view class="box1" v-if="searchResultType==1&&pageHotSpotArr[0]" @click="jumpcity(cityObj.id)">
            <view class="l">
                <image class="" mode="aspectFill" :src="cityObj.cityPic"></image>
            </view>
            <view class="r">
                <view class="name singleLineText">{{cityObj.cityName}}</view>
                <view class="flag city">城市</view>
                <view class="info">{{cityObj.cityTag}}</view>
            </view>
        </view>
        <view class="box1" v-if="searchResultType==2&&pageHotSpotArr[0]" @click="jumpDetailPage('景区', pageHotSpotArr[0], '联想')">
            <view class="l">
                <image class="" mode="aspectFill" :src="pageHotSpotArr[0].picUrl"></image>
            </view>
            <view class="r">
                <view class="name singleLineText">{{pageHotSpotArr[0].name}}</view>
                <view class="flag spot">景区</view>
                <view class="info" v-if="pageHotSpotArr[0].showPrice">
                    <text class="red">{{'￥'+pageHotSpotArr[0].showPrice}}</text>起</view>
            </view>
        </view>
        <view class="box1" v-if="searchResultType==5&&hotelHotSpot[0]" @click="jumpDetailPage('酒店', hotelHotSpot[0], '联想')">
            <view class="l">
                <image class="" mode="aspectFill" :src="hotelHotSpot[0].picUrl"></image>
            </view>
            <view class="r">
                <view class="name singleLineText">{{hotelHotSpot[0].name}}</view>
                <view class="flag hotel">酒店</view>
                <view class="info" v-if="hotelHotSpot[0].showPrice">
                    <text class="red">{{'￥'+hotelHotSpot[0].showPrice}}</text>起</view>
            </view>
        </view>
        <view class="box1" v-if="searchResultType==4&&restaurantHotSpot[0]" @click="jumpDetailPage('美食', restaurantHotSpot[0], '联想')">
            <view class="l">
                <image class="" mode="aspectFill" :src="restaurantHotSpot[0].picUrl"></image>
            </view>
            <view class="r">
                <view class="name singleLineText">{{restaurantHotSpot[0].name}}</view>
                <view class="flag restaurant">美食</view>
                <view class="info" v-if="restaurantHotSpot[0].showPrice">
                    <text class="red">{{'￥'+restaurantHotSpot[0].showPrice}}</text>起</view>
            </view>
        </view>
        <view class="box1" v-if="searchResultType==6&&entertainmentHotSpot[0]" @click="jumpDetailPage('玩乐', entertainmentHotSpot[0], '联想')">
            <view class="l">
                <image class="" mode="aspectFill" :src="entertainmentHotSpot[0].picUrl"></image>
            </view>
            <view class="r">
                <view class="name singleLineText">{{entertainmentHotSpot[0].name}}</view>
                <view class="flag play">玩乐</view>
                <view class="info" v-if="entertainmentHotSpot[0].showPrice">
                    <text class="red">{{'￥'+entertainmentHotSpot[0].showPrice}}</text>起</view>
            </view>
        </view>
        <view class="box1" v-if="searchResultType==3&&pageItemArr[0]" @click="jumpDetailPage('商品', pageItemArr[0], '联想')">
            <view class="l">
                <image class="" mode="aspectFill" :src="pageItemArr[0].defaultPicUrl"></image>
            </view>
            <view class="r">
                <view class="name singleLineText">{{pageItemArr[0].itemTitle}}</view>
                <view class="flag goods">商品</view>
                <view class="info">
                    <text class="red">{{'￥'+pageItemArr[0].minPrice}}</text>起</view>
            </view>
        </view>
        <view class="box1" v-if="searchResultType==7&&travelAgencyArr[0]" @click="jumpDetailPage('店铺', travelAgencyArr[0], '联想')">
            <view class="l">
                <image class="" mode="aspectFill" :src="travelAgencyArr[0].logo"></image>
            </view>
            <view class="r">
                <view class="name singleLineText">{{travelAgencyArr[0].travelAgencyName}}</view>
                <view class="flag travelAgency">店铺</view>
            </view>
        </view>
        <view class="box1" v-if="searchResultType==8&&lineProductList[0]" @click="jumpDetailPage('线路', lineProductList[0], '联想')">
            <view class="l">
                <image class="" mode="aspectFill" :src="lineProductList[0].productUrl"></image>
            </view>
            <view class="r">
                <view class="name singleLineText">{{lineProductList[0].productName}}</view>
                <view class="flag lineProduct">线路</view>
            </view>
        </view>
        <view class="box2" v-if="$root.g2>0">
            <view class="title-box" @click="viewMore('景区')">
                <view class="l">
                    <image mode class="" src="https://eshopfile.zhiyousx.com/169147756465107978.png"></image>
                    <view class="">景区</view>
                </view>
                <image mode class="r" src="https://eshopfile.zhiyousx.com/2022082411212199760.png"></image>
            </view>
            <view class="list-box">
                <view class="item" v-for="(item, index) in pageHotSpotArr">
                    <view class="l singleLineText">{{item.name}}</view>
                    <view class="r" v-if="item.showPrice">{{'￥'+item.showPrice+'起'}}</view>
                </view>
            </view>
        </view>
        <view class="box2" v-if="$root.g3>0">
            <view class="title-box" @click="viewMore('线路')">
                <view class="l">
                    <image mode class="" src="https://eshopfile.zhiyousx.com/172239722803463474.png"></image>
                    <view class="">线路</view>
                </view>
                <image mode class="r" src="https://eshopfile.zhiyousx.com/2022082411212199760.png"></image>
            </view>
            <view class="list-box">
                <view class="item" :key="index" v-for="(item, index) in lineProductList">
                    <view class="l singleLineText">{{item.productName}}</view>
                    <view class="r">{{'￥'+item.price+(item.startPriceFlag?'起':'')}}</view>
                </view>
            </view>
        </view>
        <view class="box2" v-if="$root.g4>0">
            <view class="title-box" @click="viewMore('酒店')">
                <view class="l">
                    <image mode class="" src="https://eshopfile.zhiyousx.com/169147758739982551.png"></image>
                    <view class="">酒店</view>
                </view>
                <image mode class="r" src="https://eshopfile.zhiyousx.com/2022082411212199760.png"></image>
            </view>
            <view class="list-box">
                <view class="item" v-for="(item, index) in hotelHotSpot">
                    <view class="l singleLineText">{{item.name}}</view>
                    <view class="r" v-if="item.showPrice">{{'￥'+item.showPrice+'起'}}</view>
                </view>
            </view>
        </view>
        <view class="box2" v-if="$root.g5>0">
            <view class="title-box" @click="viewMore('美食')">
                <view class="l">
                    <image mode class="" src="https://eshopfile.zhiyousx.com/169147760604071544.png"></image>
                    <view class="">美食</view>
                </view>
                <image mode class="r" src="https://eshopfile.zhiyousx.com/2022082411212199760.png"></image>
            </view>
            <view class="list-box">
                <view class="item" v-for="(item, index) in restaurantHotSpot">
                    <view class="l singleLineText">{{item.name}}</view>
                    <view class="r" v-if="item.showPrice">{{'￥'+item.showPrice+'起'}}</view>
                </view>
            </view>
        </view>
        <view class="box2" v-if="$root.g6>0">
            <view class="title-box" @click="viewMore('玩乐')">
                <view class="l">
                    <image mode class="" src="https://eshopfile.zhiyousx.com/169147762167728856.png"></image>
                    <view class="">玩乐</view>
                </view>
                <image mode class="r" src="https://eshopfile.zhiyousx.com/2022082411212199760.png"></image>
            </view>
            <view class="list-box">
                <view class="item" v-for="(item, index) in entertainmentHotSpot">
                    <view class="l singleLineText">{{item.name}}</view>
                    <view class="r" v-if="item.showPrice">{{'￥'+item.showPrice+'起'}}</view>
                </view>
            </view>
        </view>
        <view class="box2" v-if="$root.g7>0">
            <view class="title-box" @click="viewMore('商品')">
                <view class="l">
                    <image mode class="" src="https://eshopfile.zhiyousx.com/169147763792934192.png"></image>
                    <view class="">商品</view>
                </view>
                <image mode class="r" src="https://eshopfile.zhiyousx.com/2022082411212199760.png"></image>
            </view>
            <view class="list-box">
                <view class="item" v-for="(item, index) in pageItemArr">
                    <view class="l singleLineText">{{item.itemTitle}}</view>
                    <view class="r">{{'￥'+item.minPrice+'起'}}</view>
                </view>
            </view>
        </view>
        <view class="box2" v-if="$root.g8>0">
            <view class="title-box" @click="viewMore('店铺')">
                <view class="l">
                    <image mode class="" src="https://eshopfile.zhiyousx.com/172230747987402808.png"></image>
                    <view class="">店铺</view>
                </view>
                <image mode class="r" src="https://eshopfile.zhiyousx.com/2022082411212199760.png"></image>
            </view>
            <view class="list-box">
                <view class="item" :key="travelAgencyId" v-for="(item, __i0__) in travelAgencyArr">
                    <view class="l singleLineText">{{item.travelAgencyName}}</view>
                </view>
            </view>
        </view>
    </view>
    <view class="page3" v-if="showPage3">
        <scroll-view class="nav-box" :scrollIntoView="goIndex" scrollX="true">
            <view :class="['u-tab-item','',resultTab=='全部'?'u-tab-item-active':'']" @click="doSearch($event)">
                <text class="u-line-1">全部</text>
            </view>
            <view :class="['u-tab-item','',resultTab=='景区'?'u-tab-item-active':'']" id="spot" v-if="pageHotSpotArr[0]" @click="viewMore('景区')">
                <text class="u-line-1">景区</text>
            </view>
            <view :class="['u-tab-item','',resultTab=='线路'?'u-tab-item-active':'']" id="line" v-if="lineProductList[0]" @click="viewMore('线路')">
                <text class="u-line-1">线路</text>
            </view>
            <view :class="['u-tab-item','',resultTab=='酒店'?'u-tab-item-active':'']" id="hotel" v-if="hotelHotSpot[0]" @click="viewMore('酒店')">
                <text class="u-line-1">酒店</text>
            </view>
            <view :class="['u-tab-item','',resultTab=='美食'?'u-tab-item-active':'']" id="food" v-if="restaurantHotSpot[0]" @click="viewMore('美食')">
                <text class="u-line-1">美食</text>
            </view>
            <view :class="['u-tab-item','',resultTab=='玩乐'?'u-tab-item-active':'']" id="relax" v-if="entertainmentHotSpot[0]" @click="viewMore('玩乐')">
                <text class="u-line-1">玩乐</text>
            </view>
            <view :class="['u-tab-item','',resultTab=='商品'?'u-tab-item-active':'']" id="commdity" v-if="pageItemArr[0]" @click="viewMore('商品')">
                <text class="u-line-1">商品</text>
            </view>
            <view :class="['u-tab-item','',resultTab=='店铺'?'u-tab-item-active':'']" id="travelAgency" v-if="travelAgencyArr[0]" @click="viewMore('店铺')">
                <text class="u-line-1">店铺</text>
            </view>
        </scroll-view>
        <view class="tab-box">
            <view class="tab1" v-if="resultTab=='全部'">
                <view class="box1" v-if="searchResultType==1&&pageHotSpotArr[0]" @click="jumpcity(cityObj.id)">
                    <view class="l">
                        <image class="" mode="aspectFill" :src="cityObj.cityPic"></image>
                    </view>
                    <view class="r">
                        <view class="name singleLineText">{{cityObj.cityName}}</view>
                        <view class="info">{{cityObj.cityTag}}</view>
                    </view>
                </view>
                <view class="box1" v-if="searchResultType==2&&pageHotSpotArr[0]" @click="jumpDetailPage('景区', pageHotSpotArr[0])">
                    <view class="l">
                        <image class="" mode="aspectFill" :src="pageHotSpotArr[0].picUrl"></image>
                    </view>
                    <view class="r">
                        <view class="name singleLineText">{{pageHotSpotArr[0].name}}</view>
                        <view class="sub-name" v-if="pageHotSpotArr[0].tag">{{pageHotSpotArr[0].tag}}</view>
                        <view class="line3">
                            <block v-if="pageHotSpotArr[0].distance">{{'距您'+pageHotSpotArr[0].distance+'km'}}</block>
                            <text class="" v-if="pageHotSpotArr[0].distance&&pageHotSpotArr[0].cityName">|</text>{{ (pageHotSpotArr[0].cityName||'') }}</view>
                        <view class="info" v-if="pageHotSpotArr[0].showPrice">
                            <text class="red">{{'￥'+pageHotSpotArr[0].showPrice}}</text>起</view>
                    </view>
                </view>
                <view class="box1" v-if="searchResultType==5&&hotelHotSpot[0]" @click="jumpDetailPage('酒店', hotelHotSpot[0])">
                    <view class="l">
                        <image class="" mode="aspectFill" :src="hotelHotSpot[0].picUrl"></image>
                    </view>
                    <view class="r">
                        <view class="name singleLineText">{{hotelHotSpot[0].name}}</view>
                        <view class="sub-name" v-if="hotelHotSpot[0].tag">{{hotelHotSpot[0].tag}}</view>
                        <view class="line3">
                            <block v-if="hotelHotSpot[0].distance">{{'距您'+hotelHotSpot[0].distance+'km'}}</block>
                            <text class="" v-if="hotelHotSpot[0].distance&&hotelHotSpot[0].cityName">|</text>{{ (hotelHotSpot[0].cityName||'') }}</view>
                        <view class="info" v-if="hotelHotSpot[0].showPrice">
                            <text class="red">{{'￥'+hotelHotSpot[0].showPrice}}</text>起</view>
                    </view>
                </view>
                <view class="box1" v-if="searchResultType==4&&restaurantHotSpot[0]" @click="jumpDetailPage('美食', restaurantHotSpot[0])">
                    <view class="l">
                        <image class="" mode="aspectFill" :src="restaurantHotSpot[0].picUrl"></image>
                    </view>
                    <view class="r">
                        <view class="name singleLineText">{{restaurantHotSpot[0].name}}</view>
                        <view class="sub-name" v-if="restaurantHotSpot[0].tag">{{restaurantHotSpot[0].tag}}</view>
                        <view class="line3">
                            <block v-if="restaurantHotSpot[0].distance">{{'距您'+restaurantHotSpot[0].distance+'km'}}</block>
                            <text class="" v-if="restaurantHotSpot[0].distance&&restaurantHotSpot[0].cityName">|</text>{{ (restaurantHotSpot[0].cityName||'') }}</view>
                        <view class="info" v-if="restaurantHotSpot[0].showPrice">
                            <text class="red">{{'￥'+restaurantHotSpot[0].showPrice}}</text>起</view>
                    </view>
                </view>
                <view class="box1" v-if="searchResultType==6&&entertainmentHotSpot[0]" @click="jumpDetailPage('玩乐', entertainmentHotSpot[0])">
                    <view class="l">
                        <image class="" mode="aspectFill" :src="entertainmentHotSpot[0].picUrl"></image>
                    </view>
                    <view class="r">
                        <view class="name singleLineText">{{entertainmentHotSpot[0].name}}</view>
                        <view class="sub-name" v-if="entertainmentHotSpot[0].tag">{{entertainmentHotSpot[0].tag}}</view>
                        <view class="line3">
                            <block v-if="entertainmentHotSpot[0].distance">{{'距您'+entertainmentHotSpot[0].distance+'km'}}</block>
                            <text class="" v-if="entertainmentHotSpot[0].distance&&entertainmentHotSpot[0].cityName">|</text>{{ (entertainmentHotSpot[0].cityName||'') }}</view>
                        <view class="info" v-if="entertainmentHotSpot[0].showPrice">
                            <text class="red">{{'￥'+entertainmentHotSpot[0].showPrice}}</text>起</view>
                    </view>
                </view>
                <view class="box1" v-if="searchResultType==3&&pageItemArr[0]" @click="jumpDetailPage('商品', pageItemArr[0])">
                    <view class="l">
                        <image class="" mode="aspectFill" :src="pageItemArr[0].defaultPicUrl"></image>
                    </view>
                    <view class="r">
                        <view class="name singleLineText">{{pageItemArr[0].itemTitle}}</view>
                        <view class="sub-name" v-if="pageItemArr[0].itemSubTitle">{{pageItemArr[0].itemSubTitle}}</view>
                        <view class="yh-box">
                            <block v-if="index<2" v-for="(huoDongObj, index) in pageItemArr[0].huoDongArr">
                                <image class="miao-sha" src="https://eshopfile.zhiyousx.com/2021091318044528261.png" v-if="huoDongObj.type=='秒杀'"></image>
                                <text class="itemRuter" v-if="huoDongObj.type=='优惠券'">
                                    <block v-if="pageItemArr[0].couponFullAmount==0">{{'领券减'+pageItemArr[0].couponAmount}}</block>
                                    <block v-else>{{'满'+pageItemArr[0].couponFullAmount+'减'+pageItemArr[0].couponAmount}}</block>
                                </text>
                                <text class="itemRuter" v-if="huoDongObj.type=='分享赚'&&userInfo&&userInfo.isFenxiao">{{'分享赚￥'+pageItemArr[0].maxReward}}</text>
                            </block>
                        </view>
                        <view class="info" v-if="pageItemArr[0].minPrice">
                            <text class="red">{{'￥'+pageItemArr[0].minPrice}}</text>起</view>
                    </view>
                </view>
                <view class="box1" v-if="searchResultType==7&&travelAgencyArr[0]" @click="jumpDetailPage('店铺', travelAgencyArr[0])">
                    <view class="l">
                        <image class="" mode="aspectFill" :src="travelAgencyArr[0].logo"></image>
                    </view>
                    <view class="r">
                        <view class="name singleLineText">{{travelAgencyArr[0].travelAgencyName}}</view>
                        <view class="sub-name singleLineText" v-if="travelAgencyArr[0].firmName">{{travelAgencyArr[0].firmName}}</view>
                    </view>
                </view>
                <view class="box1 lineBox" v-if="searchResultType==8&&lineProductList[0]" @click="jumpDetailPage('线路', lineProductList[0])">
                    <view class="pic-box">
                        <image class="left" mode="aspectFill" :src="lineProductList[0].productUrl"></image>
                        <view class="icon">{{lineProductList[0].productType}}</view>
                        <view class="city" v-if="lineProductList[0].cityName">
                            <image class="cityicon" mode="widthFix" src="/static/captured/b783dbfada461ad4.png"></image>
                            <text class="">{{$root.g9[0]+'出发'}}</text>
                        </view>
                    </view>
                    <view class="right">
                        <view class="nameTagsBox">
                            <view class="name multilineText2">{{lineProductList[0].productName+''}}</view>
                            <view class="lineHighlightLabel singleLineText" v-if="lineProductList[0].lineHighlightLabelList">
                                <text class="it" :key="num" v-for="(li, num) in $root.l0">{{ li+(num===li.g10-1?'':'/') }}</text>
                            </view>
                            <view class="tips">
                                <view class="it" v-if="lineProductList[0].lineTagList&&lineProductList[0].lineTagList[0]" :key="num" v-for="(li, num) in lineProductList[0].lineTagList">{{li}}</view>
                            </view>
                        </view>
                        <view class="bottom">
                            <view class="price">{{'￥'+lineProductList[0].price+''}}<text class="up" v-if="lineProductList[0].startPriceFlag">起</text>
                                <text class="line-through" v-if="lineProductList[0].retailPrice&&lineProductList[0].retailPrice>lineProductList[0].price">{{'￥'+lineProductList[0].retailPrice}}</text>
                            </view>
                            <view class="hasSell">
                                <text class="" v-if="lineProductList[0].saleNum">{{'已有'+$root.f0+' 人出行'}}</text>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="box2" v-if="$root.g11>0">
                    <view class="title-box" @click="viewMore('景区')">
                        <view class="l">
                            <image mode class="" src="https://eshopfile.zhiyousx.com/169147756465107978.png"></image>
                            <view class="">
                                <block v-if="searchResultType==1">热门景区</block>
                                <block v-else>景区</block>
                            </view>
                        </view>
                        <image mode class="r" src="https://eshopfile.zhiyousx.com/2022082411212199760.png"></image>
                    </view>
                    <view class="list-box">
                        <view class="item" v-for="(item, index) in pageHotSpotArr">
                            <image class="cover" mode="aspectFill" :src="item.picUrl"></image>
                            <view class="name singleLineText">{{item.name}}</view>
                            <view class="info" v-if="item.showPrice">
                                <text class="red">{{'￥'+item.showPrice}}</text>起</view>
                        </view>
                    </view>
                </view>
                <view class="box2" v-if="$root.g12>0">
                    <view class="title-box" @click="viewMore('线路')">
                        <view class="l">
                            <image mode class="" src="https://eshopfile.zhiyousx.com/172239722803463474.png"></image>
                            <view class="">线路</view>
                        </view>
                        <image mode class="r" src="https://eshopfile.zhiyousx.com/2022082411212199760.png"></image>
                    </view>
                    <view class="list-box lineList">
                        <view class="spot" :key="index" v-for="(item, index) in $root.l1">
                            <view class="typeIcon">{{item.productType}}</view>
                            <view class="imgBox">
                                <image class="" mode="aspectFill" :src="item.productUrl"></image>
                                <view class="city" v-if="item.cityName">
                                    <image class="icon" mode="widthFix" src="/static/captured/b783dbfada461ad4.png"></image>
                                    <text class="">{{item.g13[0]+'出发'}}</text>
                                </view>
                            </view>
                            <view class="textBox">
                                <view class="title">
                                    <view class="name" :style="'max-width:'+'260rpx'+';'">{{''+item.productName}}</view>
                                </view>
                                <view class="sold">
                                    <text class="" v-if="item.saleNum">{{'已有'+item.f1+'人出行'}}</text>
                                </view>
                                <view class="bottom">
                                    <text class="price">{{'￥'+item.price}}</text>
                                    <text class="up" v-if="item.startPriceFlag">起</text>
                                    <view class="line-through" v-if="item.retailPrice&&item.retailPrice>item.price">{{'￥'+item.retailPrice}}</view>
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="box2" v-if="$root.g14>0">
                    <view class="title-box" @click="viewMore('酒店')">
                        <view class="l">
                            <image mode class="" src="https://eshopfile.zhiyousx.com/169147758739982551.png"></image>
                            <view class="">酒店</view>
                        </view>
                        <image mode class="r" src="https://eshopfile.zhiyousx.com/2022082411212199760.png"></image>
                    </view>
                    <view class="list-box">
                        <view class="item" v-for="(item, index) in hotelHotSpot">
                            <image class="cover" mode="aspectFill" :src="item.picUrl"></image>
                            <view class="name singleLineText">{{item.name}}</view>
                            <view class="info" v-if="item.showPrice">
                                <text class="red">{{'￥'+item.showPrice}}</text>起</view>
                        </view>
                    </view>
                </view>
                <view class="box2" v-if="$root.g15>0">
                    <view class="title-box" @click="viewMore('美食')">
                        <view class="l">
                            <image mode class="" src="https://eshopfile.zhiyousx.com/169147760604071544.png"></image>
                            <view class="">美食</view>
                        </view>
                        <image mode class="r" src="https://eshopfile.zhiyousx.com/2022082411212199760.png"></image>
                    </view>
                    <view class="list-box">
                        <view class="item" v-for="(item, index) in restaurantHotSpot">
                            <image class="cover" mode="aspectFill" :src="item.picUrl"></image>
                            <view class="name singleLineText">{{item.name}}</view>
                            <view class="info" v-if="item.showPrice">
                                <text class="red">{{'￥'+item.showPrice}}</text>起</view>
                        </view>
                    </view>
                </view>
                <view class="box2" v-if="$root.g16>0">
                    <view class="title-box" @click="viewMore('玩乐')">
                        <view class="l">
                            <image mode class="" src="https://eshopfile.zhiyousx.com/169147762167728856.png"></image>
                            <view class="">玩乐</view>
                        </view>
                        <image mode class="r" src="https://eshopfile.zhiyousx.com/2022082411212199760.png"></image>
                    </view>
                    <view class="list-box">
                        <view class="item" v-for="(item, index) in entertainmentHotSpot">
                            <image class="cover" mode="aspectFill" :src="item.picUrl"></image>
                            <view class="name singleLineText">{{item.name}}</view>
                            <view class="info" v-if="item.showPrice">
                                <text class="red">{{'￥'+item.showPrice}}</text>起</view>
                        </view>
                    </view>
                </view>
                <view class="box2" v-if="$root.g17>0">
                    <view class="title-box" @click="viewMore('商品')">
                        <view class="l">
                            <image mode class="" src="https://eshopfile.zhiyousx.com/169147763792934192.png"></image>
                            <view class="">
                                <block v-if="searchResultType==1">热销商品</block>
                                <block v-else>商品</block>
                            </view>
                        </view>
                        <image mode class="r" src="https://eshopfile.zhiyousx.com/2022082411212199760.png"></image>
                    </view>
                    <view class="list-box">
                        <view class="item" v-for="(item, index) in pageItemArr">
                            <image class="cover" mode="aspectFill" :src="item.defaultPicUrl"></image>
                            <view class="name singleLineText">{{item.itemTitle}}</view>
                            <view class="info">
                                <text class="red">{{'￥'+item.minPrice}}</text>起</view>
                        </view>
                    </view>
                </view>
                <view class="box2" v-if="$root.g18>0">
                    <view class="title-box" @click="viewMore('店铺')">
                        <view class="l">
                            <image mode class="" src="https://eshopfile.zhiyousx.com/172230747987402808.png"></image>
                            <view class="">店铺</view>
                        </view>
                        <image mode class="r" src="https://eshopfile.zhiyousx.com/2022082411212199760.png"></image>
                    </view>
                    <view class="list-box">
                        <view class="item" :key="index" v-for="(item, index) in travelAgencyArr">
                            <image class="cover" mode="aspectFill" :src="item.logo"></image>
                            <view class="name travelAgency singleLineText">{{item.travelAgencyName}}</view>
                            <view class="info singleLineText" v-if="item.firmName">{{item.firmName}}</view>
                        </view>
                    </view>
                </view>
            </view>
            <scroll-view class="tab2" :scrollY="true" v-if="resultTab=='景区'" @scrolltolower="scrollToBottomFn($event)">
                <view class="box1" v-for="(item, index) in hotSpotResultArr">
                    <view class="l">
                        <image class="" mode="aspectFill" :src="item.picUrl"></image>
                    </view>
                    <view class="r">
                        <view class="name singleLineText">{{item.name}}</view>
                        <view class="sub-name" v-if="item.tag">{{item.tag}}</view>
                        <view class="line3">
                            <block v-if="item.distance">{{'距您'+item.distance+'km'}}</block>
                            <text class="" v-if="item.distance&&item.cityName">|</text>{{ (item.cityName||'') }}</view>
                        <view class="info" v-if="item.showPrice">
                            <text class="red">{{'￥'+item.showPrice}}</text>起</view>
                    </view>
                </view>
            </scroll-view>
            <scroll-view class="tab2" :scrollY="true" v-if="resultTab=='线路'" @scrolltolower="scrollToBottomFn($event)">
                <view class="box1 lineBox" v-for="(item, index) in $root.l3">
                    <view class="pic-box">
                        <image class="left" mode="aspectFill" :src="item.productUrl"></image>
                        <view class="icon">{{item.productType}}</view>
                        <view class="city" v-if="item.cityName">
                            <image class="cityicon" mode="widthFix" src="/static/captured/b783dbfada461ad4.png"></image>
                            <text class="">{{item.g19[0]+'出发'}}</text>
                        </view>
                    </view>
                    <view class="right">
                        <view class="nameTagsBox">
                            <view class="name multilineText2">{{item.productName+''}}</view>
                            <view class="lineHighlightLabel singleLineText" v-if="item.lineHighlightLabelList">
                                <text class="it" :key="num" v-for="(li, num) in item.l2">{{ li+(num===li.g20-1?'':'/') }}</text>
                            </view>
                            <view class="tips">
                                <view class="it" v-if="item.lineTagList&&item.lineTagList[0]" :key="num" v-for="(li, num) in item.lineTagList">{{li}}</view>
                            </view>
                        </view>
                        <view class="bottom">
                            <view class="price">{{'￥'+item.price+''}}<text class="up" v-if="item.startPriceFlag">起</text>
                                <text class="line-through" v-if="item.retailPrice&&item.retailPrice>item.price">{{'￥'+item.retailPrice}}</text>
                            </view>
                            <view class="hasSell">
                                <text class="" v-if="item.saleNum">{{'已有'+item.f2+' 人出行'}}</text>
                            </view>
                        </view>
                    </view>
                </view>
            </scroll-view>
            <scroll-view class="tab2" :scrollY="true" v-if="resultTab=='酒店'" @scrolltolower="scrollToBottomFn($event)">
                <view class="box1" v-for="(item, index) in hotSpotResultArr">
                    <view class="l">
                        <image class="" mode="aspectFill" :src="item.picUrl"></image>
                    </view>
                    <view class="r">
                        <view class="name singleLineText">{{item.name}}</view>
                        <view class="sub-name" v-if="item.tag">{{item.tag}}</view>
                        <view class="line3">
                            <block v-if="item.distance">{{'距您'+item.distance+'km'}}</block>
                            <text class="" v-if="item.distance&&item.cityName">|</text>{{ (item.cityName||'') }}</view>
                        <view class="info" v-if="item.showPrice">
                            <text class="red">{{'￥'+item.showPrice}}</text>起</view>
                    </view>
                </view>
            </scroll-view>
            <scroll-view class="tab2" :scrollY="true" v-if="resultTab=='美食'" @scrolltolower="scrollToBottomFn($event)">
                <view class="box1" v-for="(item, index) in hotSpotResultArr">
                    <view class="l">
                        <image class="" mode="aspectFill" :src="item.picUrl"></image>
                    </view>
                    <view class="r">
                        <view class="name singleLineText">{{item.name}}</view>
                        <view class="sub-name" v-if="item.tag">{{item.tag}}</view>
                        <view class="line3">
                            <block v-if="item.distance">{{'距您'+item.distance+'km'}}</block>
                            <text class="" v-if="item.distance&&item.cityName">|</text>{{ (item.cityName||'') }}</view>
                        <view class="info" v-if="item.showPrice">
                            <text class="red">{{'￥'+item.showPrice}}</text>起</view>
                    </view>
                </view>
            </scroll-view>
            <scroll-view class="tab2" :scrollY="true" v-if="resultTab=='玩乐'" @scrolltolower="scrollToBottomFn($event)">
                <view class="box1" v-for="(item, index) in hotSpotResultArr">
                    <view class="l">
                        <image class="" mode="aspectFill" :src="item.picUrl"></image>
                    </view>
                    <view class="r">
                        <view class="name singleLineText">{{item.name}}</view>
                        <view class="sub-name" v-if="item.tag">{{item.tag}}</view>
                        <view class="line3">
                            <block v-if="item.distance">{{'距您'+item.distance+'km'}}</block>
                            <text class="" v-if="item.distance&&item.cityName">|</text>{{ (item.cityName||'') }}</view>
                        <view class="info" v-if="item.showPrice">
                            <text class="red">{{'￥'+item.showPrice}}</text>起</view>
                    </view>
                </view>
            </scroll-view>
            <scroll-view class="tab2" :scrollY="true" v-if="resultTab=='商品'" @scrolltolower="scrollToBottomFn($event)">
                <view class="box1" v-for="(item, index) in goodsResultArr">
                    <view class="l">
                        <image class="" mode="aspectFill" :src="item.defaultPicUrl"></image>
                    </view>
                    <view class="r">
                        <view class="name singleLineText">{{item.itemTitle}}</view>
                        <view class="sub-name" v-if="item.itemSubTitle">{{item.itemSubTitle}}</view>
                        <view class="yh-box">
                            <block v-if="index<2" v-for="(huoDongObj, index) in item.huoDongArr">
                                <image class="miao-sha" src="https://eshopfile.zhiyousx.com/2021091318044528261.png" v-if="huoDongObj.type=='秒杀'"></image>
                                <text class="itemRuter" v-if="huoDongObj.type=='优惠券'">
                                    <block v-if="item.couponFullAmount==0">{{'领券减'+item.couponAmount}}</block>
                                    <block v-else>{{'满'+item.couponFullAmount+'减'+item.couponAmount}}</block>
                                </text>
                                <text class="itemRuter" v-if="huoDongObj.type=='分享赚'&&userInfo&&userInfo.isFenxiao">{{'分享赚￥'+item.maxReward}}</text>
                            </block>
                        </view>
                        <view class="info">
                            <text class="red">{{'￥'+item.minPrice}}</text>起</view>
                    </view>
                </view>
            </scroll-view>
            <scroll-view class="tab2" :scrollY="true" v-if="resultTab=='店铺'" @scrolltolower="scrollToBottomFn($event)">
                <view class="box1" :key="index" v-for="(item, index) in travelAgencyResultArr">
                    <view class="l">
                        <image class="" mode="aspectFill" :src="item.logo"></image>
                    </view>
                    <view class="r">
                        <view class="name singleLineText">{{item.travelAgencyName}}</view>
                        <view class="sub-name singleLineText" v-if="item.firmName">{{item.firmName}}</view>
                    </view>
                </view>
            </scroll-view>
        </view>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          data: function() {
            return {
              keyword: "",
              searchKeyDefault: {},
              oldKeywordList: [],
              searchKeyList: [],
              pageHotSpotArr: [],
              restaurantHotSpot: [],
              hotelHotSpot: [],
              entertainmentHotSpot: [],
              goIndex: "",
              pageItemArr: [],
              travelAgencyArr: [],
              lineProductList: [],
              hotSpotResultArr: [],
              goodsResultArr: [],
              travelAgencyResultArr: [],
              lineProductResultArr: [],
              cityObj: {},
              resultTab: "",
              searchResultType: "",
              showPage1: !0,
              showPage2: !1,
              showPage3: !1,
              sellerId: "",
              couponId: "",
              quota: "",
              threshold: "",
              isMyStore: ""
            }
          },
          onLoad: function(t) {
            t.sellerId && (this.sellerId = t.sellerId), t.couponId && (this.couponId = t.couponId), t.default && (this.searchKeyDefault.searchKey = t.default), t.threshold && (this.threshold = t.threshold), t.quota && (this.quota = t.quota), t.isMyStore && (this.isMyStore = t.isMyStore), this.init()
          },
          onShow: function() {},
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          methods: {
            tofind: function() {
              this.$navigateTo({
                url: "/pages/spotDetailNew/spotDetailNew?type=find"
              })
            },
            init: function() {
              this._currentPage = 1, this._totalPage = 0, this.loadOldKeyword(), this.getRecommendData()
            },
            loadOldKeyword: function() {
              var e = this;
              t.getStorage({
                key: "searchHistory",
                success: function(t) {
                  var a = JSON.parse(t.data);
                  e.oldKeywordList = a
                }
              })
            },
            oldDelete: function() {
              var e = this;
              uni.showModal({
                content: "确定清除历史搜索记录？",
                success: function(a) {
                  a.confirm && (e.oldKeywordList = [], t.removeStorage({
                    key: "searchHistory"
                  }))
                }
              })
            },
            changeFn: function() {
              var t = this;
              if (!this._isSearchAction) {
                if (!this.keyword) return this.showPage1 = !0, this.showPage2 = !1, this.showPage3 = !1, this.pageHotSpotArr = [], this.restaurantHotSpot = [], this.hotelHotSpo = [], this.entertainmentHotSpot = [], this.pageItemArr = [], this.travelAgencyArr = [], this.lineProductList = [], this.cityObj = {}, void clearTimeout(this._timer);
                this._timer && clearTimeout(this._timer), this._timer = setTimeout((function() {
                  t.getAssociate("联想")
                }), 500)
              }
            },
            doSearch: function() {
              if (this.keyword || this.searchKeyDefault.searchKey) return !this.keyword && this.searchKeyDefault.searchKey ? (this.searchKeyDefault.isDefaultSearchKey = !0, this.saveKeyword(this.searchKeyDefault), this.keyword = this.searchKeyDefault.searchKey, void this.getAssociate("搜索")) : void this.getAssociate("搜索");
              this.$uni.showToast("搜索内容不能为空")
            },
            getAssociate: function(e) {
              var a = this,
                i = uni.getStorageSync("location") || {};
              this.$uniApi.dataRequestNoLoading("get", "product/app/v1/item/getAssociationBySearchKey", {
                latitude: i.latitude || "",
                longitude: i.longitude || "",
                searchKey: this.keyword,
                isMyStore: this.isMyStore
              }).then((function(t) {
                if (a._isSearchAction = !1, !(t.data.pageHotSpotVO || t.data.lineProductList || t.data.pageItemSpecialtyVO || t.data.entertainmentHotSpot || t.data.hotelHotSpot || t.data.restaurantHotSpot || t.data.pageTravelAgencyVO)) return "搜索" == e && a.$uni.showToast("暂无搜索结果"), a.showPage1 = !0, a.showPage2 = !1, void(a.showPage3 = !1);
                if (a.showPage1 = !1, a.showPage2 = "联想" == e, a.showPage3 = "搜索" == e, a.searchResultType = t.data.jumpType, "搜索" == e && (a.resultTab = "全部", a.saveKeyword(t.data, e)), t.data.pageHotSpotVO ? a.pageHotSpotArr = t.data.pageHotSpotVO.hotSpotVOList : a.pageHotSpotArr = [], t.data.entertainmentHotSpot ? a.entertainmentHotSpot = t.data.entertainmentHotSpot.hotSpotVOList : a.entertainmentHotSpot = [], t.data.restaurantHotSpot ? a.restaurantHotSpot = t.data.restaurantHotSpot.hotSpotVOList : a.restaurantHotSpot = [], t.data.hotelHotSpot ? a.hotelHotSpot = t.data.hotelHotSpot.hotSpotVOList : a.hotelHotSpot = [], t.data.pageItemSpecialtyVO) {
                  var i = a.getHuoDongFlag(t.data.pageItemSpecialtyVO.itemSpecialtyVOList);
                  a.pageItemArr = i
                } else a.pageItemArr = [];
                t.data.pageTravelAgencyVO ? a.travelAgencyArr = t.data.pageTravelAgencyVO.data : a.travelAgencyArr = [], t.data.lineProductList ? a.lineProductList = t.data.lineProductList.productLineVOList : a.lineProductList = [], a.cityObj = t.data.destinationCityVo || {}
              }))
            },
            recommendJump: function(t) {
              t.isDefaultSearchKey = !0, this.saveKeyword(t), this.jumpAll(t)
            },
            jumpAll: function(e) {
              0 === e.jumpType && e.externalLinkUrl ? (-1 != e.externalLinkUrl.indexOf("?") && (e.externalLinkUrl = e.externalLinkUrl.replace("?", "*"), e.externalLinkUrl = e.externalLinkUrl.replace("=", "+")), this.$navigateTo({
                url: "../webpage/webpage?url=".concat(e.externalLinkUrl)
              })) : 1 === e.jumpType ? 1 === e.interalLinkType ? this.$navigateTo({
                url: "/subPage/pages/goods_details/goods_details?itemId=".concat(e.interalLinkId)
              }) : 2 === e.interalLinkType ? this.$util.cityJump(e.contentType, e.interalLinkId) : 3 === e.interalLinkType ? this.$navigateTo({
                url: "/subPack/pages/city/city?cityId=".concat(e.interalLinkId)
              }) : 4 === e.interalLinkType || 7 === e.interalLinkType || 8 === e.interalLinkType || 9 === e.interalLinkType ? this.$navigateTo({
                url: "../spotDetail/spotDetail?spotId=".concat(e.interalLinkId)
              }) : 5 === e.interalLinkType && (this.keyword = e.interalLinkId, this._isSearchAction = !0, this.getAssociate("搜索")) : 2 === e.jumpType ? t.openEmbeddedMiniProgram({
                appId: e.appId,
                path: e.wechatUrl
              }) : 3 === e.jumpType && (uni.setStorageSync("richtext", e.richText), this.$navigateTo({
                url: "../richtext/richtext"
              }))
            },
            saveKeyword: function(e, a) {
              var i = this,
                o = {};
              e.isDefaultSearchKey && (o = {
                type: "默认词",
                name: e.searchKey,
                data: e
              }), "联想" === a && (1 == e.type ? o = {
                type: "景区",
                name: e.name,
                itemId: e.id
              } : 2 == e.type ? o = {
                type: "美食",
                name: e.name,
                itemId: e.id
              } : 3 == e.type ? o = {
                type: "酒店",
                name: e.name,
                itemId: e.id
              } : 4 == e.type && (o = {
                type: "玩乐",
                name: e.name,
                itemId: e.id
              }), e.hasOwnProperty("itemTitle") && (o = {
                type: "商品",
                name: e.itemTitle,
                itemId: e.itemId
              }), o.operationType = "联想"), "搜索" === a && (o.name = this.keyword, o.operationType = "搜索"), t.getStorage({
                key: "searchHistory",
                success: function(e) {
                  var a = JSON.parse(e.data),
                    s = a.findIndex((function(t) {
                      return t.name === o.name
                    })); - 1 == s || a.splice(s, 1), a.unshift(o), a.length > 10 && a.pop(), t.setStorage({
                    key: "searchHistory",
                    data: JSON.stringify(a)
                  }), i.oldKeywordList = a
                },
                fail: function(e) {
                  var a = [o];
                  t.setStorage({
                    key: "searchHistory",
                    data: JSON.stringify(a)
                  }), i.oldKeywordList = a
                }
              })
            },
            historySearch: function(t) {
              if ("默认词" != t.type) return "搜索" === t.operationType ? (this._isSearchAction = !0, this.keyword = t.name, this.showPage1 = !1, this.showPage2 = !1, this.showPage3 = !0, void this.getAssociate("搜索")) : void("联想" === t.operationType && ("商品" == t.type ? this.$navigateTo({
                url: "/subPage/pages/goods_details/goods_details?itemId=" + t.itemId
              }) : this.$navigateTo({
                url: "../spotDetail/spotDetail?spotId=" + t.itemId
              })));
              this.jumpAll(t.data)
            },
            getRecommendData: function() {
              var t = this;
              this.$uniApi.getRequestNoLoading("GET", "product/app/v1/searchKey/searchKeyAndDefaultKey").then((function(e) {
                t.searchKeyList = e.data.searchKeyList
              }))
            },
            jumpDetailPage: function(t, e, a) {
              "联想" === a && this.saveKeyword(e, "联想"), "商品" == t ? this.$navigateTo({
                url: "/subPage/pages/goods_details/goods_details?itemId=" + e.itemId
              }) : "店铺" == t ? this.$navigateTo({
                url: "/subPack/pages/travelAgency/travelAgency?travelAgencyId=" + e.travelAgencyId
              }) : "线路" == t ? this.$navigateTo({
                url: "/subPack/pages/lineProductDetails/lineProductDetails?productId=" + e.productId
              }) : this.$navigateTo({
                url: "../spotDetail/spotDetail?spotId=" + e.id + "&type=" + e.type
              })
            },
            jumpcity: function(t) {
              this.$navigateTo({
                url: "/subPack/pages/city/city?cityId=".concat(t)
              })
            },
            viewMore: function(t) {
              this.showPage1 = !1, this.showPage2 = !1, this.showPage3 = !0, this._currentPage = 1, this._totalPage = 0, this.resultTab = t, "景区" == t ? (this.hotSpotResultArr = [], this.getAssociationHotSpot(1)) : "线路" == t ? (this.lineProductResultArr = [], this.getLineProduct()) : "美食" == t ? (this.goIndex = "food", this.hotSpotResultArr = [], this.getAssociationHotSpot(2)) : "酒店" == t ? (this.hotSpotResultArr = [], this.getAssociationHotSpot(3)) : "玩乐" == t ? (this.goIndex = "relax", this.hotSpotResultArr = [], this.getAssociationHotSpot(4)) : "商品" == t ? (this.goIndex = "commdity", this.goodsResultArr = [], this.getItemSpecialty()) : "店铺" == t && (this.goIndex = "travelAgency", this.travelAgencyResultArr = [], this.getTravelAgency())
            },
            getItemSpecialty: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("get", "product/app/v1/item/getItemSpecialty", {
                searchKey: this.keyword,
                current: this._currentPage
              }).then((function(e) {
                if (t._totalPage = Math.ceil(e.data.total / e.data.size), 0 != t._totalPage) {
                  var a = t.getHuoDongFlag(e.data.itemSpecialtyVOList);
                  t.goodsResultArr = t.goodsResultArr.concat(a), t._currentPage++
                } else t.$uni.showToast("暂无商品")
              }))
            },
            getLineProduct: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("get", "product/app/v1/item/searchLineProduct", {
                searchKey: this.keyword,
                current: this._currentPage
              }).then((function(e) {
                t._totalPage = Math.ceil(e.data.total / e.data.size), 0 != t._totalPage ? (console.log(e.data.data), t.lineProductResultArr = t.lineProductResultArr.concat(e.data.productLineVOList), t._currentPage++) : t.$uni.showToast("暂无线路产品")
              }))
            },
            getTravelAgency: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("get", "product/app/v1/item/getTravelAgency", {
                searchKey: this.keyword,
                current: this._currentPage
              }).then((function(e) {
                t._totalPage = Math.ceil(e.data.total / e.data.size), 0 != t._totalPage ? (console.log(e.data.data), t.travelAgencyResultArr = t.travelAgencyResultArr.concat(e.data.data), t._currentPage++) : t.$uni.showToast("暂无商品")
              }))
            },
            getHuoDongFlag: function(t) {
              return t.forEach((function(t) {
                var e = [];
                0 == t.seckillActivity && e.push({
                  type: "秒杀"
                }), 1 == t.couponFlag && e.push({
                  type: "优惠券"
                }), t.maxReward && 0 != t.maxReward && e.push({
                  type: "分享赚"
                }), t.huoDongArr = e
              })), t
            },
            getAssociationHotSpot: function(e) {
              var a = this,
                i = uni.getStorageSync("location") || {};
              this.$uniApi.dataRequestNoLoading("get", "base/app/v1/scenicSpot/getAssociationHotSpot", {
                latitude: i.latitude || "",
                longitude: i.longitude || "",
                searchKey: this.keyword,
                current: this._currentPage,
                type: e
              }).then((function(t) {
                a._totalPage = Math.ceil(t.data.total / t.data.size), 0 != a._totalPage ? (a.hotSpotResultArr = a.hotSpotResultArr.concat(t.data.hotSpotVOList), a._currentPage++) : a.$uni.showToast("暂无景区")
              }))
            },
            scrollToBottomFn: function() {
              this._currentPage <= this._totalPage && ("景区" == this.resultTab ? this.getAssociationHotSpot(1) : "美食" == this.resultTab ? this.getAssociationHotSpot(2) : "酒店" == this.resultTab ? this.getAssociationHotSpot(3) : "玩乐" == this.resultTab ? this.getAssociationHotSpot(4) : "商品" == this.resultTab ? this.getItemSpecialty() : "店铺" == this.resultTab ? this.getTravelAgency() : "线路" == this.resultTab && this.getLineProduct())
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.bg-box{background-color:#fff;box-sizing:border-box;height:100vh;line-height:1;padding-top:20rpx}.search-box{padding:0 32rpx}.huatong{background:url('https://eshopfile.zhiyousx.com/2022022111592364759.png')50%no-repeat;background-size:100% 100%;bottom:150rpx;height:122rpx;left:50%;margin-left:-45rpx;position:absolute;width:90rpx}.huatong .c{display:-webkit-flex;display:flex;height:100%;justify-content:center;position:relative;width:100%}.huatong .c image{height:50rpx;margin-top:20rpx;width:50rpx}.page1 .keyword-block{padding:40rpx 40rpx 0}.page1 .keyword-block .keyword-list-header{display:-webkit-flex;display:flex;justify-content:space-between;padding:20rpx 0 24rpx}.page1 .keyword-block .keyword-list-header .kt{color:#333;font-size:34rpx}.page1 .keyword-block .keyword-list-header image{height:32rpx;width:32rpx}.page1 .keyword-block .keyword{display:-webkit-flex;display:flex;flex-flow:wrap;height:136rpx;justify-content:flex-start;overflow:hidden}.page1 .keyword-block .keyword>view{background:#f2f2f2;border-radius:28rpx;color:rgba(60,60,67,.6);font-size:28rpx;height:56rpx;line-height:56rpx;margin-bottom:20rpx;margin-right:20rpx;padding:0 26rpx;text-align:center}.page1 .recommend-box{padding:40rpx}.page1 .recommend-box .keyword-list-header{display:-webkit-flex;display:flex;justify-content:space-between;padding:20rpx 0 24rpx}.page1 .recommend-box .keyword-list-header .kt{color:#333;font-size:34rpx}.page1 .recommend-box .keyword-list-header image{height:32rpx;width:32rpx}.page1 .recommend-box .keyword{display:-webkit-flex;display:flex;flex-flow:wrap;height:136rpx;justify-content:flex-start;overflow:hidden}.page1 .recommend-box .keyword>view{background:#fff6f4;border-radius:28rpx;color:#888;font-size:26rpx;height:55rpx;line-height:55rpx;margin-bottom:20rpx;margin-right:20rpx;padding:0 26rpx;text-align:center}.page2{box-sizing:border-box;height:calc(100vh - 90rpx);overflow-y:auto;padding:40rpx 32rpx}.page2 .noTy{color:#8e8e8e;font-size:34rpx;line-height:44rpx;margin-bottom:100rpx;margin-top:40rpx;text-align:center}.page2 .tyIn{color:#333;font-size:34rpx;line-height:44rpx;margin-bottom:24rpx}.page2 .box1{display:-webkit-flex;display:flex;justify-content:space-between;margin-bottom:60rpx}.page2 .box1>.l{height:220rpx;width:220rpx}.page2 .box1>.l image{background:#a49696;border-radius:20rpx;height:100%;width:100%}.page2 .box1>.r{width:443rpx}.page2 .box1>.r .name{color:#333;font-size:34rpx;line-height:44rpx;padding:12rpx 0 20rpx}.page2 .box1>.r .flag{border-radius:2rpx 22rpx 22rpx 22rpx;color:#fff;display:inline-block;font-size:24rpx;line-height:44rpx;margin-bottom:44rpx;padding:0 22rpx;text-align:center}.page2 .box1>.r .flag.city{background:#e74a4b}.page2 .box1>.r .flag.spot{background:#38c2aa}.page2 .box1>.r .flag.food{background:#fab400}.page2 .box1>.r .flag.hotel{background:#1f777b}.page2 .box1>.r .flag.restaurant{background:#e64b49}.page2 .box1>.r .flag.play{background:#8cc07a}.page2 .box1>.r .flag.goods{background:#eaab3a}.page2 .box1>.r .flag.travelAgency{background:#e8b091}.page2 .box1>.r .flag.lineProduct{background:#e0836e}.page2 .box1>.r .info{color:#7a7a7a;font-size:24rpx}.page2 .box1>.r .info .red{color:#ff5550;font-size:32rpx}.page2 .box2{margin-bottom:40rpx}.page2 .box2 .title-box{justify-content:space-between;margin-bottom:24rpx}.page2 .box2 .title-box>.l,.page2 .box2 .title-box{align-items:center;display:-webkit-flex;display:flex}.page2 .box2 .title-box>.l image{height:32rpx;margin-right:12rpx;width:32rpx}.page2 .box2 .title-box>.l>view{color:#333;font-size:30rpx}.page2 .box2 .title-box>.l>view .red{color:#ff3709}.page2 .box2 .title-box>.r{height:30rpx;width:16rpx}.page2 .box2 .list-box{padding-left:54rpx}.page2 .box2 .list-box .item{align-items:center;display:-webkit-flex;display:flex;height:40rpx;justify-content:space-between;margin-bottom:24rpx}.page2 .box2 .list-box .item>view{color:rgba(60,60,67,.7);font-size:28rpx}.page2 .box2 .list-box .item>.l{width:364rpx}.page3 .nav-box{margin-left:32rpx;padding:40rpx 32rpx 56rpx 0rpx;white-space:nowrap;width:718rpx}.page3 .nav-box .u-tab-item{color:#333;display:inline-block;font-size:34rpx;font-weight:700;height:48rpx;padding-right:54rpx;position:relative;text-align:center;width:123.6rpx}.page3 .nav-box .u-tab-item .u-line-1{position:relative;z-index:2}.page3 .nav-box .u-tab-item:last-of-type{margin-right:0}.page3 .nav-box .u-tab-item-active::before{background:linear-gradient(52deg,#fc4a7c,#ff5411);border-radius:7rpx;bottom:6rpx;content:"";height:14rpx;left:0;position:absolute;width:69.6rpx;z-index:1}.page3 .tab-box{height:calc(100vh - 238rpx);overflow:hidden;overflow-y:auto}.page3 .tab-box .tab1 .box1{display:-webkit-flex;display:flex;justify-content:space-between;margin-bottom:60rpx;padding:0 32rpx}.page3 .tab-box .tab1 .box1>.l{height:220rpx;width:220rpx}.page3 .tab-box .tab1 .box1>.l image{background:#a49696;border-radius:16rpx;height:100%;width:100%}.page3 .tab-box .tab1 .box1>.r{width:442rpx}.page3 .tab-box .tab1 .box1>.r .name{color:#333;font-size:32rpx;padding:16rpx 0 20rpx}.page3 .tab-box .tab1 .box1>.r .sub-name{color:#7a7a7a;font-size:26rpx;margin-bottom:17rpx}.page3 .tab-box .tab1 .box1>.r .line3{color:#7c7c7c;font-size:22rpx;margin-bottom:35rpx}.page3 .tab-box .tab1 .box1>.r .line3 text{color:#7c7c7c;padding:0 15rpx}.page3 .tab-box .tab1 .box1>.r .yh-box{align-items:center;display:-webkit-flex;display:flex;margin-bottom:27rpx}.page3 .tab-box .tab1 .box1>.r .yh-box .itemRuter{background:#ffeeea;border-radius:6rpx;color:#ff2a39;font-size:20rpx;height:30rpx;line-height:30rpx;margin-right:10rpx;padding:0 8rpx}.page3 .tab-box .tab1 .box1>.r .yh-box .miao-sha{height:36rpx;margin-right:10rpx;width:98rpx}.page3 .tab-box .tab1 .box1>.r .info{color:#7a7a7a;font-size:24rpx}.page3 .tab-box .tab1 .box1>.r .info .red{color:#ff5550;font-size:32rpx}.page3 .tab-box .tab1 .lineBox{justify-content:flex-start}.page3 .tab-box .tab1 .lineBox .pic-box{border-radius:10rpx 20rpx 20rpx 20rpx;box-shadow:6rpx 0rpx 0rpx 0rpx rgba(0,0,0,.15),12rpx 0rpx 0rpx 0rpx rgba(0,0,0,.05);height:auto;max-width:208rpx;min-height:208rpx;position:relative;width:208rpx}.page3 .tab-box .tab1 .lineBox .pic-box image{border-radius:10rpx 20rpx 20rpx 20rpx;height:100%;width:100%}.page3 .tab-box .tab1 .lineBox .pic-box .icon{border-radius:10rpx 0rpx 10rpx 0rpx;color:#fff;font-size:24rpx;height:42rpx;left:0rpx;padding:0 12rpx;top:0rpx}.page3 .tab-box .tab1 .lineBox .pic-box .city,.page3 .tab-box .tab1 .lineBox .pic-box .icon{align-items:center;background:rgba(35,32,32,.5);display:-webkit-flex;display:flex;position:absolute}.page3 .tab-box .tab1 .lineBox .pic-box .city{border-radius:0rpx 0rpx 20rpx 20rpx;bottom:0rpx;justify-content:center;min-height:42rpx;width:208rpx}.page3 .tab-box .tab1 .lineBox .pic-box .city .cityicon{width:24rpx}.page3 .tab-box .tab1 .lineBox .pic-box .city text{color:#fff;font-size:24rpx;margin-left:6rpx}.page3 .tab-box .tab1 .lineBox .right{align-items:start;display:-webkit-flex;display:flex;flex-direction:column;justify-content:space-between;margin-left:20rpx;min-height:208rpx;width:450rpx}.page3 .tab-box .tab1 .lineBox .right .nameTagsBox .name{color:#1e1b19;font-family:Source Han Sans SC;font-size:28rpx;line-height:40rpx;width:450rpx}.page3 .tab-box .tab1 .lineBox .right .nameTagsBox .name .star-box{display:inline-block;height:38rpx;margin-left:10rpx;position:relative;width:40rpx}.page3 .tab-box .tab1 .lineBox .right .nameTagsBox .name .star-box .star{background:linear-gradient(51deg,#e8b091,#ffe7d0);border-radius:6rpx;color:#92322a;font-size:24rpx;height:38rpx;left:0;line-height:38rpx;position:absolute;text-align:center;top:8rpx;width:40rpx}.page3 .tab-box .tab1 .lineBox .right .nameTagsBox .rank{background:rgba(217,52,0,.1);border-radius:50rpx;color:#92322a;display:inline-block;font-size:22rpx;line-height:34rpx;margin-top:16rpx;padding:0rpx 20rpx}.page3 .tab-box .tab1 .lineBox .right .nameTagsBox .lineHighlightLabel{margin-top:8rpx;max-width:450rpx}.page3 .tab-box .tab1 .lineBox .right .nameTagsBox .lineHighlightLabel text{color:rgba(30,27,25,.4);font-size:22rpx;line-height:22rpx}.page3 .tab-box .tab1 .lineBox .right .nameTagsBox .tips{display:-webkit-flex;display:flex;flex-wrap:wrap;height:34rpx;margin-top:16rpx;overflow:hidden;width:450rpx}.page3 .tab-box .tab1 .lineBox .right .nameTagsBox .tips .it,.page3 .tab-box .tab1 .lineBox .right .nameTagsBox .tips .singleTip{border:1rpx solid rgba(30,27,25,.2);border-radius:40rpx;color:#92322a;font-size:22rpx;height:34rpx;line-height:32rpx;margin-right:10rpx;padding:0 20rpx}.page3 .tab-box .tab1 .lineBox .right .nameTagsBox .tips .singleTip{display:inline-block}.page3 .tab-box .tab1 .lineBox .right .bottom{align-items:flex-end;display:-webkit-flex;display:flex;height:46rpx;justify-content:space-between;margin-top:10rpx;width:450rpx}.page3 .tab-box .tab1 .lineBox .right .bottom .price{align-items:flex-end;color:#ff5411;display:-webkit-flex;display:flex;font-size:32rpx;line-height:32rpx}.page3 .tab-box .tab1 .lineBox .right .bottom .price .up{color:rgba(30,27,25,.4);font-size:24rpx;line-height:24rpx;margin-left:4rpx}.page3 .tab-box .tab1 .lineBox .right .bottom .price .line-through{color:rgba(30,27,25,.4);font-size:32rpx;line-height:1;margin-left:4rpx;text-decoration:line-through}.page3 .tab-box .tab1 .lineBox .right .bottom .hasSell text{color:rgba(30,27,25,.4);font-size:24rpx}.page3 .tab-box .tab1 .box2{margin-bottom:60rpx}.page3 .tab-box .tab1 .box2 .title-box{justify-content:space-between;padding:0 32rpx 25rpx}.page3 .tab-box .tab1 .box2 .title-box>.l,.page3 .tab-box .tab1 .box2 .title-box{align-items:center;display:-webkit-flex;display:flex}.page3 .tab-box .tab1 .box2 .title-box>.l image{height:32rpx;margin-right:12rpx;width:32rpx}.page3 .tab-box .tab1 .box2 .title-box>.l>view{color:#333;font-size:28rpx}.page3 .tab-box .tab1 .box2 .title-box>.l>view .red{color:#ff3709}.page3 .tab-box .tab1 .box2 .title-box>.r{height:30rpx;width:16rpx}.page3 .tab-box .tab1 .box2 .list-box{overflow-x:auto;overflow-y:hidden;padding-left:32rpx;white-space:nowrap}.page3 .tab-box .tab1 .box2 .list-box .item{display:inline-block;margin-right:20rpx;vertical-align:top;width:280rpx}.page3 .tab-box .tab1 .box2 .list-box .item .cover{background-color:#aaa;border-radius:20rpx;height:220rpx;margin-bottom:20rpx;width:280rpx}.page3 .tab-box .tab1 .box2 .list-box .item .name{color:#333;font-size:26rpx;line-height:44rpx;margin-bottom:24rpx}.page3 .tab-box .tab1 .box2 .list-box .item .travelAgency{margin-bottom:8rpx}.page3 .tab-box .tab1 .box2 .list-box .item .info{color:#7a7a7a;font-size:24rpx}.page3 .tab-box .tab1 .box2 .list-box .item .info .red{color:#ff2a39;font-size:34rpx}.page3 .tab-box .tab1 .box2 .list-box .spot{background:#fff;border-radius:20rpx 20rpx 20rpx 20rpx;box-shadow:0rpx 4rpx 10rpx 0rpx rgba(35,32,32,.2);display:inline-block;height:332rpx;margin-right:20rpx;position:relative;width:250rpx}.page3 .tab-box .tab1 .box2 .list-box .spot .typeIcon{align-items:center;background:rgba(35,32,32,.5);border-top-left-radius:20rpx;color:#fff;display:-webkit-flex;display:flex;font-size:24rpx;height:42rpx;justify-content:center;left:0;padding:4rpx 10rpx;position:absolute;top:0;z-index:998}.page3 .tab-box .tab1 .box2 .list-box .spot .imgBox{height:208rpx;position:relative}.page3 .tab-box .tab1 .box2 .list-box .spot .imgBox image{border-top-left-radius:20rpx;height:100%;width:100%}.page3 .tab-box .tab1 .box2 .list-box .spot .imgBox .city{align-items:center;background:rgba(35,32,32,.5);bottom:0;display:-webkit-flex;display:flex;justify-content:center;left:0;min-height:42rpx;position:absolute;width:100%}.page3 .tab-box .tab1 .box2 .list-box .spot .imgBox .city .icon{width:24rpx}.page3 .tab-box .tab1 .box2 .list-box .spot .imgBox .city text{color:#fff;font-size:24rpx;margin-left:6rpx}.page3 .tab-box .tab1 .box2 .list-box .spot .textBox{display:-webkit-flex;display:flex;flex-direction:column;height:124rpx;justify-content:space-between;padding:4rpx 10rpx 0}.page3 .tab-box .tab1 .box2 .list-box .spot .textBox .title{align-items:center;display:-webkit-flex;display:flex}.page3 .tab-box .tab1 .box2 .list-box .spot .textBox .title .name{color:#1e1b19;font-size:26rpx;line-height:38rpx;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.page3 .tab-box .tab1 .box2 .list-box .spot .textBox .title .level{align-items:center;background:linear-gradient(51deg,#e8b091,#ffe7d0);border-radius:6rpx 6rpx 6rpx 6rpx;color:#92322a;display:-webkit-flex;display:flex;font-size:22rpx;height:32rpx;justify-content:center;margin-left:10rpx;width:46rpx}.page3 .tab-box .tab1 .box2 .list-box .spot .textBox .sold text{color:rgba(30,27,25,.4);font-size:22rpx;line-height:32rpx}.page3 .tab-box .tab1 .box2 .list-box .spot .textBox .bottom{align-items:flex-end;display:-webkit-flex;display:flex;height:28rpx;margin-bottom:14rpx}.page3 .tab-box .tab1 .box2 .list-box .spot .textBox .bottom .price{color:#fd6403;font-size:22rpx;line-height:22rpx}.page3 .tab-box .tab1 .box2 .list-box .spot .textBox .bottom text{color:rgba(30,27,25,.4);font-size:16rpx;line-height:16rpx}.page3 .tab-box .tab1 .box2 .list-box .spot .textBox .bottom .line-through{color:rgba(30,27,25,.4);font-size:22rpx;line-height:22rpx;line-height:1;margin-left:4rpx;text-decoration:line-through}.page3 .tab-box .tab1 .box2 .list-box .spot .textBox .bottom .coupon{align-items:center;background:#fd6403;border-radius:8rpx 8rpx 8rpx 4rpx;display:-webkit-flex;display:flex;height:28rpx;justify-content:center;margin-left:8rpx;padding:0 4rpx 0 8rpx}.page3 .tab-box .tab1 .box2 .list-box .spot .textBox .bottom .coupon text{align-items:center;color:#fff;font-size:20rpx;justify-content:center}.page3 .tab-box .tab1 .box2 .list-box .spot .textBox .bottom .coupon .couponAmount{align-items:center;background:#fff;border-radius:8rpx 8rpx 8rpx 4rpx;color:#fd6403;display:-webkit-flex;display:flex;font-size:16rpx;height:24rpx;justify-content:center;margin-left:4rpx;min-width:30rpx;padding:0 2rpx}.page3 .tab-box .tab1 .box2 .lineList{height:345rpx}.page3 .tab-box .tab2{height:100%}.page3 .tab-box .tab2 .box1{display:-webkit-flex;display:flex;justify-content:space-between;margin-bottom:40rpx;padding:0 40rpx}.page3 .tab-box .tab2 .box1>.l{height:200rpx;width:200rpx}.page3 .tab-box .tab2 .box1>.l image{background:#a49696;border-radius:20rpx;height:100%;width:100%}.page3 .tab-box .tab2 .box1>.r{width:443rpx}.page3 .tab-box .tab2 .box1>.r .name{color:#333;font-size:28rpx;padding:16rpx 0 20rpx}.page3 .tab-box .tab2 .box1>.r .sub-name{color:#7a7a7a;font-size:24rpx;margin-bottom:17rpx}.page3 .tab-box .tab2 .box1>.r .line3{color:#7c7c7c;font-size:22rpx;margin-bottom:36rpx}.page3 .tab-box .tab2 .box1>.r .line3 text{color:#7c7c7c;padding:0 15rpx}.page3 .tab-box .tab2 .box1>.r .yh-box{align-items:center;display:-webkit-flex;display:flex;margin-bottom:27rpx}.page3 .tab-box .tab2 .box1>.r .yh-box .itemRuter{background:#ffeeea;border-radius:6rpx;color:#ff531d;font-size:20rpx;height:30rpx;line-height:30rpx;margin-right:10rpx;padding:0 8rpx}.page3 .tab-box .tab2 .box1>.r .yh-box .miao-sha{height:36rpx;margin-right:10rpx;width:98rpx}.page3 .tab-box .tab2 .box1>.r .info{color:#7a7a7a;font-size:24rpx}.page3 .tab-box .tab2 .box1>.r .info .red{color:#ff5550;font-size:32rpx}.page3 .tab-box .tab2 .lineBox{justify-content:flex-start}.page3 .tab-box .tab2 .lineBox .pic-box{border-radius:10rpx 20rpx 20rpx 20rpx;box-shadow:6rpx 0rpx 0rpx 0rpx rgba(0,0,0,.15),12rpx 0rpx 0rpx 0rpx rgba(0,0,0,.05);height:auto;max-width:208rpx;min-height:208rpx;position:relative;width:208rpx}.page3 .tab-box .tab2 .lineBox .pic-box image{border-radius:10rpx 20rpx 20rpx 20rpx;height:100%;width:100%}.page3 .tab-box .tab2 .lineBox .pic-box .icon{border-radius:10rpx 0rpx 10rpx 0rpx;color:#fff;font-size:24rpx;height:42rpx;left:0rpx;padding:0 12rpx;top:0rpx}.page3 .tab-box .tab2 .lineBox .pic-box .city,.page3 .tab-box .tab2 .lineBox .pic-box .icon{align-items:center;background:rgba(35,32,32,.5);display:-webkit-flex;display:flex;position:absolute}.page3 .tab-box .tab2 .lineBox .pic-box .city{border-radius:0rpx 0rpx 20rpx 20rpx;bottom:0rpx;justify-content:center;min-height:42rpx;width:208rpx}.page3 .tab-box .tab2 .lineBox .pic-box .city .cityicon{width:24rpx}.page3 .tab-box .tab2 .lineBox .pic-box .city text{color:#fff;font-size:24rpx;margin-left:6rpx}.page3 .tab-box .tab2 .lineBox .right{align-items:start;display:-webkit-flex;display:flex;flex-direction:column;justify-content:space-between;margin-left:20rpx;min-height:208rpx;width:450rpx}.page3 .tab-box .tab2 .lineBox .right .nameTagsBox .name{color:#1e1b19;font-family:Source Han Sans SC;font-size:28rpx;line-height:40rpx;width:450rpx}.page3 .tab-box .tab2 .lineBox .right .nameTagsBox .name .star-box{display:inline-block;height:38rpx;margin-left:10rpx;position:relative;width:40rpx}.page3 .tab-box .tab2 .lineBox .right .nameTagsBox .name .star-box .star{background:linear-gradient(51deg,#e8b091,#ffe7d0);border-radius:6rpx;color:#92322a;font-size:24rpx;height:38rpx;left:0;line-height:38rpx;position:absolute;text-align:center;top:8rpx;width:40rpx}.page3 .tab-box .tab2 .lineBox .right .nameTagsBox .rank{background:rgba(217,52,0,.1);border-radius:50rpx;color:#92322a;display:inline-block;font-size:22rpx;line-height:34rpx;margin-top:16rpx;padding:0rpx 20rpx}.page3 .tab-box .tab2 .lineBox .right .nameTagsBox .lineHighlightLabel{margin-top:8rpx;max-width:450rpx}.page3 .tab-box .tab2 .lineBox .right .nameTagsBox .lineHighlightLabel text{color:rgba(30,27,25,.4);font-size:22rpx;line-height:22rpx}.page3 .tab-box .tab2 .lineBox .right .nameTagsBox .tips{display:-webkit-flex;display:flex;flex-wrap:wrap;height:34rpx;margin-top:16rpx;overflow:hidden;width:450rpx}.page3 .tab-box .tab2 .lineBox .right .nameTagsBox .tips .it,.page3 .tab-box .tab2 .lineBox .right .nameTagsBox .tips .singleTip{border:1rpx solid rgba(30,27,25,.2);border-radius:40rpx;color:#92322a;font-size:22rpx;height:34rpx;line-height:32rpx;margin-right:10rpx;padding:0 20rpx}.page3 .tab-box .tab2 .lineBox .right .nameTagsBox .tips .singleTip{display:inline-block}.page3 .tab-box .tab2 .lineBox .right .bottom{align-items:flex-end;display:-webkit-flex;display:flex;height:46rpx;justify-content:space-between;margin-top:10rpx;width:450rpx}.page3 .tab-box .tab2 .lineBox .right .bottom .price{align-items:flex-end;color:#ff5411;display:-webkit-flex;display:flex;font-size:32rpx;line-height:32rpx}.page3 .tab-box .tab2 .lineBox .right .bottom .price .up{color:rgba(30,27,25,.4);font-size:24rpx;line-height:24rpx;margin-left:4rpx}.page3 .tab-box .tab2 .lineBox .right .bottom .price .line-through{color:rgba(30,27,25,.4);font-size:32rpx;line-height:1;margin-left:4rpx;text-decoration:line-through}.page3 .tab-box .tab2 .lineBox .right .bottom .hasSell text{color:rgba(30,27,25,.4);font-size:24rpx}.page3 .tab-box .tab2 .lineDis{background:#eee!important}
</style>
