/*
 * @lc app=leetcode id=9 lang=java
 *
 * [9] Palindrome Number
 */

// @lc code=start
class Solution {
    public boolean isPalindrome(int x) {
        
        int originalNumber = x;
        int reverse = 0;

        while(x!=0){
            int digit = x%10;
            reverse = reverse*10 + digit;
            x = x/10;
        }

        if(originalNumber == reverse) return true;

        return false;
    }
}
// @lc code=end

