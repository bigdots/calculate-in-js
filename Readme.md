
# Arithmetic.js

A small library for mathematical operation in Javascript. only include:

+ add
+ subtract
+ multiply
+ divide


[![Travis](https://img.shields.io/travis/rust-lang/rust.svg)]()
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()


## Usage

arithmetic.js is easiest to use when installed with npm:

``` cmd
npm install arithmetic.js
```

Then you can load the module into your code with a 'import' call:

``` js
import Arithmetic from "arithmetic.js";
```

Now, you can use it:

``` js
const { add, subtract, multiply, divide } = Arithmetic;

add(0.1,0.2) //0.3
subtract(2,1) //3
multiply(2,2) //4
divide(6,3) //2
```

## License
MIT

