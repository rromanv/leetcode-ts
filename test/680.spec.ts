import { test, expect } from 'vitest'
import { validPalindrome } from '@/680'

test('s = "aba" => true', () => {
  expect(validPalindrome('aba')).toBeTruthy()
})

test('s = "abca" => true', () => {
  expect(validPalindrome('abca')).toBeTruthy()
})

test('s = "abc" => false', () => {
  expect(validPalindrome('abc')).toBeFalsy()
})
