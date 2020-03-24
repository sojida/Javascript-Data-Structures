const UpdatedDoubleLnkedList = require('../Exercises/UpdatedDoubleLInkedList');

test('Updated Linked List', () => {

    const DoubleLinkedList = new UpdatedDoubleLnkedList();

    DoubleLinkedList.insertAtHead('Serena')
    DoubleLinkedList.insertAtHead('Sochi')
    DoubleLinkedList.insertAtLink('Sochi', 'Soji')
    DoubleLinkedList.insertAtLink('Serena', 'Paul')

    DoubleLinkedList.advance(1)
    expect(DoubleLinkedList.show.element).toEqual('Sochi');

    DoubleLinkedList.advance(2)
    expect(DoubleLinkedList.show.element).toEqual('Serena');

    DoubleLinkedList.back(1)
    expect(DoubleLinkedList.show.element).toEqual('Soji');
});
