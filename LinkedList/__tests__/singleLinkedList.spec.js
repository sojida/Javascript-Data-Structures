const SingleLinkedList = require('../SingleLinkedList');

test('Single Linked List', () => {
    const SLinkedList = new SingleLinkedList();

    SLinkedList.insertAtHead('Serena')
    expect(SLinkedList.display).toEqual(['Serena'])

    SLinkedList.insertAtHead('Sochi')
    expect(SLinkedList.display).toEqual(['Sochi', 'Serena'])

    SLinkedList.insertAtLink('Sochi', 'Soji')
    expect(SLinkedList.display).toEqual(['Sochi', 'Soji', 'Serena'])

    SLinkedList.insertAtLink('Serena', 'Paul')
    expect(SLinkedList.display).toEqual(['Sochi', 'Soji', 'Serena', 'Paul'])

    SLinkedList.insertAtEnd('Fred')
    expect(SLinkedList.display).toEqual(['Sochi', 'Soji', 'Serena', 'Paul', 'Fred'])

    SLinkedList.deleteAtLink('Soji')
    expect(SLinkedList.display).toEqual(['Sochi', 'Serena', 'Paul', 'Fred'])

    SLinkedList.deleteAtHead()
    expect(SLinkedList.display).toEqual(['Serena', 'Paul', 'Fred'])

    SLinkedList.deleteAtEnd()
    expect(SLinkedList.display).toEqual(['Serena', 'Paul'])

    SLinkedList.deleteAtEnd()
    expect(SLinkedList.display).toEqual(['Serena'])

    SLinkedList.deleteAtEnd()
    expect(SLinkedList.display).toEqual([])

})
