class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const trimmed = s.replace(/[^\w]/g, '')
        
        console.log(trimmed)

        let l = 0;
        let r = trimmed.length - 1;

        console.log(l, r)

        while (l < r) {
            if (trimmed[l].toLowerCase() !== trimmed[r].toLowerCase()) {
                return false;
            }

            l++;
            r--;
        }

        return true;
    }
}
