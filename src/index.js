/**
 * @author 和霁
 * @date 2017-11-15
 */

//  再增加一个功能，支持单链调用;

import Arithmetic from "./arithmetic";

module.exports = function(arg) {
    return new Arithmetic(arg);
};
