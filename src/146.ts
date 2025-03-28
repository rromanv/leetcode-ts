/**
 * 146. LRU Cache
 * https://leetcode.com/problems/lru-cache/
 * Medium
 *
 * Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
 *
 * Implement the LRUCache class:
 * - LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
 * - int get(int key) Return the value of the key if the key exists, otherwise return -1.
 * - void put(int key, int value) Update the value of the key if the key exists.
 *   Otherwise, add the key-value pair to the cache. If the number of keys exceeds
 *   the capacity from this operation, evict the least recently used key.
 *
 * The functions get and put must each run in O(1) average time complexity.
 *
 * Algorithm: HashMap + Doubly Linked List
 * Time Complexity: O(1) for both get and put operations
 * Space Complexity: O(capacity) to store at most 'capacity' key-value pairs
 */

class LRUCache {
  capacity: number
  cache: Map<number, Node>
  leastUse: Node
  mostUse: Node
  /**
   * Initializes the LRU cache with positive size capacity
   * @param {number} capacity - The maximum number of items the cache can hold
   */
  constructor(capacity: number) {
    this.capacity = capacity

    this.cache = new Map<number, Node>()

    this.leastUse = new Node(0, 0)
    this.mostUse = new Node(0, 0)

    this.leastUse.next = this.mostUse
    this.mostUse.prev = this.leastUse
  }

  /**
   * Remove a Node from the Double Linked List
   * @param {Node} node - The node to be removed
   */
  private remove(node: Node) {
    node.prev!.next = node.next
    node.next!.prev = node.prev
  }

  /**
   * Insert a Node to the Double Linked List
   * @param {Node} node - The node to be inserter
   */
  private insert(node: Node) {
    const prev = this.mostUse.prev
    const next = this.mostUse
    prev!.next = node
    next!.prev = node

    node.prev = prev
    node.next = next
  }

  /**
   * Returns the value of the key if the key exists, otherwise returns -1
   * @param {number} key - The key to search for
   * @returns {number} - The value associated with the key, or -1 if not found
   */
  get(key: number): number {
    if (this.cache.has(key)) {
      const node = this.cache.get(key)!
      this.remove(node)
      this.insert(node)
      return node.val
    }
    return -1
  }

  /**
   * Updates the value of the key if the key exists. Otherwise, adds the key-value pair to the cache.
   * If the number of keys exceeds the capacity from this operation, evicts the least recently used key.
   * @param {number} key - The key to add or update
   * @param {number} value - The value to associate with the key
   */
  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      const node = this.cache.get(key)!
      node.val = value
      this.remove(node)
      this.insert(node)
      return
    }

    if (this.cache.size === this.capacity) {
      const least = this.leastUse.next!
      this.remove(least)
      this.cache.delete(least.key)
    }

    const node = new Node(key, value)
    this.cache.set(key, node)
    this.insert(node)
  }
}

class Node {
  key: number
  val: number
  prev: Node | null
  next: Node | null
  constructor(key: number, val: number) {
    this.key = key
    this.val = val
    this.prev = null
    this.next = null
  }
}

export { LRUCache }

/**
 * LRUCache2 - Alternative implementation using JavaScript's Map insertion order preservation
 *
 * This implementation leverages the fact that JavaScript Maps maintain insertion order
 * of keys. When a key is accessed or updated, we remove and re-add it to move it
 * to the end of the iteration order (most recently used position).
 *
 * Time Complexity: O(1) for both get and put operations
 * Space Complexity: O(capacity) to store at most 'capacity' key-value pairs
 */
class LRUCache2 {
  /** Map to store key-value pairs and track access order */
  cache = new Map<number, number>()

  /** Maximum capacity of the cache */
  private max: number

  /**
   * Initializes the LRU cache with positive size capacity
   * @param {number} capacity - The maximum number of items the cache can hold
   */
  constructor(capacity: number) {
    this.max = capacity
  }

  /**
   * Returns the value of the key if the key exists, otherwise returns -1
   * @param {number} key - The key to search for
   * @returns {number} - The value associated with the key, or -1 if not found
   */
  get(key: number): number {
    if (this.cache.has(key)) {
      const value = this.cache.get(key)!
      this.put(key, value) // Move key to the end (most recently used)
      return value
    }
    return -1
  }

  /**
   * Updates the value of the key if the key exists. Otherwise, adds the key-value pair to the cache.
   * If the number of keys exceeds the capacity from this operation, evicts the least recently used key.
   * @param {number} key - The key to add or update
   * @param {number} value - The value to associate with the key
   */
  put(key: number, value: number): void {
    // If at capacity and key doesn't exist, remove the oldest item (first key in iteration order)
    if (this.cache.size === this.max && !this.cache.has(key)) this.cache.delete(this.cache.keys().next().value!)

    // Delete existing key to ensure it will be re-added at the end of iteration order
    if (this.cache.has(key)) this.cache.delete(key)

    // Add the key-value pair (will be at the end of the iteration order)
    this.cache.set(key, value)
  }
}
