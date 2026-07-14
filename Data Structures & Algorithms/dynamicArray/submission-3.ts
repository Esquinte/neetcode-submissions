class DynamicArray {
    private capacity: number;
    private size: number;
    private array: number[]

    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.capacity = capacity;
        this.size = 0;

        this.array = Array.from({length: capacity})
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i: number): number {
        if (!this.isIndexBoundsValid(i)) {
            return -1;
        }

        return this.array[i]
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i: number, n: number): void {
        if (!this.isIndexBoundsValid(i)) {
            return;
        }

        this.array[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n: number): void {
        if (this.size === this.capacity) {
            this.resize()
        }

        this.array[this.size++] = n;
    }

    /**
     * @returns {number}
     */
    popback(): number {
        const value = this.array[--this.size]
        return value;
    }

    /**
     * @returns {void}
     */
    resize(): void {
        this.capacity *= 2;
        console.log(this.array)
        this.array = Array.from({length: this.capacity}, (v, i) => i < this.size ? this.array[i] : undefined)
        console.log(this.array)
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity(): number {
        return this.capacity;
    }

    private isIndexBoundsValid(i: number): boolean {
        return i >= 0 && i <= this.capacity;
    }
}
