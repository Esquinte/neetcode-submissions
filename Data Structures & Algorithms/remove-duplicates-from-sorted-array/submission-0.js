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

        const uniqueElements = [];
        uniqueElements.push(nums[0]);

        for (let i = 1; i < nums.length; i++) {
            if (nums[i] !== nums[i-1]) {
                uniqueElements.push(nums[i])
            }
        }

        for (let i = 0; i < uniqueElements.length; i++) {
            nums[i] = uniqueElements[i];
        }

        return uniqueElements.length;
    }
}