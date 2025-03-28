import { describe, expect, test } from 'vitest'
import { LRUCache } from '../src/146'

describe('146. LRU Cache', () => {
  test('Example 1: Basic operations', () => {
    const lruCache = new LRUCache(2)

    lruCache.put(1, 1) // cache is {1=1}
    lruCache.put(2, 2) // cache is {1=1, 2=2}
    expect(lruCache.get(1)).toBe(1) // return 1

    lruCache.put(3, 3) // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
    expect(lruCache.get(2)).toBe(-1) // returns -1 (not found)

    lruCache.put(4, 4) // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
    expect(lruCache.get(1)).toBe(-1) // returns -1 (not found)
    expect(lruCache.get(3)).toBe(3) // returns 3
    expect(lruCache.get(4)).toBe(4) // returns 4
  })

  test('Updating existing keys', () => {
    const lruCache = new LRUCache(2)

    lruCache.put(1, 1)
    lruCache.put(2, 2)
    expect(lruCache.get(1)).toBe(1)

    lruCache.put(1, 10) // update the value of existing key
    expect(lruCache.get(1)).toBe(10) // should return updated value
    expect(lruCache.get(2)).toBe(2) // should still be able to get key 2
  })

  test('LRU eviction order after gets', () => {
    const lruCache = new LRUCache(3)

    lruCache.put(1, 1)
    lruCache.put(2, 2)
    lruCache.put(3, 3)

    expect(lruCache.get(1)).toBe(1) // 1 is now most recently used
    lruCache.put(4, 4) // should evict key 2

    expect(lruCache.get(2)).toBe(-1) // should be evicted
    expect(lruCache.get(1)).toBe(1) // should exist
    expect(lruCache.get(3)).toBe(3) // should exist
    expect(lruCache.get(4)).toBe(4) // should exist
  })

  test('Edge case: capacity of 1', () => {
    const lruCache = new LRUCache(1)

    lruCache.put(1, 1)
    expect(lruCache.get(1)).toBe(1)

    lruCache.put(2, 2) // should evict key 1
    expect(lruCache.get(1)).toBe(-1)
    expect(lruCache.get(2)).toBe(2)
  })

  test('Edge case: get non-existent key', () => {
    const lruCache = new LRUCache(3)

    expect(lruCache.get(1)).toBe(-1) // empty cache
    lruCache.put(1, 1)
    expect(lruCache.get(2)).toBe(-1) // get non-existent key
  })
})
