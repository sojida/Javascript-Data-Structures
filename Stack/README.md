# Stack

A stack is an abstract data type which observes the LIFO(Last In First Out) Principle. The major operations on a stack is pushing items to the top of the stack and removing(poping) item from the top of the stack. 

In Javascript, Stacks are easy to implement with the in built Array Data Structure. Arrays in JS comes with out of the box functions such a pop and push. This can be used to simulate a Stack. The memory of the stack is dynamic being the JS is a dynamic language but can be limited if conditioned.

## Basic Operations of Stack Data Structure
The basic operations of the Stack includes:

- Push

Add item to the top of the stack

- Pop

Remove item from the top of the stack

- Peek

Returns the value stored at the top of the stack without removing it from the stack

- Clear

Removes all items from the stack

- Length

Returns the size of the stack

- isFull

checks if stack is full

- isEmpty

checks if stack is empty

## Implementations
- [Stack](./Stack.js)
- [Stack With Limit](./ClassicStack.js)

## Algorithm Analysis

| Operations     | Worst Case   |
| -------------  |:------------:| 
| Access         | O(n)         | 
| Search         | O(n)         |
| Insertion      | O(1)         |
| Deletion       | O(1)         |

## Application of Stack
Stack application can be found in the following:
- Functions calls
- Undo/redo in text editors
- Back/Forward in browsers
- Remembering points in DFS algorithm

## Excercises
Here are some excercises on stack
- [BalancedParenthesis](./Exercises/BalancedParenthesis.js)
- [BaseConverter](./Exercises/BaseConverter.js)
- [Palindrome](./Exercises/Palindrome.js)
- [PezDispenser](./Exercises/PezDispenser.js)
- [RecursionSimulation](./Exercises/RecursionSimulation.js)
- [InfixToPostfixConverter](./Exercises/InfixToPostfixConverter.js)
- [PostfixEvaluation](./Exercises/PostfixEvaluation.js)
