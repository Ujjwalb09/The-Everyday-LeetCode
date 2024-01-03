/*
 * @lc app=leetcode id=2011 lang=javascript
 *
 * [2011] Final Value of Variable After Performing Operations
 */

// @lc code=start
/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let incrementOp1 = "++X";
    let incrementOp2 = "X++";
    let decrementop1 = "--X";
    let decrementop2 = "X--";

    let x = 0;

    for(let i = 0; i < operations.length; i++){
        if(operations[i] === incrementOp1 || operations[i]===incrementOp2) x = x+1;

        if(operations[i] === decrementop1 || operations[i] === decrementop2) x = x-1;
    }

    return x;
};
// @lc code=end

