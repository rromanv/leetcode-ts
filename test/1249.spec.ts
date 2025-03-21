import { expect, test } from 'vitest'
import { minRemoveToMakeValid } from '@/1249'

test('s = "lee(t(c)o)de)" => "lee(t(c)o)de"', () => {
  expect(minRemoveToMakeValid('lee(t(c)o)de)')).toBe('lee(t(c)o)de')
})
test('s = "a)b(c)d" => "ab(c)d"', () => {
  expect(minRemoveToMakeValid('a)b(c)d')).toBe('ab(c)d')
})

test('s = "))((" => ""', () => {})
