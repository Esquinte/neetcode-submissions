class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let maxProfit = 0;
        let buy = 0;
        let sell = 1;

        while (sell < prices.length) {
            const profit = prices[sell] - prices[buy];

            if (profit > maxProfit) {
                maxProfit = profit;
            } else {
                if (prices[buy] > prices[sell]) {
                    buy = sell;
                }
            }

            sell++;
        }

        return maxProfit;
    }
}
