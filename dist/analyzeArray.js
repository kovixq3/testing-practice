export function analyzeArray(arg) {
  let length = arg.length;
  let average = arg.reduce((p, n) => p + n, 0) / length || 0;
  let min = Math.min(...arg);
  let max = Math.max(...arg);

  return { average, min, max, length };
}
