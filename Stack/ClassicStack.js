class Stack {
    constructor(limit) {
        this.dataStore = [];
        this.top = 0
        this.limit = limit
    }

    isEmpty() {
        return this.top <= 0;
    }

    isFull(){
        return this.top >= this.limit
    }

    push(item){
        if(this.isFull())  return false;

        this.dataStore[this.top] = item;
        this.top++;
    }

    pop(){
        if(this.isEmpty()) return false;

        const item = this.dataStore[--this.top];
        this.dataStore.length = this.top
        return item;
    }

    peek() {
        return this.dataStore[this.top - 1] || null;
    }

    clear(){
        this.dataStore = [];
        this.top = 0;
    }
    
}

module.exports = Stack;
