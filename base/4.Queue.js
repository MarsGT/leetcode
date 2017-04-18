/**
 * @file 数据结构和算法的基础练习 · 栈
 * @author 熊猫桑
 */

/**
 * - 队列类
 */
function Queue() {
    this.dataStore = []; // 初始化一个空数组，保存队列元素
    this.enqueue = enqueue; // 向队尾添加一个元素
    this.dequeue = dequeue; // 删除队首元素
    this.front = front; // 读取队首元素
    this.back = back; // 读取队尾元素
    this.toString = toString; // 返回队列内所有元素
    this.empty = empty; // 判断队列是否为空
}

function enqueue(element) {
    this.dataStore.push(element);
}
function dequeue() {
    this.dataStore.shift();
}
function front() {
    return this.dataStore[0];
}
function back() {
    return this.dataStore[this.dataStore.length - 1];
}
function toString() {
    var str = "";
    for (var i = 0;i < this.dataStore.length; ++i) {
        str += this.dataStore[i] + "\n";
    }
    return str;
}
function empty() {
    return this.dataStore.length === 0 ? true : false;
}

/**
 * Test
 */
var Q = new Queue();
console.log(Q.empty());
Q.enqueue('11111');
Q.enqueue('123123');
Q.enqueue('9999');
console.log(Q.empty());
console.log(Q.toString());

// Test ending