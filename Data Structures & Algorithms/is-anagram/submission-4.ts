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

        const sCount = new Map<string, number>()
        const tCount = new Map<string, number>()

        for (let i = 0; i < s.length; i++) {
            const sCounter = (sCount.get(s[i]) ?? 0) + 1
            sCount.set(s[i], sCounter)

            const tCounter = (tCount.get(t[i]) ?? 0) + 1
            tCount.set(t[i], tCounter)
        }

        for (const [char, occurrence] of sCount.entries()) {
            if (tCount.get(char) !== occurrence) {
                return false
            }
        }

        return true
    }
}
