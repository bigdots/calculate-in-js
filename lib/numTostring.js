"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = numToString;


/**
 * 利用字符串去除小数点
 * @param {*} num 待处理的数据
 * @return {*} numString 去除小数点转化得到的整数
 * @return {*} decimalLen 数字精度
 */
function numToString(num) {
    var precision = void 0,
        numString = void 0;
    try {
        numString = num.toString();
        precision = numString.split(".")[1].length;
    } catch (e) {
        precision = 0;
    }

    return {
        intNum: Number(numString.replace(".", "")).toFixed(0),
        precision: precision
    };
}
//# sourceMappingURL=numTostring.js.map