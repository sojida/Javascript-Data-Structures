const Stack = require('../Stack');

const RecursionSimulation = function(number){
    const stack = new Stack();

    while(number > 0){
        stack.push(number);
        number--;
    }

    let product = 1;
    while(!stack.isEmpty()) {
        product = product * stack.pop()
    }

    return product;
}

module.exports = RecursionSimulation;
