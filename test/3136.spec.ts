import { expect, test } from 'vitest'
import { isValid } from '@/3136'

test('Example 1: word = "234Adas" => true', () => {
  expect(isValid('234Adas')).toBe(true)
})

test('Length less than 3: word = "b3" => false', () => {
  expect(isValid('b3')).toBe(false)
})

test('Invalid character: word contains non-alphanumeric', () => {
  expect(isValid('a3$e')).toBe(false)
})

test('No vowel: "bcd123" => false', () => {
  expect(isValid('bcd123')).toBe(false)
})

test('No consonant: "aei2" => false', () => {
  expect(isValid('aei2')).toBe(false)
})

test('Only digits: "123" => false', () => {
  expect(isValid('123')).toBe(false)
})

test('Valid with uppercase vowel and consonant: "A1b" => true', () => {
  expect(isValid('A1b')).toBe(true)
})

test('All letters with both vowel and consonant: "abcde" => true', () => {
  expect(isValid('abcde')).toBe(true)
})

test('Minimum length with digit and letters: "a1b" => true', () => {
  expect(isValid('a1b')).toBe(true)
})

test('Invalid character: "Ya$" => false', () => {
  expect(isValid('Ya$')).toBe(false)
})

test('Invalid character: "uHBiL#" => false', () => {
  expect(isValid('uHBiL#')).toBe(false)
})
