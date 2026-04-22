class Solution {

    constructor() {
        this.memory = new Map()
    }

    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (this.memory.has(n)) {
            return this.memory.get(n)
        }

        if (n < 3) {
            return n;
        }

        const result = this.climbStairs(n - 1) + this.climbStairs(n - 2);
        this.memory.set(n, result);
        return result;
    }
}


// n = 3
// climb(2) + climb(1)
// 3