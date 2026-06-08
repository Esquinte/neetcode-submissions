class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const group = new Map<number, number>()

        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i]

            if (group.has(diff)) {
                return [group.get(diff), i]
            }

            group.set(nums[i], i)
        }

        return []
    }
}
