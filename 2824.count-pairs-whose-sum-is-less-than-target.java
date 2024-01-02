/*
 * @lc app=leetcode id=2824 lang=java
 *
 * [2824] Count Pairs Whose Sum is Less than Target
 */

// @lc code=start

import java.util.List;

class Solution {
    public int countPairs(List<Integer> nums, int target) {
        int count = 0;

        Integer[] arr = nums.toArray(new Integer[nums.size()]);

    for(int i = 0; i < arr.length-1; i++){
        for(int j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] < target) count++;
        }
    }

    return count;
    }
}
// @lc code=end

