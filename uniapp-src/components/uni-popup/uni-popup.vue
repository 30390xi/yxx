<template>
<view :class="['uni-popup','',popupstyle]" v-if="showPopup" @touchmove.stop="clear($event)">
    <uni-transition class="" :duration="duration" :modeClass="['fade']" :show="showTrans" :styles="maskClass" v-if="maskShow" @click="onTap()"></uni-transition>
    <uni-transition class="" :duration="duration" :modeClass="ani" :show="showTrans" :styles="transClass" :vueSlots="['default']" @click="onTap()">
        <view class="uni-popup__wrapper-box" @click.stop="clear($event)">
            <slot></slot>
        </view>
    </uni-transition>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          name: "UniPopup",
          components: {
            uniTransition: function() {
              o.e("components/uni-transition/uni-transition").then(function() {
                return resolve(o("e151"))
              }.bind(null, o)).catch(o.oe)
            }
          },
          props: {
            animation: {
              type: Boolean,
              default: !0
            },
            type: {
              type: String,
              default: "center"
            },
            maskClick: {
              type: Boolean,
              default: !0
            }
          },
          provide: function() {
            return {
              popup: this
            }
          },
          mixins: [e.default],
          watch: {
            type: {
              handler: function(t) {
                this[this.config[t]]()
              },
              immediate: !0
            },
            maskClick: function(t) {
              this.mkclick = t
            }
          },
          data: function() {
            return {
              duration: 300,
              ani: [],
              showPopup: !1,
              showTrans: !1,
              maskClass: {
                position: "fixed",
                bottom: 0,
                top: 0,
                left: 0,
                right: 0,
                backgroundColor: "rgba(0, 0, 0, 0.4)"
              },
              transClass: {
                position: "fixed",
                left: 0,
                right: 0
              },
              maskShow: !0,
              mkclick: !0,
              popupstyle: "top"
            }
          },
          created: function() {
            this.mkclick = this.maskClick, this.animation ? this.duration = 300 : this.duration = 0
          },
          methods: {
            clear: function(t) {
              t.stopPropagation()
            },
            open: function() {
              var t = this;
              this.showPopup = !0, this.$nextTick((function() {
                new Promise((function(n) {
                  clearTimeout(t.timer), t.timer = setTimeout((function() {
                    t.showTrans = !0, t.$nextTick((function() {
                      n()
                    }))
                  }), 50)
                })).then((function(n) {
                  clearTimeout(t.msgtimer), t.msgtimer = setTimeout((function() {
                    t.customOpen && t.customOpen()
                  }), 100), t.$emit("change", {
                    show: !0,
                    type: t.type
                  })
                }))
              }))
            },
            close: function(t) {
              var n = this;
              this.showTrans = !1, this.$nextTick((function() {
                n.$emit("change", {
                  show: !1,
                  type: n.type
                }), clearTimeout(n.timer), n.customOpen && n.customClose(), n.timer = setTimeout((function() {
                  n.showPopup = !1
                }), 300)
              }))
            },
            onTap: function() {
              this.mkclick && this.close()
            },
            top: function() {
              this.popupstyle = "top", this.ani = ["slide-top"], this.transClass = {
                position: "fixed",
                left: 0,
                right: 0
              }
            },
            bottom: function() {
              this.popupstyle = "bottom", this.ani = ["slide-bottom"], this.transClass = {
                position: "fixed",
                left: 0,
                right: 0,
                bottom: 0
              }
            },
            center: function() {
              this.popupstyle = "center", this.ani = ["zoom-out", "fade"], this.transClass = {
                position: "fixed",
                display: "flex",
                flexDirection: "column",
                bottom: 0,
                left: 0,
                right: 0,
                top: 0,
                justifyContent: "center",
                alignItems: "center"
              }
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.uni-popup{position:fixed;z-index:1100}.uni-popup__mask{background-color:rgba(0,0,0,.4);bottom:0;left:0;opacity:0;position:absolute;right:0;top:0}.mask-ani{transition-duration:.2s;transition-property:opacity}.uni-bottom-mask,.uni-center-mask,.uni-top-mask{opacity:1}.uni-popup__wrapper{display:block;position:absolute}.top{top:0}.bottom{bottom:0}.uni-popup__wrapper-box{display:block;position:relative}.content-ani{transition-duration:.2s;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform}.uni-bottom-content,.uni-top-content{transform:translateY(0)}.uni-center-content{opacity:1;transform:scale(1)}
</style>
