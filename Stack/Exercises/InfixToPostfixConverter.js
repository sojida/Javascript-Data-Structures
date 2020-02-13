const Stack = require('../Stack');

class InfixToPostfixConverter {
    constructor() {
        this.operators = ['+', '-', '*', '/'];
        this.precedence = {'*': 2, '/': 2, '+': 1, '-': 1 }
    }

    isOpeningParenthesis(item) {
        return item === '(';
    }

    isClosingParenthesis(item) {
        return item === ')';
    }

    hasHigherPrecedence(stackTop, item) {
        return this.precedence[stackTop] >= this.precedence[item]
    }

    isOperand(item){
        return !this.isClosingParenthesis(item) && !this.isOpeningParenthesis(item) && !this.isOperator(item)
    }

    isOperator(item){
        return this.operators.includes(item);
    }


    convertExpression(exp){
        const stack = new Stack();
        let result = ''
        for (const item of exp) {
            if (this.isOperand(item)){
                result += item;
            };

            if (this.isOpeningParenthesis(item)){
                stack.push(item);
            };

            if (this.isOperator(item)){
                while(!stack.isEmpty() && this.hasHigherPrecedence(stack.peek(), item)){
                    result += stack.pop()
                }
                stack.push(item)
            }

            if (this.isClosingParenthesis(item)){
                while(!stack.isEmpty() && !this.isOpeningParenthesis(stack.peek())){
                    result += stack.pop()
                }
                stack.pop()
            }
        }

        while(!stack.isEmpty()){
            result += stack.pop();
        }

        return result;
    }
}

module.exports = InfixToPostfixConverter;
