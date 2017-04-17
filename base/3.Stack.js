/**
 * @file 数据结构和算法的基础练习 · 栈
 * @author 熊猫桑
 */

/**
 * - 栈类
 */
function Stack() {
    this.dataStore = []; // 初始化一个空数组，保存栈元素
    this.top = 0; // 栈大小/栈顶空闲位置
    this.push = push; // 压入栈
    this.pop = pop; // 弹出栈
    this.peek = peek; // 返回栈顶元素（并不弹出）
    this.length = length; // 返回栈大小
    this.clear = clear; // 栈清空
}

/**
 * - 压入栈元素
 */
function push(element) {
    this.dataStore[this.top++] = element;
}

/**
 * - 弹出栈元素
 */
function pop() {
    return this.dataStore[--this.top];
}

/**
 * - 返回栈顶元素
 */
function peek() {
    return this.dataStore[this.top-1];
}

/**
 * - 返回栈大小
 */
function length() {
    return this.top;
}

/**
 * - 栈清空
 */
function clear() {
    this.top = 0;
}

