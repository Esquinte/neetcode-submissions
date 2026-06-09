class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums: number[]): void {
        let read = 0;
        let write = 0;

        while (read < nums.length) {
            if (nums[read] !== 0) {
                [nums[read], nums[write]] = [nums[write], nums[read]]
                write++
            }

            read++
        }
    }
}