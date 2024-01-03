/*
 * @lc app=leetcode id=2798 lang=java
 *
 * [2798] Number of Employees Who Met the Target
 */

// @lc code=start
class Solution {
    public int numberOfEmployeesWhoMetTarget(int[] hours, int target) {
        
        int targetMet = 0;

        for(int i = 0; i < hours.length; i++){
            if(hours[i] >= target) targetMet++;
        }

        return targetMet;
    }
}
// @lc code=end

