/**
 * Pair class to store key-value pairs
 */
// class Pair {
//     /**
//      * @param {number} key The key to be stored in the pair
//      * @param {string} value The value to be stored in the pair
//      */
//     constructor(key, value) {
//         this.key = key;
//         this.value = value;
//     }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[][]}
     */
    insertionSort(pairs) {
        if (!pairs.length) {
            return []
        }

        const output = [];

        let j = 1;
        for (let i = 1; i < pairs.length; i++) {
            j = i;
            output.push([...pairs]);

            while (j > 0 && pairs[j - 1].key > pairs[j].key) {
                const tmp = pairs[j]
                pairs[j] = pairs[j - 1]
                pairs[j - 1] = tmp;
                j--;
            }

        }

        output.push([...pairs]);
        return output;
    }
}
