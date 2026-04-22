class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const length = nums.length;
        const ans = new Array(length * 2);

        for (let i = 0; i < nums.length; i++) {
            const value = nums[i]

            ans[i] = value;
            ans[i + length] = value;
        }

        return ans;
    }
}
