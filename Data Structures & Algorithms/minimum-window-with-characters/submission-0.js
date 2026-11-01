class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t === "" || s.length < t.length) return "";
        let min = Infinity;
        let left = 0;
        let map = new Map();
        let targetMap = new Map();




        for (let char of t) {
            targetMap.set(char, (targetMap.get(char) || 0) + 1);
        }


        let need = targetMap.size
        let have = 0;
        let resultIndices = [-1, -1];

        for (let right = 0; right < s.length; right++) {

            map.set(s[right], (map.get(s[right]) || 0) + 1)

            if (targetMap.has(s[right]) && map.get(s[right]) === targetMap.get(s[right])) {
                have++
            }

            while (need === have) {
                if (right - left + 1 < min) {
                    min = right - left + 1;
                    resultIndices = [left, right];
                }

                map.set(s[left], (map.get(s[left]) || 0) - 1)

                if (targetMap.has(s[left]) && map.get(s[left]) < targetMap.get(s[left])) {
                    have--
                }
                left++
            }
        }

        let [start, end] = resultIndices;
        return min === Infinity ? "" : s.substring(start, end + 1);

    }
}
