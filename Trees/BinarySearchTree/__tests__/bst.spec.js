const BST = require('../BST');

test('Binary Search Tree', () => {
    const tree = new BST(11);
    tree.insert(6)
    tree.insert(8)
    tree.insert(19)
    tree.insert(4)
    tree.insert(21)
    tree.insert(20)
    tree.insert(22)
    tree.insert(2);

    const twenty = tree.search(20)
    expect(twenty.element).toEqual(20)

    const four = tree.search(4)
    expect(four.element).toEqual(4)

    const fifty = tree.search(50)
    expect(fifty).toEqual(null)

    const one = tree.search(1)
    expect(one).toEqual(null)

    expect(tree.findMaxNode(tree.root).element).toEqual(22)
    expect(tree.findMinNode(tree.root).element).toEqual(2)

    expect(tree.inOrder(tree.root)).toEqual([2,4,6,8,11,19,20,21,22])
    expect(tree.preOrder(tree.root)).toEqual([11,6,4,2,8,19,21,20,22])
    expect(tree.postOrder(tree.root)).toEqual([2,4,8,6,20,22,21,19,11])
    
    

    tree.delete(4)
    expect(tree.inOrder(tree.root)).toEqual([2,6,8,11,19,20,21,22])

    tree.delete(8)
    expect(tree.inOrder(tree.root)).toEqual([2,6,11,19,20,21,22])

    tree.delete(21)
    expect(tree.inOrder(tree.root)).toEqual([2,6,11,19,20,22])

    tree.delete(50)
    expect(tree.inOrder(tree.root)).toEqual([2,6,11,19,20,22])

    tree.insert(3)
    expect(tree.inOrder(tree.root)).toEqual([2,3,6,11,19,20,22])

    tree.delete(2)
    expect(tree.inOrder(tree.root)).toEqual([3,6,11,19,20,22])
})
