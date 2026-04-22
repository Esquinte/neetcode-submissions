/** Pair class to store key-value pairs */
// class Pair {
//   /**
//    * @param {number} key The key to be stored in the pair
//    * @param {string} value The value to be stored in the pair
//    */
//   constructor(key, value) {
//       this.key = key;
//       this.value = value;
//   }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[]}
     */
    mergeSort(pairs) {
        if (pairs.length <= 1) {
            return pairs;
        }

        const half = Math.ceil(pairs.length / 2)
        const firstHalf = pairs.slice(0, half)
        const secondHalf = pairs.slice(firstHalf.length, pairs.length)

        const sortedFirstHalf = this.mergeSort(firstHalf)
        const sortedSecondHalf = this.mergeSort(secondHalf)

        const merge = [];
        let i = 0;
        let j = 0;
        let k = 0;

        while (i < sortedFirstHalf.length && j < sortedSecondHalf.length) {
            if (sortedFirstHalf[i].key <= sortedSecondHalf[j].key) {
                merge[k++] = sortedFirstHalf[i++]
            } else {
                merge[k++] = sortedSecondHalf[j++]
            }
        }

        while (i < sortedFirstHalf.length) {
            merge[k++] = sortedFirstHalf[i++]
        }

        while (j < sortedSecondHalf.length) {
            merge[k++] = sortedSecondHalf[j++]
        }

        return merge;
    }
}
