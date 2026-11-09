class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        const result = [];
        let i = 0;
        let n = intervals.length;

        // స్టెప్ 1: కొత్త ఇంటర్వెల్ కంటే ముందున్న వాటిని యాడ్ చేయడం (Left side)
        while (i < n && intervals[i][1] < newInterval[0]) {
            result.push(intervals[i]);
            i++;
        }

        // స్టెప్ 2: ఓవర్‌ల్యాప్ అయ్యే వాటిని మెర్జ్ చేయడం (Middle merge)
        while (i < n && intervals[i][0] <= newInterval[1]) {
            newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
            newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
            i++;
        }
        // ఫైనల్‌గా ఆ మెర్జ్ అయిన కొత్త ఇంటర్వెల్‌ని పుష్ చేయడం
        result.push(newInterval);

        // స్టెప్ 3: మిగిలిన రైట్ సైడ్ ఇంటర్వెల్స్ ని యాడ్ చేయడం (Right side)
        while (i < n) {
            result.push(intervals[i]);
            i++;
        }

        return result;
    }
}
