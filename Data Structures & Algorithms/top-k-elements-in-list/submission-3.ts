class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    /*topKFrequent(nums: number[], k: number): number[] {
        const group = new Map<number, number>()

        for (const num of nums) {
            const match = group.get(num) ?? 0
            group.set(num, match + 1)
        }

        const res = Array.from(group.entries())

        return res.sort((a, b) => b[1] - a[1]).map((pair) => pair[0]).splice(0, k)
    }*/

    topKFrequent(nums: number[], k: number): number[] {
        const group = new Map<number, number>()

        for (const num of nums) {
            const occurrence = group.get(num) ?? 0
            group.set(num, occurrence + 1)
        }

        const freq = Array.from({length: nums.length + 1}, () => [])

        for (const [value, occurrence] of group.entries()) {
            freq[occurrence].push(value)
        }

        const res = []
        for (let i = freq.length - 1; i >= 0; i--) {
            for (const n of freq[i]) {
                res.push(n)
                if (res.length === k) {
                    return res;
                }
            }
        }
    }
}
