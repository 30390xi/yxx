require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["union/pages/aiTravel2/titlePage"], {
    "7c15": function(t, u, D) {
      (function(t, u) {
        var e = D("47a9");
        D("5366"), e(D("3240"));
        var a = e(D("d313"));
        t.__webpack_require_UNI_MP_PLUGIN__ = D, u(a.default)
      }).call(this, D("3223").default, D("df3c").createPage)
    },
    "816f": function(t, u, D) {
      (function(t) {
        Object.defineProperty(u, "__esModule", {
          value: !0
        }), u.default = void 0;
        var D = {
          name: "titlePage",
          data: function() {
            return {
              formData: null,
              title: "",
              tempTitle: ""
            }
          },
          computed: {
            travelContent: function() {
              return this.formData ? "".concat(this.formData.city).concat(this.formData.days, "天").concat(this.formData.days - 1, "晚，").concat(this.formData.adult > 0 ? "".concat(this.formData.adult, "成人") : "").concat(this.formData.children > 0 ? "".concat(this.formData.children, "儿童") : "").concat(this.formData.older > 0 ? "".concat(this.formData.older, "老人") : "", "，").concat(2 === this.formData.origin ? "外来游" : "本地游", "，").concat(1 === this.formData.budgetType ? "总预算" : "人均预算", "为").concat(this.formData.budget, "元").concat(this.formData.wantDO && this.formData.wantDO.length > 0 ? "，想体验" : "").concat((this.formData.wantDO || []).join("、"), "。") : ""
            }
          },
          onLoad: function() {
            if (this.formData = t.getStorageSync("aiTravelFormData"), this.formData && this.formData.beginTime && this.formData.endTime) {
              var u = new Date(this.formData.beginTime),
                D = new Date(this.formData.endTime).getTime() - u.getTime();
              this.formData.days = Math.floor(D / 864e5) + 1
            }
            this.formData && (this.title = this.formData.city + this.formData.days + "日旅行计划", this.tempTitle = this.title)
          },
          methods: {
            hasEmoji: function(t) {
              return /(?:\uD83D[\uDE00-\uDE4F])|(?:\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])|(?:\uD83D[\uDE80-\uDEFF])|(?:\uD83C[\uDDE0-\uDDFF])|[\u2600-\u26FF]|[\u2700-\u27BF]|(?:\uD83E[\uDD00-\uDDFF])|(?:\uD83C[\uDC18-\uDCF5])|(?:\uD83C[\uDE00-\uDEFF])|(?:\uD83E[\uDE70-\uDEFF])|(?:\uD83C[\uDC04-\uDCCE])|(?:\uD83C[\uDCCF-\uDE51])|(?:\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])|(?:\uD83D[\uDE80-\uDEFF])|(?:\uD83D[\uDF00-\uDF7F])|(?:\uD83D[\uDF80-\uDFFF])|(?:\uD83E[\uDC00-\uDCFF])|(?:\uD83E[\uDD00-\uDDFF])|(?:\uD83E[\uDE00-\uDE6F])|(?:\uD83E[\uDE70-\uDEFF])|(?:\uD83E[\uDF00-\uDFFF])|(?:\uD83F[\uDC00-\uDCFF])|(?:\uD83F[\uDD00-\uDDFF])|(?:\uD83F[\uDE00-\uDEFF])|(?:\uD83F[\uDF00-\uDFFF])/g.test(t)
            },
            filterEmoji: function(t) {
              return t.replace(/(?:\uD83D[\uDE00-\uDE4F])|(?:\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])|(?:\uD83D[\uDE80-\uDEFF])|(?:\uD83C[\uDDE0-\uDDFF])|[\u2600-\u26FF]|[\u2700-\u27BF]|(?:\uD83E[\uDD00-\uDDFF])|(?:\uD83C[\uDC18-\uDCF5])|(?:\uD83C[\uDE00-\uDEFF])|(?:\uD83E[\uDE70-\uDEFF])|(?:\uD83C[\uDC04-\uDCCE])|(?:\uD83C[\uDCCF-\uDE51])|(?:\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])|(?:\uD83D[\uDE80-\uDEFF])|(?:\uD83D[\uDF00-\uDF7F])|(?:\uD83D[\uDF80-\uDFFF])|(?:\uD83E[\uDC00-\uDCFF])|(?:\uD83E[\uDD00-\uDDFF])|(?:\uD83E[\uDE00-\uDE6F])|(?:\uD83E[\uDE70-\uDEFF])|(?:\uD83E[\uDF00-\uDFFF])|(?:\uD83F[\uDC00-\uDCFF])|(?:\uD83F[\uDD00-\uDDFF])|(?:\uD83F[\uDE00-\uDEFF])|(?:\uD83F[\uDF00-\uDFFF])/g, "")
            },
            onTitleInput: function(t) {
              var u = t.detail.value,
                D = this.filterEmoji(u);
              this.tempTitle = D !== u ? D : u
            },
            onTitleBlur: function() {
              this.tempTitle = this.filterEmoji(this.tempTitle)
            },
            openEditTitle: function() {
              this.tempTitle = this.title, this.$refs.editTitlePopup.open()
            },
            closeEditTitle: function() {
              this.$refs.editTitlePopup.close()
            },
            confirmEditTitle: function() {
              var u = (this.tempTitle || "").trim();
              u ? u.length > 15 ? t.showToast({
                title: "标题最多15个字",
                icon: "none"
              }) : this.hasEmoji(u) ? t.showToast({
                title: "标题不支持表情符号",
                icon: "none"
              }) : (this.title = u, this.$refs.editTitlePopup.close()) : t.showToast({
                title: "标题不能为空",
                icon: "none"
              })
            },
            goLoadPage: function() {
              var u = t.getStorageSync("aiTravelFormData");
              u.travelTitle = this.title, t.setStorageSync("aiTravelFormData", u), this.$eventAnalyse.analyse({
                eventTag: "aiTravel_form_submit",
                eventName: "旅行搭子表单提交",
                eventParams: JSON.stringify({
                  adult: u.adult,
                  children: u.children,
                  older: u.older,
                  budget: u.budget,
                  budgetType: u.budgetType,
                  origin: u.origin,
                  travelTitle: this.title
                })
              }), t.navigateTo({
                url: "/union/pages/aiTravel2/loadPage"
              })
            }
          }
        };
        u.default = D
      }).call(this, D("df3c").default)
    },
    "99b4": function(t, u, D) {
      D.r(u);
      var e = D("816f"),
        a = D.n(e);
      for (var i in e)["default"].indexOf(i) < 0 && function(t) {
        D.d(u, t, (function() {
          return e[t]
        }))
      }(i);
      u.default = a.a
    },
    cd58: function(t, u, D) {},
    d313: function(t, u, D) {
      D.r(u);
      var e = D("e18b"),
        a = D("99b4");
      for (var i in a)["default"].indexOf(i) < 0 && function(t) {
        D.d(u, t, (function() {
          return a[t]
        }))
      }(i);
      D("fbe1");
      var n = D("828b"),
        o = Object(n.a)(a.default, e.b, e.c, !1, null, "29009bda", null, !1, e.a, void 0);
      u.default = o.exports
    },
    e18b: function(t, u, D) {
      D.d(u, "b", (function() {
        return a
      })), D.d(u, "c", (function() {
        return i
      })), D.d(u, "a", (function() {
        return e
      }));
      var e = {
          uniNavbar: function() {
            return D.e("components/uni-navbar/uni-navbar").then(D.bind(null, "101a"))
          },
          uniPopup: function() {
            return Promise.all([D.e("common/vendor"), D.e("components/uni-popup/uni-popup")]).then(D.bind(null, "db3a"))
          }
        },
        a = function() {
          this.$createElement;
          var t = (this._self._c, (this.tempTitle || "").length);
          this.$mp.data = Object.assign({}, {
            $root: {
              g0: t
            }
          })
        },
        i = []
    },
    fbe1: function(t, u, D) {
      var e = D("cd58");
      D.n(e).a
    }
  },
  [
    ["7c15", "common/runtime", "common/vendor"]
  ]
]);
