class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length < 2) {
            return false;
        }

        const stack = new Array(s.length);
        let position = 0;

        for (let i = 0; i < s.length; i++) {
            const character = s[i];
            if (character === '[' || character === '(' || character === '{') {
                stack[position++] = character;
                continue;
            }

            const lastValue = stack[--position];

            if (character === ']' && lastValue !== '[') {
                return false;
            }

            if (character === ')' && lastValue !== '(') {
                return false;
            }

            if (character === '}' && lastValue !== '{') {
                return false;
            }
        }

        if (position > 0) {
            return false;
        }

        return true;
    }
}
