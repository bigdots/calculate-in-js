"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author 和霁
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @date 2017-11-15
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

exports.default = function (num) {
    return new ChainCal(num);
};

var _numTostring = require("./numTostring");

var _numTostring2 = _interopRequireDefault(_numTostring);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChainCal = function () {
    function ChainCal(num) {
        _classCallCheck(this, ChainCal);

        this.value = num;
        this.current = (0, _numTostring2.default)(num);
    }

    _createClass(ChainCal, [{
        key: "_argCheck",
        value: function _argCheck(arg) {
            if (typeof arg === "undefined") {
                throw "parameters are missing";
            }

            if (typeof arg !== "number") {
                throw arg + " is not a number ";
            }
        }
    }, {
        key: "add",
        value: function add(num) {
            this._argCheck(num);
            var next = (0, _numTostring2.default)(num);

            var _current = this.current,
                n1 = _current.intNum,
                l1 = _current.precision;
            var n2 = next.intNum,
                l2 = next.precision;


            var c = Math.abs(l1 - l2);
            var m = Math.pow(10, Math.max(l1, l2));
            //cm：俩数小数点位数之差*10
            if (c > 0) {
                var cm = Math.pow(10, c);
                l1 > l2 ? n2 = n2 * cm : n1 = n1 * cm;
            }
            this.value = (n1 + n2) / m;

            this.current = (0, _numTostring2.default)(this.value);

            return this;
        }
    }, {
        key: "sub",
        value: function sub(num) {
            this._argCheck(num);
            return this.add(-num);
        }
    }, {
        key: "mul",
        value: function mul(num) {
            this._argCheck(num);
            var next = (0, _numTostring2.default)(num);

            var _current2 = this.current,
                n1 = _current2.intNum,
                l1 = _current2.precision;
            var n2 = next.intNum,
                l2 = next.precision;


            var m = l1 + l2;

            this.value = n1 * n2 / Math.pow(10, m);

            this.current = (0, _numTostring2.default)(this.value);

            return this;
        }
    }, {
        key: "div",
        value: function div(num) {
            this._argCheck(num);
            var next = (0, _numTostring2.default)(num);

            var _current3 = this.current,
                n1 = _current3.intNum,
                l1 = _current3.precision;
            var n2 = next.intNum,
                l2 = next.precision;


            var m = l2 - l1;
            var c = Math.abs(m);

            this.value = m >= 0 ? n1 * Math.pow(10, m) / n2 : n1 / (n2 * Math.pow(10, c));

            this.current = (0, _numTostring2.default)(this.value);

            return this;
        }
    }, {
        key: "getValue",
        value: function getValue() {
            return this.value;
        }
    }]);

    return ChainCal;
}();

;
//# sourceMappingURL=chainCal.js.map