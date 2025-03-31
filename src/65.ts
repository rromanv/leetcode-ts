/**
 *  65. Valid Number
 *  https://leetcode.com/problems/valid-number/description/
 *  Hard
 *
 * Validates if a given string is a valid number
 *
 * Algorithm: String parsing and validation
 * Time Complexity: O(n) where n is the length of the input string
 * Space Complexity: O(1) for constant space usage
 *
 * @param {string} s - The string to validate
 * @return {boolean} True if the string is a valid number, false otherwise
 */
function isNumber(s: string): boolean {
  const validNumberPattern = /^[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/

  return validNumberPattern.test(s)
}

export { isNumber }
