// math.js
// `exports.add = ...`
const math = require("./math");
console.log(math); // { add: [Function] }

const sum = math.add(1, 2);
console.log(sum); // 3

// only-subtract.js
// `module.exports = ...`
const subtract = require("./only-subtract");

const deduction = subtract(10, 5);
console.log(deduction); // 5

// only-multiply.js
// `function multiply() { ...`
// `module.exports = multiply;`
const multiply = require("./only-multiply");

const multiplied = multiply(5, 5);
console.log(multiplied); // 25
