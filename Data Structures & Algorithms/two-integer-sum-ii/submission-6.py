class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        leftPointer = 0
        rightPointer = len(numbers) - 1

        while (leftPointer < rightPointer):
            sumLR = numbers[leftPointer] + numbers[rightPointer]

            if sumLR < target:
                leftPointer += 1
            elif sumLR > target:
                rightPointer -= 1
            else:
                return [leftPointer + 1, rightPointer + 1]