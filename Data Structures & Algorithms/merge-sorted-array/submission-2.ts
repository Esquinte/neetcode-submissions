class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1: number[], m: number, nums2: number[], n: number): void {
        let r1 = m - 1;
        let r2 = n - 1;

        let i = m + n - 1

        while (r1 >= 0 && r2 >= 0) {
            if (nums1[r1] < nums2[r2]) {
                nums1[i] = nums2[r2]
                r2--;
            } else {
                nums1[i] = nums1[r1]
                r1--;
            }
            i--
        }

        while (r1 >= 0) {
            nums1[i] = nums1[r1]
            r1--;
            i--;
        }

        while (r2 >= 0) {
            nums1[i] = nums2[r2]
            r2--;
            i--;
        }
    }
}
