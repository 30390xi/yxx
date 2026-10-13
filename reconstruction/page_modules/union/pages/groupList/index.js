// Extracted from union/pages/groupList/index.js; webpack module af1d.
// Compiled code for analysis; not an original source file.
module.exports = {
    af1d: function(e, t, a) {
      (function(e) {
        var n = a("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var o = {
          mixins: [n(a("30eb")).default],
          data: function() {
            return {
              list: [{
                url: "https://eshopfile.zhiyousx.com/176975695073872708.png",
                name: "组团名称",
                time: "2023-08-01",
                spot: "景点名称"
              }, {
                url: "https://eshopfile.zhiyousx.com/176975695073872708.png",
                name: "组团名称",
                time: "2023-08-01",
                spot: "景点名称"
              }, {
                url: "https://eshopfile.zhiyousx.com/176975695073872708.png",
                name: "组团名称",
                time: "2023-08-01",
                spot: "景点名称"
              }, {
                url: "https://eshopfile.zhiyousx.com/176975695073872708.png",
                name: "组团名称",
                time: "2023-08-01",
                spot: "景点名称"
              }, {
                url: "https://eshopfile.zhiyousx.com/176975695073872708.png",
                name: "组团名称",
                time: "2023-08-01",
                spot: "景点名称"
              }, {
                url: "https://eshopfile.zhiyousx.com/176975695073872708.png",
                name: "组团名称",
                time: "2023-08-01",
                spot: "景点名称"
              }, {
                url: "https://eshopfile.zhiyousx.com/176975695073872708.png",
                name: "组团名称",
                time: "2023-08-01",
                spot: "景点名称"
              }],
              listTeam: [{
                name: "西安市"
              }, {
                name: "西安市"
              }],
              statusBarHeight: "",
              language: "zh",
              codeUrl: "https://eshopfile.zhiyousx.com/176975759628556242.png",
              codeName: "西安市"
            }
          },
          onLoad: function() {
            this.$eventAnalyse.analyse({
              eventTag: "group_list_page_load",
              eventName: "组团列表页面加载",
              eventParams: {
                pagePath: "/union/pages/groupList/index",
                language: this.language
              }
            }), this.language = e.getStorageSync("language") || "zh", this.statusBarHeight = e.getSystemInfoSync().statusBarHeight
          },
          methods: {
            showSharePopup: function() {
              this.$eventAnalyse.analyse({
                eventTag: "group_share_popup_click",
                eventName: "分享弹窗按钮点击",
                eventParams: {
                  language: this.language
                }
              }), this.$refs.popupShare.open()
            },
            enterGroup: function(t) {
              this.$eventAnalyse.analyse({
                eventTag: "group_enter_click",
                eventName: "进入组团详情页点击",
                eventParams: {
                  language: this.language
                }
              }), e.navigateTo({
                url: "/union/pages/groupList/teamInformation?id=" + t.id || !1
              })
            },
            dissolveGroup: function(e) {
              this.$eventAnalyse.analyse({
                eventTag: "group_dissolve_click",
                eventName: "解散组团按钮点击",
                eventParams: {
                  language: this.language
                }
              }), this.$refs.popupRemove.open()
            },
            closePopup: function() {
              this.$eventAnalyse.analyse({
                eventTag: "group_dissolve_cancel_click",
                eventName: "取消解散组团按钮点击",
                eventParams: {
                  language: this.language
                }
              }), this.$refs.popupRemove.close()
            },
            submitPopup: function() {
              this.$eventAnalyse.analyse({
                eventTag: "group_dissolve_confirm_click",
                eventName: "确认解散组团按钮点击",
                eventParams: {
                  language: this.language
                }
              }), this.$refs.popupRemove.close()
            },
            showCreateGroupPopup: function() {
              this.$eventAnalyse.analyse({
                eventTag: "group_create_popup_click",
                eventName: "创建组团弹窗按钮点击",
                eventParams: {
                  language: this.language
                }
              }), this.$refs.popupCreate.open()
            },
            closeCreateGroupPopup: function() {
              this.$eventAnalyse.analyse({
                eventTag: "group_create_cancel_click",
                eventName: "取消创建组团按钮点击",
                eventParams: {
                  language: this.language
                }
              }), this.$refs.popupCreate.close()
            },
            submitCreateGroupPopup: function() {
              this.$eventAnalyse.analyse({
                eventTag: "group_create_confirm_click",
                eventName: "确认创建组团按钮点击",
                eventParams: {
                  language: this.language
                }
              }), this.$refs.popupCreate.close()
            },
            showSelectPopup: function() {
              this.$eventAnalyse.analyse({
                eventTag: "group_select_popup_click",
                eventName: "选择组团弹窗按钮点击",
                eventParams: {
                  language: this.language
                }
              }), this.$refs.popupSelect.open()
            },
            selectGroup: function(e) {
              this.$eventAnalyse.analyse({
                eventTag: "group_select_item_click",
                eventName: "选择组团项目点击",
                eventParams: {
                  language: this.language
                }
              }), this.codeName = e.name, this.$refs.popupSelect.close()
            },
            closeSelectPopup: function() {
              this.$eventAnalyse.analyse({
                eventTag: "group_select_cancel_click",
                eventName: "取消选择组团按钮点击",
                eventParams: {
                  language: this.language
                }
              }), this.$refs.popupSelect.close()
            }
          }
        };
        t.default = o
      }).call(this, a("df3c").default)
    },
};
