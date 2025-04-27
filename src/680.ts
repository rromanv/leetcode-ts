/*
 * 680. Valid Palindrome II
 * https://leetcode.com/problems/valid-palindrome-ii
 * Easy
 *
 * Algorithm: Two Pointers with helper function
 * Time complexity: O(N)
 * Space complexity: O(1)
 */

function validPalindrome(s: string): boolean {
  if (s.length <= 1) return true

  const isPalindrome = (leftIdx: number, rightIdx: number) => {
    while (leftIdx < rightIdx) {
      if (s.charAt(leftIdx) !== s.charAt(rightIdx)) return false
      leftIdx++
      rightIdx--
    }
    return true
  }

  let leftIdx = 0
  let rightIdx = s.length - 1

  while (leftIdx < rightIdx) {
    if (s.charAt(leftIdx) !== s.charAt(rightIdx)) {
      return isPalindrome(leftIdx + 1, rightIdx) || isPalindrome(leftIdx, rightIdx - 1)
    }
    leftIdx++
    rightIdx--
  }

  return true
}

export { validPalindrome }
