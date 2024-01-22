/*
 * @lc app=leetcode id=136 lang=java
 *
 * [136] Single Number
 */

// @lc code=start

import java.util.HashMap;
import java.util.Map;

class Solution {
    public int singleNumber(int[] nums) {

        Map<Integer, Integer> map = new HashMap<>();

         for(int i = 0; i < nums.length; i++){
            if(map.containsKey(nums[i])){
                map.put(nums[i], map.get(nums[i]) + 1);
            } else {
                map.put(nums[i], 1);
            }
         }

         for(Map.Entry<Integer, Integer> entry: map.entrySet()){
            if(entry.getValue().equals(1)){
                return entry.getKey();
            }
         }

         return 0;
    }
}
// @lc code=end

