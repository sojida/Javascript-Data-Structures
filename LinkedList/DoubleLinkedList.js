class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
        this.previous = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = new Node('Head')
    }

    get display() {
        const values = []
        let currentNode = this.head;
        
        while(currentNode.next) {
            values.push(currentNode.next.element)
            currentNode = currentNode.next;
        }

        return values;
    }

    get displayReverse() {
        const values = [];
        let currentNode = this.head;

        while(currentNode.next) {
            currentNode = currentNode.next;
        }

        while(currentNode.previous) {
            values.push(currentNode.element);
            currentNode = currentNode.previous;
        }

        return values;
    }


    find(element) {
        let currentNode = this.head;

        while(currentNode.element !== element && currentNode.next){
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    findEnd() {
        let currentNode = this.head;

        while(currentNode.next){
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    insertAtHead(element) {
        const newNode = new Node(element);

        if (this.head.next){
            newNode.previous = this.head;
            this.head.next.previous = newNode;
            newNode.next = this.head.next
            this.head.next = newNode;
        } else {
            newNode.previous = this.head;
            this.head.next = newNode;
        }
    }

    insertAtLink(link, element) {
        const newNode = new Node(element);
        const linkElement = this.find(link);

        if (linkElement.next){
            linkElement.next.previous = newNode;
            newNode.next = linkElement.next;
            newNode.previous = linkElement;
            linkElement.next = newNode;
        } else {
            linkElement.next = newNode;
            newNode.previous = linkElement
        }
    }

    insertAtEnd(element) {
        const newNode = new Node(element);
        const endLink = this.findEnd();
        endLink.next = newNode;
        newNode.previous = endLink;
    }

    deleteAtHead() {
        if (this.head.next) {
            if (this.head.next.next) {
                this.head.next.next.previous = this.head
            }
            this.head.next = this.head.next.next;
        }
    }

    deleteAtLink(link) {
        const currentLink = this.find(link);
        if (currentLink.element === link){
            if (currentLink.next) {
                currentLink.next.previous = currentLink.previous;
                currentLink.previous.next = currentLink.next;
            } else {
                currentLink.previous.next = null
            }
        }
    }

    deleteAtEnd() {
        const endLink = this.findEnd();
        if (endLink.previous) {
            endLink.previous.next = null
        }
    }
}

module.exports = DoubleLinkedList;
