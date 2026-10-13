require("../../../@babel/runtime/helpers/Arrayincludes"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["uview-ui/components/u-upload/u-upload"], {
    "26b8": function(e, t, n) {},
    3938: function(e, t, n) {
      n.r(t);
      var o = n("72a8"),
        i = n("9445");
      for (var s in i)["default"].indexOf(s) < 0 && function(e) {
        n.d(t, e, (function() {
          return i[e]
        }))
      }(s);
      n("949d");
      var r = n("828b"),
        a = Object(r.a)(i.default, o.b, o.c, !1, null, "dc5e218c", null, !1, o.a, void 0);
      t.default = a.exports
    },
    "72a8": function(e, t, n) {
      n.d(t, "b", (function() {
        return i
      })), n.d(t, "c", (function() {
        return s
      })), n.d(t, "a", (function() {
        return o
      }));
      var o = {
          uIcon: function() {
            return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null, "61be"))
          },
          uLineProgress: function() {
            return n.e("uview-ui/components/u-line-progress/u-line-progress").then(n.bind(null, "ff6ba"))
          }
        },
        i = function() {
          var e = this;
          e.$createElement;
          e._self._c, e.$initSSP();
          var t = e.disabled ? null : e.lists.length;
          e.$mp.data = Object.assign({}, {
            $root: {
              g0: t
            }
          }), "augmented" === e.$scope.data.scopedSlotsCompiler && e.$setSSP("file", {
            file: e.lists
          }), e.$callSSP()
        },
        s = []
    },
    9445: function(e, t, n) {
      n.r(t);
      var o = n("d206"),
        i = n.n(o);
      for (var s in o)["default"].indexOf(s) < 0 && function(e) {
        n.d(t, e, (function() {
          return o[e]
        }))
      }(s);
      t.default = i.a
    },
    "949d": function(e, t, n) {
      var o = n("26b8");
      n.n(o).a
    },
    d206: function(e, t, n) {
      (function(e) {
        var o = n("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var i = o(n("7eb4")),
          s = o(n("3b2d")),
          r = o(n("ee10")),
          a = {
            name: "u-upload",
            props: {
              showUploadList: {
                type: Boolean,
                default: !0
              },
              action: {
                type: String,
                default: ""
              },
              maxCount: {
                type: [String, Number],
                default: 52
              },
              showProgress: {
                type: Boolean,
                default: !0
              },
              disabled: {
                type: Boolean,
                default: !1
              },
              imageMode: {
                type: String,
                default: "aspectFill"
              },
              header: {
                type: Object,
                default: function() {
                  return {}
                }
              },
              formData: {
                type: Object,
                default: function() {
                  return {}
                }
              },
              name: {
                type: String,
                default: "file"
              },
              sizeType: {
                type: Array,
                default: function() {
                  return ["original", "compressed"]
                }
              },
              sourceType: {
                type: Array,
                default: function() {
                  return ["album", "camera"]
                }
              },
              previewFullImage: {
                type: Boolean,
                default: !0
              },
              multiple: {
                type: Boolean,
                default: !0
              },
              deletable: {
                type: Boolean,
                default: !0
              },
              maxSize: {
                type: [String, Number],
                default: Number.MAX_VALUE
              },
              fileList: {
                type: Array,
                default: function() {
                  return []
                }
              },
              uploadText: {
                type: String,
                default: "选择图片"
              },
              autoUpload: {
                type: Boolean,
                default: !0
              },
              autoPreview: {
                type: Boolean,
                default: !0
              },
              showTips: {
                type: Boolean,
                default: !0
              },
              customBtn: {
                type: Boolean,
                default: !1
              },
              width: {
                type: [String, Number],
                default: 200
              },
              delBgColor: {
                type: String,
                default: "#fa3534"
              },
              delColor: {
                type: String,
                default: "#ffffff"
              },
              delIcon: {
                type: String,
                default: "close"
              },
              toJson: {
                type: Boolean,
                default: !0
              },
              beforeUpload: {
                type: Function,
                default: null
              }
            },
            mounted: function() {},
            data: function() {
              return {
                lists: [],
                isInCount: !0,
                uploading: !1
              }
            },
            watch: {
              fileList: {
                immediate: !0,
                handler: function(e) {
                  var t = this;
                  e.map((function(e) {
                    !t.lists.some((function(t) {
                      return t.url == e.url
                    })) && t.lists.push({
                      url: e.url,
                      error: !1,
                      progress: 100
                    })
                  }))
                }
              }
            },
            methods: {
              clear: function() {
                this.lists = [], this.$emit("on-list-change", this.lists)
              },
              reUpload: function() {
                this.uploadFile()
              },
              selectFile: function() {
                var t = this;
                if (!this.disabled)
                  if (this.autoPreview) {
                    this.name;
                    var n = this.maxCount,
                      o = this.multiple,
                      i = this.maxSize,
                      s = this.sizeType,
                      r = this.lists,
                      a = (this.camera, this.compressed, this.maxDuration, this.sourceType),
                      u = n - r.length;
                    new Promise((function(t, n) {
                      e.chooseImage({
                        count: o ? u > 9 ? 9 : u : 1,
                        sourceType: a,
                        sizeType: s,
                        success: t,
                        fail: n
                      })
                    })).then((function(e) {
                      var s = t.lists.length;
                      e.tempFiles.map((function(e, s) {
                        if (o || !(s >= 1))
                          if (e.size > i) t.$emit("on-oversize", e, t.lists), t.showToast("超出允许的文件大小");
                          else {
                            if (n <= r.length) return t.$emit("on-exceed", e, t.lists), void t.showToast("超出最大允许的文件个数");
                            r.push({
                              url: e.path,
                              progress: 0,
                              error: !1
                            }), t.$emit("on-list-change", t.lists)
                          }
                      })), t.$emit("on-choose-complete", t.lists), t.autoUpload && t.uploadFile(s)
                    })).catch((function(e) {}))
                  } else this.$emit("before-preview", "")
              },
              showToast: function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                (this.showTips || n) && e.showToast({
                  title: t,
                  icon: "none"
                })
              },
              upload: function() {
                this.uploadFile()
              },
              retry: function(t) {
                this.lists[t].progress = 0, this.lists[t].error = !1, this.lists[t].response = null, e.showLoading({
                  title: "重新上传"
                }), this.uploadFile(t)
              },
              uploadFile: function() {
                var t = arguments,
                  n = this;
                return (0, r.default)(i.default.mark((function o() {
                  var s, r;
                  return i.default.wrap((function(o) {
                    for (;;) switch (o.prev = o.next) {
                      case 0:
                        if (s = t.length > 0 && void 0 !== t[0] ? t[0] : 0, !n.disabled) {
                          o.next = 3;
                          break
                        }
                        return o.abrupt("return");
                      case 3:
                        if (!n.uploading) {
                          o.next = 5;
                          break
                        }
                        return o.abrupt("return");
                      case 5:
                        if (!(s >= n.lists.length)) {
                          o.next = 8;
                          break
                        }
                        return n.$emit("on-uploaded", n.lists), o.abrupt("return");
                      case 8:
                        if (n.action) {
                          o.next = 11;
                          break
                        }
                        return n.showToast("请配置上传地址", !0), o.abrupt("return");
                      case 11:
                        if (100 != n.lists[s].progress) {
                          o.next = 14;
                          break
                        }
                        return 0 == n.autoUpload && n.uploadFile(s + 1), o.abrupt("return");
                      case 14:
                        if (!n.beforeUpload || "function" != typeof n.beforeUpload) {
                          o.next = 23;
                          break
                        }
                        if (!(r = n.beforeUpload(s, n.lists)) || "function" != typeof r.then) {
                          o.next = 21;
                          break
                        }
                        return o.next = 19, r.then((function(e) {})).catch((function(e) {
                          return n.uploadFile(s + 1)
                        }));
                      case 19:
                        o.next = 23;
                        break;
                      case 21:
                        if (!1 !== r) {
                          o.next = 23;
                          break
                        }
                        return o.abrupt("return", n.uploadFile(s + 1));
                      case 23:
                        n.lists[s].error = !1, n.uploading = !0, e.uploadFile({
                          url: n.action,
                          filePath: n.lists[s].url,
                          name: n.name,
                          formData: n.formData,
                          header: n.header,
                          success: function(e) {
                            var t = n.toJson && n.checkIsJSON(e.data) ? JSON.parse(e.data) : e.data;
                            [200, 201, "200", "201"].includes(e.statusCode) ? (n.lists[s].response = t, n.lists[s].progress = 100, n.lists[s].error = !1, n.$emit("on-success", t, s, n.lists)) : n.uploadError(s, t)
                          },
                          fail: function(e) {
                            n.uploadError(s, e)
                          },
                          complete: function(t) {
                            e.hideLoading(), n.uploading = !1, n.uploadFile(s + 1), n.$emit("on-change", t, s, n.lists)
                          }
                        }).onProgressUpdate((function(e) {
                          e.progress > 0 && (n.lists[s].progress = e.progress, n.$emit("on-progress", e, s, n.lists))
                        }));
                      case 27:
                      case "end":
                        return o.stop()
                    }
                  }), o)
                })))()
              },
              uploadError: function(e, t) {
                this.lists[e].progress = 0, this.lists[e].error = !0, this.lists[e].response = null, this.$emit("on-error", t, e, this.lists), this.showToast("上传失败，请重试")
              },
              deleteItem: function(t) {
                var n = this;
                e.showModal({
                  title: "提示",
                  content: "您确定要删除此项吗？",
                  success: function(e) {
                    e.confirm && (n.lists[t].process < 100 && n.lists[t].process > 0 && void 0 !== n.lists[t].uploadTask && n.lists[t].uploadTask.abort(), n.lists.splice(t, 1), n.$forceUpdate(), n.$emit("on-remove", t, n.lists), n.showToast("移除成功"), n.$emit("on-list-change", n.lists))
                  }
                })
              },
              remove: function(e) {
                e >= 0 && e < this.lists.length && (this.lists.splice(e, 1), this.$emit("on-list-change", this.lists))
              },
              doPreviewImage: function(t, n) {
                var o = this;
                if (this.previewFullImage) {
                  var i = this.lists.map((function(e) {
                    return e.url || e.path
                  }));
                  e.previewImage({
                    urls: i,
                    current: t,
                    success: function() {
                      o.$emit("on-preview", t, o.lists)
                    },
                    fail: function() {
                      e.showToast({
                        title: "预览图片失败",
                        icon: "none"
                      })
                    }
                  })
                }
              },
              checkIsJSON: function(e) {
                if ("string" == typeof e) try {
                  var t = JSON.parse(e);
                  return !("object" != (0, s.default)(t) || !t)
                } catch (e) {
                  return !1
                }
                return !1
              }
            }
          };
        t.default = a
      }).call(this, n("df3c").default)
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["uview-ui/components/u-upload/u-upload-create-component", {
    "uview-ui/components/u-upload/u-upload-create-component": function(e, t, n) {
      n("df3c").createComponent(n("3938"))
    }
  },
  [
    ["uview-ui/components/u-upload/u-upload-create-component"]
  ]
]);
