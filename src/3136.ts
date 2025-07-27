/**
 * 3136. Valid Word
 * https://leetcode.com/problems/valid-word/
 * Easy
 *
 * Checks if a word is valid based on specified criteria.
 *
 * Algorithm: Single‐pass scan with pre‐compiled patterns
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {string} word - Input word to validate
 * @return {boolean} - Returns true if the word is valid, false otherwise
 */
function isValid(word: string): boolean {
  if (word.length < 3) return false

  const isVowel = (char: string) => /^[aeiou]$/i.test(char)
  const isLetter = (char: string) => /^[a-z]$/i.test(char)
  const isAlNum = (char: string) => /^[a-z0-9]$/i.test(char)

  let hasVowel = false
  let hasConsonant = false

  for (const char of word) {
    if (!isAlNum(char)) return false

    if (isLetter(char)) {
      if (isVowel(char)) hasVowel = true
      else hasConsonant = true
    }
  }

  return hasVowel && hasConsonant
}

export { isValid }
