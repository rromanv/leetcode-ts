import { expect, test } from 'vitest'
import { mergeTwoLists, ListNode } from '@/21'

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

// Helper function to convert linked list to array for easier testing
function linkedListToArray(head: ListNode | null): number[] {
  const result: number[] = []
  let current = head

  while (current) {
    result.push(current.val)
    current = current.next
  }

  return result
}

test('list1 = [1,2,4], list2 = [1,3,4] => [1,1,2,3,4,4]', () => {
  const list1 = createLinkedList([1, 2, 4])
  const list2 = createLinkedList([1, 3, 4])
  const result = mergeTwoLists(list1, list2)
  expect(linkedListToArray(result)).toEqual([1, 1, 2, 3, 4, 4])
})

test('list1 = [], list2 = [] => []', () => {
  const list1 = createLinkedList([])
  const list2 = createLinkedList([])
  const result = mergeTwoLists(list1, list2)
  expect(linkedListToArray(result)).toEqual([])
})

test('list1 = [], list2 = [0] => [0]', () => {
  const list1 = createLinkedList([])
  const list2 = createLinkedList([0])
  const result = mergeTwoLists(list1, list2)
  expect(linkedListToArray(result)).toEqual([0])
})

test('list1 = [1,5,7], list2 = [2,3,6,8] => [1,2,3,5,6,7,8]', () => {
  const list1 = createLinkedList([1, 5, 7])
  const list2 = createLinkedList([2, 3, 6, 8])
  const result = mergeTwoLists(list1, list2)
  expect(linkedListToArray(result)).toEqual([1, 2, 3, 5, 6, 7, 8])
})

test('list1 = [5,6,7], list2 = [1,2,3] => [1,2,3,5,6,7]', () => {
  const list1 = createLinkedList([5, 6, 7])
  const list2 = createLinkedList([1, 2, 3])
  const result = mergeTwoLists(list1, list2)
  expect(linkedListToArray(result)).toEqual([1, 2, 3, 5, 6, 7])
})
