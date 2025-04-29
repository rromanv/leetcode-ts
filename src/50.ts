/**
 * 50. Pow(x, n)
 * https://leetcode.com/problems/powx-n/
 * Medium
 *
 * Implements pow(x, n), which calculates x raised to the power n (i.e., x^n)
 *
 * Algorithm: Recursive Binary Exponentiation
 * Time Complexity: O(log n)
 * Space Complexity:
 *
 * @param {number} x - The base number
 * @param {number} n - The exponent (can be negative)
 * @return {number} - x raised to the power of n
 */
function myPow2(x: number, n: number): number {
  if (n === 0) return 1
  if (x === 0) return 0

  if (n < 0) return myPow(1 / x, -n)

  if (n % 2 === 0) return myPow(x * x, n / 2)

  return x * myPow(x, n - 1)
}

function myPow(x: number, n: number): number {
  if (n === 0) return 1
  if (x === 0) return 0

  let N = Math.abs(n)

  let result = 1
  while (N > 0) {
    if (N % 2 === 1) result *= x
    if (N > 1) x *= x
    N = Math.floor(N / 2)
  }

  return n < 0 ? 1 / result : result
}

export { myPow }
