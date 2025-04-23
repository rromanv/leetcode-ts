/**
 * 480. Sliding Window Median
 * {@link https://leetcode.com/problems/sliding-window-median/}
 * Difficulty: Hard
 *
 * Given an array of integers `nums` and an integer `k`, there is a sliding window of size `k` which is moving from the very left of the array to the very right. You can only see the `k` numbers in the window. Each time the sliding window moves right by one position. Your job is to find the median of the numbers inside the window at each position.
 *
 * Algorithm: Two Heaps
 * Time Complexity: O(N * K)
 * Space Complexity: O(N)
 *
 * @param nums The input array of numbers.
 * @param k The size of the sliding window.
 * @returns An array containing the median of each window.
 */
function medianSlidingWindow(nums: number[], k: number): number[] {
  const result: number[] = []
  const lowerHalf = new MaxHeap()
  const higherHalf = new MinHeap()

  const rebalance = () => {
    while (lowerHalf.size() > higherHalf.size() + 1) higherHalf.push(lowerHalf.pop()!)
    while (higherHalf.size() > lowerHalf.size()) lowerHalf.push(higherHalf.pop()!)
  }

  const getMedian = () => {
    if (k % 2 === 1) return lowerHalf.peek()
    return (lowerHalf.peek()! + higherHalf.peek()!) / 2
  }

  for (let index = 0; index < nums.length; index++) {
    if (!lowerHalf.size() || nums[index] <= lowerHalf.peek()!) lowerHalf.push(nums[index])
    else higherHalf.push(nums[index])
    rebalance()

    if (index >= k - 1) {
      result.push(getMedian()!)
      const outNum = nums[index - k + 1]
      if (outNum <= lowerHalf.peek()) lowerHalf.remove(outNum)
      else higherHalf.remove(outNum)
      rebalance()
    }
  }

  return result
}

type Comparator<T> = (a: T, b: T) => boolean

class Heap {
  private data: number[]
  private comparator: (a: number, b: number) => boolean

  constructor(comparator: (a: number, b: number) => boolean) {
    this.data = []
    this.comparator = comparator
  }

  size() {
    return this.data.length
  }
  peek() {
    return this.data[0]
  }
  push(val: number) {
    this.data.push(val)
    this._siftUp()
  }
  pop() {
    const top = this.data[0]
    const last = this.data.pop()
    if (this.data.length && last !== undefined) {
      this.data[0] = last
      this._siftDown()
    }
    return top
  }
  remove(val: number) {
    const idx = this.data.indexOf(val)
    if (idx === -1) return false
    const last = this.data.pop()
    if (idx < this.data.length && last !== undefined) {
      this.data[idx] = last
      this._siftUp(idx)
      this._siftDown(idx)
    }
    return true
  }
  _siftUp(idx = this.data.length - 1) {
    let parent = Math.floor((idx - 1) / 2)
    while (idx > 0 && this.comparator(this.data[idx], this.data[parent])) {
      ;[this.data[idx], this.data[parent]] = [this.data[parent], this.data[idx]]
      idx = parent
      parent = Math.floor((idx - 1) / 2)
    }
  }
  _siftDown(idx = 0) {
    const length = this.data.length
    while (true) {
      let left = 2 * idx + 1,
        right = 2 * idx + 2,
        swap = idx
      if (left < length && this.comparator(this.data[left], this.data[swap])) swap = left
      if (right < length && this.comparator(this.data[right], this.data[swap])) swap = right
      if (swap === idx) break
      ;[this.data[idx], this.data[swap]] = [this.data[swap], this.data[idx]]
      idx = swap
    }
  }
}
class MaxHeap extends Heap {
  constructor() {
    super((a, b) => a > b)
  }
}

class MinHeap extends Heap {
  constructor() {
    super((a, b) => a < b)
  }
}

export { medianSlidingWindow }
