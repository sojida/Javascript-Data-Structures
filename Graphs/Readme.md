# Graph Data Structure

Graph is a common data structure that consists of a finite set of node(or vertices) and a set of edges connecting them.

## Terminologies and Properties of a Graph

- Node/Vertex
The node or the vertex is the object of each graph

- Edge
This is the path between two vertices. It shows the connection between two vertices or nodes. An edge is represented as a pair e.g: (A,B) shows that A is connected to B

- Adjacency
This occurs when two nodes are connect to each other through an edge

- Directed edges
This are edges that have a one way connection

![](https://i.imgur.com/HDnHHch.png)

- Undirected edges
This are edges that have a two way connection

![](https://i.imgur.com/VPMHmIz.png)


- Digraph/Directed graph
This is a type of graph with only directed edges

![](https://i.imgur.com/s8P3Crw.png)


- Undirected graph
This a type of graph with only undirected edges

![](https://i.imgur.com/5kvlIHT.png)


- Weighted graph
This graph has values associated with its edges. The vise versa of this is called an Unweighted graph

![](https://i.imgur.com/SVsOEiL.png)


- Self loop edge
This type of edge has both its origin and destination point to the same vertex

![](https://i.imgur.com/YPYWxH3.png)


- Multiedge
This occurs when vertex/node has more than one edge connection from another vertex

![](https://i.imgur.com/wAOsJMw.png)


- Simple graph
This a type of graph that contains no multiedge or self-loops


- Dense graph
A graph can be said to be dense when the number of edges on the graph is close to or equal to the maximum number of edges the graph can have

- Sparse graph
A graph can be said to be dense when the number of edges on the graph is not close to the maximum number of edges the graph can have. This is an important factor in picking the data structure for a graph

- Path
This is a sequence of vertices where each adjacent pair is connected by an edge. Simply put, it is the sequence of edges between tow vertices.

    ![](https://i.imgur.com/NSYVVaa.png)

    A path exist between A and D as A -> B -> D


- Simple Path
A Path where both edges and vertices are not repeated

- Trail
A path where edges cannot be repeated but the vertices can be repeated

- Strongly connected graph
A path from any vertex to any other vertex is possible. If the graph is an undirected graph, it is called a connected graph.


## Graph Representation

Graphs can be represented in the the following data structures:

- Adjacency List
- Adjacency Matrix
- Incidence Matrix


### Adjacency List 
A collection of unordered list used to represent a finite graph. Each list describes the set of neighbors of a vertex in the graph. 

When a graph is sparse, Adjacency list is a better data structure that can be used to store the graph.

#### Pros
- Less memory consumption
- clearly shows nodes connections
- easy deletion and insertion of vertex

#### Cons
- increased time to check adjacency


![](https://i.imgur.com/fyNTtP9.png)


Representing the above graph as an adjacency list will be:

![](https://i.imgur.com/H0UJyxT.png)

### Algorithm Analysis

| Operations           | Worst Case   |
| -------------        |:------------:| 
| Add Vertex           | O(1)         | 
| Add Edge             | O(1)         |
| Remove Vertex        | O(V)         |
| Remove Edge          | O(V * V)     |
| Traverse Vertex      | O(V)         |
| Find Adjacent Node   | O(V)         |


### Adjacency Matrix

This is a square matrix used to represent a finite graph. The element of the matrix cell indicates whether pairs of vertices are adjacent of not in the graph.

In the matix, 1 is used to show a connection while 0 indicates no connection. If the graph was a weighted graph, the weight would used instead of 1 to show connection

#### Pros
- Quick Look up time

#### Cons
- more memory to store cells


![](https://i.imgur.com/uhhKzZD.png)



Representing the above graph as an adjacency list will be:

![](https://i.imgur.com/5nak2tc.png)


### Algorithm Analysis

| Operations           | Worst Case   |
| -------------        |:------------:| 
| Add Vertex           | O(v)         | 
| Add Edge             | O(E)         |
| Remove Vertex        | O(1)         |
| Remove Edge          | O(1)     |
| Traverse Vertex      | O(V)         |
| Find Adjacent Node   | O(1)         |


### Incidence Matrix

This matrix shows the relationship between two classes of objects. In a graph data structure, it shows the relationship between the vertices and the edges of the graph in the matrix. If a graph has 3 vertices and 6 edges, the matrix will be represented as a 3 X 6 matrix. The cells are filled with 0, 1 and -1, where;

0 indicates no connection(edge)
1 indicates outgoing edge
-1 indicates incoming edge

This has the same pros and cons as the Adjacency Matrix
It also shares the same Algorithm analysis

![](https://i.imgur.com/sLUPEFU.png)

Representing the above graph will be:
![](https://i.imgur.com/aARhVaJ.png)

### Graph Traversal Algorithms
- Breadth First Search 
The Breadth First Search (BFS) traversal is an algorithm, which is used to visit all of the nodes of a given graph. In this traversal algorithm one node is selected and then all of the adjacent nodes are visited one by one. After completing all of the adjacent vertices, it moves further to check another vertices and checks its adjacent vertices again. A queue is uses to remember the last vertices

- Depth First Search
The Depth First Search (DFS) is a graph traversal algorithm. In this algorithm one starting vertex is given, and when an adjacent vertex is found, it moves to that adjacent vertex first and try to traverse in the same manner.