class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        if (s.length === 0) return 0
        if (s.length === 1) return 1
        
        let leftPointer = 0
        const frequencyMap = new Map()
        let maxLetterF = 0
        let maxLength = 0
        let length = 0

        for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
            frequencyMap.set(s[rightPointer], (frequencyMap.get(s[rightPointer]) || 0) + 1)
            length++
            maxLetterF = Math.max(maxLetterF, frequencyMap.get(s[rightPointer]))
            
            while (length - maxLetterF > k) {
                frequencyMap.set(s[leftPointer], frequencyMap.get(s[leftPointer]) - 1)
                length--
                leftPointer++
            }

            maxLength = Math.max(maxLength, length)
        }

        return maxLength
    }
}
