class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const prefix: number[] = Array.from({length: nums.length})
        const postfix: number[] = Array.from({length: nums.length})

        let i = 0;
        let j = nums.length - 1
        while (i < nums.length) {
            if (i === 0) {
                prefix[i] = 1
            } else {
                prefix[i] = prefix[i - 1] * nums[i - 1]
            }

            if (j === nums.length - 1) {
                postfix[j] = 1
            } else {
                postfix[j] = postfix[j + 1] * nums[j + 1]
            }

            i++;
            j--;
        }

        console.log(prefix, postfix)

        const results: number[] = Array.from({length: nums.length})

        for (let i = 0; i < nums.length; i++) {
            results[i] = prefix[i] * postfix[i]
        }

        return results
    }
}

// [1, 2, 3, 4]

// [1, 2, 6, 24]

// [24, 24, 12, 4]

// [24, 12, 8, 6]