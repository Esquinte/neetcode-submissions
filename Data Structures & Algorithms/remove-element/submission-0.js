class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let readPointer = 0;
        let writePointer = 0;

        while (readPointer < nums.length) {
            if (nums[readPointer] !== val) {
                nums[writePointer++] = nums[readPointer++]
                continue;
            }

            readPointer++;
        }

        return writePointer;
    }
}
