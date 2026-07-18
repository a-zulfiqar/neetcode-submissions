class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numsCopy: number[] = [...nums]

        for (let i: number = 0; i < nums.length; i++) {
            numsCopy.shift()
            const num2: number = target - nums[i]


            if (numsCopy.includes(num2)) {
                return [i, i + 1 + numsCopy.indexOf(num2)]
            }
        }
    }
}
