/**
 * 125. Valid Palindrome
 * https://leetcode.com/problems/valid-palindrome/
 * Easy
 *
 * Determines if a string is a palindrome, considering only alphanumeric characters and ignoring case
 *
 * Algorithm: Two-pointer approach
 * Time Complexity: O(n) where n is the length of the string
 * Space Complexity: O(n)
 *
 * @param {string} s - The string to check
 * @returns {boolean} - True if the string is a palindrome, false otherwise
 */
function isPalindrome(s: string): boolean {
  const justChars = s
    .trim()
    .toLowerCase()
    .replace(/[^0-9a-z]/gi, '')

  let left = 0
  let right = justChars.length - 1

  while (left < right) {
    if (justChars[left] !== justChars[right]) return false
    left++
    right--
  }
  return true
}

export { isPalindrome }
