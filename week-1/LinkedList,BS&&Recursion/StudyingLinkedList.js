// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head=null
//         this.size=0

//     }
//     isEmpty(){
//         return this.size===0
//     }
//     Prepend(value){
//         const node=new Node(value)
//         if(this.isEmpty()){
//             this.head=node
//         }else{
//             node.next=this.head
//             this.head=node
//         }
//         this.size++
//     }
//     RemoveMid(){
//         if(!this.head||!this.head.next){
//             return null
//         }
//         let slow=this.head
//         let fast=this.head
//         let prev=null
//         while(fast&&fast.next){
//             prev=slow
//             slow=slow.next
//             fast=fast.next.next
//         }
//         prev.next=slow.next
//         this.size--

//     }
//     insertion(value,index){
//         if(index<0||index>this.size){
//             return null
//         }
//         const node=new Node(value)
//         if(index===0){
//             node.next=this.head
//             this.head=node
//             this.size++
//         }else{
//             let prev=this.head
//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//             }
//             node.next=prev.next
//             prev.next=node
//             this.size++
//         }

//     }
//     removevalue(value){
//         if(this.isEmpty()) return null
//         if(this.head.value===value){
//             this.head=this.head.next
//             this.size--
//             return value
//         }
//         let prev=this.head
//         while(prev.next&&prev.next.value!==value){
//             prev=prev.next
//         }
//         if(prev.next){
//             let removenode=prev.next
//             prev.next=removenode.next
//             this.size--
//             return value
//         }


//         return null
//     }
//     removIndex(index){
//         if(this.isEmpty()){
//             return null
//         }
//         if(index===0){
//             this.head=this.head.next
//             this.size--
        
//         }
//         let prev=this.head
//         for(let i=0;i<index-1;i++){
//             prev=prev.next
//         }
//         if(prev.next){
//             let removenode=prev.next
//             prev.next=removenode.next
//             this.size--

//         }
//         return null
//     }
//     search(value){
//         if(this.isEmpty()){
//             return null
//         }
//         let i=0
//         let curnt=this.head
//         while(curnt){
//             if(curnt.value===value){
//                 return i
//             }
//             curnt=curnt.next
//             i++
//         }
//     }
//     searchind(index){
//         if(this.isEmpty()){
//             return null
//         }
//         let prev=this.head
//         for(let i=0;i<index-1;i++){
//            prev=prev.next
//         }
//         if(prev.next){
//             return prev.next.value
//         }

//     }
//     reverse(){
//         let prev=null
//         let curnt=this.head
//         while(curnt){
//             let next=curnt.next
//             curnt.next=prev
//             prev=curnt
//             curnt=next

//         }
//         this.head=prev
//     }
//     removeEnd(){
//         if(this.isEmpty()){
//             return null
//         }
//         if(!this.head.next){
//             const removenode=this.head.value
//             this.head=null
//             this.size--
//             return removenode
//         }
//         let prev=null
//         let curnt=this.head
//         while(curnt.next){
//             prev=curnt
//             curnt=curnt.next
//         }
//         prev.next=null
//         this.size--
//         return curnt.value
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log('List Was Empty');
//         }else{
//             let curnt=this.head
//             let listValue=[]
//             while(curnt){
//                 listValue.push(curnt.value)
//                 curnt=curnt.next
//             }
//             console.log(listValue);
//         }
//     }

// }
// let result=new LinkedList()
// result.Prepend(8)
// result.Prepend(9)
// result.Prepend(10)
// result.print()
// result.insertion(4,1)
// result.print()
// // result.reverse()
// console.log(result.removeEnd());

// result.print()
//     let arr = [];
//     let prev = null;
//     let current = head;

// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head=null
//         this.size=0

//     }
//     isEmpty(){
//         return this.size===0
//     }
//     Preppend(value){
//         const node=new Node(value)
//         if(this.isEmpty()){
//             this.head=node
//         }else{
//             node.next=this.head
//             this.head=node
//         }
//         this.size++
//     }
//     Append(value){
//         const node=new Node(value)
//         if(this.isEmpty()){
//             this.head=node

//         }else{
//             let curnt=this.head
//             while(curnt.next!==null){
//                 curnt=curnt.next
//             }
//             curnt.next=node
//             // node.next=null

//         }
//         this.size++
//     }
//     insertionI(value,index){
//         const node=new Node(value)
//         if(index<0||index>this.size) return null
//         if(index===0){
//             node.next=this.head
//             this.head=node
//         }else{
//             let prev=this.head
//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//             }
//           node.next=prev.next
//           prev.next=node

//         }
//         this.size++
//     }
//     reverse(){
//         if(this.isEmpty()){
//             console.log("reverse is not work the list is empty");
//         }else{
//             let prev=null
//             let curnt=this.head
//             while(curnt){
//                 let next=curnt.next
//                 curnt.next=prev
//                 prev=curnt
//                 curnt=next

//             }
//             this.head=prev
//         }
//     }
//     removeI(index){
//         if(this.isEmpty()) return null
//         if(index<0||index>this.size){
//             return null
//         }else{
//             let prev=this.head
//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//             }
//             prev.next=null
//             this.size--
//         }
//     }
//     removeV(value){
//         if(this.isEmpty())return null
//         let prev=this.head
//         while(prev.next){
//             if(prev.next.value===value){
//                 prev.next=prev.next.next

//             }
//             prev=prev.next
//         }
//         this.size--
//     }
//     removeMID(){
//         if(this.isEmpty()) return null

//         let prev=null
//         let slow=this.head
//         let fast=this.head
//         while(fast&&fast.next){
//             prev=slow
//             slow=slow.next
//             fast=fast.next.next
//         }
//         prev.next=slow.next
//         this.size--
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log('List is empty()')
//         }else{
//             let curnt=this.head
//             let listValue=[]
//             while (curnt) {
//                 listValue.push(curnt.value)
//                 curnt=curnt.next

                
//             }
//             console.log(listValue);
//         }
//     }
// }
// let result=new LinkedList()
// result.Preppend(3)
// result.Preppend(4)
// result.Preppend(5)
// result.print()
// result.Append(8)
// result.removeMID()
// // result.removeV(4)
// // result.removeI(2)
// // result.insertionI(4,3)
// // result.reverse()
// result.print()
class Node{
    constructor(value){
        this.value=value
        this.next=null
        this.prev=null
    }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  Preppend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      node.prev = current;
    }
    this.size++;
  }

  //   remove(index) {
  //     if (index == 0) {

  //       this.head = this.head.next;

  //       this.size--;
  //     } else if (index < 0 || index >= this.size) {
  //       return null;
  //     } else if (this.size  === index) {

  //       this.tail = this.tail.prev;

  //       this.size--;
  //     } else {
  //       let prev = this.head;
  //       for (let i = 0; i < index - 1; i++) {
  //         prev = prev.next;
  //       }
  //       if (prev.next) {
  //         let remove = prev.next;
  //         prev.next = remove.next;

  //         this.size--;
  //       }
  //     }
  //   }
  insert(value, input) {
    const newNode = new Node(input);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current) {
        if (current.value === value) {
          newNode.prev = current;
          newNode.next = current.next;
          if (current.next) {
            current.next.prev = newNode;
          }
          current.next = newNode;
          return; 
        }
        current = current.next;
      }
  
      console.log("Value not found in the list.");
    }
  }

  Print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curnt = this.head;
      let listValue = [];
      while (curnt) {
        listValue.push(curnt.value);
        curnt = curnt.next;
      }
      console.log(listValue);
    }
  }
}
let result=new LinkedList()
result.Preppend(4) 
result.Preppend(5) 
result.Preppend(6)
result.Print()
result.append(8);
// result.remove(2)
result.insert(8,4)

result.Print() 