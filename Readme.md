
# arithmetic.js

A small library for mathematical operation in Javascript. only include:

+ add (+)
+ sub (-)
+ mul (*)
+ div (/)


[![Travis](https://img.shields.io/travis/rust-lang/rust.svg)]()
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()


## Usage

arithmetic.js is easiest to use when installed with npm:

```cmd
npm install arithmetic.js
```

Then you can load the module into your code with a `import` or `require` call:

```js
import arithmetic from "arithmetic.js";

var arithmetic = require("../index");
```

Now, you can use it:

```js

var smpCal = arithmetic.smpCal;

smpCal.add(0.1,0.2) //0.3
smpCal.sub(2,1) //3
smpCal.mul(2,2) //4
smpCal.div(6,3) //2
```

```js
var chainCal = arithmetic.chainCal;

// (3 + 0.2 - 1)/4*5
chainCal(3).add(0.2).sub(1).div(4).mul(5).getValue(); // 2.75
```


## Note
arithmetic.js do not support big Number;

## License
MIT

