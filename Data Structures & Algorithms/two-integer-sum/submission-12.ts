class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // Map to store: Key = Number Value, Value = Index Position
        const seen = new Map<number, number>();
        const len = nums.length;

        for (let i = 0; i < len; i++) {
            const currentNum = nums[i];
            const complement = target - currentNum;

            // Check if the number we need was already seen earlier
            if (seen.has(complement)) {
                return [seen.get(complement)!, i];
            }

            // Save the current number and its index for future steps
            seen.set(currentNum, i);
        }

        return []; // Fallback to satisfy TypeScript return requirements
    }
}
