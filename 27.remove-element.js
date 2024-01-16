/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    
    let k = 0;
    let resultArr = [];

    for(let i = 0; i < nums.length; i++){
        if(nums[i] === val){
            nums[i] = " ";
        } else if(nums[i] != val){
            resultArr.push(nums[i]);
        }
    }

    k = resultArr.length;

    nums = nums.sort();
    nums = nums.reverse();

    return k;
};
// @lc code=end

