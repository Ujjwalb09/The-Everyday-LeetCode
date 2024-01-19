/*
 * @lc app=leetcode id=2108 lang=javascript
 *
 * [2108] Find First Palindromic String in the Array
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    
    for(let i = 0; i < words.length; i++){
        let word = words[i];
        word = word.split('').reverse().join('');

        if(word == words[i]) return words[i];
    }

    return "";
};
// @lc code=end

