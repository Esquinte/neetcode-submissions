class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const match: Record<number, number> = {}

        for (const num of nums) {
            match[num] = (match[num] ?? 0)  + 1
        }

        const arr = Object.entries(match).map(([num, freq]) => [
            freq, parseInt(num)
        ])
        arr.sort((a, b) => b[0] - a[0])

        console.log(arr)

        return arr.slice(0, k).flatMap((pair) => pair[1])
    }
}
