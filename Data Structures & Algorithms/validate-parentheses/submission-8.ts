class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = [];

        const open = ['(', '[', '{']

        for (const char of s) {
            if (open.includes(char)) {
                stack.push(char)
            } else {
                const last = stack.pop()
                if (!last) {
                    return false
                }

                if (last === '(' && char !== ')') {
                    return false
                }
                if (last === '[' && char !== ']') {
                    return false
                }
                if (last === '{' && char !== '}') {
                    return false
                }
            }
        }

        return stack.length === 0
    }
}
