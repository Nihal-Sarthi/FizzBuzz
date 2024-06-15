let outputArray = [];
let count;
function fizzBuzz(num) {
  outputArray = [];
  for (count = 1; count < num + 1; count++) {
    if (count % 3 === 0 && count % 5 === 0) {
      outputArray.push("FizzBuzz");
    } else if (count % 3 === 0) {
      outputArray.push("Fizz");
    } else if (count % 5 === 0) {
      outputArray.push("Buzz");
    } else {
      outputArray.push(count);
    }
  }
  return outputArray;
}
