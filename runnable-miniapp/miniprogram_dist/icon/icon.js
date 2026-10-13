module.exports = require("../../_commons/0.js")([{
  ids: [39],
  modules: {
    587: function(t, e, n) {
      n.r(e);
      var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        o = function(t) {
          var e = [0, 2, 1][t.length % 3],
            n = t.charCodeAt(0) << 16 | (t.length > 1 ? t.charCodeAt(1) : 0) << 8 | (t.length > 2 ? t.charCodeAt(2) : 0);
          return [r.charAt(n >>> 18), r.charAt(n >>> 12 & 63), e >= 2 ? "=" : r.charAt(n >>> 6 & 63), e >= 1 ? "=" : r.charAt(63 & n)].join("")
        },
        i = global.btoa ? function(t) {
          return global.btoa(t)
        } : function(t) {
          return t.replace(/[\s\S]{1,3}/g, o)
        },
        l = String.fromCharCode,
        c = function(t) {
          var e;
          return t.length < 2 ? (e = t.charCodeAt(0)) < 128 ? t : e < 2048 ? l(192 | e >>> 6) + l(128 | 63 & e) : l(224 | e >>> 12 & 15) + l(128 | e >>> 6 & 63) + l(128 | 63 & e) : (e = 65536 + 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320), l(240 | e >>> 18 & 7) + l(128 | e >>> 12 & 63) + l(128 | e >>> 6 & 63) + l(128 | 63 & e))
        },
        s = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
        a = function(t) {
          return "[object Uint8Array]" === Object.prototype.toString.call(t) ? t.toString("base64") : i(function(t) {
            return t.replace(s, c)
          }(String(t)))
        },
        g = {
          error: {
            outline: '<?xml version="1.0" encoding="UTF-8"?><svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">        <title>3.Icons/Outlined/error</title>    <desc>Created with Sketch.</desc>    <g id="3.Icons/Outlined/error" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" fill-opacity="0.9">        <g id="Icons/Tint-Color/Black" transform="translate(2.000000, 2.000000)" fill="#000000">            <path d="M10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 Z M10,18.8 C14.8601058,18.8 18.8,14.8601058 18.8,10 C18.8,5.1398942 14.8601058,1.2 10,1.2 C5.1398942,1.2 1.2,5.1398942 1.2,10 C1.2,14.8601058 5.1398942,18.8 10,18.8 Z M9.34082031,4.43115234 L10.6591797,4.43115234 L10.5712891,11.4916992 L9.42871094,11.4916992 L9.34082031,4.43115234 Z M10,15.0732422 C9.53125,15.0732422 9.16503906,14.7070312 9.16503906,14.2382812 C9.16503906,13.762207 9.53125,13.4033203 10,13.4033203 C10.4760742,13.4033203 10.8349609,13.762207 10.8349609,14.2382812 C10.8349609,14.7070312 10.4760742,15.0732422 10,15.0732422 Z" id="图标颜色"></path>        </g>    </g></svg>',
            filled: '<?xml version="1.0" encoding="UTF-8"?><svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">        <title>3.Icons/Filled/error</title>    <desc>Created with Sketch.</desc>    <g id="3.Icons/Filled/error" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" fill-opacity="0.9">        <g id="common_icons_info" fill="#000000">            <path d="M12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 Z M11.2367191,6.13574219 L11.3460941,13.7324219 L12.6517582,13.7324219 L12.7611332,6.13574219 L11.2367191,6.13574219 Z M11.9955082,17.1025391 C12.5082035,17.1025391 12.8978519,16.7197266 12.8978519,16.2207031 C12.8978519,15.7216797 12.5082035,15.3388672 11.9955082,15.3388672 C11.4964848,15.3388672 11.1000004,15.7216797 11.1000004,16.2207031 C11.1000004,16.7197266 11.4964848,17.1025391 11.9955082,17.1025391 Z" id="图标颜色"></path>        </g>    </g></svg>'
          }
        },
        d = function(t) {
          return "field" === t ? "filled" : t
        };
      Component({
        options: {
          addGlobalClass: !0
        },
        properties: {
          extClass: {
            type: String,
            value: ""
          },
          type: {
            type: String,
            value: "outline",
            observer: "_genSrcByType"
          },
          icon: {
            type: String,
            value: "",
            observer: "_genSrcByIcon"
          },
          size: {
            type: Number,
            value: 20
          },
          color: {
            type: String,
            value: "#000000"
          }
        },
        data: {
          src: "",
          height: 20,
          width: 20
        },
        methods: {
          _genSrcByIcon: function(t) {
            this._genSrc(g[t][d(this.data.type)])
          },
          _genSrcByType: function(t) {
            this._genSrc(g[this.data.icon][d(t)])
          },
          _genSrc: function(t) {
            if (t) {
              var e = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return e ? a(String(t)).replace(/[+\/]/g, (function(t) {
                  return "+" == t ? "-" : "_"
                })).replace(/=/g, "") : a(t)
              }(t);
              this.setData({
                src: "data:image/svg+xml;base64," + e
              })
            }
          }
        }
      })
    },
    94: function(t, e, n) {
      t.exports = n(587)
    }
  },
  entries: [
    [94, 0]
  ]
}]);
