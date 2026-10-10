class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numMap = new Map<number, number>()
        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i]

            if (numMap.has(diff)) {
                return [numMap.get(diff), i]
            }

            numMap.set(nums[i], i)
        }

//         for (let i = 0; i < nums.length; i++) {
//             const firstNum = nums[i]
//             
//             for (let j = i + 1; j < nums.length; j++) {
//                 if (firstNum + nums[j] === target) {
//                     return [i, j]
//                 }
//             }
        // }
    }
}
