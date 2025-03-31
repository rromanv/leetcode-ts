import { expect, test } from 'vitest'
import { addStrings } from '@/415'

test('Example 1: num1 = "11", num2 = "123" => "134"', () => {
  expect(addStrings('11', '123')).toBe('134')
})

test('Example 2: num1 = "456", num2 = "77" => "533"', () => {
  expect(addStrings('456', '77')).toBe('533')
})

test('Same length numbers: num1 = "999", num2 = "999" => "1998"', () => {
  expect(addStrings('999', '999')).toBe('1998')
})

test('Numbers with carry over: num1 = "584", num2 = "918" => "1502"', () => {
  expect(addStrings('584', '918')).toBe('1502')
})

test('Large numbers: num1 = "9333852702227987", num2 = "85731737104263" => "9419584439332250"', () => {
  expect(addStrings('9333852702227987', '85731737104263')).toBe('9419584439332250')
})

test('Zero handling: num1 = "0", num2 = "0" => "0"', () => {
  expect(addStrings('0', '0')).toBe('0')
})

test('Single digit with zero: num1 = "1", num2 = "0" => "1"', () => {
  expect(addStrings('1', '0')).toBe('1')
})

test('Very different length numbers: num1 = "1", num2 = "9999" => "10000"', () => {
  expect(addStrings('1', '9999')).toBe('10000')
})
