<template>
<u-popup closeIconColor="#ffffff" :closeable="true" :mask="true" :maskCloseAble="maskCloseAble" mode="bottom" :popup="false" :safeAreaInsetBottom="true" :value="value" :vueSlots="['default']" :zIndex="uZIndex" @close="close()" @input="value = $event">
    <u-tabs activeColor="#ff4643" class="vue-ref" :current="tabsIndex" ref="tabs" :isScroll="true" :list="genTabsList" v-if="value" @change="tabsChange()"></u-tabs>
    <view class="area-box">
        <view :class="['u-flex',isChange?'change':'']">
            <view class="area-item">
                <view class="u-padding-10 u-bg-gray" style="height:100%;">
                    <scroll-view :scrollY="true" style="height:100%;">
                        <u-cell-group :vueSlots="['default']">
                            <u-cell-item :arrow="false" :index="index" :title="item.label" :vueSlots="['default']" :key="index" @click="provinceChange()" v-for="(item, index) in provinces">
                                <u-icon color="#ff4643" name="checkbox-mark" size="34" slot="right-icon" v-if="isChooseP&&province===index"></u-icon>
                            </u-cell-item>
                        </u-cell-group>
                    </scroll-view>
                </view>
            </view>
            <view class="area-item">
                <view class="u-padding-10 u-bg-gray" style="height:100%;">
                    <scroll-view :scrollY="true" style="height:100%;">
                        <u-cell-group :vueSlots="['default']" v-if="isChooseP">
                            <u-cell-item :arrow="false" :index="index" :title="item.label" :vueSlots="['default']" :key="index" @click="cityChange()" v-for="(item, index) in citys">
                                <u-icon color="#ff4643" name="checkbox-mark" size="34" slot="right-icon" v-if="isChooseC&&city===index"></u-icon>
                            </u-cell-item>
                        </u-cell-group>
                    </scroll-view>
                </view>
            </view>
            <view class="area-item">
                <view class="u-padding-10 u-bg-gray" style="height:100%;">
                    <scroll-view :scrollY="true" style="height:100%;">
                        <u-cell-group :vueSlots="['default']" v-if="isChooseC">
                            <u-cell-item :arrow="false" :index="index" :title="item.label" :vueSlots="['default']" :key="index" @click="areaChange()" v-for="(item, index) in areas">
                                <u-icon color="#ff4643" name="checkbox-mark" size="34" slot="right-icon" v-if="isChooseA&&area===index"></u-icon>
                            </u-cell-item>
                        </u-cell-group>
                    </scroll-view>
                </view>
            </view>
        </view>
    </view>
</u-popup>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          name: "u-city-select",
          props: {
            value: {
              type: Boolean,
              default: !1
            },
            defaultRegion: {
              type: Array,
              default: function() {
                return []
              }
            },
            areaCode: {
              type: Array,
              default: function() {
                return []
              }
            },
            maskCloseAble: {
              type: Boolean,
              default: !0
            },
            zIndex: {
              type: [String, Number],
              default: 0
            }
          },
          data: function() {
            return {
              cityValue: "",
              isChooseP: !1,
              province: 0,
              provinces: o.default,
              isChooseC: !1,
              city: 0,
              citys: s.default[0],
              isChooseA: !1,
              area: 0,
              areas: a.default[0][0],
              tabsIndex: 0
            }
          },
          computed: {
            isChange: function() {
              return this.tabsIndex > 1
            },
            genTabsList: function() {
              var e = [{
                name: "请选择"
              }];
              return this.isChooseP && (e[0].name = this.provinces[this.province].label, e[1] = {
                name: "请选择"
              }), this.isChooseC && (e[1].name = this.citys[this.city].label, e[2] = {
                name: "请选择"
              }), this.isChooseA && (e[2].name = this.areas[this.area].label), e
            },
            uZIndex: function() {
              return this.zIndex ? this.zIndex : this.$u.zIndex.popup
            }
          },
          methods: {
            init: function() {
              3 == this.areaCode.length ? (this.setProvince("", this.areaCode[0]), this.setCity("", this.areaCode[1]), this.setArea("", this.areaCode[2])) : 3 == this.defaultRegion.length && (this.setProvince(this.defaultRegion[0], ""), this.setCity(this.defaultRegion[1], ""), this.setArea(this.defaultRegion[2], ""))
            },
            setProvince: function() {
              var e = this,
                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
              this.provinces.map((function(i, o) {
                (n ? i.value == n : i.label == t) && e.provinceChange(o)
              }))
            },
            setCity: function() {
              var e = this,
                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
              this.citys.map((function(i, o) {
                (n ? i.value == n : i.label == t) && e.cityChange(o)
              }))
            },
            setArea: function() {
              var e = this,
                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
              this.areas.map((function(i, o) {
                (n ? i.value == n : i.label == t) && (e.isChooseA = !0, e.area = o)
              }))
            },
            close: function() {
              this.$emit("input", !1)
            },
            tabsChange: function(e) {
              this.tabsIndex = e
            },
            provinceChange: function(e) {
              this.isChooseP = !0, this.isChooseC = !1, this.isChooseA = !1, this.province = e, this.citys = s.default[e], this.tabsIndex = 1
            },
            cityChange: function(e) {
              this.isChooseC = !0, this.isChooseA = !1, this.city = e, this.areas = a.default[this.province][e], this.tabsIndex = 2
            },
            areaChange: function(e) {
              this.isChooseA = !0, this.area = e;
              var t = {};
              t.province = this.provinces[this.province], t.city = this.citys[this.city], t.area = this.areas[this.area], this.$emit("city-change", t), this.close()
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.area-box{height:800rpx;overflow:hidden;width:100%}.area-box>view{transform:translateX(0);transition:-webkit-transform .3s ease-in-out 0s;transition:transform .3s ease-in-out 0s;transition:transform .3s ease-in-out 0s,-webkit-transform .3s ease-in-out 0s;width:150%}.area-box>view.change{transform:translateX(-33.33333%)}.area-box .area-item{height:800rpx;width:33.3333333%}
</style>
