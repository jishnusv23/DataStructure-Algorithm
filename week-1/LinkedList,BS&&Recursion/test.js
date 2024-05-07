class Node{
    constructor(value){
        this.value=value
        this.next=null
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

  Append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let curnt = this.head;
      while (curnt.next) {
        curnt = curnt.next;
      }
      curnt.next = node;
    }
    this.size++;
  }
  insertion(value, index) {
    const node = new Node(value);
    if (this.isEmpty()) {
      return null;
    } else if (index == 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
    }
    this.size++;
  }
  searchValue(value) {
    if (this.isEmpty()) {
      return null;
    } else if (this.head.value === value) {
      return 0;
    } else {
      let curn = this.head;
      let i = 1;
      while (curn.next.value != value) {
        i++;
        curn = curn.next;
      }
      return i;
    }
    return null;
  }
  searchI(index) {
    if (this.isEmpty()) {
      return null;
    } else if (index < 0 || index > this.size) {
      return null;
    } else if (index == 0) {
      return this.head.value;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      return prev.next.value;
    }
  }
  deleteI(index) {
    if (this.isEmpty()) {
      return null;
    } else if (index == 0) {
      this.head = this.head.next;
      this.size--;
    } else if (index < 0 || index > this.size) {
      return null;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      if (prev.next) {
        const removedNode = prev.next;
        prev.next = removedNode.next;
        this.size--;
        return removedNode;
      }
    }
  }
  removeEnd() {
    if (this.isEmpty()) {
      return; // List is empty, nothing to remove
    } else if (!this.head.next) {
      // Only one node in the list
      this.head = null;
      this.size--;
      return;
    }

    let current = this.head;
    while (current.next) {
      if (!current.next.next) {
        // Found the last node
        current.next = null;
        this.size--;
        return;
      }
      current = current.next;
    }
  }

  removeVal(value) {
    if (this.isEmpty()) {
      return null;
    } else if (this.head.value == value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value != value) {
        prev = prev.next;
      }
      if (prev.next) {
        let removedNode = prev.next;
        prev.next = removedNode.next;
        this.size--;
        return value;
      }
    }
  }
  revers() {
    if (this.isEmpty()) {
      return null;
    } else {
      let prev = null;
      let curn = this.head;
      while (curn) {
        let next = curn.next;
        curn.next = prev;
        prev = curn;
        curn = next;
      }
      this.head = prev;
    }
  }
  removemidd() {
    if (this.isEmpty()) {
      return null;
    } else {
      let prev = null;
      let slow = this.head;
      let fast = this.head;
      while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
      }
      prev.next = slow.next;
      this.size--;
    }
  }

  print() {
    if (this.isEmpty()) {
      console.log("List elements Is empty");
    } else {
      let curnts = this.head;
      let listValue = [];
      while (curnts) {
        listValue.push(curnts.value);
        curnts = curnts.next;
      }
      console.log(listValue);
    }
  }
}
let result=new LinkedList()
result.print()
result.Preppend(4)
result.Preppend(3)
result.Preppend(2)
result.Append(8)
result.insertion(3,2)
result.removeEnd()

// console.log(result.searchI(4));
// console.log(result.deleteI(4));

result.print()