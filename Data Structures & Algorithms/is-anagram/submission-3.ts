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

        const tracker: Record<string, number> = Object.create(null)

        for (let i=0; i < s.length; i++) {
            tracker[s[i]] = (tracker[s[i]] || 0) + 1
        }

        for (let i=0; i < t.length; i++) {
            if (!tracker[t[i]]) {
                return false
            }
            tracker[t[i]]--
        }

        return true

    }
}
