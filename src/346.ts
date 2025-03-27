/**
 * 346. Moving Average from Data Stream
 * https://leetcode.com/problems/moving-average-from-data-stream/
 * Easy
 *
 * Design a class that calculates the moving average of a stream of integers.
 * Implement the MovingAverage class:
 * - MovingAverage(int size) Initializes the object with the window's size.
 * - double next(int val) Returns the moving average of the last size values of the stream.
 *
 * Algorithm: Queue/Circular Buffer
 * Time Complexity: O(1) for each call to next
 * Space Complexity: O(n) where n is the window size
 *
 * @param {number} size - The size of the moving window
 */
class MovingAverage {
  /**
   * Initialize your data structure here.
   * @param {number} size - The size of the moving window
   */
  private size: number
  private store = new Array<number>()
  private sum = 0
  constructor(size: number) {
    this.size = size
  }

  /**
   * Returns the moving average of the current window
   * @param {number} val - The new value to add to the window
   * @return {number} - The moving average of all values in the window
   */
  next(val: number): number {
    if (this.store.length === this.size) this.sum -= this.store.shift()!

    this.store.push(val)
    this.sum += val
    return this.sum / this.store.length
  }
}

export { MovingAverage }
