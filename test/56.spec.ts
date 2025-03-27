import { expect, test } from 'vitest'
import { merge } from '@/56'

test('intervals = [[1,3],[2,6],[8,10],[15,18]] => [[1,6],[8,10],[15,18]]', () => {
  expect(
    merge([
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ]),
  ).toStrictEqual([
    [1, 6],
    [8, 10],
    [15, 18],
  ])
})

test('intervals = [[1,4],[4,5]] => [[1,5]]', () => {
  expect(
    merge([
      [1, 4],
      [4, 5],
    ]),
  ).toStrictEqual([[1, 5]])
})

test('intervals = [[1,4],[0,4]] => [[0,4]]', () => {
  expect(
    merge([
      [1, 4],
      [0, 4],
    ]),
  ).toStrictEqual([[0, 4]])
})

test('intervals = [[1,4],[0,1]] => [[0,4]]', () => {
  expect(
    merge([
      [1, 4],
      [0, 1],
    ]),
  ).toStrictEqual([[0, 4]])
})

test('intervals = [[1,4],[2,3]] => [[1,4]]', () => {
  expect(
    merge([
      [1, 4],
      [2, 3],
    ]),
  ).toStrictEqual([[1, 4]])
})

test('empty intervals array returns empty array', () => {
  expect(merge([])).toStrictEqual([])
})

test('single interval returns the same interval', () => {
  expect(merge([[1, 3]])).toStrictEqual([[1, 3]])
})
