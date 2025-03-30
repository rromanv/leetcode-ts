/**
 * 921. Minimum Add to Make Parentheses Valid
 * https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/
 * Medium
 *
 * Given a string s of '(' and ')' parentheses, we add the minimum number of parentheses ( '(' or ')', and in any positions )
 * such that the resulting parentheses string is valid.
 *
 * Formally, a parentheses string is valid if and only if:
 * - It is the empty string, or
 * - It can be written as AB (A concatenated with B), where A and B are valid strings, or
 * - It can be written as (A), where A is a valid string.
 *
 * Given a parentheses string, return the minimum number of parentheses we must add to make the resulting string valid.
 *
 * @param {string} s - String containing parentheses characters
 * @return {number} - Minimum number of parentheses needed to make the string valid
 */
function minAddToMakeValid2(s: string): number {
  if (!s.length) return 0

  const OPEN = '('
  const CLOSE = ')'

  type Parenthesis = '(' | ')'

  const stack = new Array<Parenthesis>()

  for (const char of s) {
    if (stack.length > 0 && stack[stack.length - 1] === OPEN && char === CLOSE) {
      stack.pop()
      continue
    }

    stack.push(char as Parenthesis)
  }

  return stack.length
}

function minAddToMakeValid(s: string): number {
  if (!s.length) return 0

  let open = 0
  let needed = 0

  for (const char of s) {
    if (char === '(') {
      open++
      continue
    }

    if (char === ')') {
      open > 0 ? open-- : needed++
    }
  }
  return needed + open
}

export { minAddToMakeValid }
