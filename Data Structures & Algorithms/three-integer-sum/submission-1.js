class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(arr) {
        let updatedArr = [];

        arr.sort((a, b) => a - b);

        for (let i = 0; i < arr.length; i++) {
            //ఒకవేళ arr[i] దాని ముందటి నంబర్‌లాగే ఉంటే, డ్యూప్లికేట్స్ రాకుండా ఉండటానికి ఆ i ని స్కిప్ చేయాలి
            if (i > 0 && arr[i] === arr[i - 1]) continue;

            let left = i + 1;
            let right = arr.length - 1;

            while (left < right) {
                let sum = arr[i] + arr[left] + arr[right];

                if (sum === 0) {
                    updatedArr.push([arr[i], arr[left], arr[right]]);

                    // డ్యూప్లికేట్స్ స్కిప్ చేయడానికి
                    while (left < right && arr[left] === arr[left + 1]) left++;
                    while (left < right && arr[right] === arr[right - 1]) right--;

                    left++;
                    right--;
                } else if (sum > 0) {
                    right--;
                } else {
                    left++;
                }
            }
        }

        return updatedArr;
    }
}
