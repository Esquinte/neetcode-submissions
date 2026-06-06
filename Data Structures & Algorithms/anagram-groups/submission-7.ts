class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const group = new Map<string, string[]>()

        for (const str of strs) { 
            //let hash = 0

            /*for (const s of str) {
                hash += s.charCodeAt(0) - 'a'.charCodeAt(0)
            }*/
            
            const hash = str.split('').sort().join('')

            const arr = group.get(hash) ?? []
            group.set(hash, [...arr, str])
        }
        
        const result = Array.from(group.values())

        return result.sort((a, b) => a.length - b.length)
    }
}
