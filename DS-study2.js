// function findPair(arr, target) {
//   let set = new Set();
//   for (let i = 0; i < arr.length; i++) {
//       let complement = target - arr[i];
//       if (set.has(complement)) {
//           return [arr[i], complement];
//         } else {
//             set.add(arr[i]);
//         }
//         console.log("🚀 ~ file: study2.js:3 ~ findPair ~ set:", set)
//     }
//     return null; 
  
// }

// let arr = [3, 4, 5, 6, 8, 9];
// let target = 8;
// let newResult = findPair(arr, target);
// console.log("🚀 ~ newResult:", newResult);

// function assignment(arr, target) {
//     let count = 0; 
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== target) {
            
        
//             arr[count++] = arr[i]; // Move non-target elements to the front
//         }
//     }
//     // Fill the remaining elements with the target value
//     console.log(count,'this ');
//     while (count < arr.length) {
     
//         arr[count++] = target;
//     }
//     return arr;
// }

// let arr = [3, 4, 5, 6, 7, 6, 8, 9, 6, 2, 6];
// let target = 6;
// let result = assignment(arr, target);
// console.log("🚀 ~ result:", result);
class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.size=0

    }
    isEmpty(){
        return this.size===0

    }
    getsize(){
        return this.size
    }
}
let result=new LinkedList()
console.log('oke',result.isEmpty());
console.log('oke3',result.getsize());
