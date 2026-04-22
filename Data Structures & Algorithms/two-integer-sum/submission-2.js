class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const indexes = new Map()

        for (let i = 0; i < nums.length; i++) {
            indexes.set(nums[i], i)
        }

        for (let i = 0; i < nums.length; i++) {
            let diff = target - nums[i];

            const j = indexes.get(diff)
            if (j && j !== i) {
                return [i, j];
            }
        }

        return []
    }
}
