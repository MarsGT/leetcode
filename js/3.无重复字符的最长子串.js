/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 *
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (28.54%)
 * Total Accepted:    96.2K
 * Total Submissions: 334.8K
 * Testcase Example:  '"abcabcbb"'
 *
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * 
 * 示例 1:
 * 
 * 输入: "abcabcbb"
 * 输出: 3 
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 
 * 
 * 示例 2:
 * 
 * 输入: "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 * 
 * 
 * 示例 3:
 * 
 * 输入: "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
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

