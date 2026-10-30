class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(arr) {
        let left = 0;
        let right = arr.length - 1;

        const isAlphaNumeric = (char) => {
            if (!char) return false;
            let c = char.toLowerCase();
            return (c >= "a" && c <= "z") || (c >= "0" && c <= "9");
        };

        while (left < right) {
            while (left < right && !isAlphaNumeric(arr[left])) {
                left++;
            }

            while (left < right && !isAlphaNumeric(arr[right])) {
                right--;
            }

            if (arr[left].toLowerCase() !== arr[right].toLowerCase()) {
                return false;
            }

            left++;
            right--;
        }

        return true;

    }
}

