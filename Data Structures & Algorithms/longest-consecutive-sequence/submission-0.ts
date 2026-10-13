class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (nums.length === 0) return 0

        const numSet = new Set(nums)
        let longestSeq = 0

        for (let num of numSet) {
            let currentSeq = 1

            if (!numSet.has(num - 1)) {
                let currentNum = num
                
                while (numSet.has(currentNum + 1)) {
                    currentNum++
                    currentSeq++
                }
            }

            longestSeq = Math.max(longestSeq, currentSeq)
        }

        return longestSeq
    }
}
