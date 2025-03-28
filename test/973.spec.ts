import { expect, test } from 'vitest'
import { kClosest } from '@/973'

test('points = [[1,3],[-2,2]], k = 1 => [[-2,2]]', () => {
  expect(
    kClosest(
      [
        [1, 3],
        [-2, 2],
      ],
      1,
    ),
  ).toStrictEqual([[-2, 2]])
})

test('points = [[3,3],[5,-1],[-2,4]], k = 2 => [[3,3],[-2,4]]', () => {
  expect(
    kClosest(
      [
        [3, 3],
        [5, -1],
        [-2, 4],
      ],
      2,
    ),
  ).toStrictEqual(
    expect.arrayContaining([
      [3, 3],
      [-2, 4],
    ]),
  )
})

test('points = [[0,1],[1,0]], k = 2 => [[0,1],[1,0]]', () => {
  expect(
    kClosest(
      [
        [0, 1],
        [1, 0],
      ],
      2,
    ),
  ).toStrictEqual(
    expect.arrayContaining([
      [0, 1],
      [1, 0],
    ]),
  )
})

test('empty points array returns empty array', () => {
  expect(kClosest([], 0)).toStrictEqual([])
})

test('k larger than points array length returns all points', () => {
  const points = [
    [1, 1],
    [2, 2],
    [3, 3],
  ]
  expect(kClosest(points, 5)).toStrictEqual(expect.arrayContaining(points))
})

test('handles points with negative coordinates', () => {
  expect(
    kClosest(
      [
        [-1, -1],
        [-2, -2],
        [-3, -3],
      ],
      1,
    ),
  ).toStrictEqual([[-1, -1]])
})
