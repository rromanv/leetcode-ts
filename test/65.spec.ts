import { expect, test } from 'vitest'
import { isNumber } from '@/65'

test('s = "0" => true', () => {
  expect(isNumber('0')).toBe(true)
})

test('s = "e" => false', () => {
  expect(isNumber('e')).toBe(false)
})

test('s = "." => false', () => {
  expect(isNumber('.')).toBe(false)
})

test('s = "2" => true', () => {
  expect(isNumber('2')).toBe(true)
})

test('s = "0089" => true', () => {
  expect(isNumber('0089')).toBe(true)
})

test('s = "-0.1" => true', () => {
  expect(isNumber('-0.1')).toBe(true)
})

test('s = "+3.14" => true', () => {
  expect(isNumber('+3.14')).toBe(true)
})

test('s = "-.9" => true', () => {
  expect(isNumber('-.9')).toBe(true)
})

test('s = "4." => true', () => {
  expect(isNumber('4.')).toBe(true)
})

test('s = "2e10" => true', () => {
  expect(isNumber('2e10')).toBe(true)
})

test('s = "-90E3" => true', () => {
  expect(isNumber('-90E3')).toBe(true)
})

test('s = "3e+7" => true', () => {
  expect(isNumber('3e+7')).toBe(true)
})

test('s = "+6e-1" => true', () => {
  expect(isNumber('+6e-1')).toBe(true)
})

test('s = "53.5e93" => true', () => {
  expect(isNumber('53.5e93')).toBe(true)
})

test('s = "-123.456e789" => true', () => {
  expect(isNumber('-123.456e789')).toBe(true)
})

test('s = "abc" => false', () => {
  expect(isNumber('abc')).toBe(false)
})

test('s = "1a" => false', () => {
  expect(isNumber('1a')).toBe(false)
})

test('s = "1e" => false', () => {
  expect(isNumber('1e')).toBe(false)
})

test('s = "e3" => false', () => {
  expect(isNumber('e3')).toBe(false)
})

test('s = "99e2.5" => false', () => {
  expect(isNumber('99e2.5')).toBe(false)
})

test('s = "--6" => false', () => {
  expect(isNumber('--6')).toBe(false)
})

test('s = "-+3" => false', () => {
  expect(isNumber('-+3')).toBe(false)
})

test('s = "95a54e53" => false', () => {
  expect(isNumber('95a54e53')).toBe(false)
})

test('s = ".e1" => false', () => {
  expect(isNumber('.e1')).toBe(false)
})

test('s = "1e+1." => false', () => {
  expect(isNumber('1e+1.')).toBe(false)
})

test('s = " " => false', () => {
  expect(isNumber(' ')).toBe(false)
})
