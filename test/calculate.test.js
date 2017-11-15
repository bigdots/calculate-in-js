import calculator from "../index";

import { expect } from "chai";

const { add, subtract, multiply, divide } = calculator;

describe("加法函数的测试", function() {
  it("0.1 +  0.2 = 0.3", function() {
    expect(add(0.1, 0.2)).to.be.equal(0.3);
  });
});

describe("减法函数的测试", function() {
  it("1 - 0.33 = 0.67", function() {
    expect(subtract(1, 0.33)).to.be.equal(0.67);
  });
});

describe("乘法法函数的测试", function() {
  it("0.56 乘以 100 应该等于 56", function() {
    expect(multiply(0.56, 100)).to.be.equal(56);
  });
});

describe("除法法函数的测试", function() {
  it("2 除以 1 应该等于 2", function() {
    expect(divide(2, 1)).to.be.equal(2);
  });
});
