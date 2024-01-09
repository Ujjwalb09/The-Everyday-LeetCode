/*
 * @lc app=leetcode id=1768 lang=javascript
 *
 * [1768] Merge Strings Alternately
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {

    let n = word1.length > word2.length ? word1.length : word2.length;

    let mergedString = "";

    for(let i = 0; i < n; i++){
        if(i < word1.length){
            mergedString += word1[i];
        }

        if(i < word2.length){
            mergedString += word2[i];
        }
    }

    return mergedString;
    
};
// @lc code=end

