"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var calculate_1 = require("./calculate");
var ChainCal = (function (_super) {
    __extends(ChainCal, _super);
    function ChainCal(num) {
        var _this = _super.call(this) || this;
        _this.value = num;
        return _this;
    }
    ChainCal.prototype.add = function (arg1, arg2) {
        if (arg1 === void 0) { arg1 = this.value; }
        return _super.prototype.add.call(this, arg1, arg2);
    };
    ChainCal.prototype.getValue = function () {
        return this.value;
    };
    return ChainCal;
}(calculate_1.default));
function default_1(num) {
    return new ChainCal(num);
}
exports.default = default_1;
//# sourceMappingURL=chainCal.js.map