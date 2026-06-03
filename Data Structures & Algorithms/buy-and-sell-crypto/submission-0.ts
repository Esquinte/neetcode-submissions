class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let l = 0;
        let r = 1
        let maxP = 0;

        while (r < prices.length) {
            if (prices[l] < prices[r]) {
                const profit = prices[r] - prices[l]
                maxP = Math.max(maxP, profit)
            } else {
                l = r
            }
            r++
        }

        return maxP
    }
}
