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
            if (i - 1 < 0) {
                prefix[i] = nums[i]
            } else {
                prefix[i] = prefix[i - 1] * nums[i]
            }

            if (j + 1 >= nums.length) {
                postfix[j] = nums[j]
            } else {
                postfix[j] = postfix[j + 1] * nums[j]
            }

            i++;
            j--;
        }

        const res = []

        for (let n = 0; n < nums.length; n++) {
            const prefixProduct = n > 0 ? prefix[n - 1] : 1
            const postfixProduct = n < nums.length - 1 ? postfix[n + 1] : 1

            res.push(prefixProduct * postfixProduct)
        }


        return res
    }
}


// [1, 2, 4, 6]

// [1, 2, 8, 48]

// [48, 48, 24, 6]