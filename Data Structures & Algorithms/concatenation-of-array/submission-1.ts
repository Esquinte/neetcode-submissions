class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        const ans: number[] = Array.from({length: nums.length * 2})

        for (let i = 0; i < nums.length; i++) {
            const value = nums[i]

            ans[i] = value
            ans[i + nums.length] = value
        }

        return ans
    }
}
