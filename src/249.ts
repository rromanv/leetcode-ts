/**
 *  249. Group Shifted Strings
 *  https://leetcode.com/problems/group-shifted-strings/
 *  Medium
 *
 * We can shift a string by shifting each of its letters to its successive letter.
 * For example, "abc" can be shifted to be "bcd".
 * We can keep shifting the string to form a sequence.
 * For example, we can keep shifting "abc" to form the sequence: "abc" -> "bcd" -> ... -> "xyz".
 * Given an array of strings strings, group all strings[i] that belong to the same shifting sequence.
 * You may return the answer in any order.
 *
 * Algorithm: Hash Map with shift pattern as key
 * Time Complexity: O(n * k) where n is the length of strings array and k is the average length of each string
 * Space Complexity: O(n * k) for storing the result and patterns
 *
 * @param {string[]} strings - Array of strings to be grouped
 * @return {string[][]} - Array of string groups, where each group contains strings that can be shifted to each other
 */
function groupStrings(strings: string[]): string[][] {
  const patternMap = new Map<string, string[]>()
  for (const s of strings) {
    let pattern = ''
    if (s.length === 1) pattern = '*'
    else {
      for (let index = 0; index < s.length - 1; index++) {
        let diff = s.charCodeAt(index) - s.charCodeAt(index + 1)
        diff = diff < 0 ? diff + 26 : diff
        pattern += `*${diff}`
      }
    }
    if (!patternMap.has(pattern)) {
      patternMap.set(pattern, [])
    }
    patternMap.get(pattern)!.push(s)
  }
  return Array.from(patternMap.values())
}

export { groupStrings }
