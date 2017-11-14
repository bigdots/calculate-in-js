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
  it("0.1 加 0.2 应该等于 0.3", function () {
    (0, _chai.expect)(add(0.1, 0.2)).to.be.equal(0.3);
  });
});

describe("减法函数的测试", function () {
  it("2 减 1 应该等于 1", function () {
    (0, _chai.expect)(subtract(2, 1)).to.be.equal(1);
  });
});

describe("乘法法函数的测试", function () {
  it("2 乘以 1 应该等于 2", function () {
    (0, _chai.expect)(multiply(2, 1)).to.be.equal(2);
  });
});

describe("除法法函数的测试", function () {
  it("2 除以 1 应该等于 2", function () {
    (0, _chai.expect)(divide(2, 1)).to.be.equal(2);
  });
});
