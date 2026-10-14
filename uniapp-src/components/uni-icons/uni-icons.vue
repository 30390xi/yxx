<template>
<text class="uni-icons" :style="'color:'+color+';'+'font-size:'+size+'px'+';'" @click="_onClick($event)">{{icons[type]}}</text>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          name: "UniIcons",
          props: {
            type: {
              type: String,
              default: ""
            },
            color: {
              type: String,
              default: "#333333"
            },
            size: {
              type: [Number, String],
              default: 16
            }
          },
          data: function() {
            return {
              icons: c.default
            }
          },
          methods: {
            _onClick: function() {
              this.$emit("click")
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
@font-face{font-family:iconfont;src:url('https://at.alicdn.com/t/font_1135293_z1315ov8k2t.woff2?t=1589338239928')format('woff2'),url('https://at.alicdn.com/t/font_1135293_z1315ov8k2t.woff?t=1589338239928')format('woff'),url('https://at.alicdn.com/t/font_1135293_z1315ov8k2t.ttf?t=1589338239928')format('truetype')}.uni-icons{font-family:uniicons;text-align:center;text-decoration:none}
</style>
