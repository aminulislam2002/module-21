// kno ekta array er er element gulo k kivabe sum ba jog korte hoy tar niom
function getSumOfAnArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    // myNumbers array er index
    const index = i;
    // myNumbers array er element
    const element = numbers[index];
    // myNumbers array er sum
    sum = sum + element;
    // console.log(index, element, sum);
  }
  return sum;
}

// kno ekta arry er odd ba bi-jor sonkhar jog fol ber korar niom
function getOddNumbersOffAnArray(numbers) {
  const oddNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    if (element % 2 !== 0) {
      oddNumbers.push(element);
    //   console.log(index, element);
    }
  }
  return oddNumbers;
}

const myNumbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
const oddNumbers = getOddNumbersOffAnArray(myNumbers);
console.log(oddNumbers);
const oddNumberSum = getSumOfAnArray(oddNumbers);
console.log(oddNumberSum);
