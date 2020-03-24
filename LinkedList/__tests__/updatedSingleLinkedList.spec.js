const UpdatedSingleLnkedList = require('../Exercises/UpdatedSingleLinkedList');

test('Updated Linked List', () => {

    const SingleLinkedList = new UpdatedSingleLnkedList();

    SingleLinkedList.insertAtHead('Serena')
    SingleLinkedList.insertAtHead('Sochi')
    SingleLinkedList.insertAtLink('Sochi', 'Soji')
    SingleLinkedList.insertAtLink('Serena', 'Paul')

    SingleLinkedList.advance(1)
    expect(SingleLinkedList.show.element).toEqual('Sochi');

    SingleLinkedList.advance(2)
    expect(SingleLinkedList.show.element).toEqual('Serena');
});
