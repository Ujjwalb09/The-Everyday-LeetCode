/*
 * @lc app=leetcode id=2828 lang=java
 *
 * [2828] Check if a String Is an Acronym of Words
 */

// @lc code=start
class Solution {
    public boolean isAcronym(List<String> words, String s) {
        String string = "";

        for(String word : words){
            string += word.charAt(0);
        }

        return string.equals(s) ? true : false;
    }
}
// @lc code=end

