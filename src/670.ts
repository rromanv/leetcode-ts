/**
 * 670. Maximum Swap
 * https://leetcode.com/problems/maximum-swap
 * Medium
 *
 * You are given an integer num. You can swap two digits at most once to get the maximum valued number.
 * Return the maximum valued number you can get.
 *
 * Algorithm:
 * 1. Convert number to array of digits
 * 2. Create a map to store the last position of each digit (0-9)
 * 3. For each position from left to right:
 *    - Look for the largest digit (9 down to current digit) that appears later
 *    - If found, swap the current digit with the last occurrence of the larger digit
 *    - Return the result immediately after the first swap
 * 4. If no swap is made, return the original number
 * Time Complexity: O(d) where d is the digits of nums
 * Space Complexity: O(1) because we use a fixed size array
 *
 * @param {number} num - The input integer
 * @return {number} - The maximum possible value after at most one swap of digits
 */
function maximumSwap(num: number): number {
  if (num < 10) return num

  const digits = String(num).split('').map(Number)
  const lastPos = new Array(10).fill(-1)

  for (let i = 0; i < digits.length; i++) {
    lastPos[digits[i]] = i
  }

  for (let index = 0; index < digits.length; index++) {
    for (let digit = 9; digit > digits[index]; digit--) {
      if (lastPos[digit] > index) {
        ;[digits[index], digits[lastPos[digit]]] = [digits[lastPos[digit]], digits[index]]
        return Number(digits.join(''))
      }
    }
  }

  return num
}

export { maximumSwap }
