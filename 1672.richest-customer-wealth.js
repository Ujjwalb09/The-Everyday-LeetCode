/*
 * @lc app=leetcode id=1672 lang=javascript
 *
 * [1672] Richest Customer Wealth
 */

// @lc code=start
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    
    let wealthiest = 0;

    for(let i = 0; i < accounts.length; i++){

        let countMoney = 0;
        
        accounts[i].forEach((money)=>{
             countMoney += money
        })

        wealthiest = Math.max(countMoney, wealthiest);
    }

    return wealthiest;
};
// @lc code=end

