class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if (s1.length > s2.length) return false

        const s1Map = new Map()
        for (let letter of s1) s1Map.set(letter, (s1Map.get(letter) || 0) + 1)

        let comparisonMap = new Map()
        let leftPointer = 0
        let matches = 0
        const goal = s1Map.size

        for (let rightPointer = 0; rightPointer < s2.length; rightPointer++) {
            let rightLetter = s2[rightPointer]
            comparisonMap.set(rightLetter, (comparisonMap.get(rightLetter) || 0) + 1)
            if (s1Map.has(rightLetter) && s1Map.get(rightLetter) === comparisonMap.get(rightLetter)) matches++

            if (rightPointer < s1.length - 1) continue

            if (matches === goal) {
                return true
            }

            let leftLetter = s2[leftPointer]
            if (s1Map.has(leftLetter) && s1Map.get(leftLetter) === comparisonMap.get(leftLetter)) matches--
            comparisonMap.set(leftLetter, comparisonMap.get(leftLetter)! - 1)

            if (comparisonMap.get(leftLetter) === 0) comparisonMap.delete(leftLetter)

            leftPointer++
        }

        return false
    }
}
