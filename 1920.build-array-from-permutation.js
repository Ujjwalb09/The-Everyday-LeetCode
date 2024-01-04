/*
 * @lc app=leetcode id=1920 lang=javascript
 *
 * [1920] Build Array from Permutation
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    
    let ans = nums.map((element, index)=>{
        return nums[nums[index]];
    })

    return ans;
};
// @lc code=end

