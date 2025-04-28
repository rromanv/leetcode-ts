/*
 * 215. Kth Largest Element in an Array
 * https://leetcode.com/problems/kth-largest-element-in-an-array
 * Medium
 * Can you solve it without sorting?
 *
 * Algorithm: Max Heap
 * Time Complexity: O(N log K)
 * Space Complexity: O(K)
 */

function findKthLargest2(nums: number[], k: number): number {
  if (nums.length === 0) throw new Error('nums should have values')
  if (k > nums.length) throw new Error('k is bigger than nums length')

  let result = -1
  const heap = new MaxHeap(nums)
  for (let kth = 1; kth <= k; kth++) {
    result = heap.getMax()
  }

  return result
}

function findKthLargest(nums: number[], k: number): number {
  const minHeap = new MinHeap<number>()
  for (const num of nums) {
    if (minHeap.size() < k) {
      minHeap.insert(num)
    } else if (num > minHeap.peek()!) {
      minHeap.pop()
      minHeap.insert(num)
    }
  }
  return minHeap.size() > 0 ? minHeap.peek()! : 0
}

function findKthLargest3(nums: number[], k: number): number {
  const target = nums.length - k

  const quickSelect = (left: number, right: number) => {
    let pointer = left

    for (let index = left; index < right; index++) {
      if (nums[index] <= nums[right]) {
        ;[nums[pointer], nums[index]] = [nums[index], nums[pointer]]
        pointer++
      }
    }

    ;[nums[pointer], nums[right]] = [nums[right], nums[pointer]]

    if (pointer > target) return quickSelect(left, pointer - 1)
    else if (pointer < target) return quickSelect(pointer + 1, right)
    else return nums[pointer]
  }

  return quickSelect(0, nums.length - 1)
}

class MaxHeap<T> {
  private heap: T[]
  constructor(val: T[]) {
    this.heap = [...val]
    this.buildHeap()
  }

  private buildHeap() {
    const lastTreeIndex = Math.floor(this.heap.length / 2) - 1
    for (let index = lastTreeIndex; index >= 0; index--) {
      this.heapDownFrom(index)
    }
  }

  private heapDownFrom(index: number) {
    let largestIdx = index
    const leftIdx = 2 * index + 1
    const rightIdx = 2 * index + 2

    if (leftIdx < this.heap.length && this.heap[leftIdx] > this.heap[largestIdx]) largestIdx = leftIdx

    if (rightIdx < this.heap.length && this.heap[rightIdx] > this.heap[largestIdx]) largestIdx = rightIdx

    if (largestIdx !== index) {
      ;[this.heap[index], this.heap[largestIdx]] = [this.heap[largestIdx], this.heap[index]]
      this.heapDownFrom(largestIdx)
    }
  }

  public getMax() {
    if (this.heap.length === 0) throw new Error('Heap is Empty')
    const max = this.heap[0]
    const last = this.heap.pop()
    if (this.heap.length > 0 && last !== undefined) {
      this.heap[0] = last
      this.heapDownFrom(0)
    }
    return max
  }
}

class MinHeap<T> {
  private heap: T[]
  constructor() {
    this.heap = []
  }

  /** Returns the number of elements in the heap */
  size(): number {
    return this.heap.length
  }

  /** Returns the minimum element without removing it */
  peek(): T | undefined {
    return this.heap[0]
  }

  /** Inserts a new element into the heap */
  insert(value: T): void {
    this.heap.push(value)
    this.heapUp(this.heap.length - 1)
  }

  /** Removes and returns the minimum element from the heap */
  pop(): T | undefined {
    if (this.heap.length === 0) return undefined
    const min = this.heap[0]
    const last = this.heap.pop()
    if (this.heap.length > 0 && last !== undefined) {
      this.heap[0] = last
      this.heapDown(0)
    }
    return min
  }

  /** Heapify up from a given index */
  private heapUp(index: number): void {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2)
      if (this.heap[index] < this.heap[parent]) {
        ;[this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]]
        index = parent
      } else {
        break
      }
    }
  }

  /** Heapify down from a given index */
  private heapDown(index: number): void {
    const length = this.heap.length
    while (true) {
      let smallest = index
      const left = 2 * index + 1
      const right = 2 * index + 2

      if (left < length && this.heap[left] < this.heap[smallest]) smallest = left
      if (right < length && this.heap[right] < this.heap[smallest]) smallest = right

      if (smallest !== index) {
        ;[this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]]
        index = smallest
      } else {
        break
      }
    }
  }
}

export { findKthLargest }
