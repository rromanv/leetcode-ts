import { expect, test } from 'vitest'
import { maximumSwap } from '@/670'

test('num = 2736 => 7236', () => {
  expect(maximumSwap(2736)).toBe(7236)
})

test('num = 9973 => 9973', () => {
  expect(maximumSwap(9973)).toBe(9973)
})

test('num = 98368 => 98863', () => {
  expect(maximumSwap(98368)).toBe(98863)
})

test('num = 1993 => 9913', () => {
  expect(maximumSwap(1993)).toBe(9913)
})

test('num = 1234 => 4231', () => {
  expect(maximumSwap(1234)).toBe(4231)
})

test('num = 0 => 0', () => {
  expect(maximumSwap(0)).toBe(0)
})

test('num = 10 => 10', () => {
  expect(maximumSwap(10)).toBe(10)
})
