class MinStack {
    constructor() {
        this.min = null;
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (this.stack.length === 0) {
            this.stack.push(0)
            this.min = val;
        } else {
            const diff = val - this.min;
            this.stack.push(diff)
            if (val < this.min) {
                this.min = val;
            }
        }
        console.log(this.stack, this.min)
    }

    /**
     * @return {void}
     */
    pop() {
        const pop = this.stack.pop()
        if (pop < 0) {
            this.min -= pop;
        }
    }

    /**
     * @return {number}
     */
    top() {
        const top = this.stack[this.stack.length - 1];

        if (top > 0) {
            return top + this.min;
        }

        return this.min;
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min;
    }
}
