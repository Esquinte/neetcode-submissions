class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s: string): number {
        let count = 0;

        for (let i = s.length - 1; i >= 0; i--) {
            if (s[i] === " ") {
                if (count === 0) {
                    continue;
                }

                return count;
            }

            count++;
        }

        return count;
    }
}
