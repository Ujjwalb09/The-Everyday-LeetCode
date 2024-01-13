/*
 * @lc app=leetcode id=1528 lang=java
 *
 * [1528] Shuffle String
 */

// @lc code=start
class Solution {
    public String restoreString(String s, int[] indices) {
        
        //s = "codeleet"
        //indices[] = [4,5,6,7,0,2,1,3];
        char[] resultArr = new char[indices.length];

        for(int i = 0; i < indices.length; i++){
            char c = s.charAt(i);
            int indexToInsert = indices[i];

            resultArr[indexToInsert] = c;
        }

        String result = new String(resultArr);
        return result;

    }
}
// @lc code=end

