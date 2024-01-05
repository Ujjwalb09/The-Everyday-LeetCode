/*
 * @lc app=leetcode id=1365 lang=javascript
 *
 * [1365] How Many Numbers Are Smaller Than the Current Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {

    let ansArr = nums.map((number)=>{

        let k = 0;
        let count = 0;

        while(k < nums.length){
            if(nums[k++] < number) count++;
        }

        return count;
    })

    return ansArr;
    
};
// @lc code=end

