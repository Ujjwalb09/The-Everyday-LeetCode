/*
 * @lc app=leetcode id=1480 lang=java
 *
 * [1480] Running Sum of 1d Array
 */

// @lc code=start
class Solution {
    public int[] runningSum(int[] nums) {
        
        int[] runningSumArr = new int[nums.length];

        runningSumArr[0] = nums[0];

        for(int i = 1; i < nums.length; i++){
            runningSumArr[i] = runningSumArr[i-1] + nums[i];
        }

        return runningSumArr;
    }
}
// @lc code=end

