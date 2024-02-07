/*
 * @lc app=leetcode id=153 lang=java
 *
 * [153] Find Minimum in Rotated Sorted Array
 */

// @lc code=start
class Solution {
    public int findMin(int[] arr) {
        int start = 0;
        int end = arr.length-1;
        
        while(start <= end){
            int mid = start + (end-start)/2;

            if(arr[mid] > arr[end]) start = mid+1;
            else if(arr[mid] < arr[end]) end = mid;
            else return arr[end];
        }

        return 0;
    }
}
// @lc code=end

