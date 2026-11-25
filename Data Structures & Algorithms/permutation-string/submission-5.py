class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        if len(s1) > len(s2):
            return False

        lengthOfWindow = len(s1) - 1

        s1Dict = {}
        for letter in s1:
            s1Dict[letter] = s1Dict.get(letter, 0) + 1

        match = len(s1Dict)

        comparisonDict = {}

        leftPointer = 0

        for rightPointer, rightLetter in enumerate(s2):
            if rightLetter in s1:
                comparisonDict[rightLetter] = comparisonDict.get(rightLetter, 0) + 1
                
                if s1Dict[rightLetter] == comparisonDict[rightLetter]:
                    match -= 1

            if match == 0:
                return True

            if rightPointer - leftPointer == lengthOfWindow:
                leftLetter = s2[leftPointer]
                if leftLetter in s1:
                    if s1Dict[leftLetter] == comparisonDict[leftLetter]:
                        match += 1

                    comparisonDict[leftLetter] = comparisonDict.get(leftLetter) - 1

                leftPointer += 1

        return False
            