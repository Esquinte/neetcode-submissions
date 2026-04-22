class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.lastIndex = 0;
        this.array = new Array(capacity);
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.array[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.array[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if (this.lastIndex + 1 > this.capacity) {
            this.capacity *= 2;
            const newArray = new Array(this.capacity);

            for (let i = 0; i < this.array.length; i++) {
                newArray[i] = this.array[i]
            }

            newArray[this.lastIndex++] = n;

            this.array = newArray;

            return;
        }

        this.array[this.lastIndex++] = n;
    }

    /**
     * @returns {number}
     */
    popback() {
        const lastValue = this.array[--this.lastIndex];
        this.array[this.lastIndex] = null;

        return lastValue;
    }

    /**
     * @returns {void}
     */
    resize() {
        const newArray = new Array(this.capacity * 2);

        for (let i = 0; i < this.array.length; i++) {
            newArray[i] = this.array[i]
        }

        newArray[this.array.length + 1] = n;

        this.array = newArray;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.lastIndex;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }
}
