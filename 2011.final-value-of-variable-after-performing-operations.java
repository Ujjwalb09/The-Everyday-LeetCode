/*
 * @lc app=leetcode id=2011 lang=java
 *
 * [2011] Final Value of Variable After Performing Operations
 */

// @lc code=start
class Solution {
    public int finalValueAfterOperations(String[] operations) {
        
        String incrementOp1 = "++X";
        String incrementOp2 = "X++";
        String decrementOp1 = "--X";
        String decrementOp2 = "X--";

        int x = 0;

        for(int i = 0; i < operations.length; i++){
            if(operations[i].equals(incrementOp1) || operations[i].equals(incrementOp2)){
                x += 1;
            }else if(operations[i].equals(decrementOp1)|| operations[i].equals(decrementOp2)){ 
                x -= 1;
            }
        }


        
        return x;
    }
}
// @lc code=end

