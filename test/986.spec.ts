// filepath: /Users/rromanv/projects/leetcode-ts/test/986.spec.ts
import { expect, test } from 'vitest'
import { intervalIntersection } from '@/986'

test('firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]] => [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]', () => {
  expect(
    intervalIntersection(
      [
        [0, 2],
        [5, 10],
        [13, 23],
        [24, 25],
      ],
      [
        [1, 5],
        [8, 12],
        [15, 24],
        [25, 26],
      ],
    ),
  ).toStrictEqual([
    [1, 2],
    [5, 5],
    [8, 10],
    [15, 23],
    [24, 24],
    [25, 25],
  ])
})

test('firstList = [[1,3],[5,9]], secondList = [] => []', () => {
  expect(
    intervalIntersection(
      [
        [1, 3],
        [5, 9],
      ],
      [],
    ),
  ).toStrictEqual([])
})

test('firstList = [], secondList = [[4,8],[10,12]] => []', () => {
  expect(
    intervalIntersection(
      [],
      [
        [4, 8],
        [10, 12],
      ],
    ),
  ).toStrictEqual([])
})

test('firstList = [[1,7]], secondList = [[3,10]] => [[3,7]]', () => {
  expect(intervalIntersection([[1, 7]], [[3, 10]])).toStrictEqual([[3, 7]])
})

test('firstList = [[3,5],[9,20]], secondList = [[4,5],[7,10],[11,12],[14,15],[16,20]] => [[4,5],[9,10],[11,12],[14,15],[16,20]]', () => {
  expect(
    intervalIntersection(
      [
        [3, 5],
        [9, 20],
      ],
      [
        [4, 5],
        [7, 10],
        [11, 12],
        [14, 15],
        [16, 20],
      ],
    ),
  ).toStrictEqual([
    [4, 5],
    [9, 10],
    [11, 12],
    [14, 15],
    [16, 20],
  ])
})
