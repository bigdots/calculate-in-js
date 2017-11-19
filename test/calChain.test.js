var arithmetic = require("arithmetic.js");
var chainCal = arithmetic.chainCal;

var chai = require("chai");
var expect = chai.expect;

describe("测试 chainCal", function() {
    it("(3 + 0.2 - 1)/4*5 = 2.75", function() {
        let r = chainCal(3)
            .add(0.2)
            .sub(1)
            .div(4)
            .mul(5)
            .getValue();
        expect(r).to.be.equal(2.75);
    });
});
