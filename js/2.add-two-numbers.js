/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 *
 * 给定两个多位数（链表），输出两个多位数之和(链表)
 * @example
 * {(2 -> 4 -> 3) + (5 -> 6 -> 4)} => {7 -> 0 -> 8}
 * @param {ListNode} l1 - 多位数1（链表）
 * @param {ListNode} l2 - 多位数2（链表）
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
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
