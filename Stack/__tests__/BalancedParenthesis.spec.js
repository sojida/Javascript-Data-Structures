const BalancedParenthesis = require('../Exercises/BalancedParenthesis');

test('Balanced Parenthesis', () => {
    const parenthesisChecker = new BalancedParenthesis('(', ')');

    expect(parenthesisChecker.balanceParenthesis('(())((())')).toEqual({isBalanced: false, position: 4})
    expect(parenthesisChecker.balanceParenthesis('(())((()))')).toEqual({isBalanced: true, position: null})
    expect(parenthesisChecker.balanceParenthesis('((')).toEqual({isBalanced: false, position: 1})
    expect(parenthesisChecker.balanceParenthesis('()()')).toEqual({isBalanced: true, position: null})
    expect(parenthesisChecker.balanceParenthesis(')()(')).toEqual({isBalanced: false, position: 3})
    expect(parenthesisChecker.balanceParenthesis('(()(')).toEqual({isBalanced: false, position: 3})
    expect(parenthesisChecker.balanceParenthesis('()(')).toEqual({isBalanced: false, position: 2})
    expect(parenthesisChecker.balanceParenthesis('()())')).toEqual({isBalanced: false, position: 4})
    expect(parenthesisChecker.balanceParenthesis('(()())')).toEqual({isBalanced: true, position: null})
    expect(parenthesisChecker.balanceParenthesis('(())(())')).toEqual({isBalanced: true, position: null})
})
