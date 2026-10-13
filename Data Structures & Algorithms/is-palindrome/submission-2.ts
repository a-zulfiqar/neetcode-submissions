class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let leftP = 0
        let rightP = s.length - 1

        console.log(!/^[a-zA-Z0-9]$/.test(s[leftP]))

        while (leftP < rightP) {
            while (leftP < rightP && !/^[a-zA-Z0-9]$/.test(s[leftP])) {
                leftP++
            }

            while (leftP < rightP && !/^[a-zA-Z0-9]$/.test(s[rightP])) {
                rightP--
            }

            if (s[leftP].toLocaleLowerCase() != s[rightP].toLocaleLowerCase()) return false
        
        leftP++
        rightP--
        }

        return true
    }
}
