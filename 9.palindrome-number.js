/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    let string = x.toString();
    let reversedString = string.split('').reverse().join('');
    return string == reversedString ? true : false;
};
// @lc code=end

