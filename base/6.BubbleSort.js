/**
 * @file 数据结构和算法的基础练习 · 冒泡排序
 * @author 熊猫桑
 */

/**
 * 冒泡排序
 */
(function () {
    function bubbleSort(arr) {
        var i,j,temp;
        var len = arr.length;
        for (i = 0; i < len; i++) {
            for (j = 0; j < len - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    }
    // testing
    var a = bubbleSort([8, 100, 50, 22, 15, 6, 1, 1000, 999, 0]);
    console.log(a);
    // 由于有循环嵌套，所以冒泡的时间复杂度为O(N^2)
})();