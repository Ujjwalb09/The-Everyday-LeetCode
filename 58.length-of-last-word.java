/*
 * @lc app=leetcode id=58 lang=java
 *
 * [58] Length of Last Word
 */

// @lc code=start
class Solution {
    public int lengthOfLastWord(String s) {
        
        int lastLength = 0;
        String[] wordArray = s.split(" ");

        for(int i = wordArray.length-1; i >= 0; i--){
            if(wordArray[i].length() > 0){
                lastLength = wordArray[i].length();
                break;
            }
        }

        return lastLength;
    }
}
// @lc code=end

