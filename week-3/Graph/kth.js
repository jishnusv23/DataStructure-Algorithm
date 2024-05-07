function findKthSmallest(arr, k) {
  const heap = []; // Min-heap

  // Function to insert elements into the min-heap
  function insert(value) {
    heap.push(value);
    bubbleUp(heap.length - 1);
  }

  // Function to maintain the heap property by bubbling up
  function bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (heap[parentIndex] <= heap[index]) break;
      [heap[parentIndex], heap[index]] = [heap[index], heap[parentIndex]];
      index = parentIndex;
    }
  }

  // Insert the first k elements into the min-heap
  for (let i = 0; i < k; i++) {
    insert(arr[i]);
  }

  // For the remaining elements, if they are smaller than the root of the min-heap, replace the root with the element and heapify
  for (let i = k; i < arr.length; i++) {
    if (arr[i] < heap[0]) {
      heap[0] = arr[i];
      heapify(0);
    }
  }

  // Function to maintain the heap property by bubbling down
  function heapify(index) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    let smallestIndex = index;

    if (
      leftChildIndex < heap.length &&
      heap[leftChildIndex] < heap[smallestIndex]
    ) {
      smallestIndex = leftChildIndex;
    }

    if (
      rightChildIndex < heap.length &&
      heap[rightChildIndex] < heap[smallestIndex]
    ) {
      smallestIndex = rightChildIndex;
    }

    if (smallestIndex !== index) {
      [heap[index], heap[smallestIndex]] = [heap[smallestIndex], heap[index]];
      heapify(smallestIndex);
    }
  }

  // Return the root of the min-heap, which is the kth smallest element
  return heap[0];
}

// Example usage:
const arr = [7, 10, 4, 3, 20, 15];
const k = 3
console.log("The", k, "th smallest element is:", findKthSmallest(arr, k));
