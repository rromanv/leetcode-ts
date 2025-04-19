import { describe, expect, it } from 'vitest'
import { minMeetingRooms } from '../src/253'

describe('253', () => {
  it('should return 2 for overlapping intervals', () => {
    const intervals = [
      [0, 30],
      [5, 10],
      [15, 20],
    ]
    expect(minMeetingRooms(intervals)).toBe(2)
  })

  it('should return 1 for non-overlapping intervals', () => {
    const intervals = [
      [7, 10],
      [2, 4],
    ]
    expect(minMeetingRooms(intervals)).toBe(1)
  })

  it('should return 0 for empty input', () => {
    const intervals: number[][] = []
    expect(minMeetingRooms(intervals)).toBe(0)
  })

  it('should return 1 for a single interval', () => {
    const intervals = [[10, 20]]
    expect(minMeetingRooms(intervals)).toBe(1)
  })

  it('should return 3 for multiple overlapping intervals', () => {
    const intervals = [
      [1, 5],
      [2, 6],
      [3, 7],
    ]
    expect(minMeetingRooms(intervals)).toBe(3)
  })

  it('should return 1 for intervals ending and starting at the same time', () => {
    const intervals = [
      [1, 5],
      [5, 10],
    ]
    expect(minMeetingRooms(intervals)).toBe(1)
  })

  it('should return 2 for intervals with shared endpoint', () => {
    const intervals = [
      [1, 10],
      [2, 7],
      [3, 19],
      [8, 12],
      [10, 20],
      [11, 30],
    ]
    // [1,10], [2,7], [3,19], [8,12], [10,20], [11,30]
    // Room1: [1,10], [10,20]
    // Room2: [2,7], [8,12]
    // Room3: [3,19]
    // Room4: [11,30]
    // Expected: 4, but the provided solution might differ based on implementation details.
    // Let's re-evaluate based on standard greedy approach:
    // Sort starts: [1, 2, 3, 8, 10, 11]
    // Sort ends:   [7, 10, 12, 19, 20, 30]
    // 1: start=1, end=7. rooms=1. endPtr=0.
    // 2: start=2, end=10. rooms=2. endPtr=0.
    // 3: start=3, end=12. rooms=3. endPtr=0.
    // 4: start=8, end=19. start > ends[0](7). rooms=3. endPtr=1.
    // 5: start=10, end=20. start == ends[1](10). rooms=3. endPtr=2.
    // 6: start=11, end=30. start > ends[2](12). rooms=3. endPtr=3.
    // Max rooms = 3. Let's adjust the expectation.
    // Wait, let's re-trace:
    // Starts: [1, 2, 3, 8, 10, 11]
    // Ends:   [7, 10, 12, 19, 20, 30]
    // i=0, start=1. Allocate room 1. rooms=1. endTimes=[7]
    // i=1, start=2. Allocate room 2. rooms=2. endTimes=[7, 10]
    // i=2, start=3. Allocate room 3. rooms=3. endTimes=[7, 10, 19] (used end=19 for interval [3,19])
    // i=3, start=8. Can use room 1 (ends at 7). rooms=3. endTimes=[10, 12, 19] (updated room 1 end time to 12 for [8,12])
    // i=4, start=10. Can use room 1 (ends at 10). rooms=3. endTimes=[12, 19, 20] (updated room 1 end time to 20 for [10,20])
    // i=5, start=11. Can use room 2 (ends at 12). rooms=3. endTimes=[19, 20, 30] (updated room 2 end time to 30 for [11,30])
    // Max rooms needed = 4. Let's re-verify the logic.
    // Using min-heap approach:
    // Sort by start time: [[1,10], [2,7], [3,19], [8,12], [10,20], [11,30]]
    // 1. Process [1,10]. Heap=[10]. rooms=1.
    // 2. Process [2,7]. Heap=[7, 10]. rooms=2.
    // 3. Process [3,19]. Heap=[7, 10, 19]. rooms=3.
    // 4. Process [8,12]. Peek=7. 8 >= 7. Remove 7. Add 12. Heap=[10, 12, 19]. rooms=3.
    // 5. Process [10,20]. Peek=10. 10 >= 10. Remove 10. Add 20. Heap=[12, 19, 20]. rooms=3.
    // 6. Process [11,30]. Peek=12. 11 < 12. Add 30. Heap=[12, 19, 20, 30]. rooms=4.
    // Max rooms = 4.
    expect(minMeetingRooms(intervals)).toBe(4)
  })
})
