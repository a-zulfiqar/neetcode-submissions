class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const dupeCount = new Set(nums).size
        return dupeCount !== nums.length
    }
}
