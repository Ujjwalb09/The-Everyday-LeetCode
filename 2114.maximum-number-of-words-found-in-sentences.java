/*
 * @lc app=leetcode id=2114 lang=java
 *
 * [2114] Maximum Number of Words Found in Sentences
 */

// @lc code=start
class Solution {
    public int mostWordsFound(String[] sentences) {
        
        int maxWord = 0;

        for(int i = 0; i < sentences.length; i++){
            String str = sentences[i];
         
            String[] charArr = str.split(" "); 
            
            if(charArr.length > maxWord) maxWord = charArr.length;
        }

        return maxWord;
    }
}
// @lc code=end

