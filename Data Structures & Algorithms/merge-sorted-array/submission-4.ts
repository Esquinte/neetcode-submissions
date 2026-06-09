class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1: number[], m: number, nums2: number[], n: number): void {
        let write = m + n - 1
        let ptr1 = m - 1;
        let ptr2 = n - 1

        while (write >= 0) {
            if (ptr2 < 0 || nums1[ptr1] > nums2[ptr2]) {
                nums1[write--] = nums1[ptr1--]
            } else {
                nums1[write--] = nums2[ptr2--]
            }
        }
    }
}
