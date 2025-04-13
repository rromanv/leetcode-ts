import { expect, test } from 'vitest'
import { canFinish } from '@/207'

test('Example 1: numCourses = 2, prerequisites = [[1,0]] => true', () => {
  const numCourses = 2
  const prerequisites = [[1, 0]]
  expect(canFinish(numCourses, prerequisites)).toBe(true)
})

test('Example 2: numCourses = 2, prerequisites = [[1,0],[0,1]] => false', () => {
  const numCourses = 2
  const prerequisites = [
    [1, 0],
    [0, 1],
  ]
  expect(canFinish(numCourses, prerequisites)).toBe(false)
})

test('No prerequisites', () => {
  const numCourses = 5
  const prerequisites: number[][] = []
  expect(canFinish(numCourses, prerequisites)).toBe(true)
})

test('Multiple dependencies but still possible', () => {
  const numCourses = 4
  const prerequisites = [
    [1, 0],
    [2, 1],
    [3, 2],
  ]
  expect(canFinish(numCourses, prerequisites)).toBe(true)
})

test('Circular dependency', () => {
  const numCourses = 3
  const prerequisites = [
    [0, 1],
    [1, 2],
    [2, 0],
  ]
  expect(canFinish(numCourses, prerequisites)).toBe(false)
})

test('Multiple independent courses', () => {
  const numCourses = 5
  const prerequisites = [
    [0, 1],
    [2, 3],
  ]
  expect(canFinish(numCourses, prerequisites)).toBe(true)
})

test('Complex graph with multiple paths', () => {
  const numCourses = 6
  const prerequisites = [
    [1, 0],
    [2, 1],
    [3, 2],
    [3, 0],
    [4, 3],
    [5, 4],
  ]
  expect(canFinish(numCourses, prerequisites)).toBe(true)
})

test('Complex graph with cycle', () => {
  const numCourses = 6
  const prerequisites = [
    [1, 0],
    [2, 1],
    [3, 2],
    [0, 3],
    [4, 3],
    [5, 4],
  ]
  expect(canFinish(numCourses, prerequisites)).toBe(false)
})

test('Edge case: Single course', () => {
  const numCourses = 1
  const prerequisites: number[][] = []
  expect(canFinish(numCourses, prerequisites)).toBe(true)
})
