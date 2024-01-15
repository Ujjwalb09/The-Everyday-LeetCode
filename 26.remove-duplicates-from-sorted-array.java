/*
 * @lc app=leetcode id=26 lang=java
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start

import java.util.ArrayList;
import java.util.List;

class Solution {
    public int removeDuplicates(int[] nums) {
         List<Integer> list = new ArrayList<>();
         
         for(int i = 0; i < nums.length; i++){
            if(i==0){
                list.add(nums[i]);
                continue;
            }

            if(nums[i] == nums[i-1]){
                continue;
            } else {
                list.add(nums[i]);
            }
         }

         for(int i = 0; i < nums.length; i++){
            if(i < list.size()){
                nums[i] = list.get(i);
                continue;
            }

            nums[i] = 0;
         }

         return list.size();
    }
}
// @lc code=end

