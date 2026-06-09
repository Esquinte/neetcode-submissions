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
                if (read !== write) {
                    nums[write] = nums[read]
                    nums[read] = 0;
                }
                write++
            }

            read++
        }
    }
}


// [1,0,2,0,0,3,4]
