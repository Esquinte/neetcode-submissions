class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        return strs.map((str) => {
            return `${str.length}#${str}`
        }).join('')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const res = []

        let i = 0

        while (i < str.length) {
            let j = i

            while (str[j] !== '#') {
                j++;
            }

            const length = Number(str.slice(i, j))
            const start = j + 1;
            const value = str.slice(start, start + length)

            res.push(value)

            i = start + length
        }

        return res
    }
}
