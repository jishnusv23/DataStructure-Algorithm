class Minheap {
  constructor() {
    this.heap = [];
  }
  Swap(index1, index2) {
    let temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }
  enqueue(value, priority) {
    this.heap.push({ value, priority });
    this.heapfyUp();
  }
  dequeue() {
    if (this.heap.length == 0) {
      return null;
    }
    let remove = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0, this.heap.length);
    return remove;
  }
  heapfyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let prenindex = Math.floor((index - 1) / 2);
      if (this.heap[prenindex].priority > this.heap[index].priority) {
        this.Swap(prenindex, index);
        index = prenindex;
      } else {
        break;
      }
    }
  }
  heapifyDown(index, heapSize) {
    let leftChildIndex, rightChildIndex, minIndex;

    while (true) {
      leftChildIndex = 2 * index + 1;
      rightChildIndex = 2 * index + 2;
      minIndex = index;

      if (
        leftChildIndex < heapSize &&
        this.heap[leftChildIndex].priority < this.heap[minIndex].priority
      ) {
        minIndex = leftChildIndex;
      }

      if (
        rightChildIndex < heapSize &&
        this.heap[rightChildIndex].priority < this.heap[minIndex].priority
      ) {
        minIndex = rightChildIndex;
      }

      if (minIndex === index) {
        break;
      }

      this.Swap(index, minIndex);
      index = minIndex;
    }
  }

  Display() {
    for (let i = 0; i < this.heap.length; i++) {
      console.log(this.heap[i].value, this.heap[i].priority);
    }
  }
}
const heap=new Minheap()
heap.enqueue('task1',5)
heap.enqueue('task2',3)
heap.enqueue('task2',2)
heap.enqueue('task1',8)
heap.enqueue('task1',10)
// heap.dequeue()
heap.Display()