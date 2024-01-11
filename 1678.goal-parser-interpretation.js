/*
 * @lc app=leetcode id=1678 lang=javascript
 *
 * [1678] Goal Parser Interpretation
 */

// @lc code=start
/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    
    let result = "";

    for(let i = 0; i < command.length; i++){
        if(command[i] !== '(' && command[i] !== ')'){
            result += command[i];
        } else if(command[i] === '(' && command[i+1] === ')'){
            result += "o";
        }
    }

    return result;
};
// @lc code=end

