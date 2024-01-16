/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
    let k = 0;

    for(let i = 0; i < nums.length; i++){
        if(target > nums[nums.length-1]){
            k = nums.length;
        }

        if(target > nums[i]){
            continue;
        } else if(i >= 1 && target < nums[i] && target > nums[i-1]){
              k = i;
        } else if(nums[i] === target){
            k = i;
        }
    }

    return k;
};
// @lc code=end

