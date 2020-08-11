const { TreeNode, Tree } = require('../Tree');

test('Trees', () => {
    const node1 = new TreeNode('1')
    const node2 = new TreeNode('2')
    const node3 = new TreeNode('3')
    const node4 = new TreeNode('4')
    const node5 = new TreeNode('5')
    const node6 = new TreeNode('6')
    const node7 = new TreeNode('7')
    const node8 = new TreeNode('8')
    const node9 = new TreeNode('9')
    const node10 = new TreeNode('10')
    
    node2.addChild(node5)
    node2.addChild(node6)
    node2.addChild(node7)
    
    node3.addChild(node8)
    
    node4.addChild(node9)
    node4.addChild(node10)
    
    node1.addChild(node2)
    node1.addChild(node3)
    node1.addChild(node4)
    
    const tree = new Tree(node1);
    
    expect(tree.root.element).toEqual('1')

    tree.insert('11', '10');
    const nodeToTest1 = tree.findNode('10');
    expect(nodeToTest1.hasChild('11')).toBe(true);


    const deleted = tree.delete('11')
    expect(deleted).toBe(true);

    const deleted2 = tree.delete('yyyyyyy')
    expect(deleted2).toBe(false);

    const nodeToTest2 = tree.findNode('10');
    expect(nodeToTest2.hasChild('11')).toBe(false);


    const tree2 = new Tree();

    tree2.insert('2')
    expect(tree2.root.element).toBe('2')

    const callback = (node) => {
        if (node.element === '1') {
            node.element = '10'
        }
    }
    expect(tree2.posttraverse(callback)).toBe(true);

    expect(tree.insert('11', 'YyYyY')).toBe(false);
    tree2.tra
});