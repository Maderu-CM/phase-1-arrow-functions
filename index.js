// index.js

// Function expression: divide
const divide = () => {
    return 2000 / 100;
  };
  console.log(divide);
  
  // Arrow function: square
  const square = (num) => {
    return num * num;
  };
  
  // Arrow function: add
  const add = (a, b) => {
    return a + b;
  };
  
  module.exports = { divide, square, add };
  