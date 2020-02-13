const Stack = require('../Stack');

const BaseConverter = function(num, base) {
    const stack = new Stack();
    do {
        stack.push(num % base)
        num = Math.floor(num / base);
    } while (num > 0);
    let result = '';
    while(!stack.isEmpty()) {
        result += stack.pop();
    }
    return Number(result)
}

module.exports = BaseConverter;
