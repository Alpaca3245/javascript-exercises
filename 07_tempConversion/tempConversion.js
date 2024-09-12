const convertToCelsius = function(fahrenheit) {
    celsius = (fahrenheit - 32) * 5/9;
    
    // The "* 10) / 10" plus the ".round" rounds it to 1 decimal place
    return Math.round(celsius * 10) / 10; 
};

const convertToFahrenheit = function(celsius) {
   fahrenheit = (celsius * 9/5) + 32;

   // The "* 10) / 10" plus the ".round" rounds it to 1 decimal place
   return Math.round(fahrenheit * 10) / 10 // 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
