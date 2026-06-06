class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }

        const count = new Map()

        for (const c of s) {
            const characterCount = count.get(c)
            count.set(c, (characterCount ?? 0) + 1)
        }

        for (const c of t) {
            const characterCount = count.get(c)
            
            if (!characterCount) {
                return false
            }

            const decrementValue = characterCount - 1
            if (decrementValue === 0) {
                count.delete(c)
            } else {
                count.set(c, decrementValue)
            }
        }

        return count.size === 0
    }
}
