const Queue = require('../Queue/Queue');
const Stack = require('../Stack/Stack');

class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    isPresent(vertex) {
        return this.adjacencyList[vertex] ? true : false;
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = []
        }
    }

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

    removeEdge(source, destination){
        if(this.isPresent(source)){
            this.adjacencyList[source] = this.adjacencyList[source].filter(item => item !== destination);
        }

        if(this.isPresent(destination)){
            this.adjacencyList[destination] = this.adjacencyList[destination].filter(item => item !== source);
        }
    }

    removeVertex(vertex){
        Object.keys(this.adjacencyList).forEach(node => {
            if(node !== this.adjacencyList[vertex]){
                this.removeEdge(node, vertex)
            }
        })

        delete this.adjacencyList[vertex];
    }

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
