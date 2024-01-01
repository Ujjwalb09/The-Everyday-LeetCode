/*
 * @lc app=leetcode id=1512 lang=javascript
 *
 * [1512] Number of Good Pairs
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let goodPairs = 0;

    for(let i = 0; i < nums.length; i++){
        nums.forEach((number, index)=>{
            if(nums[i]===number && i!=index && index > i){
                goodPairs++;
            }
        })
    }

    return goodPairs;
};
// @lc code=end

