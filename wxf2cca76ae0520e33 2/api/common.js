var o = !1;
module.exports = {
  logLog: function() {
    var n;
    o && (n = console).log.apply(n, arguments)
  },
  logErr: function() {
    var n;
    o && (n = console).error.apply(n, arguments)
  },
  logInfo: function() {
    var n;
    o && (n = console).info.apply(n, arguments)
  },
  setLogFlag: function(n) {
    o = n
  }
};
