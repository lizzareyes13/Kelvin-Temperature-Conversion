//variable "kelvin" will not be subject to change.
const kelvin = 293;
// celsius is 273 less than kelvin.
var celsius = kelvin - 273;
//formula for fahrenheit.
//round fahrenheit to the nearest whole number.
let fahrenheit = celsius*(9/5)+32;

fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//converts celsius to newton
let newton = celsius*(33/100);

newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);
