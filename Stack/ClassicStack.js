/** Class representing Stack */
class Stack {
    /**
     * Create a stack
     * @param {Number} limit stack limit
     */
    constructor(limit) {
        this.dataStore = [];
        this.top = 0
        this.limit = limit
    }

    /**
     * check if stack is empty
     * @returns {Boolean}
     */
    isEmpty() {
        return this.top <= 0;
    }

    /**
     * checks if stack is full
     * @returns {Boolean}
     */
    isFull(){
        return this.top >= this.limit
    }

    /**
     * adds item to the stack
     * @param {Any} item element
     * @returns
     */
    push(item){
        if(this.isFull())  return false;

        this.dataStore[this.top] = item;
        this.top++;
    }

    /**
     * removes item from the stack
     * @returns {Any} item
     */
    pop(){
        if(this.isEmpty()) return false;

        const item = this.dataStore[--this.top];
        this.dataStore.length = this.top
        return item;
    }

    /**
     * check item at the beginning of the stack
     * @returns {Any} item
     */
    peek() {
        return this.dataStore[this.top - 1] || null;
    }

    /**
     * removes all items from the stack
     */
    clear(){
        this.dataStore = [];
        this.top = 0;
    }
    
}

module.exports = Stack;
