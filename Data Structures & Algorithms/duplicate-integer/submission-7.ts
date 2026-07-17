class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const numsNoDupes: number[] = [...new Set<number>(nums)]

        return numsNoDupes.length !== nums.length
    }
}
