/*
 * 215. Kth Largest Element in an Array
 * https://leetcode.com/problems/kth-largest-element-in-an-array
 * Medium
 * Can you solve it without sorting?
 */

function findKthLargest(nums: number[], k: number): number {
  if (nums.length === 0) throw new Error('nums should have values')
  if (k > nums.length) throw new Error('k is bigger than nums length')

  let result = -1
  const heap = new MaxHeap(nums)
  for (let kth = 1; kth <= k; kth++) {
    result = heap.getMax()
  }

  return result
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

export { findKthLargest }
