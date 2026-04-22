class NodeElement {
    constructor(val, next = null, prev = null) {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class MyDeque {
    constructor() {
        this.head = new NodeElement(-1);
        this.tail = new NodeElement(-1)

        this.head.next = this.tail;
        this.tail.prev = this.head;

        this.size = 0;
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.size === 0;
    }

    /**
     * @param {number} value
     */
    append(value) {
        const prev = this.tail.prev;
        const node = new NodeElement(value, this.tail, prev);
        prev.next = node;
        this.tail.prev = node;
        
        this.size++;
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value) {
        const next = this.head.next;
        const node = new NodeElement(value, next, this.head);
        next.prev = node;
        this.head.next = node;
        
        this.size++;
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.isEmpty()) {
            return -1;
        }

        const nodeToPop = this.tail.prev;
        const prev = nodeToPop.prev;
        prev.next = this.tail;
        this.tail.prev = prev; 
        
        nodeToPop.next = null;
        nodeToPop.prev = null;

        this.size--;

        return nodeToPop.val;
    }

    /**
     * @return {number}
     */
    popleft() {
        if (this.isEmpty()) {
            return -1;
        }

        const nodeToPop = this.head.next;
        const next = nodeToPop.next;
        next.prev = this.head;
        this.head.next = next;

        nodeToPop.next = null;
        nodeToPop.prev = null;

        this.size--;

        return nodeToPop.val;
    }
}
