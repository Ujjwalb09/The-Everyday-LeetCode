/*
 * @lc app=leetcode id=1662 lang=javascript
 *
 * [1662] Check If Two String Arrays are Equivalent
 */

// @lc code=start
/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    
    let string1 = word1.join('');
    let string2 = word2.join('');

    if(string1 === string2) return true;

    return false;
};
// @lc code=end

