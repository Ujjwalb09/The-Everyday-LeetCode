/*
 * @lc app=leetcode id=1095 lang=java
 *
 * [1095] Find in Mountain Array
 */

// @lc code=start
/**
 * // This is MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * interface MountainArray {
 *     public int get(int index) {}
 *     public int length() {}
 * }
 */
 
 class Solution {
    public int findInMountainArray(int target, MountainArray mountainArr) {
     int peakIndex = findPeak(mountainArr);

     int left = binarySearch(0, peakIndex, mountainArr, target);

     if(left == -1) return binarySearch(peakIndex, mountainArr.length()-1, mountainArr, target);

     return left;
    }

    public int binarySearch(int start, int end, MountainArray mountainArr, int target){
          
          if(mountainArr.get(start) < mountainArr.get(end)){
          while(start <= end){
              int mid = start + (end-start)/2;

              if(mountainArr.get(mid) > target) end = mid-1;
              else if(mountainArr.get(mid) < target) start = mid+1;
              else return mid;
          }

          return -1;
          } else {
              while(start <= end){
              int mid = start + (end-start)/2;

              if(mountainArr.get(mid) > target) start = mid+1;
              else if(mountainArr.get(mid) < target) end = mid-1;
              else return mid;
          }

          return -1;
          }
    }

    public int findPeak(MountainArray mountainArr) {
        int start = 0;
        int end = mountainArr.length() - 1;

        while (start < end) {
            int mid = start + (end - start) / 2;

            if (mountainArr.get(mid + 1) > mountainArr.get(mid))
                start = mid + 1;
            else
                end = mid;
        }

        return start;
    }
}
// @lc code=end

