/*
 * @lc app=leetcode id=33 lang=java
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
class Solution {
    public int search(int[] arr, int target) {
        int pivotIndex = findPivot(arr);

        //if we do not have pivot it means array is not rotated
        if(pivotIndex == -1) return binarySearch(arr, target, 0, arr.length-1);

        //if target is pivot element return pivotindex
        if(target == arr[pivotIndex]) return pivotIndex;

        //if target lies in left range apply BS from start index to pivot-1
        if(target >= arr[0]) return binarySearch(arr, target, 0, pivotIndex-1);

        //else(target < arr[0]) apply BS from pivot+1 to end index
        return binarySearch(arr, target, pivotIndex+1, arr.length-1);
    }

    public int binarySearch(int[] arr, int target, int start, int end){

        while(start <= end){
            int mid = start + (end-start)/2;

            if(target > arr[mid]) start = mid+1;
            else if(target < arr[mid]) end = mid-1;
            else return mid;
        }

        return -1;
    }

    public int findPivot(int[] arr){

        int start = 0;
        int end = arr.length-1;

        while(start <= end){
            int mid = start + (end - start)/2;
            
            //case1
            if(mid < end && arr[mid] > arr[mid+1]) return mid;
            
            //case2
            if(mid > start && arr[mid] < arr[mid-1]) return mid-1;

            //mid will be equal to start in the case when we will have two elements
            //if they had pivot they would have been caught in above condition
            //if there are 2 elements and control is reaching below statements it implies
            //there is no pivot element.

            //case3
            if(arr[mid] <= arr[start]) end = mid-1;

            //case4
            if(arr[mid] >= arr[start]) start = mid+1;
        }

        return -1;

    }
}
// @lc code=end

