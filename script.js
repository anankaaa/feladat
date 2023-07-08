function factorial(number) {
  let result = 1;
  while (number > 1) {
    result *= number;
    number -= 1;
  }
  return result;
}

export function feladat01(szinek) {
  let n = szinek.length;
  let result = 0;
  if (szinek.length > 1) {
    for (let i = 2; i <= n; i++) {
      result += factorial(n) / (factorial(i) * factorial(n - i));
    }
  }
  return result;
}
