class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(arr, target) {
        const seen = new Map();

        for (let i = 0; i < arr.length; i++) {
            const num = arr[i];
            const complement = target - num;
            if (seen.has(complement)) {
                return [seen.get(complement), i]
            } else {
                seen.set(num, i)
            }
        }
    }
}

console.log(new Solution().twoSum([1, 2, 4, 2, 4, 0], 5))
