/**Class representing a Node in a Binary Tree */
class BSTNode {
    /**
     * Creates a Node object 
     * @param {*} element - The node value
     */
    constructor(element) {
        this.element = element;
        this.left = null;
        this.right = null;
    }
}

/**Class representing the Binary Search Tree */
class BST {
    /**
     * Cerates a root node
     * @param {*} root - The root value
     */
    constructor(root) {
        this.root = new BSTNode(root) || null
    }

    /**
     * Inserts node into tree structure
     * @param {*} element A value to add to the node
     * @returns {void}
     */
    insert(element) {
        const newNode = new BSTNode(element);

        function insertion(node, newnode){

            if (newnode.element > node.element) {
                if (node.right === null){
                    node.right = newnode;
                } else {
                    insertion(node.right, newnode)
                }
            }

            if (newnode.element < node.element) {
                if (node.left === null){
                    node.left = newNode;
                } else {
                    insertion(node.left, newnode)
                }
            }
        }

        return insertion(this.root, newNode);
    }

    /**
     * Search Binary Tree
     * @param {*} element node element to find
     * @returns {BSTNode} node
     */
    search(element) {
        
        function findNode(node, elementToFind){
            if (!node) {
                return null
            }

            if (node.element === elementToFind){
                return node;
            }

            if (elementToFind > node.element){
                return findNode(node.right, elementToFind)
            }

            if (elementToFind < node.element){
                return findNode(node.left, elementToFind)
            }

        }

        return findNode(this.root, element)

    }

    /**
     * Finds min node
     * @param {BSTNode} parentNode node
     * @returns {BSTNode}
     */
    findMinNode(parentNode){
        let minNode = null;
        let node = parentNode;
        while(node.left){
            node = node.left
            minNode = node
        }

        return node;
    }

    /**
     * Finds max node
     * @param {BSTNode} parentNode node
     * @returns {BSTNode}
     */
    findMaxNode(parentNode){
        let maxNode = null;
        let node = parentNode;
        while(node.right){
            node = node.right
            maxNode = node
        }

        return node;
    }

    /**
     * Traverses Binary Search Tree in-order
     * @param {BSTNode} node node object
     * @returns {Array} list on node elements
     */
    inOrder(node){
        const arr = [];
        function traverse(node, data){
            if(node !== null){
                traverse(node.left, data)
                data.push(node.element);
                traverse(node.right, data)
            }
        }

        traverse(node, arr);
        return arr
    }

    /**
     * Traverses Binary Search Tree pre-order
     * @param {BSTNode} node node object
     * @returns {Array} list on node elements
     */
    preOrder(node){
        const arr = [];
        function traverse(node, data){
            if(node !== null){
                data.push(node.element);
                traverse(node.left, data)
                traverse(node.right, data)
            }
        }

        traverse(node, arr);
        return arr
    }

    /**
     * Traverses Binary Search Tree post-order
     * @param {BSTNode} node node object
     * @returns {Array} list on node elements
     */
    postOrder(node){
        const arr = [];
        function traverse(node, data){
            if(node !== null){
                traverse(node.left, data)
                traverse(node.right, data)
                data.push(node.element);
            }
        }

        traverse(node, arr);
        return arr
    }

    /**
     * Delete node from Binary Search Tree
     * @param {*} element element of node
     * @returns {void}
     */
    delete(element){
        const deleteNode =(node, elementToDelete) => {
            if (!node) {
                return null
            }

            if (elementToDelete < node.element) {
                node.left = deleteNode(node.left, elementToDelete)
                return node;
            }

            if (elementToDelete > node.element) {
                node.right = deleteNode(node.right, elementToDelete)
                return node;
            }

            if (node.element === elementToDelete){
                // node has no child
                if (!node.left && !node.right){
                    node = null;
                    return node
                }

                // node has one child
                if (!node.left && node.right){
                    return node.right
                }

                if (!node.right && node.left){
                    return node.left
                }

                // node has two children
                if (node.right && node.left){
                    const minRightNode = this.findMinNode(node.right);
                    node.element = minRightNode.element
                    node.right = deleteNode(node.right, minRightNode.element)
                    return node;

                }
            }


        }

        this.root = deleteNode(this.root, element);
    }
}

module.exports = BST;
