class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false
        

        const letterCounts = new Map<string, number>()

        for (const letter of s) {
            letterCounts.set(letter, (letterCounts.get(letter) || 0) + 1)
        }

        for (const letter of t) {
            letterCounts.set(letter, (letterCounts.get(letter) || 0) - 1)

            if (letterCounts.get(letter) < 0) return false
        }

        return true
    }
}
