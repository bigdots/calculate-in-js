/**
 * @author 和霁
 * @date 2017-11-15
 */

import Calculate from "./calculate";

class ChainCal extends Calculate {
    private value: number;
    private current: any;

    constructor(num: number) {
        super();
        this.value = num;
        // this.current = _numToString(num);
    }

    add(arg1 = this.value, arg2: number) {
        return super.add(arg1, arg2);
    }

    getValue() {
        return this.value;
    }
}

export default function(num: number) {
    return new ChainCal(num);
}
