// class StackUingQueue{
//   constructor(){
//     this.Qu1=[]
//     this.Qu2=[]
//   }
//   push(value){
//     this.Qu1.push(value)
//   }
//   pop(){
//     if(this.Qu1.length==0){
//       return null
//     }
//     while (this.Qu1.length>1) {
//       this.Qu2.push(this.Qu1.shift())
//     }
//     const popelement=this.Qu1.shift()

//     //*Swapping the que1 and que2
//     let temp=this.Qu1
//     this.Qu1=this.Qu2
//     this.Qu2=temp
//     return popelement
//   }
//   peek(){
//     if(this.Qu1.length==0){
//       return null
//     }
//     while (this.Qu1.length>1) {
//       this.Qu2.push(this.Qu1.shift())
//     }
//     const peekelement=this.Qu1.shift()

//     //*swapping the elements 
//     let temp=this.Qu1
//     this.Qu1=this.Qu2
//     this.Qu2=temp
//     return peekelement
//   }
// }
// const stack=new StackUingQueue()
// stack.push(3)
// stack.push(4)
// stack.push(5)
// stack.push(6)
// console.log(stack.pop());
// console.log(stack.peek());


// class QueueUsingStack{
//   constructor(){
//     this.Stack1=[]
//     this.Stack2=[]
//   }
//   EnQueue(value){
//     this.Stack1.push(value)
//   }
//   Dequeue(){
//     if(this.Stack2.length===0){
//       while (this.Stack1.length>0) {
//         this.Stack2.push(this.Stack1.pop())
//       }

//     }
//     return this.Stack2.pop()
//   }
//   Peek(){
//     if(this.Stack2.length===0){
//       while(this.Stack1.length>0){
//         this.Stack2.push(this.Stack1.pop())
//       }
//     }
//     return this.Stack2.pop()
//   }
//   isEmpty(){
//     return this.Stack1.length===0&&this.Stack2.length===0
//   }
// }
// const queue=new QueueUsingStack()
// queue.EnQueue(4)
// queue.EnQueue(5)
// queue.EnQueue(6)
// queue.EnQueue(7)

// console.log(queue.Peek());
