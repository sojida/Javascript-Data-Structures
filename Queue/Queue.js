class Queue{
    constructor(){
        this.dataStore = [];
    }

    isEmpty(){
        return this.dataStore.length === 0
    }

    get count(){
        return this.dataStore.length;
    }

    peek(){
        if (this.isEmpty()){
            return false;
        }

        return this.dataStore[0];
    }

    enqueue(item){
        this.dataStore.push(item)
    }

    dequeue(){
        if(this.isEmpty()){
            return false;
        } 

        return this.dataStore.shift();
    }
}

module.exports = Queue;