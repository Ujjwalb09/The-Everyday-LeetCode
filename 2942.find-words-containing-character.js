/*
 * @lc app=leetcode id=2942 lang=javascript
 *
 * [2942] Find Words Containing Character
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    
    let arrayofIndices = [];

        for(let i = 0; i < words.length; ++i){
            if(words[i].includes(x)) arrayofIndices.push(i);
        }
    

    return arrayofIndices;
};
// @lc code=end

