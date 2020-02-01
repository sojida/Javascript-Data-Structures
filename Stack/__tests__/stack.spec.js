const Stack = require('../Stack');

test('Stack test', () => {
    const stack = new Stack();
    
    stack.push(1);
    stack.push(2);
    stack.push(3);
    const top = stack.peek();
    expect(top).toEqual(3);

    stack.pop();
    const topRemoved = stack.pop();
    expect(topRemoved).toEqual(2)

    stack.clear()
    expect(stack.isEmpty()).toEqual(true)

    const anothertop = stack.peek();
    expect(anothertop).toEqual(null)

});
