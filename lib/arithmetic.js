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
  var l = void 0,
      numString = void 0;
  try {
    numString = arg.toString();
    l = numString.split(".")[1].length;
  } catch (e) {
    l = 0;
  }

  return {
    numString: Number(numString.replace(".", "")),
    decimalLen: l
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

      var num1 = argR1.numString,
          l1 = argR1.decimalLen,
          num2 = argR2.numString,
          l2 = argR2.decimalLen;

      var c = Math.abs(l1 - l2);
      var m = Math.pow(10, Math.max(l1, l2));
      //cm：俩数小数点位数之差*10
      if (c > 0) {
        var cm = Math.pow(10, c);
        l1 > l2 ? num2 = num2 * cm : num1 = num1 * cm;
      }
      return (num1 + num2) / m;
    }
  }, {
    key: "subtract",
    value: function subtract(arg1, arg2) {
      var argR1 = numToString(arg1);
      var argR2 = numToString(arg2);

      var num1 = argR1.numString,
          l1 = argR1.decimalLen,
          num2 = argR2.numString,
          l2 = argR2.decimalLen;

      var c = Math.abs(l1 - l2);
      var m = Math.pow(10, Math.max(l1, l2));
      //cm：俩数小数点位数之差*10
      if (c > 0) {
        var cm = Math.pow(10, c);
        l1 > l2 ? num2 = num2 * cm : num1 = num1 * cm;
      }

      return (num1 - num2) / m;
    }
  }, {
    key: "multiply",
    value: function multiply(arg1, arg2) {
      var argR1 = numToString(arg1);
      var argR2 = numToString(arg2);

      var num1 = argR1.numString,
          l1 = argR1.decimalLen,
          num2 = argR2.numString,
          l2 = argR2.decimalLen;

      var m = l1 + l2;

      return num1 * num2 / Math.pow(10, m);
    }
  }, {
    key: "divide",
    value: function divide(arg1, arg2) {
      var argR1 = numToString(arg1);
      var argR2 = numToString(arg2);

      var num1 = argR1.numString,
          l1 = argR1.decimalLen,
          num2 = argR2.numString,
          l2 = argR2.decimalLen;

      var m = l2 - l1;
      var c = Math.abs(m);
      return m >= 0 ? num1 * Math.pow(10, m) / num2 : num1 / (num2 * Math.pow(10, c));
    }
  }]);

  return Arithmetic;
}();

module.exports = new Arithmetic();
//# sourceMappingURL=arithmetic.js.map