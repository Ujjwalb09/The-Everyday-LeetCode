/*
 * @lc app=leetcode id=1662 lang=java
 *
 * [1662] Check If Two String Arrays are Equivalent
 */

// @lc code=start
class Solution {
    public boolean arrayStringsAreEqual(String[] word1, String[] word2) {
        
        String string1 = "";
        String string2 = "";

        for(String str : word1) string1 += str;
        for(String str : word2) string2 += str;

        if(string1.equals(string2)) return true;

        return false;
        
    }
}
// @lc code=end

