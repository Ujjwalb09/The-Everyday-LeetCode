/*
 * @lc app=leetcode id=1816 lang=javascript
 *
 * [1816] Truncate Sentence
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    //s = "Hello how are you bro" -> split = [hello, how, are, you, bro];
    //k = 4

    let resultStr = "";
    let stringArr = s.split(" ");

    for(let i = 0; i < stringArr.length; i++){
       if(k > 0){ 
        if(k===1){
            resultStr += stringArr[i];
            break; 
        }
        resultStr += stringArr[i];
        resultStr += " ";
       }
       k--;
    }

    return resultStr;

};
// @lc code=end

