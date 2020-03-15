const DoubleLinkedList = require('../DoubleLinkedList');

test('Double Linked List', () => {
    const DLinkedList = new DoubleLinkedList();

    DLinkedList.insertAtHead('Daniel');
    expect(DLinkedList.display).toEqual(['Daniel']);

    DLinkedList.insertAtHead('Banky');
    expect(DLinkedList.display).toEqual(['Banky', 'Daniel']);

    DLinkedList.insertAtHead('Samuel');
    expect(DLinkedList.display).toEqual(['Samuel', 'Banky', 'Daniel']);

    DLinkedList.insertAtLink('Samuel', 'Nathaniel');
    expect(DLinkedList.display).toEqual(['Samuel','Nathaniel', 'Banky', 'Daniel']);

    DLinkedList.insertAtLink('Daniel', 'Jefferson');
    expect(DLinkedList.display).toEqual(['Samuel','Nathaniel', 'Banky', 'Daniel', 'Jefferson']);

    DLinkedList.insertAtEnd('Petrelli');
    expect(DLinkedList.display).toEqual(['Samuel','Nathaniel', 'Banky', 'Daniel', 'Jefferson', 'Petrelli']);
    expect(DLinkedList.displayReverse).toEqual(['Petrelli', 'Jefferson', 'Daniel', 'Banky', 'Nathaniel', 'Samuel']);


    DLinkedList.deleteAtHead();
    expect(DLinkedList.display).toEqual(['Nathaniel', 'Banky', 'Daniel', 'Jefferson', 'Petrelli']);
    expect(DLinkedList.displayReverse).toEqual(['Petrelli', 'Jefferson', 'Daniel', 'Banky', 'Nathaniel']);

    DLinkedList.deleteAtLink('Petrelli');
    expect(DLinkedList.display).toEqual(['Nathaniel', 'Banky', 'Daniel', 'Jefferson']);
    expect(DLinkedList.displayReverse).toEqual(['Jefferson', 'Daniel', 'Banky', 'Nathaniel']);

    DLinkedList.deleteAtLink('Banky');
    expect(DLinkedList.display).toEqual(['Nathaniel', 'Daniel', 'Jefferson']);
    expect(DLinkedList.displayReverse).toEqual(['Jefferson', 'Daniel', 'Nathaniel']);

    DLinkedList.deleteAtEnd();
    expect(DLinkedList.display).toEqual(['Nathaniel', 'Daniel']);
    expect(DLinkedList.displayReverse).toEqual(['Daniel', 'Nathaniel']);
    
});
