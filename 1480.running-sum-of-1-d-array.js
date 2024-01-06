/*
 * @lc app=leetcode id=1480 lang=javascript
 *
 * [1480] Running Sum of 1d Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {

    let runningSumArr = [];

    runningSumArr.push(nums[0]);

    for(let i = 1; i < nums.length; i++){
        runningSumArr.push(runningSumArr[i-1] + nums[i]);
    }

    return runningSumArr;
    
};
// @lc code=end

