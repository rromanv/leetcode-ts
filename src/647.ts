/**
 * 647. Palindromic Substrings
 * https://leetcode.com/problems/palindromic-substrings/
 * Difficulty: Medium
 *
 * Given a string s, return the number of palindromic substrings in it.
 * A string is a palindrome when it reads the same backward as forward.
 *
 * Algorithm: Expand around center
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 *
 * @param {string} s - The input string
 * @returns {number} The number of palindromic substrings in s
 */
function countSubstrings(s: string): number {
  let counter = 0
  for (let index = 0; index < s.length; index++) {
    counter += palindromeFromCenter(s, index, index)
    counter += palindromeFromCenter(s, index, index + 1)
  }
  return counter
}

function palindromeFromCenter(s: string, lowIndex: number, highIndex: number) {
  let counter = 0
  while (lowIndex >= 0 && highIndex < s.length) {
    if (s.charAt(lowIndex) !== s.charAt(highIndex)) break
    lowIndex--
    highIndex++
    counter++
  }
  return counter
}

export { countSubstrings }
