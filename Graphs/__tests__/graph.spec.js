const Graph = require('../graph');

test('Graph', () => {
    const graph = new Graph();

    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);
    graph.addVertex(4);
    graph.addVertex(5);
    graph.addVertex(6);
    graph.addVertex(7);

    expect(Object.keys(graph.adjacencyList).length).toEqual(7);


    graph.addEdge(1,3)
    graph.addEdge(1,2)

    expect(graph.adjacencyList[1].length).toEqual(2);

    graph.addEdge(2,7)
    graph.addEdge(2,4)
    graph.addEdge(5,4)
    graph.addEdge(4,6)


    const bfs = graph.bfs(2);
    expect(bfs).toEqual([2, 1, 7, 4,3, 5, 6]);

    const dfs = graph.dfs(2);
    expect(dfs).toEqual([2, 4, 6, 5, 7, 1, 3]);

    graph.removeEdge(1,3)
    expect(graph.adjacencyList[1].length).toEqual(1);

    graph.removeVertex(4)

    expect(graph.adjacencyList[4]).toEqual(undefined);
})
