/*
 * @lc app=leetcode id=1207 lang=javascript
 *
 * [1207] Unique Number of Occurrences
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    
    let occurenceMap = new Map();

    for(let item of arr){
        if(occurenceMap.has(item)){
            let newValue = occurenceMap.get(item);
            newValue += 1;
            occurenceMap.set(item, newValue);
        } else {
            occurenceMap.set(item, 1);
        }
    }

    let arrOfValues = [];

    for(let value of occurenceMap.values()){
        if(arrOfValues.includes(value)){
            return false;
        }

        arrOfValues.push(value);
    }

    return true;
};
// @lc code=end

