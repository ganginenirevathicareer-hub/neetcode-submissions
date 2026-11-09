class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        if (!intervals || intervals.length <= 1) return intervals;

        intervals.sort((a, b) => a[0] - b[0]);

        let merged = [intervals[0]];

        for (let i = 0; i < intervals.length; i++) {
            const currentInterval = intervals[i];
            let lastMerged = merged[merged.length - 1];

            if (currentInterval[0] <= lastMerged[1]) {
                lastMerged[1] = Math.max(lastMerged[1], currentInterval[1])
            } else {
                merged.push(currentInterval)
            }
        }
        return merged
    }
}
