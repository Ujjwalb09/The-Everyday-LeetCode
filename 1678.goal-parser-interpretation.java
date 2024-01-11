/*
 * @lc app=leetcode id=1678 lang=java
 *
 * [1678] Goal Parser Interpretation
 */

// @lc code=start
class Solution {
    public String interpret(String command) {
        
        String result = "";

        for(int i = 0; i < command.length(); i++){
            if(command.charAt(i) != '(' && command.charAt(i) != ')') result += command.charAt(i);
            else if(command.charAt(i) == '(' && command.charAt(i+1) == ')') result += "o";
        }

        return result;
    }
}
// @lc code=end

