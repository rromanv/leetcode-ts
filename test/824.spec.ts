import { describe, expect, test } from 'vitest'
import { toGoatLatin } from '@/824'

describe('824. Goat Latin', () => {
  test('Example 1: sentence = "I speak Goat Latin"', () => {
    expect(toGoatLatin('I speak Goat Latin')).toBe('Imaa peaksmaaa oatGmaaaa atinLmaaaaa')
  })

  test('Example 2: sentence = "The quick brown fox"', () => {
    expect(toGoatLatin('The quick brown fox')).toBe('heTmaa uickqmaaa rownbmaaaa oxfmaaaaa')
  })

  test('sentence with all vowels', () => {
    expect(toGoatLatin('Each Apple Is Orange')).toBe('Eachmaa Applemaaa Ismaaaa Orangemaaaaa')
  })

  test('single word', () => {
    expect(toGoatLatin('Test')).toBe('estTmaa')
  })

  test('empty string', () => {
    expect(toGoatLatin('')).toBe('')
  })
})
