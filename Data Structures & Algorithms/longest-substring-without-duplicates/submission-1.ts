class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let leftPointer = 0
        let maxLength = 0
        let letterStorage = new Set()

        for (let r = 0; r < s.length; r++) {
            while (letterStorage.has(s[r])) {
                letterStorage.delete(s[leftPointer])
                leftPointer++
            }

            letterStorage.add(s[r])
            maxLength = Math.max(maxLength, letterStorage.size)
        }

        return maxLength
    }
}
