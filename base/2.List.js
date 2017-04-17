/**
 * @file 数据结构和算法的基础练习 · 列表
 * @author 熊猫桑
 */

/**
 * - 列表的ADT表述
 */
function List() {
    this.listSize = 0; // 列表的元素个数
    this.pos = 0; // 列表的当前位置指针
    this.dataStore = []; // 初始化一个空数组，保存列表元素
    this.clear = clear; // 清空列表中的所有元素
    this.find = find; // 在列表中查找元素
    this.toString = toString; // 返回列表的字符串形式
    this.insert = insert; // 在现有元素后插入新元素
    this.append = append; // 在列表末尾添加新元素
    this.remove = remove; // 从列表中删除元素
    this.front = front; // 将列表的当前位置指针移动到第一个元素
    this.end = end; // 将列表的当前位置指针移动到最后一个元素
    this.prev = prev; // 将当前位置指针前移一位
    this.next = next; // 将当前位置指针后移一位
    this.length = length; // 返回列表中元素的个数
    this.currPos = currPos; // 返回当前位置指针的位置
    this.moveTo = moveTo; // 移动当前位置指针到指定的位置
    this.getElement = getElement; // 返回当前位置指针所指向的元素
    this.contains = contains; // 判断指定的元素是否在列表中
}

/**
 * - 给列表添加元素
 */
function append (element) {
    this.dataStore[this.listSize++] = element;
}

/**
 * - 在列表中查找元素
 */
function find (element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return i;
        }
    }
    return -1;
}

/**
 * - 从列表中删除元素
 */
function remove (element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}

/**
 * - 返回列表中元素的个数
 */
function length () {
    return this.listSize;
}

/**
 * - 显示列表中的元素
 */
function toString () {
    return this.dataStore;
}

/**
 * - 在指定的元素后插入元素
 */
function insert (element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}

/**
 * - 清空列表中的所有元素
 */
function clear () {
    delete this.dataStore;
    this.dataStore.length = 0; // 重建数组
    this.listSize = this.pos = 0;
}

/**
 * - 判断元素是否在列表中
 */
function contains (element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return true;
        }
    }
    return false;
}

/**
 * - 遍历列表
 */
function front () {
    this.pos = 0;
}
function end () {
    this.pos = this.listSize - 1;
}
function prev () {
    if (this.pos > 0) {
        --this.pos;
    }
}
function next () {
    if (this.pos < this.listSize - 1) {
        ++this.pos;
    }
}
function currPos () {
    return this.pos;
}
function moveTo (position) {
    this.pos = position;
}
function getElement () {
    return this.dataStore[this.pos];
}

/**
 * Test
 */
var names = new List();
names.append('Clayton');
names.append('Raymond');
names.append('Cynthia');
names.append('Jennifer');
names.append('Bryan');
names.append('Danny');

names.front();
console.log(names.getElement());
names.next();
console.log(names.getElement());

names.next();
names.next();
names.prev();
console.log(names.getElement());

//Test Ending

