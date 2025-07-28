/**
 * 22. Generate Parentheses
 * https://leetcode.com/problems/generate-parentheses/
 *
 * Difficulty: Medium
 *
 * Generate all combinations of well-formed parentheses.
 *
 * @param {number} n - Number of pairs of parentheses.
 * @returns {string[]} - List of valid parentheses combinations.
 *
 * Algorithm: To be implemented
 * Time Complexity: To be implemented
 * Space Complexity: To be implemented
 */
function generateParenthesis(n: number): string[] {
  if (n === 0) return []

  const result: string[] = []

  const backtrack = (current: string, open: number, close: number) => {
    if (current.length === 2 * n) {
      result.push(current)
      return
    }

    if (open < n) backtrack(current + '(', open + 1, close)
    if (close < open) backtrack(current + ')', open, close + 1)
  }

  backtrack('', 0, 0)

  return result
}

export { generateParenthesis }
