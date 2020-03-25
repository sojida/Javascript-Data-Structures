class Node {
    constructor(element){
        this.element = element;
        this.next = null;
    }
}


class SingleLinkedList {
    constructor(){
        this.head = new Node('Head')
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

    get display() {
        const values = []
        let currentNode = this.head;
        
        while(currentNode.next) {
            values.push(currentNode.next.element)
            currentNode = currentNode.next;
        }

        return values;
    }

    insertAtHead(element) {
        const newNode = new Node(element);
        newNode.next = this.head.next;
        this.head.next = newNode;
    }

    insertAtLink(link, element) {
        const newNode = new Node(element);
        const linkElement = this.find(link) 

        if (linkElement.next) {
            newNode.next = linkElement.next;
            linkElement.next = newNode;
        } else {
            linkElement.next = newNode;
        }
        
    }

    insertAtEnd(element) {
        const newNode = new Node(element);
        const endLink = this.findEnd();
        endLink.next = newNode;
    }

    deleteAtHead() {
        if (this.head.next){
            this.head.next = this.head.next.next;
        }
    }

    deleteAtLink(link) {
        let currentNode = this.head;
        let previousNode, nextNode;

        while(currentNode.element !== link && currentNode.next){
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

        while(currentNode.next){
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        if (previousNode){
            previousNode.next = null;
        }
    }
}


module.exports = SingleLinkedList;
