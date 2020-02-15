const Deque = require('../Deque');

test('Deque', () => {
    const deque = new Deque;

    deque.enqueueFront('Sam');
    deque.enqueueFront('Peter');
    deque.enqueueBack('Roland');
    deque.enqueueBack('Vivian');

    expect(deque.peekBack()).toEqual('Vivian');
    expect(deque.peekFront()).toEqual('Peter');

    expect(deque.dequeueFront()).toEqual('Peter');
    expect(deque.dequeueBack()).toEqual('Vivian');

    deque.dequeueBack();
    deque.dequeueBack();

    expect(deque.count).toEqual(0);

    expect(deque.isEmpty()).toEqual(true);
    expect(deque.dequeueBack()).toEqual(false);
    expect(deque.dequeueFront()).toEqual(false);

    expect(deque.peekFront()).toEqual(false);
    expect(deque.peekBack()).toEqual(false);
});
