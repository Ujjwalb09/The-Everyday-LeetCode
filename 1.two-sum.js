/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let map = new Map();
    let resultArr = [];

    for(let i = 0; i < nums.length; i++){
        map.set(nums[i], i);
    }

    for(let i = 0; i < nums.length; i++){
       let find = target - nums[i];

       if(map.get(find) && i != map.get(find)){
        resultArr.push(i, map.get(find));
        break;
       }
    }

    return resultArr;
};
// @lc code=end

/*




*/