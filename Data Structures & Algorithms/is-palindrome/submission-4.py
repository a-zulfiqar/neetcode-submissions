class Solution:
    def isPalindrome(self, s: str) -> bool:
        leftPointer = 0
        rightPointer = len(s) - 1

        while (leftPointer < rightPointer):
            while not s[leftPointer].isalnum() and leftPointer < rightPointer:
                leftPointer += 1

            while not s[rightPointer].isalnum() and leftPointer < rightPointer:
                rightPointer -= 1

            if type(s[leftPointer]) != type(s[rightPointer]):
                return False

            elif s[leftPointer].isnumeric() and s[leftPointer] != s[rightPointer]:
                return False

            elif s[leftPointer].capitalize() != s[rightPointer].capitalize():
                return False

            leftPointer += 1
            rightPointer -= 1

        return True

