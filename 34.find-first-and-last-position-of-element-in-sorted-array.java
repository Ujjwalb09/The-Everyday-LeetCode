/*
 * @lc app=leetcode id=34 lang=java
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
class Solution {
    public int[] searchRange(int[] nums, int target) {
        int[] result = new int[2];
        int firstOccur = firstOccurence(nums, target);
        int lastOccur = lastOccurence(nums, target);

        result[0] = firstOccur;
        result[1] = lastOccur;

        return result;
    }

    public int firstOccurence(int[] nums, int target) {
        int start = 0;
        int end = nums.length - 1;
        int possibleAns = -1;

        while (start <= end) {
            int mid = start+ (end - start) / 2;

            if (target == nums[mid]) {
                possibleAns = mid;
                end = mid - 1;
            } else if (target > nums[mid])
                start = mid + 1;
            else
                end = mid - 1;
        }

        return possibleAns;
    }

    public int lastOccurence(int[] nums, int target) {
        int start = 0;
        int end = nums.length - 1;
        int possibleAns = -1;

        while (start <= end) {
            int mid = start + (end - start) / 2;

            if (target == nums[mid]) {
                possibleAns = mid;
                start = mid + 1;
            } else if (target > nums[mid])
                start = mid + 1;
            else
                end = mid - 1;
        }

        return possibleAns;
    }
}
// @lc code=end
