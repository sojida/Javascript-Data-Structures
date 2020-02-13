const Stack = require('../Stack');

class Ball {
    constructor(colour) {
        this.colour = colour;
    }
}


class PezDispenser {
    constructor(){
        const balls = ['yellow', 'red', 'white'];
        let store = [];
        for (let i = 0; i < 10; i++){
            store.push(new Ball(balls[Math.floor(Math.random() * balls.length)]))
        }
        this.ballsStore = store
    }

    removeColour(colour){
        const stack = new Stack();

        for (let item of this.ballsStore){
            if (item.colour !== colour){
                stack.push(item)
            }
        }

        this.ballsStore = stack.dataStore;
        return this.ballsStore;
    }
}

module.exports = PezDispenser;

