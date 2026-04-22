class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        return this.binarySearch(nums, 0, nums.length - 1, target)
    }

    binarySearch(nums, l, r, target) {
        if (l > r) {
            return -1;
        }

        const half = l + Math.floor((r - l) / 2)

        if (nums[half] === target) {
            return half;
        }

        return nums[half] > target ? this.binarySearch(nums, l, half - 1, target) : this.binarySearch(nums, half + 1, r, target)
    }
}
