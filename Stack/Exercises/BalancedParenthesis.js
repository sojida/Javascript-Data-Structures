const Stack = require('../Stack');

class BalancedParnethsis {
    constructor(openingParnthesis, closingParenthesis) {
        this.openingParnthesis = openingParnthesis;
        this.closingParenthesis = closingParenthesis;
    };

    isOpeningParenthesis(string) {
        return string === this.openingParnthesis;
    };

    isClosingParenthesis(string) {
        return string === this.closingParenthesis;
    };

    balanceParenthesis(string) {
        const stack = new Stack();
        const positionStack = new Stack()

        for(let i = 0; i < string.length; i++){
            if(this.isOpeningParenthesis(string[i])){
                stack.push(string[i])
                positionStack.push(i)
            };

            if(this.isClosingParenthesis(string[i])){
                if (stack.isEmpty()) {
                    stack.push(string[i]);
                    positionStack.push(i);
                }


                const lastParenthesis = stack.peek();
                if (this.isOpeningParenthesis(lastParenthesis)){
                    stack.pop();
                    positionStack.pop()
                };

                
            };
        };

        return {isBalanced: stack.isEmpty(), position: positionStack.peek()};
    };
};


module.exports = BalancedParnethsis;
