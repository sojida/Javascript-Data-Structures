class Deque{
    constructor(){
        this.dataStore = [];
    }

    isEmpty(){
        return this.dataStore.length === 0
    }

    get count(){
        return this.dataStore.length;
    }

    peekFront(){
        if (this.isEmpty()){
            return false;
        }

        return this.dataStore[0];
    }
    
    peekBack(){
        if (this.isEmpty()){
            return false;
        }
        
        return this.dataStore[this.dataStore.length - 1];
    }

    enqueueFront(item){
        this.dataStore.unshift(item)
    }

    enqueueBack(item){
        this.dataStore.push(item)
    }

    dequeueFront(){
        if(this.isEmpty()){
            return false;
        } 

        return this.dataStore.shift();
    }

    dequeueBack(){
        if(this.isEmpty()){
            return false;
        } 

        return this.dataStore.pop();
    }
}

module.exports = Deque;
