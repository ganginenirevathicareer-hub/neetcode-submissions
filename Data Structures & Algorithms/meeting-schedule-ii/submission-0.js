/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        if (!intervals || intervals.length <= 1) return intervals.length

        const start = intervals.map(interval => interval.start);
        const end = intervals.map(interval => interval.end);

        start.sort((a, b) => a - b);
        end.sort((a, b) => a - b);

        let endIndex = 0;
        let count = 0;

        for (let i = 0; i < start.length; i++) {
           
            if (start[i] < end[endIndex]) {
                count++
            } else {
                endIndex++
            }

        }

        return count
    }
}
