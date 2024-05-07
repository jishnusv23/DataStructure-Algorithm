// function bubbleSort(arr){
//     let swapp=true
//     while(swapp){
//         swapp=false
//         for(let i=0;i<arr.length;i++){
//             if(arr[i]>arr[i+1]){
//                 let temp=arr[i]
//                 arr[i]=arr[i+1]
//                 arr[i+1]=temp
//                 swapp=true
//             }
//         }
//     }
//     return arr
// }
// console.log(bubbleSort([2,43,53,-43,9,-90]));

// function mergeSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     const midd=Math.floor(arr.length/2)
//     const left=arr.slice(0,midd)
//     const right=arr.slice(midd)
//     return merge(mergeSort(left),mergeSort(right))
// }

// function merge(leftArr,rightArr){
//     const Sorted=[]
//     while(leftArr.length&&rightArr.length){
//         if(leftArr[0]<rightArr[0]){
//             Sorted.push(leftArr.shift())
//         }else{
//             Sorted.push(rightArr.shift())
//         }
//     }
//     return[...Sorted,...leftArr,...rightArr]
// }

// const arr=[2,3,4,65,-87,-54,64]
// console.log(mergeSort(arr));

// function QuickSort(arr){
//     if(arr.length<=1){
//         return arr
//     }
//     let pivot=arr[arr.length-1]
//     let left=[],right=[]
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...QuickSort(left),pivot,...QuickSort(right)]
// }
// console.log(QuickSort([-3,-43,78,90,-90]));

// function  selectionSort(arr){
//     for(let i=0;i<arr.length-1;i++){
//         let minIndex=i
//         for(let j=i+1;j<arr.length-1;j++){
//             if(arr[j]<arr[minIndex]){
//                 minIndex=j
//             }
//         }
//         if(minIndex!==i){
//             let temp=arr[i]
//             arr[i]=arr[minIndex]
//             arr[minIndex]=temp
//         }
//     }
//     return  arr
// }
//*Hashtable collision

// class HashTable{
//     constructor(size){
//         this.table=new Array(size)
//         this.size=size

//     }
//     hash(key){
//         let total=0
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }
//         return total%this.size

//     }
//     set(key,value){
//         const index=this.hash(key)
//         const backet=this.table[index]
//         if(!backet){
//             this.table[index]=[[key,value]]
//         }else{
//             const samekeyItem=backet.find(item=>item[0]===key)
//             if(samekeyItem){
//                 samekeyItem[1]=value
//             }else{
//                 backet.push([key,value])
//             }
//         }
//     }
//     get(key){
//         const index=this.hash(key)
//         const backet=this.table[index]
//         if(backet){
//             const sameitem=backet.find(item=>item[0]===key)
//             if(sameitem){
//                 return sameitem[1]
//             }

//         }
//         return undefined
//     }
//     remove(key){
//         const index =this.hash(key)
//         const backet=this.table[index]
//         if(backet){
//             const sameitem=backet.find(item=>item[0]===key)
//             if(sameitem){
//                 backet.splice(backet.indexOf(sameitem),1)
//             }
//         }
//     }
//     Display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i]);
//             }
//         }
//     }
// }

// const table=new HashTable(50)

// table.set('name','jishnu')
// table.set('mane','ajith')
// table.set('age',19)

// table.Display()
// class StackUsingQueue {
//     constructor() {
//         this.queue1 = [];
//         this.queue2 = [];
//     }

//     push(element) {
//         this.queue1.push(element);
//     }

//     pop() {
//         if (this.queue1.length === 0) {
//             return null; // Stack is empty
//         }

//         // Move all elements except the last one from queue1 to queue2
//         while (this.queue1.length > 1) {
         
//             this.queue2.push(this.queue1.shift());
//         }

//         // Dequeue and return the last element from queue1
//         const poppedElement = this.queue1.shift();

//         // Swap queue1 and queue2
//         const temp = this.queue1;
//         this.queue1 = this.queue2;
//         this.queue2 = temp;

//         return poppedElement;
//     }

//     peek() {
//         if (this.queue1.length === 0) {
//             return null; // Stack is empty
//         }

//         // Move all elements except the last one from queue1 to queue2
//         while (this.queue1.length > 1) {
//             this.queue2.push(this.queue1.shift());
//         }

//         // Peek at the last element from queue1
//         const topElement = this.queue1[0];

//         // Enqueue it to queue2
//         // this.queue2.push(this.queue1.shift());

//         // // Swap queue1 and queue2
//         const temp = this.queue1;
//         this.queue1 = this.queue2;
//         this.queue2 = temp;

//         return topElement;
//     }

//     isEmpty() {
//         return this.queue1.length === 0;
//     }
// }

// // Example usage:
// const stack = new StackUsingQueue();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// stack.push(5);
// stack.push(6);
// console.log(stack.pop()); 
// console.log(stack.pop());
// console.log(stack.peek()); 
// console.log(stack.isEmpty()); 
// console.log(stack.pop()); 
// console.log(stack.isEmpty());



class QueueUsingStack {
    constructor() {
        this.stack1 = []; // For enqueue operation
        this.stack2 = []; // For dequeue operation
    }

    enqueue(element) {
        // Push the new element onto stack1
        this.stack1.push(element);
    }

    dequeue() {
        // If stack2 is empty, move all elements from stack1 to stack2
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        // Pop the top element from stack2 (which corresponds to the front of the queue)
        // This operation dequeues an element from the queue
        return this.stack2.pop();
    }

    isEmpty() {
        // The queue is empty if both stack1 and stack2 are empty
        return this.stack1.length === 0 && this.stack2.length === 0;
    }
}

// Example usage:
const queue = new QueueUsingStack();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4) 
queue.enqueue(5) 
queue.enqueue(6) 
queue.enqueue(7) 
console.log(queue.dequeue()); // Output: 1
console.log(queue.dequeue()); // Output: 2

console.log(queue.isEmpty()); // Output: false
queue.enqueue(8)
queue.enqueue(9)
console.log(queue.dequeue()); // Output: 3
console.log(queue.isEmpty()); // Output: true
