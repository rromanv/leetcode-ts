import { expect, test } from 'vitest'
import { customSortString } from '@/791'

test('order = "cba", s = "abcd" => "cbad"', () => {
  expect(customSortString('cba', 'abcd')).toBe('cbad')
})

test('order = "cbafg", s = "abcd" => "cbad"', () => {
  expect(customSortString('cbafg', 'abcd')).toBe('cbad')
})

test('order = "kqep", s = "pekeq" => "kqeep"', () => {
  expect(customSortString('kqep', 'pekeq')).toBe('kqeep')
})

test('empty order string: order = "", s = "abc" => "abc"', () => {
  expect(customSortString('', 'abc')).toBe('abc')
})

test('empty s string: order = "abc", s = "" => ""', () => {
  expect(customSortString('abc', '')).toBe('')
})

test('s string with characters not in order: order = "abc", s = "axbyczd" => "abcxyzd"', () => {
  expect(customSortString('abc', 'axbyczd')).toBe('abcxyzd')
})

test('s string with duplicate characters: order = "abc", s = "aabbbccc" => "aabbbccc"', () => {
  expect(customSortString('abc', 'aabbbccc')).toBe('aabbbccc')
})
