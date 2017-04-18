/**
 * @file 数据结构和算法的基础练习 · 桶排序
 * @author 熊猫桑
 */

/**
 * 简易桶排入门，给定若干数字排序
 */
(function () {
    function bucketSort(arr, max) {
        var m = max || 10; // 待排序元素范围
        var book = new Array(m + 1);
        var i,j,s,t = [];
        for (i = 0; i < book.length; i++) {
            book[i] = 0;
        }
        for (i = 0; i < arr.length; i++) {
            s = arr[i]; // 将输入的数组读入临时变量
            book[s]++; // 数组相应位置的“桶”自增
        }
        for (i = 0; i < book.length; i++) { // 由小至大排。逆序则i初始值为max、每次循环自减~
            for (j = 0; j < book[i]; j++) { // 按照“桶”内计数器数量打印
                t.push(i);
            }
        }
        console.log(t);
    }
    // testing
    bucketSort([5,3,5,2,8]);
    bucketSort([8,100,50,22,15,6,1,1000,999,0], 1000);
})();

/** [Tips]
 * 算法的时间复杂度计算：在L14循环了m次（m为桶的个数），在L17循环了n次（n为数字的个数），在L21和L22循环了m次+n次，
 * 所以该算法的时间复杂度O就是 O(m+n+m+n) = O(2(m+n))，在忽略较少的常数后记为 O(m+n)。
 */