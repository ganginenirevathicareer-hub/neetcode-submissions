class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
     const result = s.split('').sort().join('') === t.split('').sort().join('');
     return result
    }
}

console.log(new Solution().isAnagram("car","rac"))
