/**
 * 392. Is Subsequence
 * https://leetcode.com/problems/is-subsequence/
 * Difficulty: Easy
 *
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
 *
 * Algorithm: Two pointer approach, one for s and one for t
 * Time Complexity: O(t)
 * Space Complexity: O(1)
 *
 * @param {string} s - The string to check as a subsequence.
 * @param {string} t - The string to check against.
 * @returns {boolean} - Whether s is a subsequence of t.
 */
function isSubsequence(s: string, t: string): boolean {
  if (s.length === 0) return true

  let sIndex = 0
  for (let tIndex = 0; tIndex < t.length; tIndex++) {
    if (s.charAt(sIndex) === t.charAt(tIndex)) sIndex++

    if (sIndex === s.length) return true
  }

  return false
}

export { isSubsequence }
