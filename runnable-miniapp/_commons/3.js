var t = require("../@babel/runtime/helpers/typeof");
module.exports = {
  ids: [3],
  modules: {
    117: function(t, r, n) {
      var o = n(42);
      t.exports = function(t) {
        if (Array.isArray(t)) return o(t)
      }
    },
    118: function(t, r) {
      t.exports = function(t) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
      }
    },
    119: function(t, r) {
      t.exports = function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
    },
    16: function(t, r) {
      t.exports = function(t, r) {
        if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
      }
    },
    17: function(t, r) {
      function n(t, r) {
        for (var n = 0; n < r.length; n++) {
          var o = r[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
      }
      t.exports = function(t, r, o) {
        return r && n(t.prototype, r), o && n(t, o), t
      }
    },
    19: function(t, r, n) {
      var o = n(117),
        e = n(118),
        i = n(43),
        u = n(119);
      t.exports = function(t) {
        return o(t) || e(t) || i(t) || u()
      }
    },
    42: function(t, r) {
      t.exports = function(t, r) {
        (null == r || r > t.length) && (r = t.length);
        for (var n = 0, o = new Array(r); n < r; n++) o[n] = t[n];
        return o
      }
    },
    43: function(t, r, n) {
      var o = n(42);
      t.exports = function(t, r) {
        if (t) {
          if ("string" == typeof t) return o(t, r);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(t, r) : void 0
        }
      }
    },
    8: function(r, n) {
      function o(n) {
        return "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? r.exports = o = function(r) {
          return t(r)
        } : r.exports = o = function(r) {
          return r && "function" == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : t(r)
        }, o(n)
      }
      r.exports = o
    }
  }
};
