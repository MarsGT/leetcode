/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    var len = s.length,
        reg = 0;

    var checkStr = function (str, start, end) { // 检查已知字符串中，开始到结束的位置是否存在重复字符
        var curStr = '',
            cacheStr = '';
        for (var i = start; i < end; i++) {
            curStr = str[i];
            if (cacheStr.search(curStr) == -1) {
                cacheStr += curStr;
            } else {
                return true
            }
        }
        return false;
    }

    for (var i = 0; i < len; i++) {
        for (var j = i + 1; j <= len; j++) {
            if (!checkStr(s, i, j)) {
                reg = Math.max(reg, j - i);
            }
        }
    }

    return reg;
};
