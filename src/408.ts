/*
 * 408. Valid Word Abbreviation (Premium)
 * https://leetcode.com/problems/valid-word-abbreviation
 * Easy
 */

function validWordAbbreviation(word: string, abbr: string): boolean {
  let index = 0
  let numText = ''

  const isDigit = (character: string) => /\d/.test(character)

  for (const letter of abbr) {
    if (isDigit(letter)) {
      if (numText === '' && letter === '0') return false

      numText += letter
      continue
    }

    if (numText !== '') {
      index += Number(numText)
      numText = ''
    }

    if (index >= word.length || word.charAt(index) !== letter) return false
    index++
  }

  if (numText !== '') {
    index += Number(numText)
  }

  return index === word.length
}

export { validWordAbbreviation }
