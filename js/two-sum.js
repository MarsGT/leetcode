/**
 * 给定一个数组和一个Number，求该Number是数组中哪两个Number之和，并输出它们的位置
 * @param {number[]} nums - 给定的数组
 * @param {number} target - 给定的Number
 * @returns {number[]}
 */
var twoSum = function (nums, target) {
    var lens = nums.length;
    var i, j;
    for (i = 0; i < lens; i++) {
        if (target - nums[i] > 0) {
            for (j = 0; j < lens; j++) {
                if (j !== i) {
                    if (target - nums[i] === nums[j]) {
                        return [i, j];
                    }
                }
            }
        }
    }
};

var nums = [11, 15, 7, 2],
    target = 9;

var result = twoSum(nums, target);
console.info(result);
