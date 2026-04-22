class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const occurenceMap = new Map();

        for (let i = 0; i < s.length; i++) {
            const letter = s[i];
            const occurence = occurenceMap.get(letter) ?? 0;
            occurenceMap.set(letter, occurence + 1);
        }

        for (let i = 0; i < t.length; i++) {
            const letter = t[i];
            const occurence = occurenceMap.get(letter);
            if (!occurence) {
                return false;
            }
            occurenceMap.set(letter, occurence - 1)
        }


        return occurenceMap.values().every((value) => value === 0);
    }
}
