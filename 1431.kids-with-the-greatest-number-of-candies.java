/*
 * @lc app=leetcode id=1431 lang=java
 *
 * [1431] Kids With the Greatest Number of Candies
 */

// @lc code=start

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class Solution {
    public List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
        
        List<Boolean> ans = new ArrayList<Boolean>();

        int max = candies[0];

        for(int candy : candies){
            max = Math.max(max, candy);
        }

        for(int i = 0; i < candies.length; i++){
            if(candies[i] + extraCandies >= max){
                ans.add(true);
            } else {
                ans.add(false);
            }
        }

        return ans;
    }
}
// @lc code=end

