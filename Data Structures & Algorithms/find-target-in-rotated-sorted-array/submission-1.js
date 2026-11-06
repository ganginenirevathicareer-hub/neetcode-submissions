class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(arr, target) {

        let low = 0;
        let high = arr.length - 1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2)

            if (arr[mid] === target) {
                return mid
            }


            //chinna logic ikkaada rotated array lo manam 2 halfs ga chustham, first low to mid and then mid to high, so first low to mid ayithe if lo range theskunnam ikkada first arr[low] <= target, equal nduk ante target low value same undochu, but target < arr[mid] ikkada equal led nduk ante okavela equal ayithe paina if lo ne stop ayipoyedhi. so satisfy ayithe manam low anthe untadhi first lo undi ani tghelsindhi kabatti high ki set chestham, mid -1 ki, same else ki kudaa ade logics.

            if (arr[low] <= arr[mid]) {

                if (arr[low] <= target && target < arr[mid]) {
                    high = mid - 1
                } else {
                    low = mid + 1
                }

            } else {

                if (arr[mid] < target && target <= arr[high]) {
                    low = mid + 1
                } else {
                    high = mid - 1
                }

            }


        }

        return -1;

    }
}
