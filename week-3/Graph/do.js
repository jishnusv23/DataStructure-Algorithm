// class Heap {
//   constructor() {
//     this.heap = [];
//   }
//   getparentIndex(index) {
//     return Math.floor((index - 1) / 2);
//   }
//   hasparent(index) {
//     return this.getparentIndex(index) >= 0;
//   }
//   getLeftIndex(index) {
//     return 2 * index + 1;
//   }
//   getRightIndex(index) {
//     return 2 * index + 2;
//   }
//   Left(index) {
//     return this.heap[this.getLeftIndex(index)];
//   }
//   Rigtht(index) {
//     return this.heap[this.getRightIndex(index)];
//   }
//   hasLeft(index) {
//     return this.getLeftIndex(index) < this.heap.length;
//   }
//   hashRight(index) {
//     return this.getRightIndex(index) < this.heap.length;
//   }
//   swap(index1, index2) {
//     let temp = this.heap[index1];
//     this.heap[index1] = this.heap[index2];
//     this.heap[index2] = temp;
//   }
//   insert(value) {
//     this.heap.push(value);
//     this.heapifyUp();
//   }
//   heapifyUp() {
//     let index = this.heap.length - 1;
//     while (
//       this.hasparent(index) &&
//       this.heap[this.getparentIndex(index)] > this.heap[index]
//     ) {
//       this.swap(this.getparentIndex(index), index);
//       index = this.getparentIndex(index);
//     }
//   }
//   remove() {
//     let removevalue = this.heap[0];
//     this.heap[0] = this.heap[this.heap.length - 1];
//     this.heap.pop();
//     this.heapifyDown();
//     return removevalue;
//   }
//   // removeValue(value) {
//   //   const index=this.heap.indexOf(value)
//   //   if(index===-1) return null

//   // let lastIndex=this.heap.length-1
//   // this.heap[index]=this.heap[lastIndex]
//   // this.heap.pop()

//   // if(this.heap[index]===value) return value

//   // let parentIndex=this.getparentIndex(index)
//   //   if(parentIndex!==undefined&&this.heap[index]<this.heap[parentIndex]){
//   //     this.heapifyUp()
//   //   }else {
//   //     this.heapifyDown()
//   //   }
//   //   return value
//   // }

//   heapifyDown() {
//     let index = 0;
//     while (this.hasLeft(index)) {
//       let smallerChildIndex = this.getLeftIndex(index);
//       if (this.hashRight(index) && this.Rigtht(index) < this.Left(index)) {
//         smallerChildIndex = this.getRightIndex(index);
//       }
//       if (this.heap[index] < this.heap[smallerChildIndex]) {
//         break;
//       } else {
//         this.swap(smallerChildIndex, index);
//       }
//       index = smallerChildIndex;
//     }
//   }
//   Display() {
//     console.log(this.heap);
//   }
// }

// function heapSort(arr){
//   const heap=new Heap()
//   for(let i=0;i<arr.length;i++){
//     heap.insert(arr[i])
//   }
//   const sortedArray=[]
//   while (heap.heap.length>0) {
//     sortedArray.push(heap.remove())
//   }
//   return sortedArray
// }

// // Example usage:
// const array = [23, 22, 24, 25, 28,21];
// const sortedArray = heapSort(array);
// console.log(sortedArray); // Output: [22, 23, 24, 25, 28]

// const heap=new Heap()
// heap.insert(23)
// heap.insert(22)
// heap.insert(24)
// heap.insert(25)
// heap.insert(28)
// console.log(heap.removeValue(23));
// heap.Display()
// function heapify(arr, n, i) {
//   var largest = i;
//   var left = 2 * i + 1;
//   var right = 2 * i + 2;

//   if (left < n && arr[left] > arr[largest]) largest = left;
//   if (right < n && arr[right] > arr[largest]) largest = right;

//   if (largest != i) {
//     var temp = arr[i];
//     arr[i] = arr[largest];
//     arr[largest] = temp;

//     heapify(arr, n, largest);
//   }
// }

// function heapSort(arr) {
//   var n = arr.length;

//   for (var i = Math.floor(n / 2); i >= 0; i -= 1) {

//     heapify(arr, n, i);
//   }

//   for (i = n - 1; i > 0; i--) {
//     console.log(arr[i]+'I'+arr[0]);
//     var temp = arr[0];
//     arr[0] = arr[i];
//     arr[i] = temp;

//     heapify(arr, i, 0);
//   }
// }

// // Example usage:
// var arr = [3, 5, 1, 4, 2];
// heapSort(arr);
// console.log(arr); // [1, 2, 3, 4, 5]
class Heap {
  constructor() {
    this.heap = [];
    
  }
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getrigthindex(index) {
    return 2 * index + 2;
  }
  hasrigth(index) {
    return this.getrigthindex(index) < this.heap.length;
  }

  getLeftindex(index) {
    return 2 * index + 1;
  }
  hasLeft(index) {
    return this.getLeftindex(index) < this.heap.length;
  }
  left(index) {
    return this.heap[this.getLeftindex(index)];
  }
  right(index) {
    return this.heap[this.getrigthindex(index)];
  }
  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }
  swap(index1, index2) {
    let temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }
  addElement(value) {
    this.heap.push(value);
    this.heapifyUp();
  }
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
  remove() {
    if (this.heap.length == 0) return null;

    let remove = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown(0);
    return remove;
  }
  heapifyDown(index) {
    while (this.hasLeft(index)) {
      let smallest = this.getLeftindex(index);
      if (this.hasrigth(index) && this.right(index) > this.left(index)) {
        smallest = this.getrigthindex(index);
      }
      if (this.heap[index] < this.heap[smallest]) {
        break;
      } else {
        this.swap(index, smallest);
      }
      index = smallest;
    }
  }
  Print() {
    console.log(this.heap);
  }
}
// Create a new heap
const heap = new Heap();

// Add elements to the heap
heap.addElement(10);
heap.addElement(20);
heap.addElement(5);
heap.addElement(30);
heap.addElement(15);

// Print the heap
console.log("Heap:");
heap.Print();

// Add more elements to the heap
heap.addElement(25);
heap.addElement(40);

// Print the heap again
console.log("Heap after adding more elements:");
heap.remove()
heap.Print();
