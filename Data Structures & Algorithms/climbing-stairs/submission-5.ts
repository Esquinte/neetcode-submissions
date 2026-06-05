let cache = {}

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        const cacheResult = cache[n]

        if (cacheResult) {
            return cacheResult
        }

        if (n < 3) {
            return n
        }

        const result = this.climbStairs(n - 1) + this.climbStairs(n - 2)
        cache[n] = result;

        return result;
    }
}

// 4
// 1 + 1 + 1 + 1
// 1 + 2 + 1
// 1 + 1 + 2
// 2 + 1 + 1
// 2 + 2