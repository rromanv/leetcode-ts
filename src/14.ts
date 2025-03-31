/**
 * 14. Longest Common Prefix
 * https://leetcode.com/problems/longest-common-prefix/
 * Easy
 *
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 *
 * Time Complexity: O(S), where S is the sum of all characters in all strings
 * Space Complexity: O(1)
 *
 * @param {string[]} strs - Array of strings to find common prefix from
 * @return {string} - The longest common prefix
 */
function longestCommonPrefix(strs: string[]): string {
  if (!strs.length) return ''

  let prefix = strs[0]

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1)
      if (prefix === '') return ''
    }
  }

  return prefix
}

export { longestCommonPrefix }
