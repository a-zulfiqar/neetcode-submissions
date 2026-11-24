class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        if len(s) <= k + 1:
            return len(s)
        
        freqDict = {}

        maxSeq = 1
        maxFreq = 0
        leftPointer = 0

        for rightPointer, char in enumerate(s):
            freqDict[char] = freqDict.get(char, 0) + 1

            currentSeq = rightPointer + 1 - leftPointer
            maxFreq = max(maxFreq, freqDict[char])

            while currentSeq - maxFreq > k:
                freqDict[s[leftPointer]] = freqDict.get(s[leftPointer]) - 1
                maxFreq = max(maxFreq, freqDict[s[leftPointer]])

                currentSeq -= 1
                leftPointer += 1

            maxSeq = max(maxSeq, currentSeq)

            rightPointer += 1

        return maxSeq
