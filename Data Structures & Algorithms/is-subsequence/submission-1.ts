class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s: string, t: string): boolean {
        let ptrS = 0;
        let ptrT = 0;

        while (ptrT < t.length && ptrS < s.length) {
            if (s[ptrS] === t[ptrT]) {
                ptrS++
            }
            ptrT++
        }

        return ptrS === s.length;
    }
}
