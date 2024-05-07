// class Queue{
//     constructor(){
//         this.item=[]
//     }

//     Enqueue(value){
//       this.item.push(value)
//     }
//     Dequeue(){
//         this.item.shift()
//     }
//     Display(){
//         if(this.item==null){
//             console.log('lo');
//         }else{
//             console.log(this.item.toString());
//         }
//     }
// }
// const queue=new Queue()
// queue.Enqueue(3)
// queue.Enqueue(4)
// queue.Enqueue(5)
// queue.Dequeue()
// queue.Display()
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class QueueLinkedlist {
  constructor() {
    this.Frist = null;
  }

  isEmpty() {
    return this.Frist === null; 
  }

  EnQueue(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.Frist = node;
    } else {
      let current = this.Frist;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  Dequeue() {
    if (this.isEmpty()) {
      console.log("The List is Empty");
    } else {
      let out = this.Frist;
      this.Frist = out.next;
      return out;
    }
  }

  Display() {
    if (this.isEmpty()) {
      console.log("List is Empty");
    } else {
      let prev = this.Frist;
      while (prev) {
        console.log(prev.value);
        prev = prev.next; 
      }
    }
  }
}

const queue = new QueueLinkedlist();
queue.EnQueue(3);
queue.EnQueue(4);
queue.EnQueue(5);
queue.Dequeue();
queue.Display();
