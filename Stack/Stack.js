/** Class representing Stack */
class Stack {
    /**
     * Create a Stack
     */
    constructor() {
        this.dataStore = [];
    }

    /**
     * checks if stack is empty
     * @returns {Boolean}
     */
    isEmpty() {
        return this.dataStore.length <= 0;
    }

    /**
     * adds item to the stack
     * @param {Any} item element
     */
    push(item) {
        this.dataStore.push(item)
    };

    /**
     * removes item from the stack
     * @returns {Any} item
     */
    pop() {
        return this.dataStore.pop()
    }

    /**
     * check item at the beginning of the stack
     * @returns {Any} item
     */
    peek() {
        return this.dataStore[this.dataStore.length -1] || null
    }

    /**
     * removes all items from the stack
     */
    clear() {
        this.dataStore = [];
    }
}

module.exports = Stack;
