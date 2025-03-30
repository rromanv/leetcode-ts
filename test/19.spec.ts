import { expect, test } from 'vitest'
import { removeNthFromEnd, ListNode } from '@/19'

// Helper function to create a linked list from an array
function createLinkedList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null
  const head = new ListNode(arr[0])
  let current = head
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i])
    current = current.next
  }
  return head
}

// Helper function to convert a linked list to an array for easier assertion
function linkedListToArray(head: ListNode | null): number[] {
  const result: number[] = []
  let current = head
  while (current !== null) {
    result.push(current.val)
    current = current.next
  }
  return result
}

test('head = [1,2,3,4,5], n = 2 => [1,2,3,5]', () => {
  const head = createLinkedList([1, 2, 3, 4, 5])
  const result = removeNthFromEnd(head, 2)
  expect(linkedListToArray(result)).toStrictEqual([1, 2, 3, 5])
})

test('head = [1], n = 1 => []', () => {
  const head = createLinkedList([1])
  const result = removeNthFromEnd(head, 1)
  expect(linkedListToArray(result)).toStrictEqual([])
})

test('head = [1,2], n = 1 => [1]', () => {
  const head = createLinkedList([1, 2])
  const result = removeNthFromEnd(head, 1)
  expect(linkedListToArray(result)).toStrictEqual([1])
})

test('head = [1,2], n = 2 => [2]', () => {
  const head = createLinkedList([1, 2])
  const result = removeNthFromEnd(head, 2)
  expect(linkedListToArray(result)).toStrictEqual([2])
})

test('head = [1,2,3], n = 3 => [2,3]', () => {
  const head = createLinkedList([1, 2, 3])
  const result = removeNthFromEnd(head, 3)
  expect(linkedListToArray(result)).toStrictEqual([2, 3])
})
