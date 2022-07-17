const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	let sum = 0;
  for(const i of arr){
    sum += i;
  }
  return sum;
};

const multiply = function(arr) {
  let multiply = 1;
  for(const i of arr){
    multiply *= i;
  }
  return multiply;
};

const power = function(a,b) {
  let result = 1;
  for(let i = 1; i<= b; i++){
    result *= a;
  }
  return result;
};

const factorial = function(num) {
	if (num ===0 || num ===1) return 1;
  else{
    let fact = 1;
    for (let i=1; i<=num; i++){
      fact *= i; 
    }
    return fact;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
