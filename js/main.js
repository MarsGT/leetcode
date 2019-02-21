var jasmineEnv = jasmine.getEnv();
    jasmineEnv.configure({
        random: false
    });

describe('1.two-sum', function () {

    it('in: [2, 7, 11, 15], 9\tout: [0, 1]', function () {
        var inArr = [2, 7, 11, 15],
            inNum = 9,
            outArr = [0, 1],
            result = twoSum(inArr, inNum);

        expect(result).toEqual(outArr);
    });

    it('in: [0, 4, 3, 0], 0\tout: [0, 3]', function () {
        var inArr = [0, 4, 3, 0],
            inNum = 0,
            outArr = [0, 3],
            result = twoSum(inArr, inNum);

        expect(result).toEqual(outArr);
    });

    it('in: [-1, -2, -3, -4, -5], -8\tout: [2, 4]', function () {
        var inArr = [-1, -2, -3, -4, -5],
            inNum = -8,
            outArr = [2, 4],
            result = twoSum(inArr, inNum);

        expect(result).toEqual(outArr);
    });

});

describe('2.add-two-numbers', function () {

    it('in: (2 -> 4 -> 3) + (5 -> 6 -> 4)\tout: 7 -> 0 -> 8', function () {
        var l1 = new ListNode(),
            l2 = new ListNode(),
            outArr = [7, 0, 8];
        
        l1.insert(2, 'head');
        l1.insert(4, 2);
        l1.insert(3, 4);

        l2.insert(5, 'head');
        l2.insert(6, 5);
        l2.insert(4, 6);

        result = addTwoNumbers(l1, l2);

        expect(result).toEqual(outArr);
    });

});