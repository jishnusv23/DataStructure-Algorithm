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
  insertion(value, index) {
    if (index < 0 || index > this.size) {
      console.log("lesthen of grater than");
      return;
    }
    if (index === 0) {
      this.Add(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }
  print() {
    if (this.isEmpty()) {
      console.log("The list is Empty");
    } else {
      let currnt = this.head;
      let listValue = []
      while (currnt) {
        listValue.push(currnt.value);
        currnt = currnt.next;
      }
      console.log(listValue);
    }
  }
}

let result = new LinkedList();
console.log(result.isEmpty());
result.print();
result.Add(40)

result.print();
result.insertion(10,0)
result.print()
result.insertion(70,0)
result.print()
result.insertion(60,1)
result.print()
