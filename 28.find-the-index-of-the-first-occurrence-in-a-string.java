/*
 * @lc app=leetcode id=28 lang=java
 *
 * [28] Find the Index of the First Occurrence in a String
 */

// @lc code=start
class Solution {
    public int strStr(String haystack, String needle) {
     
        String str = "";

        for(int i = 0; i <= haystack.length()-needle.length(); i++){

            str = "";
            for(int j = i; j < i + needle.length(); j++){
                 str += haystack.charAt(j);
            }

            if(str.length() == needle.length()){
                if(str.equals(needle)){
                    return i;
                }
            }
        }

        return -1;
        
    }
}
// @lc code=end

