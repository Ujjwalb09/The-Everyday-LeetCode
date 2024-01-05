/*
 * @lc app=leetcode id=1470 lang=javascript
 *
 * [1470] Shuffle the Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {

    let i = 0;
    let j = nums.length/2;

    let shuffledArr = [];

    while(i < nums.length/2 && j < nums.length){
             
        shuffledArr.push(nums[i], nums[j]);
        i++;
        j++;
    }

    return shuffledArr;
    
};
// @lc code=end

