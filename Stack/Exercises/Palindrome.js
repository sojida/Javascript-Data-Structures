const Stack = require('../Stack');

const Palindrome = function(string) {
    const stack = new Stack();

    for(let i = 0; i < string.length; i++){
        stack.push(string[i]);
    };

    let reversedString = '';
    while(!stack.isEmpty()){
        reversedString += stack.pop();
    }

    if (reversedString.toLowerCase() === string.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}

module.exports = Palindrome;
