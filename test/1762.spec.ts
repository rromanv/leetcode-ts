import { expect, test } from 'vitest'
import { findBuildings } from '@/1762'

test('heights = [4,2,3,1] => [0,2,3]', () => {
  expect(findBuildings([4, 2, 3, 1])).toEqual([0, 2, 3])
})

test('heights = [4,3,2,1] => [0,1,2,3]', () => {
  expect(findBuildings([4, 3, 2, 1])).toEqual([0, 1, 2, 3])
})

test('heights = [1,3,2,4] => [3]', () => {
  expect(findBuildings([1, 3, 2, 4])).toEqual([3])
})

test('heights = [2,2,2,2] => [3]', () => {
  expect(findBuildings([2, 2, 2, 2])).toEqual([3])
})
