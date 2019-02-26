function getFibonacciNumber(index) {
  if (index <= 1) return 1;

  return getFibonacciNumber(index - 1) + getFibonacciNumber(index - 2);
}

console.log(getFibonacciNumber(1));
