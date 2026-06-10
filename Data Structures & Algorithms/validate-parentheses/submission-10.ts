class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const match = {
            ")": "(",
            "]": "[",
            "}": "{",
        };

        const stack = [];

        const closeBrackets = Object.keys(match);

        for (const char of s) {
            if (closeBrackets.includes(char)) {
                if (stack.pop() !== match[char]) {
                    return false;
                }
            } else {
                stack.push(char);
            }
        }

        return stack.length === 0;
    }
}
