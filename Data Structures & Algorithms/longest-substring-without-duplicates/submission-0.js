class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(arr) {

        let left = 0;
        let max = 0;
        let map = new Map();

        for (let right = 0; right < arr.length; right++) {

            map.set(arr[right], (map.get(arr[right]) || 0) + 1)

            while (map.get(arr[right]) > 1) {
                map.set(arr[left], (map.get(arr[left]) || 0) - 1)
                left++
            }
            max = Math.max(max, right - left + 1)
        }

        return max


    }
}
