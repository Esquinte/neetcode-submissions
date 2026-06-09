class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums: number[]): number[] {
        const result: number[] = Array.from({length: nums.length})

        let l = 0;
        let r = nums.length - 1
        let write = result.length - 1;

        while (l <= r) {
            console.log(write)
            if (Math.abs(nums[l]) < Math.abs(nums[r])) {
                result[write--] = nums[r--]**2
            } else {
                result[write--] = nums[l++]**2
            }
        }

        return result
    }
}
