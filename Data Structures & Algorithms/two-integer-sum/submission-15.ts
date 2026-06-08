class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const group = new Map<number, number>(nums.map((num, index) => [num, index]))

        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i]

            const matchIndex = group.get(diff)
            if (matchIndex && i !== matchIndex) {
                return [i, matchIndex]
            }
        }
    }
}
