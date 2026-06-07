class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        const currentCommon: string[] = Array.from({length: 200})

        for (let i = 0; i < strs[0].length; i++) {
            currentCommon[i] = strs[0][i]
        }


        for (let i = 1; i < strs.length; i++) {
            if (strs[i].length === 0) {
                return ''
            }

            for (let j = 0; j < strs[i].length; j++) {
                if (!currentCommon[j] || currentCommon[j] !== strs[i][j]) {
                    currentCommon[j] = ''
                    break;
                }
            }

            currentCommon[strs[i].length] = ''
        }

        let commonPrefix = ''
        for (let i = 0; i < currentCommon.length; i++) {
            if (!currentCommon[i]) {
                break;
            }

            commonPrefix = commonPrefix.concat(currentCommon[i])

        }

        return commonPrefix;
    }
}
