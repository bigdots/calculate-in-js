"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 利用字符串去除小数点
 * @param {*} arg 待处理的数据
 * @return {*} numString 去除小数点转化得到的整数
 * @return {*} decimalLen 数字精度
 */
function numToString(arg) {
  var precision = void 0,
      numString = void 0;
  try {
    numString = arg.toString();
    precision = numString.split(".")[1].length;
  } catch (e) {
    precision = 0;
  }

  return {
    num: Number(numString.replace(".", "")),
    precision: precision
  };
}

var Arithmetic = function () {
  function Arithmetic() {
    _classCallCheck(this, Arithmetic);
  }

  _createClass(Arithmetic, [{
    key: "add",
    value: function add(arg1, arg2) {
      var argR1 = numToString(arg1);
      var argR2 = numToString(arg2);
      var n1 = argR1.num,
          p1 = argR1.precision;
      var n2 = argR2.num,
          p2 = argR2.precision;


      var c = Math.abs(p1 - p2);
      var m = Math.pow(10, Math.max(p1, p2));

      if (c > 0) {
        var cm = Math.pow(10, c);
        p1 > p2 ? n2 = n2 * cm : n1 = n1 * cm;
      }
      return (n1 + n2) / m;
    }
  }, {
    key: "subtract",
    value: function subtract(arg1, arg2) {
      var argR1 = numToString(arg1);
      var argR2 = numToString(arg2);
      var n1 = argR1.num,
          p1 = argR1.precision;
      var n2 = argR2.num,
          p2 = argR2.precision;


      var c = Math.abs(p1 - p2);
      var m = Math.pow(10, Math.max(p1, p2));

      if (c > 0) {
        var cm = Math.pow(10, c);
        p1 > p2 ? n2 = n2 * cm : n1 = n1 * cm;
      }

      return (n1 - n2) / m;
    }
  }, {
    key: "multiply",
    value: function multiply(arg1, arg2) {
      var argR1 = numToString(arg1);
      var argR2 = numToString(arg2);
      var n1 = argR1.num,
          p1 = argR1.precision;
      var n2 = argR2.num,
          p2 = argR2.precision;


      var m = p1 + p2;

      return n1 * n2 / Math.pow(10, m);
    }
  }, {
    key: "divide",
    value: function divide(arg1, arg2) {
      var argR1 = numToString(arg1);
      var argR2 = numToString(arg2);
      var n1 = argR1.num,
          p1 = argR1.precision;
      var n2 = argR2.num,
          p2 = argR2.precision;


      var m = p2 - p1;
      var c = Math.abs(m);
      return m >= 0 ? n1 * Math.pow(10, m) / n2 : n1 / (n2 * Math.pow(10, c));
    }
  }]);

  return Arithmetic;
}();

module.exports = new Arithmetic();
//# sourceMappingURL=arithmetic.js.map