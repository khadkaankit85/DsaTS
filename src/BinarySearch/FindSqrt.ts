/*
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
You must not use any built-in exponent function or operator.
For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 */
function mySqrt(target: number): number {
  if (target == 0) return 0;
  let start = 1;
  let end = Math.floor(target / 2);

  let mid = Math.floor(start + (end - start) / 2);

  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);
    if (mid * mid == target) {
      return mid;
    } else if (mid * mid < target && (mid + 1) * (mid + 1) > target) {
      return mid;
    } else if (mid * mid < target) {
      start = mid + 1;
    } else if (mid * mid > target) {
      end = mid - 1;
    }
  }
  return 1;
}
console.log(mySqrt(9));
