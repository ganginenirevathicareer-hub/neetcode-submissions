class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded_string = ""

        for (let str of strs) {
            encoded_string += str.length + "#" + str;
        }

        return encoded_string
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let i = 0;

        while (i < str.length) {
            let hashIndex = str.indexOf('#', i)
            const len = parseInt(str.slice(i, hashIndex));
            const wordStart = hashIndex + 1;
            let word = str.slice(wordStart, wordStart + len);
            res.push(word);
            i = wordStart + len;
        }
        return res;
    }
}
