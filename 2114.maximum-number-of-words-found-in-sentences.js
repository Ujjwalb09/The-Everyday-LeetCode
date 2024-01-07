/*
 * @lc app=leetcode id=2114 lang=javascript
 *
 * [2114] Maximum Number of Words Found in Sentences
 */

// @lc code=start
/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {

    let maxWord = 0;

    for(let i = 0; i < sentences.length; i++){
        let str = sentences[i];

        let charArr = str.split(" ");

        if(charArr.length > maxWord) maxWord = charArr.length;
    }

    return maxWord;
    
};
// @lc code=end

