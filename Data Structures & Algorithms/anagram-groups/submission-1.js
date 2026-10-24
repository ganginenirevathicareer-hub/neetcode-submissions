class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hash = {};

        for (const str of strs) {
            const key = str.split("").sort().join("");
            if (!hash[key]) hash[key] = [];
            hash[key].push(str);
        }

        const result = Object.values(hash);
        return result
    }
}
