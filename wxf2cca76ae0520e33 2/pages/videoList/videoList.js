(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/videoList/videoList"], {
    "33d9": function(t, e, i) {
      var n = i("379a");
      i.n(n).a
    },
    "379a": function(t, e, i) {},
    3987: function(t, e, i) {
      (function(t, e) {
        var n = i("47a9");
        i("5366"), n(i("3240"));
        var o = n(i("f8e5"));
        t.__webpack_require_UNI_MP_PLUGIN__ = i, e(o.default)
      }).call(this, i("3223").default, i("df3c").createPage)
    },
    "5d58": function(t, e, i) {
      i.d(e, "b", (function() {
        return o
      })), i.d(e, "c", (function() {
        return a
      })), i.d(e, "a", (function() {
        return n
      }));
      var n = {
          uniNavbar: function() {
            return i.e("components/uni-navbar/uni-navbar").then(i.bind(null, "101a"))
          }
        },
        o = function() {
          this.$createElement;
          var t = (this._self._c, this._f("saleNumFormat")(this.videoinfo.playNum));
          this.$mp.data = Object.assign({}, {
            $root: {
              f0: t
            }
          })
        },
        a = []
    },
    "7e4a": function(t, e, i) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var n = {
        data: function() {
          return {
            obj: {},
            videoinfo: {
              videoUrl: "",
              title: "",
              playNum: "",
              author: ""
            }
          }
        },
        onShareAppMessage: function(t) {
          var e = this.videoinfo.coverImage.toLowerCase(),
            i = "/pages/videoList/videoList?spotId=&videoId=" + this.videoId;
          return {
            title: this.videoinfo.title,
            imageUrl: -1 == e.indexOf(".gif") ? this.videoinfo.coverImage : getApp().globalData.shareimg,
            path: this.$util.setShareUrl(i)
          }
        },
        onLoad: function(t) {
          console.log(t), this._spotId = t.spotId, this.videoId = t.videoId, this.getVideo(this._spotId, this.videoId)
        },
        methods: {
          getVideo: function(t, e) {
            var i = this;
            this.$uniApi.getRequestNoLoading("GET", "base/app/v1/contentVideo/list?spotId=" + t + "&videoId=" + e).then((function(t) {
              1 === t.code && (i.obj = t.data, i.videoinfo = t.data.mainVO)
            })), this.$uniApi.getRequestNoLoading("GET", "base/app/v1/contentVideo/addVideoTimes/" + e).then((function(t) {}))
          },
          jump: function(t) {
            this.getVideo(this._spotId, t.id)
          }
        }
      };
      e.default = n
    },
    "94f4": function(t, e, i) {
      i.r(e);
      var n = i("7e4a"),
        o = i.n(n);
      for (var a in n)["default"].indexOf(a) < 0 && function(t) {
        i.d(e, t, (function() {
          return n[t]
        }))
      }(a);
      e.default = o.a
    },
    f8e5: function(t, e, i) {
      i.r(e);
      var n = i("5d58"),
        o = i("94f4");
      for (var a in o)["default"].indexOf(a) < 0 && function(t) {
        i.d(e, t, (function() {
          return o[t]
        }))
      }(a);
      i("33d9");
      var d = i("828b"),
        u = Object(d.a)(o.default, n.b, n.c, !1, null, "3fb89fe0", null, !1, n.a, void 0);
      e.default = u.exports
    }
  },
  [
    ["3987", "common/runtime", "common/vendor"]
  ]
]);
