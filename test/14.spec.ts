import { expect, test } from 'vitest'
import { longestCommonPrefix } from '@/14'

test('Example 1: strs = ["flower","flow","flight"] => "fl"', () => {
  expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl')
})

test('Example 2: strs = ["dog","racecar","car"] => ""', () => {
  expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('')
})

test('Single string: strs = ["hello"] => "hello"', () => {
  expect(longestCommonPrefix(['hello'])).toBe('hello')
})

test('Empty array: strs = [] => ""', () => {
  expect(longestCommonPrefix([])).toBe('')
})

test('Array with empty string: strs = ["", "b"] => ""', () => {
  expect(longestCommonPrefix(['', 'b'])).toBe('')
})

test('All identical strings: strs = ["abc","abc","abc"] => "abc"', () => {
  expect(longestCommonPrefix(['abc', 'abc', 'abc'])).toBe('abc')
})

test('No common prefix: strs = ["ab","bc","cd"] => ""', () => {
  expect(longestCommonPrefix(['ab', 'bc', 'cd'])).toBe('')
})

test('Prefix shorter than shortest string: strs = ["interspecies","interstellar","interstate"] => "inters"', () => {
  expect(longestCommonPrefix(['interspecies', 'interstellar', 'interstate'])).toBe('inters')
})

test('All strings are empty: strs = ["","",""] => ""', () => {
  expect(longestCommonPrefix(['', '', ''])).toBe('')
})
