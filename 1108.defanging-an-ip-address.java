/*
 * @lc app=leetcode id=1108 lang=java
 *
 * [1108] Defanging an IP Address
 */

// @lc code=start
class Solution {
    public String defangIPaddr(String address) {
        
       String[] strArray = address.split("");

       for(int i = 0; i < strArray.length; i++){
        if(strArray[i].equals(".")) strArray[i] = "[.]";
       } 
       
       String defrraString = "";

       for(int i = 0; i < strArray.length; i++){
        defrraString += strArray[i];
       }

        return defrraString;
      
    }
}
// @lc code=end

