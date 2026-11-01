class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;
        let map = new Map();
        let max = 0;
        let maxFreq  = 0;


        for (let right = 0; right < s.length; right++) {

            map.set(s[right], (map.get(s[right]) || 0) + 1)
            maxFreq = Math.max(maxFreq, map.get(s[right]))
            

           while ((right - left + 1) - maxFreq > k) {
                map.set(s[left], (map.get(s[left]) || 0) - 1)
                left++
            }

            max = Math.max(max, right-left+1)
        }
        return max

    }
}
