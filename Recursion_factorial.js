// Write two functions that finds the factorial of any
// number. One should use recursive, the other should just use a for loop.

function findFactorialResursive(number) {
  if (number === 2) {
    return 2;
  }
  return number * findFactorialResursive(number - 1);
}

console.log(findFactorialResursive(5));

function findFactorialIterative(number) {
  let answer = 1;
  if (number === 2) {
    answer = 2;
  }
  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }

  return answer;
}

console.log(findFactorialIterative(5));
