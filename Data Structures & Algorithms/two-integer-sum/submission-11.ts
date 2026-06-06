class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const valueIndexes = new Map(nums.map((num, index) => [num, index]))
        
        for (let i = 0; i < nums.length; i++) {
            const matchValue = target - nums[i]
            const valueIndex = valueIndexes.get(matchValue)

            if (typeof valueIndex !== 'undefined' && valueIndex !== i) {
                return [i, valueIndex]
            }
        }
    }
}
