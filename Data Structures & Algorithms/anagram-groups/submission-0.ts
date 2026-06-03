class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const result = {};

        for (let s of strs) {
            const count = Array.from({length: 26}, () => 0)

            for (let c of s) {
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }

            const key = count.join(',');
            if (!result[key]) {
                result[key] = []
            }

            result[key].push(s)
        }

        return Object.values(result)
    }
}
