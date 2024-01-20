/*
 * @lc app=leetcode id=1832 lang=javascript
 *
 * [1832] Check if the Sentence Is Pangram
 */

// @lc code=start
/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    
    let alphabetArr = [];
    let sentenceArr = sentence.split('');

    for(let i = 97; i <= 122; i++ ){
        alphabetArr.push(String.fromCharCode(i));
    }

    for(let i = 0; i < alphabetArr.length; i++){
       if(!sentenceArr.includes(alphabetArr[i])) return false;
    }

    return true;
};
// @lc code=end

