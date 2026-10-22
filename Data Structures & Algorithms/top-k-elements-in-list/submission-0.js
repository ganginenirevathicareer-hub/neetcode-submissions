class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const seen = new Map();

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i]
            seen.set(num, (seen.get(num)|| 0) + 1)

        }

        const entries = [...seen].sort((a, b) => b[1] - a[1]);

        const result = []

        for (let i = 0; i < k; i++) {
            result.push(entries[i][0])
        }
        
        return result
    }
}

console.log(new Solution().topKFrequent([1, 2, 2, 3, 3, 3], 2))
