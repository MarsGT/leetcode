/**
 * @file 数据结构和算法的基础练习 · 快速排序
 * @author 熊猫桑
 */

/**
 * 快速排序(1~10)，分治法策略
 */
(function () {
    function quickSort(arr) {

        if (arr.length <= 1) { // 这里的作用是为了结束最后return的递归，并返回数组
            return arr;
        };

        var left = [],
            right = []; // 基准值左/右的数组
        var pivotIndex = Math.floor(arr.length / 2),
            pivot = arr.splice(pivotIndex, 1)[0]; // 基准值取数组中间的值

        for (var i = 0, len = arr.length; i < len; i++) {
            if (arr[i] < pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }

        return quickSort(left).concat([pivot], quickSort(right));

    }

    // test
    console.log(quickSort([8, 7, 0, 7, 5, 2, 5, 3, 1, 9, 5, 1, 7, 2, 4, 5, 3, 7, 2, 9, 13, 19]).toString());
})();