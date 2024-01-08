/*
 * @lc app=leetcode id=1773 lang=javascript
 *
 * [1773] Count Items Matching a Rule
 */

// @lc code=start
/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    //index[0] = type
    //index[1] = color
    //index[2] = name
   
    let count = 0;

    for(let i = 0; i < items.length; i++){
        itemArr = items[i];

        if(ruleKey === "color"){
           if(itemArr[1] === ruleValue) count++;
        } else if(ruleKey === "type"){
            if(itemArr[0] === ruleValue)count++;
        } else if(ruleKey === "name"){
            if(itemArr[2] === ruleValue) count++;
        }
    }

    return count;

};
// @lc code=end

