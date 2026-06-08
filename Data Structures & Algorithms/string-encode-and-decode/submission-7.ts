class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        return strs.map((str) => `${str.length}#${str}`).join('')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const results: string[] = []

        console.log(str)

        let i = 0;
        while (i < str.length) {
            
            let j = i;
            while (str[j] !== '#') {
                j++
            }

            const num = Number(str.substring(i, j));

            i = j + 1;
            j = i + num;

            results.push(str.substring(i, j))

            i = j
        }

        return results
    }
}