"use strict";

var _numTostring = require("./numTostring");

var _numTostring2 = _interopRequireDefault(_numTostring);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * @author 和霁
                                                                                                                                                           * @date 2017-11-15
                                                                                                                                                           */

var CalSimple = function CalSimple() {
    var _this = this;

    _classCallCheck(this, CalSimple);

    this.add = function (arg1, arg2) {
        var argR1 = (0, _numTostring2.default)(arg1);
        var argR2 = (0, _numTostring2.default)(arg2);
        var n1 = argR1.intNum,
            p1 = argR1.precision;
        var n2 = argR2.intNum,
            p2 = argR2.precision;


        var c = Math.abs(p1 - p2);
        var m = Math.pow(10, Math.max(p1, p2));

        if (c > 0) {
            var cm = Math.pow(10, c);
            p1 > p2 ? n2 = n2 * cm : n1 = n1 * cm;
        }
        return (n1 + n2) / m;
    };

    this.sub = function (arg1, arg2) {
        return _this.add(arg1, Number(-arg2));
    };

    this.mul = function (arg1, arg2) {
        var argR1 = (0, _numTostring2.default)(arg1);
        var argR2 = (0, _numTostring2.default)(arg2);
        var n1 = argR1.intNum,
            p1 = argR1.precision;
        var n2 = argR2.intNum,
            p2 = argR2.precision;


        var m = p1 + p2;

        return n1 * n2 / Math.pow(10, m);
    };

    this.div = function (arg1, arg2) {
        var argR1 = (0, _numTostring2.default)(arg1);
        var argR2 = (0, _numTostring2.default)(arg2);
        var n1 = argR1.intNum,
            p1 = argR1.precision;
        var n2 = argR2.intNum,
            p2 = argR2.precision;


        var m = p2 - p1;
        var c = Math.abs(m);
        return m >= 0 ? n1 * Math.pow(10, m) / n2 : n1 / (n2 * Math.pow(10, c));
    };
};

module.exports = new CalSimple();
//# sourceMappingURL=calSimple.js.map