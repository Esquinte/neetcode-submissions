class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums: number[]): number {
        const hasSeen = new Set<number>()

        let read = 0;
        let write = 0;

        while (read < nums.length) {
            if (!hasSeen.has(nums[read])) {
                hasSeen.add(nums[read])
                nums[write] = nums[read]
                write++
            }

            read++
        }

        return hasSeen.size
    }
}
