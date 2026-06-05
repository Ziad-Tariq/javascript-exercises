const convertToCelsius = function(f) {
  let tempF=((f-32)*5)/9
 
  return  parseFloat(tempF.toFixed(1));
};

const convertToFahrenheit = function(c) {
  let tempC=(c*9)/5 + 32;
  
  return parseFloat(tempC.toFixed(1));
};

convertToCelsius(32)

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
