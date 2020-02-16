class PriorityQueue{
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

        let maxPriority = this.dataStore[0].priority;
        let position = 0;
        for(let i = 0; i < this.dataStore.length; i++){
            if (this.dataStore[i].priority < maxPriority){
                position = i;
                maxPriority = this.dataStore[i].priority
            }
        }

        return this.dataStore.splice(position, 1)[0];
    }
}

module.exports = PriorityQueue;
