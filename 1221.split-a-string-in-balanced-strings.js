/*
 * @lc app=leetcode id=1221 lang=javascript
 *
 * [1221] Split a String in Balanced Strings
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    
    let L = 0;
    let R = 0;
    let count = 0;

    for(let i = 0; i < s.length-1; i++){
        L = 0;
        R = 0;
        if(s[i] === "L") L++;
        else R++

        for(let j = i+1; j < s.length; j++){
            if(s[j] === "L") L++;
            else R++;

            if(L === R){
                count ++;
                i = j;
            }
        }
    }

    return count;
};
// @lc code=end

