/*
 * @lc app=leetcode id=1470 lang=java
 *
 * [1470] Shuffle the Array
 */

// @lc code=start
class Solution {
    public int[] shuffle(int[] nums, int n) {
        int i = 0;
        int j = nums.length/2;

        int[] ansArr = new int[nums.length];
        int k = 0;

        while(i < nums.length/2 && j < nums.length){
            ansArr[k++] = nums[i++];
            ansArr[k++] = nums[j++];
        }

        return ansArr;
    }
}
// @lc code=end

