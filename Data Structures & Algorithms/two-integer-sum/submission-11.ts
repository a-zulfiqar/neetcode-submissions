class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        for (let i: number = 0; i < nums.length; i++) {
            const num2: number = target - nums[i]

            if (nums.indexOf(num2, i + 1) !== -1) {
                return [i, nums.indexOf(num2, i + 1)]

            }
        }
    }
}
