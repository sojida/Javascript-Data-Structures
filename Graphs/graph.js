const Queue = require('../Queue/Queue');
const Stack = require('../Stack/Stack');

/** Class representing a graph */
class Graph {
    /**
     * Create a graph
     */
    constructor() {
        this.adjacencyList = {}
    }

    /**
     * Checks if a vertex is present
     * @param {Any} vertex vertex
     * @returns {boolean}
     */
    isPresent(vertex) {
        return this.adjacencyList[vertex] ? true : false;
    }

    /**
     * Adds vertex to a graph
     * @param {Any} vertex vertex
     */
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = []
        }
    }

    /**
     * Adds an edge betwen two vertices
     * @param {Any} source vertex
     * @param {Any} destination vertex
     */
    addEdge(source, destination) {
        if(this.isPresent(source)){
            this.addVertex(source);
        }

        if(this.isPresent(destination)){
            this.addVertex(destination);
        }

        this.adjacencyList[source].push(destination);
        this.adjacencyList[destination].push(source);
    }

    /**
     * Removes an edge from a vertex
     * @param {Any} source vertex
     * @param {Any} destination vertex
     */
    removeEdge(source, destination){
        if(this.isPresent(source)){
            this.adjacencyList[source] = this.adjacencyList[source].filter(item => item !== destination);
        }

        if(this.isPresent(destination)){
            this.adjacencyList[destination] = this.adjacencyList[destination].filter(item => item !== source);
        }
    }

    /**
     * Removes a vertex
     * @param {Any} vertex vertex
     */
    removeVertex(vertex){
        Object.keys(this.adjacencyList).forEach(node => {
            if(node !== this.adjacencyList[vertex]){
                this.removeEdge(node, vertex)
            }
        })

        delete this.adjacencyList[vertex];
    }

    /**
     * Breadth first search
     * @param {Any} startingVertex vertex
     * @returns
     */
    bfs(startingVertex) {
        // setup data stores
        const visited = {};
        const result = [];
        const queue = new Queue();

        // initilization
        visited[startingVertex] = true
        queue.enqueue(startingVertex);

        // travesal
        while(!queue.isEmpty()) {
            const currentVertex = queue.dequeue();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(vertex => {
                if(!visited[vertex]){
                    visited[vertex] = true;
                    queue.enqueue(vertex)
                }
            })
        }

        return result;
    }

    /**
     * Depth first search
     * @param {Any} startingVertex vertex
     * @returns
     */
    dfs(startingVertex) {
        // setup data stores
        const visited = {};
        const result = [];
        const stack = new Stack();

        // initilization
        visited[startingVertex] = true
        stack.push(startingVertex);

        // travesal
        while(!stack.isEmpty()) {
            const currentVertex = stack.pop();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(vertex => {
                if(!visited[vertex]){
                    visited[vertex] = true;
                    stack.push(vertex)
                }
            })
        }

        return result;
    }
}

module.exports = Graph;
