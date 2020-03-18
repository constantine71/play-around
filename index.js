function fn(n, a = 1) {
  if (n < 0) return 0;
  if (n === 0) return 1;
  if (n === 1) return a;
  return fn(n - 1, a * n);
}

console.log(fn(4));
