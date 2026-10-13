// Extracted from union/pages/aiTravel2/titlePage.js; webpack module "816f".
// Compiled code for analysis; not an original source file.
module.exports = {
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
};
