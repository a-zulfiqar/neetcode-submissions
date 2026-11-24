class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        if len(s) <= k + 1:
            return len(s)
        
        freqDict = {}

        maxSeq = 1
        currentSeq = 1
        maxFreqChar = 0

        leftPointer = 0
        rightPointer = 0

        while rightPointer < len(s):
            freqDict[s[rightPointer]] = freqDict.get(s[rightPointer], 0) + 1

            maxFreqChar = max(freqDict, key=freqDict.get)

            while currentSeq - freqDict[maxFreqChar] > k:
                freqDict[s[leftPointer]] = freqDict.get(s[leftPointer]) - 1
                maxFreqChar = max(freqDict,key=freqDict.get)

                currentSeq -= 1
                leftPointer += 1

            maxSeq = max(maxSeq, currentSeq)

            rightPointer += 1
            currentSeq += 1

        return maxSeq
