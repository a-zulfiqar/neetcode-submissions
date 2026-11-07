class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if len(s) < 2:
            return len(s)

        letterSet = set()

        leftPointer = 0
        rightPointer = 1
        maxLength = 0

        letterSet.add(s[0])

        while rightPointer < len(s):
            if s[rightPointer] not in letterSet:
                letterSet.add(s[rightPointer])
                rightPointer += 1
                maxLength = max(len(letterSet), maxLength)
            else:
               letterSet.remove(s[leftPointer])
               leftPointer += 1

        return maxLength
            