/**
 * Converts a sentence to Goat Latin according to the rules:
 * 1. If a word begins with a vowel ('a', 'e', 'i', 'o', or 'u'), append "ma" to the end of the word
 * 2. If a word begins with a consonant, remove the first letter and append it to the end, then add "ma"
 * 3. Add one letter 'a' to the end of each word per its word index (1-based)
 * @param sentence Input string containing the sentence to convert
 * @returns Modified sentence in Goat Latin
 */
function toGoatLatin2(sentence: string): string {
  if (!sentence.length) return ''

  const words = sentence.split(' ')

  const isVowel = (char: string) => /^[aeiou]$/i.test(char)

  for (let [index, word] of words.entries()) {
    const firstChar = word[0]
    if (!isVowel(firstChar)) words[index] = word.substring(1) + firstChar
    words[index] += 'ma' + 'a'.repeat(index + 1)
  }

  return words.join(' ')
}

function toGoatLatin(sentence: string): string {
  if (!sentence.trim()) return ''

  const isVowel = (char: string) => /^[aeiou]$/i.test(char)

  return sentence
    .split(' ')
    .map((word, index) => {
      const firstChar = word.charAt(0)
      const base = isVowel(firstChar) ? word : word.substring(1) + firstChar
      return base + 'ma' + 'a'.repeat(index + 1)
    })
    .join(' ')
}

export { toGoatLatin }
