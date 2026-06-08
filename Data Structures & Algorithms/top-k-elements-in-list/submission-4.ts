class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const count = new Map<number, number>()

        for (const num of nums) {
            const occurrence = (count.get(num) ?? 0) + 1
            count.set(num, occurrence)
        }

        const freq = Array.from({length: nums.length + 1}, () => [])

        for (const [num, occurrence] of count.entries()) {
            freq[occurrence].push(num)
        }

        const result: number[] = []

        for (let i = freq.length - 1; i >= 0; i--) {

            let j = 0
            while (j < freq[i].length) {
                result.push(freq[i][j])
                j++

                if (result.length === k) {
                    return result;
                }
            }
        }

        return []

    }
}
