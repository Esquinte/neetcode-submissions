class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const group = new Map<number, number>()

        for (const num of nums) {
            const match = group.get(num) ?? 0
            group.set(num, match + 1)
        }

        const res = Array.from(group.entries())

        return res.sort((a, b) => b[1] - a[1]).map((pair) => pair[0]).splice(0, k)
    }
}
