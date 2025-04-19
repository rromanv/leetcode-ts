/**
 * 66. Plus One
 * https://leetcode.com/problems/plus-one
 * Difficulty: Easy
 *
 * You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer.
 * The digits are ordered from most significant to least significant in left-to-right order.
 * The large integer does not contain any leading 0's.
 * Increment the large integer by one and return the resulting array of digits.
 *
 * Algorithm: Iterate from right to left. Increment digit. If < 10, return. If == 10, set to 0 and continue. Prepend 1 if loop finishes.
 * Time Complexity: O(N) - In the worst case (all 9s), we iterate through all digits.
 * Space Complexity: O(1) - Modifies the array in-place. O(N) if a new array is created when prepending 1, but typically considered O(1) auxiliary space.
 *
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne(digits: number[]): number[] {
  const n = digits.length

  for (let i = n - 1; i >= 0; i--) {
    digits[i]++

    if (digits[i] < 10) {
      return digits
    } else {
      digits[i] = 0
    }
  }

  return [1, ...digits]
}

export { plusOne }
