class Node {
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = new Node('Head');
        this.head.next = this.head;
    }

    get display() {
        const values = [];
        let currentNode = this.head;

        while(currentNode.next.element !== 'Head') {
            values.push(currentNode.next.element)
            currentNode = currentNode.next
        }

        return values;
    }

    find(element) {
        let currentNode = this.head;

        while(currentNode.element !== element && currentNode.next.element !== 'Head') {
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    findEnd() {
        let currentNode = this.head;

        while(currentNode.next.element !== 'Head'){
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    insertAtHead(element) {
        const newNode = new Node(element);
        newNode.next = this.head.next;
        this.head.next = newNode;
    }

    insertAtLink(link, element) {
        const newNode = new Node(element);
        const linkElement = this.find(link) 
        newNode.next = linkElement.next;
        linkElement.next = newNode;   
    }

    insertAtEnd(element) {
        const newNode = new Node(element);
        const endLink = this.findEnd();
        endLink.next = newNode;
        newNode.next = this.head;
    }

    deleteAtHead() {
        if (this.head.next.element !== 'Head') {
            this.head.next = this.head.next.next
        }
    }

    deleteAtLink(link) {
        let currentNode = this.head;
        let previousNode, nextNode;

        while(currentNode.element !== link && currentNode.next.element !== 'Head'){
            previousNode = currentNode;
            nextNode = currentNode.next.next
            currentNode = currentNode.next;
        }

        if (currentNode.element === link){
            previousNode.next = nextNode;
        }
    }

    deleteAtEnd() {
        let currentNode = this.head;
        let previousNode;

        while(currentNode.next.element !== 'Head'){
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        if (previousNode){
            previousNode.next = this.head;
        }
    }
}

module.exports = CircularLinkedList;
