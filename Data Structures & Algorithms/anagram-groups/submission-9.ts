class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const groups = new Map<string, string[]>()

        for (const str of strs) {
            const hash = str.split('').sort().join('')

            const group = (groups.get(hash) ?? []).concat(str)
            groups.set(hash, group)
        }

        const result: string[][] = []

        for (const arr of groups.values()) {
            result.push(arr)
        }

        return result.sort()
    }
}
