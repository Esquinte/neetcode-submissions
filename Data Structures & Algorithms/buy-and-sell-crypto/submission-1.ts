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
            const profit = prices[sell] - prices[buy]

            if (profit > maxProfit) {
                maxProfit = profit
            } else {
                if (prices[buy] > prices[sell]){
                    buy = sell
                }
            }

            sell++

        }

        return maxProfit
    }
}

// [7,1,5,3,6,4]

// buy = 7 => sell = 1 => profit = -6 => maxProfit = 0
// buy = 1 => sell = 5 => profit = 4 => maxProfit = 4
// buy = 1 => sell = 3 => profit = 4 => maxProfit = 4