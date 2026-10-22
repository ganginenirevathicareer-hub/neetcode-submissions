class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = new Map();

        for(let i=0;i<nums.length;i++){
            const num = nums[i]
            if(seen.has(num)){
                return true
            }else{
                seen.set(num,i)
            }
        }
        return false
    }
}

console.log(new Solution().hasDuplicate([1,2,3,3]))
