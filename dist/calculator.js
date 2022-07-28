export { calculator };

const add = (a, b) => (typeof (a + b) !== "number" ? NaN : a + b);
const subtract = (a, b) => a - b;
const divide = (a, b) => a / b;
const multiply = (a, b) => a * b;

const calculator = { add, subtract, divide, multiply };
