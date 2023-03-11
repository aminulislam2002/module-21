// Example 1

// function isLeepYear(year) {
//   const remainder = year % 4;
//   if (remainder === 0) {
//     console.log("Your year is leep year", year);
//   } else {
//     console.log("Your year is not leep year", year);
//   }
// }
// let year = 2022;
// isLeepYear(year);

// Example 2
// function isLeepYear(year) {
//   const remainder = year % 4;
//   if (remainder === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// let year = 2020;
// const isYearIsLeepYear = isLeepYear(year);
// console.log(isYearIsLeepYear);

// Example 2.1
function isLeepYear(year) {
  const remainder = year % 4;
  if (remainder === 0) {
    return true;
  }
  return false;
}
let year = 2021;
const isYearIsLeepYear = isLeepYear(year);
console.log(isYearIsLeepYear);
