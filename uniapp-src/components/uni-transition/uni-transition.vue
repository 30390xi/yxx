<template>
<view :class="['uni-transition','vue-ref',ani.in]" ref="ani" :style="'transform:'+transform+';'+stylesObject" v-if="isShow" @click="change($event)">
    <slot></slot>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
        name: "uniTransition",
        props: {
          show: {
            type: Boolean,
            default: !1
          },
          modeClass: {
            type: Array,
            default: function() {
              return []
            }
          },
          duration: {
            type: Number,
            default: 300
          },
          styles: {
            type: Object,
            default: function() {
              return {}
            }
          }
        },
        data: function() {
          return {
            isShow: !1,
            transform: "",
            ani: {
              in: "",
              active: ""
            }
          }
        },
        watch: {
          show: {
            handler: function(t) {
              t ? this.open() : this.close()
            },
            immediate: !0
          }
        },
        computed: {
          stylesObject: function() {
            var t = a(a({}, this.styles), {}, {
                "transition-duration": this.duration / 1e3 + "s"
              }),
              n = "";
            for (var e in t) {
              n += this.toLine(e) + ":" + t[e] + ";"
            }
            return n
          }
        },
        created: function() {},
        methods: {
          change: function() {
            this.$emit("click", {
              detail: this.isShow
            })
          },
          open: function() {
            var t = this;
            for (var n in clearTimeout(this.timer), this.isShow = !0, this.transform = "", this.ani.in = "", this.getTranfrom(!1)) "opacity" === n ? this.ani.in = "fade-in" : this.transform += "".concat(this.getTranfrom(!1)[n], " ");
            this.$nextTick((function() {
              setTimeout((function() {
                t._animation(!0)
              }), 50)
            }))
          },
          close: function(t) {
            clearTimeout(this.timer), this._animation(!1)
          },
          _animation: function(t) {
            var n = this,
              e = this.getTranfrom(t);
            for (var o in this.transform = "", e) "opacity" === o ? this.ani.in = "fade-".concat(t ? "out" : "in") : this.transform += "".concat(e[o], " ");
            this.timer = setTimeout((function() {
              t || (n.isShow = !1), n.$emit("change", {
                detail: n.isShow
              })
            }), this.duration)
          },
          getTranfrom: function(t) {
            var n = {
              transform: ""
            };
            return this.modeClass.forEach((function(e) {
              switch (e) {
                case "fade":
                  n.opacity = t ? 1 : 0;
                  break;
                case "slide-top":
                  n.transform += "translateY(".concat(t ? "0" : "-100%", ") ");
                  break;
                case "slide-right":
                  n.transform += "translateX(".concat(t ? "0" : "100%", ") ");
                  break;
                case "slide-bottom":
                  n.transform += "translateY(".concat(t ? "0" : "100%", ") ");
                  break;
                case "slide-left":
                  n.transform += "translateX(".concat(t ? "0" : "-100%", ") ");
                  break;
                case "zoom-in":
                  n.transform += "scale(".concat(t ? 1 : .8, ") ");
                  break;
                case "zoom-out":
                  n.transform += "scale(".concat(t ? 1 : 1.2, ") ")
              }
            })), n
          },
          _modeClassArr: function(t) {
            var n = this.modeClass;
            if ("string" != typeof n) {
              var e = "";
              return n.forEach((function(n) {
                e += n + "-" + t + ","
              })), e.substr(0, e.length - 1)
            }
            return n + "-" + t
          },
          toLine: function(t) {
            return t.replace(/([A-Z])/g, "-$1").toLowerCase()
          }
        }
      };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.uni-transition{transition-duration:.3s;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform;transition-timing-function:ease}.fade-in{opacity:0}.fade-active{opacity:1}.slide-top-in{transform:translateY(-100%)}.slide-top-active{transform:translateY(0)}.slide-right-in{transform:translateX(100%)}.slide-right-active{transform:translateX(0)}.slide-bottom-in{transform:translateY(100%)}.slide-bottom-active{transform:translateY(0)}.slide-left-in{transform:translateX(-100%)}.slide-left-active{opacity:1;transform:translateX(0)}.zoom-in-in{transform:scale(.8)}.zoom-out-active{transform:scale(1)}.zoom-out-in{transform:scale(1.2)}
</style>
