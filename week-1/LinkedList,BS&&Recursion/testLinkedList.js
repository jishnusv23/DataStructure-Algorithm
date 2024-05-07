// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//         this.prev=null
//     }
// }

// class Doublylinked {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }
//   isEmpty() {
//     return this.size === 0;
//   }
//   Prepend(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//       this.tail = node;
//     } else {
//       node.next = this.head;
//       this.head = node;
//     }
//     this.size++;
//   }
//   Append(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//       this.tail = node;
//     } else {
//       this.tail.next=node
//        this.tail=node
//     }
//     this.size++;
//   }
//   removefirst() {
//     if (this.isEmpty()) {
//       return null;
//     } else {
//       this.head = this.head.next;
//       this.size--;
//     }
//   }
//   removelast() {
//     if (this.isEmpty()) {
//       return null;
//     } else if (!this.head.next) {
//       this.head = null;
//       this.tail = null;
//       this.size--; 
//     } else {
//         let curnt=this.head
//         console.log(this.tail.value);
//         while(curnt.next!==this.tail){
//             curnt=curnt.next
//         }
//         curnt.next=null
//         this.tail=curnt

     
        
      
//     }
//   }

//   print() {
//     if (this.isEmpty()) {
//       console.log("List is Empty Add Nodes");
//     } else {
//       let curnt = this.head;
//       let listValue = [];
//       while (curnt) {
//         listValue.push(curnt.value);
//         curnt = curnt.next;
//       }
//       console.log(listValue);
//     }
//   }
// }

// const result=new Doublylinked()
// result.Prepend(4)
// result.Prepend(5)
// result.Prepend(6)
// result.print()
// result.Append(3)
// result.Append(9)
// result.print()
// result.removelast()
// result.print()

class Node{
  constructor(vale){
    this.vale=vale
    this.next=null
  }
}

class LinkedList{
  constructor(){
    this.head=null
    this.tail=null
    this.size=0
  }
  isEmpty(){
    return this.size===0
  }
  Preppend(value){
    const node=new Node(value)
    if(this.isEmpty()){
     this.head=node
     this.tail=node
    }else{
      node.next=this.head
    this.head=node
    }
    this.size++
  }
  appendd(value){
    const node=new Node(value)
    if(this.isEmpty()){
      this.head=node
      this.tail=node
    }else{
      this.tail.next=node
      this.tail=node
    }
    this.size++
  }
  removetail(){
    if(this.isEmpty()){
      return null

    }else if(!this.head.next){
      this.head=null
      this.size--

    }else{
      let prev=this.head
      while(prev.next!==this.tail){
        prev=prev.next
      }
      prev.next=null
      this.tail=prev
      this.size--
    }
  }
  circularornot(){
   if(this.isEmpty()){
    return null
   }else{
    let slow=this.head
    let fast=this.head.next
    while(fast&&fast.next){
      if(slow==fast){
        return true
      }
      slow=slow.next
      fast=fast.next.next
    }
    return false
   }
  }

  print(){
    if(this.isEmpty()){
      console.log('List empty');
    }else{
      let curnt=this.head
      let listValue=[]
      while(curnt){
        listValue.push(curnt.vale)
        curnt=curnt.next
      }
      console.log(listValue);
    }
  }
}
let result=new LinkedList()
result.Preppend(3)
result.Preppend(4)
result.Preppend(5)
result.print()
result.appendd(8)
result.removetail()
console.log(result.circularornot());
result.print()