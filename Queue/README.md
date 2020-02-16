# Queue

The Queue is an abstract data type, similar to stack. The major difference betwwen a queue and a stack is that the queue is adds items at the back of the list and removes items from the front of the list. This behaviour can be seen in real life queues at the banks. It exhibits the FIFO(First In, First Out) principle. 

Data in queue is stored in the order at which they come in. This concept is useful and is applied in operating system processes.

In Javascript, Queues are easy to implement with the in built Array Data Structure. Functions available to the array are: push and unshift for insertion and removal of items respectively. Static memory can be simulated but JS is a dynamic languague so the queue size is dyanamic.

## Basic Operation of Queue Data Structure
The basic operation of the Queue includes:

- Enqueue

Adds item to the back of the queue

- Dequeue

Removes itme from the front of the queue

- Peek

Returns item at the front of the queue without removing it


- isEmpty

Checks if queue is empty


## Implementations
- [Queue](./Queue.js)
- [PriorityQueue](./PriorityQueue.js)
- [Deque](./Deque.js)


## Algorithm Analysis

| Operations     | Worst Case   |
| -------------  |:------------:| 
| Access         | O(n)         | 
| Search         | O(n)         |
| Insertion      | O(1)         |
| Deletion       | O(1)         |

## Application of Queue
- Order processes submitted to an operating system
- scheduling printer jobs
- BFS(Breadth First Search) Algorithms

## Excercises
- [PairDancers](./Exercises/Dancers.js)
- [DequePalindrome](./Exercises/DequePalindrome.js)
- [EmergencyRoom](./Exercises/EmergencyRoom.js)
