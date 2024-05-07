function mergeHeaps(heap1, heap2) {
  // Concatenate the two heaps into one array
  const mergedHeap = heap1.concat(heap2);

  // Perform heapify operations to maintain the heap property
  for (let i = Math.floor(mergedHeap.length / 2) - 1; i >= 0; i--) {
    heapify(mergedHeap, mergedHeap.length, i);
  }

  return mergedHeap;
}

// Helper function: Heapify
function heapify(arr, n, i) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    let temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;

    heapify(arr, n, largest);
  }
}

// Example usage:
const heap1 = [3, 5, 8];
const heap2 = [2, 4, 7];
const mergedHeap = mergeHeaps(heap1, heap2);
console.log("Merged heap:", mergedHeap);
