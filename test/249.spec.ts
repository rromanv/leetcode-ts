import { expect, test } from 'vitest'
import { groupStrings } from '@/249'

test('groupStrings with ["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"]', () => {
  const result = groupStrings(['abc', 'bcd', 'acef', 'xyz', 'az', 'ba', 'a', 'z'])
  // Sort results for consistent comparison
  const sortedResult = result.map((group) => [...group].sort()).sort((a, b) => a[0].localeCompare(b[0]))

  expect(sortedResult).toEqual(expect.arrayContaining([['a', 'z'], ['acef'], ['abc', 'bcd', 'xyz'], ['az', 'ba']]))
})

test('groupStrings with empty array', () => {
  expect(groupStrings([])).toEqual([])
})

test('groupStrings with single string', () => {
  expect(groupStrings(['a'])).toEqual([['a']])
})

test('groupStrings with identical strings', () => {
  expect(groupStrings(['a', 'a', 'a'])).toEqual([['a', 'a', 'a']])
})

test('groupStrings with strings of different lengths', () => {
  const result = groupStrings(['a', 'ab', 'abc'])
  // Sort results for consistent comparison
  const sortedResult = result.map((group) => [...group].sort()).sort((a, b) => a[0].localeCompare(b[0]))

  expect(sortedResult).toEqual([['a'], ['ab'], ['abc']])
})

test('groupStrings with wrapped shifts', () => {
  const result = groupStrings(['az', 'ba'])
  // Sort results for consistent comparison
  const sortedResult = result.map((group) => [...group].sort()).sort((a, b) => a[0].localeCompare(b[0]))

  expect(sortedResult).toEqual([['az', 'ba']])
})

test('groupStrings with complex example', () => {
  const result = groupStrings(['acd', 'dfg', 'wyz', 'yab', 'mop'])
  // Sort results for consistent comparison
  const sortedResult = result.map((group) => [...group].sort()).sort((a, b) => a[0].localeCompare(b[0]))

  expect(sortedResult).toEqual([['acd', 'dfg', 'mop', 'wyz', 'yab']])
})
