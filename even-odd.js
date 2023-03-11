// even mane jor
// odd maen bi-jor

// Is even example
// kno ekta sonkha k 2 dia vag korle vagses jodi 0 hoy to seti jor sonkha

// Example 01

// function isEven(number) {
//   const remainder = number % 2;
//   console.log(remainder);
// }
// isEven(45)

// Example 01.1

// function isEven(number) {
//   const remainder = number % 2;
//   if (remainder === 0) {
//     console.log("The number is Even");
//   } else {
//     console.log("The number is Odd");
//   }
// }
// isEven(50);

// Example 01.2

function isEven(number) {
  const remainder = number % 2;
  if (remainder === 0) {
    return true;
  } else {
    return false;
  }
}
const myNumberIsEven = isEven(500);
console.log(myNumberIsEven);
const herNumberIsEven = isEven(551);
console.log(herNumberIsEven);

// Is odd example
// kno ekta sonkha k 2 dia vag korle vagses jodi 1 hoy to seti bi-jor sonkha
