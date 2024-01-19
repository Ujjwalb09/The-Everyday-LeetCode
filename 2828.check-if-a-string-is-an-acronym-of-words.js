/*
 * @lc app=leetcode id=2828 lang=javascript
 *
 * [2828] Check if a String Is an Acronym of Words
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    
    let string = "";

    for(let word of words){
        string += word[0];
    }

    if(string == s) return true;

    return false;
};
// @lc code=end

