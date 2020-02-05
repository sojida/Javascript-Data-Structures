const InfixToPostfixConverter = require('../Exercises/InfixToPostfixConverter');

test('InfixToPostfixConverter', () => {
    const converter = new InfixToPostfixConverter();

    expect(converter.convertExpression('A+B*C+D')).toEqual('ABC*+D+');
    expect(converter.convertExpression('(A+B)*(C+D)')).toEqual('AB+CD+*');
    expect(converter.convertExpression('A*B+C*D')).toEqual('AB*CD*+');
    expect(converter.convertExpression('A+B+C+D')).toEqual('AB+C+D+');
    expect(converter.convertExpression('A*(B+C)')).toEqual('ABC+*');
    expect(converter.convertExpression('A/B+C/D')).toEqual('AB/CD/+');
    expect(converter.convertExpression('((A+B)*C)-D')).toEqual('AB+C*D-');
    expect(converter.convertExpression('(A+B)*C-(D-E)*(F+G)')).toEqual('AB+C*DE-FG+*-');
});
