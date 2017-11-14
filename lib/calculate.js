"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function numToString(arg) {
  var l = void 0;
  try {
    l = arg.toString().split(".")[1].length;
  } catch (e) {
    l = 0;
  }

  return {
    numString: Number(arg.toString().replace(".", "")),
    decimalLen: l
  };
}

var Calculate = function () {
  function Calculate() {
    _classCallCheck(this, Calculate);
  }

  _createClass(Calculate, [{
    key: "add",
    value: function add(arg1, arg2) {
      // 利用字符串去除小数点，给小数位少的数字补全位数，求出俩个数字最后需要除以的位数
      var argR1 = numToString(arg1);
      var argR2 = numToString(arg2);

      console.error(argR1);
      console.error(argR2);

      var num1 = argR1.numString,
          l1 = argR1.decimalLen,
          num2 = argR2.numString,
          l2 = argR2.decimalLen;

      var c = Math.abs(l1 - l2);
      var m = Math.pow(10, Math.max(l1, l2));
      //cm：俩数小数点位数之差*10
      if (c > 0) {
        var cm = Math.pow(10, c);
        r1 > r2 ? num2 = num2 * cm : num1 = num1 * cm;
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
        r1 > r2 ? num2 = num2 * cm : num1 = num1 * cm;
      }

      return (num1 - num2) / m;
    }
  }, {
    key: "multiply",
    value: function multiply(arg1, arg2) {
      // 利用字符串去除小数点，求出俩个数字最后需要除以的位数
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
      // 利用字符串去除小数点，求出俩个数字最后需要除以的位数
      var argR1 = numToString(arg1);
      var argR2 = numToString(arg2);

      var num1 = argR1.numString,
          l1 = argR1.decimalLen,
          num2 = argR2.numString,
          l2 = argR2.decimalLen;

      var m = l2 - l1;

      return num1 / num2 * Math.pow(10, m);
    }
  }]);

  return Calculate;
}();

var calculator = new Calculate();

exports.default = calculator;
//# sourceMappingURL=calculate.js.map