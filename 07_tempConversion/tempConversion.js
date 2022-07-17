const ftoc = function(temp) {
  // [°C] = ([°F] − 32) × 5⁄9;
  let tempCels = (temp - 32) * 5/9;
  return Math.round(tempCels*10)/10;
};

const ctof = function(temp) {
  // [°F] = [°C] × 9⁄5 + 32;
  let tempFarh = (temp*9/5) + 32;
  return Math.round(tempFarh*10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
