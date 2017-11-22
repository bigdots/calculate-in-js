/**
 * 利用字符串去除小数点
 * @param {*} num 待处理的数据
 * @return {*} numString 去除小数点转化得到的整数
 * @return {*} decimalLen 数字精度
 */
export default function numToString(num: number) {
    let precision: number, numString: string;
    try {
        numString = num.toString();
        precision = numString.split(".")[1].length;
    } catch (e) {
        precision = 0;
    }

    return {
        intNum: Number(numString.replace(".", "")),
        precision
    };
}
