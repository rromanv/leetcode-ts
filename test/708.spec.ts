import { describe, expect, it } from 'vitest'
import { _Node as Node, insert } from '../src/708'

describe('708. Insert into a Sorted Circular Linked List', () => {
  function createCircularLinkedList(values: number[]): Node | null {
    if (!values.length) return null

    const nodes = values.map((val) => new Node(val))
    for (let i = 0; i < nodes.length - 1; i++) {
      nodes[i].next = nodes[i + 1]
    }
    nodes[nodes.length - 1].next = nodes[0] // Make it circular
    return nodes[0]
  }

  function getValuesFromCircularList(head: Node | null, length: number): number[] {
    if (!head) return []
    const result = [head.val]
    let current = head.next
    while (current !== head && result.length < length) {
      result.push(current!.val)
      current = current!.next
    }
    return result
  }

  it('should insert into empty list', () => {
    const result = insert(null, 1)
    expect(result?.val).toBe(1)
    expect(result?.next).toBe(result) // Points to itself
  })

  it('should insert into a list with one element', () => {
    const head = createCircularLinkedList([1])
    const result = insert(head, 0)
    const values = getValuesFromCircularList(result, 2)
    expect(values).toEqual([1, 0])
  })

  it('should insert in between values', () => {
    const head = createCircularLinkedList([1, 3, 4])
    const result = insert(head, 2)
    const values = getValuesFromCircularList(result, 4)
    expect(values).toEqual([1, 2, 3, 4])
  })

  it('should insert at the end of values', () => {
    const head = createCircularLinkedList([1, 3, 4])
    const result = insert(head, 5)
    const values = getValuesFromCircularList(result, 4)
    expect(values).toEqual([1, 3, 4, 5])
  })

  it('should handle duplicate values', () => {
    const head = createCircularLinkedList([1, 3, 3, 3])
    const result = insert(head, 3)
    const values = getValuesFromCircularList(result, 5)
    expect(values).toEqual([1, 3, 3, 3, 3])
  })

  it('should handle list with all same values', () => {
    const head = createCircularLinkedList([3, 3, 3])
    const result = insert(head, 3)
    const values = getValuesFromCircularList(result, 4)
    expect(values).toEqual([3, 3, 3, 3])
  })
})
