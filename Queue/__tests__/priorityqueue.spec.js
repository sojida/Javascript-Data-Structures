const PriorityQueue = require('../PriorityQueue');

test('Priority Queue', () => {
    const priorityQueue = new PriorityQueue();

    priorityQueue.enqueue({priority: 5, item: 'sam'})
    priorityQueue.enqueue({priority: 3, item: 'peter'})
    priorityQueue.enqueue({priority: 2, item: 'paul'})
    priorityQueue.enqueue({priority: 1, item: 'daniel'})
    priorityQueue.enqueue({priority: 4, item: 'james'})
    priorityQueue.enqueue({priority: 5, item: 'fred'})
    priorityQueue.enqueue({priority: 2, item: 'esther'})

    expect(priorityQueue.dequeue()).toEqual({priority: 1, item: 'daniel'})
    expect(priorityQueue.dequeue()).toEqual({priority: 2, item: 'paul'})
    expect(priorityQueue.dequeue()).toEqual({priority: 2, item: 'esther'})
    expect(priorityQueue.dequeue()).toEqual({priority: 3, item: 'peter'})

    expect(priorityQueue.peek()).toEqual({priority: 5, item: 'sam'})
    expect(priorityQueue.count).toEqual(3)
    expect(priorityQueue.isEmpty()).toEqual(false);

    priorityQueue.dequeue();
    priorityQueue.dequeue();
    priorityQueue.dequeue();

    expect(priorityQueue.dequeue()).toEqual(false);
    expect(priorityQueue.peek()).toEqual(false);
    
})
