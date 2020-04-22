class TreeNode {
    constructor(element){
        this.element = element;
        this.children = [];
    }

    addChild(child) {
        this.children.push(child);
    }

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


class Tree {
    constructor(root){
        this.root = root || null;
    }

    traverse(callback) {
        function traverseChilren(node){
            callback(node)
            node.children.forEach(childNode => traverseChilren(childNode))
        }

        traverseChilren(this.root)
    }

    findNode(element) {
        let foundNode;
        this.traverse((node) => {
            if (node.element === element){
                foundNode = node
            }
        })

        return foundNode;
    }

    insert(element, parentElement) {
        const newnode = new TreeNode(element);

        if (!this.root){
            this.root = newnode;
            return;
        }

        const parent = this.findNode(parentElement)
        parent.children.push(newnode)
    }

    delete(element){
        this.traverse((node) => {
            node.children.forEach((item, index) => {
                if (item.element === element){
                    node.children.splice(index, 1)
                }
            })
        })
    }

}


module.exports = { Tree, TreeNode };
