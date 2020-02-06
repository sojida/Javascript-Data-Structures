const Stack = require('../Stack');

class PostfixEvaluation {
    constructor(){
        this.operators = ['+', '-', '*', '/'];
    }

    isOperator(item){
        return this.operators.includes(item);
    }

    isOperand(item){
        return !this.isOperator(item)
    }

    handleOperation(item, op1, op2){
        switch(item){
            case '+':
                return Number(op1) + Number(op2);
            case '-':
                return Number(op1) - Number(op2);
            case '*':
                return Number(op1) * Number(op2);
            case '/':
                return Number(op1) / Number(op2);
        }
    }

    evaluateExpression(exp){
        const stack = new Stack();
        for(const item of exp) {
            if (this.isOperand(item)){
                stack.push(item)
            }

            if(this.isOperator(item)){
                const op2= stack.pop();
                const op1 = stack.pop();

                stack.push(this.handleOperation(item, op1, op2));
            }
        }

        return stack.pop();
    }
};

module.exports = PostfixEvaluation;
