"use strict";

var _index = require("../index");

var _index2 = _interopRequireDefault(_index);

var _chai = require("chai");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var add = _index2.default.add,
    subtract = _index2.default.subtract,
    multiply = _index2.default.multiply,
    divide = _index2.default.divide;


describe("加法函数的测试", function () {
  it("0.1 +  0.2 = 0.3", function () {
    (0, _chai.expect)(add(0.1, 0.2)).to.be.equal(0.3);
  });
});

describe("减法函数的测试", function () {
  it("1 - 0.33 = 0.67", function () {
    (0, _chai.expect)(subtract(1, 0.33)).to.be.equal(0.67);
  });
});

describe("乘法法函数的测试", function () {
  it("0.56 乘以 100 应该等于 56", function () {
    (0, _chai.expect)(multiply(0.56, 100)).to.be.equal(56);
  });
});

describe("除法法函数的测试", function () {
  it("2 除以 1 应该等于 2", function () {
    (0, _chai.expect)(divide(2, 1)).to.be.equal(2);
  });
});
