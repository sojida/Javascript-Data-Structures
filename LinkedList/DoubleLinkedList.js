/** Class representing a Node */
class Node {
    /**
     * Create a node
     * @param {Any} element element
     */
    constructor(element) {
        this.element = element;
        this.next = null;
        this.previous = null;
    }
}

/**
 * Class representing a Double Linked List
 */
class DoubleLinkedList {
    /**
     * Create a double linked list
     */
    constructor() {
        this.head = new Node('Head')
    }

    /**
     * Displays the list of items in the list
     * @returns {Array} list of items
     */
    get display() {
        const values = []
        let currentNode = this.head;
        
        while(currentNode.next) {
            values.push(currentNode.next.element)
            currentNode = currentNode.next;
        }

        return values;
    }

    /**
     * Displays the a reverse list of items
     * @returns {Array} list of items
     */
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


    /**
     * Finds given element in the list
     * @param {Any} element element
     * @returns {Node} node
     */
    find(element) {
        let currentNode = this.head;

        while(currentNode.element !== element && currentNode.next){
            currentNode = currentNode.next;
        }

        return currentNode;
    }


    /**
     * Finds the last item in the list
     * @returns {Node} node
     */
    findEnd() {
        let currentNode = this.head;

        while(currentNode.next){
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    /**
     * Inserts an item at the head of list
     * @param {Any} element element
     */
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

    /**
     * Inserts item at an already existing link
     * @param {Any} link element to be inserted at
     * @param {Any} element new element to be inserted
     */
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

    /**
     * Inserts item at the end of the list
     * @param {Any} element element
     */
    insertAtEnd(element) {
        const newNode = new Node(element);
        const endLink = this.findEnd();
        endLink.next = newNode;
        newNode.previous = endLink;
    }

    /**
     * remove item at the start of the list
     */
    deleteAtHead() {
        if (this.head.next) {
            if (this.head.next.next) {
                this.head.next.next.previous = this.head
            }
            this.head.next = this.head.next.next;
        }
    }

    /**
     * remove item a a link
     * @param {Any} link element
     */
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

    /**
     * remove item at the end of the list
     */
    deleteAtEnd() {
        const endLink = this.findEnd();
        if (endLink.previous) {
            endLink.previous.next = null
        }
    }
}

module.exports = DoubleLinkedList;
