/** Class representing a Node */
class Node {
    /**
     * Create a node
     * @param {Any} element element
     */
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

/**
 * Class representing a Single Linked List
 */
class SingleLinkedList {
    /**
     * Create a single linked list
     */
    constructor(){
        this.head = new Node('Head')
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
     * Inserts an item at the head of list
     * @param {Any} element element
     */
    insertAtHead(element) {
        const newNode = new Node(element);
        newNode.next = this.head.next;
        this.head.next = newNode;
    }

    /**
     * Inserts item at an already existing link
     * @param {Any} link element to be inserted at
     * @param {Any} element new element to be inserted
     */
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

    /**
     * Inserts item at the end of the list
     * @param {Any} element element
     */
    insertAtEnd(element) {
        const newNode = new Node(element);
        const endLink = this.findEnd();
        endLink.next = newNode;
    }

    /**
     * remove item at the start of the list
     */
    deleteAtHead() {
        if (this.head.next){
            this.head.next = this.head.next.next;
        }
    }

    /**
     * remove item a a link
     * @param {Any} link element
     */
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

    /**
     * remove item at the end of the list
     */
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
