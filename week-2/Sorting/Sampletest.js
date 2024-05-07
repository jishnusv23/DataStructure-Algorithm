// class Stack {
//   constructor() {
//     this.items = [];
//   }



//   push(element) {
//     this.items.push(element);
//   }

//   pop() {
//     if (!this.isEmpty()) {
//       return this.items.pop();
//     }
//   }

//   isEmpty() {
//     return this.items.length === 0;
//   }

//   size() {
//     return this.items.length;
//   }
// }

// function popMiddle(stack) {
//   const auxStack = new Stack();
//   const size = stack.size();

//   // Traverse and push elements to auxiliary stack until middle is reached
//   for (let i = 0; i < Math.floor(size / 2); i++) {
//     auxStack.push(stack.pop());
//   }

//   // Remove middle element
//   const middleElement = stack.pop();

//   // Restore remaining elements to original stack
//   while (!auxStack.isEmpty()) {
//     stack.push(auxStack.pop());
//   }

//   return middleElement;
// }

// // Example usage
// const stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// stack.push(5);

// console.log("Original stack:", stack.items); // Original stack: [1, 2, 3, 4, 5]

// const middleElement = popMiddle(stack);
// console.log("Middle element:", middleElement); // Middle element: 3

// console.log("Stack after popping middle element:", stack.items); // Stack after popping middle element: [1, 2, 4, 5]
