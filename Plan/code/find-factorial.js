function findFactorial(number) {
  if (number === 0) {
    return 1;
  } else {
    return number * findFactorial(number - 1);
  }
}

console.log(findFactorial(3));
