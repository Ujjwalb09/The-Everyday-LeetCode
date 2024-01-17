/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
    let digitStr = digits.join('');

    let digitNum = BigInt(digitStr);
    digitNum += 1n;

    let resultArr = [];

    while(digitNum!=0){
        let digit = digitNum%10n;
        resultArr.unshift(Number(digit));
        digitNum = digitNum/10n;
    }

    return resultArr;
};
// @lc code=end

