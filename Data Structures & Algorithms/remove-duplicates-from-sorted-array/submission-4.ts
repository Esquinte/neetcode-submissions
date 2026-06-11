class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums: number[]): number {
        let write = 1;

        for (let read = 1; read < nums.length; read++) {
            if (nums[read] !== nums[read - 1]) {
                nums[write++] = nums[read];
            }
        }

        return write;
    }
}
