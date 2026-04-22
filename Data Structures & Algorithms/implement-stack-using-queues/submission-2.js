class MyStack {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        const pushQueue = this.queue1.length ? this.queue1 : this.queue2
        pushQueue.push(x)
    }

    /**
     * @return {number}
     */
    pop() {
        const [pushQueue, switchQueue] = this.queue1.length ? [this.queue1, this.queue2] : [this.queue2, this.queue1];
        while (pushQueue.length > 1) {
            const element = pushQueue.shift()
            switchQueue.push(element);
        }
        const lastElement = pushQueue.shift();

        return lastElement;
    }

    /**
     * @return {number}
     */
    top() {
        const [pushQueue, switchQueue] = this.queue1.length ? [this.queue1, this.queue2] : [this.queue2, this.queue1];
        while (pushQueue.length > 1) {
            const element = pushQueue.shift()
            switchQueue.push(element);
        }
        const lastElement = pushQueue.shift();
        switchQueue.push(lastElement);
        return lastElement;
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.queue1.length === 0 && this.queue2.length === 0
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
