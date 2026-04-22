class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        if (!nums || !Array.isArray(nums)) {
            return 0;
        }

        if (nums.length < 2) {
            return nums.length;
        }

        let readPointer = 1;
        let writePointer = 1;

        while(readPointer < nums.length) {
            if (nums[readPointer - 1] !== nums[readPointer]) {
                nums[writePointer] = nums[readPointer]
                writePointer++;
            }
            readPointer++;
        }

        return writePointer;
    }
}