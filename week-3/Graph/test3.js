// const e = require("express");

// class Graph {
//   constructor() {
//     this.adlist = [];
//   }
//   adVertex(vertex) {
//     if (!this.adlist[vertex]) {
//       this.adlist[vertex] = new Set();
//     }
//   }
//   addEdge(vetex1, vetex2) {
//     if (!this.adlist[vetex1]) {
//       this.adVertex[vetex1];
//     }
//     if (!this.adlist[vetex2]) {
//       this.adVertex[vetex2];
//     }
//     this.adlist[vetex1].add(vetex2);
//     this.adlist[vetex2].add(vetex1);
//   }
//   Print() {
//     for (vertex in this.adlist) {
//       console.log(vertex + "->" + [...this.adlist[vertex]]);
//     }
//   }
//   bfs(startvertex) {
//     if (!this.adlist[startvertex]) {
//       return null;
//     }
//     const visited = {};
//     const queue = [];
//     queue.push(startvertex);
//     visited[startvertex] = true;
//     while (queue.length > 0) {
//       const current = queue.shift();
//       console.log(current);
//       this.adlist[current].forEach((child) => {
//         if (!visited[child]) {
//           queue.push(child);
//           visited[child] = true;
//         }
//       });
//     }
//   }
//   dfs(startVertex) {
//     const visited = {};
//     const result = [];
//     const dfsHelper = (currentVertex) => {
//       // function dfsHelper(currentVertex) {}
//       if (!this.adlist[currentVertex]) return null
//       visited[currentVertex] = true;
//       result.push(currentVertex);
//       for (const child of this.adlist[currentVertex]) {
//         if (!visited[child]) {
//           dfsHelper(child);
//         }
//       }
//     };

//     dfsHelper(startVertex);
//     return result;
//   }
// }
// const graph = new Graph();
// let vertex = ["A", "B", "C", "D"];
// let edge = [
//   ["A", "B"],
//   ["B", "C"],
//   ["C", "A"],
//   ["A", "D"],
// ];
// vertex.forEach((vertex) => graph.adVertex(vertex));
// edge.forEach((edge) => graph.addEdge(...edge));
// // graph.Print()
// console.log(graph.dfs("D"));

class Heap {
  constructor() {
    this.heap = [];
  }
  getParent(index) {
    return Math.floor((index - 1) / 2);
  }
  hasparent(index) {
    return this.getParent(index) >= 0;
  }
  getleftIndex(index) {
    return 2 * index + 1;
  }
  getrightind(index) {
    return 2 * index + 2; // Fixed: Changed from 2 * index + 1 to 2 * index + 2
  }
  left(index) {
    return this.heap[this.getleftIndex(index)];
  }
  right(index) {
    return this.heap[this.getrightind(index)];
  }
  hasleft(index) {
    return this.getleftIndex(index) < this.heap.length;
  }
  hasright(index) {
    return this.getrightind(index) < this.heap.length;
  }
  swap(index1, index2) {
    let temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }
  addNewElement(value) {
    this.heap.push(value);
    this.heapifyUp();
  }
  heapifyUp() {
    let index = this.heap.length - 1;
    while (
      this.hasparent(index) &&
      this.heap[this.getParent(index)] > this.heap[index]
    ) {
      this.swap(this.getParent(index), index);
      index = this.getParent(index);
    }
  }
  remove() {
    if (this.heap.length == 0) return null;

    const remove = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown();
    return remove;
  }
  removeValue(value) {
    const index = this.heap.findIndex((item) => item === value);
    if (index === -1) {
      return;
    }
    this.swap(index, this.heap.length - 1)
    this.heap.pop();
    this.heapifyDown(index); // Call heapifyDown with the index of the removed value
  }

  heapifyDown(index) {
    // Added index parameter
    while (this.hasleft(index)) {
      let smallerChildIndex = this.getleftIndex(index);
      if (this.hasright(index) && this.right(index) < this.left(index)) {
        smallerChildIndex = this.getrightind(index);
      }

      if (this.heap[index] < this.heap[smallerChildIndex]) {
        // Fixed: Comparison corrected
        break;
      } else {
        this.swap(index, smallerChildIndex);
      }
      index = smallerChildIndex;
    }
  }
  Display() {
    console.log(this.heap);
  }
}

const heap=new Heap()
heap.addNewElement(3);
heap.addNewElement(7);
heap.addNewElement(12);
heap.addNewElement(2)
heap.addNewElement(1)
// heap.addNewElement(1
// console.log(heap.remove());
// 
heap.remove()
heap.remove()
heap.Display()