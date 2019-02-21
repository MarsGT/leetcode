/**
 * javascript链表实现(节点)
 * @typedef {object} Node
 */
function Node(element) {
    this.element = element;
    this.next = null;
}
/**
 * javascript链表实现(主体)
 * @typedef {object} ListNode
 */
function ListNode() {
    this.head = new Node('head');
};
ListNode.prototype = {
    find: function (item) {
        var currNode = this.head;
        while (currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    },
    findPrev: function (item) {
        var currNode = this.head;
        while (!(currNode.next == null) && (currNode.next.element != item)) {
            currNode = currNode.next;
        }
        return currNode;
    },
    findNext: function (item) {
        var currNode = this.find(item);
        return currNode.next;
    },
    insert: function (newElement, item) {
        var newNode = new Node(newElement);
        var currNode = this.find(item);
        newNode.next = currNode.next;
        currNode.next = newNode;
    },
    remove: function (item) {
        var prevNode = this.findPrev(item);
        if (!(prevNode.next == null)) {
            prevNode.next = prevNode.next.next;
        }
    },
    outputArr: function () {
        var currNode = this.head;
        var result = [];
        while (!(currNode.next == null)) {
            result.push(currNode.next.element);
            currNode = currNode.next;
        }
        return result;
    },
    each: function (fn) {
        var currNode = this.head;
        while (!(currNode.next == null)) {
            currNode = currNode.next;
            fn(currNode.element);
        }
    }
}

/**
 * 给定两个多位数（链表），输出两个多位数之和(链表)
 * @example
 * {(2 -> 4 -> 3) + (5 -> 6 -> 4)} => {7 -> 0 -> 8}
 * @param {ListNode} l1 - 多位数1（链表）
 * @param {ListNode} l2 - 多位数2（链表）
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    var r1 = [],
        r2 = [],
        result = [],
        rList = new ListNode(),
        cbit = 0,//进位暂存
        i;
    l1.each(function (item) {
        r1.push(item);
    });
    l2.each(function (item) {
        r2.push(item);
    });
    var lens = r1.length;
    for (i = 0; i < lens; i++) {
        result.push(r1[i] + r2[i] > 9 ? 0 : r1[i] + r2[i] + cbit);
        cbit = r1[i] + r2[i] > 9 ? 1 : 0; // 最高值9+9也只有18，所以进位是1
        rList.insert(result[i], (i - 1 < 0 ? 'head' : result[i - 1]));
    }
    
    return rList.outputArr();
};
