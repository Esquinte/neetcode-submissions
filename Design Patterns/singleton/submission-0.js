class Singleton {
    static instance = null;

    value = null;

    /**
     * In JavaScript consider this method as the 'getInstance'
     */
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance
        }
        Singleton.instance = this;
    }

    static getInstance() {
        if (Singleton.instance === null) {
            Singleton.instance = new Singleton()
        }

        return Singleton.instance;
    }

    /**
     * @return {string}
     */
    getValue() {
        return this.value;
    }

    /**
     * @param {string} value
     * @return {void}
     */
    setValue(value) {
        this.value = value;
    }
}
