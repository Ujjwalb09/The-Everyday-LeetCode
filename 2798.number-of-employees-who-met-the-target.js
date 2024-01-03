/*
 * @lc app=leetcode id=2798 lang=javascript
 *
 * [2798] Number of Employees Who Met the Target
 */

// @lc code=start
/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    
    let targetMet = 0;

    hours.forEach((hour)=>{
        if(hour >= target) targetMet++;
    })

    return targetMet;
};
// @lc code=end

