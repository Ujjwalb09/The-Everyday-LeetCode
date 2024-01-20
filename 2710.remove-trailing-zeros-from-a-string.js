/*
 * @lc app=leetcode id=2710 lang=javascript
 *
 * [2710] Remove Trailing Zeros From a String
 */

// @lc code=start
/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    
    return num.replace(/0+$/, "");

};
// @lc code=end

