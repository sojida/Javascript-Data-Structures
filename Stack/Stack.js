class Stack {
    constructor() {
        this.dataStore = [];
    }

    isEmpty() {
        return this.dataStore.length <= 0;
    }

    push(item) {
        this.dataStore.push(item)
    };

    pop() {
        return this.dataStore.pop()
    }

    peek() {
        return this.dataStore[this.dataStore.length -1] || null
    }

    clear() {
        this.dataStore = [];
    }
}

module.exports = Stack;
