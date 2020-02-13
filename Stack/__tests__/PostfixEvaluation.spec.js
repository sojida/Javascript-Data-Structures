const InfixToPostfixConverter = require('../Exercises/InfixToPostfixConverter');
const PostfixEvaluator = require('../Exercises/PostfixEvaluation');

test('PostfixEvaluation', () => {
    const evaluator = new PostfixEvaluator();

    expect(evaluator.evaluateExpression('23*54*+9-')).toEqual(17);

    const converter = new InfixToPostfixConverter();

    const exp1 = converter.convertExpression('5+5*2+1-6');
    expect(exp1).toEqual('552*+1+6-');
    expect(evaluator.evaluateExpression(exp1)).toEqual(10);

    const exp2 = converter.convertExpression('(4/2)+5');
    expect(exp2).toEqual('42/5+');
    expect(evaluator.evaluateExpression(exp2)).toEqual(7);

    const exp3 = converter.convertExpression('(4/2)+(2*2)-(5+5)/(6-4)');
    expect(exp3).toEqual('42/22*+55+64-/-');
    expect(evaluator.evaluateExpression(exp3)).toEqual(1);

})
