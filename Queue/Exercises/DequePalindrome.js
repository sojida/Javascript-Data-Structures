const Deque = require('../Deque');

const Palindrome = function(word){
    const deque = new Deque();

    for(let i = 0; i < word.length; i++){
        deque.enqueueBack(word[i]);
    }

    let reversedWord = '';
    while(!deque.isEmpty()){
        reversedWord += deque.dequeueBack();
    }

    return reversedWord.toLowerCase() === word.toLowerCase();
}

module.exports = Palindrome;
