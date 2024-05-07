// class Stack {
//   constructor() {
//     this.items = [];
//   }
//   push(value) {
//     this.items.push(value);
//   }
//   pop() {
//     this.items.pop();
//   }
//   isEmpty() {
//     return this.size == 0;
//   }
//   print() {
//     if (this.isEmpty()) {
//       console.log("hey");
//     } else {
//       console.log(this.items.toString());
//     }
//   }
// }
// const stack=new Stack()
// stack.push(2)
// stack.push(6)
// stack.push(7)
// stack.print()
// stack.pop()
// stack.print()

//*Stack using Array and Linkedlist


class Node{
  constructor(value){
    this.value=value
    this.next=null
  }
}

class Stack {
  constructor(){
    this.head=null
  }
  isEmpty(){
    return this.head===null
  }
  push(value){
    const node=new Node(value)
    if(this.isEmpty()){
      this.head=node
    }else{
      node.next=this.head
      this.head=node
    }
  }

  pop(){
    if(this.isEmpty()){
      console.log('this.head is null');
    }else{
      let deleteNode=this.head
      this.head=deleteNode.next

    }
  }
  display(){
    if(this.isEmpty()){
      console.log('The List Is Empty');
    }else{
      let cur=this.head
      while(cur){
        console.log(cur.value);
        cur=cur.next
      }
    }

  }
  peek(){
    if(this.isEmptys()){
      console.log('is empty');
    }else{
      return this.head.value
    }
  }
}
const stack =new Stack()
stack.push(10)
stack.push(20)
stack.push(30)

stack.pop()
stack.display()