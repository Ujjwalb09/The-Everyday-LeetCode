/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(!s.length) return true;

    let string = s.replace(/[^a-zA-Z0-9]/g, '');
    let originalString = string.toLowerCase();

    string = string.split('').reverse().join('');

    if(string.toLowerCase() == originalString) return true;

    return false;
};
// @lc code=end

