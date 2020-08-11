# Trees

Trees are non-linear data structure unlike queues, stack linked-list and arrays which are linear data structure. Data in trees are organized hierarchically. Trees are collections of nodes. Nodes are connected by edges. Each node contains data and may or may not have a child node. The first node of a tree is called a root.

## Terminologies

- Root
The node at the top of a tree

- Edge
The link between two nodes

- Parent
Any node that has an edge node to a child

- Child
A node that has a parent node

- Leaf
A node that does not have any child node

- Subtree
The descendant of a node

- Traversing
This is the process of passing through nodes on a tree in a specific order.

- Level
This represents the generations of a node


![tree](https://i.imgur.com/TZiqTaY.png)

## Types of Trees
- General Tree
This type of tree has no constraints, every node may have any number of children.

- Binary Tree
Binary tree is one where each node has at most two children. 

- Binary Search Tree
This is a type Binary Tree but with a constraint of every left node must be less than or equal to its parent node and every right node must be greater than or equal to it parent node

- AVL Tree
This is a binary search tree but it aims at achieving auto-balancing dynamically.

- Red-Black Tree
Another kind of auto-balancing tree is red-black. The red-black name is given because the Red-black tree has either red or Black painted on each node according to the red-black tree’s properties.

- N-ary Tree
The max number of children a node can have in this type of tree is N.


## Basic Operations on a Tree
- Traversal
- Search
- Insertion
- Deletion

# Tree Traversals
Traversal involves the process of visiting all nodes on a tree. In linear data-structures, traversing involves visiting each element once. This could be left to right or vice versa. Trees are non-linear data structures and they have various ways to be traversed. 

There are two types on traversal algorithms which are 
1. Depth-First Traversal
2. Breadth-First Traversal


### Depth-First Traversal
This algorithms traverses a tree in a downward motion. You go as deep as possible down one path before backtracking to try a different route.

The three(3) types of depth-first traversals are:
1. PreOrder Traversal
Visits the parent first then left and right children 
![](https://i.imgur.com/CNHymUk.png)


2. InOrder Traversal
Visits the left child, then parent and right child
![](https://i.imgur.com/lVp63iR.png)


3. PostOrder Traversal
Visits the left child then the right child then the parent
![](https://i.imgur.com/oYtd0C9.png)



### Breadth First Traversal
This has only one type of traversal- Level Order Traversal. The process involves visiting all nodes from top to bottom and from left to right. Nodes on a level is visited before moving to the next level.
![](https://i.imgur.com/quWbll9.png)
