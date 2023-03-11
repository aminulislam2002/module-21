// 1 thek 7 porjonto gun
function multiplicationNumbers(number) {
  let multiplication = 1;
  for (let i = 1; i < number; i++) {
    multiplication = multiplication * i;
  }
  return multiplication;
}
const multiplication = multiplicationNumbers(9);
console.log(multiplication);
