class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums: number[]): number {
        let write = 0;

        for (const num of nums) {
            if (write < 2 || num !== nums[write - 2]) {
                nums[write++] = num;
            }
        }

        return write;
    }
}
