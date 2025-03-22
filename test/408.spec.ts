import { expect, test } from 'vitest'
import { validWordAbbreviation } from '@/408'

test('word = "internationalization", abbr = "i12iz4n" => true', () => {
  expect(validWordAbbreviation('internationalization', 'i12iz4n')).toBeTruthy()
})

test('word = "apple", abbr = "a2e" => false', () => {
  expect(validWordAbbreviation('apple', 'a2e')).toBeFalsy()
})
