class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums: number[]): number {
        let read = 1;
        let write = 1;

        while (read < nums.length) {
            if (nums[read] !== nums[read - 1]) {
                nums[write] = nums[read]
                write++
            }

            read++
        }

        return write
    }
}
