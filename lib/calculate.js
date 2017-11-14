"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Calculate = function () {
  function Calculate() {
    _classCallCheck(this, Calculate);
  }

  _createClass(Calculate, [{
    key: "add",
    value: function add(arg1, arg2) {
      // 利用字符串去除小数点，给小数位少的数字补全位数，求出俩个数字最后需要除以的位数

      var r1, r2, m, c;
      try {
        r1 = arg1.toString().split(".")[1].length;
      } catch (e) {
        r1 = 0;
      }
      try {
        r2 = arg2.toString().split(".")[1].length;
      } catch (e) {
        r2 = 0;
      }
      c = Math.abs(r1 - r2);
      m = Math.pow(10, Math.max(r1, r2));

      //cm：俩数小数点位数之差*10

      if (c > 0) {
        var cm = Math.pow(10, c);
        if (r1 > r2) {
          arg1 = Number(arg1.toString().replace(".", ""));
          arg2 = Number(arg2.toString().replace(".", "")) * cm;
        } else {
          arg1 = Number(arg1.toString().replace(".", "")) * cm;
          arg2 = Number(arg2.toString().replace(".", ""));
        }
      } else {
        arg1 = Number(arg1.toString().replace(".", ""));
        arg2 = Number(arg2.toString().replace(".", ""));
      }
      return (arg1 + arg2) / m;
    }
  }, {
    key: "subtract",
    value: function subtract(arg1, arg2) {
      var r1, r2, m, n;
      try {
        r1 = arg1.toString().split(".")[1].length;
      } catch (e) {
        r1 = 0;
      }
      try {
        r2 = arg2.toString().split(".")[1].length;
      } catch (e) {
        r2 = 0;
      }
      m = Math.pow(10, Math.max(r1, r2)); //last modify by deeka //动态控制精度长度
      n = r1 >= r2 ? r1 : r2;
      return ((arg1 * m - arg2 * m) / m).toFixed(n);
    }
  }, {
    key: "Multiply",
    value: function Multiply(arg1, arg2) {
      // 利用字符串去除小数点，求出俩个数字最后需要除以的位数

      var m = 0,
          s1 = arg1.toString(),
          s2 = arg2.toString();
      try {
        m += s1.split(".")[1].length;
      } catch (e) {}
      try {
        m += s2.split(".")[1].length;
      } catch (e) {}
      return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
    }
  }, {
    key: "Divide",
    value: function Divide(arg1, arg2) {
      // 利用字符串去除小数点，求出俩个数字最后需要除以的位数

      var t1, t2, r1, r2;
      try {
        t1 = arg1.toString().split(".")[1].length;
      } catch (e) {
        t1 = 0;
      }
      try {
        t2 = arg2.toString().split(".")[1].length;
      } catch (e) {
        t2 = 0;
      }
      r1 = Number(arg1.toString().replace(".", ""));
      r2 = Number(arg2.toString().replace(".", ""));
      return r1 / r2 * Math.pow(10, t2 - t1);
    }
  }]);

  return Calculate;
}();

var calculate = new Calculate();

exports.default = calculate;
//# sourceMappingURL=calculate.js.map