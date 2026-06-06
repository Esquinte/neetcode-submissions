class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const group = new Map<string, string[]>()

        for (const str of strs) { 
            const hash = str.split('').sort().join('')

            const arr = group.get(hash) ?? []
            group.set(hash, [...arr, str])
        }
        
        const result = Array.from(group.values())

        return result.sort((a, b) => a.length - b.length)
    }
}
