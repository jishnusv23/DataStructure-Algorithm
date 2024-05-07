class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getsize() {
    return this.size;
  }
  Add(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  print() {
    if (this.isEmpty()) {
      console.log("The linked list is Empty");
    } else {
      let curnt = this.head; //todo assing new varible for tarvse
      let listValue = ' ';
      while (curnt) { 
        listValue +=  `${curnt.value}`;
        curnt = curnt.next;
      }
      console.log(listValue);
    }
  }
}
const result = new LinkedList();
console.log("🚀 ~ file: print.js:46 ~ result:", result.isEmpty());
result.print();
result.Add(10);
result.print();

result.Add(20);
result.print()
result.Add(30);
result.print();
console.log("🚀 ~ file: print.js:46 ~ result:", result.getsize());
