/**
 * 给定一个数组和一个Number，求该Number是数组中哪两个Number之和，并输出它们的位置
 * @param {number[]} nums - 给定的数组
 * @param {number} target - 给定的Number
 * @returns {number[]}
 */
var twoSum = function (nums, target) {
    nums.forEach(function (val, i) {
        if (target > nums[i] || target == nums[i]) {
            for (j = 0; j < lens; j++) {
                if (j !== i) {
                    if (target - nums[i] === nums[j]) {
                        return [i, j];
                    }
                }
            }
        }
    });
};
