class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {        
        if (s.length != t.length) {
            return false
        }

        const tracker: Record<string, number> = {}

        for (const char of s) {
            tracker[char] = (tracker[char] || 0) + 1
        }

        for (const char of t) {
            if (!tracker[char]) {
                return false
            }
            tracker[char]--
        }

        return true

    }
}
