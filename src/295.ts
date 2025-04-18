/**
 * 295. Find Median from Data Stream
 * https://leetcode.com/problems/find-median-from-data-stream/
 * Hard
 *
 * The MedianFinder class supports adding numbers from a data stream and finding the median of all added numbers.
 *
 * Algorithm: To be implemented
 * Time Complexity: To be implemented
 * Space Complexity: To be implemented
 */
class MedianFinder {
  lowers: MaxHeap<number>
  highers: MinHeap<number>

  constructor() {
    this.lowers = new MaxHeap<number>() // First half
    this.highers = new MinHeap<number>() // Second half
  }

  /**
   * Adds a number into the data structure.
   * @param {number} num - The number to add
   */
  addNum(num: number): void {
    if (this.lowers.size() === 0 || num <= this.lowers.peek()!) {
      this.lowers.push(num)
    } else {
      this.highers.push(num)
    }

    // Rebalance
    if (this.lowers.size() > this.highers.size() + 1) {
      this.highers.push(this.lowers.pop()!)
    } else if (this.highers.size() > this.lowers.size()) {
      this.lowers.push(this.highers.pop()!)
    }
  }

  /**
   * Returns the median of all elements so far.
   * @return {number} - The median value
   */
  findMedian(): number {
    if (this.lowers.size() > this.highers.size()) {
      return this.lowers.peek()!
    }

    return (this.lowers.peek()! + this.highers.peek()!) / 2
  }
}

type Comparator<T> = (a: T, b: T) => boolean

class Heap<T> {
  private data: T[] = []
  private comparator: Comparator<T>

  constructor(comparator: Comparator<T>) {
    this.comparator = comparator
  }

  size(): number {
    return this.data.length
  }

  peek(): T | undefined {
    return this.data[0]
  }

  push(item: T): void {
    this.data.push(item)
    this.heapifyUp()
  }

  pop(): T | undefined {
    if (this.size() === 0) return undefined
    const top = this.data[0]
    const last = this.data.pop()!
    if (this.size() > 0) {
      this.data[0] = last
      this.heapifyDown()
    }
    return top
  }

  private heapifyUp(): void {
    let index = this.data.length - 1
    const current = this.data[index]

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2)
      const parent = this.data[parentIndex]

      if (this.comparator(current, parent)) {
        this.data[index] = parent
        index = parentIndex
      } else break
    }

    this.data[index] = current
  }

  private heapifyDown(): void {
    let index = 0
    const length = this.data.length
    const current = this.data[0]

    while (true) {
      let leftIndex = 2 * index + 1
      let rightIndex = 2 * index + 2
      let swapIndex = index

      if (leftIndex < length && this.comparator(this.data[leftIndex], this.data[swapIndex])) {
        swapIndex = leftIndex
      }

      if (rightIndex < length && this.comparator(this.data[rightIndex], this.data[swapIndex])) {
        swapIndex = rightIndex
      }

      if (swapIndex === index) break

      this.data[index] = this.data[swapIndex]
      index = swapIndex
      this.data[index] = current
    }
  }
}

class MaxHeap<T> extends Heap<T> {
  constructor() {
    super((a, b) => a > b)
  }
}

class MinHeap<T> extends Heap<T> {
  constructor() {
    super((a, b) => a < b)
  }
}

export { MedianFinder }
