/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    //s = "   fly me   to   the moon  "

    let removedSpaces = s.replace(/\s+/g, " "); //removing whitespaces in between
    
    //removing trailing spaces and splitting string into array
    let stringArray = removedSpaces.trim().split(" ");

    return stringArray[stringArray.length-1].length;
};
// @lc code=end

