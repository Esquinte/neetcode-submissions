class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false
        }

       const counts = new Map<string, number>()

        for (let i = 0; i < s.length; i++) {
            const sCount = counts.get(s[i]) ?? 0;
            counts.set(s[i], sCount + 1)

            const tCount = counts.get(t[i]) ?? 0
            counts.set(t[i], tCount - 1)
        }

        console.log(counts)

        for (const count of counts.values()) {
            if (count !== 0) {
                return false
            }
        }

        return true
    }
}
