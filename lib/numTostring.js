"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function numToString(num) {
    var precision, numString;
    try {
        numString = num.toString();
        precision = numString.split(".")[1].length;
    }
    catch (e) {
        precision = 0;
    }
    return {
        intNum: Number(numString.replace(".", "")),
        precision: precision
    };
}
exports.default = numToString;
//# sourceMappingURL=numTostring.js.map