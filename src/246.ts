/**
 * 246. Strobogrammatic Number
 * {@link https://leetcode.com/problems/strobogrammatic-number/ | Link}
 * Difficulty: Easy
 *
 * A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).
 * Write a function to determine if a number is strobogrammatic. The number is represented as a string.
 *
 * Algorithm: Two Pointers
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 *
 * @param {string} num The number represented as a string.
 * @returns {boolean} True if the number is strobogrammatic, false otherwise.
 */
function isStrobogrammatic(num: string): boolean {
  const strobMap: { [key: string]: string } = {
    '0': '0',
    '1': '1',
    '6': '9',
    '8': '8',
    '9': '6',
  }

  let left = 0
  let right = num.length - 1

  while (left <= right) {
    const charLeft = num[left]
    const charRight = num[right]

    if (!(charLeft in strobMap) || strobMap[charLeft] !== charRight) {
      return false
    }

    left++
    right--
  }

  return true
}

export { isStrobogrammatic }
