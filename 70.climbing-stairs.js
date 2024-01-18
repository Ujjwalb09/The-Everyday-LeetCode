/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n==0) return 1;
    if(n==1) return 1;

    return climbStairs(n-1) + climbStairs(n-2);
};
// @lc code=end

