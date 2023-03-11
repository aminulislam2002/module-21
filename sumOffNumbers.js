// 1 theke 7 porjonto sonkha sum ba jog
// let sum = 0;
// for (let i = 1; i <= 7; i++) {
//   sum = sum + i;
//   console.log(i, sum);
// }

// fucntion dia 1 theke 7 porjonto sonkha sum ba jog
function sumOfNumbers(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum = sum + i;
    // console.log(i, sum);
  }
  return sum;
}
const sum = sumOfNumbers(7);
console.log(sum); // return 28
