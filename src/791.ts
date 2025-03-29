import { scheduler } from 'timers/promises'

/**
 * 791. Custom Sort String
 * https://leetcode.com/problems/custom-sort-string
 * Medium
 *
 * You are given two strings order and s. All the characters of order are unique and were sorted in some custom order previously.
 * Permute the characters of s so that they match the order that order was sorted.
 * If a character x does not appear in order, it should be placed at the end of the permuted string.
 *
 * Algorithm: custom comparator-based sorting approach
 * Time Complexity: O(n log n), where n is the length of string
 * Space Complexity: O(n), where n is the length of string
 *
 * @param {string} order - The custom order string
 * @param {string} s - The string to be sorted
 * @return {string} - The permuted string according to the custom order
 */
function customSortString2(order: string, s: string): string {
  if (!s.length || !order.length) return s

  const orderMap = new Map<string, number>()

  for (const [index, char] of order.split('').entries()) orderMap.set(char, index)

  return s
    .split('')
    .sort((a, b) => {
      const aIndex = orderMap.has(a) ? orderMap.get(a)! : order.length
      const bIndex = orderMap.has(b) ? orderMap.get(b)! : order.length
      return aIndex - bIndex
    })
    .join('')
}

function customSortString(order: string, s: string): string {
  if (!s.length || !order.length) return s

  const sChars = new Map<string, number>()
  for (const char of s) sChars.set(char, (sChars.get(char) ?? 0) + 1)

  let result = ''
  for (const char of order) {
    if (sChars.has(char)) {
      result += char.repeat(sChars.get(char)!)
      sChars.delete(char)
    }
  }

  for (const [char, count] of sChars) {
    result += char.repeat(sChars.get(char)!)
  }

  return result
}

export { customSortString }
