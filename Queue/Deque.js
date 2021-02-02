/** Class representing deque */
class Deque{
    /**
     * Create a deque
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
     * checks the first item in queue
     * @returns {Any} item
     */
    peekFront(){
        if (this.isEmpty()){
            return false;
        }

        return this.dataStore[0];
    }
    
    /**
     * checks the last item in queue
     * @returns {Any} item
     */
    peekBack(){
        if (this.isEmpty()){
            return false;
        }
        
        return this.dataStore[this.dataStore.length - 1];
    }

    /**
     * Adds item as queues first element
     * @param {Any} item item
     */
    enqueueFront(item){
        this.dataStore.unshift(item)
    }

    /**
     * Adds item as queues last element
     * @param {Any} item item
     */
    enqueueBack(item){
        this.dataStore.push(item)
    }


    /**
     * removes first item in queue
     * @param {Any} item item
     */
    dequeueFront(){
        if(this.isEmpty()){
            return false;
        } 

        return this.dataStore.shift();
    }

    /**
     * removes last item in queue
     * @param {Any} item item
     */
    dequeueBack(){
        if(this.isEmpty()){
            return false;
        } 

        return this.dataStore.pop();
    }
}

module.exports = Deque;
