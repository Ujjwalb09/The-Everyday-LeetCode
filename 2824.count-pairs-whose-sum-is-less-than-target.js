/*
 * @lc app=leetcode id=2824 lang=javascript
 *
 * [2824] Count Pairs Whose Sum is Less than Target
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(arr, target) {
    
    let count = 0;

    for(let i = 0; i < arr.length-1; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] < target) count++;
        }
    }

    return count;
};
// @lc code=end

