class BSTNode {
    constructor(element) {
        this.element = element;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(root) {
        this.root = new BSTNode(root) || null
    }

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
                }else {
                    insertion(node.left, newnode)
                }
            }
        }

        return insertion(this.root, newNode);
    }

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

    findMinNode(parentNode){
        let minNode = null;
        let node = parentNode;
        while(node.left){
            node = node.left
            minNode = node
        }

        return node;
    }

    findMaxNode(parentNode){
        let maxNode = null;
        let node = parentNode;
        while(node.right){
            node = node.right
            maxNode = node
        }

        return node;
    }

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


const tree = new BST(11);
tree.insert(6)
tree.insert(8)
tree.insert(19)
tree.insert(4)
tree.insert(21)
tree.insert(20)
tree.insert(22)
tree.insert(2);


const one = tree.search(1)
console.log(one);


module.exports = BST;
