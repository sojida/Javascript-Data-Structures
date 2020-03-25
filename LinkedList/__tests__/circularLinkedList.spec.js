const CircularLinkedList = require('../CircularLinkedList');

test('Circular Linked List', () => {
    const CLinkedList = new CircularLinkedList();

    
    CLinkedList.insertAtHead('Benji');
    expect(CLinkedList.display).toEqual([ 'Benji' ])
    CLinkedList.insertAtHead('Erus');
    expect(CLinkedList.display).toEqual([ 'Erus', 'Benji' ])
    CLinkedList.insertAtLink('Erus', 'Soji');
    expect(CLinkedList.display).toEqual([ 'Erus', 'Soji', 'Benji' ])
    CLinkedList.insertAtLink('Benji', 'Ivy');
    expect(CLinkedList.display).toEqual([ 'Erus', 'Soji', 'Benji', 'Ivy' ])
    CLinkedList.insertAtEnd('Rebecca');
    expect(CLinkedList.display).toEqual([ 'Erus', 'Soji', 'Benji', 'Ivy', 'Rebecca' ])
    CLinkedList.deleteAtHead();
    expect(CLinkedList.display).toEqual([ 'Soji', 'Benji', 'Ivy', 'Rebecca' ])
    CLinkedList.deleteAtHead();
    expect(CLinkedList.display).toEqual([ 'Benji', 'Ivy', 'Rebecca' ])
    CLinkedList.deleteAtLink('Ivy');
    expect(CLinkedList.display).toEqual([ 'Benji', 'Rebecca' ])
    CLinkedList.deleteAtEnd();
    expect(CLinkedList.display).toEqual([ 'Benji' ])
});
