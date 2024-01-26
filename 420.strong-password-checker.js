/*
 * @lc app=leetcode id=420 lang=javascript
 *
 * [420] Strong Password Checker
 */

// @lc code=start
/**
 * @param {string} password
 * @return {number}
 */
function strongPasswordChecker(pw, minLength = 6, maxLength = 20, maxRepeat = 2) {
    let re = new RegExp(`(.)\\1{0,${maxRepeat}}(?=\\1{${maxRepeat}})`, 'g');
    let changes = (pw.match(re) || []).map(s => s.length).sort((a, b) => b - a);

    let toRemove = pw.length - maxLength;
    while (changes.at(-1) <= toRemove) {
        toRemove -= changes.pop();
    }

    let numChanges = Math.max(
        changes.length, !/[a-z]/.test(pw) + !/[A-Z]/.test(pw) + !/[0-9]/.test(pw));
    return Math.max(minLength - pw.length, numChanges + Math.max(0, pw.length - maxLength));
};
// @lc code=end

