/**
 * @file 数据结构和算法的基础练习 · 数组
 * @author 熊猫桑
 */

/**
 * 递归练习
 * @param {number} number - 输入一个数
 * @returns {number}
 */
function factorial(number) {
    if (number == 1) {
        return number;
    } else {
        return number * factorial(number - 1);
    }
}
console.log(factorial(6));

/**
 * - 创建数组
 */
function createArray() {
    var numbers = new Array(1, 2, 3, 4, 5);
    return numbers;
}
console.log(createArray().length);
console.log(Array.isArray(createArray()));

/** 
 * - 读写数组
 */
(function () {
    var nums = [];
    for (var i = 0; i < 20; ++i) {
        nums[i] = i + 1;
    }
    console.log(nums);
})();

/**
 * - 由字符串生成数组（split方法）
 */
(function () {
    var sentence = "the quick brown fox jumped over the lazy dog";
    var words = sentence.split(" ");
    console.log(words);
})();

/** 
 * - 对数组的整体性操作(浅复制和深复制)
 */
(function () { //浅复制，只传递引用指针
    var nums = [];
    for (var i = 0; i < 20; ++i) {
        nums[i] = i + 1;
    }
    var samenums = nums;
    nums[0] = 400;
    console.log(samenums[0]);
})();
function copy(arr1, arr2) { //深复制，遍历源数组每项，复制到目标数组
    for (var i = 0; i < arr1.length; ++i) {
        arr2[i] = arr1[i];
    };
}
function deepCopyArray() {
    var nums = [];
    for (var i = 0; i < 20; ++i) {
        nums[i] = i + 1;
    }
    var samenums = [];
    copy(nums, samenums);
    nums[0] = 400;
    console.log(samenums[0]);
}

/**
 * - 查找元素：`.indexOf()`以及`.lastIndexOf()`
 */
(function () {
    var names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer", "Cynthia", "Cynthia"];
    var name = "Cynthia";
    var position = names.lastIndexOf(name);// or `indexOf()`
    if (position >= 0) {
        console.log("Found" + name + " at position " + position);
    } else {
        console.log(name + " not found in array.");
    }
})();

/**
 * - 数组字符串表示：`.join()`或`.toString()`
 */
(function () {
    var names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer", "Cynthia", "Cynthia"];
    var namestr = names.join();
    console.log(namestr);
    var namestr = names.toString();
    console.log(namestr);
})();

/**
 * - 由已有数组创建新数组：`.concat()`和`.splice()`
 */
(function () {
    var firstArray = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer", "Cynthia", "Cynthia"];
    var secondArray = ["Clayton", "Jennifer", "Cynthia", "Cynthia"];
    var result = firstArray.concat(secondArray);
    var result2 = firstArray.splice(3, 3);
    console.log('1：' + result);
    console.log('2：' + result2);
    console.log('2.5：' + firstArray);
})();

/**
 * - 为数组添加元素：`.push()`和`.unshift()`
 */
(function () {
    var nums = [1, 2, 3, 4, 5, 6];
    nums.push(7, 8, 9, 10);
    console.log(nums);
    nums[nums.length] = 11; // 利用length属性添加成员，但是没有`.push()`更加灵活
    console.log(nums);
    nums.unshift(98, 99, 0); // 在数组前边添加成员
    console.log(nums);
})();

/**
 * - 为数组删除元素：`.pop()`和`.shift()`
 */
(function () {
    var nums = [1, 2, 3, 4, 5, 6];
    nums.pop();
    console.log(nums);
    nums.shift(); // 在数组前边删除成员
    console.log(nums);
})();

/**
 * - 从数组中间位置添加和删除元素：`.splice()`
 */
(function () {
    var nums = [1, 2, 3, 4, 5, 6, 7, 8];
    var newElements = [94, 95, 96];
    nums.splice(3, 0, newElements); // 三个参数分别代表：起始索引（需要添加元素的位置）、需要删除的元素个数、想要添加的元素（更多参数）；
    console.log(nums);
    var nums2 = [1, 2, 3, 4, 5, 6, 7, 8];
    nums2.splice(3, 0, 94, 95, 96); // 第二种方式；
    console.log(nums2);
})();

/**
 * - 为数组排序：`.reverse()`和`.sort()`
 */
(function () {
    var nums = [1, 2, 3, 4, 5];
    nums.reverse();
    console.log(nums);
    var names = ["David", "Mike", "Cynthia", "Clayton", "Bryan", "Raymond"];
    names.sort(); // 字典排序
    console.log(names);
    function compare(num1, num2) {
        return num1 - num2;
    }
    var nums = [3, 1, 2, 100, 4, 200];
    nums.sort(compare); // 应用函数对数字排序。如果该函数返回值大于0，表示第一个元素排在第二个元素后面；否则，第一个元素排在第二个元素前面。
    console.log(nums);

    var ageSort = [
        { name: "张三", age: 30 },
        { name: "李四", age: 24 },
        { name: "王五", age: 28 }
    ].sort(function (o1, o2) {
        return o1.age - o2.age;
    });
    console.log(ageSort);
})();

/**
 * - 不生成新数组的迭代器方法：`.forEach()`、`.every()`、`.reduce()`、`.reduceRight()`
 */
(function () {
    function square(num) {
        console.log(num + '·' + num * num);
    }
    var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    nums.forEach(square); // forEach接受一个函数作为参数，将数组中的每个成员输入这个函数

    function isEven(num) {
        return num % 2 == 0;
    }
    var nums2 = [2, 4, 6, 8, 10];
    var even = nums2.every(isEven); // every接受一个函数，数组中的所有成员输入这个函数均返回true，则其返回true
    console.log(even);

    var nums3 = [2, 1, 3, 5, 7];
    var even2 = nums3.some(isEven); // some接受一个函数，数组中的所有成员输入这个函数，只要有一个返回true，则其返回true
    console.log(even2);

    var res = [1, 2, 3, 4, 5].reduce(function (x, y) { // reduce接受一个函数，从数组前两位成员开始，使用该函数循环计算结果
        return x + y;
    });
    console.log(res);

    var res2 = [1, 2, 3, 4, 5, 6].reduceRight(function (x, y) { // reduceRight接受一个函数，从数组最后两位成员开始，使用该函数循环计算结果
        return x - y;
    });
    console.log(res2);
})();

/**
 * - 生成新数组的迭代器方法：`.map()`和`.filter()`
 */
(function () {
    // 数值数组
    function curve(grade) {
        return grade += 5;
    }

    var grades = [77, 65, 81, 92, 83];
    var newgrades = grades.map(curve); // map与forEach的不同是它返回一个新数组
    console.log(newgrades);

    // 字符串数组
    function first(word) {
        return word[0];
    }

    var word = ["for", "your", "infomation"];
    var acronym = word.map(first);
    console.log(acronym);

    function isEven (num) {
        return num % 2 == 0;
    }
    function isOdd(num) {
        return num % 2 != 0;
    }

    var nums = [];
    for (var i = 0; i < 20; ++i) {
        nums[i] = i + 1;
    }
    var evens = nums.filter(isEven);
    console.log('Even numbers: ' + evens);
    var odds = nums.filter(isOdd);
    console.log('Odd numbers: ' + odds);

    // 过滤数组中的字符串
    function afterc(str) {
        if (str.indexOf('cie') > -1) {
            return true;
        }
        return false;
    }
    var words = ['recieve', 'deceive', 'percieve', 'deceit'];
    var misspelled = words.filter(afterc);
    console.log(misspelled);
})();

/**
 * - 二维数组
 */
(function () {
    // 扩展原生数组对象(适用小规模数据)
    var matrix = function(rows, cols, initial) {
        var arr = [];
        for (var i = 0; i < rows; i++) {
            var columns = [];
            for (var j = 0; j < cols; j++) {
                columns[j] = initial;
            }
            arr[i] = columns;
        }
        return arr;
    }
    Array.prototype.matrix = Array.matrix = matrix;

    var nums = [].matrix(5, 5, 0);
    console.log(nums);
})();

/**
 * - 数组对齐
 */
(function () {
    var grades = [[89, 77], [76, 82, 81], [91, 94, 89, 99]]; // 每行的元素个数彼此不同
    var total = 0;
    var average = 0.0;
    for (var row = 0; row < grades.length; ++row) {
        for (var col = 0; col < grades[row].length; ++col) {
            total += grades[row][col];
            console.log(total);
        }
        average = total / grades[row].length;
        console.log("student " + parseInt(row + 1) + "average: " + average.toFixed(2));
        total = 0;
        average = 0.0;
    }
})();
