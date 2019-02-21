/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    // FIXME:
    var substring = s.charAt(i),
        lens = s.length,
        i, j;

    for (i = 1; i < lens; i++) {
        j = substring.search(s.charAt(i+1));
        if (j === -1) {
            substring += s.charAt(i);
        } else {
            substring = substring.slice(j+1);
        }
    }

    console.log('result:' + substring);
    return substring.length;
};

lengthOfLongestSubstring("abcabcbb");
