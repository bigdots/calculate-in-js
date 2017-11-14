import calculator from "../index";

import { expect } from "chai";

const { add, subtract, multiply, divide } = calculator;

describe("加法函数的测试", function() {
  it("0.1 加 0.2 应该等于 0.3", function() {
    expect(add(0.1, 0.2)).to.be.equal(0.3);
  });
});

describe("减法函数的测试", function() {
  it("2 减 1 应该等于 1", function() {
    expect(subtract(2, 1)).to.be.equal(1);
  });
});

describe("乘法法函数的测试", function() {
  it("2 乘以 1 应该等于 2", function() {
    expect(multiply(2, 1)).to.be.equal(2);
  });
});

describe("除法法函数的测试", function() {
  it("2 除以 1 应该等于 2", function() {
    expect(divide(2, 1)).to.be.equal(2);
  });
});
