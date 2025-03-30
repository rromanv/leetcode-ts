/**
 *  20. Valid Parentheses
 *  https://leetcode.com/problems/valid-parentheses/
 *  Easy
 *
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 *
 * An input string is valid if:
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 * 3. Every close bracket has a corresponding open bracket of the same type.
 *
 * Algorithm: Stack-based approach
 * Time Complexity: O(n) where n is the length of the string
 * Space Complexity: O(n) for the stack storage
 *
 * @param {string} s - String containing parentheses characters
 * @return {boolean} - True if the string has valid parentheses, false otherwise
 */
const isValid = (s: string): boolean => {
  const openSigns = new Set(['{', '(', '['])
  const closeSigns = new Map([
    [')', '('],
    ['}', '{'],
    [']', '['],
  ])

  const stack = new Array<string>()

  for (const char of s) {
    if (openSigns.has(char)) stack.push(char)
    else if (closeSigns.has(char)) {
      if (stack.length === 0) return false
      const lastOpen = stack.pop()
      if (closeSigns.get(char) !== lastOpen) return false
    }
  }

  return stack.length === 0
}

export { isValid }
