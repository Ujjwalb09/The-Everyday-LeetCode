/*
 * @lc app=leetcode id=1221 lang=java
 *
 * [1221] Split a String in Balanced Strings
 */

// @lc code=start
class Solution {
    public int balancedStringSplit(String s) {
        
        int L = 0;
        int R = 0;
        int count = 0;

        for(int i = 0; i < s.length()-1; i++){
            L = 0;
            R = 0;
            if(s.charAt(i) == 'L') L++;
            else R++;

            for(int j = i+1; j < s.length(); j++){
                if(s.charAt(j) == 'L') L++;
                else R++;

                if(L == R){
                    count++;
                    i = j;
                }
            }
        }

        return count;
    }
}
// @lc code=end

