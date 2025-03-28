// filepath: /Users/rromanv/projects/leetcode-ts/test/23.spec.ts
import { expect, test } from 'vitest'
import { mergeKLists, ListNode } from '@/23'

// Helper function to convert array to linked list
function arrayToList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null

  const head = new ListNode(arr[0])
  let current = head

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i])
    current = current.next
  }

  return head
}

// Helper function to convert linked list to array for easier assertion
function listToArray(head: ListNode | null): number[] {
  const result: number[] = []
  let current = head

  while (current) {
    result.push(current.val)
    current = current.next
  }

  return result
}

test('Example 1: lists = [[1,4,5],[1,3,4],[2,6]] => [1,1,2,3,4,4,5,6]', () => {
  const list1 = arrayToList([1, 4, 5])
  const list2 = arrayToList([1, 3, 4])
  const list3 = arrayToList([2, 6])

  const result = mergeKLists([list1, list2, list3])

  expect(listToArray(result)).toStrictEqual([1, 1, 2, 3, 4, 4, 5, 6])
})

test('Example 2: lists = [] => []', () => {
  expect(listToArray(mergeKLists([]))).toStrictEqual([])
})

test('Example 3: lists = [[]] => []', () => {
  expect(listToArray(mergeKLists([null]))).toStrictEqual([])
})

test('Multiple empty lists: lists = [[],[],[]] => []', () => {
  expect(listToArray(mergeKLists([null, null, null]))).toStrictEqual([])
})

test('Single list: lists = [[1,2,3]] => [1,2,3]', () => {
  const list = arrayToList([1, 2, 3])

  const result = mergeKLists([list])

  expect(listToArray(result)).toStrictEqual([1, 2, 3])
})

test('Lists with different lengths: lists = [[1,3,5,7],[2],[4,6,8,10,12]] => [1,2,3,4,5,6,7,8,10,12]', () => {
  const list1 = arrayToList([1, 3, 5, 7])
  const list2 = arrayToList([2])
  const list3 = arrayToList([4, 6, 8, 10, 12])

  const result = mergeKLists([list1, list2, list3])

  expect(listToArray(result)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 10, 12])
})

test('Negative numbers: lists = [[-2,0,2],[-3,-1,1,3]] => [-3,-2,-1,0,1,2,3]', () => {
  const list1 = arrayToList([-2, 0, 2])
  const list2 = arrayToList([-3, -1, 1, 3])

  const result = mergeKLists([list1, list2])

  expect(listToArray(result)).toStrictEqual([-3, -2, -1, 0, 1, 2, 3])
})
