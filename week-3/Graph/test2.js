class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Helper function to get index of left child
  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  // Helper function to get index of right child
  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  // Helper function to check if a node has a left child
  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.heap.length;
  }

  // Helper function to check if a node has a right child
  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.heap.length;
  }

  // Helper function to retrieve the value of left child
  leftChild(index) {
    return this.heap[this.getLeftChildIndex(index)];
  }

  // Helper function to retrieve the value of right child
  rightChild(index) {
    return this.heap[this.getRightChildIndex(index)];
  }

  // Helper function to swap two elements in the heap
  swap(index1, index2) {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  // Function to heapify up the heap after insertion
  heapifyUp() {
    let index = this.heap.length - 1;
    while (
      index > 0 &&
      this.heap[index] < this.heap[Math.floor((index - 1) / 2)]
    ) {
      const parentIndex = Math.floor((index - 1) / 2);
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  // Function to heapify down the heap
  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.rightChild(index) < this.leftChild(index)
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }

      // If the parent node is greater than the smaller child node
      if (this.heap[index] < this.heap[smallerChildIndex]) {
        break;
      } else {
        this.swap(index, smallerChildIndex);
      }
      index = smallerChildIndex;
    }
  }

  // Function to insert a new element into the heap
  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  // Function to remove the root (minimum element) from the heap
  removeMin() {
    if (this.heap.length === 0) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return min;
  }
}

// Example usage:
const minHeap = new MinHeap();
minHeap.insert(3);
minHeap.insert(7);
minHeap.insert(12);
minHeap.insert(2);
minHeap.insert(17);

console.log(minHeap.heap); // Output: [5, 7, 15, 12, 10]

minHeap.removeMin();
console.log(minHeap.heap); // Output: [7, 10, 15, 12]


