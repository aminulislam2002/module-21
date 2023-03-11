const oneFeet = 12;
const myInch = 24;
let myFeet = myInch / oneFeet;
console.log(myFeet);

function inchToFeet(inches) {
  const oneFeet = 12;
  const feet = inches / oneFeet;
  return feet;
}
const dadaInches = 144;
const dadaFeet = inchToFeet(dadaInches);
console.log(dadaFeet);

const dadiInches = 100;
const dadiFeet = inchToFeet(dadiInches);
console.log(dadiFeet);

function mileToKiloMiter(miles) {
  const kilomiter = miles * 1.609;
  return kilomiter;
}
const mathbariaToDhakaMiles = 205;
const mathbariaToDhakaKiloMiters = mileToKiloMiter(mathbariaToDhakaMiles);
console.log(mathbariaToDhakaKiloMiters);
