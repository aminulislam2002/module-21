// vibinno sonkhar factorial ber korar niom
// 9 er factorial
// 9! = 9*8*7*6*5*4*3*2*1
function factorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result = result * i;
  }
  return result;
}
const result = factorial(9);
console.log(result);
