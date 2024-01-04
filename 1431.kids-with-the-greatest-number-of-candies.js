/*
 * @lc app=leetcode id=1431 lang=javascript
 *
 * [1431] Kids With the Greatest Number of Candies
 */

// @lc code=start
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {

    let ans = [];
    
    for(let i = 0; i < candies.length; i++){
        let count = 0;
        for(let j = 0; j < candies.length; j++){
            if(candies[i] + extraCandies >= candies[j] && i != j){
                count++
            }
        }

        if(count === candies.length-1){
            ans[i] = true;
        } else {
            ans[i] = false;
        }
    }

    return ans;
};
// @lc code=end

