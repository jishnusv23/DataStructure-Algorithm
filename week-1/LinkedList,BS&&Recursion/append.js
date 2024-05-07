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

  getSize() {
    return this.size;
  }

  //* Time Complexity O(1) constant
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
  //* Time Complexity O(n) linear

  Append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next !== null) {
        prev = prev.next;
      }

      prev.next = node;
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
      console.log("The linked list is empty");
    } else {
      let current = this.head;
      let listValue = "";
      while (current) {
        listValue += `${current.value} `;
        current = current.next;
      }
      console.log(listValue.trim());
    }
  }
}

// Example usage:
const result = new LinkedList();
console.log("Is empty:", result.isEmpty());
console.log("Size:", result.getSize());
// result.Add(10)
// result.insertion(120,0)
console.log("Size:", result.getSize());
result.Add(2)
result.Add(3)
result.Add(4)

result.print()
result.Append(6)
result.print()

// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }
//   isEmpty() {
//     return this.size === 0;
//   }
//   Add(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//     } else {
//       node.next = this.head;
//       this.head = node;
//     }
//   }
//   Append(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//     } else {
//       let prev = this.head;
//       while (prev.next) {
//         prev = prev.next;
//       }
//       prev.next = node;
//     }
//     this.size++;
//   }

//   print() {
//     if (this.isEmpty()) {
//       console.log("this list is empty");
//     } else {
//       let current = this.head;
//       let listValue = "";
//       while (current) {
//         listValue += `${current.value}`;
//         current = current.next;
//       }
//     }
//   }
// }

// const result = new LinkedList();
// console.log(result.isEmpty());
// result.print();
// result.Append(10);
// result.Append(20);
// result.print();
// result.Append(30);
// result.print();
