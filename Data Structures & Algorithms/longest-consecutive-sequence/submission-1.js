class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const res = new Set(nums);
        let longest = 0;

        for (let num of res) {
            if (!res.has(num - 1)) {
                let length = 1;

                while (res.has(num + length)) {
                    length++
                }

                longest = Math.max(longest, length)
            }
        }
        return longest
    }
}
