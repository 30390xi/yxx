// Extracted from subPage/pages/memberDetail/memberDetail.js; webpack module "34fc".
// Compiled code for analysis; not an original source file.
module.exports = {
    "34fc": function(e, n, t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0, n.default = {
        data: function() {
          return {
            firstFenXiaoVo: {},
            secondFenXiaoVoList: []
          }
        },
        onLoad: function(e) {
          this.getList(e.id)
        },
        methods: {
          getList: function(e) {
            var n = this;
            this.$uniApi.dataRequestNoLoading("get", "manager/app/v1/member/getMySecondFenXiaoByFirstMemberId?memberId=" + e).then((function(e) {
              1 == e.code && (n.firstFenXiaoVo = e.data.firstFenXiaoVo, n.secondFenXiaoVoList = e.data.secondFenXiaoVoList)
            }))
          }
        }
      }
    },
};
