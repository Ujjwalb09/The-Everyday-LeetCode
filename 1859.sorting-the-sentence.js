/*
 * @lc app=leetcode id=1859 lang=javascript
 *
 * [1859] Sorting the Sentence
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let wordsArr = s.split(" ");
    let resultArr = [];

    for(let i = 0; i < wordsArr.length; i++){
        let word = wordsArr[i];
        let wordArr = word.split('');
        wordArr.pop();
        resultArr[Number(word[word.length-1])-1] = wordArr.join('');
    }

    return resultArr.join(" ");
};
// @lc code=end

