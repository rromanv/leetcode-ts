/**
 * 224. Basic Calculator
 * {@link https://leetcode.com/problems/basic-calculator/ | Link}
 * Hard
 *
 * Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.
 *
 * Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().
 *
 * Algorithm: Stack-based iteration. Process numbers and signs, use stack for parentheses scope.
 * Time Complexity: O(n), where n is the length of the string.
 * Space Complexity: O(n) in the worst case for stack depth.
 *
 * @param {string} s
 * @returns {number}
 */
function calculate(s: string): number {
  const stack: number[] = []
  let result = 0
  let currentNumber = 0
  let sign = 1

  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    if (char >= '0' && char <= '9') {
      currentNumber = currentNumber * 10 + parseInt(char, 10)
    } else if (char === '+') {
      result += sign * currentNumber
      currentNumber = 0
      sign = 1
    } else if (char === '-') {
      result += sign * currentNumber
      currentNumber = 0
      sign = -1
    } else if (char === '(') {
      stack.push(result)
      stack.push(sign)

      sign = 1
      result = 0
    } else if (char === ')') {
      result += sign * currentNumber
      currentNumber = 0

      const previousSign = stack.pop()!
      result *= previousSign

      const previousResult = stack.pop()!
      result += previousResult
    }
  }

  if (currentNumber !== 0) {
    result += sign * currentNumber
  }

  return result
}

export { calculate }
