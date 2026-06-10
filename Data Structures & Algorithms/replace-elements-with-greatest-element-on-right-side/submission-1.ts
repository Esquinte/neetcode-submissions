class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        for (let i = 0; i < arr.length; i++) {
            let j = i + 1;

            if (j >= arr.length) {
                arr[i] = -1;
                continue;
            }

            let maxIndex = j;

            while (j < arr.length) {
                if (arr[maxIndex] < arr[j]) {
                    maxIndex = j;
                }
                j++;
            }

            arr[i] = arr[maxIndex];
        }

        return arr;
    }
}
