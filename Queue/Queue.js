/** Class representing a queue */
class Queue{
    /**
     * Create a queue
     */
    constructor(){
        this.dataStore = [];
    }

    /**
     * checks if queue is empty
     * @returns {Boolean}
     */
    isEmpty(){
        return this.dataStore.length === 0
    }

    /**
     * number of items in queue
     * @returns {Number}
     */
    get count(){
        return this.dataStore.length;
    }

    /**
     * checks the top  queue
     * @returns {Any} item
     */
    peek(){
        if (this.isEmpty()){
            return false;
        }

        return this.dataStore[0];
    }

    /**
     * Adds item to queue
     * @param {Any} item item
     */
    enqueue(item){
        this.dataStore.push(item)
    }

    /**
     * Removes item from queue
     * @param {Any} item item
     */
    dequeue(){
        if(this.isEmpty()){
            return false;
        } 

        return this.dataStore.shift();
    }
}

module.exports = Queue;
