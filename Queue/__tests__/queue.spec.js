const Queue = require('../Queue');

test('Queue', () => {
    const queue = new Queue();

    queue.enqueue('Sam')
    queue.enqueue('Peter')
    queue.enqueue('Paul')
    queue.enqueue('Vivian')
    queue.enqueue('Roland')

    expect(queue.peek()).toEqual('Sam')

    const user = queue.dequeue();
    expect(user).toEqual('Sam')

    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();

    expect(queue.dequeue()).toEqual(false);

    expect(queue.isEmpty()).toEqual(true);

    expect(queue.peek()).toEqual(false);
    
})
