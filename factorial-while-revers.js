function factorial(number) {
  let num = number;
  let result = 1;
  while (num >= 1) {
    result = result * num;
    num--;
  }
  return result;
}
const number = 7;
const result = factorial(number);
console.log(result);
