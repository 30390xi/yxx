<template>
<view class="addressBox">
    <view class="formBox">
        <u-form class=" vue-ref" ref="uForm" :errorType="errorType" :model="dataForm" :rules="rules" :vueSlots="['default']">
            <u-form-item class="" label="收货人" :labelStyle="{color:'#878787',fontSize:'28rpx'}" labelWidth="150" prop="contactPerson" :vueSlots="['default']">
                <u-input class="" :focus="true" maxlength="20" placeholder="请填写收货人姓名" :value="dataForm.contactPerson" @input="dataForm.contactPerson = $event"></u-input>
            </u-form-item>
            <u-form-item class="" label="手机号码" :labelStyle="{color:'#878787',fontSize:'28rpx'}" labelWidth="150" prop="contactMobile" :vueSlots="['default']">
                <u-input class="" maxlength="11" placeholder="请填写收货人手机号" type="number" :value="dataForm.contactMobile" @input="dataForm.contactMobile = $event"></u-input>
            </u-form-item>
            <u-form-item class="" label="所在地区" :labelStyle="{color:'#878787',fontSize:'28rpx'}" labelWidth="150" prop="addressLabel" :vueSlots="['default']">
                <ds-city class=" vue-ref" ref="dscity" :defaultRegion="defaultRegion" :value="cityStatus" @cityChange="cityChange()" @input="cityStatus = $event"></ds-city>
                <u-input class="" :disabled="true" placeholder="请选择" :value="dataForm.addressLabel" @click="cityPup()" @input="dataForm.addressLabel = $event"></u-input>
            </u-form-item>
            <u-form-item class="" label="详细地址" :labelStyle="{color:'#878787',fontSize:'28rpx'}" labelWidth="150" prop="addrStreet" :vueSlots="['default']">
                <u-input class="" height="40" placeholder="街道,门牌号等" type="textarea" :value="dataForm.addrStreet" @input="dataForm.addrStreet = $event"></u-input>
            </u-form-item>
            <view class="tabel">
                <view class="tit">地址标签</view>
                <view class="tabelbox">
                    <view class="tagList">
                        <view :class="['tabels','',tabelName===item?'select':'']" :key="index" v-for="(item, index) in tabellist">{{item}}</view>
                        <view class="tabels" v-if="!modalTag" @click="e0($event)">+</view>
                    </view>
                    <view class="tagsBox" v-if="modalTag">
                        <input :class="['tagsInput','',isEditor?'tagsInputeditor':'']" :disabled="isEditor" :focus="true" maxlength="5" placeholder="请填写标签名称,最多5个字" placeholderStyle="color:#C0C4CC" :value="dataForm.addrAlias" @input="dataForm.addrAlias = $event" @blur="$forceUpdate()"></input>
                        <button :class="['tagsBtn','',isEditor?'editorBtn':'']" @click="addTags($event)">{{isEditor?'编辑':'确定'}}</button>
                    </view>
                </view>
            </view>
            <u-form-item :borderBottom="false" class="" label="设为默认地址" :labelStyle="{color:'#878787',fontSize:'28rpx'}" labelWidth="200" prop="isDefault" :vueSlots="['right']">
                <switch :checked="dataForm.isDefault" class="" color="#FF4643" slot="right" @change="switchChange($event)"></switch>
            </u-form-item>
        </u-form>
    </view>
    <button class="loginSub" :disabled="loadingStatus" :loading="loadingStatus" @click="submit($event)">保存</button>
    <button class="registerSub" v-if="addrId" @click="delAddress($event)">删除地址</button>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
            data: function() {
              return {
                addrId: "",
                loadingStatus: !1,
                cityStatus: !1,
                defaultRegion: [],
                tabellist: ["家", "公司", "学校"],
                tabelName: "",
                modalTag: !1,
                isEditor: !1,
                dataForm: {
                  contactPerson: "",
                  contactMobile: "",
                  addressLabel: "",
                  addressVal: "",
                  addrStreet: "",
                  addrAlias: "",
                  isDefault: !1
                },
                rules: {
                  contactPerson: [{
                    required: !0,
                    message: "请填写收货人姓名",
                    trigger: ["blur", "change"]
                  }],
                  contactMobile: [{
                    required: !0,
                    message: "请填写收货人手机号",
                    trigger: ["change", "blur"]
                  }, {
                    validator: function(e, a, t) {
                      return (0, d.validatePhone)(a)
                    },
                    message: "手机号码不正确",
                    trigger: ["change", "blur"]
                  }],
                  addressLabel: [{
                    required: !0,
                    message: "请选择省市区",
                    trigger: ["change", "blur"]
                  }],
                  addrStreet: [{
                    required: !0,
                    message: "详细地址不能为空",
                    trigger: ["blur", "change"]
                  }]
                },
                errorType: ["toast"]
              }
            },
            computed: {
              userInfo: function() {
                return this.$store.getters.userInfor
              }
            },
            onLoad: function(e) {
              e.addrId && (this.addrId = e.addrId, this.getAddress())
            },
            onReady: function() {
              this.$refs.uForm.setRules(this.rules)
            },
            methods: {
              getAddress: function() {
                var e = this;
                this.$uniApi.getRequestNoLoading("GET", "manager/app/v1/memberDeliveryAddress/" + this.addrId).then((function(a) {
                  if (1 === a.code) {
                    var t = e.dataForm,
                      d = function(d) {
                        if ("addressLabel" === d) t[d] = a.data.addrRegion1Name + "-" + a.data.addrRegion2Name + "-" + a.data.addrRegion3Name, e.defaultRegion = t[d].split("-");
                        else if ("addressVal" === d) t[d] = a.data.addrRegion1Id + "-" + a.data.addrRegion2Id + "-" + a.data.addrRegion3Id;
                        else if ("isDefault" === d) 1 === a.data[d] ? t[d] = !0 : t[d] = !1;
                        else if ("addrAlias" === d) {
                          t[d] = "", e.tabelName = a.data[d], -1 == e.tabellist.findIndex((function(e) {
                            return e == a.data[d]
                          })) && (e.dataForm.addrAlias = a.data[d], e.addTags(), e.modalTag = !0)
                        } else t[d] = a.data[d]
                      };
                    for (var i in t) d(i);
                    e.dataForm = t
                  }
                })).catch((function(a) {
                  e.$uni.showToast(a.msg)
                }))
              },
              submit: function() {
                var e = this;
                this.$refs.uForm.validate((function(a) {
                  if (a) {
                    var t = e.dataForm,
                      d = {
                        memberId: e.userInfo.memberId
                      };
                    for (var i in t)
                      if ("addressLabel" === i) {
                        var n = t[i].split("-"),
                          r = t.addressVal.split("-");
                        d.addrRegion1Name = n[0], d.addrRegion2Name = n[1], d.addrRegion3Name = n[2], d.addrRegion1Id = r[0], d.addrRegion2Id = r[1], d.addrRegion3Id = r[2]
                      } else "addrAlias" === i ? t[i] ? d[i] = t[i] : e.tabelName && (d[i] = e.tabelName) : "isDefault" === i ? t[i] ? d[i] = 1 : d[i] = 0 : d[i] = t[i];
                    e.addrId && (d.addrId = e.addrId, e.loadingStatus = !0), e.$uniApi.dataRequestNoLoading(e.addrId ? "PUT" : "POST", "manager/app/v1/memberDeliveryAddress", d).then((function(a) {
                      e.loadingStatus = !1, 1 === a.code ? (e.$refs.uForm.resetFields(), e.$util.prevPage()) : e.$uni.showToast(a.data.msg)
                    })).catch((function(a) {
                      e.loadingStatus = !1, e.$uni.showToast(a.data.msg)
                    }))
                  }
                }))
              },
              delAddress: function() {
                var a = this;
                uni.showModal({
                  title: "删除",
                  content: "您确定删除吗？",
                  confirmColor: "#ff4643",
                  success: function(e) {
                    e.confirm && a.$uniApi.getRequestNoLoading("DELETE", "manager/app/v1/memberDeliveryAddress?ids=" + a.addrId).then((function(e) {
                      1 === e.code ? a.$util.prevPage() : a.$uni.showToast(e.data.msg)
                    })).catch((function(e) {
                      a.$uni.showToast(e.data.msg)
                    }))
                  }
                })
              },
              cityPup: function() {
                this.cityStatus = !0, this.addrId && this.$refs.dscity.init()
              },
              cityChange: function(e) {
                this.defaultRegion = [], this.dataForm.addressLabel = e.province.label + "-" + e.city.label + "-" + e.area.label, this.dataForm.addressVal = e.province.value + "-" + e.city.value + "-" + e.area.value
              },
              tabelfun: function(e) {
                this.tabelName = e, this.isEditor = !1, this.modalTag = !1, this.dataForm.addrAlias = ""
              },
              addTags: function() {
                this.dataForm.addrAlias && (this.tabelName = "", this.isEditor ? this.isEditor = !1 : this.isEditor = !0)
              },
              switchChange: function(e) {
                this.dataForm.isDefault = e.detail.value
              }
            }
          };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.formBox{background-color:#fff;padding:0 30rpx}.tagsBox{align-items:center;display:-webkit-flex;display:flex;margin-bottom:20rpx}.tagsBox .tagsInput{background-color:#f7f7f7;border-radius:50rpx;font-size:24rpx;height:50rpx;margin:0 20rpx;padding:0 20rpx;text-align:center}.tagsBox .tagsInputeditor{background-color:#ff4643;color:#fff;width:140rpx}.tagsBox .tagsBtn{background-color:#ff4643;color:#fff;font-size:26rpx;height:45rpx;line-height:45rpx;margin:0;padding:0;width:100rpx}.tagsBox .editorBtn{background-color:#f7f7f7;border-bottom:1rpx solid #e4e7ed;color:#333}.loginSub{background-image:linear-gradient(90deg,#ff4643,#f72724);border-radius:40rpx;color:#fff;letter-spacing:10rpx;margin-top:100rpx}.loginSub,.registerSub{font-size:32rpx;height:80rpx;line-height:80rpx;margin-left:7.5%;width:85%}.registerSub{border:1rpx solid #ff4643;border-radius:40rpx;color:#ff4643;margin-top:30rpx}.tabel{border-bottom:1rpx solid #e4e7ed;display:-webkit-flex;display:flex;padding-top:10rpx;width:100%}.tabel .tit{color:#878787;font-size:28rpx;padding-top:20rpx;width:150rpx}.tabel .tabelbox{flex:1;height:100%}.tabel .tabelbox .tagList{align-items:center;display:-webkit-flex;display:flex;flex-wrap:wrap}.tabel .tabelbox .tagList .tabels{background-color:#fff;border:1rpx solid #e0e0e0;border-radius:26rpx;font-size:28rpx;height:52rpx;line-height:48rpx;margin:15rpx;padding:0 35rpx}.tabel .tabelbox .tagList .select{background-color:#ff4643;border:1rpx solid #ff4643;color:#fff}
</style>
