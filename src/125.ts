/**
 * 125. Valid Palindrome
 * https://leetcode.com/problems/valid-palindrome/
 * Easy
 *
 * Determines if a string is a palindrome, considering only alphanumeric characters and ignoring case
 *
 * Algorithm: Two-pointer approach
 * Time Complexity: O(N) where n is the length of the string
 * Space Complexity: O(1)
 *
 * @param {string} s - The string to check
 * @returns {boolean} - True if the string is a palindrome, false otherwise
 */
function isPalindrome(s: string): boolean {
  const isAlpNum = (char: string) => /[0-9a-z]/i.test(char)
  let left = 0
  let right = s.length - 1

  while (left < right) {
    while (left < right && !isAlpNum(s[left])) left++
    while (left < right && !isAlpNum(s[right])) right--
    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false
    left++
    right--
  }

  return true
}

export { isPalindrome }
