/**
 * 利用字符串去除小数点
 * @param {*} arg 待处理的数据
 * @return {*} numString 去除小数点转化得到的整数
 * @return {*} decimalLen 数字精度
 */
function numToString(arg) {
  let precision, numString;
  try {
    numString = arg.toString();
    precision = numString.split(".")[1].length;
  } catch (e) {
    precision = 0;
  }

  return {
    num: Number(numString.replace(".", "")),
    precision
  };
}

class Arithmetic {
  add(arg1, arg2) {
    let argR1 = numToString(arg1);
    let argR2 = numToString(arg2);
    let { num: n1, precision: p1 } = argR1;
    let { num: n2, precision: p2 } = argR2;

    let c = Math.abs(p1 - p2);
    let m = Math.pow(10, Math.max(p1, p2));

    if (c > 0) {
      var cm = Math.pow(10, c);
      p1 > p2 ? (n2 = n2 * cm) : (n1 = n1 * cm);
    }
    return (n1 + n2) / m;
  }

  subtract(arg1, arg2) {
    let argR1 = numToString(arg1);
    let argR2 = numToString(arg2);
    let { num: n1, precision: p1 } = argR1;
    let { num: n2, precision: p2 } = argR2;

    let c = Math.abs(p1 - p2);
    let m = Math.pow(10, Math.max(p1, p2));

    if (c > 0) {
      var cm = Math.pow(10, c);
      p1 > p2 ? (n2 = n2 * cm) : (n1 = n1 * cm);
    }

    return (n1 - n2) / m;
  }

  multiply(arg1, arg2) {
    let argR1 = numToString(arg1);
    let argR2 = numToString(arg2);
    let { num: n1, precision: p1 } = argR1;
    let { num: n2, precision: p2 } = argR2;

    let m = p1 + p2;

    return n1 * n2 / Math.pow(10, m);
  }

  divide(arg1, arg2) {
    let argR1 = numToString(arg1);
    let argR2 = numToString(arg2);
    let { num: n1, precision: p1 } = argR1;
    let { num: n2, precision: p2 } = argR2;

    let m = p2 - p1;
    let c = Math.abs(m);
    return m >= 0 ? n1 * Math.pow(10, m) / n2 : n1 / (n2 * Math.pow(10, c));
  }
}

module.exports = new Arithmetic();
