/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 *
 * https://leetcode-cn.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (33.16%)
 * Total Accepted:    95.4K
 * Total Submissions: 287.6K
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 * 
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 
 * 示例：
 * 
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var i = l1,
        j = l2,
        rLN = new ListNode(0), // 存储输出结果
        rCache = rLN, // 存储操作变量
        si = 0,
        cbit = 0; // 进位

    if (i.val == 0 && !i.next) return j; // 某参数为[0]时直接返回
    if (j.val == 0 && !j.next) return i;

    do {
        if (!i) i = new ListNode(0); // 两链表成员个数不对等时做补齐
        if (!j) j = new ListNode(0);
        si = i.val + j.val + cbit;
        if (si > 9) {
            cbit = Math.floor(si / 10);
            si %= 10;
        } else {
            cbit = 0;
        }
        rCache.val = si;
        if (i.next != null || j.next != null || cbit != 0) { // 最后判断是否存在进位
            rCache.next = new ListNode(0);
            rCache = rCache.next;
        }
        i = i.next;
        j = j.next;
    } while (i != null || j != null || cbit != 0)

    return rLN;
};

