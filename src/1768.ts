/**
 * 1768. Merge Strings Alternately
 * https://leetcode.com/problems/merge-strings-alternately/
 * Easy
 *
 * Merges two strings by adding letters in alternating order, starting with word1
 *
 * Algorithm: Single pointer approach
 * Time Complexity: O(n + m) where n and m are the lengths of input strings
 * Space Complexity: O(n + m) for the result string
 *
 * @param {string} word1 - The first string to merge
 * @param {string} word2 - The second string to merge
 * @returns {string} The merged string with alternating characters
 */
function mergeAlternately(word1: string, word2: string): string {
  let result = ''
  const maxLength = Math.max(word1.length, word2.length)

  for (let index = 0; index < maxLength; index++) {
    if (index < word1.length) result += word1[index]
    if (index < word2.length) result += word2[index]
  }

  return result
}

export { mergeAlternately }
