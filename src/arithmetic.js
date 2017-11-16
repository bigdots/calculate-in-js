
/**
 * @author 和霁
 * @date 2017-11-15
 */


class Arithmetic {
    constructor(num) {
        this.value = num;
        this.current = this._numToString(num);
    }

    /**
     * 利用字符串去除小数点
     * @param {*} arg 待处理的数据
     * @return {*} numString 去除小数点转化得到的整数
     * @return {*} decimalLen 数字精度
     * -----------------------------------------------------------------
     */
    _numToString(arg) {
        let l, numString;
        try {
            numString = arg.toString();
            l = numString.split(".")[1].length;
        } catch (e) {
            l = 0;
        }

        return {
            numString: Number(numString.replace(".", "")),
            decimalLen: l
        };
    }

    add(num) {
        let next = this._numToString(num);

        const { numString: n1, decimalLen: l1 } = this.current;
        const { numString: n2, decimalLen: l2 } = next;

        let c = Math.abs(l1 - l2);
        let m = Math.pow(10, Math.max(l1, l2));
        //cm：俩数小数点位数之差*10
        if (c > 0) {
            var cm = Math.pow(10, c);
            l1 > l2 ? (n2 = n2 * cm) : (n1 = n1 * cm);
        }
        this.value = (n1 + n2) / m;

        this.current = this._numToString(this.value);

        return this;
    }

    sub(num) {
        this.add(-num);
    }

    mul(num) {
        let next = this._numToString(num);

        const { numString: n1, decimalLen: l1 } = this.current;
        const { numString: n2, decimalLen: l2 } = next;

        let m = l1 + l2;

        this.value = n1 * n2 / Math.pow(10, m);

        this.current = this._numToString(this.value);

        return this;
    }

    div(num) {
        let next = this._numToString(num);

        const { numString: n1, decimalLen: l1 } = this.current;
        const { numString: n2, decimalLen: l2 } = next;

        let m = l2 - l1;
        let c = Math.abs(m);

        this.value =
            m >= 0 ? n1 * Math.pow(10, m) / n2 : n1 / (n2 * Math.pow(10, c));

        this.current = this._numToString(this.value);

        return this;
    }

    getValue() {
        return this.value;
    }
}

export default Arithmetic;

// module.exports = new Arithmetic();
