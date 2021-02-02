/**Class representing a Node */
class TreeNode {
    /**
     * Create a Node
     * @param {Object} element - The node values
     */
    constructor(element){
        this.element = element instanceof  TreeNode ? element.element : element;
        this.children = element instanceof  TreeNode ? element.children : [];
    }

    /**
     * Adds child node to list of children
     * @param {TreeNode} child - Child Node 
     */
    addChild(child) {
        this.children.push(child);
    }

    /**
     * Checks if all children Node has element
     * @param {Any} element - The element value of the node
     * @returns {TreeNode} The Node that has the element
     */
    hasChild(element){
        let found = false;
        this.children.forEach(item => {
            if (item.element === element){
                found = true;
                return;
            }
        });

        return found;
    }
}


/** Class representing a General Tree Data Structure */
class Tree {
    /**
     * Create a root node
     * @param {TreeNode} root - A TreeNode object.
     */
    constructor(root){
        this.root = root || null;
    }

    /**
     * Traverse the tree data structure (pre-order traversal)
     * @param {Function} callback - A callback function.
     * @returns {Boolean} true.
     */
    traverse(callback) {
        /** recursively traverse children of node */
        function traverseChilren(node){
            callback(node)
            node.children.forEach(childNode => traverseChilren(childNode))
        }

        traverseChilren(this.root)
        return true;
    }

    /**
     * Traverse the tree data structure (post-order traversal)
     * @param {Function} callback - A callback function.
     * @returns {Boolean} true.
     */
    posttraverse(callback) {
        /** recursively traverse children of node */
        function traverseChilren(node){
            node.children.forEach(childNode => traverseChilren(childNode))
            callback(node)
        }

        traverseChilren(this.root)
        return true;
    }

    /**
     * Finds Tree node of element
     * @param {*} element - element of a node.
     * @returns {TreeNode} A TreeNode object.
     */
    findNode(element) {
        let foundNode;
        this.traverse((node) => {
            if (node.element === element){
                foundNode = node
            }
        })

        return foundNode;
    }

    /**
     * Insert node to the tree data structure
     * @param {*} element element of the new node
     * @param {*} parentElement element of the parent node
     * @returns {Boolean} true or false
     */
    insert(element, parentElement = '') {
        const newnode = new TreeNode(element);

        if (!this.root){
            this.root = newnode;
            return true;
        }

        const parent = this.findNode(parentElement)
        if (parent) {
            parent.children.push(newnode)
            return true
        }

        return false;
    }

    /**
     * Delete node from the tree data structure
     * @param {*} element element of the node
     * @returns {Boolean}
     */
    delete(element){
        let deleted = false;

        /** deletes all children in a node */
        const deleteNode = (node) => {
            node.children.forEach((item, index) => {
                if (item.element === element){
                    node.children.splice(index, 1)
                    deleted = true;
                }
            })
        }

        this.traverse(deleteNode);
        return deleted;
    }

}


module.exports = { Tree, TreeNode };
