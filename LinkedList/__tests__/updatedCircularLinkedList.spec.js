const UpdatedCircularLinkedList = require('../Exercises/UpdatedCircularLinkedList');

test('Updatd Circular Linked List', () => {
    const CircularLinkedListUpdated = new UpdatedCircularLinkedList();

    CircularLinkedListUpdated.insertAtHead('Serena')
    CircularLinkedListUpdated.insertAtHead('Sochi')
    CircularLinkedListUpdated.insertAtLink('Sochi', 'Soji')
    CircularLinkedListUpdated.insertAtLink('Serena', 'Paul')

    CircularLinkedListUpdated.advance(1)
    expect(CircularLinkedListUpdated.show.element).toEqual('Sochi');

    CircularLinkedListUpdated.advance(11)
    expect(CircularLinkedListUpdated.show.element).toEqual('Soji');

    CircularLinkedListUpdated.advance(2)
    expect(CircularLinkedListUpdated.show.element).toEqual('Paul');
});
