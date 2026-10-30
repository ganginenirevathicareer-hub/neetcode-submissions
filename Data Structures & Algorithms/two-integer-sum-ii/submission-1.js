class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let map = new Map();

        for(let i=0;i<numbers.length;i++){
            let com = target- numbers[i];

            if(map.has(com)){
                return[map.get(com) +1, i+1]
            }else{
                map.set(numbers[i],i)
            }
        }
    }
}
