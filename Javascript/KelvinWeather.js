//The forecast today is 293 Kelvin
const kelvin = 293;
//convert Kelvin to Celsius by subtracting 273 from the kelvin
const celsius = kelvin - 273;
//equation to calculate Fahrenheit,
let fahrenheit = celsius * (9/5) + 32;
//round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
