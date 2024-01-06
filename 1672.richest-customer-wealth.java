/*
 * @lc app=leetcode id=1672 lang=java
 *
 * [1672] Richest Customer Wealth
 */

// @lc code=start
class Solution {
    public int maximumWealth(int[][] accounts) {
        
        int maxWealth = 0;

        for(int i = 0; i < accounts.length; i++){
            int countMoney = 0;
            for(int j = 0; j < accounts[0].length; j++){
                countMoney += accounts[i][j];
            }
            maxWealth = Math.max(maxWealth, countMoney);
        }

        return maxWealth;
    }
}
// @lc code=end

