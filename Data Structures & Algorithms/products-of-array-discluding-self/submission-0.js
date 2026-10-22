class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const res = new Array(n).fill(1);

        let leftNum = 1;
        for (let i = 0; i < n; i++) {
            res[i] = leftNum;
            leftNum *= nums[i]
        }

        let rightNum = 1;
        for (let i = n - 1; i >= 0; i--) {
            res[i] *= rightNum;
            rightNum *= nums[i]
        }
        return res
    }
}

console.log(new Solution().productExceptSelf([1, 2, 4, 6]))
