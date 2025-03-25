import { expect, test, describe } from 'vitest'
import { depthSum, NestedInteger } from '@/339'

// Create a mock implementation of NestedInteger for testing
class MockNestedInteger implements NestedInteger {
  private integer: number | null = null
  private list: MockNestedInteger[] = []
  private isInt: boolean = false

  constructor(value?: number | MockNestedInteger[]) {
    if (typeof value === 'number') {
      this.integer = value
      this.isInt = true
    } else if (Array.isArray(value)) {
      this.list = value
      this.isInt = false
    }
  }

  isInteger(): boolean {
    return this.isInt
  }

  getInteger(): number | null {
    return this.integer
  }

  setInteger(value: number): void {
    this.integer = value
    this.isInt = true
  }

  add(elem: NestedInteger): void {
    this.list.push(elem as MockNestedInteger)
  }

  getList(): NestedInteger[] {
    return this.list
  }
}

// Helper function to create nested lists for testing
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createNestedList(value: number | Array<any>): MockNestedInteger {
  if (typeof value === 'number') {
    return new MockNestedInteger(value)
  } else {
    const result = new MockNestedInteger()
    for (const item of value) {
      result.add(createNestedList(item))
    }
    return result
  }
}

describe('339. Nested List Weight Sum', () => {
  test('Example 1: [[1,1],2,[1,1]] => 10', () => {
    // [[1,1],2,[1,1]] -> (1+1)*2 + 2*1 + (1+1)*2 = 10
    const nestedList = [createNestedList([1, 1]), createNestedList(2), createNestedList([1, 1])]

    expect(depthSum(nestedList)).toBe(10)
  })

  test('Example 2: [1,[4,[6]]] => 27', () => {
    // [1,[4,[6]]] -> 1*1 + 4*2 + 6*3 = 27
    const nestedList = [createNestedList(1), createNestedList([4, [6]])]

    expect(depthSum(nestedList)).toBe(27)
  })

  test('Empty list returns 0', () => {
    expect(depthSum([])).toBe(0)
  })

  test('Deeply nested list: [[[[[5]]]]] => 25', () => {
    // [[[[[5]]]]] -> 5*5 = 25
    const nestedList = [createNestedList([[[[[5]]]]])]

    expect(depthSum(nestedList)).toBe(25)
  })

  test('Mixed depth levels: [1,[2,3],[[4],5]] => 21', () => {
    // [1,[2,3],[[4],5]] -> 1*1 + (2+3)*2 + (4*3+5*2) = 1 + 10 + 12 + 10 = 21
    const nestedList = [createNestedList(1), createNestedList([2, 3]), createNestedList([[4], 5])]

    expect(depthSum(nestedList)).toBe(21)
  })
})
