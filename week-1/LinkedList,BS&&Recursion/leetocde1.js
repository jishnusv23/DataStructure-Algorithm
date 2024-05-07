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
  add(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  removeTheValue(value) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        const removedNode = prev.next;
        prev.next = removedNode.next;
        this.size--;
        return value;
      }
      return null;
    }
  }
  print() {
    if (this.isEmpty()) {
      console.log("The list is empty");
    } else {
      let current = this.head;
      let listValues = [];
      while (current) {
        listValues.push(current.value);
        current = current.next;
      }
      console.log(listValues.join(" -> "));
    }
  }
}

const result = new LinkedList();
console.log(result.isEmpty());
result.add(39);
result.add(45)
result.print();
result.removeTheValue(39)
result.print()
