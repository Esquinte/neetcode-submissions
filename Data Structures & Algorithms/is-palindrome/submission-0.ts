class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const sentence = s.replace(/[^\w]/g, '').toLowerCase()

        let start = 0;
        let end = sentence.length - 1;

        while (start < end) {
            if (sentence[start] !== sentence[end]) {
                return false;
            }

            start++
            end--
        }

        return true
    }
}
