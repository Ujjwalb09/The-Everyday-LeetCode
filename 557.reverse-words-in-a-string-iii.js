/*
 * @lc app=leetcode id=557 lang=javascript
 *
 * [557] Reverse Words in a String III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
    let strArr = s.split(' ');
    let reversedStr = "";
    
    for(let i = 0; i < strArr.length; i++){
        let word = strArr[i];
        word = word.split('').reverse().join('');
        reversedStr += word;
        reversedStr += " ";
    }

    return reversedStr.trim();
};
// @lc code=end

