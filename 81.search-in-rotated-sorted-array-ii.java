/*
 * @lc app=leetcode id=81 lang=java
 *
 * [81] Search in Rotated Sorted Array II
 */

// @lc code=start
class Solution {
    public boolean search(int[] arr, int target) {

        int pivot = findPivot(arr);

        if (pivot == -1)
            return binarySearch(0, arr.length - 1, arr, target);

        if (target == arr[pivot])
            return true;

        if (target >= arr[0])
            return binarySearch(0, pivot - 1, arr, target);

        return binarySearch(pivot + 1, arr.length - 1, arr, target);
    }

    public boolean binarySearch(int start, int end, int[] arr, int target) {

        while (start <= end) {
            int mid = start + (end - start) / 2;

            if (target > arr[mid])
                start = mid + 1;
            else if (target < arr[mid])
                end = mid - 1;
            else
                return true;
        }

        return false;
    }

    public int findPivot(int[]arr){
        int start = 0;
        int end = arr.length-1;

        while(start <= end){
            int mid = start + (end-start)/2;

            if(mid < end && arr[mid] > arr[mid+1]) return mid;

            if(mid > start && arr[mid-1] > arr[mid]) return mid-1;

            //if elements at start, mid, end are equal we will skip the duplicates
            if(arr[mid] == arr[start] && arr[mid] == arr[end]){

                //check if start is pivot
                if(mid < end && arr[start] > arr[start+1]) {
                    return start;
                }
               
                //check if end is pivot
                if(mid > start && arr[end] < arr[end-1]) return end-1;

                start++;
                end--;
            }
            else if(arr[start] < arr[mid] || (arr[start] == arr[mid] && arr[mid] > arr[end])){
                start = mid+1;
            } else {
                end = mid-1;
            }

        }

        return -1;
    }
}
// @lc code=end

