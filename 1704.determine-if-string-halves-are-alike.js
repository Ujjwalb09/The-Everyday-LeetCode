/*
 * @lc app=leetcode id=1704 lang=javascript
 *
 * [1704] Determine if String Halves Are Alike
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    
    let a = "";
    let b = "";
    let half = s.length/2;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelA = 0;
    let vowelB = 0;
    let string = s.toLowerCase();

    for(let i = 0; i < string.length; i++){
        if(i < half) a += string[i];
        if(i >= half) b += string[i];
    }

     for(let i = 0; i < a.length; i++){
        if(vowels.includes(a[i])) vowelA++;
        if(vowels.includes(b[i])) vowelB++;
     }

     if(vowelA === vowelB) return true;

     return false;
};
// @lc code=end
