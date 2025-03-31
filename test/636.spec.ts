import { expect, test } from 'vitest'
import { exclusiveTime } from '@/636'

test('Example 1: n = 2, logs = ["0:start:0","1:start:2","1:end:5","0:end:6"] => [3,4]', () => {
  expect(exclusiveTime(2, ['0:start:0', '1:start:2', '1:end:5', '0:end:6'])).toStrictEqual([3, 4])
})

test('Example 2: n = 1, logs = ["0:start:0","0:start:2","0:end:5","0:end:6"] => [7]', () => {
  expect(exclusiveTime(1, ['0:start:0', '0:start:2', '0:end:5', '0:end:6'])).toStrictEqual([7])
})

test('Example 3: n = 2, logs = ["0:start:0","0:start:2","0:end:5","1:start:6","1:end:6","0:end:7"] => [7,1]', () => {
  expect(exclusiveTime(2, ['0:start:0', '0:start:2', '0:end:5', '1:start:6', '1:end:6', '0:end:7'])).toStrictEqual([
    7, 1,
  ])
})

test('Empty logs array returns array of zeros', () => {
  expect(exclusiveTime(3, [])).toStrictEqual([0, 0, 0])
})

test('Single function with no nested calls', () => {
  expect(exclusiveTime(1, ['0:start:0', '0:end:5'])).toStrictEqual([6])
})

test('Multiple functions with back-to-back execution', () => {
  expect(exclusiveTime(3, ['0:start:0', '0:end:2', '1:start:3', '1:end:4', '2:start:5', '2:end:6'])).toStrictEqual([
    3, 2, 2,
  ])
})

test('Complex nested function calls', () => {
  expect(exclusiveTime(2, ['0:start:0', '1:start:2', '1:start:3', '1:end:4', '1:end:5', '0:end:6'])).toStrictEqual([
    3, 4,
  ])
})
