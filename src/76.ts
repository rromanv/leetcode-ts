/**
 *  76. Minimum Window Substring
 *  https://leetcode.com/problems/minimum-window-substring/
 *  Hard
 *
 * Given two strings s and t of lengths m and n respectively, return the minimum window substring
 * of s such that every character in t (including duplicates) is included in the window.
 * If there is no such substring, return the empty string "".
 *
 * Algorithm: Sliding Window
 * Time Complexity: O(m + n) where m is the length of string s and n is the length of string t
 * Space Complexity: O(m + n) for the hash maps/counters used
 *
 * @param {string} s - The source string to search in
 * @param {string} t - The target string containing characters to be included in the window
 * @return {string} - The minimum window substring or empty string if not found
 */
function minWindow(s: string, t: string): string {
  if (t.length > s.length || !t.length) return ''

  const tCount = new Map<string, number>()
  for (const char of t) {
    tCount.set(char, (tCount.get(char) ?? 0) + 1)
  }

  const windowCount = new Map<string, number>()
  let have = 0
  let need = tCount.size

  let left = 0
  let right = 0

  let result: [number, number] = [-1, Infinity]

  while (right < s.length) {
    const rightChar = s[right]

    if (tCount.has(rightChar)) {
      windowCount.set(rightChar, (windowCount.get(rightChar) ?? 0) + 1)

      if (windowCount.get(rightChar) === tCount.get(rightChar)) {
        have++
      }
    }

    while (have === need && left <= right) {
      if (right - left + 1 < result[1]) {
        result = [left, right - left + 1]
      }

      const leftChar = s[left]

      if (tCount.has(leftChar)) {
        windowCount.set(leftChar, windowCount.get(leftChar)! - 1)

        if (windowCount.get(leftChar)! < tCount.get(leftChar)!) {
          have--
        }
      }
      left++
    }
    right++
  }

  return result[1] < Infinity ? s.substring(result[0], result[0] + result[1]) : ''
}

export { minWindow }
