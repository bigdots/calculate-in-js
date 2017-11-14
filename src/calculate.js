
function numToString(arg) {
  let l;
  try {
    l = arg.toString().split(".")[1].length;
  } catch (e) {
    l = 0;
  }

  return {
    numString: Number(arg.toString().replace(".", "")),
    decimalLen: l
  };
}



class Calculate {

  add(arg1, arg2) {
    // 利用字符串去除小数点，给小数位少的数字补全位数，求出俩个数字最后需要除以的位数
    let argR1 = numToString(arg1);
    let argR2 = numToString(arg2);

    let num1 = argR1.numString,
      l1 = argR1.decimalLen,
      num2 = argR2.numString,
      l2 = argR2.decimalLen;

    let c = Math.abs(l1 - l2);
    let m = Math.pow(10, Math.max(l1, l2));
    //cm：俩数小数点位数之差*10
    if (c > 0) {
      var cm = Math.pow(10, c);
      r1 > r2 ? (num2 = num2 * cm) : (num1 = num1 * cm);
    }
    return (num1 + num2) / m;
  }

  subtract(arg1, arg2) {
    let argR1 = numToString(arg1);
    let argR2 = numToString(arg2);

    let num1 = argR1.numString,
      l1 = argR1.decimalLen,
      num2 = argR2.numString,
      l2 = argR2.decimalLen;

    let c = Math.abs(l1 - l2);
    let m = Math.pow(10, Math.max(l1, l2));
    //cm：俩数小数点位数之差*10
    if (c > 0) {
      var cm = Math.pow(10, c);
      r1 > r2 ? (num2 = num2 * cm) : (num1 = num1 * cm);
    }

    return (num1 - num2) / m;
  }

  multiply(arg1, arg2) {
    // 利用字符串去除小数点，求出俩个数字最后需要除以的位数
    let argR1 = numToString(arg1);
    let argR2 = numToString(arg2);

    let num1 = argR1.numString,
      l1 = argR1.decimalLen,
      num2 = argR2.numString,
      l2 = argR2.decimalLen;

    let m = l1 + l2;

    return num1 * num2 / Math.pow(10, m);
  }

  divide(arg1, arg2) {
    // 利用字符串去除小数点，求出俩个数字最后需要除以的位数
    let argR1 = numToString(arg1);
    let argR2 = numToString(arg2);

    let num1 = argR1.numString,
      l1 = argR1.decimalLen,
      num2 = argR2.numString,
      l2 = argR2.decimalLen;

    let m = l2 - l1;

    return num1 / num2 * Math.pow(10, m);
  }
}

const calculator = new Calculate();

export default calculator;
