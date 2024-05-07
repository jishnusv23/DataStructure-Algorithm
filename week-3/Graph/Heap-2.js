class Heap {
  constructor() {
    this.heap = [];
  }

  swap(index1, index2) {
    let temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  peek() {
    if (this.heap.length === 0) {
      return null;
    }
    return this.heap[0];
  }

  //   heapifyUp() {
  //     let index = this.heap.length - 1;
  //     while (this.hasParent(index) && this.heap[this.getParent(index)] > this.heap[index]) {
  //       this.swap(this.getParentIndex(index), index);
  //       index = this.getParentIndex(index);
  //     }
  //   }
  heapifyUp() {
    let index = this.heap.length - 1;
    while (
      this.hasParent(index) &&
      this.heap[this.getParentIndex(index)] > this.heap[index]
    ) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  addNewElement(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  remove() {
    if (this.heap.length === 0) {
      return null;
    }
    const item = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown();

    return item;
  }
  remove2(value) {
    const index = this.heap.findIndex((item) => item === value);
    if (index === -1) {
      return null;
    }

    this.swap(index, this.heap.length - 1);
    const removed = this.heap.pop();

    this.heapifyDown();

    return removed;
  }

  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.getRightChild(index) < this.getLeftChild(index)
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }
      if (this.heap[index] < this.heap[smallerChildIndex]) {
        break;
      } else {
        this.swap(index, smallerChildIndex);
      }
      index = smallerChildIndex;
    }
  }

  hasParent(index) {
    return index >= 0
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getParent(index) {
    return this.heap[this.getParentIndex(index)];
  }

  hasLeftChild(index) {
    return 2 * index + 1 < this.heap.length;
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getLeftChild(index) {
    return this.heap[this.getLeftChildIndex(index)];
  }

  hasRightChild(index) {
    return 2 * index + 2 < this.heap.length;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  getRightChild(index) {
    return this.heap[this.getRightChildIndex(index)];
  }

  display() {
    console.log(this.heap);
  }
}

const heap = new Heap();
heap.addNewElement(3);
heap.addNewElement(7);
heap.addNewElement(12);
heap.addNewElement(2)
heap.addNewElement(1)
// heap.addNewElement(1);
// heap.remove2(1)
// console.log(heap.peek());
// console.log(heap.remove());
heap.display();
