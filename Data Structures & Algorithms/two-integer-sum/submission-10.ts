class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const valueIndexes = new Map()
        
        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i]

            if (valueIndexes.has(diff)) {
                return [i, valueIndexes.get(diff)]
            }

            valueIndexes.set(nums[i], i)
        }
    }
}
