# Linked List

Linked list is a sequencial data structure. It is a collection of objects calles Nodes. Nodes are connected via links. A reference to another node is called a link. In Arryas, items are referred by postion but in linked lists, items are referred by relationship to another element of the list.

In Javascript, Linked list can be implemented using the can class based approach. Two classes are created, one for the Node which will contain the element and next(pointer to the next element). The other class will hold the methods(operations) for linked list eg: insertAtHead, find etc. 

## Basic Operations Of Linked List
The basic operations of the linked list includes:

- insertAtHead

Adds node to the head of the list

- insertAtLink

Adds node after a link to another node

- insertAtEnd

Adds node at the end of the list

- deleteAtHead

Deletes node at the head of the list

- deleteAtLink

Deletes node linked to another node

- deleteAtEnd

Deletes node at the end of the list

- find

searches for the element in the linked list and returns node

- findEnd

returns the last node in the linked list

- display

displays all items in the linked list


## Implementations
- [SingleLinkedList](./SingleLinkedList.js)
- [DoubleLinkedList](./DoubleLinkedList.js)
- [CircularLinkedList](./CircularLinkedList.js)


## Algorithm Analysis

| Operations     | Worst Case   |              |               |
| -------------  |:------------:|  ----------  | ------------- |
|                |SingleL.L     |DoubleL.L     |CircularL.L    |
| Access         | O(n)         |O(n)          |O(n)           |
| Search         | O(n)         |O(n)          |O(n)           |
| Insertion      | O(1)         |O(1)          |O(1)           |
| Deletion       | O(1)         |O(1)          |O(1)           |


## Applications of Linked List
- Image Viewer
- Previous and Next in browsers and music players
- Graphs
- Dynamic memory allocation

## Exercises
- [More Auxilary Operations](./Exercises/AuxilaryOperations.js)
