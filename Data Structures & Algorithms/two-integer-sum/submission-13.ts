class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const seen = new Map<number, number>()
        
        for (let i: number = 0; i < nums.length; i++) {
            const num2: number = target - nums[i]

            if (seen.has(num2)) {
                return [seen.get(num2)!, i]
            }
            seen.set(nums[i], i)
        }
    }
}
