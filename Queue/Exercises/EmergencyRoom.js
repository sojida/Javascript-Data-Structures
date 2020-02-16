const PriorityQueue = require('../PriorityQueue');

class Patient{
    constructor(name, priority){
        this.name = name;
        this.priority = priority;
    }
}

class EmergencyRoom {
    constructor(){
        this.room = new PriorityQueue();
    }


    addToRoom(Patient){
        this.room.enqueue(Patient);
    }

    attendToPatient(){
        return this.room.dequeue();
    }

    get awaitingTreatment(){
        return this.room.count;
    }
    
}


module.exports = { EmergencyRoom, Patient };
