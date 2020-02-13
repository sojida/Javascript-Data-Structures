const ClassicStack = require('../ClassicStack');

test('Classic Stack', () => {
    const classicStack = new ClassicStack(5);

    classicStack.push(1);
    classicStack.push(2);
    classicStack.push(3);
    classicStack.push(4);
    classicStack.push(5);

    expect(classicStack.peek()).toEqual(5);

    classicStack.pop();
    const popped = classicStack.pop();
    expect(popped).toEqual(4);

    classicStack.clear();
    expect(classicStack.peek()).toEqual(null)

    classicStack.push(1);
    classicStack.push(2);
    classicStack.push(3);
    classicStack.push(4);
    classicStack.push(5);

    expect(classicStack.push(6)).toEqual(false);

    classicStack.clear();
    expect(classicStack.pop()).toEqual(false);

})
