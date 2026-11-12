class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = Infinity;
        let maxProfit = 0;

        for (let i = 0; i < prices.length; i++) {
            const currentPrice = prices[i];

            // 1. Minimum buying price track cheyyali
            if (currentPrice < minPrice) {
                minPrice = currentPrice;
            }
            // 2. Current price nunchi minPrice theesi profit calculate cheyyali
            else if (currentPrice - minPrice > maxProfit) {
                maxProfit = currentPrice - minPrice;
            }
        }

        return maxProfit;
    }
}
